window.deepArticles = window.deepArticles || {};

const siberianSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Greater East Asian Co-Prosperity Sphere Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Russia, Siberia, and Central Asia"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Siberian successor chronology"},
  {href:"../transcript.md",label:"Master Transcript — Co-Prosperity Sphere Analysis"}
];

const siberianRelated = [
  {href:"siberia.html",kicker:"Regional overview",label:"Russian and Siberian Successor States"},
  {href:"russian-far-eastern-state.html",kicker:"Eastern monarchy",label:"Russian Far Eastern State"},
  {href:"kazakh-russian-war.html",kicker:"Mass secession war",label:"Kazakh–Russian War"},
  {href:"tehran-concord.html",kicker:"External restraint system",label:"Tehran Concord"}
];

const siberianArticle = config => ({
  category:"Frontiers",
  eyebrow:"Siberian successor system · post-Soviet frontier",
  infoboxKicker:"Russian and Siberian successor history",
  ...config,
  related:[...(config.related || []),...siberianRelated.filter(item=>item.href!==config.slug+".html" && !(config.related||[]).some(other=>other.href===item.href))],
  sources:config.sources || siberianSources,
  categories:config.categories || ["Siberia","Russian successor states","Post-Soviet conflicts"],
  facts:config.facts || []
});

Object.assign(window.deepArticles,{
  "siberian-wars":siberianArticle({
    slug:"siberian-wars",title:"Siberian Wars",eyebrow:"Regional conflicts · 1946–early 1970s",infoboxKicker:"Long post-Soviet war system",
    lead:"The Siberian Wars were the repeated limited conflicts fought among Russian, Soviet-restorationist, Kazakh, industrial, railway, and refugee governments after the collapse of central Soviet authority. Most engagements were small, but four decades of raids, expulsions, destroyed transport, and recurring flight reshaped the population of inner Eurasia.",
    canon:"The violent successor system, its principal conflicts, small-unit scale, and armed normalization after the early 1970s are established. Many individual campaign names, commanders, and exact borders remain under regional reconstruction.",
    sections:[
      {id:"collapse",title:"Collapse without emptiness",html:"<p>Evacuated factories, military districts, ministries, camps, rail administrations, and millions of refugees survive beyond the Urals. Their leaders inherit pieces of a modern state, but no accepted national center capable of commanding the whole.</p>"},
      {id:"railway",title:"Railway Wars, 1946–1951",html:"<p>The first fighting concerns locomotives, bridges, grain trains, fuel, depots, telegraph stations, rolling stock, and evacuated plants. Every durable government learns to fortify junctions and keep strategic trains under armed guard.</p>"},
      {id:"sequence",title:"Regional war sequence",html:"<p>The <a href='western-siberian-war.html'>Western Siberian War</a> produces the Omsk–Novosibirsk dual state; the <a href='kazakh-russian-war.html'>Kazakh–Russian War</a> partitions Kazakhstan; the <a href='yenisei-conflicts.html'>Yenisei conflicts</a> contest the central corridor; and the <a href='baikal-frontier-conflict.html'>Baikal frontier conflict</a> pits Irkutsk against the Far Eastern monarchy.</p>"},
      {id:"scale",title:"Scale of combat",html:"<p>A border clash may involve twenty to one hundred personnel, a large local action a few hundred, and a major Siberian battle roughly five hundred to fifteen hundred on each side. Paper armies are larger than the columns governments can feed, fuel, and move.</p>"},
      {id:"civilians",title:"Civilian consequence",html:"<p>Small formations can still empty towns, burn districts, sever railways, and expose refugees to winter and famine. The Kazakh war becomes the bloodiest exception because thousands of local actions accompany mass expulsion and massacre.</p>"},
      {id:"relics",title:"Armored relics",html:"<p>Restored T-34s, self-propelled guns, armored cars, and improvised carriers are hoarded as district-level strategic assets. A government may own several hulls but only one working engine, moving its operational tank by rail and committing it rarely.</p>"},
      {id:"technology",title:"Repair civilizations",html:"<p>Engineers rebuild locomotives, re-machine gears, recast track links, re-bore guns, and combine several machines into one. The states remain capable technical societies, but their resources preserve inherited systems rather than sustain a modern research race.</p>"},
      {id:"normalization",title:"Armed normalization",html:"<p>Major offensives decline after the early 1970s because borders are fortified and every useful junction has become costly to seize. Narrow agreements govern prisoners, incidents, disease, floods, and stolen rolling stock while espionage, assassination, smuggling, and border fire continue.</p>"}
    ],related:[{href:"siberian-black-market.html",kicker:"Regional circulatory system",label:"Siberian Black Market"},{href:"ak-47-siberia.html",kicker:"Characteristic weapon",label:"AK-47 in Siberia"},{href:"ural-industrial-states.html",kicker:"Western successor belt",label:"Ural Industrial States"}],
    facts:[["Main period","1946–early 1970s"],["First phase","Railway Wars"],["Typical large battle","500–1,500 personnel per side"],["Largest conflict","Kazakh–Russian War"],["Principal objectives","Railways, food, industry, refugees, borders"],["Characteristic armor","Restored wartime vehicles"],["Post-1970s condition","Armed normalization"],["Accepted all-Russian victor","None"]]
  }),

  "omsk-novosibirsk-state":siberianArticle({
    slug:"omsk-novosibirsk-state",title:"Omsk–Novosibirsk dual state",eyebrow:"Russian successor state · formed c. 1954",infoboxKicker:"Western Siberian military-industrial union",
    lead:"The Omsk–Novosibirsk dual state is the principal Russian successor government of western Siberia. Created by an armed compromise after neither city could conquer the other, it joins Omsk’s army and all-Russian ceremonial claim to Novosibirsk’s industry, science, finance, and planning offices.",
    canon:"The dual union, division of functions, internal distrust, and military-industrial role are established. Its final formal constitutional name, office titles, and succession rules remain open.",
    sections:[
      {id:"origins",title:"Two complementary centers",html:"<p>Omsk possesses military authority, western-frontier prestige, and the older claim to an emergency government of Russia. Novosibirsk possesses factories, rail administration, research cadres, financial offices, and a larger civilian production base.</p>"},
      {id:"war",title:"War before union",html:"<p>Omsk attempts to subordinate Novosibirsk during the <a href='western-siberian-war.html'>Western Siberian War</a>. Factory militias and railway control prevent a clean victory, while Novosibirsk cannot protect the whole German-facing frontier without Omsk’s army.</p>"},
      {id:"compact",title:"The armed compromise",html:"<p>The union places military and ceremonial institutions at Omsk and industrial, financial, and planning ministries at Novosibirsk. Constitutional rules prevent either city from transferring every central office onto its own territory.</p>"},
      {id:"security",title:"A divided security state",html:"<p>The army swears to the joint state but retains an Omsk command culture. Both capitals maintain security services, clients, archives, and appointment networks, making every leadership succession a potential constitutional crisis.</p>"},
      {id:"industry",title:"Industry and weapons",html:"<p>Novosibirsk preserves the strongest arms-design and machine-production complex of the Siberian middle. It completes and adopts the <a href='ak-47-siberia.html'>AK-47</a>, while repair plants keep artillery, locomotives, and armored relics operational.</p>"},
      {id:"yenisei",title:"Eastern frontier",html:"<p>The state fights the <a href='yenisei-conflicts.html'>Yenisei conflicts</a> against Krasnoyarsk-centered authorities over rail priority, mining districts, food, and access to the river system between 1957 and 1968.</p>"},
      {id:"urals",title:"Limits in the west",html:"<p>Omsk can defeat individual <a href='ural-industrial-states.html'>Ural industrial states</a> in the field but struggles to occupy fortified factory districts along exposed railways. German preference for several weak neighbors further discourages western consolidation.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>The union is densely populated, heavily armed, and more industrial than most inner successor states, yet it cannot claim universal Russian allegiance. Its two-capital compromise survives because neither half can safely dissolve it.</p>"}
    ],related:[{href:"western-siberian-war.html",kicker:"Founding conflict",label:"Western Siberian War"},{href:"yenisei-conflicts.html",kicker:"Eastern campaigns",label:"Yenisei Conflicts"},{href:"ak-47-siberia.html",kicker:"Armaments lineage",label:"AK-47 in Siberia"}],
    facts:[["Formed","c. 1954 (working chronology)"],["Military capital","Omsk"],["Industrial-planning capital","Novosibirsk"],["Political form","Dual military-industrial state"],["Founding cause","Mutual failure to conquer"],["Army culture","Omsk-centered"],["Principal rifle","AK-47 family"],["Formal constitutional name","Open"]]
  }),

  "western-siberian-war":siberianArticle({
    slug:"western-siberian-war",title:"Western Siberian War",eyebrow:"Founding conflict · c. 1949–1954",infoboxKicker:"Omsk–Novosibirsk unification war",
    lead:"The Western Siberian War was the limited conflict through which Omsk attempted to subordinate Novosibirsk and create a single western Siberian government. Neither side could destroy the institutional resources of the other, and the war ended in the divided union it had been fought to avoid.",
    canon:"The conflict and its outcome are established; “Western Siberian War” and the 1949–54 range remain working historical usage pending a detailed campaign chronology.",
    sections:[
      {id:"claims",title:"Competing claims",html:"<p>Omsk’s officers present emergency military authority as the only defense against Germany and regional dissolution. Novosibirsk’s administrators reject command by an army unable to operate its factories, banks, scientific establishments, or rail schedules.</p>"},
      {id:"opening",title:"Opening campaigns",html:"<p>Omsk columns advance along rail approaches and attempt to compel submission. Novosibirsk mobilizes factory guards, controls rolling stock, interrupts supplies, and secures support from nearby commands threatened by Omsk centralization.</p>"},
      {id:"warfare",title:"Railway warfare",html:"<p>Junctions, bridges, repair yards, grain trains, and locomotive parks matter more than empty territory. Each advance depends on a narrow transport line that defenders can mine, strip, or block with removed rolling stock.</p>"},
      {id:"limits",title:"Limits of victory",html:"<p>Omsk can threaten the industrial capital but cannot administer its economy after destroying or alienating the technical cadres. Novosibirsk can stop trains and make weapons but cannot replace the army guarding the western approaches.</p>"},
      {id:"settlement",title:"Dual-state settlement",html:"<p>The armistice preserves Omsk as military and ceremonial capital and Novosibirsk as industrial, financial, and planning capital. Each retains security organs and political clients under a federal shell.</p>"},
      {id:"memory",title:"War memory",html:"<p>Omsk commemorates the conflict as the preservation of Russian command; Novosibirsk remembers resistance to barracks rule. Joint ceremonies emphasize foreign danger and rarely describe which capital began particular operations.</p>"},
      {id:"succession",title:"Permanent constitutional danger",html:"<p>Every leadership death or purge reopens the question of whether one capital can capture the other’s institutions. The settlement is durable not because it produces trust, but because renewed war would disable both halves.</p>"},
      {id:"legacy",title:"Regional legacy",html:"<p>The union becomes strong enough to challenge Krasnoyarsk and pressure the Ural states, but too internally divided to restore Russia. Its founding war thus hardens regional statehood instead of overcoming fragmentation.</p>"}
    ],related:[{href:"omsk-novosibirsk-state.html",kicker:"Political outcome",label:"Omsk–Novosibirsk Dual State"},{href:"siberian-wars.html",kicker:"Wider conflict system",label:"Siberian Wars"}],
    facts:[["Working dates","c. 1949–1954"],["Belligerents","Omsk and Novosibirsk authorities"],["Principal theater","Western Siberian rail corridor"],["Omsk strength","Army and emergency legitimacy"],["Novosibirsk strength","Industry and railway control"],["Decisive victor","None"],["Outcome","Dual-state compromise"],["Formal campaign title","Working usage"]]
  }),

  "yenisei-conflicts":siberianArticle({
    slug:"yenisei-conflicts",title:"Yenisei conflicts",eyebrow:"Intermittent campaigns · c. 1957–1968",infoboxKicker:"Central Siberian railway and river wars",
    lead:"The Yenisei conflicts were the intermittent wars between the Omsk–Novosibirsk state and Krasnoyarsk-centered authorities over rail access, food, mines, river transport, and political command in central Siberia.",
    canon:"The antagonists, causes, intermittent character, and working 1957–68 span are established. The number, names, and operational sequence of individual campaigns remain open.",
    sections:[
      {id:"geography",title:"The Yenisei corridor",html:"<p>Krasnoyarsk joins the Trans-Siberian railway to river traffic, mining districts, forest resources, and northern supply routes. Control of the corridor can sustain a state without giving it control of the whole central interior.</p>"},
      {id:"rivals",title:"The rival systems",html:"<p>The western dual state seeks reliable eastbound rail passage and recognition of its greater Russian claim. Krasnoyarsk’s command defends local revenue, rolling stock, industrial appointments, and freedom from Omsk officers.</p>"},
      {id:"campaigns",title:"Intermittent campaigns",html:"<p>The conflict is probably two or three limited campaigns separated by ceasefires rather than one continuous declared war. Fighting concentrates around junctions, depots, mines, bridges, and food-producing districts.</p>"},
      {id:"forces",title:"Mobile columns",html:"<p>Governments may register large armies but can move only small combined columns with fuel and ammunition. Railway guards, infantry, engineers, a few guns, and rare operational armored vehicles conduct most actions.</p>"},
      {id:"civilian",title:"Civilian and commercial effects",html:"<p>Interrupted railways raise food prices hundreds of kilometers away and force traffic into river, winter-road, and smuggling systems. Refugees and railway workers become objects of recruitment, suspicion, and exchange.</p>"},
      {id:"ceasefires",title:"Ceasefires without settlement",html:"<p>Temporary agreements restore particular trains, bridges, prisoner exchanges, or navigation seasons. None resolves which state possesses a legitimate claim to command central Siberia.</p>"},
      {id:"exhaustion",title:"End through exhaustion",html:"<p>By the late 1960s both systems are more valuable intact than conquered. Fortified junctions and the risk of destroying irreplaceable industrial assets narrow the aims of later operations.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The conflicts preserve Krasnoyarsk as a separate successor center and establish the Yenisei as a customs and intelligence frontier. Smuggling provides more dependable integration than formal diplomacy.</p>"}
    ],related:[{href:"omsk-novosibirsk-state.html",kicker:"Western belligerent",label:"Omsk–Novosibirsk Dual State"},{href:"siberian-black-market.html",kicker:"Commercial consequence",label:"Siberian Black Market"}],
    facts:[["Working span","c. 1957–1968"],["Western belligerent","Omsk–Novosibirsk state"],["Eastern belligerent","Krasnoyarsk-centered authorities"],["Principal objectives","Rail, food, mines, Yenisei traffic"],["Form","Several limited campaigns"],["Decisive victor","None"],["Outcome","Krasnoyarsk remains separate"],["Detailed campaign sequence","Open"]]
  }),

  "irkutsk-state":siberianArticle({
    slug:"irkutsk-state",title:"Irkutsk state",eyebrow:"Soviet-restorationist successor · Lake Baikal",infoboxKicker:"Principal Soviet claimant in Siberia",
    lead:"The Irkutsk state is the most explicitly Soviet-restorationist government of the Siberian successor system and the principal military threat facing the Russian Far Eastern monarchy. It cannot conquer the Japanese-protected east, but it can sustain raids, sabotage, espionage, and a permanent claim that the monarchy is occupied Soviet territory.",
    canon:"Irkutsk’s ideological identity, frontier role, military limits, and persistent hostility are established. Its complete formal state title, party constitution, and leadership sequence remain open.",
    sections:[
      {id:"inheritance",title:"Soviet institutional inheritance",html:"<p>Irkutsk preserves party, security, military, railway, and planning institutions more explicitly than its Russian-national rivals. Its government treats regional fragmentation as a temporary defeat rather than a legitimate settlement.</p>"},
      {id:"claim",title:"Restorationist claim",html:"<p>The state claims that the Far Eastern monarchy, Vladivostok protectorate, and Japanese frontier order are occupations of Soviet and Russian territory. It refuses to convert that claim into ordinary recognition.</p>"},
      {id:"military",title:"A militarized frontier state",html:"<p>Irkutsk commits a disproportionate share of its limited resources to border units, intelligence, infiltration, arms work, and fortified railway approaches. Militarization makes it dangerous without making it capable of sustained conquest.</p>"},
      {id:"baikal",title:"Baikal frontier conflict",html:"<p>The <a href='baikal-frontier-conflict.html'>Baikal frontier conflict</a> includes raids, sabotage, intelligence operations, border shootings, and several larger clashes from the mid-1950s into the early 1970s.</p>"},
      {id:"japan",title:"Japanese intervention threshold",html:"<p>Tokyo tolerates harassment below the level of existential attack. Irkutsk knows that a full invasion or severe blow against the crown state would bring a Japanese response far beyond its ability to absorb.</p>"},
      {id:"economy",title:"Economy and clandestine trade",html:"<p>Official isolation makes the <a href='siberian-black-market.html'>black market</a> indispensable. Security officers finance smugglers, acquire industrial parts through intermediaries, and move weapons into contested Buryat and frontier districts.</p>"},
      {id:"weapons",title:"Weapons culture",html:"<p>Irkutsk copies and simplifies the Novosibirsk <a href='ak-47-siberia.html'>AK family</a>. Across Baikal the rifle becomes associated with raiders, smugglers, infiltrators, and captured arsenals rather than the Japanese-equipped crown army.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>Conventional raids diminish after punitive defeat and regional exhaustion, but the restoration claim survives. Tehran restrains German and Japanese annexation; it does not compel Irkutsk to recognize the eastern settlement.</p>"}
    ],related:[{href:"baikal-frontier-conflict.html",kicker:"Principal conflict",label:"Baikal Frontier Conflict"},{href:"ak-47-siberia.html",kicker:"Characteristic armament",label:"AK-47 in Siberia"}],
    facts:[["Center","Irkutsk"],["Political identity","Soviet-restorationist"],["Principal adversary","Russian Far Eastern State"],["Eastern frontier","Lake Baikal"],["Methods","Raids, sabotage, espionage, border action"],["Strategic limit","Japanese intervention threshold"],["Formal state title","Open"],["Status in 1985","Armed and unreconciled"]]
  }),

  "baikal-frontier-conflict":siberianArticle({
    slug:"baikal-frontier-conflict",title:"Baikal frontier conflict",eyebrow:"Border conflict · mid-1950s–early 1970s",infoboxKicker:"Irkutsk–Far Eastern confrontation",
    lead:"The Baikal frontier conflict was the prolonged confrontation between Soviet-restorationist Irkutsk and the Japanese-protected Russian Far Eastern State. It combined raids, sabotage, intelligence warfare, smuggling, and limited border battles beneath an understood threshold of Japanese intervention.",
    canon:"The confrontation, participants, methods, intervention threshold, and eventual reduction in open fighting are established. Individual clashes and the exact date of the principal Japanese punitive operation remain working history.",
    sections:[
      {id:"frontier",title:"A frontier at the lake",html:"<p>Japanese recognition begins along the western shore of Lake Baikal, while the crown state administers Chita and the eastern corridors. Geography concentrates roads, rails, settlements, and surveillance into a narrow contested system.</p>"},
      {id:"claims",title:"Incompatible claims",html:"<p>Irkutsk regards the eastern monarchy as an occupied collaborationist territory. Tsar Mikhail’s government regards Irkutsk as the surviving source of Soviet coercion and a direct threat to refugee settlement.</p>"},
      {id:"methods",title:"Raids and sabotage",html:"<p>Patrol attacks, demolitions, infiltrations, agent networks, railway disruption, political murder, and support for irregular groups allow Irkutsk to impose costs without maintaining a conventional invasion force.</p>"},
      {id:"weapons",title:"Contrasting arsenals",html:"<p>Irkutsk units carry AK-family weapons and rebuilt Soviet equipment. Far Eastern frontline formations increasingly use Japanese Type 16 and Type 24 rifles, while captured Soviet calibers remain in frontier and intelligence depots.</p>"},
      {id:"threshold",title:"The intervention threshold",html:"<p>Japanese distance gives Irkutsk room for provocation, but not unlimited freedom. An attempt to seize major Far Eastern territory would trigger Japanese air, rail, and ground power that the restorationist state cannot match.</p>"},
      {id:"punishment",title:"Punitive operation",html:"<p>One confrontation approaches that threshold and produces a severe Japanese strike against Irkutsk military infrastructure. The operation does not destroy the regime, but demonstrates the cost of escalating beyond deniable frontier war.</p>"},
      {id:"cooling",title:"Decline of open fighting",html:"<p>Conventional raids diminish by the early 1970s as border defenses, losses, and the fear of renewed punishment grow. Intelligence, smuggling, propaganda, and occasional shootings continue.</p>"},
      {id:"legacy",title:"An unresolved border",html:"<p>By 1985 the frontier is stable without being recognized by Irkutsk. The Far Eastern army treats the western shore as its principal military danger, more immediate than its managed rivalry with Manchukuo.</p>"}
    ],related:[{href:"irkutsk-state.html",kicker:"Western belligerent",label:"Irkutsk State"},{href:"amur-crisis.html",kicker:"Separate eastern crisis",label:"Amur Crisis"},{href:"ak-47-siberia.html",kicker:"Frontier weapon",label:"AK-47 in Siberia"}],
    facts:[["Working span","Mid-1950s–early 1970s"],["Western belligerent","Irkutsk state"],["Eastern belligerent","Russian Far Eastern State"],["Protecting power","Empire of Japan"],["Principal methods","Raids, sabotage, intelligence war"],["Major escalation","Japanese punitive operation"],["Territorial settlement","No final peace"],["1985 condition","Stable but hostile frontier"]]
  }),

  "russian-steppe-state":siberianArticle({
    slug:"russian-steppe-state",title:"Russian Steppe State",eyebrow:"Russian successor state · northern Kazakhstan",infoboxKicker:"Postwar northern steppe polity",
    lead:"The Russian Steppe State is the Russian-controlled successor government created in northern Kazakhstan by the exhaustion partition of the Kazakh–Russian War. Its citizens describe the territory as a defensible Russian refuge; Kazakhstan describes it as occupied northern land.",
    canon:"The state’s existence, Russian demographic base, rough frontier, refugee role, and contested identity are established. Its exact borders, capital, constitution, and whether “Steppe State” is the final formal title remain open.",
    sections:[
      {id:"origins",title:"Origins in emergency rule",html:"<p>Russian refugees, railway officials, factory managers, and military authorities originally justify their control of northern cities as temporary administration during Soviet collapse. By the early 1950s they are building a permanent state.</p>"},
      {id:"war",title:"Kazakh–Russian War",html:"<p>Kazakh forces attempt to recover ministries, railways, cities, and political ownership of the republic. The resulting 1954–63 war becomes the bloodiest of the Siberian secession conflicts.</p>"},
      {id:"partition",title:"The exhaustion frontier",html:"<p>The border follows occupied rail towns, rivers, fortified roads, agricultural supply districts, mines, and ceasefire positions rather than a parallel or clean ethnic division. Salients, enclaves, and disputed resources remain.</p>"},
      {id:"people",title:"Refugees and expulsions",html:"<p>Russians expelled or fleeing from southern cities reinforce the northern state, while Kazakh communities face retaliation and removal in Russian-held districts. Property claims and family separations outlive the main fighting.</p>"},
      {id:"name",title:"The name dispute",html:"<p>“Russian Steppe State” denies that the polity is merely a severed part of Kazakhstan. Kazakhstan uses occupied northern Kazakhstan, while foreign maps also employ North Kazakhstan or the Steppe State as practical labels.</p>"},
      {id:"economy",title:"Rail, grain, and industry",html:"<p>The state depends on northern railway cities, grain districts, mines, workshops, and trade with Omsk–Novosibirsk. Its irregular border often separates cities from parts of their former agricultural hinterlands.</p>"},
      {id:"society",title:"A refugee military society",html:"<p>Documents, portable household goods, veterans’ organizations, resettlement offices, and stories of southern expulsion shape public life. The state’s institutions present defense as protection against a second removal.</p>"},
      {id:"status",title:"Position in 1985",html:"<p>Major movement has slowed and the frontier is heavily guarded, but neither side accepts the moral account of the other. Tehran leaves the state outside both German and Japanese spheres and does not decide its border.</p>"}
    ],related:[{href:"kazakhstan.html",kicker:"Southern rival",label:"Kazakhstan"},{href:"omsk-novosibirsk-state.html",kicker:"Principal Russian partner",label:"Omsk–Novosibirsk Dual State"}],
    facts:[["Created","By the 1963 exhaustion partition"],["Territory","Russian-held northern Kazakhstan"],["Population base","Russian refugees and northern urban districts"],["Principal rival","Kazakhstan"],["Frontier type","Irregular ceasefire line"],["Everyday short name","Steppe State"],["Alternative foreign label","North Kazakhstan"],["Capital and constitution","Open"]]
  }),

  "ural-industrial-states":siberianArticle({
    slug:"ural-industrial-states",title:"Ural industrial states",eyebrow:"Russian successor belt · eastern Ural frontier",infoboxKicker:"Factory-defense city states",
    lead:"The Ural industrial states are the city-centered successor governments around Sverdlovsk, Chelyabinsk, Magnitogorsk, Kurgan, Tobol, and neighboring eastern Ural centers. Their factories, fortifications, rail districts, and mobilized workers preserve local independence without recreating an integrated Russian economy.",
    canon:"The industrial-state belt, principal centers, German crest frontier, repair economy, and resistance to Omsk absorption are established. Exact borders and formal government names remain open.",
    sections:[
      {id:"geography",title:"Industrial belt",html:"<p>Wartime evacuation and prewar construction leave concentrated steel, engineering, tank, ammunition, rail, and mining complexes just east of the German-held Ural crest. Political power gathers around cities and their supply districts.</p>"},
      {id:"states",title:"Principal successor types",html:"<p>Sverdlovsk–Nizhny Tagil supports the strongest administrative-engineering directorate; Chelyabinsk an arsenal republic; Magnitogorsk a steel-and-mining state; and Kurgan or Tobol a railway and agricultural frontier buffer.</p>"},
      {id:"hinterlands",title:"Cities and hinterlands",html:"<p>These are not walled municipalities alone. Each controls farms, mines, worker settlements, rail posts, forests, reservoirs, and fortified approaches needed to keep its central industrial complex alive.</p>"},
      {id:"frontier",title:"German crest frontier",html:"<p>German sovereignty ends on the principal Ural watershed and mountain crest. Gebirgsjäger patrol passes and railway approaches, deter raids, and privately plan against a future Russian return across the mountains.</p>"},
      {id:"industry",title:"From manufacture to repair",html:"<p>Fragmented access to engines, optics, bearings, rubber, gun steel, chemicals, and fuel turns many inherited plants into enormous repair shops. They refurbish older equipment and make basic weapons without matching bloc research systems.</p>"},
      {id:"independence",title:"Resistance to absorption",html:"<p>Omsk armies must advance along exposed railways into fortified factory districts whose workers expect annexation to transfer appointments and production eastward. Even battlefield defeat does not guarantee occupation.</p>"},
      {id:"germany",title:"German balance",html:"<p>Berlin prefers several weak eastern neighbors to one consolidated Russian power. Controlled trade, warnings, and troop demonstrations can preserve a threatened state without turning it into a declared German client.</p>"},
      {id:"life",title:"Life in a repair civilization",html:"<p>Technical education, ration authorities, factory militias, salvage brigades, and winter maintenance define citizenship. A restored locomotive or tank can be a greater public achievement than a new but unsustainable prototype.</p>"}
    ],related:[{href:"reichskommissariat-moskowien.html",kicker:"German neighbor",label:"Reichskommissariat Moskowien"},{href:"omsk-novosibirsk-state.html",kicker:"Eastern pressure",label:"Omsk–Novosibirsk Dual State"},{href:"ak-47-siberia.html",kicker:"Shared weapons culture",label:"AK-47 in Siberia"}],
    facts:[["Region","Eastern slopes of the Urals"],["Principal centers","Sverdlovsk, Chelyabinsk, Magnitogorsk, Kurgan, Tobol"],["Political form","City-centered industrial states"],["Western frontier","German-held Ural crest"],["Economic specialty","Repair and refurbishment"],["Strategic strength","Fortified industrial districts"],["Common rival","Omsk–Novosibirsk"],["Exact state borders","Open"]]
  }),

  "siberian-black-market":siberianArticle({
    slug:"siberian-black-market",title:"Siberian black market",eyebrow:"Political economy · 1940s–1985",infoboxKicker:"Unofficial circulatory system of inner Eurasia",
    lead:"The Siberian black market is the interlocking system of smugglers, compromised officials, intelligence services, railway workers, pilots, brokers, and concession companies that moves the parts required to keep successor states operating. It is not outside the political order; it is one of the principal ways that order functions.",
    canon:"The black market’s regional role, state sponsorship, principal routes, and operational goods are established. Individual firms, syndicates, and intelligence fronts remain open.",
    sections:[
      {id:"necessity",title:"An economy of necessity",html:"<p>Formal trade is interrupted by war, blockades, currency failure, rival customs claims, and foreign pressure. The most valuable contraband is often not luxury but the component without which a railway, radio net, clinic, or arsenal stops.</p>"},
      {id:"goods",title:"Strategic goods",html:"<p>Locomotive bearings, fuel injectors, radio tubes, antibiotics, machine tools, copper wire, tires, ammunition, replacement barrels, aviation fuel, electrical equipment, and forged identity papers command dependable markets.</p>"},
      {id:"routes",title:"Routes and carriers",html:"<p>Diverted military trains, river craft, winter-road convoys, black-market aircraft, refugee guides, border farms, and concession warehouses connect cities that officially restrict one another’s trade.</p>"},
      {id:"officials",title:"Official complicity",html:"<p>Rail clerks falsify manifests, customs officers accept payment from both sides, and commanders sell confiscated ammunition. A government may execute independent smugglers while protecting the network supplying its own depots.</p>"},
      {id:"intelligence",title:"State-sponsored criminality",html:"<p>Security services use commercial fronts to fund agents, acquire foreign tools, arm minorities, and deny responsibility. Seized contraband can reappear in an army warehouse after passing through a classified account.</p>"},
      {id:"documents",title:"Documents and people",html:"<p>Passports, labor papers, ration cards, residence files, and railway warrants move alongside goods. Smugglers carry refugees, deserters, clergy, technicians, and spies through jurisdictions that may recognize none of the same documents.</p>"},
      {id:"violence",title:"Protection and violence",html:"<p>Every serious merchant needs political protection. Rival security organs kidnap brokers, seize trains, sabotage depots, and use bandit labels to disguise interstate operations.</p>"},
      {id:"legacy",title:"The region’s practical integration",html:"<p>By 1985 formal incident and railway agreements coexist with a mature clandestine economy. Siberia never creates a tidy common market; it acquires a common practice of making prohibited exchange indispensable.</p>"}
    ],related:[{href:"siberian-wars.html",kicker:"Conflict setting",label:"Siberian Wars"},{href:"irkutsk-state.html",kicker:"Major state participant",label:"Irkutsk State"},{href:"yenisei-conflicts.html",kicker:"Central corridor",label:"Yenisei Conflicts"}],
    facts:[["Period","Late 1940s–1985"],["Principal carriers","Rail, rivers, winter roads, aircraft"],["Key commodities","Parts, medicine, fuel, arms, documents"],["Official participation","Routine but deniable"],["Intelligence role","Funding, procurement, infiltration"],["Human traffic","Refugees, deserters, technicians, agents"],["Regional function","Practical economic integration"],["Unified governing body","None"]]
  }),

  "ak-47-siberia":siberianArticle({
    slug:"ak-47-siberia",title:"AK-47 in Siberia",eyebrow:"Small-arms lineage · from 1947",infoboxKicker:"Characteristic rifle family of the successor wars",
    lead:"The AK-47 is the characteristic automatic-rifle family of the Siberian successor wars. Completed around Novosibirsk after Soviet collapse, it becomes the standard arm of the western dual state and then spreads through licensed production, capture, copying, and imperfect frontier manufacture.",
    canon:"Novosibirsk completion and adoption, Mikhail Kalashnikov’s regional status, the milled-to-stamped production sequence, widespread derivatives, and Far Eastern non-adoption are established.",
    sections:[
      {id:"survival",title:"Survival of the design",html:"<p>Mikhail Kalashnikov’s wartime design work is sufficiently advanced to survive the destruction of central Soviet procurement. The contracting armaments administration moves the designer and part of the program toward his Altai-adjacent Novosibirsk industrial setting.</p>"},
      {id:"adoption",title:"Novosibirsk adoption",html:"<p>A reduced 1947 competition selects the rifle for the Omsk–Novosibirsk government. Design offices, proving work, documentation, and pilot production become institutions of the industrial capital.</p>"},
      {id:"production",title:"Difficult early manufacture",html:"<p>Rugged service does not mean easy first production. Metallurgy, heat treatment, machining, gauges, and ammunition quality remain demanding, and early Siberian rifles use relatively heavy milled receivers in modest numbers.</p>"},
      {id:"spread",title:"Spread across the successor states",html:"<p>Capture, export, theft, defecting technicians, and copied tooling carry the design to Krasnoyarsk, Irkutsk, Kazakh arsenals, Magnitogorsk, and smaller industrial governments. Improved stamping spreads during the 1960s.</p>"},
      {id:"family",title:"A regional weapons family",html:"<p>Variants include the original Novosibirsk rifle, simplified Irkutsk models, militia and export versions, folding-stock vehicle arms, squad-automatic derivatives, and rough rebuilds with uneven interchangeability.</p>"},
      {id:"kalashnikov",title:"The engineer and the name",html:"<p>Kalashnikov receives awards, lectures at technical schools, and becomes a Novosibirsk state hero. Beyond its borders the initials are often understood as a factory or weapon code; the gun becomes more famous than the designer.</p>"},
      {id:"far-east",title:"Far Eastern exception",html:"<p>The Russian Far Eastern crown army standardizes on Japanese Type 16 and later Type 24 rifles rather than adding 7.62×39 mm to its main supply chain. AKs remain common among Irkutsk raiders, smugglers, agents, and captured auxiliaries.</p>"},
      {id:"symbol",title:"Symbol of the frontier",html:"<p>The curved magazine and familiar report visually unite armies that accept no common government. A carefully proofed Novosibirsk rifle and an unsafe frontier copy may share a name while embodying very different industrial worlds.</p>"}
    ],related:[{href:"omsk-novosibirsk-state.html",kicker:"Adopting state",label:"Omsk–Novosibirsk Dual State"},{href:"irkutsk-state.html",kicker:"Major derivative user",label:"Irkutsk State"},{href:"baikal-frontier-conflict.html",kicker:"Frontier association",label:"Baikal Frontier Conflict"}],
    facts:[["Designer","Mikhail Kalashnikov"],["Initial completion","Novosibirsk, c. 1947"],["First adopting state","Omsk–Novosibirsk dual state"],["Cartridge","7.62 mm intermediate"],["Early receivers","Milled"],["Wider stamped production","From the 1960s"],["Far Eastern crown-army standard","Japanese-pattern rifles instead"],["Cultural position","Rifle famous; designer regionally famous"]]
  })
});

const addSiberianRelated=(slug,items)=>{const article=window.deepArticles[slug];if(!article)return;article.related=article.related||[];for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.unshift(item);};
addSiberianRelated("kazakh-russian-war",[{href:"russian-steppe-state.html",kicker:"Northern successor",label:"Russian Steppe State"},{href:"siberian-wars.html",kicker:"Regional conflict system",label:"Siberian Wars"}]);
addSiberianRelated("russian-far-eastern-state",[{href:"irkutsk-state.html",kicker:"Principal western threat",label:"Irkutsk State"},{href:"baikal-frontier-conflict.html",kicker:"Western frontier",label:"Baikal Frontier Conflict"}]);
addSiberianRelated("tehran-concord",[{href:"siberian-wars.html",kicker:"Frontier restrained by the settlement",label:"Siberian Wars"}]);

if(window.deepArticles["siberian-black-market"]){
  const sections=window.deepArticles["siberian-black-market"].sections||[];
  const insertionPoint=sections.findIndex(section=>section.id==="routes");
  const contribution={id:"substitution",title:"Substitution and acceptance",html:"<!-- altwwii-writer-block:start id=wb-v-20260816-u6p3x writer=v kind=extrapolation created=2026-08-16T12:54:32-06:00 --><p>A buyer unable to obtain the named component supplied a maker’s number, drawing, worn sample, measurements, or a description of the machine and failure. Brokers searched for an original part, one removed from another machine, a locally made copy, or a component from a rival standard that a workshop could adapt. Threads, dimensions, voltage, material, heat treatment, and connection points mattered more than the name painted on the crate.</p><p>Depot mechanics measured the part, checked fit, and, where equipment allowed, tested one item before accepting the lot. Remote buyers often relied on a familiar broker or machinist because gauges, drawings, and test rigs were missing. Relabeled crates and mixed batches concealed origin, and a substitute that ran briefly could later fail through poor alloy, insulation, machining, or lubrication. Payment, replacement, and blame then depended on reputation and political protection rather than a dependable cross-border warranty.</p><!-- altwwii-writer-block:end -->"};
  if(insertionPoint>=0&&!sections.some(section=>section.id===contribution.id)) sections.splice(insertionPoint,0,contribution);
}
