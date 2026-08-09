window.deepArticles = window.deepArticles || {};

const americanPolicySources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — American recovery, National Renewal, and Reagan-era political economy"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American policy chronology, 1949–1990"},
  {href:"../transcript.md",label:"Master Transcript — Dewey recovery, Buchanan productive state, Falklands mediation, and Reciprocal Open Markets"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — fixed American chronology and post-1993 settlement"}
];

const americanPolicyArticle = config => ({
  category:"United States",
  eyebrow:"American public policy · 1949–1990",
  infoboxKicker:"American policy history",
  ...config,
  sources:[...americanPolicySources,...(config.additionalSources || [])],
  categories:config.categories || ["United States","Public policy","Political economy"]
});

Object.assign(window.deepArticles, {
  "national-recovery-enterprise-act": americanPolicyArticle({
    title:"National Recovery and Enterprise Act of 1949",
    eyebrow:"Federal recovery legislation · 1949",
    infoboxKicker:"Dewey administration recovery statute",
    landscape:{src:"assets/diagrams/national-recovery-enterprise-act.svg",alt:"Diagram showing emergency relief narrowing into a bounded welfare floor while private investment, infrastructure, housing, and small manufacturing expand",caption:"The 1949 settlement retained a social floor while making private investment the principal recovery mechanism"},
    lead:"The National Recovery and Enterprise Act of 1949 was the principal domestic-policy package of President Thomas E. Dewey's first year. It preserved the durable social and financial institutions of the New Deal while replacing emergency planning, mass public employment, and anti-business rhetoric with tax incentives, private credit, infrastructure grants, housing, and bounded labor reform.",
    canon:"The 1949 date, Dewey sponsorship, governing formula, principal policy fields, rejection of permanent mass public employment, and role in the gradual post-Depression recovery are established. The formal short title remains working, while bill number, sponsors, appropriations, tax rates, labor clauses, votes, and administrative titles remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The United States entered 1949 without the wartime mobilization and demobilization boom that transformed the historical American economy. Depression institutions, weak investment, aging infrastructure, and political exhaustion survived beside a private industrial base that had never been converted fully to war.</p><p>Dewey therefore inherited neither a healthy prewar market nor a command economy ready for reconversion.</p>"},
      {id:"formula",title:"Recovery without regimentation",html:"<p>The administration summarized its approach as recovery without regimentation and strength short of war. Social Security, deposit insurance, bank reforms, narrowed farm support, emergency relief, selected public works, and labor protections survived.</p><p>Permanent emergency agencies, broad planning boards, aggressive administrative discretion, and public employment designed chiefly to absorb unemployment were reduced or allowed to expire.</p>"},
      {id:"investment",title:"Investment and taxation",html:"<p>Corporate-tax moderation and accelerated depreciation favored factories, railways, machine tools, utilities, and other productive assets. Credit support directed through private and state institutions helped small manufacturers modernize without creating a permanent federal allocation board.</p>"},
      {id:"labor",title:"Labor and competition",html:"<p>Labor-law amendments limited coercive strikes in critical industries and narrowed closed-shop power. Anti-cartel provisions also targeted corporate collusion, allowing Dewey to present the law as a restoration of competition rather than a transfer of authority from unions to large firms.</p>"},
      {id:"works",title:"Housing and infrastructure",html:"<p>Housing incentives, road programs, state infrastructure grants, utilities, and local works supplied visible employment and reduced bottlenecks. The federal government financed or guaranteed capacity while states, municipalities, utilities, contractors, and private owners carried much of the execution.</p>"},
      {id:"coalition",title:"Political coalition",html:"<p>Republicans supplied the administration, while recovery Democrats, business moderates, infrastructure interests, farm states, and local officials supported portions of the package. New Dealers accused Dewey of preserving benefits while dismantling the institutions capable of guaranteeing employment.</p>"},
      {id:"recovery",title:"The gradual recovery",html:"<p>Private investment improved and unemployment declined gradually rather than through a sudden economic miracle. Americans experienced the early Dewey years as better, though hardly glorious. Recovery became credible enough to stabilize constitutional politics while the memory of Depression endured.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The act established the first postwar American settlement: private investment within a bounded welfare state. Later <a href='fortress-fordism.html'>Fortress Fordism</a>, Kennedy's mission state, Buchanan's productive-credit system, and Reagan's constitutional free enterprise all argued with this inheritance rather than beginning from nothing.</p>"}
    ],
    related:[{href:"thomas-e-dewey.html",kicker:"President",label:"Thomas E. Dewey"},{href:"united-states.html",kicker:"National setting",label:"United States"},{href:"political-economy.html",kicker:"Comparative economy",label:"Political Economy by Bloc"},{href:"fortress-fordism.html",kicker:"Later settlement",label:"Fortress Fordism"},{href:"national-mission-productive-enterprise-act.html",kicker:"1977 successor",label:"National Mission and Productive Enterprise Act"}],
    facts:[["Year","1949"],["President","Thomas E. Dewey"],["Political formula","Recovery without regimentation"],["Retained","Bounded welfare and financial safeguards"],["Principal engine","Private productive investment"],["Labor policy","Critical-industry limits and anti-cartel rules"],["Mass federal employment","Rejected as a permanent system"],["Formal short title","Working canon"]]
  }),

  "fortress-fordism": americanPolicyArticle({
    title:"Fortress Fordism",
    eyebrow:"American economic system · c. 1950–1985",
    infoboxKicker:"Informal political-economic designation",
    landscape:{src:"assets/diagrams/fortress-fordism.svg",alt:"Industrial foundation linking mass production, strategic procurement, household consumption, technical education, and hemispheric resources",caption:"Fortress Fordism joined private mass production to a protected continental and strategic state"},
    lead:"Fortress Fordism is the informal name given to the American production order that developed after the 1949 recovery settlement. Private mass production, household consumption, domestic energy, hemispheric resources, defense and aerospace procurement, infrastructure, and technical education reinforced one another without creating either a German planning system or an unrestricted free market.",
    canon:"The post-1949 recovery path, protected continental market, private mass production, automobile and suburban growth, domestic and Venezuelan energy, strategic procurement, technical education, and later absorption into Kennedy and Buchanan mission politics are established. The label is historiographical rather than a fixed contemporary program, and exact productivity, wage, tariff, union, and procurement series remain open.",
    sections:[
      {id:"name",title:"Name and usage",html:"<p>The term combines the Fordist language of standardized production, wages, and mass consumption with a fortress economy concerned about imperial rivals, strategic independence, and the Monroe system. Contemporary politicians spoke more often of recovery, capacity, production, or national strength.</p>"},
      {id:"foundation",title:"The 1949 foundation",html:"<p>The <a href='national-recovery-enterprise-act.html'>National Recovery and Enterprise Act</a> restored investment without abolishing Social Security, deposit insurance, farm support, or public infrastructure. That balance gave private firms demand, credit, transport, and a minimum social floor.</p>"},
      {id:"production",title:"Mass production and consumption",html:"<p>Automobiles, housing, appliances, radio and television, food processing, chemicals, construction materials, and later electronics carried household prosperity. Growth arrived later and less explosively than in the historical postwar United States because no giant wartime reconversion preceded it.</p>"},
      {id:"strategic",title:"The strategic state",html:"<p>Federal procurement supported aerospace, naval construction, communications, nuclear power, machine tools, and research. The state did not ordinarily own the productive system, but contracts, standards, credit, and protected demand shaped what private firms learned to build.</p>"},
      {id:"continent",title:"Continental and hemispheric resources",html:"<p>Domestic energy, Venezuelan oil, Canadian proximity, agricultural abundance, and access to the American hemisphere reduced exposure to the shocks that shaped other blocs. The same geography encouraged automobile dependence and a politics of excluding rival strategic ownership.</p>"},
      {id:"labor",title:"Labor and the social bargain",html:"<p>Independent unions, employer benefits, public insurance, family wages, and rising household ownership produced a broad but unequal middle. Race, region, sex, union access, and the delayed Depression recovery kept large populations outside its strongest guarantees.</p>"},
      {id:"mission",title:"From prosperity to mission",html:"<p>Kennedy redirected the system toward aerospace and hemispheric intervention. Buchanan later used its plants, colleges, contractors, and credit institutions for the <a href='national-mission-productive-enterprise-act.html'>productive mission state</a>.</p>"},
      {id:"end",title:"Transformation rather than disappearance",html:"<p>Reagan's <a href='constitutional-free-enterprise.html'>constitutional free enterprise</a> reduced political credit allocation but preserved defense, space, infrastructure, and strategic industry. The World Market Boom internationalized the system before the 1990 ownership crisis exposed how much of the fortress could be influenced through finance.</p>"}
    ],
    related:[{href:"national-recovery-enterprise-act.html",kicker:"Founding settlement",label:"National Recovery and Enterprise Act"},{href:"american-independent-motor-industry.html",kicker:"Industrial example",label:"American Independent Motor Industry"},{href:"rocket-awakening.html",kicker:"Mission culture",label:"Rocket Awakening"},{href:"productive-credit.html",kicker:"Renewal revision",label:"Productive Credit"},{href:"world-market-boom.html",kicker:"Internationalization",label:"World Market Boom"}],
    facts:[["Period","c. 1950–1985"],["Type","Historiographical designation"],["Ownership","Predominantly private"],["Demand","Households and strategic procurement"],["Resource base","Domestic and hemispheric"],["Characteristic sectors","Automobiles, housing, aerospace, energy"],["Political successor","Mission-state production"],["Ended by","Transformation under Reciprocal Open Markets"]]
  }),

  "productive-credit": americanPolicyArticle({
    title:"Productive credit",
    eyebrow:"National Renewal economic doctrine · 1970s–1980s",
    infoboxKicker:"American credit-allocation doctrine",
    landscape:{src:"assets/diagrams/productive-credit.svg",alt:"Credit stream divided between productive uses such as factories, housing, farms, computers, power and transport and speculative uses",caption:"National Renewal treated the intended use of credit as a public question rather than a neutral banking decision"},
    lead:"Productive credit was the National Renewal doctrine that public policy should distinguish finance directed toward factories, farms, housing, machines, computers, power, transport, and skilled work from finance directed principally toward asset speculation or political extraction. It became a governing principle under Pat Buchanan without producing a single national credit monopoly.",
    canon:"The productive-versus-speculative distinction, listed productive fields, use of tax, procurement, guarantees, loans, and institutes, internal dispute over compulsion, visible favoritism and failed projects, and partial rollback under Reagan are established. A single statutory definition, national balance sheet, universal lending quota, or complete list of qualifying institutions is not fixed.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>National Renewal inherited economic nationalism, corporatist language, Depression hostility toward finance, and Kennedy-era mission procurement. Buchanan translated those traditions into a constitutional governing program centered on visible capacity rather than formal nationalization.</p>"},
      {id:"definition",title:"Productive and speculative uses",html:"<p>Factories, housing, farms, machine tools, computers, power, transport, and technical training counted as productive because they created maintained capacity. Pure price appreciation, short-term asset turnover, and finance detached from equipment or work attracted suspicion.</p><p>The distinction was political and administrative, not a settled economic measurement.</p>"},
      {id:"instruments",title:"Policy instruments",html:"<p>Accelerated depreciation, federal procurement, loan guarantees, regional funds, industrial-modernization credit, housing benefits, research contracts, and technical institutes shaped investment. Private banks and firms remained important, but public rules altered their cost and access to capital.</p>"},
      {id:"act",title:"The 1977 mission act",html:"<p>The <a href='national-mission-productive-enterprise-act.html'>National Mission and Productive Enterprise Act</a> joined orbital construction, microelectronics, machine tools, housing, training, and industrial modernization. Senate resistance removed the most compulsory corporative provisions.</p>"},
      {id:"failure",title:"Failures and favoritism",html:"<p>Some subsidized firms bought advanced machinery without enough programmers, machinists, inspectors, maintenance staff, or managerial competence. Failed projects and politically connected borrowers demonstrated that a productive label could not guarantee productive execution.</p>"},
      {id:"institutes",title:"Training response",html:"<p>The administration expanded <a href='national-production-institutes.html'>National Production Institutes</a> around industrial regions, colleges, engineering schools, unions, and apprenticeship systems. The response shifted attention from buying equipment to sustaining the people required to use it.</p>"},
      {id:"politics",title:"Internal National Renewal dispute",html:"<p>Mission technocrats favored measurement and expert review. Corporatists wanted binding allocation. Congressional institutionalists defended appropriations and private lenders. Small-business supporters feared that large firms could translate political access into permanent preferential credit.</p>"},
      {id:"legacy",title:"Reagan and later legacy",html:"<p>Reagan rejected party-directed credit and broad rescue of favored firms while retaining procurement, infrastructure, research, technical education, and strategic capacity. After the Open Door Depression, every successor party revived some distinction between ordinary commerce and assets essential to national production.</p>"}
    ],
    related:[{href:"pat-buchanan.html",kicker:"Principal president",label:"Pat Buchanan"},{href:"buchananism.html",kicker:"Governing doctrine",label:"Buchananism"},{href:"national-mission-productive-enterprise-act.html",kicker:"Principal statute",label:"1977 Mission Act"},{href:"national-production-institutes.html",kicker:"Training system",label:"National Production Institutes"},{href:"constitutional-free-enterprise.html",kicker:"Reagan critique",label:"Constitutional Free Enterprise"}],
    facts:[["Principal period","1977–1985"],["Political home","National Renewal"],["Principal president","Pat Buchanan"],["Productive fields","Industry, housing, farms, computing, power, transport"],["Principal instruments","Tax, procurement, guarantees, directed loans"],["Universal national credit board","No"],["Known weakness","Favoritism and capacity mismatch"],["Reagan policy","Partial rollback, strategic residue"]]
  }),

  "national-production-institutes": americanPolicyArticle({
    title:"National Production Institutes",
    eyebrow:"Technical-education network · from the late 1970s",
    infoboxKicker:"American industrial-training system",
    landscape:{src:"assets/diagrams/national-production-institutes.svg",alt:"Network connecting community colleges, engineering schools, union apprenticeships, firms, laboratories, and regional production centers",caption:"The institutes joined machines to the technicians, programmers, inspectors, and maintenance workers needed to use them"},
    lead:"The National Production Institutes are an American network of technical schools, industrial laboratories, apprenticeship partnerships, and regional modernization centers created under the Buchanan administration. They arose after early automation subsidies showed that advanced machinery without trained workers, maintenance, calibration, software, and production discipline often reduced rather than increased capacity.",
    canon:"Their creation under Buchanan, regional network form, attachment to community colleges, engineering schools, union apprenticeships and industrial regions, focus on production technology, role in computing diffusion, and survival beyond National Renewal are established. Founding statute, headquarters, institute count, campuses, budgets, credentials, national director, and governance formulas remain open.",
    sections:[
      {id:"problem",title:"The automation problem",html:"<p>Industrial-credit programs helped firms purchase numerical-control tools, programmable controls, robots, testing equipment, and computerized inventories. Some installations failed because firms lacked trained operators, programmers, repair staff, inspectors, or managers able to redesign production around the machines.</p>"},
      {id:"formation",title:"Formation",html:"<p>Buchanan's government answered by funding institutes attached to existing community colleges, engineering schools, union apprenticeship programs, and industrial districts. The network form avoided one central academy and tied instruction to regional plants and trades.</p>"},
      {id:"curriculum",title:"Curriculum",html:"<p>Programs covered machine tools, welding and industrial robots, controls, electronics, maintenance, metrology, quality assurance, industrial computing, power systems, logistics, drafting, safety, and production supervision. Short conversion courses existed beside longer technician credentials.</p>"},
      {id:"partners",title:"Institutional partnerships",html:"<p>Firms supplied equipment, instructors, placements, and problems. Unions protected apprenticeship routes and recognized skills. Colleges provided general education and laboratories. Federal procurement agencies helped standardize credentials where strategic contracts required them.</p>"},
      {id:"computing",title:"Computing and small enterprise",html:"<p>Institute terminals, clubs, laboratories, and purchasing programs exposed students and local firms to personal computers, programming, electronic worksheets, controls, and business software. This indirect support became more culturally important than any proposal for a single government computer.</p>"},
      {id:"culture",title:"Production culture",html:"<p>National Renewal presented the institutes as places where practical skill, national service, and social mobility met. Their documentary films and exhibitions helped make the technician and production engineer public figures of the Columbia Generation.</p>"},
      {id:"criticism",title:"Criticism",html:"<p>Critics identified patronage, uneven regional access, employer influence over curricula, weak transfer into conventional universities, and pressure to treat publicly trained workers as tied to sponsored firms. Successful institutes sometimes became instruments of local political machines.</p>"},
      {id:"survival",title:"Survival after Buchanan",html:"<p>Reagan reduced direct party and credit-board influence but retained technical education, procurement-linked credentials, and successful regional partnerships. Later five-party governments disputed funding and governance without abolishing a network embedded in employers, colleges, and communities.</p>"}
    ],
    related:[{href:"national-mission-productive-enterprise-act.html",kicker:"Founding program",label:"National Mission and Productive Enterprise Act"},{href:"productive-credit.html",kicker:"Economic doctrine",label:"Productive Credit"},{href:"technician-class.html",kicker:"Social result",label:"Certified Technician Class"},{href:"office-automation.html",kicker:"Technical transition",label:"Office Automation"},{href:"columbia-generation.html",kicker:"Generational culture",label:"Columbia Generation"}],
    facts:[["Established","Late 1970s"],["Administration","Pat Buchanan"],["Form","Distributed technical-education network"],["Institutional homes","Colleges, engineering schools, unions, industrial regions"],["Principal fields","Automation, controls, computing, maintenance"],["National headquarters","Not fixed"],["Political identity","National Renewal origin"],["Later status","Retained under successor governments"]]
  }),

  "buchananism": americanPolicyArticle({
    title:"Buchananism",
    eyebrow:"American political doctrine · 1970s onward",
    infoboxKicker:"National Renewal governing doctrine",
    landscape:{src:"assets/diagrams/buchananism.svg",alt:"Wheel linking economic nationalism, family policy, Christian social rhetoric, industrial mission, immigration restriction, cultural nationalism, and constitutional elections",caption:"Buchananism made National Renewal governable by binding mission politics to lawful electoral succession"},
    lead:"Buchananism is the governing doctrine associated with Pat Buchanan's leadership of National Renewal after George Lincoln Rockwell's assassination. It combines economic nationalism, family policy, Catholic and broader Christian social rhetoric, industrial mission, immigration restriction, cultural nationalism, strategic strength, and acceptance of constitutional electoral succession.",
    canon:"Buchanan's leadership after Rockwell, the doctrine's named components, background survival of Rockwell-era racialism, nonracial public membership rule, rejection of a one-party constitutional rupture, productive mission state, lawful 1984 transfer, and lasting influence after the 1993 schism are established. A single canonical manifesto, exact faction boundaries, membership statistics, and later doctrinal courts remain open.",
    sections:[
      {id:"origin",title:"Origin after Rockwell",html:"<p>Buchanan prevented the retaliation sought by Rockwell's assassin, converted the martyr's memorial into a demand for discipline and lawful victory, and received party ratification. His leadership preserved National Renewal while denying the Old Guard control of its public program.</p>"},
      {id:"components",title:"Principal components",html:"<p>Economic nationalism, family benefits, Christian social teaching, industrial and space mission, immigration restriction, cultural nationalism, defense, and hostility toward detached finance formed the public synthesis. Race remained present in parts of the movement but was neither a formal membership bar nor the governing platform.</p>"},
      {id:"constitution",title:"Constitutional acceptance",html:"<p>Buchanan treated elections, Congress, courts, states, and succession as national institutions rather than temporary obstacles. National Renewal institutionalists defeated the <a href='national-unity-amendment.html'>National Unity Amendment</a>, and Buchanan accepted their refusal.</p>"},
      {id:"government",title:"Government, 1977–1985",html:"<p>The formula of peace, production, and ascent joined industrial modernization, family policy, nuclear power, computing, orbital construction, hemispheric security, and limited corporative bargaining. Visible missions substituted for a promised total constitutional refounding.</p>"},
      {id:"religion",title:"Religion and moral order",html:"<p>Buchanan drew openly upon Catholic social language while governing a predominantly Protestant country and a religiously mixed party. Christian-social members used the Council of Christ the King to argue against racial idolatry, leader cults, and total party control.</p>"},
      {id:"limits",title:"Internal limits and contradictions",html:"<p>Mission technocrats, corporatists, congressional institutionalists, Christian-social members, and the Rockwell Old Guard understood national purpose differently. Favoritism, propaganda language, immigration severity, cultural pressure, and the unresolved racial inheritance remained persistent liabilities.</p>"},
      {id:"transfer",title:"The 1984 transfer",html:"<p>Buchanan certified Ronald Reagan's victory, protected schedules and records, barred partisan use of security agencies, and ordered full cooperation. The transfer established that a National Renewal presidency did not require permanent National Renewal rule.</p>"},
      {id:"legacy",title:"Legacy and division",html:"<p>Reagan absorbed the language of family, frontier, production, Providence, and national greatness while rejecting political credit and cultural management. After the 1993 schism, National Vanguard, American Producers, Christian Social, and other successors claimed different portions of Buchanan's inheritance.</p>"}
    ],
    related:[{href:"pat-buchanan.html",kicker:"Principal figure",label:"Pat Buchanan"},{href:"american-parties.html",kicker:"Party system",label:"Political Parties in the United States"},{href:"productive-credit.html",kicker:"Economic component",label:"Productive Credit"},{href:"national-unity-amendment.html",kicker:"Constitutional limit",label:"National Unity Amendment"},{href:"1993-national-renewal-schism.html",kicker:"Later division",label:"National Renewal Schism"}],
    facts:[["Principal figure","Pat Buchanan"],["Political home","National Renewal"],["Governing period","1977–1985"],["Economic policy","National production and productive credit"],["Social policy","Family and Christian-social order"],["Immigration","Restriction and assimilation"],["Constitutional position","Electoral and congressional rule accepted"],["Later inheritance","Divided after 1993"]]
  }),

  "five-falklands-rules": americanPolicyArticle({
    title:"Five Falklands Rules",
    eyebrow:"American crisis doctrine · February 1985",
    infoboxKicker:"Reagan administration mediation rules",
    landscape:{src:"assets/diagrams/five-falklands-rules.svg",alt:"Five numbered rules limiting conquest, rival penetration, mainland attack, German combat forces, and settlement without islander consent",caption:"The rules bounded both belligerents and every external patron rather than promising automatic support to one side"},
    lead:"The Five Falklands Rules were President Ronald Reagan's public limits for American policy during the Falklands War. Announced in early 1985, they rejected sovereignty by conquest, rival great-power military penetration of the Americas, unrestricted British attack on Argentina, covert German combat involvement, and a final settlement imposed without islander self-government and consent.",
    canon:"The five rules, early-1985 announcement, continuity with Buchanan's armed mediation, use during American intelligence and diplomatic support, and influence on the Punta del Este settlement are established. Speech title, exact date and venue, legal form, classified implementing guidance, and contemporary polling remain open.",
    sections:[
      {id:"inheritance",title:"Inheritance from Buchanan",html:"<p>Reagan entered office while Britain held South Georgia and West Falkland and Argentina held most of East Falkland. He retained Buchanan's intelligence, defense, space, and crisis schedules rather than treating the change of party as a strategic reset.</p>"},
      {id:"one",title:"First rule: no sovereignty by conquest",html:"<p>The United States refused to recognize Argentine force as a sufficient title to the islands. The rule defended an American prohibition on hemispheric conquest without automatically endorsing every British imperial claim.</p>"},
      {id:"two",title:"Second rule: no rival great-power penetration",html:"<p>No German, Japanese, Latin, or other rival military foothold could emerge from the crisis. German equipment and advice to Argentina therefore remained a matter of American surveillance even when Washington continued to recognize Argentine sovereignty on the mainland.</p>"},
      {id:"three",title:"Third rule: limit mainland attack",html:"<p>Britain was not to attack the Argentine mainland except in immediate response to an attack originating there. The rule preserved a finite island war and denied London a mandate for regime change or punitive occupation.</p>"},
      {id:"four",title:"Fourth rule: no German combat formations",html:"<p>German troops, serving crews, bases, or covert combat formations were forbidden. This separated arms supply and technical support from intervention capable of turning the campaign into a German–British war.</p>"},
      {id:"five",title:"Fifth rule: islander consent",html:"<p>Every final settlement required protected self-government and the consent of the island population. The deliberately ambiguous formula allowed alternatives to eternal British sovereignty while preventing an American transfer of unwilling inhabitants to Argentina.</p>"},
      {id:"application",title:"Application during the war",html:"<p>American surveillance exposed deeper German assistance and moved policy toward Britain after Mount Pleasant fell, while the mainland and escalation limits remained. Washington supported continuation of the island campaign but not an unlimited British victory.</p>"},
      {id:"settlement",title:"Punta del Este and legacy",html:"<p>The <a href='punta-del-este-protocols.html'>Punta del Este Protocols</a> made the United States guarantor of a restrained British victory. The rules became a model of armed mediation: enough commitment to shape the war, enough limitation to keep every principal power inside a finite objective.</p>"}
    ],
    related:[{href:"ronald-reagan.html",kicker:"President",label:"Ronald Reagan"},{href:"falklands-war.html",kicker:"Conflict",label:"Falklands War"},{href:"punta-del-este-protocols.html",kicker:"Settlement",label:"Punta del Este Protocols"},{href:"armed-concert.html",kicker:"Strategic system",label:"Armed Concert"},{href:"war-termination-doctrine.html",kicker:"General doctrine",label:"War-Termination Doctrine"}],
    facts:[["Announced","Early 1985"],["President","Ronald Reagan"],["Theater","Falkland Islands and South Atlantic"],["Prohibited","Sovereignty by conquest"],["Mainland attack","Immediate response only"],["German combat role","Prohibited"],["Political condition","Islander self-government and consent"],["Settlement","Punta del Este Protocols, 1986"]]
  }),

  "constitutional-free-enterprise": americanPolicyArticle({
    title:"Constitutional free enterprise",
    eyebrow:"Democratic-Republican doctrine · 1980s",
    infoboxKicker:"American governing doctrine",
    landscape:{src:"assets/diagrams/constitutional-free-enterprise.svg",alt:"Balance joining competitive markets and independent institutions to a limited social floor and narrowly strategic state",caption:"The doctrine treated dispersed economic power as part of constitutional pluralism while preserving strategic capacity"},
    lead:"Constitutional free enterprise was the Democratic-Republican doctrine that competitive markets, independent firms and unions, civil liberty, monetary restraint, anti-monopoly rules, and dispersed economic power were constitutional safeguards rather than merely techniques of efficiency. Ronald Reagan made it the party's common language after 1980 while retaining a limited social floor and a narrowly strategic state.",
    canon:"The doctrine's post-1980 development, Reagan's leadership, constituent intellectual and political traditions, support for competitive markets and independent institutions, rejection of party-directed credit, continued strategic state, and transition into Reciprocal Open Markets are established. A single founding text, agreed philosophical canon, exact factional membership, and permanent policy boundary remain open.",
    sections:[
      {id:"coalition",title:"A doctrine for a fused party",html:"<p>The Democratic-Republicans joined former Democrats and Republicans whose labor, business, regional, civil-libertarian, and administrative traditions did not naturally produce one ideology. Constitutional free enterprise supplied a common argument without erasing those traditions.</p>"},
      {id:"constitution",title:"Economic power and constitutional order",html:"<p>The doctrine held that political pluralism required firms, unions, churches, states, press institutions, and households able to act without routine party permission. Dispersed economic power therefore protected constitutional life.</p>"},
      {id:"markets",title:"Markets and competition",html:"<p>Deregulation, tax reduction, monetary restraint, business formation, anti-monopoly law, labor independence, and consumer choice were treated as mutually supporting. The doctrine opposed both government cartels and private combinations capable of closing entry.</p>"},
      {id:"floor",title:"The limited social floor",html:"<p>Social Security, basic insurance, emergency relief, education, and transition assistance survived. Reagan's coalition argued over generosity and administration, but it did not return to a pre-New Deal constitutional order.</p>"},
      {id:"strategy",title:"The narrowly strategic state",html:"<p>Defense, orbital access, nuclear power, ports, communications, emergency industry, and continental security remained public concerns. The disagreement with National Renewal concerned control and political allocation, not whether the republic needed maintained strategic capacity.</p>"},
      {id:"reagan",title:"Reagan's synthesis",html:"<p>Reagan absorbed National Renewal's language of mission, family, production, frontier, and strength while insisting that the republic itself—not a party program—was the national mission. His 1984 victory made the synthesis governmental.</p>"},
      {id:"open",title:"Reciprocal Open Markets",html:"<p><a href='reciprocal-open-markets.html'>Reciprocal Open Markets</a> extended the doctrine internationally. Ordinary commerce opened where access was mutual, while strategic ownership remained formally restricted.</p>"},
      {id:"crisis",title:"The 1990 crisis",html:"<p>The ownership shock exposed a contradiction: dispersed investment could strengthen competition while networked foreign holdings concentrated practical influence. Post-crash Democratic-Republicans defended open ordinary commerce but accepted stronger aggregation and strategic screening.</p>"}
    ],
    related:[{href:"ronald-reagan.html",kicker:"Principal figure",label:"Ronald Reagan"},{href:"american-parties.html",kicker:"Party system",label:"Political Parties in the United States"},{href:"buchananism.html",kicker:"Rival doctrine",label:"Buchananism"},{href:"reciprocal-open-markets.html",kicker:"International policy",label:"Reciprocal Open Markets"},{href:"campaign-independence-public-trust-act.html",kicker:"Post-crash settlement",label:"Campaign Independence and Public Trust Act"}],
    facts:[["Political home","Democratic-Republican Party"],["Principal figure","Ronald Reagan"],["Period of ascent","1980–1985"],["Market principle","Competition and dispersed power"],["Labor principle","Independent unions"],["Social policy","Limited floor retained"],["Strategic state","Narrow but maintained"],["International expression","Reciprocal Open Markets"]]
  }),

  "reciprocal-open-markets": americanPolicyArticle({
    title:"Reciprocal Open Markets",
    eyebrow:"American commercial doctrine · 1985–1990",
    infoboxKicker:"Reagan administration trade doctrine",
    landscape:{src:"assets/diagrams/reciprocal-open-markets.svg",alt:"Three-tier trade system with ordinary sectors open, sensitive sectors negotiated, and strategic control closed",caption:"The doctrine opened ordinary commerce while claiming to keep the keys to strategic workshops under American control"},
    lead:"Reciprocal Open Markets was the Reagan administration's doctrine for widening trade, investment, licensing, and joint enterprise without accepting unilateral exposure or foreign control of strategic American capacity. Its governing distinction was between ordinary commerce, sensitive negotiated access, and protected strategic ownership.",
    canon:"The doctrine's first-term adoption, spring 1985 opening, mature 1986–87 articulation, three-category structure, reciprocity principle, strategic exclusions, relation to the 1985 and 1987 statutes, World Market Boom, and failure to aggregate ownership networks are established. Exact public launch speech, category schedules, sector thresholds, and complete administrative test remain open.",
    sections:[
      {id:"inheritance",title:"From Buchanan to Reagan",html:"<p>Buchanan had permitted selected foreign goods, licenses, designs, and minority capital while guarding strategic industry. Reagan rejected political allocation and broad protection but inherited the distinction between ordinary exchange and national capacity.</p>"},
      {id:"principle",title:"Reciprocity and sovereignty",html:"<p>The doctrine required governments to justify restrictions openly and widen commerce where dependence did not threaten sovereignty. It did not promise equal rules across unlike German, Japanese, British, Latin, and American ownership systems; reciprocity was negotiated in practical access.</p>"},
      {id:"ordinary",title:"Ordinary commercial sectors",html:"<p>Consumer goods, many services, portfolio investment, minority stakes, licensing, software, entertainment, and ordinary manufacturing received broad access where American firms could obtain comparable treatment abroad.</p>"},
      {id:"sensitive",title:"Sensitive negotiated sectors",html:"<p>Automobiles, machine tools, banking, telecommunications, commercial aerospace, chemicals, and other dual-use or infrastructural fields operated under thresholds, disclosure, local incorporation, reciprocal access, and case-specific safeguards.</p>"},
      {id:"strategic",title:"Strategic exclusions",html:"<p>Weapons, military launch, nuclear systems, key ports and routes, intelligence computing, core communications, and emergency mobilization capacity remained formally closed to foreign control even when foreign goods or minority investment entered adjacent markets.</p>"},
      {id:"law",title:"Statutory implementation",html:"<p>The <a href='american-open-markets-act.html'>1985 Open Markets Act</a> began the opening. The <a href='reciprocal-commerce-enterprise-act.html'>1987 act</a> replaced many individual permissions with general rules and expanded recognized financial instruments.</p>"},
      {id:"boom",title:"World Market Boom",html:"<p>Investment, exports, consumer choice, computing, space, finance, and manufacturing grew during the <a href='world-market-boom.html'>World Market Boom</a>. The success made tighter ownership definitions appear both unnecessary and economically dangerous.</p>"},
      {id:"failure",title:"Ownership failure and revision",html:"<p>Rules measured each nominee, affiliate, fund, bank, and custodian more reliably than the network connecting them. The <a href='american-ownership-mapping-project.html'>ownership-mapping project</a> exposed the gap in 1990. Later policy preserved open ordinary commerce while replacing nominal separation with aggregation and closed strategic control.</p>"}
    ],
    related:[{href:"constitutional-free-enterprise.html",kicker:"Domestic doctrine",label:"Constitutional Free Enterprise"},{href:"american-open-markets-act.html",kicker:"First statute",label:"Open Markets Act"},{href:"reciprocal-commerce-enterprise-act.html",kicker:"Second statute",label:"Reciprocal Commerce and Enterprise Act"},{href:"world-market-boom.html",kicker:"Economic result",label:"World Market Boom"},{href:"open-door-depression.html",kicker:"Systemic failure",label:"Open Door Depression"}],
    facts:[["Period","1985–1990"],["President","Ronald Reagan"],["Domestic doctrine","Constitutional free enterprise"],["Open category","Ordinary commerce"],["Middle category","Sensitive negotiated sectors"],["Closed category","Strategic control"],["High point","World Market Boom"],["Failure","Ownership networks not aggregated"]]
  })
});

function addAmericanPolicyRelated(slug, items) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const item of items) if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
}

addAmericanPolicyRelated("thomas-e-dewey",[
  {href:"national-recovery-enterprise-act.html",kicker:"Principal recovery law",label:"National Recovery and Enterprise Act"},
  {href:"fortress-fordism.html",kicker:"Economic legacy",label:"Fortress Fordism"}
]);
addAmericanPolicyRelated("pat-buchanan",[
  {href:"buchananism.html",kicker:"Governing doctrine",label:"Buchananism"},
  {href:"productive-credit.html",kicker:"Economic doctrine",label:"Productive Credit"},
  {href:"national-production-institutes.html",kicker:"Technical network",label:"National Production Institutes"}
]);
addAmericanPolicyRelated("ronald-reagan",[
  {href:"five-falklands-rules.html",kicker:"Crisis doctrine",label:"Five Falklands Rules"},
  {href:"constitutional-free-enterprise.html",kicker:"Domestic doctrine",label:"Constitutional Free Enterprise"},
  {href:"reciprocal-open-markets.html",kicker:"Commercial doctrine",label:"Reciprocal Open Markets"}
]);
addAmericanPolicyRelated("national-mission-productive-enterprise-act",[
  {href:"productive-credit.html",kicker:"Financing doctrine",label:"Productive Credit"},
  {href:"national-production-institutes.html",kicker:"Training network",label:"National Production Institutes"}
]);
addAmericanPolicyRelated("american-open-markets-act",[{href:"reciprocal-open-markets.html",kicker:"Governing doctrine",label:"Reciprocal Open Markets"}]);
addAmericanPolicyRelated("world-market-boom",[{href:"reciprocal-open-markets.html",kicker:"Governing doctrine",label:"Reciprocal Open Markets"}]);
addAmericanPolicyRelated("open-door-depression",[{href:"reciprocal-open-markets.html",kicker:"Pre-crash system",label:"Reciprocal Open Markets"}]);
addAmericanPolicyRelated("reagan-era",[
  {href:"five-falklands-rules.html",kicker:"Foreign-policy limits",label:"Five Falklands Rules"},
  {href:"constitutional-free-enterprise.html",kicker:"Domestic doctrine",label:"Constitutional Free Enterprise"},
  {href:"reciprocal-open-markets.html",kicker:"Commercial doctrine",label:"Reciprocal Open Markets"}
]);
addAmericanPolicyRelated("falklands-war",[{href:"five-falklands-rules.html",kicker:"American mediation",label:"Five Falklands Rules"}]);
