window.deepArticles = window.deepArticles || {};

const balochConfederalInstitutionSources = [
  {href:"../transcript.md",label:"Master Transcript — western Indian frontier, Baloch state formation, and Third Balochistan War"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Indian successor states and the western frontier"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Baloch territorial consolidation and the 1981–84 war"},
  {href:"https://balochistan.gov.pk/about/history/",label:"Government of Balochistan — historical division between British Baluchistan and the princely states"},
  {href:"https://www.qdl.qa/en/historical-profile-british-baluchistan-and-makran",label:"Qatar Digital Library — British Baluchistan and Makran historical profile"}
];

const balochConfederalInstitutionCards = [
  {href:"baloch-iranian-security-compact.html",kicker:"External-security settlement",label:"Baloch–Iranian Security Compact"},
  {href:"iranian-military-mission-balochistan.html",kicker:"Advisory and supply organization",label:"Iranian Military Mission"},
  {href:"baloch-confederal-customs-service.html",kicker:"Common revenue institution",label:"Baloch Confederal Customs Service"},
  {href:"baloch-centralization-crisis.html",kicker:"Political crisis, 1981–84",label:"Baloch Centralization Crisis"},
  {href:"baloch-grand-council.html",kicker:"Postwar representative body",label:"Baloch Grand Council"},
  {href:"gwadar-special-port-charter.html",kicker:"Postwar port settlement",label:"Gwadar Special Port Charter"}
];

const balochAuthorityDiagram = {
  src:"assets/diagrams/baloch-authority-fracture-1981-1984.svg",
  alt:"Diagram showing Iranian support entering the Gwadar government, centralization disputes with Makran, Kharan, and Chagai, and Kalat's autonomy offer during 1981 to 1984",
  caption:"Central control of the army, customs, and Iranian aid divided the confederation; Kalat answered with guarantees of hereditary and territorial autonomy."
};

const balochConfederalInstitutionArticle = config => ({
  category:"Western India",
  eyebrow:"Baloch confederal institutions · western Indian successor order",
  ...config,
  related:[...(config.related || []),...balochConfederalInstitutionCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:balochConfederalInstitutionSources,
  categories:config.categories || ["Balochistan","Indian successor states","Baloch Confederated State"]
});

Object.assign(window.deepArticles,{
  "baloch-iranian-security-compact":balochConfederalInstitutionArticle({
    slug:"baloch-iranian-security-compact",title:"Baloch–Iranian Security Compact",category:"Treaties",eyebrow:"Security settlement · late 1940s–1984",infoboxKicker:"Descriptive archival title",infoboxTitle:"Baloch–Iranian Security Compact",
    lead:"The Baloch–Iranian Security Compact is the descriptive name for the agreements that made Iran the principal external guarantor of the Baloch Confederated State. The settlement recognized the Iranian frontier, excluded claims upon Iranian Sistan and Baluchestan, restricted anti-Iranian organizations, admitted Iranian military and intelligence advisers, and coordinated important foreign policy. Iran supplied recognition, finance, fuel, weapons, training, and protected access through Gwadar.",
    canon:"The bargain's obligations, Iranian patronage, relationship to the Gwadar Transfer, bounded Baloch nationalism, and collapse in 1984 are established. Its official title, signature date, signatories, ratification, duration, annexes, enforcement clauses, basing language, and financial schedules remain open; the article title is descriptive rather than a fixed treaty name.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The compact develops during the <a href='western-succession-crisis.html'>Western Succession Crisis</a>, when Makran, Kharan, Las Bela, and associated authorities require recognition and matériel against Kalat and Afghanistan. Iran requires a stable buffer east of its frontier and an aligned government controlling the Makran coast.</p>"},
      {id:"frontier",title:"Frontier obligations",html:"<p>The Gwadar government recognizes the Iranian frontier and renounces claims upon Iranian Sistan and Baluchestan. It excludes organizations seeking to extend the Baloch state across that frontier and accepts intelligence cooperation against armed cross-border activity.</p>"},
      {id:"security",title:"Security assistance",html:"<p>Iran finances or supplies vehicles, artillery, radios, fuel, training, officers, intelligence, and maintenance. The <a href='iranian-military-mission-balochistan.html'>Iranian Military Mission</a> connects those resources to the confederated armed forces and to selected frontier and port offices.</p>"},
      {id:"gwadar",title:"Gwadar provisions",html:"<p>The <a href='gwadar-transfer.html'>Gwadar Transfer</a> and the security compact overlap. Iranian commercial and military access, restrictions upon rival foreign bases, and repayment through customs or concessions make the port both the confederation's independent outlet and the visible center of its dependence.</p>"},
      {id:"diplomacy",title:"Foreign policy coordination",html:"<p>The Baloch state remains sovereign and conducts its own diplomacy, but decisions affecting Iran, Afghanistan, foreign basing, cross-border organizations, and major concessions are coordinated with Tehran. Iran possesses less direct administrative control than Japan exercises in Manchukuo.</p>"},
      {id:"tensions",title:"Political tensions",html:"<p>Confederal nationalists accept Iranian help while objecting to limits upon wider Baloch claims. Kharan and Chagai also associate Iranian assistance with the growing authority of Gwadar and Makran. Tehran becomes more restrictive as Baloch political consciousness grows inside Iran.</p>"},
      {id:"war",title:"Third Balochistan War",html:"<p>During the <a href='third-balochistan-war.html'>Third Balochistan War</a>, Iran continues supply and advisory support but refuses the large regular intervention required to preserve the divided confederation. Guarantees for property, access, and personnel accompany its withdrawal.</p>"},
      {id:"termination",title:"Termination",html:"<p>The compact ceases to govern a sovereign Baloch Confederated State when the Gwadar government dissolves in 1984. Kalat later preserves or converts selected Iranian port and commercial interests through the <a href='gwadar-special-port-charter.html'>Gwadar Special Port Charter</a>.</p>"}
    ],
    related:[{href:"iran.html",kicker:"External guarantor",label:"Iran"},{href:"baloch-confederated-state.html",kicker:"Protected state",label:"Baloch Confederated State"}],
    facts:[["Period","Late 1940s–1984"],["Parties","Iran and the Baloch Confederated State"],["Purpose","Buffer security and state survival"],["Baloch obligation","Recognition of the Iranian frontier"],["Iranian support","Finance, arms, fuel, advisers, and recognition"],["Principal access point","Gwadar"],["Outcome","Ended with the confederation's dissolution"],["Official title and signature date","Open"]]
  }),

  "iranian-military-mission-balochistan":balochConfederalInstitutionArticle({
    slug:"iranian-military-mission-balochistan",title:"Iranian Military Mission in Balochistan",category:"Military",eyebrow:"Advisory mission · c. late 1940s–1984",infoboxKicker:"Foreign military mission",infoboxTitle:"Iranian Military Mission in Balochistan",
    lead:"The Iranian Military Mission in Balochistan was the advisory, training, procurement, intelligence, and logistical presence through which Iran supported the Baloch Confederated State. Mission personnel worked principally with the Gwadar government, the common armed forces, port and communications offices, and units able to maintain imported equipment. Their access strengthened regular formations while tying matériel distribution to Iranian accounting and security priorities.",
    canon:"Iranian advisers, intelligence cooperation, equipment, fuel, training, maintenance, roads, and refusal of a major regular intervention in 1981–84 are established. The mission's official title, founding date, command, strength, bases, uniform, legal immunities, unit attachments, and complete equipment schedules remain open.",
    sections:[
      {id:"establishment",title:"Establishment",html:"<p>The mission forms under the <a href='baloch-iranian-security-compact.html'>Baloch–Iranian Security Compact</a>. Initial work concentrates upon establishing a common headquarters, receiving supplies through Gwadar, securing communications, and organizing forces drawn from several princely establishments.</p>"},
      {id:"organization",title:"Organization",html:"<p>The archive supports military advisers, intelligence liaison, procurement and accounting personnel, trainers, radio specialists, mechanics, and transport officers. Whether these elements belonged to one permanent headquarters or several rotating detachments remains unresolved.</p>"},
      {id:"training",title:"Training",html:"<p>Training covers staff procedure, signals, vehicle operation, artillery, logistics, maintenance, border intelligence, and accountability for imported stores. Iranian officers work most effectively with national units under direct Gwadar control.</p>"},
      {id:"supply",title:"Equipment and supply",html:"<p>Iran supplies or finances armored vehicles, trucks, artillery, radios, fuel, spares, and workshop capacity. Gwadar receives maritime cargo while roads and depots distribute it inland. Equipment readiness depends upon continuing Iranian parts, technicians, and fuel.</p>"},
      {id:"intelligence",title:"Intelligence cooperation",html:"<p>The mission exchanges reporting on Afghanistan, Kalat, Pakistani forces, frontier routes, and anti-Iranian Baloch organizations. Intelligence cooperation protects the confederation while placing cross-border political activity under close scrutiny.</p>"},
      {id:"relations",title:"Relations with component forces",html:"<p>Makran's access to the capital gives its officers greater contact with advisers and stores. Kharan and Chagai object when national accounting, appointments, and supply conditions reduce the discretion of local commanders. The mission becomes one focus of the <a href='baloch-centralization-crisis.html'>centralization crisis</a>.</p>"},
      {id:"final",title:"Final war",html:"<p>Iran continues advice, intelligence, and limited supply during 1981–84. It does not introduce the regular force required to reverse Kalat's advance and the defections within the confederation. Mission personnel and sensitive records withdraw through Gwadar under negotiated protection.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Imported equipment, trained officers, workshops, and communications survive the state's dissolution in uneven condition. Their incorporation into Kalat's enlarged forces remains dependent upon local surrender terms and access to replacement supply.</p>"}
    ],
    related:[{href:"armed-forces-of-baloch-confederated-state.html",kicker:"Principal recipient",label:"Baloch Confederated Armed Forces"},{href:"gwadar.html",kicker:"Mission port and headquarters",label:"Gwadar"}],
    facts:[["Period","c. late 1940s–1984"],["Sending state","Iran"],["Host state","Baloch Confederated State"],["Principal station","Gwadar"],["Functions","Advice, training, intelligence, procurement, and maintenance"],["Supported force","Confederated armed forces"],["Final disposition","Withdrawn during the 1984 collapse"],["Official title, command, and strength","Open"]]
  }),

  "baloch-confederal-customs-service":balochConfederalInstitutionArticle({
    slug:"baloch-confederal-customs-service",title:"Baloch Confederal Customs Service",category:"Government",eyebrow:"Revenue administration · c. late 1940s–1984",infoboxKicker:"Common confederal service",infoboxTitle:"Baloch Confederal Customs Service",
    lead:"The Baloch Confederal Customs Service was the common revenue and border-trade administration of the Baloch Confederated State. Based at Gwadar, it collected maritime duties, supervised designated land crossings, recorded concessions and strategic imports, and supplied revenue for diplomacy, defense, common finance, and obligations arising from the Iranian-financed transfer of the port.",
    canon:"Customs as a common power, Gwadar's central role, Iranian repayment or concession interests, component taxation autonomy, aid and army centralization disputes, and dissolution in 1984 are established. The service's official name, statute, tariff, staff, stations, revenue shares, uniforms, courts, and records remain open.",
    sections:[
      {id:"basis",title:"Legal basis",html:"<p>The founding confederal bargain assigns customs to the <a href='government-of-baloch-confederated-state.html'>common government</a> while component rulers retain most local taxation. The arrangement gives Gwadar a revenue source that does not depend entirely upon contributions from dynastic treasuries.</p>"},
      {id:"organization",title:"Organization",html:"<p>A central office at Gwadar supervises the port, manifests, bonded storage, strategic imports, and accounts. Land stations operate where recognized roads, wells, and frontier posts make collection possible. Exact district boundaries and subordinate titles remain open.</p>"},
      {id:"revenue",title:"Revenue",html:"<p>Receipts arise from maritime trade, fuel, vehicles, arms and controlled matériel, fishing and coastal commerce, concession cargo, and selected overland routes. Portions support the army, diplomacy, common banking, port works, and obligations to Iran.</p>"},
      {id:"iran",title:"Iranian interests",html:"<p>The <a href='gwadar-transfer.html'>Gwadar Transfer</a> reserves repayment through customs, mineral concessions, or a comparable claim. Iranian advisers seek reliable manifests and protected treatment for approved cargo. The exact lien, duration, and collection procedure remain unresolved.</p>"},
      {id:"local",title:"Relations with component rulers",html:"<p>Local courts retain excises, land dues, market taxes, and other domestic receipts. Disputes arise when common officers classify local trade as foreign commerce, inspect princely cargo, or withhold a larger share for defense and debt service.</p>"},
      {id:"enforcement",title:"Enforcement",html:"<p>Customs officers depend upon port guards, local police, and the armed forces. Smuggling routes through the coast, desert, and Sindhi frontier remain useful to rulers, merchants, and military brokers who oppose central accounting.</p>"},
      {id:"crisis",title:"Centralization crisis",html:"<p>In the early 1980s the Gwadar government attempts to centralize customs receipts and connect them more directly to army supply and Iranian aid. Kharan and Chagai treat the program as a transfer of political authority to Makrani officials at the capital.</p>"},
      {id:"dissolution",title:"Dissolution and succession",html:"<p>The national service fragments as units and territories change allegiance during the Third Balochistan War. Kalat later combines selected records and stations with its own revenue system while giving Gwadar separate treatment under a special port charter.</p>"}
    ],
    related:[{href:"gwadar.html",kicker:"Headquarters and principal port",label:"Gwadar"},{href:"government-of-baloch-confederated-state.html",kicker:"Superior authority",label:"Confederated Government"}],
    facts:[["Period","c. late 1940s–1984"],["Headquarters","Gwadar"],["Superior authority","Confederal government"],["Principal functions","Customs, manifests, concessions, and strategic imports"],["Principal expenditure","Defense and common government"],["Local counterpart","Component tax administrations"],["Successor","Kalat and the Gwadar charter system"],["Official name, tariff, and revenue shares","Open"]]
  }),

  "baloch-centralization-crisis":balochConfederalInstitutionArticle({
    slug:"baloch-centralization-crisis",title:"Baloch Centralization Crisis",category:"Politics",eyebrow:"Political crisis · 1981–1984",infoboxKicker:"Confederal constitutional crisis",infoboxTitle:"Baloch Centralization Crisis",landscape:balochAuthorityDiagram,
    lead:"The Baloch Centralization Crisis was the political and military breakdown that accompanied the Gwadar government's attempt to place the army, customs, and distribution of Iranian aid under firmer common control. Makran's proximity to the capital made the program appear to Kharan and Chagai as Makrani domination. Failure to recover Las Bela and Tehran's restrictions upon wider Baloch nationalism deprived the government of a common national argument when Kalat renewed the war.",
    canon:"The three disputes—centralization, failure over Las Bela, and the political cost of Iranian support—together with Kalat's autonomy offer, defections and neutralities, and the 1984 collapse are established. Exact decrees, votes, ministers, component rulers, demonstrations, unit decisions, and month-by-month sequence remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The confederation assigns defense, customs, diplomacy, common finance, ports, and concessions to Gwadar while princely courts retain land, police, taxation arrangements, customary law, and ordinary administration. The division works while fear of Kalat exceeds distrust of the capital.</p>"},
      {id:"program",title:"Centralization program",html:"<p>The government seeks common command of the armed forces, direct accounting of customs, standardized appointments, and central distribution of Iranian fuel, equipment, and finance. The exact legal instruments are not preserved in the current record.</p>"},
      {id:"makran",title:"Makrani predominance",html:"<p>Makran surrounds the capital's principal approaches and supplies officials, merchants, and officers able to work regularly at Gwadar. Kharan and Chagai therefore describe formally national measures as control by one component court under Iranian protection.</p>"},
      {id:"lasbela",title:"Las Bela question",html:"<p>Decades of Iranian support fail to recover <a href='las-bela.html'>Las Bela</a>. Nationalists accuse the component courts of preserving hereditary privileges while failing at the state's principal territorial objective. Military reform is presented as the answer and becomes entangled with the criticism.</p>"},
      {id:"iran",title:"Iranian question",html:"<p>Tehran requires the state to suppress cross-border organizations and separate its nationalism from Iranian Baloch communities. These conditions protect aid and recognition while making the government appear less independent to the constituencies most committed to Baloch unity.</p>"},
      {id:"kalat",title:"Kalat's political offer",html:"<p>Kalat offers hereditary local authority, customary law, land rights, representation in a <a href='baloch-grand-council.html'>Baloch Grand Council</a>, a special charter for Gwadar, and military autonomy for Chagai. The terms give local elites an alternative to both centralization and unconditional conquest.</p>"},
      {id:"fracture",title:"Defection and neutrality",html:"<p>Some units and authorities defect to Kalat, others declare neutrality, and others defend only their own territory. National formations retain equipment but lose the local cooperation, routes, and political authority required for a common campaign.</p>"},
      {id:"outcome",title:"Outcome",html:"<p>The crisis merges into the <a href='third-balochistan-war.html'>Third Balochistan War</a>. Kalat takes Gwadar in 1984 and constructs an enlarged state through conquest and negotiated incorporation. The central government, customs service, and common armed forces cease to exist as national institutions.</p>"}
    ],
    related:[{href:"government-of-baloch-confederated-state.html",kicker:"Government in crisis",label:"Confederated Government"},{href:"third-balochistan-war.html",kicker:"Military culmination",label:"Third Balochistan War"}],
    facts:[["Period","1981–1984"],["Seat","Gwadar"],["Central issues","Army, customs, and Iranian aid"],["Principal opponents of centralization","Kharan and Chagai authorities"],["Territorial grievance","Failure to recover Las Bela"],["External issue","Conditions of Iranian support"],["Outcome","Confederal fracture and Kalat victory"],["Exact decrees and component votes","Open"]]
  }),

  "baloch-grand-council":balochConfederalInstitutionArticle({
    slug:"baloch-grand-council",title:"Baloch Grand Council",category:"Government",eyebrow:"Representative body · after 1984",infoboxKicker:"Kalat state institution",infoboxTitle:"Baloch Grand Council",
    lead:"The Baloch Grand Council is the representative body promised by Kalat to the component rulers and territorial authorities incorporated after the Third Balochistan War. It gives Makran, Kharan, Gwadar, Chagai, Las Bela, and the older Kalat regions a forum beneath the Khan while preserving different legal and administrative statuses. The council is consultative and bargaining-oriented rather than a uniform elected parliament.",
    canon:"Representation in a Baloch grand council as part of Kalat's autonomy offer is established. Its exact name, founding instrument, chamber form, membership, voting, presiding officer, budget powers, meeting place, elections, and relationship to a cabinet remain open.",
    sections:[
      {id:"offer",title:"Wartime offer",html:"<p>Kalat promises council representation alongside hereditary authority, customary law, land rights, a special status for Gwadar, and military autonomy for Chagai. The offer is directed to rulers and commanders whose cooperation can end the confederation's common defense.</p>"},
      {id:"foundation",title:"Foundation",html:"<p>The council enters the post-1984 settlement as an institution of the enlarged Kalat state. Whether it is established before the final surrender or by a later constitutional instrument remains unresolved.</p>"},
      {id:"representation",title:"Representation",html:"<p>Makran and Kharan enter as subordinate princely administrations. Las Bela is directly attached to Kalat under its Jam. Chagai is a frontier province with substantial military autonomy, and Gwadar operates under a special port charter. Sarawan, Jhalawan, Kachhi, and the central court also require representation.</p>"},
      {id:"functions",title:"Functions",html:"<p>The council provides a forum for revenue shares, customary jurisdiction, roads, ports, military obligations, appointments, concessions, and disputes among territories. It can record consent and dissent without necessarily binding the Khan in every field.</p>"},
      {id:"khan",title:"Relationship with the Khan",html:"<p>The Khan of Kalat retains paramount authority and presents the council as the institutional expression of reunited Baloch sovereignty. Component rulers use it to defend the autonomy promised during the war and to prevent the enlarged state from becoming one central district administration.</p>"},
      {id:"territories",title:"Territorial differences",html:"<p>The council does not erase the distinction between a hereditary principality, a directly attached territory, a militarized frontier administration, and a chartered port. Measures may therefore require separate implementation agreements with the affected authority.</p>"},
      {id:"limits",title:"Limits",html:"<p>Its representative principle rests initially upon courts, territories, and recognized authorities rather than equal individual suffrage. Ordinary inhabitants possess uneven routes into council business through local rulers, officials, notables, and whatever later consultative bodies develop.</p>"},
      {id:"record",title:"Institutional record",html:"<p>The current archive establishes the council's place in the settlement but not a roster of sessions, members, resolutions, or constitutional crises. Those details remain open for later political chronology.</p>"}
    ],
    related:[{href:"kalat.html",kicker:"Sovereign state",label:"Kalat"},{href:"third-balochistan-war.html",kicker:"Founding conflict",label:"Third Balochistan War"}],
    facts:[["Established","After 1984; exact date open"],["State","Kalat"],["Superior authority","Khan of Kalat"],["Character","Territorial and princely consultative council"],["Represented systems","Core regions, principalities, frontier, and chartered port"],["Principal purpose","Autonomy bargaining and common administration"],["Electoral basis","Open"],["Formal powers and membership","Open"]]
  }),

  "gwadar-special-port-charter":balochConfederalInstitutionArticle({
    slug:"gwadar-special-port-charter",title:"Gwadar Special Port Charter",category:"Law",eyebrow:"Port settlement · after 1984",infoboxKicker:"Postwar constitutional instrument",infoboxTitle:"Gwadar Special Port Charter",
    lead:"The Gwadar Special Port Charter is the postwar arrangement by which Kalat preserves Gwadar as a distinct commercial and administrative port after the dissolution of the Baloch Confederated State. It separates port, customs, foreign-access, concession, and municipal questions from the ordinary government of Makran and the Kalat core, while converting or guaranteeing selected Iranian interests created by the earlier transfer and security settlement.",
    canon:"Gwadar's post-1984 status as a special commercial port and preservation, compensation, or conversion of Iranian property and access are established. The charter's exact title, date, signatories, governing board, customs division, municipal powers, leases, Iranian clauses, and amendment procedure remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>Gwadar served as the capital, customs headquarters, foreign entrance, and military supply port of the defeated confederation. Treating it as an ordinary conquered district would disrupt trade, alienate Iran, and subordinate the port entirely to one neighboring principality.</p>"},
      {id:"settlement",title:"Postwar settlement",html:"<p>Kalat's wartime offer promises to retain Gwadar as a special commercial port. The charter translates that promise into a separate administrative status after the final surrender in 1984.</p>"},
      {id:"government",title:"Port government",html:"<p>A charter authority or comparable body administers harbor services, bonded areas, concessions, customs coordination, safety, and municipal works. Its exact membership and relationship to the Khan, Makran, and local residents remain unresolved.</p>"},
      {id:"customs",title:"Customs and revenue",html:"<p>The port retains distinct handling of maritime duties and concession income. Kalat requires revenue and sovereign control; Makran claims a local interest; and Iranian agreements require continuity or compensation. Exact shares are not fixed.</p>"},
      {id:"iran",title:"Iranian interests",html:"<p>Property, access, commercial privileges, and repayment claims created by the <a href='gwadar-transfer.html'>Gwadar Transfer</a> and the <a href='baloch-iranian-security-compact.html'>security compact</a> are preserved, converted into leases, or compensated. The settlement avoids a wider Iranian intervention while ending Tehran's control over Baloch foreign policy.</p>"},
      {id:"security",title:"Security and foreign access",html:"<p>Kalat controls sovereignty, defense, and the admission of foreign forces. Port policing and customs enforcement may remain locally organized under central oversight. Restrictions upon rival foreign bases survive where they support the postwar bargain.</p>"},
      {id:"council",title:"Relationship with the Grand Council",html:"<p>Gwadar receives representation in the <a href='baloch-grand-council.html'>Baloch Grand Council</a> while retaining chartered institutions distinct from the subordinate principalities. Disputes over revenue, roads, and appointments can therefore move between port authorities, Makran, the council, and the Khan.</p>"},
      {id:"open",title:"Open provisions",html:"<p>The documentary form remains unsettled. Later canon must establish the charter's name, date, signatories, boundaries, citizenship and residence rules, port board, tariff powers, police command, Iranian leases, judicial forum, and revision process.</p>"}
    ],
    related:[{href:"gwadar.html",kicker:"Chartered territory",label:"Gwadar"},{href:"kalat.html",kicker:"Sovereign state",label:"Kalat"}],
    facts:[["Period","After 1984"],["Sovereign","Kalat"],["Territory","Gwadar port and associated charter area"],["Purpose","Commercial continuity and political settlement"],["Principal institutions","Port, customs, municipal, and concession administration"],["Protected interests","Selected Iranian property and access"],["Representative link","Baloch Grand Council"],["Exact title, date, and provisions","Open"]]
  })
});

const appendUniqueBalochConfederalLinks = (slug,links=balochConfederalInstitutionCards) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const confederalGovernment=window.deepArticles["government-of-baloch-confederated-state"];
if(confederalGovernment){
  const common=confederalGovernment.sections?.find(section=>section.id==="common");
  if(common) common.html=common.html.replace("administers the small national army, collects or supervises customs","administers the small national army, operates the <a href='baloch-confederal-customs-service.html'>Confederal Customs Service</a>");
  const iran=confederalGovernment.sections?.find(section=>section.id==="iran");
  if(iran) iran.html=iran.html.replace("advisers and intelligence cooperation","the <a href='iranian-military-mission-balochistan.html'>Iranian Military Mission</a> and intelligence cooperation");
  const crisis=confederalGovernment.sections?.find(section=>section.id==="crisis");
  if(crisis) crisis.html=crisis.html.replace("In the early 1980s","The <a href='baloch-centralization-crisis.html'>Baloch Centralization Crisis</a> begins when, in the early 1980s,");
  appendUniqueBalochConfederalLinks("government-of-baloch-confederated-state");
}

const confederalArmy=window.deepArticles["armed-forces-of-baloch-confederated-state"];
if(confederalArmy){
  const iran=confederalArmy.sections?.find(section=>section.id==="iran");
  if(iran) iran.html=iran.html.replace("Iran supplies or finances","The <a href='iranian-military-mission-balochistan.html'>Iranian Military Mission</a> administers or supports Iranian supply of");
  const centralization=confederalArmy.sections?.find(section=>section.id==="centralization");
  if(centralization) centralization.html=centralization.html.replace("The Gwadar government's attempt","The <a href='baloch-centralization-crisis.html'>Baloch Centralization Crisis</a> begins with the Gwadar government's attempt");
  appendUniqueBalochConfederalLinks("armed-forces-of-baloch-confederated-state");
}

const balochStateInstitutions=window.deepArticles["baloch-confederated-state"];
if(balochStateInstitutions) appendUniqueBalochConfederalLinks("baloch-confederated-state");

const kalatInstitutions=window.deepArticles["kalat"];
if(kalatInstitutions){
  const union=kalatInstitutions.sections?.find(section=>section.id==="union");
  if(union) union.html=union.html.replace("a Baloch grand council","a <a href='baloch-grand-council.html'>Baloch Grand Council</a>").replace("special commercial charter","<a href='gwadar-special-port-charter.html'>special commercial charter</a>");
  appendUniqueBalochConfederalLinks("kalat",[{href:"baloch-grand-council.html",kicker:"Postwar representative body",label:"Baloch Grand Council"},{href:"gwadar-special-port-charter.html",kicker:"Postwar port settlement",label:"Gwadar Special Port Charter"}]);
}

const thirdBalochWarInstitutions=window.deepArticles["third-balochistan-war"];
if(thirdBalochWarInstitutions){
  appendUniqueBalochConfederalLinks("third-balochistan-war",[{href:"baloch-centralization-crisis.html",kicker:"Political cause",label:"Baloch Centralization Crisis"},{href:"baloch-grand-council.html",kicker:"Postwar institution",label:"Baloch Grand Council"},{href:"gwadar-special-port-charter.html",kicker:"Postwar settlement",label:"Gwadar Special Port Charter"}]);
}

appendUniqueBalochConfederalLinks("gwadar-transfer",[{href:"baloch-iranian-security-compact.html",kicker:"Parallel security settlement",label:"Baloch–Iranian Security Compact"},{href:"gwadar-special-port-charter.html",kicker:"Postwar successor",label:"Gwadar Special Port Charter"}]);
appendUniqueBalochConfederalLinks("gwadar",[{href:"baloch-confederal-customs-service.html",kicker:"Former national institution",label:"Baloch Confederal Customs Service"},{href:"gwadar-special-port-charter.html",kicker:"Present constitutional status",label:"Gwadar Special Port Charter"}]);
appendUniqueBalochConfederalLinks("makran",[{href:"baloch-centralization-crisis.html",kicker:"Confederal political crisis",label:"Baloch Centralization Crisis"}]);
appendUniqueBalochConfederalLinks("kharan",[{href:"baloch-centralization-crisis.html",kicker:"Confederal political crisis",label:"Baloch Centralization Crisis"}]);
appendUniqueBalochConfederalLinks("chagai",[{href:"baloch-centralization-crisis.html",kicker:"Confederal political crisis",label:"Baloch Centralization Crisis"},{href:"baloch-grand-council.html",kicker:"Postwar representation",label:"Baloch Grand Council"}]);
