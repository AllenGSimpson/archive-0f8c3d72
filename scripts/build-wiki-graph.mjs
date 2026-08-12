import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const wikiDirectory = path.join(projectRoot, "wiki");
const outputFile = path.join(wikiDirectory, "wiki-graph-data.js");
const excludedGraphPages = new Set(["timeline.html"]);
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
    const visibleHtml = [
      article.title,
      article.lead,
      ...(article.sections || []).flatMap((section) => [section.title, section.html]),
      ...(article.facts || []).flat(),
      ...(article.related || []).flatMap((item) => [item.kicker, item.label]),
      ...(article.categories || [])
    ].join(" ");
    const linkHtml = [
      article.lead,
      ...(article.sections || []).map((section) => section.html),
      ...(article.facts || []).flat(),
      ...(article.related || []).map((item) => `<a href="${item.href}"></a>`)
    ].join(" ");
    return {
      href: name,
      title: stripMarkup(article.title) || slug,
      words: Math.max(1, wordCount(visibleHtml)),
      links: [...internalLinks(linkHtml, name)]
    };
  }

  const articleBody = matchContent(html, /<article\b[^>]*\bclass=["'][^"']*\barticle-body\b[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  const main = matchContent(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const visibleHtml = articleBody || main || html;
  const titleHtml = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
    || html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]
    || name.replace(/\.html$/, "");
  return {
    href: name,
    title: stripMarkup(titleHtml).replace(/\s*[|·]\s*Fractured Peace(?: Archive)?$/i, ""),
    words: Math.max(1, wordCount(visibleHtml)),
    links: [...internalLinks(visibleHtml, name)]
  };
}

function hashUnit(value, salt = 0) {
  let hash = 2166136261 ^ salt;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function spatialPairs(x, y, z, cellSize, visit) {
  const buckets = new Map();
  const keys = new Array(x.length);
  for (let index = 0; index < x.length; index += 1) {
    const cx = Math.floor(x[index] / cellSize);
    const cy = Math.floor(y[index] / cellSize);
    const cz = Math.floor(z[index] / cellSize);
    const key = `${cx},${cy},${cz}`;
    keys[index] = [cx, cy, cz];
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(index);
  }
  for (let index = 0; index < x.length; index += 1) {
    const [cx, cy, cz] = keys[index];
    for (let ox = -1; ox <= 1; ox += 1) {
      for (let oy = -1; oy <= 1; oy += 1) {
        for (let oz = -1; oz <= 1; oz += 1) {
          const neighbors = buckets.get(`${cx + ox},${cy + oy},${cz + oz}`);
          if (!neighbors) continue;
          for (const other of neighbors) if (other > index) visit(index, other);
        }
      }
    }
  }
}

function forceLayout(nodes, edges) {
  const count = nodes.length;
  const x = new Float64Array(count);
  const y = new Float64Array(count);
  const z = new Float64Array(count);
  const vx = new Float64Array(count);
  const vy = new Float64Array(count);
  const vz = new Float64Array(count);
  const ax = new Float64Array(count);
  const ay = new Float64Array(count);
  const az = new Float64Array(count);
  const radius = Float64Array.from(nodes, (node) => node.radius);
  const mass = Float64Array.from(nodes, (node) => node.words);
  const degree = new Uint32Array(count);
  const adjacency = Array.from({ length: count }, () => new Set());
  for (const [source, target] of edges) {
    degree[source] += 1;
    degree[target] += 1;
    adjacency[source].add(target);
    adjacency[target].add(source);
  }

  // Seed each connected component as a loose branching tree so leaves begin
  // near an actual neighbor. These are only starting coordinates: there is no
  // boundary or center force in the simulation that follows.
  const positioned = new Uint8Array(count);
  const branchAngle = new Float64Array(count);
  const priority = (index) => mass[index] * Math.log2(2 + adjacency[index].size);
  const rootOrder = [...Array(count).keys()].sort((left, right) => priority(right) - priority(left) || nodes[left].href.localeCompare(nodes[right].href));
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  let component = 0;
  for (const root of rootOrder) {
    if (positioned[root]) continue;
    const componentAngle = component * goldenAngle;
    const componentDistance = component === 0 ? 0 : 110 * Math.sqrt(component);
    x[root] = Math.cos(componentAngle) * componentDistance;
    y[root] = Math.sin(componentAngle) * componentDistance;
    branchAngle[root] = componentAngle;
    positioned[root] = 1;
    const queue = [root];
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const parent = queue[cursor];
      const children = [...adjacency[parent]]
        .filter((neighbor) => !positioned[neighbor])
        .sort((left, right) => priority(right) - priority(left) || nodes[left].href.localeCompare(nodes[right].href));
      for (let childIndex = 0; childIndex < children.length; childIndex += 1) {
        const child = children[childIndex];
        if (positioned[child]) continue;
        const fan = Math.min(Math.PI * 2, Math.PI * 0.72 + children.length * 0.035);
        const fanPosition = (childIndex + 0.5) / Math.max(1, children.length) - 0.5;
        const jitter = (hashUnit(`${nodes[parent].href}|${nodes[child].href}`, 11) - 0.5) * 0.22;
        const angle = branchAngle[parent] + fanPosition * fan + jitter;
        const distance = radius[parent] + radius[child] + 14 + Math.sqrt(children.length) * 5;
        x[child] = x[parent] + Math.cos(angle) * distance;
        y[child] = y[parent] + Math.sin(angle) * distance;
        branchAngle[child] = angle;
        positioned[child] = 1;
        queue.push(child);
      }
    }
    component += 1;
  }

  const maximumRadius = Math.max(...radius);
  const clearanceGap = 8;
  const neighborRange = maximumRadius * 2 + clearanceGap + 14;
  const gravityConstant = 3;
  const iterations = 560;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    ax.fill(0); ay.fill(0); az.fill(0);
    const progress = iteration / (iterations - 1);
    for (const [source, target] of edges) {
      let dx = x[target] - x[source];
      let dy = y[target] - y[source];
      let distance = Math.hypot(dx, dy);
      if (distance < 0.001) {
        dx = hashUnit(nodes[source].href + nodes[target].href, 53) - 0.5;
        dy = hashUnit(nodes[source].href + nodes[target].href, 59) - 0.5;
        distance = Math.max(0.001, Math.hypot(dx, dy));
      }
      const clearance = radius[source] + radius[target] + clearanceGap;
      const softening = clearance * 0.8;
      const force = gravityConstant * mass[source] * mass[target] / (distance * distance + softening * softening);
      const sourceAcceleration = Math.min(2.2, force / mass[source]);
      const targetAcceleration = Math.min(2.2, force / mass[target]);
      dx /= distance; dy /= distance;
      ax[source] += dx * sourceAcceleration; ay[source] += dy * sourceAcceleration;
      ax[target] -= dx * targetAcceleration; ay[target] -= dy * targetAcceleration;
    }

    spatialPairs(x, y, z, neighborRange, (left, right) => {
      let dx = x[right] - x[left];
      let dy = y[right] - y[left];
      let dz = 0;
      let distance = Math.hypot(dx, dy, dz);
      if (distance < 0.001) {
        dx = hashUnit(nodes[left].href + nodes[right].href, 71) - 0.5;
        dy = hashUnit(nodes[left].href + nodes[right].href, 73) - 0.5;
        dz = 0;
        distance = Math.max(0.001, Math.hypot(dx, dy, dz));
      }
      const clearance = radius[left] + radius[right] + clearanceGap;
      if (distance >= neighborRange) return;
      const collision = distance < clearance ? (clearance - distance) * 0.38 : 0;
      const breathingRoom = (neighborRange - distance) * 0.0025;
      const separation = collision + breathingRoom;
      const leftShare = mass[right] / (mass[left] + mass[right]);
      const rightShare = mass[left] / (mass[left] + mass[right]);
      dx /= distance; dy /= distance;
      ax[left] -= dx * separation * leftShare; ay[left] -= dy * separation * leftShare;
      ax[right] += dx * separation * rightShare; ay[right] += dy * separation * rightShare;
    });

    const damping = 0.84;
    const speedLimit = 7 * (1 - progress) + 0.18;
    for (let index = 0; index < count; index += 1) {
      az[index] = 0;
      vx[index] = (vx[index] + ax[index]) * damping;
      vy[index] = (vy[index] + ay[index]) * damping;
      vz[index] = 0;
      const speed = Math.hypot(vx[index], vy[index], vz[index]);
      if (speed > speedLimit) {
        const scale = speedLimit / speed;
        vx[index] *= scale; vy[index] *= scale; vz[index] *= scale;
      }
      x[index] += vx[index]; y[index] += vy[index]; z[index] = 0;
    }
  }

  // Preserve the gravity solution while guaranteeing clearance in continuous,
  // unbounded space. Larger and more connected articles claim their gravity
  // coordinates first; smaller articles take the nearest open point instead
  // of being snapped into a bounded lattice.
  const hardClearanceGap = 5;
  const packedX = new Float64Array(count);
  const packedY = new Float64Array(count);
  const packed = new Uint8Array(count);
  const packingCellSize = maximumRadius * 2 + hardClearanceGap;
  const packingBuckets = new Map();
  let packingAttempts = 0;
  let maximumPackingAttempts = 0;

  function bucketKeyAt(candidateX, candidateY) {
    return [Math.floor(candidateX / packingCellSize), Math.floor(candidateY / packingCellSize)];
  }

  function positionIsOpen(node, candidateX, candidateY) {
    const [cellX, cellY] = bucketKeyAt(candidateX, candidateY);
    for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (const other of packingBuckets.get(`${cellX + offsetX},${cellY + offsetY}`) || []) {
          const clearance = radius[node] + radius[other] + hardClearanceGap;
          if (Math.hypot(candidateX - packedX[other], candidateY - packedY[other]) < clearance) return false;
        }
      }
    }
    return true;
  }

  function placeNearest(node, desiredX, desiredY, angleSeed) {
    const radialStep = Math.max(2.5, radius[node] * 0.62);
    for (let attempt = 0; attempt < 40_000; attempt += 1) {
      const distance = attempt ? radialStep * Math.sqrt(attempt) : 0;
      const angle = angleSeed + attempt * goldenAngle;
      const candidateX = desiredX + Math.cos(angle) * distance;
      const candidateY = desiredY + Math.sin(angle) * distance;
      if (!positionIsOpen(node, candidateX, candidateY)) continue;
      packedX[node] = candidateX;
      packedY[node] = candidateY;
      packed[node] = 1;
      const [cellX, cellY] = bucketKeyAt(candidateX, candidateY);
      const key = `${cellX},${cellY}`;
      if (!packingBuckets.has(key)) packingBuckets.set(key, []);
      packingBuckets.get(key).push(node);
      packingAttempts += attempt;
      maximumPackingAttempts = Math.max(maximumPackingAttempts, attempt);
      return;
    }
    throw new Error(`No collision-free position found for ${nodes[node].href}.`);
  }

  const isPendantLeaf = (node) => adjacency[node].size === 1 && adjacency[adjacency[node].values().next().value].size > 1;
  const coreOrder = [...Array(count).keys()]
    .filter((node) => !isPendantLeaf(node))
    .sort((left, right) => priority(right) - priority(left) || nodes[left].href.localeCompare(nodes[right].href));
  for (const node of coreOrder) placeNearest(node, x[node], y[node], hashUnit(nodes[node].href, 107) * Math.PI * 2);

  let leafRelocations = 0;
  const leafOrder = [...Array(count).keys()]
    .filter(isPendantLeaf)
    .sort((left, right) => priority(adjacency[right].values().next().value) - priority(adjacency[left].values().next().value) || nodes[left].href.localeCompare(nodes[right].href));
  for (const node of leafOrder) {
    const neighbor = adjacency[node].values().next().value;
    if (!packed[neighbor]) throw new Error(`Pendant neighbor was not packed for ${nodes[node].href}.`);
    const angle = hashUnit(`${nodes[node].href}|${nodes[neighbor].href}`, 109) * Math.PI * 2;
    const distance = radius[node] + radius[neighbor] + hardClearanceGap + 2;
    placeNearest(node, packedX[neighbor] + Math.cos(angle) * distance, packedY[neighbor] + Math.sin(angle) * distance, angle);
    leafRelocations += 1;
  }

  x.set(packedX);
  y.set(packedY);

  const totalMass = mass.reduce((sum, value) => sum + value, 0);
  const center = [
    x.reduce((sum, value, index) => sum + value * mass[index], 0) / totalMass,
    y.reduce((sum, value, index) => sum + value * mass[index], 0) / totalMass,
    0
  ];
  for (let index = 0; index < count; index += 1) {
    x[index] -= center[0]; y[index] -= center[1]; z[index] -= center[2];
  }
  return { x, y, z, degree, gravityConstant, packingAttempts, maximumPackingAttempts, leafRelocations };
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
  radius: 2.4 + 0.24 * Math.sqrt(page.words)
}));
const layout = forceLayout(nodes, edges);
const compactNodes = nodes.map((node, index) => [
  node.title,
  node.href,
  node.words,
  Number(node.radius.toFixed(2)),
  Number(layout.x[index].toFixed(2)),
  Number(layout.y[index].toFixed(2)),
  Number(layout.z[index].toFixed(2)),
  layout.degree[index]
]);
const graph = {
  generated: new Date().toISOString(),
  pageCount: compactNodes.length,
  connectionCount: edges.length,
  maximumWords,
  layoutModel: "connected-gravity-v1",
  massUnit: "visible-word",
  gravityStrength: layout.gravityConstant,
  packingAttempts: layout.packingAttempts,
  maximumPackingAttempts: layout.maximumPackingAttempts,
  leafRelocations: layout.leafRelocations,
  nodes: compactNodes,
  edges
};
await writeFile(outputFile, `// Generated by scripts/build-wiki-graph.mjs.\nwindow.WIKI_GRAPH_DATA=${JSON.stringify(graph)};\n`, "utf8");
console.log(`Built wiki graph: ${graph.pageCount} pages, ${graph.connectionCount} directed connections.`);
