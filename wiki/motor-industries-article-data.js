window.deepArticles = window.deepArticles || {};

const motorSettingSources = [
  {href:"../materialCultureReference%20-%20AltWWII.md",label:"Material Culture Reference — motorization and national automobile industries"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — integrated material-culture milestones"},
  {href:"../transcript.md",label:"Master Transcript — postwar vehicle markets, consolidation, and 1985 industrial positions"}
];
const germanMotorSources = [
  {"href":"../materialCultureReference%20-%20AltWWII.md","label":"Material culture and civilian industry"},
  {"href":"../settingBible%20-%20AltWWII.md","label":"Setting Bible"},
  ...motorSettingSources,
  {href:"https://www.volkswagen-group.com/en/volkswagen-chronicle-17351/1937-to-1945-founding-of-the-company-and-integration-into-the-war-economy-17354",label:"Volkswagen Group historical chronicle — foundation, savings scheme, and war production"},
  {href:"https://www.audi.com/en/company-history-17227",label:"Audi company history — Auto Union and the four-ring system"}
];
const americanMotorSources = [
  ...motorSettingSources,
  {href:"https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/hudson-motors",label:"Detroit Historical Society — Hudson Motors and the Nash merger"},
  {href:"https://studebakermuseum.org/studebakers-packards-the-corporate-collection/",label:"Studebaker National Museum — Studebaker–Packard corporate collection"},
  {href:"https://packardmuseum.org/pages/brief-history-of-packard",label:"National Packard Museum — Packard history"},
  {href:"https://www.jeep.com/mt/history.html",label:"Jeep heritage — military and civilian utility-vehicle lineage"}
];

const motorArticle = (article, sources) => ({
  ...article,
  sources,
  categories:article.categories || ["Motor industry","Material culture"]
});
const germanMotorLandscape = {src:"assets/diagrams/german-motor-industry-system.svg",alt:"Schematic of the postwar German motor-industry system",caption:"The German market combined a state mass producer, a four-marque Saxon group, blocked foreign firms, prestige specialists, and a managed Bremen reorganization"};
const americanMotorLandscape = {src:"assets/diagrams/american-independent-motor-industry.svg",alt:"Independent American manufacturers and the marques acquired after the 1990 crash",caption:"Nash, Hudson, Studebaker and Packard retained separate companies; the named post-crash allocation distributed Ford, GM and Chrysler businesses among them, Kaiser–Willys and International Harvester"};

Object.assign(window.deepArticles,{
  "german-motor-industry":motorArticle({
    title:"Motor industry of Germany",category:"German industry",eyebrow:"Automobiles · commercial vehicles · motorcycles · 1947–1985",infoboxKicker:"National motor industry",landscape:germanMotorLandscape,
    lead:"The German motor industry is the state-directed but commercially differentiated vehicle system that emerged from victory, wartime overextension, and controlled civilian conversion after 1947. Volkswagen became the mass legitimacy project; Auto Union remained an intact Saxon four-marque group; Opel and Ford-Werke operated as blocked American-owned enterprises; Mercedes-Benz, BMW, Porsche, NSU, and Horch occupied prestige or technical niches; and Borgward survived its financing crisis in reorganized commercial form.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-m2v6c writer=g kind=revision created=2026-08-16T09:01:00-06:00 -->The postwar manufacturer hierarchy, Volkswagen certificate settlement and controlled delivery, intact Saxon Auto Union, blocked status of Opel and Ford-Werke, Borgward's managed reorganization, replacement-cliff boom, principal technical schools, and 1985 market structure are incorporated setting history.<sup class='canon-note' data-provenance='e'>[e]</sup> They derive from the detailed motor-industry reconstruction preserved in the Material Culture Reference rather than from a complete author-supplied company registry. Exact ownership statutes, consolidation dates, model names after the Volkswagen 1100, market shares, output, and plant-by-plant histories remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {"id":"automation-and-trade","title":"Production and external markets, 1963–1990","html":"<p>The German nuclear-power buildout and relaxation of petroleum-export controls in 1963–64 changed the fuel assumptions used by foreign motor manufacturers. Porsche was already experimenting with electric cars in 1963. Cheaper petroleum allowed continued work on large engines and alternative powerplants; battery mass, component life and maintenance still limited individual designs.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>By 1975 German manufacturers had invested heavily in robotic production and factory automation. Materials requisition and controlled industrial allocation reduced some purchasing layers faced by American firms. Material, labor and machinery still incurred costs, although those costs did not pass through the same sequence of market invoices. Japanese manufacturers reached similar price advantages through abundant industrial materials, labor-saving production and export support.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>German companies and individual investors participated selectively in the American opening after 1985. Ford attracted German investment through existing industrial relationships. German domestic ownership and market access remained screened, and Germany did not reproduce the American opening. After the 1990 crash, Ford-Werke passed into separate German ownership. American Ford passenger assets and the Ford marque entered Studebaker; the two Ford businesses subsequently had separate owners.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>The purchaser of Ford-Werke, its final legal vehicle and individual transaction closing dates remain unrecorded. Opel's American equity and German operational control form a separate property history.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {"id":"civilian-mobility","title":"Household mobility and touring","html":"<p>The first expansion of household motor transport included motorcycles, sidecars, employers' vehicles and municipal fleets as well as privately owned cars. Volkswagen deliveries and the settlement of KdF savings claims enlarged the family-car market during the 1950s. Railways and urban public transport continued to carry commuting and long-distance traffic. A private car also served visits, weekend excursions and family holidays.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>Manufacturers occupied different price and service markets. Volkswagen and DKW supplied economical family mobility; Opel, Ford-Werke and Borgward sold conventional middle-market and commercial vehicles. Mercedes-Benz supplied professional and official cars, Horch ceremonial luxury, BMW motorcycles and sporting cars, and Porsche sports cars and contract engineering. Auto Union retained DKW, Wanderer, Audi and Horch within one group.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"inheritance",title:"Wartime inheritance",html:"<p>Germany entered peace with large vehicle plants, a deep component industry, exhausted rolling stock, and a motor pool assembled from German, allied, and captured designs. Military production had delayed the promised civilian car and directed trucks, motorcycles, engines, and repair capacity toward war.</p><p>Factories survived without Allied occupation dismantling. They did not immediately produce abundance: fuel, rubber, housing, labor, machine tools, and transport allocations remained controlled.</p>"},
      {id:"surplus",title:"Field-grey motorization",html:"<p>From 1947 to about 1952, released <a href='adam-opel-ag.html'>Opel</a>, <a href='ford-werke.html'>Ford</a>, <a href='daimler-benz.html'>Mercedes</a>, Borgward, <a href='buessing.html'>Büssing</a>, <a href='henschel-and-son.html'>Henschel</a>, and <a href='maschinenfabrik-augsburg-nuernberg.html'>MAN</a> trucks carried reconstruction. Motorcycles and sidecars supplied personal mobility; ambulances became civil vehicles; former command vans served utilities and broadcasting; heavy military tractors worked forests, quarries, and eastern roads.</p><p>The <a href='surplus-motorization.html'>surplus fleet</a> delayed new purchases and then failed in a narrow period. The resulting replacement cliff produced a commercial-vehicle boom before private-car abundance.</p>"},
      {id:"structure",title:"The manufacturer ladder",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Market</th><th>Principal firms</th></tr></thead><tbody><tr><td>Mass family cars</td><td><a href='volkswagenwerk.html'>Volkswagen</a>, <a href='adam-opel-ag.html'>Opel</a></td></tr><tr><td>Small cars and motorcycles</td><td><a href='dkw.html'>DKW</a>, <a href='nsu-motorenwerke.html'>NSU</a>, <a href='zuendapp.html'>Zündapp</a></td></tr><tr><td>Commercial and middle market</td><td><a href='ford-werke.html'>Ford-Werke</a>, <a href='borgward.html'>Borgward</a>, <a href='hanomag.html'>Hanomag</a></td></tr><tr><td>Upper middle</td><td><a href='audi-marque.html'>Audi</a>, <a href='wanderer.html'>Wanderer</a>, <a href='bmw.html'>BMW</a></td></tr><tr><td>Luxury and official</td><td><a href='daimler-benz.html'>Mercedes-Benz</a>, <a href='horch.html'>Horch</a></td></tr><tr><td>Sports and contract engineering</td><td><a href='porsche.html'>Porsche</a></td></tr></tbody></table></div>"},
      {id:"ownership",title:"State, blocked, and private firms",html:"<p>Volkswagen remained a Labour Front and state concern under conversion supervision. <a href='auto-union.html'>Auto Union</a> retained its Saxon plants and marque structure. <a href='adam-opel-ag.html'>Opel</a> and <a href='ford-werke.html'>Ford-Werke</a> kept American equity on paper while German trustees controlled production, patents, exports, dividends, and plant closure.</p><p>Borgward and smaller specialists preserved an independent space, but credit and procurement gave Berlin a practical veto over failure. German competition was real inside politically defined boundaries.</p>"},
      {id:"technology",title:"Technical schools",html:"<p>Volkswagen moved from rear engines toward water-cooled front-wheel-drive families. Auto Union used <a href='dkw.html'>DKW</a> and <a href='audi-marque.html'>Audi</a> for front-wheel drive, rotary engines, turbocharging, and electronic controls. <a href='daimler-benz.html'>Mercedes</a> emphasized diesel, safety, injection, and long-distance durability; BMW and <a href='porsche.html'>Porsche</a> made sporting performance prestigious.</p><p><a href='nsu-motorenwerke.html'>NSU's rotary</a> survived longer as a niche because no universal 1973 fuel crisis ended experimentation, although sealing, wear, service, and consumption prevented mass adoption.</p>"},
      {id:"sport",title:"Motorsport and development",html:"<p>Mercedes-Benz and Auto Union supplied the German half of the postwar <a href='motorsport.html'>Formula One</a> settlement. Endurance, touring, and rally programs transferred road technology more directly through brakes, fuel injection, tires, suspension, turbocharger durability, safety, and data collection.</p><p>Racing prestige remained subordinated to the national product ladder: an experimental victory mattered most when it produced a certified component or an exportable technical reputation.</p>"},
      {id:"exports",title:"Empire, exports, and service",html:"<p>German firms sold national variants across the Einheitspakt: tropical cooling, colonial suspension, different fuels, local scripts, simplified electronics, fleet packages, and service agreements. The state preferred exports that locked users into parts, training, and certified maintenance.</p><p>Metropolitan quality coexisted with older vehicles in eastern and African territories. The same manufacturer could sell an advanced Audi in Germany and support a rebuilt wartime truck far from the core.</p>"},
      {id:"1985",title:"Industry in 1985",html:"<p>By 1985 Volkswagen was a mature mass producer, Auto Union the multi-marque technical counterweight, Mercedes the diesel-and-safety prestige house, BMW and Porsche sporting specialists, and Borgward a reorganized commercial-vehicle identity. Opel and Ford-Werke remained the great blocked-equity anomalies.</p><p>Protected commerce admitted Japanese, American, British, and Latin vehicles without dissolving national ownership. Germany's strength lay less in the cheapest automobile than in a complete ladder joined to standards, parts, and service.</p>"}
    ],
    related:[{href:"volkswagenwerk.html",kicker:"Mass producer",label:"Volkswagenwerk"},{href:"auto-union.html",kicker:"Technical group",label:"Auto Union"},{href:"daimler-benz.html",kicker:"Prestige and trucks",label:"Daimler-Benz"},{href:"adam-opel-ag.html",kicker:"Blocked GM subsidiary",label:"Adam Opel AG"},{href:"ford-werke.html",kicker:"Blocked Ford subsidiary",label:"Ford-Werke"},{href:"porsche.html",kicker:"Sports and engineering",label:"Porsche"},{href:"nsu-motorenwerke.html",kicker:"Compact and rotary specialist",label:"NSU Motorenwerke"},{href:"bmw.html",kicker:"Premium cars and motorcycles",label:"BMW"},{href:"buessing.html",kicker:"Truck and bus specialist",label:"Büssing"},{href:"hanomag.html",kicker:"Machinery and vehicles",label:"Hanomag"},{href:"zuendapp.html",kicker:"Light mobility",label:"Zündapp"},{href:"borgward.html",kicker:"Managed reorganization",label:"Borgward"}],
    facts:[["Postwar structure","Protected multi-firm national ladder"],["Mass producer","Volkswagenwerk"],["Technical group","Auto Union"],["Blocked foreign firms","Opel · Ford-Werke"],["Prestige and sport","Mercedes-Benz · Horch · BMW · Porsche"],["Managed failure","Borgward reorganization"],["Early motorization","Released military vehicles and motorcycles"],["Replacement boom","Approximately 1953–1956"],["1985 strengths","Certification · service · diesel · safety · front-wheel drive"]]
  },germanMotorSources),

  "volkswagenwerk":motorArticle({
    title:"Volkswagenwerk",category:"German companies",eyebrow:"State motor manufacturer · mass mobility and regime legitimacy",infoboxKicker:"German automobile manufacturer",landscape:germanMotorLandscape,
    lead:"Volkswagenwerk is Germany's principal mass automobile producer and one of the most politically burdened corporations of the postwar Reich. Founded by the German Labour Front to deliver the KdF-Wagen, converted to armaments and military vehicles during the war, and left with hundreds of thousands of unfulfilled savings claims, it entered civilian production under state control and settled those claims through delivery priority and purchase certificates rather than free cars.",
    canon:"Labour Front and state ownership, wartime military production, the undelivered KdF promise, 1950 Volkswagen 1100/Typ 1, purchase certificates, controlled allocation order, early vans and commercial derivatives, late-1960s diversification pressure, 1973–75 front-wheel-drive transition, and mature 1985 product family are established. Exact corporate statute, directors, model names beyond the 1100, plant totals, production figures, prices, exports, and labor settlement remain open.",
    sections:[
      {"id":"claims-and-service","title":"Claims, deliveries and household use","html":"<p>KdF claimants received purchase priority, certificates and partial settlements during civilian conversion. A certificate could contribute to a purchase, while the allocation system also served doctors, rural officials, skilled workers, veterans and public or commercial fleets. The availability of a new Volkswagen in 1950 remained limited; mass deliveries followed across the decade.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>The early Typ 1 or Volkswagen 1100 was a product designation, rather than an independent marque. Family touring, dealer servicing, replacement parts and roadside facilities expanded around the car. Motorcycles, buses and railways continued to serve households that could not yet afford a Volkswagen or used it only for some journeys.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"foundation",title:"Labour Front foundation",html:"<p>The German Labour Front founded the people's-car enterprise in 1937 and launched a weekly savings scheme in 1938. The planned mass plant was modeled on vertically integrated American production, while the KdF-Wagen joined automobile ownership to the social promise of National Socialism.</p><p>War began before mass civilian delivery. Savers held stamps and claims against a car that had become a military chassis.</p>"},
      {id:"war",title:"War production and coercion",html:"<p>Volkswagenwerk produced Kübelwagen, amphibious vehicles, components, repairs, and other armaments work. Foreign forced laborers, prisoners, and camp inmates became part of the wartime labor system.</p><p>Victory did not erase that record. It did prevent Allied trusteeship, denazification, or a postwar transfer of the plant into a democratic public corporation.</p>"},
      {id:"settlement",title:"The KdF certificate settlement",html:"<p>The postwar company remained a Labour Front and state concern under Speer's conversion authorities. Old savers received a <strong>KdF purchase certificate</strong> that counted as a down payment and delivery priority. Alternatives included motorcycles, household-goods credit, or reconstruction bonds.</p><p>The settlement honored the claim without pretending that wartime savings could produce hundreds of thousands of free cars in an austerity economy.</p>"},
      {id:"1100",title:"Volkswagen 1100",html:"<p>The first true postwar civilian product was marketed as the <strong>Volkswagen 1100</strong>, internally Typ 1. KdF-Wagen remained common in propaganda and among claimants, but the commercial name separated exports and later products from the old promise.</p><p>Initial allocation favored doctors and midwives, rural officials, mobile skilled workers, large claimant families, decorated veterans, municipal and commercial fleets, and only then unrestricted private purchasers.</p>"},
      {id:"motorization",title:"From rarity to mass producer",html:"<p>A new Volkswagen still drew a crowd in a workers' settlement in 1950. Motorcycles, used military vehicles, employers, and public transport mattered more to ordinary mobility.</p><p>During the 1950s the original car, vans, and commercial derivatives became common enough to reshape holidays, courtship, suburbs, and roadside services without making ownership universal.</p>"},
      {id:"diversification",title:"Beyond one people's car",html:"<p>By the late 1960s competition from Opel, DKW, Ford-Werke, and Borgward made dependence on one rear-engined family untenable. Volkswagen added larger family vehicles, fleet and colonial packages, commercial derivatives, and a modern small-car program.</p><p>A water-cooled, front-wheel-drive family entered production around 1973–75. Exact model names remain open, but the architectural break is established.</p>"},
      {id:"system",title:"State company and commercial brand",html:"<p>Volkswagen sold through dealers, state allocation, worker finance, fleet purchasing, and export agreements. Its public identity combined ordinary household aspiration with state ownership, labor discipline, and the memory of an unpaid promise.</p><p>Certification, parts, training, and service made the company an industrial system rather than only a maker of cars.</p>"},
      {id:"1985",title:"Volkswagen in 1985",html:"<p>By 1985 Volkswagen produced small hatchbacks, family cars, vans, commercial vehicles, and sporting derivatives. The original rear-engined car survived as an inexpensive familiar model but no longer defined the firm.</p><p>Volkswagen remained Germany's mass-motorization symbol, although Auto Union, blocked Opel and Ford, and the prestige houses prevented it from becoming the whole national industry.</p>"}
    ],
    related:[{href:"german-motor-industry.html",kicker:"National context",label:"Motor Industry of Germany"},{href:"auto-union.html",kicker:"Principal technical rival",label:"Auto Union"},{href:"surplus-motorization.html",kicker:"Pre-mass foundation",label:"Surplus Motorization"},{href:"motorsport.html",kicker:"Technical competition",label:"International Motorsport"},{href:"everyday-life.html",kicker:"Social setting",label:"Everyday Life"}],
    facts:[["Founded","1937"],["Founder and owner","German Labour Front; later state-controlled continuity"],["Headquarters and principal works","City of the KdF-Wagen / Wolfsburg district"],["Prewar product","KdF-Wagen"],["First postwar civilian model","Volkswagen 1100 · Typ 1"],["Savings settlement","Purchase certificates and delivery priority"],["1970s transition","Water-cooled front-wheel-drive family"],["1985 position","Principal German mass producer"],["Exact postwar statute","Open"]]
  },germanMotorSources),

  "auto-union":motorArticle({
    title:"Auto Union",category:"German companies",eyebrow:"Saxon four-marque motor group · technical counterweight",infoboxKicker:"German automobile group",landscape:germanMotorLandscape,
    lead:"Auto Union is the intact Saxon automobile and motorcycle group formed from DKW, Wanderer, Audi, and Horch. Because Saxony never passed through Soviet occupation, the company did not abandon Chemnitz and Zwickau or reconstruct itself in western Germany. Its four rings continued to represent four active marques and a complete product ladder rather than the later revival of one name.",
    canon:"Continued Saxon location, four active marques, no Ingolstadt reconstruction, the 1950 market ladder, DKW's early importance, Formula One role, technical-counterweight function, internal duplication problem, front-wheel drive, rotary, turbo, and electronic experimentation, and 1985 niche structure are established. Exact ownership, board, plant map, model histories, NSU relationship, marque closures, and production totals remain open.",
    sections:[
      {"id":"corporate-boundaries","title":"Marques and corporate relationships","html":"<p>DKW, Wanderer, Audi and Horch remained Auto Union marques. Their shared parentage did not make their price levels, dealers or technical programs interchangeable. DKW covered inexpensive mobility and motorcycles, Wanderer conventional middle-market work, Audi advanced upper-middle cars, and Horch official and private luxury.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>NSU retained a separate rotary and compact-vehicle identity. Licensing, joint technical work and possible commercial cooperation with Auto Union do not establish an acquisition. Volkswagen's engineering relationships with German firms likewise did not place the four Auto Union marques under Volkswagen ownership.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"formation",title:"The four rings",html:"<p>Auto Union joined Audi, DKW, Horch, and Wanderer in 1932. The four-ring emblem represented shared finance, purchasing, engineering, and competition among marques occupying different portions of the market.</p><p>Before and during the war the group combined motorcycles, passenger vehicles, prestige cars, racing, and military production across the Saxon industrial region.</p>"},
      {id:"continuity",title:"Continuity in Saxony",html:"<p>The Ural peace left Chemnitz and Zwickau inside the Reich. There was no Soviet confiscation, eastern nationalization, or flight to Ingolstadt. Plants, technical offices, supplier relations, and the four-marque organization survived in place.</p><p>This continuity made Saxony a principal civilian showpiece of German victory and tied regional employment to the state's promise of technical abundance.</p>"},
      {id:"marques",title:"The four-marque ladder",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Marque</th><th>Principal role</th></tr></thead><tbody><tr><td><a href='dkw.html'>DKW</a></td><td>Motorcycles, inexpensive cars, vans, and mass mobility</td></tr><tr><td><a href='wanderer.html'>Wanderer</a></td><td>Conventional middle-market cars and machinery</td></tr><tr><td><a href='audi-marque.html'>Audi</a></td><td>Technically advanced upper-middle vehicles</td></tr><tr><td><a href='horch.html'>Horch</a></td><td>Luxury, official limousines, and elite military vehicles</td></tr></tbody></table></div>"},
      {id:"motorization",title:"DKW and early motorization",html:"<p><a href='dkw.html'>DKW</a> was Volkswagen's most important early rival because motorcycles and small cars were attainable before full family-car abundance. Delivery vans and simple two-stroke vehicles also suited dealers, trades, and local government.</p><p>The cheaper marque gave Auto Union volume while <a href='audi-marque.html'>Audi</a> and <a href='horch.html'>Horch</a> preserved the group's engineering and official prestige.</p>"},
      {id:"racing",title:"Racing and national prestige",html:"<p>Auto Union returned beside Mercedes-Benz as a German foundation of the alternate Formula One championship. Racing sustained expertise in engines, aerodynamics, braking, materials, and high-speed stability.</p><p>The group could test an idea under one marque without risking the entire product range, making competition part of a wider experimental structure.</p>"},
      {id:"duplication",title:"Duplication and managed competition",html:"<p>Four sales networks, engineering offices, and overlapping middle-market products produced chronic duplication. The state valued the resulting technical options but resisted waste that threatened output or export commitments.</p><p>Wanderer therefore became the most vulnerable to narrowing or specialization, while DKW, Audi, and Horch retained clearer identities.</p>"},
      {id:"capital-allocation",title:"Capital allocation and marque discipline",html:"<!-- altwwii-writer-block:start id=wb-r-20260816-a7f3q writer=r kind=analysis created=2026-08-16T13:46:00-06:00 --><p>Auto Union's four marques could share finance, purchasing, testing, components, distribution, and research while addressing different buyers. Those economies did not by themselves show that every marque or model earned the capital assigned to it. The relevant comparison was between the group's internal account and the prices, repeat purchases, warranty costs, resale values, fleet operating costs, dealer solvency, and export receipts produced outside the group.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Shared account</th><th>Economic question</th><th>Evidence of discipline</th></tr></thead><tbody><tr><td>Engines, bodies, tooling, and testing</td><td>Did transfer prices charge each marque for the capital and engineering it used?</td><td>Separate model margins, tooling life, defect and warranty cost, and viable outside supply prices</td></tr><tr><td>Dealers, parts, and consumer credit</td><td>Did a weak line survive because another marque carried inventory, service, or bad debts?</td><td>Dealer profitability, parts availability, credit losses, repeat sales, and used-vehicle prices</td></tr><tr><td>Racing and experimental programmes</td><td>Did technical learning repay its cost beyond prestige or a politically selected objective?</td><td>Transfer into production, licensing receipts, measured reliability, fuel use, and export demand</td></tr><tr><td>State credit and procurement</td><td>Was the group selling a specified capability or receiving protection from market loss?</td><td>Published performance, competitive bids, explicit subsidy, contract margin, and loss borne by investors</td></tr></tbody></table></div><p>Internal competition was therefore not equivalent to rivalry among independent firms when the same board or ministry decided investment, allocation, and closure. Volkswagen, Opel, Ford-Werke, Borgward, BMW, Mercedes-Benz, imports, and used or surplus vehicles supplied outside benchmarks, although exchange controls, procurement preference, directed credit, and market access could weaken the price signal. Preserving several design schools, regional employment, or emergency production options might be deliberate policy. Their cost remained a public account rather than proof that every protected product was efficient.</p><p>Wartime compulsory delivery and forced labour also distorted any comparison of output or productivity. Unpaid wages, restricted movement, injury, death, postwar claims, and coercive administration were costs displaced from the firm's accounts, not inexpensive labour or capital. Exact group ownership, plant accounts, internal transfer prices, credit terms, state purchases, production, and marque profitability remain open; without them, technical achievement and a complete product ladder cannot establish the efficiency of the concern as a whole.</p><!-- altwwii-writer-block:end -->"},
      {id:"experiments",title:"Front-wheel drive, rotary, and electronics",html:"<p>DKW and Audi led front-wheel-drive and compact development. Rotary engines received a longer commercial trial through NSU or an Auto Union relationship, while turbocharging, injection, and electronic controls entered higher models.</p><p>Fuel consumption, sealing, wear, and service needs prevented the rotary from displacing piston engines, but it survived in sports, generator, auxiliary-power, and unmanned applications.</p>"},
      {id:"1985",title:"Auto Union in 1985",html:"<p>By 1985 Auto Union was Germany's technical multi-marque counterweight to Volkswagen. DKW remained the inexpensive and motorcycle name. Audi occupied the advanced middle and upper-middle market. Horch supplied official and luxury cars. Wanderer retained a reduced or specialist identity.</p><p>The group's exact corporate constitution remained less important publicly than the promise embodied by four active rings: one concern could preserve several German schools of vehicle engineering.</p>"}
    ],
    related:[{href:"german-motor-industry.html",kicker:"National industry",label:"Motor Industry of Germany"},{href:"dkw.html",kicker:"Volume marque",label:"DKW"},{href:"wanderer.html",kicker:"Middle-market marque",label:"Wanderer"},{href:"audi-marque.html",kicker:"Technical-prestige marque",label:"Audi"},{href:"horch.html",kicker:"Luxury marque",label:"Horch"},{href:"volkswagenwerk.html",kicker:"Mass-market rival",label:"Volkswagenwerk"},{href:"motorsport.html",kicker:"Racing institution",label:"International Motorsport"}],
    facts:[["Formed","1932"],["Headquarters region","Chemnitz–Zwickau, Saxony"],["Marques","DKW · Wanderer · Audi · Horch"],["Postwar relocation","None"],["Mass-market arm","DKW"],["Technical-prestige arm","Audi"],["Luxury and official arm","Horch"],["1985 position","Multi-marque technical counterweight"],["Exact corporate statute","Open"]]
  },germanMotorSources),

  "borgward":motorArticle({
    title:"Borgward",category:"German companies",eyebrow:"Bremen motor concern · independent producer · managed reorganization",infoboxKicker:"German motor manufacturer",landscape:germanMotorLandscape,
    lead:"Borgward is the Bremen motor concern that survived the postwar conversion as Germany's strongest independent commercial and middle-market producer, then underwent a state-managed reorganization during the 1960s. Its commercial-vehicle division continued as Borgward Nutzfahrzeuge, while its excessive passenger-car range was sharply reduced and selected plants, dealers, or marques passed into larger German groups.",
    canon:"Bremen base, strong independent early position, commercial-vehicle and middle-market role, model and marque proliferation, 1960s financing crisis, preservation of Borgward Nutzfahrzeuge, reduction or transfer of passenger operations, and continued 1985 commercial identity are established as working canon. Exact crisis date, legal intervention, ownership, surviving passenger marques, transferees, output, and leadership remain open.",
    sections:[
      {"id":"reorganization-record","title":"Continuity of the commercial business","html":"<p>The Bremen concern's commercial operation continued as Borgward Nutzfahrzeuge after the passenger-range reorganization. The surviving truck and specialist-vehicle business retained the Borgward name. Hansa-Lloyd belongs to the earlier industrial inheritance of the group; it is distinct from the Hansa Jet aircraft designation.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The reorganization has not been assigned a single legal closing date, complete buyer list or final share register. Continued use of a marque therefore identifies an operating lineage rather than an unchanged corporate capitalization.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"origins",title:"Bremen origins",html:"<p>Carl Borgward built a Bremen vehicle group from components, small commercial vehicles, and the Hansa-Lloyd industrial inheritance. Port access, northern trade, and municipal and commercial demand distinguished it from the Saxon and southern manufacturers.</p><p>The firm entered the war as a producer of trucks and military vehicles as well as passenger designs.</p>"},
      {id:"conversion",title:"Postwar conversion",html:"<p>Borgward trucks were important in the released military fleet and in the replacement market that followed. The company supplied haulage, municipal, construction, agricultural, and reconstruction users before private cars became common.</p><p>Its passenger vehicles offered a middle-class alternative less politically symbolic than Volkswagen and less legally foreign than Opel or Ford-Werke.</p>"},
      {id:"independent",title:"The independent northern concern",html:"<p>Borgward preserved several internal brands and product families. This brought dealer reach and engineering variety but divided working capital, tooling, advertising, and management attention among too many projects.</p><p>State contracts and reconstruction demand disguised some of the weakness while the commercial-vehicle business remained strategically useful.</p>"},
      {id:"crisis",title:"The Borgward crisis",html:"<p>During the 1960s model proliferation and financing pressure produced a crisis. Berlin refused both an uncontrolled collapse and indefinite credit without reorganization.</p><p>The episode became Germany's clearest example of <em>managed industrial failure</em>: preservation of capacity and employment did not require preservation of every company, model, or shareholder claim.</p>"},
      {id:"reorganization",title:"Borgward Nutzfahrzeuge",html:"<p>The commercial-vehicle operation survived as <strong>Borgward Nutzfahrzeuge</strong>, retaining the Bremen engineering and truck identity. Passenger ranges were cut sharply.</p><p>Selected passenger plants, dealers, designs, or personnel passed to Auto Union or another national group. The precise allocation remains open.</p>"},
      {id:"products",title:"Commercial specialization",html:"<p>The reorganized concern concentrated on trucks, vans, municipal chassis, buses, fleet vehicles, colonial and rough-road packages, military transport, and specialist bodies. It competed through durability, maintainability, and a broad approved-body network.</p><p>Borgward no longer attempted to challenge Volkswagen across the entire passenger market.</p>"},
      {id:"politics",title:"A limit to protected competition",html:"<p>Supporters presented the intervention as proof that the state could rescue useful production without rewarding mismanagement. Critics saw favored groups receiving Borgward assets and Bremen losing an autonomous industrial champion.</p><p>The open corporate details remain politically significant because different legal settlements imply different answers about creditor losses, labor representation, and state ownership.</p>"},
      {id:"1985",title:"Borgward in 1985",html:"<p>By 1985 the Borgward name remained visible principally on commercial and specialist vehicles. Passenger-car heritage survived in a reduced marque, licensed design, or museum and enthusiast culture rather than as a full product ladder.</p><p>The company represented a characteristic German compromise: failure was permitted at the corporate level, but strategically useful machinery, skills, and service networks were not allowed to disappear.</p>"}
    ],
    related:[{href:"german-motor-industry.html",kicker:"National context",label:"Motor Industry of Germany"},{href:"auto-union.html",kicker:"Possible asset recipient",label:"Auto Union"},{href:"volkswagenwerk.html",kicker:"Mass-market contrast",label:"Volkswagenwerk"},{href:"surplus-motorization.html",kicker:"Early commercial demand",label:"Surplus Motorization"}],
    facts:[["Founded","Prewar Bremen motor concern"],["Principal region","Bremen"],["Postwar role","Independent middle-market and commercial producer"],["Crisis","1960s; exact date open"],["Surviving core","Borgward Nutzfahrzeuge"],["Passenger operations","Sharply reduced or transferred"],["1985 specialization","Commercial and specialist vehicles"],["Intervention form","Managed industrial reorganization"],["Final ownership","Open"]]
  },[...motorSettingSources,{href:"https://www.denkmalpflege.bremen.de/denkmaeler/lloyd-motoren-werke-halle-4-50893",label:"Bremen heritage authority — Borgward and Lloyd industrial history"}]),

  "american-independent-motor-industry":motorArticle({
  landscape:americanMotorLandscape,
  "title": "American independent motor industry",
  "category": "American motor industry",
  "eyebrow": "Companies · designs · vehicle development",
  "infoboxKicker": "American motor industry",
  "lead": "American passenger-car production remained divided among General Motors, Ford, Chrysler and several smaller concerns. Studebaker, Packard, Nash and Hudson maintained separate companies and engineering programmes. Kaiser later joined Willys in a utility-vehicle concern. The reorganization after the 1990 crash redistributed marques and plants among the surviving manufacturers.<sup class='canon-note' data-provenance='a'>[a]</sup>",
  "canon": "Author-established decisions are marked [a]; inherited facts before 1 August 1941 are marked [p]; incorporated transcript development is marked [e]. The chronology ends within the canon horizon of 5 January 2012. Product development, trials, authorization and sale are separate milestones.",
  "sections": [
    {
      "id": "inheritance",
      "title": "The 1941 manufacturer field",
      "html": "<p>General Motors, Ford and Chrysler were the largest groups at the divergence. Studebaker, Nash, Hudson, Packard, Willys and Crosley supplied additional passenger-car and utility markets. International Harvester combined commercial vehicles with agricultural machinery.<sup class='canon-note' data-provenance='p'>[p]</sup></p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Manufacturer</th><th>Principal opening lines</th></tr></thead><tbody><tr><td>General Motors</td><td>Chevrolet Special/Master Deluxe; Pontiac Torpedo/Streamliner; Oldsmobile 60/70/90; Buick Special/Super/Century/Roadmaster; Cadillac 61/62/63/67/75; GMC trucks</td></tr><tr><td>Ford</td><td>Special, Deluxe and Super Deluxe; Mercury Eight; Lincoln Zephyr and Continental; commercial vehicles</td></tr><tr><td>Chrysler</td><td>Plymouth P11/Deluxe/Special Deluxe; Dodge Luxury Liner; DeSoto Custom/Deluxe; Chrysler Royal/Windsor/Saratoga/New Yorker</td></tr><tr><td>Studebaker</td><td>Champion, Commander and President; trucks</td></tr><tr><td>Nash</td><td>Ambassador 600 and Ambassador Eight</td></tr><tr><td>Hudson</td><td>Six, Super Six and Commodore</td></tr><tr><td>Packard</td><td>One-Ten, One-Twenty, Super Eight and Clipper</td></tr><tr><td>Willys</td><td>Americar and the emerging utility-vehicle programme</td></tr><tr><td>Crosley</td><td>Small cars and wagons</td></tr><tr><td>International Harvester</td><td>Commercial trucks and agricultural machinery</td></tr></tbody></table></div><sup class='canon-note' data-provenance='p'>[p]</sup>"
    },
    {
      "id": "recovery",
      "title": "1942–1950",
      "html": "<p>Civilian development continued during the European war. Existing 1942 programmes were followed by mechanical refinements and more selective new bodies in the middle of the decade. Manufacturers did not receive the plant expansion and household purchasing-power surge of full American mobilization. New-car purchase remained a major household expense.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>Studebaker emphasized style and relatively light construction. Nash combined body packaging and climate control with the Kelvinator appliance business. Hudson developed low construction and handling. Packard retained luxury cars, engines and engineering. Crosley concentrated on small inexpensive vehicles. Willys supplied utility markets. Continued production gave the firms opportunities to improve existing platforms before committing to new tooling.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "households",
      "title": "Households and demand",
      "html": "<p>Postwar family formation was spread across years and regions. The 1960s automobile market did not depend upon a single unusually large youth cohort.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>Personal-performance cars could appeal to pilots, engineers, veterans, women and older drivers alongside young adults. A large domestic market and several durable platforms supported differentiated firms, but not every independent needed Chevrolet-like volume. Longer platform lives and selective low-volume bodies limited tooling costs.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "independents",
      "title": "Passenger-car manufacturers",
      "html": "<p>Studebaker and Packard maintained separate engineering programmes and sold their 1958 cars under their own names. Studebaker manufactured passenger cars and trucks. Packard produced prestige automobiles, engines and engineering work. Nash operated alongside Kelvinator’s appliance business. Hudson retained its own passenger-car and performance programmes. Neither pair formed a merged automobile corporation.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>Kaiser began independently and later joined Willys. Kaiser–Willys concentrated on utility vehicles, light trucks, military transport and exports by 1970. Its Kaiser experimental activity was distinct from a large Kaiser–Frazer mass-market passenger-car venture. Tucker remained a failed challenger; Crosley survived in small sporting, utility and institutional markets.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "products",
      "title": "1951–1985",
      "html": "<p>The independent firms developed different products from durable platforms. Studebaker’s Hawk, Lark and Avanti occupied different price and styling positions. Packard’s Patrician, Caribbean and heritage cars combined formal luxury with increasingly elaborate controls. Nash’s Rambler and senior touring cars emphasized interior space, comfort and range. Hudson’s Step-Down II, Hornet and later Four-Control programme emphasized chassis behavior.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>Cheap petroleum and abundant electrical generation supported continued piston-engine production alongside turbine and electric experiments. Chrysler’s Turboflite became a limited customer car in 1962. General Motors developed turbines, electric trials and Firebird control studies. The multi-company exposition distinguished current products from prototypes and longer-term studies. Survival did not require every manufacturer to replace an entire platform annually.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "specialists",
      "title": "Specialists and constructors",
      "html": "<p>Tucker remained a failed challenger whose engineering and vehicle attracted later interest. It was not an active mass-market marque in the later industry. Kaiser’s independent experimental cars likewise did not establish a large Kaiser–Frazer passenger-car concern. The later Kaiser–Willys utility combination had a separate business basis.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>Shelby American worked with Ford on high-performance derivatives while retaining a distinct constructor role. All American Racers, using the Eagle identity, and Penske supplied a different American racing-constructor branch. They were not new mass-market road-car marques.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The 1977 international racing opening gave Eagle a principal Formula One effort and Penske a stronger Formula Two and selected Formula One programme. Learning about tires, brake cooling, low mass, underbody aerodynamics and data collection influenced later American vehicle engineering. <sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "reorganization",
      "title": "Reorganization after the 1990 crash",
      "html": "<p>The American Open Markets and Reciprocal Investment Act opened trade and investment in 1985. The Reciprocal Commerce and Enterprise Act widened the opening in 1987. After the ownership inquiry and the forced divestitures of 1990, trading fell sharply in September and October. Ford Motor Company was broken up during the reorganization. General Motors and Chrysler continued in business and sold parts of their passenger-car operations.<sup class='canon-note' data-provenance='a'>[a]</sup></p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Former owner</th><th>Recipient</th><th>Business or assets</th></tr></thead><tbody><tr><td>Ford Motor Company</td><td><a href='studebaker.html'>Studebaker</a></td><td>American Ford passenger-car marque and selected assembly and engineering operations</td></tr><tr><td>Ford Motor Company</td><td><a href='packard.html'>Packard</a></td><td>Lincoln–Continental and associated luxury-car facilities</td></tr><tr><td>Ford Motor Company</td><td><a href='nash-kelvinator.html'>Nash</a></td><td>Mercury</td></tr><tr><td>Ford Motor Company</td><td><a href='international-harvester.html'>International Harvester</a></td><td>Much of the truck and commercial-vehicle business</td></tr><tr><td>Ford Motor Company</td><td><a href='ford-werke.html'>Separate German-owned Ford-Werke</a></td><td>American equity interest in the German operation</td></tr><tr><td>General Motors</td><td><a href='hudson-motor-car-company.html'>Hudson</a></td><td>Pontiac</td></tr><tr><td>Chrysler</td><td><a href='kaiser-willys.html'>Kaiser–Willys</a></td><td>Plymouth</td></tr></tbody></table></div><sup class='canon-note' data-provenance='a'>[a]</sup><p>German trustees had directed Ford-Werke before the sale of the American interest. Ford-Werke and the American Ford passenger-car business continued to use the Ford name under separate ownership. By the 1992 automobile exposition, the American Ford marque belonged to Studebaker. There was no new Ford display in the marque’s former exhibition space.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    },
    {
      "id": "mobility",
      "title": "Markets and transport",
      "html": "<p>Automobiles remained important for commuting, shopping, rural access, recreation and travel to railway stations and airfields. Rail and aviation carried a larger share of long-distance passenger and freight traffic. The United States did not build the historical national Interstate programme; state roads, turnpikes, local expressways and commercial trucking nevertheless remained important.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>Later vehicle production included preserved styling families, modern heritage cars and low-volume technological flagships. Modular manufacture allowed more buyer choice within supported chassis, powertrain and body combinations. Complete electronic-vision bodies and planetary mobility remained specialized applications rather than the normal configuration of every car.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "assessment-r",
      "title": "Industrial capacity and finance",
      "html": "<!-- altwwii-writer-block:start id=wb-r-20260816-t9h4c writer=r kind=analysis created=2026-08-16T12:43:00-06:00 --><p>Automobile competition required more than a successful design. Body dies, engine families, assembly tooling, dealer inventories, parts distribution, warranties, advertising, and consumer finance committed capital before the sale. The Big Three could spread those fixed costs across more models and buyers. Independent survival therefore depended upon using different capital: Nash-Kelvinator's appliance earnings and refrigeration assets, Studebaker's truck business and Packard's engines and government engineering, and Kaiser–Willys's utility, military, and export demand.</p><p>Diversification supplied patient capital through a vehicle downturn and transferred useful knowledge among businesses. It could also conceal which automobile line earned its cost of capital. Government orders and regional credit had the same ambiguity. They preserved tooling, dealers, suppliers, and design teams that might be valuable in a later market or emergency, while allowing an unsuccessful model or plant to avoid the judgment delivered by consumers and creditors.</p><p>Competitive survival could be assessed through repeat private sales, warranty cost, resale value, fleet operating cost, dealer solvency, export receipts, government-contract margins, credit subsidy, and the cost of converting or closing a plant. Procurement promoted plural capacity when performance specifications permitted several firms to bid and winners bore meaningful production risk. It protected an incumbent when contracts reimbursed chronic failure or existed chiefly to keep a chosen balance sheet whole. The 1982 closures supplied part of the selection the earlier credit system had deferred. Restrictions on wholesale foreign acquisition preserved domestic control but also removed potential buyers and changed the price at which failing assets could be reorganized.</p><!-- altwwii-writer-block:end -->"
    },
    {
      "id": "assessment-k",
      "title": "Industrial capacity and finance",
      "html": "<!-- altwwii-writer-block:start id=wb-k-20260816-j4c7m writer=k kind=analysis created=2026-08-16T13:24:00-06:00 --><p>The strategic unit was larger than an individual automobile line and smaller than the continued existence of every independent company. Engine machining, axle and transmission production, foundries, body presses, tool-and-die firms, proving grounds, parts distribution, trained dealers, and repair shops formed a regional production network. An assembler's closure could remove enough volume to close suppliers also serving other manufacturers. The price of the failing firm did not include the replacement time for those shared capabilities.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Capability claim</th><th>Operational evidence</th><th>Failure response</th></tr></thead><tbody><tr><td>Supplier continuity</td><td>Qualified sources, usable tooling, common parts, delivery performance, and reliance on each customer's volume</td><td>Open qualification to other manufacturers, transfer tools, or finance conversion to a viable product</td></tr><tr><td>Skilled workforce</td><td>Apprentice intake, retained engineers and toolmakers, documented processes, and production-quality records</td><td>Replace management, fund retraining, or move teams and records to a successor plant</td></tr><tr><td>Emergency vehicle production</td><td>Trial lots or exercises for trucks, utility vehicles, engines, generators, and replacement parts</td><td>Withdraw readiness payment when conversion time, quality, or throughput fails the specification</td></tr><tr><td>Regional industrial depth</td><td>Several customers, transport and power access, service coverage, and supplier survival through a defined downturn</td><td>Rebid public work, consolidate facilities, or accept closure when another region can replace the network in time</td></tr></tbody></table></div><p>Countercyclical fleet orders could carry a useful network through a temporary collapse in household purchases. Shared testing, supplier qualification, retooling credit, training support, and reserves of difficult parts could preserve the option to expand production during an emergency. These instruments needed published performance requirements and competition among Nash, Hudson, Studebaker, Packard, Kaiser–Willys, the Big Three, and qualified component firms. Agencies could define the vehicle function, conversion time, maintainability, domestic dependency limit, and required surge output while firms retained design, production methods, purchasing, staffing, and commercial prices.</p><p>Mercer's segment account remained necessary. Commercial passenger models, strategic engines, utility vehicles, supplier reserves, and regional employment served different purposes and required separate costs. A company could lose an uncompetitive car line while its engine works or parts network passed to another owner. Shareholders and creditors could absorb losses, managers could be removed, and plants could be converted while a public contract continued to purchase an independently tested capability.</p><p>Plural production reduced the risk that one strike, design error, financial failure, or foreign interruption removed every domestic alternative. It also imposed visible costs through procurement premiums, credit risk, retained excess plant, and delayed imports or consolidation. Consumers might have preferred lower vehicle prices and accepted a narrower domestic industry. The capacity account identifies the suppliers, skills, regions, and emergency output purchased during the downturn; it does not establish that this insurance was their preferred use of capital.</p><!-- altwwii-writer-block:end -->"
    }
  ],
  "related": [
    {
      "href": "studebaker.html",
      "kicker": "Related article",
      "label": "Studebaker"
    },
    {
      "href": "packard.html",
      "kicker": "Related article",
      "label": "Packard"
    },
    {
      "href": "nash-kelvinator.html",
      "kicker": "Related article",
      "label": "Nash-Kelvinator"
    },
    {
      "href": "hudson-motor-car-company.html",
      "kicker": "Related article",
      "label": "Hudson"
    },
    {
      "href": "kaiser-willys.html",
      "kicker": "Related article",
      "label": "Kaiser–Willys"
    },
    {
      "href": "american-motor-industry-reorganization.html",
      "kicker": "Related article",
      "label": "Motor-industry reorganization"
    },
    {
      "href": "american-motorcycle-industry.html",
      "kicker": "Related article",
      "label": "American motorcycle industry"
    },
    {
      "href": "american-transportation-expositions.html",
      "kicker": "Related article",
      "label": "Transportation expositions"
    },
    {
      "href": "american-demographic-transition.html",
      "kicker": "Households and markets",
      "label": "American demographic transition"
    }
  ],
  "facts": [
    [
      "Opening large groups",
      "General Motors · Ford · Chrysler"
    ],
    [
      "Separate independents",
      "Studebaker · Packard · Nash · Hudson"
    ],
    [
      "Utility concern",
      "Kaiser–Willys"
    ],
    [
      "Crash",
      "1990"
    ],
    [
      "Ford passenger successor",
      "Studebaker"
    ],
    [
      "Individual asset closing dates",
      "Not established"
    ]
  ],
  "sources": [
    {
      "href": "../materialCultureReference%20-%20AltWWII.md",
      "label": "Material culture and civilian industry"
    },
    {
      "href": "../settingBible%20-%20AltWWII.md",
      "label": "Setting Bible"
    }
  ],
  "categories": [
    "United States",
    "Motor industry",
    "Civilian technology"
  ]
}, [{"href": "../materialCultureReference%20-%20AltWWII.md", "label": "Material culture and civilian industry"}, {"href": "../settingBible%20-%20AltWWII.md", "label": "Setting Bible"}]),
  "american-motors-corporation":motorArticle({
  "title": "Nash and Hudson",
  "category": "Manufacturer index",
  "eyebrow": "Companies · designs · vehicle development",
  "infoboxKicker": "Manufacturer index",
  "lead": "Nash and Hudson were separate American manufacturers. Nash combined automobile production with Kelvinator’s appliance and refrigeration business. Hudson maintained its own passenger-car, engine and handling programmes.<sup class='canon-note' data-provenance='a'>[a]</sup>",
  "canon": "This legacy URL is retained as a navigation page. The historical Nash–Hudson merger and American Motors Corporation are not setting history; the direct author decision supersedes the former article.",
  "sections": [
    {
      "id": "manufacturers",
      "title": "Manufacturers",
      "html": "<p><a href='nash-kelvinator.html'>Nash-Kelvinator</a> produced the Rambler family and senior touring cars, and later acquired Mercury. <a href='hudson-motor-car-company.html'>Hudson Motor Car Company</a> developed the Hornet and Four-Control programmes and acquired Pontiac after the crash.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    },
    {
      "id": "industry",
      "title": "Industry records",
      "html": "<p>The companies’ model histories, ownership and later operations are recorded in their separate articles. Their shared place among the independent producers is covered in the <a href='american-independent-motor-industry.html'>American independent motor industry</a>.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    }
  ],
  "related": [
    {
      "href": "nash-kelvinator.html",
      "kicker": "Related article",
      "label": "Nash-Kelvinator"
    },
    {
      "href": "hudson-motor-car-company.html",
      "kicker": "Related article",
      "label": "Hudson Motor Car Company"
    }
  ],
  "facts": [
    [
      "Nash",
      "Separate company"
    ],
    [
      "Hudson",
      "Separate company"
    ]
  ],
  "sources": [
    {
      "href": "../materialCultureReference%20-%20AltWWII.md",
      "label": "Material culture and civilian industry"
    },
    {
      "href": "../settingBible%20-%20AltWWII.md",
      "label": "Setting Bible"
    }
  ],
  "categories": [
    "United States",
    "Motor industry",
    "Civilian technology"
  ]
}, [{"href": "../materialCultureReference%20-%20AltWWII.md", "label": "Material culture and civilian industry"}, {"href": "../settingBible%20-%20AltWWII.md", "label": "Setting Bible"}]),
  "studebaker-packard":motorArticle({
  "title": "Studebaker and Packard",
  "category": "Manufacturer index",
  "eyebrow": "Companies · designs · vehicle development",
  "infoboxKicker": "Manufacturer index",
  "lead": "Studebaker and Packard were separate American automobile companies. Studebaker produced passenger cars and trucks; Packard concentrated on prestige automobiles, engines and engineering work.<sup class='canon-note' data-provenance='a'>[a]</sup>",
  "canon": "This legacy URL is retained for navigation. Studebaker and Packard never merge in setting history; the former merger article is superseded by the author decision.",
  "sections": [
    {
      "id": "companies",
      "title": "Companies",
      "html": "<p><a href='studebaker.html'>Studebaker</a> developed its own Hawk engines and later acquired the American Ford passenger-car business. <a href='packard.html'>Packard</a> maintained independent luxury-car engineering and later acquired Lincoln–Continental.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    },
    {
      "id": "records",
      "title": "Company records",
      "html": "<p>The firms’ separate development, products and post-crash acquisitions are covered in their own articles. Their wider industrial context is recorded in the <a href='american-independent-motor-industry.html'>American independent motor industry</a>.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    }
  ],
  "related": [
    {
      "href": "studebaker.html",
      "kicker": "Related article",
      "label": "Studebaker"
    },
    {
      "href": "packard.html",
      "kicker": "Related article",
      "label": "Packard"
    }
  ],
  "facts": [
    [
      "Studebaker",
      "Separate company"
    ],
    [
      "Packard",
      "Separate company"
    ]
  ],
  "sources": [
    {
      "href": "../materialCultureReference%20-%20AltWWII.md",
      "label": "Material culture and civilian industry"
    },
    {
      "href": "../settingBible%20-%20AltWWII.md",
      "label": "Setting Bible"
    }
  ],
  "categories": [
    "United States",
    "Motor industry",
    "Civilian technology"
  ]
}, [{"href": "../materialCultureReference%20-%20AltWWII.md", "label": "Material culture and civilian industry"}, {"href": "../settingBible%20-%20AltWWII.md", "label": "Setting Bible"}]),
  "kaiser-willys":motorArticle({
  "title": "Kaiser–Willys",
  "category": "American motor industry",
  "eyebrow": "Companies · designs · vehicle development",
  "infoboxKicker": "American motor industry",
  "lead": "Kaiser–Willys was an American motor concern with Jeep, utility wagons, light trucks, military transport and export businesses. Kaiser began independently before joining Willys. After the 1990 crash the concern acquired Plymouth, adding a conventional passenger-car line beside its utility vehicles.<sup class='canon-note' data-provenance='a'>[a]</sup>",
  "canon": "Author-established decisions are marked [a]; inherited facts before 1 August 1941 are marked [p]; incorporated transcript development is marked [e]. The chronology ends within the canon horizon of 5 January 2012. Product development, trials, authorization and sale are separate milestones.",
  "sections": [
    {
      "id": "origins",
      "title": "Kaiser and Willys",
      "html": "<p>Willys-Overland’s opening passenger-car programme included the Americar.<sup class='canon-note' data-provenance='p'>[p]</sup></p><p>Jeep utility work served farms, forestry, surveyors, mines, local government and rough-road commercial fleets. Kaiser’s independent experimental activity remained smaller than a major mass-market passenger-car venture. Kaiser later combined with Willys during the 1950s; the exact legal date and sequence are not established.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"
    },
    {
      "id": "utility",
      "title": "Jeep and utility vehicles",
      "html": "<p>Jeep became a product identity broader in public use than an individual model name. Open CJ-type vehicles, pickups and wagons supplied different utility markets. The Willys Aero passenger-car line retained a corporate identity beyond Jeep.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>Philippine service experience improved filtration, cooling, corrosion protection, electrical sealing, suspension and accessibility. Veterans also broadened interest in a comfortable personal four-wheel-drive vehicle. The later Wagoneer and recreational branches developed alongside work vehicles.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The 1952 Aero-Willys passenger family included Aero-Lark, Aero-Wing and Aero-Ace. These more conventional passenger cars were separate from the open Jeep, utility pickup and wagon lines. The 1962 family four-wheel-drive development led toward the Wagoneer programme, adding hard-body weather protection, heating, more comfortable suspension and rural family use.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "markets",
      "title": "Markets and equipment",
      "html": "<p>The concern supplied rural households, utilities, survey crews, public agencies and military and export customers. Field repair, spares, winches, specialized bodies and power takeoffs mattered alongside the basic vehicle. By 1970 utility vehicles and light trucks formed the company’s principal market.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>International Harvester remained an important American competitor, while Land-Rover, Toyota, Nissan and other foreign makers supplied different regional markets. This comparison does not imply a common parent or shared corporate history.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "plymouth",
      "title": "Plymouth",
      "html": "<p>Plymouth passed from Chrysler to Kaiser–Willys in the reorganization following the 1990 crash. It retained its own passenger-car identity beside Jeep and the utility lines.<sup class='canon-note' data-provenance='a'>[a]</sup></p><p>Prowler gave the later Plymouth programme a modern hot-rod branch. The 1999 Howler study combined that form with a cargo-bed and utility interpretation. These were later products under new ownership, not evidence that earlier Chrysler Plymouths belonged to Kaiser–Willys.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    },
    {
      "id": "later",
      "title": "Later utility work",
      "html": "<p>The 2001 planetary-mobility challenge gave Jeep and the concern’s utility engineers a further venue for sealed components, dust protection, electric wheel drive and serviceable equipment. Exhibition proposals should be distinguished from an adopted production Mars fleet.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"
    }
  ],
  "related": [
    {
      "href": "international-harvester.html",
      "kicker": "Related article",
      "label": "International Harvester"
    },
    {
      "href": "chrysler-corporation.html",
      "kicker": "Related article",
      "label": "Chrysler"
    },
    {
      "href": "american-experimental-vehicles.html",
      "kicker": "Related article",
      "label": "Experimental vehicles"
    },
    {
      "href": "american-motor-industry-reorganization.html",
      "kicker": "Related article",
      "label": "Reorganization"
    }
  ],
  "facts": [
    [
      "Combination",
      "1950s; exact legal date open"
    ],
    [
      "Core identities",
      "Jeep · Willys · Kaiser"
    ],
    [
      "1970 emphasis",
      "Utility vehicles · light trucks"
    ],
    [
      "Post-crash acquisition",
      "Plymouth"
    ],
    [
      "1990s Plymouth programmes",
      "Prowler · Howler"
    ]
  ],
  "sources": [
    {
      "href": "../materialCultureReference%20-%20AltWWII.md",
      "label": "Material culture and civilian industry"
    },
    {
      "href": "../settingBible%20-%20AltWWII.md",
      "label": "Setting Bible"
    }
  ],
  "categories": [
    "United States",
    "Motor industry",
    "Civilian technology"
  ]
}, [{"href": "../materialCultureReference%20-%20AltWWII.md", "label": "Material culture and civilian industry"}, {"href": "../settingBible%20-%20AltWWII.md", "label": "Setting Bible"}])
});

function addMotorLinks(slug,links){
  const article=window.deepArticles[slug];
  if(!article)return;
  article.related=article.related||[];
  const known=new Set(article.related.map(item=>item.href));
  links.forEach(item=>{if(!known.has(item.href))article.related.unshift(item);});
}
addMotorLinks("surplus-motorization",[
  {href:"italian-motor-industry.html",kicker:"Italian surplus and replacement system",label:"Motor Industry of Italy"},
  {href:"german-motor-industry.html",kicker:"Replacement-cliff industry",label:"Motor Industry of Germany"},
  {href:"american-independent-motor-industry.html",kicker:"American consolidation",label:"American Independent Motor Industry"}
]);
addMotorLinks("material-culture",[
  {href:"german-motor-industry.html",kicker:"National vehicle system",label:"Motor Industry of Germany"},
  {href:"american-independent-motor-industry.html",kicker:"Independent manufacturers",label:"American Independent Motor Industry"}
]);
addMotorLinks("motorsport",[
  {href:"german-motor-industry.html",kicker:"German transfer system",label:"Motor Industry of Germany"},
  {href:"american-independent-motor-industry.html",kicker:"American manufacturer field",label:"American Independent Motor Industry"}
]);


// Vehicle reference index; neutral navigation addition.
{
  for (const slug of ["american-independent-motor-industry", "german-motor-industry"]) {
    const article=window.deepArticles[slug];
    if(article){article.related=article.related||[];if(!article.related.some(item=>item.href==="road-vehicle-index.html"))article.related.push({href:"road-vehicle-index.html",kicker:"Road vehicle index — marque and year",label:"Road Vehicle Index"});}
  }
}
