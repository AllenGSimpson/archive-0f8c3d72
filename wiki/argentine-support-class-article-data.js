window.deepArticles = window.deepArticles || {};

const argentineSupportArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Armada de la República Argentina · ${config.type} · ${config.period}`,
  infoboxKicker:"Argentine naval support lineage",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Argentine Navy","Argentine warships","Falklands–Malvinas War","Naval history","Military technology"]
});

const argentineSupportRelated = [
  {href:"argentine-navy-postwar.html",kicker:"Parent service",label:"Argentine Navy"},
  {href:"argentina.html",kicker:"Sovereign state",label:"Argentina"},
  {href:"falklands-war.html",kicker:"Defining conflict",label:"Falklands–Malvinas War"},
  {href:"falklands-campaign-1985.html",kicker:"Operational history",label:"1985 Falklands Campaign"}
];

const argentineSupportRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>Registry year</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const argentineSupportOverview = window.deepArticles["argentine-navy-postwar"];
if (argentineSupportOverview) {
  argentineSupportOverview.canon = "Argentina's arsenal-state status, fixed category totals, named principal combatants and submarines, controlling commissioning and delivery dates, registered capabilities, domestic construction scope, German-supplied technologies, 48-active-ship total, naming practices, and the listed 1985 balance are established. Support-fleet names and technical rows are registered extrapolations as stated in their articles. Fleet commands, complete base organization, readiness on the Falklands opening day, budgets, exact weapons and sensors beyond the register, crew strengths, refits, losses, and most individual service histories remain open unless fixed by the Falklands campaign register.";
  const supportSection = argentineSupportOverview.sections.find(section => section.id === "support");
  if (supportSection) {
    supportSection.html = supportSection.html
      .replace("Six Patagonia mine-countermeasure vessels", "Six <a href='patagonia-class-mine-countermeasure-vessel.html'>Patagonia mine-countermeasure vessels</a>")
      .replace("eight major auxiliaries", "<a href='argentine-fleet-auxiliaries.html'>eight major auxiliaries</a>");
  }
  argentineSupportOverview.related = [
    {href:"patagonia-class-mine-countermeasure-vessel.html",kicker:"Mine warfare",label:"Patagonia Lineage"},
    {href:"argentine-fleet-auxiliaries.html",kicker:"Fleet sustainment",label:"Argentine Fleet Auxiliaries"},
    ...argentineSupportOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "patagonia-class-mine-countermeasure-vessel": argentineSupportArticle({
    title:"Patagonia mine-countermeasure vessel lineage",type:"Mine warfare",period:"1970–1985",
    lead:"The Patagonia mine-countermeasure lineage was the working registry designation for Argentina's six active mine-warfare vessels in 1985. The 850-tonne ships carried Argentine geographic names and entered the register between 1970 and 1983.",
    canon:"Argentina's six-active-mine-warfare-vessel total and requirement that every vessel larger than a harbor craft carry an Argentine name are established. The Patagonia designation, individual names, 1970–1983 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, Falklands deployments, losses, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working lineage supplied mine hunting, sweeping, route survey, and clearance for naval bases, commercial ports, coastal passages, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:argentineSupportRoster([["San Blas","1970"],["San Matías","1972"],["San Jorge","1975"],["San Borombón","1978"],["San Sebastián","1980"],["Santa Catalina","1983"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"geography",title:"South Atlantic geography",html:"<p>Puerto Belgrano, Patagonian ports, the approaches to Tierra del Fuego, and waters around the Falklands created long, exposed clearance obligations.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Argentine bays, gulfs, and coastal places. The names satisfy the established national requirement but remain extrapolated hull assignments.</p>"},
      {id:"war",title:"Falklands–Malvinas War",html:"<p>Mine clearance, route survey, and port protection were part of the Argentine naval system during the 1985 war. Named deployments, equipment blocks, losses, and individual actions remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six mine-warfare vessels were active. Readiness, stations, and detailed assignments remain open.</p>"}
    ],
    related:[...argentineSupportRelated,{href:"cabo-san-antonio-class-landing-ship.html",kicker:"Supported amphibious force",label:"Cabo San Antonio Class"},{href:"bahia-class-assault-transport.html",kicker:"Supported amphibious force",label:"Bahía Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Ships","6 · fixed"],["Working introduction","1970–1983"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming practice","Argentine geography"],["Active, 1985","6"],["Class-detail status","Registered extrapolation"]]
  }),

  "argentine-fleet-auxiliaries": argentineSupportArticle({
    title:"Argentine fleet auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"The Argentine fleet auxiliary force comprised eight active major ships in 1985. The working register assigns them Argentine regional and port names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and commissioning years from 1970 to 1984.",
    canon:"Argentina's eight-active-major-auxiliary total and requirement that every vessel larger than a harbor craft carry an Argentine name are established. Individual names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations. Division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, Falklands deployments, losses, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts eight major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:argentineSupportRoster([["Patagonia","1970"],["Bahía Blanca","1972"],["Punta Alta","1974"],["Comodoro Rivadavia","1976"],["Puerto Deseado","1978"],["Ushuaia","1980"],["San Julián","1982"],["Río Gallegos","1984"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained the carrier, cruiser, escorts, submarines, and amphibious force.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported workshops, salvage, submarine tending, mobile maintenance, and distant bases. Hull-by-hull assignments remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Patagonia, naval ports, and southern cities, expressing the fleet's South Atlantic geography. Individual assignments remain extrapolated.</p>"},
      {id:"war",title:"Falklands–Malvinas War",html:"<p>Auxiliary endurance, repair access, fuel movement, and dispersed resupply shaped Argentina's ability to concentrate near the islands. Named deployments, damage, losses, and individual missions remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight major auxiliaries were active. Individual roles, readiness, and deployments remain open.</p>"}
    ],
    related:[...argentineSupportRelated,{href:"ara-veinticinco-de-mayo.html",kicker:"Sustained carrier force",label:"ARA Veinticinco de Mayo"},{href:"ara-almirante-brown.html",kicker:"Sustained flagship",label:"ARA Almirante Brown"},{href:"operation-nachtbruecke.html",kicker:"Covert supplementary logistics",label:"Operation Nachtbrücke"}],
    facts:[["Category","Major fleet auxiliaries"],["Ships","8 · fixed"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming practice","Argentine regions and ports"],["Active, 1985","8"],["Hull-detail status","Registered extrapolation"]]
  })
});
