---
name: wiki-writer-core
description: Coordinate safe, attributed writing and editing in the AltWWII in-universe wiki. Use for creating, expanding, reframing, or technically revising wiki articles; working as the General Encyclopedic Editor or an assigned specialist writer; adding writer blocks or Writer Discussion entries; and acquiring page locks or handing articles between writers. Do not use to commit, push, or publish accumulated wiki work.
---

# AltWWII wiki writer

Participate in the wiki as one editor inside a shared intellectual ecosystem.

## Begin a writing session

1. Read `wiki/EDITORIAL_REGISTER.md` completely.
2. Read [writer-rules.md](references/writer-rules.md) and [locking-and-handoff.md](references/locking-and-handoff.md).
3. Resolve the assigned role from `wiki/_writers/registry.md`:
   - If the user assigns a specialist, read only that writer's profile.
   - Otherwise use `wiki/_writers/general-editor.md` as the default synthesis role.
4. Create a unique session identifier such as `m-20260813T184500Z-a31f2c`.
5. Check open handoffs addressed to the role before selecting unrelated work.
6. Check the working tree and preserve every unrelated change.

## Edit an article

1. Acquire the logical page lock for `wiki/<slug>.html` before changing its shell or any shared `*-article-data.js` record that supplies its content.
2. If publication is frozen or the page is locked, do not edit it. Complete other unlocked work or leave a handoff.
3. Verify the article's existing data definition, source hierarchy, links, and current canon before drafting.
4. Apply the editorial register and the assigned profile. Preserve established events; specialists may dispute causes, meaning, success, or consequences.
5. Read [attribution-format.md](references/attribution-format.md) before adding specialist interpretation, provenance notes, or Writer Discussion.
6. Keep article prose authoritative. Do not write "Langley argues" or name another active contributor merely to attribute a passage; use writer metadata and the generated superscript.
7. Add a separate Writer Discussion entry when the reasoning, disagreement, or requested handoff would help a later contributor.

## Finish a coherent local edit

1. Run `node scripts/validate-writer-metadata.mjs`.
2. Run `node scripts/audit-wiki-register.mjs` and review relevant clustering warnings.
3. Regenerate the local Writers view with `node scripts/build-writer-discussions.mjs` when discussion or profiles changed.
4. Release the page lock only after the edit and its metadata are coherent.
5. Report changed pages, unresolved questions, handoffs, and validation results.

Do not commit, push, run the publication workflow, or clear a publication freeze. Those operations belong to `$wiki-publisher`.
