window.deepArticles = window.deepArticles || {};

const britishMarsSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Commonwealth space expansion and 1998 Valles Marineris landing"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Greenwich commitment and British Mars chronology"},
  {href:"../transcript.md",label:"Master Transcript, Turn 747 — British Mars Direct doctrine and concentrated mission hardware"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — unresolved British mission and spacecraft specifications"}
];

const britishMarsArchitecture = {src:"assets/diagrams/british-mars-direct-architecture.svg",alt:"Diagram of the concentrated British Mars Direct mission architecture",caption:"One transfer and habitation vehicle, one prepositioned return system, one surface lander, and a sovereign communications chain formed a bounded national mission"};
const britishMarsSequence = {src:"assets/diagrams/british-mars-direct-sequence.svg",alt:"Sequence diagram of the British expedition to western Valles Marineris",caption:"Direct access allowed orbital assembly but excluded dependence on lunar resources, lunar staging, or a continental-scale interplanetary yard"};

const britishMarsArticle = config => ({
  category:"British spaceflight",
  eyebrow:"British Commonwealth spaceflight · 1993–1998",
  infoboxKicker:"British Mars Direct system",
  ...config,
  sources:[...britishMarsSources,...(config.additionalSources || [])],
  categories:config.categories || ["British space program","Crewed Mars missions","Commonwealth Space Board","1998 in spaceflight"]
});

Object.assign(window.deepArticles, {
  "british-mars-direct-program": britishMarsArticle({
    title:"British Mars Direct program",category:"Space programs",landscape:britishMarsSequence,infoboxKicker:"Concentrated sovereign Mars program",
    lead:"The British Mars Direct program was the Commonwealth effort that placed a small crew in western Valles Marineris in 1998. It met the Greenwich Compact's sovereignty requirement through a concentrated mission chain—one habitation and transfer vehicle, one prepositioned return system, one surface lander, and independent communications—rather than through a lunar industrial base or German-scale orbital shipyard.",
    canon:"The Greenwich Compact origin, pre-2000 deadline, independent Commonwealth chain, 1998 landing, western Valles Marineris site, direct doctrine, one habitation and transfer vehicle, one prepositioned return system, one surface lander, small crew, limited mission, no immediate settlement promise, distributed workshare, and sovereign communications are established. Formal program name, authorization, budget, launches, mission name, crew, dates, vehicles, propulsion, surface duration, and return remain open.",
    sections:[
      {id:"compact",title:"Greenwich commitment",html:"<p>The <a href='greenwich-compact.html'>Greenwich Compact</a> committed Commonwealth Labour and the National Liberals to an independent Mars landing before 2000. The program survived the 1996 change from Calder to Mallory because both camps treated it as a national obligation.</p>"},
      {id:"direct",title:"Meaning of direct",html:"<p>Direct did not require one booster or one indivisible spacecraft. Hardware could launch separately and assemble or dock in Earth orbit, but the mission did not use lunar resources, lunar staging, or a permanent interplanetary construction yard.</p>"},
      {id:"concentration",title:"Concentration rather than scale",html:"<p>Britain narrowed the objective to a complete chain it could own and support. The program accepted fewer people, less surface equipment, and no immediate settlement in exchange for reaching Mars with national launch, command, communications, landing, and return authority.</p>"},
      {id:"hardware",title:"Mission hardware",html:"<p>The architecture centered on a <a href='british-mars-transfer-habitation-vehicle.html'>transfer and habitation vehicle</a>, a <a href='british-mars-return-system.html'>prepositioned return system</a>, and a <a href='british-mars-surface-lander.html'>surface lander</a>. Their exact physical staging remains open.</p>"},
      {id:"workshare",title:"Commonwealth workshare",html:"<p>British engines, computing, design, and integration joined Canadian avionics and medicine, Australian launch and tracking, New Zealand communications, and southern African materials, astronomy, and deep-space geometry.</p>"},
      {id:"route",title:"The sovereign route",html:"<p>The <a href='commonwealth-valles-marineris-communications-chain.html'>Valles Marineris communications chain</a> supplied mapping, weather, navigation, relay, deep-space tracking, and return support without making the expedition dependent upon a rival network.</p>"},
      {id:"landing",title:"Landing in 1998",html:"<p>The <a href='british-valles-marineris-surface-expedition.html'>surface expedition</a> reached western Valles Marineris in 1998. It fulfilled the Compact and began a continuing planetary network, but it did not itself create a permanent British Mars settlement.</p>"}
    ],
    related:[{href:"british-mars-expedition.html",kicker:"Mission overview",label:"British Mars Expedition of 1998"},{href:"greenwich-compact.html",kicker:"Political foundation",label:"Greenwich Compact"},{href:"commonwealth-space-expansion.html",kicker:"Wider program",label:"Commonwealth Space Expansion"},{href:"resolution-orbital-laboratory.html",kicker:"Orbital institution",label:"Resolution"},{href:"serenity-lunar-complex.html",kicker:"Deliberately bypassed route",label:"Serenity Lunar Complex"}],
    facts:[["Program period","1993–1998"],["Operator","British Commonwealth"],["Doctrine","Concentrated direct expedition"],["Landing","Western Valles Marineris · 1998"],["Principal hardware","Transfer/habitation vehicle, return system, and surface lander"],["Lunar staging","None"],["Immediate settlement","Not promised"],["Formal program and mission names","Open"]],
    categories:["Commonwealth space program","Mars Direct","British Mars expedition","Greenwich Compact"]
  }),

  "british-mars-transfer-habitation-vehicle": britishMarsArticle({
    title:"British Mars transfer and habitation vehicle",category:"Crewed spacecraft",landscape:britishMarsArchitecture,infoboxKicker:"Commonwealth interplanetary crew vehicle",
    lead:"The British Mars transfer and habitation vehicle was the principal crewed interplanetary element of the 1998 expedition. It provided long-duration living, command, stores, life support, and the Earth–Mars transfer function within a deliberately narrow mission that bypassed lunar industry.",
    canon:"One combined habitation and transfer vehicle, Earth-orbit assembly or docking if required, no lunar staging, carriage of a small crew, support for a limited mission, and participation in the sovereign return chain are established. Name, launch date, assembly point, stages, dimensions, mass, crew, propulsion, artificial gravity, shielding, docking arrangement, Mars-orbit role, and reuse remain open.",
    sections:[
      {id:"role",title:"Role in the direct architecture",html:"<p>The vehicle carried the people and systems that had to remain with them during interplanetary flight. It was not a complete folded base and did not descend intact as an industrial settlement.</p>"},
      {id:"assembly",title:"Earth-orbit assembly or docking",html:"<p>Direct doctrine permitted launches to rendezvous in Earth orbit. Final integration could use British or Commonwealth orbital infrastructure without becoming dependent upon lunar propellant or a permanent heavy shipyard.</p>"},
      {id:"habitation",title:"Long-duration habitation",html:"<p>Atmosphere, water, waste, food, exercise, medicine, hygiene, workstations, privacy, radiation refuge, stores, and repair access supported the small crew. Exact closure and gravity provisions remain open.</p>"},
      {id:"propulsion",title:"Transfer and propulsion",html:"<p>The vehicle supplied or carried the principal interplanetary transfer function. Chemical, nuclear-thermal, nuclear-electric, mixed, and staged arrangements remain possible in the surviving account; no cycle is registered.</p>"},
      {id:"mars",title:"Mars approach",html:"<p>The crew vehicle received mapping, weather, navigation, and communications through the sovereign Commonwealth chain. Whether it remained in Mars orbit, accompanied the lander farther, or divided into several elements remains open.</p>"},
      {id:"lander",title:"Relationship to the surface lander",html:"<p>The <a href='british-mars-surface-lander.html'>surface lander</a> separated local entry, descent, landing, and surface support from the cruise vehicle. Crew transfer and rendezvous arrangements are not finally registered.</p>"},
      {id:"return",title:"Relationship to the return system",html:"<p>A separately <a href='british-mars-return-system.html'>prepositioned return system</a> reduced the risk that every departure function first reached Mars with the crew. The division of ascent and Earth-return work between the systems remains open.</p>"}
    ],
    related:[{href:"british-mars-direct-program.html",kicker:"Parent program",label:"British Mars Direct Program"},{href:"british-mars-surface-lander.html",kicker:"Surface craft",label:"British Mars Surface Lander"},{href:"british-mars-return-system.html",kicker:"Return chain",label:"British Mars Return System"},{href:"resolution-orbital-laboratory.html",kicker:"Orbital base",label:"Resolution"},{href:"endeavour-spacecraft.html",kicker:"Crewed lineage",label:"Endeavour"}],
    facts:[["Mission","British Mars expedition of 1998"],["Operator","British Commonwealth"],["Role","Interplanetary transfer and crew habitation"],["Crew scale","Small; exact number open"],["Assembly","Earth orbit if required"],["Lunar staging","None"],["Name and specifications","Open"]],
    categories:["British spacecraft","Crewed Mars spacecraft","Commonwealth space program","1998 Mars expedition"]
  }),

  "british-mars-return-system": britishMarsArticle({
    title:"British Mars return system",category:"Spacecraft systems",landscape:britishMarsArchitecture,infoboxKicker:"Prepositioned Commonwealth return capability",
    lead:"The British Mars return system was the mission element placed in Mars space before the crewed expedition and reserved for bringing the landing party back into the homeward chain. Prepositioning turned return from a capability first tested on arrival into a condition that could be checked before people departed Earth.",
    canon:"One prepositioned return system, arrival before the crewed mission, automatic or remote checkout, integration with the surface lander and transfer vehicle, and role in sovereign mission completion are established. It is not settled whether the system was a surface ascent vehicle, Mars-orbit Earth-return vehicle, propellant cache, several docked elements, or a combination; name, launch, propulsion, fuel, capacity, site, orbit, and reuse remain open.",
    sections:[
      {id:"principle",title:"Return before crew departure",html:"<p>The system addressed the most politically damaging failure mode of a concentrated expedition: reaching the surface with no demonstrated way to rejoin the homeward route. Prepositioning allowed telemetry and inspections before the crew launch window.</p>"},
      {id:"delivery",title:"Uncrewed delivery",html:"<p>The return element traveled ahead of the human mission and entered its waiting location on the surface, in Mars orbit, or across both. The source establishes the prepositioned function but not the physical arrangement.</p>"},
      {id:"checkout",title:"Checkout and certification",html:"<p>Power, thermal state, avionics, guidance, communications, pressure, valves, propulsion, storage, and interfaces had to remain credible through the waiting interval. Exact certification authority and redundancy are open.</p>"},
      {id:"surface",title:"Surface relationship",html:"<p>If ascent hardware or stores waited on Mars, the <a href='british-mars-surface-lander.html'>lander</a> had to deliver the crew within a usable route and preserve access through dust, terrain, weather, and navigation limits.</p>"},
      {id:"orbit",title:"Orbital relationship",html:"<p>If the return system waited in orbit, the surface party required ascent and rendezvous capability. Whether Earth-return propulsion remained with the <a href='british-mars-transfer-habitation-vehicle.html'>transfer vehicle</a> or the prepositioned element is not fixed.</p>"},
      {id:"communications",title:"Sovereign command and tracking",html:"<p>The Commonwealth network monitored the waiting system and supplied orbit determination, time, software, weather, surface relay, and contingency communications. Foreign aid remained possible without becoming the planned route home.</p>"},
      {id:"historical",title:"Historical importance",html:"<p>The system made Britain's direct mission bounded rather than reckless. It concentrated hardware while preserving a return margin independent of German, American, Japanese, or Latin permission.</p>"}
    ],
    related:[{href:"british-mars-transfer-habitation-vehicle.html",kicker:"Crew vehicle",label:"British Mars Transfer and Habitation Vehicle"},{href:"british-mars-surface-lander.html",kicker:"Surface interface",label:"British Mars Surface Lander"},{href:"commonwealth-valles-marineris-communications-chain.html",kicker:"Command route",label:"Valles Marineris Communications Chain"},{href:"british-mars-expedition.html",kicker:"Principal mission",label:"British Mars Expedition"}],
    facts:[["Delivery","Before the crewed expedition"],["Operator","British Commonwealth"],["Role","Prepositioned crew-return capability"],["Checkout","Remote or automatic before crew departure"],["Surface, orbit, and Earth-return division","Open"],["Name and specifications","Open"]],
    categories:["Mars return systems","British spacecraft","Commonwealth space program","Robotic prepositioning"]
  }),

  "british-mars-surface-lander": britishMarsArticle({
    title:"British Mars surface lander",category:"Crewed spacecraft",landscape:britishMarsArchitecture,infoboxKicker:"Western Valles Marineris landing craft",
    lead:"The British Mars surface lander was the single principal craft assigned to take the small Commonwealth crew to western Valles Marineris in 1998 and support the bounded surface mission. It separated atmospheric entry and landing from the interplanetary habitation vehicle without committing Britain to a permanent base.",
    canon:"One principal surface lander, 1998 western Valles Marineris landing, small crew, limited mission, relationship to the transfer vehicle and prepositioned return system, independent Commonwealth command, and support for scientific surface work are established. Name, launch, delivery, entry shape, propulsion, mass, capacity, touchdown system, surface habitation role, ascent role, and reuse remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The lander handled the local Mars problem: atmospheric entry, descent, touchdown, immediate refuge, unloading, and surface operations. It did not carry the whole interplanetary system or establish an industrial town.</p>"},
      {id:"entry",title:"Entry and descent",html:"<p>Western Valles Marineris demanded weather knowledge, terrain clearance, navigation, and a safe descent corridor. Aeroshell, lifting entry, parachutes, powered descent, and final configuration remain open.</p>"},
      {id:"site",title:"Western Valles Marineris site",html:"<p>The selected region offered exposed geology and a public landscape distinct from the German Olympus base. Canyons, slopes, dust, communications geometry, and route planning constrained local operations.</p>"},
      {id:"habitation",title:"Surface support",html:"<p>The lander or its accompanying package supplied pressure, power, communications, medicine, stores, tools, environmental protection, and emergency refuge for the small crew. Exact separate-habitat arrangements are unregistered.</p>"},
      {id:"science",title:"Scientific equipment",html:"<p>Geology, atmospheric observation, life-support validation, navigation, photography, sample work, and surveys of later landing sites defined the bounded mission. Instruments and traverse equipment remain open.</p>"},
      {id:"return",title:"Connection to the return chain",html:"<p>The landing party had to reach the <a href='british-mars-return-system.html'>prepositioned return system</a> directly or through lander ascent and rendezvous. The surviving history does not allocate those functions to a final vehicle design.</p>"},
      {id:"aftermath",title:"After the crew departed",html:"<p>Whether the lander remained operable, became an automatic station, was abandoned, or supplied a later visit remains open. The first mission itself did not promise continuous occupation.</p>"}
    ],
    related:[{href:"british-valles-marineris-surface-expedition.html",kicker:"Surface mission",label:"British Valles Marineris Expedition"},{href:"british-mars-transfer-habitation-vehicle.html",kicker:"Interplanetary carrier",label:"British Mars Transfer and Habitation Vehicle"},{href:"british-mars-return-system.html",kicker:"Departure chain",label:"British Mars Return System"},{href:"british-mars-direct-program.html",kicker:"Parent program",label:"British Mars Direct Program"}],
    facts:[["Landing","1998"],["Location","Western Valles Marineris"],["Operator","British Commonwealth"],["Crew","Small; exact number open"],["Mission type","Bounded expedition"],["Immediate settlement role","None established"],["Name and configuration","Open"]],
    categories:["Mars landers","British spacecraft","Valles Marineris","1998 Mars expedition"]
  }),

  "british-valles-marineris-surface-expedition": britishMarsArticle({
    title:"British Valles Marineris surface expedition",category:"Mars surface expeditions",landscape:britishMarsSequence,infoboxKicker:"First Commonwealth Mars surface campaign",
    lead:"The British Valles Marineris surface expedition was the bounded scientific and operational campaign conducted by the Commonwealth crew after its 1998 landing in the western canyon system. It fulfilled the Greenwich Compact's pre-2000 commitment without converting the landing site into an immediately permanent settlement.",
    canon:"The 1998 landing, western Valles Marineris region, small crew, limited surface mission, geology, atmospheric observation, life-support validation, navigation, survey of later landing sites, independent communications, and no immediate settlement promise are established. Expedition name, crew, landing date, coordinates, duration, traverses, samples, instruments, incidents, and departure date remain open.",
    sections:[
      {id:"arrival",title:"Arrival in 1998",html:"<p>The <a href='british-mars-surface-lander.html'>surface lander</a> placed the crew in western Valles Marineris during the Mallory government. The achievement was publicly treated as the result of the Calder–Mallory Settlement rather than one party's trophy.</p>"},
      {id:"terrain",title:"Canyon environment",html:"<p>Layered rock, exposed walls, slopes, dust deposits, shadows, local weather, and difficult horizons made the region scientifically rich and operationally demanding. Exact site and elevation remain open.</p>"},
      {id:"geology",title:"Geology and samples",html:"<p>The surface party documented strata, mineralogy, erosion, sediment, fractures, and candidate water-related histories. Sample inventory, drilling depth, and later laboratory results are not registered.</p>"},
      {id:"atmosphere",title:"Atmosphere and weather",html:"<p>Pressure, temperature, wind, dust, radiation, and local canyon circulation supported both science and safer future landings. The <a href='commonwealth-valles-marineris-communications-chain.html'>communications chain</a> carried continuing weather and navigation data.</p>"},
      {id:"human",title:"Human and life-support work",html:"<p>The expedition tested medicine, workload, sleep, hygiene, exercise, dust control, environmental systems, and field procedures during a real planetary stay rather than an Earth-orbit simulation.</p>"},
      {id:"survey",title:"Survey for later missions",html:"<p>Beacons, imagery, route records, landing observations, and engineering notes assessed whether later Commonwealth visits could return to the region. Survey did not itself authorize a permanent base.</p>"},
      {id:"departure",title:"Departure and legacy",html:"<p>The crew entered the prepositioned return chain and left the surface after the limited campaign. The landing secured sovereign planetary access and strengthened the permanent Commonwealth communications network.</p>"}
    ],
    related:[{href:"british-mars-expedition.html",kicker:"Mission overview",label:"British Mars Expedition of 1998"},{href:"british-mars-surface-lander.html",kicker:"Landing vehicle",label:"British Mars Surface Lander"},{href:"commonwealth-valles-marineris-communications-chain.html",kicker:"Operational network",label:"Valles Marineris Communications Chain"},{href:"greenwich-compact.html",kicker:"Political mandate",label:"Greenwich Compact"},{href:"extraterrestrial-settlement.html",kicker:"Later standard",label:"Extraterrestrial Settlement"}],
    facts:[["Year","1998"],["Operator","British Commonwealth"],["Region","Western Valles Marineris"],["Historical position","Second independent human Mars landing"],["Character","Limited scientific expedition"],["Permanent occupation","Not established"],["Crew, dates, and traverses","Open"]],
    categories:["Mars surface expeditions","Valles Marineris","British Mars program","1998 in spaceflight"]
  }),

  "commonwealth-valles-marineris-communications-chain": britishMarsArticle({
    title:"Commonwealth Valles Marineris communications chain",category:"Communications networks",landscape:britishMarsArchitecture,infoboxKicker:"Sovereign Mars command and navigation route",
    lead:"The Commonwealth Valles Marineris communications chain was the linked system of ground stations, deep-space tracking, planetary orbiters, navigation references, weather observations, and surface relays supporting the 1998 British Mars expedition. It proved that the complete command-and-recovery route could operate without routine dependence on another great power.",
    canon:"Commonwealth ownership, distributed ground support, Mars mapping, weather, navigation, surface relay, deep-space tracking, return communications, support for the 1998 expedition, continued use afterward, and integration into the later planetary network are established. Formal chain name, stations, spacecraft, frequencies, timing standard, coverage, encryption, staffing, and data-sharing rules remain open.",
    sections:[
      {id:"purpose",title:"Sovereignty as an operating route",html:"<p>The Greenwich settlement defined independence as control of the critical route, not refusal of all international assistance. Britain could receive foreign scientific or rescue help without requiring foreign permission for ordinary mission command.</p>"},
      {id:"ground",title:"Distributed Commonwealth ground segment",html:"<p>British control and computing joined Canadian avionics and communications, Australian tracking, New Zealand navigation links, and southern African and Indian Ocean geometry. Geographic distribution supplied visibility that Britain alone could not.</p>"},
      {id:"mapping",title:"Mars mapping and weather",html:"<p>Orbiters and earlier surveys supplied terrain, hazards, atmosphere, dust, weather, and landing-site context for western Valles Marineris. The network preserved observations as a continuing record rather than discarding them with one mission.</p>"},
      {id:"navigation",title:"Navigation and time",html:"<p>Ranging, orbit determination, time transfer, trajectory updates, surface location references, beacons, and approach support connected Earth departure to Mars arrival, descent, ascent, and return.</p>"},
      {id:"surface",title:"Surface relay",html:"<p>Direct Earth visibility could be interrupted by terrain or planetary rotation. Orbital relays and local systems carried voice, telemetry, science, medical data, weather warnings, and emergency traffic for the canyon expedition.</p>"},
      {id:"return",title:"Return communications",html:"<p>The <a href='british-mars-return-system.html'>prepositioned return system</a> required continuing health monitoring before the crew arrived and precise tracking during departure and rendezvous. Communications therefore belonged to the return vehicle as much as to public broadcast.</p>"},
      {id:"network",title:"After the 1998 mission",html:"<p>Useful orbiters, relays, ground facilities, standards, and trained operators remained inside the <a href='commonwealth-planetary-network.html'>Commonwealth planetary network</a>. The landing became the first operational demonstration of a durable sovereign planetary geography.</p>"}
    ],
    related:[{href:"commonwealth-planetary-network.html",kicker:"Parent network",label:"Commonwealth Planetary Network"},{href:"british-mars-direct-program.html",kicker:"Supported program",label:"British Mars Direct Program"},{href:"british-valles-marineris-surface-expedition.html",kicker:"Surface user",label:"British Valles Marineris Expedition"},{href:"high-mast-tracking-network.html",kicker:"Terrestrial ancestor",label:"High Mast Tracking Network"},{href:"resolution-orbital-laboratory.html",kicker:"Orbital center",label:"Resolution"}],
    facts:[["Operator","British Commonwealth"],["Mission supported","British Mars expedition of 1998"],["Surface region","Western Valles Marineris"],["Functions","Mapping, weather, navigation, relay, tracking, and return communications"],["Ground architecture","Distributed Commonwealth stations"],["Successor","Commonwealth planetary network"],["Formal chain name","Open"]],
    categories:["Deep-space communications","Commonwealth space program","Mars satellite systems","Valles Marineris"]
  })
});

const addBritishMarsRelated = (slug,item) => {
  const related = window.deepArticles[slug]?.related;
  if (related && !related.some(entry => entry.href === item.href)) related.push(item);
};

addBritishMarsRelated("british-mars-expedition",{href:"british-mars-direct-program.html",kicker:"Program architecture",label:"British Mars Direct Program"});
addBritishMarsRelated("british-mars-expedition",{href:"british-mars-transfer-habitation-vehicle.html",kicker:"Interplanetary vehicle",label:"British Mars Transfer and Habitation Vehicle"});
addBritishMarsRelated("british-mars-expedition",{href:"british-valles-marineris-surface-expedition.html",kicker:"Surface campaign",label:"British Valles Marineris Expedition"});
addBritishMarsRelated("greenwich-compact",{href:"british-mars-direct-program.html",kicker:"Mars implementation",label:"British Mars Direct Program"});
addBritishMarsRelated("commonwealth-space-expansion",{href:"british-mars-direct-program.html",kicker:"1998 culmination",label:"British Mars Direct Program"});
addBritishMarsRelated("resolution-orbital-laboratory",{href:"british-mars-transfer-habitation-vehicle.html",kicker:"Mars support",label:"British Mars Transfer and Habitation Vehicle"});
addBritishMarsRelated("commonwealth-planetary-network",{href:"commonwealth-valles-marineris-communications-chain.html",kicker:"1998 proving route",label:"Valles Marineris Communications Chain"});

const britishMarsOverview = window.deepArticles["british-mars-expedition"];
if (britishMarsOverview) {
  const doctrine = britishMarsOverview.sections.find(section => section.id === "doctrine");
  if (doctrine) doctrine.html = "<p>The <a href='british-mars-direct-program.html'>Mars Direct program</a> minimized the mission to a complete sovereign chain. Direct allowed Earth-orbit assembly but excluded lunar staging: one <a href='british-mars-transfer-habitation-vehicle.html'>transfer and habitation vehicle</a>, one <a href='british-mars-return-system.html'>prepositioned return system</a>, and one <a href='british-mars-surface-lander.html'>surface lander</a>.</p>";
  const site = britishMarsOverview.sections.find(section => section.id === "site");
  if (site) site.html = "<p>The <a href='british-valles-marineris-surface-expedition.html'>landing region</a> offered exposed geology and a setting visibly different from the German Olympus base. Canyons, slopes, dust, weather, communications geometry, and route planning constrained local operations.</p>";
  const operations = britishMarsOverview.sections.find(section => section.id === "operations");
  if (operations) operations.html = "<p>The small crew concentrated on geology, atmospheric observation, human and life-support validation, navigation, and surveys of later landing sites. A sovereign <a href='commonwealth-valles-marineris-communications-chain.html'>communications chain</a> supported the bounded campaign.</p>";
}
