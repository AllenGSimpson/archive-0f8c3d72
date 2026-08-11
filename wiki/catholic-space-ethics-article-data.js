window.deepArticles = window.deepArticles || {};

const catholicSpaceEthicsSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Catholic Church and the space age"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Council reception and lunar milestones"},
  {href:"../transcript.md",label:"Master Transcript — the Church from the Council to the Moon and Vatican space oversight"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — Church and spaceflight chronology"}
];

const catholicSpaceMoralDiagram = {
  src:"assets/diagrams/catholic-space-moral-framework.svg",
  alt:"Diagram showing scientific achievement judged through human dignity, creatureliness, stewardship, and universal moral responsibility",
  caption:"Catholic space teaching affirms scientific achievement while denying that engineering success grants moral innocence, racial title, or political ownership of humanity"
};

const catholicSpaceEthicsArticle = config => ({
  category:"Catholic Church",
  eyebrow:"Catholic thought · technological power beyond Earth",
  infoboxKicker:"Religious and moral interpretation",
  landscape:catholicSpaceMoralDiagram,
  ...config,
  sources:[...catholicSpaceEthicsSources,...(config.additionalSources || [])],
  categories:config.categories || ["Catholicism in space","Catholic social teaching","Space Race","1970s"]
});

Object.assign(window.deepArticles, {
  "catholic-interpretation-1970-moon-landing": catholicSpaceEthicsArticle({
    title:"Catholic interpretation of the 1970 German Moon landing",
    category:"Religion and spaceflight",
    lead:"Catholic interpretation of the 1970 German Moon landing treated the mission as a genuine triumph of human reason within creation and as no proof of German racial superiority, National Socialist moral truth, or human independence from God. Pope Gregory XVII and Cardinal Fulton Sheen made this distinction the dominant Catholic reading of the first lunar landing.",
    canon:"The 20 December 1970 landing; its proximity to the Council of Christ the King; German political, technical, Lutheran, Catholic, and SS interpretations; Gregory XVII's congratulatory but anti-racial response; Sheen's American popular interpretation; Catholic educational expansion; and the distinction between technical inheritance and moral infallibility are established. Exact papal address, Sheen broadcast, service texts, school programs, reception statistics, and contemporary polling remain open.",
    sections:[
      {id:"event",title:"A landing with competing meanings",html:"<p>Two Germans reached the Moon on 20 December 1970. State propaganda connected the feat to victory, organization, and the young Führer's rule. Engineers emphasized calculation, industry, endurance, and the workers who built the mission. Christian services gave thanks, while harder ideological circles spoke of destiny and racial genius.</p>"},
      {id:"council",title:"Five years after the Council",html:"<p>The landing occurred only five years after the <a href='council-of-christ-the-king.html'>Council of Christ the King</a>. Its teaching that inherited communities are real but never absolute gave Catholics a ready language for honoring a national achievement while rejecting claims of natural dominion over other peoples.</p>"},
      {id:"creation",title:"Reason within creation",html:"<p>The Moon was understood as part of creation rather than a realm beyond God. Human reason, courage, workmanship, and cooperation possessed extraordinary dignity precisely as created powers entrusted to human beings.</p>"},
      {id:"race",title:"No racial title in mathematics",html:"<p>Germany could rightly receive credit for institutions, workers, engineers, and crews. Success did not show that Germans possessed a different human nature, that one race owned mathematics, or that technical precedence created a right to rule other peoples.</p>"},
      {id:"state",title:"Achievement does not absolve the state",html:"<p>The mission's excellence could not erase colonial coercion, racial law, political repression, or military danger. Catholic commentary separated the moral quality of the accomplishment from the moral standing of the regime that sponsored it.</p>"},
      {id:"education",title:"Catholic scientific confidence",html:"<p>Schools and universities in Italy, Spain, Occitania, the Philippines, the United States, and Britain expanded astronomy, mathematics, engineering, and technical education. The landing encouraged modernization without requiring Catholic institutions to adopt secular humanism.</p>"},
      {id:"east",title:"A shared Christian interpretation",html:"<p>Orthodox Christians could also treat the heavens as creation and pray for the crew while remaining critical of German rule. This supplied another point of common language between Rome and the Eastern churches after the council.</p>"},
      {id:"legacy",title:"A durable interpretive rule",html:"<p>Later stations, Moon bases, Mars landings, and orbital industries inherited the same judgment: reaching a new world enlarges human power and therefore enlarges responsibility. It does not place a nation, party, or civilization beyond moral review.</p>"}
    ],
    related:[{href:"moon-landing.html",kicker:"Historical event",label:"German Moon Landing"},{href:"gregory-xvii-and-german-moon-landing.html",kicker:"Papal response",label:"Gregory XVII and the Moon Landing"},{href:"fulton-sheen-and-german-moon-landing.html",kicker:"Popular interpretation",label:"Fulton Sheen and the Moon Landing"},{href:"council-of-christ-the-king.html",kicker:"Doctrinal context",label:"Council of Christ the King"},{href:"catholic-ethics-human-spaceflight.html",kicker:"Applied ethics",label:"Catholic Ethics of Human Spaceflight"},{href:"catholic-critique-imperial-spaceflight.html",kicker:"Political limit",label:"Catholic Critique of Imperial Spaceflight"},{href:"catholic-church.html",kicker:"Institution",label:"Catholic Church"}],
    facts:[["Event","German Moon landing"],["Date","20 December 1970"],["Principal pontiff","Gregory XVII"],["Principal popular interpreter","Fulton J. Sheen"],["Doctrinal context","Council of Christ the King"],["Achievement judged","Genuine and honorable"],["Racial or ideological proof","Rejected"],["Exact address and broadcast texts","Not established"]]
  }),

  "gregory-xvii-and-german-moon-landing": catholicSpaceEthicsArticle({
    title:"Gregory XVII and the German Moon landing",
    category:"Papal history",
    infoboxKicker:"Papal interpretation of the first lunar landing",
    lead:"Pope Gregory XVII's response to the German Moon landing was his final great international intervention. He congratulated the crew, families, German people, and mission workers while refusing to treat the achievement as vindication of National Socialism, racial empire, or political domination.",
    canon:"Gregory's congratulation of the crew, families, people, and workers; his use of the Psalm 8 theme of human smallness and entrusted authority; affirmation of human reason and creatureliness; rejection of racial ownership of reason and mathematics; warning against enlarged domination; and the address's place as his last major international appearance are established. Exact date after landing, venue, title, broadcast medium, language, complete wording, recipients, diplomatic drafting, and public reaction remain open.",
    sections:[
      {id:"occasion",title:"The pope's final international occasion",html:"<p>The December landing arrived as Gregory's health was becoming harder to conceal. Its worldwide audience gave the pope a final opportunity to interpret technological power through the council he had recently completed.</p>"},
      {id:"congratulation",title:"Unreserved honor for the achievement",html:"<p>Gregory honored the astronauts, their families, the German people, engineers, workers, and institutions responsible for the flight. He did not present scientific competence as spiritually suspect or reduce praise to a grudging diplomatic formula.</p>"},
      {id:"psalm",title:"Psalm 8 and entrusted authority",html:"<p>The response drew on the scriptural contrast between humanity's apparent smallness beneath the heavens and the real authority entrusted to it. Lunar travel displayed the dignity of reason while leaving the traveler a creature within the same creation.</p>"},
      {id:"limits",title:"Beyond Earth, not beyond creation",html:"<p>The central theological claim was that a person who reached the Moon had not escaped created reality or become self-originating. Exploration discovered another work of the Creator rather than a world emptied of God.</p>"},
      {id:"race",title:"Refusal of racial possession",html:"<p>A nation could receive and develop a technical inheritance. No people created human reason, and no race acquired mathematics as private property. German precedence therefore supplied no natural title over non-Germans.</p>"},
      {id:"power",title:"The warning about domination",html:"<p>The means capable of carrying people beyond Earth could also enlarge surveillance, weapons, coercion, and prestige. Gregory insisted that new power remain answerable for its use against people on Earth.</p>"},
      {id:"diplomacy",title:"Congratulations without ideological recognition",html:"<p>The Holy See addressed Germany as a people and political power while withholding approval from National Socialist doctrine. This preserved diplomatic courtesy and moral independence in the same message.</p>"},
      {id:"legacy",title:"The Gregorian formula after 1970",html:"<p>Paul VI preserved the same broad interpretation for the American landing in 1971. Later Catholic statements on stations, rescue, Mars, and settlement continued to join admiration with duties owed to vulnerable human beings.</p>"}
    ],
    related:[{href:"gregory-xvii.html",kicker:"Pontiff",label:"Pope Gregory XVII"},{href:"moon-landing.html",kicker:"Occasion",label:"German Moon Landing"},{href:"catholic-interpretation-1970-moon-landing.html",kicker:"Wider reception",label:"Catholic Interpretation of the Landing"},{href:"fulton-sheen-and-german-moon-landing.html",kicker:"American interpreter",label:"Fulton Sheen and the Moon Landing"},{href:"council-of-christ-the-king.html",kicker:"Doctrinal foundation",label:"Council of Christ the King"},{href:"catholic-critique-imperial-spaceflight.html",kicker:"Political application",label:"Catholic Critique of Imperial Spaceflight"},{href:"paul-vi.html",kicker:"Papal successor",label:"Paul VI"}],
    facts:[["Pontiff","Gregory XVII"],["Occasion","First human lunar landing"],["Landing date","20 December 1970"],["Biblical frame","Psalm 8"],["Achievement","Congratulated"],["National Socialist doctrine","Not endorsed"],["Racial interpretation","Rejected"],["Complete address text","Not established"]]
  }),

  "fulton-sheen-and-german-moon-landing": catholicSpaceEthicsArticle({
    title:"Fulton Sheen and the German Moon landing",
    category:"Catholic media history",
    infoboxKicker:"American Catholic interpretation",
    lead:"Cardinal Fulton J. Sheen became the most influential American Catholic interpreter of Germany's first lunar landing. He rejected both the claim that German success proved National Socialism true and the claim that a swastika on the Moon made the scientific achievement itself un-Christian.",
    canon:"Sheen's role as the leading Catholic popular interpreter; his rejection of ideological vindication and anti-scientific reaction; the distinction between magnificent rocket and morally answerable regime; connection to the Council's teaching on inheritance; and influence on Catholic scientific confidence are established. Exact program, date, network, title, script, audience, quotation, and relationship to specific schools or political organizations remain open.",
    sections:[
      {id:"role",title:"The American interpreter",html:"<p>Sheen's long experience in broadcasting, missionary education, public theology, and American politics gave him an audience capable of hearing a religious interpretation that was neither German propaganda nor reflexive national resentment.</p>"},
      {id:"first",title:"Against ideological vindication",html:"<p>Technical success did not prove National Socialism morally true. Launch vehicles could display disciplined intelligence and institutional capacity while the same state remained responsible for injustice.</p>"},
      {id:"second",title:"Against fear of science",html:"<p>The presence of a swastika on the Moon did not make astronomy, rocketry, mathematics, or exploration hostile to Christianity. Rejecting science because a rival first mastered it would surrender the field to that rival's ideology.</p>"},
      {id:"sacrament",title:"No technological absolution",html:"<p>Sheen's characteristic distinction held that technology possessed no sacrament capable of absolving its sponsor. The rocket could be magnificent and the regime still answerable for what it did elsewhere.</p>"},
      {id:"inheritance",title:"Technical inheritance and moral limits",html:"<p>A people could cultivate an inherited technical tradition with brilliance. The <a href='council-of-christ-the-king.html'>Council of Christ the King</a> denied that any inherited identity exhausted the person or conferred moral infallibility.</p>"},
      {id:"education",title:"Effect on Catholic education",html:"<p>The interpretation encouraged Catholic schools to teach engineering and science as vocations of disciplined reason. German precedence became a challenge to build institutions rather than evidence that religious education had failed.</p>"},
      {id:"politics",title:"Distance from American party use",html:"<p>American hawks could use the landing as proof of national decline, while isolationists could blame an excessive space race. Sheen's focus remained the moral meaning of ability and responsibility rather than a single party program.</p>"},
      {id:"legacy",title:"A language for later achievements",html:"<p>His formulation remained useful when American, Japanese, British, and Latin programs reached their own milestones. Catholic admiration did not depend on the sponsor being friendly, democratic, or Catholic.</p>"}
    ],
    related:[{href:"fulton-sheen.html",kicker:"Broadcaster",label:"Fulton J. Sheen"},{href:"moon-landing.html",kicker:"Event",label:"German Moon Landing"},{href:"catholic-interpretation-1970-moon-landing.html",kicker:"Wider reception",label:"Catholic Interpretation of the Landing"},{href:"gregory-xvii-and-german-moon-landing.html",kicker:"Papal interpretation",label:"Gregory XVII and the Moon Landing"},{href:"catholic-ethics-human-spaceflight.html",kicker:"Applied teaching",label:"Catholic Ethics of Human Spaceflight"},{href:"catholic-church.html",kicker:"Institution",label:"Catholic Church"},{href:"united-states.html",kicker:"National setting",label:"United States"}],
    facts:[["Interpreter","Cardinal Fulton J. Sheen"],["Audience","Principally American Catholic public"],["Event","German Moon landing · 1970"],["German technical achievement","Affirmed"],["National Socialist moral vindication","Rejected"],["Anti-scientific reaction","Rejected"],["Principal distinction","Technical excellence and moral accountability"],["Exact broadcast details","Not established"]]
  }),

  "vatican-oversight-latin-spaceflight": catholicSpaceEthicsArticle({
    title:"Vatican oversight of Latin spaceflight",
    category:"Holy See foreign relations",
    infoboxKicker:"Moral scrutiny of a Catholic-led space system",
    lead:"Vatican oversight of Latin spaceflight is the body of diplomatic, ethical, pastoral, and public interventions by which the Holy See supports the Latin Space Community's scientific cooperation while refusing to treat the bloc, its empires, or its technical language as owners of Catholic identity.",
    canon:"Vatican support for space science and cooperation among Catholic states; refusal to let Latin civilization substitute for the universal Church; concerns over crew experimentation, Sundays and feast days, spiritual provision, East African land and labor, concealed military payloads, and Latin as bloc property; observer role in San Marco diplomacy; and qualified criticism of Italian empire are established. Formal office before the later space commission, visitor list, memoranda, inspectors, diplomatic notes, budgets, veto authority, and individual disputes remain open.",
    sections:[
      {id:"support",title:"Support for scientific cooperation",html:"<p>The Holy See welcomed a program that made Italian, Occitan, Spanish, and Portuguese institutions cooperate in research, weather, medicine, communication, and peaceful orbital use. Vatican observers supplied moral language without claiming engineering authority.</p>"},
      {id:"church",title:"The Church is wider than the bloc",html:"<p>Catholicism could shape the Latin states without becoming their civilizational possession. Rome resisted claims that technical success proved the Latin political order uniquely providential or that Catholic identity belonged principally to one alliance.</p>"},
      {id:"crew",title:"Crew experimentation and survival",html:"<p>Medical screening, exposure limits, informed consent, life support, rescue, and recovery had to protect astronauts as persons rather than expendable symbols. Italian and Vatican pressure contributed to the Community's conservative path toward crewed flight.</p>"},
      {id:"worship",title:"Worship and spiritual provision",html:"<p>Long missions required practical treatment of Sundays, feast days, prayer, chaplains, sacramental access, and mixed rites. These questions later entered the Church's permanent <a href='catholic-pastoral-care-in-space.html'>space pastoral system</a>.</p>"},
      {id:"africa",title:"East African land and labor",html:"<p>San Marco depended on African territory, workers, ports, roads, weather knowledge, and exposure to risk. Rome could support the program while questioning unequal housing, promotion, medical access, authority, and public credit.</p>"},
      {id:"military",title:"Civil programs and concealed military use",html:"<p>Observation, communications, tracking, docking, and servicing possessed military applications. The Holy See objected especially to presenting a payload or mission as civil while concealing strategic purposes that altered risk or international responsibility.</p>"},
      {id:"language",title:"Latin as service rather than possession",html:"<p><a href='technical-latin-in-spaceflight.html'>Technical Latin</a> could make multinational work legible. Rome resisted treating the language of the Church as proof that the bloc represented Catholicism exclusively or owned Latin as a political trademark.</p>"},
      {id:"limits",title:"No Vatican control room",html:"<p>The Holy See did not design launchers, certify vehicles, allocate contracts, or command missions. Its influence operated through teaching, diplomacy, observer status, chaplaincy, medical institutions, Catholic universities, and the reputational cost of open disagreement.</p>"}
    ],
    related:[{href:"latin-space-community.html",kicker:"Program under scrutiny",label:"Latin Space Community"},{href:"san-marco-space-centre.html",kicker:"Principal ground complex",label:"San Marco Space Centre"},{href:"catholic-ethics-human-spaceflight.html",kicker:"Crew ethics",label:"Catholic Ethics of Human Spaceflight"},{href:"catholic-critique-imperial-spaceflight.html",kicker:"Colonial question",label:"Catholic Critique of Imperial Spaceflight"},{href:"universal-church-and-technical-latin.html",kicker:"Language question",label:"Universal Church and Technical Latin"},{href:"catholic-pastoral-care-in-space.html",kicker:"Pastoral successor",label:"Catholic Pastoral Care in Space"},{href:"paul-vi.html",kicker:"Later pontifical development",label:"Paul VI"}],
    facts:[["Principal period","1970s onward"],["Program supported","Latin Space Community"],["Status at San Marco diplomacy","Observer"],["Engineering command","None"],["Crew policy","Conservative protection"],["Colonial concern","East African land and labor"],["Security concern","Military use concealed as civil"],["Language position","Latin serves the universal Church"]]
  }),

  "catholic-ethics-human-spaceflight": catholicSpaceEthicsArticle({
    title:"Catholic ethics of human spaceflight",
    category:"Bioethics",
    infoboxKicker:"Human-subject, crew, and rescue ethics",
    lead:"Catholic ethics of human spaceflight is the moral framework applied to astronaut selection, medical experiments, exposure, life support, rescue, death, and political risk. In the Latin program it favors extensive screening, conservative limits, staged qualification, and the principle that no crew member may be reduced to an expendable instrument of prestige.",
    canon:"Italian and Vatican insistence that astronauts not be expendable; extensive screening; conservative exposure limits; slow progression from short flight to long occupation; medical ethics in experiments; life-support and recovery duties; protection of endangered crews in later orbital agreements; and pastoral provision are established. Formal ethical code, consent forms, experiment boards, exposure figures, disqualifying conditions, named institutions, individual cases, and sanctions remain open.",
    sections:[
      {id:"person",title:"The astronaut as person",html:"<p>An astronaut may accept unusual danger for a serious purpose. The state, military, or scientific institution may not treat that consent as permission to ignore preventable risk, conceal material facts, or sacrifice a crew for symbolic timing.</p>"},
      {id:"consent",title:"Medical experiments and consent",html:"<p>Selection and flight produce valuable physiological evidence, yet service obligations and prestige can pressure participants. Ethical review must distinguish necessary operational monitoring from research and identify risks that a candidate is genuinely free to refuse.</p>"},
      {id:"limits",title:"Conservative exposure limits",html:"<p>Radiation, acceleration, confinement, atmosphere, fatigue, thermal stress, isolation, and long-duration uncertainty are approached by staged exposure and accumulated evidence. Exact numeric limits remain open.</p>"},
      {id:"qualification",title:"Slow qualification",html:"<p>Ground endurance, uncrewed capsules, automated Concordia operation, docking tests, recovery rehearsals, and life-support trials precede Aquila I. Delay is accepted where the alternative is a death that sound testing could have prevented.</p>"},
      {id:"design",title:"Ethics becomes engineering",html:"<p>Escape systems, alarms, fire control, redundancy, repair access, medical telemetry, rescue beacons, quarantine, and recovery assets are material expressions of moral duties. Good intentions cannot replace a survivable system.</p>"},
      {id:"rescue",title:"A duty across rival blocs",html:"<p>Later orbital agreements protect life support and require aid to endangered crews regardless of sponsor. Human vulnerability creates obligations that survive military rivalry and national ownership.</p>"},
      {id:"pastoral",title:"Spiritual and family care",html:"<p>Preparation includes conscience, worship, rites, family communication, death notification, and care for survivors as well as physical medicine. Permanent occupation makes these ordinary institutional duties.</p>"},
      {id:"legacy",title:"From Concordia to interplanetary flight",html:"<p>Concordia establishes the conservative medical culture. Mars and Ceres add delayed rescue, radiation, isolation, reproductive questions, and the need for broad authority aboard missions far from immediate Earth support.</p>"}
    ],
    related:[{href:"latin-space-medicine.html",kicker:"Medical practice",label:"Latin Space Medicine"},{href:"concordia-human-endurance-program.html",kicker:"Research program",label:"Concordia Human-Endurance Program"},{href:"san-marco-medical-quarantine-complex.html",kicker:"Ground institution",label:"San Marco Medical and Quarantine Complex"},{href:"aquila-i.html",kicker:"Crewed culmination",label:"Aquila I"},{href:"vatican-oversight-latin-spaceflight.html",kicker:"Institutional scrutiny",label:"Vatican Oversight of Latin Spaceflight"},{href:"cross-bloc-rescue-duty.html",kicker:"International duty",label:"Cross-Bloc Rescue Duty"},{href:"catholic-pastoral-care-in-space.html",kicker:"Pastoral care",label:"Catholic Pastoral Care in Space"}],
    facts:[["Central principle","Crew members are not expendable instruments"],["Principal early program","Aquila and Concordia"],["Screening","Extensive"],["Exposure posture","Conservative"],["Qualification method","Staged ground and uncrewed evidence"],["Engineering duties","Escape · life support · rescue · recovery"],["Cross-bloc rescue","Required in mature orbital law"],["Formal ethical code","Not established"]]
  }),

  "catholic-critique-imperial-spaceflight": catholicSpaceEthicsArticle({
    title:"Catholic critique of imperial spaceflight",
    category:"Catholic social teaching",
    infoboxKicker:"Colonial labor and technological legitimacy",
    lead:"Catholic critique of imperial spaceflight is the Church's distinction between the legitimate scientific value of a space program and the justice of the imperial system supplying its land, labor, security, and resources. San Marco is its principal Latin case, while German colonial space infrastructure supplies the harsher comparison.",
    canon:"Vatican concern with East African labor and land; acknowledgment that Italian imperial practice is not innocent; rejection of German racial colonialism; support for evangelization without treating industrial success as moral legitimacy; San Marco's dependence on African land, labor, risk, and knowledge; and the broader principle that technical achievement does not absolve empire are established. Named Vatican document, investigation, demands, reforms, labor standards, compensation cases, sanctions, and full comparative doctrine remain open.",
    sections:[
      {id:"distinction",title:"A good mission can rest on an unjust order",html:"<p>Weather research, communications, rescue, medicine, and exploration can be genuine goods. Their value does not settle whether workers are free, land is justly held, danger is shared, or local people possess authority over institutions built around them.</p>"},
      {id:"sanmarco",title:"San Marco as the Latin test",html:"<p>The spaceport depends on Italian East African territory, Kismayo, ports, roads, construction, weather knowledge, local services, and an <a href='african-technical-service-san-marco.html'>African technical workforce</a>. Senior command, protected housing, promotion, and public credit remain overwhelmingly European.</p>"},
      {id:"germany",title:"The German comparison",html:"<p>Reports from German Africa make racial hierarchy, coercion, and information control the clearest negative standard. Rome distinguishes Latin practice from German doctrine while refusing to infer that a less racialized empire is therefore just.</p>"},
      {id:"mission",title:"Evangelization and political legitimacy",html:"<p>The Church supports schools, hospitals, clergy formation, conversion, and Christian institutions across Africa. Missionary growth does not certify the sovereignty, labor law, or security policy under which those institutions operate.</p>"},
      {id:"workers",title:"Duties to workers and communities",html:"<p>Pay, safety, medical care, housing, family life, training, promotion, compensation, and access to grievance procedures form part of the moral account. The source establishes the questions more firmly than any complete Vatican remedy.</p>"},
      {id:"risk",title:"Who carries launch risk",html:"<p>Workers and nearby communities can face construction accidents, propellant danger, exclusion zones, falling debris, fire, military controls, and emergency displacement while receiving little share of prestige or decision-making.</p>"},
      {id:"credit",title:"Public memory and hidden contribution",html:"<p>Royal patrons, astronauts, engineers, and member-state flags dominate official histories. Catholic criticism asks whether the people who built roads, handled cargo, observed weather, maintained utilities, and received danger are named in the story.</p>"},
      {id:"limit",title:"Moral legitimacy remains independent",html:"<p>A successful launch can demonstrate engineering competence. It cannot prove the justice of colonial rule, and a failed launch cannot by itself prove that an empire is immoral. Political judgment requires evidence about authority, persons, law, and treatment.</p>"}
    ],
    related:[{href:"san-marco-space-centre.html",kicker:"Principal Latin case",label:"San Marco Space Centre"},{href:"african-technical-service-san-marco.html",kicker:"Workforce",label:"African Technical Service at San Marco"},{href:"italian-east-africa.html",kicker:"Colonial system",label:"Italian East Africa"},{href:"mittelafrika.html",kicker:"German comparison",label:"Mittelafrika"},{href:"vatican-oversight-latin-spaceflight.html",kicker:"Institutional response",label:"Vatican Oversight of Latin Spaceflight"},{href:"catholic-interpretation-1970-moon-landing.html",kicker:"Doctrinal frame",label:"Catholic Interpretation of the Moon Landing"},{href:"catholic-social-order.html",kicker:"Wider teaching",label:"Christian Social Order"}],
    facts:[["Principal Latin case","San Marco Space Centre"],["Territorial setting","Italian East Africa"],["German comparison","Mittelafrika and the eastern empire"],["Scientific value","May be genuine"],["Automatic imperial legitimacy","Rejected"],["Principal concerns","Land · labor · risk · authority · credit"],["Missionary success as political proof","Rejected"],["Formal Vatican document","Not established"]]
  }),

  "universal-church-and-technical-latin": catholicSpaceEthicsArticle({
    title:"Universal Church and Technical Latin",
    category:"Language policy",
    infoboxKicker:"Ecclesiastical language and bloc administration",
    lead:"Universal Church and Technical Latin is the debate over the Latin Space Community's use of a modern controlled Latin register for law, engineering, mission control, and public symbolism. The Holy See welcomes a practical common language while resisting any claim that the Latin bloc thereby owns Catholic civilization or the language of the universal Church.",
    canon:"Technical Latin as the interface language of Latin spaceflight; Vatican concern over common use becoming bloc appropriation; the distinction between Latin civilization and universal Church; continued national working languages; authentic common documents; Church use of Latin across political systems; and preservation of Eastern Catholic patrimonies are established. Named Vatican intervention, trademark dispute, official correspondence, approved terminology, liturgical borrowing rules, and final political settlement remain open.",
    sections:[
      {id:"use",title:"A practical common register",html:"<p>Launcher interfaces, telemetry, docking specifications, safety instructions, certification, mission phraseology, and common records require shared meanings. <a href='technical-latin-in-spaceflight.html'>Technical Latin</a> supplies that layer while national teams continue working internally in their own languages.</p>"},
      {id:"support",title:"Why Rome supports the experiment",html:"<p>A common language can prevent mistranslation, distribute authority among four states, and demonstrate that Latin can express modern science. Catholic universities and trained clergy can contribute expertise without administering the program.</p>"},
      {id:"universal",title:"Latin is not a bloc possession",html:"<p>The Roman Church uses Latin across American, German, British, Japanese, Latin, and independent societies. A political alliance cannot convert that universal ecclesiastical inheritance into evidence that it alone represents Catholic civilization.</p>"},
      {id:"church",title:"Church Latin and administrative Latin",html:"<p>Liturgical, canonical, theological, diplomatic, and technical registers overlap but are not identical. A term approved for a docking interface does not acquire sacramental meaning, and a civil terminology office does not regulate the Church's language.</p>"},
      {id:"east",title:"Protection of Eastern patrimony",html:"<p>The Council of Christ the King protects Armenian, Greek, Syriac, Coptic, and other Eastern Catholic languages and rites. Latin cooperation may not become renewed Latinization inside the Church.</p>"},
      {id:"states",title:"Equality among member states",html:"<p>Common Latin prevents Italian from becoming the automatic supranational language and gives Spanish, Portuguese, and Occitan institutions an authentic shared text. This political benefit is compatible with the Vatican's universal concern.</p>"},
      {id:"symbol",title:"The danger of civilizational symbolism",html:"<p>Launch broadcasts, mottos, blessings, and ceremonies make Latin visibly prestigious. The language can become propaganda if technical cooperation is presented as proof that the bloc possesses a unique divine mission.</p>"},
      {id:"settlement",title:"A bounded accommodation",html:"<p>The practical settlement preserves three authorities: Community institutions control administrative standards, national bodies control internal work, and the Church controls its liturgical and canonical usage. No single actor owns the language in every domain.</p>"}
    ],
    related:[{href:"technical-latin-in-spaceflight.html",kicker:"Operational register",label:"Technical Latin in Spaceflight"},{href:"common-administrative-latin.html",kicker:"Wider civil register",label:"Common Administrative Latin"},{href:"latin-terminology-office.html",kicker:"Civil vocabulary authority",label:"Latin Terminology Office"},{href:"vatican-oversight-latin-spaceflight.html",kicker:"Vatican relationship",label:"Vatican Oversight of Latin Spaceflight"},{href:"council-of-christ-the-king.html",kicker:"Patrimonial doctrine",label:"Council of Christ the King"},{href:"ecclesial-patrimony.html",kicker:"Church principle",label:"Ecclesial Patrimony"},{href:"latin-space-community.html",kicker:"Political user",label:"Latin Space Community"}],
    facts:[["Technical user","Latin Space Community"],["Ecclesiastical user","Universal Catholic Church"],["Internal national languages","Retained"],["Civil authentic register","Common Administrative Latin"],["Technical authority","Community terminology and standards bodies"],["Church authority","Holy See and competent ecclesiastical institutions"],["Eastern Catholic languages","Protected"],["Bloc ownership of Latin","Rejected"]]
  })
});

const addCatholicSpaceEthicsRelated = (slug, item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["moon-landing",{href:"catholic-interpretation-1970-moon-landing.html",kicker:"Religious reception",label:"Catholic Interpretation of the Landing"}],
  ["gregory-xvii",{href:"gregory-xvii-and-german-moon-landing.html",kicker:"Final international intervention",label:"Gregory XVII and the Moon Landing"}],
  ["fulton-sheen",{href:"fulton-sheen-and-german-moon-landing.html",kicker:"Space-age commentary",label:"Fulton Sheen and the Moon Landing"}],
  ["catholic-church",{href:"catholic-interpretation-1970-moon-landing.html",kicker:"Technological teaching",label:"Catholic Interpretation of the Moon Landing"}],
  ["catholic-pastoral-care-in-space",{href:"catholic-ethics-human-spaceflight.html",kicker:"Moral framework",label:"Catholic Ethics of Human Spaceflight"}],
  ["latin-space-community",{href:"vatican-oversight-latin-spaceflight.html",kicker:"Catholic scrutiny",label:"Vatican Oversight of Latin Spaceflight"}],
  ["technical-latin-in-spaceflight",{href:"universal-church-and-technical-latin.html",kicker:"Ecclesiastical boundary",label:"Universal Church and Technical Latin"}],
  ["san-marco-space-centre",{href:"catholic-critique-imperial-spaceflight.html",kicker:"Moral controversy",label:"Catholic Critique of Imperial Spaceflight"}],
  ["latin-space-medicine",{href:"catholic-ethics-human-spaceflight.html",kicker:"Ethical foundation",label:"Catholic Ethics of Human Spaceflight"}],
  ["african-technical-service-san-marco",{href:"catholic-critique-imperial-spaceflight.html",kicker:"Moral interpretation",label:"Catholic Critique of Imperial Spaceflight"}]
].forEach(([slug,item]) => addCatholicSpaceEthicsRelated(slug,item));
