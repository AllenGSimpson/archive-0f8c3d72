window.deepArticles = window.deepArticles || {};

const marsplanSubsystemSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Marsplan 92 integrated expedition and first Mars base"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — late-1992 departure, 1993 arrival, and surface establishment"},
  {href:"../transcript.md",label:"Master Transcript — Mars-Expeditionsverband, ship systems, pressure passages, and landing sequence"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open ship name, crew, propulsion, masses, and mission dates"}
];

const marsplanSubsystemLandscape = {src:"assets/diagrams/marsplan-92-expedition-architecture.svg",alt:"Schematic of the Marsplan 92 integrated expedition vessel",caption:"The interplanetary ship joined a nuclear propulsion spine, hydrogen section, paired rotating quarters, orbital node, and lander cluster before separating at Mars"};
const marsplanDescentLandscape = {src:"assets/diagrams/marsplan-92-surface-group.svg",alt:"Marsplan 92 descent sequence and initial base layout",caption:"Four cargo elements landed and passed checkout before the crew committed to the surface"};

const marsplanSubsystemArticle = config => ({
  category:"Spaceflight",
  eyebrow:"Marsplan 92 · German Mars expedition · 1992–1994",
  infoboxKicker:"Marsplan 92 mission system",
  landscape:marsplanSubsystemLandscape,
  ...config,
  sources:[...marsplanSubsystemSources,...(config.additionalSources || [])],
  categories:config.categories || ["Marsplan 92","German space program","Crewed Mars spacecraft","1990s in spaceflight"]
});

Object.assign(window.deepArticles, {
  "mars-expeditionsverband-1":marsplanSubsystemArticle({
    title:"Mars-Expeditionsverband 1",category:"Space missions",infoboxKicker:"Working designation for the first German Mars expedition",
    lead:"Mars-Expeditionsverband 1, abbreviated MEV 1, is the conventional working designation for the orbit-assembled formation that carried Marsplan 92 to Mars. It was presented publicly as one expedition ship while operationally consisting of a reusable interplanetary core, two rotating habitation units, an orbital command node, and five separable surface spacecraft.",
    canon:"The one-ship public identity, formation-like operational structure, integrated Raumwerft assembly, late-1992 departure, 1993 arrival, retained orbital core, five descending elements, divided orbital and surface crews, and approximate two-and-a-half-year mission are established. Mars-Expeditionsverband 1 and MEV 1 remain useful working designations rather than fixed formal names. The official mission number, ship name, unit registry, commander, crew, dates, insignia, and legal commissioning instrument remain open.",
    sections:[
      {id:"designation",title:"Designation and naming",html:"<p><em>Mars-Expeditionsverband</em> described an expeditionary formation rather than a single conventional hull. MEV 1 became a convenient archival abbreviation. Neither it nor the proposed public name <em>Wernher von Braun</em> is treated as a finally settled formal designation.</p>"},
      {id:"one-ship",title:"One ship in public",html:"<p>At departure the formation navigated, maneuvered, communicated, and appeared as one enormous spacecraft. Broadcasts, flight-control summaries, and ceremonial language therefore treated it as the first German Mars ship.</p><p>Its irregular truss, tanks, habitats, command node, and landers nevertheless revealed that it had been assembled in orbit and never needed to support its own weight.</p>"},
      {id:"formation",title:"A formation in operation",html:"<p>At Mars the vehicle separated into an orbital return system and a five-part <a href='marsplan-92-surface-group.html'>surface group</a>. The word <em>Verband</em> captured this operational reality: propulsion, command, habitation, landing, construction, and ascent elements could act separately while remaining one mission.</p>"},
      {id:"assembly",title:"Assembly at the Raumwerft",html:"<p>The <a href='raumwerft.html'>Raumwerft</a> joined and tested the propulsion truss, tanks, rotating quarters, node, landers, radiators, communications, and pressure systems. Marsplan 92 was the first German commission whose complete deep-space vehicle had to function together for years rather than as a station module or lunar craft.</p>"},
      {id:"crew",title:"Crew division",html:"<p>The preferred working scale is eight to ten crew. Six or seven descended; two or three remained in orbit. The orbital party maintained the only complete return vehicle, coordinated landing and ascent, and could conduct rescue without abandoning the ship.</p><p>Names and final numbers remain open.</p>"},
      {id:"phases",title:"Mission phases",html:"<p>MEV 1 passed through Raumhafen assembly and departure, interplanetary coast under partial gravity, Mars-orbit checkout, sequential surface deployment, extended divided operation, ascent and rendezvous, Earth return, and recovery into a high elliptical orbit.</p>"},
      {id:"command",title:"Command relationship",html:"<p>The orbital node commanded vehicle navigation and coordinated the landings. A separate surface command descended with the habitation module. Neither staff was merely subordinate support: the surface party established the base, while the orbital party protected the route home.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The mission established Germany's characteristic interplanetary doctrine: build a complete expeditionary system in orbit, carry the settlement in folded form, retain a recoverable transport core, and convert prestige into regular infrastructure after the first arrival.</p>"}
    ],
    related:[{href:"marsplan-92-expedition-ship.html",kicker:"Integrated vehicle",label:"Marsplan 92 Expedition Ship"},{href:"german-first-mars-expedition.html",kicker:"Mission history",label:"First Human Mars Expedition"},{href:"marsplan-landing-sequence.html",kicker:"Mars operation",label:"Marsplan Landing Sequence"},{href:"raumwerft.html",kicker:"Assembly yard",label:"Raumwerft"}],
    facts:[["Working designation","Mars-Expeditionsverband 1"],["Abbreviation","MEV 1"],["Status of designation","Not finally settled"],["Departure","Late 1992"],["Mars arrival","1993"],["Working crew","8–10"],["Surface party","6–7"],["Architecture","One public ship; separable expeditionary formation"]]
  }),

  "marsplan-propulsion-spine":marsplanSubsystemArticle({
    title:"Marsplan 92 propulsion spine",category:"Spacecraft systems",infoboxKicker:"Nuclear propulsion and structural core",
    lead:"The Marsplan 92 propulsion spine was the long open truss carrying the expedition's clustered nuclear-thermal engines, shadow shielding, power machinery, radiators, maneuvering systems, propellant connections, and structural interfaces. It formed the recoverable core of the ship and remained in Mars orbit while the surface group descended.",
    canon:"The long open-truss form, rear cluster of four to six nuclear-thermal engines, direct hydrogen heating, bimodal thrust and electrical generation, shadow shielding and distance from the crew, radiators, auxiliary power, maneuvering systems, engine-out intention, retention in Mars orbit, and partial refurbishment are established as working architecture. Engine model, count, thrust, specific impulse, reactor design, truss length, manufacturer, burn schedule, radiation figures, failures, and exact reuse remain open.",
    sections:[
      {id:"structure",title:"Structural core",html:"<p>An open truss ran for hundreds of metres between the engine section and forward orbital node. It carried loads only under acceleration and rotation rather than terrestrial gravity, allowing tanks, radiators, cables, and landers to remain visibly separate.</p>"},
      {id:"engines",title:"Nuclear-thermal engine cluster",html:"<p>Four to six engines at the rear heated liquid hydrogen directly and expelled it at high velocity. A cluster supplied high thrust for departure, capture, and return maneuvers while preserving some engine-out capacity.</p><p>The exact engine count and performance remain open.</p>"},
      {id:"bimodal",title:"Bimodal operation",html:"<p>During major burns the reactors produced propulsion. During the months-long coast one or more units supplied electrical power for refrigeration, life support, communications, workshops, controls, and preparation of surface systems before separation.</p>"},
      {id:"shielding",title:"Distance and shadow shielding",html:"<p>Reactor shadow shields, intervening tanks, the truss, and physical distance reduced crew exposure. Habitats and the orbital node remained inside protected geometric sectors during routine operation and burns.</p>"},
      {id:"thermal",title:"Radiators and waste heat",html:"<p>Long radiator panels rejected heat from reactor power conversion, cryogenic machinery, environmental systems, avionics, and workshops. Radiator damage could threaten propellant and life support without disabling the engine mechanically, making inspection and isolation essential.</p>"},
      {id:"maneuver",title:"Maneuver and attitude control",html:"<p>Smaller maneuvering systems handled docking, trim, orientation, spin-system management, lander release, and orbital work that did not justify a main-engine burn. Their propellants and final arrangement remain open.</p>"},
      {id:"burns",title:"Burn sequence",html:"<p>The spine performed departure from Earth orbit, course corrections, Mars capture and maneuvers, departure from Mars, and Earth-return shaping. Propellant accounts and reactor condition were treated as mission-command questions rather than ordinary engineering consumables.</p>"},
      {id:"return",title:"Return and refurbishment",html:"<p>The propulsion core returned with the stripped ship to a high Earth orbit. Tugs recovered it for inspection. The truss and some reactor machinery were intended to survive, but engines, radiators, shielding, plumbing, or controls could require replacement before another expedition.</p>"}
    ],
    related:[{href:"marsplan-92-expedition-ship.html",kicker:"Parent vehicle",label:"Marsplan 92 Expedition Ship"},{href:"marsplan-propellant-section.html",kicker:"Hydrogen supply",label:"Marsplan Propellant Section"},{href:"raumwerft.html",kicker:"Construction and overhaul",label:"Raumwerft"},{href:"german-thorium-program.html",kicker:"Nuclear-industrial context",label:"German Thorium Programme"}],
    facts:[["Type","Open-truss propulsion and structural core"],["Main propulsion","Clustered nuclear thermal"],["Working engine count","4–6"],["Propellant","Liquid hydrogen"],["Electrical mode","Bimodal reactor power"],["Crew protection","Distance and shadow shielding"],["Mars operation","Remained in orbit"],["Final performance and engine model","Open"]]
  }),

  "marsplan-propellant-section":marsplanSubsystemArticle({
    title:"Marsplan 92 propellant section",category:"Spacecraft systems",infoboxKicker:"Cryogenic hydrogen storage and reserve system",
    lead:"The Marsplan 92 propellant section was the group of large liquid-hydrogen tanks, refrigeration machinery, transfer plumbing, reserve controls, structural mounts, and quantity-accounting systems that dominated the expedition ship's silhouette. Its protected return reserve made propellant governance a central safety and command function.",
    canon:"Approximately six large tanks as a working arrangement, administrative division among departure, Mars-capture, maneuver, emergency, and protected return stores, active zero-boil-off refrigeration, Earth and lunar sourcing, possible disposal of emptied departure tanks, retention in Mars orbit, and later greater lunar dependence are established. Tank count, geometry, volume, mass, insulation, refrigeration design, exact sourcing, jettison sequence, residuals, leaks, and transfer procedures remain open.",
    sections:[
      {id:"silhouette",title:"The dominant visual mass",html:"<p>Hydrogen's low density required very large tanks. Cylindrical or slightly bulbous vessels mounted around the spine occupied more apparent volume than the crew quarters and made the ship look like an industrial tank farm under construction.</p>"},
      {id:"accounts",title:"Mission propellant accounts",html:"<p>Working plans separated two departure stores, Mars-capture and maneuver stores, a common or emergency store, and a protected return reserve. The categories were operational accounts even where plumbing allowed controlled transfer.</p>"},
      {id:"reserve",title:"Protected return reserve",html:"<p>The return reserve was not available for routine schedule recovery, optional science, or a more convenient capture orbit. Using it required an emergency or a decision explicitly accepting reduced ability to leave Mars.</p>"},
      {id:"refrigeration",title:"Active refrigeration",html:"<p>A multiyear mission could not accept ordinary boil-off. Reactor-powered cryogenic machinery, insulation, sun management, shields, pumps, sensors, and redundant electrical paths kept hydrogen cold enough to preserve the return supply.</p>"},
      {id:"sources",title:"Earth and lunar supply",html:"<p>The first expedition probably combined Earth-produced hydrogen with material processed through the developing Mondhafen Süd economy. Exact shares remain open. Later vehicles relied increasingly upon lunar water, propellant, tanks, and high-orbit fueling.</p>"},
      {id:"transfer",title:"Plumbing and transfer",html:"<p>Valves, pumps, quantity sensors, chill-down procedures, vent control, and isolation allowed tanks to feed the engine cluster without turning one leak into loss of the entire mission reserve. Crew and controllers treated propellant state as a continuously audited record.</p>"},
      {id:"disposal",title:"Empty tanks and mass reduction",html:"<p>Some departure tanks could be discarded after the trans-Mars burn if structural and thermal requirements permitted. Others remained as shielding, reserve volume, or part of the return structure. The first mission's exact disposal sequence is not fixed.</p>"},
      {id:"hazards",title:"Hazards and mission consequences",html:"<p>Leakage, refrigeration failure, insulation damage, valve contamination, inaccurate gauging, or radiator loss could strand the expedition without any dramatic engine failure. This made the propellant section one of the ship's most maintenance-intensive systems.</p>"}
    ],
    related:[{href:"marsplan-propulsion-spine.html",kicker:"Consumer",label:"Marsplan Propulsion Spine"},{href:"marsplan-92-expedition-ship.html",kicker:"Parent vehicle",label:"Marsplan 92 Expedition Ship"},{href:"mondhafen-sud.html",kicker:"Lunar supply system",label:"Mondhafen Süd"},{href:"orbitaler-raumhafen.html",kicker:"Fueling and assembly port",label:"Orbitaler Raumhafen"}],
    facts:[["Principal propellant","Liquid hydrogen"],["Working tank count","Approximately six"],["Storage","Active zero-boil-off refrigeration"],["Administrative accounts","Departure, capture, maneuver, emergency, and return"],["Protected reserve","Earth return"],["Supply","Earth and lunar production"],["Mars operation","Remained with orbital ship"],["Dimensions and exact tank plan","Open"]]
  }),

  "marsplan-rotating-habitation":marsplanSubsystemArticle({
    title:"Marsplan 92 rotating habitation pair",category:"Spacecraft systems",infoboxKicker:"Partial-gravity cruise living system",
    lead:"The Marsplan 92 rotating habitation pair consisted of two pressure cylinders mounted on opposing deployable arms near the expedition ship's center of mass. It supplied partial gravity during the interplanetary coast, balanced inhabited mass around the spine, and gave the crew two isolatable living volumes rather than one irreplaceable cabin.",
    canon:"Two opposed habitation cylinders, extension near the center of mass, locking during burns, rotation during coast, working radius of roughly 90–100 metres and rate near two revolutions per minute, approximately Martian gravity, principal living and life-support functions, redundancy, a nonrotating transfer joint, and return with the orbital ship are established as working architecture. Dimensions, manufacturer, exact gravity, spin-up schedule, bearing design, occupancy, internal plan, health results, malfunctions, and reuse remain open.",
    sections:[
      {id:"configuration",title:"Opposed-cylinder configuration",html:"<p>Two cylinders extended on arms from a hub near the ship's center of mass. Opposed mass limited imbalance and allowed one habitat to remain usable if fire, contamination, or pressure loss isolated the other.</p>"},
      {id:"gravity",title:"Working gravity regime",html:"<p>A working radius of roughly ninety to one hundred metres at about two revolutions per minute produced acceleration close to Martian surface gravity. Exact operating values could change with mass distribution and mission phase.</p>"},
      {id:"spaces",title:"Living and working spaces",html:"<p>The pair contained sleeping compartments, galley, common room, hygiene, exercise, medical space, private workstations, hydroponic growth, principal life-support equipment, stores, and a radiation refuge.</p>"},
      {id:"redundancy",title:"Redundancy and isolation",html:"<p>Pressure doors, separate atmosphere control, distributed stores, and the twin geometry prevented one local casualty from immediately destroying all habitable volume. The system still depended upon common ship power, navigation, and return propulsion.</p>"},
      {id:"transfer",title:"Transfer to the nonrotating spine",html:"<p>Pressurized tunnels and a rotating transfer joint connected the moving quarters with the nonrotating truss and orbital node. Crew passed through the joint for maintenance, landing preparation, docking, or work in the command section.</p>"},
      {id:"burns",title:"Locking for burns and landings",html:"<p>The arms stopped and locked before major propulsion maneuvers, lander release, and the arrival campaign. Crew then acclimated to weightlessness before surface personnel entered Martian gravity.</p>"},
      {id:"health",title:"Health and mission routine",html:"<p>Partial gravity supported sleep, eating, hygiene, exercise, medical monitoring, and ordinary work over a multiyear mission. It reduced but did not eliminate uncertainty about later adaptation to Mars and Earth.</p>"},
      {id:"return",title:"Return and later use",html:"<p>The cylinders returned with the interplanetary core. Bearings, seals, arms, atmosphere systems, and pressure shells required extensive inspection. Reuse was plausible only as part of a major Raumwerft refurbishment.</p>"}
    ],
    related:[{href:"marsplan-92-expedition-ship.html",kicker:"Parent vehicle",label:"Marsplan 92 Expedition Ship"},{href:"marsplan-propulsion-spine.html",kicker:"Structural connection",label:"Marsplan Propulsion Spine"},{href:"raumwerft.html",kicker:"Spin testing",label:"Raumwerft"},{href:"promenadenring.html",kicker:"Later rotating architecture",label:"Promenadenring"}],
    facts:[["Configuration","Two opposed habitation cylinders"],["Working radius","90–100 metres"],["Working rotation","About 2 rpm"],["Working gravity","Approximately Martian gravity"],["Operation","Rotating during coast; locked during burns"],["Connection","Pressurized tunnels and rotating joint"],["Redundancy","Two isolatable living volumes"],["Final dimensions and performance","Open"]]
  }),

  "faltgang-pressure-passage":marsplanSubsystemArticle({
    title:"Faltenbalg-Druckgang",category:"Habitat systems",infoboxKicker:"Expandable Mars pressure passage",landscape:marsplanDescentLandscape,
    lead:"The Faltenbalg-Druckgang, usually shortened by crews to Faltgang, was the expandable pressure passage used to join separately landed Marsplan 92 modules into one occupied complex. A flexible pressure structure expanded inside a segmented metal exoskeleton, allowing buildings tens of metres apart to be connected without routine spacesuit travel.",
    canon:"The Faltenbalg-Druckgang and Faltgang terms, inner pressure bladder, load-bearing restraint, insulation, puncture protection, segmented exoskeleton, telescoping floor, powered deployment, rigid collars, pressure doors, isolation valves, robotic anchoring and leveling, regolith protection, typical 50–150-metre module separation, and use among habitation, workshop, stores, and crew refuge are established. Contractor, model, dimensions, pressure, deployment time, number of passages, landing package, failures, and later standard variants remain open.",
    sections:[
      {id:"name",title:"Name and purpose",html:"<p><em>Faltenbalg-Druckgang</em> literally described a bellows pressure passage. <em>Faltgang</em> became the ordinary operational term. The system joined modules that could not safely or accurately land against one another.</p>"},
      {id:"layers",title:"Pressure and restraint layers",html:"<p>An inner bladder retained atmosphere. A woven load-bearing restraint controlled shape, while insulation and puncture-resistant outer layers protected against thermal cycling, abrasion, handling damage, and small impacts.</p>"},
      {id:"skeleton",title:"Segmented exoskeleton and floor",html:"<p>A metal exoskeleton unfolded like an articulated accordion around the flexible passage. Telescoping floor panels produced a walkable surface and limited the tendency of a pressurized tube to bend or roll on uneven ground.</p>"},
      {id:"deployment",title:"Deployment",html:"<p>Powered reels extended the system between rigid docking collars. A tractor or construction robot anchored the frames, leveled the floor, checked alignment, tested seals, and verified pressure before opening either module.</p>"},
      {id:"distance",title:"Landing separation",html:"<p>Working plans allowed principal modules to land about fifty to one hundred and fifty metres apart. The corridor absorbed imperfect landing geometry without requiring the entire pressure vessel to be unloaded and moved.</p>"},
      {id:"isolation",title:"Pressure isolation",html:"<p>Rigid doors and valves terminated every passage. A puncture, fire, contamination event, or structural failure could isolate one corridor or module rather than depressurize the whole base.</p>"},
      {id:"protection",title:"Anchoring and regolith protection",html:"<p>After deployment, crews and machines anchored the exoskeleton and piled regolith along exposed sides where practical. Cover reduced thermal cycling, radiation, and impact risk without converting the passage into a buried permanent tunnel.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Faltgang made the first base visibly modular but internally traversable. Later standardized settlements used larger rigid galleries, buried utility trenches, and improved expandable connectors derived from the same principle.</p>"}
    ],
    related:[{href:"marsplan-92-surface-group.html",kicker:"Parent system",label:"Marsplan 92 Surface Group"},{href:"marsplan-habitation-medical-lander.html",kicker:"Central module",label:"Habitation and Medical Lander"},{href:"marsplan-workshop-stores-lander.html",kicker:"Connected module",label:"Workshop and Stores Lander"},{href:"tharsis-olympus-mars-base.html",kicker:"First installation",label:"Tharsis–Olympus Mars Base"}],
    facts:[["Formal term","Faltenbalg-Druckgang"],["Crew term","Faltgang"],["Type","Expandable pressure passage"],["Structure","Flexible pressure body in segmented exoskeleton"],["Floor","Telescoping rigid panels"],["Typical span","50–150 metres"],["Safety","Doors and isolation valves at both ends"],["Model and dimensions","Open"]]
  }),

  "marsplan-landing-sequence":marsplanSubsystemArticle({
    title:"Marsplan 92 arrival and landing sequence",category:"Space operations",infoboxKicker:"1993 Mars-orbit checkout and surface commitment",landscape:marsplanDescentLandscape,
    lead:"The Marsplan 92 arrival and landing sequence was the ten-to-fourteen-day orbital checkout and several-day deployment through which Germany converted one interplanetary vessel into the first human Mars base. Power, construction, habitation, repair, stores, and vehicles landed before the surface party committed itself to descent.",
    canon:"A six-to-nine-month transit, 1993 arrival, suitable Mars orbit over the Olympus region, approximately 10–14 days of mapping and checkout, artificial-gravity shutdown, weather and dust assessment, communications deployment, sequential landings across several days, fixed operational order, abort before crew descent if essential systems failed, retained orbital crew, and final crew commitment are established as working sequence. Exact arrival and landing dates, orbit, transit duration, crew numbers, weather, landing intervals, failures, Phobos contingency, and first-surface chronology remain open.",
    sections:[
      {id:"arrival",title:"Arrival in Mars orbit",html:"<p>After a working six-to-nine-month transit, the complete expedition entered an orbit capable of repeated observation and communication with the Olympus landing region. Capture left the ship intact until navigation, propulsion, and lander condition had been assessed.</p>"},
      {id:"checkout",title:"Ten to fourteen days of checkout",html:"<p>The crews mapped weather, confirmed the landing ellipse, inspected landers and ascent systems, deployed communications support, refined navigation, and waited for acceptable surface wind and dust conditions. The period was an operational gate rather than ceremonial delay.</p>"},
      {id:"gravity",title:"End of cruise gravity",html:"<p>The <a href='marsplan-rotating-habitation.html'>rotating habitation pair</a> slowed and locked before deployment. Surface personnel reacclimated to weightlessness before entering Martian gravity; orbital personnel prepared for the long nonrotating phase above Mars.</p>"},
      {id:"cargo",title:"Four cargo landings",html:"<p>The <a href='marsplan-power-construction-lander.html'>power and construction lander</a> descended first, followed by <a href='marsplan-habitation-medical-lander.html'>habitation and medicine</a>, <a href='marsplan-workshop-stores-lander.html'>workshop and stores</a>, and <a href='marsplan-vehicle-field-lander.html'>vehicles and field operations</a>. Landings occurred over several days rather than in one wave.</p>"},
      {id:"abort",title:"Abort and fallback logic",html:"<p>If the reactor, communications, habitation, life support, or ascent chain failed checkout, the crew did not descend. The expedition could conduct orbital science, attempt a limited Phobos objective where practical, and preserve enough propellant to return to Earth.</p>"},
      {id:"crew",title:"Crew descent",html:"<p>The <a href='marsplan-crew-lander.html'>crew descent-and-ascent craft</a> landed only after the four cargo elements reported operational. Descent transformed a reversible orbital expedition into a human surface occupation.</p>"},
      {id:"orbital",title:"The orbital watch",html:"<p>Two or preferably three crew remained with the node and return ship. They maintained continuous watch, coordinated landings, preserved medical and engineering redundancy, and retained the ability to conduct rescue without leaving the vehicle unattended.</p>"},
      {id:"commissioning",title:"Commissioning the base",html:"<p>After landing, the surface party inspected modules, deployed <a href='faltgang-pressure-passage.html'>Faltgänge</a>, verified power and pressure, commissioned vehicles and workshops, established isolation rules, and began converting landed spacecraft into the Tharsis–Olympus base.</p>"}
    ],
    related:[{href:"mars-expeditionsverband-1.html",kicker:"Parent formation",label:"Mars-Expeditionsverband 1"},{href:"marsplan-92-surface-group.html",kicker:"Descending system",label:"Marsplan 92 Surface Group"},{href:"marsplan-orbital-node.html",kicker:"Landing control",label:"Marsplan Orbital Node"},{href:"tharsis-olympus-mars-base.html",kicker:"Result",label:"Tharsis–Olympus Mars Base"}],
    facts:[["Arrival","1993"],["Working transit","6–9 months"],["Orbital checkout","10–14 days"],["Cargo landings","Four, in operational order"],["Crew landing","After cargo-system checkout"],["Deployment duration","Several days"],["Orbital crew","Working preference 3"],["Exact dates and orbit","Open"]]
  })
});

const addMarsplanSubsystemRelated = (slug,items) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=article.related || [];
  for(const item of items) if(!article.related.some(existing=>existing.href===item.href)) article.related.push(item);
};

const shipSubsystemLinks=[
  {href:"mars-expeditionsverband-1.html",kicker:"Working mission designation",label:"Mars-Expeditionsverband 1"},
  {href:"marsplan-propulsion-spine.html",kicker:"Propulsion and structure",label:"Marsplan Propulsion Spine"},
  {href:"marsplan-propellant-section.html",kicker:"Hydrogen system",label:"Marsplan Propellant Section"},
  {href:"marsplan-rotating-habitation.html",kicker:"Cruise quarters",label:"Marsplan Rotating Habitation"}
];

addMarsplanSubsystemRelated("marsplan-92-expedition-ship",shipSubsystemLinks);
addMarsplanSubsystemRelated("marsplan-92",shipSubsystemLinks);
addMarsplanSubsystemRelated("german-first-mars-expedition",[{href:"marsplan-landing-sequence.html",kicker:"Arrival operation",label:"Marsplan Arrival and Landing Sequence"}]);
addMarsplanSubsystemRelated("marsplan-92-surface-group",[
  {href:"marsplan-landing-sequence.html",kicker:"Deployment operation",label:"Marsplan Landing Sequence"},
  {href:"faltgang-pressure-passage.html",kicker:"Pressure connection",label:"Faltenbalg-Druckgang"}
]);
for(const slug of ["marsplan-habitation-medical-lander","marsplan-workshop-stores-lander","marsplan-crew-lander","tharsis-olympus-mars-base"]){
  addMarsplanSubsystemRelated(slug,[{href:"faltgang-pressure-passage.html",kicker:"Connected pressure system",label:"Faltenbalg-Druckgang"}]);
}

const expeditionShip=window.deepArticles["marsplan-92-expedition-ship"];
if(expeditionShip){
  const replacements={
    concept:"<p>The expedition did not send a completed base years in advance. Propulsion, living space, command, return systems, and surface hardware traveled together from Earth orbit to Mars orbit. Germany described the vessel as a base in folded form and the working formation as <a href='mars-expeditionsverband-1.html'><em>Mars-Expeditionsverband 1</em></a>.</p>",
    propulsion:"<p>The <a href='marsplan-propulsion-spine.html'>propulsion spine</a> joined a long open truss to a clustered nuclear-thermal engine section. Shadow shielding, radiators, maneuvering systems, reactor control, and bimodal electrical generation allowed the same core to propel the ship and power its long coast.</p>",
    propellant:"<p>The <a href='marsplan-propellant-section.html'>propellant section</a> divided large refrigerated liquid-hydrogen tanks among departure, capture, maneuver, emergency, and protected return accounts. Active refrigeration preserved the multiyear return supply.</p>",
    habitation:"<p>The <a href='marsplan-rotating-habitation.html'>paired rotating habitats</a> extended on opposing arms near the center of mass during coast and locked during burns. Two isolatable cylinders supplied partial gravity, living space, medical care, exercise, hydroponics, shelter, and principal life support.</p>"
  };
  for(const [id,html] of Object.entries(replacements)){const section=expeditionShip.sections?.find(item=>item.id===id);if(section)section.html=html;}
}

const surfaceGroup=window.deepArticles["marsplan-92-surface-group"];
if(surfaceGroup){
  const corridor=surfaceGroup.sections?.find(item=>item.id==="corridors");
  if(corridor) corridor.html="<p><a href='faltgang-pressure-passage.html'>Faltenbalg-Druckgänge</a>, shortened to <em>Faltgänge</em>, joined the principal occupied modules through expandable pressure bodies, segmented exoskeletons, telescoping floors, rigid collars, and isolation doors. Working spans of 50–150 metres absorbed imperfect landing geometry without connecting the remote reactor.</p>";
  const sequence=surfaceGroup.sections?.find(item=>item.id==="sequence");
  if(sequence && !sequence.html.includes("marsplan-landing-sequence.html")) sequence.html += "<p>The complete operational gate is described in the <a href='marsplan-landing-sequence.html'>Marsplan 92 arrival and landing sequence</a>.</p>";
}
