window.deepArticles = window.deepArticles || {};

const italianSupportArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Regia Marina · ${config.type} · ${config.period}`,
  infoboxKicker:"Italian naval support lineage",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Regia Marina","Italian warships","Naval history","Military technology"]
});

const italianSupportRelated = [
  {href:"regia-marina-postwar.html",kicker:"Parent service",label:"Regia Marina"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"},
  {href:"italy.html",kicker:"Sovereign state",label:"Kingdom of Italy"}
];

const italianSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const regiaSupportOverview = window.deepArticles["regia-marina-postwar"];
if (regiaSupportOverview) {
  regiaSupportOverview.canon = "Italy's 1947 inheritance, postwar class totals, controlling introduction bands, registered class characteristics, 102-active-ship total, Mediterranean concentration, and common Latin interfaces are established. Individual hull names vary between explicit canon and registered extrapolation as stated in the class articles. Fleet commands, exact bases and deployments, readiness, budgets, builders by hull, aircraft models, detailed weapons and sensors beyond the register, refits, and most service histories remain open.";
  const littoralSection = regiaSupportOverview.sections.find(section => section.id === "littoral");
  if (littoralSection) {
    littoralSection.html = littoralSection.html
      .replace("Albatros corvettes", "<a href='albatros-class-corvette.html'>Albatros corvettes</a>")
      .replace("Freccia missile boats", "<a href='freccia-class-missile-boat.html'>Freccia missile boats</a>")
      .replace("Ten major amphibious ships", "<a href='san-marco-san-giorgio-amphibious-ships.html'>Ten major amphibious ships</a>")
      .replace("Gaeta mine-countermeasure vessels", "<a href='gaeta-class-mine-countermeasure-vessel.html'>Gaeta mine-countermeasure vessels</a>")
      .replace("twelve major auxiliaries", "<a href='italian-fleet-auxiliaries.html'>twelve major auxiliaries</a>");
  }
  regiaSupportOverview.related = [
    {href:"albatros-class-corvette.html",kicker:"Corvette branch",label:"Albatros Class"},
    {href:"freccia-class-missile-boat.html",kicker:"Fast-attack branch",label:"Freccia Class"},
    {href:"san-marco-san-giorgio-amphibious-ships.html",kicker:"Amphibious fleet",label:"San Marco / San Giorgio Lineage"},
    {href:"gaeta-class-mine-countermeasure-vessel.html",kicker:"Mine warfare",label:"Gaeta Class"},
    {href:"italian-fleet-auxiliaries.html",kicker:"Fleet sustainment",label:"Italian Fleet Auxiliaries"},
    ...regiaSupportOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "albatros-class-corvette": italianSupportArticle({
    title:"Albatros-class corvette",type:"Corvette",period:"1970–1985",
    lead:"The Albatros class comprised eight active Italian corvettes in the fixed 1985 fleet balance. The asset registry combines them with the ten Freccia missile boats in one eighteen-ship working lineage. It provisionally assigns the first eight hulls the names <em>Ravenna</em> through <em>Gaeta</em> and commissioning years from 1970 to 1976.",
    canon:"The Albatros designation, eight-active-ship total, corvette category, Italian construction, and place within Italy's fixed eighteen corvettes and missile craft are established. The eight-hull assignment, names, 1970–1976 commissioning sequence, 650-tonne full-load displacement, and mixed diesel-or-gas-turbine machinery are working extrapolations derived from the combined Albatros/Freccia registry rather than separately fixed class canon. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The controlling fleet reference separates eight Albatros corvettes from ten Freccia missile boats. The asset registry stores all eighteen under a combined Albatros/Freccia heading and does not independently mark the class boundary.</p>"},
      {id:"registry",title:"Working registered ships",html:italianSupportRoster([["Ravenna","1970"],["Rimini","1970"],["Ancona","1971"],["Bari","1972"],["Brindisi","1973"],["Catania","1974"],["Crotone","1975"],["Gaeta","1976"]])},
      {id:"design",title:"Working design",html:"<p>The combined registry assigns 650 tonnes full load and diesel or gas-turbine propulsion to the eighteen-ship group. It does not resolve which machinery belongs to Albatros or establish class-specific weapons, sensors, speed, dimensions, or crew.</p>"},
      {id:"role",title:"Corvette role",html:"<p>Albatros ships supplied coastal patrol, escort, surveillance, and local surface and anti-submarine work within Italy's closely based Mediterranean system.</p>"},
      {id:"bases",title:"Operating system",html:"<p>Italian and imperial ports, shore aircraft, coastal sensors, mine forces, and larger escorts supported short-range operations. Exact stations and squadrons remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working hull names are Italian coastal and port cities. The assignment is provisional pending a separately controlled class roster.</p>"},
      {id:"freccia",title:"Relationship to Freccia",html:"<p>Ten <a href='freccia-class-missile-boat.html'>Freccia-class missile boats</a> complete the fixed eighteen-ship category. The working split places the later ten registry hulls in Freccia.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Eight Albatros corvettes were active. Individual readiness and the working hull assignments remain open to revision.</p>"}
    ],
    related:[...italianSupportRelated,{href:"freccia-class-missile-boat.html",kicker:"Paired working lineage",label:"Freccia Class"},{href:"gaeta-class-mine-countermeasure-vessel.html",kicker:"Littoral partner",label:"Gaeta Class"}],
    facts:[["Type","Corvette"],["Active, 1985","8 · fixed"],["Wider category","18 corvettes and missile craft"],["Working years","1970–1976"],["Working full load","650 t"],["Working propulsion","Diesel or gas turbine"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "freccia-class-missile-boat": italianSupportArticle({
    title:"Freccia-class missile boat",type:"Fast missile craft",period:"1977–1985",
    lead:"The Freccia class comprised ten active Italian missile boats in the fixed 1985 fleet balance. The asset registry combines them with the eight Albatros corvettes in one eighteen-ship working lineage. It provisionally assigns the later ten hulls the names <em>Livorno</em> through <em>Augusta</em> and commissioning years from 1977 to 1985.",
    canon:"The Freccia designation, ten-active-ship total, missile-boat category, Italian construction, and place within Italy's fixed eighteen corvettes and missile craft are established. The ten-hull assignment, names, 1977–1985 commissioning sequence, 650-tonne full-load displacement, and mixed diesel-or-gas-turbine machinery are working extrapolations derived from the combined Albatros/Freccia registry rather than separately fixed class canon. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The controlling reference lists ten Freccia missile boats. The combined registry does not identify a technical break between its corvette and missile-craft portions.</p>"},
      {id:"registry",title:"Working registered ships",html:italianSupportRoster([["Livorno","1977"],["Messina","1978"],["Ortona","1978"],["Pescara","1979"],["Savona","1980"],["Taranto","1981"],["Trapani","1982"],["Viareggio","1983"],["Monfalcone","1984"],["Augusta","1985"]])},
      {id:"design",title:"Working design",html:"<p>The combined register assigns 650 tonnes full load and diesel or gas-turbine propulsion to the eighteen-ship group. Freccia-specific missile count, gun armament, sensors, speed, range, dimensions, and complement remain open.</p>"},
      {id:"attack",title:"Missile attack",html:"<p>The boats used coastal geography, speed, dispersed ports, reconnaissance, and external targeting to add surface-strike salvos to the Mediterranean fleet.</p>"},
      {id:"operations",title:"Operations",html:"<p>Likely tasks within the fixed role included interception, coastal defense, convoy protection, and concentration with larger surface groups. Individual missions remain unsettled.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names continue the combined lineage's coastal-city practice. The class assignment is provisional.</p>"},
      {id:"albatros",title:"Relationship to Albatros",html:"<p>Eight <a href='albatros-class-corvette.html'>Albatros-class corvettes</a> complete the fixed eighteen-ship category. The working split assigns the earlier eight registry hulls to Albatros.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Ten Freccia missile boats were active. Individual readiness and the working hull assignments remain open to revision.</p>"}
    ],
    related:[...italianSupportRelated,{href:"albatros-class-corvette.html",kicker:"Paired working lineage",label:"Albatros Class"},{href:"lupo-class-frigate.html",kicker:"Larger missile escort",label:"Lupo Class"}],
    facts:[["Type","Fast missile craft"],["Active, 1985","10 · fixed"],["Wider category","18 corvettes and missile craft"],["Working years","1977–1985"],["Working full load","650 t"],["Working propulsion","Diesel or gas turbine"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "san-marco-san-giorgio-amphibious-ships": italianSupportArticle({
    title:"San Marco / San Giorgio amphibious ship lineage",type:"Major amphibious ships",period:"1970–1985",
    lead:"The San Marco / San Giorgio lineage was the working registry grouping for Italy's ten active major amphibious ships in 1985. The register assigns them Italian regional names, 12,000-tonne full-load displacement, mixed diesel or gas-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Italy's ten-active-major-amphibious-ship total and use of regional names are established. The San Marco/San Giorgio combined designation, individual names, 1970–1984 commissioning sequence, 12,000-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. The division into subclasses, dimensions, speed, troop, vehicle, aviation and landing-craft capacities, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The asset registry uses a combined San Marco/San Giorgio heading for all ten ships. It does not establish how many belong to either named subclass or what design changes distinguish them.</p>"},
      {id:"registry",title:"Working registered ships",html:italianSupportRoster([["Sicilia","1970"],["Sardegna","1971"],["Calabria","1973"],["Puglia","1974"],["Liguria","1976"],["Toscana","1978"],["Lazio","1979"],["Campania","1981"],["Veneto","1982"],["Emilia-Romagna","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 12,000 tonnes full load and diesel or gas-turbine propulsion across the group. Troop capacity, vehicle decks, docks, landing craft, helicopters, weapons, dimensions, and complement are not fixed.</p>"},
      {id:"role",title:"Amphibious role",html:"<p>The ships moved troops, vehicles, engineers, stores, and landing elements within the Mediterranean, Red Sea, and adjoining imperial waters.</p>"},
      {id:"support",title:"Fleet support",html:"<p>Amphibious operations required escorts, mine clearance, aviation, naval gunfire, medical capacity, port services, and replenishment. The ten ships supplied the major-hull portion of that system.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Italian regions. The designation and hull allocation remain subject to later class-level canon.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common fittings and procedures allowed Italian amphibious ships to receive fuel, repair, aviation, rescue, and escort support from allied Latin fleets.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All ten major amphibious ships were active. Individual readiness and deployment are open.</p>"}
    ],
    related:[...italianSupportRelated,{href:"gaeta-class-mine-countermeasure-vessel.html",kicker:"Approach clearance",label:"Gaeta Class"},{href:"italian-fleet-auxiliaries.html",kicker:"Sustainment",label:"Italian Fleet Auxiliaries"}],
    facts:[["Type","Major amphibious ship"],["Ships","10 · fixed"],["Working introduction","1970–1984"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Italian regions"],["Active, 1985","10"],["Class detail status","Registered extrapolation"]]
  }),

  "gaeta-class-mine-countermeasure-vessel": italianSupportArticle({
    title:"Gaeta-class mine-countermeasure vessel",type:"Mine warfare",period:"1970–1985",
    lead:"The Gaeta class was the working registry lineage for Italy's twelve active mine-countermeasure vessels in 1985. The 850-tonne ships carried island names and entered the working register between 1970 and 1984.",
    canon:"Italy's twelve-active-mine-warfare-vessel total and island naming practice are established. The Gaeta-class designation, individual hull names, 1970–1984 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Dimensions, speed, hull materials, sweep and hunting systems, mine-disposal craft, sensors, weapons, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working class supplied mine hunting, sweeping, route survey, and clearance for a fleet operating through narrow straits, crowded ports, island passages, Suez, and the Red Sea.</p>"},
      {id:"registry",title:"Working registered ships",html:italianSupportRoster([["Capraia","1970"],["Elba","1971"],["Giglio","1972"],["Gorgona","1974"],["Ischia","1975"],["Lampedusa","1976"],["Lipari","1978"],["Pantelleria","1979"],["Ponza","1980"],["Procida","1982"],["Stromboli","1983"],["Ustica","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 850 tonnes full load and diesel or gas-turbine propulsion. It does not establish hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, or complement.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and approach channels, surveyed routes, marked safe water, and supported amphibious and convoy movements.</p>"},
      {id:"geography",title:"Operating geography",html:"<p>Italian bases and controlled islands created numerous narrow approaches where mines could interrupt military and commercial movement. The class also supported routes through Suez and the Red Sea.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Italian island names, consistent with the national mine-warfare naming rule.</p>"},
      {id:"support",title:"Amphibious support",html:"<p>Mine clearance preceded landing ships and protected follow-on supply routes. Gaeta vessels therefore operated closely with the San Marco/San Giorgio group and local patrol forces.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twelve registered ships were active. Readiness, stations, and equipment blocks remain open.</p>"}
    ],
    related:[...italianSupportRelated,{href:"san-marco-san-giorgio-amphibious-ships.html",kicker:"Supported force",label:"San Marco / San Giorgio Lineage"},{href:"albatros-class-corvette.html",kicker:"Littoral escort",label:"Albatros Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Ships","12 · fixed"],["Working introduction","1970–1984"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Italian islands"],["Active, 1985","12"],["Class detail status","Registered extrapolation"]]
  }),

  "italian-fleet-auxiliaries": italianSupportArticle({
    title:"Italian fleet auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"The Italian major-auxiliary force comprised twelve active ships in 1985. The working registry assigns them river and mountain names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and commissioning years from 1970 to 1984. Their individual auxiliary specializations remain open.",
    canon:"Italy's twelve-active-major-auxiliary total and river-and-mountain naming practice are established. The individual hull names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations. The division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts twelve major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:italianSupportRoster([["Po","1970"],["Adige","1971"],["Arno","1972"],["Piave","1974"],["Tevere","1975"],["Adda","1976"],["Brenta","1978"],["Isonzo","1979"],["Tagliamento","1980"],["Etna","1982"],["Gran Sasso","1983"],["Monte Rosa","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support allowed combatants to remain at sea beyond daily access to shore bases.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported repair, workshops, submarine and small-craft tending, salvage, and mobile maintenance. Hull-by-hull assignments are not established.</p>"},
      {id:"names",title:"Naming",html:"<p>Nine working names are rivers; Etna, Gran Sasso, and Monte Rosa are mountains. All remain extrapolated registry hull names.</p>"},
      {id:"operations",title:"Operations",html:"<p>The ships supported Italian forces from the central Mediterranean through Suez and the Red Sea and could service mixed Latin formations under common interface rules.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twelve major auxiliaries were active. Individual readiness, role, and deployment are open.</p>"}
    ],
    related:[...italianSupportRelated,{href:"san-marco-san-giorgio-amphibious-ships.html",kicker:"Supported force",label:"San Marco / San Giorgio Lineage"},{href:"augusto-class-carrier.html",kicker:"Replenished carrier force",label:"Augusto Class"}],
    facts:[["Category","Major fleet auxiliaries"],["Ships","12 · fixed"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming rule","Rivers and mountains"],["Active, 1985","12"],["Hull-detail status","Registered extrapolation"]]
  })
});
