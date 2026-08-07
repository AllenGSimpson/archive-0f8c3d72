window.deepArticles = window.deepArticles || {};

const westernCampaignSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — western Indian successor system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — western Indian wars"},
  {href:"../transcript.md",label:"Master Transcript — western succession, mounted war, and consolidation campaigns"},
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Greater East Asia reference — Indian and Pakistani successor space"},
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — western Indian equipment and doctrine"}
];

const westernSequenceDiagram = {src:"assets/diagrams/western-indian-war-sequence.svg",alt:"Timeline of the Western Succession Crisis, First Baloch Wars, Quetta and Harappa campaign cycles, and the three consolidation wars",caption:"Archive reconstruction · principal campaigns, 1947–1982"};
const mountedWarfareDiagram = {src:"assets/diagrams/western-mounted-warfare.svg",alt:"Diagram of a mixed western Indian mounted column and the remount economy supporting it",caption:"Archive reconstruction · operational mobility without full motorization"};
const consolidationDiagram = {src:"assets/diagrams/western-consolidation-wars.svg",alt:"Diagram comparing the Kashmir–Khalistan, Second Las Bela, and Hindustan–Rajputana wars",caption:"Archive comparison · three wars, clear winners, no final settlement"};

const westernCampaignArticle = config => ({
  category:"Conflicts",
  eyebrow:"Western Indian Wars",
  infoboxKicker:"Western Indian campaign history",
  ...config,
  sources:[...westernCampaignSources,...(config.primarySources || [])],
  categories:config.categories || ["Western Indian Wars","Indian successor states","Military history"]
});

Object.assign(window.deepArticles,{
  "western-succession-crisis":westernCampaignArticle({
    title:"Western Succession Crisis",eyebrow:"State-formation conflict · 1947–1949",infoboxKicker:"Collapse of the northwestern Raj",flag:westernSequenceDiagram,
    lead:"The Western Succession Crisis was the 1947–49 collapse of British authority across the Indus, Baloch, and frontier regions. Afghanistan occupied Chagai and Quetta–Pishin, Kalat declared independence, coastal principalities formed an Iranian-backed Baloch confederation, Sindh secured Karachi, and Muslim League officers established the Pakistan Emergency Government along the Sibi corridor.",
    canon:"The principal state-formation sequence, Afghan occupations, Sindhi seizure of Karachi, Kalat independence, Baloch confederation, Pakistan Emergency Government, and Iranian-financed Gwadar transfer are established. Exact dates, individual battles, local accessions, occupation lines, casualty totals, and all participating commanders remain open.",
    sections:[
      {id:"collapse",title:"The old frontier loses its superior power",html:"<p>British withdrawal does not reveal one natural border. Directly administered districts, princely states, tribal governments, rail commands, municipal authorities, Muslim League committees, and neighboring kingdoms all inherit different pieces of power. The crisis is simultaneous state formation and war.</p>"},
      {id:"afghanistan",title:"Afghanistan moves south",html:"<p><a href='afghanistan.html'>Afghanistan</a> occupies Chagai and much of Quetta–Pishin, justifying the Pashtun districts through national claims while treating Chagai as strategic depth toward Iran and Kandahar. Quetta requires a real garrison and proves harder to hold than the desert approaches.</p>"},
      {id:"kalat",title:"Kalat declares independence",html:"<p><a href='kalat.html'>Ahmad Yar Khan's Kalat</a> asserts that Sarawan, Jhalawan, Kachhi, and the subordinate Baloch principalities belong to the historic khanate. Makran, Kharan, and Las Bela reject that claim and seek another basis for survival.</p>"},
      {id:"baloch",title:"The coastal confederation",html:"<p>Makran, Kharan, Las Bela, and associated territories form the nucleus of the <a href='baloch-confederated-state.html'>Baloch Confederated State</a>. Iran supports a bounded dynastic client that recognizes the Iranian frontier rather than an unrestricted pan-Baloch revolutionary state.</p>"},
      {id:"gwadar",title:"The Gwadar transfer",html:"<p>Gwadar does not enter the new state automatically. Iran finances or negotiates its transfer from Oman and grants the enclave to the confederation under conditions preserving Iranian port access, military and commercial privileges, limits on foreign basing, and customs or concession repayment.</p>"},
      {id:"pakistan",title:"Pakistan at Sibi",html:"<p>Muslim League nationalists, displaced administrators, officers, refugees, and railway personnel create the <a href='pakistan-emergency-government.html'>Pakistan Emergency Government</a> around Sibi, Loralai, Zhob, and adjoining districts. It claims Karachi, Lahore, Peshawar, Kashmir, Bengal, and Balochistan while controlling a dry military corridor.</p>"},
      {id:"sindh",title:"Sindh secures Karachi",html:"<p><a href='sindh.html'>Sindh</a> takes the lower Indus and Karachi's port, banks, repair yards, insurance, and rail connections. Its leaders oppose a restored Pakistan that would claim the city and begin constructing the balance-of-power commercial policy that defines the later wars.</p>"},
      {id:"outcome",title:"Five western centers emerge",html:"<p>By 1949 no participant has resolved the frontier. The crisis produces Afghanistan's southern administration, independent Kalat, Iranian-backed Balochistan, the Pakistan Emergency Government, and sovereign Sindh. Their incompatible claims turn state formation directly into the <a href='first-baloch-wars.html'>First Baloch Wars</a>.</p>"}
    ],
    related:[{href:"first-baloch-wars.html",kicker:"Immediate continuation",label:"First Baloch Wars"},{href:"pakistan-emergency-government.html",kicker:"National claimant",label:"Pakistan Emergency Government"},{href:"baloch-confederated-state.html",kicker:"Coastal claimant",label:"Baloch Confederated State"},{href:"western-indian-wars.html",kicker:"Long conflict system",label:"Western Indian Wars"}],
    facts:[["Period","1947–1949"],["Theater","Indus, Baloch, Quetta, and frontier regions"],["Principal outside powers","Afghanistan and Iran"],["Sindhi gain","Karachi and lower Indus"],["Pakistani core","Sibi, Loralai, and Zhob"],["Baloch centers","Kalat and the coastal confederation"],["Major diplomatic act","Iranian-financed transfer of Gwadar"],["Result","Five durable rival centers"]]
  }),

  "first-baloch-wars":westernCampaignArticle({
    title:"First Baloch Wars",eyebrow:"Baloch succession wars · 1949–1955",infoboxKicker:"Kalat–Balochistan conflict",flag:westernSequenceDiagram,
    lead:"The First Baloch Wars were the 1949–55 struggles among Kalat, the Iranian-backed Baloch Confederated State, Afghanistan, and the Pakistan Emergency Government over Las Bela, Makran, the Kachhi approaches, Chagai, and Quetta. They established the rival territorial claims without producing stable possession of the strategic cities and corridors.",
    canon:"The 1949–55 period, Kalat–Balochistan territorial conflict, Afghan consolidation of Quetta and Chagai, Iranian escalation, Sindhi arms brokerage, and early Pakistani Quetta attempts are established. Individual war names, campaign phases, commanders, battlefields, losses, and exact interim lines remain open.",
    sections:[
      {id:"claims",title:"Two Baloch sovereignties",html:"<p><a href='baloch-confederated-state.html'>Balochistan</a> claims a modern confederated nation formed by Makran, Kharan, Las Bela, and Gwadar. <a href='kalat.html'>Kalat</a> claims that those rulers broke lawful subordinate relationships with the historic khanate. National, dynastic, and territorial arguments are inseparable.</p>"},
      {id:"las-bela",title:"Las Bela and the route to the sea",html:"<p>Las Bela is both a founding member of the confederation and Kalat's most plausible maritime outlet. Possession offers fishing settlements, coastal smuggling, foreign arms access, and proof that the khanate can become more than a landlocked court.</p>"},
      {id:"makran",title:"Makran and the western coast",html:"<p>Iranian support protects Makran, Kharan, and Gwadar from complete Kalat conquest. Roads, wells, ports, and local dynastic loyalties matter more than continuous occupation of sparse territory.</p>"},
      {id:"afghanistan",title:"Afghan consolidation",html:"<p>Afghanistan strengthens its Southern Frontier Administration in Chagai and Quetta–Pishin. The Baloch confederation conducts raids toward the Afghan frontier while Iran supplies arms and intelligence, but Kabul's garrisons retain the strategic core during this phase.</p>"},
      {id:"pakistan",title:"The first Quetta attempts",html:"<p>Pakistan attacks northward because Quetta would give its national project a recognizable capital, military center, and claim beyond Sibi. These early operations are too weak to settle the city and become the prehistory of the later <a href='quetta-campaigns.html'>Quetta campaign cycle</a>.</p>"},
      {id:"sindh",title:"Sindh sells the balance",html:"<p>Sindhi banks, ports, repair yards, and brokers arm all sides. Karachi shifts credit and matériel toward whichever government appears least able to prevent the emergence of a dominant Baloch or Afghan power.</p>"},
      {id:"warfare",title:"Mobile war over nodes",html:"<p>Forces seize towns, passes, wells, rail stops, and roads more easily than they hold the country behind them. Mounted contingents, tribal levies, a few trucks, artillery, and isolated armored vehicles create a frontier that is easier to penetrate than to administer.</p>"},
      {id:"legacy",title:"The dispute survives the war",html:"<p>No common peace closes the period. Iran has made Balochistan durable; Kalat remains independent and expansionist; Afghanistan holds the southern heights; Pakistan persists at Sibi; and Sindh profits. Later wars inherit every unresolved claim.</p>"}
    ],
    related:[{href:"western-succession-crisis.html",kicker:"Founding crisis",label:"Western Succession Crisis"},{href:"quetta-campaigns.html",kicker:"Later campaign cycle",label:"Quetta Campaigns"},{href:"second-las-bela-war.html",kicker:"Later Las Bela conflict",label:"Second Las Bela War"},{href:"third-balochistan-war.html",kicker:"Decisive successor war",label:"Third Balochistan War"}],
    facts:[["Period","1949–1955"],["Principal belligerents","Kalat and Baloch Confederated State"],["Contested regions","Las Bela, Makran, Kachhi, Chagai, Quetta–Pishin"],["Balochistan patron","Iran"],["Afghan position","Quetta and Chagai consolidated"],["Pakistan objective","Quetta"],["Commercial intermediary","Sindh"],["Result","Claims hardened; no stable settlement"]]
  }),

  "quetta-campaigns":westernCampaignArticle({
    title:"Quetta campaigns",eyebrow:"Pakistan–Afghan urban campaigns · 1957–1960",infoboxKicker:"Quetta cycle",flag:westernSequenceDiagram,
    lead:"The Quetta campaigns were the Pakistan Emergency Government's repeated operations between 1957 and 1960 to seize Quetta–Pishin from Afghanistan's southern frontier system. Holding Quetta transformed Pakistan from a Sibi-based emergency corridor into a durable military state with a recognizable capital, though Chagai remained outside its settlement.",
    canon:"The 1957–60 campaign period, Pakistani objective, changing possession of Quetta, consolidation of Quetta–Pishin with Sibi, Loralai, and Zhob, exclusion of Chagai, and Quetta's later capital role are established. Number of offensives, exact changeover dates, Afghan withdrawal terms, battles, commanders, and casualties remain open.",
    sections:[
      {id:"symbol",title:"Why Quetta matters",html:"<p>A government claiming Pakistan cannot remain indefinitely in a small desert rail town. Quetta offers administrative buildings, depots, barracks, roads, a mixed urban population, and the symbolic status of a known provincial center.</p>"},
      {id:"afghan",title:"Afghanistan's difficult occupation",html:"<p>Afghanistan values Quetta as depth around Kandahar and proof of the southern frontier claim. Yet the city requires a permanent garrison, reliable supply, and cooperation from institutions more modern and socially mixed than the surrounding districts.</p>"},
      {id:"pakistan",title:"Pakistan's operational base",html:"<p><a href='pakistan-emergency-government.html'>Pakistan</a> attacks from the Sibi–Loralai–Zhob system using former colonial officers, railway troops, frontier recruits, mounted rifles, artillery, and limited mechanization. Control of the Bolan approaches and rail service is essential to every attempt.</p>"},
      {id:"cycle",title:"A city that changes hands",html:"<p>Quetta changes hands or status more than once. A successful occupation may outpace the government's ability to protect the route behind it; Afghan counterpressure, local bargaining, and the exhaustion of both forces repeatedly convert victory into another interim arrangement.</p>"},
      {id:"limits",title:"Chagai remains separate",html:"<p>Pakistan can consolidate the populous and connected districts without dominating the western desert. Chagai eventually passes from Afghan control into the Baloch Confederated State, preventing the Pakistani core from reaching the Iranian frontier.</p>"},
      {id:"capital",title:"From Sibi to Quetta",html:"<p>Once the city can be held reliably, Quetta becomes the effective Pakistani capital and military center. Sibi remains the southern transport hinge and founding symbol rather than disappearing from national memory.</p>"},
      {id:"afghanistan-loss",title:"An Afghan loss without collapse",html:"<p>Afghanistan loses direct possession of Quetta but turns eastward, where control can be exercised more cheaply through the <a href='afghan-protected-frontier.html'>Peshawar–Waziristan protected system</a>. Kabul trades an exposed city for a wider indirect frontier.</p>"},
      {id:"legacy",title:"Pakistan becomes durable",html:"<p>The campaigns do not reunify Pakistan, but they give its government a defensible core—Quetta–Pishin, Sibi, Loralai, and Zhob. Later Punjabi attacks are launched by a state rather than a refugee committee.</p>"}
    ],
    related:[{href:"pakistan-emergency-government.html",kicker:"Victorious state",label:"Pakistan Emergency Government"},{href:"afghanistan.html",kicker:"Displaced occupier",label:"Kingdom of Afghanistan"},{href:"harappa-campaigns.html",kicker:"Eastern campaign cycle",label:"Harappa Campaigns"},{href:"western-indian-wars.html",kicker:"Wider system",label:"Western Indian Wars"}],
    facts:[["Period","1957–1960"],["Location","Quetta–Pishin and Sibi approaches"],["Principal attacker","Pakistan Emergency Government"],["Principal defender","Afghan southern administration"],["Pakistani base","Sibi, Loralai, and Zhob"],["Result","Pakistan consolidates Quetta–Pishin"],["Excluded territory","Chagai"],["Strategic consequence","Quetta becomes effective capital"]]
  }),

  "harappa-campaigns":westernCampaignArticle({
    title:"Harappa campaigns",eyebrow:"Pakistan–Khalistan campaigns · 1964–1969",infoboxKicker:"Lower-Punjab campaign cycle",flag:westernSequenceDiagram,
    lead:"The Harappa campaigns were Pakistan's recurring eastward offensives between 1964 and 1969 against Khalistan's southern Punjab frontier. Pakistani forces sometimes reached or occupied the fortified railway town of Harappa, but could not hold it once Lahore concentrated its army and threatened the long corridor behind them.",
    canon:"The 1964–69 period, Pakistani offensives, Harappa's fortified railway role, temporary occupations, Khalistani recovery, and resulting hostility are established. Individual campaign names, exact river crossings, occupations, commanders, losses, and any Khalistani counterclaims on Pakistani territory remain open.",
    sections:[
      {id:"claim",title:"Pakistan's Punjab claim",html:"<p>Pakistan's national maps include Lahore and the Muslim inheritance of Punjab. An attack toward Harappa demonstrates that the Quetta-based state is not merely a Baloch frontier government and keeps the possibility of national expansion alive.</p>"},
      {id:"harappa",title:"A railway town, not a river port",html:"<p>Harappa matters as a fortified rail and road node near the southern edge of Khalistani control. It is the last secure point in a chain linking western Punjab to trade and military movement toward the lower Indus; its importance is logistical and symbolic rather than maritime.</p>"},
      {id:"pakistani",title:"The Pakistani advance",html:"<p>Pakistan combines rail troops, mounted rifles, truck-borne artillery, frontier formations, and limited armor. Rapid movement can seize the town before Khalistan completes mobilization, but the advance depends on a narrow and politically exposed supply route.</p>"},
      {id:"khalistani",title:"Khalistani concentration",html:"<p><a href='khalistan.html'>Khalistan</a> possesses the larger population, stronger Punjab transport, Lahore-centered command, and more coherent army. Once concentrated, it can attack the shoulders of the penetration and force Pakistani units to abandon distant gains.</p>"},
      {id:"sindh",title:"Sindh and the southern balance",html:"<p>Sindh may supply Pakistan when a stronger Khalistan threatens the lower Indus, then restrict credit or transit when Pakistan appears capable of keeping the town. Karachi wants conflict contained and no national claimant strong enough to demand its submission.</p>"},
      {id:"pattern",title:"The recurring pattern",html:"<p>Pakistani forces cross, seize or threaten Harappa, announce restoration of national territory, and then withdraw under Khalistani concentration and logistical pressure. Each campaign is a tactical demonstration and strategic failure.</p>"},
      {id:"mounted",title:"Mounted mobility on the Punjab edge",html:"<p>Modern mounted rifles screen roads, raid supply traffic, carry reconnaissance, and exploit gaps around the rail corridor. They dismount for serious combat and rely on artillery, automatic weapons, radios, and a small motorized tail.</p>"},
      {id:"legacy",title:"A permanent southern hostility",html:"<p>The campaigns persuade Khalistan that Pakistan cannot be treated as a distant rump. Harappa becomes a heavily prepared frontier symbol, while Pakistan's inability to retain it exposes the limits of national claims unsupported by economic depth.</p>"}
    ],
    related:[{href:"pakistan-emergency-government.html",kicker:"Attacking state",label:"Pakistan Emergency Government"},{href:"khalistan.html",kicker:"Defending state",label:"Khalistan"},{href:"modern-mounted-warfare-western-india.html",kicker:"Characteristic force",label:"Modern Mounted Warfare"},{href:"quetta-campaigns.html",kicker:"Western campaign cycle",label:"Quetta Campaigns"}],
    facts:[["Period","1964–1969"],["Location","Harappa and lower Punjab"],["Attacker","Pakistan Emergency Government"],["Defender","Khalistan"],["Objective","Symbolic and logistical Punjab foothold"],["Harappa's role","Fortified railway town"],["Occupation","Temporary on several occasions"],["Result","Khalistan retains the frontier"]]
  }),

  "modern-mounted-warfare-western-india":westernCampaignArticle({
    title:"Modern mounted warfare in western India",eyebrow:"Military doctrine and logistics · 1950s–1980s",infoboxKicker:"Horse-mounted infantry in the machine age",flag:mountedWarfareDiagram,
    lead:"Modern mounted warfare in western India is the use of horses for operational movement, reconnaissance, escort, raiding, and pursuit by troops armed with automatic rifles, radios, mortars, mines, and antitank weapons. These formations are mounted infantry, not revived lancers: they ride to the fight, dismount, and fight as modern soldiers.",
    canon:"The widespread use of mounted rifles, three broad formation types, mixed horse–truck–armor columns, local remount systems and breeds, operational rationale, vulnerabilities, and rural consequences are established. Unit names, tables of organization, breed standards, and complete state inventories remain open.",
    sections:[
      {id:"why",title:"Why the horse remains useful",html:"<p>Western states possess weak tax bases, sparse roads, imported fuel, and too few workshops for complete motorization. They can make infantry walk, buy trucks they struggle to maintain, or use animals and skills already present in the countryside.</p>"},
      {id:"rifles",title:"Mounted rifles",html:"<p>The most common troops travel on horseback and dismount before serious combat. AK-pattern rifles, light machine guns, grenades, rocket launchers, light mortars, and radios provide firepower; pack animals carry ammunition and crew-served weapons.</p>"},
      {id:"frontier",title:"Frontier cavalry",html:"<p>Frontier formations specialize in reconnaissance, screening, pursuit, convoy escort, raids, patrol, and suppression of isolated militias. Firing from horseback may occur in pursuit or ambush but is not the basis of doctrine.</p>"},
      {id:"contingents",title:"Tribal and princely contingents",html:"<p>A khan, prince, tribal council, or local commander may supply a regiment whose officers, horses, and loyalties remain local. These formations shift costs away from the central treasury—and can change sides with much of their mobility intact.</p>"},
      {id:"mixed",title:"The mixed western column",html:"<p>A successful force joins mounted screens, trucks carrying ammunition and heavy weapons, several armored cars, one or two tanks, pack animals, engineers, local guides, and tribal auxiliaries. Armor supplies concentrated striking power; horsemen let it find the enemy beyond the main roads.</p>"},
      {id:"remount",title:"The remount economy",html:"<p>States maintain depots, subsidized stallions, veterinary schools, purchasing fairs, branding, registration, and emergency requisition. Balochi stock serves the southwest; Waziri and Afghan strains the frontier; Punjabi horses Khalistan; Marwari and related breeds Rajputana.</p><p>A district's military value may be measured in serviceable mounts after harvest. Raiding a herd can immobilize a formation without defeating it in battle.</p>"},
      {id:"cost",title:"Horses are not free",html:"<p>Water, fodder, farriers, saddles, veterinarians, remounts, and disease control form an extensive logistics system. Drought or epidemic can disable cavalry as completely as a fuel shortage disables trucks, and rural households carry much of the burden.</p>"},
      {id:"limits",title:"The limits of mounted forces",html:"<p>Mounted columns are vulnerable to aircraft, wire, machine guns, fortified cities, water denial, and attacks on fodder. Horses do not solve the ammunition, radio-battery, artillery, or medical-supply problem. They provide mobility without industrial independence.</p>"}
    ],
    related:[{href:"western-indian-wars.html",kicker:"Parent conflict system",label:"Western Indian Wars"},{href:"harappa-campaigns.html",kicker:"Punjab example",label:"Harappa Campaigns"},{href:"second-las-bela-war.html",kicker:"Armored and mounted example",label:"Second Las Bela War"},{href:"rajputana.html",kicker:"Major mounted tradition",label:"Rajputana"}],
    facts:[["Period","1950s–1980s"],["Primary role","Operational mobility"],["Tactical method","Ride, dismount, and fight"],["Principal types","Mounted rifles, frontier cavalry, tribal and princely contingents"],["Typical weapons","Automatic rifles, machine guns, mortars, radios, antitank weapons"],["Column support","Trucks, armor, pack animals, engineers, guides"],["Remount systems","Depots, fairs, veterinary service, requisition"],["Principal limitation","Water, fodder, air attack, and industrial ammunition supply"]]
  }),

  "kashmir-khalistan-war":westernCampaignArticle({
    title:"Kashmir–Khalistan War",eyebrow:"War of northern consolidation · 1972–1975",infoboxKicker:"Kashmiri defensive war",flag:consolidationDiagram,
    lead:"The Kashmir–Khalistan War was the 1972–75 conflict in which Khalistan attempted to secure Kashmir's southern approaches and strategic depth north of Lahore. Afghan intervention restored most of the prewar line and preserved Kashmir, but placed the mountain state permanently inside Kabul's security orbit.",
    canon:"The dates, Khalistani opening attack and objectives, Afghan intervention at Kashmir's request, restoration of most of the line, restricted border, permanent Afghan access, and Afghanistan's strategic victory are established. Operation names, battles, commanders, losses, exact district transfers, and full settlement title remain open.",
    sections:[
      {id:"cause",title:"Security north of Lahore",html:"<p><a href='khalistan.html'>Khalistan</a> seeks greater depth north of Lahore, control of disputed communities and military routes, and protection against Afghan-backed pressure. Historical Sikh-imperial rhetoric accompanies a contemporary frontier problem rather than replacing it.</p>"},
      {id:"opening",title:"Khalistan's opening advantage",html:"<p>The Punjab state possesses larger mobilization, stronger transport, more armor and artillery, a coherent army, and shorter routes. Its opening campaign takes border districts and threatens roads connecting Kotli to the wider Kashmiri system.</p>"},
      {id:"kashmir",title:"Kashmir's defensive crisis",html:"<p><a href='kashmir.html'>Kashmir</a> can defend mountain approaches but lacks the depth and mass to defeat Khalistan alone. Its government requests Afghan guarantee and regular support rather than accept subordination to Lahore.</p>"},
      {id:"afghanistan",title:"Why Afghanistan intervenes",html:"<p>A Khalistani victory would threaten Peshawar, weaken Kabul's claim to protect the northwest, and perhaps permit a Khalistan–Hindustan accommodation. Afghanistan supplies ammunition, mountain artillery, aircraft, advisers, transport, volunteers, and ultimately regular forces presented as invited guarantors.</p>"},
      {id:"other",title:"Quiet help from rival claimants",html:"<p>Hindustan and Pakistan can aid Kashmir discreetly because neither wants Khalistan stronger. Their support is limited enough to avoid replacing Afghan command of the coalition.</p>"},
      {id:"settlement",title:"The 1975 settlement",html:"<p>Most of the prewar line is restored, with one or two district changes left open. The border receives demilitarized or restricted provisions, Afghanistan gains permanent military access, and Kabul becomes guarantor of Kashmiri sovereignty.</p>"},
      {id:"winners",title:"Kashmir wins; Afghanistan wins more",html:"<p>Kashmir survives as a sovereign domestic government. Afghanistan extends officers, aircraft, money, intelligence, and strategic authority farther east. Khalistan retains Lahore and its national army but loses freedom to act in the north.</p>"},
      {id:"legacy",title:"A harder northern hierarchy",html:"<p>The war does not create accepted borders. It creates a hierarchy: Kashmir remains legally independent, Khalistan remains dangerous, and Afghanistan becomes the regional paramount power whose reaction must be included in every northern plan.</p>"}
    ],
    related:[{href:"kashmir.html",kicker:"Defending state",label:"Kashmir"},{href:"khalistan.html",kicker:"Attacking state",label:"Khalistan"},{href:"afghanistan.html",kicker:"Intervening guarantor",label:"Kingdom of Afghanistan"},{href:"afghan-protected-frontier.html",kicker:"Strategic background",label:"Afghan-Protected Frontier"}],
    facts:[["Period","1972–1975"],["Location","Southern and western approaches to Kashmir"],["Attacker","Khalistan"],["Defender","Kashmir"],["Intervening power","Afghanistan"],["Kashmiri center","Kotli"],["Territorial result","Most prewar line restored"],["Strategic result","Kashmir enters Afghan security orbit"]]
  }),

  "second-las-bela-war":westernCampaignArticle({
    title:"Second Las Bela War",eyebrow:"Kalat–Balochistan war · 1976–1979",infoboxKicker:"Armored war for the coast",flag:consolidationDiagram,
    lead:"The Second Las Bela War was the 1976–79 attempt by Iranian-backed Balochistan to recover Las Bela and eliminate Kalat's maritime outlet. Kalat retained most of the territory through local defense, mounted mobility, imported armor, and quiet Sindhi support, leaving the Baloch national dispute harder but unresolved.",
    canon:"The dates, Balochistan offensive, Iranian-supported regular force, mixed Kalat army, Sindhi support, immature mechanized warfare, limited Baloch gains, and Kalat retention of the maritime route are established. Orders of battle, campaign phases, battles, equipment models, commanders, losses, and armistice name remain open.",
    sections:[
      {id:"wound",title:"Las Bela as national wound",html:"<p>The first Las Bela War left the territory under <a href='kalat.html'>Kalat</a>, giving the khanate a coast and separating a founding member from the <a href='baloch-confederated-state.html'>Baloch Confederated State</a>. Gwadar treats recovery as both reunification and strategic necessity.</p>"},
      {id:"baloch-force",title:"Balochistan's regular system",html:"<p>Iran finances medium tanks, armored cars, trucks, artillery, radios, fuel, advisers, maintenance, and planned road-bound operations. The force is more standardized than its opponent but depends upon a narrow trained cadre and Iranian technical support.</p>"},
      {id:"kalat-force",title:"Kalat's mixed army",html:"<p>Kalat buys a few dozen tanks, carriers, armored cars, and self-propelled guns through Sindhi brokers, Hyderabad, Russian-derived networks, and secondhand markets. Mounted rifles and local officers supply mobility and terrain knowledge around road-bound columns.</p>"},
      {id:"fighting",title:"An immature mechanized battlefield",html:"<p>Tanks outrun infantry, columns crowd the only usable road, artillery arrives late, recovery units fail, and repairable vehicles become fixed fortifications around wells, passes, and villages. Both armies learn rapidly while losing significant equipment to maintenance.</p>"},
      {id:"sindh",title:"Sindh keeps the balance",html:"<p><a href='sindh.html'>Sindh</a> fears a unified Baloch state controlling Gwadar, Makran, Kharan, Chagai, Kalat, Kachhi, and Las Bela. Because Iranian-backed Balochistan begins stronger, Karachi gives Kalat credit, ammunition, spares, intelligence, port access, and expedited contracts.</p>"},
      {id:"outcome",title:"Kalat holds the core",html:"<p>Balochistan recovers limited western ground and destroys forward formations but fails to regain the core of Las Bela. Kalat keeps its route to the sea; Iran prevents Balochistan's defeat; Sindh prevents Kalat's defeat.</p>"},
      {id:"claims",title:"Both states claim success",html:"<p>Balochistan demonstrates improved regular capability and maintains the legal claim. Kalat proves that it can survive a better-equipped opponent and retain independent access. Each government concludes that a new generation of weapons can reverse the next war.</p>"},
      {id:"legacy",title:"Road to the third war",html:"<p>The armistice hardens rather than resolves the dispute. Las Bela remains the wound that legitimizes Baloch mobilization and the asset that makes Kalat durable, preparing the political and military conditions for the <a href='third-balochistan-war.html'>Third Balochistan War</a>.</p>"}
    ],
    related:[{href:"kalat.html",kicker:"Defending state",label:"Kalat"},{href:"baloch-confederated-state.html",kicker:"Attacking state",label:"Baloch Confederated State"},{href:"sindh.html",kicker:"Covert balance keeper",label:"Sindh"},{href:"third-balochistan-war.html",kicker:"Decisive later conflict",label:"Third Balochistan War"}],
    facts:[["Period","1976–1979"],["Location","Las Bela and adjoining routes"],["Attacker","Baloch Confederated State"],["Defender","Kalat"],["Balochistan patron","Iran"],["Kalat support","Quiet Sindhi credit, matériel, and access"],["Character","First coherent armored contest of the Baloch wars"],["Result","Kalat retains most of Las Bela and maritime outlet"]]
  }),

  "hindustan-rajputana-war":westernCampaignArticle({
    title:"Hindustan–Rajputana War",eyebrow:"Conventional war · 1979–1982",infoboxKicker:"War for Delhi's southwestern approaches",flag:consolidationDiagram,
    lead:"The Hindustan–Rajputana War was the largest western Indian conventional conflict of 1979–82. Hindustan defeated the eastern Rajputana armies, annexed or occupied a narrow strategic belt, imposed a demilitarized frontier and nonintervention guarantees, but stopped short of conquering the princely system.",
    canon:"The dates, Hindustani offensive and objectives, divided Rajputana command, calibrated foreign aid, Hindustani military superiority, limited territorial victory, demilitarized zone, nonintervention guarantee, and Rajputana institutional reforms are established. Official operation names, battles, commanders, losses, exact belt, and peace title remain open.",
    sections:[
      {id:"cause",title:"The threat beside Delhi",html:"<p><a href='rajputana.html'>Rajputana's</a> courts lie close to Delhi's southwestern roads and railways. Their mobilization, hostile transit, and support for Congress India or Khalistan force Hindustan to retain major formations away from its other fronts.</p>"},
      {id:"objectives",title:"Hindustan's stated and unstated aims",html:"<p><a href='hindustan.html'>Hindustan</a> publicly seeks frontier depth, an end to hostile transit, a demilitarized belt, and transport guarantees. Nationalists hope that battlefield victory will begin the absorption of princely India, even when the government avoids announcing annexation.</p>"},
      {id:"rajput",title:"Rajputana's strength",html:"<p>Fortified cities, local legitimacy, mounted rifles, state armies, foreign equipment, familiar terrain, and the ability of each court to continue after a central defeat make the concert more resilient than its loose structure suggests.</p>"},
      {id:"division",title:"Several dynastic wars beneath one name",html:"<p>The courts disagree over supreme command, reserve allocation, burden sharing, and whether saving one dynasty warrants risking another. Hindustan fights one war; Rajputana fights several connected wars and repeatedly loses opportunities to concentrate.</p>"},
      {id:"aid",title:"Calibrated foreign assistance",html:"<p>Congress India, Khalistan, Hyderabad, and the western states want Rajputana to survive without becoming strong enough to dominate other princes. They provide ammunition, aircraft, air defense, intelligence, credit, volunteers, and specialists—but no overwhelming expeditionary army.</p>"},
      {id:"victory",title:"Why Hindustan wins",html:"<p>One high command, a larger industrial base, better tactical aviation, Morozov-derived armor, established air defense, engineers, concentrated ammunition, and a clear objective defeat the eastern field armies and take frontier towns and fortified positions.</p>"},
      {id:"limit",title:"Victory stops before occupation",html:"<p>Conquering all Rajputana would require reducing multiple capitals, fighting local forces separately, holding long hostile roads, guarding against Congress and Khalistan, and risking Hyderabad's intervention. Delhi stops before a real victory becomes strategic overextension.</p>"},
      {id:"settlement",title:"Settlement and corrective reform",html:"<p>Hindustan gains a narrow eastern belt, a demilitarized zone, and a nonintervention guarantee. Rajputana retains its dynasties and most territory, then creates a permanent joint staff, common procurement, shared air warning, clearer mobilization, and wartime command rules without becoming a federation.</p>"}
    ],
    related:[{href:"hindustan.html",kicker:"Victorious state",label:"Hindustan"},{href:"rajputana.html",kicker:"Surviving concert",label:"Rajputana"},{href:"princely-balance-of-power.html",kicker:"Strategic background",label:"Princely Balance of Power"},{href:"modern-mounted-warfare-western-india.html",kicker:"Regional military form",label:"Modern Mounted Warfare"}],
    facts:[["Period","1979–1982"],["Location","Delhi's southwestern approaches and eastern Rajputana"],["Attacker","Hindustan"],["Defender","Rajputana concert"],["Result","Limited Hindustani victory"],["Territorial change","Narrow eastern belt; exact line open"],["Settlement","Demilitarized zone and nonintervention guarantee"],["Rajputana consequence","Stronger common military institutions"]]
  })
});

const addWesternCampaignRelated = (slug,items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...items,...(article.related || []).filter(existing => !items.some(item => item.href === existing.href))];
};

addWesternCampaignRelated("western-indian-wars",[
  {href:"western-succession-crisis.html",kicker:"Founding collapse",label:"Western Succession Crisis"},
  {href:"modern-mounted-warfare-western-india.html",kicker:"Characteristic doctrine",label:"Modern Mounted Warfare"},
  {href:"kashmir-khalistan-war.html",kicker:"1972–75 war",label:"Kashmir–Khalistan War"},
  {href:"second-las-bela-war.html",kicker:"1976–79 war",label:"Second Las Bela War"},
  {href:"hindustan-rajputana-war.html",kicker:"1979–82 war",label:"Hindustan–Rajputana War"}
]);
addWesternCampaignRelated("pakistan-emergency-government",[
  {href:"quetta-campaigns.html",kicker:"Capital-forming war",label:"Quetta Campaigns"},
  {href:"harappa-campaigns.html",kicker:"Punjab offensives",label:"Harappa Campaigns"}
]);
addWesternCampaignRelated("khalistan",[
  {href:"harappa-campaigns.html",kicker:"Southern frontier",label:"Harappa Campaigns"},
  {href:"kashmir-khalistan-war.html",kicker:"Northern war",label:"Kashmir–Khalistan War"}
]);
addWesternCampaignRelated("kashmir",[
  {href:"kashmir-khalistan-war.html",kicker:"Defining war",label:"Kashmir–Khalistan War"}
]);
addWesternCampaignRelated("kalat",[
  {href:"first-baloch-wars.html",kicker:"Founding wars",label:"First Baloch Wars"},
  {href:"second-las-bela-war.html",kicker:"War for the coast",label:"Second Las Bela War"}
]);
addWesternCampaignRelated("baloch-confederated-state",[
  {href:"first-baloch-wars.html",kicker:"Founding wars",label:"First Baloch Wars"},
  {href:"second-las-bela-war.html",kicker:"Recovery attempt",label:"Second Las Bela War"}
]);
addWesternCampaignRelated("hindustan",[
  {href:"hindustan-rajputana-war.html",kicker:"Major western victory",label:"Hindustan–Rajputana War"}
]);
addWesternCampaignRelated("rajputana",[
  {href:"hindustan-rajputana-war.html",kicker:"Defining defeat and reform",label:"Hindustan–Rajputana War"}
]);
