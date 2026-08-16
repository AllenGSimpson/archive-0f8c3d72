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

const americanGoldPredivergence = "<sup class='canon-note' data-provenance='p'>[p]</sup>";
const americanGoldCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const americanGoldExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

Object.assign(window.deepArticles, {
  "gold-emergency-united-states": americanGoldInstitutionArticle({
    title: "Gold Emergency in the United States",
    eyebrow: "Banking emergency · gold administration · 1933–1947",
    infoboxKicker: "American monetary emergency",
    portrait: americanGoldSystemPortrait,
    lead: `<!-- altwwii-writer-block:start id=wb-g-20260816-ge1a2 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The United States suspended transfers between dollars and gold in 1933, following the historical banking crisis.${americanGoldPredivergence}${americanGoldCanon} The wiki's working chronology calls the ensuing regime the Gold Emergency and carries it to the postwar restoration debate.${americanGoldExtrapolation}<!-- altwwii-writer-block:end -->`,
    canon: `<!-- altwwii-writer-block:start id=wb-g-20260816-ge1b3 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The 1933 suspension, the Gold Reserve Act's transfer of monetary gold to the Treasury, the post-1934 $35 statutory valuation, and the inherited division between Treasury custody and Federal Reserve operations are pre-divergence facts.${americanGoldPredivergence} The author directly preserves the 1933 suspension in the setting, confirms real gold at Fort Knox, and establishes a postwar return to a gold-backed dollar without a later Nixon-era termination.${americanGoldCanon} Gold Emergency as a period name, its 1947 endpoint, the transition sequence, and detailed wartime administration are incorporated working chronology.${americanGoldExtrapolation} Enforcement statistics, exemption schedules, wartime amendments, and the formal termination instrument remain open.<!-- altwwii-writer-block:end -->`,
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
      ["Working period", `1933–1947${americanGoldExtrapolation}`],
      ["Origin", "Banking and gold crisis of 1933"],
      ["Principal statute", "Gold Reserve Act of 1934"],
      ["Inherited official valuation", `$35 per fine troy ounce${americanGoldPredivergence}`],
      ["Monetary-gold owner", "United States Treasury"],
      ["Private note redemption", "Suspended"],
      ["Working successor phase", `Resumption Debate, 1947–1949${americanGoldExtrapolation}`]
    ]
  }),

  "american-resumption-debate": americanGoldInstitutionArticle({
    title: "American Resumption Debate",
    eyebrow: "Monetary controversy · Byrnes and Dewey · 1947–1949",
    infoboxKicker: "American monetary-policy debate",
    portrait: americanGoldSystemPortrait,
    lead: `<!-- altwwii-writer-block:start id=wb-g-20260816-rd2a3 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The author establishes a controversial postwar return from the 1933 suspension to a gold-backed dollar, probably around 1947 or 1948.${americanGoldCanon} The wiki develops that direction as a 1947–1949 Resumption Debate spanning the Byrnes and Dewey administrations.${americanGoldExtrapolation}<!-- altwwii-writer-block:end -->`,
    canon: `<!-- altwwii-writer-block:start id=wb-g-20260816-rd2b4 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->A post-FDR president's restoration of the gold-backed dollar, its postwar timing, controversial deflationary policy, and resulting confidence in the currency are direct canon.${americanGoldCanon} The 1947–1949 dates, Byrnes preparation, three policy positions, Dewey's electoral commitment, $35 working parity, and transition to a 1949 act are incorporated mechanisms proposed in the transcript rather than direct authorial declarations.${americanGoldExtrapolation} Commission names, sponsors, votes, memoranda, resolutions, campaign language, and final statutory form remain open.<!-- altwwii-writer-block:end -->`,
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
      ["Working period", `1947–1949${americanGoldExtrapolation}`],
      ["Preceded by", "Gold Emergency"],
      ["Working opening administration", `James F. Byrnes${americanGoldExtrapolation}`],
      ["Working electoral advocate", `Thomas E. Dewey${americanGoldExtrapolation}`],
      ["Working principal options", `Full restoration; controlled exchange; managed paper dollar${americanGoldExtrapolation}`],
      ["Working parity", `$35 per fine troy ounce${americanGoldExtrapolation}`],
      ["Working outcome", `Gold Dollar Restoration Act of 1949${americanGoldExtrapolation}`]
    ]
  }),

  "federal-reserve-system": americanGoldInstitutionArticle({
    title: "Federal Reserve System",
    eyebrow: "Central banking · monetary policy · United States",
    infoboxKicker: "Central bank of the United States",
    portrait: americanGoldSystemPortrait,
    lead: `<!-- altwwii-writer-block:start id=wb-g-20260816-fr3a4 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The Federal Reserve System is the central-banking system of the United States. Its Board, twelve regional Reserve Banks, and Federal Open Market Committee are inherited institutions.${americanGoldPredivergence} In the setting they continue to operate beneath the constraint of a postwar gold-backed dollar that is never terminated in the Nixon era.${americanGoldCanon}<!-- altwwii-writer-block:end -->`,
    canon: `<!-- altwwii-writer-block:start id=wb-g-20260816-fr3b5 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The 1913 foundation, Board, twelve Reserve Banks, FOMC, 1934 Treasury ownership of monetary gold, and ordinary central-bank functions are inherited history.${americanGoldPredivergence} Continued American gold backing and the absence of the historical 1971 closure are direct canon.${americanGoldCanon} The named Gold Emergency, staged-resumption duties, detailed Treasury–Federal Reserve division after restoration, later policy tensions, and independent price-stability role in Democratic–Republican opposition are incorporated institutional development.${americanGoldExtrapolation} Chair succession, post-divergence mandates, accords, district changes, and policy-rate chronology remain open.<!-- altwwii-writer-block:end -->`,
    sections: [
      { id: "foundation", title: "Foundation", html: "<p>Congress created the System in 1913 after repeated banking panics exposed the weakness of a financial order lacking an elastic reserve institution. The original framework joined a federal board in Washington to geographically distributed Reserve Banks.</p><p>The Reserve Banks supplied currency, discounted eligible paper, cleared payments, and served member banks. Later amendments strengthened federal direction and created the modern Federal Open Market Committee.</p>" },
      { id: "organization", title: "Organization", html: "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Component</th><th>Principal function</th></tr></thead><tbody><tr><td>Board of Governors</td><td>Federal supervision, regulation, and general direction</td></tr><tr><td>Federal Open Market Committee</td><td>National open-market and monetary policy</td></tr><tr><td>Twelve Federal Reserve Banks</td><td>Regional banking services, reserves, payments, discount lending, and economic reporting</td></tr><tr><td>Member banks</td><td>Hold required relationships with the System and use Reserve Bank services</td></tr></tbody></table></div>" },
      { id: "depression", title: "Depression and reorganization", html: "<p>The banking collapse of 1933 led to a national bank holiday and the suspension of gold conversion. The 1934 Gold Reserve Act transferred the System's monetary gold to the Treasury. Banking legislation concentrated greater authority in the Board and formalized national open-market policy.</p>" },
      { id: "emergency", title: "The Gold Emergency", html: "<p>From 1933 through 1947 the Federal Reserve operated a managed paper-dollar economy. It issued Federal Reserve notes, supplied reserves and emergency liquidity, influenced credit, and processed payments. The official $35 gold valuation remained on Treasury accounts while ordinary holders lacked a redemption right.</p>" },
      { id: "resumption", title: "Resumption and convertibility", html: "<p>During the 1947–1949 debate the System supplied analysis of reserve adequacy, bank access, credit contraction, and settlement operations. After the 1949 Act it processed the banking side of staged redemption under Treasury rules.</p><p>Gold convertibility constrained the volume and external use of dollars. The Federal Reserve retained monetary instruments, but persistent foreign redemption could require tighter credit or an administration decision to alter parity, impose controls, or suspend.</p>" },
      { id: "policy", title: "Postwar monetary policy", html: "<p>The postwar Federal Reserve supervises banks, operates national payment and reserve systems, lends through the Reserve Banks, and conducts open-market policy. It also provides services to the federal government, depository institutions, and approved foreign official holders.</p><p>Gold does not set every interest rate mechanically. Policy remains a judgment about credit, employment, prices, reserves, and the external balance.</p>" },
      { id: "parity-losses", title: "Parity defense and credit losses", html: "<!-- altwwii-writer-block:start id=wb-r-20260816-f6p3w writer=r kind=analysis created=2026-08-16T13:14:00-06:00 --><p>Gold convertibility supplied an external accounting test rather than an automatic policy. Federal Reserve notes and bank deposits could expand while productive output, domestic gold production, bullion inflow, bank capital, and public confidence supported them. A sustained redemption drain indicated that dollar claims were growing faster than willing holders accepted at the statutory parity. It did not identify which loan, federal program, bank, or price had caused the imbalance.</p><p>The System still chose how adjustment occurred. Open-market sales, a higher discount rate, tighter reserve conditions, refusal of weak collateral, or limits on emergency lending could protect the reserve while raising the price of credit. Easier lending could arrest a payments panic and prevent forced liquidation of sound assets, but it postponed adjustment if the borrower could not repay except through renewed central-bank or government support.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Response</th><th>Immediate objective</th><th>Principal incidence</th></tr></thead><tbody><tr><td>Tighter market and discount policy</td><td>Reduce credit expansion and gold outflow</td><td>New borrowers, leveraged firms, mortgage holders, banks, and workers exposed to contraction</td></tr><tr><td>Emergency liquidity against sound assets</td><td>Keep payments clearing during a temporary run</td><td>Reserve risk remains public until the loan is repaid; shareholders retain the first solvency loss</td></tr><tr><td>Automatic refinancing of a favored project</td><td>Preserve output, employment, or a national mission</td><td>Dollar holders and competing borrowers finance an unpriced extension of the project's budget</td></tr><tr><td>Treasury gold sale or official redemption</td><td>Honor the statutory claim</td><td>Public reserves fall; later fiscal or monetary choices bear the replenishment cost</td></tr><tr><td>Exchange restriction or suspension</td><td>Stop reserve loss without immediate contraction</td><td>The holder of the blocked or altered claim loses convertibility, timing, or purchasing power</td></tr></tbody></table></div><p>Liquidity and solvency therefore required separate files. A Reserve Bank could lend against a marketable asset whose sale during panic would destroy value. A company whose machinery, inventories, or mission contract could not earn enough to service its debt presented a capital loss. The 1982 productivity correction made this distinction politically important: tighter money and refusal of automatic refinancing exposed weak investments, while stronger firms could acquire usable equipment and personnel. The correction did not prove that every failed investment had been mistaken when undertaken, nor that every surviving firm had operated without subsidy.</p><p>Gold discipline also had distributional limits. Falling prices increased the real burden of fixed nominal debt and could force sound but illiquid owners to sell assets to holders of cash. Defending parity could preserve the saver and foreign creditor's claim while shifting adjustment toward borrowers and employment; inflation or suspension shifted more of it toward money holders. Monetary discipline was credible when those consequences were visible, bank capital absorbed recognized losses, emergency support was priced and temporary, and Congress or the executive could not place a favored investment permanently on the Federal Reserve balance sheet.</p><!-- altwwii-writer-block:end -->" },
      { id: "capability-liquidity", title: "Liquidity and capability", html: "<!-- altwwii-writer-block:start id=wb-k-20260816-v3n7h writer=k kind=analysis created=2026-08-16T13:16:24-06:00 --><p>Elastic central-bank liquidity had a productive function before any judgment about a favored borrower. A payments interruption could prevent several solvent banks from clearing, force suppliers to liquidate inventories, stop payrolls, and break production chains whose participants could meet their obligations under ordinary settlement conditions. Lending against sound collateral bought time for payments and asset markets to resume. Under gold convertibility the duration, collateral, price, and repayment of that liquidity still had to fit the aggregate reserve position.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Account</th><th>Responsible institution</th><th>Decision test</th><th>Loss bearer</th></tr></thead><tbody><tr><td>System liquidity</td><td>Federal Reserve and Reserve Banks</td><td>Will temporary lending keep payments clearing against credible collateral and a dated exit?</td><td>Borrower and collateral first; public reserve exposure until repayment</td></tr><tr><td>Commercial solvency</td><td>Bank, investor, owner, or bankruptcy court</td><td>Can the enterprise service claims from expected receipts after realistic write-downs?</td><td>Equity, subordinated creditors, and failed management before public support</td></tr><tr><td>Strategic or social return</td><td>Congress, Treasury, procurement authority, or industrial-credit institution</td><td>Which bottleneck, dependency, network, or public service justifies a return outside the borrower account?</td><td>Named appropriation, guarantee, capacity contract, or public investment</td></tr></tbody></table></div><p>The third account was necessary because a machine-tool line, semiconductor process, technical institute, reserve supplier, or communications network could enable activity that its operator could not fully charge to downstream users. That wider return did not make the borrower solvent by assertion. It required named users, replacement time, physical milestones, completion finance, trained operators, maintenance, measurable output, and comparison with purchase from another firm or abroad. Where those tests justified support, an industrial-credit institution could take the long maturity or capital risk while the Federal Reserve supplied only the surrounding monetary liquidity.</p><p>This separation also improved parity defense. Immediate contraction during a panic could destroy usable capacity and shrink the future production supporting the dollar. Permanent central-bank refinancing could conceal capital losses and weaken the same parity. Temporary liquidity, explicit strategic finance, and scheduled project review allowed adjustment to fall upon owners and failed managers while preserving a capability whose value had been demonstrated outside the narrow loan file. Households and competing borrowers still bore the interest-rate, tax, and opportunity costs of that choice, which remained visible in the fiscal and capacity accounts.</p><!-- altwwii-writer-block:end -->" },
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
      ["Working gold-dollar role", `Currency, reserves, credit, payments, and bank settlement${americanGoldExtrapolation}`]
    ]
  }),

  "united-states-department-treasury": americanGoldInstitutionArticle({
    title: "United States Department of the Treasury",
    eyebrow: "Executive department · public finance · monetary gold",
    infoboxKicker: "Executive department of the United States",
    portrait: americanGoldSystemPortrait,
    lead: `<!-- altwwii-writer-block:start id=wb-g-20260816-tr4a5 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The United States Department of the Treasury is the federal executive department responsible for public finance, government accounts, currency production, debt administration, revenue, and international monetary policy.${americanGoldPredivergence} It retains the monetary-gold stock created by the 1934 settlement and, in the wiki's working implementation, administers the restored gold dollar.${americanGoldPredivergence}${americanGoldExtrapolation}<!-- altwwii-writer-block:end -->`,
    canon: `<!-- altwwii-writer-block:start id=wb-g-20260816-tr4b6 writer=g kind=revision created=2026-08-16T13:08:00-06:00 -->The Department's foundation, core fiscal functions, Treasury ownership of monetary gold after 1934, Mint custody at Fort Knox, and Exchange Stabilization Fund are inherited facts.${americanGoldPredivergence} The author confirms that Fort Knox holds actual gold and that the postwar dollar returns to and remains on gold backing.${americanGoldCanon} Gold Emergency administration after divergence, the Byrnes–Dewey restoration sequence, 1947–1951 dates, licensing and redemption schedule, and later bullion-clearing role are incorporated working implementation.${americanGoldExtrapolation} Bureau structure, secretary succession, staffing, enforcement statistics, accounting rules, and committee names remain open.<!-- altwwii-writer-block:end -->`,
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
      ["Working gold-dollar role", `Parity administration, licensing, custody, and redemption${americanGoldExtrapolation}`]
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
