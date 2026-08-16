window.deepArticles = window.deepArticles || {};

const americanEarlyBomberLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — American strategic-air register"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aviation and aerospace institutions"},
  {href:"../transcript.md",label:"Master Transcript — American jet-bomber development and doctrine"}
];

const americanEarlyBomberOfficialSources = {
  xb43:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/4526563/douglas-xb-42a-mixmaster/",label:"National Museum of the U.S. Air Force — Douglas XB-42A and XB-43 development"},
  b45:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196105/north-american-b-45c-tornado/",label:"National Museum of the U.S. Air Force — North American B-45 Tornado"},
  j47:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/609991/USAFmuseum/general-electric-j47-turbojet/",label:"National Museum of the U.S. Air Force — General Electric J47 turbojet"},
  b47:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196900/boeing-rb-47h-stratojet/",label:"National Museum of the U.S. Air Force — Boeing B-47 Stratojet"},
  xb48:{href:"https://www.nationalmuseum.af.mil/Upcoming/Photos/igphoto/2000538613/",label:"National Museum of the U.S. Air Force — Martin XB-48 collection photograph"},
  b52:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195815/boeing-b-52d-stratofortress/",label:"National Museum of the U.S. Air Force — Boeing B-52 Stratofortress"},
  x15:{href:"https://www.nasa.gov/history/x15/cover.html",label:"NASA History — X-15 research program and B-52 mothership operations"}
};

const americanEarlyBomberRelated = [
  {href:"american-strategic-bomber-development.html",kicker:"Program register",label:"American Strategic-Bomber Development"},
  {href:"american-jet-engine-industry.html",kicker:"Propulsion base",label:"American Jet-Engine Industry"},
  {href:"american-aerospace-force-atmospheric-fleet.html",kicker:"Later service register",label:"Aerospace Force Atmospheric Fleet"}
];

const americanEarlyBomberArticle = c => ({
  title:c.title,
  category:c.category || "Military aircraft",
  eyebrow:c.eyebrow,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...americanEarlyBomberRelated,...c.related],
  sources:[...americanEarlyBomberLocalSources,...c.sources],
  categories:["United States","Strategic aviation","Military aircraft",c.manufacturer,...(c.categories || [])],
  facts:c.facts
});

Object.assign(window.deepArticles, {
  "xb-43-jetmaster": americanEarlyBomberArticle({
    title:"Douglas XB-43 Jetmaster",manufacturer:"Douglas Aircraft",eyebrow:"United States · first all-jet bomber experiment · late 1940s",kicker:"Experimental jet bomber",
    lead:"In the incorporated American bomber ladder, the Douglas XB-43 Jetmaster was the first all-jet bomber experiment to fly. Its Douglas and XB-42 lineage, buried twin-turbojet arrangement, research function, and prototype-only disposition are retained as reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion invites an earlier bomber ladder but does not fix XB-43 in the divergent chronology. Its post-1941 development, configuration, research role, dates, airframe count, engines, performance, assignments, modifications, accidents, and disposition are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e7k2m writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange explores the need for an earlier American bomber ladder without naming or fixing XB-43.<sup class='canon-note' data-provenance='a'>[a]</sup> The setting history below is a compatible incorporated use of the historical Jetmaster program.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"origin",title:"From Mixmaster to Jetmaster",html:"<p>Douglas designed XB-43 around the fuselage and general arrangement of the <a href='douglas-aircraft.html'>XB-42 Mixmaster</a>. Removing the piston installation and its aft propellers created space for two early turbojets buried in the fuselage, with side inlets and exhausts at the tail. The conversion made the aircraft a practical way to test jet-bomber systems before the United States had settled the form or doctrine of a production type.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"airframe",title:"Airframe and propulsion",html:"<p>The aircraft retained a compact straight-wing bomber layout and tricycle undercarriage rather than anticipating the swept-wing form later associated with the B-47. Its most important equipment was the propulsion installation itself: inlet ducting, engine access, fuel control, starting, exhaust routing, and cockpit indications all had to be made reliable in a large multi-engine jet.</p><p>The broad J35-class axial-flow foundation is compatible with the program, but the exact engine marks and sequence of installations are not registered.</p>"},
      {id:"testing",title:"Research program",html:"<p>Jetmaster sorties supplied information on asymmetric thrust, acceleration, compressor behavior, fuel consumption, high-altitude relight, braking, and maintenance. The aircraft could demonstrate that a jet bomber was workable without proving that its inherited airframe was suitable for production.</p><p>Weapons trials, reconnaissance equipment, named test units, locations, sortie totals, and individual airframe histories remain unregistered.</p>"},
      {id:"place",title:"Place in bomber development",html:"<p>XB-43 opened the sequence but did not choose its winner. <a href='b-45-tornado.html'>B-45 Tornado</a> supplied operational experience, while <a href='b-47-stratojet.html'>B-47 Stratojet</a> established the swept-wing postwar standard. Jetmaster is consequently remembered as an industrial and experimental prologue rather than a failed service bomber.</p>"},
      {id:"limits",title:"Open technical record",html:"<p>The register does not fix specifications, performance figures, crew arrangement, defensive armament, bomb capacity, prototype count, test chronology, surviving airframes, or museum disposition.</p>"}
    ],
    related:[{href:"douglas-aircraft.html",kicker:"Manufacturer",label:"Douglas Aircraft"},{href:"b-45-tornado.html",kicker:"Operational bridge",label:"B-45 Tornado"},{href:"b-47-stratojet.html",kicker:"Production successor",label:"B-47 Stratojet"}],
    sources:[americanEarlyBomberOfficialSources.xb43],categories:["Experimental aircraft"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Douglas Aircraft"],["Working type","Experimental jet bomber"],["Working lineage","XB-42 Mixmaster"],["Working propulsion","Two buried axial-flow turbojets"],["Working disposition","Research prototypes; no operational service"]]
  }),

  "b-45-tornado": americanEarlyBomberArticle({
    title:"North American B-45 Tornado",manufacturer:"North American Aviation",eyebrow:"United States · first operational jet-bomber bridge · early 1950s",kicker:"First operational American jet bomber",
    lead:"In the incorporated American bomber ladder, the North American B-45 Tornado was the first jet bomber to enter operational service. Its straight-wing four-engine form, small fleet, missions, and place between XB-43 and B-47 are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix B-45 in the divergent chronology. North American manufacture, configuration, first-operational status, fleet scale, missions, dates, variants, quantity, engines, specifications, units, bases, operations, losses, modifications, and retirement are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e8p4r writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange explores an earlier bomber ladder without naming or fixing B-45.<sup class='canon-note' data-provenance='a'>[a]</sup> Its service as the first operational jet-bomber bridge remains compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"requirement",title:"Operational bridge",html:"<p>The first jet-bomber competition did not begin with a settled <em>Schnellbomber</em> doctrine. It asked whether a large jet aircraft could be operated as a bomber at all. In this reconstruction, B-45 answered that institutional question before the more advanced B-47 was ready.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"configuration",title:"Conventional jet-bomber form",html:"<p>North American used a straight wing, a conventional tail, tricycle landing gear, and four turbojets grouped beneath the wings. The arrangement remained recognizably descended from piston-era bombers even as jet propulsion changed speed, fuel demand, runway use, and maintenance.</p><p>Broad J35-class ancestry is compatible with the first generation. Exact production engines and later installations remain open.</p>"},
      {id:"service",title:"Small-fleet service",html:"<p>The Tornado fleet trained crews and ground organizations in multi-engine jet procedure. Aircraft performed conventional bombing, reconnaissance, navigation and radar work, and test or training assignments. No B-45 carried an atomic weapon, because such weapons never entered the setting's strategic order.</p><p>Exact squadrons, bases, campaigns, sortie totals, losses, and reconnaissance designations are not registered.</p>"},
      {id:"lessons",title:"Lessons transferred to B-47",html:"<p>B-45 exposed the operational cost of jet fuel, the importance of long runways and ground support, and the workload imposed by navigation, bombing, weather, and high-speed approach procedure. These were practical foundations for the <a href='b-47-stratojet.html'>B-47 Stratojet</a>, even though the swept-wing Boeing aircraft represented a different aerodynamic generation.</p>"},
      {id:"limits",title:"Open production record",html:"<p>The article does not assign a production total, entry date, variant sequence, reconnaissance conversion count, defensive fit, bomb load, engine mark, unit history, or retirement date.</p>"}
    ],
    related:[{href:"north-american-aviation.html",kicker:"Manufacturer",label:"North American Aviation"},{href:"xb-43-jetmaster.html",kicker:"Experimental predecessor",label:"XB-43 Jetmaster"},{href:"b-47-stratojet.html",kicker:"Swept-wing successor",label:"B-47 Stratojet"}],
    sources:[americanEarlyBomberOfficialSources.b45,americanEarlyBomberOfficialSources.j47],categories:["Bombers"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","North American Aviation"],["Working type","Jet bomber and reconnaissance aircraft"],["Working configuration","Straight wing · four turbojets"],["Working disposition","Small operational fleet"],["Weapons doctrine","Conventional only"]]
  }),

  "xb-46": americanEarlyBomberArticle({
    title:"Convair XB-46",manufacturer:"Convair",eyebrow:"United States · straight-wing jet-bomber competitor · late 1940s",kicker:"Experimental jet bomber",
    lead:"In the incorporated American bomber ladder, the Convair XB-46 was a straight-wing competitor in the first jet-bomber generation and remained a prototype when the B-47 school prevailed. Its configuration, competitive role, and outcome are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix XB-46 in the divergent chronology. Convair manufacture, configuration, competition, prototype disposition, relationship to B-47, dates, engines, performance, crew, tests, and final disposition are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e9c5v writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange does not name or fix XB-46.<sup class='canon-note' data-provenance='a'>[a]</sup> Its place in the first-generation competition remains compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"competition",title:"First-generation competitor",html:"<p>In the working ladder, XB-46 belonged to the same broad requirement family as B-45, B-47, and XB-48. Convair pursued a refined straight-wing aircraft rather than the swept-wing architecture that ultimately won the competition.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"configuration",title:"Configuration",html:"<p>The aircraft used a long narrow fuselage, conventional tail, four early turbojets carried beneath a straight wing, and a bomber crew concentrated forward. This reduced the conceptual leap from late piston bombers while still demanding new answers for fuel, engine access, runway performance, and asymmetric thrust.</p><p>Exact nacelle arrangement, undercarriage details, defensive equipment, and engine marks are not fixed by the setting register.</p>"},
      {id:"testing",title:"Prototype evaluation",html:"<p>Testing compared handling, takeoff and landing characteristics, cruise, maintenance access, bombing-system integration, and engine behavior with the other first-generation aircraft. The prototype remained useful as comparative evidence even after production preference moved elsewhere.</p>"},
      {id:"outcome",title:"Why the form did not prevail",html:"<p>XB-46 showed that careful refinement of the conventional form could produce a workable jet bomber. The <a href='b-47-stratojet.html'>B-47</a> offered more: sweep, podded engines, and an arrangement centered on higher-speed flight. Convair later returned to strategic bombing with the radically different <a href='b-58a-hustler.html'>B-58A Hustler</a>.</p>"},
      {id:"limits",title:"Open test history",html:"<p>Detailed specifications, individual flights, competing evaluations, program cost, assigned organizations, damage, modifications, and disposal remain open.</p>"}
    ],
    related:[{href:"convair.html",kicker:"Manufacturer",label:"Convair"},{href:"b-45-tornado.html",kicker:"Operational contemporary",label:"B-45 Tornado"},{href:"xb-48.html",kicker:"Prototype contemporary",label:"XB-48"},{href:"b-58a-hustler.html",kicker:"Later Convair bomber",label:"B-58A Hustler"}],
    sources:[americanEarlyBomberOfficialSources.j47],categories:["Experimental aircraft"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Convair"],["Working type","Experimental jet bomber"],["Working configuration","Straight wing · four turbojets"],["Working disposition","Prototype; no production successor"]]
  }),

  "b-47-stratojet": americanEarlyBomberArticle({
    title:"Boeing B-47 Stratojet",manufacturer:"Boeing Aircraft",eyebrow:"United States · swept-wing strategic bomber · postwar production standard",kicker:"First postwar American jet-bomber standard",
    lead:"In the incorporated American bomber ladder, the Boeing B-47 Stratojet established the swept-wing, podded-engine postwar school, became a major production type during the Philippine War, and supplied the XB-56 parent airframe. Those divergent service claims and relationships are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix B-47 in the divergent chronology. Boeing manufacture, configuration, production status, Philippine War importance, XB-56 relationship, dates, variants, engines, specifications, quantities, units, bases, combat, conversions, losses, upgrades, and retirement are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e2d6w writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange does not name or fix B-47, its Philippine War service, or its place in the bomber ladder.<sup class='canon-note' data-provenance='a'>[a]</sup> The retained program history is compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"design",title:"A new bomber arrangement",html:"<p>In the working ladder, B-47 separated itself from B-45, XB-46, and XB-48 by making high-speed aerodynamic practice the organizing principle of the aircraft. Its swept wing carried six turbojets in pods, while bicycle main gear kept the slender wing free of deep landing-gear bays. A three-person crew reduced the large forward compartments common to piston bombers.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"propulsion",title:"Six-engine propulsion system",html:"<p>Multiple small early turbojets provided the thrust available to the generation and made the bomber a major customer for American axial-flow engine production. General Electric J47-class practice is the principal compatible technical foundation, but exact marks and installation chronology remain open.</p><p>Engine pods simplified access and allowed the airframe to accept propulsion changes, at the cost of six engines, complex fuel management, and demanding maintenance.</p>"},
      {id:"service",title:"Production and Philippine War service",html:"<p>B-47 became the major production winner. Procurement accelerated during the Philippine War, when long Pacific distances and contested airspace made speed, navigation, warning time, tanker support, reconnaissance, and route planning parts of one operating system.</p><p>The article does not yet assign named groups, bases, raids, losses, or a production total. Its wartime importance is fixed at the level of doctrine and procurement rather than a reconstructed order of battle.</p>"},
      {id:"doctrine",title:"Speed as defensive time",html:"<p>Stratojet did not make interception impossible. It made interception harder by reducing the time between detection and weapon release. American bomber officers consequently began to treat airspeed as an element of survivability rather than merely performance.</p><p>This lesson supported the later B-58 and B-70 line, although B-47 remained subsonic and depended upon coordinated warning, electronic support, tankers, weather, and routing.</p>"},
      {id:"development",title:"Airframe for XB-56",html:"<p>The <a href='xb-56.html'>XB-56</a> program used the B-47 form to test whether four larger engines could replace six smaller ones. That conversion made Stratojet a bridge between first-generation turbojets and the larger individual engines demanded by later American aerospace aircraft.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Introduction date, production blocks, engine marks, defensive armament, conventional loads, reconnaissance designations, tanker procedures, formations, bases, operations, losses, modifications, and retirement remain unregistered.</p>"}
    ],
    related:[{href:"boeing-aircraft.html",kicker:"Manufacturer",label:"Boeing Aircraft"},{href:"b-45-tornado.html",kicker:"Operational predecessor",label:"B-45 Tornado"},{href:"xb-56.html",kicker:"Large-engine development",label:"XB-56"},{href:"b-52-stratofortress.html",kicker:"Heavy contemporary",label:"B-52 Stratofortress"},{href:"b-58a-hustler.html",kicker:"Supersonic successor",label:"B-58A Hustler"}],
    sources:[americanEarlyBomberOfficialSources.b47,americanEarlyBomberOfficialSources.j47],categories:["Bombers"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Boeing Aircraft"],["Working type","Strategic jet bomber"],["Working configuration","Swept wing · six podded turbojets · three-person concept"],["Working disposition","Major production type"],["Weapons doctrine","Conventional only"]]
  }),

  "xb-48": americanEarlyBomberArticle({
    title:"Martin XB-48",manufacturer:"Martin Aircraft",eyebrow:"United States · six-engine jet-bomber competitor · late 1940s",kicker:"Experimental jet bomber",
    lead:"In the incorporated American bomber ladder, the Martin XB-48 was a six-engine straight-wing competitor and remained a prototype when the B-47 school prevailed. Its configuration, competitive role, and outcome are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix XB-48 in the divergent chronology. Martin manufacture, configuration, competition, prototype disposition, relationship to B-47, dates, engines, performance, crew, armament, tests, and final disposition are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e3f7x writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange does not name or fix XB-48.<sup class='canon-note' data-provenance='a'>[a]</sup> Its role as a six-engine competitor remains compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"requirement",title:"Six-engine competitor",html:"<p>In the working ladder, Martin answered the early jet-bomber requirement with six engines because the turbojets then available produced limited individual thrust. The design illustrates how engine maturity constrained airframe form before larger American engines became practical.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"configuration",title:"Straight wing and clustered engines",html:"<p>XB-48 placed six turbojets beneath a straight wing and retained a conventional tail. The arrangement gave engineers direct experience with closely spaced nacelles, cooling airflow, fuel distribution, engine-out behavior, exhaust interaction, and access around a crowded wing.</p><p>Exact landing-gear arrangement, tail armament, radar installation, and engine marks remain outside the fixed register.</p>"},
      {id:"testing",title:"Comparative testing",html:"<p>The prototype program evaluated whether a conventional wing and numerous early engines could meet the requirement with lower technical risk than Boeing's swept-wing design. It also supplied Martin with large-jet systems experience useful beyond the competition itself.</p>"},
      {id:"outcome",title:"Prototype outcome",html:"<p>B-47's swept wing and overall high-speed arrangement proved more influential. XB-48 did not proceed to an operational fleet, but its failure was comparative rather than evidence that the aircraft could not fly or carry out useful trials.</p>"},
      {id:"limits",title:"Open prototype record",html:"<p>Specifications, performance, test locations, personnel, individual flights, modifications, armament trials, damage, costs, and airframe disposal remain open.</p>"}
    ],
    related:[{href:"martin-aircraft.html",kicker:"Manufacturer",label:"Martin Aircraft"},{href:"xb-46.html",kicker:"Prototype contemporary",label:"XB-46"},{href:"b-47-stratojet.html",kicker:"Competition winner",label:"B-47 Stratojet"}],
    sources:[americanEarlyBomberOfficialSources.xb48,americanEarlyBomberOfficialSources.j47],categories:["Experimental aircraft"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Martin Aircraft"],["Working type","Experimental jet bomber"],["Working configuration","Straight wing · six turbojets"],["Working disposition","Prototype; no production successor"]]
  }),

  "xb-55": americanEarlyBomberArticle({
    title:"Boeing XB-55",manufacturer:"Boeing Aircraft",eyebrow:"United States · turboprop strategic-bomber project · early 1950s",kicker:"Range-and-payload bomber project",
    lead:"In the incorporated American bomber ladder, the Boeing XB-55 was a turboprop range-and-endurance alternative to the B-47 speed school and was rejected before operational service. Its program history and later reputation as the road not taken are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix XB-55 in the divergent chronology. Boeing origin, turboprop concept, doctrinal role, rejection, reputation, dates, engines, configuration, performance, hardware completion, costs, and cancellation are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e4g8y writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange does not name or fix XB-55.<sup class='canon-note' data-provenance='a'>[a]</sup> Its range-and-endurance role and rejection remain compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"proposal",title:"The endurance answer",html:"<p>In the working ladder, XB-55 asked whether turboprops could combine efficient long-range cruise with a strategic payload while avoiding the fuel consumption of early turbojets. Its case rested on endurance and reach rather than the ability to outrun or sharply shorten an interception.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"configuration",title:"Projected configuration",html:"<p>The Boeing project used a large swept-wing bomber concept powered by four turboprops. Counter-rotating or otherwise high-power propeller systems, reduction gearboxes, long shafts, and large engine installations would have made propulsion integration the central technical risk.</p><p>The exact engine selection, propeller system, dimensions, payload, speed, and range are not registered.</p>"},
      {id:"debate",title:"Speed against endurance",html:"<p>The proposal arrived while American intelligence tracked continuing German interceptor improvement. A bomber able to remain airborne longer still had to pass through defended airspace, and conventional weapons required repeated useful missions rather than one decisive atomic penetration.</p><p>For the emerging Aerospace school, XB-55 therefore improved the wrong variable. The program did not disprove heavy long-range bombers, but it weakened the case for making a slower turboprop fleet the center of strategic aviation.</p>"},
      {id:"disposition",title:"Rejected before service",html:"<p>XB-55 produced no operational force. Whether the program stopped at engineering definition or advanced to particular full-scale hardware remains open. Its lasting importance is doctrinal: later histories used the project to explain the branch that led toward endurance while B-47, B-58, and B-70 led toward speed.</p>"},
      {id:"limits",title:"Open project record",html:"<p>Contract date, formal requirement, engine and propeller marks, projected performance, mock-ups, test articles, cancellation date, program cost, and surviving documentation remain unregistered.</p>"}
    ],
    related:[{href:"boeing-aircraft.html",kicker:"Manufacturer",label:"Boeing Aircraft"},{href:"b-47-stratojet.html",kicker:"Competing speed school",label:"B-47 Stratojet"},{href:"b-52-stratofortress.html",kicker:"Heavy branch that did fly",label:"B-52 Stratofortress"}],
    sources:[americanEarlyBomberOfficialSources.b47],categories:["Unbuilt aircraft","Bombers"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Boeing Aircraft"],["Working type","Turboprop strategic-bomber project"],["Working emphasis","Range and endurance"],["Working propulsion","Four projected turboprops"],["Working disposition","Rejected before operational service"]]
  }),

  "xb-56": americanEarlyBomberArticle({
    title:"Boeing XB-56",manufacturer:"Boeing Aircraft",eyebrow:"United States · large-engine B-47 development · mid-1950s",kicker:"Flying propulsion test program",
    lead:"In the incorporated American bomber ladder, the Boeing XB-56 was a flying B-47 development testing four large turbojets in place of six smaller engines and did not become a production B-56. Its flight status, engines, and propulsion-research result are reconstruction rather than direct canon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"The authorial discussion does not fix XB-56 in the divergent chronology. Boeing and B-47 lineage, four-engine objective, flying status, J71-class installations, research purpose, absence of production, dates, airframes, conversions, engines, performance, tests, incidents, and disposition are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e5h9z writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial exchange does not name or fix XB-56.<sup class='canon-note' data-provenance='a'>[a]</sup> Its flying B-47-derived propulsion program remains compatible incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"origin",title:"From YB-47C to XB-56",html:"<p>In the working ladder, the project began from the proposition that the B-47's six small engines could be replaced by four engines of much greater individual thrust. Renaming the flying development XB-56 separated the propulsion experiment from ordinary Stratojet production and gave it a distinct place in the bomber register.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"conversion",title:"Four-engine conversion",html:"<p>Removing two engine positions changed nacelle loads, pylons, fuel distribution, controls, failure cases, vibration, and maintenance access. The work therefore involved more than exchanging engines: the airframe had to be made into a valid comparison between the six-engine and four-engine schools.</p>"},
      {id:"engines",title:"Large-engine test work",html:"<p>Allison J71-class engines and other high-output candidates formed the accepted testing field. Exact engine marks, order of installation, thrust, afterburning equipment, and whether more than one airframe carried different powerplants remain open.</p><p>The program connected bomber demand to the wider <a href='american-jet-engine-industry.html'>American large-engine industry</a>.</p>"},
      {id:"flight",title:"Flying research program",html:"<p>Unlike the historical paper conversion, the setting's XB-56 flew. Tests addressed acceleration, climb, cruise, engine-out handling, inlet behavior, pylon loads, fuel use, maintenance burden, and the effect of fewer engines on sortie generation.</p><p>No operational bomber force was organized around the designation.</p>"},
      {id:"legacy",title:"Propulsion result rather than new bomber",html:"<p>XB-56 did not displace B-47 or become a production B-56. Its value lay in demonstrating large-engine integration at bomber scale and in supplying experience useful to the heavy B-52 branch and later high-performance aircraft.</p>"},
      {id:"limits",title:"Open test record",html:"<p>Prototype count, parent B-47 blocks, engine sequence, specifications, flight dates, pilots, test locations, performance gains, failures, modifications, and airframe disposition remain unregistered.</p>"}
    ],
    related:[{href:"boeing-aircraft.html",kicker:"Manufacturer",label:"Boeing Aircraft"},{href:"b-47-stratojet.html",kicker:"Parent airframe",label:"B-47 Stratojet"},{href:"allison-j35-j71-engine-family.html",kicker:"Large-engine program",label:"Allison J35 and J71"},{href:"b-52-stratofortress.html",kicker:"Heavy-engine contemporary",label:"B-52 Stratofortress"}],
    sources:[americanEarlyBomberOfficialSources.b47],categories:["Experimental aircraft"],
    facts:[["Canon status","Incorporated bomber-ladder reconstruction"],["Country of origin","United States"],["Working manufacturer","Boeing Aircraft"],["Working type","Flying propulsion test aircraft"],["Working parent airframe","B-47 Stratojet"],["Working objective","Four large turbojets"],["Working disposition","Flying test program; no production B-56"]]
  }),

  "b-52-stratofortress": americanEarlyBomberArticle({
    title:"Boeing B-52 Stratofortress",manufacturer:"Boeing Aircraft",eyebrow:"United States · limited heavy-bomber fleet · introduced 1956",kicker:"Long-range bomber and aerospace mothership",
    lead:"The Boeing B-52 Stratofortress remains an incorporated reconstruction of the limited heavy-bomber possibility raised in the authorial discussion. The working register gives B-52A/B a 1956 introduction, approximately 24–48 aircraft, special long-range missions, and research-aircraft carriage.<sup class='canon-note' data-provenance='e'>[e]</sup> Direct canon does not settle whether this fleet entered service.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The authorial record raises limited B-52 service as a possibility rather than fixing it. A 1956 introduction, Boeing manufacture, B-52A/B fleet, 24–48-aircraft range, configuration, missions, conventional doctrine, aerospace importance, engines, specifications, units, bases, operations, losses, upgrades, and retirement are incorporated extrapolation or open.",
    sections:[
      {id:"source-status",title:"Canon status",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-e6j2q writer=g kind=revision created=2026-08-16T11:05:00-06:00 --><p>The authorial discussion asks whether a limited B-52 force might exist but does not answer the question.<sup class='canon-note' data-provenance='a'>[a]</sup> The detailed fleet and mission history below is incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"requirement",title:"The heavy range-and-payload school",html:"<p>In the working ladder, B-52 treated endurance, altitude, payload, and systems capacity as the answer to intercontinental distance. The strategic objection was that faster German interceptors and guided defenses could still reach a large subsonic aircraft, while conventional weapons required repeated penetrations.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"configuration",title:"Large swept-wing jet",html:"<p>The broad Boeing configuration used a high swept wing, eight turbojets carried in paired pods, bicycle landing gear with outriggers, and a large fuselage able to carry fuel, crew systems, sensors, and conventional stores. J57-class propulsion supplied the compatible technical foundation, but exact marks and installation changes are open.</p>"},
      {id:"fleet",title:"Limited A and B fleet",html:"<p>B-52A/B entered service in 1956. The fleet remained within an accepted range of approximately 24–48 aircraft—enough to sustain operational knowledge and special missions, but not enough to make Stratofortress the mass center of American strategic bombing.</p><p>Exact division between A and B aircraft, production blocks, unit assignments, alert posture, and conversion history remain unregistered.</p>"},
      {id:"missions",title:"Long-range and special missions",html:"<p>The limited force conducted long-range reconnaissance, maritime work, guided-weapon trials, strategic exercises, and systems testing. All bombing and weapon-development work was conventional. Large payload volume and endurance also made the aircraft useful where speed was less important than carrying unusual equipment.</p>"},
      {id:"mothership",title:"Mothership to the research generation",html:"<p>Carriage and release of rocketplanes and other experimental vehicles transformed the type's historical meaning. Modified B-52s gave crews repeatable airborne launch conditions, instrumentation, chase coordination, and a recovery-area starting point for the <a href='american-reusable-aerospace-research-generation.html'>reusable-aerospace research generation</a>.</p><p>The bomber that lost the main procurement argument consequently became the carrier aircraft from which America learned to reach space.</p>"},
      {id:"doctrine",title:"Why it did not become the future",html:"<p>The Aerospace school did not regard B-52 as a failure. It regarded the aircraft as too vulnerable and too expensive to buy in historical numbers when no atomic payload could compensate for penetration risk. B-58 and B-70 therefore received the prestige of the strategic-bomber line, while B-52 retained reconnaissance, maritime, test, and research-carriage value.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Exact fleet total within the accepted range, division between variants, engine marks, performance, crew stations, defensive armament, conventional loads, units, bases, deployments, research-carriage modifications, losses, upgrades, and retirement remain open.</p>"}
    ],
    related:[{href:"boeing-aircraft.html",kicker:"Manufacturer",label:"Boeing Aircraft"},{href:"b-47-stratojet.html",kicker:"Production predecessor",label:"B-47 Stratojet"},{href:"xb-55.html",kicker:"Rejected endurance alternative",label:"XB-55"},{href:"xb-56.html",kicker:"Large-engine research",label:"XB-56"},{href:"b-58a-hustler.html",kicker:"Speed-school successor",label:"B-58A Hustler"},{href:"x-15a.html",kicker:"Rocketplane carried aloft",label:"X-15A"},{href:"american-reusable-aerospace-research-generation.html",kicker:"Research legacy",label:"Reusable-Aerospace Research"}],
    sources:[americanEarlyBomberOfficialSources.b52,americanEarlyBomberOfficialSources.x15],categories:["Bombers","Research aircraft"],
    facts:[["Authorial status","Limited B-52 service discussed but not fixed"],["Working manufacturer","Boeing Aircraft"],["Working type","Heavy strategic bomber and research mothership"],["Working introduction","1956"],["Working variants","B-52A · B-52B"],["Working fleet size","Approximately 24–48 aircraft"],["Working propulsion","Eight turbojets"],["Weapons doctrine","Conventional only"]]
  })
});

const earlyBomberLinks = {
  "XB-43 Jetmaster":"xb-43-jetmaster.html",
  "B-45 Tornado":"b-45-tornado.html",
  "XB-46":"xb-46.html",
  "B-47 Stratojet":"b-47-stratojet.html",
  "XB-48":"xb-48.html",
  "XB-55":"xb-55.html",
  "XB-56":"xb-56.html",
  "B-52A/B":"b-52-stratofortress.html"
};

const linkFirstPlainText = (html,label,href) => html.includes(`<a href='${href}'>`) ? html : html.replace(label,`<a href='${href}'>${label}</a>`);
const appendRelatedOnce = (article,item) => {
  if (article && !article.related.some(link => link.href === item.href)) article.related.push(item);
};

const bomberRegister = window.deepArticles["american-strategic-bomber-development"];
if (bomberRegister) {
  const registerSection = bomberRegister.sections.find(section => section.id === "register");
  if (registerSection) for (const [label,href] of Object.entries(earlyBomberLinks)) registerSection.html = linkFirstPlainText(registerSection.html,label,href);
  for (const section of bomberRegister.sections) {
    if (["first","b47","alternatives","b52"].includes(section.id)) {
      for (const [label,href] of Object.entries(earlyBomberLinks)) section.html = linkFirstPlainText(section.html,label,href);
    }
  }
  for (const [label,href] of Object.entries(earlyBomberLinks)) appendRelatedOnce(bomberRegister,{href,kicker:"Program article",label});
}

const atmosphericFleet = window.deepArticles["american-aerospace-force-atmospheric-fleet"];
if (atmosphericFleet) {
  const bomberSection = atmosphericFleet.sections.find(section => section.id === "bombers");
  if (bomberSection) {
    bomberSection.html = linkFirstPlainText(bomberSection.html,"B-47","b-47-stratojet.html");
    bomberSection.html = linkFirstPlainText(bomberSection.html,"B-52A/B","b-52-stratofortress.html");
  }
  appendRelatedOnce(atmosphericFleet,{href:"b-52-stratofortress.html",kicker:"Limited heavy-bomber fleet",label:"B-52 Stratofortress"});
}

const appendCompanyProgram = (slug,postwarLinks,rows,related) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  const postwar = article.sections.find(section => section.id === "postwar");
  if (postwar) for (const [label,href] of postwarLinks) postwar.html = linkFirstPlainText(postwar.html,label,href);
  const aircraft = article.sections.find(section => section.id === "aircraft");
  if (aircraft) {
    for (const [internal,label,href] of rows) {
      if (!aircraft.html.includes(`href='${href}'`)) aircraft.html = aircraft.html.replace("</tbody>",`<tr><td>${internal}</td><td><a href='${href}'>${label}</a><sup class='canon-note' data-provenance='e'>[e]</sup></td></tr></tbody>`);
    }
  }
  for (const item of related) appendRelatedOnce(article,item);
};

appendCompanyProgram("douglas-aircraft",[["XB-43","xb-43-jetmaster.html"]],[["Model 459 lineage","XB-43 Jetmaster","xb-43-jetmaster.html"]],[{href:"xb-43-jetmaster.html",kicker:"First all-jet bomber experiment",label:"XB-43 Jetmaster"}]);
appendCompanyProgram("north-american-aviation",[["B-45","b-45-tornado.html"]],[["NA-130 family","B-45 Tornado","b-45-tornado.html"]],[{href:"b-45-tornado.html",kicker:"First operational jet-bomber bridge",label:"B-45 Tornado"}]);
appendCompanyProgram("convair",[["XB-46","xb-46.html"]],[["Model 109 lineage","XB-46","xb-46.html"]],[{href:"xb-46.html",kicker:"First-generation jet-bomber competitor",label:"XB-46"}]);
appendCompanyProgram("martin-aircraft",[["XB-48","xb-48.html"]],[["Model 223 lineage","XB-48","xb-48.html"]],[{href:"xb-48.html",kicker:"Six-engine jet-bomber competitor",label:"XB-48"}]);
appendCompanyProgram("boeing-aircraft",[["B-47","b-47-stratojet.html"],["B-52","b-52-stratofortress.html"]],[["Model 450 lineage","B-47 Stratojet","b-47-stratojet.html"],["Model 474 lineage","XB-55","xb-55.html"],["YB-47C lineage","XB-56","xb-56.html"],["Model 464 lineage","B-52 Stratofortress","b-52-stratofortress.html"]],[{href:"b-47-stratojet.html",kicker:"Postwar production standard",label:"B-47 Stratojet"},{href:"xb-55.html",kicker:"Turboprop alternative",label:"XB-55"},{href:"xb-56.html",kicker:"Large-engine test program",label:"XB-56"},{href:"b-52-stratofortress.html",kicker:"Limited heavy fleet",label:"B-52 Stratofortress"}]);
