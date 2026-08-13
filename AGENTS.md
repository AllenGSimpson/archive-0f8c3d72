# Repository instructions

## Scope

- This repository contains the AltWWII source corpus and the public static wiki in `wiki/`.
- Treat `wiki/` and the top-level source files it links to as one publishable unit.
- Before drafting or revising wiki prose, read and follow `wiki/EDITORIAL_REGISTER.md`. It is the controlling register for article voice, structure, headings, factual density, interpretation, and article-type differences.
- For all wiki prose work, use the `wiki-writer-core` skill and read the assigned profile in `wiki/_writers/`. If no specialist is assigned, use the General Encyclopedic Editor.
- Do not commit generated or temporary material from `.tmp/`, `tmp/`, `output/`, `outputs/`, `_site/`, `software-specs/`, `.vscode/`, or any `node_modules/` directory.

## Wiki editing roles

Normal wiki-writing agents must not commit or push wiki work.

Writers must:

1. Acquire the logical article lock before changing an article shell, its record in a shared `*-article-data.js` file, or its Writer Discussion.
2. Obey `.altwwii-writer-state/PUBLISH_FREEZE`. A writer holding a lock may finish and release it but may not acquire another lock during a freeze.
3. Preserve established canon and other writers' compatible attributed interpretations.
4. Run `node scripts/validate-writer-metadata.mjs` and review `node scripts/audit-wiki-register.mjs` after a coherent local edit.
5. Release the article lock and report the local work, validation, unresolved questions, and handoffs.

Completed writer work remains local until the designated Wiki Publisher runs. Do not publish merely because an article edit is complete.

## Wiki publishing workflow

Only the designated Wiki Publisher may publish accumulated wiki work. The publisher must use the `wiki-publisher` skill and:

1. Enter publication freeze and allow active writer locks to drain.
2. Confirm no locks remain.
3. Run `node scripts/validate-writer-metadata.mjs`.
4. Run `node scripts/audit-wiki-register.mjs` and review its non-blocking clustering warnings. Revise genuine rhetorical mannerism; do not mechanically eliminate every reported construction.
5. Run `node scripts/prepare-pages.mjs` and confirm it completes successfully.
6. Stage only the coherent wiki files, linked top-level source files, writer infrastructure, and publishing infrastructure that belong to the batch. Do not stage unrelated work.
7. Commit with a short message describing the completed batch and push the configured upstream. For normal wiki work this is `main` to `origin`.
8. If the push is rejected because the remote advanced, fetch and integrate without discarding local work, rerun all three validation commands, and push again.
9. Clear publication freeze after a successful push or after abandoning publication without losing local work.

Do not publish a partial, broken, locked, or internally inconsistent page.

## Public-preview constraints

- Every deployed HTML page must carry a `noindex, nofollow, noarchive, nosnippet, noimageindex` robots directive. The Pages preparation script injects it into the deployment copy; do not remove that behavior.
- Keep the generated `robots.txt` rule that disallows all crawlers.
- Do not add analytics, tracking, a sitemap, public-directory listings, or links intended to advertise or index the preview.
- GitHub Pages is public-by-URL. Never place credentials, private contact information, or other secrets in the repository or published site.
- Writer profiles and Writer Discussion are an editorial layer. Keep `wiki/_writers/`, `wiki/_writer-discussion/`, and the generated `wiki/writer-discussion-data.json` out of the public Pages artifact unless the repository owner explicitly changes that policy.
