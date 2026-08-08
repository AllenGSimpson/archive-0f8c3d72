# Fractured Peace Archive editorial register

## Controlling principle

> Wiki prose is factual by default and interpretive by exception. A paragraph does not need a thesis. A section does not need a concluding synthesis. Permit information to accumulate before explaining what it means.

This is the controlling register for new and revised wiki articles. It governs the archive voice independently of the transcript, setting-bible, fiction, and research-reference registers. Those sources control facts and canon; this document controls how the wiki presents them.

## Default voice

- Record information directly. A paragraph may state several administrative, biographical, technical, or chronological facts and stop.
- Do not add a takeaway merely to make a paragraph feel finished.
- Do not require each section to end with a judgment, contrast, implication, or miniature synthesis.
- Prefer specific nouns, offices, dates, jurisdictions, model names, quantities, and actions over abstract summaries.
- Let facts accumulate across paragraphs and sections. Explain their wider significance only when the article's scope calls for it.
- Do not make every detail serve the setting's grand conception. Mature encyclopedias contain material whose value is specificity, reference, or texture.

## Interpretation and contradiction

- Record contradictions without automatically resolving them. If a German-speaking African technical class sits awkwardly with racial ideology, describe the class, its training, its offices, its privileges, and its limits. The implications may emerge elsewhere in the article or across several articles.
- Do not force an apparent contradiction into a formula of paradox, hidden logic, and final judgment.
- Overt synthesis belongs primarily in overview and portal articles, including `world.html`, regional portals, comparative-system pages, and historiographical surveys.
- Narrow institutional pages normally need less interpretation. A customs bureau, procurement office, provincial council, or aircraft model can be important without becoming a metaphor for the whole order.
- When interpretation is useful, attribute it where possible: “British postwar writers later called …”, “German planners understood …”, “American intelligence generally interpreted …”, “Later Japanese historians divided the period into …”.
- Distinguish contemporary self-description, foreign assessment, later historiography, and the archive's own limited synthesis.
- An attributed interpretation is still interpretation. Present the evidence or institutional context that made the view plausible.

## Rhetorical restraint

The following constructions are available but scarce:

- “not X but Y” and “not merely X but Y”;
- “X without Y” as a compact paradox;
- “although X, Y” used to balance two clauses;
- the highly balanced semicolon used to deliver a polished opposition or verdict.

Do not ban these constructions. Flag and revise clustering, especially when two or more appear in one paragraph or recur across adjacent paragraphs. Repetition turns an archive voice into a recognizable narrator's mannerism.

Also watch repeated use of “central contradiction,” “the result is,” “therefore,” “reveals,” “ultimately,” and similar synthesis markers. They are legitimate where the article is actually interpreting evidence. They should not be the default engine of paragraph structure.

Run `node scripts/audit-wiki-register.mjs` before committing wiki prose. The audit reports clusters and exits successfully; it is a prompt for editorial judgment, not a style gate.

## Section titles

Use functional, boring headings by default:

- Government
- Administration
- Postwar reconstruction
- 1950–1962
- Foreign relations
- Organization
- Production
- Service history
- Design
- Early life
- Political career
- Casualties
- Aftermath

Reserve memorable headings such as “The White Parachutes,” “Showroom Reich,” and “Counting Wars” for genuine in-universe names, established slogans, operation names, period terms, or historiographical labels. Do not invent a literary heading merely to enliven routine material.

## Article types

Article types should not share one dramatic movement or fixed section sequence.

### Overview and portal

Overview and portal articles may compare systems, identify long patterns, and answer “what does this mean?” They should still ground synthesis in linked articles and specific evidence.

Useful material includes chronology, comparative tables, major institutions, cross-regional trends, disputed interpretations, and routes into narrower articles.

### Country or territory

Emphasize government, territorial divisions, population, law, economy, armed forces, foreign relations, chronological change, and local terminology. Contradictions can remain distributed among these sections rather than receiving a compulsory “central contradiction” section.

### Institution or agency

Emphasize legal basis, jurisdiction, superior ministry, subordinate offices, headquarters, office-holders, staffing, procedures, budget or material resources, reorganizations, and relations with peer agencies. Interpretation should normally be brief and attributed.

### Biography

Organize around life stages, posts, relationships, decisions, reputation, and documented chronology. Do not make every life culminate in a symbolic verdict about the setting. Include ordinary appointments, education, publications, family facts, and changes in responsibility when known.

### Armed conflict or operation

Use more dates and operational detail than a political-system overview. Include belligerents, commands, formations, objectives, phases, movements, logistics, equipment, losses, local geography, orders, ceasefires, and aftermath. Tables and day-by-day or month-by-month chronology are welcome.

### Equipment, vehicle, weapon, or technical system

Emphasize designation, manufacturer, development dates, variants, dimensions, mass, performance, propulsion, armament or function, production totals, users, deployment, maintenance, and replacement. Separate verified specification from estimate. Avoid turning a model history into an essay on national character.

### Ideology, party, or political system

Emphasize doctrine, institutions, factions, membership, texts, offices, constituencies, policy, and chronological development. Interpretation is more relevant here, but rival and internal readings should be attributed rather than flattened into one omniscient explanation.

### Cultural, social, or economic subject

Emphasize practice, institutions, participants, regional variation, production and distribution, regulation, prices or quantities where available, and change over time. Do not require every social fact to illustrate a bloc-wide essence.

## Factual texture

Permit articles to be “ugly with facts.” Use material such as:

- office-holders and terms of service;
- dates of creation, merger, transfer, renaming, and abolition;
- model numbers, variants, production blocks, and procurement lots;
- ministries, directorates, boards, commissions, field offices, and obscure subordinate agencies;
- changes of jurisdiction and overlapping authority;
- local, legal, translated, abbreviated, and colloquial names;
- tables of organization, specifications, election results, casualties, budgets, trade, or production;
- disputed totals and clearly labeled estimates;
- small administrative distinctions that do not advance a larger argument.

Tables, lists, timelines, and infobox facts are not inferior to interpretive prose. Use the form that makes the information easiest to retrieve.

## Drafting and revision checklist

Before treating an article as complete, ask:

1. Does the article record enough concrete information to function as a reference?
2. Are paragraphs allowed to end after reporting facts?
3. Have contradictions been described without compulsory immediate reconciliation?
4. Is overt synthesis proportionate to the article type and scope?
5. Are interpretations attributed when an internal historian, planner, intelligence service, political faction, or later writer could plausibly own them?
6. Are section titles functional unless a memorable title is an actual in-universe or historiographical term?
7. Does the structure fit this kind of article rather than a universal template?
8. Are tables, dates, names, offices, models, and jurisdictional changes included where the sources support them?
9. Do scarce rhetorical constructions cluster?
10. Has any concluding paragraph been added only because the section seemed to need a takeaway? If so, remove or justify it.
