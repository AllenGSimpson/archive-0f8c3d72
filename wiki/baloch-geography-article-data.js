window.deepArticles = window.deepArticles || {};

const balochGeographySources = [
  {href:"../transcript.md",label:"Master Transcript — western Baloch geography, state formation, and wars, Turns 724–729"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Indian successor states and western frontier"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Baloch territorial succession, 1947–1984"},
  {href:"https://www.iranicaonline.org/articles/baluchistan-index/baluchistan-i/",label:"Encyclopaedia Iranica — Baluchistan: geography, history, and ethnography"},
  {href:"https://www.iranicaonline.org/articles/makran/",label:"Encyclopaedia Iranica — Makran"},
  {href:"https://www.qdl.qa/en/historical-profile-british-baluchistan-and-makran",label:"Qatar Digital Library and British Library — British Baluchistan and Makran"},
  {href:"https://bhc.gov.pk/district-judiciary/lasbella/introduction/history",label:"High Court of Balochistan — history of Las Bela"},
  {href:"https://bhc.gov.pk/district-judiciary/chaghi/introduction/history",label:"High Court of Balochistan — history of Chagai"},
  {href:"https://gwadarport.gov.pk/gwadar.aspx",label:"Gwadar Port Authority — Gwadar geography"}
];

const balochGeographyCards = [
  {href:"makran.html",kicker:"Western coastal principality",label:"Makran"},
  {href:"kharan.html",kicker:"Interior desert principality",label:"Kharan"},
  {href:"las-bela.html",kicker:"Eastern coastal principality",label:"Las Bela"},
  {href:"chagai.html",kicker:"Northwestern frontier administration",label:"Chagai"},
  {href:"gwadar.html",kicker:"Capital port and former Omani enclave",label:"Gwadar"}
];

const balochTerritorialDiagram = {src:"assets/diagrams/baloch-territorial-succession.svg",alt:"Diagram showing the political status of Makran, Kharan, Las Bela, Chagai, and Gwadar from the end of British rule through the Baloch Confederated State and Kalat's 1984 victory",caption:"The five territories entered the post-Raj order through different legal routes; the diagram records political status rather than surveyed borders."};

const balochGeographyArticle = config => ({
  category:config.category || "Geography",
  eyebrow:config.eyebrow || "Baloch territorial history · western Indian successor order",
  infoboxKicker:config.infoboxKicker || "Territory of the Baloch successor region",
  landscape:balochTerritorialDiagram,
  ...config,
  related:[...(config.related || []),...balochGeographyCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:balochGeographySources,
  categories:config.categories || ["Balochistan","Indian successor states","Western Indian Wars","Geography"]
});

Object.assign(window.deepArticles,{
  "makran":balochGeographyArticle({
    slug:"makran",title:"Makran",category:"Territories",eyebrow:"Coastal principality · Balochistan",infoboxKicker:"Former confederated principality",infoboxTitle:"Makran",
    lead:"Makran is the western coastal principality and regional district that formed the principal territorial base of the Baloch Confederated State. Its ruling establishment rejected Kalat's claim to historic paramountcy after British withdrawal, joined Kharan and Las Bela in the coastal confederation, and acquired exceptional influence after nearby Gwadar became the common capital. Makran entered the Kalat-led Baloch order as a subordinate princely administration in 1984.",
    canon:"Makran's status as a former client principality of Kalat, separate action after paramountcy, founding role in the Baloch Confederated State, proximity to Gwadar, Iranian alignment, military and political importance, association with centralization, and subordinate princely status after 1984 are established. Exact boundaries, ruler sequence, local seat, ministries, revenue, population, flag, and postwar constitutional instrument remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Makran occupies the arid Arabian Sea coast and interior valleys between the Iranian frontier and Las Bela. Kech, Panjgur, coastal settlements, wells, passes, and tracks provide the principal inhabited and transport nodes. The name also describes a wider historical region extending across the Iranian frontier; this article concerns the eastern principality in the Indian successor system.</p>"},
      {id:"princely",title:"Princely state",html:"<p>Before the breaking of the Raj, Makran was governed by Gichki rulers and associated with Kalat as a client principality. British political intervention weakened Kalat's practical control and allowed Makran's court to conduct much internal administration separately.</p><p>The precise authority of the Khan of Kalat remained disputed by the two courts.</p>"},
      {id:"confederation",title:"Formation of the confederation",html:"<p>Makran rejected <a href='ahmad-yar-khan.html'>Ahmad Yar Khan's</a> demand for renewed subordination and joined Kharan, Las Bela, and associated territories in the <a href='baloch-confederated-state.html'>Baloch Confederated State</a>. Iranian recognition, finance, fuel, and military supply protected the new coalition.</p>"},
      {id:"gwadar",title:"Makran and Gwadar",html:"<p>The <a href='gwadar-transfer.html'>transfer of Gwadar</a> placed the common capital on the Makran coast without making the former Omani enclave ordinary Makrani territory. Proximity gave Makrani officials, merchants, and military officers ready access to the ministries, port, customs service, and Iranian mission.</p>"},
      {id:"war",title:"Baloch wars",html:"<p>Makran supplied territory, roads, ports, levies, and regular units in the wars against Kalat and Afghanistan. Kalat attacked eastern approaches when the confederated army operated toward Chagai or the Afghan frontier. Iranian assistance prevented complete conquest during the early wars.</p>"},
      {id:"centralization",title:"Centralization dispute",html:"<p>The Gwadar government's attempt to centralize the army, customs, and Iranian aid in the early 1980s was widely identified with Makrani predominance. Kharan and Chagai resisted changes that placed appointments, stores, and revenues nearer the capital.</p><p>The archive does not assign one common position to every Makrani ruler or officer.</p>"},
      {id:"kalat",title:"Incorporation into Kalat",html:"<p>Kalat's political terms preserved Makran as a subordinate princely administration under the paramount Khan. The arrangement retained hereditary authority, customary law, land rights, and representation in the proposed Baloch grand council. The exact accession or capitulation instrument is not fixed.</p>"},
      {id:"administration",title:"Administration after 1984",html:"<p>Makran remained distinct from Kalat's dynastic core and from Chagai's militarized frontier administration. Local courts and officials continued ordinary government while common defense, foreign relations, and the larger Baloch claim passed to Kalat.</p>"}
    ],
    related:[{href:"baloch-confederated-state.html",kicker:"Former common state",label:"Baloch Confederated State"},{href:"government-of-baloch-confederated-state.html",kicker:"Former central government",label:"Confederated Government"},{href:"kalat.html",kicker:"Post-1984 paramount state",label:"Kalat"}],
    facts:[["Type","Coastal region and princely administration"],["Historical ruling house","Gichki"],["Former superior claim","Khanate of Kalat"],["Confederated state","Baloch Confederated State"],["Nearby common capital","Gwadar"],["External patron before 1984","Iran"],["Status after 1984","Subordinate principality under Kalat"],["Exact boundaries and ruler sequence","Open"]]
  }),

  "kharan":balochGeographyArticle({
    slug:"kharan",title:"Kharan",category:"Territories",eyebrow:"Interior principality · Balochistan",infoboxKicker:"Former confederated principality",infoboxTitle:"Kharan",
    lead:"Kharan is the interior Baloch principality that joined the Baloch Confederated State after the Raj and later became one of the principal opponents of centralization by the Gwadar government. Its rulers retained land, customary law, local police, taxation arrangements, and a dynastic court under the confederal settlement. Kalat absorbed the territory in 1984 while preserving Kharan as a subordinate princely administration.",
    canon:"Kharan's princely status, Nausherwani historical ruling tradition, rejection of Kalat's immediate paramountcy, membership in the Baloch Confederated State, retained domestic powers, resistance to Gwadar centralization, wartime division, and post-1984 subordinate princely status are established. Exact borders, rulers in this timeline, capital, ministries, population, units, accession terms, and flag remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Kharan occupies an arid interior between Makran, Chagai, and the Kalat approaches. Settlement concentrates around water, cultivable valleys, tracks, and local centers separated by large desert distances. Control depends upon wells, routes, negotiated local authority, and mobile forces more than a continuous administrative presence.</p>"},
      {id:"princely",title:"Princely state",html:"<p>The Nausherwani rulers governed Kharan as a client principality associated with Kalat. British officials treated its position separately enough that the court could assert internal autonomy when paramountcy ended. Kalat continued to regard the principality as lawfully subordinate.</p>"},
      {id:"confederation",title:"Membership in the confederation",html:"<p>Kharan joined Makran and Las Bela in rejecting immediate restoration beneath the Khan. The <a href='government-of-baloch-confederated-state.html'>confederal government</a> assumed diplomacy, common defense, customs, finance, ports, and the Iranian treaty while Kharan retained most ordinary administration.</p>"},
      {id:"security",title:"Security and communications",html:"<p>Kharan's position connected the coastal state with Chagai and the northern frontier. Roads, wells, vehicle maintenance, local levies, and communications sites acquired military importance. Iranian assistance improved selected routes and units, but supply remained vulnerable to distance and political obstruction.</p>"},
      {id:"wars",title:"Baloch wars",html:"<p>Kharani forces and territory supported the confederation during the First Baloch Wars and later contests with Kalat. The principality had an interest in preventing Kalat from taking the coast while limiting the permanent authority of the common army inside Kharan.</p>"},
      {id:"crisis",title:"Centralization crisis",html:"<p>By the early 1980s Kharani rulers and officers increasingly described central control of appointments, customs revenue, and Iranian aid as Makrani rule from Gwadar. Some confederated formations defected, became neutral, or limited themselves to local defense during the Third Balochistan War. The surviving record does not identify every unit by territory.</p>"},
      {id:"terms",title:"Kalat's settlement terms",html:"<p>Kalat offered confirmation of hereditary authority, customary law, land rights, local administration, and representation in a Baloch grand council. The offer separated the defeat of the Gwadar government from the abolition of Kharan's court.</p>"},
      {id:"postwar",title:"Administration after 1984",html:"<p>Kharan entered the enlarged Kalat-led order as a subordinate principality. Common foreign and defense policy passed to the Khan, while the degree of fiscal control, police autonomy, and military integration remained subject to later bargaining.</p>"}
    ],
    related:[{href:"baloch-confederated-state.html",kicker:"Former common state",label:"Baloch Confederated State"},{href:"third-balochistan-war.html",kicker:"War of incorporation",label:"Third Balochistan War"},{href:"kalat.html",kicker:"Post-1984 paramount state",label:"Kalat"}],
    facts:[["Type","Interior principality"],["Historical ruling house","Nausherwani"],["Former superior claim","Khanate of Kalat"],["Confederated state","Baloch Confederated State"],["Principal late dispute","Centralization by the Gwadar government"],["Status after 1984","Subordinate principality under Kalat"],["Environment","Arid interior and route system"],["Exact borders and ruler sequence","Open"]]
  }),

  "las-bela":balochGeographyArticle({
    slug:"las-bela",title:"Las Bela",category:"Territories",eyebrow:"Coastal principality · eastern Balochistan",infoboxKicker:"Principality contested by two Baloch states",infoboxTitle:"Las Bela",
    lead:"Las Bela is the eastern coastal principality whose possession determined whether Kalat had independent access to the Arabian Sea. Ruled historically by a Jam, it joined the Baloch Confederated State after British withdrawal, was taken by Kalat during the 1960–63 war, and remained the principal territorial claim of the Gwadar government. The failed Balochistan offensive of 1976–79 left most of the principality and its maritime route in Kalat's hands.",
    canon:"Las Bela's princely and Jam-led tradition, founding association with the Baloch Confederated State, strategic trade and coastal position, conquest by Kalat in 1960–63, confederated claim, Second Las Bela War, Kalat's retention of the core and maritime outlet, and direct attachment to the post-1984 khanate are established. Exact borders, rulers, battles, armistice line, local administration, population, and flag remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Las Bela lies between Sindh and Makran, with the town of Bela in the interior and a long Arabian Sea frontage. Routes through the principality connect Sindh and Karachi with the Makran coast and the Iranian approaches. Valleys, river courses, coastal settlements, passes, and sparse roads structure military movement.</p>"},
      {id:"jam",title:"Jam and princely government",html:"<p>The rulers of Las Bela held the title of Jam. The principality maintained a separate court and internal administration while Kalat claimed a historic subordinate relationship. British protection and political mediation gave the Jam practical room to bargain independently.</p>"},
      {id:"confederation",title:"Founding association",html:"<p>Las Bela joined Makran and Kharan in rejecting the restoration of Kalat's paramountcy. Its coastline and eastern route made it the confederation's most direct barrier between Kalat and the sea.</p><p>The precise founding instrument of the <a href='baloch-confederated-state.html'>Baloch Confederated State</a> remains open.</p>"},
      {id:"conquest",title:"Kalat conquest",html:"<p>Kalat took Las Bela during the western wars of 1960–63 and acquired a narrow but independent maritime outlet. The conquest allowed arms and commercial traffic to reach the khanate outside complete dependence upon Sindh.</p>"},
      {id:"claim",title:"Confederated claim",html:"<p>The Gwadar government continued to treat Las Bela as a constituent territory under occupation. Recovery became its principal national objective. Repeated failure damaged the standing of the confederated courts and the Iranian security relationship.</p>"},
      {id:"second-war",title:"Second Las Bela War",html:"<p>Iranian-backed Balochistan attacked in 1976 with armor, motor transport, artillery, radios, and improved logistics. Kalat used local routes, mounted infantry, imported equipment, and quiet Sindhi support. The confederation recovered limited ground but failed to retake the core of the principality.</p>"},
      {id:"third-war",title:"Third Balochistan War",html:"<p>Las Bela provided Kalat with a forward political and military position during the 1981–84 war. Pressure from the territory accompanied defections and the collapse of common command at Gwadar. Exact operations and local formations remain open.</p>"},
      {id:"postwar",title:"Status after 1984",html:"<p>The enlarged Kalat-led order kept Las Bela directly attached to the khanate rather than restoring it as a coequal confederated member. The court of the Jam, local law, revenue arrangements, and degree of retained authority after the war have not been fixed.</p>"}
    ],
    related:[{href:"second-las-bela-war.html",kicker:"Principal territorial war",label:"Second Las Bela War"},{href:"first-baloch-wars.html",kicker:"Early contest",label:"First Baloch Wars"},{href:"kalat.html",kicker:"Controlling state",label:"Kalat"},{href:"baloch-confederated-state.html",kicker:"Former claimant",label:"Baloch Confederated State"}],
    facts:[["Type","Coastal principality"],["Ruler's title","Jam"],["Founding alignment","Baloch Confederated State"],["Conquered by","Kalat, 1960–1963"],["Major later conflict","Second Las Bela War, 1976–1979"],["Strategic value","Kalat's maritime outlet and Sindh–Makran route"],["Status after 1984","Directly attached to Kalat"],["Exact borders and postwar court status","Open"]]
  }),

  "chagai":balochGeographyArticle({
    slug:"chagai",title:"Chagai",category:"Territories",eyebrow:"Northwestern frontier territory · Balochistan",infoboxKicker:"Militarized frontier administration",infoboxTitle:"Chagai",
    lead:"Chagai is the sparsely populated northwestern frontier territory between the Iranian, Afghan, and Baloch successor systems. Unlike Makran, Kharan, and Las Bela, it belonged to the directly administered Chief Commissioner's Province under the Raj rather than to a princely court. Afghanistan occupied it during the Western Succession Crisis; it later entered the Baloch Confederated State and became a militarized frontier administration after Kalat's victory in 1984.",
    canon:"Chagai's directly administered pre-collapse status, strategic desert geography, Afghan occupation, place in the Southern Frontier Administration, later transfer into the Baloch Confederated State, exclusion from Pakistan's Quetta settlement, conflict over Gwadar centralization, and post-1984 militarized frontier status are established. Exact occupation and transfer dates, borders, capital, governors, civil code, garrisons, population, mines, customs system, and flag remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Chagai occupies the desert northwest of the Baloch region adjoining Iran and Afghanistan. Long distances separate settlements, wells, border posts, tracks, and later roads. The territory provides strategic depth around Kandahar, access toward Iran, and a barrier between the Pakistani and Iranian frontiers.</p>"},
      {id:"british",title:"British administration",html:"<p>Under the Raj, Chagai formed part of the directly administered Baluchistan system with Quetta–Pishin, Sibi, Loralai, Zhob, and other frontier districts. Political agents and district officers governed through retained local intermediaries, security forces, and communications routes.</p><p>It was not a client principality of Kalat.</p>"},
      {id:"afghan",title:"Afghan occupation",html:"<p><a href='afghanistan.html'>Afghanistan</a> occupied Chagai during the <a href='western-succession-crisis.html'>Western Succession Crisis</a>. Kabul's public argument emphasized the wider frontier settlement; the territory's practical value lay in depth around Kandahar, access toward Iran, and denial of a continuous Iranian-backed border.</p>"},
      {id:"administration",title:"Southern Frontier Administration",html:"<p>Chagai entered the provisional <a href='southern-frontier-administration-afghanistan.html'>Southern Frontier Administration</a> under an Afghan military governor, local notables, tribal levies, retained civil personnel, and military control of routes. It proved easier to dominate than Quetta because it lacked a comparable urban administrative center.</p>"},
      {id:"transfer",title:"Entry into the Baloch Confederated State",html:"<p>As Pakistan consolidated Quetta–Pishin and Afghanistan redirected its frontier policy eastward, Chagai passed into the Baloch Confederated State. The exact campaign, agreement, and date remain open. By 1969 the territory was part of the Gwadar government's recognized holdings.</p>"},
      {id:"confederal",title:"Confederal administration",html:"<p>Chagai supplied border posts, routes, local forces, and strategic depth rather than a princely court equal to Makran or Kharan. Common army, customs, and Iranian-aid policy therefore affected it directly. Local officers and notables resisted centralization that transferred appointments and stores to Gwadar.</p>"},
      {id:"war",title:"Third Balochistan War",html:"<p>Chagai's distance from the capital and mixed civil-military authority complicated common defense in 1981–84. The archive records defections and neutralities across the confederation but does not identify the allegiance of every Chagai formation or district.</p>"},
      {id:"postwar",title:"Frontier administration after 1984",html:"<p>Kalat organized Chagai as a militarized frontier administration with substantial security autonomy. It did not receive the subordinate-principality status reserved for Makran and Kharan. The governor's title, command relationship, civil institutions, and Iranian-border arrangements remain open.</p>"}
    ],
    related:[{href:"southern-frontier-administration-afghanistan.html",kicker:"Former occupation government",label:"Southern Frontier Administration"},{href:"baloch-confederated-state.html",kicker:"Later state",label:"Baloch Confederated State"},{href:"kalat.html",kicker:"Post-1984 state",label:"Kalat"},{href:"quetta-campaigns.html",kicker:"Neighboring territorial settlement",label:"Quetta Campaigns"}],
    facts:[["Type","Northwestern frontier territory"],["Pre-1947 status","Directly administered British Baluchistan"],["First post-collapse occupier","Afghanistan"],["Later state","Baloch Confederated State"],["Position by 1969","Outside Pakistan; held by Balochistan"],["Strategic frontiers","Iran and Afghanistan"],["Status after 1984","Militarized frontier administration under Kalat"],["Exact transfer date and institutions","Open"]]
  }),

  "gwadar":balochGeographyArticle({
    slug:"gwadar",title:"Gwadar",category:"Cities",eyebrow:"Arabian Sea port · capital of former Balochistan",infoboxKicker:"Special-charter port",infoboxTitle:"Gwadar",
    lead:"Gwadar is the Arabian Sea port that served as the capital of the Baloch Confederated State from its transfer out of Omani sovereignty until the state's collapse in 1984. The enclave's customs, harbor, foreign missions, military supply, and Iranian commercial privileges made it the common center of a geographically dispersed confederation. Kalat retained Gwadar as a special-charter port after the Third Balochistan War.",
    canon:"Gwadar's Omani possession at British withdrawal, Iranian-financed transfer, role as confederal capital and principal port, customs and foreign-policy functions, Iranian access and privileges, association with Makrani influence, government collapse in 1984, and later special port charter are established. Exact transfer date, municipal boundaries, population, harbor works, city government, districts, concession terms, damage, charter, and flag remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Gwadar stands on the Makran coast near the approaches to the Persian Gulf. The port connects coastal shipping, overland tracks, customs routes, fishing settlements, and the Iranian frontier. Its physical separation from the old centers of Kalat, Kharan, and Las Bela reinforced its value as a new common capital.</p>"},
      {id:"oman",title:"Omani rule",html:"<p>Gwadar remained a possession of the Sultan of Muscat and Oman when British authority disappeared. It did not pass automatically to Makran or any Indian successor state. British and regional diplomacy had long treated the enclave as legally separate from the surrounding Baloch coast.</p>"},
      {id:"transfer",title:"Transfer to Balochistan",html:"<p>Iran financed or negotiated the <a href='gwadar-transfer.html'>Gwadar Transfer</a> during the late 1940s or early 1950s. Oman relinquished the enclave and it entered the Baloch Confederated State under conditions protecting Iranian port access, military and commercial privileges, limits on foreign bases, and customs or concession repayment.</p>"},
      {id:"capital",title:"Confederal capital",html:"<p>Gwadar housed the <a href='government-of-baloch-confederated-state.html'>common government</a>, national customs administration, foreign missions, Iranian advisers, port offices, and elements of the armed forces. Component rulers continued to govern most domestic matters from their own territories.</p>"},
      {id:"port",title:"Port and economy",html:"<p>Customs receipts, fishing, coastal trade, storage, fuel, repair, military import, and concession activity supported the capital. Iranian finance and access remained important. The archive does not establish a complete deep-water construction program, tonnage series, company register, or municipal population.</p>"},
      {id:"politics",title:"Politics",html:"<p>Makran's proximity gave Makrani officials and commercial interests greater access to central institutions. Kharan and Chagai increasingly described control from Gwadar as Makrani domination. Disputes concerned appointments, customs, Iranian aid, military stores, and the distribution of port revenue.</p>"},
      {id:"collapse",title:"Collapse in 1984",html:"<p>Defections, local neutralities, pressure from Las Bela, and Iran's refusal to send a large expedition destroyed the government's ability to coordinate the confederation. Kalat forces and political agents took control during the closing phase of the <a href='third-balochistan-war.html'>Third Balochistan War</a>. Exact operations and damage remain open.</p>"},
      {id:"charter",title:"Special port charter",html:"<p>The Kalat-led settlement preserved Gwadar as a special commercial port rather than an ordinary district. Iranian property and access were compensated, preserved, or converted into leases. The charter's date, governing board, customs shares, municipal powers, and foreign-access clauses have not been fixed.</p>"}
    ],
    related:[{href:"gwadar-transfer.html",kicker:"Territorial transfer",label:"Gwadar Transfer"},{href:"government-of-baloch-confederated-state.html",kicker:"Former capital government",label:"Confederated Government"},{href:"baloch-confederated-state.html",kicker:"Former state",label:"Baloch Confederated State"},{href:"kalat.html",kicker:"Present sovereign",label:"Kalat"}],
    facts:[["Type","Arabian Sea port and former capital"],["Pre-transfer sovereign","Sultanate of Muscat and Oman"],["Transfer period","Late 1940s or early 1950s"],["Former capital of","Baloch Confederated State"],["Principal external patron","Iran"],["Captured by","Kalat, 1984"],["Status after 1984","Special-charter commercial port"],["Population, charter, and harbor works","Open"]]
  })
});

const addBalochGeographyLinks = (slug,links=balochGeographyCards) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const balochStateGeo=window.deepArticles["baloch-confederated-state"];
if(balochStateGeo){
  balochStateGeo.landscape=balochTerritorialDiagram;
  const foundation=balochStateGeo.sections?.find(section=>section.id==="foundation");
  if(foundation) foundation.html=foundation.html.replace("Makran, Kharan, Chagai, <a href='gwadar-transfer.html'>Gwadar</a>","<a href='makran.html'>Makran</a>, <a href='kharan.html'>Kharan</a>, <a href='chagai.html'>Chagai</a>, <a href='gwadar.html'>Gwadar</a>");
  const territory=balochStateGeo.sections?.find(section=>section.id==="territory");
  if(territory) territory.html=territory.html.replace("Makran, Kharan, Chagai, and Gwadar","<a href='makran.html'>Makran</a>, <a href='kharan.html'>Kharan</a>, <a href='chagai.html'>Chagai</a>, and <a href='gwadar.html'>Gwadar</a>").replace("lost Las Bela","lost <a href='las-bela.html'>Las Bela</a>");
  addBalochGeographyLinks("baloch-confederated-state");
}

const kalatGeo=window.deepArticles["kalat"];
if(kalatGeo){
  kalatGeo.landscape=balochTerritorialDiagram;
  const lasBela=kalatGeo.sections?.find(section=>section.id==="las-bela");
  if(lasBela) lasBela.html=lasBela.html.replace("Kalat takes Las Bela","Kalat takes <a href='las-bela.html'>Las Bela</a>");
  const union=kalatGeo.sections?.find(section=>section.id==="union");
  if(union) union.html=union.html.replace("Makran and Kharan","<a href='makran.html'>Makran</a> and <a href='kharan.html'>Kharan</a>").replace("Chagai becomes","<a href='chagai.html'>Chagai</a> becomes").replace("Gwadar receives","<a href='gwadar.html'>Gwadar</a> receives");
  addBalochGeographyLinks("kalat");
}

const gwadarTransferGeo=window.deepArticles["gwadar-transfer"];
if(gwadarTransferGeo){
  const omani=gwadarTransferGeo.sections?.find(section=>section.id==="omani");
  if(omani) omani.html=omani.html.replace("Gwadar entered","<a href='gwadar.html'>Gwadar</a> entered");
  addBalochGeographyLinks("gwadar-transfer",[{href:"gwadar.html",kicker:"Transferred port",label:"Gwadar"}]);
}

addBalochGeographyLinks("government-of-baloch-confederated-state");
addBalochGeographyLinks("armed-forces-of-baloch-confederated-state");
addBalochGeographyLinks("western-succession-crisis");
addBalochGeographyLinks("first-baloch-wars");
addBalochGeographyLinks("second-las-bela-war",[{href:"las-bela.html",kicker:"Contested territory",label:"Las Bela"}]);
addBalochGeographyLinks("third-balochistan-war");
addBalochGeographyLinks("southern-frontier-administration-afghanistan",[{href:"chagai.html",kicker:"Occupied territory",label:"Chagai"}]);
addBalochGeographyLinks("quetta-campaigns",[{href:"chagai.html",kicker:"Excluded frontier",label:"Chagai"}]);
