window.deepArticles = window.deepArticles || {};

const civilianSpaceTravelSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature American space economy and lunar settlement"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — commercial orbital and lunar expansion after 1990"},
  {href:"../transcript.md",label:"Master Transcript — tourist-oriented American lunar facilities and corporate transport"},
  {href:"american-orbital-habitat-industry.html",label:"Fractured Peace Archive — American orbital-habitat industry"}
];

const civilianJourneyLandscape = {
  src:"assets/diagrams/civilian-space-journey.svg",
  alt:"Stages of a civilian journey from medical clearance and training through launch, orbital stay, lunar extension, and return",
  caption:"Civilian passage remained a managed transport chain rather than an ordinary airline journey"
};

const civilianTravelArticle = config => ({
  category:"Spaceflight",
  eyebrow:`Civilian spaceflight · ${config.period || "1990s–2000s"}`,
  infoboxKicker:"Commercial travel beyond Earth",
  landscape:civilianJourneyLandscape,
  ...config,
  sources:civilianSpaceTravelSources,
  categories:config.categories || ["Civilian spaceflight","Space tourism","American space economy","1990s"]
});

const travelRelated = [
  {href:"american-orbital-carrier-industry.html",kicker:"Transport sector",label:"American Orbital-Carrier Industry"},
  {href:"american-orbital-habitat-industry.html",kicker:"Destination sector",label:"American Orbital-Habitat Industry"},
  {href:"frontier-orbital-lines.html",kicker:"Principal carrier",label:"Frontier Orbital Lines"},
  {href:"travel-and-mobility-in-2000.html",kicker:"Terrestrial comparison",label:"Travel and Mobility in 2000"}
];

Object.assign(window.deepArticles, {
  "civilian-space-travel":civilianTravelArticle({
    title:"Civilian travel beyond Earth",infoboxTitle:"Civilian travel beyond Earth",
    lead:"Civilian travel beyond Earth is the commercial and institutional movement of people who are neither operating astronauts nor permanent settlers. By the late 1990s the American orbital network carried corporate specialists, researchers, journalists, officials, dependents, and a small number of fare-paying visitors; lunar passage remained rarer, longer, and more tightly qualified.",
    canon:"Regular transport of corporate specialists, scientists, medical staff, media personnel, and other civilians; tourist-oriented American facilities; commercial orbital accommodation; professional traffic as the dependable market; and continued public safety authority are established. Limited orbital and lunar leisure travel is a conservative extrapolation from those systems. Passenger totals, prices, named tour firms, hotel brands, first tourist, accident record, visa rules, and the scale of non-American tourism remain open.",
    sections:[
      {id:"meaning",title:"Meaning and scope",html:"<p>Civilian space travel includes paid professional assignments, official visits, family passage, journalism, scientific exchange, short-term residence, and leisure journeys. It excludes operating crew while on duty and settlers moving without a planned early return.</p>"},
      {id:"market",title:"The professional market comes first",html:"<p>Engineers, physicians, payload specialists, inspectors, administrators, customers, and researchers supplied predictable demand. Their employers could justify training, insurance, and delay because the journey served a contract.</p><p>Leisure travelers bought spare capacity inside a network built for work. Tourism therefore followed reliable transport and occupied destinations rather than creating them.</p>"},
      {id:"journey",title:"A managed journey",html:"<p>Passengers underwent medical review, emergency instruction, pressure-suit familiarization, baggage limits, launch preparation, and destination orientation. The carrier coordinated the vehicle; the destination operator controlled accommodation; public authorities retained traffic and emergency command.</p>"},
      {id:"passenger-substitution",title:"Passenger substitution",html:"<!-- altwwii-writer-block:start id=wb-v-20260816-q4n8c writer=v kind=extrapolation created=2026-08-16T14:16:43-06:00 --><p>Replacing a booked traveler required more than assigning the empty seat to another name. The carrier had to match the substitute to medical clearance, completed emergency training, suit and equipment fit, identity and entry requirements, baggage and personal mass, and the accommodation and return plan at the destination. A place released shortly before departure could therefore pass only to someone already qualified for the same journey or to a candidate with enough time to complete the missing steps.</p><p>Standby arrangements favored repeat passengers, trained employees, and sponsored candidates prepared before a vacancy appeared. Clearance for a short orbital visit did not automatically qualify someone for a lunar transfer or surface excursion. The fare, sponsor's replacement, launch place, room booking, insurance, and return capacity could also be adjusted under separate terms, so filling one vacancy did not settle every part of the interrupted journey.</p><!-- altwwii-writer-block:end -->"},
      {id:"orbit",title:"Orbital travel",html:"<p><a href='orbital-tourism.html'>Orbital visits</a> were the least demanding civilian journeys. Columbia and attached commercial modules offered Earth views, microgravity, public events, and access to an active port without the additional transfer and surface risks of the Moon.</p>"},
      {id:"moon",title:"Lunar travel",html:"<p><a href='lunar-tourism.html'>Lunar visits</a> required more time, training, transport stages, and reserve capacity. Kennedy's wider system could receive temporary visitors, but industrial work, settlement traffic, medicine, and emergency stores took precedence over sightseeing.</p>"},
      {id:"inequality",title:"Access and inequality",html:"<p>Employers, governments, universities, broadcasters, and wealthy households could purchase access unavailable to most citizens. A nominal ticket price concealed medical screening, lost work time, insurance, training, and the possibility of being stranded away from home by weather or equipment delay.</p>"},
      {id:"other",title:"Travel outside the American system",html:"<p>Foreign centers received visiting scientists, officials, technical delegations, clergy, and exchange personnel. The surviving record does not establish a comparable leisure market at Raumhafen, Hōrai, Resolution, or Stella Maris by 2000.</p>"},
      {id:"settlement",title:"Visitors and settlers",html:"<p>Short-term accommodation accustomed institutions to feeding, housing, treating, and governing people who were not flight crew. Those practices later supported dependents and settlers, but a visitor retained return passage and did not acquire civic standing merely by buying a stay.</p>"}
    ],
    related:[...travelRelated,{href:"orbital-tourism.html",kicker:"Near-Earth market",label:"Orbital Tourism"},{href:"lunar-tourism.html",kicker:"Extended destination",label:"Lunar Tourism"},{href:"civilian-spaceflight-medical-qualification.html",kicker:"Passenger requirement",label:"Civilian Medical Qualification"}],
    facts:[["Mature period","Late 1990s onward"],["Largest passenger class","Professional and institutional travelers"],["Leisure market","Limited"],["Principal orbital destination","Orbital Port Columbia and commercial modules"],["Principal lunar destination","Kennedy lunar system"],["Public authority","Traffic, safety, rescue, and emergency command"],["Mass tourism","Not established by 2000"],["Passenger totals and fares","Open"]]
  }),

  "orbital-tourism":civilianTravelArticle({
    title:"Orbital tourism",infoboxTitle:"Orbital tourism",period:"late 1990s onward",
    lead:"Orbital tourism is short-duration civilian travel to an occupied space station principally for observation, experience, public communication, or private leisure. It developed first in the American corporate system, where scheduled carriers and commercial habitat modules could sell unused passenger and accommodation capacity without constructing a separate tourist station.",
    canon:"Tourist-oriented American facilities, commercial short-stay accommodation, professional traffic as the primary market, Columbia and the Frontier Annex as the natural early destination, medical qualification, and federal emergency authority are established or directly supported. Exact first tourist, opening date, passenger totals, fares, operators, itineraries, luxury level, and any dedicated hotel remain open.",
    sections:[
      {id:"origin",title:"Origins in professional traffic",html:"<p>Carriers already transported payload customers, technicians, physicians, journalists, officials, and researchers. Once schedules and spare rooms became dependable, operators could admit visitors whose presence served no operational requirement.</p>"},
      {id:"destination",title:"Columbia as destination",html:"<p><a href='orbital-port-columbia.html'>Orbital Port Columbia</a> combined regular traffic, Earth observation, medical support, emergency refuge, and attached commercial space. The <a href='frontier-annex.html'>Frontier Annex</a> supplied the clearest early model for separately priced accommodation inside a publicly commanded port.</p>"},
      {id:"experience",title:"The visitor experience",html:"<p>Earth viewing, guided station tours, supervised microgravity activity, meals, photography, broadcasts, and observation of port operations formed the obvious itinerary. Visitors remained confined by work zones, security classifications, fire compartments, and crew schedules.</p>"},
      {id:"training",title:"Training and conduct",html:"<p>Passengers learned restraints, suit use, pressure-loss response, fire procedure, hygiene, motion-sickness management, and evacuation routes. A visitor unable to follow commands threatened everyone sharing the pressure vessel.</p>"},
      {id:"economics",title:"Economics",html:"<p>Operators sold marginal capacity after government, station, and contract obligations were met. Transport, training, insurance, lodging, consumables, medical support, and contingency reserves made even a short stay expensive.</p>"},
      {id:"work",title:"Tourist or sponsored visitor",html:"<p>The boundary was often commercial rather than experiential. A broadcaster, corporate guest, prize recipient, legislator, or wealthy passenger might follow the same itinerary while a sponsor classified the journey differently for tax, insurance, and publicity.</p>"},
      {id:"limits",title:"Limits",html:"<p>No source establishes mass orbital holidays, a dedicated luxury hotel, routine child passengers, or airline-style walk-up service by 2000. Tourism remained subordinate to an industrial port whose failures could close the market immediately.</p>"}
    ],
    related:[...travelRelated,{href:"commercial-space-accommodation.html",kicker:"Short-stay infrastructure",label:"Commercial Space Accommodation"},{href:"civilian-spaceflight-medical-qualification.html",kicker:"Fitness and training",label:"Civilian Medical Qualification"}],
    facts:[["Principal system","United States"],["Probable early destination","Orbital Port Columbia"],["Commercial host","Frontier Annex and later habitat operators"],["Typical duration","Short stay; exact range open"],["Primary market beneath tourism","Professional transport"],["Dedicated tourist station","Not established"],["Medical clearance","Required"],["First tourist and fares","Open"]]
  }),

  "lunar-tourism":civilianTravelArticle({
    title:"Lunar tourism",infoboxTitle:"Lunar tourism",period:"around 2000 and after",
    lead:"Lunar tourism is temporary civilian travel to the Moon for observation, commemoration, education, or private leisure. The market emerged as a minor extension of the American Kennedy transport and habitat system. It remained far smaller than orbital tourism because every visitor consumed transfer capacity, surface life support, refuge space, medical margin, and a guaranteed path home.",
    canon:"Tourist-oriented American lunar facilities, corporate bases beyond Kennedy, growing scheduled transport, temporary civilian accommodation, priority for industrial and settlement traffic, and the wider system's ability to receive non-crew visitors are established. A limited lunar visitor market around the millennium is a conservative extrapolation. The first tourist, landing sites, operators, hotels, routes, prices, annual totals, and tourist activity at foreign bases remain open.",
    sections:[
      {id:"foundation",title:"Industrial foundation",html:"<p>Lunar travel became plausible only after <a href='kennedy-lunar-station.html'>Kennedy Station</a>, depots, navigation, rescue plans, resource works, and longer-duration habitation supported people who were not part of one landing mission. Visitors used capacity created for settlement and industry.</p>"},
      {id:"journey",title:"Journey and duration",html:"<p>A lunar passenger crossed several operational boundaries: Earth launch, orbital transfer, cislunar passage, descent, surface residence, ascent, and return. Weather or hardware delay could extend the stay, so accommodation and medical plans carried reserves beyond the advertised itinerary.</p>"},
      {id:"sites",title:"Destinations",html:"<p>Kennedy's wider system offered the strongest combination of landing support, medicine, communications, and occupied facilities. Industrial sites, mines, reactors, and remote works were not automatically open to visitors; access depended upon safety, ownership, and operational schedules.</p>"},
      {id:"attractions",title:"Observation and commemoration",html:"<p>Earth in the lunar sky, surface excursions, historic landing equipment, observatory visits, and the visible works of settlement supplied the principal experience. Excursions remained supervised and limited by radiation, dust, suit endurance, terrain, and refuge distance.</p>"},
      {id:"millennium",title:"The millennium effect",html:"<p>The <a href='millennium-lunar-illumination.html'>Millennium Lunar Illumination</a> made occupied lunar geography familiar to a global audience. It increased demand to see the settlements without itself proving that large visitor numbers could be carried safely.</p>"},
      {id:"priority",title:"Traffic priority",html:"<p>Medicine, repair parts, permanent residents, relief crews, and industrial equipment outranked leisure passengers. A tourist booking was therefore more vulnerable than an orbital stay to postponement or cancellation.</p>"},
      {id:"limits",title:"A prestige market, not mass tourism",html:"<p>The market served wealthy individuals, sponsored guests, prize recipients, journalists, and institutional delegations. No evidence supports cheap lunar holidays, resort towns, unsupervised surface travel, or tourism as the principal lunar economy by 2000.</p>"}
    ],
    related:[...travelRelated,{href:"kennedy-lunar-station.html",kicker:"Principal destination",label:"Kennedy Lunar Station"},{href:"frontier-lunar-services.html",kicker:"Transport chain",label:"Frontier Lunar Services"},{href:"lunar-settlements.html",kicker:"Occupied geography",label:"Lunar Settlements"}],
    facts:[["Emergence","Around 2000 and after"],["Principal system","American Kennedy network"],["Market character","Prestige and sponsored travel"],["Traffic priority","Below medicine, repair, crew, and settlement needs"],["Surface access","Supervised and restricted"],["Foreign tourist markets","Not established"],["Mass tourism","No"],["First visitor, fares, and totals","Open"]]
  }),

  "civilian-spaceflight-medical-qualification":civilianTravelArticle({
    title:"Civilian spaceflight medical qualification",category:"Medicine",infoboxTitle:"Civilian spaceflight medical qualification",period:"commercial era",
    lead:"Civilian spaceflight medical qualification is the examination, risk classification, training, and continuing review used to decide whether a non-crew passenger can travel without creating an unacceptable danger to the vehicle, destination, or emergency system. Commercial travel broadened admission beyond career astronauts while preserving stricter standards than ordinary aviation.",
    canon:"Medical review, emergency instruction, motion-sickness management, pressure-suit familiarization, destination-specific limits, carrier and public safety authority, and tighter requirements for longer or lunar journeys are operationally necessary extrapolations from established civilian transport. Exact statutes, agencies, examination schedules, disqualifying conditions, age limits, pregnancy rules, waivers, and accident cases remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Qualification protected more than the traveler. An incapacitated passenger consumed crew attention, medical stores, refuge capacity, and perhaps a rescue mission. Screening therefore considered the shared system as well as personal consent.</p>"},
      {id:"exam",title:"Medical examination",html:"<p>Review commonly addressed cardiovascular stability, respiratory function, mobility, neurological conditions, medication, infection, psychological tolerance, and the ability to use emergency equipment. Standards varied with vehicle acceleration, duration, destination, and available care.</p>"},
      {id:"training",title:"Passenger training",html:"<p>Passengers practiced restraints, suit and mask use, pressure loss, fire response, evacuation, hygiene, waste systems, communications discipline, and movement in reduced gravity. Training aimed at safe obedience rather than crew proficiency.</p>"},
      {id:"tiers",title:"Journey-specific qualification",html:"<p>An orbital visitor near Columbia could be returned or treated more readily than a lunar passenger in transit. Surface excursions, long stays, industrial visits, and dependents required additional review.</p>"},
      {id:"waivers",title:"Waivers and informed risk",html:"<p>Commercial operators had incentives to accept paying passengers, insurers to exclude uncertain risk, and public authorities to prevent one permissive firm from endangering a shared port. Waivers could allocate financial loss; they could not waive traffic or emergency rules.</p>"},
      {id:"privacy",title:"Medical privacy and disclosure",html:"<p>Carriers needed enough information to plan safely, while employers, broadcasters, and sponsors did not automatically acquire an unrestricted medical file. The boundary between safety disclosure and commercial curiosity remained contested.</p>"},
      {id:"limits",title:"Unsettled standards",html:"<p>No unified international passenger certificate is established. A person cleared for one American orbital itinerary was not thereby accepted for the Moon or for travel aboard a foreign system.</p>"}
    ],
    related:[...travelRelated,{href:"civilian-space-travel.html",kicker:"Passenger system",label:"Civilian Travel Beyond Earth"},{href:"commercial-space-accommodation.html",kicker:"Destination duties",label:"Commercial Space Accommodation"},{href:"space-medicine.html",kicker:"Clinical field",label:"Space Medicine"}],
    facts:[["Applies to","Non-crew civilian passengers"],["Purpose","Protect traveler and shared emergency capacity"],["Core elements","Examination, classification, training, and review"],["Standards","Journey- and vehicle-specific"],["Waiver of public safety rules","Not permitted"],["International certificate","None established"],["Exact medical thresholds","Open"]]
  }),

  "commercial-space-accommodation":civilianTravelArticle({
    title:"Commercial space accommodation",category:"Real estate and infrastructure",infoboxTitle:"Commercial space accommodation",period:"1990s onward",
    lead:"Commercial space accommodation consists of privately financed or operated rooms, bunks, hygiene facilities, food service, observation spaces, clinics, and shared domestic systems for short-term orbital and lunar residents. It grew from worker housing and tenant modules; leisure visitors remained a secondary use rather than the foundation of the industry.",
    canon:"Commercial occupied modules, worker housing, clinics, short-stay accommodation, the Frontier Annex as an early model, separate ownership of carrier and destination, common technical interfaces, and public emergency authority are established. Tourist use is supported; named hotels, room counts, luxury standards, rates, ownership forms, opening dates, and dedicated resorts remain open.",
    sections:[
      {id:"origin",title:"Origins in worker and customer lodging",html:"<p>Payload specialists, technicians, researchers, inspectors, and visiting customers needed places to sleep outside vehicle seats and operating workspaces. Habitat companies converted that requirement into separately contracted occupancy.</p>"},
      {id:"orbit",title:"Orbital accommodation",html:"<p>At Columbia and its attachments, short-stay rooms shared atmosphere, power, thermal control, docking, refuge, and emergency systems with the larger port. A commercial operator could control booking and interior service without controlling station traffic.</p>"},
      {id:"moon",title:"Lunar accommodation",html:"<p>Lunar rooms were likely buried, shielded, compact, and connected to existing utilities. A window was a prestige feature only where radiation, structure, and orientation permitted it; displays and protected observation spaces were more economical.</p>"},
      {id:"service",title:"Service and staffing",html:"<p>Accommodation required food, cleaning, stores, waste handling, linen or garment service, medical coverage, maintenance, guest instruction, and emergency accountability. Much of the work resembled domestic service under conditions where an overlooked filter or seal became a safety issue.</p>"},
      {id:"contracts",title:"Booking and delay",html:"<p>Contracts allocated launch postponement, extended stays, missed connections, medical removal, baggage, consumables, and evacuation. A room could remain occupied for days beyond plan when the return vehicle did not depart.</p>"},
      {id:"authority",title:"Private hospitality under public command",html:"<p>During fire, pressure loss, collision threat, contamination, or evacuation, destination command displaced ordinary hotel authority. Operators could set prices and guest rules; they could not prevent inspection or emergency entry.</p>"},
      {id:"limits",title:"No resort economy by 2000",html:"<p>Professional residents supplied the dependable market. No established source supports large hotels, resort districts, casino stations, or lunar towns economically dependent upon tourists by 2000.</p>"}
    ],
    related:[...travelRelated,{href:"frontier-annex.html",kicker:"Early commercial complex",label:"Frontier Annex"},{href:"orbital-tourism.html",kicker:"Visitor market",label:"Orbital Tourism"},{href:"lunar-tourism.html",kicker:"Extended-stay market",label:"Lunar Tourism"}],
    facts:[["Mature period","1990s onward"],["Founding market","Workers, researchers, and visiting customers"],["Leisure use","Secondary"],["Early model","Frontier Annex"],["Principal systems","Rooms, food, hygiene, medicine, and refuge"],["Emergency command","Public station or settlement authority"],["Dedicated resort economy","Not established"],["Operators, rates, and capacity","Open"]]
  })
});

function addCivilianTravelLinks(id,items){
  const article=window.deepArticles[id];
  if(!article)return;
  article.related=article.related || [];
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
}

addCivilianTravelLinks("american-orbital-habitat-industry",[
  {href:"commercial-space-accommodation.html",kicker:"Short-stay sector",label:"Commercial Space Accommodation"},
  {href:"orbital-tourism.html",kicker:"Visitor market",label:"Orbital Tourism"}
]);
addCivilianTravelLinks("frontier-orbital-lines",[
  {href:"civilian-space-travel.html",kicker:"Passenger market",label:"Civilian Travel Beyond Earth"},
  {href:"orbital-tourism.html",kicker:"Leisure traffic",label:"Orbital Tourism"}
]);
addCivilianTravelLinks("american-corporate-space-system",[
  {href:"civilian-space-travel.html",kicker:"Civilian market",label:"Civilian Travel Beyond Earth"},
  {href:"commercial-space-accommodation.html",kicker:"Occupied destinations",label:"Commercial Space Accommodation"}
]);
addCivilianTravelLinks("travel-and-mobility-in-2000",[
  {href:"civilian-space-travel.html",kicker:"Off-world extension",label:"Civilian Travel Beyond Earth"}
]);
addCivilianTravelLinks("orbital-port-columbia",[
  {href:"orbital-tourism.html",kicker:"Short-stay visitors",label:"Orbital Tourism"},
  {href:"commercial-space-accommodation.html",kicker:"Commercial modules",label:"Commercial Space Accommodation"}
]);
addCivilianTravelLinks("kennedy-lunar-station",[
  {href:"lunar-tourism.html",kicker:"Temporary visitors",label:"Lunar Tourism"},
  {href:"civilian-space-travel.html",kicker:"Passenger system",label:"Civilian Travel Beyond Earth"}
]);
