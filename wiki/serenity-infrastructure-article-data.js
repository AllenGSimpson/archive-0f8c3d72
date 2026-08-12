window.deepArticles = window.deepArticles || {};

const serenityInfrastructureSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature Commonwealth space system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Serenity development"},
  {href:"../transcript.md",label:"Master Transcript — British space expansion and Mare Serenitatis"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open lunar specifications"}
];

const serenityInfrastructureLandscape = {
  src:"assets/diagrams/serenity-infrastructure-system.svg",
  alt:"Diagram of the Serenity lunar complex showing power, oxygen, workshop, medical and residential systems",
  caption:"Serenity grows by connecting power, local oxygen, repair, health support, surface mobility, and residence rather than by enlarging one landing module"
};

const serenityInfrastructureArticle = config => ({
  category:"Commonwealth lunar infrastructure",
  eyebrow:"Serenity lunar complex · 1990s",
  infoboxKicker:"Commonwealth lunar system",
  landscape:serenityInfrastructureLandscape,
  ...config,
  sources:serenityInfrastructureSources,
  categories:config.categories || ["Serenity lunar complex","British Commonwealth","Lunar infrastructure","Mare Serenitatis"]
});

const serenityRelated = [
  {href:"serenity-lunar-complex.html",kicker:"Host settlement",label:"Serenity Lunar Complex"},
  {href:"commonwealth-lunar-survey-programme.html",kicker:"Prepared geography",label:"Commonwealth Lunar Survey"},
  {href:"society-serenity-lunar-complex.html",kicker:"Resident community",label:"Society of Serenity"},
  {href:"commonwealth-space-expansion.html",kicker:"Parent programme",label:"Commonwealth Space Expansion"}
];

Object.assign(window.deepArticles, {
  "serenity-reactor-power-system": serenityInfrastructureArticle({
    title:"Serenity reactor and power system",
    infoboxKicker:"Reactor-powered lunar utility",
    lead:"The Serenity reactor and power system is the electrical and thermal utility established with the first crewed Commonwealth outpost in Mare Serenitatis. It supports buried habitation, communications, laboratories, repair, oxygen production, hydroponics, medical services, surface vehicles, and later residential growth through the long lunar night.",
    canon:"An early-1990s crewed reactor outpost, reactor power, buried habitation, subsequent oxygen, workshop, hydroponic, medical, rover, and residential loads, and continued expansion through 2010 are established. Reactor type, rating, fuel, number of units, supplier, emplacement distance, shielding geometry, heat-rejection system, backup capacity, commissioning date, failures, and replacement chronology remain open.",
    sections:[
      {id:"origin",title:"First crewed outpost",html:"<p>Robotic surveys and cargo deliveries prepared the Mare Serenitatis site before a resident crew depended upon it. The first permanent stage joined a reactor to buried living quarters, communications, a garage, stores, and geology laboratories.</p><p>Reliable power was consequently part of occupation itself rather than a later industrial addition.</p>"},
      {id:"location",title:"Separation and shielding",html:"<p>The reactor installation is separated from the principal inhabited spaces and surface traffic. Regolith, distance, operating rules, and monitored approach routes limit routine exposure and protect the settlement from a local equipment failure.</p><p>The exact geometry and whether later units occupy the same utility zone remain unrecorded.</p>"},
      {id:"distribution",title:"Electrical distribution",html:"<p>Power reaches habitation, life support, communications, laboratories, the workshop, rover charging or servicing points, medical facilities, and local production equipment through a maintained distribution network. Priority controls preserve atmosphere, thermal regulation, communications, and medicine during reduced supply.</p>"},
      {id:"thermal",title:"Heat and the lunar day",html:"<p>Reactor operation creates a continuous heat-rejection problem while surface equipment experiences long cycles of sunlight and darkness. Radiators, buried services, insulation, stored energy, and managed loads form one thermal system even though their detailed design remains open.</p>"},
      {id:"backup",title:"Redundancy and emergency power",html:"<p>Continuous occupation requires stored power and separately protected emergency services. The archive does not fix the mix of batteries, fuel cells, auxiliary generation, isolated buses, or later reactor additions.</p><p>The governing principle is functional survival: a failure may interrupt industry without being permitted to remove atmosphere, communications, or clinical care.</p>"},
      {id:"growth",title:"Growth during the 1990s",html:"<p>Oxygen production, repair, longer-range mobility, hydroponics, and family accommodation increased both steady demand and the cost of interruption. Utility expansion therefore accompanied each inhabited stage rather than following it.</p>"},
      {id:"commonwealth",title:"Commonwealth supply chain",html:"<p>British systems integration operated within a distributed Commonwealth programme. Canadian instrumentation and medicine, Australian launch and tracking, southern African material and communications support, and other national workshares all depended upon a common maintained power contract at the settlement.</p>"}
    ],
    related:[...serenityRelated,{href:"serenity-oxygen-works.html",kicker:"Industrial load",label:"Serenity Oxygen Works"},{href:"serenity-hydroponics-medical-system.html",kicker:"Protected users",label:"Hydroponics and Medical System"}],
    facts:[["Location","Mare Serenitatis"],["Initial service","Early 1990s"],["Primary source","Nuclear reactor"],["Protected loads","Life support · communications · medicine"],["Industrial loads","Oxygen · workshop · vehicles"],["Exact reactor design and output","Open"]]
  }),

  "serenity-oxygen-works": serenityInfrastructureArticle({
    title:"Serenity oxygen works",
    infoboxKicker:"Lunar oxygen-production system",
    lead:"The Serenity oxygen works is the Commonwealth system for extracting and processing oxygen-bearing lunar material at the Mare Serenitatis settlement. Added during the 1990s, it reduces the amount of breathing gas and oxidizer that must be launched from Earth and marks the change from a supplied outpost to an industrially supported settlement.",
    canon:"Oxygen production at Serenity during its 1990s growth, dependence upon reactor power, relationship to workshops, rovers, habitation, and continuing Earth supply, and contribution to the settlement's approach toward Mondhafen Süd scale are established. Feedstock, extraction chemistry, pilot and production dates, throughput, purity, storage, by-products, plant layout, operators, and degree of self-sufficiency remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Every resident consumes oxygen, while landing and ascent systems may require oxidizer in far larger quantities. Local production converts a universal lunar material problem into a logistics advantage without making Serenity independent of Earth.</p>"},
      {id:"feedstock",title:"Lunar material",html:"<p>Mare basalt and regolith contain oxygen bound inside minerals rather than free gas. Survey work identifies usable material, while rovers and handling equipment move it from controlled excavation areas to processing and storage.</p><p>The selected feedstock and chemical route remain open.</p>"},
      {id:"processing",title:"Processing chain",html:"<p>The works receives graded material, subjects it to a heat- and power-intensive extraction process, separates the released oxygen, verifies quality, and transfers the product to storage. Residual solids and useful by-products require handling even when they are not immediately commercial.</p>"},
      {id:"uses",title:"Life support and propulsion",html:"<p>Breathing supply, emergency reserves, maintenance losses, and transport demand occupy different quality and storage chains. Local production can displace bulk imports while precision valves, sensors, seals, medical gases, and much other life-support equipment continue to arrive from Earth.</p>"},
      {id:"workshop",title:"Relationship to repair and mobility",html:"<p>The oxygen system depends upon excavation, crushers or equivalent preparation equipment, pumps, seals, heat systems, storage vessels, and instrumentation. The <a href='serenity-workshop-rover-system.html'>workshop and rover system</a> therefore makes production maintainable beyond a demonstration run.</p>"},
      {id:"limits",title:"Limits of self-provisioning",html:"<p>Local oxygen does not create a closed economy. Food inputs, medicines, electronics, specialist machinery, replacement parts, and many industrial consumables remain imported. The works reduces mass pressure on the route rather than abolishing the route.</p>"},
      {id:"growth",title:"Settlement consequence",html:"<p>Dependable production supports longer occupations, larger emergency reserves, more surface traffic, and family residence. It also gives Serenity a reason to maintain industrial staff who are not merely visiting scientific specialists.</p>"}
    ],
    related:[...serenityRelated,{href:"serenity-reactor-power-system.html",kicker:"Principal utility",label:"Reactor and Power System"},{href:"serenity-workshop-rover-system.html",kicker:"Maintenance chain",label:"Workshop and Rover System"}],
    facts:[["Development","1990s"],["Feedstock","Oxygen-bearing lunar material"],["Principal energy source","Serenity reactor system"],["Products","Breathing supply and possible oxidizer"],["Effect","Reduced bulk imports; not full self-sufficiency"],["Process and throughput","Open"]]
  }),

  "serenity-workshop-rover-system": serenityInfrastructureArticle({
    title:"Serenity workshop and rover system",
    infoboxKicker:"Surface mobility and repair network",
    lead:"The Serenity workshop and rover system is the linked garage, repair, vehicle, route, beacon, tool, and field-support infrastructure of the Commonwealth settlement in Mare Serenitatis. Beginning with the garage of the first crewed outpost, it expands during the 1990s to support geology, cargo handling, construction, oxygen production, inspection, and rescue beyond the buried habitat.",
    canon:"An early garage, growing repair capacity, workshops and rovers during the 1990s, survey beacons and prepared routes, geology and construction work, oxygen-production support, and continuous occupation are established. Vehicle classes, manufacturers, fleet size, power systems, pressure arrangements, range, route map, workshop equipment, staffing, accident record, and rescue radius remain open.",
    sections:[
      {id:"garage",title:"Outpost garage",html:"<p>The first crewed outpost included a garage beside buried habitation and geology laboratories. It provided a protected place to inspect vehicles, suits, tools, seals, cargo equipment, and field instruments before the settlement possessed a wider industrial workshop.</p>"},
      {id:"fleet",title:"Rovers and utility vehicles",html:"<p>Later vehicles carry crews, instruments, cargo, regolith, repair equipment, and emergency stores. Some tasks require pressurized endurance; others favor simpler unpressurized tractors or handling machines.</p><p>The archive establishes a growing rover system but not a named vehicle register.</p>"},
      {id:"routes",title:"Routes, beacons, and traffic",html:"<p>Robotic survey markers become approach references, scientific waypoints, cargo routes, and emergency navigation aids. Repeated travel turns informal tracks into maintained operating geography around landing areas, utilities, excavation sites, and laboratories.</p>"},
      {id:"workshop",title:"Repair capacity",html:"<p>The workshop diagnoses, cleans, seals, machines, joins, tests, and returns equipment to service within the limits of local stock and tools. It does not reproduce every imported component.</p><p>Repair capacity changes failure from an automatic evacuation question into a scheduling, cannibalization, or local-manufacture problem.</p>"},
      {id:"industry",title:"Industrial support",html:"<p>The <a href='serenity-oxygen-works.html'>oxygen works</a>, power distribution, metallized fields, landing approaches, communications, and buried structures all create maintenance demand. Surface mobility connects those separated systems into one settlement.</p>"},
      {id:"rescue",title:"Field safety and rescue",html:"<p>Routes are planned around remaining power, shelter, communications, spare capacity, weather and dust observations, and the ability of another vehicle to respond. A nominal maximum range is less important than the distance from which a disabled crew can still be recovered.</p>"},
      {id:"commonwealth",title:"Training and workshare",html:"<p>A distributed supply chain requires common interfaces, documentation, tools, and training. The workshop is where separately funded Commonwealth components become one maintainable operating system rather than a collection of national contributions.</p>"}
    ],
    related:[...serenityRelated,{href:"serenity-oxygen-works.html",kicker:"Industrial customer",label:"Serenity Oxygen Works"},{href:"serenity-residential-expansion.html",kicker:"Service area",label:"Residential Expansion"}],
    facts:[["Origin","Garage at the early-1990s outpost"],["Mature roles","Repair · construction · geology · cargo · rescue"],["Navigation","Survey beacons and maintained routes"],["Vehicle forms","Pressurized and unpressurized forms possible"],["Principal industrial customer","Oxygen works"],["Fleet and range","Open"]]
  }),

  "serenity-hydroponics-medical-system": serenityInfrastructureArticle({
    title:"Serenity hydroponics and medical system",
    infoboxKicker:"Long-duration health and life-support system",
    lead:"The Serenity hydroponics and medical system is the linked food-growth, environmental-health, clinical, exercise, quarantine, and emergency-care infrastructure developed as the Commonwealth settlement became continuously occupied. It supports endurance and family residence but does not make the community biologically independent of terrestrial supply.",
    canon:"Hydroponics and medicine at Serenity during the 1990s, continuous occupation, Commonwealth medical participation, later family accommodation, reactor power, and continuing dependence upon Earth are established. Crop mix, growing area, food fraction, water-loop design, hospital scale, specialties, staff, evacuation doctrine, births, deaths, disease events, and clinical outcomes remain open.",
    sections:[
      {id:"transition",title:"From expedition medicine to residence",html:"<p>A visiting crew can accept narrow selection criteria and evacuation as the final answer to many illnesses. Continuous occupation requires routine care, chronic-disease management, dental and surgical capability, rehabilitation, mental health, and a protected clinical reserve.</p>"},
      {id:"hydroponics",title:"Hydroponic cultivation",html:"<p>Plants supplement stored food, recycle part of the water and nutrient system, stabilize routines, and provide fresh material that is otherwise expensive to transport. The precise crops and share of settlement food remain open.</p>"},
      {id:"environment",title:"Environmental health",html:"<p>Medicine extends into atmosphere monitoring, radiation records, dust exclusion, water quality, exercise, sleep, lighting, infection control, and workload. Clinical staff therefore work beside life-support engineers rather than only inside an infirmary.</p>"},
      {id:"care",title:"Clinical capacity",html:"<p>The mature complex can stabilize injuries and treat ordinary illness without treating every difficult case locally. Communications permit consultation, while transport windows and vehicle availability determine whether evacuation is practical.</p>"},
      {id:"families",title:"Family accommodation",html:"<p>The arrival of spouses and children changes screening, privacy, nutrition, education, preventive care, and emergency planning. The archive does not establish a lunar birth at Serenity or the composition of its first resident households.</p>"},
      {id:"commonwealth",title:"Commonwealth medical system",html:"<p>Canadian medicine and avionics are prominent within a British-led operating structure supported by the wider Commonwealth route. Records and qualifications must remain usable across several national services even when immediate clinical authority is local.</p>"},
      {id:"limits",title:"Dependence upon Earth",html:"<p>Medicines, sterile supplies, specialist equipment, replacement sensors, seed stock, nutrients, and expert consultation remain tied to Earth. Hydroponics and local care enlarge the safe duration of residence without eliminating that dependence.</p>"}
    ],
    related:[...serenityRelated,{href:"serenity-reactor-power-system.html",kicker:"Utility supply",label:"Reactor and Power System"},{href:"serenity-residential-expansion.html",kicker:"Household setting",label:"Residential Expansion"}],
    facts:[["Development","1990s"],["Roles","Food growth · environmental health · clinical care"],["Population served","Crews, specialists, and later families"],["Evacuation","Possible but not always immediate"],["Terrestrial supply","Still necessary"],["Capacity and crop share","Open"]]
  }),

  "serenity-residential-expansion": serenityInfrastructureArticle({
    title:"Residential expansion of Serenity",
    infoboxKicker:"Transition from outpost to settlement",
    lead:"The residential expansion of Serenity is the 1990s process through which the Mare Serenitatis outpost acquires longer-term quarters, household services, family accommodation, recreation, medical support, and the operating institutions of a permanent Commonwealth community. It is the social counterpart to the settlement's growth in power, repair, oxygen, and transport.",
    canon:"Buried early habitation, continuous occupation during the 1990s, family accommodation, hydroponics, medicine, workshops, rovers, public-service character, and approach toward Mondhafen Süd scale by 2010 are established. District plan, housing forms, population, first family, selection rules, school, council, employers, rents, private property, chaplaincy, births, and dates for each residential stage remain open.",
    sections:[
      {id:"quarters",title:"Buried quarters",html:"<p>The first occupied spaces are protected work-and-life compartments associated with the reactor outpost. Regolith cover moderates radiation and temperature but limits windows, outward views, easy expansion, and direct access to the surface.</p>"},
      {id:"continuous",title:"Continuous occupation",html:"<p>As crews cease treating Serenity as a temporary assignment only, storage, laundry, kitchens, exercise, privacy, recreation, communications, and maintenance become settlement infrastructure. A bed count alone no longer describes the community.</p>"},
      {id:"families",title:"Family accommodation",html:"<p>Selected households join a population still dominated by technical and public-service employment. Family residence requires private rooms, safer circulation, schooling arrangements, preventive medicine, communication with Earth, and schedules not organized wholly around shifts.</p>"},
      {id:"services",title:"Shared services",html:"<p><a href='serenity-hydroponics-medical-system.html'>Hydroponics and medicine</a>, the workshop, communications, food service, waste handling, exercise, and emergency shelters serve residence as well as mission operations. The settlement remains too dependent upon shared systems for household life to become physically private.</p>"},
      {id:"commonwealth",title:"A Commonwealth community",html:"<p>Residents retain different citizenships, employers, professional qualifications, pensions, and home institutions under one immediate safety command. Everyday cooperation gives constitutional association a domestic form without turning the Commonwealth into a centralized state.</p>"},
      {id:"work",title:"Work and residence",html:"<p>Most adult residents remain connected to engineering, science, medicine, communications, transport, administration, or construction. Family accommodation broadens the community without establishing an open migration market or an ordinary terrestrial suburb.</p>"},
      {id:"2010",title:"Toward a lunar town",html:"<p>By 2010 Serenity approaches the earlier scale represented by Mondhafen Süd. This describes a mature network of habitation and services, not a fixed population figure or proof that every urban institution has appeared.</p>"}
    ],
    related:[...serenityRelated,{href:"serenity-hydroponics-medical-system.html",kicker:"Health and provision",label:"Hydroponics and Medical System"},{href:"serenity-workshop-rover-system.html",kicker:"Maintained geography",label:"Workshop and Rover System"},{href:"off-world-family-life.html",kicker:"Comparative subject",label:"Off-World Family Life"}],
    facts:[["Period","1990s–2010"],["Origin","Buried crew quarters"],["Later population","Specialists and selected families"],["Social form","Multinational public-service settlement"],["Scale by 2010","Approaching Mondhafen Süd"],["Population and district plan","Open"]]
  })
});

const serenityOverview = window.deepArticles["serenity-lunar-complex"];
if (serenityOverview?.related) {
  [
    {href:"serenity-reactor-power-system.html",kicker:"Power utility",label:"Reactor and Power System"},
    {href:"serenity-oxygen-works.html",kicker:"Local production",label:"Serenity Oxygen Works"},
    {href:"serenity-workshop-rover-system.html",kicker:"Mobility and repair",label:"Workshop and Rover System"},
    {href:"serenity-hydroponics-medical-system.html",kicker:"Life support",label:"Hydroponics and Medical System"},
    {href:"serenity-residential-expansion.html",kicker:"Settlement growth",label:"Residential Expansion"}
  ].reverse().forEach(item => {
    if (!serenityOverview.related.some(existing => existing.href === item.href)) serenityOverview.related.unshift(item);
  });
}
