window.deepArticles=window.deepArticles||{};

const americanCapitalSources=[
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature American hemisphere and post-1985 alignments"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — political and corporate order through 2000"},
  {href:"../transcript.md",label:"Master Transcript — mature Americas continuation"}
];

const americanCapitalRelated=[
  {href:"american-hemisphere.html",kicker:"Strategic system",label:"American Hemisphere"},
  {href:"corporate-geopolitics-americas.html",kicker:"Economic geography",label:"Corporate Geopolitics in the Americas"},
  {href:"world-capitals.html",kicker:"Global comparison",label:"Capital Cities of the Five Systems"},
  {href:"countries.html",kicker:"Political geography",label:"List of Countries"}
];

function americanCapital(data){
  return {
    category:"Cities",eyebrow:data.eyebrow,infoboxKicker:data.infoboxKicker,
    infoboxTitle:data.infoboxTitle||data.title,title:data.title,lead:data.lead,canon:data.canon,
    sections:data.sections,related:data.related||americanCapitalRelated,
    sources:[...americanCapitalSources,...(data.additionalSources||[])],
    categories:data.categories||[data.title,"Capital cities","Americas"],facts:data.facts,flag:data.flag
  };
}

Object.assign(window.deepArticles,{
  "capitals-of-the-mature-americas":americanCapital({
    title:"Capital Cities of the Mature Americas",eyebrow:"Urban political geography · c. 2000",infoboxKicker:"Seven capitals across overlapping systems",
    lead:"The capitals of the mature Americas are the principal arenas in which national sovereignty, foreign security alignment, cultural affinity, and corporate penetration meet without becoming identical. Mexico City and Santiago defend active balance; Havana prefers Latin capital against Washington; Caracas operates beneath an American security ceiling; Lima and Quito manage Japanese–American competition; and Buenos Aires combines a German defense inheritance with American civilian commerce.",
    canon:"The seven national capitals, their states' mature strategic positions, the distinction among strategic, cultural, and corporate alignment, and their broad political-economic functions are established. Comparative populations, municipal budgets, exact metropolitan limits, mayoral chronologies, and complete corporate portfolios remain open.",
    sections:[
      {id:"layers",title:"Capitals on three maps",html:"<p>A diplomatic map identifies the state and its security relationship. A cultural map follows language, religion, media, education, and prestige. A corporate map follows finance, insurance, concessions, standards, transport, and ownership. Capital cities are where these layers are negotiated, licensed, taxed, displayed, and resisted.</p>"},
      {id:"comparison",title:"Seven political marketplaces",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Capital</th><th>Strategic position around 2000</th><th>Defining urban role</th></tr></thead><tbody><tr><td><a href='mexico-city.html'>Mexico City</a></td><td>Independent</td><td>Mexican-first arbiter between American geography and Latin counterweights</td></tr><tr><td><a href='havana.html'>Havana</a></td><td>Sovereign, Latin-affiliated</td><td>Selective opening that excludes American corporate control</td></tr><tr><td><a href='caracas.html'>Caracas</a></td><td>Firm American client</td><td>Seat of a security republic with a secondary Latin layer</td></tr><tr><td><a href='lima.html'>Lima</a></td><td>Japan's principal Pacific foothold</td><td>Military-developmental capital managing the sharpest corporate contest</td></tr><tr><td><a href='quito.html'>Quito</a></td><td>GEACPS-associated balancer</td><td>Political counterweight to commercial Guayaquil</td></tr><tr><td><a href='santiago.html'>Santiago</a></td><td>Independent balancer</td><td>Domestic corporate center and author of the Santiago Doctrine</td></tr><tr><td><a href='buenos-aires.html'>Buenos Aires</a></td><td>Einheitspakt-associated, sovereign</td><td>German defense and American civilian systems in one national market</td></tr></tbody></table></div>"},
      {id:"security",title:"Security capitals",html:"<p>Caracas is the clearest case in which the strategic question has already been settled from outside. Mexico City and Santiago instead build policy around refusing a permanent foreign veto. Lima and Quito preserve Japanese relationships under American pressure, while Buenos Aires must reconcile a German-pattern military establishment with the diplomatic consequences of the Falklands defeat.</p>"},
      {id:"corporate",title:"Corporate capitals",html:"<p>Banks, ministries, embassies, law offices, insurers, standards boards, party patrons, concession agents, and foreign chambers of commerce concentrate in the capitals even when mines, ports, plantations, and factories lie elsewhere. Quito must continually bargain with Guayaquil, Lima with Callao and Samanco–Chimbote, Santiago with the copper districts, and Buenos Aires with the industrial and agricultural interior.</p>"},
      {id:"culture",title:"Cultural alignment",html:"<p>Havana and Mexico City demonstrate why cultural affinity is not the same as formal bloc membership. Spanish and Catholic connections can restrain American influence without transferring sovereignty to Rome or Madrid. Caracas can sustain a strong Latin cultural-commercial layer while remaining strategically American.</p>"},
      {id:"comparison-limits",title:"Limits of a capital-city map",html:"<p>Political capitals do not contain whole national economies. Guayaquil is Ecuador's largest port, Buenos Aires does not encompass the Argentine military-industrial interior, and Mexico's northern border economy responds to pressures distant from the federal capital. The cities are decision nodes, not substitutes for national geography.</p>"}
    ],
    related:[{href:"mexico-city.html",kicker:"Independent north",label:"Mexico City"},{href:"havana.html",kicker:"Latin Caribbean",label:"Havana"},{href:"caracas.html",kicker:"American client",label:"Caracas"},{href:"lima.html",kicker:"Japanese Pacific foothold",label:"Lima"},{href:"quito.html",kicker:"Northern Pacific frontier",label:"Quito"},{href:"santiago.html",kicker:"Independent south",label:"Santiago"},{href:"buenos-aires.html",kicker:"Dual alignment",label:"Buenos Aires"}],
    facts:[["Reference period","c. 2000"],["Independent balancers","Mexico and Chile"],["Firm American client","Venezuela"],["Latin-affiliated exception","Cuba"],["Japanese–American contest","Peru and Ecuador"],["German strategic center","Argentina"]]
  }),

  "mexico-city":americanCapital({
    title:"Mexico City",eyebrow:"Capital of the United Mexican States",infoboxKicker:"Capital of the independent northern balancer",flag:{src:"assets/flags/mexico.svg",alt:"Flag of Mexico",caption:"National flag"},
    lead:"Mexico City is the capital and largest political center of the United Mexican States. In the mature American order it is the headquarters of a deliberately Mexican-first system that uses Spanish and broader Latin connections to counterweight, rather than replace, the immense commercial pull of the United States.",
    canon:"Mexico City's national-capital role, connection to the Second Cristiada settlement, Mexican-first corporate policy, Catholic-corporatist institutions, independent foreign policy, and administration of a sovereign gold-defined currency are established. Population, district government, municipal leadership, infrastructure chronology, and exact post-1985 administrations remain open.",
    sections:[
      {id:"federal",title:"Federal capital and national center",html:"<p>The presidency, Congress, ministries, courts, armed-service headquarters, central banking institutions, universities, national press, and foreign missions make Mexico City the place where regional bargains become federal policy. Its authority depends upon managing a republic far larger and more diverse than the capital.</p>"},
      {id:"cristiada",title:"The post-Cristiada political city",html:"<p>The settlement of the <a href='second-cristiada.html'>Second Cristiada</a> leaves Catholic social organization, labor representation, federal authority, and regional autonomy in continuous negotiation. The capital becomes the center of a Catholic-corporatist tendency without turning Mexico into a clerical dependency or a member of the Latin bloc.</p>"},
      {id:"companies",title:"Mexican-first corporate order",html:"<p>Federal policy prefers viable Mexican firms, invites Spanish and other Latin partners where diversification is useful, and accepts American capital where border geography, technology, supply chains, or price make it indispensable. Ministries in the capital arbitrate competition rather than promise economic autarky.</p>"},
      {id:"currency",title:"Monetary sovereignty",html:"<p>The <a href='mexican-gold-currency.html'>gold-defined national currency</a> settles readily against both the American dollar and Latin scudo. Central banking and reserve policy give Mexico City a monetary bridge without dollarization or scudo membership.</p>"},
      {id:"hemisphere",title:"A capital under northern gravity",html:"<p>Washington cannot treat Mexico like a Caribbean client, while Mexico cannot ignore the continental market to its north. Diplomacy therefore concentrates on preventing commercial dependence from becoming a security veto and Latin affinity from becoming a foreign claim upon Mexican politics.</p>"},
      {id:"metropolis",title:"Metropolitan limits",html:"<p>Rapid growth, housing, transport, water, air quality, informal commerce, industrial dispersion, and migration remain central urban pressures. The archive does not yet fix how the altered political economy changes their precise chronology.</p>"}
    ],
    related:[{href:"mexico.html",kicker:"Sovereign state",label:"United Mexican States"},{href:"mexican-gold-currency.html",kicker:"Monetary system",label:"Mexican Gold Currency"},{href:"mexican-catholic-national-settlement.html",kicker:"Political order",label:"Mexican Catholic National Settlement"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Mexico_City",label:"Wikipedia — Mexico City (pre-divergence urban baseline)"}],categories:["Mexico City","Mexico","Capital cities","American Hemisphere"],
    facts:[["Country","United Mexican States"],["Strategic position","Independent"],["Corporate policy","Mexican-first and commercially plural"],["External counterweight","Spanish and broader Latin institutions"],["Currency","Sovereign gold-defined national money"],["Formal Latin-bloc membership","None"]]
  }),

  "havana":americanCapital({
    title:"Havana",eyebrow:"Capital of the Republic of Cuba",infoboxKicker:"Fortress capital and Latin doorway",flag:{src:"assets/flags/cuba.svg",alt:"Flag of Cuba",caption:"National flag"},
    lead:"Havana is the capital, principal port, and political center of the Republic of Cuba. It develops from the command city of an armed fortress state into the administrative gateway for a selective opening to Spanish and broader Latin capital designed to preserve Cuban sovereignty against Washington.",
    canon:"Havana's capital and port roles, fortress-government function, connection to the Havana Understanding, later preference for Latin investors, restriction of American corporate influence, and cultural-political centrality are established. Municipal institutions, population, exact opening laws, company portfolios, and redevelopment chronology remain open.",
    sections:[
      {id:"fortress",title:"Capital of the porcupine state",html:"<p>Government, armed forces, civil defense, rationing, intelligence, port control, and national broadcasting concentrate in Havana. The <a href='havana-understanding.html'>Havana Understanding</a> freezes direct American intervention while leaving the city organized around the expectation that sovereignty must be made expensive to violate.</p>"},
      {id:"port",title:"Port, supply, and vulnerability",html:"<p>Havana's port links the island to fuel, food, machinery, shipping, tourism, and foreign credit. The same concentration makes blockade and external dependence persistent political fears.</p>"},
      {id:"opening",title:"The Latin opening",html:"<p>As permanent mobilization eases, ministries admit Spanish and other Latin banks, carriers, hotels, telecommunications firms, insurers, and industrial partners. The <a href='cuban-latin-opening.html'>opening</a> is sold as diversification away from the United States, not reconciliation with it.</p>"},
      {id:"culture",title:"Cultural capital",html:"<p>Music, publishing, radio, cinema, architecture, universities, Catholic institutions, and Afro-Cuban public culture give Havana influence beyond its population. Latin affiliation feels culturally plausible even where the state jealously rejects foreign political direction.</p>"},
      {id:"washington",title:"Across the Florida Straits",html:"<p>Havana remains geographically exposed to American trade, intelligence, broadcasting, and military power. Its mature strategy permits commerce sufficient for recovery while preventing an American corporate network from becoming the island's effective government.</p>"},
      {id:"city",title:"A controlled reopening",html:"<p>Tourism, restoration, housing, port repair, and consumer imports return unevenly. The visible reopening of the waterfront and central districts coexists with security controls and the institutional memory of siege.</p>"}
    ],
    related:[{href:"cuba.html",kicker:"Sovereign state",label:"Republic of Cuba"},{href:"havana-understanding.html",kicker:"Security settlement",label:"Havana Understanding"},{href:"cuban-latin-opening.html",kicker:"Mature economic policy",label:"Cuban Opening to the Latin World"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Havana",label:"Wikipedia — Havana (pre-divergence urban baseline)"}],categories:["Havana","Cuba","Capital cities","Caribbean"],
    facts:[["Country","Republic of Cuba"],["Strategic position","Sovereign, Latin-affiliated"],["Security legacy","Fortress / porcupine state"],["Preferred foreign capital","Spanish and broader Latin"],["American corporate role","Restricted"],["Principal urban function","Government, port, culture, and controlled opening"]]
  }),

  "caracas":americanCapital({
    title:"Caracas",eyebrow:"Capital of the Republic of Venezuela",infoboxKicker:"Capital beneath the American security ceiling",flag:{src:"assets/flags/venezuela.svg",alt:"Flag of Venezuela",caption:"National flag"},
    lead:"Caracas is the capital of Venezuela and the political headquarters of the American-backed security republic created by the 1966 intervention and settlement. It hosts a substantial Spanish, Italian, and broader Latin commercial-cultural layer, but no foreign activity is permitted to challenge American predominance in defense, bases, or petroleum security.",
    canon:"Caracas's capital role, the 1966 crisis and settlement, American advisory and security predominance, petroleum politics, and tolerated Latin commercial layer are established. Exact constitutional institutions, municipal leadership, company shares, demographic chronology, and later administrations remain open.",
    sections:[
      {id:"crisis",title:"The capital after the 1966 crisis",html:"<p>The <a href='venezuelan-intervention.html'>American intervention</a> ends the concession emergency and reconstructs political authority around an explicit security relationship. Caracas remains the seat of a formally sovereign government whose practical room for maneuver is limited by advisers, facilities, oil-security rights, and the intervention precedent.</p>"},
      {id:"oil",title:"Petroleum government",html:"<p>Oil ministries, concession negotiations, customs revenue, banks, foreign missions, labor organizations, and infrastructure planning make the capital the command point of a petroleum economy whose productive geography lies elsewhere.</p>"},
      {id:"ceiling",title:"The American ceiling",html:"<p>American influence is not merely a large market share. It establishes the limit beyond which rival bases, military missions, command systems, or control of petroleum infrastructure will not be tolerated.</p>"},
      {id:"latin",title:"The Latin layer",html:"<p>Spanish and Italian firms, media, construction, Catholic networks, migration ties, banking, and consumer culture remain visible. Their presence gives Caracas a broader Latin public life without creating an alternative strategic alignment.</p>"},
      {id:"inequality",title:"Metropolitan inequality and security",html:"<p>Oil wealth, state construction, elite districts, rapid migration, informal settlements, policing, and political patronage shape the metropolitan order. Security government can build quickly while leaving the distribution of citizenship and prosperity contested.</p>"},
      {id:"hemisphere",title:"A model and warning",html:"<p>Washington presents Caracas as proof that intervention can restore order without annexation. Critics throughout the hemisphere treat the city as evidence that formal sovereignty may survive after strategic independence has been lost.</p>"}
    ],
    related:[{href:"venezuela.html",kicker:"Sovereign state",label:"Republic of Venezuela"},{href:"venezuelan-intervention.html",kicker:"Founding crisis and settlement",label:"American Intervention in Venezuela"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Caracas",label:"Wikipedia — Caracas (pre-divergence urban baseline)"}],categories:["Caracas","Venezuela","Capital cities","American Hemisphere"],
    facts:[["Country","Republic of Venezuela"],["Strategic position","Firm American client"],["Founding mature settlement","1966 Caracas settlement"],["Economic center","Petroleum administration and finance"],["Secondary external layer","Spanish, Italian, and broader Latin"],["Excluded rival control","Defense, bases, and petroleum infrastructure"]]
  }),

  "lima":americanCapital({
    title:"Lima",eyebrow:"Capital of the Republic of Peru",infoboxKicker:"Capital of Japan's principal American foothold",flag:{src:"assets/flags/peru.svg",alt:"Flag of Peru",caption:"National flag"},
    lead:"Lima is the capital of Peru and the principal political center of Japan's strongest Pacific foothold in the Americas. Together with neighboring Callao, it governs a military-developmental republic whose Japanese relationships in shipping, fisheries, mining, arms, and infrastructure face sustained American corporate counter-penetration.",
    canon:"Lima's capital role, the military-developmental state, Japanese strategic-commercial relationship, Samanco–Chimbote dispute, mature Japanese–American corporate contest, and connection to Callao are established. Municipal chronology, political leadership, population, corporate portfolios, and individual security incidents remain open.",
    sections:[
      {id:"government",title:"Military-developmental capital",html:"<p>Executive ministries, armed-service commands, planning offices, development banks, embassies, universities, and national media make Lima the political center of a state that treats foreign partnerships as instruments of industrial and strategic autonomy.</p>"},
      {id:"callao",title:"Lima and Callao",html:"<p>The capital's political authority depends upon the port and naval geography of Callao. Shipping, customs, naval administration, import industries, and foreign missions connect the metropolitan region directly to the Pacific contest.</p>"},
      {id:"japan",title:"The Japanese system",html:"<p>Japanese shipping, fisheries, mining, arms, finance, technical missions, and the <a href='samanco-chimbote-complex.html'>Samanco–Chimbote complex</a> give the relationship physical depth. Lima accepts partnership while continuing to insist that facilities and concessions remain under Peruvian sovereignty.</p>"},
      {id:"america",title:"American counter-penetration",html:"<p>American banks, mining capital, software, telecommunications, insurers, airlines, and service firms compete through contracts and political sponsorship rather than a formal occupation system. Their reach makes Lima a marketplace between rival corporate ecologies.</p>"},
      {id:"security",title:"Managing the corporate frontier",html:"<p>Concession guards, labor disputes, ports, roads, and ambiguous Japanese legal privileges can turn commercial conflict into a security crisis. The capital's task is to obtain external capital without permitting either Tokyo or Washington to define every incident as its own jurisdiction.</p>"},
      {id:"nation",title:"Coast, highlands, and national authority",html:"<p>Lima's coastal concentration does not erase the political importance of highland communities, resource regions, and the Amazonian interior. Developmental authority is strongest when transport, education, and military presence connect those spaces rather than merely extract from them.</p>"}
    ],
    related:[{href:"peru.html",kicker:"Sovereign state",label:"Republic of Peru"},{href:"peruvian-military-developmental-state.html",kicker:"Political economy",label:"Peruvian Military-Developmental State"},{href:"peru-ecuador-corporate-contest.html",kicker:"Mature rivalry",label:"Japanese–American Corporate Contest"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Lima",label:"Wikipedia — Lima (pre-divergence urban baseline)"}],categories:["Lima","Peru","Capital cities","Pacific South America"],
    facts:[["Country","Republic of Peru"],["Strategic position","Japan's principal American foothold"],["Adjacent port","Callao"],["Government type","Military-developmental republic"],["Mature rivalry","Japanese–American corporate contest"],["Core external dispute","Samanco–Chimbote"]]
  }),

  "quito":americanCapital({
    title:"Quito",eyebrow:"Capital of the Republic of Ecuador",infoboxKicker:"Highland capital of a Pacific corporate frontier",flag:{src:"assets/flags/ecuador.svg",alt:"Flag of Ecuador",caption:"National flag"},
    lead:"Quito is the capital of Ecuador and the highland political counterweight to the commercial port of Guayaquil. It manages a sovereign GEACPS-associated republic whose Japanese connections in shipping, fisheries, infrastructure, and trade face growing American competition without producing a settled American security client.",
    canon:"Quito's capital role, Ecuadorian sovereignty, Japanese commercial association, the importance of Guayaquil, and the mature Japanese–American corporate contest are established. Government chronology, municipal administration, exact market shares, infrastructure, and security episodes remain open.",
    sections:[
      {id:"capital",title:"Highland seat of government",html:"<p>The presidency, legislature, ministries, courts, armed-service headquarters, embassies, universities, and Church institutions give Quito national political authority distinct from the port economy of the coast.</p>"},
      {id:"guayaquil",title:"Quito and Guayaquil",html:"<p>Ecuador's external economy turns heavily upon Guayaquil. Customs, shipping, fisheries, banks, merchants, and foreign firms can give the port priorities different from those of the highland capital. National policy emerges from bargaining between them.</p>"},
      {id:"japan",title:"Japanese association",html:"<p>Japan's relationship is primarily commercial, technical, and infrastructural rather than the deeper military arrangement found in Peru. Pacific shipping and fisheries make the connection valuable while allowing Quito to insist upon national sovereignty.</p>"},
      {id:"america",title:"American competition",html:"<p>American finance, telecommunications, mining, airlines, insurance, and services enter the same market. The competition offers alternatives to Japanese terms but also exposes domestic politics to rival sponsorship networks.</p>"},
      {id:"balance",title:"Association without absorption",html:"<p>Quito does not treat every Japanese contract as membership in an imperial command system, and Washington cannot assume that commercial penetration creates an American client. The capital's leverage rests upon preserving credible alternatives.</p>"},
      {id:"geography",title:"Governing several Ecuadors",html:"<p>Highland, coastal, Amazonian, and island geographies impose different transport, military, resource, and political requirements. Capital policy must connect them without allowing the Pacific corporate contest to define the whole country.</p>"}
    ],
    related:[{href:"ecuador.html",kicker:"Sovereign state",label:"Republic of Ecuador"},{href:"peru-ecuador-corporate-contest.html",kicker:"Mature rivalry",label:"Japanese–American Corporate Contest"},{href:"japan.html",kicker:"Principal Asian partner",label:"Empire of Japan"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Quito",label:"Wikipedia — Quito (pre-divergence urban baseline)"}],categories:["Quito","Ecuador","Capital cities","Pacific South America"],
    facts:[["Country","Republic of Ecuador"],["Strategic position","Sovereign GEACPS-associated balancer"],["Commercial counter-city","Guayaquil"],["Japanese relationship","Commercial and infrastructural"],["Mature rivalry","Japanese–American corporate contest"],["Security-client status","None fixed"]]
  }),

  "santiago":americanCapital({
    title:"Santiago",eyebrow:"Capital of the Republic of Chile",infoboxKicker:"Capital of the southern balancing doctrine",flag:{src:"assets/flags/chile.svg",alt:"Flag of Chile",caption:"National flag"},
    lead:"Santiago is the capital of Chile and the command center of the Santiago Doctrine, which preserves national independence through diversified arms, domestic corporate strength, selective American security ties, and refusal to become a permanent satellite of any great-power system.",
    canon:"Santiago's capital role, the Santiago Doctrine, Plan Centinela, Pinochet-era military-national government, balance among foreign systems, strong domestic firms, American commercial prominence, and the Cold Andes are established. Detailed constitutional development, city government, population, and corporate shares remain open.",
    sections:[
      {id:"doctrine",title:"The Santiago Doctrine",html:"<p>The <a href='santiago-doctrine.html'>doctrine</a> treats foreign weapons, credits, markets, and advisers as tools to be diversified rather than loyalties to be inherited. The capital's ministries and service staffs manage this balance as a continuing national-security task.</p>"},
      {id:"centinela",title:"Plan Centinela",html:"<p>Military modernization, dispersed logistics, national industry, mountain and maritime defense, and technical education turn Santiago into the administrative center of <a href='plan-centinela.html'>Plan Centinela</a>. The objective is credible autonomy, not equality with a superpower.</p>"},
      {id:"companies",title:"Domestic firms and American commerce",html:"<p>American companies are important in mining, finance, equipment, communications, and services, but their principal competitors are often Chilean. A comparatively strong domestic corporate field prevents commercial prominence from automatically becoming an American strategic veto.</p>"},
      {id:"cold-andes",title:"Capital of the Cold Andes",html:"<p>The Falklands settlement leaves Chile and Argentina in a dangerous armed peace. Santiago plans for the 1989–92 war window while exploiting Argentine isolation and avoiding a preventive conflict that would destroy the balance it seeks to preserve.</p>"},
      {id:"diplomacy",title:"Selective external partnerships",html:"<p>Britain and America supply important security relationships. Japan and the Latin system offer commercial alternatives. Germany remains both a possible supplier and the principal external influence behind Argentina's military system. None receives exclusive control.</p>"},
      {id:"metropolis",title:"Centralization and national geography",html:"<p>Santiago concentrates government, finance, command, education, and corporate headquarters in a country stretched across deserts, valleys, ports, islands, and the far south. The capital's authority depends upon communications and logistics capable of making that long geography governable.</p>"}
    ],
    related:[{href:"chile.html",kicker:"Sovereign state",label:"Republic of Chile"},{href:"santiago-doctrine.html",kicker:"Foreign policy",label:"Santiago Doctrine"},{href:"plan-centinela.html",kicker:"Defense modernization",label:"Plan Centinela"},{href:"cold-andes.html",kicker:"Regional confrontation",label:"Cold Andes"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Santiago",label:"Wikipedia — Santiago (pre-divergence urban baseline)"}],categories:["Santiago","Chile","Capital cities","South America"],
    facts:[["Country","Republic of Chile"],["Strategic position","Independent balancer"],["Foreign-policy doctrine","Santiago Doctrine"],["Defense program","Plan Centinela"],["Corporate field","Domestic-centered with strong American participation"],["Principal regional threat","Argentina during the Cold Andes"]]
  }),

  "buenos-aires":americanCapital({
    title:"Buenos Aires",eyebrow:"Capital of the Argentine Republic",infoboxKicker:"Capital of Argentina's dual alignment",flag:{src:"assets/flags/argentina.svg",alt:"Flag of Argentina",caption:"National flag"},
    lead:"Buenos Aires is the capital and principal political-financial metropolis of Argentina. It is the central marketplace of the country's mature dual alignment: German doctrine, arms, and military institutions coexist with American finance, software, telecommunications, machinery, agriculture, consumer goods, and civil aerospace.",
    canon:"Buenos Aires's capital and metropolitan role, Argentina's sovereign Einheitspakt association, German strategic relationship, American civilian commercial layer, Falklands-war political centrality, and postwar interoperability problem are established. Municipal chronology, population, company shares, exact governments, and redevelopment remain open.",
    sections:[
      {id:"capital",title:"Federal and metropolitan capital",html:"<p>The presidency, legislature, ministries, military staffs, banks, universities, national media, port institutions, unions, industrial associations, and foreign missions make Buenos Aires the country's principal political bargaining arena.</p>"},
      {id:"german",title:"German strategic inheritance",html:"<p>German-pattern weapons, armored systems, aircraft, radios, training, doctrine, and defense industry give the armed forces an institutional relationship deeper than a sequence of purchases. Advisers and technical standards shape how the capital understands security.</p>"},
      {id:"american",title:"American civilian commerce",html:"<p>American banks, software firms, agricultural processors, telecommunications suppliers, machinery companies, consumer brands, and civil-aerospace contractors expand through ordinary commerce. Their influence is substantial without replacing the German military system.</p>"},
      {id:"falklands",title:"War capital and defeated government",html:"<p>The <a href='falklands-war.html'>Falklands War</a> turns Buenos Aires into the center of mobilization, censorship, diplomatic bargaining, casualty politics, and eventual reckoning. The Punta del Este settlement constrains adventurism but does not erase the institutions that produced it.</p>"},
      {id:"interoperability",title:"The interoperability problem",html:"<p>German defense standards and later American equipment do not combine automatically. Maintenance, software, ammunition, communications, procurement law, and officer identity make technical integration a political dispute fought through ministries and suppliers in the capital.</p>"},
      {id:"sovereignty",title:"Association without incorporation",html:"<p>Argentina remains formally independent and uses access to several foreign systems as bargaining leverage. Buenos Aires is therefore neither a German colonial capital nor an American client city, though both networks maintain powerful local constituencies.</p>"}
    ],
    related:[{href:"argentina.html",kicker:"Sovereign state",label:"Argentine Republic"},{href:"argentine-dual-alignment.html",kicker:"Mature external system",label:"Argentine Dual Alignment"},{href:"falklands-war.html",kicker:"Defining conflict",label:"Falklands War"},{href:"cold-andes.html",kicker:"Postwar security",label:"Cold Andes"},{href:"capitals-of-the-mature-americas.html",kicker:"Regional comparison",label:"Capital Cities of the Mature Americas"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Buenos_Aires",label:"Wikipedia — Buenos Aires (pre-divergence urban baseline)"}],categories:["Buenos Aires","Argentina","Capital cities","South America"],
    facts:[["Country","Argentine Republic"],["Strategic position","Independent Einheitspakt associate"],["Defense relationship","German-pattern"],["Civilian external layer","Substantial American commerce"],["Defining war","Falklands War, 1985–86"],["Mature problem","Interoperability and political dual alignment"]]
  })
});

const cityLinks={
  mexico:{href:"mexico-city.html",kicker:"Capital",label:"Mexico City"},
  cuba:{href:"havana.html",kicker:"Capital",label:"Havana"},
  venezuela:{href:"caracas.html",kicker:"Capital",label:"Caracas"},
  peru:{href:"lima.html",kicker:"Capital",label:"Lima"},
  ecuador:{href:"quito.html",kicker:"Capital",label:"Quito"},
  chile:{href:"santiago.html",kicker:"Capital",label:"Santiago"},
  argentina:{href:"buenos-aires.html",kicker:"Capital",label:"Buenos Aires"}
};

for(const [id,link] of Object.entries(cityLinks)){
  const article=window.deepArticles[id];
  if(article) article.related=[...(article.related||[]),link,{href:"capitals-of-the-mature-americas.html",kicker:"Urban comparison",label:"Capital Cities of the Mature Americas"}];
}

const hemisphere=window.deepArticles["american-hemisphere"];
if(hemisphere){
  hemisphere.sections=[...(hemisphere.sections||[]),{id:"capitals",title:"Capital cities as alignment marketplaces",html:"<p><a href='capitals-of-the-mature-americas.html'>Mexico City, Havana, Caracas, Lima, Quito, Santiago, and Buenos Aires</a> turn layered alignment into daily administration. Embassies, ministries, banks, standards offices, courts, parties, military staffs, and corporate agents meet there even when the mines, ports, bases, and factories at issue lie far away.</p>"}];
  hemisphere.related=[...(hemisphere.related||[]),{href:"capitals-of-the-mature-americas.html",kicker:"Urban political geography",label:"Capital Cities of the Mature Americas"}];
}
