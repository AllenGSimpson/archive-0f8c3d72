window.deepArticles = window.deepArticles || {};

const britishGulfSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Gulf and eastern Mediterranean triage"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — British Gulf order and Kuwait War"},
  {href:"../transcript.md",label:"Master Transcript — British Middle Eastern retrenchment and Gulf empire"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — canon decisions"}
];

const britishGulfLandscape = {
  src:"assets/diagrams/british-gulf-triage.svg",
  alt:"Diagram arranging Britain's post-1947 Middle Eastern positions into must-hold, endangered, and lost categories",
  caption:"The post-Lisbon hierarchy moved Britain's dependable Middle Eastern axis from the Mediterranean to the Gulf and Indian Ocean"
};

const britishGulfArticle = config => ({
  category:config.category || "British Commonwealth",
  eyebrow:config.eyebrow || "British Gulf order · 1947 onward",
  infoboxKicker:config.infoboxKicker || "Post-defeat strategic system",
  landscape:britishGulfLandscape,
  ...config,
  sources:britishGulfSources,
  categories:config.categories || ["British Commonwealth","Middle East","British grand strategy","Postwar imperial systems"]
});

Object.assign(window.deepArticles, {
  "gulf-eastern-mediterranean-triage": britishGulfArticle({
    title:"British Gulf and eastern Mediterranean triage",infoboxKicker:"Regional priority doctrine",
    lead:"British Gulf and eastern Mediterranean triage is the hierarchy by which London decides which Middle Eastern positions can still be defended after the 1947 settlement breaks the old Mediterranean imperial artery. Kuwait, Bahrain, the protected Gulf coast, oil access, the approaches to Basra, air staging, and Aden become indispensable; Palestine and Transjordan remain useful but endangered; Egypt, Sudan, Syria, and most of the old base system are treated as lost or hostile.",
    canon:"The three tiers, their principal territories, the shorthand “Hold the Gulf, or Britain freezes,” the priority of Kuwait and Basra over Palestine, and the political importance of Iraqi and pipeline crises are established. No formal doctrinal paper, author, promulgation date, permanent cabinet committee, or official title is established.",
    sections:[
      {id:"collapse",title:"Collapse of the Mediterranean chain",html:`<p>Lisbon removes Gibraltar, Malta, Cyprus, Egypt, Anglo-Egyptian Sudan, and secure Suez from Britain's military system. Syria also enters the Italian order. Commercial passage through Suez may continue, but no British government can base survival planning on access controlled by a former enemy.</p>`},
      {id:"hierarchy",title:"The three-tier hierarchy",html:`<p>The must-hold tier contains the <a href="british-gulf-protected-state-system.html">protected Gulf states</a>, oil access, Basra's approaches, RAF staging, and Aden. Palestine, Transjordan, and residual Red Sea positions are useful but exposed. Egypt, Sudan, Syria, and most Mediterranean bases are lost or hostile.</p><p>The categories describe willingness to spend ships, aircraft, troops, money, and diplomatic credit. They do not erase legal claims or public attachment.</p>`},
      {id:"formula",title:"“Hold the Gulf, or Britain freezes”",html:`<p>The remembered formula joins fuel security to national survival. It does not mean petroleum remains the only source of electrical energy: British nuclear development reduces that vulnerability. Oil nevertheless remains indispensable to aviation, road transport, most shipping, armor, petrochemicals, fertilizer, and mobile-war reserves.</p>`},
      {id:"palestine",title:"Palestine before Kuwait",html:`<p>Palestine retains immense religious, emotional, and imperial meaning, but it is nearly surrounded by Italian-controlled or associated territory and difficult to reinforce. Treasury, Admiralty, and service planning consequently accept that it may be sacrificed before Kuwait or the Basra corridor.</p><p>This calculation helps explain Britain's retreat into the <a href="amman-settlement.html">Amman Settlement</a> without making the Palestine War unimportant.</p>`},
      {id:"indian",title:"An Indian Ocean system",html:`<p>The remaining British Middle East faces south and east. The Cape route feeds Aden and the Gulf; Ceylon and British Indian Ocean Command extend the chain toward the Indian successor states; airfields and ports replace the continuous Mediterranean route once imagined through Cairo and Suez.</p>`},
      {id:"politics",title:"Domestic political consensus",html:`<p>British parties dispute colonial legitimacy, spending, local reform, and the scale of garrisons. Yet governments from reconstruction Labour through later Conservative and Union Commonwealth administrations accept that a collapse of Gulf treaty confidence would threaten the whole Siege Commonwealth.</p>`},
      {id:"test",title:"The Kuwait test",html:`<p>Iraq's 1974 invasion asks whether the hierarchy is operational doctrine or nostalgic language. Operation Covenant demonstrates that London will concentrate Commonwealth naval, air, marine, airborne, logistical, and diplomatic capacity when an essential protected state invokes its treaty.</p>`},
      {id:"limits",title:"Limits of the doctrine",html:`<p>Triage explains allocation, not legitimacy. The protected rulers depend on British force; Arab governments disagree over the lawful successor; and local consent cannot be inferred from fear of Baghdad or Riyadh. The system survives because its members often fear available alternatives more than they approve British rule.</p>`}
    ],
    related:[{href:"siege-commonwealth.html",kicker:"Parent strategy",label:"Siege Commonwealth"},{href:"british-gulf-protected-state-system.html",kicker:"Constitutional machinery",label:"British Gulf Protected-State System"},{href:"basra-gulf-oil-corridor.html",kicker:"Material core",label:"Basra–Gulf Oil Corridor"},{href:"aden-south-arabian-staging-system.html",kicker:"Route and base",label:"Aden and South Arabian Staging System"},{href:"kuwait-war.html",kicker:"Decisive test · 1974",label:"Kuwait War"}],
    facts:[["Period","1947 onward"],["Status","Working strategic hierarchy"],["Political shorthand","Hold the Gulf, or Britain freezes"],["Must hold","Gulf system · Basra approaches · staging · Aden"],["Useful but endangered","Palestine · Transjordan · residual Red Sea positions"],["Lost or hostile","Egypt · Sudan · Syria · most Mediterranean bases"],["Decisive test","Kuwait War, 1974"]]
  }),

  "british-gulf-protected-state-system": britishGulfArticle({
    title:"British Gulf protected-state system",category:"Imperial administration",infoboxKicker:"Protected-state network",
    lead:"The British Gulf protected-state system is the network through which Britain retains Kuwait, Bahrain, Qatar, and the Trucial States after 1947. Their rulers keep courts, palaces, local administrations, guards, and broad authority over domestic life, while Britain controls defense, foreign relations, external treaties, strategic access, and major installations.",
    canon:"The continued protected status of Kuwait, Bahrain, Qatar, and the Trucial States; the division between internal rule and British external control; and the possible revival of a Persian Gulf Residency or elevation to a Gulf High Commission are established. The supervisory institution's final title, seat, departments, personnel, constitutional instruments, and the individual emirates' internal reforms remain open.",
    sections:[
      {id:"continuity",title:"Protection without decolonization",html:`<p>Britain never terminates the treaty system that historically ended during the early 1960s. London presents continuity as voluntary protection under local rulers. Arab nationalists describe the same structure as colonial possession maintained through bases, advisers, and unequal control of foreign policy.</p>`},
      {id:"members",title:"Protected sheikhdoms",html:`<p>Kuwait, Bahrain, Qatar, and the Trucial States remain distinct polities rather than one British colony or one federation. Oman is formally independent but closely associated; Aden and the surrounding South Arabian territories belong to a related but constitutionally different system.</p>`},
      {id:"division",title:"The constitutional division",html:`<p>Emirs govern courts, local administration, patronage, municipal affairs, and much internal policing. Britain controls defense, foreign relations, treaty access, reinforcement rights, and strategic installations. The exact border between those spheres is political as well as legal and shifts under crisis pressure.</p>`},
      {id:"residency",title:"Residency or High Commission",html:`<p>By the 1970s the holdings may be coordinated through a restored or expanded Persian Gulf Residency, perhaps elevated into a Gulf High Commission. Canon fixes the supervisory function but deliberately leaves its final institutional title and organization open.</p>`},
      {id:"force",title:"Protection in practice",html:`<p>British aircraft, naval forces, advisers, communications, treaty ports, and reinforcement plans make the rulers' autonomy possible and bounded. Local guards and administrations are visible sovereignty; the ability to defeat an external army remains British.</p>`},
      {id:"succession",title:"Competing inheritance claims",html:`<p>Baghdad treats Kuwait as territory severed from Basra and rejects the protected-state system as fragmentation. Riyadh supports the smaller monarchies against Iraqi revolution while imagining a future Saudi-led Arabian order. Other Arab governments oppose indefinite British possession without agreeing who should replace it.</p>`},
      {id:"war",title:"The Kuwait War",html:`<p>The emir of Kuwait's invocation of protection in 1974 tests the legal bargain. British intervention preserves the emirate, while the <a href="muscat-articles.html">Muscat Articles</a> retain British bases and recognize the boundary for a limited term rather than settle permanent moral title.</p>`},
      {id:"durability",title:"A system founded on alternatives",html:`<p>The network survives less through a shared imperial identity than through divided fears. Protected rulers fear Iraq, Saudi absorption, and abrupt patron change; Britain fears loss of access and credibility; neighboring states fear that immediate decolonization would reward the strongest claimant.</p>`}
    ],
    related:[{href:"gulf-eastern-mediterranean-triage.html",kicker:"Strategic hierarchy",label:"Gulf and Eastern Mediterranean Triage"},{href:"kuwait-war.html",kicker:"Protection invoked",label:"Kuwait War"},{href:"saudi-arabia.html",kicker:"Monarchical rival",label:"Kingdom of Saudi Arabia"},{href:"iraq.html",kicker:"Revolutionary claimant",label:"National Resurrection Iraq"},{href:"british-gulf-legitimacy-crisis.html",kicker:"Political contradiction",label:"British Gulf Legitimacy Crisis"}],
    facts:[["Period","1947 onward"],["Protected states","Kuwait · Bahrain · Qatar · Trucial States"],["Internal government","Local rulers and administrations"],["External control","Britain"],["Associated independent state","Oman"],["Possible supervisor","Persian Gulf Residency or Gulf High Commission"],["Final administrative form","Open"]]
  }),

  "basra-gulf-oil-corridor": britishGulfArticle({
    title:"Basra–Gulf oil corridor",category:"Strategic infrastructure",infoboxKicker:"Fuel and access corridor",
    lead:"The Basra–Gulf oil corridor is the connected strategic geography of southern Iraqi access, Kuwaiti protection, Gulf shipping, oil concessions, pipelines, storage, refining, and the sea approaches around Faw and Umm Qasr. It becomes Britain's material Middle Eastern core after the Mediterranean route is lost.",
    canon:"The strategic priority of Gulf oil access, pipelines, sea lanes, Kuwait, Basra's approaches, Faw, and Umm Qasr; the persistence of petroleum despite nuclear electricity; and the existential effect of Iraqi coups or pipeline crises on British planning are established. No single official corridor name, fixed pipeline map, operators, capacities, terminals, tariffs, stockpile figures, or concession boundaries are established.",
    sections:[
      {id:"geography",title:"A corridor rather than one pipe",html:`<p>The term describes a system, not a single piece of infrastructure. It joins inland production and transit to river and coastal access, protected Kuwaiti territory, storage and loading points, the northern Gulf, and the shipping routes that connect to Aden and the Indian Ocean.</p>`},
      {id:"basra",title:"Basra and its approaches",html:`<p>Basra is Iraqi, not British. Its approaches matter because southern channels, Faw, Umm Qasr, and the Kuwait boundary govern whether Baghdad can threaten protected territory, obtain wider maritime access, or obstruct British reinforcement.</p>`},
      {id:"oil",title:"Oil after atomic electricity",html:`<p>Civil nuclear power reduces petroleum's role in electrical generation. It does not replace liquid fuel in aircraft, road transport, most ships, armored forces, petrochemicals, plastics, fertilizer, or reserve stocks for mobile war.</p><p>“Britain freezes” is therefore broader than household heating: interruption immobilizes the maritime and industrial system on which national survival depends.</p>`},
      {id:"kuwait",title:"Kuwait as hinge",html:`<p>Kuwait combines a protected ruler, oil territory, bases, and a border Iraq regards as artificial. For Britain it anchors Gulf confidence and reinforcement. For Baghdad it denies Iraq coastline and resources; for Riyadh it is an Arab monarchy improperly held outside an Arabian order.</p>`},
      {id:"pipeline",title:"Pipelines and political risk",html:`<p>Every route crosses jurisdictions, concessions, pumping stations, storage, and repair systems. A coup can alter access without destroying a pipe, while sabotage or closure can turn a legal dispute into a fuel and shipping crisis.</p>`},
      {id:"covenant",title:"Operation Covenant",html:`<p>Britain clears Kuwait, takes or isolates Faw and Umm Qasr, and threatens Basra in 1974. The advance demonstrates control of the approaches without converting the war into conquest of Iraq.</p>`},
      {id:"muscat",title:"The Muscat settlement",html:`<p>The settlement combines boundary recognition, a demilitarized strip, naval limits, inspection, reparations or oil deliveries, infrastructure repair, and British withdrawal from Iraqi territory. Commercial and strategic clauses are inseparable.</p>`},
      {id:"limits",title:"A critical but not exclusive supply",html:`<p>Britain also cultivates Atlantic, African, Canadian, and nuclear alternatives. The corridor's importance lies in keeping a diversified system mobile and credible; it is not the only energy source in the Commonwealth.</p>`}
    ],
    related:[{href:"gulf-eastern-mediterranean-triage.html",kicker:"Parent doctrine",label:"Gulf and Eastern Mediterranean Triage"},{href:"kuwait-war.html",kicker:"Corridor war · 1974",label:"Kuwait War"},{href:"operation-covenant.html",kicker:"British campaign",label:"Operation Covenant"},{href:"muscat-articles.html",kicker:"Postwar regulation",label:"Muscat Articles"},{href:"aden-south-arabian-staging-system.html",kicker:"Oceanic connection",label:"Aden and South Arabian Staging System"}],
    facts:[["Status","Strategic geography; no single formal organization"],["Northern hinge","Basra approaches · Faw · Umm Qasr"],["Protected hinge","Kuwait"],["Principal functions","Fuel · shipping · reinforcement · concessions"],["Electrical substitute","Nuclear power, partly"],["Liquid-fuel substitute","No comprehensive replacement"],["Decisive conflict","Kuwait War, 1974"]]
  }),

  "aden-south-arabian-staging-system": britishGulfArticle({
    title:"Aden and South Arabian staging system",category:"Military logistics",infoboxKicker:"Indian Ocean base system",
    lead:"The Aden and South Arabian staging system is Britain's directly held port-and-air base at Aden together with the surrounding protected principalities, treaty access, and movement routes that connect the Cape, Red Sea, Gulf, Ceylon, and wider Indian Ocean network. It replaces part of the function once distributed across Suez, Egypt, Cyprus, and Malta.",
    canon:"Direct British retention of Aden, protected or federated status for surrounding South Arabian principalities, the base's logistical role in defending the Gulf, its place in RAF staging, and its connection to the Cape and Indian Ocean systems are established. The federation's final membership and title, base boundaries, command structure, local rulers, units, airfields, facilities, and constitutional timetable remain open.",
    sections:[
      {id:"retention",title:"What Britain retains",html:`<p>The 1947 settlement leaves Aden under direct British control. Surrounding South Arabian principalities remain protectorates or members of a British-sponsored federation. This is not British rule over all Yemen, and northern Yemen remains outside the system.</p>`},
      {id:"route",title:"From Mediterranean station to oceanic hinge",html:`<p>Aden's importance grows because the secure British route now comes around the Cape. The base links African shipping and air movement to the Gulf, Ceylon, Indian Ocean Command, and the Commonwealth's Asian and Australasian systems.</p>`},
      {id:"staging",title:"RAF staging",html:`<p>Aircraft require fuel, maintenance, weather information, communications, rescue planning, and onward rights. Aden serves as a dependable British node within a chain whose precise station list remains open.</p>`},
      {id:"maritime",title:"Port and maritime support",html:`<p>Harbor services, fuel, repair, stores, communications, and local coastal security support convoy, patrol, reinforcement, and commercial traffic. Aden cannot recreate Suez's shorter route, but it gives Britain a sovereign base near the Gulf's western approach.</p>`},
      {id:"arabia",title:"The South Arabian political belt",html:`<p>Local rulers and administrations supply depth outside the directly held port while preserving distinct legal identities. Federation can coordinate defense and services without turning every principality into a colony or independent nation.</p>`},
      {id:"kuwait",title:"The 1974 warning",html:`<p>During the Kuwait crisis, British ministers argue that abandonment of Kuwait would shake Bahrain and the Trucial States and make Aden strategically indefensible. The base's value therefore depends on confidence along the whole protected chain.</p>`},
      {id:"contest",title:"Regional challenge",html:`<p>Saudi Arabia covets influence over parts of the South Arabian system, Arab nationalists reject direct British possession, and Italy controls the former Nile–Red Sea corridor. Aden remains useful precisely because its political environment is hostile and fragmented.</p>`},
      {id:"limits",title:"A base, not a recovered empire",html:`<p>Aden provides access and endurance. It does not restore British command of Egypt, Suez, Syria, or the Mediterranean, and it cannot make the longer Cape route economical in the same way as peacetime canal passage.</p>`}
    ],
    related:[{href:"gulf-eastern-mediterranean-triage.html",kicker:"Strategic hierarchy",label:"Gulf and Eastern Mediterranean Triage"},{href:"cape-route.html",kicker:"Western supply artery",label:"Cape Route"},{href:"bastion-india.html",kicker:"Eastern doctrine",label:"Bastion India"},{href:"british-gulf-protected-state-system.html",kicker:"Protected chain",label:"British Gulf Protected-State System"},{href:"suez-regime.html",kicker:"Route no longer controlled",label:"Suez Regime"}],
    facts:[["Core territory","Aden"],["Constitutional status","Direct British control"],["Surrounding system","South Arabian protectorates or federation"],["Northern Yemen","Outside British rule"],["Primary roles","Port · air staging · fuel · repair · communications"],["Strategic routes","Cape · Gulf · Red Sea · Indian Ocean"],["Detailed federation and command","Open"]]
  }),

  "british-gulf-legitimacy-crisis": britishGulfArticle({
    title:"British Gulf legitimacy crisis",category:"Political history",infoboxKicker:"Imperial sovereignty dispute",
    lead:"The British Gulf legitimacy crisis is the contradiction between Britain's ability to defend the Gulf protected states and the region's refusal to accept permanent British possession as lawful. London describes treaty protection under local rulers; Baghdad, Riyadh, and other Arab movements describe occupation, artificial fragmentation, or an inheritance withheld from Arab sovereignty.",
    canon:"The protected states' dependence on British external control, widespread rejection of permanent British title, competing Iraqi and Saudi claims, the local rulers' fear of those alternatives, and the Kuwait War's failure to settle legitimacy are established. Public opinion by emirate, organized opposition, constitutional reform, succession plans, and any final decolonization settlement remain open.",
    sections:[
      {id:"three",title:"Three descriptions of the same order",html:`<p>London calls Kuwait a voluntarily protected emirate. Baghdad calls it occupied Iraqi territory severed from Basra. Riyadh treats it as an Arab monarchy denied entry into its natural Arabian political family. Each description selects a real feature and turns it into an exclusive claim.</p>`},
      {id:"rulers",title:"The rulers' bargain",html:`<p>Emirs preserve internal authority, dynastic continuity, and protection from stronger neighbors. They also accept British control of defense and foreign relations. Fear makes the bargain durable without making it equal or universally popular.</p>`},
      {id:"iraq",title:"Baghdad's revolutionary claim",html:`<p>National Resurrection Iraq rejects both monarchies and colonial borders. Kuwait is presented as part of Basra, an oil territory withheld from the Arab nation, and the most visible surviving British military platform.</p>`},
      {id:"saudi",title:"Riyadh's monarchical claim",html:`<p>The Meccan Doctrine opposes European bases and seeks an eventual Arab and Islamic order while refusing Iraqi conquest. Saudi armed neutrality in 1974 helps Britain defeat Baghdad without recognizing Britain's permanent right to remain.</p>`},
      {id:"britain",title:"Britain's credibility argument",html:`<p>British ministers treat one abandoned guarantee as a system-wide collapse: Bahrain loses confidence, the Trucial States seek patrons, Aden becomes exposed, and Iran and Saudi Arabia discount every British commitment.</p>`},
      {id:"war",title:"Victory without vindication",html:`<p>Operation Covenant proves Britain can defend Kuwait. It does not prove that British protection is legitimate. Regional diplomacy distinguishes opposition to Iraqi annexation from approval of the protected-state system.</p>`},
      {id:"term",title:"The limited Muscat peace",html:`<p>The Muscat Articles recognize the Kuwait boundary and renunciation of force for twenty-five years. The limited term allows Iraq to accept defeat while withholding permanent British moral title; Britain preserves its bases but gains no final settlement.</p>`},
      {id:"survival",title:"Why the system survives",html:`<p>No claimant can remove Britain without altering the regional balance. Local crowns fear absorption, Saudi Arabia fears Baghdad, Iraq fears encirclement, and outside powers prefer bounded access to a war of succession. The result is stability grounded in mutual apprehension.</p>`}
    ],
    related:[{href:"british-gulf-protected-state-system.html",kicker:"Contested structure",label:"British Gulf Protected-State System"},{href:"arab-ideological-triangle.html",kicker:"Regional claimants",label:"Arab Ideological Triangle"},{href:"meccan-doctrine.html",kicker:"Saudi answer",label:"Meccan Doctrine"},{href:"iraq.html",kicker:"Iraqi answer",label:"National Resurrection Iraq"},{href:"muscat-articles.html",kicker:"Limited settlement",label:"Muscat Articles"}],
    facts:[["Period","1947 onward"],["British claim","Treaty protection under local rulers"],["Iraqi claim","Anti-colonial reunification with Basra"],["Saudi claim","Arab monarchical inheritance"],["Local foundation","Dynastic rule and fear of stronger neighbors"],["1974 outcome","British military victory; legitimacy unresolved"],["Final settlement","Open"]]
  })
});

const addBritishGulfRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  items.forEach(item => {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  });
};

addBritishGulfRelated("siege-commonwealth",[{href:"gulf-eastern-mediterranean-triage.html",kicker:"Middle Eastern doctrine",label:"Gulf and Eastern Mediterranean Triage"}]);
addBritishGulfRelated("middle-east",[{href:"gulf-eastern-mediterranean-triage.html",kicker:"British regional strategy",label:"Gulf and Eastern Mediterranean Triage"},{href:"british-gulf-legitimacy-crisis.html",kicker:"Contested imperial order",label:"British Gulf Legitimacy Crisis"}]);
addBritishGulfRelated("kuwait-war",[{href:"british-gulf-protected-state-system.html",kicker:"Territory defended",label:"British Gulf Protected-State System"},{href:"basra-gulf-oil-corridor.html",kicker:"Strategic geography",label:"Basra–Gulf Oil Corridor"}]);
