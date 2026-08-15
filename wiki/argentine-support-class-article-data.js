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
  const supportSection = argentineSupportOverview.sections.find(section => section.id === "support");
  if (supportSection) {
    supportSection.html = supportSection.html
      .replace("six mine-warfare vessels", "six <a href='patagonia-class-mine-countermeasure-vessel.html'>mine-warfare vessels</a>")
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
    lead:"The Patagonia mine-countermeasure lineage is the working registry reconstruction for Argentina's 1985 mine-warfare force. It assigns six active 850-tonne ships with Argentine geographic names and registry years from 1970 to 1983.",
    canon:"Argentina's complete regional fleet includes a mine-warfare branch, and every vessel larger than a harbor craft receives an Argentine name. The six-active-vessel total, Patagonia designation, individual names, 1970–1983 commissioning sequence, 850-tonne full-load displacement, and diesel-or-gas-turbine propulsion are registered extrapolations pending the rebuilt hull registry. Dimensions, speed, hull materials, sweep and hunting systems, disposal craft, sensors, weapons, crew, builders, refits, Falklands deployments, losses, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The working lineage supplied mine hunting, sweeping, route survey, and clearance for naval bases, commercial ports, coastal passages, and amphibious approaches.</p>"},
      {id:"registry",title:"Working registered ships",html:argentineSupportRoster([["San Blas","1970","Working active allocation"],["San Matías","1972","Working active allocation"],["San Jorge","1975","Working active allocation"],["San Borombón","1978","Working active allocation"],["San Sebastián","1980","Working active allocation"],["Santa Catalina","1983","Working active allocation"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 850 tonnes full load and diesel or gas-turbine propulsion. Hull material, acoustic and magnetic treatment, sweep gear, mine-hunting sonar, disposal vehicles, speed, dimensions, and complement remain open.</p>"},
      {id:"missions",title:"Mine-warfare missions",html:"<p>The ships cleared ports and channels, surveyed routes, marked safe water, and supported convoy and amphibious movements.</p>"},
      {id:"geography",title:"South Atlantic geography",html:"<p>Puerto Belgrano, Patagonian ports, the approaches to Tierra del Fuego, and waters around the Falklands created long, exposed clearance obligations.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Argentine bays, gulfs, and coastal places. The names satisfy the established national requirement but remain extrapolated hull assignments.</p>"},
      {id:"war",title:"Falklands–Malvinas War",html:"<p>Mine clearance, route survey, and port protection were part of the Argentine naval system during the 1985 war. Named deployments, equipment blocks, losses, and individual actions remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-t6m2p writer=g kind=revision created=2026-08-15T14:31:00-06:00 --><p>The working registry assigns six active mine-warfare vessels. The total, hull roster, and individual statuses remain provisional; readiness, stations, and detailed assignments are open.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...argentineSupportRelated,{href:"cabo-san-antonio-class-landing-ship.html",kicker:"Supported amphibious force",label:"Cabo San Antonio Class"},{href:"bahia-class-assault-transport.html",kicker:"Supported amphibious force",label:"Bahía Class"}],
    facts:[["Type","Mine-countermeasure vessel"],["Working ships","6 provisional"],["Working introduction","1970–1983"],["Working full load","850 t"],["Working propulsion","Diesel or gas turbine"],["Naming practice","Argentine geography"],["Active, 1985","6 provisional"],["Class-detail status","Registered extrapolation"]]
  }),

  "argentine-fleet-auxiliaries": argentineSupportArticle({
    title:"Argentine fleet auxiliaries",type:"Major auxiliary force",period:"1970–1985",
    lead:"Argentina's complete regional fleet included a major auxiliary branch. The working register reconstructs it as eight active ships in 1985 and assigns them Argentine regional and port names, 18,000-tonne full-load displacement, diesel or steam-turbine propulsion, and registry years from 1970 to 1984.",
    canon:"Argentina's complete regional fleet includes major auxiliaries, and every vessel larger than a harbor craft receives an Argentine name. The eight-active-ship total, individual names, 1970–1984 commissioning sequence, common 18,000-tonne full-load displacement, and diesel-or-steam-turbine propulsion are registered extrapolations pending the rebuilt hull registry. Division among oilers, stores ships, repair ships, tenders and other types, dimensions, speed, transfer stations, cargo capacities, aviation, crew, builders, refits, Falklands deployments, losses, and detailed service histories remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The fleet balance counts eight major replenishment and repair ships as one auxiliary category. The working register does not divide the hulls into functional subclasses.</p>"},
      {id:"registry",title:"Working registered ships",html:argentineSupportRoster([["Patagonia","1970","Working active allocation"],["Bahía Blanca","1972","Working active allocation"],["Punta Alta","1974","Working active allocation"],["Comodoro Rivadavia","1976","Working active allocation"],["Puerto Deseado","1978","Working active allocation"],["Ushuaia","1980","Working active allocation"],["San Julián","1982","Working active allocation"],["Río Gallegos","1984","Working active allocation"]])},
      {id:"design",title:"Working design",html:"<p>The register assigns 18,000 tonnes full load and diesel or steam-turbine machinery. The uniform figure may represent a planning standard rather than one literal class; individual functions and dimensions remain open.</p>"},
      {id:"replenishment",title:"Replenishment",html:"<p>Fuel, ammunition, stores, water, spares, medical supplies, and aviation support sustained the carrier, cruiser, escorts, submarines, and amphibious force.</p>"},
      {id:"repair",title:"Repair and tender work",html:"<p>Major auxiliaries also supported workshops, salvage, submarine tending, mobile maintenance, and distant bases. Hull-by-hull assignments remain open.</p>"},
      {id:"names",title:"Naming",html:"<p>The working roster uses Patagonia, naval ports, and southern cities, expressing the fleet's South Atlantic geography. Individual assignments remain extrapolated.</p>"},
      {id:"war",title:"Falklands–Malvinas War",html:"<p>Auxiliary endurance, repair access, fuel movement, and dispersed resupply shaped Argentina's ability to concentrate near the islands. Named deployments, damage, losses, and individual missions remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-u8c4n writer=g kind=revision created=2026-08-15T14:32:00-06:00 --><p>The working registry assigns eight active major auxiliaries. The total, hull roster, and individual statuses remain provisional; roles, readiness, and deployments are open.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...argentineSupportRelated,{href:"ara-veinticinco-de-mayo.html",kicker:"Sustained carrier force",label:"ARA Veinticinco de Mayo"},{href:"ara-almirante-brown.html",kicker:"Sustained flagship",label:"ARA Almirante Brown"},{href:"operation-nachtbruecke.html",kicker:"Covert supplementary logistics",label:"Operation Nachtbrücke"}],
    facts:[["Category","Major fleet auxiliaries"],["Working ships","8 provisional"],["Working introduction","1970–1984"],["Working full load","18,000 t"],["Working propulsion","Diesel or steam turbine"],["Naming practice","Argentine regions and ports"],["Active, 1985","8 provisional"],["Hull-detail status","Registered extrapolation"]]
  })
});
