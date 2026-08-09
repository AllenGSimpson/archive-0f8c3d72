window.deepArticles = window.deepArticles || {};

const spaceIndustrySources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — American corporate space system and mature extraterrestrial economy"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — commercial orbital transport, lunar industry, and the post-1990 settlement"},
  {href:"../transcript.md",label:"Master Transcript — American carrier, resource, habitat, data, and subsidiary sectors"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open company rosters, ownership, charters, and vehicle specifications"}
];

const spaceIndustriesLandscape = {src:"assets/diagrams/american-corporate-space-network.svg",alt:"Network diagram of the American corporate space economy",caption:"Legally separate carriers, resource firms, habitat operators, data companies, and financial institutions formed one Frontier-centered operating network"};

const spaceIndustryArticle = config => ({
  category:"American spaceflight",
  eyebrow:"United States · corporate space economy",
  infoboxKicker:"Post-1990 American space industry",
  landscape:spaceIndustriesLandscape,
  ...config,
  sources:[...spaceIndustrySources,...(config.additionalSources || [])],
  categories:config.categories || ["American space economy","Commercial spaceflight","Corporate systems","1990s"]
});

Object.assign(window.deepArticles, {
  "american-orbital-carrier-industry":spaceIndustryArticle({
    title:"American orbital-carrier industry",category:"Aerospace industries",infoboxKicker:"Licensed orbital transport sector",
    lead:"The American orbital-carrier industry is the licensed group of companies that transported crews, automated freight, satellites, propellant, and specialist payloads after civil spaceflight passed from federal ownership to corporate execution. Frontier Orbital Lines became the sector's functional center, while smaller carriers remained profitable in bounded markets without reproducing its complete transport network.",
    canon:"Commercial licensing from 1985, the post-1990 transfer of execution, Frontier's principal-carrier position, a real but bounded specialist sector, shared dependence upon ranges, traffic systems, depots, insurers, and federal regulation, foreign commercial service, and functional rather than legal monopoly are established. The full carrier register, provisional Liberty Orbital Services name, ownership networks, licenses, fleets, routes, revenues, failures, and mergers remain open.",
    sections:[
      {id:"origins",title:"From licensed experiment to national infrastructure",html:"<p>The 1985 Commercial Orbital Transportation Act admitted private spaceplane operators into a system still dominated by federal vehicles and facilities. The 1990 depression then weakened public ownership while leaving ranges, stations, trained crews, engineering staffs, and flight hardware available for corporate use.</p><p>Carriers became the institutions through which Congress could still purchase routine access to orbit.</p>"},
      {id:"frontier",title:"Frontier and the conservative carrier",html:"<p><a href='frontier-orbital-lines.html'>Frontier Orbital Lines</a> pursued scheduled crew, cargo, servicing, lunar, and planetary markets. A second conservative consortium concentrated on automated freight and government contracts; contemporary planning literature sometimes calls it <em>Liberty Orbital Services</em>, but no final corporate title is established.</p><p>Other firms occupied narrower regional or technical niches.</p>"},
      {id:"niches",title:"Specialist competitors",html:"<p>Independent carriers could lead in microsatellites, polar launches, rapid-response payloads, automated freight, suborbital work, scientific missions, one engine family, or a regional launch complex. Their businesses were genuine even when they could not offer an integrated human lunar or planetary service.</p>"},
      {id:"network",title:"Shared infrastructure and entry barriers",html:"<p>Every serious operator needed some combination of federal range access, tracking, traffic control, trained crews, certified interfaces, insurance history, depots, rescue arrangements, maintenance organizations, and station agreements. Those shared dependencies made the market a network industry rather than a collection of interchangeable vehicle manufacturers.</p>"},
      {id:"law",title:"Licensing and public command",html:"<p>The United States Aerospace Force and civil authorities retained launch permission, range safety, orbital traffic, rescue, strategic-payload review, treaty responsibility, and emergency requisition. A corporate carrier owned vehicles and contracts, not sovereign airspace, orbit, or exemption from public command during an emergency.</p>"},
      {id:"politics",title:"Competition as congressional method",html:"<p>Congress used subcontracting rules, common interfaces, regional procurement, loan guarantees, and carriage requirements to distribute capability and profit. Such measures could strengthen rivals without removing Frontier from missions that depended upon its station, depot, or rescue network.</p>"},
      {id:"foreign",title:"Service beyond the American sphere",html:"<p>American carriers sometimes served the Raumhafen, Resolution, Stella Maris, or foreign scientific customers when a purchased slot cost less than sovereign launch. Foreign governments distinguished commercial optimization from strategic dependence by preserving enough national lift to operate without American service during a crisis.</p>"},
      {id:"structure",title:"Industry structure by 2000",html:"<p>By 2000 Frontier functioned as the dominant utility, a conservative second carrier and several specialists provided political and commercial alternatives, and suppliers moved among all of them. Corporate and family links reduced the likelihood that competition would become destructive enough to interrupt the national transport system.</p>"}
    ],
    related:[{href:"frontier-functional-monopoly.html",kicker:"Market structure",label:"Frontier Functional Monopoly"},{href:"national-orbital-carrier.html",kicker:"Strategic charter",label:"National Orbital Carrier"},{href:"commercial-orbital-transportation-act.html",kicker:"Enabling law",label:"Commercial Orbital Transportation Act"},{href:"american-corporate-space-system.html",kicker:"Wider economy",label:"American Corporate Space System"}],
    facts:[["Licensed from","1985"],["Mature period","1990s–2000s"],["Principal carrier","Frontier Orbital Lines"],["Other carriers","One conservative consortium and several specialists"],["Principal markets","Crew, cargo, satellites, servicing, and government contracts"],["Public authority","Aerospace Force and federal regulators"],["Market form","Functional network monopoly with legal competition"],["Complete carrier roster","Open"]]
  }),

  "american-lunar-resource-industry":spaceIndustryArticle({
    title:"American lunar-resource industry",category:"Extractive industries",infoboxKicker:"Lunar mining, utilities, and propellant sector",
    lead:"The American lunar-resource industry is the group of mining, utility, chemical, construction-material, and depot companies that supplied Kennedy Station, commercial habitats, orbital transport, and planetary expeditions after 1990. It turned lunar ice, oxygen-bearing material, metals, regolith, power, and prepared landing sites into contracted services rather than one federal base function.",
    canon:"The corporate operation of ice extraction, oxygen and hydrogen production, construction materials, landing pads, power systems, and propellant depots; sales beyond one carrier; support for Kennedy Station and the Mars economy; federal strategic restrictions; and incomplete terrestrial self-sufficiency are established. Company names, concessions, extraction sites, reserves, ownership, production, prices, labor totals, accidents, and exact property law remain open.",
    sections:[
      {id:"inheritance",title:"Federal inheritance after 1990",html:"<p>Kennedy Lunar Station, prospecting records, transport experience, test plants, and engineering teams survived the collapse of complete federal program ownership. Companies received leases, contracts, licensed technology, distressed equipment, and access to public navigation and rescue systems.</p>"},
      {id:"products",title:"Products and services",html:"<p>Operators extracted or processed ice, oxygen-bearing regolith, hydrogen feedstocks, shielding material, aggregate, metals, and industrial gases. Other firms built landing pads, buried structures, power systems, tanks, pipelines, and propellant depots.</p><p>Not every product was economical in every location; the industry sold avoided Earth-launch mass as much as raw material.</p>"},
      {id:"customers",title:"A market larger than Frontier",html:"<p>Frontier was the largest transport customer but not the sole buyer. Kennedy Station, habitat companies, federal installations, scientific institutions, foreign customers permitted by strategic law, and the American Mars consortium all purchased lunar products or utility service.</p>"},
      {id:"contracts",title:"Concessions, leases, and offtake contracts",html:"<p>Long leases and use concessions gave firms confidence to install machinery without converting occupation into national sovereignty. Transport companies and stations often financed expansion through advance purchase or minimum-volume contracts for oxygen, propellant, shielding, or structural material.</p>"},
      {id:"strategic",title:"Strategic ownership and export limits",html:"<p>Washington treated propellant plants, major power systems, navigation facilities, and large deposits as strategic infrastructure. Ordinary sale did not imply permission to transfer controlling ownership, reserve capacity, sensitive process equipment, or crisis access to a foreign buyer.</p>"},
      {id:"labor",title:"Labor and settlement",html:"<p>Resource work sustained surveyors, drill crews, chemical operators, mechanics, construction workers, medical staff, and their support population. Rotational employment gradually gave way to longer residence as workshops, clinics, schools, and household accommodation improved.</p>"},
      {id:"limits",title:"Limits of lunar independence",html:"<p>The sector reduced dependence on terrestrial bulk mass but did not make the Moon autarkic. Precision electronics, advanced medicine, specialized tools, replacement parts, and many biological supplies continued to arrive from Earth.</p>"},
      {id:"planetary",title:"The planetary multiplier",html:"<p>Lunar propellant, tanks, shielding, and structural materials lowered the cost of high-orbit construction and Mars departure. Each new transport route created customers for resource firms; each new plant made the next route more credible.</p>"}
    ],
    related:[{href:"kennedy-lunar-station.html",kicker:"Principal settlement",label:"Kennedy Lunar Station"},{href:"frontier-lunar-services.html",kicker:"Transport customer",label:"Frontier Lunar Services"},{href:"american-mars-consortium.html",kicker:"Planetary customer",label:"American Mars Consortium"},{href:"extraterrestrial-claims.html",kicker:"Legal framework",label:"Extraterrestrial Claims"}],
    facts:[["Mature period","1990s onward"],["Principal products","Ice, oxygen, hydrogen, materials, power, and propellant"],["Principal customers","Stations, carriers, habitats, government, and Mars consortium"],["Legal instruments","Leases, concessions, and offtake contracts"],["Strategic controls","Ownership, reserve capacity, and foreign access"],["Settlement effect","Longer-duration industrial population"],["Terrestrial dependence","Precision goods and medicine remain imported"],["Company roster and output","Open"]]
  }),

  "american-orbital-habitat-industry":spaceIndustryArticle({
    title:"American orbital-habitat industry",category:"Real estate and infrastructure",infoboxKicker:"Commercial station and settlement operators",
    lead:"The American orbital-habitat industry is the group of companies that owned, leased, or operated laboratories, worker housing, clinics, industrial bays, short-stay accommodation, and other occupied modules in American space. Its growth separated the ownership of destinations from the carrier transporting their occupants and from the federal authority governing traffic and emergencies.",
    canon:"Commercial laboratories, worker housing, clinics, industrial modules, accommodation and possible tourism; Frontier Annex as an early model; separate transport and destination ownership; common technical interfaces; federal emergency and jurisdictional authority; and growth into lunar and planetary facilities are established. Firms, property forms, rents, populations, hotel brands, station registers, labor law, accidents, and the scale of early tourism remain open.",
    sections:[
      {id:"origins",title:"From tenant modules to habitat companies",html:"<p>Private laboratories and leased workspaces initially occupied federal stations. The <a href='frontier-annex.html'>Frontier Annex</a>, assembled beside Columbia in 1994–96, demonstrated that a commercial estate could be privately financed while remaining inside a publicly commanded orbital port.</p>"},
      {id:"property",title:"Ownership without sovereignty",html:"<p>A company could own equipment, pressure vessels, interior improvements, or a leasehold. It did not own the orbit, approach corridor, shared life support, rescue obligation, or right to exclude federal emergency personnel.</p>"},
      {id:"uses",title:"Laboratories, housing, medicine, and industry",html:"<p>Operators provided research suites, worker quarters, clinics, meeting rooms, payload preparation, small manufacturing, storage, kitchens, hygiene, recreation, and short-stay rooms. Tourist proposals existed, but professional and industrial residents supplied the dependable early market.</p>"},
      {id:"interfaces",title:"Technical interdependence",html:"<p>Pressure, power, atmosphere, thermal control, docking, data, fire response, and evacuation depended upon common standards. A habitat could be separately branded and financed while remaining physically incapable of ignoring the station around it.</p>"},
      {id:"employment",title:"Carrier, landlord, and employer",html:"<p>The organization transporting a resident was often different from the company leasing the room and from the institution employing the resident. Contracts divided responsibility for training, medical qualification, consumables, maintenance, delay, injury, and evacuation.</p>"},
      {id:"authority",title:"Emergency and criminal authority",html:"<p>Fire, collision threat, pressure loss, contamination, rescue, and evacuation placed commercial modules under public technical command. Ordinary leases, employment, and commercial disputes remained private or civil matters until safety, crime, treaty obligation, or strategic security intervened.</p>"},
      {id:"lunar",title:"From orbit to the Moon and Mars",html:"<p>The same business model spread to lunar worker accommodation, private clinics, laboratories, and consortium-owned Mars modules. Greater distance increased the importance of local utilities and common emergency agreements while making carrier delay a routine contractual risk.</p>"},
      {id:"social",title:"A corporate residential society",html:"<p>By 2000 occupied American facilities contained overlapping communities of federal officers, carrier crews, tenant employees, scientists, contractors, medical workers, and dependents. No single employer governed the whole settlement even when one carrier controlled most transport.</p>"}
    ],
    related:[{href:"frontier-annex.html",kicker:"Early model",label:"Frontier Annex"},{href:"orbital-port-columbia.html",kicker:"Public host",label:"Orbital Port Columbia"},{href:"american-lunar-resource-industry.html",kicker:"Utility supplier",label:"Lunar Resource Industry"},{href:"extraterrestrial-settlement.html",kicker:"Settlement category",label:"Extraterrestrial Settlement"}],
    facts:[["Mature period","1990s onward"],["Principal properties","Labs, housing, clinics, industry, and accommodation"],["Early model","Frontier Annex"],["Transport","Purchased separately from residence"],["Technical basis","Common pressure, power, docking, and emergency standards"],["Public authority","Traffic, safety, rescue, crime, and treaty jurisdiction"],["Principal residents","Workers, researchers, crews, and dependents"],["Company roster and property forms","Open"]]
  }),

  "american-space-data-industry":spaceIndustryArticle({
    title:"American space-data industry",category:"Information industries",infoboxKicker:"Communications, navigation, software, and interoperability sector",
    lead:"The American space-data industry is the group of communications, navigation, scheduling, teleoperation, software, and systems-integration firms that connected separately owned spacecraft and habitats after 1990. It made the fragmented corporate space economy operable by selling reliable information exchange while preserving a contest between closed integrated systems and paid interoperability.",
    canon:"Corporate relays, navigation, scheduling, teleoperation, proprietary mission software, closed integrated suppliers, interoperability firms, data rights, service to the Mars program, and federal security and traffic authority are established. Company names, networks, protocols, frequencies, contracts, software packages, cybersecurity incidents, market shares, and ownership remain open.",
    sections:[
      {id:"functions",title:"The invisible operating layer",html:"<p>Carriers and habitats required relay capacity, navigation references, traffic schedules, weather products, telemetry, time service, cargo records, maintenance histories, and mission software. A vehicle could be physically compatible yet commercially unusable if its operator could not exchange those records.</p>"},
      {id:"closed",title:"Closed integrated systems",html:"<p>Concord-style suppliers sold tightly controlled packages joining hardware, software, communications, and support. Their advantage was predictable behavior and clear responsibility; their disadvantage was dependence upon one vendor and difficulty connecting foreign or rival equipment.</p>"},
      {id:"bridges",title:"Interoperability firms",html:"<p>Bridge- and Interlink-oriented firms profited by translating data formats, authenticating services, testing interfaces, and connecting vehicles, insurers, stations, and surface equipment. They did not abolish incompatibility; they made incompatibility billable and governable.</p>"},
      {id:"navigation",title:"Relays and navigation",html:"<p>Commercial orbiters and relay contracts supported the Moon, Mars, and high-orbit traffic. Operators sold access, coverage, timing, and navigation products to several customers while governments reserved priority and emergency rights.</p>"},
      {id:"teleoperation",title:"Remote industrial work",html:"<p>Mining, construction, inspection, and cargo handling increasingly used delayed or supervised teleoperation. Software firms supplied task planning, command validation, fault reporting, replay, and training environments for machines operating far from their owners.</p>"},
      {id:"data",title:"Data ownership and operational commons",html:"<p>Scientific observations, maintenance records, customer traffic, imagery, and process data could be proprietary. Safety messages, collision warnings, distress calls, and required navigation information formed a compulsory operational commons that no company could withhold during a declared emergency.</p>"},
      {id:"security",title:"Security and federal access",html:"<p>Strategic-payload review, military traffic, encryption, sabotage risk, identity, and foreign access placed the sector under continuing public scrutiny. Commercial confidentiality ended where traffic command, rescue, criminal investigation, or national security law required access.</p>"},
      {id:"mars",title:"The Mars test",html:"<p>The American Mars consortium depended upon corporate orbiters, weather products, landing beacons, surface teleoperation, mission software, and interfaces among separately financed modules. The expedition demonstrated that information integration could substitute for one owner, but not for common authority during danger.</p>"}
    ],
    related:[{href:"american-data-network.html",kicker:"Terrestrial ancestry",label:"American Data Network"},{href:"weltnetz.html",kicker:"International layer",label:"Weltnetz"},{href:"american-mars-reconnaissance-program.html",kicker:"Planetary case",label:"Mars Reconnaissance Program"},{href:"american-corporate-space-system.html",kicker:"Parent economy",label:"American Corporate Space System"}],
    facts:[["Mature period","1990s onward"],["Principal services","Communications, navigation, scheduling, teleoperation, and software"],["Market models","Closed integration and paid interoperability"],["Principal customers","Carriers, habitats, resource firms, insurers, and government"],["Emergency rule","Safety and distress data form a compulsory commons"],["Strategic control","Federal traffic, security, and investigative access"],["Principal planetary case","American Mars program"],["Firms and protocols","Open"]]
  }),

  "frontier-heavy-transport":spaceIndustryArticle({
    title:"Frontier heavy-transport operations",category:"Commercial spaceflight",infoboxKicker:"Bulk freight and propellant division",
    lead:"Frontier heavy-transport operations are the bulk-cargo, propellant, tanker, tug, and reusable-rocket activities that complemented Frontier Orbital Lines' spaceplane fleet from the 1990s. Often described publicly as Frontier Heavy Transport, the operation relieved crew and service spaceplanes of one-way mass work while remaining integrated with their schedules, depots, and rescue system.",
    canon:"The division of labor between spaceplanes and bulk lift, Caravan freight, tugs and tankers, Project Switchback, lunar and planetary supply, continued corporate integration, and mature limited reusable-booster service after 2000 are established. Frontier Heavy Transport as a final legal name, corporate form, fleet designations, vehicles, payloads, prices, launch sites, managers, accidents, and market share remain open.",
    sections:[
      {id:"problem",title:"The spaceplane freight problem",html:"<p>American spaceplanes excelled at carrying people, urgent equipment, recoverable cargo, and service crews. Wings, thermal protection, runway structure, and return systems were costly mass for propellant, shielding, tanks, aggregate, or hardware that only needed to travel one way.</p>"},
      {id:"formation",title:"Formation as an operating division",html:"<p>Frontier separated heavy logistics from its passenger and express identity during the 1990s. The public name <em>Frontier Heavy Transport</em> is widely used, but surviving canon does not determine whether it was a subsidiary, internal division, consortium brand, or later reorganization.</p>"},
      {id:"caravan",title:"Caravan and automated freight",html:"<p>The <a href='frontier-caravan.html'>Caravan</a> program standardized bulk orbital freight before reusable vertical rockets matured. Containers, payload review, documentation, and scheduled handling mattered as much as the individual vehicle.</p>"},
      {id:"switchback",title:"Project Switchback",html:"<p><a href='project-switchback.html'>Project Switchback</a> began in 1993 and moved from hoppers through engine-first descent, staging, and orbital-class recovery attempts. Intact recovery around 2000–02 and later reflight allowed limited scheduled reusable bulk-lift service after 2005.</p>"},
      {id:"orbit",title:"Tugs, tankers, and depots",html:"<p>Heavy transport did not end at lower orbit. Propellant tankers, orbital tugs, depot contracts, container transfer, and assembly logistics connected launch vehicles with Columbia, Liberty Yard, lunar routes, and planetary departure systems.</p>"},
      {id:"customers",title:"Customers",html:"<p>Customers included federal services, station operators, lunar-resource firms, habitat companies, satellite owners, the American Mars consortium, and occasional foreign facilities. Frontier could sell one transport chain while different firms owned the payload, destination, and mission.</p>"},
      {id:"integration",title:"One company, two transport logics",html:"<p>Heavy transport and the spaceplane fleet shared traffic control, insurance, training, depots, suppliers, mission planning, and emergency support. Rockets reduced bulk cost; spaceplanes retained crew, inspection, repair, urgent return, and high-value cargo roles.</p>"},
      {id:"status",title:"Status by the early 2000s",html:"<p>The operation was becoming a utility inside the wider Frontier utility. It had not rendered the spaceplane obsolete, achieved effortless full reuse, or eliminated inspection and range support. Its importance lay in making repeated lunar and planetary logistics less wasteful.</p>"}
    ],
    related:[{href:"project-switchback.html",kicker:"Rocket program",label:"Project Switchback"},{href:"frontier-caravan.html",kicker:"Freight predecessor",label:"Frontier Caravan"},{href:"frontier-orbital-lines.html",kicker:"Parent carrier",label:"Frontier Orbital Lines"},{href:"frontier-lunar-services.html",kicker:"Principal route system",label:"Frontier Lunar Services"}],
    facts:[["Development","1990s onward"],["Common name","Frontier Heavy Transport"],["Legal form","Open"],["Principal cargo","Bulk freight, propellant, tanks, and construction mass"],["Launch systems","Automated freight and reusable vertical rockets"],["Orbital systems","Tugs, tankers, containers, and depots"],["Reusable-booster service","Limited schedule after 2005"],["Parent network","Frontier Orbital Lines"]]
  }),

  "frontier-lunar-services":spaceIndustryArticle({
    title:"Frontier lunar services",category:"Commercial spaceflight",infoboxKicker:"Earth–Moon transport and logistics division",
    lead:"Frontier lunar services are the transport, depot, navigation, cargo, crew, rescue-support, and contract-integration activities linking Earth orbit with Kennedy Lunar Station and the corporate lunar economy. Often described as Frontier Lunar Services, the operation joined Frontier's carrier network to resource firms and habitats without making the carrier the owner of every mine, module, or settlement service.",
    canon:"Frontier's central lunar transport role, service to Kennedy Station and commercial customers, coordination of crew and bulk cargo, use of depots and transfer vehicles, resource-company contracts, federal traffic and emergency authority, and importance to the Mars economy are established. Frontier Lunar Services as a final legal name, charter, ownership, routes, vehicle names, schedules, prices, managers, accidents, and exact foreign access remain open.",
    sections:[
      {id:"formation",title:"A route system rather than one vehicle",html:"<p>Lunar service combined Earth launch, orbital transfer, propellant storage, navigation, landing, surface delivery, crew rotation, and return. No single vehicle performed every stage efficiently, and the service became an operating schedule joined by interfaces and contracts.</p>"},
      {id:"name",title:"Corporate identity",html:"<p><em>Frontier Lunar Services</em> is the common descriptive and operating title. The record does not yet fix whether it was an incorporated subsidiary, a division of Frontier Orbital Lines, a joint venture with resource firms, or a succession of branded contracts.</p>"},
      {id:"station",title:"Kennedy Lunar Station",html:"<p><a href='kennedy-lunar-station.html'>Kennedy Station</a> remained the principal American public and residential destination. Frontier carried crews, specialists, urgent equipment, replacement parts, and return cargo while public authorities retained station command and jurisdiction.</p>"},
      {id:"resources",title:"The resource-company market",html:"<p><a href='american-lunar-resource-industry.html'>Lunar-resource firms</a> purchased transport for machinery and staff, then sold oxygen, propellant, power, shielding, pads, and structural material back into the transport system. Long-term offtake and minimum-service contracts tied carrier and mine without requiring common ownership.</p>"},
      {id:"division",title:"Crew and bulk division of labor",html:"<p>Wayfarer-type spaceplanes and crew vehicles handled people, urgent stores, inspection, and valuable return cargo. Caravan freight, tugs, tankers, and later <a href='frontier-heavy-transport.html'>heavy transport</a> carried bulk equipment and propellant.</p>"},
      {id:"depots",title:"Depots, navigation, and rescue",html:"<p>Lunar schedules depended upon propellant accounting, transfer windows, tracking, navigation references, traffic separation, refuge capacity, spare vehicles, and rescue plans. Frontier sold coordination while federal authorities retained priority power during emergency or strategic need.</p>"},
      {id:"mars",title:"Lunar industry and Mars",html:"<p>The lunar route supplied high-orbit assembly, tankage, shielding, propellant, and crew experience for planetary missions. Voss's doctrine treated orbital transport as the paying business, lunar industry as the expanding market, and Mars as the civilizational purpose.</p>"},
      {id:"limits",title:"Limits of carrier authority",html:"<p>Frontier could dominate transport without owning residents' employers, lunar concessions, station government, or every habitat. Congress could alter common-carriage, pricing, subcontracting, safety, and reserve rules even when no alternative carrier could immediately replace the network.</p>"}
    ],
    related:[{href:"kennedy-lunar-station.html",kicker:"Principal destination",label:"Kennedy Lunar Station"},{href:"american-lunar-resource-industry.html",kicker:"Industrial customers",label:"American Lunar Resource Industry"},{href:"frontier-heavy-transport.html",kicker:"Bulk-lift arm",label:"Frontier Heavy Transport"},{href:"american-corporate-mars-program.html",kicker:"Planetary extension",label:"American Corporate Mars Program"}],
    facts:[["Mature period","1990s onward"],["Common name","Frontier Lunar Services"],["Legal form","Open"],["Principal destination","Kennedy Lunar Station"],["Functions","Crew, cargo, depot, navigation, and contract integration"],["Industrial customers","Resource, habitat, and research firms"],["Public authority","Federal traffic, safety, rescue, and requisition"],["Planetary importance","Mars assembly and supply"]]
  })
});

const addSpaceIndustryRelated = (slug,items) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=article.related || [];
  for(const item of items) if(!article.related.some(existing=>existing.href===item.href)) article.related.push(item);
};

const industryLinks=[
  {href:"american-orbital-carrier-industry.html",kicker:"Transport sector",label:"American Orbital-Carrier Industry"},
  {href:"american-lunar-resource-industry.html",kicker:"Resource sector",label:"American Lunar-Resource Industry"},
  {href:"american-orbital-habitat-industry.html",kicker:"Habitat sector",label:"American Orbital-Habitat Industry"},
  {href:"american-space-data-industry.html",kicker:"Information sector",label:"American Space-Data Industry"}
];

addSpaceIndustryRelated("american-corporate-space-system",industryLinks);
addSpaceIndustryRelated("american-mars-consortium",industryLinks);
addSpaceIndustryRelated("frontier-orbital-lines",[
  {href:"frontier-heavy-transport.html",kicker:"Bulk logistics",label:"Frontier Heavy Transport"},
  {href:"frontier-lunar-services.html",kicker:"Lunar logistics",label:"Frontier Lunar Services"}
]);
addSpaceIndustryRelated("frontier-functional-monopoly",industryLinks.slice(0,2));
addSpaceIndustryRelated("project-switchback",[{href:"frontier-heavy-transport.html",kicker:"Operating successor",label:"Frontier Heavy Transport"}]);

const corporateSpaceSystem=window.deepArticles["american-corporate-space-system"];
if(corporateSpaceSystem){
  const sectorTargets={
    carriers:["american-orbital-carrier-industry.html","American orbital-carrier industry"],
    resources:["american-lunar-resource-industry.html","American lunar-resource industry"],
    habitats:["american-orbital-habitat-industry.html","American orbital-habitat industry"],
    computing:["american-space-data-industry.html","American space-data industry"]
  };
  for(const [id,[href,label]] of Object.entries(sectorTargets)){
    const section=corporateSpaceSystem.sections?.find(item=>item.id===id);
    if(section && !section.html.includes(href)) section.html += `<p>See the dedicated <a href='${href}'>${label}</a> article.</p>`;
  }
}

const frontierCompany=window.deepArticles["frontier-orbital-lines"];
if(frontierCompany && !frontierCompany.sections?.some(section=>section.id==="operating-divisions")){
  frontierCompany.sections=[...(frontierCompany.sections || []),{id:"operating-divisions",title:"Heavy-transport and lunar-service operations",html:"<p>By 2000 Frontier's network distinguishes <a href='frontier-heavy-transport.html'>heavy transport</a> for bulk lift, propellant, tankers, and tugs from <a href='frontier-lunar-services.html'>lunar services</a> coordinating crew, cargo, depots, and Kennedy Station traffic. Both titles may describe operating divisions rather than final separate corporations.</p>"}];
}
