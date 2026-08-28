import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiDirectory = path.join(projectRoot, "wiki");
const indexPath = path.join(wikiDirectory, "index.html");
const recentStart = "            <!-- RECENT_ARTICLES_START -->";
const recentEnd = "            <!-- RECENT_ARTICLES_END -->";
const excludedPages = new Set(["index.html", "wiki-graph.html", "wiki-root-map-evolution.html"]);

const namedEntities = new Map([
  ["amp", "&"], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["nbsp", " "], ["quot", '"'],
  ["ndash", "–"], ["mdash", "—"], ["hellip", "…"], ["middot", "·"], ["rsquo", "’"], ["lsquo", "‘"],
  ["rdquo", "”"], ["ldquo", "“"], ["ouml", "ö"], ["uuml", "ü"], ["auml", "ä"], ["Ouml", "Ö"],
  ["Uuml", "Ü"], ["Auml", "Ä"], ["szlig", "ß"], ["eacute", "é"], ["Eacute", "É"], ["ccedil", "ç"]
]);

function decodeEntities(value) {
  return String(value || "").replace(/&(#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi, (entity, body) => {
    if (body[0] === "#") {
      const hexadecimal = body[1]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(body.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
    }
    return namedEntities.get(body) ?? namedEntities.get(body.toLowerCase()) ?? entity;
  });
}

function stripMarkup(value) {
  return decodeEntities(String(value || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

async function git(arguments_) {
  try {
    const { stdout } = await execFileAsync("git", arguments_, { cwd: projectRoot, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
    return stdout;
  } catch {
    return "";
  }
}

function normalizeWikiPath(value) {
  const normalized = value.trim().replaceAll("\\", "/").replace(/^"|"$/g, "");
  if (!normalized.startsWith("wiki/") || !normalized.endsWith(".html")) return null;
  const name = normalized.slice("wiki/".length);
  return excludedPages.has(name) ? null : name;
}

async function workingTreeChanges() {
  const changed = new Map();
  const tracked = await git(["diff", "--name-status", "--diff-filter=AM", "HEAD", "--", "wiki"]);
  const untracked = await git(["ls-files", "--others", "--exclude-standard", "--", "wiki"]);
  for (const line of tracked.split(/\r?\n/)) {
    const [statusCode, file] = line.split("\t");
    const href = normalizeWikiPath(file || "");
    if (href) changed.set(href, statusCode === "A" ? "Added" : "Edited");
  }
  for (const file of untracked.split(/\r?\n/)) {
    const href = normalizeWikiPath(file);
    if (href) changed.set(href, "Added");
  }
  const rows = await Promise.all([...changed].map(async ([href, action]) => ({
    href,
    action,
    date: (await stat(path.join(wikiDirectory, href))).mtime.toISOString()
  })));
  return rows.sort((left, right) => right.date.localeCompare(left.date) || left.href.localeCompare(right.href));
}

async function committedChanges() {
  const output = await git([
    "log",
    "--format=@@%cI",
    "--name-status",
    "--diff-filter=AM",
    "--",
    ":(glob)wiki/*.html"
  ]);
  const rows = [];
  let date = "";
  for (const line of output.split(/\r?\n/)) {
    if (line.startsWith("@@")) {
      date = line.slice(2).trim();
      continue;
    }
    const [statusCode, file] = line.split("\t");
    const href = normalizeWikiPath(file || "");
    if (!date || !href) continue;
    rows.push({ href, action: statusCode === "A" ? "Added" : "Edited", date });
  }
  return rows;
}

async function pageMetadata(change) {
  const html = await readFile(path.join(wikiDirectory, change.href), "utf8");
  const title = stripMarkup(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || change.href.replace(/\.html$/, ""))
    .replace(/\s*[|·]\s*Fractured Peace(?: Archive)?$/i, "");
  const descriptionMatch = html.match(/<meta\b(?=[^>]*\bname=["']description["'])[^>]*\bcontent=(["'])([\s\S]*?)\1[^>]*>/i);
  const description = stripMarkup(descriptionMatch?.[2]
    || `Open the ${title} article.`);
  const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(change.date));
  return { ...change, title, description, displayDate: date };
}

const candidates = [...await workingTreeChanges(), ...await committedChanges()];
const selected = [];
const seen = new Set();
for (const candidate of candidates) {
  if (seen.has(candidate.href)) continue;
  seen.add(candidate.href);
  try {
    selected.push(await pageMetadata(candidate));
  } catch {
    continue;
  }
  if (selected.length === 10) break;
}
if (selected.length < 10) throw new Error(`Only ${selected.length} recent wiki pages could be identified.`);

const cards = selected.map((page) => [
  `                <a class="portal-card" href="${escapeHtml(page.href)}">`,
  `                  <span class="number">${escapeHtml(page.action)} · ${escapeHtml(page.displayDate)}</span>`,
  `                  <h3>${escapeHtml(page.title)}</h3>`,
  `                  <p>${escapeHtml(page.description)}</p>`,
  "                </a>"
].join("\n")).join("\n");
const recentBlock = [
  recentStart,
  "            <section class=\"panel\">",
  "              <header class=\"panel-head\"><h2>Recently added or edited</h2><span>Latest 10 pages</span></header>",
  "              <div class=\"portal-grid\">",
  cards,
  "              </div>",
  "            </section>",
  recentEnd
].join("\n");

let indexHtml = await readFile(indexPath, "utf8");
if (indexHtml.includes(recentStart) && indexHtml.includes(recentEnd)) {
  const start = indexHtml.indexOf(recentStart);
  const end = indexHtml.indexOf(recentEnd, start) + recentEnd.length;
  indexHtml = indexHtml.slice(0, start) + recentBlock + indexHtml.slice(end);
} else {
  const homeGrid = indexHtml.indexOf('<div class="home-grid">');
  const start = indexHtml.indexOf('            <section class="panel">', homeGrid);
  const timelineHeader = indexHtml.indexOf("<h2>On this timeline</h2>", start);
  const end = indexHtml.lastIndexOf('            <section class="panel"', timelineHeader);
  if (homeGrid < 0 || start < 0 || timelineHeader < 0 || end < 0) throw new Error("Could not locate the legacy homepage article directory.");
  indexHtml = indexHtml.slice(0, start) + recentBlock + "\n\n" + indexHtml.slice(end);
}

const pageCount = (await readdir(wikiDirectory)).filter((name) => name.endsWith(".html") && !excludedPages.has(name)).length;
indexHtml = indexHtml.replace(/<span>\d[\d,]* core articles<\/span>/, `<span>${pageCount.toLocaleString("en-US")} articles</span>`);
await writeFile(indexPath, indexHtml, "utf8");
console.log(`Built homepage recent list: ${selected.map((page) => page.href).join(", ")}`);
