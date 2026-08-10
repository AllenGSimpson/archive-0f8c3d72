window.deepArticles = window.deepArticles || {};

const spanishInfantrySources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Spanish infantry-weapons registry"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Spain and the Latin system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Spanish postwar development"},
  {href:"../transcript.md",label:"Master Transcript — Spanish industry and Latin coordination"}
];

const spanishInfantryLandscape = {
  src:"assets/diagrams/spanish-infantry-weapons.svg",
  alt:"Timeline of three Spanish rifles and two machine guns from 1952 to 1974",
  caption:"Spain moves from its national 7×57 mm rifle to common Latin full-power and small-caliber cartridges without inheriting the historical CETME design lineage"
};

const spanishInfantryArticle = config => ({
  category:"Military equipment",
  eyebrow:"Spanish infantry weapon",
  landscape:spanishInfantryLandscape,
  ...config,
  sources:spanishInfantrySources,
  categories:config.categories || ["Spain","Infantry weapons","Small arms","Spanish Army","Latin Bloc"]
});

Object.assign(window.deepArticles, {
  "spanish-infantry-weapons": spanishInfantryArticle({
    title:"Spanish Infantry Weapons",
    eyebrow:"Spanish small-arms sequence · 1952–1974",
    infoboxKicker:"National infantry-weapons registry",
    infoboxTitle:"Spanish infantry weapons",
    lead:"Spain's postwar infantry-weapons system develops outside the historical CETME lineage. The Fusil Modelo 52 retains the national 7×57 mm cartridge; the Fusil Automático 59 and Ametralladora 60 establish the common Latin 7×51 mm full-power system; the Fusil Automático 72 becomes the standard 5.6×45 mm assault rifle; and Ametralladora 74 supplies a lightened optically equipped general-purpose machine gun.",
    canon:"The absence of the historical CETME engineering migration, independent Spanish development of gas-operated rifles and machine guns, five registered weapons, names, introduction years, cartridges, feeds, and roles are fixed. Manufacturers, arsenals, designers, detailed mechanisms except the FA-59's gas operation, dimensions, masses, barrel lengths, rates of fire, sights, controls, furniture, magazine compatibility, belt links, optical-mount standard, production totals, variants, units, exports, and combat histories remain open.",
    sections:[
      {id:"divergence",title:"Development outside CETME",html:"<p>The German engineers who historically formed CETME do not migrate to Spain after the war. They remain inside victorious Germany. Spain therefore develops its postwar rifles and machine guns through a separate national program rather than reproducing the historical CETME sequence under alternate designations.</p><p>The source identifies gas-operated rifles, machine guns, wheeled vehicles, artillery, ammunition, and licensed Italian or Occitan armor as Spanish specialties. It does not identify a single replacement institute or manufacturer for the small-arms program.</p>"},
      {id:"registry",title:"Service-weapons register",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Weapon</th><th>Introduction</th><th>Cartridge</th><th>Feed</th><th>Role</th></tr></thead><tbody><tr><td><a href='fusil-modelo-52.html'>Fusil Modelo 52</a></td><td>1952</td><td>7×57 mm</td><td>Ten-round magazine</td><td>Semiautomatic transitional rifle</td></tr><tr><td><a href='fusil-automatico-59.html'>Fusil Automático 59</a></td><td>1959</td><td>7×51 mm LC</td><td>Twenty-round magazine</td><td>Gas-operated battle rifle</td></tr><tr><td><a href='ametralladora-60.html'>Ametralladora 60</a></td><td>1960</td><td>7×51 mm LC</td><td>Disintegrating belt</td><td>General-purpose machine gun</td></tr><tr><td><a href='fusil-automatico-72.html'>Fusil Automático 72</a></td><td>1972</td><td>5.6×45 mm LC</td><td>Thirty-round magazine</td><td>Standard Spanish assault rifle</td></tr><tr><td><a href='ametralladora-74.html'>Ametralladora 74</a></td><td>1974</td><td>7×51 mm LC</td><td>Disintegrating belt</td><td>Lightened GPMG with optical mount</td></tr></tbody></table></div>"},
      {id:"national",title:"The 7×57 mm inheritance",html:"<p>The <a href='fusil-modelo-52.html'>Fusil Modelo 52</a> supplies a semiautomatic transitional rifle in Spain's national 7×57 mm cartridge. Spain retains that cartridge in reserve after adopting common Latin ammunition for first-line weapons.</p>"},
      {id:"full-power",title:"The 7×51 mm LC system",html:"<p>The <a href='fusil-automatico-59.html'>Fusil Automático 59</a> and <a href='ametralladora-60.html'>Ametralladora 60</a> establish a shared full-power cartridge across magazine-fed rifle and belt-fed machine-gun roles. Ametralladora 74 retains the same cartridge in a later lightened weapon.</p><p>Common ammunition does not establish shared magazines, links, projectile loads, proof rules, or mechanisms.</p>"},
      {id:"small-caliber",title:"The 5.6×45 mm LC rifle",html:"<p>The <a href='fusil-automatico-72.html'>Fusil Automático 72</a> becomes the standard Spanish assault rifle in 1972. It uses the Latin bloc's 5.6×45 mm LC cartridge and a thirty-round magazine while the general-purpose machine guns retain 7×51 mm LC.</p>"},
      {id:"machine-guns",title:"General-purpose machine guns",html:"<p>Ametralladora 60 enters service in 1960 as the ordinary belt-fed GPMG. <a href='ametralladora-74.html'>Ametralladora 74</a> follows in 1974 as a lightened weapon with an optical mount.</p><p>The 1974 registry does not name the mount or establish compatibility with the later <a href='guida-comune-79.html'>Guida Comune 79</a>.</p>"},
      {id:"industry",title:"National industry and Latin standards",html:"<p>Spanish procurement combines national small-arms and ammunition production with selected common Latin cartridges. The same system licenses Italian and Occitan armor while preserving Spanish wheeled-vehicle, artillery, and support industries.</p>"},
      {id:"service",title:"Overlapping service",html:"<p>The adoption dates mark entry into service, not simultaneous replacement throughout the armed forces. Reserve formations, training establishments, colonial garrisons, police, clients, and mobilization stores may retain earlier rifles and ammunition.</p><p>Exact allocations, conversion dates, production totals, exports, and final withdrawals remain open.</p>"}
    ],
    related:[{href:"fusil-modelo-52.html",kicker:"National-cartridge rifle",label:"Fusil Modelo 52"},{href:"fusil-automatico-59.html",kicker:"Full-power battle rifle",label:"Fusil Automático 59"},{href:"ametralladora-60.html",kicker:"First Latin-standard GPMG",label:"Ametralladora 60"},{href:"fusil-automatico-72.html",kicker:"Standard assault rifle",label:"Fusil Automático 72"},{href:"ametralladora-74.html",kicker:"Lightened GPMG",label:"Ametralladora 74"},{href:"latin-land-ammunition-standards.html",kicker:"Cartridge policy",label:"Latin Land-Ammunition Standards"}],
    facts:[["Country","Spain"],["Coverage","1952–1974"],["Registered weapons","Five"],["Historical CETME lineage","Does not arise in Spain"],["National cartridge","7×57 mm"],["Full-power standard","7×51 mm LC"],["Small-caliber standard","5.6×45 mm LC"],["Standard 1972 rifle","Fusil Automático 72"],["General-purpose machine guns","Ametralladora 60 and 74"],["Alignment","Latin Bloc"]]
  }),

  "fusil-modelo-52": spanishInfantryArticle({
    title:"Fusil Modelo 52",eyebrow:"Spanish service rifle · entered service 1952",infoboxKicker:"Semiautomatic transitional rifle",infoboxTitle:"Fusil Modelo 52",
    lead:"The Fusil Modelo 52 is Spain's semiautomatic transitional service rifle of 1952. It uses the national 7×57 mm cartridge and a ten-round magazine, preceding the adoption of the common Latin 7×51 mm LC rifle system.",
    canon:"The name, 1952 introduction, 7×57 mm cartridge, ten-round magazine, semiautomatic operation, transitional service-rifle role, and later reserve-cartridge context are fixed. Manufacturer, designer, mechanism, dimensions, mass, barrel length, sights, magazine details, loading method, bayonet, accessories, production total, variants, units, exports, combat history, and retirement remain open.",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Modelo 52 gives Spain a semiautomatic service rifle during the first postwar industrial decade. It belongs to the independent Spanish program that develops after the historical CETME engineering migration fails to occur.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1952</td></tr><tr><th>Cartridge</th><td>7×57 mm</td></tr><tr><th>Feed</th><td>Ten-round magazine</td></tr><tr><th>Operation</th><td>Semiautomatic</td></tr><tr><th>Role</th><td>Transitional service rifle</td></tr></tbody></table></div>"},
      {id:"cartridge",title:"National cartridge",html:"<p>The rifle retains Spain's 7×57 mm ammunition. Projectile types, pressure, velocity, magazine geometry, loading system, and compatibility with earlier weapons remain open.</p>"},
      {id:"transition",title:"Transition to 7×51 mm LC",html:"<p>The <a href='fusil-automatico-59.html'>Fusil Automático 59</a> enters service in 1959 with a twenty-round magazine, gas operation, selective-fire battle-rifle role, and the common 7×51 mm LC cartridge.</p>"},
      {id:"reserve",title:"Reserve retention",html:"<p>Spain retains 7×57 mm in reserve after frontline standardization. The registry does not identify which army, colonial, police, training, or client formations receive Modelo 52 or when final withdrawal occurs.</p>"},
      {id:"service",title:"Service history",html:"<p>Production totals, arsenals, unit distribution, variants, exports, combat use, rebuilds, and retirement dates remain unregistered.</p>"}
    ],
    related:[{href:"spanish-infantry-weapons.html",kicker:"National weapon system",label:"Spanish Infantry Weapons"},{href:"fusil-automatico-59.html",kicker:"1959 successor",label:"Fusil Automático 59"},{href:"fusil-automatico-72.html",kicker:"Later assault rifle",label:"Fusil Automático 72"},{href:"spain.html",kicker:"Country of origin",label:"Spain"},{href:"fucile-modello-47.html",kicker:"Italian transitional contemporary",label:"Fucile Modello 47"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Spain"],["Entered service","1952"],["Weapon class","Semiautomatic transitional rifle"],["Cartridge","7×57 mm"],["Feed","Ten-round magazine"],["Successor","Fusil Automático 59"],["Reserve cartridge","Retained after standardization"],["Production total","Open"]]
  }),

  "fusil-automatico-59": spanishInfantryArticle({
    title:"Fusil Automático 59",eyebrow:"Spanish battle rifle · entered service 1959",infoboxKicker:"Gas-operated battle rifle",infoboxTitle:"Fusil Automático 59",
    lead:"The Fusil Automático 59 is Spain's gas-operated battle rifle of 1959. It uses the common Latin 7×51 mm LC cartridge and a twenty-round magazine, replacing the 7×57 mm Fusil Modelo 52 in the first-line full-power rifle role.",
    canon:"The name, 1959 introduction, gas operation, battle-rifle role, 7×51 mm LC cartridge, twenty-round magazine, and lineage position are fixed. Manufacturer, designer, detailed action, locking system, dimensions, mass, barrel length, fire-control modes, rate of fire, sights, magazine compatibility, furniture, bayonet, grenade capability, accessories, production total, variants, units, exports, and combat history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Automático 59 moves Spain from the national 7×57 mm rifle to the Latin bloc's common full-power cartridge. The registered gas operation belongs to Spain's independent postwar rifle program rather than the absent historical CETME lineage.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1959</td></tr><tr><th>Cartridge</th><td>7×51 mm LC</td></tr><tr><th>Feed</th><td>Twenty-round magazine</td></tr><tr><th>Operation</th><td>Gas-operated</td></tr><tr><th>Role</th><td>Battle rifle</td></tr></tbody></table></div>"},
      {id:"cartridge",title:"Latin full-power cartridge",html:"<p>7×51 mm LC permits common ammunition planning with the <a href='ametralladora-60.html'>Ametralladora 60</a> and later Ametralladora 74. Shared ammunition does not establish common magazines, belt links, projectile loads, or mechanisms.</p>"},
      {id:"operation",title:"Gas operation",html:"<p>The rifle is explicitly gas-operated. Piston arrangement, gas adjustment, bolt and locking system, cyclic rate, fire-control modes, and maintenance procedure are not registered.</p>"},
      {id:"replacement",title:"Replacement by Fusil Automático 72",html:"<p>The <a href='fusil-automatico-72.html'>Fusil Automático 72</a> becomes the standard assault rifle in 1972 using 5.6×45 mm LC. Automático 59 may remain in units requiring a full-power rifle, reserve stocks, training, or secondary service.</p>"},
      {id:"service",title:"Service history",html:"<p>Production totals, manufacturers, units, variants, exports, combat use, modernization, and final retirement remain open.</p>"}
    ],
    related:[{href:"spanish-infantry-weapons.html",kicker:"National weapon system",label:"Spanish Infantry Weapons"},{href:"fusil-modelo-52.html",kicker:"1952 predecessor",label:"Fusil Modelo 52"},{href:"fusil-automatico-72.html",kicker:"1972 successor",label:"Fusil Automático 72"},{href:"ametralladora-60.html",kicker:"Common-cartridge GPMG",label:"Ametralladora 60"},{href:"fucile-automatico-58.html",kicker:"Italian Latin-standard counterpart",label:"Fucile Automatico 58"},{href:"spain.html",kicker:"Country of origin",label:"Spain"}],
    facts:[["Country of origin","Spain"],["Entered service","1959"],["Weapon class","Battle rifle"],["Operation","Gas-operated"],["Cartridge","7×51 mm LC"],["Feed","Twenty-round magazine"],["Predecessor","Fusil Modelo 52"],["Successor","Fusil Automático 72"]]
  }),

  "ametralladora-60": spanishInfantryArticle({
    title:"Ametralladora 60",eyebrow:"Spanish machine gun · entered service 1960",infoboxKicker:"General-purpose machine gun",infoboxTitle:"Ametralladora 60",
    lead:"The Ametralladora 60 is Spain's general-purpose machine gun of 1960. It fires the 7×51 mm LC cartridge from a disintegrating belt and provides the belt-fed half of Spain's common full-power rifle-and-machine-gun ammunition system.",
    canon:"The name, 1960 introduction, 7×51 mm LC cartridge, disintegrating-belt feed, general-purpose machine-gun role, and relationship to Spanish full-power standardization are fixed. Manufacturer, designer, operation, dimensions, mass, barrel system, rate of fire, belt-link pattern, sights, mounts, tripods, production total, variants, units, exports, and combat history remain open.",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Ametralladora 60 follows the 7×51 mm LC Fusil Automático 59 by one year. Together they establish a common Spanish full-power ammunition family for individual and sustained-fire weapons.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1960</td></tr><tr><th>Cartridge</th><td>7×51 mm LC</td></tr><tr><th>Feed</th><td>Disintegrating belt</td></tr><tr><th>Role</th><td>General-purpose machine gun</td></tr></tbody></table></div>"},
      {id:"role",title:"General-purpose role",html:"<p>The GPMG designation permits use across squad, sustained-fire, vehicle, or defensive positions. The registry does not fix bipod, tripod, vehicle mounts, barrel-change method, crew, or issue scale.</p>"},
      {id:"ammunition",title:"Ammunition",html:"<p>7×51 mm LC is shared with the battle rifle and later Ametralladora 74. Belt-link geometry, projectile loads, tracers, proof standards, packaging, and cross-national feed compatibility remain open.</p>"},
      {id:"successor",title:"Ametralladora 74",html:"<p>The <a href='ametralladora-74.html'>Ametralladora 74</a> enters service as a lightened GPMG with an optical mount while retaining the same cartridge and belt category.</p>"},
      {id:"service",title:"Service history",html:"<p>Production totals, manufacturers, units, variants, mounts, exports, combat use, modifications, and withdrawal dates remain unregistered.</p>"}
    ],
    related:[{href:"spanish-infantry-weapons.html",kicker:"National weapon system",label:"Spanish Infantry Weapons"},{href:"ametralladora-74.html",kicker:"1974 successor",label:"Ametralladora 74"},{href:"fusil-automatico-59.html",kicker:"Common-cartridge rifle",label:"Fusil Automático 59"},{href:"mitragliatrice-59.html",kicker:"Italian GPMG counterpart",label:"Mitragliatrice 59"},{href:"latin-land-ammunition-standards.html",kicker:"Ammunition policy",label:"Latin Land-Ammunition Standards"},{href:"spain.html",kicker:"Country of origin",label:"Spain"}],
    facts:[["Country of origin","Spain"],["Entered service","1960"],["Weapon class","General-purpose machine gun"],["Cartridge","7×51 mm LC"],["Feed","Disintegrating belt"],["Successor","Ametralladora 74"],["Operating system","Open"],["Production total","Open"]]
  }),

  "fusil-automatico-72": spanishInfantryArticle({
    title:"Fusil Automático 72",eyebrow:"Spanish assault rifle · entered service 1972",infoboxKicker:"Standard Spanish assault rifle",infoboxTitle:"Fusil Automático 72",
    lead:"The Fusil Automático 72 is Spain's standard assault rifle of 1972. It uses the Latin bloc's 5.6×45 mm LC cartridge and a thirty-round magazine, replacing the full-power Fusil Automático 59 in the ordinary individual-weapon role.",
    canon:"The name, 1972 introduction, standard Spanish assault-rifle role, 5.6×45 mm LC cartridge, thirty-round magazine, and lineage position are fixed. Manufacturer, designer, operating mechanism, dimensions, mass, barrel length, rate of fire, fire-control modes, sights, magazine compatibility, furniture, bayonet, grenade capability, accessories, production total, variants, units, exports, and combat history remain open.",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Automático 72 introduces the Latin small-caliber cartridge to Spain's standard rifle role. The adoption occurs fourteen years after the bloc first registers 5.6×45 mm LC and thirteen years after Spain adopts 7×51 mm LC in its battle rifle.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1972</td></tr><tr><th>Cartridge</th><td>5.6×45 mm LC</td></tr><tr><th>Feed</th><td>Thirty-round magazine</td></tr><tr><th>Role</th><td>Standard assault rifle</td></tr></tbody></table></div>"},
      {id:"ammunition",title:"Small-caliber standard",html:"<p>5.6×45 mm LC reduces the ordinary rifle's ammunition size relative to the 7×51 mm LC battle-rifle system. Projectile construction, pressure, velocity, barrel specifications, magazine geometry, and compatibility with Italian weapons remain open.</p>"},
      {id:"mechanism",title:"Operating system",html:"<p>The wider Spanish program develops gas-operated rifles, but the controlling registry does not separately specify Automático 72's mechanism. Locking system, gas arrangement, fire-control modes, cyclic rate, and maintenance procedure remain open.</p>"},
      {id:"support",title:"Full-power support weapons",html:"<p>Ametralladora 60 and <a href='ametralladora-74.html'>Ametralladora 74</a> retain 7×51 mm LC for the general-purpose machine-gun role after the standard rifle moves to 5.6 mm.</p>"},
      {id:"service",title:"Service history",html:"<p>Automático 72 is the standard Spanish assault rifle by 1985. Production totals, manufacturers, units, variants, exports, accessories, combat history, and replacement planning remain open.</p>"}
    ],
    related:[{href:"spanish-infantry-weapons.html",kicker:"National weapon system",label:"Spanish Infantry Weapons"},{href:"fusil-automatico-59.html",kicker:"1959 predecessor",label:"Fusil Automático 59"},{href:"ametralladora-74.html",kicker:"Full-power support weapon",label:"Ametralladora 74"},{href:"beretta-ar-68.html",kicker:"Italian small-caliber counterpart",label:"Beretta AR-68"},{href:"latin-land-ammunition-standards.html",kicker:"Ammunition policy",label:"Latin Land-Ammunition Standards"},{href:"spain.html",kicker:"Country of origin",label:"Spain"}],
    facts:[["Country of origin","Spain"],["Entered service","1972"],["Weapon class","Assault rifle"],["Service role","Standard Spanish rifle"],["Cartridge","5.6×45 mm LC"],["Feed","Thirty-round magazine"],["Predecessor","Fusil Automático 59"],["Production total","Open"]]
  }),

  "ametralladora-74": spanishInfantryArticle({
    title:"Ametralladora 74",eyebrow:"Spanish machine gun · entered service 1974",infoboxKicker:"Lightened optically equipped GPMG",infoboxTitle:"Ametralladora 74",
    lead:"The Ametralladora 74 is Spain's lightened general-purpose machine gun of 1974. It retains the 7×51 mm LC cartridge and disintegrating-belt feed of Ametralladora 60 while adding an optical mount.",
    canon:"The name, 1974 introduction, lightened GPMG role, 7×51 mm LC cartridge, disintegrating-belt feed, optical mount, and relationship to Ametralladora 60 are fixed. Manufacturer, designer, operation, dimensions, mass, degree of weight reduction, barrel system, rate of fire, belt-link pattern, optical interface, issued sight, mounts, production total, variants, units, exports, and combat history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Ametralladora 74 follows fourteen years after Ametralladora 60. It preserves the established full-power cartridge and belt category while reducing weapon weight and providing for optical equipment.</p>"},
      {id:"specifications",title:"Registered characteristics",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1974</td></tr><tr><th>Cartridge</th><td>7×51 mm LC</td></tr><tr><th>Feed</th><td>Disintegrating belt</td></tr><tr><th>Role</th><td>Lightened general-purpose machine gun</td></tr><tr><th>Sighting provision</th><td>Optical mount</td></tr></tbody></table></div>"},
      {id:"weight",title:"Lightened configuration",html:"<p>The registry identifies a lightened weapon but does not supply mass, construction, barrel profile, receiver changes, or the comparison standard used to measure the reduction.</p>"},
      {id:"optics",title:"Optical mount",html:"<p>An optical mount is part of the registered configuration. Its location, dimensions, clamp, recoil stop, issued sight, magnification, zeroing practice, and compatibility with other Spanish or Latin weapons remain open.</p><p>The weapon predates Guida Comune 79; the source does not state that later interface replaced or adapted the original mount.</p>"},
      {id:"ammunition",title:"Ammunition continuity",html:"<p>The retained 7×51 mm LC cartridge keeps the machine-gun system on the full-power ammunition family after the ordinary rifle moves to 5.6×45 mm LC. Belt-link and loading compatibility with Ametralladora 60 remain unregistered.</p>"},
      {id:"service",title:"Service history",html:"<p>Ametralladora 74 is Spain's latest registered GPMG by 1985. Production totals, manufacturers, units, mounts, variants, exports, combat use, and replacement plans remain open.</p>"}
    ],
    related:[{href:"spanish-infantry-weapons.html",kicker:"National weapon system",label:"Spanish Infantry Weapons"},{href:"ametralladora-60.html",kicker:"1960 predecessor",label:"Ametralladora 60"},{href:"fusil-automatico-72.html",kicker:"Standard individual rifle",label:"Fusil Automático 72"},{href:"guida-comune-79.html",kicker:"Later Latin interface",label:"Guida Comune 79"},{href:"mitragliatrice-59.html",kicker:"Italian GPMG counterpart",label:"Mitragliatrice 59"},{href:"spain.html",kicker:"Country of origin",label:"Spain"}],
    facts:[["Country of origin","Spain"],["Entered service","1974"],["Weapon class","Lightened general-purpose machine gun"],["Cartridge","7×51 mm LC"],["Feed","Disintegrating belt"],["Sighting provision","Optical mount"],["Predecessor","Ametralladora 60"],["1985 status","Latest registered Spanish GPMG"],["Mount standard","Open"]]
  })
});

function addSpanishInfantryItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

addSpanishInfantryItem("spain","sections",{id:"infantry-weapons",title:"Infantry weapons",html:"<p>Spain's <a href='spanish-infantry-weapons.html'>postwar infantry-weapons sequence</a> develops outside the historical CETME lineage. The <a href='fusil-modelo-52.html'>Fusil Modelo 52</a> retains 7×57 mm; the <a href='fusil-automatico-59.html'>Fusil Automático 59</a> and <a href='ametralladora-60.html'>Ametralladora 60</a> adopt 7×51 mm LC; the <a href='fusil-automatico-72.html'>Fusil Automático 72</a> becomes the standard 5.6×45 mm LC rifle; and the <a href='ametralladora-74.html'>Ametralladora 74</a> supplies a lightened optically equipped GPMG.</p>"});
addSpanishInfantryItem("spain","related",{href:"spanish-infantry-weapons.html",kicker:"National small-arms system",label:"Spanish Infantry Weapons"});
addSpanishInfantryItem("latin-land-ammunition-standards","related",{href:"spanish-infantry-weapons.html",kicker:"Spanish national implementation",label:"Spanish Infantry Weapons"});
addSpanishInfantryItem("italian-infantry-weapons","related",{href:"spanish-infantry-weapons.html",kicker:"Latin national counterpart",label:"Spanish Infantry Weapons"});
