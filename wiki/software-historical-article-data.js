window.deepArticles = window.deepArticles || {};

const historicalSoftwareSources = [
  {href:"../SoftwareDetailReference.md",label:"Software and Programming Language Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — computing"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — software chronology"},
  {href:"../transcript.md",label:"Master Transcript — computing and platform development"}
];

const historicalLanguageRelated = [
  {href:"programming-languages.html",kicker:"Aggregate history",label:"Programming Languages"},
  {href:"computing.html",kicker:"Technology setting",label:"Computing"},
  {href:"software-portability.html",kicker:"Interchange problem",label:"Cross-Bloc Software Portability"},
  {href:"platform-society.html",kicker:"Consumer setting",label:"Consumer Computing and Platform Society"}
];

const historicalLanguage = config => ({
  category:"Technology",
  eyebrow:"Historical programming language · alternate-world lineage",
  infoboxKicker:"Programming-language family",
  ...config,
  related:[...(config.related || []),...historicalLanguageRelated.filter(item=>item.href!==config.slug+".html" && !(config.related||[]).some(other=>other.href===item.href))],
  sources:[...historicalSoftwareSources,...(config.primarySources || [])],
  categories:config.categories || ["Programming languages","Software history","Computing"],
  facts:config.facts || []
});

Object.assign(window.deepArticles,{
  "lisp":historicalLanguage({
    slug:"lisp",title:"Lisp",eyebrow:"American symbolic-programming family · from 1958",infoboxKicker:"Symbolic and artificial-intelligence language",
    lead:"Lisp is the principal American family of symbolic programming languages. Developed by John McCarthy and his collaborators from 1958, it treats symbolic expressions and linked lists as both program notation and manipulable data, making it foundational to artificial intelligence, theorem proving, symbolic mathematics, and language research across the divided computing world.",
    canon:"Lisp’s historical origin, dynamic symbolic role, continued survival, and use in artificial intelligence are established. Particular dialect names, machine families, and cross-bloc ports vary by institution.",
    sections:[
      {id:"origin",title:"Origin and continuity",html:"<p>McCarthy’s late-1950s work survives the altered political order because it is rooted in American university and research institutions rather than a postwar international settlement. Lisp 1.5 becomes the first widely distributed reference point, even as later laboratories build incompatible descendants.</p>"},
      {id:"expressions",title:"Symbolic expressions",html:"<p>Programs and data share the same parenthesized symbolic representation. Lists are assembled from cons cells and examined through operations such as <code>car</code> and <code>cdr</code>; quotation prevents an expression from being evaluated immediately.</p>"},
      {id:"evaluation",title:"Evaluation and functions",html:"<p>An evaluator applies functions to values under rules for variables, conditionals, recursion, and function definition. Early dialects often use dynamic scope, while later research systems experiment with lexical binding, compilation, and more regular function objects.</p>"},
      {id:"memory",title:"Managed symbolic memory",html:"<p>Automatic reclamation of unreachable list structure lets programmers build and discard symbolic trees without manually controlling every address. Garbage collection is powerful but expensive, encouraging dedicated machines, large memories, and careful implementation work.</p>"},
      {id:"uses",title:"Research and institutional uses",html:"<p>Lisp supports theorem provers, algebra systems, language processing, planning, expert systems, compiler research, and military or aerospace analysis. It remains concentrated in universities, laboratories, and specialist firms rather than replacing FORTRAN, COBOL, or C.</p>"},
      {id:"dialects",title:"A family without one market standard",html:"<p>American university dialects, commercial systems, and machine-specific implementations diverge in names, scope, numbers, arrays, files, graphics, and compilation. Source exchange normally requires a declared dialect and compatibility library.</p>"},
      {id:"international",title:"International influence",html:"<p>Commonwealth functional research, American <a href='lambda-language.html'>Lambda</a>, German civilian symbolic languages, Japanese Kansū, and logic-programming work all encounter Lisp ideas. These systems borrow concepts without becoming Lisp dialects or accepting American runtime control.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Lisp is an old but still active specialist family. Workstations and improved compilers broaden its reach, yet its demanding runtimes and dialect fragmentation keep it strongest where symbolic flexibility matters more than small memory or certified timing.</p>"}
    ],
    related:[{href:"lambda-language.html",kicker:"Typed American counterpart",label:"Lambda"},{href:"ml-programming-language.html",kicker:"Commonwealth functional family",label:"ML"},{href:"marseille-prolog.html",kicker:"Logic-programming neighbor",label:"Marseille Prolog"}],
    primarySources:[{href:"https://www.bitsavers.org/pdf/mit/rle_lisp/McCarthy_LISP_1.5_Programmers_Manual_2ed_1985.pdf",label:"McCarthy et al. — LISP 1.5 Programmer’s Manual"}],
    facts:[["First developed","1958"],["Principal originator","John McCarthy"],["First widespread reference","Lisp 1.5"],["Core representation","Symbolic expressions and linked lists"],["Typing","Dynamic in principal early lineages"],["Memory","Garbage-collected heap"],["Primary fields","AI, symbolic mathematics, language research"],["1985 condition","Influential family; dialectically fragmented"]]
  }),

  "basic-programming-language":historicalLanguage({
    slug:"basic-programming-language",title:"BASIC",eyebrow:"Educational and home-computing family · from 1964",infoboxKicker:"Beginner’s programming language",
    lead:"BASIC is the most widespread American-origin language family for introductory, time-sharing, hobbyist, and home programming. Created at Dartmouth College in 1964 by John G. Kemeny and Thomas E. Kurtz, it moves from a compiled educational language into hundreds of mutually incompatible terminal and microcomputer dialects.",
    canon:"Dartmouth’s origin, time-sharing role, later ROM and Tiny BASIC families, Commonwealth minimum profile, and absence of universal consumer compatibility are established.",
    sections:[
      {id:"dartmouth",title:"Dartmouth and time sharing",html:"<p>Kemeny and Kurtz design BASIC so students outside engineering can use the Dartmouth Time-Sharing System directly. Early source uses numbered lines, familiar English commands, arithmetic expressions, loops, branches, arrays, data statements, and rapid compile-and-run service.</p>"},
      {id:"spread",title:"From campuses to terminals",html:"<p>Telephone access, educational networks, manufacturers, and service bureaus spread BASIC beyond Dartmouth. Institutions add strings, files, matrix operations, editing commands, and business extensions, quickly turning one teaching language into a family.</p>"},
      {id:"micros",title:"Tiny BASIC and ROM dialects",html:"<p>Microcomputer makers compress interpreters into read-only memory and adapt the language to limited processors. Tiny BASIC strips the model down further. Graphics, sound, disk, strings, machine access, and error behavior become vendor-specific selling points.</p>"},
      {id:"america",title:"The American home-computer vernacular",html:"<p>American kits, complete home machines, magazines, clubs, schools, and retail software make BASIC the ordinary first language of the consumer-computing boom. Listings circulate widely, but users must translate hardware commands and memory assumptions between brands.</p>"},
      {id:"commonwealth",title:"Commonwealth BASIC",html:"<p>A late-1970s Commonwealth minimum defines arithmetic, strings, loops, arrays, graphics, sound, and files while permitting declared extensions. It improves educational portability without claiming that every machine can run the same binary or exploit identical hardware.</p>"},
      {id:"other-blocs",title:"Counterparts and imports",html:"<p>Japan’s <a href='gakushu.html'>Gakushū</a> serves a comparable home and educational role through native vertical source rather than as a translated BASIC. Germany permits BASIC-family civilian use after the 1982 language reform, while the Latin bloc localizes interpreters for schools and households.</p>"},
      {id:"portability",title:"The dialect problem",html:"<p>A portable listing must name its dialect and declare expectations for number ranges, strings, array origins, files, graphics, sound, disk commands, and direct memory access. The word BASIC signals familiarity, not guaranteed interchangeability.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>BASIC remains the largest software-reading language family among ordinary American and Commonwealth households. Professional software increasingly moves to Pascal, C, Bridge tools, Civic, and specialist languages, but BASIC retains unmatched educational and hobbyist reach.</p>"}
    ],
    related:[{href:"gakushu.html",kicker:"Japanese counterpart",label:"Gakushū"},{href:"platform-society.html",kicker:"Consumer setting",label:"Consumer Computing and Platform Society"},{href:"bridge-operating-environment.html",kicker:"Compatible toolchain",label:"Bridge"}],
    primarySources:[{href:"https://www.dartmouth.edu/basicfifty/basicmanual_1964.pdf",label:"Dartmouth College — First BASIC Instruction Manual, 1964"}],
    facts:[["Created","1964"],["Creators","John G. Kemeny and Thomas E. Kurtz"],["Origin","Dartmouth College"],["Original environment","Dartmouth Time-Sharing System"],["Common source form","Numbered lines"],["Consumer implementation","ROM interpreter"],["Universal graphics or file standard","None"],["1985 role","Education, hobbyists, and home computing"]]
  }),

  "forth-programming-language":historicalLanguage({
    slug:"forth-programming-language",title:"Forth",eyebrow:"Interactive control language · from the late 1960s",infoboxKicker:"Stack-based extensible system",
    lead:"Forth is a compact interactive programming language and operating environment created by Charles H. Moore. Its data stack, return stack, extensible dictionary, threaded implementations, and immediate access to hardware make it unusually durable in instruments, observatories, industrial control, communications, and small embedded systems.",
    canon:"Forth’s historical survival and role in tiny interactive control systems are established. The exact adoption of FIG-Forth and Forth-79 profiles by each bloc remains implementation-specific.",
    sections:[
      {id:"origin",title:"Charles Moore and early systems",html:"<p>Moore develops the language through the late 1960s and early 1970s while building compact interactive systems for scientific and control work. The name comes to describe both the language and the self-contained environment in which it is edited, compiled, inspected, and run.</p>"},
      {id:"stacks",title:"Stack execution",html:"<p>Most words take operands from a data stack and leave results there. A separate return stack supports calls and control. Reverse-polish notation removes much punctuation and allows a tiny interpreter to execute a sequence of dictionary words.</p>"},
      {id:"dictionary",title:"Dictionary and extensibility",html:"<p>Every defined word joins a searchable dictionary containing its name, execution behavior, and implementation data. New control structures, compilers, vocabularies, and device commands can be built inside the language rather than added only by a vendor.</p>"},
      {id:"implementation",title:"Threaded implementations",html:"<p>Many systems compile definitions into addresses or compact tokens referring to other words. This threaded organization produces small portable environments, though exact cell width, dictionary layout, numeric behavior, and assembly interface remain target-dependent.</p>"},
      {id:"interaction",title:"Interactive development",html:"<p>An operator can inspect the stack, define a word, test a device, redefine behavior, and continue without a long batch cycle. That immediacy is invaluable when the computer is attached to a telescope, radio, machine tool, vehicle, or remote station.</p>"},
      {id:"standards",title:"FIG-Forth and Forth-79",html:"<p>Public models and the Forth Interest Group make the language easier to reproduce across processors. Forth-79 provides a shared reference vocabulary, but application code still depends heavily on cell size, screen storage, device words, and local conventions.</p>"},
      {id:"world",title:"Use across the blocs",html:"<p>American laboratories and manufacturers remain the largest source of systems. Commonwealth observatories, Japanese instruments, Latin aerospace teams, and German civilian controllers adopt local Forths where a larger certified runtime would be wasteful.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Forth is neither a mass educational language nor a large administrative standard. It is the language technicians reach for when a complete interactive system must fit in a small memory and speak directly to unusual hardware.</p>"}
    ],
    related:[{href:"c-programming-language.html",kicker:"Systems-language comparison",label:"C"},{href:"tejun.html",kicker:"Japanese control family",label:"TEJUN"},{href:"reliability-engineering.html",kicker:"Application discipline",label:"Reliability Engineering"}],
    primarySources:[{href:"https://www.forth.com/resources/forth-programming-language/",label:"FORTH, Inc. — Forth programming-language reference"}],
    facts:[["Creator","Charles H. Moore"],["First development","Late 1960s–early 1970s"],["Execution model","Data and return stacks"],["Source style","Reverse Polish notation"],["Program organization","Extensible dictionary of words"],["Common implementation","Threaded code"],["Shared profile","Forth-79"],["Primary use","Interactive control and embedded systems"]]
  }),

  "pascal-programming-language":historicalLanguage({
    slug:"pascal-programming-language",title:"Pascal",eyebrow:"Structured educational language · from 1970",infoboxKicker:"Algol-family teaching and systems language",
    lead:"Pascal is the principal international language of structured programming education. Designed by Niklaus Wirth around 1970, it combines block structure, explicit types, records, sets, arrays, pointers, procedures, and readable control statements in a form small enough for universities and manufacturers to implement widely.",
    canon:"Pascal’s historical origin, educational dominance, cross-bloc survival, and role in Bridge and Latin toolchains are established. National compilers and extended professional dialects remain diverse.",
    sections:[
      {id:"origin",title:"Design and publication",html:"<p>Wirth develops Pascal from the Algol tradition as a language for teaching disciplined program construction and data structures. The early report defines a compact language that rewards explicit declarations and nested procedures rather than machine-oriented improvisation.</p>"},
      {id:"types",title:"Types and data structure",html:"<p>Programs declare integer, real, Boolean, character, enumeration, subrange, set, array, record, file, and pointer types. Variant records allow controlled alternatives, although dialects differ in checking and representation.</p>"},
      {id:"control",title:"Structured control",html:"<p>Blocks, procedures, functions, lexical scope, conditions, case selection, and bounded or conditional loops provide a clear alternative to unrestricted branch-heavy teaching. Call conventions and input/output remain implementation-sensitive.</p>"},
      {id:"portable",title:"P-code and portable compilers",html:"<p>Several institutions compile Pascal into an intermediate portable code interpreted or translated on each target. P-code does not make every dialect identical, but it lowers the cost of bringing a complete teaching and development system to new machines.</p>"},
      {id:"education",title:"International education",html:"<p>Commonwealth and Latin universities make Pascal the normal language of algorithms and structured programming. American schools adopt it alongside BASIC and FORTRAN. German civilian education expands its use after 1982, while Japanese editions combine local documentation with declared character profiles.</p>"},
      {id:"professional",title:"Professional extensions",html:"<p>Manufacturers add modules, separate compilation, strings, files, graphics, operating-system interfaces, and larger libraries. These dialects support applications and systems work but weaken the assumption that a textbook program is automatically portable.</p>"},
      {id:"bridge",title:"Pascal in the Bridge market",html:"<p><a href='bridge-operating-environment.html'>Bridge</a> defines a portable Pascal application interface alongside C and BASIC. Source can move between licensed systems when it avoids vendor-specific records, screen services, numeric assumptions, and native memory operations.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Pascal remains the most broadly shared language of disciplined computing education. C is stronger for portable systems, BASIC for households, Ada for military consolidation, and Modula-family languages for modular engineering, but all inherit programmers trained in Pascal’s habits.</p>"}
    ],
    related:[{href:"latin-programming-languages.html",kicker:"ALGOL-Latin continuation",label:"Latin-Bloc Programming Languages"},{href:"bridge-operating-environment.html",kicker:"American platform",label:"Bridge"},{href:"commonwealth-programming-languages.html",kicker:"Educational adoption",label:"Commonwealth Programming Languages"}],
    primarySources:[{href:"https://link.springer.com/book/10.1007/978-3-540-37500-5",label:"Jensen and Wirth — Pascal User Manual and Report"}],
    facts:[["Designer","Niklaus Wirth"],["First published","1970"],["Family","ALGOL"],["Typing","Static and explicit"],["Scope","Lexical and block structured"],["Characteristic data","Records, sets, enumerations, subranges"],["Portable implementation","P-code families"],["1985 role","International structured-programming education"]]
  }),

  "smalltalk":historicalLanguage({
    slug:"smalltalk",title:"Smalltalk",eyebrow:"Object-oriented graphical language · 1970s–1985",infoboxKicker:"Object and message environment",
    lead:"Smalltalk is the American object-oriented language and graphical development environment created at Xerox’s Palo Alto Research Center. Its model of objects communicating through messages, live class browsers, bitmap windows, pointing devices, and a persistent object image makes it one of the most influential—and resource-intensive—software systems of the 1970s and early 1980s.",
    canon:"Smalltalk’s historical lineage, workstation requirements, object-oriented and graphical influence, and survival in research are established. Its direct commercial reach remains limited by hardware cost and competing platform systems.",
    sections:[
      {id:"parc",title:"The PARC lineage",html:"<p>Alan Kay, Dan Ingalls, Adele Goldberg, and collaborators develop successive Smalltalk systems during the 1970s. Smalltalk-80 becomes the principal published reference, carrying the environment beyond a single laboratory without making it inexpensive.</p>"},
      {id:"objects",title:"Objects and messages",html:"<p>Values are objects organized into classes. Computation occurs by sending a message to a receiver, which selects a method. Control, arithmetic, collections, windows, and development tools are expressed through the same object system.</p>"},
      {id:"classes",title:"Classes, inheritance, and reflection",html:"<p>Classes describe instance variables and methods and may inherit behavior from a superclass. Classes are themselves objects governed by metaclasses, allowing the system to inspect and modify much of its own organization.</p>"},
      {id:"image",title:"The live image",html:"<p>Source, compiled methods, objects, tools, and user state inhabit a persistent object memory. A programmer edits a running world with browsers, inspectors, workspaces, and debuggers rather than rebuilding every session from static files.</p>"},
      {id:"interface",title:"Bitmap graphical environment",html:"<p>Windows, menus, icons, typography, a pointing device, and BitBlt graphics make the language inseparable from its workstation environment. The same requirements prevent credible deployment on 1950s machines or the smallest 1970s home computers.</p>"},
      {id:"influence",title:"Influence on commercial systems",html:"<p>Smalltalk’s object and interface ideas influence American workstations, <a href='civic-programming-language.html'>Civic 83</a>, Concord Meridian, Bridge tools, and early C++. Each adapts the ideas to different performance, licensing, and platform constraints rather than reproducing the complete live image.</p>"},
      {id:"international",title:"Cross-bloc reception",html:"<p>Commonwealth interface research and Japanese graphics firms study Smalltalk closely. Latin professional systems borrow visible interface conventions. German strategic computing remains skeptical of a mutable image that is difficult to certify, while civilian laboratories experiment after the 1982 opening.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Smalltalk is more influential than common. It defines how advanced programmers imagine interactive objects and graphical development, but memory cost, performance, proprietary images, and platform competition keep ordinary software markets on simpler runtimes.</p>"}
    ],
    related:[{href:"civic-programming-language.html",kicker:"Commercial descendant",label:"Civic"},{href:"elias-mercer.html",kicker:"Graphical platform builder",label:"Elias Rowan Mercer"},{href:"cpp-programming-language.html",kicker:"Systems-language adaptation",label:"C++"}],
    primarySources:[{href:"https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp46520",label:"Goldberg and Robson — Smalltalk-80: The Language and Its Implementation"}],
    facts:[["Developed","1970s"],["Principal laboratory","Xerox PARC"],["Key contributors","Alan Kay, Dan Ingalls, Adele Goldberg, and others"],["Core model","Objects communicating by messages"],["Development state","Persistent live image"],["Interface","Bitmap windows and pointing device"],["Reference lineage","Smalltalk-80"],["1985 position","Research and high-end workstation influence"]]
  }),

  "sql":historicalLanguage({
    slug:"sql",title:"SQL",eyebrow:"Relational database language · from 1974",infoboxKicker:"Declarative data sublanguage",
    lead:"SQL is the American-origin declarative language for relational databases. Developed at IBM by Donald D. Chamberlin and Raymond F. Boyce as SEQUEL in the 1970s, it lets users describe desired tables, joins, groupings, and updates without prescribing the physical path by which the database must obtain them.",
    canon:"SEQUEL/SQL’s historical development, declarative relational role, institutional adoption, and coexistence with German Auswahlplan and bloc-specific systems are established. A single perfectly compatible world SQL standard does not exist by 1985.",
    sections:[
      {id:"relational",title:"The relational model",html:"<p>Edgar F. Codd’s 1970 relational model represents data through values in tables rather than mandatory navigational links. The separation between logical request and physical storage creates room for a query language and an optimizer.</p>"},
      {id:"sequel",title:"SEQUEL and System R",html:"<p>Chamberlin and Boyce present SEQUEL in 1974 as a structured English query language for integrated relational data. IBM’s System R project turns the model into a working industrial prototype and develops automatic query planning.</p>"},
      {id:"declarative",title:"Declarative queries",html:"<p>A query names columns, tables, restrictions, joins, grouping, and ordering while leaving access paths to the database. This makes ad hoc retrieval possible for trained institutional users who are not storage-engine programmers.</p>"},
      {id:"updates",title:"Definition and update",html:"<p>Later SQL families define tables and views and insert, update, or delete rows as well as retrieve them. Transactions, null behavior, authorization, type systems, procedural extensions, and error handling differ substantially among products.</p>"},
      {id:"america",title:"American institutional adoption",html:"<p>IBM, independent database vendors, banks, government agencies, insurers, universities, and large firms make SQL a central American data language. Platform competition produces several commercial dialects rather than one implementation authority.</p>"},
      {id:"comparisons",title:"Other bloc query systems",html:"<p>Germany’s <a href='auswahlplan.html'>Auswahlplan</a> is a read-only certified sublanguage whose updates remain audited Rechenplan procedures. Italy’s LIA, Japan’s TEJUN, and Commonwealth database systems develop their own transaction and query conventions while importing relational ideas.</p>"},
      {id:"exchange",title:"Cross-bloc exchange",html:"<p>Relational schemas can travel more easily than internal database files, but names, character identity, decimals, dates, nulls, collations, permissions, and transaction guarantees still require explicit profiles. UNICODE 80 improves text identity without unifying SQL semantics.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>SQL is an expanding professional and institutional language, not a household programming system. Its long-term importance is visible, yet vendors still compete over syntax and behavior and the final international standard remains outside the present endpoint.</p>"}
    ],
    related:[{href:"auswahlplan.html",kicker:"German counterpart",label:"Auswahlplan"},{href:"lia-language.html",kicker:"Latin administration",label:"LIA"},{href:"tejun.html",kicker:"Japanese transactions",label:"TEJUN"}],
    primarySources:[{href:"https://research.ibm.com/publications/sequel-a-struciured-english-query-language",label:"Chamberlin and Boyce — SEQUEL, 1974"},{href:"https://www.ibm.com/history/relational-database",label:"IBM — history of the relational database and System R"}],
    facts:[["Original name","SEQUEL"],["Designers","Donald D. Chamberlin and Raymond F. Boyce"],["First publication","1974"],["Research system","IBM System R"],["Data model","Relational tables"],["Programming model","Declarative query and update"],["Primary users","Institutional and professional"],["Universal 1985 dialect","None"]]
  }),

  "ada-programming-language":historicalLanguage({
    slug:"ada-programming-language",title:"Ada",eyebrow:"American military systems language · standardized 1983",infoboxKicker:"Strongly typed real-time language",
    lead:"Ada is the standardized American military and aerospace programming language adopted in 1983 to consolidate the many specialized languages used in embedded, command, communications, and weapons systems. Its packages, strong types, generics, tasks, exceptions, and representation clauses make large systems explicit enough to divide among contractors and review across long service lives.",
    canon:"Ada’s historical 1983 standard and its package, generic, task, exception, strong-type, and representation model are established. Aerospace Force certification profiles restrict dynamic features where timing and memory must be proven.",
    sections:[
      {id:"problem",title:"The language proliferation problem",html:"<p>American services and contractors enter the 1970s with hundreds of incompatible implementation languages and local extensions. The consolidation program seeks one language capable of ordinary data processing, real-time control, embedded work, and large modular development.</p>"},
      {id:"competition",title:"Requirements and selection",html:"<p>Successive requirements emphasize reliability, readability, strong typing, separate compilation, concurrency, low-level representation, and support for long-lived systems. The selected design becomes Ada, named for Ada Lovelace.</p>"},
      {id:"packages",title:"Packages and abstraction",html:"<p>Packages separate public specifications from private implementations. Private types let a module promise operations without exposing representation, while childless library units and separate compilation support contractor boundaries.</p>"},
      {id:"types",title:"Strong types and generics",html:"<p>Distinct numeric and enumeration types do not mix merely because their machine representations coincide. Range checks, records, arrays, discriminants, access types, and generics support reusable components whose assumptions are stated in source.</p>"},
      {id:"tasks",title:"Tasks, exceptions, and rendezvous",html:"<p>Tasks execute concurrently and communicate through rendezvous at named entries. Exceptions carry abnormal control to declared handlers. Both are powerful, but certified systems restrict their use when schedules and failure behavior must be statically bounded.</p>"},
      {id:"hardware",title:"Representation and embedded control",html:"<p>Representation clauses describe record layouts, bit positions, sizes, addresses, and hardware-facing conventions. They make low-level intent visible but necessarily reduce portability between processors and peripheral systems.</p>"},
      {id:"profiles",title:"Aerospace Force profiles",html:"<p>Flight and weapon profiles prohibit or bound dynamic allocation, task creation, recursion, exception propagation, and implementation-dependent arithmetic. Programs carry compiler, runtime, target, scheduling, and memory-map declarations as part of certification.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Ada is a mandated consolidation project rather than an already universal practice. JOVIAL-class systems, C, assembly, and validated older software remain in service while new military programs acquire Ada toolchains and train a generation of engineers.</p>"}
    ],
    related:[{href:"aerol-60.html",kicker:"Older aerospace lineage",label:"AEROL-60"},{href:"c-programming-language.html",kicker:"Systems-language rival",label:"C"},{href:"reliability-engineering.html",kicker:"Certification culture",label:"Reliability Engineering"}],
    primarySources:[{href:"https://www.adaic.org/ada-resources/standards/ada83/",label:"Ada Resource Association — Ada 83 Standard and Rationale"}],
    facts:[["Named for","Ada Lovelace"],["Sponsor","United States Department of Defense"],["Standard","ANSI/MIL-STD-1815A-1983"],["Typing","Strong and static"],["Modularity","Packages and generics"],["Concurrency","Tasks and rendezvous"],["Low-level control","Representation clauses"],["1985 status","Mandated transition; legacy languages remain"]]
  }),

  "cpp-programming-language":historicalLanguage({
    slug:"cpp-programming-language",title:"C++",eyebrow:"Object-oriented systems language · commercial form 1985",infoboxKicker:"C-derived systems language",
    lead:"C++ is the emerging American object-oriented systems language designed by Bjarne Stroustrup at Bell Laboratories. Developed first as C with Classes from 1979, it combines C’s machine access and compilation model with Simula-derived classes so large systems can acquire stronger program organization without surrendering existing C toolchains.",
    canon:"C++ reaching its first commercial form by 1985, its role in object-oriented systems and large applications, and the absence of a mature universal standard at the endpoint are established.",
    sections:[
      {id:"classes",title:"C with Classes",html:"<p>Stroustrup begins the project in 1979 to bring Simula-style program organization to the efficient and widely implemented C environment. Early work adds classes, constructors, destructors, access control, inline functions, and stronger checking while retaining compilation to ordinary system targets.</p>"},
      {id:"name",title:"The C++ name and commercial release",html:"<p>The name C++ replaces C with Classes as the language expands beyond its initial experiment. By 1985 the first commercial implementations and reference material establish it as a real product, though language details remain under active development.</p>"},
      {id:"objects",title:"Classes and object layout",html:"<p>A class joins data with operations and can control which members are public or private. Constructors establish invariants and destructors release resources. Inheritance supports related implementations, while virtual functions permit run-time selection through a base interface.</p>"},
      {id:"compatibility",title:"Continuity with C",html:"<p>C++ preserves much of C syntax, preprocessing, pointer arithmetic, manual allocation, separate compilation, and linkage. That continuity allows existing operating-system, compiler, graphics, and device libraries to remain useful, but it also carries forward machine-dependent behavior and unsafe operations.</p>"},
      {id:"tools",title:"Compilers and translation",html:"<p>Early implementations commonly translate C++ into C or closely related intermediate output before using established compilers and linkers. This accelerates deployment across American and Bridge systems while exposing differences in calling conventions, object layout, and library support.</p>"},
      {id:"applications",title:"Large applications and games",html:"<p>Workstations, graphical tools, simulations, communications software, and large commercial applications adopt the language first. Game developers investigate it for engines and editors, while actual consumer titles continue to mix assembly, C, tokenized BASIC, data tables, and platform scripts.</p>"},
      {id:"world",title:"A fractured international market",html:"<p>Bridge vendors and Commonwealth laboratories port early compilers. Japanese firms evaluate it beside native toolchains; Latin professional developers value its systems continuity; German civilian studios experiment after 1982. Each port must declare C data widths, calling convention, object layout, and runtime library.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>C++ is promising but unsettled. It has no final international standard, a small expert community, changing syntax, and competing compilers. Its importance lies in the visible possibility of organizing large low-level programs around objects without abandoning C performance.</p>"}
    ],
    related:[{href:"c-programming-language.html",kicker:"Base language",label:"C"},{href:"smalltalk.html",kicker:"Object-oriented contrast",label:"Smalltalk"},{href:"bridge-operating-environment.html",kicker:"Portable market",label:"Bridge"}],
    primarySources:[{href:"https://stroustrup.com/hopl2.pdf",label:"Bjarne Stroustrup — A History of C++: 1979–1991"}],
    facts:[["Designer","Bjarne Stroustrup"],["Laboratory","Bell Laboratories"],["Project begins","1979"],["Original name","C with Classes"],["Commercial name","C++"],["First commercial form","1985"],["Principal influences","C and Simula"],["1985 standard","No final international standard"]]
  })
});

const addHistoricalSoftwareRelated=(slug,items)=>{const article=window.deepArticles[slug];if(!article)return;article.related=article.related||[];for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.unshift(item);};
addHistoricalSoftwareRelated("programming-languages",[{href:"lisp.html",kicker:"Symbolic family",label:"Lisp"},{href:"basic-programming-language.html",kicker:"Consumer family",label:"BASIC"},{href:"pascal-programming-language.html",kicker:"Education",label:"Pascal"},{href:"sql.html",kicker:"Relational data",label:"SQL"}]);
addHistoricalSoftwareRelated("american-programming-languages",[{href:"ada-programming-language.html",kicker:"Military consolidation",label:"Ada"},{href:"cpp-programming-language.html",kicker:"Emerging systems language",label:"C++"},{href:"smalltalk.html",kicker:"Object environment",label:"Smalltalk"}]);
addHistoricalSoftwareRelated("c-programming-language",[{href:"cpp-programming-language.html",kicker:"Object-oriented extension",label:"C++"}]);
addHistoricalSoftwareRelated("gakushu",[{href:"basic-programming-language.html",kicker:"Western educational comparison",label:"BASIC"}]);
addHistoricalSoftwareRelated("auswahlplan",[{href:"sql.html",kicker:"American relational comparison",label:"SQL"}]);
