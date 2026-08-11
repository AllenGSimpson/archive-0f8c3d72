window.deepArticles = window.deepArticles || {};

const raumhafenLifeSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — international Raumhafen and Promenadenring"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Raumhafen growth, 1975–2000"},
  {href:"../transcript.md",label:"Master Transcript — post-1985 space society and the human layer"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P2-07 Raumhafen international culture"}
];

const raumhafenLifeLandscape = {
  src:"assets/diagrams/raumhafen-international-community.svg",
  alt:"German, Italian, Japanese, and American facilities joined through the Orbitaler Raumhafen",
  caption:"Everyday station life crosses national compartments while remaining subject to German integrated command"
};

const raumhafenLifeRelated = [
  {href:"international-community-orbitaler-raumhafen.html",kicker:"Social setting",label:"International Community of the Raumhafen"},
  {href:"orbitaler-raumhafen.html",kicker:"Host station",label:"Orbitaler Raumhafen"},
  {href:"raumhafen-jurisdiction.html",kicker:"Legal order",label:"Jurisdiction aboard the Raumhafen"},
  {href:"promenadenring.html",kicker:"Later civic district",label:"Promenadenring"}
];

const raumhafenLifeArticle = config => ({
  category:config.category || "Orbital society",
  eyebrow:config.eyebrow || "Orbitaler Raumhafen · everyday life and institutions",
  infoboxKicker:config.infoboxKicker || "Raumhafen social institution",
  landscape:config.landscape || raumhafenLifeLandscape,
  ...config,
  sources:raumhafenLifeSources,
  related:[...(config.related || []),...raumhafenLifeRelated.filter(item=>!(config.related||[]).some(other=>other.href===item.href))],
  categories:config.categories || ["Orbitaler Raumhafen","Orbital society","German space program","International spaceflight"]
});

Object.assign(window.deepArticles, {
  "raumhafen-resident-service-corps": raumhafenLifeArticle({
    title:"Resident service corps of the Orbitaler Raumhafen",infoboxKicker:"Permanent technical and domestic station workforce",
    lead:"The resident service corps of the Orbitaler Raumhafen is the permanent technical, logistical, medical, domestic, and administrative workforce that keeps the station operating between visiting missions. Its emergence ended the early assumption that every person in orbit was an astronaut selected for a single flight.",
    canon:"A mixed population of controllers, mechanics, physicians, cargo specialists, inspectors, translators, and visiting crews is established. The broader service corps, occupational hierarchy, training routes, and labor culture are working extrapolation; formal office names, staffing totals, unions, and pay scales remain open.",
    sections:[
      {id:"origin",title:"From expedition crews to resident labor",html:"<p>The first station crews combine flight status with maintenance, cargo, housekeeping, and emergency duties. Growth after 1975 makes that arrangement inefficient. Long-duration systems require people whose professional identity belongs to the station rather than to a particular spacecraft.</p>"},
      {id:"occupations",title:"Occupational range",html:"<p>The corps includes environmental technicians, electricians, fitters, cargo handlers, cooks, sanitation workers, medical staff, radio and data operators, clerks, translators, stores personnel, safety inspectors, and general station hands. Flight crews remain prestigious, though daily reliability increasingly belongs to less visible trades.</p>"},
      {id:"status",title:"Flight status and resident certification",html:"<p>Residents still require medical clearance, pressure-suit familiarity, emergency training, and orbital transport qualification. They do not all hold pilot, astronaut, military, or research credentials. Station certification becomes a distinct vocational ladder.</p>"},
      {id:"national",title:"National staffing",html:"<p>German personnel dominate common utilities, traffic, structure, and integrated response. Italian, Japanese, and later American workers staff their national modules and provide liaison specialists for shared systems. Contracts specify which jobs remain national and which require German certification.</p>"},
      {id:"hierarchy",title:"Hierarchy and prestige",html:"<p>Command officers, flight crews, scientists, engineers, technicians, and domestic service workers occupy visibly different ranks. Shared danger narrows some social distance because a sanitation failure or cargo mistake can threaten senior officers as quickly as junior staff.</p>"},
      {id:"training",title:"Training and apprenticeship",html:"<p>Ground schools feed apprentices into simulated station sections before an orbital posting. Technical German, emergency breathing apparatus, fire response, confined-space work, documentation, and cross-national interface rules form a common curriculum.</p>"},
      {id:"work",title:"The maintenance day",html:"<p>Much of station work is inspection, filter replacement, leak checking, cleaning, inventory, waste processing, cable testing, exercise-equipment maintenance, and documentation. The harbor's public image emphasizes rockets; its internal culture respects people who keep ordinary failures from becoming emergencies.</p>"},
      {id:"identity",title:"A station occupational identity",html:"<p>By the Promenadenring era, repeat tours create a transnational community of people who know the same hatches, noises, smells, shortcuts, and alarm tones. National loyalty remains strong, while the term resident increasingly distinguishes experienced station workers from visitors.</p>"}
    ],
    related:[{href:"raumhafen-tours-rotation.html",kicker:"Employment rhythm",label:"Tours and Rotation aboard the Raumhafen"},{href:"raumhafen-emergency-customs.html",kicker:"Shared qualification",label:"Raumhafen Emergency Customs"},{href:"technician-class.html",kicker:"Terrestrial social context",label:"Certified Technician Class"}],
    facts:[["Develops","Late 1970s–1980s"],["Host employer","German station authorities"],["Foreign employers","National module administrations"],["Principal fields","Utilities, cargo, medicine, domestic service, data, and administration"],["Astronaut status required","No"],["Station certification","Required"],["Common operating language","German"],["Formal corps name and staffing","Open"]]
  }),

  "raumhafen-tours-rotation": raumhafenLifeArticle({
    title:"Tours and rotation aboard the Orbitaler Raumhafen",infoboxKicker:"Work, residence, leave, and crew turnover",
    lead:"Tours and rotation aboard the Orbitaler Raumhafen are the schedules through which governments and employers balance physiological exposure, specialist continuity, transport cost, family separation, and the need for experienced residents. Tours lengthen as the station gains better habitation and the Promenadenring opens, yet indefinite residence remains exceptional before 2000.",
    canon:"Long-duration occupation, mixed resident and visiting populations, later civic expansion, and national module autonomy are established. Specific tour lengths, leave entitlements, medical limits, overlap periods, and national differences are working extrapolation.",
    sections:[
      {id:"early",title:"Early short tours",html:"<p>During assembly and commissioning, visits are organized around vehicle schedules and narrowly defined work packages. Crews stay long enough to activate systems, perform experiments, inspect construction, and prepare the next occupation.</p>"},
      {id:"mature",title:"Mature resident tours",html:"<p>Permanent staffing produces tours measured in months. Engineering, medical, traffic, and command posts require overlap so an arriving specialist learns the station's current condition from the person leaving.</p>"},
      {id:"length",title:"Factors governing length",html:"<p>Radiation dose, musculoskeletal health, sleep, workload, mental condition, family obligations, transport availability, and the scarcity of a skill all affect rotation. A crisis may extend a tour when replacement flights are delayed.</p>"},
      {id:"national",title:"National schedules",html:"<p>German station personnel follow the host rotation system. Foreign modules can set their own ordinary staffing cycles, provided they maintain certified liaison, emergency, and maintenance coverage at all times.</p>"},
      {id:"overlap",title:"Handover and overlap",html:"<p>Incoming and outgoing teams share several shifts where transport capacity permits. They review faults, deferred work, stores, personality conflicts, classified equipment, and the practical condition of systems that formal logs describe imperfectly.</p>"},
      {id:"leave",title:"Earth leave and reassignment",html:"<p>Return to Earth includes medical readaptation, debriefing, family leave, retraining, and possible reassignment. Repeat residents form a cadre whose careers alternate between the station, ground simulators, factories, and launch centers.</p>"},
      {id:"visitors",title:"Visitors and transient crews",html:"<p>Vehicle crews, inspectors, diplomats, scientists, contractors, and journalists may remain only days or weeks. Their short presence creates extra work for residents who must brief, escort, house, and protect them.</p>"},
      {id:"ring",title:"The Promenadenring transition",html:"<p>Larger quarters, recreation, clinics, services, and partial gravity make longer residence more tolerable after the ring's construction. The distinction between a tour and a life in orbit begins to blur for a small number of families and senior specialists.</p>"}
    ],
    related:[{href:"raumhafen-resident-service-corps.html",kicker:"Resident workforce",label:"Raumhafen Resident Service Corps"},{href:"raumhafen-families-dependents.html",kicker:"Long residence",label:"Families and Dependents aboard the Raumhafen"},{href:"space-medicine.html",kicker:"Physiological context",label:"Space Medicine"}],
    facts:[["Early pattern","Mission-defined short visits"],["Mature pattern","Overlapping resident tours"],["Typical unit","Months; exact ranges open"],["Primary limits","Radiation, health, workload, transport, and family separation"],["Foreign schedules","Nationally administered"],["Common requirement","Continuous certified coverage"],["Repeat service","Common among specialist cadre"],["Indefinite residence before 2000","Exceptional"]]
  }),

  "raumhafen-habitation": raumhafenLifeArticle({
    title:"Habitation aboard the Orbitaler Raumhafen",infoboxKicker:"Quarters, sleep, hygiene, privacy, and partial gravity",
    lead:"Habitation aboard the Orbitaler Raumhafen developed from compact mission quarters into a layered residential system of national compartments, common service areas, rotating sleep and exercise spaces, and the Promenadenring. Privacy, quiet, clean air, and reliable hygiene became scarce goods as important to morale as ceremonial public rooms.",
    canon:"Long-duration habitation, connected national modules, rotating facilities, and the Promenadenring are established. Detailed cabin plans, occupancy limits, rent, furnishing standards, and allocation rules are working extrapolation.",
    sections:[
      {id:"early",title:"Early compartments",html:"<p>Initial quarters are small, equipment-dense, and close to work stations. Sleeping restraints, shared hygiene, stowed clothing, noise, fans, and constant artificial light make the early station feel like a vessel under way.</p>"},
      {id:"allocation",title:"Allocation of quarters",html:"<p>Command, medical need, shift pattern, nationality, security clearance, and tour length influence assignment. Seniority improves privacy, though operational need can place a junior controller near the traffic room and a senior visitor in temporary shared accommodation.</p>"},
      {id:"national",title:"National residential zones",html:"<p>Italian, Japanese, and American groups maintain quarters near their modules where capacity permits. Food, language, decoration, news, and small domestic routines differ, while German rules govern fire load, air quality, electrical equipment, and emergency access.</p>"},
      {id:"sleep",title:"Sleep and circadian order",html:"<p>Shift work requires blackout, quiet periods, eye masks, controlled lighting, and strict limits on unnecessary announcements. The station follows an Earth-based clock chosen for operations rather than the local cycle of sunrise and darkness.</p>"},
      {id:"hygiene",title:"Water and hygiene",html:"<p>Water recovery shapes bathing, laundry, cleaning, and waste discipline. Wipes, compact washing systems, scheduled laundry loads, personal kits, and aggressive odor control belong to ordinary residence.</p>"},
      {id:"privacy",title:"Privacy and personal space",html:"<p>A curtain, locker, headset, letter packet, family photograph, or private terminal session may define personal territory. Rules against unauthorized photography and listening protect both dignity and national security.</p>"},
      {id:"rotation",title:"Rotating habitation",html:"<p>Rotating sleep and exercise spaces reduce some consequences of prolonged weightlessness. Access is scheduled by medical priority and duty pattern; the presence of partial gravity does not eliminate the need for exercise and monitoring.</p>"},
      {id:"promenade",title:"Habitation in the Promenadenring",html:"<p>The ring introduces larger cabins, family units, public circulation, shops, clinics, gardens, and a more stable day-night rhythm. It turns the harbor into an orbital district while leaving industrial and command areas visibly separate.</p>"}
    ],
    related:[{href:"promenadenring.html",kicker:"Mature residential district",label:"Promenadenring"},{href:"raumhafen-families-dependents.html",kicker:"Household residence",label:"Families and Dependents aboard the Raumhafen"},{href:"raumhafen-medical-service.html",kicker:"Health supervision",label:"Raumhafen Medical Service"}],
    facts:[["Early character","Compact mission quarters"],["Mature character","Layered residential station"],["Allocation factors","Duty, nationality, clearance, health, and seniority"],["Common time standard","Earth-based station clock"],["Water use","Recovered and rationed"],["Privacy","Limited and regulated"],["Partial gravity","Rotating sleep and exercise facilities"],["Major expansion","Promenadenring, 1990s"]]
  }),

  "raumhafen-food-messes": raumhafenLifeArticle({
    title:"Food and messes aboard the Orbitaler Raumhafen",infoboxKicker:"Provisioning, national kitchens, and shared tables",
    lead:"Food aboard the Orbitaler Raumhafen is supplied through German bulk stores, national module provisions, fresh hydroponic output, visiting vehicles, and tightly managed reserves. Messes become the station's most ordinary international spaces, where political boundaries persist through menus and seating yet weaken through shared shifts and shortages.",
    canon:"German host logistics, Japanese hydroponic research, multinational crews, and inter-module camaraderie are established. Kitchen organization, menus, ration scales, mess names, alcohol rules, and ceremonial dishes are working extrapolation.",
    sections:[
      {id:"supply",title:"Provisioning chain",html:"<p>Most calories arrive from Earth as stable packaged food. Refrigerated or fresh cargo carries prestige and morale value far beyond its mass. Stores officers track shelf life, allergies, national preferences, emergency reserve, and waste.</p>"},
      {id:"kitchens",title:"Galleys and national kitchens",html:"<p>German common galleys feed the service workforce and visitors. Foreign modules keep smaller national preparation areas or protected stores, allowing familiar rice, pasta, bread, tea, coffee, condiments, and holiday foods within safety limits.</p>"},
      {id:"messes",title:"Shared messes",html:"<p>Shift timing mixes controllers, mechanics, doctors, scientists, and cargo crews more effectively than formal receptions. Seating is informal during ordinary meals, while rank and national protocol return during official dinners.</p>"},
      {id:"hydroponics",title:"Fresh food and hydroponics",html:"<p>Japanese environmental laboratories help normalize small harvests of greens, herbs, and selected vegetables. Production supplements diet, supports research, and improves morale; it does not replace the imported calorie base.</p>"},
      {id:"culture",title:"Food as national culture",html:"<p>Meals preserve national identity through flavor, preparation, table custom, and commemoration. Exchange creates station favorites and arguments over authenticity, while dietary rules require careful labeling and separate utensils in some settings.</p>"},
      {id:"safety",title:"Fire, crumbs, and contamination",html:"<p>Open flames, loose particles, grease, microbial growth, smoke, and spoiled cargo can threaten the station. Packaging, ventilation, cleaning, utensil control, and waste segregation are therefore safety systems as well as domestic routines.</p>"},
      {id:"reserve",title:"Emergency reserve",html:"<p>Sealed stores are distributed across compartments so one fire or isolation order cannot destroy the whole reserve. During a transport delay, menus contract before ration quantity falls sharply.</p>"},
      {id:"ceremony",title:"Celebration and hospitality",html:"<p>National holidays, mission returns, promotions, treaty visits, and memorial days produce rare elaborate meals. Offering another module fresh food or a culturally significant dish becomes a small form of orbital diplomacy.</p>"}
    ],
    related:[{href:"japanese-raumhafen-life-sciences-module.html",kicker:"Hydroponic research",label:"Japanese Life-Sciences Module"},{href:"raumhafen-recreation-common-spaces.html",kicker:"Informal society",label:"Recreation and Common Spaces aboard the Raumhafen"},{href:"raumhafen-emergency-customs.html",kicker:"Reserve practice",label:"Raumhafen Emergency Customs"}],
    facts:[["Primary supply","Earth-launched packaged food"],["Host provisioner","German station logistics"],["Foreign provisions","National module stores"],["Fresh supplement","Hydroponic greens and selected vegetables"],["Full food independence","No"],["Principal shared venue","Station messes"],["Safety concerns","Fire, crumbs, contamination, and waste"],["Menus and ration scales","Open"]]
  }),

  "raumhafen-medical-service": raumhafenLifeArticle({
    title:"Medical service of the Orbitaler Raumhafen",infoboxKicker:"Station health, emergency care, and multinational medicine",
    lead:"The medical service of the Orbitaler Raumhafen provides preventive monitoring, occupational medicine, emergency stabilization, dental and psychological care, quarantine, and coordination with evacuation vehicles. German physicians control station-wide medical response, while national modules retain their own clinicians and confidential records for ordinary care.",
    canon:"Physicians, shared emergency authority, long-duration medicine, foreign life-science work, and later family accommodation are established. Medical command structure, staffing, facilities, evacuation thresholds, and record-sharing rules are working extrapolation.",
    sections:[
      {id:"mission",title:"Mission",html:"<p>The service keeps residents fit for work and prevents minor illness from becoming a transport emergency. Screening begins before launch and continues through daily observation, scheduled examination, and postflight rehabilitation.</p>"},
      {id:"hazards",title:"Characteristic hazards",html:"<p>Radiation, bone and muscle loss, fluid shift, sleep disruption, motion sickness, decompression, burns, toxic exposure, eye injury, infection, dental pain, and psychological strain shape the medical workload.</p>"},
      {id:"clinic",title:"Clinic and distributed equipment",html:"<p>A central German clinic holds the strongest diagnostic, surgical, pharmacy, and isolation capability. Emergency kits, oxygen, defibrillation equipment, splints, pressure dressings, and telemedical links are distributed through the station.</p>"},
      {id:"national",title:"National medical autonomy",html:"<p>Foreign module clinicians handle routine care and national records. A condition threatening life support, quarantine, safe duty, or evacuation crosses into station-wide authority and requires disclosure sufficient for common safety.</p>"},
      {id:"mental",title:"Psychological health",html:"<p>Private consultation, sleep protection, workload review, conflict mediation, communication with home, and the ability to remove a resident from sensitive duty form part of medicine. Confidentiality is valued and constrained by the station's security culture.</p>"},
      {id:"evacuation",title:"Medical evacuation",html:"<p>Vehicles and launch windows limit the meaning of emergency transport. The clinic must stabilize patients for hours or days, decide whether a return vehicle can safely carry them, and preserve refuge capacity for a larger station accident.</p>"},
      {id:"research",title:"Medicine as research",html:"<p>Italian and Japanese laboratories study radiation, closed environments, exercise, nutrition, sleep, immunity, and long-duration physiology. Residents are both patients and research subjects, requiring national consent rules and station safety review.</p>"},
      {id:"families",title:"Families and reproductive policy",html:"<p>The arrival of spouses and dependents forces the service beyond astronaut medicine into pediatrics, reproductive counseling, chronic care, and ordinary family health. Pregnancy aboard the station remains highly restricted before the ring matures.</p>"}
    ],
    related:[{href:"raumhafen-families-dependents.html",kicker:"Later patient population",label:"Families and Dependents aboard the Raumhafen"},{href:"raumhafen-emergency-customs.html",kicker:"Mass-casualty practice",label:"Raumhafen Emergency Customs"},{href:"space-medicine.html",kicker:"Research field",label:"Space Medicine"}],
    facts:[["Principal provider","German station medical service"],["Foreign routine care","National module clinicians"],["Core functions","Prevention, stabilization, quarantine, dentistry, and mental health"],["Central authority trigger","Common safety or evacuation"],["Evacuation","Vehicle- and window-limited"],["Research partners","Italian and Japanese modules"],["Later expansion","Family and pediatric care"],["Formal organization and staffing","Open"]]
  }),

  "raumhafen-worship": raumhafenLifeArticle({
    title:"Worship aboard the Orbitaler Raumhafen",category:"Religion in space",infoboxKicker:"Religious observance within a German international station",
    lead:"Worship aboard the Orbitaler Raumhafen consists of German Protestant and Catholic services, SS Order observance among qualified personnel, Italian Catholic chaplaincy, Japanese Buddhist and Shinto practice, private devotion, and memorial rites adapted to a shared industrial station. No tradition receives civil command over the multinational community.",
    canon:"Catholic orbital chaplaincy, Germany's plural religious order, Japanese national modules, and open worship arrangements are established. This article supplies a working institutional reconstruction; chapel dedications, clergy rosters, calendars, and exact accommodations remain open.",
    sections:[
      {id:"principle",title:"Accommodation rather than establishment",html:"<p>The station provides time, safe space, storage, communication, and access for recognized observance. German sovereignty does not make one religion the compulsory faith of foreign residents.</p>"},
      {id:"chapel",title:"Shared chapel rooms",html:"<p>Early worship uses convertible quiet rooms with secured furnishings and strict fire controls. Later construction permits more stable chapels and contemplation rooms, though space remains too valuable for every tradition to receive a large dedicated sanctuary.</p>"},
      {id:"christian",title:"Christian services",html:"<p>German Protestant and Catholic clergy serve through visits and rotating chaplaincy. Italian personnel strengthen the Catholic presence. Communion, confession, pastoral counseling, scripture, hymnody, and feast days adapt to shift work and limited physical resources.</p>"},
      {id:"order",title:"SS Order observance",html:"<p>Order Faith personnel may conduct oath anniversaries, memorial recitations, seasonal observances, and private study under their own institutional rules. Foreign residents are not required to participate, and station command distinguishes Order ceremony from common civic ritual.</p>"},
      {id:"japanese",title:"Japanese practice",html:"<p>Japanese residents maintain private or small-group Buddhist and Shinto observance, household memorial forms, and national commemorations. Permanent shrines, ritual objects, flame, smoke, food offerings, and purification practices require adaptation to station safety.</p>"},
      {id:"time",title:"Calendars and time",html:"<p>Religious days follow terrestrial calendars tied to the relevant community. Station clocks, orbital sunrise, and rotating shifts complicate the choice of service hour but do not create a new independent sacred calendar.</p>"},
      {id:"pastoral",title:"Pastoral care",html:"<p>Clergy and trained lay coordinators counsel residents through isolation, family strain, fear, guilt, illness, death, and political tension. Confidential ministry exists beside medical and security reporting duties whose boundaries can be contested.</p>"},
      {id:"common",title:"Common memorial observance",html:"<p>During a station death or disaster, national and religious services may occur separately before a common silence and reading of names. The common act honors the dead without requiring a shared creed.</p>"}
    ],
    related:[{href:"orbital-catholic-chaplaincy.html",kicker:"Catholic institution",label:"Orbital Catholic Chaplaincy"},{href:"ss-order-faith.html",kicker:"German Order tradition",label:"SS Order Faith"},{href:"raumhafen-memorial-practice.html",kicker:"Death and remembrance",label:"Memorial Practice aboard the Raumhafen"}],
    facts:[["Civil religious authority","None"],["Early worship space","Convertible quiet and chapel rooms"],["Christian provision","Protestant and Catholic chaplaincy"],["Order Faith","Voluntary institutional observance"],["Japanese provision","Buddhist, Shinto, and memorial practice"],["Common calendar","Station clock with terrestrial religious dates"],["Shared civic rite","Silence and reading of names"],["Dedications and clergy roster","Open"]]
  }),

  "raumhafen-media": raumhafenLifeArticle({
    title:"Media and communications aboard the Orbitaler Raumhafen",infoboxKicker:"News, entertainment, personal contact, and controlled information",
    lead:"Media aboard the Orbitaler Raumhafen combines German station bulletins, national news services, delayed entertainment libraries, live event feeds, personal communications, technical publications, and carefully managed journalism. Residents share communications infrastructure while receiving sharply different accounts of politics on Earth.",
    canon:"German operating language, national module autonomy, satellite-centered communications, public prestige, and an open media culture are established. Channel names, publishers, censorship rules, correspondent rosters, and entertainment schedules are working extrapolation.",
    sections:[
      {id:"bulletins",title:"Station bulletins",html:"<p>Common bulletins carry traffic, maintenance, radiation, weather at launch sites, docking, shift, health, and emergency information in German with translated supplements. Operational messages receive priority over entertainment and political content.</p>"},
      {id:"national",title:"National news services",html:"<p>German, Italian, Japanese, and American groups receive their own broadcasts, recordings, newspapers, and agency summaries. The same terrestrial crisis can therefore appear in several incompatible narratives within adjoining compartments.</p>"},
      {id:"delay",title:"Transmission and delay",html:"<p>Earth-orbit contact is frequent, though capacity, security, antenna geometry, maintenance, and priority shape access. Recorded packages and cached libraries protect ordinary media use from link interruption.</p>"},
      {id:"personal",title:"Personal communication",html:"<p>Residents use scheduled voice, video, electronic mail, and recorded messages to reach families. Private contact is precious and subject to technical logging, national security controls, and the practical absence of complete privacy on station networks.</p>"},
      {id:"entertainment",title:"Entertainment libraries",html:"<p>Films, music, books, games, sports recordings, lectures, and serialized programs circulate through national libraries and informal exchange. Subtitles, dubbing, and UNICODE-compatible text make some works more portable than the political systems that produced them.</p>"},
      {id:"journalism",title:"Journalists and public access",html:"<p>Accredited reporters visit for commissioning, treaty, expedition, and disaster coverage. Their movement, photography, interviews, and transmissions are escorted near military, reactor, traffic, and proprietary areas.</p>"},
      {id:"rumor",title:"Rumor and the unofficial station public",html:"<p>Crew gossip crosses module boundaries faster than official statements. Transport delays, illnesses, failures, disputes, and diplomatic visits acquire informal versions that command can rarely suppress completely.</p>"},
      {id:"ring",title:"Promenadenring media culture",html:"<p>Larger public rooms support screenings, lectures, performances, live mission broadcasts, and shopfront terminals. The ring creates a station audience rather than several crews consuming media privately in their modules.</p>"}
    ],
    related:[{href:"weltnetz.html",kicker:"Later network layer",label:"Weltnetz"},{href:"consumer-telecommunications.html",kicker:"Terrestrial context",label:"Consumer Telecommunications"},{href:"raumhafen-recreation-common-spaces.html",kicker:"Public audience",label:"Recreation and Common Spaces aboard the Raumhafen"}],
    facts:[["Common bulletin language","German"],["National news","Supplied by module governments"],["Personal contact","Scheduled voice, video, mail, and recordings"],["Entertainment","Cached multinational libraries"],["Journalist access","Accredited and escorted"],["Operational priority","Safety and traffic messages"],["Privacy","Limited by logging and security"],["Named channels and publications","Open"]]
  }),

  "raumhafen-recreation-common-spaces": raumhafenLifeArticle({
    title:"Recreation and common spaces aboard the Orbitaler Raumhafen",infoboxKicker:"Exercise, sociability, leisure, and public circulation",
    lead:"Recreation and common spaces aboard the Orbitaler Raumhafen provide exercise, psychological relief, informal diplomacy, and the repeated encounters through which a multinational workforce becomes a community. Gyms, observation windows, messes, libraries, quiet rooms, gardens, clubs, and the Promenadenring counter the isolation of work inside sealed industrial compartments.",
    canon:"Exercise, shared work, inter-module camaraderie, and Promenadenring public circulation are established. Specific clubs, venues, sports, shops, performance programs, and access rules are working extrapolation.",
    sections:[
      {id:"need",title:"Recreation as an operating need",html:"<p>Exercise protects health, while leisure protects judgment and cooperation. Command therefore treats rest, private time, and social space as parts of readiness rather than rewards left over after work.</p>"},
      {id:"exercise",title:"Exercise facilities",html:"<p>Resistance machines, cycle devices, treadmills, medical centrifuges, and supervised routines dominate physical recreation. Informal competitions develop around endurance and consistency rather than sports requiring large open fields.</p>"},
      {id:"windows",title:"Observation spaces",html:"<p>Protected windows and camera walls remain among the most valued public places. Earth, the Moon, visiting spacecraft, construction, and the curve of the station provide a shared spectacle that crosses ideology easily.</p>"},
      {id:"clubs",title:"Clubs and voluntary groups",html:"<p>Language circles, chess, cards, music, amateur radio, photography, model building, reading, astronomy, and technical societies fit limited volume. National groups organize many activities and admit foreign colleagues selectively.</p>"},
      {id:"quiet",title:"Quiet and solitude",html:"<p>Not all recreation is social. Residents reserve quiet rooms, headphones, reading time, private correspondence, religious space, and solitary views as relief from constant proximity.</p>"},
      {id:"diplomacy",title:"Informal diplomacy",html:"<p>A shared meal, repair favor, game, film, or exercise session can build trust unavailable in formal meetings. The same spaces also transmit rumor and sharpen resentment after events on Earth.</p>"},
      {id:"access",title:"Access and segregation",html:"<p>Common rooms are open according to duty, security, capacity, and national agreements. Military areas, laboratories, reactor sections, and some national clubs remain restricted.</p>"},
      {id:"ring",title:"The Promenadenring",html:"<p>The ring enlarges walking, shops, gardens, performances, cafés, and public ceremony. Its most important novelty is purposeless circulation: residents can encounter one another while off duty instead of moving only between assigned compartments.</p>"}
    ],
    related:[{href:"raumhafen-food-messes.html",kicker:"Shared daily venue",label:"Food and Messes aboard the Raumhafen"},{href:"raumhafen-media.html",kicker:"Entertainment and events",label:"Raumhafen Media and Communications"},{href:"promenadenring.html",kicker:"Mature public district",label:"Promenadenring"}],
    facts:[["Primary purposes","Health, morale, and social cohesion"],["Core facilities","Exercise, observation, libraries, quiet rooms, and clubs"],["Characteristic sports","Individual and machine-based"],["National activities","Common"],["Shared access","Controlled by duty, capacity, and security"],["Major social expansion","Promenadenring"],["Defining innovation","Off-duty public circulation"],["Named clubs and venues","Open"]]
  }),

  "raumhafen-emergency-customs": raumhafenLifeArticle({
    title:"Emergency customs of the Orbitaler Raumhafen",infoboxKicker:"Drills, alarms, refuge, command, and post-incident practice",
    lead:"The emergency customs of the Orbitaler Raumhafen are the repeated drills, alarm conventions, refuge habits, command transfers, mutual-aid expectations, and post-incident practices that make German technical supremacy tolerable to foreign residents. They convert the legal rule of host emergency authority into a shared professional culture.",
    canon:"German technical emergency authority, common hazards, shared camaraderie, and interbloc rescue duties are established. Specific alarm codes, drill frequency, refuge allocation, investigation boards, and ceremonial customs are working extrapolation.",
    sections:[
      {id:"alarms",title:"Common alarms",html:"<p>Fire, pressure loss, toxic release, collision warning, radiation, medical emergency, power failure, and evacuation require distinct signals understood across languages. Spoken German orders accompany tones, lights, diagrams, and local indicators.</p>"},
      {id:"drills",title:"Drills and qualification",html:"<p>Residents rehearse hatch closure, breathing apparatus, fire response, casualty movement, refuge entry, vehicle boarding, manual communication, and loss of power. Foreign modules join common drills while retaining additional national exercises.</p>"},
      {id:"command",title:"Emergency command",html:"<p>The German station commander or delegated technical officer may override ordinary module schedules, isolate compartments, shed loads, reroute traffic, and order entry. Foreign liaison officers remain beside command to translate conditions and protect national knowledge where time permits.</p>"},
      {id:"refuge",title:"Refuge and distributed survival",html:"<p>Emergency air, water, food, medical kits, suits, communications, and safe compartments are distributed so one damaged section cannot remove every option. Residents learn the nearest refuge for each place they work and sleep.</p>"},
      {id:"mutual",title:"Mutual aid across module lines",html:"<p>The nearest qualified responder acts first regardless of nationality. Equipment compatibility and shared training allow a Japanese physician, Italian engineer, German fire team, or American vehicle crew to assist before diplomatic permission can be sought.</p>"},
      {id:"vehicles",title:"Vehicles and evacuation",html:"<p>Docked craft serve as lifeboats only within their capacity, readiness, and orbital limits. Command avoids the false promise that every resident can depart immediately and instead plans to preserve pressure, refuge, and repair capability.</p>"},
      {id:"after",title:"After the immediate danger",html:"<p>National authority resumes when the hazard is controlled. Logs are secured, witnesses separated where necessary, injured personnel treated, families notified, and technical evidence shared through negotiated boards.</p>"},
      {id:"culture",title:"Professional memory",html:"<p>Serious incidents produce revised checklists, informal sayings, anniversary drills, and stories about exemplary or failed conduct. Emergency memory becomes one of the few traditions shared across the whole station.</p>"}
    ],
    related:[{href:"raumhafen-jurisdiction.html",kicker:"Legal authority",label:"Jurisdiction aboard the Raumhafen"},{href:"cross-bloc-rescue-duty.html",kicker:"International obligation",label:"Cross-Bloc Rescue Duty"},{href:"raumhafen-memorial-practice.html",kicker:"Fatal incidents",label:"Memorial Practice aboard the Raumhafen"}],
    facts:[["Final technical authority","German station command"],["Common alarm language","German plus tones, lights, and diagrams"],["Drill participation","All resident module groups"],["Refuge principle","Distributed survival capacity"],["First response","Nearest qualified personnel"],["Docked craft","Conditional lifeboats"],["Post-incident jurisdiction","Returns to ordinary national order"],["Exact codes and manuals","Open"]]
  }),

  "raumhafen-families-dependents": raumhafenLifeArticle({
    title:"Families and dependents aboard the Orbitaler Raumhafen",infoboxKicker:"Household residence in the mature orbital district",
    lead:"Families and dependents aboard the Orbitaler Raumhafen appear gradually as long tours, the Promenadenring, improved medicine, and larger quarters turn a harbor into a place of residence. Their presence marks the boundary between permanent occupation and settlement while remaining tightly controlled by transport, radiation, education, and evacuation limits.",
    canon:"The Promenadenring's inhabited district, later family accommodation, and movement from bases toward settlement are established. Admission dates, numbers, pregnancy policy, schools, child residents, and citizenship rules are working extrapolation and remain open in detail.",
    sections:[
      {id:"before",title:"The crew-only station",html:"<p>Early Raumhafen occupation assumes medically selected adults on bounded tours. Marriage and parenthood exist on Earth, expressed through leave and communications rather than co-residence.</p>"},
      {id:"spouses",title:"Spousal residence",html:"<p>Long-serving specialists create pressure for joint postings. The first approved spouses are likely independently qualified workers whose presence can be justified through employment as well as family unity.</p>"},
      {id:"dependents",title:"Admission of dependents",html:"<p>Non-working dependents require spare transport, refuge, medical capacity, private quarters, food, exercise, and supervision. Approval therefore remains exceptional until the Promenadenring supplies genuine residential depth.</p>"},
      {id:"children",title:"Children",html:"<p>A child aboard the station needs education, play, health monitoring, protected circulation, and an evacuation plan designed for size and developmental stage. Small numbers favor tutors and mixed-age instruction over a large formal school.</p>"},
      {id:"pregnancy",title:"Pregnancy and birth",html:"<p>Pregnancy is discouraged or prohibited through much of the station's early history because radiation, partial gravity, emergency evacuation, and fetal medicine remain uncertain. Later policy distinguishes conception, gestation, temporary residence, and emergency delivery.</p>"},
      {id:"national",title:"Nationality and family law",html:"<p>Marriage, custody, inheritance, education, and civil registration normally follow the responsible national government. A multinational marriage or birth aboard the German station creates choice-of-law and documentation questions that bilateral practice must settle.</p>"},
      {id:"work",title:"Family life around shift work",html:"<p>Households coordinate irregular shifts, communications with Earth, exercise, meals, and limited private space. Domestic labor remains real even where station utilities automate cooking, cleaning, air, water, and waste.</p>"},
      {id:"settlement",title:"From residence to settlement",html:"<p>Families make the ring socially different from a vessel. Shops, clinics, education, worship, recreation, and household memory begin to serve residents whose lives cannot be described as one mission.</p>"}
    ],
    related:[{href:"raumhafen-habitation.html",kicker:"Residential conditions",label:"Habitation aboard the Raumhafen"},{href:"raumhafen-medical-service.html",kicker:"Family health",label:"Raumhafen Medical Service"},{href:"extraterrestrial-settlement.html",kicker:"Wider transition",label:"Extraterrestrial Settlement"}],
    facts:[["Early resident population","Medically selected adult crews"],["First likely spouses","Independently qualified workers"],["Dependents","Exceptional before the Promenadenring"],["Education","Small mixed-age provision; working"],["Pregnancy","Highly restricted"],["Ordinary family law","Responsible national government"],["Major enabling infrastructure","Promenadenring"],["Population and admission dates","Open"]]
  }),

  "raumhafen-memorial-practice": raumhafenLifeArticle({
    title:"Death and memorial practice aboard the Orbitaler Raumhafen",category:"Death and commemoration",infoboxKicker:"Fatality, remains, notification, inquiry, and remembrance",
    lead:"Death and memorial practice aboard the Orbitaler Raumhafen combines technical recovery, medical and legal certification, national notification, religious rites, common remembrance, and the operational lesson drawn from a fatal incident. The station's most durable shared ceremony is the reading of names across national lines after the separate authorities have claimed their dead.",
    canon:"Shared hazard, divided national jurisdiction, religious plurality, and the importance of names in German memorial culture are established. Recovery rules, disposition of remains, memorial sites, and common ceremony are working extrapolation.",
    sections:[
      {id:"scene",title:"The death scene",html:"<p>Rescue and station safety take priority over ceremony. Responders secure pressure, fire, radiation, power, and traffic before medical staff certify death and investigators preserve evidence.</p>"},
      {id:"authority",title:"Certification and jurisdiction",html:"<p>German technical command controls the hazardous scene. Medical certification and ordinary legal jurisdiction normally follow the deceased person's responsible module government, with mixed boards where shared systems are involved.</p>"},
      {id:"remains",title:"Recovery and remains",html:"<p>Where recovery is possible, remains are secured in a sealed compartment or return container until transport to Earth. Fire, decompression, vehicle loss, or inaccessible orbit may prevent complete recovery.</p>"},
      {id:"notification",title:"Notification",html:"<p>Families hear through national authorities rather than station rumor or public broadcast. Personal effects, final messages, medical records, and official accounts are handled separately under the deceased person's law.</p>"},
      {id:"rites",title:"Religious and national rites",html:"<p>Catholic, Protestant, Order Faith, Buddhist, Shinto, secular, and other observances follow the person and community involved. Foreign colleagues may attend by invitation or hold a parallel remembrance.</p>"},
      {id:"common",title:"The common reading of names",html:"<p>After separate rites, the station gathers or joins by link for a common silence and reading of every name. Rank and nationality are stated, while no theological explanation is imposed upon all residents.</p>"},
      {id:"memorial",title:"Memorial places",html:"<p>Names may be entered in a station register and later displayed in a Promenadenring memorial space. The register distinguishes people who died aboard, during approach, in construction, and on missions supported by the harbor.</p>"},
      {id:"lesson",title:"Inquiry and operational memory",html:"<p>A fatality remains incomplete in institutional terms until the investigation changes design, training, maintenance, traffic, or command practice. Revised procedure becomes part of the memorial obligation owed to the dead.</p>"}
    ],
    related:[{href:"raumhafen-worship.html",kicker:"Religious setting",label:"Worship aboard the Raumhafen"},{href:"raumhafen-emergency-customs.html",kicker:"Incident response",label:"Raumhafen Emergency Customs"},{href:"orbital-law.html",kicker:"Wider jurisdiction",label:"Orbital Law"}],
    facts:[["Immediate priority","Rescue and scene safety"],["Technical scene authority","German"],["Medical and ordinary legal authority","Responsible national government"],["Disposition","Return to Earth where feasible"],["Common ceremony","Silence and reading of names"],["Permanent record","Station memorial register; working"],["Institutional obligation","Corrective inquiry"],["Exact memorial and procedure","Open"]]
  })
});

const addRaumhafenLifeRelated = (slug,items) => {
  const article=window.deepArticles[slug];
  if(!article)return;
  article.related=article.related||[];
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
};

addRaumhafenLifeRelated("international-community-orbitaler-raumhafen",[
  {href:"raumhafen-resident-service-corps.html",kicker:"Station workforce",label:"Raumhafen Resident Service Corps"},
  {href:"raumhafen-worship.html",kicker:"Religious life",label:"Worship aboard the Raumhafen"},
  {href:"raumhafen-media.html",kicker:"Information life",label:"Raumhafen Media and Communications"},
  {href:"raumhafen-families-dependents.html",kicker:"Later residence",label:"Families and Dependents aboard the Raumhafen"}
]);
addRaumhafenLifeRelated("orbitaler-raumhafen",[
  {href:"raumhafen-resident-service-corps.html",kicker:"Everyday workforce",label:"Raumhafen Resident Service Corps"},
  {href:"raumhafen-emergency-customs.html",kicker:"Operating culture",label:"Raumhafen Emergency Customs"}
]);
addRaumhafenLifeRelated("raumhafen-jurisdiction",[
  {href:"raumhafen-emergency-customs.html",kicker:"Authority in practice",label:"Raumhafen Emergency Customs"},
  {href:"raumhafen-families-dependents.html",kicker:"Family law",label:"Families and Dependents aboard the Raumhafen"}
]);
addRaumhafenLifeRelated("promenadenring",[
  {href:"raumhafen-habitation.html",kicker:"Residential system",label:"Habitation aboard the Raumhafen"},
  {href:"raumhafen-recreation-common-spaces.html",kicker:"Public life",label:"Recreation and Common Spaces aboard the Raumhafen"}
]);
