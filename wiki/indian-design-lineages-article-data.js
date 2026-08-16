window.deepArticles = window.deepArticles || {};

const indianLineageSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Soviet technical diaspora and Indian successor industries"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Indian fragmentation and military-industrial migration"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Soviet collapse and Indian wars"},
  {href:"../transcript.md",label:"Master Transcript — armored, aviation, and naval design lineages"},
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — vehicle development context"}
];

const groundGenealogy = {src:"assets/diagrams/indian-armored-genealogies.svg",alt:"Diagram of Soviet armored-design genealogies divided among Indian successor states",caption:"Archive reconstruction · competing ground-vehicle lineages"};
const aircraftGenealogy = {src:"assets/diagrams/indian-aircraft-design-diaspora.svg",alt:"Diagram of Soviet aircraft-design lineages divided among Iran and Indian successor states",caption:"Archive reconstruction · southern aviation design branches"};
const navalGenealogy = {src:"assets/diagrams/iran-karachi-naval-diaspora.svg",alt:"Diagram of Russian naval design cores in Iran and production branches in Karachi",caption:"Archive reconstruction · Iran–Karachi naval design system"};

const lineageRelated = [
  {href:"soviet-military-industrial-diaspora.html",kicker:"Human movement",label:"Soviet Military-Industrial Diaspora"},
  {href:"paired-design-bureau-system.html",kicker:"Institutional form",label:"Paired Design-Bureau System"},
  {href:"indian-armored-design-genealogies.html",kicker:"Ground-system overview",label:"Indian Armored Design Genealogies"},
  {href:"india-successors.html",kicker:"Regional setting",label:"Indian Successor States"}
];

const lineageArticle = config => ({
  category:"Military-industrial lineages",eyebrow:"Soviet technical diaspora · southern successor industries · 1946 onward",infoboxKicker:"Post-Soviet design institution",...config,
  sources:[...indianLineageSources,...(config.additionalSources || [])],
  categories:config.categories || ["India","Military industry","Soviet diaspora","Design bureaus"]
});

const lineageAircraftListSection = rows => ({
  id:"aircraft",title:"List of Aircraft",
  html:`<p>The internal designation records the original design-office or development identity. The official designation is the accepted Soviet title. These inherited aircraft establish the lineage; they do not fix the names of later Indian or Iranian designs.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    return `<tr><td>${internal}</td><td>${href ? `<a href='${href}'>${official}</a>` : official}${note}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

Object.assign(window.deepArticles,{
  "kartsev-nizhny-tagil-congress":lineageArticle({
    title:"Kartsev–Nizhny Tagil Lineage in Congress India",infoboxTitle:"Kartsev–Nizhny Tagil lineage",flag:groundGenealogy,
    lead:"The Kartsev–Nizhny Tagil lineage in Congress India is the southern institutional descendant of the Soviet medium-tank establishment associated with later T-54 development, Object 155, Object 140, and Object 166. Congress turns its production engineering and mass-army logic into Vijaya and a continuing family of standardized Indian armored vehicles.",
    canon:"The migration to Congress India, Nizhny Tagil and Kartsev ancestry, T-54/T-55 and Object 140 knowledge, Vijaya outcome, mass-production orientation, later longer-gunned and second-generation development, and Indian ownership are established. Bureau name, migrant roster, factory sites, exact successors, production totals, and specifications beyond Vijaya remain open.",
    sections:[
      {id:"ancestry",title:"From Plant No. 183 to a southern branch",html:"<p>The lineage carries production drawings, diesel and transmission practice, turret and gun-installation work, suspension calculations, test experience, and partial research rather than a complete transplanted factory.</p>"},
      {id:"kartsev",title:"The Kartsev distinction",html:"<p>The later T-55 or Object 155 path belongs principally to Leonid Kartsev's Nizhny Tagil office rather than Morozov's postwar Kharkiv bureau. This distinction separates Congress's practical mass-tank family from Hindustan's more ambitious Kharkiv inheritance.</p>"},
      {id:"fit",title:"Why Congress recruits it",html:"<p>Congress possesses a large conscription base, inherited ordnance and railway institutions, several fronts, and a defensive doctrine requiring many mobile reserves. It values a vehicle that national factories can manufacture and depots can keep available in useful numbers.</p>"},
      {id:"vijaya",title:"Vijaya becomes Indian",html:"<p>The <a href='vijaya-tank.html'>Vijaya Model 62</a> combines Russian development knowledge with tropical cooling, dust filtration, monsoon-proof electrics, Congress bridge and rail limits, local armor grades, Indian radios, and domestic ammunition.</p>"},
      {id:"object140",title:"The Object 140 argument survives",html:"<p>Object 140 research supports gun, suspension, and layout experiments even where the complete historical project is not reproduced. Without one Soviet ministry ending every unsuccessful branch, technically interesting alternatives can survive as prototypes or subsystems.</p>"},
      {id:"successors",title:"Longer guns and a second generation",html:"<p>The lineage can produce a longer-gunned successor occupying the broad battlefield position of the historical T-62 and, by the 1970s, a simpler second-generation mass tank comparable in strategic role to the T-72. Names and specifications remain open.</p>"},
      {id:"system",title:"A national armored system",html:"<p>Congress connects the tank to domestic ammunition, recovery vehicles, engineers, command chassis, mechanized infantry, training schools, and rail mobilization. Standardization rather than a single specification is the lineage's chief military product.</p>"},
      {id:"identity",title:"A Congress Indian institution",html:"<p>Russian founders remain honored, but apprentices, managers, crews, suppliers, and later chief designers become Indian. Foreign observers classify the mature products as Congress Indian because the state owns the factory, trials, doctrine, and development decisions.</p>"}
    ],related:[...lineageRelated,{href:"congress-indian-ordnance-system.html",kicker:"Host system",label:"Congress Indian Ordnance System"},{href:"chelyabinsk-kurgan-congress.html",kicker:"Mechanized partner",label:"Chelyabinsk–Kurgan Lineage"}],
    facts:[["Host state","Congress India"],["Northern ancestry","Nizhny Tagil; OKB-520"],["Principal designer lineage","Leonid Kartsev"],["Technical inheritance","T-54/T-55, Object 140, Object 166"],["Principal product","Vijaya Model 62"],["Industrial doctrine","Standardization and mass availability"],["Later direction","Longer-gunned and second-generation mass tanks"],["Formal Indian bureau name","Open"]]
  }),

  "morozov-kharkiv-hindustan":lineageArticle({
    title:"Morozov–Kharkiv Lineage in Hindustan",infoboxTitle:"Morozov–Kharkiv lineage",flag:groundGenealogy,
    lead:"The Morozov–Kharkiv lineage in Hindustan is the Indian successor to the compact, technically ambitious armored-development tradition leading through Objects 430, 435, 432, and 434. It gives Delhi fewer but more sophisticated tanks than Congress India's Vijaya system, at the cost of higher production, maintenance, and training demands.",
    canon:"The Hindustani destination, Morozov and Kharkiv ancestry, Object 430–435–432–434 development logic, compact advanced tank family, smaller-force rationale, technical strengths, maintenance burden, and rivalry with Vijaya are established. Bureau title, individual designers, engine choice, crew size, vehicle names, dates, and specifications remain open.",
    sections:[
      {id:"ancestry",title:"The Kharkiv inheritance",html:"<p>The post-1951 Morozov tradition pursues compact powerplants, ambitious protection, reduced internal volume, automatic loading, and exceptional combat power from a comparatively light chassis rather than refining the Nizhny Tagil mass-production line.</p>"},
      {id:"migration",title:"A bureau divided by collapse",html:"<p>Personnel, records, experimental knowledge, and production specialists move east during the Soviet breakdown and later south through industrial-asylum contracts. The Hindustani branch is a reconstruction, not an intact evacuation of the old organization.</p>"},
      {id:"strategy",title:"Why Hindustan chooses sophistication",html:"<p>Hindustan must defend Delhi while watching Congress, Khalistan, Kashmir, Pakistan, and Rajputana. It cannot field immense armored armies everywhere and therefore seeks greater battlefield performance from each deployable vehicle.</p>"},
      {id:"prototypes",title:"The Object 430 and 435 stage",html:"<p>Early prototypes test compact engines, new layouts, protection schemes, and gun installations. The projects give Hindustan a technically serious program before its factories and maintenance schools can support a mature family.</p>"},
      {id:"mature",title:"The 432–434 family",html:"<p>The mature line resembles the technical position of the T-64 tradition: low, compact, highly armed, and advanced for its weight. It is not a Soviet vehicle with a Hindustani badge; local climate, industry, rail movement, radios, and ammunition reshape the design.</p>"},
      {id:"burden",title:"Cost and maintenance",html:"<p>Specialized engines, tighter packaging, automatic systems, and demanding quality control produce lower availability when training or spares fail. Congress propaganda contrasts these burdens with the larger standardized Vijaya fleet.</p>"},
      {id:"rivalry",title:"The argument with Congress",html:"<p>Congress claims three maintainable tanks are worth more than one exquisite machine; Hindustan claims greater performance reduces the force required at each threatened frontier. Neither slogan captures the whole operational balance.</p>"},
      {id:"legacy",title:"A Hindustani advanced-armor school",html:"<p>By the 1970s the branch is led increasingly by Indian engineers. Its influence reaches fire control, compact vehicle architecture, advanced protection, and maintenance-intensive elite formations beyond the original émigré community.</p>"}
    ],related:[...lineageRelated,{href:"hindustani-military-industry.html",kicker:"Host industry",label:"Military Industry of Hindustan"},{href:"mytishchi-air-defense-hindustan.html",kicker:"Companion lineage",label:"Mytishchi Air-Defense Lineage"},{href:"hindustan-rajputana-war.html",kicker:"Major combat setting",label:"Hindustan–Rajputana War"}],
    facts:[["Host state","Hindustan"],["Northern ancestry","Kharkiv armored bureau"],["Principal designer lineage","Alexander Morozov"],["Technical inheritance","Objects 430, 435, 432, and 434"],["Strategic analogue","T-64 family"],["Comparative strength","Compact advanced combat power"],["Comparative weakness","Cost, maintenance, and production difficulty"],["Hindustani vehicle names","Open"]]
  }),

  "kotin-kirov-hyderabad":lineageArticle({
    title:"Kotin–Kirov Heavy-Armor Lineage in Hyderabad",infoboxTitle:"Kotin–Kirov heavy-armor lineage",flag:groundGenealogy,
    lead:"The Kotin–Kirov heavy-armor lineage in Hyderabad is the princely successor to the Leningrad Kirov, Plant No. 100, VNII-100, and Chelyabinsk heavy-tank communities. Court finance and an export-oriented arms industry preserve limited IS-7-, T-10M-, and Object 277-derived machines that a unified Soviet procurement system would probably have canceled or standardized away.",
    canon:"The Hyderabad destination, Kotin–Kirov and VNII-100 ancestry, heavy and breakthrough specialization, limited IS-7/T-10M/Object 277 derivatives, prestige and bunker-assault roles, high cost, and export orientation are established. Bureau title, factory, exact fleet, the working thirty-to-forty IS-7 estimate, designations, and specifications remain open.",
    sections:[
      {id:"tradition",title:"A composite heavy-tank tradition",html:"<p>The lineage is not one unchanged bureau. It joins displaced personnel and knowledge from Leningrad Kirov, Plant No. 100, VNII-100, and the wartime Chelyabinsk heavy-tank system under a recognizable Kotin–Kirov institutional identity.</p>"},
      {id:"host",title:"Why Hyderabad can host it",html:"<p>Hyderabad combines concentrated dynastic wealth, a comparatively small prestigious army, court procurement, commercial arms contracts, and a maritime outlet through the <a href='hyderabad-machilipatnam-corridor.html'>Machilipatnam corridor</a>.</p>"},
      {id:"is7",title:"The IS-7 branch",html:"<p>An IS-7-derived vehicle can enter very limited service because no central ministry is able to cancel it for the whole subcontinent. A working estimate of thirty or forty vehicles is plausible but remains deliberately unfixed.</p>"},
      {id:"t10",title:"T-10M-type service heavies",html:"<p>Less extreme heavy tanks occupy guard, breakthrough, and fortress-assault roles. Large guns and protection are valuable against bunkers and urban strongpoints even when weak bridges and transport restrict deployment.</p>"},
      {id:"277",title:"Object 277-type development",html:"<p>The lineage continues toward faster heavy vehicles and large-caliber firepower. Prototypes and short runs matter because a prince or export consortium may finance twenty useful machines without demanding a universal army standard.</p>"},
      {id:"prestige",title:"Dynastic prestige and military utility",html:"<p>Heavy armor represents court wealth, technical modernity, and the ability to punish a siege. Its political value can exceed its operational availability, especially during parades, alliance demonstrations, and contract negotiations.</p>"},
      {id:"limits",title:"The bridge and workshop problem",html:"<p>Weight, fuel use, recovery, rail loading, and maintenance prevent the family from replacing ordinary tanks. Deployment follows selected corridors and prepared workshops rather than the whole Indian road network.</p>"},
      {id:"legacy",title:"A commercial heavy-armor school",html:"<p>Hyderabad sells prototypes, technical teams, overhaul, and small production batches to allied princes. The bureau survives less as one national fleet program than as a durable market for specialized armored power.</p>"}
    ],related:[...lineageRelated,{href:"hyderabadi-arms-industry.html",kicker:"Host industry",label:"Arms Industry of Hyderabad"},{href:"uralmash-hyderabad.html",kicker:"Artillery partner",label:"Uralmash Lineage in Hyderabad"},{href:"object-279-india.html",kicker:"Experimental offshoot",label:"Object 279 Assault-Tank Project"}],
    facts:[["Host state","Hyderabad"],["Ancestry","Leningrad Kirov, Plant No. 100, VNII-100, Chelyabinsk"],["Designer tradition","Joseph Kotin"],["Representative families","IS-7, T-10M, Object 277"],["Production style","Prototypes and short runs"],["Principal roles","Breakthrough, fortress assault, prestige"],["IS-7-derived quantity","Working estimate only"],["Formal bureau title","Open"]]
  }),

  "chelyabinsk-heavy-school-rajputana":lineageArticle({
    title:"Chelyabinsk Heavy-Armor School in Rajputana",infoboxTitle:"Chelyabinsk heavy-armor school",flag:groundGenealogy,
    lead:"The Chelyabinsk heavy-armor school in Rajputana is a splinter technical lineage recruited by the princely concert as a rival to Hyderabad's Kotin–Kirov establishment. Its limited Object 770-like family equips royal guards and fortress reserves around Jaipur, making an assault disproportionately expensive without pretending Rajputana can sustain a mass heavy-tank army.",
    canon:"The Rajputana destination, Chelyabinsk splinter origin, rivalry with Hyderabad, Object 770-like family, limited production, guard and fortress mission, Jaipur-defense role, and possible export to smaller princes are established. Patron court, bureau name, factories, vehicle designations, numbers, specifications, and exact wartime record remain open.",
    sections:[
      {id:"split",title:"A rival branch leaves the heavy-tank diaspora",html:"<p>Not every Chelyabinsk specialist joins the Hyderabad establishment. Rajputana's courts recruit a splinter group eager to preserve a competing answer to the final heavy-tank design arguments.</p>"},
      {id:"concert",title:"A bureau inside a princely concert",html:"<p>Rajputana is not one centralized procurement state. Court subscriptions, shared defense funds, arsenals, and negotiated unit assignments support the project while preserving the prestige of participating rulers.</p>"},
      {id:"770",title:"The Object 770-like family",html:"<p>The principal design follows the broad technical position of Object 770: a distinct Chelyabinsk answer rather than a copy of Hyderabad's Kirov heavy vehicles. Exact armament, engine, armor, and name remain open.</p>"},
      {id:"mission",title:"Defense of Jaipur and the approaches",html:"<p>Heavy tanks wait near prepared roads, railheads, workshops, and fortress belts where their mobility limits matter less. Their task is to counterattack Hindustani armor and force an invader to bring disproportionate artillery and engineers.</p>"},
      {id:"guards",title:"Royal and fortress formations",html:"<p>Scarcity concentrates the machines in royal guards, common reserve units, and politically visible fortress commands. Assignment of a vehicle can become an argument about rank among the courts.</p>"},
      {id:"exports",title:"Exports to smaller princes",html:"<p>Complete heavy tanks remain rare, but turrets, guns, powertrain components, technical teams, and overhaul contracts can reach neighboring princely states seeking a local deterrent.</p>"},
      {id:"rivalry",title:"The Hyderabad rivalry",html:"<p>Each school claims to preserve the authentic Russian heavy-armor tradition. Trials, contracts, court newspapers, and battlefield reports become instruments in a technical rivalry inseparable from princely politics.</p>"},
      {id:"limits",title:"A deterrent, not a national fleet",html:"<p>Rajputana lacks the central command, transport depth, and fiscal base for large numbers. The family succeeds if it makes one invasion corridor too costly, not if it replaces every imported or lighter vehicle.</p>"}
    ],related:[...lineageRelated,{href:"rajputana.html",kicker:"Host polity",label:"Rajputana"},{href:"hindustan-rajputana-war.html",kicker:"Defining war",label:"Hindustan–Rajputana War"},{href:"kotin-kirov-hyderabad.html",kicker:"Rival heavy school",label:"Kotin–Kirov Lineage in Hyderabad"}],
    facts:[["Host polity","Rajputana"],["Technical origin","Chelyabinsk splinter group"],["Representative concept","Object 770-like heavy tank"],["Principal mission","Fortress reserve and counterattack"],["Primary defended center","Jaipur approaches"],["Typical operators","Royal guards and concert reserves"],["Production scale","Limited"],["Vehicle designation","Open"]]
  }),

  "uralmash-hyderabad":lineageArticle({
    title:"Uralmash Artillery Lineage in Hyderabad",infoboxTitle:"Uralmash artillery lineage",flag:groundGenealogy,
    lead:"The Uralmash artillery lineage in Hyderabad is the southern successor to Soviet self-propelled-gun and tank-destroyer design work. It produces assault guns, tracked howitzers, long-range antitank vehicles, and limited Object 120-type systems for a subcontinent defined by bunkers, fortified corridors, and buyers willing to fund small specialized runs.",
    canon:"The Hyderabad and central-princely destination, Uralmash/OKB-3 ancestry, self-propelled artillery specialization, Object 120-like limited service, bunker and long-range antitank requirement, small-run commercial logic, and wider export are established. Bureau name, plant, project dates, gun calibers, quantities, buyers, and service designations remain open.",
    sections:[
      {id:"ancestry",title:"The self-propelled-artillery inheritance",html:"<p>Object 120 Taran belongs to the Uralmash self-propelled-artillery tradition rather than the Morozov, Astrov, or Kirov main-tank branches. Its expertise centers on mounting unusually powerful guns on tracked chassis.</p>"},
      {id:"problem",title:"The fortified-front problem",html:"<p>Indian armies need to destroy bunkers, concrete strongpoints, enemy tanks, and protected urban positions without driving every vehicle into the densest mine and infantry belts.</p>"},
      {id:"host",title:"Hyderabad as principal host",html:"<p>The state's court-contract economy tolerates expensive specialized systems and can market them to princes unable to maintain a complete development bureau of their own.</p>"},
      {id:"taran",title:"Object 120-type service",html:"<p>A high-velocity, long-gun tank destroyer can enter limited late-1960s service. Its firepower is formidable, but size, ammunition, concealment, and specialization prevent mass adoption.</p>"},
      {id:"family",title:"Assault guns and tracked howitzers",html:"<p>The same branch develops self-propelled howitzers, protected direct-fire guns, tracked carriers, and artillery-support vehicles suited to siege and corridor warfare.</p>"},
      {id:"buyers",title:"The prince as procurement ministry",html:"<p>A ruler or consortium may order twenty vehicles for the next war without asking whether the design should equip a continental army. That purchasing logic preserves projects rejected by more standardized systems.</p>"},
      {id:"support",title:"A complete artillery contract",html:"<p>Exports include ammunition, tractors, recovery, fire-control advice, mechanics, and training. The gun alone is useless if the buyer cannot move, supply, and repair it.</p>"},
      {id:"legacy",title:"Specialization as a durable industry",html:"<p>The Uralmash branch makes Hyderabad a center for unusual firepower rather than mass armor. Its engineers influence fortification attack, artillery manufacture, and export finance across Central India.</p>"}
    ],related:[...lineageRelated,{href:"hyderabadi-arms-industry.html",kicker:"Host industry",label:"Arms Industry of Hyderabad"},{href:"kotin-kirov-hyderabad.html",kicker:"Heavy-armor partner",label:"Kotin–Kirov Lineage in Hyderabad"},{href:"princely-arms-market.html",kicker:"Commercial setting",label:"Princely Arms Market"}],
    facts:[["Host state","Hyderabad"],["Institutional ancestry","Uralmash; OKB-3"],["Representative project","Object 120-type tank destroyer"],["Other products","Assault guns and self-propelled howitzers"],["Primary battlefield","Fortified corridors"],["Production model","Small runs and export contracts"],["Principal customers","Hyderabad and Central Indian princes"],["Exact service designations","Open"]]
  }),

  "chelyabinsk-kurgan-congress":lineageArticle({
    title:"Chelyabinsk–Kurgan Mechanized Lineage in Congress India",infoboxTitle:"Chelyabinsk–Kurgan mechanized lineage",flag:groundGenealogy,
    lead:"The Chelyabinsk–Kurgan mechanized lineage in Congress India is the southern successor to the development tradition behind Object 765 and the BMP concept. It gives Congress sealed infantry carriers, fighting vehicles, recovery and engineer chassis, and later autocannon vehicles designed for contaminated corridors, river obstacles, Indian bridges, and mass reserve warfare.",
    canon:"The Congress destination, Chelyabinsk GSKB-2 and Kurgan ancestry, BMP-like requirement, sealed and chemically protected carrier, bridge and river adaptation, later autocannon development, shared specialist chassis, and integration with Vijaya are established. Bureau name, vehicle designations, exact weapons, dates, factories, and production totals remain open.",
    sections:[
      {id:"different",title:"A requirement distinct from the tank",html:"<p>Mechanized infantry needs a protected way to reach the battlefield, cross artillery and contaminated zones, and support the dismount immediately. The lineage is therefore not a subordinate model of the Kartsev tank bureau.</p>"},
      {id:"inheritance",title:"Object 765 and the BMP concept",html:"<p>Designers carry the broad concept of a low, sealed, tracked infantry fighting vehicle with mobility around rivers and broken transport infrastructure. Large-scale production knowledge associated with Kurgan is as important as the prototype.</p>"},
      {id:"congress",title:"Why Congress needs it",html:"<p>The fortified-front doctrine depends upon moving reserve infantry between sectors under artillery, aircraft, and chemical threat. Trucks are plentiful but cannot protect troops through the final approach.</p>"},
      {id:"climate",title:"Indian redesign",html:"<p>Cooling, filtration, monsoon sealing, track life, bridge loading, rail dimensions, water obstacles, and locally producible components reshape the Russian ancestry.</p>"},
      {id:"chemical",title:"Protection after 1963–1965",html:"<p>Chemical use makes collective filtration and a sealed troop compartment central rather than optional. Infantry can cross a contaminated corridor without spending the entire movement in exhausting individual protective equipment.</p>"},
      {id:"autocannon",title:"The later autocannon vehicle",html:"<p>By the late 1970s a successor comparable in role to the BMP-2 adopts a more useful autocannon and greater elevation against buildings, high ground, and low aircraft. Exact armament remains open.</p>"},
      {id:"variants",title:"A common specialist chassis",html:"<p>Recovery, command, reconnaissance, engineer, casualty-evacuation, and decontamination bodies share components with the infantry family, reducing the logistical cost of specialized formations.</p>"},
      {id:"system",title:"The Congress mechanized system",html:"<p>Vijaya tanks, protected infantry, domestic ammunition, engineers, railway troops, and recovery become one standardized system. Congress may not own the most refined individual vehicle, but it can form the most coherent mass mechanized reserve.</p>"}
    ],related:[...lineageRelated,{href:"congress-indian-ordnance-system.html",kicker:"Host arsenal",label:"Congress Indian Ordnance System"},{href:"kartsev-nizhny-tagil-congress.html",kicker:"Tank partner",label:"Kartsev–Nizhny Tagil Lineage"},{href:"chemical-protected-armored-vehicles-india.html",kicker:"Battlefield requirement",label:"Chemical-Protected Indian Armor"}],
    facts:[["Host state","Congress India"],["Ancestry","Chelyabinsk GSKB-2 and Kurgan production"],["Historical concept","Object 765; BMP family"],["Primary product","Sealed infantry fighting vehicle"],["Later direction","Autocannon-equipped successor"],["Specialist variants","Recovery, engineer, command, reconnaissance, decontamination"],["Partner family","Vijaya"],["Indian vehicle designations","Open"]]
  }),

  "astrov-light-vehicle-lineage":lineageArticle({
    title:"Astrov Light-Vehicle Lineage in Khalistan and Kashmir",infoboxTitle:"Astrov light-vehicle lineage",flag:groundGenealogy,
    lead:"The Astrov light-vehicle lineage in Khalistan and Kashmir is the dispersed successor to Soviet work on light tracked vehicles, airborne assault guns, and specialized compact chassis. It produces reconnaissance carriers, mountain tractors, light assault guns, and tank destroyers better suited to narrow roads, small bridges, valleys, and rail movement than full-size main battle tanks.",
    canon:"The shared Khalistan–Kashmir destination, Astrov and Mytishchi light-vehicle ancestry, ASU-like concepts, mountain and frontier requirements, compact tracked family, division between the two rival states, and emphasis on mobility over protection are established. Bureau locations, designers, formal vehicle names, weapons, production totals, and post-1975 division of assets remain open.",
    sections:[
      {id:"astrov",title:"A light-armor specialist",html:"<p>Nikolai Astrov's tradition is associated with light tracked vehicles and compact assault systems rather than main battle tanks. That specialization survives because the western Himalayan theater rewards low weight and transportability.</p>"},
      {id:"migration",title:"A lineage divided between rivals",html:"<p>Designers and workshops enter the broader Punjab–Kashmir system before its alignments settle. Khalistan and Kashmir consequently inherit related teams even as their political conflict deepens.</p>"},
      {id:"terrain",title:"Roads, bridges, and valleys",html:"<p>Mountain roads, light bridges, rail loading, scattered posts, and narrow valleys limit heavy armor. A vehicle that can reach the battlefield is often more valuable than one with superior protection stranded behind it.</p>"},
      {id:"asu",title:"ASU-like assault guns",html:"<p>Compact gun vehicles resembling the broad roles of ASU-57 and ASU-85 provide mobile antitank and direct-fire support. They rely on concealment, movement, and prepared positions rather than surviving direct heavy-tank fire.</p>"},
      {id:"carriers",title:"Carriers and artillery tractors",html:"<p>The wider family includes light tracked carriers, reconnaissance vehicles, mountain artillery tractors, command posts, and supply variants able to support dispersed frontier garrisons.</p>"},
      {id:"khalistan",title:"The Khalistani branch",html:"<p>Khalistan uses mobile reserves across Punjab river and road networks, balancing reconnaissance, local counterattack, and defense against several neighboring states.</p>"},
      {id:"kashmir",title:"The Kashmiri branch",html:"<p>Kashmir emphasizes valley defense, convoy protection, mountain artillery, and movement between isolated positions. Afghan support after the 1972–75 war can sustain the branch without erasing its local identity.</p>"},
      {id:"limits",title:"A family that cannot fight like a tank army",html:"<p>Thin protection and limited guns prevent direct substitution for main battle tanks. The lineage succeeds by matching geography and state resources, not by winning specification comparisons.</p>"}
    ],related:[...lineageRelated,{href:"khalistan.html",kicker:"Western operator",label:"Khalistan"},{href:"kashmir.html",kicker:"Mountain operator",label:"Kashmir"},{href:"kashmir-khalistan-war.html",kicker:"Defining conflict",label:"Kashmir–Khalistan War"}],
    facts:[["Host states","Khalistan and Kashmir"],["Designer lineage","Nikolai Astrov"],["Institutional ancestry","Mytishchi light-vehicle work"],["Representative concepts","ASU-57 and ASU-85 roles"],["Principal products","Light carriers, assault guns, tractors, reconnaissance vehicles"],["Design priorities","Low weight and transportability"],["Principal terrain","Punjab rivers and Himalayan valleys"],["Vehicle designations","Open"]]
  }),

  "mytishchi-air-defense-hindustan":lineageArticle({
    title:"Mytishchi Air-Defense Lineage in Hindustan",infoboxTitle:"Mytishchi air-defense lineage",flag:groundGenealogy,
    lead:"The Mytishchi air-defense lineage in Hindustan is the tracked antiaircraft and mobile-radar branch created from displaced Soviet light-chassis specialists. Its characteristic later-1960s system resembles the ZSU-23-4 Shilka in battlefield role: radar-directed rapid-fire cannon protecting Delhi's corridors and mobile formations against Azad Hind's Japanese-supported air arm.",
    canon:"The Hindustani destination, Mytishchi ancestry, mobile tracked air-defense specialization, Shilka-like mid-to-late-1960s vehicle, radar-directed autocannon, improved Indian cooling and filtration, protection of formations and corridors, and chemical sealing are established. Bureau name, radar, caliber, chassis, service date, designation, quantities, and combat record remain open.",
    sections:[
      {id:"split",title:"From light chassis to air defense",html:"<p>A Mytishchi group separates from the broader Astrov light-vehicle diaspora and enters Hindustan, where the immediate need is protection from aircraft rather than mountain assault guns.</p>"},
      {id:"threat",title:"The Japanese-supported air threat",html:"<p>Azad Hind often holds local air superiority with Japanese aircraft, reconnaissance, radios, training, and maintenance. Hindustan cannot assume its own fighters will protect every column or approach to Delhi.</p>"},
      {id:"shilka",title:"The Shilka-like system",html:"<p>By the later 1960s the branch produces a tracked vehicle combining search and fire-control radar with rapid-fire autocannon. It belongs to the same technological era as the historical Shilka rather than a late-1990s invention.</p>"},
      {id:"roles",title:"Formation and corridor defense",html:"<p>Batteries protect armored columns, bridges, railway junctions, headquarters, reserve routes, and fixed defense belts. Mobility allows the system to accompany the Morozov-derived elite armored force.</p>"},
      {id:"climate",title:"Cooling, dust, and monsoon operation",html:"<p>Radar electronics, crews, engines, and ammunition require better cooling, filtration, weather sealing, and maintenance access than a simple copy of a temperate-climate vehicle would provide.</p>"},
      {id:"chemical",title:"Sealed air defense",html:"<p>Chemical warfare forces the crew compartment and electronics spaces toward filtered protection. Air defense must remain active during contamination because grounded or evacuated batteries would invite immediate attack.</p>"},
      {id:"network",title:"Part of a layered system",html:"<p>Tracked cannon cooperate with fixed guns, radars, searchlights, interceptors, communications posts, and later guided weapons. The vehicle is the mobile layer, not an independent solution to the air war.</p>"},
      {id:"legacy",title:"A Hindustani electronics institution",html:"<p>The branch trains radar technicians, fire-control engineers, vehicle electricians, and air-defense commanders. Its institutional legacy reaches beyond one famous cannon vehicle into mobile sensors and command systems.</p>"}
    ],related:[...lineageRelated,{href:"hindustani-military-industry.html",kicker:"Host industry",label:"Military Industry of Hindustan"},{href:"morozov-kharkiv-hindustan.html",kicker:"Armored partner",label:"Morozov–Kharkiv Lineage"},{href:"mikoyan-gurevich-hindustan.html",kicker:"Fighter partner",label:"MiG Lineage in Hindustan"}],
    facts:[["Host state","Hindustan"],["Institutional ancestry","Mytishchi"],["Primary role","Mobile air defense"],["Representative system","Shilka-like radar-directed autocannon vehicle"],["Development period","Later 1960s"],["Principal threat","Azad Hind's Japanese-supported air arm"],["Indian adaptations","Cooling, filtration, weather and chemical sealing"],["Formal designation","Open"]]
  }),

  "gaz-arzamas-pakistani-states":lineageArticle({
    title:"GAZ–Arzamas Wheeled-Armor Lineage in the Pakistani States",infoboxTitle:"GAZ–Arzamas wheeled-armor lineage",flag:groundGenealogy,
    lead:"The GAZ–Arzamas wheeled-armor lineage in the Pakistani and Indus states is the southern successor to the BTR-60, BTR-70, and BTR-80 development tradition. Road range, lower operating cost, convoy utility, desert mobility, and exportability make its vehicles more useful to the western successor wars than a costly tracked tank fleet.",
    canon:"The Pakistani destination, GAZ and Arzamas ancestry, BTR-60/70/80-type succession, road and desert requirements, primary Pakistan-centered branch, purchase and assembly in Sindh, Kalat, and Baloch territories, wide export, and dual army-police use are established. Bureau location, manufacturer, formal names, engines, weapons, dates, quantities, and state-by-state variants remain open.",
    sections:[
      {id:"ancestry",title:"The Gorky and Arzamas inheritance",html:"<p>Design practice moves from the Gorky Automobile Plant's special armored work toward the Arzamas production tradition. The lineage carries protected-hull, automotive, amphibious, and series-production knowledge.</p>"},
      {id:"terrain",title:"The western requirement",html:"<p>Long roads, Indus crossings, desert and semi-arid country, dispersed borders, convoy warfare, and limited maintenance favor wheeled armor with greater strategic range and lower operating cost than tracked vehicles.</p>"},
      {id:"pakistan",title:"The Pakistan-centered branch",html:"<p>The emergency Pakistani state becomes the principal producer because it needs rapid reinforcement among Quetta, Sibi, Loralai, Zhob, and lower-Punjab approaches while lacking the industrial base for a large tank industry.</p>"},
      {id:"generations",title:"The BTR-type succession",html:"<p>Successive families occupy the broad roles of BTR-60, BTR-70, and BTR-80: improved engines, access, protection, weapons, radios, and reliability rather than one unchanged model.</p>"},
      {id:"neighbors",title:"Sindh, Kalat, and Baloch assembly",html:"<p>Neighboring states buy complete vehicles, assemble kits, rebuild used hulls, or finance local variants. Political fragmentation produces related machines with incompatible radios, weapons, and contracts.</p>"},
      {id:"roles",title:"Army, police, and convoy work",html:"<p>The vehicles carry infantry, patrol borders, escort merchants, protect roads, support mounted troops, and serve internal-security formations. That versatility makes them easier to finance than specialized tanks.</p>"},
      {id:"market",title:"The export vehicle of western India",html:"<p>Arms dealers can sell a package of vehicles, drivers, spares, mechanics, and credit to governments too small for national design programs. The family spreads farther than the political influence of its original host.</p>"},
      {id:"limits",title:"Not a substitute for heavy armor",html:"<p>Wheeled carriers remain vulnerable to tanks, mines, heavy cannon, and difficult off-road ground. Their strategic advantage is being present across a long frontier, not defeating every opponent in direct combat.</p>"}
    ],related:[...lineageRelated,{href:"pakistan-emergency-government.html",kicker:"Principal producer",label:"Pakistan Emergency Government"},{href:"sindh.html",kicker:"Major user and assembler",label:"Sindh"},{href:"modern-mounted-warfare-western-india.html",kicker:"Operational environment",label:"Modern Mounted Warfare"}],
    facts:[["Principal host","Pakistan"],["Other users","Sindh, Kalat, and Baloch territories"],["Ancestry","GAZ and Arzamas"],["Representative succession","BTR-60, BTR-70, BTR-80 roles"],["Design form","Wheeled armored carrier"],["Primary advantages","Road range, cost, exportability"],["Typical missions","Infantry, convoy, patrol, internal security"],["Indian designations","Open"]]
  }),

  "soviet-aircraft-design-diaspora":lineageArticle({
    title:"Soviet Aircraft-Design Diaspora in Southern Asia",infoboxTitle:"Soviet aircraft-design diaspora",flag:aircraftGenealogy,
    lead:"The Soviet aircraft-design diaspora in Southern Asia is the division of displaced aviation teams among states able to finance different missions. MiG becomes Hindustan's fighter and interceptor lineage, Ilyushin supports Congress India's armies and transports, Yakovlev serves Hyderabad's small-run and export economy, while Iran hosts the principal Tupolev and Sukhoi establishments.",
    canon:"The fragmented rather than unified migration, MiG–Hindustan, Ilyushin–Congress, Yakovlev–Hyderabad, Tupolev and Sukhoi–Iran distribution, limited branches elsewhere, local production constraints, and eventual host-state ownership are established. Migration dates, bureau rosters, plant sites, engines, aircraft designations, production totals, and exact cross-licenses remain open.",
    sections:[
      {id:"fragment",title:"Teams rather than complete corporations",html:"<p>Designers, aerodynamicists, production engineers, test pilots, archives, gauges, and partial prototypes survive without the single Soviet ministry, engine network, and nationwide supplier base that once connected them.</p>"},
      {id:"missions",title:"Migration follows missions",html:"<p>Receiving states choose teams that fit their wars and finances. Air defense, battlefield support, training, export, long-range aviation, and maritime strike require different institutions.</p>"},
      {id:"mig",title:"MiG and Hindustan",html:"<p><a href='mikoyan-gurevich-hindustan.html'>Mikoyan–Gurevich</a> fits a state defending Delhi and several frontiers through interceptors, radar-equipped fighters, and later lightweight tactical aircraft.</p>"},
      {id:"ilyushin",title:"Ilyushin and Congress India",html:"<p><a href='ilyushin-congress-india.html'>Ilyushin</a> supplies durable attack, support, and transport traditions for a mass army operating from dispersed fields behind fortified fronts.</p>"},
      {id:"yak",title:"Yakovlev and Hyderabad",html:"<p><a href='yakovlev-hyderabad.html'>Yakovlev</a> supports trainers, light fighters, prototypes, overhaul, and aircraft attractive to princes and smaller states unable to buy a large standardized fleet.</p>"},
      {id:"iran",title:"Tupolev and Sukhoi in Iran",html:"<p><a href='russian-aviation-lineages-iran.html'>Iran</a> possesses the stability, oil, secure airfields, and long-cycle finance needed for large Tupolev projects and a principal Sukhoi tactical-strike branch.</p>"},
      {id:"constraints",title:"Engines and systems remain the hard problem",html:"<p>A national airframe may still depend on imported or foreign-derived engines, radar, weapons, bearings, alloys, and instruments. Local assembly and depot overhaul often precede genuinely national design.</p>"},
      {id:"identity",title:"From Russian schools to national industries",html:"<p>By the 1970s and 1980s local engineers, budgets, climate requirements, doctrine, and production limits determine the programs. Russian names may survive as honors while the aircraft are politically Indian or Iranian.</p>"}
    ],related:[...lineageRelated,{href:"industrial-asylum.html",kicker:"Migration law",label:"Industrial Asylum in India"},{href:"russian-technical-communities-india.html",kicker:"Human communities",label:"Russian Technical Communities in India"},{href:"russian-naval-design-diaspora.html",kicker:"Maritime counterpart",label:"Russian Naval Design Diaspora"}],
    additionalSources:[{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — aviation systems and naming context"}],
    facts:[["Begins","After the 1945–1946 Soviet collapse"],["Hindustan lineage","Mikoyan–Gurevich"],["Congress lineage","Ilyushin"],["Hyderabad lineage","Yakovlev"],["Iranian lineages","Tupolev and Sukhoi"],["Movement form","Teams, archives, tools, and test practice"],["Main production constraints","Engines, alloys, radar, weapons, instruments"],["Unified successor bureau","None"]]
  }),

  "mikoyan-gurevich-hindustan":lineageArticle({
    title:"Mikoyan–Gurevich Lineage in Hindustan",infoboxTitle:"MiG lineage in Hindustan",flag:aircraftGenealogy,
    lead:"The Mikoyan–Gurevich lineage in Hindustan is Delhi's principal fighter and interceptor design institution. Its swept-wing fighters, radar-equipped interceptors, and later lightweight tactical aircraft form the aerial counterpart to Hindustan's advanced Morozov armor and layered Mytishchi air-defense system.",
    canon:"The Hindustani destination, MiG fighter and interceptor specialization, defense-of-Delhi rationale, swept-wing and radar-equipped development, later lightweight tactical branch, integration with ground air defense, and Indianization are established. The inherited MiG-1 and MiG-3 design identities are established by pre-divergence history; the bureau name, founding personnel, factories, postwar aircraft designations, engines, specifications, service dates, and production totals remain open.",
    sections:[
      {id:"fit",title:"A fighter bureau for a surrounded capital",html:"<p>Hindustan must defend Delhi and rapidly reinforce several frontiers. A fighter-and-interceptor institution answers this requirement more directly than a large bomber or transport establishment.</p>"},
      {id:"migration",title:"The southern MiG branch",html:"<p>Designers, production specialists, test practice, drawings, and aerodynamic knowledge travel through the technical diaspora. The host must rebuild factories, engine supply, instruments, and training around them.</p>"},
      {id:"early",title:"Early swept-wing fighters",html:"<p>The first generation converts available engines and manufacturing methods into fast day fighters and interceptors. Imported subsystems remain important while Indian airframe and depot capability expands.</p>"},
      {id:"radar",title:"Radar-equipped interception",html:"<p>Defending Delhi, rail corridors, and mobilization centers encourages radar, ground-control interception, all-weather training, and integration with the Mytishchi mobile defense network.</p>"},
      {id:"tactical",title:"The lightweight tactical branch",html:"<p>Later aircraft balance interception with battlefield support and dispersal. Hindustan needs machines numerous enough for several fronts even while its design culture favors technical performance.</p>"},
      {id:"bases",title:"Dispersed air defense",html:"<p>Hardened fields, road movement, alternate strips, underground stores, and mobile maintenance reduce vulnerability to Azad Hind air attack and sabotage.</p>"},
      {id:"systems",title:"The engine and radar constraint",html:"<p>Airframe design advances faster than domestic powerplants and sensors. Foreign-derived engines and radar may remain inside aircraft otherwise designed, assembled, and supported in Hindustan.</p>"},
      lineageAircraftListSection([
        ["I-200","MiG-1",null,"p"],
        ["I-200 improved series","MiG-3",null,"p"]
      ]),
      {id:"identity",title:"A Hindustani fighter school",html:"<p>The branch gradually trains Indian aerodynamicists, test pilots, production managers, and tactical officers. Its aircraft remain visibly MiG-descended without being foreign property or Soviet exports.</p>"}
    ],related:[...lineageRelated,{href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation overview",label:"Soviet Aircraft-Design Diaspora"},{href:"hindustani-military-industry.html",kicker:"Host system",label:"Military Industry of Hindustan"},{href:"mytishchi-air-defense-hindustan.html",kicker:"Ground network",label:"Mytishchi Air-Defense Lineage"}],
    additionalSources:[{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference"}],
    facts:[["Host state","Hindustan"],["Ancestry","Mikoyan–Gurevich design tradition"],["Primary missions","Fighter and interceptor development"],["Strategic center","Delhi"],["Early direction","Swept-wing fighters"],["Later direction","Radar-equipped interceptors and lightweight tactical aircraft"],["Ground partner","Mytishchi mobile air defense"],["Postwar aircraft designations","Open"]]
  }),

  "ilyushin-congress-india":lineageArticle({
    title:"Ilyushin Lineage in Congress India",infoboxTitle:"Ilyushin lineage in Congress India",flag:aircraftGenealogy,
    lead:"The Ilyushin lineage in Congress India is the aircraft-development branch oriented toward battlefield attack, durable support, transport, and operation from dispersed fields. It complements the Congress mass army, Vijaya armored system, railway mobilization, and defensive doctrine more directly than a prestige interceptor establishment would.",
    canon:"The Congress destination, Ilyushin ancestry, ground-attack and transport emphasis, dispersed-field operation, support of mass armies and fortified fronts, gradual domestic production ladder, complementarity with Congress ordnance, and Indianization are established. The DB-3, Il-2, Il-4, and limited Il-10 development identities are established; the bureau title, founders, plants, engines, postwar aircraft names, weapons, dates, and production totals remain open.",
    sections:[
      {id:"mission",title:"Aircraft for the mass army",html:"<p>Congress fights around fortified lines, large reserve formations, rail movement, artillery, and prolonged ground operations. It requires durable aircraft that can attack, carry, resupply, evacuate, and operate repeatedly.</p>"},
      {id:"migration",title:"The Ilyushin branch",html:"<p>Technical personnel and partial institutional knowledge enter industrial asylum rather than arriving as one finished company. Indian ministries rebuild the design and production system around local plants and schools.</p>"},
      {id:"attack",title:"Battlefield attack",html:"<p>Ground-attack aircraft emphasize survivability, simple field maintenance, useful payload, and close cooperation with artillery and army headquarters over maximum speed or prestige.</p>"},
      {id:"transport",title:"Transport and medical aviation",html:"<p>Medium transports connect dispersed fronts, carry reserves and ammunition, evacuate casualties, and support disaster relief. The same fleet becomes politically contested whenever humanitarian movement thins military readiness.</p>"},
      {id:"fields",title:"Dispersed-field operation",html:"<p>Aircraft must tolerate dust, heat, monsoon damage, rough strips, temporary maintenance, and rapidly changing bases behind the fortified belt.</p>"},
      {id:"ladder",title:"The production ladder",html:"<p>Depot overhaul leads to component substitution, local assembly, national airframes around foreign-derived engines, and only later more independent systems. Congress calls each stage national when it controls the program and labor.</p>"},
      {id:"army",title:"Integration with Congress ordnance",html:"<p>Radios, reconnaissance, transport planning, attack doctrine, and spare-parts administration connect aviation to Vijaya formations, engineers, rail troops, and domestic ammunition factories.</p>"},
      lineageAircraftListSection([
        ["TsKB-30","DB-3",null,"p"],
        ["TsKB-30F / DB-3F","Il-4",null,"a"],
        ["TsKB-55","Il-2",null,"p"],
        ["TsKB-33","Il-10",null,"a"]
      ]),
      {id:"identity",title:"An Indian support-aircraft school",html:"<p>Russian ancestry remains visible in design priorities, but later aircraft answer Congress requirements and are sustained by Indian institutions. They become national systems rather than émigré curiosities.</p>"}
    ],related:[...lineageRelated,{href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation overview",label:"Soviet Aircraft-Design Diaspora"},{href:"congress-indian-ordnance-system.html",kicker:"Host system",label:"Congress Indian Ordnance System"},{href:"kartsev-nizhny-tagil-congress.html",kicker:"Armored partner",label:"Kartsev–Nizhny Tagil Lineage"}],
    additionalSources:[{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference"}],
    facts:[["Host state","Congress India"],["Ancestry","Ilyushin design tradition"],["Primary missions","Ground attack, battlefield support, transport"],["Operating model","Dispersed fields"],["Principal customer","Congress mass army"],["Industrial path","Overhaul to assembly to national airframe"],["Armored partner","Vijaya system"],["Postwar aircraft designations","Open"]]
  }),

  "yakovlev-hyderabad":lineageArticle({
    title:"Yakovlev Lineage in Hyderabad",infoboxTitle:"Yakovlev lineage in Hyderabad",flag:aircraftGenealogy,
    lead:"The Yakovlev lineage in Hyderabad is the princely aviation branch specializing in trainers, light fighters, prototypes, overhaul, and short-run export aircraft. Its broad experimental tradition fits a commercial arms state willing to build a machine rejected by larger governments if a court, smaller successor state, or private consortium will finance it.",
    canon:"The Hyderabad destination, Yakovlev ancestry, trainer and light-fighter specialization, prototype and unconventional-aircraft culture, overhaul and engine rebuilding, short-run export production, princely customer base, and Indianization are established. The Yak-1 and Yak-7 inheritance and limited Yak-9 development are established; the bureau name, founders, plants, postwar aircraft designations, engines, production totals, customers, and project fates remain open.",
    sections:[
      {id:"fit",title:"A broad bureau for a commercial court",html:"<p>Yakovlev's history across fighters, trainers, prototypes, and unusual aircraft suits a state that sells specialized capability rather than standardizing one immense national air force.</p>"},
      {id:"migration",title:"A princely aviation refuge",html:"<p>Hyderabad offers protected workshops, court contracts, access to technical schools, and a maritime commercial corridor. The branch can survive through several small customers instead of one procurement ministry.</p>"},
      {id:"trainers",title:"Advanced trainers",html:"<p>Training aircraft become the most dependable product because every successor air arm needs pilot conversion, weapons instruction, and affordable flight hours.</p>"},
      {id:"fighters",title:"Light fighters and attack aircraft",html:"<p>Small states seek aircraft that can defend a capital, support ground forces, and operate from modest fields without the expense of Hindustan's interceptor system.</p>"},
      {id:"prototype",title:"The second life of rejected projects",html:"<p>A design rejected by Congress or Hindustan may still enter a short Hyderabad production run. Political patrons accept risk when the project promises prestige, export leverage, or a niche capability.</p>"},
      {id:"overhaul",title:"Overhaul and engine rebuilding",html:"<p>Maintaining mixed imported fleets is as important as new construction. Workshops rebuild engines, substitute components, translate manuals, and return otherwise unusable aircraft to service.</p>"},
      {id:"market",title:"Aircraft for the princely market",html:"<p>Contracts package machines with instructors, mechanics, spares, ammunition, finance, and access to the Machilipatnam corridor. Buyers acquire an operating service rather than an airframe alone.</p>"},
      lineageAircraftListSection([
        ["I-26","Yak-1",null,"p"],
        ["UTI-26","Yak-7UTI",null,"p"],
        ["Yak-7DI","Yak-9",null,"a"]
      ]),
      {id:"japan",title:"Japanese association after 1986",html:"<p>Japanese investment and standards give the branch new components and markets while threatening its independence. Hyderabad remains the owner and sovereign host, not an Azad Hind or Japanese provincial plant.</p>"}
    ],related:[...lineageRelated,{href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation overview",label:"Soviet Aircraft-Design Diaspora"},{href:"hyderabadi-arms-industry.html",kicker:"Host industry",label:"Arms Industry of Hyderabad"},{href:"princely-arms-market.html",kicker:"Customer system",label:"Princely Arms Market"}],
    additionalSources:[{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference"}],
    facts:[["Host state","Hyderabad"],["Ancestry","Yakovlev design tradition"],["Principal products","Trainers, light fighters, prototypes"],["Major service","Overhaul and engine rebuilding"],["Production style","Short runs"],["Primary market","Princely and smaller successor states"],["Later partner","Japan after 1986"],["Postwar aircraft designations","Open"]]
  }),

  "russian-aviation-lineages-iran":lineageArticle({
    title:"Russian Aviation Lineages in Iran",infoboxTitle:"Russian aviation lineages in Iran",flag:aircraftGenealogy,
    lead:"The Russian aviation lineages in Iran are the principal southern homes of displaced Tupolev and Sukhoi institutions. Iran's relative stability, oil revenue, secure airfields, and stronger state finance allow it to preserve long-range and tactical-strike programs that the besieged Indian successors cannot sustain at full scale.",
    canon:"Iran as principal Tupolev and Sukhoi host, long-range and tactical-strike division, oil and stability rationale, smaller liaison or production branches in Congress, Pakistan, or Sindh, long-cycle infrastructure, and Iranian ownership are established. The inherited Tupolev SB and limited Tu-2 programs and the pre-divergence Sukhoi Su-2 are established; the Su-6 prototype is an incorporated lineage extrapolation. Bureau charters, sites, founders, postwar aircraft names, engines, weapons, quantities, and relationship to the Iranian monarchy remain open.",
    sections:[
      {id:"iran",title:"Why Iran becomes the principal host",html:"<p>Iran offers oil, a functioning monarchy and bureaucracy, secure territory, large airfields, access to foreign trade, and the capacity to finance test and production cycles longer than most successor governments can tolerate.</p>"},
      {id:"tupolev",title:"The Tupolev core",html:"<p>Tupolev's large-aircraft tradition supports long-range bombers, transports, maritime patrol, and complex prototypes. A landlocked or constantly besieged Indian state could not easily preserve that full infrastructure.</p>"},
      {id:"sukhoi",title:"The Sukhoi core",html:"<p>Sukhoi provides fighter-bomber and tactical-strike development, giving Iran a more flexible branch for regional air power and a source of aircraft adaptable to western Indian customers.</p>"},
      {id:"infrastructure",title:"Wind tunnels, engines, and test ranges",html:"<p>Large aircraft require secure test bases, precision manufacture, fuel, metallurgy, instrumentation, engine support, and long-range airspace. Iran's comparative stability matters more than simple possession of design drawings.</p>"},
      {id:"branches",title:"Branches in Congress, Pakistan, and Sindh",html:"<p>Transport liaison, component production, assembly, or Sukhoi-derived strike offices can operate farther east. These remain subsidiaries or partnered branches rather than the principal institutional cores.</p>"},
      {id:"markets",title:"A regional aircraft market",html:"<p>Iran can sell aircraft, overhauls, training, engines, and credit to Pakistani and Indian states while using contracts to secure transit, oil, influence, or hard-currency earnings.</p>"},
      {id:"tehran",title:"The Tehran boundary after 1985",html:"<p>The Tehran Concord confirms Iranian independence and restrains Indian or Japanese encroachment without making Iran a Japanese client. Russian-derived aviation remains an Iranian strategic asset inside that settlement.</p>"},
      lineageAircraftListSection([
        ["ANT-40","SB",null,"p"],
        ["Aircraft 103","Tu-2",null,"a"],
        ["BB-1","Su-2",null,"p"],
        ["OBSh","Su-6",null,"e"]
      ]),
      {id:"identity",title:"Iranian institutions with Russian ancestry",html:"<p>Later generations of Iranian engineers and officers define requirements and lead programs. The bureau names may survive, but the aircraft are financed, tested, operated, and politically owned by Iran.</p>"}
    ],related:[...lineageRelated,{href:"iran.html",kicker:"Host state",label:"Iran"},{href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation overview",label:"Soviet Aircraft-Design Diaspora"},{href:"tehran-concord.html",kicker:"Strategic settlement",label:"Tehran Concord"}],
    additionalSources:[{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference"}],
    categories:["Iran","Military industry","Soviet diaspora","Aviation"],
    facts:[["Host state","Iran"],["Principal heavy-aircraft lineage","Tupolev"],["Principal tactical lineage","Sukhoi"],["Strategic resources","Oil, secure airfields, state finance"],["Tupolev missions","Long-range, transport, maritime patrol"],["Sukhoi missions","Fighter-bomber and tactical strike"],["Subsidiary markets","Congress India, Pakistan, and Sindh"],["Postwar aircraft designations","Open"]]
  }),

  "russian-naval-design-diaspora":lineageArticle({
    title:"Russian Naval Design Diaspora in Iran and Karachi",infoboxTitle:"Russian naval design diaspora",flag:navalGenealogy,
    lead:"The Russian naval design diaspora in Iran and Karachi is the preservation of Rubin, Severnoye, and Nevskoye technical traditions through Iranian core establishments and Sindhi or Pakistani production subsidiaries. Iran sustains long-cycle submarine and large-ship design; Karachi adapts smaller diesel-electric submarines, escorts, patrol craft, landing vessels, and auxiliaries for Arabian Sea states.",
    canon:"Iranian Rubin and Nevskoye cores, Karachi Rubin production branch, Severnoye branch in Sindh or Pakistan, Nevskoye landing/support subsidiary, institutional rationale, specialization by vessel type, and contract relationship are established. Host yards, bureau titles, dates, ships, specifications, quantities, and exact Sindh–Pakistan allocation remain open.",
    sections:[
      {id:"constraint",title:"Naval knowledge needs a coast",html:"<p>Submarine, escort, and landing-ship designers cannot be preserved meaningfully in landlocked Indian states. They require yards, basins, steel, engines, electrical systems, sea trials, and governments willing to finance hulls for years.</p>"},
      {id:"iran",title:"Iran as the institutional core",html:"<p>Relative security, Persian Gulf access, oil revenue, and a strategic navy make Iran the principal host for the long-cycle establishments.</p>"},
      {id:"rubin",title:"Rubin submarines",html:"<p>The core Rubin establishment remains in Iran, while a Karachi branch designs or assembles smaller diesel-electric submarines suited to Arabian Sea patrol, coastal denial, and the budgets of Sindh or Pakistan.</p>"},
      {id:"severnoye",title:"Severnoye escorts",html:"<p>Severnoye is the most immediately useful Karachi surface-warship lineage. Its branch supports frigates, destroyer escorts, missile or gun patrol vessels, and convoy-defense ships a medium naval state can actually operate.</p>"},
      {id:"nevskoye",title:"Nevskoye landing and support ships",html:"<p>The principal Nevskoye capacity belongs in Iran, where larger surface and amphibious projects are plausible. Karachi retains a subsidiary for landing craft, auxiliaries, and support vessels.</p>"},
      {id:"yards",title:"Karachi as production and adaptation center",html:"<p>Karachi's port, workshops, merchant traffic, and strategic position allow local adaptation, assembly, overhaul, and foreign production even where basic design authority remains linked to Iran.</p>"},
      {id:"contracts",title:"Design, finance, and sovereignty",html:"<p>The relationship is contractual rather than imperial. Sindh or Pakistan can own ships and local yards while licensing design knowledge, hiring Iranian-based specialists, or paying through bullion, exports, and future customs revenue.</p>"},
      {id:"legacy",title:"A regional rather than Soviet navy",html:"<p>The diaspora does not recreate one Soviet fleet. It creates related Iranian, Sindhi, and Pakistani naval families whose common ancestry is visible beneath different budgets, missions, weapons, and foreign alignments.</p>"}
    ],related:[...lineageRelated,{href:"sindh.html",kicker:"Karachi host",label:"Sindh"},{href:"iran.html",kicker:"Principal core host",label:"Iran"},{href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation counterpart",label:"Soviet Aircraft-Design Diaspora"}],
    additionalSources:[{href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — naval technology and fleet context"}],
    categories:["Iran","Sindh","Pakistan","Naval industry","Soviet diaspora"],
    facts:[["Principal core host","Iran"],["Principal production center","Karachi"],["Submarine lineage","Rubin"],["Escort lineage","Severnoye"],["Landing/support lineage","Nevskoye"],["Iranian role","Core design and long-cycle research"],["Karachi role","Adaptation, assembly, overhaul, and smaller ships"],["Named vessels","Open"]]
  }),

  "chemical-protected-armored-vehicles-india":lineageArticle({
    title:"Chemical-Protected Armored Vehicles in India",infoboxTitle:"Chemical-protected Indian armor",flag:groundGenealogy,
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7a writer=g kind=revision created=2026-08-16T01:16:50-06:00 -->Chemical-protected armored vehicles in India develop because chemical weapons are used during one of the Indian wars and become an expected danger on the eastern frontier.<sup class='canon-note' data-provenance='a'>[a]</sup> Sealing, cooling, filtration, washable surfaces, decontamination support, and tropical crew endurance are compatible engineering consequences; their exact combination and timing remain technical reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7b writer=g kind=revision created=2026-08-16T01:16:50-06:00 -->Chemical-weapon use in one Indian war, continuing chemical danger on the eastern frontier, and resulting influence on Indian armored-vehicle design are established.<sup class='canon-note' data-provenance='a'>[a]</sup> The 1963–65 trigger, disputed first use, filtered overpressure, automatic closure, disappearance of open-topped frontline vehicles, cooling standards, washable exteriors, filter access, decontamination fittings, specialist variants, and state-by-state solutions are compatible technical extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup> Conflict, date, agents, first user, exact systems, protection standards, introduction dates, and performance remain open.<!-- altwwii-writer-block:end -->",
    sections:[
      {id:"war",title:"The chemical-war trigger",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7c writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Chemical weapons are deployed during one of the Indian wars and thereafter become an expected battlefield danger on the entrenched eastern frontier.<sup class='canon-note' data-provenance='a'>[a]</sup> The source does not assign the episode to the <a href='northern-indian-war.html'>1963–65 Northern Indian War</a>, identify the first user, or establish claims of retaliation, accident, captured stocks, or unauthorized action.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"pressure",title:"Filtered positive pressure",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7d writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Improved seals, filtered crew air, positive pressure, automatic intake closure, and detector interfaces are a compatible protective package for tanks and command vehicles.<sup class='canon-note' data-provenance='e'>[e]</sup> The proposed design emphasis is persistent chemical contamination rather than nuclear radiation, because the setting does not develop nuclear weapons.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"enclosure",title:"Enclosed frontline vehicles",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7e writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Open carriers and self-propelled guns would impose a heavier burden of individual protection in contaminated sectors. Increasing enclosure of crews and transported infantry is therefore compatible design extrapolation rather than a fixed region-wide sequence.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"heat",title:"Cooling as protection",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7f writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Indian heat, engine temperature, sealed compartments, and protective clothing make endurance an obvious engineering constraint. Larger filtered-air capacity, insulation, water provision, crew-rest practice, and maintainable cooling are plausible requirements whose standards and adoption remain open.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"surface",title:"Designed to be washed",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7g writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Simpler stowage, protected intakes, accessible filters, washable surfaces, fewer exposed fabrics, and standardized wash-down connections form a compatible decontamination design package. No common Indian standard or introduction date is yet established.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"variants",title:"Specialist chemical-support vehicles",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7h writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Reconnaissance, detection, marking, decontamination, casualty-evacuation, protected-command, and engineer bodies on common chassis are compatible responses to the established threat. Congress India's standardized families may ease such development, but the specialist fleets and their chronology remain open.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"states",title:"Possible national solutions",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7i writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Fleet-wide Congress protection, sophisticated but maintenance-intensive Hindustani systems, Japanese-derived Azad Hind protection, Hyderabadi specialist exports, and greater TPS reliance on individual gear and shelters are assistant-developed national profiles.<sup class='canon-note' data-provenance='e'>[e]</sup> They remain compatible possibilities pending direct state-level establishment.</p><!-- altwwii-writer-block:end -->"},
      {id:"lesson",title:"Why Object 279 remains exceptional",html:"<!-- altwwii-writer-block:start id=wb-g-20260816-p6k7j writer=g kind=revision created=2026-08-16T01:16:50-06:00 --><p>Chemical contamination does not by itself require a four-track nuclear-shock vehicle. Treating ordinary sealed and cooled forms as the principal response, and the Indian <a href='object-279-india.html'>Object 279 prototype</a> as an artillery-zone prestige experiment, is compatible technical interpretation.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"}
    ],related:[...lineageRelated,{href:"northern-indian-war.html",kicker:"Possible originating conflict",label:"Northern Indian War"},{href:"vijaya-tank.html",kicker:"Congress benchmark",label:"Vijaya"},{href:"chelyabinsk-kurgan-congress.html",kicker:"Protected infantry",label:"Chelyabinsk–Kurgan Lineage"},{href:"object-279-india.html",kicker:"Exceptional prototype",label:"Object 279 Project"}],
    facts:[["Established trigger","Chemical-weapon use in one Indian war"],["Established theater","Eastern Indian frontier"],["Specific conflict and date","Open"],["Established effect","Influence on Indian armored-vehicle design"],["Protection package","Working technical extrapolation"],["State-by-state solutions","Working profiles"],["First chemical user","Open"]]
  })
});

const addLineageLinks = (key,links) => {
  const article=window.deepArticles[key];
  if(article?.related){const existing=new Set(article.related.map(x=>x.href));article.related.unshift(...links.filter(x=>!existing.has(x.href)));}
};

addLineageLinks("indian-armored-design-genealogies",[
  {href:"kartsev-nizhny-tagil-congress.html",kicker:"Congress mass-tank branch",label:"Kartsev–Nizhny Tagil Lineage"},
  {href:"morozov-kharkiv-hindustan.html",kicker:"Hindustani advanced branch",label:"Morozov–Kharkiv Lineage"},
  {href:"kotin-kirov-hyderabad.html",kicker:"Hyderabadi heavy branch",label:"Kotin–Kirov Lineage"},
  {href:"gaz-arzamas-pakistani-states.html",kicker:"Western wheeled branch",label:"GAZ–Arzamas Lineage"}
]);
addLineageLinks("soviet-military-industrial-diaspora",[
  {href:"soviet-aircraft-design-diaspora.html",kicker:"Aviation dispersal",label:"Soviet Aircraft-Design Diaspora"},
  {href:"russian-naval-design-diaspora.html",kicker:"Maritime dispersal",label:"Russian Naval Design Diaspora"}
]);
addLineageLinks("congress-indian-ordnance-system",[
  {href:"kartsev-nizhny-tagil-congress.html",kicker:"Tank lineage",label:"Kartsev–Nizhny Tagil Lineage"},
  {href:"chelyabinsk-kurgan-congress.html",kicker:"Mechanized lineage",label:"Chelyabinsk–Kurgan Lineage"},
  {href:"ilyushin-congress-india.html",kicker:"Aviation lineage",label:"Ilyushin in Congress India"}
]);
addLineageLinks("hindustani-military-industry",[
  {href:"morozov-kharkiv-hindustan.html",kicker:"Tank lineage",label:"Morozov–Kharkiv Lineage"},
  {href:"mytishchi-air-defense-hindustan.html",kicker:"Air-defense lineage",label:"Mytishchi Air-Defense Lineage"},
  {href:"mikoyan-gurevich-hindustan.html",kicker:"Aviation lineage",label:"MiG in Hindustan"}
]);
addLineageLinks("hyderabadi-arms-industry",[
  {href:"kotin-kirov-hyderabad.html",kicker:"Heavy-armor lineage",label:"Kotin–Kirov Lineage"},
  {href:"uralmash-hyderabad.html",kicker:"Artillery lineage",label:"Uralmash Lineage"},
  {href:"yakovlev-hyderabad.html",kicker:"Aviation lineage",label:"Yakovlev in Hyderabad"}
]);
