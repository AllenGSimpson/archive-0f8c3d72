const TAU = Math.PI * 2;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const DEFAULTS = {
  iterations: 1_200,
  timestep: 0.12,
  damping: 0.88,
  maximumSpeed: 18,
  repulsionStrength: 2_400,
  repulsionSoftening: 36,
  barnesHutTheta: 0.62,
  // Directed attraction is intentionally dominant at ordinary map distances;
  // collision projection remains the hard limit at close range.
  attractionStrength: 0.24,
  anchorAttractionMultiplier: 5,
  attractionDistanceCap: 420,
  collisionGap: 5,
  convergenceVelocity: 0.08,
  convergenceWindow: 35,
  collisionPasses: 300,
  maximumCollisionPasses: 2_000,
  componentGap: 80
};

function finite(value, label) {
  if (!Number.isFinite(value)) throw new Error(`Physics ${label} must be finite.`);
}

function hashUnit(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function validateNodes(nodes) {
  if (!Array.isArray(nodes) || !nodes.length) throw new Error("Physics layout requires at least one node.");
  for (const [index, node] of nodes.entries()) {
    if (!node || typeof node.href !== "string") throw new Error(`Physics node ${index} is missing href.`);
    finite(node.radius, `node ${node.href} radius`);
    finite(node.words, `node ${node.href} words`);
    if (node.radius <= 0) throw new Error(`Physics node ${node.href} radius must be positive.`);
  }
}

function buildGraph(nodes, edges) {
  const byHref = new Map(nodes.map((node, index) => [node.href, index]));
  const incoming = Array.from({ length: nodes.length }, () => new Map());
  const outgoing = Array.from({ length: nodes.length }, () => new Map());
  const connected = Array.from({ length: nodes.length }, () => new Set());
  for (const edge of edges) {
    const source = Array.isArray(edge) ? edge[0] : byHref.get(edge.source);
    const target = Array.isArray(edge) ? edge[1] : byHref.get(edge.target);
    if (!Number.isInteger(source) || !Number.isInteger(target) || source < 0 || target < 0 || source >= nodes.length || target >= nodes.length || source === target) continue;
    outgoing[source].set(target, (outgoing[source].get(target) || 0) + 1);
    incoming[target].set(source, (incoming[target].get(source) || 0) + 1);
    connected[source].add(target);
    connected[target].add(source);
  }
  const degree = nodes.map((_, index) => connected[index].size);
  return { byHref, incoming, outgoing, connected, degree };
}

function componentsFor(nodes, outgoing) {
  const parent = Array.from({ length: nodes.length }, (_, index) => index);
  function find(value) {
    let root = value;
    while (parent[root] !== root) root = parent[root];
    while (parent[value] !== value) { const next = parent[value]; parent[value] = root; value = next; }
    return root;
  }
  function unite(left, right) {
    const a = find(left); const b = find(right);
    if (a !== b) parent[Math.max(a, b)] = Math.min(a, b);
  }
  outgoing.forEach((neighbors, source) => neighbors.forEach((_, target) => unite(source, target)));
  const groups = new Map();
  for (let index = 0; index < nodes.length; index += 1) {
    const root = find(index);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(index);
  }
  return [...groups.values()].sort((left, right) => nodes[left[0]].href.localeCompare(nodes[right[0]].href));
}

function seedPositions(nodes, components, anchorEntries, graph) {
  const x = new Float64Array(nodes.length);
  const y = new Float64Array(nodes.length);
  const totalArea = nodes.reduce((sum, node) => sum + Math.PI * node.radius ** 2, 0);
  const spread = Math.max(100, Math.sqrt(totalArea / Math.PI) * 2.4);
  let initialPlacementCount = 0;
  let initialPlacementLayers = 0;
  if (!anchorEntries.length) {
    nodes.forEach((node, index) => {
      const angle = index * GOLDEN_ANGLE + TAU * hashUnit(node.href);
      const distance = spread * Math.sqrt((index + 0.5) / nodes.length);
      x[index] = Math.cos(angle) * distance;
      y[index] = Math.sin(angle) * distance;
    });
    // Give disconnected components distinct deterministic seed offsets.
    components.forEach((members, component) => {
      if (component === 0) return;
      const angle = component * GOLDEN_ANGLE;
      const offset = spread * (1.5 + component);
      for (const index of members) { x[index] += Math.cos(angle) * offset; y[index] += Math.sin(angle) * offset; }
    });
  }
  if (anchorEntries.length) {
    const anchorRadius = Math.max(spread * 1.35, spread + 80);
    const anchorStart = -Math.PI / 2;
    for (const [ordinal, anchor] of anchorEntries.entries()) {
      const angle = anchorStart + ordinal * TAU / anchorEntries.length;
      x[anchor.index] = Math.cos(angle) * anchorRadius;
      y[anchor.index] = Math.sin(angle) * anchorRadius;
    }
    const placed = new Uint8Array(nodes.length);
    let frontier = anchorEntries.map((anchor) => anchor.index);
    for (const index of frontier) placed[index] = 1;
    while (frontier.length) {
      const frontierSet = new Set(frontier);
      const candidates = new Set();
      for (const source of frontier) {
        for (const target of graph.outgoing[source].keys()) if (!placed[target]) candidates.add(target);
      }
      if (!candidates.size) break;
      const next = [];
      for (const target of [...candidates].sort((left, right) => left - right)) {
        let totalWeight = 0; let aggregateX = 0; let aggregateY = 0;
        for (const [source, weight] of graph.incoming[target]) {
          if (!placed[source] || (frontierSet.has(source) && !placed[source])) continue;
          totalWeight += weight;
          aggregateX += x[source] * weight;
          aggregateY += y[source] * weight;
        }
        if (!totalWeight) continue;
        aggregateX /= totalWeight;
        aggregateY /= totalWeight;
        // Every article begins at the center; moving halfway preserves a
        // readable neck between successive origin layers before physics.
        x[target] = (x[target] + aggregateX) / 2;
        y[target] = (y[target] + aggregateY) / 2;
        placed[target] = 1;
        next.push(target);
      }
      if (!next.length) break;
      frontier = next;
      initialPlacementCount += next.length;
      initialPlacementLayers += 1;
    }
  }
  return { x, y, initialPlacementCount, initialPlacementLayers };
}

function cellStats(indices, x, y, radii) {
  let sumRadius = 0; let sumRadiusSquared = 0;
  let sumXRadius = 0; let sumYRadius = 0;
  let sumXRadiusSquared = 0; let sumYRadiusSquared = 0;
  for (const index of indices) {
    const radius = radii[index];
    sumRadius += radius;
    sumRadiusSquared += radius * radius;
    sumXRadius += x[index] * radius;
    sumYRadius += y[index] * radius;
    sumXRadiusSquared += x[index] * radius * radius;
    sumYRadiusSquared += y[index] * radius * radius;
  }
  return { sumRadius, sumRadiusSquared, sumXRadius, sumYRadius, sumXRadiusSquared, sumYRadiusSquared };
}

function buildBarnesHutTree(x, y, radii) {
  const indices = Array.from({ length: x.length }, (_, index) => index);
  const minX = Math.min(...x); const maxX = Math.max(...x);
  const minY = Math.min(...y); const maxY = Math.max(...y);
  const padding = Math.max(1, Math.max(maxX - minX, maxY - minY) * 1e-6);
  const rootBounds = { minX: minX - padding, maxX: maxX + padding, minY: minY - padding, maxY: maxY + padding };
  function build(members, bounds, depth) {
    const stats = cellStats(members, x, y, radii);
    if (members.length <= 8 || depth >= 20) return { ...bounds, indices: members, children: null, ...stats };
    const midX = (bounds.minX + bounds.maxX) / 2; const midY = (bounds.minY + bounds.maxY) / 2;
    const groups = [[], [], [], []];
    for (const index of members) {
      const quadrant = (x[index] >= midX ? 1 : 0) + (y[index] >= midY ? 2 : 0);
      groups[quadrant].push(index);
    }
    if (groups.some((group) => group.length === members.length)) return { ...bounds, indices: members, children: null, ...stats };
    const children = groups.map((group, quadrant) => {
      if (!group.length) return null;
      const right = quadrant & 1; const top = quadrant & 2;
      return build(group, {
        minX: right ? midX : bounds.minX, maxX: right ? bounds.maxX : midX,
        minY: top ? midY : bounds.minY, maxY: top ? bounds.maxY : midY
      }, depth + 1);
    });
    return { ...bounds, indices: members, children, ...stats };
  }
  return build(indices, rootBounds, 0);
}

function inside(cell, px, py) {
  return px >= cell.minX && px <= cell.maxX && py >= cell.minY && py <= cell.maxY;
}

function adjustedCellStats(cell, x, y, radii, exclusions) {
  let sumRadius = cell.sumRadius; let sumRadiusSquared = cell.sumRadiusSquared;
  let sumXRadius = cell.sumXRadius; let sumYRadius = cell.sumYRadius;
  let sumXRadiusSquared = cell.sumXRadiusSquared; let sumYRadiusSquared = cell.sumYRadiusSquared;
  for (const index of exclusions) {
    if (!inside(cell, x[index], y[index])) continue;
    const radius = radii[index];
    sumRadius -= radius;
    sumRadiusSquared -= radius * radius;
    sumXRadius -= x[index] * radius;
    sumYRadius -= y[index] * radius;
    sumXRadiusSquared -= x[index] * radius * radius;
    sumYRadiusSquared -= y[index] * radius * radius;
  }
  return { sumRadius, sumRadiusSquared, sumXRadius, sumYRadius, sumXRadiusSquared, sumYRadiusSquared };
}

function addRepulsionForNode(node, x, y, radii, connected, tree, forces, options) {
  const targetRadius = radii[node];
  const exclusions = [node, ...connected[node]];
  function visit(cell) {
    const centerX = (cell.minX + cell.maxX) / 2;
    const centerY = (cell.minY + cell.maxY) / 2;
    const distance = Math.hypot(x[node] - centerX, y[node] - centerY);
    const size = Math.max(cell.maxX - cell.minX, cell.maxY - cell.minY);
    const containsTarget = inside(cell, x[node], y[node]);
    if (!cell.children || (size / Math.max(distance, 1e-6) < options.barnesHutTheta && !containsTarget)) {
      if (!cell.children) {
        for (const other of cell.indices) {
          if (other === node || connected[node].has(other)) continue;
          const dx = x[node] - x[other]; const dy = y[node] - y[other];
          const squared = dx * dx + dy * dy + options.repulsionSoftening;
          const distanceValue = Math.sqrt(squared);
          const magnitude = options.repulsionStrength * (targetRadius + radii[other]) * radii[other] / Math.max(targetRadius, 0.001) / squared;
          forces.x[node] += dx / distanceValue * magnitude;
          forces.y[node] += dy / distanceValue * magnitude;
        }
        return;
      }
      const stats = adjustedCellStats(cell, x, y, radii, exclusions);
      if (stats.sumRadius <= 0) return;
      const charge = targetRadius * stats.sumRadius + stats.sumRadiusSquared;
      const aggregateX = (targetRadius * stats.sumXRadius + stats.sumXRadiusSquared) / charge;
      const aggregateY = (targetRadius * stats.sumYRadius + stats.sumYRadiusSquared) / charge;
      const dx = x[node] - aggregateX; const dy = y[node] - aggregateY;
      const squared = dx * dx + dy * dy + options.repulsionSoftening;
      const distanceValue = Math.sqrt(squared);
      const magnitude = options.repulsionStrength * charge / Math.max(targetRadius, 0.001) / squared;
      forces.x[node] += dx / distanceValue * magnitude;
      forces.y[node] += dy / distanceValue * magnitude;
      return;
    }
    for (const child of cell.children || []) if (child) visit(child);
  }
  visit(tree);
}

function calculateAttractionMultipliers(nodes, graph, anchorEntries) {
  const multipliers = new Float64Array(nodes.length);
  const anchorIndices = new Set(anchorEntries.map((anchor) => anchor.index));
  for (const anchor of anchorEntries) multipliers[anchor.index] = 5;
  for (const anchor of anchorEntries) {
    const distances = new Int32Array(nodes.length).fill(-2);
    distances[anchor.index] = -1;
    const queue = [anchor.index];
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const target = queue[cursor];
      for (const source of graph.incoming[target].keys()) {
        if (distances[source] !== -2) continue;
        distances[source] = distances[target] + 1;
        queue.push(source);
      }
    }
    for (let index = 0; index < nodes.length; index += 1) {
      if (anchorIndices.has(index) || distances[index] < 0) continue;
      multipliers[index] += 1 / (1 + distances[index]);
    }
  }
  return multipliers;
}

function applyAttraction(nodes, x, y, outgoing, forces, options) {
  for (let source = 0; source < nodes.length; source += 1) {
    const destinations = outgoing[source];
    if (!destinations.size) continue;
    const attractionMultiplier = options.attractionMultipliers[source];
    if (!(attractionMultiplier > 0)) continue;
    const total = [...destinations.values()].reduce((sum, weight) => sum + weight, 0);
    for (const [target, weight] of destinations) {
      const dx = x[target] - x[source]; const dy = y[target] - y[source];
      const distance = Math.hypot(dx, dy);
      if (distance < 1e-6) continue;
      const share = weight / total;
      const magnitude = options.attractionStrength * attractionMultiplier * share * Math.min(distance, options.attractionDistanceCap);
      forces.x[source] += dx / distance * magnitude;
      forces.y[source] += dy / distance * magnitude;
    }
  }
}

function projectCollisions(nodes, x, y, gap, maximumPasses, fixed = new Set()) {
  const masses = nodes.map((node) => Math.max(1, node.words));
  const maximumRadius = Math.max(...nodes.map((node) => node.radius));
  const cellSize = Math.max(2, maximumRadius * 2 + gap);
  let maximumPenetration = Infinity; let iterations = 0; let minimumSeparation = Infinity;
  for (; iterations < maximumPasses && maximumPenetration > 1e-6; iterations += 1) {
    maximumPenetration = 0;
    minimumSeparation = Infinity;
    const buckets = new Map();
    for (let index = 0; index < nodes.length; index += 1) {
      const key = `${Math.floor(x[index] / cellSize)},${Math.floor(y[index] / cellSize)}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(index);
    }
    for (let left = 0; left < nodes.length; left += 1) {
      const cx = Math.floor(x[left] / cellSize); const cy = Math.floor(y[left] / cellSize);
      for (let ox = -1; ox <= 1; ox += 1) for (let oy = -1; oy <= 1; oy += 1) {
        for (const right of buckets.get(`${cx + ox},${cy + oy}`) || []) {
          if (right <= left) continue;
          let dx = x[right] - x[left]; let dy = y[right] - y[left];
          let distance = Math.hypot(dx, dy);
          if (distance < 1e-9) { const angle = ((left * 97 + right * 53) % 360) * Math.PI / 180; dx = Math.cos(angle); dy = Math.sin(angle); distance = 1; }
          const required = nodes[left].radius + nodes[right].radius + gap;
          const penetration = required - distance;
          minimumSeparation = Math.min(minimumSeparation, distance - nodes[left].radius - nodes[right].radius);
          if (penetration <= 0) continue;
          maximumPenetration = Math.max(maximumPenetration, penetration);
          const inverseLeft = 1 / masses[left]; const inverseRight = 1 / masses[right];
          const ux = dx / distance; const uy = dy / distance;
          const leftFixed = fixed.has(left); const rightFixed = fixed.has(right);
          if (leftFixed && rightFixed) continue;
          if (leftFixed) {
            x[right] += ux * penetration;
            y[right] += uy * penetration;
          } else if (rightFixed) {
            x[left] -= ux * penetration;
            y[left] -= uy * penetration;
          } else {
            const total = inverseLeft + inverseRight;
            x[left] -= ux * penetration * inverseLeft / total;
            y[left] -= uy * penetration * inverseLeft / total;
            x[right] += ux * penetration * inverseRight / total;
            y[right] += uy * penetration * inverseRight / total;
          }
        }
      }
    }
  }
  return { maximumPenetration, iterations, minimumSeparation };
}

function arrangeComponents(nodes, components, x, y, gap, fixed = new Set()) {
  const boxes = components.map((members, component) => {
    const mass = members.reduce((sum, index) => sum + nodes[index].words, 0);
    const minX = Math.min(...members.map((index) => x[index] - nodes[index].radius));
    const maxX = Math.max(...members.map((index) => x[index] + nodes[index].radius));
    const minY = Math.min(...members.map((index) => y[index] - nodes[index].radius));
    const maxY = Math.max(...members.map((index) => y[index] + nodes[index].radius));
    return { component, members, mass, minX, maxX, minY, maxY };
  }).sort((left, right) => right.mass - left.mass || left.component - right.component);
  let cursor = 0;
  for (const box of boxes) {
    if (box.members.some((index) => fixed.has(index))) {
      cursor = Math.max(cursor, box.maxX + gap);
      continue;
    }
    const shiftX = cursor - box.minX;
    const centerY = (box.minY + box.maxY) / 2;
    for (const index of box.members) { x[index] += shiftX; y[index] -= centerY; }
    cursor += box.maxX - box.minX + gap;
  }
  if (!fixed.size) {
    const totalWords = nodes.reduce((sum, node) => sum + node.words, 0) || 1;
    const centerX = nodes.reduce((sum, node, index) => sum + x[index] * node.words, 0) / totalWords;
    const centerY = nodes.reduce((sum, node, index) => sum + y[index] * node.words, 0) / totalWords;
    for (let index = 0; index < nodes.length; index += 1) { x[index] -= centerX; y[index] -= centerY; }
  }
}

function mapDiagonal(x, y) {
  return Math.hypot(Math.max(...x) - Math.min(...x), Math.max(...y) - Math.min(...y));
}

export function buildDirectedPhysicsLayout(nodes, edges, options = {}) {
  validateNodes(nodes);
  const merged = { ...DEFAULTS, ...options };
  const graph = buildGraph(nodes, edges);
  const byHref = new Map(nodes.map((node, index) => [node.href, index]));
  const anchorEntries = (options.anchors || []).map((anchor) => ({
    index: Number.isInteger(anchor.index) ? anchor.index : byHref.get(anchor.href),
    href: anchor.href,
    color: anchor.color
  }));
  if (anchorEntries.some((anchor) => !Number.isInteger(anchor.index) || anchor.index < 0 || anchor.index >= nodes.length)) {
    throw new Error("Physics anchor references a missing node.");
  }
  if (new Set(anchorEntries.map((anchor) => anchor.index)).size !== anchorEntries.length) throw new Error("Physics anchors must be unique.");
  const fixed = new Set(anchorEntries.map((anchor) => anchor.index));
  const attractionMultipliers = calculateAttractionMultipliers(nodes, graph, anchorEntries);
  merged.attractionMultipliers = attractionMultipliers;
  const components = componentsFor(nodes, graph.outgoing);
  const seed = seedPositions(nodes, components, anchorEntries, graph);
  const { x, y } = seed;
  const radii = nodes.map((node) => node.radius);
  const velocitiesX = new Float64Array(nodes.length);
  const velocitiesY = new Float64Array(nodes.length);
  let stableIterations = 0; let converged = false; let iterations = 0;
  for (; iterations < merged.iterations; iterations += 1) {
    const forces = { x: new Float64Array(nodes.length), y: new Float64Array(nodes.length) };
    const tree = buildBarnesHutTree(x, y, radii);
    for (let node = 0; node < nodes.length; node += 1) addRepulsionForNode(node, x, y, radii, graph.connected, tree, forces, merged);
    applyAttraction(nodes, x, y, graph.outgoing, forces, merged);
    let maximumVelocity = 0;
    for (let node = 0; node < nodes.length; node += 1) {
      velocitiesX[node] = (velocitiesX[node] + forces.x[node] * merged.timestep) * merged.damping;
      velocitiesY[node] = (velocitiesY[node] + forces.y[node] * merged.timestep) * merged.damping;
      const speed = Math.hypot(velocitiesX[node], velocitiesY[node]);
      if (speed > merged.maximumSpeed) { velocitiesX[node] *= merged.maximumSpeed / speed; velocitiesY[node] *= merged.maximumSpeed / speed; }
      if (fixed.has(node)) {
        velocitiesX[node] = 0;
        velocitiesY[node] = 0;
      } else {
        x[node] += velocitiesX[node] * merged.timestep;
        y[node] += velocitiesY[node] * merged.timestep;
      }
      maximumVelocity = Math.max(maximumVelocity, Math.hypot(velocitiesX[node], velocitiesY[node]));
    }
    projectCollisions(nodes, x, y, merged.collisionGap, 2, fixed);
    if (maximumVelocity <= merged.convergenceVelocity) stableIterations += 1;
    else stableIterations = 0;
    if (stableIterations >= merged.convergenceWindow) { converged = true; iterations += 1; break; }
  }
  arrangeComponents(nodes, components, x, y, merged.componentGap, fixed);
  let collision = projectCollisions(nodes, x, y, merged.collisionGap, merged.collisionPasses, fixed);
  if (collision.maximumPenetration > 0.01) collision = projectCollisions(nodes, x, y, merged.collisionGap, merged.maximumCollisionPasses, fixed);
  if (collision.maximumPenetration > 0.01) throw new Error(`Physics layout final overlap is ${collision.maximumPenetration.toFixed(4)} units.`);
  return {
    x: [...x], y: [...y], z: Array(nodes.length).fill(0), degree: options.degree || graph.degree,
    community: options.community || Array(nodes.length).fill(0),
    communityCount: options.communityCount || 1,
    largestCommunity: options.largestCommunity || nodes.length,
    relaxationIterations: iterations,
    physicsIterations: iterations,
    physicsConverged: converged,
    repulsionIterations: iterations,
    attractionEdgeCount: [...graph.incoming].reduce((sum, neighbors) => sum + neighbors.size, 0),
    anchorAttractionMultiplier: merged.anchorAttractionMultiplier,
    attractionMultipliers: [...attractionMultipliers],
    attractionMultiplierMinimum: Math.min(...attractionMultipliers),
    attractionMultiplierMaximum: Math.max(...attractionMultipliers),
    initialPlacementCount: seed.initialPlacementCount,
    initialPlacementLayers: seed.initialPlacementLayers,
    originless: graph.incoming.map((neighbors) => neighbors.size === 0),
    originlessCount: graph.incoming.filter((neighbors) => neighbors.size === 0).length,
    anchors: nodes.map((_, index) => fixed.has(index)),
    anchorColors: nodes.map((_, index) => anchorEntries.find((anchor) => anchor.index === index)?.color || null),
    anchorCount: anchorEntries.length,
    componentCount: components.length,
    collisionIterations: collision.iterations,
    maximumOverlap: collision.maximumPenetration,
    minimumSeparation: collision.minimumSeparation,
    medianCommunityHullFill: 0,
    minimumReservedRadius: 0,
    maximumReservedRadius: 0,
    majorBranchCount: 0,
    siblingPairCount: 0,
    overlappingSiblingPairCount: 0,
    siblingEnvelopeOverlapRate: 0,
    hubExclusionViolations: 0,
    hubExclusionViolationRate: 0,
    hierarchyCollisionPasses: collision.iterations,
    branchCollisionTranslations: 0,
    descendantBranchCollisionTranslations: 0,
    rootBridgeForceCount: 0,
    parentSpringCount: 0,
    mapDiagonal: mapDiagonal(x, y),
    debug: { components, incoming: graph.incoming.map((neighbors) => [...neighbors.entries()]), outgoing: graph.outgoing.map((neighbors) => [...neighbors.entries()]) }
  };
}
