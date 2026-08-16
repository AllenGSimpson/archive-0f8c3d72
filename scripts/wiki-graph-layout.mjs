const TAU = Math.PI * 2;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

export function hashUnit(value, salt = 0) {
  let hash = 2166136261 ^ salt;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function localCommunityMove(adjacency, names, resolution) {
  const count = adjacency.length;
  const degree = Float64Array.from(adjacency, (neighbors) => [...neighbors.values()].reduce((sum, weight) => sum + weight, 0));
  const community = Int32Array.from({ length: count }, (_, index) => index);
  const communityDegree = Float64Array.from(degree);
  const totalDegree = Math.max(1, degree.reduce((sum, value) => sum + value, 0));
  const order = Array.from({ length: count }, (_, index) => index)
    .sort((a, b) => degree[b] - degree[a] || names[a].localeCompare(names[b]));
  for (let pass = 0; pass < 40; pass += 1) {
    let changed = 0;
    for (const node of order) {
      const current = community[node];
      const weights = new Map();
      for (const [neighbor, weight] of adjacency[node]) {
        const candidate = community[neighbor];
        weights.set(candidate, (weights.get(candidate) || 0) + weight);
      }
      communityDegree[current] -= degree[node];
      let best = current;
      let bestGain = (weights.get(current) || 0) - resolution * degree[node] * communityDegree[current] / totalDegree;
      for (const [candidate, weight] of weights) {
        const gain = weight - resolution * degree[node] * communityDegree[candidate] / totalDegree;
        if (gain > bestGain + 1e-12 || (Math.abs(gain - bestGain) <= 1e-12 && candidate < best)) {
          best = candidate;
          bestGain = gain;
        }
      }
      community[node] = best;
      communityDegree[best] += degree[node];
      if (best !== current) changed += 1;
    }
    if (!changed) break;
  }
  return community;
}

export function detectCommunities(adjacency, nodes) {
  const names = nodes.map((node) => node.href);
  const weightedAdjacency = adjacency.map((neighbors) => new Map(neighbors.map((neighbor) => [neighbor, 1])));
  const fine = localCommunityMove(weightedAdjacency, names, 1.2);
  const fineLabels = [...new Set(fine)].sort((a, b) => a - b);
  const fineIndex = new Map(fineLabels.map((label, index) => [label, index]));
  const metaAdjacency = Array.from({ length: fineLabels.length }, () => new Map());
  const metaNames = new Array(fineLabels.length);
  for (let node = 0; node < nodes.length; node += 1) {
    const group = fineIndex.get(fine[node]);
    if (metaNames[group] === undefined || names[node] < metaNames[group]) metaNames[group] = names[node];
    for (const neighbor of adjacency[node]) {
      if (neighbor <= node) continue;
      const other = fineIndex.get(fine[neighbor]);
      if (group === other) continue;
      metaAdjacency[group].set(other, (metaAdjacency[group].get(other) || 0) + 1);
      metaAdjacency[other].set(group, (metaAdjacency[other].get(group) || 0) + 1);
    }
  }
  const coarse = localCommunityMove(metaAdjacency, metaNames, 1.4);
  const raw = Int32Array.from(fine, (label) => coarse[fineIndex.get(label)]);
  const grouped = new Map();
  for (let node = 0; node < raw.length; node += 1) {
    if (!grouped.has(raw[node])) grouped.set(raw[node], []);
    grouped.get(raw[node]).push(node);
  }
  const groups = [...grouped.values()].sort((left, right) => right.length - left.length
    || names[left[0]].localeCompare(names[right[0]]));
  const community = new Int32Array(nodes.length);
  groups.forEach((members, group) => members.forEach((node) => { community[node] = group; }));
  return { community: [...community], groups };
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function deterministicDirection(nodes, a, b, salt = 0) {
  const angle = TAU * hashUnit(`${nodes[Math.min(a, b)].href}|${nodes[Math.max(a, b)].href}`, salt);
  const sign = a <= b ? 1 : -1;
  return [Math.cos(angle) * sign, Math.sin(angle) * sign];
}

function applyVelocity(members, x, y, vx, vy, inertia, damping, cap) {
  for (const node of members) {
    vx[node] *= damping;
    vy[node] *= damping;
    const speed = Math.hypot(vx[node], vy[node]);
    if (speed > cap) {
      vx[node] *= cap / speed;
      vy[node] *= cap / speed;
    }
    x[node] += vx[node] / inertia[node];
    y[node] += vy[node] / inertia[node];
  }
}

function spatialPairsFor(members, x, y, cellSize, visit) {
  const buckets = new Map();
  const cells = new Map();
  for (const node of members) {
    const cellX = Math.floor(x[node] / cellSize);
    const cellY = Math.floor(y[node] / cellSize);
    cells.set(node, [cellX, cellY]);
    const key = `${cellX}:${cellY}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(node);
  }
  for (const a of members) {
    const [cellX, cellY] = cells.get(a);
    for (let offsetX = -1; offsetX <= 1; offsetX += 1) for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
      for (const b of buckets.get(`${cellX + offsetX}:${cellY + offsetY}`) || []) if (b > a) visit(a, b);
    }
  }
}

function spatialPairs(x, y, cellSize, visit) {
  spatialPairsFor(Array.from({ length: x.length }, (_, index) => index), x, y, cellSize, visit);
}

function hierarchyGeometry(nodes, structure) {
  const reservedRadius = structure.subtreeArea.map((area, node) => Math.sqrt(area / Math.PI)
    * (1.15 + 0.40 * Math.min(1, Math.log2(1 + structure.descendantCount[node]) / 8)));
  const major = structure.descendantCount.map((count) => count >= 8);
  const entry = new Int32Array(nodes.length);
  const exit = new Int32Array(nodes.length);
  const euler = [];
  const visit = (node) => {
    entry[node] = euler.length;
    euler.push(node);
    for (const child of structure.children[node]) visit(child);
    exit[node] = euler.length;
  };
  for (const root of structure.roots) visit(root);
  return { reservedRadius, major, entry: [...entry], exit: [...exit], euler };
}

function parentRestLength(nodes, structure, geometry, child) {
  const parent = structure.parents[child];
  const clearance = nodes[parent].radius + nodes[child].radius + 5;
  return clamp(nodes[parent].radius + nodes[child].radius + 24
    + 14 * Math.log2(1 + structure.descendantCount[child])
    + 0.18 * geometry.reservedRadius[child], clearance, 420);
}

function aggregateBranches(nodes, structure, geometry, x, y) {
  const mass = new Float64Array(nodes.length);
  const sumX = new Float64Array(nodes.length);
  const sumY = new Float64Array(nodes.length);
  const sumSquared = new Float64Array(nodes.length);
  for (let node = 0; node < nodes.length; node += 1) {
    const value = (nodes[node].radius + 5) ** 2;
    mass[node] = value;
    sumX[node] = x[node] * value;
    sumY[node] = y[node] * value;
    sumSquared[node] = (x[node] ** 2 + y[node] ** 2) * value;
  }
  for (let index = geometry.euler.length - 1; index >= 0; index -= 1) {
    const node = geometry.euler[index];
    const parent = structure.parents[node];
    if (parent < 0) continue;
    mass[parent] += mass[node];
    sumX[parent] += sumX[node];
    sumY[parent] += sumY[node];
    sumSquared[parent] += sumSquared[node];
  }
  const centerX = new Float64Array(nodes.length);
  const centerY = new Float64Array(nodes.length);
  const radius = new Float64Array(nodes.length);
  for (let node = 0; node < nodes.length; node += 1) {
    centerX[node] = sumX[node] / mass[node];
    centerY[node] = sumY[node] / mass[node];
    const variance = Math.max(0, sumSquared[node] / mass[node] - centerX[node] ** 2 - centerY[node] ** 2);
    radius[node] = Math.max(geometry.reservedRadius[node], Math.sqrt(variance) * 1.35 + nodes[node].radius);
  }
  return { mass, centerX, centerY, radius };
}

function propagateSubtreeImpulses(structure, geometry, impulseX, impulseY, apply) {
  const inheritedX = new Float64Array(impulseX.length);
  const inheritedY = new Float64Array(impulseY.length);
  for (const node of geometry.euler) {
    const parent = structure.parents[node];
    inheritedX[node] = impulseX[node] + (parent >= 0 ? inheritedX[parent] : 0);
    inheritedY[node] = impulseY[node] + (parent >= 0 ? inheritedY[parent] : 0);
    apply(node, inheritedX[node], inheritedY[node]);
  }
}

function normalizeAngle(angle) {
  while (angle <= -Math.PI) angle += TAU;
  while (angle > Math.PI) angle -= TAU;
  return angle;
}

function layoutRoots(nodes, structure, geometry, componentByNode, x, y, iterations) {
  const vx = new Float64Array(nodes.length);
  const vy = new Float64Array(nodes.length);
  const inertia = new Float64Array(nodes.length);
  inertia.fill(1);
  const rootsByComponent = new Map();
  for (const root of structure.roots) {
    const component = componentByNode[root];
    if (!rootsByComponent.has(component)) rootsByComponent.set(component, []);
    rootsByComponent.get(component).push(root);
  }
  for (const roots of rootsByComponent.values()) {
    roots.sort((a, b) => structure.subtreeArea[b] - structure.subtreeArea[a] || nodes[a].href.localeCompare(nodes[b].href));
    roots.forEach((root, index) => {
      const radius = 110 * Math.sqrt(index);
      const angle = index * GOLDEN_ANGLE + TAU * hashUnit(nodes[root].href, 17);
      x[root] = radius * Math.cos(angle);
      y[root] = radius * Math.sin(angle);
      inertia[root] = Math.max(1, Math.sqrt((nodes[root].words + 0.2 * structure.descendantWordMass[root]) / 100));
    });
  }
  const contracted = new Map();
  for (const bridge of structure.bridges) {
    const a = Math.min(bridge.rootA, bridge.rootB);
    const b = Math.max(bridge.rootA, bridge.rootB);
    const key = `${a}:${b}`;
    const entry = contracted.get(key) || { a, b, count: 0, normalization: 0 };
    entry.count += 1;
    entry.normalization = Math.max(entry.normalization, bridge.degreeNormalization || 0);
    contracted.set(key, entry);
  }
  const rootEdges = [...contracted.values()].map((edge) => {
    const normalization = Math.min(edge.normalization || 1,
      6 / Math.sqrt(Math.max(1, structure.graph.degree[edge.a] * structure.graph.degree[edge.b])));
    return {
      ...edge,
      normalization,
      target: clamp(0.72 * (geometry.reservedRadius[edge.a] + geometry.reservedRadius[edge.b]) + 90, 180, 760)
    };
  });
  const rootCellSize = Math.max(720, Math.max(...structure.roots.map((root) => geometry.reservedRadius[root])) * 2 + 100);
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    for (const edge of rootEdges) {
      let dx = x[edge.b] - x[edge.a];
      let dy = y[edge.b] - y[edge.a];
      let distance = Math.hypot(dx, dy);
      if (distance < 1e-8) {
        [dx, dy] = deterministicDirection(nodes, edge.a, edge.b, 23);
        distance = 1;
      }
      const force = 0.006 * edge.normalization * (distance - edge.target) / distance;
      vx[edge.a] += dx * force;
      vy[edge.a] += dy * force;
      vx[edge.b] -= dx * force;
      vy[edge.b] -= dy * force;
    }
    for (const roots of rootsByComponent.values()) spatialPairsFor(roots, x, y, rootCellSize, (a, b) => {
      let dx = x[b] - x[a];
      let dy = y[b] - y[a];
      let distanceSquared = dx * dx + dy * dy;
      if (distanceSquared < 1e-8) {
        [dx, dy] = deterministicDirection(nodes, a, b, 29);
        distanceSquared = 1;
      }
      const distance = Math.sqrt(distanceSquared);
      const required = 0.72 * (geometry.reservedRadius[a] + geometry.reservedRadius[b]) + 90;
      if (distance < required) {
        const force = Math.min(3, 0.012 * (required - distance)) / distance;
        vx[a] -= dx * force;
        vy[a] -= dy * force;
        vx[b] += dx * force;
        vy[b] += dy * force;
      }
    });
    for (const root of structure.roots) {
      vx[root] -= x[root] * 0.00005;
      vy[root] -= y[root] * 0.00005;
    }
    const cap = 10 + (0.2 - 10) * iteration / Math.max(1, iterations - 1);
    applyVelocity(structure.roots, x, y, vx, vy, inertia, 0.84, cap);
  }
  return rootEdges;
}

function seedDescendants(nodes, structure, geometry, x, y) {
  const directions = new Map();
  const sectors = new Map();
  const placeChildren = (parent, outwardAngle, fullField) => {
    const children = [...structure.children[parent]].sort((a, b) => structure.subtreeArea[b] - structure.subtreeArea[a]
      || nodes[a].href.localeCompare(nodes[b].href));
    if (!children.length) return;
    const weights = children.map((child) => Math.sqrt(structure.subtreeArea[child]));
    const totalWeight = weights.reduce((sum, value) => sum + value, 0) || 1;
    const span = fullField ? TAU : clamp(Math.PI / 3 + Math.PI * 0.22 * Math.log2(1 + children.length), Math.PI / 3, Math.PI * 1.5);
    let cursor = outwardAngle - span / 2;
    for (let index = 0; index < children.length; index += 1) {
      const child = children[index];
      const slice = span * weights[index] / totalWeight;
      const jitter = (hashUnit(nodes[child].href, 41) * 2 - 1) * 0.06;
      const angle = cursor + slice / 2 + jitter;
      const gutter = geometry.major[child] ? Math.min(0.18, slice * 0.12) : 0;
      sectors.set(child, { center: angle, halfWidth: Math.max(0.04, slice / 2 - gutter), major: geometry.major[child] });
      const distance = parentRestLength(nodes, structure, geometry, child);
      x[child] = x[parent] + Math.cos(angle) * distance;
      y[child] = y[parent] + Math.sin(angle) * distance;
      directions.set(child, [Math.cos(angle), Math.sin(angle)]);
      placeChildren(child, angle, false);
      cursor += slice;
    }
  };
  for (const root of structure.roots) placeChildren(root, TAU * hashUnit(nodes[root].href, 37), true);
  return { directions, sectors };
}

function parentSprings(nodes, structure, geometry) {
  const springs = [];
  for (let child = 0; child < nodes.length; child += 1) if (structure.parents[child] >= 0) {
    springs.push({ a: structure.parents[child], b: child, kind: 0, coefficient: 0.018,
      target: parentRestLength(nodes, structure, geometry, child) });
  }
  return springs;
}

function relax(nodes, structure, geometry, componentByNode, x, y, seeding, iterations) {
  const vx = new Float64Array(nodes.length);
  const vy = new Float64Array(nodes.length);
  const effectiveMass = nodes.map((node, index) => (node.words + 0.2 * structure.descendantWordMass[index])
    * (structure.parents[index] < 0 ? 5 : 1));
  const sortedMass = [...effectiveMass].sort((a, b) => a - b);
  const medianMass = sortedMass[Math.floor(sortedMass.length / 2)] || 1;
  const inertia = effectiveMass.map((mass) => Math.max(0.5, Math.sqrt(mass / medianMass)));
  const springs = parentSprings(nodes, structure, geometry);
  const maximumRadius = Math.max(...nodes.map((node) => node.radius));
  const hubClearance = nodes.map((node, index) => node.radius + 18
    + 8 * Math.log2(1 + structure.children[index].length)
    + 5 * Math.log2(1 + structure.descendantCount[index]));
  const cellSize = Math.max(160, maximumRadius * 2 + 60, Math.max(...hubClearance) * 2);
  const members = Array.from({ length: nodes.length }, (_, index) => index);
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    for (const spring of springs) {
      let dx = x[spring.b] - x[spring.a];
      let dy = y[spring.b] - y[spring.a];
      let distance = Math.hypot(dx, dy);
      if (distance < 1e-8) {
        [dx, dy] = deterministicDirection(nodes, spring.a, spring.b, 43);
        distance = 1;
      }
      const force = spring.coefficient * (distance - spring.target) / distance;
      vx[spring.a] += dx * force;
      vy[spring.a] += dy * force;
      vx[spring.b] -= dx * force;
      vy[spring.b] -= dy * force;
      if (spring.kind === 0) {
        const desired = seeding.directions.get(spring.b);
        if (desired) {
          const crossTrack = dx * -desired[1] + dy * desired[0];
          const angularForce = 0.002 * crossTrack;
          vx[spring.a] += -desired[1] * angularForce;
          vy[spring.a] += desired[0] * angularForce;
          vx[spring.b] -= -desired[1] * angularForce;
          vy[spring.b] -= desired[0] * angularForce;
        }
      }
    }
    const aggregate = aggregateBranches(nodes, structure, geometry, x, y);
    const branchImpulseX = new Float64Array(nodes.length);
    const branchImpulseY = new Float64Array(nodes.length);
    const applyBranchPair = (a, b, dx, dy, magnitude) => {
      const distance = Math.max(1e-8, Math.hypot(dx, dy));
      const inverseA = 1 / Math.sqrt(Math.max(1, aggregate.mass[a]));
      const inverseB = 1 / Math.sqrt(Math.max(1, aggregate.mass[b]));
      const totalInverse = inverseA + inverseB;
      const moveA = magnitude * inverseA / totalInverse;
      const moveB = magnitude * inverseB / totalInverse;
      branchImpulseX[a] -= dx / distance * moveA;
      branchImpulseY[a] -= dy / distance * moveA;
      branchImpulseX[b] += dx / distance * moveB;
      branchImpulseY[b] += dy / distance * moveB;
    };
    for (let parent = 0; parent < nodes.length; parent += 1) {
      const children = structure.children[parent];
      for (let left = 0; left < children.length; left += 1) for (let right = left + 1; right < children.length; right += 1) {
        const a = children[left];
        const b = children[right];
        let dx = aggregate.centerX[b] - aggregate.centerX[a];
        let dy = aggregate.centerY[b] - aggregate.centerY[a];
        let distance = Math.hypot(dx, dy);
        if (distance < 1e-8) {
          [dx, dy] = deterministicDirection(nodes, a, b, 61);
          distance = 1;
        }
        const bothMajor = geometry.major[a] && geometry.major[b];
        const required = (bothMajor ? 0.72 : 0.45) * (aggregate.radius[a] + aggregate.radius[b]) + (bothMajor ? 12 : 8);
        if (distance < required) {
          const magnitude = Math.min(3.5, (bothMajor ? 0.018 : 0.008) * (required - distance));
          applyBranchPair(a, b, dx, dy, magnitude);
        }
      }
      for (const child of children) {
        const sector = seeding.sectors.get(child);
        const dx = aggregate.centerX[child] - x[parent];
        const dy = aggregate.centerY[child] - y[parent];
        const distance = Math.max(1, Math.hypot(dx, dy));
        const childAngle = Math.atan2(dy, dx);
        if (sector?.major) {
          const error = normalizeAngle(childAngle - sector.center);
          const excess = Math.abs(error) - sector.halfWidth;
          if (excess > 0) {
            const direction = error > 0 ? -1 : 1;
            const magnitude = Math.min(3, 0.025 * excess * distance);
            branchImpulseX[child] += -Math.sin(childAngle) * direction * magnitude;
            branchImpulseY[child] += Math.cos(childAngle) * direction * magnitude;
          }
        }
        if (geometry.major[child]) {
          const required = hubClearance[parent] + Math.min(80, aggregate.radius[child] * 0.18);
          if (distance < required) {
            const magnitude = Math.min(3, 0.020 * (required - distance));
            branchImpulseX[child] += dx / distance * magnitude;
            branchImpulseY[child] += dy / distance * magnitude;
            vx[parent] -= dx / distance * magnitude * 0.15;
            vy[parent] -= dy / distance * magnitude * 0.15;
          }
        }
      }
    }
    propagateSubtreeImpulses(structure, geometry, branchImpulseX, branchImpulseY, (node, impulseX, impulseY) => {
      x[node] += impulseX * 0.25;
      y[node] += impulseY * 0.25;
    });
    spatialPairs(x, y, cellSize, (a, b) => {
      if (componentByNode[a] !== componentByNode[b]) return;
      let dx = x[b] - x[a];
      let dy = y[b] - y[a];
      let distance = Math.hypot(dx, dy);
      if (distance < 1e-8) {
        [dx, dy] = deterministicDirection(nodes, a, b, 47);
        distance = 1;
      }
      const clearance = nodes[a].radius + nodes[b].radius + 5;
      if (distance < clearance) {
        const force = 0.42 * (clearance - distance) / distance;
        vx[a] -= dx * force;
        vy[a] -= dy * force;
        vx[b] += dx * force;
        vy[b] += dy * force;
      } else if (distance < clearance + 48) {
        const force = 0.00035 * (clearance + 48 - distance) / distance;
        vx[a] -= dx * force;
        vy[a] -= dy * force;
        vx[b] += dx * force;
        vy[b] += dy * force;
      }
      const ancestor = (candidate, descendant) => geometry.entry[candidate] <= geometry.entry[descendant]
        && geometry.entry[descendant] < geometry.exit[candidate];
      const applyHubExclusion = (hub, other, sign) => {
        if (!geometry.major[hub] || ancestor(hub, other) || ancestor(other, hub)) return;
        const required = hubClearance[hub] + nodes[other].radius;
        if (distance >= required) return;
        const force = Math.min(1.5, 0.004 * (required - distance)) / distance;
        vx[hub] -= dx * force * sign;
        vy[hub] -= dy * force * sign;
        vx[other] += dx * force * sign;
        vy[other] += dy * force * sign;
      };
      applyHubExclusion(a, b, 1);
      applyHubExclusion(b, a, -1);
    });
    for (const root of structure.roots) {
      vx[root] -= x[root] * 0.000025;
      vy[root] -= y[root] * 0.000025;
    }
    const cap = 8 + (0.15 - 8) * iteration / Math.max(1, iterations - 1);
    applyVelocity(members, x, y, vx, vy, inertia, 0.86, cap);
  }
  return { effectiveMass, springs, hubClearance };
}

function maximumPenetration(nodes, x, y, gap = 5) {
  const maximumRadius = Math.max(...nodes.map((node) => node.radius));
  const cellSize = Math.max(16, maximumRadius * 2 + gap);
  let maximum = 0;
  let minimumSeparation = Infinity;
  let worstPair = null;
  spatialPairs(x, y, cellSize, (a, b) => {
    const distance = Math.hypot(x[b] - x[a], y[b] - y[a]);
    const separation = distance - nodes[a].radius - nodes[b].radius;
    minimumSeparation = Math.min(minimumSeparation, separation);
    const penetration = gap - separation;
    if (penetration > maximum) {
      maximum = penetration;
      worstPair = [a, b];
    }
  });
  return { maximum: Math.max(0, maximum), minimumSeparation, worstPair };
}

function collisionProjection(nodes, structure, geometry, x, y, effectiveMass, normalPasses, maximumPasses) {
  const maximumRadius = Math.max(...nodes.map((node) => node.radius));
  const cellSize = Math.max(16, maximumRadius * 2 + 5);
  let iterations = 0;
  let branchTranslationCount = 0;
  let descendantBranchTranslationCount = 0;
  const ancestor = (candidate, descendant) => geometry.entry[candidate] <= geometry.entry[descendant]
    && geometry.entry[descendant] < geometry.exit[candidate];
  const firstChildBelow = (ancestorNode, descendant) => {
    let current = descendant;
    while (structure.parents[current] !== ancestorNode) current = structure.parents[current];
    return current;
  };
  const divergentTargets = (a, b) => {
    if (ancestor(a, b)) return [{ node: a, branch: false }, { node: firstChildBelow(a, b), branch: true }];
    if (ancestor(b, a)) return [{ node: firstChildBelow(b, a), branch: true }, { node: b, branch: false }];
    let left = a;
    let right = b;
    while (structure.depths[left] > structure.depths[right]) left = structure.parents[left];
    while (structure.depths[right] > structure.depths[left]) right = structure.parents[right];
    while (structure.parents[left] !== structure.parents[right]) {
      left = structure.parents[left];
      right = structure.parents[right];
    }
    return [{ node: left, branch: true }, { node: right, branch: true }];
  };
  const hierarchyProject = (factor) => {
    const branchX = new Float64Array(nodes.length);
    const branchY = new Float64Array(nodes.length);
    const branchCount = new Uint32Array(nodes.length);
    const individualX = new Float64Array(nodes.length);
    const individualY = new Float64Array(nodes.length);
    const individualCount = new Uint32Array(nodes.length);
    spatialPairs(x, y, cellSize, (a, b) => {
      let dx = x[b] - x[a];
      let dy = y[b] - y[a];
      let distance = Math.hypot(dx, dy);
      if (distance < 1e-10) {
        [dx, dy] = deterministicDirection(nodes, a, b, 53);
        distance = 1;
      }
      const penetration = nodes[a].radius + nodes[b].radius + 5 - distance;
      if (penetration <= 0) return;
      const [left, right] = divergentTargets(a, b);
      const massLeft = left.branch ? nodes[left.node].words + structure.descendantWordMass[left.node] : effectiveMass[left.node];
      const massRight = right.branch ? nodes[right.node].words + structure.descendantWordMass[right.node] : effectiveMass[right.node];
      const inverseLeft = 1 / Math.max(1, massLeft);
      const inverseRight = 1 / Math.max(1, massRight);
      const totalInverse = inverseLeft + inverseRight;
      const moveLeft = factor * penetration * inverseLeft / totalInverse;
      const moveRight = factor * penetration * inverseRight / totalInverse;
      const write = (target, moveX, moveY) => {
        const valuesX = target.branch ? branchX : individualX;
        const valuesY = target.branch ? branchY : individualY;
        const counts = target.branch ? branchCount : individualCount;
        valuesX[target.node] += moveX;
        valuesY[target.node] += moveY;
        counts[target.node] += 1;
        if (target.branch) {
          branchTranslationCount += 1;
          if (geometry.exit[target.node] - geometry.entry[target.node] > 1) descendantBranchTranslationCount += 1;
        }
      };
      write(left, -dx / distance * moveLeft, -dy / distance * moveLeft);
      write(right, dx / distance * moveRight, dy / distance * moveRight);
    });
    for (let node = 0; node < nodes.length; node += 1) {
      if (branchCount[node]) {
        branchX[node] /= branchCount[node];
        branchY[node] /= branchCount[node];
      }
      if (individualCount[node]) {
        x[node] += individualX[node] / individualCount[node];
        y[node] += individualY[node] / individualCount[node];
      }
    }
    propagateSubtreeImpulses(structure, geometry, branchX, branchY, (node, moveX, moveY) => {
      x[node] += moveX;
      y[node] += moveY;
    });
  };
  const individualProject = (factor) => {
    spatialPairs(x, y, cellSize, (a, b) => {
      let dx = x[b] - x[a];
      let dy = y[b] - y[a];
      let distance = Math.hypot(dx, dy);
      if (distance < 1e-10) {
        [dx, dy] = deterministicDirection(nodes, a, b, 53);
        distance = 1;
      }
      const penetration = nodes[a].radius + nodes[b].radius + 5 - distance;
      if (penetration <= 0) return;
      const inverseA = 1 / Math.max(1, effectiveMass[a]);
      const inverseB = 1 / Math.max(1, effectiveMass[b]);
      const totalInverse = inverseA + inverseB;
      const moveA = factor * penetration * inverseA / totalInverse;
      const moveB = factor * penetration * inverseB / totalInverse;
      x[a] -= dx / distance * moveA;
      y[a] -= dy / distance * moveA;
      x[b] += dx / distance * moveB;
      y[b] += dy / distance * moveB;
    });
  };
  for (; iterations < Math.min(normalPasses, maximumPasses); iterations += 1) {
    hierarchyProject(0.55);
  }
  let overlap = maximumPenetration(nodes, x, y);
  while (overlap.maximum > 0.01 && iterations < maximumPasses) {
    individualProject(0.9);
    iterations += 1;
    if (iterations % 10 === 0 || iterations === maximumPasses) overlap = maximumPenetration(nodes, x, y);
  }
  overlap = maximumPenetration(nodes, x, y);
  if (overlap.maximum > 0.01) {
    const pair = overlap.worstPair?.map((node) => nodes[node].href).join(" and ") || "an unknown pair";
    throw new Error(`Wiki graph layout retains ${overlap.maximum.toFixed(4)} units of overlap between ${pair} after ${iterations} projection passes.`);
  }
  return {
    iterations,
    hierarchyPasses: Math.min(normalPasses, maximumPasses),
    branchTranslationCount,
    descendantBranchTranslationCount,
    ...overlap
  };
}

function arrangeComponents(nodes, components, x, y) {
  if (components.length <= 1) return;
  const entries = components.map((members) => {
    const mass = members.reduce((sum, node) => sum + nodes[node].words, 0);
    const bounds = members.reduce((box, node) => ({
      minX: Math.min(box.minX, x[node] - nodes[node].radius), maxX: Math.max(box.maxX, x[node] + nodes[node].radius),
      minY: Math.min(box.minY, y[node] - nodes[node].radius), maxY: Math.max(box.maxY, y[node] + nodes[node].radius)
    }), { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity });
    return { members, mass, bounds, width: bounds.maxX - bounds.minX, height: bounds.maxY - bounds.minY };
  }).sort((a, b) => b.mass - a.mass || nodes[a.members[0]].href.localeCompare(nodes[b.members[0]].href));
  const totalArea = entries.reduce((sum, entry) => sum + (entry.width + 80) * (entry.height + 80), 0);
  const targetWidth = Math.sqrt(totalArea) * 1.35;
  let cursorX = 0;
  let cursorY = 0;
  let rowHeight = 0;
  for (const entry of entries) {
    if (cursorX && cursorX + entry.width > targetWidth) {
      cursorX = 0;
      cursorY += rowHeight + 80;
      rowHeight = 0;
    }
    const offsetX = cursorX - entry.bounds.minX;
    const offsetY = cursorY - entry.bounds.minY;
    for (const node of entry.members) {
      x[node] += offsetX;
      y[node] += offsetY;
    }
    cursorX += entry.width + 80;
    rowHeight = Math.max(rowHeight, entry.height);
  }
}

function convexHullArea(points) {
  if (points.length < 3) return 0;
  const sorted = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (origin, a, b) => (a[0] - origin[0]) * (b[1] - origin[1]) - (a[1] - origin[1]) * (b[0] - origin[0]);
  const lower = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower.at(-2), lower.at(-1), point) <= 0) lower.pop();
    lower.push(point);
  }
  const upper = [];
  for (let index = sorted.length - 1; index >= 0; index -= 1) {
    const point = sorted[index];
    while (upper.length >= 2 && cross(upper.at(-2), upper.at(-1), point) <= 0) upper.pop();
    upper.push(point);
  }
  const hull = lower.slice(0, -1).concat(upper.slice(0, -1));
  let twiceArea = 0;
  for (let index = 0; index < hull.length; index += 1) {
    const next = (index + 1) % hull.length;
    twiceArea += hull[index][0] * hull[next][1] - hull[next][0] * hull[index][1];
  }
  return Math.abs(twiceArea) / 2;
}

function medianCommunityHullFill(nodes, groups, x, y) {
  const fills = groups.filter((members) => members.length >= 3).map((members) => {
    const circleArea = members.reduce((sum, node) => sum + Math.PI * nodes[node].radius ** 2, 0);
    const hullArea = convexHullArea(members.map((node) => [x[node], y[node]]));
    return hullArea > 0 ? circleArea / hullArea : 1;
  }).sort((a, b) => a - b);
  if (!fills.length) return 0;
  const middle = Math.floor(fills.length / 2);
  return fills.length % 2 ? fills[middle] : (fills[middle - 1] + fills[middle]) / 2;
}

function branchDiagnostics(nodes, structure, geometry, x, y, hubClearance) {
  const aggregate = aggregateBranches(nodes, structure, geometry, x, y);
  let siblingPairs = 0;
  let overlappingSiblingPairs = 0;
  for (let parent = 0; parent < nodes.length; parent += 1) {
    const children = structure.children[parent];
    for (let left = 0; left < children.length; left += 1) for (let right = left + 1; right < children.length; right += 1) {
      const a = children[left];
      const b = children[right];
      siblingPairs += 1;
      const distance = Math.hypot(aggregate.centerX[b] - aggregate.centerX[a], aggregate.centerY[b] - aggregate.centerY[a]);
      const bothMajor = geometry.major[a] && geometry.major[b];
      const required = (bothMajor ? 0.72 : 0.45) * (aggregate.radius[a] + aggregate.radius[b]) + (bothMajor ? 12 : 8);
      if (distance < required) overlappingSiblingPairs += 1;
    }
  }
  let majorBranches = 0;
  let hubExclusionViolations = 0;
  for (let child = 0; child < nodes.length; child += 1) {
    if (!geometry.major[child] || structure.parents[child] < 0) continue;
    majorBranches += 1;
    const parent = structure.parents[child];
    const distance = Math.hypot(aggregate.centerX[child] - x[parent], aggregate.centerY[child] - y[parent]);
    const required = hubClearance[parent] + Math.min(80, aggregate.radius[child] * 0.18);
    if (distance < required) hubExclusionViolations += 1;
  }
  return {
    majorBranches,
    siblingPairs,
    overlappingSiblingPairs,
    siblingEnvelopeOverlapRate: siblingPairs ? overlappingSiblingPairs / siblingPairs : 0,
    hubExclusionViolations,
    hubExclusionViolationRate: majorBranches ? hubExclusionViolations / majorBranches : 0
  };
}

function mapDiagonal(x, y) {
  return Math.hypot(Math.max(...x) - Math.min(...x), Math.max(...y) - Math.min(...y));
}

function centerByWordMass(nodes, x, y) {
  const total = nodes.reduce((sum, node) => sum + node.words, 0) || 1;
  const centerX = nodes.reduce((sum, node, index) => sum + x[index] * node.words, 0) / total;
  const centerY = nodes.reduce((sum, node, index) => sum + y[index] * node.words, 0) / total;
  for (let node = 0; node < nodes.length; node += 1) {
    x[node] -= centerX;
    y[node] -= centerY;
  }
}

export function verifyLayoutClearance(nodes, x, y, gap = 5) {
  return maximumPenetration(nodes, x, y, gap);
}

export function projectHierarchyAwareCollisions(nodes, structure, initialX, initialY, options = {}) {
  const geometry = hierarchyGeometry(nodes, structure);
  const x = Float64Array.from(initialX);
  const y = Float64Array.from(initialY);
  const effectiveMass = nodes.map((node, index) => (node.words + 0.2 * structure.descendantWordMass[index])
    * (structure.parents[index] < 0 ? 5 : 1));
  const collision = collisionProjection(nodes, structure, geometry, x, y, effectiveMass,
    options.collisionPasses ?? 1, options.maximumCollisionPasses ?? 2000);
  return { x: [...x], y: [...y], ...collision };
}

export function buildSemanticForestLayout(nodes, structure, options = {}) {
  if (!nodes.length) throw new Error("Cannot lay out an empty wiki graph.");
  const rootIterations = options.rootIterations ?? 700;
  const relaxationIterations = options.relaxationIterations ?? 900;
  const collisionPasses = options.collisionPasses ?? 300;
  const maximumCollisionPasses = options.maximumCollisionPasses ?? 2000;
  const { community, groups } = detectCommunities(structure.graph.adjacency, nodes);
  const componentByNode = new Int32Array(nodes.length);
  structure.components.forEach((members, component) => members.forEach((node) => { componentByNode[node] = component; }));
  const x = new Float64Array(nodes.length);
  const y = new Float64Array(nodes.length);
  const geometry = hierarchyGeometry(nodes, structure);
  const rootEdges = layoutRoots(nodes, structure, geometry, componentByNode, x, y, rootIterations);
  const seeding = seedDescendants(nodes, structure, geometry, x, y);
  const relaxed = relax(nodes, structure, geometry, componentByNode, x, y, seeding, relaxationIterations);
  arrangeComponents(nodes, structure.components, x, y);
  const collision = collisionProjection(nodes, structure, geometry, x, y, relaxed.effectiveMass, collisionPasses, maximumCollisionPasses);
  centerByWordMass(nodes, x, y);
  const finalClearance = maximumPenetration(nodes, x, y);
  if (finalClearance.maximum > 0.01) throw new Error(`Final wiki graph overlap is ${finalClearance.maximum.toFixed(4)} units.`);
  const communitySizes = groups.map((members) => members.length);
  const branches = branchDiagnostics(nodes, structure, geometry, x, y, relaxed.hubClearance);
  return {
    x: [...x], y: [...y], z: Array(nodes.length).fill(0), degree: structure.graph.degree, community,
    communityCount: groups.length, largestCommunity: Math.max(...communitySizes), relaxationIterations,
    collisionIterations: collision.iterations, maximumOverlap: finalClearance.maximum,
    minimumSeparation: finalClearance.minimumSeparation,
    medianCommunityHullFill: medianCommunityHullFill(nodes, groups, x, y),
    minimumReservedRadius: Math.min(...geometry.reservedRadius),
    maximumReservedRadius: Math.max(...geometry.reservedRadius),
    majorBranchCount: branches.majorBranches,
    siblingPairCount: branches.siblingPairs,
    overlappingSiblingPairCount: branches.overlappingSiblingPairs,
    siblingEnvelopeOverlapRate: branches.siblingEnvelopeOverlapRate,
    hubExclusionViolations: branches.hubExclusionViolations,
    hubExclusionViolationRate: branches.hubExclusionViolationRate,
    branchRepulsionIterations: relaxationIterations,
    hierarchyCollisionPasses: collision.hierarchyPasses,
    branchCollisionTranslations: collision.branchTranslationCount,
    descendantBranchCollisionTranslations: collision.descendantBranchTranslationCount,
    rootBridgeForceCount: rootEdges.length,
    parentSpringCount: relaxed.springs.length,
    mapDiagonal: mapDiagonal(x, y),
    debug: {
      communities: community,
      groups,
      components: structure.components,
      parentSprings: relaxed.springs,
      rootEdges,
      reservedRadius: [...geometry.reservedRadius],
      majorBranches: [...geometry.major],
      sectors: [...seeding.sectors.entries()].map(([node, sector]) => ({ node, ...sector })),
      branchDiagnostics: branches
    }
  };
}
