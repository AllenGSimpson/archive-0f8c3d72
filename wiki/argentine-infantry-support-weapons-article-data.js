window.deepArticles = window.deepArticles || {};

const argentineWeaponSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Argentine infantry and support-weapons register"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Argentine alignment, industry, and doctrine"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Argentine rearmament and Falklands War"},
  {href:"../battleOrderReferenceCorpus%20-%20AltWWII.md",label:"Battle Order Reference Corpus — South Atlantic forces"},
  {href:"../transcript.md",label:"Master Transcript — German exports and Argentine service system"}
];

const argentineWeaponLandscape = {
  src:"assets/diagrams/argentine-infantry-support-weapons.svg",
  alt:"Timeline of five German-origin weapons entering Argentine service between 1967 and 1978",
  caption:"Argentina gives imported German weapons Spanish-language service identities while producing compatible ammunition and ordinary support materiel"
};

const argentineWeaponArticle = config => ({
  category:"Military equipment",
  eyebrow:"Argentine infantry and fire-support system",
  landscape:argentineWeaponLandscape,
  ...config,
  sources:argentineWeaponSources,
  categories:config.categories || ["Argentina","Infantry weapons","Artillery","Falklands War","German military exports"]
});

Object.assign(window.deepArticles, {
  "argentine-infantry-support-weapons": argentineWeaponArticle({
    title:"Argentine Infantry and Support Weapons",
    eyebrow:"Argentine land armament · 1967–1985",
    infoboxKicker:"Imported combat systems",
    infoboxTitle:"Argentine infantry and support weapons",
    lead:"Argentina's late-twentieth-century land armament system joined imported German rifles, machine guns, antitank weapons, and self-propelled artillery to Argentine ammunition production, Spanish-language documentation, ordinary local spares, and national South Atlantic doctrine. The resulting force was operationally Argentine without being a domestic copy of the German arms industry.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-q9t4b writer=g kind=revision created=2026-08-15T19:40:00-06:00 -->The five registered Argentine service systems, their dates, calibers, German parent systems, imported status, national designations, licensed compatible-ammunition production, ordinary local support capacity, broad Falklands role, and theater baselines of twenty-four Dragón firing posts and twelve Modelo 72 howitzers are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Manufacturers, national contract totals, exact Argentine modifications, detailed unit issue, sighting equipment, tropicalization details beyond the FAA-67 description, wartime expenditure and losses, and postwar service remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"system",title:"National service system",html:"<p>Argentina imports complete German weapons but places them inside a national operating system. Spanish-language manuals, Argentine designations, local radios and support equipment, ordinary spares, compatible ammunition, maintenance practice, and South Atlantic doctrine distinguish Argentine service from simple German unit practice overseas.</p><p>This nationalization does not establish licensed Argentine manufacture of the complete weapons. Where the register specifies local production, it concerns compatible ammunition and ordinary support materiel.</p>"},
      {id:"registry",title:"Registered weapons",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Argentine system</th><th>Service</th><th>Caliber</th><th>German relationship</th><th>Role</th></tr></thead><tbody><tr><td><a href='faa-67.html'>FAA-67</a></td><td>1967</td><td>5.6×40 mm</td><td>Tropicalized StG 60 import</td><td>Standard individual rifle</td></tr><tr><td><a href='aa-68.html'>AA-68</a></td><td>1968</td><td>7.92×57 mm</td><td>Imported MG 68</td><td>General-purpose machine gun</td></tr><tr><td><a href='dragon-modelo-70.html'>Dragón Modelo 70</a></td><td>1970</td><td>135 mm</td><td>Imported Drachen</td><td>Wire-guided antitank missile</td></tr><tr><td><a href='panzerfaust-74a.html'>Panzerfaust 74A</a></td><td>1976</td><td>110 mm</td><td>Imported Panzerfaust 74</td><td>Disposable antitank weapon</td></tr><tr><td><a href='obus-autopropulsado-modelo-72.html'>Obús Autopropulsado Modelo 72</a></td><td>1978</td><td>149.1 mm L/45</td><td>Imported Panzerhaubitze-derived system</td><td>Self-propelled artillery</td></tr></tbody></table></div>"},
      {id:"small-arms",title:"Rifle and machine-gun pair",html:"<p>The <a href='faa-67.html'>Fusil Automático Argentino Modelo 67</a> places a tropicalized German <a href='stg-60.html'>StG 60</a> in Argentine service. The <a href='aa-68.html'>Ametralladora Argentina Modelo 68</a> does the same for the full-power <a href='mg-68.html'>MG 68</a>. Their 5.6×40 mm and 7.92×57 mm cartridges preserve the German rifle-and-general-purpose-machine-gun ammunition division.</p>"},
      {id:"antitank",title:"Layered antitank defense",html:"<p>The wire-guided <a href='dragon-modelo-70.html'>Dragón Modelo 70</a> covers longer engagements, while the disposable <a href='panzerfaust-74a.html'>Panzerfaust 74A</a> gives infantry a short-range weapon. The pair reproduces the complementary roles of the German Drachen and Panzerfaust system under Argentine designations and doctrine.</p>"},
      {id:"artillery",title:"Self-propelled fire support",html:"<p>The <a href='obus-autopropulsado-modelo-72.html'>Obús Autopropulsado Modelo 72</a> enters service in 1978 as an imported 149.1 mm L/45 Panzerhaubitze-derived system. Argentina manufactures compatible artillery ammunition under license while importing the vehicles themselves.</p>"},
      {id:"support",title:"Mortars, fire control, and air defense",html:"<p>Argentina also imports German-compatible mortars, fire-control equipment, and radar-directed 35×228 mm air-defense systems. The register fixes these equipment classes and the local production of ordinary ammunition, but not their complete model lists, quantities, organizations, or manufacturers.</p>"},
      {id:"falklands",title:"Falklands War",html:"<p>Argentine infantry antitank teams and artillery join the <a href='argentine-armored-systems.html'>armored force</a> in the prepared defense of East Falkland. At <a href='battle-mount-pleasant-1985.html'>Mount Pleasant</a>, their function is part of a combined system of vehicles, infantry, pre-registered fire, night equipment, workshops, and local supply rather than a collection of isolated imports.</p><p>The land-armament planning baseline assigns twenty-four Dragón Modelo 70 firing posts and twelve Obús Autopropulsado Modelo 72 howitzers to the theater. National inventories, detailed unit allocations, engagements, expenditure, and losses remain open.</p>"}
    ],
    related:[{href:"faa-67.html",kicker:"Standard rifle",label:"FAA-67"},{href:"aa-68.html",kicker:"General-purpose machine gun",label:"AA-68"},{href:"dragon-modelo-70.html",kicker:"Guided antitank weapon",label:"Dragón Modelo 70"},{href:"panzerfaust-74a.html",kicker:"Disposable antitank weapon",label:"Panzerfaust 74A"},{href:"obus-autopropulsado-modelo-72.html",kicker:"Self-propelled artillery",label:"Obús Autopropulsado Modelo 72"},{href:"argentine-armored-systems.html",kicker:"Companion vehicle system",label:"Argentine Armored Systems"}],
    facts:[["Country","Argentina"],["Coverage","1967–1985"],["Registered named systems","Five"],["Complete-weapon source","Greater German Reich"],["Local production","Compatible ammunition and ordinary support materiel"],["Documentation","Spanish-language service system"],["Falklands baseline","24 Dragón firing posts; 12 Modelo 72 howitzers"],["Principal combat context","Falklands War"]]
  }),

  "faa-67": argentineWeaponArticle({
    title:"Fusil Automático Argentino Modelo 67",
    eyebrow:"Argentine service rifle · introduced 1967",
    infoboxKicker:"Argentine StG 60 service form",
    infoboxTitle:"FAA-67",
    lead:"The Fusil Automático Argentino Modelo 67, abbreviated FAA-67, is Argentina's service designation for an imported tropicalized German StG 60. Introduced in 1967, it fires the 5.6×40 mm cartridge manufactured compatibly in Argentina under license.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-r2v6d writer=g kind=revision created=2026-08-15T19:40:00-06:00 -->The full name, FAA-67 abbreviation, 1967 introduction, 5.6×40 mm cartridge, imported German-built and tropicalized StG 60 identity, and licensed Argentine ammunition production are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Tropicalization measures, manufacturer, procurement total, local furniture or finish, sights, unit issue, variants, wartime performance, and retirement remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Argentina adopts the rifle in 1967, six years after the <a href='stg-60.html'>StG 60</a> enters German service. The Spanish-language name records Argentine service ownership; it does not identify an Argentine-designed or Argentine-built rifle.</p>"},
      {id:"tropicalization",title:"Tropicalized configuration",html:"<p>The imported rifles are registered as tropicalized for Argentine service. The source does not define altered finishes, lubrication, sealing, furniture, springs, corrosion protection, or acceptance tests, and those details remain open.</p>"},
      {id:"ammunition",title:"Ammunition",html:"<p>FAA-67 uses the German 5.6×40 mm cartridge. Argentina manufactures compatible ammunition under license, supporting national stocks without establishing domestic production of the rifle itself.</p><p>Projectile types, loadings, factories, proof standards, and interchange rules remain unregistered.</p>"},
      {id:"parent",title:"Relationship to StG 60",html:"<p>The parent StG 60 uses a gas piston, rotating bolt, stamped receiver, 420 mm barrel, and 30-round magazine in the registered German baseline. These parent-system facts do not by themselves establish every detail of the Argentine tropicalized package.</p>"},
      {id:"service",title:"Argentine service",html:"<p>The rifle forms the individual-weapon component of a wider German-origin system that includes the <a href='aa-68.html'>AA-68</a> machine gun and locally supported ammunition and maintenance. Exact service branches, formations, issue scale, and Falklands inventory remain open.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>No purchase total, factory, serial block, variant sequence, modification list, standard optic, or withdrawal date is fixed. The FAA-67 should therefore not be described as a domestically manufactured clone or assigned unstated StG 60 variants.</p>"}
    ],
    related:[{href:"argentine-infantry-support-weapons.html",kicker:"National weapon system",label:"Argentine Infantry and Support Weapons"},{href:"stg-60.html",kicker:"German parent weapon",label:"StG 60"},{href:"aa-68.html",kicker:"Full-power support weapon",label:"AA-68"},{href:"argentina.html",kicker:"Operator",label:"Argentine Republic"},{href:"falklands-war.html",kicker:"Principal war",label:"Falklands–Malvinas War"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Operator","Argentina"],["Introduction","1967"],["Cartridge","5.6×40 mm"],["Parent system","StG 60"],["Procurement","Imported complete weapon"],["Configuration","Tropicalized"],["Argentine ammunition","Licensed compatible production"],["Complete-rifle manufacture","Not established"]]
  }),

  "aa-68": argentineWeaponArticle({
    title:"Ametralladora Argentina Modelo 68",
    eyebrow:"Argentine general-purpose machine gun · introduced 1968",
    infoboxKicker:"Argentine MG 68 service form",
    infoboxTitle:"AA-68",
    lead:"The Ametralladora Argentina Modelo 68, abbreviated AA-68, is Argentina's service designation for the imported German MG 68 general-purpose machine gun. It enters Argentine service in 1968 and fires 7.92×57 mm ammunition from a disintegrating belt.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-s4x8f writer=g kind=revision created=2026-08-15T19:40:00-06:00 -->The full name, AA-68 abbreviation, 1968 introduction, 7.92×57 mm cartridge, disintegrating-belt feed inherited from the registered parent system, general-purpose role, imported German identity, and Argentine service designation are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Exact mass, action, barrel system, rate of fire, mounts, local modifications, manufacturer, procurement total, unit issue, and postwar service remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Argentina introduces the AA-68 in the same year that the <a href='mg-68.html'>MG 68</a> enters German service. The Argentine designation places the imported weapon inside national documentation, training, and supply practice.</p>"},
      {id:"role",title:"General-purpose role",html:"<p>AA-68 supplies full-power automatic fire for infantry and support use. The exact distribution among bipod, tripod, vehicle, fortress, and other mounts has not been registered.</p>"},
      {id:"ammunition",title:"Ammunition and feed",html:"<p>The weapon fires 7.92×57 mm ammunition from a disintegrating belt, preserving the parent MG 68 ammunition system. Argentina's wider policy includes licensed manufacture of compatible ammunition, but specific AA-68 loadings, belt boxes, link production, and proof standards remain open.</p>"},
      {id:"parent",title:"Relationship to MG 68",html:"<p>AA-68 is an imported German MG 68 under an Argentine service name, not an independently designed Argentine machine gun. The parent weapon's registered lighter GPMG role is established; unstated historical MG 3 specifications are not.</p>"},
      {id:"service",title:"Argentine service",html:"<p>The machine gun complements the 5.6×40 mm <a href='faa-67.html'>FAA-67</a> by retaining a full-power cartridge for sustained fire. Exact unit establishments, crew drills, vehicle installations, and Falklands quantities remain open.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>No local-manufacture license for complete AA-68 weapons is established. Tropical modifications, Argentine sights, mounts, production blocks, losses, and retirement date also remain unregistered.</p>"}
    ],
    related:[{href:"argentine-infantry-support-weapons.html",kicker:"National weapon system",label:"Argentine Infantry and Support Weapons"},{href:"mg-68.html",kicker:"German parent weapon",label:"MG 68"},{href:"faa-67.html",kicker:"Standard individual weapon",label:"FAA-67"},{href:"argentina.html",kicker:"Operator",label:"Argentine Republic"},{href:"falklands-war.html",kicker:"Principal war",label:"Falklands–Malvinas War"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Operator","Argentina"],["Introduction","1968"],["Cartridge","7.92×57 mm"],["Feed","Disintegrating belt"],["Role","General-purpose machine gun"],["Parent system","MG 68"],["Procurement","Imported complete weapon"],["Complete-weapon manufacture","Not established"]]
  }),

  "dragon-modelo-70": argentineWeaponArticle({
    title:"Dragón Modelo 70",
    eyebrow:"Argentine guided antitank missile · introduced 1970",
    infoboxKicker:"Argentine Drachen service form",
    infoboxTitle:"Dragón Modelo 70",
    lead:"Dragón Modelo 70 is Argentina's service designation for the imported German Drachen wire-guided antitank missile. Introduced in 1970, its registered parent system uses a 135 mm missile with a 3,000 m effective range and 600 mm RHA penetration.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-t6z3h writer=g kind=revision created=2026-08-15T19:40:00-06:00 -->The Dragón Modelo 70 designation, 1970 Argentine introduction, imported German Drachen identity, 135 mm caliber, wire guidance, 3,000 m parent-system effective range, 600 mm RHA parent-system penetration, infantry antitank role, and Falklands baseline of twenty-four firing posts are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Argentine launcher configuration, crew, missile block, vehicle mounts, local modifications, national procurement total, detailed unit issue, wartime expenditure, and postwar service remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Argentina imports the <a href='drachen-66.html'>Drachen</a> under the Spanish service name <em>Dragón Modelo 70</em> beginning in 1970. The designation records national adoption four years after the German system enters service.</p>"},
      {id:"guidance",title:"Guidance and performance",html:"<p>The registered parent missile is wire-guided, 135 mm in caliber, effective to 3,000 m, and credited with 600 mm RHA penetration. The Argentine source does not separately identify a modified missile block or different performance figure.</p>"},
      {id:"role",title:"Long-range antitank role",html:"<p>Dragón gives Argentine infantry a guided antitank weapon for engagements beyond the reach of the <a href='panzerfaust-74a.html'>Panzerfaust 74A</a>. The systems are complementary rather than successive replacements.</p>"},
      {id:"deployment",title:"Deployment",html:"<p>Infantry use is established. Parent-system vehicle use does not establish a particular Argentine carrier, launcher vehicle, or table of organization. These details remain open.</p>"},
      {id:"falklands",title:"Falklands War",html:"<p>The land-armament planning baseline assigns twenty-four Dragón firing posts to the Falklands theater for use against British armor and protected movement. Individual positions, engagements, missile expenditure, hit rates, and losses remain unregistered.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>No Argentine manufacture of the complete missile or launcher is established. Missile mass, flight speed, minimum range, night sight, crew, training round, warhead construction, and inventory remain open.</p>"}
    ],
    related:[{href:"argentine-infantry-support-weapons.html",kicker:"National weapon system",label:"Argentine Infantry and Support Weapons"},{href:"drachen-66.html",kicker:"German parent missile",label:"Drachen 66"},{href:"panzerfaust-74a.html",kicker:"Short-range complement",label:"Panzerfaust 74A"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal battle context",label:"Battle of Mount Pleasant"},{href:"argentina.html",kicker:"Operator",label:"Argentine Republic"},{href:"german-antitank-weapons.html",kicker:"Parent weapon system",label:"German Postwar Antitank Weapons"}],
    facts:[["Operator","Argentina"],["Introduction","1970"],["Caliber","135 mm"],["Guidance","Wire-guided"],["Effective range","3,000 m parent baseline"],["Penetration","600 mm RHA parent baseline"],["Parent system","Drachen 66"],["Procurement","Imported complete system"],["Falklands theater baseline","24 firing posts"]]
  }),

  "panzerfaust-74a": argentineWeaponArticle({
    title:"Panzerfaust 74A",
    eyebrow:"Argentine disposable antitank weapon · introduced 1976",
    infoboxKicker:"Argentine Panzerfaust service form",
    infoboxTitle:"Panzerfaust 74A",
    lead:"Panzerfaust 74A is Argentina's imported form of the German Panzerfaust 74 disposable antitank weapon. Entering Argentine service in 1976, it uses the parent system's 110 mm HEAT projectile for short-range infantry defense.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-w8l4b writer=g kind=revision created=2026-08-15T19:30:00-06:00 -->The Panzerfaust 74A designation, 1976 Argentine introduction, imported German identity, disposable construction, 110 mm HEAT projectile, short-range infantry role, and complementary service with Dragón Modelo 70 are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Whether the A suffix marks a physical export modification, exact performance of the Argentine delivery, sights, launcher dimensions and mass, manufacturer, procurement total, unit issue, wartime expenditure, and postwar service remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"adoption",title:"Adoption",html:"<p>Argentina begins importing the weapon in 1976, two years after the <a href='panzerfaust-74.html'>Panzerfaust 74</a> enters German service. The registered source calls the Argentine form Panzerfaust 74A but does not define the suffix.</p>"},
      {id:"design",title:"Disposable weapon",html:"<p>The weapon carries a 110 mm HEAT projectile in a disposable short-range launcher. Launcher length, mass, sight, velocity, arming distance, backblast limits, and warhead construction remain open.</p>"},
      {id:"performance",title:"Performance boundary",html:"<p>The German parent baseline records a 400 m effective range and 650 mm RHA penetration. No separate Argentine performance figure is fixed, so these values describe the parent system rather than a proven export-package difference.</p>"},
      {id:"pair",title:"Relationship to Dragón",html:"<p>Panzerfaust 74A provides the close-range layer beneath the longer-range wire-guided <a href='dragon-modelo-70.html'>Dragón Modelo 70</a>. The two weapons remain in parallel service.</p>"},
      {id:"falklands",title:"Falklands War",html:"<p>The weapon appears in Argentine planning against British armor in the South Atlantic war. Exact issue scale, teams, engagements, expenditure, effectiveness, and losses remain open.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>The A suffix must not be expanded into an unregistered Argentine production or modification program. Complete-weapon manufacture in Argentina, local sights, specialized warheads, and a service relationship to the proposed German 74M are not established.</p>"}
    ],
    related:[{href:"argentine-infantry-support-weapons.html",kicker:"National weapon system",label:"Argentine Infantry and Support Weapons"},{href:"panzerfaust-74.html",kicker:"German parent weapon",label:"Panzerfaust 74"},{href:"dragon-modelo-70.html",kicker:"Long-range complement",label:"Dragón Modelo 70"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal battle context",label:"Battle of Mount Pleasant"},{href:"argentina.html",kicker:"Operator",label:"Argentine Republic"},{href:"german-antitank-weapons.html",kicker:"Parent weapon system",label:"German Postwar Antitank Weapons"}],
    facts:[["Operator","Argentina"],["Introduction","1976"],["Projectile","110 mm HEAT"],["Launcher","Disposable"],["Role","Short-range infantry antitank weapon"],["Parent system","Panzerfaust 74"],["Parent effective range","400 m"],["Parent penetration","650 mm RHA"],["Meaning of A suffix","Open"]]
  }),

  "obus-autopropulsado-modelo-72": argentineWeaponArticle({
    title:"Obús Autopropulsado Modelo 72",
    eyebrow:"Argentine self-propelled howitzer · introduced 1978",
    infoboxKicker:"Imported Panzerhaubitze-derived system",
    infoboxTitle:"Obús Autopropulsado Modelo 72",
    lead:"The Obús Autopropulsado Modelo 72 is Argentina's imported 149.1 mm L/45 self-propelled howitzer introduced in 1978. It is derived from the German Panzerhaubitze system, while Argentina manufactures compatible ammunition under license.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-u8b5j writer=g kind=revision created=2026-08-15T19:40:00-06:00 -->The full designation, 1978 introduction, imported complete-vehicle status, German Panzerhaubitze-derived relationship, 149.1 mm L/45 howitzer, self-propelled artillery role, licensed Argentine compatible-ammunition production, and Falklands theater baseline of twelve vehicles are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Exact relationship to the Panzerhaubitze 72, chassis, mass, crew, engine, armor, range, loading system, fire-direction equipment, ammunition stowage, manufacturer, national procurement total, detailed units, variants, wartime employment, and postwar service remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"procurement",title:"Procurement",html:"<p>Argentina introduces the system in 1978. The howitzers are imported complete from Germany; Argentine industry supplies compatible ammunition and ordinary support rather than manufacturing the vehicles under license.</p>"},
      {id:"lineage",title:"Panzerhaubitze relationship",html:"<p>The Argentine weapon is registered as Panzerhaubitze-derived. It shares the 149.1 mm L/45 gun format of the 1972 German system, but the source does not establish that it is an unchanged <a href='panzerhaubitze-family.html'>Panzerhaubitze 72</a> under a translated name.</p>"},
      {id:"caliber",title:"Howitzer",html:"<p>The weapon is 149.1 mm L/45. German service calls the caliber 15 cm. Argentine nomenclature, breech, chamber, recoil system, barrel life, elevation limits, and precise ammunition interchange remain open.</p>"},
      {id:"fire",title:"Fire support",html:"<p>The system provides mobile heavy artillery to Argentine land forces. The parent Panzerhaubitze 72 uses powered loading and an analog fire-direction link, but those features are not separately fixed for the Argentine derivative.</p>"},
      {id:"ammunition",title:"Ammunition and support",html:"<p>Argentina manufactures compatible howitzer ammunition under license and maintains ordinary spares and national support equipment. Projectile families, propelling charges, factories, proof standards, depot holdings, and sustained supply rates remain unregistered.</p>"},
      {id:"falklands",title:"Falklands War",html:"<p>The land-armament planning baseline assigns twelve Modelo 72 vehicles to the Falklands theater in support of prepared positions and armored forces. Their batteries, firing sites, expenditure, losses, and individual actions remain open.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>No chassis identity, vehicle dimensions, combat weight, crew, engine, protection, road speed, standard range, ammunition load, loading arrangement, or production total is established. Parent-system specifications should not be copied into those open fields.</p>"}
    ],
    related:[{href:"argentine-infantry-support-weapons.html",kicker:"National weapon system",label:"Argentine Infantry and Support Weapons"},{href:"panzerhaubitze-family.html",kicker:"German parent family",label:"Panzerhaubitze 55 and 72"},{href:"argentine-armored-systems.html",kicker:"Supported vehicle system",label:"Argentine Armored Systems"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal battle context",label:"Battle of Mount Pleasant"},{href:"argentina.html",kicker:"Operator",label:"Argentine Republic"},{href:"german-postwar-artillery.html",kicker:"Parent artillery system",label:"German Postwar Artillery"}],
    facts:[["Operator","Argentina"],["Introduction","1978"],["Type","Self-propelled howitzer"],["Caliber","149.1 mm L/45"],["Relationship","German Panzerhaubitze-derived"],["Procurement","Imported complete vehicle"],["Argentine production","Compatible ammunition under license"],["Falklands theater baseline","12 vehicles"],["Exact parent configuration","Open"]]
  })
});

function addArgentineWeaponItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

addArgentineWeaponItem("argentina","sections",{id:"infantry-support-weapons",title:"Infantry and support weapons",html:"<p>Argentina's <a href='argentine-infantry-support-weapons.html'>infantry and support-weapons system</a> places imported German equipment inside Spanish-language doctrine, documentation, maintenance, and ammunition supply. The <a href='faa-67.html'>FAA-67</a> and <a href='aa-68.html'>AA-68</a> arm infantry; <a href='dragon-modelo-70.html'>Dragón Modelo 70</a> and <a href='panzerfaust-74a.html'>Panzerfaust 74A</a> provide layered antitank defense; and the <a href='obus-autopropulsado-modelo-72.html'>Obús Autopropulsado Modelo 72</a> supplies tracked heavy fire support.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"});
addArgentineWeaponItem("argentina","related",{href:"argentine-infantry-support-weapons.html",kicker:"National land armament",label:"Argentine Infantry and Support Weapons"});
addArgentineWeaponItem("argentine-armored-systems","related",{href:"argentine-infantry-support-weapons.html",kicker:"Infantry and fire support",label:"Argentine Infantry and Support Weapons"});
addArgentineWeaponItem("stg-60","related",{href:"faa-67.html",kicker:"Argentine service form",label:"FAA-67"});
addArgentineWeaponItem("mg-68","related",{href:"aa-68.html",kicker:"Argentine service form",label:"AA-68"});
addArgentineWeaponItem("drachen-66","related",{href:"dragon-modelo-70.html",kicker:"Argentine service form",label:"Dragón Modelo 70"});
addArgentineWeaponItem("panzerfaust-74","related",{href:"panzerfaust-74a.html",kicker:"Argentine service form",label:"Panzerfaust 74A"});
addArgentineWeaponItem("german-antitank-weapons","related",{href:"argentine-infantry-support-weapons.html",kicker:"Foreign service system",label:"Argentine Infantry and Support Weapons"});
addArgentineWeaponItem("german-postwar-artillery","related",{href:"obus-autopropulsado-modelo-72.html",kicker:"Argentine derivative",label:"Obús Autopropulsado Modelo 72"});
addArgentineWeaponItem("panzerhaubitze-family","related",{href:"obus-autopropulsado-modelo-72.html",kicker:"Argentine derivative",label:"Obús Autopropulsado Modelo 72"});
addArgentineWeaponItem("operation-sceptre","related",{href:"argentine-infantry-support-weapons.html",kicker:"Defending infantry and artillery",label:"Argentine Infantry and Support Weapons"});
addArgentineWeaponItem("battle-mount-pleasant-1985","related",{href:"argentine-infantry-support-weapons.html",kicker:"Argentine supporting arms",label:"Argentine Infantry and Support Weapons"});
