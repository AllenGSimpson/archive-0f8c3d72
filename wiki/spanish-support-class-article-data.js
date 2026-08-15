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

const spanishSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active · provisional"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const spanishSupportOverview = window.deepArticles["armada-espanola-postwar"];
if (spanishSupportOverview) {
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
    lead:"Atrevida is the working class label for the ocean-corvette branch of Spain's 1985 littoral force. The current naval table allocates eight corvettes beside eight Lazaga missile craft, while the asset registry combines both categories in one sixteen-ship reconstruction and provisionally assigns the first eight hulls cape names.",
    canon:"Spain's ocean-corvette branch and its Atlantic patrol, escort, and surveillance roles are supported. Atrevida, the eight-active and sixteen-combined totals, hull division, names, 1970–1977 sequence, 650-tonne displacement, and propulsion remain working reconstruction. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The current naval table separates eight Atrevida ocean corvettes from eight Lazaga missile craft as working allocations. The asset registry stores all sixteen under a combined Atrevida/Lazaga heading.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Cabo Finisterre","1970"],["Cabo Ortegal","1971"],["Cabo Peñas","1972"],["Cabo de Gata","1973"],["Cabo de Palos","1974"],["Cabo Trafalgar","1975"],["Cabo de la Nao","1976"],["Cabo Machichaco","1977"]])},
      {id:"design",title:"Working design",html:"<p>The combined registry assigns 650 tonnes full load and diesel or gas-turbine propulsion. It does not resolve Atrevida-specific machinery, weapons, sensors, speed, range, dimensions, or complement.</p>"},
      {id:"role",title:"Ocean-corvette role",html:"<p>The ships patrolled Atlantic approaches, escorted local shipping, supported surveillance, and supplemented frigates along routes between Iberia, the Canaries, West Africa, and oceanic bases.</p>"},
      {id:"system",title:"Operating system",html:"<p>Patrol aircraft, coastal sensors, auxiliaries, ports, and larger escorts extended the utility of small hulls beyond independent shipboard detection.</p>"},
      {id:"names",title:"Naming",html:"<p>The working hull names are Spanish capes. The naming rule and class assignment remain provisional.</p>"},
      {id:"lazaga",title:"Relationship to Lazaga",html:"<p>Eight <a href='lazaga-class-missile-craft.html'>Lazaga missile craft</a> complete the working sixteen-ship category. The registry split assigns the later eight hulls to Lazaga.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r7c3f writer=g kind=revision created=2026-08-15T15:21:00-06:00 --><p>The current register assigns eight named Atrevida corvettes to active service. The class label, total, roster, naming rule, propulsion, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishSupportRelated,{href:"lazaga-class-missile-craft.html",kicker:"Paired working lineage",label:"Lazaga Class"},{href:"descubierta-class-frigate.html",kicker:"Larger patrol escort",label:"Descubierta Class"}],
    facts:[["Type","Ocean corvette"],["Class label","Atrevida · working"],["Active, 1985","8 · working"],["Wider allocation","16 corvettes and missile craft · working"],["Working years","1970–1977"],["Working full load","650 t"],["Working naming rule","Spanish capes"],["Hull-name status","Registered extrapolation"]]
  }),

  "lazaga-class-missile-craft": spanishSupportArticle({
    title:"Lazaga-class missile craft",type:"Fast missile craft",period:"1978–1985",
    lead:"Lazaga is the working class label for the missile-craft branch of Spain's 1985 littoral force. The current naval table allocates eight craft beside eight Atrevida corvettes, while the combined asset register provisionally assigns the later eight hulls wind names and 1978–1985 registry years.",
    canon:"Spain's missile-craft branch and its coastal and island surface-strike role are supported. Lazaga, the eight-active and sixteen-combined totals, hull division, names, 1978–1985 sequence, 650-tonne displacement, and propulsion remain working reconstruction. Dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The current naval table lists eight Lazaga missile craft as a working allocation. The combined registry does not independently mark the boundary or technical differences between the two lineages.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Levante","1978"],["Poniente","1979"],["Tramontana","1980"],["Gregal","1981"],["Siroco","1982"],["Ábrego","1983"],["Mistral","1984"],["Alisio","1985"]])},
      {id:"design",title:"Working design",html:"<p>The combined registry assigns 650 tonnes full load and diesel or gas-turbine propulsion. Missile count, gun armament, sensors, speed, range, dimensions, and complement are not fixed.</p>"},
      {id:"attack",title:"Missile attack",html:"<p>The craft used coastal and island bases, speed, reconnaissance, and external targeting to add anti-ship salvos to Spanish formations.</p>"},
      {id:"routes",title:"Operating areas",html:"<p>Likely operating areas within the class role included Gibraltar, Iberian approaches, the Canaries, Morocco, and West African routes. Individual stations remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are winds. Their assignment to Lazaga accords with Spanish small-combatant naming practice but remains registry extrapolation.</p>"},
      {id:"atrevida",title:"Relationship to Atrevida",html:"<p>Eight <a href='atrevida-class-corvette.html'>Atrevida ocean corvettes</a> complete the working sixteen-ship category.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-s9e5h writer=g kind=revision created=2026-08-15T15:22:00-06:00 --><p>The current register assigns eight named Lazaga craft to active service. The class label, total, roster, naming rule, propulsion, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishSupportRelated,{href:"atrevida-class-corvette.html",kicker:"Paired working lineage",label:"Atrevida Class"},{href:"santa-maria-class-frigate.html",kicker:"Larger missile escort",label:"Santa María Class"}],
    facts:[["Type","Fast missile craft"],["Class label","Lazaga · working"],["Active, 1985","8 · working"],["Wider allocation","16 corvettes and missile craft · working"],["Working years","1978–1985"],["Working full load","650 t"],["Working naming rule","Winds"],["Hull-name status","Registered extrapolation"]]
  }),

  "aragon-castilla-galicia-amphibious-ships": spanishSupportArticle({
    title:"Aragón / Castilla / Galicia amphibious ship lineage",type:"Major amphibious ships",period:"1970–1985",
    lead:"The Aragón / Castilla / Galicia lineage is the working registry grouping for Spain's major amphibious ships in 1985. The later transcript establishes a large amphibious fleet, while the current table and asset register provisionally allocate ten active ships with regional names, 12,000-tonne displacement, mixed propulsion, and 1970–1984 registry years.",
    canon:"Spain's large major-amphibious-ship program and its Atlantic, Mediterranean, African, and American transport role are supported. The ten-active allocation, Aragón/Castilla/Galicia designation, naming practice, individual names, 1970–1984 sequence, 12,000-tonne displacement, and propulsion remain working reconstruction. Subclass divisions, dimensions, speed, troop, vehicle, aviation and landing-craft capacities, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The registry combines three names in one amphibious lineage and does not assign hulls to distinct subclasses or define their technical differences.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["Asturias","1970"],["Cantabria","1971"],["Navarra","1973"],["La Rioja","1974"],["Aragón","1976"],["Castilla","1978"],["Galicia","1979"],["Extremadura","1981"],["Andalucía","1982"],["Cataluña","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 12,000 tonnes full load and diesel or gas-turbine propulsion across the group. Troop capacity, vehicle decks, docks, landing craft, helicopters, weapons, dimensions, and complement remain open.</p>"},
      {id:"role",title:"Amphibious role",html:"<p>The ships moved troops, vehicles, engineers, stores, and landing elements along Atlantic, Mediterranean, African, and American routes.</p>"},
      {id:"support",title:"Fleet support",html:"<p>Amphibious operations required escorts, aviation, mine clearance, naval gunfire, medical capacity, and replenishment. The working ten-ship allocation represents the major hulls below the Numancia assault-carrier program.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Spanish regions and historic territories. The naming rule and hull allocation remain provisional.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common fittings and procedures allowed allied fuel, repair, aviation, rescue, and escort support while operational command remained Spanish.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-t2g6j writer=g kind=revision created=2026-08-15T15:23:00-06:00 --><p>The current register assigns ten named major amphibious ships to active service. The total, combined class label, roster, naming rule, specifications, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishSupportRelated,{href:"numancia-assault-carrier.html",kicker:"Aviation command ship",label:"Numancia"},{href:"segura-class-mine-countermeasure-vessel.html",kicker:"Approach clearance",label:"Segura Class"},{href:"spanish-atlantic-auxiliaries.html",kicker:"Sustainment",label:"Spanish Atlantic Auxiliaries"}],
    facts:[["Type","Major amphibious ship"],["Program scale","Large · supported"],["Working allocation","10 active"],["Working introduction","1970–1984"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Working naming rule","Regions and historic territories"],["Class detail status","Registered extrapolation"]]
  }),

  "segura-class-mine-countermeasure-vessel": spanishSupportArticle({
    title:"Segura-class mine-countermeasure vessel",type:"Mine warfare",period:"1970–1985",
    lead:"Segura is the working registry label for Spain's mine-countermeasure lineage in 1985. The current naval table and asset register provisionally allocate ten active 850-tonne ships with saints' names and 1970–1984 registry years.",
    canon:"Spain's mine-warfare capability for Gibraltar, Atlantic ports and islands, convoy routes, and amphibious approaches is supported. The ten-active allocation, Segura designation, naming practice, individual names, 1970–1984 sequence, 850-tonne displacement, and propulsion remain working reconstruction. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working class supplied mine hunting, sweeping, route survey, and clearance for Gibraltar, Spanish ports, Atlantic islands, convoy lanes, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["San Telmo","1970"],["San Roque","1971"],["San Vicente","1973"],["San Isidro","1974"],["San Fernando","1976"],["San Lorenzo","1978"],["San Sebastián","1979"],["Santa Bárbara","1981"],["Santa Lucía","1982"],["Santa Teresa","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"geography",title:"Operating geography",html:"<p>Gibraltar, Cádiz, Ferrol, Cartagena, the Canaries, and overseas routes produced distinct mine-clearance requirements.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses saints and religious figures, consistent with the Spanish mine-warfare naming rule.</p>"},
      {id:"support",title:"Amphibious support",html:"<p>Segura vessels cleared approaches for the major amphibious group and protected follow-on supply routes.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-u4i8l writer=g kind=revision created=2026-08-15T15:24:00-06:00 --><p>The current register assigns ten named Segura vessels to active service. The class label, total, roster, naming rule, specifications, readiness, and stations remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishSupportRelated,{href:"aragon-castilla-galicia-amphibious-ships.html",kicker:"Supported force",label:"Aragón / Castilla / Galicia Lineage"},{href:"atrevida-class-corvette.html",kicker:"Littoral escort",label:"Atrevida Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Class label","Segura · working"],["Working allocation","10 active"],["Working introduction","1970–1984"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Working naming rule","Saints"],["Class detail status","Registered extrapolation"]]
  }),

  "spanish-atlantic-auxiliaries": spanishSupportArticle({
    title:"Spanish Atlantic auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"Spain's Atlantic auxiliary force sustained carriers, escorts, amphibious groups, and overseas routes. The later transcript establishes a large replenishment fleet, while the current table and asset register provisionally allocate fourteen active major ships with saints' and Marian names, 18,000-tonne displacement, mixed propulsion, and 1970–1984 registry years.",
    canon:"Spain's large Atlantic replenishment, repair, tender, medical, and transport system is supported. The fourteen-active allocation, claim to the largest Latin auxiliary category, naming practice, individual names, 1970–1984 sequence, common 18,000-tonne displacement, and propulsion remain working reconstruction. Functional divisions, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The working fleet balance counts fourteen major replenishment and repair ships as one auxiliary category. The register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:spanishSupportRoster([["San Nicolás","1970"],["San Rafael","1971"],["San Gabriel","1972"],["San Miguel","1973"],["San Cristóbal","1974"],["San Antonio","1975"],["San José","1976"],["San Juan de Ávila","1978"],["Santa María del Mar","1979"],["Nuestra Señora del Carmen","1980"],["Nuestra Señora del Pilar","1981"],["Nuestra Señora de Covadonga","1982"],["Santiago Apóstol","1983"],["Santo Domingo","1984"]])},
      {id:"design",title:"Working design",html:"<p>The registry assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained the carrier-centered fleet along distant Atlantic routes.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported workshops, salvage, submarine and small-craft tending, and mobile maintenance. Hull-by-hull assignments are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names use saints, apostles, and Marian titles under the Spanish auxiliary naming rule.</p>"},
      {id:"operations",title:"Operations",html:"<p>The ships supported routes through Gibraltar, the Canaries, Azores, West Africa, Brazil, the Caribbean, and the South Atlantic and could service mixed Latin formations.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-v6k2n writer=g kind=revision created=2026-08-15T15:25:00-06:00 --><p>The current register assigns fourteen named major auxiliaries to active service. The total, comparative standing, roster, naming rule, specifications, individual roles, readiness, and deployments remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...spanishSupportRelated,{href:"reina-isabel-class-carrier.html",kicker:"Sustained carrier force",label:"Reina Isabel Class"},{href:"aragon-castilla-galicia-amphibious-ships.html",kicker:"Supported amphibious force",label:"Aragón / Castilla / Galicia Lineage"}],
    facts:[["Category","Major fleet auxiliaries"],["Program scale","Large · supported"],["Working allocation","14 active"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Working naming rule","Saints and Marian titles"],["Hull-detail status","Registered extrapolation"]]
  })
});
