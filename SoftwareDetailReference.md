# AltWWII Software and Programming Language Reference

## Purpose and authority

This document is the Phase I technical architecture for programming languages, translators, operating environments, libraries, and programming practice in the AltWWII setting. It consolidates material dispersed through the Setting Bible, Setting Timeline, the computing transcripts, character material, material-culture reference, and computing wiki articles. The historical account runs through the established 1985 endpoint, with later consequences included only where existing canon requires them.

**Current completion status:** Phase I is complete; compiler-ready language specifications are not. The present file fixes lineages, broad semantics, hardware constraints, and many connective-design decisions, but it is not by itself sufficient to implement every original language without further design work. Formal grammars, normative semantic tables, complete libraries, precise intermediate/object formats, worked programs, and executable conformance suites are governed by [Software Specification Development Plan](./SoftwareSpecificationDevelopmentPlan.md) and its future specification artifacts. A language may be called **implementation-ready** only after it passes every gate in that plan.

The document uses four status marks:

- **[C] Established canon:** explicitly fixed in an authoritative project source.
- **[I] Strong inference:** required, or very strongly implied, by established machines, institutions, or later systems.
- **[D] Connective design:** a new choice made here to remove an implementation ambiguity while preserving canon.
- **[O] Open question:** a materially consequential choice that remains unsettled.

A status mark governs the paragraph or table row in which it appears. Unmarked explanatory prose merely restates the nearest marked proposition. Phase I descriptions of historical languages identify their intended real-world lineage but are not normative semantic dependencies. Each historical language must pin an exact verified edition in the external-standard registry and specify every AltWWII deviation before it is implementation-ready.

### Source order

Conflicts are resolved using the project-wide authority order established by the Setting Bible:

1. a direct user declaration or correction, wherever it appears;
2. an assistant proposal explicitly accepted or built upon by the user;
3. the newest version of a detail when the first two rules do not settle the conflict;
4. a plausible but unconfirmed assistant proposal, which must remain marked tentative.

Within the same authority level, an intentionally established specialist reference controls its defined subject over a general summary. `SoftwareDetailReference.md` and its specification artifacts may therefore supersede an older computing summary, but never a higher-authority direct authorial correction. `transcript.md` remains the audit trail needed to determine whether a summary reflects a user declaration, accepted proposal, superseded version, or unconfirmed suggestion. Wiki articles are derivative summaries rather than independent canon authorities. Connective design in this document remains subordinate to all established canon.

The transcript's “Computing Race I–VIII” sequence is the principal technical source. Where it used provisional language names, this reference retains the name but marks it accordingly.

## Implementation threshold

A language is implementation-ready only when a future project can determine, without inventing its fundamentals:

- how source text is encoded and tokenized;
- what declarations, expressions, statements, and compilation units mean;
- which types and numeric representations exist;
- how storage is allocated and addressed;
- how procedures, recursion, errors, input/output, and concurrency operate;
- what object form, linker, runtime, monitor, or interpreter is required;
- how programs interact with files, devices, terminals, and networks;
- which behavior is portable and which is target-defined;
- what changed between revisions.

This is a technical history rather than a frozen standards document. Early generations therefore specify smaller languages and leave more work to the programmer. Later generations gain abstraction only when core memory, disks, terminals, operating systems, compiler construction, or microprocessors make it affordable.

## The five computing cultures

**[C]** The setting contains five durable computing cultures, each with a characteristic answer to what a program is.

| System | Governing conception | Characteristic lineages |
|---|---|---|
| Germany | The computer as a certified plan | Plankalkül → Rechenplan → Planform/Planwerk; Kurzplan; the civilian languages |
| Britain and Commonwealth | The computer as an information service | machine orders → Autocode/CLEO → CPL/BCPL/ML/occam |
| United States | The computer as a replaceable general tool | FORTRAN, COBOL, JOVIAL, LISP, BASIC, C/UNIX, Lambda, Smalltalk, SQL, Civic, Bridge tools |
| Japan and the Sphere | The computer as a controlled procedure | KEISAN, TEJUN, Gakushū and native-script research languages |
| Latin bloc | The computer as an intelligible instrument | ALGOL-Latin, LIA, Pascal/Modula, Occitan control languages, Marseille Prolog |

These cultures overlap. ALGOL, Simula, Pascal, C, Ada, Prolog, BASIC, and compiler research cross political borders. What remains distinct is the surrounding hardware, text representation, operating environment, procurement system, and default expectation of programmer responsibility.

## Generational chronology

| Period | Hardware and development environment | Principal language development |
|---|---|---|
| 1944–47 | relays and valves; tiny memories; switches, plugboards, paper tape; no general operating systems | machine orders, symbolic notations, surviving Plankalkül papers, Colossus configurations, ACE order notation |
| 1947–55 | stored programs, drums, delay lines, early libraries; cards and tape | Rechenplan 52, British autocodes, American assembly/compiler lines, Japanese procedural notations, Italian and Occitan symbolic systems |
| 1955–60 | magnetic core, transistors, batch monitors, reliable tapes and printers | Rechenplan 56 and Planform; Common Autocode and CLEO precursors; FORTRAN, COBOL, JOVIAL class; KEISAN and TEJUN; ALGOL and LIA-59 |
| 1960–65 | compatible families, disks, channels, interrupts, limited time sharing and remote terminals | Rechenplan 63/Planform II; CPL, CLEO, Conversational Autocode; FORTRAN IV, LISP, BASIC, PL/I; KEISAN 62/64 and TEJUN 63/65; ALGOL-Latin 62 and LIA 63 |
| 1965–70 | multiprogramming, packets, minicomputers, integrated aerospace computers | Rechenplan/Planwerk 68; Simula influence; BCPL and Applicative Autocode; Lambda 68; KEISAN 68 and TEJUN 69; ALGOL-Latin 68, LIA 67/69, Marseille logic work |
| 1970–75 | microprocessors, workstations, interactive systems, databases, local networking | Rechenplan/Planwerk 72 and Auswahlplan; ML; C/UNIX and Lambda 72/74; KEISAN 72 and TEJUN 73; Prolog, Pascal, LIA 73 |
| 1975–80 | home micros, ROM interpreters, cassettes and disks, graphics and sound | BASIC garden; Kurzplan 77; 計算三六, 手順三七, 学習三八; Commonwealth BASIC; consumer Pascal/BASIC; international Prolog |
| 1980–85 | 16/32-bit personal systems, graphical workstations, internetworking, UNICODE 80 | German civilian-language explosion and Zivil-Planform 82; Civic and Bridge toolchains; C++, Ada, SQL; 学習四一, 計算四二, 手順四三; Common ML and occam; industrial Prolog |

## Shared implementation conventions

### Source media

**[C]** Source entry progresses from switches and plugboards through paper tape and cards, then teleprinters, interactive terminals, cassette/disk editors, and graphical environments. A language revision does not retroactively require the newest medium. Rechenplan 56, FORTRAN I, early KEISAN, and LIA-59 must be usable as card or paper-tape batch languages. Interactive editing becomes ordinary first at leading British and American institutions in the 1960s, then on consumer machines after 1975.

### Object programs and linking

**[D]** Unless a lineage states otherwise, a 1950s compiler emits relocatable machine routines plus a loader control record; a 1960s compiler emits named object modules with external-symbol and relocation tables; and a late-1970s compiler may emit native object code, a documented intermediate form, or compact bytecode. Separate compilation never implies binary compatibility across unrelated machines.

### Character identity

**[C]** Text portability is harder than translating keywords. Germany's 6/12-bit character order, American ASCII/EBCDIC split, Japanese compact and multibyte registries, British machine diversity, and the Latin eight-bit code remain incompatible. UNICODE 80 defines sixteen-bit abstract character identities and transfer mappings, not a universal processor word or mandatory file encoding. Programs must therefore distinguish source-character identity, display glyph, external interchange, and machine representation.

### Errors

**[D]** Three error classes recur across language families:

1. translation errors, which prevent object generation;
2. checked runtime conditions such as range, file, arithmetic, or device failure;
3. environmental failures reported by the monitor, operator, or device controller.

Early systems commonly stop the job and print an address or source reference. Recovery and typed exception handling appear only when operating environments can preserve files, checkpoints, and call state.

# German lineages

## Plankalkül and the pre-Rechenplan inheritance, 1944–52

**[C]** German high-level-language development descends conceptually from Konrad Zuse's Plankalkül, combined after the war with Göttingen stored-program work, Telefunken military electronics, analog control, and punched-card administration. Plankalkül supplies typed quantities, arrays, structured plans, and the idea that a program should describe a calculation independently from relay wiring. It is an intellectual parent, not a widely deployed wartime compiler.

In 1947 German programming has four explicit levels: mathematical specification, Plankalkül-influenced plan description, manual machine preparation, and operation/test. Scientists, `Planer`, machine coders, operators and maintenance engineers are already distinct roles. Administrative work instead uses card layouts, plugboards, sorter/tabulator routes and categorical codes. Neither practice should be mistaken for a stored-program language.

**[I]** Surviving Plankalkül documents are normalized during 1947–50 into linear card/tape notation. Two changes are unavoidable: two-dimensional manuscript subscripts acquire explicit delimiters, and hardware-facing input/output is separated from mathematical expressions. This work produces laboratory translators and the vocabulary later used by Rechenplan.

## Rechenplan 52

**[C]** Rechenplan 52 is the first practical high-level German specification. It targets Zuse relay engineering machines and early Göttingen/Telefunken stored-program systems with drum or small electronic memory.

**[D]** Its implementation core is intentionally narrow:

- statically allocated scalar integers, fixed-point and floating-point values;
- one- and two-dimensional fixed-bound arrays;
- named labels and conditional transfer;
- counted repetition;
- nonrecursive subroutines with copy-in/copy-out scalar parameters;
- card/tape numerical input and printer/punch output;
- no records, heap, strings, modules, or general recursion.

Source uses 80-column cards or equivalent tape lines. A semicolon-terminated logical statement may continue across at most eight cards. Identifiers use uppercase `A` through `Z` and digits and are significant to eight characters. The translator emits Planform I; scarce-memory target binders may translate one routine at a time and require an overlay plan that is invisible to source semantics. Arithmetic overflow, impossible input, unset reads, failed bounds checks, and invalid result copy-out halt the job.

The generation solves symbolic calculation while still requiring the programmer to declare ranges, radix, precision, scale, rounding, array bounds, and formats. Machine offices remain responsible for storage placement, overlays, physical peripheral binding, and certified target libraries.

**[C]** Rechenplan 52's actual production route is initially mixed human/machine: a scientist supplies the typed plan; a `Planprüfer` checks dimensions, ranges and forms; a limited translator creates an intermediate operation list; a coding office generates target instructions; operators prepare tape or stored memory. Full automatic translation spreads by machine family only during 1953–55. German low-level software simultaneously standardizes mnemonics, symbolic storage, automatic address assignment, standard numerical routines and signed test/revision records.

**Specification status.** The implementation-oriented draft is indexed by [the software-spec catalog](software-specs/catalog.json) and defined in [the Rechenplan 52 package](software-specs/languages/de/rechenplan-52/manifest.json). It pins source media, grammar, exact type and rounding rules, runtime state, procedure ABI, formatted I/O, Planform lowering, diagnostics, examples, and conformance metadata. Its canon and historical gates pass; final lexer/parser fixture execution, the verified Planform I dependency, and independent clean-room review remain open, so it is not yet labeled implementation-ready.

## Rechenplan 56

**[C]** Rechenplan 56 is the first production national language standard. After 1957 every accepted major general-purpose German computer must provide a certified compiler or a documented route to Planform.

### Lexical and syntactic core

**[C]** Representative reserved words include `GANZZAHL`, `FESTZAHL`, `GLEITZAHL`, `WAHRHEITSWERT`, `ZEICHEN`, `FELD`, `SATZ`, `WENN`, `SONST`, `FÜR`, `SOLANGE`, `WIEDERHOLE`, `VERFAHREN`, `EINGABE`, `AUSGABE`, and `ENDE`.

**[D]** Portable source uses uppercase letters; whitespace separates words but is otherwise insignificant; semicolon ends a statement; comma separates items; parentheses group expressions and calls; square brackets select array elements; `:=` assigns. Comments begin with `BEMERKUNG` and end at the statement terminator. Decimal literals use a point in source despite comma-formatted printed output, avoiding punctuation ambiguity in lists.

### Types and storage

**[C]** The language is statically and more strongly typed than contemporary American commercial languages. It distinguishes binary integers, decimal or binary fixed-point, floating-point, Boolean, character, arrays, and fixed-layout records. Engineering libraries may attach declared units. The compiler checks dimensions, statically knowable bounds, record fields, decimal/binary conversion, and procedure parameters.

**[D]** All objects have static lifetime in the base language. Procedure locals occupy a fixed activation area determined at link time; recursion is rejected. Arrays are row-major in the portable semantic model, though a target may transpose internally if input/output and Planform behavior remain identical. Records preserve declaration order. `ZEICHEN` is an abstract source character lowered to the target's 6- or 12-bit repertoire; unavailable characters are a translation error.

### Procedures and control

**[D]** Parameters are explicitly `WERT` (value) or `ERGEBNIS` (result). Arrays and records are passed by reference to fixed storage unless declared read-only. Boolean expressions short-circuit only when written with the explicit conditional operators; ordinary conjunction may evaluate both operands, preserving predictable early compiler behavior. `FÜR` bounds are evaluated on loop entry. `SOLANGE` and `WIEDERHOLE` are available in RP-W and RP-V; RP-S requires a declared or statically established bound.

### The three profiles

**[C]** One lexical and compiler system exposes three application profiles:

- **RP-W (Wissenschaftlicher Rechenplan):** floating point, complex values where supported, vectors, matrices, interpolation, differential equations, orbital/ballistic libraries, numerical integration and table generation.
- **RP-V (Verwaltungs-Rechenplan):** exact decimal fields, records, keyed files, sorting/merging, reports, dates, districts, currencies and commodities.
- **RP-S (Steuerungs-Rechenplan):** fixed allocation, bounded loops, devices, interrupts/events, state tables, explicit I/O ordering, timing estimates and fail-safe branches; it excludes recursion, dynamic size, unbounded iteration, implicit conversion, and unpredictable library calls.

**Specification status.** The standalone [Rechenplan 56 package](software-specs/languages/de/rechenplan-56/manifest.json) defines its exact DISPLAY6 source, grammar, scalar/unit/array/matrix/record types, four parameter modes, evaluation and trap rules, RP-W/RP-V/RP-S legality, file and control environments, Planform ABI/lowering, diagnostics, and initial profile fixtures. Its canon and historical gates pass; comprehensive executable conformance, final Planform verification, and clean-room implementation review remain pending.

### Planform I and Planlauf

**[C]** Compilation is `Rechenplan source → typed Planform → optimized machine plan → native instructions`. Planform records operations, types, calls, control flow, storage, I/O classes and required libraries. Manufacturers supply back ends and validation tests. Peripheral behavior and precision may remain target-specific.

**[D]** Planform I is a serialized typed three-address code divided into procedure records. Every value has a declared type and symbolic storage identity. Branches target numbered basic-plan labels. Calls name a library or procedure plus ordered argument descriptors. It contains no general stack instruction because Rechenplan 56 forbids recursion.

**[C]** The Planlauf batch monitor reads job identity, security class, profile, compiler, libraries, media, output destination and time limit; loads the compiler and program; accounts for time; and prints diagnostics and an audit. The programmer normally receives listings rather than direct machine access.

## Rechenplan 63 and Planform II

**Specification status.** The implementation drafts are indexed in the software catalog as [Rechenplan 63](software-specs/languages/de/rechenplan-63/manifest.json) and [Planform II](software-specs/foundations/planform-2/manifest.json). Rechenplan 63 fixes its Z12 source, 98-production grammar, module/version/interface rules, nominal record and enumeration types, checked exception/unwind semantics, bounded recursion, three profiles, Planform lowering, diagnostics, examples, and conformance inventory. Planform II fixes packed 12-bit serialization, 17 type kinds, 64 typed stack opcodes, frame/module/exception ABI, verification, canonical disassembly, and 20 foundation cases. Executable whole-suite fixtures and clean-room review remain pending, so both are drafts rather than implementation-ready releases.

**[C]** ERO 63 defines a shared German architectural order rather than a single binary-compatible product: normally 48-bit scientific words, 24-bit half-words, 6-bit basic and 12-bit extended characters, packed decimal, channel I/O, supervisor/user states, interrupts, core memory, and Planform object modules.

Rechenplan 63 adds block scope, separately compiled procedures, named modules, public/private interfaces, records, enumerations, stronger checks, standardized exception conditions, compiler source references, and type-to-machine linkage. RP-W permits limited recursion; RP-S permits it only with a statically fixed maximum depth. Dynamic allocation is confined to specialized scientific libraries.

**[D]** A compilation unit is a `MODUL` containing declarations and procedures. An `AUSFUHR` list exports names; all others are private. Imported interfaces are checked by a structural signature containing name, parameter mode, type, dimensions, exception set, and required profile. Linkers reject signature mismatch rather than silently adapting calls.

**[C]** Planform II becomes stack-oriented under Bauer–Samelson influence. It represents typed operations, evaluation stacks, procedure frames, records, structured control flow, exception paths, device classes, and timing/storage annotations. A new machine needs a generator, standard runtime, peripheral modules, and validation suite.

**[D]** Planform II procedure frames contain arguments, fixed locals, temporary-stack maximum, saved return state, and exception continuation. Heap descriptors exist only for approved RP-W library objects. Exception transfer unwinds to the nearest declared handler; otherwise Planwerk terminates the job and emits a source/Planform backtrace.

## Rechenplan 68

**Specification status.** The implementation drafts are indexed as [Rechenplan 68](software-specs/languages/de/rechenplan-68/manifest.json) and the [Planwerk 68 service ABI](software-specs/foundations/planwerk-68/manifest.json). Rechenplan 68 mechanically composes a 117-production grammar over the pinned Rechenplan 63 grammar, and fixes explicit interfaces, conditional compilation, bounded RP-W workfields, static RP-S process/state control, typed channels/events, deadline and fallback behavior, Planform/Planwerk lowering, diagnostics, and 24 cases. The Planwerk ABI defines 15 service types, 13 exceptions, 32 typed calls, transactional files, handles, checkpoints, audit, scheduling, and 18 cases. Executable whole-suite fixtures and independent clean-room review remain pending.

**[C]** Rechenplan 68 adds standardized modules and separately compiled libraries, versioned layouts, interface declarations, events, channels, processes, standardized error handling, noncritical controlled dynamic storage, cross-reference listings, conditional compilation, and mandatory compiler/runtime version identity.

RP-S gains `EREIGNIS` (event), `VORGANG` (process), `KANAL` (channel), `SIGNAL`, `ZUSTAND` (state), `FRIST` (deadline), `AUSFALL` (failure), and `ERSATZ` (fallback). Its `Laufnachweis` reports worst expected time, memory, interrupt latency, channel use, resource conflicts, uncertified loops, and assembly calls. This is certification evidence, not a mathematical proof.

**[D]** RP-S processes are statically created. A process blocks on an event or channel receive and resumes at an explicitly named empty-stack state. Channels are typed FIFO queues with fixed capacity and `WARTEN`, `VERWERFEN`, or `AUSFALL` overflow policy. Priority is fixed at configuration time; lower numeric priority runs first and static process ordinal breaks equal-priority ties. An operation completing at its deadline wins over timeout. The runtime performs no garbage collection and allocates no memory after certified initialization.

**[C]** Simula 67 survives in autonomous Norwegian institutions inside the German sphere. Its classes, instances, inheritance, and simulation processes influence the RP-W `MODELLWESEN` library without making ordinary Rechenplan object-oriented.

## Rechenplan 72 and Auswahlplan

**Specification status.** The implementation drafts are indexed as [Rechenplan 72](software-specs/languages/de/rechenplan-72/manifest.json), [Auswahlplan 72](software-specs/languages/de/auswahlplan-72/manifest.json), and the [Planwerk 72 distributed ABI](software-specs/foundations/planwerk-72/manifest.json). Rechenplan 72 composes to 126 productions and fixes tagged variants, controlled references, link-time templates, exception ancestry, standard devices, and distributed effects with 22 cases. Auswahlplan is a standalone 40-production read-only query language with bag/EINMAL semantics, four explicit missing variants, authorized logical joins/groups/order, deterministic error/order behavior, bounded work, and 24 cases. Planwerk 72 adds 16 versioned queue/replica/configuration/session/log/health services and 16 cases. Whole-suite executable fixtures and independent clean-room review remain pending.

**[C]** Rechenplan 72 consolidates explicit modules, exported/private declarations, variant records, controlled references, parameterized library procedures, separate compilation, source/object version IDs, messages/channels, standard devices, and more precise exceptions. RP-W, RP-V, and RP-S remain the three profiles.

**[D]** A controlled reference is typed, may be null, and may refer only to an object whose declared lifetime encloses the reference. Pointer arithmetic is impossible. RP-W heap regions are explicit module-owned arenas reclaimed as a unit; the standard does not require tracing garbage collection. Variant records carry a checked discriminant. Parameterized procedures accept types and compile-time constants but are instantiated at link time rather than supporting unrestricted runtime polymorphism.

**[C]** RP-V adds the declarative query sublanguage `AUSWAHLPLAN`. It expresses selected fields, source record sets, predicates, grouping, ordering and authorized joins while permitting hierarchical or indexed storage underneath.

**[D]** Auswahlplan has set semantics only when `EINMAL` is specified; otherwise it preserves duplicate records, which is essential for ledgers. Missing fields are not null values: a schema must declare `UNBEKANNT`, `NICHTANWENDBAR`, or absence as an explicit variant. Updates remain procedural RP-V operations with audit records; Auswahlplan 72 is read-only.

## Planwerk 64/68/72 and development tools

The portable Rechenplan-facing portions are specified by the [Planwerk 68 typed service ABI](software-specs/foundations/planwerk-68/manifest.json) and its [Planwerk 72 distributed extension](software-specs/foundations/planwerk-72/manifest.json); native supervisor entries remain machine-specific.

**[C]** Planwerk is a specified operating-system family, not one portable binary. Planwerk 64 supplies protected supervisor mode, multiprogrammed batch, queues, spooling, library loading, accounting, classification, checkpoints, audit, remote jobs, and common object/tape formats. Planwerk 68 adds disk files, user protection, selected terminal sessions and versioned modules. Planwerk 72 adds network queues, replication, configuration control, access logs, and device health monitoring.

**[C]** The lunar program establishes the `Programmbuch`: source, compiler, target, library revisions, tests, anomalies, workarounds, memory map, hardware revision, and release signatures. Flight executables are independently reviewed, simulated, frozen, reproduced bit-for-bit, and checked against a signed master listing.

**[D]** Standard development tools are `PLANPRÜFER` (syntax/type check without code generation), `PLANBINDER` (linker), `ABLAUFSPUR` (instrumented execution trace on noncritical builds), `SPEICHERBILD` (memory map/dump formatter), and the target-specific `MASCHINENPLAN` assembler. These names are connective design; their functions are required by canon's certification practice.

## Kurzplan 77

The implementation-level definition is split between the [Kurzplan 77 language package](software-specs/languages/de/kurzplan-77/manifest.json) and the [KPT77 token-image and virtual-machine package](software-specs/foundations/kurzplan-vm77/manifest.json).

**[C]** Full Rechenplan is too large for late-1970s home computers. Kurzplan 77 is a new interpreted German home/school language with numbers, strings, arrays, procedures, conditions, loops, graphics, sound, cassette/disk operations and controllers. It shares familiar words such as `WENN`, `SONST`, `FÜR`, `WIEDERHOLE`, `EINGABE`, `AUSGABE`, `ZEICHNE`, `TON`, and `ENDE`, but it is not a Rechenplan profile.

**[D]** The portable Kurzplan machine uses 16-bit signed integers, optional 32-bit floating point, length-counted strings, zero-origin arrays, and a compact token stream. Variables spring into existence on first assignment; a suffix distinguishes string variables. Procedures have local variables and may recurse only if the host has sufficient stack. Runtime errors stop the current command and return to the immediate prompt without destroying the program. Graphics use a normalized integer screen coordinate system mapped by the host. File and device commands are capability-tested at runtime.

The minimum interpreter fits in 16 KiB ROM with 8 KiB RAM by omitting floating point, disk, and high-resolution graphics. A complete profile expects 32–64 KiB RAM. Cassette storage serializes tokenized source; disk systems may also store a disposable KPT77 bytecode cache alongside the authoritative token stream.

## Civilian German languages, 1980–85

The shared implementation contract is the [Zivil-Planform 82 typed object and civilian-service specification](software-specs/foundations/zivil-planform-82/manifest.json). Individual language packages bind their source semantics and runtimes to this foundation.

**[C]** The 1982 `Zivilsprachenrichtlinie` adopts “certify uses, not ideas.” Weapons, spacecraft, nuclear plants, central MOSAIK, military communications and automated rail remain certified Rechenplan domains. Civilian languages may vary if they preserve interface provenance, character/data export, and regulated-device controls. Zivil-Planform 82 supplies integers, floats, strings, arrays, records, calls, graphics, files, errors, network requests and foreign-library calls.

| Language | Canonical purpose | Minimal implementation identity **[D]** |
|---|---|---|
| [Werkcode 80](software-specs/languages/de/werkcode-80/manifest.json) | C/BCPL-influenced systems and micros | statically typed values plus untyped address-sized `ORT`; manual allocation; pointer arithmetic; procedures; structs; direct Zivil-Planform and certified-library calls; no bounds checks by default |
| [Lehrplan 81](software-specs/languages/de/lehrplan-81/manifest.json) | Pascal/ALGOL structured education and business | block scope, enumerations, subranges, sets, records, variants, typed files, nested procedures; deterministic reference counting only for optional strings |
| [Folge 81](software-specs/languages/de/folge-81/manifest.json) | ML/Lambda-influenced typed functional work | strict evaluation, inferred local types, explicit module signatures, algebraic variants, pattern matching, immutable values; effects through typed Zivil-Planform service objects |
| [Schluss 82](software-specs/languages/de/schluss-82/manifest.json) | Prolog-influenced rules and diagnosis | facts/rules/goals, unification without occurs-check in the standard fast engine, depth-first left-to-right search, chronological backtracking, cut-like `SCHNITT`, foreign predicates for Planform records |
| [Klasse 82](software-specs/languages/de/klasse-82/manifest.json) | Simula/Smalltalk objects, simulation and graphics | classes, single inheritance, virtual methods, object references, message syntax, region-based object heap; deterministic finalization but no required tracing collector |
| Bildschrift 83 | windows, drawing, animation and games | event-driven scene/window objects, sprites, paths, text and sound resources; visual editor serializes a textual Zivil-Planform-bound module |
| Nachricht 84 | messages and distributed programs | typed processes, bounded mailboxes, send/receive/select, timeout, hierarchical service names; at-most-once local delivery and explicitly acknowledged remote delivery |

These definitions are connective design: canon fixes the names, inspirations, dates, purposes and interoperability, but not their complete semantics.

## Plan Austral 82

**[C]** Argentina places Spanish source over the German civilian stack. Plan Austral 82 descends from Kurzplan and Zivil-Planform, with `SI`, `SINO`, `PARA`, `MIENTRAS`, `LEER`, `ESCRIBIR`, `PROCEDIMIENTO`, `REGISTRO`, and `FIN`; its data, modules, files, calls, object format, errors, Rechenplan linkage and Weltnetz messaging remain German-derived.

**[D]** Plan Austral is statically typed for compiled modules but permits an untyped immediate shell for education. Its compiled language is a Spanish surface dialect of Lehrplan 81 with Kurzplan graphics and string conveniences. A canonical interchange tool must be able to translate declarations and statements losslessly between Plan Austral and a normalized Lehrplan form, except comments and user-selected identifier spelling. This explains how Argentine firms localize source while retaining German libraries and diagnostics.

# British and Commonwealth lineages

## Machine orders, Colossus, ACE, Manchester and Cambridge

**[C]** Britain preserves the first complete postwar computing ecosystem by joining surviving Colossus stream processing, Turing's ACE design, Manchester storage, Cambridge service computing, LEO business analysis, signals work, and Commonwealth programme libraries. It does not impose one national language.

**[I]** Colossus remains configured chiefly by switches, plugboards, and paper-tape patterns; its “program” describes stream transformations rather than a stored general algorithm. ACE and Manchester programmers use numeric or mnemonic order codes, absolute memory plans, and paper tape. Cambridge's library culture adds relocatable subroutines and conventions for passing accumulators, addresses, and return control. These incompatible low-level practices create Britain's later translator expertise.

**[C]** ACE coding is scheduled around delay-line timing and explicit data movement. Manchester begins with accumulator orders, direct addresses and diagnostic patterns for storage. Cambridge emphasizes standard routines, symbolic initial orders and computing as a service. The Commonwealth Programme Library (c. 1951–52) physically distributes printed descriptions, punched-tape masters, test data, corrections, machine versions and translation notes. A routine's contract includes inputs, outputs, memory, known errors and call method.

## Autocode family

**[C]** “Autocode” is a family name: Manchester, Mercury, ACE Automatic Orders, Elliott and Commonwealth variants. Common Autocode 58/Commonwealth Autocode defines a source subset rather than one implementation. It provides formulas, variables, loops, conditions, arrays, subroutines, mathematical functions and limited formatted I/O. It is easy to use but weakly typed and costly to port where precision, array limits, I/O, and libraries differ.

**[D]** The common semantic floor uses floating-point numeric variables by default, explicitly declared integer indices, one-origin fixed arrays, labels, conditional transfers, counted loops and nonrecursive subroutines. Evaluation order is target-defined except where parentheses force it. A `LIBRARY` call may expose target extensions. Portable programs may not depend on word overflow, character collation, or the order of side effects in expressions.

Commonwealth Autocode of the 1960s adds procedures, symbolic debugging and stable formatted I/O. Conversational Autocode (1964–65) provides line-oriented editing, immediate compilation, short diagnostics and plotting over remote multi-access terminals. It uses the same numeric core but deliberately omits raw addresses and machine orders. It survives into the late 1970s beside Commonwealth BASIC.

## LEO commercial languages and CLEO

**[C]** LEO's language line grows from symbolic assembly and report description into CLEO: named records, exact decimals, tape and indexed files, sorting, reports, schedules, exception totals, audit, operator intervention, restart and later online transactions. It assumes a professional systems analyst rather than English readability by executives.

**[D]** A CLEO program has `RECORD`, `FILE`, `PROCESS`, and `REPORT` divisions. Decimal fields declare digits and scale; arithmetic rounds only at an explicit `ROUNDED` destination. Files are sequential, indexed-sequential, or terminal transaction streams. Every batch defines control totals checked at close. An `EXCEPTION` clause routes rejected records to a named file or operator station. Restart checkpoints commit file positions and totals together, providing recovery without general transactions in early versions.

## CPL and BCPL

**[C]** CPL (1963–64) is an ambitious block-structured language for science, systems, symbols, compilers and complex data. It has recursion, records, references, arrays, lists, typed procedures, separate compilation and restricted user operators, but is difficult to compile. BCPL (1967) deliberately removes much of that complexity and becomes a portable systems language for operating systems, compilers, utilities, text, networks, minis and workstations.

**[D]** AltWWII CPL retains static types and lexical scope; references are typed but storage disposal is implementation-defined. BCPL has one address-sized `word` type, vector allocation, global vectors, procedures and manifest constants. Boolean true is all-one bits and false zero. Its runtime requires a stack, static global vector, allocator, character-stream library and machine-code interface. Moving BCPL requires redefining word size, byte packing and device libraries, not source grammar.

## Applicative Autocode, ISWIM and ML

**[C]** Landin's ISWIM work and the stronger Turing/compiler establishment yield an implemented Applicative Autocode around 1968–69: lexical functions, recursive definitions, conditional expressions, local `where` definitions, lists, symbolic mathematics and interactive use.

ML appears around 1973–74 as the metalanguage of a theorem prover. It has first-class functions, lexical scope, recursion, symbolic data, interaction, inference of many local types, explicit public interfaces and pattern-like decomposition. By 1983–84 Common ML begins stabilizing modules, types and libraries across the Commonwealth.

**[D]** Early ML is strict, uses Hindley–Milner-style principal types for the nonimperative core, and represents algebraic values as tagged heap objects. Pattern matching is ordered top-to-bottom and must be exhaustive or raise `Match`. Mutable references and I/O are monomorphic runtime primitives, avoiding unsound generalized mutable values. Memory management is tracing garbage collection on large hosts; small implementations may use semispace copying or a fixed heap and explicit top-level restart. Common ML standardizes exception values, opaque module signatures, separate compilation metadata and a portable character-stream interface.

## Stream/control languages and occam

**[C]** Classified 1950s British stream languages describe characters, counters, matches, timing windows, device actions and routing. Later communications research, packet switching and CSP lead to occam and transputers around 1983–85. Occam describes parallel processes, channels, synchronization and deterministic structures.

**[D]** The minimum occam profile has statically allocated processes; synchronous typed unbuffered channels; sequential `SEQ`, parallel `PAR`, guarded `ALT`, counted replication, timers and fixed arrays; no recursion, heap or shared writable state between parallel processes. A channel has exactly one sender and one receiver unless an implementation supplies an explicitly mediated protocol. This lets memory and communication bounds be calculated for compact transputers.

## Commonwealth BASIC, Pascal, COBOL and translation practice

**[C]** Commonwealth BASIC defines a late-1970s minimum for arithmetic, strings, loops, arrays, graphics, sound and files while allowing vendor extensions. Pascal dominates disciplined education; COBOL and CLEO administration; BCPL/C systems; ML and Prolog research. Britain becomes the principal cross-bloc source translator, compiler-compiler and gateway culture.

**[I]** A British port is delivered with a source-dialect declaration, target numeric/character profile, conformance tests, library substitution report and known deviations. This practice matters more than pretending that “the same language” makes binaries or files compatible.

# American lineages

## Assemblers, interpretive systems and compiler routines, 1947–55

**[C]** American software first replaces numeric addresses with symbolic mnemonics and names. Short Code and Speedcoding trade execution speed for easier mathematical programming. Hopper's A-0-like compiler work occurs around 1953 in this timeline and lets a program name library routines that the compiler assembles into an executable. No national high-level standard exists by 1955.

**[D]** A representative early assembler performs two passes: assign addresses to labels, then emit instructions and relocation notes. An interpretive mathematical system stores compact operation codes and numeric operands and dispatches them through a resident interpreter. A-0-style compilation is library composition, not parsing a later general-purpose grammar: named routines carry required storage, arguments and fixups. These three implementation models remain separate even when contemporary writers call all of them “automatic coding.”

## FORTRAN

**[C]** American FORTRAN appears in production around 1958, roughly one year later than familiar history. FORTRAN I supplies algebraic expressions, integer/float variables, arrays, loops, branches, subprograms and formatted I/O, with optimization good enough to challenge hand coding. FORTRAN II (1959–60) strengthens separate subroutines, libraries, debugging and assembly linkage. FORTRAN IV becomes the stable 1960s scientific language.

**[I]** The intended Phase I profile has static storage by default; column-oriented punched-card source; pass-by-reference subprogram arguments; one-origin column-major arrays; arithmetic `DO`; formatted records; and implementation-defined integer/real word widths. This list is descriptive rather than a complete standard. The compiler-ready package must pin the exact FORTRAN edition for each period. AltWWII aerospace libraries add trajectories, coordinates, fluid dynamics and telemetry. Later standard revisions coexist with old dialects because validated scientific programs are expensive to replace.

## Hopper compiler line and COBOL

**[C]** Hopper's compiler tradition and the 1959 standardization effort produce COBOL in 1960. It separates data description from procedure, uses English-like statements, exact decimals, records, files and reports, and becomes dominant in federal, banking, insurance, retail, railway and military-logistics systems.

**[I]** The intended COBOL lineage retains divisions, pictures, paragraphs, sequential/indexed files and decimal arithmetic. This is not a substitute for a pinned edition. Portability is source-level: file organization, collating sequence, character set and peripheral control remain environment clauses. AltWWII's continuing American platform diversity makes these declarations operationally important rather than ceremonial.

## JOVIAL-class aerospace languages and Ada

**[C]** A JOVIAL-class language appears around 1959–60 for radar, command displays, guidance simulation and large contractor teams. It supports fixed records, arrays, bit fields, procedures, devices, predictable allocation, real-time tasks and assembly insertion. The final early service name remains open. JOVIAL persists into 1985; Ada's 1983 standard consolidates newer military work.

**[D]** Until the name is fixed, implementations shall label the common semantic profile `AEROL-60`, not claim that JOVIAL itself is canonically renamed. It uses static allocation, explicit word/bit layouts, fixed-priority tasks, interrupt entry procedures, no general recursion, and link-time memory maps. Ada retains its historical package, generic, task, exception, strong-type and representation-clause model, with Aerospace Force profiles restricting dynamic allocation and tasking where flight certification requires it.

## LISP, BASIC, Forth, Pascal, Smalltalk and SQL

**[C]** These historical languages survive. LISP is the dynamic symbolic/AI language; BASIC spreads from Dartmouth time sharing into incompatible ROM dialects and Tiny BASIC; Forth serves tiny interactive control systems; Pascal serves education; Smalltalk shapes object-oriented graphical work; SEQUEL/SQL develops declarative relational access. These labels establish lineages and roles only. Their exact editions and AltWWII deviations must be pinned before implementation.

American BASIC has no universal graphics, sound, string, disk or memory-access standard. A portable listing must declare a dialect. SQL is initially a research and institutional query language, not a home language. Smalltalk requires workstation-scale memory, bitmap display, pointing device and a managed object heap; it cannot be projected onto 1950s or small 1970s machines without becoming a different language.

## C and UNIX

**[C]** C becomes America's portable machine-control language for UNIX, systems, compilers, networks, minis and professional micros. It does not replace FORTRAN, COBOL, JOVIAL, Lambda or LISP.

**[I]** The intended 1970s C lineage includes weak static types, addressable bytes, array-to-pointer conversion, structs/unions, manual allocation, preprocessing, separate translation and a small runtime. This is a profile summary, not a normative C edition. Because Bridge, German and Japanese targets do not all share an eight-bit internal character, a deviation package must define `CHAR_BIT`, integer widths, byte order and external text conversion. “Portable C” means source conditionalization and stable library interfaces, not identical object representation.

## Lambda 68, 72 and 74

**[C]** The Princeton–MIT–Stanford Lambda Project begins around 1965–66 under Church's patronage; younger engineers implement it. Lambda 68 is statically and explicitly typed, lexically scoped, strict, functional, interactive and compiled. It has closures, recursion, immutable bindings, lists/trees, higher-order functions and separate libraries, with mutable arrays/files/devices isolated behind a store interface. It lacks mature inference, algebraic data, pervasive patterns, laziness and pure I/O.

Lambda 72 adds tuples, records, tagged variants, local inference, explicit public types and typed controlled effects. Lambda 74 adds modules, stronger tagged data, pattern decomposition, cross-platform compilers, C links, interactive debugging and symbolic mathematics.

**[D]** Lambda's portable runtime uses tagged heap objects, lexical closure records and tracing collection. Numeric arrays may be unboxed behind a typed store handle. Evaluation is left-to-right call-by-value. Pattern alternatives are tested in source order. Effects are calls through values of abstract types `Store`, `File`, `Terminal`, and `Device`; they cannot be manufactured by pure code. Separate modules publish type and value signatures, plus a runtime representation version. This makes the functional core implementable without retroactively adding modern monads.

## Bridge and Interlink toolchains

**[C]** Martin Avery Keene's Interlink begins with BASIC, Pascal, C, cross-assemblers, disks, terminals and device abstraction. Bridge is a licensed portable operating environment; IBM's 1981 Bridge/16 creates the largest compatible market. Bridge's purpose is stable interfaces, translators and software survival across temporary hardware. It is an environment, not a new general-purpose language.

**[D]** Bridge/16 specifies a 16-bit application binary interface: relocatable modules, named imports/exports, stack calls, device-independent byte streams, hierarchical files, process launch/return codes, terminal capabilities, and installable drivers. Hardware profiles define byte order and extended arithmetic. The source-portability contract covers C, Pascal and BASIC APIs; binary portability is guaranteed only within a declared Bridge processor profile. The linker records required Bridge version and device capabilities. This prevents the implausible claim that one binary runs on every licensed processor.

## Civic and Concord

**[C]** Elias Rowan Mercer's Concord architecture is closed and integrated. Civic is its application language; Concord One appears in 1978 and graphical Concord Meridian in 1983. Authorized development machines, proprietary objects, controlled publication and interface conventions create the “gated republic.” Meridian supplies windows, icons, pointing, typography, networking and sound.

**[D]** Civic 78 is a statically typed, block-structured application language derived from Pascal with records, enumerations, strings, resource declarations and event procedures. It forbids arbitrary pointers in ordinary applications; privileged system modules use a separate native interface. Applications compile to signed Concord object modules and call versioned system services.

Civic 83 adds classes with single implementation inheritance, interfaces, managed object references, window/view/resource literals, event dispatch and exceptions. The runtime uses reference counting plus cycle detection during idle periods; resource files store text, images, sounds and layout separately from code. UI work occurs on one event thread; background tasks communicate by queued messages. Publisher signing is a loader policy, not a language semantic. An emulator could therefore implement Civic without reproducing Mercer's contractual controls.

## C++ and game scripts

**[C]** C++ reaches its first commercial form by 1985 for object-oriented systems and large applications. Consumer games also use platform-specific scripting dialects.

**[D]** “Game-specific scripting” is a category, not one language. A documented game platform must state whether its scripts are tokenized BASIC, bytecode commands, data-driven state tables, or native code. No shared American game-script standard exists in 1985.

# Japanese and Co-Prosperity Sphere lineages

## Procedural origins and source representation

**[C]** Japanese computing grows from relay and parametron machines, telecommunications, punched-card corporations, factory procedure sheets and control systems. Mainframes calculate, transistor systems supervise, and relays act. Skilled-manpower scarcity, imperial distance, production control and multilingual administration make procedure and character identity strategic concerns.

Before KEISAN and TEJUN, a standardized procedure sheet describes steps, inputs, responsible clerk or machine, expected output, exception route and required authorization. It is deliberately executable by clerks, cards, relays, electronics or a mixture and is not yet a programming language. Early machine software remains numeric code, symbolic addresses, mathematical notation and vendor conventions.

Early source combines Latin mathematics, short Latin/kana identifiers, katakana commands and Arabic numerals. From the early 1960s native source becomes vertical and requires no Latin characters. Portrait terminals advance downward and then to the next column on the left; horizontal subwindows hold graphs, matrices or imported text. Common keyword tokens may display as katakana on simple equipment and kanji on capable terminals without changing the stored program.

**[D]** A native Japanese source file is a stream of logical tokens plus layout records, not a rectangular array of glyphs. Statement order follows token order; vertical presentation is the canonical editor view. Comments and string literals preserve UNICODE 80 character identity. A compiler must therefore produce the same program from katakana-keyword and kanji-keyword renderings of identical tokens.

## KEISAN: scientific calculation

**[C]** KEISAN (ケイサン, later 計算) begins around 1958–59 as Japan's scientific family. The 1959 core has floating point, arrays, loops, procedures, formulas, mathematical libraries and formatted numeric output. Representative early words are `モシ` (if), `ソノタ` (otherwise), `クリカエシ` (repeat), `ヨミコミ` (read), `カキダシ` (write), and `オワリ` (end).

KEISAN 62 stabilizes vertical statements, Japanese positional numerals, katakana identifiers and native scientific source. KEISAN 64 adds blocks, separate procedures, records, limited recursion, checks, complex/matrix libraries, device-independent I/O and optional Latin identifiers. KEISAN 68 adds restricted procedure values, modules, scientific files, graphics, errors and optimization. KEISAN 72 adds tagged records, plotting, instruments and cross-compilation. 計算三六 (1976) strengthens professional modules and UNICODE mapping. 計算四二 (1982) targets 16/32-bit systems, parallel numerical packages, spacecraft, robotics and universal-character data.

**[D]** KEISAN is statically typed. Its base types are integer, real, complex, truth, character and fixed array; records arrive in 64 and tagged variants in 72. Arrays are one-origin and stored column-major, matching scientific matrix convention. Numeric source digits `〇一二三四五六七八九` map directly to values; Arabic digits are accepted only by an import profile. Recursion uses a stack when present and is diagnosed as unsupported on small cross-targets. From 68, modules publish typed procedure/data signatures. Parallel packages in 42 are libraries over arrays and worker groups, not general shared-memory language semantics.

## TEJUN: administration, transactions and control

**[C]** TEJUN (テジュン, later 手順) descends from clerical and industrial procedure sheets. Its first translators appear around 1959–60 with records, exact decimals, tables, sorting, files, devices, states, exceptions and explicit human authorization.

TEJUN 63 formalizes records, files, state tables, device operations and approval. TEJUN 65 adds asynchronous events, timers, queues, named devices, restart, batches, confirmation, authorization gates and persistent industrial records. TEJUN 69 adds cooperating procedures, rollback, parallel cells and maintenance states. TEJUN 73 adds nested processes, event priority, device families, acknowledgments, safe rollback, distributed calls and operator/supervisor/remote authorization distinctions. Its embedded profile fixes memory and bounds queues while banning recursion and dynamic allocation. 手順三七 (1977) strengthens factory-network transactions. 手順四三 (1983) adds acknowledged messages, timeouts, lost-link behavior, reservations, supervised autonomy and explicit safe states for spacecraft and robots.

**[D]** A TEJUN program is a set of persistent typed process records. Each declares states, accepted events, guards, actions, next states, deadline, failure state and required authority. Events are queued by priority then arrival order. A transition is atomic with respect to its process record; multi-process work uses prepare/confirm messages rather than hidden shared-memory transactions. A checkpoint commits the state, durable outputs and acknowledgement number. On restart, unacknowledged idempotent actions may repeat; non-idempotent device actions require an operator reconciliation record. Embedded TEJUN replaces persistent files with fixed nonvolatile slots and bounded queues.

This semantics explains Japanese strengths without giving 1960s factories a modern distributed database or unconstrained autonomous robots.

## Gakushū: home and educational programming

**[C]** 学習三八 (1978) is Japan's BASIC analogue: immediate commands, numbered or named columns, arithmetic, conditions, loops, simple arrays, text, graphics, sound, controllers, cassette and cartridge access. It is vertical, katakana-heavy, tokenized, uses Japanese numerals and requires no Latin characters. Major firms share an educational core while extending it.

学習四一 (1981) adds UNICODE 80, vertical/horizontal windows, improved sprites/sound, disks, communications, cartridges, structured procedures and manufacturer compatibility profiles. It remains interpreted.

**[D]** The portable Gakushū machine has 16-bit integers, optional decimal floating point, length-counted strings, one-origin arrays, tokenized statements and a global variable workspace. 三八 uses numbered columns as branch targets; named procedures are an extension. 四一 makes procedures standard with local parameters but no required recursion. Graphics and sound are logical devices discovered at startup. Runtime failure highlights the vertical statement and returns to the command column.

## Japanese research languages

**[C]** 関数四二 (Kansū 42) is influenced by ML/Lambda, 論理四四 (Ronri 44) by Prolog, and 画像四四 (Gazō 44) by graphics/interface work. They remain specialist rather than national standards.

**[D]** Until further canon is established, Kansū uses the Common ML semantic subset with native tokens; Ronri uses standard Prolog search plus UNICODE atoms; Gazō uses retained scene objects and event procedures comparable to Bildschrift but targets Japanese graphics/sprite hardware. These are provisional compatibility definitions, not claims of independent mature standards.

## Character and runtime architecture

**[C]** The late-1950s Imperial Kana Machine Code is a compact seven-bit core with katakana, Japanese digits, punctuation, arithmetic signs, controls and vertical layout. Later multibyte registries cover kana, common kanji, Latin/Filipino, Hangul, traditional Chinese, Thai, Burmese, Vietnamese/Malay and technical symbols. UNICODE 80 finally defines shared abstract identities; local compact encodings remain permitted. Traditional Chinese alone is standard.

**[D]** Every post-1980 Japanese runtime exposes four operations: decode local bytes to UNICODE identity, encode when representable, render according to vertical/horizontal property, and compare under a named collation. Binary equality is identity equality, not glyph similarity. Identifiers are normalized to registered identity sequences; visually variant compatible ideographs remain distinct unless a compiler profile explicitly aliases them.

# Latin-bloc lineages

## Machine and symbolic programming, 1947–55

**[C]** Italian programming begins with machine code, symbolic addresses, card workflows, decimal routines, report generators, printer/tape handling and office-procedure analysis. Olivetti emphasizes prompts, readable errors, audit trails, correction and modular applications. Occitan work emphasizes formula translation, instruments/radar, numerical libraries, assembly, real-time sequencing and reusable aerospace routines. Spain builds an analog/relay teaching school and imports Italian office and Occitan scientific practice. No general Latin high-level language exists before ALGOL.

**[D]** The shared Latin interchange layer standardizes media labels, decimal record descriptions and peripheral character mappings, not instructions. Italian decimal and Occitan binary programs exchange records through explicit schema/conversion programs. This is the technical bridge that later allows ALGOL-Latin and LIA to coexist without pretending their machines share arithmetic or object code.

## ALGOL and ALGOL-Latin

**[C]** Italy and Occitania make ALGOL 58/60 the bloc's neutral scientific language. ALGOL-Latin 62 standardizes I/O, complex values, matrices, precision, errors, tape/files and separate procedures. ALGOL-Latin 68 adds records, modules, simulation, limited events/parallel work and assembly/device linkage. It serves universities, aerospace, nuclear work, navigation and engineering.

**[I]** The ALGOL-Latin lineage retains ALGOL 60 block scope, call-by-name/value procedures, recursion and dynamic stack allocation, subject to a future exact Revised Report pin. ALGOL-Latin requires implementations to document numeric ranges and the representation of own variables. Device and parallel extensions live in named modules; they do not change the sequential core. MODELO/MODÈLE simulation packages reproduce selected Simula class/process ideas without depending on a German-sphere compiler.

## LIA administrative family

**[C]** LIA-59/63 (`Linguaggio Italiano Amministrativo`, name originally provisional) is Olivetti's compact administrative language for records, exact money, tapes, sorting, reports, payroll, inventory, customs, shipping and banking. LIA 67/69 gains terminals, indexed data, logging, restart, recovery and Latin Scudo libraries. LIA 73 adds screen forms, online transactions, report generators and settlement/Suez/shipping packages.

**[D]** LIA uses block-form declarations followed by compact imperative procedures. Decimal fields declare precision and scale; binary floating point cannot be assigned to money without an explicit conversion rule. Records have fixed layouts and named overlays. Files are sequential, indexed or transaction journals. A transaction groups record changes and audit output; 1960s versions implement it as write-ahead journal plus checkpoint, not general isolation. Screen forms bind validated fields to records. Errors route to a handler, operator station or reject file.

## Occitan real-time languages

**[C]** Occitan radar, missile, avionics, naval, artillery, telemetry and industrial projects use assembly, ALGOL-derived engineering languages and compact control languages. Their recurring concepts are channel, event, track, timer, device, interrupt, state and failure route. No single bloc-wide control standard exists by 1985.

**[D]** This remains a language family rather than one invented standard. For implementation catalogues, each system receives an `OCRL` profile number declaring word size, static record layout, fixed-priority interrupt entry, bounded event queues, device registers and assembly interface. Recursion and heap allocation are absent from operational profiles. Source-to-source similarity does not imply object compatibility.

## Marseille Prolog

**[C]** Prolog is an Occitan achievement originating at Marseille around 1972: facts, relations, rules and goals solved by search. It first serves language analysis, translation, law, symbolic mathematics, theorem proving, planning, diagnosis and technical knowledge. Britain contributes theory and implementation; Occitania retains origin. By 1985 it has experimental/commercial use in maintenance, customs, medicine, military planning and expert systems, with Japan the largest foreign investor.

**[I]** The intended early Marseille profile includes first-order terms, unification, Horn clauses, left-to-right goals, top-to-bottom clauses, depth-first backtracking, logical variables, lists, cut and failure. This profile must still be specified in full because the alternate Marseille lineage cannot safely rely on an unspecified later Prolog standard. The practical engine omits the occurs-check. Arithmetic uses explicit evaluation predicates. Files, terminals and databases are extralogical predicates whose side effects are not undone by backtracking unless documented.

**[D]** The AltWWII Marseille interchange format is UNICODE-80 text after 1980, with atoms retaining accents and script identity. A module declares exported predicates by name/arity. Implementations must expose depth/heap limits and allow an interruptible search, because institutional rule systems cannot assume infinite memory or time. Tabling is an optional later research extension, not part of 1972 Prolog.

## Pascal, Modula, C and consumer languages

**[C]** Pascal is the principal Latin teaching language; Modula-like languages and C serve structured systems; BASIC/Pascal interpreters serve home machines; Ada serves military/aerospace work. Their historical lineages survive, but exact editions remain to be pinned. The Latin distinction lies in multilingual eight-bit/UNICODE text, Olivetti's complete professional systems and shared software interfaces, not in renaming every imported language.

# Cross-bloc language survival and exchange

| Language/idea | Survival in the setting |
|---|---|
| Assembly and macro assemblers | universal and indispensable for kernels, devices, compact control and optimized numeric work |
| FORTRAN | dominant American and widely exchanged scientific legacy |
| COBOL | American-led institutional standard, also present in Commonwealth and foreign commerce |
| ALGOL | international publication language; strongest production commitment in Latin bloc; parent of CPL, Pascal, Simula and many structured systems |
| LISP/Scheme | American symbolic/AI and teaching lineage with international research use |
| BASIC | international consumer lingua franca, but fragmented into machine dialects |
| Pascal/Modula | international education and structured systems, especially Latin/Commonwealth |
| Simula | Norwegian, inside German sphere; globally influential in simulation and objects |
| C/UNIX | American systems lineage ported through Britain, Bridge, Germany, Japan and Latin systems |
| Prolog | Occitan origin, British cooperation, worldwide logic-programming influence |
| ML | British/Commonwealth theorem and functional lineage; rival and partner to American Lambda |
| Ada | multinational military use under an American-led standard |

## Portability levels

**[D]** Claims of compatibility must use one of five precise levels:

1. **Algorithmic:** the method can be reexpressed elsewhere.
2. **Source-family:** grammar and semantics are substantially shared, but libraries and data differ.
3. **Source-profile:** conforming source and declared environment compile without edits.
4. **Intermediate/object:** Planform, Zivil-Planform or a declared ABI is shared.
5. **Binary:** the same executable and required runtime work unchanged.

Bridge normally promises level 3 across processor profiles and level 5 within one profile. Rechenplan/Planform promises levels 3–4. UNICODE 80 improves text identity but by itself promises none of the five for programs.

# Coverage ledger and unresolved questions

## Established or materially implied languages covered

The reference presently covers Plankalkül; Rechenplan 52/56/63/68/72 and RP-W/V/S; Planform I/II and Zivil-Planform; Auswahlplan; Kurzplan; Werkcode, Lehrplan, Folge, Schluss, Klasse, Bildschrift and Nachricht; Plan Austral; Colossus/ACE/Manchester/Cambridge low-level traditions; Autocode, Conversational Autocode, CLEO, CPL, BCPL, Applicative Autocode, ML, Commonwealth BASIC and occam; FORTRAN, COBOL, JOVIAL class, ALGOL, LISP/Scheme, BASIC/Tiny BASIC, PL/I, C, UNIX shell/tool languages, Pascal, Forth, Smalltalk, SQL/SEQUEL, Lambda, Ada, C++, Bridge tools and Civic; KEISAN, TEJUN, embedded TEJUN, Gakushū, Kansū, Ronri and Gazō; ALGOL-Latin, LIA, Occitan real-time languages, MODELO/MODÈLE, Prolog and Modula-like systems languages.

## Open questions

- **[O]** Was the first American real-time standard literally named JOVIAL, or does a divergent service name replace it? Its common technical profile is fixed here pending the name.
- **[O]** Is `LIA` the final canonical commercial name or still a development designation?
- **[O]** Which exact German organizations authored each 1980–84 civilian language, and which survive after 1985?
- **[O]** Civic's surface keyword vocabulary and Concord processor/object encodings are not named in canon. Its semantics are now specified, but a formal grammar and opcode annex remain future work.
- **[O]** The founders and brands of America's 1975 hobbyist computer, 1979 worksheet, and early language company remain deliberately open. They must not be assigned to Mercer or Keene without new canon.
- **[O]** Individual Occitan operational control languages remain unnamed. Inventing one umbrella language would contradict the established plurality.
- **[O]** Exact bit assignments for Imperial Kana Machine Code, German 6/12-bit codes, the Latin eight-bit code and UNICODE 80 require dedicated encoding tables.
- **[O]** Exact grammars, standard-library call lists, target-format specifications, worked examples, and executable conformance suites remain to be produced under `SoftwareSpecificationDevelopmentPlan.md`. Phase I does not prove that all semantic choices needed for those artifacts are fixed; specification work may expose additional choices, which must be classified and resolved rather than silently invented during compiler implementation.

## Hardware-to-language causal summary

The setting's principal developmental chain is now explicit:

- tiny memory and expensive machine time produce static allocation, batch work, weak diagnostics and hand optimization;
- core memory and compiler research permit procedures, blocks, records and portable source;
- disks, protection and terminals permit modules, exceptions, interactive debugging and persistent files;
- interrupts and embedded processors produce RP-S, TEJUN, JOVIAL-class and Occitan deterministic control traditions;
- time sharing and managed heaps make LISP, Applicative Autocode, ML, Lambda, Smalltalk and Civic practical;
- microprocessors and ROM make BASIC, Kurzplan and Gakushū household languages;
- packet networks and heterogeneous markets create Nachricht, Bridge, gateways and explicit portability levels;
- UNICODE 80 makes shared character identity possible without erasing machine, file, runtime or political difference.
