import { open, unlink } from "node:fs/promises";
import {
  ensureStateDirectories,
  freezePath,
  listLocks,
  parseArguments,
  readOptionalJson,
  requireOption,
  validateIdentity,
  withStateMutex,
  writeJson
} from "./lib/wiki-writer-state.mjs";

const { positional, options } = parseArguments(process.argv.slice(2));
const [command] = positional;

await ensureStateDirectories();

if (command === "freeze") {
  const publisher = validateIdentity(requireOption(options, "publisher"), "Publisher session");
  await withStateMutex(async () => {
    const existing = await readOptionalJson(freezePath);
    if (existing) throw new Error(`Publication is already frozen by ${existing.publisher}.`);
    const record = { publisher, created_at: new Date().toISOString() };
    const handle = await open(freezePath, "wx");
    try {
      await writeJson(handle, record);
    } finally {
      await handle.close();
    }
    console.log(JSON.stringify({ freeze: record, active_locks: await listLocks() }, null, 2));
  });
} else if (command === "status") {
  console.log(JSON.stringify({ freeze: await readOptionalJson(freezePath), active_locks: await listLocks() }, null, 2));
} else if (command === "assert-drained") {
  const freeze = await readOptionalJson(freezePath);
  if (!freeze) throw new Error("Publication is not frozen.");
  const locks = await listLocks();
  if (locks.length) throw new Error(`Publication freeze is waiting on ${locks.length} active lock(s).`);
  console.log(JSON.stringify({ freeze, active_locks: [] }, null, 2));
} else if (command === "thaw") {
  const publisher = validateIdentity(requireOption(options, "publisher"), "Publisher session");
  await withStateMutex(async () => {
    const freeze = await readOptionalJson(freezePath);
    if (!freeze) throw new Error("Publication is not frozen.");
    if (freeze.publisher !== publisher) throw new Error(`Freeze belongs to ${freeze.publisher}, not this publisher session.`);
    await unlink(freezePath);
    console.log(JSON.stringify({ publisher, cleared_at: new Date().toISOString() }, null, 2));
  });
} else {
  console.error("Usage: node scripts/wiki-publish-state.mjs <freeze|status|assert-drained|thaw> [--publisher session]");
  process.exitCode = 1;
}
