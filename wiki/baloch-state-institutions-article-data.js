window.deepArticles = window.deepArticles || {};

const balochInstitutionSources = [
  {href:"../transcript.md",label:"Master Transcript — western Indian frontier and Baloch state formation, Turns 724–729"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Indian successor states and western frontier"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Western Succession Crisis and Balochistan wars"},
  {href:"https://www.iranicaonline.org/articles/baluchistan-index/baluchistan-i/",label:"Encyclopaedia Iranica — Baluchistan: geography, history, and ethnography"},
  {href:"https://searcharchives.bl.uk/catalog/038-000227824",label:"British Library Archives — Muscat possession and transfer of Gwadar"},
  {href:"https://gda.gov.pk/history-of-gwadar",label:"Gwadar Development Authority — history of Gwadar"}
];

const balochInstitutionCards = [
  {href:"ahmad-yar-khan.html",kicker:"Founding ruler of independent Kalat",label:"Ahmad Yar Khan"},
  {href:"gwadar-transfer.html",kicker:"Iranian-financed territorial settlement",label:"Gwadar Transfer"},
  {href:"government-of-baloch-confederated-state.html",kicker:"Confederal government at Gwadar",label:"Government of the Baloch Confederated State"},
  {href:"armed-forces-of-baloch-confederated-state.html",kicker:"Common army and member forces",label:"Armed Forces of the Baloch Confederated State"}
];

const balochInstitutionArticle = config => ({
  category:"Western India",
  eyebrow:"Baloch state formation · western Indian successor order",
  landscape:{src:"assets/diagrams/baloch-confederated-state-system.svg",alt:"Diagram of the Baloch Confederated State's component rulers, common government, armed forces, Iranian patronage, and rivalry with Kalat",caption:"The Gwadar government joined common functions to princely autonomy; Iranian support strengthened the state while increasing its political dependence."},
  ...config,
  related:[...(config.related || []),...balochInstitutionCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:balochInstitutionSources,
  categories:config.categories || ["Balochistan","Indian successor states","Western Indian Wars"]
});

Object.assign(window.deepArticles,{
  "ahmad-yar-khan":balochInstitutionArticle({
    slug:"ahmad-yar-khan",title:"Ahmad Yar Khan",category:"People",eyebrow:"Khan of Kalat · Baloch state formation",infoboxKicker:"Khan of Kalat",infoboxTitle:"Mir Ahmad Yar Khan Ahmadzai",
    lead:"Mir Ahmad Yar Khan Ahmadzai is the Khan of Kalat who carries the historic khanate through the end of British paramountcy and establishes it as a sovereign state during the Western Succession Crisis. He bases Kalat's claim upon the older authority of the Ahmadzai khans over Sarawan, Jhalawan, Kachhi, and the client principalities, bringing him into immediate conflict with the rulers who form the Baloch Confederated State at Gwadar.",
    canon:"Ahmad Yar Khan's 1933 accession, position as Khan when British authority disappears, declaration of Kalat's independence, territorial claims, and founding role in the Kalat–Balochistan conflict are established or historical foundations carried forward. His precise title after independence, ministries, advisers, wartime command, later reign, date of death, and succession in this timeline remain open.",
    sections:[
      {id:"early",title:"Early life and accession",html:"<p>Ahmad Yar Khan was born in 1902 into the Ahmadzai house of Kalat. He succeeded to the khanship in 1933 and ruled for the remainder of the British period. The court he inherited combined dynastic authority, tribal obligations, landed rights, and treaties with the British Indian government.</p>"},
      {id:"british",title:"Kalat under British paramountcy",html:"<p>Kalat remained juridically distinct from the directly administered Chief Commissioner's Province of Baluchistan. Its core comprised Sarawan, Jhalawan, and Kachhi, while Makran, Kharan, and Las Bela occupied disputed positions as client principalities. British agents mediated among rulers, financed security, and limited the khanate's independent foreign action without turning every territory into one province.</p>"},
      {id:"independence",title:"Declaration of independence",html:"<p>When British paramountcy collapses, Ahmad Yar Khan declares <a href='kalat.html'>Kalat</a> sovereign rather than acceding to the Pakistan Emergency Government. The khanate preserves a court, military households, revenue claims, local officers, and an intelligible territorial core at a moment when the former province fragments among several armed governments.</p>"},
      {id:"claims",title:"Claim to Baloch paramountcy",html:"<p>Ahmad Yar Khan presents Makran, Kharan, and Las Bela as subordinate states that have broken lawful relations with the historic khanate. The rival <a href='government-of-baloch-confederated-state.html'>Gwadar government</a> instead treats their union as a modern confederated national act. Their dispute concerns the source of Baloch unity as much as the possession of roads, ports, and districts.</p>"},
      {id:"war",title:"Western Succession Crisis",html:"<p>Kalat enters the <a href='western-succession-crisis.html'>Western Succession Crisis</a> without reliable access to the sea. Makran, Kharan, and Las Bela reject the khan's claim, Iran supports their coalition, and the <a href='gwadar-transfer.html'>Gwadar Transfer</a> gives the new state a capital and foreign supply route. Ahmad Yar Khan's government consequently treats access through Las Bela and the recovery of former dependencies as permanent strategic objectives.</p>"},
      {id:"government",title:"Dynastic government",html:"<p>The khan governs through the court, customary relationships, landed obligations, subordinate officials, and bargains with tribal and territorial authorities. That structure cannot mobilize resources as uniformly as a centralized state, but it allows Kalat to offer rulers and notables continued status in exchange for allegiance.</p><p>Cabinet titles, representative bodies, and the formal division between household and state offices remain unresolved.</p>"},
      {id:"legacy",title:"Political legacy",html:"<p>Ahmad Yar Khan gives independent Kalat its founding constitutional argument: the khanate is not merely one successor district but the historic center of a wider Baloch order. Later governments use that claim to justify the conquest and negotiated incorporation of the rival confederation.</p>"},
      {id:"succession",title:"Later reign and succession",html:"<p>The present archive does not establish Ahmad Yar Khan's death or succession in this timeline. The campaigns of 1981–84 therefore belong to the Kalat state and ruling house unless later material identifies the reigning khan; they should not be attributed personally to Ahmad Yar Khan without further canon.</p>"}
    ],
    related:[{href:"kalat.html",kicker:"State founded at independence",label:"Kalat"},{href:"western-succession-crisis.html",kicker:"Founding conflict",label:"Western Succession Crisis"}],
    facts:[["Full name","Mir Ahmad Yar Khan Ahmadzai"],["Born","1902"],["House","Ahmadzai"],["Accession","1933"],["Office","Khan of Kalat"],["Independent state","Kalat"],["Principal rival","Baloch Confederated State"],["Later reign and succession","Open"]]
  }),

  "gwadar-transfer":balochInstitutionArticle({
    slug:"gwadar-transfer",title:"Gwadar Transfer",category:"Treaties",eyebrow:"Territorial settlement · late 1940s or early 1950s",infoboxKicker:"Iran–Oman–Balochistan arrangement",infoboxTitle:"Gwadar Transfer",
    lead:"The Gwadar Transfer is the Iranian-financed agreement by which Oman relinquishes the Gwadar enclave and the territory enters the Baloch Confederated State. It gives the coastal confederation a capital and an independent maritime outlet while reserving Iranian port access, military and commercial privileges, restrictions upon foreign basing, and a repayment interest in customs or concessions.",
    canon:"Omani possession of Gwadar at the end of British rule, an Iranian-financed or Iranian-negotiated transfer to the Baloch Confederated State, the enclave's role as capital, Iranian access and privileges, foreign-basing limits, and customs or concession repayment are established. Exact date, instrument title, price, signatories, territorial schedule, nationality clauses, and final wording remain open.",
    sections:[
      {id:"omani",title:"Omani possession",html:"<p>Gwadar entered the crisis as a possession of the Sultan of Muscat and Oman rather than as part of Makran or British India. That separate legal history prevents the Baloch rulers from acquiring the port automatically when paramountcy ends.</p>"},
      {id:"need",title:"The confederation's need for a capital",html:"<p>Makran, Kharan, Las Bela, and associated territories require a common seat not wholly identified with one interior court. Gwadar offers a port, customs revenue, communications, and a visible national center outside Kalat's historic claim. It also allows the coalition to receive matériel without passing entirely through Karachi.</p>"},
      {id:"negotiation",title:"Iranian finance and negotiation",html:"<p><a href='iran.html'>Iran</a> purchases, finances, or otherwise negotiates the enclave's release from Oman and arranges its transfer to the new Baloch state. Tehran's money and diplomatic access make the settlement possible; the precise legal sequence and whether Iran briefly holds title are not established.</p>"},
      {id:"terms",title:"Strategic terms",html:"<p>The settlement preserves Iranian naval and commercial access, places limits upon foreign bases, and requires repayment through customs receipts, mineral concessions, or a comparable revenue claim. These conditions make Gwadar useful to the confederation while displaying its dependence upon Tehran from the beginning.</p>"},
      {id:"government",title:"Gwadar as seat of government",html:"<p>The transferred enclave becomes the seat of the <a href='government-of-baloch-confederated-state.html'>confederal government</a>, national customs administration, foreign missions, and the principal common port. Makran's proximity gives its rulers unusual influence and later encourages Kharan and Chagai to describe centralization as Makrani domination.</p>"},
      {id:"war",title:"Military importance",html:"<p>The port sustains the <a href='armed-forces-of-baloch-confederated-state.html'>common armed forces</a> with fuel, vehicles, advisers, spares, and communications equipment. Iran gains a protected outlet east of its own frontier, while the prohibition upon rival bases restricts the confederation's ability to exchange patrons.</p>"},
      {id:"dissolution",title:"Dissolution of the confederation",html:"<p>The Gwadar government collapses during the <a href='third-balochistan-war.html'>Third Balochistan War</a>. Kalat absorbs the enclave and later preserves a special commercial charter and Iranian access arrangements rather than treating the port as an ordinary conquered district.</p>"},
      {id:"open",title:"Unresolved terms",html:"<p>The archive fixes the transaction's function but not its documentary form. The date within the late 1940s or early 1950s, price, signatories, boundary survey, resident nationality, Omani property settlement, concession duration, and exact repayment schedule remain open for later canon.</p>"}
    ],
    related:[{href:"baloch-confederated-state.html",kicker:"Receiving state",label:"Baloch Confederated State"},{href:"iran.html",kicker:"Financier and guarantor",label:"Iran"},{href:"western-succession-crisis.html",kicker:"Founding crisis",label:"Western Succession Crisis"}],
    facts:[["Period","Late 1940s or early 1950s"],["Transferor","Sultanate of Muscat and Oman"],["Recipient","Baloch Confederated State"],["Financier and negotiator","Iran"],["Territory","Gwadar enclave"],["Principal result","Confederal capital and port"],["Reserved interest","Iranian access and privileges"],["Exact date, price, and signatories","Open"]]
  }),

  "government-of-baloch-confederated-state":balochInstitutionArticle({
    slug:"government-of-baloch-confederated-state",title:"Government of the Baloch Confederated State",category:"Government",eyebrow:"Confederal government · Gwadar · c. 1948–1984",infoboxKicker:"Government of a former state",infoboxTitle:"Government of the Baloch Confederated State",
    lead:"The government of the Baloch Confederated State was the common authority created by Makran, Kharan, Las Bela, and associated territories after the breaking of the Raj. Based at Gwadar, it controlled foreign relations, the national army, customs, common finance, the Iranian security treaty, major ports, and concessions while leaving land, customary law, local police, dynastic courts, taxation arrangements, and much ordinary administration to component rulers.",
    canon:"A Gwadar-based confederal government, its common and retained functions, Iranian security relationship, bounded nationalism, internal dynastic autonomy, early claim to Las Bela, later authority in Makran, Kharan, Chagai, and Gwadar, centralization crisis, and 1984 collapse are established. Formal constitutional title, offices, executive, legislature or council, rulers, ministries, suffrage, revenue shares, and flag remain open.",
    sections:[
      {id:"foundation",title:"Foundation",html:"<p>The government forms because the coastal and western rulers reject <a href='ahmad-yar-khan.html'>Ahmad Yar Khan's</a> claim that their states must return beneath Kalat. Their coalition is a Baloch national project, but it is organized through princely agreements rather than a unitary republic.</p>"},
      {id:"seat",title:"Seat at Gwadar",html:"<p>The <a href='gwadar-transfer.html'>transfer of Gwadar</a> supplies a neutral-looking capital, customs port, foreign entrance, and common source of revenue. Makran's proximity to the enclave gives its court and officials greater access to central institutions than the more distant rulers possess.</p>"},
      {id:"common",title:"Common powers",html:"<p>The common government conducts external diplomacy, administers the small national army, collects or supervises customs, manages common currency or banking, executes the Iranian security relationship, and regulates major ports and concessions. These functions concentrate the resources most necessary for recognition and war.</p>"},
      {id:"member",title:"Powers of component rulers",html:"<p>Component rulers retain land, customary law, local police, taxation arrangements, dynastic courts, and much ordinary administration. The resulting state is more than an alliance but less than one administrative system. A decision agreed at Gwadar can still depend upon local officers, treasuries, and armed households for enforcement.</p>"},
      {id:"iran",title:"Iranian security relationship",html:"<p>The government recognizes the Iranian frontier, renounces claims upon Iranian Sistan and Baluchestan, excludes anti-Iranian cross-border organizations, accepts advisers and intelligence cooperation, and coordinates important foreign policy with Tehran. In return it receives recognition, finance, weapons, fuel, training, and protected access.</p>"},
      {id:"territory",title:"Territorial change",html:"<p>Las Bela belongs to the founding coalition but falls to <a href='kalat.html'>Kalat</a> during the later wars. Chagai passes into the confederal system as Afghan power recedes. By 1969 the government rules Makran, Kharan, Chagai, and Gwadar while maintaining a national claim to Las Bela.</p>"},
      {id:"crisis",title:"Centralization crisis",html:"<p>In the early 1980s the Gwadar government attempts to centralize the army, customs, and distribution of Iranian aid. Kharan and Chagai see the program as Makrani domination, while nationalists condemn a court coalition that has accepted Iranian limits without recovering Las Bela.</p>"},
      {id:"collapse",title:"Collapse and succession",html:"<p>Kalat offers hereditary authority, customary law, land rights, representation in a Baloch grand council, and a special charter for Gwadar. Defection and neutrality deprive the central government of a common defense during the <a href='third-balochistan-war.html'>Third Balochistan War</a>. It dissolves in 1984 through conquest and negotiated accession.</p>"}
    ],
    related:[{href:"baloch-confederated-state.html",kicker:"State overview",label:"Baloch Confederated State"},{href:"third-balochistan-war.html",kicker:"Dissolution",label:"Third Balochistan War"}],
    facts:[["Period","c. 1948–1984"],["Seat","Gwadar"],["Form","Confederated princely government"],["Principal members","Makran, Kharan, and initially Las Bela"],["Later administered territory","Chagai"],["External patron","Iran"],["Common functions","Diplomacy, defense, customs, finance, ports, and concessions"],["Formal constitution and offices","Open"]]
  }),

  "armed-forces-of-baloch-confederated-state":balochInstitutionArticle({
    slug:"armed-forces-of-baloch-confederated-state",title:"Armed Forces of the Baloch Confederated State",category:"Military",eyebrow:"Confederal armed forces · c. 1948–1984",infoboxKicker:"Armed forces of a former state",infoboxTitle:"Baloch Confederated Armed Forces",
    lead:"The armed forces of the Baloch Confederated State combined a small national army at the disposal of the Gwadar government with local forces owing practical allegiance to component rulers. Iranian equipment, advisers, intelligence, fuel, roads, and maintenance made parts of the force more regular and technically coherent than neighboring armies, but the confederal command never acquired reliable authority over every contingent.",
    canon:"A small national army, retained local police and armed establishments, Iranian advisers and matériel, warfare against Kalat and Afghanistan, gradual mechanization, comparatively strong equipment in some sectors, centralization disputes, defections, command failure, and dissolution in 1984 are established. Official service title, branches, commanders, ranks, uniforms, strength, order of battle, model lists, bases, casualties, and exact Iranian mission remain open.",
    sections:[
      {id:"foundation",title:"Formation",html:"<p>The confederation requires a common force because no member can resist Kalat, Afghanistan, or the Pakistan Emergency Government alone. The first army grows from princely troops, local levies, port security, mounted forces, and personnel trained through Iranian assistance.</p>"},
      {id:"command",title:"Confederal command",html:"<p>The <a href='government-of-baloch-confederated-state.html'>Gwadar government</a> controls the small national army and attempts to coordinate member forces. Component rulers retain police, armed households, local appointments, and practical leverage over mobilization. Orders therefore pass through both national and dynastic chains.</p>"},
      {id:"iran",title:"Iranian assistance",html:"<p>Iran supplies or finances tanks, armored cars, trucks, artillery, radios, fuel, advisers, intelligence cooperation, and maintenance personnel. Roads and access through <a href='gwadar-transfer.html'>Gwadar</a> support the system. Tehran's aid favors regular units able to account for equipment and follow the bounded security policy.</p>"},
      {id:"frontier",title:"Frontier warfare",html:"<p>Early forces fight <a href='kalat.html'>Kalat</a> over Las Bela, Makran approaches, passes, and wells while also raiding toward Afghan-held Chagai and Quetta. Long distances, poor roads, dispersed settlements, and competing local authorities make seizure easier than durable occupation.</p>"},
      {id:"mechanization",title:"Mechanization",html:"<p>By the 1970s the force can assemble armored and motorized groups more coherent than the improvised columns of the first wars. Imported vehicles remain dependent upon Iranian spares, technicians, fuel, and communications. Better equipment does not erase the political division between common and member formations.</p>"},
      {id:"las-bela",title:"Second Las Bela War",html:"<p>During the <a href='second-las-bela-war.html'>Second Las Bela War</a>, Balochistan demonstrates improved regular capability and recovers limited ground but fails to retake the core of Las Bela. Kalat's local knowledge, combat experience, and quiet Sindhi support preserve its maritime route.</p>"},
      {id:"centralization",title:"Army centralization dispute",html:"<p>The Gwadar government's attempt to centralize command and Iranian aid in the early 1980s threatens the patronage and autonomy of Kharan and Chagai. Officers and rulers dispute appointments, stores, revenue, and responsibility for another war. National units become associated with Makrani and Iranian influence.</p>"},
      {id:"defeat",title:"Defeat and dissolution",html:"<p>In the <a href='third-balochistan-war.html'>Third Balochistan War</a>, some sectors retain better equipment than Kalat while units defect, become neutral, or defend only local territory. Iran refuses a major regular intervention. The collapse of common command destroys the armed forces as a national institution in 1984; surviving formations enter Kalat's enlarged order under terms not yet fixed.</p>"}
    ],
    related:[{href:"baloch-confederated-state.html",kicker:"Parent state",label:"Baloch Confederated State"},{href:"second-las-bela-war.html",kicker:"Major offensive",label:"Second Las Bela War"},{href:"third-balochistan-war.html",kicker:"Final war",label:"Third Balochistan War"}],
    facts:[["Period","c. 1948–1984"],["Character","Small national army and component forces"],["Headquarters","Gwadar government"],["Principal patron","Iran"],["Principal opponents","Kalat and Afghanistan"],["Major imported systems","Armor, vehicles, artillery, radios, and logistics"],["Principal weakness","Divided command and dynastic allegiance"],["Strength, commanders, and order of battle","Open"]]
  })
});

const appendUniqueBalochLinks = (slug,links) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const balochState=window.deepArticles["baloch-confederated-state"];
if(balochState){
  balochState.landscape={src:"assets/diagrams/baloch-confederated-state-system.svg",alt:"Diagram of the Baloch Confederated State's component rulers, common government, armed forces, Iranian patronage, and rivalry with Kalat",caption:"Common institutions depended upon component rulers and Iranian support; the same structure later fractured under centralization and war."};
  const foundation=balochState.sections?.find(section=>section.id==="foundation");
  if(foundation) foundation.html="<p>The state emerges from the western collapse as a coalition of Makran, Kharan, Chagai, <a href='gwadar-transfer.html'>Gwadar</a>, displaced Las Bela claims, and Iranian strategic interests. It is not one centralized ethnic republic; component rulers accept common defense because each fears <a href='kalat.html'>Kalat</a> more than domination by the <a href='government-of-baloch-confederated-state.html'>Gwadar government</a>.</p><p>Iran supplies recognition, credit, equipment, advisers, and commercial access. Gwadar's port makes it the political center and principal route by which the confederation can operate independently of Karachi.</p>";
  const iran=balochState.sections?.find(section=>section.id==="iran");
  if(iran) iran.html=iran.html.replace("Iran finances or supplies","Iran finances or supplies the <a href='armed-forces-of-baloch-confederated-state.html'>confederated armed forces</a> with");
  appendUniqueBalochLinks("baloch-confederated-state",balochInstitutionCards);
}

const kalatState=window.deepArticles["kalat"];
if(kalatState){
  const khanate=kalatState.sections?.find(section=>section.id==="khanate");
  if(khanate) khanate.html=khanate.html.replace("Kalat survives the Raj","Under <a href='ahmad-yar-khan.html'>Ahmad Yar Khan</a>, Kalat survives the Raj");
  appendUniqueBalochLinks("kalat",[{href:"ahmad-yar-khan.html",kicker:"Founding khan",label:"Ahmad Yar Khan"},{href:"gwadar-transfer.html",kicker:"Rival capital's foundation",label:"Gwadar Transfer"}]);
}

const successionCrisis=window.deepArticles["western-succession-crisis"];
if(successionCrisis){
  const kalat=successionCrisis.sections?.find(section=>section.id==="kalat");
  if(kalat) kalat.html=kalat.html.replace("Ahmad Yar Khan's Kalat","<a href='ahmad-yar-khan.html'>Ahmad Yar Khan's</a> Kalat");
  const gwadar=successionCrisis.sections?.find(section=>section.id==="gwadar");
  if(gwadar) gwadar.html=gwadar.html.replace("Gwadar does not enter","<a href='gwadar-transfer.html'>Gwadar does not enter</a>");
  appendUniqueBalochLinks("western-succession-crisis",[{href:"ahmad-yar-khan.html",kicker:"Kalat claimant",label:"Ahmad Yar Khan"},{href:"gwadar-transfer.html",kicker:"Territorial settlement",label:"Gwadar Transfer"}]);
}

appendUniqueBalochLinks("first-baloch-wars",[{href:"government-of-baloch-confederated-state.html",kicker:"Confederal belligerent",label:"Government of the Baloch Confederated State"},{href:"armed-forces-of-baloch-confederated-state.html",kicker:"Confederal forces",label:"Baloch Confederated Armed Forces"}]);
appendUniqueBalochLinks("second-las-bela-war",[{href:"armed-forces-of-baloch-confederated-state.html",kicker:"Attacking force",label:"Baloch Confederated Armed Forces"}]);
appendUniqueBalochLinks("third-balochistan-war",[{href:"government-of-baloch-confederated-state.html",kicker:"Defeated government",label:"Government of the Baloch Confederated State"},{href:"armed-forces-of-baloch-confederated-state.html",kicker:"Dissolved force",label:"Baloch Confederated Armed Forces"}]);
