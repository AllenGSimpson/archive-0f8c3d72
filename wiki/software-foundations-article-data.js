window.deepArticles = window.deepArticles || {};

const softwareFoundationSources = [
  {href:"../SoftwareDetailReference.md",label:"Software and Programming Language Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — computing and software"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — computing milestones"}
];

const foundationArticle = config => softwareArticle({
  category:"Computing",
  eyebrow:"Software history · language lineage",
  infoboxKicker:"Programming language and systems history",
  ...config,
  sources:config.sources || softwareFoundationSources,
  categories:config.categories || ["Computing","Software","Programming languages"]
});

Object.assign(window.deepArticles, {
  "plankalkul": foundationArticle({
    slug:"plankalkul",title:"Plankalkül",eyebrow:"German program notation · 1944–1952",infoboxKicker:"Intellectual ancestor of Rechenplan",
    lead:"Plankalkül is Konrad Zuse’s system for describing calculations through typed quantities, arrays, logical structures, and ordered plans. It is the principal intellectual ancestor of Rechenplan, but was not a widely deployed wartime compiler language.",
    canon:"Its conceptual inheritance, postwar normalization, and place in German software history are established. Surviving manuscript variants and laboratory translators do not constitute one production implementation.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Zuse develops Plankalkül while relay computers are still programmed through wiring, switches, and machine orders. Its decisive claim is that a program can describe a calculation independently of the physical arrangement of a particular machine.</p>"},
      {id:"concepts",title:"Conceptual system",html:"<p>The notation supplies typed quantities, arrays, structured plans, conditions, repetition, and formal relationships between inputs and results. Two-dimensional manuscript layout carries subscripts and structural annotations that later media cannot reproduce directly.</p>"},
      {id:"war-status",title:"Wartime status",html:"<p>Plankalkül is an intellectual design rather than a routinely deployed wartime compiler. Programs are not fed into a national fleet of machines, and later German histories distinguish the notation from operational relay preparation.</p>"},
      {id:"roles",title:"The four programming levels",html:"<p>By 1947 German work separates mathematical specification, Plankalkül-influenced plan description, manual machine preparation, and operation or test. Scientists, <em>Planer</em>, machine coders, operators, and maintenance engineers already occupy distinct roles.</p>"},
      {id:"normalization",title:"Postwar normalization",html:"<p>Between 1947 and 1950 surviving material is translated into a linear card-and-tape notation. Manuscript subscripts acquire explicit delimiters, while hardware-facing input and output are separated from mathematical expressions.</p>"},
      {id:"administration",title:"Limits outside science",html:"<p>Administrative offices continue to use card layouts, plugboards, tabulator routes, and categorical codes. These workflows influence later commercial programming but are neither Plankalkül nor stored-program languages.</p>"},
      {id:"rechenplan",title:"Inheritance by Rechenplan",html:"<p>Laboratory translators and normalized vocabulary feed directly into <a href='rechenplan-52.html'>Rechenplan 52</a>. The successor preserves types, arrays, and machine-independent calculation while adapting them to fixed source media and practical translation.</p>"},
      {id:"legacy",title:"Historical legacy",html:"<p>Plankalkül becomes the foundational text of the German conception of software as a specified plan. Later official accounts celebrate that idea while also acknowledging that compilers, operating practice, and production standards were postwar achievements.</p>"}
    ],related:[{href:"rechenplan.html",kicker:"Successor family",label:"Rechenplan"},{href:"rechenplan-52.html",kicker:"First practical specification",label:"Rechenplan 52"},{href:"programming-languages.html",kicker:"Comparative field",label:"Programming Languages"}],
    facts:[["Designer","Konrad Zuse"],["Development period","Wartime and immediate postwar"],["Principal concepts","Types, arrays, structured plans"],["Production wartime compiler","None"],["Normalization","1947–1950"],["Postwar media","Cards and paper tape"],["Successor","Rechenplan"],["Historical role","Intellectual foundation"]]
  }),

  "rechenplan-52": foundationArticle({
    slug:"rechenplan-52",title:"Rechenplan 52",eyebrow:"German high-level specification · 1952",infoboxKicker:"First practical Rechenplan generation",
    lead:"Rechenplan 52 is the first practical German high-level programming specification. It converts Plankalkül’s plan-oriented inheritance into a narrow card-and-tape language for relay engineering machines and early stored-program computers.",
    canon:"The language’s implementation core, mixed translation route, and 1953–55 spread are established. The specification package remains a draft pending complete executable conformance and independent review.",
    sections:[
      {id:"purpose",title:"Purpose and targets",html:"<p>The language targets Zuse relay engineering machines and early Göttingen and Telefunken systems using drums or small electronic memories. It solves symbolic scientific calculation without pretending that scarce hardware has disappeared.</p>"},
      {id:"types",title:"Types and storage",html:"<p>Programs declare static integers, fixed-point and floating-point quantities, plus one- and two-dimensional fixed-bound arrays. Programmers must state ranges, radix, precision, scale, rounding, bounds, and formats.</p>"},
      {id:"control",title:"Control and procedures",html:"<p>Named labels, conditional transfers, counted repetition, and nonrecursive subroutines form the control system. Scalar parameters use copy-in and copy-out; there are no records, strings, modules, heap objects, or general recursion.</p>"},
      {id:"source",title:"Cards and tape",html:"<p>Source occupies eighty-column cards or equivalent tape lines. Semicolons terminate logical statements, continuation is bounded, and identifiers use uppercase Latin letters and digits with eight significant characters.</p>"},
      {id:"translation",title:"Mixed human and machine translation",html:"<p>A scientist supplies the typed plan, a <em>Planprüfer</em> checks ranges and forms, a limited translator emits an operation list, and a coding office creates target instructions. Full automatic translation spreads by machine family only in 1953–55.</p>"},
      {id:"planform",title:"Planform I route",html:"<p>The translator emits an early <a href='planform.html'>Planform I</a> representation. Small-memory binders may process one routine at a time and demand a physical overlay plan, although overlays remain outside source semantics.</p>"},
      {id:"failure",title:"Failure behavior",html:"<p>Overflow, impossible input, unset reads, failed bounds checks, and invalid result copy-out halt the job. Machine offices retain responsibility for storage placement, peripheral binding, target libraries, and signed test records.</p>"},
      {id:"succession",title:"From experiment to national standard",html:"<p>Rechenplan 52 demonstrates that German high-level translation can work in production, but it remains transitional. <a href='rechenplan-56.html'>Rechenplan 56</a> adds records, characters, stronger checking, structured control, and a compulsory procurement route.</p>"}
    ],related:[{href:"plankalkul.html",kicker:"Intellectual ancestor",label:"Plankalkül"},{href:"rechenplan-56.html",kicker:"Production successor",label:"Rechenplan 56"},{href:"planform.html",kicker:"Intermediate form",label:"Planform"}],
    facts:[["Introduced","1952"],["Storage","Static"],["Arrays","Fixed-bound, one or two dimensional"],["Procedures","Nonrecursive"],["Source medium","Cards or paper tape"],["Intermediate form","Planform I"],["Automatic translation","Spreads 1953–55"],["Status","Implementation-oriented draft"]]
  }),

  "rechenplan-56": foundationArticle({
    slug:"rechenplan-56",title:"Rechenplan 56",eyebrow:"German national programming standard · 1956",infoboxKicker:"First production Rechenplan standard",
    lead:"Rechenplan 56 is the first production national programming-language standard of the Greater German Reich. It combines scientific, administrative, and control profiles within one strongly checked compiler system and a documented path to Planform.",
    canon:"Its language core, three profiles, static storage discipline, and 1957 procurement requirement are established. Complete executable fixtures and final independent review remain open.",
    sections:[
      {id:"standard",title:"National standard",html:"<p>From 1957 every accepted major general-purpose German computer must supply either a certified Rechenplan 56 compiler or a documented route into <a href='planform.html'>Planform</a>. The policy permits machine competition beneath a common source and audit layer.</p>"},
      {id:"syntax",title:"Source notation",html:"<p>Portable source uses uppercase words, semicolon-terminated statements, bracketed array selection, and <code>:=</code> assignment. Representative words include <em>WENN</em>, <em>SONST</em>, <em>FÜR</em>, <em>VERFAHREN</em>, <em>EINGABE</em>, and <em>AUSGABE</em>.</p>"},
      {id:"types",title:"Types and checks",html:"<p>Binary integers, decimal or binary fixed-point numbers, floating point, truth values, characters, arrays, and fixed records are statically typed. Compilers check dimensions, known bounds, record fields, conversions, and procedure parameters.</p>"},
      {id:"storage",title:"Predictable storage",html:"<p>All base-language objects have static lifetime and procedure activation areas are fixed at link time. Recursion is rejected. Records preserve declaration order, and the portable model stores arrays row-major.</p>"},
      {id:"rpw",title:"RP-W: science",html:"<p>The scientific profile supplies floating point, complex values where supported, matrices, interpolation, differential equations, numerical integration, and orbital or ballistic libraries.</p>"},
      {id:"rpv",title:"RP-V: administration",html:"<p>The administrative profile supplies exact decimal fields, records, keyed files, sorting, reports, dates, districts, currencies, and commodities. Its declared formats preserve accountability across different peripherals.</p>"},
      {id:"rps",title:"RP-S: control",html:"<p>The control profile uses bounded loops, devices, events, state tables, timing estimates, and fail-safe branches. It excludes recursion, dynamic size, unbounded iteration, implicit conversion, and unpredictable library calls.</p>"},
      {id:"legacy",title:"Planform and succession",html:"<p>Compilation proceeds from typed source through Planform to an optimized machine plan and native instructions. <a href='rechenplan-63.html'>Rechenplan 63</a> later introduces modules, separate compilation, standardized exceptions, and limited recursion.</p>"}
    ],related:[{href:"rechenplan.html",kicker:"Language family",label:"Rechenplan"},{href:"rechenplan-52.html",kicker:"Predecessor",label:"Rechenplan 52"},{href:"rechenplan-63.html",kicker:"Successor",label:"Rechenplan 63"},{href:"planlauf.html",kicker:"Batch monitor",label:"Planlauf"}],
    facts:[["Standard issued","1956"],["Procurement requirement","From 1957"],["Profiles","RP-W, RP-V, RP-S"],["Typing","Static and strong"],["Base storage","Static lifetime"],["Recursion","Prohibited"],["Intermediate form","Planform I"],["Source character set","Portable uppercase repertoire"]]
  }),

  "rechenplan-63": foundationArticle({
    slug:"rechenplan-63",title:"Rechenplan 63",eyebrow:"German modular programming standard · 1963",infoboxKicker:"Second-generation Rechenplan",
    lead:"Rechenplan 63 extends the national language family from self-contained batch programs to typed modules, separately compiled procedures, standardized exceptions, and limited recursion under the ERO 63 architectural order.",
    canon:"The modular language structure, interface checking, three profiles, and Planform II route are established. Full executable conformance and clean-room review remain pending.",
    sections:[
      {id:"ero",title:"ERO 63 setting",html:"<p>ERO 63 defines a common architectural order rather than one binary-compatible machine: normally forty-eight-bit scientific words, twenty-four-bit half-words, six- and twelve-bit characters, channel input/output, protected states, interrupts, and common object modules.</p>"},
      {id:"modules",title:"Modules and visibility",html:"<p>A compilation unit is a <em>MODUL</em>. Its export list identifies public names; every other declaration remains private. Separately compiled procedures and data can therefore be revised without exposing internal organization.</p>"},
      {id:"interfaces",title:"Checked interfaces",html:"<p>Imported signatures record names, parameter modes, types, dimensions, exception sets, and required profiles. Linkers reject mismatches instead of silently inserting conversions or trusting calling conventions.</p>"},
      {id:"types",title:"Language additions",html:"<p>Block scope, records, enumerations, named interfaces, source-referenced diagnostics, and standardized exception conditions support larger programs. Types retain nominal identity where institutional libraries require it.</p>"},
      {id:"recursion",title:"Bounded recursion and storage",html:"<p>RP-W permits limited recursion. RP-S admits it only when a maximum depth can be established statically. Dynamic allocation remains confined to approved scientific libraries rather than becoming a general facility.</p>"},
      {id:"planform",title:"Planform II",html:"<p>The compiler lowers source into a stack-oriented <a href='planform.html'>Planform II</a> representation containing typed operations, procedure frames, records, exceptions, device classes, and timing or storage annotations.</p>"},
      {id:"exceptions",title:"Exception transfer",html:"<p>A Planform II frame records arguments, locals, temporary-stack maximum, return state, and exception continuation. Unhandled exceptions terminate the job under Planwerk and produce a source-and-intermediate backtrace.</p>"},
      {id:"succession",title:"Path to Rechenplan 68",html:"<p>The 1963 generation makes national-scale software libraries practical. <a href='rechenplan-68.html'>Rechenplan 68</a> builds on it with versioned interfaces, static processes, typed channels, events, and mandatory runtime identity.</p>"}
    ],related:[{href:"rechenplan-56.html",kicker:"Predecessor",label:"Rechenplan 56"},{href:"rechenplan-68.html",kicker:"Successor",label:"Rechenplan 68"},{href:"planform.html",kicker:"Object representation",label:"Planform II"},{href:"planwerk.html",kicker:"Execution environment",label:"Planwerk"}],
    facts:[["Issued","1963"],["Architectural setting","ERO 63"],["Compilation unit","MODUL"],["New capabilities","Modules and separate compilation"],["Exceptions","Standardized and checked"],["Recursion","Limited by profile"],["Intermediate form","Planform II"],["Status","Implementation draft"]]
  }),

  "rechenplan-68": foundationArticle({
    slug:"rechenplan-68",title:"Rechenplan 68",eyebrow:"German systems and control standard · 1968",infoboxKicker:"Process-capable Rechenplan generation",
    lead:"Rechenplan 68 adds versioned modules, controlled concurrency, typed communication, standardized errors, and explicit compiler and runtime identity to the German programming system. Its RP-S profile makes resource evidence a required part of control software.",
    canon:"The language’s process, channel, event, deadline, and certification model is established. The current specification remains a draft pending whole-suite fixtures and independent review.",
    sections:[
      {id:"revision",title:"The 1968 revision",html:"<p>Separately compiled libraries gain versioned layouts and explicit interfaces. Conditional compilation, cross-reference listings, controlled noncritical dynamic storage, and standardized error behavior support larger installations.</p>"},
      {id:"control",title:"RP-S vocabulary",html:"<p>The control profile adds events, processes, channels, signals, states, deadlines, failures, and fallbacks. These are deliberately bounded facilities for industrial, transport, military, and spacecraft control.</p>"},
      {id:"processes",title:"Static processes",html:"<p>RP-S processes are created during configuration. A process blocks on an event or receive and resumes at an explicitly named empty-stack state, making its possible storage and continuation points inspectable.</p>"},
      {id:"channels",title:"Typed channels",html:"<p>Channels are typed first-in, first-out queues with fixed capacity. Each declares whether overflow waits, discards, or raises failure; no hidden allocation expands the queue after certified initialization.</p>"},
      {id:"scheduling",title:"Priority and deadlines",html:"<p>Priority is fixed at configuration time, with lower numerical values running first and process order breaking ties. An operation completing exactly at its deadline succeeds before the timeout is applied.</p>"},
      {id:"evidence",title:"Laufnachweis",html:"<p>The <em>Laufnachweis</em> reports expected worst time, memory, interrupt latency, channel use, resource conflicts, uncertified loops, and assembly calls. It is engineering evidence for certification, not a formal mathematical proof.</p>"},
      {id:"runtime",title:"Planwerk 68 relationship",html:"<p><a href='planwerk.html'>Planwerk 68</a> supplies typed services for files, handles, checkpoints, auditing, and scheduling. Every compiled product identifies its compiler, runtime, libraries, and target configuration.</p>"},
      {id:"influence",title:"Influence and succession",html:"<p>Norwegian Simula influences an RP-W modeling library without making ordinary Rechenplan object-oriented. <a href='rechenplan-72.html'>Rechenplan 72</a> later consolidates controlled references, variants, devices, and distributed effects.</p>"}
    ],related:[{href:"rechenplan-63.html",kicker:"Predecessor",label:"Rechenplan 63"},{href:"rechenplan-72.html",kicker:"Successor",label:"Rechenplan 72"},{href:"planwerk.html",kicker:"Runtime services",label:"Planwerk"}],
    facts:[["Issued","1968"],["Control profile","RP-S"],["Processes","Static"],["Channels","Typed and bounded"],["Scheduling","Fixed priority"],["Runtime allocation","None after certified initialization"],["Certification report","Laufnachweis"],["Operating ABI","Planwerk 68"]]
  }),

  "rechenplan-72": foundationArticle({
    slug:"rechenplan-72",title:"Rechenplan 72",eyebrow:"German distributed programming standard · 1972",infoboxKicker:"Mature strategic Rechenplan standard",
    lead:"Rechenplan 72 is the mature strategic generation of the German national language family. It consolidates modules, variants, controlled references, parameterized libraries, precise exceptions, devices, messages, and distributed effects while preserving the RP-W, RP-V, and RP-S profiles.",
    canon:"The principal 1972 facilities, controlled-storage model, Auswahlplan relationship, and strategic use through 1985 are established. Complete conformance remains under specification review.",
    sections:[
      {id:"consolidation",title:"Consolidated language",html:"<p>The revision joins separately compiled modules, public and private declarations, source and object version identifiers, standard devices, channels, messages, and a clearer exception ancestry into one production standard.</p>"},
      {id:"references",title:"Controlled references",html:"<p>A reference is typed, may be null, and can point only to an object whose declared lifetime encloses it. Pointer arithmetic is impossible, preventing ordinary code from treating memory as an unstructured integer space.</p>"},
      {id:"storage",title:"Regions and variants",html:"<p>RP-W may allocate module-owned heap arenas reclaimed as units; tracing garbage collection is not required. Variant records carry checked discriminants so every stored alternative can be validated at use.</p>"},
      {id:"libraries",title:"Parameterized libraries",html:"<p>Parameterized procedures accept types and compile-time constants and are instantiated at link time. This enables reusable numerical and record libraries without unrestricted runtime polymorphism.</p>"},
      {id:"profiles",title:"Three continuing profiles",html:"<p>RP-W remains scientific, RP-V administrative, and RP-S control-oriented. Their common compiler and object environment supports exchange, while profile rules continue to restrict timing, storage, devices, and exception behavior.</p>"},
      {id:"auswahl",title:"Auswahlplan",html:"<p>RP-V gains <a href='auswahlplan.html'>Auswahlplan</a>, a read-only declarative language for record selection, grouping, ordering, and authorized joins. Updates remain audited procedural RP-V operations.</p>"},
      {id:"distributed",title:"Planwerk 72 services",html:"<p>Planwerk 72 adds versioned queues, replicas, configurations, sessions, logs, and health services. The language exposes their effects explicitly rather than disguising remote work as ordinary local memory access.</p>"},
      {id:"status",title:"Strategic status in 1985",html:"<p>Rechenplan 72 and its certified descendants remain mandatory for weapons, spacecraft, nuclear plants, central MOSAIK, military communications, and automated rail even after civilian language reform.</p>"}
    ],related:[{href:"rechenplan.html",kicker:"Language family",label:"Rechenplan"},{href:"rechenplan-68.html",kicker:"Predecessor",label:"Rechenplan 68"},{href:"auswahlplan.html",kicker:"Query sublanguage",label:"Auswahlplan"},{href:"planwerk.html",kicker:"Distributed runtime",label:"Planwerk 72"}],
    facts:[["Issued","1972"],["Profiles","RP-W, RP-V, RP-S"],["References","Typed and lifetime-controlled"],["Heap policy","Module-owned regions"],["Variants","Checked discriminants"],["Query language","Auswahlplan 72"],["Distributed services","Planwerk 72"],["1985 status","Mandatory in strategic domains"]]
  }),

  "auswahlplan": foundationArticle({
    slug:"auswahlplan",title:"Auswahlplan",eyebrow:"German declarative query language · 1972",infoboxKicker:"Read-only RP-V query sublanguage",
    lead:"Auswahlplan is the declarative read-only query language introduced with Rechenplan 72’s administrative profile. It selects, joins, groups, and orders authorized institutional records while leaving updates to audited procedural programs.",
    canon:"Its read-only character, duplicate and missing-value semantics, bounded work, and RP-V relationship are established. Storage engines remain implementation-specific.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Administrative users need to ask questions across large files without writing record-navigation procedures. Auswahlplan separates the logical request from hierarchical or indexed storage while remaining inside the Rechenplan authorization order.</p>"},
      {id:"queries",title:"Query structure",html:"<p>A query names selected fields, source record sets, predicates, grouping, ordering, and permitted joins. Work limits and authorization checks are part of execution rather than optional installation policies.</p>"},
      {id:"duplicates",title:"Bag and set behavior",html:"<p>Results preserve duplicate records by default, which is essential for ledgers and counted transactions. The explicit <em>EINMAL</em> operation requests set-like elimination of duplicates.</p>"},
      {id:"missing",title:"Missing information",html:"<p>Missing fields are not collapsed into one null. Schemas distinguish unknown, not applicable, explicit absence, and the ordinary presence of a value, preserving administrative meaning.</p>"},
      {id:"authorization",title:"Authorized joins",html:"<p>Logical joins can cross record sets only where the executing identity holds the required authority. A syntactically valid request may therefore be rejected before data are exposed.</p>"},
      {id:"readonly",title:"Read-only discipline",html:"<p>Auswahlplan 72 cannot update files. Inserts, corrections, and deletions remain RP-V procedures that generate audit records and pass through the transaction services of Planwerk.</p>"},
      {id:"execution",title:"Execution and storage",html:"<p>The language promises deterministic errors and ordering where explicitly requested, but does not mandate one physical database. Indexed, hierarchical, and replicated services may satisfy the same logical query.</p>"},
      {id:"legacy",title:"Institutional role",html:"<p>Auswahlplan becomes the recognized read-only face of German administrative data. Its strict missing-value and authority rules make it useful to MOSAIK, planning offices, ledgers, and regulated civilian services.</p>"}
    ],related:[{href:"rechenplan-72.html",kicker:"Host standard",label:"Rechenplan 72"},{href:"rechenplan.html",kicker:"Language family",label:"Rechenplan"},{href:"planwerk.html",kicker:"Data services",label:"Planwerk"},{href:"mosaik-system.html",kicker:"Major installation",label:"MOSAIK"}],
    facts:[["Introduced","1972"],["Host profile","RP-V"],["Operation","Read-only"],["Default result semantics","Duplicates preserved"],["Duplicate elimination","EINMAL"],["Missing values","Explicit variants"],["Updates","Procedural RP-V only"],["Work model","Authorized and bounded"]]
  }),

  "planlauf": foundationArticle({
    slug:"planlauf",title:"Planlauf",eyebrow:"German batch monitor · late 1950s",infoboxKicker:"Rechenplan job-control system",
    lead:"Planlauf is the German batch-monitor system that turns a submitted Rechenplan program into an identified, classified, accounted, and auditable job. It is the operational bridge between programming language, compiler, libraries, machine time, and printed result.",
    canon:"Its late-1950s role, job declaration, accounting, diagnostics, and relationship to Planwerk are established. Individual machine commands and queue policies vary by installation.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>As automatic Rechenplan translation spreads, operators can no longer prepare every job through informal local conventions. Planlauf standardizes the information that must accompany a program into a supervised machine room.</p>"},
      {id:"job",title:"Job declaration",html:"<p>A submission identifies the job, owner, security class, Rechenplan profile, compiler, required libraries, input media, output destination, and maximum time. Missing or incompatible declarations stop admission.</p>"},
      {id:"loading",title:"Loading and execution",html:"<p>The monitor selects the compiler or accepts Planform, binds approved libraries, schedules machine resources, and launches the native plan. Operators control physical media and recoverable device faults.</p>"},
      {id:"accounting",title:"Accounting",html:"<p>Processor time, peripheral use, storage, pages, punched output, and abnormal termination are charged to the submitting office. The record supports both budgeting and security review.</p>"},
      {id:"diagnostics",title:"Listings and diagnostics",html:"<p>Programmers ordinarily receive a source listing, translation diagnostics, runtime notices, and an audit summary rather than direct machine access. Source locations remain connected to generated operations where the compiler permits.</p>"},
      {id:"security",title:"Classification and custody",html:"<p>Job class controls queues, operators, libraries, media custody, and output delivery. Planlauf does not itself make a program safe; it establishes who handled each stage and which environment executed it.</p>"},
      {id:"planwerk",title:"Relationship to Planwerk",html:"<p>Planlauf precedes and survives inside the broader <a href='planwerk.html'>Planwerk</a> operating family. Planwerk 64 adds protected supervisor operation, multiprogramming, spooling, checkpoints, remote jobs, and common object formats.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The monitor establishes the characteristic German idea that program identity includes source, compiler, libraries, authority, resources, and results. Later interactive sessions inherit the same provenance even when cards disappear.</p>"}
    ],related:[{href:"rechenplan-56.html",kicker:"Source standard",label:"Rechenplan 56"},{href:"planform.html",kicker:"Compiler output",label:"Planform"},{href:"planwerk.html",kicker:"Operating successor",label:"Planwerk"}],
    facts:[["Introduced","Late 1950s"],["System type","Batch monitor"],["Input identity","Job and security class"],["Language identity","Profile and compiler"],["Resources","Libraries, media, destination, time"],["Primary user output","Listings and diagnostics"],["Accounting","Machine and peripheral use"],["Successor environment","Planwerk"]]
  })
});

Object.assign(window.deepArticles, {
  "fortran": foundationArticle({
    slug:"fortran",title:"FORTRAN",eyebrow:"American scientific language · from 1958",infoboxKicker:"Scientific programming-language family",
    lead:"FORTRAN is the principal American scientific and engineering programming-language family. Its optimizing compiler makes formula-oriented high-level programming competitive with hand coding, while long-lived validated libraries preserve older dialects far beyond their original machines.",
    canon:"Production introduction around 1958, the FORTRAN I, II, and IV lineage, principal machine model, and aerospace role are established. Exact historical editions must still be declared by individual implementations.",
    sections:[
      {id:"arrival",title:"Production arrival",html:"<p>American FORTRAN reaches production around 1958, approximately one year later than in familiar chronology. The delay does not change its central achievement: generated numerical code fast enough to win skeptical machine programmers.</p>"},
      {id:"first",title:"FORTRAN I",html:"<p>The first production profile supplies algebraic expressions, integer and floating variables, arrays, counted loops, branches, subprograms, and formatted input and output. Optimization is part of the language’s institutional appeal, not a secondary convenience.</p>"},
      {id:"second",title:"FORTRAN II",html:"<p>The 1959–60 generation strengthens separately compiled subroutines, shared libraries, debugging, and linkage to assembly routines. Laboratories can preserve expensive numerical work while replacing parts of a program.</p>"},
      {id:"four",title:"FORTRAN IV",html:"<p>FORTRAN IV becomes the stable scientific language of the 1960s. Later revisions coexist with old vendor dialects because a validated trajectory, fluid, or reactor program may be cheaper to preserve than to rewrite.</p>"},
      {id:"machine",title:"Machine model",html:"<p>The early lineage uses column-oriented cards, mostly static storage, pass-by-reference arguments, one-origin column-major arrays, arithmetic <em>DO</em>, and formatted records. Integer and real widths remain implementation-defined.</p>"},
      {id:"aerospace",title:"Aerospace libraries",html:"<p>American aerospace centers build libraries for trajectories, coordinate systems, fluid dynamics, guidance simulation, telemetry reduction, and orbital analysis. Reuse is organized around declared machine and numerical profiles.</p>"},
      {id:"portability",title:"Portability limits",html:"<p>FORTRAN source travels more easily than machine code, but numerical widths, character conventions, input records, and library behavior can change results. A port therefore includes test cases and a declared implementation edition.</p>"},
      {id:"status",title:"Position in 1985",html:"<p>FORTRAN remains a dominant scientific language despite C, Lambda, and newer military systems. Its survival rests on compilers, accumulated libraries, trained engineers, and the cost of revalidating working numerical programs.</p>"}
    ],related:[{href:"american-programming-languages.html",kicker:"National context",label:"American Programming Languages"},{href:"aerol-60.html",kicker:"Aerospace counterpart",label:"AEROL-60"},{href:"c-programming-language.html",kicker:"Systems counterpart",label:"C"}],
    facts:[["Production introduction","c. 1958"],["Early generations","FORTRAN I and II"],["Stable 1960s generation","FORTRAN IV"],["Primary field","Science and engineering"],["Array origin","One"],["Array order","Column-major"],["Arguments","Pass by reference"],["1985 status","Widely used"]]
  }),

  "cobol": foundationArticle({
    slug:"cobol",title:"COBOL",eyebrow:"American administrative language · from 1960",infoboxKicker:"Institutional data-processing language",
    lead:"COBOL is the dominant American language for government, banking, insurance, retail, railway, and military-logistics records. It combines explicit data description, exact decimal arithmetic, file processing, reports, and an English-like procedural notation.",
    canon:"The 1959 standardization effort, 1960 appearance, administrative role, and source-portability limits are established. Installations must identify the exact dialect and environment clauses they implement.",
    sections:[
      {id:"origins",title:"Hopper lineage and standardization",html:"<p>Grace Hopper’s compiler work demonstrates that administrative programs can name reusable operations and data layouts. A multi-institutional effort beginning in 1959 produces a common language in 1960.</p>"},
      {id:"structure",title:"Program structure",html:"<p>Programs separate identification, environment, data, and procedure concerns. Paragraphs organize operations, while picture descriptions state the digits, scale, signs, and printed form of institutional fields.</p>"},
      {id:"decimal",title:"Exact decimal arithmetic",html:"<p>Money and measured quantities use declared decimal representations instead of approximate binary floating point. Rounding, truncation, and destination formats are visible parts of the record-processing contract.</p>"},
      {id:"records",title:"Records and files",html:"<p>Fixed records and sequential or indexed files support payroll, accounts, policies, inventories, transport, and logistics. File organization is an environmental property rather than a universal physical format.</p>"},
      {id:"reports",title:"Reports and institutional work",html:"<p>Programs sort, total, compare, update, and print large bodies of regular records. English-like syntax helps analysts and auditors follow intent, although professional programmers still control implementation.</p>"},
      {id:"portability",title:"Source portability",html:"<p>COBOL standardizes source concepts more successfully than peripheral reality. Collating order, character set, indexed-file organization, media controls, and device behavior remain declared in environment clauses.</p>"},
      {id:"ecosystem",title:"Long-lived installations",html:"<p>Institutional systems accumulate file converters, report libraries, operating procedures, and tested year-end routines. Replacement is therefore a migration of data and practice, not merely a translation of syntax.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>COBOL remains the American administrative workhorse and crosses into Commonwealth installations beside CLEO. New interactive and relational tools supplement it without erasing the durable batch record estate.</p>"}
    ],related:[{href:"american-programming-languages.html",kicker:"National context",label:"American Programming Languages"},{href:"cleo.html",kicker:"Commonwealth counterpart",label:"CLEO"},{href:"fortran.html",kicker:"Scientific contemporary",label:"FORTRAN"}],
    facts:[["Standardization begins","1959"],["First common production","1960"],["Primary field","Administration and commerce"],["Arithmetic","Exact decimal"],["Data model","Declared records"],["Files","Sequential and indexed"],["Portability","Source plus environment clauses"],["1985 status","Dominant institutional language"]]
  }),

  "aerol-60": foundationArticle({
    slug:"aerol-60",title:"AEROL-60",eyebrow:"Working profile · American aerospace language · c. 1959–1960",infoboxKicker:"Provisional JOVIAL-class semantic profile",
    lead:"AEROL-60 is the working catalog label for the common semantic profile of an early American JOVIAL-class aerospace language. It supports radar, command displays, guidance simulation, real-time devices, and large contractor teams; the final historical service name remains unsettled.",
    canon:"The JOVIAL-class lineage, period, purpose, and implementation constraints are established. “AEROL-60” is provisional and must not be represented as a confirmed canonical renaming of JOVIAL.",
    sections:[
      {id:"name",title:"Provisional designation",html:"<p>AEROL-60 is a reference label used while the final early service name remains open. Contemporary implementations may share this profile, but records must not claim that the historical name JOVIAL was officially replaced.</p>"},
      {id:"requirements",title:"Aerospace requirements",html:"<p>Radar, command displays, guidance simulation, telemetry, and contractor integration require explicit layouts, predictable storage, device operations, real-time tasks, and controlled assembly insertion.</p>"},
      {id:"data",title:"Data representation",html:"<p>The profile supplies fixed records, arrays, word and bit fields, and procedures. Representation declarations allow programs to match registers, messages, displays, and externally defined military data formats.</p>"},
      {id:"storage",title:"Predictable allocation",html:"<p>Storage is static and recursion is not general. Link-time maps show code, data, stacks, devices, and reserved regions so reviewers can account for the entire loaded system.</p>"},
      {id:"tasks",title:"Tasks and interrupts",html:"<p>Fixed-priority tasks and interrupt-entry procedures support bounded real-time work. Flight and weapon profiles restrict implementation freedom where timing, memory, or recovery must be certified.</p>"},
      {id:"assembly",title:"Machine linkage",html:"<p>Assembly insertion and device bindings remain unavoidable for specialized hardware. They are documented escapes from the common language rather than evidence of universal binary portability.</p>"},
      {id:"ada",title:"Relationship to Ada",html:"<p>Ada’s 1983 standard consolidates later military programming through packages, generics, tasks, exceptions, strong types, and representation clauses. Aerospace profiles still restrict dynamic allocation and tasking where certification demands it.</p>"},
      {id:"status",title:"Use through 1985",html:"<p>The JOVIAL-class lineage survives beside Ada because installed weapons, displays, simulations, and contractor toolchains cannot be replaced at once. The profile records their shared technical identity without resolving every service name.</p>"}
    ],related:[{href:"american-programming-languages.html",kicker:"National context",label:"American Programming Languages"},{href:"fortran.html",kicker:"Scientific companion",label:"FORTRAN"},{href:"united-states-aerospace-force.html",kicker:"Service context",label:"United States Aerospace Force"}],
    facts:[["Designation","AEROL-60 (working label)"],["Historical class","JOVIAL-class"],["Appearance","c. 1959–1960"],["Allocation","Static"],["Recursion","Not general"],["Scheduling","Fixed priority"],["Memory evidence","Link-time maps"],["Later military standard","Ada, 1983"]]
  }),

  "c-programming-language": foundationArticle({
    slug:"c-programming-language",title:"C (programming language)",eyebrow:"American systems language · 1970s–1985",infoboxKicker:"Portable machine-control language",
    lead:"C is America’s principal portable machine-control language for UNIX, compilers, networks, minicomputers, professional microcomputers, and operating-system utilities. It offers a compact source model close to hardware without promising identical representation on every machine.",
    canon:"The 1970s C lineage, UNIX relationship, language profile, and cross-platform deviation requirements are established. Exact editions and vendor extensions must be declared.",
    sections:[
      {id:"origins",title:"Origins with UNIX",html:"<p>C develops in the 1970s alongside <a href='unix.html'>UNIX</a>, replacing more machine-bound systems code while retaining direct access to addresses, bytes, layouts, and operating services.</p>"},
      {id:"model",title:"Language model",html:"<p>The language has weak static types, addressable bytes, array-to-pointer conversion, structures, unions, manual allocation, preprocessing, separate translation, and a deliberately small runtime.</p>"},
      {id:"systems",title:"Systems work",html:"<p>Operating systems, compilers, network tools, device utilities, and professional microcomputer software benefit from source that can be retargeted without concealing machine organization.</p>"},
      {id:"translation",title:"Separate translation",html:"<p>Source files compile independently and are joined through external names and libraries. Header declarations and build rules become part of the real program even when the language standard treats them separately.</p>"},
      {id:"memory",title:"Manual memory",html:"<p>Programs may calculate addresses, allocate and release storage, and reinterpret layouts. This power enables compact system software but moves bounds, lifetime, and aliasing discipline onto programmers and reviewers.</p>"},
      {id:"characters",title:"Non-eight-bit targets",html:"<p>Not every Bridge, German, or Japanese target uses an eight-bit internal character. Port packages must declare character-bit width, integer widths, byte order, structure layout, and external-text conversion.</p>"},
      {id:"portability",title:"Meaning of portable C",html:"<p>Portable C means conditionalized source, stable library interfaces, and documented deviations. It does not mean identical object representations, binaries, text encodings, or peripheral behavior.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>C is a leading systems language but does not replace FORTRAN, COBOL, AEROL-60, Lambda, LISP, or Civic. Its influence is strongest where replaceable hardware and portable tools are strategic goals.</p>"}
    ],related:[{href:"unix.html",kicker:"Operating-system partner",label:"UNIX"},{href:"american-programming-languages.html",kicker:"National context",label:"American Programming Languages"},{href:"bridge-operating-environment.html",kicker:"Portable environment",label:"Bridge"}],
    facts:[["Development","1970s"],["Primary role","Systems programming"],["Typing","Weak static"],["Storage","Manual allocation"],["Compilation","Separate translation"],["Runtime","Small"],["Character width","Target-declared"],["Portability","Source and library interfaces"]]
  }),

  "unix": foundationArticle({
    slug:"unix",title:"UNIX",eyebrow:"American portable operating system · 1970s–1985",infoboxKicker:"Multiuser systems environment",
    lead:"UNIX is an American portable operating-system lineage built around processes, hierarchical files, byte streams, small composable tools, and implementation in C. It becomes a major environment for universities, networks, minicomputers, and professional workstations.",
    canon:"The C relationship, portable systems role, principal interface culture, and 1985 institutional position are established. Vendor editions, command sets, and licensing branches remain diverse.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>UNIX emerges from American time-sharing and systems research in the early 1970s. Its initial machine dependence is progressively reduced as more of the system is rewritten in <a href='c-programming-language.html'>C</a>.</p>"},
      {id:"processes",title:"Processes",html:"<p>Programs execute as processes created, connected, and replaced through a small set of system calls. Parent and child relationships support shells, batch work, background services, and development tools.</p>"},
      {id:"files",title:"Files and streams",html:"<p>A hierarchical file system provides named directories and regular files, while many devices appear through stream-like interfaces. The abstraction is powerful but does not erase device-specific control operations.</p>"},
      {id:"tools",title:"Composable tools",html:"<p>Small utilities transform text and records, and command interpreters join them through files and pipelines. The culture favors replaceable components, inspectable source, and scripting over one all-encompassing application.</p>"},
      {id:"porting",title:"Porting in C",html:"<p>C allows a large share of the kernel and utilities to move between processor families. Assembly remains necessary for startup, context switching, interrupts, and other machine boundaries.</p>"},
      {id:"diversity",title:"Edition diversity",html:"<p>Research, university, commercial, and licensed branches diverge in commands, files, networking, and administration. UNIX describes a lineage and interface culture rather than one universally compatible 1985 binary platform.</p>"},
      {id:"networks",title:"Networks and workstations",html:"<p>Universities and laboratories make UNIX a natural host for packet networking, compilers, electronic mail, scientific tools, and professional workstations. Its text conventions also shape cross-bloc gateways.</p>"},
      {id:"rivals",title:"Position among platforms",html:"<p>UNIX competes with mainframe operating systems, <a href='bridge-operating-environment.html'>Bridge</a>, Concord, Planwerk, and Commonwealth service environments. Its influence exceeds its consumer-market share because it trains programmers and transports tools.</p>"}
    ],related:[{href:"c-programming-language.html",kicker:"Implementation language",label:"C"},{href:"american-programming-languages.html",kicker:"National context",label:"American Programming Languages"},{href:"computing-networks.html",kicker:"Network context",label:"Computing Networks"}],
    facts:[["Origin","Early 1970s"],["Country","United States"],["Implementation language","C, with machine assembly"],["Execution model","Processes"],["Storage model","Hierarchical files"],["Interface style","Byte streams and small tools"],["Major settings","Universities, networks, workstations"],["1985 compatibility","Multiple branches"]]
  }),

  "cpl": foundationArticle({
    slug:"cpl",title:"CPL",eyebrow:"Commonwealth programming language · 1963–1964",infoboxKicker:"Ambitious block-structured language",
    lead:"CPL is an ambitious British and Commonwealth language for science, systems, symbolic work, compiler construction, and complex data. Its expressive type and procedure system advances language research but proves difficult to compile across the Commonwealth’s varied machines.",
    canon:"Its 1963–64 emergence, scope, principal facilities, implementation difficulty, and influence on BCPL are established. Exact compiler dialects remain institutional.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>CPL appears in 1963–64 from the Commonwealth’s compiler and service-computing tradition. Its designers seek one language capable of joining numerical, symbolic, systems, and data-structure work.</p>"},
      {id:"scope",title:"Ambitious scope",html:"<p>The language includes recursion, records, typed references, arrays, lists, typed procedures, separate compilation, and restricted user-defined operators. Lexical blocks organize names and storage.</p>"},
      {id:"types",title:"Types and references",html:"<p>Static types check ordinary expressions and procedure interfaces. References carry types, but the base language does not settle one universal method for disposing of the storage to which they point.</p>"},
      {id:"procedures",title:"Procedures and recursion",html:"<p>Lexically scoped procedures may recurse and manipulate compound data. These facilities make CPL suitable for compilers and symbolic programs that are awkward in Autocode.</p>"},
      {id:"compilation",title:"Compiler difficulty",html:"<p>The combination of rich data, references, operators, recursion, and machine diversity makes complete efficient compilers demanding. Not every participating center implements the same useful subset at the same time.</p>"},
      {id:"service",title:"Commonwealth setting",html:"<p>CPL programs circulate through university centers and programme libraries with machine declarations, test material, and known deviations. Translation expertise matters more than claims of universal executability.</p>"},
      {id:"bcpl",title:"BCPL response",html:"<p><a href='bcpl.html'>BCPL</a> deliberately removes most of CPL’s type and data complexity in 1967. The smaller language is easier to bootstrap and port for operating systems, utilities, and networks.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>CPL’s importance lies in the design territory it opens and the simpler descendants it provokes. Its lexical scope, structured data, and systems ambitions influence later Commonwealth and American languages.</p>"}
    ],related:[{href:"commonwealth-programming-languages.html",kicker:"Regional context",label:"Commonwealth Programming Languages"},{href:"bcpl.html",kicker:"Simplified successor",label:"BCPL"},{href:"applicative-autocode.html",kicker:"Functional contemporary",label:"Applicative Autocode"}],
    facts:[["Introduced","1963–1964"],["Region","Britain and Commonwealth"],["Typing","Static"],["Scope","Lexical"],["Recursion","Supported"],["Data","Records, arrays, lists, references"],["Compilation","Difficult across diverse machines"],["Principal successor","BCPL"]]
  }),

  "bcpl": foundationArticle({
    slug:"bcpl",title:"BCPL",eyebrow:"Commonwealth systems language · from 1967",infoboxKicker:"Portable word-oriented systems language",
    lead:"BCPL is a compact Commonwealth systems language created in 1967 by deliberately simplifying CPL. Its one-word data model, small runtime, and easy bootstrap make it useful for operating systems, compilers, utilities, text processing, networks, minicomputers, and workstations.",
    canon:"Its 1967 origin, word-oriented model, runtime requirements, uses, and porting limits are established. Machine libraries and byte conventions vary by target.",
    sections:[
      {id:"origins",title:"Simplification of CPL",html:"<p>BCPL keeps block structure and procedural systems work while removing most static type distinctions and complex data rules. The smaller compiler is practical on machines that cannot host a complete CPL implementation.</p>"},
      {id:"word",title:"The word model",html:"<p>All ordinary values occupy one address-sized word. Programs use vectors for allocated storage, global vectors for shared names, procedures for control, and manifest constants for compile-time values.</p>"},
      {id:"truth",title:"Truth and representation",html:"<p>False is zero and true is represented by all one bits. The convention supports direct word operations but makes programs sensitive to target word size and representation when they depend on bit patterns.</p>"},
      {id:"runtime",title:"Runtime requirements",html:"<p>A portable implementation supplies a stack, static global vector, allocator, character-stream library, and machine-code interface. These form the practical environment beneath the source grammar.</p>"},
      {id:"uses",title:"Systems uses",html:"<p>BCPL builds operating systems, compilers, utilities, text tools, network programs, and workstation software. Its compact bootstrap encourages ports to new minicomputers and research machines.</p>"},
      {id:"porting",title:"Porting contract",html:"<p>A port must redefine word size, byte packing, character streams, device libraries, and machine linkage. Preserving grammar alone is insufficient when programs interpret words and addresses directly.</p>"},
      {id:"c",title:"Relationship to C",html:"<p>BCPL’s portable systems practice influences the American <a href='c-programming-language.html'>C</a> lineage. C restores static type distinctions and a more explicit byte-addressed model while retaining small-runtime and separate-compilation values.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>BCPL remains important in established Commonwealth systems and as a bootstrap language, even where C becomes more common. Its clearest legacy is proving that a deliberately small systems language can travel.</p>"}
    ],related:[{href:"cpl.html",kicker:"Predecessor",label:"CPL"},{href:"c-programming-language.html",kicker:"Related systems lineage",label:"C"},{href:"commonwealth-programming-languages.html",kicker:"Regional context",label:"Commonwealth Programming Languages"}],
    facts:[["Introduced","1967"],["Predecessor","CPL"],["Type model","One address-sized word"],["Allocation","Vectors"],["Shared names","Global vector"],["Required runtime","Stack, allocator, streams"],["Primary use","Portable systems software"],["Porting requirement","Redefine word and device profile"]]
  }),

  "applicative-autocode": foundationArticle({
    slug:"applicative-autocode",title:"Applicative Autocode",eyebrow:"Commonwealth functional language · 1968–1969",infoboxKicker:"Implemented ISWIM-derived language",
    lead:"Applicative Autocode is a British functional programming language implemented around 1968–69 from Peter Landin’s ISWIM ideas and the Commonwealth’s strong Turing and compiler institutions. It makes lexical functions, recursive definitions, lists, and interactive symbolic work practical before ML.",
    canon:"Its date, ISWIM inheritance, principal functional features, interactive character, and influence on ML are established. Exact institutional dialects remain open.",
    sections:[
      {id:"origins",title:"ISWIM inheritance",html:"<p>Peter Landin’s work supplies an expression-centered account of functions, lexical naming, and local definition. Commonwealth compiler groups turn those ideas into an implemented rather than purely notional language.</p>"},
      {id:"functions",title:"Lexical functions",html:"<p>Functions are ordinary lexically scoped values. A function may refer to bindings in its defining environment, supporting concise higher-order libraries and symbolic transformations.</p>"},
      {id:"recursion",title:"Recursive definitions",html:"<p>Recursive definitions express traversals, numerical series, and symbolic algorithms without labels or explicit machine stacks. Runtime storage management becomes correspondingly important.</p>"},
      {id:"expressions",title:"Expression structure",html:"<p>Conditional expressions return values, and local <em>where</em> definitions keep helper functions beside the expressions that use them. Programs read as nested evaluations rather than command sequences.</p>"},
      {id:"lists",title:"Lists and symbolic work",html:"<p>Lists provide a natural representation for formulas, trees, and variable-length symbolic data. The language is used for symbolic mathematics, language research, and experimental compilers.</p>"},
      {id:"interactive",title:"Interactive use",html:"<p>Time-sharing terminals permit short definitions to be entered, tested, corrected, and composed during one session. This conversational practice distinguishes it from card-bound scientific batch languages.</p>"},
      {id:"ml",title:"Path to ML",html:"<p><a href='ml-programming-language.html'>ML</a> appears in 1973–74 as a theorem-prover metalanguage with stronger type inference and algebraic data. Applicative Autocode provides both intellectual precedent and implementation experience.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The language remains smaller than the later ML ecosystem but establishes functional programming as an executable Commonwealth tradition. Its name also preserves a link to Britain’s broader Autocode culture.</p>"}
    ],related:[{href:"autocode.html",kicker:"Name and service tradition",label:"Autocode"},{href:"ml-programming-language.html",kicker:"Typed successor",label:"ML"},{href:"cpl.html",kicker:"Contemporary language",label:"CPL"}],
    facts:[["Implemented","c. 1968–1969"],["Principal influence","ISWIM"],["Scope","Lexical"],["Functions","First-class"],["Recursion","Supported"],["Compound data","Lists"],["Use mode","Interactive"],["Successor influence","ML"]]
  }),

  "occam": foundationArticle({
    slug:"occam",title:"occam",eyebrow:"Commonwealth concurrent language · c. 1983–1985",infoboxKicker:"Transputer process language",
    lead:"occam is a Commonwealth programming language for transputers and other explicitly concurrent systems. Derived from communications research and communicating-sequential-process theory, it describes bounded processes that synchronize through typed channels.",
    canon:"Its 1983–85 emergence, process-and-channel model, minimum profile, and transputer relationship are established. Implementations may add mediated protocols beyond the core.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Classified British stream languages, packet-switching research, and CSP theory converge with the transputer project around 1983–85. The result treats communication structure as the program’s primary architecture.</p>"},
      {id:"processes",title:"Static processes",html:"<p>The minimum profile creates processes statically so memory and topology are known before execution. Processes do not share writable variables when running in parallel.</p>"},
      {id:"channels",title:"Synchronous channels",html:"<p>Typed unbuffered channels synchronize sender and receiver. A core channel has exactly one sender and one receiver unless an implementation supplies an explicitly mediated protocol.</p>"},
      {id:"constructs",title:"SEQ, PAR, and ALT",html:"<p><em>SEQ</em> orders actions, <em>PAR</em> runs declared processes concurrently, and guarded <em>ALT</em> selects an available communication or timer event. Counted replication constructs regular process networks.</p>"},
      {id:"bounds",title:"Bounded language profile",html:"<p>Fixed arrays and static process structure permit calculation of storage and communication needs. The minimum profile has no recursion, heap, or shared writable state between parallel processes.</p>"},
      {id:"time",title:"Timers and determinism",html:"<p>Timers are ordinary guarded events. Deterministic process structures arise when communication relationships and alternatives are constrained, although external arrival order can still affect selected branches.</p>"},
      {id:"hardware",title:"Transputers",html:"<p>Compact processors with hardware communication links execute networks of occam processes. The language maps program channels onto local or physical links without claiming that every topology is cost-free.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>occam is a new specialist language rather than a universal Commonwealth standard. It is influential in parallel-machine design, embedded networks, scientific arrays, and the broader debate over message-passing computation.</p>"}
    ],related:[{href:"commonwealth-programming-languages.html",kicker:"Regional context",label:"Commonwealth Programming Languages"},{href:"computing-networks.html",kicker:"Communications context",label:"Computing Networks"},{href:"ml-programming-language.html",kicker:"Research contemporary",label:"ML"}],
    facts:[["Emergence","c. 1983–1985"],["Region","Britain and Commonwealth"],["Primary hardware","Transputers"],["Processes","Static"],["Channels","Typed, synchronous, unbuffered"],["Core constructs","SEQ, PAR, ALT"],["Recursion and heap","Absent in minimum profile"],["Shared writable state","Prohibited between parallel processes"]]
  })
});

const addFoundationRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const item of items) if (!article.related.some(existing => existing.href === item.href)) article.related.unshift(item);
};

addFoundationRelated("programming-languages",[
  {href:"plankalkul.html",kicker:"German foundation",label:"Plankalkül"},
  {href:"fortran.html",kicker:"American science",label:"FORTRAN"},
  {href:"cobol.html",kicker:"American administration",label:"COBOL"},
  {href:"cpl.html",kicker:"Commonwealth systems",label:"CPL"},
  {href:"c-programming-language.html",kicker:"Portable systems language",label:"C"}
]);
addFoundationRelated("rechenplan",[
  {href:"rechenplan-52.html",kicker:"1952 generation",label:"Rechenplan 52"},
  {href:"rechenplan-56.html",kicker:"1956 generation",label:"Rechenplan 56"},
  {href:"rechenplan-63.html",kicker:"1963 generation",label:"Rechenplan 63"},
  {href:"rechenplan-68.html",kicker:"1968 generation",label:"Rechenplan 68"},
  {href:"rechenplan-72.html",kicker:"1972 generation",label:"Rechenplan 72"},
  {href:"auswahlplan.html",kicker:"Administrative query language",label:"Auswahlplan"},
  {href:"planlauf.html",kicker:"Batch monitor",label:"Planlauf"}
]);
addFoundationRelated("planwerk",[{href:"planlauf.html",kicker:"Batch predecessor",label:"Planlauf"}]);
addFoundationRelated("commonwealth-programming-languages",[
  {href:"cpl.html",kicker:"Ambitious general language",label:"CPL"},
  {href:"bcpl.html",kicker:"Portable systems language",label:"BCPL"},
  {href:"applicative-autocode.html",kicker:"Functional precursor",label:"Applicative Autocode"},
  {href:"occam.html",kicker:"Concurrent language",label:"occam"}
]);
addFoundationRelated("american-programming-languages",[
  {href:"fortran.html",kicker:"Scientific language",label:"FORTRAN"},
  {href:"cobol.html",kicker:"Administrative language",label:"COBOL"},
  {href:"aerol-60.html",kicker:"Aerospace profile",label:"AEROL-60"},
  {href:"c-programming-language.html",kicker:"Systems language",label:"C"},
  {href:"unix.html",kicker:"Operating system",label:"UNIX"}
]);
addFoundationRelated("computing-networks",[
  {href:"unix.html",kicker:"Network operating environment",label:"UNIX"},
  {href:"occam.html",kicker:"Concurrent communication",label:"occam"}
]);
