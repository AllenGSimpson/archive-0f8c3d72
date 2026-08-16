window.deepArticles = window.deepArticles || {};

const americanArmyAirLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — United States Army Air Corps force"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aviation and service institutions"},
  {href:"../transcript.md",label:"Master Transcript — American military modernization and divided air services"}
];

const americanArmyAirOfficialSources = {
  falcon:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196735/general-dynamics-f-16a-fighting-falcon/",label:"National Museum of the U.S. Air Force — General Dynamics F-16A Fighting Falcon"},
  intruder:{href:"https://navalaviationmuseum.org/a-6e-intruder/",label:"National Naval Aviation Museum — A-6 Intruder development history"},
  thunderchief:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196054/republic-f-105d-thunderchief/",label:"National Museum of the U.S. Air Force — Republic F-105D Thunderchief"},
  thunderbolt:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195855/AFmuseum/fairchild-republic-a-10a-thunderbolt-ii/",label:"National Museum of the U.S. Air Force — Fairchild Republic A-10A Thunderbolt II"},
  eagle:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/197972/mcdonnell-douglas-f-15-streak-eagle/",label:"National Museum of the U.S. Air Force — McDonnell Douglas F-15 Streak Eagle"}
};

const americanArmyAirLandscape = {
  src:"assets/diagrams/american-army-air-corps-force.svg",
  alt:"Four United States Army Air Corps aircraft organized by fighter, all-weather attack, interdiction, and close-support roles from 1965 to 1978",
  caption:"The Army preserves four separate battlefield-air roles rather than folding tactical aviation into the Aerospace Force"
};

const americanArmyAirArticle = config => ({
  category:"Military aircraft",
  eyebrow:"United States Army Air Corps",
  landscape:americanArmyAirLandscape,
  ...config,
  categories:config.categories || ["United States","United States Army Air Corps","Military aircraft","Army aviation","Aerospace industry"]
});

const americanArmyAirRelated = [
  {href:"american-army-air-corps-force.html",kicker:"Service register",label:"Army Air Corps Force"},
  {href:"aerospace-doctrine.html",kicker:"Institutional doctrine",label:"Aerospace Doctrine of the United States"},
  {href:"joint-aircraft-designation-act.html",kicker:"Common role system",label:"Joint Aircraft Designation Act"},
  {href:"united-states.html",kicker:"Country of origin",label:"United States"}
];

const americanArmyAirType = c => americanArmyAirArticle({
  title:c.title,
  eyebrow:c.eyebrow || `United States Army Air Corps · introduced ${c.year}`,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:c.canon || `Direct canon preserves Army ownership of battlefield aviation and its separation from Aerospace Force strategic and orbital missions. It does not directly fix this type's ${c.year} introduction, ${c.mission.toLowerCase()} mission, ${c.speed} maximum speed, ${c.radius} combat radius, ${c.ceiling} ceiling, ${c.load.toLowerCase()}, manufacturer, configuration, or service history. Those fields are incorporated reconstruction; production, units, bases, operations, losses, variants, upgrades, and retirement remain open.`,
  sections:[
    ...(c.sourceStatus ? [c.sourceStatus] : []),
    {id:"identity",title:c.identityTitle,html:c.identityHtml},
    {id:"development",title:"Design lineage",html:c.developmentHtml},
    {id:"service",title:"Army Air Corps service",html:c.serviceHtml},
    {id:"mission",title:c.mission,html:c.missionHtml},
    {id:"performance",title:c.performanceTitle || "Working performance register",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>${c.year}</td></tr><tr><th>Mission</th><td>${c.mission}</td></tr><tr><th>Maximum speed</th><td>${c.speed}</td></tr><tr><th>Combat radius</th><td>${c.radius}</td></tr><tr><th>Ceiling</th><td>${c.ceiling}</td></tr><tr><th>Standard armament or load</th><td>${c.load}</td></tr></tbody></table></div>${c.performanceNote || "<p>The complete table is incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"}`},
    {id:"weapons",title:c.weaponsTitle,html:c.weaponsHtml},
    {id:"doctrine",title:c.doctrineTitle,html:c.doctrineHtml},
    {id:"limits",title:"Open service history",html:`<p>${c.open || "Engine mark, dimensions, mass, avionics, production totals, units, bases, readiness, operations, losses, exports, subvariants, upgrades, and retirement remain unregistered."}</p>`}
  ],
  related:[...americanArmyAirRelated,...c.related],
  sources:[...americanArmyAirLocalSources,americanArmyAirOfficialSources[c.official]],
  facts:c.facts || [["Canon status","Incorporated Army attack register"],["Working service","United States Army Air Corps"],["Working introduction",String(c.year)],["Working mission",c.mission],["Working maximum speed",c.speed],["Working combat radius",c.radius],["Working ceiling",c.ceiling],["Working armament or load",c.load]]
});

Object.assign(window.deepArticles, {
  "american-army-air-corps-force": americanArmyAirArticle({
    title:"United States Army Air Corps force",
    category:"Military aviation",
    eyebrow:"Organic battlefield aviation · mature combat register",
    infoboxKicker:"American tactical-air register",
    infoboxTitle:"Army Air Corps force",
    landscape:null,
    lead:"The United States Army Air Corps remained responsible for battlefield aviation. Its detailed mature register combines three specialized attack branches with an incorporated F-15A/F-16A heavy–light fighter pair.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"Continued Army ownership of battlefield aviation and its separation from Aerospace Force strategic and orbital missions are directly established. The five-aircraft architecture, exact A-series register, F-15/F-16 assignments and high–low relationship, dates, performance, designation policy, procurement, units, bases, operations, losses, exports, upgrades, and retirement are incorporated extrapolation or open according to their dedicated pages.",
    sections:[
      {id:"source-status",title:"Canon status of the register",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-sa3k4 writer=g kind=revision created=2026-08-16T11:15:00-06:00 --><p>Direct canon preserves Army ownership of battlefield aviation and separately assigns strategic and orbital missions to the Aerospace Force.<sup class='canon-note' data-provenance='a'>[a]</sup> It does not fix the F-15/F-16 assignments, their high–low pairing, or the complete five-aircraft table; those elements retain their dedicated-page status as incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"institution",title:"Air power inside the Army",html:"<p>The United States never creates one universal independent air force. The Army Air Corps remains an organic branch responsible for battlefield air superiority, attack, close support, reconnaissance, transport, and helicopters. The independent <a href='united-states-aerospace-force.html'>Aerospace Force</a> instead owns strategic strike, continental interception, long-range reconnaissance, missiles, and orbital warfare.</p>"},
      {id:"register",title:"Working combat-aircraft register",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Year</th><th>Principal mission</th></tr></thead><tbody><tr><td><a href='a-6a-intruder.html'>A-6A Intruder</a></td><td>1965</td><td>All-weather theater attack</td></tr><tr><td><a href='a-8a-thunderchief-ii.html'>A-8A Thunderchief II</a></td><td>1972</td><td>Supersonic interdiction and defense suppression</td></tr><tr><td><a href='a-10a-thunderbolt-ii.html'>A-10A Thunderbolt II</a></td><td>1977</td><td>Armored close support</td></tr><tr><td><a href='f-15a-eagle.html'>F-15A Eagle</a></td><td>Not fixed</td><td>Heavy air superiority</td></tr><tr><td><a href='f-16a-falcon.html'>F-16A Falcon</a></td><td>1978</td><td>Compact air superiority</td></tr></tbody></table></div><p>The F-15 and F-16 rows and their relationship are incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"fighter",title:"Heavy and lightweight air superiority",html:"<p>In the incorporated register, F-15A supplies the high-capability fighter and F-16A a compact, more broadly fielded partner. The high–low pairing and rejection of an F/A category are working design choices rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"attack",title:"Three attack problems",html:"<p>The three A-series aircraft do not form a simple replacement line. Intruder penetrates weather and darkness. Thunderchief II reaches deep targets and suppresses air defenses at supersonic speed. Thunderbolt II loiters near ground forces, identifies targets, survives damage, and works under direct battlefield control.</p>"},
      {id:"intruder",title:"All-weather theater attack",html:"<p>A-6A carries the largest registered load in the force and combines it with a 1,300 km combat radius. Its value lies in delivering theater attack through weather and darkness rather than competing with the Aerospace Force's strategic bombers.</p>"},
      {id:"division",title:"Interdiction is not close support",html:"<p>A-8A attacks bridges, airfields, missile batteries, radar sites, and supply columns. A-10A remains near the battle, waits for target identification, and answers directly to ground commanders. Keeping those roles separate prevents speed and penetration requirements from consuming close-support design.</p>"},
      {id:"designation",title:"The common register without common ownership",html:"<p>The <a href='joint-aircraft-designation-act.html'>Joint Aircraft Designation Act of 1963</a> gives future Army, Navy, Marine, and Aerospace aircraft common role sequences. It does not merge their institutions. The same A prefix can therefore describe an Army battlefield aircraft or a Naval Air Corps maritime striker without transferring either mission to a central air service.</p>"},
      {id:"limits",title:"Open force structure",html:"<p>The F-15/F-16 assignments and pairing, procurement competitions, engines, dimensions, avionics, production, units, bases, reserve organization, operations, losses, exports, upgrades, and retirement are not fixed by direct canon.</p>"}
    ],
    related:[{href:"aerospace-doctrine.html",kicker:"Three-service structure",label:"Aerospace Doctrine of the United States"},{href:"joint-aircraft-designation-act.html",kicker:"1963 common register",label:"Joint Aircraft Designation Act"},{href:"teen-series.html",kicker:"Common fighter sequence",label:"Teen Series"},{href:"american-early-jet-generation.html",kicker:"Preceding generation",label:"American Early-Jet Generation"},{href:"f-15a-eagle.html",kicker:"Heavy fighter branch",label:"F-15A Eagle"},{href:"f-16a-falcon.html",kicker:"Lightweight fighter branch",label:"F-16A Falcon"},{href:"a-8a-thunderchief-ii.html",kicker:"Fast-attack branch",label:"A-8A Thunderchief II"},{href:"a-10a-thunderbolt-ii.html",kicker:"Close-support branch",label:"A-10A Thunderbolt II"}],
    sources:[...americanArmyAirLocalSources,{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/",label:"National Museum of the U.S. Air Force — aircraft fact-sheet collection"},americanArmyAirOfficialSources.eagle],
    categories:["United States","United States Army Air Corps","Military aviation","Military aircraft","Army aviation"],
    facts:[["Directly established institution","Army ownership of battlefield aviation"],["Working combat register","Five principal aircraft"],["Working fighter pair","F-15A Eagle · F-16A Falcon"],["Working attack branches","A-6A · A-8A · A-10A"],["Exact designations and specifications","Follow dedicated-page provenance"]]
  }),

  "f-16a-falcon": americanArmyAirType({
    title:"F-16A Falcon",year:1978,mission:"Compact air-superiority fighter",speed:"2,120 km/h",radius:"925 km",ceiling:"15,200 m",load:"One 20×102 mm cannon; six missiles",official:"falcon",kicker:"Compact battlefield air-superiority fighter",
    eyebrow:"United States Army Air Corps · incorporated Teen-Series register",
    lead:"In the incorporated Teen-Series register, F-16A Falcon was the Army Air Corps' compact air-superiority fighter introduced in 1978. Its number, service, date, performance, weapons, and battlefield role are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"Direct canon establishes the F-10 through F-19 interval but does not assign F-16. The Falcon identity, Army ownership, 1978 date, role, performance, weapons, Lightweight Fighter history, designation policy, units, bases, operations, upgrades, and retirement are incorporated extrapolation or open.",
    sourceStatus:{id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-t6v7w writer=g kind=revision created=2026-08-16T11:12:00-06:00 --><p>The author fixes the F-10 through F-19 interval but not an Army F-16 Falcon assignment.<sup class='canon-note' data-provenance='a'>[a]</sup> The compact battlefield fighter and its detailed specification remain compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
    performanceTitle:"Working performance",
    performanceNote:"<p>This table is incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p>",
    facts:[["Canon status","Incorporated Teen-Series assignment"],["Country of origin","United States"],["Working service","United States Army Air Corps"],["Working designation","F-16A Falcon"],["Working introduction","1978"],["Working role","Compact air superiority"],["Working performance","2,120 km/h · 925 km radius · 15,200 m ceiling"],["Working armament","One cannon · six missiles"]],
    identityTitle:"The Army's compact fighter",identityHtml:"<p>Falcon is optimized around battlefield air superiority rather than continental interception or fleet defense. Its place inside the Army follows the American rule that the service controlling the ground battle also controls the air immediately above it.</p>",
    developmentHtml:"<p>General Dynamics developed the F-16 from the American Lightweight Fighter program opened in 1972. That program sought a small, maintainable, high-performance day fighter. The registered 1978 Falcon preserves the compact air-superiority premise while its exact procurement chronology remains open.</p>",
    serviceHtml:"<p>F-16A equips the Army rather than the Aerospace Force. Units defend ground formations, contest theater airspace, escort attack aircraft, and provide a fighter presence able to operate within the Army's battlefield command system.</p>",
    missionHtml:"<p>Air superiority is the principal role. Interception, escort, reconnaissance support, and secondary attack may occur, but the common register does not turn Falcon into an F/A aircraft or remove attack work from dedicated A-series types.</p>",
    weaponsTitle:"Cannon and six missiles",weaponsHtml:"<p>One 20×102 mm cannon and six missiles form the registered combat fit. Missile families, guidance types, stations, ammunition, external tanks, countermeasures, and authorized secondary stores remain open.</p>",
    doctrineTitle:"Separate from strategic interception",doctrineHtml:"<p>The <a href='united-states-aerospace-force.html'>Aerospace Force</a> operates long-range, high-altitude, and continental interceptors. Falcon instead serves the Army's shorter-horizon air battle, preserving a deliberate institutional boundary between theater air superiority and strategic aerospace defense.</p>",
    related:[{href:"a-10a-thunderbolt-ii.html",kicker:"Battlefield partner",label:"A-10A Thunderbolt II"},{href:"american-early-jet-generation.html",kicker:"Earlier fighter foundation",label:"American Early-Jet Generation"}]
  }),

  "a-6a-intruder": americanArmyAirType({
    title:"A-6A Intruder",year:1965,mission:"All-weather theater attack",speed:"1,040 km/h",radius:"1,300 km",ceiling:"12,900 m",load:"7,500 kg stores",official:"intruder",kicker:"All-weather Army theater-attack aircraft",
    fixed:"The Grumman Intruder development family and its all-weather attack identity are retained; operational adoption by the Army is the principal service divergence.",
    lead:"The A-6A Intruder is an incorporated Army Air Corps all-weather theater-attack aircraft. Its Army assignment, 1965 introduction, 1,300 km radius, 7,500 kg load, and precise mission are reconstruction built inside the directly established Army/Aerospace service boundary.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    sourceStatus:{id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-a6u1v writer=g kind=revision created=2026-08-16T12:10:00-06:00 --><p>Direct canon preserves Army battlefield aviation but does not name or assign A-6A. Its Intruder identity, Army service, chronology, specifications, all-weather attack role, and operational history remain incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
    identityTitle:"Intruder in Army service",identityHtml:"<p>The A-6A is an Army combat aircraft despite the design family's maritime origins. The common designation system permits services to adopt aircraft suited to their own missions without creating one central air arm.</p>",
    developmentHtml:"<p>The development A2F-1 first flew in April 1960 and became A-6A under the common designation era. Its defining feature was an integrated all-weather attack and navigation system able to present targets and terrain when visual flight was impossible. The Army form enters service in 1965.</p>",
    serviceHtml:"<p>Army Intruders support theater commands with deep attack beyond immediate close support. The later Naval Air Corps A-6E belongs to a separate maritime-strike branch even though both services retain the Intruder family.</p>",
    missionHtml:"<p>All-weather theater attack includes fixed infrastructure, supply networks, concentrations, and targets hidden by darkness or cloud. Exact targeting systems, navigation crew duties, forward coordination, and relationships with reconnaissance aircraft remain open.</p>",
    weaponsTitle:"Heavy external stores",weaponsHtml:"<p>A registered 7,500 kg stores load defines capacity rather than one standard mission package. Bombs, rockets, missiles, tanks, dispensers, pylons, fuzing, and load-radius combinations remain unregistered.</p>",
    doctrineTitle:"Weather penetration before speed",doctrineHtml:"<p>Intruder solves the weather and navigation problem. The later <a href='a-8a-thunderchief-ii.html'>A-8A Thunderchief II</a> solves the high-speed interdiction and defense-suppression problem, while <a href='a-10a-thunderbolt-ii.html'>A-10A</a> remains with ground commanders for close support.</p>",
    related:[{href:"a-8a-thunderchief-ii.html",kicker:"Fast-attack complement",label:"A-8A Thunderchief II"},{href:"a-10a-thunderbolt-ii.html",kicker:"Close-support complement",label:"A-10A Thunderbolt II"}]
  }),

  "a-8a-thunderchief-ii": americanArmyAirType({
    title:"A-8A Thunderchief II",year:1972,mission:"Supersonic interdiction and defense suppression",speed:"2,050 km/h",radius:"1,100 km",ceiling:"15,000 m",load:"One 20×102 mm cannon; 6,800 kg stores",official:"thunderchief",kicker:"Supersonic interdiction and suppression aircraft",
    fixed:"The Thunderchief II name, role, and registered performance are fixed; manufacturer and exact descent from earlier Republic Thunderchief studies remain open.",
    lead:"The A-8A Thunderchief II is an incorporated Army Air Corps supersonic interdiction and defense-suppression aircraft. Its designation, 1972 introduction, role, performance, cannon, stores load, and mission division from close support are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    sourceStatus:{id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-a8u2w writer=g kind=revision created=2026-08-16T12:10:00-06:00 --><p>Direct canon preserves Army battlefield aviation but does not name or assign A-8A. Its Thunderchief II identity, chronology, specifications, interdiction and defense-suppression role, and relationship to A-10A remain incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
    identityTitle:"Fast attack under an A designation",identityHtml:"<p>The A prefix states the principal role plainly. Thunderchief II may fight its way through defended airspace, but speed and a cannon do not make it the Army's air-superiority fighter. The 1963 common register assigns future attack aircraft their own sequence.</p>",
    developmentHtml:"<p>Republic began a supersonic tactical fighter-bomber project in 1951, and the YF-105A Thunderchief first flew in 1955. Thunderchief II preserves the American industrial and doctrinal interest in a large fast penetrator, but its exact relationship to the earlier aircraft remains unregistered.</p>",
    serviceHtml:"<p>Army theater commands use A-8A against operational-depth targets and hostile air-defense systems. The aircraft works with reconnaissance, electronic support, decoys, and stand-off weapons developed after the <a href='maracaibo-shock.html'>Maracaibo Shock</a>.</p>",
    missionHtml:"<p>Interdiction breaks movement and reinforcement beyond the immediate battlefield. Defense suppression attacks radar, command links, missile batteries, and gun positions so other aircraft can penetrate. Direct response to troops in contact belongs principally to A-10A.</p>",
    weaponsTitle:"Cannon and 6,800 kg stores",weaponsHtml:"<p>One 20×102 mm cannon and 6,800 kg of stores form the registered fit. Anti-radar weapons, bombs, rockets, dispensers, missiles, tanks, electronic pods, pylons, and load-radius trades remain open.</p>",
    doctrineTitle:"The fast half of Army attack",doctrineHtml:"<p>Thunderchief II accepts speed, range, and penetration demands that would compromise a close-support aircraft. The slower <a href='a-10a-thunderbolt-ii.html'>Thunderbolt II</a> can therefore prioritize loiter, identification, survivability, and coordination with ground commanders.</p>",
    related:[{href:"a-10a-thunderbolt-ii.html",kicker:"Close-support counterpart",label:"A-10A Thunderbolt II"},{href:"maracaibo-shock.html",kicker:"Air-defense warning",label:"Maracaibo Shock"}]
  }),

  "a-10a-thunderbolt-ii": americanArmyAirType({
    title:"A-10A Thunderbolt II",year:1977,mission:"Armored close support",speed:"705 km/h",radius:"460 km",ceiling:"13,600 m",load:"One 30×173 mm cannon; 7,250 kg stores",official:"thunderbolt",kicker:"Armored battlefield close-support aircraft",
    lead:"The A-10A Thunderbolt II is an incorporated Army Air Corps armored close-support aircraft. Its designation, 1977 introduction, performance, 30 mm cannon, stores load, loiter-and-survival emphasis, and relationship to ground command are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    sourceStatus:{id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-a0u3x writer=g kind=revision created=2026-08-16T12:10:00-06:00 --><p>Direct canon preserves Army battlefield aviation but does not name or assign A-10A. Its Thunderbolt II identity, chronology, specifications, armored close-support role, and relationship to A-8A remain incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
    identityTitle:"A battlefield aircraft without apology",identityHtml:"<p>Thunderbolt II is designed around close support rather than adapted from a strategic or air-superiority requirement. It remains slow enough for target identification, long enough for useful loiter, and robust enough for repeated work near the front.</p>",
    developmentHtml:"<p>The A-10 lineage emerged from the A-X close-support program and was the first American aircraft family designed specifically around support of ground forces. Its broad historical priorities—low-altitude maneuver, endurance, survivability, forward operation, and attack of armored targets—remain central to the registered Army aircraft.</p>",
    serviceHtml:"<p>A-10A operates through the Army's battlefield command structure. Forward air controllers and ground commanders can place it against targets whose identity and relationship to friendly forces matter more than maximum speed.</p>",
    missionHtml:"<p>Armored close support includes tanks, vehicles, fortified positions, artillery, and other targets near the ground battle. Loiter and repeated observation help distinguish targets before attack. Deep bridges, airfields, and missile networks belong principally to A-8A interdiction.</p>",
    weaponsTitle:"30 mm cannon and battlefield stores",weaponsHtml:"<p>One 30×173 mm cannon and 7,250 kg of stores form the registered fit. Ammunition types, bomb and rocket families, guided weapons, countermeasures, pylons, tanks, and load-radius combinations remain open.</p>",
    doctrineTitle:"Loiter rather than penetration speed",doctrineHtml:"<p>The Army deliberately refuses to let Aerospace Force speed doctrine determine battlefield aviation. A-10A trades maximum speed for endurance, control at low altitude, damage tolerance, and useful time with ground formations.</p>",
    related:[{href:"a-8a-thunderchief-ii.html",kicker:"Interdiction counterpart",label:"A-8A Thunderchief II"},{href:"f-16a-falcon.html",kicker:"Air-superiority partner",label:"F-16A Falcon"}]
  })
});
