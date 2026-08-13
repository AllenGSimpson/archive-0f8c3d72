import { open, unlink, writeFile } from "node:fs/promises";
import {
  calculateArticleHash,
  ensureStateDirectories,
  fileExists,
  freezePath,
  listLocks,
  lockPathForArticle,
  normalizeArticlePath,
  parseArguments,
  readOptionalJson,
  requireOption,
  validateIdentity,
  withStateMutex,
  writeJson
} from "./lib/wiki-writer-state.mjs";

const { positional, options } = parseArguments(process.argv.slice(2));
const [command, articleValue] = positional;

function usage() {
  console.error("Usage: node scripts/wiki-lock.mjs <acquire|renew|release|status|list> [wiki/article.html] [--writer code] [--session id]");
  process.exitCode = 1;
}

async function requireOwner() {
  return {
    writer: validateIdentity(requireOption(options, "writer"), "Writer"),
    session: validateIdentity(requireOption(options, "session"), "Session")
  };
}

await ensureStateDirectories();

if (command === "list") {
  console.log(JSON.stringify(await listLocks(), null, 2));
} else if (["acquire", "renew", "release", "status"].includes(command)) {
  const article = await normalizeArticlePath(articleValue);
  const lockPath = lockPathForArticle(article);

  if (command === "status") {
    console.log(JSON.stringify(await readOptionalJson(lockPath), null, 2));
  } else if (command === "acquire") {
    const owner = await requireOwner();
    await withStateMutex(async () => {
      if (await fileExists(freezePath)) throw new Error("Publication is frozen; no new article lock may be acquired.");
      const existing = await readOptionalJson(lockPath);
      if (existing) throw new Error(`Article is already locked by ${existing.writer} (${existing.session}).`);
      const now = new Date().toISOString();
      const record = {
        id: `lock-${lockPath.split(/[\\/]/).pop().replace(/\.json$/, "")}`,
        article: article.relative,
        slug: article.slug,
        writer: owner.writer,
        session: owner.session,
        acquired_at: now,
        heartbeat_at: now,
        starting_hash: await calculateArticleHash(article)
      };
      const handle = await open(lockPath, "wx");
      try {
        await writeJson(handle, record);
      } finally {
        await handle.close();
      }
      console.log(JSON.stringify(record, null, 2));
    });
  } else {
    const owner = await requireOwner();
    await withStateMutex(async () => {
      const record = await readOptionalJson(lockPath);
      if (!record) throw new Error("Article is not locked.");
      if (record.writer !== owner.writer || record.session !== owner.session) {
        throw new Error(`Lock belongs to ${record.writer} (${record.session}), not this session.`);
      }
      if (command === "renew") {
        record.heartbeat_at = new Date().toISOString();
        await writeFile(lockPath, `${JSON.stringify(record, null, 2)}\n`, "utf8");
        console.log(JSON.stringify(record, null, 2));
      } else {
        const endingHash = await calculateArticleHash(article);
        await unlink(lockPath);
        console.log(JSON.stringify({
          article: record.article,
          writer: record.writer,
          session: record.session,
          released_at: new Date().toISOString(),
          content_changed: endingHash !== record.starting_hash,
          starting_hash: record.starting_hash,
          ending_hash: endingHash
        }, null, 2));
      }
    });
  }
} else {
  usage();
}
