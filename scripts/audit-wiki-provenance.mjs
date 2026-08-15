import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiDirectory = path.join(projectRoot, "wiki");
const jsonOutput = process.argv.includes("--json");
const summaryOnly = process.argv.includes("--summary");
const sourceCache = new Map();
const bundleCache = new Map();
const helperProviders = new Map();

for (const source of (await readdir(wikiDirectory)).filter((name) => name.endsWith("article-data.js"))) {
  const code = await readFile(path.join(wikiDirectory, source), "utf8");
  sourceCache.set(source, code);
  for (const match of code.matchAll(/^(?:const|let)\s+([A-Za-z_$][\w$]*)\s*=/gm)) {
    if (!helperProviders.has(match[1])) helperProviders.set(match[1], source);
  }
}

async function loadArticleBundle(scriptSources) {
  const signature = scriptSources.join("|");
  if (bundleCache.has(signature)) return bundleCache.get(signature);

  const orderedSources = [...scriptSources];
  let articles;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const sandbox = { console: { log() {}, warn() {}, error() {} } };
    sandbox.window = sandbox;
    const context = vm.createContext(sandbox);
    try {
      for (const source of orderedSources) {
        const code = sourceCache.get(source) || await readFile(path.join(wikiDirectory, source), "utf8");
        sourceCache.set(source, code);
        vm.runInContext(code.replace(/^(?:const|let)\s+/gm, "var "), context, { filename: source, timeout: 3_000 });
      }
      articles = sandbox.deepArticles || {};
      break;
    } catch (error) {
      const identifier = error?.name === "ReferenceError"
        ? error.message.match(/^([A-Za-z_$][\w$]*) is not defined/)?.[1]
        : null;
      const provider = identifier ? helperProviders.get(identifier) : null;
      if (!provider || orderedSources.includes(provider)) throw error;
      orderedSources.unshift(provider);
    }
  }
  if (!articles) throw new Error(`Could not resolve article-data dependencies for ${signature}.`);
  bundleCache.set(signature, articles);
  return articles;
}

const results = [];
const errors = [];
const htmlFiles = (await readdir(wikiDirectory))
  .filter((name) => name.endsWith(".html"))
  .sort((a, b) => a.localeCompare(b));

for (const name of htmlFiles) {
  const html = await readFile(path.join(wikiDirectory, name), "utf8");
  const slug = html.match(/<body\b[^>]*\bdata-article=["']([^"']+)["']/i)?.[1];
  const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"'?]+)(?:\?[^"']*)?["'][^>]*>/gi)]
    .map((match) => match[1].replace(/^\.\//, ""))
    .filter((source) => source.endsWith("article-data.js"));

  if (slug && scriptSources.length) {
    try {
      const articles = await loadArticleBundle(scriptSources);
      const article = articles[slug];
      if (!article) {
        errors.push(`${name}: no article data registered for ${slug}`);
        continue;
      }
      const serialized = JSON.stringify(article);
      results.push({ name, slug, mode: "data", annotated: /data-provenance=["'](?:a|p|e)["']/.test(serialized) });
    } catch (error) {
      errors.push(`${name}: ${error.message}`);
    }
    continue;
  }

  const body = html.match(/<article\b[^>]*\bclass=["'][^"']*\barticle-body\b[^"']*["'][^>]*>([\s\S]*?)<\/article>/i)?.[1];
  if (!body) continue;
  results.push({ name, slug: name.replace(/\.html$/, ""), mode: "static", annotated: /data-provenance=["'](?:a|p|e)["']/.test(body) });
}

const annotated = results.filter((row) => row.annotated);
const missing = results.filter((row) => !row.annotated);

if (jsonOutput) {
  console.log(JSON.stringify({ total: results.length, annotated: annotated.length, missing, errors }));
} else {
  console.log(`Wiki provenance coverage: ${annotated.length}/${results.length} article pages annotated; ${missing.length} without fact provenance.`);
  if (!summaryOnly) for (const row of missing) console.log(`${row.mode}\t${row.name}\t${row.slug}`);
}
if (errors.length) {
  if (!jsonOutput) {
    console.error(`Coverage errors: ${errors.length}`);
    for (const error of errors) console.error(error);
  }
  process.exitCode = 1;
}
