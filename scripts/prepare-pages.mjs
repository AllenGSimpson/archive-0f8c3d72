import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const sourceWiki = path.join(projectRoot, "wiki");
const outputRoot = path.join(projectRoot, "_site");
const outputWiki = path.join(outputRoot, "wiki");
const robotsDirective = "noindex, nofollow, noarchive, nosnippet, noimageindex";
const robotsMeta = `  <meta name="robots" content="${robotsDirective}">`;

await import("./build-wiki-home.mjs");
await import("./build-wiki-graph.mjs");

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(sourceWiki, outputWiki, {
  recursive: true,
  filter: (source) => {
    const name = path.basename(source);
    return name !== "node_modules" && name !== "package-lock.json";
  }
});

for (const entry of await readdir(projectRoot, { withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const extension = path.extname(entry.name).toLowerCase();
  if (![".md", ".csv", ".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(extension)) continue;
  await cp(path.join(projectRoot, entry.name), path.join(outputRoot, entry.name));
}

async function injectRobotsMeta(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await injectRobotsMeta(entryPath);
      continue;
    }
    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".html") continue;

    const html = await readFile(entryPath, "utf8");
    const existingRobotsMeta = /<meta\b(?=[^>]*\bname=["']robots["'])[^>]*>/i;
    if (existingRobotsMeta.test(html)) {
      const updated = html.replace(existingRobotsMeta, robotsMeta.trim());
      await writeFile(entryPath, updated, "utf8");
      continue;
    }
    if (!/<head(?:\s[^>]*)?>/i.test(html)) {
      throw new Error(`Cannot add robots metadata because ${entryPath} has no <head> element.`);
    }
    const updated = html.replace(/<head(?:\s[^>]*)?>/i, (head) => `${head}\n${robotsMeta}`);
    await writeFile(entryPath, updated, "utf8");
  }
}

await injectRobotsMeta(outputWiki);

await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");
await writeFile(
  path.join(outputRoot, "robots.txt"),
  "User-agent: *\nDisallow: /\n",
  "utf8"
);
await writeFile(
  path.join(outputRoot, "index.html"),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="${robotsDirective}">
  <meta http-equiv="refresh" content="0; url=wiki/">
  <title>Fractured Peace Archive</title>
</head>
<body>
  <p><a href="wiki/">Open the Fractured Peace Archive</a></p>
</body>
</html>
`,
  "utf8"
);
await writeFile(
  path.join(outputRoot, "404.html"),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="${robotsDirective}">
  <title>Page not found</title>
</head>
<body>
  <h1>Page not found</h1>
  <p><a href="./wiki/">Return to the archive</a></p>
</body>
</html>
`,
  "utf8"
);

console.log(`Prepared GitHub Pages artifact at ${outputRoot}`);
