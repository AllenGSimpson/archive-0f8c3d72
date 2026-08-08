window.deepArticles = window.deepArticles || {};

const britishPolicySources = [
  { href: "../settingBible%20-%20AltWWII.md", label: "Setting Bible — Recovery and the Sterling Commonwealth" },
  { href: "../settingTimeline%20-%20AltWWII.md", label: "Setting Timeline — British reconstruction" },
  { href: "../transcript.md", label: "Master Transcript — British political economy and hard-currency transition" },
  { href: "https://api.parliament.uk/historic-hansard/commons/1932/oct/26/ottawa-agreements-bill", label: "UK Parliament — Ottawa Agreements debate, 1932" },
  { href: "https://researchbriefings.files.parliament.uk/documents/CBP-8325/CBP-8325.pdf", label: "House of Commons Library — Public ownership of industries and services" }
];

const britishPolicyArticle = article => ({
  ...article,
  category: "British Commonwealth",
  sources: britishPolicySources,
  categories: article.categories || ["British Commonwealth", "British economy", "Postwar reconstruction"]
});

const britishPolicyDiagram = {
  src: "assets/diagrams/british-reconstruction-policy.svg",
  alt: "Diagram of Commonwealth preference, the export drive, and public corporations converging on British recovery",
  caption: "The three principal material-policy systems of British reconstruction"
};

Object.assign(window.deepArticles, {
  "commonwealth-preference": britishPolicyArticle({
    title: "Commonwealth preference",
    eyebrow: "Trade policy · Ottawa system · post-defeat reconstruction",
    infoboxKicker: "Commonwealth preferential-trade system",
    lead: "Commonwealth preference is the system of tariff advantages, procurement rules, long contracts, reserve arrangements, and negotiated market access favoring trade within the British Commonwealth. Its modern legal ancestry lies in the 1932 Ottawa Agreements. After the 1947 defeat, preference becomes an operating principle of reconstruction and strategic supply rather than a fixed uniform tariff wall.",
    canon: "The Ottawa inheritance, bilateral character, post-defeat retention, connection to sterling and supply contracts, strategic exceptions, Dominion bargaining, colonial inequality, and survival through the 1988 Halifax settlement are established. Exact tariff schedules, commodity margins, country-by-country duration, and the balance between statute and executive agreement remain open.",
    portrait: britishPolicyDiagram,
    sections: [
      { id: "ottawa", title: "Ottawa inheritance", html: "<p>The 1932 Imperial Economic Conference produced bilateral agreements in which Britain and participating Empire governments exchanged tariff preferences and market concessions. The system expanded an older imperial practice while preserving separate national tariff laws.</p>" },
      { id: "war", title: "War and imperial supply", html: "<p>War redirected preference toward food, raw materials, shipping, munitions, and controlled purchasing. The system became inseparable from reserve management and the allocation of scarce tonnage.</p>" },
      { id: "reconstruction", title: "Reconstruction after 1947", html: "<p>The defeated British government retained preference because it required dependable markets for exports and dependable sources of food, metals, fuel, fibers, and industrial components. Long contracts and standards mattered as much as customs duties.</p>" },
      { id: "contracts", title: "Contracts and procurement", html: "<p>Commonwealth governments and public corporations used multi-year purchasing, approved suppliers, common specifications, shipping commitments, and development credit. Preference could therefore operate even where a nominal tariff difference was small.</p>" },
      { id: "sterling", title: "Sterling relationship", html: "<p>The <a href='controlled-sterling-area.html'>controlled sterling area</a> provided clearing and reserve arrangements. Preference directed the commerce moving through that financial system but did not require every participant to use sterling as domestic money.</p>" },
      { id: "bargaining", title: "Dominion bargaining", html: "<p>Canada, Australia, New Zealand, South Africa, and other governments negotiated for industrial access, food contracts, shipping, and investment. Preference survived because it was repeatedly bargained rather than commanded by one imperial legislature.</p>" },
      { id: "criticism", title: "Criticism", html: "<p>Free traders argued that preference raised prices and sheltered weak firms. Dominion critics said London used strategic solidarity to preserve British producers, while colonial critics pointed to unequal control over prices, processing, shipping, and credit.</p>" },
      { id: "later", title: "Later adaptation", html: "<p>Gold sterling, the Halifax Understanding, and American commercial access narrowed some barriers. Strategic ownership, anti-dumping rules, Commonwealth procurement, and protected supply remained, making later opening selective rather than general free trade.</p>" }
    ],
    related: [
      { href: "sterling-commonwealth-economy.html", kicker: "Wider system", label: "Sterling Commonwealth Economy" },
      { href: "controlled-sterling-area.html", kicker: "Financial counterpart", label: "Controlled Sterling Area" },
      { href: "commonwealth-supply-agreement.html", kicker: "Political settlement", label: "Commonwealth Supply Agreement" },
      { href: "british-export-drive.html", kicker: "Commercial policy", label: "British Export Drive" },
      { href: "british-market-opening-1988.html", kicker: "Later liberalization", label: "British Market Opening" }
    ],
    facts: [
      ["Modern foundation", "Ottawa Agreements, 1932"],
      ["Form", "Bilateral and multilateral preferences"],
      ["Post-1947 instruments", "Tariffs, procurement, contracts, standards, and credit"],
      ["Common external tariff", "No"],
      ["Single customs union", "No"],
      ["Monetary counterpart", "Controlled sterling area"],
      ["Status after 1988", "Reduced but retained in strategic sectors"]
    ]
  }),

  "british-export-drive": britishPolicyArticle({
    title: "British export drive",
    eyebrow: "Reconstruction policy · reserve earnings · 1948 onward",
    infoboxKicker: "British reconstruction campaign",
    lead: "The British export drive is the post-defeat campaign to earn the food, fuel, materials, and foreign reserves required for reconstruction. Usually summarized as ‘export or die,’ it directs scarce industrial output toward ships, machinery, engines, electrical equipment, pharmaceuticals, telecommunications, and technical services while the domestic population continues rationing and repair.",
    canon: "The campaign's place in reconstruction, reserve purpose, merchant-fleet connection, priority sectors, rationing context, Commonwealth market, controlled-sterling framework, and contribution to recovery are established. Its formal title, originating minister, central administrative office, annual targets, precise beginning, and date of termination remain open.",
    portrait: britishPolicyDiagram,
    sections: [
      { id: "need", title: "The need to export", html: "<p>Britain lacked the reserves to buy all required food, fuel, timber, metals, and industrial inputs. Financial claims could be delayed, but physical imports still required exports, shipping, accepted credit, or hard settlement.</p>" },
      { id: "slogan", title: "‘Export or die’", html: "<p>The phrase predated the postwar crisis and became a durable public shorthand for Britain's dependence on overseas earnings. After Lisbon it carried literal strategic force because failed exports threatened both household supply and maritime rearmament.</p>" },
      { id: "priorities", title: "Priority goods and services", html: "<p>Merchant ships, marine engines, machine tools, electrical plant, vehicles, pharmaceuticals, radar, telecommunications, insurance, engineering, and later computing and nuclear expertise received export attention. Britain sought high-value output that justified long shipping routes and scarce materials.</p>" },
      { id: "domestic", title: "Domestic restraint", html: "<p>Rationing, repair, standardized products, controlled credit, and delayed consumer supply released materials and factory time. The visible unfairness of exporting desirable goods while British households waited became a recurring political grievance.</p>" },
      { id: "markets", title: "Commonwealth markets", html: "<p><a href='commonwealth-preference.html'>Commonwealth preference</a>, development accounts, supply agreements, and shared standards gave British firms protected or negotiated markets. Approved machinery and ships also redeemed blocked sterling balances.</p>" },
      { id: "shipping", title: "Merchant-fleet reconstruction", html: "<p>Exports depended upon hulls, repair yards, crews, insurance, fuel, ports, and the Cape route. Rebuilding the merchant fleet was therefore part of export policy rather than a separate transport concern.</p>" },
      { id: "governments", title: "From Bevan to Butler", html: "<p>Bevan's ministry emphasized direction, rationing, and public capacity. Butler retained the export priority while relying more heavily on contracts, private firms, and negotiated Commonwealth demand. Later governments adjusted instruments without abandoning the underlying requirement.</p>" },
      { id: "legacy", title: "Legacy", html: "<p>The drive rebuilt reserves and preserved advanced manufacturing, finance, shipping, and engineering. It also rewarded established exporters, delayed household consumption, and tied prosperity to protected routes and politically managed markets.</p>" }
    ],
    related: [
      { href: "sterling-commonwealth-reconstruction.html", kicker: "Financial foundation", label: "Sterling and Commonwealth Reconstruction" },
      { href: "commonwealth-preference.html", kicker: "Protected markets", label: "Commonwealth Preference" },
      { href: "merchant-fleet-renewal-act.html", kicker: "Shipping capacity", label: "Merchant Fleet Renewal Act" },
      { href: "cape-route.html", kicker: "Principal route", label: "Cape Route" },
      { href: "public-corporations-united-kingdom.html", kicker: "Strategic suppliers", label: "British Public Corporations" }
    ],
    facts: [
      ["Principal period", "1948 onward"],
      ["Common slogan", "Export or die"],
      ["Purpose", "Imports, reserves, shipping, and reconstruction"],
      ["Priority output", "High-value manufactures and technical services"],
      ["Principal protected market", "British Commonwealth"],
      ["Domestic accompaniment", "Rationing and controlled investment"],
      ["Formal termination date", "Open"]
    ]
  }),

  "public-corporations-united-kingdom": britishPolicyArticle({
    title: "Public corporations of the United Kingdom",
    eyebrow: "Public ownership · strategic infrastructure · post-defeat Britain",
    infoboxKicker: "British state-owned industrial system",
    lead: "The public corporations of the United Kingdom are the statutory boards, trusts, and supervised companies responsible for strategic infrastructure after the 1947 defeat. They place coal, rail, electricity, nuclear power, telecommunications, strategic aviation, and parts of shipping under public ownership or close control while leaving most consumer and commercial industry in private hands.",
    canon: "The sectoral public-ownership settlement, strategic rationale, board or trust form, compensation principle, independent trade unions, emergency arbitration, continued private economy, Commonwealth contracting, and difficulty of allowing major corporations to fail are established. Exact acts, transfer dates, corporation names, board membership, steel ownership, and the boundary between ownership and supervision remain open by sector.",
    portrait: britishPolicyDiagram,
    sections: [
      { id: "background", title: "Wartime background", html: "<p>Wartime ministries already directed fuel, transport, power, communications, shipping, and aircraft production. Defeat extended the security argument: essential networks had to function even when immediate commercial returns were weak.</p>" },
      { id: "settlement", title: "The reconstruction settlement", html: "<p>The Brick Parliament transferred selected assets into public corporations or placed them under statutory supervision. Owners received compensation through government obligations, while boards assumed operating responsibility under parliamentary law.</p>" },
      { id: "sectors", title: "Strategic sectors", html: "<p>Coal, railways, electricity, nuclear energy, telecommunications, strategic civil aviation, and portions of shipping formed the stable core. Gas, steel, road haulage, ports, and defense firms varied more by period and statute.</p>" },
      { id: "form", title: "Corporate form", html: "<p>A public corporation held assets, employed staff, issued accounts, and operated under a statutory duty. This separated daily management from a ministry while preserving government appointment, borrowing authority, investment priorities, and parliamentary scrutiny.</p>" },
      { id: "investment", title: "Investment and coordination", html: "<p>Public bodies rebuilt grids, lines, yards, fleets, reactors, cables, and training systems through long programs. Their purchases supported private engineering and manufacturing firms across Britain and the Commonwealth.</p>" },
      { id: "labour", title: "Labour relations", html: "<p>Employees retained independent unions and collective bargaining. Essential services could enter compulsory arbitration during declared emergencies, reflecting the view that a stoppage in power, rail, shipping, or signals threatened the whole Commonwealth system.</p>" },
      { id: "private", title: "Boundary with private enterprise", html: "<p>Public ownership did not define the entire economy. Automobiles, consumer goods, chemicals, pharmaceuticals, machine tools, publishing, insurance, commercial engineering, and much defense production remained private, though procurement and strategic credit shaped their decisions.</p>" },
      { id: "problems", title: "Problems and later reform", html: "<p>Large corporations accumulated regional obligations, excess capacity, and political protection. Later governments imposed commercial targets, employee ownership, contracting, or partial reorganization, but reserve capacity and strategic control limited ordinary bankruptcy.</p>" }
    ],
    related: [
      { href: "sterling-commonwealth-economy.html", kicker: "Economic system", label: "Sterling Commonwealth Economy" },
      { href: "british-export-drive.html", kicker: "Production demand", label: "British Export Drive" },
      { href: "british-atomic-power-programme.html", kicker: "Strategic sector", label: "British Atomic Power Programme" },
      { href: "commonwealth-civil-aviation.html", kicker: "Network industry", label: "Commonwealth Civil Aviation" },
      { href: "industrial-reconstitution-reownership-act.html", kicker: "Later reform statute", label: "Industrial Reconstitution and Reownership Act" }
    ],
    facts: [
      ["Principal formation", "Post-1947 reconstruction"],
      ["Form", "Statutory corporations, boards, trusts, and supervised companies"],
      ["Core sectors", "Coal, rail, power, nuclear, telecommunications, aviation, and shipping"],
      ["Private consumer economy", "Retained"],
      ["Trade unions", "Independent"],
      ["Emergency services", "Subject to compulsory arbitration"],
      ["Uniform transfer date", "No"]
    ]
  })
});

const extendBritishPolicyRelated = (id, links) => {
  const article = window.deepArticles[id];
  if (!article) return;
  const existing = article.related || [];
  article.related = [...existing, ...links.filter(link => !existing.some(item => item.href === link.href))];
};

extendBritishPolicyRelated("sterling-commonwealth-economy", [
  { href: "commonwealth-preference.html", kicker: "Trade system", label: "Commonwealth Preference" },
  { href: "british-export-drive.html", kicker: "Reconstruction campaign", label: "British Export Drive" },
  { href: "public-corporations-united-kingdom.html", kicker: "Strategic ownership", label: "British Public Corporations" }
]);

extendBritishPolicyRelated("sterling-commonwealth-reconstruction", [
  { href: "british-export-drive.html", kicker: "Material program", label: "British Export Drive" },
  { href: "public-corporations-united-kingdom.html", kicker: "Ownership settlement", label: "British Public Corporations" }
]);
