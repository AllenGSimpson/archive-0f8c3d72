window.deepArticles = window.deepArticles || {};

const germanEarlyJetSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — German late-war and immediate-postwar jets"},
  {href:"../transcript.md",label:"Master Transcript — revised German aircraft-development branches"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German military and aerospace continuity"}
];

const germanEarlyJetRelated = [
  {href:"german-early-jet-generation.html",kicker:"Generation overview",label:"German Late-War and Immediate-Postwar Jets"},
  {href:"reichsluftgeraetordnung-1948.html",kicker:"Later designation law",label:"Reichsluftgerätordnung 1948"},
  {href:"german-clean-register-generation.html",kicker:"Post-1948 register",label:"German Post-1948 Aircraft Register"},
  {href:"germany.html",kicker:"Operator",label:"Greater German Reich"}
];

const germanEarlyJetArticle = config => ({
  category:config.category || "Military aircraft",
  eyebrow:config.eyebrow || "Germany · late-war and immediate-postwar jet development",
  infoboxKicker:config.infoboxKicker || "German early jet aircraft",
  ...config,
  sources:germanEarlyJetSources,
  categories:config.categories || ["Greater German Reich","Luftwaffe","Military aircraft","Jet aircraft","Second World War"]
});

Object.assign(window.deepArticles, {
  "german-early-jet-generation": germanEarlyJetArticle({
    title:"German late-war and immediate-postwar jets",category:"Aircraft lineage",infoboxKicker:"German first jet generation",
    lead:"Germany's late-war and immediate-postwar jet generation is centered on the regular Me 262 fighter, Ta 183 production or adoption, the operational Ho 229 family, operational Ar 234 bombers and reconnaissance aircraft, and experimental Junkers work. The He 162 remains paper and prototype work and never becomes an operational fleet.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The Me 262 operational school, HG III research role and endurance penalty, Ta 183 bridge, operational Ho 229 family, Ar 234 role, Junkers experimental work, and non-operational He 162 status are established. Detailed subtype chronology, specifications, production, units, weapons, losses, and exact transition into the post-1948 register remain open.",
    sections:[
      {id:"me262",title:"Me 262 operational school",html:"<p>Me 262 is the regular wartime jet fighter and the baseline from which Messerschmitt learns high-speed operations, turbine maintenance, armament integration, and later interceptor design.</p>"},
      {id:"research",title:"HG III research",html:"<p>Me 262 HG III flies as a research development. Wing-root engine installation and revised aerodynamics improve speed but remove fuel volume, making low endurance a defining lesson.</p>"},
      {id:"focke",title:"Ta 183 bridge",html:"<p>Ta 183 reaches late-war production or immediate-postwar adoption and gives Focke-Wulf a compact swept-wing fighter school. It is not displaced by an operational He 162 fleet.</p>"},
      {id:"horten",title:"Ho 229 family",html:"<p>Ho 229 is an operational family and the institutional beginning of Horten-Gotha's long flying-wing school. Reduced radar return is initially a consequence of form rather than a complete stealth doctrine.</p>"},
      {id:"other",title:"Arado and Junkers",html:"<p>Ar 234 remains an operational bomber and reconnaissance aircraft. Ju 287 and EF successors remain experimental structural and forward-swept-wing work rather than a settled mass-bomber fleet.</p>"},
      {id:"heinkel",title:"He 162 boundary",html:"<p>The Volksjäger emergency program does not produce an operational service fleet in this war. He 162 survives only as paper and prototype work.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Regular wartime fighter","Me 262"],["Research development","Me 262 HG III"],["Focke-Wulf bridge","Ta 183"],["Flying-wing family","Ho 229 / H IX"],["Bomber and reconnaissance","Ar 234"],["Experimental Junkers line","Ju 287 / EF successors"],["He 162 status","Paper and prototype work only"],["Detailed specifications","Open"]]
  }),

  "reichsluftgeraetordnung-1948": germanEarlyJetArticle({
    title:"Reichsluftgerätordnung 1948",category:"Aircraft designation systems",eyebrow:"Germany · military-aircraft registration reform · 1948",infoboxKicker:"German aircraft designation regulation",
    lead:"The Reichsluftgerätordnung 1948 creates a national role-series register for newly accepted German aircraft while grandfathering every designation assigned under the wartime system. It does not reset new aircraft into a 500 block.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The 1948 regulation, role codes, national rather than manufacturer-specific ordinals, design-authority prefixes, major-series letters, production-standard numbers, prototype and pre-series terms, and separate company project registers are established. Exact post-1948 acceptance ordinals remain open.",
    sections:[
      {id:"form",title:"Operational form",html:"<p>The service designation combines design authority, role code, national acceptance ordinal, major-series letter, and production-standard number. The individual airframe retains a separate Werknummer.</p>"},
      {id:"national",title:"National ordinals",html:"<p>Acceptance ordinals are national within each role rather than manufacturer-specific. A Messerschmitt, Focke-Wulf, and Heinkel fighter accepted in sequence would consume consecutive J ordinals.</p>"},
      {id:"roles",title:"Role codes",html:"<p>J covers fighters and interceptors; S ground attack; B bombers; A reconnaissance; Se maritime aircraft; T transports; Sch trainers; H rotary-wing aircraft; and Vb liaison or utility types.</p>"},
      {id:"series",title:"Series and standards",html:"<p>A, B, and C mark major redesigns. Hyphenated numbers identify standardized equipment forms, while -0 marks a pre-series batch and V remains the prototype-airframe marker.</p>"},
      {id:"projects",title:"Company project registers",html:"<p>Internal project numbers remain separate from service identities. Paper designs, models, mock-ups, and private demonstrators do not consume national ordinals.</p>"},
      {id:"open",title:"Open acceptance chronology",html:"<p>The exact J, S, B, A, Se, and supporting-role sequence after 1948 has not yet been reconstructed and must not be manufactured to fill a table.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Adopted","1948"],["Applies to","Newly accepted aircraft"],["Older designations","Grandfathered"],["Ordinal basis","National sequence within each role"],["Manufacturer prefix","Design authority"],["Prototype marker","V"],["Pre-series marker","-0"],["500 block","Not used"]]
  }),

  "me-262a-1": germanEarlyJetArticle({
    title:"Me 262",eyebrow:"Germany · regular wartime jet fighter",infoboxKicker:"Operational jet-fighter family",
    lead:"The Me 262 is Germany's regular operational jet fighter during the Second World War and the foundation of its mature turbine-fighter school. Current canon fixes that institutional role without fixing a complete subtype, performance, armament, or production register.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Regular operational status, wartime service, and foundational influence upon Messerschmitt's later high-speed branch are established. Subtype chronology, specifications, armament, production, units, operations, losses, upgrades, and retirement remain open unless established elsewhere.",
    sections:[
      {id:"status",title:"Operational status",html:"<p>Me 262 is a regular fighter rather than a small experimental detachment. It creates sustained experience in jet conversion, maintenance, basing, fuel, training, and combat employment.</p>"},
      {id:"school",title:"Turbine-fighter school",html:"<p>Operational experience links aerodynamic design to engine reliability, field servicing, weapons, pilot conversion, and the practical limits of early turbines.</p>"},
      {id:"research",title:"HG developments",html:"<p>High-speed developments explore revised wings, fuselage work, and engine integration. HG III remains research rather than an indefinite production suffix sequence.</p>"},
      {id:"inheritance",title:"Postwar inheritance",html:"<p>Messerschmitt carries the operational and research record into later high-speed interceptor projects under the post-1948 role-series system.</p>"},
      {id:"limits",title:"Open technical record",html:"<p>Current canon does not fix a complete subtype list, engine table, speed, range, ceiling, weapon battery, production total, or unit history.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Country","Greater German Reich"],["Status","Regular operational fighter"],["Period","Second World War"],["Design authority","Messerschmitt"],["Research branch","HG developments"],["Postwar influence","High-speed interceptor school"],["Detailed subtype register","Open"],["Specifications","Open"]]
  }),

  "me-262f": germanEarlyJetArticle({
    title:"Me 262 HG III research development",eyebrow:"Germany · high-speed research · not a production family",infoboxKicker:"Me 262 research aircraft",
    lead:"Me 262 HG III is a flying research development whose wing-root engine installation and revised aerodynamics improve speed while reducing fuel volume and endurance. It does not become an endless alphabetic production sequence.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Flying research status, wing-root engine integration, revised aerodynamics, improved speed, reduced fuel volume, low endurance, and influence upon later Messerschmitt projects are established. Exact designation detail, dates, engines, performance, airframes, flights, and later project transfers remain open.",
    sections:[
      {id:"purpose",title:"Research purpose",html:"<p>HG III tests high-speed aerodynamic and engine-integration choices beyond the regular Me 262 fleet.</p>"},
      {id:"installation",title:"Wing-root engine installation",html:"<p>Moving the propulsion installation into the wing-root region changes drag, structure, ducts, access, and internal volume together.</p>"},
      {id:"endurance",title:"The endurance penalty",html:"<p>The revised arrangement removes fuel volume. The aircraft is remembered for low endurance as well as higher speed, preventing a one-dimensional success narrative.</p>"},
      {id:"legacy",title:"Later Messerschmitt projects",html:"<p>The lessons feed later high-speed projects under new company and service identities rather than extending Me 262 production indefinitely.</p>"},
      {id:"limits",title:"Open technical detail",html:"<p>Dimensions, engine model, speed, range, flight count, individual airframes, and the exact transfer into later projects remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Family","Me 262 HG"],["Status","Flying research development"],["Principal feature","Wing-root engine integration"],["Aerodynamic effect","Improved speed"],["Packaging effect","Reduced fuel volume"],["Operational lesson","Low endurance"],["Production sequence","No"],["Detailed specifications","Open"]]
  }),

  "he-162c": germanEarlyJetArticle({
    title:"He 162 program",eyebrow:"Germany · Volksjäger paper and prototype work",infoboxKicker:"Non-operational fighter program",
    lead:"The He 162 program remains paper and prototype work in this war. The Volksjäger emergency logic never produces an operational service fleet, and the former He 162C operational type is withdrawn.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"He 162 paper and prototype status, the failure of the emergency Volksjäger logic to create a service fleet, and Heinkel's continued postwar project work are established. Prototype forms, dates, engines, performance, armament, tests, and disposition remain open.",
    sections:[
      {id:"emergency",title:"Volksjäger emergency logic",html:"<p>The program belongs to the late-war search for a light, rapidly produced defensive fighter. In this victory timeline that emergency concept does not become the Luftwaffe's operational answer.</p>"},
      {id:"status",title:"Paper and prototypes",html:"<p>Studies and prototype work can continue without generating a service designation, production fleet, or regular operational units.</p>"},
      {id:"comparison",title:"No displacement of Ta 183",html:"<p>Focke-Wulf's Ta 183 supplies the compact swept-wing fighter bridge into the postwar period. It is not displaced by a fictional He 162C fleet.</p>"},
      {id:"heinkel",title:"Heinkel continuity",html:"<p>Heinkel continues engine and aircraft work through its own project register. That institutional survival does not convert He 162 into an accepted service family.</p>"},
      {id:"limits",title:"Open prototype record",html:"<p>The exact prototypes, engines, flight activity, armament proposals, performance, and final disposition remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Program","He 162 / Volksjäger"],["Status","Paper and prototype work only"],["Operational fleet","None"],["Accepted service type","None established"],["Design authority","Heinkel"],["Postwar project continuity","Yes"],["Prototype details","Open"],["Former He 162C fleet","Withdrawn"]]
  }),

  "ta-183a-1-huckebein": germanEarlyJetArticle({
    title:"Ta 183",eyebrow:"Germany · late-war production or immediate-postwar adoption",infoboxKicker:"Focke-Wulf swept-wing fighter bridge",
    lead:"The Ta 183 reaches late-war production or immediate-postwar adoption and becomes Focke-Wulf's compact swept-wing fighter bridge into the postwar role-series register. Its exact accepted form and technical table remain open.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Ta 183 late-war production or immediate-postwar adoption, compact swept-wing fighter role, and importance to Focke-Wulf's postwar design school are established. Exact service suffix, entry date, performance, engine, armament, production, units, operations, and later derivative sequence remain open.",
    sections:[
      {id:"status",title:"Production or adoption boundary",html:"<p>Current canon places Ta 183 at the transition between late-war production and immediate-postwar adoption without fixing a single ceremonial service date.</p>"},
      {id:"design",title:"Compact swept-wing school",html:"<p>The aircraft gives Focke-Wulf a practical compact jet-fighter architecture from which later wing-planform and handling work proceeds.</p>"},
      {id:"place",title:"Place beside Me 262",html:"<p>Ta 183 does not replace the entire Me 262 establishment at once. The two contribute different operational and design lessons during the transition.</p>"},
      {id:"postwar",title:"Postwar register",html:"<p>Later Focke-Wulf projects enter the national J sequence only upon acceptance; Ta 183's wartime identity remains grandfathered.</p>"},
      {id:"limits",title:"Open technical record",html:"<p>Engine, dimensions, performance, weapons, production, units, operations, and the exact first accepted postwar successor remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Design authority","Focke-Wulf"],["Status","Late-war production or immediate-postwar adoption"],["Role","Compact swept-wing fighter"],["Institutional function","Bridge into postwar register"],["Wartime identity","Grandfathered"],["Exact service suffix","Open"],["Production","Open"],["Specifications","Open"]]
  }),

  "ho-229a-2": germanEarlyJetArticle({
    title:"Ho 229 / H IX",eyebrow:"Germany · operational flying-wing family",infoboxKicker:"Horten-Gotha operational aircraft family",
    lead:"The Ho 229, also rooted in the H IX project identity, is an operational German aircraft family rather than a token batch or dead-end curiosity. Its service gives Horten-Gotha the institutional continuity from which later flying-wing fighters, reconnaissance aircraft, bombers, and transports develop.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Operational-family status, H IX identity, Horten-Gotha institutional continuity, and broad influence across military and civil flying-wing design are established. Exact service suffixes, dates, performance, engines, weapons, production, units, operations, and later accepted types remain open.",
    sections:[
      {id:"status",title:"Operational family",html:"<p>Ho 229 enters the German operational system in meaningful form. It is not confined to a symbolic handful of airframes.</p>"},
      {id:"authority",title:"Horten-Gotha continuity",html:"<p>Horten remains the military design authority while Gotha supplies the public industrial framework. Later accepted aircraft therefore use Ho when Horten controls design.</p>"},
      {id:"signature",title:"Reduced radar return",html:"<p>Lower radar return initially follows from the aircraft's form and materials rather than a complete 1940s stealth doctrine. Repeated experience later turns that consequence into a deliberate design field.</p>"},
      {id:"school",title:"Flying-wing design school",html:"<p>The branch expands into fighters, penetration aircraft, reconnaissance, bombers, and civilian transports, compounding structural and pressure-vessel knowledge.</p>"},
      {id:"limits",title:"Open family register",html:"<p>Exact production marks, engines, performance, armament, unit history, losses, upgrades, and the accepted post-1948 descendants remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Design authority","Horten-Gotha"],["Project identity","H IX"],["Service identity","Ho 229 family"],["Status","Operational family"],["Design school","Flying wing"],["Early radar signature","Secondary consequence of form"],["Later influence","Military and civil aircraft"],["Detailed register","Open"]]
  }),

  "ar-234c-3-blitz": germanEarlyJetArticle({
    title:"Ar 234",eyebrow:"Germany · operational jet bomber and reconnaissance family",infoboxKicker:"Arado early jet-aircraft family",
    lead:"The Ar 234 is Germany's operational early jet bomber and reconnaissance aircraft. It establishes Arado's practical high-speed strike and surveillance school, but the present canon does not fix the former C-3 subtype, a 1946 entry date, or a detailed performance and armament table.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Operational bomber and reconnaissance status, Arado design authority, early-jet-generation membership, and influence upon the postwar Arado strike and surveillance branch are established. Exact subtypes, dates, engines, performance, armament, production, units, operations, losses, upgrades, and retirement remain open.",
    sections:[
      {id:"status",title:"Operational status",html:"<p>Ar 234 serves in operational bombing and reconnaissance rather than remaining only an experimental airframe. The two missions share speed and sensor requirements while retaining distinct payload, navigation, and operating demands.</p>"},
      {id:"arado",title:"Arado design school",html:"<p>The family gives Arado experience in jet installation, high-speed navigation, photographic and other reconnaissance equipment, conventional strike, maintenance, and field operations.</p>"},
      {id:"register",title:"Grandfathered identity",html:"<p>Because Ar 234 receives its designation under the wartime system, the Reichsluftgerätordnung 1948 preserves that identity. Later Arado projects receive a national role-series designation only when accepted.</p>"},
      {id:"postwar",title:"Postwar inheritance",html:"<p>Arado carries the operational lessons into later fast-strike, surveillance, sensor, navigation, electronic-warfare, and guided-weapon work. The continuity belongs to a design branch rather than a fabricated sequence of 500-series aircraft.</p>"},
      {id:"limits",title:"Open subtype record",html:"<p>The current source does not establish one definitive production suffix, entry date, performance table, weapon fit, production total, unit history, or service retirement.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Country","Greater German Reich"],["Design authority","Arado"],["Status","Operational family"],["Principal roles","Bomber · reconnaissance"],["Designation status","Wartime identity grandfathered after 1948"],["Postwar influence","Fast strike and surveillance branch"],["Former C-3 specification","Not retained"],["Detailed register","Open"]]
  }),

  "ef-131a-0": germanEarlyJetArticle({
    title:"Ju 287 / EF 131 evaluation program",eyebrow:"Germany · experimental forward-swept-wing family",infoboxKicker:"Junkers structural and aerodynamic evaluation",
    lead:"The Ju 287 and EF 131 successors form a sixteen-aircraft German evaluation program for forward-swept-wing, structural, and related experimental work. They do not become a standard reconnaissance-bomber fleet, and the former EF 131A-0 service specification is not retained.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Ju 287 and EF successor experimental-family status, forward-swept-wing and structural research, a sixteen-aircraft evaluation program, and absence of a standard bomber fleet are established. Exact airframe identities, suffixes, dates, engines, performance, equipment, individual tests, losses, and dispositions remain open.",
    sections:[
      {id:"program",title:"Evaluation rather than fleet service",html:"<p>The sixteen aircraft support a bounded evaluation program. Their existence establishes sustained flying and structural research without creating regular bomber groups or a mature operational type.</p>"},
      {id:"research",title:"Forward-swept-wing research",html:"<p>The family investigates aeroelastic behavior, stiffness, control, high-speed handling, and the integration problems created by forward sweep. Results can influence later designs even when the test aircraft themselves never become standard equipment.</p>"},
      {id:"identities",title:"Ju 287 and EF successors",html:"<p>Ju 287 identifies the experimental foundation, while EF successor identities distinguish later development work. The current reference does not fix a complete mapping of sixteen individual aircraft to one definitive suffix sequence.</p>"},
      {id:"boundary",title:"No standard reconnaissance-bomber type",html:"<p>The evaluation family may carry instruments, test installations, or mission-representative equipment. That does not establish a 1949 EF 131A-0 operational reconnaissance-bomber fleet.</p>"},
      {id:"limits",title:"Open test record",html:"<p>Construction chronology, engine installations, performance, flight programs, instruments, individual airframes, and final dispositions remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Country","Greater German Reich"],["Design authority","Junkers and EF successor work"],["Program type","Experimental evaluation"],["Evaluation aircraft","Sixteen"],["Principal fields","Forward sweep · structures · high-speed research"],["Standard bomber fleet","None"],["Former EF 131A-0 service type","Not retained"],["Detailed test register","Open"]]
  })
});
