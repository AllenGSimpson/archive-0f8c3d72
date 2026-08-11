window.deepArticles = window.deepArticles || {};

const geacpsFoodSources = [
  {href:"../transcript.md",label:"Master Transcript — Japanese food hierarchy, procurement, reserves, shipping, and famine risk"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Imperial Food Agency and outward transfer of shortage risk"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar stabilization, civilian shipping, and imperial development"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open institutional and regional details"}
];

const geacpsFoodDiagram = {
  src:"assets/diagrams/geacps-food-security-system.svg",
  alt:"Diagram of crop reporting, procurement, reserves, shipping allocation, subsistence floors, relief, and black-market leakage in the Co-Prosperity Sphere",
  caption:"The food system protects Japan first in its early form, then acquires reserve floors and relief duties after shortage makes hierarchy politically visible"
};

const geacpsFoodArticle = config => ({
  category:"Food security in the Co-Prosperity Sphere",
  eyebrow:"Dai Tōa Kyōeiken · food, shipping, and subsistence",
  infoboxKicker:"Imperial food-security system",
  landscape:geacpsFoodDiagram,
  ...config,
  sources:[...geacpsFoodSources,...(config.additionalSources || [])],
  categories:config.categories || ["Dai Tōa Kyōeiken","Food security","Japanese economic system","Postwar Asia"]
});

Object.assign(window.deepArticles, {
  "rice-economy-geacps": geacpsFoodArticle({
    title:"Rice Economy of the Co-Prosperity Sphere",category:"Agricultural economy",infoboxKicker:"Staple-food system of the Japanese sphere",
    lead:"The rice economy of the Co-Prosperity Sphere is the connected but unequal system of cultivation, purchase, storage, milling, transport, rationing, and consumption that links Japan with Chōsen, Taiwan, China, Siam, Indochina, Burma, and the southern states. Rice is simultaneously an ordinary staple, taxable crop, export commodity, wage component, military supply, price benchmark, and test of whether Japanese leadership protects or extracts from its associated societies.",
    canon:"Japanese dependence upon imported food; procurement from Chōsen, Taiwan, Indochina, Siam, accessible Burma, and selected Chinese provinces; regional reserves; home-island and strategic priority; local famine risk when shipments continue through poor harvest; treaty bargaining; and later subsistence safeguards are established. Production totals, trade shares, exact surplus regions, milling ownership, grades, prices, ration scales, and annual flows remain open.",
    sections:[
      {id:"geography",title:"Geography of supply",html:"<p>Warm lowlands in Taiwan, Indochina, Siam, Burma, southern China, and parts of the archipelagic system produce major surpluses or potential surpluses. Chōsen and northern regions contribute grain while also remaining large consumers.</p>"},
      {id:"cultivation",title:"Cultivation and improvement",html:"<p>Irrigation, seed selection, fertilizer, flood control, pumps, extension services, land tenure, labor, and credit determine usable output. Japanese development can raise yields while binding farmers to purchasing agencies and debt.</p>"},
      {id:"purchase",title:"Purchase and quota",html:"<p>Governments, cooperatives, traders, and corporate contractors buy rice under negotiated or administratively influenced targets. Exact quota systems differ by constitutional status and remain open.</p>"},
      {id:"movement",title:"Milling, storage, and movement",html:"<p>Paddy must be dried, milled, graded, bagged or bulk-handled, stored, railed, barged, and shipped. Loss, spoilage, insects, port congestion, and missing sacks can matter as much as nominal harvest.</p>"},
      {id:"prices",title:"Prices and rationing",html:"<p>Official purchase and retail prices seek urban stability but can leave farmers underpaid and shops empty. Ration eligibility, household registration, employment, city status, and military need shape legal access.</p>"},
      {id:"politics",title:"Politics of surplus",html:"<p>Siam and other sovereign associates bargain over price, machinery, fertilizer, shipping, and local processing. Dependent territories possess less leverage and face greater pressure to maintain contracted deliveries.</p>"},
      {id:"shortage",title:"Bad harvests",html:"<p>A crop failure becomes an imperial crisis when Tokyo refuses to reduce exports, when ships cannot arrive, or when officials conceal reserve weakness. The early system transfers this danger outward.</p>"},
      {id:"1985",title:"Position by 1985",html:"<p>By 1985 diversified diets, cold chains, improved yields, emergency imports, and reserve rules reduce but do not eliminate rice politics. Staple security remains inseparable from shipping and political status.</p>"}
    ],
    related:[{href:"imperial-food-agency.html",kicker:"Coordinating authority",label:"Imperial Food Agency"},{href:"imperial-food-procurement-system.html",kicker:"Purchase mechanism",label:"Imperial Food Procurement System"},{href:"strategic-food-reserves-geacps.html",kicker:"Stored margin",label:"Strategic Food Reserves"},{href:"food-shipping-priorities-geacps.html",kicker:"Transport allocation",label:"Food Shipping Priorities"},{href:"minimum-subsistence-principle.html",kicker:"Protective rule",label:"Minimum Subsistence Principle"},{href:"food-black-markets-geacps.html",kicker:"Unofficial distribution",label:"Food Black Markets"}],
    facts:[["Principal staple","Rice"],["Major supply regions","Chōsen · Taiwan · China · Siam · Indochina · Burma"],["Principal coordinator","Imperial Food Agency"],["Core infrastructure","Irrigation · mills · warehouses · rail · barges · ships"],["Primary consumers","Rural households · cities · forces · bases · industry"],["Early priority","Japan and strategic demand"],["Principal political danger","Exporting shortage from a producing territory"],["Annual production and flows","Open"]]
  }),

  "imperial-food-procurement-system": geacpsFoodArticle({
    title:"Imperial Food Procurement System",category:"Economic administration",infoboxKicker:"Contracts and quotas for imperial staple supply",
    lead:"The Imperial Food Procurement System is the network of contracts, purchasing targets, quotas, price schedules, clearing arrangements, warehouses, inspections, and treaty bargains through which the Imperial Food Agency secures staple supplies. It does not impose one identical requisition law across every member: direct Japanese regions, protected states, sovereign associates, and private exporters enter the system under different legal forms and unequal bargaining power.",
    canon:"Agency contracts across the Sphere; regional purchasing; price control; treaty obligations; corporate and cooperative intermediaries; priority access to shipping; unequal status; and local attempts to protect stocks are established. A unitary procurement statute is not established. Exact quotas, formulas, prices, enforcement, exemptions, compensation, company allocations, and annual contracts remain open.",
    sections:[
      {id:"forms",title:"Many legal forms",html:"<p>Procurement may appear as a Japanese domestic order, colonial delivery rule, state-to-state contract, clearing agreement, guaranteed purchase, export license, company concession, or emergency requisition.</p>"},
      {id:"forecast",title:"Forecasts and targets",html:"<p>Crop estimates, acreage reports, weather, reserves, population, military plans, and expected shipping produce an annual target. False or late reports can convert a manageable shortfall into crisis.</p>"},
      {id:"prices",title:"Purchase prices",html:"<p>Officials balance affordable urban food against farm income and future planting. A low official price encourages concealment and smuggling; a high one strains budgets and wage policy.</p>"},
      {id:"intermediaries",title:"Intermediaries",html:"<p>National ministries, provincial governments, cooperatives, landlords, millers, trading houses, railways, banks, and carriers all handle part of the transaction. No single agency physically touches every sack.</p>"},
      {id:"status",title:"Constitutional status and bargaining",html:"<p>Siam and major associated governments can demand machinery, fertilizer, development credit, or better prices. Integral territories are governed through Japanese institutions; dependent regions possess narrower remedies.</p>"},
      {id:"enforcement",title:"Enforcement and evasion",html:"<p>Licensing, inspections, movement permits, ration registration, police, customs, tax records, and banking enforce delivery. Farmers and merchants respond through underreporting, substitution, bribery, and clandestine sale.</p>"},
      {id:"crisis",title:"Emergency procurement",html:"<p>Bad harvest, flood, typhoon, port closure, or war can trigger compulsory purchases, substitute grain, foreign tenders, reserve releases, and redirected ships. Exact emergency authority remains open.</p>"},
      {id:"politics",title:"The procurement bargain",html:"<p>The system remains legitimate only when producing regions receive stable prices, useful imports, investment, and credible relief rather than discovering that contracts survive while protection disappears.</p>"}
    ],
    related:[{href:"imperial-food-agency.html",kicker:"Administering authority",label:"Imperial Food Agency"},{href:"rice-economy-geacps.html",kicker:"Principal commodity",label:"Rice Economy"},{href:"sogo-shosha.html",kicker:"Commercial intermediaries",label:"Sōgō Shōsha"},{href:"japanese-yen-area.html",kicker:"Settlement system",label:"Japanese Yen Area"},{href:"food-black-markets-geacps.html",kicker:"Evasion",label:"Food Black Markets"},{href:"greater-east-asia-economic-board.html",kicker:"Priority setting",label:"Greater East Asia Economic Board"}],
    facts:[["System","Imperial food procurement"],["Administering authority","Imperial Food Agency"],["Legal forms","Orders · contracts · quotas · licenses · treaties"],["Principal information","Harvest, stocks, population, prices, and transport"],["Intermediaries","Governments · cooperatives · traders · millers · banks"],["Principal settlement","Yen-area and bilateral clearing"],["Main enforcement problem","Concealment and diversion"],["Quota formulas and prices","Open"]]
  }),

  "strategic-food-reserves-geacps": geacpsFoodArticle({
    title:"Strategic Food Reserves in the Co-Prosperity Sphere",category:"Emergency planning",infoboxKicker:"Regional staple stocks and reserve floors",
    lead:"Strategic food reserves in the Co-Prosperity Sphere are the government, military, municipal, cooperative, and corporate stocks held against harvest failure, storm, shipping interruption, war, price panic, and disaster. The reserve system is regional rather than one Tokyo warehouse: grain remains near vulnerable consumers and transport junctions because a central stock cannot feed an isolated island, inland province, or blockaded port.",
    canon:"Regional reserves; Agency coordination; home-island, base, and strategic-city priority; later minimum subsistence floors; warehouse and shipping integration; emergency release; and political manipulation of stock reports are established. Reserve ratios, locations, ownership, rotation schedules, commodity mix, secrecy, release law, and 1985 totals remain open.",
    sections:[
      {id:"regional",title:"A regional system",html:"<p>Stocks are held in home-island cities, integral territories, bases, industrial centers, producing districts, ports, and associated capitals. Geography prevents complete centralization.</p>"},
      {id:"types",title:"Kinds of reserve",html:"<p>Operational stocks sustain routine distribution; seasonal stocks bridge harvest cycles; strategic stocks cover war or shipping loss; relief stocks support disaster response. Boundaries among them are political as well as accounting.</p>"},
      {id:"rotation",title:"Rotation and loss",html:"<p>Rice and grain must be dried, inspected, fumigated, rotated, and replaced. Moisture, pests, theft, damaged stores, and false ledgers can destroy a reserve that exists on paper.</p>"},
      {id:"floors",title:"Reserve floors",html:"<p>The Minimum Subsistence Principle requires defensible local floors before nonessential exports continue. Japan and strategic bases retain marginal preference, but exceptions must be recorded and politically justified.</p>"},
      {id:"release",title:"Release decisions",html:"<p>Officials choose whether shortage is local, seasonal, speculative, or systemic. Releasing too early exhausts margin; waiting too long protects statistics while people go hungry.</p>"},
      {id:"security",title:"Security and secrecy",html:"<p>Military stocks and exact locations may be secret. Civil authorities need enough disclosure to prevent panic and enough inspection to stop the reserve becoming patronage or private inventory.</p>"},
      {id:"transport",title:"Reserve without transport",html:"<p>A full warehouse does not solve a crisis when roads are flooded, railways broken, ports closed, barges requisitioned, or fuel unavailable. Reserve planning therefore includes movement and handling capacity.</p>"},
      {id:"1985",title:"Reserves by 1985",html:"<p>Better forecasting, cold storage, communications, standardized records, and containerized movement improve resilience. Exact reserve days and regional inequality remain open.</p>"}
    ],
    related:[{href:"imperial-food-agency.html",kicker:"Coordinator",label:"Imperial Food Agency"},{href:"minimum-subsistence-principle.html",kicker:"Reserve doctrine",label:"Minimum Subsistence Principle"},{href:"famine-relief-geacps.html",kicker:"Emergency use",label:"Famine Relief"},{href:"food-shipping-priorities-geacps.html",kicker:"Movement",label:"Food Shipping Priorities"},{href:"rice-economy-geacps.html",kicker:"Principal stock",label:"Rice Economy"}],
    facts:[["System","Distributed strategic reserves"],["Principal coordinator","Imperial Food Agency"],["Stock holders","Governments · military · cities · cooperatives · firms"],["Reserve types","Operational · seasonal · strategic · relief"],["Principal hazards","Spoilage · pests · theft · false reporting · isolation"],["Protective doctrine","Minimum Subsistence Principle"],["Release authority","Agency and competent regional government; exact law open"],["Locations and reserve ratios","Open"]]
  }),

  "food-shipping-priorities-geacps": geacpsFoodArticle({
    title:"Food Shipping Priorities in the Co-Prosperity Sphere",category:"Transport policy",infoboxKicker:"Allocation of ships and inland transport to staple supply",
    lead:"Food shipping priorities in the Co-Prosperity Sphere determine which grain cargo receives a vessel, railway wagon, barge, berth, bunker allotment, warehouse, escort, and unloading gang when transport is scarce. The rules convert the formal food hierarchy into material outcomes: a region may possess harvest or reserve credit yet still suffer if its cargo waits behind military, petroleum, or metropolitan demand.",
    canon:"Food as a strategic shipping category; early precedence for Japan, armed forces, bases, settlers, and strategic cities; associated treaty obligations; regional reserves; rerouting during shortage; naval and corporate transport; and later subsistence safeguards are established. Formal category numbers, scheduling bureau, convoy rules, tonnage shares, port lists, appeals, and crisis precedents remain open.",
    sections:[
      {id:"chain",title:"The transport chain",html:"<p>Rail, road, river, coastal feeder, ocean carrier, berth, crane, warehouse, and final distribution must align. Shipping priority covers the complete chain rather than only an ocean hull.</p>"},
      {id:"hierarchy",title:"Early hierarchy",html:"<p>The immediate postwar order favors the home islands, forces and bases, Japanese settlers and administrators, strategic industrial cities, treaty obligations, and only then ordinary colonial demand.</p>"},
      {id:"competition",title:"Competition with other cargo",html:"<p>Food competes with petroleum, coal, ore, fertilizer, ammunition, troops, machinery, and export goods. Emergency orders can displace profitable cargo or postpone development projects.</p>"},
      {id:"operators",title:"Operators",html:"<p>NYK, Osaka Shōsen, other Japanese carriers, naval transports, associated-state fleets, railways, barges, and local feeder craft all participate. Ownership does not determine priority.</p>"},
      {id:"weather",title:"Weather and season",html:"<p>Monsoon, typhoon, river level, harvest calendar, port silting, ice in northern routes, and cyclone damage make a fixed annual schedule unreliable.</p>"},
      {id:"subsistence",title:"Subsistence constraint",html:"<p>Later doctrine restricts exporting food below a regional survival floor for nonessential consumption elsewhere. Strategic exceptions remain possible and politically dangerous.</p>"},
      {id:"information",title:"Manifests and false certainty",html:"<p>Crop reports, vessel position, warehouse stocks, rail capacity, and port congestion feed allocation offices. Bad data can make a rational-looking plan distribute hunger.</p>"},
      {id:"1985",title:"Priority by 1985",html:"<p>Computing, weather satellites, container handling, larger carriers, and standardized manifests improve control. Political status and strategic importance still influence whose delay is treated as an emergency.</p>"}
    ],
    related:[{href:"japanese-merchant-marine.html",kicker:"Ocean carriers",label:"Japanese Merchant Marine"},{href:"imperial-shipping-allocation-system.html",kicker:"Wider tonnage system",label:"Imperial Shipping Allocation System"},{href:"imperial-food-agency.html",kicker:"Food authority",label:"Imperial Food Agency"},{href:"strategic-food-reserves-geacps.html",kicker:"Stored supply",label:"Strategic Food Reserves"},{href:"southern-resources-sea-lanes.html",kicker:"Southern routes",label:"Southern Resources Sea Lanes"},{href:"minimum-subsistence-principle.html",kicker:"Protective rule",label:"Minimum Subsistence Principle"}],
    facts:[["Policy","Food transport priority"],["Allocated capacity","Ships · rail · barges · berths · warehouses · fuel"],["Early first priority","Japan and strategic demand"],["Competing cargo","Petroleum · coal · ore · military · machinery"],["Operators","Commercial, naval, national, and local carriers"],["Primary disruption","Weather, war, congestion, and bad information"],["Later constraint","Minimum Subsistence Principle"],["Formal priority schedule","Open"]]
  }),

  "minimum-subsistence-principle": geacpsFoodArticle({
    title:"Minimum Subsistence Principle",category:"Public policy doctrine",infoboxKicker:"Rule against exporting a territory below survival",
    lead:"The Minimum Subsistence Principle is the postwar doctrine that no member territory of the Co-Prosperity Sphere should be stripped below a defensible survival floor merely to preserve nonessential consumption elsewhere. It emerged from scandal over continued deliveries during shortage and became the principal formal answer to the charge that Japan exported hunger while claiming to administer common prosperity.",
    canon:"A developing postwar subsistence rule; scandal as its political origin; reserve floors; recorded exceptions; Japanese and strategic marginal preference; famine prevention as an imperial duty; and incomplete equality are established. The scandal's territory and casualties, doctrine's date, legal rank, nutritional measure, enforcement, judicial review, sanctions, and amendment history remain open.",
    sections:[
      {id:"origin",title:"Origin in shortage",html:"<p>A late-1940s shortage while contracted food continues toward Japanese consumers becomes the working political origin. Exact territory, deaths, officials, and parliamentary sequence are not fixed.</p>"},
      {id:"rule",title:"The rule",html:"<p>A territory must retain minimum food and reserve capacity before nonessential export continues. The word minimum matters: the doctrine does not promise equal diets, income, or purchasing power.</p>"},
      {id:"measure",title:"Measuring subsistence",html:"<p>Population, calories, staple availability, vulnerable groups, harvest timing, substitute foods, reserve duration, disease, and transport access all matter. No single tonnage figure proves safety.</p>"},
      {id:"exceptions",title:"Strategic exceptions",html:"<p>War, base survival, evacuation, national emergency, or another territory's more severe crisis may justify breaching a floor. Exceptions require records and political defense.</p>"},
      {id:"enforcement",title:"Enforcement",html:"<p>Agency inspectors, regional governments, reserve ledgers, shipping orders, associated-state diplomacy, Diet scrutiny, newspapers, clergy, and public scandal create overlapping enforcement. Exact legal remedies remain open.</p>"},
      {id:"inequality",title:"Persistent inequality",html:"<p>Japan and strategic cities retain better buffers, transport, purchasing power, and administrative attention. The principle restrains catastrophic extraction without making the food order equal.</p>"},
      {id:"legitimacy",title:"Imperial legitimacy",html:"<p>Once Tokyo claims system-wide authority, famine cannot be dismissed as a local market accident. The principle turns relief into a duty that measures whether hierarchy is useful and protective.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>By 1985 the doctrine informs reserves, procurement, relief, and shipping debates. Its exact statutory form and record of successful or failed invocation remain open.</p>"}
    ],
    related:[{href:"imperial-food-agency.html",kicker:"Administering authority",label:"Imperial Food Agency"},{href:"strategic-food-reserves-geacps.html",kicker:"Material safeguard",label:"Strategic Food Reserves"},{href:"famine-relief-geacps.html",kicker:"Emergency duty",label:"Famine Relief"},{href:"food-shipping-priorities-geacps.html",kicker:"Transport application",label:"Food Shipping Priorities"},{href:"geacps.html",kicker:"Constitutional system",label:"Co-Prosperity Sphere"}],
    facts:[["Doctrine","Minimum Subsistence Principle"],["Purpose","Prevent export below a survival floor"],["Origin","Late-1940s shortage scandal; details open"],["Principal administrator","Imperial Food Agency"],["Material instruments","Reserve floors and shipping limits"],["Strategic exceptions","Permitted but recorded"],["Equality of consumption","Not guaranteed"],["Formal statute and thresholds","Open"]]
  }),

  "famine-relief-geacps": geacpsFoodArticle({
    title:"Famine Relief in the Co-Prosperity Sphere",category:"Disaster response",infoboxKicker:"Emergency food movement and imperial responsibility",
    lead:"Famine relief in the Co-Prosperity Sphere is the emergency system for identifying severe shortage, releasing reserves, importing grain, moving food by naval and commercial transport, restoring water and transport, controlling disease, and preventing a local crop failure from becoming mass mortality. Relief is both practical assistance and political theater because Tokyo's claim to useful leadership makes success or failure an imperial judgment.",
    canon:"Agency responsibility; reserve release; naval, commercial, rail, and air transport; typhoon, flood, crop failure, earthquake, and port interruption response; real but politically selective relief; and the Minimum Subsistence Principle are established. Named famines, dates, casualties, relief corps, international aid, command structure, ration scales, and complete response chronology remain open.",
    sections:[
      {id:"warning",title:"Warning",html:"<p>Harvest reports, market prices, clinic data, migration, ration failure, warehouse inspection, weather, and local appeals provide warning. Censorship and false reporting may delay recognition.</p>"},
      {id:"declaration",title:"Declaration and command",html:"<p>The Agency and competent government must decide that an emergency exceeds ordinary market and local reserve mechanisms. Exact declaration law and division of command remain open.</p>"},
      {id:"supply",title:"Relief supply",html:"<p>Regional reserves, redirected procurement, substitute grain, foreign purchases, military stocks, and donations form the immediate supply pool. Seed grain and draft animals must be protected if recovery is to outlast one season.</p>"},
      {id:"movement",title:"Movement",html:"<p>Naval transports, merchant ships, railways, barges, trucks, aircraft, fishing vessels, and port labor carry relief. Repairing a bridge, pier, road, pump, or warehouse may be the decisive intervention.</p>"},
      {id:"health",title:"Nutrition and public health",html:"<p>Water, sanitation, clinics, vaccination, infant feeding, disease surveillance, and burial or registration accompany food distribution. Starvation and epidemic cannot be managed separately.</p>"},
      {id:"order",title:"Ration order and coercion",html:"<p>Registration, queues, controlled markets, guarded stores, anti-hoarding raids, and movement permits can preserve supply or empower abusive officials. Exact emergency police powers remain open.</p>"},
      {id:"politics",title:"Relief and legitimacy",html:"<p>Rapid assistance can generate loyalty even under strategic subordination. Delay, ethnic preference, corporate profiteering, or the continued export of food can delegitimize the entire Japanese settlement.</p>"},
      {id:"record",title:"Unsettled relief history",html:"<p>The corpus establishes the system and its moral pressure but not a complete catalog of famines and operations. Named events, responsible officials, and mortality figures remain open for later development.</p>"}
    ],
    related:[{href:"imperial-food-agency.html",kicker:"Coordinating authority",label:"Imperial Food Agency"},{href:"minimum-subsistence-principle.html",kicker:"Governing doctrine",label:"Minimum Subsistence Principle"},{href:"strategic-food-reserves-geacps.html",kicker:"Immediate supply",label:"Strategic Food Reserves"},{href:"food-shipping-priorities-geacps.html",kicker:"Emergency movement",label:"Food Shipping Priorities"},{href:"rice-economy-geacps.html",kicker:"Staple system",label:"Rice Economy"}],
    facts:[["System","Co-Prosperity Sphere famine relief"],["Coordinator","Imperial Food Agency with competent governments"],["Triggers","Crop failure · flood · typhoon · earthquake · transport interruption"],["Supply","Reserves · redirected procurement · imports · military stocks"],["Transport","Naval · commercial · rail · road · river · air"],["Associated functions","Water, sanitation, health, seed, and infrastructure"],["Political principle","Imperial responsibility for famine prevention"],["Named operations and casualties","Open"]]
  }),

  "food-black-markets-geacps": geacpsFoodArticle({
    title:"Food Black Markets in the Co-Prosperity Sphere",category:"Informal economy",infoboxKicker:"Unofficial circulation under rationing and price control",
    lead:"Food black markets in the Co-Prosperity Sphere are the unofficial networks through which farmers, millers, officials, transport workers, soldiers, merchants, households, and smugglers divert or exchange food outside procurement, rationing, price, currency, and movement controls. They can undermine public distribution and enrich protected intermediaries, but they also feed people whom the official hierarchy excludes or reaches too slowly.",
    canon:"Postwar rationing and black markets in Japan; low official prices encouraging diversion; unequal access; cross-border smuggling; corrupt and protective official participation; and black markets as both exploitation and survival are established or directly implied. Market names, scale, routes, prices, criminal organizations, enforcement campaigns, official toleration, and 1985 persistence remain open.",
    sections:[
      {id:"causes",title:"Causes",html:"<p>Price ceilings, compulsory delivery, ration shortages, currency restrictions, transport delay, regional price gaps, quality differences, and political priority create gains from illegal exchange.</p>"},
      {id:"supply",title:"Sources of diverted food",html:"<p>Underreported harvest, mill loss, warehouse leakage, military stocks, damaged cargo, substitute grading, forged ration documents, port pilferage, and cross-border trade feed the market.</p>"},
      {id:"participants",title:"Participants",html:"<p>Ordinary households and farmers coexist with professional smugglers, company agents, police, soldiers, officials, transport workers, landlords, and criminal groups. One person may be both victim and participant.</p>"},
      {id:"routes",title:"Routes",html:"<p>Village paths, rivers, rail yards, fishing craft, coastal feeders, truck depots, market streets, military zones, and international borders create many small channels rather than one clandestine pipeline.</p>"},
      {id:"survival",title:"Survival and inequality",html:"<p>Unofficial purchase can save a household when ration registration or status fails. It also advantages buyers with cash, gold, corporate access, foreign currency, or political protection.</p>"},
      {id:"enforcement",title:"Enforcement",html:"<p>Inspections, price police, customs, ration audits, warehouse counts, informers, roadblocks, and exemplary prosecutions suppress visible trade. Excessive enforcement can remove the last supply available to marginal communities.</p>"},
      {id:"information",title:"A second price system",html:"<p>Black-market prices reveal shortage earlier than official reports but also magnify panic and speculation. Administrators watch them while publicly denying their legitimacy.</p>"},
      {id:"legacy",title:"Persistence",html:"<p>Prosperity and improved distribution shrink some staple markets, yet border, luxury, crisis, subsidized, and restricted-goods trade persists. Exact 1985 scale remains open.</p>"}
    ],
    related:[{href:"imperial-food-procurement-system.html",kicker:"Official counterpart",label:"Imperial Food Procurement System"},{href:"rice-economy-geacps.html",kicker:"Principal staple",label:"Rice Economy"},{href:"imperial-food-agency.html",kicker:"Enforcement and policy",label:"Imperial Food Agency"},{href:"japanese-yen-area.html",kicker:"Currency restrictions",label:"Japanese Yen Area"},{href:"singapore.html",kicker:"Commercial and smuggling hub",label:"Singapore"},{href:"famine-relief-geacps.html",kicker:"Crisis context",label:"Famine Relief"}],
    facts:[["System","Unofficial food circulation"],["Principal causes","Controls, shortage, price gaps, and unequal access"],["Typical goods","Rice · grain · oils · preserved food · rationed staples"],["Participants","Households · farmers · traders · officials · transport workers"],["Common routes","Markets · rail · road · river · coastal and border traffic"],["Social function","Survival and profiteering"],["Official response","Inspection, audit, policing, and selective toleration"],["Scale and named networks","Open"]]
  })
});

const addGeacpsFoodRelated = (slug,item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["imperial-food-agency",{href:"rice-economy-geacps.html",kicker:"Staple system",label:"Rice Economy of the Co-Prosperity Sphere"}],
  ["japanese-imperial-economic-system",{href:"imperial-food-agency.html",kicker:"Food-security authority",label:"Imperial Food Agency"}],
  ["greater-east-asia-economic-board",{href:"imperial-food-procurement-system.html",kicker:"Food planning",label:"Imperial Food Procurement System"}],
  ["japanese-merchant-marine",{href:"food-shipping-priorities-geacps.html",kicker:"Priority cargo",label:"Food Shipping Priorities"}],
  ["sogo-shosha",{href:"imperial-food-procurement-system.html",kicker:"Food contracts",label:"Imperial Food Procurement System"}],
  ["singapore",{href:"food-black-markets-geacps.html",kicker:"Informal regional trade",label:"Food Black Markets"}]
].forEach(([slug,item]) => addGeacpsFoodRelated(slug,item));
