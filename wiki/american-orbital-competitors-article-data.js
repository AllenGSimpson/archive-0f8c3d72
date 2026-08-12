window.deepArticles = window.deepArticles || {};

const orbitalCompetitorSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature American corporate space system and Frontier's functional monopoly"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — post-1990 corporate execution and reusable orbital transport"},
  {href:"../transcript.md",label:"Master Transcript, Turns 744–777 — nominal competitors, specialist markets, and corporate continuity"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open carrier names, ownership, fleets, licenses, and market shares"}
];

const orbitalCompetitorLandscape = {
  src:"assets/diagrams/american-corporate-space-network.svg",
  alt:"Network diagram of the American corporate space economy centered upon Frontier Orbital Lines",
  caption:"Specialists can own vehicles, contracts, and technical niches while purchasing traffic, depot, rescue, insurance, or integration services from the dominant network"
};

const orbitalCompetitorArticle = config => ({
  category:config.category || "Aerospace industries",
  eyebrow:config.eyebrow || "United States · orbital transport competition",
  infoboxKicker:config.infoboxKicker || "Specialist carrier sector",
  landscape:orbitalCompetitorLandscape,
  ...config,
  sources:orbitalCompetitorSources,
  categories:config.categories || ["American space economy","Commercial spaceflight","Aerospace industries","1990s"]
});

Object.assign(window.deepArticles, {
  "liberty-orbital-services":orbitalCompetitorArticle({
    title:"Liberty Orbital Services",
    infoboxKicker:"Provisional name · conservative second carrier",
    lead:"Liberty Orbital Services is the provisional archive name for the conservative carrier consortium that became the principal institutional alternative to Frontier Orbital Lines after the Open Door Depression. It concentrated upon automated freight, federal carriage, standardized payloads, and low-risk orbital contracts rather than attempting to reproduce Frontier's complete crewed, lunar, and planetary network.",
    canon:"A substantial second carrier, its conservative operating policy, automated-freight and government-contract emphasis, genuine licensed capability, and dependence upon common American ranges, traffic authority, insurance, rescue, and some Frontier-centered infrastructure are established. Liberty Orbital Services is not a fixed legal name. Its constituent firms, headquarters, incorporation, owners, managers, launch systems, fleet, market share, failures, mergers, and relationship to Frontier remain open.",
    sections:[
      {id:"name",title:"A provisional designation",html:"<p><em>Liberty Orbital Services</em> appears in contemporary planning and industry discussion, but the surviving record does not establish whether it was a corporate title, consortium brand, press shorthand, or name later replaced in a reorganization. The archive retains it as a searchable working designation rather than converting uncertainty into fact.</p>"},
      {id:"formation",title:"Formation after the ownership crisis",html:"<p>The 1990 depression left launch teams, contractors, ranges, payload customers, and federal missions without one stable public operating structure. Banks, established aerospace firms, and government-contract specialists assembled a lower-risk carrier around freight that still had to fly regardless of political fashion.</p><p>Its institutional promise was continuity without Frontier's expansive corporate mythology.</p>"},
      {id:"business",title:"The conservative carrier",html:"<p>The consortium favored scheduled automated cargo, standardized payload integration, replenishment, government stores, and repeatable missions with an identified customer. It avoided making its solvency depend upon tourism, speculative settlement, or winning the public Mars narrative.</p><p>Conservatism described its contract portfolio and capital policy, not technological backwardness.</p>"},
      {id:"government",title:"Federal carriage",html:"<p>Defense, weather, navigation, scientific, communications, and station-support contracts gave the carrier a durable floor. Federal agencies valued a second licensed operating organization even where its flights used public tracking or infrastructure shared with Frontier.</p><p>Emergency requisition, range safety, and strategic-payload authority remained public powers.</p>"},
      {id:"competition",title:"Competition with Frontier",html:"<p>Liberty could bid against <a href='frontier-orbital-lines.html'>Frontier</a> for a bounded freight contract and force disclosure of rates, reliability, or subcontracting. It could not immediately substitute for Frontier's integrated crew service, lunar route, depots, rescue arrangements, planetary planning, and large operating community.</p><p>The rivalry was therefore commercially real and strategically incomplete.</p>"},
      {id:"network",title:"Dependence upon the network",html:"<p>Launch permission, orbital traffic, insurance history, certified interfaces, tracking, collision warning, rescue, and destination agreements formed barriers larger than ownership of a rocket. Liberty reduced the danger of one corporate operator but still lived inside the same national technical and legal system.</p>"},
      {id:"status",title:"Status by 2000",html:"<p>By 2000 the consortium was the most credible American alternative for ordinary automated carriage and selected public missions. Its existence allowed Congress to demand competition and reserve capacity without supporting a second complete cislunar civilization.</p><p>Whether it survived under this name into the later 2000s remains open.</p>"}
    ],
    related:[{href:"american-orbital-carrier-industry.html",kicker:"Parent sector",label:"American Orbital-Carrier Industry"},{href:"frontier-functional-monopoly.html",kicker:"Market structure",label:"Frontier's Functional Monopoly"},{href:"automated-orbital-freight-united-states.html",kicker:"Principal niche",label:"Automated Orbital Freight"},{href:"commercial-orbital-transportation-act.html",kicker:"Licensing basis",label:"Commercial Orbital Transportation Act"},{href:"national-orbital-carrier.html",kicker:"Frontier charter",label:"National Orbital Carrier"}],
    facts:[["Archive name","Liberty Orbital Services · provisional"],["Established role","Conservative second carrier"],["Principal markets","Automated freight and government carriage"],["Legal exclusivity","None"],["Independent licensed capability","Yes"],["Complete cislunar network","No"],["Public controls","Range, traffic, rescue, requisition, and strategic review"],["Constituent firms and fleet","Open"]]
  }),

  "american-small-payload-launch-industry":orbitalCompetitorArticle({
    title:"American small-payload launch industry",
    infoboxKicker:"Microsatellite and bounded-payload carriers",
    lead:"The American small-payload launch industry is the group of licensed carriers and vehicle firms serving microsatellites, scientific instruments, technology demonstrators, university payloads, replacement relays, and other missions too small or urgent to justify a complete Frontier transport movement. It became one of the clearest areas in which specialist competitors could lead a real market without challenging Frontier's wider network position.",
    canon:"A genuine small-payload and microsatellite niche, specialist carriers, use by scientific, educational, commercial, and public customers, competition through schedule and payload integration, common regulatory dependencies, and coexistence with Frontier's monopoly are established. Firm names, vehicle families, payload classes, launch sites, prices, flight rates, failures, and market shares remain open.",
    sections:[
      {id:"market",title:"The payload left behind by integration",html:"<p>Large carriers optimized manifests, station service, crew movement, and bulk freight. A customer with one compact satellite could wait for a shared slot, accept the principal carrier's interfaces, or purchase a smaller dedicated launch with greater control over orbit and date.</p>"},
      {id:"customers",title:"Customers",html:"<p>Universities, weather services, mapping firms, communications companies, agricultural networks, scientific institutions, military offices, and component manufacturers all purchased bounded missions. Technology demonstrators and replacement relays often valued schedule more than the lowest price per unit mass.</p>"},
      {id:"vehicles",title:"Specialized vehicles and integration",html:"<p>Small launchers, upper stages, air-launched systems, compact orbital transfer vehicles, and rideshare deployment hardware occupied overlapping markets. A firm might control only one stage or integration service and still possess a durable technical franchise.</p><p>No single canonical vehicle roster has been fixed.</p>"},
      {id:"competition",title:"A market where specialists could lead",html:"<p>Frontier could carry small payloads, but its complete operating system was not always economical for them. Specialists competed through short integration cycles, standardized buses, dedicated orbits, regional launch sites, and relationships with scientific customers.</p>"},
      {id:"dependencies",title:"Shared dependencies",html:"<p>Independent flight still required federal licensing, tracking, range safety, orbital registration, collision coordination, insurance, and recovery or disposal plans. A small vehicle reduced the scale of the mission, not the public responsibility attached to placing an object in orbit.</p>"},
      {id:"foreign",title:"Foreign and associated customers",html:"<p>Small-payload firms could sell launches to friendly or commercially acceptable foreign customers without giving those governments strategic transport dependence. Sensitive imaging, communications, navigation, and military payloads remained subject to federal review.</p>"},
      {id:"place",title:"Place in the functional monopoly",html:"<p>The sector demonstrates why the word <em>functional</em> matters. Frontier did not possess every launch contract, vehicle, engineer, or customer. It remained indispensable when a mission expanded from one payload into inhabited transport, station logistics, rescue, lunar service, or planetary integration.</p>"}
    ],
    related:[{href:"american-orbital-carrier-industry.html",kicker:"Parent sector",label:"American Orbital-Carrier Industry"},{href:"frontier-functional-monopoly.html",kicker:"Market context",label:"Frontier's Functional Monopoly"},{href:"american-responsive-polar-launch-services.html",kicker:"Overlapping niche",label:"Responsive and Polar Launch Services"},{href:"international-orbital-object-registry.html",kicker:"Registration system",label:"International Orbital-Object Registry"},{href:"american-space-data-industry.html",kicker:"Payload services",label:"American Space-Data Industry"}],
    facts:[["Mature period","1990s onward"],["Principal payloads","Microsatellites, instruments, demonstrators, and replacement relays"],["Principal advantage","Schedule and dedicated integration"],["Customers","Public, scientific, educational, and commercial"],["Frontier participation","Present but not exclusive"],["Public requirements","License, range safety, registration, tracking, and disposal"],["Complete firm and vehicle register","Open"]]
  }),

  "american-responsive-polar-launch-services":orbitalCompetitorArticle({
    title:"American responsive and polar launch services",
    infoboxKicker:"Time-sensitive and high-inclination orbital access",
    lead:"American responsive and polar launch services are the specialist carrier operations built around short-notice payloads, replacement spacecraft, unusual inclinations, and high-latitude orbits. Their value lay less in tonnage than in reaching an orbit or deadline poorly matched to the principal passenger, freight, and cislunar schedules.",
    canon:"Rapid-response and polar launch as genuine specialist niches, public and commercial replacement missions, regional launch-complex expertise, schedule and orbital geometry as competitive advantages, and continuing federal traffic and strategic authority are established. Providers, launch sites, readiness standards, vehicles, response times, military tasking, prices, and accident history remain open.",
    sections:[
      {id:"geometry",title:"Orbital geometry as a market",html:"<p>Polar, sun-synchronous, and other high-inclination missions impose different launch azimuths, range-safety corridors, tracking demands, and recovery problems from the main eastward traffic. A regional operator could turn geographic and procedural familiarity into a business.</p>"},
      {id:"responsive",title:"Responsive launch",html:"<p>Weather, communications, navigation, reconnaissance, and traffic systems sometimes required a replacement before a normal shared manifest became available. Responsive service maintained prepared hardware, integration teams, documentation, and range relationships for that contingency.</p><p><em>Responsive</em> did not mean launch without inspection or public authorization.</p>"},
      {id:"customers",title:"Public and commercial customers",html:"<p>The Aerospace Force and civil agencies purchased readiness for strategic or safety networks. Commercial customers used the same providers for replacement constellations, time-sensitive demonstrations, and contracts whose value depended upon a particular season or observing geometry.</p>"},
      {id:"regional",title:"Regional launch complexes",html:"<p>A specialist might be organized around a northern, coastal, island, or otherwise favorable range rather than a nationally complete fleet. Local tracking, weather, recovery, and transport labor created an industrial constituency distinct from the large orbital ports.</p><p>The final American range map remains open.</p>"},
      {id:"limits",title:"The limits of readiness",html:"<p>Payload preparation, orbital coordination, weather, export control, and safety could not be abolished by storing a fueled vehicle. The industry sold reduced institutional delay and a practiced route through those constraints.</p>"},
      {id:"security",title:"Strategic ambiguity",html:"<p>A sudden replacement launch could restore a damaged civil relay or alter military surveillance during a crisis. Notification, registration, and direct technical channels helped distinguish routine replenishment from preparation for wider confrontation.</p>"},
      {id:"market",title:"A protected specialist franchise",html:"<p>Frontier remained capable of many such missions, but Congress and strategic planners valued providers whose survival did not depend upon Frontier assigning capacity. That reserve strengthened sovereign choice without creating an independent alternative for crewed lunar or planetary transport.</p>"}
    ],
    related:[{href:"american-small-payload-launch-industry.html",kicker:"Adjacent sector",label:"Small-Payload Launch Industry"},{href:"american-orbital-carrier-industry.html",kicker:"Parent sector",label:"American Orbital-Carrier Industry"},{href:"space-crisis-notification.html",kicker:"Crisis signaling",label:"Space-Crisis Notification"},{href:"sovereign-space-transport-redundancy.html",kicker:"Strategic principle",label:"Sovereign Space-Transport Redundancy"},{href:"american-space-data-industry.html",kicker:"Constellation customers",label:"American Space-Data Industry"}],
    facts:[["Mature period","1990s onward"],["Principal markets","Short-notice replacement and high-inclination launch"],["Competitive basis","Schedule, geography, readiness, and orbital geometry"],["Public customers","Aerospace Force and civil agencies"],["Launch without federal authority","No"],["Strategic role","Specialist reserve and constellation recovery"],["Providers and range map","Open"]]
  }),

  "automated-orbital-freight-united-states":orbitalCompetitorArticle({
    title:"Automated orbital freight in the United States",
    infoboxKicker:"Uncrewed cargo carriage and standardized logistics",
    lead:"Automated orbital freight in the United States is the uncrewed carriage of standardized cargo, consumables, station stores, propellant, construction equipment, and replacement hardware through the post-1990 corporate space economy. It supported both Frontier's integrated logistics and an independent conservative-carrier market because routine freight did not require every capability associated with passenger, rescue, lunar, or planetary service.",
    canon:"Automated freight as a major post-1990 market, standardized cargo and documentation, Liberty's emphasis upon conservative carriage, Frontier's Caravan and heavy-transport systems, government and station customers, and shared traffic and safety authority are established. Common container specifications, carrier shares, vehicle names outside Frontier, schedules, prices, loss rates, depots, and liability cases remain open.",
    sections:[
      {id:"cargo",title:"What moved without a crew",html:"<p>Food, gases, water-treatment supplies, laboratory material, spare parts, tools, clothing, mail, structural elements, tanks, machinery, and propellant could travel without passenger accommodation. Uncrewed carriage accepted slower handling or narrower abort options in exchange for more useful payload.</p>"},
      {id:"standards",title:"Standard cargo rather than a standard company",html:"<p>Containers, mass properties, hazardous-material declarations, attachment points, data records, customs documents, and destination acceptance made freight transferable among vehicles and operators. Standardization lowered switching costs without making every carrier equally capable.</p>"},
      {id:"carriers",title:"Two operating traditions",html:"<p><a href='frontier-caravan.html'>Frontier Caravan</a> joined automated freight to the dominant carrier's stations, tugs, depots, and lunar schedule. The provisionally named <a href='liberty-orbital-services.html'>Liberty consortium</a> treated repeatable automated carriage as its principal business rather than one division of a larger civilizational program.</p>"},
      {id:"customers",title:"Contract customers",html:"<p>Federal services, Columbia, commercial habitats, scientific institutions, lunar-resource firms, satellite operators, and foreign installations all purchased cargo movement. Government minimum-carriage and reserve contracts helped keep more than one licensed organization operational.</p>"},
      {id:"traffic",title:"Traffic and destination control",html:"<p>An uncrewed vehicle still entered occupied approach corridors and could endanger a station. Traffic authorities and destination commanders retained the right to delay, inspect, redirect, quarantine, or refuse a cargo movement.</p>"},
      {id:"loss",title:"Loss, delay, and liability",html:"<p>Automated freight made the loss of a vehicle less immediately catastrophic than a passenger accident, but its cargo might be essential to life support or an expedition window. Contracts divided launch failure, late delivery, spoiled stores, contamination, destination refusal, and emergency diversion.</p>"},
      {id:"bulk",title:"From parcels to bulk lift",html:"<p>Early standardized freight and later <a href='frontier-heavy-transport.html'>reusable heavy transport</a> belonged to one logistics continuum. Rockets carried increasing construction and propellant mass; spaceplanes retained urgent return, repair crews, high-value cargo, and people.</p>"}
    ],
    related:[{href:"liberty-orbital-services.html",kicker:"Second carrier",label:"Liberty Orbital Services"},{href:"frontier-caravan.html",kicker:"Frontier system",label:"Frontier Caravan"},{href:"frontier-heavy-transport.html",kicker:"Bulk-lift successor",label:"Frontier Heavy Transport"},{href:"american-orbital-carrier-industry.html",kicker:"Parent sector",label:"American Orbital-Carrier Industry"},{href:"orbital-port-columbia.html",kicker:"Principal port",label:"Orbital Port Columbia"}],
    facts:[["Mature period","1990s onward"],["Crew aboard","Normally none"],["Principal cargo","Stores, equipment, propellant, structures, and replacement hardware"],["Principal carriers","Frontier system and conservative second carrier"],["Competitive basis","Repeatability, standardization, schedule, and price"],["Public authority","Traffic, inspection, strategic review, and emergency diversion"],["Complete standards and carrier shares","Open"]]
  }),

  "american-independent-orbital-servicing":orbitalCompetitorArticle({
    title:"Independent orbital servicing in the United States",
    infoboxKicker:"Inspection, repair, recovery, and tug specialists",
    lead:"Independent orbital servicing in the United States is the specialist business of inspecting, repairing, repositioning, refueling, recovering, or safely disposing of spacecraft without owning the principal launch carrier or destination. Servicing firms occupied a genuine market between satellite manufacturers, insurers, station operators, orbital tugs, and Frontier's integrated maintenance system.",
    canon:"Independent servicing, orbital-tug and inspection niches, insurer and satellite-owner customers, Frontier participation without exclusivity, common rescue and traffic rules, and growing importance to a repairable space economy are established. Company names, tug fleets, licenses, stations, rates, contracts, salvage cases, accidents, and market concentration remain open.",
    sections:[
      {id:"service",title:"A repairable orbital economy",html:"<p>Reusable vehicles and expensive satellites created value in diagnosis, replacement, refueling, software recovery, relocation, and controlled disposal. A failed component no longer required automatic abandonment if a qualified operator could reach it safely.</p>"},
      {id:"customers",title:"Customers and payers",html:"<p>Satellite owners, insurers, manufacturers, habitat operators, government agencies, and courts or salvors could commission a service. The party benefiting from recovery was not always the party paying for the original launch.</p>"},
      {id:"craft",title:"Tugs, inspectors, and work teams",html:"<p>Uncrewed tugs handled routine repositioning and disposal. Crewed or remotely supervised vehicles performed inspection, repair, transfer, and complex recovery. Some specialists controlled craft; others supplied teams, tools, software, or one certified procedure.</p>"},
      {id:"frontier",title:"Competition beside Frontier",html:"<p>Frontier's spaceplanes, depots, traffic experience, and maintenance crews gave it a powerful servicing position. Independent firms survived where a customer wanted neutral inspection, a lower-cost tug, specialist hardware knowledge, or an insurer-approved alternative.</p>"},
      {id:"law",title:"Consent, salvage, and jurisdiction",html:"<p>Approach to a functioning spacecraft required consent or public authority. Distress, abandoned objects, dangerous debris, disputed ownership, and suspected sabotage complicated that rule. Registration and salvage law distinguished assistance from seizure.</p>"},
      {id:"safety",title:"Safety and rescue boundary",html:"<p>Commercial service could not displace the public rescue duty or traffic command. During immediate danger, the nearest capable craft might act first; payment, liability, and ownership were resolved after life and the shared orbit were secured.</p>"},
      {id:"strategic",title:"Dual-use capability",html:"<p>The same proximity control useful for repair could support inspection, seizure, or attack. Licensing, transponders, mission declarations, direct communication, and military review placed independent servicing inside the wider orbital-restraint system.</p>"}
    ],
    related:[{href:"orbital-tugs-tankers.html",kicker:"Technical craft",label:"Orbital Tugs and Tankers"},{href:"american-orbital-carrier-industry.html",kicker:"Parent transport sector",label:"American Orbital-Carrier Industry"},{href:"orbital-rescue-service.html",kicker:"Public duty",label:"Orbital Rescue Service"},{href:"extraterrestrial-abandonment-and-salvage.html",kicker:"Property law",label:"Abandonment and Salvage"},{href:"interjurisdictional-space-accident-investigation.html",kicker:"Neutral inquiry",label:"Interjurisdictional Accident Investigation"}],
    facts:[["Mature period","1990s onward"],["Principal functions","Inspection, repair, refueling, repositioning, recovery, and disposal"],["Customers","Owners, insurers, manufacturers, habitats, and government"],["Frontier role","Major provider but not exclusive"],["Public functions retained","Traffic command and rescue duty"],["Strategic concern","Proximity capability is dual-use"],["Company and tug roster","Open"]]
  })
});

const addOrbitalCompetitorRelated = (slug,items) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=article.related || [];
  for(const item of items) if(!article.related.some(existing=>existing.href===item.href)) article.related.push(item);
};

const competitorLinks = [
  {href:"liberty-orbital-services.html",kicker:"Conservative second carrier",label:"Liberty Orbital Services"},
  {href:"american-small-payload-launch-industry.html",kicker:"Specialist market",label:"Small-Payload Launch Industry"},
  {href:"american-responsive-polar-launch-services.html",kicker:"Specialist market",label:"Responsive and Polar Launch"},
  {href:"automated-orbital-freight-united-states.html",kicker:"Freight market",label:"Automated Orbital Freight"},
  {href:"american-independent-orbital-servicing.html",kicker:"Service market",label:"Independent Orbital Servicing"}
];

addOrbitalCompetitorRelated("american-orbital-carrier-industry",competitorLinks);
addOrbitalCompetitorRelated("frontier-functional-monopoly",competitorLinks);

const carrierIndustry=window.deepArticles["american-orbital-carrier-industry"];
if(carrierIndustry){
  const frontierSection=carrierIndustry.sections?.find(section=>section.id==="frontier");
  if(frontierSection) frontierSection.html="<p><a href='frontier-orbital-lines.html'>Frontier Orbital Lines</a> pursued scheduled crew, cargo, servicing, lunar, and planetary markets. The provisionally named <a href='liberty-orbital-services.html'><em>Liberty Orbital Services</em></a> consortium concentrated on automated freight and government contracts.</p><p>Other firms occupied bounded <a href='american-small-payload-launch-industry.html'>small-payload</a>, <a href='american-responsive-polar-launch-services.html'>responsive and polar launch</a>, and <a href='american-independent-orbital-servicing.html'>servicing</a> markets.</p>";
  const nichesSection=carrierIndustry.sections?.find(section=>section.id==="niches");
  if(nichesSection) nichesSection.html="<p>Independent carriers could lead in microsatellites, <a href='american-responsive-polar-launch-services.html'>polar and rapid-response launch</a>, <a href='automated-orbital-freight-united-states.html'>automated freight</a>, scientific missions, one engine family, a regional launch complex, or <a href='american-independent-orbital-servicing.html'>orbital servicing</a>. Their businesses were genuine even when they could not offer an integrated human lunar or planetary service.</p>";
}
