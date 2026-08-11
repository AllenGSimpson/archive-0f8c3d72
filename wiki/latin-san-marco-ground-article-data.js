window.deepArticles = window.deepArticles || {};

const sanMarcoGroundSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Latin Space Community and Italian East Africa"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — San Marco and Latin orbital development"},
  {href:"../transcript.md",label:"Master Transcript — San Marco expansion, 1970–1975"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — Latin space institutions"}
];

const sanMarcoGroundDiagram = {
  src:"assets/diagrams/san-marco-ground-system.svg",
  alt:"Diagram showing Kismayo, the coastal heavy-launch complex, offshore platforms, security and medical districts, and the wider recovery network",
  caption:"San Marco is a linked coastal system rather than a single pad: city, port, airfield, assembly, range, medical, security, and offshore operations share one launch corridor"
};

const sanMarcoGroundArticle = config => ({
  category:"Latin spaceflight",
  eyebrow:"San Marco Space Centre · East African ground system",
  infoboxKicker:"Equatorial spaceport institution",
  landscape:sanMarcoGroundDiagram,
  ...config,
  sources:[...sanMarcoGroundSources,...(config.additionalSources || [])],
  categories:config.categories || ["San Marco Space Centre","Italian East Africa","Latin Space Community","1970s"]
});

Object.assign(window.deepArticles, {
  "kismayo": sanMarcoGroundArticle({
    title:"Kismayo",
    category:"Cities of Italian East Africa",
    infoboxKicker:"Port city and aerospace center",
    lead:"Kismayo is the principal southern port of Italian Somalia and the urban center beside the San Marco equatorial space complex. Its harbor, airfields, roads, military installations, agricultural hinterland, and multinational technical population connect the Mogadishu corridor to the Indian Ocean and the Latin Space Community.",
    canon:"Kismayo's role as the southern node of Italian Somalia; its port, air access, military security, agricultural connections, and place beside the San Marco range; the Mogadishu–Kismayo corridor; and unequal European and African participation in the space economy are established. Population, municipal boundaries, official Italian form of the name, mayor or governor, neighborhoods, port capacity, local institutions, and precise relationship to the launch district remain open.",
    sections:[
      {id:"setting",title:"Southern port of Italian Somalia",html:"<p>Kismayo anchors the southern end of Italian Somalia's principal coastal corridor. The port connects local agriculture, military supply, Indian Ocean shipping, and traffic toward Portuguese Mozambique with Mogadishu and the wider East African imperial system.</p>"},
      {id:"corridor",title:"The Mogadishu–Kismayo corridor",html:"<p>Roads, air routes, radio, coastal shipping, and administrative posts link Kismayo to <a href='mogadishu.html'>Mogadishu</a> and onward toward the Ethiopian interior. The route carries ordinary commerce as well as propellants, machinery, personnel, and range supplies.</p>"},
      {id:"port",title:"Port and airfield functions",html:"<p>The harbor supports cargo handling, fuel, naval patrol, range vessels, recovery coordination, and visiting Community ships. Nearby airfields move engineers, astronauts, medical teams, priority components, and emergency aircraft.</p><p>Exact facilities and capacities remain open.</p>"},
      {id:"space",title:"The San Marco transformation",html:"<p>Surveys beginning in 1959–1960 and expansion after 1970 turn the surrounding coast into the <a href='san-marco-space-centre.html'>San Marco Space Centre</a>. Heavy coastal launch facilities supplement offshore platforms, while tracking, assembly, medicine, security, housing, and communications spread through a wider district.</p>"},
      {id:"population",title:"A multinational technical population",html:"<p>Italian, Occitan, Spanish, and Portuguese engineers, officials, crews, contractors, and families live beside Italian colonial administrators, military personnel, Somali residents, and workers recruited from elsewhere in East Africa. The resulting city is more linguistically and institutionally mixed than the public image of an Italian range suggests.</p>"},
      {id:"inequality",title:"Unequal urban development",html:"<p>Protected technical housing, utilities, clinics, transport, and schools concentrate around European and senior Community personnel. African workers and neighborhoods receive employment and infrastructure unevenly, while promotion and civic authority remain constrained by the colonial order.</p>"},
      {id:"security",title:"A city beside a restricted range",html:"<p>Launch safety, propellant storage, military payloads, shipping exclusion zones, and fears of sabotage bring checkpoints, patrols, controlled roads, and restricted waterfronts. The security system shapes daily movement even outside the formal <a href='san-marco-range-security-district.html'>range district</a>.</p>"},
      {id:"status",title:"Kismayo by 1985",html:"<p>By 1985 Kismayo is simultaneously a colonial port, a military logistics node, and the principal service city of Latin crewed spaceflight. Its prosperity is real, but the distribution of authority and risk makes it one of the clearest examples of modern infrastructure deepening imperial inequality.</p>"}
    ],
    related:[{href:"italian-somalia.html",kicker:"Territory",label:"Italian Somalia"},{href:"mogadishu.html",kicker:"Northern corridor city",label:"Mogadishu"},{href:"san-marco-space-centre.html",kicker:"Aerospace complex",label:"San Marco Space Centre"},{href:"san-marco-coastal-launch-complex.html",kicker:"Heavy-launch district",label:"San Marco Coastal Launch Complex"},{href:"san-marco-personnel-community.html",kicker:"Spaceport society",label:"San Marco Personnel Community"},{href:"african-technical-service-san-marco.html",kicker:"Local workforce",label:"African Technical Service at San Marco"},{href:"east-african-corridor-system.html",kicker:"Imperial infrastructure",label:"East African Corridor System"}],
    facts:[["Territory","Italian Somalia"],["Political system","Italian East Africa"],["Primary role","Southern port and aerospace service city"],["Northern connection","Mogadishu"],["Ocean","Indian Ocean"],["Principal aerospace complex","San Marco"],["Major expansion","1970–1975"],["Population and municipal government","Not established"]]
  }),

  "san-marco-offshore-launch-range": sanMarcoGroundArticle({
    title:"San Marco offshore launch range",
    category:"Spaceports",
    infoboxKicker:"Equatorial maritime launch range",
    lead:"The San Marco offshore launch range is the original maritime portion of the Community's equatorial spaceport: launch and support platforms operating off the Kismayo coast for sounding rockets, qualification work, and small-to-medium orbital missions. It remains active after heavier vehicles move to coastal pads.",
    canon:"The offshore-platform concept, equatorial eastward launch corridor, survey work from 1959–1960, use for early and small-to-medium missions, connection to coastal command and tracking, and continued utility after the 1970–1975 expansion are established. Platform names, number, construction, coordinates, operators, vehicle limits, launch register, accidents, and 1985 configuration remain open.",
    sections:[
      {id:"origin",title:"The maritime range concept",html:"<p><a href='luigi-broglio.html'>Luigi Broglio</a> favors an equatorial range that combines coastal logistics with platforms at sea. Water around the launch point provides separation from settlements and access to a broad eastward corridor.</p>"},
      {id:"geometry",title:"Equatorial launch geometry",html:"<p>Eastward launches near the equator gain the greatest practical assistance from Earth's rotation. The Indian Ocean corridor also permits stages and failed vehicles to fall away from densely settled land when range rules are observed.</p>"},
      {id:"platforms",title:"Launch and support platforms",html:"<p>The range includes at least one launch platform and the command, preparation, tracking, communications, safety, and maritime support needed to operate it. The exact platform inventory and whether individual structures retain historical names are not fixed.</p>"},
      {id:"missions",title:"Early missions and qualification",html:"<p>Sounding rockets, launcher qualification, atmospheric and geodetic satellites, weather missions, communications experiments, and recoverable-capsule work establish the range's credibility before the Concordia era.</p>"},
      {id:"coast",title:"Dependence on the coast",html:"<p>Assembly, storage, personnel, weather forecasting, mission control, air access, port services, and medical support remain ashore. The offshore range is one operating zone inside the larger <a href='san-marco-space-centre.html'>San Marco system</a>.</p>"},
      {id:"safety",title:"Maritime range safety",html:"<p>Range authorities coordinate shipping notices, exclusion zones, weather holds, tracking, destruct or abort authority, firefighting, evacuation, and recovery craft. The division of command among Italian range officers, naval units, and Community mission teams remains open.</p>"},
      {id:"heavy",title:"Why heavy launch moves ashore",html:"<p>Concordia and later station hardware require larger vehicles, propellant systems, assembly buildings, and protected ground infrastructure than the offshore platforms can conveniently support. The <a href='san-marco-coastal-launch-complex.html'>coastal complex</a> accepts that work.</p>"},
      {id:"legacy",title:"Continuing role",html:"<p>Moving heavy missions ashore does not make the offshore range obsolete. Smaller satellites, tests, training, and specialized launches continue to benefit from established crews, maritime safety practice, and equatorial geometry.</p>"}
    ],
    related:[{href:"san-marco-space-centre.html",kicker:"Parent complex",label:"San Marco Space Centre"},{href:"san-marco-coastal-launch-complex.html",kicker:"Heavy-launch counterpart",label:"Coastal Launch Complex"},{href:"kismayo.html",kicker:"Service city",label:"Kismayo"},{href:"first-independent-latin-satellite.html",kicker:"Foundational orbit",label:"First Independent Latin Satellite"},{href:"latin-weather-satellite-program.html",kicker:"Early service",label:"Latin Weather Satellite Program"},{href:"latin-launch-system.html",kicker:"Vehicle system",label:"Latin Launch System"},{href:"san-marco-range-security-district.html",kicker:"Range control",label:"San Marco Range Security District"}],
    facts:[["Form","Offshore equatorial launch range"],["Coastal base","Kismayo region"],["Survey work","1959–1960"],["Principal early use","Sounding rockets and orbital qualification"],["Later use","Small and medium launches"],["Launch direction","Principally eastward"],["Heavy-launch successor","Coastal launch complex"],["Platform inventory","Not established"]]
  }),

  "san-marco-coastal-launch-complex": sanMarcoGroundArticle({
    title:"San Marco coastal launch complex",
    category:"Spaceports",
    infoboxKicker:"Heavy-launch and final-assembly district",
    lead:"The San Marco coastal launch complex is the heavy-launch portion of the equatorial center built between 1970 and 1975 near Kismayo. It adds larger pads, propellant storage, final assembly, tracking, telemetry, air and port access, and protected support districts beyond the capacity of the original offshore platforms.",
    canon:"Construction during 1970–1975; heavier coastal pads; propellant storage; final-assembly buildings; tracking and telemetry; medical and quarantine facilities; recovery coordination; housing; military security; nearby airfields and ports; location near Kismayo or the wider Italian Somali coast; and support for Concordia-A are established. Exact site, name, layout, pads, vehicles, contractors, labor totals, cost, accidents, and commissioning dates remain open.",
    sections:[
      {id:"reason",title:"Why a coastal complex was required",html:"<p>The offshore system could qualify independent launch and support modest spacecraft. Concordia cores, crew vehicles, cargo craft, and later station modules required larger propellant loads, assembly halls, test equipment, protected transport, and emergency services.</p>"},
      {id:"construction",title:"Expansion from 1970 to 1975",html:"<p>The German Moon landing accelerates an existing development program. Construction proceeds while Aquila, Concordia, Mercurius, the tracking network, and common industrial standards are still being defined.</p>"},
      {id:"pads",title:"Pads and propellant systems",html:"<p>Heavy pads, storage areas, transfer systems, service structures, lightning protection, firefighting, and range-control links support larger Community launchers. Their number, propellants, and technical layout remain open.</p>"},
      {id:"assembly",title:"Final assembly and acceptance",html:"<p>Italian propulsion and integration, Spanish structures, Occitan guidance and telemetry, and other national components meet in final assembly. Incoming equipment must pass common inspection before it can enter a controlled vehicle or payload flow.</p>"},
      {id:"transport",title:"Port, airfield, and road access",html:"<p>Kismayo's harbor and nearby airfields receive bulky cargo, priority instruments, crews, and specialists. Controlled roads connect storage, assembly, pads, tracking, housing, and medical facilities while the wider corridor connects Mogadishu and the interior.</p>"},
      {id:"operations",title:"Launch operations",html:"<p>Mission control, range safety, telemetry, weather, tracking, security, medical support, and recovery coordination operate as one chain. A hold imposed by any critical service can delay hardware representing all four member states.</p>"},
      {id:"missions",title:"Concordia and Aquila",html:"<p><a href='concordia-a.html'>Concordia-A</a> enters orbit in 1975 through the expanded system. Aquila qualification and the eventual 1984 crewed mission add escape, quarantine, rescue, recovery, and stricter acceptance requirements.</p>"},
      {id:"empire",title:"A Community facility on imperial ground",html:"<p>The complex is presented as a shared gateway of Latin civilization. Its land, construction labor, local services, policing, and exposure to launch danger belong to Italian East Africa, while senior command and most public credit remain European.</p>"}
    ],
    related:[{href:"san-marco-space-centre.html",kicker:"Parent complex",label:"San Marco Space Centre"},{href:"san-marco-offshore-launch-range.html",kicker:"Original range",label:"Offshore Launch Range"},{href:"kismayo.html",kicker:"Port and city",label:"Kismayo"},{href:"latin-launch-system.html",kicker:"Launch vehicles",label:"Latin Launch System"},{href:"concordia-a.html",kicker:"1975 milestone",label:"Concordia-A"},{href:"aquila-program.html",kicker:"Crewed program",label:"Aquila Program"},{href:"san-marco-range-security-district.html",kicker:"Protected operations",label:"Range Security District"}],
    facts:[["Construction","1970–1975"],["Location","Kismayo region · Italian Somalia"],["Purpose","Heavy launch and final assembly"],["Earlier counterpart","Offshore launch range"],["First major station mission","Concordia-A · 1975"],["Ground links","Port · airfields · roads"],["Range command","Italian-led"],["Exact pads and vehicle limits","Not established"]]
  }),

  "san-marco-range-security-district": sanMarcoGroundArticle({
    title:"San Marco range security district",
    category:"Spaceflight security",
    infoboxKicker:"Protected military and range-safety zone",
    lead:"The San Marco range security district is the restricted military and administrative zone protecting launch vehicles, propellants, tracking stations, crews, classified payload interfaces, and downrange safety around the Kismayo spaceport. It combines ordinary range safety with Italian imperial security.",
    canon:"A military security district within the 1970–1975 expansion; Italian range command; protected launch, assembly, propellant, tracking, medical, housing, airfield, port, and maritime operations; civil and military payload separation; and unequal local authority are established. Formal district name, boundary, commander, units, police powers, pass system, exclusion schedule, incidents, and relationship to local government remain open.",
    sections:[
      {id:"purpose",title:"Two meanings of security",html:"<p>Range safety protects people and shipping from launch hazards. Military security protects vehicles, payloads, communications, propellants, plans, and personnel from espionage, sabotage, theft, or attack. San Marco requires both systems in the same territory.</p>"},
      {id:"zones",title:"Restricted zones",html:"<p>Pads, assembly buildings, propellant areas, tracking stations, command facilities, medical isolation areas, armories, controlled roads, waterfronts, and air operations receive different access rules. Exact boundaries and pass categories remain open.</p>"},
      {id:"command",title:"Italian command and Community access",html:"<p>Italy retains range command and territorial sovereignty. Occitan, Spanish, and Portuguese personnel require dependable access to the systems they supply, forcing security officers to distinguish legitimate multinational work from unrestricted entry.</p>"},
      {id:"maritime",title:"Maritime and air control",html:"<p>Launch windows require shipping notices, sea exclusion areas, patrol craft, aircraft coordination, weather surveillance, and emergency clearance. Port and airfield traffic must be separated from hazardous operations without isolating Kismayo from ordinary commerce.</p>"},
      {id:"payloads",title:"Civil station and national payloads",html:"<p>Concordia is publicly civil and scientific. Italy keeps its most sensitive reconnaissance and command payloads in separate national spacecraft, creating compartmented work inside a site otherwise celebrated for Community cooperation.</p>"},
      {id:"labor",title:"Workforce screening and movement",html:"<p>Construction, maintenance, transport, catering, cleaning, fire response, and technical support depend heavily on African labor. Access and promotion remain more restricted for African workers, even where their work is essential to safe operation.</p>"},
      {id:"emergency",title:"Emergency authority",html:"<p>Fire, toxic release, launch failure, storm, medical emergency, or downrange danger can close roads, evacuate zones, hold a mission, and mobilize military and civil assets. The source does not yet assign final authority among range command, mission control, and territorial government.</p>"},
      {id:"politics",title:"Security and colonial rule",html:"<p>Protecting a hazardous strategic facility supplies practical reasons for tight controls. The same controls can conceal labor grievances, limit local movement, and place Community infrastructure beyond ordinary municipal scrutiny.</p>"}
    ],
    related:[{href:"san-marco-space-centre.html",kicker:"Protected complex",label:"San Marco Space Centre"},{href:"san-marco-coastal-launch-complex.html",kicker:"Primary zone",label:"Coastal Launch Complex"},{href:"san-marco-offshore-launch-range.html",kicker:"Maritime zone",label:"Offshore Launch Range"},{href:"kismayo.html",kicker:"Adjacent city",label:"Kismayo"},{href:"african-technical-service-san-marco.html",kicker:"Controlled workforce",label:"African Technical Service"},{href:"latin-launch-system.html",kicker:"Flight authority",label:"Latin Launch System"},{href:"italian-somalia.html",kicker:"Territorial jurisdiction",label:"Italian Somalia"}],
    facts:[["Established","During the 1970–1975 expansion"],["Territorial authority","Italian East Africa"],["Range command","Italian-led"],["Protected operations","Launch · assembly · propellant · tracking"],["Maritime function","Exclusion and patrol zones"],["Air function","Controlled flight and emergency access"],["Civil station","Concordia"],["Formal boundary and commander","Not established"]]
  }),

  "san-marco-medical-quarantine-complex": sanMarcoGroundArticle({
    title:"San Marco medical and quarantine complex",
    category:"Space medicine",
    infoboxKicker:"Preflight, abort, and recovery medical center",
    lead:"The San Marco medical and quarantine complex is the spaceport institution responsible for crew screening, preflight observation, isolation, abort support, recovery reception, and coordination with ships, aircraft, hospitals, and Community medical authorities. It links Italian life-support work to Portuguese maritime medicine.",
    canon:"Medical and astronaut-quarantine facilities in the 1970–1975 expansion; conservative crew medicine; Italian life-support integration; Portuguese maritime medicine and recovery leadership; support for launch abort and post-recovery care; and unequal questions of local staffing, housing, and public-health access are established. Formal name, buildings, beds, laboratories, medical director, quarantine periods, institutes, protocols, and casualty history remain open.",
    sections:[
      {id:"purpose",title:"Medicine at the launch site",html:"<p>Human flight requires a medical chain before the crew enters the capsule and after it leaves the recovery ship. The complex observes flight fitness, protects controlled environments, prepares for launch emergencies, and receives returning astronauts and biological materials.</p>"},
      {id:"screening",title:"Preflight screening and observation",html:"<p>Physicians monitor illness, injury, fatigue, sleep, stress, and other conditions that could endanger a mission. Conservative exposure limits and extensive screening reflect Italian and Vatican resistance to treating astronauts as expendable subjects.</p>"},
      {id:"quarantine",title:"Quarantine and controlled access",html:"<p>Crew, selected staff, equipment, and biological payloads can be isolated before or after flight. The source establishes quarantine facilities but not a universal duration or detailed contamination doctrine.</p>"},
      {id:"abort",title:"Launch-abort medicine",html:"<p>Fire, pad escape, toxic exposure, hard landing, sea impact, or off-course recovery require prepared triage, transport, and specialist care. Medical teams participate in rehearsals with range safety, firefighters, aircraft, ships, and capsule recovery crews.</p>"},
      {id:"recovery",title:"The Portuguese maritime connection",html:"<p>Portuguese-led tracking and recovery units stabilize and extract returning crews, begin care at sea, and transfer patients toward San Marco or another designated hospital. Weather and sea-state decisions are therefore medical decisions as well as operational ones.</p>"},
      {id:"engineering",title:"Life support as medical evidence",html:"<p>Italian life support, Spanish pressure and thermal systems, Occitan monitoring, and Portuguese recovery must be accepted together. Data from the Concordia ground article and uncrewed Concordia-A reduce machinery risks before human occupation.</p>"},
      {id:"local",title:"Local staff and public-health inequality",html:"<p>African nurses, technicians, drivers, cleaners, port workers, and other staff can be essential to medical operation while remaining outside senior authority. Protected astronaut medicine also contrasts with uneven health provision in surrounding communities.</p>"},
      {id:"legacy",title:"From Aquila to permanent occupation",html:"<p>Aquila I validates the launch-and-recovery chain in 1984. Stella Maris adds longer residence, radiation, workload, sleep, exercise, infection, mental health, and emergency-return planning, expanding the complex's role beyond short missions.</p>"}
    ],
    related:[{href:"latin-space-medicine.html",kicker:"Community specialty",label:"Latin Space Medicine"},{href:"san-marco-space-centre.html",kicker:"Parent complex",label:"San Marco Space Centre"},{href:"latin-tracking-recovery-network.html",kicker:"Maritime chain",label:"Tracking and Recovery Network"},{href:"concordia-human-endurance-program.html",kicker:"Orbital research",label:"Concordia Human-Endurance Program"},{href:"aquila-program.html",kicker:"Crew vehicle",label:"Aquila Program"},{href:"san-marco-personnel-community.html",kicker:"Resident population",label:"San Marco Personnel Community"},{href:"african-technical-service-san-marco.html",kicker:"Local workforce",label:"African Technical Service"}],
    facts:[["Built","During the 1970–1975 expansion"],["Location","San Marco · Kismayo region"],["Core functions","Screening · quarantine · abort · reception"],["Life-support lead","Italy"],["Maritime medicine lead","Portugal"],["First crewed culmination","Aquila I · 1984"],["Later long-duration role","Stella Maris"],["Formal institute name","Not established"]]
  }),

  "san-marco-personnel-community": sanMarcoGroundArticle({
    title:"San Marco personnel community",
    category:"Spaceflight society",
    infoboxKicker:"Multinational residential and working settlement",
    lead:"The San Marco personnel community is the multinational residential and occupational society formed around the Kismayo spaceport by Italian, Occitan, Spanish, Portuguese, and East African workers, officials, service personnel, families, and institutions. The term is descriptive; the source does not establish a separately incorporated company town.",
    canon:"Housing for personnel from all four core states; training and work in East Africa; European dominance of command, technical promotion, housing, and public credit; African labor throughout the range; a growing African technical workforce with bounded advancement; military security; and connections to Kismayo are established. Formal settlement name, population, neighborhoods, schools, churches, mosques, unions, municipal authority, family composition, and segregation rules remain open.",
    sections:[
      {id:"formation",title:"Formation during the spaceport expansion",html:"<p>The 1970–1975 build requires resident engineers, controllers, guards, physicians, technicians, construction crews, port workers, logisticians, teachers, clerks, and families. Temporary camps and colonial quarters develop into a continuing settlement around the range.</p>"},
      {id:"members",title:"Four Community contingents",html:"<p>Italian personnel dominate range command and mission integration. Occitans concentrate in computing, telemetry, guidance, and instruments. Spaniards work primarily in structures, fabrication, power, and testing. Portuguese personnel lead communications, weather, navigation, medicine, and recovery.</p>"},
      {id:"african",title:"African residents and workers",html:"<p>Somali and other East African residents supply construction, transport, port work, maintenance, services, security support, weather knowledge, and a growing share of skilled technical labor. Their presence is essential even where official photography centers Europeans.</p>"},
      {id:"housing",title:"Housing and protected infrastructure",html:"<p>Senior technical personnel receive reliable power, water, communications, transport, clinics, and controlled housing near their duties. The quality, allocation, and legal separation of quarters remain open, but access is established as unequal.</p>"},
      {id:"institutions",title:"Schools, worship, and daily life",html:"<p>A continuing multinational community requires schools, worship, shops, recreation, postal and banking services, languages, and family support. The exact institutions remain unwritten, while Catholic public life exists beside the Muslim society of Italian Somalia.</p>"},
      {id:"language",title:"Working languages",html:"<p>National teams use Italian, Occitan, Spanish, and Portuguese internally. Technical Latin governs shared interfaces, while Somali and other African languages persist in households, local commerce, and much of the labor force.</p>"},
      {id:"security",title:"Life inside a controlled district",html:"<p>Passes, launch closures, hazardous zones, compartmented payloads, and military patrols make access part of daily life. A resident may work for the spaceport while remaining excluded from the pad, command center, or protected housing.</p>"},
      {id:"politics",title:"A showcase and an imperial town",html:"<p>Visitors see a modern Latin city of science beside the equator. Residents experience a sharper hierarchy: four European states negotiate equality with one another inside an African colony whose local population does not receive equal authority.</p>"}
    ],
    related:[{href:"kismayo.html",kicker:"Host city",label:"Kismayo"},{href:"san-marco-space-centre.html",kicker:"Principal employer",label:"San Marco Space Centre"},{href:"african-technical-service-san-marco.html",kicker:"Workforce system",label:"African Technical Service"},{href:"san-marco-range-security-district.html",kicker:"Restricted geography",label:"Range Security District"},{href:"san-marco-medical-quarantine-complex.html",kicker:"Health institution",label:"Medical and Quarantine Complex"},{href:"italian-somalia.html",kicker:"Colonial society",label:"Italian Somalia"},{href:"technical-latin-in-spaceflight.html",kicker:"Interface language",label:"Technical Latin in Spaceflight"}],
    facts:[["Formation","Principally 1970–1975"],["Location","Kismayo spaceport district"],["European contingents","Italian · Occitan · Spanish · Portuguese"],["Local population","Somali and wider East African"],["Principal employer","San Marco Space Centre"],["Shared technical register","Technical Latin"],["Legal form","Not established"],["Population and settlement name","Not established"]]
  }),

  "african-technical-service-san-marco": sanMarcoGroundArticle({
    title:"African technical service at San Marco",
    category:"Labor history",
    infoboxKicker:"Colonial aerospace workforce",
    lead:"African technical service at San Marco is the body of skilled and semi-skilled work performed by Somali and other East African employees across construction, port and airfield logistics, tracking support, maintenance, weather, communications, medicine, safety, transport, and range services. It expands technical employment while preserving a European ceiling on authority and public recognition.",
    canon:"Dependence on East African land, labor, ports, roads, weather knowledge, and exposure to danger; African work throughout the range; a growing technical workforce; European dominance of command, promotion, housing, and credit; training with bounded advancement; and unequal local access are established. Formal labor corps, recruitment system, numbers, pay scales, job grades, unions, strikes, accidents, schools, named technicians, and senior-promotion exceptions remain open.",
    sections:[
      {id:"scope",title:"Work across the range",html:"<p>African employees build roads and facilities, handle cargo, maintain utilities, drive vehicles, support port and airfield operations, observe weather, assist communications and tracking, staff medical services, fight fires, clean controlled areas, and sustain housing and food systems.</p>"},
      {id:"recruitment",title:"Recruitment and training",html:"<p>The growing complex requires workers beyond the existing colonial service. Employers and technical schools train selected staff for electrical, mechanical, radio, medical, safety, and instrument-support duties. Exact recruitment rules and credentials remain open.</p>"},
      {id:"knowledge",title:"Local knowledge as technical knowledge",html:"<p>Weather, sea conditions, transport routes, languages, port practice, and the behavior of the surrounding coast contribute directly to safe launch and recovery. Official accounts often describe these contributions as support rather than engineering evidence.</p>"},
      {id:"promotion",title:"The promotion ceiling",html:"<p>European officers and engineers dominate senior range command, vehicle acceptance, program management, protected technical housing, and public representation. African advancement grows below that ceiling and varies by institution.</p>"},
      {id:"risk",title:"Exposure to risk",html:"<p>Construction hazards, propellants, fire, falling debris, launch failure, transport, and restricted emergency movement expose local workers and communities to dangers created by the program. Compensation, investigation, and casualty records have not been fixed.</p>"},
      {id:"status",title:"Colonial labor status",html:"<p>San Marco is operated for the Latin Space Community under Italian territorial rule. Workers therefore encounter Community technical standards through colonial labor law rather than through equal citizenship in a supranational institution.</p>"},
      {id:"recognition",title:"Public credit and historical memory",html:"<p>Program imagery emphasizes astronauts, European engineers, royal patrons, and multinational flags. The port, road, maintenance, weather, medical, and construction labor that makes launches possible receives less public recognition.</p>"},
      {id:"legacy",title:"A technical class with constrained authority",html:"<p>By 1985 San Marco has produced African technicians experienced in sophisticated infrastructure and multinational procedure. Their skills create opportunities inside the imperial economy and a growing contradiction between technical responsibility and restricted political authority.</p>"}
    ],
    related:[{href:"san-marco-space-centre.html",kicker:"Workplace",label:"San Marco Space Centre"},{href:"san-marco-personnel-community.html",kicker:"Residential setting",label:"San Marco Personnel Community"},{href:"kismayo.html",kicker:"Host city",label:"Kismayo"},{href:"italian-somalia.html",kicker:"Colonial jurisdiction",label:"Italian Somalia"},{href:"italian-east-africa.html",kicker:"Imperial system",label:"Italian East Africa"},{href:"san-marco-range-security-district.html",kicker:"Controlled access",label:"Range Security District"},{href:"san-marco-medical-quarantine-complex.html",kicker:"Medical employment",label:"Medical and Quarantine Complex"}],
    facts:[["Workforce","Somali and wider East African"],["Principal workplace","San Marco Space Centre"],["Core fields","Construction · logistics · maintenance · weather · medicine"],["Territorial law","Italian East Africa"],["Technical standards","Latin Space Community"],["Senior command","Predominantly European"],["Promotion","Growing but bounded"],["Numbers, pay, and formal organization","Not established"]]
  })
});

const addSanMarcoGroundRelated = (slug, item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["san-marco-space-centre",{href:"kismayo.html",kicker:"Host city",label:"Kismayo"}],
  ["italian-somalia",{href:"kismayo.html",kicker:"Southern port",label:"Kismayo"}],
  ["italian-east-africa",{href:"african-technical-service-san-marco.html",kicker:"Aerospace labor",label:"African Technical Service at San Marco"}],
  ["latin-launch-system",{href:"san-marco-coastal-launch-complex.html",kicker:"Heavy-launch base",label:"San Marco Coastal Launch Complex"}],
  ["latin-space-medicine",{href:"san-marco-medical-quarantine-complex.html",kicker:"Ground medical center",label:"San Marco Medical and Quarantine Complex"}],
  ["latin-astronaut-corps",{href:"san-marco-personnel-community.html",kicker:"East African training community",label:"San Marco Personnel Community"}],
  ["latin-tracking-recovery-network",{href:"san-marco-offshore-launch-range.html",kicker:"Range origin",label:"San Marco Offshore Launch Range"}],
  ["luigi-broglio",{href:"san-marco-offshore-launch-range.html",kicker:"Equatorial concept",label:"San Marco Offshore Launch Range"}],
  ["concordia-a",{href:"san-marco-coastal-launch-complex.html",kicker:"Launch base",label:"San Marco Coastal Launch Complex"}]
].forEach(([slug,item]) => addSanMarcoGroundRelated(slug,item));
