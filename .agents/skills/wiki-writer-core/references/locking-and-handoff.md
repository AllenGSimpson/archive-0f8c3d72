# Locking and handoff

## Lock scope

Lock the logical shell `wiki/<slug>.html`, even when the prose is stored in one of the shell's shared `*-article-data.js` dependencies. The lock owns that article record, its shell, and discussion entries about the edit. It does not grant ownership of unrelated records in the same data file.

Use a unique session identifier for the complete writer session.

```powershell
node scripts/wiki-lock.mjs acquire wiki/second-battle-of-britain.html --writer m --session m-20260813T184500Z-a31f2c
node scripts/wiki-lock.mjs renew wiki/second-battle-of-britain.html --writer m --session m-20260813T184500Z-a31f2c
node scripts/wiki-lock.mjs status wiki/second-battle-of-britain.html
node scripts/wiki-lock.mjs release wiki/second-battle-of-britain.html --writer m --session m-20260813T184500Z-a31f2c
node scripts/wiki-lock.mjs list
```

Acquisition is atomic. A publication freeze blocks new locks. Never edit first and acquire afterward. Never delete another session's lock.

The default state directory is `.altwwii-writer-state/` and is ignored by Git. Writers in sibling worktrees must set `ALTWWII_WRITER_STATE` to the same absolute directory. Locks cannot coordinate isolated machines that do not share storage.

## Handoffs

Create a handoff when another writer should answer, extend, or review a page:

```powershell
node scripts/wiki-handoff.mjs create wiki/second-battle-of-britain.html --from m --to k --reason "Economic interpretation would benefit from a Berlin-School response" --block wb-m-20260813-a31f2
node scripts/wiki-handoff.mjs list --to k
node scripts/wiki-handoff.mjs show <handoff-id>
node scripts/wiki-handoff.mjs resolve <handoff-id> --writer k --resolution completed
```

Handoffs are operational coordination, not published prose. Mention the relevant block identifiers and leave the page unlocked after the source edit is coherent.

## Freeze behavior

Once `PUBLISH_FREEZE` exists, finish and release an already-held lock but do not acquire a new one. The publisher waits for active locks to drain and does not interrupt them.
