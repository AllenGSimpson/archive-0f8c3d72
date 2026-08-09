window.deepArticles = window.deepArticles || {};

const latinCeresSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Latin Space Community, Stella Maris yard, and Ceres expedition"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — early-2000s first human Ceres landing"},
  {href:"../transcript.md",label:"Master Transcript, Turn 747 — Latin exploratory-navy doctrine and deep-space ship"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — unresolved mature-space mission specifications"}
];

const latinExplorationArchitecture = {src:"assets/diagrams/latin-ceres-exploration-architecture.svg",alt:"Diagram of the Latin Space Community's Ceres exploration architecture",caption:"Stella Maris supported a self-contained exploration ship able to survey the belt, process extraterrestrial water, and carry a detachable landing system"};
const latinCeresCampaign = {src:"assets/diagrams/latin-ceres-campaign.svg",alt:"Campaign sequence for the first human expedition to Ceres",caption:"Resource surveys and orbital reconnaissance preceded the low-gravity landing rather than serving as an afterthought to it"};

const latinCeresArticle = config => ({
  category:"Latin spaceflight",
  eyebrow:"Latin Space Community · 1985–early 2000s",
  infoboxKicker:"Latin main-belt exploration system",
  ...config,
  sources:[...latinCeresSources,...(config.additionalSources || [])],
  categories:config.categories || ["Latin Space Community","Asteroid exploration","Ceres","Early 2000s"]
});

Object.assign(window.deepArticles, {
  "latin-main-belt-exploration-program": latinCeresArticle({
    title:"Latin main-belt exploration program",category:"Space programs",landscape:latinCeresCampaign,infoboxKicker:"Human and robotic asteroid-belt program",
    lead:"The Latin main-belt exploration program was the Latin Space Community's coordinated robotic and human campaign beyond Mars. Developed from Stella Maris during the 1990s, it surveyed hydrated asteroids, tested long-duration exploration ships, and culminated in the first human landing on Ceres in the early 2000s.",
    canon:"The Latin Space Community operator, Stella Maris exploration-yard development in the early 1990s, self-contained nuclear-powered exploration ships, robotic belt surveys, Ceres and hydrated carbonaceous targets, extraterrestrial-water processing, and first human Ceres landing in the early 2000s are established. Formal program name, authorization date, budgets, launch sequence, spacecraft names, mission dates, crews, and discoveries remain open.",
    sections:[
      {id:"choice",title:"Beyond a fifth Mars landing",html:"<p>Germany, Britain, America, and Japan had already defined four different roads to Mars. The Latin Space Community chose the main belt to claim an exploratory distinction with scientific and logistical value instead of measuring itself as the next arrival at an occupied destination.</p>"},
      {id:"institution",title:"Institutional foundation",html:"<p><a href='stella-maris.html'>Stella Maris</a> began as a multinational scientific station in 1985. Its early-1990s <a href='stella-maris-exploration-yard.html'>exploration yard</a> added the construction, tankage, propulsion, nuclear-handling, habitation, and servicing functions needed for long voyages.</p>"},
      {id:"survey",title:"Robotic belt surveys",html:"<p>The <a href='latin-asteroid-resource-survey.html'>resource-survey campaign</a> examined Ceres and hydrated carbonaceous bodies for water, landing conditions, navigation hazards, communications geometry, and scientifically useful targets before the crewed ship departed.</p>"},
      {id:"ship",title:"The exploration-ship doctrine",html:"<p>A <a href='latin-deep-space-exploration-ship.html'>self-contained exploration vessel</a> carried long-duration habitation, repair capacity, probes, a landing system, and nuclear propulsion. It was intended to visit more than one class of destination rather than serve as one oversized descent craft.</p>"},
      {id:"water",title:"Extending the voyage with water",html:"<p>The program treated extraterrestrial water as life-support stock, radiation and thermal mass, chemical feedstock, and possible reaction mass. The <a href='latin-extraterrestrial-water-system.html'>water-processing system</a> expressed the operating principle: carry enough to reach the belt, then use the belt to increase endurance.</p>"},
      {id:"ceres",title:"The Ceres expedition",html:"<p>The <a href='latin-ceres-expedition.html'>first crewed expedition</a> entered Ceres orbit, completed close survey, and used a <a href='latin-ceres-landing-system.html'>detachable low-gravity landing system</a> to place people on the surface in the early 2000s.</p>"},
      {id:"legacy",title:"Exploratory-navy legacy",html:"<p>The achievement made the Community legible as an outward-moving federation of shared ports, ships, and specialist national workshares. It also created operational experience relevant to later activity around Vesta, Ceres, and other resource-bearing bodies.</p>"}
    ],
    related:[{href:"latin-space-community.html",kicker:"Operator",label:"Latin Space Community"},{href:"latin-ceres-expedition.html",kicker:"Crewed culmination",label:"Latin Expedition to Ceres"},{href:"stella-maris-exploration-yard.html",kicker:"Orbital base",label:"Stella Maris Exploration Yard"},{href:"planetary-satellite-system.html",kicker:"Wider infrastructure",label:"Planetary Satellite System"},{href:"sancta-maria-lunae.html",kicker:"Lunar institution",label:"Sancta Maria Lunae"}],
    facts:[["Development","1990s–early 2000s"],["Operator","Latin Space Community"],["Orbital center","Stella Maris exploration yard"],["Principal region","Main asteroid belt"],["Major targets","Ceres and hydrated carbonaceous bodies"],["Human culmination","First Ceres landing"],["Formal program name","Open"]],
    categories:["Latin space program","Main-belt exploration","Crewed asteroid missions","Stella Maris"]
  }),

  "latin-asteroid-resource-survey": latinCeresArticle({
    title:"Latin asteroid resource survey",category:"Robotic space programs",landscape:latinCeresCampaign,infoboxKicker:"Robotic main-belt reconnaissance campaign",
    lead:"The Latin asteroid resource survey was the robotic reconnaissance campaign that mapped Ceres and hydrated carbonaceous bodies before the first human main-belt expedition. It joined conventional planetary science to the practical questions of navigation, communications, landing, volatile access, and servicing a reusable exploration ship.",
    canon:"Robotic surveys before the Ceres expedition, Ceres and hydrated carbonaceous targets, water-resource emphasis, navigation and landing reconnaissance, and transfer of results to the human program are established. Survey name, spacecraft roster, launch dates, target list, instruments, maps, resource estimates, and data-sharing rules remain open.",
    sections:[
      {id:"objectives",title:"Survey objectives",html:"<p>The campaign had to answer which bodies were scientifically valuable, reachable on useful trajectories, observable through the Community's communications network, and capable of supplying water or safe proximity operations.</p>"},
      {id:"targets",title:"Ceres and carbonaceous bodies",html:"<p>Ceres was the principal destination, while hydrated carbonaceous asteroids offered smaller test cases and alternate resource targets. The program did not treat the belt as a field of ordinary comets.</p>"},
      {id:"mapping",title:"Remote sensing and mapping",html:"<p>Imaging, spectral work, gravity estimates, thermal observations, rotation, shape, surface texture, and orbital-environment measurements narrowed candidate operations. Exact instruments and target coverage remain open.</p>"},
      {id:"navigation",title:"Navigation and communications",html:"<p>Tracking campaigns refined ephemerides, approach geometry, relay schedules, conjunction planning, and emergency communications. Light-time required local automatic control even when strategic decisions remained on Earth or Stella Maris.</p>"},
      {id:"resources",title:"Resource characterization",html:"<p>Spectral and physical evidence identified water-bearing material and constrained acquisition methods. A useful detection did not by itself prove that extraction would be fast, clean, or economical.</p>"},
      {id:"landing",title:"Ceres landing reconnaissance",html:"<p>Close survey of Ceres examined terrain, illumination, surface mechanics, navigation references, and possible hazards for the <a href='latin-ceres-landing-system.html'>human landing system</a>. The final site remains unregistered.</p>"},
      {id:"handover",title:"Handover to the crewed program",html:"<p>Survey results informed trajectory, reserves, probe deployment, landing rules, surface work, and water-processing experiments aboard the <a href='latin-deep-space-exploration-ship.html'>exploration ship</a>. Robotic observation continued during and after the human mission.</p>"}
    ],
    related:[{href:"latin-main-belt-exploration-program.html",kicker:"Parent program",label:"Latin Main-Belt Exploration Program"},{href:"latin-extraterrestrial-water-system.html",kicker:"Resource use",label:"Extraterrestrial Water-Processing System"},{href:"latin-ceres-expedition.html",kicker:"Human mission",label:"Latin Expedition to Ceres"},{href:"weather-commons.html",kicker:"Cooperative precedent",label:"Weather Commons"}],
    facts:[["Operator","Latin Space Community"],["Period","Before the early-2000s Ceres expedition"],["Principal target","Ceres"],["Secondary targets","Hydrated carbonaceous asteroids"],["Primary resource","Water-bearing material"],["Human-program role","Navigation, landing, and resource reconnaissance"],["Spacecraft roster","Open"]],
    categories:["Robotic asteroid exploration","Latin Space Community","Ceres exploration","Space resources"]
  }),

  "stella-maris-exploration-yard": latinCeresArticle({
    title:"Stella Maris exploration yard",category:"Orbital infrastructure",landscape:latinExplorationArchitecture,infoboxKicker:"Latin deep-space assembly and service yard",
    lead:"The Stella Maris exploration yard was the orbital construction, propulsion-handling, and service complex added to the Latin station during the early 1990s. It converted a multinational scientific platform into the home port of self-contained exploration ships bound for the asteroid belt.",
    canon:"Location at Stella Maris, development in the early 1990s, construction trusses, large tankage, engine workshops, nuclear-power handling, long-duration habitation research, an exploration-ship berth, multinational workshare, and support for the Ceres expedition are established. Formal yard name, opening date, geometry, reactor berth, dimensions, contractors, and traffic record remain open.",
    sections:[
      {id:"origin",title:"Origin at Stella Maris",html:"<p><a href='stella-maris.html'>Stella Maris</a> began construction around 1985 as the Community's shared orbital station. Expansion toward deep-space work followed once continuous multinational operations and long-duration systems could support more than laboratory missions.</p>"},
      {id:"structure",title:"Construction trusses and berth",html:"<p>Trusses supported assembly, inspection, tanks, radiators, handling equipment, utilities, and access to a ship too large or hazardous to treat as an ordinary station module. Exact arrangement remains open.</p>"},
      {id:"propulsion",title:"Tankage and engine workshops",html:"<p>Large tankage, transfer lines, engine access, diagnostics, and repair shops supported nuclear-powered exploration vessels and detachable chemical stages. Whether the first ship used nuclear-electric, nuclear-thermal, or a mixed architecture is not fixed.</p>"},
      {id:"nuclear",title:"Nuclear handling",html:"<p>Reactor installation, checkout, shielding, exclusion zones, command authority, and emergency separation required a controlled berth distinct from ordinary habitation. The yard handled power and propulsion systems without turning the whole station into an unrestricted reactor workshop.</p>"},
      {id:"habitation",title:"Long-duration habitation work",html:"<p>Life support, rotating or centrifuge-based gravity, radiation shelter, medicine, food storage, maintenance, and crew psychology were tested through station research before being entrusted to a belt voyage.</p>"},
      {id:"workshare",title:"Multinational workshare",html:"<p>Italian launch and propulsion, Occitan avionics, Spanish industry and astronomy, Portuguese tracking, and other Latin capabilities met at the yard. Integration at one port allowed separate national industries to remain visible within one ship program.</p>"},
      {id:"service",title:"Home port of the exploration ships",html:"<p>The yard assembled, provisioned, checked, dispatched, and could receive the <a href='latin-deep-space-exploration-ship.html'>deep-space vessels</a>. Reuse made post-flight inspection and refit as important as first assembly.</p>"}
    ],
    related:[{href:"stella-maris.html",kicker:"Host station",label:"Stella Maris"},{href:"latin-deep-space-exploration-ship.html",kicker:"Principal vessel",label:"Latin Deep-Space Exploration Ship"},{href:"nuclear-propulsion.html",kicker:"Propulsion field",label:"Nuclear Propulsion"},{href:"latin-space-community.html",kicker:"Operator",label:"Latin Space Community"},{href:"latin-main-belt-exploration-program.html",kicker:"Principal program",label:"Latin Main-Belt Exploration Program"}],
    facts:[["Host","Stella Maris"],["Development","Early 1990s"],["Functions","Assembly, tankage, engine work, nuclear handling, habitation research, and servicing"],["Principal user","Latin exploration ships"],["Institutional form","Multinational workshare"],["Formal name and layout","Open"]],
    categories:["Orbital shipyards","Stella Maris","Latin Space Community","Nuclear spacecraft"]
  }),

  "latin-deep-space-exploration-ship": latinCeresArticle({
    title:"Latin deep-space exploration ship",category:"Spacecraft",landscape:latinExplorationArchitecture,infoboxKicker:"Reusable nuclear-powered exploration vessel",
    lead:"The Latin deep-space exploration ship was the self-contained, nuclear-powered vessel type developed at Stella Maris for long voyages to Ceres and other main-belt bodies. It carried habitation, repair, probes, landing equipment, and water-processing machinery as one reusable exploratory platform rather than as a settlement convoy or direct surface craft.",
    canon:"Self-contained design, nuclear power or propulsion, Stella Maris assembly and servicing, long endurance, large propellant or reaction-mass capacity, habitation, repair capability, detachable probes and landers, extraterrestrial-water equipment, main-belt operation, and use in the Ceres expedition are established or necessary to the accepted architecture. Ship name, class, number built, dates, dimensions, mass, crew, propulsion cycle, artificial gravity, landing craft, and reuse record remain open.",
    sections:[
      {id:"identity",title:"Exploration vessel rather than destination craft",html:"<p>The ship was designed to carry tools and smaller vehicles to several kinds of destination. It did not descend intact to Ceres and was not built around immediate permanent settlement.</p>"},
      {id:"structure",title:"Habitable and service structure",html:"<p>Long-duration quarters, radiation protection, medical space, stores, command, scientific work, maintenance access, and some form of gravity countermeasure supported voyages measured in years. The final arrangement remains open.</p>"},
      {id:"propulsion",title:"Nuclear propulsion",html:"<p>Nuclear-electric and nuclear-thermal systems were both discussed for the large endurance and reaction-mass demands. The registered history establishes a nuclear-powered vessel but does not select the first operational cycle or engine layout.</p>"},
      {id:"repair",title:"Repair and autonomy",html:"<p>Machine tools, spares, diagnostics, external handling, isolation capacity, and local decision-making reduced dependence upon real-time Earth control. The crew still relied upon scheduled support from the <a href='planetary-satellite-system.html'>planetary communications network</a>.</p>"},
      {id:"craft",title:"Detachable probes and landing system",html:"<p>Small orbiters, survey probes, cargo packages, and the <a href='latin-ceres-landing-system.html'>Ceres landing system</a> separated destination operations from the interplanetary ship. Exact complement varied or remains open.</p>"},
      {id:"water",title:"Water acquisition and processing",html:"<p>The <a href='latin-extraterrestrial-water-system.html'>water system</a> gathered or received hydrated material, recovered water, and prepared it for life support, storage, reaction mass, or derived propellants. This extended endurance without making the ship independent of every specialized supply.</p>"},
      {id:"reuse",title:"Return and reuse",html:"<p>The vessel was conceived for more than one destination or expedition. The first ship's actual return, refurbishment interval, later voyages, and whether sister ships were completed remain open.</p>"}
    ],
    related:[{href:"stella-maris-exploration-yard.html",kicker:"Home port",label:"Stella Maris Exploration Yard"},{href:"latin-ceres-expedition.html",kicker:"Principal voyage",label:"Latin Expedition to Ceres"},{href:"latin-extraterrestrial-water-system.html",kicker:"Endurance system",label:"Extraterrestrial Water-Processing System"},{href:"latin-ceres-landing-system.html",kicker:"Detached craft",label:"Latin Ceres Landing System"},{href:"nuclear-propulsion.html",kicker:"Technical field",label:"Nuclear Propulsion"}],
    facts:[["Operator","Latin Space Community"],["Home port","Stella Maris exploration yard"],["Type","Self-contained reusable exploration vessel"],["Propulsion","Nuclear; exact cycle open"],["Principal destination","Ceres and main-belt bodies"],["Attached systems","Probes, landing equipment, and water processing"],["Name and specifications","Open"]],
    categories:["Crewed deep-space spacecraft","Nuclear spacecraft","Latin Space Community","Ceres expedition"]
  }),

  "latin-extraterrestrial-water-system": latinCeresArticle({
    title:"Latin extraterrestrial water-processing system",category:"Space technology",landscape:latinExplorationArchitecture,infoboxKicker:"Main-belt resource and endurance system",
    lead:"The Latin extraterrestrial water-processing system was the machinery and operating practice used by the Community's exploration ships to acquire water-bearing material, recover and purify water, and convert it into useful stores during main-belt voyages. It linked resource prospecting to practical endurance rather than treating water detection as a purely scientific result.",
    canon:"Ceres and hydrated carbonaceous sources, equipment for gathering and processing extraterrestrial water, use for life support and possible propulsion or reaction mass, and integration with the Latin exploration ship are established. Mining method, plant design, chemistry, throughput, target bodies, storage, first successful processing, and economic return remain open.",
    sections:[
      {id:"sources",title:"Resource sources",html:"<p>Ceres and hydrated carbonaceous bodies supplied the relevant prospect. The system sought chemically bound or subsurface water-bearing material rather than assuming convenient free ice on every target.</p>"},
      {id:"acquisition",title:"Acquisition",html:"<p>Probes and detachable equipment could collect regolith, drill or cut material, enclose samples, and move feedstock to a processor. The balance between surface plant, lander-mounted machinery, and shipboard processing remains open.</p>"},
      {id:"processing",title:"Recovery and purification",html:"<p>Heating, pressure control, capture, filtration, chemical cleanup, and storage separated useful water from mineral feedstock and contamination. Weak gravity complicated handling and made containment more important than raw digging power.</p>"},
      {id:"uses",title:"Uses aboard the exploration ship",html:"<p>Recovered water could support drinking, hygiene, life-support reserves, shielding, thermal management, and reaction mass. Electrolysis could provide hydrogen and oxygen for chemical stages, while hydrogen could support some nuclear-thermal architectures.</p>"},
      {id:"storage",title:"Storage and transfer",html:"<p>Tanks, bladders, piping, freeze protection, purification records, and transfer connections had to preserve a resource gathered far from a major port. Water remained valuable even when it was not immediately converted into propellant.</p>"},
      {id:"limits",title:"Operational limits",html:"<p>Resource presence did not guarantee profitable extraction. Power, time, equipment wear, uncertain concentration, contamination, trajectory cost, and the need to return processing machinery could erase apparent advantages.</p>"},
      {id:"doctrine",title:"Carry enough to reach the belt",html:"<p>The system reduced dependence after arrival but did not justify launching without reserves. Latin doctrine carried enough consumables and reaction mass to reach a surveyed target, then used local water to extend margin or enable later legs.</p>"}
    ],
    related:[{href:"latin-asteroid-resource-survey.html",kicker:"Resource reconnaissance",label:"Latin Asteroid Resource Survey"},{href:"latin-deep-space-exploration-ship.html",kicker:"Host vessel",label:"Latin Deep-Space Exploration Ship"},{href:"latin-ceres-landing-system.html",kicker:"Ceres operations",label:"Latin Ceres Landing System"},{href:"latin-main-belt-exploration-program.html",kicker:"Parent program",label:"Latin Main-Belt Exploration Program"},{href:"nuclear-propulsion.html",kicker:"Power context",label:"Nuclear Propulsion"}],
    facts:[["Operator","Latin Space Community"],["Resource region","Ceres and hydrated carbonaceous asteroids"],["Inputs","Water-bearing extraterrestrial material"],["Outputs","Purified water and possible derived propellants"],["Uses","Life support, storage, shielding, reaction mass, and chemical feedstock"],["Plant design and throughput","Open"]],
    categories:["Space resources","Water extraction","Latin space technology","Asteroid mining"]
  }),

  "latin-ceres-landing-system": latinCeresArticle({
    title:"Latin Ceres landing system",category:"Crewed spacecraft",landscape:latinCeresCampaign,infoboxKicker:"Detachable low-gravity landing craft",
    lead:"The Latin Ceres landing system was the detachable craft and surface equipment that carried members of the first human Ceres expedition from the exploration ship to the dwarf planet and back. Its design addressed vacuum operations and extremely weak gravity rather than lunar-style high-gravity descent or Martian atmospheric entry.",
    canon:"Detachment from the exploration ship, orbital close survey, human landing in the early 2000s, low-gravity operations, surface science and resource work, and return to the orbital vessel are established or necessary to the accepted expedition. Name, number of craft, crew, propulsion, landing gear, anchoring, surface duration, rover, suits, samples, failures, and exact ascent profile remain open.",
    sections:[
      {id:"environment",title:"The Ceres environment",html:"<p>Ceres offered no useful atmosphere for descent and only a small fraction of terrestrial gravity. Modest velocity changes could produce large consequences, while plume interaction and rebound made apparently gentle contact a control problem.</p>"},
      {id:"survey",title:"Orbital close survey",html:"<p>The exploration ship and robotic precursors refined terrain, lighting, navigation, communications, and surface-mechanics estimates before committing the lander. The final site and descent corridor remain open.</p>"},
      {id:"craft",title:"Detached landing craft",html:"<p>The lander separated local descent and ascent from the large interplanetary ship. It carried crew support, navigation, propulsion, communications, surface tools, and a means of returning people and selected samples to orbit.</p>"},
      {id:"touchdown",title:"Touchdown and securing",html:"<p>Wide landing geometry, low closing speed, dust management, and procedures against tipping or rebound were required. Whether the craft used anchors, harpoons, screws, ballast, or another securing method remains open.</p>"},
      {id:"surface",title:"Surface operations",html:"<p>Geology, volatile studies, surface mechanics, astronomy, human performance, resource-processing trials, photography, and limited traverses defined the first stay. The expedition did not automatically establish a permanent base or legal ownership of Ceres.</p>"},
      {id:"support",title:"Life support and emergency margin",html:"<p>The lander or accompanying package provided life support, communications, shelter, tools, reserves, and an abort path suited to a bounded expedition. Exact surface habitat and rover arrangements remain open.</p>"},
      {id:"ascent",title:"Ascent and rendezvous",html:"<p>The crew departed Ceres, matched orbit with the <a href='latin-deep-space-exploration-ship.html'>exploration ship</a>, transferred samples and records, and prepared for the next leg or return voyage. Vehicle reuse is not established.</p>"}
    ],
    related:[{href:"latin-ceres-expedition.html",kicker:"Principal mission",label:"Latin Expedition to Ceres"},{href:"latin-deep-space-exploration-ship.html",kicker:"Orbital carrier",label:"Latin Deep-Space Exploration Ship"},{href:"latin-asteroid-resource-survey.html",kicker:"Landing reconnaissance",label:"Latin Asteroid Resource Survey"},{href:"extraterrestrial-settlement.html",kicker:"What did not yet follow",label:"Extraterrestrial Settlement"}],
    facts:[["Destination","Ceres"],["Mission period","Early 2000s"],["Operator","Latin Space Community"],["Parent vehicle","Deep-space exploration ship"],["Environment","Airless and very low gravity"],["Role","Crew descent, surface support, ascent, and rendezvous"],["Name and specifications","Open"]],
    categories:["Crewed landing craft","Ceres exploration","Latin Space Community","Early 2000s in spaceflight"]
  })
});

const addLatinCeresRelated = (slug,item) => {
  const related = window.deepArticles[slug]?.related;
  if (related && !related.some(entry => entry.href === item.href)) related.push(item);
};

addLatinCeresRelated("latin-ceres-expedition",{href:"latin-main-belt-exploration-program.html",kicker:"Parent program",label:"Latin Main-Belt Exploration Program"});
addLatinCeresRelated("latin-ceres-expedition",{href:"latin-deep-space-exploration-ship.html",kicker:"Expedition vessel",label:"Latin Deep-Space Exploration Ship"});
addLatinCeresRelated("latin-ceres-expedition",{href:"latin-ceres-landing-system.html",kicker:"Surface vehicle",label:"Latin Ceres Landing System"});
addLatinCeresRelated("stella-maris",{href:"stella-maris-exploration-yard.html",kicker:"1990s expansion",label:"Stella Maris Exploration Yard"});
addLatinCeresRelated("latin-space-community",{href:"latin-main-belt-exploration-program.html",kicker:"Deep-space program",label:"Latin Main-Belt Exploration Program"});
addLatinCeresRelated("nuclear-propulsion",{href:"latin-deep-space-exploration-ship.html",kicker:"Latin application",label:"Latin Deep-Space Exploration Ship"});
addLatinCeresRelated("planetary-satellite-system",{href:"latin-asteroid-resource-survey.html",kicker:"Main-belt surveys",label:"Latin Asteroid Resource Survey"});

const latinCeresOverview = window.deepArticles["latin-ceres-expedition"];
if (latinCeresOverview) {
  const choice = latinCeresOverview.sections.find(section => section.id === "choice");
  if (choice) choice.html = "<p>The <a href='latin-main-belt-exploration-program.html'>main-belt program</a> avoided becoming a fifth repetition of an occupied Mars route. Ceres offered scientific distinction, access to water-bearing material, and a practical test of an exploratory navy built around reusable ships.</p>";
  const surveys = latinCeresOverview.sections.find(section => section.id === "surveys");
  if (surveys) surveys.html = "<p>The <a href='latin-asteroid-resource-survey.html'>robotic resource survey</a> mapped Ceres and hydrated carbonaceous bodies, refined navigation and communications, examined landing regions, and identified water-bearing targets before the crewed ship departed.</p>";
  const ship = latinCeresOverview.sections.find(section => section.id === "ship");
  if (ship) ship.html = "<p>The <a href='stella-maris-exploration-yard.html'>Stella Maris yard</a> assembled and serviced a reusable <a href='latin-deep-space-exploration-ship.html'>nuclear-powered exploration ship</a>. Its <a href='latin-extraterrestrial-water-system.html'>water-processing equipment</a> supported endurance beyond the supplies loaded at Earth.</p>";
  const landing = latinCeresOverview.sections.find(section => section.id === "landing");
  if (landing) landing.html = "<p>After entering Ceres orbit and completing close survey, the expedition used a detachable <a href='latin-ceres-landing-system.html'>low-gravity landing system</a> to place people on the surface in the early 2000s.</p>";
}
