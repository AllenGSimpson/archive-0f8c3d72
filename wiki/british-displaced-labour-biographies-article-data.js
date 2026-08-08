window.deepArticles = window.deepArticles || {};

const displacedLabourSources = personSource => [
  { href: "../settingBible%20-%20AltWWII.md", label: "Setting Bible — White Parachute settlement and election" },
  { href: "../settingTimeline%20-%20AltWWII.md", label: "Setting Timeline — 1947 British political settlement" },
  { href: "../transcript.md", label: "Master Transcript — Labour in 1947 and the coalition generation" },
  personSource
];

const displacedLabourBiography = (article, personSource) => ({
  ...article,
  category: "United Kingdom",
  sources: displacedLabourSources(personSource),
  categories: article.categories || ["British politicians", "Labour Party", "Second World War"]
});

Object.assign(window.deepArticles, {
  "ernest-bevin": displacedLabourBiography({
    title: "Ernest Bevin",
    eyebrow: "Trade unionist · wartime minister · coalition elder",
    infoboxKicker: "British politician and trade-union leader",
    lead: "Ernest Bevin (9 March 1881 – 14 April 1951) was a British trade-union leader and Labour politician who served as Minister of Labour and National Service during the long wartime coalition. His command of manpower, organized labour, and transport made him a principal advocate of merchant-fleet reconstruction, the Cape strategy, and a Sterling Commonwealth capable of resisting German economic dependence. He retired after the 1947 defeat and did not enter the Bevan government.",
    canon: "Bevin's historical life through 1941, wartime labour authority, place among the coalition leadership, connection to shipping and Commonwealth strategy, retirement after Lisbon, and death in 1951 are established or strongly continuous. His precise portfolio from 1945 to 1947, role in the peace negotiations, advice to Bevan, and private response to electoral defeat remain open. He does not follow the historical post-1945 career as Attlee's Foreign Secretary.",
    portrait: {
      src: "assets/portraits/ernest-bevin.jpg",
      alt: "Ernest Bevin during the Second World War",
      caption: "Ernest Bevin during his wartime ministerial service (Wikimedia Commons)"
    },
    sections: [
      { id: "early", title: "Early life", html: "<p>Bevin was born at Winsford in Somerset and left formal schooling as a child. Work as a labourer and lorry driver in Bristol brought him into the dockers' movement, where organizational ability and a powerful speaking style made him a full-time union official.</p>" },
      { id: "tgwu", title: "Transport and General Workers' Union", html: "<p>In 1922 Bevin helped create the Transport and General Workers' Union from fourteen separate bodies. As general secretary he built one of Britain's largest unions, favored collective bargaining and durable institutions, and opposed communist control and undisciplined direct action.</p>" },
      { id: "labour", title: "Minister of Labour", html: "<p>Churchill appointed Bevin Minister of Labour and National Service in 1940. Emergency powers gave him exceptional authority over manpower, reserved occupations, training, factory allocation, military recruitment, and relations with organized labour.</p>" },
      { id: "longwar", title: "The long war", html: "<p>The continuation of the coalition after 1945 kept Bevin at the center of mobilization. He had to balance exhausted workers, replacement drafts, shipyards, armaments, repair, civil defense, and the declining ability of Britain to sustain simultaneous theaters.</p>" },
      { id: "commonwealth", title: "Sterling Commonwealth and Cape strategy", html: "<p>Bevin argued that Britain could survive only through shipping, organized labour, armed strength, and an economically interdependent Commonwealth. He supported Cape routing, merchant-fleet renewal, reserve industrial capacity, and resistance to any postwar settlement that made Britain a German client.</p>" },
      { id: "lisbon", title: "Lisbon and retirement", html: "<p>The Lisbon defeat discredited every senior coalition faction. Bevin accepted collective responsibility and retired before the White Parachute Election, with declining health reinforcing the political decision.</p>" },
      { id: "final", title: "Final years and death", html: "<p>Bevin remained an influential private voice in the labour movement but held no office in the Reconstruction Ministry. He died in London on 14 April 1951, shortly before the election that ended Bevan's first government.</p>" },
      { id: "legacy", title: "Legacy", html: "<p>His wartime manpower system and Commonwealth instincts outlasted his career. Labour remembered him as the union statesman who made total mobilization governable; critics associated him with the coalition's strategic exhaustion and imperial priorities.</p>" }
    ],
    related: [
      { href: "clement-attlee.html", kicker: "Coalition colleague", label: "Clement Attlee" },
      { href: "aneurin-bevan.html", kicker: "Labour successor", label: "Aneurin Bevan" },
      { href: "sterling-commonwealth-economy.html", kicker: "Strategic inheritance", label: "Sterling Commonwealth Economy" },
      { href: "siege-commonwealth.html", kicker: "Maritime doctrine", label: "Siege Commonwealth" },
      { href: "merchant-fleet-renewal-act.html", kicker: "Postwar legislation", label: "Merchant Fleet Renewal Act" }
    ],
    facts: [
      ["Born", "9 March 1881 · Winsford, Somerset"],
      ["Died", "14 April 1951 · London"],
      ["Political party", "Labour"],
      ["Trade-union office", "General Secretary, TGWU, 1922–1945"],
      ["Wartime office", "Minister of Labour and National Service from 1940"],
      ["Parliament", "MP for Wandsworth Central, 1940–1947"],
      ["Post-defeat status", "Retired from office"]
    ]
  }, {
    href: "https://en.wikipedia.org/wiki/Ernest_Bevin",
    label: "Wikipedia — Ernest Bevin"
  }),

  "herbert-morrison": displacedLabourBiography({
    title: "Herbert Morrison",
    eyebrow: "Labour organizer · Home Secretary · municipal administrator",
    infoboxKicker: "British Labour politician",
    lead: "Herbert Stanley Morrison (3 January 1888 – 6 March 1965) was a British Labour politician, London administrator, and wartime Home Secretary. He brought the methods of municipal government, public corporations, policing, civil defense, and mass political organization into the extended coalition. Morrison lost his parliamentary seat in the 1947 White Parachute Election and never became foreign secretary or Labour leader.",
    canon: "Morrison's historical career through 1941, municipal outlook, wartime domestic role, position within the discredited coalition leadership, electoral defeat in 1947, and death in 1965 are established or strongly continuous. His exact 1945–1947 title, constituency result, later advisory work, publications, and relationship with Bevan after defeat remain open.",
    portrait: {
      src: "assets/portraits/herbert-morrison-1947.jpg",
      alt: "Herbert Morrison in 1947",
      caption: "Herbert Morrison in the year of the White Parachute Election (Wikimedia Commons)"
    },
    sections: [
      { id: "early", title: "Early life and Labour organization", html: "<p>Born in Brixton to a police constable's family, Morrison lost the sight of his right eye in infancy and left school at fourteen. Shop work, trade unionism, and local campaigning formed an organizer more interested in practical administration than doctrinal socialism.</p>" },
      { id: "london", title: "London government", html: "<p>Morrison built the London Labour Party and led the London County Council from 1934 to 1940. Transport, housing, public works, recreation, and the corporate form of metropolitan services became the foundation of his national politics.</p>" },
      { id: "war", title: "Wartime offices", html: "<p>After a short period at the Ministry of Supply, Morrison became Home Secretary and Minister of Home Security in 1940. His responsibilities included civil defense, policing, detention, shelters, public order, and the domestic administration of the air war.</p>" },
      { id: "coalition", title: "Domestic organizer of the coalition", html: "<p>During the extended war he represented Labour's party machine and the administrative state. Broadcasting, municipal repair, housing preparation, policing, and the coordination of local authorities placed him at the center of plans for physical reconstruction.</p>" },
      { id: "corporations", title: "Public corporations", html: "<p>Morrison favored statutory corporations that separated daily management from ministerial departments while retaining public ownership and accountability. This approach influenced the post-defeat settlement even after his removal from Parliament.</p>" },
      { id: "election", title: "Defeat in 1947", html: "<p>Morrison shared the coalition leadership's responsibility for the failed war and the rejection of negotiated exits. He lost his Commons seat in the fragmented White Parachute Election as Bevanite Labour displaced the older party organization.</p>" },
      { id: "later", title: "Later life", html: "<p>Outside Parliament, Morrison remained a writer, lecturer, and source of advice on local government and public administration. He did not return through a peerage to direct the reconstruction program. He died at Sidcup in Kent on 6 March 1965.</p>" },
      { id: "legacy", title: "Legacy", html: "<p>His personal succession ambitions ended in 1947, but the Morrisonian public corporation survived across transport, power, communications, and aviation. Assessments of him remain divided between administrative achievement and the coercive domestic powers of the long war.</p>" }
    ],
    related: [
      { href: "clement-attlee.html", kicker: "Coalition leader", label: "Clement Attlee" },
      { href: "aneurin-bevan.html", kicker: "Labour successor", label: "Aneurin Bevan" },
      { href: "public-corporations-united-kingdom.html", kicker: "Institutional legacy", label: "British Public Corporations" },
      { href: "brick-parliament.html", kicker: "Successor legislature", label: "Brick Parliament" },
      { href: "white-parachute-election.html", kicker: "Electoral defeat", label: "White Parachute Election" }
    ],
    facts: [
      ["Born", "3 January 1888 · Brixton, London"],
      ["Died", "6 March 1965 · Sidcup, Kent"],
      ["Political party", "Labour"],
      ["London office", "Leader of the London County Council, 1934–1940"],
      ["Wartime office", "Home Secretary and Minister of Home Security from 1940"],
      ["Parliament", "Labour MP until 1947"],
      ["Post-defeat status", "Defeated at the White Parachute Election"]
    ]
  }, {
    href: "https://en.wikipedia.org/wiki/Herbert_Morrison",
    label: "Wikipedia — Herbert Morrison"
  }),

  "stafford-cripps": displacedLabourBiography({
    title: "Stafford Cripps",
    eyebrow: "Barrister · wartime production minister · economic planner",
    infoboxKicker: "British Labour politician and diplomat",
    lead: "Sir Richard Stafford Cripps (24 April 1889 – 21 April 1952) was a British barrister, diplomat, Labour politician, and wartime production minister. After serving in Moscow, leading the failed 1942 mission to India, and directing aircraft production, he became the coalition's severe advocate of austerity, export targets, currency control, and industrial allocation. He lost his Bristol seat in 1947 and did not become Chancellor of the Exchequer.",
    canon: "Cripps's historical life and offices through 1942, aircraft-production work, Christian socialism, role as the coalition's severe economic planner, electoral defeat in 1947, and death in 1952 are established or strongly continuous. His exact economic portfolio from 1945 to 1947, authorship of individual controls, post-election public activity, and relationship with Bevan remain open. The historical Attlee-era chancellorship and 1949 devaluation do not occur.",
    portrait: {
      src: "assets/portraits/stafford-cripps-1947.jpg",
      alt: "Stafford Cripps in 1947",
      caption: "Stafford Cripps shortly before his electoral defeat (Wikimedia Commons)"
    },
    sections: [
      { id: "early", title: "Early life and law", html: "<p>Cripps was born in Chelsea into a wealthy legal and political family, studied chemistry at University College London, and became a barrister specializing in patent law. Evangelical Christianity and the social thought of the Webb family shaped his austere socialism.</p>" },
      { id: "left", title: "Labour left and Popular Front", html: "<p>Elected for Bristol East in 1931, Cripps led the Socialist League and advocated emergency economic powers. Labour expelled him in 1939 for promoting a Popular Front with communists, liberals, and anti-appeasement Conservatives; wartime service eventually restored him to the party.</p>" },
      { id: "moscow", title: "Ambassador to the Soviet Union", html: "<p>Churchill sent Cripps to Moscow in 1940. After Germany invaded the Soviet Union in 1941, he helped establish the Anglo-Soviet alliance and returned to Britain with exceptional public prestige.</p>" },
      { id: "india", title: "The Cripps Mission", html: "<p>His 1942 mission offered postwar self-government in exchange for Indian wartime cooperation. The proposals satisfied neither Churchill's imperial limits nor nationalist demands for immediate power. Its failure later appeared as an early stage in the political collapse of the Raj.</p>" },
      { id: "aircraft", title: "Aircraft production", html: "<p>As Minister of Aircraft Production, Cripps managed factories, labor, materials, design priorities, and output during the air war. The post provided practical experience of state-directed industrial coordination.</p>" },
      { id: "austerity", title: "Economic planning in the long war", html: "<p>After 1945 Cripps became the coalition's public face of austerity, export targets, currency licensing, industrial allocation, and delayed consumption. Unlike the later reconstruction governments, he defended these measures from within the political leadership responsible for continuing the war.</p>" },
      { id: "defeat", title: "Electoral defeat and death", html: "<p>Cripps lost his Commons seat in November 1947. Poor health and the collapse of the old Labour leadership prevented a return to office. He died in Zürich on 21 April 1952, three days before his sixty-third birthday.</p>" },
      { id: "legacy", title: "Legacy", html: "<p>His career ended before monetary reconstruction, yet many of his methods survived: export priority, consumption restraint, licensed foreign exchange, production targets, and technical allocation. Later governments separated those tools from Cripps's defeated coalition identity.</p>" }
    ],
    related: [
      { href: "clement-attlee.html", kicker: "Coalition colleague", label: "Clement Attlee" },
      { href: "aneurin-bevan.html", kicker: "Labour successor", label: "Aneurin Bevan" },
      { href: "british-export-drive.html", kicker: "Policy inheritance", label: "British Export Drive" },
      { href: "controlled-sterling-area.html", kicker: "Later monetary system", label: "Controlled Sterling Area" },
      { href: "breaking-of-the-raj.html", kicker: "Indian consequence", label: "Breaking of the Raj" }
    ],
    facts: [
      ["Born", "24 April 1889 · Chelsea, London"],
      ["Died", "21 April 1952 · Zürich, Switzerland"],
      ["Political party", "Labour"],
      ["Diplomatic office", "Ambassador to the Soviet Union, 1940–1942"],
      ["Wartime offices", "Lord Privy Seal; Leader of the Commons; Minister of Aircraft Production"],
      ["Parliament", "MP for Bristol East, 1931–1947"],
      ["Post-defeat status", "Defeated at the White Parachute Election"]
    ]
  }, {
    href: "https://en.wikipedia.org/wiki/Stafford_Cripps",
    label: "Wikipedia — Stafford Cripps"
  })
});

const extendDisplacedLabourRelated = (id, links) => {
  const article = window.deepArticles[id];
  if (!article) return;
  const existing = article.related || [];
  article.related = [...existing, ...links.filter(link => !existing.some(item => item.href === link.href))];
};

extendDisplacedLabourRelated("clement-attlee", [
  { href: "ernest-bevin.html", kicker: "Coalition colleague", label: "Ernest Bevin" },
  { href: "herbert-morrison.html", kicker: "Coalition colleague", label: "Herbert Morrison" },
  { href: "stafford-cripps.html", kicker: "Coalition colleague", label: "Stafford Cripps" }
]);

extendDisplacedLabourRelated("aneurin-bevan", [
  { href: "ernest-bevin.html", kicker: "Retired predecessor", label: "Ernest Bevin" },
  { href: "herbert-morrison.html", kicker: "Displaced party organizer", label: "Herbert Morrison" },
  { href: "stafford-cripps.html", kicker: "Displaced economic planner", label: "Stafford Cripps" }
]);

extendDisplacedLabourRelated("british-export-drive", [
  { href: "stafford-cripps.html", kicker: "Coalition precursor", label: "Stafford Cripps" }
]);

extendDisplacedLabourRelated("public-corporations-united-kingdom", [
  { href: "herbert-morrison.html", kicker: "Institutional precursor", label: "Herbert Morrison" }
]);

extendDisplacedLabourRelated("sterling-commonwealth-economy", [
  { href: "ernest-bevin.html", kicker: "Coalition precursor", label: "Ernest Bevin" }
]);

extendDisplacedLabourRelated("siege-commonwealth", [
  { href: "ernest-bevin.html", kicker: "Labour precursor", label: "Ernest Bevin" }
]);
