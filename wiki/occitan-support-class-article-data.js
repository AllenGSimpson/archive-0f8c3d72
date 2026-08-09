window.deepArticles = window.deepArticles || {};

const occitanSupportArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Marine Occitane · ${config.type} · ${config.period}`,
  infoboxKicker:"Occitan naval support lineage",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Marine Occitane","Occitan warships","Naval history","Military technology"]
});

const occitanSupportRelated = [
  {href:"marine-occitane.html",kicker:"Parent service",label:"Marine Occitane"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"},
  {href:"occitania.html",kicker:"Sovereign state",label:"Occitania"}
];

const occitanSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const occitanSupportOverview = window.deepArticles["marine-occitane"];
if (occitanSupportOverview) {
  occitanSupportOverview.canon = "The Marine Occitane's technical role, fixed class and category totals, controlling introduction bands, displacements, registered capabilities, 56-active-ship total, Latin interfaces, naming practices, and category totals are established. Toulouse, Aquitaine, and Provence are explicit hull names; later combatant and support names are registered extrapolations as stated in their articles. Fleet commands, bases, deployments, readiness, budgets, detailed weapons and sensors beyond the register, builders by hull, refits, and most individual service histories remain open.";
  const smallerSection = occitanSupportOverview.sections.find(section => section.id === "smaller");
  if (smallerSection) {
    smallerSection.html = smallerSection.html
      .replace("Eight Camargue corvettes", "Eight <a href='camargue-class-corvette.html'>Camargue corvettes</a>")
      .replace("Four amphibious ships", "<a href='occitan-amphibious-group.html'>Four amphibious ships</a>")
      .replace("six mine-countermeasure vessels", "<a href='camargue-class-mine-countermeasure-vessel.html'>six mine-countermeasure vessels</a>")
      .replace("eight auxiliaries", "<a href='occitan-fleet-auxiliaries.html'>eight auxiliaries</a>");
  }
  occitanSupportOverview.related = [
    {href:"camargue-class-corvette.html",kicker:"Small-combatant branch",label:"Camargue Class"},
    {href:"occitan-amphibious-group.html",kicker:"Amphibious force",label:"Occitan Amphibious Group"},
    {href:"camargue-class-mine-countermeasure-vessel.html",kicker:"Mine warfare",label:"Camargue Mine-Countermeasure Lineage"},
    {href:"occitan-fleet-auxiliaries.html",kicker:"Fleet sustainment",label:"Occitan Fleet Auxiliaries"},
    ...occitanSupportOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "camargue-class-corvette": occitanSupportArticle({
    title:"Camargue-class corvette",type:"Corvette and missile craft",period:"1970–1985",
    lead:"The Camargue class comprised Occitania's eight active corvettes and missile craft in 1985. The working register assigns the 650-tonne ships Occitan wind names, mixed diesel or gas-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"The Camargue designation, eight-active-ship total, corvette category, Occitan construction, and wind naming practice are established. The individual names, 1970–1984 commissioning sequence, 650-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. The split between corvette and missile-craft missions, dimensions, speed, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied a compact fighting layer beneath Occitania's destroyers and frigates. It protected coastal approaches, escorted local traffic, and added dispersed surface attack to Mediterranean formations.</p>"},
      {id:"registry",title:"Working registered ships",html:occitanSupportRoster([["Marin","1970"],["Autan","1972"],["Cers","1974"],["Tramontana","1976"],["Labech","1978"],["Vent d'Est","1980"],["Vent d'Oèst","1982"],["Siroc","1984"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 650 tonnes full load and diesel or gas-turbine propulsion. It does not resolve machinery by hull or establish speed, range, dimensions, missiles, guns, sensors, electronic warfare, or complement.</p>"},
      {id:"role",title:"Combat role",html:"<p>Camargue ships conducted surveillance, local escort, point defense, and short-notice interception. External reconnaissance and the Latin tactical data system could make a small hull part of a larger missile engagement.</p>"},
      {id:"geography",title:"Operating geography",html:"<p>The western Mediterranean, Gulf of Lion, Corsican approaches, and routes toward Iberia and North Africa favored small combatants supported by dense shore and fleet infrastructure.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Occitan names for winds. This follows the established national small-combatant convention, but individual hull names remain extrapolated.</p>"},
      {id:"system",title:"Technical integration",html:"<p>Occitan combat computers, guidance, electronic warfare, and data links allowed the class to serve as an integration platform as well as a patrol force. Exact equipment blocks are open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight ships were active. Their precise corvette-versus-missile-craft division, readiness, and stations remain open.</p>"}
    ],
    related:[...occitanSupportRelated,{href:"narbonnaise-class-frigate.html",kicker:"Larger escort",label:"Narbonnaise Class"},{href:"camargue-class-mine-countermeasure-vessel.html",kicker:"Namesake support lineage",label:"Camargue Mine-Countermeasure Lineage"}],
    facts:[["Type","Corvette and missile craft"],["Ships","8 · fixed"],["Working introduction","1970–1984"],["Working full load","650 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Occitan winds"],["Active, 1985","8"],["Hull-detail status","Registered extrapolation"]]
  }),

  "occitan-amphibious-group": occitanSupportArticle({
    title:"Occitan amphibious group",type:"Major amphibious ships",period:"1970–1985",
    lead:"The Occitan amphibious group comprised four active major ships in 1985. The working register assigns them Occitan regional names, 12,000-tonne full-load displacement, mixed diesel or gas-turbine propulsion, and commissioning years from 1970 to 1982.",
    canon:"Occitania's four-active-major-amphibious-ship total and regional naming practice are established. The combined group designation, individual names, 1970–1982 commissioning sequence, 12,000-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Division into subclasses, dimensions, speed, troop, vehicle, dock, landing-craft and aviation capacities, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The controlling fleet balance treats four ships as one major amphibious category. The register does not divide them into landing ships, docks, or assault transports.</p>"},
      {id:"registry",title:"Working registered ships",html:occitanSupportRoster([["Provença","1970"],["Lengadòc","1974"],["Gasconha","1978"],["Auvèrnhe","1982"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 12,000 tonnes full load and diesel or gas-turbine propulsion across the group. Individual hull forms, capacities, landing systems, aviation facilities, speed, weapons, and complement remain open.</p>"},
      {id:"role",title:"Amphibious role",html:"<p>The ships moved troops, vehicles, engineers, stores, landing craft, and command elements within the western Mediterranean and along Latin routes.</p>"},
      {id:"provence",title:"Relationship to the aviation cruiser",html:"<p>The <a href='provence-aviation-cruiser.html'><em>Provence</em> aviation cruiser</a> supplied VTOL aircraft, helicopters, drones, and command facilities above the four-ship amphibious category.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names use Occitan forms for regions, following the established amphibious naming practice. They remain registry extrapolations.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common aviation markings, replenishment fittings, communications, rescue procedures, and data formats allowed the ships to operate with Italian, Spanish, and Portuguese support forces.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four major amphibious ships were active. Individual types, readiness, and assignments remain open.</p>"}
    ],
    related:[...occitanSupportRelated,{href:"provence-aviation-cruiser.html",kicker:"Aviation command",label:"Provence"},{href:"camargue-class-mine-countermeasure-vessel.html",kicker:"Approach clearance",label:"Camargue Mine-Countermeasure Lineage"},{href:"occitan-fleet-auxiliaries.html",kicker:"Sustainment",label:"Occitan Fleet Auxiliaries"}],
    facts:[["Type","Major amphibious ship"],["Ships","4 · fixed"],["Working introduction","1970–1982"],["Working full load","12,000 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Occitan regions"],["Active, 1985","4"],["Class-detail status","Registered extrapolation"]]
  }),

  "camargue-class-mine-countermeasure-vessel": occitanSupportArticle({
    title:"Camargue mine-countermeasure vessel lineage",type:"Mine warfare",period:"1970–1985",
    lead:"The Camargue mine-countermeasure lineage was the working registry designation for Occitania's six active mine-warfare vessels in 1985. The 850-tonne ships carried saints' names and entered the register between 1970 and 1983.",
    canon:"Occitania's six-active-mine-warfare-vessel total and saints' naming practice are established. The Camargue mine-countermeasure designation, individual names, 1970–1983 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working lineage supplied mine hunting, sweeping, route survey, and clearance for Mediterranean ports, fleet anchorages, convoy lanes, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:occitanSupportRoster([["Sant Trefume","1970"],["Sant Sernin","1972"],["Santa Marta","1975"],["Santa Reparada","1978"],["Sant Gèli","1980"],["Santa Enimia","1983"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"technology",title:"Technical role",html:"<p>Mine hunting suited Occitania's strengths in sonar, guidance, computing, remote systems, and integration. Exact equipment and the extent of unmanned operation remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Occitan saints' names, consistent with the established mine-warfare naming rule.</p>"},
      {id:"support",title:"Amphibious support",html:"<p>The vessels cleared approaches for the <a href='occitan-amphibious-group.html'>Occitan amphibious group</a> and protected the ports that sustained fleet sorties.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six mine-warfare vessels were active. Readiness, stations, and equipment blocks remain open.</p>"}
    ],
    related:[...occitanSupportRelated,{href:"occitan-amphibious-group.html",kicker:"Supported force",label:"Occitan Amphibious Group"},{href:"camargue-class-corvette.html",kicker:"Namesake combat lineage",label:"Camargue Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Ships","6 · fixed"],["Working introduction","1970–1983"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming rule","Occitan saints"],["Active, 1985","6"],["Class-detail status","Registered extrapolation"]]
  }),

  "occitan-fleet-auxiliaries": occitanSupportArticle({
    title:"Occitan fleet auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"The Occitan fleet auxiliary force comprised eight active major ships in 1985. The working register assigns them Occitan river names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Occitania's eight-active-major-auxiliary total and river naming practice are established. Individual hull names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations. Division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts eight major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:occitanSupportRoster([["Ròse","1970"],["Garona","1972"],["Dordonha","1974"],["Tarn","1976"],["Òlt","1978"],["Arièja","1980"],["Ador","1982"],["Vidorle","1984"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained the compact fleet beyond its home ports.</p>"},
      {id:"repair",title:"Repair and trials support",html:"<p>Major auxiliaries supported workshops, salvage, submarine tending, mobile maintenance, and technical trials. Hull-by-hull assignments remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names are rivers in Occitan form, following the established auxiliary naming rule.</p>"},
      {id:"operations",title:"Operations",html:"<p>The ships supported western Mediterranean operations and deployments through Gibraltar into the Atlantic, while common fittings allowed them to service mixed Latin formations.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight major auxiliaries were active. Individual roles, readiness, and deployments remain open.</p>"}
    ],
    related:[...occitanSupportRelated,{href:"provence-aviation-cruiser.html",kicker:"Sustained aviation force",label:"Provence"},{href:"occitan-amphibious-group.html",kicker:"Supported amphibious force",label:"Occitan Amphibious Group"},{href:"aigrette-class-ssgn.html",kicker:"Supported trials platform",label:"Aigrette Class"}],
    facts:[["Category","Major fleet auxiliaries"],["Ships","8 · fixed"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming rule","Occitan rivers"],["Active, 1985","8"],["Hull-detail status","Registered extrapolation"]]
  })
});
