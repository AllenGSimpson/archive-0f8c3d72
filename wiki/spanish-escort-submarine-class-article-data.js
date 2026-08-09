window.deepArticles = window.deepArticles || {};

const spanishEscortArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Armada Española · ${config.type} · ${config.period}`,
  infoboxKicker:"Spanish warship class",
  lead:config.lead,
  canon:config.canon,
  sections:[
    {id:"development",title:"Development",html:`<p>${config.development}</p>`},
    {id:"registry",title:"Registered ships",html:config.registry},
    {id:"design",title:"Registered design",html:`<p>${config.design}</p>`},
    {id:"role",title:"Operational role",html:`<p>${config.role}</p>`},
    {id:"system",title:config.systemTitle,html:`<p>${config.system}</p>`},
    {id:"service",title:"Service",html:`<p>${config.service}</p>`},
    {id:"transition",title:config.transitionTitle,html:`<p>${config.transition}</p>`},
    {id:"status",title:"Status in 1985",html:`<p>${config.status}</p>`}
  ],
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Armada Española","Spanish warships","Naval history","Military technology"]
});

const spanishEscortRelated = [
  {href:"armada-espanola-postwar.html",kicker:"Parent service",label:"Armada Española"},
  {href:"national-maritime-program.html",kicker:"Industrial foundation",label:"National Maritime Program"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"spain.html",kicker:"Sovereign state",label:"Spain"}
];

const spanishEscortRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Registered ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const spanishEscortOverview = window.deepArticles["armada-espanola-postwar"];
if (spanishEscortOverview) {
  const classSection = spanishEscortOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Almirante Cervera destroyer", "<a href='almirante-cervera-class-destroyer.html'>Almirante Cervera destroyer</a>")
      .replace("Bazán destroyer", "<a href='bazan-class-destroyer.html'>Bazán destroyer</a>")
      .replace("Descubierta frigate", "<a href='descubierta-class-frigate.html'>Descubierta frigate</a>")
      .replace("Santa María frigate", "<a href='santa-maria-class-frigate.html'>Santa María frigate</a>");
  }
  const escortSection = spanishEscortOverview.sections.find(section => section.id === "escorts");
  if (escortSection) {
    escortSection.html = escortSection.html
      .replace("Almirante Cervera destroyers", "<a href='almirante-cervera-class-destroyer.html'>Almirante Cervera destroyers</a>")
      .replace("Bazán destroyers", "<a href='bazan-class-destroyer.html'>Bazán destroyers</a>")
      .replace("Descubierta frigates", "<a href='descubierta-class-frigate.html'>Descubierta frigates</a>")
      .replace("Santa María frigates", "<a href='santa-maria-class-frigate.html'>Santa María frigates</a>");
  }
  const submarineSection = spanishEscortOverview.sections.find(section => section.id === "submarines");
  if (submarineSection) {
    submarineSection.html = submarineSection.html
      .replace("Four Delfín", "Four <a href='delfin-class-submarine.html'>Delfín</a>")
      .replace("four Galerna", "four <a href='galerna-class-submarine.html'>Galerna</a>");
  }
  spanishEscortOverview.related = [
    {href:"almirante-cervera-class-destroyer.html",kicker:"Atlantic missile escort",label:"Almirante Cervera Class"},
    {href:"bazan-class-destroyer.html",kicker:"Carrier escort",label:"Bazán Class"},
    {href:"descubierta-class-frigate.html",kicker:"Ocean patrol and ASW",label:"Descubierta Class"},
    {href:"santa-maria-class-frigate.html",kicker:"Long-range missile escort",label:"Santa María Class"},
    {href:"delfin-class-submarine.html",kicker:"Earlier conventional branch",label:"Delfín Class"},
    {href:"galerna-class-submarine.html",kicker:"Later conventional branch",label:"Galerna Class"},
    ...spanishEscortOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "almirante-cervera-class-destroyer": spanishEscortArticle({
    title:"Almirante Cervera-class destroyer",type:"Atlantic missile destroyer",period:"1963–1985",
    lead:"The Almirante Cervera class was an eight-ship Spanish Atlantic missile-destroyer class introduced during the 1963–1972 program band. The 5,300-tonne steam-turbine ships supplied the Armada Española's first postwar long-range destroyer generation. Six were active in 1985 and two remained in mobilization reserve.",
    canon:"The eight-ship total, 1963–1972 introduction band, 5,300-tonne full-load displacement, steam-turbine propulsion, Atlantic missile-escort role, Spanish construction, six active ships, and two reserve ships are established. The individual hull names and registry commissioning sequence are extrapolations; the controlling class introduction band takes precedence over its interim row dates. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"The class joined guided weapons to the endurance and seakeeping required by Spain's Atlantic strategy. It entered service as the <a href='national-maritime-program.html'>National Maritime Program</a> moved from reconstructed yards and merchant tonnage into sustained major-combatant production.",
    registry:spanishEscortRoster([["Murcia","1963","Mobilization reserve"],["Palma","1964","Mobilization reserve"],["Bilbao","1965"],["Alicante","1966"],["Córdoba","1968"],["Valladolid","1969"],["Vigo","1970"],["Gijón","1971"]]),
    design:"Each ship displaced 5,300 tonnes at full load and used steam turbines. The controlling reference fixes the class as an Atlantic missile escort without establishing launcher arrangement, missile and gun types, sensors, aviation facilities, speed, range, dimensions, or crew.",
    role:"The ships screened carriers and cruisers, escorted convoys, protected ocean routes, and provided guided-weapon defense for formations operating beyond dense coastal air and naval cover.",
    systemTitle:"Atlantic escort system",system:"The destroyers depended on replenishment ships, patrol aircraft, shore communications, and Latin-compatible tactical interfaces. Their role connected the carrier fleet to routes through the Canaries, Azores, West Africa, Brazil, and the wider South Atlantic.",
    service:"The working registry gives the eight hulls Spanish city names. Specific squadrons, cruises, incidents, and modernization histories are not yet fixed.",
    transitionTitle:"Bazán development",transition:"The larger gas-turbine <a href='bazan-class-destroyer.html'>Bazán class</a> followed from 1976. Two early Almirante Cervera hulls entered mobilization reserve while six remained active beside all eight Bazán ships.",
    status:"Bilbao, Alicante, Córdoba, Valladolid, Vigo, and Gijón were active. Murcia and Palma remained in mobilization reserve, producing the fixed six-active-ship total.",
    related:[...spanishEscortRelated,{href:"bazan-class-destroyer.html",kicker:"Successor generation",label:"Bazán Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"}],
    facts:[["Type","Atlantic missile destroyer"],["Ships built","8"],["Introduction","1963–1972"],["Full load","5,300 t"],["Propulsion","Steam turbines"],["Active, 1985","6"],["Reserve, 1985","2"],["Hull-name status","Registered extrapolation"]]
  }),

  "bazan-class-destroyer": spanishEscortArticle({
    title:"Bazán-class destroyer",type:"Carrier escort",period:"1976–1985",
    lead:"The Bazán class was an eight-ship Spanish carrier-escort destroyer class introduced during the 1976–1984 program band. The 6,800-tonne gas-turbine ships had a registered endurance of 6,500 nautical miles. All eight remained active in 1985.",
    canon:"The eight-ship total, 1976–1984 introduction band, 6,800-tonne full-load displacement, gas-turbine propulsion, carrier-escort role, 6,500-nautical-mile endurance, Spanish construction, and eight active ships are established. The individual hull names and registry commissioning sequence are extrapolations; the controlling class introduction band takes precedence over its interim row dates. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Bazán was the mature long-range destroyer of Spain's carrier-centered fleet. Its program paired turbine responsiveness with the endurance required to keep station beside the Reina Isabel carriers across Atlantic operating areas.",
    registry:spanishEscortRoster([["A Coruña","1976"],["Granada","1977"],["Cádiz","1978"],["Cartagena","1979"],["Santander","1980"],["Burgos","1981"],["Salamanca","1982"],["Toledo","1983"]]),
    design:"Each ship displaced 6,800 tonnes at full load, used gas turbines, and had a registered endurance of 6,500 nautical miles. Weapons, vertical-launch capacity, sensors, helicopter arrangements, speed, dimensions, and crew remain open.",
    role:"Bazán ships formed the close surface screen of Spanish carrier groups. They performed air, surface, and submarine defense, route protection, and command-support work appropriate to a large fleet escort.",
    systemTitle:"Carrier-group endurance",system:"The 6,500-nautical-mile figure allowed the class to remain useful along Spain's Atlantic lines without assuming continuous access to nearby bases. Tankers, stores ships, repair support, and aviation still determined actual deployment endurance.",
    service:"The registered ships carry Spanish city names. Common Latin data, weapon-support, replenishment, and aviation interfaces enabled mixed task groups while command and deployment authority remained Spanish.",
    transitionTitle:"Place in the destroyer force",transition:"Bazán supplemented rather than wholly replaced the <a href='almirante-cervera-class-destroyer.html'>Almirante Cervera class</a>. Eight Bazán and six active older destroyers produced Spain's fourteen-ship active destroyer force.",
    status:"All eight registered ships were active. Individual readiness, squadron assignments, and deployment cycles remain open.",
    related:[...spanishEscortRelated,{href:"almirante-cervera-class-destroyer.html",kicker:"Earlier generation",label:"Almirante Cervera Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"},{href:"canarias-ii-class-cruiser.html",kicker:"Command escort",label:"Canarias II Class"}],
    facts:[["Type","Carrier-escort destroyer"],["Ships built","8"],["Introduction","1976–1984"],["Full load","6,800 t"],["Propulsion","Gas turbines"],["Endurance","6,500 nmi"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"]]
  }),

  "descubierta-class-frigate": spanishEscortArticle({
    title:"Descubierta-class frigate",type:"Ocean patrol and ASW frigate",period:"1965–1985",
    lead:"The Descubierta class was an eight-ship Spanish ocean-patrol and anti-submarine frigate class introduced during the 1965–1973 program band. All eight 3,500-tonne diesel ships remained active in 1985.",
    canon:"The eight-ship total, 1965–1973 introduction band, 3,500-tonne full-load displacement, diesel propulsion, ocean-patrol and anti-submarine role, Spanish construction, and eight active ships are established. The individual hull names and registry commissioning sequence are extrapolations; the controlling class introduction band takes precedence over its interim row dates. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Descubierta supplied a sustained ocean-escort layer below the destroyers. Diesel propulsion and frigate displacement suited patrol, convoy, and anti-submarine work across the Atlantic routes supported by Spain's expanding base and auxiliary network.",
    registry:spanishEscortRoster([["Blas de Lezo","1965"],["Álvaro de Bazán","1966"],["Luis de Córdova","1967"],["Federico Gravina","1968"],["Cosme Damián Churruca","1969"],["Juan de Lángara","1970"],["Antonio Barceló","1971"],["Jorge Juan","1972"]]),
    design:"Each ship displaced 3,500 tonnes at full load and used diesel propulsion. The ocean-patrol and anti-submarine role is fixed; sonar, weapons, helicopter or flight-deck arrangements, speed, endurance, dimensions, and crew are not.",
    role:"The class escorted merchant and naval auxiliaries, searched Atlantic approaches, patrolled distant routes, and contributed to coordinated anti-submarine barriers with aircraft, submarines, and other escorts.",
    systemTitle:"Ocean anti-submarine warfare",system:"Anti-submarine work depended on contact sharing among ships, patrol aircraft, shore stations, and helicopters where available. The class's exact sensors and embarked-aircraft arrangements remain unsettled.",
    service:"The working names honor admirals, navigators, officers, and naval figures. The class remained in front-line service as the newer Santa María missile frigates entered the fleet.",
    transitionTitle:"Santa María development",transition:"The gas-turbine <a href='santa-maria-class-frigate.html'>Santa María class</a> added a later long-range missile-escort generation. Both eight-ship classes remained active, giving Spain sixteen frigates.",
    status:"All eight registered ships were active. Individual readiness, assignments, and patrol records remain open.",
    related:[...spanishEscortRelated,{href:"santa-maria-class-frigate.html",kicker:"Successor generation",label:"Santa María Class"},{href:"delfin-class-submarine.html",kicker:"Undersea environment",label:"Delfín Class"}],
    facts:[["Type","Ocean-patrol and ASW frigate"],["Ships built","8"],["Introduction","1965–1973"],["Full load","3,500 t"],["Propulsion","Diesel"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"],["Construction","Spain"]]
  }),

  "santa-maria-class-frigate": spanishEscortArticle({
    title:"Santa María-class frigate",type:"Long-range missile frigate",period:"1977–1985",
    lead:"The Santa María class was an eight-ship Spanish long-range missile-frigate class introduced during the 1977–1985 program band. All eight 4,800-tonne gas-turbine ships remained active in 1985 and served as the Armada Española's later frigate generation.",
    canon:"The eight-ship total, 1977–1985 introduction band, 4,800-tonne full-load displacement, gas-turbine propulsion, long-range Latin missile-frigate role, Spanish construction, and eight active ships are established. The individual hull names and registry commissioning sequence are extrapolations; the controlling class introduction band takes precedence over its interim row dates. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, endurance, refits, deployments, and detailed service histories remain open.",
    development:"Santa María followed the diesel Descubierta class and applied the later Latin missile, data, and machinery environment to a larger long-range Spanish frigate.",
    registry:spanishEscortRoster([["Pedro Menéndez de Avilés","1977"],["Andrés de Urdaneta","1978"],["Juan Sebastián Elcano","1979"],["Gonzalo Fernández de Córdoba","1980"],["María Pita","1981"],["Agustina de Aragón","1982"],["Bernardo de Gálvez","1983"],["Miguel de Cervantes","1984"]]),
    design:"Each ship displaced 4,800 tonnes at full load and used gas turbines. The registered description fixes a long-range Latin missile-frigate role but not missile type or count, guns, sensors, aviation, speed, range, dimensions, or crew.",
    role:"The ships escorted carriers, cruisers, amphibious groups, convoys, and replenishment formations. Long-range patrol and guided-weapon duties extended the fleet screen beyond the Mediterranean-oriented assumptions of some allied designs.",
    systemTitle:"Latin missile integration",system:"The class operated within common Latin interfaces for tactical data, guided weapons, replenishment, repair, rescue, and aviation support. Those standards did not create a supranational fleet or remove Spanish command.",
    service:"The registered names draw from navigators, commanders, soldiers, and national figures. Specific cruises, combat incidents, squadron organization, and refit histories remain open.",
    transitionTitle:"Frigate force",transition:"Eight Santa María and eight <a href='descubierta-class-frigate.html'>Descubierta</a> ships made up Spain's fixed sixteen-frigate active force in 1985.",
    status:"All eight registered ships were active. Individual readiness and deployment status are not fixed.",
    related:[...spanishEscortRelated,{href:"descubierta-class-frigate.html",kicker:"Earlier generation",label:"Descubierta Class"},{href:"bazan-class-destroyer.html",kicker:"Fleet screen",label:"Bazán Class"},{href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Long-range missile frigate"],["Ships built","8"],["Introduction","1977–1985"],["Full load","4,800 t"],["Propulsion","Gas turbines"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"],["Construction","Spain"]]
  }),

  "delfin-class-submarine": spanishEscortArticle({
    title:"Delfín-class submarine",type:"Conventional attack submarine",period:"1962–1985",
    lead:"The Delfín class was the earlier of two working registered Spanish conventional-submarine classes in 1985. Four 1,900-tonne submerged diesel-electric boats—<em>Delfín</em>, <em>Galerna</em>, <em>Cachalote</em>, and <em>Marsopa</em>—were assigned to the ocean-attack role.",
    canon:"Spain's total of eight active conventional submarines is established. The four-boat Delfín division, names, 1962–1967 commissioning sequence, 1,900-tonne submerged displacement, diesel-electric propulsion, and ocean-attack role are registered working extrapolations rather than explicit class-level canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Delfín at the beginning of Spain's postwar conventional-submarine line. It supplied an undersea patrol and attack arm while the National Maritime Program expanded Cartagena's submarine-building and support capacity.",
    registry:spanishEscortRoster([["Delfín","1962"],["Galerna","1963"],["Cachalote","1965"],["Marsopa","1967"]]),
    design:"The working design displaces 1,900 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, range, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats patrolled ocean approaches, observed shipping routes, trained surface anti-submarine forces, and threatened hostile combatants and logistics within the limits of conventional propulsion.",
    systemTitle:"Conventional undersea operations",system:"Shore intelligence, patrol aircraft, escorts, fixed sensors, tenders, and dispersed bases supported search and interception. Batteries, crew endurance, weapons, and access governed patrol duration more directly than in the nuclear force.",
    service:"The four animal and sea-weather names are working registry assignments. Individual exercises, patrol areas, incidents, and refits are not established.",
    transitionTitle:"Galerna development",transition:"The larger working <a href='galerna-class-submarine.html'>Galerna class</a> followed from 1973. Four boats of each class account for Spain's fixed eight active conventional submarines.",
    status:"All four registered boats were active within the established eight-SSK total. Individual readiness and patrol status remain open.",
    related:[...spanishEscortRelated,{href:"galerna-class-submarine.html",kicker:"Later conventional class",label:"Galerna Class"},{href:"isaac-peral-class-ssn.html",kicker:"Nuclear branch",label:"Isaac Peral Class"},{href:"descubierta-class-frigate.html",kicker:"ASW counterpart",label:"Descubierta Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1962–1967 · working"],["Submerged displacement","1,900 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4"],["Class detail status","Registered extrapolation"],["Fixed wider total","8 Spanish SSKs"]]
  }),

  "galerna-class-submarine": spanishEscortArticle({
    title:"Galerna-class submarine",type:"Conventional attack submarine",period:"1973–1985",
    lead:"The Galerna class was the later of two working registered Spanish conventional-submarine classes in 1985. Four 2,700-tonne submerged diesel-electric boats—<em>Tiburón</em>, <em>Ballena</em>, <em>Orca</em>, and <em>Barracuda</em>—were assigned to long-range conventional attack.",
    canon:"Spain's total of eight active conventional submarines is established. The four-boat Galerna division, names, 1973–1979 commissioning sequence, 2,700-tonne submerged displacement, diesel-electric propulsion, and long-range conventional-attack role are registered working extrapolations rather than explicit class-level canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The working registry makes Galerna the larger and later conventional counterpart to Delfín. Its assigned long-range role complemented nuclear boats without requiring nuclear machinery for every Atlantic undersea mission.",
    registry:spanishEscortRoster([["Tiburón","1973"],["Ballena","1975"],["Orca","1977"],["Barracuda","1979"]]),
    design:"The working design displaces 2,700 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, range, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats conducted conventional attack, reconnaissance, barrier patrol, and fleet-support missions along Spain's Atlantic routes and approaches.",
    systemTitle:"Long-range conventional attack",system:"The working role implies greater oceanic reach than the earlier class, but no exact range or endurance is fixed. Tenders, ports, intelligence, patrol aircraft, and communications remained part of the operating system.",
    service:"The four marine-animal names are working registry assignments. Individual bases, patrols, exercises, refits, and incidents remain unsettled.",
    transitionTitle:"Relationship to Delfín",transition:"Four Galerna and four <a href='delfin-class-submarine.html'>Delfín</a> boats make up the established eight-SSK total. Three Isaac Peral SSNs and one Numancia SSGN supplied the separate nuclear branch.",
    status:"All four registered boats were active within the established eight-SSK total. Individual readiness and patrol status remain open.",
    related:[...spanishEscortRelated,{href:"delfin-class-submarine.html",kicker:"Earlier conventional class",label:"Delfín Class"},{href:"isaac-peral-class-ssn.html",kicker:"Nuclear branch",label:"Isaac Peral Class"},{href:"numancia-class-ssgn.html",kicker:"Missile branch",label:"Numancia Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1973–1979 · working"],["Submerged displacement","2,700 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4"],["Class detail status","Registered extrapolation"],["Fixed wider total","8 Spanish SSKs"]]
  })
});
