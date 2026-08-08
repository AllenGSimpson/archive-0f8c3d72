window.deepArticles = window.deepArticles || {};

const americanGoldInstitutionSources = [
  { href: "../settingBible%20-%20AltWWII.md", label: "Setting Bible — American political economy and postwar monetary order" },
  { href: "../settingTimeline%20-%20AltWWII.md", label: "Setting Timeline — American postwar chronology" },
  { href: "../transcript.md", label: "Master Transcript — Gold Emergency, Resumption Debate, and Gold Dollar Restoration" },
  { href: "https://www.federalreservehistory.org/essays/roosevelts-gold-program", label: "Federal Reserve History — Roosevelt's Gold Program" },
  { href: "https://www.federalreservehistory.org/essays/gold-reserve-act", label: "Federal Reserve History — Gold Reserve Act of 1934" },
  { href: "https://www.federalreserve.gov/aboutthefed/fedexplained/who-we-are.htm", label: "Board of Governors — Federal Reserve organization and functions" },
  { href: "https://home.treasury.gov/about/history/history-overview", label: "U.S. Treasury — history and functions of the Department" },
  { href: "https://www.usmint.gov/news/inside-the-mint/fort-knox-history", label: "United States Mint — history of the Fort Knox Bullion Depository" }
];

const americanGoldInstitutionArticle = article => ({
  ...article,
  category: article.category || "United States monetary history",
  sources: americanGoldInstitutionSources,
  categories: article.categories || ["United States", "Monetary policy", "Gold standard"]
});

const americanGoldSystemPortrait = {
  src: "assets/diagrams/american-gold-dollar-institutions.svg",
  alt: "Diagram showing the institutional operation of the restored American gold dollar",
  caption: "Institutional division of the restored dollar: Treasury gold custody, Federal Reserve monetary operations, and licensed redemption"
};

Object.assign(window.deepArticles, {
  "gold-emergency-united-states": americanGoldInstitutionArticle({
    title: "Gold Emergency in the United States",
    eyebrow: "Banking emergency · gold administration · 1933–1947",
    infoboxKicker: "American monetary emergency",
    portrait: americanGoldSystemPortrait,
    lead: "The Gold Emergency was the American monetary regime created during the banking crisis of 1933 and retained until the opening of the postwar Resumption Debate in 1947. Private domestic conversion of dollars into gold was suspended, monetary gold was concentrated in the United States Treasury, and the Federal Reserve operated a managed paper-dollar economy at an official post-1934 valuation of $35 per fine troy ounce.",
    canon: "The 1933–1947 period, suspension of ordinary private convertibility, Treasury custody of monetary gold, $35 official valuation, managed paper-dollar economy, and transition into the Resumption Debate are established. The exact legal name Gold Emergency, wartime amendments, enforcement statistics, exemption schedule, and the date on which the emergency was formally declared ended remain open.",
    sections: [
      { id: "banking", title: "Banking crisis of 1933", html: "<p>Bank failures and withdrawals produced simultaneous runs upon deposits and the monetary gold stock. Franklin D. Roosevelt declared a banking holiday in March 1933. The Emergency Banking Act gave the executive and Treasury powers over domestic and international movements of gold.</p><p>Roosevelt's April proclamation suspended conversion and restricted gold exports. Industrial, artistic, and other licensed uses continued under administrative control.</p>" },
      { id: "reserve", title: "Gold Reserve Act of 1934", html: "<p>The Gold Reserve Act transferred ownership of monetary gold to the United States Treasury and prohibited redemption by Treasury and financial institutions. Holders received currency at the revised statutory valuation.</p><p>The official price became <strong>$35 per fine troy ounce</strong>, replacing the earlier $20.67 parity. The price valued reserves and official transactions; it did not give an ordinary noteholder a right to demand bullion.</p>" },
      { id: "custody", title: "Treasury custody", html: "<p>The <a href='united-states-department-treasury.html'>Department of the Treasury</a> owned and accounted for the monetary gold. The United States Mint stored much of it at the Bullion Depository at Fort Knox, completed in 1936 and receiving its first shipments in 1937, with additional holdings at other federal depositories.</p><p>Gold certificates and accounting claims allowed the monetary system to recognize the reserve while restricting physical movement.</p>" },
      { id: "federal", title: "Federal Reserve operations", html: "<p>The <a href='federal-reserve-system.html'>Federal Reserve System</a> continued issuing notes, supplying reserves to banks, operating the payments system, lending through the discount mechanism, and influencing credit conditions. It no longer owned the nation's monetary gold stock.</p><p>The distinction separated reserve ownership from ordinary monetary management. Treasury protected the asset; the Federal Reserve managed the paper-dollar and bank-credit system built above it.</p>" },
      { id: "private", title: "Private gold", html: "<p>Gold ownership and use were regulated rather than universally erased. Coins, certificates, bullion, and industrial gold were subject to surrender rules, licenses, exemptions, and administrative definitions. Jewelry and legitimate industrial uses remained outside the principal monetary prohibition.</p>" },
      { id: "war", title: "Continuation during the general war", html: "<p>American nonbelligerency avoided the fiscal mobilization imposed upon the combatant powers, but it did not automatically reopen private redemption. The emergency regime remained the legal and operational basis of the dollar through the end of the general war.</p><p>Treasury reserves and American productive capacity strengthened the dollar abroad while domestic holders still used managed paper money and bank deposits.</p>" },
      { id: "politics", title: "Postwar politics", html: "<p>By 1947 supporters of resumption argued that the original banking emergency had ended and that continued restrictions preserved extraordinary New Deal authority. Opponents cited employment, credit, agricultural prices, and the risk of a renewed gold drain.</p><p>The Byrnes administration opened technical preparations and political consultation. The resulting <a href='american-resumption-debate.html'>Resumption Debate</a> replaced the emergency consensus.</p>" }
    ],
    related: [
      { href: "american-resumption-debate.html", kicker: "Successor controversy", label: "American Resumption Debate" },
      { href: "american-gold-dollar.html", kicker: "Final settlement", label: "Gold Dollar Restoration" },
      { href: "united-states-department-treasury.html", kicker: "Gold custodian", label: "U.S. Department of the Treasury" },
      { href: "federal-reserve-system.html", kicker: "Monetary operator", label: "Federal Reserve System" },
      { href: "james-f-byrnes.html", kicker: "Closing administration", label: "James F. Byrnes" }
    ],
    facts: [
      ["Period", "1933–1947"],
      ["Origin", "Banking and gold crisis of 1933"],
      ["Principal statute", "Gold Reserve Act of 1934"],
      ["Official valuation", "$35 per fine troy ounce"],
      ["Monetary-gold owner", "United States Treasury"],
      ["Private note redemption", "Suspended"],
      ["Successor phase", "Resumption Debate, 1947–1949"]
    ]
  }),

  "american-resumption-debate": americanGoldInstitutionArticle({
    title: "American Resumption Debate",
    eyebrow: "Monetary controversy · Byrnes and Dewey · 1947–1949",
    infoboxKicker: "American monetary-policy debate",
    portrait: americanGoldSystemPortrait,
    lead: "The American Resumption Debate was the 1947–1949 dispute over whether and how to end the Depression-era suspension of private gold convertibility. The Byrnes administration began technical preparation but left the Gold Emergency in force. Thomas E. Dewey made staged resumption part of his 1948 program and enacted the settlement after taking office.",
    canon: "The 1947–1949 dates, Byrnes preparation, three principal policy positions, Dewey's electoral commitment, disputes over deflation and credit, and transition to the 1949 Restoration Act are established. Named commissions, congressional sponsors, exact party votes, Treasury memoranda, banking-association resolutions, and the full 1948 campaign language remain open.",
    sections: [
      { id: "background", title: "Background", html: "<p>The <a href='gold-emergency-united-states.html'>Gold Emergency</a> had outlived the banking panic that created it. The Treasury possessed substantial gold, American goods were in foreign demand, and the country had not financed a worldwide postwar reconstruction system. Private domestic redemption nevertheless remained prohibited.</p>" },
      { id: "byrnes", title: "Byrnes administration", html: "<p>President <a href='james-f-byrnes.html'>James F. Byrnes</a> authorized preparation for monetary resumption during 1947 and 1948. Treasury and Federal Reserve officials examined reserve adequacy, banking access, gold certificates, commercial settlement, and the effect of a fixed parity upon prices and credit.</p><p>The administration did not complete restoration before the 1948 election. Emergency rules therefore remained the legal baseline at the end of Byrnes's term.</p>" },
      { id: "positions", title: "Principal positions", html: "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Position</th><th>Proposed access</th><th>Principal concern</th></tr></thead><tbody><tr><td>Full restoration</td><td>Broad private redemption and legal gold circulation</td><td>End emergency authority and restore a contractual dollar</td></tr><tr><td>Controlled gold exchange</td><td>Banks, foreign monetary authorities, and large commercial claims</td><td>Gain external confidence while limiting retail drains</td></tr><tr><td>Managed paper dollar</td><td>No general redemption</td><td>Preserve monetary flexibility, employment, and recovery credit</td></tr></tbody></table></div>" },
      { id: "parity", title: "The parity question", html: "<p>A return to the pre-1933 price of $20.67 would have sharply increased the gold value of every dollar and imposed severe pressure upon wages, prices, debts, and employment. The practical proposal retained the post-1934 valuation near $35 per fine troy ounce.</p><p>Debate concerned the credibility of that promise, the reserve required to defend it, and whether disinflation could establish confidence without a general depression.</p>" },
      { id: "institutions", title: "Treasury and Federal Reserve", html: "<p>The Treasury would continue to own the gold and authorize redemption. The Federal Reserve would manage bank reserves, notes, payments, and credit under the constraint created by the Treasury's gold promise.</p><p>Bankers disputed licensing rules and the treatment of large claims. Agricultural and labor organizations focused on interest rates, falling prices, and the distribution of adjustment costs.</p>" },
      { id: "election", title: "Election of 1948", html: "<p>Dewey presented staged resumption as part of monetary normality after the New Deal emergency. The issue accompanied a wider Republican program of administrative retrenchment, enterprise, modernization, and limited federal coordination.</p><p>The election supplied a mandate to proceed, but did not settle the access schedule or the degree of Federal Reserve independence required to defend parity.</p>" },
      { id: "settlement", title: "Settlement", html: "<p>The working-title <a href='american-gold-dollar.html'>Gold Dollar Restoration Act of 1949</a> adopted a phased program. Licensed institutional settlement opened first, followed by large commercial redemption, regulated domestic bullion and certificate access, and eventual legal ownership and circulation of gold coin.</p>" }
    ],
    related: [
      { href: "gold-emergency-united-states.html", kicker: "Preceding regime", label: "Gold Emergency in the United States" },
      { href: "american-gold-dollar.html", kicker: "Legislative outcome", label: "Gold Dollar Restoration" },
      { href: "james-f-byrnes.html", kicker: "Preparatory president", label: "James F. Byrnes" },
      { href: "thomas-e-dewey.html", kicker: "Restoration president", label: "Thomas E. Dewey" },
      { href: "federal-reserve-system.html", kicker: "Monetary authority", label: "Federal Reserve System" }
    ],
    facts: [
      ["Period", "1947–1949"],
      ["Preceded by", "Gold Emergency"],
      ["Opening administration", "James F. Byrnes"],
      ["Electoral advocate", "Thomas E. Dewey"],
      ["Principal options", "Full restoration; controlled exchange; managed paper dollar"],
      ["Working parity", "$35 per fine troy ounce"],
      ["Outcome", "Gold Dollar Restoration Act of 1949"]
    ]
  }),

  "federal-reserve-system": americanGoldInstitutionArticle({
    title: "Federal Reserve System",
    eyebrow: "Central banking · monetary policy · United States",
    infoboxKicker: "Central bank of the United States",
    portrait: americanGoldSystemPortrait,
    lead: "The Federal Reserve System is the central-banking system of the United States. Created by the Federal Reserve Act of 1913, it combines a Board of Governors in Washington, twelve regional Reserve Banks, and the Federal Open Market Committee. In the postwar gold-dollar system the Federal Reserve manages notes, bank reserves, credit, and payments, while monetary gold remains the property of the United States Treasury.",
    canon: "The inherited 1913 structure, Board and twelve Reserve Banks, FOMC monetary role, operation of the managed paper dollar during the Gold Emergency, Treasury ownership of monetary gold, duties during staged resumption, later policy tension under gold convertibility, and independent price-stability role in the Reagan-era opposition are established. Chair succession after Marriner Eccles, statutory mandates after the divergence, exact Treasury–Federal Reserve accords, district changes, and policy-rate chronology remain open.",
    sections: [
      { id: "foundation", title: "Foundation", html: "<p>Congress created the System in 1913 after repeated banking panics exposed the weakness of a financial order lacking an elastic reserve institution. The original framework joined a federal board in Washington to geographically distributed Reserve Banks.</p><p>The Reserve Banks supplied currency, discounted eligible paper, cleared payments, and served member banks. Later amendments strengthened federal direction and created the modern Federal Open Market Committee.</p>" },
      { id: "organization", title: "Organization", html: "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Component</th><th>Principal function</th></tr></thead><tbody><tr><td>Board of Governors</td><td>Federal supervision, regulation, and general direction</td></tr><tr><td>Federal Open Market Committee</td><td>National open-market and monetary policy</td></tr><tr><td>Twelve Federal Reserve Banks</td><td>Regional banking services, reserves, payments, discount lending, and economic reporting</td></tr><tr><td>Member banks</td><td>Hold required relationships with the System and use Reserve Bank services</td></tr></tbody></table></div>" },
      { id: "depression", title: "Depression and reorganization", html: "<p>The banking collapse of 1933 led to a national bank holiday and the suspension of gold conversion. The 1934 Gold Reserve Act transferred the System's monetary gold to the Treasury. Banking legislation concentrated greater authority in the Board and formalized national open-market policy.</p>" },
      { id: "emergency", title: "The Gold Emergency", html: "<p>From 1933 through 1947 the Federal Reserve operated a managed paper-dollar economy. It issued Federal Reserve notes, supplied reserves and emergency liquidity, influenced credit, and processed payments. The official $35 gold valuation remained on Treasury accounts while ordinary holders lacked a redemption right.</p>" },
      { id: "resumption", title: "Resumption and convertibility", html: "<p>During the 1947–1949 debate the System supplied analysis of reserve adequacy, bank access, credit contraction, and settlement operations. After the 1949 Act it processed the banking side of staged redemption under Treasury rules.</p><p>Gold convertibility constrained the volume and external use of dollars. The Federal Reserve retained monetary instruments, but persistent foreign redemption could require tighter credit or an administration decision to alter parity, impose controls, or suspend.</p>" },
      { id: "policy", title: "Postwar monetary policy", html: "<p>The postwar Federal Reserve supervises banks, operates national payment and reserve systems, lends through the Reserve Banks, and conducts open-market policy. It also provides services to the federal government, depository institutions, and approved foreign official holders.</p><p>Gold does not set every interest rate mechanically. Policy remains a judgment about credit, employment, prices, reserves, and the external balance.</p>" },
      { id: "relations", title: "Relations with the Treasury", html: "<p>The <a href='united-states-department-treasury.html'>Treasury</a> owns the monetary gold, sets statutory redemption administration, manages federal finance, and maintains the Exchange Stabilization Fund. The Federal Reserve manages the currency, reserves, credit, bank supervision, and payments system.</p><p>Presidents and Treasury officials can press for easier financing or tighter defense of parity. The legal and customary degree of operational independence changes across administrations and remains politically contested.</p>" },
      { id: "later", title: "Later development", html: "<p>National Renewal industrial credit and the 1982 productivity correction place the System between employment demands and price stability. Democratic–Republican reformers later defend an independent Federal Reserve and oppose using cheap central-bank credit to conceal failing national projects.</p><p>The historical 1971 closing of the foreign gold window does not occur. Reserve adequacy and external claims remain recurring subjects of congressional and market scrutiny.</p>" }
    ],
    related: [
      { href: "united-states-department-treasury.html", kicker: "Fiscal and gold counterpart", label: "U.S. Department of the Treasury" },
      { href: "gold-emergency-united-states.html", kicker: "1933–1947 regime", label: "Gold Emergency" },
      { href: "american-resumption-debate.html", kicker: "Postwar controversy", label: "American Resumption Debate" },
      { href: "american-gold-dollar.html", kicker: "Monetary framework", label: "Gold Dollar Restoration" },
      { href: "american-productive-commonwealth-act.html", kicker: "1982 policy setting", label: "American Productive Commonwealth Act" }
    ],
    facts: [
      ["Established", "23 December 1913"],
      ["Jurisdiction", "United States"],
      ["Central governing body", "Board of Governors"],
      ["Regional banks", "12"],
      ["Monetary-policy body", "Federal Open Market Committee"],
      ["Monetary-gold ownership after 1934", "United States Treasury"],
      ["Gold-dollar role", "Currency, reserves, credit, payments, and bank settlement"]
    ]
  }),

  "united-states-department-treasury": americanGoldInstitutionArticle({
    title: "United States Department of the Treasury",
    eyebrow: "Executive department · public finance · monetary gold",
    infoboxKicker: "Executive department of the United States",
    portrait: americanGoldSystemPortrait,
    lead: "The United States Department of the Treasury is the federal executive department responsible for public finance, government accounts, currency production, debt administration, revenue, and international monetary policy. Established in 1789 under its first secretary, Alexander Hamilton, it owns the American monetary gold stock and administers the legal promise behind the restored gold dollar.",
    canon: "The Department's inherited historical foundation and core fiscal functions, ownership of monetary gold after 1934, Fort Knox custody through the Mint, Gold Emergency administration, leading role in the 1947–1951 restoration, licensing and redemption authority, and later international monetary role are established. The complete post-divergence bureau structure, secretary succession, staffing, enforcement statistics, bullion-accounting rules, and internal committee names remain open.",
    sections: [
      { id: "foundation", title: "Foundation", html: "<p>Congress established the Department on 2 September 1789 to manage the finances of the new federal government. Alexander Hamilton took office as the first secretary on 11 September. Revenue collection, public credit, government accounts, debt, coinage, and economic policy developed around the Department.</p>" },
      { id: "organization", title: "Organization and functions", html: "<p>The Secretary of the Treasury heads the Department and advises the president on fiscal and monetary policy. Treasury offices prepare finance policy, administer the public debt and government accounts, supervise revenue collection, and conduct international financial relations.</p><p>The United States Mint produces coin and safeguards bullion. The Bureau of Engraving and Printing produces paper currency. The Internal Revenue Service and the customs and comptroller functions provide revenue and financial supervision according to the organization retained after the divergence.</p>" },
      { id: "gold", title: "Monetary gold", html: "<p>The Gold Reserve Act of 1934 transferred ownership of American monetary gold to the Treasury. Federal Reserve Banks and other holders received dollar claims at the revised official valuation. Treasury accounts thereafter separated ownership of the reserve from the Federal Reserve's operation of notes and bank reserves.</p>" },
      { id: "fort", title: "Federal bullion depositories", html: "<p>The United States Bullion Depository at Fort Knox was built in 1935–1936 and received its first gold shipments in January 1937. It is a United States Mint facility under Treasury jurisdiction. Additional monetary gold is held at other Mint and official locations.</p><p>Fort Knox contains actual Treasury bullion in this setting. Reserve reporting, assays, security, and authorized movement remain administrative responsibilities rather than public redemption at the vault door.</p>" },
      { id: "emergency", title: "Gold Emergency administration", html: "<p>Treasury administered surrender, licensing, official valuation, gold certificates, industrial-use permissions, exports, and official transactions during the 1933–1947 emergency. The Department protected the reserve while the Federal Reserve operated the managed paper-dollar economy.</p>" },
      { id: "restoration", title: "Gold Dollar Restoration", html: "<p>The Byrnes administration directed Treasury officials to prepare resumption. Under Dewey, the Department implemented the working-title Gold Dollar Restoration Act of 1949.</p><ol><li>Licensed banks and foreign monetary authorities gained settlement access.</li><li>Large commercial claims became eligible for redemption.</li><li>Regulated domestic banks offered bullion and gold certificates.</li><li>Private ownership and coin circulation were legalized in the final phase.</li></ol>" },
      { id: "exchange", title: "Exchange Stabilization Fund", html: "<p>The Exchange Stabilization Fund, created under the 1934 Act, gives the Treasury a vehicle for exchange-market and official gold operations. Its use after resumption is subject to the statutory parity, congressional finance law, presidential policy, and the Department's relationship with the Federal Reserve.</p>" },
      { id: "international", title: "International monetary role", html: "<p>The Department licenses and records official redemption, negotiates with foreign monetary authorities, and represents the United States in bullion-clearing arrangements. The absence of a Bretton Woods dollar system keeps these relationships bilateral, statutory, and market-based.</p><p>From the late 1980s Treasury also participates in American ownership mapping and cross-bloc financial policy as international capital enters the Open Door market.</p>" }
    ],
    related: [
      { href: "federal-reserve-system.html", kicker: "Central-bank counterpart", label: "Federal Reserve System" },
      { href: "gold-emergency-united-states.html", kicker: "Reserve administration", label: "Gold Emergency" },
      { href: "american-resumption-debate.html", kicker: "Policy preparation", label: "American Resumption Debate" },
      { href: "american-gold-dollar.html", kicker: "Restored monetary system", label: "Gold Dollar Restoration" },
      { href: "american-ownership-mapping-project.html", kicker: "Later interagency work", label: "American Ownership-Mapping Project" }
    ],
    facts: [
      ["Established", "2 September 1789"],
      ["First secretary", "Alexander Hamilton"],
      ["Head", "Secretary of the Treasury"],
      ["Headquarters", "Treasury Building, Washington, D.C."],
      ["Monetary-gold owner", "United States government through the Treasury"],
      ["Principal bullion custodian", "United States Mint"],
      ["Gold-dollar role", "Parity administration, licensing, custody, and redemption"]
    ]
  })
});

const addAmericanGoldLinks = (id, links) => {
  const article = window.deepArticles[id];
  if (!article) return;
  const existing = article.related || [];
  article.related = [...existing, ...links.filter(link => !existing.some(item => item.href === link.href))];
};

addAmericanGoldLinks("american-gold-dollar", [
  { href: "gold-emergency-united-states.html", kicker: "Preceding regime", label: "Gold Emergency in the United States" },
  { href: "american-resumption-debate.html", kicker: "Political preparation", label: "American Resumption Debate" },
  { href: "federal-reserve-system.html", kicker: "Monetary authority", label: "Federal Reserve System" },
  { href: "united-states-department-treasury.html", kicker: "Gold and redemption authority", label: "U.S. Department of the Treasury" }
]);

addAmericanGoldLinks("james-f-byrnes", [
  { href: "gold-emergency-united-states.html", kicker: "Inherited monetary regime", label: "Gold Emergency" },
  { href: "american-resumption-debate.html", kicker: "Administration initiative", label: "American Resumption Debate" }
]);

addAmericanGoldLinks("thomas-e-dewey", [
  { href: "american-resumption-debate.html", kicker: "1948 campaign issue", label: "American Resumption Debate" },
  { href: "american-gold-dollar.html", kicker: "Monetary settlement", label: "Gold Dollar Restoration" }
]);

if (window.deepArticles["american-gold-dollar"] && !window.deepArticles["american-gold-dollar"].portrait) {
  window.deepArticles["american-gold-dollar"].portrait = americanGoldSystemPortrait;
}
