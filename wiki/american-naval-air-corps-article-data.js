window.deepArticles = window.deepArticles || {};

const americanNavalAirLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — United States Naval Air Corps force"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American naval aviation and fleet modernization"},
  {href:"../transcript.md",label:"Master Transcript — American three-service doctrine and maritime power"}
];

const americanNavalAirOfficialSources = {
  fury:{href:"https://airandspace.si.edu/collection-objects/north-american-fj-1-fury/nasm_A19731221000",label:"National Air and Space Museum — North American FJ-1 Fury"},
  banshee:{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/f/f2h-4-banshee.html",label:"Naval History and Heritage Command — F2H Banshee"},
  skyknight:{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/f/f3d-skyknight.html",label:"Naval History and Heritage Command — F3D Skyknight"},
  cutlass:{href:"https://airandspace.si.edu/air-and-space-quarterly/fall-2022/40-years-building-dream",label:"National Air and Space Museum — Vought F7U Cutlass history"},
  intruder:{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/a/a-6e-intruder0.html",label:"Naval History and Heritage Command — A-6E Intruder"},
  tomcat:{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/f/f-14a-tomcat.html",label:"Naval History and Heritage Command — F-14A Tomcat"},
  hawkeye:{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft/e/e-2c-hawkeye0.html/1000",label:"Naval History and Heritage Command — E-2C Hawkeye"},
  orion:{href:"https://www.history.navy.mil/research/histories/naval-aviation-history/naval-aircraft/current-aircraft-inventory/p-3-orion.html",label:"Naval History and Heritage Command — P-3 Orion"}
};

const americanNavalAirLandscape = {
  src:"assets/diagrams/american-naval-air-corps-force.svg",
  alt:"United States Naval Air Corps aircraft organized into early carrier fighters, mature fleet defense, maritime strike, airborne warning, and land-based patrol branches from 1948 to 1975",
  caption:"Carrier aviation matures from individual jet types into a layered fleet system extending from the flight deck to the outer antisubmarine screen"
};

const americanNavalAirArticle = config => ({
  category:"Military aircraft",
  eyebrow:"United States Naval Air Corps",
  landscape:americanNavalAirLandscape,
  ...config,
  categories:config.categories || ["United States","United States Naval Air Corps","Military aircraft","Naval aviation","Aerospace industry"]
});

const americanNavalAirRelated = [
  {href:"american-naval-air-corps-force.html",kicker:"Service register",label:"Naval Air Corps Force"},
  {href:"aerospace-doctrine.html",kicker:"Three-service doctrine",label:"Aerospace Doctrine of the United States"},
  {href:"joint-aircraft-designation-act.html",kicker:"Common role system",label:"Joint Aircraft Designation Act"},
  {href:"united-states.html",kicker:"Country of origin",label:"United States"}
];

const americanNavalAirType = c => americanNavalAirArticle({
  title:c.title,
  eyebrow:`United States Naval Air Corps · introduced ${c.year}`,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:`The ${c.year} Naval Air Corps introduction, ${c.mission.toLowerCase()} mission, ${c.speed} maximum speed, ${c.radius} combat radius, and ${c.load.toLowerCase()} are fixed. ${c.fixed || "The broad historical manufacturer and design lineage are retained where compatible."} Exact engine mark, dimensions, mass, avionics fit, production, squadrons, carriers or bases, operations, losses, exports, subvariants, upgrades, and retirement remain open unless separately established.`,
  sections:[
    {id:"identity",title:c.identityTitle,html:c.identityHtml},
    {id:"development",title:"Design lineage",html:c.developmentHtml},
    {id:"service",title:"Naval Air Corps service",html:c.serviceHtml},
    {id:"mission",title:c.mission,html:c.missionHtml},
    {id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>${c.year}</td></tr><tr><th>Operating basis</th><td>${c.basis}</td></tr><tr><th>Mission</th><td>${c.mission}</td></tr><tr><th>Maximum speed</th><td>${c.speed}</td></tr><tr><th>Combat radius</th><td>${c.radius}</td></tr><tr><th>Standard armament or load</th><td>${c.load}</td></tr></tbody></table></div>`},
    {id:"systems",title:c.systemsTitle,html:c.systemsHtml},
    {id:"fleet",title:c.fleetTitle,html:c.fleetHtml},
    {id:"limits",title:"Open service history",html:`<p>${c.open || "Engine mark, dimensions, mass, avionics, production totals, squadrons, carriers or bases, readiness, operations, losses, exports, subvariants, upgrades, and retirement remain unregistered."}</p>`}
  ],
  related:[...americanNavalAirRelated,...c.related],
  sources:[...americanNavalAirLocalSources,americanNavalAirOfficialSources[c.official]],
  facts:[["Country of origin","United States"],["Service","United States Naval Air Corps"],["Introduction",String(c.year)],["Operating basis",c.basis],["Mission",c.mission],["Maximum speed",c.speed],["Combat radius",c.radius],["Standard armament or load",c.load]]
});

Object.assign(window.deepArticles, {
  "american-naval-air-corps-force": americanNavalAirArticle({
    title:"United States Naval Air Corps force",
    category:"Naval aviation",
    eyebrow:"Carrier and maritime aviation · 1948–1975",
    infoboxKicker:"American fleet-air register",
    infoboxTitle:"Naval Air Corps force",
    lead:"The United States Naval Air Corps force was the fixed-wing aviation system organic to the Navy. Four early carrier jets introduced from 1948 to 1955 established jet launch, escort, all-weather fleet defense, and tailless-fighter experience. Four mature aircraft introduced from 1971 to 1975 then divided maritime strike, long-range fleet defense, airborne warning, and land-based patrol into complementary branches.",
    canon:"The eight-aircraft register, introduction years, missions, performance, radii, armament or loads, carrier or land basis, continued Naval Air Corps ownership of fleet aviation, and future common-role designation system are fixed. Broad historical manufacturer and design foundations are retained where compatible. Exact procurement programs, engines, dimensions, avionics blocks, production totals, squadrons, carriers, patrol bases, operations, losses, exports, upgrades, and retirement remain open.",
    sections:[
      {id:"institution",title:"The fleet owns its air",html:"<p>The Naval Air Corps is an organic branch of the Navy responsible for fleet defense, carrier strike, patrol, antisubmarine warfare, airborne warning, and naval reconnaissance. The Army controls battlefield aviation and the <a href='united-states-aerospace-force.html'>Aerospace Force</a> strategic and orbital missions; neither institution commands the air above a deployed fleet.</p>"},
      {id:"register",title:"Registered combat and support aircraft",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Year</th><th>Mission</th><th>Basis</th></tr></thead><tbody><tr><td><a href='fj-1-fury.html'>FJ-1 Fury</a></td><td>1948</td><td>First operational carrier jet</td><td>Carrier</td></tr><tr><td><a href='f2h-2-banshee.html'>F2H-2 Banshee</a></td><td>1952</td><td>Carrier fighter and escort</td><td>Carrier</td></tr><tr><td><a href='f3d-1-skyknight.html'>F3D-1 Skyknight</a></td><td>1952</td><td>All-weather fleet defense</td><td>Carrier</td></tr><tr><td><a href='f7u-3-cutlass.html'>F7U-3 Cutlass</a></td><td>1955</td><td>Limited tailless carrier fighter</td><td>Carrier</td></tr><tr><td><a href='a-6e-intruder.html'>A-6E Intruder</a></td><td>1971</td><td>All-weather maritime strike</td><td>Carrier</td></tr><tr><td><a href='p-3c-orion.html'>P-3C Orion</a></td><td>1973</td><td>Maritime patrol and antisubmarine warfare</td><td>Land</td></tr><tr><td><a href='f-14a-tomcat.html'>F-14A Tomcat</a></td><td>1974</td><td>Fleet-defense fighter</td><td>Carrier</td></tr><tr><td><a href='e-2c-hawkeye.html'>E-2C Hawkeye</a></td><td>1975</td><td>Carrier airborne early warning</td><td>Carrier</td></tr></tbody></table></div>"},
      {id:"first",title:"The first carrier-jet generation",html:"<p>Fury proves that an operational jet can launch, recover, and fit aboard the carrier. Banshee adds range, altitude, escort, and a heavier cannon battery. Skyknight adds radar-directed all-weather defense. Cutlass tests swept, tailless, and afterburning ideas but remains a deliberately limited fleet type.</p>"},
      {id:"deck",title:"Carrier procedure as technology",html:"<p>Early jets force changes beyond the aircraft itself: catapult launch, deck handling, arresting weights, fuel management, jet-blast protection, maintenance access, and pilot conversion all become parts of one system. The fleet learns that carrier suitability can be as decisive as maximum speed.</p>"},
      {id:"mature",title:"The mature carrier air group",html:"<p>By the 1970s Tomcat, Intruder, and Hawkeye form a complementary deck force. Hawkeye detects and organizes the threat; Tomcat intercepts it at long range; Intruder attacks ships and defended maritime targets through weather. No single multirole type replaces the three principal missions.</p>"},
      {id:"outer",title:"The land-based outer screen",html:"<p>P-3C Orion extends the fleet's sensing and antisubmarine reach far beyond carrier launch cycles. Operating from shore bases, it searches broad ocean areas, distributes contact information, and carries torpedoes, mines, depth weapons, or missiles against submarines and surface targets.</p>"},
      {id:"network",title:"Aircraft as a fleet network",html:"<p>The mature force is most effective when treated as a connected system. Hawkeye radar and data links, Tomcat long-range weapons, Orion patrol sensors, shipboard command, carrier strike aircraft, escorts, and surface or submarine forces exchange a common tactical picture. Detection, identification, assignment, and engagement become separate but linked acts.</p>"},
      {id:"limits",title:"Open force structure",html:"<p>The register does not yet establish procurement competitions, engines, dimensions, avionics blocks, production totals, squadron designations, carrier assignments, patrol bases, deck cycles, operations, losses, exports, upgrades, or retirement. It fixes a layered naval-air architecture rather than a complete order of battle.</p>"}
    ],
    related:[{href:"aerospace-doctrine.html",kicker:"Three-service structure",label:"Aerospace Doctrine of the United States"},{href:"joint-aircraft-designation-act.html",kicker:"1963 common register",label:"Joint Aircraft Designation Act"},{href:"american-army-air-corps-force.html",kicker:"Battlefield counterpart",label:"Army Air Corps Force"},{href:"f-14a-tomcat.html",kicker:"Fleet-defense branch",label:"F-14A Tomcat"},{href:"a-6e-intruder.html",kicker:"Maritime-strike branch",label:"A-6E Intruder"},{href:"p-3c-orion.html",kicker:"Outer patrol branch",label:"P-3C Orion"}],
    sources:[...americanNavalAirLocalSources,{href:"https://www.history.navy.mil/content/history/museums/nnam/explore/collections/aircraft.html",label:"Naval History and Heritage Command — National Naval Aviation Museum aircraft collection"}],
    categories:["United States","United States Naval Air Corps","Naval aviation","Military aircraft","Carrier aviation"],
    facts:[["Period","1948–1975"],["Registered aircraft","Eight"],["Early carrier jets","Four"],["Mature carrier types","Three"],["Land-based patrol type","P-3C Orion"],["Principal carrier fighter","F-14A Tomcat"],["Airborne warning","E-2C Hawkeye"],["Institutional position","Organic branch of the Navy"]]
  }),

  "fj-1-fury": americanNavalAirType({
    title:"FJ-1 Fury",year:1948,basis:"Carrier-based",mission:"First operational carrier jet",speed:"880 km/h",radius:"500 km",load:"Six 12.7×99 mm machine guns",official:"fury",kicker:"First operational American carrier jet",
    lead:"The FJ-1 Fury was the first operational jet of the United States Naval Air Corps, introduced in 1948 for carrier service. Its straight wing, six-gun battery, and modest performance made it less a mature fleet fighter than the aircraft through which the Navy learned jet catapult launch, recovery, deck handling, and pilot conversion.",
    identityTitle:"The carrier-jet beginning",identityHtml:"<p>Fury's historical importance exceeds its numerical performance. It places a jet fighter into operational carrier practice and exposes the difference between an aircraft that can fly from land and one that can repeatedly launch, recover, park, fuel, and maintain aboard ship.</p>",
    developmentHtml:"<p>North American developed a conventional straight-wing fighter around low-speed carrier handling. The first XFJ-1 flew in September 1946. Carrier trials in 1948 demonstrated both self-powered and catapult launches and helped make catapulting standard for early carrier jets.</p>",
    serviceHtml:"<p>FJ-1 serves as an operational fighter and transition platform while the Naval Air Corps builds its first jet maintenance, deck, and training system. Exact carriers, squadrons, quantities, and deployments remain open.</p>",
    missionHtml:"<p>The registered mission is deliberately broad: first operational carrier jet. Fleet defense, escort, training, deck qualification, and tactics development may overlap, but the archive does not assign one mature specialization.</p>",
    systemsTitle:"Six-gun straight-wing fighter",systemsHtml:"<p>Six 12.7×99 mm machine guns form the standard battery. Gun models, ammunition, sight, convergence, tanks, stores, catapult fittings, arresting equipment, and deck-handling details remain open.</p>",
    fleetTitle:"A procedure-producing aircraft",fleetHtml:"<p>The later <a href='f2h-2-banshee.html'>F2H-2 Banshee</a> improves fighter reach and firepower. Fury's more durable contribution is procedural: it makes jet-blast protection, catapult launch, landing weight, deck parking, and jet-pilot conversion everyday naval problems.</p>",
    related:[{href:"f2h-2-banshee.html",kicker:"Carrier-fighter successor",label:"F2H-2 Banshee"},{href:"american-early-jet-generation.html",kicker:"Contemporary land jets",label:"American Early-Jet Generation"}]
  }),

  "f2h-2-banshee": americanNavalAirType({
    title:"F2H-2 Banshee",year:1952,basis:"Carrier-based",mission:"Carrier fighter and escort",speed:"935 km/h",radius:"760 km",load:"Four 20×110RB mm cannon",official:"banshee",kicker:"High-altitude carrier fighter and escort",
    lead:"The F2H-2 Banshee was the Naval Air Corps carrier fighter and escort introduced in 1952. Twin engines, a 760 km combat radius, high-altitude performance, and four 20 mm cannon made it the first registered American naval jet able to combine credible fighter reach with carrier operation.",
    identityTitle:"Range and altitude at sea",identityHtml:"<p>Banshee advances beyond Fury by treating escort endurance and high-altitude fighting as carrier requirements rather than land-based luxuries. It remains a day fighter in the register; all-weather fleet defense belongs to Skyknight.</p>",
    developmentHtml:"<p>McDonnell's XF2H first flew in January 1947 as the enlarged successor to the FH Phantom. The Banshee family preserved stable carrier handling while increasing speed, range, altitude, and weapons weight. The registered F2H-2 enters service in 1952.</p>",
    serviceHtml:"<p>F2H-2 provides carrier air patrol, escort, and fighter reach beyond the earliest jet deck cycle. Units, carriers, deployments, reconnaissance derivatives, and duration of service remain open.</p>",
    missionHtml:"<p>The fixed mission joins carrier fighting with escort. Protection of strike aircraft, fleet patrol, interception, and high-altitude work are plausible components; exact tactics and weather limitations remain unregistered.</p>",
    systemsTitle:"Four-cannon naval fighter",systemsHtml:"<p>Four 20×110RB mm cannon form the registered armament. Gun models, ammunition, sight, radar ranging, rockets, bombs, tanks, pylons, and later missile trials remain open.</p>",
    fleetTitle:"Day fighter beside Skyknight",fleetHtml:"<p>Banshee and <a href='f3d-1-skyknight.html'>F3D-1 Skyknight</a> divide the 1952 fleet-defense problem. Banshee supplies speed, reach, and day escort; Skyknight supplies radar, a second crew station, and all-weather interception.</p>",
    related:[{href:"f3d-1-skyknight.html",kicker:"All-weather contemporary",label:"F3D-1 Skyknight"},{href:"fj-1-fury.html",kicker:"Carrier-jet predecessor",label:"FJ-1 Fury"}]
  }),

  "f3d-1-skyknight": americanNavalAirType({
    title:"F3D-1 Skyknight",year:1952,basis:"Carrier-based",mission:"All-weather fleet defense",speed:"850 km/h",radius:"850 km",load:"Four 20×110RB mm cannon",official:"skyknight",kicker:"Radar-directed all-weather fleet fighter",
    lead:"The F3D-1 Skyknight was the United States Naval Air Corps' all-weather fleet-defense fighter, introduced in 1952. Its 850 km combat radius, four 20 mm cannon, radar, and two-person operating concept gave the carrier force a weather-independent defensive branch distinct from the faster Banshee day fighter.",
    identityTitle:"Fleet defense beyond visual weather",identityHtml:"<p>Skyknight is designed around finding and engaging threats when darkness, cloud, or distance defeats unaided vision. Its value lies in crew coordination and radar interception rather than maximum speed.</p>",
    developmentHtml:"<p>Douglas designed the F3D as a carrier-based night fighter. The broad family joined search and fire-control radar to a pilot and radar operator in a large straight-wing jet, later providing useful foundations for missile trials and electronic warfare.</p>",
    serviceHtml:"<p>F3D-1 supplies carrier groups with an all-weather defensive watch. Exact carrier qualification, shore detachments, squadrons, radar-control relationships, and electronic derivatives remain open.</p>",
    missionHtml:"<p>All-weather fleet defense includes night interception, poor-weather patrol, radar-directed response, and protection of ships against aircraft approaching outside visual conditions. Strike escort and electronic work remain possible but unregistered.</p>",
    systemsTitle:"Radar, crew, and cannon",systemsHtml:"<p>Four 20×110RB mm cannon form the standard battery. Radar marks, operator equipment, ground or ship control, navigation aids, gun sight, ammunition, missiles, and electronic fits remain open.</p>",
    fleetTitle:"The first weather-independent layer",fleetHtml:"<p>Skyknight establishes the all-weather mission later expanded into a network of <a href='e-2c-hawkeye.html'>Hawkeye</a> airborne warning and <a href='f-14a-tomcat.html'>Tomcat</a> long-range interception. The later system separates detection and engagement among specialized aircraft.</p>",
    related:[{href:"f2h-2-banshee.html",kicker:"Day-fighter contemporary",label:"F2H-2 Banshee"},{href:"e-2c-hawkeye.html",kicker:"Later warning layer",label:"E-2C Hawkeye"}]
  }),

  "f7u-3-cutlass": americanNavalAirType({
    title:"F7U-3 Cutlass",year:1955,basis:"Carrier-based",mission:"Limited tailless carrier fighter",speed:"1,095 km/h",radius:"650 km",load:"Four 20×110RB mm cannon",official:"cutlass",kicker:"Limited tailless carrier fighter",
    lead:"The F7U-3 Cutlass was a limited tailless carrier fighter introduced by the Naval Air Corps in 1955. Its swept wing, twin afterburning engines, and 1,095 km/h maximum speed tested a radical route toward high-performance fleet aviation, but underpower, hydraulic complexity, carrier visibility, and maintenance burden kept it bounded.",
    fixed:"The Vought tailless design family and its limited operational status are fixed; exact accident, reliability, and withdrawal histories remain open.",
    identityTitle:"An operational experiment",identityHtml:"<p>Cutlass is neither a paper project nor the foundation of the mature carrier force. It is an operationally limited type through which the Navy learns what advanced geometry, high-pressure systems, and carrier handling demand when several immature technologies arrive together.</p>",
    developmentHtml:"<p>Vought's Cutlass emerged from a 1945 carrier-fighter competition. It became the Navy's first swept-wing jet, the first designed with afterburners, and the first American tailless production fighter. Those innovations arrived before engines, hydraulics, and carrier practice could fully support them.</p>",
    serviceHtml:"<p>F7U-3 serves in restricted numbers and roles while the Navy evaluates tailless control, high-angle recovery, deck visibility, high-pressure hydraulics, afterburning propulsion, and phased maintenance. Exact squadrons and carriers remain open.</p>",
    missionHtml:"<p>The registered wording—limited tailless carrier fighter—is itself the doctrinal judgment. Cutlass contributes experience without becoming the universal fleet fighter or displacing the more conventional branches.</p>",
    systemsTitle:"Four cannon and immature systems",systemsHtml:"<p>Four 20×110RB mm cannon form the standard battery. Engines, hydraulic architecture, controls, sight, ammunition, stores, missiles, tanks, carrier modifications, and reliability rates remain open.</p>",
    fleetTitle:"Lessons without a direct dynasty",fleetHtml:"<p>Cutlass teaches the fleet about swept wings, afterburners, maintenance discipline, approach visibility, and the danger of demanding too many technical leaps at once. The later <a href='f-14a-tomcat.html'>F-14A Tomcat</a> reaches high performance through a different variable-sweep and weapons-system architecture.</p>",
    related:[{href:"f-14a-tomcat.html",kicker:"Mature fleet fighter",label:"F-14A Tomcat"},{href:"f3d-1-skyknight.html",kicker:"Conservative contemporary",label:"F3D-1 Skyknight"}]
  }),

  "a-6e-intruder": americanNavalAirType({
    title:"A-6E Intruder",year:1971,basis:"Carrier-based",mission:"All-weather maritime strike",speed:"1,040 km/h",radius:"1,600 km",load:"8,100 kg stores",official:"intruder",kicker:"All-weather carrier maritime-strike aircraft",
    lead:"The A-6E Intruder was the Naval Air Corps' all-weather maritime-strike aircraft, introduced in 1971. It carried 8,100 kg of stores to a 1,600 km combat radius and combined low-altitude navigation, target recognition, and a two-person attack crew into the carrier group's principal weather-independent strike branch.",
    identityTitle:"The carrier group's heavy weather striker",identityHtml:"<p>A-6E is a maritime-strike aircraft even when it attacks land targets. Its basing, command relationships, navigation system, and role inside the carrier group distinguish it from the Army's <a href='a-6a-intruder.html'>A-6A theater-attack form</a>.</p>",
    developmentHtml:"<p>Grumman answered a naval requirement for long-range, low-altitude, all-weather attack with the A2F/A-6 family. The E model adds an improved computer and target-recognition attack sensors to the established side-by-side pilot and bombardier-navigator arrangement.</p>",
    serviceHtml:"<p>A-6E operates from carriers against ships, naval bases, coastal infrastructure, and other defended targets. Exact carrier assignments, tanker or electronic derivatives, weapons clearances, and shore use remain open.</p>",
    missionHtml:"<p>All-weather maritime strike requires navigation over water, target discrimination, low-visibility attack, and useful payload at carrier-relevant radius. The aircraft may support theater operations ashore without becoming an Army asset.</p>",
    systemsTitle:"Integrated attack and 8,100 kg stores",systemsHtml:"<p>The registered load is 8,100 kg. Radar, infrared or laser sensors, navigation computer, bombs, mines, anti-ship weapons, anti-radar missiles, tanks, electronic pods, pylons, and load-radius combinations remain open.</p>",
    fleetTitle:"Strike inside the warning network",fleetHtml:"<p><a href='e-2c-hawkeye.html'>E-2C Hawkeye</a> organizes the air and surface picture while <a href='f-14a-tomcat.html'>F-14A Tomcat</a> protects the carrier and strike group. Intruder uses that defensive envelope to deliver the fleet's heavy all-weather attack.</p>",
    related:[{href:"a-6a-intruder.html",kicker:"Army family member",label:"A-6A Intruder"},{href:"e-2c-hawkeye.html",kicker:"Fleet information partner",label:"E-2C Hawkeye"}]
  }),

  "f-14a-tomcat": americanNavalAirType({
    title:"F-14A Tomcat",year:1974,basis:"Carrier-based",mission:"Fleet-defense fighter",speed:"2,485 km/h",radius:"925 km",load:"One 20×102 mm cannon; six long-range missiles",official:"tomcat",kicker:"Long-range carrier fleet-defense fighter",
    lead:"The F-14A Tomcat was the United States Naval Air Corps' fleet-defense fighter, introduced in 1974. A variable-sweep wing, two-person interceptor crew, 2,485 km/h maximum speed, and six long-range missiles allowed one carrier fighter to engage several distant threats while retaining the low-speed handling required at sea.",
    identityTitle:"The long arm of the carrier",identityHtml:"<p>Tomcat's principal role is fleet defense. It is designed to intercept bombers, scouts, missile carriers, and other aircraft before their weapons threaten the carrier group, while remaining capable of carrier launch and arrested recovery.</p>",
    developmentHtml:"<p>After the common F-111B proved too heavy for carrier requirements, the Navy opened the VFX competition. Grumman's two-seat Model 303 combined variable geometry with a powerful radar and long-range weapons system. The first Tomcat flew in December 1970.</p>",
    serviceHtml:"<p>F-14A becomes the principal long-range fighter of the mature carrier air group. Exact squadrons, carriers, alert cycles, doctrine against German or Japanese maritime aviation, and later upgrades remain open.</p>",
    missionHtml:"<p>Fleet defense includes combat air patrol, long-range interception, escort, and engagement of multiple distant threats. Air superiority around the fleet remains naval rather than Army work; continental interception remains Aerospace Force work.</p>",
    systemsTitle:"Cannon, radar, and six long-range missiles",systemsHtml:"<p>One 20×102 mm cannon and six long-range missiles form the registered fit. Radar model, missile family, shorter-range weapons, data links, countermeasures, tanks, stations, and engagement doctrine remain open.</p>",
    fleetTitle:"Hawkeye finds; Tomcat engages",fleetHtml:"<p>The <a href='e-2c-hawkeye.html'>E-2C Hawkeye</a> extends detection and command beyond shipboard radar horizons. Tomcat converts that information into long-range interception, while ships and other fighters retain additional defensive layers.</p>",
    related:[{href:"e-2c-hawkeye.html",kicker:"Airborne warning partner",label:"E-2C Hawkeye"},{href:"a-6e-intruder.html",kicker:"Protected strike branch",label:"A-6E Intruder"}]
  }),

  "e-2c-hawkeye": americanNavalAirType({
    title:"E-2C Hawkeye",year:1975,basis:"Carrier-based",mission:"Carrier airborne early warning",speed:"625 km/h",radius:"1,300 km",load:"Radar and fleet data link",official:"hawkeye",kicker:"Carrier airborne warning and control aircraft",
    lead:"The E-2C Hawkeye was the Naval Air Corps' carrier airborne early-warning aircraft, introduced in 1975. Its radar, onboard operators, computers, and fleet data link extended the carrier group's horizon and turned dispersed ships and aircraft into a coordinated detection, assignment, and interception system.",
    identityTitle:"The fleet's elevated command post",identityHtml:"<p>Hawkeye is not merely a radar carried aloft. It detects aircraft and surface contacts, maintains tracks, relays communications, controls intercepts, supports strikes, and helps the fleet distinguish a threat from traffic or a duplicated report.</p>",
    developmentHtml:"<p>Grumman designed the Hawkeye from the beginning for airborne early warning. The E-2 family joined a high-mounted rotating radar, pressurized operator compartment, carrier folding and launch requirements, computers, and a tactical data system. The improved E-2C first flew in 1972.</p>",
    serviceHtml:"<p>E-2C operates from carriers as part of the air wing and the shipboard command system. Exact patrol orbits, crew structure, radar coverage, data-link standards, carrier assignments, and sortie rates remain open.</p>",
    missionHtml:"<p>Carrier airborne early warning includes surveillance, track management, fighter direction, strike control, communications relay, navigation assistance, and search-and-rescue guidance. The registered mission is informational rather than directly armed.</p>",
    systemsTitle:"Radar and fleet data link",systemsHtml:"<p>Radar and fleet data link form the registered mission load. Radar model, computers, consoles, crew count, identification equipment, communication channels, electronic support, and later upgrades remain open.</p>",
    fleetTitle:"The organizer of layered defense",fleetHtml:"<p>Hawkeye gives <a href='f-14a-tomcat.html'>F-14A Tomcat</a> earlier warning and organized assignments, supports <a href='a-6e-intruder.html'>Intruder</a> strike packages, and shares surface contacts with ships and <a href='p-3c-orion.html'>Orion</a>. Its output is a fleet picture rather than one pilot's radar scope.</p>",
    related:[{href:"f-14a-tomcat.html",kicker:"Directed interceptor",label:"F-14A Tomcat"},{href:"p-3c-orion.html",kicker:"Outer surveillance partner",label:"P-3C Orion"}]
  }),

  "p-3c-orion": americanNavalAirType({
    title:"P-3C Orion",year:1973,basis:"Land-based",mission:"Maritime patrol and antisubmarine warfare",speed:"760 km/h",radius:"2,400 km",load:"Torpedoes, mines, depth weapons, or missiles",official:"orion",kicker:"Long-range maritime patrol and antisubmarine aircraft",
    lead:"The P-3C Orion was the Naval Air Corps' land-based maritime-patrol and antisubmarine aircraft, introduced in 1973. Its 2,400 km combat radius, long endurance, integrated acoustic and electronic sensors, and mixed torpedo, mine, depth-weapon, or missile load extended fleet surveillance far beyond the carrier deck.",
    identityTitle:"The outer maritime screen",identityHtml:"<p>Orion is naval aviation without carrier basing. Shore bases give it the runway, endurance, crew space, and sensor volume needed to search broad ocean approaches and support fleets, convoys, chokepoints, and submarine barriers.</p>",
    developmentHtml:"<p>Lockheed developed the P-3 family to replace the P-2 Neptune. The C model adds an airborne general-purpose digital computer and integrated antisubmarine sensors to a four-engine long-range patrol airframe.</p>",
    serviceHtml:"<p>P-3C operates from continental, island, and allied patrol bases. Exact basing network, crew, patrol sectors, search rates, contact-reporting system, and relationships with surface escorts remain open.</p>",
    missionHtml:"<p>Maritime patrol and antisubmarine warfare include search, classification, tracking, convoy and fleet support, surface surveillance, mining, and attack. Reconnaissance and rescue support may follow from the same endurance and sensor system.</p>",
    systemsTitle:"Sensors and mixed maritime weapons",systemsHtml:"<p>Torpedoes, mines, depth weapons, or missiles form the registered load family. Sonobuoys, magnetic detection, radar, electronic support, optical sensors, computers, weapon marks, pylons, and bomb-bay combinations remain open.</p>",
    fleetTitle:"Patrol beyond the carrier cycle",fleetHtml:"<p>Orion's long shore-based patrol complements rather than replaces carrier aviation. It exchanges contacts with <a href='e-2c-hawkeye.html'>Hawkeye</a>, ships, submarines, and shore commands, allowing the carrier group to concentrate fighters and strike aircraft while the wider ocean remains watched.</p>",
    related:[{href:"e-2c-hawkeye.html",kicker:"Carrier surveillance partner",label:"E-2C Hawkeye"},{href:"f-14a-tomcat.html",kicker:"Fleet-defense partner",label:"F-14A Tomcat"}]
  })
});
