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

function localCommunityMove(adjacency, names, resolution) {
  const count = adjacency.length;
  const degree = Float64Array.from(adjacency, (neighbors) => [...neighbors.values()].reduce((sum, weight) => sum + weight, 0));
  const community = Int32Array.from({ length: count }, (_, index) => index);
  const communityDegree = Float64Array.from(degree);
  const totalDegree = degree.reduce((sum, value) => sum + value, 0);
  const order = [...Array(count).keys()]
    .sort((left, right) => degree[right] - degree[left] || names[left].localeCompare(names[right]));

  for (let pass = 0; pass < 40; pass += 1) {
    let moves = 0;
    for (const node of order) {
      const original = community[node];
      const nodeDegree = degree[node];
      const connections = new Map();
      for (const [neighbor, weight] of adjacency[node]) {
        const neighborCommunity = community[neighbor];
        connections.set(neighborCommunity, (connections.get(neighborCommunity) || 0) + weight);
      }
      communityDegree[original] -= nodeDegree;
      let best = original;
      let bestGain = (connections.get(original) || 0) - resolution * nodeDegree * communityDegree[original] / totalDegree;
      for (const [candidate, internalWeight] of connections) {
        const gain = internalWeight - resolution * nodeDegree * communityDegree[candidate] / totalDegree;
        if (gain > bestGain + 1e-12 || (Math.abs(gain - bestGain) < 1e-12 && candidate < best)) {
          best = candidate;
          bestGain = gain;
        }
      }
      community[node] = best;
      communityDegree[best] += nodeDegree;
      if (best !== original) moves += 1;
    }
    if (!moves) break;
  }
  return community;
}

function detectCommunities(adjacency, nodes) {
  const names = nodes.map((node) => node.href);
  const fine = localCommunityMove(adjacency, names, 1.2);
  const fineLabels = [...new Set(fine)].sort((left, right) => left - right);
  const fineIndex = new Map(fineLabels.map((label, index) => [label, index]));
  const metaAdjacency = Array.from({ length: fineLabels.length }, () => new Map());
  const metaNames = new Array(fineLabels.length);
  for (let node = 0; node < nodes.length; node += 1) {
    const group = fineIndex.get(fine[node]);
    if (metaNames[group] === undefined || nodes[node].href < metaNames[group]) metaNames[group] = nodes[node].href;
    for (const [neighbor, weight] of adjacency[node]) {
      if (neighbor <= node) continue;
      const otherGroup = fineIndex.get(fine[neighbor]);
      if (group === otherGroup) continue;
      metaAdjacency[group].set(otherGroup, (metaAdjacency[group].get(otherGroup) || 0) + weight);
      metaAdjacency[otherGroup].set(group, (metaAdjacency[otherGroup].get(group) || 0) + weight);
    }
  }

  // A second pass over the fine groups yields a few dozen legible article
  // neighborhoods instead of hundreds of tiny fragments or one giant hub.
  const coarse = localCommunityMove(metaAdjacency, metaNames, 1.4);
  const raw = Int32Array.from(fine, (label) => coarse[fineIndex.get(label)]);
  const groups = new Map();
  for (let node = 0; node < nodes.length; node += 1) {
    if (!groups.has(raw[node])) groups.set(raw[node], []);
    groups.get(raw[node]).push(node);
  }
  const orderedGroups = [...groups.values()].sort((left, right) =>
    right.length - left.length
    || nodes[left.reduce((best, node) => nodes[node].href < nodes[best].href ? node : best)].href
      .localeCompare(nodes[right.reduce((best, node) => nodes[node].href < nodes[best].href ? node : best)].href));
  const community = new Int32Array(nodes.length);
  for (let group = 0; group < orderedGroups.length; group += 1) {
    for (const node of orderedGroups[group]) community[node] = group;
  }
  return { community, groups: orderedGroups };
}

function arrangeCommunityAnchors(nodes, layoutEdges, community, groups, radius) {
  const count = groups.length;
  const x = new Float64Array(count);
  const y = new Float64Array(count);
  const vx = new Float64Array(count);
  const vy = new Float64Array(count);
  const ax = new Float64Array(count);
  const ay = new Float64Array(count);
  const bubbleRadius = new Float64Array(count);
  const weight = new Float64Array(count);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let group = 0; group < count; group += 1) {
    let area = 0;
    for (const node of groups[group]) {
      const paddedRadius = radius[node] + 5.5;
      area += paddedRadius * paddedRadius;
      weight[group] += nodes[node].words;
    }
    bubbleRadius[group] = Math.sqrt(area) * 1.45 + 30;
    const angle = group * goldenAngle;
    const distance = group ? 105 * Math.sqrt(group) : 0;
    x[group] = Math.cos(angle) * distance;
    y[group] = Math.sin(angle) * distance;
  }

  const connectionWeights = new Map();
  for (const [source, target] of layoutEdges) {
    const left = community[source];
    const right = community[target];
    if (left === right) continue;
    const a = Math.min(left, right);
    const b = Math.max(left, right);
    const key = `${a},${b}`;
    connectionWeights.set(key, (connectionWeights.get(key) || 0) + 1);
  }
  const communityEdges = [...connectionWeights].map(([key, edgeWeight]) => {
    const [source, target] = key.split(",").map(Number);
    return [source, target, edgeWeight];
  });
  const linkDegree = new Float64Array(count);
  for (const [source, target, edgeWeight] of communityEdges) {
    linkDegree[source] += edgeWeight;
    linkDegree[target] += edgeWeight;
  }

  for (let iteration = 0; iteration < 720; iteration += 1) {
    ax.fill(0); ay.fill(0);
    const progress = iteration / 719;
    for (let left = 0; left < count; left += 1) {
      for (let right = left + 1; right < count; right += 1) {
        let dx = x[right] - x[left];
        let dy = y[right] - y[left];
        let distance = Math.hypot(dx, dy);
        if (distance < 0.001) {
          dx = hashUnit(`${left}|${right}`, 131) - 0.5;
          dy = hashUnit(`${left}|${right}`, 137) - 0.5;
          distance = Math.max(0.001, Math.hypot(dx, dy));
        }
        const clearance = bubbleRadius[left] + bubbleRadius[right] + 42;
        const overlap = Math.max(0, clearance - distance);
        const nearbyRepulsion = distance < clearance * 1.55 ? (clearance * 1.55 - distance) * 0.002 : 0;
        const separation = overlap * 0.18 + nearbyRepulsion;
        dx /= distance; dy /= distance;
        const totalWeight = weight[left] + weight[right];
        const leftShare = weight[right] / totalWeight;
        const rightShare = weight[left] / totalWeight;
        ax[left] -= dx * separation * leftShare; ay[left] -= dy * separation * leftShare;
        ax[right] += dx * separation * rightShare; ay[right] += dy * separation * rightShare;
      }
    }
    for (const [source, target, edgeWeight] of communityEdges) {
      let dx = x[target] - x[source];
      let dy = y[target] - y[source];
      const distance = Math.max(0.001, Math.hypot(dx, dy));
      const clearance = bubbleRadius[source] + bubbleRadius[target] + 68;
      const extension = Math.max(0, distance - clearance);
      const normalization = edgeWeight / Math.sqrt(linkDegree[source] * linkDegree[target]);
      const pull = extension * (0.0005 + 0.004 * Math.sqrt(normalization));
      dx /= distance; dy /= distance;
      ax[source] += dx * pull; ay[source] += dy * pull;
      ax[target] -= dx * pull; ay[target] -= dy * pull;
    }
    for (let group = 0; group < count; group += 1) {
      ax[group] -= x[group] * 0.00022;
      ay[group] -= y[group] * 0.00022;
      vx[group] = (vx[group] + ax[group]) * 0.82;
      vy[group] = (vy[group] + ay[group]) * 0.82;
      const speedLimit = 12 * (1 - progress) + 0.14;
      const speed = Math.hypot(vx[group], vy[group]);
      if (speed > speedLimit) {
        vx[group] *= speedLimit / speed;
        vy[group] *= speedLimit / speed;
      }
      x[group] += vx[group];
      y[group] += vy[group];
    }
  }
  return { x, y, radius: bubbleRadius, edges: communityEdges };
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
  const adjacency = Array.from({ length: count }, () => new Map());
  const layoutEdgeKeys = new Set();
  const layoutEdges = [];
  for (const [source, target] of edges) {
    degree[source] += 1;
    degree[target] += 1;
    const left = Math.min(source, target);
    const right = Math.max(source, target);
    const key = `${left},${right}`;
    if (left === right || layoutEdgeKeys.has(key)) continue;
    layoutEdgeKeys.add(key);
    layoutEdges.push([left, right]);
    adjacency[left].set(right, 1);
    adjacency[right].set(left, 1);
  }

  const { community, groups } = detectCommunities(adjacency, nodes);
  const anchors = arrangeCommunityAnchors(nodes, layoutEdges, community, groups, radius);

  // Seed every article inside its detected neighborhood. The neighborhood
  // bubbles are linked and centered as a bounded graph, while articles remain
  // free to settle around their own connections inside each bubble.
  const priority = (index) => mass[index] * Math.log2(2 + adjacency[index].size);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let group = 0; group < groups.length; group += 1) {
    const order = [...groups[group]].sort((left, right) => priority(right) - priority(left) || nodes[left].href.localeCompare(nodes[right].href));
    let occupiedArea = 0;
    for (let rank = 0; rank < order.length; rank += 1) {
      const node = order[rank];
      const paddedRadius = radius[node] + 5.5;
      occupiedArea += paddedRadius * paddedRadius;
      const angle = rank * goldenAngle + (hashUnit(nodes[node].href, 11) - 0.5) * 0.28;
      const distance = rank ? Math.sqrt(occupiedArea) * 1.14 : 0;
      x[node] = anchors.x[group] + Math.cos(angle) * distance;
      y[node] = anchors.y[group] + Math.sin(angle) * distance;
    }
  }
  const homeX = Float64Array.from(x);
  const homeY = Float64Array.from(y);

  const maximumRadius = Math.max(...radius);
  const clearanceGap = 8;
  const neighborRange = maximumRadius * 2 + clearanceGap + 14;
  const gravityConstant = 3;
  const iterations = 560;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    ax.fill(0); ay.fill(0); az.fill(0);
    const progress = iteration / (iterations - 1);
    for (const [source, target] of layoutEdges) {
      let dx = x[target] - x[source];
      let dy = y[target] - y[source];
      let distance = Math.hypot(dx, dy);
      if (distance < 0.001) {
        dx = hashUnit(nodes[source].href + nodes[target].href, 53) - 0.5;
        dy = hashUnit(nodes[source].href + nodes[target].href, 59) - 0.5;
        distance = Math.max(0.001, Math.hypot(dx, dy));
      }
      const clearance = radius[source] + radius[target] + clearanceGap;
      const sameCommunity = community[source] === community[target];
      const desiredDistance = clearance + (sameCommunity ? 20 : 78);
      const extension = Math.max(0, distance - desiredDistance);
      const hubNormalization = Math.min(1, 4 / Math.sqrt(adjacency[source].size * adjacency[target].size));
      // Cross-community links position the neighborhood bubbles above. Keeping
      // their article-level pull tiny prevents portal links from threading
      // individual articles back through the center of unrelated clusters.
      const pull = extension * hubNormalization * (sameCommunity ? 0.021 : 0.00008);
      const sourceAcceleration = Math.min(1.8, pull * mass[target] / (mass[source] + mass[target]));
      const targetAcceleration = Math.min(1.8, pull * mass[source] / (mass[source] + mass[target]));
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

    for (let index = 0; index < count; index += 1) {
      ax[index] += (homeX[index] - x[index]) * 0.0018;
      ay[index] += (homeY[index] - y[index]) * 0.0018;
    }

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

  const firstNeighbor = (node) => adjacency[node].keys().next().value;
  const isPendantLeaf = (node) => adjacency[node].size === 1 && adjacency[firstNeighbor(node)].size > 1;
  const coreOrder = [...Array(count).keys()]
    .filter((node) => !isPendantLeaf(node))
    .sort((left, right) => community[left] - community[right] || priority(right) - priority(left) || nodes[left].href.localeCompare(nodes[right].href));
  for (const node of coreOrder) placeNearest(node, x[node], y[node], hashUnit(nodes[node].href, 107) * Math.PI * 2);

  let leafRelocations = 0;
  const leafOrder = [...Array(count).keys()]
    .filter(isPendantLeaf)
    .sort((left, right) => community[left] - community[right] || priority(firstNeighbor(right)) - priority(firstNeighbor(left)) || nodes[left].href.localeCompare(nodes[right].href));
  for (const node of leafOrder) {
    const neighbor = firstNeighbor(node);
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
  const communitySizes = groups.map((group) => group.length);
  return {
    x, y, z, degree, community, gravityConstant, packingAttempts, maximumPackingAttempts, leafRelocations,
    layoutEdgeCount: layoutEdges.length,
    communityCount: groups.length,
    largestCommunity: Math.max(...communitySizes)
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
  layout.degree[index],
  layout.community[index]
]);
const graph = {
  generated: new Date().toISOString(),
  pageCount: compactNodes.length,
  connectionCount: edges.length,
  maximumWords,
  layoutModel: "bounded-community-gravity-v2",
  massUnit: "visible-word",
  gravityStrength: layout.gravityConstant,
  layoutEdgeCount: layout.layoutEdgeCount,
  communityCount: layout.communityCount,
  largestCommunity: layout.largestCommunity,
  packingAttempts: layout.packingAttempts,
  maximumPackingAttempts: layout.maximumPackingAttempts,
  leafRelocations: layout.leafRelocations,
  nodes: compactNodes,
  edges
};
await writeFile(outputFile, `// Generated by scripts/build-wiki-graph.mjs.\nwindow.WIKI_GRAPH_DATA=${JSON.stringify(graph)};\n`, "utf8");
console.log(`Built wiki graph: ${graph.pageCount} pages, ${graph.connectionCount} directed connections.`);
