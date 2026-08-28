import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { promisify } from "node:util";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { verifyLayoutClearance } from "./wiki-graph-layout.mjs";

const execute = promisify(execFile);
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const firstPath = path.join(projectRoot, ".tmp", "wiki-graph-semantic-test-a.js");
const secondPath = path.join(projectRoot, ".tmp", "wiki-graph-semantic-test-b.js");
const physicsFirstPath = path.join(projectRoot, ".tmp", "wiki-graph-physics-test-a.js");
const physicsSecondPath = path.join(projectRoot, ".tmp", "wiki-graph-physics-test-b.js");

async function loadGraph(file) {
  const sandbox = { window: {} };
  vm.runInNewContext(await readFile(file, "utf8"), sandbox, { filename: file });
  return sandbox.window.WIKI_GRAPH_DATA;
}

function withoutTimestamp(graph) {
  const copy = structuredClone(graph);
  delete copy.generated;
  return copy;
}

test("full corpus v2 builds are deterministic, territorial, complete, and collision-free", { timeout: 360_000 }, async () => {
  await execute(process.execPath, ["scripts/build-wiki-graph.mjs", "--output", ".tmp/wiki-graph-semantic-test-a.js"], { cwd: projectRoot });
  await execute(process.execPath, ["scripts/build-wiki-graph.mjs", "--output", ".tmp/wiki-graph-semantic-test-b.js"], { cwd: projectRoot });
  const first = await loadGraph(firstPath);
  const second = await loadGraph(secondPath);
  assert.deepEqual(withoutTimestamp(first), withoutTimestamp(second));

  assert.equal(first.layoutModel, "semantic-forest-v2");
  assert.equal(first.edges.length, first.connectionCount);
  assert.equal(first.parents.length, first.pageCount);
  assert.equal(first.depths.length, first.pageCount);
  assert.equal(first.labelTiers.length, first.pageCount);
  assert.equal(first.structuralEdges.length, first.structuralEdgeCount);
  assert.equal(first.layoutEdgeCount, first.structuralEdgeCount);
  assert.ok(first.structuralEdgeCount >= first.pageCount - first.rootCount);
  assert.ok(first.structuralEdgeCount <= first.pageCount * 2.25);
  assert.ok(first.structuralEdgeCount < first.connectionCount);
  assert.equal(first.parentSpringCount, first.parentCount);
  assert.equal(first.branchRepulsionIterations, first.relaxationIterations);
  assert.ok(first.rootBridgeForceCount <= first.bridgeEdgeCount);
  assert.ok(first.siblingEnvelopeOverlapRate <= 0.157674);
  assert.ok(first.hubExclusionViolationRate <= 0.01);
  assert.ok(first.majorBranchCount > 0);
  assert.ok(first.descendantBranchCollisionTranslations > 0);
  assert.ok(first.mapDiagonal <= 6200);

  const referencePairs = new Set(first.edges.map(([source, target]) => `${Math.min(source, target)}:${Math.max(source, target)}`));
  const overriddenChildren = new Set();
  const overrides = JSON.parse(await readFile(path.join(scriptDirectory, "wiki-graph-overrides.json"), "utf8"));
  const indexByHref = new Map(first.nodes.map((entry, index) => [entry[1], index]));
  for (const childHref of Object.keys(overrides.parents)) overriddenChildren.add(indexByHref.get(childHref));
  let roots = 0;
  for (let child = 0; child < first.parents.length; child += 1) {
    const parent = first.parents[child];
    if (parent < 0) {
      roots += 1;
      assert.equal(first.depths[child], 0);
      continue;
    }
    if (!overriddenChildren.has(child)) {
      assert.ok(referencePairs.has(`${Math.min(child, parent)}:${Math.max(child, parent)}`), `${first.nodes[child][1]} lacks a real parent link`);
    }
    const seen = new Set();
    let current = child;
    while (first.parents[current] >= 0) {
      assert.ok(!seen.has(current), `cycle at ${first.nodes[current][1]}`);
      seen.add(current);
      current = first.parents[current];
    }
  }
  assert.equal(roots, first.rootCount);

  const nodes = first.nodes.map((entry) => ({ title: entry[0], href: entry[1], words: entry[2], radius: entry[3] }));
  const x = first.nodes.map((entry) => entry[4]);
  const y = first.nodes.map((entry) => entry[5]);
  assert.ok(x.every(Number.isFinite) && y.every(Number.isFinite));
  const clearance = verifyLayoutClearance(nodes, x, y);
  assert.ok(clearance.minimumSeparation >= 4.99);
  assert.ok(clearance.maximum <= 0.01);
  const diagonal = Math.hypot(Math.max(...x) - Math.min(...x), Math.max(...y) - Math.min(...y));
  assert.ok(diagonal <= 6200);
});

test("full corpus directed physics builds are deterministic, complete, and collision-free", { timeout: 900_000 }, async () => {
  await execute(process.execPath, ["scripts/build-wiki-graph.mjs", "--layout", "physics", "--output", ".tmp/wiki-graph-physics-test-a.js"], { cwd: projectRoot });
  await execute(process.execPath, ["scripts/build-wiki-graph.mjs", "--layout", "physics", "--output", ".tmp/wiki-graph-physics-test-b.js"], { cwd: projectRoot });
  const first = await loadGraph(physicsFirstPath);
  const second = await loadGraph(physicsSecondPath);
  assert.deepEqual(withoutTimestamp(first), withoutTimestamp(second));
  assert.equal(first.layoutModel, "directed-physics-v1");
  assert.equal(first.anchorCount, 5);
  assert.equal(first.anchors.filter(Boolean).length, 5);
  assert.deepEqual(new Set(first.anchorColors.filter(Boolean)), new Set(["#1485ED", "#437F3F", "#666057", "#AA0A0A", "#FFC9B2"]));
  assert.equal(first.edges.length, first.connectionCount);
  assert.equal(first.layoutEdgeCount, first.connectionCount);
  assert.equal(first.originless.length, first.pageCount);
  assert.ok(first.originlessCount > 0);
  assert.ok(first.physicsIterations <= 1200);
  assert.equal(first.physicsAttractionEdgeCount > 0, true);
  assert.ok(first.physicsMaximumOverlap <= 0.01);
  assert.ok(first.physicsMinimumSeparation >= 4.99);
  const nodes = first.nodes.map((entry) => ({ title: entry[0], href: entry[1], words: entry[2], radius: entry[3] }));
  const x = first.nodes.map((entry) => entry[4]);
  const y = first.nodes.map((entry) => entry[5]);
  assert.ok(x.every(Number.isFinite) && y.every(Number.isFinite));
  const clearance = verifyLayoutClearance(nodes, x, y);
  assert.ok(clearance.minimumSeparation >= 4.99);
  assert.ok(clearance.maximum <= 0.01);
});
