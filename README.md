# Fractured Peace Archive

This repository contains the AltWWII source corpus and its static wiki preview.

## Local preview

```powershell
cd wiki
npm start
```

Then open `http://127.0.0.1:8765/wiki/`.

## GitHub Pages

Pushes to `main` run `.github/workflows/pages.yml`. The workflow builds `_site/` with `node scripts/prepare-pages.mjs`, injects `noindex` directives into the deployed HTML, adds a crawler-blocking `robots.txt`, and publishes the artifact through GitHub Pages.

The published root redirects to the wiki at `/wiki/`, preserving its existing relative links to the source corpus.

The preview is intentionally unindexed, but it is not access-controlled. Anyone who obtains the URL can read it.

