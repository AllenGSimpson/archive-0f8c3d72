window.deepArticles = window.deepArticles || {};

const japaneseMarsSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature Japanese space program and early-2000s Mars expedition"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — machine-first doctrine, Kaguya Base, and Japanese Mars chronology"},
  {href:"../transcript.md",label:"Master Transcript, Turn 747 — Japanese direct expedition and prepositioned surface system"}
];

const japaneseMarsArchitecture = {src:"assets/diagrams/japanese-mars-direct-architecture.svg",alt:"Diagram of the Japanese machine-first direct Mars expedition architecture",caption:"Robotic survey and cargo elements established a verified surface system before the compact crew spacecraft was committed"};
const japaneseMarsReadiness = {src:"assets/diagrams/japanese-mars-readiness-gate.svg",alt:"Diagram of readiness gates for the Japanese Mars campaign",caption:"Each phase produced an operating record before the next and most hazardous commitment was authorized"};

const japaneseMarsArticle = config => ({
  category:"Japanese spaceflight",
  eyebrow:"Imperial Japanese spaceflight · 1984–early 2000s",
  infoboxKicker:"Japanese Mars expedition system",
  ...config,
  sources:[...japaneseMarsSources,...(config.additionalSources || [])],
  categories:config.categories || ["Japanese space program","Mars exploration","Robotic spaceflight","Early 2000s"]
});

Object.assign(window.deepArticles, {
  "japanese-mars-preparation-campaign": japaneseMarsArticle({
    title:"Japanese Mars preparation campaign",category:"Space programs",landscape:japaneseMarsReadiness,infoboxKicker:"Machine-first planetary campaign",
    lead:"The Japanese Mars preparation campaign was the long sequence of orbiters, relays, landers, rovers, fixed stations, cargo flights, and automatic surface tests that preceded Japan's first crewed Mars expedition. It extended the distributed robotic system launched in 1984 until a return vehicle, propellant plant, habitat, power, communications, mobility, food, and emergency stores had demonstrated survival on Mars.",
    canon:"The 1984 distributed-system origin, machine-first doctrine, long robotic operating record, prepositioned return vehicle, propellant plant, habitat, power, rovers, communications, food and emergency stores, Japanese command, associated-state participation, and crewed expedition in the early 2000s are established. Program name, budgets, individual launches, spacecraft names, landing site, exact readiness rules, failures, and launch date remain open.",
    sections:[
      {id:"origin",title:"Origin in the distributed Mars system",html:"<p>The <a href='distributed-mars-robotic-system.html'>distributed Mars robotic system</a> launched in 1984 as a cooperating set of orbiters, relays, landers, rovers, and fixed stations. It was not yet the cargo train for one fixed human mission, but it established the operating culture from which that train emerged.</p>"},
      {id:"record",title:"Building an operating record",html:"<p>Japanese planners valued repeated survival, cross-checking, and delayed supervision over a single spectacular precursor. Mapping, weather observations, relay service, surface mechanics, dust behavior, thermal cycling, and automatic fault recovery accumulated across replacement and follow-on machines.</p>"},
      {id:"site",title:"Site selection and verification",html:"<p>Orbiters narrowed candidate regions before landers and rovers inspected hazards, surface bearing strength, access routes, communications geometry, and local material. The final landing region and its public name remain open.</p>"},
      {id:"cargo",title:"Prepositioned surface system",html:"<p>The later <a href='japanese-mars-surface-preparation-system.html'>surface-preparation system</a> placed power, communications, habitat, rovers, food, emergency stores, a <a href='japanese-mars-return-vehicle.html'>return vehicle</a>, and a <a href='japanese-mars-propellant-plant.html'>propellant plant</a> before people departed.</p>"},
      {id:"gate",title:"The readiness gate",html:"<p>Mission authorization depended upon more than receipt of telemetry. The surface elements had to demonstrate power, communications, environmental control, mobility, navigation, propellant handling, and a credible return path through an extended checkout interval.</p>"},
      {id:"crew",title:"Commitment of the crew",html:"<p>Only after the surface system passed its tests did the compact <a href='japanese-mars-crew-spacecraft.html'>crew spacecraft</a> depart. The human flight was direct in logistical doctrine: it did not wait for a German-scale lunar shipyard or carry an entire untested base with it.</p>"},
      {id:"politics",title:"Imperial command and Sphere participation",html:"<p>Japanese agencies controlled command, mission rules, and public symbolism. Associated-state institutions and specialists participated through the unequal structure of the Co-Prosperity Sphere rather than through equal ownership of the expedition.</p>"}
    ],
    related:[{href:"machine-first-space-doctrine.html",kicker:"Operating doctrine",label:"Machine-First Space Doctrine"},{href:"japanese-mars-expedition.html",kicker:"Crewed culmination",label:"Japanese Mars Expedition"},{href:"imperial-deep-space-network.html",kicker:"Command route",label:"Imperial Deep-Space Network"},{href:"kaguya-base.html",kicker:"Lunar precursor",label:"Kaguya Base"},{href:"japanese-mars-surface-preparation-system.html",kicker:"Surface package",label:"Mars Surface-Preparation System"}],
    facts:[["Campaign origin","Distributed Mars system · 1984"],["Doctrine","Machines prepare; humans follow after verification"],["Crewed culmination","Early 2000s"],["Surface package","Return, propellant, habitat, power, communications, mobility, and stores"],["Command","Empire of Japan"],["Associated-state role","Technical and scientific participation"],["Program name and landing site","Open"]],
    categories:["Japanese Mars program","Robotic Mars exploration","Machine-first doctrine","Greater East Asia Co-Prosperity Sphere"]
  }),

  "japanese-mars-surface-preparation-system": japaneseMarsArticle({
    title:"Japanese Mars surface-preparation system",category:"Mars infrastructure",landscape:japaneseMarsArchitecture,infoboxKicker:"Prepositioned Mars surface complex",
    lead:"The Japanese Mars surface-preparation system was the collection of independently delivered machines and stores operating at the first Japanese crewed landing site before the astronauts left Earth. It converted a surveyed location into a tested refuge, work site, landing zone, and return point without requiring the crew spacecraft to carry the entire expedition complex.",
    canon:"Robotic prepositioning of the return vehicle, propellant plant, habitat, power, rovers, communications, food, and emergency stores before the crewed flight is established. Delivery order, number of landers, common bus, module dimensions, power source, site layout, autonomy software, and formal system name remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The system moved the largest uncertainties away from the crew launch. Equipment could land, unfold, communicate, endure seasons, and expose faults while replacement opportunities still existed.</p>"},
      {id:"delivery",title:"Distributed delivery",html:"<p>Several robotic cargo flights were safer and more compatible with Japanese launch capacity than one German-scale descending base. Whether common lander buses or several specialist vehicles carried the elements remains open.</p>"},
      {id:"utilities",title:"Power and communications",html:"<p>Power distribution, local beacons, surface communications, the <a href='imperial-deep-space-network.html'>deep-space route</a>, navigation references, and weather observations formed the enabling layer. The precise balance of solar, nuclear, and stored power is not fixed.</p>"},
      {id:"habitation",title:"Habitation and stores",html:"<p>The <a href='japanese-mars-surface-habitat.html'>surface habitat</a> arrived with food, medical supplies, spares, emergency stores, environmental equipment, and work space. Automatic systems maintained a habitable condition or supplied the evidence needed to delay the crew.</p>"},
      {id:"mobility",title:"Rovers and site work",html:"<p>Rovers inspected the landing approach, moved cargo, placed instruments and beacons, examined routes, and provided crew mobility and rescue capacity. Their designations and exact crewed or uncrewed division remain open.</p>"},
      {id:"return",title:"Return chain",html:"<p>The <a href='japanese-mars-return-vehicle.html'>return vehicle</a> and <a href='japanese-mars-propellant-plant.html'>propellant plant</a> were treated as one readiness problem. Storage, fueling, valves, power, software, communications, and departure support had to demonstrate credible operation before the landing party was committed.</p>"},
      {id:"handover",title:"Crew handover",html:"<p>After landing, the astronauts inspected rather than created the site. They assumed control of equipment already operating under delayed supervision and retained the crew spacecraft as an additional refuge while surface systems were commissioned.</p>"}
    ],
    related:[{href:"japanese-mars-preparation-campaign.html",kicker:"Parent campaign",label:"Japanese Mars Preparation Campaign"},{href:"japanese-mars-surface-habitat.html",kicker:"Occupied element",label:"Japanese Mars Surface Habitat"},{href:"japanese-mars-return-vehicle.html",kicker:"Return element",label:"Japanese Mars Return Vehicle"},{href:"japanese-mars-propellant-plant.html",kicker:"Fuel production",label:"Japanese Mars Propellant Plant"},{href:"distributed-mars-robotic-system.html",kicker:"Technical ancestor",label:"Distributed Mars Robotic System"}],
    facts:[["Status before crew launch","Delivered and automatically checked"],["Principal elements","Power, communications, habitat, rovers, stores, propellant plant, and return vehicle"],["Delivery method","Multiple robotic cargo flights"],["Human role","Inspection, commissioning, science, and operation"],["Formal name and site layout","Open"]],
    categories:["Mars infrastructure","Japanese Mars program","Robotic construction","Crewed Mars mission support"]
  }),

  "japanese-mars-return-vehicle": japaneseMarsArticle({
    title:"Japanese Mars return vehicle",category:"Spacecraft",landscape:japaneseMarsArchitecture,infoboxKicker:"Prepositioned Mars return system",
    lead:"The Japanese Mars return vehicle was the uncrewed spacecraft placed at the expedition site before the first Japanese crew departed for Mars. Its presence made return an independently tested surface capability rather than an unverified function carried into danger with the landing party.",
    canon:"Robotic prepositioning before the crewed mission, integration with the surface propellant plant, automatic checkout, and role in the return chain are established. It is not settled whether the vehicle performed surface ascent only, ascent and Earth return, or rendezvous with another element; its name, stages, propulsion, capacity, mass, and reuse remain open.",
    sections:[
      {id:"principle",title:"Return before departure",html:"<p>Japanese doctrine required the machinery of escape to exist on Mars before the crew accepted interplanetary risk. This inverted expedition logic in which people arrived carrying the first complete opportunity to leave.</p>"},
      {id:"delivery",title:"Robotic delivery",html:"<p>The vehicle landed as part of the <a href='japanese-mars-surface-preparation-system.html'>surface-preparation system</a> and entered a protected waiting state. The delivery date, lander arrangement, and interval before crew arrival remain open.</p>"},
      {id:"checkout",title:"Automatic checkout",html:"<p>Telemetry covered power, thermal condition, pressure, avionics, guidance, communications, valves, engine health, and storage. Surface robots could inspect accessible structures and connections, but the degree of robotic repair is not fixed.</p>"},
      {id:"propellant",title:"Propellant relationship",html:"<p>The neighboring <a href='japanese-mars-propellant-plant.html'>propellant plant</a> reduced the mass that had to be landed from Earth. Repeated production, transfer, storage, and leak checks became part of mission authorization.</p>"},
      {id:"architecture",title:"Unsettled flight architecture",html:"<p>Contemporary summaries call it a return vehicle without resolving whether it was a Mars-ascent craft, a complete direct-return ship, or one part of a surface-to-orbit rendezvous chain. The archive preserves that ambiguity rather than assigning a later design.</p>"},
      {id:"crew",title:"Crew preparation",html:"<p>After landing, astronauts physically inspected the waiting vehicle, verified loads and interfaces, and maintained it throughout surface operations. Its cabin or shelter may also have offered an emergency refuge, but this is not established.</p>"},
      {id:"meaning",title:"Strategic meaning",html:"<p>The prepositioned vehicle expressed the machine-first doctrine in its most consequential form: human presence followed a demonstrated return path rather than relying upon confidence in a vehicle never operated on Mars.</p>"}
    ],
    related:[{href:"japanese-mars-propellant-plant.html",kicker:"Surface fuel",label:"Japanese Mars Propellant Plant"},{href:"japanese-mars-crew-spacecraft.html",kicker:"Inbound vehicle",label:"Japanese Mars Crew Spacecraft"},{href:"japanese-mars-expedition.html",kicker:"Principal mission",label:"Japanese Mars Expedition"},{href:"machine-first-space-doctrine.html",kicker:"Design doctrine",label:"Machine-First Space Doctrine"}],
    facts:[["Delivery","Before the crewed expedition"],["Condition on arrival","Uncrewed and automatically checked"],["Fuel support","Surface propellant plant"],["Function","Crew return chain"],["Ascent and Earth-return arrangement","Open"],["Name and specifications","Open"]],
    categories:["Japanese spacecraft","Mars ascent vehicles","Japanese Mars program","Robotic prepositioning"]
  }),

  "japanese-mars-propellant-plant": japaneseMarsArticle({
    title:"Japanese Mars propellant plant",category:"Mars infrastructure",landscape:japaneseMarsReadiness,infoboxKicker:"Automatic surface process plant",
    lead:"The Japanese Mars propellant plant was the automatic production, conditioning, storage, and transfer installation delivered before Japan's first crewed expedition. It supported the prepositioned return vehicle and had to establish a measurable fuel reserve before the crew launch was authorized.",
    canon:"Prepositioning, automatic operation, support of the return system, and readiness testing are established. Feedstocks, chemistry, production rate, storage method, power source, redundancy, launch date, and whether all or only part of the return propellant was made locally remain open.",
    sections:[
      {id:"role",title:"Role in the direct plan",html:"<p>Producing or conditioning propellant at Mars reduced cargo carried across the interplanetary route and connected crew safety to a long automatic operating record. The plant was not a speculative experiment added after landing; it was part of the return case.</p>"},
      {id:"feedstock",title:"Feedstock and chemistry",html:"<p>The term describes a local process plant, but the registered account does not select methane and oxygen, hydrogen and oxygen, another propellant pair, or the balance between Martian and delivered feedstocks. Those choices remain open.</p>"},
      {id:"power",title:"Power and thermal control",html:"<p>Collection, compression, reaction, purification, refrigeration, pumping, and storage imposed continuous power and heat-rejection demands. The final power system may have combined several sources; no reactor or array specification is established.</p>"},
      {id:"storage",title:"Storage and transfer",html:"<p>Tanks, plumbing, seals, filters, valves, instrumentation, and transfer connections had to tolerate dust and long thermal cycles. Telemetry reported reserve quantity and quality rather than merely whether the plant was running.</p>"},
      {id:"testing",title:"Readiness production",html:"<p>Mission control required sustained output, stable storage, successful transfers, and fault recovery before certifying the <a href='japanese-mars-return-vehicle.html'>return vehicle</a>. A single demonstration batch could not prove the whole chain.</p>"},
      {id:"crew",title:"Crewed maintenance",html:"<p>The landing party inspected equipment, replaced accessible parts, verified the stored reserve, and preserved production or conditioning capacity during its stay. Exact maintenance provisions remain open.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The plant made local industrial process a condition of human arrival. Later settlement planning could therefore begin with experience in operating a remote Mars utility rather than only in landing sealed supplies.</p>"}
    ],
    related:[{href:"japanese-mars-return-vehicle.html",kicker:"Principal consumer",label:"Japanese Mars Return Vehicle"},{href:"japanese-mars-surface-preparation-system.html",kicker:"Host system",label:"Mars Surface-Preparation System"},{href:"japanese-mars-preparation-campaign.html",kicker:"Readiness campaign",label:"Japanese Mars Preparation Campaign"},{href:"japanese-nuclear-power.html",kicker:"Power context",label:"Nuclear Power in Japan"}],
    facts:[["Delivery","Before the crewed expedition"],["Operation","Automatic with delayed supervision"],["Principal purpose","Support of crew return"],["Certification","Reserve production, storage, transfer, and fault recovery"],["Feedstock, chemistry, and output","Open"],["Power source","Open"]],
    categories:["Mars resource utilization","Japanese Mars program","Spaceflight propellants","Robotic industry"]
  }),

  "japanese-mars-surface-habitat": japaneseMarsArticle({
    title:"Japanese Mars surface habitat",category:"Mars habitats",landscape:japaneseMarsArchitecture,infoboxKicker:"Prepositioned crew habitat",
    lead:"The Japanese Mars surface habitat was the occupied module or module group delivered and checked robotically before the first Japanese Mars crew arrived. It supplied a tested environmental refuge, work space, stores, and medical support separate from the compact crew spacecraft.",
    canon:"Prepositioning before the human mission, automatic environmental checkout, connection to power and communications, accompanying food and emergency stores, and occupation by the first crew are established. Form, module count, pressure, shielding, burial, capacity, life-support closure, interior plan, and official name remain open.",
    sections:[
      {id:"delivery",title:"Delivery before occupation",html:"<p>The habitat reached the selected site in the robotic cargo campaign. Automatic deployment and inspection allowed structural, thermal, electrical, and environmental faults to appear before the crew launch window.</p>"},
      {id:"environment",title:"Environmental systems",html:"<p>Atmosphere, temperature, humidity, water, waste, fire detection, contamination control, and medical telemetry were maintained or cycled under delayed supervision. The degree of biological closure is not established.</p>"},
      {id:"shielding",title:"Radiation and surface protection",html:"<p>Japanese lunar experience supported shielding, protected sleeping, storm refuge, dust control, and remote handling. Whether the Mars habitat was buried, bermed, covered by bags or blocks, or protected primarily by delivered structure remains open.</p>"},
      {id:"stores",title:"Food, spares, and emergency reserves",html:"<p>Food and emergency stores were separately enumerated in the preparation plan because survival could not depend on the crew spacecraft alone. Consumables, medical supplies, tools, seals, filters, and replacement electronics were distributed against a single loss.</p>"},
      {id:"interfaces",title:"Surface interfaces",html:"<p>The habitat connected operationally to power, communications, navigation, rovers, scientific instruments, the propellant plant, and the return vehicle. Common interfaces mattered more than common ownership or one physical pressure hull.</p>"},
      {id:"arrival",title:"Arrival of the crew",html:"<p>The astronauts first verified a place already reporting itself as habitable. They transferred essential loads, inspected hidden or inaccessible systems, and retained the <a href='japanese-mars-crew-spacecraft.html'>crew spacecraft</a> as a separate refuge during commissioning.</p>"},
      {id:"settlement",title:"From expedition shelter to outpost",html:"<p>The first habitat was designed for a bounded expedition, not immediately registered as a permanent settlement. Its survival and reuse nevertheless provided a physical nucleus for later Japanese occupation.</p>"}
    ],
    related:[{href:"japanese-mars-surface-preparation-system.html",kicker:"Surface complex",label:"Mars Surface-Preparation System"},{href:"japanese-mars-crew-spacecraft.html",kicker:"Arrival vehicle",label:"Japanese Mars Crew Spacecraft"},{href:"kaguya-base.html",kicker:"Lunar experience",label:"Kaguya Base"},{href:"japanese-mars-expedition.html",kicker:"First occupants",label:"Japanese Mars Expedition"}],
    facts:[["Delivery","Before the crewed expedition"],["Condition before arrival","Automatically checked"],["Role","Habitation, work, medicine, and refuge"],["Supporting stores","Food, spares, and emergency reserve"],["Power and communications","External surface system"],["Form and capacity","Open"]],
    categories:["Mars habitats","Japanese Mars program","Crewed Mars missions","Robotic prepositioning"]
  }),

  "japanese-mars-crew-spacecraft": japaneseMarsArticle({
    title:"Japanese Mars crew spacecraft",category:"Crewed spacecraft",landscape:japaneseMarsArchitecture,infoboxKicker:"Compact direct Mars vehicle",
    lead:"The Japanese Mars crew spacecraft was the compact vehicle or connected flight stack that carried Japan's first Mars expedition after the robotic surface system had passed its readiness tests. It flew a comparatively direct mission to the prepared landing site instead of waiting for a German-scale lunar-industrial chain and permanent interplanetary yard.",
    canon:"Compact direct architecture, launch in the early 2000s, departure only after robotic preparation, Japanese command, associated-state participation, delivery of the crew to the surface, and reliance on a prepositioned return system are established. Vehicle name, launch date, crew, stages, assembly point, launcher, propulsion, dimensions, entry method, landing arrangement, and reuse remain open.",
    sections:[
      {id:"direct",title:"Meaning of direct",html:"<p>Direct described the campaign's logistical path, not necessarily a single indivisible spacecraft. Japan did not route the expedition through a large lunar construction economy or assemble a German-style ship carrying an entire base in folded form.</p>"},
      {id:"authorization",title:"Launch authorization",html:"<p>The <a href='japanese-mars-preparation-campaign.html'>preparation campaign</a> had to show an operating habitat, power and communications, mobility, stores, propellant reserve, and credible return chain. A missed window was preferable to launching people toward an unverified site.</p>"},
      {id:"transit",title:"Interplanetary transit",html:"<p>The crew vehicle emphasized bounded mass, closed-cycle life support, automatic monitoring, repair access, radiation shelter, exercise, medicine, communications, and a limited set of mission objectives. Exact artificial-gravity and propulsion choices remain open.</p>"},
      {id:"arrival",title:"Mars arrival and descent",html:"<p>The registered account says the human spacecraft flew comparatively directly to the surface. It does not settle whether a cruise stage, aeroshell, descent stage, or landing module separated before touchdown.</p>"},
      {id:"site",title:"Landing at the prepared site",html:"<p>Navigation references, weather data, beacons, hazard surveys, and the operating <a href='japanese-mars-surface-preparation-system.html'>surface system</a> supported arrival. The crew then transferred into the prepositioned habitat and commissioned the wider complex.</p>"},
      {id:"return",title:"Relationship to the return vehicle",html:"<p>The inbound spacecraft was not the only route home. A separately prepositioned <a href='japanese-mars-return-vehicle.html'>return vehicle</a>, supported by the surface propellant plant, supplied the demonstrated departure capability. The division of Earth-return functions between them remains open.</p>"},
      {id:"comparison",title:"Comparison with rival systems",html:"<p>Germany carried an integrated base aboard an orbit-assembled ship. Britain flew an austere sovereign direct mission, while America divided transit, entry, and surface work among corporate vehicles. Japan's distinction was that machines established and proved the destination before the compact human flight.</p>"}
    ],
    related:[{href:"japanese-mars-expedition.html",kicker:"Principal mission",label:"Japanese Mars Expedition"},{href:"japanese-mars-surface-habitat.html",kicker:"Surface refuge",label:"Japanese Mars Surface Habitat"},{href:"japanese-mars-return-vehicle.html",kicker:"Return chain",label:"Japanese Mars Return Vehicle"},{href:"hikari-program.html",kicker:"Crewed lineage",label:"Hikari Program"},{href:"kobo-horai.html",kicker:"Orbital command",label:"Kōbō–Hōrai"}],
    facts:[["Mission period","Early 2000s"],["Operator","Empire of Japan"],["Architecture","Compact and comparatively direct"],["Destination","Prepared Mars surface site"],["Surface support","Prepositioned robotic complex"],["Return support","Separately prepositioned return system"],["Name, crew, stages, and propulsion","Open"]],
    categories:["Japanese spacecraft","Crewed Mars spacecraft","Japanese Mars program","Early 2000s in spaceflight"]
  })
});

const addJapaneseMarsRelated = (slug,item) => {
  const related = window.deepArticles[slug]?.related;
  if (related && !related.some(entry => entry.href === item.href)) related.push(item);
};

addJapaneseMarsRelated("japanese-mars-expedition",{href:"japanese-mars-preparation-campaign.html",kicker:"Robotic preparation",label:"Japanese Mars Preparation Campaign"});
addJapaneseMarsRelated("japanese-mars-expedition",{href:"japanese-mars-crew-spacecraft.html",kicker:"Crew vehicle",label:"Japanese Mars Crew Spacecraft"});
addJapaneseMarsRelated("japanese-mars-expedition",{href:"japanese-mars-surface-preparation-system.html",kicker:"Prepared destination",label:"Mars Surface-Preparation System"});
addJapaneseMarsRelated("distributed-mars-robotic-system",{href:"japanese-mars-preparation-campaign.html",kicker:"Crewed culmination",label:"Japanese Mars Preparation Campaign"});
addJapaneseMarsRelated("machine-first-space-doctrine",{href:"japanese-mars-preparation-campaign.html",kicker:"Mature demonstration",label:"Japanese Mars Preparation Campaign"});
addJapaneseMarsRelated("kaguya-base",{href:"japanese-mars-crew-spacecraft.html",kicker:"Planetary successor",label:"Japanese Mars Crew Spacecraft"});
addJapaneseMarsRelated("imperial-deep-space-network",{href:"japanese-mars-preparation-campaign.html",kicker:"Mars campaign",label:"Japanese Mars Preparation Campaign"});

const japaneseMarsOverview = window.deepArticles["japanese-mars-expedition"];
if (japaneseMarsOverview) {
  const preparation = japaneseMarsOverview.sections.find(section => section.id === "preparation");
  if (preparation) preparation.html = "<p>The <a href='japanese-mars-preparation-campaign.html'>preparation campaign</a> extended the 1984 distributed system into a long operating record. Robots prepositioned and tested a <a href='japanese-mars-surface-preparation-system.html'>surface complex</a> containing the return, propellant, habitat, power, mobility, communications, and reserve systems required before crew launch.</p>";
  const architecture = japaneseMarsOverview.sections.find(section => section.id === "architecture");
  if (architecture) architecture.html = "<p>The compact <a href='japanese-mars-crew-spacecraft.html'>crew spacecraft</a> flew comparatively directly to the prepared site. A separately delivered <a href='japanese-mars-return-vehicle.html'>return vehicle</a> and <a href='japanese-mars-propellant-plant.html'>propellant plant</a> made departure a demonstrated surface capability rather than an untested promise.</p>";
  const surface = japaneseMarsOverview.sections.find(section => section.id === "surface");
  if (surface) surface.html = "<p>The crew landed beside an operating <a href='japanese-mars-surface-habitat.html'>habitat</a>, inspected the robotic complex, and began a bounded surface expedition on a planet already occupied by German, British, and American parties. Its exact geography remains open.</p>";
}
