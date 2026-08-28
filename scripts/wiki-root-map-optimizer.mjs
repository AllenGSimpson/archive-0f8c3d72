import { createHash } from "node:crypto";

export const ROOT_MAP_INPUT_SCHEMA = "wiki-root-map-v1";
export const ROOT_MAP_CHECKPOINT_SCHEMA = "wiki-root-map-checkpoint-v1";

const SCORE_COEFFICIENTS = Object.freeze({
  overlap: 1_000_000,
  length: 1,
  diagonal: 0.02,
  barrier: 2
});

function finite(value, label) {
  if (!Number.isFinite(value)) throw new Error(`${label} must be finite.`);
  return value;
}

function compareHref(left, right) {
  return left.href.localeCompare(right.href);
}

function stableRoot(root) {
  return {
    href: String(root.href),
    title: String(root.title || root.href),
    reservedRadius: finite(Number(root.reservedRadius), `${root.href} reservedRadius`),
    mass: finite(Number(root.mass), `${root.href} mass`),
    component: Number(root.component),
    rootDegree: Number(root.rootDegree)
  };
}

function stableConnection(connection) {
  return {
    source: String(connection.source),
    target: String(connection.target),
    directedReferenceCount: Number(connection.directedReferenceCount),
    reciprocalCount: Number(connection.reciprocalCount),
    sourceToTargetCount: Number(connection.sourceToTargetCount),
    targetToSourceCount: Number(connection.targetToSourceCount)
  };
}

function canonicalIdentity(roots, connections) {
  return JSON.stringify({
    schema: ROOT_MAP_INPUT_SCHEMA,
    layoutModel: "semantic-forest-v2",
    roots: roots.map(stableRoot).sort(compareHref),
    connections: connections.map(stableConnection).sort((left, right) => left.source.localeCompare(right.source) || left.target.localeCompare(right.target))
  });
}

export function rootMapCorpusHash(roots, connections) {
  return createHash("sha256").update(canonicalIdentity(roots, connections)).digest("hex");
}

export function createRootMapInput({ roots, connections }) {
  const orderedRoots = roots.map((root) => ({ ...stableRoot(root), x: finite(Number(root.x), `${root.href} x`), y: finite(Number(root.y), `${root.href} y`) }))
    .sort(compareHref);
  const orderedConnections = connections.map(stableConnection)
    .sort((left, right) => left.source.localeCompare(right.source) || left.target.localeCompare(right.target));
  const input = {
    schema: ROOT_MAP_INPUT_SCHEMA,
    corpusHash: rootMapCorpusHash(orderedRoots, orderedConnections),
    layoutModel: "semantic-forest-v2",
    roots: orderedRoots,
    connections: orderedConnections
  };
  validateRootMapInput(input);
  return input;
}

export function validateRootMapInput(input) {
  if (!input || input.schema !== ROOT_MAP_INPUT_SCHEMA) throw new Error(`Expected ${ROOT_MAP_INPUT_SCHEMA} input.`);
  if (input.layoutModel !== "semantic-forest-v2") throw new Error(`Unsupported layout model ${input.layoutModel}.`);
  if (!Array.isArray(input.roots) || !input.roots.length) throw new Error("Root-map input must contain roots.");
  if (!Array.isArray(input.connections)) throw new Error("Root-map input must contain connections.");
  const roots = input.roots.map((root) => ({ ...stableRoot(root), x: finite(Number(root.x), `${root.href} x`), y: finite(Number(root.y), `${root.href} y`) }));
  const byHref = new Map();
  for (const root of roots) {
    if (!root.href.endsWith(".html")) throw new Error(`Root ${root.href} must be an HTML href.`);
    if (!Number.isInteger(root.component) || root.component < 0) throw new Error(`Root ${root.href} has an invalid component.`);
    if (!Number.isInteger(root.rootDegree) || root.rootDegree < 0) throw new Error(`Root ${root.href} has an invalid root degree.`);
    if (root.reservedRadius <= 0 || root.mass <= 0) throw new Error(`Root ${root.href} has invalid territory data.`);
    if (byHref.has(root.href)) throw new Error(`Root-map input contains duplicate root ${root.href}.`);
    byHref.set(root.href, root);
  }
  const connections = input.connections.map(stableConnection);
  let previous = "";
  for (const connection of connections) {
    const key = `${connection.source}\u0000${connection.target}`;
    if (key <= previous) throw new Error("Root-map connections must be sorted and unique.");
    previous = key;
    if (connection.source >= connection.target) throw new Error(`Root-map connection ${key} is not canonically ordered.`);
    const source = byHref.get(connection.source);
    const target = byHref.get(connection.target);
    if (!source || !target) throw new Error(`Root-map connection ${key} references an unknown root.`);
    if (source.component !== target.component) throw new Error(`Root-map connection ${key} crosses disconnected components.`);
    for (const field of ["directedReferenceCount", "reciprocalCount", "sourceToTargetCount", "targetToSourceCount"]) {
      if (!Number.isInteger(connection[field]) || connection[field] < 0) throw new Error(`Root-map connection ${key} has invalid ${field}.`);
    }
    if (connection.directedReferenceCount !== connection.sourceToTargetCount + connection.targetToSourceCount) throw new Error(`Root-map connection ${key} has inconsistent directed counts.`);
    if (connection.reciprocalCount !== Math.min(connection.sourceToTargetCount, connection.targetToSourceCount)) throw new Error(`Root-map connection ${key} has inconsistent reciprocal count.`);
    if (!connection.directedReferenceCount) throw new Error(`Root-map connection ${key} has no references.`);
  }
  const expectedHash = rootMapCorpusHash(roots, connections);
  if (input.corpusHash !== expectedHash) throw new Error("Root-map input corpus hash does not match its descriptors.");
  return { ...input, roots, connections, rootByHref: byHref };
}

export function territoryRadius(root) {
  return 0.72 * root.reservedRadius + 45;
}

export function protectedTerritoryDistance(rootA, rootB) {
  return territoryRadius(rootA) + territoryRadius(rootB);
}

export function connectionWeight(connection, rootA, rootB) {
  const degreeFactor = Math.max(0.15, Math.min(1, 6 / Math.sqrt(Math.max(1, rootA.rootDegree * rootB.rootDegree))));
  return Math.min(12, (Math.sqrt(connection.directedReferenceCount) + 0.75 * Math.sqrt(connection.reciprocalCount)) * degreeFactor);
}

function segmentPassesCircle(a, b, circle, radius) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared < 1e-10) return Math.hypot(circle.x - a.x, circle.y - a.y) < radius;
  const t = Math.max(0, Math.min(1, ((circle.x - a.x) * dx + (circle.y - a.y) * dy) / lengthSquared));
  return Math.hypot(circle.x - (a.x + dx * t), circle.y - (a.y + dy * t)) < radius;
}

function segmentCircleIntersections(a, b, circle, radius) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const fx = a.x - circle.x;
  const fy = a.y - circle.y;
  const coefficient = dx * dx + dy * dy;
  if (coefficient < 1e-12) return [];
  const discriminant = (fx * dx + fy * dy) ** 2 - coefficient * (fx * fx + fy * fy - radius * radius);
  if (discriminant < 0) return [];
  const root = Math.sqrt(Math.max(0, discriminant));
  const first = (-(fx * dx + fy * dy) - root) / coefficient;
  const second = (-(fx * dx + fy * dy) + root) / coefficient;
  return [first, second]
    .filter((value) => value > 0 && value < 1)
    .map((value) => ({ x: a.x + dx * value, y: a.y + dy * value }));
}

function scoreFromRaw(raw) {
  const totalWeight = Math.max(1e-9, raw.totalWeight);
  const weightedReferenceLength = raw.lengthSum / totalWeight;
  const barrierPenalty = raw.barrierCount / totalWeight;
  const normalizedDiagonalSquared = (raw.diagonal / 6200) ** 2;
  const total = SCORE_COEFFICIENTS.overlap * raw.overlapPenalty
    + SCORE_COEFFICIENTS.length * weightedReferenceLength
    + SCORE_COEFFICIENTS.diagonal * normalizedDiagonalSquared
    + SCORE_COEFFICIENTS.barrier * barrierPenalty;
  return {
    total,
    overlap: SCORE_COEFFICIENTS.overlap * raw.overlapPenalty,
    length: weightedReferenceLength,
    diagonal: SCORE_COEFFICIENTS.diagonal * normalizedDiagonalSquared,
    barriers: SCORE_COEFFICIENTS.barrier * barrierPenalty,
    weightedReferenceLength,
    barrierPenalty,
    barrierCount: raw.barrierCount,
    protectedTerritoryPenalty: raw.overlapPenalty
  };
}

export function createScoreState(input, positionMap = null) {
  const validated = validateRootMapInput(input);
  const roots = validated.roots;
  const rootIndex = new Map(roots.map((root, index) => [root.href, index]));
  const x = new Float64Array(roots.length);
  const y = new Float64Array(roots.length);
  roots.forEach((root, index) => {
    const position = positionMap?.[root.href];
    x[index] = position ? finite(Number(position[0]), `${root.href} checkpoint x`) : root.x;
    y[index] = position ? finite(Number(position[1]), `${root.href} checkpoint y`) : root.y;
  });
  const edges = validated.connections.map((connection) => {
    const source = rootIndex.get(connection.source);
    const target = rootIndex.get(connection.target);
    return {
      ...connection,
      sourceIndex: source,
      targetIndex: target,
      component: roots[source].component,
      weight: connectionWeight(connection, roots[source], roots[target]),
      protectedDistance: protectedTerritoryDistance(roots[source], roots[target])
    };
  });
  const incidence = Array.from({ length: roots.length }, () => []);
  for (let index = 0; index < edges.length; index += 1) {
    incidence[edges[index].sourceIndex].push(index);
    incidence[edges[index].targetIndex].push(index);
  }
  const state = { input: validated, roots, rootIndex, x, y, edges, incidence, raw: null, score: null };
  const result = fullScore(state);
  state.raw = result.raw;
  state.score = result.score;
  return state;
}

function point(state, index, override) {
  if (override && index === override.root) return { x: override.x, y: override.y };
  return { x: state.x[index], y: state.y[index] };
}

function edgePoints(state, edge, override) {
  return [point(state, edge.sourceIndex, override), point(state, edge.targetIndex, override)];
}

function edgeLengthRaw(state, edge, override) {
  const [source, target] = edgePoints(state, edge, override);
  return edge.weight * Math.log(1 + Math.hypot(target.x - source.x, target.y - source.y) / edge.protectedDistance);
}

function edgeBarrierCount(state, edgeIndex, override, barrierPoints = null) {
  const edge = state.edges[edgeIndex];
  const [source, target] = edgePoints(state, edge, override);
  let count = 0;
  for (let root = 0; root < state.roots.length; root += 1) {
    if (root === edge.sourceIndex || root === edge.targetIndex || state.roots[root].component !== edge.component) continue;
    const center = point(state, root, override);
    const radius = territoryRadius(state.roots[root]);
    if (!segmentPassesCircle(source, target, center, radius)) continue;
    count += 1;
    if (barrierPoints && barrierPoints.length < 2_000) {
      const intersections = segmentCircleIntersections(source, target, center, radius);
      const marker = intersections[0] || { x: center.x, y: center.y };
      barrierPoints.push(marker);
    }
  }
  return count;
}

function mapDiagonal(state, override) {
  let minX = Infinity; let maxX = -Infinity; let minY = Infinity; let maxY = -Infinity;
  for (let index = 0; index < state.roots.length; index += 1) {
    const position = point(state, index, override);
    minX = Math.min(minX, position.x); maxX = Math.max(maxX, position.x);
    minY = Math.min(minY, position.y); maxY = Math.max(maxY, position.y);
  }
  return Math.hypot(maxX - minX, maxY - minY);
}

function territoryRaw(state, left, right, override) {
  if (state.roots[left].component !== state.roots[right].component) return { penalty: 0, overlap: 0 };
  const a = point(state, left, override);
  const b = point(state, right, override);
  const required = protectedTerritoryDistance(state.roots[left], state.roots[right]);
  const penetration = Math.max(0, required - Math.hypot(a.x - b.x, a.y - b.y));
  return { penalty: (penetration / required) ** 2, overlap: penetration > 0 ? 1 : 0 };
}

function fullScore(state, collectBarriers = false) {
  const raw = { overlapPenalty: 0, overlapCount: 0, lengthSum: 0, barrierCount: 0, totalWeight: 0, diagonal: 0 };
  for (let left = 0; left < state.roots.length; left += 1) for (let right = left + 1; right < state.roots.length; right += 1) {
    const territory = territoryRaw(state, left, right);
    raw.overlapPenalty += territory.penalty;
    raw.overlapCount += territory.overlap;
  }
  for (let edge = 0; edge < state.edges.length; edge += 1) {
    raw.lengthSum += edgeLengthRaw(state, state.edges[edge]);
    raw.barrierCount += edgeBarrierCount(state, edge);
    raw.totalWeight += state.edges[edge].weight;
  }
  const barriers = [];
  if (collectBarriers) for (let edge = 0; edge < state.edges.length; edge += 1) edgeBarrierCount(state, edge, null, barriers);
  raw.diagonal = mapDiagonal(state);
  return { raw, score: scoreFromRaw(raw), barriers };
}

export function scoreRootMap(input, positions = null, { collectBarriers = false } = {}) {
  const state = createScoreState(input, positions);
  return fullScore(state, collectBarriers);
}

export function evaluateRootMove(state, root, x, y) {
  finite(x, "candidate x"); finite(y, "candidate y");
  const override = { root, x, y };
  const raw = { ...state.raw };
  for (let other = 0; other < state.roots.length; other += 1) {
    if (other === root) continue;
    const oldTerritory = territoryRaw(state, root, other);
    const newTerritory = territoryRaw(state, root, other, override);
    raw.overlapPenalty += newTerritory.penalty - oldTerritory.penalty;
    raw.overlapCount += newTerritory.overlap - oldTerritory.overlap;
  }
  const incident = state.incidence[root];
  for (const edgeIndex of incident) {
    raw.lengthSum += edgeLengthRaw(state, state.edges[edgeIndex], override) - edgeLengthRaw(state, state.edges[edgeIndex]);
  }
  for (let edge = 0; edge < state.edges.length; edge += 1) {
    const incidentToRoot = state.edges[edge].sourceIndex === root || state.edges[edge].targetIndex === root;
    if (!incidentToRoot) {
      const oldHit = edgeBarrierCount(state, edge);
      const newHit = edgeBarrierCount(state, edge, override);
      raw.barrierCount += newHit - oldHit;
      continue;
    }
    raw.barrierCount += edgeBarrierCount(state, edge, override) - edgeBarrierCount(state, edge);
  }
  raw.diagonal = mapDiagonal(state, override);
  return { root, x, y, raw, score: scoreFromRaw(raw) };
}

export function applyRootMove(state, move) {
  state.x[move.root] = move.x;
  state.y[move.root] = move.y;
  state.raw = move.raw;
  state.score = move.score;
  return state;
}

export function xorshift32(seed) {
  let state = (Number(seed) | 0) || 0x6d2b79f5;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}

export const rootMapInitializationStrategies = ["random", "cluster", "anticluster"];

export function positionsFromState(state) {
  return Object.fromEntries(state.roots.map((root, index) => [root.href, [Number(state.x[index].toFixed(6)), Number(state.y[index].toFixed(6))]]));
}

// Article-level collision correction does not reserve the larger root
// territories. This deterministic projection repairs that input condition;
// greedy scoring remains responsible for every quality improvement.
export function projectProtectedTerritories(input, positions = null, { iterations = 2_000, padding = 0.01 } = {}) {
  validateRootMapInput(input);
  const roots = input.roots;
  const points = positions
    ? Object.fromEntries(roots.map((root) => [root.href, [...positions[root.href]]]))
    : Object.fromEntries(roots.map((root) => [root.href, [root.x, root.y]]));
  for (let pass = 0; pass < iterations; pass += 1) {
    let maximumPenetration = 0;
    for (let left = 0; left < roots.length; left += 1) for (let right = left + 1; right < roots.length; right += 1) {
      const a = roots[left];
      const b = roots[right];
      if (a.component !== b.component) continue;
      const pa = points[a.href];
      const pb = points[b.href];
      let dx = pb[0] - pa[0];
      let dy = pb[1] - pa[1];
      let distance = Math.hypot(dx, dy);
      const required = protectedTerritoryDistance(a, b) + padding;
      if (distance >= required) continue;
      if (distance < 1e-9) {
        const angle = ((left * 53 + right * 97) % 360) * Math.PI / 180;
        dx = Math.cos(angle);
        dy = Math.sin(angle);
        distance = 1;
      }
      const penetration = required - distance;
      maximumPenetration = Math.max(maximumPenetration, penetration);
      const amount = penetration * 0.5;
      const ux = dx / distance;
      const uy = dy / distance;
      pa[0] -= ux * amount;
      pa[1] -= uy * amount;
      pb[0] += ux * amount;
      pb[1] += uy * amount;
    }
    if (maximumPenetration <= 1e-6) return points;
  }
  const projected = scoreRootMap(input, points);
  if (projected.raw.overlapCount) throw new Error(`Unable to project protected root territories after ${iterations} passes.`);
  return points;
}

function mixSeed(seed, ...parts) {
  let mixed = (Number(seed) | 0) || 0x6d2b79f5;
  for (const part of parts) mixed = Math.imul(mixed ^ (Number(part) | 0), 0x9e3779b9);
  return mixed | 0;
}

export function chooseRootMapStrategy(seed = 104729, generation = 0, candidate = 0) {
  const random = xorshift32(mixSeed(seed, generation, candidate, 0x51f15e));
  return rootMapInitializationStrategies[Math.floor(random() * rootMapInitializationStrategies.length)];
}

export function randomRootMapPositions(input, { seed = 104729, generation = 0, candidate = 0, strategy = "random" } = {}) {
  const validated = validateRootMapInput(input);
  if (!rootMapInitializationStrategies.includes(strategy)) throw new Error(`Unknown root-map initialization strategy: ${strategy}.`);
  const positions = {};
  const roots = validated.roots;
  const random = xorshift32(mixSeed(seed, generation, candidate, strategy.length));
  const totalArea = roots.reduce((sum, root) => sum + Math.PI * territoryRadius(root) ** 2, 0);
  const spread = Math.sqrt(totalArea / Math.PI) * 1.65;
  const strategySpread = strategy === "cluster" ? spread * 2.6 : strategy === "anticluster" ? spread * 3.2 : spread;
  const maxDegree = Math.max(1, ...roots.map((root) => root.rootDegree));
  const ordered = [...roots].sort((left, right) => right.rootDegree - left.rootDegree || left.href.localeCompare(right.href));
  const hubCount = Math.max(1, Math.ceil(roots.length * 0.08));
  const hubIndexes = new Set(ordered.slice(0, hubCount).map((root) => roots.indexOf(root)));

  roots.forEach((root, index) => {
    const normalizedDegree = Math.min(1, root.rootDegree / maxDegree);
    let distance;
    let angle = random() * Math.PI * 2;
    if (strategy === "cluster" && hubIndexes.has(index)) {
      distance = Math.sqrt(random()) * Math.max(territoryRadius(root) * 1.8, strategySpread * 0.09);
    } else if (strategy === "anticluster" && hubIndexes.has(index)) {
      const hubIndex = ordered.findIndex((candidateRoot) => candidateRoot === root);
      angle = hubIndex * Math.PI * 2 / hubCount + (random() - 0.5) * 0.12;
      distance = strategySpread * 1.2;
    } else if (strategy === "cluster") {
      distance = strategySpread * (0.18 + 0.82 * normalizedDegree) * Math.sqrt(random());
    } else if (strategy === "anticluster") {
      distance = strategySpread * (0.24 + 0.76 * (1 - normalizedDegree)) * Math.sqrt(random());
    } else {
      distance = strategySpread * Math.sqrt(random());
    }
    positions[root.href] = [Number((Math.cos(angle) * distance).toFixed(6)), Number((Math.sin(angle) * distance).toFixed(6))];
  });
  return projectProtectedTerritories(validated, positions);
}

export function hillClimbToPlateau(input, positions, {
  seed = 104729,
  generation = 0,
  candidate = 0,
  plateauDelta = 0.1,
  batchIterations = 1_000,
  maximumBatches = 10_000,
  onBatch = null
} = {}) {
  if (!Number.isFinite(plateauDelta) || plateauDelta < 0) throw new Error("Evolution plateau delta must be non-negative.");
  if (!Number.isInteger(batchIterations) || batchIterations < 0) throw new Error("Evolution batch iterations must be a non-negative integer.");
  if (!Number.isInteger(maximumBatches) || maximumBatches < 1) throw new Error("Evolution maximum batches must be a positive integer.");
  let current = positions;
  let currentScore = scoreRootMap(input, current).score;
  const batches = [];
  for (let batch = 0; batch < maximumBatches; batch += 1) {
    const result = optimizeRootMap(input, current, {
      seed: mixSeed(seed, generation, candidate),
      run: batch,
      iterations: batchIterations
    });
    const nextScore = result.final;
    const improvement = currentScore.total - nextScore.total;
    current = result.positions;
    currentScore = nextScore;
    const summary = {
      batch: batch + 1,
      score: currentScore.total,
      improvement,
      acceptedMoves: result.acceptedMoves,
      attemptedMoves: result.attemptedMoves
    };
    batches.push(summary);
    onBatch?.({ positions: current, score: currentScore, summary, batches });
    if (improvement <= plateauDelta) return { positions: current, score: currentScore, batches, plateaued: true, guardReached: false };
  }
  return { positions: current, score: currentScore, batches, plateaued: false, guardReached: true };
}

export function evolveRootMapGeneration(input, {
  seed = 104729,
  generation = 0,
  champion = null,
  population = 10,
  plateauDelta = 0.1,
  batchIterations = 1_000,
  maximumBatches = 10_000,
  onUpdate = null
} = {}) {
  if (!Number.isInteger(population) || population < 2) throw new Error("Evolution population must contain at least two maps.");
  const candidates = Array.from({ length: population }, (_, index) => {
    const retained = generation > 0 && index === 0 && champion?.positions;
    const positions = retained
      ? champion.positions
      : randomRootMapPositions(input, { seed, generation, candidate: index });
    const scored = scoreRootMap(input, positions);
    return {
      index,
      origin: retained ? "retained" : "random",
      status: "queued",
      positions,
      score: scored.score,
      barriers: scored.raw.barrierCount,
      batches: [],
      plateaued: false,
      guardReached: false
    };
  });
  onUpdate?.({ generation, candidates, bestIndex: null, phase: "seeding" });
  for (const candidate of candidates) {
    candidate.status = "optimizing";
    onUpdate?.({ generation, candidates, bestIndex: null, phase: "optimizing" });
    const result = hillClimbToPlateau(input, candidate.positions, {
      seed,
      generation,
      candidate: candidate.index,
      plateauDelta,
      batchIterations,
      maximumBatches,
      onBatch: ({ positions, score, summary, batches }) => {
        candidate.positions = positions;
        candidate.score = score;
        candidate.batches = batches;
        candidate.barriers = scoreRootMap(input, positions).raw.barrierCount;
        candidate.lastBatch = summary;
        onUpdate?.({ generation, candidates, bestIndex: null, phase: "optimizing" });
      }
    });
    candidate.positions = result.positions;
    candidate.score = result.score;
    candidate.batches = result.batches;
    candidate.barriers = scoreRootMap(input, result.positions).raw.barrierCount;
    candidate.plateaued = result.plateaued;
    candidate.guardReached = result.guardReached;
    candidate.status = result.guardReached ? "guard" : "plateaued";
    onUpdate?.({ generation, candidates, bestIndex: null, phase: "optimizing" });
  }
  const bestIndex = candidates.reduce((best, candidate, index) => {
    if (candidate.score.total < candidates[best].score.total - 1e-12) return index;
    return candidate.score.total === candidates[best].score.total && candidate.index < candidates[best].index ? index : best;
  }, 0);
  onUpdate?.({ generation, candidates, bestIndex, phase: "complete" });
  return { generation, candidates, bestIndex, champion: candidates[bestIndex] };
}

export function optimizeRootMap(input, positions = null, { seed = 104729, run = 0, iterations = 1_000, deadline = null } = {}) {
  if (!Number.isInteger(iterations) || iterations < 0) throw new Error("Optimizer iterations must be a non-negative integer.");
  const state = createScoreState(input, positions);
  const initial = { ...state.score };
  const random = xorshift32((Number(seed) | 0) ^ (Number(run) | 0));
  let best = state.raw.overlapCount === 0 ? { score: { ...state.score }, positions: positionsFromState(state) } : null;
  let acceptedMoves = 0;
  let attemptedMoves = 0;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    if (deadline && Date.now() >= deadline) break;
    attemptedMoves += 1;
    const root = Math.floor(random() * state.roots.length);
    const progress = iterations > 1 ? iteration / (iterations - 1) : 1;
    const maximumStep = Math.min(240, territoryRadius(state.roots[root]));
    const step = 5 + (maximumStep - 5) * (1 - progress);
    const angle = random() * Math.PI * 2;
    const distance = step * (0.25 + random() * 0.75);
    const move = evaluateRootMove(state, root, state.x[root] + Math.cos(angle) * distance, state.y[root] + Math.sin(angle) * distance);
    if (state.raw.overlapCount === 0 && move.raw.overlapCount > 0) continue;
    if (move.score.total >= state.score.total - 1e-12) continue;
    applyRootMove(state, move);
    acceptedMoves += 1;
    if (state.raw.overlapCount === 0 && (!best || state.score.total < best.score.total - 1e-12)) {
      best = { score: { ...state.score }, positions: positionsFromState(state) };
    }
  }
  const finalPositions = best?.positions || positionsFromState(state);
  const final = scoreRootMap(input, finalPositions).score;
  return { initial, final, positions: finalPositions, acceptedMoves, attemptedMoves, improved: final.total < initial.total - 1e-12 };
}

export function validateCheckpoint(checkpoint, input, { requireClear = true } = {}) {
  const validated = validateRootMapInput(input);
  if (!checkpoint || checkpoint.schema !== ROOT_MAP_CHECKPOINT_SCHEMA) throw new Error(`Expected ${ROOT_MAP_CHECKPOINT_SCHEMA} checkpoint.`);
  if (checkpoint.corpusHash !== validated.corpusHash) throw new Error("Root-map checkpoint corpus hash is stale.");
  if (!Number.isInteger(checkpoint.seed) || !Number.isInteger(checkpoint.run) || checkpoint.run < 0) throw new Error("Root-map checkpoint has invalid run metadata.");
  if (!checkpoint.roots || typeof checkpoint.roots !== "object" || Array.isArray(checkpoint.roots)) throw new Error("Root-map checkpoint must contain a root coordinate object.");
  const expected = new Set(validated.roots.map((root) => root.href));
  const actual = Object.keys(checkpoint.roots);
  if (actual.length !== expected.size || actual.some((href) => !expected.has(href))) throw new Error("Root-map checkpoint root set does not match the current corpus.");
  for (const href of actual) {
    const position = checkpoint.roots[href];
    if (!Array.isArray(position) || position.length !== 2) throw new Error(`Root-map checkpoint has invalid coordinates for ${href}.`);
    finite(Number(position[0]), `${href} x`); finite(Number(position[1]), `${href} y`);
  }
  const scored = scoreRootMap(validated, checkpoint.roots);
  if (requireClear && scored.raw.overlapCount) throw new Error("Root-map checkpoint has protected-territory overlap.");
  return { ...checkpoint, roots: checkpoint.roots, score: scored.score, metrics: { ...(checkpoint.metrics || {}), barriers: scored.raw.barrierCount, weightedReferenceLength: scored.score.weightedReferenceLength } };
}

export function createCheckpoint(input, positions, { seed = 104729, run = 0, model = ROOT_MAP_CHECKPOINT_SCHEMA } = {}) {
  const validated = validateRootMapInput(input);
  const scored = scoreRootMap(validated, positions);
  if (scored.raw.overlapCount) throw new Error("Cannot create a checkpoint with protected-territory overlap.");
  return {
    schema: model,
    corpusHash: validated.corpusHash,
    seed: Number(seed),
    run: Number(run),
    generated: new Date().toISOString(),
    roots: positions,
    score: scored.score,
    metrics: {
      barriers: scored.raw.barrierCount,
      weightedReferenceLength: scored.score.weightedReferenceLength,
      overlapCount: scored.raw.overlapCount,
      mapDiagonal: scored.raw.diagonal
    }
  };
}

function escapeXml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&apos;", '"': "&quot;" })[character]);
}

export function renderRootMapSvg(input, positions, { width = 1600, height = 1000 } = {}) {
  const state = createScoreState(input, positions);
  const scored = fullScore(state, true);
  const padding = 72;
  let minX = Infinity; let maxX = -Infinity; let minY = Infinity; let maxY = -Infinity;
  for (let index = 0; index < state.roots.length; index += 1) {
    const radius = territoryRadius(state.roots[index]);
    minX = Math.min(minX, state.x[index] - radius); maxX = Math.max(maxX, state.x[index] + radius);
    minY = Math.min(minY, state.y[index] - radius); maxY = Math.max(maxY, state.y[index] + radius);
  }
  const scale = Math.min((width - padding * 2) / Math.max(1, maxX - minX), (height - padding * 2) / Math.max(1, maxY - minY));
  const project = (x, y) => [padding + (x - minX) * scale, height - padding - (y - minY) * scale];
  const edges = state.edges.map((edge) => {
    const [a, b] = edgePoints(state, edge);
    const [x1, y1] = project(a.x, a.y); const [x2, y2] = project(b.x, b.y);
    const opacity = Math.min(0.76, 0.12 + edge.weight / 18);
    return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="#64748b" stroke-opacity="${opacity.toFixed(3)}" stroke-width="${(0.45 + edge.weight / 7).toFixed(2)}" />`;
  }).join("");
  const markers = scored.barriers.map((barrier) => {
    const [cx, cy] = project(barrier.x, barrier.y);
    return `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="2.2" fill="#ef4444" />`;
  }).join("");
  const roots = state.roots.map((root, index) => {
    const [cx, cy] = project(state.x[index], state.y[index]);
    const radius = Math.max(2, territoryRadius(root) * scale);
    const fontSize = Math.max(6, Math.min(12, radius / 5));
    return `<g><circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${radius.toFixed(2)}" fill="#0f766e" fill-opacity="0.10" stroke="#0f766e" stroke-opacity="0.75" stroke-width="1" /><text x="${cx.toFixed(2)}" y="${(cy + fontSize * 0.35).toFixed(2)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize.toFixed(1)}" fill="#0f172a">${escapeXml(root.title)}</text></g>`;
  }).join("");
  const legend = `roots ${state.roots.length} · bundles ${state.edges.length} · barriers ${scored.raw.barrierCount} · weighted length ${scored.score.weightedReferenceLength.toFixed(3)} · score ${scored.score.total.toFixed(3)}`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Wiki root-map optimizer review"><rect width="100%" height="100%" fill="#f8fafc" />${edges}${markers}${roots}<rect x="16" y="16" width="${Math.min(width - 32, 980)}" height="28" rx="5" fill="#ffffff" fill-opacity="0.9" stroke="#cbd5e1" /><text x="28" y="35" font-family="Arial, sans-serif" font-size="13" fill="#0f172a">${escapeXml(legend)}</text></svg>\n`;
}
