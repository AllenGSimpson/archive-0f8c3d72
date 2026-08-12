window.deepArticles = window.deepArticles || {};

const balochWarMakingSources = [
  {href:"../transcript.md",label:"Master Transcript — western Indian wars, Las Bela campaigns, and Baloch–Afghan raids"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Baloch successor order, mounted warfare, and Iranian support"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — western Indian consolidation, 1957–1984"},
  {href:"https://balochistan.gov.pk/about/history/",label:"Government of Balochistan — historical princely states and administrative divisions"},
  {href:"https://bhc.gov.pk/district-judiciary/lasbella/introduction/history",label:"High Court of Balochistan — historical geography and government of Las Bela"},
  {href:"https://www.qdl.qa/en/historical-profile-british-baluchistan-and-makran",label:"Qatar Digital Library and British Library — British Baluchistan and Makran historical profile"}
];

const balochWarMakingCards = [
  {href:"first-las-bela-war.html",kicker:"War for the eastern coast, 1960–63",label:"First Las Bela War"},
  {href:"baloch-afghan-frontier-raids.html",kicker:"Punitive campaigns, 1950s–60s",label:"Baloch–Afghan Frontier Raids"},
  {href:"armed-forces-of-kalat.html",kicker:"Princely and confederal military",label:"Armed Forces of Kalat"}
];

const balochCampaignCycleDiagram = {
  src:"assets/diagrams/baloch-campaign-cycle-1957-1969.svg",
  alt:"Diagram showing Pakistan consolidating Quetta, Baloch forces raiding toward Kandahar and Farah, and Kalat seizing Las Bela between 1957 and 1969",
  caption:"The western campaign cycle rewarded limited objectives: Pakistan secured the administrative corridor, Balochistan demonstrated reach without annexation, and Kalat converted a coastal conquest into durable power."
};

const balochWarMakingArticle = config => ({
  category:"Conflicts",
  eyebrow:"Baloch wars · western Indian consolidation",
  landscape:balochCampaignCycleDiagram,
  ...config,
  related:[...(config.related || []),...balochWarMakingCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:balochWarMakingSources,
  categories:config.categories || ["Balochistan","Western Indian Wars","Indian successor states"]
});

Object.assign(window.deepArticles,{
  "first-las-bela-war":balochWarMakingArticle({
    slug:"first-las-bela-war",title:"First Las Bela War",infoboxKicker:"Kalat–Balochistan conflict",infoboxTitle:"First Las Bela War",
    lead:"The First Las Bela War was the 1960–63 conflict in which Kalat seized Las Bela from the Iranian-backed Baloch Confederated State and gained a durable outlet to the Arabian Sea. Kalat struck while the Gwadar government was committed against Afghanistan and Pakistan was consolidating Quetta. Baloch counteroffensives from Makran and Kharan failed to recover the principality; Iranian support prevented a wider defeat but did not reverse the conquest.",
    canon:"The 1960–63 period, Kalat's conquest of Las Bela, Baloch overextension toward Afghanistan, Makran and Kharan counteroffensives, limited Iranian intervention, survival of the Jam's court, and Kalat's resulting maritime outlet are established. The formal declarations, commanders, order of battle, battles, front lines, losses, armistice, territorial adjustments, and personal role of the Jam remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p><a href='las-bela.html'>Las Bela</a> had joined Makran and Kharan in rejecting Kalat's suzerainty and helped found the <a href='baloch-confederated-state.html'>Baloch Confederated State</a>. Kalat continued to regard the principality as a dependency and required its coast if the landlocked khanate was to import weapons without complete reliance on Sindh.</p>"},
      {id:"opportunity",title:"Kalat's opportunity",html:"<p>The Gwadar government dispersed forces toward Chagai and the Afghan frontier while defending against Pakistani pressure around Quetta. Kalat waited until those commitments reduced the confederation's ability to reinforce Las Bela, then combined local political contacts with a military advance from the interior.</p>"},
      {id:"forces",title:"Forces and terrain",html:"<p>The <a href='armed-forces-of-kalat.html'>Kalat force</a> joined princely troops, local levies, mounted rifles, guides, and a small motorized and artillery component. Balochistan possessed better access to Iranian matériel but operated across longer routes. Wells, passes, coastal tracks, and the loyalties of local officials mattered more than a continuous front.</p>"},
      {id:"conquest",title:"Conquest of Las Bela",html:"<p>Kalat secured the principality's core and the route to the coast between 1960 and 1963. The archive has not fixed whether Bela fell through assault, negotiated entry, court accommodation, or a sequence of district capitulations. The <a href='jams-of-las-bela.html'>Jam's court</a> survived beneath Kalat's restored paramountcy.</p>"},
      {id:"counteroffensives",title:"Baloch counteroffensives",html:"<p>Forces from <a href='makran.html'>Makran</a> and <a href='kharan.html'>Kharan</a> attempted several counteroffensives. They could threaten western districts and destroy exposed Kalat formations but could not sustain a reconquest while the confederation also defended Chagai, Gwadar, and routes toward Iran.</p>"},
      {id:"iran",title:"Iranian intervention",html:"<p>Iran supplied fuel, weapons, intelligence, advisers, and enough political support to deter an attack on Makran or Gwadar. Tehran did not deploy the force required to recover Las Bela. Preserving its client state took priority over an indefinite campaign for the eastern coast.</p>"},
      {id:"settlement",title:"Settlement",html:"<p>The fighting ended short of a comprehensive Baloch peace. Kalat retained most or all of Las Bela's core and its maritime outlet. Balochistan kept Makran, Kharan, Chagai, and Gwadar and continued to claim the lost principality. Exact armistice lines and guarantees remain open.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Las Bela made Kalat commercially and strategically durable. Its loss became the confederation's principal national grievance and produced the <a href='second-las-bela-war.html'>Second Las Bela War</a> of 1976–79. Failure to reverse the conquest later discredited the Gwadar government during the centralization crisis.</p>"}
    ],
    related:[{href:"las-bela.html",kicker:"Contested principality",label:"Las Bela"},{href:"second-las-bela-war.html",kicker:"Later recovery attempt",label:"Second Las Bela War"},{href:"ghulam-qadir-khan.html",kicker:"Contemporary Jam",label:"Ghulam Qadir Khan"}],
    facts:[["Period","1960–1963"],["Location","Las Bela and eastern Makran approaches"],["Attacker","Kalat"],["Defender","Baloch Confederated State"],["Baloch patron","Iran"],["Result","Kalat conquest of Las Bela"],["Strategic consequence","Kalat gains an Arabian Sea outlet"],["Armistice and order of battle","Open"]]
  }),

  "baloch-afghan-frontier-raids":balochWarMakingArticle({
    slug:"baloch-afghan-frontier-raids",title:"Baloch–Afghan Frontier Raids",infoboxKicker:"Limited frontier campaigns",infoboxTitle:"Baloch–Afghan Frontier Raids",
    lead:"The Baloch–Afghan Frontier Raids were limited punitive campaigns conducted from Chagai and adjoining routes toward the Kandahar approaches and, with Iranian logistical support, occasionally toward Farah. The Gwadar government used them to destroy depots, seize prisoners, disrupt roads, and demonstrate that Afghanistan could not wage war entirely on Baloch territory. It did not attempt permanent occupation of major Afghan cities.",
    canon:"Baloch punitive raids toward Kandahar and occasional Iranian-supported operations toward Farah, their limited objectives, dependence on Chagai and Iranian staging, rapid withdrawal, and vulnerability to Kalat attacks are established. Exact dates, operation names, commanders, strengths, routes, targets, prisoners, losses, and diplomatic settlements remain open.",
    sections:[
      {id:"background",title:"Frontier dispute",html:"<p>Afghanistan occupied Chagai and Quetta–Pishin during the western collapse. Pakistan later consolidated the Quetta corridor while Chagai entered the Baloch Confederated State. Kabul and Gwadar nevertheless retained conflicting frontier claims, clients, and security interests.</p>"},
      {id:"purpose",title:"Purpose",html:"<p>The raids were demonstrations and spoiling operations rather than campaigns of annexation. Their objectives included destroying supplies, interrupting roads, taking prisoners for exchange, gathering intelligence, and forcing Afghanistan to disperse troops north of the border.</p>"},
      {id:"routes",title:"Routes and staging",html:"<p>Most forces moved from <a href='chagai.html'>Chagai</a> toward the Kandahar approaches. Operations toward Farah required staging through or beside Iranian territory, Iranian fuel and intelligence, and careful withdrawal before Afghanistan concentrated superior forces.</p>"},
      {id:"forces",title:"Forces",html:"<p>Raiding columns combined mounted rifles, trucks, reconnaissance parties, engineers, radios, mortars, and limited armored vehicles. Local guides and control of wells governed movement. Iranian advisers could improve planning without turning the columns into Iranian regular formations.</p>"},
      {id:"kandahar",title:"Kandahar operations",html:"<p>Columns temporarily reached roads and depots on the Kandahar approaches when Afghan units were committed eastward or frontier defenses were thin. They did not possess the supply, infantry mass, or political purpose required to hold Kandahar.</p>"},
      {id:"farah",title:"Farah operations",html:"<p>Raids toward Farah were rarer and more dependent on Iran. Their political effect exceeded their territorial effect: a Baloch flag over a temporary objective allowed Gwadar to claim reach while Tehran signaled that Afghan pressure could be answered indirectly.</p>"},
      {id:"kalat",title:"Kalat's countermove",html:"<p>Kalat attacked Las Bela or eastern Makran whenever the confederated army became overextended northward. This recurring countermove limited the size and duration of every Afghan raid and contributed directly to the conditions of the <a href='first-las-bela-war.html'>First Las Bela War</a>.</p>"},
      {id:"effect",title:"Military and political effect",html:"<p>The raids imposed costs and preserved Baloch credibility but did not settle the frontier. Afghanistan eventually redirected its principal influence toward Peshawar and Waziristan. Pakistan secured Quetta, while Balochistan held Chagai. Exact ceasefires and prisoner exchanges remain open.</p>"}
    ],
    related:[{href:"afghanistan.html",kicker:"Target state",label:"Afghanistan"},{href:"chagai.html",kicker:"Principal staging territory",label:"Chagai"},{href:"iranian-military-mission-balochistan.html",kicker:"External assistance",label:"Iranian Military Mission"}],
    facts:[["Period","1950s–1960s"],["Theater","Chagai–Kandahar and Iranian–Farah routes"],["Raiding state","Baloch Confederated State"],["Principal opponent","Afghanistan"],["External support","Iran"],["Method","Limited mounted and motorized columns"],["Objective","Punishment, disruption, prisoners, and demonstration"],["Permanent Afghan occupation","None"]]
  }),

  "armed-forces-of-kalat":balochWarMakingArticle({
    slug:"armed-forces-of-kalat",title:"Armed Forces of Kalat",category:"Military",eyebrow:"Kalat military · western Indian successor order",infoboxKicker:"Princely and confederal armed forces",infoboxTitle:"Armed Forces of Kalat",
    lead:"The Armed Forces of Kalat are the military establishment of the Khanate of Kalat and, after 1984, of the enlarged Kalat-led Baloch order. They developed from princely troops, local levies, mounted rifles, household retainers, and small artillery and motor pools. Repeated war produced a mixed force less standardized than the Iranian-supported Baloch army but more experienced in local routes, political negotiation, and the conversion of defections into operational gains.",
    canon:"Kalat's princely and levy origins, mounted-rifle strength, limited imported mechanization, diverse supply sources, experience in the Las Bela wars, political warfare, 1984 victory, and postwar incorporation of former confederal forces are established. The formal service name, ministries, commanders, ranks, units, strength, equipment inventory, air or naval components, doctrine manuals, uniforms, and post-1984 command settlement remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The force emerged from the Khan's household establishment, district and tribal levies, garrisons, retainers of subordinate chiefs, and inherited colonial personnel. Its authority was personal and territorial before it became national. Mobilization therefore depended on bargaining with local rulers as well as orders from Kalat.</p>"},
      {id:"organization",title:"Organization",html:"<p>A small regular core provided headquarters, guards, artillery, communications, transport, and workshops. Mounted rifles and local contingents supplied most operational reach. The archive does not establish a fixed division structure or continuous central control over every formation.</p>"},
      {id:"mounted",title:"Mounted forces",html:"<p>Mounted rifles moved across country where roads, fuel, and workshops could not sustain trucks. They scouted, screened, raided, and dismounted for combat with automatic weapons, mortars, and antitank arms. Remount depots, purchasing fairs, veterinarians, and rural horseholders formed an essential military economy.</p>"},
      {id:"mechanization",title:"Mechanization",html:"<p>Kalat acquired tanks, carriers, armored cars, trucks, artillery, and self-propelled weapons in small and uneven lots. Equipment came through Sindhi brokers, Hyderabad, Russian-derived design networks, and secondhand markets. Mixed origins complicated ammunition, training, spares, and repair.</p>"},
      {id:"las-bela",title:"Las Bela wars",html:"<p>In the <a href='first-las-bela-war.html'>First Las Bela War</a>, local knowledge and Baloch overextension allowed Kalat to gain the coast. During the 1976–79 second war, the army combined mounted mobility, imported armor, mines, guides, and quiet Sindhi support to deny Balochistan a complete reconquest.</p>"},
      {id:"political",title:"Political warfare",html:"<p>Kalat's commanders treated surrender terms, dynastic recognition, local land, and separate administration as operational instruments. Units could be neutralized through guarantees rather than destruction. This method became decisive when the Gwadar confederation fractured after 1981.</p>"},
      {id:"1984",title:"Third Balochistan War",html:"<p>The army entered the final war with inferior standardization but greater combat experience and the advantage of fighting near familiar routes. Defections, pressure from Las Bela, and separate agreements with component authorities allowed Kalat to collapse the common defense and take Gwadar in 1984.</p>"},
      {id:"postwar",title:"Postwar forces",html:"<p>Former confederal regulars, Makrani and Kharani units, Chagai frontier forces, and Gwadar security personnel entered the enlarged system under different terms. Integrating Iranian equipment, officers, depots, and loyalties remained harder than the conquest. The final joint command remains open.</p>"}
    ],
    related:[{href:"kalat.html",kicker:"Parent state",label:"Kalat"},{href:"modern-mounted-warfare-western-india.html",kicker:"Characteristic arm",label:"Modern Mounted Warfare"},{href:"armed-forces-of-baloch-confederated-state.html",kicker:"Former rival force",label:"Baloch Confederated Armed Forces"}],
    facts:[["Type","Princely and later confederal armed forces"],["Headquarters","Kalat"],["Supreme authority","Khan of Kalat"],["Principal components","Regular core, mounted rifles, levies, and local contingents"],["Mechanization","Small mixed imported fleet"],["Major campaigns","Three Baloch wars"],["Decisive victory","Third Balochistan War, 1984"],["Strength and unit structure","Open"]]
  })
});

const addBalochWarMakingLinks = (slug,links=balochWarMakingCards) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const lasBelaWarParent=window.deepArticles["las-bela"];
if(lasBelaWarParent){
  const conquest=lasBelaWarParent.sections?.find(section=>section.id==="conquest");
  if(conquest) conquest.html=conquest.html.replace("during the 1960–63 war","during the <a href='first-las-bela-war.html'>First Las Bela War of 1960–63</a>");
  addBalochWarMakingLinks("las-bela",[{href:"first-las-bela-war.html",kicker:"Kalat conquest, 1960–63",label:"First Las Bela War"}]);
}

const kalatWarParent=window.deepArticles["kalat"];
if(kalatWarParent){
  const military=kalatWarParent.sections?.find(section=>section.id==="military");
  if(military) military.html=military.html.replace("Kalat's army","The <a href='armed-forces-of-kalat.html'>Kalat army</a>");
  addBalochWarMakingLinks("kalat",[{href:"armed-forces-of-kalat.html",kicker:"Military establishment",label:"Armed Forces of Kalat"},{href:"first-las-bela-war.html",kicker:"Coastal conquest",label:"First Las Bela War"}]);
}

addBalochWarMakingLinks("first-baloch-wars");
addBalochWarMakingLinks("second-las-bela-war");
addBalochWarMakingLinks("third-balochistan-war");
addBalochWarMakingLinks("modern-mounted-warfare-western-india",[{href:"armed-forces-of-kalat.html",kicker:"Kalat example",label:"Armed Forces of Kalat"}]);
addBalochWarMakingLinks("baloch-confederated-state",[{href:"baloch-afghan-frontier-raids.html",kicker:"Northern campaigns",label:"Baloch–Afghan Frontier Raids"},{href:"first-las-bela-war.html",kicker:"Loss of the eastern coast",label:"First Las Bela War"}]);
