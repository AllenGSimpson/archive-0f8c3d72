# Repository instructions

## Scope

- This repository contains the AltWWII source corpus and the public static wiki in `wiki/`.
- Treat `wiki/` and the top-level source files it links to as one publishable unit.
- Do not commit generated or temporary material from `.tmp/`, `tmp/`, `output/`, `outputs/`, `_site/`, `software-specs/`, `.vscode/`, or any `node_modules/` directory.

## Wiki publishing workflow

After every coherent wiki change, and before beginning another substantial batch:

1. Run `node scripts/prepare-pages.mjs` and confirm it completes successfully.
2. Stage only the wiki files, linked top-level source files, and publishing infrastructure that belong to that change. Do not stage unrelated work.
3. Commit with a short message describing the completed wiki change.
4. Push the current branch to its configured upstream immediately. For normal wiki work this is `main` to `origin`.
5. If the push is rejected because the remote advanced, fetch and integrate the remote changes without discarding local work, rerun the Pages preparation check, and push again.

Do not leave completed wiki work only in the working tree. If work must stop before a coherent change is complete, report that it is uncommitted and do not push a partial or broken page.

## Public-preview constraints

- Every deployed HTML page must carry a `noindex, nofollow, noarchive, nosnippet, noimageindex` robots directive. The Pages preparation script injects it into the deployment copy; do not remove that behavior.
- Keep the generated `robots.txt` rule that disallows all crawlers.
- Do not add analytics, tracking, a sitemap, public-directory listings, or links intended to advertise or index the preview.
- GitHub Pages is public-by-URL. Never place credentials, private contact information, or other secrets in the repository or published site.

