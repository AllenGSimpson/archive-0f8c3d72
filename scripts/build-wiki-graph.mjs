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
  const degree = new Uint32Array(count);
  for (const [source, target] of edges) {
    degree[source] += 1;
    degree[target] += 1;
  }

  const initialExtent = Math.sqrt(count) * 15;
  for (let index = 0; index < count; index += 1) {
    const angle = hashUnit(nodes[index].href, 11) * Math.PI * 2;
    const distance = initialExtent * (0.28 + 0.72 * Math.sqrt(hashUnit(nodes[index].href, 47)));
    x[index] = Math.cos(angle) * distance;
    y[index] = Math.sin(angle) * distance;
    z[index] = 0;
  }

  const iterations = 320;
  const neighborRange = 48;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    ax.fill(0); ay.fill(0); az.fill(0);
    const progress = iteration / (iterations - 1);
    const attraction = 0.0075 * (0.55 + progress * 0.45);
    for (const [source, target] of edges) {
      let dx = x[target] - x[source];
      let dy = y[target] - y[source];
      let dz = 0;
      const distance = Math.max(0.001, Math.hypot(dx, dy, dz));
      const ideal = radius[source] + radius[target] + 12;
      const hubWeight = 1 / Math.sqrt(1 + Math.max(degree[source], degree[target]) * 0.08);
      const force = (distance - ideal) * attraction * hubWeight;
      dx /= distance; dy /= distance; dz /= distance;
      ax[source] += dx * force; ay[source] += dy * force; az[source] += dz * force;
      ax[target] -= dx * force; ay[target] -= dy * force; az[target] -= dz * force;
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
      const clearance = radius[left] + radius[right] + 4;
      if (distance >= neighborRange) return;
      const collision = distance < clearance ? (clearance - distance) * 0.24 : 0;
      const repulsion = (neighborRange - distance) * 0.0018;
      const force = collision + repulsion;
      dx /= distance; dy /= distance; dz /= distance;
      ax[left] -= dx * force; ay[left] -= dy * force; az[left] -= dz * force;
      ax[right] += dx * force; ay[right] += dy * force; az[right] += dz * force;
    });

    const damping = 0.82;
    const speedLimit = 6 * (1 - progress) + 0.55;
    for (let index = 0; index < count; index += 1) {
      ax[index] -= x[index] * 0.00045;
      ay[index] -= y[index] * 0.00045;
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

  let rows = Math.ceil(Math.sqrt(count / (Math.PI / 4 * 1.6)) * 1.04);
  let columns;
  let cells;
  do {
    columns = Math.ceil(rows * 1.6);
    cells = [];
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const normalizedX = (column + 0.5 - columns / 2) / (columns / 2);
        const normalizedY = (row + 0.5 - rows / 2) / (rows / 2);
        if (normalizedX ** 2 + normalizedY ** 2 <= 1) cells.push([row, column]);
      }
    }
    if (cells.length < count) rows += 1;
  } while (cells.length < count);
  const cellCount = cells.length;
  const cellLookup = new Map(cells.map(([row, column], index) => [`${row},${column}`, index]));
  const maximumRadius = Math.max(...radius);
  const spacing = maximumRadius * 2 + 4;
  const rowSpacing = spacing * Math.sqrt(3) / 2;
  const desiredColumn = new Float64Array(count);
  const desiredRow = new Float64Array(count);
  [...Array(count).keys()].sort((left, right) => x[left] - x[right]).forEach((node, rank) => {
    desiredColumn[node] = rank / Math.max(1, count - 1) * (columns - 1);
  });
  [...Array(count).keys()].sort((left, right) => y[left] - y[right]).forEach((node, rank) => {
    desiredRow[node] = rank / Math.max(1, count - 1) * (rows - 1);
  });

  const occupied = new Int32Array(cellCount);
  occupied.fill(-1);
  const assignment = new Int32Array(count);
  const placementOrder = [...Array(count).keys()].sort((left, right) => degree[right] - degree[left] || nodes[left].href.localeCompare(nodes[right].href));
  for (const node of placementOrder) {
    const targetColumn = Math.round(desiredColumn[node]);
    const targetRow = Math.round(desiredRow[node]);
    let chosen = -1;
    let chosenScore = Infinity;
    for (let ring = 0; ring < Math.max(columns, rows) && chosen < 0; ring += 1) {
      const minimumColumn = Math.max(0, targetColumn - ring);
      const maximumColumn = Math.min(columns - 1, targetColumn + ring);
      const minimumRow = Math.max(0, targetRow - ring);
      const maximumRow = Math.min(rows - 1, targetRow + ring);
      for (let row = minimumRow; row <= maximumRow; row += 1) {
        for (let column = minimumColumn; column <= maximumColumn; column += 1) {
          if (ring && column !== minimumColumn && column !== maximumColumn && row !== minimumRow && row !== maximumRow) continue;
          const cell = cellLookup.get(`${row},${column}`);
          if (cell === undefined || occupied[cell] >= 0) continue;
          const score = (column - desiredColumn[node]) ** 2 + (row - desiredRow[node]) ** 2;
          if (score < chosenScore) { chosen = cell; chosenScore = score; }
        }
      }
    }
    if (chosen < 0) throw new Error(`No lattice cell available for ${nodes[node].href}.`);
    occupied[chosen] = node;
    assignment[node] = chosen;
  }

  for (let index = 0; index < count; index += 1) {
    const [row, column] = cells[assignment[index]];
    x[index] = (column + (row % 2) * 0.5) * spacing;
    y[index] = row * rowSpacing;
    z[index] = 0;
  }

  const center = [x.reduce((sum, value) => sum + value, 0) / count, y.reduce((sum, value) => sum + value, 0) / count, z.reduce((sum, value) => sum + value, 0) / count];
  for (let index = 0; index < count; index += 1) {
    x[index] -= center[0]; y[index] -= center[1]; z[index] -= center[2];
  }
  return { x, y, z, degree };
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
  radius: 2.2 + 12.8 * Math.sqrt(page.words / maximumWords)
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
  nodes: compactNodes,
  edges
};
await writeFile(outputFile, `// Generated by scripts/build-wiki-graph.mjs.\nwindow.WIKI_GRAPH_DATA=${JSON.stringify(graph)};\n`, "utf8");
console.log(`Built wiki graph: ${graph.pageCount} pages, ${graph.connectionCount} directed connections.`);
