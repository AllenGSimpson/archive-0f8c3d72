window.deepArticles = window.deepArticles || {};

const micronesianCultureFlag = {
  src:"assets/flags/japan.svg",
  alt:"Flag of the Empire of Japan",
  caption:"Japanese national flag used in the incorporated Micronesian territories"
};

const micronesianCultureSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — integral Japanese territories and cultural preservation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Pacific consolidation and preservation policy"},
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Micronesian nationality and identity"},
  {href:"../transcript.md",label:"Master Transcript — Japanese Micronesia and regional cultures"}
];

const micronesianCultureArticle = config => ({
  category:config.category || "Peoples of Imperial Japan",
  eyebrow:config.eyebrow || "Micronesian society · Empire of Japan",
  infoboxKicker:config.infoboxKicker || "Indigenous people of Japanese Micronesia",
  portrait:config.portrait || micronesianCultureFlag,
  ...config,
  sources:[...micronesianCultureSources,...(config.sources || [])],
  categories:config.categories || ["Micronesian peoples","Japanese Pacific Territories","Empire of Japan"]
});

Object.assign(window.deepArticles, {
  "chamorro-people":micronesianCultureArticle({
    title:"Chamorro people",infoboxKicker:"Indigenous people of the Mariana Islands",
    lead:"The Chamorro people are the indigenous people of Guam, Saipan, Tinian, Rota, and the other Mariana Islands. Latte landscapes, ocean voyaging, clan and family obligations, Catholicism, village life, and the Chamorro language form a shared inheritance across an international frontier. Chamorros in Guam are American nationals, while those in the northern islands possess Japanese nationality.",
    canon:"Chamorro settlement, latte culture, Spanish conquest and missionization, demographic collapse, resettlement, Catholicism, Carolinian migration, and the 1898 political division are historical. The permanent American–Japanese division after 1941 follows setting canon. Exact 1985 population, associations, political leaders, and cross-border travel rules remain open.",
    sections:[
      {id:"origins",title:"Origins and settlement",html:"<p>The ancestors of the Chamorros crossed open ocean from Island Southeast Asia and settled the Marianas long before European arrival. Archaeology records changing pottery, fishing, cultivation, exchange, and settlement over several millennia.</p>"},
      {id:"latte",title:"Latte society",html:"<p>From about the ninth century, villages increasingly used paired stone pillars and capstones known as latte to support important houses. Latte sites, canoe traditions, burial places, oral history, and the legendary Chief Taga became enduring symbols of Chamorro antiquity.</p>"},
      {id:"spanish",title:"Spanish conquest and missionization",html:"<p>Spanish missionization after 1668 led to war, forced concentration, disease, population collapse, Catholic conversion, and profound social change. Survivors rebuilt a Chamorro society that incorporated Spanish names, foods, ritual forms, and vocabulary without becoming Spanish.</p>"},
      {id:"carolinian",title:"Carolinian migration",html:"<p>Carolinian navigators and families resettled parts of the northern Marianas during the nineteenth century. Chamorro and Carolinian communities became neighboring and intermarried peoples rather than one undifferentiated population.</p>"},
      {id:"division",title:"Division of the Marianas",html:"<p>The United States acquired Guam in 1898 while Spain sold the northern islands to Germany. Japan occupied the German Marianas in 1914, producing the enduring political division between American Guam and Japanese Saipan, Tinian, and Rota.</p>"},
      {id:"japanese",title:"Chamorros under Japanese rule",html:"<p>Sugar estates, settler towns, Japanese schools, land surveys, and company employment transformed northern Chamorro life. Indigenous residents received fewer educational and occupational advantages than settlers but retained churches, families, villages, and land claims.</p>"},
      {id:"frontier",title:"One people across two systems",html:"<p>Family, church, language, radio, small craft, and cultural organizations cross the <a href='guam-saipan-frontier.html'>Guam–Saipan frontier</a>. American and Japanese schools produce different public habits while kinship preserves a wider Mariana identity.</p>"},
      {id:"1985",title:"Chamorro identity in 1985",html:"<p>By 1985 Chamorro identity is regional, Catholic, familial, linguistic, and increasingly preservationist. It does not provide one citizenship because the archipelago remains divided between the United States and Japan.</p>"}
    ],
    related:[{href:"chamorro-language.html",kicker:"Ancestral language",label:"Chamorro Language"},{href:"northern-mariana-islands.html",kicker:"Japanese homeland",label:"Northern Mariana Islands"},{href:"guam.html",kicker:"American homeland",label:"Guam"},{href:"guam-saipan-frontier.html",kicker:"Political division",label:"Guam–Saipan Frontier"},{href:"tinian.html",kicker:"Historic island",label:"Tinian"},{href:"rota.html",kicker:"Southern island",label:"Rota"}],
    facts:[["Homeland","Mariana Islands"],["Principal islands","Guam, Saipan, Tinian, and Rota"],["Language","Chamorro"],["Religion","Predominantly Roman Catholic"],["Precolonial monument","Latte"],["Colonial division","Since 1898"],["Northern nationality","Japanese"],["Guam nationality","American"]],
    sources:[{href:"https://www.guampedia.com/our-heritage/",label:"Guampedia — Chamorro heritage"},{href:"https://www.guampedia.com/latte-structures/",label:"Guampedia — latte architecture"},{href:"https://www.guampedia.com/acculturation/",label:"Guampedia — Spanish-era transformation"}]
  }),

  "chamorro-language":micronesianCultureArticle({
    title:"Chamorro language",category:"Languages",eyebrow:"Austronesian language · Mariana Islands",infoboxKicker:"Indigenous language of the Marianas",
    lead:"Chamorro is the indigenous Austronesian language of the Mariana Islands. It is spoken on both American Guam and the Japanese northern islands, where separate school systems expose it to English and Japanese respectively. Spanish contact left a large lexical and cultural layer, while the language retained an Austronesian grammatical structure and developed distinct Guamanian, Rotanese, and northern varieties.",
    canon:"Chamorro's Austronesian identity, early Malayo-Polynesian position, Spanish loans, Mariana dialects, mission literacy, and American suppression on Guam are historical. Continuous Japanese schooling in the north and the long-lived cross-border divergence follow setting canon. Exact 1985 speaker counts, legal status, orthography commission, and vitality classification remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Chamorro belongs to the Malayo-Polynesian branch of Austronesian but is not a Nuclear Micronesian language. Its early branching position and long isolation distinguish it from the languages of the Carolines and Marshalls.</p>"},
      {id:"name",title:"Names and varieties",html:"<p>Speakers use forms including <em>Finu' Chamorro</em> and <em>Fino' CHamoru</em>. Guamanian, Rotanese, and other northern speech varieties remain mutually connected while differing in pronunciation, vocabulary, and colonial loans.</p>"},
      {id:"spanish",title:"Spanish contact",html:"<p>Three centuries of Spanish government and Catholic missionization introduced extensive vocabulary and some structural influence. Borrowed words were adapted to Chamorro sound patterns and ordinary grammar.</p>"},
      {id:"writing",title:"Writing and orthography",html:"<p>Mission dictionaries and religious texts provided early Latin-script traditions. Twentieth-century educators debated how closely spelling should represent pronunciation and whether Guam and the northern islands should share one standard.</p>"},
      {id:"guam",title:"English pressure on Guam",html:"<p>The American naval government made English the official school language and restricted Chamorro use. By the mid-century, English increasingly dominated public education, administration, military employment, and younger urban households.</p>"},
      {id:"north",title:"Japanese pressure in the north",html:"<p>Japanese schools and settler-majority towns made Japanese the language of advancement on Saipan and Tinian. Chamorro remained stronger in church, family, land, and village settings, with Japanese loans developing separately from Guam's English vocabulary.</p>"},
      {id:"cooperation",title:"Cross-frontier standardization",html:"<p>Clergy, teachers, broadcasters, and cultural associations exchanged dictionaries and spelling proposals across the frontier. Joint work sought mutual readability without denying regional pronunciation or the two different public-language environments.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Chamorro is vulnerable on both sides of the frontier for different reasons. It retains strong symbolic, religious, and familial value, but English dominates Guam's public life and Japanese dominates the northern islands.</p>"}
    ],
    related:[{href:"chamorro-people.html",kicker:"Speaker community",label:"Chamorro People"},{href:"guam.html",kicker:"American variety",label:"Guam"},{href:"northern-mariana-islands.html",kicker:"Japanese varieties",label:"Northern Mariana Islands"},{href:"rota.html",kicker:"Rotanese variety",label:"Rota"},{href:"micronesian-languages.html",kicker:"Regional comparison",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Northern preservation policy",label:"Japanese Preservationism"}],
    facts:[["Native names","Finu' Chamorro · Fino' CHamoru"],["Family","Austronesian"],["Branch","Early Malayo-Polynesian; not Nuclear Micronesian"],["Script","Latin"],["Principal varieties","Guamanian, Rotanese, and northern Mariana"],["Major historical influence","Spanish"],["Competing public languages","English and Japanese"],["1985 condition","Vulnerable across a divided homeland"]],
    sources:[{href:"https://www.guampedia.com/chamorro-orthography/",label:"Guampedia — Chamorro orthography and language policy"},{href:"https://www.guampedia.com/revised-chamorro-english-dictionary/",label:"Guampedia — Chamorro dictionary and language history"},{href:"https://en.wikipedia.org/wiki/Chamorro_language",label:"Linguistic reference — Chamorro language"}]
  }),

  "palauan-people":micronesianCultureArticle({
    title:"Palauan people",infoboxKicker:"Indigenous people of the Palau Islands",
    lead:"The Palauan people are the indigenous people of Babeldaob, Koror, Peleliu, Angaur, the Rock Islands, and Palau's outlying communities. Matrilineal clans, ranked title systems, village councils, land, reef tenure, exchange, funerals, meeting houses, and the Palauan language organize a society transformed but not erased by Spanish, German, and Japanese rule.",
    canon:"Palauan origins, clans, matrilineal descent, male and female titleholders, village organization, bai, customary land, colonial history, and Japanese-era migration are historical. Permanent Japanese citizenship and settler continuity follow setting canon. Exact 1985 population, title structures, elected institutions, and land-court arrangements remain open.",
    sections:[
      {id:"homeland",title:"Island homeland",html:"<p>Palauan communities occupy high volcanic islands, raised limestone islands, the central lagoon, and remote southwest islands. Geography creates strong village and island identities within the wider Palauan people.</p>"},
      {id:"clans",title:"Clans and descent",html:"<p>Matrilineal clans connect people to land, rank, obligation, and ancestry. Adoption, marriage, residence, and service complicate any simple equation between biological descent and social membership.</p>"},
      {id:"titles",title:"Titles and village government",html:"<p>Male and female titleholders exercise complementary authority within ranked village systems. Councils, clan leaders, and community deliberation remain important even where Japanese municipal law supplies the formal public framework.</p>"},
      {id:"bai",title:"Bai and public culture",html:"<p>The decorated <em>bai</em> serves as a meeting house and visible statement of history, rank, and community. Storyboards, carving, dance, exchange, and oral history carry knowledge across generations.</p>"},
      {id:"colonial",title:"Colonial transformations",html:"<p>Spanish claims and missions were followed by German administration, phosphate development, and Japanese occupation. Each government used existing authority while changing land, labor, health, education, and external trade.</p>"},
      {id:"settlers",title:"Japanese settler society",html:"<p>Koror's capital functions attracted Japanese, Okinawan, Korean, and other migrants. Settlers outnumbered Palauans in the district before the long war and remained afterward, creating a permanent mixed urban society.</p>"},
      {id:"land",title:"Land and customary continuity",html:"<p>Clan land survived beside government reserves, military installations, concessions, and individually recorded parcels. Disputes over inheritance and return remain among the most consequential forms of Palauan politics.</p>"},
      {id:"1985",title:"Palauan identity in 1985",html:"<p>By 1985 Palauans possess Japanese nationality while maintaining a distinct peoplehood grounded in language, land, clan, village, and island history. Cultural recognition does not imply a separate Palauan state.</p>"}
    ],
    related:[{href:"palauan-language.html",kicker:"Ancestral language",label:"Palauan Language"},{href:"palau-islands.html",kicker:"Homeland",label:"Palau Islands"},{href:"koror.html",kicker:"Metropolitan center",label:"Koror"},{href:"babeldaob.html",kicker:"Largest island",label:"Babeldaob"},{href:"peleliu.html",kicker:"Southern community",label:"Peleliu"},{href:"japanese-settlement-micronesia.html",kicker:"Settler history",label:"Japanese Settlement in Micronesia"}],
    facts:[["Homeland","Palau Islands"],["Language","Palauan"],["Descent emphasis","Matrilineal clans"],["Political tradition","Ranked male and female titles"],["Meeting house","Bai"],["Colonial rulers","Spain, Germany, and Japan"],["Nationality in 1985","Japanese"],["Sovereign Palauan state","None"]],
    sources:[{href:"https://www.palaugov.pw/who-we-are/",label:"Government of Palau — people, culture, and colonial history"},{href:"https://www.palaugov.pw/wp-content/uploads/2016/03/2005-Census-Monograph-Report.pdf",label:"Government of Palau — population and cultural profile"}]
  }),

  "palauan-language":micronesianCultureArticle({
    title:"Palauan language",category:"Languages",eyebrow:"Austronesian language · Palau Islands",infoboxKicker:"Indigenous language of Palau",
    lead:"Palauan, known as <em>a tekoi er a Belau</em>, is the indigenous language of the Palau Islands. It belongs to the Malayo-Polynesian branch of Austronesian but not to the Oceanic or Nuclear Micronesian group. Continuous Japanese government makes Japanese its principal public counterpart, while Palauan remains widely used in households, villages, clan affairs, churches, and regional culture.",
    canon:"Palauan classification, traditional use, Japanese loanwords, historical katakana, Latin orthography, and broad local vitality are historical. Continued Japanese dominance and absence of an English trusteeship follow setting canon. Exact 1985 speakers, legal designation, school hours, standard commission, and dialect map remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Palauan is a Malayo-Polynesian Austronesian language whose closer subgrouping remains uncertain. It stands apart from the Oceanic languages spoken across most of the Carolines and Marshalls.</p>"},
      {id:"name",title:"Name and regional speech",html:"<p>The indigenous name <em>a tekoi er a Belau</em> means the language or speech of Belau. Village, island, age, and urban background produce variation without dividing the main islands into separate languages.</p>"},
      {id:"grammar",title:"Linguistic character",html:"<p>Palauan possesses its own complex system of verbs, pronouns, possession, and sound alternations. Shared regional vocabulary reflects long contact with Yap, the Philippines, and other Pacific networks.</p>"},
      {id:"writing",title:"Writing systems",html:"<p>Missionaries developed Latin-script writing, while Japanese schools and publications also used katakana for Palauan words. Later standardization favored Latin spelling but retained debate over sound representation.</p>"},
      {id:"loans",title:"Colonial loanwords",html:"<p>Spanish, German, and especially Japanese rule introduced vocabulary for money, paper, machines, government, schooling, transport, and everyday goods. Borrowed words became Palauan through local pronunciation and grammar.</p>"},
      {id:"public",title:"Palauan and Japanese",html:"<p>Japanese dominates higher administration, secondary education, military employment, and inter-island commerce. Palauan remains the ordinary language of many local households, village councils, land discussions, funerals, and cultural events.</p>"},
      {id:"preservation",title:"Education and preservation",html:"<p>Schools, radio, dictionaries, storyboards, church texts, oral-history projects, and local-language broadcasting support transmission. Educators debate whether metropolitan bilingualism can remain stable across generations.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Palauan remains one of the stronger indigenous languages of Japanese Micronesia. It is not generally endangered across the islands, although Japanese-first children are increasingly common in Koror's settler and mixed neighborhoods.</p>"}
    ],
    related:[{href:"palauan-people.html",kicker:"Speaker community",label:"Palauan People"},{href:"palau-islands.html",kicker:"Language homeland",label:"Palau Islands"},{href:"koror.html",kicker:"Urban bilingual center",label:"Koror"},{href:"babeldaob.html",kicker:"Village heartland",label:"Babeldaob"},{href:"micronesian-languages.html",kicker:"Regional comparison",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Native name","a tekoi er a Belau"],["Family","Austronesian"],["Branch","Malayo-Polynesian; non-Oceanic"],["Scripts","Latin; historical katakana"],["Principal public counterpart","Japanese"],["Major colonial loan source","Japanese"],["Core domains","Household, village, land, church, and culture"],["1985 condition","Broadly vigorous with urban shift"]],
    sources:[{href:"https://www.palaugov.pw/who-we-are/",label:"Government of Palau — language and Japanese influence"},{href:"https://en.wikipedia.org/wiki/Palauan_language",label:"Linguistic reference — Palauan language"}]
  }),

  "yapese-people":micronesianCultureArticle({
    title:"Yapese people",infoboxKicker:"Indigenous people of the Yap main islands",
    lead:"The Yapese people are the indigenous people of Wa'ab, the Yap main islands. Estate groups, villages, ranked land, councils, stone money, dance, navigation, and relations with the outer islands distinguish Yapese society from the Chuukic-speaking communities administered through the same district. Japanese nationality unites the district legally without erasing that difference.",
    canon:"Yapese village organization, ranked estates, stone money, Palau quarrying, navigation, outer-island sawei relations, colonial history, and distinct language are historical. Continued Japanese rule and nationality follow setting canon. Exact 1985 councils, caste terminology, land law, population, and outer-island representation remain open.",
    sections:[
      {id:"homeland",title:"Wa'ab",html:"<p>The Yap main islands form one closely connected high-island system surrounded by reef. Villages, estates, paths, taro areas, meeting places, and fishing grounds make land and rank visible in the inhabited landscape.</p>"},
      {id:"estate",title:"Estate and rank",html:"<p>Social position attaches strongly to named land, village standing, and inherited relationships. A person acts through household and estate obligations rather than as an isolated owner in the metropolitan sense.</p>"},
      {id:"money",title:"Stone money",html:"<p>Large stone disks quarried in Palau circulate through remembered transfers rather than ordinary physical exchange. Their value depends on size, quality, difficulty of acquisition, and the history of particular pieces.</p>"},
      {id:"sawei",title:"Outer-island relations",html:"<p>The <em>sawei</em> network historically linked Yap with atolls extending eastward through tribute, protection, exchange, and sailing routes. Japanese district government inherited these relationships but did not turn outer-island peoples into ethnic Yapese.</p>"},
      {id:"colonial",title:"Colonial administration",html:"<p>Spanish claims, German government, and Japanese occupation introduced missions, copra, taxes, roads, schools, police, cable communications, and new courts. Local leaders remained essential to actual administration.</p>"},
      {id:"japanese",title:"Japanese rule",html:"<p>Yap received fewer settlers and less plantation development than Saipan or Koror. Schools and government spread Japanese, while village life and customary authority preserved the Yapese language and social order.</p>"},
      {id:"change",title:"Migration and social change",html:"<p>Education and wage work drew younger Yapese toward district centers, Truk, Koror, and Japan. Remittances and return migration linked metropolitan skills to communities that still judged status through land and obligation.</p>"},
      {id:"1985",title:"Yapese identity in 1985",html:"<p>By 1985 the Yapese are Japanese nationals with a highly distinct island identity. Cultural preservation protects dance, navigation, meeting houses, stone-money sites, and oral history while local politics continue to turn on land and rank.</p>"}
    ],
    related:[{href:"yapese-language.html",kicker:"Ancestral language",label:"Yapese Language"},{href:"yap-islands.html",kicker:"Homeland and district",label:"Yap Islands"},{href:"palau-islands.html",kicker:"Stone quarry relationship",label:"Palau Islands"},{href:"caroline-islands.html",kicker:"Regional setting",label:"Caroline Islands"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"},{href:"japanese-preservationism.html",kicker:"Cultural policy",label:"Japanese Preservationism"}],
    facts:[["Homeland","Yap main islands · Wa'ab"],["Language","Yapese"],["Social foundation","Named estates, villages, and rank"],["Famous exchange medium","Stone money"],["Historic regional network","Sawei"],["Outer-island peoples","Distinct Chuukic-speaking communities"],["Nationality in 1985","Japanese"],["Principal administrative center","Yap district"]],
    sources:[{href:"https://www.tci.gov.fm/documents/communications/fsm_palau_fiber/essa_2nd_updated/main_body.pdf",label:"FSM social assessment — Yapese culture, language, and social organization"},{href:"https://nach.gov.fm/world-heritage/",label:"FSM National Archives — Yapese stone-money heritage"}]
  }),

  "yapese-language":micronesianCultureArticle({
    title:"Yapese language",category:"Languages",eyebrow:"Austronesian language · Yap main islands",infoboxKicker:"Indigenous language of Wa'ab",
    lead:"Yapese, or <em>Thiin nu Waqaab</em>, is the indigenous language of the Yap main islands. It belongs to the Oceanic branch of Austronesian, but its closer classification remains disputed. Yapese is not the language of all islands in the Yap district, whose outer atolls principally speak Ulithian, Woleaian, Satawalese, and other Chuukic languages.",
    canon:"Yapese's Austronesian and Oceanic position, uncertain closer classification, distinction from outer-island languages, Latin writing, and local vitality are historical. Japanese public dominance and the absence of English trusteeship follow setting canon. Exact 1985 speaker numbers, dialects, orthography, school policy, and vitality label remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Yapese belongs to the Oceanic branch of Austronesian, but attempts to place it more narrowly remain uncertain. Some comparisons connect it with the Admiralty Islands languages rather than the Nuclear Micronesian group.</p>"},
      {id:"name",title:"Name and homeland",html:"<p><em>Thiin nu Waqaab</em> identifies the speech of Wa'ab, the Yap main islands. Village and age differences exist within a language community tied to a compact island system.</p>"},
      {id:"outer",title:"Outer-island languages",html:"<p>Ulithian, Woleaian, Satawalese, and neighboring atoll languages are not dialects of Yapese. Japanese administration grouped their speakers within Yap district for practical reasons rather than linguistic unity.</p>"},
      {id:"structure",title:"Linguistic character",html:"<p>Yapese distinguishes vowel length and possesses elaborate consonant contrasts, reduplication, number, and inclusive–exclusive pronouns. Its structure reflects a history separate from the better-known Chuukic languages.</p>"},
      {id:"writing",title:"Writing",html:"<p>Mission and colonial scholarship developed Latin-script spelling, while Japanese records often supplied kana transcriptions. Later educators sought a consistent local standard for schools and dictionaries.</p>"},
      {id:"japanese",title:"Japanese contact",html:"<p>Japanese supplied vocabulary for government, school, transport, machines, military service, and imported goods. It became the language of higher administration without replacing Yapese in most village households.</p>"},
      {id:"preservation",title:"Education and documentation",html:"<p>Local readers, radio, dictionaries, recorded narratives, dance texts, navigation terminology, and place-name surveys support transmission. Teachers must also prepare separate materials for the district's outer-island languages.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Yapese remains vigorous on the main islands but faces domain loss in secondary education and off-island employment. Migration threatens continuity more than immediate abandonment within village communities.</p>"}
    ],
    related:[{href:"yapese-people.html",kicker:"Speaker community",label:"Yapese People"},{href:"yap-islands.html",kicker:"Language homeland",label:"Yap Islands"},{href:"micronesian-languages.html",kicker:"Regional comparison",label:"Micronesian Languages"},{href:"caroline-islands.html",kicker:"Regional geography",label:"Caroline Islands"},{href:"palauan-language.html",kicker:"Western contact language",label:"Palauan Language"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Native name","Thiin nu Waqaab"],["Family","Austronesian"],["Branch","Oceanic; closer placement disputed"],["Homeland","Yap main islands"],["Script","Latin; historical kana transcription"],["Outer-island languages","Distinct Chuukic languages"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous locally with domain loss"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Yapese_language",label:"Linguistic reference — Yapese language"},{href:"https://hsa.gov.fm/wp-content/uploads/2024/01/Comprehensive-Assessment-of-Primary-Care-Systems.pdf",label:"FSM national assessment — indigenous language distribution"}]
  }),

  "chuukese-people":micronesianCultureArticle({
    title:"Chuukese people",infoboxKicker:"Indigenous people of Truk and the central Carolines",
    lead:"The Chuukese people are the principal indigenous people of the Truk lagoon islands and many communities of the central Carolines. Clan and lineage, matrilineal land, island affiliation, reef and lagoon knowledge, churches, migration, and the Chuukese language shape a society living beside Japan's largest Micronesian naval establishment.",
    canon:"Chuukese island diversity, clans, matrilineal inheritance, lagoon economy, mission Christianity, German and Japanese administration, and naval transformation are historical. The absence of Operation Hailstone and continued Japanese rule follow setting canon. Exact 1985 population, councils, migration patterns, naval employment, and district representation remain open.",
    sections:[
      {id:"homeland",title:"Lagoon and outer islands",html:"<p>Chuukese communities occupy high islands within the Truk lagoon and many lower islands beyond it. Island identity remains politically and socially important inside the broader ethnolinguistic category.</p>"},
      {id:"clan",title:"Clan, lineage, and land",html:"<p>Matrilineal clans and lineages connect people to land, adoption, inheritance, obligation, and support. Residence and paternal relationships also matter, producing overlapping networks across islands.</p>"},
      {id:"lagoon",title:"Lagoon economy",html:"<p>Fishing, breadfruit, taro, coconuts, canoe travel, reef knowledge, and inter-island exchange sustained communities before wage employment. The lagoon remains a lived landscape rather than only a naval harbor.</p>"},
      {id:"mission",title:"Christianity",html:"<p>Catholic and Protestant missions established churches, schools, literacy, and new moral communities. Denominational affiliation became intertwined with island and family relationships.</p>"},
      {id:"colonial",title:"German and Japanese rule",html:"<p>German government expanded trade and administration before Japan occupied the islands in 1914. Japanese schools, health services, police, firms, and migration grew around the district station.</p>"},
      {id:"naval",title:"Naval-base society",html:"<p>Fleet anchorage, repair, aviation, construction, and supply drew workers and transformed lagoon movement. Military reservations and requisition constrained residents while wage work created new routes to advancement.</p>"},
      {id:"no-hailstone",title:"No Operation Hailstone",html:"<p>American carrier aircraft never destroy the Truk base in 1944. Chuukese communities avoid the bombardment and later occupation, while the surviving naval complex remains a powerful presence after the long war.</p>"},
      {id:"1985",title:"Chuukese identity in 1985",html:"<p>By 1985 Chuukese residents are Japanese nationals with strong island, clan, church, and language identities. Service migration spreads Chuukese communities through Koror, Saipan, Japan, and other imperial ports.</p>"}
    ],
    related:[{href:"chuukese-language.html",kicker:"Ancestral language",label:"Chuukese Language"},{href:"truk-islands.html",kicker:"Principal homeland",label:"Truk Islands"},{href:"caroline-islands.html",kicker:"Regional setting",label:"Caroline Islands"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"},{href:"imperial-japanese-navy-postwar.html",kicker:"Naval relationship",label:"Postwar Imperial Japanese Navy"},{href:"japanese-settlement-micronesia.html",kicker:"Settler society",label:"Japanese Settlement in Micronesia"}],
    facts:[["Principal homeland","Truk Islands"],["Language","Chuukese"],["Descent emphasis","Matrilineal clans and lineages"],["Religious traditions","Catholic and Protestant Christianity"],["Principal colonial-era employer","Japanese naval establishment"],["Operation Hailstone","Does not occur"],["Nationality in 1985","Japanese"],["Major identity layers","Island, clan, church, and language"]],
    sources:[{href:"https://www.tci.gov.fm/documents/communications/Reports/IP%20Due%20Diligence%20Report_Yap%20and%20Chuuk.pdf",label:"FSM social assessment — Chuukese society and language"},{href:"https://nach.gov.fm/world-heritage/",label:"FSM National Archives — Chuuk Lagoon heritage"}]
  }),

  "chuukese-language":micronesianCultureArticle({
    title:"Chuukese language",category:"Languages",eyebrow:"Nuclear Micronesian language · Central Carolines",infoboxKicker:"Principal language of the Truk Islands",
    lead:"Chuukese, historically called Trukese in international and Japanese administration, is the principal indigenous language of the Truk lagoon and one of the largest Nuclear Micronesian languages. Closely related central-Caroline languages form a wider Chuukic chain, but island communities maintain distinct speech identities rather than one uniform dialect continuum.",
    canon:"Chuukese's Nuclear Micronesian and Chuukic classification, lagoon varieties, relation to Mortlockese and other languages, mission literacy, and broad vitality are historical. Japanese dominance and absence of English trusteeship follow setting canon. Exact 1985 speakers, standard dialect, school policy, and boundaries with neighboring languages remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Chuukese belongs to the Chuukic branch of the Nuclear Micronesian languages within Oceanic Austronesian. It is related to languages extending westward across many central Caroline atolls.</p>"},
      {id:"names",title:"Chuukese and Trukese",html:"<p><em>Chuukese</em> follows the local island name, while <em>Trukese</em> remains common in Japanese and international historical usage. Both names may appear in 1985 publications depending on audience and institution.</p>"},
      {id:"variation",title:"Lagoon variation",html:"<p>Pronunciation and vocabulary vary among lagoon islands and between lagoon and outer communities. Mortlockese is closely related and sometimes treated with Chuukese in church or educational materials, but speakers retain a separate identity.</p>"},
      {id:"structure",title:"Linguistic character",html:"<p>Chuukese uses inclusive and exclusive pronouns, possessive classifications, reduplication, and a rich consonant system. Navigation, reef, kinship, and land vocabulary preserve fine distinctions tied to island life.</p>"},
      {id:"literacy",title:"Mission literacy",html:"<p>Catholic and Protestant missions produced religious texts and literacy before and during Japanese rule. Competing spelling habits later required educational standardization.</p>"},
      {id:"japanese",title:"Japanese contact",html:"<p>Naval construction and public schools introduced extensive Japanese terminology. Japanese became necessary for government, base employment, secondary education, and movement beyond the district.</p>"},
      {id:"media",title:"Schools and media",html:"<p>Primary readers, radio, church broadcasting, oral-history recordings, and dictionaries support Chuukese. Standard materials must avoid treating smaller related languages as defective forms of the lagoon standard.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Chuukese remains vigorous across much of the central Carolines. Japanese is displacing it in metropolitan and technical domains, but household transmission remains broad outside the most Japanese-speaking naval neighborhoods.</p>"}
    ],
    related:[{href:"chuukese-people.html",kicker:"Speaker community",label:"Chuukese People"},{href:"truk-islands.html",kicker:"Language homeland",label:"Truk Islands"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"pohnpeian-language.html",kicker:"Eastern relative",label:"Pohnpeian Language"},{href:"yapese-language.html",kicker:"Western contrast",label:"Yapese Language"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Alternative historical name","Trukese"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Principal homeland","Truk lagoon"],["Closely related variety","Mortlockese"],["Script","Latin"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous with metropolitan domain loss"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Chuukese_language",label:"Linguistic reference — Chuukese language"},{href:"https://hsa.gov.fm/wp-content/uploads/2024/01/Comprehensive-Assessment-of-Primary-Care-Systems.pdf",label:"FSM national assessment — indigenous languages"}]
  }),

  "pohnpeian-people":micronesianCultureArticle({
    title:"Pohnpeian people",infoboxKicker:"Indigenous people of Ponape",
    lead:"The Pohnpeian people are the principal indigenous people of Ponape and its immediate island world. Their history encompasses the Saudeleur dynasty, Nan Madol, Isokelekel, the Nahnmwarki title system, clan and land authority, sakau ceremony, mission Christianity, resistance to Spain and Germany, and adaptation under Japanese rule.",
    canon:"Pohnpeian settlement, Saudeleur rule, Nan Madol, Isokelekel tradition, Nahnmwarki polity, matrilineal clans, sakau, missionization, Spanish conflict, Sokehs rebellion, and Japanese government are historical. Continued Japanese nationality follows setting canon. Exact 1985 population, council structure, municipal representation, and titleholders remain open.",
    sections:[
      {id:"homeland",title:"Ponape homeland",html:"<p>Pohnpeian communities occupy the high island's watersheds, coasts, reef, lagoon, and nearby islands. Municipal and section identities remain important inside the broader peoplehood.</p>"},
      {id:"saudeleur",title:"Saudeleur and Nan Madol",html:"<p>The Saudeleur dynasty centralized tribute and ritual authority from <a href='nan-madol.html'>Nan Madol</a>. Monumental islets and oral histories preserve both political achievement and memories of burdensome rule.</p>"},
      {id:"isokelekel",title:"Isokelekel and the title system",html:"<p>Tradition credits Isokelekel with overthrowing the Saudeleurs and dispersing authority. The later Nahnmwarki system organized ranked titles across separate polities rather than recreating one island monarchy.</p>"},
      {id:"clan",title:"Clan, land, and sakau",html:"<p>Matrilineal clans, land rights, titles, reciprocal labor, feasts, and sakau ceremony bind social and political relationships. Colonial law altered inheritance and administration but could not simply replace these institutions.</p>"},
      {id:"contact",title:"Mission and colonial conflict",html:"<p>Mission Christianity, traders, disease, and foreign settlements transformed Ponape during the nineteenth century. Pohnpeian resistance challenged Spanish authority before German annexation.</p>"},
      {id:"sokehs",title:"Sokehs rebellion",html:"<p>The 1910–1911 Sokehs rebellion resisted German labor and authority. German suppression, execution, and deportation made the uprising a central memory of colonial resistance.</p>"},
      {id:"japanese",title:"Japanese district society",html:"<p>Japanese schools, agriculture, roads, public health, police, settlers, and district government centered on Kolonia. Unequal institutions coexisted with titled authority, churches, and local land systems.</p>"},
      {id:"1985",title:"Pohnpeian identity in 1985",html:"<p>By 1985 Pohnpeians possess Japanese nationality but remain a distinct people through language, title, clan, municipality, church, and historic memory. Preservation of Nan Madol and Sokehs becomes inseparable from arguments about colonial interpretation.</p>"}
    ],
    related:[{href:"pohnpeian-language.html",kicker:"Ancestral language",label:"Pohnpeian Language"},{href:"ponape.html",kicker:"Homeland",label:"Ponape"},{href:"nan-madol.html",kicker:"Monumental center",label:"Nan Madol"},{href:"kosrae.html",kicker:"Eastern neighbor",label:"Kosrae"},{href:"caroline-islands.html",kicker:"Regional setting",label:"Caroline Islands"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Ponape"],["Language","Pohnpeian"],["Historic dynasty","Saudeleur"],["Monumental center","Nan Madol"],["Traditional political system","Nahnmwarki titles"],["Major resistance","Sokehs rebellion · 1910–1911"],["Nationality in 1985","Japanese"],["Principal colonial city","Kolonia"]],
    sources:[{href:"https://nach.gov.fm/nan-madol-east-site-of-temwen-island-temwen-island/",label:"FSM National Archives — Nan Madol and the Saudeleur dynasty"},{href:"https://nach.gov.fm/sokehs-mass-grave-site-komwonlaid-kolonia/",label:"FSM National Archives — Sokehs rebellion memory"},{href:"https://nach.gov.fm/japanese-elementary-school-for-pohnpeian-children-ni-ahlek-kolonia/",label:"FSM National Archives — Japanese schooling on Ponape"}]
  }),

  "pohnpeian-language":micronesianCultureArticle({
    title:"Pohnpeian language",category:"Languages",eyebrow:"Nuclear Micronesian language · Ponape",infoboxKicker:"Indigenous language of Ponape",
    lead:"Pohnpeian is the principal indigenous language of Ponape and a member of the Pohnpeic branch of the Nuclear Micronesian languages. It possesses ordinary and honorific registers associated with rank, and it stands beside closely related but distinct languages such as Mokilese and Pingelapese. Japanese is the common language of higher government and inter-island education.",
    canon:"Pohnpeian classification, Kitti variety, honorific speech, mission orthography, related Pohnpeic languages, and German, Spanish, Japanese, and English loans are historical. Continuous Japanese public dominance follows setting canon. Exact 1985 speakers, standard form, school hours, and vitality designation remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Pohnpeian belongs to the Pohnpeic group within the Chuukic–Pohnpeic branch of Nuclear Micronesian. Mokilese, Pingelapese, and Ngatikese are related languages rather than simple village dialects of Pohnpeian.</p>"},
      {id:"names",title:"Names and varieties",html:"<p>Common and honorific names include <em>Lokaiahn Pohnpei</em> and <em>Mahsen en Pohnpei</em>. Kitti speech is the most frequently identified major regional variety, while local differences occur elsewhere.</p>"},
      {id:"high",title:"Honorific language",html:"<p><em>Meing</em> or <em>Mahsen en Meing</em> uses specialized vocabulary when addressing or referring to people of high rank. Speech therefore encodes relationships within the title system rather than only grammatical information.</p>"},
      {id:"writing",title:"Orthography",html:"<p>Mission literacy and German scholarship helped shape Latin spelling, including the use of written <em>h</em> in long vowels. Japanese schools taught the local language unevenly beside Japanese scripts.</p>"},
      {id:"loans",title:"Contact vocabulary",html:"<p>Spanish, German, Japanese, and limited English contact supplied words for religion, government, machines, trade, and sport. Continuous Japanese rule makes Japanese the largest living source of modern technical terminology.</p>"},
      {id:"public",title:"Pohnpeian and Japanese",html:"<p>Pohnpeian dominates many households, churches, title ceremonies, land matters, and local radio. Japanese governs secondary school, regional administration, military service, and higher professional life.</p>"},
      {id:"preservation",title:"Documentation and teaching",html:"<p>Dictionaries, Bible translations, oral histories, honorific vocabulary, place names, radio, and school readers support the language. Preservationists emphasize that related outer-island languages require their own materials.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Pohnpeian remains vigorous on Ponape and is transmitted widely within families. Japanese pressure is strongest in Kolonia and among households whose work and education are primarily metropolitan.</p>"}
    ],
    related:[{href:"pohnpeian-people.html",kicker:"Speaker community",label:"Pohnpeian People"},{href:"ponape.html",kicker:"Language homeland",label:"Ponape"},{href:"nan-madol.html",kicker:"Historic vocabulary and oral tradition",label:"Nan Madol"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"chuukese-language.html",kicker:"Western relative",label:"Chuukese Language"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Native names","Lokaiahn Pohnpei · Mahsen en Pohnpei"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Pohnpeic"],["Major variety","Kitti"],["Honorific register","Meing"],["Script","Latin"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous with urban pressure"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Pohnpeian_language",label:"Linguistic reference — Pohnpeian language"},{href:"https://hsa.gov.fm/wp-content/uploads/2024/01/Comprehensive-Assessment-of-Primary-Care-Systems.pdf",label:"FSM national assessment — indigenous languages"}]
  }),

  "marshallese-people":micronesianCultureArticle({
    title:"Marshallese people",infoboxKicker:"Indigenous people of the Ratak and Ralik chains",
    lead:"The Marshallese people are the indigenous people of the Ratak and Ralik chains. Matrilineal clans, iroij authority, land rights, canoe voyaging, wave navigation, copra, churches, and the Marshallese language join communities dispersed across a vast ocean. Japanese nationality does not remove the social primacy of land or the distinction between the two island chains.",
    canon:"Marshallese settlement, matrilineal clans, iroij, alap and rijerbal roles, navigation, mission Christianity, German protectorate, Japanese mandate rule, and copra economy are historical. The absence of American occupation and nuclear testing follows setting canon. Exact 1985 population, titleholders, district councils, and land adjudication remain open.",
    sections:[
      {id:"homeland",title:"Ratak and Ralik",html:"<p>The eastern Ratak and western Ralik chains contain low atolls separated by great distances. Atoll, islet, and chain identity shape travel, dialect, marriage, and political connection.</p>"},
      {id:"land",title:"Matrilineal land system",html:"<p>People receive land rights through the matrilineal <em>jowi</em> or clan. Iroij, alap, and rijerbal possess different rights and obligations over authority, supervision, and daily work.</p>"},
      {id:"navigation",title:"Ocean knowledge",html:"<p>Navigators read swells, currents, stars, clouds, birds, reefs, and remembered routes. Stick-chart traditions represent relationships among islands and wave patterns rather than functioning as ordinary maps carried on every voyage.</p>"},
      {id:"mission",title:"Christian communities",html:"<p>Protestant and Catholic missions introduced literacy, churches, new institutions, and regional connections. Christianity became deeply rooted while older land and kinship structures persisted.</p>"},
      {id:"colonial",title:"German and Japanese rule",html:"<p>German government and the Jaluit Company organized copra trade before Japan occupied the islands in 1914. Japanese branch administration expanded schools, health, transport, police, fishing, and strategic works.</p>"},
      {id:"copra",title:"Copra and migration",html:"<p>Copra linked household coconut lands to merchants, taxes, credit, and subsidized shipping. Education and employment drew migrants toward Jaluit, Kwajalein, Koror, Truk, and Japanese cities.</p>"},
      {id:"no-nuclear",title:"No nuclear displacement",html:"<p>Bikini and Enewetak communities are never removed for atomic testing because nuclear weapons do not exist. The Marshalls therefore avoid the radiation, exile, claims system, and nuclear-victim identity produced in foreign contingency histories.</p>"},
      {id:"1985",title:"Marshallese identity in 1985",html:"<p>By 1985 Marshallese residents possess Japanese nationality while retaining strong language, church, clan, land, and atoll identities. Their district is less demographically Japanized than Palau or the Marianas.</p>"}
    ],
    related:[{href:"marshallese-language.html",kicker:"Ancestral language",label:"Marshallese Language"},{href:"marshall-islands.html",kicker:"Homeland",label:"Marshall Islands"},{href:"jaluit-atoll.html",kicker:"Historic district center",label:"Jaluit Atoll"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"},{href:"non-nuclear-deterrence.html",kicker:"World without atomic weapons",label:"Strategic Deterrence without Atomic Weapons"},{href:"south-seas-mandate.html",kicker:"Colonial administration",label:"South Seas Mandate"}],
    facts:[["Homeland","Marshall Islands"],["Island chains","Ratak and Ralik"],["Language","Marshallese"],["Descent","Matrilineal"],["Land roles","Iroij, alap, and rijerbal"],["Historic export","Copra"],["Nuclear-test displacement","None"],["Nationality in 1985","Japanese"]],
    sources:[{href:"https://www.rmiembassyus.org/country-profile",label:"Marshall Islands Embassy — people, land, language, and culture"},{href:"https://text-message.blogs.archives.gov/2017/07/20/captain-alfred-parker-on-jaluit-atoll-march-april-1937/",label:"United States National Archives — Japanese-era Jaluit"}]
  }),

  "marshallese-language":micronesianCultureArticle({
    title:"Marshallese language",category:"Languages",eyebrow:"Nuclear Micronesian language · Ratak and Ralik",infoboxKicker:"Indigenous language of the Marshall Islands",
    lead:"Marshallese, or <em>Kajin Ṃajeḷ</em>, is the indigenous language of the Marshall Islands and one of the largest Nuclear Micronesian languages. Its two principal dialects correspond to the Ratak and Ralik chains. The absence of American trusteeship leaves Japanese, rather than English, as its principal public and technical counterpart after the long war.",
    canon:"Marshallese classification, Ratak and Ralik dialects, mission literacy, dictionary tradition, strong community transmission, and specialized phonology are historical. Japanese public dominance and the lack of an English trusteeship follow setting canon. Exact 1985 speakers, orthographic reform, official status, and school curriculum remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Marshallese belongs to the Nuclear Micronesian group within the Oceanic branch of Austronesian. It is related to Pohnpeian, Mokilese, Kosraean, Chuukese, and other Micronesian languages but is not mutually interchangeable with them.</p>"},
      {id:"name",title:"Name",html:"<p><em>Kajin Ṃajeḷ</em> means the language of the Marshall Islands. Older spelling traditions render the name differently because the sound system is difficult to represent through an ordinary European alphabet.</p>"},
      {id:"dialects",title:"Ratak and Ralik dialects",html:"<p>The eastern Ratak and western Ralik chains possess mutually intelligible dialects that differ principally in vocabulary and regular sound patterns. Chain identity remains visible in speech without preventing island-wide communication.</p>"},
      {id:"sound",title:"Sound system",html:"<p>Marshallese organizes consonants through several secondary articulations and derives surface vowel qualities from their environment. Spelling reform therefore requires choices between phonetic convenience and deeper regularity.</p>"},
      {id:"writing",title:"Mission literacy and orthography",html:"<p>Missionaries produced Bible translations, hymns, school materials, and dictionaries in Latin script. Competing spellings persisted until educators and lexicographers developed more systematic standards.</p>"},
      {id:"japanese",title:"Japanese contact",html:"<p>Japanese schools, shipping, government, military work, and imported goods added vocabulary and made Japanese necessary for public advancement. Marshallese nevertheless remained the ordinary language on most atolls.</p>"},
      {id:"media",title:"Education and media",html:"<p>Radio, church broadcasting, inter-atoll notices, readers, dictionaries, navigation instruction, and oral-history projects maintain public use. Technical education often shifts to Japanese because specialist vocabulary is more readily available there.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Marshallese remains vigorous and is transmitted by nearly all island communities. Urban migration and Japanese secondary schooling create domain pressure, but the language is not generally endangered.</p>"}
    ],
    related:[{href:"marshallese-people.html",kicker:"Speaker community",label:"Marshallese People"},{href:"marshall-islands.html",kicker:"Language homeland",label:"Marshall Islands"},{href:"jaluit-atoll.html",kicker:"Administrative center",label:"Jaluit Atoll"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"pohnpeian-language.html",kicker:"Related language",label:"Pohnpeian Language"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Native name","Kajin Ṃajeḷ"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian"],["Principal dialects","Ratak and Ralik"],["Script","Latin"],["Principal public counterpart","Japanese"],["English trusteeship layer","Absent"],["1985 condition","Vigorous"]],
    sources:[{href:"https://www.rmiembassyus.org/country-profile",label:"Marshall Islands Embassy — Marshallese language and dialects"},{href:"https://academic.oup.com/book/8976/chapter-abstract/155303892",label:"Oxford Academic — Marshallese language and orthography"},{href:"https://en.wikipedia.org/wiki/Marshallese_language",label:"Linguistic reference — Marshallese language"}]
  })
});

const addMicronesianCultureRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const link of links) {
    if (!article.related.some(existing => existing.href === link.href)) article.related.push(link);
  }
};

addMicronesianCultureRelated("micronesian-peoples",[
  {href:"chamorro-people.html",kicker:"Mariana people",label:"Chamorro People"},
  {href:"palauan-people.html",kicker:"Western people",label:"Palauan People"},
  {href:"yapese-people.html",kicker:"Yap main-island people",label:"Yapese People"},
  {href:"chuukese-people.html",kicker:"Central Caroline people",label:"Chuukese People"},
  {href:"pohnpeian-people.html",kicker:"Eastern Caroline people",label:"Pohnpeian People"},
  {href:"marshallese-people.html",kicker:"Eastern atoll people",label:"Marshallese People"}
]);
addMicronesianCultureRelated("micronesian-languages",[
  {href:"chamorro-language.html",kicker:"Mariana language",label:"Chamorro Language"},
  {href:"palauan-language.html",kicker:"Western non-Oceanic language",label:"Palauan Language"},
  {href:"yapese-language.html",kicker:"Yap main-island language",label:"Yapese Language"},
  {href:"chuukese-language.html",kicker:"Central Caroline language",label:"Chuukese Language"},
  {href:"pohnpeian-language.html",kicker:"Eastern Caroline language",label:"Pohnpeian Language"},
  {href:"marshallese-language.html",kicker:"Eastern atoll language",label:"Marshallese Language"}
]);
addMicronesianCultureRelated("northern-mariana-islands",[
  {href:"chamorro-people.html",kicker:"Indigenous people",label:"Chamorro People"},
  {href:"chamorro-language.html",kicker:"Indigenous language",label:"Chamorro Language"}
]);
addMicronesianCultureRelated("guam",[
  {href:"chamorro-people.html",kicker:"Indigenous people",label:"Chamorro People"},
  {href:"chamorro-language.html",kicker:"Indigenous language",label:"Chamorro Language"}
]);
addMicronesianCultureRelated("guam-saipan-frontier",[{href:"chamorro-people.html",kicker:"People divided by the frontier",label:"Chamorro People"}]);
addMicronesianCultureRelated("palau-islands",[
  {href:"palauan-people.html",kicker:"Indigenous people",label:"Palauan People"},
  {href:"palauan-language.html",kicker:"Indigenous language",label:"Palauan Language"}
]);
addMicronesianCultureRelated("yap-islands",[
  {href:"yapese-people.html",kicker:"Main-island people",label:"Yapese People"},
  {href:"yapese-language.html",kicker:"Main-island language",label:"Yapese Language"}
]);
addMicronesianCultureRelated("truk-islands",[
  {href:"chuukese-people.html",kicker:"Indigenous people",label:"Chuukese People"},
  {href:"chuukese-language.html",kicker:"Principal indigenous language",label:"Chuukese Language"}
]);
addMicronesianCultureRelated("ponape",[
  {href:"pohnpeian-people.html",kicker:"Principal indigenous people",label:"Pohnpeian People"},
  {href:"pohnpeian-language.html",kicker:"Principal indigenous language",label:"Pohnpeian Language"}
]);
addMicronesianCultureRelated("marshall-islands",[
  {href:"marshallese-people.html",kicker:"Indigenous people",label:"Marshallese People"},
  {href:"marshallese-language.html",kicker:"Indigenous language",label:"Marshallese Language"}
]);
addMicronesianCultureRelated("japanese-preservationism",[
  {href:"chamorro-language.html",kicker:"Mariana language case",label:"Chamorro Language"},
  {href:"palauan-language.html",kicker:"Palauan language case",label:"Palauan Language"},
  {href:"marshallese-language.html",kicker:"Marshallese language case",label:"Marshallese Language"}
]);
