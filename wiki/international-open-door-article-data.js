window.deepArticles = window.deepArticles || {};

const internationalOpenDoorSources = [
  {href:"../transcript.md",label:"Master Transcript — international response to the American opening"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Open Door era and bloc political economy"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — World Market Boom and 1990 crisis"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — late-century commercial order"}
];

const internationalOpenDoorArticle = config => ({
  category:"Political economy",
  eyebrow:"World Market Boom · international response",
  infoboxKicker:"Cross-bloc political economy",
  ...config,
  sources:[...internationalOpenDoorSources,...(config.primarySources || [])],
  categories:config.categories || ["Political economy","World Market Boom","Open Door era","International relations"]
});

const intlOverview = [
  {href:"world-market-boom.html",kicker:"American opening",label:"World Market Boom"},
  {href:"international-reaction-american-opening.html",kicker:"Global response",label:"International Reaction to the American Opening"},
  {href:"cross-bloc-financial-shock-1990.html",kicker:"International correction",label:"1990 Cross-Bloc Financial Shock"},
  {href:"interoperability-without-financial-integration.html",kicker:"Later settlement",label:"Interoperability Without Financial Integration"}
];

Object.assign(window.deepArticles, {
  "international-reaction-american-opening": internationalOpenDoorArticle({
    title:"International reaction to the American opening",
    eyebrow:"Global political economy · 1985–1992",
    infoboxKicker:"International response to Reciprocal Open Markets",
    flag:{src:"assets/diagrams/international-open-door-response.svg",alt:"Diagram of American markets drawing capital from the British, Japanese, German, and Latin systems",caption:"The American market became a common destination without making the participating blocs equally open at home"},
    lead:"The international reaction to the American opening was the worldwide debate and policy experimentation caused by the United States becoming the principal open capital market among otherwise protected imperial systems. Britain moved closest to imitation; Japan, Germany, and the Latin Bloc created narrower channels that admitted profits and cooperation without surrendering organized national control.",
    canon:"The four-bloc response, sequence from investment through limited imitation and retreat, British exceptionalism, Japanese and German controlled participation, varied Latin experiments, 1990 closures, and post-crash settlement are established. The exact formal names of several schedules, services, and protocols remain working titles.",
    sections:[
      {id:"question",title:"The question posed by America",html:"<p>Foreign ministries asked whether America had discovered a way to make competing imperial systems participants in one open market without surrendering sovereignty. For roughly three years, rising production, employment, software exports, commercial space, and asset values made the answer appear to be yes.</p>"},
      {id:"magnet",title:"New York as the common capital market",html:"<p>New York became the deepest place where firms could raise money without first belonging to one national ministry, bank group, chamber, or clearing authority. London, Tokyo, Berlin, Rome, and Singapore all sent capital into an economy whose openness itself appeared to be a form of power.</p>"},
      {id:"britain",title:"Britain moves furthest",html:"<p>Britain possessed the City, private insurers, common law, and Atlantic habits needed to imitate the United States. Its <a href='british-market-opening-1988.html'>1988–1989 opening</a> nonetheless preserved foreign-ownership limits, protected Commonwealth capacity, and emergency authority to restore controls.</p>"},
      {id:"japan",title:"Japanese investment without domestic reorganization",html:"<p>Japanese banks, insurers, trading companies, and exporters purchased American claims while Tokyo allowed only carefully bounded foreign participation at home. External capital could earn profits and support joint ventures but could not freely reorganize the industrial hierarchy.</p>"},
      {id:"germany",title:"German participation as statecraft",html:"<p>Berlin treated access as an instrument rather than a constitutional principle. German firms invested through banks and specialized participation services while domestic certificates and market windows separated foreign profit claims from political command.</p>"},
      {id:"latin",title:"A plural Latin response",html:"<p>Italy protected the IRI and strategic obligations, Occitania courted capital for aerospace and computing, Spain preferred branches and joint ventures, and Portugal acted as an Atlantic broker. Their common instruments never erased national differences.</p>"},
      {id:"crash",title:"The 1990 reversal",html:"<p>The <a href='cross-bloc-financial-shock-1990.html'>cross-bloc shock</a> damaged investors and exporters but did not reproduce the American depression. Ring-fenced banks, capital controls, state credit, captive savings, and protected domestic demand allowed each bloc to absorb losses and close its experiments.</p>"},
      {id:"settlement",title:"The post-boom formula",html:"<p>Trade, licensing, standards, branches, joint production, tourism, science, and selected greenfield investment survived. Open foreign ownership did not. By the later 1990s the world had converged on <a href='interoperability-without-financial-integration.html'>interoperability without financial integration</a>.</p>"}
    ],
    related:[...intlOverview,{href:"american-century-debate.html",kicker:"Cultural argument",label:"American Century Debate"}],
    facts:[["Period","1985–1992"],["Principal market","United States"],["Closest imitator","British Commonwealth"],["Japanese approach","External investment; selective domestic access"],["German approach","Participation without political control"],["Latin approach","Nationally varied controlled openings"],["Turning point","1990 ownership crisis"],["Durable result","Open commerce; managed ownership"]]
  }),

  "american-century-debate": internationalOpenDoorArticle({
    title:"American Century Debate",
    category:"Intellectual history",
    eyebrow:"Global cultural debate · 1987–1991",
    infoboxKicker:"Debate over American financial and technical primacy",
    flag:{src:"assets/diagrams/international-open-door-response.svg",alt:"American finance and software at the center of four protected political economies",caption:"The feared American century rested on universality rather than a unified American imperial administration"},
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-d3s7x writer=g kind=revision created=2026-08-16T09:18:00-06:00 -->The late-1980s American boom directly makes the United States a commercial meeting place for protected blocs, while American computing, culture, and private spaceflight retain influence after the 1990 crash.<sup class='canon-note' data-provenance='a'>[a]</sup> “American Century Debate” is an archive label for the incorporated inference that contemporaries in each bloc interpreted those developments as a coherent argument over informal American primacy; no direct transcript passage establishes a movement by that name or its listed national images.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"The American-centered boom, asymmetric foreign participation, computing and cultural influence, and failure of open finance in 1990 are directly established. The American Century Debate label, 1987–1991 periodization, bloc-specific anxieties, and national cultural images are incorporated interpretation. Named books, films, commentators, polls, and any single originating phrase remain open.",
    sections:[
      {id:"paradox",title:"The least organized power as universal power",html:"<p>America seemed powerful because it was less organized than its rivals. Firms could enter its market without joining an imperial chamber or national industrial plan, and foreign consumers could adopt its software and media without declaring political allegiance.</p>"},
      {id:"finance",title:"Capital allocation as command",html:"<p>Critics argued that the country financing expansion could shape which industries grew, which firms merged, and which technical standards became normal. Supporters answered that voluntary investment was exchange rather than imperial command.</p>"},
      {id:"software",title:"Interfaces and commercial space",html:"<p>American software, personal computing, network interfaces, entertainment, and commercial orbital ventures gave the debate a technical dimension. A nation might manufacture the future while American firms wrote the interfaces through which it was financed and understood.</p>"},
      {id:"british",title:"The British third-defeat image",html:"<p>British critics imagined London becoming the European office of an American corporation. After wartime defeat and postwar dependence, unrestricted financial integration appeared to threaten a third defeat achieved without armies.</p>"},
      {id:"japanese",title:"Americanized Tokyo",html:"<p>Japanese fiction and journalism depicted a Tokyo whose factories remained Japanese while shares, retail culture, interfaces, and prestige were increasingly American. This anxiety fed the controlled character of Japan's domestic opening.</p>"},
      {id:"german",title:"Invisible claims against command",html:"<p>German commentary focused on ownership that could not be located inside a visible hierarchy. The threat was not American invasion but the possibility that banks, proxies, and market losses could escape political command.</p>"},
      {id:"latin",title:"Institutions reduced to brands",html:"<p>Latin critics feared that inherited chambers, public corporations, dynastic networks, and social obligations would remain as decorative names while mobile capital made the real decisions elsewhere.</p>"},
      {id:"after",title:"The debate after the crash",html:"<p>The Great Sell-Off ended the claim that universal finance supplied a stable world constitution. It did not end American influence in software, culture, science, or commercial space, which became easier to accept once separated from open ownership.</p>"}
    ],
    related:[...intlOverview,{href:"japanese-cyberpunk.html",kicker:"Japanese cultural response",label:"Japanese Cyberpunk"}],
    facts:[["Peak","1987–1990"],["Central question","Can openness become imperial power?"],["Financial center","New York"],["Technical vectors","Software, networks, and commercial space"],["British image","A third defeat"],["Japanese image","Americanized Tokyo"],["German fear","Invisible claims beyond command"],["After 1990","Influence without universal finance"]]
  }),

  "british-market-opening-1988": internationalOpenDoorArticle({
    title:"British market opening, 1988–1989",
    category:"British history",
    eyebrow:"Commonwealth political economy · 1988–1990",
    infoboxKicker:"Closest foreign imitation of the American opening",
    flag:{src:"assets/diagrams/british-open-door-firebreaks.svg",alt:"British market opening surrounded by ownership, strategic-industry, and emergency-control firebreaks",caption:"Britain widened Atlantic finance while preserving three constitutional firebreaks"},
    lead:"The British market opening of 1988–1989 was the Commonwealth's limited imitation of the American Open Door. It expanded Atlantic listings, investment, subsidiaries, and regulatory recognition while retaining aggregate foreign-ownership limits, protected strategic capacity, and emergency power to restore controls.",
    canon:"The timing, political factions, principal liberalizations, three firebreaks, controlled 1990 suspension, and return to managed capital are established. The collective title Halifax Commercial Schedules is a working formal name; exact enactments, thresholds, and parliamentary votes remain open.",
    sections:[
      {id:"setting",title:"The Sterling Commonwealth inheritance",html:"<p>Britain entered the boom with private banks and insurers operating inside a managed Sterling Commonwealth system. Reconstruction memory, imperial preference, clearing arrangements, and strategic-capacity rules made a complete American imitation politically impossible.</p>"},
      {id:"rooke",title:"Julian Rooke and the liberal case",html:"<p>Rooke's supporters argued that London could recover world standing by widening finance, accepting more foreign investment, and reducing preferences that diverted capital from its most productive use.</p>"},
      {id:"ashcombe",title:"David Ashcombe and reciprocal access",html:"<p>Ashcombe accepted reciprocal Atlantic access only if ownership, reserves, protected capacity, and Commonwealth duties remained governable. His position supplied the opening's eventual legislative center.</p>"},
      {id:"opposition",title:"Halden and Calder",html:"<p>Matthew Halden warned that financial imitation would make Britain an American auxiliary. Martin Calder argued that investors could move while unemployment, housing, infrastructure, and social obligation remained attached to regions and public institutions.</p>"},
      {id:"measures",title:"The opening measures",html:"<p>The program widened London–New York–Toronto cross-listing, American minority stakes in nonstrategic firms, British pension and insurance investment in American equities, approved financial mobility, regulatory recognition, and simplified subsidiaries.</p>"},
      {id:"authority",title:"Authority under the opening",html:"<!-- altwwii-writer-block:start id=wb-b-20260816-t7c3h writer=b kind=analysis created=2026-08-16T11:53:21-06:00 --><p>The Halifax framework was negotiated by the American, British, and Canadian governments. “American–Commonwealth” described its political setting and commercial network. It did not give Britain legislative authority over Canada or every Commonwealth realm. British statutes, ministerial powers, and regulators governed London, British pensions, and British companies. Canadian institutions supplied authority for Toronto and Canadian entities. American law governed New York and access to American markets. Wider Dominion or territorial participation required action by the competent government or institution.</p><p>The same division governed the firebreaks and the 1990 freeze. Ashcombe could suspend British voting acquisitions, investment schedules, pension exposure, and support for clearing under British control. He could not direct a Dominion cabinet or monetary authority unilaterally. Commonwealth preference and protected capacity described commitments Britain had to consider and institutions it could support or condition through contracts. They did not constitute a general reserve power over the Commonwealth economy. Halifax connected compatible national systems through reciprocal obligations and did not create a common market legislature or executive.</p><!-- altwwii-writer-block:end -->"},
      {id:"firebreaks",title:"The three firebreaks",html:"<p>Aggregate foreign-ownership limits prevented dispersed claims from becoming invisible control. Commonwealth and strategic industries remained protected. Ministers retained emergency authority to restore capital controls if financial mobility threatened reserves or capacity.</p>"},
      {id:"fear",title:"The third-defeat controversy",html:"<p>Opponents described an Americanized City as a third British defeat after the war and Lisbon settlement. Supporters replied that London would become irrelevant if it refused the market remaking global finance.</p>"},
      {id:"freeze",title:"Ashcombe's 1990 freeze",html:"<p>As American ownership rules collapsed, Ashcombe froze new voting acquisitions, further schedules, and increased pension exposure while guaranteeing Commonwealth clearing. The gradual unwind prevented an American-scale depression and restored the formula: open contracts, managed capital, protected capacity.</p>"}
    ],
    related:[...intlOverview,{href:"halifax-commercial-schedules.html",kicker:"Implementing instruments",label:"Halifax Commercial Schedules"},{href:"commonwealth.html",kicker:"Political system",label:"British Commonwealth"}],
    facts:[["Period","1988–1990"],["Government center","David Ashcombe"],["Liberal advocate","Julian Rooke"],["Sovereignty critic","Matthew Halden"],["Social critic","Martin Calder"],["Opened","Listings, minority stakes, funds, and subsidiaries"],["Firebreaks","Ownership, strategic capacity, emergency controls"],["Final formula","Open contracts; managed capital; protected capacity"]]
  }),

  "halifax-commercial-schedules": internationalOpenDoorArticle({
    title:"Halifax Commercial Schedules",
    category:"British law",
    eyebrow:"Working title · Atlantic financial instruments · 1989",
    infoboxKicker:"Implementing schedules of the British market opening",
    flag:{src:"assets/diagrams/british-open-door-firebreaks.svg",alt:"Atlantic financial routes constrained by three British firebreaks",caption:"The schedules connected London, New York, and Toronto without abolishing Commonwealth safeguards"},
    lead:"The Halifax Commercial Schedules is the working collective title for the 1989 British instruments that widened finance among London, New York, and Toronto. They created reciprocal access and regulatory recognition while keeping voting control, strategic industries, reserves, and emergency intervention under Commonwealth authority.",
    canon:"The schedules' functions, 1989 setting, connection to the Halifax Understanding, three firebreaks, and 1990 suspension are established. Their collective title, number, exact legal form, dates, thresholds, signatories, and relationship to individual statutes remain open.",
    sections:[
      {id:"basis",title:"Basis in the Halifax Understanding",html:"<p>The <a href='halifax-understanding.html'>Halifax Understanding</a> made Atlantic cooperation politically credible by joining access to security notification, rescue, ownership safeguards, and standards. The schedules translated that confidence into financial procedure.</p>"},
      {id:"listings",title:"Cross-listing",html:"<p>Approved firms could list securities across London, New York, and Toronto under mutually recognized accounting and disclosure rules. The arrangement reduced duplication without creating one Atlantic securities sovereign.</p>"},
      {id:"stakes",title:"Minority stakes and institutional investment",html:"<p>American investors received wider access to nonstrategic British firms, while British pensions and insurers could hold more American equities. Voting and aggregate-ownership rules distinguished investment from command.</p>"},
      {id:"subsidiaries",title:"Branches and subsidiaries",html:"<p>Financial and commercial firms gained simplified routes to establish subsidiaries, service clients, settle approved transactions, and move capital within designated Atlantic channels.</p>"},
      {id:"recognition",title:"Regulatory recognition",html:"<p>Accounting, securities, and professional rules were recognized where authorities judged them equivalent. Recognition lowered transactional barriers while preserving the right to reject firms or instruments that threatened domestic obligations.</p>"},
      {id:"limits",title:"Ownership and sector limits",html:"<p>The schedules did not open protected banks, Commonwealth clearing institutions, defense production, strategic shipping, core communications, or other reserved capacity to unrestricted foreign control.</p>"},
      {id:"emergency",title:"The emergency restoration clause",html:"<p>Ministers could halt acquisitions, limit transfers, and restore controls when reserves, clearing, pension security, or strategic capacity came under threat. This authority became decisive in 1990.</p>"},
      {id:"suspension",title:"Suspension and historical status",html:"<p>Ashcombe suspended further schedules and new voting acquisitions during the American crisis. Later Atlantic agreements preserved cross-listing and regulatory cooperation but not the brief experiment in wider ownership mobility.</p>"}
    ],
    related:[{href:"british-market-opening-1988.html",kicker:"Political program",label:"British Market Opening"},{href:"halifax-understanding.html",kicker:"Diplomatic foundation",label:"Halifax Understanding"},{href:"cross-bloc-financial-shock-1990.html",kicker:"Suspending crisis",label:"1990 Cross-Bloc Financial Shock"},{href:"interoperability-without-financial-integration.html",kicker:"Successor formula",label:"Interoperability Without Financial Integration"}],
    facts:[["Date","1989"],["Status of name","Working title"],["Principal cities","London, New York, and Toronto"],["Primary function","Reciprocal financial access"],["Permitted ownership","Limited nonstrategic minority stakes"],["Protected fields","Commonwealth and strategic capacity"],["Emergency power","Restoration of controls"],["Suspended","1990"]]
  }),

  "japanese-american-investment-boom": internationalOpenDoorArticle({
    title:"Japanese investment in the American boom",
    category:"Japanese economic history",
    eyebrow:"Japanese political economy · 1985–1991",
    infoboxKicker:"GEACPS participation in American open markets",
    flag:{src:"assets/diagrams/japanese-open-door-participation.svg",alt:"Japanese banks, insurers, trading companies, and exporters investing in American sectors while domestic hierarchy remains protected",caption:"Japan participated abroad through coordinated institutions and opened at home only through bounded channels"},
    lead:"Japanese investment in the American boom was the coordinated entry of banks, insurers, trading companies, pension funds, exporters, and Singapore-based vehicles into the United States after 1985. Japan became one of the opening's most capable participants while refusing to make foreign ownership a constitutional principle at home.",
    canon:"The institutional routes, target sectors, competing Japanese factions, domestic pilot measures, American-century anxiety, 1990 losses, and post-crash controls are established. Investment totals, named funds, firm rankings, acquisition lists, and exact losses remain open.",
    sections:[
      {id:"coalition",title:"Four Japanese factions",html:"<p>Export industrialists wanted distribution and suppliers; financial internationalizers wanted global earnings; developmental conservatives feared damage to coordinated credit; imperial-system advocates judged every opening by its effect on the Sphere.</p>"},
      {id:"routes",title:"Routes into America",html:"<p>Banks, insurers, trading companies, pension funds, exporters, Singapore offices, and special participation funds accumulated American claims. Their separate legal identities often concealed the degree to which they shared information and strategic assumptions.</p>"},
      {id:"targets",title:"Target sectors",html:"<p>Semiconductors, software, automobile suppliers, machine tools, media, telecommunications, logistics, commercial space, and retail offered both profit and knowledge about the world's largest open consumer market.</p>"},
      {id:"discipline",title:"Coordinated risk",html:"<p>Japanese participation remained connected to relationship banking, cross-shareholding, industrial groups, and administrative guidance. This reduced sudden domestic liquidation even when individual vehicles pursued aggressive American positions.</p>"},
      {id:"pilot",title:"The controlled domestic experiment",html:"<p>Tokyo permitted dollar nonvoting shares, New York depositary certificates, selected consumer and software joint ventures, special external-capital zones, foreign venture participation in smaller technology firms, and wider access for American distributors.</p>"},
      {id:"anxiety",title:"Who manufactures and who owns",html:"<p>The American Century Debate asked whether Japan would manufacture the future while America owned its shares, wrote its interfaces, and allocated its capital. Popular culture answered with images of an increasingly Americanized Tokyo.</p>"},
      {id:"shock",title:"The 1990 losses",html:"<p>Investment vehicles, insurers, and marginal banks failed or merged; exporters entered recession. Household savings institutions, cross-shareholding, capital controls, directed rollover, and protected domestic demand prevented the losses from becoming a general depression.</p>"},
      {id:"lesson",title:"Investment requires organized national control",html:"<p>Tokyo froze experimental channels and expanded beneficial-ownership mapping. The official lesson was not withdrawal from trade but that investment detached from organized national control was dangerous.</p>"}
    ],
    related:[...intlOverview,{href:"japanese-external-capital-zones.html",kicker:"Domestic experiment",label:"Japanese External-Capital Zones"},{href:"japanese-imperial-economic-system.html",kicker:"Institutional background",label:"Co-Prosperity Economic System"}],
    facts:[["Period","1985–1991"],["Principal investors","Banks, insurers, trading companies, and exporters"],["Clearing route","Singapore"],["Target sectors","Technology, industry, media, logistics, and space"],["Domestic opening","Controlled and mostly nonvoting"],["Main safeguard","Relationship finance and capital controls"],["1990 outcome","Losses and mergers without general depression"],["Policy lesson","Investment under organized national control"]]
  }),

  "japanese-external-capital-zones": internationalOpenDoorArticle({
    title:"Japanese external-capital zones",
    category:"Japanese economic policy",
    eyebrow:"Controlled financial experiment · 1988–1990",
    infoboxKicker:"Bounded channels for foreign capital",
    flag:{src:"assets/diagrams/japanese-open-door-participation.svg",alt:"External capital entering limited Japanese zones through nonvoting and joint-venture instruments",caption:"Profit participation was admitted at selected gates while authority remained inside the Japanese industrial order"},
    lead:"The Japanese external-capital zones were the 1988–1990 controlled channels through which Tokyo, Osaka, and Singapore admitted selected foreign finance, joint ventures, and venture participation during the World Market Boom. They offered access to growth without granting outside investors a general right to reorganize Japanese corporate hierarchy.",
    canon:"The experiment's period, principal locations, nonvoting and depositary instruments, joint ventures, small-firm participation, distribution access, political purpose, and post-crash closure are established. Formal zone titles, boundaries, administering bodies, tax rules, and participating companies remain open.",
    sections:[
      {id:"purpose",title:"A test rather than a conversion",html:"<p>Financial internationalizers wanted proof that Japan could attract foreign capital without weakening relationship banking or industrial policy. Developmental conservatives accepted a reversible experiment confined by place, instrument, and sector.</p>"},
      {id:"places",title:"Tokyo, Osaka, and Singapore",html:"<p>Tokyo and Osaka supplied domestic exchanges, banks, technology firms, and regulators. Singapore connected the experiment to GEACPS clearing and foreign investors without making the Japanese home islands fully open.</p>"},
      {id:"shares",title:"Nonvoting and depositary instruments",html:"<p>Approved firms issued dollar-denominated nonvoting shares and depositary certificates in New York. Investors could receive dividends and price gains while voting control remained with the existing Japanese structure.</p>"},
      {id:"ventures",title:"Joint ventures and small technology firms",html:"<p>American participation was welcomed in selected consumer goods, software, and younger technology firms where external knowledge and distribution mattered more than inherited command over strategic capacity.</p>"},
      {id:"distribution",title:"Retail and distribution access",html:"<p>American distributors and retailers received wider operating rights in designated channels. Their presence tested consumer demand while leaving wholesale finance, industrial procurement, and corporate governance largely intact.</p>"},
      {id:"limits",title:"The right that capital did not receive",html:"<p>External claims did not confer a general right to break cross-shareholding, replace relationship banks, compel divestiture, or reorganize supplier families. Japan separated financial return from constitutional corporate power.</p>"},
      {id:"closure",title:"The 1990 freeze",html:"<p>The American crisis showed that dispersed foreign positions could become both politically invisible and financially unstable. Tokyo halted expansion, tightened ownership mapping, and reviewed every pilot through its banks and ministries.</p>"},
      {id:"legacy",title:"Legacy in later greenfield policy",html:"<p>Later policy retained foreign joint ventures, distributors, technical partnerships, and greenfield investment under negotiated conditions. The universal portfolio-opening logic did not return.</p>"}
    ],
    related:[{href:"japanese-american-investment-boom.html",kicker:"External participation",label:"Japanese Investment in the American Boom"},{href:"international-reaction-american-opening.html",kicker:"Global setting",label:"International Reaction"},{href:"cross-bloc-financial-shock-1990.html",kicker:"Closing crisis",label:"1990 Cross-Bloc Financial Shock"},{href:"japanese-imperial-economic-system.html",kicker:"Domestic system",label:"Co-Prosperity Economic System"}],
    facts:[["Period","1988–1990"],["Locations","Tokyo, Osaka, and Singapore"],["Principal instruments","Nonvoting shares and depositary certificates"],["Permitted activity","Joint ventures, venture capital, and distribution"],["Governance rule","Profit without general voting command"],["Political character","Reversible controlled experiment"],["Expansion frozen","1990"],["Successor policy","Negotiated greenfield and joint ventures"]]
  }),

  "german-american-investment-boom": internationalOpenDoorArticle({
    title:"German investment in the American boom",
    category:"German economic history",
    eyebrow:"Einheitspakt political economy · 1985–1991",
    infoboxKicker:"German participation in American open markets",
    flag:{src:"assets/diagrams/german-open-door-participation.svg",alt:"German banks and firms using participation services to enter American markets while domestic control remains closed",caption:"Berlin treated the American market as an instrument and preserved political command over its own capital estate"},
    lead:"German investment in the American boom was the Einheitspakt's controlled acquisition of American equities, bonds, licenses, distribution, and industrial partnerships after 1985. Berlin welcomed access but rejected the premise that private capital should stand above political command.",
    canon:"The participating factions, investment routes, Wolfgang's interpretation of Reagan, role of technical services, bounded domestic instruments, 1990 exposure shock, audit response, and public lesson are established. Named firms, total exposure, exact rescue costs, and formal titles for participation services remain open.",
    sections:[
      {id:"factions",title:"Exporters, technicians, and security critics",html:"<p>Export and financial firms sought profit and access. Werner Lenz's technical establishment and Falkenberg–Weltnetz circles valued standards and interoperability. Security and Party officials feared ownership that could not be placed inside a visible chain of command.</p>"},
      {id:"wolfgang",title:"Wolfgang's interpretation of Reagan",html:"<p>Wolfgang Hitler concluded that Reagan was deliberately using mutual ownership to make peace materially valuable. He regarded the strategy as intelligent and did not warn Washington that Berlin would never accept the same constitutional vulnerability at home.</p>"},
      {id:"routes",title:"Routes into America",html:"<p>Banks, insurers, industrial firms, pension institutions, export companies, and specialist participation services bought or advised American positions. Legal and settlement expertise mattered as much as direct ownership.</p>"},
      {id:"targets",title:"Profit, interfaces, and distribution",html:"<p>German investors sought American consumer access, software compatibility, advanced suppliers, commercial technology, and financial return. Participation also revealed standards and business practices that could be adapted inside the Einheitspakt.</p>"},
      {id:"home",title:"The bounded domestic experiment",html:"<p>International participation certificates, nonvoting profit claims, convertible bonds without automatic votes, selected software and consumer joint ventures, licenses, distribution subsidiaries, and controlled Frankfurt, Hamburg, and Vienna windows admitted capital without conceding command.</p>"},
      {id:"shock",title:"The exposure Berlin had not mapped",html:"<p>German investors lost heavily in 1990, and banks and firms required support or merger. More disturbing to the state was the discovery that Berlin did not know its total American exposure until Washington forced sales.</p>"},
      {id:"response",title:"Audit, suspension, and long claims",html:"<p>Authorities suspended certificates, mapped holdings by bank, adviser, clearing route, and proxy, restricted purchases, and converted losses into long managed claims. Controlled banks, blocked currency, imperial demand, and financial firebreaks protected the domestic capital estate.</p>"},
      {id:"lesson",title:"Politics above capital",html:"<p>The public lesson was that politics must remain above capital. Internally, the shock strengthened the Kern audit state and its insistence that every claim, intermediary, and dependency be legible to the center.</p>"}
    ],
    related:[...intlOverview,{href:"atlantik-beteiligungsdienst.html",kicker:"Participation service",label:"Atlantik-Beteiligungsdienst"},{href:"gelenkte-grossraumwirtschaft.html",kicker:"Domestic order",label:"Directed Imperial Market"}],
    facts:[["Period","1985–1991"],["Political interpretation","Market access as instrument"],["Executive view","Mutual ownership could reward peace"],["Investment routes","Banks, firms, pensions, and participation services"],["Domestic instruments","Nonvoting and bounded claims"],["Market windows","Frankfurt, Hamburg, and Vienna"],["1990 vulnerability","Unmapped aggregate exposure"],["Institutional result","Expansion of the audit state"]]
  }),

  "atlantik-beteiligungsdienst": internationalOpenDoorArticle({
    title:"Atlantik-Beteiligungsdienst",
    category:"German institutions",
    eyebrow:"Working title · financial participation service · late 1980s",
    infoboxKicker:"German Atlantic investment intermediary",
    flag:{src:"assets/diagrams/german-open-door-participation.svg",alt:"German investors connected to American companies through a specialist filing, proxy, and settlement service",caption:"The service made American participation legible and usable without needing to own every position itself"},
    lead:"Atlantik-Beteiligungsdienst is the working title for the German specialist service that organized information and procedure for Einheitspakt participation in American markets. It translated filings, analyzed firms, coordinated legal and proxy services, and maintained settlement and participant records without necessarily owning the underlying stakes.",
    canon:"The institution's function, late-1980s setting, services, ability to coordinate without ownership, usefulness to German investors, and role in the post-crash exposure audit are established. Its final name, legal charter, headquarters, founders, clients, fees, and institutional survival remain open.",
    sections:[
      {id:"problem",title:"The foreign-market information problem",html:"<p>German firms understood industry but not the dispersed filings, custody practices, proxy rules, state laws, and settlement procedures of the American market. A shared technical service reduced the cost of participation.</p>"},
      {id:"filings",title:"Filings and analysis",html:"<p>The service collected American disclosures, corporate actions, sector reports, court records, and regulatory notices, then translated them into standardized assessments useful to banks, insurers, and industrial firms.</p>"},
      {id:"legal",title:"Legal and proxy services",html:"<p>Specialists advised on ownership thresholds, voting arrangements, board rights, convertible claims, and proxy procedure. Coordination could therefore occur through common expertise without a single German institution owning all positions.</p>"},
      {id:"settlement",title:"Settlement and custody records",html:"<p>The organization tracked custodians, clearing routes, nominees, currency conversion, dividends, and transfers. These records later became essential when Berlin tried to reconstruct aggregate exposure.</p>"},
      {id:"national",title:"National participant data",html:"<p>Participant files linked German investors to advisers, banks, industrial groups, and policy concerns. The service was commercial in form but naturally useful to a state that treated cross-border capital as strategic information.</p>"},
      {id:"ownership",title:"Influence without direct ownership",html:"<p>Because it supplied the same information and procedural architecture to many legally separate investors, the service could align behavior without taking title to shares or issuing explicit collective commands.</p>"},
      {id:"crash",title:"The 1990 audit",html:"<p>Forced American divestiture revealed positions and dependencies outside ordinary ministry totals. The service's records helped the Kern system map claims by bank, adviser, clearing path, proxy, and ultimate industrial interest.</p>"},
      {id:"status",title:"Unsettled institutional fate",html:"<p>Later German Atlantic services clearly continued to support trade, licensing, branches, and technical cooperation. Whether this organization survived under the same name or was absorbed into the audit state remains open.</p>"}
    ],
    related:[{href:"german-american-investment-boom.html",kicker:"Economic setting",label:"German Investment in the American Boom"},{href:"international-reaction-american-opening.html",kicker:"Global setting",label:"International Reaction"},{href:"cross-bloc-financial-shock-1990.html",kicker:"Audit crisis",label:"1990 Cross-Bloc Financial Shock"},{href:"matthias-kern.html",kicker:"Later administrative context",label:"Matthias Kern"}],
    facts:[["Period","Late 1980s"],["Status of name","Working title"],["Type","Financial information and participation service"],["Clients","Banks, insurers, industrial firms, and funds"],["Services","Filings, analysis, legal, proxy, and settlement"],["Ownership","Not required"],["Strategic value","Participant and exposure mapping"],["Post-crash fate","Open"]]
  }),

  "latin-american-investment-boom": internationalOpenDoorArticle({
    title:"Latin Bloc investment in the American boom",
    category:"Latin Bloc history",
    eyebrow:"Latin political economy · 1985–1991",
    infoboxKicker:"Plural Latin participation in American markets",
    flag:{src:"assets/diagrams/latin-atlantic-investment.svg",alt:"Italian, Occitan, Spanish, and Portuguese investment paths into the American market",caption:"The Latin opening was a family of national bargains rather than one integrated financial constitution"},
    lead:"Latin Bloc investment in the American boom comprised the different Italian, Occitan, Spanish, and Portuguese responses to the United States after 1985. Each sought capital, technology, distribution, or brokerage while preserving inherited obligations that mobile foreign ownership was not permitted to dissolve.",
    canon:"The four national approaches, protected sectors, Occitania's comparatively high exposure, Portuguese brokerage, proposed common instruments, 1990 suspension, and institutional absorption of losses are established. Investment totals, named firms, exact rules, and the Atlantic Investment Protocol's final title remain open.",
    sections:[
      {id:"plural",title:"No single Latin response",html:"<p>The Latin Bloc lacked the unified financial command of Japan or Germany. Rome, Toulouse, Madrid, and Lisbon therefore negotiated distinct balances among private initiative, corporative obligation, public industry, Atlantic access, and regional ambition.</p>"},
      {id:"italy",title:"Italy: private access beside the IRI",html:"<p>Italian private firms sought American listings, joint ventures, distribution, software, and selected minority investment. The IRI and Corporate Chamber protected energy, communications, strategic shipping, aerospace, infrastructure, and firms carrying formal social obligations.</p>"},
      {id:"occitania",title:"Occitania: the eager continental participant",html:"<p>Aerospace, chemicals, computing, electronics, avionics, pharmaceuticals, and commercial space required capital and export access. Toulouse and Bordeaux used American minority stakes to gain room from Roman direction, making Occitania the bloc's most exposed member.</p>"},
      {id:"spain",title:"Spain: branches before portfolio control",html:"<p>Atlantic and financial cities favored shipping, vehicles, tourism, consumer goods, and Latin American finance. The establishment preferred trade, branches, and joint ventures to broad foreign portfolio control.</p>"},
      {id:"portugal",title:"Portugal: the Atlantic broker",html:"<p>Portuguese banks and shipping linked America to Brazil, Africa, and Britain. Lisbon protected ports, islands, shipping, communications, and its Angolan, Mozambican, and wider Lusophone assets while earning fees from inter-bloc movement.</p>"},
      {id:"protocol",title:"The common investment window",html:"<p>A proposed <a href='atlantic-investment-protocol.html'>Atlantic Investment Protocol</a> supported New York cross-listing, dollar development bonds, controlled American minority capital, easier dividends, reciprocal branches, and a Scudo investment window.</p>"},
      {id:"losses",title:"The 1990 losses",html:"<p>Occitan firms and Portuguese Atlantic finance suffered most, but capital controls, state banks, the IRI, the Latin Development Bank, and the Scudo system absorbed losses. The protocol was suspended before a general depression formed.</p>"},
      {id:"lesson",title:"Capital moves; obligation remains",html:"<p>The settlement permitted trade and negotiated investment while insisting that duties to state, profession, community, and institution could not be sold with a security. Ownership remained subordinate to the source of obligation.</p>"}
    ],
    related:[...intlOverview,{href:"atlantic-investment-protocol.html",kicker:"Common framework",label:"Atlantic Investment Protocol"},{href:"latin-bloc.html",kicker:"Political system",label:"Latin Bloc"}],
    facts:[["Period","1985–1991"],["Structure","Four distinct national approaches"],["Italian safeguard","IRI and Corporate Chamber"],["Most open member","Occitania"],["Spanish preference","Trade, branches, and joint ventures"],["Portuguese role","Atlantic broker"],["Financial backstop","State banks, Development Bank, and Scudo"],["Governing principle","Capital moves; obligation remains"]]
  }),

  "atlantic-investment-protocol": internationalOpenDoorArticle({
    title:"Atlantic Investment Protocol",
    category:"Latin Bloc law",
    eyebrow:"Working title · Latin–American financial framework · 1989",
    infoboxKicker:"Controlled Latin access to American finance",
    flag:{src:"assets/diagrams/latin-atlantic-investment.svg",alt:"A Scudo investment window linking Italy, Occitania, Spain, and Portugal to New York",caption:"The proposed protocol combined common access with national sector reservations"},
    lead:"The Atlantic Investment Protocol is the working title for the 1989 Latin framework that widened controlled access to American finance through listings, bonds, minority capital, dividends, branches, and a Scudo investment window. It coordinated access without creating one Latin ownership regime.",
    canon:"The framework's approximate date, instruments, national reservations, relationship to the boom, and 1990 suspension are established. Its final title, treaty or administrative status, signatories, ratification, thresholds, and exact Scudo mechanism remain open.",
    sections:[
      {id:"origin",title:"Pressure for a common channel",html:"<p>Latin exporters and technology firms wanted New York capital while governments feared that separate bilateral bargains would allow investors to play one member against another. A common protocol offered minimum procedures without full integration.</p>"},
      {id:"listing",title:"New York cross-listing",html:"<p>Approved firms could seek American listings under recognized disclosure standards. National authorities retained power to exclude strategic or obligation-bearing corporations.</p>"},
      {id:"bonds",title:"Dollar development bonds",html:"<p>Governments, public institutions, and selected firms could issue dollar instruments for infrastructure, aerospace, computing, chemicals, transport, and other development purposes without transferring ordinary voting control.</p>"},
      {id:"minority",title:"Controlled minority capital",html:"<p>American investors received minority positions subject to sector reservations, voting rules, and national approval. Italy, Occitania, Spain, and Portugal applied these constraints differently.</p>"},
      {id:"branches",title:"Dividends and reciprocal branches",html:"<p>The protocol eased dividend transfers and establishment of approved financial or commercial branches. Portugal and Spain valued brokerage; Occitania valued technical finance; Italy insisted on institutional screening.</p>"},
      {id:"scudo",title:"The Scudo investment window",html:"<p>A designated window converted between dollar participation and the managed Latin currency system. It allowed investment flows to be monitored and reversed without making the Scudo fully convertible.</p>"},
      {id:"reservations",title:"National reservations",html:"<p>IRI holdings, energy, communications, infrastructure, strategic shipping, aerospace, protected ports, island systems, and colonial or associated assets remained subject to national lists and political obligations.</p>"},
      {id:"suspension",title:"Suspension in 1990",html:"<p>The American ownership crisis made new listings and minority positions politically dangerous. Members suspended the common window, absorbed losses through state and corporative institutions, and later restored narrower trade and greenfield channels.</p>"}
    ],
    related:[{href:"latin-american-investment-boom.html",kicker:"Political setting",label:"Latin Bloc Investment in the American Boom"},{href:"international-reaction-american-opening.html",kicker:"Global setting",label:"International Reaction"},{href:"cross-bloc-financial-shock-1990.html",kicker:"Suspending crisis",label:"1990 Cross-Bloc Financial Shock"},{href:"latin-scudo.html",kicker:"Monetary framework",label:"Latin Scudo"}],
    facts:[["Date","1989"],["Status of name","Working title"],["Principal instruments","Listings, bonds, minority capital, and branches"],["Currency channel","Scudo investment window"],["Governance","National sector reservations"],["Most active member","Occitania"],["Suspended","1990"],["Successor","Narrow trade and greenfield channels"]]
  }),

  "cross-bloc-financial-shock-1990": internationalOpenDoorArticle({
    title:"1990 Cross-Bloc Financial Shock",
    category:"Global economic history",
    eyebrow:"International financial crisis · 1990–1992",
    infoboxKicker:"Foreign transmission of the Great Sell-Off",
    flag:{src:"assets/diagrams/cross-bloc-financial-shock.svg",alt:"American forced divestiture transmitting losses to Britain, Japan, Germany, and the Latin Bloc before domestic firebreaks stop the cascade",caption:"Foreign systems lost capital and exports, but their institutional firebreaks prevented an American household-credit depression"},
    lead:"The 1990 Cross-Bloc Financial Shock was the foreign transmission of the American Great Sell-Off. British funds, Japanese institutions, German investors, and Latin firms lost money and export demand, but managed banks, capital controls, cross-shareholding, state credit, and protected domestic obligations prevented a second worldwide depression.",
    canon:"The foreign losses, unequal national transmission, British controlled unwind, Japanese mergers and rollover, German audit response, Latin institutional absorption, shuttering of opening experiments, and 1991–1992 stabilization are established. Exact loss totals, firm failures, rescue programs, and national recession statistics remain open.",
    sections:[
      {id:"trigger",title:"American forced sales",html:"<p>The National Industrial Integrity Act ordered foreign positions below new ownership limits. Compulsory selling, scarce replacement buyers, and American panic destroyed prices and collateral in September and October 1990.</p>"},
      {id:"channels",title:"Foreign transmission channels",html:"<p>Foreign holders suffered direct equity losses, exporters lost American orders, banks faced impaired clients, currencies came under pressure, and political opponents attacked the opening experiments that had created exposure.</p>"},
      {id:"britain",title:"Britain's controlled unwind",html:"<p>Ashcombe froze new voting acquisitions and pension exposure, suspended further Halifax schedules, guaranteed Commonwealth clearing, and allowed positions to unwind gradually. Britain suffered recession and political reversal without systemic collapse.</p>"},
      {id:"japan",title:"Japanese merger and rollover",html:"<p>Investment vehicles, insurers, and marginal banks failed or merged. Cross-shareholding, household savings institutions, capital controls, directed credit, and rollover prevented forced domestic liquidation.</p>"},
      {id:"germany",title:"German conversion into managed claims",html:"<p>Berlin supported or merged exposed institutions, restricted purchases, and converted losses into long managed claims. The deeper response was an exhaustive audit of holdings, advisers, proxies, and clearing paths.</p>"},
      {id:"latin",title:"Latin institutional absorption",html:"<p>The IRI, state banks, Latin Development Bank, and Scudo arrangements absorbed losses while national controls stopped contagion. Occitania and Portuguese Atlantic finance were the most exposed.</p>"},
      {id:"difference",title:"Why the depression remained American",html:"<p>Foreign systems had invested mainly through institutions able to spread or defer losses. America had tied share prices to household wealth, pensions, collateral, mergers, employment plans, and ordinary credit, making liquidation socially immediate.</p>"},
      {id:"settlement",title:"Stabilization by 1991–1992",html:"<p>By 1992 the foreign systems had closed their broad ownership pilots while preserving trade and technical cooperation. Their recoveries reinforced the view that markets should serve organized political orders rather than govern them.</p>"}
    ],
    related:[...intlOverview,{href:"great-sell-off.html",kicker:"American trigger",label:"Great Sell-Off"},{href:"open-door-depression.html",kicker:"American aftermath",label:"Open Door Depression"}],
    facts:[["Period","1990–1992"],["Trigger","American forced divestiture and panic"],["Britain","Freeze, guarantee, and gradual unwind"],["Japan","Merger, cross-shareholding, and rollover"],["Germany","Support, long claims, and audit"],["Latin Bloc","State and Scudo absorption"],["Global result","Recession and losses, not general depression"],["Policy result","Closure of broad ownership pilots"]]
  }),

  "interoperability-without-financial-integration": internationalOpenDoorArticle({
    title:"Interoperability without financial integration",
    category:"International political economy",
    eyebrow:"Post-crash commercial doctrine · 1990s",
    infoboxKicker:"Common settlement after the Open Door crisis",
    flag:{src:"assets/diagrams/cross-bloc-financial-shock.svg",alt:"Protected ownership systems connected by trade, standards, licenses, branches, and joint production",caption:"The post-crash order connected products and systems while keeping inherited ownership under national control"},
    lead:"Interoperability without financial integration was the common 1990s settlement by which rival blocs preserved trade, standards, licensing, branches, joint production, science, tourism, media, and selected new investment while refusing unrestricted foreign ownership of inherited institutions and strategic capacity.",
    canon:"The doctrine's post-1990 emergence, retained forms of exchange, rejection of broad foreign ownership, bloc-specific formulations, American convergence on open commerce and closed ownership, and late-1990s maturity are established. A single treaty, originating speech, universal legal definition, and exact adoption dates remain open.",
    sections:[
      {id:"origin",title:"Born from a failed universal market",html:"<p>The World Market Boom proved that cross-bloc exchange could produce real growth. The crash proved that financial claims could outrun political knowledge, public obligation, and crisis capacity. Governments kept the exchange and rejected the constitutional claim of ownership.</p>"},
      {id:"retained",title:"What remained open",html:"<p>Goods, licenses, standards, branches, joint production, tourism, media, scientific cooperation, technical services, and selected greenfield factories continued to cross political boundaries.</p>"},
      {id:"closed",title:"What closed",html:"<p>Foreign investors lost any general expectation that dispersed portfolio claims could accumulate into control of inherited banks, industrial networks, strategic infrastructure, media systems, or firms carrying public obligations.</p>"},
      {id:"britain",title:"The Commonwealth formula",html:"<p>Britain described the settlement as open contracts, managed capital, protected capacity. Atlantic listings and professional recognition survived beside ownership and emergency safeguards.</p>"},
      {id:"japan",title:"The Japanese formula",html:"<p>Japan welcomed investment when organized through national banks, negotiated ventures, and industrial policy. Profit claims remained acceptable; an external right to reorganize hierarchy did not.</p>"},
      {id:"germany",title:"The German formula",html:"<p>Berlin expanded technical compatibility while insisting that politics stand above capital. Financial relations had to be mapped, bounded, and convertible into managed claims during crisis.</p>"},
      {id:"latin",title:"The Latin formula",html:"<p>Latin governments argued that capital might cross borders while obligation remained attached to state, profession, community, corporation, or public institution.</p>"},
      {id:"america",title:"American convergence",html:"<p>By the late 1990s the United States itself accepted open commerce and closed ownership: foreign products and new factories were welcome, but concealed purchase of inherited corporate sovereignty was not.</p>"}
    ],
    related:[...intlOverview,{href:"political-economy.html",kicker:"Comparative setting",label:"Political Economy by Bloc"},{href:"american-open-markets-act.html",kicker:"Abandoned universal model",label:"American Open Markets Act"}],
    facts:[["Period","1990s"],["Retained","Trade, standards, licenses, branches, and joint production"],["Permitted investment","Selected greenfield and negotiated ventures"],["Rejected","Unrestricted control of inherited institutions"],["British phrase","Open contracts; managed capital; protected capacity"],["German rule","Politics above capital"],["Latin rule","Obligation remains attached"],["American rule","Open commerce; closed ownership"]]
  })
});

function addInternationalOpenDoorRelated(key, item) {
  const article = window.deepArticles[key];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
}

addInternationalOpenDoorRelated("world-market-boom",{href:"international-reaction-american-opening.html",kicker:"Foreign response",label:"International Reaction to the American Opening"});
addInternationalOpenDoorRelated("open-door-depression",{href:"cross-bloc-financial-shock-1990.html",kicker:"Foreign transmission",label:"1990 Cross-Bloc Financial Shock"});
addInternationalOpenDoorRelated("political-economy",{href:"interoperability-without-financial-integration.html",kicker:"Post-crash settlement",label:"Interoperability Without Financial Integration"});
addInternationalOpenDoorRelated("halifax-understanding",{href:"halifax-commercial-schedules.html",kicker:"Financial implementation",label:"Halifax Commercial Schedules"});
addInternationalOpenDoorRelated("japan",{href:"japanese-american-investment-boom.html",kicker:"Open Door era",label:"Japanese Investment in the American Boom"});
addInternationalOpenDoorRelated("germany",{href:"german-american-investment-boom.html",kicker:"Open Door era",label:"German Investment in the American Boom"});
addInternationalOpenDoorRelated("latin-bloc",{href:"latin-american-investment-boom.html",kicker:"Open Door era",label:"Latin Bloc Investment in the American Boom"});
addInternationalOpenDoorRelated("commonwealth",{href:"british-market-opening-1988.html",kicker:"Open Door era",label:"British Market Opening, 1988–1989"});
