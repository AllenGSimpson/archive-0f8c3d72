window.deepArticles = window.deepArticles || {};

const sterlingInstitutionSources = [
  { href: "../settingBible%20-%20AltWWII.md", label: "Setting Bible — Recovery and the Sterling Commonwealth" },
  { href: "../settingTimeline%20-%20AltWWII.md", label: "Setting Timeline — British reconstruction and monetary chronology" },
  { href: "../transcript.md", label: "Master Transcript — controlled sterling and British return to gold" },
  { href: "https://www.bankofengland.co.uk/about/history", label: "Bank of England — institutional history" }
];

const sterlingInstitutionArticle = article => ({
  ...article,
  category: "British Commonwealth",
  sources: sterlingInstitutionSources,
  categories: article.categories || ["British Commonwealth", "British economy", "Sterling"]
});

Object.assign(window.deepArticles, {
  "sterling-commonwealth-economy": sterlingInstitutionArticle({
    title: "Sterling Commonwealth economy",
    eyebrow: "Political economy · reconstruction · managed Commonwealth trade",
    infoboxKicker: "British Commonwealth economic system",
    lead: "The Sterling Commonwealth economy is the mixed economic order built by Britain and its imperial partners after the 1947 defeat. It combines a social floor and public strategic infrastructure with private consumer industry, the City of London, Commonwealth preference, controlled convertibility, and long-term supply contracts. By the 1970s Britain functions as the network's design office, bank, insurer, carrier, and arsenal headquarters.",
    canon: "The system's mixed ownership, strategic public sectors, private commercial sectors, social floor, managed sterling, Commonwealth preference, distributed production, emergency arbitration, mature British specializations, and principal vulnerabilities are established. A single statutory founding act, exact sector boundaries, Dominion contribution formulas, and annual shares of Commonwealth production remain open.",
    sections: [
      { id: "origin", title: "Origin in defeat", html: "<p>Defeat left Britain indebted, short of reserves, dependent upon long sea routes, and responsible for a dispersed imperial system. Reconstruction therefore joined domestic welfare to merchant shipping, strategic industry, and negotiated Dominion capacity.</p>" },
      { id: "formula", title: "Beveridge, Ottawa, and the City", html: "<p>The unofficial formula was ‘Beveridge at home, Ottawa abroad, and the City in the middle.’ Social insurance sustained political legitimacy; preference and contracts organized the Commonwealth market; finance, insurance, and clearing kept London central.</p>" },
      { id: "ownership", title: "Mixed ownership", html: "<p>Coal, rail, electricity, nuclear power, telecommunications, strategic aviation, and parts of shipping became public trusts or closely supervised corporations. Consumer goods, automobiles, chemicals, pharmaceuticals, machine tools, publishing, insurance, commercial engineering, and much defense production remained chiefly private.</p>" },
      { id: "labour", title: "Labour and the social floor", html: "<p>Trade unions remained independent. Essential imperial services could enter compulsory arbitration during emergencies. Healthcare, insurance, pensions, family support, housing, and technical education formed a social floor justified by wartime sacrifice and the demands of reconstruction.</p>" },
      { id: "distribution", title: "Distributed Commonwealth industry", html: "<p>Britain retained design, finance, computing, aerospace, engines, radar, advanced naval construction, pharmaceuticals, high-end machinery, and military systems. Canada, Australia, South Africa, Rhodesia, New Zealand, Caribbean and Gulf possessions, and aligned Indian territories supplied complementary resources, food, mass production, repair, arsenals, and transport.</p>" },
      { id: "monetary", title: "The sterling framework", html: "<p>The <a href='controlled-sterling-area.html'>controlled sterling area</a> pooled reserves and restricted conversion while Commonwealth development accounts turned financial claims into machinery, ships, power systems, telecommunications, and investment. The framework linked states without giving London a single imperial treasury.</p>" },
      { id: "maturity", title: "Maturity and recovery", html: "<p>By the mid-1970s bombing damage had been removed, nuclear power was widespread, sterling was stable inside its area, and Britain was again prosperous and technically formidable. The Commonwealth collectively carried great-power weight that Britain could no longer sustain alone.</p>" },
      { id: "weaknesses", title: "Structural weaknesses", html: "<p>The system depended upon shipping, access to African and Indian Ocean facilities, Dominion consent, protected firms, and politically difficult public corporations. Colonial inequality and long-lived producer protection remained embedded in the recovery settlement.</p>" }
    ],
    related: [
      { href: "sterling-commonwealth-reconstruction.html", kicker: "1948 foundation", label: "Sterling and Commonwealth Reconstruction" },
      { href: "controlled-sterling-area.html", kicker: "Monetary core", label: "Controlled Sterling Area" },
      { href: "bank-of-england.html", kicker: "Central bank", label: "Bank of England" },
      { href: "siege-commonwealth.html", kicker: "Strategic counterpart", label: "Siege Commonwealth" },
      { href: "gold-sterling.html", kicker: "Later resumption", label: "Sterling Resumption" }
    ],
    facts: [
      ["Period", "1947 onward"],
      ["Model", "Mixed economy with managed Commonwealth preference"],
      ["Strategic infrastructure", "Public trusts or supervised corporations"],
      ["Consumer industry", "Predominantly private"],
      ["Monetary core", "Controlled sterling area"],
      ["British mature role", "Design, finance, insurance, carriage, and arsenal coordination"],
      ["Single imperial treasury", "No"]
    ]
  }),

  "controlled-sterling-area": sterlingInstitutionArticle({
    title: "Controlled sterling area",
    eyebrow: "Exchange control · reserve pooling · Commonwealth finance",
    infoboxKicker: "Sterling monetary area",
    lead: "The controlled sterling area is the monetary and exchange-control system established by Britain's 1948 reconstruction settlement. Member governments retain their own budgets and, where applicable, currencies, but hold reserves through sterling arrangements, settle approved trade through London, and limit conversion into gold dollars or hostile-bloc money. It is the financial core of the early Sterling Commonwealth rather than a common currency union.",
    canon: "The 1948 foundation, ordinary pound's initial nonconvertibility, exchange controls, reserve pooling, blocked and development accounts, approved-goods redemption, negotiated Canadian treatment, distinction from a currency union, and later coexistence with Gold Sterling Accounts are established. Exact membership by year, reserve quotas, bilateral release schedules, penalties, and the date when the term became official remain open.",
    sections: [
      { id: "crisis", title: "The 1948 reserve crisis", html: "<p>Britain could not simultaneously finance food and reconstruction imports, defend a gold parity, and redeem its wartime sterling liabilities. Immediate convertibility would have transferred scarce reserves abroad and broken the recovery program.</p>" },
      { id: "membership", title: "Membership and association", html: "<p>The system covered Britain, much of the Commonwealth and empire, and governments that held or earned sterling. Participation varied. Canada negotiated treatment suitable to an autonomous dollar economy rather than accepting colonial blocking.</p>" },
      { id: "controls", title: "Exchange controls", html: "<p>The ordinary pound remained fiat and nonconvertible outside approved channels. Treasury and Bank authorities licensed hard-currency purchases, capital transfers, securities transactions, and releases from blocked accounts.</p>" },
      { id: "reserves", title: "Reserve pooling and clearing", html: "<p>Members held part of their reserves in sterling and used London banks and accounts for trade clearing. The arrangement reduced the need for each government to maintain a full independent stock of scarce gold and dollars.</p>" },
      { id: "development", title: "Development accounts", html: "<p>Large wartime and overseas claims could become scheduled balances or development claims redeemable in approved machinery, ships, telecommunications, power equipment, engineering, and investment. Production substituted for immediate bullion payment.</p>" },
      { id: "governance", title: "Governance", html: "<p>HM Treasury set political priorities, the <a href='bank-of-england.html'>Bank of England</a> managed monetary operations and banking relationships, and Commonwealth governments negotiated bilateral terms. The system rested on overlapping agreements rather than a single federal authority.</p>" },
      { id: "transition", title: "Transition toward hard sterling", html: "<p>Gold Sterling Accounts from 1960 created a limited external hard-money layer above the controlled domestic pound. Thatcher's later resumption program widened convertibility without instantly abolishing preference, strategic ownership rules, or reserve cooperation.</p>" },
      { id: "politics", title: "Political dispute", html: "<p>Supporters credited the area with preserving employment, shipping, and development. Critics described delayed balances as disguised default and argued that protected access sheltered inefficient British producers.</p>" }
    ],
    related: [
      { href: "sterling-commonwealth-reconstruction.html", kicker: "Founding settlement", label: "Sterling and Commonwealth Reconstruction" },
      { href: "sterling-commonwealth-economy.html", kicker: "Wider system", label: "Sterling Commonwealth Economy" },
      { href: "bank-of-england.html", kicker: "Operating institution", label: "Bank of England" },
      { href: "gold-sterling.html", kicker: "Hard-money transition", label: "Sterling Resumption" },
      { href: "cape-route.html", kicker: "Physical counterpart", label: "Cape Route" }
    ],
    facts: [
      ["Established", "1948"],
      ["Core currency", "Pound sterling"],
      ["Initial external convertibility", "Restricted"],
      ["Members' budgets", "Separate"],
      ["Reserve system", "Pooled and negotiated sterling holdings"],
      ["Common currency union", "No"],
      ["Hard-account layer", "Gold Sterling Accounts from 1960"]
    ]
  }),

  "bank-of-england": sterlingInstitutionArticle({
    title: "Bank of England",
    eyebrow: "Central bank · public corporation · Sterling Commonwealth",
    infoboxKicker: "Central bank of the United Kingdom",
    lead: "The Bank of England is the central bank of the United Kingdom and the principal operating institution of the controlled sterling area. Founded in 1694 and long established as banker to the government and guardian of the note issue, it became a public corporation under the 1948 Sterling and Commonwealth Reconstruction settlement. Its post-defeat duties join domestic monetary stability to reserve control, Commonwealth clearing, public credit, and the later restoration of gold sterling.",
    canon: "The Bank's inherited central-banking role, 1948 public-corporation status, participation in debt consolidation, exchange control, reserve pooling, development accounts, and later gold-sterling management are established. Its exact 1948 charter language, governing appointments, degree of operational independence, committee names, and leadership sequence after Montagu Norman remain open.",
    portrait: {
      src: "assets/photos/bank-of-england-herbert-baker.jpg",
      alt: "The Bank of England on Threadneedle Street",
      caption: "The Bank of England's Herbert Baker building on Threadneedle Street (Bank of England archive)"
    },
    sections: [
      { id: "history", title: "Historical development", html: "<p>Established in 1694 to lend to the government, the Bank became the state's banker, a bank of issue, and the center of London's financial system. The nineteenth-century note monopoly and lender-of-last-resort practice made it a public institution in function while its capital remained privately held.</p>" },
      { id: "war", title: "War and defeat", html: "<p>Two world wars expanded cooperation with the Treasury, debt management, exchange administration, and supervision of the financial system. The 1947 defeat made reserve preservation and reconstruction credit matters of national security.</p>" },
      { id: "public", title: "Public corporation in 1948", html: "<p>The reconstruction settlement transferred the Bank into public ownership. Shareholders received government obligations, while the Treasury acquired formal authority over an institution already operating as the country's central bank.</p>" },
      { id: "settlement", title: "Monetary reconstruction", html: "<p>The Bank helped consolidate public debt, protect current payments and smaller claims, classify overseas balances, and maintain nonconvertibility. It did not erase losses; it administered their order and timing.</p>" },
      { id: "commonwealth", title: "Commonwealth operations", html: "<p>The Bank held relationships with Dominion, colonial, and associated monetary authorities, operated reserve and clearing accounts, and supported approved development redemptions. Political terms remained subject to government-to-government negotiation.</p>" },
      { id: "credit", title: "Credit and public industry", html: "<p>Public ownership made monetary control part of the security state. Treasury programs, public trusts, merchant-fleet reconstruction, housing, nuclear power, and strategic industry still required budgets and specialized lenders; the Bank supplied monetary discipline and system liquidity rather than directly managing every investment.</p>" },
      { id: "resumption", title: "Sterling resumption", html: "<p>From 1960 the Bank administered Gold Sterling Accounts alongside the controlled ordinary pound. The 1980s resumption required external parity, bullion reserves, redemption rules, and limits on monetary financing while retaining a managed Commonwealth commercial system.</p>" },
      { id: "constitutional", title: "Constitutional position", html: "<p>The Bank is publicly owned and answerable through the Treasury and Parliament. The precise balance between ministerial direction, professional judgment, and later operational autonomy remains an evolving constitutional question.</p>" }
    ],
    related: [
      { href: "controlled-sterling-area.html", kicker: "Primary monetary system", label: "Controlled Sterling Area" },
      { href: "sterling-commonwealth-reconstruction.html", kicker: "Public-ownership settlement", label: "Sterling and Commonwealth Reconstruction" },
      { href: "sterling-commonwealth-economy.html", kicker: "Economic setting", label: "Sterling Commonwealth Economy" },
      { href: "gold-sterling.html", kicker: "Later responsibility", label: "Sterling Resumption" },
      { href: "brick-parliament.html", kicker: "Founding legislature", label: "Brick Parliament" }
    ],
    facts: [
      ["Founded", "1694"],
      ["Headquarters", "Threadneedle Street, London"],
      ["Status from 1948", "Public corporation"],
      ["Owner", "United Kingdom government"],
      ["Primary currency", "Pound sterling"],
      ["Commonwealth role", "Reserves, clearing, and development accounts"],
      ["Degree of operational independence", "Open"]
    ]
  })
});

const addSterlingLinks = (id, links) => {
  const article = window.deepArticles[id];
  if (!article) return;
  const existing = article.related || [];
  article.related = [...existing, ...links.filter(link => !existing.some(item => item.href === link.href))];
};

addSterlingLinks("sterling-commonwealth-reconstruction", [
  { href: "controlled-sterling-area.html", kicker: "Monetary system", label: "Controlled Sterling Area" },
  { href: "bank-of-england.html", kicker: "Public central bank", label: "Bank of England" },
  { href: "sterling-commonwealth-economy.html", kicker: "Mature system", label: "Sterling Commonwealth Economy" }
]);

addSterlingLinks("gold-sterling", [
  { href: "controlled-sterling-area.html", kicker: "Pre-resumption system", label: "Controlled Sterling Area" },
  { href: "bank-of-england.html", kicker: "Monetary authority", label: "Bank of England" }
]);
