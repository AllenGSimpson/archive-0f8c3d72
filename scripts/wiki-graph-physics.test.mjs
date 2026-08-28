import test from "node:test";
import assert from "node:assert/strict";
import { buildDirectedPhysicsLayout } from "./wiki-graph-physics.mjs";

function nodes() {
  return [
    { href: "a.html", title: "A", words: 100, radius: 8 },
    { href: "b.html", title: "B", words: 100, radius: 8 },
    { href: "c.html", title: "C", words: 100, radius: 8 },
    { href: "d.html", title: "D", words: 100, radius: 8 }
  ];
}

test("directed physics is deterministic and preserves weighted origins", () => {
  const edges = [[0, 2], [1, 2], [1, 2], [1, 2], [2, 3]];
  const first = buildDirectedPhysicsLayout(nodes(), edges, { iterations: 120, collisionPasses: 40, maximumCollisionPasses: 300 });
  const second = buildDirectedPhysicsLayout(nodes(), edges, { iterations: 120, collisionPasses: 40, maximumCollisionPasses: 300 });
  assert.deepEqual(first.x, second.x);
  assert.deepEqual(first.y, second.y);
  assert.deepEqual(first.originless, [true, true, false, false]);
  assert.deepEqual(first.debug.incoming[2], [[0, 1], [1, 3]]);
  assert.ok(first.x.every(Number.isFinite) && first.y.every(Number.isFinite));
  assert.ok(first.minimumSeparation >= 4.99);
  assert.ok(first.maximumOverlap <= 0.01);
});

test("connected pairs are exempt from repulsion and isolated components remain clear", () => {
  const connected = buildDirectedPhysicsLayout(nodes(), [[0, 1]], { iterations: 80, collisionPasses: 30, maximumCollisionPasses: 300 });
  const disconnected = buildDirectedPhysicsLayout(nodes(), [], { iterations: 80, collisionPasses: 30, maximumCollisionPasses: 300 });
  assert.equal(connected.originless[0], true);
  assert.equal(connected.originless[1], false);
  assert.equal(connected.componentCount, 3);
  assert.equal(disconnected.componentCount, 4);
  assert.ok(connected.minimumSeparation >= 4.99);
  assert.ok(disconnected.minimumSeparation >= 4.99);
});

test("fixed anchors remain on the outer seed ring while origins move toward destinations", () => {
  const edges = [[0, 1], [1, 0], [2, 0]];
  const options = { anchors: [{ index: 0, color: "#1485ED" }], iterations: 100, collisionPasses: 40, maximumCollisionPasses: 300 };
  const seed = buildDirectedPhysicsLayout(nodes().slice(0, 3), edges, { ...options, iterations: 0 });
  const settled = buildDirectedPhysicsLayout(nodes().slice(0, 3), edges, options);
  assert.deepEqual(settled.anchors, [true, false, false]);
  assert.deepEqual(settled.anchorColors, ["#1485ED", null, null]);
  assert.equal(settled.anchorAttractionMultiplier, 5);
  assert.equal(seed.initialPlacementCount, 1);
  assert.equal(seed.initialPlacementLayers, 1);
  assert.equal(settled.x[0], seed.x[0]);
  assert.equal(settled.y[0], seed.y[0]);
  assert.ok(Math.hypot(settled.x[1] - settled.x[0], settled.y[1] - settled.y[0]) < Math.hypot(seed.x[1] - seed.x[0], seed.y[1] - seed.y[0]));
});

test("attraction multipliers follow direct and multi-anchor separation", () => {
  const options = { anchors: [{ index: 0, color: "#1485ED" }], iterations: 0, collisionPasses: 40, maximumCollisionPasses: 300 };
  const direct = buildDirectedPhysicsLayout(nodes().slice(0, 2), [[1, 0]], options);
  const twoHop = buildDirectedPhysicsLayout(nodes().slice(0, 3), [[1, 2], [2, 0]], options);
  assert.equal(direct.attractionMultipliers[0], 5);
  assert.equal(direct.attractionMultipliers[1], 1);
  assert.equal(twoHop.attractionMultipliers[1], 0.5);
  assert.equal(twoHop.attractionMultipliers[2], 1);

  const fiveAnchorNodes = Array.from({ length: 6 }, (_, index) => ({ href: `${index}.html`, title: String(index), words: 100, radius: 8 }));
  const fiveAnchorEdges = [0, 1, 2, 3, 4].map((anchor) => [5, anchor]);
  const allFive = buildDirectedPhysicsLayout(fiveAnchorNodes, fiveAnchorEdges, {
    anchors: [0, 1, 2, 3, 4].map((index) => ({ index, color: "#1485ED" })),
    iterations: 0,
    collisionPasses: 40,
    maximumCollisionPasses: 300
  });
  assert.equal(allFive.attractionMultipliers[5], 5);
});
