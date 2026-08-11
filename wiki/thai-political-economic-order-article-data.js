window.deepArticles = window.deepArticles || {};

const thaiOrderSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Thailand and the mainland order"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese Asia and Thai associated status"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Thai political and imperial chronology"},
  {href:"../transcript.md",label:"Master Transcript — Thailand's postwar development, Turns 702–703"}
];

const thaiOrderArticle = config => ({
  category:"Thailand",
  eyebrow:"Kingdom of Thailand · principal associate of Japan",
  infoboxKicker:"Institution of the Thai imperial order",
  ...config,
  sources:thaiOrderSources,
  categories:config.categories || ["Thailand","Thai political history","GEACPS","Southeast Asia"]
});

Object.assign(window.deepArticles, {
  "phibun-victory-regime": thaiOrderArticle({
    title:"Phibun Victory Regime",
    eyebrow:"Thai political system · 1941–1957",
    infoboxKicker:"Wartime victory and assimilationist empire",
    lead:"The Phibun Victory Regime was the authoritarian military-nationalist government that carried Thailand through the victorious alliance with Japan and converted wartime territorial gains into a permanent enlarged kingdom. It described annexation as restoration of the Thai realm and treated cultural assimilation, army service, infrastructure, and visible modernization as proof of national victory.",
    canon:"Phibun's continuous rule through 1957, alliance with Japan, preservation of the name Thailand, retained Cambodian, Lao, Shan, and Malayan gains, authoritarian nationalism, initial three-zone administration, assimilationist policy, rivalry with the crown, and displacement by Sarit are established. Cabinet lists, constitutional instruments, elections, provincial boundaries, security agencies, and the exact fall sequence remain open.",
    sections:[
      {id:"origin",title:"Victory without postwar repudiation",html:"<p>Japanese victory removes the historical collapse that discredited Plaek Phibunsongkhram's wartime alignment. The government can claim that alliance preserved sovereignty, expelled European strategic power, and restored territories denied to Bangkok.</p>"},
      {id:"claims",title:"Official claims",html:"<p>The regime credits itself with expansion, modernization, military strength, and Thailand's admission to the Japanese order as an ally rather than a conquered dependency. It never formally describes the multinational result as an empire.</p>"},
      {id:"heartland",title:"The Thai heartland",html:"<p>Prewar Thailand remains under ordinary ministries, provinces, schools, courts, taxation, and conscription. The army and central bureaucracy possess their strongest reach here.</p>"},
      {id:"east",title:"Eastern recovered provinces",html:"<p>Khmer and Lao territories are formally integrated. Thai-language administration, appointed governors, schools, military service, renamed places, and Buddhist hierarchy seek legal and cultural incorporation without eliminating local language or memory.</p>"},
      {id:"malaya",title:"The Malay crown dependency",html:"<p>The peninsula cannot be administered like Battambang. Malay sultans, Islam, and customary institutions survive beneath Thai control of defense, customs, railways, ports, foreign relations, senior policing, and strategic taxation.</p>"},
      {id:"monarchy",title:"The young monarchy",html:"<p>King Bhumibol possesses dynastic legitimacy older than the Victory Regime but initially little independent machinery. The army can claim to have won the realm; the Chakri crown can claim to embody peoples whom military Thai nationalism cannot absorb.</p>"},
      {id:"limits",title:"Limits of Thaiification",html:"<p>Khmer, Lao, Malay, Shan, and other communities retain family, temple, mosque, court, and local networks. Administrative victory exposes the weakness of describing every loyal subject as ethnically Thai.</p>"},
      {id:"fall",title:"Displacement in 1957",html:"<p>Corruption, military factionalism, Japanese commercial pressure, royal competition, and the burdens of permanent territorial government allow Sarit Thanarat to remove Phibun while preserving the victory settlement.</p>"}
    ],
    related:[{href:"plaek-phibunsongkhram.html",kicker:"Principal ruler",label:"Plaek Phibunsongkhram"},{href:"thai-imperial-system.html",kicker:"Territorial order",label:"Thai Imperial System"},{href:"sarit-bhumibol-settlement.html",kicker:"Successor order",label:"Sarit–Bhumibol Settlement"},{href:"bhumibol-adulyadej.html",kicker:"Dynastic rival",label:"Bhumibol Adulyadej"},{href:"thailand.html",kicker:"State",label:"Kingdom of Thailand"}],
    facts:[["Period","1941–1957"],["Principal ruler","Plaek Phibunsongkhram"],["Political character","Authoritarian military nationalism"],["External alliance","Empire of Japan"],["Territorial policy","Annexation described as restoration"],["Cultural policy","Thaiification and differentiated administration"],["Successor order","Sarit–Bhumibol royal-military settlement"],["Detailed constitutional chronology","Open"]]
  }),

  "sarit-bhumibol-settlement": thaiOrderArticle({
    title:"Sarit–Bhumibol royal-military settlement",
    eyebrow:"Thai constitutional order · 1957–1963",
    infoboxKicker:"Army government and dynastic imperial legitimacy",
    lead:"The Sarit–Bhumibol royal-military settlement was the governing bargain under which Sarit Thanarat's army controlled executive authority and security while King Bhumibol Adulyadej defined the enlarged kingdom as one crown governing several protected peoples. It replaced Phibun's narrow assimilationist victory state without surrendering its territory.",
    canon:"The 1957–1963 period, Sarit's authoritarian government, Bhumibol's expanded public and political role, royal development monarchy, army coercion, Buddhist legitimation, differentiated rule, Japanese economic partnership, and succession to Thanom are established. Secret agreements, reserve powers, cabinet composition, legal instruments, provincial settlements, and patronage allocations remain open.",
    sections:[
      {id:"crisis",title:"The limits of the Victory Regime",html:"<p>By the mid-1950s conquest administration, corruption, military rivalry, Japanese commercial entry, resistance to compulsory assimilation, and an increasingly visible king require a new basis of rule.</p>"},
      {id:"formula",title:"The governing formula",html:"<p>The army governs and secures the realm; the monarchy defines what the realm is. Sarit supplies appointments, decree, development administration, and coercion. Bhumibol supplies a legitimacy no single general can manufacture.</p>"},
      {id:"crown",title:"Imperial kingship",html:"<p>Royal tours, audiences, provincial delegations, ceremonies, patronage, and development projects present the king as guardian of Thai, Lao, Khmer, Malay, and frontier subjects rather than sovereign of one ethnicity alone.</p>"},
      {id:"development",title:"Development monarchy",html:"<p>Irrigation, roads, agriculture, clinics, education, and electrification extend state presence. Royal sponsorship turns material administration into a paternal relationship between distant communities and Bangkok.</p>"},
      {id:"religion",title:"Crown, sangha, and local institutions",html:"<p>Buddhist hierarchy links central Thai, Lao, Khmer, and other Theravada communities. Malay Islamic institutions and hereditary rulers require separate protection and bargaining rather than absorption into the sangha.</p>"},
      {id:"administration",title:"Differentiated imperial administration",html:"<p>Local languages, courts, monastic or Islamic institutions, ceremonies, and selected notables survive beneath Thai supremacy. Tolerated difference is a technique of durable rule, not recognition of equal sovereignty.</p>"},
      {id:"japan",title:"Japanese partnership",html:"<p>Japanese machinery, credit, markets, and strategic support replace the American role of Thailand's historical development era. Bangkok bargains as an associate with its own army, banks, currency, and government.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>Sarit's death in 1963 transfers government to Thanom Kittikachorn, but the crown has become a permanent arbiter. No later military faction can plausibly own the imperial settlement alone.</p>"}
    ],
    related:[{href:"sarit-thanarat.html",kicker:"Military ruler",label:"Sarit Thanarat"},{href:"bhumibol-adulyadej.html",kicker:"Royal partner",label:"Bhumibol Adulyadej"},{href:"phibun-victory-regime.html",kicker:"Preceding order",label:"Phibun Victory Regime"},{href:"thai-imperial-system.html",kicker:"Constitutional geography",label:"Thai Imperial System"},{href:"thanom-high-imperial-order.html",kicker:"Successor phase",label:"Thanom High Imperial Order"}],
    facts:[["Period","1957–1963"],["Military ruler","Sarit Thanarat"],["Royal partner","Bhumibol Adulyadej"],["Political formula","Army government and monarchical legitimacy"],["Administrative doctrine","One crown, one state, several protected peoples"],["Economic partner","Empire of Japan"],["Successor","Thanom Kittikachorn"],["Formal constitutional instrument","Open"]]
  }),

  "thanom-high-imperial-order": thaiOrderArticle({
    title:"Thanom high imperial order",
    eyebrow:"Thai political system · 1963–1973",
    infoboxKicker:"Peak central reach of the enlarged kingdom",
    lead:"The Thanom high imperial order was the phase from 1963 to 1973 in which Thailand's ministries, armed forces, transport system, corporate partners, and security administration reached farther into the enlarged realm than at any earlier time. Rapid growth strengthened the system while creating the urban, professional, regional, and business interests that ultimately broke Thanom's personal military rule.",
    canon:"Thanom's 1963 succession, royal-military inheritance, rapid development, expanding mainland influence, emergency government, guarded Japanese integration, growing urban and regional opposition, and removal in the 1973 crisis are established. Constitutions, cabinets, party experiments, security incidents, economic plans, and precise protest chronology remain open.",
    sections:[
      {id:"succession",title:"Succession to Sarit",html:"<p>Thanom inherits the premiership, senior military coalition, technocratic programs, and Japanese relationship after Sarit's death. He inherits neither Sarit's founding authority nor unrestricted control of the monarchy.</p>"},
      {id:"reach",title:"The high imperial state",html:"<p>Roads, communications, education, military districts, provincial offices, police, companies, and development budgets give Bangkok unprecedented practical reach across the heartland and annexed territories.</p>"},
      {id:"security",title:"Security government",html:"<p>Emergency law, censorship, police, military appointment, and managed representation answer genuine frontier and subversive threats while also protecting factional power and commercial monopolies.</p>"},
      {id:"economy",title:"Growth and Japanese integration",html:"<p>Japanese finance, shipping, machinery, industrial inputs, and markets accelerate growth. Thai licensing and national partners prevent immediate corporate subordination but cannot eliminate technical dependence.</p>"},
      {id:"region",title:"Mainland influence",html:"<p>Thailand becomes the most capable mainland secondary power, shaping Malaya, the Mekong states, and Burma. Influence creates strategic opportunity and expensive obligations.</p>"},
      {id:"society",title:"New social constituencies",html:"<p>Universities, professional administration, urban business, national banks, regional entrepreneurs, and younger officers expand under the development order and demand greater influence over its direction.</p>"},
      {id:"opposition",title:"Converging opposition",html:"<p>Students, royal constitutionalists, anti-corruption nationalists, excluded business houses, Buddhist reformers, provincial advocates, and military rivals disagree about the desired system but unite against indefinite factional ownership.</p>"},
      {id:"collapse",title:"The crisis of 1973",html:"<p>Mass protest and elite fracture force royal arbitration. Thanom loses office, demonstrating that the crown rather than the prime minister is the final custodian of imperial continuity.</p>"}
    ],
    related:[{href:"thanom-kittikachorn.html",kicker:"Principal ruler",label:"Thanom Kittikachorn"},{href:"sarit-bhumibol-settlement.html",kicker:"Inherited order",label:"Sarit–Bhumibol Settlement"},{href:"thai-constitutional-imperial-crisis.html",kicker:"Terminal crisis",label:"Thai Constitutional and Imperial Crisis"},{href:"thai-japanese-corporate-convergence.html",kicker:"Economic development",label:"Thai–Japanese Corporate Convergence"},{href:"thailand.html",kicker:"State",label:"Kingdom of Thailand"}],
    facts:[["Period","1963–1973"],["Principal ruler","Thanom Kittikachorn"],["Royal arbiter","Bhumibol Adulyadej"],["Political character","Military high imperial order"],["Economic condition","Rapid Japanese-associated development"],["Regional position","Expanding influence in Malaya, Burma, and the Mekong"],["Terminal event","Thai constitutional and imperial crisis"],["Detailed cabinet and protest chronology","Open"]]
  }),

  "thai-constitutional-imperial-crisis": thaiOrderArticle({
    title:"Thai constitutional and imperial crisis",
    eyebrow:"Political transition · 1973–1978",
    infoboxKicker:"Fall of personal military rule and crisis of direct empire",
    lead:"The Thai constitutional and imperial crisis was the period from Thanom Kittikachorn's fall in 1973 through the reconstruction of government around a royal-technocratic order during the Malay–Bornean War. Urban constitutional conflict and the cost of direct rule on the peninsula converged into one argument over who governed Thailand and what form its empire should take.",
    canon:"Thanom's removal, royal arbitration, unstable ministries, continuing military power, urban and business opposition, the Malay–Bornean War, hardline defense of annexation, the alternative of protected Malayan statehood, and transition around 1977–1978 are established. Cabinets, elections, leaders, violence, constitutional texts, and the exact date and title of the successor settlement remain open.",
    sections:[
      {id:"1973",title:"The 1973 rupture",html:"<p>Students, professionals, royal constitutionalists, business interests, reformers, and military rivals converge against Thanom. The king's intervention removes the ruler without abolishing the army or imperial state.</p>"},
      {id:"ministries",title:"Unstable ministries",html:"<p>Civilian, royal, bureaucratic, and military combinations compete to govern. Parliamentary openings matter, but no cabinet can disregard the palace, armed forces, Japanese relationship, or annexed territories.</p>"},
      {id:"question",title:"The imperial question",html:"<p>Every constitutional proposal must decide whether distant peoples are provinces, dependencies, protected communities, or potential client states. The crisis is therefore constitutional and territorial at once.</p>"},
      {id:"war",title:"Malay–Bornean War",html:"<p>The collapse of Bornean Malaya produces a Malay national emergency and forces Bangkok to reconsider direct possession of the former British peninsula.</p>"},
      {id:"hardline",title:"The hardline position",html:"<p>Military nationalists call the peninsula a lawful reward of victory. Surrender, they argue, would dishonor Phibun, encourage Cambodian and Lao revisionism, weaken the transport corridor, and reward insurgency.</p>"},
      {id:"indirect",title:"The indirect-imperial position",html:"<p>Royal and technocratic planners argue that a protected Malayan kingdom can preserve bases, defense, transit, alignment, and influence while ending expensive daily administration of an unwilling population.</p>"},
      {id:"settlement",title:"Triangular settlement",html:"<p>Japanese compensation and guarantees make it possible for Thailand to exchange direct sovereignty for paramount protection over the restored Federated Kingdom of Malaya while retaining its prewar southern provinces.</p>"},
      {id:"outcome",title:"Outcome",html:"<p>By approximately 1977–1978 a royal-technocratic order makes managed political turnover compatible with military guardianship and indirect empire. The exact leading personnel remain open where the canon records a Prem-led or Prem-like settlement.</p>"}
    ],
    related:[{href:"thanom-high-imperial-order.html",kicker:"Preceding phase",label:"Thanom High Imperial Order"},{href:"royal-technocratic-order-thailand.html",kicker:"Successor system",label:"Royal-Technocratic Order in Thailand"},{href:"malay-bornean-war.html",kicker:"External crisis",label:"Malay–Bornean War"},{href:"thai-protection-of-malaya.html",kicker:"Imperial settlement",label:"Thai Protection of Malaya"},{href:"bhumibol-adulyadej.html",kicker:"Royal arbiter",label:"Bhumibol Adulyadej"}],
    facts:[["Period","1973–approximately 1978"],["Opening event","Removal of Thanom Kittikachorn"],["Royal arbiter","Bhumibol Adulyadej"],["External crisis","Malay–Bornean War"],["Central choice","Direct annexation or protected Malayan statehood"],["Strategic guarantor","Empire of Japan"],["Successor","Royal-technocratic order"],["Exact ministries and constitutional instruments","Open"]]
  }),

  "royal-technocratic-order-thailand": thaiOrderArticle({
    title:"Royal-technocratic order in Thailand",
    eyebrow:"Thai political system · from c. 1977–1978",
    infoboxKicker:"Managed constitutional monarchy and protected-states empire",
    lead:"The royal-technocratic order is the political system that emerged from Thailand's 1970s crisis. The king and Privy Council, armed forces, professional bureaucracy, parliamentary parties, provincial politicians, national corporate houses, and Japanese partners share power while protecting a narrow set of imperial and strategic commitments from ordinary cabinet turnover.",
    canon:"The late-1970s transition, Prem-led or Prem-like character, managed parliamentary government, royal and military guardianship, professional bureaucracy, protected Malaya, retained Khmer and Lao territories, controlled Japanese integration, and continued operation through the 1980s are established. The principal minister's identity, exact accession date, cabinets, constitutions, elections, party system, and post-1985 succession remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The fall of Thanom proves that personal military rule cannot govern against palace, urban society, business, and regional interests simultaneously. The Malay–Bornean crisis proves that direct annexation is not always the most useful imperial form.</p>"},
      {id:"institutions",title:"The governing institutions",html:"<p>The palace arbitrates; the armed forces guard the settlement; technocrats manage planning and finance; elected politicians distribute budgets and patronage; corporate houses organize investment; Japanese partners supply technology and markets.</p>"},
      {id:"elections",title:"Managed parliamentary politics",html:"<p>Elections and cabinets determine spending, social policy, provincial bargains, and many commercial rules. They do not easily alter the crown, military guardianship, Japanese association, protected Malaya, or annexed frontier provinces.</p>"},
      {id:"prem",title:"Prem-led or Prem-like leadership",html:"<p>Prem Tinsulanonda is the strongest historical analogue and working candidate: an army figure trusted by the palace who can redefine military interest around indirect empire and stable civilian administration. Final personal chronology remains open.</p>"},
      {id:"malaya",title:"Protected-states doctrine",html:"<p>Malaya receives citizenship, domestic ministries, courts, police, taxation, Islam, and its rulers. Thailand retains defense, alignment, bases, transit, railway rights, and intervention authority.</p>"},
      {id:"culture",title:"Culture inside the empire",html:"<p>Khmer, Lao, and Malay language, schooling, religion, publishing, and ceremony expand as protected cultures inside Thailand, not as foreign national sovereignties entitled to secede.</p>"},
      {id:"economy",title:"Corporate and monetary autonomy",html:"<p>Thai banks, firms, licenses, and the baht give Bangkok leverage over Japanese investment. Economic sovereignty becomes negotiated interdependence rather than insulation.</p>"},
      {id:"legacy",title:"Political legacy",html:"<p>The order makes cabinet turnover compatible with imperial continuity. Its stability depends upon keeping palace, army, bureaucracy, business, and Japan from uniting against the same government.</p>"}
    ],
    related:[{href:"thai-constitutional-imperial-crisis.html",kicker:"Founding crisis",label:"Thai Constitutional and Imperial Crisis"},{href:"thai-protection-of-malaya.html",kicker:"Protected client",label:"Thai Protection of Malaya"},{href:"thai-imperial-system.html",kicker:"Territorial structure",label:"Thai Imperial System"},{href:"thai-japanese-corporate-convergence.html",kicker:"Economic pillar",label:"Thai–Japanese Corporate Convergence"},{href:"autonomous-baht-system.html",kicker:"Monetary pillar",label:"Autonomous Baht System"}],
    facts:[["Established","Approximately 1977–1978"],["Political character","Managed royal-technocratic constitutional monarchy"],["Principal institutions","Crown, army, bureaucracy, parliament, and corporate houses"],["Working leading analogue","Prem Tinsulanonda"],["Protected client","Federated Kingdom of Malaya"],["External partner","Empire of Japan"],["Ordinary cabinet turnover","Permitted"],["Exact leader, constitution, and election chronology","Open"]]
  }),

  "thai-imperial-system": thaiOrderArticle({
    title:"Thai imperial system",
    eyebrow:"Constitutional geography · multinational kingdom",
    infoboxKicker:"One Thai-headed crown over differentiated peoples",
    lead:"The Thai imperial system is the differentiated constitutional order through which the Kingdom of Thailand governs its Thai heartland, annexed Khmer and Lao provinces, retained southern Malay territories, and protected Malayan client while exercising wider influence in Burma and the Mekong. Official doctrine calls the realm one kingdom; comparative scholarship describes it as an empire.",
    canon:"The official name Kingdom of Thailand, survival of Siam as historic and pluralist language, Thai-headed multinational rule, ordinary heartland provinces, annexed eastern territories, retained prewar southern provinces, protected Malaya, army and royal authority, and influence in Burma and the Mekong are established. Precise borders, province names, citizenship statutes, representation, tax systems, courts, and autonomy schedules remain open.",
    sections:[
      {id:"name",title:"Thailand and Siam",html:"<p>Victory preserves Phibun's official name Thailand. Siam survives in royal, historical, corporate, foreign, and pluralist language as a term better able to suggest a realm broader than ethnic Thai nationality.</p>"},
      {id:"heartland",title:"Thai heartland",html:"<p>The prewar core is governed through ordinary provinces, ministries, courts, schools, taxation, and conscription. Its institutions define the national norm.</p>"},
      {id:"east",title:"Khmer and Lao provinces",html:"<p>Western Cambodian and Lao acquisitions are Thai territory and their inhabitants Thai citizens. Local language, Buddhism, ceremony, and memory survive beneath Thai administration and advancement requirements.</p>"},
      {id:"south",title:"Southern Malay territories",html:"<p>Thailand retains its prewar southern provinces after the Malayan settlement. Islamic institutions and local identities require more accommodation than the central provinces, but these territories are not transferred to protected Malaya.</p>"},
      {id:"malaya",title:"Protected Malaya",html:"<p>The former British peninsula outside Singapore becomes a real domestic state beneath Thai strategic supremacy. Indirect rule replaces annexation without ending empire.</p>"},
      {id:"crown",title:"Imperial kingship",html:"<p>The Chakri monarch is presented as guardian above ordinary ethnic nationalism. Royal authority makes differentiated status appear paternal and continuous rather than merely military.</p>"},
      {id:"region",title:"Outer influence",html:"<p>Thailand's banks, firms, army, transport, diplomacy, and later protectorate obligations extend into Malaya, Burma, Laos, Cambodia, and the wider mainland system.</p>"},
      {id:"contradiction",title:"The central contradiction",html:"<p>Thailand insists upon one Thai kingdom while deriving its regional power from ruling peoples who are not Thai. Cultural protection moderates that contradiction without resolving sovereignty claims.</p>"}
    ],
    related:[{href:"thailand.html",kicker:"National overview",label:"Kingdom of Thailand"},{href:"phibun-victory-regime.html",kicker:"Annexation phase",label:"Phibun Victory Regime"},{href:"royal-technocratic-order-thailand.html",kicker:"Mature government",label:"Royal-Technocratic Order"},{href:"thai-protection-of-malaya.html",kicker:"Indirect dependency",label:"Thai Protection of Malaya"},{href:"thai-protectorate-burma.html",kicker:"Later protectorate",label:"Thai Protectorate over Burma"},{href:"cambodia.html",kicker:"Revisionist neighbor",label:"Kingdom of Cambodia"}],
    facts:[["Official state","Kingdom of Thailand"],["Alternative historic term","Siam"],["State character","Thai-headed multinational empire"],["Core territory","Prewar Thai heartland"],["Annexed populations","Khmer, Lao, Malay, Shan, and others"],["Protected client","Federated Kingdom of Malaya"],["Later protectorate","Union of Burma"],["Detailed territorial and autonomy statutes","Open"]]
  }),

  "thai-japanese-corporate-convergence": thaiOrderArticle({
    title:"Thai–Japanese corporate convergence",
    eyebrow:"Political economy · 1940s–2000",
    infoboxKicker:"Negotiated integration between two corporate systems",
    lead:"Thai–Japanese corporate convergence is the gradual interlocking of Japanese finance, technology, components, markets, and standards with Thai banks, royal and military enterprises, commercial families, construction firms, agribusiness, retailers, and transport concerns. Unlike subordinate company states, Thailand enters the relationship with institutions capable of licensing, delaying, and reshaping foreign investment.",
    canon:"Slow Japanese entry, licensed joint ventures, Thai land, finance, distribution and political access, Japanese technology and markets, growing supply-chain dependence, alliances with Thai houses, Thai expansion into neighboring states, and deep but negotiated convergence by 2000 are established. Company names, ownership percentages, deals, statutes, industrial plants, scandals, and market shares remain open.",
    sections:[
      {id:"difference",title:"A state able to bargain",html:"<p>Thailand possesses a central government, army, banks, currency, established firms, and domestic capital before Japanese companies gain commanding positions. Entry therefore requires partnership rather than simple inheritance of seized European assets.</p>"},
      {id:"licenses",title:"Licensed partnership",html:"<p>Japanese firms enter automobiles, appliances, machinery, electrical equipment, petrochemicals, transport, telecommunications, and consumer electronics through minority, balanced, or politically negotiated ventures.</p>"},
      {id:"exchange",title:"The corporate exchange",html:"<p>Thai partners provide land, labor, licensing, local finance, distribution, procurement access, and political networks. Japanese partners provide machine tools, components, patents, management, certification, credit, and export markets.</p>"},
      {id:"dependence",title:"Supply-chain dependence",html:"<p>A factory may remain Thai-owned while relying on Japanese engines, electronics, industrial software, precision inputs, standards, and orders. Legal ownership does not alone determine operational independence.</p>"},
      {id:"alliances",title:"Alliance with Thai corporate houses",html:"<p>Japanese banks and manufacturers ally with Thai commercial and political families rather than defeating them. Foreign influence gains domestic defenders and becomes harder to separate from national capital.</p>"},
      {id:"limits",title:"Limits of resistance",html:"<p>Bangkok can discipline one company, require a joint venture, or protect a sector. It cannot oppose the entire Japanese network while retaining export access, military modernization, consumer prosperity, and regional infrastructure.</p>"},
      {id:"outward",title:"Thailand's regional corporate empire",html:"<p>Thai banks, builders, food firms, retailers, transport companies, and agricultural combines expand into Laos, Cambodia, Burma, Malaya, and the southern archipelago, often using Japanese finance and equipment.</p>"},
      {id:"mature",title:"Convergence by 2000",html:"<p>Japanese firms do not own the whole Thai economy, but Thai institutions cannot organize a sustained economy-wide opposition to them. Thailand reaches the common Sphere condition later and on better terms.</p>"}
    ],
    related:[{href:"royal-technocratic-order-thailand.html",kicker:"Political framework",label:"Royal-Technocratic Order"},{href:"autonomous-baht-system.html",kicker:"Financial foundation",label:"Autonomous Baht System"},{href:"corporate-host-bargain.html",kicker:"Sphere comparison",label:"Corporate-Host Bargain"},{href:"japanese-imperial-economic-system.html",kicker:"Wider system",label:"Japanese Imperial Economic System"},{href:"thai-burmese-concession-economy.html",kicker:"Regional extension",label:"Thai–Burmese Concession Economy"}],
    facts:[["Period","1940s–2000"],["Entry model","Licenses and joint ventures"],["Thai assets","Land, finance, distribution, procurement, and political access"],["Japanese assets","Technology, components, credit, standards, and markets"],["Mature condition","Deep negotiated interdependence"],["Direct Japanese company-state rule","Absent"],["Thai outward markets","Malaya, Burma, Mekong states, and southern archipelago"],["Companies and ownership structures","Open"]]
  }),

  "autonomous-baht-system": thaiOrderArticle({
    title:"Autonomous baht system",
    eyebrow:"Thai monetary order · Co-Prosperity Sphere",
    infoboxKicker:"National currency inside yen-centered settlement",
    lead:"The autonomous baht system is Thailand's national monetary and banking order inside the Japanese economic sphere. The baht remains a genuine instrument of Thai budgets, credit, domestic banking, taxation, and political bargaining while exchange, reserves, trade finance, and industrial settlement connect it closely to the yen.",
    canon:"Continued baht sovereignty, autonomous Thai banks, national fiscal and credit use, Japanese trade and reserve influence, stronger freedom than subordinate development currencies, and the currency's role in Thai associated status are established. Parities, reserve composition, convertibility, note designs, central-bank law, crises, controls, and postwar reform dates remain open.",
    sections:[
      {id:"survival",title:"Survival of monetary sovereignty",html:"<p>Thailand enters the postwar Sphere as an ally with its government and banking system intact. It does not receive a new Japanese-administered development currency.</p>"},
      {id:"domestic",title:"Domestic functions",html:"<p>Taxes, budgets, wages, savings, ordinary loans, provincial spending, and most national accounts remain denominated in baht. Currency therefore supports real domestic political choice.</p>"},
      {id:"banks",title:"Thai banks",html:"<p>National and state-connected banks allocate credit, partner with corporate houses, finance trade, and mediate foreign entry. Their survival distinguishes Thailand from weaker concession economies.</p>"},
      {id:"yen",title:"Yen-centered settlement",html:"<p>Japanese machinery, components, shipping, insurance, and markets make yen access essential. Exchange and reserve rules connect the baht to Japanese clearing without abolishing national denomination.</p>"},
      {id:"leverage",title:"Political leverage",html:"<p>Control of licensing, credit, local settlement, and domestic banks allows Bangkok to delay projects, protect firms, and negotiate joint ventures. Monetary autonomy raises the cost of direct Japanese pressure.</p>"},
      {id:"limits",title:"Limits of autonomy",html:"<p>A baht policy that disrupts Japanese supply chains, debt service, export settlement, or strategic investment faces pressure from banks, firms, ministries, and Tokyo simultaneously.</p>"},
      {id:"region",title:"Regional use",html:"<p>Thai trade, construction, and protection extend baht-denominated or baht-linked finance into Malaya, Burma, Laos, Cambodia, and border markets, alongside yen and local currencies.</p>"},
      {id:"status",title:"Symbol of associated status",html:"<p>The baht is not proof of equality with Japan. It is evidence that Thailand is negotiated with as a principal associate rather than administered as a resource client.</p>"}
    ],
    related:[{href:"thai-japanese-corporate-convergence.html",kicker:"Industrial context",label:"Thai–Japanese Corporate Convergence"},{href:"japanese-imperial-economic-system.html",kicker:"Sphere monetary order",label:"Japanese Imperial Economic System"},{href:"thailand.html",kicker:"Issuing state",label:"Kingdom of Thailand"},{href:"thai-protection-of-malaya.html",kicker:"Protected market",label:"Thai Protection of Malaya"},{href:"thai-burmese-concession-economy.html",kicker:"Protectorate finance",label:"Thai–Burmese Concession Economy"}],
    facts:[["Currency","Thai baht"],["Issuing jurisdiction","Kingdom of Thailand"],["Domestic banking","Thai-controlled and state-connected institutions"],["Sphere settlement center","Japanese yen"],["Principal uses","Budgets, taxation, wages, savings, and domestic credit"],["Regional reach","Malaya, Burma, and Mekong border commerce"],["Relative status","Unusually autonomous associated-state currency"],["Parity, reserves, and convertibility","Open"]]
  })
});

const addThaiOrderRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []), ...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addThaiOrderRelated("thailand",[{href:"phibun-victory-regime.html",kicker:"1941–1957",label:"Phibun Victory Regime"},{href:"sarit-bhumibol-settlement.html",kicker:"1957–1963",label:"Sarit–Bhumibol Settlement"},{href:"thanom-high-imperial-order.html",kicker:"1963–1973",label:"Thanom High Imperial Order"},{href:"royal-technocratic-order-thailand.html",kicker:"Mature political system",label:"Royal-Technocratic Order"},{href:"thai-imperial-system.html",kicker:"Constitutional geography",label:"Thai Imperial System"},{href:"autonomous-baht-system.html",kicker:"Monetary sovereignty",label:"Autonomous Baht System"}]);
addThaiOrderRelated("plaek-phibunsongkhram",[{href:"phibun-victory-regime.html",kicker:"Political system",label:"Phibun Victory Regime"},{href:"thai-imperial-system.html",kicker:"Territorial legacy",label:"Thai Imperial System"}]);
addThaiOrderRelated("bhumibol-adulyadej",[{href:"sarit-bhumibol-settlement.html",kicker:"Founding bargain",label:"Sarit–Bhumibol Settlement"},{href:"royal-technocratic-order-thailand.html",kicker:"Mature royal order",label:"Royal-Technocratic Order"}]);
addThaiOrderRelated("sarit-thanarat",[{href:"sarit-bhumibol-settlement.html",kicker:"Political system",label:"Sarit–Bhumibol Settlement"},{href:"thanom-high-imperial-order.html",kicker:"Successor phase",label:"Thanom High Imperial Order"}]);
addThaiOrderRelated("thanom-kittikachorn",[{href:"thanom-high-imperial-order.html",kicker:"Political system",label:"Thanom High Imperial Order"},{href:"thai-constitutional-imperial-crisis.html",kicker:"Removal and transition",label:"Thai Constitutional and Imperial Crisis"}]);
addThaiOrderRelated("thai-protection-of-malaya",[{href:"thai-constitutional-imperial-crisis.html",kicker:"Origin",label:"Thai Constitutional and Imperial Crisis"},{href:"royal-technocratic-order-thailand.html",kicker:"Protecting system",label:"Royal-Technocratic Order"},{href:"thai-imperial-system.html",kicker:"Wider hierarchy",label:"Thai Imperial System"}]);
addThaiOrderRelated("thai-protectorate-burma",[{href:"thai-imperial-system.html",kicker:"Protecting power",label:"Thai Imperial System"},{href:"royal-technocratic-order-thailand.html",kicker:"Governmental context",label:"Royal-Technocratic Order"}]);
addThaiOrderRelated("japanese-imperial-economic-system",[{href:"autonomous-baht-system.html",kicker:"Associated-state currency",label:"Autonomous Baht System"},{href:"thai-japanese-corporate-convergence.html",kicker:"National variation",label:"Thai–Japanese Corporate Convergence"}]);
