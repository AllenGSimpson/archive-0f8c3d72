window.deepArticles = window.deepArticles || {};

const occitanArmySources = [
  {href:"../transcript.md",label:"Master Transcript — Occitan rearmament and the Provincial Host System"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — partitioned France, Latin rivalry, and Occitan military industry"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — reciprocal French–Occitan rearmament"},
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Occitan armor, infantry vehicles, and battlefield integration"},
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Occitan combat-aircraft lineage"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — unresolved formation details"}
];

const occitanArmyDiagram = {
  src:"assets/diagrams/occitan-provincial-host-system.svg",
  alt:"Diagram of the Occitan national General Staff and eight geographically specialized provincial divisions",
  caption:"The Provincial Host System joins national doctrine and procurement to formations raised around provincial geography, industry, symbols, and aviation"
};

const occitanArmyArticle = config => ({
  category:"Occitan military history",
  eyebrow:"Occitania · provincial forces and national command",
  infoboxKicker:"Provincial military system",
  landscape:occitanArmyDiagram,
  ...config,
  sources:[...occitanArmySources,...(config.additionalSources || [])],
  categories:config.categories || ["Occitania","Occitan Army","Latin Bloc","Military organization"]
});

Object.assign(window.deepArticles, {
  "occitan-army": occitanArmyArticle({
    title:"Occitan Army",
    category:"Army",
    infoboxKicker:"Land forces of Occitania",
    lead:"The Occitan Army is the land arm of the Federated Estates of Occitania. It developed from provincial guard battalions raised after the partition of France into a federation of specialized territorial divisions under a national General Staff. The army is smaller than the forces of Germany or Italy, but domestic armor, aircraft, electronics, chemicals, vehicles, ports, and hydroelectric power give it greater operational independence than the German-supervised forces of Northern France.",
    canon:"Reciprocal rearmament with Northern France; a battalion-to-regiment-to-division growth sequence; eight major province-linked formations; national General Staff, War Ministry, heavy procurement, senior promotion, and common schooling; regional recruitment and symbols; organic divisional aviation; mountain, armored, mechanized, marine, coastal, cavalry, and security specialties; and domestic industrial support are established. The exact constitutional name of the army, mobilized strength, budgets, rank system, commanders, divisional numbers, garrisons, peacetime establishments, conscription law, and wartime order of battle remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The first provincial battalions were organized after 1947 for border security, port defense, railway protection, mountain patrol, and internal order. They were politically acceptable as guards before Occitania possessed an army in the ordinary sense.</p><p>German–Italian rivalry changed their purpose. German sponsorship of a northern French territorial force justified stronger southern regiments; each new Occitan capability then supplied Berlin with another argument for expanding the northern army.</p>"},
      {id:"organization",title:"Organization",html:"<p>The army is organized around province-linked formations rather than uniform divisions bearing only sequential numbers. By about 1960 the principal hosts have developed into mechanized, armored, marine, coastal, mountain, cavalry, or security divisions suited to their home regions.</p><p>A national General Staff controls doctrine, operational planning, common schools, communications, and mobilization. The War Ministry controls senior promotion and heavy procurement.</p>"},
      {id:"air",title:"Divisional aviation",html:"<p>Major divisions include an organic air group or detachment. Toulouse and Rhône receive the fullest close-support and point-defense packages; coastal formations employ maritime or naval aviation; mountain and security divisions rely more heavily upon reconnaissance and liaison aircraft.</p><p>Aircraft types, maintenance rules, and technical standards remain national responsibilities. The arrangement gives ground commanders habitual access to aircraft without turning each province into a legally separate air force.</p>"},
      {id:"doctrine",title:"Doctrine",html:"<p>The army emphasizes rapid local concentration, terrain knowledge, integrated reconnaissance, artillery observation, fire-control electronics, close-air support, and short internal lines. It is designed to resist coercion, contain a frontier crisis, and raise the cost of intervention rather than defeat Germany in a general continental war.</p>"},
      {id:"industry",title:"Equipment and industry",html:"<p>The Toulouse armored community produces the <a href='occitan-tank-lineage.html'>Occitan tank lineage</a> and the <a href='vehicule-de-combat-72-sanglier.html'>Sanglier infantry fighting vehicle</a>. Bordeaux and Toulouse preserve an independent <a href='occitan-combat-aircraft-lineage.html'>combat-aircraft lineage</a>. Lyon, Grenoble, Marseille, and the Rhône valley supply trucks, chemicals, electronics, repair, power, and transport.</p>"},
      {id:"frontier",title:"Northern frontier",html:"<p>Customs posts, restricted rail crossings, militarized police, intelligence checkpoints, and exercise areas make the frontier with <a href='northern-france.html'>Northern France</a> the army's principal landward theater. German and Italian advisers observe both sides while avoiding the public language of direct command.</p>"},
      {id:"politics",title:"Provincial and national authority",html:"<p>Recruitment, colors, patronage, local ceremony, and unit memory remain provincial. Doctrine, strategic movement, general-officer promotion, heavy ammunition, and mobilization remain national.</p><p>The balance produces a recurring constitutional question: a division represents its province, but it cannot become the private force of a duke or estate.</p>"},
      {id:"latin",title:"Place in the Latin system",html:"<p>Italy supplies weapons, contracts, training, and strategic protection without fully controlling the army's officer corps or domestic industry. Spanish mountain cooperation and common Latin ammunition and missile standards add selective interoperability. Occitania retains its own General Staff and equipment priorities.</p>"}
    ],
    related:[{href:"provincial-host-system.html",kicker:"Organization",label:"Provincial Host System"},{href:"occitania.html",kicker:"State",label:"Occitania"},{href:"northern-france.html",kicker:"Principal frontier rival",label:"Northern France"},{href:"occitan-tank-lineage.html",kicker:"Armor",label:"Occitan Tank Lineage"},{href:"occitan-mechanized-support-system.html",kicker:"Combined arms",label:"Occitan Mechanized Support System"},{href:"occitan-combat-aircraft-lineage.html",kicker:"Divisional aviation",label:"Occitan Combat Aircraft Lineage"},{href:"latin-military-aviation.html",kicker:"Bloc context",label:"Latin Military Aviation"},{href:"latin-bloc.html",kicker:"Strategic alignment",label:"Latin Bloc"}],
    facts:[["Country","Occitania"],["Founded","Late 1940s provincial guards"],["Division system","Developed by c. 1960"],["Principal formations","Eight provincial divisions"],["Superior authority","National General Staff and War Ministry"],["Distinctive feature","Organic divisional aviation"],["Principal landward theater","Northern French frontier"],["Strategic purpose","Deterrence, frontier defense, and autonomy"],["Exact formal title","Open"]]
  }),

  "provincial-host-system": occitanArmyArticle({
    title:"Provincial Host System",
    category:"Military doctrine",
    infoboxKicker:"Occitan system of territorial combined arms",
    lead:"The Provincial Host System is the Occitan method of organizing modern combined-arms forces around provinces and duchies. Each principal province raised a guard battalion, enlarged it into a regiment, and eventually maintained a division whose arms, training, symbols, and air component reflected local geography and industry. National institutions provide common doctrine and prevent the formations from becoming private provincial armies.",
    canon:"Provincial battalion, regiment, and division stages; regional specialization; eight principal formations; province-derived symbols; national General Staff and War Ministry controls; mixed officer education; central heavy procurement; national aviation standardization; and organic divisional aviation are established. The official Occitan or French doctrinal title, founding statute, exact transition dates, division numbers, territorial boundaries, mobilization categories, reserve system, and legal powers of dukes remain open.",
    sections:[
      {id:"principle",title:"Organizing principle",html:"<p>Province is both recruiting district and military identity. Toulouse raises the central mechanized force, Rhône the principal armored force, Guyenne the Atlantic marines, Provence the Mediterranean coastal formation, and the inland and southern provinces forces suited to mountains, reconnaissance, or security.</p>"},
      {id:"growth",title:"Growth of formations",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Period</th><th>Typical formation</th><th>Principal function</th></tr></thead><tbody><tr><td>Late 1940s</td><td>Provincial guard battalion</td><td>Security, borders, ports, railways, patrol</td></tr><tr><td>Early 1950s</td><td>Provincial regiment</td><td>Home defense and military identity</td></tr><tr><td>Mid-to-late 1950s</td><td>Provincial division</td><td>Modern combined arms</td></tr><tr><td>By c. 1960</td><td>Division with organic air element</td><td>Regionally complete operational package</td></tr></tbody></table></div>"},
      {id:"table",title:"Principal provincial formations",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Home region</th><th>Formation type</th><th>Air component</th></tr></thead><tbody><tr><td>Toulouse</td><td>Mechanized infantry</td><td>Full close-support and point-defense group</td></tr><tr><td>Rhône</td><td>Armored</td><td>Full close-support and interceptor group</td></tr><tr><td>Guyenne–Bordeaux</td><td>Marine, riverine, coastal</td><td>Maritime patrol, close support, coastal interception</td></tr><tr><td>Provence</td><td>Coastal, marine, fortress</td><td>Naval aviation and point defense</td></tr><tr><td>Auvergne</td><td>Mountain infantry</td><td>Reconnaissance, liaison, limited support</td></tr><tr><td>Gascony</td><td>Armored cavalry and reconnaissance</td><td>Air reconnaissance and light support</td></tr><tr><td>Béarn–Foix</td><td>Pyrenean mountain</td><td>Reconnaissance and liaison</td></tr><tr><td>Limousin–Marche</td><td>Security and reserve infantry</td><td>Liaison and surveillance</td></tr></tbody></table></div>"},
      {id:"air-ground",title:"Air-ground integration",html:"<p>Forward air control, mobile ground radar, reconnaissance, point defense, and close support are planned with the division rather than requested only through a distant air headquarters. The largest air groups remain tactical organizations, not independent strategic air forces.</p>"},
      {id:"standards",title:"National standards",html:"<p>Common staff education, signals, aircraft certification, ammunition, logistics, promotion, and procurement allow the provincial hosts to operate together. Central control is strongest over systems that one province cannot produce or sustain alone.</p>"},
      {id:"identity",title:"Symbols and recruitment",html:"<p>Provincial arms, saints, landscapes, towns, and historical titles shape colors and ceremonial identity. Recruits ordinarily encounter the army through a home formation before serving in national schools or joint commands.</p>"},
      {id:"control",title:"Controls against private armies",html:"<p>The General Staff controls doctrine, the War Ministry controls senior promotion, heavy equipment is centrally procured, aviation is standardized nationally, and officer schools mix provincial cohorts. These mechanisms limit the military independence of individual dukes.</p>"},
      {id:"comparison",title:"Foreign assessment",html:"<p>Foreign attachés usually describe the system as a federation of territorial combined-arms commands. Northern French planners emphasize its mobilization risk; Italian officers value its local competence while remaining wary of the autonomy created by domestic industry.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"toulouse-mechanized-division.html",kicker:"Central formation",label:"Toulouse Mechanized Division"},{href:"rhodanian-armored-division.html",kicker:"Armored formation",label:"Rhodanian Armored Division"},{href:"bordeaux-guyenne-marine-division.html",kicker:"Atlantic formation",label:"Bordeaux–Guyenne Marine Division"},{href:"provence-coastal-division.html",kicker:"Mediterranean formation",label:"Provence Coastal Division"},{href:"auvergne-mountain-division.html",kicker:"Interior formation",label:"Auvergne Mountain Division"},{href:"gascon-cavalry-division.html",kicker:"Mobile formation",label:"Gascon Cavalry Division"},{href:"bearn-foix-pyrenean-division.html",kicker:"Border formation",label:"Béarn–Foix Pyrenean Division"},{href:"limousin-marche-security-division.html",kicker:"Reserve formation",label:"Limousin–Marche Security Division"}],
    facts:[["System","Provincial Host System"],["Country","Occitania"],["Initial echelon","Guard battalion"],["Intermediate echelon","Provincial regiment"],["Mature echelon","Provincial division"],["Principal formations","Eight"],["Operational distinction","Organic aviation"],["National controls","Staff, promotion, procurement, schools"],["Official vernacular title","Open"]]
  }),

  "toulouse-mechanized-division": occitanArmyArticle({
    title:"Toulouse Mechanized Division",
    category:"Military formation",
    infoboxKicker:"Central mechanized provincial formation",
    lead:"The Toulouse Mechanized Division is the principal balanced formation of the Occitan Army and the closest institution to a model national division. Raised from the Toulouse and Languedoc provincial guard, it protects the capital region, supplies a central mobile reserve, and houses much of the army's air-ground command practice, signals training, and mechanized doctrine.",
    canon:"Toulouse or Languedoc home identity; mechanized-infantry role; capital and communications defense; balanced national-model character; mechanized infantry, light or medium armor, mobile artillery, strong signals, and a full close-support and interceptor group are established. Exact title, number, headquarters, commander, strength, brigades or regiments, aircraft, barracks, colors, patron saint, equipment issue, deployments, and combat history remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The Toulouse guard battalion enlarged through the provincial regiment stage as the state concentrated administration, schools, and communications around the capital. It became one of the first formations capable of exercising as a full division.</p>"},
      {id:"role",title:"Role",html:"<p>The division serves as central reserve, capital-region defender, and a transferable mechanized force for either the northern frontier or reinforcement of another provincial host. Its organization is deliberately more balanced than the specialized coastal or mountain divisions.</p>"},
      {id:"organization",title:"Organization",html:"<p>The established framework includes mechanized infantry, a light or medium armored element, mobile artillery, engineers, reconnaissance, strong signals, logistics, air defense, and an organic air group. Exact subordinate units remain open.</p>"},
      {id:"aviation",title:"Provincial air group",html:"<p>A full tactical group supplies close support, point interception, reconnaissance, liaison, mobile control radar, and forward air-control training. National aviation authorities standardize aircraft and technical practice.</p>"},
      {id:"industry",title:"Toulouse industrial base",html:"<p>The division is close to armored workshops, aircraft institutions, communications laboratories, and national staff schools. It can draw upon the <a href='vehicule-de-combat-72-sanglier.html'>Sanglier</a>, the <a href='occitan-tank-lineage.html'>national tank fleet</a>, and Toulouse aerospace expertise.</p>"},
      {id:"culture",title:"Formation culture",html:"<p>Its officers are associated with staff professionalism, Catholic and noble networks, and the belief that Toulouse provides the intellectual center of the army. Provincial colors use the cross and arms of the Toulouse–Languedoc tradition; exact designs remain open.</p>"},
      {id:"command",title:"National responsibilities",html:"<p>The formation provides instructors, signals officers, air-ground planners, and headquarters staff to joint exercises. Its proximity to the government makes national loyalty especially important in promotion and appointment.</p>"},
      {id:"record",title:"Service record",html:"<p>The division's precise mobilizations, border deployments, emergencies, exercises, commanders, and any combat record have not yet been established.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"toulouse.html",kicker:"Home city",label:"Toulouse"},{href:"occitan-mechanized-support-system.html",kicker:"Equipment system",label:"Occitan Mechanized Support System"},{href:"vehicule-de-combat-72-sanglier.html",kicker:"Infantry vehicle",label:"Véhicule de Combat 72 Sanglier"},{href:"occitan-battlefield-integration.html",kicker:"Command specialty",label:"Occitan Battlefield Integration"},{href:"rhodanian-armored-division.html",kicker:"Armored counterpart",label:"Rhodanian Armored Division"}],
    facts:[["Country","Occitania"],["Home region","Toulouse and Languedoc"],["Type","Mechanized infantry division"],["Principal role","Central reserve and capital defense"],["Mature status","By c. 1960"],["Air component","Full close-support and point-defense group"],["Industrial support","Toulouse armor, aircraft, signals"],["Exact official designation","Open"]]
  }),

  "rhodanian-armored-division": occitanArmyArticle({
    title:"Rhodanian Armored Division",
    category:"Military formation",
    infoboxKicker:"Principal Occitan armored formation",
    lead:"The Rhodanian Armored Division is the Occitan Army's principal heavy counterattack formation. Based upon the industrial and transport corridor of Lyon and the Rhône valley, it protects factories, bridges, railways, power, and the eastern approaches while providing the force most directly intended to confront German-equipped Northern French armor.",
    canon:"Rhône or Rhodanian identity; armored role; industrial-corridor defense; counterattack against German-backed northern forces; two armored elements, mechanized infantry, heavy artillery, bridge engineers, rail-mobile logistics, strong air defense, and a full close-support and interceptor group are established as the working organization. Exact designation, number, headquarters, commander, strength, subordinate formations, equipment years, aircraft, colors, deployments, and combat record remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The Rhône provincial guard expanded alongside postwar industrial recovery. Roads, railways, workshops, chemicals, hydroelectricity, and heavy engineering allowed the formation to sustain armor earlier and more reliably than less industrial regions.</p>"},
      {id:"role",title:"Role",html:"<p>The division defends the Rhône corridor and serves as the army's principal armored counterattack force. Northern French exercises and German liaison activity make it the formation most closely watched across the frontier.</p>"},
      {id:"organization",title:"Organization",html:"<p>The working framework contains two armored elements, mechanized infantry, heavy artillery, reconnaissance, engineers, rail-mobile logistics, anti-aircraft units, and an organic tactical air group. Exact regiment and brigade structure remains open.</p>"},
      {id:"armor",title:"Armored equipment",html:"<p>The division is the primary institutional consumer of the <a href='occitan-tank-lineage.html'>Occitan tank lineage</a>, from the Char 48 and Char 53 generations to later Char 65 and Char 80 vehicles. The precise issue by year and battalion is not established.</p>"},
      {id:"engineers",title:"River and rail engineering",html:"<p>Bridge engineers, route-control units, workshops, and rail loading are integral to movement along a river corridor whose bridges and industrial choke points are both objectives and vulnerabilities.</p>"},
      {id:"aviation",title:"Air component",html:"<p>The division receives a full close-support and interceptor group, mobile ground control, reconnaissance, and forward air controllers. Its aircraft defend depots, crossings, moving columns, and assembly areas as well as attacking battlefield targets.</p>"},
      {id:"culture",title:"Formation culture",html:"<p>Technical officers, mechanics, engineers, industrial workers, and armored crews give the formation a deliberately modernizing identity. Proposed symbols draw upon the Rhône, Lyonnais lions, and forge imagery; no official device is fixed.</p>"},
      {id:"record",title:"Service record",html:"<p>Peacetime crises, mobilizations, unit locations, commanders, exercises, accidents, and any operational engagements remain unregistered.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"lyon.html",kicker:"Industrial center",label:"Lyon"},{href:"occitan-tank-lineage.html",kicker:"Principal equipment",label:"Occitan Tank Lineage"},{href:"occitan-mechanized-support-system.html",kicker:"Supporting vehicles",label:"Occitan Mechanized Support System"},{href:"northern-france.html",kicker:"Frontier rival",label:"Northern France"},{href:"toulouse-mechanized-division.html",kicker:"Balanced counterpart",label:"Toulouse Mechanized Division"}],
    facts:[["Country","Occitania"],["Home region","Rhône valley and Lyon"],["Type","Armored division"],["Principal role","Industrial defense and counterattack"],["Mature status","By c. 1960"],["Air component","Full close-support and interceptor group"],["Principal equipment family","Occitan tank lineage"],["Exact official designation","Open"]]
  }),

  "bordeaux-guyenne-marine-division": occitanArmyArticle({
    title:"Bordeaux–Guyenne Marine Division",
    category:"Military formation",
    infoboxKicker:"Atlantic marine and riverine formation",
    lead:"The Bordeaux–Guyenne Marine Division is the Atlantic coastal and riverine formation of the Occitan Army. Organized around Bordeaux, the Gironde, the Garonne, and the ports of Guyenne, it combines naval infantry, port defense, river operations, coastal artillery, amphibious engineering, and aviation for an Atlantic-facing state that cannot rely entirely upon Italian Mediterranean protection.",
    canon:"Guyenne and Bordeaux identity; marine, riverine, port-defense, and Atlantic amphibious roles; marine infantry, river assault, coastal artillery, amphibious engineers, port security, light armor or amphibious vehicles, naval liaison, maritime patrol, close support, and coastal interceptors are established as the working formation. Exact title, number, headquarters, commander, strength, ships or craft, aircraft, vehicle types, subordinate units, colors, deployments, and operations remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Port-defense and estuary-security units around Bordeaux supplied the first battalion. Expansion of Atlantic commerce and the military value of an independent western outlet supported its conversion into a provincial marine division.</p>"},
      {id:"role",title:"Role",html:"<p>The division protects Bordeaux and Atlantic shipping, controls river and estuary approaches, reinforces coastal installations, and supplies infantry for limited amphibious operations. It is not a separate national marine corps.</p>"},
      {id:"organization",title:"Organization",html:"<p>The working organization includes marine infantry, river-assault troops, coastal artillery, amphibious engineers, port security, light armor, reconnaissance, logistics, and liaison with naval commands. Exact echelons remain open.</p>"},
      {id:"aviation",title:"Maritime aviation",html:"<p>Maritime patrol and reconnaissance aircraft survey approaches and shipping, while close-support and coastal-interceptor elements protect ports and troops. Aircraft remain subject to national certification and maintenance standards.</p>"},
      {id:"fleet",title:"Relationship with the fleet",html:"<p>The formation supplies troops, port control, beach and river expertise, and shore-side command to the <a href='occitan-amphibious-group.html'>Occitan Amphibious Group</a>. Naval vessels remain under naval command rather than belonging permanently to the division.</p>"},
      {id:"industry",title:"Bordeaux support base",html:"<p>Ship repair, maritime commerce, aerospace around Mérignac, warehouses, fuel, rail, and financial institutions allow the formation to sustain both coastal and expeditionary work.</p>"},
      {id:"identity",title:"Formation identity",html:"<p>Guyenne heraldry, the Garonne, anchors, leopards or lions, and maritime imagery are plausible sources of colors and insignia. The official device and ceremonial title remain open.</p>"},
      {id:"record",title:"Service record",html:"<p>Exercises, overseas deployments, disaster relief, border incidents, commanders, garrisons, and combat service have not yet been fixed.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"bordeaux.html",kicker:"Home city",label:"Bordeaux"},{href:"occitan-amphibious-group.html",kicker:"Naval partner",label:"Occitan Amphibious Group"},{href:"occitan-combat-aircraft-lineage.html",kicker:"Aviation source",label:"Occitan Combat Aircraft Lineage"},{href:"provence-coastal-division.html",kicker:"Mediterranean counterpart",label:"Provence Coastal Division"},{href:"occitania.html",kicker:"National setting",label:"Occitania"}],
    facts:[["Country","Occitania"],["Home region","Bordeaux and Guyenne"],["Type","Marine, riverine, and coastal division"],["Principal theater","Atlantic coast and Gironde–Garonne approaches"],["Mature status","By c. 1960"],["Air component","Maritime patrol, close support, coastal interception"],["Naval partner","Occitan Amphibious Group"],["Exact official designation","Open"]]
  }),

  "provence-coastal-division": occitanArmyArticle({
    title:"Provence Coastal Division",
    category:"Military formation",
    infoboxKicker:"Mediterranean coastal and fortress formation",
    lead:"The Provence Coastal Division is the Occitan Army formation responsible for Marseille, the Mediterranean coast, nearby hills, port approaches, and the most visible point of contact with Italian military influence. It combines coastal infantry, fortress artillery, port defense, air defense, a marine element, and national aviation within one politically sensitive provincial command.",
    canon:"Provençal identity; Marseille and Mediterranean coastal defense; coastal infantry, fortress artillery, anti-aircraft forces, port defense, a marine element, light mountain or coastal troops, naval aviation, an interceptor detachment, Italian liaison, and strong counterintelligence are established as the working formation. Exact designation, number, headquarters, commander, strength, batteries, fortifications, aircraft, liaison structure, colors, garrisons, and service history remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Marseille port-security, coastal-artillery, and local infantry battalions supplied the formation's original cadres. Mediterranean shipping and Italian interest accelerated its enlargement.</p>"},
      {id:"role",title:"Role",html:"<p>The division protects Marseille, coastal roads, port facilities, naval support areas, and likely landing approaches. It also supplies troops for local mountain and urban defense.</p>"},
      {id:"organization",title:"Organization",html:"<p>The working framework includes coastal infantry, fortress artillery, anti-aircraft units, port-defense troops, a marine element, engineers, light mobile forces, logistics, and counterintelligence. Exact subordinate organization remains open.</p>"},
      {id:"aviation",title:"Naval and point-defense aviation",html:"<p>Naval aviation and coastal reconnaissance support maritime control. A point-defense interceptor element protects Marseille, depots, airfields, and fleet facilities without replacing national air-defense command.</p>"},
      {id:"italy",title:"Italian liaison",html:"<p>Italian advisers, common maritime planning, and shared Latin standards are most visible in Provence. Occitan commanders nevertheless retain direct authority over the formation, and local political opinion resists treating Marseille as an Italian auxiliary port.</p>"},
      {id:"security",title:"Port and political security",html:"<p>Dockworkers, shipping firms, smugglers, foreign agents, clergy, local aristocratic networks, and nationalist organizations make counterintelligence a routine military concern around the port.</p>"},
      {id:"identity",title:"Formation identity",html:"<p>Provençal red and gold, the Mediterranean sun, ships, and Marseille imagery are possible components of ceremonial symbols. The formal device and motto are not fixed.</p>"},
      {id:"record",title:"Service record",html:"<p>Named commanders, fortification plans, exercises, port emergencies, overseas detachments, and combat service remain open.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"marseille.html",kicker:"Principal port",label:"Marseille"},{href:"occitan-amphibious-group.html",kicker:"Naval partner",label:"Occitan Amphibious Group"},{href:"latin-military-aviation.html",kicker:"Aviation context",label:"Latin Military Aviation"},{href:"bordeaux-guyenne-marine-division.html",kicker:"Atlantic counterpart",label:"Bordeaux–Guyenne Marine Division"},{href:"latin-bloc.html",kicker:"Alliance context",label:"Latin Bloc"}],
    facts:[["Country","Occitania"],["Home region","Provence and Marseille"],["Type","Coastal, marine, and fortress division"],["Principal theater","Mediterranean coast"],["Mature status","By c. 1960"],["Air component","Naval aviation and point-defense interceptors"],["Foreign liaison","Italian"],["Exact official designation","Open"]]
  }),

  "auvergne-mountain-division": occitanArmyArticle({
    title:"Auvergne Mountain Division",
    category:"Military formation",
    infoboxKicker:"Interior mountain and redoubt formation",
    lead:"The Auvergne Mountain Division is the upland infantry formation of the Occitan Army. It is trained for road-poor country, broken relief, dispersed defense, and the maintenance of an interior redoubt when rapid mechanized movement is impossible. Its logistics and aviation are lighter than those of Toulouse or Rhône, but its ability to operate after roads and central services fail gives it high standing within the army.",
    canon:"Auvergne identity; mountain-infantry and interior-redoubt roles; mountain infantry, light or pack artillery, engineers, mixed animal and tractor logistics, limited light armor, reconnaissance aircraft, short-field liaison aircraft, and a small close-support element are established as the working formation. Exact designation, number, headquarters, commander, strength, subordinate units, vehicles, aircraft, depot network, colors, motto, deployments, and service record remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Rural security and upland patrol units provided the first battalion. The formation grew through exercises demonstrating that ordinary mechanized units could not reliably secure every road, plateau, pass, and dispersed installation.</p>"},
      {id:"role",title:"Role",html:"<p>The division defends the central uplands, protects routes and reservoirs, preserves a national reserve away from exposed frontiers, and supplies mountain-trained troops to other commands.</p>"},
      {id:"organization",title:"Organization",html:"<p>Mountain infantry, light artillery, engineers, reconnaissance, signals, medical units, and decentralized logistics form its core. Heavy armor is limited because terrain and support burden reduce its utility.</p>"},
      {id:"logistics",title:"Mountain logistics",html:"<p>Tractors, light trucks, pack transport, local stores, repair detachments, and route engineers allow movement when bridges, railways, or paved roads are unavailable. Exact transport ratios remain open.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Reconnaissance and short-field liaison aircraft connect dispersed positions. A limited close-support element may operate from improvised fields, but the division does not possess the full interceptor package of the great mechanized hosts.</p>"},
      {id:"training",title:"Training",html:"<p>Training emphasizes navigation, weather, climbing, dispersed command, winter movement, field engineering, local requisition law, and endurance under interrupted communications.</p>"},
      {id:"identity",title:"Formation identity",html:"<p>Volcanic peaks, historic Auvergnat arms, and austere Catholic imagery are possible sources of insignia. The often-repeated mountain motto remains a proposed rather than fixed official form.</p>"},
      {id:"record",title:"Service record",html:"<p>Garrisons, commanders, disaster-relief duties, internal-security deployments, exercises, and combat actions remain unestablished.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"bearn-foix-pyrenean-division.html",kicker:"Mountain counterpart",label:"Béarn–Foix Pyrenean Division"},{href:"limousin-marche-security-division.html",kicker:"Interior counterpart",label:"Limousin–Marche Security Division"},{href:"occitan-mechanized-support-system.html",kicker:"National equipment context",label:"Occitan Mechanized Support System"},{href:"occitania.html",kicker:"National setting",label:"Occitania"}],
    facts:[["Country","Occitania"],["Home region","Auvergne"],["Type","Mountain infantry division"],["Principal role","Interior redoubt and upland defense"],["Mature status","By c. 1960"],["Heavy armor","Limited"],["Air component","Reconnaissance, liaison, limited close support"],["Exact official designation","Open"]]
  }),

  "gascon-cavalry-division": occitanArmyArticle({
    title:"Gascon Cavalry Division",
    category:"Military formation",
    infoboxKicker:"Armored reconnaissance and screening formation",
    lead:"The Gascon Cavalry Division is the mobile reconnaissance and screening formation of the Occitan Army. It preserves a provincial cavalry identity through armored cars, light tanks, motorcycles or light vehicles, reconnaissance infantry, signals collection, border patrol, and air reconnaissance rather than through mounted combat as its principal function.",
    canon:"Gascon identity; cavalry title or tradition; reconnaissance, mobile screening, border security, armored cars, light tanks, motorcycle or light-vehicle cavalry, reconnaissance infantry, signals collection, air reconnaissance, and light close support are established as the working formation. Exact designation, number, headquarters, commander, strength, vehicle types, aircraft, electronic equipment, cavalry ceremonial practice, colors, deployments, and operations remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Border patrol and mobile rural-security units supplied the earliest Gascon formation. Enlargement converted mounted and motor patrol traditions into armored reconnaissance and operational screening.</p>"},
      {id:"role",title:"Role",html:"<p>The division scouts routes and crossings, screens larger formations, watches the Pyrenean approaches, maintains contact across wide rural fronts, and provides a mobile reserve against infiltration or sudden border incidents.</p>"},
      {id:"organization",title:"Organization",html:"<p>Armored reconnaissance, light tanks, mobile infantry, signals, engineers, artillery or fire-support elements, logistics, and border scouts form the working organization. Exact echelons remain open.</p>"},
      {id:"vehicles",title:"Vehicles",html:"<p>The formation is a likely principal user of <a href='occitan-wheeled-reconnaissance.html'>Occitan wheeled reconnaissance</a> vehicles and lighter members of the national armored fleet. No exact issue table is established.</p>"},
      {id:"information",title:"Reconnaissance and signals",html:"<p>Observation, route reporting, radio interception, contact maintenance, and target handoff connect the division to the national <a href='occitan-battlefield-integration.html'>battlefield-integration system</a>.</p>"},
      {id:"aviation",title:"Air reconnaissance",html:"<p>Reconnaissance and liaison aircraft extend the division's view across roads and countryside. Light close-support aircraft can reinforce a screen or delay a stronger force, but do not create a strategic air-defense command.</p>"},
      {id:"identity",title:"Formation identity",html:"<p>Gascon arms, horses, hounds, and border traditions preserve the language of cavalry around a mechanized force. The official badge, motto, and ceremonial use of mounted troops remain open.</p>"},
      {id:"record",title:"Service record",html:"<p>Named patrol crises, commanders, garrisons, exercises, internal-security duties, and combat actions remain unregistered.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"occitan-wheeled-reconnaissance.html",kicker:"Principal equipment branch",label:"Occitan Wheeled Reconnaissance"},{href:"occitan-battlefield-integration.html",kicker:"Information network",label:"Occitan Battlefield Integration"},{href:"bearn-foix-pyrenean-division.html",kicker:"Southern neighbor",label:"Béarn–Foix Pyrenean Division"},{href:"toulouse-mechanized-division.html",kicker:"Heavy reserve",label:"Toulouse Mechanized Division"},{href:"occitania.html",kicker:"National setting",label:"Occitania"}],
    facts:[["Country","Occitania"],["Home region","Gascony and Armagnac"],["Type","Armored cavalry and reconnaissance division"],["Principal role","Screening, scouting, and border security"],["Mature status","By c. 1960"],["Principal mobility","Wheeled reconnaissance and light armor"],["Air component","Reconnaissance and light close support"],["Exact official designation","Open"]]
  }),

  "bearn-foix-pyrenean-division": occitanArmyArticle({
    title:"Béarn–Foix Pyrenean Division",
    category:"Military formation",
    infoboxKicker:"Pyrenean frontier and pass-defense formation",
    lead:"The Béarn–Foix Pyrenean Division is the southern mountain-border formation of the Occitan Army. It protects passes and fortified valleys, supplies border scouts and mountain artillery, and maintains the army's closest recurring training and liaison relationship with Spanish mountain forces.",
    canon:"Béarn–Foix identity; Pyrenean defense, fortified-pass, Spanish-liaison, and mountain-border roles; mountain infantry, fortress companies, mountain artillery, border scouts, engineers, reconnaissance and liaison aviation, and no independent full interceptor wing are established as the working formation. Exact designation, number, headquarters, commander, strength, forts, weapons, aircraft, Spanish partner units, colors, deployments, and service history remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Border guards, customs-security detachments, and local mountain troops supplied the original formation. Spanish cooperation and the strategic importance of the Pyrenean crossings supported its growth.</p>"},
      {id:"role",title:"Role",html:"<p>The division observes and defends passes, valleys, roads, tunnels, and border posts; denies infiltration; and preserves the routes needed for cooperation with Spain.</p>"},
      {id:"organization",title:"Organization",html:"<p>Mountain infantry, fortress companies, mountain artillery, engineers, scouts, signals, logistics, and liaison officers form the working structure. Exact subordinate commands remain open.</p>"},
      {id:"fortifications",title:"Passes and fortifications",html:"<p>Prepared positions, demolitions planning, protected stores, observation posts, and road-control works can turn narrow terrain into a barrier. Locations and construction dates are not established.</p>"},
      {id:"spain",title:"Spanish liaison",html:"<p>Spanish mountain units provide training partners and a southern strategic connection. Cooperation does not transfer command of the division to Madrid or create a permanent binational corps.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Reconnaissance and liaison aircraft support observation, communications, casualty movement, and command visits. Point interception is supplied by national or neighboring commands rather than a full divisional wing.</p>"},
      {id:"identity",title:"Formation identity",html:"<p>Pyrenean peaks, chains, bears, local arms, and Catholic border traditions are possible sources of insignia and ceremony. Exact colors and patronage remain open.</p>"},
      {id:"record",title:"Service record",html:"<p>Border incidents, joint exercises, commanders, fortified sectors, mobilizations, and combat history have not yet been fixed.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"auvergne-mountain-division.html",kicker:"Mountain counterpart",label:"Auvergne Mountain Division"},{href:"gascon-cavalry-division.html",kicker:"Screening partner",label:"Gascon Cavalry Division"},{href:"spanish-armored-forces.html",kicker:"Spanish military context",label:"Spanish Armored Forces"},{href:"latin-bloc.html",kicker:"Alliance context",label:"Latin Bloc"},{href:"occitania.html",kicker:"National setting",label:"Occitania"}],
    facts:[["Country","Occitania"],["Home region","Béarn and Foix"],["Type","Pyrenean mountain division"],["Principal role","Pass and fortified-valley defense"],["Mature status","By c. 1960"],["Foreign liaison","Spanish mountain forces"],["Air component","Reconnaissance and liaison"],["Exact official designation","Open"]]
  }),

  "limousin-marche-security-division": occitanArmyArticle({
    title:"Limousin–Marche Security Division",
    category:"Military formation",
    infoboxKicker:"Interior security and reserve formation",
    lead:"The Limousin–Marche Security Division is the interior-security, reserve-infantry, and communications-protection formation of the Occitan Army. It guards railways, depots, roads, administrative sites, and rear areas; provides replacement manpower; and undertakes the politically difficult work of counter-sabotage and rural security in wooded and road-poor country.",
    canon:"Limousin–Marche identity; internal-security, reserve-infantry, anti-sabotage, railway-protection, rear-area, and rural-security roles; infantry, security, reconnaissance, engineers, signals, transport, liaison aircraft, and surveillance aviation are established as the working formation. Exact designation, number, headquarters, commander, strength, reserve categories, police relationship, detention duties, aircraft, colors, deployments, abuses, and service history remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Railway guards, rural patrols, depot troops, and anti-sabotage units formed its first cadres. Expansion created a reserve division able to secure the rear while more mobile formations concentrated at a frontier.</p>"},
      {id:"role",title:"Role",html:"<p>The division protects transport, communications, supply depots, mobilization sites, prisoners, and administrative centers. It also provides reserve infantry and route-security detachments to other commands.</p>"},
      {id:"organization",title:"Organization",html:"<p>Security and infantry units, railway and route guards, engineers, signals, reconnaissance, transport, medical detachments, and replacement cadres form the working organization. Exact echelons remain open.</p>"},
      {id:"security",title:"Internal security",html:"<p>Communist networks, French reunification movements, German and Italian intelligence, smuggling, and local opposition can all enter its field of work. The boundary between military security, gendarmerie, police, and intelligence authority remains incompletely documented.</p>"},
      {id:"reserve",title:"Reserve and mobilization",html:"<p>The formation receives reservists, guards mobilization infrastructure, and releases trained replacements or local-defense units. Exact call-up categories, training cycles, and wartime strength are open.</p>"},
      {id:"aviation",title:"Liaison and surveillance",html:"<p>Light aircraft support route inspection, communications, photography, and command liaison. The formation does not possess a full close-support or interceptor group in the established framework.</p>"},
      {id:"reputation",title:"Reputation",html:"<p>Other formations often regard its duties as unglamorous. Its control of railways, depots, records, and rear-area movement nevertheless gives it substantial influence during mobilization and political crisis.</p>"},
      {id:"record",title:"Service record",html:"<p>Commanders, barracks, mobilizations, investigations, detention policy, allegations of abuse, and named security operations remain open.</p>"}
    ],
    related:[{href:"occitan-army.html",kicker:"Parent service",label:"Occitan Army"},{href:"provincial-host-system.html",kicker:"Doctrine",label:"Provincial Host System"},{href:"auvergne-mountain-division.html",kicker:"Interior neighbor",label:"Auvergne Mountain Division"},{href:"northern-france.html",kicker:"Frontier and intelligence context",label:"Northern France"},{href:"occitan-battlefield-integration.html",kicker:"Signals context",label:"Occitan Battlefield Integration"},{href:"occitania.html",kicker:"National setting",label:"Occitania"}],
    facts:[["Country","Occitania"],["Home region","Limousin and Marche"],["Type","Security and reserve infantry division"],["Principal role","Rail, rear-area, and anti-sabotage security"],["Mature status","By c. 1960"],["Mobilization role","Reserve and replacement support"],["Air component","Liaison and surveillance"],["Exact official designation","Open"]]
  })
});

const addOccitanArmyRelated = (slug, item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["occitania",{href:"occitan-army.html",kicker:"Land forces",label:"Occitan Army"}],
  ["northern-france",{href:"occitan-army.html",kicker:"Southern frontier rival",label:"Occitan Army"}],
  ["latin-military-aviation",{href:"provincial-host-system.html",kicker:"Occitan air-ground organization",label:"Provincial Host System"}],
  ["occitan-tank-lineage",{href:"rhodanian-armored-division.html",kicker:"Principal formation",label:"Rhodanian Armored Division"}],
  ["occitan-mechanized-support-system",{href:"toulouse-mechanized-division.html",kicker:"Principal formation",label:"Toulouse Mechanized Division"}],
  ["occitan-combat-aircraft-lineage",{href:"provincial-host-system.html",kicker:"Divisional employment",label:"Provincial Host System"}],
  ["occitan-amphibious-group",{href:"bordeaux-guyenne-marine-division.html",kicker:"Army partner",label:"Bordeaux–Guyenne Marine Division"}],
  ["toulouse",{href:"toulouse-mechanized-division.html",kicker:"Provincial formation",label:"Toulouse Mechanized Division"}],
  ["lyon",{href:"rhodanian-armored-division.html",kicker:"Provincial formation",label:"Rhodanian Armored Division"}],
  ["bordeaux",{href:"bordeaux-guyenne-marine-division.html",kicker:"Provincial formation",label:"Bordeaux–Guyenne Marine Division"}],
  ["marseille",{href:"provence-coastal-division.html",kicker:"Provincial formation",label:"Provence Coastal Division"}]
].forEach(([slug,item]) => addOccitanArmyRelated(slug,item));
