window.deepArticles = window.deepArticles || {};

const portugueseSupportArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Marinha Portuguesa · ${config.type} · ${config.period}`,
  infoboxKicker:"Portuguese naval support lineage",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Marinha Portuguesa","Portuguese warships","Naval history","Military technology"]
});

const portugueseSupportRelated = [
  {href:"marinha-portuguesa-postwar.html",kicker:"Parent service",label:"Marinha Portuguesa"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"},
  {href:"portugal.html",kicker:"Sovereign state",label:"Portugal"}
];

const portugueseSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const portugueseSupportOverview = window.deepArticles["marinha-portuguesa-postwar"];
if (portugueseSupportOverview) {
  portugueseSupportOverview.canon = "Portugal's strategic routes, fixed class and category totals, controlling introduction bands, registered capabilities, 57-active-ship total, second-rank oceanic status, national naming practices, and Latin interoperability are established. The two Infante Dom Henrique-class cruiser names are explicit canon; later combatant and support hull names are registered extrapolations as stated in their articles. Fleet commands, base distribution, deployments, readiness, budgets, exact weapons and sensors, builders by hull, refits, and most individual service histories remain open.";
  const amphibiousSection = portugueseSupportOverview.sections.find(section => section.id === "amphibious");
  if (amphibiousSection) {
    amphibiousSection.html = amphibiousSection.html
      .replace("Four Índia landing ships", "Four <a href='india-class-landing-ship.html'>Índia landing ships</a>")
      .replace("two São Gabriel landing-platform docks", "two <a href='sao-gabriel-class-landing-platform-dock.html'>São Gabriel landing-platform docks</a>")
      .replace("Eight mine-warfare ships", "Eight <a href='azores-class-mine-countermeasure-vessel.html'>mine-warfare ships</a>");
  }
  const auxiliarySection = portugueseSupportOverview.sections.find(section => section.id === "auxiliaries");
  if (auxiliarySection) auxiliarySection.html = auxiliarySection.html.replace("Eight major auxiliaries", "<a href='portuguese-ocean-auxiliaries.html'>Eight major auxiliaries</a>");
  portugueseSupportOverview.related = [
    {href:"india-class-landing-ship.html",kicker:"Landing-ship branch",label:"Índia Class"},
    {href:"sao-gabriel-class-landing-platform-dock.html",kicker:"Dock-landing branch",label:"São Gabriel Class"},
    {href:"azores-class-mine-countermeasure-vessel.html",kicker:"Mine warfare",label:"Azores Lineage"},
    {href:"portuguese-ocean-auxiliaries.html",kicker:"Fleet sustainment",label:"Portuguese Ocean Auxiliaries"},
    ...portugueseSupportOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "india-class-landing-ship": portugueseSupportArticle({
    title:"Índia-class landing ship",type:"Major landing ship",period:"1970–1978",
    lead:"The Índia class comprised four of Portugal's six active major amphibious ships in 1985. The combined Índia/São Gabriel asset register provisionally assigns the first four hulls Portuguese regional names, 12,000-tonne full-load displacement, mixed diesel or gas-turbine propulsion, and commissioning years from 1970 to 1978.",
    canon:"The Índia designation, four-ship total, landing-ship role, Portuguese construction, active status in 1985, and regional naming practice are established. Assignment of Minho, Trás-os-Montes, Beira Alta, and Beira Baixa to this class, their 1970–1978 sequence, 12,000-tonne full-load displacement, and diesel-or-gas-turbine propulsion are working extrapolations from the combined Índia/São Gabriel register. Dimensions, speed, troop and vehicle capacity, landing craft, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The controlling fleet balance distinguishes four Índia landing ships from two São Gabriel landing-platform docks. The asset register combines both designs into a single six-hull working lineage.</p>"},
      {id:"registry",title:"Working registered ships",html:portugueseSupportRoster([["Minho","1970"],["Trás-os-Montes","1972"],["Beira Alta","1975"],["Beira Baixa","1978"]])},
      {id:"design",title:"Working design",html:"<p>The combined register assigns 12,000 tonnes full load and diesel or gas-turbine propulsion. It does not establish an Índia-specific hull form, dimensions, speed, capacity, machinery arrangement, armament, or complement.</p>"},
      {id:"role",title:"Landing-ship role",html:"<p>The ships moved troops, vehicles, engineers, stores, and landing elements between metropolitan Portugal, the Atlantic islands, African ports, and Indian Ocean routes.</p>"},
      {id:"routes",title:"Operating geography",html:"<p>Long ocean passages and dispersed terminals made range, habitability, cargo handling, and repair access as important as the final ship-to-shore movement.</p>"},
      {id:"names",title:"Naming",html:"<p>The four working names are Portuguese regions, consistent with the established national rule for amphibious ships. Their class assignment remains provisional.</p>"},
      {id:"gabriel",title:"Relationship to São Gabriel",html:"<p>Two <a href='sao-gabriel-class-landing-platform-dock.html'>São Gabriel landing-platform docks</a> completed the fixed six-ship amphibious force and supplied the dock-centered branch.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four Índia landing ships were active. Individual readiness, assignments, and the working hull allocation remain open.</p>"}
    ],
    related:[...portugueseSupportRelated,{href:"sao-gabriel-class-landing-platform-dock.html",kicker:"Paired amphibious branch",label:"São Gabriel Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Major landing ship"],["Ships","4 · fixed"],["Working introduction","1970–1978"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Portuguese regions"],["Active, 1985","4"],["Hull-name status","Registered extrapolation"]]
  }),

  "sao-gabriel-class-landing-platform-dock": portugueseSupportArticle({
    title:"São Gabriel-class landing-platform dock",type:"Landing-platform dock",period:"1980–1985",
    lead:"The São Gabriel class comprised two active Portuguese landing-platform docks in 1985. The combined Índia/São Gabriel register provisionally assigns the later two hulls the regional names Ribatejo and Alentejo, with commissioning years of 1980 and 1983.",
    canon:"The São Gabriel designation, two-ship total, landing-platform-dock role, Portuguese construction, active status in 1985, and regional naming practice are established. Assignment of Ribatejo and Alentejo to this class, their 1980 and 1983 commissioning years, 12,000-tonne full-load displacement, and diesel-or-gas-turbine propulsion are working extrapolations from the combined Índia/São Gabriel register. Dimensions, speed, dock, landing-craft, troop, vehicle and aviation capacities, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The controlling reference identifies two São Gabriel landing-platform docks separately from four Índia landing ships. The register does not mark a technical boundary inside its combined six-hull entry.</p>"},
      {id:"registry",title:"Working registered ships",html:portugueseSupportRoster([["Ribatejo","1980"],["Alentejo","1983"]])},
      {id:"design",title:"Working design",html:"<p>The combined register assigns 12,000 tonnes full load and diesel or gas-turbine propulsion. Dock dimensions, landing craft, flight facilities, troop capacity, speed, sensors, weapons, and complement remain open.</p>"},
      {id:"dock",title:"Dock-landing role",html:"<p>The landing-platform docks provided a sheltered internal interface for landing craft, stores, and vehicles while supporting command and sustained overseas movement.</p>"},
      {id:"aviation",title:"Aviation and command",html:"<p>Helicopter and command support were natural requirements of the type, but the number of landing spots, aircraft facilities, staff spaces, and communications fit are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>Ribatejo and Alentejo are working regional names under the established Portuguese amphibious naming rule. Their assignment to São Gabriel remains provisional.</p>"},
      {id:"india",title:"Relationship to Índia",html:"<p>Four <a href='india-class-landing-ship.html'>Índia landing ships</a> supplied the earlier landing-ship branch of the six-ship force.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both São Gabriel landing-platform docks were active. Individual readiness and assignments remain open.</p>"}
    ],
    related:[...portugueseSupportRelated,{href:"india-class-landing-ship.html",kicker:"Earlier amphibious branch",label:"Índia Class"},{href:"portuguese-ocean-auxiliaries.html",kicker:"Sustainment",label:"Portuguese Ocean Auxiliaries"}],
    facts:[["Type","Landing-platform dock"],["Ships","2 · fixed"],["Working commissioned","1980 · 1983"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Portuguese regions"],["Active, 1985","2"],["Hull-name status","Registered extrapolation"]]
  }),

  "azores-class-mine-countermeasure-vessel": portugueseSupportArticle({
    title:"Azores mine-countermeasure vessel lineage",type:"Mine warfare",period:"1970–1985",
    lead:"The Azores mine-countermeasure lineage was the working registry designation for Portugal's eight active mine-warfare vessels in 1985. The 850-tonne ships carried saints' and Marian names and entered the register between 1970 and 1984.",
    canon:"Portugal's eight-active-mine-warfare-vessel total and saints' naming practice are established. The Azores mine-countermeasure designation, individual names, 1970–1984 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working lineage supplied mine hunting, sweeping, route survey, and clearance for Portuguese ports, island anchorages, convoy lanes, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:portugueseSupportRoster([["São Vicente","1970"],["São Lourenço","1972"],["São Roque","1974"],["São Brás","1976"],["Santa Catarina","1978"],["Santa Isabel","1980"],["Nossa Senhora da Nazaré","1982"],["Nossa Senhora de Fátima","1984"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"geography",title:"Atlantic geography",html:"<p>Lisbon, the Azores, Madeira, Cape Verde, and African terminals created widely separated clearance obligations and made deployability central to the force.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses saints and Marian titles, following the established Portuguese rule for mine-warfare ships.</p>"},
      {id:"support",title:"Amphibious support",html:"<p>The vessels protected ports and cleared approaches for the <a href='india-class-landing-ship.html'>Índia</a> and <a href='sao-gabriel-class-landing-platform-dock.html'>São Gabriel</a> amphibious branches.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight mine-warfare vessels were active. Readiness, stations, and equipment blocks remain open.</p>"}
    ],
    related:[...portugueseSupportRelated,{href:"india-class-landing-ship.html",kicker:"Supported force",label:"Índia Class"},{href:"sao-gabriel-class-landing-platform-dock.html",kicker:"Supported force",label:"São Gabriel Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Ships","8 · fixed"],["Working introduction","1970–1984"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Saints and Marian titles"],["Active, 1985","8"],["Class-detail status","Registered extrapolation"]]
  }),

  "portuguese-ocean-auxiliaries": portugueseSupportArticle({
    title:"Portuguese ocean auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"The Portuguese ocean auxiliary force comprised eight active major ships in 1985. The working register assigns them river names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Portugal's eight-active-major-auxiliary total and river naming practice are established. Individual hull names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations. Division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts eight major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:portugueseSupportRoster([["Mondego","1970"],["Guadiana","1972"],["Sado","1974"],["Zêzere","1976"],["Cávado","1978"],["Ave","1980"],["Tâmega","1982"],["Mira","1984"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than a literal single class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained escorts and amphibious forces across the Atlantic and around Africa.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported workshops, salvage, submarine and small-craft tending, and mobile maintenance. Hull-by-hull assignments are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are Portuguese rivers, following the established auxiliary naming rule.</p>"},
      {id:"operations",title:"Operations",html:"<p>The ships supported routes through the Azores, Madeira, Cape Verde, West and southern Africa, Brazil, Mozambique, and the Indian Ocean and could service mixed Latin formations.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight major auxiliaries were active. Individual roles, readiness, and deployments remain open.</p>"}
    ],
    related:[...portugueseSupportRelated,{href:"sao-gabriel-class-landing-platform-dock.html",kicker:"Supported amphibious force",label:"São Gabriel Class"},{href:"bartolomeu-dias-class-destroyer.html",kicker:"Supported escort force",label:"Bartolomeu Dias Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Category","Major fleet auxiliaries"],["Ships","8 · fixed"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming rule","Portuguese rivers"],["Active, 1985","8"],["Hull-detail status","Registered extrapolation"]]
  })
});
