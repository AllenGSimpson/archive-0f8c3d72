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
    lead:"The Reina Isabel class was Spain's two-carrier postwar fleet-aviation program. The first ship, <em>Reina Isabel</em>, entered service in 1964 and a second hull followed in 1969. The reference design displaced 49,000 tonnes, carried a standard air group of fifty-eight aircraft, and had an 8,000-nautical-mile cruising range for Atlantic operations.",
    canon:"The Reina Isabel program, two completed carriers, 1964 and 1969 commissioning sequence, Spanish hull construction with Latin technical support, 49,000-tonne reference displacement, fifty-eight-aircraft group, 8,000-nautical-mile range, and Atlantic carrier role are supported. <em>Reina Isabel</em> is established as the first ship; <em>Carlos III</em> remains the working name of the second. Individual 1985 status, propulsion, dimensions, speed, machinery arrangement, builders, aircraft mix, flight-deck equipment, weapons, sensors, crew, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"program",title:"National Maritime Program",html:"<p>The class was the largest product of the <a href='national-maritime-program.html'>National Maritime Program</a>. Merchant construction, steel, power, yards, ports, finance, and technical training preceded the first carrier rather than being secondary consequences of it.</p>"},
      {id:"development",title:"Development",html:"<p><em>Reina Isabel</em> commissioned in 1964 and a second carrier followed in 1969. Italian carrier experience and machinery and Occitan aviation, electronics, and systems work supplemented Spanish hull construction and integration.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Record status</th></tr></thead><tbody><tr><td>Reina Isabel</td><td>1964</td><td>Established first ship</td></tr><tr><td>Carlos III</td><td>1969</td><td>Second-hull name working</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 49,000 tonnes at full load and carries a standard wartime air group of fifty-eight aircraft. Its 8,000-nautical-mile cruising range reflects Spain's Atlantic emphasis. Propulsion and detailed machinery remain open.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The fifty-eight-aircraft figure describes standard 1985 wartime composition rather than maximum deck parking. Fighter, attack, reconnaissance, warning, transport, and helicopter allocations remain open.</p>"},
      {id:"operations",title:"Atlantic operations",html:"<p>The class protected routes between Iberia, the Canaries, Azores, West Africa, Brazil, the Caribbean, and the South Atlantic. Multinational command facilities supported Latin or associated task groups beyond the Mediterranean.</p>"},
      {id:"support",title:"Escort and support system",html:"<p>Canarias II cruisers, Bazán destroyers, frigates, nuclear submarines, and major auxiliaries supplied the screen and endurance required for distant carrier operations.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-e7z3b writer=g kind=revision created=2026-08-15T15:05:00-06:00 --><p>Both commissioned carriers are assigned to active service in the working 1985 register. The two-ship program and commissioning sequence are established; the second ship's name and both individual readiness records remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"numancia-assault-carrier.html",kicker:"Assault-carrier branch",label:"Numancia"},{href:"canarias-ii-class-cruiser.html",kicker:"Command escort",label:"Canarias II Class"}],
    facts:[["Type","Fleet aircraft carrier"],["Program","2 ships"],["First ship","Reina Isabel · 1964"],["Second ship","1969 · Carlos III working name"],["Reference full load","49,000 t"],["Standard air group","58 aircraft"],["Cruising range","8,000 nmi"],["Active, 1985","2 · working"]]
  }),

  "numancia-assault-carrier": spanishMajorClassArticle({
    title:"Numancia assault carrier",type:"Assault carrier",period:"1978–1985",
    lead:"Numancia was Spain's 1978 assault-carrier program, conceived after the two fleet carriers to provide vertical-takeoff aircraft, helicopters, amphibious command, and convoy air cover in a smaller 27,000-tonne design. The current register allocates one ship and a thirty-aircraft group, but those exact figures remain provisional.",
    canon:"The Numancia assault-carrier program, 1978 introduction, 27,000-tonne reference displacement, VTOL-aircraft, helicopter, amphibious-command, and convoy-air-cover roles are supported. The single-hull allocation, individual name and active status, thirty-aircraft group, propulsion, dimensions, speed, machinery, builder, exact aircraft mix, landing-force capacity, vehicles, landing craft, weapons, sensors, crew, refits, deployments, and detailed service history remain working or open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Spain developed <em>Numancia</em> after establishing two full fleet carriers. The smaller ship placed aviation, amphibious command, and convoy defense in a hull that did not require committing a Reina Isabel carrier to every operation.</p>"},
      {id:"ship",title:"Working allocation",html:"<p>The current register assigns one ship named <em>Numancia</em> to the 1978 program. The one-hull roster and its individual service record remain provisional.</p>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 27,000 tonnes at full load. The working register assigns a thirty-aircraft group; propulsion, dimensions, speed, internal vehicle and troop capacity, and detailed defensive fit remain open.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Vertical-takeoff aircraft supplied local air defense and attack; helicopters supported transport, assault, anti-submarine work, surveillance, liaison, and rescue. The exact 1985 division of the thirty-aircraft group remains open.</p>"},
      {id:"amphibious",title:"Amphibious command",html:"<p>Command facilities coordinated landing ships, helicopters, escorts, shore parties, engineers, and naval gunfire. The carrier's own landing-force capacity is not fixed.</p>"},
      {id:"convoy",title:"Convoy air cover",html:"<p>The assault carrier could accompany shipping and amphibious formations along Atlantic routes where land-based aircraft or a fleet carrier were unavailable.</p>"},
      {id:"support",title:"Fleet integration",html:"<p>The ship depended upon destroyers, frigates, submarines, mine countermeasures, landing ships, and auxiliaries. Common Latin interfaces allowed support from allied ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-f9a5d writer=g kind=revision created=2026-08-15T15:06:00-06:00 --><p>The working 1985 register assigns one active ship to the assault-carrier program. Its hull identity, thirty-aircraft allocation, propulsion, and readiness record remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"reina-isabel-class-carrier.html",kicker:"Fleet-carrier branch",label:"Reina Isabel Class"},{href:"numancia-class-ssgn.html",kicker:"Namesake submarine class",label:"Numancia SSGN Class"}],
    facts:[["Type","Assault carrier"],["Program label","Numancia"],["Introduction","1978"],["Reference full load","27,000 t"],["Working air group","30 aircraft"],["Roles","Amphibious command · convoy air cover"],["Active, 1985","1 · working"],["Hull detail status","Provisional"]]
  }),

  "hispanidad-class-cruiser": spanishMajorClassArticle({
    title:"Hispanidad-class cruiser",type:"Gun-and-missile cruiser",period:"1958–1985",
    lead:"The Hispanidad class was Spain's first postwar large-combatant program and an industrial bridge from merchant and repair work to carrier construction. The first cruiser entered service in 1958; the naval table gives the 1958–1966 generation a 15,000-tonne reference design with automatic 152 mm guns, guided missiles, and two helicopters.",
    canon:"The Hispanidad program, first ship and 1958 commissioning, 1958–1966 introduction band, Spanish construction with Latin technical support, 15,000-tonne reference displacement, automatic 152 mm guns, missiles, two helicopters, and Atlantic cruiser role are supported. The three-hull and three-active allocations, the names <em>Lepanto</em> and <em>Trafalgar</em>, their individual dates, propulsion, dimensions, speed, machinery, builders, weapon counts, sensors, crew, refits, deployments, and detailed service histories remain working or open.",
    sections:[
      {id:"program",title:"Industrial milestone",html:"<p>The first ship's 1958 commissioning demonstrated that the National Maritime Program had progressed from repair and merchant work to modern large-combatant construction. The class preceded Spain's fleet carriers by six years.</p>"},
      {id:"registry",title:"Working roster",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Record status</th></tr></thead><tbody><tr><td>Hispanidad</td><td>1958</td><td>Established first ship</td></tr><tr><td>Lepanto</td><td>1962</td><td>Working allocation</td></tr><tr><td>Trafalgar</td><td>1966</td><td>Working allocation</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 15,000 tonnes at full load. Automatic 152 mm guns, guided missiles, and two helicopters combine traditional surface fire with postwar air, command, and anti-submarine functions. Propulsion remains open.</p>"},
      {id:"guns",title:"Gun armament",html:"<p>Automatic 152 mm guns supplied sustained surface and shore fire. The register does not fix the number of mountings, ammunition, rate of fire, or fire-control equipment.</p>"},
      {id:"missiles",title:"Guided weapons",html:"<p>Missiles allowed the class to participate in fleet air defense and surface action. Missile type, launcher arrangement, and modernization sequence remain open.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters extended reconnaissance, anti-submarine search, liaison, and rescue. Types and routine allocation are not fixed.</p>"},
      {id:"operations",title:"Atlantic service",html:"<p>The ships performed command, escort, patrol, surface action, and diplomatic presence along Spain's Atlantic routes. Specific cruises and crisis deployments remain unsettled.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-g2c6f writer=g kind=revision created=2026-08-15T15:07:00-06:00 --><p>The working register assigns three Hispanidad-class cruisers to active service in 1985. Only the first ship and its 1958 entry are directly reaffirmed; the later names, exact hull total, and individual statuses remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"canarias-ii-class-cruiser.html",kicker:"Successor generation",label:"Canarias II Class"},{href:"reina-isabel-class-carrier.html",kicker:"Carrier system",label:"Reina Isabel Class"}],
    facts:[["Type","Gun-and-missile cruiser"],["First ship","Hispanidad · 1958"],["Working later roster","Lepanto · Trafalgar"],["Introduction","1958–1966"],["Reference full load","15,000 t"],["Principal guns","Automatic 152 mm"],["Standard aviation","2 helicopters"],["Active, 1985","3 · working"]]
  }),

  "canarias-ii-class-cruiser": spanishMajorClassArticle({
    title:"Canarias II-class cruiser",type:"Missile and command cruiser",period:"1975–1985",
    lead:"The Canarias II program was Spain's later missile-and-command cruiser generation. The naval reference places two 17,000-tonne ships in service in 1975 and 1979 with eighty vertical-launch cells, four helicopters, a 7,500-nautical-mile range, and Atlantic fleet-command capability; the individual roster remains provisional.",
    canon:"The Canarias II program, 1975 and 1979 introduction points, 17,000-tonne reference displacement, eighty VLS cells, four helicopters, 7,500-nautical-mile range, and Atlantic command role are supported. The two-hull and two-active allocations, the names <em>Canarias</em> and <em>Baleares</em>, electronic-intelligence fit, propulsion, dimensions, speed, machinery, builders, VLS allocation, other weapons, sensors, crew, refits, deployments, and detailed service histories remain working or open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the Hispanidad gun-and-missile cruisers and joined a larger vertical-launch battery to Atlantic endurance, aviation, electronic intelligence, and command facilities.</p>"},
      {id:"registry",title:"Working roster",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working ship</th><th>Introduction</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Canarias</td><td>1975</td><td>Active · provisional</td></tr><tr><td>Baleares</td><td>1979</td><td>Active · provisional</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 17,000 tonnes at full load, carries eighty vertical-launch cells and four helicopters, and has a 7,500-nautical-mile range. Propulsion remains open.</p>"},
      {id:"vls",title:"Vertical-launch system",html:"<p>The eighty cells supported area defense and other guided-weapon missions. The exact missile allocation, reload practice, and fire-control architecture remain open.</p>"},
      {id:"command",title:"Fleet command",html:"<p>The ships coordinated distant carrier and surface groups through national and Latin tactical-data systems. They supplied command capacity when formations operated beyond dense Mediterranean shore infrastructure.</p>"},
      {id:"intelligence",title:"Electronic intelligence",html:"<p>Electronic-intelligence equipment monitored radar, communication, and weapon emissions and contributed to the task-group picture. Specific suites and processing systems are not fixed.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Four helicopters supported anti-submarine search, surveillance, liaison, rescue, and command. Types and normal mix remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-h4e8h writer=g kind=revision created=2026-08-15T15:08:00-06:00 --><p>The working register assigns two Canarias II cruisers to active service in 1985. The exact hull total, individual names, and readiness records remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"hispanidad-class-cruiser.html",kicker:"Predecessor generation",label:"Hispanidad Class"},{href:"reina-isabel-class-carrier.html",kicker:"Protected force",label:"Reina Isabel Class"},{href:"latin-naval-materiel-board.html",kicker:"VLS and data interfaces",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Missile and command cruiser"],["Class program","Canarias II"],["Working ships","Canarias · Baleares"],["Introduction","1975; 1979"],["Reference full load","17,000 t"],["Vertical-launch cells","80"],["Standard aviation","4 helicopters"],["Cruising range","7,500 nmi"],["Active, 1985","2 · working"]]
  }),

  "isaac-peral-class-ssn": spanishMajorClassArticle({
    title:"Isaac Peral-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1975–1985",
    lead:"The Isaac Peral class was Spain's cooperative Latin nuclear attack-submarine program. The first boat entered service in 1975 after Spanish hull construction was joined to shared reactor, machinery, sensor, and training work. The naval table and asset register provisionally extend the class to three 6,200-tonne boats by 1982.",
    canon:"The Isaac Peral program, first boat and 1975 introduction, nuclear propulsion, Spanish ownership and hull construction, Latin reactor cooperation, and Atlantic attack and carrier-screening roles are supported. The three-boat and three-active allocations, 1975–1982 completion band beyond the first boat, 6,200-tonne reference displacement, individual names, dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain working or open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class gave Spain a nuclear undersea arm suited to carrier screening, Atlantic surveillance, and long-range attack. Spanish hull and systems work drew upon common Latin reactor, sensor, and industrial cooperation.</p>"},
      {id:"registry",title:"Working roster",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Boat</th><th>Record status</th></tr></thead><tbody><tr><td>Isaac Peral</td><td>Established first boat</td></tr><tr><td>Narcís Monturiol</td><td>Working allocation</td></tr><tr><td>Cosme García</td><td>Working allocation</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The working later-class design displaces 6,200 tonnes submerged and uses nuclear propulsion. Reactor type, dimensions, speed, weapons, sensors, quieting, endurance, and crew remain open.</p>"},
      {id:"role",title:"Atlantic attack role",html:"<p>The class hunted hostile surface ships and submarines, screened carrier formations, observed distant approaches, and supported reconnaissance along Spain's oceanic routes.</p>"},
      {id:"carrier",title:"Carrier support",html:"<p>Nuclear endurance allowed the boats to accompany or precede Reina Isabel task groups over long distances. Operations depended upon intelligence, patrol aircraft, communications, escorts, and overseas maintenance.</p>"},
      {id:"bases",title:"Bases and access",html:"<p>Ferrol, Cartagena, Cádiz, the Canaries, Gibraltar, and Latin or associated facilities supplied a dispersed operating system. Exact home ports and deployment cycles remain open.</p>"},
      {id:"missile-branch",title:"Numancia missile branch",html:"<p>The single Numancia-class boat added a conventional guided-missile mission in 1983. Isaac Peral remained the attack-submarine branch.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-i6g2j writer=g kind=revision created=2026-08-15T15:09:00-06:00 --><p>The working register assigns three Isaac Peral boats to active service in 1985. Only the first boat and its 1975 entry are directly reaffirmed; the later hull roster, total, and readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"numancia-class-ssgn.html",kicker:"Missile branch",label:"Numancia Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"}],
    facts:[["Type","Nuclear attack submarine"],["First boat","Isaac Peral · 1975"],["Boats built","3 · working"],["Introduction","1975–1982 · later dates working"],["Reference submerged displacement","6,200 t"],["Propulsion","Nuclear"],["Principal role","Atlantic nuclear attack"],["Active, 1985","3 · working"]]
  }),

  "numancia-class-ssgn": spanishMajorClassArticle({
    title:"Numancia-class guided-missile submarine",type:"Nuclear guided-missile submarine",period:"1983–1985",
    lead:"Numancia is the working class label for Spain's 1983 guided-missile-submarine allocation. The naval table assigns one 7,900-tonne SSGN to the program, while the asset registry names the boat <em>Pelayo</em>. The later transcript does not independently settle the hull roster or individual service history.",
    canon:"A Spanish conventional guided-missile submarine branch is compatible with the established nuclear-submarine and fleet-strike programs. The Numancia label, one-boat and active allocations, 1983 commissioning, 7,900-tonne submerged displacement, nuclear propulsion, Spanish construction, and the name <em>Pelayo</em> remain working reconstruction. Nuclear warheads do not exist. Dimensions, speed, reactor and machinery design, missile type and count, launch arrangement, other weapons, sensors, crew, builder, endurance, refits, patrols, and detailed service history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The working submarine class shares the name Numancia with Spain's assault-carrier program, while its registered hull name is <em>Pelayo</em>. Both identities remain provisional and are distinguished by category.</p>"},
      {id:"development",title:"Development",html:"<p>The class followed the Isaac Peral nuclear attack submarines and added a submerged conventional guided-missile capability to Spain's carrier, cruiser, and land-based strike systems.</p>"},
      {id:"ship",title:"Working ship",html:"<p><em>Pelayo</em> is the working name of the single boat allocated by the current register. Its 1983 commissioning and 1985 active status remain provisional.</p>"},
      {id:"design",title:"Working design",html:"<p>The registry assigns 7,900 tonnes submerged and nuclear propulsion. Missile type and count, launch arrangement, speed, weapons, sensors, reactor, and crew remain open.</p>"},
      {id:"strike",title:"Conventional guided-missile attack",html:"<p>The boat delivered guided weapons against ships or fixed targets. Nuclear warheads did not exist, making navigation, targeting, accuracy, and conventional magazine effect central to mission planning.</p>"},
      {id:"operations",title:"Atlantic operations",html:"<p>Nuclear endurance and submarine concealment supported approach through distant Atlantic waters. Reconnaissance, communications, and target confirmation linked the boat to the wider Spanish and Latin system.</p>"},
      {id:"relationship",title:"Relationship to Isaac Peral",html:"<p>The working program supplements rather than replaces the Isaac Peral attack-submarine branch. The resulting four-boat nuclear total remains a provisional register allocation.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j8i4l writer=g kind=revision created=2026-08-15T15:10:00-06:00 --><p>The current register assigns one active guided-missile submarine to the Numancia program. The class label, hull name, count, propulsion, commissioning, and readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishMajorRelated,{href:"isaac-peral-class-ssn.html",kicker:"Attack branch",label:"Isaac Peral Class"},{href:"canarias-ii-class-cruiser.html",kicker:"Surface missile system",label:"Canarias II Class"},{href:"nuclear-weapons-research.html",kicker:"Strategic constraint",label:"Nuclear-Weapons Research"}],
    facts:[["Type","Guided-missile submarine"],["Class label","Numancia · working"],["Boats built","1 · working"],["Registered boat","Pelayo · extrapolated name"],["Commissioned","1983 · working"],["Working submerged displacement","7,900 t"],["Working propulsion","Nuclear"],["Warhead doctrine","Conventional"],["Active, 1985","1 · working"]]
  })
});
