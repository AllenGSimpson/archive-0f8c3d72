import { mkdir, open, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { buildSemanticStructure } from "./wiki-graph-semantics.mjs";
import { buildSemanticForestLayout, describeSemanticForestRoots, detectCommunities } from "./wiki-graph-layout.mjs";
import { buildDirectedPhysicsLayout } from "./wiki-graph-physics.mjs";
import { createRootMapInput, validateCheckpoint } from "./wiki-root-map-optimizer.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiDirectory = path.join(projectRoot, "wiki");
function argumentValue(name) {
  const index = process.argv.indexOf(name);
  if (index < 0) return null;
  if (!process.argv[index + 1] || process.argv[index + 1].startsWith("--")) throw new Error(`${name} requires a path.`);
  return process.argv[index + 1];
}

const outputValue = argumentValue("--output");
const exportRootMapValue = argumentValue("--export-root-map-input");
const rootMapValue = argumentValue("--root-map");
const layoutValue = argumentValue("--layout") || "semantic";
if (!["semantic", "physics"].includes(layoutValue)) throw new Error(`Unsupported --layout ${layoutValue}; use semantic or physics.`);
if (exportRootMapValue && rootMapValue) throw new Error("--export-root-map-input and --root-map cannot be used together.");
if (layoutValue === "physics" && (exportRootMapValue || rootMapValue)) throw new Error("--layout physics cannot be combined with --export-root-map-input or --root-map.");
const outputFile = outputValue
  ? path.resolve(projectRoot, outputValue)
  : path.join(wikiDirectory, "wiki-graph-data.js");
const overridesText = await readFile(path.join(scriptDirectory, "wiki-graph-overrides.json"), "utf8");
const overrideParentBody = overridesText.match(/["']parents["']\s*:\s*\{([\s\S]*?)\}/)?.[1] || "";
const overrideParentKeys = [...overrideParentBody.matchAll(/"((?:\\.|[^"\\])*)"\s*:/g)].map((match) => JSON.parse(`"${match[1]}"`));
if (new Set(overrideParentKeys).size !== overrideParentKeys.length) throw new Error("Wiki graph overrides contain duplicate parent definitions.");
const overrides = JSON.parse(overridesText);
const excludedGraphPages = new Set(["timeline.html", "wiki-root-map-evolution.html"]);
const physicsAnchorDefinitions = [
  { href: "united-states.html", title: "United States", color: "#1485ED" },
  { href: "commonwealth.html", title: "British Commonwealth", color: "#AA0A0A" },
  { href: "latin-bloc.html", title: "Latin Bloc", color: "#437F3F" },
  { href: "germany.html", title: "Greater German Reich", color: "#666057" },
  { href: "geacps.html", title: "Greater East Asia Co-Prosperity Sphere", color: "#FFC9B2" }
];
const htmlFiles = (await readdir(wikiDirectory))
  .filter((name) => name.endsWith(".html") && !excludedGraphPages.has(name))
  .sort((a, b) => a.localeCompare(b));
const htmlNames = new Set(htmlFiles);
const sourceCache = new Map();
const articleBundleCache = new Map();
const helperProviders = new Map();
for (const source of (await readdir(wikiDirectory)).filter((name) => name.endsWith("article-data.js"))) {
  const code = await readFile(path.join(wikiDirectory, source), "utf8");
  sourceCache.set(source, code);
  for (const match of code.matchAll(/^(?:const|let)\s+([A-Za-z_$][\w$]*)\s*=/gm)) {
    if (!helperProviders.has(match[1])) helperProviders.set(match[1], source);
  }
}

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
  return decodeEntities(String(value || "")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(value) {
  return stripMarkup(value).match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)?.length || 0;
}

function internalLinks(value, sourceName) {
  const links = new Set();
  for (const match of String(value || "").matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    let href = decodeEntities(match[1]).split("#")[0].split("?")[0];
    if (!href || /^(?:[a-z]+:|\/|\.\.\/)/i.test(href)) continue;
    href = href.replace(/^\.\//, "");
    if (href !== sourceName && htmlNames.has(href)) links.add(href);
  }
  return links;
}

function linkEvidence(regions, sourceName) {
  const evidence = {};
  for (const { html, prominence } of regions) for (const href of internalLinks(html, sourceName)) {
    evidence[href] = Math.max(evidence[href] || 0, prominence);
  }
  return evidence;
}

function matchContent(html, pattern) {
  return html.match(pattern)?.[1] || "";
}

async function loadArticleBundle(scriptSources) {
  const signature = scriptSources.join("|");
  if (articleBundleCache.has(signature)) return articleBundleCache.get(signature);

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
        const sandboxedCode = code.replace(/^(?:const|let)\s+/gm, "var ");
        vm.runInContext(sandboxedCode, context, { filename: source, timeout: 3_000 });
      }
      articles = sandbox.deepArticles || {};
      break;
    } catch (error) {
      const identifier = error?.name === "ReferenceError" ? error.message.match(/^([A-Za-z_$][\w$]*) is not defined/)?.[1] : null;
      const provider = identifier ? helperProviders.get(identifier) : null;
      if (!provider || orderedSources.includes(provider)) throw error;
      orderedSources.unshift(provider);
    }
  }
  if (!articles) throw new Error(`Could not resolve article-data dependencies for ${signature}.`);
  articleBundleCache.set(signature, articles);
  return articles;
}

async function pageRecord(name) {
  const html = await readFile(path.join(wikiDirectory, name), "utf8");
  const slug = html.match(/<body\b[^>]*\bdata-article=["']([^"']+)["']/i)?.[1];
  const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"'?]+)(?:\?[^"']*)?["'][^>]*>/gi)]
    .map((match) => match[1].replace(/^\.\//, ""))
    .filter((source) => source.endsWith("article-data.js"));

  if (slug && scriptSources.length) {
    const articles = await loadArticleBundle(scriptSources);
    const article = articles[slug];
    if (!article) throw new Error(`No article data registered for ${name}.`);
    const title = stripMarkup(article.title) || slug;
    const headings = (article.sections || []).map((section) => stripMarkup(section.title)).filter(Boolean);
    const categories = (article.categories || []).map(stripMarkup).filter(Boolean);
    const bodyHtml = [
      ...(article.sections || []).map((section) => section.html),
      ...(article.facts || []).flat()
    ].join(" ");
    const relatedHtml = (article.related || []).map((item) => `<a href="${item.href}">${item.label || ""}</a>`).join(" ");
    const visibleHtml = [
      article.title,
      article.lead,
      ...(article.sections || []).flatMap((section) => [section.title, section.html]),
      ...(article.facts || []).flat(),
      ...(article.related || []).flatMap((item) => [item.kicker, item.label]),
      ...(article.categories || [])
    ].join(" ");
    const linkProminence = linkEvidence([
      { html: bodyHtml, prominence: 0.35 },
      { html: relatedHtml, prominence: 0.85 },
      { html: article.lead, prominence: 1 }
    ], name);
    return {
      href: name,
      title,
      words: Math.max(1, wordCount(visibleHtml)),
      links: Object.keys(linkProminence).sort((a, b) => a.localeCompare(b)),
      linkProminence,
      lead: stripMarkup(article.lead),
      headings,
      categories,
      body: stripMarkup(bodyHtml)
    };
  }

  const articleBody = matchContent(html, /<article\b[^>]*\bclass=["'][^"']*\barticle-body\b[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  const main = matchContent(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const visibleHtml = articleBody || main || html;
  const titleHtml = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
    || html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]
    || name.replace(/\.html$/, "");
  const title = stripMarkup(titleHtml).replace(/\s*[|·]\s*Fractured Peace(?: Archive)?$/i, "");
  const leadHtml = visibleHtml.match(/<(?:p|div)\b[^>]*\bclass=["'][^"']*\barticle-lead\b[^"']*["'][^>]*>([\s\S]*?)<\/(?:p|div)>/i)?.[1] || "";
  const relatedHtml = visibleHtml.match(/<div\b[^>]*\bclass=["'][^"']*\brelated-grid\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] || "";
  const headings = [...visibleHtml.matchAll(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map((match) => stripMarkup(match[1])).filter(Boolean);
  const categoryHtml = visibleHtml.match(/<[^>]*\bclass=["'][^"']*\barticle-footer\b[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/i)?.[1] || "";
  const categories = stripMarkup(categoryHtml).replace(/^Categories:\s*/i, "").split(/\s*[·|]\s*/).filter(Boolean);
  const linkProminence = linkEvidence([
    { html: visibleHtml, prominence: 0.35 },
    { html: relatedHtml, prominence: 0.85 },
    { html: leadHtml, prominence: 1 }
  ], name);
  return {
    href: name,
    title,
    words: Math.max(1, wordCount(visibleHtml)),
    links: Object.keys(linkProminence).sort((a, b) => a.localeCompare(b)),
    linkProminence,
    lead: stripMarkup(leadHtml),
    headings,
    categories,
    body: stripMarkup(visibleHtml)
  };
}

const pages = [];
for (const name of htmlFiles) pages.push(await pageRecord(name));
const indexByHref = new Map(pages.map((page, index) => [page.href, index]));
const edges = [];
for (let source = 0; source < pages.length; source += 1) {
  for (const href of pages[source].links) {
    const target = indexByHref.get(href);
    if (target !== undefined) edges.push([source, target]);
  }
}

const maximumWords = Math.max(...pages.map((page) => page.words));
const nodes = pages.map((page) => ({
  ...page,
  radius: 5.4 + 0.24 * Math.sqrt(page.words)
}));
const structure = buildSemanticStructure(nodes, edges, overrides);

function rootMapInputFor(layout = null) {
  const rootGeometry = describeSemanticForestRoots(nodes, structure);
  const rootIndexByNode = new Map(structure.roots.map((root, index) => [root, index]));
  const rootNodeByHref = new Map(structure.roots.map((root) => [nodes[root].href, root]));
  const aggregate = new Map();
  for (const [source, target] of edges) {
    const sourceRoot = structure.rootOf[source];
    const targetRoot = structure.rootOf[target];
    if (sourceRoot === targetRoot) continue;
    const [left, right] = [sourceRoot, targetRoot]
      .sort((a, b) => nodes[a].href.localeCompare(nodes[b].href));
    const key = `${nodes[left].href}\u0000${nodes[right].href}`;
    let entry = aggregate.get(key);
    if (!entry) {
      entry = { source: nodes[left].href, target: nodes[right].href, sourceToTargetCount: 0, targetToSourceCount: 0 };
      aggregate.set(key, entry);
    }
    if (sourceRoot === left) entry.sourceToTargetCount += 1;
    else entry.targetToSourceCount += 1;
  }
  const rootDegrees = new Array(structure.roots.length).fill(0);
  for (const entry of aggregate.values()) {
    rootDegrees[rootIndexByNode.get(rootNodeByHref.get(entry.source))] += 1;
    rootDegrees[rootIndexByNode.get(rootNodeByHref.get(entry.target))] += 1;
  }
  const roots = rootGeometry.roots.map((root) => ({
    href: nodes[root.index].href,
    title: nodes[root.index].title,
    x: layout ? layout.x[root.index] : 0,
    y: layout ? layout.y[root.index] : 0,
    reservedRadius: root.reservedRadius,
    mass: nodes[root.index].words + structure.descendantWordMass[root.index],
    component: root.component,
    rootDegree: rootDegrees[rootIndexByNode.get(root.index)]
  }));
  const connections = [...aggregate.values()].map((entry) => ({
    ...entry,
    directedReferenceCount: entry.sourceToTargetCount + entry.targetToSourceCount,
    reciprocalCount: Math.min(entry.sourceToTargetCount, entry.targetToSourceCount)
  }));
  return createRootMapInput({ roots, connections });
}

const rootMapInput = rootMapInputFor();
if (exportRootMapValue) {
  const baselineLayout = buildSemanticForestLayout(nodes, structure);
  const exported = rootMapInputFor(baselineLayout);
  const exportPath = path.resolve(projectRoot, exportRootMapValue);
  await mkdir(path.dirname(exportPath), { recursive: true });
  await writeFile(exportPath, `${JSON.stringify(exported, null, 2)}\n`, "utf8");
  console.log(`Exported root-map input: ${exported.roots.length} roots, ${exported.connections.length} bundles -> ${path.relative(projectRoot, exportPath)}.`);
  process.exit(0);
}

let rootMapCheckpoint = null;
let rootPositions = null;
if (rootMapValue) {
  const checkpointPath = path.resolve(projectRoot, rootMapValue);
  rootMapCheckpoint = validateCheckpoint(JSON.parse(await readFile(checkpointPath, "utf8")), rootMapInput);
  rootPositions = Object.fromEntries(structure.roots.map((root) => [root, rootMapCheckpoint.roots[nodes[root].href]]));
}
let layout;
if (layoutValue === "physics") {
  const communities = detectCommunities(structure.graph.adjacency, nodes);
  const nodeByHref = new Map(nodes.map((node, index) => [node.href, index]));
  const physicsAnchors = physicsAnchorDefinitions.map((anchor) => ({ ...anchor, index: nodeByHref.get(anchor.href) }));
  if (physicsAnchors.some((anchor) => !Number.isInteger(anchor.index))) throw new Error("Physics anchor article is missing from the graph corpus.");
  layout = buildDirectedPhysicsLayout(nodes, edges, {
    community: communities.community,
    communityCount: communities.groups.length,
    largestCommunity: Math.max(...communities.groups.map((group) => group.length)),
    degree: structure.graph.degree,
    anchors: physicsAnchors
  });
} else {
  layout = buildSemanticForestLayout(nodes, structure, rootPositions ? { rootPositions } : {});
}
const compactNodes = nodes.map((node, index) => [
  node.title,
  node.href,
  node.words,
  Number(node.radius.toFixed(3)),
  Number(layout.x[index].toFixed(4)),
  Number(layout.y[index].toFixed(4)),
  Number(layout.z[index].toFixed(2)),
  layout.degree[index],
  layout.community[index]
]);
const graph = {
  generated: new Date().toISOString(),
  pageCount: compactNodes.length,
  connectionCount: edges.length,
  maximumWords,
  layoutModel: layoutValue === "physics" ? "directed-physics-v1" : "semantic-forest-v2",
  massUnit: "visible-word",
  layoutEdgeCount: layoutValue === "physics" ? edges.length : structure.structuralEdges.length,
  communityCount: layout.communityCount,
  largestCommunity: layout.largestCommunity,
  rootCount: structure.roots.length,
  parentCount: structure.parents.filter((parent) => parent >= 0).length,
  peerEdgeCount: structure.peers.length,
  bridgeEdgeCount: structure.bridges.length,
  structuralEdgeCount: structure.structuralEdges.length,
  componentCount: structure.components.length,
  overrideAnchorCount: structure.overrideAnchors.length,
  overrideParentCount: structure.overrideParents.length,
  semanticFeatureCount: structure.semanticFeatureCount,
  meanParentFit: Number(structure.meanParentFit.toFixed(6)),
  betweennessSampleCount: structure.betweennessSampleCount,
  relaxationIterations: layout.relaxationIterations,
  collisionIterations: layout.collisionIterations,
  maximumOverlap: Number(layout.maximumOverlap.toFixed(6)),
  medianCommunityHullFill: Number(layout.medianCommunityHullFill.toFixed(6)),
  minimumReservedRadius: Number(layout.minimumReservedRadius.toFixed(6)),
  maximumReservedRadius: Number(layout.maximumReservedRadius.toFixed(6)),
  majorBranchCount: layout.majorBranchCount,
  siblingPairCount: layout.siblingPairCount,
  overlappingSiblingPairCount: layout.overlappingSiblingPairCount,
  siblingEnvelopeOverlapRate: Number(layout.siblingEnvelopeOverlapRate.toFixed(6)),
  hubExclusionViolations: layout.hubExclusionViolations,
  hubExclusionViolationRate: Number(layout.hubExclusionViolationRate.toFixed(6)),
  branchRepulsionIterations: layout.branchRepulsionIterations,
  hierarchyCollisionPasses: layout.hierarchyCollisionPasses,
  branchCollisionTranslations: layout.branchCollisionTranslations,
  descendantBranchCollisionTranslations: layout.descendantBranchCollisionTranslations,
  rootBridgeForceCount: layout.rootBridgeForceCount,
  parentSpringCount: layout.parentSpringCount,
  mapDiagonal: Number(layout.mapDiagonal.toFixed(6)),
  ...(layoutValue === "physics" ? {
    physicsIterations: layout.physicsIterations,
    physicsConverged: layout.physicsConverged,
    physicsRepulsionIterations: layout.repulsionIterations,
    physicsAttractionEdgeCount: layout.attractionEdgeCount,
    physicsAnchorAttractionMultiplier: layout.anchorAttractionMultiplier,
    physicsAttractionMultiplierMinimum: Number(layout.attractionMultiplierMinimum.toFixed(6)),
    physicsAttractionMultiplierMaximum: Number(layout.attractionMultiplierMaximum.toFixed(6)),
    physicsAttractionMultipliers: layout.attractionMultipliers,
    physicsInitialPlacementCount: layout.initialPlacementCount,
    physicsInitialPlacementLayers: layout.initialPlacementLayers,
    physicsCollisionIterations: layout.collisionIterations,
    physicsMaximumOverlap: Number(layout.maximumOverlap.toFixed(6)),
    physicsMinimumSeparation: Number(layout.minimumSeparation.toFixed(6)),
    physicsComponentCount: layout.componentCount,
    originlessCount: layout.originlessCount,
    anchorCount: layout.anchorCount
  } : {}),
  rootMapModel: rootMapCheckpoint ? rootMapCheckpoint.schema : "none",
  ...(rootMapCheckpoint ? {
    rootMapCorpusHash: rootMapCheckpoint.corpusHash,
    rootMapScore: Number(rootMapCheckpoint.score.total.toFixed(6)),
    rootMapBarriers: rootMapCheckpoint.metrics.barriers,
    rootMapWeightedReferenceLength: Number(rootMapCheckpoint.metrics.weightedReferenceLength.toFixed(6))
  } : {}),
  parents: structure.parents,
  depths: structure.depths,
  labelTiers: structure.labelTiers,
  structuralEdgeKinds: ["parent", "peer", "bridge"],
  structuralEdges: structure.structuralEdges,
  ...(layoutValue === "physics" ? {
    originless: layout.originless,
    anchors: layout.anchors,
    anchorColors: layout.anchorColors
  } : {}),
  nodes: compactNodes,
  edges
};
await mkdir(path.dirname(outputFile), { recursive: true });
const output = `// Generated by scripts/build-wiki-graph.mjs.\nwindow.WIKI_GRAPH_DATA=${JSON.stringify(graph)};\n`;
try {
  await writeFile(outputFile, output, "utf8");
} catch (error) {
  // Some Windows preview processes deny a truncate-on-open while still
  // allowing an existing file handle to be updated in place.
  if (error?.code !== "UNKNOWN") throw error;
  const handle = await open(outputFile, "r+");
  try {
    await handle.writeFile(output, "utf8");
    await handle.truncate(Buffer.byteLength(output));
  } finally {
    await handle.close();
  }
}
console.log(`Built wiki graph: ${graph.pageCount} pages, ${graph.connectionCount} directed connections -> ${path.relative(projectRoot, outputFile)}.`);
