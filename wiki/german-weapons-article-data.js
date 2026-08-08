window.deepArticles = window.deepArticles || {};

const germanWeaponsSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — controlling German registry and specifications"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German military institutions and postwar development"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — introduction chronology"},
  {href:"../transcript.md",label:"Master Transcript — doctrine, export, and campaign context"}
];

const germanWeaponArticle = config => ({
  category:"Military equipment",
  eyebrow:"Greater German Reich · Heer · 1944–1985",
  infoboxKicker:"German weapon system",
  ...config,
  sources:[...germanWeaponsSources,...(config.additionalSources || [])],
  categories:config.categories || ["Germany","Heer","Military equipment","Weapons"]
});

const smallArmsLandscape = {
  src:"assets/diagrams/german-small-arms-lineage.svg",
  alt:"Chronology of registered German postwar rifles, machine guns, and the Einheitsleiste mounting standard",
  caption:"The registered German small-arms sequence, from the wartime StG 44 family to the StG 82 and squad automatic weapon"
};

const fireSupportLandscape = {
  src:"assets/diagrams/german-fire-support-lineages.svg",
  alt:"Chronology of registered German artillery, antitank, and mobile air-defense systems",
  caption:"Registered German fire-support lineages; unregistered field proposals are excluded"
};

Object.assign(window.deepArticles, {
  "german-postwar-small-arms": germanWeaponArticle({
    title:"German postwar small arms",
    category:"Military technology",
    eyebrow:"Greater German Reich · infantry weapons · 1944–1985",
    infoboxKicker:"Small-arms overview",
    landscape:smallArmsLandscape,
    lead:"German postwar small arms developed from the wartime assault-rifle and universal-machine-gun systems into a mixed 5.6 mm and 7.92 mm establishment. By 1985 the StG 60 remained the ordinary service rifle, the Gewehr 58 and MG 68 retained the full-power 7.92×57 mm cartridge, and the StG 82 equipped selected elite units.",
    canon:"The registered weapons, dates, cartridges, feeds, standard roles, principal StG 60 specifications, StG 82 features, export designations, and Einheitsleiste 79 interface are established. Manufacturers, production totals, unit-by-unit issue, detailed variants other than the StG 60A6 adapter, and retirement dates remain open. Proposed Congo-era StG 60A3/A4 changes, Granatgerät 74, and Tragschiene 75 are not registered service equipment.",
    sections:[
      {id:"wartime",title:"Wartime inheritance",html:"<p>The <strong>StG 44</strong> entered service in 1944 with a 30-round magazine and the intermediate 7.92×33 mm cartridge. The <strong>StG 45A</strong> followed in 1945 as a simplified postwar rifle and export standard. It was a gas-operated, stamped-steel reliability development of the StG 44 rather than the historical roller-delayed StG 45(M).</p><p>Separate Gerät 06 roller-delayed work survived the war and informed the later <a href='gewehr-58.html'>Gewehr 58</a> and machine-gun engineering. The distinction is retained in the controlling registry.</p>"},
      {id:"rifles",title:"Service rifles",html:"<p>The <a href='gewehr-58.html'>Gewehr 58</a> supplied a full-power semiautomatic rifle and designated-marksman weapon from 1958. The <a href='stg-60.html'>StG 60</a> entered service in 1961 as the standard German assault rifle, using the 5.6×40 mm cartridge and a 30-round magazine.</p><p>The <a href='stg-82.html'>StG 82</a> added modular fittings, ambidextrous controls, a folding stock, burst fire, and a grenade launcher in 1983. It had not replaced the StG 60 throughout the armed forces by 1985.</p>"},
      {id:"machine-guns",title:"Machine guns",html:"<p>The wartime MG 42 and simplified MG 52 remained the predecessors of the <a href='mg-68.html'>MG 68</a>. All three used the full-power 7.92×57 mm cartridge. The MG 68 became the lighter standard general-purpose machine gun in 1968.</p><p>The <a href='leichtes-mg-76.html'>leichtes MG 76</a> entered service in 1976 as a 5.6×40 mm squad automatic weapon fed from a 100-round belt box. Its cartridge matched the standard assault rifle while the MG 68 continued to serve in the general-purpose role.</p>"},
      {id:"interface",title:"Mounting interface",html:"<p>The <a href='einheitsleiste-79.html'>Einheitsleiste 79</a> was a German dovetail-and-cross-slot mounting bar. It was not a Picatinny rail. The StG 82 carried the interface natively, while upgraded StG 60A6 rifles accepted it through an adapter.</p>"},
      {id:"exports",title:"Exports and licensed production",html:"<p>Cuba licensed the StG 60 as the <em>Fusil de Asalto Modelo 60</em> (FA-60). Argentina imported German-built rifles as the <em>Fusil Automático Argentino Modelo 67</em> (FAA-67) and manufactured 5.6×40 mm ammunition under license.</p><p>Argentina also imported the MG 68 under the designation <em>Ametralladora Argentina Modelo 68</em> (AA-68). These designations recorded local service systems rather than separate German models.</p>"},
      {id:"registry",title:"Registry boundary",html:"<p>The transcript records several Congo-driven small-arms proposals. The controlling Land Armaments Reference does not register the StG 60A3, StG 60A4, Granatgerät 74, or Tragschiene 75 as adopted equipment. Their proposed characteristics cannot be used as fixed service specifications.</p>"}
    ],
    related:[{href:"stg-60.html",kicker:"Standard rifle",label:"StG 60"},{href:"stg-82.html",kicker:"Elite modular rifle",label:"StG 82"},{href:"mg-68.html",kicker:"General-purpose machine gun",label:"MG 68"},{href:"leichtes-mg-76.html",kicker:"Squad automatic weapon",label:"leichtes MG 76"},{href:"einheitsleiste-79.html",kicker:"Mounting standard",label:"Einheitsleiste 79"}],
    facts:[["Coverage","1944–1985"],["Standard 1985 rifle","StG 60"],["Elite rifle","StG 82; limited issue"],["Full-power rifle","Gewehr 58"],["Standard GPMG","MG 68"],["Squad automatic weapon","leichtes MG 76"],["Principal rifle cartridge","5.6×40 mm"],["Legacy full-power cartridge","7.92×57 mm"]]
  }),

  "gewehr-58": germanWeaponArticle({
    title:"Gewehr 58",
    eyebrow:"Greater German Reich · service rifle · 1958",
    landscape:smallArmsLandscape,
    lead:"The Gewehr 58 was a German 7.92×57 mm semiautomatic rifle introduced in 1958. It served as a full-power service rifle and designated-marksman weapon alongside the intermediate-cartridge assault-rifle line.",
    canon:"The designation, 1958 introduction, 7.92×57 mm cartridge, 20-round magazine, standard roles, and connection to surviving Gerät 06 engineering are established. Operating mechanism, dimensions, mass, optics, manufacturer, production total, variants, and unit distribution remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>German postwar rifle development followed two related paths. Gas-operated stamped-steel work produced the StG 45A and later <a href='stg-60.html'>StG 60</a>. Roller-delayed Gerät 06 engineering survived separately and informed the Gewehr 58 and later machine-gun work.</p><p>The registry does not identify the precise action selected for the production Gewehr 58.</p>"},
      {id:"design",title:"Design",html:"<p>The rifle fired the 7.92×57 mm full-power cartridge from a 20-round magazine. It was semiautomatic in its registered standard role. Barrel length, sighting equipment, furniture, unloaded weight, and accessory fittings have not been fixed.</p>"},
      {id:"service",title:"Service",html:"<p>The Gewehr 58 entered service in 1958. It equipped troops requiring a full-power individual rifle and remained available as a designated-marksman weapon after the 5.6×40 mm StG 60 became the standard assault rifle in 1961.</p><p>Its exact 1985 inventory and the organizations retaining general rifle issue remain undocumented.</p>"},
      {id:"ammunition",title:"Ammunition",html:"<p>The 7.92×57 mm cartridge was shared with the MG 42, MG 52, and <a href='mg-68.html'>MG 68</a>. Germany therefore retained full-power ammunition production for machine guns and specialist rifles while standard rifle units shifted to 5.6×40 mm.</p>"},
      {id:"status",title:"Documented status",html:"<p>No production total, arsenal assignment, retirement date, or complete variant list is established. Later descriptions should not substitute historical G3 specifications for the registered Gewehr 58.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"Overview",label:"German Postwar Small Arms"},{href:"stg-60.html",kicker:"Standard successor role",label:"StG 60"},{href:"mg-68.html",kicker:"Shared cartridge",label:"MG 68"}],
    facts:[["Introduction","1958"],["Cartridge","7.92×57 mm"],["Feed","20-round magazine"],["Action","Semiautomatic; detailed mechanism open"],["Roles","Full-power rifle; designated-marksman weapon"],["Engineering antecedent","Gerät 06 work"],["Production total","Open"]]
  }),

  "stg-60": germanWeaponArticle({
    title:"StG 60",
    eyebrow:"Greater German Reich · standard assault rifle · 1961",
    landscape:smallArmsLandscape,
    lead:"The StG 60 was the standard German assault rifle from 1961. It fired the 5.6×40 mm cartridge from a 30-round magazine and remained the ordinary service rifle in 1985 despite the introduction of the StG 82 for selected units.",
    canon:"The designation, introduction, cartridge, magazine, gas-piston and rotating-bolt action, stamped receiver, 420 mm barrel, 3.7 kg loaded weight, Cuban and Argentine service forms, and StG 60A6 mounting adapter are established. Manufacturer, production total, overall dimensions, complete variant sequence, and unit issue remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The StG 60 continued the German intermediate-cartridge assault-rifle line established by the StG 44 and simplified StG 45A. It was a small-caliber assault rifle rather than the full-power battle rifle described in some superseded notes. The <a href='gewehr-58.html'>Gewehr 58</a> occupied the full-power rifle role.</p>"},
      {id:"design",title:"Design",html:"<p>The rifle used a gas piston, rotating bolt, and stamped receiver. Its barrel was 420 mm long and its loaded service weight was 3.7 kg. A 30-round magazine fed the 5.6×40 mm cartridge.</p><p>Overall length, cyclic rate, sight radius, furniture material, and standard optical equipment have not been registered.</p>"},
      {id:"service",title:"German service",html:"<p>The StG 60 entered service in 1961 and became the standard German assault rifle. It remained the ordinary weapon in 1985. The later <a href='stg-82.html'>StG 82</a> was issued to elite units and had not become universal.</p>"},
      {id:"a6",title:"StG 60A6",html:"<p>The registered StG 60A6 upgrade could accept an adapter for the <a href='einheitsleiste-79.html'>Einheitsleiste 79</a> mounting bar. The source does not establish its production date, conversion total, or the complete sequence of earlier production variants.</p>"},
      {id:"cuba",title:"Cuban production",html:"<p>Cuba licensed the rifle as the <em>Fusil de Asalto Modelo 60</em> (FA-60). It retained the 5.6×40 mm StG 60 identity rather than becoming a full-power G3-type weapon.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina imported German-built rifles beginning under the service designation <em>Fusil Automático Argentino Modelo 67</em> (FAA-67). Argentine industry manufactured the 5.6×40 mm ammunition under license.</p>"},
      {id:"proposals",title:"Unregistered proposals",html:"<p>Congo-related discussions refer to proposed A3 and A4 configurations, a grenade-launcher program, and a mounting strip. These items are not adopted entries in the controlling registry. They remain working concepts unless a later registry revision establishes them.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"Weapon family",label:"German Postwar Small Arms"},{href:"gewehr-58.html",kicker:"Full-power counterpart",label:"Gewehr 58"},{href:"stg-82.html",kicker:"Elite successor",label:"StG 82"},{href:"einheitsleiste-79.html",kicker:"Upgrade interface",label:"Einheitsleiste 79"}],
    facts:[["Introduction","1961"],["Cartridge","5.6×40 mm"],["Feed","30-round magazine"],["Action","Gas piston; rotating bolt"],["Receiver","Stamped steel"],["Barrel","420 mm"],["Loaded weight","3.7 kg"],["Cuban designation","FA-60"],["Argentine designation","FAA-67"]]
  }),

  "stg-82": germanWeaponArticle({
    title:"StG 82",
    eyebrow:"Greater German Reich · modular assault rifle · 1983",
    landscape:smallArmsLandscape,
    lead:"The StG 82 was a modular German 5.6×40 mm assault rifle introduced in 1983 for elite units. It added polymer furniture, ambidextrous controls, a folding stock, three-round burst, a 40×46 mm grenade launcher, and the Einheitsleiste 79 mounting bar.",
    canon:"The designation, 1983 introduction, cartridge, 30-round magazine, listed features, elite-unit role, and non-universal 1985 status are established. Action, mass, dimensions, manufacturer, production total, optical suite, named users, and detailed variants remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The StG 82 supplemented the <a href='stg-60.html'>StG 60</a> after more than two decades of standard service. The new rifle concentrated modular and ergonomic changes in a weapon intended for selected units rather than an immediate army-wide replacement.</p>"},
      {id:"design",title:"Design",html:"<p>The weapon fired 5.6×40 mm ammunition from a 30-round magazine. Registered features included polymer furniture, ambidextrous controls, a folding stock, and a three-round burst setting.</p><p>The registry does not specify the action, barrel length, loaded mass, overall length, cyclic rate, or standard sight.</p>"},
      {id:"launcher",title:"Grenade launcher",html:"<p>An underbarrel launcher fired 40×46 mm grenades. Its formal model designation, sighting arrangement, grenade types, and independent production history remain open.</p>"},
      {id:"mounting",title:"Mounting interface",html:"<p>The rifle natively carried the <a href='einheitsleiste-79.html'>Einheitsleiste 79</a>, a German dovetail-and-cross-slot mounting bar. It should not be illustrated or described as a Picatinny rail.</p>"},
      {id:"service",title:"Service",html:"<p>Elite units received the StG 82 from 1983. It was not universal by 1985, when the StG 60 remained the standard German assault rifle. Exact recipient formations and quantities have not been fixed.</p>"},
      {id:"status",title:"Documented status",html:"<p>No manufacturer, procurement total, cost, export customer, or replacement schedule is established. Its modular fittings do not establish every accessory shown in later concept art as standard issue.</p>"}
    ],
    related:[{href:"stg-60.html",kicker:"Standard rifle",label:"StG 60"},{href:"einheitsleiste-79.html",kicker:"Native interface",label:"Einheitsleiste 79"},{href:"leichtes-mg-76.html",kicker:"Shared cartridge",label:"leichtes MG 76"}],
    facts:[["Introduction","1983"],["Cartridge","5.6×40 mm"],["Feed","30-round magazine"],["Furniture","Polymer"],["Stock","Folding"],["Fire control","Includes three-round burst"],["Grenade launcher","Underbarrel 40×46 mm"],["Mounting bar","Einheitsleiste 79"],["1985 status","Elite issue; not universal"]]
  }),

  "mg-68": germanWeaponArticle({
    title:"MG 68",
    eyebrow:"Greater German Reich · general-purpose machine gun · 1968",
    landscape:smallArmsLandscape,
    lead:"The MG 68 was the lighter standard German general-purpose machine gun introduced in 1968. It fired 7.92×57 mm ammunition from a disintegrating belt and continued the universal-machine-gun role of the MG 42 and MG 52.",
    canon:"The designation, introduction date, cartridge, disintegrating-belt feed, lighter standard GPMG role, Argentine AA-68 designation, and broad engineering lineage are established. Mechanism, mass, barrel length, rate of fire, belt-box capacity, mounts, manufacturer, variants, and production total remain open.",
    sections:[
      {id:"lineage",title:"Lineage",html:"<p>The MG 42 established Germany's wartime universal-machine-gun system. The MG 52 simplified the system for postwar production and introduced a disintegrating belt. The MG 68 became the lighter standard GPMG in 1968.</p><p>Surviving Gerät 06 work informed later German machine-gun engineering, but the registry does not assign a specific production action to the MG 68.</p>"},
      {id:"design",title:"Design",html:"<p>The MG 68 fired the 7.92×57 mm full-power cartridge from a disintegrating belt. It was lighter than the preceding standard in its registered description. No exact mass, cyclic rate, barrel-change arrangement, or standard belt capacity has been fixed.</p>"},
      {id:"role",title:"Service role",html:"<p>The weapon served as the standard general-purpose machine gun from 1968. Its cartridge was shared with the <a href='gewehr-58.html'>Gewehr 58</a>. The <a href='leichtes-mg-76.html'>leichtes MG 76</a> later supplied a lighter 5.6×40 mm squad automatic weapon without replacing the MG 68's general-purpose role.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina imported the weapon under the designation <em>Ametralladora Argentina Modelo 68</em> (AA-68). The source establishes an imported German weapon under an Argentine service name, not an independently designed Argentine machine gun.</p>"},
      {id:"status",title:"Documented status",html:"<p>Tripod patterns, vehicle mounts, optical sights, tropical modifications, production sites, and 1985 inventories remain open. Historical MG 3 specifications should not be copied into the setting without registry support.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"Overview",label:"German Postwar Small Arms"},{href:"gewehr-58.html",kicker:"Shared cartridge",label:"Gewehr 58"},{href:"leichtes-mg-76.html",kicker:"Squad weapon",label:"leichtes MG 76"}],
    facts:[["Introduction","1968"],["Cartridge","7.92×57 mm"],["Feed","Disintegrating belt"],["Role","General-purpose machine gun"],["Predecessors","MG 42 and MG 52"],["Argentine designation","AA-68"],["Exact mass","Open"],["Production total","Open"]]
  }),

  "leichtes-mg-76": germanWeaponArticle({
    title:"leichtes MG 76",
    eyebrow:"Greater German Reich · squad automatic weapon · 1976",
    landscape:smallArmsLandscape,
    lead:"The leichtes MG 76 was a German 5.6×40 mm squad automatic weapon introduced in 1976. It was fed from a 100-round belt box and provided sustained automatic fire using the standard assault-rifle cartridge.",
    canon:"The designation, 1976 introduction, cartridge, 100-round belt-box feed, and squad automatic weapon role are established. Manufacturer, mechanism, dimensions, mass, barrel system, rate of fire, production total, variants, and unit distribution remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The standard <a href='stg-60.html'>StG 60</a> established 5.6×40 mm as the ordinary German rifle cartridge in 1961. The leichtes MG 76 extended that ammunition system to a belt-fed squad weapon fifteen years later.</p>"},
      {id:"design",title:"Design",html:"<p>The weapon used a 100-round belt box. The registry does not specify whether the belt was disintegrating, the type of feed container, the operating mechanism, barrel length, quick-change procedure, or loaded mass.</p>"},
      {id:"role",title:"Service role",html:"<p>The leichtes MG 76 was registered as a squad automatic weapon. It complemented the full-power <a href='mg-68.html'>MG 68</a>, which remained the standard general-purpose machine gun.</p>"},
      {id:"ammunition",title:"Ammunition",html:"<p>Its 5.6×40 mm cartridge was shared with the StG 60 and <a href='stg-82.html'>StG 82</a>. Magazine interchangeability, belt-link pattern, tracer mix, and specialist ammunition have not been established.</p>"},
      {id:"status",title:"Documented status",html:"<p>No export designation, licensed producer, procurement total, or 1985 inventory is fixed. Later illustrations should avoid assigning features from a real-world light machine gun unless supported by a visual-design decision.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"Overview",label:"German Postwar Small Arms"},{href:"stg-60.html",kicker:"Shared ammunition",label:"StG 60"},{href:"mg-68.html",kicker:"General-purpose counterpart",label:"MG 68"}],
    facts:[["Introduction","1976"],["Cartridge","5.6×40 mm"],["Feed","100-round belt box"],["Role","Squad automatic weapon"],["Operating mechanism","Open"],["Loaded mass","Open"],["Production total","Open"]]
  }),

  "einheitsleiste-79": germanWeaponArticle({
    title:"Einheitsleiste 79",
    category:"Military standard",
    eyebrow:"Greater German Reich · weapon mounting interface",
    infoboxKicker:"German equipment standard",
    landscape:smallArmsLandscape,
    lead:"The Einheitsleiste 79 was the German dovetail-and-cross-slot mounting standard used on late postwar small arms. The StG 82 carried it natively, while upgraded StG 60A6 rifles accepted it through an adapter.",
    canon:"The name, dovetail-and-cross-slot geometry, distinction from Picatinny, native StG 82 use, and StG 60A6 adapter are established. Formal adoption date, dimensions, slot pitch, materials, responsible standards office, accessory catalog, and use beyond the named rifles remain open.",
    sections:[
      {id:"standard",title:"Standard",html:"<p>The Einheitsleiste combined a dovetail body with cross slots. The arrangement supplied a common attachment interface for weapon accessories. Its designation includes <em>79</em>, but the surviving registry does not separately state an adoption order or exact date.</p>"},
      {id:"distinction",title:"Distinction from Picatinny",html:"<p>The German bar was not a Picatinny rail. Its cross-slot appearance does not establish compatibility with later American MIL-STD-1913 dimensions. Drawings and models should preserve the dovetail component rather than substitute a generic rail.</p>"},
      {id:"stg82",title:"StG 82",html:"<p>The <a href='stg-82.html'>StG 82</a> incorporated the Einheitsleiste natively when it entered elite-unit service in 1983. The registry does not list the standard optic, night sight, aiming device, or carrying accessory fitted to the bar.</p>"},
      {id:"stg60",title:"StG 60A6 adapter",html:"<p>Upgraded <a href='stg-60.html'>StG 60A6</a> rifles could accept an adapter for the mounting bar. The conversion quantity, adapter position, and effect on existing sights remain open.</p>"},
      {id:"comparisons",title:"Contemporary interfaces",html:"<p>Other blocs maintained distinct pre-1995 interfaces, including the Enfield Dovetail Pattern 76, Japanese Type 41 rib, and Latin Guida Comune 79. The setting does not use Picatinny as a universal earlier standard.</p>"},
      {id:"documentation",title:"Documentation",html:"<p>Exact engineering drawings, tolerances, accessory retention tests, and procurement instructions have not been added to the reference corpus. The article therefore records the interface principle rather than a fabrication specification.</p>"}
    ],
    related:[{href:"stg-82.html",kicker:"Native installation",label:"StG 82"},{href:"stg-60.html",kicker:"Adapter installation",label:"StG 60"},{href:"german-postwar-small-arms.html",kicker:"System overview",label:"German Postwar Small Arms"}],
    facts:[["Type","Dovetail-and-cross-slot mounting bar"],["Picatinny compatible","No"],["Native weapon","StG 82"],["Adapted weapon","StG 60A6"],["Formal adoption order","Open"],["Dimensions","Open"],["Accessory catalog","Open"]],
    categories:["Germany","Military standards","Small arms","Military equipment"]
  }),

  "german-antitank-weapons": germanWeaponArticle({
    title:"German postwar antitank weapons",
    category:"Military technology",
    eyebrow:"Greater German Reich · infantry antitank systems · 1966–1985",
    infoboxKicker:"Antitank overview",
    landscape:fireSupportLandscape,
    lead:"German postwar infantry antitank equipment combined the long-range wire-guided Drachen 66 with the short-range disposable Panzerfaust 74. Both systems entered foreign service, including Argentine formations, while serving different engagement ranges and tactical echelons.",
    canon:"The two registered systems, dates, calibers, guidance or warhead type, effective ranges, penetration, roles, and Argentine service designations are established. Manufacturers, weights, complete ammunition families, launch-unit organization, production totals, and the proposed Panzerfaust 74M remain open.",
    sections:[
      {id:"system",title:"Weapon system",html:"<p>The <a href='drachen-66.html'>Drachen 66</a> provided a 3,000 m wire-guided antitank missile for infantry and vehicle use. The <a href='panzerfaust-74.html'>Panzerfaust 74</a> provided a 400 m disposable HEAT weapon at squad and platoon ranges.</p><p>The weapons overlapped in target type but differed in guidance, preparation, crew requirements, and effective distance.</p>"},
      {id:"drachen",title:"Drachen 66",html:"<p>Introduced in 1966, the Drachen used a 135 mm missile and penetrated 600 mm of rolled homogeneous armor in the registered baseline. Vehicle and infantry use are both established; the specific launch vehicles and infantry table of organization remain open.</p>"},
      {id:"panzerfaust",title:"Panzerfaust 74",html:"<p>Introduced in 1974, the Panzerfaust fired a 110 mm disposable HEAT projectile. Its registered effective range was 400 m and its penetration was 650 mm RHA.</p>"},
      {id:"service",title:"Service",html:"<p>The Drachen equipped the <a href='schuetzenpanzer-71-greif.html'>Schützenpanzer 71 Greif</a> in its registered standard configuration. Infantry use and the Panzerfaust's short-range role completed the antitank system below heavier gun and missile platforms.</p>"},
      {id:"exports",title:"Argentine service",html:"<p>Argentina imported Drachen as <em>Dragón Modelo 70</em> from 1970 and Panzerfaust 74A from 1976. Both appeared in Argentine planning for the South Atlantic war against British armor.</p>"},
      {id:"proposals",title:"Unregistered variants",html:"<p>A proposed Panzerfaust 74M multipurpose variant appears in design discussion but not in the controlling registry. Its warheads and service status remain unconfirmed.</p>"}
    ],
    related:[{href:"drachen-66.html",kicker:"Guided missile",label:"Drachen 66"},{href:"panzerfaust-74.html",kicker:"Disposable weapon",label:"Panzerfaust 74"},{href:"schuetzenpanzer-71-greif.html",kicker:"Vehicle installation",label:"Schützenpanzer 71 Greif"},{href:"german-postwar-artillery.html",kicker:"Fire support",label:"German Postwar Artillery"}],
    facts:[["Guided system","Drachen 66"],["Guided-system range","3,000 m"],["Disposable system","Panzerfaust 74"],["Disposable-system range","400 m"],["Principal service period","1966–1985"],["Argentine forms","Dragón Modelo 70; Panzerfaust 74A"]]
  }),

  "drachen-66": germanWeaponArticle({
    title:"Drachen 66",
    eyebrow:"Greater German Reich · antitank guided missile · 1966",
    landscape:fireSupportLandscape,
    lead:"The Drachen 66 was a German 135 mm wire-guided antitank missile introduced in 1966. Its registered effective range was 3,000 m and its baseline penetration was 600 mm of rolled homogeneous armor.",
    canon:"The designation, introduction, 135 mm caliber, wire guidance, 3,000 m effective range, 600 mm RHA penetration, infantry and vehicle roles, Greif installation, and Argentine Dragón Modelo 70 designation are established. Missile mass, launcher design, crew, flight speed, minimum range, warhead details, variants, and production totals remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The Drachen entered service in 1966 as Germany's registered infantry and vehicle antitank missile. The surviving reference does not identify its manufacturer, experimental predecessors, development office, or trial schedule.</p>"},
      {id:"guidance",title:"Guidance",html:"<p>The missile was wire-guided. Its operator interface, control method, sight magnification, flight time, and minimum engagement distance have not been fixed.</p>"},
      {id:"performance",title:"Performance",html:"<p>The 135 mm missile had a registered effective range of 3,000 m and penetration of 600 mm RHA. The armor test arrangement, angle, warhead construction, and performance against spaced or composite armor remain open.</p>"},
      {id:"deployment",title:"Deployment",html:"<p>Both infantry and vehicle use are established. The <a href='schuetzenpanzer-71-greif.html'>Schützenpanzer 71 Greif</a> carried a Drachen launcher as part of its standard 1972 weapon system. Other launch vehicles and infantry organization have not been listed.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina imported the missile as <em>Dragón Modelo 70</em> beginning in 1970. Argentine forces later fielded it alongside Panzerfaust 74A weapons against British armored forces.</p>"},
      {id:"status",title:"Documented status",html:"<p>Production blocks, improved warheads, night sights, training rounds, reliability, and 1985 inventory are not established. These fields should remain blank rather than inherit specifications from a real-world missile.</p>"}
    ],
    related:[{href:"german-antitank-weapons.html",kicker:"Weapon system",label:"German Postwar Antitank Weapons"},{href:"panzerfaust-74.html",kicker:"Short-range complement",label:"Panzerfaust 74"},{href:"schuetzenpanzer-71-greif.html",kicker:"Vehicle carrier",label:"Schützenpanzer 71 Greif"}],
    facts:[["Introduction","1966"],["Caliber","135 mm"],["Guidance","Wire-guided"],["Effective range","3,000 m"],["Penetration","600 mm RHA"],["Roles","Infantry and vehicle antitank missile"],["Argentine designation","Dragón Modelo 70"]]
  }),

  "panzerfaust-74": germanWeaponArticle({
    title:"Panzerfaust 74",
    eyebrow:"Greater German Reich · disposable antitank weapon · 1974",
    landscape:fireSupportLandscape,
    lead:"The Panzerfaust 74 was a German disposable short-range antitank weapon introduced in 1974. Its 110 mm HEAT projectile had a registered effective range of 400 m and penetration of 650 mm RHA.",
    canon:"The designation, introduction, disposable construction, 110 mm HEAT projectile, 400 m effective range, 650 mm RHA penetration, short-range infantry role, and Argentine Panzerfaust 74A service are established. Launcher mass and length, sights, velocity, arming distance, warhead construction, manufacturer, production totals, and proposed 74M variant remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The Panzerfaust 74 entered service eight years after the <a href='drachen-66.html'>Drachen 66</a>. It supplied a disposable weapon for short-range infantry engagements rather than a replacement for the longer-range guided missile.</p>"},
      {id:"design",title:"Design",html:"<p>The weapon fired a 110 mm HEAT projectile from a disposable launcher. The registry does not specify whether the caliber describes the warhead, launch tube, or both. Exact mass, overall length, sight, muzzle velocity, backblast limits, and safety mechanism remain open.</p>"},
      {id:"performance",title:"Performance",html:"<p>The registered effective range was 400 m. Baseline armor penetration was 650 mm RHA. The test angle, armor arrangement, and performance against spaced or composite protection have not been recorded.</p>"},
      {id:"service",title:"Service",html:"<p>The Panzerfaust 74 was the standard German short-range infantry antitank weapon. Tables of organization, issue scale, training ammunition, and 1985 stock totals remain open.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina imported the weapon as the Panzerfaust 74A from 1976. It served alongside the longer-range <em>Dragón Modelo 70</em>.</p>"},
      {id:"variant",title:"Proposed Panzerfaust 74M",html:"<p>A multipurpose 74M appears in later proposal material. It is not listed in the controlling service registry and should not be presented as an adopted model or assigned fixed warhead performance.</p>"}
    ],
    related:[{href:"german-antitank-weapons.html",kicker:"Weapon system",label:"German Postwar Antitank Weapons"},{href:"drachen-66.html",kicker:"Long-range complement",label:"Drachen 66"},{href:"wehrmacht-congo-generation.html",kicker:"Campaign generation",label:"Wehrmacht Congo Generation"}],
    facts:[["Introduction","1974"],["Projectile","110 mm HEAT"],["Launcher","Disposable"],["Effective range","400 m"],["Penetration","650 mm RHA"],["Role","Short-range infantry antitank weapon"],["Argentine form","Panzerfaust 74A; 1976"]]
  }),

  "german-postwar-artillery": germanWeaponArticle({
    title:"German postwar artillery",
    category:"Military technology",
    eyebrow:"Greater German Reich · divisional fire support · 1955–1985",
    infoboxKicker:"Artillery overview",
    landscape:fireSupportLandscape,
    lead:"German postwar divisional artillery centered on the tracked Panzerhaubitze 55 and Panzerhaubitze 72. Both used the 149.1 mm caliber officially described as 15 cm, while the 1972 model added a longer barrel, powered loading, and an analog fire-direction link.",
    canon:"The registered howitzers, dates, 149.1 mm caliber, official 15 cm terminology, barrel lengths, standard-shell ranges, roles, PzH 72 loading and fire-direction features, and Argentine ammunition and import relationship are established. Chassis, mass, crew, engine, armor, rates of fire, production totals, detailed variants, and the proposed Jägerhaubitze 75 remain open.",
    sections:[
      {id:"caliber",title:"Caliber standard",html:"<p>German service described the 149.1 mm howitzer as <strong>15 cm</strong>. The postwar self-propelled line retained the caliber while changing barrel length, loading assistance, and connection to fire direction.</p>"},
      {id:"pzh55",title:"Panzerhaubitze 55",html:"<p>The <a href='panzerhaubitze-family.html'>Panzerhaubitze 55</a> entered service in 1955 with a 149.1 mm L/30 howitzer. Its registered standard-shell range was 17.5 km. It served as tracked divisional artillery.</p>"},
      {id:"pzh72",title:"Panzerhaubitze 72",html:"<p>The Panzerhaubitze 72 entered service in 1972. Its 149.1 mm L/45 howitzer reached 28.0 km with the registered standard shell. Powered loading and an analog fire-direction link distinguished the system in the registry.</p>"},
      {id:"organization",title:"Service organization",html:"<p>The reference places both vehicles in divisional fire support. Exact batteries, battalion establishments, ammunition vehicles, survey sections, and corps-level assignments have not been fixed.</p><p>The Congo record notes that Panzerhaubitze 72 was too heavy for every Jäger mission. It does not establish a separate Jägerhaubitze 75 as adopted service equipment.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina manufactured compatible ammunition under license while importing the howitzers themselves. The 1978 Argentine 149.1 mm self-propelled howitzer was a Panzerhaubitze-derived imported system under the designation <em>Obús Autopropulsado Modelo 72</em>.</p>"},
      {id:"documentation",title:"Documentation",html:"<p>No chassis family, vehicle weight, crew number, engine, armor scheme, ammunition stowage, sustained rate of fire, or production total is established for either model.</p>"}
    ],
    related:[{href:"panzerhaubitze-family.html",kicker:"Equipment family",label:"Panzerhaubitze 55 and 72"},{href:"german-flakpanzer-lineage.html",kicker:"Divisional air defense",label:"German Flakpanzer Lineage"},{href:"german-antitank-weapons.html",kicker:"Infantry systems",label:"German Postwar Antitank Weapons"},{href:"military-technology.html",kicker:"Portal",label:"Military Technology"}],
    facts:[["Caliber","149.1 mm; officially 15 cm"],["First registered SPH","Panzerhaubitze 55; 1955"],["PzH 55 range","17.5 km standard shell"],["Later SPH","Panzerhaubitze 72; 1972"],["PzH 72 range","28.0 km standard shell"],["PzH 72 fire control","Analog fire-direction link"],["Argentine relationship","Imported howitzers; licensed ammunition"]]
  }),

  "panzerhaubitze-family": germanWeaponArticle({
    title:"Panzerhaubitze 55 and 72",
    eyebrow:"Greater German Reich · tracked self-propelled howitzers · 1955–1985",
    infoboxKicker:"German artillery family",
    landscape:fireSupportLandscape,
    lead:"The Panzerhaubitze 55 and Panzerhaubitze 72 were Germany's registered postwar tracked divisional howitzers. Both mounted 149.1 mm weapons officially described as 15 cm; the 1972 system increased standard-shell range from 17.5 km to 28.0 km.",
    canon:"The designations, introduction years, caliber, official terminology, barrel lengths, ranges, divisional role, PzH 72 powered loading and analog link, and Argentine relationship are established. A direct common chassis lineage is not established, and all vehicle dimensions, mass, crew, propulsion, armor, ammunition capacity, fire rates, production, and variant details remain open.",
    sections:[
      {id:"pzh55",title:"Panzerhaubitze 55",html:"<p>The Panzerhaubitze 55 entered service in 1955. It mounted a 149.1 mm L/30 howitzer and had a registered standard-shell range of 17.5 km. Its tracked chassis provided divisional artillery mobility.</p>"},
      {id:"pzh72",title:"Panzerhaubitze 72",html:"<p>The Panzerhaubitze 72 entered service in 1972 with a 149.1 mm L/45 howitzer. Standard-shell range was 28.0 km. Powered loading assisted ammunition handling, and an analog link connected the vehicle to fire direction.</p>"},
      {id:"comparison",title:"Comparison",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Introduction</th><th>Howitzer</th><th>Standard-shell range</th><th>Registered feature</th></tr></thead><tbody><tr><td>Panzerhaubitze 55</td><td>1955</td><td>149.1 mm L/30</td><td>17.5 km</td><td>Tracked divisional artillery</td></tr><tr><td>Panzerhaubitze 72</td><td>1972</td><td>149.1 mm L/45</td><td>28.0 km</td><td>Powered loading; analog fire-direction link</td></tr></tbody></table></div>"},
      {id:"fire-direction",title:"Fire direction",html:"<p>The analog fire-direction link is established for the Panzerhaubitze 72. The registry does not define the command vehicle, data format, transmission medium, laying process, survey equipment, or degree of automatic gun laying.</p>"},
      {id:"argentina",title:"Argentine service",html:"<p>Argentina imported German howitzers and produced compatible ammunition under license. Its 1978 <em>Obús Autopropulsado Modelo 72</em> was a Panzerhaubitze-derived 149.1 mm L/45 system.</p>"},
      {id:"open",title:"Open specifications",html:"<p>The chassis relationship between the 1955 and 1972 vehicles has not been fixed. Mass, dimensions, crew, engine, road speed, protection, ammunition stowage, rates of fire, and production totals remain open.</p>"}
    ],
    related:[{href:"german-postwar-artillery.html",kicker:"System overview",label:"German Postwar Artillery"},{href:"german-flakpanzer-lineage.html",kicker:"Parallel tracked system",label:"German Flakpanzer Lineage"},{href:"jaeger-arm-germany.html",kicker:"Operational limit",label:"Jäger Arm"}],
    facts:[["Models","Panzerhaubitze 55; Panzerhaubitze 72"],["Introductions","1955; 1972"],["Caliber","149.1 mm; officially 15 cm"],["Barrels","L/30; L/45"],["Standard ranges","17.5 km; 28.0 km"],["Role","Tracked divisional artillery"],["Vehicle specifications","Open"]]
  }),

  "german-flakpanzer-lineage": germanWeaponArticle({
    title:"German postwar Flakpanzer lineage",
    category:"Military technology",
    eyebrow:"Greater German Reich · mobile air defense · 1952–1985",
    infoboxKicker:"Self-propelled air-defense lineage",
    landscape:fireSupportLandscape,
    lead:"Germany's registered postwar Flakpanzer sequence comprised the Flakpanzer IX Kugelblitz II, Flakpanzer X Habicht, and Flakpanzer XI. The line moved from twin 30 mm cannon and optical control to twin 35 mm cannon with separate search and tracking radars.",
    canon:"The three designations, introduction dates, cannon calibers, Kugelblitz II ammunition load and later range radar, Habicht search and range-only tracking radars, and Flakpanzer XI separate search and tracking radars are established. Chassis identities, vehicle mass, crew, engines, radar models and bands, engagement envelopes, production totals, and service variants remain open.",
    sections:[
      {id:"kugelblitz",title:"Flakpanzer IX Kugelblitz II",html:"<p>The Kugelblitz II entered service in 1952 with twin 30×184B mm cannon and 800 rounds carried. It used an enclosed optical air-defense system. Later equipment added range radar, but the date and scope of that modification remain open.</p>"},
      {id:"habicht",title:"Flakpanzer X Habicht",html:"<p>The Habicht entered service in 1962 with twin 35×228 mm cannon. It combined search radar with range-only tracking radar for all-weather divisional air defense.</p><p>The registry does not define radar band, aerial arrangement, tracking in azimuth or elevation, fire-control computer, or ammunition load.</p>"},
      {id:"xi",title:"Flakpanzer XI",html:"<p>The Flakpanzer XI entered service in 1975. It retained twin 35×228 mm cannon and used separate search and tracking radars. The system is the setting's German Gepard-generation mobile air-defense vehicle, but historical Gepard chassis and performance specifications do not automatically apply.</p>"},
      {id:"development",title:"Development",html:"<p>The sequence records successive changes in detection and fire control: enclosed optical control, optical control supplemented by range radar, search with range-only tracking, and finally separate search and tracking radars.</p><p>The reference does not establish that each vehicle used the chassis of the correspondingly numbered tank.</p>"},
      {id:"ammunition",title:"Ammunition",html:"<p>Kugelblitz II used 30×184B mm ammunition. Habicht and Flakpanzer XI used 35×228 mm ammunition. Argentina later imported German-compatible 35×228 mm radar-directed air-defense equipment and manufactured ordinary ammunition under license.</p>"},
      {id:"service",title:"Service",html:"<p>The Habicht is registered as all-weather divisional air defense. Exact unit establishments, battery command vehicles, reload vehicles, radar coordination, and the distribution of older Kugelblitz II vehicles after 1962 remain open.</p>"},
      {id:"open",title:"Open specifications",html:"<p>Vehicle weights, dimensions, armor, crew, propulsion, road speed, gun elevation, rates of fire, effective ceilings, radar ranges, reaction times, and production totals are not fixed for the lineage.</p>"}
    ],
    related:[{href:"german-postwar-artillery.html",kicker:"Divisional fire support",label:"German Postwar Artillery"},{href:"panzerhaubitze-family.html",kicker:"Tracked artillery",label:"Panzerhaubitze 55 and 72"},{href:"military-technology.html",kicker:"Portal",label:"Military Technology"}],
    facts:[["First model","Flakpanzer IX Kugelblitz II; 1952"],["Kugelblitz II armament","Twin 30×184B mm; 800 rounds"],["Second model","Flakpanzer X Habicht; 1962"],["Habicht armament","Twin 35×228 mm"],["Habicht sensors","Search radar; range-only tracking radar"],["Third model","Flakpanzer XI; 1975"],["Flakpanzer XI sensors","Separate search and tracking radars"],["Chassis specifications","Open"]]
  })
});
