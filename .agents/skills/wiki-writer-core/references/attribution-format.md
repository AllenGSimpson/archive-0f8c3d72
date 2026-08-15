# Attribution and discussion format

## Writer blocks

Bound every specialist-owned addition with one start marker and one end marker. In this repository, article prose usually lives inside an HTML string in a shared `*-article-data.js` file, so use a one-line marker that is safe inside the string:

```html
<!-- altwwii-writer-block:start id=wb-m-20260813-a31f2 writer=m kind=interpretation created=2026-08-13T18:45:00-06:00 --><p>The termination of American support made the British position strategically unrecoverable before the final political collapse.</p><!-- altwwii-writer-block:end -->
```

The runtime converts the boundary into a `data-writer` wrapper and appends the visible superscript. Do not add a second writer superscript manually.

Requirements:

- `id`: globally unique `wb-<writer>-<YYYYMMDD>-<five lowercase letters or digits>`.
- `writer`: an active permanent code from `wiki/_writers/registry.md`; never the reserved provenance codes `a`, `p`, or `e`.
- `kind`: `interpretation`, `analysis`, `context`, `extrapolation`, `technical`, `counterfactual`, or `revision`.
- `created`: an ISO 8601 timestamp with timezone.
- Start and end markers must share one HTML parent after rendering and may not nest.
- A block should contain one coherent contribution. Do not wrap an entire article to avoid making ownership decisions.

Writer identity marks interpretation or an attributable addition. It does not replace factual provenance.

### Connective extrapolation blocks

Every `[v]` contribution uses `writer=v` and `kind=extrapolation`:

```html
<!-- altwwii-writer-block:start id=wb-v-20260815-a31f2 writer=v kind=extrapolation created=2026-08-15T12:00:00-06:00 --><p>The surviving program therefore required a permanent interministerial maintenance office between prototype approval and routine service.</p><!-- altwwii-writer-block:end -->
```

The visible `[v]` mark identifies a lower-authority connective inference. Do not use `data-provenance='v'`, and do not add `[e]` merely to promote the same inference. When A → B → C is not obvious, record A, B, C, and the compatibility reasoning in Writer Discussion.

## Fact provenance

Use fact-level provenance only where the distinction helps later editors:

```html
Congress terminated American material support to Britain in early 1947.<sup class='canon-note' data-provenance='a'>[a]</sup>
```

Use `data-provenance='p'` for real-world historical information about events and conditions before 1 August 1941:

```html
The German invasion of Poland began on 1 September 1939.<sup class='canon-note' data-provenance='p'>[p]</sup>
```

Use `data-provenance='e'` for incorporated extrapolation. Apply `[p]` only to the pre-divergence fact or clause it supports; a person, institution, or process with pre-divergence origins does not make its post-cutoff history pre-divergence canon. A specialist block may contain any provenance mark when relevant.

## Authoritative article voice

Write the contribution directly. In ordinary article prose, do not use an active contributor's name solely as an attribution formula. The superscript carries that function.

Explicit names remain appropriate when the contributor is historically relevant to the article or when describing a published in-universe work rather than the live editing process.

## Writer Discussion

Store one contribution per file:

`wiki/_writer-discussion/<article-slug>/<YYYYMMDD-HHMMSS>-<writer>-<suffix>.md`

Use this frontmatter:

```markdown
---
id: wd-m-20260813-a31f2
article: second-battle-of-britain
writer: m
block: wb-m-20260813-a31f2
reply_to:
created: 2026-08-13T18:45:00-06:00
---

I think the present article understates the shipping-replacement problem.
```

`block` and `reply_to` may be blank. Discussion may use first person and name other contributors. Do not place secrets, credentials, private contact information, or material that cannot safely exist in the repository.

Run `node scripts/build-writer-discussions.mjs` to generate the ignored local-preview data file. Writer profiles and discussions are excluded from the public Pages artifact by default.
