import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiRoot = path.join(projectRoot, "wiki");
const writersRoot = path.join(wikiRoot, "_writers");
const discussionRoot = path.join(wikiRoot, "_writer-discussion");
const outputArgument = process.argv.indexOf("--output");
const outputPath = path.resolve(projectRoot, outputArgument >= 0 ? process.argv[outputArgument + 1] : "wiki/writer-discussion-data.json");

function parseFrontmatter(text, filePath) {
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

async function markdownFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) files.push(...await markdownFiles(entryPath));
      else if (entry.isFile() && entry.name.endsWith(".md")) files.push(entryPath);
    }
    return files;
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

const writers = {};
for (const filePath of (await markdownFiles(writersRoot)).sort()) {
  if (path.basename(filePath) === "registry.md") continue;
  const { metadata } = parseFrontmatter(await readFile(filePath, "utf8"), filePath);
  if (!metadata.code) continue;
  writers[metadata.code] = {
    code: metadata.code,
    name: metadata.name,
    title: metadata.title,
    annotation: metadata.annotation || metadata.code
  };
}

const articles = {};
for (const filePath of (await markdownFiles(discussionRoot)).sort()) {
  const { metadata, body } = parseFrontmatter(await readFile(filePath, "utf8"), filePath);
  const entry = {
    id: metadata.id,
    article: metadata.article,
    writer: metadata.writer,
    block: metadata.block || null,
    reply_to: metadata.reply_to || null,
    created: metadata.created,
    body
  };
  articles[entry.article] ||= [];
  articles[entry.article].push(entry);
}

for (const entries of Object.values(articles)) {
  entries.sort((left, right) => left.created.localeCompare(right.created) || left.id.localeCompare(right.id));
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ version: 1, generated_at: new Date().toISOString(), writers, articles }, null, 2)}\n`, "utf8");
console.log(`Built local Writer Discussion data: ${Object.keys(writers).length} writers, ${Object.values(articles).flat().length} entries -> ${outputPath}`);
