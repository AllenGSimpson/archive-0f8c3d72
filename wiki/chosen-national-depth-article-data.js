window.deepArticles = window.deepArticles || {};

const chosenDepthSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Korea"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — integral Japan and Chōsen"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Korean integration and preservation"},
  {href:"../transcript.md",label:"Master Transcript — Korean labor, industry, education, cities, media, and assimilation"}
];

const chosenDepthArticle = config => ({
  category:"Chōsen",
  eyebrow:"Integral Japanese region · Korean Peninsula",
  infoboxKicker:"Regional institution of imperial Japan",
  ...config,
  sources:[...chosenDepthSources,...(config.additionalSources || [])],
  categories:config.categories || ["Chōsen","Empire of Japan","Korea under Japanese rule"]
});

const chosenCoreRelated = [
  {href:"korea.html",kicker:"Regional overview",label:"Chōsen"},
  {href:"korean-language.html",kicker:"Endangered language",label:"Korean Language in Chōsen"},
  {href:"integral-territories-japan.html",kicker:"Constitutional status",label:"Integral Territories of Japan"}
];

Object.assign(window.deepArticles,{
  "government-administration-chosen":chosenDepthArticle({
    title:"Government and administration of Chōsen",
    infoboxTitle:"Administration of Chōsen",
    portrait:{src:"assets/flags/chosen-government-general-seal.svg",alt:"Seal used by the Government-General of Chōsen",caption:"Seal of the Government-General of Chōsen"},
    lead:"The government and administration of Chōsen comprise the imperial, regional, prefectural, municipal, police, judicial, educational, military, and economic institutions through which the Korean Peninsula is governed as an integral but unequal part of Japan.",
    canon:"Integral status, Japanese nationality, absence of separate sovereignty, the historical Governor-General foundation, Japanese public administration, schooling, conscription, mobility, and continued regional inequality are established. Exact postwar constitutional reforms, final office names, ministry transfers, governor-general chronology, prefectural map, Diet representation, police law, and judicial organization remain open.",
    sections:[
      {id:"foundation",title:"Colonial foundation",html:"<p>Japanese rule grows from the annexation system centered on the Government-General. Police, courts, land records, taxation, railways, schools, and economic bureaus create an unusually centralized regional administration long before the postwar imperial settlement.</p>"},
      {id:"victory",title:"Continuity after victory",html:"<p>Japan's survival removes the surrender and liberation that historically ended the colonial regime. Wartime agencies demobilize or become civilian bodies, but the records, officials, police habits, property arrangements, and Japanese-language public order remain.</p>"},
      {id:"integral",title:"Integral status",html:"<p>Chōsen is not an associated state and has no separate nationality or foreign ministry. Residents are Japanese nationals, use the Japanese flag, serve in imperial institutions, and move within Japan subject to ordinary and discriminatory administrative rules.</p>"},
      {id:"regional",title:"Regional government",html:"<p>Imperial ministries increasingly administer education, finance, transport, labor, industry, health, and communications through regional offices. The exact survival or transformation of the Governor-General remains a matter of later constitutional record rather than a separate Korean state government.</p>"},
      {id:"local",title:"Prefectural and municipal administration",html:"<p>Keijō, Fusan, Heijō, Genzan, Kōshū, and other cities possess municipal institutions beneath the regional hierarchy. Local government manages utilities, housing, markets, schools, public health, roads, and police cooperation without independent national authority.</p>"},
      {id:"citizenship",title:"Citizenship and participation",html:"<p>Korean ethnicity does not create a separate legal nationality. Japanese schooling, civil-service examinations, military careers, corporations, and internal migration offer real routes to advancement while metropolitan networks and Japanese ancestry remain advantages.</p>"},
      {id:"inequality",title:"Administrative inequality",html:"<p>Legal integration does not erase unequal pay, senior Japanese management, cultural pressure, police scrutiny, family-registry prejudice, or the concentration of decision-making in Tokyo and Japanese corporate offices.</p>"},
      {id:"interpretation",title:"Official and regional interpretations",html:"<p>Official histories describe the transition from colonial rule to full imperial region. Korean preservationists emphasize that the institutions of integration dissolved the political capacity from which a separate national future might have been articulated.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"education-assimilation-chosen.html",kicker:"Administrative instrument",label:"Education and Assimilation"},{href:"economy-chosen.html",kicker:"Economic administration",label:"Economy of Chōsen"}],
    facts:[["Sovereign state","Empire of Japan"],["Regional status","Integral but unequal territory"],["Separate nationality","None"],["Historical central institution","Government-General of Chōsen"],["Public administrative language","Japanese"],["Resident nationality","Japanese"],["Principal city","Keijō"],["Postwar constitutional organization","Partly open"]]
  }),

  "economy-chosen":chosenDepthArticle({
    title:"Economy of Chōsen",
    infoboxKicker:"Industrial regional economy",
    lead:"The economy of Chōsen is a heavily integrated Japanese regional economy linking the home islands to Manchukuo and National China through ports, railways, shipyards, steel, chemicals, machinery, armaments, electrical equipment, vehicles, electronics, agriculture, and a large mobile labor force.",
    canon:"Major industrial-appendage status, principal sectors, integration with Japan, Manchukuo, and China, lower Korean wages, senior Japanese management, strategic transport position, and movement beyond an agricultural colony are established. GDP, output, firm shares, wage ratios, trade totals, tax system, regional sector map, and post-1985 growth rates remain open.",
    sections:[
      {id:"position",title:"Position in the imperial economy",html:"<p>Chōsen lies between the Japanese home islands and the continental heavy-industrial system. Its ports and railways move people, coal, ore, machinery, food, military traffic, and manufactured goods in both directions.</p>"},
      {id:"agriculture",title:"Agriculture and rural production",html:"<p>Rice, grains, fisheries, forestry, livestock, and regional food processing remain important. Rural productivity supports cities while land concentration, migration, and industrial recruitment alter village society.</p>"},
      {id:"industry",title:"Industrial sectors",html:"<p><a href='industrialization-chosen.html'>Industrialization</a> produces steel, shipbuilding, chemicals, machine tools, armaments, electrical equipment, vehicles, and later electronics. Northern power and heavy industry coexist with southern ports and urban manufacturing.</p>"},
      {id:"transport",title:"Ports and railways",html:"<p>Fusan is the principal maritime gateway to Japan. Genzan and northern ports connect industry and fisheries; the peninsula railway continues into Manchukuo and China. Transport institutions are economic and strategic assets rather than merely local services.</p>"},
      {id:"corporations",title:"Corporate organization",html:"<p>Japanese industrial houses, national-policy corporations, banks, railways, and local subsidiaries dominate strategic capital. Korean managers, contractors, technicians, and merchants expand beneath a senior structure still weighted toward metropolitan firms.</p>"},
      {id:"labor",title:"Labor and wages",html:"<p><a href='labor-migration-chosen.html'>Korean labor</a> supplies mines, factories, shipyards, railways, construction, merchant transport, the military, and the home islands. Wages remain generally below metropolitan Japanese levels even as technical skill and citizenship increase bargaining power.</p>"},
      {id:"education",title:"Human capital",html:"<p>Japanese-language technical schools, universities, apprenticeships, and military training create a large educated workforce. Advancement rewards fluency and assimilation because the highest technical and administrative systems operate in Japanese.</p>"},
      {id:"contradiction",title:"The regional contradiction",html:"<p>Industrial opportunity helps make Korean residents ordinary participants in Japan while the same firms, schools, and transport networks weaken distinct Korean public life. Economic incorporation and cultural disappearance proceed together.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"industrialization-chosen.html",kicker:"Industrial history",label:"Industrialization of Chōsen"},{href:"labor-migration-chosen.html",kicker:"Workforce history",label:"Labor and Migration"},{href:"cities-chosen.html",kicker:"Urban system",label:"Cities of Chōsen"},{href:"manchukuo.html",kicker:"Continental counterpart",label:"Manchukuo"}],
    facts:[["Economic status","Major industrial region of Japan"],["Strategic position","Bridge between the home islands, Manchukuo, and China"],["Principal sectors","Steel, shipbuilding, chemicals, machinery, armaments, electrical equipment, vehicles, and electronics"],["Principal transport systems","Ports and peninsula railways"],["Ownership pattern","Japanese firms and regional subsidiaries"],["Labor condition","Lower average Korean wages"],["Senior management","Disproportionately Japanese"],["Complete statistical accounts","Open"]]
  }),

  "industrialization-chosen":chosenDepthArticle({
    title:"Industrialization of Chōsen",
    infoboxKicker:"Colonial and postwar industrial transformation",
    lead:"The industrialization of Chōsen is the transformation of the peninsula from a colonial agricultural and extractive territory into one of Japan's principal manufacturing, shipbuilding, chemical, electrical, transport, and military-industrial regions.",
    canon:"Steel, shipbuilding, chemicals, machine tools, armaments, electrical equipment, vehicles, electronics, rail integration, northern and coastal specialization, Japanese ownership, and Korean technical employment are established. Plant names, output, industrial combines, power stations, city shares, investment chronology, and environmental record remain open.",
    sections:[
      {id:"colonial",title:"Colonial foundations",html:"<p>Railways, ports, hydroelectric works, mines, chemicals, processing plants, and Japanese capital create the industrial base before the Second World War. Development is designed around imperial requirements rather than Korean sovereignty.</p>"},
      {id:"war",title:"Wartime expansion",html:"<p>Long war expands armaments, transport repair, chemicals, metals, shipyards, electrical capacity, and labor mobilization. Plants and trained workers survive into the victorious postwar Japanese economy.</p>"},
      {id:"postwar",title:"Postwar conversion and expansion",html:"<p>Demobilized facilities serve rail equipment, merchant shipping, construction machinery, vehicles, electrical goods, fertilizers, industrial chemicals, and consumer production while strategic manufacture continues.</p>"},
      {id:"north",title:"Northern industrial belt",html:"<p>Heijō and northern industrial districts combine power, chemicals, metals, machinery, mining links, and continental transport. Rural and mountain Korean speech survives around rather than outside this Japanese-language industrial system.</p>"},
      {id:"south",title:"Southern and coastal industry",html:"<p>Keijō and Fusan concentrate administration, finance, light and medium industry, shipbuilding, communications, transport, consumer production, and direct links to the home islands.</p>"},
      {id:"technology",title:"Technical deepening",html:"<p>Electrical equipment, precision machinery, vehicles, industrial controls, and later electronics move the region beyond bulk colonial production. Japanese standards and firms retain control of the most advanced designs and capital goods.</p>"},
      {id:"workforce",title:"The industrial workforce",html:"<p>Technical schools, apprenticeships, military experience, and factory careers produce Korean engineers, foremen, technicians, clerks, and managers. Senior command remains more Japanese than the workforce beneath it.</p>"},
      {id:"legacy",title:"Social and political legacy",html:"<p>Industrialization raises income, mobility, education, urbanization, and imperial inclusion. It also entrenches lower wages, corporate dependence, pollution, labor discipline, and the social incentives that accelerate linguistic assimilation.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"economy-chosen.html",kicker:"Economic overview",label:"Economy of Chōsen"},{href:"labor-migration-chosen.html",kicker:"Workforce",label:"Labor and Migration"},{href:"cities-chosen.html",kicker:"Industrial geography",label:"Cities of Chōsen"}],
    facts:[["Foundation","Colonial rail, port, power, mining, and chemical investment"],["Wartime role","Armaments, repair, metals, chemicals, and transport"],["Postwar role","Integrated Japanese manufacturing region"],["Northern strengths","Power, chemicals, metals, machinery, and continental transport"],["Southern strengths","Ports, shipbuilding, administration, communications, and consumer industry"],["Later sectors","Electrical equipment, vehicles, controls, and electronics"],["Ownership","Predominantly Japanese strategic capital"],["Complete plant register","Open"]]
  }),

  "labor-migration-chosen":chosenDepthArticle({
    title:"Labor and migration in Chōsen",
    infoboxKicker:"Imperial workforce and internal mobility",
    lead:"Labor and migration in Chōsen encompass wartime mobilization, postwar labor allocation, industrial recruitment, military service, migration to the Japanese home islands and imperial territories, urbanization within Korea, and the gradual conversion of coercive colonial movement into normalized but unequal internal mobility.",
    canon:"Wartime forced labor foundation, postwar change in language toward imperial labor allocation, Korean work in Japan and the wider empire, lower wages, Japanese fluency as a promotion requirement, urban migration, military service, and legal Japanese nationality are established. Numbers, compensation, labor statutes, union history, exact wage ratios, migration flows, grave records, and employer responsibility remain open.",
    sections:[
      {id:"wartime",title:"Wartime mobilization",html:"<p>Korean workers are conscripted, recruited, and coerced into mines, factories, construction, transport, military support, and work in the home islands. Legal imperial-subject status coexists with discriminatory treatment and restricted choice.</p>"},
      {id:"transition",title:"From mobilization to allocation",html:"<p>After victory, emergency language gives way to manpower planning and labor allocation. A formally civilian system can preserve routes, employers, housing, records, and unequal power established during coercive mobilization.</p>"},
      {id:"sectors",title:"Industrial employment",html:"<p>Koreans work in coal, steel, shipbuilding, chemicals, machinery, railways, ports, electrical production, vehicles, electronics, construction, shipping, and armaments. Skilled employment expands without eliminating dangerous and low-status labor.</p>"},
      {id:"migration",title:"Migration to the home islands",html:"<p>Japanese nationality allows Koreans to settle in Hokkaidō, Honshū, Kyūshū, and other imperial regions. Work, military service, education, and marriage turn temporary movement into permanent communities and mixed families.</p>"},
      {id:"urbanization",title:"Urbanization within Chōsen",html:"<p>Keijō, Fusan, Heijō, Genzan, and industrial districts draw villagers into company housing, schools, mass media, and Japanese-speaking workplaces. Urban migration is one of the strongest mechanisms of assimilation.</p>"},
      {id:"wages",title:"Wages and promotion",html:"<p>Korean wages remain generally below metropolitan Japanese wages. Japanese fluency, education, military credentials, corporate loyalty, and technical certification improve promotion while family registry and ancestry can still constrain it.</p>"},
      {id:"family",title:"Families and communities",html:"<p>Labor migration separates households, creates remittance networks, moves Korean churches and associations, and produces children for whom Japanese is the language of school and work even when grandparents retain Korean.</p>"},
      {id:"memory",title:"Memory and political interpretation",html:"<p>Official histories emphasize mobility, citizenship, and industrial advancement. Labor and preservation histories stress the continuity between wartime coercion and later systems whose contracts were freer but whose social and economic choices remained unequal.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"economy-chosen.html",kicker:"Economic setting",label:"Economy of Chōsen"},{href:"industrialization-chosen.html",kicker:"Factory system",label:"Industrialization of Chōsen"},{href:"society-chosen.html",kicker:"Family and identity",label:"Society of Chōsen"}],
    facts:[["Wartime system","Forced mobilization and conscription"],["Postwar system","Imperial labor allocation and internal migration"],["Legal nationality","Japanese"],["Major destinations","Chōsenese cities, Japanese home islands, and imperial industries"],["Principal sectors","Mining, metals, shipbuilding, chemicals, machinery, transport, construction, and military service"],["Relative wages","Generally below metropolitan Japanese wages"],["Promotion advantage","Japanese fluency and technical credentials"],["Complete migration and compensation record","Open"]]
  }),

  "education-assimilation-chosen":chosenDepthArticle({
    title:"Education and assimilation in Chōsen",
    infoboxKicker:"Japanese-language regional school system",
    lead:"Education and assimilation in Chōsen describe the Japanese-language school, technical-college, university, youth, examination, and military-training systems through which Korean residents gain imperial mobility while distinct Korean public language and historical consciousness lose ordinary institutional support.",
    canon:"Japanese-language schooling, access to technical schools, universities, civil service, corporate and officer careers, the decline of Korean and Hangul in ordinary urban education, regional and rural survival, and late preservation programs are established. School stages, curriculum, enrollment, university names, examination rules, teacher composition, Korean-language hours, and reform laws remain open.",
    sections:[
      {id:"colonial",title:"Colonial school inheritance",html:"<p>The prewar system expands Japanese instruction, restricts Korean history and geography, separates or discriminates among school populations, promotes Japanese names, and subordinates Korean-language education. Victory prevents a liberation-era reversal.</p>"},
      {id:"postwar",title:"Postwar normalization",html:"<p>Assimilation becomes less openly emergency-driven and more closely tied to ordinary opportunity. Parents choose Japanese because the school system presents it as the language of higher education, technical competence, citizenship, and modern life.</p>"},
      {id:"primary",title:"Primary and secondary education",html:"<p>Urban children learn, read, and socialize principally in Japanese. Korean knowledge increasingly enters through family, church, local electives, folk culture, or preservation programs rather than the common curriculum.</p>"},
      {id:"technical",title:"Technical education",html:"<p>Industrial schools and apprenticeships prepare workers for railways, shipyards, chemicals, machinery, electrical equipment, vehicles, electronics, and public utilities. Technical Japanese links education directly to employment.</p>"},
      {id:"university",title:"University and professional careers",html:"<p>Japanese-language universities and examinations open medicine, engineering, teaching, administration, corporate management, law, research, and officer service to Korean residents while rewarding metropolitan cultural competence.</p>"},
      {id:"family",title:"The family-language shift",html:"<p>By the 1960s many urban parents speak Korean to one another but address children in Japanese to improve school performance and mobility. The decision converts public-language hierarchy into intergenerational language change.</p>"},
      {id:"regional",title:"Regional unevenness",html:"<p>Northern mountains, rural districts, churches, isolated villages, and family networks preserve more Korean. Heijō and northern industrial centers nevertheless operate officially and technically in Japanese.</p>"},
      {id:"preservation",title:"Late preservation education",html:"<p>By the late 1970s and 1980s schools, archives, dictionaries, broadcasting, and cultural classes attempt to preserve Korean and Hangul. They broaden knowledge but do not restore Korean as the ordinary language of urban advancement.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"japanized-korean.html",kicker:"Linguistic outcome",label:"Japanized Korean"},{href:"society-chosen.html",kicker:"Social effect",label:"Society of Chōsen"},{href:"culture-media-chosen.html",kicker:"Media environment",label:"Culture and Media in Chōsen"}],
    facts:[["Principal language of instruction","Japanese"],["Primary opportunity channels","Technical school, university, civil service, corporations, and officer careers"],["Korean-language position","Family, church, rural, regional, and preservation use"],["Urban outcome","Japanese-dominant younger generations"],["Heritage script","Hangul"],["Strongest Korean retention","Northern, rural, church, and family networks"],["Preservation expansion","Late 1970s–1980s"],["Complete curriculum and enrollment record","Open"]]
  }),

  "society-chosen":chosenDepthArticle({
    title:"Society of Chōsen",
    infoboxKicker:"Integrated Korean-Japanese regional society",
    lead:"The society of Chōsen is an urbanizing, industrial, Japanese-national population in which Korean ancestry remains regionally and culturally visible while Japanese language, citizenship, schooling, employment, media, military service, migration, naming, and intermarriage progressively weaken a separate Korean political identity.",
    canon:"Japanese nationality, urban and southern assimilation, greater northern and rural retention, ordinary mixed marriage by the 1980s, regional stereotypes, reduced hostility, continued inequality, minority preservationist resentment, and the humane-improvement/cultural-loss duality are established. Demographic totals, intermarriage rates, class structure, religious shares, family law, residential segregation, and survey evidence remain open.",
    sections:[
      {id:"nationality",title:"Japanese nationality",html:"<p>Korean residents are legally Japanese and may study, work, serve, migrate, and marry across the empire. Chōsenese origin functions increasingly as a regional or ancestral distinction rather than foreign nationality.</p>"},
      {id:"urban",title:"Urban Japanese life",html:"<p>In Keijō, Fusan, and other southern cities, younger adults commonly use Japanese as their first public and often home language. Company housing, television, schools, transport, and mixed workplaces create an ordinary Japanese metropolitan life with regional characteristics.</p>"},
      {id:"rural",title:"Rural and northern continuity",html:"<p>Villages, mountain districts, churches, family networks, and spaces between industrial enclaves preserve more Korean speech and custom. Mobility and national institutions still reach these communities.</p>"},
      {id:"marriage",title:"Intermarriage",html:"<p>By the 1980s Japanese–Korean marriage is ordinary in major cities and increasingly unremarkable in the home islands. Families may still consider class, region, registry, education, religion, and accent, but Korean ancestry alone is not an automatic barrier.</p>"},
      {id:"inequality",title:"Inclusion and inequality",html:"<p>Greater social acceptance, citizenship, education, and skilled work coexist with lower wages, metropolitan preference, ancestry-based assumptions, cultural stigma, and the loss of Korean institutions.</p>"},
      {id:"religion",title:"Religion and family memory",html:"<p>Churches, temples, ancestor rites, funeral practice, family food, songs, proverbs, and household customs preserve Korean memory where formal public institutions operate in Japanese.</p>"},
      {id:"politics",title:"Political identity",html:"<p>By 1985 separatism is a small and stigmatized current. Preservationists generally defend a regional culture within Japan rather than a practical project of restored sovereignty.</p>"},
      {id:"contradiction",title:"Humane improvement and cultural loss",html:"<p>Reduced hostility and wider acceptance make daily life more humane than the earlier colonial order. The same normalization succeeds partly because society stops treating Korean difference as politically meaningful.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"labor-migration-chosen.html",kicker:"Mobility",label:"Labor and Migration"},{href:"education-assimilation-chosen.html",kicker:"School system",label:"Education and Assimilation"},{href:"straits-kinship-theory.html",kicker:"Assimilation ideology",label:"Straits Kinship Theory"},{href:"culture-media-chosen.html",kicker:"Regional expression",label:"Culture and Media in Chōsen"}],
    facts:[["Nationality","Japanese"],["Principal public language","Japanese"],["Strongest assimilation","Southern and urban Chōsen"],["Strongest Korean continuity","Northern, rural, church, and family settings"],["Intermarriage by 1980s","Ordinary in urban society"],["Separate-sovereignty movement","Small and stigmatized"],["Major social contradiction","Inclusion through cultural assimilation"],["Complete demographic profile","Open"]]
  }),

  "cities-chosen":chosenDepthArticle({
    title:"Cities of Chōsen",
    infoboxKicker:"Peninsular urban system",
    lead:"The cities of Chōsen form the administrative, industrial, maritime, military, educational, and cultural network of Japan's Korean region. International and official usage generally follows Japanese names, including Keijō, Fusan, Heijō, Genzan, and Kōshū.",
    canon:"The listed Japanese city names, Keijō's primacy, Fusan's southern port role, Heijō's northern industrial role, Genzan's eastern port role, Kōshū's southwestern regional role, urban Japanization, and the contrast with rural retention are established. Population rankings, municipal boundaries, ward systems, industry shares, transport timetables, and complete city list remain open.",
    sections:[
      {id:"system",title:"The urban system",html:"<p>Railways and coastal shipping connect regional capitals, industrial belts, ports, military facilities, universities, corporate offices, and administrative centers to Japan, Manchukuo, and China.</p>"},
      {id:"keijo",title:"Keijō",html:"<p>Keijō is the principal city, regional administrative center, largest concentration of higher education, media, finance, corporate offices, and Japanese-language cultural production. Its public life is deeply Japanized by the 1980s.</p>"},
      {id:"fusan",title:"Fusan",html:"<p>Fusan is the principal southern port and maritime gateway to the home islands. Shipping, rail transfer, naval activity, shipbuilding, commerce, industry, and mixed households intensify assimilation.</p>"},
      {id:"heijo",title:"Heijō",html:"<p>Heijō anchors the northern urban and industrial system. Official and factory life is Japanese even though surrounding districts preserve more Korean speech than the southern metropolitan corridor.</p>"},
      {id:"genzan",title:"Genzan",html:"<p>Genzan is an eastern port, fishing, transport, naval, and industrial center. Its continental and maritime routes connect the northern peninsula to the Sea of Japan.</p>"},
      {id:"koshu",title:"Kōshū",html:"<p>Kōshū is the major southwestern regional city, joining provincial administration, agriculture, education, markets, transport, and local culture to the Japanese national system.</p>"},
      {id:"names",title:"Official names and public geography",html:"<p>Japanese names are used in international recognition, timetables, maps, corporations, broadcasting, and imperial administration. Korean historical names survive in preservation, family memory, scholarship, and some local usage.</p>"},
      {id:"divide",title:"The urban–rural divide",html:"<p>Cities concentrate Japanese schools, television, corporations, settlers, military institutions, and intermarriage. Korean language survives more strongly in villages, churches, mountain districts, and the spaces between industrial enclaves.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"culture-media-chosen.html",kicker:"Metropolitan culture",label:"Culture and Media in Chōsen"},{href:"economy-chosen.html",kicker:"Urban economy",label:"Economy of Chōsen"},{href:"cities-of-imperial-japan.html",kicker:"Imperial comparison",label:"Cities of Imperial Japan"}],
    facts:[["Principal city","Keijō"],["Principal southern port","Fusan"],["Principal northern industrial city","Heijō"],["Eastern port","Genzan"],["Southwestern regional center","Kōshū"],["Official and international naming","Japanese forms"],["Common urban language","Japanese"],["Complete population ranking","Open"]]
  }),

  "culture-media-chosen":chosenDepthArticle({
    title:"Culture and media in Chōsen",
    infoboxKicker:"Regional culture inside Japanese mass media",
    lead:"Culture and media in Chōsen are the Japanese-language film, animation, music, broadcasting, publishing, theater, and popular traditions through which Korean landscapes, family structures, mourning customs, food, memory, and artistic forms survive as regional culture within a national Japanese market.",
    canon:"Absence of an independent Korean Wave, integration of Korean performers into Japanese media, regional marketing terms, Korean musical elements, the Japanese-language Keijō school, its thematic characteristics, and cultural survival without an independent national industry are established. Studios, performers, titles, directors, production totals, censorship rules, awards, and full genre history remain open.",
    sections:[
      {id:"system",title:"No independent national industry",html:"<p>Chōsen has no sovereign state building a separate film, recording, or broadcast system. Korean performers, studios, and stories enter the Japanese market as regional contributors rather than foreign imports.</p>"},
      {id:"performers",title:"Performers in the Japanese system",html:"<p>A singer or actor born in Keijō may become a national star without concealing Korean ancestry. Birthplace and regional style remain visible while separate nationality does not.</p>"},
      {id:"music",title:"Peninsular music",html:"<p>Vocal ornament, percussion, lament traditions, court music, folk rhythm, dance, and regional ballads enter Japanese popular culture under labels such as Chōsen style, northern ballad, peninsula music, and imperial regional music.</p>"},
      {id:"keijo",title:"The Keijō school",html:"<p>The Keijō school of Japanese-language cinema and animation is known for severe family drama, generational obligation, cold urban landscapes, mountains and winter, ancestral guilt, divided households, ambitious provincial students, and tension between family tradition and imperial careers.</p>"},
      {id:"language",title:"Language and atmosphere",html:"<p>Dialogue is usually Japanese. Architecture, mourning, food, family organization, landscape, music, and remembered Korean words establish the regional atmosphere. Public culture preserves Korean experience after its principal language has changed.</p>"},
      {id:"broadcast",title:"Broadcasting",html:"<p>Keijō and Fusan participate directly in the national television, radio, dubbing, news, and animation system. Regional production reaches the entire Sphere through Japanese distribution and later localization.</p>"},
      {id:"heritage",title:"Heritage and criticism",html:"<p>Preservation programs support Korean-language recordings, songs, religious material, archives, and limited broadcasts. Critics ask whether Japanese-language regional art preserves Korean culture or aestheticizes its disappearance.</p>"},
      {id:"legacy",title:"Imperial regional identity",html:"<p>By the 1980s Chōsenese culture resembles a powerful regional school within Japan: recognizable in style and ancestry, commercially successful, and largely detached from an independent national claim.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"cities-chosen.html",kicker:"Urban setting",label:"Cities of Chōsen"},{href:"society-chosen.html",kicker:"Social setting",label:"Society of Chōsen"},{href:"japanese-animation.html",kicker:"National medium",label:"Japanese Animation"},{href:"straits-kinship-theory.html",kicker:"Assimilation narrative",label:"Straits Kinship Theory"}],
    facts:[["Market status","Regional industry within Japanese national media"],["Principal production center","Keijō"],["Principal language","Japanese"],["Prestige movement","Keijō school"],["Major themes","Family obligation, memory, winter, divided households, and imperial careers"],["Musical sources","Court, folk, lament, percussion, vocal, and dance traditions"],["Independent Korean Wave","None"],["Complete studios and canon of works","Open"]]
  }),

  "straits-kinship-theory":chosenDepthArticle({
    title:"Straits Kinship Theory",
    infoboxKicker:"Assimilationist ethnographic theory",
    lead:"The Straits Kinship Theory is the politically influential but methodologically weak claim that Japanese and Korean peoples descend from one ancient population divided by the straits, with later continental influences explaining their linguistic and cultural differences.",
    canon:"The theory's 1970s prominence, ethnographic, schoolbook, and documentary circulation, central common-origin claim, political usefulness, slogan, relation to intermarriage and assimilation, and weak methodology are established. Original author, Japanese name, institutional sponsors, publication history, curriculum wording, scientific opposition, and polling remain open.",
    sections:[
      {id:"claim",title:"Central claim",html:"<p>The theory argues that an ancient common population occupied both shores before political separation. Chinese, Jurchen, and other continental influences later altered Korean language and custom more heavily than those of the islands.</p>"},
      {id:"slogan",title:"One ancient people, two historic shores",html:"<p>The popular slogan condenses the theory into an accessible national story. Japanese rule becomes reunion and integration rather than foreign conquest.</p>"},
      {id:"circulation",title:"Public circulation",html:"<p>Ethnographers, schoolbooks, museums, documentaries, popular histories, and broadcasters spread the argument during the 1970s and 1980s. Scientific qualifications are easily lost in mass presentation.</p>"},
      {id:"uses",title:"Political uses",html:"<p>The theory explains intermarriage, physical resemblance, selected customs, Korean success in imperial institutions, and the disappearance of a sharp social boundary. It gives assimilation a history older than empire.</p>"},
      {id:"stereotypes",title:"Regional stereotypes",html:"<p>Believers need not regard Koreans and island Japanese as identical. Koreans may be described as direct, emotional, robust, northern, clannish, or musical in the same regionalizing language applied to Kansai, Kyūshū, or Hokkaidō.</p>"},
      {id:"method",title:"Methodological weakness",html:"<p>The theory selects suggestive similarities and creates a simple population story without sufficient linguistic, archaeological, or historical proof. Its explanatory completeness is political rather than scientific.</p>"},
      {id:"criticism",title:"Criticism",html:"<p>Korean preservationists argue that common descent cannot erase conquest, discrimination, language suppression, or the right to describe Korean history on its own terms. Scholars dispute the conversion of uncertain prehistory into public doctrine.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The theory helps normalize Korean ancestry inside Japanese society and reduces older racial hostility. It also makes cultural loss harder to criticize by presenting the disappearance of difference as recovery of an ancient unity.</p>"}
    ],
    related:[...chosenCoreRelated,{href:"society-chosen.html",kicker:"Social application",label:"Society of Chōsen"},{href:"education-assimilation-chosen.html",kicker:"Schoolbook circulation",label:"Education and Assimilation"},{href:"culture-media-chosen.html",kicker:"Documentary culture",label:"Culture and Media in Chōsen"}],
    facts:[["Type","Common-origin ethnographic theory"],["Prominence","1970s–1980s"],["Central claim","Japanese and Koreans descend from one ancient population"],["Explanatory device","Later continental influence on Korea"],["Popular slogan","One ancient people, two historic shores"],["Principal channels","Schoolbooks, museums, documentaries, ethnography, and popular history"],["Methodological status","Weak and politically useful"],["Original author and formal title","Open"]]
  })
});

const addChosenDepthRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []),...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addChosenDepthRelated("korea",[{href:"government-administration-chosen.html",kicker:"Institutions",label:"Government and Administration"},{href:"economy-chosen.html",kicker:"Political economy",label:"Economy of Chōsen"},{href:"society-chosen.html",kicker:"Social history",label:"Society of Chōsen"},{href:"cities-chosen.html",kicker:"Urban geography",label:"Cities of Chōsen"},{href:"culture-media-chosen.html",kicker:"Regional culture",label:"Culture and Media"}]);
addChosenDepthRelated("korean-language",[{href:"education-assimilation-chosen.html",kicker:"School system",label:"Education and Assimilation"},{href:"society-chosen.html",kicker:"Social context",label:"Society of Chōsen"}]);
addChosenDepthRelated("japanized-korean",[{href:"education-assimilation-chosen.html",kicker:"Institutional cause",label:"Education and Assimilation"},{href:"culture-media-chosen.html",kicker:"Public-language outcome",label:"Culture and Media"}]);
addChosenDepthRelated("integral-territories-japan",[{href:"government-administration-chosen.html",kicker:"Korean administration",label:"Government and Administration of Chōsen"},{href:"society-chosen.html",kicker:"Korean society",label:"Society of Chōsen"}]);
addChosenDepthRelated("geacps",[{href:"economy-chosen.html",kicker:"Integral industrial region",label:"Economy of Chōsen"},{href:"cities-chosen.html",kicker:"Integral urban system",label:"Cities of Chōsen"}]);
addChosenDepthRelated("cities-of-imperial-japan",[{href:"cities-chosen.html",kicker:"Peninsular urban system",label:"Cities of Chōsen"}]);
