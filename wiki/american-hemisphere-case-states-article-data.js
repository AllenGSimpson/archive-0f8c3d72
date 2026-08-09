window.deepArticles = window.deepArticles || {};

const hemisphereCaseSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — American hemispheric policy and continental order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Honduras, Venezuela, and the Japanese–Peruvian bridgehead"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — unresolved governments and treaty limits"},
  {href:"../transcript.md",label:"Master Transcript — hemispheric intervention, oil security, and Pacific competition"}
];

const hemisphereCountry = config => ({
  category:"Countries",
  ...config,
  sources:hemisphereCaseSources,
  categories:[config.title,"American Hemisphere",...(config.categories || [])]
});

Object.assign(window.deepArticles, {
  colombia: hemisphereCountry({
    title:"Republic of Colombia",
    eyebrow:"National Compact · contested security republic · American Hemisphere",
    infoboxKicker:"Sovereign state in northern South America",
    infoboxTitle:"Republic of Colombia",
    flag:{src:"assets/flags/colombia.svg",alt:"Flag of Colombia",caption:"National flag of the Republic of Colombia"},
    lead:"Colombia is a sovereign northern South American republic principally associated with the American Hemisphere by 1985. The National Compact contains but does not end La Violencia, while mountain geography, two-ocean access, the approaches to Panama, and persistent regional and agrarian insurgencies make internal security the organizing problem of the state.",
    canon:"The National Compact, survival of La Violencia in altered form, non-Soviet regional and criminal war economies, American security association, and continued German, Latin, and commercial competition are established. The compact’s formal name, leaders, exact constitutional sequence, guerrilla organizations, and settlement dates remain open.",
    sections:[
      {id:"geography",title:"Geography and strategic position",html:"<p>Colombia joins Caribbean ports, a Pacific coast, highland population centers, frontier lowlands, and the overland approaches to <a href='panama.html'>Panama</a>. Mountain barriers protect regional societies while making national transport, communications, and military concentration difficult.</p><p>Washington values the country less as a platform for distant power projection than as a shield for the Canal approaches and the northern Caribbean security corridor.</p>"},
      {id:"compact",title:"The National Compact",html:"<p>The <a href='colombian-national-compact.html'>National Compact</a> restores a governing bargain among established civilian elites after the worst phase of <em>La Violencia</em>. It distributes offices, recognizes shared responsibility for preserving the republic, and narrows the possibility that any faction can invite a foreign patron to settle domestic politics.</p><p>The bargain contains open elite conflict without resolving land, regional exclusion, police violence, or the legitimacy of a political system whose stability depends upon controlled participation.</p>"},
      {id:"violence",title:"La Violencia after the compact",html:"<p>Rural war does not disappear when the national parties reach an agreement. Armed groups survive through local protection, agrarian disputes, smuggling, kidnapping, informal taxation, and criminal markets. Their development follows Colombian regional conditions rather than direction from a defeated Soviet center.</p><p>Government officials consequently describe many conflicts as banditry or internal security, while opposition communities treat the same campaigns as political and social war.</p>"},
      {id:"government",title:"Government and political order",html:"<p>Colombia remains a formally constitutional republic with civilian institutions, elections, courts, departments, and a professional officer corps. Emergency law and security administration nevertheless give the executive, police, and armed forces exceptional influence in contested regions.</p><p>The exact evolution of the National Compact and its later governments remains unsettled in the public chronology.</p>"},
      {id:"economy",title:"Economy and infrastructure",html:"<p>Agriculture, oil, mining, manufacturing, river traffic, Caribbean shipping, and Pacific access make Colombia more diversified than a single-export client. Roads, aviation, telecommunications, and port development are strategic because they extend the state into terrain where geography has historically favored local power.</p><p>American markets and finance predominate, while European and Latin firms provide politically sensitive alternatives in engineering, transport, energy, and communications.</p>"},
      {id:"foreign",title:"Foreign relations",html:"<p>American assistance, intelligence cooperation, trade, and diplomatic support make Washington the principal external partner by 1985. The relationship stops short of the intervention settlements imposed upon <a href='honduras.html'>Honduras</a> and <a href='venezuela.html'>Venezuela</a>.</p><p>Spanish and wider Latin-bloc cultural diplomacy retain influence among Catholic, professional, and conservative networks. German commerce and military technology are tolerated until technicians approach ports, airfields, communications, or other infrastructure Washington classifies as strategic.</p>"},
      {id:"security",title:"Armed forces and internal security",html:"<p>Mountain warfare, dispersed garrisons, aviation, river and coastal patrol, signals intelligence, and mobile light forces matter more than large armored formations. American training and equipment strengthen the central government but also associate foreign aid with emergency rule and counterinsurgency.</p><p>The guerrillas’ regional, agrarian, and criminal foundations prevent a single decisive campaign from ending the conflict.</p>"},
      {id:"society",title:"Society and contested legitimacy",html:"<p>Regional identity, unequal landholding, urban growth, Catholic institutions, labor organization, and displacement shape political life. Civilian lawyers, journalists, clergy, unions, and local notables remain part of the national argument even where security officials dominate administration.</p><p>Some Colombian elites join Venezuelan and Uruguayan critics in warning against replacing traditional caudillismo with technically modernized authoritarianism.</p>"},
      {id:"position",title:"Colombia in 1985",html:"<p>The <a href='american-hemisphere.html'>1985 alignment chart</a> classifies Colombia as an American-associated security state. The designation records the partner that most strongly shapes defense and foreign policy; it does not make Colombia a protectorate or eliminate its Latin cultural and European commercial relationships.</p>"}
    ],
    related:[
      {href:"american-hemisphere.html",kicker:"Regional order",label:"American Hemisphere"},
      {href:"panama.html",kicker:"Strategic neighbor",label:"Republic of Panama"},
      {href:"venezuela.html",kicker:"Northern South America",label:"Republic of Venezuela"},
      {href:"peru.html",kicker:"Pacific competitor",label:"Republic of Peru"},
      {href:"hemispheric-renewal-act.html",kicker:"American doctrine",label:"Hemispheric Renewal Act"},
      {href:"latin-bloc.html",kicker:"Cultural competitor",label:"Latin Bloc"}
    ],
    facts:[["Capital","Bogotá"],["State form","Sovereign constitutional republic"],["Political settlement","National Compact"],["1985 alignment","American Hemisphere-associated"],["Security condition","Persistent regional and agrarian insurgencies"],["Principal external partner","United States"],["Strategic approaches","Caribbean, Pacific, and Panama"],["Principal economic sectors","Agriculture, oil, mining, and manufacturing"],["Military emphasis","Mobile internal-security and light forces"],["Foreign competition","American, German, and Latin networks"],["Formal protectorate status","None"],["Detailed leadership chronology","Open"]],
    categories:["Colombia","National Compact","Internal conflicts"]
  }),

  honduras: hemisphereCountry({
    title:"Republic of Honduras",
    eyebrow:"American client republic · Central American security corridor",
    infoboxKicker:"Formally sovereign American-associated state",
    infoboxTitle:"Republic of Honduras",
    flag:{src:"assets/flags/honduras.svg",alt:"Flag of Honduras",caption:"National flag retained before and after the 1962 intervention"},
    lead:"Honduras is the closest American client republic in the hemisphere by 1985. The United States’ rapid victory in the 1962 Honduran Security Crisis preserves a Honduran flag, constitution, ministries, and elections while making leadership viability, strategic communications, defense policy, and major foreign agreements dependent upon Washington.",
    canon:"The national-corporatist government, 1962 constitutional crisis and American intervention, rapid campaign, dependent successor order, and near-puppet status are established. Honduran leaders, unit designations, exact dates, casualties, constitutional instruments, and later election chronology remain open.",
    sections:[
      {id:"background",title:"The national-corporatist experiment",html:"<p>Unstable civil-military politics, foreign fruit interests, labor conflict, and resentment of external economic control produce a government sympathetic to corporatist political forms. Its emergency powers, proposed corporate charter, and technical-security contacts with Germany and the <a href='latin-bloc.html'>Latin Bloc</a> place domestic constitutional conflict inside the wider struggle over hemispheric alignment.</p>"},
      {id:"crisis",title:"The 1962 Security Crisis",html:"<p>Opposition officers, judges, labor organizations, and established parties resist the emergency program. President Kennedy declares the incumbent government illegitimate and orders intervention under the public formula of restoring constitutional order.</p><p>The strategic purpose is the removal of a rival-aligned regime before foreign personnel, communications, and military systems can make American action costly. The full campaign is treated in the <a href='honduran-security-crisis.html'>Honduran Security Crisis</a>.</p>"},
      {id:"campaign",title:"Intervention and rapid collapse",html:"<p>Marines, light armor, tracked carriers, airborne or air-landed forces, naval blockade, radio seizures, local opposition officers, and immediate recognition of a provisional authority collapse the incumbent command system. Honduras is close to American bases and beyond practical German or Latin-bloc reinforcement without direct great-power war.</p>"},
      {id:"government",title:"The dependent republic",html:"<p>Post-crisis governments retain ordinary republican forms and exercise real authority over municipal, social, and much economic administration. Their freedom narrows sharply wherever an appointment, agreement, or political movement touches intelligence, defense, bases, foreign missions, or the continuity of the American relationship.</p><p>Honduras is therefore not legally annexed, but its external sovereignty is substantially nominal.</p>"},
      {id:"economy",title:"Economy and development",html:"<p>Agriculture, foreign companies, customs revenue, infrastructure, aid, and access agreements bind the economy to the United States. Roads, airfields, communications, and public services serve genuine Honduran needs while also sustaining the security corridor.</p><p>Opponents argue that development cannot be separated from the coercive settlement that determines which foreign capital and political coalitions are permissible.</p>"},
      {id:"security",title:"Security institutions",html:"<p>American advisers, intelligence links, communications, air access, training, and officer relationships shape the armed forces and police. Honduran units conduct local operations under a strategic framework set in Washington, with internal dissent and neighboring instability treated as parts of one regional security problem.</p>"},
      {id:"region",title:"Central American role",html:"<p>Honduras becomes a logistics and intelligence node for policy toward Guatemala, El Salvador, Nicaragua, and the western Caribbean. Its territory supports surveillance, transport, liaison, and contingency planning even when American forces are not conducting an open campaign.</p><p>This position makes the country more important to Washington than its economic scale alone would suggest.</p>"},
      {id:"legitimacy",title:"Politics and legitimacy",html:"<p>Supporters credit the post-1962 order with preventing foreign penetration and stabilizing institutions. Opponents hold that elections conducted inside American security boundaries cannot restore the sovereignty removed by intervention.</p><p>Every later succession therefore raises two questions: whether it is constitutional under Honduran law and whether it is acceptable to the United States.</p>"},
      {id:"legacy",title:"The Honduran precedent",html:"<p>Washington learns that an early operation against a small, nearby, divided state can create a durable client where the distant <a href='philippine-war.html'>Philippine intervention</a> failed. The success encourages the larger and bloodier <a href='venezuelan-intervention.html'>Venezuelan intervention</a> four years later.</p>"},
      {id:"position",title:"Honduras in 1985",html:"<p>The <a href='american-hemisphere.html'>1985 alignment chart</a> describes Honduras as a near-puppet state in the American Hemisphere. It is the clearest case in which Washington maintains an imperial relationship while rejecting the legal vocabulary of protectorate or possession.</p>"}
    ],
    related:[
      {href:"honduran-security-crisis.html",kicker:"Defining event",label:"Honduran Security Crisis"},
      {href:"american-hemisphere.html",kicker:"Regional system",label:"American Hemisphere"},
      {href:"hemispheric-renewal-act.html",kicker:"American doctrine",label:"Hemispheric Renewal Act"},
      {href:"united-states.html",kicker:"Principal patron",label:"United States"},
      {href:"nicaragua.html",kicker:"Contested neighbor",label:"Republic of Nicaragua"},
      {href:"guatemala.html",kicker:"Northern corridor",label:"Republic of Guatemala"},
      {href:"el-salvador.html",kicker:"Western neighbor",label:"Republic of El Salvador"},
      {href:"venezuelan-intervention.html",kicker:"Later intervention",label:"Venezuelan Intervention"},
      {href:"philippine-war.html",kicker:"Doctrinal contrast",label:"Philippine War"}
    ],
    facts:[["Capital","Tegucigalpa"],["State form","Formally sovereign republic"],["Defining crisis","Honduran Security Crisis"],["American intervention","1962"],["1985 alignment","American Hemisphere client"],["Practical status","Near-puppet state"],["Principal patron","United States"],["Public intervention claim","Restoration of constitutional order"],["Strategic role","Central American logistics and intelligence node"],["Foreign military policy","Subject to American approval"],["National flag and ministries","Retained"],["Detailed post-crisis chronology","Open"]],
    categories:["Honduras","American client states","1962 intervention"]
  }),

  venezuela: hemisphereCountry({
    title:"Republic of Venezuela",
    eyebrow:"Oil security republic · conditional sovereignty · American Hemisphere",
    infoboxKicker:"Sovereign republic under the Caracas security order",
    infoboxTitle:"Republic of Venezuela",
    flag:{src:"assets/flags/venezuela.svg",alt:"Flag of Venezuela",caption:"National flag of the Republic of Venezuela"},
    lead:"Venezuela is an oil republic whose 1963–1966 concession crisis ends in American military intervention and the Caracas Security Settlement. Elections and national institutions survive, but American review of foreign oil agreements, strategic communications, defense ministries, and naval and air access makes sovereignty conditional wherever Washington identifies an extra-hemispheric threat.",
    canon:"Pérez Jiménez modernization, civilian restoration, the 1963–1966 concession crisis, American intervention, Maracaibo losses, strategic occupation, Caracas Security Settlement, and later security-republic status are established. Exact leaders after restoration, operational dates, most casualties, party sequence, and treaty articles remain open.",
    sections:[
      {id:"oil",title:"Oil and the Caribbean state",html:"<p>Petroleum dominates revenue, export infrastructure, foreign investment, labor politics, and relations with the United States. Caribbean terminals, refineries, pipelines, airfields, and communications make control of the oil economy inseparable from the strategic position of northern South America.</p><p>Revenue permits rapid modernization while concentrating political struggle around who may operate, protect, and profit from the petroleum system.</p>"},
      {id:"modernization",title:"From Pérez Jiménez to civilian restoration",html:"<p>The Pérez Jiménez period associates modernization with authoritarian order, public works, military prestige, and oil income. Civilian restoration broadens political participation without removing officer influence, dependence upon export earnings, or the argument that national development requires a strong executive.</p>"},
      {id:"concession",title:"The 1963–1966 concession crisis",html:"<p>A German–Japanese consortium offers extraction, refining, pipelines, communications, and technical training in exchange for a defined production share. Nationalists present the arrangement as a means to recover control from established American firms.</p><p>Washington interprets foreign technicians and protected systems around oil, ports, and airfields as strategic penetration rather than ordinary commerce.</p>"},
      {id:"intervention",title:"The 1966 intervention",html:"<p>American aircraft, naval forces, Marines, airborne units, intelligence teams, and Venezuelan collaborators seize coastal approaches and isolate the central government. Unlike Honduras, Venezuelan forces resist with modern foreign-supported systems and impose serious losses.</p><p>The wider campaign is covered in the <a href='venezuelan-intervention.html'>Venezuelan Intervention</a>.</p>"},
      {id:"maracaibo",title:"The Maracaibo Shock",html:"<p>German-designed integrated radar and surface-to-air defenses destroy two B-58 bombers and a suppression aircraft near Maracaibo. The <a href='maracaibo-shock.html'>Maracaibo Shock</a> does not reverse the ground campaign, but it ends the belief that premier American aircraft can rely upon speed and altitude for permanent safety.</p>"},
      {id:"settlement",title:"The Caracas Security Settlement",html:"<p>American forces occupy airfields, coastal oil terminals, refineries, command centers, and communications before transferring visible authority to a provisional Venezuelan government. The settlement restores electoral institutions while reserving American review of foreign oil operating agreements, defense and intelligence advisers, strategic communications, naval and air access, and renewed intervention against rival penetration.</p>"},
      {id:"government",title:"The security republic",html:"<p>Later governments are Venezuelan in law, staffing, and political identity. They retain more room for domestic and commercial conflict than the client order in Honduras, but the security settlement fixes boundaries no successful government can ignore.</p><p>Politics repeatedly turns on collaboration, the legitimacy of the intervention, and whether elections can validate restrictions imposed by foreign force.</p>"},
      {id:"economy",title:"Petroleum economy and social change",html:"<p>Oil income finances urban growth, infrastructure, imports, administration, and armed forces while exposing the state to price, concession, and market pressure. American capital remains central after the settlement; nationalist and European alternatives survive as political aspirations or carefully limited commercial relationships.</p>"},
      {id:"security",title:"Defense and intelligence",html:"<p>American assistance shapes intelligence, air and maritime surveillance, officer relations, communications security, and protection of petroleum infrastructure. National forces retain Venezuelan command in ordinary operations, but extra-hemispheric military access is treated as a trigger for American review.</p>"},
      {id:"position",title:"Venezuela in 1985",html:"<p>The <a href='american-hemisphere.html'>1985 alignment chart</a> classifies Venezuela as an American-aligned intervention state. It is less completely controlled than Honduras, more coercively bound than Colombia, and strategically indispensable because of its oil and Caribbean position.</p>"}
    ],
    related:[
      {href:"venezuelan-intervention.html",kicker:"Defining conflict",label:"Venezuelan Intervention"},
      {href:"maracaibo-shock.html",kicker:"Aerospace engagement",label:"Maracaibo Shock"},
      {href:"american-hemisphere.html",kicker:"Regional order",label:"American Hemisphere"},
      {href:"united-states.html",kicker:"Principal patron",label:"United States"},
      {href:"colombia.html",kicker:"Strategic neighbor",label:"Republic of Colombia"},
      {href:"hemispheric-renewal-act.html",kicker:"American doctrine",label:"Hemispheric Renewal Act"},
      {href:"military-technology.html",kicker:"Technical consequence",label:"Military Technology"}
    ],
    facts:[["Capital","Caracas"],["State form","Electoral security republic"],["Defining resource","Petroleum"],["Concession crisis","1963–1966"],["American intervention","1966"],["Major engagement","Maracaibo Shock"],["Political settlement","Caracas Security Settlement"],["1985 alignment","American Hemisphere"],["Practical status","Conditional sovereignty"],["Principal external partner","United States"],["Strategic assets","Oil fields, refineries, ports, and Caribbean access"],["Detailed postwar leadership sequence","Open"]],
    categories:["Venezuela","Oil politics","American intervention"]
  }),

  peru: hemisphereCountry({
    title:"Republic of Peru",
    eyebrow:"Military-developmental republic · GEACPS-associated Pacific state",
    infoboxKicker:"Sovereign state on the South American Pacific",
    infoboxTitle:"Republic of Peru",
    flag:{src:"assets/flags/peru.svg",alt:"Flag of Peru",caption:"National flag of the Republic of Peru"},
    lead:"Peru is Japan’s principal partner and strategic foothold in the American Hemisphere by 1985. A military-developmental republic uses Japanese shipping, fisheries, mineral contracts, technical missions, finished military equipment, and access at Samanco–Chimbote to diversify away from American dependence without entering Japan’s constitutional imperial order.",
    canon:"Peru’s military-developmental order, principal GEACPS alignment, Japanese commercial and arms relationship, Samanco–Chimbote complex, 1981 crisis, and insistence upon formal sovereignty are established. Leaders, constitutional sequence, exact treaty titles, permanent-force ceilings, and the complete legal status of Samanco remain open.",
    sections:[
      {id:"geography",title:"Geography and the Pacific orientation",html:"<p>Peru combines a long Pacific coast, major ports, fisheries, mineral corridors, highland populations, and difficult internal transport. Maritime trade and coastal industry can modernize the state while leaving deep regional inequalities unresolved.</p><p>Its location gives Japan an eastern Pacific partner and gives Lima a great-power relationship not routed through Washington.</p>"},
      {id:"government",title:"The military-developmental state",html:"<p>Officers, civilian ministries, state enterprises, exporters, and regional commands direct ports, mining, fisheries, steel, transport, and procurement as parts of one national-development program. The order is authoritarian but does not reduce every economic institution to military command.</p><p>The political system is examined separately in the <a href='peruvian-military-developmental-state.html'>Peruvian Military-Developmental State</a>.</p>"},
      {id:"relations",title:"Relations with Japan",html:"<p>An established Japanese-Peruvian community, preserved from wartime deportation in a world without a Japanese–American war, gives the postwar relationship social and commercial depth. From the late 1960s, Tokyo supplies shipping, technical missions, machinery, markets, training, communications, and selective naval access.</p><p><a href='japanese-peruvian-relations.html'>Japan–Peru relations</a> are a negotiated partnership rather than colonial administration.</p>"},
      {id:"economy",title:"Economy and development corridors",html:"<p>Mining, fisheries, agriculture, steel, ports, and Pacific shipping attract Japanese finance, equipment, and markets. Investment concentrates along coastal export corridors and in transport and communications connecting them to the interior.</p><p>Growth strengthens the developmental state while preserving dependence upon commodity exports, imported advanced systems, and foreign markets.</p>"},
      {id:"samanco",title:"The Samanco–Chimbote complex",html:"<p><a href='chimbote-industrial-port.html'>Chimbote</a> supplies commercial shipping, fisheries, steel, labor, repair, customs, and logistics. The Peruvian-owned <a href='samanco-pacific-maritime-complex.html'>Samanco Pacific Maritime Complex</a> to the south provides less visible repair, replenishment, training, signals, weather, rescue, and rotational Japanese access.</p><p>The combined <a href='samanco-chimbote-complex.html'>dual complex</a> is the physical center of Peru’s contested Pacific alignment.</p>"},
      {id:"arms",title:"Armed forces and procurement",html:"<p>Japan exports finished land, maritime, air-defense, radar, and communications equipment suited to Peru’s coast and mountain geography. Peruvian workshops maintain and rebuild imports but do not receive the advanced design authority, engine industry, or complete licensed production granted nowhere in the relationship.</p><p>The arrangement makes Peru a substantial customer and technical partner rather than a Japanese arsenal abroad.</p>"},
      {id:"sovereignty",title:"Nationalism and sovereignty",html:"<p>Lima defends its right to receive Japanese ships against the American Monroe claim and its right to command facilities and inspect foreign cargo against Japanese privilege. Both positions express the same doctrine: foreign relationships are legitimate only as instruments of Peruvian power.</p><p>The Peruvian flag, command, land title, fixed defenses, and police authority distinguish Samanco from a sovereign Japanese enclave.</p>"},
      {id:"crisis",title:"The Samanco Crisis of 1981",html:"<p>Runway expansion, a Japanese submarine visit, anti-ship weapons, and hardened communications lead the United States to conclude that Samanco is becoming permanent carrier and fleet support. American exercises, Japanese deployments, Philippine mobilization, and Peruvian alerts create a three-power confrontation.</p><p>The <a href='samanco-crisis-1981.html'>crisis</a> ends without general war and preserves some Japanese access, while leaving the permanent-force limits and legal ceilings deliberately unsettled.</p>"},
      {id:"society",title:"Society and opposition",html:"<p>Labor, regional, civilian constitutional, Catholic, indigenous, export, and officer groups contest repression, land, foreign concessions, and development priorities. Japanese alignment does not erase Peruvian politics, and the concentration of coastal investment sharpens debate over who benefits from national modernization.</p>"},
      {id:"position",title:"Peru in 1985",html:"<p>The <a href='american-hemisphere.html'>1985 alignment chart</a> places Peru principally with GEACPS because Japan most strongly shapes its Pacific trade, military supply, and strategic access. Peru remains a sovereign republic outside the Japanese imperial constitution and reserves the right to resist both American coercion and Japanese overreach.</p>"}
    ],
    related:[
      {href:"japanese-peruvian-relations.html",kicker:"Principal foreign relationship",label:"Japan–Peru Relations"},
      {href:"peruvian-military-developmental-state.html",kicker:"Political system",label:"Peruvian Military-Developmental State"},
      {href:"samanco-chimbote-complex.html",kicker:"Strategic corridor",label:"Samanco–Chimbote Complex"},
      {href:"japanese-arms-trade-peru.html",kicker:"Military procurement",label:"Japanese Arms Trade with Peru"},
      {href:"samanco-crisis-1981.html",kicker:"Major crisis",label:"Samanco Crisis"},
      {href:"american-hemisphere.html",kicker:"Contested regional order",label:"American Hemisphere"},
      {href:"japan.html",kicker:"Principal partner",label:"Empire of Japan"}
    ],
    facts:[["Capital","Lima"],["State form","Authoritarian sovereign republic"],["Political order","Military-developmental state"],["1985 alignment","GEACPS-associated"],["Principal external partner","Japan"],["Strategic center","Samanco–Chimbote complex"],["Economic pillars","Mining, fisheries, agriculture, ports, and steel"],["Military relationship","Finished-equipment customer and technical partner"],["Major crisis","Samanco Crisis, 1981"],["Foreign base sovereignty","Peruvian"],["Japanese imperial membership","None"],["Treaty and permanent-force ceilings","Open"]],
    categories:["Peru","Japan–Peru relations","GEACPS"]
  })
});
