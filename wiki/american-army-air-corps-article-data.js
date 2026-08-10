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
  thunderbolt:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195855/AFmuseum/fairchild-republic-a-10a-thunderbolt-ii/",label:"National Museum of the U.S. Air Force — Fairchild Republic A-10A Thunderbolt II"}
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
  eyebrow:`United States Army Air Corps · introduced ${c.year}`,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:`The ${c.year} Army Air Corps introduction, ${c.mission.toLowerCase()} mission, ${c.speed} maximum speed, ${c.radius} combat radius, ${c.ceiling} ceiling, and ${c.load.toLowerCase()} are fixed. ${c.fixed || "The broad historical design lineage is retained where compatible."} Exact engine mark, dimensions, mass, avionics fit, production, units, bases, operations, losses, exports, subvariants, upgrades, and retirement remain open unless separately established.`,
  sections:[
    {id:"identity",title:c.identityTitle,html:c.identityHtml},
    {id:"development",title:"Design lineage",html:c.developmentHtml},
    {id:"service",title:"Army Air Corps service",html:c.serviceHtml},
    {id:"mission",title:c.mission,html:c.missionHtml},
    {id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>${c.year}</td></tr><tr><th>Mission</th><td>${c.mission}</td></tr><tr><th>Maximum speed</th><td>${c.speed}</td></tr><tr><th>Combat radius</th><td>${c.radius}</td></tr><tr><th>Ceiling</th><td>${c.ceiling}</td></tr><tr><th>Standard armament or load</th><td>${c.load}</td></tr></tbody></table></div>`},
    {id:"weapons",title:c.weaponsTitle,html:c.weaponsHtml},
    {id:"doctrine",title:c.doctrineTitle,html:c.doctrineHtml},
    {id:"limits",title:"Open service history",html:`<p>${c.open || "Engine mark, dimensions, mass, avionics, production totals, units, bases, readiness, operations, losses, exports, subvariants, upgrades, and retirement remain unregistered."}</p>`}
  ],
  related:[...americanArmyAirRelated,...c.related],
  sources:[...americanArmyAirLocalSources,americanArmyAirOfficialSources[c.official]],
  facts:[["Country of origin","United States"],["Service","United States Army Air Corps"],["Introduction",String(c.year)],["Mission",c.mission],["Maximum speed",c.speed],["Combat radius",c.radius],["Ceiling",c.ceiling],["Standard armament or load",c.load]]
});

Object.assign(window.deepArticles, {
  "american-army-air-corps-force": americanArmyAirArticle({
    title:"United States Army Air Corps force",
    category:"Military aviation",
    eyebrow:"Organic battlefield aviation · 1965–1978",
    infoboxKicker:"American tactical-air register",
    infoboxTitle:"Army Air Corps force",
    lead:"The mature United States Army Air Corps force comprised four registered fixed-wing combat aircraft introduced from 1965 through 1978. The A-6A Intruder conducted all-weather theater attack, A-8A Thunderchief II performed fast interdiction and defense suppression, A-10A Thunderbolt II supplied armored close support, and F-16A Falcon defended the battlefield airspace as a compact air-superiority fighter.",
    canon:"The four-aircraft register, introduction years, Army service, missions, performance, radii, ceilings, armament or loads, separation of fast interdiction from close support, and continued Army ownership of battlefield aviation are fixed. The historical foundations of Falcon, Intruder, Thunderchief, and Thunderbolt development are retained where compatible. Exact procurement programs, engines, dimensions, avionics, production totals, units, bases, operations, losses, exports, upgrades, and retirement remain open.",
    sections:[
      {id:"institution",title:"Air power inside the Army",html:"<p>The United States never creates one universal independent air force. The Army Air Corps remains an organic branch responsible for battlefield air superiority, attack, close support, reconnaissance, transport, and helicopters. The independent <a href='united-states-aerospace-force.html'>Aerospace Force</a> instead owns strategic strike, continental interception, long-range reconnaissance, missiles, and orbital warfare.</p>"},
      {id:"register",title:"Registered combat aircraft",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Year</th><th>Principal mission</th></tr></thead><tbody><tr><td><a href='a-6a-intruder.html'>A-6A Intruder</a></td><td>1965</td><td>All-weather theater attack</td></tr><tr><td><a href='a-8a-thunderchief-ii.html'>A-8A Thunderchief II</a></td><td>1972</td><td>Supersonic interdiction and defense suppression</td></tr><tr><td><a href='a-10a-thunderbolt-ii.html'>A-10A Thunderbolt II</a></td><td>1977</td><td>Armored close support</td></tr><tr><td><a href='f-16a-falcon.html'>F-16A Falcon</a></td><td>1978</td><td>Compact air superiority</td></tr></tbody></table></div>"},
      {id:"fighter",title:"Compact air superiority",html:"<p>The F-16A gives the Army a compact fighter for control of the air above the battlefield. Its principal role remains air superiority even when it carries secondary stores. The service rejects an F/A category because a secondary attack capability does not erase the aircraft's primary doctrinal purpose.</p>"},
      {id:"attack",title:"Three attack problems",html:"<p>The three A-series aircraft do not form a simple replacement line. Intruder penetrates weather and darkness; Thunderchief II reaches deep targets and suppresses air defenses at supersonic speed; Thunderbolt II loiters near ground forces, identifies targets, survives damage, and works under direct battlefield control.</p>"},
      {id:"intruder",title:"All-weather theater attack",html:"<p>A-6A carries the largest registered load in the force and combines it with a 1,300 km combat radius. Its value lies in delivering theater attack through weather and darkness rather than competing with the Aerospace Force's strategic bombers.</p>"},
      {id:"division",title:"Interdiction is not close support",html:"<p>A-8A attacks bridges, airfields, missile batteries, radar sites, and supply columns. A-10A remains near the battle, waits for target identification, and answers directly to ground commanders. Keeping those roles separate prevents speed and penetration requirements from consuming close-support design.</p>"},
      {id:"designation",title:"The common register without common ownership",html:"<p>The <a href='joint-aircraft-designation-act.html'>Joint Aircraft Designation Act of 1963</a> gives future Army, Navy, Marine, and Aerospace aircraft common role sequences. It does not merge their institutions. The same A prefix can therefore describe an Army battlefield aircraft or a Naval Air Corps maritime striker without transferring either mission to a central air service.</p>"},
      {id:"limits",title:"Open force structure",html:"<p>The register does not yet establish procurement competitions, engines, dimensions, avionics blocks, production totals, units, bases, reserve organization, forward-air-control systems, operations, losses, exports, upgrades, or retirement. The four-role architecture is fixed; its order of battle remains open.</p>"}
    ],
    related:[{href:"aerospace-doctrine.html",kicker:"Three-service structure",label:"Aerospace Doctrine of the United States"},{href:"joint-aircraft-designation-act.html",kicker:"1963 common register",label:"Joint Aircraft Designation Act"},{href:"american-early-jet-generation.html",kicker:"Preceding generation",label:"American Early-Jet Generation"},{href:"f-16a-falcon.html",kicker:"Air-superiority branch",label:"F-16A Falcon"},{href:"a-8a-thunderchief-ii.html",kicker:"Fast-attack branch",label:"A-8A Thunderchief II"},{href:"a-10a-thunderbolt-ii.html",kicker:"Close-support branch",label:"A-10A Thunderbolt II"}],
    sources:[...americanArmyAirLocalSources,{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/",label:"National Museum of the U.S. Air Force — aircraft fact-sheet collection"}],
    categories:["United States","United States Army Air Corps","Military aviation","Military aircraft","Army aviation"],
    facts:[["Period","1965–1978"],["Registered combat aircraft","Four"],["Fighter branch","F-16A Falcon"],["All-weather attack","A-6A Intruder"],["Interdiction and suppression","A-8A Thunderchief II"],["Close support","A-10A Thunderbolt II"],["Institutional position","Organic branch of the Army"],["Designation law","Joint Aircraft Designation Act of 1963"]]
  }),

  "f-16a-falcon": americanArmyAirType({
    title:"F-16A Falcon",year:1978,mission:"Compact air-superiority fighter",speed:"2,120 km/h",radius:"925 km",ceiling:"15,200 m",load:"One 20×102 mm cannon; six missiles",official:"falcon",kicker:"Compact battlefield air-superiority fighter",
    lead:"The F-16A Falcon was the United States Army Air Corps' compact air-superiority fighter, introduced in 1978. It paired a 2,120 km/h maximum speed and 925 km combat radius with one 20 mm cannon and six missiles, giving the Army its own modern fighter while strategic interception remained an Aerospace Force mission.",
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
    lead:"The A-6A Intruder was the United States Army Air Corps' all-weather theater-attack aircraft, introduced in 1965. Its 1,300 km combat radius and 7,500 kg stores load allowed Army commanders to strike through darkness and poor weather without transferring the theater mission to the strategic Aerospace Force.",
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
    lead:"The A-8A Thunderchief II was the United States Army Air Corps' supersonic interdiction and defense-suppression aircraft, introduced in 1972. It attacked bridges, airfields, missile batteries, radar sites, and supply columns with a 20 mm cannon and 6,800 kg stores rather than performing direct close support.",
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
    lead:"The A-10A Thunderbolt II was the United States Army Air Corps' armored close-support aircraft, introduced in 1977. Its low speed, 460 km combat radius, heavy 30 mm cannon, 7,250 kg stores capacity, and emphasis on loiter and survival made it the aircraft most directly answerable to ground commanders.",
    identityTitle:"A battlefield aircraft without apology",identityHtml:"<p>Thunderbolt II is designed around close support rather than adapted from a strategic or air-superiority requirement. It remains slow enough for target identification, long enough for useful loiter, and robust enough for repeated work near the front.</p>",
    developmentHtml:"<p>The A-10 lineage emerged from the A-X close-support program and was the first American aircraft family designed specifically around support of ground forces. Its broad historical priorities—low-altitude maneuver, endurance, survivability, forward operation, and attack of armored targets—remain central to the registered Army aircraft.</p>",
    serviceHtml:"<p>A-10A operates through the Army's battlefield command structure. Forward air controllers and ground commanders can place it against targets whose identity and relationship to friendly forces matter more than maximum speed.</p>",
    missionHtml:"<p>Armored close support includes tanks, vehicles, fortified positions, artillery, and other targets near the ground battle. Loiter and repeated observation help distinguish targets before attack. Deep bridges, airfields, and missile networks belong principally to A-8A interdiction.</p>",
    weaponsTitle:"30 mm cannon and battlefield stores",weaponsHtml:"<p>One 30×173 mm cannon and 7,250 kg of stores form the registered fit. Ammunition types, bomb and rocket families, guided weapons, countermeasures, pylons, tanks, and load-radius combinations remain open.</p>",
    doctrineTitle:"Loiter rather than penetration speed",doctrineHtml:"<p>The Army deliberately refuses to let Aerospace Force speed doctrine determine battlefield aviation. A-10A trades maximum speed for endurance, control at low altitude, damage tolerance, and useful time with ground formations.</p>",
    related:[{href:"a-8a-thunderchief-ii.html",kicker:"Interdiction counterpart",label:"A-8A Thunderchief II"},{href:"f-16a-falcon.html",kicker:"Air-superiority partner",label:"F-16A Falcon"}]
  })
});
