window.deepArticles = window.deepArticles || {};

const concordiaScienceSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Latin Space Community and Concordia"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Latin orbital development"},
  {href:"../transcript.md",label:"Master Transcript — Concordia missions and national workshare"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — Latin space chronology"}
];

const concordiaScienceDiagram = {
  src:"assets/diagrams/concordia-scientific-program.svg",
  alt:"Diagram showing Concordia observations and experiments passing through calibration, allocation, telemetry, and shared research archives",
  caption:"Concordia joins orbital experiments to common calibration, multinational review, and usable scientific records"
};

const concordiaScienceArticle = config => ({
  category:"Latin spaceflight",
  eyebrow:"Latin Space Community · Concordia research",
  infoboxKicker:"Multinational scientific program",
  landscape:concordiaScienceDiagram,
  ...config,
  sources:[...concordiaScienceSources,...(config.additionalSources || [])],
  categories:config.categories || ["Latin Space Community","Concordia program","Space science","1970s"]
});

Object.assign(window.deepArticles, {
  "concordia-scientific-program": concordiaScienceArticle({
    title:"Concordia scientific program",
    lead:"The Concordia scientific program is the combined observation, materials, medicine, servicing, calibration, and industrial-research work conducted through the Latin Space Community's first permanent orbital laboratory. It gives the station practical duties that continue after the German lunar victory has made a prestige-only answer inadequate.",
    canon:"Human endurance; Earth and ocean observation; materials and industrial research; orbital servicing; political integration; low-inclination operations from San Marco; multinational laboratories; and the four-state technical division are established. A single formal program title, unified directorate, budget, experiment register, complete flight manifest, and final publication rules remain open.",
    sections:[
      {id:"purpose",title:"A laboratory rather than a monument",html:"<p>Germany's lunar landing cannot be answered immediately at the same scale. Concordia instead concentrates on repeatable work: observing useful regions, learning how people live in orbit, testing equipment, exchanging instruments, and building records that national institutions can use.</p>"},
      {id:"missions",title:"Five practical missions",html:"<p>The station's declared purposes are <a href='concordia-human-endurance-program.html'>human endurance</a>, <a href='concordia-earth-ocean-observation.html'>Earth and ocean observation</a>, <a href='concordia-materials-industrial-research.html'>materials and industrial research</a>, <a href='latin-orbital-servicing-program.html'>orbital servicing</a>, and political integration through shared responsibility.</p>"},
      {id:"orbit",title:"The opportunities and limits of San Marco orbit",html:"<p>Launch from <a href='san-marco-space-centre.html'>San Marco</a> favors low-inclination access to equatorial weather, African agriculture, tropical oceans, and maritime routes. The same geometry gives weaker coverage of northern Italy and Iberia, so polar and higher-inclination uncrewed satellites remain essential.</p>"},
      {id:"laboratories",title:"A distributed laboratory system",html:"<p>Orbital apparatus is prepared and interpreted by universities, hospitals, observatories, and firms across Italy, Occitania, Spain, and Portugal. Concordia is the shared platform at the center of a research system whose laboratories remain nationally rooted.</p>"},
      {id:"workshare",title:"Science follows the national workshare",html:"<p>Italy leads launch, propulsion, life support, integration, and San Marco. Occitania leads guidance, computing, telemetry, docking, and instruments. Spain leads structures, pressure vessels, solar power, thermal systems, and ground testing. Portugal leads tracking, communications, weather, recovery, navigation, and ocean logistics.</p>"},
      {id:"evidence",title:"Calibration and common evidence",html:"<p>Orbital measurements become useful only after their timing, geometry, instrument behavior, uncertainty, and ground comparison are understood. The <a href='concordia-instrument-calibration-program.html'>calibration program</a> connects station experiments to the <a href='weather-commons.html'>Weather Commons</a> and other operational users.</p>"},
      {id:"allocation",title:"Allocating scarce orbital work",html:"<p>Crew time, electrical power, telemetry, cargo mass, instrument space, and return capacity are limited. The <a href='concordia-experiment-allocation-system.html'>experiment-allocation system</a> turns national proposals into an integrated manifest and forces sponsors to disclose the interfaces and support their work requires.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>Many experiments yield knowledge rather than immediate profits. Their durable product is a community of engineers and scientists accustomed to remote equipment, multinational evidence, scheduled access, and the <a href='latin-orbital-research-data-service.html'>circulation of common research records</a>.</p>"}
    ],
    related:[{href:"concordia-orbital-program.html",kicker:"Parent station",label:"Concordia Orbital Program"},{href:"concordia-earth-ocean-observation.html",kicker:"Observation mission",label:"Earth and Ocean Observation"},{href:"concordia-materials-industrial-research.html",kicker:"Industrial mission",label:"Materials and Industrial Research"},{href:"concordia-human-endurance-program.html",kicker:"Medical mission",label:"Human-Endurance Program"},{href:"latin-orbital-servicing-program.html",kicker:"Maintenance mission",label:"Orbital Servicing Program"},{href:"concordia-experiment-allocation-system.html",kicker:"Research access",label:"Experiment-Allocation System"},{href:"latin-orbital-research-data-service.html",kicker:"Scientific record",label:"Orbital Research Data Service"}],
    facts:[["Principal platform","Concordia"],["Program era","1970s onward"],["Practical missions","Five"],["Orbital regime","Low inclination from San Marco"],["Core participants","Italy · Occitania · Spain · Portugal"],["Laboratory structure","Distributed among all four members"],["Operational data partner","Weather Commons"],["Formal umbrella title","Not established"]]
  }),

  "concordia-earth-ocean-observation": concordiaScienceArticle({
    title:"Concordia Earth and ocean observation program",
    category:"Earth observation",
    infoboxKicker:"Crewed orbital observation mission",
    lead:"The Concordia Earth and ocean observation program uses the station's low-inclination orbit to study tropical weather, equatorial cloud systems, Indian Ocean shipping, Red Sea traffic, East African agriculture, and storms affecting Portuguese and Italian maritime routes. Its crews add instrument trials and human interpretation to the wider uncrewed satellite network.",
    canon:"The six observation priorities; low-inclination advantage for imperial and maritime observation; weak direct coverage of northern Italy and Iberia; continued need for polar and higher-inclination satellites; and Concordia's experimental, calibration, and interpretive support for the Weather Commons are established. Formal program name, sensors, resolutions, observation schedule, participating agencies, classified products, and data-release rules remain open.",
    sections:[
      {id:"remit",title:"Observation remit",html:"<p>Concordia watches tropical weather, Indian Ocean shipping, Red Sea traffic, East African agriculture, equatorial cloud systems, and storms affecting Portuguese and Italian maritime routes. The list reflects the Community's maritime and African geography more directly than a survey of Europe alone.</p>"},
      {id:"orbit",title:"Low-inclination advantage",html:"<p>San Marco launches place the station over equatorial and low-latitude regions on repeated passes. Crews can compare changing cloud structures, coastlines, sea states, vegetation, and shipping patterns from a stable laboratory.</p>"},
      {id:"limits",title:"Coverage limits",html:"<p>The station is less useful for northern Italy and most of Iberia. Polar and higher-inclination satellites supply broader latitude coverage, while Concordia specializes in crew-tended instruments and experiments suited to its orbit.</p>"},
      {id:"weather",title:"Relationship with the Weather Commons",html:"<p>Concordia does not replace the <a href='weather-commons.html'>Weather Commons</a>. It supplies experimental sensors, calibration work, comparison observations, and trained human interpretation that improve the larger international flow of weather data.</p>"},
      {id:"instruments",title:"Crew-tended instruments",html:"<p>A resident crew can inspect optics, exchange instrument packages, alter operating sequences, photograph unusual events, and describe conditions that automated telemetry records imperfectly. These advantages justify some station observations even where an uncrewed satellite offers better geographic coverage.</p>"},
      {id:"users",title:"Maritime and agricultural users",html:"<p>Portuguese and Italian shipping services, Red Sea authorities, African agricultural institutions, meteorological offices, and Community researchers convert observations into forecasts, route advice, seasonal assessment, and experiment design.</p>"},
      {id:"politics",title:"Civil value and strategic sensitivity",html:"<p>Weather, agriculture, and navigation provide an openly civil justification. Images of shipping lanes and ports also possess strategic value, leaving the boundary between public scientific products and restricted interpretation unsettled.</p>"},
      {id:"legacy",title:"A complementary orbital architecture",html:"<p>The program establishes a layered model: low-inclination crewed observation, wider uncrewed coverage, ground truth, common calibration, and multinational distribution. Later Latin stations inherit this division rather than treating one platform as a complete observing system.</p>"}
    ],
    related:[{href:"concordia-scientific-program.html",kicker:"Parent research system",label:"Concordia Scientific Program"},{href:"weather-commons.html",kicker:"Operational data network",label:"Weather Commons"},{href:"latin-weather-satellite-program.html",kicker:"Uncrewed precursor",label:"Latin Weather Satellite Program"},{href:"concordia-instrument-calibration-program.html",kicker:"Measurement quality",label:"Instrument Calibration Program"},{href:"san-marco-space-centre.html",kicker:"Launch geometry",label:"San Marco Space Centre"},{href:"portuguese-space-program.html",kicker:"Maritime lead",label:"Portuguese Space Program"},{href:"latin-orbital-research-data-service.html",kicker:"Data circulation",label:"Orbital Research Data Service"}],
    facts:[["Platform","Concordia"],["Orbit","Low inclination"],["Primary region","Equatorial and tropical belt"],["Maritime theaters","Indian Ocean · Red Sea"],["Agricultural focus","East Africa"],["European coverage","Limited in northern Italy and Iberia"],["Complementary systems","Polar and higher-inclination satellites"],["Operational partner","Weather Commons"]]
  }),

  "concordia-materials-industrial-research": concordiaScienceArticle({
    title:"Concordia materials and industrial research program",
    category:"Materials science",
    infoboxKicker:"Orbital industrial research program",
    lead:"The Concordia materials and industrial research program conducts crystal-growth, metallurgy, vacuum-processing, fluid-behavior, electronics, solar-cell degradation, and thermal-control experiments in orbit. Occitan and Italian sponsors promote the field most strongly, while the program's immediate commercial promise routinely exceeds its early results.",
    canon:"The seven experiment fields; strong Occitan and Italian sponsorship; limited immediate commercial return; shared projects for Community firms; and the creation of engineers experienced with equipment operating far from repair crews are established. Formal program title, experiment names, payloads, firms, principal investigators, patents, findings, and financial returns remain open.",
    sections:[
      {id:"agenda",title:"Experimental agenda",html:"<p>The program studies crystal growth, metallurgy, vacuum processing, fluid behavior, electronics testing, solar-cell degradation, and thermal control. These fields join basic physical questions to practical spacecraft reliability.</p>"},
      {id:"sponsors",title:"Occitan and Italian sponsorship",html:"<p>Occitania's instrument, electronics, computing, and systems firms press for test access. Italian launcher, propulsion, life-support, energy, and manufacturing interests seek materials knowledge and longer-lived orbital equipment.</p>"},
      {id:"environment",title:"Why perform the work in orbit",html:"<p>Microgravity, sustained vacuum, radiation, thermal cycling, and restricted heat transfer expose behavior that ground laboratories can imitate only partly. Concordia also allows apparatus to be adjusted, inspected, and returned.</p>"},
      {id:"packages",title:"Experiment packages",html:"<p>National laboratories prepare modular apparatus for delivery by <a href='mercurius.html'>Mercurius</a>. Power, heat rejection, telemetry, containment, crew procedure, stowage, and possible return must be declared before an experiment enters the station manifest.</p>"},
      {id:"realism",title:"Commercial claims and actual returns",html:"<p>Promoters describe orbital factories and superior products. Early work more often produces measurements, failed processes, manufacturing constraints, and better questions. The distinction between scientific value and immediate profit becomes a recurring political argument.</p>"},
      {id:"industry",title:"Shared industrial projects",html:"<p>Experiments create contracts that cross the four national workshares. A sensor, furnace, pressure enclosure, telemetry package, and recovery container may come from different states and still require one accepted test record.</p>"},
      {id:"engineering",title:"Engineering for remote operation",html:"<p>The program trains designers to build equipment that tolerates delayed intervention, limited spares, strict power budgets, incomplete diagnosis, and rare access by a repair crew. This experience feeds satellites, Concordia servicing, and later Stella Maris systems.</p>"},
      {id:"legacy",title:"Scientific and institutional legacy",html:"<p>The lasting result is a shared experimental culture rather than an instant orbital industry. Community firms learn to propose, integrate, monitor, interpret, and archive research under common standards.</p>"}
    ],
    related:[{href:"concordia-scientific-program.html",kicker:"Parent research system",label:"Concordia Scientific Program"},{href:"concordia-experiment-allocation-system.html",kicker:"Access to orbit",label:"Experiment-Allocation System"},{href:"latin-space-industrial-workshare.html",kicker:"Industrial constitution",label:"Latin Space Industrial Workshare"},{href:"mercurius.html",kicker:"Experiment transport",label:"Mercurius"},{href:"concordia-a.html",kicker:"Automated precursor",label:"Concordia-A"},{href:"latin-orbital-servicing-program.html",kicker:"Maintainable equipment",label:"Orbital Servicing Program"},{href:"latin-orbital-research-data-service.html",kicker:"Research record",label:"Orbital Research Data Service"}],
    facts:[["Platform","Concordia"],["Principal advocates","Occitania · Italy"],["Research fields","Seven established fields"],["Transport","Mercurius experiment packages"],["Immediate commercial return","Frequently overstated"],["Principal early result","Knowledge and engineering practice"],["Multinational participation","All four core members"],["Experiment register","Not established"]]
  }),

  "concordia-instrument-calibration-program": concordiaScienceArticle({
    title:"Concordia instrument calibration program",
    category:"Scientific instrumentation",
    infoboxKicker:"Orbital measurement-quality program",
    lead:"The Concordia instrument calibration program is the working system that compares station sensors, uncrewed satellites, ground observations, and human reports before orbital measurements enter Community weather, ocean, agricultural, and engineering use. It is one of Concordia's explicit contributions to the Weather Commons.",
    canon:"Concordia's supply of experiments, instrument calibration, and human interpretation to the Weather Commons; crew exchange and inspection of instruments; Occitan leadership in scientific instruments and telemetry; Portuguese leadership in weather, tracking, communications, and ocean logistics; and the need for complementary orbital geometries are established. Formal office, reference targets, calibration schedule, metrological institutes, uncertainty rules, and certificate format remain open.",
    sections:[
      {id:"need",title:"Why orbital readings require calibration",html:"<p>A reading can drift because of launch loads, radiation, contamination, thermal cycling, aging electronics, viewing geometry, or changing software. Users need evidence that the number still represents the phenomenon claimed.</p>"},
      {id:"comparisons",title:"Four-way comparison",html:"<p>The system compares Concordia instruments with uncrewed satellites, ground and maritime observations, and crew descriptions. Agreement does not prove perfection, but disagreement identifies where investigation is required.</p>"},
      {id:"crew",title:"The advantage of a crewed laboratory",html:"<p>Crew members can inspect contamination, photograph instrument condition, change settings, install reference packages, and exchange failed units. Their reports add context to telemetry when a sensor behaves unexpectedly.</p>"},
      {id:"workshare",title:"Occitan and Portuguese leads",html:"<p>Occitania supplies much of the scientific instrumentation, computing, telemetry, and analysis. Portugal connects readings to tracking geometry, weather services, ships, ocean stations, navigation, and recovery. Italy and Spain contribute platform, power, structure, thermal behavior, and ground-test evidence.</p>"},
      {id:"commons",title:"Service to the Weather Commons",html:"<p>The <a href='weather-commons.html'>Weather Commons</a> receives better-characterized observations and experimental findings. Concordia remains one contributor among many, since the Commons also depends on polar satellites, national services, ships, aircraft, and surface stations.</p>"},
      {id:"records",title:"Calibration records",html:"<p>Useful records identify instrument state, time, position, operating mode, comparison source, uncertainty, software version, and any correction applied. Common terminology prevents national archives from assigning different meanings to the same quality flag.</p>"},
      {id:"limits",title:"Limits of station calibration",html:"<p>A low-inclination station cannot validate every latitude, season, surface, or viewing angle. Some instruments must be compared at ground facilities or aboard higher-inclination spacecraft, and some failures remain ambiguous until hardware returns.</p>"},
      {id:"legacy",title:"From experiment to operational service",html:"<p>The program helps convert occasional orbital images into dependable services. Its procedures later support Earth observation, station engineering, solar monitoring, and the shared scientific archives used by larger Latin platforms.</p>"}
    ],
    related:[{href:"concordia-earth-ocean-observation.html",kicker:"Principal user",label:"Earth and Ocean Observation"},{href:"weather-commons.html",kicker:"International service",label:"Weather Commons"},{href:"latin-weather-satellite-program.html",kicker:"Uncrewed observations",label:"Latin Weather Satellite Program"},{href:"occitan-space-program.html",kicker:"Instrument lead",label:"Occitan Space Program"},{href:"portuguese-space-program.html",kicker:"Weather and tracking lead",label:"Portuguese Space Program"},{href:"latin-orbital-research-data-service.html",kicker:"Evidence archive",label:"Orbital Research Data Service"},{href:"latin-space-standardization-campaign.html",kicker:"Common definitions",label:"Space Standardization Campaign"}],
    facts:[["Principal platform","Concordia"],["Operational partner","Weather Commons"],["Instrument and telemetry lead","Occitania"],["Weather and tracking lead","Portugal"],["Comparison sources","Orbital · ground · maritime · human"],["Primary output","Characterized measurements"],["Geographic limitation","Low-inclination coverage"],["Formal office name","Not established"]]
  }),

  "concordia-experiment-allocation-system": concordiaScienceArticle({
    title:"Concordia experiment-allocation system",
    category:"Science policy",
    infoboxKicker:"Orbital research-access system",
    lead:"The Concordia experiment-allocation system is the practical process by which universities, companies, medical institutions, and national programs compete for limited station mass, power, crew time, telemetry, instrument space, and return capacity. It translates the four-state workshare into a flyable research manifest.",
    canon:"Laboratories divided among universities and companies from all four members; shared political responsibility; national technical leads; Mercurius experiment delivery; and limits imposed by station operations are established. A formal board title, voting system, national quota, peer-review procedure, proposal calendar, priority rules, dispute record, and complete manifest remain open; this article uses a descriptive title for the evidenced working process.",
    sections:[
      {id:"scarcity",title:"Scarce orbital resources",html:"<p>Every proposal consumes launch mass, stowage, electrical power, cooling, telemetry, crew attention, safety review, and perhaps return volume. Selecting one experiment can delay another even where both possess scientific merit.</p>"},
      {id:"sponsors",title:"Eligible sponsors",html:"<p>Universities, firms, hospitals, observatories, research institutes, and national technical programs from all four core members supply laboratory work. Associated participation may add external partners under negotiated terms.</p>"},
      {id:"proposal",title:"From proposal to manifest",html:"<p>A sponsor defines the question, hardware, interfaces, hazards, operating sequence, data needs, crew tasks, and disposal or return plan. Technical reviewers then fit accepted packages into the station and Mercurius schedules.</p>"},
      {id:"criteria",title:"Selection pressures",html:"<p>Safety, readiness, scientific value, national workshare, industrial utility, available orbit, crew burden, political visibility, and compatibility with other experiments all influence selection. The documents do not establish a fixed scoring formula.</p>"},
      {id:"balance",title:"National balance",html:"<p>The system must preserve credible access for Italy, Occitania, Spain, and Portugal while avoiding four disconnected national laboratories. Leadership follows technical responsibility, and common resources require common review.</p>"},
      {id:"interfaces",title:"Interface certification",html:"<p>An experiment cannot fly solely because its national sponsor approves it. Power, thermal load, materials, pressure, telemetry, software, cargo restraint, crew procedure, and emergency behavior must satisfy common interface evidence.</p>"},
      {id:"operations",title:"Replanning in orbit",html:"<p>Equipment faults, delayed cargo, weather, crew health, power shortages, and unexpected results can alter the sequence after launch. Ground teams and the crew preserve safety first and record why planned work changed.</p>"},
      {id:"politics",title:"Allocation as Community government",html:"<p>The manifest makes abstract integration tangible. Governments can see whose experiments fly, whose firms receive contracts, whose specialists control interfaces, and whose data circulate. Allocation therefore becomes a recurring test of the Community's legitimacy.</p>"}
    ],
    related:[{href:"concordia-scientific-program.html",kicker:"Parent research system",label:"Concordia Scientific Program"},{href:"concordia-materials-industrial-research.html",kicker:"Major proposal field",label:"Materials and Industrial Research"},{href:"concordia-human-endurance-program.html",kicker:"Medical proposal field",label:"Human-Endurance Program"},{href:"latin-space-council.html",kicker:"Political authority",label:"Latin Space Council"},{href:"latin-space-industrial-workshare.html",kicker:"National balance",label:"Latin Space Industrial Workshare"},{href:"latin-spaceflight-certification.html",kicker:"Flight acceptance",label:"Latin Spaceflight Certification"},{href:"mercurius.html",kicker:"Payload transport",label:"Mercurius"}],
    facts:[["System type","Descriptive working process"],["Platform","Concordia"],["Transport","Mercurius"],["Core applicants","Institutions from four member states"],["Scarce resources","Mass · power · crew time · telemetry · return"],["Safety authority","Common interface certification"],["Formal national quota","Not established"],["Complete experiment manifest","Not established"]]
  }),

  "latin-orbital-research-data-service": concordiaScienceArticle({
    title:"Latin orbital research data service",
    category:"Scientific information",
    infoboxKicker:"Distributed research-record system",
    lead:"The Latin orbital research data service is the descriptive name for the distributed records, telemetry, calibration files, experiment reports, and interpretive products that carry Concordia research from spacecraft to the Community's national laboratories and operational services. It is a common information system rather than a single confirmed central archive.",
    canon:"Occitan telemetry and computing; Portuguese tracking and communications; laboratories across all four members; Weather Commons exchange; common interface records; Technical Latin terminology; calibration; and circulation of orbital evidence are established. Formal service name, headquarters, archive topology, access classes, retention periods, publication deadlines, computing network, copyright rules, and security boundaries remain open.",
    sections:[
      {id:"purpose",title:"Turning telemetry into evidence",html:"<p>Raw signals are not yet scientific results. They must be tied to time, orbit, instrument state, calibration, command history, operating conditions, crew notes, software, and the proposal that defined the measurement.</p>"},
      {id:"path",title:"The data path",html:"<p>Concordia transmits through the Portuguese-led tracking and communications network. Occitan computing and telemetry systems decode and organize much of the stream, while Italian, Spanish, Portuguese, and Occitan institutions receive the records needed for their responsibilities.</p>"},
      {id:"record",title:"The common experiment record",html:"<p>A complete record can include preflight calibration, interface evidence, command logs, sensor values, crew observations, photographs, faults, corrective actions, returned-hardware inspection, and later analysis. Exact mandatory fields remain open.</p>"},
      {id:"language",title:"Language and terminology",html:"<p><a href='technical-latin-in-spaceflight.html'>Technical Latin</a> supplies stable interface terms, status words, units, and common documentation. National languages remain normal for internal analysis and publication, so the shared record must identify equivalent terms rather than erase them.</p>"},
      {id:"distribution",title:"Distributed custody",html:"<p>Universities, firms, weather services, medical institutions, observatories, and program offices retain records connected to their work. The source does not establish one centralized repository with exclusive custody.</p>"},
      {id:"commons",title:"Exchange with operational services",html:"<p>Calibrated weather and Earth-observation products can pass to the <a href='weather-commons.html'>Weather Commons</a>. Engineering data support certification and servicing, while medical records require tighter controls than routine environmental measurements.</p>"},
      {id:"access",title:"Access and unresolved restrictions",html:"<p>Scientific exchange, commercial advantage, crew privacy, military sensitivity, and national sovereignty pull access rules in different directions. Public summaries may circulate broadly while detailed industrial or strategic records remain restricted.</p>"},
      {id:"legacy",title:"A precedent for later networks",html:"<p>The system establishes habits of shared metadata, versioned analysis, multilingual documentation, and distributed custody. Stella Maris and Ceres require these habits at greater volume and across longer delays.</p>"}
    ],
    related:[{href:"concordia-scientific-program.html",kicker:"Research source",label:"Concordia Scientific Program"},{href:"concordia-instrument-calibration-program.html",kicker:"Measurement evidence",label:"Instrument Calibration Program"},{href:"weather-commons.html",kicker:"Operational exchange",label:"Weather Commons"},{href:"latin-tracking-recovery-network.html",kicker:"Transmission network",label:"Tracking and Recovery Network"},{href:"technical-latin-in-spaceflight.html",kicker:"Common terminology",label:"Technical Latin in Spaceflight"},{href:"latin-space-standardization-campaign.html",kicker:"Record standards",label:"Space Standardization Campaign"},{href:"concordia-experiment-allocation-system.html",kicker:"Proposal provenance",label:"Experiment-Allocation System"}],
    facts:[["System form","Distributed research-record network"],["Principal source","Concordia telemetry and experiments"],["Telemetry and computing lead","Occitania"],["Tracking and communications lead","Portugal"],["Common terminology","Technical Latin"],["Operational exchange","Weather Commons"],["Single central archive","Not established"],["Access and publication rules","Open"]]
  })
});

const addConcordiaScienceRelated = (slug, item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["concordia-orbital-program",{href:"concordia-scientific-program.html",kicker:"Research mission",label:"Concordia Scientific Program"}],
  ["concordia-a",{href:"concordia-instrument-calibration-program.html",kicker:"Instrument precursor",label:"Instrument Calibration Program"}],
  ["weather-commons",{href:"concordia-earth-ocean-observation.html",kicker:"Crewed contribution",label:"Concordia Earth and Ocean Observation"}],
  ["latin-space-community",{href:"concordia-scientific-program.html",kicker:"Orbital research system",label:"Concordia Scientific Program"}],
  ["latin-space-council",{href:"concordia-experiment-allocation-system.html",kicker:"Research access",label:"Concordia Experiment-Allocation System"}],
  ["latin-space-industrial-workshare",{href:"concordia-experiment-allocation-system.html",kicker:"Scientific allocation",label:"Concordia Experiment-Allocation System"}],
  ["latin-space-standardization-campaign",{href:"latin-orbital-research-data-service.html",kicker:"Scientific records",label:"Orbital Research Data Service"}],
  ["concordia-human-endurance-program",{href:"concordia-scientific-program.html",kicker:"Research umbrella",label:"Concordia Scientific Program"}],
  ["latin-orbital-servicing-program",{href:"concordia-scientific-program.html",kicker:"Research umbrella",label:"Concordia Scientific Program"}]
].forEach(([slug,item]) => addConcordiaScienceRelated(slug,item));
