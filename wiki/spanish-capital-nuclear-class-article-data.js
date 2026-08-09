window.deepArticles = window.deepArticles || {};

const spanishMajorClassArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Armada Española · ${config.type} · ${config.period}`,
  infoboxKicker:"Spanish warship class",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Armada Española","Spanish warships","Naval history","Military technology"]
});

const spanishMajorRelated = [
  {href:"armada-espanola-postwar.html",kicker:"Parent service",label:"Armada Española"},
  {href:"national-maritime-program.html",kicker:"Industrial foundation",label:"National Maritime Program"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"spain.html",kicker:"Sovereign state",label:"Spain"}
];

const spanishMajorOverview = window.deepArticles["armada-espanola-postwar"];
if (spanishMajorOverview) {
  const classSection = spanishMajorOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Reina Isabel fleet carrier", "<a href='reina-isabel-class-carrier.html'>Reina Isabel fleet carrier</a>")
      .replace("Numancia assault carrier", "<a href='numancia-assault-carrier.html'>Numancia assault carrier</a>")
      .replace("Hispanidad cruiser", "<a href='hispanidad-class-cruiser.html'>Hispanidad cruiser</a>")
      .replace("Canarias II cruiser", "<a href='canarias-ii-class-cruiser.html'>Canarias II cruiser</a>")
      .replace("Isaac Peral", "<a href='isaac-peral-class-ssn.html'>Isaac Peral</a>")
      .replace("<td>Numancia</td><td>1</td><td>1983", "<td><a href='numancia-class-ssgn.html'>Numancia</a></td><td>1</td><td>1983");
  }
  spanishMajorOverview.related = [
    {href:"reina-isabel-class-carrier.html",kicker:"Fleet aviation",label:"Reina Isabel Class"},
    {href:"numancia-assault-carrier.html",kicker:"Amphibious aviation",label:"Numancia"},
    {href:"hispanidad-class-cruiser.html",kicker:"Gun-and-missile cruiser",label:"Hispanidad Class"},
    {href:"canarias-ii-class-cruiser.html",kicker:"Fleet command",label:"Canarias II Class"},
    {href:"isaac-peral-class-ssn.html",kicker:"Nuclear attack",label:"Isaac Peral Class"},
    {href:"numancia-class-ssgn.html",kicker:"Guided-missile submarine",label:"Numancia Class"},
    ...spanishMajorOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "reina-isabel-class-carrier": spanishMajorClassArticle({
    title:"Reina Isabel-class aircraft carrier",type:"Fleet-carrier class",period:"1964–1985",
    lead:"The Reina Isabel class was a two-ship Spanish fleet-carrier class comprising <em>Reina Isabel</em> and <em>Carlos III</em>. The 49,000-tonne steam-turbine ships entered service in 1964 and 1969. Each operated a standard air group of fifty-eight aircraft and had a registered cruising range of 8,000 nautical miles.",
    canon:"The two ships and names, controlling 1964 and 1969 commissioning years, 49,000-tonne full-load displacement, steam-turbine propulsion, fifty-eight-aircraft standard group, 8,000-nautical-mile cruising range, Atlantic carrier and multinational-command role, Spanish construction, and two active ships are established. Dimensions, speed, machinery arrangement, builders, aircraft models and mix, flight-deck equipment, weapons, sensors, crew, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"program",title:"National Maritime Program",html:"<p>The class was the largest product of the <a href='national-maritime-program.html'>National Maritime Program</a>. Merchant construction, steel, power, yards, ports, finance, and technical training preceded the first carrier rather than being secondary consequences of it.</p>"},
      {id:"development",title:"Development",html:"<p><em>Reina Isabel</em> commissioned in 1964 and <em>Carlos III</em> in 1969 under the controlling class register. Italian carrier experience and machinery and Occitan aviation, electronics, and systems work supplemented Spanish hull construction and integration.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Reina Isabel</td><td>1964</td><td>Active</td></tr><tr><td>Carlos III</td><td>1969</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 49,000 tonnes at full load, used steam turbines, and carried a standard wartime air group of fifty-eight aircraft. The registered 8,000-nautical-mile cruising range reflected Spain's Atlantic emphasis.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The fifty-eight-aircraft figure describes standard 1985 wartime composition rather than maximum deck parking. Fighter, attack, reconnaissance, warning, transport, and helicopter allocations remain open.</p>"},
      {id:"operations",title:"Atlantic operations",html:"<p>The class protected routes between Iberia, the Canaries, Azores, West Africa, Brazil, the Caribbean, and the South Atlantic. Multinational command facilities supported Latin or associated task groups beyond the Mediterranean.</p>"},
      {id:"support",title:"Escort and support system",html:"<p>Canarias II cruisers, Bazán destroyers, frigates, nuclear submarines, and fourteen major auxiliaries supplied the screen and endurance required for distant carrier operations.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both carriers remained active and accounted for Spain's two fleet carriers. The smaller <a href='numancia-assault-carrier.html'><em>Numancia</em></a> formed the separate assault-carrier category.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"numancia-assault-carrier.html",kicker:"Assault-carrier branch",label:"Numancia"},{href:"canarias-ii-class-cruiser.html",kicker:"Command escort",label:"Canarias II Class"}],
    facts:[["Type","Fleet aircraft carrier"],["Ships","Reina Isabel · Carlos III"],["Commissioned","1964 · 1969"],["Full load","49,000 t"],["Propulsion","Steam turbines"],["Standard air group","58 aircraft"],["Cruising range","8,000 nmi"],["Active, 1985","2"]]
  }),

  "numancia-assault-carrier": spanishMajorClassArticle({
    title:"Numancia assault carrier",type:"Assault carrier",period:"1978–1985",
    lead:"<em>Numancia</em> was a 27,000-tonne Spanish gas-turbine assault carrier commissioned in 1978. Its standard air group of thirty combined vertical-takeoff aircraft and helicopters, while embarked command facilities supported amphibious operations, convoy air cover, and intervention beyond Iberian waters.",
    canon:"The single ship and name, 1978 commissioning, 27,000-tonne full-load displacement, gas-turbine propulsion, thirty-aircraft standard group, VTOL-aircraft, helicopter, amphibious-command, convoy-air-cover, and active 1985 status are established. Dimensions, speed, machinery arrangement, builder, aircraft models and exact mix, landing-force capacity, vehicles, landing craft, weapons, sensors, crew, refits, deployments, and detailed service history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Spain developed <em>Numancia</em> after establishing two full fleet carriers. The smaller ship placed aviation, amphibious command, and convoy defense in a hull that did not require committing a Reina Isabel carrier to every operation.</p>"},
      {id:"ship",title:"Ship",html:"<p><em>Numancia</em> commissioned in 1978 and remained the only member of its class. The name is distinct from the separate Numancia guided-missile-submarine class.</p>"},
      {id:"design",title:"Registered design",html:"<p>The ship displaced 27,000 tonnes at full load and used gas turbines. The register fixes the thirty-aircraft group and command role while leaving dimensions, speed, internal vehicle and troop capacity, and detailed defensive fit open.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Vertical-takeoff aircraft supplied local air defense and attack; helicopters supported transport, assault, anti-submarine work, surveillance, liaison, and rescue. The exact 1985 division of the thirty-aircraft group remains open.</p>"},
      {id:"amphibious",title:"Amphibious command",html:"<p>Command facilities coordinated landing ships, helicopters, escorts, shore parties, engineers, and naval gunfire. The carrier's own landing-force capacity is not fixed.</p>"},
      {id:"convoy",title:"Convoy air cover",html:"<p><em>Numancia</em> could accompany shipping and amphibious formations along Atlantic routes where land-based aircraft or a fleet carrier were unavailable.</p>"},
      {id:"support",title:"Fleet integration",html:"<p>The ship depended upon destroyers, frigates, submarines, mine countermeasures, landing ships, and auxiliaries. Common Latin interfaces allowed support from allied ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Numancia</em> was active and accounted for Spain's single light or assault carrier.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"reina-isabel-class-carrier.html",kicker:"Fleet-carrier branch",label:"Reina Isabel Class"},{href:"numancia-class-ssgn.html",kicker:"Namesake submarine class",label:"Numancia SSGN Class"}],
    facts:[["Type","Assault carrier"],["Ship","Numancia"],["Commissioned","1978"],["Full load","27,000 t"],["Propulsion","Gas turbines"],["Standard air group","30 aircraft"],["Roles","Amphibious command · convoy air cover"],["Active, 1985","1"]]
  }),

  "hispanidad-class-cruiser": spanishMajorClassArticle({
    title:"Hispanidad-class cruiser",type:"Gun-and-missile cruiser",period:"1958–1985",
    lead:"The Hispanidad class was a three-ship Spanish Atlantic cruiser class comprising <em>Hispanidad</em>, <em>Lepanto</em>, and <em>Trafalgar</em>. Introduced between 1958 and 1966, the 15,000-tonne steam-turbine ships combined automatic 152 mm guns, guided missiles, and two helicopters. All three remained active in 1985.",
    canon:"The three ships and names, 1958–1966 commissioning sequence, 15,000-tonne full-load displacement, steam-turbine propulsion, automatic 152 mm guns, missiles, two helicopters, Atlantic cruiser role, Spanish construction, and three active ships are established. Dimensions, speed, machinery arrangement, builders, gun and missile counts, missile and sensor models, crew, helicopter types, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"program",title:"Industrial milestone",html:"<p>The first ship's 1958 commissioning demonstrated that the National Maritime Program had progressed from repair and merchant work to modern large-combatant construction. The class preceded Spain's fleet carriers by six years.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Hispanidad</td><td>1958</td><td>Active</td></tr><tr><td>Lepanto</td><td>1962</td><td>Active</td></tr><tr><td>Trafalgar</td><td>1966</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 15,000 tonnes at full load and used steam turbines. Automatic 152 mm guns, guided missiles, and two helicopters combined traditional surface fire with postwar air, command, and anti-submarine functions.</p>"},
      {id:"guns",title:"Gun armament",html:"<p>Automatic 152 mm guns supplied sustained surface and shore fire. The register does not fix the number of mountings, ammunition, rate of fire, or fire-control equipment.</p>"},
      {id:"missiles",title:"Guided weapons",html:"<p>Missiles allowed the class to participate in fleet air defense and surface action. Missile type, launcher arrangement, and modernization sequence remain open.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters extended reconnaissance, anti-submarine search, liaison, and rescue. Types and routine allocation are not fixed.</p>"},
      {id:"operations",title:"Atlantic service",html:"<p>The ships performed command, escort, patrol, surface action, and diplomatic presence along Spain's Atlantic routes. Specific cruises and crisis deployments remain unsettled.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All three ships remained active alongside the newer Canarias II command cruisers.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"canarias-ii-class-cruiser.html",kicker:"Successor generation",label:"Canarias II Class"},{href:"reina-isabel-class-carrier.html",kicker:"Carrier system",label:"Reina Isabel Class"}],
    facts:[["Type","Gun-and-missile cruiser"],["Ships","Hispanidad · Lepanto · Trafalgar"],["Commissioned","1958–1966"],["Full load","15,000 t"],["Propulsion","Steam turbines"],["Principal guns","Automatic 152 mm"],["Standard aviation","2 helicopters"],["Active, 1985","3"]]
  }),

  "canarias-ii-class-cruiser": spanishMajorClassArticle({
    title:"Canarias II-class cruiser",type:"Missile and command cruiser",period:"1975–1985",
    lead:"The Canarias II class was a two-ship Spanish missile and command-cruiser class comprising <em>Canarias</em> and <em>Baleares</em>. Commissioned in 1975 and 1979, the 17,000-tonne steam-turbine ships carried eighty vertical-launch cells and four helicopters, had a registered range of 7,500 nautical miles, and performed Atlantic fleet-command and electronic-intelligence duties.",
    canon:"The two ships and names, controlling 1975 and 1979 commissioning years, 17,000-tonne full-load displacement, steam-turbine propulsion, eighty VLS cells, four helicopters, 7,500-nautical-mile range, Atlantic fleet-command and electronic-intelligence roles, Spanish construction, and two active ships are established. Dimensions, speed, machinery arrangement, builders, VLS allocation, other weapons, sensors, crew, helicopter types, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the Hispanidad gun-and-missile cruisers and joined a larger vertical-launch battery to Atlantic endurance, aviation, electronic intelligence, and command facilities.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Canarias</td><td>1975</td><td>Active</td></tr><tr><td>Baleares</td><td>1979</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 17,000 tonnes at full load, used steam turbines, carried eighty vertical-launch cells and four helicopters, and had a registered 7,500-nautical-mile range.</p>"},
      {id:"vls",title:"Vertical-launch system",html:"<p>The eighty cells supported area defense and other guided-weapon missions. The exact missile allocation, reload practice, and fire-control architecture remain open.</p>"},
      {id:"command",title:"Fleet command",html:"<p>The ships coordinated distant carrier and surface groups through national and Latin tactical-data systems. They supplied command capacity when formations operated beyond dense Mediterranean shore infrastructure.</p>"},
      {id:"intelligence",title:"Electronic intelligence",html:"<p>Electronic-intelligence equipment monitored radar, communication, and weapon emissions and contributed to the task-group picture. Specific suites and processing systems are not fixed.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Four helicopters supported anti-submarine search, surveillance, liaison, rescue, and command. Types and normal mix remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Canarias</em> and <em>Baleares</em> were active. They formed two of Spain's five active missile and command cruisers.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"hispanidad-class-cruiser.html",kicker:"Predecessor generation",label:"Hispanidad Class"},{href:"reina-isabel-class-carrier.html",kicker:"Protected force",label:"Reina Isabel Class"},{href:"latin-naval-materiel-board.html",kicker:"VLS and data interfaces",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Missile and command cruiser"],["Ships","Canarias · Baleares"],["Commissioned","1975 · 1979"],["Full load","17,000 t"],["Propulsion","Steam turbines"],["Vertical-launch cells","80"],["Standard aviation","4 helicopters"],["Cruising range","7,500 nmi"],["Active, 1985","2"]]
  }),

  "isaac-peral-class-ssn": spanishMajorClassArticle({
    title:"Isaac Peral-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1975–1985",
    lead:"The Isaac Peral class was a three-ship Spanish nuclear attack-submarine class introduced between 1975 and 1982. All three 6,200-tonne submerged boats remained active in 1985. The asset registry supplies the working names <em>Isaac Peral</em>, <em>Narcís Monturiol</em>, and <em>Cosme García</em>.",
    canon:"The three-boat total, 1975–1982 introduction band, 6,200-tonne submerged displacement, nuclear propulsion, Atlantic nuclear-attack role, Spanish construction, and three active boats are established. The individual names are registered extrapolations. Dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, individual commissioning dates, endurance, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class gave Spain a nuclear undersea arm suited to carrier screening, Atlantic surveillance, and long-range attack. Spanish hull and systems work drew upon common Latin reactor, sensor, and industrial cooperation.</p>"},
      {id:"registry",title:"Registered ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Registered boat</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Isaac Peral</td><td>Active</td></tr><tr><td>Narcís Monturiol</td><td>Active</td></tr><tr><td>Cosme García</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 6,200 tonnes submerged and used nuclear propulsion. Reactor type, dimensions, speed, weapons, sensors, quieting, endurance, and crew remain open.</p>"},
      {id:"role",title:"Atlantic attack role",html:"<p>The class hunted hostile surface ships and submarines, screened carrier formations, observed distant approaches, and supported reconnaissance along Spain's oceanic routes.</p>"},
      {id:"carrier",title:"Carrier support",html:"<p>Nuclear endurance allowed the boats to accompany or precede Reina Isabel task groups over long distances. Operations depended upon intelligence, patrol aircraft, communications, escorts, and overseas maintenance.</p>"},
      {id:"bases",title:"Bases and access",html:"<p>Ferrol, Cartagena, Cádiz, the Canaries, Gibraltar, and Latin or associated facilities supplied a dispersed operating system. Exact home ports and deployment cycles remain open.</p>"},
      {id:"missile-branch",title:"Numancia missile branch",html:"<p>The single Numancia-class boat added a conventional guided-missile mission in 1983. Isaac Peral remained the attack-submarine branch.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All three registered boats were active. Their individual readiness and patrol status are not fixed.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"numancia-class-ssgn.html",kicker:"Missile branch",label:"Numancia Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"}],
    facts:[["Type","Nuclear attack submarine"],["Boats built","3"],["Introduction","1975–1982"],["Submerged displacement","6,200 t"],["Propulsion","Nuclear"],["Principal role","Atlantic nuclear attack"],["Active, 1985","3"],["Hull-name status","Registered extrapolation"]]
  }),

  "numancia-class-ssgn": spanishMajorClassArticle({
    title:"Numancia-class guided-missile submarine",type:"Nuclear guided-missile submarine",period:"1983–1985",
    lead:"The Numancia class was a one-ship Spanish nuclear guided-missile-submarine class. The 7,900-tonne submerged boat <em>Pelayo</em> commissioned in 1983 and remained active in 1985 for conventional guided-missile attack.",
    canon:"The one-boat total, 1983 commissioning, 7,900-tonne submerged displacement, nuclear propulsion, conventional guided-missile-attack role, Spanish construction, and active 1985 status are established. The name Pelayo is a registered extrapolation. Dimensions, speed, reactor and machinery design, missile type and count, launch arrangement, other weapons, sensors, crew, builder, endurance, refits, patrols, and detailed service history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The submarine class shared the name Numancia with Spain's assault carrier, but its sole registered hull was <em>Pelayo</em>. Naval references distinguish the carrier and SSGN by category.</p>"},
      {id:"development",title:"Development",html:"<p>The class followed the Isaac Peral nuclear attack submarines and added a submerged conventional guided-missile capability to Spain's carrier, cruiser, and land-based strike systems.</p>"},
      {id:"ship",title:"Registered ship",html:"<p><em>Pelayo</em> is the working registered name of the sole boat. It commissioned in 1983 and remained active on the 1985 reference date.</p>"},
      {id:"design",title:"Registered design",html:"<p>The boat displaced 7,900 tonnes submerged and used nuclear propulsion. Missile type and count, launch arrangement, speed, weapons, sensors, reactor, and crew remain open.</p>"},
      {id:"strike",title:"Conventional guided-missile attack",html:"<p>The boat delivered guided weapons against ships or fixed targets. Nuclear warheads did not exist, making navigation, targeting, accuracy, and conventional magazine effect central to mission planning.</p>"},
      {id:"operations",title:"Atlantic operations",html:"<p>Nuclear endurance and submarine concealment supported approach through distant Atlantic waters. Reconnaissance, communications, and target confirmation linked the boat to the wider Spanish and Latin system.</p>"},
      {id:"relationship",title:"Relationship to Isaac Peral",html:"<p>The class supplemented rather than replaced the three Isaac Peral attack submarines. Together they supplied Spain's four active nuclear submarines.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The sole registered boat was active. Patrol status, readiness, and weapon load are open.</p>"}
    ],
    related:[...spanishMajorRelated,{href:"isaac-peral-class-ssn.html",kicker:"Attack branch",label:"Isaac Peral Class"},{href:"canarias-ii-class-cruiser.html",kicker:"Surface missile system",label:"Canarias II Class"},{href:"nuclear-weapons-research.html",kicker:"Strategic constraint",label:"Nuclear-Weapons Research"}],
    facts:[["Type","Nuclear guided-missile submarine"],["Boats built","1"],["Registered boat","Pelayo · extrapolated name"],["Commissioned","1983"],["Submerged displacement","7,900 t"],["Propulsion","Nuclear"],["Warhead doctrine","Conventional"],["Active, 1985","1"]]
  })
});
