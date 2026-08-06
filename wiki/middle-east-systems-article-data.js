window.deepArticles = window.deepArticles || {};

const middleEastSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Middle East and eastern Mediterranean"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Middle Eastern chronology"},
  {href:"../transcript.md",label:"Master Transcript — Middle Eastern development"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — canon decisions"}
];

const regionalLinks = [
  {href:"middle-east.html",kicker:"Regional system",label:"Middle East and the Arab Ideological Triangle"},
  {href:"palestine-war.html",kicker:"Post-Mandate conflict",label:"Palestine War"},
  {href:"kuwait-war.html",kicker:"Gulf conflict",label:"Kuwait War"}
];

const middleEastArticle = config => ({
  category:config.category || "Middle East",
  eyebrow:config.eyebrow || "Middle Eastern politics and diplomacy",
  infoboxKicker:config.infoboxKicker || "Regional reference",
  ...config,
  related:[...(config.related || []),...regionalLinks.filter(item=>item.href!==config.slug+".html"&&!(config.related||[]).some(other=>other.href===item.href))],
  sources:config.sources || middleEastSources,
  categories:config.categories || ["Middle East","Postwar international relations"],
  facts:config.facts || []
});

Object.assign(window.deepArticles, {
  "israel": middleEastArticle({
    slug:"israel",title:"State of Israel",category:"Countries",eyebrow:"Reduced coastal state · post-Amman order",infoboxKicker:"Sovereign state",
    lead:"Israel is the smaller Jewish state that survives the Palestine War along the Tel Aviv–Haifa coast and parts of western Galilee. It is crowded, strategically shallow, technically capable, and permanently mobilized within a settlement that leaves Jerusalem, Gaza, the Arab highlands, the Jordan Valley, and most or all of the Negev under Jordanian rule.",
    canon:"Israel's survival, coastal core, military vulnerability, and relationship to the Amman Settlement are established. Its exact borders, constitution, internal party sequence, and the final status of a British facility at Haifa remain open.",
    sections:[
      {id:"formation",title:"Formation in war",html:"<p>British retreat from the Mandate coincides with mass Jewish flight from German-controlled Europe, communal mobilization, arms imports, and intervention by neighboring Arab forces. Statehood is therefore born through emergency government and war rather than an orderly transfer.</p>"},
      {id:"territory",title:"The coastal state",html:"<p>The surviving state centers on the Tel Aviv–Haifa corridor and part of western Galilee. It lacks the depth and southern territory of real-world Israel, while the precise armistice line remains deliberately unsettled in the source record.</p>"},
      {id:"population",title:"Refuge and population",html:"<p>Survivors and expellees arrive through Mediterranean shipping even after the main war. Housing, food, language instruction, military service, and the absorption of traumatized communities dominate early public life.</p>"},
      {id:"government",title:"Emergency government",html:"<p>Civil institutions coexist with strong military and security authority. The final constitutional balance among parliament, executive, army, labor organizations, and religious communities has not yet been fixed as canon.</p>"},
      {id:"economy",title:"A technical coastal economy",html:"<p>Ports, workshops, agriculture, medical institutions, universities, shipping, repair, and defense production compensate for limited land and resources. Food can reach Haifa from Atlantic suppliers through Gibraltar without passing through Suez, though strategic cargo remains vulnerable to Spanish and Italian surveillance.</p>"},
      {id:"security",title:"Permanent mobilization",html:"<p>Short distances and exposed routes reward intelligence, reserves, prepared positions, air defense, and rapid concentration. Israel is capable enough to survive but too constrained to dominate the region without accepting extreme risk.</p>"},
      {id:"amman",title:"Relations with Jordan",html:"<p>The Amman Settlement confirms practical coexistence without reconciliation. Border incidents, refugee claims, Jerusalem, and competing interpretations of legitimacy produce a second Israeli–Jordanian war in 1951–54, whose precise operations remain working history.</p>"},
      {id:"religion",title:"Holy places and international opinion",html:"<p>Christian access is protected through international guarantees centered on Jordanian-held Jerusalem. The Catholic Church accepts Israel's practical existence while rejecting any claim that modern territorial possession carries a prophetic or sacramental title.</p>"}
    ],
    related:[{href:"amman-settlement.html",kicker:"Founding order",label:"Amman Settlement"},{href:"jordan.html",kicker:"Principal neighbor",label:"Hashemite Kingdom of Jordan"}],
    facts:[["Capital","Tel Aviv (working administrative center)"],["Statehood","After the Palestine War"],["Territorial core","Tel Aviv–Haifa coast; western Galilee"],["Jerusalem","Under Jordanian rule"],["Security posture","Permanent mobilization"],["Principal settlement","Amman Settlement"],["Second war","1951–1954"],["Exact constitution and borders","Open"]]
  }),

  "iraq": middleEastArticle({
    slug:"iraq",title:"National Resurrection Iraq",category:"Countries",eyebrow:"Arab revolutionary republic · German-associated",infoboxKicker:"Revolutionary state",
    lead:"Iraq is the revolutionary Arab republic created by the victory of the Arab National Revolutionary Command in the civil war of roughly 1967–71. Commonly called National Resurrection Iraq, it is centralized, militarized, anti-monarchical, German-equipped, and ambitious beyond its institutional ability to govern or wage modern war.",
    canon:"The revolutionary victory, regime character, German relationship, minority repression, and 1974 defeat are established. The final official state name, individual leaders, party constitution, and detailed civil-war succession remain open.",
    sections:[
      {id:"royal",title:"Hashemite inheritance",html:"<p>The old kingdom survived the 1950s by adopting nationalist, industrial, military, and corporatist language under Latin influence. Its attempt to modernize dynastic legitimacy left a state strong enough to contest a civil war but vulnerable to officers who treated monarchy and inherited borders as foreign restraints.</p>"},
      {id:"revolution",title:"Revolutionary victory",html:"<p>Younger officers, technocrats, students, labor cadres, and heirs to the Rashid Ali tradition formed the German-supported revolutionary coalition. Their victory between roughly 1967 and 1971 displaced the crown and drove royal officials into Jordan.</p>"},
      {id:"state",title:"The resurrection state",html:"<p>Party, army, youth, labor, broadcasting, and development bodies are subordinated to a leader-centered national command. Public doctrine describes all Arabs as one organic historical body whose division into states is provisional and illegitimate.</p>"},
      {id:"society",title:"Citizenship and coercion",html:"<p>Citizenship is militarized and economic interests are ordered beneath national purpose. Suspicion of Shiite communities as Persian-influenced and coercive Arabization of Kurds turn ideological unity into surveillance, resettlement, imprisonment, and recurrent internal war.</p>"},
      {id:"germany",title:"German support without control",html:"<p>Germany supplies arms, training, firms, advisers, and prestige, but its Foreign Office, military intelligence, party bodies, and SS-linked networks do not act through one master plan. Baghdad uses German resources to pursue an indigenous revolutionary project.</p>"},
      {id:"claims",title:"Arab territorial claims",html:"<p>The regime rejects several borders as products of European partition and presents Kuwait as territory severed from Basra. Its wider rhetoric threatens the Gulf monarchies, Jordan, associated Syria, and the Saudi claim to lead post-European Arab cooperation.</p>"},
      {id:"kuwait",title:"The 1974 defeat",html:"<p>Operation al-ʿAwda overruns Kuwait but exposes the difference between possessing advanced weapons and maintaining a modern military system. British-led Operation Covenant clears the territory, threatens Basra, and compels the Muscat Articles.</p>"},
      {id:"1985",title:"Iraq in 1985",html:"<p>Defeat radicalizes the regime's mythology of encirclement and incomplete resurrection. Baghdad remains dangerous to its neighbors, armed by Germany, and independent enough to create crises that Berlin did not choose.</p>"}
    ],
    related:[{href:"arab-national-revolutionary-command.html",kicker:"Ruling movement",label:"Arab National Revolutionary Command"},{href:"iraqi-civil-war.html",kicker:"Founding conflict",label:"Iraqi Civil War"},{href:"royal-iraqi-government-in-exile.html",kicker:"Dynastic claimant",label:"Royal Iraqi Government in Exile"}],
    facts:[["Capital","Baghdad"],["Government","Leader-centered revolutionary republic"],["Common name","National Resurrection Iraq"],["Founding conflict","Iraqi Civil War, c. 1967–1971"],["Principal patron","Greater German Reich"],["Regional rival","Hashemite and Saudi orders"],["1974 settlement","Muscat Articles"],["Official name and leadership","Open"]]
  }),

  "saudi-arabia": middleEastArticle({
    slug:"saudi-arabia",title:"Kingdom of Saudi Arabia",category:"Countries",eyebrow:"Independent dynasty · Japanese-associated modernization",infoboxKicker:"Sovereign kingdom",
    lead:"Saudi Arabia is an independent Islamic monarchy whose principal outside industrial partner is Japan. Riyadh uses Asian infrastructure and technical assistance to modernize without accepting European tutelage, while the Meccan Doctrine joins dynastic legitimacy, Islamic sovereignty, anti-colonialism, and opposition to revolutionary Iraqi rule.",
    canon:"Japanese industrial partnership, the Meccan Doctrine, rivalry with Iraq, Gulf ambitions, and Saudi armed neutrality in 1974 are established. Detailed succession, institutional charters, and individual development agreements remain open.",
    sections:[
      {id:"monarchy",title:"Dynastic state",html:"<p>The ruling house grounds authority in family government, religious legitimacy, tribal compacts, control of the holy cities, and the distribution of oil income. The monarchy rejects both European protectorates and Baghdad's campaign against existing Arab crowns.</p>"},
      {id:"japan",title:"The Japanese partnership",html:"<p>Japan presents itself as an Asian industrial power with no direct territorial claim in Arabia. Ports, pilgrimage transport, refineries, communications, aircraft, oil equipment, and advisers make it the kingdom's most useful external development partner.</p>"},
      {id:"mecca",title:"The Meccan Doctrine",html:"<p>The doctrine holds that European bases must ultimately leave, existing Arab dynasties are legitimate, modernization need not mean Europeanization, and Arab cooperation must never become rule from Baghdad. Its remembered formula is “no foreign master and no Arab tyrant.”</p>"},
      {id:"oil",title:"Oil and development",html:"<p>Nuclear electricity reduces petroleum's monopoly over global power generation, but oil still finances the kingdom and remains essential to aviation, vehicles, shipping, petrochemicals, fertilizer, and strategic reserves.</p>"},
      {id:"pilgrimage",title:"Pilgrimage infrastructure",html:"<p>Roads, ports, air transport, public health, communications, and lodging connect modernization to guardianship of the holy cities. Japanese technical work is made politically acceptable by being presented as service to pilgrimage and sovereignty.</p>"},
      {id:"gulf",title:"The Gulf inheritance question",html:"<p>Riyadh ultimately covets Kuwait, Qatar, Abu Dhabi, the Trucial Coast, and parts of Britain's South Arabian system. It nevertheless prefers temporary British control to revolutionary Iraqi conquest that would place the Gulf beneath Baghdad.</p>"},
      {id:"1974",title:"Armed neutrality in 1974",html:"<p>Saudi forces mobilize without formally joining Britain. Denial of Iraqi freedom on the southern flank, political isolation of Baghdad, and quiet practical assistance contribute to the Commonwealth victory.</p>"},
      {id:"triangle",title:"Riyadh in the ideological triangle",html:"<p>The Saudi pole is dynastic, Islamic, anti-European, and loosely federative. Japanese influence supplies tools and confidence, but the doctrine grows from Arabian institutions and interests rather than being imported as a Japanese ideology.</p>"}
    ],
    related:[{href:"meccan-doctrine.html",kicker:"State doctrine",label:"Meccan Doctrine"},{href:"arab-ideological-triangle.html",kicker:"Regional rivalry",label:"Arab Ideological Triangle"},{href:"japan.html",kicker:"Industrial partner",label:"Empire of Japan"}],
    facts:[["Capital","Riyadh"],["Government","Independent Islamic monarchy"],["Holy cities","Mecca and Medina"],["Principal industrial partner","Japan"],["Foreign doctrine","Meccan Doctrine"],["Slogan","No foreign master and no Arab tyrant"],["1974 posture","Armed neutrality"],["Bloc status","Independent; Japanese-associated"]]
  }),

  "turkey": middleEastArticle({
    slug:"turkey",title:"Republic of Turkey",category:"Countries",eyebrow:"Fortified neutral republic · Kemalist hedgehog",infoboxKicker:"Sovereign but constrained state",
    lead:"Turkey survives Axis victory as a fortified and formally neutral republic encircled by Italian power to the south and west and German power to the north and east. Its survival rests less on freedom of action than on the fact that Berlin and Rome each prefer a Turkish Bosphorus to control by the other.",
    canon:"Turkish territorial survival, Kemalist neutrality, encirclement, and exploitation of German–Italian rivalry are established. The proposed Straits Security Settlement, its date, parties, and final clauses remain working rather than settled canon.",
    sections:[
      {id:"survival",title:"Survival after Axis victory",html:"<p>Turkey avoids occupation and partition, preserves its flag and republican institutions, and turns wartime caution into a permanent doctrine of national denial. Formal sovereignty masks a severely narrowed strategic environment.</p>"},
      {id:"encirclement",title:"Strategic encirclement",html:"<p>Italy dominates Greece, the Aegean, Cyprus, Syria, Egypt, and much of the Balkans. Germany controls Crimea, the Caucasian approaches, and northern clients. Every maritime and land approach can therefore become a pressure point.</p>"},
      {id:"hedgehog",title:"The Kemalist hedgehog",html:"<p>Mobilization, fortification, mountain defense, reserves, internal lines, and control of the Straits make conquest expensive. The aim is not victory over either great power but denial of a cheap fait accompli.</p>"},
      {id:"straits",title:"The Straits question",html:"<p>The Bosphorus and Dardanelles connect German Black Sea interests to the Mediterranean and Italian Mediterranean power to the Black Sea. Neutral Turkish administration prevents either patron from converting passage into exclusive ownership.</p>"},
      {id:"settlement",title:"Proposed security settlement",html:"<p>An early- or mid-1950s arrangement would preserve territorial integrity while granting commercial passage, notification rights, observers, technical missions, limited Italian Aegean privileges, German economic concessions, and exclusion of Anglo-American military missions.</p>"},
      {id:"economy",title:"Economic bargaining",html:"<p>Transit, mining, agriculture, railways, ports, and industrial contracts are distributed to prevent exclusive dependence. German and Italian concessions are the price of survival as much as instruments of development.</p>"},
      {id:"politics",title:"Republican continuity",html:"<p>Kemalist institutions remain the public language of state authority, secular administration, and territorial nationality. Emergency security and foreign pressure strengthen the military-bureaucratic center.</p>"},
      {id:"1985",title:"Turkey in 1985",html:"<p>Turkey is independent in law and heavily constrained in practice. The Straits function because all parties prefer an imperfect neutral custodian to testing which rival would dominate after a Turkish collapse.</p>"}
    ],
    related:[{href:"straits-security-settlement.html",kicker:"Working arrangement",label:"Straits Security Settlement"},{href:"italy.html",kicker:"Southern encircling power",label:"Kingdom of Italy"},{href:"germany.html",kicker:"Northern encircling power",label:"Greater German Reich"}],
    facts:[["Capital","Ankara"],["Government","Kemalist republic"],["Status","Formally neutral and independent"],["Strategic doctrine","Kemalist hedgehog"],["Key waterway","Turkish Straits"],["Principal pressure","German–Italian encirclement"],["Western missions","Excluded under proposed settlement"],["Settlement terms","Working canon"]]
  }),

  "amman-settlement": middleEastArticle({
    slug:"amman-settlement",title:"Amman Settlement",category:"Treaties and settlements",eyebrow:"Palestine settlement · c. 1950–1951",infoboxKicker:"Postwar territorial order",
    lead:"The Amman Settlement ends the main Palestine War without reconciling its participants. It preserves a reduced Israel on the coast, recognizes an enlarged Jordan across most of Arab Palestine, guarantees Christian access to holy places, and retains British security, air, communications, and transit relationships.",
    canon:"The parties, broad territorial division, holy-place guarantees, and continuing British relationships are established. Exact borders, formal title, signatories, implementation machinery, and a possible British Haifa facility remain open.",
    sections:[
      {id:"origins",title:"Exhaustion and necessity",html:"<p>By 1950 no participant can impose a complete settlement at acceptable cost. Britain needs an exit from direct Mandate rule, Jordan seeks recognition of its gains, and Israel requires acknowledgment of practical survival.</p>"},
      {id:"israel",title:"The Israeli zone",html:"<p>Israel holds the Tel Aviv–Haifa coastal corridor and parts of western Galilee. The settlement leaves the state crowded and defensible only through mobilization, while detailed lines remain working history.</p>"},
      {id:"jordan",title:"The Jordanian zone",html:"<p>Jordan receives or retains Jerusalem, the Arab highlands, the Jordan Valley, Gaza, and most or all of the Negev. The territorial victory also gives Amman a large Palestinian population and lasting representational obligations.</p>"},
      {id:"holy",title:"Holy-place guarantees",html:"<p>Christian access to Jerusalem and other holy places is internationally guaranteed. Custodianship becomes a test of Jordanian legitimacy and a continuing concern of Britain, the Latin powers, and the Holy See.</p>"},
      {id:"britain",title:"British retained relationships",html:"<p>London preserves security, air, communications, and transit rights even as direct rule ends. These relationships sustain Jordan, protect routes, and give Britain influence without reconstructing the Mandate.</p>"},
      {id:"refugees",title:"Displacement without settlement",html:"<p>The arrangement freezes military control but does not resolve refugee return, compensation, property, family separation, or political representation. The human consequences remain part of both Israeli and Arab legitimacy claims.</p>"},
      {id:"second-war",title:"The second war, 1951–1954",html:"<p>Border violence and revisionist aims produce a second Israeli–Jordanian conflict. The result preserves the broad Amman order, but exact operations, responsibility, and local adjustments remain open.</p>"},
      {id:"legacy",title:"Regional legacy",html:"<p>The settlement makes Jordan the surviving Hashemite center and Israel a durable but constrained state. Its unresolved borders and claims become foundations of the later Arab ideological triangle.</p>"}
    ],
    related:[{href:"israel.html",kicker:"Coastal successor",label:"State of Israel"},{href:"jordan.html",kicker:"Territorial beneficiary",label:"Hashemite Kingdom of Jordan"}],
    facts:[["Date","c. 1950–1951"],["Preceding conflict","Palestine War"],["Israeli core","Tel Aviv–Haifa corridor"],["Jordanian gains","Jerusalem, highlands, Gaza, Jordan Valley, Negev"],["Holy places","International access guarantees"],["British rights","Security, air, communications, transit"],["Second conflict","1951–1954"],["Exact text and borders","Open"]]
  }),

  "royal-iraqi-government-in-exile": middleEastArticle({
    slug:"royal-iraqi-government-in-exile",title:"Royal Iraqi Government in Exile",category:"Governments in exile",eyebrow:"Hashemite claimant · Amman",infoboxKicker:"Exiled government",
    lead:"The Royal Iraqi Government in Exile is the Hashemite claimant established in Jordan after the revolutionary victory in Iraq. It preserves legal continuity, dynastic claims, military cadres, archives, and a monarchist alternative to Baghdad while exercising no ordinary authority inside Iraq.",
    canon:"The exile government, its Jordanian base, Hashemite character, and anti-Baghdad role are established. The claimant's identity, cabinet, recognition list, and exact constitutional theory remain open.",
    sections:[
      {id:"flight",title:"Flight from Iraq",html:"<p>Surviving members of the royal house, ministers, officers, diplomats, civil servants, and supporters escape the 1967–71 civil war. Jordan is the natural refuge because it remains independent, Hashemite, and tied to both Britain and the Latin monarchies.</p>"},
      {id:"claim",title:"Claim to continuity",html:"<p>The government argues that revolutionary seizure did not extinguish the kingdom's legal personality. Its archives, seals, appointments, and diplomatic forms preserve continuity even when recognition is limited or deliberately ambiguous.</p>"},
      {id:"amman",title:"The Amman sanctuary",html:"<p>Jordan provides offices, protection, communications, and political space. Hosting the claimant strengthens Amman's role as the surviving Hashemite center but also makes Jordan a permanent target of Iraqi pressure.</p>"},
      {id:"institutions",title:"Institutions in exile",html:"<p>A court, cabinet-in-exile, military liaison, information office, relief networks, and files on property and service claims maintain the appearance and some functions of government. Their exact organization remains open.</p>"},
      {id:"recognition",title:"Recognition and ambiguity",html:"<p>Jordan openly protects the exile. Britain, Italy, associated Syria, and other governments may receive its representatives without necessarily withdrawing practical relations from Baghdad.</p>"},
      {id:"iraqis",title:"Relationship to Iraqi opposition",html:"<p>Royalists, displaced officers, Kurdish representatives, Shiite exiles, liberals, and tribal opponents of Baghdad do not share one restoration program. The government in exile is a claimant and coordinating address, not command over all opposition.</p>"},
      {id:"kuwait",title:"The Kuwait War",html:"<p>The 1974 defeat appears to vindicate warnings about revolutionary misrule. Yet British victory does not restore the monarchy, and the Muscat Articles preserve the Baghdad state as the party capable of binding Iraq.</p>"},
      {id:"future",title:"Restoration question",html:"<p>By 1985 the exile government remains symbolically important and operationally limited. The identity of a future claimant and whether restoration would mean Iraq alone or a wider Hashemite federation remain open questions.</p>"}
    ],
    related:[{href:"jordan.html",kicker:"Host state",label:"Hashemite Kingdom of Jordan"},{href:"iraq.html",kicker:"Rival government",label:"National Resurrection Iraq"},{href:"hashemite-national-monarchy.html",kicker:"Shared political tradition",label:"Hashemite National Monarchy"}],
    facts:[["Seat","Amman"],["Established","After the Iraqi Civil War"],["Character","Hashemite government in exile"],["Territory governed","None"],["Host","Jordan"],["Principal rival","National Resurrection Iraq"],["Foreign support","British and Latin-associated"],["Claimant and cabinet","Open"]]
  }),

  "meccan-doctrine": middleEastArticle({
    slug:"meccan-doctrine",title:"Meccan Doctrine",category:"Political doctrines",eyebrow:"Saudi Arab and Islamic sovereignty",infoboxKicker:"Foreign and regional doctrine",
    lead:"The Meccan Doctrine is Saudi Arabia's answer to both European imperial possession and Baghdad's revolutionary claim to command the Arab nation. It defends legitimate dynasties, Islamic sovereignty, gradual removal of European bases, Asian-assisted modernization, and cooperation among Arab states without subordination to one capital.",
    canon:"The doctrine's principles, Japanese developmental context, regional rivals, and remembered slogan are established. Its formal promulgation, authorship, and legal status remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The doctrine grows from custodianship of the holy cities, dynastic state-building, oil-financed development, anti-colonial grievance, and fear that revolutionary Iraq will inherit Britain's Gulf possessions before local monarchies can.</p>"},
      {id:"sovereignty",title:"Arab and Islamic sovereignty",html:"<p>Foreign bases are treated as temporary violations that must ultimately end. Sovereignty belongs to existing peoples, rulers, and religious communities rather than to European treaties or a self-appointed revolutionary vanguard.</p>"},
      {id:"dynasties",title:"Legitimate dynasties",html:"<p>Monarchy is presented as an indigenous institution capable of modernization and consultation. Baghdad's claim that crowns are merely foreign instruments is rejected as both historically false and politically imperial.</p>"},
      {id:"modernization",title:"Modernization without Europeanization",html:"<p>Japanese ports, communications, oil machinery, aviation, and technical training demonstrate that advanced industry need not arrive through European rule or wholesale cultural imitation.</p>"},
      {id:"cooperation",title:"Loose Arab cooperation",html:"<p>The preferred regional order is consultative and federative enough to coordinate defense, trade, pilgrimage, and infrastructure while preserving each crown and state. It cannot become rule from Baghdad.</p>"},
      {id:"slogan",title:"The remembered formula",html:"<p>“No foreign master and no Arab tyrant” condenses the doctrine's two-front argument: European possession is illegitimate, and anti-European rhetoric does not legitimize Iraqi domination.</p>"},
      {id:"kuwait",title:"The Kuwait test",html:"<p>Saudi armed neutrality in 1974 is the doctrine in practice. Riyadh opposes British permanence but helps prevent Iraq from converting anti-colonial language into annexation.</p>"},
      {id:"limits",title:"Influence and limits",html:"<p>Japan finances capacity but does not author Saudi legitimacy. The doctrine competes with both Baghdad's centralized revolution and the Latin-associated Hashemite model while remaining less institutionalized than either rival's party or treaty networks.</p>"}
    ],
    related:[{href:"saudi-arabia.html",kicker:"Originating state",label:"Kingdom of Saudi Arabia"},{href:"arab-ideological-triangle.html",kicker:"Comparative framework",label:"Arab Ideological Triangle"},{href:"japan.html",kicker:"Development partner",label:"Empire of Japan"}],
    facts:[["Center","Riyadh and Mecca"],["Origin","Saudi state doctrine"],["Core principle","Arab and Islamic sovereignty"],["Governmental preference","Legitimate dynasties; loose federation"],["Modernization partner","Japan"],["European bases","Ultimately to be removed"],["Principal rival","Baghdad's Arab National Revolution"],["Formal promulgation","Open"]]
  }),

  "arab-ideological-triangle": middleEastArticle({
    slug:"arab-ideological-triangle",title:"Arab Ideological Triangle",category:"Political systems",eyebrow:"Baghdad · Riyadh · Amman–Damascus",infoboxKicker:"Regional ideological framework",
    lead:"The Arab Ideological Triangle describes the three rival political languages organizing Arab politics by the mid-1970s: Baghdad's centralized Arab National Revolution, Riyadh's dynastic and Islamic Meccan Doctrine, and the federative Hashemite National Monarchy centered on Amman and Damascus.",
    canon:"The three poles, their foreign associations, and their distinct political principles are established. Formal alliance structures, exact party names, and the degree of coordination within each pole remain partly open.",
    sections:[
      {id:"framework",title:"A triangle, not three puppets",html:"<p>Germany, Japan, and the Latin powers finance, train, and systematize regional movements, but they do not invent them. Each pole grows from indigenous memories, institutions, rivalries, and claims to legitimacy.</p>"},
      {id:"baghdad",title:"Baghdad: Arab National Revolution",html:"<p>Baghdad offers a centralized, militarized, anti-monarchical, racial-organic state influenced by Germany. Its formula—“one Arab people, one destiny, one state”—treats existing borders and crowns as obstacles to resurrection.</p>"},
      {id:"riyadh",title:"Riyadh: Arab and Islamic sovereignty",html:"<p>Riyadh defends dynasties, Islamic legitimacy, anti-European sovereignty, and loose federation with Japanese-assisted modernization. It rejects both European masters and an Arab tyrant in Baghdad.</p>"},
      {id:"amman",title:"Amman–Damascus: national monarchy",html:"<p>The Hashemite pole joins legitimate crowns, Arab Revolt inheritance, tribal and religious institutions, corporatist development, and federative aspirations. Jordan supplies independence and dynastic continuity; Syria supplies a second crown and Latin system access.</p>"},
      {id:"gulf",title:"The Gulf as proving ground",html:"<p>British-protected Kuwait and the smaller Gulf states are the region's clearest inheritance dispute. Every pole condemns permanent British possession while disagreeing over who can legitimately replace it.</p>"},
      {id:"palestine",title:"Palestine and Jerusalem",html:"<p>Jordan's territorial position, Israel's survival, displaced Palestinians, and holy-place custodianship give the Hashemite pole authority and vulnerabilities that neither Baghdad nor Riyadh can ignore.</p>"},
      {id:"foreign",title:"Competing foreign systems",html:"<p>German sponsorship favors revolutionary cadres; Japanese partnership strengthens Saudi infrastructure; Latin ties support monarchist institutions; Britain retains Gulf and Jordanian relationships. Overlapping channels keep the triangle from becoming a clean three-bloc map.</p>"},
      {id:"1985",title:"The triangle in 1985",html:"<p>The Kuwait War has weakened Baghdad without ending its ambitions. Riyadh has demonstrated strategic restraint, while Amman and Damascus retain monarchist legitimacy but depend on external support and unresolved succession projects.</p>"}
    ],
    related:[{href:"arab-national-revolutionary-command.html",kicker:"Baghdad pole",label:"Arab National Revolutionary Command"},{href:"meccan-doctrine.html",kicker:"Riyadh pole",label:"Meccan Doctrine"},{href:"hashemite-national-monarchy.html",kicker:"Amman–Damascus pole",label:"Hashemite National Monarchy"}],
    facts:[["Period","Mid-1970s onward"],["Baghdad pole","Arab National Revolution"],["Riyadh pole","Arab and Islamic sovereignty"],["Amman–Damascus pole","Hashemite National Monarchy"],["German association","Baghdad"],["Japanese association","Riyadh"],["Latin association","Amman–Damascus"],["Common issue","Post-European Arab order"]]
  }),

  "arab-national-revolutionary-command": middleEastArticle({
    slug:"arab-national-revolutionary-command",title:"Arab National Revolutionary Command",category:"Political organizations",eyebrow:"Iraqi revolutionary command · c. 1967 onward",infoboxKicker:"Ruling revolutionary movement",
    lead:"The Arab National Revolutionary Command is the German-supported coalition of officers, technocrats, students, labor cadres, and radical nationalists that defeats the Hashemite kingdom and builds National Resurrection Iraq. It translates selected National Socialist forms into a specifically Arab doctrine of unity, mobilization, and expansion.",
    canon:"The command's social base, ideology, German support, civil-war victory, and later rule are established. Its formal structure, leadership roster, insignia, and precise relationship between party and state remain open.",
    sections:[
      {id:"genealogy",title:"Political genealogy",html:"<p>The movement draws on the Rashid Ali tradition, anti-British military nationalism, student politics, technocratic frustration, labor organization, and resentment of the Hashemite state's foreign associations.</p>"},
      {id:"cadres",title:"Cadres and recruitment",html:"<p>Younger officers supply coercive capacity; technicians promise industrial transformation; students and labor organizers create urban networks; veterans and exiles connect the movement to earlier anti-British revolt.</p>"},
      {id:"doctrine",title:"Organic Arab nationalism",html:"<p>The command treats Arabs as one historical body divided by artificial frontiers. Leader rule, militarized citizenship, youth formation, labor-capital subordination, and national planning are presented as instruments of reunification.</p>"},
      {id:"german",title:"German channels",html:"<p>Training, arms, money, firms, propaganda, and intelligence reach the movement through overlapping German institutions. Rival German patrons produce competition and radicalization as often as disciplined control.</p>"},
      {id:"war",title:"Civil-war command",html:"<p>During 1967–71 the organization becomes both political coalition and wartime command. Coups, army fragmentation, urban fighting, Kurdish campaigns, communal reprisals, and foreign aid prevent it from operating as one perfectly centralized force.</p>"},
      {id:"rule",title:"From command to state",html:"<p>Victory merges revolutionary legitimacy with the army and party-state. Emergency organs become durable institutions for appointments, planning, youth, labor, broadcasting, internal security, and military procurement.</p>"},
      {id:"minorities",title:"Unity by coercion",html:"<p>Suspicion of Shiite Persian influence and coercive Arabization of Kurds and other minorities reveal the doctrine's racial-organic edge. Resistance is interpreted as treason against an indivisible Arab body.</p>"},
      {id:"kuwait",title:"Institutional failure in Kuwait",html:"<p>The 1974 campaign demonstrates that ideological centralization and imported equipment cannot substitute for maintenance, staff work, logistics, and a professional noncommissioned officer corps. Defeat strengthens rather than moderates the command's siege narrative.</p>"}
    ],
    related:[{href:"iraq.html",kicker:"State created",label:"National Resurrection Iraq"},{href:"iraqi-civil-war.html",kicker:"Path to power",label:"Iraqi Civil War"},{href:"germany.html",kicker:"External patron",label:"Greater German Reich"}],
    facts:[["Founded","Before and during the Iraqi Civil War"],["Base","Officers, technocrats, students, labor cadres"],["Ideology","Organic Arab national revolution"],["Foreign patron","Germany"],["Opponent","Royal Arab Government"],["Victory","c. 1971"],["State created","National Resurrection Iraq"],["Leadership and structure","Open"]]
  }),

  "hashemite-national-monarchy": middleEastArticle({
    slug:"hashemite-national-monarchy",title:"Hashemite National Monarchy",category:"Political doctrines",eyebrow:"Amman–Damascus monarchist project",infoboxKicker:"Arab monarchical doctrine",
    lead:"Hashemite National Monarchy is the federative, corporatist, and Latin-associated alternative to both revolutionary Baghdad and Saudi dynastic particularism. It roots Arab unity in legitimate crowns, the memory of the Arab Revolt, tribal and religious institutions, and negotiated federation rather than one-party conquest.",
    canon:"The Amman–Damascus pole, its principles, Latin association, and rivalry with Baghdad are established. A formal federation, common constitution, Syrian dynasty, and Iraqi claimant remain open.",
    sections:[
      {id:"inheritance",title:"Inheritance of the Arab Revolt",html:"<p>The doctrine presents the Hashemite crowns as historical agents of Arab independence whose legitimacy predates both European mandates and revolutionary republics. Memory of revolt supplies a national story wider than any one kingdom.</p>"},
      {id:"amman",title:"Amman as surviving center",html:"<p>Jordan's independence, enlarged Palestinian territory, custody of Jerusalem, British relationships, and protection of the Iraqi crown make Amman the indispensable political center.</p>"},
      {id:"damascus",title:"Damascus and associated Syria",html:"<p>Syria supplies historic prestige and a second Arab monarchy, but its customs, defense, banking, bases, and advisers remain tied to Italy. This gives the project reach while compromising its anti-colonial credibility.</p>"},
      {id:"federation",title:"Federative principle",html:"<p>Arab unity is imagined as a negotiated union of crowns, regions, tribes, cities, and religious communities. Authority may be shared without abolishing every dynasty or provincial institution.</p>"},
      {id:"corporatism",title:"Corporatist development",html:"<p>Professional chambers, labor and employer bodies, development banks, officer institutions, and public works promise modernization without revolutionary class conflict. Latin models influence form but do not erase local institutions.</p>"},
      {id:"religion",title:"Religious and tribal legitimacy",html:"<p>Sunni, Christian, tribal, urban, and holy-place institutions are treated as components of public order rather than remnants to be eliminated. The doctrine remains vulnerable wherever such inclusion appears merely ornamental.</p>"},
      {id:"iraq",title:"The Iraqi claim",html:"<p>The Royal Iraqi Government in Exile keeps alive the possibility that a restored Iraq could join a wider Hashemite arrangement. Neither the claimant nor the constitutional relationship has been fixed.</p>"},
      {id:"rivals",title:"Rival Arab orders",html:"<p>Baghdad calls the project a Latin-protected restoration; Riyadh distrusts its federative ambitions and foreign ties. Its advocates answer that only legitimate crowns can coordinate Arab power without producing a new imperial center.</p>"}
    ],
    related:[{href:"jordan.html",kicker:"Independent center",label:"Hashemite Kingdom of Jordan"},{href:"syria.html",kicker:"Associated center",label:"Associated Kingdom of Syria"},{href:"royal-iraqi-government-in-exile.html",kicker:"Exiled crown",label:"Royal Iraqi Government in Exile"}],
    facts:[["Centers","Amman and Damascus"],["Form","Federative Arab monarchy"],["Political economy","Corporatist development"],["Historical claim","Inheritance of the Arab Revolt"],["External alignment","Latin-associated; British ties through Jordan"],["Principal rival","Baghdad"],["Potential third crown","Iraq in exile"],["Formal federation","Not established"]]
  }),

  "straits-security-settlement": middleEastArticle({
    slug:"straits-security-settlement",title:"Straits Security Settlement",category:"Treaties and settlements",eyebrow:"Proposed Turkish settlement · early–mid 1950s",infoboxKicker:"Working-canon security arrangement",
    lead:"The Straits Security Settlement is the proposed arrangement by which Turkey preserves its flag, territorial integrity, and formal neutrality while granting Germany and Italy passage, observation, technical, and economic privileges and excluding Anglo-American military missions. Its effect is Turkish survival with sharply reduced strategic autonomy.",
    canon:"The strategic logic and proposed basket of terms are working canon, not a finalized treaty. The date, official title, signatories, legal form, duration, inspection rules, and precise concessions remain open.",
    sections:[
      {id:"problem",title:"The Straits problem",html:"<p>Germany requires access between the Black Sea and wider trade routes; Italy refuses German control of the Bosphorus; Turkey refuses control by either. The balance creates space for a neutral custodian.</p>"},
      {id:"survival",title:"Territorial guarantee",html:"<p>The arrangement would preserve the Turkish flag, republican government, and territorial integrity. Guarantee is less a gift than mutual restraint by rival powers that distrust one another.</p>"},
      {id:"passage",title:"Commercial passage",html:"<p>German and Italian commercial traffic receives predictable access subject to Turkish administration and agreed notification. Military passage remains more sensitive and is not fully fixed.</p>"},
      {id:"observers",title:"Observers and notification",html:"<p>Foreign observers, advance notices, liaison staffs, and technical missions reduce the risk that one side secretly converts Turkish facilities into an exclusive military corridor.</p>"},
      {id:"italy",title:"Italian privileges",html:"<p>Limited Aegean access and technical privileges recognize Italy's surrounding maritime position without granting Rome ownership of the Straits or unrestricted intervention in Anatolia.</p>"},
      {id:"germany",title:"German concessions",html:"<p>Economic agreements, transit, trade, rail, and technical rights compensate Berlin for accepting Turkish rather than German control of the waterway.</p>"},
      {id:"west",title:"Exclusion of Anglo-American missions",html:"<p>British and American military missions are excluded under the proposed order. Turkey can trade more widely, but strategic Western presence would be treated as a violation of the surrounding balance.</p>"},
      {id:"status",title:"Unsettled status",html:"<p>The source corpus intentionally stops short of fixing a signed treaty. The article therefore records a proposed or working arrangement whose core effect is established while its documentary history remains open.</p>"}
    ],
    related:[{href:"turkey.html",kicker:"Principal state",label:"Republic of Turkey"},{href:"italy.html",kicker:"Mediterranean guarantor",label:"Kingdom of Italy"},{href:"germany.html",kicker:"Black Sea guarantor",label:"Greater German Reich"}],
    facts:[["Period","Early–mid 1950s"],["Status","Working, not settled canon"],["Principal state","Turkey"],["External powers","Germany and Italy"],["Core guarantee","Turkish territorial integrity"],["Privileges","Passage, notice, observers, missions, concessions"],["Excluded presence","Anglo-American military missions"],["Final text","Open"]]
  }),

  "operation-covenant": middleEastArticle({
    slug:"operation-covenant",title:"Operation Covenant",category:"Military operations",eyebrow:"British Commonwealth campaign · September–December 1974",infoboxKicker:"Kuwait War operation",
    lead:"Operation Covenant is the British Commonwealth campaign that contains Iraq's invasion of Kuwait, isolates its advanced but institutionally weak formations, clears the protected territory, takes or isolates Faw and Umm Qasr, and threatens Basra strongly enough to force the Muscat Articles.",
    canon:"The campaign sequence, coalition roles, operational result, and strategic meaning are established. Detailed orders of battle, unit names, losses, and day-by-day operations belong to future specialist development.",
    sections:[
      {id:"trigger",title:"Treaty trigger",html:"<p>Iraq opens Operation al-ʿAwda in September 1974. Kuwait's emir invokes British protection, turning a disputed imperial obligation into a test of whether the Commonwealth can still defend its Gulf system.</p>"},
      {id:"concentration",title:"Commonwealth concentration",html:"<p>Britain draws on Gulf bases, Indian Ocean routes, sealift, naval aviation, air transport, marines, airborne forces, and Commonwealth logistics. The campaign is serious and contested rather than a technologically effortless annihilation.</p>"},
      {id:"isolation",title:"Isolation of the invasion force",html:"<p>Air and maritime action disrupt Iraqi supply, repair, command, and reinforcement. Advanced German-origin systems lose effectiveness when separated from the maintenance, staff, and training institutions that make them work.</p>"},
      {id:"clearance",title:"Clearance of Kuwait",html:"<p>Commonwealth forces contain the attack and clear Kuwait by November. Combined arms, engineering, base support, and controlled tempo matter more than dramatic single-platform superiority.</p>"},
      {id:"iraq",title:"Advance into southern Iraq",html:"<p>Faw and Umm Qasr are taken or isolated and Basra is threatened in December. The advance creates bargaining leverage but is not converted into occupation or regime change.</p>"},
      {id:"regional",title:"Regional isolation of Baghdad",html:"<p>Saudi armed neutrality constrains the southern flank; Iran mobilizes and shares intelligence; Jordan cooperates; Syria and the Latin powers favor the British result indirectly. Germany refuses direct escalation on behalf of its client.</p>"},
      {id:"logistics",title:"The Commonwealth system at war",html:"<p>Repair, fuel, ports, communications, medical evacuation, shipping, and dispersed bases validate Britain's post-1947 investment in the Gulf, Cape route, and Indian Ocean network.</p>"},
      {id:"legacy",title:"Victory and the false analogy",html:"<p>Covenant restores British prestige and shapes the 1975 election. Its success later encourages planners to misread Argentina as another brittle equipment client, contributing to the disastrous assumptions behind the Falklands campaign.</p>"}
    ],
    related:[{href:"kuwait-war.html",kicker:"Parent conflict",label:"Kuwait War"},{href:"muscat-articles.html",kicker:"Resulting settlement",label:"Muscat Articles"},{href:"commonwealth.html",kicker:"Belligerent system",label:"British Commonwealth"}],
    sources:[...middleEastSources,{href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference"},{href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference"},{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference"}],
    facts:[["Dates","September–December 1974"],["Theater","Kuwait and southern Iraq"],["Commander","Not yet fixed"],["Opponent","Iraq's Operation al-ʿAwda"],["Participants","British and Commonwealth forces"],["Operational result","Kuwait cleared; Basra threatened"],["Political result","Muscat Articles"],["Detailed order of battle","Open"]]
  }),

  "muscat-articles": middleEastArticle({
    slug:"muscat-articles",title:"Muscat Articles",category:"Treaties and settlements",eyebrow:"Kuwait armistice · late December 1974",infoboxKicker:"Armistice framework",
    lead:"The Muscat Articles end the Kuwait War by restoring the prewar boundary for twenty-five years, limiting Iraqi military activity near Kuwait and in the northern Gulf, arranging inspection and reparations, preserving British protection, and requiring British withdrawal from occupied Iraqi territory.",
    canon:"The title, approximate date, twenty-five-year boundary undertaking, demilitarized strip, naval limits, inspection, reparations, infrastructure restoration, British withdrawal, and continued Kuwait protection are established. Exact dimensions, formulas, parties, and texts remain open.",
    sections:[
      {id:"negotiation",title:"Negotiation under pressure",html:"<p>British forces have cleared Kuwait, taken or isolated Faw and Umm Qasr, and threaten Basra. Iraq can continue fighting only at grave risk, while Britain wants a durable settlement rather than occupation or regime change.</p>"},
      {id:"boundary",title:"Twenty-five-year boundary undertaking",html:"<p>Iraq recognizes the existing Kuwait boundary and renounces force for twenty-five years. It does not concede that British possession has a permanent moral title or that historical Iraqi claims are extinguished forever.</p>"},
      {id:"strip",title:"Demilitarized strip",html:"<p>A frontier strip restricts forces and installations near Kuwait. Its width, permitted police presence, aerial rules, and technical boundary markers remain open.</p>"},
      {id:"naval",title:"Naval restrictions",html:"<p>Iraqi naval activity and military use of the northern Gulf are limited to prevent rapid renewal of the invasion. The detailed tonnage, basing, and patrol provisions have not been fixed.</p>"},
      {id:"inspection",title:"British and neutral inspection",html:"<p>British and neutral personnel verify selected obligations without creating an unlimited occupation commission. Neutral participation gives Baghdad a way to distinguish compliance from British sovereignty.</p>"},
      {id:"reparations",title:"Oil and commercial reparations",html:"<p>Oil deliveries, commercial concessions, and restoration of damaged Kuwaiti infrastructure compensate the protected territory and help Britain present victory as material repair rather than conquest.</p>"},
      {id:"withdrawal",title:"British withdrawal",html:"<p>Britain leaves occupied Iraqi territory after securing the agreement. It retains protection and bases in Kuwait, preserving the Gulf system that the invasion was intended to destroy.</p>"},
      {id:"legacy",title:"A deliberately limited peace",html:"<p>The Articles bind behavior without reconciling moral claims. Britain gains credibility, Iraq preserves formal sovereignty, and the region receives a time-limited order whose expiration remains a future strategic problem.</p>"}
    ],
    related:[{href:"operation-covenant.html",kicker:"Military precondition",label:"Operation Covenant"},{href:"iraq.html",kicker:"Defeated signatory",label:"National Resurrection Iraq"},{href:"saudi-arabia.html",kicker:"Armed-neutral neighbor",label:"Saudi Arabia"}],
    facts:[["Date","Late December 1974"],["Venue","Muscat"],["Preceding war","Kuwait War"],["Boundary undertaking","Twenty-five years"],["Security terms","Demilitarized strip and naval limits"],["Verification","British and neutral inspection"],["Compensation","Oil, commerce, infrastructure restoration"],["Exact clauses","Open"]]
  }),

  "suez-regime": middleEastArticle({
    slug:"suez-regime",title:"Suez Regime",category:"International infrastructure",eyebrow:"Italian-controlled commercial canal system",infoboxKicker:"Strategic transit regime",
    lead:"The Suez Regime is the postwar system through which Italy controls the canal's strategic approaches while keeping ordinary international commerce open. Tolls, preferences, surveillance, reserve policy, inspections, and crisis restrictions turn Suez into an imperial revenue source and political lever without making it a permanently closed Axis waterway.",
    canon:"Italian strategic control, commercial openness, toll and preference policy, surveillance, and crisis restrictions are established. The formal operating authority, Egyptian revenue formula, and full treaty architecture remain open.",
    sections:[
      {id:"conquest",title:"From British artery to Italian center",html:"<p>Loss of Egypt and Suez breaks Britain's old Mediterranean route system. Italy converts wartime victory into control of the approaches, bases, air defense, and external security of the canal.</p>"},
      {id:"commerce",title:"Commercial openness",html:"<p>Rome normally keeps the canal open because tolls, shipping services, insurance, port activity, and imperial distribution are more valuable than symbolic closure. Ordinary foreign cargo is not identical to unrestricted strategic passage.</p>"},
      {id:"tolls",title:"Tolls and preferences",html:"<p>Published charges coexist with preferential scheduling, finance, inspection, and service for Latin and associated shipping. Revenue strengthens both the Italian imperial system and the Egyptian administrative economy.</p>"},
      {id:"surveillance",title:"Surveillance and information",html:"<p>Manifests, schedules, communications, pilots, port agents, and inspections give Italy intelligence on trade and potential military movement. The canal is an information system as much as a waterway.</p>"},
      {id:"egypt",title:"Egyptian administration and reserve policy",html:"<p>Egyptian ministries and firms participate in canal operation, ports, rail traffic, cotton, banking, and development boards. Rome retains control of defense, reserve accounts, and deductions that limit Cairo's command over nominal revenue.</p>"},
      {id:"crisis",title:"Crisis controls",html:"<p>Italy can delay, inspect, route, or deny strategic traffic during confrontation while avoiding unnecessary disruption to ordinary commerce. Rights are calibrated by cargo, flag, destination, and political cost.</p>"},
      {id:"kuwait",title:"Operation Covenant",html:"<p>During the Kuwait War Italy may permit selected British transports, hospital ships, or urgent commercial cargo under inspection. It does not grant the Royal Navy unrestricted wartime passage or become a British ally.</p>"},
      {id:"system",title:"Place in the Latin system",html:"<p>Suez links Mediterranean industry to the Red Sea, East Africa, the Indian Ocean, and Latin-associated markets. Its revenue, traffic data, and logistics help make Italy the geographic center of the less formalized Latin Bloc.</p>"}
    ],
    related:[{href:"italy.html",kicker:"Controlling power",label:"Kingdom of Italy"},{href:"latin-bloc.html",kicker:"Wider economic system",label:"Latin Bloc"},{href:"operation-covenant.html",kicker:"1974 crisis use",label:"Operation Covenant"}],
    facts:[["Waterway","Suez Canal"],["Strategic controller","Kingdom of Italy"],["Local state","Egyptian protectorate monarchy"],["Ordinary commerce","Generally open"],["Principal tools","Tolls, preference, surveillance, inspection"],["Military passage","Controlled and conditional"],["1974 policy","Selected British traffic under inspection"],["Revenue formula","Open"]]
  })
});

const middleEastRelated = {
  "middle-east":[
    {href:"arab-ideological-triangle.html",kicker:"Political framework",label:"Arab Ideological Triangle"},
    {href:"israel.html",kicker:"Coastal state",label:"State of Israel"},
    {href:"iraq.html",kicker:"Revolutionary state",label:"National Resurrection Iraq"},
    {href:"saudi-arabia.html",kicker:"Dynastic pole",label:"Saudi Arabia"},
    {href:"turkey.html",kicker:"Neutral hinge",label:"Republic of Turkey"}
  ],
  "palestine-war":[
    {href:"amman-settlement.html",kicker:"Resulting order",label:"Amman Settlement"},
    {href:"israel.html",kicker:"Surviving state",label:"State of Israel"},
    {href:"jordan.html",kicker:"Territorial victor",label:"Hashemite Kingdom of Jordan"}
  ],
  "iraqi-civil-war":[
    {href:"iraq.html",kicker:"Revolutionary successor",label:"National Resurrection Iraq"},
    {href:"arab-national-revolutionary-command.html",kicker:"Victorious movement",label:"Arab National Revolutionary Command"},
    {href:"royal-iraqi-government-in-exile.html",kicker:"Defeated claimant",label:"Royal Iraqi Government in Exile"}
  ],
  "jordan":[
    {href:"amman-settlement.html",kicker:"Territorial settlement",label:"Amman Settlement"},
    {href:"royal-iraqi-government-in-exile.html",kicker:"Protected claimant",label:"Royal Iraqi Government in Exile"},
    {href:"hashemite-national-monarchy.html",kicker:"Regional doctrine",label:"Hashemite National Monarchy"}
  ],
  "syria":[{href:"hashemite-national-monarchy.html",kicker:"Regional doctrine",label:"Hashemite National Monarchy"}],
  "iran":[{href:"muscat-articles.html",kicker:"Gulf settlement",label:"Muscat Articles"},{href:"operation-covenant.html",kicker:"1974 campaign",label:"Operation Covenant"}]
};

Object.entries(middleEastRelated).forEach(([slug,items])=>{
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=article.related||[];
  items.forEach(item=>{if(!article.related.some(existing=>existing.href===item.href)) article.related.push(item);});
});
