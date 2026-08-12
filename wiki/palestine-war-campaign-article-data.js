window.deepArticles = window.deepArticles || {};

const firstPalestineWarSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Palestine"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Palestine War and Amman Settlement"},
  {href:"../transcript.md",label:"Master Transcript — Italy and the Middle East"},
  {href:"https://history.state.gov/milestones/1945-1952/arab-israeli-war",label:"U.S. Office of the Historian — 1948 Arab–Israeli War"},
  {href:"https://www.un.org/unispal/document/auto-insert-188971/",label:"United Nations — General Assembly Resolution 194 documentation"}
];

const firstPalestineWarArticle = config => ({
  category:"Middle East / Palestine War",
  sources:[...firstPalestineWarSources,...(config.primarySources || [])],
  categories:config.categories || ["Palestine War","Israel","Jordan","1940s"],
  landscape:{src:"assets/diagrams/palestine-war-to-amman-settlement.svg",alt:"Diagram tracing the Palestine War from Mandate collapse through communal war and neighboring intervention to the Amman Settlement",caption:"The archive fixes the war's causal sequence and territorial result; campaign lines and exact borders remain open."},
  ...config
});

Object.assign(window.deepArticles, {
  "mandate-palestine-collapse": firstPalestineWarArticle({
    title:"Collapse of Mandatory Palestine",
    eyebrow:"British withdrawal · 1947–1950",
    infoboxKicker:"End of the Palestine Mandate",
    lead:"The collapse of Mandatory Palestine was the administrative, security, and political disintegration that accompanied Britain's withdrawal between 1947 and 1950. German deportation and forced emigration produced a refugee movement larger than the Mandate could absorb, while Arab and Jewish institutions converted municipal, transport, food, and police disputes into a territorial war.",
    canon:"British exhaustion, mass Jewish refugee arrival, communal mobilization, arms imports, neighboring intervention, and the transition from withdrawal to war are canon. The final evacuation schedule, district-by-district transfer of authority, British casualties, and responsibility for particular local breakdowns remain open.",
    sections:[
      {id:"background",title:"Administrative background",html:"<p>The Mandate entered the postwar crisis with separate Jewish and Arab political institutions, an overextended police system, disputed immigration controls, and no accepted successor constitution. Municipal services, railways, ports, customs, land registration, courts, and food distribution still depended upon British authority even where local organizations supplied much of the labor.</p>"},
      {id:"refugees",title:"Refugee pressure",html:"<p><a href='jewish-refugee-migration-palestine.html'>Jewish flight from German Europe</a> altered the scale of the crisis. Legal certificates, clandestine landings, diverted ships, detention, sponsorship, and emergency housing became parts of one contested movement. New arrivals increased the population requiring protection and provisioning while supplying skilled labor and military-age recruits.</p>"},
      {id:"withdrawal",title:"British withdrawal",html:"<p>London treated Palestine as exposed within the post-Lisbon hierarchy. The Mediterranean base chain had been broken, reinforcement was expensive, and <a href='the-gulf-line.html'>the Gulf line</a> received priority. British authorities concentrated upon evacuation corridors, records, stores, ports, airfields, prisons, and the release or transfer of public facilities.</p>"},
      {id:"services",title:"Public services",html:"<p>Postal routes, rail movement, fuel allocation, municipal water, hospitals, courts, and food convoys fragmented by locality. Arab and Jewish committees took over some functions. Other districts lost neutral administration entirely, making access to a pump station, road junction, or warehouse a military question.</p>"},
      {id:"armed",title:"Communal armed organizations",html:"<p>Jewish defense bodies, Zionist undergrounds, Palestinian Arab formations, municipal guards, village groups, and foreign volunteers mobilized before the last British institutions departed. Arms arrived through clandestine shipping, neighboring borders, captured depots, commercial purchase, and improvised workshops.</p>"},
      {id:"intervention",title:"Neighboring intervention",html:"<p>Transjordan's <a href='arab-legion-palestine-war.html'>Arab Legion</a> became the most coherent Arab regular formation. Other neighboring governments supplied troops, aircraft, volunteers, routes, or political sponsorship. Their objectives did not always coincide with Palestinian national institutions or with Abdullah's Hashemite program.</p>"},
      {id:"jerusalem",title:"Jerusalem",html:"<p><a href='jerusalem-palestine-war.html'>Jerusalem</a> joined religious, political, and logistical problems in one theater. Control of roads and high ground affected civilian supply, while proposals for municipal neutrality, truce supervision, and international protection competed with military occupation.</p>"},
      {id:"outcome",title:"End of the Mandate order",html:"<p>The administrative collapse did not yield a single successor. Israel survived along the coast and western Galilee; Jordan incorporated the principal Arab territories under the <a href='amman-settlement.html'>Amman Settlement</a>. Refugee administration, blocked property, holy-place access, and residual British arrangements remained separate postwar systems.</p>"}
    ],
    related:[{href:"palestine-war.html",kicker:"Resulting conflict",label:"Palestine War"},{href:"jewish-refugee-migration-palestine.html",kicker:"Population movement",label:"Jewish Refugee Migration"},{href:"jerusalem-palestine-war.html",kicker:"Principal theater",label:"Jerusalem in the Palestine War"},{href:"amman-settlement-negotiations.html",kicker:"Political conclusion",label:"Amman Negotiations"},{href:"the-gulf-line.html",kicker:"British priority system",label:"The Gulf Line"}],
    facts:[["Period","1947–1950"],["Mandatory power","United Kingdom"],["Successor authorities","Israel and enlarged Jordan"],["Principal pressures","Refugees, communal mobilization, withdrawal, and intervention"],["Exact evacuation calendar","Open"]]
  }),

  "jewish-refugee-migration-palestine": firstPalestineWarArticle({
    title:"Jewish refugee migration to Palestine",
    eyebrow:"Forced migration · 1930s–1950",
    infoboxKicker:"Wartime and postwar population movement",
    lead:"Jewish refugee migration to Palestine was the movement of people expelled, released, or driven from German-controlled Europe before and after the Lisbon settlement. It enlarged the Jewish population during the final Mandate crisis and supplied Israel with survivors, families, technicians, physicians, organizers, and military-age recruits while imposing acute housing and food burdens.",
    canon:"German persecution and forced emigration, movement toward Palestine on a scale larger than Britain's administrative capacity, a mixture of legal and clandestine routes, and the migration's importance to Israel's survival are canon. Annual totals, ports of departure, detention policy, ship losses, and the proportion arriving before particular campaigns remain open.",
    sections:[
      {id:"causes",title:"Causes",html:"<p>German racial law, confiscation, deportation, labor policy, camp release, territorial transfers, and the destruction of ordinary citizenship drove movement. Some refugees possessed relatives or sponsorship in Palestine. Others chose the route because American, Commonwealth, and neutral destinations remained restricted or inaccessible.</p>"},
      {id:"routes",title:"Routes",html:"<p>Migration used licensed passenger traffic, relief charters, Mediterranean coastal shipping, forged documents, fishing craft, and overland stages. Routes changed as German, Italian, British, and local authorities altered inspection, transit, and port access.</p>"},
      {id:"british",title:"British controls",html:"<p>Mandate officials attempted to regulate entry through certificates, quotas, interdiction, detention, and deportation. The policy was uneven because naval capacity, port labor, local intelligence, humanitarian concern, and the approaching withdrawal did not operate under one stable command.</p>"},
      {id:"reception",title:"Reception and housing",html:"<p>Reception agencies assigned food, medical screening, temporary quarters, language instruction, work placement, and family tracing. Camps, collective farms, urban rooms, schools, and unfinished buildings absorbed arrivals. Crowding persisted after Israeli independence.</p>"},
      {id:"skills",title:"Labor and technical skills",html:"<p>Refugees entered construction, medicine, repair, workshops, transport, communications, agriculture, administration, and education. Their skills strengthened a small state; their need for imported grain, fuel, tools, and housing material deepened its foreign-exchange problem.</p>"},
      {id:"military",title:"Military effect",html:"<p>Military-age arrivals enlarged mobilization pools and brought European technical experience. Training, language, health, family separation, and equipment shortages limited immediate use. The relationship between rescue organizations and armed recruitment remained politically sensitive.</p>"},
      {id:"politics",title:"Political divisions",html:"<p>Labor-Zionist institutions emphasized organized reception and state control. Revisionist and underground networks treated unrestricted arrival and territorial expansion as inseparable. Religious sponsors abroad often understood rescue, settlement, and prophecy through different political frameworks.</p>"},
      {id:"legacy",title:"Postwar legacy",html:"<p>The migration helped create the reduced Israeli state described by the <a href='amman-settlement.html'>Amman Settlement</a>. It also left unresolved claims against German property, missing relatives, blocked European assets, and relief organizations that later became channels for <a href='american-christian-zionism.html'>American Christian-Zionist support</a>.</p>"}
    ],
    related:[{href:"mandate-palestine-collapse.html",kicker:"Receiving crisis",label:"Collapse of Mandatory Palestine"},{href:"israel.html",kicker:"Principal successor state",label:"State of Israel"},{href:"palestine-war.html",kicker:"Military context",label:"Palestine War"},{href:"american-christian-zionism.html",kicker:"Later relief system",label:"American Christian Zionism"},{href:"ss-racial-order.html",kicker:"Persecuting system",label:"SS Racial Order"}],
    facts:[["Main destination","Mandatory Palestine and Israel"],["Principal cause","German persecution, expulsion, and forced emigration"],["Routes","Licensed, clandestine maritime, and overland"],["State effect","Population and skilled labor; severe provisioning burden"],["Annual totals","Open"]]
  }),

  "arab-legion-palestine-war": firstPalestineWarArticle({
    title:"Arab Legion in the Palestine War",
    eyebrow:"Jordanian military history · 1947–1950",
    infoboxKicker:"Hashemite field force",
    lead:"The Arab Legion was Transjordan's British-trained regular army and the principal instrument of Hashemite expansion during the Palestine War. It secured Jerusalem, the Arab highlands, the Jordan Valley, and the approaches that became the military core of enlarged Jordan under the Amman Settlement.",
    canon:"The Legion's institutional coherence, British training and links, central role in Hashemite territorial gains, retention of Jerusalem and the highlands, and survival as Jordan's state-forming military institution are canon. Command appointments, brigade strengths, individual battles, casualties, and final deployment lines remain open.",
    sections:[
      {id:"organization",title:"Organization",html:"<p>The Legion combined regular battalions, mobile elements, artillery, signals, engineers, transport, gendarmerie functions, and British advisory support. Its payroll, communications, and staff procedures gave Abdullah a force more coherent than most local militias.</p>"},
      {id:"command",title:"Command and political authority",html:"<p>King Abdullah set the political object: control of Arab Palestine under Hashemite rule and denial of strategically dominant territory to Israel. British officers and advisers influenced planning, logistics, and restraint, but the force served the Jordanian crown rather than a unified Arab command.</p>"},
      {id:"entry",title:"Entry into Palestine",html:"<p>The Legion moved from Transjordan as British withdrawal ended and communal war widened. It concentrated where the highlands, Jerusalem approaches, Jordan crossings, and north–south roads could be held with limited mechanized resources.</p>"},
      {id:"jerusalem",title:"Jerusalem sector",html:"<p>In <a href='jerusalem-palestine-war.html'>Jerusalem</a>, the Legion defended Arab districts, the Old City, holy places, and eastern approaches while contesting the western road system. Dense construction, sacred sites, civilian supply, and foreign observers constrained the use of artillery and demolition.</p>"},
      {id:"highlands",title:"Highlands and valley",html:"<p>The central highlands supplied defensible ground, Arab towns, and routes between Nablus, Jerusalem, Bethlehem, and Hebron. Positions overlooking the coastal plain placed Israel's narrow core under continuing strategic pressure. The Jordan Valley connected the theater to East Bank supply.</p>"},
      {id:"coalition",title:"Relations with other Arab forces",html:"<p>Italy prevented Egyptian, Syrian, and Lebanese regular armies from joining the historical general invasion. The Legion instead dealt with Palestinian forces, Arab Liberation Army volunteers, and a bounded Egyptian security mission at Gaza. It coordinated locally while resisting schemes that would subordinate Abdullah's territorial program to an Arab revolutionary authority.</p>"},
      {id:"logistics",title:"British support and logistics",html:"<p>British finance, officers, communications, training, spares, and regional access remained important. London used that dependence to limit escalation and to preserve arrangements valuable to the wider <a href='the-gulf-line.html'>Gulf line</a>.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>The Legion became the coercive and administrative spine of enlarged Jordan. It guarded a kingdom containing a much larger Palestinian population and later absorbed the succession crisis following the <a href='assassination-abdullah-i.html'>assassination of Abdullah I</a>.</p>"}
    ],
    related:[{href:"jordan.html",kicker:"State formed",label:"Hashemite Kingdom of Jordan"},{href:"palestine-war.html",kicker:"Conflict",label:"Palestine War"},{href:"jerusalem-palestine-war.html",kicker:"Principal sector",label:"Jerusalem in the Palestine War"},{href:"amman-settlement.html",kicker:"Territorial result",label:"Amman Settlement"},{href:"second-israeli-jordanian-war.html",kicker:"Later test",label:"Second Israeli–Jordanian War"}],
    facts:[["State","Transjordan / Jordan"],["Commander-in-chief","King Abdullah I"],["Institutional character","British-trained regular army"],["Principal holdings","Jerusalem, Arab highlands, and Jordan Valley"],["Detailed order of battle","Open"]]
  }),

  "jerusalem-palestine-war": firstPalestineWarArticle({
    title:"Jerusalem during the Palestine War",
    eyebrow:"Urban theater · 1947–1950",
    infoboxKicker:"City, front, and holy-place regime",
    lead:"Jerusalem was the Palestine War's most politically charged urban theater. Arab and Jewish districts, the Old City, holy places, hospitals, water, roads, and foreign religious institutions made military control inseparable from civilian administration and international diplomacy.",
    canon:"Jordanian control of Jerusalem under the initial Amman order, guaranteed Christian access, conflict over roads and western districts, and continuing international concern are canon. Exact neighborhood lines, dates of local ceasefires, damage, garrisons, and the final pre-1951 municipal arrangements remain open.",
    primarySources:[{href:"https://history.state.gov/historicaldocuments/frus1948v05p2/d242",label:"U.S. Office of the Historian — proposed Jerusalem truce terms, May 1948"},{href:"https://www.un.org/unispal/document/auto-insert-210585/",label:"United Nations — proposed international regime for Jerusalem"}],
    sections:[
      {id:"geography",title:"Urban geography",html:"<p>The walled Old City, western Jewish districts, Arab neighborhoods, Mount Scopus institutions, roads toward Tel Aviv, Ramallah, Jericho, Bethlehem, and Hebron, and the surrounding ridges formed distinct military problems. Control of one road did not amount to control of the city.</p>"},
      {id:"communities",title:"Communities and institutions",html:"<p>Jewish and Arab community committees maintained food distribution, clinics, burial, shelters, and local security. Christian patriarchates, monasteries, schools, hospitals, diplomatic missions, and custodial bodies possessed property and international patrons.</p>"},
      {id:"supply",title:"Supply routes",html:"<p>Food, water, fuel, medicine, and personnel moved through corridors exposed to checkpoints, ambush, interdiction, and artillery observation. Convoy agreements and neutral inspection proposals attempted to separate essential supply from reinforcement.</p>"},
      {id:"fighting",title:"Military control",html:"<p>Jewish formations held and contested western districts and access from the coastal state. The <a href='arab-legion-palestine-war.html'>Arab Legion</a> held the Old City, Arab districts, and eastern and southern approaches. The archive leaves the sequence of neighborhood fighting and the initial terminal line open.</p>"},
      {id:"holy",title:"Holy places",html:"<p>Damage to or exclusion from a major sanctuary risked widening the war. Custodianship, worship schedules, pilgrim access, clergy movement, repairs, and armed presence were therefore subjects of separate guarantees rather than ordinary municipal regulation.</p>"},
      {id:"international",title:"International proposals",html:"<p>British, United Nations, Vatican, American, and regional proposals included ceasefires, neutral municipal administration, demilitarization, observation, and a special international regime. None displaced the military authorities that controlled access on the ground.</p>"},
      {id:"amman",title:"Amman Settlement",html:"<p>The <a href='amman-settlement-negotiations.html'>Amman negotiations</a> placed Jerusalem within enlarged Jordan and guaranteed access to Christian holy places. This was a practical territorial settlement rather than universal recognition of Jordanian sovereignty or abandonment of international claims.</p>"},
      {id:"revision",title:"Later revision",html:"<p>The city's division remained a cause of the <a href='second-israeli-jordanian-war.html'>Second Israeli–Jordanian War</a>. Israel later obtained western Jerusalem and a more defensible road corridor, while Jordan retained the Old City and principal Arab highlands.</p>"}
    ],
    related:[{href:"palestine-war.html",kicker:"Conflict",label:"Palestine War"},{href:"arab-legion-palestine-war.html",kicker:"Jordanian force",label:"Arab Legion"},{href:"amman-settlement.html",kicker:"Initial legal order",label:"Amman Settlement"},{href:"catholic-church.html",kicker:"Religious diplomacy",label:"Catholic Church"},{href:"second-israeli-jordanian-war.html",kicker:"Territorial revision",label:"Second Israeli–Jordanian War"}],
    facts:[["Period","1947–1950"],["Initial postwar control","Jordanian under the Amman order"],["Protected interest","Christian holy-place access"],["Principal logistical issue","Road and essential-supply corridors"],["Exact district line","Open"]]
  }),

  "palestinian-displacement-1947-1950": firstPalestineWarArticle({
    title:"Palestinian displacement, 1947–1950",
    eyebrow:"Refugee history · Palestine War",
    infoboxKicker:"Arab civilian displacement",
    lead:"Palestinian displacement during the Palestine War was the movement of Arab civilians away from districts that became Israel, active fronts, besieged towns, and insecure transport corridors. The Amman Settlement placed many displaced people within enlarged Jordan, while others remained separated from homes, land, shops, accounts, and municipal records by the new border.",
    canon:"Large-scale Arab displacement, Jordan's absorption of a substantial Palestinian population, blocked property and return claims, and the displacement's destabilizing effect upon Hashemite rule are canon. Totals, locality lists, precise causes of individual movements, return rates, camp geography, and compensation schedules remain open.",
    sections:[
      {id:"causes",title:"Causes of flight",html:"<p>Civilians left because of combat, anticipated attack, expulsion, local collapse, food shortage, family evacuation, orders by authorities, rumor, and the loss of roads or employment. The archive does not assign one cause to every locality.</p>"},
      {id:"directions",title:"Directions of movement",html:"<p>Movement ran toward Arab-held highlands, Jerusalem, Gaza, the Jordan Valley, the East Bank, Lebanon, Syria, and other neighboring districts. Some journeys were short and repeated. Others crossed a line that became impassable after the settlement.</p>"},
      {id:"relief",title:"Relief and registration",html:"<p>Municipal bodies, families, religious institutions, Arab governments, international agencies, and voluntary committees supplied food, shelter, medicine, and registration. Definitions of refugee status affected rations, property claims, and eligibility for return or compensation.</p>"},
      {id:"property",title:"Property and records",html:"<p>Houses, farms, shops, tenancy, mortgages, bank accounts, tax files, land registries, and movable goods did not follow their owners. Israel treated much property as abandoned or security-controlled. Claimants and Jordanian authorities preserved documents for later negotiation.</p>"},
      {id:"jordan",title:"Enlarged Jordan",html:"<p>Jordan acquired territory and population together. Palestinian towns, professionals, merchants, farmers, refugees, and political organizations changed the kingdom's electorate, bureaucracy, economy, and army. Hashemite annexation did not erase Palestinian national claims.</p>"},
      {id:"israel",title:"Arab communities in Israel",html:"<p>Arab residents who remained inside the reduced Israeli state lived under security controls shaped by mobilization and disputed loyalty. Movement permits, land access, family reunion, municipal authority, and property classification varied by district.</p>"},
      {id:"settlement",title:"Treatment under the Amman order",html:"<p>The <a href='amman-settlement.html'>Amman Settlement</a> stopped the main war without settling return, restitution, compensation, citizenship, or border crossing. These questions continued through mixed committees, relief administration, smuggling, petitions, and frontier incidents.</p>"},
      {id:"legacy",title:"Political legacy",html:"<p>Displacement weakened claims that the new border represented a final national division. It also supplied anti-Hashemite movements with constituencies and grievances that shaped Abdullah's assassination and the renewed Israeli–Jordanian conflict.</p>"}
    ],
    related:[{href:"palestine-war.html",kicker:"Originating conflict",label:"Palestine War"},{href:"amman-settlement.html",kicker:"Incomplete settlement",label:"Amman Settlement"},{href:"jordan.html",kicker:"Principal receiving state",label:"Hashemite Kingdom of Jordan"},{href:"israel.html",kicker:"Property-controlling state",label:"State of Israel"},{href:"assassination-abdullah-i.html",kicker:"Political consequence",label:"Assassination of Abdullah I"}],
    facts:[["Period","1947–1950"],["Population","Palestinian Arabs"],["Principal receiving polity","Enlarged Jordan"],["Unresolved questions","Return, property, compensation, and citizenship"],["Total displaced","Open"]]
  }),

  "amman-settlement-negotiations": firstPalestineWarArticle({
    title:"Negotiation of the Amman Settlement",
    eyebrow:"Ceasefire diplomacy · c. 1949–1951",
    infoboxKicker:"End of the first Palestine War",
    lead:"The negotiation of the Amman Settlement was the series of military, royal, British, religious, and local arrangements that ended the main Palestine War. It recognized a reduced coastal Israel and an enlarged Hashemite Jordan while separating territorial control from holy-place access, British security relationships, refugee claims, and several unresolved border questions.",
    canon:"Amman as the working settlement, the broad Israeli and Jordanian territorial outcome, Christian access guarantees, continuing British security, air, communications, and transit arrangements, and the settlement's provisional character are canon. Signatories, conference sessions, legal form, maps, implementation commissions, and the possible British Haifa facility remain open.",
    sections:[
      {id:"conditions",title:"Conditions for negotiation",html:"<p>By the end of the main fighting, neither side could obtain its complete territorial program at acceptable cost. Israel held a viable but narrow coastal state. Jordan possessed the Arab highlands, Jerusalem, the valley, Gaza, and southern territory whose administration required money and troops.</p>"},
      {id:"parties",title:"Parties and intermediaries",html:"<p>Abdullah's court, Israeli authorities, Arab Legion officers, British representatives, Palestinian notables, Christian custodians, and international observers negotiated different parts of the order. Other Arab governments objected to Hashemite annexation or refused to treat bilateral arrangements as a final peace.</p>"},
      {id:"territory",title:"Territorial formula",html:"<p>Israel retained the Tel Aviv–Haifa corridor and part of western Galilee. Jordan controlled Jerusalem, the Arab highlands, the Jordan Valley, Gaza, and most or all of the Negev. Exact lines, enclaves, road rights, and district assignments remain working details.</p>"},
      {id:"security",title:"Security clauses",html:"<p>The order required ceasefire supervision, limits on movement across sensitive lines, control of armed groups, road and convoy arrangements, and procedures for local incidents. It did not create a unified command or a normalized open border.</p>"},
      {id:"british",title:"British arrangements",html:"<p>Britain retained relationships in security, air access, communications, training, finance, and transit through Jordan. A possible residual facility near Haifa remains open in the canon and should not be treated as established.</p>"},
      {id:"holy",title:"Holy places and access",html:"<p>Christian holy-place guarantees covered clergy, pilgrims, custodians, repairs, property, worship, and access routes. The guarantees gave Italy, the Holy See, Britain, and other external actors continuing grounds for intervention without transferring ordinary sovereignty over the whole city.</p>"},
      {id:"refugees",title:"Refugees and property",html:"<p><a href='palestinian-displacement-1947-1950.html'>Return, compensation, blocked property, family reunion, and citizenship</a> were not resolved by the territorial bargain. Relief and claims administration continued separately, leaving the frontier populated by legal and personal disputes.</p>"},
      {id:"implementation",title:"Implementation",html:"<p>Jordan integrated Arab Palestine into a Hashemite kingdom and deployed the Arab Legion across the new territory. Israel organized a permanently mobilized coastal state. Mixed contacts, foreign pressure, and local arrangements kept the order functioning until Abdullah's assassination reopened the security crisis.</p>"},
      {id:"status",title:"Legal and historical status",html:"<p>The settlement ended a war; it did not reconcile national programs. Israel regarded the narrow border as dangerous. Palestinian opponents rejected Hashemite incorporation. Jordan treated possession, administration, and royal legitimacy as sufficient grounds for continuity.</p>"}
    ],
    related:[{href:"amman-settlement.html",kicker:"Settlement overview",label:"Amman Settlement"},{href:"palestine-war.html",kicker:"Ended conflict",label:"Palestine War"},{href:"jerusalem-palestine-war.html",kicker:"Special regime",label:"Jerusalem in the Palestine War"},{href:"palestinian-displacement-1947-1950.html",kicker:"Unresolved question",label:"Palestinian Displacement"},{href:"second-israeli-jordanian-war.html",kicker:"First major challenge",label:"Second Israeli–Jordanian War"}],
    facts:[["Period","c. 1949–1951"],["Political center","Amman"],["Israeli core","Tel Aviv–Haifa corridor and western Galilee"],["Jordanian core","Jerusalem, highlands, valley, Gaza, and southern territory"],["Final peace treaty","No"],["Exact text and map","Open"]]
  })
});

const addFirstPalestineWarRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const item of [...items].reverse()) if (!article.related.some(entry => entry.href === item.href)) article.related.unshift(item);
};

addFirstPalestineWarRelated("palestine-war",[
  {href:"mandate-palestine-collapse.html",kicker:"Opening breakdown",label:"Collapse of Mandatory Palestine"},
  {href:"arab-legion-palestine-war.html",kicker:"Principal Arab regular force",label:"Arab Legion in the Palestine War"},
  {href:"palestinian-displacement-1947-1950.html",kicker:"Civilian consequence",label:"Palestinian Displacement"}
]);
addFirstPalestineWarRelated("amman-settlement",[
  {href:"amman-settlement-negotiations.html",kicker:"Diplomatic history",label:"Negotiation of the Amman Settlement"},
  {href:"jerusalem-palestine-war.html",kicker:"Principal special regime",label:"Jerusalem in the Palestine War"}
]);
addFirstPalestineWarRelated("israel",[{href:"jewish-refugee-migration-palestine.html",kicker:"Founding population movement",label:"Jewish Refugee Migration to Palestine"}]);
addFirstPalestineWarRelated("jordan",[{href:"arab-legion-palestine-war.html",kicker:"State-forming army",label:"Arab Legion in the Palestine War"}]);
