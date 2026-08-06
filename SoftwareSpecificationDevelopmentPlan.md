# AltWWII Compiler-Ready Software Specification Development Plan

## 1. Purpose

This plan governs the work required to turn [SoftwareDetailReference.md](./SoftwareDetailReference.md) from a Phase I historical and architectural reference into a set of compiler-ready language specifications.

The end-state test is deliberately practical:

> A fresh Codex goal, given the relevant specification package and its declared dependencies, can implement the language and required runtime without asking a language-design question or silently choosing among materially different semantics.

This does not require production compilers during the specification project. It does require complete normative specifications, machine-readable grammars and tables, executable conformance fixtures, and enough lightweight validation tooling to prove that the artifacts agree with one another.

## 2. Provisional architecture decision

**Provisional selection: Option A, hybrid package.**

- `SoftwareDetailReference.md` remains the authoritative historical overview, lineage map, comparative analysis, canon-status register, and index.
- `software-specs/` holds compiler-ready normative specifications, shared machine/runtime standards, external-standard pins, examples, and tests.
- A language is not described as compiler-ready in the overview until its package passes all completion gates in section 10.

Alternative options remain possible before large-scale specification work begins:

- **Option B, fully modular:** move most technical detail out of the overview; retain only historical narrative and indexes there.
- **Option C, monolithic:** place normative specifications in the main Markdown file. This is not recommended because machine-readable artifacts, versioned dependencies, and language-specific reviews become difficult to manage.

## 3. Canon and design governance

### 3.1 Authority order

Every specification follows the Setting Bible's project-wide authority order:

1. direct user declaration or correction;
2. assistant proposal explicitly accepted or built upon by the user;
3. newest version of a detail;
4. plausible but unconfirmed assistant proposal, marked tentative.

An established specialist reference controls its defined subject only within the same authority level. No summary or specialist document can override a higher-authority direct authorial correction. The transcript is the audit trail used to determine status.

### 3.2 Canon ledger

Before specifying a language, create a canon ledger containing one row per relevant claim:

| Field | Required content |
|---|---|
| Claim ID | stable identifier, such as `DE-RP56-C-0042` |
| Subject | language, revision, institution, machine, runtime, or relationship |
| Claim | one atomic proposition |
| Status | direct declaration, accepted proposal, newest version, tentative proposal, new design, or open question |
| Source | file and exact line/turn locator |
| Supersedes | earlier claim IDs displaced by this claim |
| Dependents | specification sections relying on it |
| Resolution | normative wording or unresolved alternatives |

The ledger prevents three recurring errors: treating an assistant brainstorm as canon, allowing a summary to outrank a correction, and changing one language feature without finding dependent revisions or runtimes.

### 3.3 Design-decision register

Any semantic fact not settled by canon receives a design-decision record before entering a normative specification:

```json
{
  "id": "DE-WC80-D-0017",
  "question": "Are local declarations permitted after statements?",
  "options": {
    "A": "declarations precede statements in each block",
    "B": "declarations and statements may be interleaved",
    "C": "declarations are permitted only at procedure scope"
  },
  "selected": null,
  "status": "proposed",
  "reason": null,
  "canon_effect": "connective-design",
  "affected_artifacts": [
    "languages/de/werkcode-80/grammar.ebnf",
    "languages/de/werkcode-80/semantics.md"
  ]
}
```

Material decisions should be presented to the user as Option A, B, or C when they affect the language's identity, historical plausibility, or several downstream specifications. Local mechanical choices may be resolved as connective design when one option is clearly implied by existing architecture, but they must still be recorded.

### 3.4 Normative vocabulary

Specifications use:

- **must / must not:** conformance requirement;
- **shall diagnose:** implementation must reject or emit a specified diagnostic class;
- **trap:** valid translation whose execution invokes a defined runtime failure;
- **implementation-defined:** implementation chooses and documents one allowed behavior;
- **unspecified:** one of several allowed behaviors may occur without documentation;
- **undefined:** the specification imposes no requirements after the operation;
- **extension:** behavior outside the standard that must be disabled in conformance mode.

Undefined behavior should be rare in strongly controlled German, Japanese, and Concord languages. It may be broader in Werkcode and historically faithful C-like systems.

## 4. Repository and artifact architecture

The planned structure is:

```text
SoftwareDetailReference.md
SoftwareSpecificationDevelopmentPlan.md
software-specs/
  README.md
  catalog.json
  canon-ledger/
    claims.json
    decisions.json
  foundations/
    hardware/
    characters/
    planform-1/
    planform-2/
    zivil-planform-82/
    planwerk-services/
    bridge-16/
    concord-object/
    japanese-runtime/
    latin-interchange/
  languages/
    de/
    en-gb/
    en-us/
    ja/
    latin/
  ecology/
    german-civilian-1980-1985.md
  external-standards/
    registry.json
    deviations/
  schemas/
    language-manifest.schema.json
    opcode-table.schema.json
    diagnostic.schema.json
    test-case.schema.json
  tools/
  reports/
```

### 4.1 Per-language package

Every original or substantially divergent language revision receives:

```text
languages/<culture>/<language-revision>/
  manifest.json
  history.md
  source.md
  grammar.ebnf
  lexical.json
  semantics.md
  operators.json
  types.json
  runtime.md
  abi.md
  stdlib.json
  lowering.md
  diagnostics.json
  compatibility.md
  implementation.md
  examples/
  tests/
    valid/
    invalid/
    runtime/
    lowering/
    compatibility/
  decisions.json
  coverage.json
```

Small dialects may inherit a complete parent package and supply only a delta package. A delta is valid only if every inherited artifact is pinned to an exact parent version and all changed behavior is enumerated. “Mostly like Kurzplan” is not a specification.

### 4.2 Manifest

The manifest is the machine-readable index and completion record:

```json
{
  "id": "de.werkcode.80",
  "display_name": "Werkcode 80",
  "status": "draft",
  "canon_status": "connective-design-expansion",
  "revision_date": 1980,
  "normative_dependencies": [
    "foundation.zivil-planform.82@1.0",
    "foundation.german-character-profile@1.0"
  ],
  "informative_dependencies": [
    "external.bcpl.1967",
    "external.c.kr-1978"
  ],
  "artifacts": {},
  "gates": {},
  "open_questions": []
}
```

No language may reach `implementation-ready` while `open_questions` contains a semantic, grammar, ABI, runtime, library, or conformance issue.

## 5. Dependency-first work order

The original languages cannot be specified in arbitrary order. High-fanout foundations come first.

### Stage 0 — canon recovery and inventory

1. Extract all computing claims from the Setting Bible, Timeline, authoritative computing turns, character and material-culture references, and accepted corrections.
2. Populate the canon ledger and language catalog.
3. Classify each item as a language, dialect, IR, runtime, monitor/OS, ABI, query language, command language, data format, or tool.
4. Identify every provisional name and every deliberately open founder or institution.
5. Produce a coverage report mapping each claim to a future specification artifact.

**Exit evidence:** every source claim has a claim ID and destination; unresolved conflicts are explicit.

### Stage 1 — common hardware and character foundations

Specify the machine facts that language semantics depend on:

- German 6/12-bit characters, 24/48-bit ERO quantities, packed decimal and channel devices;
- representative 8/16/32-bit German civilian targets;
- American Bridge/16 processor-profile rules;
- Concord One and Meridian abstract application machines;
- Japanese compact native code, multibyte registry and UNICODE 80 mapping;
- Latin eight-bit interchange and decimal/binary conversion;
- abstract historical-machine profiles for word-oriented British/American systems.

Each hardware profile defines bit numbering, byte/word order, integer encodings, floating and decimal formats, address unit, alignment, call stack availability, memory limits, I/O registers or services, and source media.

**Exit evidence:** every later primitive type and ABI can cite a concrete target rule instead of inventing one.

### Stage 2 — German intermediate and runtime foundations

Specify, in this order:

1. Planform I;
2. Rechenplan 52 translator-operation lists where they differ from Planform I;
3. Planform II;
4. Planwerk 64 service ABI;
5. Planwerk 68/72 compatible extensions;
6. Kurzplan 77 token/bytecode format, if distinct from Planform;
7. Zivil-Planform 82;
8. standard German civilian file, graphics, sound, terminal, and network service interfaces.

Planform and Zivil-Planform are specifications in their own right, not descriptive chapters. They require:

- complete opcode table;
- operand forms and validation rules;
- type descriptor encoding;
- constants and data segments;
- procedure/module records;
- stack/frame model;
- calling convention;
- imports, exports and version constraints;
- relocation entries;
- exception and debug tables;
- serialization header, endianness and alignment;
- required verifier behavior;
- malformed-module diagnostics;
- reference disassembler format;
- conformance fixtures for every opcode.

**Exit evidence:** a small validator and disassembler can read every valid fixture, reject every malformed fixture, and reproduce canonical normalized output. This is validation tooling, not a full compiler.

### Stage 3 — German strategic lineage

Specify Rechenplan in dependency order:

1. Rechenplan 52 numerical subset;
2. Rechenplan 56 common core and RP-W/RP-V/RP-S profiles;
3. Rechenplan 63 and Planform II linkage;
4. Rechenplan 68 events/processes/channels and certification;
5. Rechenplan 72 references, variants, modules and parameterization;
6. Auswahlplan query sublanguage;
7. compatibility and migration across all revisions.

Each revision is a complete spec or an exact delta from its predecessor. Profile restrictions are machine-readable rule sets rather than prose-only cautions.

### Stage 4 — Kurzplan and civilian substrate

Specify Kurzplan 77 completely before its descendants:

- interpreter token format and source grammar;
- minimal and complete runtime profiles;
- numeric/string/array semantics;
- procedures and error recovery;
- cassette/disk formats;
- graphics, sound and controller API;
- vendor-extension mechanism;
- bytecode or direct interpretation contract;
- conformance behavior at 8, 16 and 32 KiB memory profiles.

Then specify Zivil-Planform 82 and shared civilian services. The seven major civilian languages and most minor dialects depend on these.

### Stage 5 — seven major German civilian families

Work in dependency order rather than chronological order:

1. Lehrplan 81, because several business and teaching dialects inherit it;
2. Werkcode 80, because runtimes and tools use it;
3. Folge 81 and Schluss 82, which need managed symbolic runtime choices;
4. Klasse 82 and Bildschrift 83, which share object, graphics and event services;
5. Nachricht 84, which requires finalized Zivil-Planform networking and serialization.

Every family receives a complete standalone package. Cross-language FFI examples prove that the shared target actually permits a German software ecology.

### Stage 6 — representative minor German ecology

Specify 15–30 representative languages or dialect families using the process in section 9. Full specifications are required for independently implemented languages. Exact delta specifications are sufficient for genuinely small parent dialects.

### Stage 7 — other original/divergent lineages

Recommended order:

1. Bridge/16 and Civic/Concord object foundations;
2. Lambda 68/72/74;
3. Japanese token, display and runtime foundation;
4. KEISAN, TEJUN and Gakushū revisions;
5. Kansū, Ronri and Gazō research profiles;
6. CLEO, Conversational Autocode, Applicative Autocode and Common ML divergences;
7. LIA, ALGOL-Latin extensions, Occitan control profiles, Marseille Prolog and MODELO/MODÈLE;
8. Plan Austral 82.

### Stage 8 — pinned historical languages

For every real historical language, create an external-standard registry entry and an AltWWII deviation package. Do not paraphrase the entire external standard unless licensing or accessibility makes that necessary.

### Stage 9 — ecosystem integration and final audit

Build cross-language examples, compatibility matrices, language-generation timelines, and clean-room implementation briefs. Update the overview only after packages pass their gates.

## 6. Compiler-ready specification template

Every original or substantially divergent language must answer all requirements below normatively.

### 6.1 Historical identity

- exact language/revision name and aliases;
- status of provisional names;
- authors, institution and funding/procurement context;
- development, draft, adoption and replacement dates;
- target machines and minimum configurations;
- intended users and excluded use cases;
- parent, influences, successors and competitors;
- source-entry media and normal development workflow;
- installed base, adoption mechanism and principal limitations.

### 6.2 Source representation and lexical grammar

- source encoding and normalization;
- line/column significance and source-media limits;
- whitespace, continuation and statement termination;
- comments and whether they nest;
- complete keyword and reserved-word set;
- identifier alphabet, length, case and significance;
- every numeric, character, string, Boolean and aggregate literal;
- escape syntax;
- tokenization disambiguation and lexical errors;
- preprocessing, macros, includes or tokenized display if present.

`lexical.json` must enumerate tokens; examples must cover every literal and comment form.

### 6.3 Complete grammar

`grammar.ebnf` must parse every conforming compilation unit and no knowingly invalid construct. It includes declarations, types, expressions, statements, modules, imports/exports and profile-specific forms. Context-sensitive restrictions belong in semantics or validation rules, not hidden in vague grammar prose.

The grammar gate requires:

- automated syntax validation;
- no unreachable nonterminals;
- conflicts documented and resolved;
- positive parse fixtures for every production;
- negative fixtures for important near-misses;
- a normalized parse-tree schema or AST mapping.

### 6.4 Expressions and operators

- complete operator inventory;
- precedence and associativity table;
- operand and result types;
- exact evaluation order and short-circuit behavior;
- lvalue/place/value categories;
- promotions and explicit/implicit conversions;
- overflow, underflow, division, shifts and rounding;
- equality, ordering and character collation;
- pointer/reference arithmetic where present;
- constant-expression rules;
- side effects and sequence constraints.

### 6.5 Types, declarations and scope

- primitive types and target-dependent ranges;
- arrays, records, variants, sets, lists, objects, functions and process types;
- aliases versus new nominal types;
- compatibility/equivalence rules;
- declarations, initialization and default values;
- constants and compile-time values;
- lexical/dynamic scope and shadowing;
- visibility, modules and interfaces;
- inference/generalization where relevant;
- representation/alignment controls;
- incomplete or forward declarations.

### 6.6 Storage and runtime

- static data layout;
- procedure frame layout;
- parameter and return storage;
- heap, arena, region, reference counting or garbage collection algorithm requirements;
- object and closure representation;
- lifetimes, dangling references and finalization;
- alignment and padding;
- string and array descriptors;
- recursion and stack exhaustion;
- initialization and shutdown;
- memory exhaustion behavior;
- concurrency scheduler and synchronization if applicable.

### 6.7 Control and call semantics

- every statement and control construct;
- loop-bound evaluation and mutation rules;
- labels/goto restrictions where present;
- function/procedure declaration and invocation;
- parameter modes, aliasing and order;
- recursion and reentrancy;
- returns and multiple results;
- exceptions, traps, restart and cleanup;
- coroutines, processes, channels, mailboxes, priorities, fairness and deadlock behavior;
- interrupt and device-entry semantics for real-time profiles.

### 6.8 External world and standard library

`stdlib.json` must list every required symbol with signature, availability profile, side effects, errors and target mapping. Required areas are applicable subsets of:

- text and character conversion;
- numeric and mathematical functions;
- arrays, records and memory;
- console/teleprinter/card/tape I/O;
- files, directories and record stores;
- formatting and parsing;
- graphics, windows, sprites and fonts;
- sound and controllers;
- devices, timers and interrupts;
- processes and synchronization;
- networking, serialization and service discovery;
- database/query access;
- compiler/runtime introspection.

If a service belongs to Planwerk, Bridge, Concord, or a Japanese corporate runtime rather than the language, the package still specifies the binding and required environmental version.

### 6.9 Compilation and lowering

Define:

- token stream to parse tree;
- parse tree to typed semantic model/AST;
- name and type resolution;
- compile-time checks;
- lowering of every nontrivial construct to the target IR or interpreter operation;
- temporary creation and destruction;
- closures, variants, objects, exceptions and process lowering;
- library-call selection;
- optimization freedoms and observable behavior;
- debug source mapping.

`lowering/` tests pair source fragments with normalized IR. A compiler may optimize differently but must preserve the specified observable semantics.

### 6.10 Target and FFI contract

The language package pins:

- target IR/object format version;
- data representation and alignment;
- procedure calling convention;
- parameter/return ABI;
- symbol spelling and visibility;
- import/export and versioning;
- relocation and initialization order;
- exception propagation across modules;
- debug and reflection metadata;
- foreign-language-compatible subset;
- ownership rules when memory crosses the boundary.

### 6.11 Diagnostics and behavior classes

Every rule is assigned one of:

- statically valid;
- required translation diagnostic;
- valid but runtime-checked;
- implementation-defined;
- unspecified;
- undefined;
- prohibited by a named profile;
- extension-only.

`diagnostics.json` assigns stable diagnostic classes, not necessarily exact prose. Invalid fixtures state which class must appear. Safety/certification profiles may require exact source locations and severity.

### 6.12 Compatibility

- exact source changes from the previous revision;
- accepted legacy forms and deprecation;
- object/IR version compatibility;
- library version rules;
- data/file migration;
- profile compatibility;
- behavior of old source under new compilers;
- behavior of new modules linked with old modules;
- translator or shim requirements.

### 6.13 Worked programs

Every full language package includes, as applicable:

1. minimal output;
2. numeric calculation and overflow/error handling;
3. arrays and iteration;
4. records/variants and file I/O;
5. functions, recursion or explicit proof of prohibition;
6. modules and separate compilation;
7. characteristic nontrivial application;
8. runtime error and recovery;
9. FFI or shared-runtime call;
10. revision-migration example.

Characteristic examples include an RP-S timed controller, TEJUN authorization workflow, Schluss diagnosis, Bildschrift animated scene, Nachricht distributed service, Civic windowed document, KEISAN matrix/instrument task, LIA audited transaction, and Prolog rule system.

### 6.14 Conformance suite

Each test case has source, required mode/profile, expected result, allowed variation, diagnostic class, output bytes/characters, expected normalized IR when relevant, and canon/spec requirement IDs.

Minimum suite categories:

- lexer boundary and encoding;
- every grammar production;
- name/scope/type checks;
- each operator and conversion pair;
- storage/lifetime edge cases;
- control flow and calls;
- library calls and failures;
- malformed files/modules;
- IR lowering;
- ABI and separate modules;
- revision compatibility;
- target-limit behavior;
- invalid programs requiring rejection.

Passing only happy-path examples is not sufficient.

### 6.15 Compiler implementation brief

The package concludes with a nonnormative but complete build brief:

- recommended lexer/parser technique;
- AST/type-checker structure;
- interpreter, bytecode, IR or native strategy;
- runtime components;
- linker/loader needs;
- host versus target responsibilities;
- bootstrap route;
- expected implementation milestones;
- known risk areas;
- exact command sequence a future Codex task should use to validate progress.

## 7. Historical real-world language dependencies

### 7.1 Registry rule

“Familiar historical semantics apply” is prohibited. Every historical language receives an exact normative dependency entry:

```json
{
  "id": "external.fortran.1966",
  "language": "FORTRAN",
  "edition": "ANSI X3.9-1966",
  "publication_date": 1966,
  "normative_artifact": "<verified title and stable locator>",
  "local_archive": null,
  "checksum": null,
  "license_status": "<redistributable or reference-only>",
  "applicable_period": "1966-1977",
  "altwwii_deviation_package": "deviations/fortran-1966-altwwii.json",
  "verification_status": "pending"
}
```

The exact bibliographic artifacts and lawful local availability must be verified from primary sources before the entry becomes normative. Candidate names in the plan are not pins.

### 7.2 Deviation package

Every external language defines:

- which edition applies in each AltWWII year;
- adoption date and institutions;
- extensions and omissions;
- target numeric and character profiles;
- I/O, file, device and operating-environment differences;
- compiler/library divergences;
- interaction with UNICODE 80 and bloc encodings;
- compatibility with external implementations;
- any changed name, committee or publication history.

If a setting language is only inspired by a historical language—Lambda, Werkcode, Folge, Gakushū, LIA, Civic—it must be specified in full and may not use the historical source as a normative shortcut.

### 7.3 Likely external-dependency categories

The registry will need verified editions for, at minimum, FORTRAN, COBOL, ALGOL 58/60, LISP, BASIC, PL/I, Simula, Pascal, BCPL, C, Forth, Smalltalk, SQL/SEQUEL, Ada, C++, Modula-family languages and occam where the AltWWII version is not substantially divergent. Marseille Prolog, British ML/Common ML and other altered timelines require a determination whether an exact historical report remains normative or whether a full local specification is safer.

## 8. Specification workflow for one language

Each language goal follows the same sequence:

1. **Open goal and freeze scope.** Name the exact revision and dependencies; do not combine an entire family into one vague task.
2. **Recover canon.** Populate claim ledger and conflict report.
3. **Resolve blocking decisions.** Present only material alternatives as A/B/C choices; record all answers.
4. **Draft lexical and grammar artifacts first.** This exposes missing constructs early.
5. **Draft types, expressions and control semantics.** Every grammar production receives a semantic rule or “purely syntactic” classification.
6. **Draft runtime, library and ABI.** Reconcile sizes and services with target foundations.
7. **Write lowering rules.** If lowering cannot be described, the source or IR spec is incomplete.
8. **Write examples and tests concurrently.** Do not postpone tests until prose is declared finished.
9. **Run mechanical validation.** Grammar and JSON schemas, opcode coverage, duplicate symbols, broken requirement links and test manifests.
10. **Conduct clean-room implementation review.** A fresh agent receives only the package and writes an implementation plan listing every required component and any unanswered question. Any design question reopens the specification.
11. **Cross-check canon and compatibility.** Ensure connective choices did not silently change established history or successors.
12. **Mark implementation-ready only after all gates pass.** Update catalog and overview with evidence links.

## 9. Representative post-Kurzplan German ecology

### 9.1 Scope principle

Canon establishes hundreds of dialects and experiments but names only seven major families. The reference should specify approximately 20 representative minor languages or dialect families. They demonstrate the ecology; they do not claim that only these existed.

The representatives must include:

- several useful survivors;
- vendor lock-in dialects;
- tiny-memory compromises;
- academically elegant failures;
- proprietary Programmhäuser tools;
- magazine and club languages;
- domain-specific systems;
- bad or awkward languages whose historical value is social rather than technical.

Names below are **provisional connective-design candidates**, not canon until reviewed.

### 9.2 Candidate portfolio

| Candidate | Date/niche | Parent/implementation | Historical function |
|---|---|---|---|
| **Kleinplan 80** | magazine/8–12 KiB micros | tiny tokenized Kurzplan subset | proves how little language fits on cheap machines; many mutually incompatible forks |
| **Schnur 80** | electronics clubs and instruments | Forth-like direct-threaded dictionary | interactive hardware control with postfix syntax; efficient but alien to schools |
| **Heimplan-S / Heimplan-T** | vendor home-computer dialect pair | Kurzplan plus incompatible graphics/sound tokens | representative manufacturer lock-in and magazine porting burden |
| **Rechentafel 80** | programmable calculators | expression/table interpreter | engineers and surveyors; no strings or general files |
| **Bericht 81** | small-business reports | RP-V ideas over Zivil-Planform records | declarative sorting, grouping, totals and printed forms |
| **Formblatt 81** | offices and municipal forms | screen/form DSL calling Lehrplan routines | successful proprietary Programmhäuser language with limited general computation |
| **Spielsatz 81** | cassette games | compact stack bytecode and state tables | sprites/sound/controllers under severe memory limits; unsafe but popular |
| **Satzwerk 81** | publishing and text macros | stream pattern/action language | mail merge, typesetting and document conversion; awkward numeric model |
| **Zeichenweg 81** | schools | turtle/geometry language | graphical education; elegant demonstrations, weak application ecosystem |
| **Schaltfolge 82** | civilian industrial control | bounded state-transition DSL | cheap controllers; explicitly not certified RP-S and sometimes dangerously misused |
| **Wortbrücke 82** | translation and localization | pattern grammar plus dictionary tables | German/Spanish/Japanese software localization and terminology work |
| **Datenfrage 82** | small databases | Auswahlplan-inspired interactive query | user-facing declarative access over nonrelational files |
| **Klangfolge 82** | music and sound | timed event score language | home-computer music, demonstrations and games; vendor timing differences |
| **Gerätewort 82** | laboratories | typed register/instrument command language | portable experiment scripts over device profiles |
| **Baukasten 83** | educational structured construction | blocks serialized to Lehrplan source | visual teaching environment; commercially brief but influences Bildschrift tools |
| **Kartenwerk 83** | mapping and civil engineering | vector/record DSL | cadastral maps, rail layouts and municipal planning |
| **Netzblatt 83** | bulletin boards and information services | page/menu/message scripting | service operators compose forms and message routes without Nachricht expertise |
| **Reihe 83** | university array research | array-oriented notation compiling to Zivil-Planform | excellent compact mathematics, poor text/device support, commercially irrelevant |
| **Beweis 83** | university theorem work | typed logic/functional experiment | bridges Folge and Schluss; dies after compiler team disperses |
| **Werkstatt 84** | Programmhäuser build automation | shell/macro/dependency language | compiles, copies, converts, links and packages multi-language software |
| **Handelssatz 84** | retail and inventory packages | Bericht/Formblatt proprietary fusion | commercially successful, deliberately closed runtime and costly migration |
| **Fernbild 84** | videotex/remote graphics | page and interaction bytecode | constrained network graphics; overtaken by richer Bildschrift/Bridge tools |

This 23-language portfolio is a starting candidate set, counting Heimplan-S and Heimplan-T as separate dialect packages. The final set should remain between 15 and 30 after canon and duplication review.

### 9.3 Depth tiers

Not all representatives require equally large specifications:

- **Tier 1, independent language:** full package and all gates. Likely Schnur, Bericht, Spielsatz, Satzwerk, Schaltfolge, Wortbrücke, Datenfrage, Netzblatt and Werkstatt.
- **Tier 2, substantial dialect:** pinned parent plus complete lexical/semantic/library/bytecode delta and conformance suite. Likely Kleinplan, vendor Heimplan dialects, Rechentafel, Zeichenweg, Klangfolge, Gerätewort, Kartenwerk and Fernbild.
- **Tier 3, documented specimen:** source samples, implementation profile and historical failure/success analysis; used only when it is genuinely a local skin over an already complete parent. Tier 3 may not introduce independent semantics.

The portfolio should contain at least eight Tier 1 packages and no more than six Tier 3 specimens. This prevents the expansion from collapsing into another descriptive table.

### 9.4 Ecology evidence

The ecology chapter must explain:

- institutions and cities producing each language;
- distribution by magazine, cassette, ROM, university tape, vendor disk or contract;
- hardware and memory constraints;
- runtime incompatibilities;
- programmer communities and hiring effects;
- why administrators perceive a crisis;
- which languages influence the seven major families;
- which die with vendors or machines;
- how Zivil-Planform and software houses permit partial interoperability;
- how the unenumerated hundreds arise as forks and local extensions.

A lineage graph and 1980–85 adoption timeline are required final artifacts.

## 10. Completion gates

A language is `implementation-ready` only when every gate below has authoritative evidence.

| Gate | Requirement | Required evidence |
|---|---|---|
| G0 | Canon recovery complete | ledger coverage report; no unresolved source conflict |
| G1 | Historical identity complete | reviewed `history.md`; all material names/dates/institutions resolved or explicitly nonsemantic open items |
| G2 | Source representation complete | `source.md`, `lexical.json`, exhaustive lexer fixtures |
| G3 | Grammar complete | validated `grammar.ebnf`, production coverage and AST mapping |
| G4 | Expression semantics complete | operator table, conversions, evaluation and edge-case tests |
| G5 | Type/declaration system complete | type rules, layouts, scope and initialization tests |
| G6 | Storage/runtime complete | memory/frame/heap model and exhaustion/lifetime fixtures |
| G7 | Control/call/concurrency complete | semantic rules and tests for every statement/call/process form |
| G8 | External world complete | full required library and environmental bindings with failure tests |
| G9 | Compilation contract complete | lowering rules and normalized source-to-IR fixtures |
| G10 | Target/ABI complete | pinned verified foundation; link/FFI/object fixtures |
| G11 | Behavior/diagnostics complete | classified behavior inventory and invalid suite |
| G12 | Compatibility complete | revision delta and migration/link tests |
| G13 | Worked programs complete | required example portfolio with normative outputs |
| G14 | Conformance suite complete | schema-valid suite with requirement traceability and boundary coverage |
| G15 | Implementation review clean | fresh-agent implementation plan reports no language-design question |
| G16 | Overview synchronized | catalog and `SoftwareDetailReference.md` status updated with artifact links |

Completion is disproved by any of:

- “similar to,” “familiar semantics,” or “implementation may choose” without a bounded normative reference;
- a grammar production without semantic or validation coverage;
- a required library named only by category;
- an IR instruction named without operands, encoding and validation;
- an example that relies on an unspecified behavior;
- an open question affecting parser, type checker, runtime, ABI, library, lowering or required output;
- a conformance claim based only on successful examples;
- a clean-room reviewer making a design choice rather than locating an answer.

## 11. Verification and reporting

### 11.1 Mechanical reports

The eventual `software-specs/tools/` validators should produce:

- manifest/schema validation;
- missing or duplicate claim/requirement IDs;
- grammar reachability/conflict report;
- token/keyword consistency;
- opcode and type-table completeness;
- standard-library symbol consistency;
- example/test manifest completeness;
- diagnostic-class coverage;
- revision compatibility coverage;
- dangling normative references;
- per-gate status dashboard.

### 11.2 Human/agent reviews

Three separate reviews are required:

1. **Canon review:** does the spec preserve the setting?
2. **Language-lawyer review:** are the grammar and semantics complete and internally consistent?
3. **Implementer review:** can a compiler/runtime be planned without invention?

The same drafting agent should not be the only evidence for all three.

### 11.3 Progress units

Progress should be reported by passed artifacts and gates, not word count. “Werkcode history and grammar drafted; G0–G3 passed; runtime and ABI unresolved” is meaningful. “Werkcode section expanded to 12,000 words” is not.

## 12. Recommended immediate next goals

After this process is approved, execute these goals in order:

1. build the canon ledger and definitive language/IR/runtime catalog;
2. specify hardware/character profiles needed by Planform;
3. complete Planform I and its validator/disassembler fixtures;
4. complete Rechenplan 52 and 56 against Planform I;
5. complete Planform II and Planwerk 64 ABI;
6. complete Rechenplan 63, 68 and 72;
7. specify Kurzplan 77 and its minimal/complete interpreter profiles;
8. complete Zivil-Planform 82 and common civilian services;
9. complete the seven major German civilian languages;
10. select and specify the final representative minor-language portfolio;
11. proceed through Japanese, American, British/Commonwealth and Latin original languages;
12. pin external historical standards and write AltWWII deviation packages;
13. run the final ecosystem and clean-room implementation audit.

The first implementation-oriented milestone should be narrow and foundational:

> A Planform I package whose binary fixtures can be validated and disassembled, plus a Rechenplan 52 numerical-subset grammar and lowering suite that covers every Planform I opcode it uses.

That milestone will test the process itself before the project commits to dozens of full language packages.

## 13. Decisions for authorial confirmation

The process can proceed under the recommended defaults, but these choices materially affect the project:

### Decision 1 — artifact architecture

- **Option A:** hybrid overview plus modular specification packages (**recommended; provisional default**).
- **Option B:** fully modular specifications with a much shorter overview.
- **Option C:** one monolithic Markdown reference.

### Decision 2 — minor German languages

- **Option A:** treat the 23-name portfolio as provisional connective design, review it in thematic batches, and canonize only approved survivors (**recommended**).
- **Option B:** allow the process to establish the full portfolio as working canon subject to later correction.
- **Option C:** keep all names open until the author supplies or approves every name before specification begins.

### Decision 3 — readiness proof

- **Option A:** require machine-readable artifacts, validators, conformance suites and a clean-room implementation review, but no full compiler (**recommended**).
- **Option B:** require documents and tests only, without executable grammar/IR validation.
- **Option C:** require a minimal reference compiler/interpreter before any original language is called complete.

Unless redirected, the project should use Option A for all three decisions.
