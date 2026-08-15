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

const spanishEscortRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active · provisional"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

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
    lead:"The Almirante Cervera class was Spain's first postwar long-range missile-destroyer program, entering service from 1963. The naval reference gives the generation a 1963–1972 introduction band, 5,300-tonne reference displacement, and Atlantic missile-escort role; the eight-hull and six-active allocations remain provisional.",
    canon:"The Almirante Cervera program, first entries from 1963, Spanish construction, 1963–1972 introduction band, 5,300-tonne reference displacement, and Atlantic missile-escort role are supported. The eight-ship, six-active, and two-reserve allocations, individual names, registry dates, propulsion, dimensions, speed, machinery, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain working or open.",
    development:"The class joined guided weapons to the endurance and seakeeping required by Spain's Atlantic strategy. It entered service as the <a href='national-maritime-program.html'>National Maritime Program</a> moved from reconstructed yards and merchant tonnage into sustained major-combatant production.",
    registry:spanishEscortRoster([["Murcia","1963","Mobilization reserve · provisional"],["Palma","1964","Mobilization reserve · provisional"],["Bilbao","1965"],["Alicante","1966"],["Córdoba","1968"],["Valladolid","1969"],["Vigo","1970"],["Gijón","1971"]]),
    design:"The reference design displaces 5,300 tonnes at full load and serves as an Atlantic missile escort. Propulsion, launcher arrangement, missile and gun types, sensors, aviation facilities, speed, range, dimensions, and crew remain open.",
    role:"The ships screened carriers and cruisers, escorted convoys, protected ocean routes, and provided guided-weapon defense for formations operating beyond dense coastal air and naval cover.",
    systemTitle:"Atlantic escort system",system:"The destroyers depended on replenishment ships, patrol aircraft, shore communications, and Latin-compatible tactical interfaces. Their role connected the carrier fleet to routes through the Canaries, Azores, West Africa, Brazil, and the wider South Atlantic.",
    service:"The working registry gives the eight hulls Spanish city names. Specific squadrons, cruises, incidents, and modernization histories are not yet fixed.",
    transitionTitle:"Bazán development",transition:"The larger <a href='bazan-class-destroyer.html'>Bazán class</a> followed from 1976. The working register places six Almirante Cervera hulls in active service and two in reserve alongside the later destroyer generation.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-k2m6n writer=g kind=revision created=2026-08-15T15:15:00-06:00 -->The working register assigns six named hulls to active service and two to mobilization reserve. The roster, totals, and individual readiness remain provisional; only the program and its first entries from 1963 are directly reaffirmed.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"bazan-class-destroyer.html",kicker:"Successor generation",label:"Bazán Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"}],
    facts:[["Type","Atlantic missile destroyer"],["Program","Almirante Cervera"],["Introduction","from 1963; band to 1972"],["Reference full load","5,300 t"],["Ships built","8 · working"],["Active / reserve, 1985","6 / 2 · working"],["Propulsion","Open"],["Hull-name status","Registered extrapolation"]]
  }),

  "bazan-class-destroyer": spanishEscortArticle({
    title:"Bazán-class destroyer",type:"Carrier escort",period:"1976–1985",
    lead:"The Bazán class was Spain's mature 1970s carrier-escort destroyer program. The naval reference gives it a 1976–1984 introduction band, 6,800-tonne reference displacement, and 6,500-nautical-mile endurance; the exact eight-hull and eight-active allocations remain provisional.",
    canon:"The Bazán destroyer program, 1976–1984 introduction band, Spanish construction, 6,800-tonne reference displacement, carrier-escort role, and 6,500-nautical-mile endurance are supported. The eight-ship and eight-active allocations, individual names, registry dates, propulsion, dimensions, speed, machinery, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain working or open.",
    development:"Bazán was the mature long-range destroyer of Spain's carrier-centered fleet. Its program paired turbine responsiveness with the endurance required to keep station beside the Reina Isabel carriers across Atlantic operating areas.",
    registry:spanishEscortRoster([["A Coruña","1976"],["Granada","1977"],["Cádiz","1978"],["Cartagena","1979"],["Santander","1980"],["Burgos","1981"],["Salamanca","1982"],["Toledo","1983"]]),
    design:"The reference design displaces 6,800 tonnes at full load and has an endurance of 6,500 nautical miles. Propulsion, weapons, vertical-launch capacity, sensors, helicopter arrangements, speed, dimensions, and crew remain open.",
    role:"Bazán ships formed the close surface screen of Spanish carrier groups. They performed air, surface, and submarine defense, route protection, and command-support work appropriate to a large fleet escort.",
    systemTitle:"Carrier-group endurance",system:"The 6,500-nautical-mile figure allowed the class to remain useful along Spain's Atlantic lines without assuming continuous access to nearby bases. Tankers, stores ships, repair support, and aviation still determined actual deployment endurance.",
    service:"The registered ships carry Spanish city names. Common Latin data, weapon-support, replenishment, and aviation interfaces enabled mixed task groups while command and deployment authority remained Spanish.",
    transitionTitle:"Place in the destroyer force",transition:"Bazán supplemented rather than wholly replaced the <a href='almirante-cervera-class-destroyer.html'>Almirante Cervera class</a>. The working register allocates eight Bazán and six active older destroyers, but the combined total remains provisional.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-l4p8r writer=g kind=revision created=2026-08-15T15:16:00-06:00 -->The working register assigns eight named Bazán ships to active service. The hull count, roster, propulsion, and individual readiness remain provisional while the program and reference endurance are retained.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"almirante-cervera-class-destroyer.html",kicker:"Earlier generation",label:"Almirante Cervera Class"},{href:"reina-isabel-class-carrier.html",kicker:"Screened force",label:"Reina Isabel Class"},{href:"canarias-ii-class-cruiser.html",kicker:"Command escort",label:"Canarias II Class"}],
    facts:[["Type","Carrier-escort destroyer"],["Program","Bazán"],["Introduction","1976–1984"],["Reference full load","6,800 t"],["Endurance","6,500 nmi"],["Ships built / active","8 / 8 · working"],["Propulsion","Open"],["Hull-name status","Registered extrapolation"]]
  }),

  "descubierta-class-frigate": spanishEscortArticle({
    title:"Descubierta-class frigate",type:"Ocean patrol and ASW frigate",period:"1965–1985",
    lead:"Descubierta is the working class label for Spain's earlier postwar ocean-patrol and anti-submarine frigate generation. The naval reference gives it a 1965–1973 introduction band, 3,500-tonne reference displacement, and ocean-escort role; the eight-hull and eight-active allocations remain provisional.",
    canon:"Spain's 1965–1973 ocean-patrol and anti-submarine frigate generation, 3,500-tonne reference displacement, and Spanish construction are supported. Descubierta remains a working class label, while the eight-ship and eight-active allocations, names, registry dates, diesel propulsion, dimensions, speed, machinery, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain working or open.",
    development:"Descubierta supplied a sustained ocean-escort layer below the destroyers. Diesel propulsion and frigate displacement suited patrol, convoy, and anti-submarine work across the Atlantic routes supported by Spain's expanding base and auxiliary network.",
    registry:spanishEscortRoster([["Blas de Lezo","1965"],["Álvaro de Bazán","1966"],["Luis de Córdova","1967"],["Federico Gravina","1968"],["Cosme Damián Churruca","1969"],["Juan de Lángara","1970"],["Antonio Barceló","1971"],["Jorge Juan","1972"]]),
    design:"The reference design displaces 3,500 tonnes at full load and serves in ocean-patrol and anti-submarine work. Propulsion, sonar, weapons, helicopter or flight-deck arrangements, speed, endurance, dimensions, and crew remain open.",
    role:"The class escorted merchant and naval auxiliaries, searched Atlantic approaches, patrolled distant routes, and contributed to coordinated anti-submarine barriers with aircraft, submarines, and other escorts.",
    systemTitle:"Ocean anti-submarine warfare",system:"Anti-submarine work depended on contact sharing among ships, patrol aircraft, shore stations, and helicopters where available. The class's exact sensors and embarked-aircraft arrangements remain unsettled.",
    service:"The working names honor admirals, navigators, officers, and naval figures. The class remained in front-line service as the newer Santa María missile frigates entered the fleet.",
    transitionTitle:"Santa María development",transition:"The <a href='santa-maria-class-frigate.html'>Santa María class</a> added a later long-range missile-escort generation. The working register allocates eight ships to each family, but the resulting sixteen-frigate total remains provisional.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-m6s2v writer=g kind=revision created=2026-08-15T15:17:00-06:00 -->The working register assigns eight named Descubierta ships to active service. The class label, hull total, roster, propulsion, and individual readiness remain provisional.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"santa-maria-class-frigate.html",kicker:"Successor generation",label:"Santa María Class"},{href:"delfin-class-submarine.html",kicker:"Undersea environment",label:"Delfín Class"}],
    facts:[["Type","Ocean-patrol and ASW frigate"],["Class label","Descubierta · working"],["Introduction","1965–1973"],["Reference full load","3,500 t"],["Ships built / active","8 / 8 · working"],["Propulsion","Open"],["Hull-name status","Registered extrapolation"],["Construction","Spain"]]
  }),

  "santa-maria-class-frigate": spanishEscortArticle({
    title:"Santa María-class frigate",type:"Long-range missile frigate",period:"1977–1985",
    lead:"The Santa María class was Spain's later long-range missile-frigate program. The naval reference gives it a 1977–1985 introduction band, 4,800-tonne reference displacement, and Latin-compatible missile-escort role; the exact eight-hull and eight-active allocations remain provisional.",
    canon:"The Santa María frigate program, 1977–1985 introduction band, 4,800-tonne reference displacement, long-range Latin missile-escort role, and Spanish construction are supported. The eight-ship and eight-active allocations, individual names, registry dates, propulsion, dimensions, speed, machinery, weapons, sensors, aviation, crew, builders, endurance, refits, deployments, and detailed service histories remain working or open.",
    development:"Santa María followed the diesel Descubierta class and applied the later Latin missile, data, and machinery environment to a larger long-range Spanish frigate.",
    registry:spanishEscortRoster([["Pedro Menéndez de Avilés","1977"],["Andrés de Urdaneta","1978"],["Juan Sebastián Elcano","1979"],["Gonzalo Fernández de Córdoba","1980"],["María Pita","1981"],["Agustina de Aragón","1982"],["Bernardo de Gálvez","1983"],["Miguel de Cervantes","1984"]]),
    design:"The reference design displaces 4,800 tonnes at full load and serves as a long-range Latin-compatible missile frigate. Propulsion, missile type or count, guns, sensors, aviation, speed, range, dimensions, and crew remain open.",
    role:"The ships escorted carriers, cruisers, amphibious groups, convoys, and replenishment formations. Long-range patrol and guided-weapon duties extended the fleet screen beyond the Mediterranean-oriented assumptions of some allied designs.",
    systemTitle:"Latin missile integration",system:"The class operated within common Latin interfaces for tactical data, guided weapons, replenishment, repair, rescue, and aviation support. Those standards did not create a supranational fleet or remove Spanish command.",
    service:"The registered names draw from navigators, commanders, soldiers, and national figures. Specific cruises, combat incidents, squadron organization, and refit histories remain open.",
    transitionTitle:"Frigate force",transition:"The working register assigns eight Santa María and eight <a href='descubierta-class-frigate.html'>Descubierta</a> ships to the 1985 frigate force. Both class allocations and the sixteen-ship total remain provisional.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-n8w4x writer=g kind=revision created=2026-08-15T15:18:00-06:00 -->The working register assigns eight named Santa María ships to active service. The hull total, roster, propulsion, and individual readiness remain provisional while the supported program and role are retained.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"descubierta-class-frigate.html",kicker:"Earlier generation",label:"Descubierta Class"},{href:"bazan-class-destroyer.html",kicker:"Fleet screen",label:"Bazán Class"},{href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Long-range missile frigate"],["Program","Santa María"],["Introduction","1977–1985"],["Reference full load","4,800 t"],["Ships built / active","8 / 8 · working"],["Propulsion","Open"],["Hull-name status","Registered extrapolation"],["Construction","Spain"]]
  }),

  "delfin-class-submarine": spanishEscortArticle({
    title:"Delfín-class submarine",type:"Conventional attack submarine",period:"1962–1985",
    lead:"The Delfín class was the earlier of two working registered Spanish conventional-submarine classes in 1985. Four 1,900-tonne submerged diesel-electric boats—<em>Delfín</em>, <em>Galerna</em>, <em>Cachalote</em>, and <em>Marsopa</em>—were assigned to the ocean-attack role.",
    canon:"Spain maintains a conventional submarine branch alongside its nuclear program. The eight-active total, four-boat Delfín division, class label, names, 1962–1967 sequence, 1,900-tonne submerged displacement, diesel-electric propulsion, and ocean-attack role are working allocations rather than fixed class-level canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Delfín at the beginning of Spain's postwar conventional-submarine line. It supplied an undersea patrol and attack arm while the National Maritime Program expanded Cartagena's submarine-building and support capacity.",
    registry:spanishEscortRoster([["Delfín","1962"],["Galerna","1963"],["Cachalote","1965"],["Marsopa","1967"]]),
    design:"The working design displaces 1,900 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, range, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats patrolled ocean approaches, observed shipping routes, trained surface anti-submarine forces, and threatened hostile combatants and logistics within the limits of conventional propulsion.",
    systemTitle:"Conventional undersea operations",system:"Shore intelligence, patrol aircraft, escorts, fixed sensors, tenders, and dispersed bases supported search and interception. Batteries, crew endurance, weapons, and access governed patrol duration more directly than in the nuclear force.",
    service:"The four animal and sea-weather names are working registry assignments. Individual exercises, patrol areas, incidents, and refits are not established.",
    transitionTitle:"Galerna development",transition:"The larger working <a href='galerna-class-submarine.html'>Galerna class</a> followed from 1973. The register assigns four boats to each class within a provisional eight-SSK total.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-p3y7b writer=g kind=revision created=2026-08-15T15:19:00-06:00 -->The working register assigns four named Delfín boats to active service within a provisional eight-SSK total. The class division, roster, specifications, and individual readiness remain registry extrapolations.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"galerna-class-submarine.html",kicker:"Later conventional class",label:"Galerna Class"},{href:"isaac-peral-class-ssn.html",kicker:"Nuclear branch",label:"Isaac Peral Class"},{href:"descubierta-class-frigate.html",kicker:"ASW counterpart",label:"Descubierta Class"}],
    facts:[["Type","Conventional attack submarine"],["Class label","Delfín · working"],["Boats","4 · working register"],["Commissioning","1962–1967 · working"],["Submerged displacement","1,900 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4 · working"],["Wider allocation","8 Spanish SSKs · provisional"]]
  }),

  "galerna-class-submarine": spanishEscortArticle({
    title:"Galerna-class submarine",type:"Conventional attack submarine",period:"1973–1985",
    lead:"The Galerna class was the later of two working registered Spanish conventional-submarine classes in 1985. Four 2,700-tonne submerged diesel-electric boats—<em>Tiburón</em>, <em>Ballena</em>, <em>Orca</em>, and <em>Barracuda</em>—were assigned to long-range conventional attack.",
    canon:"Spain maintains a conventional submarine branch alongside its nuclear program. The eight-active total, four-boat Galerna division, class label, names, 1973–1979 sequence, 2,700-tonne submerged displacement, diesel-electric propulsion, and long-range attack role are working allocations rather than fixed class-level canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The working registry makes Galerna the larger and later conventional counterpart to Delfín. Its assigned long-range role complemented nuclear boats without requiring nuclear machinery for every Atlantic undersea mission.",
    registry:spanishEscortRoster([["Tiburón","1973"],["Ballena","1975"],["Orca","1977"],["Barracuda","1979"]]),
    design:"The working design displaces 2,700 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, range, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats conducted conventional attack, reconnaissance, barrier patrol, and fleet-support missions along Spain's Atlantic routes and approaches.",
    systemTitle:"Long-range conventional attack",system:"The working role implies greater oceanic reach than the earlier class, but no exact range or endurance is fixed. Tenders, ports, intelligence, patrol aircraft, and communications remained part of the operating system.",
    service:"The four marine-animal names are working registry assignments. Individual bases, patrols, exercises, refits, and incidents remain unsettled.",
    transitionTitle:"Relationship to Delfín",transition:"The working register assigns four Galerna and four <a href='delfin-class-submarine.html'>Delfín</a> boats to a provisional eight-SSK total. Its separate nuclear-branch allocations also remain subject to hull reconstruction.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-q5a9d writer=g kind=revision created=2026-08-15T15:20:00-06:00 -->The working register assigns four named Galerna boats to active service within a provisional eight-SSK total. The class division, roster, specifications, and individual readiness remain registry extrapolations.<!-- altwwii-writer-block:end -->",
    related:[...spanishEscortRelated,{href:"delfin-class-submarine.html",kicker:"Earlier conventional class",label:"Delfín Class"},{href:"isaac-peral-class-ssn.html",kicker:"Nuclear branch",label:"Isaac Peral Class"},{href:"numancia-class-ssgn.html",kicker:"Missile branch",label:"Numancia Class"}],
    facts:[["Type","Conventional attack submarine"],["Class label","Galerna · working"],["Boats","4 · working register"],["Commissioning","1973–1979 · working"],["Submerged displacement","2,700 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4 · working"],["Wider allocation","8 Spanish SSKs · provisional"]]
  })
});
