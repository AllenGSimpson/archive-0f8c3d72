window.deepArticles = window.deepArticles || {};

const americanAerospaceAtmosphericLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — United States Aerospace Force atmospheric register"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aerospace development and the Maracaibo Shock"},
  {href:"../transcript.md",label:"Master Transcript — American strategic-air doctrine and orbital transition"}
];

const americanAerospaceAtmosphericOfficialSources = {
  starfighter:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/198067/AFmuseum/lockheed-f-104c-starfighter/",label:"National Museum of the U.S. Air Force — Lockheed F-104 Starfighter"},
  trainer:{href:"https://www.edwards.af.mil/News/AFMC-News/Article/2854337/flashback-lockheed-nf-104a-aerospace-trainer/",label:"Air Force Test Center — Lockheed NF-104A Aerospace Trainer"},
  valkyrie:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195767/north-american-xb-70-valkyrie/",label:"National Museum of the U.S. Air Force — North American XB-70 Valkyrie and F-108 lineage"},
  blackbird:{href:"https://www.nasa.gov/image-article/yf-12/",label:"NASA — YF-12 and Blackbird design family"},
  hustler:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196439/convair-b-58a-hustler/",label:"National Museum of the U.S. Air Force — Convair B-58A Hustler"}
};

const americanAerospaceAtmosphericLandscape = {
  src:"assets/diagrams/american-aerospace-force-atmospheric-fleet.svg",
  alt:"Timeline of United States Aerospace Force atmospheric interceptors, reconnaissance aircraft, trainers, and strategic bombers from 1958 to 1970",
  caption:"The atmospheric force separates point defense, long-range interception, strategic reconnaissance, aerospace training, and high-speed conventional bombing before investment turns toward orbital systems"
};

const americanAerospaceAtmosphericArticle = config => ({
  category:"Military aircraft",
  eyebrow:"United States Aerospace Force",
  landscape:americanAerospaceAtmosphericLandscape,
  ...config,
  categories:config.categories || ["United States","United States Aerospace Force","Military aircraft","Strategic aviation","Aerospace industry"]
});

const americanAerospaceAtmosphericRelated = [
  {href:"american-aerospace-force-atmospheric-fleet.html",kicker:"Service register",label:"Aerospace Force Atmospheric Fleet"},
  {href:"united-states-aerospace-force.html",kicker:"Independent service",label:"United States Aerospace Force"},
  {href:"aerospace-doctrine.html",kicker:"Institutional doctrine",label:"Aerospace Doctrine of the United States"},
  {href:"joint-aircraft-designation-act.html",kicker:"Common role system",label:"Joint Aircraft Designation Act"}
];

const americanAerospaceAtmosphericType = c => americanAerospaceAtmosphericArticle({
  title:c.title,
  eyebrow:`United States Aerospace Force · introduced ${c.year}`,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:`The ${c.year} introduction, ${c.mission.toLowerCase()} mission, ${c.speed} maximum speed, ${c.radius} combat radius, ${c.ceiling}, and ${c.load.toLowerCase()} are fixed. ${c.fixed || "The broad historical manufacturer and design lineage are retained where compatible."} Exact engine mark, dimensions, mass, avionics fit, production, formations, bases, operations, losses, exports, subvariants, upgrades, and retirement remain open unless separately established.`,
  sections:[
    {id:"identity",title:c.identityTitle,html:c.identityHtml},
    {id:"development",title:"Design lineage",html:c.developmentHtml},
    {id:"service",title:"Aerospace Force service",html:c.serviceHtml},
    {id:"mission",title:c.mission,html:c.missionHtml},
    {id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>${c.year}</td></tr><tr><th>Mission</th><td>${c.mission}</td></tr><tr><th>Maximum speed</th><td>${c.speed}</td></tr><tr><th>Combat radius</th><td>${c.radius}</td></tr><tr><th>Ceiling</th><td>${c.ceiling}</td></tr><tr><th>Standard armament or equipment</th><td>${c.load}</td></tr></tbody></table></div>`},
    {id:"systems",title:c.systemsTitle,html:c.systemsHtml},
    {id:"doctrine",title:c.doctrineTitle,html:c.doctrineHtml},
    {id:"limits",title:"Open service history",html:`<p>${c.open || "Engine mark, dimensions, mass, avionics, production totals, formations, bases, readiness, operations, losses, exports, subvariants, upgrades, and retirement remain unregistered."}</p>`}
  ],
  related:[...americanAerospaceAtmosphericRelated,...c.related],
  sources:[...americanAerospaceAtmosphericLocalSources,americanAerospaceAtmosphericOfficialSources[c.official]],
  facts:[["Country of origin","United States"],["Service","United States Aerospace Force"],["Introduction",String(c.year)],["Mission",c.mission],["Maximum speed",c.speed],["Combat radius",c.radius],["Ceiling",c.ceiling],["Armament or equipment",c.load]]
});

Object.assign(window.deepArticles, {
  "american-aerospace-force-atmospheric-fleet": americanAerospaceAtmosphericArticle({
    title:"United States Aerospace Force atmospheric fleet",
    category:"Strategic aviation",
    eyebrow:"Interception · reconnaissance · strategic strike · 1958–1970",
    infoboxKicker:"American strategic-air register",
    infoboxTitle:"Aerospace Force atmospheric fleet",
    lead:"The United States Aerospace Force atmospheric fleet was the high-speed aircraft establishment responsible for continental interception, strategic reconnaissance, aerospace training, and conventional intercontinental bombing. Seven registered types introduced from 1958 through 1970 carried the service from point-defense Starfighters to Mach 3 Blackbirds and Valkyries before the Maracaibo Shock and reusable orbital vehicles redirected high-end investment.",
    canon:"The seven-aircraft register, introduction years, missions, performance, radii, ceilings, armament or equipment, the 1958 Aerospace Command origin, 1962 independent service, absence of a mass B-52 fleet, conventional-only bomber loads, and later retreat from atmospheric strategic bombing are fixed. Broad historical manufacturer and design foundations are retained where compatible. Exact procurement programs, engines, dimensions, avionics, production totals, formations, bases, operations, losses, exports, upgrades, and retirement remain open.",
    sections:[
      {id:"institution",title:"A service with a continental horizon",html:"<p>United States Aerospace Command was created in 1958 after the Philippine experience exposed the difficulty of coordinating strategic bombers, high-altitude interception, missiles, reconnaissance, and experimental rockets. President Kennedy elevated it to the independent <a href='united-states-aerospace-force.html'>United States Aerospace Force</a> in 1962.</p><p>The controlling rule was simple: the Aerospace Force owned systems whose natural horizon was another continent or the edge of space. Army aircraft remained with the battlefield and Naval Air Corps aircraft with the fleet.</p>"},
      {id:"register",title:"Registered atmospheric aircraft",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Year</th><th>Principal mission</th></tr></thead><tbody><tr><td><a href='f-104a-starfighter.html'>F-104A Starfighter</a></td><td>1958</td><td>Mach 2 point interceptor</td></tr><tr><td><a href='b-58a-hustler.html'>B-58A Hustler</a></td><td>1959</td><td>High-supersonic strategic bomber</td></tr><tr><td><a href='nf-104a-starfighter.html'>NF-104A Starfighter</a></td><td>1963</td><td>Rocket-assisted aerospace trainer</td></tr><tr><td><a href='f-108a-rapier.html'>F-108A Rapier</a></td><td>1966</td><td>Long-range strategic interceptor</td></tr><tr><td><a href='r-11a-blackbird.html'>R-11A Blackbird</a></td><td>1967</td><td>Mach 3 strategic reconnaissance</td></tr><tr><td><a href='b-70a-valkyrie.html'>B-70A Valkyrie</a></td><td>1969</td><td>Mach 3 strategic bomber</td></tr><tr><td><a href='f-12a-blackbird.html'>F-12A Blackbird</a></td><td>1970</td><td>Mach 3 strategic interceptor</td></tr></tbody></table></div>"},
      {id:"interception",title:"From point defense to continental interception",html:"<p>F-104A supplies the first Mach 2 point-defense branch: short-ranged, fast-climbing, and closely tied to ground warning. F-108A adds the radius and long-range weapons needed to patrol broad approaches. F-12A then combines the Blackbird airframe's speed and altitude with a four-missile strategic-interception mission.</p>"},
      {id:"blackbird",title:"The Blackbird reconnaissance-interceptor family",html:"<p>R-11A and F-12A share the difficult high-temperature foundations of sustained Mach 3 flight while serving different missions. R-11A carries cameras, radar, and signals sensors; F-12A carries long-range missiles. The common airframe family therefore joins information collection to the ability to contest the same extreme-altitude approaches.</p>"},
      {id:"training",title:"Training at the edge of space",html:"<p>NF-104A gives pilots rocket-assisted zoom climbs, pressure-suit practice, inertial reference, and reaction-control experience above the useful aerodynamic atmosphere. It is neither a combat interceptor nor a substitute for an orbital vehicle. It is the training bridge between conventional jet procedure and the pilot-centered reusable-spacecraft program.</p>"},
      {id:"bombers",title:"The high-supersonic bomber branch",html:"<p>B-58A makes speed the foundation of the postwar <em>Schnellbomber</em> mission. B-70A extends that premise to Mach 3, a 6,900 km combat radius, and 14,500 kg of conventional stores. Neither aircraft carries atomic weapons, which never become part of the strategic order.</p><p>B-29 and B-36 fleets continue in reduced maritime, reconnaissance, conventional, and test work. B-47 experience informs the transition, while B-52 remains a study and prototype line rather than a mass operational fleet.</p>"},
      {id:"retreat",title:"Maracaibo and the atmospheric retreat",html:"<p>The 1966 <a href='maracaibo-shock.html'>Maracaibo Shock</a> demonstrates that radar networks, surface-to-air missiles, and prepared ambushes can defeat speed-and-altitude doctrine. Electronic warfare, decoys, route planning, terrain following, reconnaissance, and stand-off weapons grow in importance.</p><p><a href='project-apex.html'>Project Apex</a> tests runway-launched upper-atmosphere and boost-glide methods from 1967 to 1969. B-70A and F-12A still enter service, but by the early 1980s new strategic-bomber investment is declining. The <a href='american-orbital-vehicle-program.html'>reusable orbital-vehicle program</a>, the Columbia system, and <a href='project-zenith.html'>Project Zenith</a> increasingly carry the service's expectation of intercontinental reach.</p>"},
      {id:"limits",title:"Open force structure",html:"<p>The register fixes a doctrinal architecture rather than a complete order of battle. Procurement competitions, engines, dimensions, avionics blocks, production totals, wings, bases, alert patterns, reconnaissance routes, operations, losses, exports, upgrades, and retirement remain open unless established elsewhere.</p>"}
    ],
    related:[{href:"united-states-aerospace-force.html",kicker:"Independent service",label:"United States Aerospace Force"},{href:"aerospace-doctrine.html",kicker:"Three-service boundary",label:"Aerospace Doctrine of the United States"},{href:"maracaibo-shock.html",kicker:"1966 air-defense lesson",label:"Maracaibo Shock"},{href:"project-apex.html",kicker:"Upper-atmosphere response",label:"Project Apex"},{href:"american-orbital-vehicle-program.html",kicker:"Successor architecture",label:"American Orbital Vehicle Program"},{href:"project-zenith.html",kicker:"Orbital strategic branch",label:"Project Zenith"}],
    sources:[...americanAerospaceAtmosphericLocalSources,{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/",label:"National Museum of the U.S. Air Force — aircraft fact-sheet collection"}],
    categories:["United States","United States Aerospace Force","Strategic aviation","Military aircraft","Aerospace industry"],
    facts:[["Period","1958–1970"],["Registered aircraft","Seven"],["Interceptors","F-104A · F-108A · F-12A"],["Strategic reconnaissance","R-11A Blackbird"],["Aerospace trainer","NF-104A Starfighter"],["Strategic bombers","B-58A · B-70A"],["Weapons doctrine","Conventional only"],["Later direction","Reusable orbital systems"]]
  }),

  "f-104a-starfighter": americanAerospaceAtmosphericType({
    title:"F-104A Starfighter",year:1958,mission:"Mach 2 point interceptor",speed:"2,260 km/h",radius:"680 km",ceiling:"17,700 m service ceiling",load:"One 20×102 mm cannon; four missiles",official:"starfighter",kicker:"First Mach 2 Aerospace Command interceptor",
    lead:"The F-104A Starfighter was the Mach 2 point interceptor introduced by United States Aerospace Command in 1958 and inherited by the independent Aerospace Force in 1962. Its 2,260 km/h speed, rapid climb, 680 km combat radius, 20 mm cannon, and four missiles made it a sharp local answer to high-speed incursions rather than a long-range continental patrol aircraft.",
    identityTitle:"A missile-shaped point defender",identityHtml:"<p>Starfighter concentrates on acceleration, climb, and supersonic interception. Its compact wing and limited radius suit alert detachments positioned near defended cities, industrial corridors, missile fields, and warning sectors.</p>",
    developmentHtml:"<p>Lockheed began the F-104 family in 1952 under Clarence ‘Kelly’ Johnson. The design used a slender fuselage, very thin short wings, a powerful J79-class engine, and a cannon-centered fighter layout. The first XF-104 flew in 1954; the registered F-104A enters Aerospace Command service in 1958.</p>",
    serviceHtml:"<p>F-104A begins under Aerospace Command and transfers to the independent Aerospace Force without changing its principal mission. Ground radar, alert crews, dispersal fields, and rapid vectoring are as important to its usefulness as the airframe itself.</p>",
    missionHtml:"<p>Point interception means climbing quickly against a threat already approaching a defended sector. It does not require the radius, endurance, crew workload, or large missile battery of the later <a href='f-108a-rapier.html'>F-108A Rapier</a>.</p>",
    systemsTitle:"Cannon and four missiles",systemsHtml:"<p>One 20×102 mm cannon and four missiles form the registered fit. Missile families, radar mark, fire-control system, ammunition, pylons, tanks, data links, and electronic countermeasures remain open.</p>",
    doctrineTitle:"The first Aerospace Command fighter",doctrineHtml:"<p>Starfighter gives the new command an operational interceptor while its institutional boundaries are still forming. The 1963 common register later confirms that F-series aircraft can remain Aerospace Force strategic interceptors even as the Army fields its own battlefield fighters.</p>",
    related:[{href:"f-108a-rapier.html",kicker:"Long-range successor",label:"F-108A Rapier"},{href:"f-94c-starfire.html",kicker:"Command contemporary",label:"F-94C Starfire"}]
  }),

  "nf-104a-starfighter": americanAerospaceAtmosphericType({
    title:"NF-104A Starfighter",year:1963,mission:"Rocket-assisted aerospace trainer",speed:"2,300 km/h",radius:"520 km",ceiling:"36,800 m zoom ceiling",load:"Training instrumentation and reaction controls",official:"trainer",kicker:"Rocket-assisted edge-of-space trainer",
    fixed:"The historical rocket-assisted Starfighter conversion, reaction-control concept, and pressure-suit training foundation are retained.",
    lead:"The NF-104A Starfighter was the Aerospace Force's rocket-assisted aerospace trainer, introduced in 1963. A modified Starfighter, it used a rocket motor, pressure-suit operations, inertial references, and reaction controls to carry pilots through zoom climbs to a registered 36,800 m ceiling and teach control where aerodynamic surfaces became ineffective.",
    identityTitle:"A trainer between air and space",identityHtml:"<p>NF-104A exists to teach transitions: turbojet to rocket assistance, aerodynamic control to reaction control, powered climb to ballistic coast, and near-vacuum attitude management back to atmospheric recovery. It is not an operational spacecraft and has no registered combat role.</p>",
    developmentHtml:"<p>Lockheed modified F-104A airframes with a supplemental rocket motor, hydrogen-peroxide reaction controls, extended wing tips, additional plumbing, inertial references, and a cockpit control system for low-dynamic-pressure flight. The historical program first flew in 1963 and supplies the registered trainer's technical foundation.</p>",
    serviceHtml:"<p>Aerospace Force test and research-pilot training uses the aircraft for short, tightly scripted zoom profiles. Full pressure suits, ground tracking, weather control, emergency recovery, and careful energy management make every sortie a combined flight-and-range operation.</p>",
    missionHtml:"<p>The trainer exposes pilots to the physiological, procedural, and control problems later encountered by reusable vehicles. Its value lies in repeated experience at lower cost and complexity than an orbital sortie.</p>",
    systemsTitle:"Rocket assistance and reaction control",systemsHtml:"<p>The registered equipment comprises training instrumentation and reaction controls. Rocket model, oxidizer capacity, thruster layout, pressure suit, inertial system, telemetry, exact cockpit changes, and emergency procedures remain open unless inherited from compatible historical practice.</p>",
    doctrineTitle:"Pilot continuity into the orbital program",doctrineHtml:"<p>The NF-104A strengthens the American conviction that aerospace vehicles should remain pilot-centered. Its trainees form a procedural bridge toward <a href='project-apex.html'>Project Apex</a>, the <a href='american-orbital-vehicle-program.html'>runway-to-orbit program</a>, and <a href='columbia-spaceplane-program.html'>Columbia system</a>, where atmospheric departure and recovery belong to one flight.</p>",
    related:[{href:"f-104a-starfighter.html",kicker:"Parent interceptor",label:"F-104A Starfighter"},{href:"project-apex.html",kicker:"Upper-atmosphere successor",label:"Project Apex"}]
  }),

  "f-108a-rapier": americanAerospaceAtmosphericType({
    title:"F-108A Rapier",year:1966,mission:"Long-range strategic interceptor",speed:"3,190 km/h",radius:"1,850 km",ceiling:"24,400 m service ceiling",load:"Six long-range missiles",official:"valkyrie",kicker:"Long-range Mach 3 strategic interceptor",
    fixed:"North American manufacture, the Rapier identity, and shared high-speed development with the Valkyrie family are retained.",
    lead:"The F-108A Rapier was the Aerospace Force's long-range strategic interceptor, introduced in 1966. Its 3,190 km/h maximum speed, 1,850 km combat radius, 24,400 m ceiling, and six long-range missiles moved continental defense beyond point interception and allowed patrols across broad northern, oceanic, and hemispheric approaches.",
    identityTitle:"Interception before the defended point",identityHtml:"<p>Rapier is built to meet threats far from a single city or base. Range, radar reach, crew workload, fuel, and a six-missile battery therefore matter alongside Mach 3 performance.</p>",
    developmentHtml:"<p>North American developed the Rapier concept beside the B-70 Valkyrie, sharing high-temperature materials, propulsion questions, and systems intended for sustained flight near Mach 3. The program survives repeated cost and vulnerability challenges and enters Aerospace Force service in 1966.</p>",
    serviceHtml:"<p>F-108A patrols strategic approaches and responds to long-range warning rather than waiting on local point-defense vectors. Exact crew number, alert bases, tanker support, sectors, patrol duration, and relationship to ground and orbital surveillance remain open.</p>",
    missionHtml:"<p>Long-range strategic interception includes bombers, reconnaissance aircraft, missile carriers, and other high-value intruders approaching the continent. The aircraft's purpose is to create engagement depth rather than defend the immediate battlefield.</p>",
    systemsTitle:"Six long-range missiles",systemsHtml:"<p>Six long-range missiles form the registered armament. Missile identity, radar, infrared or other sensors, data links, fire-control sequence, countermeasures, internal or external carriage, and any cannon provision remain open.</p>",
    doctrineTitle:"The middle step to Blackbird interception",doctrineHtml:"<p>Rapier connects the short-ranged <a href='f-104a-starfighter.html'>F-104A</a> to the later <a href='f-12a-blackbird.html'>F-12A Blackbird</a>. It proves that continental interception must combine speed with radius and a large guided-weapon battery.</p>",
    related:[{href:"f-12a-blackbird.html",kicker:"Mach 3 successor",label:"F-12A Blackbird"},{href:"b-70a-valkyrie.html",kicker:"Shared development family",label:"B-70A Valkyrie"}]
  }),

  "r-11a-blackbird": americanAerospaceAtmosphericType({
    title:"R-11A Blackbird",year:1967,mission:"Mach 3 strategic reconnaissance",speed:"3,540 km/h",radius:"2,600 km",ceiling:"25,900 m service ceiling",load:"Cameras, radar, and signals sensors",official:"blackbird",kicker:"Mach 3 strategic reconnaissance aircraft",
    fixed:"Lockheed Blackbird manufacture, titanium-intensive high-temperature construction, and the broad A-12/SR-71 reconnaissance foundation are retained; R-11A is the authoritative service designation.",
    lead:"The R-11A Blackbird was the Aerospace Force's Mach 3 strategic-reconnaissance aircraft, introduced in 1967. Flying at up to 3,540 km/h and 25,900 m with cameras, radar, and signals sensors, it collected information across continental distances while treating speed, altitude, routing, and electronic awareness as mutually supporting defenses.",
    identityTitle:"A strategic sensor platform",identityHtml:"<p>Blackbird's principal output is information rather than weapons delivery. Its photographic, radar, and signals missions can establish air-defense layouts, industrial activity, fleet movements, communications patterns, and evidence needed for later planning.</p>",
    developmentHtml:"<p>Lockheed's Blackbird family required titanium-intensive construction, high-temperature fuel and seals, carefully controlled inlet airflow, and systems able to operate during sustained Mach 3 heating. The historical A-12 and SR-71 reconnaissance lineage supplies the technical foundation; the 1963 common register places the operational aircraft in the R sequence as R-11A.</p>",
    serviceHtml:"<p>R-11A flies long-range missions under tightly controlled planning and intelligence authority. Tanker support, weather, diplomatic risk, threat libraries, recovery fields, sensor tasking, and rapid exploitation of collected material form one reconnaissance system.</p>",
    missionHtml:"<p>Strategic reconnaissance surveys targets and networks whose importance exceeds one battlefield or fleet action. The aircraft can support warning, diplomacy, targeting, arms assessment, and crisis management without becoming an attack platform.</p>",
    systemsTitle:"Cameras, radar, and signals sensors",systemsHtml:"<p>The three registered equipment families permit optical, all-weather mapping, and electronic collection. Sensor models, bay arrangement, resolution, recording media, antenna positions, data handling, navigation, defensive electronics, and mission-specific combinations remain open.</p>",
    doctrineTitle:"Information after Maracaibo",doctrineHtml:"<p>The <a href='maracaibo-shock.html'>Maracaibo Shock</a> makes precise threat knowledge more important even as it disproves simple invulnerability by speed and altitude. R-11A helps build the route, emitter, and radar picture needed by electronic warfare, stand-off attack, and later orbital planning.</p>",
    related:[{href:"f-12a-blackbird.html",kicker:"Interceptor relative",label:"F-12A Blackbird"},{href:"maracaibo-shock.html",kicker:"Threat-system lesson",label:"Maracaibo Shock"}]
  }),

  "f-12a-blackbird": americanAerospaceAtmosphericType({
    title:"F-12A Blackbird",year:1970,mission:"Mach 3 strategic interceptor",speed:"3,400 km/h",radius:"1,800 km",ceiling:"24,800 m service ceiling",load:"Four long-range missiles",official:"blackbird",kicker:"Mach 3 Blackbird strategic interceptor",
    fixed:"Lockheed Blackbird manufacture, high-temperature construction, and the historical YF-12 interceptor foundation are retained.",
    lead:"The F-12A Blackbird was the Aerospace Force's Mach 3 strategic interceptor, introduced in 1970. Developed from the same high-temperature family as the R-11A reconnaissance aircraft, it paired 3,400 km/h performance and a 1,800 km combat radius with four long-range missiles for interception across broad continental approaches.",
    identityTitle:"The armed Blackbird",identityHtml:"<p>F-12A turns the Blackbird family's speed, altitude, sensors, and thermal engineering toward interception. It is not a reconnaissance aircraft with incidental weapons: its registered principal role is fighter-interceptor.</p>",
    developmentHtml:"<p>Lockheed developed an interceptor version of the A-12 family as the YF-12, combining the Mach 3 airframe with interception radar, fire control, and internal missile carriage. In Aerospace Force service the production path reaches the authoritative F-12A designation and 1970 introduction.</p>",
    serviceHtml:"<p>F-12A assumes the highest-speed portion of continental air defense while F-108A and surviving point-defense types cover other ranges and readiness demands. Exact alert sectors, patrol practices, crew structure, basing, tanker support, and numbers remain open.</p>",
    missionHtml:"<p>Strategic interception targets high-altitude bombers, reconnaissance aircraft, missile carriers, and other intruders whose speed or approach distance demands an extreme-performance response. It does not replace the Army's battlefield fighter mission.</p>",
    systemsTitle:"Four long-range missiles",systemsHtml:"<p>Four long-range missiles form the registered battery. Missile type, seeker, radar, fire-control method, internal bay arrangement, data links, countermeasures, navigation system, and rules for cooperative engagement remain open.</p>",
    doctrineTitle:"The final atmospheric interceptor step",doctrineHtml:"<p>F-12A is the most advanced registered atmospheric interceptor of the generation. Its 1970 introduction closes the line from F-104A point defense through F-108A long-range patrol, even as the service begins shifting strategic prestige and investment toward reusable orbital vehicles.</p>",
    related:[{href:"r-11a-blackbird.html",kicker:"Reconnaissance relative",label:"R-11A Blackbird"},{href:"f-108a-rapier.html",kicker:"Long-range predecessor",label:"F-108A Rapier"}]
  }),

  "b-58a-hustler": americanAerospaceAtmosphericType({
    title:"B-58A Hustler",year:1959,mission:"High-supersonic strategic bomber",speed:"2,125 km/h",radius:"3,200 km",ceiling:"19,300 m service ceiling",load:"8,000 kg conventional stores",official:"hustler",kicker:"First high-supersonic Schnellbomber",
    fixed:"Convair manufacture, delta-wing configuration, three-person operating concept, and the broad Hustler design foundation are retained.",
    lead:"The B-58A Hustler was the Aerospace Force's first high-supersonic <em>Schnellbomber</em>, introduced under Aerospace Command in 1959. Its 2,125 km/h speed, 3,200 km combat radius, and 8,000 kg conventional load made rapid penetration the center of American strategic-bomber doctrine before the Maracaibo Shock exposed the limits of speed and altitude.",
    identityTitle:"Speed as the bomber's defense",identityHtml:"<p>Hustler replaces the assumption that a strategic bomber must be a very large subsonic carrier. It is designed to cross defended distances quickly, reduce exposure time, and deliver conventional weapons against targets whose political or operational importance exceeds the battlefield.</p>",
    developmentHtml:"<p>Convair developed the B-58 around a delta wing, four turbojet engines, a three-person crew, and a streamlined external pod concept. The historical aircraft was the first operational bomber capable of sustained Mach 2 flight; the registered service introduction occurs in 1959.</p>",
    serviceHtml:"<p>B-58A begins under Aerospace Command and transfers to the independent Aerospace Force. It operates inside a larger system of tankers, weather forecasting, route planning, reconnaissance, electronic support, dispersal, and conventional target assignment.</p>",
    missionHtml:"<p>High-supersonic strategic bombing uses speed to penetrate and to compress warning time. The aircraft carries no atomic weapon. Exact conventional targets, campaign plans, basing, tanker dependence, and alert system remain open.</p>",
    systemsTitle:"Eight tonnes of conventional stores",systemsHtml:"<p>A registered 8,000 kg conventional load defines capacity rather than one standard weapon package. Bombs, guided weapons, decoys, tanks, pods, defensive armament, electronic countermeasures, and load-radius combinations remain open.</p>",
    doctrineTitle:"The aircraft Maracaibo disproves",doctrineHtml:"<p>The 1966 <a href='maracaibo-shock.html'>Maracaibo Shock</a> is the decisive warning against treating speed and altitude as invulnerability. B-58A remains important, but the service increasingly invests in electronic warfare, reconnaissance, stand-off weapons, terrain-conscious routing, and systems that can operate above the atmosphere.</p>",
    related:[{href:"b-70a-valkyrie.html",kicker:"Mach 3 successor",label:"B-70A Valkyrie"},{href:"maracaibo-shock.html",kicker:"1966 doctrinal break",label:"Maracaibo Shock"}]
  }),

  "b-70a-valkyrie": americanAerospaceAtmosphericType({
    title:"B-70A Valkyrie",year:1969,mission:"Mach 3 strategic bomber",speed:"3,250 km/h",radius:"6,900 km",ceiling:"23,500 m service ceiling",load:"14,500 kg conventional stores",official:"valkyrie",kicker:"Mach 3 conventional strategic bomber",
    fixed:"North American manufacture, six-engine delta-wing configuration, compression-lift concept, and the broad Valkyrie development foundation are retained.",
    lead:"The B-70A Valkyrie was the Aerospace Force's Mach 3 conventional strategic bomber, introduced in 1969. With a 6,900 km combat radius and 14,500 kg stores load, it was the fullest expression of American speed-and-altitude bombing doctrine—and the last registered atmospheric bomber before reusable orbital systems displaced further high-end investment.",
    identityTitle:"The ultimate atmospheric Schnellbomber",identityHtml:"<p>Valkyrie joins intercontinental radius, a large conventional load, and sustained Mach 3 flight. It is not a nuclear-delivery aircraft: strategic effect depends upon speed, precision, target selection, and conventional mass.</p>",
    developmentHtml:"<p>North American designed the Valkyrie around six engines, a large delta wing, folding tips, high-temperature structure, and compression lift generated beneath the airframe at speed. Shared research with the F-108 Rapier helps create a broader American Mach 3 industrial base.</p>",
    serviceHtml:"<p>B-70A enters service three years after Maracaibo has already shaken the doctrine that produced it. The aircraft therefore belongs simultaneously to the culmination of high-altitude bombing and to a force learning electronic protection, stand-off attack, reconnaissance-led routing, and orbital alternatives.</p>",
    missionHtml:"<p>The bomber carries conventional stores across continental distances at extreme speed. Exact target sets, basing, tanker requirements, alert system, penetration altitude, low-level alternatives, and relationship to guided reentry weapons remain open.</p>",
    systemsTitle:"Fourteen and a half tonnes of conventional stores",systemsHtml:"<p>A registered 14,500 kg load defines total conventional capacity. Weapon families, internal arrangement, precision guidance, decoys, reconnaissance equipment, electronic countermeasures, defensive systems, and load-radius combinations remain open.</p>",
    doctrineTitle:"A magnificent strategic dead end",doctrineHtml:"<p>Valkyrie's engineering continues to influence materials, propulsion, controls, and high-speed flight. Its procurement logic does not. <a href='project-apex.html'>Project Apex</a> redirects part of the same high-temperature and guidance tradition toward upper-atmosphere demonstrators. By the early 1980s the Aerospace Force prefers <a href='american-orbital-vehicle-program.html'>reusable orbital mobility</a>, <a href='columbia-spaceplane-program.html'>Columbia-derived vehicles</a>, and <a href='project-zenith.html'>orbital strategic systems</a> for the most demanding intercontinental missions.</p>",
    related:[{href:"b-58a-hustler.html",kicker:"Supersonic predecessor",label:"B-58A Hustler"},{href:"project-zenith.html",kicker:"Strategic successor",label:"Project Zenith"}]
  })
});
