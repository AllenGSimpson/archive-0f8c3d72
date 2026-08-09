window.deepArticles = window.deepArticles || {};

const britishAfricaGovernanceSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Africa and the Cape system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Commonwealth African settlements"},
  {href:"../transcript.md",label:"Master Transcript — African refugee emergency and constitutional settlement"}
];

const britishAfricaAdministrationDiagram = {
  src:"assets/diagrams/commonwealth-african-distance.svg",
  alt:"Diagram of strategic responsibility and devolved local authority in Commonwealth Africa",
  caption:"British Africa separated domestic government from the strategic obligations retained by London and the Commonwealth"
};

const britishAfricaNetworkDiagram = {
  src:"assets/diagrams/british-maritime-system.svg",
  alt:"Diagram of the British maritime and Cape-route system",
  caption:"Relief ports, railway corridors, and military logistics formed one Commonwealth network"
};

const britishAfricaGovernanceRelated = [
  {href:"british-africa.html",kicker:"Regional order",label:"British Africa and the Cape System"},
  {href:"commonwealth.html",kicker:"Imperial framework",label:"British Commonwealth"},
  {href:"african-refugee-frontier-act.html",kicker:"Emergency statute",label:"African Refugee and Frontier Act"},
  {href:"accra-compact.html",kicker:"Constitutional settlement",label:"Accra Compact"}
];

const britishAfricaGovernanceArticle = config => ({
  category:"British Africa",
  eyebrow:"Commonwealth Africa · government and security",
  infoboxKicker:"British African institutional history",
  landscape:britishAfricaAdministrationDiagram,
  ...config,
  sources:[...britishAfricaGovernanceSources,...(config.additionalSources || [])],
  categories:config.categories || ["British Africa","British Commonwealth","Constitutional history"]
});

Object.assign(window.deepArticles, {
  "commonwealth-african-reserve-system": britishAfricaGovernanceArticle({
    title:"Commonwealth African Reserve System",
    category:"Humanitarian administration",
    eyebrow:"Relief and mobilization network · from 1955",
    infoboxTitle:"Commonwealth African Reserve System",
    landscape:britishAfricaNetworkDiagram,
    lead:"The Commonwealth African Reserve System was the distributed food, medical, transport, and emergency-supply network created during the mid-1950s refugee crisis on the borders of German Mittelafrika. It joined Dominion production, British shipping, African ports, territorial administrations, missions, and security services. Although publicly justified as humanitarian burden-sharing, the same depots and routes strengthened the Cape system's capacity for military mobilization.",
    canon:"Commonwealth burden-sharing during the 1955–1956 emergency, the national supply roles, principal Atlantic and Indian Ocean ports, integration with the African Refugee and Frontier Act, and the relief-and-mobilization dual use are established. The system's formal title, founding instrument, headquarters, annual appropriations, permanent staff, depot roster, tonnages, and later reorganizations remain open.",
    sections:[
      {id:"origins",title:"Origins in the frontier emergency",html:"<p>Flight from Mittelafrika placed food, water, shelter, medicine, transport, and registration demands upon territories that could not meet them from local revenue. London concluded that controlled admission was credible only if the wider Commonwealth supplied material rather than instructions.</p><p>Emergency shipments begun under the Butler government hardened into a standing reserve and allocation system.</p>"},
      {id:"contributions",title:"Commonwealth contributions",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Participant</th><th>Principal contribution</th></tr></thead><tbody><tr><td>Canada</td><td>Grain, flour, canned food, trucks, railway equipment, medicines, and temporary buildings</td></tr><tr><td>Australia</td><td>Wheat, preserved meat, blankets, vehicles, agricultural machinery, and engineers</td></tr><tr><td>New Zealand</td><td>Dairy concentrates, meat, medical personnel, and veterinary support</td></tr><tr><td>United Kingdom</td><td>Shipping, finance, administrators, field hospitals, communications, pumps, and railway equipment</td></tr><tr><td>South Africa</td><td>Maize, rail capacity, mine employment, port throughput, and security assistance</td></tr><tr><td>African territories</td><td>Land, local administration, labor, policing, reception sites, and political consent</td></tr></tbody></table></div>"},
      {id:"ports",title:"Ports and reserve nodes",html:"<p>Freetown, Takoradi, Lagos, Mombasa, Dar es Salaam, Cape Town, Durban, and Portuguese Beira formed the principal receiving and transshipment chain. Interior railway depots and guarded road yards translated ocean supply into frontier relief.</p><p>The network's geography followed the same Cape and Indian Ocean routes Britain required for war, fuel, minerals, and imperial reinforcement.</p>"},
      {id:"administration",title:"Administration and territorial consent",html:"<p>London and Dominion ministries arranged procurement and ocean movement, but governors, African ministers, chiefs, councils, churches, and mission societies decided where supplies could be received and distributed. The reserve system therefore accelerated demands for local control over land, camps, employment, and resettlement.</p>"},
      {id:"act",title:"Relationship to the Refugee and Frontier Act",html:"<p>The <a href='african-refugee-frontier-act.html'>African Refugee and Frontier Act</a> supplied legal status, reception districts, permits, work schemes, and saturation powers. The Reserve System supplied the food, vehicles, medicines, structures, and transport without which those legal powers would have been chiefly coercive.</p>"},
      {id:"dual-use",title:"Relief and mobilization",html:"<p>Warehouses, vehicle parks, medical stores, communications, rail sidings, port improvements, and fuel arrangements could support civilians during famine or displacement and troops during a frontier crisis. Officials described this as economical preparedness. Critics argued that humanitarian need was being used to expand an imperial security grid.</p>"},
      {id:"failures",title:"Shortage, patronage, and abuse",html:"<p>Allocation remained uneven. Politically important ports and mining districts received priority, while remote camps waited. Theft, ration patronage, spoilage, coerced work, discriminatory screening, and local land conflicts accompanied otherwise lifesaving distribution.</p><p>The Reserve System reduced mass starvation without making reception humane or equal.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>The system survived the immediate emergency as a Commonwealth stockpile, disaster-relief, transport, and mobilization mechanism. It supplied practical connective tissue for the <a href='east-african-defence-development-commission.html'>East African Defence and Development Commission</a> and for the wider doctrine of <a href='defensive-trusteeship.html'>defensive trusteeship</a>.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"east-african-defence-development-commission.html",kicker:"Regional administrator",label:"East African Defence and Development Commission"},{href:"defensive-trusteeship.html",kicker:"Political justification",label:"Defensive Trusteeship"},{href:"cape-route.html",kicker:"Strategic geography",label:"Cape Route"}],
    facts:[["Formation","1955–1956 emergency"],["Character","Distributed reserve and allocation network"],["Principal fields","Food, medicine, transport, shelter, and communications"],["Primary routes","Atlantic–Cape–Indian Ocean"],["Legal partner","African Refugee and Frontier Act"],["Secondary function","Commonwealth mobilization"],["Formal charter","Open"]]
  }),

  "east-african-defence-development-commission": britishAfricaGovernanceArticle({
    title:"East African Defence and Development Commission",
    category:"Commonwealth institution",
    eyebrow:"East African common services · expanded 1958–1960",
    infoboxTitle:"East African Defence and Development Commission",
    lead:"The East African Defence and Development Commission was the enlarged common-services authority through which Kenya, Uganda, and Tanganyika coordinated refugee registration, frontier intelligence, railways, ports, aviation, disease control, strategic food reserves, and security procurement. It grew from the East African High Commission during 1958–1960 but was deliberately prevented from becoming a Nairobi-controlled settler federation.",
    canon:"Expansion of East African common services during 1958–1960, participation by Kenya, Uganda, and Tanganyika, the listed civil and security functions, British strategic supervision, resistance to a Nairobi settler superstate, and preservation of separate territorial governments are established. The final statutory title, legal succession from the High Commission, headquarters, membership rules, budgets, departments, and later constitutional development remain open.",
    sections:[
      {id:"inheritance",title:"High Commission inheritance",html:"<p>East Africa already possessed common railway, harbor, postal, telecommunications, and technical services. The refugee crisis and German frontier pressure made that administrative inheritance more valuable than a wholly new federation.</p><p>Between 1958 and 1960, the High Commission's remit expanded into defense, emergency supply, and strategic development.</p>"},
      {id:"members",title:"Three territories, separate governments",html:"<p>Kenya, Uganda, and Tanganyika retained distinct legislatures, executives, police systems, land politics, and constitutional trajectories. Common administration did not make any one territory sovereign over the others.</p><p>Uganda defended its kingdoms and treaty rights. Tanganyika resisted permanent postponement of self-government, while African politicians in all three territories opposed rule by Kenya's settler establishment.</p>"},
      {id:"mandate",title:"Civil-development mandate",html:"<p>The Commission coordinated railways, ports, aviation, communications, disease surveillance, veterinary controls, strategic food reserves, engineering standards, and selected development procurement. These services were presented as the practical benefits of association.</p>"},
      {id:"security",title:"Frontier and refugee security",html:"<p>Common registers, intelligence exchanges, transport controls, disarmament procedures, and communications connected the reception districts along the Mittelafrikan frontier. The Commission could recommend common procurement and readiness measures but depended upon territorial police, local forces, and British commands for execution.</p>"},
      {id:"kenya",title:"The Kenyan contest",html:"<p>Kenyan settler organizations sought Rhodesian-style discretion, defended settlement belts, home guards, and broad emergency authority. London refused to convert the Commission into a self-governing white fortress. Kenya remained the institutional battleground among Crown-colony rule, multiracial government, and settler security politics.</p>"},
      {id:"uganda",title:"Uganda and the kingdom question",html:"<p>Bugandan autonomy, other kingdom institutions, refugee movement, and the Kilembe mineral district made Uganda suspicious of any centralized East African government. Commission decisions therefore required territorial accommodation rather than simple administrative command from Nairobi.</p>"},
      {id:"tanganyika",title:"Tanganyika and the German frontier",html:"<p>Tanganyika's smaller settler population and direct exposure to German claims made it the closest example of London's preferred settlement: African local government, British external defense, a strong territorial police, retained bases, and common regional services.</p><p>Nationalists correctly observed that the German threat could postpone complete sovereignty indefinitely.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Commission made East African internal self-government compatible with a shared Commonwealth strategic system. It also demonstrated the central contradiction of <a href='defensive-trusteeship.html'>defensive trusteeship</a>: the institutions that increased African governing capacity also made British withdrawal appear more dangerous.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"commonwealth-african-reserve-system.html",kicker:"Emergency supply partner",label:"Commonwealth African Reserve System"},{href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal doctrine",label:"No Empty Flagstaff Doctrine"},{href:"associated-crown-state.html",kicker:"Constitutional framework",label:"Associated Crown State"}],
    facts:[["Expansion","1958–1960"],["Predecessor","East African High Commission"],["Territories","Kenya, Uganda, and Tanganyika"],["Civil remit","Transport, health, food, aviation, and communications"],["Security remit","Registration, intelligence, and procurement"],["Federal government","No"],["Final statutory title","Open"]]
  }),

  "salisbury-understanding": britishAfricaGovernanceArticle({
    title:"Salisbury Understanding",
    category:"Political agreement",
    eyebrow:"Unwritten British–Rhodesian settlement · late 1950s",
    infoboxTitle:"Salisbury Understanding",
    lead:"The Salisbury Understanding was the unwritten late-1950s bargain under which London tolerated extensive Rhodesian frontier and internal-security discretion in exchange for a quiet border, uninterrupted copper and rail traffic, formal Crown loyalty, and restraint against unauthorized war with Mittelafrika. Its practical rule was that Salisbury could do what it believed necessary so long as it did not force Parliament to know and defend the details.",
    canon:"The late-1950s timing, unwritten character, frontier and transport obligations, permitted security practices, British red lines, inconsistent enforcement, ministerial distance, and role in the growth of Rhodesian separatism are established. Negotiators, date, memoranda, exact territorial scope, legal status, individual operations, and later termination or replacement remain open.",
    sections:[
      {id:"background",title:"Central African frontier",html:"<p>Southern Rhodesian institutions, Northern Rhodesian copper, Nyasaland's labor and geography, and the railways to the Cape formed Britain's inland barrier against Mittelafrika. Refugee flows and fear of sabotage made the Federation's political class unwilling to await case-by-case permission from London.</p>"},
      {id:"terms",title:"The unwritten terms",html:"<blockquote>Maintain the frontier. Keep copper and rail traffic moving. Do not invade German territory. Do not create a scandal so large that Parliament must investigate. Do not force London to choose publicly between you and its own declared principles.</blockquote><p>No public treaty used this language. Its force lay in appointments, finance, intelligence liaison, security correspondence, and selective noninterference.</p>"},
      {id:"permissions",title:"Security discretion",html:"<p>The bargain tolerated pass systems, border camps, closed security zones, armed farm and mine guards, preventive detention, population screening, relocation near strategic roads, and aggressive policing of refugee organizations.</p><p>Local authorities treated silence as authorization; British ministers treated silence as the absence of a decision for which they could be held responsible.</p>"},
      {id:"red-lines",title:"London's red lines",html:"<p>Nominal prohibitions covered mass execution, openly racial expulsion, unauthorized cross-border raids, annexation, and public defiance of the Crown. Enforcement varied with press attention, diplomatic risk, and whether the conduct threatened rather than protected the Cape system.</p>"},
      {id:"knowledge",title:"Knowledge without ownership",html:"<p>British intelligence and colonial officials usually knew more than ministers publicly admitted. The Understanding encouraged officials to report strategic effects while leaving operational detail with Salisbury.</p><p>This administrative habit later matured into the broader <a href='late-commonwealth-dont-ask-culture.html'>late-Commonwealth “don't ask” culture</a>.</p>"},
      {id:"politics",title:"Rhodesian political effect",html:"<p>Rhodesian leaders concluded that they defended the frontier and bore the risk while London claimed moral authority and might abandon them under pressure. Loyalty to Elizabeth II remained stronger than trust in Parliament.</p><p>The distinction between Crown loyalty and metropolitan obedience became central to later separatism.</p>"},
      {id:"opposition",title:"Opposition",html:"<p>Common Wealth, Liberals, churches, African representatives, and parts of Labour demanded camp inspection, judicial review, publication of agreements, African control of land, and defined constitutional timetables. Their chief objection was not simply harsh policy but rule through arrangements designed to evade accountable authorization.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Understanding established an early form of strategically retained but domestically devolved empire. It strengthened Rhodesia in the short term while making the long-term relationship with Westminster less governable.</p><p>After the Accra Disaster, its defenders invoked security; its critics cited it as evidence that association could conceal settler autonomy without African consent.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"rhodesia.html",kicker:"Principal beneficiary",label:"Rhodesia"},{href:"defensive-trusteeship.html",kicker:"Wider doctrine",label:"Defensive Trusteeship"},{href:"late-commonwealth-dont-ask-culture.html",kicker:"Later political practice",label:"Late-Commonwealth “Don't Ask” Culture"}],
    facts:[["Date","Late 1950s"],["Form","Unwritten political understanding"],["British party","United Kingdom government"],["Local party","Rhodesian and federal authorities"],["Strategic objects","Frontier, copper, railways, and Crown loyalty"],["Principal limit","No unauthorized war or public scandal"],["Formal text","None established"]]
  }),

  "no-empty-flagstaff-doctrine": britishAfricaGovernanceArticle({
    title:"No Empty Flagstaff Doctrine",
    category:"Imperial doctrine",
    eyebrow:"British withdrawal doctrine · articulated 1956",
    infoboxTitle:"No Empty Flagstaff Doctrine",
    lead:"The No Empty Flagstaff Doctrine was the Butler government's principle that Britain would not lower its flag, evacuate the governing machinery, and describe the resulting security vacuum as freedom. A territory could move toward unrestricted sovereignty only after a recognized local government, reliable security institutions, defensible borders, exclusion of hostile bases, continuing Commonwealth access, and protection against immediate rival occupation had been secured.",
    canon:"The doctrine's 1956 articulation, governing maxim, six practical conditions, Butlerite authorship, relationship to defensive trusteeship and the Accra Compact, party criticism, circular readiness problem, and later reinforcement after the Accra Disaster are established. Author, first speech, Cabinet paper, legal force, precise wording, territory-by-territory tests, and exceptions remain open.",
    sections:[
      {id:"maxim",title:"The maxim",html:"<blockquote>Britain will not evacuate a government into a vacuum and call the vacuum freedom.</blockquote><p>The phrase condensed Britain's post-defeat fear that a lowered Union flag would be followed by civil war, a rival-sponsored provisional government, foreign “security assistance,” or absorption into another imperial system.</p>"},
      {id:"conditions",title:"Six conditions for withdrawal",html:"<ol><li>A recognized local government had to exist.</li><li>Its police and armed forces had to maintain order.</li><li>Its borders had to be defensible.</li><li>Hostile foreign bases had to be excluded by treaty.</li><li>Strategic ports and communications had to remain available to the Commonwealth.</li><li>No immediate German, Italian, or Japanese occupation could be expected.</li></ol><p>The tests were cumulative and demanding.</p>"},
      {id:"butler",title:"Butlerite origin",html:"<p>The doctrine was the African form of R. A. Butler's Contract Commonwealth: domestic authority should pass through precise agreements while defense obligations remained explicit. It rejected both indefinite direct gubernatorial rule and unconditional transfer.</p>"},
      {id:"applications",title:"Administrative application",html:"<p>The doctrine supported Associated Crown States in West Africa, East African common services, a fortified Crown Frontier Territory in Southern Cameroons, retained bases, local armies, and the <a href='salisbury-understanding.html'>Salisbury Understanding</a>. Different territories were judged under different constitutional instruments.</p>"},
      {id:"circularity",title:"The readiness circle",html:"<p>Critics identified a structural circle: Britain controlled military development, declared local forces inadequate, and then used that inadequacy to retain control. Strategic ports and foreign-base clauses could also make “readiness” mean that independence no longer reduced British power.</p>"},
      {id:"party",title:"Party interpretations",html:"<p>Conservatives emphasized local government, development, defense, and orderly succession. Union Commonwealth demanded deeper economic and military integration. Labour divided between defensive trusteeship and anti-imperial transfer. Common Wealth and Liberals sought inspectors, courts, timetables, and published obligations. Enoch Powell insisted upon separate treaties with actual peoples and governments rather than one African formula.</p>"},
      {id:"accra",title:"The Accra test",html:"<p>The 1963 Ghana collapse appeared to vindicate the doctrine's warning while also exposing Britain's inability to act after relinquishing every agreed trigger. The later <a href='accra-clause.html'>Accra Clause</a> converted much of No Empty Flagstaffs from political doctrine into treaty machinery.</p>"},
      {id:"reputation",title:"Reputation",html:"<p>Supporters regard the doctrine as the minimum responsible rule in a world of predatory empires and fractured states. Opponents regard it as an indefinitely renewable test designed by the power that benefits whenever a territory fails it.</p><p>Both readings shaped Commonwealth African politics long after conventional colonial government receded.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"defensive-trusteeship.html",kicker:"Governing philosophy",label:"Defensive Trusteeship"},{href:"crown-frontier-territory.html",kicker:"Frontier application",label:"Crown Frontier Territory"},{href:"accra-clause.html",kicker:"Later treaty form",label:"Accra Clause"}],
    facts:[["Articulated","1956"],["Government","Butler Conservative ministry"],["Scope","British and Commonwealth territorial withdrawal"],["Core test","Viable government before flag withdrawal"],["Strategic reservation","Bases, communications, and external defense"],["Major criticism","Circular readiness standard"],["Later successor","Accra Clause"]]
  }),

  "crown-frontier-territory": britishAfricaGovernanceArticle({
    title:"Crown Frontier Territory",
    category:"Constitutional status",
    eyebrow:"Commonwealth frontier status · from 1957",
    infoboxTitle:"Crown Frontier Territory",
    lead:"A Crown Frontier Territory was a fortified, internally autonomous Commonwealth territory created for a border that London judged too exposed for ordinary colonial administration or unrestricted sovereignty. The principal African example was Southern Cameroons, separated from Nigeria with its own assembly, citizenship, constabulary, and local government while Britain retained defense, intelligence, signals, aviation, and foreign relations.",
    canon:"The status of Southern Cameroons after the Accra Compact, separate assembly and citizenship, British defense guarantee, Nigerian economic ties, enlarged constabulary, refugee districts, permanent British air, signals, and intelligence facilities, and proximity to German Cameroon and Kribi are established. Whether Crown Frontier Territory was a uniform legal category, its formal title, flag, capital, borders, officeholders, electoral system, and later constitutional development remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The status addressed territories whose local population required domestic institutions but whose geography made strategic withdrawal unusually dangerous. It separated ordinary administration from the external-defense system without pretending that the frontier had become neutral.</p>"},
      {id:"southern-cameroons",title:"Southern Cameroons",html:"<p>Southern Cameroons did not disappear into Nigeria or German Cameroon. It received a separate assembly, local citizenship, cabinet or executive council, courts, and authority over land, education, local development, and ordinary policing.</p><p>Nigerian trade and transport connections continued without Nigerian annexation.</p>"},
      {id:"reserved",title:"Reserved Crown powers",html:"<p>Britain retained defense, external relations, strategic communications, air access, intelligence installations, and emergency reinforcement. An enlarged constabulary and locally recruited forces guarded the interior beneath British external command arrangements.</p>"},
      {id:"frontier",title:"The German frontier",html:"<p>Across the border lay German Cameroon and the Kribi aerospace, signals, and missile infrastructure. By the 1960s the boundary was among the most closely observed in Africa. Signals stations, patrol roads, airfields, refugee districts, and surveillance posts transformed local geography.</p>"},
      {id:"citizenship",title:"Citizenship and movement",html:"<p>Territorial citizenship did not create an automatic right to settle in Britain. Movement through refugee districts and strategic zones remained permit-controlled under the African Refugee and Frontier Act.</p><p>Residents therefore possessed a local political identity while living inside an unusually dense security jurisdiction.</p>"},
      {id:"comparison",title:"Relation to Associated Crown States",html:"<p>A Crown Frontier Territory shared domestic self-government and local citizenship with an <a href='associated-crown-state.html'>Associated Crown State</a>, but its British defense and intelligence presence was more immediate. It was a frontier application of the Accra settlement rather than a fully separate imperial philosophy.</p>"},
      {id:"politics",title:"Local political dispute",html:"<p>Supporters argued that only the Crown guarantee prevented German absorption. Nationalists answered that the German threat had turned their territory into a listening post and supplied a permanent reason to delay control over foreign affairs.</p><p>Debate also divided advocates of Nigerian federation, separate Cameroonian identity, and negotiated relations across the German border.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Southern Cameroons settlement became the clearest territorial expression of the <a href='no-empty-flagstaff-doctrine.html'>No Empty Flagstaff Doctrine</a>. Its success was measured less by independence dates than by whether local government, British access, and a stable border could coexist.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"no-empty-flagstaff-doctrine.html",kicker:"Founding doctrine",label:"No Empty Flagstaff Doctrine"},{href:"associated-crown-state.html",kicker:"Related constitutional form",label:"Associated Crown State"},{href:"mittelafrika.html",kicker:"Neighboring imperial system",label:"Mittelafrika"}],
    facts:[["Established","From 1957"],["Principal example","Southern Cameroons"],["Domestic institutions","Assembly, executive, courts, and local citizenship"],["External defense","British guarantee"],["Security institutions","Constabulary, air, signals, and intelligence facilities"],["Economic connection","Nigeria"],["Formal uniform category","Open"]]
  }),

  "defensive-trusteeship": britishAfricaGovernanceArticle({
    title:"Defensive trusteeship",
    category:"Political doctrine",
    eyebrow:"British African doctrine · 1950s onward",
    infoboxTitle:"Defensive trusteeship",
    lead:"Defensive trusteeship was the British Commonwealth doctrine that imperial protection could remain legitimate after direct colonial government receded because vulnerable African governments, populations, ports, and routes required defense against external conquest and internal collapse. Its governing formula—controlled refuge, accelerated local government, retained imperial defense—produced genuine African ministries beside emergency camps, unequal citizenship, strategic reservations, and repeated postponement of unrestricted sovereignty.",
    canon:"The three-part governing formula, Mittelafrikan refugee and security context, local-government acceleration, retained British defense, relationship to the Refugee and Frontier Act and Accra Compact, principal abuses, party divisions, opposition label 'empire under emergency law,' and long-term contradiction are established. First use of the term, official doctrinal text, uniform legal definition, territorial membership, and final endpoint remain open.",
    sections:[
      {id:"formula",title:"The three-part formula",html:"<blockquote>Controlled refuge. Accelerated local government. Retained imperial defense.</blockquote><p>The doctrine rejected an open frontier, indefinite rule by governors alone, and immediate strategic withdrawal. It claimed that domestic authority and external protection could be separated without making either fictitious.</p>"},
      {id:"strategic",title:"Strategic argument",html:"<p>Britain's secure route to the Gulf, Indian Ocean, and Australasia ran through Atlantic Africa and the Cape after the loss of Suez. German power in Mittelafrika made every undefended port, railway, and provisional government a potential rival foothold.</p><p>Defense planners therefore treated political succession as part of route security.</p>"},
      {id:"humanitarian",title:"Humanitarian claim",html:"<p>Relief from German violence was real. Commonwealth food, clinics, missions, transport, and protected districts saved lives. African local ministers gained authority because camps, land, and settlement could not be governed credibly from Whitehall alone.</p><p>The doctrine's moral force came from dangers that were not invented.</p>"},
      {id:"institutions",title:"Institutional expression",html:"<p>The <a href='african-refugee-frontier-act.html'>African Refugee and Frontier Act</a>, <a href='commonwealth-african-reserve-system.html'>Commonwealth African Reserve System</a>, <a href='no-empty-flagstaff-doctrine.html'>No Empty Flagstaff Doctrine</a>, <a href='accra-compact.html'>Accra Compact</a>, East African common services, and territorial security bargains formed the doctrine in practice.</p>"},
      {id:"government",title:"Governmental pluralism",html:"<p>Associated Crown States, federations, protected kingdoms, frontier territories, settler governments, colonies, and base agreements coexisted. Britain claimed this variety respected actual societies rather than forcing every territory toward one Westminster constitution.</p><p>Critics answered that variety also allowed London to choose whichever legal form best preserved strategic control.</p>"},
      {id:"abuses",title:"Emergency law and abuse",html:"<p>Permanent camps, selective closure, coerced or underpaid work, preventive detention, relocation, censorship, unequal nationality, and security concessions accompanied the system. The <a href='salisbury-understanding.html'>Salisbury Understanding</a> showed how devolved responsibility could become metropolitan evasion.</p>"},
      {id:"politics",title:"British and African politics",html:"<p>Conservative governments defended trusteeship through contracts and readiness tests. Union Commonwealth favored more explicit planning. Labour divided between protection and transfer. Liberals, Common Wealth, churches, and African nationalists demanded inspection, courts, timetables, and sovereign choice.</p><p>Japanese propaganda described Germany as brutal and Britain as hypocritical; London's most persuasive reply remained visible African government.</p>"},
      {id:"contradiction",title:"The permanent contradiction",html:"<p>The doctrine could sincerely prevent a worse conquest while also exploiting that danger to retain imperial power. Institutions built to make African government viable simultaneously strengthened the argument that only the Commonwealth could protect it.</p><p>After Ghana's collapse, defensive trusteeship survived in the stricter treaty language of Ordered Particularism and the Accra Clause.</p>"}
    ],
    related:[...britishAfricaGovernanceRelated,{href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal rule",label:"No Empty Flagstaff Doctrine"},{href:"salisbury-understanding.html",kicker:"Settler bargain",label:"Salisbury Understanding"},{href:"ordered-particularism.html",kicker:"Post-Accra successor",label:"Ordered Particularism"}],
    facts:[["Developed","Mid-1950s"],["Core formula","Controlled refuge, local government, retained defense"],["Strategic geography","Atlantic–Cape–Indian Ocean route"],["Constitutional instrument","Accra Compact"],["Withdrawal doctrine","No Empty Flagstaffs"],["Opposition description","Empire under emergency law"],["Final endpoint","Open"]]
  })
});

function appendBritishAfricaGovernance(id,key,items){
  const article=window.deepArticles[id];
  if(!article)return;
  article[key]=article[key]||[];
  for(const item of items){
    if(!article[key].some(existing=>(existing.id&&existing.id===item.id)||(existing.href&&existing.href===item.href))) article[key].push(item);
  }
}

appendBritishAfricaGovernance("african-refugee-frontier-act","related",[
  {href:"commonwealth-african-reserve-system.html",kicker:"Material counterpart",label:"Commonwealth African Reserve System"},
  {href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal rule",label:"No Empty Flagstaff Doctrine"},
  {href:"defensive-trusteeship.html",kicker:"Governing doctrine",label:"Defensive Trusteeship"}
]);
appendBritishAfricaGovernance("accra-compact","related",[
  {href:"crown-frontier-territory.html",kicker:"Frontier status",label:"Crown Frontier Territory"},
  {href:"east-african-defence-development-commission.html",kicker:"Regional implementation",label:"East African Defence and Development Commission"},
  {href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal premise",label:"No Empty Flagstaff Doctrine"}
]);
appendBritishAfricaGovernance("associated-crown-state","related",[
  {href:"crown-frontier-territory.html",kicker:"More heavily reserved form",label:"Crown Frontier Territory"},
  {href:"east-african-defence-development-commission.html",kicker:"Common-services partner",label:"East African Defence and Development Commission"}
]);
appendBritishAfricaGovernance("rhodesia","sections",[
  {id:"salisbury-understanding",title:"The Salisbury Understanding",html:"<p>The unwritten <a href='salisbury-understanding.html'>Salisbury Understanding</a> gives Rhodesian and federal authorities broad frontier discretion in exchange for quiet borders, uninterrupted copper and rail traffic, restraint against cross-border war, and continuing Crown loyalty. The bargain strengthens immediate security while teaching Salisbury to distinguish loyalty to the Queen from obedience to Parliament.</p>"}
]);
appendBritishAfricaGovernance("rhodesia","related",[
  {href:"salisbury-understanding.html",kicker:"Late-1950s security bargain",label:"Salisbury Understanding"},
  {href:"defensive-trusteeship.html",kicker:"Imperial doctrine",label:"Defensive Trusteeship"}
]);
appendBritishAfricaGovernance("british-africa","sections",[
  {id:"governance-architecture",title:"The frontier governance architecture",html:"<p>The <a href='commonwealth-african-reserve-system.html'>Commonwealth African Reserve System</a> supplied relief and mobilization; the <a href='east-african-defence-development-commission.html'>East African Defence and Development Commission</a> coordinated regional services; the <a href='salisbury-understanding.html'>Salisbury Understanding</a> devolved settler security; and the <a href='no-empty-flagstaff-doctrine.html'>No Empty Flagstaff Doctrine</a> governed withdrawal. Together they formed the institutional machinery of <a href='defensive-trusteeship.html'>defensive trusteeship</a>.</p>"}
]);
appendBritishAfricaGovernance("british-africa","related",[
  {href:"commonwealth-african-reserve-system.html",kicker:"Relief and mobilization",label:"Commonwealth African Reserve System"},
  {href:"east-african-defence-development-commission.html",kicker:"Regional common services",label:"East African Defence and Development Commission"},
  {href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal doctrine",label:"No Empty Flagstaff Doctrine"},
  {href:"defensive-trusteeship.html",kicker:"Imperial justification",label:"Defensive Trusteeship"}
]);
