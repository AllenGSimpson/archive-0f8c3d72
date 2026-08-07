window.deepArticles = window.deepArticles || {};

const germanSpecialistSources = [
  {href:"../SoftwareDetailReference.md",label:"Software and Programming Language Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German computing"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — civilian software"},
  {href:"../transcript.md",label:"Master Transcript — German language explosion and software houses"}
];

const specialistArticle = config => ({
  category:"Computing",
  eyebrow:"German specialist software · 1980–1985",
  infoboxKicker:"Civilian specialist language",
  ...config,
  sources:[...germanSpecialistSources,...(config.specSources || [])],
  categories:config.categories || ["Computing","Programming languages","Germany","Civilian software"]
});

Object.assign(window.deepArticles,{
  "schnur":specialistArticle({
    slug:"schnur",title:"Schnur 80",eyebrow:"German interactive control language · 1980",infoboxKicker:"Postfix instrument language",
    lead:"Schnur 80 is a small interactive German language for electronics clubs, repair benches, amateur-radio stations, laboratory instruments, and single-board controllers. Its independent community adopts Forth’s threaded dictionary and postfix working style while standardizing a portable 16-bit machine, recoverable compiler, German vocabulary, and explicit device capabilities.",
    canon:"The name, 1980 date, electronics niche, Forth influence, direct-threaded postfix dictionary, and durable specialist community are canon. Exact cell, image, fault, and capability rules are connective design pending executable conformance.",
    sections:[
      {id:"niche",title:"A language for the workbench",html:"<p>Schnur fits where <a href='kurzplan.html'>Kurzplan</a> is too large and visual, and Werkcode’s edit-compile-link cycle is too slow. A technician can inspect a value, define a word, exercise a pin, and replace the definition without rebuilding the entire controller.</p>"},
      {id:"machine",title:"The SM80 abstract machine",html:"<p>The portable model uses 16-bit data and return stacks, byte-addressed memory, a serial terminal, a resident kernel, and a writable dictionary. The original target is an 8- or 16-bit microcomputer with 8–32 KiB RAM and optional timer, converter, bus, or parallel boards.</p>"},
      {id:"dictionary",title:"Postfix words and threaded definitions",html:"<p>Programs consist of postfix words found in a searchable dictionary. Colon definitions compile direct-threaded execution-token lists. Redefining a name affects later compilation but does not silently rewrite already compiled threads.</p>"},
      {id:"control",title:"Control and stacks",html:"<p>Conditional, loop, and return-stack words compile bounded branch forms. Saved return-depth markers detect unbalanced transfers across a control boundary. Static stack reasoning remains advisory rather than a type system.</p>"},
      {id:"recovery",title:"Transactional interaction",html:"<p>A failing word enters a recovery phase that restores both stacks to their line-entry depths, rolls back an incomplete definition, discards the rest of the line, and accepts the next command. Completed dictionary work survives until reset or explicit image storage.</p>"},
      {id:"devices",title:"Explicit device capabilities",html:"<p>Targets publish named device descriptors. Opening a device returns an opaque generation-checked handle with declared register widths, units, volatility, and required capabilities. There is no portable raw input/output instruction.</p>"},
      {id:"limits",title:"Visible limits",html:"<p>Addresses are untyped, memory outside checked regions is unsafe, and there is no garbage collector, dynamic type, or preemptive task. Hard real-time claims require a target timing certificate; an ordinary Schnur program receives no strategic certification.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Schnur remains a small but durable culture of technicians and clubs. It succeeds through immediacy, tiny resource needs, and unusual hardware access rather than through business portability or state procurement.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"zivilsprachenrichtlinie.html",kicker:"Legal framework",label:"Zivilsprachenrichtlinie"},{href:"forth-programming-language.html",kicker:"Principal influence",label:"Forth"},{href:"kurzplan.html",kicker:"Larger home language",label:"Kurzplan"},{href:"werkcode.html",kicker:"Compiled systems alternative",label:"Werkcode 80"}],
    specSources:[{href:"../software-specs/languages/de/schnur-80/manifest.json",label:"Schnur 80 — specification manifest"},{href:"../software-specs/languages/de/schnur-80/history.md",label:"Schnur 80 — history and identity"}],
    facts:[["Revision","1980"],["Niche","Electronics clubs and instruments"],["Principal influence","Forth"],["Machine","16-bit dual-stack SM80"],["Compilation","Direct-threaded dictionary"],["Typical memory","8–32 KiB RAM"],["Devices","Explicit capability handles"],["Strategic certification","None"]]
  }),

  "bericht":specialistArticle({
    slug:"bericht",title:"Bericht 81",eyebrow:"German report language · 1981",infoboxKicker:"Small-business reporting language",
    lead:"Bericht 81 is the German civilian language for small-business reports. Derived from RP-V record, decimal, sorting, and spooling practice, it lets clerks and package vendors declare a schema, stable sort keys, nested groups, exact totals, and fixed printed forms without writing a general procedure.",
    canon:"The name, 1981 date, small-business purpose, RP-V ancestry, declarative report engine, broad embedding, and later influence are canon. Exact syntax, decimal, missing-value, pagination, spool, and atomicity rules are connective design.",
    sections:[
      {id:"purpose",title:"The declarative report",html:"<p>A Bericht program describes the shape and order of a report rather than an arbitrary computation. Office minis and larger microcomputers compile the text into a checked report plan executed against an authorized finite record snapshot.</p>"},
      {id:"records",title:"Snapshots and stable order",html:"<p>Each run obtains one versioned record snapshot. Sort keys evaluate once, missing values receive explicit kinds, and logical record identity resolves final ties. External merge sorting must produce the same order as an in-memory run.</p>"},
      {id:"groups",title:"Nested groups",html:"<p>Groups follow declared sort prefixes. The engine opens outer-to-inner headers, emits details, and closes inner-to-outer footers. Aggregates in a group section refer to the complete group even when its header appears before the details.</p>"},
      {id:"totals",title:"Exact business arithmetic",html:"<p>Counts distinguish all rows from present values. Sums use checked exact arithmetic; averages use the declared output scale; minimum and maximum respect source type order. An empty aggregate returns an explicit unknown value.</p>"},
      {id:"pages",title:"Deterministic pagination",html:"<p>The paginator measures complete section blocks before emitting them, reserves page-footer space, repeats designated group heads after a break, and faults if a block is taller than the usable page. Layout cannot vary with printer buffering.</p>"},
      {id:"spool",title:"Replayable spool output",html:"<p>Output is a structured replayable spool rather than direct printer motion. A run validates every row, total, page, and footer before atomically publishing the spool; failure deletes temporary runs and leaves earlier output intact.</p>"},
      {id:"market",title:"Package-vendor use",html:"<p><a href='programmhaeuser.html'>Programmhäuser</a> embed Bericht inside payroll, inventory, insurance, shipping, and local-accounting packages. Users can revise forms and groupings without acquiring a general systems-language toolchain.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Bericht is technically narrow and commercially widespread. It carries strategic RP-V habits—exact money, audit, stable ordering, and replayable output—into ordinary offices without granting access to the certified administrative environment.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"programmhaeuser.html",kicker:"Commercial distributors",label:"Programmhäuser"},{href:"office-automation.html",kicker:"Workplace setting",label:"Office Automation"},{href:"rechenplan.html",kicker:"RP-V ancestry",label:"Rechenplan"},{href:"lehrplan.html",kicker:"General business language",label:"Lehrplan 81"}],
    specSources:[{href:"../software-specs/languages/de/bericht-81/manifest.json",label:"Bericht 81 — specification manifest"},{href:"../software-specs/languages/de/bericht-81/history.md",label:"Bericht 81 — history and identity"}],
    facts:[["Revision","1981"],["Purpose","Small-business reports"],["Ancestry","RP-V report practice"],["Input","Versioned finite record snapshot"],["Ordering","Stable and deterministic"],["Arithmetic","Exact decimal totals"],["Output","Atomically published replayable spool"],["Typical hosts","Office minis and larger microcomputers"]]
  }),

  "spielsatz":specialistArticle({
    slug:"spielsatz",title:"Spielsatz 81",eyebrow:"German cassette-game language · 1981",infoboxKicker:"Home-computer game language",
    lead:"Spielsatz 81 is an independent German cassette-game language for 16–48 KiB home computers. It replaces a general editor and runtime with compact declarations, sprites, sounds, and event-driven state tables compiled to an 8-bit stack bytecode, producing games that are small, responsive, portable—and sometimes deliberately unsafe.",
    canon:"The name, 1981 date, cassette-game niche, state-table and stack-bytecode identity, popularity, unsafety, and heavy dialect forks are canon. Exact event, arithmetic, collision, bytecode, cassette, and portability rules are connective design.",
    sections:[
      {id:"market",title:"Cassette-game market",html:"<p>Spielsatz appears as German home computing moves beyond listings into traded cassette games. Its compact source, assets, and bytecode reduce memory and loading costs, making it attractive to clubs, magazines, small publishers, and one-person studios.</p>"},
      {id:"machine",title:"SPVM81 portable profile",html:"<p>The common profile defines a 256×192 logical raster, eight colors, thirty-two sprites, four controller ports, three tone voices plus noise, and a 50-Hz frame clock. Hosts map that contract to different German hardware.</p>"},
      {id:"states",title:"Event-driven state tables",html:"<p>A game begins in <code>START</code>. Each frame snapshots controllers, dispatches button edges, drains messages, detects sprite collisions, runs the current state’s tick handler, commits one state change, advances audio, and renders.</p>"},
      {id:"determinism",title:"Deterministic play",html:"<p>Resource validation, zero initialization, declared random seed, event order, collision order, sprite layering, sound advancement, and frame timing are fixed. Equivalent portable hosts therefore produce the same game state even when display scaling or audio dividers differ.</p>"},
      {id:"graphics",title:"Sprites, collisions, and sound",html:"<p>Sprites have image, coordinates, visibility, source-order depth, and pixel masks. Collision is calculated once per frame. Tone voices and deterministic noise share the state machine rather than depending on uncontrolled host timing.</p>"},
      {id:"unsafe",title:"The unsafe profile",html:"<p>The checked profile protects the portable memory image. The specified <code>UNSICHER</code> profile permits writes across the complete 64-KiB image—including code, tables, assets, and device registers—preserving a culture of self-modifying tricks and spectacular failures.</p>"},
      {id:"forks",title:"Forks and exchange",html:"<p>Machine vendors and game circles add colors, sprites, scrolling, sound, and unsafe opcodes. A title claiming portability names the SPVM81 profile; otherwise ‘Spielsatz’ may describe a family whose cassettes require adaptation.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Spielsatz is one of the most visible small languages in German youth culture despite having little institutional prestige. Bildschrift serves richer windowed and visual tools; Spielsatz remains the lean cassette machine.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"mauerwerk.html",kicker:"Game culture",label:"Mauerwerk"},{href:"kurzplan.html",kicker:"Home-language foundation",label:"Kurzplan"},{href:"bildschrift.html",kicker:"Visual successor",label:"Bildschrift 83"},{href:"programmhaeuser.html",kicker:"Publishers and studios",label:"Programmhäuser"}],
    specSources:[{href:"../software-specs/languages/de/spielsatz-81/manifest.json",label:"Spielsatz 81 — specification manifest"},{href:"../software-specs/languages/de/spielsatz-81/history.md",label:"Spielsatz 81 — history and identity"}],
    facts:[["Revision","1981"],["Purpose","Cassette games"],["Typical memory","16–48 KiB"],["Execution","8-bit stack bytecode"],["Frame rate","50 Hz"],["Portable display","256×192, eight colors"],["Portable sprites","32"],["Unsafe profile","Self-modifying 64-KiB image"]]
  }),

  "satzwerk":specialistArticle({
    slug:"satzwerk",title:"Satzwerk 81",eyebrow:"German publishing language · 1981",infoboxKicker:"Streaming text-transformation language",
    lead:"Satzwerk 81 is an independent German stream language for publishing houses, mail merge, typesetting macros, and document conversion. It compiles bounded character patterns into streaming stages whose actions copy, replace, capture, consult records, or emit structured typesetting controls.",
    canon:"The name, 1981 date, independent stream-language ancestry, pattern-and-action design, publishing niche, and durable community are canon. Exact repertoire, matching, stages, record iteration, typesetting events, numeric rules, and recovery are connective design.",
    sections:[
      {id:"niche",title:"Publishing on small office systems",html:"<p>Satzwerk transforms documents larger than available memory by processing them as bounded streams. Publishing houses use it for house style, catalogs, form letters, manuscript conversion, typesetting preparation, and repeatable text cleanup.</p>"},
      {id:"patterns",title:"Bounded regular patterns",html:"<p>Rules match at the current cursor. The greatest consumed length wins, with source order resolving ties. Patterns exclude backreferences, recursion, lookaround, and unbounded repetition so the compiler can prove a finite working-memory bound.</p>"},
      {id:"actions",title:"Transactional actions",html:"<p>A selected action writes into a private output buffer and variable journal. Copy, replace, discard, capture, record lookup, and typesetting controls commit together only if the whole action succeeds.</p>"},
      {id:"stages",title:"Streaming stages",html:"<p>Output from one stage becomes input only to the next. Bounded temporary streams impose backpressure without changing semantics. A stage keeps only its maximum match, lookahead, captures, variables, macro scratch, and an output block.</p>"},
      {id:"merge",title:"Records and mail merge",html:"<p>Record mode runs the complete template for each authorized row in a stable snapshot. Patterns respect record boundaries unless explicitly anchored across them, preventing one customer’s data from leaking into another’s output.</p>"},
      {id:"typesetting",title:"Canonical typesetting events",html:"<p>Satzwerk emits structured text and control events rather than printer escape bytes. Downstream formatters decide line breaking and device realization while preserving event order and thousandth-em measurements.</p>"},
      {id:"atomic",title:"Atomic publication",html:"<p>Final output is written to a temporary file, validated, flushed, and atomically renamed. A malformed source encoding or failed action deletes temporary stages and leaves the previous publication intact.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Satzwerk remains a specialist publishing language rather than a general programming environment. Its small-memory streaming discipline makes it durable in newspapers, commercial print, Church publishing, catalogs, and export documentation.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"programmhaeuser.html",kicker:"Commercial implementers",label:"Programmhäuser"},{href:"wortbruecke.html",kicker:"Localization partner",label:"Wortbrücke 82"},{href:"office-automation.html",kicker:"Office setting",label:"Office Automation"},{href:"unicode-80.html",kicker:"Later character identity",label:"UNICODE 80"}],
    specSources:[{href:"../software-specs/languages/de/satzwerk-81/manifest.json",label:"Satzwerk 81 — specification manifest"},{href:"../software-specs/languages/de/satzwerk-81/history.md",label:"Satzwerk 81 — history and identity"}],
    facts:[["Revision","1981"],["Purpose","Publishing and text macros"],["Execution","Bounded streaming stages"],["Matching","Longest anchored regular match"],["Actions","Transactional"],["Record use","Authorized snapshot mail merge"],["Output","Structured typesetting events"],["Typical memory","64–256 KiB office systems"]]
  }),

  "datenfrage":specialistArticle({
    slug:"datenfrage",title:"Datenfrage 82",eyebrow:"German office query language · 1982",infoboxKicker:"Interactive small-database language",
    lead:"Datenfrage 82 is a user-facing German query language for small office databases stored in sequential, indexed-sequential, hierarchical, or keyed record files. It borrows typed expressions and explicit missing values from Auswahlplan while replacing professional jobs and joins with sessions, bounded navigation, named views, and paged results.",
    canon:"The name, 1982 date, small-database niche, Auswahlplan influence, interactive declarative access, nonrelational storage, and common office use are canon. Exact grammar, navigation, snapshot, cost, result, and update-exclusion rules are connective design.",
    sections:[
      {id:"purpose",title:"Queries for the ordinary office",html:"<p>Datenfrage gives clerks and managers controlled access to local customer, inventory, appointment, account, and catalog files without requiring an Auswahlplan job header or a general Lehrplan program.</p>"},
      {id:"storage",title:"Nonrelational record storage",html:"<p>A session opens one authorized root source in a sequential, indexed, hierarchical, or keyed organization. The language does not pretend these stores form one relational database, and revision 1 omits general joins.</p>"},
      {id:"navigation",title:"Bounded parent and child navigation",html:"<p>Queries may traverse declared child or parent relationships while preserving stable ordinals and identities. A path cannot revisit a relationship or exceed depth eight, preventing accidental unbounded graph walks.</p>"},
      {id:"query",title:"Filter, project, group, and order",html:"<p>Two-valued predicates filter rows; explicit operators handle unknown, not-applicable, and absent values. Projection, grouping, aggregates, distinct selection, ordering, and row limits follow canonical deterministic rules.</p>"},
      {id:"snapshot",title:"One immutable session snapshot",html:"<p>Opening a session verifies role, schema, layout, catalog, and collation and acquires one snapshot token. Each query either publishes a complete typed result or leaves the previous result and session intact.</p>"},
      {id:"bounded",title:"Visible work limits",html:"<p>Record reads, relationship traversals, index probes, expressions, comparisons, aggregates, sorting, and output consume declared work units. Exceeding the limit cancels the query before the next unit and publishes nothing.</p>"},
      {id:"readonly",title:"Read-only authority",html:"<p>Datenfrage cannot update its sources. Authorization predicates conceptually run before navigation, counts, or errors, so implementation choices cannot reveal forbidden records through totals, timing contracts, or diagnostic identities.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Datenfrage becomes an ordinary office tool on disk systems with roughly 128–512 KiB memory. It is less powerful than SQL or Auswahlplan but easier to teach and better matched to existing German record files.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"auswahlplan.html",kicker:"Professional influence",label:"Auswahlplan"},{href:"sql.html",kicker:"Relational comparison",label:"SQL"},{href:"office-automation.html",kicker:"Workplace setting",label:"Office Automation"},{href:"bericht.html",kicker:"Report companion",label:"Bericht 81"}],
    specSources:[{href:"../software-specs/languages/de/datenfrage-82/manifest.json",label:"Datenfrage 82 — specification manifest"},{href:"../software-specs/languages/de/datenfrage-82/history.md",label:"Datenfrage 82 — history and identity"}],
    facts:[["Revision","1982"],["Purpose","Interactive small-database queries"],["Principal influence","Auswahlplan"],["Storage","Sequential, indexed, hierarchical, or keyed files"],["Navigation limit","Eight relationships"],["Updates","Not permitted"],["Execution","Immutable authorized snapshot"],["Typical memory","128–512 KiB"]]
  }),

  "schaltfolge":specialistArticle({
    slug:"schaltfolge",title:"Schaltfolge 82",eyebrow:"German civilian control language · 1982",infoboxKicker:"Noncertified industrial-control language",
    lead:"Schaltfolge 82 is a low-cost German civilian control language for pumps, ovens, conveyors, workshop machines, building systems, and packaging lines. It borrows bounded state transitions, explicit devices, safe outputs, timers, and scan accounting from TEJUN and RP-S while explicitly lacking their independent certification and redundant safety assumptions.",
    canon:"The name, 1982 date, civilian-control niche, TEJUN and RP-S influence, bounded state-transition form, low cost, noncertified status, and dangerous misuse are canon. Exact scan, type, arbitration, timer, image, and diagnostic rules are connective design.",
    sections:[
      {id:"niche",title:"The cheap controller",html:"<p>Schaltfolge compiles fixed images for 8- and 16-bit controllers with 16–64 KiB ROM or RAM. It brings structured state control to workshops and buildings that cannot justify a certified Rechenplan or imported TEJUN installation.</p>"},
      {id:"scan",title:"Fixed scan cycle",html:"<p>Each scan samples and conditions every input, evaluates one state’s cycle, tests transitions against one snapshot, selects at most one by priority and source order, and commits variables, timers, state, alarms, and outputs together.</p>"},
      {id:"devices",title:"Typed devices and conditioning",html:"<p>Declared channels specify types, refresh limits, debounce, averaging, units, and safe outputs. Stale or invalid inputs fault before program execution, and all output writes are journaled until the atomic commit.</p>"},
      {id:"timers",title:"Bounded timers and transitions",html:"<p>Timers use the scan counter and declared period. Loops and actions are statically bounded; the compiler calculates worst-case steps across branches, repetitions, transitions, entry, exit, conditioning, and commit.</p>"},
      {id:"fault",title:"Latched safe shutdown",html:"<p>Runtime error, watchdog expiry, bad input, image corruption, or failed output write commands every safe value through the hardware path and latches the controller stopped. There is no automatic restart or live replacement while outputs are enabled.</p>"},
      {id:"boundary",title:"Explicitly noncertified",html:"<p>The loader rejects weapons, spacecraft, nuclear plants, central MOSAIK, military communications, automated rail, and any target not marked civilian. Passing the language specification does not make a legally life-critical installation conforming.</p>"},
      {id:"misuse",title:"Misuse beyond the declared class",html:"<p>Low price and apparent safety encourage operators to deploy Schaltfolge in larger or more hazardous plants than intended. Accidents and audits repeatedly reveal that a safe shutdown path is not equivalent to redundant sensing, formal proof, hot standby, or independent certification.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Schaltfolge is widespread precisely because it occupies the space below certified control. Its political importance lies in making the boundary between affordable automation and regulated authority visible—and frequently contested.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"zivilsprachenrichtlinie.html",kicker:"Authority boundary",label:"Zivilsprachenrichtlinie"},{href:"tejun.html",kicker:"Japanese influence",label:"TEJUN"},{href:"rechenplan.html",kicker:"RP-S comparison",label:"Rechenplan"},{href:"reliability-engineering.html",kicker:"Safety discipline",label:"Reliability Engineering"}],
    specSources:[{href:"../software-specs/languages/de/schaltfolge-82/manifest.json",label:"Schaltfolge 82 — specification manifest"},{href:"../software-specs/languages/de/schaltfolge-82/history.md",label:"Schaltfolge 82 — history and identity"}],
    facts:[["Revision","1982"],["Purpose","Civilian industrial control"],["Principal influences","TEJUN and RP-S"],["Execution","Fixed scan state transitions"],["Targets","8/16-bit, 16–64 KiB"],["Fault response","Latched safe shutdown"],["Certification","Explicitly noncertified"],["Known problem","Use beyond declared risk class"]]
  }),

  "wortbruecke":specialistArticle({
    slug:"wortbruecke",title:"Wortbrücke 82",eyebrow:"German localization language · 1982",infoboxKicker:"Symbolic translation and terminology language",
    lead:"Wortbrücke 82 is an independent German symbolic language for software localization, terminology, technical manuals, catalogs, and constrained translation among German, Spanish, Japanese, and partner-bloc languages. Translators edit dictionaries and rules, then review a complete ambiguity ledger rather than treating its output as autonomous prose.",
    canon:"The name, 1982 date, symbolic ancestry, pattern-grammar and dictionary identity, German–Spanish–Japanese role, and export importance are canon. Exact text model, scoring, feature algebra, package, and review rules are connective design.",
    sections:[
      {id:"purpose",title:"Localization before universal software",html:"<p>German manufacturers and software houses need manuals, interfaces, catalogs, error messages, and contractual terminology for Argentina, Japan, and other partners. Wortbrücke systematizes repetitive constrained translation without claiming general literary competence.</p>"},
      {id:"tokens",title:"Protected tokenization",html:"<p>Protection rules identify product names, codes, placeholders, commands, and exact spans before ordinary tokenization. A valid result must preserve every protected token exactly once unless an explicit rule authorizes transformation.</p>"},
      {id:"analysis",title:"Dictionaries and finite morphology",html:"<p>Tokens receive dictionary and paradigm analyses carrying lemma, category, finite features, cost, and provenance. Mandatory domain terminology creates indivisible multi-token analyses that override conflicting ordinary choices.</p>"},
      {id:"transfer",title:"Bounded phrase transfer",html:"<p>Phrase rules match spans of at most thirty-two tokens, unify finite feature variables, choose compatible target lexemes, and generate target morphology. Dynamic programming selects one canonical minimum document path.</p>"},
      {id:"ambiguity",title:"Mandatory ambiguity review",html:"<p>If distinct target strings have the same complete score, the engine either stops or chooses a canonical form while recording both analyses. Unknown words may stop, copy exactly, or appear visibly marked, but never disappear silently.</p>"},
      {id:"ledger",title:"Provenance ledger",html:"<p>The review ledger records input and output hashes, package versions, every selected lexeme, rule and paradigm, protected mappings, fallbacks, ambiguities, spans, and provenance. Approved human overlays apply only to an exact package and input hash.</p>"},
      {id:"publication",title:"Atomic text-and-ledger publication",html:"<p>Output text and its ledger are written and committed together through a two-file journal. Recovery completes or restores the pair, preventing a localized product from circulating without the evidence needed to audit how it was produced.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Wortbrücke becomes important to Argentine localization, Japanese technical exchange, export manuals, and multilingual software catalogs. Human translators remain responsible for terminology, ambiguity, cultural tone, and final approval.</p>"}
    ],
    related:[{href:"german-civilian-languages.html",kicker:"Civilian ecology",label:"German Civilian Languages"},{href:"programmhaeuser.html",kicker:"Commercial users",label:"Programmhäuser"},{href:"satzwerk.html",kicker:"Publishing companion",label:"Satzwerk 81"},{href:"plan-austral.html",kicker:"Argentine market",label:"Plan Austral"},{href:"unicode-80.html",kicker:"Character identity",label:"UNICODE 80"}],
    specSources:[{href:"../software-specs/languages/de/wortbruecke-82/manifest.json",label:"Wortbrücke 82 — specification manifest"},{href:"../software-specs/languages/de/wortbruecke-82/history.md",label:"Wortbrücke 82 — history and identity"}],
    facts:[["Revision","1982"],["Purpose","Localization and constrained translation"],["Principal markets","German, Spanish, and Japanese"],["Analysis","Dictionary and finite morphology"],["Transfer","Bounded phrase rules"],["Protected spans","Exact preservation required"],["Human review","Mandatory ambiguity ledger"],["Output","Atomic text and provenance pair"]]
  }),

  "programmhaeuser":specialistArticle({
    slug:"programmhaeuser",title:"Programmhäuser",eyebrow:"German software-house industry · 1983–1985",infoboxKicker:"Civilian software business",
    lead:"Programmhäuser are the specialist German software houses that emerge as a recognized business form after the 1982 civilian-language reform. They allow firms and public institutions to purchase applications, translation, maintenance, gateway work, and future-machine portability without employing every programmer permanently.",
    canon:"Their emergence by 1983–85, principal services, contract categories, regional clusters, protected-market setting, Argentine and foreign work, and strategic boundary are established. Individual leading companies, founders, market shares, and mergers remain open.",
    sections:[
      {id:"origin",title:"From language reform to industry",html:"<p>The <a href='zivilsprachenrichtlinie.html'>Zivilsprachenrichtlinie</a> gives private firms and university groups room to maintain languages and tools while Zivil-Planform supplies shared services. What begins as compiler and electronics work becomes an independent contracting industry by 1983–85.</p>"},
      {id:"services",title:"Services",html:"<p>A Programmhaus may build inventory, payroll, engineering, publishing, database, network, and game software; translate foreign packages; customize export machines; maintain legacy Rechenplan; or construct gateways between incompatible systems.</p>"},
      {id:"contracts",title:"The software contract",html:"<p>Contracts increasingly distinguish source ownership, object-code use, maintenance, translation, future-machine portability, interface versions, and source escrow if the contractor fails. Software becomes a continuing commercial relationship rather than an accessory delivered with hardware.</p>"},
      {id:"clusters",title:"Regional clusters",html:"<p>Major clusters appear around Munich, Stuttgart, Hamburg, Berlin, Cologne, Vienna, Frankfurt, Riga, and selected eastern technical centers. Each joins universities, electronics firms, banks, printers, exporters, and government purchasers in different proportions.</p>"},
      {id:"market",title:"Protected domestic market",html:"<p>The German imperial market shelters small firms from unrestricted American and Japanese competition. Protection gives domestic houses time to mature, but also ties contracts to political access, licensed interfaces, and bloc procurement.</p>"},
      {id:"export",title:"Argentina and export work",html:"<p>Argentina becomes the largest foreign German-derived software ecology. Programmhäuser localize Plan Austral systems, logistics packages, diagnostics, manuals, and network tools while also serving neutral and associated customers through translation and gateway contracts.</p>"},
      {id:"boundary",title:"Civilian and strategic work",html:"<p>A house may maintain authorized legacy code or call certified libraries, but weapons, spacecraft, reactors, central MOSAIK, military communications, and automated rail remain controlled domains. General commercial success does not grant a strategic compiler certificate.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Programmhäuser are a normal middle layer between hardware makers, institutions, and users. Their long-term power remains uncertain: Weltnetz and Bridge enlarge their markets while exposing them to foreign competitors and increasingly portable software.</p>"}
    ],
    related:[{href:"zivilsprachenrichtlinie.html",kicker:"Legal foundation",label:"Zivilsprachenrichtlinie"},{href:"german-civilian-languages.html",kicker:"Technical ecology",label:"German Civilian Languages"},{href:"gelenkte-grossraumwirtschaft.html",kicker:"Economic setting",label:"Directed Imperial Market"},{href:"software-portability.html",kicker:"Contract problem",label:"Cross-Bloc Software Portability"},{href:"matthias-falkenberg.html",kicker:"Network advocate",label:"Matthias Falkenberg"}],
    specSources:[{href:"../characterDossier%20-%20AltWWII.md",label:"Character Dossier — Falkenberg and civilian software houses"}],
    facts:[["Recognized as an industry","1983–1985"],["German singular","Programmhaus"],["Principal products","Custom applications and packages"],["Continuing services","Maintenance and translation"],["Portability instrument","Future-machine clauses"],["Failure protection","Source escrow"],["Major foreign market","Argentina"],["Strategic authority","Requires separate certification"]],
    categories:["Computing industry","Germany","Software companies","Political economy"]
  })
});

const addSpecialistRelated = (slug,item) => {
  const related = window.deepArticles[slug]?.related;
  if (related && !related.some(entry=>entry.href===item.href)) related.unshift(item);
};

for (const item of [
  {href:"programmhaeuser.html",kicker:"Software industry",label:"Programmhäuser"},
  {href:"schnur.html",kicker:"Instrument language",label:"Schnur 80"},
  {href:"bericht.html",kicker:"Report language",label:"Bericht 81"},
  {href:"spielsatz.html",kicker:"Cassette-game language",label:"Spielsatz 81"},
  {href:"satzwerk.html",kicker:"Publishing language",label:"Satzwerk 81"},
  {href:"datenfrage.html",kicker:"Office query language",label:"Datenfrage 82"},
  {href:"schaltfolge.html",kicker:"Civilian control language",label:"Schaltfolge 82"},
  {href:"wortbruecke.html",kicker:"Localization language",label:"Wortbrücke 82"}
]) addSpecialistRelated("german-civilian-languages",item);

addSpecialistRelated("zivilsprachenrichtlinie",{href:"programmhaeuser.html",kicker:"Commercial consequence",label:"Programmhäuser"});
addSpecialistRelated("office-automation",{href:"bericht.html",kicker:"Report language",label:"Bericht 81"});
addSpecialistRelated("office-automation",{href:"datenfrage.html",kicker:"Query language",label:"Datenfrage 82"});
addSpecialistRelated("mauerwerk",{href:"spielsatz.html",kicker:"Cassette-game language",label:"Spielsatz 81"});
addSpecialistRelated("software-portability",{href:"programmhaeuser.html",kicker:"German contractors",label:"Programmhäuser"});
addSpecialistRelated("gelenkte-grossraumwirtschaft",{href:"programmhaeuser.html",kicker:"Civilian software industry",label:"Programmhäuser"});
