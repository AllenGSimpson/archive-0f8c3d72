import test from "node:test";
import assert from "node:assert/strict";
import { buildSemanticStructure } from "./wiki-graph-semantics.mjs";
import { buildSemanticForestLayout, projectHierarchyAwareCollisions, verifyLayoutClearance } from "./wiki-graph-layout.mjs";

function node(href, words = 100, config = {}) {
  return {
    href: `${href}.html`, title: config.title || href, words,
    radius: 5.4 + 0.24 * Math.sqrt(words),
    lead: config.lead || config.title || href,
    headings: config.headings || [], categories: config.categories || [],
    body: config.body || "", linkProminence: config.linkProminence || {}
  };
}

function reciprocal(edges, a, b) {
  edges.push([a, b], [b, a]);
}

const fastOptions = { rootIterations: 120, relaxationIterations: 180, collisionPasses: 120 };

test("semantic local parent beats a generic one-way portal listing", () => {
  const nodes = [
    node("portal", 1000, { title: "General archive portal", categories: ["Index"] }),
    node("regional", 500, { title: "Mekong administration", categories: ["Mekong", "Vietnam"] }),
    node("child", 80, { title: "Mekong river authority", lead: "Vietnam Mekong river administration", categories: ["Mekong", "Vietnam"] })
  ];
  const edges = [[0, 2]];
  reciprocal(edges, 1, 2);
  const structure = buildSemanticStructure(nodes, edges, { anchors: ["regional.html"], parents: {} });
  assert.equal(structure.parents[2], 1);
});

test("reciprocal and prominent child links affect parent selection", () => {
  const nodes = [
    node("alpha", 420, { title: "Naval aviation", categories: ["Naval aviation"] }),
    node("beta", 400, { title: "Fleet aviation", categories: ["Naval aviation"] }),
    node("child", 60, {
      title: "Carrier fighter office", categories: ["Naval aviation"],
      linkProminence: { "beta.html": 1, "alpha.html": 0.35 }
    })
  ];
  const edges = [[2, 0], [2, 1], [1, 2]];
  const structure = buildSemanticStructure(nodes, edges, { anchors: ["alpha.html", "beta.html"], parents: {} });
  assert.equal(structure.parents[2], 1);
});

test("a weak relationship promotes the child to a root", () => {
  const nodes = [node("astronomy", 900, { lead: "stars planets astronomy" }), node("bread", 40, { lead: "grain ovens bakery" })];
  const structure = buildSemanticStructure(nodes, [[0, 1]]);
  assert.equal(structure.parents[1], -1);
  assert.ok(structure.roots.includes(1));
});

test("parent chains are acyclic and terminate at roots", () => {
  const nodes = [
    node("root", 1000, { categories: ["Air power"] }),
    node("regional", 400, { categories: ["Air power"] }),
    ...Array.from({ length: 10 }, (_, index) => node(`leaf-${index}`, 60 + index, { categories: ["Air power"] }))
  ];
  const edges = [];
  reciprocal(edges, 0, 1);
  for (let index = 2; index < nodes.length; index += 1) reciprocal(edges, index < 7 ? 0 : 1, index);
  const structure = buildSemanticStructure(nodes, edges);
  for (let start = 0; start < nodes.length; start += 1) {
    const seen = new Set();
    let current = start;
    while (structure.parents[current] >= 0) {
      assert.ok(!seen.has(current));
      seen.add(current);
      current = structure.parents[current];
    }
    assert.ok(structure.roots.includes(current));
  }
});

test("peer edges require mutual ranking and cap both endpoints at two", () => {
  const nodes = Array.from({ length: 7 }, (_, index) => node(`peer-${index}`, 200 - index, {
    title: `Pacific naval logistics ${index}`, categories: ["Pacific", "Naval logistics"]
  }));
  const edges = [];
  for (let a = 0; a < nodes.length; a += 1) for (let b = a + 1; b < nodes.length; b += 1) reciprocal(edges, a, b);
  const structure = buildSemanticStructure(nodes, edges, { anchors: nodes.map((entry) => entry.href), parents: {} });
  const degree = new Uint8Array(nodes.length);
  for (const peer of structure.peers) {
    degree[peer.a] += 1;
    degree[peer.b] += 1;
  }
  assert.ok(structure.peers.length > 0);
  assert.ok([...degree].every((value) => value <= 2));
});

test("bridges connect all roots in each reference component using real pairs", () => {
  const nodes = [
    node("left", 700, { categories: ["Left"] }), node("left-leaf", 70, { categories: ["Left"] }),
    node("middle", 680, { categories: ["Middle"] }), node("middle-leaf", 70, { categories: ["Middle"] }),
    node("right", 660, { categories: ["Right"] }), node("right-leaf", 70, { categories: ["Right"] })
  ];
  const edges = [];
  reciprocal(edges, 0, 1); reciprocal(edges, 2, 3); reciprocal(edges, 4, 5);
  edges.push([1, 3], [3, 5]);
  const structure = buildSemanticStructure(nodes, edges, { anchors: ["left.html", "middle.html", "right.html"], parents: {} });
  const realPairs = new Set(structure.graph.pairs.map((pair) => `${pair.a}:${pair.b}`));
  assert.ok(structure.bridges.length >= 2);
  for (const bridge of structure.bridges) assert.ok(realPairs.has(`${Math.min(bridge.a, bridge.b)}:${Math.max(bridge.a, bridge.b)}`));
});

test("overrides permit an unlinked parent and reject invalid cycles", () => {
  const nodes = [node("a", 300), node("b", 200), node("c", 100)];
  const structure = buildSemanticStructure(nodes, [], { anchors: ["a.html"], parents: { "c.html": "a.html" } });
  assert.equal(structure.parents[2], 0);
  assert.throws(() => buildSemanticStructure(nodes, [], {
    anchors: [], parents: { "a.html": "b.html", "b.html": "a.html" }
  }), /cycle/i);
});

test("v2 layout is deterministic, parent-only, and preserves five-unit clearance", () => {
  const nodes = [node("hub", 1000, { categories: ["Technology"] }),
    ...Array.from({ length: 28 }, (_, index) => node(`leaf-${index}`, 30 + index, { categories: ["Technology"] }))];
  const edges = [];
  for (let index = 1; index < nodes.length; index += 1) reciprocal(edges, 0, index);
  const structure = buildSemanticStructure(nodes, edges);
  const first = buildSemanticForestLayout(nodes, structure, fastOptions);
  const second = buildSemanticForestLayout(nodes, structure, fastOptions);
  assert.deepEqual(first.x, second.x);
  assert.deepEqual(first.y, second.y);
  assert.equal(first.parentSpringCount, structure.parents.filter((parent) => parent >= 0).length);
  assert.equal(first.debug.parentSprings.length, first.parentSpringCount);
  assert.ok(first.debug.parentSprings.every((spring) => spring.kind === 0));
  const clearance = verifyLayoutClearance(nodes, first.x, first.y);
  assert.ok(clearance.maximum <= 0.01);
  assert.ok(clearance.minimumSeparation >= 4.99);
});

test("large sibling trees receive ordered territories, longer rests, and hub exclusion", () => {
  const nodes = [node("root", 1400), node("west", 600), node("east", 580)];
  const parents = { "west.html": "root.html", "east.html": "root.html" };
  for (const [branch, parent] of [["west", 1], ["east", 2]]) {
    for (let index = 0; index < 12; index += 1) {
      const href = `${branch}-${index}`;
      nodes.push(node(href, 45 + index));
      parents[`${href}.html`] = nodes[parent].href;
    }
  }
  nodes.push(node("small", 55));
  parents["small.html"] = "root.html";
  const edges = [];
  for (const [childHref, parentHref] of Object.entries(parents)) {
    const child = nodes.findIndex((entry) => entry.href === childHref);
    const parent = nodes.findIndex((entry) => entry.href === parentHref);
    reciprocal(edges, child, parent);
  }
  const structure = buildSemanticStructure(nodes, edges, { anchors: ["root.html"], parents });
  const layout = buildSemanticForestLayout(nodes, structure, fastOptions);
  const sectors = new Map(layout.debug.sectors.map((sector) => [sector.node, sector]));
  assert.ok(sectors.get(1).major && sectors.get(2).major);
  assert.notEqual(Math.sign(Math.sin(sectors.get(1).center - sectors.get(2).center)), 0);
  const westSpring = layout.debug.parentSprings.find((spring) => spring.b === 1);
  const smallSpring = layout.debug.parentSprings.find((spring) => spring.b === nodes.length - 1);
  assert.ok(westSpring.target > smallSpring.target);
  assert.equal(layout.hubExclusionViolations, 0);
  assert.ok(layout.siblingEnvelopeOverlapRate < 0.5);
});

test("degree normalization weakens a promiscuous root bridge", () => {
  const nodes = [node("left-hub", 900), node("right-hub", 880)];
  const parents = {};
  const edges = [];
  for (let side = 0; side < 2; side += 1) {
    for (let index = 0; index < 40; index += 1) {
      const child = nodes.length;
      nodes.push(node(`${side ? "right" : "left"}-${index}`, 35));
      parents[nodes[child].href] = nodes[side].href;
      reciprocal(edges, side, child);
    }
  }
  reciprocal(edges, 0, 1);
  const structure = buildSemanticStructure(nodes, edges, {
    anchors: ["left-hub.html", "right-hub.html"], parents
  });
  const bridge = structure.bridges.find((entry) => entry.a === 0 && entry.b === 1);
  assert.ok(bridge);
  assert.ok(bridge.degreeNormalization < 0.2);
  const layout = buildSemanticForestLayout(nodes, structure, fastOptions);
  assert.ok(layout.debug.rootEdges.every((edge) => edge.normalization <= 1));
});

test("hierarchy-aware collision moves non-leaf subtrees before strict projection", () => {
  const nodes = [node("root", 1200), node("left", 900), node("right", 880)];
  const parents = { "left.html": "root.html", "right.html": "root.html" };
  const edges = [];
  for (let index = 0; index < 18; index += 1) {
    const side = index % 2 ? 1 : 2;
    const child = nodes.length;
    nodes.push(node(`dense-${index}`, 700));
    parents[nodes[child].href] = nodes[side].href;
  }
  for (const [childHref, parentHref] of Object.entries(parents)) {
    const child = nodes.findIndex((entry) => entry.href === childHref);
    const parent = nodes.findIndex((entry) => entry.href === parentHref);
    reciprocal(edges, child, parent);
  }
  const structure = buildSemanticStructure(nodes, edges, { anchors: ["root.html"], parents });
  const x = [-500, 0, 5];
  const y = [0, 0, 0];
  const branchRows = [0, 0, 0];
  for (let child = 3; child < nodes.length; child += 1) {
    const parent = structure.parents[child];
    x[child] = parent === 1 ? 0 : 5;
    y[child] = 80 + branchRows[parent] * 80;
    branchRows[parent] += 1;
  }
  const projected = projectHierarchyAwareCollisions(nodes, structure, x, y);
  assert.ok(projected.descendantBranchTranslationCount > 0);
  const clearance = verifyLayoutClearance(nodes, projected.x, projected.y);
  assert.ok(clearance.minimumSeparation >= 4.99);
  assert.ok(clearance.maximum <= 0.01);
});
