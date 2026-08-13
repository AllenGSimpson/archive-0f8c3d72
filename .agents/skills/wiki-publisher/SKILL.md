---
name: wiki-publisher
description: Publish accumulated AltWWII wiki work through the designated drain-and-freeze workflow. Use only when asked to publish, batch, commit, push, or run the periodic wiki publication cycle. Creates the publication freeze, waits for page locks to drain, validates writer metadata and editorial register compliance, prepares the Pages artifact, stages only the intended batch, commits, integrates remote movement safely, pushes, and then clears the freeze.
---

# AltWWII wiki publisher

Publish a stable batch without interrupting writers mid-edit.

Read [publish-protocol.md](references/publish-protocol.md) before taking publishing actions.

## Required sequence

1. Inspect the working tree and identify the intended publishable batch. Preserve unrelated and incomplete work.
2. Create a unique publisher session identifier.
3. Enter publication freeze with `node scripts/wiki-publish-state.mjs freeze --publisher <session>`.
4. Allow existing locks to finish. Do not delete or steal active locks.
5. Confirm drain with `node scripts/wiki-publish-state.mjs assert-drained`.
6. Run, in order:
   - `node scripts/validate-writer-metadata.mjs`
   - `node scripts/audit-wiki-register.mjs`
   - `node scripts/prepare-pages.mjs`
7. Review warnings and the complete diff. Do not publish broken, partial, temporary, generated, or unrelated work.
8. Stage only the intended wiki, linked source, writer-profile, skill, script, and publishing-infrastructure files.
9. Commit with a short batch description and push the configured upstream.
10. If the remote advanced, fetch and integrate without discarding local work, rerun all three checks, and push again.
11. Clear the freeze with `node scripts/wiki-publish-state.mjs thaw --publisher <session>` only after success or after deciding publication will not proceed.

Keep the freeze in place while resolving a validation or integration problem. Always report if publication stops with the freeze still active.
