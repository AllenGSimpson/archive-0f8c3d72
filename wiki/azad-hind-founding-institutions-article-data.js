window.deepArticles = window.deepArticles || {};

const azadHindInstitutionSources = [
  {href:"../transcript.md",label:"Master Transcript — Azad Hind institutions and territorial consolidation, Turns 712–713"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Indian successor states and Azad Hind"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Azad Hind and the Indian wars"},
  {href:"https://www.jiia-jic.jp/en/japanreview/pdf/02JapanReview_Vol7_No2_Monika%20Chansoria.pdf",label:"Japan Institute of International Affairs — Indian Independence League and Japan"},
  {href:"https://www.netajisubhasbose.org/post/azad-hind-dal",label:"Netaji Subhas Bose memorial archive — Azad Hind Dal"},
  {href:"https://cmsadmin.amritmahotsav.nic.in/unsung-heroes-detail.htm?8548=",label:"Government of India — Azad Hind Bank and wartime fundraising"},
  {href:"https://biblioasia.nlb.gov.sg/all-sections/vol-14-issue-1-apr-jun-2018-warrior-women-rani-jhansi-regiment/",label:"National Library Board Singapore — Rani of Jhansi Regiment"}
];

const azadHindInstitutionCards = [
  {href:"indian-independence-league-azad-hind.html",kicker:"Political and diaspora network",label:"Indian Independence League"},
  {href:"azad-hind-dal.html",kicker:"Civil-affairs cadre",label:"Azad Hind Dal"},
  {href:"azad-hind-bank.html",kicker:"Revolutionary financial institution",label:"Azad Hind Bank"},
  {href:"rani-of-jhansi-regiment-azad-hind.html",kicker:"Women's military and national service",label:"Rani of Jhansi Regiment"}
];

const azadHindInstitutionArticle = config => ({
  category:"Azad Hind",
  eyebrow:"Free India · founding state apparatus · from 1942",
  infoboxKicker:"Founding institution of Azad Hind",
  landscape:{src:"assets/diagrams/azad-hind-founding-apparatus.svg",alt:"Diagram of the four non-army founding institutions of Azad Hind",caption:"The League supplied political reach, the Dal civil administration, the Bank finance, and the Rani of Jhansi organization women's military and national service."},
  ...config,
  related:[...(config.related || []),{href:"founding-institutions-azad-hind.html",kicker:"Parent system",label:"Founding Institutions of Azad Hind"},...azadHindInstitutionCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(other=>other.href===card.href))],
  sources:azadHindInstitutionSources,
  categories:config.categories || ["Azad Hind","Indian independence movement","State institutions","India"]
});

Object.assign(window.deepArticles,{
  "indian-independence-league-azad-hind":azadHindInstitutionArticle({
    slug:"indian-independence-league-azad-hind",title:"Indian Independence League in Azad Hind",infoboxTitle:"Indian Independence League",
    lead:"The Indian Independence League is the political and overseas-community network that preceded the Provisional Government of Free India and continued after Azad Hind acquired territory. It joined Indian nationalist associations across Japanese-led Asia, supported the Indian National Army, raised money and recruits, and supplied the government with diplomatic, commercial, and diaspora relationships that an eastern Indian territorial administration could not reproduce by itself.",
    canon:"The League's wartime consolidation, relationship with Rash Behari Bose and Subhas Chandra Bose, political and diaspora function, fundraising, recruitment, propaganda, overseas liaison, and continued role after territorial consolidation are established or historical foundations carried forward by the setting. Its post-1947 charter, membership, branches, executive, legal relationship to the government, role in elections, and position after Bose remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Indian nationalist associations existed across Japan and Southeast Asia before one common League possessed effective authority. Rash Behari Bose used the Tokyo conference of March 1942 and the Bangkok conference that June to bring regional organizations into a common movement and connect them to an Indian army formed from prisoners, expatriates, and volunteers.</p>"},
      {id:"bose",title:"Transfer to Subhas Chandra Bose",html:"<p>The movement invited <a href='subhas-chandra-bose.html'>Subhas Chandra Bose</a> to assume leadership. After he reached Southeast Asia in 1943, the League, INA, and new <a href='provisional-government-free-india.html'>Provisional Government</a> formed one revolutionary system without becoming legally identical institutions.</p>"},
      {id:"diaspora",title:"Overseas network",html:"<p>Branches among Indian communities in Burma, Malaya, Singapore, Thailand, Japan, China, Manchukuo, the Philippines, and other territories organized subscriptions, recruitment, public meetings, welfare, propaganda, and commercial liaison. The network treated Indians outside the subcontinent as participants in national liberation rather than a foreign audience.</p>"},
      {id:"government",title:"Relationship with the government",html:"<p>The League supplied representation and organization where the Provisional Government lacked an ordinary territorial civil service. It remained distinguishable from the executive, the <a href='indian-national-army-azad-hind.html'>INA</a>, and the <a href='azad-hind-dal.html'>Azad Hind Dal</a>. The exact postwar division between movement, party, ministry, and overseas association is not fixed.</p>"},
      {id:"entry",title:"Entry into India",html:"<p>When Azad Hind entered eastern India, League cadres carried contacts, records, publicity methods, interpreters, and financial networks across the frontier. Territorial government reduced the importance of exile politics but increased the value of external fundraising, shipping, technical recruitment, and diplomatic access.</p>"},
      {id:"commerce",title:"Commercial and financial liaison",html:"<p>Indian merchants and professionals throughout Japanese Asia linked the League to the <a href='azad-hind-bank.html'>Azad Hind Bank</a>. Subscriptions and patriotic gifts gradually coexisted with ordinary trade finance, procurement, family remittances, and recruitment of skilled personnel.</p>"},
      {id:"politics",title:"Domestic political position",html:"<p>League service conferred revolutionary prestige, but the institution did not automatically become an ordinary competitive party. Azad Hind's permanent provisional constitution, executive government, provincial autonomies, army, and local administrations created constituencies that could not be governed solely through an overseas independence movement.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The League supported Azad Hind's claim that its state existed before Japanese victory opened Bengal. Its survival also kept the eastern government connected to an Indian nation larger than the territory it controlled, reinforcing claims upon Delhi and communities beyond its borders.</p>"}
    ],
    related:[{href:"subhas-chandra-bose.html",kicker:"Principal leader",label:"Subhas Chandra Bose"},{href:"provisional-government-free-india.html",kicker:"State authority",label:"Provisional Government of Free India"},{href:"indian-national-army-azad-hind.html",kicker:"Military arm",label:"Indian National Army"}],
    facts:[["Consolidated","1942"],["Principal early leader","Rash Behari Bose"],["Leadership transferred to","Subhas Chandra Bose, 1943"],["Principal constituency","Overseas Indian communities in Japanese-led Asia"],["Functions","Political organization, fundraising, recruitment, propaganda, and liaison"],["Territorial state","Azad Hind"],["Postwar legal character","Open"],["Membership and branch totals","Open"]]
  }),

  "azad-hind-dal":azadHindInstitutionArticle({
    slug:"azad-hind-dal",title:"Azad Hind Dal",infoboxTitle:"Azad Hind Dal",
    lead:"The Azad Hind Dal is the civil-affairs, reconstruction, and political-cadre organization created to follow the Indian National Army into liberated territory. Its trained personnel were intended to restore law, food distribution, health services, utilities, transport, and civil administration behind the military advance. In the setting, the Dal performed those tasks during the eastern consolidation and became one of the principal institutional ancestors of Azad Hind's territorial bureaucracy.",
    canon:"The Dal's wartime creation, relationship with the Indian Independence League and Provisional Government, civil-affairs and reconstruction mission, trained administrative, police, health, medical, engineering, and technical personnel, entry behind military forces, and later cadre role are established or historical foundations carried forward. Its postwar statute, departments, strength, leadership, party status, uniforms, and relationship to ministries and local government remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Subhas Chandra Bose expected military advance to produce damaged towns, displaced civilians, interrupted food supplies, disease, unexploded ordnance, and a vacuum of authority. The Dal was designed to prevent Japanese military administration or surviving colonial services from defining the first experience of liberation.</p>"},
      {id:"recruitment",title:"Recruitment and training",html:"<p>The reconstruction apparatus recruited civil administrators, police, medical and health officers, sanitary inspectors, nursing personnel, engineers, overseers, mechanics, fitters, carpenters, drivers, and other trades. Training combined professional refreshers with physical, political, and limited military preparation for work near active operations.</p>"},
      {id:"organization",title:"Civil-affairs organization",html:"<p>Administrative, health, medical, engineering, supply, and publicity elements carried tools and specialist kits appropriate to damaged areas. The Dal was neither an ordinary infantry formation nor a complete provincial government. It was a mobile first administration intended to make later civil rule possible.</p>"},
      {id:"duties",title:"Duties in liberated territory",html:"<p>Immediate work included clearing debris and hazards, restoring utilities and roads, establishing law and order, distributing essential food, preventing epidemics, opening medical centers, registering local needs, and explaining the Provisional Government's program.</p>"},
      {id:"east",title:"Eastern consolidation",html:"<p>Japanese victory allowed the organization to perform at scale after 1947. Dal teams accompanied or followed national forces into Bengal, Orissa, and the Assam approaches, then transferred routine administration to provincial offices, municipalities, police, and ministries as the front moved west.</p>"},
      {id:"cadres",title:"From reconstruction corps to cadre system",html:"<p>Repeated emergency service produced a disciplined pool of officials familiar with military logistics, public health, propaganda, and local organization. Some entered ministries or provincial administration; others remained in a national cadre available for campaigns, disasters, and mobilization.</p>"},
      {id:"politics",title:"Political position",html:"<p>The Dal translated executive policy into local administration and public campaigns, giving it characteristics of a civil service, national-service corps, and governing political organization. The canon does not yet establish that it became the single legal party or controlled every appointment.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The institution made administration part of Azad Hind's military founding story. Later disaster relief, civil defense, public works, and mobilization drew upon the same assumption that national cadres should restore civil life immediately behind an army or emergency column.</p>"}
    ],
    related:[{href:"provisional-government-free-india.html",kicker:"State authority",label:"Provisional Government of Free India"},{href:"eastern-consolidation-azad-hind.html",kicker:"First territorial operation",label:"Eastern Consolidation"},{href:"disaster-relief-azad-hind.html",kicker:"Later civil-military function",label:"Disaster Relief in Azad Hind"}],
    facts:[["Created","Second World War"],["Parent movement","Indian Independence League"],["State authority","Provisional Government of Free India"],["Character","Civil affairs, reconstruction, and political cadre"],["Personnel","Administrative, police, medical, engineering, and technical workers"],["Operational position","Behind or alongside INA advances"],["Postwar role","Institutional ancestor of territorial administration"],["Final statute and strength","Open"]]
  }),

  "azad-hind-bank":azadHindInstitutionArticle({
    slug:"azad-hind-bank",title:"Azad Hind Bank",infoboxTitle:"Azad Hind Bank",
    lead:"The Azad Hind Bank is the revolutionary financial institution established at Rangoon in April 1944 to receive funds raised by the Provisional Government and Indian Independence League, support the Indian National Army, and prepare a financial system for liberated territory. After Azad Hind acquired an eastern Indian territorial base, the bank moved from wartime subscriptions and promissory currency toward public finance, reconstruction credit, veterans' funds, and the planned economy. Whether it became the central bank in law or served as the ancestor of a separate monetary authority remains open.",
    canon:"The bank's Rangoon establishment in April 1944, relationship with Bose's government, use of overseas Indian donations, support for the INA, currency preparation, survival into territorial government, and later connection to reconstruction, veterans, external subscriptions, and planning are established or historical foundations carried forward. Exact corporate title, founders beyond the known wartime circle, capital, branches, note issues, relocation date, balance sheets, currency law, and final central-bank status remain open.",
    sections:[
      {id:"foundation",title:"Foundation at Rangoon",html:"<p>The bank was established in Rangoon on 5 April 1944 while Burma served as the principal rear area for the Provisional Government and INA. It gave patriotic fundraising an institutional account rather than leaving the movement dependent upon improvised cash custody and separate local committees.</p>"},
      {id:"funds",title:"Subscriptions and donations",html:"<p>Indian merchants, workers, professionals, and families across Southeast Asia contributed cash, gold, jewelry, and other valuables to the liberation movement. The <a href='indian-independence-league-azad-hind.html'>Indian Independence League</a> organized much of the network, while financial officers converted political gifts into usable military and administrative resources.</p>"},
      {id:"war",title:"Wartime finance",html:"<p>The bank supported payroll, procurement, relief, transport, and government operations. Prepared notes and other claims were intended to make the Provisional Government visible as a sovereign authority in territory entered by the INA.</p><p>The complete issue record and redemption arrangements are not fixed in the setting archive.</p>"},
      {id:"entry",title:"Entry into eastern India",html:"<p>Control of Calcutta and eastern territory transformed the institution. It now operated beside tax offices, commercial banks, port finance, provincial budgets, Japanese credit, and an economy larger than the overseas subscription base that created it.</p>"},
      {id:"currency",title:"Currency and monetary authority",html:"<p>The bank provided the institutional starting point for an Azad Hind currency and public payments system. Current canon does not decide whether the wartime bank itself acquired a statutory monopoly of issue, became a treasury bank, or transferred central-bank functions to a successor institution.</p>"},
      {id:"development",title:"Reconstruction and planned development",html:"<p>Public credit linked transport, workshops, munitions, agricultural recovery, veterans' settlement, and provincial reconstruction to the national plan. Political allocation made the bank important, but it did not eliminate ordinary commercial banking or every Japanese financial claim.</p>"},
      {id:"external",title:"External financial network",html:"<p>League branches and Indian business communities continued to channel subscriptions, remittances, trade intelligence, and hard-settlement assets. Japanese banks and sphere institutions supplied access to machinery and imports that Azad Hind could not finance solely from domestic revenue.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The bank embodied the claim that Free India possessed money and public credit before it possessed a secure capital. Later monetary institutions could change its legal form without erasing the founding association among diaspora sacrifice, army finance, and national development.</p>"}
    ],
    related:[{href:"provisional-government-free-india.html",kicker:"Owner and state authority",label:"Provisional Government of Free India"},{href:"indian-independence-league-azad-hind.html",kicker:"Fundraising network",label:"Indian Independence League"},{href:"azad-hind-munitions-independence-program.html",kicker:"Later strategic finance",label:"Munitions Independence Program"}],
    facts:[["Established","5 April 1944"],["Place established","Rangoon, Burma"],["State","Provisional Government of Free India"],["Initial resources","Overseas Indian subscriptions and donations"],["Initial purposes","Government and INA finance; currency preparation"],["Later purposes","Public finance, reconstruction, veterans, and development"],["Territorial center","Calcutta after eastern consolidation"],["Final central-bank status","Open"]]
  }),

  "rani-of-jhansi-regiment-azad-hind":azadHindInstitutionArticle({
    slug:"rani-of-jhansi-regiment-azad-hind",title:"Rani of Jhansi Regiment in Azad Hind",infoboxTitle:"Rani of Jhansi Regiment",
    lead:"The Rani of Jhansi Regiment is the women's military formation of the Indian National Army and the founding tradition of Azad Hind's later women's national-service organization. Raised at Singapore in July 1943 under Lakshmi Swaminathan, later Lakshmi Sahgal, it recruited principally from Indian communities in Southeast Asia. Japanese victory allowed the formation to survive the war, enter eastern India with the revolutionary state, and expand its influence through medicine, communications, logistics, civil defense, training, and ceremonial service.",
    canon:"The regiment's July 1943 foundation, command by Lakshmi Swaminathan, overseas Indian recruitment, INA status, military training, movement toward Burma, survival in the setting, and later role as a women's military and national-service tradition are established or historical foundations carried forward. Exact wartime and postwar strengths, combat record, unit organization, later commanders, service obligations, branch titles, uniforms, and extent of female combat service remain open.",
    sections:[
      {id:"foundation",title:"Foundation",html:"<p>Subhas Chandra Bose announced an all-women INA formation in July 1943 and named it for Lakshmibai, the Rani of Jhansi associated with the uprising of 1857. The name joined anticolonial war, female public service, and a historical Indian martial symbol.</p>"},
      {id:"lakshmi",title:"Lakshmi Swaminathan",html:"<p>Physician Lakshmi Swaminathan took command and became widely known as Captain Lakshmi. She combined military leadership with the Provisional Government's women's portfolio and gave the unit an identifiable authority distinct from a purely ceremonial auxiliary.</p>"},
      {id:"recruitment",title:"Recruitment and training",html:"<p>Volunteers came mainly from Indian communities in Malaya, Singapore, and the wider Southeast Asian diaspora. The regiment trained in drill, weapons, fieldcraft, medicine, communications, and support work. Educational background, age, language, and prior experience varied substantially.</p>"},
      {id:"war",title:"War service",html:"<p>Elements moved toward Burma as the INA prepared to enter India. Historical uncertainty about combat employment does not erase the unit's military organization or the risks its members accepted. In the setting, the surviving formation accompanied the victorious revolutionary apparatus into eastern India after the long war.</p>"},
      {id:"territory",title:"Territorial service",html:"<p>A government responsible for cities and provinces required medical, communications, logistics, civil-defense, training, welfare, and administrative personnel as much as line infantry. The Rani organization retained military identity while widening into national service.</p>"},
      {id:"army",title:"Position in the national army",html:"<p>The regiment remained part of the INA founding estate and supplied a female service tradition to the larger <a href='indian-national-army-azad-hind.html'>Azad Hind National Army</a>. It did not by itself establish universal female conscription or equal assignment to every combat arm.</p>"},
      {id:"society",title:"Women and public service",html:"<p>Officer training, nursing, communications, logistics, civil defense, veterans' organizations, and national ceremonies made women's uniformed service publicly legitimate. Family expectations and unequal access continued, producing an institutionally visible exception rather than complete social equality.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The organization demonstrated that Azad Hind's political nation was not represented solely by male veterans. Later governments used the Rani of Jhansi lineage to connect revolutionary legitimacy, women's citizenship, disaster response, and national mobilization.</p>"}
    ],
    related:[{href:"indian-national-army-azad-hind.html",kicker:"Parent armed institution",label:"Indian National Army"},{href:"subhas-chandra-bose.html",kicker:"Founding head of state",label:"Subhas Chandra Bose"},{href:"azad-hind-dal.html",kicker:"Civil-affairs counterpart",label:"Azad Hind Dal"}],
    facts:[["Raised","July 1943"],["Place raised","Singapore"],["Named for","Rani Lakshmibai of Jhansi"],["Founding commander","Lakshmi Swaminathan (Lakshmi Sahgal)"],["Parent force","Indian National Army"],["Initial recruitment","Overseas Indian women in Southeast Asia"],["Later role","Women's military and national-service organization"],["Strength and detailed combat record","Open"]]
  })
});

const addAzadHindInstitutionRelated = (slug,links) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related||[]),...links.filter(link=>!(article.related||[]).some(existing=>existing.href===link.href))];
};

const foundingOverview=window.deepArticles["founding-institutions-azad-hind"];
if(foundingOverview){
  foundingOverview.landscape={src:"assets/diagrams/azad-hind-founding-apparatus.svg",alt:"Diagram of the four non-army founding institutions of Azad Hind",caption:"Political organization, civil administration, finance, and women's national service accompanied the army and government into India."};
  const replacements={league:["Indian Independence League","indian-independence-league-azad-hind.html"],dal:["Azad Hind Dal","azad-hind-dal.html"],bank:["Azad Hind Bank","azad-hind-bank.html"],rani:["Rani of Jhansi organization","rani-of-jhansi-regiment-azad-hind.html"]};
  for(const [id,[label,href]] of Object.entries(replacements)){
    const section=foundingOverview.sections?.find(item=>item.id===id);
    if(section && !section.html.includes(href)) section.html=section.html.replace(label,`<a href='${href}'>${label}</a>`);
  }
  foundingOverview.related=[...(foundingOverview.related||[]),...azadHindInstitutionCards];
}

const provisionalGovernment=window.deepArticles["provisional-government-free-india"];
if(provisionalGovernment){
  const proclamation=provisionalGovernment.sections?.find(section=>section.id==="proclamation");
  if(proclamation) proclamation.html="<p>The government begins as a revolutionary authority in exile rather than a provincial administration created after the Raj collapses. The <a href='indian-national-army-azad-hind.html'>Indian National Army</a>, <a href='indian-independence-league-azad-hind.html'>Indian Independence League</a>, <a href='azad-hind-dal.html'>Azad Hind Dal</a>, <a href='azad-hind-bank.html'>Azad Hind Bank</a>, and <a href='rani-of-jhansi-regiment-azad-hind.html'>Rani of Jhansi organization</a> give it soldiers, money, cadres, diplomacy, and public ritual before it governs Calcutta.</p>";
  addAzadHindInstitutionRelated("provisional-government-free-india",azadHindInstitutionCards);
}

const nationalArmy=window.deepArticles["indian-national-army-azad-hind"];
if(nationalArmy){
  const society=nationalArmy.sections?.find(section=>section.id==="society");
  if(society) society.html="<p>Veterans' halls, military schools, reserve service, civil defense, and public works make the army part of daily administration. The <a href='rani-of-jhansi-regiment-azad-hind.html'>Rani of Jhansi organization</a> gives women a visible place in medicine, communications, logistics, civil defense, and officer formation without necessarily establishing universal female combat service.</p>";
  addAzadHindInstitutionRelated("indian-national-army-azad-hind",[{href:"rani-of-jhansi-regiment-azad-hind.html",kicker:"Women's founding formation",label:"Rani of Jhansi Regiment"}]);
}

addAzadHindInstitutionRelated("azad-hind",azadHindInstitutionCards);
addAzadHindInstitutionRelated("subhas-chandra-bose",[{href:"indian-independence-league-azad-hind.html",kicker:"Political movement",label:"Indian Independence League"},{href:"azad-hind-dal.html",kicker:"Civil-affairs institution",label:"Azad Hind Dal"},{href:"azad-hind-bank.html",kicker:"Financial institution",label:"Azad Hind Bank"},{href:"rani-of-jhansi-regiment-azad-hind.html",kicker:"Women's formation",label:"Rani of Jhansi Regiment"}]);
