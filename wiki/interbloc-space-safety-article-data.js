window.deepArticles = window.deepArticles || {};

const interblocSafetySources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature space order and common rescue standards"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — orbital law and post-1985 space operations"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — space architecture and legal constraints"},
  {href:"../transcript.md",label:"Master Transcript — Stockholm, Geneva, rescue, docking, and debris practice"}
];

const safetyRelated = [
  {href:"orbital-law.html",kicker:"Legal framework",label:"Orbital Law"},
  {href:"stockholm-orbital-safety-convention.html",kicker:"1976 foundation",label:"Stockholm Orbital Safety Convention"},
  {href:"geneva-orbital-incidents-agreement.html",kicker:"1982 encounter rules",label:"Geneva Orbital Incidents Agreement"},
  {href:"orbital-rescue-service.html",kicker:"Operational service",label:"Orbital Rescue Service"}
];

const interblocSafetyArticle = config => ({
  category:config.category || "Space operations",
  eyebrow:config.eyebrow || "Cross-bloc spaceflight practice · 1976–2000",
  infoboxKicker:config.infoboxKicker || "Interoperable orbital-safety standard",
  landscape:config.landscape || {src:"assets/diagrams/orbital-rescue-chain.svg",alt:"Operational chain from orbital distress detection through interception, stabilization, transfer, and return",caption:"Common signals and interfaces allow national rescue services to cooperate without a unified international agency"},
  ...config,
  sources:interblocSafetySources,
  categories:config.categories || ["Orbital safety","Space law","Spaceflight operations","International standards"]
});

Object.assign(window.deepArticles, {
  "interbloc-space-safety-standards": interblocSafetyArticle({
    title:"Interbloc space-safety standards",category:"Spaceflight standards",eyebrow:"Five-system interoperability · 1976–2000",infoboxKicker:"Shared operational safety regime",
    lead:"Interbloc space-safety standards are the common signals, notices, interfaces, and emergency duties used by the five space systems despite incompatible vehicles and continuing military rivalry. The standards cover spacecraft registration, distress communications, docking adapters, crewed-launch notification, debris warnings, approaches to inhabited stations, and assistance to stranded crews.",
    canon:"The Stockholm and Geneva foundations, shared registry practice, universal rescue beacons, protected distress frequencies, emergency adapter kits, crewed-launch notification, debris warnings, approach rules, and assistance regardless of bloc are established. A single world agency, universal vehicle design, exact technical annexes, enforcement staff, fees, and complete participation list are not established.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The first German and American crewed systems could settle emergencies through direct political contact. Japanese, British, Latin, and associated-state missions made that method too slow. A crew could enter distress while the nearest compatible vehicle belonged to a rival government.</p>"},
      {id:"legal",title:"Legal foundation",html:"<p>The <a href='stockholm-orbital-safety-convention.html'>Stockholm Convention of 1976</a> established registration, rescue, breakup notice, conjunction warning, debris liability, passivation, disposal, and protected recovery work. The <a href='geneva-orbital-incidents-agreement.html'>Geneva agreement of 1982</a> added transponders, station safety zones, close-approach notice, direct communications, and protection of life support.</p>"},
      {id:"communications",title:"Communications and identification",html:"<p><a href='orbital-distress-communications.html'>Protected distress channels and rescue beacons</a> identify an emergency across national networks. Registration and transponders help a controller distinguish a disabled vehicle from an unannounced inspection or attack approach.</p>"},
      {id:"interfaces",title:"Interfaces and docking",html:"<p>Vehicles retain national docking mechanisms. <a href='emergency-docking-adapter-kits.html'>Emergency adapter kits</a>, published emergency data, and multilingual labels supply limited compatibility for rescue and safe-haven access.</p>"},
      {id:"traffic",title:"Traffic information",html:"<p><a href='crewed-launch-notification.html'>Crewed-launch notices</a>, object registration, orbit updates, breakup reports, and <a href='orbital-debris-warning-system.html'>conjunction warnings</a> give national tracking centers a shared minimum picture. Detailed military mission data remain protected.</p>"},
      {id:"stations",title:"Inhabited stations",html:"<p><a href='inhabited-station-approach-rules.html'>Approach rules</a> protect traffic corridors, life support, and command authority around inhabited platforms. A safety zone regulates maneuver and communication; it does not create territorial sovereignty over an orbital volume.</p>"},
      {id:"rescue",title:"Rescue duty",html:"<p>The <a href='cross-bloc-rescue-duty.html'>cross-bloc rescue duty</a> requires practical assistance to crews in immediate peril. Costs, classified hardware, liability, and repatriation are handled after the rescuing commander has secured life.</p>"},
      {id:"administration",title:"Administration",html:"<p>No world space authority operates the system. National registries, military and civil tracking centers, station controllers, commercial operators, insurers, diplomatic channels, and treaty practice maintain it through reciprocal dependence.</p>"},
      {id:"limits",title:"Limits",html:"<p>The standards cannot put a responder in the correct orbit, provide propellant, or make incompatible pressure systems safe. They reduce delay and ambiguity. Military inspection, electronic warfare, and conventional orbital weapons remain lawful within separate restrictions.</p>"}
    ],
    related:[{href:"international-orbital-object-registry.html",kicker:"Identity layer",label:"International Orbital Object Registry"},{href:"orbital-distress-communications.html",kicker:"Emergency signals",label:"Orbital Distress Communications"},{href:"emergency-docking-adapter-kits.html",kicker:"Physical interface",label:"Emergency Docking Adapter Kits"},{href:"orbital-debris-warning-system.html",kicker:"Traffic hazard service",label:"Orbital Debris Warning System"},{href:"cross-bloc-rescue-duty.html",kicker:"Humanitarian rule",label:"Cross-Bloc Rescue Duty"}],
    facts:[["Institutional form","National systems under shared rules"],["Principal foundations","Stockholm 1976 · Geneva 1982"],["Common communications","Distress channels · rescue beacons"],["Physical compatibility","Emergency adapter kits"],["Traffic information","Registration · launch and debris notices"],["Station protection","Approach rules and direct communications"],["Humanitarian rule","Aid regardless of bloc"],["Universal vehicle design","None"],["Reference year","2000"]]
  }),

  "international-orbital-object-registry": interblocSafetyArticle({
    title:"International orbital-object registration",category:"Space traffic management",infoboxKicker:"Shared spacecraft identity practice",
    lead:"International orbital-object registration is the practice by which launching states and responsible operators identify spacecraft, crewed vehicles, stations, major stages, and hazardous fragments for traffic safety and legal responsibility. It consists of linked national records and exchanged notices rather than one complete public catalogue.",
    canon:"Stockholm registration duties, notice of material orbit changes, hazardous failure and breakup reporting, links between objects and responsible authorities, and use in rescue, conjunction warning, liability, and salvage are established. Registry name, depositary, mandatory fields, update intervals, public access, military exemptions, and enforcement procedure remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>By the middle 1970s tracking networks contain objects whose purpose, owner, or condition is unclear. Smaller space powers cannot maintain an independent catalogue comparable to the German and American systems and press for a minimum exchange of identity and orbit information.</p>"},
      {id:"stockholm",title:"Stockholm registration duty",html:"<p>The 1976 Stockholm Convention makes registration accepted operating practice. A record connects an object to a launching state, responsible service or operator, basic orbit, general function, and contact authority.</p>"},
      {id:"objects",title:"Objects covered",html:"<p>Working spacecraft, inhabited stations, crew transports, upper stages, tugs, salvage craft, and known hazardous fragments may require different entries. Loose material too small to identify individually appears through cloud, breakup, or hazard notices.</p>"},
      {id:"updates",title:"Updates and status changes",html:"<p>Operators report significant orbit changes, transfer of responsibility, loss of command, passivation, disposal, recovery, controlled reentry, and major breakup. Emergency notices may precede the complete administrative update.</p>"},
      {id:"uses",title:"Operational uses",html:"<p>Controllers use registry information for launch clearance, conjunction screening, station approaches, rescue, salvage, and accident investigation. Registration identifies responsibility without creating territorial sovereignty around a vehicle.</p>"},
      {id:"military",title:"Military and commercial records",html:"<p>Military operators disclose enough information for safety while withholding payload purpose, sensors, maneuver reserves, and detailed missions. Commercial operators connect registrations to insurers, licenses, and corporate liability.</p>"},
      {id:"administration",title:"Distributed administration",html:"<p>National catalogues exchange an agreed minimum through diplomatic and technical channels. The archive does not establish a single supranational registrar with independent tracking or enforcement power.</p>"},
      {id:"limits",title:"Limits",html:"<p>Registration can be late, incomplete, or misleading. Tracking observations, direct contact, launch notices, and intelligence remain necessary when a record and an observed object disagree.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"crewed-launch-notification.html",kicker:"Initial operating notice",label:"Crewed Launch Notification"},{href:"orbital-debris-warning-system.html",kicker:"Tracking use",label:"Orbital Debris Warning System"},{href:"flags-and-registration-in-space.html",kicker:"Jurisdictional consequence",label:"Flags and Registration in Space"},{href:"stockholm-orbital-safety-convention.html",kicker:"Treaty basis",label:"Stockholm Orbital Safety Convention"}],
    facts:[["Legal basis","Stockholm Convention · 1976"],["Institutional form","Linked national registries"],["Primary subjects","Spacecraft · stations · stages · hazardous fragments"],["Responsible party","Launching state or registered operator"],["Required changes","Orbit · control · transfer · disposal · breakup"],["Principal uses","Traffic · rescue · liability · salvage"],["Public universal catalogue","Not established"],["Sovereignty created by registration","None"]]
  }),

  "orbital-distress-communications": interblocSafetyArticle({
    title:"Orbital distress communications",category:"Space communications",infoboxKicker:"Protected emergency signal system",
    lead:"Orbital distress communications are the protected channels, rescue beacons, call formats, and direct-controller procedures used to announce danger to spacecraft and inhabited stations. By the middle 1980s every major crewed system can recognize a common emergency signal even when ordinary communications and command languages are incompatible.",
    canon:"Protected distress frequencies, universal rescue beacons, direct station communications, cross-bloc monitoring, transmission of safety and condition information, and use during rescue are established. Exact frequencies, modulation, code structure, beacon manufacturers, language order, monitoring schedule, and false-alarm rules remain open.",
    sections:[
      {id:"need",title:"Operational need",html:"<p>A disabled vehicle may have minutes of power, air, or attitude control remaining. Routing its first message through embassies would make rescue dependent on political office hours and accurate diplomatic identification.</p>"},
      {id:"channels",title:"Protected distress channels",html:"<p>Major stations, tracking centers, crew vehicles, and rescue-capable craft monitor agreed emergency channels. Routine traffic is excluded. Jamming or deceptive use threatens access to assistance for the offending system's own crews.</p>"},
      {id:"beacons",title:"Rescue beacons",html:"<p>An automatic or manually activated beacon transmits identity, distress status, and enough locating information for a tracking network to begin a response. Universal recognition does not require every beacon to share one manufacturer or internal design.</p>"},
      {id:"message",title:"Emergency message",html:"<p>Controllers seek vehicle identity, orbit or position, crew count, atmosphere, fire, pressure, attitude, power, injuries, docking condition, consumables, and hazardous materials. A partial message still initiates tracking and relay.</p>"},
      {id:"relay",title:"Relay and acknowledgment",html:"<p>Stations and satellites relay calls beyond the disabled craft's direct range. The first receiving authority acknowledges the call, records it, and identifies a responder or transfers coordination to a better-positioned center.</p>"},
      {id:"language",title:"Language and labels",html:"<p>Emergency vocabulary is limited and repeated in more than one operational language aboard international installations. Standard labels and checklists reduce dependence on fluent conversation during pressure loss, smoke, injury, or suit operations.</p>"},
      {id:"military",title:"Military emergencies",html:"<p>A military vehicle may transmit only what is required for life safety. Responders do not receive a general right to inspect payloads, computers, or mission records merely because they answer the call.</p>"},
      {id:"limits",title:"Failure and misuse",html:"<p>A damaged antenna, power loss, solar interference, or incorrect orbit can prevent reception. False calls and ambiguous military maneuvers remain possible, so responders combine the signal with independent tracking and cautious approach procedures.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"orbital-rescue-service.html",kicker:"Operational response",label:"Orbital Rescue Service"},{href:"cross-bloc-rescue-duty.html",kicker:"Legal consequence",label:"Cross-Bloc Rescue Duty"},{href:"orbital-debris-warning-system.html",kicker:"Hazard messages",label:"Orbital Debris Warning System"},{href:"geneva-orbital-incidents-agreement.html",kicker:"Direct communications rule",label:"Geneva Orbital Incidents Agreement"}],
    facts:[["Mature adoption","Mid-1980s"],["Principal media","Protected channels and rescue beacons"],["Monitored by","Stations · tracking centers · crew vehicles"],["Common recognition","Required"],["Ordinary traffic","Excluded"],["Initial information","Identity · location · crew and vehicle condition"],["Cross-bloc use","Established"],["Exact frequency allocation","Open"]]
  }),

  "emergency-docking-adapter-kits": interblocSafetyArticle({
    title:"Emergency docking adapter kits",category:"Spacecraft systems",infoboxKicker:"Cross-system emergency interface",
    lead:"Emergency docking adapter kits are portable or station-carried interface assemblies that permit temporary pressure, structural, power, data, or rescue connections between spacecraft built to incompatible national docking systems. They provide emergency compatibility without imposing one standard docking mechanism upon every space program.",
    canon:"Emergency docking adapters or adapter kits, their use in rescue and safe-haven operations, continued national interface differences, and associated approach and pressure checks are established. Exact dimensions, connector families, pressure limits, production standards, kit locations, certification bodies, and whether every pairing permits pressurized transfer remain open.",
    sections:[
      {id:"incompatibility",title:"National docking systems",html:"<p>German, American, Japanese, Commonwealth, and Latin spacecraft develop around different hatch geometry, capture rings, structural loads, electrical systems, data links, pressure practice, and vehicle doctrine. Ordinary operational docking remains system-specific.</p>"},
      {id:"kit",title:"Adapter-kit principle",html:"<p>An adapter carries the mechanical and service elements needed for a limited connection. Some kits permit crew transfer through a pressure tunnel; others support only stabilization, air or power hoses, communications, or an external suited transfer.</p>"},
      {id:"carriage",title:"Carriage and storage",html:"<p>Major stations, rescue vehicles, tugs, and selected crew transports carry adapters for likely foreign interfaces. No craft can carry every possible combination without unacceptable mass and complexity.</p>"},
      {id:"docking",title:"Emergency docking sequence",html:"<p>Controllers exchange interface data, isolate damaged systems, inspect alignment, capture at low relative speed, test structural restraint, check pressure and contamination, and authorize each service connection separately. A mechanical capture does not automatically permit hatch opening.</p>"},
      {id:"services",title:"Power, atmosphere, and data",html:"<p>Electrical conversion, atmosphere composition, pressure, cooling, and communications may require separate equipment. Emergency links prioritize stable power, breathable atmosphere, voice, and medical transfer over complete vehicle integration.</p>"},
      {id:"security",title:"Security",html:"<p>Adapter practice limits the physical access required to save life. A station commander may quarantine a visiting vehicle, isolate data paths, cover classified compartments, and move a rescued crew through a controlled route.</p>"},
      {id:"certification",title:"Testing and certification",html:"<p>Programs test adapters against representative rings, seals, load cases, pressure cycles, and contaminated or powerless vehicles. Exact certification authorities and inspection intervals differ among the five systems and remain incompletely recorded.</p>"},
      {id:"limits",title:"Limits",html:"<p>Severe rotation, distorted structure, fire, toxic atmosphere, damaged seals, or an unknown interface can make docking impossible. A suited or tethered transfer may remain the only rescue option.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"orbital-rescue-service.html",kicker:"Principal use",label:"Orbital Rescue Service"},{href:"inhabited-station-approach-rules.html",kicker:"Approach procedure",label:"Inhabited-Station Approach Rules"},{href:"orbital-tugs-tankers.html",kicker:"Adapter carrier",label:"Orbital Tugs and Tankers"},{href:"geneva-orbital-incidents-agreement.html",kicker:"Encounter framework",label:"Geneva Orbital Incidents Agreement"}],
    facts:[["Purpose","Emergency cross-system connection"],["Mature adoption","Mid-1980s"],["Possible functions","Capture · pressure · power · air · voice"],["Carriers","Stations · rescue craft · tugs · crew vehicles"],["Universal routine docking system","None"],["Automatic hatch opening","No"],["Fallback","Suited or tethered transfer"],["Exact interface dimensions","Open"]]
  }),

  "crewed-launch-notification": interblocSafetyArticle({
    title:"Crewed-launch notification",category:"Space traffic management",infoboxKicker:"Pre-launch international safety notice",
    lead:"Crewed-launch notification is the advance exchange of minimum trajectory, timing, identity, and contact information for launches carrying people or approaching inhabited infrastructure. The practice allows foreign tracking networks and stations to identify a flight, screen conjunctions, and distinguish a delayed or off-nominal ascent from an undeclared military maneuver.",
    canon:"Notification of crewed launches by the middle 1980s, its safety and rescue purposes, exchange among rival systems, and continued protection of detailed mission information are established. Notice period, recipients, message fields, emergency amendments, military exceptions, and responsibility for commercial submissions remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>Higher launch frequency places ascent corridors, upper stages, stations, and visiting vehicles inside one traffic environment. A foreign controller may observe a launch before receiving ordinary diplomatic reporting.</p>"},
      {id:"notice",title:"Minimum notice",html:"<p>A notice identifies the responsible authority, launch window, broad ascent and destination, crewed status, expected objects, emergency contact, and changes likely to affect inhabited traffic. It need not disclose every payload or operational purpose.</p>"},
      {id:"distribution",title:"Distribution",html:"<p>National launch authorities pass notices to other major tracking networks, affected stations, and agreed technical contacts. Commercial and associated-state launches normally enter the system through the state responsible for licensing or support.</p>"},
      {id:"screening",title:"Conjunction screening",html:"<p>Tracking centers compare the planned ascent and insertion against stations, crew vehicles, disposal zones, and known debris. A warning may change a launch window or place a station crew under temporary watch.</p>"},
      {id:"rescue",title:"Rescue preparation",html:"<p>Notification tells responders how many people may require assistance, what vehicle to identify, and which authority holds technical data. It also reduces the time required to recognize a failed insertion or silent craft.</p>"},
      {id:"changes",title:"Delays and emergencies",html:"<p>Weather, technical faults, range safety, and military necessity can alter a launch. Operators circulate amendments when practical; an emergency launch uses the fastest available direct channel and is explained afterward.</p>"},
      {id:"military",title:"Military confidentiality",html:"<p>Crewed military missions receive safety notice without full disclosure of sensors, weapons, targets, or maneuver plans. An unnotified ascent toward inhabited infrastructure is liable to be treated as a serious incident.</p>"},
      {id:"limits",title:"Limits",html:"<p>Notification is not authorization by a foreign power. It does not prevent launch failure, debris, or intentional deception, and it does not provide a universal right to inspect a vehicle.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"international-orbital-object-registry.html",kicker:"Post-launch record",label:"Orbital-Object Registration"},{href:"orbital-debris-warning-system.html",kicker:"Traffic screening",label:"Orbital Debris Warning System"},{href:"inhabited-station-approach-rules.html",kicker:"Destination procedure",label:"Inhabited-Station Approach Rules"},{href:"geneva-orbital-incidents-agreement.html",kicker:"Notice doctrine",label:"Geneva Orbital Incidents Agreement"}],
    facts:[["Mature adoption","Mid-1980s"],["Scope","Crewed launches and inhabited-space approaches"],["Principal fields","Window · identity · broad trajectory · contact"],["Primary uses","Tracking · conjunction screening · rescue"],["Foreign approval required","No"],["Detailed payload disclosure","Not generally required"],["Commercial responsibility","Through licensing or supporting state"],["Exact notice period","Open"]]
  }),

  "orbital-debris-warning-system": interblocSafetyArticle({
    title:"Orbital debris warning system",category:"Space traffic management",infoboxKicker:"Shared conjunction and breakup-warning practice",
    lead:"The orbital debris warning system is the distributed practice through which national tracking networks exchange breakup reports, conjunction warnings, reentry notices, and observations of hazardous objects. It protects crewed stations and spacecraft without combining the five systems' complete military catalogues.",
    canon:"Recognition of collision-cascade danger, Stockholm breakup and debris notice, shared conjunction warnings, passivation and disposal duties, rejection of fragmentation tests in heavily occupied bands, retention of loose equipment, and cross-bloc warning practice are established. A unified control center, complete common catalogue, warning thresholds, message formats, sensor contributions, and liability formulas remain open.",
    sections:[
      {id:"hazard",title:"Collision hazard",html:"<p>Orbital speed turns small fragments into serious threats. One breakup may create objects capable of causing further impacts, and debris can remain hazardous long after the launching state changes policy.</p>"},
      {id:"tracking",title:"Tracking networks",html:"<p>German, American, Japanese, Commonwealth, and Latin sensors maintain catalogues of different depth. The system exchanges safety products derived from those observations rather than merging every raw track and military capability.</p>"},
      {id:"breakup",title:"Breakup notification",html:"<p>An operator losing a stage, tank, panel, vehicle, or other large object reports the event, estimated orbit, time, known fragments, stored energy, and hazardous material when available. Other networks refine the cloud through independent observation.</p>"},
      {id:"conjunction",title:"Conjunction warnings",html:"<p>Tracking centers issue warnings when predicted paths place an object near a crewed station or spacecraft. Operators compare uncertainty, maneuver cost, docking schedules, mission demands, and the danger of moving into a second conjunction.</p>"},
      {id:"prevention",title:"Passivation and disposal",html:"<p>Retired hardware is expected to minimize stored energy, secure propellant, discharge or isolate batteries where practical, and enter a planned disposal state. Loose covers, links, cases, and tools are retained rather than deliberately released.</p>"},
      {id:"fragmentation",title:"Fragmentation taboo",html:"<p>Intentional fragmentation tests are rejected in heavily occupied orbital bands. Conventional interception remains possible, but an operator that creates a persistent uncontrolled cloud faces liability, diplomatic pressure, and danger to its own traffic.</p>"},
      {id:"stations",title:"Station response",html:"<p>Stations may close hatches, suspend exterior work, move visiting vehicles, shelter crews, or conduct a collision-avoidance maneuver. Direct controller contact becomes essential when more than one large inhabited platform shares an orbital region.</p>"},
      {id:"limits",title:"Limits",html:"<p>Small objects remain below reliable tracking thresholds, catalogues disagree, and solar activity changes predictions. A warning supplies probability and time for judgment, not certainty.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"international-orbital-object-registry.html",kicker:"Identity records",label:"Orbital-Object Registration"},{href:"stockholm-orbital-safety-convention.html",kicker:"Legal basis",label:"Stockholm Orbital Safety Convention"},{href:"orbital-stations.html",kicker:"Protected infrastructure",label:"Orbital Stations"},{href:"extraterrestrial-abandonment-and-salvage.html",kicker:"Dormant objects",label:"Abandonment and Salvage"}],
    facts:[["Legal basis","Stockholm Convention · 1976"],["Institutional form","Distributed national tracking networks"],["Principal products","Breakup · conjunction · reentry warnings"],["Preventive duties","Passivation · disposal · equipment retention"],["Fragmentation tests in occupied bands","Rejected"],["Unified military catalogue","None"],["Primary protected users","Crewed spacecraft and stations"],["Complete detection","Not achieved"]]
  }),

  "inhabited-station-approach-rules": interblocSafetyArticle({
    title:"Inhabited-station approach rules",category:"Space traffic management",infoboxKicker:"Close-approach and station-safety procedure",
    lead:"Inhabited-station approach rules govern identification, notice, communications, maneuver, holding points, docking clearance, and emergency authority when a spacecraft enters the operating vicinity of a crewed orbital platform. They reduce the danger that servicing, inspection, rescue, or an off-nominal vehicle will be mistaken for an attack.",
    canon:"Station safety zones, transponder behavior, notice of close approaches, direct station communications, protection of life support, emergency exceptions, and the non-sovereign character of safety zones are established. Exact distances, holding points, closure speeds, traffic-light conventions, language order, military exceptions, and enforcement weapons remain open.",
    sections:[
      {id:"problem",title:"Servicing and attack",html:"<p>A craft capable of rendezvous, inspection, towing, repair, or rescue can also disable a station. Vehicle type alone cannot establish intent during a rapid approach.</p>"},
      {id:"geneva",title:"Geneva rules",html:"<p>The 1982 Geneva Orbital Incidents Agreement requires recognizable transponder behavior, notice of planned proximity operations, direct communications, and respect for station safety zones and life-support systems.</p>"},
      {id:"notice",title:"Approach notice",html:"<p>An approaching vehicle identifies itself, states its general purpose, supplies relevant maneuver information, and establishes a direct channel. The station assigns a sequence, delay, inspection, or refusal according to traffic and safety.</p>"},
      {id:"control",title:"Station traffic authority",html:"<p>The integrated station commander controls immediate technical safety around docking, attitude, life support, reactor operations, and collision risk. Foreign module jurisdiction does not divide command during an approach emergency.</p>"},
      {id:"zones",title:"Safety zones and holding areas",html:"<p>A safety zone defines heightened notice and maneuver expectations around inhabited infrastructure. It is an operating rule, not a national border or territorial claim over outer space.</p>"},
      {id:"docking",title:"Docking clearance",html:"<p>Clearance depends on interface compatibility, pressure condition, contamination, traffic, crew state, and station capacity. An emergency adapter may permit connection that would not be accepted for routine visits.</p>"},
      {id:"emergency",title:"Emergency approach",html:"<p>A powerless, injured, or rapidly failing craft may be unable to follow the normal sequence. Distress communications and independent tracking permit the station to clear traffic and give abbreviated instructions while preserving defensive readiness.</p>"},
      {id:"violation",title:"Violation and response",html:"<p>An unidentified or noncompliant approach can trigger warnings, maneuver, closure of hatches, station isolation, intercept, or defensive action. Political and legal review follows once immediate danger has passed.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"geneva-orbital-incidents-agreement.html",kicker:"Legal basis",label:"Geneva Orbital Incidents Agreement"},{href:"emergency-docking-adapter-kits.html",kicker:"Emergency interface",label:"Emergency Docking Adapter Kits"},{href:"orbital-distress-communications.html",kicker:"Emergency channel",label:"Orbital Distress Communications"},{href:"raumhafen-jurisdiction.html",kicker:"Station-authority example",label:"Jurisdiction aboard the Orbitaler Raumhafen"}],
    facts:[["Principal agreement","Geneva · 1982"],["Required conduct","Identity · notice · direct communication"],["Local authority","Integrated station commander"],["Safety zone status","Operational, not sovereign territory"],["Routine docking right","None"],["Emergency exception","Permitted with direct warning when possible"],["Protected systems","Habitation and life support"],["Exact approach distances","Open"]]
  }),

  "cross-bloc-rescue-duty": interblocSafetyArticle({
    title:"Cross-bloc rescue duty",category:"Space law",infoboxKicker:"Humanitarian obligation in spaceflight",
    lead:"The cross-bloc rescue duty is the accepted rule that a spacecraft, station, or control authority with practical capacity must assist a stranded crew regardless of political alignment. The duty protects human life first while preserving later claims over jurisdiction, cost, liability, classified equipment, and return of personnel.",
    canon:"Stockholm rescue obligations, Geneva reinforcement, aid regardless of bloc, protection of marked rescue and recovery craft, command by the responder during immediate safety operations, and continued nationality of rescued personnel are established. Priority rules among simultaneous emergencies, reimbursement, refusal standards, repatriation deadlines, treatment of accused persons, and complete enforcement procedure remain open.",
    sections:[
      {id:"origin",title:"Origin",html:"<p>Early programs could imagine recovery as a national responsibility. Permanent stations and five independent crewed systems make abandonment politically and operationally intolerable when a foreign vehicle is the nearest possible responder.</p>"},
      {id:"stockholm",title:"Stockholm obligation",html:"<p>The 1976 Stockholm Convention establishes assistance to crews in immediate peril as a widely accepted duty. Rescue and marked recovery work receive protection because every space power may depend upon them.</p>"},
      {id:"geneva",title:"Geneva reinforcement",html:"<p>The 1982 Geneva agreement joins the rescue duty to direct communications, approach rules, and protection of life support. By the middle 1980s adapter kits and common distress signals make the obligation more practicable.</p>"},
      {id:"capacity",title:"Practical capacity",html:"<p>A duty to assist does not create fuel, seats, docking compatibility, or a safe transfer path. A responder must judge whether intervention can save life without causing another loss.</p>"},
      {id:"command",title:"Command during rescue",html:"<p>The rescuing commander controls the immediate maneuver, docking, quarantine, medical, and safety sequence. Rescued personnel follow those instructions while retaining their nationality and ordinary legal status.</p>"},
      {id:"security",title:"Classified vehicles and personnel",html:"<p>Humanitarian access does not authorize general exploitation of a military vehicle. Compartments may be sealed, data isolated, and equipment covered or guarded so far as those measures do not obstruct survival.</p>"},
      {id:"costs",title:"Costs, liability, and return",html:"<p>Propellant, damaged hardware, medical care, salvage, negligence, insurance, and repatriation can produce substantial claims. They are negotiated after rescue rather than made a condition of initial aid.</p>"},
      {id:"taboo",title:"Protection of rescue operations",html:"<p>Deliberate attack upon a clearly identified rescue craft or interference with life support is among the strongest orbital taboos. Misuse of rescue markings for inspection or attack would threaten the protection available to every crew.</p>"}
    ],
    related:[{href:"interbloc-space-safety-standards.html",kicker:"Wider regime",label:"Interbloc Space-Safety Standards"},{href:"orbital-rescue-service.html",kicker:"Operational practice",label:"Orbital Rescue Service"},{href:"orbital-distress-communications.html",kicker:"Emergency activation",label:"Orbital Distress Communications"},{href:"stockholm-orbital-safety-convention.html",kicker:"Foundational treaty",label:"Stockholm Orbital Safety Convention"},{href:"strategic-stability-in-space.html",kicker:"Protected status",label:"Strategic Stability in Space"}],
    facts:[["Foundational agreement","Stockholm · 1976"],["Operational reinforcement","Geneva · 1982"],["Beneficiaries","Stranded crews regardless of bloc"],["Limitation","Practical capacity and safety"],["Immediate commander","Rescuing authority"],["Nationality after rescue","Retained"],["Classified access","Limited to life-saving need"],["Costs and liability","Settled after immediate aid"]]
  })
});

const addInterblocSafetyRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  const existing = new Set((article.related || []).map(item => item.href));
  article.related = [...items.filter(item => !existing.has(item.href)), ...(article.related || [])];
};

addInterblocSafetyRelated("orbital-law",[
  {href:"interbloc-space-safety-standards.html",kicker:"Operating standards",label:"Interbloc Space-Safety Standards"},
  {href:"international-orbital-object-registry.html",kicker:"Registration practice",label:"Orbital-Object Registration"},
  {href:"orbital-debris-warning-system.html",kicker:"Traffic safety",label:"Orbital Debris Warning System"}
]);
addInterblocSafetyRelated("stockholm-orbital-safety-convention",[
  {href:"international-orbital-object-registry.html",kicker:"Registration implementation",label:"Orbital-Object Registration"},
  {href:"orbital-debris-warning-system.html",kicker:"Debris implementation",label:"Orbital Debris Warning System"},
  {href:"cross-bloc-rescue-duty.html",kicker:"Humanitarian implementation",label:"Cross-Bloc Rescue Duty"}
]);
addInterblocSafetyRelated("geneva-orbital-incidents-agreement",[
  {href:"inhabited-station-approach-rules.html",kicker:"Approach implementation",label:"Inhabited-Station Approach Rules"},
  {href:"orbital-distress-communications.html",kicker:"Direct emergency channel",label:"Orbital Distress Communications"},
  {href:"crewed-launch-notification.html",kicker:"Traffic notice",label:"Crewed Launch Notification"}
]);
addInterblocSafetyRelated("orbital-rescue-service",[
  {href:"interbloc-space-safety-standards.html",kicker:"Standards framework",label:"Interbloc Space-Safety Standards"},
  {href:"orbital-distress-communications.html",kicker:"Distress activation",label:"Orbital Distress Communications"},
  {href:"emergency-docking-adapter-kits.html",kicker:"Physical transfer",label:"Emergency Docking Adapter Kits"},
  {href:"cross-bloc-rescue-duty.html",kicker:"Legal duty",label:"Cross-Bloc Rescue Duty"}
]);
