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
  occitanOverview.canon = "The Marine Occitane's technical role, class totals, introduction bands, displacements, standard capabilities, 56-active-ship total, Latin interfaces, naming practices, and category totals are established. Toulouse, Aquitaine, and Provence are explicit hull names; later escort and submarine names are registered extrapolations. Fleet commands, bases, deployments, readiness, budgets, detailed weapons and sensors beyond the register, builders by hull, refits, and most individual service histories remain open.";
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
    lead:"The Toulouse class was a two-ship Occitan missile-cruiser class comprising <em>Toulouse</em> and <em>Aquitaine</em>. Commissioned in 1971 and 1975, the 16,000-tonne steam-turbine ships carried ninety-six vertical-launch cells, precursor phased-array radar, and two helicopters. Both remained active in 1985.",
    canon:"The two ships and names, 1971 and 1975 commissioning years, 16,000-tonne full-load displacement, steam-turbine propulsion, ninety-six VLS cells, precursor phased-array radar, two helicopters, data-fusion missile-cruiser role, Occitan construction, and two active ships are established. The controlling 1975 date for Aquitaine supersedes the asset registry's interim 1973 row. Dimensions, speed, machinery arrangement, VLS allocation, other weapons and sensors, helicopter types, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class concentrated Occitania's work in radar, combat computers, guidance, electronic warfare, and tactical-data integration in a large surface combatant. Toulouse entered service before the mature Latin common-interface system; Aquitaine followed during its expansion.</p>"},
      {id:"ships",title:"Ships",html:occitanRoster([["Toulouse","1971"],["Aquitaine","1975"]],"Commissioned")},
      {id:"design",title:"Design",html:"<p>Each ship displaced 16,000 tonnes at full load and used steam turbines. The class carried ninety-six vertical-launch cells, precursor phased-array radar, and two helicopters. Dimensions, speed, range, machinery arrangement, and complement remain open.</p>"},
      {id:"vls",title:"Vertical-launch system",html:"<p>The ninety-six cells supported fleet air defense and other guided-weapon missions. Missile types, allocation, reload arrangements, and fire-control channels are not fixed.</p>"},
      {id:"radar",title:"Radar and data fusion",html:"<p>The precursor phased array supplied the principal sensor for a data-fusion combat system. It combined shipboard tracks with information received from aircraft, escorts, shore stations, and allied units.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters supported anti-submarine search, reconnaissance, liaison, rescue, and targeting. Aircraft types and routine mission allocation remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The cruisers provided air-defense and command capacity for Occitan and mixed Latin formations in the western Mediterranean and Atlantic approaches. Specific deployments are not established.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Toulouse and Aquitaine were active. Individual readiness and assignment are open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"provence-aviation-cruiser.html",kicker:"Aviation component",label:"Provence"},{href:"aigle-class-destroyer.html",kicker:"Escort generation",label:"Aigle Class"}],
    facts:[["Type","Data-fusion missile cruiser"],["Ships","Toulouse · Aquitaine"],["Commissioned","1971 · 1975"],["Full load","16,000 t"],["Propulsion","Steam turbines"],["Vertical-launch cells","96"],["Aviation","2 helicopters"],["Active, 1985","2"]]
  }),

  "provence-aviation-cruiser": occitanNavalClassArticle({
    title:"Provence aviation cruiser",type:"Aviation cruiser",period:"1978–1985",
    lead:"<em>Provence</em> was a 22,000-tonne Occitan steam-turbine aviation cruiser commissioned in 1978. Its standard air group comprised ten vertical-takeoff fighters and ten helicopters, supplemented by command drones. Comparative fleet registers counted the ship as a light carrier.",
    canon:"The single ship and name, 1978 commissioning, 22,000-tonne full-load displacement, steam-turbine propulsion, ten VTOL fighters, ten helicopters, command drones, VTOL, anti-submarine, and amphibious-aviation roles, light-carrier classification in comparative totals, Occitan construction, and active status are established. Dimensions, speed, machinery arrangement, aircraft and drone models, weapons, sensors, crew, builder, landing-force capacity, refits, deployments, and detailed service history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Occitania built Provence as a compact aviation and command ship rather than a full Spanish- or Italian-scale fleet carrier. It applied domestic electronics and aviation integration to a smaller hull.</p>"},
      {id:"ship",title:"Ship",html:occitanRoster([["Provence","1978"]],"Commissioned")},
      {id:"design",title:"Design",html:"<p>The ship displaced 22,000 tonnes at full load and used steam turbines. The registered twenty-aircraft group divided evenly between VTOL fighters and helicopters. Command drones formed an additional unmanned component.</p>"},
      {id:"fighters",title:"VTOL fighters",html:"<p>Ten vertical-takeoff fighters supplied local air defense and attack. Aircraft type, weapons, sortie rate, and deck operating cycle remain open.</p>"},
      {id:"helicopters",title:"Helicopters",html:"<p>Ten helicopters supported anti-submarine warfare, transport, reconnaissance, rescue, and amphibious aviation. The normal mix is not fixed.</p>"},
      {id:"drones",title:"Command drones",html:"<p>Command drones extended surveillance and communications and provided data to the ship's combat and aviation staffs. Number, airframe, endurance, and control method remain open.</p>"},
      {id:"classification",title:"Classification",html:"<p>The Marine Occitane called Provence an aviation cruiser. The comparative Latin fleet register counted it as a light carrier, separating it from the two Toulouse missile cruisers.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Provence was active and accounted for Occitania's sole light-carrier category ship.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"toulouse-class-cruiser.html",kicker:"Missile-cruiser branch",label:"Toulouse Class"},{href:"aigle-class-destroyer.html",kicker:"Fleet screen",label:"Aigle Class"}],
    facts:[["Type","Aviation cruiser · counted as light carrier"],["Ship","Provence"],["Commissioned","1978"],["Full load","22,000 t"],["Propulsion","Steam turbines"],["VTOL fighters","10"],["Helicopters","10"],["Additional aviation","Command drones"],["Active, 1985","1"]]
  }),

  "aigle-class-destroyer": occitanNavalClassArticle({
    title:"Aigle-class destroyer",type:"Advanced VLS destroyer",period:"1977–1985",
    lead:"The Aigle class was a six-ship Occitan advanced destroyer class introduced during the 1977–1985 program band. The 6,500-tonne gas-turbine ships combined vertical launch, advanced radar and missiles, towed sonar, and a helicopter. All six were active in 1985.",
    canon:"The six-ship total, 1977–1985 introduction band, 6,500-tonne full-load displacement, gas-turbine propulsion, vertical launch, advanced radar and missiles, towed sonar, one-helicopter capability, Occitan construction, and six active ships are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, machinery arrangement, cell count, weapons and sensor models, helicopter type, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Aigle translated Occitan work in electronics, missiles, sonar, and data links into the principal surface escort of the mature fleet.</p>"},
      {id:"registry",title:"Registered ships",html:occitanRoster([["Tarba","1977"],["Albi","1978"],["Montalban","1980"],["Rodés","1981"],["Caors","1983"],["Agen","1984"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 6,500 tonnes at full load and used gas turbines. Vertical launch, advanced radar and missiles, towed sonar, and a helicopter are fixed class features.</p>"},
      {id:"air-defense",title:"Air defense",html:"<p>The vertical-launch and radar system supported fleet air defense around cruisers, Provence, amphibious groups, and replenishment ships. Cell count and missile allocation remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>Towed sonar and an embarked helicopter extended detection beyond the hull. The ships exchanged contacts with frigates, aircraft, submarines, and shore stations.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names use Occitan forms of cities: Tarba, Albi, Montalban, Rodés, Caors, and Agen.</p>"},
      {id:"force",title:"Destroyer force",html:"<p>The six ships made up Occitania's complete active destroyer category in 1985. Earlier Languedoc destroyers were decommissioned or held in reserve and are outside the active total.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six registered ships were active. Individual readiness and assignments remain open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"toulouse-class-cruiser.html",kicker:"Command and air defense",label:"Toulouse Class"},{href:"narbonnaise-class-frigate.html",kicker:"ASW screen",label:"Narbonnaise Class"},{href:"provence-aviation-cruiser.html",kicker:"Protected aviation ship",label:"Provence"}],
    facts:[["Type","Advanced VLS destroyer"],["Ships built","6"],["Introduction","1977–1985"],["Full load","6,500 t"],["Propulsion","Gas turbines"],["ASW fit","Towed sonar · helicopter"],["Active, 1985","6"],["Hull-name status","Registered extrapolation"]]
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
    lead:"The Narbonnaise class was an eight-ship Occitan advanced anti-submarine frigate class introduced during the 1977–1985 program band. All eight 4,600-tonne gas-turbine ships remained active in 1985. Quiet machinery and anti-submarine integration defined the class role.",
    canon:"The eight-ship total, 1977–1985 introduction band, 4,600-tonne full-load displacement, gas-turbine propulsion, advanced quiet anti-submarine role, Occitan construction, and eight active ships are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, machinery and quieting arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Narbonnaise followed the Massalia missile and helicopter escorts and concentrated on quiet operation, sonar integration, and coordinated submarine search.</p>"},
      {id:"registry",title:"Registered ships",html:occitanRoster([["Beatritz de Dia","1977"],["Pèire Cardenal","1978"],["Jean Jaurès","1979"],["Jean Moulin","1980"],["Pierre-Paul Riquet","1981"],["Clément Ader","1982"],["Antoine de Saint-Exupéry","1983"],["Henri Fabre","1984"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,600 tonnes at full load and used gas turbines. The register establishes advanced quiet anti-submarine work without fixing sonar types, towed arrays, weapons, helicopters, speed, dimensions, or crew.</p>"},
      {id:"quieting",title:"Quieting",html:"<p>Machinery isolation and acoustic control reduced self-noise during search. The exact mechanical and hull measures remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>The frigates exchanged contacts with Aigle destroyers, aircraft, shore stations, and Occitan submarines. Search, classification, localization, and attack could be distributed across the formation.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names range from medieval Occitan writers to political, resistance, engineering, aviation, and scientific figures.</p>"},
      {id:"force",title:"Frigate force",html:"<p>Eight Narbonnaise and four active <a href='massalia-class-frigate.html'>Massalia</a> ships supplied the twelve active frigates in the 1985 balance.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight registered ships were active. Individual readiness and assignments remain open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"massalia-class-frigate.html",kicker:"Earlier generation",label:"Massalia Class"},{href:"aigle-class-destroyer.html",kicker:"ASW command layer",label:"Aigle Class"},{href:"languedoc-class-submarine.html",kicker:"Training and threat counterpart",label:"Languedoc Class"}],
    facts:[["Type","Advanced quiet ASW frigate"],["Ships built","8"],["Introduction","1977–1985"],["Full load","4,600 t"],["Propulsion","Gas turbines"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"],["Construction","Occitania"]]
  }),

  "languedoc-class-submarine": occitanNavalClassArticle({
    title:"Languedoc-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The Languedoc class was a six-boat Occitan conventional attack-submarine class introduced during the 1975–1983 program band. All six 2,700-tonne submerged diesel-electric boats remained active in 1985 and served in the quiet attack role.",
    canon:"The six-boat total, 1975–1983 introduction band, 2,700-tonne submerged displacement, diesel-electric propulsion, quiet conventional-attack role, Occitan construction, and six active boats are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, batteries and machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied a conventional counterpart to Occitania's compact nuclear-submarine program. It emphasized quiet regional and Atlantic-approach operations.</p>"},
      {id:"registry",title:"Registered boats",html:occitanRoster([["Daurada","1975"],["Ton","1976"],["Bonítol","1978"],["Mèro","1979"],["Dofin","1981"],["Cachalòt","1982"]])},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 2,700 tonnes submerged and used diesel-electric propulsion. Quiet-attack capability is fixed; weapons, sensors, batteries, speed, range, dimensions, and complement are open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The boats conducted attack patrols, surveillance, reconnaissance, exercises, and barrier work in the western Mediterranean and Atlantic approaches.</p>"},
      {id:"quieting",title:"Quiet operation",html:"<p>Battery propulsion allowed low-noise submerged movement. Specific propellers, mounts, coatings, and acoustic standards remain unsettled.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are Occitan names for marine animals and fish: Daurada, Ton, Bonítol, Mèro, Dofin, and Cachalòt.</p>"},
      {id:"nuclear",title:"Nuclear branch",html:"<p>Two <a href='cevennes-class-ssn.html'>Cévennes-class</a> attack submarines and one <a href='aigrette-class-ssgn.html'>Aigrette-class</a> guided-missile and trials boat formed the nuclear branch.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six registered boats were active. Individual readiness and patrol status remain open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"cevennes-class-ssn.html",kicker:"Nuclear attack branch",label:"Cévennes Class"},{href:"aigrette-class-ssgn.html",kicker:"Missile and trials branch",label:"Aigrette Class"},{href:"narbonnaise-class-frigate.html",kicker:"ASW counterpart",label:"Narbonnaise Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats built","6"],["Introduction","1975–1983"],["Submerged displacement","2,700 t"],["Propulsion","Diesel-electric"],["Role","Quiet conventional attack"],["Active, 1985","6"],["Hull-name status","Registered extrapolation"]]
  }),

  "cevennes-class-ssn": occitanNavalClassArticle({
    title:"Cévennes-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1978–1985",
    lead:"The Cévennes class was a two-boat Occitan nuclear attack-submarine class introduced in 1978 and 1982. Both 5,400-tonne submerged boats remained active in 1985 for Mediterranean and Atlantic attack duties. The working registry names were <em>Henri Becquerel</em> and <em>Paul Sabatier</em>.",
    canon:"The two-boat total, 1978 and 1982 commissioning years, 5,400-tonne submerged displacement, nuclear propulsion, Mediterranean and Atlantic attack role, Occitan construction, and two active boats are established. Henri Becquerel and Paul Sabatier are registered extrapolated names; the controlling 1982 date for the second boat supersedes the registry's interim 1980 row. Dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class applied Occitania's compact-reactor and systems-integration work to a small national nuclear attack force. Latin technical cooperation supplied compatible industrial and support interfaces.</p>"},
      {id:"registry",title:"Registered boats",html:occitanRoster([["Henri Becquerel","1978"],["Paul Sabatier","1982"]],"Controlling commission year")},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 5,400 tonnes submerged and used nuclear propulsion. Reactor type, power, speed, weapons, sonar, quieting, dimensions, endurance, and complement remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class hunted surface ships and submarines, screened Occitan formations, and conducted reconnaissance in Mediterranean and Atlantic waters.</p>"},
      {id:"support",title:"Support",html:"<p>Nuclear operations required specialized reactor, repair, weapons, training, and safety infrastructure in addition to ordinary submarine support.</p>"},
      {id:"names",title:"Naming",html:"<p>The two working names honor scientists associated with radiation and Toulouse. They remain extrapolated hull detail rather than explicit class canon.</p>"},
      {id:"branches",title:"Other submarine branches",html:"<p>The <a href='languedoc-class-submarine.html'>Languedoc class</a> supplied six conventional boats. The single <a href='aigrette-class-ssgn.html'>Aigrette-class</a> submarine added guided-missile and electronics-trials duties.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both registered boats were active. Individual readiness and patrol status remain open.</p>"}
    ],
    related:[...occitanNavalRelated,{href:"languedoc-class-submarine.html",kicker:"Conventional branch",label:"Languedoc Class"},{href:"aigrette-class-ssgn.html",kicker:"Missile and trials branch",label:"Aigrette Class"},{href:"technology.html",kicker:"Technical context",label:"Technology"}],
    facts:[["Type","Nuclear attack submarine"],["Boats built","2"],["Introduction","1978 · 1982"],["Submerged displacement","5,400 t"],["Propulsion","Nuclear"],["Operating areas","Mediterranean · Atlantic"],["Active, 1985","2"],["Hull-name status","Registered extrapolation"]]
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
