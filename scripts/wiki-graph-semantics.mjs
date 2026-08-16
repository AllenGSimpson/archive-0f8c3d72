const STOPWORDS = new Set([
  "a", "about", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "as", "at",
  "be", "because", "been", "before", "being", "between", "both", "but", "by", "can", "could", "did", "do",
  "does", "during", "each", "for", "from", "further", "had", "has", "have", "having", "he", "her", "here",
  "hers", "herself", "him", "himself", "his", "how", "i", "if", "in", "into", "is", "it", "its", "itself",
  "may", "me", "might", "more", "most", "my", "myself", "no", "nor", "not", "of", "off", "on", "once",
  "only", "or", "other", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "should", "so",
  "some", "such", "than", "that", "the", "their", "theirs", "them", "themselves", "then", "there", "these",
  "they", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "were",
  "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "you", "your"
]);

function stableHash(value, salt = 0) {
  let hash = 2166136261 ^ salt;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function tokens(value) {
  const normalized = String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en-US");
  return normalized.match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu)
    ?.filter((token) => token.length >= 2 && !STOPWORDS.has(token) && !/^\d+$/.test(token)) || [];
}

function addField(features, value, weight, bigrams = false) {
  const values = tokens(Array.isArray(value) ? value.join(" ") : value);
  for (const token of values) features.set(token, (features.get(token) || 0) + weight);
  if (bigrams) for (let index = 1; index < values.length; index += 1) {
    const token = `${values[index - 1]}::${values[index]}`;
    features.set(token, (features.get(token) || 0) + weight);
  }
}

function semanticVectors(nodes) {
  const raw = nodes.map((node) => {
    const features = new Map();
    addField(features, node.title, 8, true);
    addField(features, node.categories, 6, true);
    addField(features, node.headings, 3);
    addField(features, node.lead, 2);
    addField(features, node.body, 0.15);
    return features;
  });
  const documentFrequency = new Map();
  for (const features of raw) for (const feature of features.keys()) {
    documentFrequency.set(feature, (documentFrequency.get(feature) || 0) + 1);
  }
  let semanticFeatureCount = 0;
  const vectors = raw.map((features) => {
    const vector = new Map();
    let normSquared = 0;
    for (const [feature, frequency] of features) {
      const inverseDocumentFrequency = Math.log((nodes.length + 1) / ((documentFrequency.get(feature) || 0) + 1)) + 1;
      const weight = (1 + Math.log(Math.max(Number.EPSILON, frequency))) * inverseDocumentFrequency;
      vector.set(feature, weight);
      normSquared += weight * weight;
    }
    const norm = Math.sqrt(normSquared) || 1;
    for (const [feature, weight] of vector) vector.set(feature, weight / norm);
    semanticFeatureCount += vector.size;
    return vector;
  });
  return { vectors, semanticFeatureCount };
}

function cosine(left, right) {
  if (left.size > right.size) return cosine(right, left);
  let result = 0;
  for (const [feature, weight] of left) result += weight * (right.get(feature) || 0);
  return result;
}

function normalizedCategories(node) {
  return new Set((node.categories || []).flatMap((category) => tokens(category)));
}

function jaccard(left, right) {
  if (!left.size || !right.size) return 0;
  let shared = 0;
  for (const value of left) if (right.has(value)) shared += 1;
  return shared / (left.size + right.size - shared);
}

export function buildReferenceGraph(count, directedEdges) {
  const adjacencySets = Array.from({ length: count }, () => new Set());
  const outgoing = Array.from({ length: count }, () => new Set());
  const incoming = Array.from({ length: count }, () => new Set());
  const pairMap = new Map();
  for (const [source, target] of directedEdges) {
    if (source === target || source < 0 || target < 0 || source >= count || target >= count) continue;
    outgoing[source].add(target);
    incoming[target].add(source);
    adjacencySets[source].add(target);
    adjacencySets[target].add(source);
    const a = Math.min(source, target);
    const b = Math.max(source, target);
    const key = `${a}:${b}`;
    let pair = pairMap.get(key);
    if (!pair) {
      pair = { a, b, ab: false, ba: false };
      pairMap.set(key, pair);
    }
    if (source === a) pair.ab = true;
    else pair.ba = true;
  }
  const adjacency = adjacencySets.map((neighbors) => [...neighbors].sort((a, b) => a - b));
  const pairs = [...pairMap.values()].sort((left, right) => left.a - right.a || left.b - right.b);
  return {
    adjacency, outgoing, incoming, pairs,
    degree: adjacency.map((neighbors) => neighbors.length)
  };
}

function sampledBetweenness(adjacency, nodes, sampleCount = 128) {
  const sources = Array.from({ length: nodes.length }, (_, index) => index)
    .sort((a, b) => stableHash(nodes[a].href) - stableHash(nodes[b].href) || nodes[a].href.localeCompare(nodes[b].href))
    .slice(0, Math.min(sampleCount, nodes.length));
  const centrality = new Float64Array(nodes.length);
  for (const source of sources) {
    const stack = [];
    const predecessors = Array.from({ length: nodes.length }, () => []);
    const paths = new Float64Array(nodes.length);
    const distance = new Int32Array(nodes.length);
    distance.fill(-1);
    paths[source] = 1;
    distance[source] = 0;
    const queue = new Int32Array(nodes.length);
    let head = 0;
    let tail = 0;
    queue[tail++] = source;
    while (head < tail) {
      const vertex = queue[head++];
      stack.push(vertex);
      for (const neighbor of adjacency[vertex]) {
        if (distance[neighbor] < 0) {
          distance[neighbor] = distance[vertex] + 1;
          queue[tail++] = neighbor;
        }
        if (distance[neighbor] === distance[vertex] + 1) {
          paths[neighbor] += paths[vertex];
          predecessors[neighbor].push(vertex);
        }
      }
    }
    const dependency = new Float64Array(nodes.length);
    while (stack.length) {
      const vertex = stack.pop();
      for (const predecessor of predecessors[vertex]) {
        if (paths[vertex]) dependency[predecessor] += paths[predecessor] / paths[vertex] * (1 + dependency[vertex]);
      }
      if (vertex !== source) centrality[vertex] += dependency[vertex];
    }
  }
  return { values: [...centrality], sampleCount: sources.length };
}

function logNormalize(values) {
  const maximum = Math.max(0, ...values.map((value) => Math.log1p(value)));
  return values.map((value) => maximum ? Math.log1p(value) / maximum : 0);
}

function relationStrength(child, parent, graph) {
  const childToParent = graph.outgoing[child].has(parent);
  const parentToChild = graph.outgoing[parent].has(child);
  if (childToParent && parentToChild) return 1;
  if (childToParent) return 0.65;
  return parentToChild ? 0.25 : 0;
}

function linkProminence(nodes, child, parent) {
  return Number(nodes[child].linkProminence?.[nodes[parent].href] || 0);
}

function connectedComponents(adjacency, nodes) {
  const seen = new Uint8Array(nodes.length);
  const components = [];
  const order = Array.from({ length: nodes.length }, (_, index) => index)
    .sort((a, b) => nodes[a].href.localeCompare(nodes[b].href));
  for (const start of order) {
    if (seen[start]) continue;
    const members = [];
    const queue = [start];
    seen[start] = 1;
    for (let head = 0; head < queue.length; head += 1) {
      const node = queue[head];
      members.push(node);
      for (const neighbor of adjacency[node]) if (!seen[neighbor]) {
        seen[neighbor] = 1;
        queue.push(neighbor);
      }
    }
    components.push(members.sort((a, b) => nodes[a].href.localeCompare(nodes[b].href)));
  }
  return components;
}

function validateOverrides(nodes, overrides) {
  const hrefIndex = new Map(nodes.map((node, index) => [node.href, index]));
  const anchorHrefs = overrides?.anchors || [];
  const parentEntries = Object.entries(overrides?.parents || {});
  if (!Array.isArray(anchorHrefs)) throw new Error("Wiki graph overrides 'anchors' must be an array.");
  if (!overrides?.parents || Array.isArray(overrides.parents) || typeof overrides.parents !== "object") {
    throw new Error("Wiki graph overrides 'parents' must be an object.");
  }
  if (new Set(anchorHrefs).size !== anchorHrefs.length) throw new Error("Wiki graph overrides contain duplicate anchors.");
  const anchors = new Set();
  for (const href of anchorHrefs) {
    if (!hrefIndex.has(href)) throw new Error(`Wiki graph anchor does not exist: ${href}`);
    anchors.add(hrefIndex.get(href));
  }
  const parents = new Map();
  for (const [childHref, parentHref] of parentEntries) {
    if (!hrefIndex.has(childHref)) throw new Error(`Wiki graph parent override child does not exist: ${childHref}`);
    if (!hrefIndex.has(parentHref)) throw new Error(`Wiki graph parent override parent does not exist: ${parentHref}`);
    const child = hrefIndex.get(childHref);
    const parent = hrefIndex.get(parentHref);
    if (child === parent) throw new Error(`Wiki graph parent override cannot self-parent: ${childHref}`);
    if (anchors.has(child)) throw new Error(`Wiki graph anchor cannot also have a parent override: ${childHref}`);
    parents.set(child, parent);
  }
  return { anchors, parents };
}

function assertAcyclic(parents, nodes) {
  const state = new Uint8Array(parents.length);
  const visit = (node) => {
    if (state[node] === 2) return;
    if (state[node] === 1) throw new Error(`Wiki graph parent overrides create a cycle at ${nodes[node].href}.`);
    state[node] = 1;
    if (parents[node] >= 0) visit(parents[node]);
    state[node] = 2;
  };
  for (let node = 0; node < parents.length; node += 1) visit(node);
}

function descendants(nodes, parents, order) {
  const children = Array.from({ length: nodes.length }, () => []);
  for (let child = 0; child < parents.length; child += 1) if (parents[child] >= 0) children[parents[child]].push(child);
  for (const members of children) members.sort((a, b) => nodes[a].href.localeCompare(nodes[b].href));
  const descendantCount = new Uint32Array(nodes.length);
  const descendantWordMass = new Float64Array(nodes.length);
  const subtreeArea = nodes.map((node) => Math.PI * (node.radius + 5) ** 2);
  for (let index = order.length - 1; index >= 0; index -= 1) {
    const node = order[index];
    for (const child of children[node]) {
      descendantCount[node] += 1 + descendantCount[child];
      descendantWordMass[node] += nodes[child].words + descendantWordMass[child];
      subtreeArea[node] += subtreeArea[child];
    }
  }
  return { children, descendantCount: [...descendantCount], descendantWordMass: [...descendantWordMass], subtreeArea };
}

function rootData(parents) {
  const roots = [];
  const rootOf = new Int32Array(parents.length);
  const depths = new Uint32Array(parents.length);
  for (let node = 0; node < parents.length; node += 1) {
    let current = node;
    let depth = 0;
    while (parents[current] >= 0) {
      current = parents[current];
      depth += 1;
    }
    rootOf[node] = current;
    depths[node] = depth;
    if (current === node) roots.push(node);
  }
  return { roots, rootOf: [...rootOf], depths: [...depths] };
}

function buildPeers(nodes, graph, vectors, categories, parents) {
  const candidates = Array.from({ length: nodes.length }, () => []);
  for (const pair of graph.pairs) {
    if (!(pair.ab && pair.ba) || parents[pair.a] === pair.b || parents[pair.b] === pair.a) continue;
    const fit = 0.65 * cosine(vectors[pair.a], vectors[pair.b])
      + 0.20 * jaccard(categories[pair.a], categories[pair.b]) + 0.15;
    if (fit < 0.32) continue;
    candidates[pair.a].push({ node: pair.b, fit });
    candidates[pair.b].push({ node: pair.a, fit });
  }
  for (const list of candidates) list.sort((a, b) => b.fit - a.fit || nodes[a.node].href.localeCompare(nodes[b.node].href));
  const top = candidates.map((list) => new Set(list.slice(0, 3).map((entry) => entry.node)));
  const eligible = [];
  for (let a = 0; a < nodes.length; a += 1) for (const entry of candidates[a]) {
    const b = entry.node;
    if (a < b && top[a].has(b) && top[b].has(a)) eligible.push({ a, b, fit: entry.fit });
  }
  eligible.sort((left, right) => right.fit - left.fit || left.a - right.a || left.b - right.b);
  const degree = new Uint8Array(nodes.length);
  const peers = [];
  for (const edge of eligible) {
    if (degree[edge.a] >= 2 || degree[edge.b] >= 2) continue;
    peers.push(edge);
    degree[edge.a] += 1;
    degree[edge.b] += 1;
  }
  return peers;
}

function buildBridges(nodes, graph, parents, rootOf, betweenness, components, vectors, categories) {
  const componentByNode = new Int32Array(nodes.length);
  components.forEach((members, component) => members.forEach((node) => { componentByNode[node] = component; }));
  const maximumBetweenness = Math.max(1, ...betweenness);
  const contracted = new Map();
  for (const pair of graph.pairs) {
    const rootA = rootOf[pair.a];
    const rootB = rootOf[pair.b];
    if (rootA === rootB) continue;
    const left = Math.min(rootA, rootB);
    const right = Math.max(rootA, rootB);
    const key = `${left}:${right}`;
    const reciprocal = pair.ab && pair.ba ? 1 : 0;
    const semantic = cosine(vectors[pair.a], vectors[pair.b]);
    const category = jaccard(categories[pair.a], categories[pair.b]);
    const centrality = Math.min(betweenness[pair.a], betweenness[pair.b]) / maximumBetweenness;
    const degreeNormalization = Math.min(1, 6 / Math.sqrt(Math.max(1, graph.degree[pair.a] * graph.degree[pair.b])));
    const representativeFit = (0.50 * semantic + 0.20 * category + 0.20 * reciprocal + 0.10 * centrality)
      * degreeNormalization;
    let entry = contracted.get(key);
    if (!entry) {
      entry = { rootA: left, rootB: right, weight: 0, representative: null, component: componentByNode[pair.a] };
      contracted.set(key, entry);
    }
    entry.weight += (1 + reciprocal * 2 + centrality * 3) * degreeNormalization;
    if (!entry.representative || representativeFit > entry.representative.fit + 1e-12
      || (Math.abs(representativeFit - entry.representative.fit) <= 1e-12
        && (pair.a < entry.representative.a || (pair.a === entry.representative.a && pair.b < entry.representative.b)))) {
      entry.representative = { a: pair.a, b: pair.b, fit: representativeFit, degreeNormalization };
    }
  }
  const candidates = [...contracted.values()].sort((a, b) => b.weight - a.weight
    || b.representative.fit - a.representative.fit || a.rootA - b.rootA || a.rootB - b.rootB);
  const rootsByComponent = new Map();
  for (let node = 0; node < parents.length; node += 1) if (parents[node] < 0) {
    const component = componentByNode[node];
    if (!rootsByComponent.has(component)) rootsByComponent.set(component, []);
    rootsByComponent.get(component).push(node);
  }
  const selected = [];
  const selectedKeys = new Set();
  for (const [component, roots] of rootsByComponent) {
    const parent = new Map(roots.map((root) => [root, root]));
    const find = (node) => {
      let current = node;
      while (parent.get(current) !== current) current = parent.get(current);
      while (parent.get(node) !== node) {
        const next = parent.get(node);
        parent.set(node, current);
        node = next;
      }
      return current;
    };
    for (const candidate of candidates) {
      if (candidate.component !== component) continue;
      const left = find(candidate.rootA);
      const right = find(candidate.rootB);
      if (left === right) continue;
      parent.set(Math.max(left, right), Math.min(left, right));
      selected.push({ ...candidate.representative, rootA: candidate.rootA, rootB: candidate.rootB, tree: true });
      selectedKeys.add(`${candidate.rootA}:${candidate.rootB}`);
    }
  }
  const extraDegree = new Uint8Array(nodes.length);
  for (const candidate of candidates) {
    const key = `${candidate.rootA}:${candidate.rootB}`;
    if (selectedKeys.has(key) || candidate.representative.fit < 0.32) continue;
    if (extraDegree[candidate.rootA] || extraDegree[candidate.rootB]) continue;
    selected.push({ ...candidate.representative, rootA: candidate.rootA, rootB: candidate.rootB, tree: false });
    extraDegree[candidate.rootA] = 1;
    extraDegree[candidate.rootB] = 1;
  }
  return selected.sort((a, b) => a.a - b.a || a.b - b.b);
}

export function buildSemanticStructure(nodes, directedEdges, overrides = { anchors: [], parents: {} }, options = {}) {
  if (!nodes.length) throw new Error("Cannot structure an empty wiki graph.");
  const parentThreshold = options.parentThreshold ?? 0.24;
  const graph = buildReferenceGraph(nodes.length, directedEdges);
  const overrideState = validateOverrides(nodes, overrides);
  const semantic = semanticVectors(nodes);
  const categories = nodes.map(normalizedCategories);
  const sampled = sampledBetweenness(graph.adjacency, nodes, options.betweennessSampleCount ?? 128);
  const reciprocalDegree = graph.pairs.reduce((values, pair) => {
    if (pair.ab && pair.ba) {
      values[pair.a] += 1;
      values[pair.b] += 1;
    }
    return values;
  }, new Uint32Array(nodes.length));
  const words = logNormalize(nodes.map((node) => node.words));
  const inbound = logNormalize(graph.incoming.map((neighbors) => neighbors.size));
  const reciprocal = logNormalize([...reciprocalDegree]);
  const centrality = logNormalize(sampled.values);
  const importance = nodes.map((node, index) => 0.35 * words[index] + 0.30 * inbound[index]
    + 0.20 * reciprocal[index] + 0.15 * centrality[index]);
  const order = Array.from({ length: nodes.length }, (_, index) => index).sort((a, b) =>
    Number(overrideState.anchors.has(b)) - Number(overrideState.anchors.has(a))
      || importance[b] - importance[a]
      || reciprocalDegree[b] - reciprocalDegree[a]
      || nodes[b].words - nodes[a].words
      || nodes[a].href.localeCompare(nodes[b].href));
  const rank = new Int32Array(nodes.length);
  order.forEach((node, index) => { rank[node] = index; });
  const outNorm = logNormalize(graph.outgoing.map((neighbors) => neighbors.size));
  const genericHubness = nodes.map((node, index) => outNorm[index]
    * (1 - reciprocalDegree[index] / Math.max(1, graph.degree[index])));
  const parents = new Int32Array(nodes.length);
  parents.fill(-1);
  const parentFits = new Float64Array(nodes.length);
  parentFits.fill(Number.NaN);
  for (const child of order) {
    if (overrideState.anchors.has(child)) continue;
    if (overrideState.parents.has(child)) {
      parents[child] = overrideState.parents.get(child);
      parentFits[child] = 1;
      continue;
    }
    let best = -1;
    let bestFit = -Infinity;
    for (const candidate of graph.adjacency[child]) {
      if (rank[candidate] >= rank[child]) continue;
      const semanticFit = cosine(semantic.vectors[child], semantic.vectors[candidate]);
      const fit = 0.52 * semanticFit
        + 0.16 * jaccard(categories[child], categories[candidate])
        + 0.12 * relationStrength(child, candidate, graph)
        + 0.10 * linkProminence(nodes, child, candidate)
        + 0.10 * importance[candidate]
        - 0.15 * genericHubness[candidate] * (1 - semanticFit);
      if (fit > bestFit + 1e-12 || (Math.abs(fit - bestFit) <= 1e-12
        && (best < 0 || rank[candidate] < rank[best]
          || (rank[candidate] === rank[best] && nodes[candidate].href.localeCompare(nodes[best].href) < 0)))) {
        best = candidate;
        bestFit = fit;
      }
    }
    if (best >= 0 && bestFit >= parentThreshold) {
      parents[child] = best;
      parentFits[child] = bestFit;
    }
  }
  assertAcyclic(parents, nodes);
  const roots = rootData(parents);
  const tree = descendants(nodes, parents, order);
  const components = connectedComponents(graph.adjacency, nodes);
  const peers = buildPeers(nodes, graph, semantic.vectors, categories, parents);
  const bridges = buildBridges(nodes, graph, parents, roots.rootOf, sampled.values, components, semantic.vectors, categories);
  const importanceOrder = [...order];
  const importanceRank = new Int32Array(nodes.length);
  importanceOrder.forEach((node, index) => { importanceRank[node] = index; });
  const labelTiers = nodes.map((node, index) => {
    if (overrideState.anchors.has(index) || parents[index] < 0) return 0;
    if (roots.depths[index] <= 2 || tree.descendantCount[index] >= 32 || importanceRank[index] < nodes.length * 0.05) return 1;
    if (tree.descendantCount[index] >= 8 || importanceRank[index] < nodes.length * 0.20) return 2;
    return 3;
  });
  const structuralEdges = [];
  for (let child = 0; child < parents.length; child += 1) if (parents[child] >= 0) structuralEdges.push([parents[child], child, 0]);
  for (const peer of peers) structuralEdges.push([peer.a, peer.b, 1]);
  for (const bridge of bridges) structuralEdges.push([bridge.a, bridge.b, 2]);
  const finiteParentFits = [...parentFits].filter(Number.isFinite);
  return {
    parents: [...parents],
    roots: roots.roots,
    rootOf: roots.rootOf,
    depths: roots.depths,
    children: tree.children,
    descendantCount: tree.descendantCount,
    descendantWordMass: tree.descendantWordMass,
    subtreeArea: tree.subtreeArea,
    importance,
    parentFits: [...parentFits],
    labelTiers,
    peers,
    bridges,
    structuralEdges,
    graph,
    components,
    overrideAnchors: [...overrideState.anchors].sort((a, b) => a - b),
    overrideParents: [...overrideState.parents.entries()].sort((a, b) => a[0] - b[0]),
    betweennessSampleCount: sampled.sampleCount,
    semanticFeatureCount: semantic.semanticFeatureCount,
    meanParentFit: finiteParentFits.length ? finiteParentFits.reduce((sum, fit) => sum + fit, 0) / finiteParentFits.length : 0
  };
}
