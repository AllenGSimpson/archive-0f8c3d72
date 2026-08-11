window.deepArticles = window.deepArticles || {};

const mekongNationalSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — the three Indochinese kingdoms"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese Asia and protected sovereignty"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — post-French state formation"},
  {href:"../transcript.md",label:"Master Transcript — Mekong government, economy, and society"}
];

const mekongNationalArticle = config => ({
  category:config.category || "Mekong States",
  eyebrow:config.eyebrow || "Protected member · GEACPS",
  infoboxKicker:config.infoboxKicker || "National institution",
  ...config,
  sources:[...mekongNationalSources,...(config.additionalSources || [])],
  categories:config.categories || ["Mekong States","GEACPS","Southeast Asia"]
});

const vietnamDepthRelated = [
  {href:"vietnam.html",kicker:"National overview",label:"Empire of Vietnam"},
  {href:"languages-of-vietnam.html",kicker:"Language settlement",label:"Languages of Vietnam"},
  {href:"council-three-indochinese-states.html",kicker:"Regional institution",label:"Council of the Three Indochinese States"},
  {href:"bao-dai.html",kicker:"Founding sovereign",label:"Bảo Đại"},
  {href:"hanoi.html",kicker:"Administrative center",label:"Hanoi"},
  {href:"saigon.html",kicker:"Commercial center",label:"Saigon"},
  {href:"tonkin.html",kicker:"Northern region",label:"Tonkin"},
  {href:"annam.html",kicker:"Central region",label:"Annam"},
  {href:"cochinchina.html",kicker:"Southern region",label:"Cochinchina"},
  {href:"red-river-delta.html",kicker:"Northern geography",label:"Red River Delta"},
  {href:"mekong-delta.html",kicker:"Southern geography",label:"Mekong Delta"}
];
const cambodiaDepthRelated = [
  {href:"cambodia.html",kicker:"National overview",label:"Kingdom of Cambodia"},
  {href:"languages-of-cambodia.html",kicker:"Language settlement",label:"Languages of Cambodia"},
  {href:"council-three-indochinese-states.html",kicker:"Regional institution",label:"Council of the Three Indochinese States"},
  {href:"son-ngoc-thanh.html",kicker:"Republican current",label:"Sơn Ngọc Thành"},
  {href:"kompong-som.html",kicker:"National port",label:"Kompong Som"},
  {href:"battambang.html",kicker:"Territorial grievance",label:"Battambang"},
  {href:"siem-reap.html",kicker:"Northwestern city",label:"Siem Reap"},
  {href:"angkor.html",kicker:"National heritage",label:"Angkor"},
  {href:"khmer-krom.html",kicker:"Cross-border people",label:"Khmer Krom"},
  {href:"tonle-sap.html",kicker:"National lake",label:"Tonlé Sap"},
  {href:"sisophon-corridor.html",kicker:"Lost western corridor",label:"Sisophon Corridor"}
];
const laosDepthRelated = [
  {href:"laos.html",kicker:"National overview",label:"Kingdom of Laos"},
  {href:"languages-of-laos.html",kicker:"Language settlement",label:"Languages of Laos"},
  {href:"council-three-indochinese-states.html",kicker:"Regional institution",label:"Council of the Three Indochinese States"},
  {href:"sisavang-vong.html",kicker:"Founding sovereign",label:"Sisavang Vong"},
  {href:"champasak.html",kicker:"Southern compact",label:"Champasak"},
  {href:"pakse.html",kicker:"Southern center",label:"Pakse"},
  {href:"bolaven-plateau.html",kicker:"Agricultural upland",label:"Bolaven Plateau"},
  {href:"wat-phou.html",kicker:"Southern heritage",label:"Wat Phou"},
  {href:"savannakhet.html",kicker:"Middle-Mekong center",label:"Savannakhet"},
  {href:"sayaboury.html",kicker:"Territorial loss",label:"Sayaboury"}
];

Object.assign(window.deepArticles,{
  "government-of-vietnam":mekongNationalArticle({
    title:"Government of Vietnam",category:"Government of Vietnam",eyebrow:"Nguyễn monarchy · protected sovereignty",infoboxKicker:"National government",
    lead:"The government of Vietnam is the monarchical, ministerial, provincial, judicial, military, and advisory system through which the Nguyễn state governs Tonkin, Annam, and Cochinchina while Japan retains final authority over defense, foreign alignment, strategic transport, finance, and advanced military supply.",
    canon:"The Nguyễn monarchy, protected sovereignty, Bảo Đại's founding role, three-center political geography, ministerial government, early Trần Trọng Kim continuity, later plural elite recruitment, Japanese reserved powers, and participation in the Three States council are established. The final constitution, legislature, cabinet sequence, provincial map, electoral law, court organization, and precise treaty schedule remain open.",
    sections:[
      {id:"formation",title:"Formation after French rule",html:"<p>Japan's March 1945 displacement of French authority creates the immediate Vietnamese government. Victory prevents French restoration, allowing wartime ministries and nationalist administrators to become the foundation of an enduring state rather than a short interlude.</p>"},
      {id:"crown",title:"The Nguyễn crown",html:"<p>Bảo Đại and the <a href='nguyen-dynasty.html'>Nguyễn house</a> supply dynastic continuity, an indigenous head of state, distance from Chinese authority, and a court capable of mediating among northern, central, and southern elites. The monarchy is constitutional and administrative in practice rather than an unrestricted personal government.</p>"},
      {id:"centers",title:"Three centers of government",html:"<p>Huế remains the imperial and ceremonial capital. Hanoi concentrates ministries, higher civil service, education, and northern command, while Saigon's banks, port, corporations, and press give the southern metropolis permanent political weight.</p>"},
      {id:"ministry",title:"Ministers and political recruitment",html:"<p>The first administration draws upon Trần Trọng Kim's generation and other figures of the 1945 government. Younger nationalist, Catholic, Confucian, technocratic, military, commercial, and provincial circles gradually compete for ministries and royal confidence.</p>"},
      {id:"local",title:"Provincial and municipal administration",html:"<p>Provincial authorities, municipal governments, mandarinal families, village institutions, police, courts, schools, and economic bureaus carry ordinary rule. Administrative strength is greatest in the deltas, cities, and transport corridors and weaker in upland and frontier districts.</p>"},
      {id:"consolidation",title:"Insurgency and consolidation",html:"<p>The state survives the Viet Minh challenge through military operations, amnesty for ordinary nationalists, limited rural reform, and absorption of noncommunist opponents. By 1960 the insurgency belongs to a defeated revolutionary generation rather than a rival government.</p>"},
      {id:"reserve",title:"Japanese reserved powers",html:"<p>Vietnam has its own nationality, law, ministries, and armed formations, but Tokyo controls the strategic ceiling through bases, military liaison, shipping, rail access, intelligence, financial leverage, advanced machinery, and external alignment.</p>"},
      {id:"regional",title:"Government through the Three States council",html:"<p>Vietnam supplies much of the expertise behind regional transport, health, customs, and river administration. Cambodia and Laos support unanimous rules and rotating offices to prevent Vietnamese administrative predominance from becoming a federation.</p>"}
    ],
    related:[...vietnamDepthRelated,{href:"nguyen-dynasty.html",kicker:"Ruling house",label:"Nguyễn Dynasty"},{href:"tran-trong-kim.html",kicker:"Founding minister",label:"Trần Trọng Kim"},{href:"ho-chi-minh.html",kicker:"Defeated challenger",label:"Hồ Chí Minh"},{href:"economy-of-vietnam.html",kicker:"Political economy",label:"Economy of Vietnam"},{href:"society-of-vietnam.html",kicker:"Social setting",label:"Society of Vietnam"},{href:"hue.html",kicker:"Imperial capital",label:"Huế"}],
    facts:[["State","Empire of Vietnam"],["Government","Protected Nguyễn monarchy"],["Imperial capital","Huế"],["Administrative center","Hanoi"],["Commercial political center","Saigon"],["Founding sovereign","Bảo Đại"],["Strategic reserve","Empire of Japan"],["Final constitutional text","Open"]]
  }),

  "economy-of-vietnam":mekongNationalArticle({
    title:"Economy of Vietnam",category:"Economy of Vietnam",eyebrow:"Agriculture · assembly · regional commerce",infoboxKicker:"Protected national economy",
    lead:"The economy of Vietnam is the largest and most diversified of the three Mekong kingdoms, combining rice, rubber, coal, minerals, ports, light industry, consumer assembly, publishing, media, transport repair, and a modest software sector beneath Japanese control of high-value machinery, finance, shipping, and strategic technology.",
    canon:"Vietnamese demographic and market predominance, the listed agricultural and industrial sectors, Japanese command of advanced systems, local assembly, the Saigon commercial center, regional export markets, developmental dissatisfaction, and the modest domestic software sector are established. Output, GDP, firms, wage levels, land law, tax shares, trade totals, and precise industrial geography remain open.",
    sections:[
      {id:"agriculture",title:"Rice, rubber, and rural production",html:"<p>Rice milling and export, rubber, fisheries, food processing, and other agricultural production provide employment, revenue, and strategic supply. Procurement, tenancy, debt, and village reform remain central political questions because export success does not guarantee rural security.</p>"},
      {id:"resources",title:"Coal and mineral extraction",html:"<p>Northern coal and other mineral resources supply domestic industry and the wider Sphere. Japanese capital, shipping, machinery, and purchasing contracts connect extraction to regional markets while limiting Vietnamese control of the most valuable stages.</p>"},
      {id:"industry",title:"The permitted industrial ladder",html:"<p>Textiles, fertilizer, ceramics, bicycles, motorcycles, food machinery, ship and railway repair, simple machine production, and consumer-goods assembly grow steadily. Advanced aircraft, warships, engines, strategic electronics, precision machine tools, nuclear systems, and sophisticated weapons remain beyond the permitted ceiling.</p>"},
      {id:"cities",title:"Huế, Hanoi, and Saigon",html:"<p>Saigon leads banking, shipping, corporate offices, distribution, advertising, and consumer assembly. Hanoi concentrates state procurement, technical education, publishing, and northern industry; Huế supports court, heritage, tourism, and ceremonial demand.</p>"},
      {id:"corporate",title:"Japanese capital and Vietnamese enterprise",html:"<p>Japanese houses dominate standards, components, credit, international shipping, and major licenses. Vietnamese contractors, merchants, assemblers, publishers, studios, repair firms, and managers occupy a growing middle layer rather than displacing the strategic owners above them.</p>"},
      {id:"consumer",title:"Consumer manufacturing",html:"<p>A television sold under a Japanese name may be assembled in Saigon from Japanese and Formosan components, with a Vietnamese cabinet, packaging, advertising, distribution, and localized programming. Similar arrangements cover radios, appliances, bicycles, and office equipment.</p>"},
      {id:"technical",title:"Software and technical services",html:"<p>Vietnam develops the Mekong region's first modest hobbyist and local software scene. Publishing, education, office tools, localization, and Hán–Nôm work grow inside Japanese hardware, operating standards, programming practice, and corporate procurement.</p>"},
      {id:"politics",title:"Developmental dissatisfaction",html:"<p>By the 1970s officials and firms argue that the region's largest educated market deserves more industrial licenses, management positions, electronics work, and technical education. Japan concedes selected assembly and cultural investment without yielding strategic independence.</p>"}
    ],
    related:[...vietnamDepthRelated,{href:"government-of-vietnam.html",kicker:"Institutions",label:"Government of Vietnam"},{href:"vietnamese-software-industry.html",kicker:"Technical sector",label:"Vietnamese Software Industry"},{href:"japanese-consumer-economy-mekong.html",kicker:"Regional market",label:"Japanese Consumer Economy in the Mekong States"}],
    facts:[["Regional rank","Largest economy of the three Mekong kingdoms"],["Principal crops","Rice and rubber"],["Extractive sectors","Coal and other minerals"],["Manufacturing","Light industry and consumer assembly"],["Commercial center","Saigon"],["Technical distinction","Largest local Mekong software sector"],["Strategic ownership","Japanese-dominant"],["Complete national accounts","Open"]]
  }),

  "society-of-vietnam":mekongNationalArticle({
    title:"Society of Vietnam",category:"Society of Vietnam",eyebrow:"Regional identities · court · village · city",infoboxKicker:"National society",
    lead:"Vietnamese society combines Nguyễn dynastic identity, village and provincial institutions, <a href='religion-in-vietnam.html'>plural religious life</a>, rapid urban growth, Japanese-facing technical careers, and a three-center cultural geography that prevents one city or region from defining the whole country.",
    canon:"The three-center geography, quốc ngữ mass literacy, Hán–Nôm heritage revival, plural religious and political elites, urban industrial growth, rural reform after insurgency, Japanese as the language of high advancement, national media strength, and diaspora return are established. Demography, class shares, religious totals, migration rates, family law, education statistics, and regional survey data remain open.",
    sections:[
      {id:"regions",title:"Northern, central, and southern identities",html:"<p>Hanoi's bureaucratic and literary north, Huế's dynastic center, and Saigon's commercial south produce different institutions, accents, memories, and elite networks. The monarchy presents these differences as parts of one restored national civilization.</p>"},
      {id:"village",title:"Village society and rural reform",html:"<p>Villages remain basic units of land, family, worship, credit, and local authority. Limited tenancy, debt, and administrative reforms introduced during the struggle against the Viet Minh reduce some revolutionary grievances without dissolving rural hierarchy.</p>"},
      {id:"religion",title:"Religious and learned traditions",html:"<p><a href='buddhism-in-vietnam.html'>Buddhist institutions</a>, <a href='vietnamese-confucianism.html'>Confucian learning</a>, dynastic rites, <a href='vietnamese-folk-religion.html'>local cults</a>, and <a href='catholic-church-in-vietnam.html'>Catholic communities</a> coexist. <a href='cao-dai.html'>Cao Đài</a> and <a href='hoa-hao.html'>Hòa Hảo</a> retain major southern constituencies after their armed organizations are regularized. Catholic worship retains Latin while Vietnamese serves pastoral and catechetical life; French has no necessary religious privilege.</p>"},
      {id:"language",title:"Literacy and official digraphia",html:"<p>Quốc ngữ governs mass schooling, administration, press, and ordinary literacy. Hán–Nôm returns as learned, ceremonial, archival, and heritage literacy, making older texts visible without replacing the practical Romanized script.</p>"},
      {id:"urban",title:"Urban classes and mobility",html:"<p>Civil servants, teachers, officers, merchants, technicians, clerks, performers, factory workers, and corporate intermediaries expand in the three principal cities. Japanese fluency and technical education open the fastest routes upward while reinforcing dependence.</p>"},
      {id:"media",title:"A regional cultural market",html:"<p>Vietnam supports commercial film, popular song, historical drama, theatre, radio serials, news, literary adaptation, and court or martial epics. Its productions circulate in Cambodia, Laos, southern China, and Vietnamese communities elsewhere in the Sphere.</p>"},
      {id:"foreign",title:"Japanese presence and social distinction",html:"<p>Japanese advisers, executives, technicians, teachers, soldiers, and their institutions are visible in ports, ministries, universities, and industry. Formal Vietnamese nationality coexists with unequal access to capital, machinery, and strategic decision-making.</p>"},
      {id:"return",title:"Diaspora and home return",html:"<p>Late preservation policy assists Vietnamese citizens and descendants raised elsewhere in the Sphere to return even when their language is weak. Return strengthens national institutions while producing disputes over authenticity, employment, and belonging.</p>"}
    ],
    related:[...vietnamDepthRelated,{href:"religion-in-vietnam.html",kicker:"Religious overview",label:"Religion in Vietnam"},{href:"government-of-vietnam.html",kicker:"Political institutions",label:"Government of Vietnam"},{href:"economy-of-vietnam.html",kicker:"Material setting",label:"Economy of Vietnam"},{href:"media-dubbing-mekong-states.html",kicker:"Regional media",label:"Media and Dubbing in the Mekong States"}],
    facts:[["Largest urban centers","Saigon, Hanoi, and Huế"],["Mass-literacy script","Quốc ngữ"],["Heritage literacy","Hán–Nôm"],["Principal religious traditions","Buddhist, Confucian, local, and Catholic"],["Language of imperial advancement","Japanese"],["Regional cultural role","Principal Mekong producer"],["Diaspora policy","Assisted return"],["Comprehensive census","Open"]]
  }),

  "government-of-cambodia":mekongNationalArticle({
    title:"Government of Cambodia",category:"Government of Cambodia",eyebrow:"Sihanoukian monarchy · protected sovereignty",infoboxKicker:"National government",
    lead:"The government of Cambodia is the royal, ministerial, provincial, Buddhist, military, and advisory order centered on Norodom Sihanouk, balancing Sihanoukian royal nationalism, republican nationalist pressure, the permanent Battambang grievance, and Japanese reserve authority.",
    canon:"Sihanouk's unusually political monarchy, royal ministries and councils, Sihanoukian and Thanhite political currents, Cambodian domestic sovereignty, Battambang commemoration without armed revision, Japanese reserved powers, Buddhist institutional importance, and participation in the Three States council are established. The constitution, chamber, cabinet chronology, legal opposition, succession, provincial map, and precise treaty terms remain open.",
    sections:[
      {id:"formation",title:"State formation after 1945",html:"<p>Japan's removal of French authority converts the wartime Kingdom of Kampuchea into the foundation of a durable Cambodian state. French administrators and technicians may remain under contract, but no restored French Union stands above the crown.</p>"},
      {id:"crown",title:"Sihanouk's political monarchy",html:"<p>Norodom Sihanouk serves as sovereign, broker, public advocate, cultural patron, and national symbol. Without a renewed anti-French independence struggle, he has less reason to abdicate and can exercise politics through ministries, royal councils, Buddhist institutions, provincial notables, and a limited chamber.</p>"},
      {id:"currents",title:"Royal and republican nationalism",html:"<p>Sihanoukian royal nationalism emphasizes crown, Buddhism, territorial continuity, and gradual development. The current associated with Son Ngoc Thanh is more militant, republican, anti-French, anti-Thai, and suspicious that the court accepts excessive Japanese direction.</p>"},
      {id:"administration",title:"Ministries and provinces",html:"<p>Royal ministries govern courts, schools, taxation, police, public works, agriculture, culture, and local administration. Provincial notables and officials remain important where the bureaucracy is thin, and state capacity follows roads and the Mekong more readily than remote districts.</p>"},
      {id:"buddhist",title:"Buddhist institutions",html:"<p>Monasteries and the sangha provide education, ritual authority, local mediation, charity, and a national network reaching beyond the civil service. Cooperation with the crown strengthens legitimacy while creating recurring tension over modern schooling and administrative control.</p>"},
      {id:"battambang",title:"Government of the Battambang grievance",html:"<p>The state commemorates lost western territories through historical maps, ceremonies, refugee memory, temple claims, and diplomacy. It recognizes the frontier in law but is forbidden by Japan from converting national mourning into armed irredentism against Thailand.</p>"},
      {id:"reserve",title:"Japanese reserved powers",html:"<p>Cambodia controls ordinary domestic law, nationality, education, culture, and administration. Japan retains defense, foreign alignment, strategic access, intelligence, advanced equipment, and decisive leverage over external finance and Thai relations.</p>"},
      {id:"regional",title:"Small-state strategy in the council",html:"<p>Cambodia uses the Council of the Three Indochinese States to secure technical cooperation and collective petitions while insisting upon unanimity and rotating administration. Its central objective is cooperation without Vietnamese federal leadership.</p>"}
    ],
    related:[...cambodiaDepthRelated,{href:"norodom-sihanouk.html",kicker:"Political monarch",label:"Norodom Sihanouk"},{href:"economy-of-cambodia.html",kicker:"Political economy",label:"Economy of Cambodia"},{href:"society-of-cambodia.html",kicker:"Social setting",label:"Society of Cambodia"}],
    facts:[["State","Kingdom of Cambodia"],["Government","Protected political monarchy"],["Sovereign","Norodom Sihanouk"],["Capital","Phnom Penh"],["Major political currents","Sihanoukian and Thanhite nationalism"],["Permanent grievance","Battambang and western districts"],["Strategic reserve","Empire of Japan"],["Final constitutional text","Open"]]
  }),

  "economy-of-cambodia":mekongNationalArticle({
    title:"Economy of Cambodia",category:"Economy of Cambodia",eyebrow:"Agriculture · port development · cultural economy",infoboxKicker:"Protected national economy",
    lead:"The economy of Cambodia combines rice, rubber, fisheries, timber, food and textile processing, river commerce, Angkor tourism, and a Japanese-supported national port with deep dependence upon imported machinery, finance, shipping, and Vietnamese technical services.",
    canon:"Agricultural and commodity dependence, Phnom Penh's centrality, Kompong Som development, transport and irrigation compensation, Angkor restoration and tourism, Japanese and Vietnamese commercial influence, cultural publishing, rural debt, and developmental dissatisfaction are established. Output, port dates, firms, landholding, commodity prices, wages, tax shares, and complete trade accounts remain open.",
    sections:[
      {id:"agriculture",title:"Rice, rubber, fisheries, and timber",html:"<p>Rice cultivation and milling, rubber, fisheries, timber, food production, and rural trade provide most livelihoods and exports. Commodity dependence exposes households and the treasury to purchasing terms set by larger Japanese and regional buyers.</p>"},
      {id:"capital",title:"Phnom Penh and Mekong commerce",html:"<p>Phnom Penh concentrates government, banks, wholesalers, river transport, education, workshops, cultural institutions, and the largest consumer market. Development weakens rapidly away from the capital, principal waterways, and strategic roads.</p>"},
      {id:"port",title:"Kompong Som national port",html:"<p>Japanese-backed development of Kompong Som gives Cambodia maritime access not entirely dependent upon Thailand, Vietnam, or river transit. The port is both an economic project and compensation for the permanence of the western territorial settlement.</p>"},
      {id:"infrastructure",title:"Irrigation, roads, rail, and flood control",html:"<p>Irrigation, flood management, roads, rail links, river works, and electricity raise output and bind the kingdom together. The same projects increase dependence upon Japanese engineers, credit, machinery, standards, and maintenance.</p>"},
      {id:"angkor",title:"Angkor restoration and tourism",html:"<p>Archaeology, conservation, pilgrimage, hotels, transport, crafts, and cultural performance make Angkor a source of revenue and national prestige. Japanese tourism and patronage finance preservation while giving foreign firms influence over access and presentation.</p>"},
      {id:"industry",title:"Processing, publishing, and imports",html:"<p>Food, rubber, textiles, crafts, printing, and cultural publishing form the principal domestic industries. Radios, vehicles, appliances, machinery, and much technical equipment are imported complete or assembled with foreign components and assistance.</p>"},
      {id:"rural",title:"Debt, labor, and uneven development",html:"<p>Rural indebtedness, land pressure, court patronage, seasonal work, and unequal access to transport and credit limit the benefits of growth. Development programs reduce isolation without creating a broad industrial economy.</p>"},
      {id:"demands",title:"Developmental bargaining",html:"<p>Cambodia seeks better commodity prices, more domestic processing, cultural investment, market guarantees, and continuing Japanese compensation for the Thai-held west. Its leverage comes through permits, land, labor, and common petitions rather than strategic independence.</p>"}
    ],
    related:[...cambodiaDepthRelated,{href:"government-of-cambodia.html",kicker:"Institutions",label:"Government of Cambodia"},{href:"japanese-consumer-economy-mekong.html",kicker:"Regional market",label:"Japanese Consumer Economy in the Mekong States"},{href:"developmental-dissatisfaction-mekong.html",kicker:"Political reaction",label:"Developmental Dissatisfaction"}],
    facts:[["Economic structure","Agricultural and commodity-dependent"],["Principal products","Rice, rubber, fish, timber, and processed food"],["Commercial center","Phnom Penh"],["National port","Kompong Som"],["Cultural industry","Angkor tourism and Khmer publishing"],["Advanced machinery","Imported"],["Principal external influence","Japanese finance and supply"],["Complete national accounts","Open"]]
  }),

  "society-of-cambodia":mekongNationalArticle({
    title:"Society of Cambodia",category:"Society of Cambodia",eyebrow:"Crown · Buddhism · Angkor · border memory",infoboxKicker:"National society",
    lead:"Cambodian society is organized around Khmer language and script, Buddhist institutions, the monarchy, village and provincial life, Angkorian historical memory, the loss of western territories, and an urban cultural sector dependent upon Japanese equipment and regional technical labor.",
    canon:"Khmer cultural coherence, monarchical and Buddhist legitimacy, Angkorian inheritance, the Battambang grievance, rural indebtedness, Vietnamese-community tension, modern schooling disputes, Khmer-language media, digitization and preservation, and Japanese cultural sponsorship are established. Population, religious totals, land distribution, urbanization, refugee numbers, class shares, and social survey data remain open.",
    sections:[
      {id:"identity",title:"Khmer national identity",html:"<p>Language, script, the monarchy, Buddhism, Angkor, dance, court ceremony, archaeology, and the memory of territorial contraction define a national community distinct from both Vietnamese administration and Thai cultural claims.</p>"},
      {id:"buddhism",title:"Buddhist institutions and daily life",html:"<p>Monasteries sustain worship, education, charity, festivals, manuscript culture, local mediation, and rites of passage. Buddhist authority binds villages to the crown while sometimes resisting secular curricula and bureaucratic regulation.</p>"},
      {id:"rural",title:"Village society",html:"<p>Most people live through agriculture, fisheries, household craft, markets, temples, kinship, debt, and provincial patronage. Roads, schools, irrigation, conscription, and commodity purchasing bring the state and Japanese economy into rural life unevenly.</p>"},
      {id:"west",title:"Battambang in public memory",html:"<p>Refugee families, temples, land claimants, veterans, maps, and commemorations preserve the western loss. Later generations may accept the practical frontier while continuing to regard the districts as part of the historical Khmer world.</p>"},
      {id:"communities",title:"Vietnamese communities and commercial tension",html:"<p>Vietnamese merchants, technicians, workers, and long-settled communities are important to urban and river commerce. Their visibility can revive memories of the French administrative order and produce resentment that the monarchy must contain.</p>"},
      {id:"education",title:"Khmer schooling and modern expertise",html:"<p>Khmer is the language of domestic education and government. Japanese becomes necessary for technical scholarships, senior corporate work, military liaison, and advanced machinery, while French declines into an older prestige and historical language.</p>"},
      {id:"media",title:"Dance, broadcasting, and popular culture",html:"<p>Cambodian media emphasizes Angkorian history, Buddhist stories, court drama, dance, royal ceremony, border memory, and rural morality. Imported programs are dubbed into Khmer and often interpreted through local religious and family expectations.</p>"},
      {id:"preservation",title:"Preservation and digitization",html:"<p>Khmer type, dictionaries, archives, manuscripts, publishing, education, and cultural software receive support during the preservationist period. Technical dependence remains, but national culture gains durable institutional form.</p>"}
    ],
    related:[...cambodiaDepthRelated,{href:"government-of-cambodia.html",kicker:"Political institutions",label:"Government of Cambodia"},{href:"economy-of-cambodia.html",kicker:"Material setting",label:"Economy of Cambodia"},{href:"media-dubbing-mekong-states.html",kicker:"Regional media",label:"Media and Dubbing in the Mekong States"}],
    facts:[["Majority culture","Khmer"],["Principal religion","Theravada Buddhism"],["National institutions","Monarchy, sangha, Khmer schools, and cultural bodies"],["Central historical symbol","Angkor"],["Permanent public grievance","Battambang and the western districts"],["Technical language","Japanese"],["Media language","Khmer"],["Comprehensive social statistics","Open"]]
  }),

  "government-of-laos":mekongNationalArticle({
    title:"Government of Laos",category:"Government of Laos",eyebrow:"Dual-capital monarchy · corridor state",infoboxKicker:"National government",
    lead:"The government of Laos is the negotiated royal, ministerial, provincial, monastic, military, and advisory order joining Luang Prabang's crown and religious authority to Vientiane's administrative government across a country whose strategic corridors are more governable than much of its territory.",
    canon:"Unification around the Luang Prabang monarchy, the dual-capital settlement, bargains with Vientiane, Champasak, provinces, monasteries and highland communities, uneven administrative reach, small regional army, Japanese corridor power, recurring limited disorders, and the Three States council are established. The constitution, legislature, succession, provincial settlement, borders, cabinet chronology, and treaty schedule remain open.",
    sections:[
      {id:"formation",title:"Unification after French rule",html:"<p>The Japanese-backed Kingdom of Luang Prabang expands into a unified Kingdom of Laos after 1947. State formation requires agreement rather than simple annexation because courts, provinces, monasteries, commanders, and communities possess their own sources of authority.</p>"},
      {id:"crown",title:"Luang Prabang and the crown",html:"<p>The king, court, dynastic rites, Buddhist patronage, and royal capital provide constitutional continuity and a visible Lao identity. The crown legitimizes a wider state whose administrative machinery remains thin.</p>"},
      {id:"vientiane",title:"Vientiane administration",html:"<p>Vientiane contains the principal ministries, foreign missions, development boards, army headquarters, transport offices, and commercial agencies. Its practical importance does not displace Luang Prabang's royal and religious precedence.</p>"},
      {id:"provincial",title:"Champasak, provinces, and local authority",html:"<p>Southern elites, provincial governors, monasteries, local notables, customary authorities, highland communities, and security commanders preserve significant room for action. Government is a chain of bargains rather than a uniform national bureaucracy.</p>"},
      {id:"administration",title:"Uneven administrative reach",html:"<p>Taxation, schools, police, courts, health, and public works are strongest along the Mekong, around towns, and beside strategic routes. Mountain districts may encounter the state principally through patrol, resettlement, road building, or concession administration.</p>"},
      {id:"security",title:"The royal army and limited disorders",html:"<p>A small regionally recruited army, provincial forces, and local authorities handle coups, smuggling, border raiding, highland revolt, succession disputes, and residual revolutionary activity. These remain recurrent limited crises rather than one national civil war.</p>"},
      {id:"reserve",title:"Japanese advisory and reserve power",html:"<p>Japanese support supplies external protection, communications, transport, finance, advanced equipment, and final strategic arbitration. Advisers can become more capable than the offices they support, making formal sovereignty coexist with practical dependence.</p>"},
      {id:"council",title:"Government through regional cooperation",html:"<p>The Council of the Three Indochinese States supplies health, river, transport, customs, and technical capacity that Laos cannot cheaply reproduce. Vientiane supports the council while resisting any federal authority that could subordinate the kingdom to Vietnam.</p>"}
    ],
    related:[...laosDepthRelated,{href:"economy-of-laos.html",kicker:"Political economy",label:"Economy of Laos"},{href:"society-of-laos.html",kicker:"Social setting",label:"Society of Laos"},{href:"luang-prabang.html",kicker:"Royal capital",label:"Luang Prabang"},{href:"vientiane.html",kicker:"Administrative center",label:"Vientiane"}],
    facts:[["State","Kingdom of Laos"],["Government","Protected dual-capital monarchy"],["Royal capital","Luang Prabang"],["Administrative center","Vientiane"],["Southern negotiating center","Champasak"],["Administrative reach","Corridor-centered and uneven"],["Strategic reserve","Empire of Japan"],["Final constitutional text","Open"]]
  }),

  "economy-of-laos":mekongNationalArticle({
    title:"Economy of Laos",category:"Economy of Laos",eyebrow:"Agriculture · concessions · transit",infoboxKicker:"Corridor economy",
    lead:"The economy of Laos is a predominantly rural corridor economy based on agriculture, timber, coffee and other highland crops, livestock, mining, hydropower, river transport, transit, small processing, and foreign-financed infrastructure linking stronger neighboring systems.",
    canon:"The listed sectors, corridor-state role, Japanese and regional dependence, outward-facing infrastructure, concession politics, import dependence, small-scale processing and repair, and 1970s demands for greater control are established. Concession names, mine and dam inventories, output, trade totals, landholding, wages, currencies, and national accounts remain open.",
    sections:[
      {id:"rural",title:"Agriculture and rural production",html:"<p>Rice, livestock, household production, forest use, coffee and other highland crops sustain most households. Limited roads, credit, storage, and market access keep productivity and commercialization uneven.</p>"},
      {id:"resources",title:"Timber, mining, and hydropower",html:"<p>Forests, minerals, river gradients, and highland resources attract Japanese and regional concessions. Extraction and electricity can provide state revenue while moving control toward foreign engineers, financiers, and transport operators.</p>"},
      {id:"transit",title:"The corridor economy",html:"<p>Laos connects Thailand, Vietnam, Cambodia, China, and the wider Mekong basin. River ports, roads, airfields, bridges, power lines, and customs posts make location more economically important than domestic manufacturing scale.</p>"},
      {id:"infrastructure",title:"Infrastructure and outward integration",html:"<p>A road or power line may improve Lao administration while binding a district more closely to Thailand, Vietnam, or a Japanese concession. Selected corridors therefore develop faster than the territory between them.</p>"},
      {id:"imports",title:"Imported goods and local services",html:"<p>Laos imports most complex machinery, vehicles, electrical goods, electronics, and consumer durables. Domestic enterprise concentrates on food, timber processing, cabinets, repair, transport, retail, hospitality, and services.</p>"},
      {id:"finance",title:"Finance and concession dependence",html:"<p>Japanese and regional banks, development agencies, contractors, and concession companies supply capital unavailable domestically. The state bargains over permits, land, labor, tolls, taxes, and revenue shares without commanding the technical system.</p>"},
      {id:"towns",title:"Vientiane and secondary centers",html:"<p>Vientiane is the principal market, administrative employer, transport node, and foreign-business center. Luang Prabang combines court, religion, tourism, and craft; provincial centers depend heavily upon the corridor or concession nearest them.</p>"},
      {id:"demands",title:"Developmental dissatisfaction",html:"<p>By the 1970s Lao officials demand greater control of dams, roads, transport receipts, and resource concessions. Japan grants selected training and participation while preserving the networks required for strategic access.</p>"}
    ],
    related:[...laosDepthRelated,{href:"government-of-laos.html",kicker:"Institutions",label:"Government of Laos"},{href:"three-states-transport-system.html",kicker:"Regional network",label:"Three States Transport System"},{href:"developmental-dissatisfaction-mekong.html",kicker:"Political reaction",label:"Developmental Dissatisfaction"}],
    facts:[["Economic structure","Predominantly rural corridor economy"],["Principal sectors","Agriculture, timber, crops, mining, hydropower, and transit"],["Principal market","Vientiane"],["Complex manufactures","Mostly imported"],["Infrastructure","Outward-facing corridors"],["Capital and engineering","Japanese and regional"],["National bargaining assets","Permits, routes, resources, and revenue shares"],["Complete national accounts","Open"]]
  }),

  "society-of-laos":mekongNationalArticle({
    title:"Society of Laos",category:"Society of Laos",eyebrow:"Royal center · river towns · upland communities",infoboxKicker:"National society",
    lead:"Lao society joins the monarchy and Buddhist life of Luang Prabang, the ministries and commerce of Vientiane, lowland river communities, upland peoples, provincial authorities, and a language-preservation program intended to prevent the weak corridor kingdom from disappearing into stronger Thai, Vietnamese, and Japanese systems.",
    canon:"Dual-capital social geography, Theravada Buddhist and monastic importance, Lao-language particularism, Tham preservation, lowland and highland distinction, Vietnamese and Chinese merchant communities, uneven schooling and administration, migration pressure, local disorders, and fear of cultural disappearance are established. Ethnic totals, urbanization, religious data, migration rates, education levels, class shares, and household surveys remain open.",
    sections:[
      {id:"capitals",title:"Two capitals and two public centers",html:"<p>Luang Prabang organizes dynasty, Buddhism, ceremony, and historical identity. Vientiane organizes ministries, diplomacy, modern schools, commerce, transport, and foreign technical life. National society must recognize both to remain coherent.</p>"},
      {id:"lowland",title:"River towns and lowland society",html:"<p>Lowland Lao communities along the Mekong possess the strongest contact with markets, schools, administration, transport, and broadcasting. River routes connect the country even where national roads remain incomplete.</p>"},
      {id:"upland",title:"Highland peoples and local authority",html:"<p>Upland communities retain languages, customary institutions, local leaders, religious practices, and economic patterns less integrated with the court. Taxation, roads, military recruitment, concessions, and resettlement create recurring friction.</p>"},
      {id:"buddhism",title:"Buddhism and monastic networks",html:"<p>Theravada monasteries provide education, manuscript custody, charity, ritual, mediation, and a network joining villages to royal legitimacy. Tham script preserves religious literature alongside modern Lao public writing.</p>"},
      {id:"language",title:"Lao particularism",html:"<p>The state treats the distinction between Lao and Thai as politically essential despite close linguistic relationship. Separate scripts, dictionaries, textbooks, broadcasts, ceremonies, and technical terms establish that Laos is not a western neighbor's cultural province.</p>"},
      {id:"communities",title:"Merchants, migration, and neighboring influence",html:"<p>Vietnamese and Chinese merchant communities, Thai broadcasting and commerce, Japanese advisers, and internal migration all connect Laos to stronger societies. The government seeks useful expertise while limiting settlement and official employment that could hollow out Lao institutions.</p>"},
      {id:"education",title:"Education and administrative reach",html:"<p>Lao-language schools spread most effectively along the Mekong and principal routes. Japanese is valuable for technical careers and scholarships, while remote districts depend more heavily upon monasteries, local teachers, and intermittent state services.</p>"},
      {id:"change",title:"Development, disorder, and national survival",html:"<p>Roads, dams, concessions, military posts, and resettlement can improve material life while disrupting land use and local authority. The monarchy's central social claim is that uneven modernization must still preserve a recognizable Lao country.</p>"}
    ],
    related:[...laosDepthRelated,{href:"government-of-laos.html",kicker:"Political institutions",label:"Government of Laos"},{href:"economy-of-laos.html",kicker:"Material setting",label:"Economy of Laos"},{href:"media-dubbing-mekong-states.html",kicker:"Regional media",label:"Media and Dubbing in the Mekong States"}],
    facts:[["Principal public centers","Luang Prabang and Vientiane"],["Principal religion","Theravada Buddhism"],["Public language","Lao"],["Religious script","Tham"],["Major social geography","Lowland river communities and upland peoples"],["Primary cultural concern","Distinction from Thailand and survival among stronger neighbors"],["Technical language","Japanese"],["Comprehensive social statistics","Open"]]
  })
});

const addMekongNationalRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []),...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addMekongNationalRelated("vietnam",[{href:"government-of-vietnam.html",kicker:"Institutions",label:"Government of Vietnam"},{href:"economy-of-vietnam.html",kicker:"Political economy",label:"Economy of Vietnam"},{href:"society-of-vietnam.html",kicker:"Social history",label:"Society of Vietnam"}]);
addMekongNationalRelated("cambodia",[{href:"government-of-cambodia.html",kicker:"Institutions",label:"Government of Cambodia"},{href:"economy-of-cambodia.html",kicker:"Political economy",label:"Economy of Cambodia"},{href:"society-of-cambodia.html",kicker:"Social history",label:"Society of Cambodia"}]);
addMekongNationalRelated("laos",[{href:"government-of-laos.html",kicker:"Institutions",label:"Government of Laos"},{href:"economy-of-laos.html",kicker:"Political economy",label:"Economy of Laos"},{href:"society-of-laos.html",kicker:"Social history",label:"Society of Laos"}]);
addMekongNationalRelated("indochina",[{href:"government-of-vietnam.html",kicker:"Vietnamese state",label:"Government of Vietnam"},{href:"government-of-cambodia.html",kicker:"Cambodian state",label:"Government of Cambodia"},{href:"government-of-laos.html",kicker:"Lao state",label:"Government of Laos"}]);
addMekongNationalRelated("council-three-indochinese-states",[{href:"government-of-vietnam.html",kicker:"Largest member",label:"Government of Vietnam"},{href:"government-of-cambodia.html",kicker:"Western member",label:"Government of Cambodia"},{href:"government-of-laos.html",kicker:"Upstream member",label:"Government of Laos"}]);
addMekongNationalRelated("japanese-consumer-economy-mekong",[{href:"economy-of-vietnam.html",kicker:"Assembly center",label:"Economy of Vietnam"},{href:"economy-of-cambodia.html",kicker:"Commodity market",label:"Economy of Cambodia"},{href:"economy-of-laos.html",kicker:"Corridor market",label:"Economy of Laos"}]);
addMekongNationalRelated("media-dubbing-mekong-states",[{href:"society-of-vietnam.html",kicker:"Largest cultural market",label:"Society of Vietnam"},{href:"society-of-cambodia.html",kicker:"Khmer cultural setting",label:"Society of Cambodia"},{href:"society-of-laos.html",kicker:"Lao cultural setting",label:"Society of Laos"}]);
addMekongNationalRelated("developmental-dissatisfaction-mekong",[{href:"economy-of-vietnam.html",kicker:"Industrial claimant",label:"Economy of Vietnam"},{href:"economy-of-cambodia.html",kicker:"Commodity claimant",label:"Economy of Cambodia"},{href:"economy-of-laos.html",kicker:"Concession claimant",label:"Economy of Laos"}]);
