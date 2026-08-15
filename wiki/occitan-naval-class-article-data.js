window.deepArticles = window.deepArticles || {};

const occitanNavalClassArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Marine Occitane · ${config.type} · ${config.period}`,
  infoboxKicker:"Occitan warship class",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Marine Occitane","Occitan warships","Naval history","Military technology"]
});

const occitanNavalRelated = [
  {href:"marine-occitane.html",kicker:"Parent service",label:"Marine Occitane"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"},
  {href:"occitania.html",kicker:"Sovereign state",label:"Occitania"}
];

const occitanRoster = (ships, yearLabel="Registry year") => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>${yearLabel}</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const occitanOverview = window.deepArticles["marine-occitane"];
if (occitanOverview) {
  const classSection = occitanOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Toulouse missile cruiser", "<a href='toulouse-class-cruiser.html'>Toulouse missile cruiser</a>")
      .replace("Provence aviation cruiser", "<a href='provence-aviation-cruiser.html'>Provence aviation cruiser</a>")
      .replace("Aigle destroyer", "<a href='aigle-class-destroyer.html'>Aigle destroyer</a>")
      .replace("Massalia frigate", "<a href='massalia-class-frigate.html'>Massalia frigate</a>")
      .replace("Narbonnaise frigate", "<a href='narbonnaise-class-frigate.html'>Narbonnaise frigate</a>")
      .replace("Languedoc", "<a href='languedoc-class-submarine.html'>Languedoc</a>")
      .replace("Cévennes", "<a href='cevennes-class-ssn.html'>Cévennes</a>")
      .replace("Aigrette", "<a href='aigrette-class-ssgn.html'>Aigrette</a>");
  }
  const cruiserSection = occitanOverview.sections.find(section => section.id === "cruisers");
  if (cruiserSection) {
    cruiserSection.html = cruiserSection.html
      .replace("<em>Provence</em> aviation cruiser", "<a href='provence-aviation-cruiser.html'><em>Provence</em> aviation cruiser</a>")
      .replace("<em>Toulouse</em> and <em>Aquitaine</em>", "<a href='toulouse-class-cruiser.html'><em>Toulouse</em> and <em>Aquitaine</em></a>");
  }
  const escortSection = occitanOverview.sections.find(section => section.id === "escorts");
  if (escortSection) {
    escortSection.html = escortSection.html
      .replace("Aigle-class destroyers", "<a href='aigle-class-destroyer.html'>Aigle-class destroyers</a>")
      .replace("Massalia frigates", "<a href='massalia-class-frigate.html'>Massalia frigates</a>")
      .replace("Narbonnaise frigates", "<a href='narbonnaise-class-frigate.html'>Narbonnaise frigates</a>");
  }
  const submarineSection = occitanOverview.sections.find(section => section.id === "submarines");
  if (submarineSection) {
    submarineSection.html = submarineSection.html
      .replace("Languedoc conventional submarines", "<a href='languedoc-class-submarine.html'>Languedoc conventional submarines</a>")
      .replace("Cévennes attack class", "<a href='cevennes-class-ssn.html'>Cévennes attack class</a>")
      .replace("Aigrette class", "<a href='aigrette-class-ssgn.html'>Aigrette class</a>");
  }
  occitanOverview.related = [
    {href:"toulouse-class-cruiser.html",kicker:"Data-fusion cruiser",label:"Toulouse Class"},
    {href:"provence-aviation-cruiser.html",kicker:"Aviation cruiser",label:"Provence"},
    {href:"aigle-class-destroyer.html",kicker:"Advanced fleet escort",label:"Aigle Class"},
    {href:"massalia-class-frigate.html",kicker:"Missile and helicopter escort",label:"Massalia Class"},
    {href:"narbonnaise-class-frigate.html",kicker:"Quiet ASW frigate",label:"Narbonnaise Class"},
    {href:"languedoc-class-submarine.html",kicker:"Conventional branch",label:"Languedoc Class"},
    {href:"cevennes-class-ssn.html",kicker:"Nuclear attack branch",label:"Cévennes Class"},
    {href:"aigrette-class-ssgn.html",kicker:"Missile and trials branch",label:"Aigrette Class"},
    ...occitanOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "toulouse-class-cruiser": occitanNavalClassArticle({
    title:"Toulouse-class cruiser",type:"Data-fusion missile cruiser",period:"1971–1985",
    lead:"The working Toulouse register describes an Occitan data-fusion missile-cruiser program built around advanced radar, combat computers, guided weapons, and shipboard aviation. Its two hulls, names, dates, 16,000-tonne reference displacement, machinery, ninety-six-cell fit, and 1985 allocation remain provisional.",
    canon:"Occitania's missile-cruiser and data-fusion program, the Toulouse design family, 16,000-tonne reference displacement, ninety-six-cell reference fit, precursor phased-array radar, two-helicopter capability, and technical role are retained. The two-ship total, Toulouse and Aquitaine hull assignments, 1971 and 1975 dates, steam-turbine propulsion, Occitan construction, and two-active 1985 allocation remain provisional. Dimensions, speed, machinery arrangement, VLS allocation, other weapons and sensors, helicopter types, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class concentrated Occitania's work in radar, combat computers, guidance, electronic warfare, and tactical-data integration in a large surface combatant. Toulouse entered service before the mature Latin common-interface system; Aquitaine followed during its expansion.</p>"},
      {id:"ships",title:"Ships",html:occitanRoster([["Toulouse","1971","Active · provisional"],["Aquitaine","1975","Active · provisional"]],"Working year")},
      {id:"design",title:"Design",html:"<p>The reference design assigns 16,000 tonnes full load, ninety-six vertical-launch cells, precursor phased-array radar, and two helicopters. The working register assigns steam turbines. Dimensions, speed, range, machinery arrangement, and complement remain open.</p>"},
      {id:"vls",title:"Vertical-launch system",html:"<p>The ninety-six cells supported fleet air defense and other guided-weapon missions. Missile types, allocation, reload arrangements, and fire-control channels are not fixed.</p>"},
      {id:"radar",title:"Radar and data fusion",html:"<p>The precursor phased array supplied the principal sensor for a data-fusion combat system. It combined shipboard tracks with information received from aircraft, escorts, shore stations, and allied units.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters supported anti-submarine search, reconnaissance, liaison, rescue, and targeting. Aircraft types and routine mission allocation remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The cruisers provided air-defense and command capacity for Occitan and mixed Latin formations in the western Mediterranean and Atlantic approaches. Specific deployments are not established.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r3d7h writer=g kind=revision created=2026-08-15T15:46:00-06:00 --><p>The current register assigns <em>Toulouse</em> and <em>Aquitaine</em> to active service. The hull count, names, dates, construction, machinery, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"provence-aviation-cruiser.html",kicker:"Aviation component",label:"Provence"},{href:"aigle-class-destroyer.html",kicker:"Escort generation",label:"Aigle Class"}],
    facts:[["Type","Data-fusion missile cruiser"],["Working ships","Toulouse · Aquitaine"],["Working years","1971 · 1975"],["Reference full load","16,000 t"],["Working propulsion","Steam turbines"],["Reference VLS fit","96 cells"],["Reference aviation","2 helicopters"],["Active, 1985","2 provisional"]]
  }),

  "provence-aviation-cruiser": occitanNavalClassArticle({
    title:"Provence aviation cruiser",type:"Aviation cruiser",period:"1978–1985",
    lead:"Occitania commissioned the aviation cruiser <em>Provence</em> in 1978 and expanded its naval-aviation and technical-integration role. The naval reference assigns the ship 22,000 tonnes full load, steam-turbine propulsion, ten VTOL fighters, ten helicopters, and command drones; those specifications remain reference-register detail.",
    canon:"The named <em>Provence</em>, its 1978 commissioning, aviation-cruiser program, naval-aviation and technical-integration role, and presence in Occitania's compact 1985 fleet are established. The 22,000-tonne reference displacement, steam-turbine propulsion, ten-fighter and ten-helicopter air group, command drones, detailed VTOL, anti-submarine and amphibious roles, light-carrier comparison, Occitan construction, and readiness remain reference or provisional detail. Dimensions, speed, machinery arrangement, aircraft and drone models, weapons, sensors, crew, builder, landing-force capacity, refits, deployments, and detailed service history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Occitania built Provence as a compact aviation and command ship rather than a full Spanish- or Italian-scale fleet carrier. It applied domestic electronics and aviation integration to a smaller hull.</p>"},
      {id:"ship",title:"Ship",html:occitanRoster([["Provence","1978","Active"]],"Commissioned")},
      {id:"design",title:"Design",html:"<p>The reference design assigns 22,000 tonnes full load, steam-turbine propulsion, ten VTOL fighters, ten helicopters, and an additional command-drone component.</p>"},
      {id:"fighters",title:"VTOL fighters",html:"<p>Ten vertical-takeoff fighters supplied local air defense and attack. Aircraft type, weapons, sortie rate, and deck operating cycle remain open.</p>"},
      {id:"helicopters",title:"Helicopters",html:"<p>Ten helicopters supported anti-submarine warfare, transport, reconnaissance, rescue, and amphibious aviation. The normal mix is not fixed.</p>"},
      {id:"drones",title:"Command drones",html:"<p>Command drones extended surveillance and communications and provided data to the ship's combat and aviation staffs. Number, airframe, endurance, and control method remain open.</p>"},
      {id:"classification",title:"Classification",html:"<p>The Marine Occitane called Provence an aviation cruiser. The comparative Latin fleet register counted it as a light carrier, separating it from the two Toulouse missile cruisers.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-s5f9j writer=g kind=revision created=2026-08-15T15:47:00-06:00 --><p><em>Provence</em> remained part of Occitania's compact 1985 fleet after entering service in 1978. Its exact readiness, detailed air group, specifications, and comparative light-carrier allocation remain reference-register detail.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"toulouse-class-cruiser.html",kicker:"Missile-cruiser branch",label:"Toulouse Class"},{href:"aigle-class-destroyer.html",kicker:"Fleet screen",label:"Aigle Class"}],
    facts:[["Type","Aviation cruiser"],["Ship","Provence"],["Commissioned","1978"],["Reference full load","22,000 t"],["Working propulsion","Steam turbines"],["Reference VTOL group","10 fighters"],["Reference helicopters","10"],["Additional aviation","Command drones · reference"],["1985 status","In compact fleet"]]
  }),

  "aigle-class-destroyer": occitanNavalClassArticle({
    title:"Aigle-class destroyer",type:"Advanced VLS destroyer",period:"1977–1985",
    lead:"The working Aigle register describes an Occitan advanced destroyer program in the 1977–1985 reference band. The reference design combines vertical launch, advanced radar and missiles, towed sonar, and a helicopter; the six-hull total, names, machinery, construction, and 1985 allocation remain provisional.",
    canon:"Occitania's advanced destroyer and fleet-escort program, the Aigle design family, 1977–1985 reference band, 6,500-tonne reference displacement, vertical launch, advanced radar and missiles, towed sonar, and one-helicopter capability are retained. The six-ship total, gas-turbine propulsion, Occitan construction, individual names and dates, and six-active 1985 allocation remain provisional. Dimensions, speed, machinery arrangement, cell count, weapons and sensor models, helicopter type, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Aigle translated Occitan work in electronics, missiles, sonar, and data links into the principal surface escort of the mature fleet.</p>"},
      {id:"registry",title:"Registered ships",html:occitanRoster([["Tarba","1977","Active · provisional"],["Albi","1978","Active · provisional"],["Montalban","1980","Active · provisional"],["Rodés","1981","Active · provisional"],["Caors","1983","Active · provisional"],["Agen","1984","Active · provisional"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 6,500 tonnes full load, vertical launch, advanced radar and missiles, towed sonar, and a helicopter. The working register assigns gas turbines.</p>"},
      {id:"air-defense",title:"Air defense",html:"<p>The vertical-launch and radar system supported fleet air defense around cruisers, Provence, amphibious groups, and replenishment ships. Cell count and missile allocation remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>Towed sonar and an embarked helicopter extended detection beyond the hull. The ships exchanged contacts with frigates, aircraft, submarines, and shore stations.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names use Occitan forms of cities: Tarba, Albi, Montalban, Rodés, Caors, and Agen.</p>"},
      {id:"force",title:"Destroyer force",html:"<p>The working register assigns six Aigle ships to Occitania's active destroyer category in 1985. That total and the exclusion of earlier hulls remain provisional.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-t7h3l writer=g kind=revision created=2026-08-15T15:48:00-06:00 --><p>The current register assigns six named ships to active service. The total, roster, dates, construction, propulsion, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"toulouse-class-cruiser.html",kicker:"Command and air defense",label:"Toulouse Class"},{href:"narbonnaise-class-frigate.html",kicker:"ASW screen",label:"Narbonnaise Class"},{href:"provence-aviation-cruiser.html",kicker:"Protected aviation ship",label:"Provence"}],
    facts:[["Type","Advanced VLS destroyer"],["Working ships","6 provisional"],["Reference band","1977–1985"],["Reference full load","6,500 t"],["Working propulsion","Gas turbines"],["Reference ASW fit","Towed sonar · helicopter"],["Active, 1985","6 provisional"],["Hull-name status","Working register"]]
  }),

  "massalia-class-frigate": occitanNavalClassArticle({
    title:"Massalia-class frigate",type:"Missile and helicopter escort",period:"1968–1985",
    lead:"The Massalia class was an eight-ship Occitan missile and helicopter frigate class introduced during the 1968–1976 program band. The 3,800-tonne diesel ships formed the first mature escort generation of the postwar Marine Occitane. Four remained active in 1985 and four had been decommissioned.",
    canon:"The eight-ship total, 1968–1976 introduction band, 3,800-tonne full-load displacement, diesel propulsion, missile and helicopter-escort role, Occitan construction, and four active ships are established. The individual hull names, registry year sequence, and identification of the four decommissioned hulls are extrapolated registry detail; the controlling introduction band supersedes the interim row dates. Dimensions, speed, weapons, sensors, helicopter count and types, crew, builders, refits, deployments, decommissioning dates, and dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class joined guided weapons and shipboard aviation in an ocean-capable frigate as Occitania expanded its national electronics and systems industry.</p>"},
      {id:"registry",title:"Registered ships",html:occitanRoster([["Raimon de Miraval","1968","Decommissioned"],["Folquet de Marselha","1969","Decommissioned"],["Peire Vidal","1970","Decommissioned"],["Arnaut Daniel","1971","Decommissioned"],["Marcabrun","1972"],["Gaucelm Faidit","1973"],["Guiraut de Bornelh","1974"],["Azalaïs de Porcairagues","1975"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 3,800 tonnes at full load and used diesel propulsion. Missile and helicopter capability are established; exact armament, sensors, aviation arrangements, speed, range, and complement are open.</p>"},
      {id:"escort",title:"Escort service",html:"<p>The ships protected convoys, auxiliaries, cruisers, and amphibious groups and contributed to air, surface, and submarine defense.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Shipboard helicopters supported anti-submarine search, liaison, surveillance, and rescue. Number and type are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names honor troubadours and literary figures associated with Occitan culture.</p>"},
      {id:"replacement",title:"Narbonnaise class",html:"<p>The larger <a href='narbonnaise-class-frigate.html'>Narbonnaise class</a> followed from 1977. Four Massalia ships left service while four remained active beside all eight later frigates.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Marcabrun, Gaucelm Faidit, Guiraut de Bornelh, and Azalaïs de Porcairagues were active in the working register. The four earlier hulls were decommissioned.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"narbonnaise-class-frigate.html",kicker:"Successor generation",label:"Narbonnaise Class"},{href:"aigle-class-destroyer.html",kicker:"Fleet screen",label:"Aigle Class"}],
    facts:[["Type","Missile and helicopter frigate"],["Ships built","8"],["Introduction","1968–1976"],["Full load","3,800 t"],["Propulsion","Diesel"],["Active, 1985","4"],["Decommissioned by 1985","4 · working registry"],["Hull-name status","Registered extrapolation"]]
  }),

  "narbonnaise-class-frigate": occitanNavalClassArticle({
    title:"Narbonnaise-class frigate",type:"Quiet ASW frigate",period:"1977–1985",
    lead:"The working Narbonnaise register describes an Occitan advanced anti-submarine frigate program in the 1977–1985 reference band. Quiet machinery and anti-submarine integration define the retained role; the eight-hull total, names, machinery, construction, and 1985 allocation remain provisional.",
    canon:"Occitania's advanced quiet anti-submarine program, the Narbonnaise design family, 1977–1985 reference band, 4,600-tonne reference displacement, and integrated ASW role are retained. The eight-ship total, gas-turbine propulsion, Occitan construction, individual names and dates, and eight-active 1985 allocation remain provisional. Dimensions, speed, machinery and quieting arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Narbonnaise followed the Massalia missile and helicopter escorts and concentrated on quiet operation, sonar integration, and coordinated submarine search.</p>"},
      {id:"registry",title:"Registered ships",html:occitanRoster([["Beatritz de Dia","1977","Active · provisional"],["Pèire Cardenal","1978","Active · provisional"],["Jean Jaurès","1979","Active · provisional"],["Jean Moulin","1980","Active · provisional"],["Pierre-Paul Riquet","1981","Active · provisional"],["Clément Ader","1982","Active · provisional"],["Antoine de Saint-Exupéry","1983","Active · provisional"],["Henri Fabre","1984","Active · provisional"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 4,600 tonnes full load and advanced quiet anti-submarine work; the working register assigns gas turbines. Sonar types, towed arrays, weapons, helicopters, speed, dimensions, and crew remain open.</p>"},
      {id:"quieting",title:"Quieting",html:"<p>Machinery isolation and acoustic control reduced self-noise during search. The exact mechanical and hull measures remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>The frigates exchanged contacts with Aigle destroyers, aircraft, shore stations, and Occitan submarines. Search, classification, localization, and attack could be distributed across the formation.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names range from medieval Occitan writers to political, resistance, engineering, aviation, and scientific figures.</p>"},
      {id:"force",title:"Frigate force",html:"<p>The working register combines eight Narbonnaise ships with four active <a href='massalia-class-frigate.html'>Massalia</a> ships. That twelve-active-frigate allocation remains provisional.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-u9j5n writer=g kind=revision created=2026-08-15T15:49:00-06:00 --><p>The current register assigns eight named Narbonnaise ships to active service. The total, roster, dates, construction, propulsion, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"massalia-class-frigate.html",kicker:"Earlier generation",label:"Massalia Class"},{href:"aigle-class-destroyer.html",kicker:"ASW command layer",label:"Aigle Class"},{href:"languedoc-class-submarine.html",kicker:"Training and threat counterpart",label:"Languedoc Class"}],
    facts:[["Type","Advanced quiet ASW frigate"],["Working ships","8 provisional"],["Reference band","1977–1985"],["Reference full load","4,600 t"],["Working propulsion","Gas turbines"],["Active, 1985","8 provisional"],["Hull-name status","Working register"],["Construction","Provisional"]]
  }),

  "languedoc-class-submarine": occitanNavalClassArticle({
    title:"Languedoc-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The working Languedoc register describes an Occitan quiet conventional attack-submarine program in the 1975–1983 reference band. Its six-boat total, names, 2,700-tonne reference displacement, machinery, construction, and 1985 allocation remain provisional.",
    canon:"Occitania's conventional and quiet attack-submarine program, the Languedoc design family, 1975–1983 reference band, 2,700-tonne reference displacement, and quiet-attack role are retained. The six-boat total, diesel-electric propulsion, Occitan construction, individual names and dates, and six-active 1985 allocation remain provisional. Dimensions, speed, batteries and machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied a conventional counterpart to Occitania's compact nuclear-submarine program. It emphasized quiet regional and Atlantic-approach operations.</p>"},
      {id:"registry",title:"Registered boats",html:occitanRoster([["Daurada","1975","Active · provisional"],["Ton","1976","Active · provisional"],["Bonítol","1978","Active · provisional"],["Mèro","1979","Active · provisional"],["Dofin","1981","Active · provisional"],["Cachalòt","1982","Active · provisional"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 2,700 tonnes submerged and a quiet-attack role; the working register assigns diesel-electric propulsion. Weapons, sensors, batteries, speed, range, dimensions, and complement remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The boats conducted attack patrols, surveillance, reconnaissance, exercises, and barrier work in the western Mediterranean and Atlantic approaches.</p>"},
      {id:"quieting",title:"Quiet operation",html:"<p>Battery propulsion allowed low-noise submerged movement. Specific propellers, mounts, coatings, and acoustic standards remain unsettled.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are Occitan names for marine animals and fish: Daurada, Ton, Bonítol, Mèro, Dofin, and Cachalòt.</p>"},
      {id:"nuclear",title:"Nuclear branch",html:"<p>The working register assigns two <a href='cevennes-class-ssn.html'>Cévennes-class</a> attack submarines and one <a href='aigrette-class-ssgn.html'>Aigrette-class</a> guided-missile and trials boat to the nuclear branch. Those counts remain provisional; the Aigrette program and its 1984 entry are separately established.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-v2l7p writer=g kind=revision created=2026-08-15T15:50:00-06:00 --><p>The current register assigns six named Languedoc boats to active service. The total, roster, dates, construction, propulsion, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"cevennes-class-ssn.html",kicker:"Nuclear attack branch",label:"Cévennes Class"},{href:"aigrette-class-ssgn.html",kicker:"Missile and trials branch",label:"Aigrette Class"},{href:"narbonnaise-class-frigate.html",kicker:"ASW counterpart",label:"Narbonnaise Class"}],
    facts:[["Type","Conventional attack submarine"],["Working boats","6 provisional"],["Reference band","1975–1983"],["Reference displacement","2,700 t submerged"],["Working propulsion","Diesel-electric"],["Role","Quiet conventional attack"],["Active, 1985","6 provisional"],["Hull-name status","Working register"]]
  }),

  "cevennes-class-ssn": occitanNavalClassArticle({
    title:"Cévennes-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1978–1985",
    lead:"The working Cévennes register describes Occitania's compact nuclear attack-submarine program. Its two-boat total, Henri Becquerel and Paul Sabatier names, 1978 and 1982 dates, 5,400-tonne reference displacement, construction, and 1985 allocation remain provisional.",
    canon:"Occitania's compact-reactor and nuclear attack-submarine program, the Cévennes design family, 5,400-tonne reference displacement, and Mediterranean and Atlantic attack role are retained. The two-boat total, 1978 and 1982 dates, nuclear machinery detail, Occitan construction, Henri Becquerel and Paul Sabatier names, and two-active 1985 allocation remain provisional. Dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class applied Occitania's compact-reactor and systems-integration work to a small national nuclear attack force. Latin technical cooperation supplied compatible industrial and support interfaces.</p>"},
      {id:"registry",title:"Registered boats",html:occitanRoster([["Henri Becquerel","1978","Active · provisional"],["Paul Sabatier","1982","Active · provisional"]],"Working year")},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 5,400 tonnes submerged and nuclear propulsion. Reactor type, power, speed, weapons, sonar, quieting, dimensions, endurance, and complement remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class hunted surface ships and submarines, screened Occitan formations, and conducted reconnaissance in Mediterranean and Atlantic waters.</p>"},
      {id:"support",title:"Support",html:"<p>Nuclear operations required specialized reactor, repair, weapons, training, and safety infrastructure in addition to ordinary submarine support.</p>"},
      {id:"names",title:"Naming",html:"<p>The two working names honor scientists associated with radiation and Toulouse. They remain extrapolated hull detail rather than explicit class canon.</p>"},
      {id:"branches",title:"Other submarine branches",html:"<p>The working <a href='languedoc-class-submarine.html'>Languedoc</a> allocation supplies six conventional boats. The established <a href='aigrette-class-ssgn.html'>Aigrette</a> program added guided-missile and electronics-trials duties in 1984.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-w4n9r writer=g kind=revision created=2026-08-15T15:51:00-06:00 --><p>The current register assigns two named Cévennes boats to active service. The total, names, dates, construction, specifications, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...occitanNavalRelated,{href:"languedoc-class-submarine.html",kicker:"Conventional branch",label:"Languedoc Class"},{href:"aigrette-class-ssgn.html",kicker:"Missile and trials branch",label:"Aigrette Class"},{href:"technology.html",kicker:"Technical context",label:"Technology"}],
    facts:[["Type","Nuclear attack submarine"],["Working boats","2 provisional"],["Working years","1978 · 1982"],["Reference displacement","5,400 t submerged"],["Propulsion","Nuclear · reference"],["Operating areas","Mediterranean · Atlantic"],["Active, 1985","2 provisional"],["Hull-name status","Working register"]]
  }),

  "aigrette-class-ssgn": occitanNavalClassArticle({
    title:"Aigrette-class guided-missile submarine",type:"Nuclear guided-missile and trials submarine",period:"1984–1985",
    lead:"The Aigrette class was a one-boat Occitan nuclear guided-missile and electronics-trials submarine class. The 7,000-tonne submerged boat entered service in 1984 and remained active in 1985. The asset registry supplies the working hull name <em>Jean-François Champollion</em>.",
    canon:"The one-boat total, 1984 commissioning, 7,000-tonne submerged displacement, nuclear propulsion, guided-missile and electronics-trials roles, Occitan construction, and active status are established. Jean-François Champollion is a registered extrapolated hull name. Dimensions, speed, reactor and machinery design, missile type and count, launch arrangement, other weapons, sensors, trials equipment, crew, builder, refits, patrols, and detailed service history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the two Cévennes attack submarines and created a larger test platform for guided weapons, sensors, communications, and undersea electronics.</p>"},
      {id:"ship",title:"Registered ship",html:occitanRoster([["Jean-François Champollion","1984"]],"Commissioned")},
      {id:"design",title:"Registered design",html:"<p>The boat displaced 7,000 tonnes submerged and used nuclear propulsion. Missile count, launch arrangement, weapons, sensors, reactor, speed, dimensions, and complement remain open.</p>"},
      {id:"missiles",title:"Guided missiles",html:"<p>The submarine carried guided weapons for conventional missions. Nuclear warheads did not exist; target identification, navigation, accuracy, and conventional magazine effect governed strike planning.</p>"},
      {id:"trials",title:"Electronics trials",html:"<p>The boat tested undersea sensors, communications, combat-system components, and related equipment for Occitan and wider Latin programs. Specific trials and results remain open.</p>"},
      {id:"name",title:"Naming",html:"<p>Jean-François Champollion is the working registry name. It follows Occitan use of scientific and learned figures for advanced nuclear submarines.</p>"},
      {id:"relationship",title:"Relationship to Cévennes",html:"<p>Aigrette supplemented the <a href='cevennes-class-ssn.html'>Cévennes attack class</a>. The three nuclear boats served beside six conventional Languedoc submarines.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The sole registered boat was active. Its current trials load, readiness, and patrol status are open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"cevennes-class-ssn.html",kicker:"Attack branch",label:"Cévennes Class"},{href:"languedoc-class-submarine.html",kicker:"Conventional branch",label:"Languedoc Class"},{href:"nuclear-weapons-research.html",kicker:"Strategic constraint",label:"Nuclear-Weapons Research"}],
    facts:[["Type","Nuclear guided-missile submarine"],["Boats built","1"],["Registered boat","Jean-François Champollion · extrapolated"],["Commissioned","1984"],["Submerged displacement","7,000 t"],["Propulsion","Nuclear"],["Additional role","Electronics trials"],["Warhead doctrine","Conventional"],["Active, 1985","1"]]
  })
});
