import { createHash } from "node:crypto";
import { access, mkdir, open, readFile, readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const libraryDirectory = path.dirname(fileURLToPath(import.meta.url));

export const projectRoot = path.resolve(libraryDirectory, "../..");
export const wikiRoot = path.join(projectRoot, "wiki");
export const stateRoot = path.resolve(projectRoot, process.env.ALTWWII_WRITER_STATE || ".altwwii-writer-state");
export const locksRoot = path.join(stateRoot, "locks");
export const handoffsRoot = path.join(stateRoot, "handoffs");
export const freezePath = path.join(stateRoot, "PUBLISH_FREEZE");

const mutexPath = path.join(stateRoot, "STATE_MUTEX");

export function parseArguments(values) {
  const positional = [];
  const options = new Map();
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith("--")) {
      positional.push(value);
      continue;
    }
    const name = value.slice(2);
    const next = values[index + 1];
    if (next === undefined || next.startsWith("--")) {
      options.set(name, true);
      continue;
    }
    if (options.has(name)) {
      const existing = options.get(name);
      options.set(name, Array.isArray(existing) ? [...existing, next] : [existing, next]);
    } else {
      options.set(name, next);
    }
    index += 1;
  }
  return { positional, options };
}

export function requireOption(options, name) {
  const value = options.get(name);
  if (typeof value !== "string" || !value.trim()) throw new Error(`Missing required --${name} value.`);
  return value.trim();
}

export function validateIdentity(value, label) {
  if (!/^[a-z0-9][a-z0-9-]{0,63}$/i.test(value)) {
    throw new Error(`${label} must contain only letters, digits, and hyphens.`);
  }
  return value;
}

export async function ensureStateDirectories() {
  await mkdir(locksRoot, { recursive: true });
  await mkdir(handoffsRoot, { recursive: true });
}

export async function withStateMutex(action) {
  await ensureStateDirectories();
  const deadline = Date.now() + 5000;
  let handle;
  while (!handle) {
    try {
      handle = await open(mutexPath, "wx");
      await handle.writeFile(`${process.pid}\n`, "utf8");
    } catch (error) {
      if (error.code !== "EEXIST" || Date.now() >= deadline) throw error;
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  try {
    return await action();
  } finally {
    await handle.close();
    await unlink(mutexPath).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
  }
}

export async function normalizeArticlePath(value) {
  if (!value) throw new Error("An article path is required.");
  const absolute = path.resolve(projectRoot, value);
  const relativeToWiki = path.relative(wikiRoot, absolute);
  if (!relativeToWiki || relativeToWiki.startsWith("..") || path.isAbsolute(relativeToWiki)) {
    throw new Error("Article path must resolve inside wiki/.");
  }
  if (path.extname(relativeToWiki).toLowerCase() !== ".html") {
    throw new Error("Logical article locks must target a wiki HTML shell.");
  }
  try {
    const details = await stat(absolute);
    if (!details.isFile()) throw new Error("Article path is not a file.");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  return {
    absolute,
    relative: `wiki/${relativeToWiki.split(path.sep).join("/")}`,
    slug: path.basename(relativeToWiki, ".html")
  };
}

export function lockPathForArticle(article) {
  const digest = createHash("sha256").update(article.relative).digest("hex").slice(0, 24);
  return path.join(locksRoot, `${digest}.json`);
}

export async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

export async function readOptionalJson(filePath) {
  try {
    return await readJson(filePath);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

export async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function listLocks() {
  await ensureStateDirectories();
  const names = (await readdir(locksRoot)).filter((name) => name.endsWith(".json")).sort();
  return Promise.all(names.map((name) => readJson(path.join(locksRoot, name))));
}

export async function calculateArticleHash(article) {
  if (!(await fileExists(article.absolute))) return null;
  const html = await readFile(article.absolute, "utf8");
  const inputs = [[article.relative, html]];
  const scriptPattern = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  for (const match of html.matchAll(scriptPattern)) {
    const cleanSource = match[1].split("?")[0];
    if (!/(?:^|-)article-data\.js$/i.test(path.basename(cleanSource))) continue;
    const dependency = path.resolve(path.dirname(article.absolute), cleanSource);
    const relativeDependency = path.relative(wikiRoot, dependency);
    if (relativeDependency.startsWith("..") || path.isAbsolute(relativeDependency)) continue;
    if (!(await fileExists(dependency))) continue;
    inputs.push([`wiki/${relativeDependency.split(path.sep).join("/")}`, await readFile(dependency, "utf8")]);
  }
  const hash = createHash("sha256");
  for (const [name, content] of inputs.sort(([left], [right]) => left.localeCompare(right))) {
    hash.update(name).update("\0").update(content).update("\0");
  }
  return hash.digest("hex");
}

export function writeJson(handle, value) {
  return handle.writeFile(`${JSON.stringify(value, null, 2)}\n`, "utf8");
}
