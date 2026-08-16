window.deepArticles = window.deepArticles || {};

const italianInfantrySources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Latin ammunition policy and Italian infantry-weapons registry"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Italy and the Latin institutional system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar Latin military coordination"},
  {href:"../transcript.md",label:"Master Transcript — Italian industry and Latin procurement"}
];

const italianInfantryLandscape = {
  src:"assets/diagrams/italian-infantry-weapons-and-latin-standards.svg",
  alt:"Timeline of Italian rifles and machine guns beside Latin ammunition and mounting standards from 1947 to 1982",
  caption:"Italy moves from a national 7.35 mm rifle to common Latin cartridges while retaining its own weapons and manufacturers"
};

const italianInfantryArticle = config => ({
  category:"Military equipment",
  eyebrow:"Italian infantry weapon",
  landscape:italianInfantryLandscape,
  ...config,
  sources:italianInfantrySources,
  categories:config.categories || ["Italy","Infantry weapons","Small arms","Royal Italian Army"]
});

Object.assign(window.deepArticles, {
  "latin-land-ammunition-standards": italianInfantryArticle({
    title:"Latin Land-Ammunition Standards",
    eyebrow:"Latin bloc land-armaments policy · 1958–1980s",
    infoboxKicker:"Selective common standardization",
    infoboxTitle:"Latin land-ammunition standards",
    lead:"The Latin bloc standardizes selected cartridges and interfaces while preserving national weapons industries. The 7×51 mm LC becomes the common full-power rifle and machine-gun cartridge in 1958, 5.6×45 mm LC the common small-caliber assault-rifle cartridge in 1968, 25×137 mm and 30×170 mm the principal light-vehicle cannon rounds, 105×617R mm the shared 1960s tank cartridge, and 120×560R mm LC the new tank cartridge of the 1980s.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-t7h3r writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The selective-standardization principle, six named ammunition standards, their roles and stated adoption eras, Italian 7.35×51 mm and Spanish 7×57 mm reserve retention, and Guida Comune 79's function, AR-82 association, and independence from Picatinny are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Guida Comune 79's exact adoption date, projectile construction, case material, pressure, velocity, chamber tolerances, proof rules, manufacturers, packaging, interchange limits, national loadings, stockpile quantities, conversion schedules, and interface dimensions remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"policy",title:"Selective standardization",html:"<p>Latin coordination establishes common ammunition dimensions and selected interfaces without creating one rifle, cannon, tank, or procurement ministry. Italy, Spain, Occitania, Portugal, and other participants retain national design bureaus, factories, service tests, and competing equipment.</p><p>Compatibility consequently operates at a defined technical layer. A common cartridge does not prove identical weapons, magazines, belts, sights, doctrine, or projectile mixes.</p>"},
      {id:"registry",title:"Standard register",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Standard</th><th>Adoption</th><th>Principal role</th><th>Representative equipment</th></tr></thead><tbody><tr><td>7×51 mm LC</td><td>1958</td><td>Full-power rifle and machine gun</td><td><a href='fucile-automatico-58.html'>Fucile Automatico 58</a>; <a href='mitragliatrice-59.html'>Mitragliatrice 59</a></td></tr><tr><td>5.6×45 mm LC</td><td>1968</td><td>Small-caliber assault rifle</td><td><a href='beretta-ar-68.html'>Beretta AR-68</a>; <a href='beretta-ar-82.html'>Beretta AR-82</a></td></tr><tr><td>25×137 mm</td><td>Postwar common standard</td><td>Light-vehicle cannon</td><td><a href='vcc-72-dardo.html'>VCC-72 Dardo</a>; <a href='sidam-76.html'>SIDAM-76</a></td></tr><tr><td>30×170 mm</td><td>Postwar common standard</td><td>Light-vehicle cannon</td><td>Occitan Sanglier family</td></tr><tr><td>105×617R mm</td><td>1960s</td><td>Tank gun</td><td><a href='carro-68-leone-ii.html'>Carro 68 Leone II</a></td></tr><tr><td>120×560R mm LC</td><td>1980s</td><td>Tank gun</td><td><a href='carro-80-ariete-ii.html'>Carro 80 Ariete II</a></td></tr><tr><td><a href='guida-comune-79.html'>Guida Comune 79</a></td><td>Exact date open; used by 1982</td><td>Optical and accessory mounting bar</td><td><a href='beretta-ar-82.html'>Beretta AR-82</a></td></tr></tbody></table></div>"},
      {id:"full-power",title:"The 7 mm full-power system",html:"<p>7×51 mm LC replaces national full-power rifle cartridges in first-line standardized weapons from 1958. Italy adopts it in the Fucile Automatico 58 and Mitragliatrice 59, while Spain adopts it in its Fusil Automático and Ametralladora families.</p><p>The common cartridge supports rifle and belt-fed machine-gun supply. Magazine interchangeability, belt links, projectile loadings, and national proof marks remain separate questions.</p>"},
      {id:"small-caliber",title:"The 5.6 mm assault-rifle system",html:"<p>5.6×45 mm LC becomes the common small-caliber assault-rifle cartridge in 1968. Italy's Beretta AR-68 enters service that year, followed by the modular AR-82 in 1982. Spain's Fusil Automático 72 supplies a separate national weapon in the same ammunition family.</p>"},
      {id:"vehicle",title:"Light-vehicle cannon cartridges",html:"<p>25×137 mm and 30×170 mm are the principal Latin light-vehicle cannon cartridges. Italy uses 25×137 mm in Dardo and SIDAM-76; Occitania uses the larger 30×170 mm system in the Sanglier infantry fighting vehicle.</p><p>The standard does not establish that air-defense and ground-target rounds share projectile construction, fuzes, feeds, or ballistic tables.</p>"},
      {id:"tank",title:"Tank-gun cartridges",html:"<p>105×617R mm supplies the shared 1960s tank-gun dimension used by the OTO L/52 of Leone II. The new 120×560R mm LC standard accompanies the 1980s transition to the Ariete II's OTO L/44 smoothbore.</p><p>Common dimensions permit coalition stockpiling and industrial coordination. Exact ammunition families, penetrators, propellants, practice rounds, and compatibility across every national gun remain open.</p>"},
      {id:"reserve",title:"National reserve stocks",html:"<p>Italy retains 7.35×51 mm and Spain retains 7×57 mm in reserve after common standardization. Older rifles, training stocks, local-defense arms, and mobilization reserves therefore continue to impose national ammunition requirements.</p><p>The date and completeness of conversion in each service remain open.</p>"},
      {id:"interface",title:"Guida Comune 79",html:"<p>The <a href='guida-comune-79.html'>Guida Comune 79</a> is the bloc's common optical and accessory mounting bar. It supports interoperable mounting practice without requiring one common sight or rifle.</p><p>It is not Picatinny. Dimensions, clamps, recoil stops, certified accessories, and compatibility with German, British, Japanese, or later American interfaces remain open.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"National small-arms sequence",label:"Italian Infantry Weapons"},{href:"guida-comune-79.html",kicker:"Common accessory interface",label:"Guida Comune 79"},{href:"italian-tank-lineage.html",kicker:"Tank-cartridge users",label:"Italian Tank Lineage"},{href:"italian-mechanized-support-systems.html",kicker:"Light-cannon users",label:"Italian Mechanized and Support Systems"},{href:"latin-bloc.html",kicker:"Institutional setting",label:"Latin Bloc"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Alignment","Latin Bloc"],["Policy","Selective standardization"],["Full-power cartridge","7×51 mm LC · 1958"],["Assault-rifle cartridge","5.6×45 mm LC · 1968"],["Light-cannon cartridges","25×137 mm; 30×170 mm"],["1960s tank cartridge","105×617R mm"],["1980s tank cartridge","120×560R mm LC"],["Accessory interface","Guida Comune 79"],["Italian reserve cartridge","7.35×51 mm"],["Spanish reserve cartridge","7×57 mm"]]
  }),

  "italian-infantry-weapons": italianInfantryArticle({
    title:"Italian Infantry Weapons",
    eyebrow:"Italian small-arms sequence · 1947–1982",
    infoboxKicker:"National infantry-weapons registry",
    infoboxTitle:"Italian infantry weapons",
    lead:"Italian infantry weapons move from the national 7.35×51 mm Fucile Modello 47 through the common Latin 7×51 mm battle-rifle and machine-gun system to 5.6×45 mm assault rifles. The Fucile Automatico 58 and Mitragliatrice 59 establish full-power standardization; the Beretta AR-68 becomes the ordinary small-caliber assault rifle; and the modular Beretta AR-82 adds the Guida Comune 79 accessory interface.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-u4j8s writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The five registry weapons, names, introduction dates, cartridges, feeds, standard roles, AR-82 modular character, AR-82 use of Guida Comune 79, and Latin standardization context are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Operating mechanisms, dimensions, masses, barrel lengths, rates of fire, sights, controls, furniture, bayonets, grenade capability, manufacturers beyond the Beretta names, production totals, variants, issue scales, units, exports, and combat histories remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"registry",title:"Service-weapons register",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Weapon</th><th>Introduction</th><th>Cartridge</th><th>Feed</th><th>Role</th></tr></thead><tbody><tr><td><a href='fucile-modello-47.html'>Fucile Modello 47</a></td><td>1947</td><td>7.35×51 mm</td><td>10-round magazine</td><td>Semiautomatic service rifle</td></tr><tr><td><a href='fucile-automatico-58.html'>Fucile Automatico 58</a></td><td>1958</td><td>7×51 mm LC</td><td>20-round magazine</td><td>Selective-fire battle rifle</td></tr><tr><td><a href='mitragliatrice-59.html'>Mitragliatrice 59</a></td><td>1959</td><td>7×51 mm LC</td><td>Disintegrating belt</td><td>Latin-standard GPMG</td></tr><tr><td><a href='beretta-ar-68.html'>Beretta AR-68</a></td><td>1968</td><td>5.6×45 mm LC</td><td>30-round magazine</td><td>Standard assault rifle</td></tr><tr><td><a href='beretta-ar-82.html'>Beretta AR-82</a></td><td>1982</td><td>5.6×45 mm LC</td><td>30-round magazine</td><td>Modular late-generation assault rifle</td></tr></tbody></table></div>"},
      {id:"inheritance",title:"The 7.35 mm national inheritance",html:"<p>The Fucile Modello 47 enters service in the victory year with Italy's retained 7.35×51 mm cartridge. Its semiautomatic action and ten-round magazine supply a postwar rifle without waiting for the later Latin common cartridge.</p><p>Italy retains 7.35 mm reserve stocks after frontline standardization.</p>"},
      {id:"full-power",title:"The 7 mm LC generation",html:"<p>The Fucile Automatico 58 makes 7×51 mm LC the selective-fire rifle cartridge in Italian service. Mitragliatrice 59 follows one year later with a disintegrating belt, creating a common full-power rifle and machine-gun ammunition family.</p>"},
      {id:"ar68",title:"Beretta AR-68",html:"<p>The <a href='beretta-ar-68.html'>AR-68</a> enters service with the 5.6×45 mm LC standard in 1968. A thirty-round magazine and assault-rifle role place the ordinary individual weapon on the bloc's new small-caliber system.</p>"},
      {id:"ar82",title:"Beretta AR-82",html:"<p>The <a href='beretta-ar-82.html'>AR-82</a> is the modular late-generation successor. It retains the 5.6×45 mm LC cartridge and thirty-round magazine while adding the <a href='guida-comune-79.html'>Guida Comune 79</a> mounting bar for optics and accessories.</p>"},
      {id:"gpmg",title:"Mitragliatrice 59",html:"<p>The <a href='mitragliatrice-59.html'>Mitragliatrice 59</a> is the Latin-standard general-purpose machine gun of the Italian registry. Its full-power cartridge and disintegrating belt preserve sustained-fire capability after the standard individual rifle moves to 5.6 mm.</p>"},
      {id:"distribution",title:"Overlapping service",html:"<p>New rifle adoption does not remove earlier ammunition immediately. Frontline formations, reserve units, training establishments, colonial garrisons, police, clients, and mobilization stores may retain different generations.</p><p>Exact conversion schedules and allocations are open.</p>"},
      {id:"industry",title:"Industry and bloc coordination",html:"<p>Beretta names identify the two small-caliber assault rifles. The registry does not assign the earlier rifles or machine gun to a manufacturer.</p><p>Latin standards coordinate cartridges and the later mounting interface while allowing Italian, Spanish, and Occitan weapons to remain distinct.</p>"}
    ],
    related:[{href:"fucile-modello-47.html",kicker:"Victory-year rifle",label:"Fucile Modello 47"},{href:"fucile-automatico-58.html",kicker:"Full-power battle rifle",label:"Fucile Automatico 58"},{href:"mitragliatrice-59.html",kicker:"General-purpose machine gun",label:"Mitragliatrice 59"},{href:"beretta-ar-68.html",kicker:"Standard assault rifle",label:"Beretta AR-68"},{href:"beretta-ar-82.html",kicker:"Modular successor",label:"Beretta AR-82"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge system",label:"Latin Land-Ammunition Standards"}],
    facts:[["Country","Kingdom of Italy"],["Coverage","1947–1982"],["Registry weapons","Five"],["National cartridge","7.35×51 mm"],["Full-power standard","7×51 mm LC"],["Small-caliber standard","5.6×45 mm LC"],["Standard 1968 rifle","Beretta AR-68"],["Late-generation rifle","Beretta AR-82"],["General-purpose machine gun","Mitragliatrice 59"],["Accessory interface","Guida Comune 79"]]
  }),

  "fucile-modello-47": italianInfantryArticle({
    title:"Fucile Modello 47",
    eyebrow:"Italian service rifle · entered service 1947",
    infoboxKicker:"Semiautomatic service rifle",
    infoboxTitle:"Fucile Modello 47",
    lead:"The Fucile Modello 47 is Italy's semiautomatic victory-year service rifle. Introduced in 1947, it uses the national 7.35×51 mm cartridge and a ten-round magazine, bridging wartime Italian ammunition practice to the later Latin-standard Fucile Automatico 58.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-v9k5t writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The formal name, 1947 introduction, 7.35×51 mm cartridge, ten-round magazine, semiautomatic operation, service-rifle role, and later reserve-cartridge context are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Manufacturer, mechanism, dimensions, mass, barrel length, sights, magazine details, loading method, bayonet, accessories, production total, variants, units, exports, combat history, and retirement remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Modello 47 enters service in the year of the European settlement. It gives the victorious Italian army a semiautomatic standard rifle before the Latin bloc adopts a common full-power cartridge.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1947</td></tr><tr><th>Cartridge</th><td>7.35×51 mm</td></tr><tr><th>Feed</th><td>Ten-round magazine</td></tr><tr><th>Operation</th><td>Semiautomatic</td></tr><tr><th>Role</th><td>Service rifle</td></tr></tbody></table></div>"},
      {id:"cartridge",title:"National 7.35 mm cartridge",html:"<p>The rifle retains Italy's national 7.35×51 mm ammunition rather than anticipating the 1958 Latin standard. Projectile, pressure, velocity, magazine geometry, and compatibility with earlier weapons remain open.</p>"},
      {id:"transition",title:"Transition to 7 mm LC",html:"<p>The <a href='fucile-automatico-58.html'>Fucile Automatico 58</a> introduces selective fire, a twenty-round magazine, and 7×51 mm LC. Modello 47 consequently moves into an overlapping inventory rather than disappearing in one year.</p>"},
      {id:"reserve",title:"Reserve service",html:"<p>Italy retains 7.35×51 mm in reserve stocks after standardization. The source does not fix which army, police, colonial, training, or client formations retain the rifle or when final withdrawal occurs.</p>"},
      {id:"open",title:"Production and service record",html:"<p>Factories, production blocks, quantities, wartime-derived prototypes, issued accessories, unit lists, transfers, modifications, and combat use remain unresolved.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"Weapon system",label:"Italian Infantry Weapons"},{href:"fucile-automatico-58.html",kicker:"1958 successor",label:"Fucile Automatico 58"},{href:"latin-land-ammunition-standards.html",kicker:"Later common cartridges",label:"Latin Land-Ammunition Standards"},{href:"italy.html",kicker:"Country of origin",label:"Kingdom of Italy"},{href:"world-war-ii.html",kicker:"Victory setting",label:"Second World War"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Kingdom of Italy"],["Entered service","1947"],["Weapon class","Semiautomatic service rifle"],["Cartridge","7.35×51 mm"],["Feed","Ten-round magazine"],["Successor","Fucile Automatico 58"],["Later status","Reserve stocks retained"],["Manufacturer","Open"]]
  }),

  "fucile-automatico-58": italianInfantryArticle({
    title:"Fucile Automatico 58",
    eyebrow:"Italian battle rifle · entered service 1958",
    infoboxKicker:"Selective-fire battle rifle",
    infoboxTitle:"Fucile Automatico 58",
    lead:"The Fucile Automatico 58 is Italy's selective-fire full-power battle rifle of 1958. Its twenty-round magazine and 7×51 mm LC cartridge place the Italian infantry rifle inside the first common Latin small-arms standard.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-w3m7u writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The formal name, 1958 introduction, 7×51 mm LC cartridge, twenty-round magazine, selective-fire operation, and battle-rifle role are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Manufacturer, mechanism, dimensions, mass, barrel length, rate of fire, sights, controls, magazine interchangeability, bayonet, grenade capability, accessories, production total, variants, units, exports, combat history, and retirement remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"standard",title:"The 1958 common standard",html:"<p>The rifle enters service in the year 7×51 mm LC becomes the common Latin full-power rifle and machine-gun cartridge. Italy therefore adopts the standard through a national service weapon rather than a common bloc rifle.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1958</td></tr><tr><th>Cartridge</th><td>7×51 mm LC</td></tr><tr><th>Feed</th><td>Twenty-round magazine</td></tr><tr><th>Fire mode</th><td>Selective fire</td></tr><tr><th>Role</th><td>Battle rifle</td></tr></tbody></table></div>"},
      {id:"fire",title:"Selective fire",html:"<p>Selective fire expands the rifle beyond the semiautomatic Modello 47. The registry does not establish cyclic rate, burst control, practical automatic-fire doctrine, bipod, or muzzle device.</p>"},
      {id:"gpmg",title:"Common cartridge with Mitragliatrice 59",html:"<p>The <a href='mitragliatrice-59.html'>Mitragliatrice 59</a> follows in 1959 with a disintegrating belt. Rifle and general-purpose machine gun share the cartridge dimension while retaining distinct feeds and tactical roles.</p>"},
      {id:"successor",title:"Transition to Beretta AR-68",html:"<p>The <a href='beretta-ar-68.html'>Beretta AR-68</a> moves the standard individual rifle to 5.6×45 mm LC in 1968. Fucile Automatico 58 remains useful where full-power ammunition, range, reserves, or existing stocks govern issue.</p>"},
      {id:"service",title:"Production and service",html:"<p>Manufacturer, production total, unit allocation, national and foreign variants, modernization, exports, combat use, and retirement remain open.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"Weapon system",label:"Italian Infantry Weapons"},{href:"fucile-modello-47.html",kicker:"National-caliber predecessor",label:"Fucile Modello 47"},{href:"mitragliatrice-59.html",kicker:"Shared cartridge",label:"Mitragliatrice 59"},{href:"beretta-ar-68.html",kicker:"1968 successor",label:"Beretta AR-68"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge policy",label:"Latin Land-Ammunition Standards"},{href:"italy.html",kicker:"Country of origin",label:"Kingdom of Italy"}],
    facts:[["Country of origin","Kingdom of Italy"],["Entered service","1958"],["Weapon class","Selective-fire battle rifle"],["Cartridge","7×51 mm LC"],["Feed","Twenty-round magazine"],["Predecessor","Fucile Modello 47"],["Successor","Beretta AR-68"],["Manufacturer","Open"]]
  }),

  "mitragliatrice-59": italianInfantryArticle({
    title:"Mitragliatrice 59",
    eyebrow:"Italian general-purpose machine gun · entered service 1959",
    infoboxKicker:"Latin-standard GPMG",
    infoboxTitle:"Mitragliatrice 59",
    lead:"The Mitragliatrice 59 is Italy's Latin-standard general-purpose machine gun of 1959. It uses the common 7×51 mm LC full-power cartridge and a disintegrating belt, providing sustained infantry and mounted fire alongside the magazine-fed Fucile Automatico 58.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-x8n4v writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The formal name, 1959 introduction, 7×51 mm LC cartridge, disintegrating-belt feed, and Latin-standard general-purpose-machine-gun role are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Manufacturer, mechanism, dimensions, mass, barrel system, cyclic rate, belt capacity, mountings, sights, secondary configurations, production total, variants, units, exports, combat history, and retirement remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"General-purpose role",html:"<p>The weapon supports mobile and sustained-fire employment according to mount and organization. The registry does not fix bipod, tripod, vehicle, antiaircraft, or fortress configurations.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1959</td></tr><tr><th>Cartridge</th><td>7×51 mm LC</td></tr><tr><th>Feed</th><td>Disintegrating belt</td></tr><tr><th>Role</th><td>General-purpose machine gun</td></tr><tr><th>Standard context</th><td>Latin common full-power system</td></tr></tbody></table></div>"},
      {id:"ammunition",title:"Common full-power ammunition",html:"<p>The cartridge is shared dimensionally with the Fucile Automatico 58 and other Latin weapons. Belt links, tracer ratios, armor-piercing loads, blank ammunition, packaging, and weapon-specific proof remain open.</p>"},
      {id:"belt",title:"Disintegrating-belt feed",html:"<p>Disintegrating links separate as cartridges are fed, supporting portable and mounted ammunition arrangements. Link design, box or drum capacities, alternate feeds, and compatibility across national GPMGs are not fixed.</p>"},
      {id:"rifles",title:"Relationship to rifle-caliber change",html:"<p>The standard Italian rifle moves to 5.6×45 mm LC with the Beretta AR-68 in 1968. Mitragliatrice 59 retains the full-power system for general-purpose machine-gun work rather than following the individual rifle immediately.</p>"},
      {id:"service",title:"Production and service",html:"<p>Manufacturer, quantities, unit issue, mounts, modernizations, exports, combat record, and withdrawal remain open.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"Weapon system",label:"Italian Infantry Weapons"},{href:"fucile-automatico-58.html",kicker:"Shared cartridge",label:"Fucile Automatico 58"},{href:"beretta-ar-68.html",kicker:"Small-caliber rifle generation",label:"Beretta AR-68"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge policy",label:"Latin Land-Ammunition Standards"},{href:"italy.html",kicker:"Country of origin",label:"Kingdom of Italy"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Kingdom of Italy"],["Entered service","1959"],["Weapon class","General-purpose machine gun"],["Cartridge","7×51 mm LC"],["Feed","Disintegrating belt"],["Standard","Latin full-power system"],["Manufacturer","Open"],["Service details","Open"]]
  }),

  "beretta-ar-68": italianInfantryArticle({
    title:"Beretta AR-68",
    eyebrow:"Italian assault rifle · entered service 1968",
    infoboxKicker:"Standard assault rifle",
    infoboxTitle:"Beretta AR-68",
    lead:"The Beretta AR-68 is Italy's standard 5.6×45 mm LC assault rifle of 1968. Fed from a thirty-round magazine, it introduces the Latin small-caliber cartridge to ordinary Italian rifle service while full-power 7 mm weapons remain in machine-gun, reserve, and overlapping roles.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-y5p9w writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The Beretta AR-68 name, Beretta association, 1968 introduction, 5.6×45 mm LC cartridge, thirty-round magazine, and standard-assault-rifle role are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Mechanism, dimensions, mass, barrel length, rate of fire, fire-control modes, sights, furniture, magazine compatibility, bayonet, grenade capability, accessories, production total, variants, units, exports, combat history, and retirement remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>AR-68 enters service in the year 5.6×45 mm LC becomes the common Latin small-caliber assault-rifle cartridge. It is the standard Italian assault rifle, not a claim that every formation replaces its full-power rifles immediately.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1968</td></tr><tr><th>Cartridge</th><td>5.6×45 mm LC</td></tr><tr><th>Feed</th><td>Thirty-round magazine</td></tr><tr><th>Role</th><td>Standard assault rifle</td></tr><tr><th>Named manufacturer</th><td>Beretta</td></tr></tbody></table></div>"},
      {id:"cartridge",title:"The 5.6 mm LC system",html:"<p>The smaller cartridge permits a thirty-round individual-weapon magazine and becomes the basis for later Latin assault rifles. Projectile mass, velocity, pressure, magazine geometry, and national loadings remain open.</p>"},
      {id:"full-power",title:"Coexistence with 7 mm weapons",html:"<p>Fucile Automatico 58 and Mitragliatrice 59 preserve the 7×51 mm LC system. The machine gun's full-power role continues even where AR-68 becomes the ordinary rifle.</p>"},
      {id:"successor",title:"Beretta AR-82",html:"<p>The <a href='beretta-ar-82.html'>AR-82</a> follows in 1982 as a modular late-generation weapon. It retains the cartridge and magazine capacity while adopting Guida Comune 79.</p>"},
      {id:"service",title:"Production and service",html:"<p>Operating system, production total, factories, issue priorities, variants, licensed manufacture, exports, modernizations, combat use, and withdrawal remain open.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"Weapon system",label:"Italian Infantry Weapons"},{href:"fucile-automatico-58.html",kicker:"Full-power predecessor",label:"Fucile Automatico 58"},{href:"beretta-ar-82.html",kicker:"1982 successor",label:"Beretta AR-82"},{href:"mitragliatrice-59.html",kicker:"Full-power support weapon",label:"Mitragliatrice 59"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge policy",label:"Latin Land-Ammunition Standards"},{href:"italy.html",kicker:"Country of origin",label:"Kingdom of Italy"}],
    facts:[["Country of origin","Kingdom of Italy"],["Entered service","1968"],["Weapon class","Assault rifle"],["Cartridge","5.6×45 mm LC"],["Feed","Thirty-round magazine"],["Manufacturer name","Beretta"],["Role","Standard service rifle"],["Successor","Beretta AR-82"]]
  }),

  "beretta-ar-82": italianInfantryArticle({
    title:"Beretta AR-82",
    eyebrow:"Italian assault rifle · entered service 1982",
    infoboxKicker:"Modular late-generation assault rifle",
    infoboxTitle:"Beretta AR-82",
    lead:"The Beretta AR-82 is Italy's modular late-generation assault rifle of 1982. It retains the 5.6×45 mm LC cartridge and thirty-round magazine of the AR-68 while adding the Guida Comune 79 optical and accessory mounting bar.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-z2q6x writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The Beretta AR-82 name, Beretta association, 1982 introduction, 5.6×45 mm LC cartridge, thirty-round magazine, modular late-generation role, and use of Guida Comune 79 are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Mechanism, dimensions, mass, barrel lengths, rate of fire, fire-control modes, modular components, sights, furniture, magazine compatibility, bayonet, grenade capability, accessories, production total, variants, units, exports, and combat history remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"development",title:"Development",html:"<p>AR-82 follows fourteen years after AR-68 while preserving the established small-caliber ammunition and thirty-round feed. The registry identifies modularity as the central new service characteristic.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1982</td></tr><tr><th>Cartridge</th><td>5.6×45 mm LC</td></tr><tr><th>Feed</th><td>Thirty-round magazine</td></tr><tr><th>Role</th><td>Modular late-generation assault rifle</td></tr><tr><th>Accessory interface</th><td>Guida Comune 79</td></tr></tbody></table></div>"},
      {id:"modularity",title:"Modular configuration",html:"<p>The modular designation indicates an equipment family designed to accept mission-dependent components or configurations. The source does not fix barrel assemblies, stocks, handguards, grenade launchers, optics, support roles, or variant names.</p>"},
      {id:"guida",title:"Guida Comune 79",html:"<p>The <a href='guida-comune-79.html'>Guida Comune 79</a> provides the rifle's standard optical and accessory mounting surface. It is a Latin interface rather than Picatinny.</p><p>Dimensions, mounting positions, approved sights, zero-retention requirements, and cross-national accessory lists remain open.</p>"},
      {id:"continuity",title:"Continuity with AR-68",html:"<p>AR-82 keeps 5.6×45 mm LC and a thirty-round magazine. The source does not establish magazine interchangeability or mechanical descent, so ammunition continuity should not be treated as proof that every component is shared.</p>"},
      {id:"service",title:"Service in 1985",html:"<p>AR-82 is Italy's newest registered assault rifle by 1985. AR-68 and older weapons remain in the broader inventory according to unit priority and ammunition stocks.</p><p>Production, first recipients, variant distribution, exports, and combat service remain open.</p>"}
    ],
    related:[{href:"italian-infantry-weapons.html",kicker:"Weapon system",label:"Italian Infantry Weapons"},{href:"beretta-ar-68.html",kicker:"1968 predecessor",label:"Beretta AR-68"},{href:"guida-comune-79.html",kicker:"Accessory interface",label:"Guida Comune 79"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge policy",label:"Latin Land-Ammunition Standards"},{href:"type-42-rifle.html",kicker:"Japanese contemporary",label:"Type 42 Rifle"},{href:"italy.html",kicker:"Country of origin",label:"Kingdom of Italy"}],
    facts:[["Country of origin","Kingdom of Italy"],["Entered service","1982"],["Weapon class","Modular assault rifle"],["Cartridge","5.6×45 mm LC"],["Feed","Thirty-round magazine"],["Manufacturer name","Beretta"],["Accessory interface","Guida Comune 79"],["1985 status","Newest Italian assault rifle"]]
  }),

  "guida-comune-79": italianInfantryArticle({
    title:"Guida Comune 79",
    eyebrow:"Latin optical and accessory interface",
    infoboxKicker:"Common mounting bar",
    infoboxTitle:"Guida Comune 79",
    lead:"Guida Comune 79 is the Latin bloc's common optical and accessory mounting bar. Used on the Beretta AR-82 by that rifle's 1982 introduction, it gives national weapons and accessories a shared attachment policy without copying the later Picatinny rail.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-a7r3y writer=g kind=revision created=2026-08-15T20:50:00-06:00 -->The Guida Comune 79 name, Latin common-standard status, optical and accessory mounting function, association with Beretta AR-82, and independence from Picatinny are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> The exact adoption date and instrument, dimensions, cross-section, slots, clamps, recoil stops, materials, mounting positions, sight families, environmental tests, certification authority, and compatibility with other blocs' interfaces remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The mounting bar supplies a repeatable interface between a host weapon and approved optics or accessories. National industries can build different rifles and sights while using a common attachment rule.</p>"},
      {id:"adoption",title:"Designation and adoption",html:"<p>The controlling registry fixes <em>Guida Comune 79</em> as the formal designation but does not state that 79 is an adoption year. Use on the Beretta AR-82 establishes the interface in service by 1982; its exact adoption date and the treaty, board, arsenal, or technical commission that issued it remain open.</p>"},
      {id:"ar82",title:"Use on Beretta AR-82",html:"<p>The <a href='beretta-ar-82.html'>Beretta AR-82</a> is the fixed Italian host weapon. Exact mounting location, standard optic, auxiliary devices, and whether every production rifle receives the bar remain open.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Guida Comune belongs to the same selective-standardization policy as common cartridges. It creates an interface layer without forcing one universal rifle or one common accessory manufacturer.</p><p>Use on Spanish, Occitan, Portuguese, vehicle-mounted, or crew-served weapons remains to be registered.</p>"},
      {id:"not-picatinny",title:"Not Picatinny",html:"<p>Guida Comune 79 is not Picatinny and should not be illustrated as an early local copy. Functional similarity does not establish dimensional compatibility, shared fasteners, or design descent.</p>"},
      {id:"contemporaries",title:"Contemporary proprietary interfaces",html:"<p>Other pre-1995 systems include Germany's <a href='einheitsleiste-79.html'>Einheitsleiste 79</a>, Britain's Enfield Dovetail Pattern 76, and Japan's <a href='type-41-optical-mounting-rib.html'>Type 41 optical rib</a>. No universal cross-bloc small-arms rail exists in the period.</p>"},
      {id:"open",title:"Unregistered technical details",html:"<p>Engineering drawings, tolerances, attachment tests, accessory categories, proof loads, procurement documents, and interchange adapters have not been fixed. A future illustration requires a dedicated design decision.</p>"}
    ],
    related:[{href:"beretta-ar-82.html",kicker:"Fixed Italian host",label:"Beretta AR-82"},{href:"latin-land-ammunition-standards.html",kicker:"Standardization policy",label:"Latin Land-Ammunition Standards"},{href:"einheitsleiste-79.html",kicker:"German contemporary",label:"Einheitsleiste 79"},{href:"type-41-optical-mounting-rib.html",kicker:"Japanese contemporary",label:"Type 41 Optical Mounting Rib"},{href:"italian-infantry-weapons.html",kicker:"National weapon system",label:"Italian Infantry Weapons"},{href:"latin-bloc.html",kicker:"Institutional setting",label:"Latin Bloc"}],
    facts:[["Alignment","Latin Bloc"],["Standard","Guida Comune 79"],["Adoption date","Open; in use by 1982"],["Function","Optical and accessory mounting bar"],["Fixed host weapon","Beretta AR-82"],["Picatinny compatibility","None established"],["Dimensions","Open"],["Certification authority","Open"]]
  })
});

function addItalianInfantryItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

const latinStandardsLink = {href:"latin-land-ammunition-standards.html",kicker:"Common ammunition policy",label:"Latin Land-Ammunition Standards"};
addItalianInfantryItem("italian-tank-lineage","related",latinStandardsLink);
addItalianInfantryItem("italian-mechanized-support-systems","related",latinStandardsLink);
