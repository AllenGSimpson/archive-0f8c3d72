window.deepArticles = window.deepArticles || {};

const promenadenringOperationsSources = [
  {href:"../transcript.md",label:"Master Transcript — Turn 751, Raumhafen Promenade and Promenadenring"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Promenadenring construction and mature German space infrastructure"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Promenadenring construction and occupation, 1994–2000"},
  {href:"https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/",label:"NASA — environmental control and life-support systems"},
  {href:"https://www.nasa.gov/reference/safety-history-contingency-mishaps/",label:"NASA — spacecraft fire protection and contingency practice"},
  {href:"https://ntrs.nasa.gov/search.jsp?R=19720052770",label:"NASA Technical Reports Server — habitability in rotating space stations"},
  {href:"https://ntrs.nasa.gov/api/citations/20230013553/downloads/Artificial%20gravity%20and%20radiation%20shielding.pdf?attachment=true",label:"NASA Technical Reports Server — rotating habitats and fixed-to-rotating interfaces"}
];

const promenadenringOperationsCards = [
  {href:"promenadenring-transfer-bearing.html",kicker:"Fixed-to-rotating interface",label:"Promenadenring Transfer Bearing"},
  {href:"promenadenring-life-support-system.html",kicker:"Atmosphere, water, heat and waste",label:"Promenadenring Life-Support System"},
  {href:"promenadenring-pressure-sector-safety.html",kicker:"Bulkheads, refuge and response",label:"Promenadenring Pressure-Sector Safety"},
  {href:"promenadenring-rotation-control.html",kicker:"Spin, balance and vibration",label:"Promenadenring Rotation Control"}
];

const promenadenringOperationsLandscape = {
  src:"assets/diagrams/promenadenring-operating-systems.svg",
  alt:"Diagram of Promenadenring operating systems showing the fixed hub, transfer bearing, rotating ring, pressure sectors, life-support loops, and mass-balance control",
  caption:"The transfer bearing joins a nonrotating harbor to a rotating district; distributed utilities and sealable sectors keep the ring habitable when one route or plant is isolated."
};

const promenadenringOperationsRelated = [
  {href:"promenadenring.html",kicker:"Parent orbital district",label:"Promenadenring"},
  {href:"promenadenring-rotating-structure.html",kicker:"Structural system",label:"Promenadenring Rotating Structure"},
  {href:"promenadenring-residential-districts.html",kicker:"Principal users",label:"Promenadenring Residential Districts"},
  {href:"orbitaler-raumhafen.html",kicker:"Host complex",label:"Orbitaler Raumhafen"}
];

const promenadenringOperationsArticle = config => ({
  title:config.title,
  category:config.category || "Space-station engineering",
  eyebrow:config.eyebrow || "Promenadenring · orbital settlement systems",
  infoboxKicker:config.infoboxKicker,
  infoboxTitle:config.infoboxTitle || config.title,
  landscape:promenadenringOperationsLandscape,
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:[...(config.related || []),...promenadenringOperationsRelated,...promenadenringOperationsCards.filter(card=>card.href!==config.slug+".html")],
  sources:promenadenringOperationsSources,
  facts:config.facts,
  categories:config.categories || ["Promenadenring","Orbitaler Raumhafen","German space program","Space-station engineering"]
});

Object.assign(window.deepArticles,{
  "promenadenring-transfer-bearing":promenadenringOperationsArticle({
    slug:"promenadenring-transfer-bearing",title:"Promenadenring transfer bearing",infoboxKicker:"Fixed-to-rotating station interface",eyebrow:"Orbital engineering · rotating habitation · transfer interface",
    lead:"The Promenadenring transfer bearing is the large fixed-to-rotating interface connecting the inhabited ring and its spokes to the nonrotating core of the Orbitaler Raumhafen. It permits residents, cargo, power, data, fluids, and emergency services to cross between a harbor organized for docking and a district rotating to produce partial gravity. Its reliability defines whether the Promenadenring functions as part of one station or as an isolated wheel attached to it.",
    canon:"A large transfer bearing between the nonrotating Raumhafen hub and the rotating Promenadenring, several connecting spokes, routes for people and station services, isolation capability, and progressive commissioning in 1996–97 are established. The exact bearing geometry, diameter, manufacturer, service channels, seal arrangement, traffic capacity, maintenance interval, redundancy, drive system, and accident record remain open.",
    sections:[
      {id:"function",title:"Function",html:"<p>Docking ports, antennas, shipyards, tanks, and most heavy industrial work remain nonrotating. Homes, clinics, public rooms, and long-duration accommodation rotate with the ring. The bearing connects these two operating environments without requiring visiting spacecraft to match the ring's spin.</p>"},
      {id:"passage",title:"Passenger and cargo passage",html:"<p>People approach through the fixed hub, enter a controlled interface, and emerge into a rotating spoke or circulation route. Cargo uses scheduled handling equipment sized to preserve balance and avoid blocking emergency passage. Exact lift, vestibule, and transfer arrangements remain open.</p>"},
      {id:"services",title:"Transfer of station services",html:"<p>Power, data, water, gases, cooling, waste lines, alarms, and command circuits must either cross the rotating interface or pass through local stores and buffers. The mature system therefore combines continuous rotary connections with sector tanks, batteries, data storage, and independently operable equipment.</p>"},
      {id:"pressure",title:"Pressure and interlocks",html:"<p>The interface is part of the station pressure boundary. Monitored seals, paired closures, differential-pressure checks, and interlocks prevent an open route from joining compartments that are unsafe or moving outside permitted conditions.</p>"},
      {id:"traffic",title:"Traffic control",html:"<p>Residents do not treat the bearing as an unrestricted terrestrial doorway. Maintenance, cargo movements, crowding, visiting delegations, emergency priority, and balance restrictions produce scheduled control even after the public district opens.</p>"},
      {id:"maintenance",title:"Inspection and maintenance",html:"<p>Bearing surfaces, seals, drives, sensors, cabling, fluid couplings, vibration monitors, and pressure closures require continuous inspection. Work is arranged so that one route or service can be isolated without automatically emptying the ring.</p>"},
      {id:"emergency",title:"Emergency isolation",html:"<p>Fire, smoke, toxic release, pressure loss, uncontrolled vibration, or a damaged spoke can close the interface and divide the district from the harbor. Residents then rely upon distributed refuge and life support until another route opens or repair teams restore service.</p>"},
      {id:"significance",title:"Institutional significance",html:"<p>The bearing is the boundary between civic appearance and naval engineering. German station command retains final technical authority there, including power to halt movement, isolate a national delegation, or delay a ceremony when operating limits require it.</p>"}
    ],
    related:[{href:"promenadenring-construction-program.html",kicker:"Installation history",label:"Promenadenring Construction Program"},{href:"raumhafen-jurisdiction.html",kicker:"Host authority",label:"Jurisdiction aboard the Raumhafen"}],
    facts:[["Location","Between the nonrotating Raumhafen hub and rotating ring"],["Commissioning","First operating interface, 1996–97"],["Principal transfers","People, cargo, power, data, fluids, and alarms"],["Pressure role","Monitored and isolatable boundary"],["Traffic authority","German Raumhafen command"],["Emergency function","Isolation of ring from hub"],["Exact geometry and capacity","Open"],["Manufacturer and maintenance interval","Open"]]
  }),

  "promenadenring-life-support-system":promenadenringOperationsArticle({
    slug:"promenadenring-life-support-system",title:"Promenadenring life-support system",infoboxKicker:"Distributed environmental utility system",eyebrow:"Orbital utilities · atmosphere · water · thermal control",
    lead:"The Promenadenring life-support system is the distributed environmental utility network that maintains breathable air, pressure, temperature, humidity, water, waste processing, and sanitary conditions for the rotating district. It combines central machinery with independently supplied pressure sectors, allowing homes, classrooms, clinics, shops, kitchens, and public rooms to remain occupied without making every resident dependent upon one uninterrupted plant or one connection through the transfer bearing.",
    canon:"Environmental machinery behind the residential districts, water and oxygen supply, hydroponic planting, independently sealable pressure sectors, progressive atmosphere and utility testing, and a planning population of roughly three hundred permanent and one to two hundred transient occupants are established. System architecture, recovery percentages, atmospheric composition, plant count, power demand, storage, consumables, staffing, manufacturers, and certified population remain open.",
    sections:[
      {id:"architecture",title:"Distributed architecture",html:"<p>Large machinery serves several sectors, while local tanks, batteries, filters, sensors, and emergency equipment preserve short-term survival after isolation. The ring can reduce activity and close public spaces rather than fail everywhere at once.</p>"},
      {id:"atmosphere",title:"Atmosphere control",html:"<p>Fans circulate air through carbon-dioxide removal, trace-contaminant control, particulate filtration, humidity management, and temperature regulation. Oxygen supply and cabin-pressure control operate through monitored loops whose exact gases and pressures remain unregistered.</p>"},
      {id:"water",title:"Water recovery and supply",html:"<p>Condensate, hygiene water, and other recoverable streams pass through treatment before returning to useful service. Terrestrial and lunar water supplement the loop, replace losses, and build reserves. Potable, technical, medical, and fire-control demands remain separately monitored.</p>"},
      {id:"waste",title:"Waste and sanitation",html:"<p>Toilets, kitchens, clinics, laundries, workshops, shops, and gardens produce different liquid, solid, biological, and chemical wastes. Sorting, sterilization, recovery, compact storage, and transfer to industrial or disposal systems make sanitation an engineering duty rather than a municipal afterthought.</p>"},
      {id:"thermal",title:"Heat and power",html:"<p>People, lights, kitchens, computers, motors, clinics, and hydroponics release heat inside the pressure shell. Coolant loops and radiators ultimately reject it through the nonresidential station structure. Load shedding protects life support before comfort or commercial service.</p>"},
      {id:"planting",title:"Hydroponics and planting",html:"<p>Small trees and hydroponic beds provide fresh food, psychological relief, and environmental research. Their contribution to oxygen or calories is limited; lighting, nutrients, water quality, pests, and disease make them managed loads upon the system as well as visible symbols of settlement.</p>"},
      {id:"monitoring",title:"Monitoring and maintenance",html:"<p>Air chemistry, pressure, water purity, microbial load, filters, pumps, valves, heat exchangers, tanks, and alarms require logged inspection. Technicians can trace a fault to a sector and quarantine equipment before contamination spreads through the public district.</p>"},
      {id:"capacity",title:"Population and operating margin",html:"<p>Planning discussions describe about three hundred permanent residents and another one or two hundred transient occupants. Those numbers remain capacity proposals. Certified population changes with stores, transport, refuge, medical coverage, maintenance state, and the number of sectors available.</p>"}
    ],
    related:[{href:"promenadenring-residential-districts.html",kicker:"Residential demand",label:"Promenadenring Residential Districts"},{href:"raumhafen-resident-service-corps.html",kicker:"Operating workforce",label:"Raumhafen Resident Service Corps"}],
    facts:[["System form","Distributed environmental utilities"],["Controlled conditions","Pressure, oxygen, carbon dioxide, temperature, humidity, and contaminants"],["Water sources","Recovery, Earth supply, and lunar supply"],["Agriculture","Supplementary hydroponics and planting"],["Failure response","Sector isolation and reduced operation"],["Planning permanent population","About 300 · open"],["Planning transient population","About 100–200 · open"],["Final performance register","Open"]]
  }),

  "promenadenring-pressure-sector-safety":promenadenringOperationsArticle({
    slug:"promenadenring-pressure-sector-safety",title:"Promenadenring pressure-sector safety system",infoboxKicker:"Bulkhead, refuge and emergency network",eyebrow:"Orbital safety · pressure sectors · distributed refuge",
    lead:"The Promenadenring pressure-sector safety system is the network of bulkheads, doors, sensors, refuge stores, alarms, fire controls, alternate routes, and command procedures that divides the apparently continuous ring into independently survivable compartments. Visitors experience one promenade, but station operators treat it as a chain of pressure sectors in which a fire, toxic release, structural fault, or atmosphere loss must be contained before it becomes a district-wide disaster.",
    canon:"Many independently sealable sectors, pressure bulkheads across the public route, atmosphere, fire, evacuation, and integrated-control testing, routes through several spokes, distributed emergency capacity, and German final technical authority are established. Sector count, boundaries, door design, alarm codes, refuge duration, breathing equipment, fire agents, evacuation capacity, casualties, and exact regulations remain open.",
    sections:[
      {id:"principle",title:"One street, many compartments",html:"<p>The concourse is visually continuous because pressure doors remain open during ordinary operation. Repeated thresholds, local indicators, and recessed emergency equipment reveal the underlying sector plan to trained residents.</p>"},
      {id:"hazards",title:"Hazards",html:"<p>Fire and toxic smoke, rapid or slow pressure loss, coolant or chemical release, electrical failure, structural damage, collision, contamination, and uncontrolled rotation can make a sector unsafe. The response differs by hazard, but early detection and isolation are common requirements.</p>"},
      {id:"detection",title:"Detection and alarm",html:"<p>Pressure, smoke, particulate, temperature, gas, vibration, power, and door-status sensors report to local panels and station command. Tones, lights, diagrams, and spoken German orders allow residents with different languages to recognize the required action.</p>"},
      {id:"containment",title:"Bulkheads and containment",html:"<p>Command can close pressure doors, stop ventilation between compartments, shed electrical loads, and isolate utility branches. Local automatic action protects the first seconds; human controllers confirm the hazard and prevent an incorrect closure from producing a second emergency.</p>"},
      {id:"refuge",title:"Refuge and survival stores",html:"<p>Safe compartments contain emergency air, water, medical equipment, communications, lighting, breathing apparatus, and basic food. Capacity is distributed so damage to one sector or spoke does not remove every refuge available to a neighborhood.</p>"},
      {id:"routes",title:"Evacuation routes",html:"<p>Residents move laterally into a safe sector or inward through an available spoke toward the nonrotating hub. Vehicle evacuation remains conditional upon docked capacity and orbital circumstances; immediate abandonment of the whole station is not the primary plan.</p>"},
      {id:"drills",title:"Drills and public discipline",html:"<p>Residents, schoolchildren, hotel guests, patients, and workers receive different levels of instruction. Staff rehearse breathing equipment, casualty movement, door control, manual communication, and crowd direction, while visitors learn alarms, assembly points, and escort rules.</p>"},
      {id:"recovery",title:"Recovery and reopening",html:"<p>A sealed sector returns to use only after atmosphere sampling, structural inspection, fire and electrical checks, life-support verification, evidence collection, and command certification. Investigation can alter materials, loading rules, drills, or the arrangement of later arcs.</p>"}
    ],
    related:[{href:"raumhafen-emergency-customs.html",kicker:"Station-wide response culture",label:"Raumhafen Emergency Customs"},{href:"emergency-services-beyond-earth.html",kicker:"Comparative emergency practice",label:"Emergency Services beyond Earth"}],
    facts:[["Safety form","Independently sealable pressure sectors"],["Principal barriers","Bulkheads and monitored pressure doors"],["Main hazards","Fire, smoke, pressure loss, contamination, structural and utility faults"],["Refuge principle","Distributed survival capacity"],["Primary evacuation","Adjacent sector or available spoke"],["Final technical authority","German Raumhafen command"],["Sector count and refuge endurance","Open"],["Recorded serious incidents","Open"]]
  }),

  "promenadenring-rotation-control":promenadenringOperationsArticle({
    slug:"promenadenring-rotation-control",title:"Promenadenring rotation and mass-balance control",infoboxKicker:"Artificial-gravity operating system",eyebrow:"Artificial gravity · mass distribution · vibration control",
    lead:"Promenadenring rotation and mass-balance control is the operating system that establishes partial gravity while keeping the inhabited ring within structural, bearing, vibration, and human-tolerance limits. Every cargo movement, water transfer, crowd, workshop installation, closed sector, and unfinished arc changes the rotating mass. The district therefore requires continuous accounting and deliberate trim rather than a single motor that is switched on after construction.",
    canon:"A rotating inhabited ring, planning figures near 220 metres diameter and 1.8 revolutions per minute, approximately 0.4 g at the outer residential level, progressive construction and occupation, active mass distribution, vibration monitoring, speed control, and coordinated movement of cargo and crowds are established. Final radius, rotation rate, gravity profile, drives, bearings, trim masses, control algorithms, operating limits, spin-down time, and incident record remain open.",
    sections:[
      {id:"gravity",title:"Artificial gravity",html:"<p>Rotation produces outward acceleration at the residential deck. A Mars-like planning level supports long-duration habitation, family-health research, and Mars preparation while leaving the central Raumhafen in microgravity. Gravity varies with radius and motion inside the ring.</p>"},
      {id:"commissioning",title:"Spin-up and commissioning",html:"<p>Builders test individual arcs, spokes, seals, bearings, drives, sensors, and utility interfaces before raising speed in controlled stages. Progressive occupation requires temporary balance plans while the ring remains incomplete and its mass distribution changes from month to month.</p>"},
      {id:"loads",title:"Mass accounting",html:"<p>Water tanks, stores, machinery, furniture, structural work, hotel occupancy, public ceremonies, and arriving cargo all enter a live balance register. A load acceptable in a fixed warehouse can require a paired movement or delayed transfer in the rotating district.</p>"},
      {id:"trim",title:"Trim and control",html:"<p>Operators adjust drive torque, schedule large movements, shift stored water or other trim mass, and impose temporary route limits. The final combination of active and passive control remains unrecorded. Ordinary imbalance must be managed while civic activity continues.</p>"},
      {id:"vibration",title:"Vibration and bearing loads",html:"<p>Sensors track oscillation, bearing temperature, alignment, spoke loads, and recurring mechanical signatures. Changes can indicate an uneven load, worn component, loose structure, fluid motion, or interaction with construction and docking work elsewhere in the station.</p>"},
      {id:"human",title:"Human adaptation",html:"<p>Residents adapt to Coriolis effects, changes between deck levels, and the transition between rotating and nonrotating environments. Movement, work design, clinic practice, exercise, and visitor orientation reflect the fact that partial gravity is useful without being identical to Earth gravity.</p>"},
      {id:"reduced",title:"Reduced-speed and stopped operation",html:"<p>Maintenance or a serious fault may require reduced rotation or eventual spin-down. Life support and pressure remain necessary throughout, while loose equipment, patient care, movement, and emergency routes shift toward microgravity practice. Exact stopping limits and times remain open.</p>"},
      {id:"authority",title:"Operating authority",html:"<p>A specialized control watch works within German Raumhafen command and coordinates with traffic, utilities, construction, medical staff, and district administration. Its ability to restrict cargo or public events demonstrates that the Promenadenring remains an engineered station before it is a municipality.</p>"}
    ],
    related:[{href:"promenadenring-rotating-structure.html",kicker:"Physical architecture",label:"Promenadenring Rotating Structure"},{href:"space-medicine.html",kicker:"Human adaptation",label:"Space Medicine"}],
    facts:[["Purpose","Partial gravity and structural control"],["Planning diameter","About 220 m · open"],["Planning rotation","About 1.8 rpm · open"],["Planning outer gravity","About 0.4 g · open"],["Monitored conditions","Mass, vibration, bearing loads, alignment, and speed"],["Ordinary control","Movement scheduling, drive control, and trim mass"],["Host authority","Orbitaler Raumhafen"],["Final engineering register","Open"]]
  })
});

const addPromenadenringOperationsRelated = (slug,items=promenadenringOperationsCards) => {
  const article=window.deepArticles[slug];
  if(!article)return;
  article.related=article.related || [];
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
};

const promenadenringOperationsOverview=window.deepArticles["promenadenring"];
if(promenadenringOperationsOverview){
  promenadenringOperationsOverview.sections=promenadenringOperationsOverview.sections || [];
  if(!promenadenringOperationsOverview.sections.some(section=>section.id==="operating-systems"))promenadenringOperationsOverview.sections.push({
    id:"operating-systems",title:"Operating systems",html:"<p>The inhabited district depends upon four linked systems. The <a href='promenadenring-transfer-bearing.html'>transfer bearing</a> carries people, cargo, power, data, and utilities across the fixed-to-rotating boundary. The <a href='promenadenring-life-support-system.html'>life-support network</a> distributes atmosphere, water, heat removal, sanitation, and emergency stores among sealable sectors.</p><p>The continuous promenade is divided by the <a href='promenadenring-pressure-sector-safety.html'>pressure-sector safety system</a>, while <a href='promenadenring-rotation-control.html'>rotation and mass-balance control</a> coordinates cargo, water, crowds, vibration, and partial gravity. Together they keep a civic interior inside the operating limits of a spacecraft.</p>"
  });
  addPromenadenringOperationsRelated("promenadenring");
}

addPromenadenringOperationsRelated("promenadenring-rotating-structure",[
  {href:"promenadenring-transfer-bearing.html",kicker:"Fixed-to-rotating interface",label:"Transfer Bearing"},
  {href:"promenadenring-rotation-control.html",kicker:"Operating control",label:"Rotation and Mass-Balance Control"},
  {href:"promenadenring-pressure-sector-safety.html",kicker:"Sealable structure",label:"Pressure-Sector Safety"}
]);
addPromenadenringOperationsRelated("promenadenring-residential-districts",[
  {href:"promenadenring-life-support-system.html",kicker:"Residential utilities",label:"Life-Support System"},
  {href:"promenadenring-pressure-sector-safety.html",kicker:"Residential safety",label:"Pressure-Sector Safety"}
]);
addPromenadenringOperationsRelated("promenadenring-construction-program",[
  {href:"promenadenring-transfer-bearing.html",kicker:"1996–97 interface",label:"Transfer Bearing"},
  {href:"promenadenring-rotation-control.html",kicker:"Progressive commissioning",label:"Rotation Control"}
]);
addPromenadenringOperationsRelated("orbitaler-raumhafen",promenadenringOperationsCards);
addPromenadenringOperationsRelated("raumhafen-emergency-customs",[
  {href:"promenadenring-pressure-sector-safety.html",kicker:"Ring emergency architecture",label:"Promenadenring Pressure-Sector Safety"}
]);
