window.deepArticles = window.deepArticles || {};

const atomicNonarmamentSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — atomic nonarmament and strategic deterrence"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — nuclear research and the mature non-nuclear order"},
  {href:"../transcript.md",label:"Master Transcript — atomic-bomb concept, national studies, and rejected production path"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open nuclear institutions and chronology"}
];

const nonarmamentLandscape = {src:"assets/diagrams/atomic-nonarmament-path.svg",alt:"Historical path from atomic-explosive theory to a mature nuclear industry without weapons production or testing",caption:"Every system reaches technical feasibility while refusing the dedicated production, testing, and procurement branch"};

const atomicHistoryArticle = config => ({
  category:config.category || "Nuclear history",
  eyebrow:config.eyebrow || "Atomic explosives · feasibility without procurement",
  infoboxKicker:config.infoboxKicker || "Nuclear-weapons research history",
  landscape:nonarmamentLandscape,
  ...config,
  sources:atomicNonarmamentSources,
  categories:config.categories || ["Nuclear history","Nuclear nonarmament","Military research","Strategic doctrine"]
});

Object.assign(window.deepArticles, {
  "early-atomic-explosive-concept": atomicHistoryArticle({
    title:"Early atomic-explosive concept",category:"History of physics",eyebrow:"Fission theory · 1939–1947",infoboxKicker:"Theoretical weapon before procurement",
    lead:"The early atomic-explosive concept was the scientific and military recognition that a sufficiently rapid fission chain reaction could release extraordinary energy in a compact device. The concept entered wartime memoranda and public speculation without producing a state program that joined fissile-material production, weapon engineering, testing, and delivery.",
    canon:"Early-1940s conceptual understanding, wartime scientific and military discussion, absence of a Manhattan-scale crash program, publication of the atmospheric-ignition question, impractical early delivery estimates, and survival of the concept in later classified studies are established. First memorandum, authors, national priority, calculations, code names, document circulation, and precise dates remain open.",
    sections:[
      {id:"fission",title:"Fission and chain reaction",html:"<p>Research into neutron-induced fission made an explosive chain reaction physically conceivable before the setting's wartime divergence. The central question was no longer whether nuclei contained sufficient energy, but whether enough suitable material could be produced and assembled rapidly enough.</p>"},
      {id:"wartime",title:"Wartime discussion",html:"<p>Physicists and military technical offices in several states examined possible explosive effects, critical mass, isotope separation, reactor production, and delivery. The work remained distributed among research, ordnance, power, and intelligence institutions.</p>"},
      {id:"missing",title:"The missing crash program",html:"<p>No belligerent joined theory, industrial separation, plutonium production, implosion engineering, testing, and a delivery aircraft under one overriding emergency authority. Competing demands for aircraft, ships, fuel, radar, missiles, and conventional explosives remained immediate and proven.</p>"},
      {id:"delivery",title:"Delivery problem",html:"<p>Early estimates implied a weapon larger and less certain than ordinary bomber forces could readily use. An atomic device therefore appeared as an expensive engineering possibility rather than an available answer to a defined target problem.</p>"},
      {id:"public",title:"Public knowledge",html:"<p>The concept did not remain wholly secret. The question of atmospheric ignition entered journalism and fiction, giving the hypothetical bomb a public identity before any government possessed a working design.</p>"},
      {id:"reactors",title:"Separation from reactor work",html:"<p>Controlled chain reactions promised heat, electricity, isotope production, naval endurance, and scientific instruments. These uses could be pursued incrementally and demonstrated without authorizing an explosive.</p>"},
      {id:"postwar",title:"Postwar survival of the idea",html:"<p>Military files did not forget the weapon. Later feasibility studies inherited wartime calculations and improved them with reactor physics, computing, chemistry, metallurgy, and larger aircraft.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The atomic bomb entered history as a known possibility that no wartime government had made real. That sequence allowed technical knowledge to increase while the political barrier against first procurement hardened.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Later history",label:"Nuclear-Weapons Research"},{href:"atmospheric-ignition-controversy.html",kicker:"Public controversy",label:"Atmospheric-Ignition Controversy"},{href:"weapons-fissile-production.html",kicker:"Missing industrial branch",label:"Weapons-Oriented Fissile Production"},{href:"nuclear-energy.html",kicker:"Dominant atomic path",label:"Nuclear Power"},{href:"atomic-bomb-taboo.html",kicker:"Cultural consequence",label:"Atomic-Bomb Taboo"}],
    facts:[["Period","Early 1940s"],["Scientific basis","Rapid fission chain reaction"],["Conceptual feasibility","Recognized"],["Unified crash program","None"],["Weapons fissile production","None"],["Test device","None"],["Primary competing atomic path","Controlled reactors"],["Detailed first memorandum","Open"]]
  }),

  "atmospheric-ignition-controversy": atomicHistoryArticle({
    title:"Atmospheric-ignition controversy",category:"History of science",eyebrow:"Atomic risk debate · 1940s–1950s",infoboxKicker:"Published planetary-fire question",
    lead:"The atmospheric-ignition controversy was the public debate over whether the heat of a hypothetical atomic explosion could sustain reactions in the atmosphere or oceans and destroy life on Earth. Physicists later rejected the scenario, but its early publication fixed the atomic bomb in popular culture as a weapon whose builders had first been required to ask whether a test might end the world.",
    canon:"Preliminary scientific discussion, public circulation during the 1940s, later calculation ruling out atmospheric ignition, survival in journalism and fiction, and contribution to the atomic-bomb taboo are established. First authors, publication venue, equations, dates, editorial route, national terminology, and specific influential fictional works remain open.",
    sections:[
      {id:"question",title:"The scientific question",html:"<p>Physicists considered whether the temperature produced by an atomic explosion might initiate reactions involving atmospheric nitrogen or oceanic hydrogen. The question belonged to extreme-condition calculation rather than to evidence that ignition was likely.</p>"},
      {id:"publication",title:"Publication",html:"<p>Without a consolidated secret weapons project, the concern escaped into scientific journalism and popular reporting. Accounts often removed the distinction between asking whether a reaction could propagate and predicting that it would.</p>"},
      {id:"debate",title:"Public debate",html:"<p>Newspapers, lecturers, clergy, writers, and political critics treated the calculation as proof that atomic explosives occupied a different moral category from ordinary bombardment. Supporters of atomic research answered that controlled reactors involved no comparable mechanism.</p>"},
      {id:"correction",title:"Scientific rejection",html:"<p>Improved nuclear and atmospheric calculations showed that the relevant reactions could not sustain themselves under terrestrial conditions. By the 1950s the scientific community regarded planetary ignition by an atomic bomb as impossible.</p>"},
      {id:"fiction",title:"Science fiction and cinema",html:"<p>Popular fiction retained the world-burning device, mad scientist, forbidden calculation, and final switch. No real test footage or wartime use displaced those images with a familiar military object.</p>"},
      {id:"politics",title:"Political effect",html:"<p>A politician proposing the first program had to overcome a story that preceded the weapon: its inventors had once considered whether making it might destroy the planet. Scientific correction narrowed the predicted damage to cities without making deliberate city destruction respectable.</p>"},
      {id:"education",title:"Education and public memory",html:"<p>Textbooks and museums explained why ignition was impossible while recording that the question had been asked. The correction and the warning therefore survived together.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The controversy did not legally prohibit atomic explosives. It supplied a durable cultural barrier that reinforced every later budgetary, strategic, and industrial argument against becoming the first builder.</p>"}
    ],
    related:[{href:"atomic-bomb-taboo.html",kicker:"Principal legacy",label:"Atomic-Bomb Taboo"},{href:"early-atomic-explosive-concept.html",kicker:"Scientific background",label:"Early Atomic-Explosive Concept"},{href:"nuclear-weapons-research.html",kicker:"Military studies",label:"Nuclear-Weapons Research"},{href:"nuclear-safety-public-opinion.html",kicker:"Civil atomic politics",label:"Nuclear Safety and Public Opinion"},{href:"cross-bloc-popular-culture.html",kicker:"Cultural circulation",label:"Cross-Bloc Popular Culture"}],
    facts:[["Period","1940s–1950s"],["Question","Self-sustaining atmospheric or oceanic nuclear reaction"],["Public circulation","1940s"],["Later scientific conclusion","Ignition impossible"],["Military atomic test","None"],["Principal cultural form","Journalism · fiction · cinema"],["Political consequence","Reinforcement of first-builder taboo"],["First publication and authors","Open"]]
  }),

  "american-atomic-ordnance-false-start": atomicHistoryArticle({
    title:"American atomic-ordnance false start",category:"United States military research",eyebrow:"Army feasibility work · 1940s",infoboxKicker:"Unfunded American bomb study",
    lead:"The American atomic-ordnance false start was an early Army inquiry into whether one extremely large fission explosive could replace a mass conventional bombing effort. Projected device mass, fissile-production cost, uncertain design, and the absence of an overriding wartime requirement prevented the inquiry from becoming a national weapons program.",
    canon:"An early Army study, a projected device beyond practical B-17 carriage, requirement for a large new fissile-production and laboratory establishment, absence of Pearl Harbor and total mobilization, failure to secure sustained procurement, and later retention of technical knowledge are established. Office, title, authors, date, estimated mass, cost, isotope route, review chain, and disposition of the file remain open.",
    sections:[
      {id:"question",title:"The ordnance question",html:"<p>The Army asked whether a single atomic explosive might achieve effects otherwise requiring a large conventional raid. The inquiry treated the weapon as an unusually difficult item of ordnance rather than as the center of a national scientific mobilization.</p>"},
      {id:"device",title:"Projected device",html:"<p>Early calculations implied a large, uncertain assembly whose mass and handling exceeded practical employment by the principal B-17 force. No tested design supplied confidence that an aircraft and crew could deliver it safely.</p>"},
      {id:"industry",title:"Industrial requirement",html:"<p>A working program required isotope separation or reactor production, chemical processing, specialized laboratories, precision engineering, explosives work, security, and a test range. None of those facilities existed as one weapons system.</p>"},
      {id:"war",title:"Wartime priority",html:"<p>Without the Pearl Harbor attack, an enemy bomb program, or a political order for total atomic mobilization, the study competed with proven aircraft, shipping, radar, anti-submarine, and conventional-bomb requirements.</p>"},
      {id:"decision",title:"Procurement decision",html:"<p>The Army did not obtain sustained authorization for the complete production chain. Limited theoretical and material work remained distributed across universities, laboratories, military offices, and later reactor programs.</p>"},
      {id:"aircraft",title:"Later aircraft",html:"<p>Postwar bombers eventually removed the basic carriage objection. By then no atomic-weapons bureau, production constituency, test program, or demonstrated enemy arsenal existed to convert lift capacity into a procurement requirement.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>American institutions retained enough knowledge to recognize later feasibility. Their nuclear investment moved toward naval propulsion, remote power, medicine, civil electricity, and space.</p>"},
      {id:"interpretation",title:"Historical interpretation",html:"<p>Later historians describe the inquiry as a false start because it identified the weapon but failed to create the organization that would make each subsequent technical problem easier to fund.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Comparative history",label:"Nuclear-Weapons Research"},{href:"american-nuclear-catch-up.html",kicker:"Civil atomic successor",label:"American Nuclear Catch-Up"},{href:"weapons-fissile-production.html",kicker:"Unauthorised industry",label:"Weapons-Oriented Fissile Production"},{href:"atomic-bomb-taboo.html",kicker:"Political environment",label:"Atomic-Bomb Taboo"},{href:"united-states-aerospace-force.html",kicker:"Later strategic service",label:"United States Aerospace Force"}],
    facts:[["Responsible service","United States Army"],["Period","Early 1940s"],["Study type","Atomic-ordnance feasibility"],["Principal delivery problem","Beyond practical B-17 carriage"],["Required new industry","Fissile production and specialized laboratories"],["Sustained procurement","Not authorized"],["Test or weapon produced","None"],["Official study title","Open"]]
  }),

  "german-atomic-weapons-feasibility-studies": atomicHistoryArticle({
    title:"German atomic-weapons feasibility studies",category:"German military research",eyebrow:"Classified assessment · 1940s–1970s",infoboxKicker:"Closest latent atomic capability",
    lead:"The German atomic-weapons feasibility studies were classified wartime and postwar assessments of the materials, engineering, delivery, and institutions required to construct a fission weapon. They repeatedly concluded that Germany could build one if the state created a dedicated production and testing system; military and political authorities repeatedly declined to create that system.",
    canon:"Reactor-centered wartime work, preservation of a military theoretical file, a classified 1950s feasibility study, a later review probably in the late 1960s or 1970s, greatest latent competence among the Five Powers, technical feasibility, absence of a compelling requirement, and no weapon-grade stock, test establishment, assembly organization, or weapon are established. Study titles, dates, scientists, ministries, facilities, readiness estimate, and internal vote remain open.",
    sections:[
      {id:"wartime",title:"Wartime uranium work",html:"<p>German research concentrated on controlled chain reactions, isotope knowledge, measurement, and possible power applications. Military offices preserved questions about explosive assembly without directing a crash industrial program.</p>"},
      {id:"1950s",title:"The 1950s feasibility study",html:"<p>A classified postwar assessment concluded that a German bomb was technically possible. It also stated that possibility depended upon dedicated enrichment or production reactors, chemical separation, weapon laboratories, testing, security, and delivery integration.</p>"},
      {id:"requirement",title:"Military requirement",html:"<p>The armed forces could not identify a target and war plan for which the new atomic branch was preferable to conventional missiles, bombers, chemical capabilities, submarines, orbital systems, and continued expansion of reactor propulsion.</p>"},
      {id:"later",title:"Later review",html:"<p>A second major review, probably during the late 1960s or 1970s, benefited from mature computing, implosion knowledge, nuclear metallurgy, reactor operation, and isotope chemistry. Its technical confidence increased while its procurement judgment remained negative.</p>"},
      {id:"stocks",title:"Materials and facilities",html:"<p>Germany possessed uranium work, reactors, reprocessing knowledge, precision industry, and experienced physicists. It did not maintain a declared weapon-grade inventory, bomb-component line, explosive test establishment, or operational assembly organization.</p>"},
      {id:"competition",title:"Competition for nuclear capacity",html:"<p>Naval reactors, the electrical grid, industrial heat, medical production, the Raumhafen, lunar systems, and interplanetary propulsion all offered visible strategic returns. A weapons complex would divert skilled staff and politically contaminate those programs.</p>"},
      {id:"latency",title:"Latent capability",html:"<p>Foreign intelligence generally treated Germany as the state capable of reaching a weapon most quickly after a political decision. Latency was not an arsenal and supplied no tested design, trained warhead service, or assured production timetable.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>The studies remained evidence of capacity deliberately left unorganized. Germany continued to avoid the weapons-oriented industrial fork even after cost ceased to be a sufficient explanation.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Comparative history",label:"Nuclear-Weapons Research"},{href:"german-nuclear-power.html",kicker:"Civil atomic system",label:"German Nuclear Power"},{href:"weapons-fissile-production.html",kicker:"Rejected production fork",label:"Weapons-Oriented Fissile Production"},{href:"nuclear-propulsion.html",kicker:"Preferred strategic use",label:"Nuclear Propulsion"},{href:"atomic-bomb-taboo.html",kicker:"Political barrier",label:"Atomic-Bomb Taboo"}],
    facts:[["Period","1940s–1970s"],["Major classified review","1950s"],["Later review","Probably late 1960s or 1970s"],["Technical conclusion","Weapon feasible with dedicated institutions"],["Procurement conclusion","No compelling military requirement"],["Weapon-grade stockpile","None established"],["Test and assembly organizations","None"],["Comparative latent capability","Greatest among the Five Powers"]]
  }),

  "japanese-atomic-weapons-assessments": atomicHistoryArticle({
    title:"Japanese atomic-weapons assessments",category:"Japanese military research",eyebrow:"Imperial feasibility work · 1940s–1970s",infoboxKicker:"Naval-atomic alternative to weaponization",
    lead:"Japanese atomic-weapons assessments were the theoretical and strategic studies through which imperial scientific, naval, and planning institutions evaluated a fission explosive without creating a weapons program. Japan assigned higher priority to fleet propulsion, electrical independence, fuel efficiency, reprocessing, industrial isotope work, and later space reactors.",
    canon:"Japanese conceptual and later feasibility study, limited home-island uranium, imperial resource surveys, strong naval-propulsion and electrical motives, reprocessing competence, recognition of weapon feasibility, and refusal to establish a bomb-production or test system are established or conservative consequences of fixed canon. Committee names, dates, scientists, facilities, military sponsors, design route, budgets, and formal termination decisions remain open.",
    sections:[
      {id:"wartime",title:"Wartime scientific work",html:"<p>Japanese physicists and military technical offices understood the possibility of an explosive chain reaction. Wartime shortages, dispersal, competing naval and aviation needs, and uncertain access to suitable material prevented concentration into a complete program.</p>"},
      {id:"resources",title:"Fuel and resource problem",html:"<p>Limited home-island uranium encouraged surveys and concessions across the empire. The same constraint made efficient fuel use, reactor operation, and recovery of valuable materials more attractive than consuming a new system in weapons production.</p>"},
      {id:"navy",title:"Naval priority",html:"<p>Long-endurance submarines and fleet support supplied a direct military requirement for nuclear heat. Propulsion development created metallurgy, shielding, control, and reactor experience without establishing implosion or warhead institutions.</p>"},
      {id:"electricity",title:"Electrical independence",html:"<p>Reactors reduced dependence on imported mobile fuels and supported industrial belts, desalination, research, and imperial infrastructure. These benefits were continuous and visible to ministries that would have funded a bomb complex.</p>"},
      {id:"assessment",title:"Strategic assessment",html:"<p>Later studies could assume greater technical competence and improved delivery vehicles. They still faced no foreign atomic arsenal, no normalized first-use doctrine, and no mission that clearly outweighed the political cost of starting a five-power race.</p>"},
      {id:"reprocessing",title:"Reprocessing and safeguards",html:"<p>Japanese fuel-efficiency and reprocessing work created latent concern abroad. Material accounting and intelligence focused on whether civil streams were being redirected, but no weapon-grade production branch or test program became operational.</p>"},
      {id:"space",title:"Space-reactor successor",html:"<p>Distributed robotic systems, lunar preparation, Hōrai, Kaguya, and the direct Mars program gave compact reactors and long-duration power a second major strategic destination.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>Japan possessed mature civil, naval, and space atomic industries and no nuclear weapon. Feasibility assessments remained studies rather than the charter of a procurement organization.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Comparative history",label:"Nuclear-Weapons Research"},{href:"japanese-nuclear-power.html",kicker:"Civil atomic system",label:"Japanese Nuclear Power"},{href:"weapons-fissile-production.html",kicker:"Rejected production fork",label:"Weapons-Oriented Fissile Production"},{href:"japanese-attack-submarines.html",kicker:"Naval priority",label:"Japanese Attack Submarines"},{href:"space-programs.html",kicker:"Later atomic use",label:"Japanese Space Program"}],
    facts:[["Assessment period","1940s–1970s framework"],["Domestic uranium","Limited"],["Preferred military atomic use","Naval propulsion"],["Preferred civil use","Electricity and industrial heat"],["Fuel policy","Efficiency and reprocessing"],["Weapon feasibility","Recognized"],["Weapons production and test system","None"],["Study titles and sponsors","Open"]]
  }),

  "british-atomic-weapons-assessments": atomicHistoryArticle({
    title:"British atomic-weapons assessments",category:"British military research",eyebrow:"Reconstruction and feasibility · 1940s–1970s",infoboxKicker:"Atomic study under Commonwealth priorities",
    lead:"British atomic-weapons assessments were the scientific, military, and Treasury reviews that considered an atomic explosive while postwar governments concentrated resources on reconstruction, shipping, air defense, anti-submarine warfare, reactor power, naval propulsion, and independent spaceflight. Britain retained relevant knowledge without establishing a weapons-oriented fissile cycle.",
    canon:"British wartime awareness, later feasibility study, postwar reconstruction and maritime priorities, reactor and naval competence, absence of a weapons-production and testing complex, and repeated preference for conventional and space capabilities are established or conservative consequences of fixed canon. Committee names, dates, ministers, scientists, costings, designs, Commonwealth consultations, and final documents remain open.",
    sections:[
      {id:"wartime",title:"Wartime knowledge",html:"<p>British physicists and defense institutions understood fission and the possibility of an explosive. The altered Atlantic war and absence of a joint American crash project prevented that knowledge from becoming a completed allied bomb program.</p>"},
      {id:"reconstruction",title:"Reconstruction priorities",html:"<p>Postwar governments confronted damaged infrastructure, shipping losses, imports, housing, industrial renewal, and the defense of remaining routes. A new fissile-production complex competed with requirements already central to national survival.</p>"},
      {id:"programme",title:"Atomic power programme",html:"<p>The Atomic Power and Industrial Security Act of 1953 organized fuel, reactors, grid electricity, safety, and naval metallurgy. Canada and Australia strengthened fuel access and Commonwealth technical depth.</p>"},
      {id:"military",title:"Military assessment",html:"<p>Later aircraft could carry a large weapon, and British science could understand its design. The services nevertheless retained conventional strategic bombers, submarines, anti-submarine systems, air defense, and missiles without an enemy atomic force that demanded symmetrical procurement.</p>"},
      {id:"treasury",title:"Cost and institutional choice",html:"<p>A weapons branch required dedicated separation, design, testing, assembly, security, and long-term stockpile support. Those institutions would not be a small addition to the power program.</p>"},
      {id:"commonwealth",title:"Commonwealth dimension",html:"<p>Fuel, tracking, ranges, science, and naval work could be distributed across the Commonwealth. No fixed canon establishes that London asked the dominions to join a bomb program or that such a program received collective approval.</p>"},
      {id:"space",title:"Space priority",html:"<p>From the later 1980s British political competition treated Resolution, Serenity, planetary communications, and Mars as measures of sovereign technological standing. Nuclear expertise served power and propulsion inside that expansion.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>Britain remained capable of serious atomic research and possessed no nuclear explosive, weapons fissile stock, test history, or operational nuclear doctrine.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Comparative history",label:"Nuclear-Weapons Research"},{href:"british-atomic-power-programme.html",kicker:"Civil atomic system",label:"British Atomic Power Programme"},{href:"weapons-fissile-production.html",kicker:"Rejected production fork",label:"Weapons-Oriented Fissile Production"},{href:"british-nuclear-attack-submarines.html",kicker:"Naval priority",label:"British Nuclear Attack Submarines"},{href:"commonwealth-space-board.html",kicker:"Later technical priority",label:"Commonwealth Space Board"}],
    facts:[["Assessment period","1940s–1970s framework"],["Civil statute","Atomic Power and Industrial Security Act · 1953"],["Fuel partners","Canada and Australia"],["Preferred strategic uses","Power · propulsion · maritime defense · space"],["Weapon feasibility","Recognized"],["Weapons fissile cycle","None"],["Nuclear tests","None"],["Study titles and dates","Open"]]
  }),

  "latin-atomic-weapons-assessments": atomicHistoryArticle({
    title:"Latin atomic-weapons assessments",category:"Latin military research",eyebrow:"Italian-led feasibility work · 1950s–1980s",infoboxKicker:"Confederal atomic study without a bomb",
    lead:"Latin atomic-weapons assessments were the Italian-led scientific and strategic studies of an explosive device conducted within a multinational nuclear-energy system. Italy, Occitania, Spain, and Portugal invested instead in electrical sovereignty, industrial reactors, naval propulsion, medicine, and the Latin Space Community.",
    canon:"Separate Latin feasibility study, Italian political leadership, Occitan uranium and engineering importance, later Spanish and Portuguese participation, multinational civil and naval programs, Isaac Peral nuclear-submarine milestone, space-reactor development, and absence of a weapons program are established or conservative consequences of fixed canon. Study name, dates, institutional ownership, national vetoes, scientists, facilities, designs, and formal Latin-bloc decision remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Italian research and energy-security policy supplied the political center of the Latin atomic system. Occitan fuel and engineering, Spanish industry, and Portuguese maritime geography gave the wider bloc capabilities no member needed to reproduce alone.</p>"},
      {id:"feasibility",title:"Feasibility study",html:"<p>Scientific and military authorities examined whether the cooperative reactor and fuel base could support an explosive. The study distinguished possession of relevant knowledge from authorization to redirect material and build a warhead institution.</p>"},
      {id:"confederal",title:"Confederal decision problem",html:"<p>A Latin bomb would raise questions of ownership, custody, funding, basing, launch authority, and national veto. The bloc did not possess a single sovereign executive able to settle them as an ordinary procurement decision.</p>"},
      {id:"energy",title:"Energy sovereignty",html:"<p>Reactors reduced dependence upon imported coal and oil, stabilized industrial development, and supported a shared technical labor market. These purposes commanded broader agreement than an atomic weapon.</p>"},
      {id:"naval",title:"Naval propulsion",html:"<p>The Spanish Isaac Peral program demonstrated that Latin cooperation could produce a nuclear-propelled submarine by 1975. Its reactor, metallurgy, shipbuilding, and training work did not create a nuclear warhead.</p>"},
      {id:"space",title:"Space and exploration",html:"<p>San Marco, Stella Maris, Sancta Maria Lunae, and the Ceres program gave compact reactors, long-duration power, and nuclear propulsion prestigious uses consistent with the bloc's exploration-navy doctrine.</p>"},
      {id:"diplomacy",title:"Diplomatic position",html:"<p>The Latin system could oppose the first atomic arsenal while retaining technical latency. Its Catholic institutions, energy policy, and status as a recognized Fifth Power supplied separate arguments for nonarmament.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>No Latin state or common institution possessed a nuclear explosive, weapons fissile-production system, test history, or operational warhead service.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Comparative history",label:"Nuclear-Weapons Research"},{href:"latin-nuclear-energy-system.html",kicker:"Civil atomic system",label:"Latin Nuclear-Energy System"},{href:"weapons-fissile-production.html",kicker:"Rejected production fork",label:"Weapons-Oriented Fissile Production"},{href:"isaac-peral-class-ssn.html",kicker:"Naval milestone",label:"Isaac Peral-Class Nuclear Submarine"},{href:"latin-space-community.html",kicker:"Later atomic use",label:"Latin Space Community"}],
    facts:[["Political center","Italy"],["Fuel and engineering hinge","Occitania"],["Later participants","Spain and Portugal"],["Institutional form","Multinational Latin cooperation"],["Naval milestone","Isaac Peral · 1975"],["Weapon feasibility","Studied"],["Weapons program and test history","None"],["Study title and decision process","Open"]]
  }),

  "weapons-fissile-production": atomicHistoryArticle({
    title:"Weapons-oriented fissile production",category:"Nuclear technology",eyebrow:"Industrial branch never authorized",infoboxKicker:"The missing atomic-weapons production fork",
    lead:"Weapons-oriented fissile production is the unbuilt industrial system that would have supplied highly enriched uranium or separated plutonium for atomic explosives. The five great systems operated uranium mines, reactors, fuel plants, laboratories, and reprocessing facilities, but none organized the dedicated material flows, security, testing, and warhead institutions required for an arsenal.",
    canon:"The distinction between power-reactor and weapons programs, need for dedicated enrichment or plutonium-production and separation capacity, absence of an integrated weapons fissile cycle, no weapon-grade stockpiles maintained for warheads, German deliberate avoidance, and continued civil, naval, medical, and space nuclear industries are established. Isotope thresholds, facility designs, national accounting rules, safeguarded stocks, latent breakout estimates, and exact foreign intelligence assessments remain open.",
    sections:[
      {id:"material",title:"Fissile material",html:"<p>An atomic explosive requires a suitable fissile inventory with composition, purity, geometry, and handling different from ordinary reactor fuel. Natural uranium, low-enriched fuel, and fertile thorium do not become weapons merely because they belong to a nuclear industry.</p>"},
      {id:"routes",title:"Production routes",html:"<p>A state could pursue extensive uranium enrichment or produce plutonium in reactors followed by chemical separation. Either route required dedicated plants, waste handling, precision measurement, security, and a continuing feed-material system.</p>"},
      {id:"weaponization",title:"Beyond material production",html:"<p>Material alone would not create an arsenal. Weapon physics, high explosives, initiators, metallurgy, assembly, environmental testing, delivery integration, storage, surveillance, maintenance, and command doctrine formed a second institutional chain.</p>"},
      {id:"civil",title:"Civil and propulsion industries",html:"<p>Power reactors, naval propulsion, medical isotopes, industrial radiation, and space reactors developed through different fuel, engineering, and operating requirements. Their existence increased technical latency without automatically producing weapon-grade stocks.</p>"},
      {id:"germany",title:"German nondecision",html:"<p>Germany came closest to possessing all relevant industrial skills. Its feasibility studies nevertheless described a new weapons complex that had to be affirmatively created. Political and military authorities did not authorize it.</p>"},
      {id:"accounting",title:"Material accounting and intelligence",html:"<p>Reprocessing, enrichment research, uranium trade, and production reactors attracted foreign scrutiny. Operators and governments tracked material for fuel security, safety, theft prevention, and reassurance even without a universal inspectorate.</p>"},
      {id:"economics",title:"Cost after 1960",html:"<p>By about 1960 the great powers could afford a bomb program. The continued absence of production therefore reflected strategic and political choice rather than simple poverty or ignorance.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>No state maintained the integrated production, testing, assembly, and service structure of an atomic arsenal. Every major nuclear industry remained potentially relevant to a future decision, making nonarmament stable but never technically irreversible.</p>"}
    ],
    related:[{href:"nuclear-weapons-research.html",kicker:"Research history",label:"Nuclear-Weapons Research"},{href:"early-atomic-explosive-concept.html",kicker:"Theoretical origin",label:"Early Atomic-Explosive Concept"},{href:"german-atomic-weapons-feasibility-studies.html",kicker:"Closest national case",label:"German Feasibility Studies"},{href:"nuclear-energy.html",kicker:"Existing atomic industry",label:"Nuclear Power"},{href:"atomic-bomb-taboo.html",kicker:"Political barrier",label:"Atomic-Bomb Taboo"}],
    facts:[["Status by 2000","Never established as an integrated weapons system"],["Principal possible routes","Highly enriched uranium · separated plutonium"],["Natural uranium as a weapon","No"],["Ordinary reactor fuel as a weapon","No"],["Required companion systems","Design · testing · assembly · delivery · maintenance"],["Greatest latent industrial base","Germany"],["Cost as sufficient explanation after 1960","No"],["Universal inspectorate","None established"]]
  })
});

const addAtomicNonarmamentRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  const existing = new Set((article.related || []).map(item => item.href));
  article.related = [...items.filter(item => !existing.has(item.href)), ...(article.related || [])];
};

addAtomicNonarmamentRelated("nuclear-weapons-research",[
  {href:"early-atomic-explosive-concept.html",kicker:"Theoretical origin",label:"Early Atomic-Explosive Concept"},
  {href:"american-atomic-ordnance-false-start.html",kicker:"American route",label:"American Atomic-Ordnance False Start"},
  {href:"german-atomic-weapons-feasibility-studies.html",kicker:"German route",label:"German Atomic-Weapons Feasibility Studies"},
  {href:"weapons-fissile-production.html",kicker:"Industrial fork",label:"Weapons-Oriented Fissile Production"}
]);
addAtomicNonarmamentRelated("atomic-bomb-taboo",[
  {href:"atmospheric-ignition-controversy.html",kicker:"Foundational controversy",label:"Atmospheric-Ignition Controversy"},
  {href:"early-atomic-explosive-concept.html",kicker:"Scientific origin",label:"Early Atomic-Explosive Concept"}
]);
addAtomicNonarmamentRelated("nuclear-energy",[
  {href:"weapons-fissile-production.html",kicker:"Unbuilt weapons branch",label:"Weapons-Oriented Fissile Production"},
  {href:"nuclear-weapons-research.html",kicker:"Explosive feasibility",label:"Nuclear-Weapons Research"}
]);
addAtomicNonarmamentRelated("american-nuclear-catch-up",[
  {href:"american-atomic-ordnance-false-start.html",kicker:"Earlier military path",label:"American Atomic-Ordnance False Start"}
]);
addAtomicNonarmamentRelated("german-nuclear-power",[
  {href:"german-atomic-weapons-feasibility-studies.html",kicker:"Rejected military branch",label:"German Atomic-Weapons Feasibility Studies"}
]);
addAtomicNonarmamentRelated("japanese-nuclear-power",[
  {href:"japanese-atomic-weapons-assessments.html",kicker:"Rejected military branch",label:"Japanese Atomic-Weapons Assessments"}
]);
addAtomicNonarmamentRelated("british-atomic-power-programme",[
  {href:"british-atomic-weapons-assessments.html",kicker:"Rejected military branch",label:"British Atomic-Weapons Assessments"}
]);
addAtomicNonarmamentRelated("latin-nuclear-energy-system",[
  {href:"latin-atomic-weapons-assessments.html",kicker:"Rejected military branch",label:"Latin Atomic-Weapons Assessments"}
]);
