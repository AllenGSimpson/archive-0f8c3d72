window.deepArticles = window.deepArticles || {};

const promenadeLocalSources = [
  {href:"../transcript.md",label:"Master Transcript — Turn 751, Raumhafen Promenade and Promenadenring"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature German space infrastructure"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Promenadenring construction, 1994–2000"}
];

const promenadeOfficialSources = {
  construction:{href:"https://www.nasa.gov/general/tensegrity-approaches-to-in-space-construction-of-a-1g-growable-habitat/",label:"NASA — in-space construction of a growable rotating habitat"},
  rotation:{href:"https://ntrs.nasa.gov/citations/20040112732",label:"NASA Technical Reports Server — artificial gravity in long-duration flight"},
  lunar:{href:"https://ntrs.nasa.gov/search.jsp?R=19910008821",label:"NASA Technical Reports Server — lunar resources in advanced facilities"},
  habitation:{href:"https://ntrs.nasa.gov/citations/19720052770",label:"NASA Technical Reports Server — habitability in a rotating space station"}
};

const promenadenringLandscape = {
  src:"assets/diagrams/promenadenring-system.svg",
  alt:"Promenadenring rotating inhabited ring connected by spokes and a transfer bearing to the nonrotating Orbitaler Raumhafen, with lunar and terrestrial supply chains",
  caption:"Bulk lunar mass and terrestrial precision components enter an orbital fabrication chain; the finished ring rotates around the nonrotating Raumhafen hub"
};

const promenadeCommonRelated = [
  {href:"promenadenring.html",kicker:"Parent structure",label:"Promenadenring"},
  {href:"orbitaler-raumhafen.html",kicker:"Host complex",label:"Orbitaler Raumhafen"},
  {href:"raumwerft.html",kicker:"Orbital fabrication base",label:"Raumwerft"},
  {href:"mondhafen-sud.html",kicker:"Lunar supply origin",label:"Mondhafen Süd"}
];

const promenadeArticle = c => ({
  title:c.title,
  category:c.category,
  eyebrow:c.eyebrow,
  infoboxKicker:c.infoboxKicker,
  infoboxTitle:c.infoboxTitle || c.title,
  landscape:promenadenringLandscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...promenadeCommonRelated,...c.related],
  sources:[...promenadeLocalSources,promenadeOfficialSources[c.official]],
  facts:c.facts,
  categories:c.categories
});

Object.assign(window.deepArticles,{
  "promenadenring-construction-program":promenadeArticle({
    title:"Promenadenring construction program",category:"Space construction",eyebrow:"Orbitaler Raumhafen · 1994–2000 · construction in occupation",infoboxKicker:"German orbital construction program",official:"construction",
    lead:"The Promenadenring construction program was the six-year enlargement that transformed the Orbitaler Raumhafen from an industrial harbor with quarters into a continuously expanding inhabited district. Authorized in 1994 after the success of Marsplan 92, the work combined a larger fabrication yard, lunar bulk shipments, terrestrial precision equipment, progressive arc assembly, and occupation of completed sectors before the ring closed around the millennium.",
    canon:"Authorization and yard enlargement in 1994, first lunar structural shipments in 1995, first spokes, transfer bearing, and inhabited arc in 1996–97, majority occupation in 1998, approach to closure in 1999, and closure or formal opening around 2000 are established. The ring was fabricated in orbit rather than delivered as complete launch-vehicle modules. Exact statute, budget, architect, contractors, workforce, accidents, diameter, spin rate, opening day, and final population remain open.",
    sections:[
      {id:"authorization",title:"Authorization after Mars",html:"<p>The 1993 Mars arrival proved that the Raumhafen could assemble a vessel larger than any single launch. Wolfgang's government authorized a second use of that capacity in 1994: permanent accommodation, civic services, and settlement research on a scale beyond the original rotating quarters.</p>"},
      {id:"yard",title:"Expansion of the fabrication yard",html:"<p>Rolling, forming, casting, vacuum welding, machining, panel fabrication, and pressure testing were expanded beside the <a href='raumwerft.html'>Raumwerft</a>. Builders launched specialized machines and high-value components, then produced curved structural work at the station.</p>"},
      {id:"sequence",title:"Spokes, bearing, and arcs",html:"<p>The nonrotating hub received spokes and a transfer-bearing assembly before the first inhabited arc entered use. Arc construction allowed pressure shells, utilities, and interiors to be commissioned in stages while the unfinished ring remained a controlled worksite.</p>"},
      {id:"occupation",title:"Construction in occupation",html:"<p>Completed sectors received residents and services before physical closure. Work crews therefore managed industrial exclusion zones, balancing constraints, pressure boundaries, temporary routes, and the daily needs of an inhabited station at the same time.</p>"},
      {id:"chronology",title:"Construction chronology",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>1994</th><td>Authorization and yard enlargement</td></tr><tr><th>1995</th><td>First lunar structural shipments</td></tr><tr><th>1996–97</th><td>Spokes, bearing, and first inhabited arc</td></tr><tr><th>1998</th><td>More than half the ring occupied</td></tr><tr><th>1999–2000</th><td>Approach to closure and formal opening</td></tr></tbody></table></div>"},
      {id:"commissioning",title:"Progressive commissioning",html:"<p>Each finished arc required pressure, fire, atmosphere, electrical, water, communication, balance, evacuation, and bearing-interface tests. Progressive commissioning turned completion into a sequence of operating certificates rather than one launch event.</p>"},
      {id:"labor",title:"Workforce and command",html:"<p>Raumhafen construction personnel, Raumwerft specialists, station services, lunar freight crews, inspectors, and terrestrial suppliers worked under German integrated command. Exact firms, labor totals, shifts, fatalities, and foreign specialist participation remain unregistered.</p>"},
      {id:"legacy",title:"The first space-built district",html:"<p>The program demonstrated that an orbital community could launch machinery and precision parts while importing bulk extraterrestrial mass. The station itself became the construction site, commissioning authority, and first occupant of the architecture it produced.</p>"}
    ],
    related:[{href:"promenadenring-rotating-structure.html",kicker:"Principal structure",label:"Promenadenring Rotating Structure"},{href:"promenadenring-millennium-opening.html",kicker:"Program completion",label:"Millennium Opening"}],
    facts:[["Authorized","1994"],["First lunar shipments","1995"],["First inhabited arc","1996–97"],["Majority occupied","1998"],["Closure or opening","Around 2000"],["Construction method","Fabricated progressively in orbit"],["Host authority","Orbitaler Raumhafen"],["Exact budget and contractors","Open"]],
    categories:["German space program","Orbitaler Raumhafen","Space construction","Promenadenring","1990s"]
  }),

  "promenadenring-rotating-structure":promenadeArticle({
    title:"Promenadenring rotating structure",category:"Space-station engineering",eyebrow:"Rotating habitation · nonrotating hub · partial gravity",infoboxKicker:"Raumhafen rotating-habitation structure",official:"rotation",
    lead:"The Promenadenring rotating structure is the ring, spoke, transfer-bearing, pressure, balance, and utility system that carries the inhabited district around the nonrotating Orbitaler Raumhafen. Rotation produces partial gravity for homes, public rooms, clinics, workshops, and long-duration Mars preparation while the central hub retains ordinary docking, shipyard, reactor, and zero-gravity functions.",
    canon:"A rotating inhabited ring, several spokes, a large transfer bearing, attachment to the nonrotating Raumhafen hub, progressive arc construction, independently sealable pressure sectors, and partial-gravity habitation are established. A diameter near 220 metres, section thickness of eighteen to twenty metres, rotation near 1.8 revolutions per minute, and roughly 0.4 g at the outer residential level are planning estimates rather than final registered specifications. Exact geometry, spoke count, bearings, gravity profile, balance limits, and utility interfaces remain open.",
    sections:[
      {id:"architecture",title:"Rotating district and fixed harbor",html:"<p>The ring rotates while the core station remains fixed relative to docks, antennas, telescopes, yards, tanks, and visiting vehicles. This separation prevents every Raumhafen function from inheriting the operational complications of artificial gravity.</p>"},
      {id:"spokes",title:"Spokes and load paths",html:"<p>Several spokes carry structural loads and connect the inhabited arcs to the bearing region. They also provide controlled routes for people, power, data, fluids, ventilation services, inspection, and emergency access. Their exact number and arrangement remain open.</p>"},
      {id:"bearing",title:"Transfer bearing",html:"<p>A large interface transfers people and services between fixed and rotating structures. Passage requires matched doors, monitored seals, speed control, isolation capability, and maintenance access while the surrounding station continues operating.</p>"},
      {id:"gravity",title:"Partial gravity",html:"<p>Rotation produces an outward acceleration at the residential deck. Contemporary planning descriptions commonly cite a Mars-like level near 0.4 g. The final public registry does not settle radius, angular speed, floor height, or variation between decks.</p>"},
      {id:"balance",title:"Balance and loading",html:"<p>Cargo, water, machinery, crowds, construction work, and empty rooms alter the rotating mass. Operators distribute loads, monitor vibration, control spin, and coordinate large movements so that one sector cannot impose unacceptable imbalance.</p>"},
      {id:"pressure",title:"Sealable sectors",html:"<p>Pressure bulkheads divide the continuous public route into independently sealable sectors. Fire, atmosphere loss, contamination, or structural damage can isolate one arc while adjacent districts retain life support and evacuation routes.</p>"},
      {id:"planning",title:"Published planning range",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Diameter</th><td>About 220 m · planning estimate</td></tr><tr><th>Section thickness</th><td>18–20 m · planning estimate</td></tr><tr><th>Rotation</th><td>About 1.8 rpm · planning estimate</td></tr><tr><th>Outer-level gravity</th><td>About 0.4 g · planning estimate</td></tr><tr><th>Final engineering register</th><td>Open</td></tr></tbody></table></div>"},
      {id:"research",title:"Habitation and Mars preparation",html:"<p>The ring supports long-duration physiology, family health, work design, childhood development, and Mars-gravity preparation. It is simultaneously an operating district and a research environment whose residents cannot be reduced to experimental subjects.</p>"}
    ],
    related:[{href:"promenadenring-construction-program.html",kicker:"Assembly history",label:"Construction Program"},{href:"promenadenring-residential-districts.html",kicker:"Principal occupant",label:"Residential Districts"}],
    facts:[["Form","Rotating inhabited ring"],["Connection","Spokes and transfer bearing"],["Host core","Nonrotating Orbitaler Raumhafen"],["Pressure arrangement","Independently sealable sectors"],["Gravity purpose","Partial-gravity habitation"],["Planning diameter","About 220 m · open"],["Planning rotation","About 1.8 rpm · open"],["Planning outer gravity","About 0.4 g · open"]],
    categories:["German space program","Space-station engineering","Artificial gravity","Promenadenring","Orbitaler Raumhafen"]
  }),

  "promenadenring-lunar-material-supply":promenadeArticle({
    title:"Promenadenring lunar-material supply chain",category:"Space logistics",eyebrow:"Mondhafen Süd · lunar freight · Raumhafen fabrication",infoboxKicker:"Earth–Moon orbital industrial chain",official:"lunar",
    lead:"The Promenadenring lunar-material supply chain was the linked system that moved processed structural mass from Mondhafen Süd to the Orbitaler Raumhafen while Earth supplied precision components and machinery. It made the ring partly lunar-built without claiming that the German lunar economy could yet produce every seal, bearing, circuit, alloy, or life-support machine required by a permanent orbital district.",
    canon:"Increasing lunar contributions from 1995, aluminum and iron feedstock, glass and silica, ceramic shielding, oxygen, water, Mondhafen Süd processing, uncrewed lunar freighters, slow electric tugs, terrestrial supply of precision components, and final fabrication at the Raumhafen are established. The ring was never wholly lunar-made. Exact mines, processing plants, masses, freighters, tug classes, schedules, losses, costs, and lunar percentage remain open.",
    sections:[
      {id:"principle",title:"Bulk mass from the Moon",html:"<p>Lunar gravity reduced the energy required to send simple heavy material into cislunar space. The supply chain therefore favored mass that could be processed to useful form with dependable equipment and accepted quality tolerances.</p>"},
      {id:"products",title:"Lunar products",html:"<p><a href='mondhafen-sud.html'>Mondhafen Süd</a> and associated works supplied increasing quantities of aluminum and iron feedstock, glass and silica products, ceramic shielding, oxygen, water, billets, plate, and simple structural mass.</p>"},
      {id:"earth",title:"Terrestrial precision supply",html:"<p>Earth continued to supply polymers, seals, precision bearings, wiring, electronics, specialist alloys, life-support equipment, and most production machinery. The system separated expensive precision from inexpensive mass rather than attempting premature lunar autarky.</p>"},
      {id:"freight",title:"Freighters and electric tugs",html:"<p>Uncrewed lunar freighters lifted processed loads from the Moon. Slow electric tugs then moved bulk cargo toward the Raumhafen on schedules measured around energy efficiency and yard demand rather than passenger convenience.</p>"},
      {id:"yard",title:"Raumhafen fabrication",html:"<p>At the station, rolling, forming, casting, vacuum welding, machining, panel fabrication, pressure testing, and final assembly converted delivered mass into continuous curved sections. Specialized terrestrial parts entered during fit-out.</p>"},
      {id:"quality",title:"Inspection and traceability",html:"<p>Structural feedstock required composition records, heat histories, weld inspection, pressure certification, and controlled storage. A defective lunar batch could delay an arc, unbalance the work sequence, or consume scarce terrestrial replacement capacity.</p>"},
      {id:"limits",title:"Limits of lunar industry",html:"<p>Lunar inputs grew throughout construction, yet no public record establishes a final percentage. Machinery wear, chemical purity, energy supply, processing yield, tug availability, and the continuing need for Earth-made precision set practical limits.</p>"},
      {id:"legacy",title:"An extraterrestrial industrial route",html:"<p>The supply chain made Mondhafen Süd an exporter to orbital construction rather than only a supported outpost. Later station, shipyard, shielding, and settlement projects inherited the distinction between lunar mass and terrestrial precision.</p>"}
    ],
    related:[{href:"promenadenring-construction-program.html",kicker:"Industrial customer",label:"Construction Program"},{href:"lunar-mining-materials-industry.html",kicker:"Wider lunar economy",label:"Lunar Mining and Materials Industry"}],
    facts:[["First shipments","1995"],["Lunar processor","Mondhafen Süd"],["Lunar bulk products","Metals, glass, ceramics, oxygen, water"],["Earth products","Precision components and machinery"],["Lunar lift","Uncrewed freighters"],["Orbital transfer","Slow electric tugs"],["Final fabrication","Orbitaler Raumhafen"],["Lunar share by mass","Open"]],
    categories:["German space program","Space logistics","Lunar industry","Promenadenring","Mondhafen Süd"]
  }),

  "promenadenring-promenade-concourse":promenadeArticle({
    title:"Promenadenring promenade concourse",category:"Orbital architecture",eyebrow:"Public circulation · commerce · gardens · viewing rooms",infoboxKicker:"Principal public interior of the ring",official:"habitation",
    lead:"The Promenadenring promenade concourse is the principal public interior running around the ring's outer circumference. Its width, visible ceiling, windows, planting, shops, offices, dining rooms, and common spaces marked a deliberate break from the machinery-corridor life of the early Raumhafen and made prolonged visits possible without treating every passenger as a station crew member.",
    canon:"A principal circumferential public route, room for several people abreast, visibly high ceiling, shops and offices, small trees and hydroponic planting, restaurants and common rooms with exterior windows, visitor accommodation, and pressure subdivision are established. Exact length, width, ceiling height, names, tenants, rents, landscaping, window design, architectural style, and opening sequence remain open.",
    sections:[
      {id:"meaning",title:"Meaning of promenade",html:"<p>The term identifies the public route inside the pressure shell. It does not describe an exposed walkway. Residents and visitors use the concourse for ordinary movement, meeting, exercise, shopping, dining, viewing, and ceremony.</p>"},
      {id:"scale",title:"A room large enough to feel public",html:"<p>Several people can walk abreast beneath a visibly high ceiling. Long sight lines and repeated destinations make the route legible as a street-like interior rather than a sequence of equipment bays.</p>"},
      {id:"windows",title:"Windows and viewing rooms",html:"<p>Restaurants, common rooms, and selected public areas possess exterior views. Window assemblies remain structurally bounded and protected, but the sight of Earth, station works, ships, and stars becomes part of everyday civic architecture.</p>"},
      {id:"commerce",title:"Shops, offices, and hospitality",html:"<p>Retail counters, station offices, dining rooms, visitor services, and hotel access open onto the route. Commercial activity serves a controlled resident and traveler economy under German station law rather than an unrestricted terrestrial market.</p>"},
      {id:"planting",title:"Planting and environmental display",html:"<p>Small trees and hydroponic planting soften the mechanical environment, contribute modest environmental service, and demonstrate controlled growth. Their maintenance consumes water, light, nutrients, labor, and quarantine capacity.</p>"},
      {id:"movement",title:"Children, visitors, and ordinary movement",html:"<p>The concourse permits children to move between supervised destinations without entering an active machinery compartment. Visitors can remain aboard for days while using public routes and services instead of occupying crew circulation.</p>"},
      {id:"sectors",title:"Continuity divided by bulkheads",html:"<p>The route appears continuous, yet pressure bulkheads divide it into sealable sectors. Doors, signs, drills, and alternate routes preserve the public experience while ensuring that one accident cannot empty the full ring.</p>"},
      {id:"ceremony",title:"The civic stage",html:"<p>Arrivals, commemorations, exhibitions, official tours, school visits, and millennium observances use the concourse as the station's principal representational space. It displays the Raumhafen as a lived German district rather than a remote engineering platform.</p>"}
    ],
    related:[{href:"promenadenring-residential-districts.html",kicker:"Spaces behind the concourse",label:"Residential Districts"},{href:"promenadenring-millennium-opening.html",kicker:"Public inauguration",label:"Millennium Opening"}],
    facts:[["Location","Outer circumference of Promenadenring"],["Primary function","Public circulation"],["Principal uses","Commerce, dining, meetings, viewing"],["Planting","Small trees and hydroponics"],["Users","Residents, workers, children, visitors"],["Safety","Sealable pressure sectors"],["Legal authority","German Raumhafen administration"],["Exact dimensions and tenants","Open"]],
    categories:["German space program","Orbital architecture","Promenadenring","Orbitaler Raumhafen","Public space"]
  }),

  "promenadenring-residential-districts":promenadeArticle({
    title:"Promenadenring residential districts",category:"Orbital settlements",eyebrow:"Housing · education · medicine · worship · services",infoboxKicker:"First large Raumhafen residential district",official:"habitation",
    lead:"The Promenadenring residential districts are the apartments, dormitories, hotel rooms, classrooms, clinic, worship rooms, kitchens, workshops, stores, offices, and environmental machinery placed behind the public concourse. Their progressive occupation from 1996–97 onward allowed the Raumhafen to support families, trainees, patients, visitors, and permanent service workers alongside engineers and flight crews.",
    canon:"Apartments, dormitories, hotel rooms, classrooms, chapel and worship rooms, clinic, offices, kitchens, workshops, storage, environmental machinery, family-health research, visitor accommodation, progressive occupation, and independently sealable sectors are established. Planning discussions propose roughly three hundred permanent residents and another one to two hundred transient occupants, but population, household rules, residency classes, schools, staffing, rents, births, worship arrangements, and complete internal plan remain open.",
    sections:[
      {id:"housing",title:"Apartments, dormitories, and hotels",html:"<p>Different quarters serve permanent households, single technical workers, rotating crews, trainees, patients, officials, and short-stay visitors. Housing remains tied to station access, employment, family status, and safety qualification.</p>"},
      {id:"families",title:"Family residence",html:"<p>The ring's partial gravity and protected routes make longer family residence possible. Family medicine and childhood development remain supervised fields, and the public record does not establish a general right to conceive, give birth, or raise children indefinitely aboard.</p>"},
      {id:"education",title:"Classrooms and training",html:"<p>Classrooms serve resident children, apprentices, station personnel, Mars trainees, and visiting groups. Education connects ordinary subjects to emergency procedure, pressure discipline, environmental accounting, and the geography of the Raumhafen.</p>"},
      {id:"medicine",title:"Clinic and family health",html:"<p>The clinic handles routine care, occupational injury, partial-gravity adaptation, isolation, family health, and transfer to larger medical facilities. Exact beds, specialties, surgical capacity, and medical command remain open.</p>"},
      {id:"worship",title:"Chapel and worship rooms",html:"<p>A chapel and other worship rooms permit organized observance inside the district. The Catholic chapel belongs to the wider <a href='orbital-catholic-chaplaincy.html'>orbital chaplaincy</a>; other denominational allocations, clergy, schedules, and institutional arrangements remain open.</p>"},
      {id:"services",title:"Kitchens, workshops, and stores",html:"<p>Food preparation, cleaning, laundry, repair, waste handling, storage, environmental maintenance, and local fabrication support life behind the visible promenade. The service workforce is essential to settlement even when public imagery emphasizes astronauts and engineers.</p>"},
      {id:"sectors",title:"Residential safety",html:"<p>Each sector maintains monitored atmosphere, fire control, pressure doors, refuge capacity, communications, and routes toward the nonrotating hub. Residents drill for isolation and transfer because domestic appearance cannot remove orbital hazard.</p>"},
      {id:"population",title:"Open population register",html:"<p>Contemporary planning discussions commonly describe capacity for about three hundred permanent residents and one to two hundred transient occupants. Those figures remain provisional until the station's life-support, transport, housing, and legal registers are fixed.</p>"}
    ],
    related:[{href:"promenadenring-promenade-concourse.html",kicker:"Public frontage",label:"Promenade Concourse"},{href:"off-world-family-life.html",kicker:"Wider social system",label:"Off-World Family Life"}],
    facts:[["Occupation began","1996–97"],["Housing","Apartments, dormitories, hotel rooms"],["Public institutions","Classrooms, clinic, worship rooms"],["Support spaces","Kitchens, workshops, storage"],["Principal users","Families, workers, trainees, visitors"],["Safety form","Sealable residential sectors"],["Planning permanent population","About 300 · open"],["Planning transient population","About 100–200 · open"]],
    categories:["German space program","Orbital settlements","Promenadenring","Orbitaler Raumhafen","Extraterrestrial society"]
  }),

  "promenadenring-millennium-opening":promenadeArticle({
    title:"Promenadenring millennium opening",category:"Public ceremonies",eyebrow:"Ring closure · formal opening · 1999–2000",infoboxKicker:"Public completion of the orbital district",official:"construction",
    lead:"The Promenadenring millennium opening was the period of ring closure and formal inauguration around 1999 or 2000. It concluded a construction program already inhabited for several years and presented the Orbitaler Raumhafen as Germany's first extraterrestrial town: a port, yard, residential district, visitor destination, and public symbol built partly from lunar material.",
    canon:"Approach to closure in 1999, closure or formal opening around 2000, prior majority occupation in 1998, construction in service, connection to Germany's post-Mars settlement policy, and public transformation of the Raumhafen into an inhabited orbital district are established. Exact closure moment, opening day, ceremony, speakers, attendance, broadcasts, commissioning language, accidents, completed population, and relation to the Millennium Lunar Illumination remain open.",
    sections:[
      {id:"before",title:"An opening after years of occupation",html:"<p>The first inhabited arc entered use in 1996–97 and more than half the ring was occupied by 1998. Formal opening therefore recognized a district already supporting homes, services, work, visitors, and ongoing construction.</p>"},
      {id:"closure",title:"Physical closure",html:"<p>Final arcs completed the continuous structural and public circuit. Closure required alignment, balance, pressure, utility, fire, evacuation, bearing, and integrated-control tests across work produced over several years.</p>"},
      {id:"commission",title:"Formal commissioning",html:"<p>The public inauguration marked acceptance of the ring as a complete Raumhafen district. Exact legal wording and division between engineering closure, occupancy certification, and ceremonial opening remain unresolved in the surviving public chronology.</p>"},
      {id:"settlement",title:"From harbor to town",html:"<p>The finished ring joined the existing docks, laboratories, foreign modules, yards, reactors, and rotating quarters to homes, schools, hospitality, worship, medicine, shops, and common rooms. The station gained a civic center as well as additional beds.</p>"},
      {id:"mars",title:"Mars success made domestic",html:"<p>Marsplan 92 supplied the political authorization. The Promenadenring translated first arrival into durable capacity for families, settlers, trainees, travelers, and the later interplanetary system.</p>"},
      {id:"millennium",title:"Millennium setting",html:"<p>Opening around the millennium placed the ring beside the <a href='millennium-lunar-illumination.html'>Millennium Lunar Illumination</a> and the public completion of a mature cislunar order. The precise scheduling relationship between the two ceremonies remains open.</p>"},
      {id:"image",title:"A visible center of the German system",html:"<p>Broadcasts and official tours could present the ring's windows, promenade, planting, homes, and construction history as evidence that Germany had moved from launch prestige to settlement. Foreign personnel and coercive imperial supply chains complicated that national image.</p>"},
      {id:"date",title:"Open date and ceremony",html:"<p>The authoritative chronology permits late 1999 or 2000 and distinguishes physical closure from formal opening. A final date, program, speeches, guest list, insignia, public attendance, and commemorative calendar remain unregistered.</p>"}
    ],
    related:[{href:"promenadenring-construction-program.html",kicker:"Completed program",label:"Construction Program"},{href:"millennium-lunar-illumination.html",kicker:"Contemporary global ceremony",label:"Millennium Lunar Illumination"}],
    facts:[["Period","1999–2000"],["Preceded by","Majority occupation in 1998"],["Physical event","Ring closure"],["Political event","Formal public opening"],["Host","Orbitaler Raumhafen"],["Strategic origin","Post-Mars settlement policy"],["Public meaning","First extraterrestrial German town"],["Exact date and ceremony","Open"]],
    categories:["German space program","Public ceremonies","Promenadenring","Orbitaler Raumhafen","Millennium"]
  })
});

const promenadenringOverview = window.deepArticles["promenadenring"];
if (promenadenringOverview) {
  promenadenringOverview.landscape = promenadenringLandscape;
  promenadenringOverview.related = [
    ...(promenadenringOverview.related || []),
    {href:"promenadenring-construction-program.html",kicker:"1994–2000 build",label:"Construction Program"},
    {href:"promenadenring-rotating-structure.html",kicker:"Ring, spokes and bearing",label:"Rotating Structure"},
    {href:"promenadenring-lunar-material-supply.html",kicker:"Moon-to-orbit industry",label:"Lunar-Material Supply Chain"},
    {href:"promenadenring-promenade-concourse.html",kicker:"Public interior",label:"Promenade Concourse"},
    {href:"promenadenring-residential-districts.html",kicker:"Homes and services",label:"Residential Districts"},
    {href:"promenadenring-millennium-opening.html",kicker:"Closure and inauguration",label:"Millennium Opening"}
  ];
}

const raumhafenOverview = window.deepArticles["orbitaler-raumhafen"];
if (raumhafenOverview) {
  if (!raumhafenOverview.sections.some(section => section.id === "promenadenring")) {
    raumhafenOverview.sections.push({id:"promenadenring",title:"Promenadenring and the mature orbital district",html:"<p>Marsplan 92's success changes Raumhafen doctrine. Germany authorizes the <a href='promenadenring.html'>Promenadenring</a> and a further Raumwerft expansion in 1994; lunar structural shipments begin in 1995, the first spokes and inhabited arc appear in 1996–97, more than half the ring is occupied by 1998, and closure and formal opening follow around 1999 or 2000.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>By the current 2012 canon horizon the Raumhafen is an inhabited orbital district as well as a harbor, industrial yard, international station, and interplanetary staging center. Its later population, exact ring specifications, and internal municipal arrangements remain open.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"});
  }
  raumhafenOverview.facts = raumhafenOverview.facts || [];
  if (!raumhafenOverview.facts.some(item => item[0] === "Interplanetary yard")) raumhafenOverview.facts.push(["Interplanetary yard","Raumwerft · late 1980s <sup class='canon-note' data-provenance='a'>[a]</sup>"]);
  if (!raumhafenOverview.facts.some(item => item[0] === "Promenadenring")) raumhafenOverview.facts.push(["Promenadenring","Authorized 1994 · opened around 1999–2000 <sup class='canon-note' data-provenance='a'>[a]</sup>"]);
  raumhafenOverview.related = [
    ...(raumhafenOverview.related || []),
    {href:"promenadenring-construction-program.html",kicker:"1994–2000 enlargement",label:"Promenadenring Construction Program"},
    {href:"promenadenring-residential-districts.html",kicker:"Inhabited orbital district",label:"Promenadenring Residential Districts"}
  ];
}
