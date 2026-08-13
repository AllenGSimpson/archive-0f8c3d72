# Publication protocol

## Drain and freeze

Use a unique publisher session throughout:

```powershell
node scripts/wiki-publish-state.mjs freeze --publisher publisher-20260813T180000Z-a31f2c
node scripts/wiki-publish-state.mjs status
node scripts/wiki-publish-state.mjs assert-drained
```

The freeze prevents new atomic lock acquisition. Existing writers may finish and release their locks. Do not remove active lock files or clear the freeze to accelerate the batch.

## Validate the stable snapshot

Run:

```powershell
node scripts/validate-writer-metadata.mjs
node scripts/audit-wiki-register.mjs
node scripts/prepare-pages.mjs
```

Review warnings rather than mechanically rewriting every flagged construction. Confirm the Pages artifact retains the restrictive robots directives and excludes `_writers/`, `_writer-discussion/`, and `writer-discussion-data.json`.

The generated local Writer Discussion data is not part of the public artifact. Rebuild it separately with `node scripts/build-writer-discussions.mjs` when the local editorial preview needs refreshing.

## Stage and publish

Inspect `git status` and `git diff` before staging. Stage only the coherent batch. Never stage `.altwwii-writer-state/`, `_site/`, temporary output, dependency directories, or unrelated user work.

Commit and push the current configured upstream. If the remote advanced, fetch and integrate without discarding local work, repeat all validation, and push again.

After successful publication, or after abandoning publication while retaining all local work, clear the freeze with the exact publisher identity:

```powershell
node scripts/wiki-publish-state.mjs thaw --publisher publisher-20260813T180000Z-a31f2c
```

Report any freeze intentionally left active.
