window.deepArticles = window.deepArticles || {};

const outerMicronesianFlag = {
  src:"assets/flags/japan.svg",
  alt:"Flag of the Empire of Japan",
  caption:"Japanese national flag used throughout the incorporated Micronesian territories"
};

const outerMicronesianSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — integral Japanese territories and cultural preservation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Pacific consolidation and preservation policy"},
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Micronesian nationality and identity"},
  {href:"../transcript.md",label:"Master Transcript — Japanese Micronesia and regional cultures"}
];

const outerMicronesianArticle = config => ({
  category:config.category || "Peoples of Imperial Japan",
  eyebrow:config.eyebrow || "Micronesian society · Empire of Japan",
  infoboxKicker:config.infoboxKicker || "Indigenous people of Japanese Micronesia",
  portrait:config.portrait || outerMicronesianFlag,
  ...config,
  sources:[...outerMicronesianSources,...(config.sources || [])],
  categories:config.categories || ["Micronesian peoples","Japanese Pacific Territories","Empire of Japan"]
});

Object.assign(window.deepArticles, {
  "kosraean-people":outerMicronesianArticle({
    title:"Kosraean people",infoboxKicker:"Indigenous people of Kosrae",
    lead:"The Kosraean people are the indigenous people of Kosrae, the easternmost high island of the Caroline Islands. The Kosraean language, the four principal villages, Protestant churches, chiefly and royal traditions, gardens, reefs, and the monumental center at Lelu sustain an island identity distinct from neighboring Pohnpeian communities. Kosraeans possess Japanese nationality while retaining their own peoplehood.",
    canon:"Kosraean settlement, Lelu's centralized kingdom, the office of tokosra, nineteenth-century disease and depopulation, Protestant conversion, four principal villages, and strong oral tradition are historical. Uninterrupted Japanese administration after the long war and Japanese nationality follow setting canon. Exact 1985 population, municipal boundaries, titled officeholders, and cultural institutions remain open.",
    sections:[
      {id:"homeland",title:"Island homeland",html:"<p>Kosrae is a steep volcanic island surrounded by reef and mangrove. The principal communities of Lelu, Malem, Tafunsak, and Utwe connect mountain watersheds, taro and breadfruit lands, coastal fisheries, and remembered sacred places.</p>"},
      {id:"lelu",title:"Lelu and the island kingdom",html:"<p>Before European rule, the royal center on Lelu Island concentrated tribute, ceremony, labor, and political authority. The <em>tokosra</em>, or king, governed through ranked officials and a sacred landscape whose ruins remain central to Kosraean history.</p>"},
      {id:"oral",title:"Oral history and sacred geography",html:"<p><em>Pihlehnfong</em>, the transmission of history through spoken accounts, preserves genealogies, chiefly narratives, place names, routes, and moral instruction. Rivers, passes, stones, ruins, and shorelines therefore belong to a historical landscape rather than an empty natural one.</p>"},
      {id:"contact",title:"Contact and demographic crisis",html:"<p>Whalers, traders, missionaries, disease, and violent foreign recruitment transformed Kosrae during the nineteenth century. Severe population loss weakened older institutions and concentrated survivors in fewer communities.</p>"},
      {id:"church",title:"Protestant society",html:"<p>Congregational Christianity became a dominant institution through churches, schools, Sunday observance, hymnody, and village leadership. Christian practice did not erase clan obligation, chiefly memory, customary food exchange, or attachment to ancestral places.</p>"},
      {id:"colonial",title:"German and Japanese administration",html:"<p>German administration followed Spanish claims and was replaced by Japanese rule in 1914. Japanese schools, roads, agricultural programs, health services, police, and migration connected Kosrae to the wider <a href='caroline-islands.html'>Caroline Islands</a> while preserving its separate district identity.</p>"},
      {id:"livelihood",title:"Land, sea, and livelihood",html:"<p>Gardens, tree crops, reef fishing, canoe travel, wage work, and inter-island service support Kosraean households. Community claims over routes, water, shore access, and historic sites make development inseparable from customary memory.</p>"},
      {id:"1985",title:"Kosraean identity in 1985",html:"<p>By 1985 Kosraeans are Japanese citizens but not culturally Japanese settlers. Language, village, church, family, Lelu history, and island-wide institutions define a small and strongly localized people.</p>"}
    ],
    related:[{href:"kosraean-language.html",kicker:"Ancestral language",label:"Kosraean Language"},{href:"kosrae.html",kicker:"Island homeland",label:"Kosrae"},{href:"caroline-islands.html",kicker:"Regional setting",label:"Caroline Islands"},{href:"ponape.html",kicker:"Western neighbor",label:"Ponape"},{href:"nan-madol.html",kicker:"Comparative monumental center",label:"Nan Madol"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Kosrae"],["Principal communities","Lelu, Malem, Tafunsak, and Utwe"],["Language","Kosraean"],["Historic ruler","Tokosra"],["Monumental center","Lelu"],["Principal Christian tradition","Protestant"],["Nationality in 1985","Japanese"],["Sovereign Kosraean state","None"]],
    sources:[{href:"https://hpo.kosraestate.gov.fm/mahkontowe/",label:"Kosrae Historic Preservation Office — oral history and sacred landscape"},{href:"https://hpo.kosraestate.gov.fm/an-intensive-ethnographic-survey-on-routes-in-kosraean-culture/",label:"Kosrae Historic Preservation Office — routes and cultural practice"},{href:"https://hpo.kosraestate.gov.fm/visiting-kosrae-kosraean-culture/",label:"Kosrae Historic Preservation Office — communities and culture"}]
  }),

  "kosraean-language":outerMicronesianArticle({
    title:"Kosraean language",category:"Languages",eyebrow:"Nuclear Micronesian language · Kosrae",infoboxKicker:"Indigenous language of Kosrae",
    lead:"Kosraean, locally called <em>Kahs Kosrae</em>, is the indigenous language of Kosrae. It is an Austronesian language within the Nuclear Micronesian group, but its position is sufficiently distinct that it forms the Kosraean branch rather than a dialect of Pohnpeian. Japanese is the principal language of higher administration and technical education, while Kosraean remains the ordinary language of village, church, family, and island life.",
    canon:"Kosraean classification, older Kusaie name, mission literacy, specialized phonology, and strong island use are historical. Continuous Japanese public dominance and the absence of an English trusteeship follow setting canon. Exact 1985 speaker totals, official wording, school hours, and orthographic commission remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Kosraean belongs to the Oceanic branch of Austronesian and is conventionally placed in the Nuclear Micronesian group. It is related to Pohnpeian and Marshallese but forms its own branch and is not mutually interchangeable with either.</p>"},
      {id:"names",title:"Names",html:"<p><em>Kahs Kosrae</em> means the language of Kosrae. Foreign records long used Kusaie or Strong's Island, producing older forms such as Kusaiean that remain common in colonial archives.</p>"},
      {id:"sound",title:"Linguistic character",html:"<p>Kosraean has a distinctive vowel and consonant system, regular grammatical particles, possession classes, and extensive derivation. Its structures reflect an independent history on the eastern high island rather than recent separation from Pohnpeian.</p>"},
      {id:"writing",title:"Mission literacy and orthography",html:"<p>Protestant missionaries developed Latin-script literacy for scripture, hymns, education, and correspondence. Changing spellings reflect attempts to represent Kosraean sounds accurately and to replace inconsistent foreign transcriptions.</p>"},
      {id:"contact",title:"Contact vocabulary",html:"<p>Mission English, German colonial rule, neighboring Pohnpeian speech, and Japanese administration supplied new vocabulary. Continuous Japanese schooling makes Japanese the principal source for modern government, industrial, and technical terms.</p>"},
      {id:"domains",title:"Kosraean and Japanese",html:"<p>Kosraean dominates many homes, village meetings, churches, oral histories, local radio, and land discussions. Japanese is expected in regional government, advanced schooling, military service, and much professional employment.</p>"},
      {id:"preservation",title:"Documentation and teaching",html:"<p>Dictionaries, Bible texts, hymns, oral-history recordings, place-name surveys, readers, and local broadcasting support transmission. Preservationists treat sacred vocabulary and landscape names as part of the language record.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Kosraean remains the dominant indigenous language of its home island and is learned by most Kosraean children. Its small speaker base and dependence on Japanese for higher domains create vulnerability without amounting to general language collapse.</p>"}
    ],
    related:[{href:"kosraean-people.html",kicker:"Speaker community",label:"Kosraean People"},{href:"kosrae.html",kicker:"Language homeland",label:"Kosrae"},{href:"pohnpeian-language.html",kicker:"Related western language",label:"Pohnpeian Language"},{href:"marshallese-language.html",kicker:"Related eastern language",label:"Marshallese Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Native name","Kahs Kosrae"],["Older foreign name","Kusaiean"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Kosraean"],["Script","Latin"],["Principal public counterpart","Japanese"],["Core domains","Home, village, church, and local radio"],["1985 condition","Locally vigorous with a small speaker base"]],
    sources:[{href:"https://hpo.kosraestate.gov.fm/visiting-kosrae-kosraean-culture/",label:"Kosrae Historic Preservation Office — language and culture"},{href:"https://hpo.kosraestate.gov.fm/wp-content/uploads/2017/09/the-european-discovery-of-kosrae-island-ritter-and-ritter-1982s.pdf",label:"Kosrae Historic Preservation Office — historical names and contact"},{href:"https://en.wikipedia.org/wiki/Kosraean_language",label:"Linguistic reference — Kosraean language"}]
  }),

  "carolinian-people-marianas":outerMicronesianArticle({
    title:"Carolinian people of the Marianas",infoboxKicker:"Refaluwasch people of the northern Marianas",
    lead:"The Carolinian people of the Marianas, commonly known by the self-designation Refaluwasch, are an indigenous Pacific community centered on Saipan and neighboring northern islands. Their ancestors sailed from Satawal, Lamotrek, and other Caroline atolls during the nineteenth century and helped repopulate Saipan after war and disease had devastated the older Chamorro population. They remain distinct from both Chamorros and Japanese settlers.",
    canon:"Carolinian migration from the central Carolines, the 1815 resettlement of Saipan, later storm-driven movements, Refaluwasch identity, navigation, and distinct relations with Chamorros are historical. Permanent Japanese nationality and uninterrupted northern-Mariana residence follow setting canon. Exact 1985 population, organization names, titleholders, and recognized legal terminology remain open.",
    sections:[
      {id:"names",title:"Names and identity",html:"<p><em>Refaluwasch</em> is the principal community self-designation. Carolinian remains common in administration and scholarship, but it can also refer broadly to many unrelated peoples across the <a href='caroline-islands.html'>Caroline Islands</a>.</p>"},
      {id:"migration",title:"Migration to Saipan",html:"<p>Families from Satawal, Lamotrek, Elato, and neighboring atolls resettled Saipan beginning in the early nineteenth century. Voyages followed older routes and were accelerated by destructive storms, food scarcity, and opportunities in the Marianas.</p>"},
      {id:"repopulation",title:"Repopulation of the northern islands",html:"<p>Carolinian settlers established villages, fisheries, gardens, and inter-island exchange on islands left thinly populated by Spanish warfare, disease, and forced Chamorro concentration on Guam. They formed the majority on Saipan before large twentieth-century immigration.</p>"},
      {id:"chamorro",title:"Relations with Chamorros",html:"<p>Refaluwasch and Chamorros became neighboring and intermarried peoples with shared Catholic institutions and different languages, migration memories, and customary practices. Neither community is properly treated as a subdivision of the other.</p>"},
      {id:"navigation",title:"Navigation and island networks",html:"<p>Canoe building, star paths, swell reading, kinship, and remembered routes connected Saipan to the outer Carolines. These networks supplied skills and identity even as steamship travel and colonial frontiers reduced ordinary voyaging.</p>"},
      {id:"japanese",title:"Under Japanese rule",html:"<p>Japanese administration classified islanders below metropolitan and settler populations in schooling and employment. Sugar estates and Garapan urbanization displaced some land use while drawing Refaluwasch households into wage labor, trade, and municipal life.</p>"},
      {id:"no-battle",title:"Survival through the long war",html:"<p>The absence of an American assault on Saipan prevents mass civilian death, destruction, forced relocation, and postwar trusteeship. Refaluwasch villages therefore remain within a continuous Japanese northern-Mariana society.</p>"},
      {id:"1985",title:"Refaluwasch identity in 1985",html:"<p>By 1985 Refaluwasch are Japanese citizens with a distinct language, migration history, customary knowledge, and set of northern-island communities. Cultural preservation increasingly reconnects Saipan families with Satawal and other ancestral islands.</p>"}
    ],
    related:[{href:"carolinian-language.html",kicker:"Community language",label:"Carolinian Language"},{href:"saipan.html",kicker:"Principal homeland",label:"Saipan"},{href:"northern-mariana-islands.html",kicker:"Regional setting",label:"Northern Mariana Islands"},{href:"satawalese-people.html",kicker:"Ancestral community",label:"Satawalese People"},{href:"chamorro-people.html",kicker:"Neighboring people",label:"Chamorro People"},{href:"japanese-settlement-micronesia.html",kicker:"Settler context",label:"Japanese Settlement in Micronesia"}],
    facts:[["Self-designation","Refaluwasch"],["Principal homeland","Saipan"],["Ancestral islands","Satawal, Lamotrek, and neighboring atolls"],["Major resettlement","Beginning in 1815"],["Language","Carolinian"],["Neighboring indigenous people","Chamorros"],["Nationality in 1985","Japanese"],["American trusteeship","Absent"]],
    sources:[{href:"https://www.guampedia.com/pop-cultures-cnmi/",label:"Guampedia — peoples and migration in the northern Marianas"},{href:"https://www.guampedia.com/carolinians-on-guam/",label:"Guampedia — Carolinian migration and storm displacement"},{href:"https://www.guampedia.com/wp-content/uploads/2013/12/1-Overview.pdf",label:"Guampedia — Refaluwasch settlement and Japanese colonial hierarchy"}]
  }),

  "carolinian-language":outerMicronesianArticle({
    title:"Carolinian language",category:"Languages",eyebrow:"Chuukic language · Northern Mariana Islands",infoboxKicker:"Refaluwasch language of Saipan",
    lead:"Carolinian, also called Saipan Carolinian or Refaluwasch, is the traditional language of the Carolinian people of the northern Mariana Islands. It is a Chuukic language shaped by migration from several central-Caroline atolls, especially Satawal and related islands. The language developed on Saipan beside Chamorro and later Japanese, giving it a mixed vocabulary and a distinct identity of its own.",
    canon:"Saipan Carolinian's Chuukic classification, mixed outer-island ancestry, Refaluwasch identity, and contact with Chamorro are historical. Continuous Japanese contact without an American trusteeship follows setting canon. Exact 1985 speakers, dialect boundaries, standardized spelling, educational status, and vitality label remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Carolinian belongs to the Chuukic branch of the Nuclear Micronesian languages. It is closely related to Satawalese, Woleaian, Puluwatese, and other central-Caroline languages rather than to neighboring Chamorro.</p>"},
      {id:"names",title:"Names",html:"<p>Carolinian, Saipan Carolinian, and Refaluwasch are all used. The geographic qualifier is important because Carolinian can otherwise denote the many distinct languages of the entire Caroline archipelago.</p>"},
      {id:"formation",title:"Formation on Saipan",html:"<p>The language formed through nineteenth-century migration from several atolls. Speakers brought related but nonidentical varieties into sustained contact, producing a Saipan community language with especially strong Satawalese ancestry.</p>"},
      {id:"chamorro",title:"Contact with Chamorro",html:"<p>Long residence beside Chamorros produced shared vocabulary, bilingual households, and mutual influence. Carolinian nevertheless retained Chuukic grammar and remained clearly separate from the non-Micronesian Chamorro language.</p>"},
      {id:"japanese",title:"Japanese contact",html:"<p>Schools, sugar estates, government, urban life, and military service made Japanese the principal language of public advancement. Japanese loans replaced or supplemented terms that would have entered through English under a foreign trusteeship.</p>"},
      {id:"writing",title:"Writing and documentation",html:"<p>Latin-script writing draws on missionary and linguistic practice across the Carolines. Spelling debates balance Saipan pronunciation, connections with ancestral languages, and ease of use beside Japanese scripts.</p>"},
      {id:"domains",title:"Domains of use",html:"<p>Carolinian remains strongest in family, cultural gatherings, navigation knowledge, songs, funerals, and community associations. Japanese dominates advanced schooling and official work, while Chamorro is common in intermarriage and shared island life.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Carolinian is vulnerable because its speaker community is small and heavily bilingual in Japanese. Active transmission continues, but urban mixing and Japanese-first schooling narrow the settings in which children use it spontaneously.</p>"}
    ],
    related:[{href:"carolinian-people-marianas.html",kicker:"Speaker community",label:"Carolinian People of the Marianas"},{href:"saipan.html",kicker:"Language center",label:"Saipan"},{href:"satawalese-language.html",kicker:"Principal ancestral relative",label:"Satawalese Language"},{href:"woleaian-language.html",kicker:"Related language",label:"Woleaian Language"},{href:"chamorro-language.html",kicker:"Neighboring language",label:"Chamorro Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"}],
    facts:[["Alternative names","Saipan Carolinian · Refaluwasch"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Principal ancestral source","Satawalese and related atoll varieties"],["Scripts","Latin; Japanese scripts in public life"],["Contact languages","Chamorro and Japanese"],["Principal homeland","Saipan"],["1985 condition","Vulnerable"]],
    sources:[{href:"https://www.guampedia.com/pop-cultures-cnmi/",label:"Guampedia — Refaluwasch people and language"},{href:"https://boristheses.unibe.ch/2517/1/19kuske_e_1_.pdf",label:"University of Bern — Saipan Carolinian and source languages"},{href:"https://en.wikipedia.org/wiki/Carolinian_language",label:"Linguistic reference — Carolinian language"}]
  }),

  "ulithian-people":outerMicronesianArticle({
    title:"Ulithian people",infoboxKicker:"Indigenous people of Ulithi Atoll",
    lead:"The Ulithian people are the indigenous people of Ulithi Atoll and its associated communities in the western Caroline Islands. They share a Chuukic language, matrilineal clan relationships, chiefly authority, reef and land tenure, and a long tradition of inter-atoll navigation. Japanese administration places Ulithi within the Yap district, but Ulithians are not ethnically or linguistically Yapese.",
    canon:"Ulithian settlement, matrilineal organization, navigation, relations with Yap and neighboring atolls, German and Japanese colonial rule, and the distinction from Yapese people are historical. The absence of American wartime occupation and continued Japanese nationality follow setting canon. Exact 1985 population, chiefs, municipal structure, and migration totals remain open.",
    sections:[
      {id:"homeland",title:"Atoll homeland",html:"<p>Ulithi is a large lagoon ringed by small coral islands. Falalop, Mogmog, Asor, and Federai anchor settlement, while reef passages, fishing grounds, gardens, and distant islets divide customary rights and responsibilities.</p>"},
      {id:"clan",title:"Clan and authority",html:"<p>Matrilineal clans connect people to land, reef, adoption, marriage, and mutual aid. Chiefs and senior community figures coordinate shared work and relations among islands without erasing household or clan rights.</p>"},
      {id:"navigation",title:"Navigation and exchange",html:"<p>Ulithian navigators traveled through the western and central Carolines using stars, swells, winds, birds, and learned route sequences. Canoes carried people, news, marriage ties, tribute, craft goods, and emergency assistance.</p>"},
      {id:"yap",title:"Relations with Yap",html:"<p>Ulithi participated in the wider <em>sawei</em> exchange system centered on Yap. The relationship linked unequal islands through tribute and protection, but it never made the Ulithian people linguistically Yapese.</p>"},
      {id:"colonial",title:"Colonial administration",html:"<p>Spanish claims were followed by German and Japanese rule. Japan governed Ulithi through the Yap district, introduced schools and medical services, and drew residents into copra, shipping, construction, and military labor.</p>"},
      {id:"war",title:"The long war",html:"<p>Ulithi does not become the enormous American fleet anchorage known in foreign contingency histories. Its lagoon remains under Japanese control, with strategic restrictions and installations but without an American occupation government.</p>"},
      {id:"migration",title:"Migration and return",html:"<p>Education, wage work, and service draw Ulithians toward Yap, Koror, Saipan, and Japanese ports. Remittances and return visits keep household membership and customary obligations tied to the atoll.</p>"},
      {id:"1985",title:"Ulithian identity in 1985",html:"<p>By 1985 Ulithians possess Japanese nationality while retaining a distinct atoll identity. Language, clan, navigation, land, reef, church, and migration networks distinguish them within the larger Yap administrative district.</p>"}
    ],
    related:[{href:"ulithian-language.html",kicker:"Ancestral language",label:"Ulithian Language"},{href:"yap-islands.html",kicker:"Administrative district",label:"Yap Islands"},{href:"yapese-people.html",kicker:"Main-island neighbors",label:"Yapese People"},{href:"woleaian-people.html",kicker:"Outer-island neighbors",label:"Woleaian People"},{href:"satawalese-people.html",kicker:"Navigational network",label:"Satawalese People"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Ulithi Atoll"],["Principal islands","Falalop, Mogmog, Asor, and Federai"],["Language","Ulithian"],["Descent emphasis","Matrilineal clans"],["Historic exchange system","Sawei"],["Japanese administrative district","Yap"],["American fleet occupation","Absent"],["Nationality in 1985","Japanese"]],
    sources:[{href:"https://personnel.gov.fm/yap-government/?print=pdf",label:"Yap State Government — outer-island communities"},{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — Carolinian navigation routes"},{href:"https://en.wikipedia.org/wiki/Ulithi",label:"Geographic reference — Ulithi"}]
  }),

  "ulithian-language":outerMicronesianArticle({
    title:"Ulithian language",category:"Languages",eyebrow:"Chuukic language · Ulithi Atoll",infoboxKicker:"Indigenous language of Ulithi",
    lead:"Ulithian is the indigenous Chuukic language of Ulithi Atoll in the western Caroline Islands. It is related to Woleaian and other outer-island languages but is not a dialect of Yapese, the structurally different language of the Yap main islands. Ulithian remains a community language under pressure from Japanese education and migration away from the atoll.",
    canon:"Ulithian's Chuukic classification, dialect variation among atoll islands, relation to Woleaian, navigation vocabulary, and small speaker base are historical. Continuous Japanese dominance without an English trusteeship follows setting canon. Exact 1985 speakers, standardized orthography, school provisions, and formal vitality category remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Ulithian belongs to the Nuclear Micronesian group and the Chuukic branch of Oceanic. It forms part of a western continuum with Woleaian and neighboring atoll languages while remaining distinct from Yapese.</p>"},
      {id:"varieties",title:"Atoll varieties",html:"<p>Speech differs among Mogmog, Falalop, and other communities. Regular local variation records settlement and inter-island ties without preventing communication across Ulithi.</p>"},
      {id:"navigation",title:"Navigation vocabulary",html:"<p>The language contains specialized terms for stars, swell patterns, winds, reefs, canoe parts, routes, and island bearings. Navigational teaching joins vocabulary to memorized sequences and practical apprenticeship.</p>"},
      {id:"writing",title:"Writing and orthography",html:"<p>Mission and school materials use the Latin alphabet, while Japanese scripts appear in administration and education. Standardization must represent Ulithian sounds without collapsing local speech into Woleaian or a regional school form.</p>"},
      {id:"contact",title:"Contact vocabulary",html:"<p>Yapese exchange, German government, mission English, and Japanese rule supplied loanwords. Japanese is the strongest continuing source for schooling, government, machinery, medicine, and paid work.</p>"},
      {id:"domains",title:"Domains of use",html:"<p>Ulithian remains strongest in households, clan affairs, fishing, navigation, church, oral history, and community radio. Japanese is needed for district administration, advanced education, and most metropolitan employment.</p>"},
      {id:"migration",title:"Migration and transmission",html:"<p>Families living on Yap, Koror, or Saipan often maintain Ulithian through home use and visits. Mixed neighborhoods and Japanese-first schooling make transmission less secure away from the atoll.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Ulithian remains vigorous in its core atoll communities but vulnerable because the population is small and geographically dispersed. Preservation programs emphasize recordings, readers, route knowledge, and teaching by fluent elders.</p>"}
    ],
    related:[{href:"ulithian-people.html",kicker:"Speaker community",label:"Ulithian People"},{href:"yap-islands.html",kicker:"Administrative region",label:"Yap Islands"},{href:"woleaian-language.html",kicker:"Closest regional relative",label:"Woleaian Language"},{href:"yapese-language.html",kicker:"Contrasting district language",label:"Yapese Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Homeland","Ulithi Atoll"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Closest regional relative","Woleaian"],["Distinct from","Yapese"],["Scripts","Latin; Japanese scripts in public life"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous at home; vulnerable overall"]],
    sources:[{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — navigational knowledge and route language"},{href:"https://en.wikipedia.org/wiki/Ulithian_language",label:"Linguistic reference — Ulithian language"},{href:"https://en.wikipedia.org/wiki/Chuukic_languages",label:"Linguistic reference — Chuukic languages"}]
  }),

  "woleaian-people":outerMicronesianArticle({
    title:"Woleaian people",infoboxKicker:"Indigenous people of Woleai and neighboring atolls",
    lead:"The Woleaian people are the indigenous people of Woleai Atoll and several neighboring outer islands of the western Carolines. Their society links matrilineal clans, island chiefs, reef and garden rights, inter-atoll voyaging, churches, and the Woleaian language. Administration through the Yap district does not make them Yapese, while migration connects them to Yap, Palau, Saipan, and Japan.",
    canon:"Woleaian settlement, chiefly and clan organization, navigation, relation to neighboring atolls, the Woleai script, German and Japanese administration, and distinction from Yapese are historical. Continued Japanese nationality follows setting canon. Exact 1985 population, officeholders, municipal limits, and migration totals remain open.",
    sections:[
      {id:"homeland",title:"Woleai homeland",html:"<p>Woleai is a low coral atoll in the outer-island zone administered from Yap. Small settlements depend on reef fishing, taro pits, breadfruit, coconut, lagoon access, and careful management of limited land and fresh water.</p>"},
      {id:"clan",title:"Clan and island authority",html:"<p>Matrilineal clans organize inheritance, adoption, residence, and mutual obligation. Chiefs and senior lineage members coordinate community work, dispute resolution, and relations with other islands.</p>"},
      {id:"voyaging",title:"Voyaging network",html:"<p>Woleaian sailors participate in a route network linking Ulithi, Fais, Lamotrek, Satawal, Puluwat, and Yap. Navigation preserves practical knowledge while visits sustain marriage, trade, news, ritual, and emergency aid.</p>"},
      {id:"sawei",title:"The Yap relationship",html:"<p>Woleai joined the wider <em>sawei</em> system of tribute and reciprocal protection centered on Yap. The relationship shaped political rank and exchange without eliminating Woleaian language or local authority.</p>"},
      {id:"script",title:"The Woleai writing tradition",html:"<p>During the early twentieth century, islanders developed or adapted a script for Woleaian after contact with Latin writing. Its signs became one of the most distinctive indigenous writing traditions in Micronesia.</p>"},
      {id:"japanese",title:"Japanese administration",html:"<p>Japanese schools, copra purchasing, medical visits, shipping, surveys, and labor recruitment tied Woleai to the mandate economy. Residents experienced government through visiting officials and Yap district institutions rather than a large settler town.</p>"},
      {id:"migration",title:"Migration and remittance",html:"<p>Students and workers migrate to Yap, Koror, Saipan, and Japanese cities while retaining land and kinship obligations. Storm damage and limited atoll resources make return, remittance, and inter-island assistance essential.</p>"},
      {id:"1985",title:"Woleaian identity in 1985",html:"<p>By 1985 Woleaians are Japanese citizens and a distinct outer-island people. Language, script, navigation, clan, land, church, and a remembered network of islands carry identity across a dispersed population.</p>"}
    ],
    related:[{href:"woleaian-language.html",kicker:"Ancestral language",label:"Woleaian Language"},{href:"yap-islands.html",kicker:"Administrative district",label:"Yap Islands"},{href:"ulithian-people.html",kicker:"Western neighbors",label:"Ulithian People"},{href:"satawalese-people.html",kicker:"Eastern neighbors",label:"Satawalese People"},{href:"yapese-people.html",kicker:"Main-island relationship",label:"Yapese People"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Woleai Atoll and neighboring outer islands"],["Language","Woleaian"],["Descent emphasis","Matrilineal clans"],["Historic exchange system","Sawei"],["Distinctive heritage","Woleai script"],["Japanese administrative district","Yap"],["Principal livelihood base","Gardens, reef, copra, and migration"],["Nationality in 1985","Japanese"]],
    sources:[{href:"https://personnel.gov.fm/yap-government/?print=pdf",label:"Yap State Government — Woleai and outer-island communities"},{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — Woleai in the navigational network"},{href:"https://en.wikipedia.org/wiki/Woleai",label:"Geographic reference — Woleai"}]
  }),

  "woleaian-language":outerMicronesianArticle({
    title:"Woleaian language",category:"Languages",eyebrow:"Chuukic language · Woleai Atoll",infoboxKicker:"Indigenous language of Woleai",
    lead:"Woleaian is a Chuukic language spoken on Woleai and neighboring outer islands of the Yap district. It is closely related to Ulithian and other central-Caroline languages but is distinct from Yapese. Woleaian is especially notable for an indigenous script developed in the early twentieth century after islanders encountered Latin writing.",
    canon:"Woleaian classification, dialect continuum, script history, navigation vocabulary, and relation to Ulithian are historical. Continuous Japanese public dominance follows setting canon. Exact 1985 speakers, school curriculum, standard orthography, script revival program, and vitality designation remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Woleaian belongs to the Chuukic branch of the Nuclear Micronesian languages. Neighboring varieties form a continuum, but Woleaian is conventionally treated as a language rather than a dialect of Yapese or Chuukese.</p>"},
      {id:"varieties",title:"Island varieties",html:"<p>Speech differs across Woleai and related communities such as Eauripik and Ifalik. Migration and voyaging maintain mutual understanding while also carrying local vocabulary and pronunciation.</p>"},
      {id:"script-origin",title:"Origin of the Woleai script",html:"<p>In the early twentieth century, Woleaian speakers created or adapted a set of signs after exposure to Latin letters. The system combined alphabetic and syllabic principles and was used for messages, names, and remembered texts.</p>"},
      {id:"script-use",title:"Writing in 1985",html:"<p>Latin spelling is the ordinary form used in schoolbooks and linguistic work, while Japanese scripts dominate formal education. The older Woleai script survives as heritage knowledge and a focus of cultural teaching rather than the main administrative script.</p>"},
      {id:"navigation",title:"Navigation and oral knowledge",html:"<p>Specialized speech records star courses, swell patterns, island sequences, canoe construction, weather, and reef conditions. Much of this knowledge remains inseparable from oral instruction and supervised practice.</p>"},
      {id:"contact",title:"Japanese contact",html:"<p>Japanese administration, schooling, copra trade, medicine, shipping, and wage labor introduced extensive modern vocabulary. No American trusteeship interrupts that relationship or makes English the principal public counterpart.</p>"},
      {id:"transmission",title:"Transmission and migration",html:"<p>Woleaian remains strong in atoll households but less secure among migrant families in Japanese-majority towns. Radio, readers, recordings, church use, and return travel reinforce transmission.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Woleaian remains a living community language but is vulnerable because its population is small and dispersed. Script preservation gives language activism a visible emblem that complements ordinary spoken use.</p>"}
    ],
    related:[{href:"woleaian-people.html",kicker:"Speaker community",label:"Woleaian People"},{href:"yap-islands.html",kicker:"Administrative region",label:"Yap Islands"},{href:"ulithian-language.html",kicker:"Western relative",label:"Ulithian Language"},{href:"satawalese-language.html",kicker:"Eastern relative",label:"Satawalese Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Language and script policy",label:"Japanese Preservationism"}],
    facts:[["Homeland","Woleai and neighboring outer islands"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Related language","Ulithian"],["Writing systems","Latin, Woleai script, and Japanese scripts"],["Distinctive feature","Indigenous Caroline Islands script"],["Principal public counterpart","Japanese"],["1985 condition","Vulnerable but actively transmitted"]],
    sources:[{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — Woleaian navigational connections"},{href:"https://en.wikipedia.org/wiki/Woleaian_language",label:"Linguistic reference — Woleaian language"},{href:"https://en.wikipedia.org/wiki/Woleai_script",label:"Writing-system reference — Woleai script"}]
  }),

  "satawalese-people":outerMicronesianArticle({
    title:"Satawalese people",infoboxKicker:"Indigenous people of Satawal",
    lead:"The Satawalese people are the indigenous people of Satawal, a small coral island in the central Caroline voyaging network. Their community is known for ocean navigation, canoe knowledge, matrilineal clan ties, and the Satawalese language. Nineteenth-century migrants from Satawal and neighboring atolls also became important ancestors of the Refaluwasch people of Saipan.",
    canon:"Satawalese settlement, navigation, clan organization, links with Lamotrek and Puluwat, nineteenth-century migration toward the Marianas, and Japanese mandate administration are historical. Continued Japanese nationality and the absence of American trusteeship follow setting canon. Exact 1985 population, named navigators, chiefly offices, and migration totals remain open.",
    sections:[
      {id:"homeland",title:"Satawal",html:"<p>Satawal is a small, wooded coral island without a lagoon large enough to isolate it from the open sea. Limited land and water make breadfruit, coconut, taro, fishing, canoe travel, and reciprocal assistance essential.</p>"},
      {id:"clan",title:"Clan and community",html:"<p>Matrilineal kinship links people to land, adoption, marriage, work, and support. Senior lineage members and island leaders coordinate shared responsibilities within a community where most households are connected.</p>"},
      {id:"navigation",title:"Navigational tradition",html:"<p>Satawalese navigators learn stars, swell intersections, winds, clouds, birds, island sequences, and the behavior of vessels. Knowledge is organized through named routes and taught through long apprenticeship rather than detached charts alone.</p>"},
      {id:"network",title:"The central-Caroline network",html:"<p>Routes connect Satawal with Lamotrek, Woleai, Puluwat, Truk, Yap, and the Marianas. Voyaging carries spouses, news, ritual relationships, trade, and assistance after typhoons or harvest failure.</p>"},
      {id:"saipan",title:"Migration to the Marianas",html:"<p>Storms and scarcity encouraged families from Satawal and nearby islands to move north during the nineteenth century. Their descendants helped establish the <a href='carolinian-people-marianas.html'>Refaluwasch community</a> on Saipan.</p>"},
      {id:"japanese",title:"Japanese administration",html:"<p>Japanese ships, schools, copra buying, medical visits, surveys, and labor recruitment incorporated Satawal into the Yap administrative district. The island received fewer settlers and permanent institutions than Saipan, Koror, or Truk.</p>"},
      {id:"migration",title:"Mobility in the imperial era",html:"<p>Education and employment draw residents toward Yap, Truk, Saipan, and Japan. Migrants sustain island membership through remittances, visits, marriage, and obligations to land and kin.</p>"},
      {id:"1985",title:"Satawalese identity in 1985",html:"<p>By 1985 Satawalese are Japanese citizens and one of the empire's smallest distinct island peoples. Navigation, language, clan, land, and remembered routes give the community an influence greater than its population.</p>"}
    ],
    related:[{href:"satawalese-language.html",kicker:"Ancestral language",label:"Satawalese Language"},{href:"yap-islands.html",kicker:"Administrative district",label:"Yap Islands"},{href:"carolinian-people-marianas.html",kicker:"Migrant descendants",label:"Carolinian People of the Marianas"},{href:"woleaian-people.html",kicker:"Western neighbors",label:"Woleaian People"},{href:"truk-islands.html",kicker:"Eastern connection",label:"Truk Islands"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Satawal"],["Language","Satawalese"],["Descent emphasis","Matrilineal clans"],["Major cultural tradition","Ocean navigation"],["Historic migrant destination","Saipan"],["Japanese administrative district","Yap"],["American trusteeship","Absent"],["Nationality in 1985","Japanese"]],
    sources:[{href:"https://www.guampedia.com/carolinians-on-guam/",label:"Guampedia — Satawalese migration toward the Marianas"},{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — Satawal in Carolinian navigational knowledge"},{href:"https://personnel.gov.fm/yap-government/?print=pdf",label:"Yap State Government — Satawal community"}]
  }),

  "satawalese-language":outerMicronesianArticle({
    title:"Satawalese language",category:"Languages",eyebrow:"Chuukic language · Satawal",infoboxKicker:"Indigenous language of Satawal",
    lead:"Satawalese is the indigenous Chuukic language of Satawal and a major ancestral source of Saipan Carolinian. Its vocabulary carries a highly developed body of navigational, canoe, reef, and weather knowledge. The language remains strong on its home island but is vulnerable because the community is small and many speakers live in Japanese-dominant towns elsewhere in the empire.",
    canon:"Satawalese classification, relation to Carolinian and Woleaian, navigational lexicon, oral transmission, and small speaker base are historical. Continuous Japanese public dominance follows setting canon. Exact 1985 speakers, dialect map, orthographic standard, school schedule, and formal vitality category remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Satawalese belongs to the Chuukic branch of the Nuclear Micronesian languages. It is closely related to Woleaian, Puluwatese, Mortlockese, and Chuukese while remaining a language in its own right.</p>"},
      {id:"carolinian",title:"Relationship to Saipan Carolinian",html:"<p>Nineteenth-century migration made Satawalese one of the principal sources of Carolinian on Saipan. Later mixing with Lamotrekese, Woleaian, and other varieties produced a related but distinct Marianas language.</p>"},
      {id:"navigation",title:"Navigation vocabulary",html:"<p>Specialized terms identify star paths, swell patterns, winds, sea states, bird signs, canoe components, reefs, and sequences of islands. Words are learned together with practical observation and memorized route systems.</p>"},
      {id:"oral",title:"Oral teaching",html:"<p>Stories, chants, genealogies, route recitations, and apprenticeship carry technical and social knowledge. Written documentation can preserve vocabulary but cannot replace supervised experience at sea.</p>"},
      {id:"writing",title:"Writing",html:"<p>Modern Satawalese uses Latin spelling in dictionaries, correspondence, religious material, and readers. Japanese scripts remain necessary in public education and official communication.</p>"},
      {id:"contact",title:"Japanese contact",html:"<p>Japanese supplied terms for government, schooling, shipping engines, medicine, manufactured goods, and paid work. The absence of American trusteeship prevents English from replacing Japanese as the main external language.</p>"},
      {id:"migration",title:"Migration and transmission",html:"<p>The language is transmitted most reliably on Satawal and within concentrated migrant households. Children raised in Yap, Saipan, or Japanese cities often understand more than they use unless families maintain regular island contact.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Satawalese is vigorous on Satawal but vulnerable overall because its population base is exceptionally small. Navigation teaching, recordings, community radio, readers, and links with Refaluwasch descendants support preservation.</p>"}
    ],
    related:[{href:"satawalese-people.html",kicker:"Speaker community",label:"Satawalese People"},{href:"carolinian-language.html",kicker:"Marianas descendant",label:"Carolinian Language"},{href:"woleaian-language.html",kicker:"Western relative",label:"Woleaian Language"},{href:"chuukese-language.html",kicker:"Eastern relative",label:"Chuukese Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"},{href:"japanese-preservationism.html",kicker:"Language policy",label:"Japanese Preservationism"}],
    facts:[["Homeland","Satawal"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Important descendant","Saipan Carolinian"],["Major knowledge domain","Ocean navigation"],["Scripts","Latin; Japanese scripts in public life"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous locally; vulnerable overall"]],
    sources:[{href:"https://nach.gov.fm/wp-content/uploads/2019/01/riesenberg-1972-the-organization-of-navigational-knowledge-on-puluwat-1.pdf",label:"FSM National Archives — Satawalese navigation and routes"},{href:"https://boristheses.unibe.ch/2517/1/19kuske_e_1_.pdf",label:"University of Bern — Satawalese and Saipan Carolinian"},{href:"https://en.wikipedia.org/wiki/Satawalese_language",label:"Linguistic reference — Satawalese language"}]
  }),

  "mortlockese-people":outerMicronesianArticle({
    title:"Mortlockese people",infoboxKicker:"Indigenous people of the Mortlock Islands",
    lead:"The Mortlockese people are the indigenous people of the Mortlock, or Nomoi, Islands southeast of Truk Lagoon. They are closely related to the Chuukese people but maintain a distinct language, island identities, migration history, and body of customary practice. Typhoons, mission Christianity, navigation, and migration to Ponape, Truk, and Saipan have shaped a community extending beyond its home atolls.",
    canon:"Mortlockese settlement, the Nomoi island group, close but distinct relation to Chuukese, matrilineal organization, Christianity, the 1907 typhoon, and migration to Saipan and Ponape are historical. Continued Japanese rule and nationality follow setting canon. Exact 1985 population, municipal groupings, chiefs, and migration totals remain open.",
    sections:[
      {id:"homeland",title:"The Mortlock Islands",html:"<p>The Mortlocks form a southeastern group of low islands and atolls traditionally divided among the Upper and Lower Mortlocks. Communities include Satawan, Lukunor, Etal, Losap, Namoluk, and neighboring islands linked by canoe and kinship.</p>"},
      {id:"identity",title:"A distinct Chuukic people",html:"<p>Mortlockese and lagoon Chuukese share many cultural and linguistic features. Mortlockese identity nevertheless rests on separate home islands, speech, genealogies, migration networks, and customary knowledge.</p>"},
      {id:"clan",title:"Clan, land, and sea",html:"<p>Matrilineal clans organize land rights, adoption, marriage, work, and mutual support. Reef passages, fishing grounds, gardens, canoe access, and house sites bind social relationships to scarce atoll resources.</p>"},
      {id:"mission",title:"Church and literacy",html:"<p>Protestant and Catholic missions brought churches, hymnody, literacy, new schooling, and regional institutions. Christianity became part of ordinary island identity while oral histories and customary obligations continued.</p>"},
      {id:"typhoon",title:"The 1907 typhoon",html:"<p>A destructive typhoon in 1907 caused deaths, crop loss, and displacement across the Mortlocks. Survivors and later migrants established important communities on Ponape and Saipan while maintaining ties to their home islands.</p>"},
      {id:"japanese",title:"Japanese administration",html:"<p>Japan governed the Mortlocks through the Truk district. Schools, copra purchasing, medical voyages, shipping, labor recruitment, and the lagoon naval economy connected the outer islands to a much larger imperial center.</p>"},
      {id:"migration",title:"A dispersed community",html:"<p>Mortlockese families live in the home islands, Truk Lagoon, Ponape, Saipan, and Japanese cities. Marriage, remittances, funerals, church relations, and return journeys sustain a community that is wider than one administrative boundary.</p>"},
      {id:"1985",title:"Mortlockese identity in 1985",html:"<p>By 1985 Mortlockese residents are Japanese citizens and a distinct people within the Truk region. Language preservation resists the assumption that all central-Caroline speech and identity are simply Chuukese.</p>"}
    ],
    related:[{href:"mortlockese-language.html",kicker:"Ancestral language",label:"Mortlockese Language"},{href:"truk-islands.html",kicker:"Administrative region",label:"Truk Islands"},{href:"chuukese-people.html",kicker:"Closest neighboring people",label:"Chuukese People"},{href:"ponape.html",kicker:"Major migrant destination",label:"Ponape"},{href:"saipan.html",kicker:"Historic migrant destination",label:"Saipan"},{href:"micronesian-peoples.html",kicker:"Regional comparison",label:"Micronesian Peoples"}],
    facts:[["Homeland","Mortlock or Nomoi Islands"],["Principal communities","Satawan, Lukunor, Etal, Losap, and Namoluk"],["Language","Mortlockese"],["Descent emphasis","Matrilineal clans"],["Major displacement","Typhoon of 1907"],["Japanese administrative district","Truk"],["Closest neighboring people","Chuukese"],["Nationality in 1985","Japanese"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Nomoi_Islands",label:"Geographic reference — Mortlock or Nomoi Islands"},{href:"https://en.wikipedia.org/wiki/Mortlockese_language",label:"Linguistic and migration reference — Mortlockese"},{href:"https://visitchuuk.com/explore-chuuk/people-and-traditions",label:"Chuuk Visitors Bureau — regional people and traditions"}]
  }),

  "mortlockese-language":outerMicronesianArticle({
    title:"Mortlockese language",category:"Languages",eyebrow:"Chuukic language · Mortlock Islands",infoboxKicker:"Indigenous language of the Mortlocks",
    lead:"Mortlockese is the indigenous Chuukic language of the Mortlock Islands southeast of Truk Lagoon. It is very closely related to Chuukese and forms part of the same dialect network, but speakers maintain a separate language identity supported by island geography, migration history, and distinct vocabulary. Japanese dominates higher public life, while Mortlockese remains central to home, church, land, and community relations.",
    canon:"Mortlockese classification, close relation to Chuukese, dialect variation, oral tradition, specialized social registers, and migration to Ponape and Saipan are historical. Continuous Japanese public dominance follows setting canon. Exact 1985 speakers, standard orthography, school recognition, and vitality classification remain open.",
    sections:[
      {id:"classification",title:"Classification",html:"<p>Mortlockese belongs to the Chuukic branch of the Nuclear Micronesian languages. It is especially close to Chuukese, and linguistic boundaries are gradual, but community identity supports its treatment as a distinct language.</p>"},
      {id:"varieties",title:"Island varieties",html:"<p>Speech differs among Satawan, Lukunor, Etal, Namoluk, Losap, and migrant communities. Shared patterns permit broad understanding while individual islands retain recognizable words and pronunciations.</p>"},
      {id:"chuukese",title:"Relationship to Chuukese",html:"<p>Mortlockese and lagoon Chuukese share grammar and much vocabulary. Differences are large enough to mark origin and sometimes impede effortless conversation, especially where speakers have little inter-island experience.</p>"},
      {id:"registers",title:"Specialized speech",html:"<p>Oral tradition records specialized vocabulary associated with work, rank, gendered spaces, taboo, and respectful interaction. Such registers demonstrate social history rather than a separate secret language detached from ordinary Mortlockese.</p>"},
      {id:"writing",title:"Writing and literacy",html:"<p>Missionaries and educators use Latin spelling for scripture, hymns, correspondence, dictionaries, and readers. Japanese scripts dominate formal schooling, and some materials historically used broader Chuukese forms.</p>"},
      {id:"contact",title:"Japanese contact",html:"<p>Japanese rule introduced vocabulary for administration, copra trade, engines, medicine, school, military work, and imported goods. The long-lived imperial system makes Japanese the main source of technical terminology.</p>"},
      {id:"migration",title:"Migration varieties",html:"<p>Communities on Ponape, Saipan, Truk, and in Japan maintain Mortlockese through households, churches, funerals, and return travel. Close contact with Pohnpeian, Carolinian, Chuukese, and Japanese produces local borrowing.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>By 1985 Mortlockese remains widely transmitted in its home islands but is vulnerable across the dispersed population. Separate documentation is necessary because materials labeled Chuukese do not fully preserve Mortlockese vocabulary or identity.</p>"}
    ],
    related:[{href:"mortlockese-people.html",kicker:"Speaker community",label:"Mortlockese People"},{href:"truk-islands.html",kicker:"Administrative region",label:"Truk Islands"},{href:"chuukese-language.html",kicker:"Closest relative",label:"Chuukese Language"},{href:"pohnpeian-language.html",kicker:"Migrant-contact language",label:"Pohnpeian Language"},{href:"carolinian-language.html",kicker:"Marianas contact language",label:"Carolinian Language"},{href:"micronesian-languages.html",kicker:"Language family",label:"Micronesian Languages"}],
    facts:[["Homeland","Mortlock or Nomoi Islands"],["Family","Austronesian"],["Branch","Oceanic · Nuclear Micronesian · Chuukic"],["Closest relative","Chuukese"],["Principal varieties","Satawan, Lukunor, Etal, Namoluk, and Losap"],["Script","Latin"],["Principal public counterpart","Japanese"],["1985 condition","Vigorous at home; vulnerable in diaspora"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Mortlockese_language",label:"Linguistic reference — Mortlockese language"},{href:"https://habeleinstitute.org/wiki/Languages_of_Micronesia",label:"Habele Institute — Micronesian language relationships"},{href:"https://lingweb.eva.mpg.de/channumerals/Mortlockese.htm",label:"Max Planck Institute — Mortlockese linguistic data"}]
  })
});

const addOuterMicronesianRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const link of links) {
    if (!article.related.some(existing => existing.href === link.href)) article.related.push(link);
  }
};

addOuterMicronesianRelated("kosrae",[
  {href:"kosraean-people.html",kicker:"Indigenous people",label:"Kosraean People"},
  {href:"kosraean-language.html",kicker:"Indigenous language",label:"Kosraean Language"}
]);
addOuterMicronesianRelated("micronesian-peoples",[
  {href:"kosraean-people.html",kicker:"Eastern Caroline people",label:"Kosraean People"},
  {href:"carolinian-people-marianas.html",kicker:"Marianas community",label:"Carolinian People of the Marianas"},
  {href:"ulithian-people.html",kicker:"Western outer-island people",label:"Ulithian People"},
  {href:"woleaian-people.html",kicker:"Outer-island people",label:"Woleaian People"},
  {href:"satawalese-people.html",kicker:"Navigational people",label:"Satawalese People"},
  {href:"mortlockese-people.html",kicker:"Southeastern Truk people",label:"Mortlockese People"}
]);
addOuterMicronesianRelated("micronesian-languages",[
  {href:"kosraean-language.html",kicker:"Eastern Caroline language",label:"Kosraean Language"},
  {href:"carolinian-language.html",kicker:"Marianas Chuukic language",label:"Carolinian Language"},
  {href:"ulithian-language.html",kicker:"Western Chuukic language",label:"Ulithian Language"},
  {href:"woleaian-language.html",kicker:"Outer-island language",label:"Woleaian Language"},
  {href:"satawalese-language.html",kicker:"Navigational language",label:"Satawalese Language"},
  {href:"mortlockese-language.html",kicker:"Mortlock language",label:"Mortlockese Language"}
]);
addOuterMicronesianRelated("northern-mariana-islands",[
  {href:"carolinian-people-marianas.html",kicker:"Refaluwasch community",label:"Carolinian People of the Marianas"},
  {href:"carolinian-language.html",kicker:"Refaluwasch language",label:"Carolinian Language"}
]);
addOuterMicronesianRelated("saipan",[
  {href:"carolinian-people-marianas.html",kicker:"Indigenous Refaluwasch community",label:"Carolinian People of the Marianas"},
  {href:"carolinian-language.html",kicker:"Indigenous language",label:"Carolinian Language"}
]);
addOuterMicronesianRelated("caroline-islands",[
  {href:"kosraean-people.html",kicker:"Eastern high-island people",label:"Kosraean People"},
  {href:"ulithian-people.html",kicker:"Western atoll people",label:"Ulithian People"},
  {href:"mortlockese-people.html",kicker:"Central atoll people",label:"Mortlockese People"}
]);
addOuterMicronesianRelated("yap-islands",[
  {href:"ulithian-people.html",kicker:"Ulithi community",label:"Ulithian People"},
  {href:"ulithian-language.html",kicker:"Ulithi language",label:"Ulithian Language"},
  {href:"woleaian-people.html",kicker:"Woleai community",label:"Woleaian People"},
  {href:"woleaian-language.html",kicker:"Woleai language",label:"Woleaian Language"},
  {href:"satawalese-people.html",kicker:"Satawal community",label:"Satawalese People"},
  {href:"satawalese-language.html",kicker:"Satawal language",label:"Satawalese Language"}
]);
addOuterMicronesianRelated("truk-islands",[
  {href:"mortlockese-people.html",kicker:"Southeastern island people",label:"Mortlockese People"},
  {href:"mortlockese-language.html",kicker:"Southeastern language",label:"Mortlockese Language"}
]);
addOuterMicronesianRelated("chuukese-people",[{href:"mortlockese-people.html",kicker:"Closest neighboring people",label:"Mortlockese People"}]);
addOuterMicronesianRelated("chuukese-language",[{href:"mortlockese-language.html",kicker:"Closest neighboring language",label:"Mortlockese Language"}]);
addOuterMicronesianRelated("japanese-preservationism",[
  {href:"kosraean-language.html",kicker:"Small high-island language",label:"Kosraean Language"},
  {href:"carolinian-language.html",kicker:"Marianas language case",label:"Carolinian Language"},
  {href:"woleaian-language.html",kicker:"Language and script case",label:"Woleaian Language"},
  {href:"satawalese-language.html",kicker:"Small-island language case",label:"Satawalese Language"},
  {href:"mortlockese-language.html",kicker:"Recognition case",label:"Mortlockese Language"}
]);
