import { randomBytes } from "node:crypto";
import { open, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  ensureStateDirectories,
  handoffsRoot,
  normalizeArticlePath,
  parseArguments,
  requireOption,
  validateIdentity,
  withStateMutex,
  writeJson
} from "./lib/wiki-writer-state.mjs";

const { positional, options } = parseArguments(process.argv.slice(2));
const [command, target] = positional;

function handoffPath(id) {
  if (!/^ho-[a-z0-9-]+$/i.test(id || "")) throw new Error("Invalid handoff identifier.");
  return path.join(handoffsRoot, `${id}.json`);
}

async function listHandoffs() {
  await ensureStateDirectories();
  const names = (await readdir(handoffsRoot)).filter((name) => name.endsWith(".json")).sort();
  const rows = await Promise.all(names.map(async (name) => JSON.parse(await readFile(path.join(handoffsRoot, name), "utf8"))));
  const to = options.get("to");
  const from = options.get("from");
  const status = options.get("status") || "open";
  return rows.filter((row) => (!to || row.to === to) && (!from || row.from === from) && (!status || row.status === status));
}

if (command === "create") {
  const article = await normalizeArticlePath(target);
  const from = validateIdentity(requireOption(options, "from"), "Source writer");
  const to = validateIdentity(requireOption(options, "to"), "Target writer");
  const reason = requireOption(options, "reason");
  const blocks = options.get("block");
  const blockIds = blocks ? (Array.isArray(blocks) ? blocks : [blocks]) : [];
  const stamp = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const id = `ho-${stamp}-${from}-${to}-${randomBytes(3).toString("hex")}`;
  const record = {
    id,
    article: article.relative,
    slug: article.slug,
    from,
    to,
    reason,
    block_ids: blockIds,
    status: "open",
    created_at: new Date().toISOString()
  };
  await withStateMutex(async () => {
    const handle = await open(handoffPath(id), "wx");
    try {
      await writeJson(handle, record);
    } finally {
      await handle.close();
    }
  });
  console.log(JSON.stringify(record, null, 2));
} else if (command === "list") {
  console.log(JSON.stringify(await listHandoffs(), null, 2));
} else if (command === "show") {
  console.log(await readFile(handoffPath(target), "utf8"));
} else if (command === "resolve") {
  const writer = validateIdentity(requireOption(options, "writer"), "Writer");
  const resolution = requireOption(options, "resolution");
  if (!new Set(["accepted", "completed", "declined", "cancelled"]).has(resolution)) {
    throw new Error("Resolution must be accepted, completed, declined, or cancelled.");
  }
  await withStateMutex(async () => {
    const filePath = handoffPath(target);
    const record = JSON.parse(await readFile(filePath, "utf8"));
    if (![record.from, record.to].includes(writer)) throw new Error("Only the source or target writer may resolve this handoff.");
    record.status = resolution;
    record.resolved_by = writer;
    record.resolved_at = new Date().toISOString();
    await writeFile(filePath, `${JSON.stringify(record, null, 2)}\n`, "utf8");
    console.log(JSON.stringify(record, null, 2));
  });
} else {
  console.error("Usage: node scripts/wiki-handoff.mjs <create|list|show|resolve> ...");
  process.exitCode = 1;
}
