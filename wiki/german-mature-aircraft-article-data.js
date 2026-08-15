window.deepArticles = window.deepArticles || {};

const germanPostwarSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — German postwar atmospheric development"},
  {href:"../transcript.md",label:"Master Transcript — revised German aircraft and industrial branches"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German military and aerospace order"}
];

const germanPostwarRelated = [
  {href:"german-mature-atmospheric-fleet.html",kicker:"System overview",label:"German Postwar Atmospheric Design Branches"},
  {href:"german-clean-register-generation.html",kicker:"Designation system",label:"German Post-1948 Aircraft Register"},
  {href:"reichsluftgeraetordnung-1948.html",kicker:"Controlling regulation",label:"Reichsluftgerätordnung 1948"},
  {href:"germany.html",kicker:"Operator",label:"Greater German Reich"}
];

const germanPostwarArticle = config => ({
  category:config.category || "Military aircraft",
  eyebrow:config.eyebrow || "Germany · postwar atmospheric development",
  infoboxKicker:config.infoboxKicker || "German aircraft development branch",
  ...config,
  sources:germanPostwarSources,
  categories:config.categories || ["Greater German Reich","Luftwaffe","Military aircraft","Aerospace industry","Postwar aviation"]
});

const germanPostwarBranch = config => germanPostwarArticle({
  title:config.title,
  lead:`${config.authority}'s ${config.phase} ${config.role} work belongs to Germany's continuing specialized atmospheric fleet, but the exact accepted service ordinal, production series, dates, performance, and armament remain open. The former numbered service type associated with this legacy URL is withdrawn.<sup class='canon-note' data-provenance='a'>[a]</sup>`,
  canon:`The ${config.authority} design authority, the ${config.role} branch, its place in Germany's specialized force structure, and the stated development emphasis are established. Exact designation, public name, acceptance date, dimensions, engines, performance, weapons, production, units, and operations remain open.`,
  sections:[
    {id:"branch",title:"Branch continuity",html:`<p>${config.lineage}</p>`},
    {id:"doctrine",title:"Operational field",html:`<p>${config.doctrine}</p>`},
    {id:"systems",title:"Systems emphasis",html:`<p>${config.emphasis}</p>`},
    {id:"designation",title:"Designation status",html:"<p>Accepted aircraft receive a design-authority prefix, role code, and national ordinal. Company project numbers and legacy catalog positions cannot be converted mechanically into that sequence.</p>"},
    {id:"limits",title:"Open record",html:"<p>The surviving canon establishes a design school and force requirement rather than a complete equipment table. No speed, radius, ceiling, weapon load, or service date is inferred for this branch.</p>"}
  ],
  related:germanPostwarRelated,
  facts:[["Design authority",config.authority],["Development phase",config.phase],["Role branch",config.role],["Service register","National role-series ordinal"],["Former numbered type","Withdrawn"],["Accepted designation","Open"],["Entry date","Open"],["Detailed specifications","Open"]]
});

Object.assign(window.deepArticles, {
  "german-mature-atmospheric-fleet": germanPostwarArticle({
    title:"German postwar atmospheric design branches",category:"Aircraft lineage",eyebrow:"Specialized airframes · integrated warning · exact ordinals open",infoboxKicker:"German postwar air system",
    lead:"Germany's postwar atmospheric fleet preserves separate interceptor, air-superiority, strike, close-support, maritime, reconnaissance, and strategic-bomber branches. Its former fifteen-type 500-series catalog is withdrawn; current canon fixes the design schools and integrated combat system while leaving exact post-1948 service ordinals open.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"Separate German mission branches, continuing design authorities, integrated radar and guided weapons, ground control, orbital warning, night and all-weather experience, and specialized airframes are established through 1985. Exact J, S, B, A, and Se ordinals, service dates, performance tables, weapon loads, production, and order of battle remain open.",
    sections:[
      {id:"structure",title:"A specialized force",html:"<p>Germany does not force every mission into a universal combat aircraft. Interceptors, air-superiority fighters, battlefield support, theater strike, maritime work, reconnaissance, and strategic bombing remain distinct procurement and training problems.</p>"},
      {id:"authorities",title:"Continuing design authorities",html:"<p>Messerschmitt continues high-speed interceptors; Focke-Wulf explores fighter handling and wing planforms; Horten-Gotha develops flying-wing families; Junkers emphasizes research and maritime or heavy-aircraft systems; Arado remains important in fast strike and reconnaissance before absorption; Heinkel continues aircraft and engine projects.</p>"},
      {id:"integration",title:"Integrated combat system",html:"<p>Radar, guided weapons, ground control, orbital warning, night and all-weather experience, and specialized airframes make the German system more dangerous than any single published speed figure would suggest.</p>"},
      {id:"register",title:"Role-series acceptance",html:"<p>Post-1948 types enter national role sequences rather than a manufacturer-by-manufacturer 500 block. A company demonstrator does not receive a service ordinal until accepted.</p>"},
      {id:"open",title:"Unfixed fleet chronology",html:"<p>The accepted sequence after 1948 has not yet been reconstructed. Public names, detailed specifications, service dates, unit histories, and later marks therefore remain open rather than being filled from the superseded catalog.</p>"}
    ],
    related:germanPostwarRelated,
    facts:[["Force structure","Specialized mission branches"],["Principal strengths","Radar · guided weapons · ground control · orbital warning"],["Designation system","National role-series ordinals"],["Former fleet catalog","Withdrawn"],["Exact accepted types","Open"],["Detailed performance","Open"],["Order of battle","Open"],["Coverage","Through 1985"]]
  }),

  "me-511a-1-adler": germanPostwarBranch({title:"Messerschmitt postwar interceptor branch",authority:"Messerschmitt",phase:"earlier postwar",role:"high-speed interceptor",lineage:"Me 262 and HG III research give Messerschmitt a strong engine-integration and high-speed foundation. Later projects pursue interception without turning HG III into a fictional chain of lettered production types.",doctrine:"The branch answers long-range and all-weather interception requirements inside a layered German warning network.",emphasis:"High-speed aerodynamics, radar, guided weapons, propulsion integration, and controlled interception shape the work."}),
  "fw-512a-1-sperber": germanPostwarBranch({title:"Focke-Wulf postwar fighter branch",authority:"Focke-Wulf",phase:"earlier postwar",role:"air-superiority fighter",lineage:"Ta 183 provides the compact swept-wing bridge into later Focke-Wulf fighter projects and remains more important than any withdrawn catalog label.",doctrine:"The branch supports ordinary frontline and air-superiority work distinct from the heavier Messerschmitt interceptor requirement.",emphasis:"Wing planform, handling, radar, missile integration, and coordination with ground control develop together."}),
  "ar-513a-1-blitz-iii": germanPostwarBranch({title:"Arado postwar strike branch",authority:"Arado",phase:"earlier postwar",role:"fast strike and reconnaissance",lineage:"Ar 234 operational experience anchors Arado's postwar work in speed, reconnaissance, and conventional strike before the military bureau's later absorption.",doctrine:"The branch treats theater strike and fast reconnaissance as related but not interchangeable missions.",emphasis:"Navigation, sensors, low-level penetration, electronic warfare, and guided conventional weapons are the central systems problems."}),
  "fw-514a-1-wuerger-ii": germanPostwarBranch({title:"Focke-Wulf postwar close-support branch",authority:"Focke-Wulf",phase:"earlier postwar",role:"ground attack and close support",lineage:"Focke-Wulf preserves a battlefield-aircraft branch separate from its fighter work, reflecting Germany's refusal to let air-superiority requirements erase direct support.",doctrine:"Close support depends upon survivability, battlefield control, useful loiter, and coordination with ground formations rather than maximum speed.",emphasis:"Protection, redundancy, low-level handling, identification, radios, and conventional stores define the branch's technical demands."}),
  "ju-516a-1-seeadler": germanPostwarBranch({title:"Junkers postwar maritime-aircraft branch",authority:"Junkers",phase:"earlier postwar",role:"maritime patrol and heavy systems",lineage:"Junkers combines systematic research with long-range maritime and heavy-aircraft development rather than a fixed succession of provisional service numbers.",doctrine:"The branch supports surveillance, classification, fleet cooperation, antisubmarine work, and guided-weapon control over wide maritime areas.",emphasis:"Sensors, communications, endurance, electronic support, heavy structures, and maritime weapons integration dominate development."}),
  "me-521a-1-falke-ii": germanPostwarBranch({title:"Messerschmitt mature interceptor projects",authority:"Messerschmitt",phase:"mature Cold Peace",role:"high-speed interceptor",lineage:"The mature Messerschmitt branch compounds decades of high-speed aerodynamics, propulsion integration, and all-weather interception experience.",doctrine:"Interceptors work with ground and orbital warning, protected communications, and guided weapons rather than as isolated speed records.",emphasis:"Look-down radar, electronic warfare, long-range missiles, data links, and propulsion remain the key system fields."}),
  "fw-522a-1-habicht-ii": germanPostwarBranch({title:"Focke-Wulf mature fighter projects",authority:"Focke-Wulf",phase:"mature Cold Peace",role:"air-superiority fighter",lineage:"Focke-Wulf's mature fighter work preserves its separate handling and wing-planform school inside an increasingly digital combat network.",doctrine:"The branch provides air-superiority and frontline depth while heavy interception remains a distinct requirement.",emphasis:"Digital flight and mission systems, radar, missiles, data links, and carrier-independent field operation shape the work."}),
  "ar-523a-1-blitz-iv": germanPostwarBranch({title:"Arado mature strike projects",authority:"Arado",phase:"mature Cold Peace",role:"theater strike and reconnaissance",lineage:"Arado's mature projects extend the fast-strike and reconnaissance school until military design authority passes into the combined organization.",doctrine:"The branch emphasizes conventional theater attack, penetration, and timely reconnaissance rather than strategic mass destruction.",emphasis:"Terrain following, navigation, electronic warfare, sensors, and guided stores define the systems problem."}),
  "fw-524a-1-wuerger-iii": germanPostwarBranch({title:"Focke-Wulf mature close-support projects",authority:"Focke-Wulf",phase:"mature Cold Peace",role:"armored ground attack and close support",lineage:"The mature battlefield branch remains organizationally and technically distinct from Focke-Wulf's faster fighter projects.",doctrine:"Its success is measured by survival, responsiveness, identification, and effect near friendly forces rather than ceiling or dash speed.",emphasis:"Armor, redundant systems, forward control, low-level handling, sensors, and conventional battlefield weapons remain central."}),
  "ju-526a-1-seeadler-ii": germanPostwarBranch({title:"Junkers mature maritime projects",authority:"Junkers",phase:"mature Cold Peace",role:"long-range maritime surveillance and heavy systems",lineage:"Junkers' mature maritime work combines the firm's research culture with wide-area surveillance and heavy-aircraft integration.",doctrine:"The branch supports maritime warning, antisubmarine warfare, fleet targeting, and guided-weapon coordination across large patrol regions.",emphasis:"Radar, passive sensors, electronic support, data links, endurance, heavy structures, and maritime mission systems dominate development."})
});
