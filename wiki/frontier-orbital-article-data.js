window.deepArticles = window.deepArticles || {};

const frontierArchiveSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — commercial orbital transport"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Frontier Orbital, 1985–2005"},
  {href:"../characterDossier%20-%20AltWWII.md",label:"Character Dossier — Konrad Elias Voss"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P1-26"},
  {href:"../transcript.md",label:"Master Transcript — Frontier Orbital Lines and private orbital transport"}
];

const frontierRelated = [
  {href:"frontier-orbital-lines.html",kicker:"Commercial carrier",label:"Frontier Orbital Lines"},
  {href:"commercial-orbital-transportation-act.html",kicker:"Enabling statute",label:"Commercial Orbital Transportation Act"},
  {href:"orbital-port-columbia.html",kicker:"Principal destination",label:"Orbital Port Columbia"},
  {href:"space-programs.html",kicker:"Technical chronology",label:"The Space Race"}
];

const frontierArticle = config => ({
  category:"Commercial spaceflight",
  eyebrow:"United States · commercial orbital transport",
  infoboxKicker:"American commercial spaceflight",
  ...config,
  sources:[...frontierArchiveSources,...(config.additionalSources || [])],
  categories:config.categories || ["Commercial spaceflight","Frontier Orbital Lines","American space program"]
});

Object.assign(window.deepArticles, {
  "konrad-voss": frontierArticle({
    title:"Konrad Elias Voss",
    category:"People",
    eyebrow:"American aerospace industrialist · active from the 1980s",
    infoboxTitle:"Konrad Elias Voss",
    infoboxKicker:"Founder of Frontier Orbital Lines",
    lead:"Konrad Elias Voss, commonly called Con Voss in the American aerospace industry, is the founder of Frontier Orbital Lines and the principal organizer of scheduled private orbital transport. The American son of a neglected Sänger–Bredt engineer, he built a carrier from government-developed Liberty aircraft, certification knowledge, maintenance crews, and anchor contracts. His influence rests less on a single invention than on converting national aerospace equipment into dependable commercial service.",
    canon:"Voss's German engineering inheritance, American formation, operational temperament, Frontier founding, initial Liberty fleet, specialized vehicle sequence, survival of the 1990 crash, 1993 national charter, Frontier Annex, and Project Switchback are established. His birth year and place, education, family life, early employers, ownership share, and later offices remain incompletely documented.",
    sections:[
      {id:"family",title:"Family and engineering inheritance",html:"<p>Voss was the son of a German engineer associated with the neglected Sänger–Bredt reusable-flight tradition. His household preserved both fascination with winged orbital craft and resentment toward institutions that celebrated famous concepts while forgetting the junior engineers whose lines lost official support.</p><p>The family entered the American technical world after the war. Voss consequently inherited a German intellectual lineage without becoming a German political or industrial representative.</p>"},
      {id:"formation",title:"Formation in American aerospace",html:"<p>Voss grew up around the American reusable-aerospace establishment and learned the less glamorous disciplines of ground systems, payload integration, turnaround, scheduling, certification, spares, and automated operations. Later accounts associate him with Pathfinder operations and Columbia servicing, although his exact employers and posts are not consistently recorded.</p><p>He concluded that a transport organization had to measure not only whether a mission succeeded, but whether the vehicle could depart again on schedule.</p>"},
      {id:"temperament",title:"Temperament and operating doctrine",html:"<p>Colleagues described Voss as operational, unsentimental, opportunistic without being reckless, difficult to manage, and unusually respectful of maintenance crews. He distrusted prestige programs that treated reliable freight as beneath visionary leadership.</p><p>His best-known maxim was that spaceflight became transportation when the vehicle left on Tuesday whether or not the president was watching.</p>"},
      {id:"founding",title:"Founding Frontier Orbital Lines",html:"<p>The <a href='commercial-orbital-transportation-act.html'>Commercial Orbital Transportation Act of 1985</a> allowed licensed companies to acquire complete government-derived orbital aircraft. Voss founded <a href='frontier-orbital-lines.html'>Frontier Orbital Lines</a> with two older OV-3A Liberty vehicles, one OV-3B automatic freighter, parts, simulators, tooling, and a secondary Canaveral apron.</p><p>He presented the firm as a carrier using a public road into orbit, not as a private replacement for the national space program.</p>"},
      {id:"regulation",title:"Private operation under public command",html:"<p>Voss accepted Aerospace Force control of ranges, orbital traffic, docking certification, rescue, military payload review, and emergency requisition. In his view, private ownership did not create private sovereignty in orbit.</p><p>That willingness to accept strict safety and reserve obligations distinguished Frontier from speculative companies that wanted public infrastructure without public command.</p>"},
      {id:"crash",title:"The Open Door Depression",html:"<p>Frontier's financial value collapsed in 1990, but its aircraft, crews, maintenance facilities, docking rights, and anchor contracts remained useful. Corporate satellite customers and a fiscally weakened government continued to require transport.</p><p>Voss used the depression to acquire distressed suppliers and servicing assets while routine Columbia traffic moved increasingly to the private carrier.</p>"},
      {id:"charter",title:"National Orbital Carrier",html:"<p>President Thomas Harwood granted Frontier the <a href='national-orbital-carrier.html'>National Orbital Carrier</a> charter in 1993. The designation attached public-service and reserve obligations to long contracts and privileged infrastructure access.</p><p>Voss regarded the charter as both legitimacy and danger: it protected the company from collapse and competitors while making its independence from presidential and sectoral politics increasingly conditional.</p>"},
      {id:"legacy",title:"Vehicles, annex, and legacy",html:"<p>Under Voss, Frontier developed <a href='frontier-courier.html'>Courier</a>, <a href='frontier-caravan.html'>Caravan</a>, and <a href='frontier-wayfarer.html'>Wayfarer</a>, attached the <a href='frontier-annex.html'>Frontier Annex</a> to Columbia, and began <a href='project-switchback.html'>Project Switchback</a>.</p><p>His central achievement was institutional rather than romantic: the boom financed the company, the crash made its services indispensable, and recovery allowed it to absorb much of the private orbital supply system.</p>"}
    ],
    related:[...frontierRelated,{href:"national-orbital-carrier.html",kicker:"1993 charter",label:"National Orbital Carrier"},{href:"project-switchback.html",kicker:"Reusable-rocket program",label:"Project Switchback"},{href:"open-door-depression.html",kicker:"Corporate survival crisis",label:"Open Door Depression"}],
    facts:[["Nationality","American"],["Known as","Con Voss"],["Occupation","Aerospace industrialist"],["Company","Frontier Orbital Lines"],["Company founded","1985"],["Initial fleet","Two OV-3A and one OV-3B"],["National charter","1993"],["Known for","Scheduled private orbital transport"]],
    categories:["Konrad Elias Voss","American aerospace industrialists","Frontier Orbital Lines","Commercial spaceflight"]
  }),

  "frontier-courier": frontierArticle({
    title:"Frontier Courier",
    eyebrow:"Commercial orbital aircraft · developed 1988–1989",
    infoboxTitle:"Courier",
    infoboxKicker:"Automatic commercial orbital aircraft",
    lead:"Courier is Frontier Orbital Lines' first proprietary specialized orbital vehicle, developed in 1988–1989 for urgent automatic satellite delivery, retrieval, and high-value return cargo. It applies the American runway-to-orbit tradition to a narrower commercial mission than the government Liberty family. Courier's significance lies in standard schedules and interfaces rather than a radical new propulsion architecture.",
    canon:"The Courier name, 1988–1989 development period, Frontier ownership, urgent automatic satellite and return-cargo role, relationship to the Liberty-derived operating system, and place before Caravan and Wayfarer are established. Gross mass, payload, dimensions, engines, fleet total, exact first flight, and individual vehicle names remain open under P1-26.",
    sections:[
      {id:"need",title:"Commercial requirement",html:"<p>Frontier's inherited Liberty aircraft could perform many missions, but their government design carried capabilities and servicing assumptions unnecessary for urgent commercial payloads. Satellite firms wanted a vehicle that could depart on a published window, handle standardized canisters, and return expensive hardware without carrying a full crew.</p>"},
      {id:"development",title:"Development in 1988–1989",html:"<p>Courier emerged during the World Market Boom as Frontier's first effort to control a vehicle program rather than merely operate transferred government aircraft. The design reused American spaceplane knowledge, Canaveral infrastructure, Columbia docking standards, and certified suppliers.</p><p>Its exact prototype and service dates remain disputed in surviving company chronologies.</p>"},
      {id:"automatic",title:"Automatic operation",html:"<p>The vehicle was intended principally for uncrewed service. Automated rendezvous, payload handling, return guidance, and runway recovery reduced crew demand while preserving the ability to retrieve valuable spacecraft and experiments.</p><p>Human oversight remained continuous through range, traffic, and Columbia control systems.</p>"},
      {id:"satellites",title:"Satellite delivery and retrieval",html:"<p>Courier served communications, weather, mapping, banking, television, and industrial customers whose spacecraft were valuable enough to justify scheduled recovery or repair. It could deliver standardized low-orbit payloads and return failed satellites, sensors, film, electronics, and experimental materials.</p>"},
      {id:"cargo",title:"High-value return cargo",html:"<p>Return capability distinguished Courier from inexpensive one-way launchers. The vehicle concentrated on cargo whose value came from recovery, rapid examination, proprietary control, or reuse rather than bulk mass alone.</p><p>This market remained narrow but paid considerably more per unit mass than routine station supplies.</p>"},
      {id:"interfaces",title:"Standardized interfaces",html:"<p>Frontier standardized cargo containers, electrical connections, documentation, insurance categories, and payload review. A customer purchased a declared service rather than negotiating an entirely new national mission.</p><p>Interface discipline, not a spectacular airframe, produced most of the commercial gain.</p>"},
      {id:"regulation",title:"Certification and public control",html:"<p>Courier operated under Aerospace Force range and orbital-traffic authority. Docking, rescue obligations, dangerous payloads, strategic equipment, and emergency requisition remained public responsibilities even after Frontier owned the aircraft.</p>"},
      {id:"legacy",title:"Place in the Frontier fleet",html:"<p>Courier proved that a proprietary commercial vehicle could coexist with Liberty operations. Its narrow urgent-cargo role was followed by the bulk-freight <a href='frontier-caravan.html'>Caravan</a> and crew-oriented <a href='frontier-wayfarer.html'>Wayfarer</a>.</p><p>The three types established Frontier's strategy of specialized mission classes rather than one universal spacecraft.</p>"}
    ],
    related:[...frontierRelated,{href:"konrad-voss.html",kicker:"Company founder",label:"Konrad Elias Voss"},{href:"frontier-caravan.html",kicker:"Bulk-freight successor",label:"Frontier Caravan"},{href:"liberty-spaceplane.html",kicker:"Government-derived predecessor",label:"Liberty Spaceplane"}],
    facts:[["Developer","Frontier Orbital Lines"],["Development","1988–1989"],["Type","Commercial orbital aircraft"],["Primary operation","Automatic / uncrewed"],["Principal mission","Urgent satellite delivery and retrieval"],["Return role","High-value cargo"],["Traffic authority","United States Aerospace Force"],["Exact specifications","Not publicly settled"]]
  }),

  "frontier-caravan": frontierArticle({
    title:"Frontier Caravan",
    eyebrow:"Commercial orbital freighter · developed 1991–1993",
    infoboxTitle:"Caravan",
    infoboxKicker:"Bulk station-freight vehicle",
    lead:"Caravan is Frontier Orbital Lines' proprietary bulk orbital freighter, developed between 1991 and 1993 as government and corporate traffic to Orbital Port Columbia expanded during the Open Door Depression. Unlike Courier's urgent high-value missions, Caravan was organized around standardized station freight, replaceable cargo units, and dependable capacity purchased through long contracts.",
    canon:"The Caravan name, 1991–1993 development, Frontier ownership, bulk-station-freight role, depression-era origin, relationship to Columbia, and later service alongside Wayfarer are established. Airframe geometry, launch arrangement, automation level, payload, fleet size, first operational mission, and individual vehicles remain open under P1-26.",
    sections:[
      {id:"background",title:"Depression-era background",html:"<p>The 1990 financial collapse reduced speculative capital while increasing government pressure to outsource routine orbital work. Columbia, satellites, and national infrastructure could not be abandoned, but public agencies sought fixed-price transport and fewer older aircraft on their own ledgers.</p>"},
      {id:"development",title:"Development from 1991 to 1993",html:"<p>Frontier developed Caravan while acquiring distressed servicing facilities, suppliers, and government-derived equipment. The project drew on Liberty experience and Courier interface standards but addressed a different market: regular bulk freight rather than urgent satellite work.</p>"},
      {id:"freight",title:"Bulk station freight",html:"<p>Caravan carried food, water-processing consumables, replacement equipment, structural parts, laboratory supplies, packaged propellant, and ordinary station stores. The vehicle's commercial value depended on dependable volume and schedules rather than unique mission performance.</p>"},
      {id:"containers",title:"Containers and handling",html:"<p>Standard cargo units reduced payload integration time and allowed suppliers to design directly for Columbia and Frontier handling systems. Documentation, tie-downs, power, temperature, hazardous-material categories, and return manifests became repeatable services.</p><p>Exact container dimensions varied with later standards and are not fixed in the public record.</p>"},
      {id:"contracts",title:"Anchor contracts",html:"<p>Federal service commitments, Columbia resupply, corporate laboratories, satellite firms, and affiliated suppliers provided long-duration demand. The carrier combined several customers on one mission rather than requiring every institution to buy a dedicated flight.</p>"},
      {id:"charter",title:"National-carrier context",html:"<p>Caravan matured as President Harwood granted Frontier the <a href='national-orbital-carrier.html'>National Orbital Carrier</a> charter in 1993. Minimum service and emergency reserve obligations gave the freighter a public role even though its assets and ordinary contracts remained private.</p>"},
      {id:"columbia",title:"Columbia and the Frontier Annex",html:"<p>The vehicle supported increasing commercial activity at Columbia and later the <a href='frontier-annex.html'>Frontier Annex</a>. Its freight role linked private modules to the federal port's life support, traffic, rescue, and emergency systems.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Caravan made routine station freight a distinct commercial vehicle class. Together with Courier and <a href='frontier-wayfarer.html'>Wayfarer</a>, it allowed Frontier to schedule aircraft around stable mission types rather than preserve every government requirement in every design.</p>"}
    ],
    related:[...frontierRelated,{href:"frontier-courier.html",kicker:"Urgent-cargo counterpart",label:"Frontier Courier"},{href:"frontier-wayfarer.html",kicker:"Crew-transport counterpart",label:"Frontier Wayfarer"},{href:"frontier-annex.html",kicker:"Commercial destination",label:"Frontier Annex"}],
    facts:[["Developer","Frontier Orbital Lines"],["Development","1991–1993"],["Type","Commercial orbital freighter"],["Principal mission","Bulk station freight"],["Primary destination","Orbital Port Columbia"],["Commercial model","Scheduled shared capacity"],["Charter context","National Orbital Carrier"],["Exact specifications","Not publicly settled"]]
  }),

  "frontier-wayfarer": frontierArticle({
    title:"Frontier Wayfarer",
    eyebrow:"Commercial crew transport · developed 1994–1996",
    infoboxTitle:"Wayfarer",
    infoboxKicker:"Commercial crew and specialist transport",
    lead:"Wayfarer is Frontier Orbital Lines' proprietary crew-transport vehicle, developed from 1994 to 1996 for station crews, corporate mission specialists, technicians, physicians, media personnel, and other professional travelers. It represents the point at which private orbital transport becomes a regular personnel service, though not an ordinary tourist market.",
    canon:"The Wayfarer name, 1994–1996 development, Frontier ownership, crew and corporate-specialist role, relationship to Columbia and the Frontier Annex, and position after Courier and Caravan are established. Crew capacity, payload, dimensions, flight deck, life support endurance, fleet total, first mission, and fare structure remain open under P1-26.",
    sections:[
      {id:"market",title:"A professional passenger market",html:"<p>The first durable private travelers were not tourists. Satellite technicians, laboratory specialists, corporate engineers, physicians, media crews, and representatives supervising proprietary experiments could justify the cost because their work in orbit was more valuable than the seat.</p>"},
      {id:"development",title:"Development from 1994 to 1996",html:"<p>Wayfarer followed the cargo-oriented Courier and Caravan after Frontier had accumulated nearly a decade of operating experience. The program matured alongside the Frontier Annex and the growing private presence at Columbia.</p>"},
      {id:"crew",title:"Crew and mission specialists",html:"<p>The vehicle separated professional flight crew from mission specialists whose responsibilities began after docking. Training covered pressure emergencies, acceleration, suits, escape, station procedures, medical screening, and the boundaries of commercial and federal authority.</p>"},
      {id:"safety",title:"Human-flight certification",html:"<p>Private crew transport required stricter life support, abort, rescue, medical, and recurrent-training rules than automatic freight. The Aerospace Force retained certification, traffic, rescue coordination, and emergency requisition.</p><p>Frontier could sell transport but could not define its own sovereign standard of acceptable human risk.</p>"},
      {id:"columbia",title:"Service to Columbia",html:"<p>Wayfarer linked Canaveral with Orbital Port Columbia's federal, research, construction, and commercial population. It also carried personnel for the <a href='frontier-annex.html'>Frontier Annex</a>, where short-term accommodation and corporate work reduced pressure on government modules.</p>"},
      {id:"schedule",title:"Scheduled service",html:"<p>Frontier marketed published traffic windows, standardized training packages, and repeat customer procedures. Flights could still be delayed by weather, range conflicts, vehicle inspection, station emergencies, or strategic missions.</p><p>Scheduled did not mean effortless; it meant the customer bought a recurring service rather than a unique expedition.</p>"},
      {id:"limits",title:"Limits of commercialization",html:"<p>Wayfarer did not make orbital travel affordable to ordinary households. Customers remained governments, corporations, universities, wealthy institutions, and specialists whose work justified the cost.</p><p>Tourism proposals received attention, but professional traffic defined the vehicle through the early 2000s.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Wayfarer completed Frontier's first specialized family: Courier for urgent automatic work, Caravan for bulk freight, and Wayfarer for people. The division made commercial orbital service more airline-like while preserving the technical reality of a tightly regulated aerospace fleet.</p>"}
    ],
    related:[...frontierRelated,{href:"frontier-courier.html",kicker:"Urgent-cargo vehicle",label:"Frontier Courier"},{href:"frontier-caravan.html",kicker:"Bulk-freight vehicle",label:"Frontier Caravan"},{href:"frontier-annex.html",kicker:"Commercial destination",label:"Frontier Annex"}],
    facts:[["Developer","Frontier Orbital Lines"],["Development","1994–1996"],["Type","Commercial crew transport"],["Passengers","Professional mission specialists"],["Principal destination","Orbital Port Columbia"],["Commercial destination","Frontier Annex"],["Tourist role","Secondary and limited"],["Exact specifications","Not publicly settled"]]
  }),

  "national-orbital-carrier": frontierArticle({
    title:"National Orbital Carrier",
    category:"United States law and institutions",
    eyebrow:"Federal commercial-space charter · established 1993",
    infoboxTitle:"National Orbital Carrier",
    infoboxKicker:"American public-service carrier charter",
    lead:"National Orbital Carrier is the federal charter status granted to Frontier Orbital Lines by President Thomas Harwood in 1993. It joins private ownership to minimum national service, reserve, safety, training, and domestic-control obligations. In exchange, the carrier receives durable contracts and privileged access to public orbital infrastructure. The charter is an early model of the Productive Commonwealth's principle that strategic corporate privilege must carry explicit public duties.",
    canon:"The 1993 date, Harwood administration, Frontier designation, public-service character, emergency relationship, and political role in the Productive Commonwealth are established. The precise statutory instrument, charter text, minimum services, ownership formula, liability treatment, sector representation, exclusivity, and review procedure remain open under P1-26; commonly reported terms are treated as implementing practice rather than a settled complete text.",
    sections:[
      {id:"background",title:"Background",html:"<p>Frontier survived the Open Door Depression while a fiscally weakened government outsourced more routine Columbia traffic. By 1993 the company was privately owned, strategically indispensable, connected to a large supplier estate, and too important to treat as an ordinary contractor.</p>"},
      {id:"charter",title:"Harwood's 1993 charter",html:"<p>President <a href='thomas-harwood.html'>Thomas Harwood</a> designated Frontier a National Orbital Carrier rather than nationalizing it. The arrangement reflected his broader policy of preserving private management while attaching national obligations to strategic privilege.</p><p>The precise legal form—statute, executive charter, procurement compact, or combined instrument—remains debated.</p>"},
      {id:"service",title:"Service obligations",html:"<p>Public accounts consistently associate the charter with minimum Columbia service, emergency reserve capacity, continued domestic control, apprentice and crew training, rescue and debris support, and government access in a national emergency.</p><p>Exact quantities and enforcement clauses are not available in a single settled public text.</p>"},
      {id:"privileges",title:"Privileges",html:"<p>Frontier received long contracts, priority or protected launch access, continued use of federal ranges and traffic systems, and excess-liability protection within regulated limits. Its representatives also gained a recognized voice in commercial-orbit and productive-sector councils.</p>"},
      {id:"reserve",title:"Civil Orbital Reserve",html:"<p>Frontier aircraft and crews remained subject to requisition for war, evacuation, station emergency, loss of government capacity, or another declared national need. Operational command passed through public range and Aerospace Force authorities.</p><p>The reserve principle prevented corporate ownership from becoming a claim to withhold strategic transport.</p>"},
      {id:"competition",title:"Competition and entry barriers",html:"<p>The charter did not formally prohibit rivals, but its safety, capitalization, domestic-sourcing, reserve, and insurance requirements were costly. Smaller operators often became Frontier affiliates or suppliers rather than independent carriers.</p><p>Critics argued that public obligation had become the legal defense of a private near-monopoly.</p>"},
      {id:"politics",title:"Productive Commonwealth politics",html:"<p>Harwood presented the charter as proof that the state could discipline strategic enterprise without direct ownership. Frontier management valued the contracts and legitimacy while resisting compulsory political organization and the possibility that every operational choice might become a presidential duty.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The National Orbital Carrier model became a prominent example of American chartered strategic industry after the 1990 crash. It preserved scheduled commercial access to orbit, encouraged the Frontier Annex, and made the boundary between national infrastructure and corporate estate permanently difficult to draw.</p>"}
    ],
    related:[...frontierRelated,{href:"konrad-voss.html",kicker:"Carrier proprietor",label:"Konrad Elias Voss"},{href:"thomas-harwood.html",kicker:"Chartering president",label:"Thomas Harwood"},{href:"frontier-annex.html",kicker:"Charter-era infrastructure",label:"Frontier Annex"},{href:"corporate-patronage-united-states.html",kicker:"Later political economy",label:"Corporate Patronage in the United States"}],
    facts:[["Established","1993"],["Chartering president","Thomas Harwood"],["First holder","Frontier Orbital Lines"],["Ownership form","Private under federal charter"],["Core obligation","Minimum national orbital service"],["Emergency status","Civil Orbital Reserve"],["Public infrastructure","Federal range and traffic system"],["Complete charter text","Not publicly settled"]],
    categories:["National Orbital Carrier","United States commercial spaceflight","Productive Commonwealth","Chartered companies","Frontier Orbital Lines"]
  }),

  "frontier-annex": frontierArticle({
    title:"Frontier Annex",
    category:"Orbital infrastructure",
    eyebrow:"Commercial station complex · Orbital Port Columbia · 1994–1996",
    infoboxTitle:"Frontier Annex",
    infoboxKicker:"Private complex at Orbital Port Columbia",
    lead:"The Frontier Annex is the privately financed commercial module complex attached to the civil side of Orbital Port Columbia between 1994 and 1996. It provides corporate work areas, payload services, communications, short-term accommodation, manufacturing and storage while remaining physically and legally inside the federal port's traffic, life-support, rescue, and emergency-command system.",
    canon:"The Frontier ownership, 1994–1996 attachment period, location at Columbia, commercial freight and crew function, private-property character, and continuing federal emergency authority are established. Module count and names, dimensions, contractors, financing, jurisdictional code, population, laboratories, power share, and docking configuration remain open under P1-26.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Frontier's growing cargo and professional-passenger traffic required more than leased desks and storage inside government modules. The 1993 National Orbital Carrier charter gave the company the contractual stability to finance a dedicated commercial complex.</p>"},
      {id:"construction",title:"Attachment from 1994 to 1996",html:"<p>The Annex was assembled and connected to Columbia's civil side during 1994–1996. Construction used federal traffic, docking, safety, and station-integration standards while private capital and corporate tenants financed the commercial facilities.</p><p>The exact sequence and module registry remain unsettled.</p>"},
      {id:"functions",title:"Commercial functions",html:"<p>Contemporary descriptions associate the complex with corporate laboratories, payload preparation, private communications, short-term accommodation, a small manufacturing bay, satellite storage, freight staging, and maintenance support.</p><p>Individual facilities changed as tenants and station standards evolved.</p>"},
      {id:"traffic",title:"Courier, Caravan, and Wayfarer traffic",html:"<p><a href='frontier-courier.html'>Courier</a> supported urgent satellite and return work, <a href='frontier-caravan.html'>Caravan</a> supplied bulk freight, and <a href='frontier-wayfarer.html'>Wayfarer</a> carried crews and corporate specialists. The Annex turned those vehicles into a connected service system rather than unrelated flights.</p>"},
      {id:"property",title:"Private property in a federal port",html:"<p>Frontier and its tenants owned or leased equipment and interior commercial space. They did not own an independent orbit, approach corridor, life-support commons, or right to disregard Columbia command.</p><p>The Annex was private property in the same practical sense that a commercial terminal could be private inside a publicly controlled port.</p>"},
      {id:"authority",title:"Emergency authority",html:"<p>Fire, collision threat, pressure loss, contamination, rescue, life-support failure, or station evacuation placed the Annex under the Columbia commander's technical emergency authority. Federal safety personnel could isolate modules and redirect vehicles regardless of commercial loss.</p>"},
      {id:"jurisdiction",title:"Jurisdiction and corporate life",html:"<p>Ordinary contracts, employment, tenant rules, intellectual property, and commercial disputes followed American federal and applicable corporate law. Station-wide safety, traffic, criminal emergency, and strategic security remained federal.</p><p>The detailed boundary produced recurring arbitration and remains only partly documented.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Annex made private orbital activity structurally important without producing a sovereign corporate station. It established the model of a commercial estate embedded in national infrastructure and confirmed Frontier's position as more than a transport contractor.</p>"}
    ],
    related:[...frontierRelated,{href:"national-orbital-carrier.html",kicker:"Legal foundation",label:"National Orbital Carrier"},{href:"frontier-caravan.html",kicker:"Freight service",label:"Frontier Caravan"},{href:"frontier-wayfarer.html",kicker:"Personnel service",label:"Frontier Wayfarer"}],
    facts:[["Attached","1994–1996"],["Owner and operator","Frontier Orbital Lines"],["Host station","Orbital Port Columbia"],["Property form","Private complex in a federal port"],["Principal uses","Laboratories, payloads, accommodation, storage"],["Primary freight vehicle","Caravan"],["Primary personnel vehicle","Wayfarer"],["Emergency authority","Columbia station command"]],
    categories:["Frontier Annex","Orbital Port Columbia","Commercial space stations","Frontier Orbital Lines","American space infrastructure"]
  }),

  "project-switchback": frontierArticle({
    title:"Project Switchback",
    category:"Launch vehicles",
    eyebrow:"Reusable launch-vehicle research · begun 1993",
    infoboxTitle:"Project Switchback",
    infoboxKicker:"Frontier reusable-rocket program",
    lead:"Project Switchback is Frontier Orbital Lines' reusable vertical-launch research program, begun in 1993 to reduce the carrier's dependence on government-derived spaceplane booster infrastructure and to serve one-way bulk, propellant, heavy-satellite, and high-orbit missions. The program pursues powered first-stage recovery and eventual reflight while retaining expendable upper stages and the company's spaceplane fleet.",
    canon:"The 1993 beginning, Frontier sponsorship, 1995 hopper, 1996 translation tests, 1997 larger descent vehicle, 1998 staging trials, 1999 recovery attempts, intact orbital-class landing around 2000–02, later reflight and scheduled bulk service, economic complement to spaceplanes, continued public range support, and absence of an early fully reusable super-heavy vehicle are established. Vehicle names, engine cycle, dimensions, payloads, contractors, sites, failures, costs, and exact dates within the established bands remain open.",
    sections:[
      {id:"rationale",title:"Why Frontier pursued rockets",html:"<p>Spaceplanes were well suited to people, return cargo, repair, and frequent Columbia service. They were less efficient for one-way bulk cargo, propellant, heavy satellites, high-orbit payloads, and missions that did not require wings or runway return.</p><p>They also kept Frontier dependent on government-derived ascent infrastructure.</p>"},
      {id:"beginning",title:"Beginning in 1993",html:"<p>Frontier announced Switchback as it received National Orbital Carrier status and expanded through distressed suppliers. The program treated vertical recovery as a commercial operating problem rather than a newly discovered physical concept.</p>"},
      {id:"inheritance",title:"Technical inheritance",html:"<p>American, German, Japanese, and British engineers had studied recoverable stages long before Switchback. Frontier's opportunity came from mature digital control, sensors, throttling, simulation, range experience, and a larger commercial market willing to pay for repeated tests.</p>"},
      {id:"demonstrators",title:"Demonstrator sequence",html:"<p>A hopper flew in 1995, followed by altitude and translation work in 1996, a larger engine-first descent vehicle in 1997, and staging and suborbital-return trials in 1998. Frontier attempted orbital-class recoveries in 1999 and achieved an intact landing around 2000–02.</p><p>No complete formal vehicle registry has been released, and proposed names should not be treated as settled production designations.</p>"},
      {id:"architecture",title:"Partially reusable architecture",html:"<p>The early operational objective was a recoverable first stage with an expendable upper stage, conservative margins, substantial inspection, and continued government range support. It was not a fully reusable super-heavy transport.</p>"},
      {id:"spaceplanes",title:"Complement to the spaceplane fleet",html:"<p>Switchback did not replace Courier, Caravan, Wayfarer, Liberty aircraft, or Columbia service. Rockets addressed cargo that did not need return or human carriage; spaceplanes retained the missions in which runway recovery and access to payloads mattered.</p>"},
      {id:"institutions",title:"Institutional and political effects",html:"<p>The project strengthened Frontier's affiliated supplier estate and increased demands for liability protection, test ranges, engine certification, and government traffic priority. Supporters described it as independent commercial access; critics noted that every test still used public safety and tracking systems.</p>"},
      {id:"legacy",title:"Position by the early 2000s",html:"<p>After the first intact landing, booster reflight led to limited scheduled reusable bulk-lift service between 2002 and 2005. Spaceplanes retained crews, servicing, delicate payloads, and return cargo; Switchback carried propellant and one-way mass.</p><p>The result was a divided transport system rather than effortless airline service or the disappearance of either vehicle family.</p>"}
    ],
    related:[...frontierRelated,{href:"konrad-voss.html",kicker:"Program sponsor",label:"Konrad Elias Voss"},{href:"american-corporate-mars-program.html",kicker:"Principal growth market",label:"American Corporate Mars Program"},{href:"national-orbital-carrier.html",kicker:"Institutional setting",label:"National Orbital Carrier"},{href:"frontier-courier.html",kicker:"Spaceplane complement",label:"Frontier Courier"},{href:"american-orbital-vehicle-program.html",kicker:"American reusable-flight tradition",label:"American Orbital Vehicle Program"}],
    facts:[["Begun","1993"],["First hopper","1995"],["Orbital recovery attempts","1999"],["First intact orbital-class landing","c. 2000–02"],["Limited scheduled bulk service","2002–05"],["Sponsor","Frontier Orbital Lines"],["Primary objective","Recoverable first stage"],["Relationship to spaceplanes","Complementary"]],
    categories:["Project Switchback","Reusable launch systems","Frontier Orbital Lines","American launch vehicles","Commercial spaceflight"]
  })
});

function addFrontierRelated(key, item) {
  const article = window.deepArticles[key];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
}

for (const item of [
  {href:"frontier-courier.html",kicker:"Urgent automatic vehicle",label:"Frontier Courier"},
  {href:"frontier-caravan.html",kicker:"Bulk-freight vehicle",label:"Frontier Caravan"},
  {href:"frontier-wayfarer.html",kicker:"Crew-transport vehicle",label:"Frontier Wayfarer"},
  {href:"national-orbital-carrier.html",kicker:"1993 federal charter",label:"National Orbital Carrier"},
  {href:"frontier-annex.html",kicker:"Commercial Columbia complex",label:"Frontier Annex"},
  {href:"project-switchback.html",kicker:"Reusable-rocket program",label:"Project Switchback"}
]) addFrontierRelated("frontier-orbital-lines",item);

addFrontierRelated("commercial-orbital-transportation-act",{href:"national-orbital-carrier.html",kicker:"1993 successor charter",label:"National Orbital Carrier"});
addFrontierRelated("orbital-port-columbia",{href:"frontier-annex.html",kicker:"Commercial complex",label:"Frontier Annex"});
addFrontierRelated("thomas-harwood",{href:"national-orbital-carrier.html",kicker:"Strategic-company charter",label:"National Orbital Carrier"});
addFrontierRelated("american-orbital-vehicle-program",{href:"project-switchback.html",kicker:"Vertical reusable complement",label:"Project Switchback"});
