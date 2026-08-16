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
    lead:"Germany's late-war and immediate-postwar high-speed aircraft generation is centered on the regular Me 262 fighter, the limited-service Me 262 HG III development, Ta 183 production or adoption, the operational Ho 229 family, operational Ar 234 bombers and reconnaissance aircraft, and experimental Junkers work. The brief <a href='me-163-komet.html'>Me 163 Komet</a> fighter branch becomes a rocket and glider laboratory, while the He 162 remains paper and prototype work.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The Me 262 operational school, limited early-1947 HG III production and operational use, Me 163's brief existence and later demonstrator role, HG III endurance and maintenance penalties, Ta 183 bridge, operational Ho 229 family, Ar 234 role, Junkers experimental work, and non-operational He 162 status are established. Detailed subtype chronology, specifications, production totals, units, weapons, losses, and exact transition into the post-1948 register remain open.",
    sections:[
      {id:"me262",title:"Me 262 operational school",html:"<p>Me 262 is the regular wartime jet fighter and the baseline from which Messerschmitt learns high-speed operations, turbine maintenance, armament integration, and later interceptor design.</p>"},
      {id:"me163",title:"Me 163 rocket and glider laboratory",html:"<p><a href='me-163-komet.html'>Me 163 Komet</a> exists only briefly as a fighter. Its operational branch is abandoned as a dead end, but its rocket handling, steep-climb, tailless-flight, glide, landing, and high-altitude experience survives in a small evaluation and technical-demonstration establishment.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"},
      {id:"research",title:"HG III limited service",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-q8v3m writer=g kind=revision created=2026-08-15T18:45:00-06:00 --><p>Me 262 HG III moved from high-speed research into a short early-1947 production run and a small operational force during the Second Battle of Britain.<sup class='canon-note' data-provenance='a'>[a]</sup> Wing-root engine installation and revised aerodynamics improved speed, while reduced fuel volume, difficult low-speed recovery, and severe maintenance access prevented it from replacing the regular Me 262.</p><!-- altwwii-writer-block:end -->"},
      {id:"focke",title:"Ta 183 bridge",html:"<p>Ta 183 reaches late-war production or immediate-postwar adoption and gives Focke-Wulf a compact swept-wing fighter school. It is not displaced by an operational He 162 fleet.</p>"},
      {id:"horten",title:"Ho 229 family",html:"<p>Ho 229 is an operational family and the institutional beginning of Horten-Gotha's long flying-wing school. Reduced radar return is initially a consequence of form rather than a complete stealth doctrine.</p>"},
      {id:"other",title:"Arado and Junkers",html:"<p>Ar 234 remains an operational bomber and reconnaissance aircraft. Ju 287 and EF successors remain experimental structural and forward-swept-wing work rather than a settled mass-bomber fleet.</p>"},
      {id:"heinkel",title:"He 162 boundary",html:"<p>The Volksjäger emergency program does not produce an operational service fleet in this war. He 162 survives only as paper and prototype work.</p>"}
    ],
    related:[...germanEarlyJetRelated,{href:"me-163-komet.html",kicker:"Rocket demonstrator",label:"Me 163 Komet"}],
    facts:[["Regular wartime fighter","Me 262"],["Limited-service high-speed development","Me 262 HG III · early 1947"],["Rocket-fighter branch","Me 163 · brief; retained as demonstrator"],["Focke-Wulf bridge","Ta 183"],["Flying-wing family","Ho 229 / H IX"],["Bomber and reconnaissance","Ar 234"],["Experimental Junkers line","Ju 287 / EF successors"],["He 162 status","Paper and prototype work only"],["Detailed specifications","Open"]]
  }),

  "me-163-komet": germanEarlyJetArticle({
    title:"Me 163 Komet",eyebrow:"Germany · rocket aircraft and technical demonstrator",infoboxKicker:"Rocket-powered research aircraft",
    lead:"The Me 163 Komet existed briefly as a German rocket fighter before being abandoned as an operational dead end. It survived as a technology demonstrator because its steep-climb, tailless-flight, rocket-handling, and especially gliding characteristics gave German test and training organizations experience unavailable from conventional piston or turbine aircraft.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The Me 163's brief existence, abandonment as an operational fighter, excellent glide profile, and survival as a rocket and aerodynamic technology demonstrator are directly established.<sup class='canon-note' data-provenance='a'>[a]</sup> A small evaluation establishment and the fields of knowledge retained from it are incorporated explanations of that established demonstrator role.<sup class='canon-note' data-provenance='e'>[e]</sup> Exact variants, engines, propellants, dimensions, performance, weapons, production, units, accidents, operations, and final disposition remain open.",
    sections:[
      {id:"fighter",title:"Brief fighter program",html:"<p>The Me 163 entered the German high-speed aircraft effort as a rocket-powered point-defense fighter. Its fighter existence was brief and did not mature into a regular operational branch comparable to the <a href='me-262a-1.html'>Me 262</a> establishment.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"},
      {id:"dead-end",title:"Operational dead end",html:"<p>The combination of specialized propulsion, narrow mission utility, handling demands, and support burden ended the aircraft's future as a practical fighter. The program is therefore not an ancestor of a large German rocket-interceptor fleet.</p>"},
      {id:"glide",title:"Glide and landing research",html:"<p>The airframe demonstrated an excellent glide profile.<sup class='canon-note' data-provenance='a'>[a]</sup> Unpowered approaches and landings turned that characteristic into a research subject in its own right, linking high-energy powered flight to energy management after propulsion ended.</p>"},
      {id:"rocket",title:"Rocket operations",html:"<p>The program created experience in rocket handling, rapid climb, short powered flight, ground preparation, and the organizational separation between propulsion specialists and ordinary flight-line work. Exact propellant chemistry and engine marks remain open.</p>"},
      {id:"evaluation",title:"Evaluation establishment",html:"<p>Once the fighter branch ended, a small evaluation establishment could retain airframes, crews, technicians, and documentation for test and demonstration work.<sup class='canon-note' data-provenance='e'>[e]</sup> This was a laboratory function rather than a concealed combat fleet.</p>"},
      {id:"human",title:"Flight and human-factors lessons",html:"<p>Test activity joined tailless-aircraft handling, steep climbs, gliding approaches, landing judgment, rocket safety, and high-altitude physiology into one compact body of knowledge. Some lessons overlapped with later high-speed and spaceflight work without making the Komet a direct spacecraft ancestor.</p>"},
      {id:"legacy",title:"Technical legacy",html:"<p>The Komet's legacy rests on the separation between a poor operational weapon and a useful experimental aircraft. Germany discarded its fighter concept while retaining data, methods, and personnel experience for later aerodynamic and rocket programs.</p>"},
      {id:"record",title:"Open technical record",html:"<p>Current canon fixes no complete subtype list, engine or propellant table, speed, range, ceiling, armament, airframe total, unit, combat action, accident chronology, or retirement date.</p>"}
    ],
    related:[...germanEarlyJetRelated,{href:"german-early-jet-generation.html",kicker:"Contemporary aircraft context",label:"German Late-War and Immediate-Postwar Jets"}],
    facts:[["Country","Greater German Reich"],["Design authority","Messerschmitt"],["Original role","Rocket fighter"],["Fighter status","Brief; abandoned as a dead end"],["Surviving role","Technology demonstrator"],["Noted characteristic","Excellent glide profile"],["Research fields","Rocket handling · tailless flight · glide and landing"],["Later operational rocket-fighter fleet","None established"],["Detailed specifications","Open"]]
  }),

  "reichsluftgeraetordnung-1948": germanEarlyJetArticle({
    title:"Reichsluftgerätordnung 1948",category:"Aircraft designation systems",eyebrow:"Germany · military-aircraft registration reform · 1948",infoboxKicker:"German aircraft designation regulation",
    lead:"The Reichsluftgerätordnung 1948 creates a national role-series register for newly accepted German aircraft while grandfathering every designation assigned under the wartime system. It does not reset new aircraft into a 500 block.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The 1948 regulation, role codes, national rather than manufacturer-specific ordinals, design-authority prefixes, major-series letters, production-standard numbers, prototype and pre-series terms, and separate company project registers are established. Exact post-1948 acceptance ordinals remain open.",
    sections:[
      {id:"scope",title:"Scope",html:"<p>The regulation applies to aircraft newly accepted after its adoption in 1948. It replaces the practice of drawing every service aircraft from one monolithic RLM number sequence. Types that already held Me, Fw, Ta, Ho, Ar, Ju, He, Do, or other wartime identities kept them for their remaining service lives.</p><p>The regulation governs the operational service identity. Company studies, experimental files, individual airframes, production contracts, and removable mission equipment use separate records.</p>"},
      {id:"form",title:"Designation form",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Element</th><th>Function</th><th>Illustrative value</th></tr></thead><tbody><tr><td>Design-authority prefix</td><td>Organization responsible for the accepted design</td><td>Me</td></tr><tr><td>Role code</td><td>National mission register</td><td>J</td></tr><tr><td>Acceptance ordinal</td><td>Order of acceptance within that role</td><td>4</td></tr><tr><td>Major-series letter</td><td>Substantial architectural redesign</td><td>B</td></tr><tr><td>Production-standard number</td><td>Standardized equipment or production form</td><td>-2</td></tr></tbody></table></div><p>The complete illustrative form <code>Me J4B-2</code> identifies a Messerschmitt design, the fourth aircraft accepted in the fighter register, its second major architecture, and its second standardized production form. It is an example of grammar, not a confirmed aircraft.</p>"},
      {id:"roles",title:"Role codes",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Code</th><th>German category</th><th>Coverage</th></tr></thead><tbody><tr><td>J</td><td><em>Jagdflugzeug</em></td><td>Fighters, interceptors, air-superiority aircraft, and escorts</td></tr><tr><td>S</td><td><em>Schlachtflugzeug</em></td><td>Ground attack and close support</td></tr><tr><td>B</td><td><em>Bombenflugzeug</em></td><td>Tactical through strategic bombers</td></tr><tr><td>A</td><td><em>Aufklärungsflugzeug</em></td><td>Reconnaissance and surveillance</td></tr><tr><td>Se</td><td><em>Seeflugzeug</em> / <em>Seeaufklärer</em></td><td>Dedicated maritime patrol and attack</td></tr><tr><td>T</td><td><em>Transportflugzeug</em></td><td>Cargo, troop transport, and tanker derivatives</td></tr><tr><td>Sch</td><td><em>Schulflugzeug</em></td><td>Trainers</td></tr><tr><td>H</td><td><em>Hubschrauber</em></td><td>Helicopters and other rotary-wing aircraft</td></tr><tr><td>Vb</td><td><em>Verbindungsflugzeug</em></td><td>Liaison and utility aircraft where a separate class is required</td></tr></tbody></table></div>"},
      {id:"national",title:"National ordinals",html:"<p>Each role has one national sequence shared by all design authorities. If a Messerschmitt fighter, a Focke-Wulf fighter, and a Heinkel fighter were accepted in that order, they would receive consecutive J ordinals. A company's private project count has no effect on the service number.</p><p>An ordinal records acceptance order, not technical generation, factory ownership, or relative importance. A later aircraft can belong to an older design school while consuming the next available number.</p>"},
      {id:"authority",title:"Design-authority prefixes",html:"<p>The prefix identifies the design authority responsible when the aircraft enters the register. It does not list every factory that manufactures components or assembles airframes. Licensed and dispersed production therefore remains under the accepted prefix.</p><p>An Arado type accepted before absorption of its military design bureau remains Ar for life. New work by the combined authority enters under Me. Horten-Gotha uses Ho because Horten remains the military design authority; no separate Go service branch is established.</p>"},
      {id:"series",title:"Series and production standards",html:"<p>A, B, and C identify major architectural redesigns inside one accepted type. Hyphenated numbers identify standardized equipment and production forms within the architecture. The system allows engines, radar, weapons, electrical equipment, and manufacturing changes to be recorded without assigning a new national ordinal.</p><p>The -0 suffix marks a pre-series batch. V remains the marker for an individual prototype airframe. The aircraft's individual factory and service identity is carried by a separate <em>Werknummer</em>.</p>"},
      {id:"kits",title:"Mission kits and permanent changes",html:"<p>The /R notation survives for genuinely removable, family-specific mission kits. Equipment installed and removed as a field package can therefore be distinguished from a permanent production change.</p><p>Permanent factory modifications receive a new production-standard number. The regulation avoids the extensive proliferation of /U suffixes found in late-war documentation.</p>"},
      {id:"projects",title:"Company projects and acceptance",html:"<p><a href='german-aircraft-company-project-registers.html'>Company project registers</a> remain independent of the national sequence. Paper designs, wind-tunnel articles, mock-ups, and privately financed flying demonstrators can proceed under a company's own project number. None consumes a role ordinal before formal acceptance.</p><p>When both identities exist, the service designation becomes primary for an accepted aircraft. The internal project number remains important for design history, prototypes, and competing configurations.</p>"},
      {id:"grandfathering",title:"Grandfathered designations",html:"<p><a href='me-262a-1.html'>Me 262</a>, <a href='ta-183a-1-huckebein.html'>Ta 183</a>, <a href='ho-229a-2.html'>Ho 229</a>, <a href='ar-234c-3-blitz.html'>Ar 234</a>, and other aircraft assigned under the wartime system retain those names. They are not retrospectively translated into J, B, A, or other role-series numbers.</p><p>The withdrawn postwar 500-series catalog has no standing under the regulation. Labels such as Me 501 and Fw 502 cannot be reconstructed as service types from their former position in that catalog.</p>"},
      {id:"reference",title:"Reference practice",html:"<p>Technical histories give both the internal project identity and service designation when both are known. The national designation is used for service, production, and operational records after acceptance. The company project identity remains primary for a design that never enters the national register.</p><p>Prototype suffixes, production-standard numbers, and <em>Werknummern</em> answer different questions and are not interchangeable.</p>"},
      {id:"open",title:"Open acceptance chronology",html:"<p>The exact J, S, B, A, Se, T, Sch, H, and Vb sequences after 1948 have not been reconstructed. No exact ordinal, public name, acceptance date, production mark, or unit assignment should be inferred solely from a company's project ledger.</p><p>The issuing office, amendment history, printed forms, and archival custody of the regulation also remain open.</p>"}
    ],
    related:[...germanEarlyJetRelated,{href:"german-aircraft-company-project-registers.html",kicker:"Pre-acceptance layer",label:"German Aircraft Company Project Registers"},{href:"german-mature-atmospheric-fleet.html",kicker:"Operational application",label:"German Postwar Atmospheric Design Branches"}],
    facts:[["Adopted","1948"],["Applies to","Newly accepted aircraft"],["Operational form","Design authority + role + national ordinal + major series + production standard"],["Older designations","Grandfathered"],["Ordinal basis","National sequence within each role"],["Prefix meaning","Design authority"],["Prototype marker","V"],["Pre-series marker","-0"],["Individual-airframe record","Werknummer"],["Removable mission kit","/R"],["500 block","Not used"],["Exact acceptance chronology","Open"],["Issuing office and amendments","Open"]]
  }),

  "me-262a-1": germanEarlyJetArticle({
    title:"Me 262",eyebrow:"Germany · regular wartime jet fighter",infoboxKicker:"Operational jet-fighter family",
    lead:"The Me 262 is Germany's regular operational jet fighter during the Second World War and the foundation of its mature turbine-fighter school. Current canon fixes that institutional role without fixing a complete subtype, performance, armament, or production register.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Regular operational status, wartime service, foundational influence upon Messerschmitt's later high-speed branch, and the HG III branch's limited early-1947 production and operational use are established. Subtype chronology, specifications, armament, production totals, units, operations, losses, upgrades, and retirement remain open unless established elsewhere.",
    sections:[
      {id:"status",title:"Operational status",html:"<p>Me 262 is a regular fighter rather than a small experimental detachment. It creates sustained experience in jet conversion, maintenance, basing, fuel, training, and combat employment.</p>"},
      {id:"school",title:"Turbine-fighter school",html:"<p>Operational experience links aerodynamic design to engine reliability, field servicing, weapons, pilot conversion, and the practical limits of early turbines.</p>"},
      {id:"research",title:"HG developments",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-k6r2p writer=g kind=revision created=2026-08-15T18:45:00-06:00 --><p>High-speed developments explored revised wings, fuselage work, and engine integration. HG III reached a short production run and small operational force in early 1947, but its low endurance and maintenance burden ended the branch before it could displace the regular Me 262.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"inheritance",title:"Postwar inheritance",html:"<p>Messerschmitt carries the operational and research record into later high-speed interceptor projects under the post-1948 role-series system.</p>"},
      {id:"limits",title:"Open technical record",html:"<p>Current canon does not fix a complete subtype list, engine table, speed, range, ceiling, weapon battery, production total, or unit history.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Country","Greater German Reich"],["Status","Regular operational fighter"],["Period","Second World War"],["Design authority","Messerschmitt"],["Research branch","HG developments"],["Postwar influence","High-speed interceptor school"],["Detailed subtype register","Open"],["Specifications","Open"]]
  }),

  "me-262f": germanEarlyJetArticle({
    title:"Me 262 HG III",eyebrow:"Germany · limited-service high-speed development · 1947",infoboxKicker:"Limited-production high-speed fighter",
    lead:"Me 262 HG III was a high-speed development that entered a short production run and limited operational service in early 1947. Its wing-root engine installation and revised aerodynamics improved speed while reducing fuel volume and endurance and making engine access exceptionally difficult.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The early-1947 limited production run, small operational force during the Second Battle of Britain, wing-root engine integration, revised aerodynamics, improved speed, reduced fuel volume, low endurance, difficult low-speed recovery, severe maintenance burden, and influence upon later Messerschmitt projects are established. Exact designation detail, dates, engines, performance, airframes, unit identity, sorties, losses, and later project transfers remain open.",
    sections:[
      {id:"purpose",title:"Research and limited service",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-n9c4x writer=g kind=revision created=2026-08-15T18:45:00-06:00 --><p>HG III began as a test of high-speed aerodynamic and engine-integration choices beyond the regular Me 262 fleet. A short early-1947 production run equipped a small operational force during the Second Battle of Britain, where its speed had greater propaganda prominence than its numerical effect.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"installation",title:"Wing-root engine installation",html:"<p>Moving the propulsion installation into the wing-root region changes drag, structure, ducts, access, and internal volume together.</p>"},
      {id:"endurance",title:"The endurance penalty",html:"<p>The revised arrangement removes fuel volume. The aircraft is remembered for low endurance as well as higher speed, preventing a one-dimensional success narrative.</p>"},
      {id:"legacy",title:"Later Messerschmitt projects",html:"<p>The lessons feed later high-speed projects under new company and service identities rather than extending the HG III production branch indefinitely.</p>"},
      {id:"limits",title:"Open technical detail",html:"<p>Dimensions, engine model, speed, range, production total, unit identity, individual airframes, sorties, losses, and the exact transfer into later projects remain open.</p>"}
    ],
    related:germanEarlyJetRelated,
    facts:[["Family","Me 262 HG"],["Status","Limited production and operational service"],["Production period","Early 1947"],["Combat use","Second Battle of Britain"],["Principal feature","Wing-root engine integration"],["Aerodynamic effect","Improved speed"],["Packaging effect","Reduced fuel volume"],["Operational limits","Low endurance · difficult maintenance"],["Detailed specifications","Open"]]
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
      {id:"school",title:"Flying-wing design school",html:"<p>The branch expands into fighters, penetration aircraft, reconnaissance, bombers, and civilian transports. Postwar production of the <a href='horten-xviii.html'>Horten XVIII</a> and civil operation of the <a href='gotha-weltblick.html'>Gotha Weltblick</a> compound structural, pressure-vessel, multi-engine, and flight-control knowledge.</p>"},
      {id:"limits",title:"Open family register",html:"<p>Exact production marks, engines, performance, armament, unit history, losses, upgrades, and the accepted post-1948 descendants remain open.</p>"}
    ],
    related:[...germanEarlyJetRelated,{href:"horten-xviii.html",kicker:"Postwar bomber lineage",label:"Horten XVIII"},{href:"gotha-weltblick.html",kicker:"Civil flying-wing lineage",label:"Gotha Weltblick"}],
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
