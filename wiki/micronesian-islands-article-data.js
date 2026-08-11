window.deepArticles = window.deepArticles || {};

const micronesianIslandFlag = {
  src:"assets/flags/japan.svg",
  alt:"Flag of the Empire of Japan",
  caption:"The incorporated Micronesian districts use the Japanese national flag"
};

const micronesianIslandSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — integral Japanese Micronesia"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Japanese Pacific consolidation"},
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Micronesian nationality and administration"},
  {href:"../transcript.md",label:"Master Transcript — South Seas territorial order and cultural preservation"}
];

const micronesianIslandArticle = config => ({
  category:config.category || "Islands of Japan",
  eyebrow:config.eyebrow || "Japanese Micronesia · Empire of Japan",
  infoboxKicker:config.infoboxKicker || "Island of Japanese Micronesia",
  portrait:config.portrait || micronesianIslandFlag,
  ...config,
  sources:[...micronesianIslandSources,...(config.sources || [])],
  categories:config.categories || ["Japanese Micronesia","Japanese Pacific Territories","Empire of Japan"]
});

Object.assign(window.deepArticles, {
  "babeldaob":micronesianIslandArticle({
    title:"Babeldaob",infoboxKicker:"Largest island of Palau",
    lead:"Babeldaob is the largest island of the Palau group and the principal agricultural and ecological hinterland of Koror. Its forested volcanic ridges, mangrove coasts, watersheds, villages, clan estates, earthworks, and inland roads contrast with the denser colonial capital. Continuous Japanese government leaves Koror as the regional capital while making Babeldaob central to land, water, conservation, and settlement politics.",
    canon:"Babeldaob's geography, traditional communities, earthworks, clan tenure, and place within Palau are historical. Koror's continuing capital status and the island's development without American trusteeship follow established setting canon. Exact 1985 population, road chronology, municipal boundaries, reservoirs, and military reservations remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Babeldaob is a volcanic high island of roughly 331 square kilometres and accounts for most of Palau's land area. Ridges and river valleys occupy the interior. Mangroves, reef flats, and embayments shape much of the coast.</p>"},
      {id:"communities",title:"Villages and customary authority",html:"<p>Palauan villages organize land, fishing access, titles, marriage ties, and ceremonial obligations through clan and chiefly institutions. Japanese cadastral law records parcels and public works without erasing the social authority attached to named places.</p>"},
      {id:"earthworks",title:"Monumental landscapes",html:"<p>Terraces, crowned earthworks, stone paths, village sites, and oral traditions preserve a political landscape older than European or Japanese rule. Archaeologists and Palauan custodians disagree over excavation, removal, reconstruction, and public access.</p>"},
      {id:"mandate",title:"Mandate-era development",html:"<p>The South Seas Agency surveys land, expands roads, promotes agriculture, and connects villages to <a href='koror.html'>Koror</a>. Development remains less urban and settler-heavy than on Koror Island, but government land claims and concessions create lasting disputes.</p>"},
      {id:"war",title:"The long war",html:"<p>Airfields, roads, observation posts, storage, and defensive positions extend into Babeldaob during the long war. The absence of an American Palau campaign prevents battlefield destruction, although compulsory labor and military requisition still burden island communities.</p>"},
      {id:"economy",title:"Agriculture and resources",html:"<p>Taro, cassava, coconuts, fruit, gardens, forestry, construction materials, and watershed services supply the urban district. Later policy treats the island as both a development reserve and the environmental system that supports Koror.</p>"},
      {id:"transport",title:"Roads and the Koror relationship",html:"<p>Road building and causeway links draw the southern island into Koror's labor and market area. Residents can commute to government and service work while village land remains the base of family security.</p>"},
      {id:"1985",title:"Babeldaob in 1985",html:"<p>By 1985 Babeldaob is governed through Palauan municipalities inside the Micronesian Administration. Japanese is the public language of higher administration, while Palauan remains dominant in many village, clan, land, and household settings.</p>"}
    ],
    related:[{href:"palau-islands.html",kicker:"Island group",label:"Palau Islands"},{href:"koror.html",kicker:"Regional capital",label:"Koror"},{href:"peleliu.html",kicker:"Southern neighbor",label:"Peleliu"},{href:"angaur.html",kicker:"Phosphate island",label:"Angaur"},{href:"micronesian-peoples.html",kicker:"Regional society",label:"Micronesian Peoples"},{href:"micronesian-administration.html",kicker:"Government",label:"Micronesian Administration"}],
    facts:[["Island group","Palau Islands"],["Country","Empire of Japan"],["Area","Approximately 331 km²"],["Geology","Volcanic high island"],["Principal urban connection","Koror"],["Major concerns","Land, water, roads, and conservation"],["Public language","Japanese"],["Regional language","Palauan"]],
    sources:[{href:"https://www.palaugov.pw/executive-branch/ministries/finance/budgetandplanning/physical-features/",label:"Government of Palau — physical features"},{href:"https://en.wikipedia.org/wiki/Babeldaob",label:"Geographical reference — Babeldaob"}]
  }),

  "peleliu":micronesianIslandArticle({
    title:"Peleliu",infoboxKicker:"Southern island and air district of Palau",
    lead:"Peleliu is a raised coral island south of the main Palauan lagoon. Japanese airfield construction and wartime defenses give it strategic importance, but the American assault of 1944 never occurs. The island therefore enters the postwar order with its villages, population, airfield, limestone ridges, and military landscape intact rather than as one of the Pacific war's most devastated battlefields.",
    canon:"Peleliu's geography, Palauan settlement, Japanese airfield, fortifications, and planned defense are historical. The absent American battle, survival of the community, and continued Japanese jurisdiction follow setting canon. Postwar airfield use, demobilization, conservation boundaries, and 1985 population remain open.",
    sections:[
      {id:"geography",title:"Island geography",html:"<p>Peleliu covers roughly thirteen square kilometres at the southern edge of Palau's main island group. Limestone ridges rise above flatter coastal ground, reefs, mangroves, and beaches.</p>"},
      {id:"palauan",title:"Palauan community",html:"<p>Village land, taro areas, reefs, chiefly titles, churches, and kinship connect Peleliu to Koror and other Palauan communities. Colonial land surveys and military reservations narrow the space available for ordinary island use.</p>"},
      {id:"airfield",title:"Japanese airfield",html:"<p>Japan develops Peleliu's airfield as a southern defense and route facility. Runways, dispersal areas, fuel, communications, workshops, and coastal positions turn a small island into a strategic installation.</p>"},
      {id:"defense",title:"Fortification",html:"<p>Military engineers prepare caves, tunnels, artillery positions, command posts, and protected stores in the limestone ridges. The work relies upon imported troops and labor mobilized from Palau and the wider empire.</p>"},
      {id:"no-battle",title:"The battle that did not occur",html:"<p>The United States remains outside the Japanese war and never lands on Peleliu. No months-long battle destroys the garrison and village landscape. The island also avoids the mass casualty memory that defines Peleliu in foreign contingency studies.</p>"},
      {id:"postwar",title:"Postwar demobilization",html:"<p>After 1947 the garrison contracts and military land is partly released. The airfield remains useful for regional transport, naval aviation, emergency diversion, weather observation, and civil defense.</p>"},
      {id:"memory",title:"Military landscape and memory",html:"<p>Surviving caves and defenses become objects of commemoration, safety clearance, and heritage management. Public memory centers on mobilization and feared invasion rather than a completed battle.</p>"},
      {id:"1985",title:"Peleliu in 1985",html:"<p>By 1985 Peleliu combines village government, fishing, tourism, transport, and a reserve airfield. Palauan identity remains strong, while Japanese nationality and district institutions connect residents to Koror and the wider empire.</p>"}
    ],
    related:[{href:"palau-islands.html",kicker:"Island group",label:"Palau Islands"},{href:"babeldaob.html",kicker:"Northern counterpart",label:"Babeldaob"},{href:"angaur.html",kicker:"Southern neighbor",label:"Angaur"},{href:"koror.html",kicker:"Administrative center",label:"Koror"},{href:"south-seas-mandate.html",kicker:"Colonial setting",label:"South Seas Mandate"},{href:"imperial-japanese-navy-postwar.html",kicker:"Military operator",label:"Postwar Imperial Japanese Navy"}],
    facts:[["Island group","Palau Islands"],["Country","Empire of Japan"],["Area","Approximately 13 km²"],["Geology","Raised coral limestone"],["Principal strategic asset","Airfield"],["American invasion","None"],["Postwar role","Regional aviation and reserve defense"],["Regional language","Palauan"]],
    sources:[{href:"https://www.palaugov.pw/wp-content/uploads/2016/03/2005-Census-Monograph-Report.pdf",label:"Government of Palau — island geography"},{href:"https://en.wikipedia.org/wiki/Peleliu",label:"Historical and geographical reference — Peleliu"}]
  }),

  "angaur":micronesianIslandArticle({
    title:"Angaur",infoboxKicker:"Phosphate island of southern Palau",
    lead:"Angaur is a small raised coral island at the southern end of Palau. German and Japanese phosphate extraction made it one of Micronesia's earliest intensive mining landscapes. Because the island is not invaded in 1944, its mine, railway, village, labor history, and Japanese industrial installations pass into the postwar period without battlefield destruction.",
    canon:"Angaur's geography, German phosphate opening, Japanese continuation, migrant labor, railway, and fortification are historical. The absent battle and continued Japanese administration follow the setting. Production totals, closure date, concession successor, rehabilitation program, and 1985 population remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Angaur is a low limestone island of about eight square kilometres south of Peleliu. Reef passages and ocean exposure make transport more difficult than inside Palau's protected central lagoon.</p>"},
      {id:"community",title:"Palauan island community",html:"<p>Fishing, gardens, clan land, chiefly authority, and ties to other Palauan islands predate industrial extraction. Mining introduces an unusually large outside workforce and a company-state presence.</p>"},
      {id:"german",title:"German phosphate mining",html:"<p>German administrators and commercial interests begin systematic phosphate extraction before the First World War. Pits, tracks, loading facilities, housing, and labor recruitment transform the island surface.</p>"},
      {id:"japanese",title:"Japanese expansion",html:"<p>Japan takes the island in 1914 and continues mining under mandate administration. Imperial firms improve loading and transport while employing Palauan and migrant labor under unequal contracts.</p>"},
      {id:"war",title:"Fortification without battle",html:"<p>Japan fortifies Angaur and prepares it as part of Palau's southern defense. American forces do not invade, so the island avoids the bombardment, excavation, and destructive ground fighting anticipated by the garrison.</p>"},
      {id:"depletion",title:"Depletion and diversification",html:"<p>Accessible phosphate reserves decline as extraction continues. Employment shifts toward fisheries, transport, public works, military support, and work on Peleliu or Koror.</p>"},
      {id:"rehabilitation",title:"Land rehabilitation",html:"<p>Abandoned pits create drainage, safety, vegetation, and ownership problems. Later reclamation fills selected workings, protects others as industrial remains, and disputes whether concession land should return to clan control.</p>"},
      {id:"1985",title:"Angaur in 1985",html:"<p>By 1985 Angaur is a small Palauan municipality marked physically by phosphate extraction. Japanese public administration coexists with local demands for land restoration, environmental repair, and recognition of labor history.</p>"}
    ],
    related:[{href:"palau-islands.html",kicker:"Island group",label:"Palau Islands"},{href:"peleliu.html",kicker:"Northern neighbor",label:"Peleliu"},{href:"phosphate-mining-japanese-micronesia.html",kicker:"Principal industry",label:"Phosphate Mining in Japanese Micronesia"},{href:"koror.html",kicker:"District capital",label:"Koror"},{href:"nan-yo-kohatsu.html",kicker:"Development-company context",label:"Nan'yō Kōhatsu"},{href:"micronesian-peoples.html",kicker:"Regional society",label:"Micronesian Peoples"}],
    facts:[["Island group","Palau Islands"],["Country","Empire of Japan"],["Area","Approximately 8 km²"],["Geology","Raised coral limestone"],["Historic industry","Phosphate mining"],["American invasion","None"],["Postwar issue","Mine-land rehabilitation"],["Regional language","Palauan"]],
    sources:[{href:"https://www.palaugov.pw/executive-branch/ministries/finance/budgetandplanning/physical-features/",label:"Government of Palau — physical features"},{href:"https://en.wikipedia.org/wiki/Angaur",label:"Historical and geographical reference — Angaur"}]
  }),

  "kosrae":micronesianIslandArticle({
    title:"Kosrae",infoboxKicker:"Eastern high island of the Carolines",
    lead:"Kosrae is the easternmost major high island of the Caroline archipelago. Its steep volcanic interior, narrow coastal settlements, Lelu ruins, chiefly history, Protestant churches, gardens, and maritime routes give it a distinct identity within the Ponape district. Japanese nationality and schooling connect Kosrae to the empire without turning Kosraeans into Pohnpeians or erasing their language.",
    canon:"Kosrae's geography, Lelu polity and ruins, mission history, German and Japanese administration, agriculture, and distinct language are historical. Continued Japanese rule and the absence of American trusteeship follow setting canon. Exact district status, 1985 population, port works, school system, and preservation law remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Kosrae is a steep volcanic island of roughly 110 square kilometres. Forested mountains rise behind a narrow inhabited coast, with mangroves, reefs, streams, taro lands, and small harbors shaping settlement.</p>"},
      {id:"lelu",title:"Lelu and the island kingdom",html:"<p>The walled and terraced remains on Lelu preserve the center of a chiefly kingdom that once organized the island. Stone compounds, canals, tombs, and oral histories remain central to Kosraean historical identity.</p>"},
      {id:"mission",title:"Mission Christianity",html:"<p>Protestant missionization, disease, and nineteenth-century foreign contact transform Kosrae before formal German rule. Churches and church schools become unusually durable institutions in community life.</p>"},
      {id:"colonial",title:"German and Japanese government",html:"<p>Germany administers Kosrae within the eastern Carolines before Japan occupies it in 1914. Japanese officials govern through the Ponape district, extend schooling and health services, and recruit labor while relying on local intermediaries.</p>"},
      {id:"economy",title:"Island economy",html:"<p>Gardens, taro, breadfruit, coconuts, citrus, fishing, copra, timber, and government wages support households. Distance from Ponape limits industrial development and makes shipping reliability a continuing political question.</p>"},
      {id:"war",title:"War and strategic isolation",html:"<p>The island receives defensive works, communications, and tighter controls during the long war but never becomes an American battlefield. Mobilization interrupts ordinary shipping and church life without producing occupation or trusteeship.</p>"},
      {id:"language",title:"Kosraean language and identity",html:"<p>Kosraean remains a distinct Nuclear Micronesian language. Japanese dominates secondary schooling, higher administration, and inter-island work, while Kosraean remains strong in households, churches, land affairs, and local storytelling.</p>"},
      {id:"1985",title:"Kosrae in 1985",html:"<p>By 1985 Kosrae is an eastern island district whose residents possess Japanese nationality and a strong Kosraean regional identity. Preservation policy supports Lelu, oral history, and language work while leaving sovereignty and senior administration with Japan.</p>"}
    ],
    related:[{href:"caroline-islands.html",kicker:"Archipelago",label:"Caroline Islands"},{href:"ponape.html",kicker:"Administrative neighbor",label:"Ponape"},{href:"nan-madol.html",kicker:"Pohnpeian comparison",label:"Nan Madol"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"micronesian-peoples.html",kicker:"Regional peoples",label:"Micronesian Peoples"},{href:"micronesian-administration.html",kicker:"Regional government",label:"Micronesian Administration"}],
    facts:[["Archipelago","Caroline Islands"],["Country","Empire of Japan"],["Area","Approximately 110 km²"],["Geology","Volcanic high island"],["Historic center","Lelu"],["Regional language","Kosraean"],["Common public language","Japanese"],["1985 status","Eastern Micronesian island district"]],
    sources:[{href:"https://hpo.kosraestate.gov.fm/mahkontowe/",label:"Kosrae State Historic Preservation Office — Kosraean cultural landscape"},{href:"https://en.wikipedia.org/wiki/Kosrae",label:"Historical and geographical reference — Kosrae"}]
  }),

  "jaluit-atoll":micronesianIslandArticle({
    title:"Jaluit Atoll",category:"Atolls of Japan",infoboxKicker:"Historic administrative center of the Marshall Islands",
    lead:"Jaluit Atoll is the historic colonial and commercial center of the Marshall Islands district. German firms and government used Jabor as their principal station, and Japan retained the atoll as its eastern branch-government seat after 1914. The rise of Kwajalein as a military center does not displace Jaluit's administrative, shipping, copra, church, and archival importance.",
    canon:"Jaluit's geography, Marshallese settlement, German colonial role, Jaluit Company, Japanese branch government, copra trade, and fortification are historical. The absence of American bombing and occupation follows setting canon. Exact 1985 district offices, port works, population, and relationship with Kwajalein remain open.",
    sections:[
      {id:"geography",title:"Atoll geography",html:"<p>Jaluit consists of about ninety-one low islets surrounding a large lagoon in the Ralik Chain. Jabor occupies the principal settlement area and provides the best-known administrative and commercial anchorage.</p>"},
      {id:"marshallese",title:"Marshallese authority and land",html:"<p>Iroij authority, household use rights, coconut land, fishing grounds, canoe routes, and kinship connect Jaluit to the wider Ralik world. Colonial land acquisition concentrates offices and commercial property around Jabor.</p>"},
      {id:"german",title:"German colonial center",html:"<p>The Jaluit Company and German administration make the atoll the principal station of the Marshall protectorate. Copra collection, shipping, missions, warehouses, and treaties concentrate foreign power there.</p>"},
      {id:"japanese",title:"Japanese branch government",html:"<p>Japan occupies Jaluit in 1914 and establishes one of the mandate's six district branches. Police, courts, schools, health services, post, radio, weather reporting, shipping, and commercial regulation are coordinated from Jabor.</p>"},
      {id:"economy",title:"Copra and shipping",html:"<p>Jaluit links outer-atoll copra producers with government ships, merchants, credit, imported food, tools, and medical services. The atoll's influence depends less on land area than on the regularity of routes passing through its lagoon.</p>"},
      {id:"defense",title:"Eastern defense station",html:"<p>Air, naval, radio, and defensive works expand before and during the long war. Kwajalein becomes the stronger fleet and aviation complex, while Jaluit remains the district's civil and commercial center.</p>"},
      {id:"no-occupation",title:"No American occupation",html:"<p>American aircraft do not conduct the historical late-1943 bombing campaign, and troops never occupy the atoll. Government archives, buildings, and the resident community therefore survive into the postwar reorganization.</p>"},
      {id:"1985",title:"Jaluit in 1985",html:"<p>By 1985 Jaluit remains the historic administrative capital of the Japanese Marshalls. Marshallese language and land authority remain strong, while Japanese law, schools, transport subsidies, and defense installations bind the atoll to Koror and Tokyo.</p>"}
    ],
    related:[{href:"marshall-islands.html",kicker:"Island district",label:"Marshall Islands"},{href:"south-seas-mandate.html",kicker:"Colonial administration",label:"South Seas Mandate"},{href:"koror.html",kicker:"Territorial capital",label:"Koror"},{href:"phosphate-mining-japanese-micronesia.html",kicker:"Regional extractive comparison",label:"Phosphate Mining in Japanese Micronesia"},{href:"micronesian-peoples.html",kicker:"Regional peoples",label:"Micronesian Peoples"},{href:"micronesian-languages.html",kicker:"Regional languages",label:"Micronesian Languages"}],
    facts:[["Island group","Marshall Islands"],["Chain","Ralik"],["Country","Empire of Japan"],["Islets","Approximately 91"],["Principal settlement","Jabor"],["Colonial role","German and Japanese administrative center"],["Major trade","Copra and inter-atoll supply"],["American occupation","None"]],
    sources:[{href:"https://text-message.blogs.archives.gov/2017/07/20/captain-alfred-parker-on-jaluit-atoll-march-april-1937/",label:"United States National Archives — Jaluit under the Japanese mandate"},{href:"https://www.jacar.go.jp/english/glossary_en/gaichitonaichi/table/transition5-1.html",label:"Japan Center for Asian Historical Records — Jaluit Branch chronology"},{href:"https://en.wikipedia.org/wiki/Jaluit_Atoll",label:"Historical and geographical reference — Jaluit Atoll"}]
  }),

  "tinian":micronesianIslandArticle({
    title:"Tinian",infoboxKicker:"Sugar and aviation island of the Japanese Marianas",
    lead:"Tinian is a limestone island south of Saipan in the Japanese Marianas. Nan'yō Kōhatsu converted most of the island into a planned sugar landscape of cane fields, railways, villages, mills, and migrant labor. Because the United States never captures Tinian, it does not become a vast American bomber base or the departure point for atomic attacks.",
    canon:"Tinian's geography, Chamorro and Carolinian community, company lease, sugar development, Japanese settlement, and wartime airfield are historical. The absent 1944 battle, absent American bomber complex, and absent atomic missions follow setting canon. Postwar population, company ownership, airport layout, and municipal status remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Tinian is a relatively flat raised-limestone island of roughly 102 square kilometres. Fertile areas, broad surfaces, and proximity to Saipan made it attractive for plantation agriculture and aviation.</p>"},
      {id:"community",title:"Island community",html:"<p>Chamorro and Carolinian families maintain land, churches, fishing, gardens, and connections across the Marianas. Company acquisition and planned settlement reduce their control over much of the cultivable island.</p>"},
      {id:"company",title:"Nan'yō Kōhatsu company island",html:"<p><a href='nan-yo-kohatsu.html'>Nan'yō Kōhatsu</a> leases nearly the whole island and organizes production through estates, tenant farms, company housing, mills, railways, roads, docks, schools, and stores.</p>"},
      {id:"migration",title:"Migration and labor",html:"<p>Japanese, Okinawan, and Korean migrants clear fields, cultivate cane, operate mills, maintain transport, and establish families. The settler population grows around company towns and becomes the largest social presence on the island.</p>"},
      {id:"war",title:"Airfield and fortification",html:"<p>Japan expands airfields and defenses during the long war. Civil agriculture contracts under military demand, but the island does not undergo invasion, bombardment, or the destruction of its towns and cane infrastructure.</p>"},
      {id:"no-atomic",title:"No atomic-bomb base",html:"<p>Tinian never becomes an American B-29 complex. Nuclear weapons do not exist, so the island has no association with atomic missions against Hiroshima or Nagasaki. Its war memory centers on mobilization and an invasion that never came.</p>"},
      {id:"postwar",title:"Postwar diversification",html:"<p>Sugar survives on an intact industrial base but loses relative importance to aviation, food processing, tourism, logistics, government, and service work. Estate boundaries continue to shape land ownership and municipal politics.</p>"},
      {id:"1985",title:"Tinian in 1985",html:"<p>By 1985 Tinian is a settled Japanese island tied closely to Saipan by shipping, air service, schools, and administration. Japanese is the public language, while Chamorro and Carolinian heritage survives in families, churches, land claims, and preservation organizations.</p>"}
    ],
    related:[{href:"northern-mariana-islands.html",kicker:"Island group",label:"Northern Mariana Islands"},{href:"saipan.html",kicker:"Northern neighbor",label:"Saipan"},{href:"rota.html",kicker:"Southern counterpart",label:"Rota"},{href:"sugar-industry-japanese-marianas.html",kicker:"Principal industry",label:"Sugar Industry of the Japanese Marianas"},{href:"nan-yo-kohatsu.html",kicker:"Development company",label:"Nan'yō Kōhatsu"},{href:"guam-saipan-frontier.html",kicker:"Regional boundary",label:"Guam–Saipan Frontier"}],
    facts:[["Archipelago","Mariana Islands"],["Country","Empire of Japan"],["Area","Approximately 102 km²"],["Geology","Raised limestone island"],["Historic industry","Sugar"],["Principal company","Nan'yō Kōhatsu"],["American capture","None"],["Atomic missions","None"]],
    sources:[{href:"https://www.nps.gov/amme/learn/historyculture/battle-of-tinian.htm",label:"United States National Park Service — Tinian geography and wartime history"},{href:"https://npgallery.nps.gov/NRHP/GetAsset/NRHP/81000671_text",label:"National Register of Historic Places — Nan'yō Kōhatsu complex"}]
  }),

  "rota":micronesianIslandArticle({
    title:"Rota",infoboxKicker:"Southern island of the Japanese Marianas",
    lead:"Rota is the southernmost large Japanese-held island of the Marianas, lying between Tinian and American Guam. Sugar development reshaped Songsong, Sinapalo, transport, and landholding, but the island remained less intensively transformed than Saipan or Tinian. Its proximity to Guam makes it a border community as well as an agricultural island.",
    canon:"Rota's geography, Chamorro community, Songsong, Japanese sugar development, Nan'yō Kōhatsu mill, land pressure, migration, and wartime works are historical. Continuous Japanese rule and the absence of American occupation follow setting canon. Exact postwar municipality, population, air services, and estate ownership remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Rota is a raised limestone island of roughly eighty-five square kilometres. Forested uplands, coastal terraces, springs, caves, reefs, and cultivable plains support a more varied landscape than a plantation map suggests.</p>"},
      {id:"chamorro",title:"Chamorro community",html:"<p>Chamorro families maintain villages, farms, churches, fishing grounds, kinship, and exchange with Guam and the northern islands. Colonial development presses upon land while depending upon local knowledge and labor.</p>"},
      {id:"sugar",title:"Sugar development",html:"<p>Nan'yō Kōhatsu leases large tracts, builds a mill, imports workers, and extends roads and narrow-gauge transport. Songsong becomes a company-centered settlement, while agricultural development expands around Sinapalo.</p>"},
      {id:"relocation",title:"Land and relocation",html:"<p>Company expansion pressures Chamorro owners to lease or surrender land and relocates residents from parts of the preferred industrial area. These decisions remain at the center of later property and heritage disputes.</p>"},
      {id:"frontier",title:"Guam frontier",html:"<p>American <a href='guam.html'>Guam</a> lies close enough for family contact, radio reception, small craft, smuggling, weather cooperation, and intelligence attention. The international boundary divides one Chamorro cultural region.</p>"},
      {id:"war",title:"The long war",html:"<p>Japan constructs defenses and support facilities but Rota does not become a major battlefield. The island avoids American invasion, military government, and postwar transfer while wartime controls still restrict movement and food.</p>"},
      {id:"postwar",title:"Agriculture and conservation",html:"<p>Postwar Rota combines agriculture, forestry, fisheries, transport, tourism, and government employment. Intact Japanese industrial remains and older Chamorro sites create competing preservation priorities.</p>"},
      {id:"1985",title:"Rota in 1985",html:"<p>By 1985 Rota is a Japanese frontier municipality with strong Chamorro family and church life. Its residents move toward Saipan for administration and toward Guam through regulated cross-border connections.</p>"}
    ],
    related:[{href:"northern-mariana-islands.html",kicker:"Island group",label:"Northern Mariana Islands"},{href:"tinian.html",kicker:"Northern counterpart",label:"Tinian"},{href:"saipan.html",kicker:"Administrative center",label:"Saipan"},{href:"guam.html",kicker:"American neighbor",label:"Guam"},{href:"sugar-industry-japanese-marianas.html",kicker:"Colonial industry",label:"Sugar Industry of the Japanese Marianas"},{href:"guam-saipan-frontier.html",kicker:"International boundary",label:"Guam–Saipan Frontier"}],
    facts:[["Archipelago","Mariana Islands"],["Country","Empire of Japan"],["Area","Approximately 85 km²"],["Principal settlements","Songsong and Sinapalo"],["Historic industry","Sugar"],["Nearest foreign jurisdiction","American Guam"],["American occupation","None"],["Regional language","Chamorro"]],
    sources:[{href:"https://parkplanning.nps.gov/showFile.cfm?projectID=65104&sfid=678330",label:"United States National Park Service — Rota historic context"},{href:"https://en.wikipedia.org/wiki/Rota_(island)",label:"Historical and geographical reference — Rota"}]
  }),

  "nan-madol":micronesianIslandArticle({
    title:"Nan Madol",category:"Historic sites of Japan",infoboxKicker:"Pohnpeian ceremonial and political complex",
    lead:"Nan Madol is a monumental complex of artificial islets, canals, basalt architecture, tombs, residences, and ceremonial spaces off the southeastern coast of Ponape. It was the political and ritual center of the Saudeleur dynasty and remains one of the most important indigenous historic landscapes in the Japanese Pacific territories.",
    canon:"Nan Madol's location, artificial islets, monumental construction, Saudeleur association, Isokelekel tradition, Nahnmwarki succession, archaeological chronology, and sacred importance are historical. Continued Japanese jurisdiction and later preservation policy follow setting canon. Exact protected boundary, excavated sequence, custodial body, visitor rules, and 1985 designation remain open.",
    sections:[
      {id:"site",title:"Site",html:"<p>Nan Madol occupies a reef flat beside Temwen Island and contains roughly one hundred artificial islets across about eighty hectares. Basalt walls, coral fill, channels, enclosures, tombs, and tidal passages form the built landscape.</p>"},
      {id:"construction",title:"Construction",html:"<p>Human activity reaches back many centuries, while major monumental building begins around the late twelfth or early thirteenth century. Builders moved columnar basalt and coral without wheeled transport or draft animals.</p>"},
      {id:"saudeleur",title:"Saudeleur dynasty",html:"<p>Pohnpeian histories associate Nan Madol with the Saudeleur rulers who centralized authority and tribute across the island. The complex housed political, ritual, residential, and mortuary functions rather than one continuous city.</p>"},
      {id:"isokelekel",title:"Isokelekel and the Nahnmwarki order",html:"<p>Oral tradition recounts Isokelekel's overthrow of the Saudeleur dynasty. Authority then dispersed through the Nahnmwarki system, and the complex gradually lost its role as a permanent ruling center.</p>"},
      {id:"sacred",title:"Sacred landscape",html:"<p>Named islets, tombs, stories, clan histories, and ritual restrictions give the site meaning beyond its masonry. Pohnpeian custodians reject interpretations that detach the ruins from living genealogy and sacred obligation.</p>"},
      {id:"research",title:"Colonial-era research",html:"<p>German and Japanese scholars survey, map, collect from, and interpret the complex. Their records preserve useful evidence while removal of objects and outside control of research remain sources of criticism.</p>"},
      {id:"preservation",title:"Preservation",html:"<p>Vegetation, tides, erosion, storms, visitor movement, and poorly documented excavation threaten structures. Later Japanese preservation programs increasingly fund local survey and oral history, though arguments continue over authority and access.</p>"},
      {id:"1985",title:"Nan Madol in 1985",html:"<p>By 1985 Nan Madol is a protected Pohnpeian historic and sacred site inside Japan. It anchors regional education and cultural revival while also exposing the limits of an imperial preservation policy that recognizes heritage without conceding sovereignty.</p>"}
    ],
    related:[{href:"ponape.html",kicker:"Host island",label:"Ponape"},{href:"kosrae.html",kicker:"Eastern Caroline comparison",label:"Kosrae"},{href:"micronesian-peoples.html",kicker:"Regional peoples",label:"Micronesian Peoples"},{href:"micronesian-languages.html",kicker:"Language context",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Heritage policy",label:"Japanese Preservationism"},{href:"south-seas-mandate.html",kicker:"Colonial research setting",label:"South Seas Mandate"}],
    facts:[["Location","Temwen reef, Ponape"],["Country","Empire of Japan"],["Form","Artificial islets and canals"],["Extent","Approximately 100 islets across 80 hectares"],["Monumental construction","From about 1200"],["Associated dynasty","Saudeleur"],["Successor order","Nahnmwarki system"],["1985 status","Protected historic and sacred landscape"]],
    sources:[{href:"https://nach.gov.fm/nan-madol-east-site-of-temwen-island-temwen-island/",label:"FSM Office of National Archives, Culture and Historic Preservation — Nan Madol"},{href:"https://nach.gov.fm/wp-content/uploads/2019/01/mortuary-context-and-social-structure-at-nan-madol.pdf",label:"FSM National Archives — mortuary context and political history"}]
  }),

  "nan-yo-kohatsu":micronesianIslandArticle({
    title:"Nan'yō Kōhatsu",category:"Companies of Imperial Japan",eyebrow:"Japanese development company · South Seas",infoboxKicker:"South Seas Development Company",
    lead:"Nan'yō Kōhatsu Kabushiki Kaisha, commonly called Nankō or the South Seas Development Company, is the state-supported corporation that built the sugar economy of the Japanese Marianas and expanded into shipping, alcohol, starch, fishing, phosphate, ice, migration, and tropical development. Japan's victory allows the firm and its settler network to survive the long war and become a durable institution of the South Seas General Government.",
    canon:"The company's 1921 establishment, Haruji Matsue leadership, state support, Saipan sugar base, Mariana land leases, migrant labor, and diversification are historical. Corporate survival, postwar expansion, and later developmental role are extrapolated from Japanese victory and the fixed zaibatsu-mediated imperial economy. Exact ownership group, 1985 legal name, subsidiaries, revenue, and directors remain open.",
    sections:[
      {id:"founding",title:"Founding",html:"<p>Entrepreneur Haruji Matsue established Nan'yō Kōhatsu in 1921 with government support after private sugar firms hesitated to risk capital in Micronesia. Production began from Saipan and expanded through the Northern Marianas.</p>"},
      {id:"state",title:"State–company partnership",html:"<p>The South Seas Agency supplied subsidies, leases, surveys, transport support, and protected access. Company taxes and activity in turn financed a large share of territorial government, making public administration and private profit mutually dependent.</p>"},
      {id:"sugar",title:"Sugar system",html:"<p>The company built mills, railways, roads, docks, alcohol plants, housing, stores, and tenant networks on Saipan, Tinian, and Rota. Sugar became the industrial core around which settler towns and public services developed.</p>"},
      {id:"migration",title:"Labor and migration",html:"<p>Nan'yō Kōhatsu recruited Japanese, Okinawan, and Korean workers and moved families into the islands. Contracts, tenant farming, company credit, ethnic hierarchy, and land acquisition made the firm an organizer of society as well as production.</p>"},
      {id:"diversification",title:"Diversification",html:"<p>Fishing, starch, alcohol, ice, phosphate, shipping, plantations, and experiments farther south reduced dependence on one crop. The company became a practical instrument of Japan's southward economic strategy.</p>"},
      {id:"war",title:"The long war",html:"<p>Military procurement and transport place the company inside the wartime economy. Because American forces never invade the islands, its mills, records, housing, and workforce avoid the destruction and dissolution expected after defeat.</p>"},
      {id:"postwar",title:"Postwar South Seas corporation",html:"<p>After 1947 Nankō helps integrate later Pacific acquisitions into Japanese shipping and commodity networks. Older sugar estates modernize while the wider group adds construction, food processing, hotels, cold storage, and regional services.</p>"},
      {id:"legacy",title:"Legacy and controversy",html:"<p>Supporters credit the company with roads, wages, ports, schools, and durable settlement. Critics emphasize coerced leases, unequal labor, environmental damage, corporate government, and the conversion of indigenous land into an imperial production system.</p>"}
    ],
    related:[{href:"sugar-industry-japanese-marianas.html",kicker:"Foundational industry",label:"Sugar Industry of the Japanese Marianas"},{href:"tinian.html",kicker:"Company island",label:"Tinian"},{href:"rota.html",kicker:"Sugar district",label:"Rota"},{href:"saipan.html",kicker:"Original operating center",label:"Saipan"},{href:"phosphate-mining-japanese-micronesia.html",kicker:"Extractive business",label:"Phosphate Mining in Japanese Micronesia"},{href:"south-seas-general-government.html",kicker:"Administrative partner",label:"South Seas General Government"}],
    facts:[["Japanese name","南洋興発株式会社"],["English name","South Seas Development Company"],["Common abbreviation","Nankō"],["Founded","1921"],["Founder","Haruji Matsue"],["Original center","Saipan"],["Principal early industry","Sugar"],["1985 role","Diversified South Seas development group"]],
    sources:[{href:"https://micronesica.org/sites/default/files/nishi_m.-_an_eval._of_japanese_agri._fishery_dev.-micronesica_vol._4_no._1.pdf",label:"Micronesica — Japanese agricultural and fishery development"},{href:"https://www.jacar.archives.go.jp/aj/meta/MetSearch.cgi?DB_ID=G0000101EXTERNAL&DEF_XSL=default&GRP_ID=G0000101&IS_KEY_S1=%E5%8D%97%E6%B4%8B%E8%88%88%E7%99%BA%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&IS_KIND=SimpleSummary&IS_SCH=META",label:"Japan Center for Asian Historical Records — Nan'yō Kōhatsu records"},{href:"https://escholarship.org/content/qt7fr8500x/qt7fr8500x_noSplash_62f618b16da22c3d776d8a54a2733a13.pdf",label:"Cross-Currents — South Seas Government and sugar"}]
  }),

  "japanese-settlement-micronesia":micronesianIslandArticle({
    title:"Japanese settlement in Micronesia",category:"Migration within Imperial Japan",eyebrow:"Migration and settler society · 1914–present",infoboxKicker:"Permanent Japanese migration to the South Seas",
    lead:"Japanese settlement in Micronesia began under naval occupation and expanded rapidly through mandate administration, sugar, fishing, government, commerce, and military construction. Migrants from Japan proper, Okinawa, Chōsen, and other imperial regions became majorities in Saipan and Koror's colonial centers. Victory in the long war prevents mass repatriation, turning a prewar settler population into a permanent regional society.",
    canon:"Prewar migration, settler concentration, Okinawan and Korean labor, unequal schools, mixed communities, and economic motives are historical. The absence of repatriation and the permanent Japanese nationality system follow established canon. Exact censuses, intermarriage rates, postwar prefectural origins, electoral arrangements, and land distribution remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Naval personnel, officials, traders, teachers, missionaries, fishermen, and skilled workers followed Japan's 1914 occupation. Civil government after 1922 made migration more permanent and family-based.</p>"},
      {id:"marianas",title:"Settlement in the Marianas",html:"<p>Sugar estates and company towns drew large numbers to Saipan, Tinian, and Rota. Okinawan migrants formed a particularly important labor and small-business population, while Korean workers occupied a lower position in the imperial hierarchy.</p>"},
      {id:"palau",title:"Koror and Palau",html:"<p>Government, fishing, commerce, construction, and shipping made Koror the second great settler center. Babeldaob and outlying islands received fewer migrants and retained stronger Palauan demographic continuity.</p>"},
      {id:"elsewhere",title:"Truk, Ponape, Yap, and the Marshalls",html:"<p>Naval work and commerce expanded settler communities at Truk and Ponape. Yap and the Marshalls attracted fewer families, leaving indigenous residents as clear local majorities outside administrative stations.</p>"},
      {id:"hierarchy",title:"Colonial hierarchy",html:"<p>Settlers usually received better schools, occupations, housing, credit, and legal access than indigenous residents. Okinawans and Koreans could themselves face discrimination even while participating in a system that subordinated island peoples.</p>"},
      {id:"no-repatriation",title:"No mass repatriation",html:"<p>Japan's victory means no American occupation removes Japanese civilians after 1945. Families retain homes, farms, firms, schools, shrines, churches, cemeteries, and claims accumulated during the mandate.</p>"},
      {id:"integration",title:"Postwar integration",html:"<p>Common Japanese nationality gradually replaces the mandate's explicit settler–native legal distinction. Public equality expands unevenly while property, schooling, language, surname, and urban advantage preserve the older hierarchy.</p>"},
      {id:"1985",title:"Settler society in 1985",html:"<p>By 1985 several generations identify the islands as home rather than an overseas posting. Japanese-speaking mixed families are common in urban centers, and debates over ancestry increasingly concern land, culture, and representation rather than immigration status.</p>"}
    ],
    related:[{href:"south-seas-mandate.html",kicker:"Colonial origin",label:"South Seas Mandate"},{href:"saipan.html",kicker:"Largest early center",label:"Saipan"},{href:"koror.html",kicker:"Administrative center",label:"Koror"},{href:"nan-yo-kohatsu.html",kicker:"Migration organizer",label:"Nan'yō Kōhatsu"},{href:"micronesian-peoples.html",kicker:"Indigenous societies",label:"Micronesian Peoples"},{href:"micronesian-languages.html",kicker:"Language change",label:"Micronesian Languages"}],
    facts:[["Began","After Japanese occupation in 1914"],["Expanded","Under civil mandate rule after 1922"],["Principal centers","Saipan and Koror"],["Major migrant origins","Japan proper, Okinawa, and Chōsen"],["Principal sectors","Sugar, fishing, government, commerce, and defense"],["Postwar repatriation","None"],["Nationality","Japanese"],["1985 character","Permanent multigenerational settler society"]],
    sources:[{href:"https://www.spf.org/islandstudies/global-data/a00023.pdf",label:"Review of Island Studies — Japanese mandatory rule and settlement"},{href:"https://parkplanning.nps.gov/showFile.cfm?projectID=65104&sfid=678330",label:"United States National Park Service — Mariana settlement and land history"}]
  }),

  "phosphate-mining-japanese-micronesia":micronesianIslandArticle({
    title:"Phosphate mining in Japanese Micronesia",category:"Mining in Imperial Japan",eyebrow:"Extractive economy · Palau and western Carolines",infoboxKicker:"Micronesian phosphate industry",
    lead:"Phosphate mining in Japanese Micronesia developed principally on Angaur and Fais. German extraction on Angaur created the first intensive mine, while Japanese administration expanded production and opened smaller deposits elsewhere. The industry supplied fertilizer to the empire but left exhausted ground, imported labor systems, concession disputes, and difficult rehabilitation.",
    canon:"Angaur's German and Japanese phosphate history, Fais extraction, imperial fertilizer demand, migrant labor, and environmental disturbance are historical. Continued Japanese control after 1947 follows setting canon. Exact production totals, depletion dates, firms, worker origins, and rehabilitation settlements remain open.",
    sections:[
      {id:"resource",title:"Phosphate deposits",html:"<p>Guano-derived phosphate accumulated in pockets of raised coral limestone. Deposits were valuable because Japan's intensive agriculture required imported fertilizer and possessed limited domestic phosphate resources.</p>"},
      {id:"angaur",title:"Angaur",html:"<p>German companies opened Angaur before the First World War. Japanese authorities retained and enlarged the pits, rail transport, drying, storage, and ship-loading system after occupying Palau.</p>"},
      {id:"fais",title:"Fais",html:"<p>Fais in the western Carolines became a smaller Japanese phosphate source during the 1930s. Extraction tied a remote outer island to Yap's district administration and to imperial shipping schedules.</p>"},
      {id:"labor",title:"Labor",html:"<p>Island residents worked beside recruited laborers, company employees, and technical staff. Wage opportunity coexisted with dangerous pits, heat, dust, strict supervision, and unequal contracts.</p>"},
      {id:"transport",title:"Transport and fertilizer system",html:"<p>Narrow-gauge lines and conveyors moved ore from pits to coastal loading points. Ships carried phosphate north for processing and distribution to Japanese, Formosan, Korean, and other imperial farms.</p>"},
      {id:"war",title:"War and continuity",html:"<p>Military shipping and fortification disrupted production, but American forces did not seize or destroy the mining islands. Postwar administrators could restart or wind down workings without reconstructing an occupied battlefield.</p>"},
      {id:"depletion",title:"Depletion and environmental cost",html:"<p>High-grade deposits declined and left pits, altered drainage, unstable surfaces, lost vegetation, and contested concession land. Some sites closed while others survived through lower-grade recovery and improved processing.</p>"},
      {id:"1985",title:"Legacy by 1985",html:"<p>By 1985 phosphate is more important as an industrial and political legacy than as Micronesia's leading export. Rehabilitation, land return, worker compensation, and preservation of mine structures remain contentious.</p>"}
    ],
    related:[{href:"angaur.html",kicker:"Principal mine",label:"Angaur"},{href:"yap-islands.html",kicker:"Fais district",label:"Yap Islands"},{href:"nan-yo-kohatsu.html",kicker:"Development-company context",label:"Nan'yō Kōhatsu"},{href:"south-seas-mandate.html",kicker:"Colonial administration",label:"South Seas Mandate"},{href:"palau-islands.html",kicker:"Principal island group",label:"Palau Islands"},{href:"micronesian-administration.html",kicker:"Postwar regulator",label:"Micronesian Administration"}],
    facts:[["Principal islands","Angaur and Fais"],["Country","Empire of Japan"],["Commodity","Phosphate rock"],["Principal use","Fertilizer"],["Angaur opening","German colonial period"],["Fais expansion","1930s"],["Postwar condition","Depletion and selective closure"],["Major legacy","Land and environmental rehabilitation"]],
    sources:[{href:"https://www.jacar.archives.go.jp/aj/meta/MetSearch.cgi?DB_ID=G0000101EXTERNAL&DEF_XSL=default&GRP_ID=G0000101&IS_KEY_S1=%E5%8D%97%E6%B4%8B%E8%88%88%E7%99%BA%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&IS_KIND=SimpleSummary&IS_SCH=META",label:"Japan Center for Asian Historical Records — phosphate business records"},{href:"https://micronesica.org/sites/default/files/nishi_m.-_an_eval._of_japanese_agri._fishery_dev.-micronesica_vol._4_no._1.pdf",label:"Micronesica — Japanese economic development"},{href:"https://en.wikipedia.org/wiki/Angaur",label:"Historical reference — Angaur phosphate mining"}]
  }),

  "sugar-industry-japanese-marianas":micronesianIslandArticle({
    title:"Sugar industry of the Japanese Marianas",category:"Agriculture in Imperial Japan",eyebrow:"Plantation economy · Northern Mariana Islands",infoboxKicker:"Mariana sugar system",
    lead:"The sugar industry of the Japanese Marianas was the principal commercial system that transformed Saipan, Tinian, and Rota under the South Seas Mandate. State subsidy and Nan'yō Kōhatsu finance created cane estates, tenant farms, mills, railways, ports, alcohol plants, company towns, and a large migrant population. The industry's physical and demographic order survives the long war because no American invasion destroys the islands.",
    canon:"The subsidized establishment of the industry, Nan'yō Kōhatsu leadership, Saipan base, Tinian and Rota expansion, railways, mills, migrant labor, and land pressure are historical. Survival and postwar diversification follow setting canon. Exact acreage, output, prices, company successors, and 1985 employment remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Early private experiments struggled with disease, finance, transport, and uncertain markets. The South Seas Government backed Haruji Matsue's development company to establish a plantation and milling system at imperial scale.</p>"},
      {id:"saipan",title:"Saipan",html:"<p>Saipan became the original industrial center. Estates and tenant plots supplied a central mill, while Garapan provided administration, finance, workshops, housing, stores, and port services.</p>"},
      {id:"tinian",title:"Tinian",html:"<p>Nan'yō Kōhatsu leased nearly all of Tinian and planned the island around cane, rail transport, company villages, and milling. Plantation geometry reached farther across the island than on Saipan.</p>"},
      {id:"rota",title:"Rota",html:"<p>Rota received a smaller mill and estate network around Songsong and Sinapalo. Company land acquisition and relocation placed Chamorro property rights at the center of development conflict.</p>"},
      {id:"labor",title:"Labor and settlement",html:"<p>Japanese, Okinawan, Korean, Chamorro, and Carolinian workers occupied unequal positions as tenants, wage laborers, mill hands, transport workers, clerks, and contractors. Migration turned an agricultural project into a permanent settler society.</p>"},
      {id:"system",title:"Industrial system",html:"<p>Narrow-gauge railways, roads, mills, alcohol distillation, power, water, warehouses, docks, repair shops, and company credit linked farms to export markets. Sugar revenue also supported the mandate government.</p>"},
      {id:"war",title:"War without industrial destruction",html:"<p>Military requirements take land, fuel, transport, and workers during the long war. No American assault burns the cane towns or converts Tinian into a bomber base, allowing mills and records to pass directly into postwar production.</p>"},
      {id:"1985",title:"The industry by 1985",html:"<p>By 1985 sugar remains culturally and geographically important but no longer dominates the Mariana economy. Tourism, aviation, government, light industry, and services grow upon roads, towns, ownership patterns, and families created by the plantation era.</p>"}
    ],
    related:[{href:"nan-yo-kohatsu.html",kicker:"Principal company",label:"Nan'yō Kōhatsu"},{href:"saipan.html",kicker:"Original center",label:"Saipan"},{href:"tinian.html",kicker:"Largest planned estate",label:"Tinian"},{href:"rota.html",kicker:"Southern district",label:"Rota"},{href:"northern-mariana-islands.html",kicker:"Regional setting",label:"Northern Mariana Islands"},{href:"japanese-settlement-micronesia.html",kicker:"Demographic consequence",label:"Japanese Settlement in Micronesia"}],
    facts:[["Region","Northern Mariana Islands"],["Principal islands","Saipan, Tinian, and Rota"],["Principal company","Nan'yō Kōhatsu"],["Public support","South Seas Government subsidies and leases"],["Products","Sugar and alcohol"],["Labor origins","Japan, Okinawa, Chōsen, and the Marianas"],["Wartime destruction","None by American invasion"],["1985 condition","Surviving but no longer dominant"]],
    sources:[{href:"https://escholarship.org/content/qt7fr8500x/qt7fr8500x_noSplash_62f618b16da22c3d776d8a54a2733a13.pdf",label:"Cross-Currents — South Seas Government and sugar"},{href:"https://parkplanning.nps.gov/showFile.cfm?projectID=65104&sfid=678330",label:"United States National Park Service — Rota sugar and settlement history"},{href:"https://npgallery.nps.gov/NRHP/GetAsset/NRHP/81000671_text",label:"National Register of Historic Places — Tinian company complex"}]
  })
});

const addMicronesianIslandRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const link of links) {
    if (!article.related.some(existing => existing.href === link.href)) article.related.push(link);
  }
};

addMicronesianIslandRelated("palau-islands",[
  {href:"babeldaob.html",kicker:"Largest island",label:"Babeldaob"},
  {href:"peleliu.html",kicker:"Southern air district",label:"Peleliu"},
  {href:"angaur.html",kicker:"Phosphate island",label:"Angaur"}
]);
addMicronesianIslandRelated("koror",[{href:"babeldaob.html",kicker:"Agricultural and watershed hinterland",label:"Babeldaob"}]);
addMicronesianIslandRelated("caroline-islands",[{href:"kosrae.html",kicker:"Eastern high island",label:"Kosrae"}]);
addMicronesianIslandRelated("ponape",[
  {href:"nan-madol.html",kicker:"Monumental Pohnpeian landscape",label:"Nan Madol"},
  {href:"kosrae.html",kicker:"Eastern district neighbor",label:"Kosrae"}
]);
addMicronesianIslandRelated("marshall-islands",[{href:"jaluit-atoll.html",kicker:"Historic district center",label:"Jaluit Atoll"}]);
addMicronesianIslandRelated("northern-mariana-islands",[
  {href:"tinian.html",kicker:"Sugar and aviation island",label:"Tinian"},
  {href:"rota.html",kicker:"Southern frontier island",label:"Rota"},
  {href:"sugar-industry-japanese-marianas.html",kicker:"Regional economic history",label:"Sugar Industry of the Japanese Marianas"}
]);
addMicronesianIslandRelated("saipan",[
  {href:"tinian.html",kicker:"Southern neighbor",label:"Tinian"},
  {href:"rota.html",kicker:"Mariana counterpart",label:"Rota"},
  {href:"nan-yo-kohatsu.html",kicker:"Principal development company",label:"Nan'yō Kōhatsu"}
]);
addMicronesianIslandRelated("south-seas-mandate",[
  {href:"nan-yo-kohatsu.html",kicker:"Development company",label:"Nan'yō Kōhatsu"},
  {href:"japanese-settlement-micronesia.html",kicker:"Demographic history",label:"Japanese Settlement in Micronesia"}
]);
addMicronesianIslandRelated("micronesian-peoples",[{href:"japanese-settlement-micronesia.html",kicker:"Settler relationship",label:"Japanese Settlement in Micronesia"}]);
addMicronesianIslandRelated("micronesian-administration",[
  {href:"nan-yo-kohatsu.html",kicker:"Development company",label:"Nan'yō Kōhatsu"},
  {href:"phosphate-mining-japanese-micronesia.html",kicker:"Extractive history",label:"Phosphate Mining in Japanese Micronesia"},
  {href:"sugar-industry-japanese-marianas.html",kicker:"Plantation history",label:"Sugar Industry of the Japanese Marianas"}
]);
addMicronesianIslandRelated("south-seas-general-government",[
  {href:"nan-yo-kohatsu.html",kicker:"Principal development company",label:"Nan'yō Kōhatsu"},
  {href:"japanese-settlement-micronesia.html",kicker:"Older territorial society",label:"Japanese Settlement in Micronesia"}
]);
addMicronesianIslandRelated("japanese-pacific-territories",[
  {href:"japanese-settlement-micronesia.html",kicker:"Micronesian demographic history",label:"Japanese Settlement in Micronesia"},
  {href:"sugar-industry-japanese-marianas.html",kicker:"Northern plantation economy",label:"Sugar Industry of the Japanese Marianas"}
]);
addMicronesianIslandRelated("guam",[{href:"rota.html",kicker:"Nearest Japanese island",label:"Rota"}]);
addMicronesianIslandRelated("guam-saipan-frontier",[
  {href:"rota.html",kicker:"Southern Japanese island",label:"Rota"},
  {href:"tinian.html",kicker:"Central Japanese island",label:"Tinian"}
]);
addMicronesianIslandRelated("micronesian-languages",[{href:"japanese-settlement-micronesia.html",kicker:"Language-contact history",label:"Japanese Settlement in Micronesia"}]);
