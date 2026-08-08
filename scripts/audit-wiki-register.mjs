import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const explicitArguments = process.argv.slice(2);
const auditAll = explicitArguments.includes("--all");
const explicitFiles = explicitArguments.filter((argument) => argument !== "--all");

function gitLines(args) {
  try {
    return execFileSync("git", ["-c", `safe.directory=${projectRoot}`, ...args], { cwd: projectRoot, encoding: "utf8" })
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function changedWikiFiles() {
  const tracked = gitLines(["diff", "--name-only", "--diff-filter=ACMR", "HEAD", "--", "wiki"]);
  const staged = gitLines(["diff", "--cached", "--name-only", "--diff-filter=ACMR", "HEAD", "--", "wiki"]);
  const untracked = gitLines(["ls-files", "--others", "--exclude-standard", "--", "wiki"]);
  return [...new Set([...tracked, ...staged, ...untracked])];
}

function allWikiFiles() {
  return gitLines(["ls-files", "wiki"]);
}

function normalizeCandidate(candidate) {
  const normalized = candidate.replaceAll("\\", "/");
  return normalized.startsWith("wiki/") ? normalized : `wiki/${normalized}`;
}

const candidates = (auditAll
  ? allWikiFiles()
  : explicitFiles.length > 0
    ? explicitFiles.map(normalizeCandidate)
    : changedWikiFiles()
).filter((file) => /\.(?:html|js)$/i.test(file));

if (candidates.length === 0) {
  console.log("Wiki register audit: no changed HTML or JavaScript prose files.");
  process.exit(0);
}

const patterns = [
  { label: "not … but", regex: /\bnot\b[^.!?]{0,180}\bbut\b/gi },
  { label: "without", regex: /\bwithout\b/gi },
  { label: "although", regex: /\balthough\b/gi },
  { label: "balanced semicolon", regex: /;(?=\s+[A-Z“\"'])/g }
];

const synthesisMarkers = /\b(?:central contradiction|the result is|therefore|ultimately|reveals|demonstrates|in this sense|not merely|not simply)\b/gi;
let clusteredParagraphs = 0;
let synthesisHeavyParagraphs = 0;

function plainText(fragment) {
  return fragment
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:#\d+|#x[\da-f]+|[a-z][\da-z]+);/gi, " ")
    .replace(/\\[nrt]/g, " ")
    .replace(/\\["']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

for (const candidate of candidates) {
  const absolutePath = path.join(projectRoot, candidate);
  let source;
  try {
    source = await readFile(absolutePath, "utf8");
  } catch {
    continue;
  }

  const paragraphs = [...source.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)];
  for (const paragraph of paragraphs) {
    const text = plainText(paragraph[1]);
    if (!text) continue;

    const hits = patterns
      .map(({ label, regex }) => ({ label, count: [...text.matchAll(regex)].length }))
      .filter(({ count }) => count > 0);
    const scarceCount = hits.reduce((sum, hit) => sum + hit.count, 0);
    const line = source.slice(0, paragraph.index).split(/\r?\n/).length;

    if (scarceCount >= 2) {
      clusteredParagraphs += 1;
      console.log(`${candidate}:${line} clustered constructions (${hits.map((hit) => `${hit.label} ×${hit.count}`).join(", ")})`);
    }

    const synthesisCount = [...text.matchAll(synthesisMarkers)].length;
    if (synthesisCount >= 2) {
      synthesisHeavyParagraphs += 1;
      console.log(`${candidate}:${line} synthesis-heavy paragraph (${synthesisCount} markers)`);
    }
  }
}

console.log(
  `Wiki register audit: ${candidates.length} file(s), ${clusteredParagraphs} construction cluster(s), ${synthesisHeavyParagraphs} synthesis-heavy paragraph(s).`
);
console.log("Warnings are editorial prompts only; this audit never blocks publication.");
