import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiRoot = path.join(projectRoot, "wiki");
const writersRoot = path.join(wikiRoot, "_writers");
const discussionRoot = path.join(wikiRoot, "_writer-discussion");
const errors = [];
const provenanceLabels = new Map([
  ["a", "author-established canon"],
  ["p", "pre-divergence canon"],
  ["e", "incorporated extrapolation"]
]);

function parseFrontmatter(text, filePath) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) {
    throw new Error(`${filePath}: missing YAML frontmatter.`);
  }
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${filePath}: malformed YAML frontmatter.`);
  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const field = line.match(/^([a-z_]+):\s*(.*)$/i);
    if (!field) throw new Error(`${filePath}: unsupported frontmatter line: ${line}`);
    metadata[field[1]] = field[2].trim().replace(/^("|')|("|')$/g, "");
  }
  return { metadata, body: match[2].trim() };
}

async function filesUnder(directory, predicate) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) files.push(...await filesUnder(entryPath, predicate));
      else if (entry.isFile() && predicate(entryPath)) files.push(entryPath);
    }
    return files;
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function parseMarkerFields(value) {
  const fields = {};
  for (const match of value.matchAll(/([a-z_]+)=([^\s]+)/gi)) fields[match[1]] = match[2];
  return fields;
}

const profileFiles = (await readdir(writersRoot, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "registry.md")
  .map((entry) => path.join(writersRoot, entry.name));
const writers = new Map();

for (const filePath of profileFiles) {
  try {
    const { metadata } = parseFrontmatter(await readFile(filePath, "utf8"), filePath);
    if (!metadata.code) continue;
    if (!/^[a-z]$/.test(metadata.code) || provenanceLabels.has(metadata.code)) {
      errors.push(`${filePath}: writer code must be one lowercase letter other than the reserved provenance codes a, p, and e.`);
    } else if (writers.has(metadata.code)) {
      errors.push(`${filePath}: duplicate writer code ${metadata.code}.`);
    } else {
      writers.set(metadata.code, { ...metadata, filePath });
    }
    if (!metadata.name || !metadata.title) errors.push(`${filePath}: active profiles require name and title.`);
  } catch (error) {
    errors.push(error.message);
  }
}

const sourceFiles = await filesUnder(wikiRoot, (filePath) => {
  const name = path.basename(filePath);
  return name.endsWith(".html") || name.endsWith("article-data.js");
});
const blockIds = new Map();
let blockCount = 0;
let provenanceCount = 0;
const markerPattern = /<!--\s*altwwii-writer-block:(start|end)\b([\s\S]*?)-->/gi;
const superscriptPattern = /<sup\b([^>]*)>([\s\S]*?)<\/sup>/gi;
const allowedKinds = new Set(["interpretation", "analysis", "context", "extrapolation", "technical", "counterfactual", "revision"]);

function attributeValue(attributes, name) {
  const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match?.[2];
}

for (const filePath of sourceFiles) {
  const text = await readFile(filePath, "utf8");
  const stack = [];
  for (const match of text.matchAll(markerPattern)) {
    if (match[1].toLowerCase() === "end") {
      if (!stack.length) errors.push(`${filePath}: writer-block end has no open start.`);
      else stack.pop();
      continue;
    }
    if (stack.length) errors.push(`${filePath}: writer blocks may not nest.`);
    const fields = parseMarkerFields(match[2]);
    const required = ["id", "writer", "kind", "created"];
    for (const name of required) if (!fields[name]) errors.push(`${filePath}: writer-block start is missing ${name}.`);
    if (fields.writer && !writers.has(fields.writer)) errors.push(`${filePath}: unknown writer code ${fields.writer}.`);
    if (fields.id && fields.writer && !new RegExp(`^wb-${fields.writer}-\\d{8}-[a-z0-9]{5}$`).test(fields.id)) {
      errors.push(`${filePath}: invalid writer block id ${fields.id}.`);
    }
    if (fields.id && blockIds.has(fields.id)) errors.push(`${filePath}: duplicate writer block id ${fields.id}; first seen in ${blockIds.get(fields.id)}.`);
    else if (fields.id) blockIds.set(fields.id, filePath);
    if (fields.kind && !allowedKinds.has(fields.kind)) errors.push(`${filePath}: unsupported writer block kind ${fields.kind}.`);
    if (fields.writer === "v" && fields.kind && fields.kind !== "extrapolation") {
      errors.push(`${filePath}: writer v may only use kind=extrapolation blocks.`);
    }
    if (fields.created && Number.isNaN(Date.parse(fields.created))) errors.push(`${filePath}: invalid writer block timestamp ${fields.created}.`);
    stack.push(fields);
    blockCount += 1;
  }
  if (stack.length) errors.push(`${filePath}: ${stack.length} writer block(s) are not closed.`);

  for (const match of text.matchAll(superscriptPattern)) {
    const classes = attributeValue(match[1], "class")?.split(/\s+/) || [];
    if (!classes.includes("canon-note")) continue;
    provenanceCount += 1;
    const provenance = attributeValue(match[1], "data-provenance");
    if (!provenance) {
      errors.push(`${filePath}: canon-note is missing data-provenance.`);
      continue;
    }
    if (!provenanceLabels.has(provenance)) {
      errors.push(`${filePath}: unsupported fact provenance ${provenance}; expected a, p, or e.`);
      continue;
    }
    const visibleMark = match[2].replace(/<[^>]*>/g, "").trim();
    if (visibleMark !== `[${provenance}]`) {
      errors.push(`${filePath}: canon-note with provenance ${provenance} must display [${provenance}].`);
    }
  }
}

const discussionFiles = await filesUnder(discussionRoot, (filePath) => filePath.endsWith(".md"));
const discussionIds = new Map();
const discussions = [];

for (const filePath of discussionFiles) {
  try {
    const { metadata } = parseFrontmatter(await readFile(filePath, "utf8"), filePath);
    for (const name of ["id", "article", "writer", "created"]) {
      if (!metadata[name]) errors.push(`${filePath}: discussion frontmatter is missing ${name}.`);
    }
    const parentSlug = path.basename(path.dirname(filePath));
    if (metadata.article && parentSlug !== metadata.article) errors.push(`${filePath}: article must match its parent directory.`);
    if (metadata.article) {
      const shell = path.join(wikiRoot, `${metadata.article}.html`);
      try {
        if (!(await stat(shell)).isFile()) errors.push(`${filePath}: article shell ${metadata.article}.html is missing.`);
      } catch {
        errors.push(`${filePath}: article shell ${metadata.article}.html is missing.`);
      }
    }
    if (metadata.writer && !writers.has(metadata.writer)) errors.push(`${filePath}: unknown writer code ${metadata.writer}.`);
    if (metadata.id && !/^wd-[a-z]-\d{8}-[a-z0-9]{5}$/.test(metadata.id)) errors.push(`${filePath}: invalid discussion id ${metadata.id}.`);
    if (metadata.id && discussionIds.has(metadata.id)) errors.push(`${filePath}: duplicate discussion id ${metadata.id}.`);
    else if (metadata.id) discussionIds.set(metadata.id, filePath);
    if (metadata.block && !blockIds.has(metadata.block)) errors.push(`${filePath}: unknown writer block ${metadata.block}.`);
    if (metadata.created && Number.isNaN(Date.parse(metadata.created))) errors.push(`${filePath}: invalid discussion timestamp ${metadata.created}.`);
    discussions.push({ filePath, metadata });
  } catch (error) {
    errors.push(error.message);
  }
}

for (const { filePath, metadata } of discussions) {
  if (metadata.reply_to && !discussionIds.has(metadata.reply_to)) errors.push(`${filePath}: unknown reply target ${metadata.reply_to}.`);
}

if (errors.length) {
  console.error(`Writer metadata validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Writer metadata valid: ${writers.size} active writers, ${blockCount} writer blocks, ${provenanceCount} provenance notes, ${discussionFiles.length} discussion entries.`);
}
