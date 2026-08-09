window.deepArticles = window.deepArticles || {};

const spanishSupportArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Armada Española · ${config.type} · ${config.period}`,
  infoboxKicker:"Spanish naval support lineage",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Armada Española","Spanish warships","Naval history","Military technology"]
});

const spanishSupportRelated = [
  {href:"armada-espanola-postwar.html",kicker:"Parent service",label:"Armada Española"},
  {href:"national-maritime-program.html",kicker:"Industrial foundation",label:"National Maritime Program"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"spain.html",kicker:"Sovereign state",label:"Spain"}
];

const spanishSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const spanishSupportOverview = window.deepArticles["armada-espanola-postwar"];
if (spanishSupportOverview) {
  spanishSupportOverview.canon = "The National Maritime Program, Atlantic routes, fixed class and category totals, controlling introduction bands, registered capabilities, 100-active-ship total, Italian parity, Latin interfaces, 8,000-nautical-mile Reina Isabel range, and emphasis on freeboard, fuel, workshops, accommodation, replenishment, and aviation endurance are established. Individual hull names vary between explicit canon and registered extrapolation as stated in the class articles. Detailed fleet commands, base assignments, readiness, budgets, builders by hull, air-group models, weapons and sensors beyond the register, refits, and most individual service histories remain open.";
  const supportSection = spanishSupportOverview.sections.find(section => section.id === "support");
  if (supportSection) {
    supportSection.html = supportSection.html
      .replace("Atrevida ocean corvettes", "<a href='atrevida-class-corvette.html'>Atrevida ocean corvettes</a>")
      .replace("Lazaga missile craft", "<a href='lazaga-class-missile-craft.html'>Lazaga missile craft</a>")
      .replace("Ten major amphibious ships", "<a href='aragon-castilla-galicia-amphibious-ships.html'>Ten major amphibious ships</a>")
      .replace("Segura mine-countermeasure vessels", "<a href='segura-class-mine-countermeasure-vessel.html'>Segura mine-countermeasure vessels</a>")
      .replace("fourteen Atlantic auxiliaries", "<a href='spanish-atlantic-auxiliaries.html'>fourteen Atlantic auxiliaries</a>");
  }
  spanishSupportOverview.related = [
    {href:"atrevida-class-corvette.html",kicker:"Ocean corvette branch",label:"Atrevida Class"},
    {href:"lazaga-class-missile-craft.html",kicker:"Fast-attack branch",label:"Lazaga Class"},
    {href:"aragon-castilla-galicia-amphibious-ships.html",kicker:"Amphibious fleet",label:"Aragón / Castilla / Galicia Lineage"},
    {href:"segura-class-mine-countermeasure-vessel.html",kicker:"Mine warfare",label:"Segura Class"},
    {href:"spanish-atlantic-auxiliaries.html",kicker:"Fleet sustainment",label:"Spanish Atlantic Auxiliaries"},
    ...spanishSupportOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "atrevida-class-corvette": spanishSupportArticle({
    title:"Atrevida-class corvette",type:"Ocean corvette",period:"1970–1985",
    lead:"The Atrevida class comprised eight active Spanish ocean corvettes in the fixed 1985 fleet balance. The asset registry combines them with eight Lazaga missile craft in one sixteen-ship working lineage. It provisionally assigns the first eight hulls cape names and commissioning years from 1970 to 1977.",
    canon:"The Atrevida designation, eight-active-ship total, ocean-corvette role, Spanish construction, and place within Spain's fixed sixteen corvettes and missile craft are established. The eight-hull assignment, individual names, 1970–1977 commissioning sequence, 650-tonne full-load displacement, and diesel-or-gas-turbine machinery are working extrapolations derived from the combined Atrevida/Lazaga registry. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The controlling reference separates eight Atrevida ocean corvettes from eight Lazaga missile craft. The asset registry stores all sixteen under a combined Atrevida/Lazaga heading.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Cabo Finisterre","1970"],["Cabo Ortegal","1971"],["Cabo Peñas","1972"],["Cabo de Gata","1973"],["Cabo de Palos","1974"],["Cabo Trafalgar","1975"],["Cabo de la Nao","1976"],["Cabo Machichaco","1977"]])},
      {id:"design",title:"Working design",html:"<p>The combined registry assigns 650 tonnes full load and diesel or gas-turbine propulsion. It does not resolve Atrevida-specific machinery, weapons, sensors, speed, range, dimensions, or complement.</p>"},
      {id:"role",title:"Ocean-corvette role",html:"<p>The ships patrolled Atlantic approaches, escorted local shipping, supported surveillance, and supplemented frigates along routes between Iberia, the Canaries, West Africa, and oceanic bases.</p>"},
      {id:"system",title:"Operating system",html:"<p>Patrol aircraft, coastal sensors, auxiliaries, ports, and larger escorts extended the utility of small hulls beyond independent shipboard detection.</p>"},
      {id:"names",title:"Naming",html:"<p>The working hull names are Spanish capes, following the fixed corvette naming rule. Their class assignment remains provisional.</p>"},
      {id:"lazaga",title:"Relationship to Lazaga",html:"<p>Eight <a href='lazaga-class-missile-craft.html'>Lazaga missile craft</a> complete the fixed sixteen-ship category. The working split assigns the later eight registry hulls to Lazaga.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Eight Atrevida corvettes were active. Individual readiness and the working hull assignments remain open to revision.</p>"}
    ],
    related:[...spanishSupportRelated,{href:"lazaga-class-missile-craft.html",kicker:"Paired working lineage",label:"Lazaga Class"},{href:"descubierta-class-frigate.html",kicker:"Larger patrol escort",label:"Descubierta Class"}],
    facts:[["Type","Ocean corvette"],["Active, 1985","8 · fixed"],["Wider category","16 corvettes and missile craft"],["Working years","1970–1977"],["Working full load","650 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Spanish capes"],["Hull-name status","Registered extrapolation"]]
  }),

  "lazaga-class-missile-craft": spanishSupportArticle({
    title:"Lazaga-class missile craft",type:"Fast missile craft",period:"1978–1985",
    lead:"The Lazaga class comprised eight active Spanish missile craft in the fixed 1985 fleet balance. The combined Atrevida/Lazaga asset register provisionally assigns the later eight hulls wind names and commissioning years from 1978 to 1985.",
    canon:"The Lazaga designation, eight-active-ship total, missile-craft category, Spanish construction, and place within Spain's fixed sixteen corvettes and missile craft are established. The eight-hull assignment, individual names, 1978–1985 commissioning sequence, 650-tonne full-load displacement, and diesel-or-gas-turbine machinery are working extrapolations derived from the combined Atrevida/Lazaga registry. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The fixed fleet reference lists eight Lazaga missile craft. The combined working registry does not independently mark the boundary or technical differences between the two lineages.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Levante","1978"],["Poniente","1979"],["Tramontana","1980"],["Gregal","1981"],["Siroco","1982"],["Ábrego","1983"],["Mistral","1984"],["Alisio","1985"]])},
      {id:"design",title:"Working design",html:"<p>The combined registry assigns 650 tonnes full load and diesel or gas-turbine propulsion. Missile count, gun armament, sensors, speed, range, dimensions, and complement are not fixed.</p>"},
      {id:"attack",title:"Missile attack",html:"<p>The craft used coastal and island bases, speed, reconnaissance, and external targeting to add anti-ship salvos to Spanish formations.</p>"},
      {id:"routes",title:"Operating areas",html:"<p>Likely operating areas within the class role included Gibraltar, Iberian approaches, the Canaries, Morocco, and West African routes. Individual stations remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are winds. Their assignment to Lazaga accords with Spanish small-combatant naming practice but remains registry extrapolation.</p>"},
      {id:"atrevida",title:"Relationship to Atrevida",html:"<p>Eight <a href='atrevida-class-corvette.html'>Atrevida ocean corvettes</a> complete the fixed sixteen-ship category.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Eight Lazaga missile craft were active. Individual readiness and the working hull assignments remain open to revision.</p>"}
    ],
    related:[...spanishSupportRelated,{href:"atrevida-class-corvette.html",kicker:"Paired working lineage",label:"Atrevida Class"},{href:"santa-maria-class-frigate.html",kicker:"Larger missile escort",label:"Santa María Class"}],
    facts:[["Type","Fast missile craft"],["Active, 1985","8 · fixed"],["Wider category","16 corvettes and missile craft"],["Working years","1978–1985"],["Working full load","650 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Winds"],["Hull-name status","Registered extrapolation"]]
  }),

  "aragon-castilla-galicia-amphibious-ships": spanishSupportArticle({
    title:"Aragón / Castilla / Galicia amphibious ship lineage",type:"Major amphibious ships",period:"1970–1985",
    lead:"The Aragón / Castilla / Galicia lineage was the working registry grouping for Spain's ten active major amphibious ships in 1985. It assigns the ships regional names, 12,000-tonne full-load displacement, mixed diesel or gas-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Spain's ten-active-major-amphibious-ship total and use of provinces or historic regions as names are established. The Aragón/Castilla/Galicia combined designation, individual hull names, 1970–1984 commissioning sequence, 12,000-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Division into subclasses, dimensions, speed, troop, vehicle, aviation and landing-craft capacities, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The registry combines three names in one amphibious lineage and does not assign hulls to distinct subclasses or define their technical differences.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Asturias","1970"],["Cantabria","1971"],["Navarra","1973"],["La Rioja","1974"],["Aragón","1976"],["Castilla","1978"],["Galicia","1979"],["Extremadura","1981"],["Andalucía","1982"],["Cataluña","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 12,000 tonnes full load and diesel or gas-turbine propulsion across the group. Troop capacity, vehicle decks, docks, landing craft, helicopters, weapons, dimensions, and complement remain open.</p>"},
      {id:"role",title:"Amphibious role",html:"<p>The ships moved troops, vehicles, engineers, stores, and landing elements along Atlantic, Mediterranean, African, and American routes.</p>"},
      {id:"support",title:"Fleet support",html:"<p>Amphibious operations required escorts, aviation, mine clearance, naval gunfire, medical capacity, and replenishment. The ten ships supplied the major hulls below the Numancia assault carrier.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Spanish regions and historic territories, following the established amphibious naming rule.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common fittings and procedures allowed allied fuel, repair, aviation, rescue, and escort support while operational command remained Spanish.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All ten major amphibious ships were active. Individual readiness and assignments remain open.</p>"}
    ],
    related:[...spanishSupportRelated,{href:"numancia-assault-carrier.html",kicker:"Aviation command ship",label:"Numancia"},{href:"segura-class-mine-countermeasure-vessel.html",kicker:"Approach clearance",label:"Segura Class"},{href:"spanish-atlantic-auxiliaries.html",kicker:"Sustainment",label:"Spanish Atlantic Auxiliaries"}],
    facts:[["Type","Major amphibious ship"],["Ships","10 · fixed"],["Working introduction","1970–1984"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Provinces and historic regions"],["Active, 1985","10"],["Class detail status","Registered extrapolation"]]
  }),

  "segura-class-mine-countermeasure-vessel": spanishSupportArticle({
    title:"Segura-class mine-countermeasure vessel",type:"Mine warfare",period:"1970–1985",
    lead:"The Segura class was the working registry lineage for Spain's ten active mine-countermeasure vessels in 1985. The 850-tonne ships carried saints' names and entered the working register between 1970 and 1984.",
    canon:"Spain's ten-active-mine-warfare-vessel total and saints' naming practice are established. The Segura-class designation, individual names, 1970–1984 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working class supplied mine hunting, sweeping, route survey, and clearance for Gibraltar, Spanish ports, Atlantic islands, convoy lanes, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["San Telmo","1970"],["San Roque","1971"],["San Vicente","1973"],["San Isidro","1974"],["San Fernando","1976"],["San Lorenzo","1978"],["San Sebastián","1979"],["Santa Bárbara","1981"],["Santa Lucía","1982"],["Santa Teresa","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"geography",title:"Operating geography",html:"<p>Gibraltar, Cádiz, Ferrol, Cartagena, the Canaries, and overseas routes produced distinct mine-clearance requirements.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses saints and religious figures, consistent with the Spanish mine-warfare naming rule.</p>"},
      {id:"support",title:"Amphibious support",html:"<p>Segura vessels cleared approaches for the major amphibious group and protected follow-on supply routes.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All ten registered ships were active. Readiness, stations, and equipment blocks remain open.</p>"}
    ],
    related:[...spanishSupportRelated,{href:"aragon-castilla-galicia-amphibious-ships.html",kicker:"Supported force",label:"Aragón / Castilla / Galicia Lineage"},{href:"atrevida-class-corvette.html",kicker:"Littoral escort",label:"Atrevida Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Ships","10 · fixed"],["Working introduction","1970–1984"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Saints"],["Active, 1985","10"],["Class detail status","Registered extrapolation"]]
  }),

  "spanish-atlantic-auxiliaries": spanishSupportArticle({
    title:"Spanish Atlantic auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"The Spanish Atlantic auxiliary force comprised fourteen active major ships in 1985, the largest auxiliary category among the four Latin fleets. The working registry assigns them saints' and Marian names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Spain's fourteen-active-major-auxiliary total, largest Latin auxiliary-group status, and saint-or-Marian naming practice are established. Individual hull names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations. Division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts fourteen major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["San Nicolás","1970"],["San Rafael","1971"],["San Gabriel","1972"],["San Miguel","1973"],["San Cristóbal","1974"],["San Antonio","1975"],["San José","1976"],["San Juan de Ávila","1978"],["Santa María del Mar","1979"],["Nuestra Señora del Carmen","1980"],["Nuestra Señora del Pilar","1981"],["Nuestra Señora de Covadonga","1982"],["Santiago Apóstol","1983"],["Santo Domingo","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained the carrier-centered fleet along distant Atlantic routes.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported workshops, salvage, submarine and small-craft tending, and mobile maintenance. Hull-by-hull assignments are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names use saints, apostles, and Marian titles under the Spanish auxiliary naming rule.</p>"},
      {id:"operations",title:"Operations",html:"<p>The ships supported routes through Gibraltar, the Canaries, Azores, West Africa, Brazil, the Caribbean, and the South Atlantic and could service mixed Latin formations.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All fourteen major auxiliaries were active. Individual role, readiness, and deployment remain open.</p>"}
    ],
    related:[...spanishSupportRelated,{href:"reina-isabel-class-carrier.html",kicker:"Sustained carrier force",label:"Reina Isabel Class"},{href:"aragon-castilla-galicia-amphibious-ships.html",kicker:"Supported amphibious force",label:"Aragón / Castilla / Galicia Lineage"}],
    facts:[["Category","Major fleet auxiliaries"],["Ships","14 · fixed"],["Latin standing","Largest auxiliary group"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming rule","Saints and Marian titles"],["Hull-detail status","Registered extrapolation"]]
  })
});
