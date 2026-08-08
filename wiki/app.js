const pages = [
  { title: "Main Page", description: "Portal to the fractured postwar world", href: "index.html", tags: "home overview map" },
  { title: "The World Order", description: "The five unequal power systems", href: "world.html", tags: "blocs germany japan italy america commonwealth" },
  { title: "Setting Timeline", description: "Divergence through the five-party and network age of 2005", href: "timeline.html", tags: "chronology wwii war peace dates boom depression five party 2005" },
  { title: "Greater German Reich", description: "Continental empire and Showroom Reich", href: "germany.html", tags: "germany reich wolfgang hitler goering east adolfstadt stalingrad volgograd volga" },
  { title: "British Commonwealth", description: "Defeat, the Cape route, and reconstruction", href: "commonwealth.html", tags: "britain uk commonwealth lisbon suez cape" },
  { title: "Empire of Japan", description: "Maritime empire and developmental hierarchy", href: "japan.html", tags: "japan asia co-prosperity china korea navy" },
  { title: "United States", description: "The contested American hemisphere", href: "united-states.html", tags: "america usa buchanan rockwell reagan renewal" },
  { title: "Latin Bloc", description: "The gradually formalized Italian, Iberian, Occitan, and Mediterranean system", href: "latin-bloc.html", tags: "latin bloc italy spain portugal occitania catholic suez" },
  { title: "Kingdom of Italy", description: "The King-Duce, corporate prosperity, and an overextended empire", href: "italy.html", tags: "italy rome umberto mussolini iri mediterranean suez latin" },
  { title: "National Government of China", description: "Managed civilization under Japanese guardianship", href: "china.html", tags: "china nanjing japan examinations industry client state" },
  { title: "Philippine Republic", description: "Independence struggle and associated sovereignty", href: "philippines.html", tags: "philippines manila davao japan independence fleet" },
  { title: "Eastern Reichskommissariats", description: "SS estate rule in the conquered east", href: "eastern-reichskommissariats.html", tags: "east ostland ukraine moskowien kaukasien ss colony" },
  { title: "Reichskommissariat Ostland", description: "Settler corridors and the deepest public Germanization in the eastern empire", href: "reichskommissariat-ostland.html", tags: "ostland baltic belarus reichskommissariat dienstflagge prussian blue colony" },
  { title: "Reichskommissariat Ukraine", description: "Grain, industry, settler estates, and colonial administration", href: "reichskommissariat-ukraine.html", tags: "ukraine reichskommissariat grain industry dienstflagge blue gold colony" },
  { title: "Reichskommissariat Moskowien", description: "The militarized administration of the defeated Russian core", href: "reichskommissariat-moskowien.html", tags: "moskowien moscow russia adolfstadt reichskommissariat dienstflagge colony" },
  { title: "Reichskommissariat Kaukasien", description: "Oil, mountain corridors, and differentiated client rule", href: "reichskommissariat-kaukasien.html", tags: "kaukasien caucasus oil reichskommissariat dienstflagge colony" },
  { title: "Conquest Intoxication in the Eastern Reichskommissariats", description: "The failed 1947–1948 first phase of SS colonial rule", href: "conquest-intoxication.html", tags: "eastern reichskommissariats conquest intoxication 1947 1948 ss settlement requisition crisis" },
  { title: "Eastern Quota Crisis", description: "The 1949–1952 reform that made colonial production a condition of command", href: "eastern-quota-crisis.html", tags: "eastern reichskommissariats quota crisis grain oil coal timber ss 1949 1952" },
  { title: "Germanization of Sovereignty", description: "German rule and strategic monopoly without a German demographic majority", href: "germanization-of-sovereignty.html", tags: "germanization sovereignty east reichskommissariats doctrine population ruling caste" },
  { title: "Eastern Estate Order", description: "Hereditary tenure and reciprocal but unequal colonial obligations", href: "eastern-estate-order.html", tags: "eastern estate order tenure village dues lords reichskommissariats colonial law" },
  { title: "Eastern Social Hierarchy", description: "The six estates of the mature Eastern Reichskommissariats", href: "eastern-social-hierarchy.html", tags: "eastern social hierarchy caste estates ss nobility settlers native service penal" },
  { title: "Eastern Auxiliary System", description: "Retainers, native auxiliaries, service rewards, and German command", href: "eastern-auxiliary-system.html", tags: "eastern auxiliary retainers ss military police service reichskommissariats" },
  { title: "Eastern Language Policy", description: "German public authority and the generational loss of native-language literacy", href: "eastern-language-policy.html", tags: "eastern language policy german russian ukrainian cyrillic literacy germanization" },
  { title: "Eastern Occupational Education", description: "Native schooling as occupational licensing", href: "eastern-occupational-education.html", tags: "eastern education schools occupational licensing apprenticeships german reichskommissariats" },
  { title: "Eastern Law, Repression, and Resistance", description: "Selective coercion and managed colonial stability", href: "eastern-resistance-system.html", tags: "eastern law repression resistance sabotage smuggling security reichskommissariats" },
  { title: "Automation in the Eastern Reichskommissariats", description: "The automated strategic spine over a labor-intensive colony", href: "eastern-automation.html", tags: "eastern automation rail pipeline grid driverless trains logistics reichskommissariats" },
  { title: "German Colonial Middle Class in the East", description: "The technical and administrative settler stratum", href: "german-colonial-middle-class.html", tags: "german colonial middle class east ostpraxisjahr ostdienstjahr settlers technicians" },
  { title: "Family Economies of the Eastern Reichskommissariats", description: "Unequal settler and native household economies", href: "eastern-family-economy.html", tags: "eastern family economy pronatalist inheritance settler native household reichskommissariats" },
  { title: "Reichskommissariat Mittelafrika", description: "The Mosaic Order, extractive corridors, and chiefly rule", href: "mittelafrika.html", tags: "mittelafrika africa mosaic mosaik katanga germany colony" },
  { title: "Russian and Siberian Successor States", description: "Bureaucratic remnants beyond the Urals", href: "siberia.html", tags: "russia siberia omsk novosibirsk kazakhstan tashkent successor" },
  { title: "Wolfgang Friedrich Hitler", description: "Second-generation ruler of the Reich", href: "wolfgang.html", tags: "wolfgang hitler katharina succession moon raumhafen" },
  { title: "Hitler Family", description: "Ruling household and photographic archive", href: "hitler-family.html", tags: "hitler family wolfgang katharina eva braun photographs archive children" },
  { title: "Alexander Friedrich Hitler", description: "Eldest son and presumptive but undesignated succession candidate", href: "alexander-hitler.html", tags: "alexander friedrich hitler eldest son succession aerospace ceremony ss order" },
  { title: "Konrad Matthias Hitler", description: "Command-oriented second son and visible dynastic alternative", href: "konrad-hitler.html", tags: "konrad matthias hitler second son succession motorsport racing military command" },
  { title: "Johanna Elisabeth Hitler", description: "Archival-minded eldest daughter and keeper of household memory", href: "johanna-hitler.html", tags: "johanna elisabeth hitler daughter archives eva braun records felix" },
  { title: "Sophie Eva Hitler", description: "Socially gifted daughter trained for representation and discretion", href: "sophie-hitler.html", tags: "sophie eva hitler daughter hospitality charity representation propaganda" },
  { title: "Felix Wolfgang Hitler", description: "Computing- and network-oriented third son of the ruling household", href: "felix-hitler.html", tags: "felix wolfgang hitler son computing programming networks weltnetz johanna" },
  { title: "Helena Katharina Hitler", description: "Young daughter with a projected documentary and visual formation", href: "helena-hitler.html", tags: "helena katharina hitler daughter film photography documentary family" },
  { title: "Anna Maria Hitler", description: "Youngest child of the ruling household and post-Raumhafen generation", href: "anna-hitler.html", tags: "anna maria hitler daughter youngest music piano choir family" },
  { title: "Succession to Wolfgang Hitler", description: "Designation, institutional confirmation, and the unresolved succession triangle", href: "german-succession.html", tags: "german succession wolfgang hitler designation primogeniture alexander konrad felix leadership" },
  { title: "Second World War", description: "The seven-year war and Lisbon settlement", href: "world-war-ii.html", tags: "wwii war britain germany japan soviet lisbon" },
  { title: "German–Soviet War", description: "The 1941–1946 continental war ending at the Urals", href: "german-soviet-war.html", tags: "german soviet war eastern front barbarossa germany russia urals 1941 1946" },
  { title: "German Eastern Offensives of 1945", description: "The decisive campaign sequence that broke the Soviet western strategic system", href: "german-eastern-offensives-1945.html", tags: "german eastern offensives 1945 moscow leningrad stalingrad soviet collapse" },
  { title: "Collapse of the Soviet Western Strategic Centers", description: "Moscow, Leningrad, and Stalingrad in the 1945–1946 breakdown", href: "collapse-soviet-strategic-centers.html", tags: "soviet western centers moscow leningrad stalingrad collapse 1945 1946" },
  { title: "Soviet Collapse of 1945–1946", description: "The military, political, and territorial breakdown of the unified Soviet war state", href: "soviet-collapse.html", tags: "soviet collapse ussr russia german victory 1945 1946" },
  { title: "Removal and Execution of Joseph Stalin", description: "The emergency conspiracy that ended Stalin's rule", href: "removal-of-stalin.html", tags: "joseph stalin removal execution conspiracy soviet leadership 1945 1946" },
  { title: "Soviet Collective Survival Leadership", description: "Malenkov, Molotov, Beria, Zhukov, and Khrushchev after Stalin", href: "soviet-emergency-leadership.html", tags: "soviet collective survival leadership malenkov molotov beria zhukov khrushchev" },
  { title: "Joseph Stalin", description: "Soviet dictator removed and executed during the collapse of 1945–1946", href: "joseph-stalin.html", tags: "joseph stalin soviet dictator general secretary collapse execution biography" },
  { title: "Georgy Malenkov", description: "Nominal chairman and central administrator of the Soviet survival leadership", href: "georgy-malenkov.html", tags: "georgy malenkov soviet chairman administrator survival leadership biography" },
  { title: "Vyacheslav Molotov", description: "Principal Soviet negotiator of the Ural settlement", href: "vyacheslav-molotov.html", tags: "vyacheslav molotov soviet diplomat foreign commissar ural settlement biography" },
  { title: "Lavrentiy Beria", description: "Security and internal-coercion pillar of the Soviet survival leadership", href: "lavrentiy-beria.html", tags: "lavrentiy beria nkvd security soviet survival leadership biography" },
  { title: "Georgy Zhukov", description: "Marshal and military guarantor of the Soviet survival leadership", href: "georgy-zhukov.html", tags: "georgy zhukov marshal red army soviet military guarantor biography" },
  { title: "Nikita Khrushchev", description: "Party organizer and public advocate for ending Stalin's final resistance", href: "nikita-khrushchev.html", tags: "nikita khrushchev party organizer soviet survival leadership biography" },
  { title: "Ural Settlement", description: "The 1946 agreement ending Soviet sovereignty west of the Urals", href: "ural-settlement.html", tags: "ural settlement peace treaty germany soviet 1946 frontier evacuation" },
  { title: "Evacuation Beyond the Urals", description: "The organized movement of Soviet people, industry, archives, and formations east", href: "great-eastern-evacuation.html", tags: "evacuation urals exodus factories machine tools rolling stock archives soviet 1946" },
  { title: "Fragmentation of the Soviet East", description: "The creation of successor administrations beyond the Urals", href: "fragmentation-soviet-east.html", tags: "soviet east fragmentation siberia successor states omsk novosibirsk central asia" },
  { title: "Soviet Military-Industrial Diaspora", description: "The two-stage migration of Soviet technical knowledge into Siberia and India", href: "soviet-military-industrial-diaspora.html", tags: "soviet industrial diaspora engineers india siberia design bureaus military technology" },
  { title: "Industrial Asylum in India", description: "Protected workshops, contracts, and residence for displaced Soviet technical teams", href: "industrial-asylum.html", tags: "industrial asylum india russian engineers workshops contracts migration" },
  { title: "Paired Design-Bureau System", description: "Related Russian and Indian branches of fragmented Soviet technical lineages", href: "paired-design-bureau-system.html", tags: "paired design bureau system russia india engineering northern southern branches" },
  { title: "Indian Armored Design Genealogies", description: "The competing Soviet-derived vehicle traditions of the Indian successor states", href: "indian-armored-design-genealogies.html", tags: "indian armor tanks design genealogies congress hindustan hyderabad soviet" },
  { title: "Vijaya", description: "The Model 62 main battle tank family of Congress India", href: "vijaya-tank.html", tags: "vijaya model 62 congress india tank t54 t55 nizhny tagil armor" },
  { title: "Congress Indian Ordnance System", description: "The standardized armor, artillery, ammunition, and engineer industry of Congress India", href: "congress-indian-ordnance-system.html", tags: "congress india ordnance arsenal artillery ammunition armor industry" },
  { title: "Military Industry of Hindustan", description: "Hindustan's aviation, air-defense, and advanced-armor establishment", href: "hindustani-military-industry.html", tags: "hindustan military industry mig aviation air defense morozov kharkiv tanks" },
  { title: "Arms Industry of Hyderabad", description: "Hyderabad's prototype, heavy-vehicle, repair, and export economy", href: "hyderabadi-arms-industry.html", tags: "hyderabad arms industry prototypes heavy tanks uralmash yakovlev export" },
  { title: "Russian Technical Communities in India", description: "Émigré communities around Indian arsenals, plants, and universities", href: "russian-technical-communities-india.html", tags: "russian technical communities india emigres engineers arsenals universities diaspora" },
  { title: "Disaster Window Doctrine", description: "The northern Indian doctrine of exploiting cyclones, floods, and earthquakes", href: "disaster-window-doctrine.html", tags: "disaster window doctrine northern india cyclone flood earthquake war relief" },
  { title: "1970 Bhola Cyclone", description: "The eastern Bengali catastrophe that opened the 1970 Patna campaign", href: "bhola-cyclone.html", tags: "bhola cyclone 1970 bengal azad hind disaster relief delta" },
  { title: "Patna Front", description: "The fortified urban and river hinge between Congress India and Azad Hind", href: "patna-front.html", tags: "patna front bihar congress india azad hind ganges fortified city" },
  { title: "River Warfare in Northern India", description: "Monsoon, embankment, bridgehead, and river-craft warfare", href: "river-warfare-northern-india.html", tags: "river warfare northern india ganges brahmaputra monsoon flood embankment" },
  { title: "Disaster Relief in Azad Hind", description: "The dual-use civil-military emergency system of eastern India", href: "disaster-relief-azad-hind.html", tags: "disaster relief azad hind civil military engineers aircraft japan" },
  { title: "Civil Defense in Northern India", description: "Shelters, radios, depots, reserve engineers, and local relief truces", href: "civil-defense-northern-india.html", tags: "civil defense northern india shelters radios depots engineers relief" },
  { title: "Chittagong Relief Crisis", description: "The political crisis created by Azad Hind's withheld military aid in 1991", href: "chittagong-relief-crisis.html", tags: "chittagong relief crisis 1991 azad hind congress military civilian" },
  { title: "Princely States of India", description: "The dispersed sovereign courts and protected principalities surviving after the Raj", href: "princely-states-india.html", tags: "princely states india courts sovereignty dynasty chiefships estates hyderabad" },
  { title: "Chamber of Princes", description: "The Narendra Mandal forum for recognition, transit, disputes, and emergency defense", href: "chamber-of-princes-india.html", tags: "chamber of princes narendra mandal india princely forum transit recognition" },
  { title: "Central Indian Princely States", description: "The Gwalior, Indore, Bhopal, Bundelkhand, and Malwa mosaic", href: "central-indian-princely-states.html", tags: "central india princely states gwalior indore bhopal bundelkhand malwa" },
  { title: "Western Indian Princely States", description: "The separate commercial courts of Gujarat and Kathiawar", href: "western-indian-princely-states.html", tags: "western india princely states gujarat kathiawar rajkot gondal ahmedabad" },
  { title: "Eastern Indian Princely States", description: "The Orissa and Chhattisgarh court system on the TPS frontier", href: "eastern-indian-princely-states.html", tags: "eastern india princely states orissa chhattisgarh athgarh bamra hindol bastar tps" },
  { title: "Hyderabad–Machilipatnam Corridor", description: "Hyderabad's route through Warangal and Vijayawada to the Bay of Bengal", href: "hyderabad-machilipatnam-corridor.html", tags: "hyderabad machilipatnam corridor warangal vijayawada port railway trade" },
  { title: "Princely Balance of Power", description: "The strategy of preventing any all-India claimant from achieving hegemony", href: "princely-balance-of-power.html", tags: "princely balance power azad hind congress india hindustan strategy" },
  { title: "Princely Arms Market", description: "Small-batch weapons, credit, transit, training, and repair for sovereign courts", href: "princely-arms-market.html", tags: "princely arms market india weapons brokers credit bullion hyderabad" },
  { title: "Object 279 Assault-Tank Project", description: "The one-off artillery-zone tank commissioned by a Central Indian court", href: "object-279-india.html", tags: "object 279 india tank assault artillery gwalior hyderabad kirov prototype" },
  { title: "Western Succession Crisis", description: "The 1947-49 collapse that produced five rival western centers", href: "western-succession-crisis.html", tags: "western succession crisis india pakistan sindh kalat balochistan afghanistan quetta 1947 1949" },
  { title: "First Baloch Wars", description: "The 1949-55 struggles over Las Bela, Makran, Chagai, and Quetta", href: "first-baloch-wars.html", tags: "first baloch wars kalat balochistan iran afghanistan las bela makran chagai quetta" },
  { title: "Quetta Campaigns", description: "Pakistan's 1957-60 campaigns to make Quetta a durable capital", href: "quetta-campaigns.html", tags: "quetta campaigns pakistan afghanistan sibi pishin loralai zhob 1957 1960" },
  { title: "Harappa Campaigns", description: "Pakistan's recurring 1964-69 offensives against Khalistan", href: "harappa-campaigns.html", tags: "harappa campaigns pakistan khalistan punjab railway mounted rifles 1964 1969" },
  { title: "Modern Mounted Warfare in Western India", description: "Mounted rifles, mixed columns, and the remount economy", href: "modern-mounted-warfare-western-india.html", tags: "modern mounted warfare western india cavalry horses remount rifles armor logistics" },
  { title: "Kashmir-Khalistan War", description: "The 1972-75 war that placed Kashmir in Afghanistan's security orbit", href: "kashmir-khalistan-war.html", tags: "kashmir khalistan war afghanistan kotli punjab 1972 1975" },
  { title: "Second Las Bela War", description: "The 1976-79 armored contest between Balochistan and Kalat", href: "second-las-bela-war.html", tags: "second las bela war kalat balochistan iran sindh armor 1976 1979" },
  { title: "Hindustan-Rajputana War", description: "The 1979-82 conventional war for Delhi's southwestern approaches", href: "hindustan-rajputana-war.html", tags: "hindustan rajputana war delhi princely india demilitarized zone 1979 1982" },
  { title: "Technology Portal", description: "Directory of computing, energy, space, and applied systems", href: "technology.html", tags: "technology computing rockets moon nuclear space portal" },
  { title: "Computing: Machines, Languages, and Platforms", description: "Computer development from 1947 to 1985", href: "computing.html", tags: "computing computer history colossus turing rechenplan unicode concord bridge" },
  { title: "List of Countries", description: "Geographic index of states, clients, colonies, and frontiers", href: "countries.html", tags: "countries nations states geography index map blocs" },
  { title: "Political Parties in the United States", description: "Party systems from the Federalists to National Renewal and the Democratic-Republican fusion", href: "american-parties.html", tags: "american politics political parties party systems popular vote national renewal democratic republican federalist whig rockwell buchanan reagan" },
  { title: "American Presidential Elections, 1968–1992", description: "From the Stolen Mandate to the last direct two-party election", href: "american-elections.html", tags: "elections 1968 1972 1976 1980 1984 1988 1992 rockefeller buchanan reagan harwood" },
  { title: "List of Presidents of the United States", description: "Washington through Reagan in the alternate presidential succession", href: "presidents.html", tags: "presidents presidency succession washington byrnes dewey warren kennedy rockefeller buchanan reagan" },
  { title: "Philippine War", description: "Insurgency, legitimacy, and American withdrawal", href: "philippine-war.html", tags: "philippine war insurgency nationalist revolt american withdrawal independence" },
  { title: "Mateo de Vera", description: "Luzon organizer and professionalizer of the Philippine national forces", href: "mateo-de-vera.html", tags: "mateo de vera colonel philippines luzon army independence biography" },
  { title: "Elena Magsalin", description: "Lawyer-journalist and organizer of the Philippine civic resistance", href: "elena-magsalin.html", tags: "elena lena magsalin philippines lawyer journalist civic resistance biography" },
  { title: "Isidro Cabahug", description: "Visayan maritime organizer and founder of the Philippine naval profession", href: "isidro-cabahug.html", tags: "isidro cabahug captain philippines visayas navy maritime biography" },
  { title: "Davao Papers", description: "The Panabo accident and exposure of Japan's independence-assistance program", href: "davao-papers.html", tags: "davao papers panabo 1953 japan philippines scandal lorry" },
  { title: "Luneta Shootings", description: "The 4 July 1953 crisis that turned scandal into Philippine revolt", href: "luneta-shootings.html", tags: "luneta shootings manila 4 july 1953 philippines revolt" },
  { title: "Baguio Truce and Manila Accords", description: "The 1957–59 settlement of the Philippine War", href: "baguio-manila-settlement.html", tags: "baguio truce manila accords cebu declaration treaty sovereignty philippines" },
  { title: "Philippine Independence Fleet", description: "The eight Japanese ships transferred outright to the Philippine Republic in 1960", href: "philippine-independence-fleet.html", tags: "philippine independence fleet navy lapu-lapu bonifacio tama destroyers escorts 1960" },
  { title: "Iceland Crisis and Atlantic Accord", description: "The confrontation that divided the Atlantic", href: "iceland-crisis.html", tags: "iceland crisis mid-atlantic ridge accord kennedy germany america" },
  { title: "Kuwait War and Operation Covenant", description: "Britain's 1974 Gulf victory", href: "kuwait-war.html", tags: "kuwait iraq operation covenant muscat gulf britain" },
  { title: "Falklands–Malvinas War", description: "The prolonged South Atlantic war of 1984–1986", href: "falklands-war.html", tags: "falklands malvinas argentina britain second torch stanley" },
  { title: "War of the Chiefs", description: "The Mittelafrikan cascade and Second Mosaic Settlement", href: "war-of-the-chiefs.html", tags: "war chiefs mittelafrika mosaic settlement 1969 1978" },
  { title: "Counting Wars", description: "The coercive registration conflicts of 1948–1952", href: "counting-wars.html", tags: "counting wars mittelafrika census registration refugees colonial violence" },
  { title: "General Registration of Mittelafrika", description: "The population, land, labor, and status campaign", href: "general-registration.html", tags: "general registration mittelafrika census labor land status 1948" },
  { title: "Mosaic Order", description: "Mittelafrika's recognized-community system of negotiated colonial hierarchy", href: "mosaic-order.html", tags: "mosaic order mittelafrika chiefs communities cadastre colonial administration" },
  { title: "African Language and Mediation Service", description: "Translation, petition, and jurisdictional mediation in Mittelafrika", href: "african-language-mediation-service.html", tags: "african language mediation service mittelafrika translation interpreters" },
  { title: "Tribal Cadastre of Mittelafrika", description: "The register of communities, land, jurisdictions, and succession", href: "tribal-cadastre.html", tags: "tribal cadastre mittelafrika chiefs land boundaries registration" },
  { title: "MOSAIK system", description: "Mittelafrika's linked administrative computing network", href: "mosaik-system.html", tags: "mosaik system mittelafrika computing registry data kongostadt" },
  { title: "Kongo-Gesamtwerk", description: "The integrated Congo-basin power and control megaproject", href: "kongo-gesamtwerk.html", tags: "kongo gesamtwerk kongowerk congo project speer hitler van deuren" },
  { title: "Kongo-Ausbaukommission", description: "The 1948 commission that evaluated Congo development alternatives", href: "kongo-ausbaukommission.html", tags: "kongo ausbaukommission commission belgian syneba plan congo" },
  { title: "Kongowerke AG", description: "The operating consortium for the Kongo-Gesamtwerk", href: "kongowerke-ag.html", tags: "kongowerke ag company consortium congo infrastructure mittelafrika" },
  { title: "Malebo-Sperrwerk", description: "The regulating structure that created and controls Kongosee", href: "malebo-sperrwerk.html", tags: "malebo sperrwerk dam pool congo kongosee water" },
  { title: "Inga-Werke", description: "Lower Congo power-generation and release-management works", href: "inga-werke.html", tags: "inga werke hydroelectric power congo kongowerk" },
  { title: "Kongosee", description: "The immense artificial lake and its transformed society", href: "kongosee.html", tags: "kongosee congo lake reservoir drowned forest displacement" },
  { title: "Kongostadt", description: "The practical administrative and technical capital of Mittelafrika", href: "kongostadt.html", tags: "kongostadt capital leopoldville brazzaville congo mittelafrika" },
  { title: "Kongosee- und Stromschutz", description: "The inland navigation, customs, rescue, and security service", href: "kongosee-stromschutz.html", tags: "kss kongosee stromschutz kongoflotte lake fleet patrol" },
  { title: "Kongosee-Eingreifgruppe", description: "The Seefeuerwehr rapid-response formation", href: "kongosee-eingreifgruppe.html", tags: "kongosee eingreifgruppe seefeuerwehr response formation kss" },
  { title: "Combat in Fragmented Terrain", description: "German expeditionary doctrine derived from the Congo campaign", href: "combat-fragmented-terrain.html", tags: "gefechtsführung zerschnittenen raum combat fragmented terrain jaeger doctrine" },
  { title: "Second Mosaic Settlement", description: "The 1977–1979 hard peace and compensated chiefly order", href: "second-mosaic-settlement.html", tags: "second mosaic settlement mittelafrika chiefs performance participation 1977" },
  { title: "Tehran Concord", description: "German–Japanese restraint and frontier sovereignty", href: "tehran-concord.html", tags: "tehran concord germany japan iran siberia détente 1985" },
  { title: "The Space Race, 1957–1985", description: "Satellites, Moon landings, stations, and Mars planning", href: "space-programs.html", tags: "space race programs germany america japan moon mars reusable rockets timeline" },
  { title: "Orbital Stations", description: "Raumhafen, Columbia, Hōrai, and Stella Maris as rival models of permanent orbit", href: "orbital-stations.html", tags: "raumhafen columbia horai hōrai stella maris station orbit germany america japan latin" },
  { title: "American Orbital Vehicle Program", description: "The self-powered runway-to-orbit Pathfinder, Columbia, Liberty, Hercules, Ranger, Enterprise, and Zenith families", href: "american-orbital-vehicle-program.html", tags: "american orbital vehicle program ov series spaceplane aerospace force runway orbit fleet" },
  { title: "OV-1A Pathfinder", description: "The first American aircraft to fly from a runway to orbit and back", href: "ov-1a-pathfinder.html", tags: "ov 1a pathfinder 1969 runway orbit experimental spaceplane" },
  { title: "Columbia Spaceplane Program", description: "The OV-2A and OV-2B two-aircraft lunar mission of 1971", href: "columbia-spaceplane-program.html", tags: "columbia ov 2a ov 2b tanker moon lunar refueling 1971 spaceplane" },
  { title: "Liberty Spaceplane", description: "The OV-3A crewed and OV-3B automatic general orbital transports", href: "liberty-spaceplane.html", tags: "liberty ov 3a ov 3b automatic cargo crew spaceplane transport" },
  { title: "OV-4A Hercules", description: "America's heavy station-module, truss, propellant, and bulk-cargo orbital aircraft", href: "ov-4a-hercules.html", tags: "ov 4a hercules heavy orbital cargo station modules propellant" },
  { title: "OV-5A Ranger", description: "America's satellite inspection, retrieval, repair, and rescue aircraft", href: "ov-5a-ranger.html", tags: "ov 5a ranger satellite inspection retrieval repair rescue cross range" },
  { title: "OV-6A Enterprise", description: "The second-generation American high-frequency crew and cargo transport", href: "ov-6a-enterprise.html", tags: "ov 6a enterprise 1983 crew cargo high frequency orbital transport" },
  { title: "Canaveral Aerospace Field", description: "The principal runway, maintenance, cryogenic, and control base of the American orbital fleet", href: "canaveral-aerospace-field.html", tags: "canaveral aerospace field florida runway cryogenic orbital fleet columbia" },
  { title: "Orbital Port Columbia", description: "America's low-orbit transport, repair, research, and construction port", href: "orbital-port-columbia.html", tags: "orbital port columbia columbia station 1977 1979 space station america" },
  { title: "Kennedy Lunar Station", description: "The first continuously occupied human outpost beyond Earth", href: "kennedy-lunar-station.html", tags: "kennedy lunar station moon base permanent outpost 1979 1980" },
  { title: "Project Pilgrim", description: "America's repeatable Mars transportation program", href: "project-pilgrim.html", tags: "project pilgrim mars america liberty yard columbia kennedy 1996" },
  { title: "Liberty Yard", description: "The American high-orbit Mars assembly and propellant depot", href: "liberty-yard.html", tags: "liberty yard high orbit assembly fuel depot mars pilgrim tug" },
  { title: "Commercial Orbital Transportation Act of 1985", description: "The licensing law that permits private operation of complete orbital aircraft", href: "commercial-orbital-transportation-act.html", tags: "commercial orbital transportation act 1985 frontier private spaceplane license reagan" },
  { title: "Orbital Law", description: "Safety, rescue, debris, weapons limits, and encounter rules in militarized orbit", href: "orbital-law.html", tags: "orbital law space law rescue debris registration incidents weapons safety" },
  { title: "Geneva Convention on Mass-Effect Weapons in Outer Space", description: "The 1974 restriction on biological, chemical, and radiological orbital weapons", href: "geneva-space-weapons-convention.html", tags: "geneva convention mass effect weapons outer space 1974 arms control" },
  { title: "Stockholm Orbital Safety and Salvage Convention", description: "The 1976 registration, rescue, passivation, debris, and salvage agreement", href: "stockholm-orbital-safety-convention.html", tags: "stockholm orbital safety salvage convention 1976 rescue debris passivation registration" },
  { title: "Geneva Orbital Incidents Agreement", description: "The 1982 rules for close approaches, station zones, notice, and life support", href: "geneva-orbital-incidents-agreement.html", tags: "geneva orbital incidents agreement 1982 close approach transponder station safety" },
  { title: "Orbital Weapons", description: "German, American, and Japanese armed inspection and interception systems", href: "orbital-weapons.html", tags: "orbital weapons raumjager zenith raiden inspection interceptor military space" },
  { title: "Political Ideologies and Parties", description: "Comparative guide to the five political systems", href: "ideologies.html", tags: "ideologies parties fascism corporatism commonwealth democracy" },
  { title: "Major-Character Index", description: "Directory of the setting's central cast", href: "characters.html", tags: "characters people biographies dossier index cast" },
  { title: "Everyday Life by Bloc", description: "Material culture and lived modernity", href: "everyday-life.html", tags: "everyday daily life society culture consumer family blocs" },
  { title: "Memory of the Second World War", description: "The five rival settlement narratives that replace a universal postwar consensus", href: "memory-of-the-second-world-war.html", tags: "second world war memory postwar consensus settlement myths public history media" },
  { title: "War memory in Germany", description: "Victory as proof of order, permitted criticism, and the protected legitimacy of conquest", href: "german-war-memory.html", tags: "german war memory victory order censorship veterans public history" },
  { title: "War memory in Japan", description: "Limited-war restraint, imperial guardianship, and the speculative American war", href: "japanese-war-memory.html", tags: "japanese war memory limited war guardianship imperial victory america" },
  { title: "War memory in the Latin Bloc", description: "Distinct Italian, Spanish, Portuguese, and Occitan accounts of victory and national survival", href: "latin-war-memory.html", tags: "latin bloc war memory italy spain portugal occitania catholic fascism" },
  { title: "War memory in Britain", description: "The anti-triumphalist memory of honorable resistance and strategic defeat", href: "british-war-memory.html", tags: "british war memory defeat lisbon algiers resistance crown" },
  { title: "American intervention debate", description: "The victory, long-war, fortress, limited-intervention, and mission-nationalist schools", href: "american-intervention-debate.html", tags: "america second world war intervention debate spectator war victory school long war fortress" },
  { title: "Strategic video games in Germany", description: "The staff-game lineage behind Germany's Stabsspiel, real-time, and grand-strategy traditions", href: "german-strategy-games.html", tags: "germany strategy games video games stabsspiel kriegsspiel grand strategy real time weltnetz" },
  { title: "Everyday life in Japan, 1950–2000", description: "Six representative occupational households from victory austerity to infrastructural empire", href: "everyday-life-in-japan.html", tags: "japan everyday life social history households 1950 1960 1970 1980 1990 2000" },
  { title: "Government of National China", description: "The Five-Yuan republic and its constitutionalized provincial magnates", href: "government-of-national-china.html", tags: "china government five yuan provincial confederation nanjing governors constitution" },
  { title: "National Examination Settlement", description: "The classical, practical, and technical civil-service examinations of postwar China", href: "national-examination-settlement.html", tags: "china examination yuan civil service xiucai juren jinshi jiangnan education" },
  { title: "Languages of National China", description: "Regional speech, National Chinese, Japanese, and traditional-character computing", href: "languages-of-national-china.html", tags: "china languages mandarin cantonese wu hokkien hakka japanese traditional characters unicode" },
  { title: "Economy of National China", description: "Protected prosperity under a Japanese and Manchukuoan strategic industrial ceiling", href: "economy-of-national-china.html", tags: "china economy protected prosperity industry ceiling mantetsu consumer manufacturing" },
  { title: "Culture of National China", description: "The Republican-classical synthesis and China's claim to civilizational centrality", href: "culture-of-national-china.html", tags: "china culture confucius sun yat sen classical settlement qing han ceremony" },
  { title: "Mass media in National China", description: "Historical drama, opera, publishing, regional broadcasting, and Japanese distribution", href: "mass-media-in-national-china.html", tags: "china media film television publishing opera wuxia journey west sun wukong" },
  { title: "Regions of National China", description: "Nanjing, Shanghai, the north, Sichuan, Guangdong, and the Japanese corridors", href: "regions-of-national-china.html", tags: "china regions provinces nanjing shanghai sichuan guangdong northern china" },
  { title: "Sino-Japanese guardianship", description: "China as civilizational center and Japan as protecting and ordering power", href: "sino-japanese-guardianship.html", tags: "china japan relations guardianship civilization center outer wall geacps" },
  { title: "National Learning and Practical State movement", description: "The post-1985 Chinese reform tendency joining classical learning to technical sovereignty", href: "national-learning-practical-state.html", tags: "china national learning practical state reform technocratic nationalism industry post 1985" },
  { title: "Military Technology Portal", description: "Land, naval, aerospace, and orbital capability", href: "military-technology.html", tags: "military technology weapons tanks ships aircraft armaments portal" },
  { title: "India and the Indian Successor States", description: "The Breaking of the Raj and Colombo armistice system", href: "india-successors.html", tags: "india raj hindustan azad hind bengal colombo bastion" },
  { title: "Middle East and the Arab Ideological Triangle", description: "Baghdad, Riyadh, and the Hashemite monarchies", href: "middle-east.html", tags: "middle east arab iraq saudi jordan iran syria" },
  { title: "British Africa and the Cape System", description: "Associated states, the Cape route, and imperial survival", href: "british-africa.html", tags: "africa cape accra ghana south africa rhodesia commonwealth" },
  { title: "Spanish State", description: "Gibraltar, development, and Hispanic diplomacy", href: "spain.html", tags: "spain franco gibraltar madrid barcelona morocco" },
  { title: "Occitania", description: "Southern French successor and Latin systems integrator", href: "occitania.html", tags: "occitania toulouse france occitan avionics latin" },
  { title: "Northern France", description: "The continuing État français under German supervision", href: "northern-france.html", tags: "northern france france proper état français etat francais vichy paris rouen laon chalons nancy dijon orleans angers poitiers" },
  { title: "Catholic Church", description: "The papacy, conciliar settlement, and bloc relations", href: "catholic-church.html", tags: "catholic church council christ king pope papacy sheen" },
  { title: "Pope Gregory XVII", description: "The Armenian Catholic pope who convened the Council of Christ the King", href: "gregory-xvii.html", tags: "gregory xvii gregorio pietro agagianian aghajanian pope armenian catholic 1958 1971" },
  { title: "Council of Christ the King", description: "The 1962–1965 council of ecclesial patrimony, Eastern communion, and restrained reform", href: "council-of-christ-the-king.html", tags: "second vatican council christ king ecclesial patrimony orthodox liturgy 1962 1965" },
  { title: "Fulton J. Sheen", description: "American cardinal, broadcaster, conciliar interpreter, and public theologian", href: "fulton-sheen.html", tags: "fulton john sheen cardinal bishop broadcaster television national renewal council" },
  { title: "Pope Paul VI", description: "Franjo Šeper and the administrative consolidation of the council", href: "paul-vi.html", tags: "paul vi franjo šeper seper pope croatia zagreb doctrine 1971 1981" },
  { title: "Pope Pius XIII", description: "Giuseppe Siri and the juridical settlement of the Church in 1985", href: "pius-xiii.html", tags: "pius xiii giuseppe siri pope genoa canon law 1982 1985" },
  { title: "Latin Space Community", description: "The four-state institution linking Italian launchers, Occitan avionics, Spanish industry, and Portuguese tracking", href: "latin-space-community.html", tags: "latin space community convention italy occitania spain portugal workshare" },
  { title: "Luigi Broglio", description: "Italian engineer and operational architect of San Marco and the Latin space program", href: "luigi-broglio.html", tags: "luigi broglio engineer italy san marco astronautics space" },
  { title: "San Marco Space Centre", description: "The equatorial Latin launch, tracking, training, and operations complex near Kismayo", href: "san-marco-space-centre.html", tags: "san marco space centre center kismayo equatorial launch range somalia" },
  { title: "Aquila program", description: "The cautious Latin crew capsule program from Aquila 0 to the 1984 Aquila I flight", href: "aquila-program.html", tags: "aquila 0 aquila i crew capsule latin space 1973 1984" },
  { title: "Concordia orbital program", description: "The Concordia laboratory modules and Mercurius cargo and reboost system", href: "concordia-orbital-program.html", tags: "concordia concordia-a mercurius laboratory cargo reboost latin space 1975" },
  { title: "Stella Maris", description: "The multinational Latin orbital complex whose construction begins in 1985", href: "stella-maris.html", tags: "stella maris orbital station latin space community 1985" },
  { title: "Weather Commons", description: "The CMTES weather-satellite registry and international public data service", href: "weather-commons.html", tags: "weather commons international meteorological satellite service cmtes san marco accords 1970 1972" },
  { title: "Portugal and the Lusophone Empire", description: "Atlantic development, Angola, and Mozambique", href: "portugal.html", tags: "portugal lisbon lusophone angola mozambique salazar" },
  { title: "The Four Frances", description: "Northern France, Occitania, Brittany, and underground France", href: "four-frances.html", tags: "france four frances occitania brittany paris partition" },
  { title: "Chōsen", description: "Japan-proper status, Japanese city names, assimilation, and industrial incorporation", href: "korea.html", tags: "chosen chōsen korea keijo japan proper japanese empire assimilation industry identity" },
  { title: "Korean Language in Chōsen", description: "The 1982 shift from Vulnerable to Definitely Endangered", href: "korean-language.html", tags: "korean language hangul endangered vulnerable chosen chōsen preservation" },
  { title: "Manchukuo", description: "A multiethnic industrial monarchy beneath Japanese corporate command", href: "manchukuo.html", tags: "manchukuo manchuria japan heavy industry railway aisin gioro corporate sovereignty" },
  { title: "Corporate Politics in the GEACPS", description: "The corporate-host conflicts, patronage networks, and mature-coordination system", href: "corporate-politics-geacps.html", tags: "geacps corporate politics zaibatsu associated states patronage capture tokyo" },
  { title: "Corporate–Host Bargain", description: "Japanese ownership and strategic command beside associated-state jurisdiction", href: "corporate-host-bargain.html", tags: "corporate host bargain geacps ownership jurisdiction tax labor police" },
  { title: "Associated-State Economic Nationalism", description: "National jurisdiction, redundancy, and advancement within the Japanese system", href: "associated-state-economic-nationalism.html", tags: "associated state economic nationalism geacps reform sovereignty industry" },
  { title: "Mantetsu–Manchukuo Disputes", description: "The recurring corporate-sovereignty confrontations that taught firms to win in Tokyo", href: "mantetsu-manchukuo-disputes.html", tags: "mantetsu manchukuo disputes corporate sovereignty escalation tokyo" },
  { title: "Manchukuoan Industrial Sovereignty", description: "Heavy industrial power without control of the Japanese economic chain", href: "manchukuoan-industrial-sovereignty.html", tags: "manchukuo industrial sovereignty mantetsu ownership heavy industry" },
  { title: "Corporate Cities in Manchukuo", description: "Railway and industrial municipalities shaped by Japanese firms", href: "corporate-cities-manchukuo.html", tags: "corporate cities manchukuo mantetsu railway municipality company town" },
  { title: "Japanese Settlement in Manchukuo", description: "Postwar settlement, the late-1960s moratorium, and a permanent continental community", href: "japanese-settlement-manchukuo.html", tags: "japanese settlement manchukuo manshu nihonjin settlers moratorium" },
  { title: "Japanese Corporate Patronage", description: "Sponsorship, careers, development, and structural capture across the Sphere", href: "japanese-corporate-patronage.html", tags: "japanese corporate patronage sponsorship parties media institutes geacps capture" },
  { title: "Zaibatsu Security Forces", description: "Corporate armed protection in Borneo, India, and concession corridors", href: "zaibatsu-security-forces.html", tags: "zaibatsu security forces corporate guards borneo india geacps" },
  { title: "Japanese Corporate Scandals", description: "Disclosure and discipline that correct method while preserving the system", href: "japanese-corporate-scandals.html", tags: "japanese corporate scandals zaibatsu corruption patronage disclosure" },
  { title: "Japanese Cyberpunk", description: "The corporate dystopia of technically successful systems and unlocatable authority", href: "japanese-cyberpunk.html", tags: "japanese cyberpunk corporate dystopia mantetsu weltnetz animation games" },
  { title: "Mature Co-Prosperity System", description: "Tokyo's c. 2000 theory of corporate leadership as mature coordination", href: "mature-co-prosperity-system.html", tags: "mature co prosperity system coordination corporate capture japan 2000" },
  { title: "Computing and Global Networks", description: "Weltnetz, ADN, TEJUN, and incompatible standards", href: "computing-networks.html", tags: "computing networks weltnetz adn teju keisan software" },
  { title: "SS Order Faith", description: "The theology, ritual, and authority of the SS order", href: "ss-order-faith.html", tags: "ss order faith wralda allfather religion hagedorn rabe" },
  { title: "Commonwealth Dominions", description: "Canada, Australia, and New Zealand in the Crown system", href: "commonwealth-dominions.html", tags: "canada australia new zealand dominions anzac commonwealth" },
  { title: "Political Economy by Bloc", description: "Credit, currency, firms, and imperial extraction", href: "political-economy.html", tags: "economy economics currency clearing markets firms blocs" },
  { title: "Propaganda, Intelligence, and Cultural Infiltration", description: "The information conflict below open war", href: "propaganda-intelligence.html", tags: "propaganda intelligence infiltration media culture espionage" },
  { title: "Nuclear Power and the Energy Order", description: "The atomic age without nuclear weapons", href: "nuclear-energy.html", tags: "nuclear power energy reactors atomic submarines" },
  { title: "Formula One and Group 7", description: "International motor racing as prestige laboratory", href: "motorsport.html", tags: "formula one f1 group 7 motorsport racing cars" },
  { title: "Formula One World Championship", description: "The 1952 German–Italian settlement that became a global engineering championship", href: "formula-one-world-championship.html", tags: "formula one world championship f1 racing geneva drivers manufacturers" },
  { title: "FIA Geneva Sporting Secretariat", description: "Neutral international rulemaking, inspection, and arbitration for motor racing", href: "fia-geneva-sporting-secretariat.html", tags: "fia geneva sporting secretariat federation automobile arbitration rules racing" },
  { title: "1952 Formula One World Championship", description: "The inaugural Formula One season and its deliberately open sporting record", href: "1952-formula-one-world-championship.html", tags: "1952 formula one inaugural season grand prix cup mercedes ferrari" },
  { title: "German Formula One Program", description: "Mercedes-Benz, Auto Union, Porsche, and the German works-engineering tradition", href: "german-formula-one-program.html", tags: "german formula one mercedes benz auto union porsche works racing" },
  { title: "Italian Formula One Program", description: "Alfa Romeo, Ferrari, Maserati, Lancia, and Italy's competing design schools", href: "italian-formula-one-program.html", tags: "italian formula one alfa romeo ferrari maserati lancia racing" },
  { title: "British Formula One Constructors", description: "The lightweight specialist teams that disrupted continental works racing", href: "british-formula-one-constructors.html", tags: "british formula one constructors brm cooper lotus era connaught garagiste" },
  { title: "American International Motorsport", description: "Oval and endurance culture, private capital, engines, and the North American Group 7 branch", href: "american-international-motorsport.html", tags: "american motorsport group 7 endurance indianapolis v8 racing" },
  { title: "Japanese Formula One Program", description: "The engine-led path from motorcycles and touring cars to Formula One", href: "japanese-formula-one-program.html", tags: "japanese formula one honda toyota nissan motorcycles touring endurance" },
  { title: "International Group 7 Championship", description: "The near-unrestricted international two-seat prototype laboratory", href: "international-group-7-championship.html", tags: "international group 7 championship can am prototype formula libre racing" },
  { title: "Technology Transfer from Motor Racing", description: "How touring, endurance, Formula One, and Group 7 influence industry", href: "racing-technology-transfer.html", tags: "racing technology transfer brakes tires injection suspension composites data" },
  { title: "Japan–Peru Relations", description: "The commercial, military, and political relationship behind Japan's principal South American foothold", href: "japanese-peruvian-relations.html", tags: "japan peru relations samanco chimbote geacps south america pacific" },
  { title: "Peruvian Military-Developmental State", description: "The authoritarian development order that uses Japanese partnership to pursue strategic autonomy", href: "peruvian-military-developmental-state.html", tags: "peru military developmental state government japan ports fisheries minerals" },
  { title: "Samanco–Chimbote Complex", description: "The dual Peruvian commercial-port and Japanese-access corridor", href: "samanco-chimbote-complex.html", tags: "samanco chimbote complex peru japanese base port naval access" },
  { title: "Samanco Pacific Maritime Complex", description: "A Peruvian naval facility used by Japanese rotational and technical missions", href: "samanco-pacific-maritime-complex.html", tags: "samanco pacific maritime complex peru japan naval base repair signals" },
  { title: "Chimbote Industrial Port", description: "Fisheries, steel, cargo, repair, and the commercial hinterland of Samanco", href: "chimbote-industrial-port.html", tags: "chimbote industrial port fisheries steel peru cargo repair customs" },
  { title: "Japanese Arms Trade with Peru", description: "Finished Japanese equipment, training, and sustainment without licensed mass production", href: "japanese-arms-trade-peru.html", tags: "japanese arms trade peru weapons tanks ships radar training sustainment" },
  { title: "Japanese Pacific Footholds in South America", description: "Distinct Japanese relationships with Peru, Ecuador, and balancing Chile", href: "japanese-pacific-footholds-south-america.html", tags: "japanese pacific footholds south america peru ecuador chile ports arms" },
  { title: "Samanco Crisis", description: "The 1981 Japanese–American–Peruvian confrontation over the maritime complex", href: "samanco-crisis-1981.html", tags: "samanco crisis 1981 peru japan united states buchanan monroe doctrine" },
  { title: "Lima Open Commerce Compact", description: "The late-1990s Peruvian–American commercial opening that challenged Japanese access", href: "lima-open-commerce-compact.html", tags: "lima open commerce compact peru america trade corporate ports 1998 1999" },
  { title: "Samanco Customs Incident", description: "The late-1990s inspection confrontation among Peru, Japan, and American systems firms", href: "samanco-customs-incident.html", tags: "samanco customs incident chimbote inspection peru japan america quay" },
  { title: "Sunda", description: "The western Javanese state divided between Bandung government and chartered Batavia", href: "sunda.html", tags: "sunda sundanese western java bandung batavia banten southern archipelago" },
  { title: "Mataram", description: "The central Javanese court federation of Yogyakarta and Surakarta", href: "mataram.html", tags: "mataram central java yogyakarta surakarta court federation geacps" },
  { title: "East Java and Madura", description: "The maritime-industrial Javanese state centered on Surabaya", href: "east-java-madura.html", tags: "east java madura surabaya maritime industrial javanese" },
  { title: "Sultanate of Aceh", description: "The restored Islamic monarchy at Sumatra's western Malacca approach", href: "aceh.html", tags: "aceh sultanate kutaraja northern sumatra islam oil malacca" },
  { title: "Tapanuli", description: "The Batak federal state of the north-Sumatran highlands", href: "tapanuli.html", tags: "tapanuli batak sumatra federal christian muslim highlands" },
  { title: "Minangkabau", description: "The west Sumatran state of Islamic, matrilineal, and Pagaruyung institutions", href: "minangkabau.html", tags: "minangkabau west sumatra bukittinggi padang pagaruyung matrilineal" },
  { title: "Sumatran Malay Federation", description: "The oil, plantation, and port federation of eastern and southern Sumatra", href: "sumatran-malay-federation.html", tags: "sumatran malay federation medan palembang deli siak riau jambi lampung oil" },
  { title: "Kalimantan Federation", description: "The federal Bornean resource state of rulers, autonomies, and corporate cities", href: "kalimantan-federation.html", tags: "kalimantan federation banjarmasin balikpapan samarinda tarakan pontianak borneo" },
  { title: "South Sulawesi", description: "The Bugis-Makassar maritime state centered on Makassar", href: "south-sulawesi.html", tags: "south sulawesi bugis makassar maritime bone gowa" },
  { title: "North Sulawesi", description: "The Minahasa-Gorontalo naval-frontier federation", href: "north-sulawesi.html", tags: "north sulawesi minahasa gorontalo manado christian muslim naval" },
  { title: "Bali", description: "The Hindu court, temple, village, and irrigation federation", href: "bali.html", tags: "bali denpasar hindu court temple irrigation tourism geacps" },
  { title: "Lombok–Sumbawa", description: "The Muslim federation of the western Lesser Sunda islands", href: "lombok-sumbawa.html", tags: "lombok sumbawa lesser sunda muslim islands federation" },
  { title: "Eastern Lesser Sunda Federation", description: "The Christian and customary island federation centered on Kupang", href: "eastern-lesser-sunda-federation.html", tags: "eastern lesser sunda federation flores sumba west timor kupang rote savu alor" },
  { title: "Moluccan Federation", description: "The Ternate-Ambon dual federation of the Moluccan islands", href: "moluccan-federation.html", tags: "moluccan federation moluccas maluku ternate tidore ambon banda" },
  { title: "Bornean Malaya", description: "The Malay-headed Bornean state dissolved after the Malay-Bornean War", href: "bornean-malaya.html", tags: "bornean malaya brunei sarawak north borneo labuan former state" },
  { title: "Southern Archipelago Council", description: "Technical coordination among fifteen states without political federation", href: "southern-archipelago-council.html", tags: "southern archipelago council shipping customs weather fisheries rescue indonesia" },
  { title: "Japanese East Indies", description: "The 1942–1947 resource administration that preceded the fifteen states", href: "japanese-east-indies.html", tags: "japanese east indies occupation administration dutch east indies 1942 1947" },
  { title: "Indonesian Unification Movement", description: "The suppressed political current seeking one sovereign Indonesian state", href: "indonesian-unification-movement.html", tags: "indonesian unification movement indonesia sukarno hatta nationalism opposition" },
  { title: "Consumer Computing and Platform Society", description: "Personal machines, software, and compatibility politics", href: "platform-society.html", tags: "personal computing platform concord interlink bridge software" },
  { title: "Palestine War and the Amman Settlement", description: "The post-Mandate war and divided settlement", href: "palestine-war.html", tags: "palestine war israel jordan amman jerusalem" },
  { title: "Iraqi Civil War and the National Resurrection Regime", description: "Hashemite collapse and German-backed revolution", href: "iraqi-civil-war.html", tags: "iraq civil war national resurrection hashemite baghdad" },
  { title: "State of Israel", description: "The reduced coastal state created by the Palestine settlement", href: "israel.html", tags: "israel tel aviv haifa galilee palestine amman jordan jewish state" },
  { title: "National Resurrection Iraq", description: "The German-associated Arab revolutionary republic", href: "iraq.html", tags: "iraq baghdad national resurrection revolutionary command arab germany" },
  { title: "Kingdom of Saudi Arabia", description: "Japanese-associated modernization and the Meccan Doctrine", href: "saudi-arabia.html", tags: "saudi arabia riyadh mecca japanese oil gulf monarchy" },
  { title: "Republic of Turkey", description: "The fortified neutral Kemalist hedgehog", href: "turkey.html", tags: "turkey ankara bosphorus dardanelles straits kemalist neutral" },
  { title: "Amman Settlement", description: "The territorial and security order ending the main Palestine War", href: "amman-settlement.html", tags: "amman settlement palestine israel jordan jerusalem haifa gaza" },
  { title: "Royal Iraqi Government in Exile", description: "The Hashemite Iraqi claimant protected in Amman", href: "royal-iraqi-government-in-exile.html", tags: "iraq royal government exile amman jordan hashemite claimant" },
  { title: "Meccan Doctrine", description: "Saudi Arab and Islamic sovereignty without foreign or Iraqi rule", href: "meccan-doctrine.html", tags: "meccan doctrine saudi arabia riyadh islamic sovereignty japan" },
  { title: "Arab Ideological Triangle", description: "The rival Baghdad, Riyadh, and Amman–Damascus political languages", href: "arab-ideological-triangle.html", tags: "arab ideological triangle baghdad riyadh amman damascus" },
  { title: "Arab National Revolutionary Command", description: "The movement that created National Resurrection Iraq", href: "arab-national-revolutionary-command.html", tags: "arab national revolutionary command iraq baghdad germany officers" },
  { title: "Hashemite National Monarchy", description: "The federative Amman–Damascus monarchist project", href: "hashemite-national-monarchy.html", tags: "hashemite national monarchy jordan syria iraq exile arab revolt" },
  { title: "Straits Security Settlement", description: "The working arrangement preserving constrained Turkish neutrality", href: "straits-security-settlement.html", tags: "straits security settlement turkey bosphorus dardanelles germany italy" },
  { title: "Operation Covenant", description: "The British Commonwealth campaign that cleared Kuwait", href: "operation-covenant.html", tags: "operation covenant kuwait war britain iraq faw basra umm qasr" },
  { title: "Muscat Articles", description: "The late-December 1974 armistice ending the Kuwait War", href: "muscat-articles.html", tags: "muscat articles kuwait armistice iraq britain 1974 boundary" },
  { title: "Suez Regime", description: "The Italian-controlled open commercial canal system", href: "suez-regime.html", tags: "suez canal egypt italy tolls shipping latin bloc" },
  { title: "Ghana, the Accra Disaster, and Ordered Particularism", description: "The crisis that reshaped Commonwealth Africa", href: "ghana-accra.html", tags: "ghana accra disaster ordered particularism takoradi" },
  { title: "German Leadership after Hitler", description: "The Second Draft, succession, and divided old guard", href: "german-leadership.html", tags: "german leadership hitler goering wolfgang council succession" },
  { title: "Otto Albrecht Seidel", description: "Cadre and appointments administrator after the division of Bormann's machinery", href: "otto-seidel.html", tags: "otto albrecht seidel germany cadre appointments personnel bormann party" },
  { title: "Ernst Keller", description: "SS records clerk and corroborated visionary of the Great Hall", href: "ernst-keller.html", tags: "ernst keller ss order faith vision great hall green height hintermayr" },
  { title: "Matthias Kern", description: "Chief of domestic security and administrative audit after Heydrich", href: "matthias-kern.html", tags: "matthias kern germany security audit records heydrich domestic" },
  { title: "Werner Lenz", description: "Director of special development and German technical-investment coordinator", href: "werner-lenz.html", tags: "werner lenz germany industry investment speer development fund technical board" },
  { title: "Ilmar Bielenstein", description: "Ostland programmer and disputed creator of Mauerwerk", href: "ilmar-bielenstein.html", tags: "ilmar bielenstein riga ostland programmer mauerwerk game rights" },
  { title: "Mauerwerk", description: "German falling-block puzzle and early international software-rights dispute", href: "mauerwerk.html", tags: "mauerwerk falling block puzzle video game computing kurzplan rights bielenstein" },
  { title: "Katharina Hitler", description: "Physician and center of the German ruling household", href: "katharina-hitler.html", tags: "katharina hitler hartmann physician household biography" },
  { title: "Friedrich Hagedorn", description: "Reichsführer-SS and administrator of Order", href: "friedrich-hagedorn.html", tags: "friedrich hagedorn reichsfuhrer ss biography" },
  { title: "Johannes Rabe", description: "Custodian and theologian of the SS Order Faith", href: "johannes-rabe.html", tags: "johannes rabe theologian ss order faith biography" },
  { title: "Matthias Falkenberg", description: "Architect of Weltnetz", href: "matthias-falkenberg.html", tags: "matthias falkenberg weltnetz computing network biography" },
  { title: "Elias Mercer", description: "Concord founder and advocate of the gated republic", href: "elias-mercer.html", tags: "elias mercer concord computer founder biography" },
  { title: "Martin Keene", description: "Interlink founder and architect of Bridge/16", href: "martin-keene.html", tags: "martin keene interlink bridge software founder biography" },
  { title: "David Ashcombe", description: "Britain's Quiet Engineer and post-Thatcher leader", href: "david-ashcombe.html", tags: "david ashcombe britain quiet engineer thatcher biography" },
  { title: "Martin Calder", description: "Commonwealth Labour leader and industrial-security reformer", href: "martin-calder.html", tags: "martin calder britain labour opposition industrial security peace election biography" },
  { title: "Sir Julian Rooke", description: "Market-radical rival in the post-Thatcher governing union", href: "julian-rooke.html", tags: "julian rooke britain market liberal chancellor nlcu leadership biography" },
  { title: "Matthew Halden", description: "Crown-and-Commonwealth nationalist and critic of American dependence", href: "matthew-halden.html", tags: "matthew halden britain powellite commonwealth nationalist nlcu leadership biography" },
  { title: "1987 NLCU Leadership Election", description: "The second-ballot contest that selected David Ashcombe", href: "1987-nlcu-leadership-election.html", tags: "1987 britain leadership election thatcher ashcombe rooke halden nlcu" },
  { title: "1988 United Kingdom General Election", description: "The Build the Peace election and Responsible Independence mandate", href: "1988-united-kingdom-general-election.html", tags: "1988 britain general election peace election build peace ashcombe calder" },
  { title: "Halifax Understanding", description: "The bounded American–Commonwealth security and commercial framework of 1988", href: "halifax-understanding.html", tags: "halifax understanding 1988 reagan ashcombe canada commonwealth asw orbital trade" },
  { title: "Reichsprotektorat Belgien", description: "Belgian protectorate, Lille transfer, and North Sea industrial system", href: "belgium.html", tags: "belgium belgien brussels antwerp lille reichsprotektorat einheitspakt" },
  { title: "Brittany", description: "Nominal independence under German guarantee and Atlantic bases", href: "brittany.html", tags: "brittany rennes breton france german bases einheitspakt" },
  { title: "Reichsprotektorat Norwegen", description: "Norway as the Einheitspakt's northern maritime fortress", href: "norway.html", tags: "norway norwegen oslo northern shield reichsprotektorat einheitspakt" },
  { title: "Reichsprotektorat Dänemark", description: "Denmark's monarchy, protectorate order, and Baltic gate", href: "denmark.html", tags: "denmark danmark danemark copenhagen baltic reichsprotektorat einheitspakt" },
  { title: "Kingdom of Sweden", description: "Sovereign Einheitspakt associate and precision-industrial partner", href: "sweden.html", tags: "sweden stockholm monarchy independent associate einheitspakt" },
  { title: "Republic of Finland", description: "Sovereign Einheitspakt associate and Greater-Finnish Arctic frontier", href: "finland.html", tags: "finland helsinki karelia kola arctic independent associate einheitspakt" },
  { title: "Kingdom of Hungary", description: "Nominal sovereignty, Transylvania, and protectorate-grade integration", href: "hungary.html", tags: "hungary budapest transylvania danube romania einheitspakt" },
  { title: "Kingdom of Romania", description: "Oil, eastern compensation, and protectorate-grade integration", href: "romania.html", tags: "romania bucharest oil odessa transylvania hungary einheitspakt" },
  { title: "Argentine Republic", description: "Sovereign Einheitspakt associate and German arsenal partner", href: "argentina.html", tags: "argentina buenos aires germany einheitspakt falklands malvinas arms" },
  { title: "Kingdom of Thailand", description: "Siamese sovereignty and associated status inside GEACPS", href: "thailand.html", tags: "thailand siam bangkok geacps dai toa kyoeiken" },
  { title: "Union of Burma", description: "Eight-part armed federation under a later Thai security protectorate", href: "burma.html", tags: "burma myanmar rangoon geacps japan thailand frontier bamar federalism state guards" },
  { title: "Bamar Union Core", description: "Rangoon, Mandalay, the Irrawaddy valley, ports, and the federal center", href: "bamar-union-core.html", tags: "bamar union core rangoon mandalay irrawaddy delta burma federal center" },
  { title: "Federated Shan State", description: "Princely federation and eastern hinge of the Burmese order", href: "shan-state.html", tags: "shan state sawbwa wa pa-o taang palaung kokang thailand burma" },
  { title: "Kachin State", description: "Northern highland state, State Guard, jade, and Chinese frontier", href: "kachin-state.html", tags: "kachin state myitkyina jade frontier state guard burma" },
  { title: "Chin State", description: "Western hill state between Burma and the Indian successor order", href: "chin-state.html", tags: "chin state hills india frontier state guard burma" },
  { title: "Karen State", description: "Dispersed nationality state divided between border and delta arrangements", href: "karen-state.html", tags: "karen kayin state delta thailand frontier state guard burma" },
  { title: "Karenni State", description: "Compact eastern highland state preserving unusual treaty autonomy", href: "karenni-state.html", tags: "karenni kayah state highland thailand autonomy burma" },
  { title: "Mon State", description: "Lower-Burma coastal state balancing language revival and port dependence", href: "mon-state.html", tags: "mon state moulmein mawlamyine coast language ports burma" },
  { title: "Arakan State", description: "Western littoral state, Akyab port, and nested Muslim autonomy", href: "arakan-state.html", tags: "arakan rakhine state akyab sittwe muslim district coast burma" },
  { title: "Armed Federalism in Burma", description: "Union heavy arms, State Guards, and Japanese control of escalation", href: "armed-federalism-burma.html", tags: "armed federalism union army state guards weapons supply japan burma" },
  { title: "Burmese Companion War", description: "The 1948–1953 conflict that ended British protection", href: "burmese-companion-war.html", tags: "burmese companion war 1948 1953 british rangoon japan burma" },
  { title: "Rangoon Settlement", description: "The 1952–1953 ceasefire constitution of the asymmetric Union", href: "rangoon-settlement.html", tags: "rangoon settlement 1952 1953 federal union state guards britain japan" },
  { title: "Burmese Federal Crisis", description: "The 1954–1956 struggle over powers, forces, revenue, and transit", href: "burmese-federal-crisis.html", tags: "burmese federal crisis 1954 1956 union states revenue army transit" },
  { title: "Second Burmese War", description: "The later-1960s breakdown of the first federal order", href: "second-burmese-war.html", tags: "second burmese war later 1960s federal breakdown burma" },
  { title: "Sovereign States Experiment", description: "Eight internationally recognized Burmese states under common constraints", href: "sovereign-states-experiment.html", tags: "sovereign states experiment bamar shan kachin chin karen karenni mon arakan" },
  { title: "War of the Burmese States", description: "The conflict that ended the eight-state experiment and restored one framework", href: "war-of-burmese-states.html", tags: "war burmese states experiment ports railways rivers corridors burma" },
  { title: "Thai Protectorate over Burma", description: "Mid-1990s delegated security under an ultimate Japanese guarantee", href: "thai-protectorate-burma.html", tags: "thai protectorate burma mid 1990s thailand japan security guarantee" },
  { title: "Indochinese Administrations", description: "Regional portal for three distinct mainland GEACPS states", href: "indochina.html", tags: "indochina vietnam cambodia laos saigon hanoi geacps japan" },
  { title: "Empire of Vietnam", description: "Nguyễn monarchy and Japanese-associated mainland state", href: "vietnam.html", tags: "vietnam dai nam hue hanoi saigon long tinh geacps japan" },
  { title: "Kingdom of Cambodia", description: "Associated Khmer monarchy inside GEACPS", href: "cambodia.html", tags: "cambodia khmer phnom penh angkor geacps japan" },
  { title: "Kingdom of Laos", description: "Luang Phrabang monarchy and mainland buffer", href: "laos.html", tags: "laos lao luang phrabang vientiane geacps japan" },
  { title: "Southern Archipelago States", description: "Fifteen sovereign regional states beneath Japanese corporate primacy", href: "east-indies-successor-states.html", tags: "southern archipelago states dutch east indies indonesia sunda mataram aceh sumatra sulawesi moluccas geacps japan" },
  { title: "Vladivostok Protectorate", description: "Japanese-controlled Russian Pacific port and railhead", href: "vladivostok.html", tags: "vladivostok maritime province protectorate russia geacps japan" },
  { title: "Russian Far Eastern State", description: "Federal Russian monarchy under Japanese strategic supremacy", href: "russian-far-eastern-state.html", tags: "russian far east siberia tsar mikhail chita khabarovsk amur geacps japan" },
  { title: "Chukotka Autonomous Territory", description: "Northern autonomous territory of the Russian Far Eastern State", href: "chukotka.html", tags: "chukotka anadyr bering autonomous territory russian far eastern state" },
  { title: "Kingdom of Greece", description: "A separate associated crown beneath Italian strategic reserved powers", href: "greece.html", tags: "greece athens umberto crown association orthodox italy latin" },
  { title: "Kingdom of Albania", description: "Italian-dominated crowned dependency on the Adriatic", href: "albania.html", tags: "albania tirana italy adriatic latin bloc" },
  { title: "Kingdom of Montenegro", description: "A Federal Yugoslav constituent and former Italian protectorate", href: "montenegro.html", tags: "montenegro cetinje podgorica yugoslavia italy federal constituent protectorate" },
  { title: "Associated Kingdom of Syria", description: "Formally sovereign Arab monarchy tied to Italy", href: "syria.html", tags: "syria damascus aleppo monarchy italy latin bloc" },
  { title: "Canada", description: "Sovereign Commonwealth realm and North American–Arctic anchor", href: "canada.html", tags: "canada ottawa commonwealth arctic dominion realm" },
  { title: "Commonwealth of Australia", description: "Sovereign Indo-Pacific Commonwealth realm", href: "australia.html", tags: "australia canberra commonwealth indo pacific realm" },
  { title: "New Zealand", description: "Sovereign South Pacific Commonwealth realm", href: "new-zealand.html", tags: "new zealand wellington commonwealth pacific realm" },
  { title: "Union of South Africa", description: "Racially authoritarian sovereign hinge of the Cape route", href: "south-africa.html", tags: "south africa pretoria cape route commonwealth apartheid" },
  { title: "Rhodesia", description: "Settler state and inland security corridor of the Cape system", href: "rhodesia.html", tags: "rhodesia salisbury cape commonwealth settler state" },
  { title: "Hashemite Kingdom of Jordan", description: "Expanded monarchy after the Amman Settlement", href: "jordan.html", tags: "jordan amman jerusalem hashemite commonwealth palestine" },
  { title: "Imperial State of Iran", description: "Independent armed-neutral host of the Tehran Concord", href: "iran.html", tags: "iran tehran persia neutral independent concord" },
  { title: "Kingdom of Afghanistan", description: "Independent frontier kingdom balancing every surrounding system", href: "afghanistan.html", tags: "afghanistan kabul neutral independent frontier" },
  { title: "Kingdom of Nepal", description: "Neutral Himalayan monarchy and principal meeting ground for Indian diplomacy", href: "nepal.html", tags: "nepal kathmandu himalayan neutral monarchy conferences congress azad hind" },
  { title: "Kingdom of Bhutan", description: "Sovereign Himalayan monarchy aligned economically toward Azad Hind", href: "bhutan.html", tags: "bhutan thimphu himalayan monarchy azad hind calcutta japan guarantee" },
  { title: "Kingdom of Sikkim", description: "Surviving sovereign Himalayan monarchy centered on Gangtok", href: "sikkim.html", tags: "sikkim gangtok chogyal himalayan monarchy azad hind calcutta royal flag" },
  { title: "Afghan-Protected Frontier", description: "Peshawar–Waziristan protected polities under Kabul’s external security system", href: "afghan-protected-frontier.html", tags: "afghan protected frontier peshawar waziristan khyber kabul attock corridor tribal principalities" },
  { title: "Republic of Kazakhstan", description: "Militarized successor republic and Central Asian buffer", href: "kazakhstan.html", tags: "kazakhstan akmolinsk central asia russian refugees neutral" },
  { title: "United Mexican States", description: "Independent hemispheric balancer under American pressure", href: "mexico.html", tags: "mexico mexico city oil neutral independent american hemisphere" },
  { title: "Federative Republic of Brazil", description: "Sovereign Latin-leaning continental power", href: "brazil.html", tags: "brazil brasilia portugal latin bloc argentina" },
  { title: "Republic of Chile", description: "Military-national multi-bloc balancer", href: "chile.html", tags: "chile santiago neutral independent copper germany latin america" },
  { title: "Republic of Peru", description: "Sovereign GEACPS-associated Pacific partner", href: "peru.html", tags: "peru lima japan geacps pacific american hemisphere" },
  { title: "Republic of Venezuela", description: "Oil state aligned after American intervention", href: "venezuela.html", tags: "venezuela caracas oil american intervention hemisphere" },
  { title: "Republic of Colombia", description: "American-associated security state with two-ocean access", href: "colombia.html", tags: "colombia bogota american hemisphere security" },
  { title: "Republic of Cuba", description: "Neutral fortress state contained by Washington", href: "cuba.html", tags: "cuba havana fortress porcupine neutral fa-60" },
  { title: "Republic of Honduras", description: "Near-puppet state after the 1962 American intervention", href: "honduras.html", tags: "honduras tegucigalpa american client intervention 1962" },
  { title: "American Hemisphere", description: "Country-by-country alignment chart for 1985", href: "american-hemisphere.html", tags: "american hemisphere alignment chart countries blocs canada peru argentina neutral" },
  { title: "Reagan Era and the World Market Boom", description: "Open markets, Halifax, and the boom of 1985–1989", href: "reagan-era.html", tags: "reagan world market boom open markets halifax 1985 1989" },
  { title: "Open Door Depression", description: "The 1990 Great Sell-Off and American reconstruction", href: "open-door-depression.html", tags: "open door depression second great depression sell-off ownership 1990 recovery" },
  { title: "Five-Party Republic", description: "The Renewal schism and corporate-patronage order after 1992", href: "five-party-republic.html", tags: "five party republic harwood landry bell kincaid crane cade corporate patronage 1992" },
  { title: "Frontier Orbital Lines", description: "America's first durable private orbital carrier", href: "frontier-orbital-lines.html", tags: "frontier orbital lines voss courier caravan wayfarer columbia spaceplane commercial space" },
  { title: "United Mongolian State", description: "Buddhist banner monarchy under Japanese protection", href: "united-mongolian-state.html", tags: "united mongolian state mongolia mengjiang demchugdongrub khuree hohhot geacps" },
  { title: "Burmese Wars and Settlements", description: "Companion War, federal crises, sovereign states, and Thai protectorate", href: "burmese-wars.html", tags: "burmese companion war rangoon settlement federal crisis sovereign states thailand protectorate" },
  { title: "Malay–Bornean War", description: "The 1973–1979 dissolution of Bornean Malaya", href: "malay-bornean-war.html", tags: "malay bornean war malaya borneo brunei singapore thailand 1974" },
  { title: "Preservation Movements in Imperial Japan", description: "Regional language and identity politics from the 1970s", href: "japanese-preservationism.html", tags: "preservation movement japan taiwan formosa korea chosen language heritage" },
  { title: "Columbia Generation", description: "The post-Boomer American cohort of family order and mission", href: "columbia-generation.html", tags: "columbia generation family women work cottage industry post boomer" },
  { title: "The Last Republic", description: "The 1975 political horror film and assassination panic", href: "last-republic.html", tags: "last republic film cinema rockwell assassination panic 1975" },
  { title: "Taiwan", description: "Integral Japanese region, mass settlement, and preservation politics", href: "taiwan.html", tags: "taiwan formosa taihoku japan proper hokkien hakka preservation" },
  { title: "Federated Kingdom of Malaya", description: "Restored peninsular monarchy under Thai protection", href: "malaya.html", tags: "malaya malaysia federated kingdom thailand protectorate kuala lumpur geacps" },
  { title: "Bornean State", description: "Independent successor to the failed Bornean Malaya union", href: "bornean-state.html", tags: "borneo bornean state malay war kalimantan geacps" },
  { title: "Brunei", description: "Specially guaranteed Bornean oil sultanate", href: "brunei.html", tags: "brunei sultanate oil borneo geacps" },
  { title: "Singapore", description: "Separate city-state and commercial clearing center of GEACPS", href: "singapore.html", tags: "singapore city state finance clearing shipping geacps" },
  { title: "Azad Hind", description: "Militarized eastern Indian claimant and Japanese strategic associate", href: "azad-hind.html", tags: "azad hind free india ina calcutta delhi japan india" },
  { title: "Hyderabad", description: "Sovereign princely state and Japan's western Indian gateway", href: "hyderabad.html", tags: "hyderabad nizam princely state japan association tps india" },
  { title: "1991 Chittagong Cyclone", description: "Azad Hind's disaster and withheld-relief scandal", href: "chittagong-cyclone.html", tags: "chittagong cyclone 1991 azad hind disaster congress relief" },
  { title: "Gabriel E. Landry", description: "Louisiana governor and leader of Constitutional Renewal", href: "gabriel-landry.html", tags: "gabriel landry louisiana governor constitutional renewal phillips 1984" },
  { title: "Nathaniel Reed Bell", description: "Aerospace administrator and Renewal presidential nominee", href: "nathaniel-bell.html", tags: "nathaniel reed bell colorado aerospace mission technocrat 1988 1992" },
  { title: "Miriam Kincaid", description: "Christian-social agrarian and co-founder of American Producers", href: "miriam-kincaid.html", tags: "miriam kincaid nebraska agrarian christian social american producers" },
  { title: "Wesley Crane", description: "Montana producer-federalist and anti-patronage politician", href: "wesley-crane.html", tags: "wesley crane montana producer federalism american producers antitrust" },
  { title: "Everett Cade", description: "Founders' Guard organizer and National Vanguard leader", href: "everett-cade.html", tags: "everett cade virginia founders guard national vanguard rockwell old guard" },
  { title: "Thomas Harwood", description: "Fortieth president and Productive Commonwealth leader", href: "thomas-harwood.html", tags: "thomas harwood president national renewal productive commonwealth 1992 1993" },
  { title: "Andrew Prescott Hale", description: "Democratic-Republican presidential nominee in the final direct two-party election", href: "andrew-prescott-hale.html", tags: "andrew prescott hale democratic republican 1992 presidential nominee constitutional markets" },
  { title: "Caleb Harlan", description: "Democratic-Republican vice-presidential nominee and public campaigner in 1992", href: "caleb-harlan.html", tags: "caleb harlan democratic republican 1992 vice presidential nominee household recovery" },
  { title: "1992 National Renewal Convention", description: "Harwood's lawful but contested nomination and the final unified Renewal convention", href: "1992-national-renewal-convention.html", tags: "1992 national renewal convention harwood bell landry nomination productive commonwealth" },
  { title: "1992 United States Presidential Election", description: "Harwood–Bell, Hale–Harlan, and the last direct victory of the two-party era", href: "1992-united-states-presidential-election.html", tags: "1992 united states presidential election harwood bell hale harlan electoral 286 252" },
  { title: "1993 National Renewal Schism", description: "The caucus rupture that created the five-party republic", href: "1993-national-renewal-schism.html", tags: "1993 schism 1993 national renewal schism caucus purge constitutional renewal american producers national vanguard" },
  { title: "Konrad Elias Voss", description: "Founder of Frontier Orbital Lines", href: "konrad-voss.html", tags: "konrad elias voss frontier orbital lines aerospace industrialist spaceplane" },
  { title: "White Parachutes", description: "The improvised final London sortie and the political collapse of wartime Britain", href: "white-parachutes.html", tags: "white parachutes bread raid london second battle britain 1947 improvised sortie" },
  { title: "British Defeat and Reconstruction, 1943–1951", description: "From the Algiers Capitulation through the Brick Parliament settlement", href: "british-defeat-reconstruction.html", tags: "british defeat reconstruction algiers lisbon brick parliament bevan 1943 1951" },
  { title: "The Friedensbrot Myth", description: "How Berlin converted a local payload substitution into an official legend", href: "friedensbrot-myth.html", tags: "friedensbrot myth propaganda goebbels goring white parachutes bread raid" },
  { title: "Loans to a Drowning Man", description: "The American aid debate and termination of British support in early 1947", href: "loans-to-a-drowning-man.html", tags: "loans drowning man american aid britain 1947 food fuel shipping dewey" },
  { title: "Westminster Crisis of 1947", description: "The crowd movement, coalition collapse, and royal constitutional decision", href: "westminster-crisis-1947.html", tags: "westminster crisis 1947 george vi churchill crowds parliament white parachutes" },
  { title: "White Parachute Election", description: "The fragmented 1947 general election that created the Brick Parliament", href: "white-parachute-election.html", tags: "white parachute election bread election new men 1947 bevan labour conservative uc common wealth" },
  { title: "Reconstruction Ministry", description: "Aneurin Bevan's minority government of 1947–1951", href: "reconstruction-ministry.html", tags: "reconstruction ministry bevan minority government 1947 1951 brick parliament" },
  { title: "Reconstruction Truce", description: "The November Understanding that sustained Britain's minority government", href: "reconstruction-truce.html", tags: "reconstruction truce november understanding minority parliament supply 1947" },
  { title: "Release and Resettlement Scheme", description: "British demobilization, training, placement, and veteran resettlement", href: "release-and-resettlement-scheme.html", tags: "release resettlement scheme veterans demobilization housing employment britain" },
  { title: "National Reconstruction Corps", description: "The civilian Brick Corps at the center of postwar rebuilding", href: "national-reconstruction-corps.html", tags: "national reconstruction corps brick corps public works 1947 1949" },
  { title: "Merchant Fleet Renewal Act 1948", description: "Public finance and private operation for Britain's commercial lifeline", href: "merchant-fleet-renewal-act.html", tags: "merchant fleet renewal act 1948 ships are bread shipping britain" },
  { title: "Commonwealth Standard Ship Programme", description: "Standardized postwar merchant designs built across the Commonwealth", href: "commonwealth-standard-ship-programme.html", tags: "commonwealth standard ship programme cargo tanker shipyard merchant fleet" },
  { title: "Strategic Industries and Arsenal Continuity Act 1949", description: "The statutory floor beneath Britain's surviving defense-industrial base", href: "strategic-industries-arsenal-continuity-act.html", tags: "strategic industries arsenal continuity act 1949 yards aircraft signals defense" },
  { title: "National Health and Family Security Act 1950", description: "Britain's plural universal health and family-security settlement", href: "national-health-family-security-act.html", tags: "national health family security act 1950 britain bevan hospitals doctors" },
  { title: "Royal Civil Works Service", description: "The permanent public-works successor to the Brick Corps", href: "royal-civil-works-service.html", tags: "royal civil works service brick corps disaster engineering commonwealth" },
  { title: "Algiers Capitulation", description: "The surrender of Britain's isolated North African expedition", href: "algiers-capitulation.html", tags: "algiers capitulation african dunkirk torch alexander surrender britain" },
  { title: "White Parachute Election and Brick Parliament", description: "Britain's fragmented reconstruction legislature of 1947–1951", href: "brick-parliament.html", tags: "white parachute election brick parliament parliament strangers bevan reconstruction brick corps" },
  { title: "South Manchuria Railway Company", description: "Mantetsu and the northern continental development system", href: "mantetsu.html", tags: "mantetsu south manchuria railway rail geacps japan manchukuo continental gauge" },
  { title: "Amur Crisis", description: "The near-war that institutionalized the northern GEACPS frontier", href: "amur-crisis.html", tags: "amur crisis manchukuo russian far east vladivostok japan border settlement" },
  { title: "Kazakh–Russian War", description: "The 1954–1963 mass-population war and steppe partition", href: "kazakh-russian-war.html", tags: "kazakh russian war kazakhstan siberia steppe state partition refugees 1954 1963" },
  { title: "Siberian Wars", description: "The long system of limited successor conflicts from the Railway Wars to armed normalization", href: "siberian-wars.html", tags: "siberian wars railway wars russian successor conflicts armed normalization" },
  { title: "Omsk–Novosibirsk Dual State", description: "The divided military-industrial union governing western Siberia", href: "omsk-novosibirsk-state.html", tags: "omsk novosibirsk dual state western siberia military industrial union" },
  { title: "Western Siberian War", description: "The conflict that forced Omsk and Novosibirsk into a dual-state compromise", href: "western-siberian-war.html", tags: "western siberian war omsk novosibirsk 1949 1954 unification" },
  { title: "Yenisei Conflicts", description: "The intermittent rail and river wars between western Siberia and Krasnoyarsk", href: "yenisei-conflicts.html", tags: "yenisei conflicts krasnoyarsk omsk novosibirsk rail river 1957 1968" },
  { title: "Irkutsk State", description: "The Soviet-restorationist successor and permanent threat to Far Eastern Russia", href: "irkutsk-state.html", tags: "irkutsk state soviet restorationist baikal far eastern russia" },
  { title: "Baikal Frontier Conflict", description: "The prolonged Irkutsk-Far Eastern confrontation below the Japanese intervention threshold", href: "baikal-frontier-conflict.html", tags: "baikal frontier conflict irkutsk far eastern state japan raids sabotage" },
  { title: "Russian Steppe State", description: "The Russian successor created in northern Kazakhstan by the 1963 exhaustion partition", href: "russian-steppe-state.html", tags: "russian steppe state north kazakhstan successor partition refugees" },
  { title: "Ural Industrial States", description: "The factory-defense successor belt along the eastern Ural frontier", href: "ural-industrial-states.html", tags: "ural industrial states sverdlovsk chelyabinsk magnitogorsk kurgan tobol" },
  { title: "Siberian Black Market", description: "The unofficial trade and intelligence system sustaining the successor states", href: "siberian-black-market.html", tags: "siberian black market smuggling rail intelligence trade parts refugees" },
  { title: "AK-47 in Siberia", description: "The Novosibirsk rifle lineage and its spread through the successor wars", href: "ak-47-siberia.html", tags: "ak 47 siberia kalashnikov novosibirsk rifle weapons successor states" },
  { title: "Krasnoyarsk State", description: "The central Siberian command governing the Yenisei railway and river corridor", href: "krasnoyarsk-state.html", tags: "krasnoyarsk state yenisei siberia command railway river successor" },
  { title: "Tannu Tuva", description: "The independent Tuvan frontier state excluded from the Japanese-recognized Mongolian sphere", href: "tannu-tuva.html", tags: "tannu tuva tuvan kyzyl mongolia neutral tehran people republic" },
  { title: "Tsar Mikhail", description: "The Australian-exile Romanov elected sovereign of the Russian Far Eastern State", href: "tsar-mikhail.html", tags: "tsar mikhail michael andreevich romanov far eastern state chita sovereign" },
  { title: "Mikhail Kalashnikov", description: "The Altai-born Novosibirsk designer behind Siberia's AK-47 family", href: "mikhail-kalashnikov.html", tags: "mikhail timofeyevich kalashnikov ak 47 designer novosibirsk altai biography" },
  { title: "Council of the Three Indochinese States", description: "Vietnamese, Cambodian, and Lao technical and diplomatic council", href: "council-three-indochinese-states.html", tags: "council three indochinese states vietnam cambodia laos mekong geacps" },
  { title: "Papua New Guinea", description: "Unified Papuan associated state and home of the Biak space district", href: "papua-new-guinea.html", tags: "papua new guinea biak pacific geacps japan associated state" },
  { title: "Greater East Asia Co-Prosperity Sphere", description: "The Japanese-led hierarchy of territories, associates, clients, and partners", href: "geacps.html", tags: "geacps dai toa kyoeiken japan asia pacific sphere international order" },
  { title: "Greater East Asia Co-Prosperity Economic System", description: "Japan's bank-centered and corporate imperial developmental order", href: "japanese-imperial-economic-system.html", tags: "japan imperial economic system daitoa kyoei keizai taisei zaibatsu developmentalism geacps" },
  { title: "Imperial Financial Rectification", description: "The 1948 New Yen Settlement that stabilized victory finance", href: "imperial-financial-rectification.html", tags: "imperial financial rectification teikoku kinyu seiri new yen settlement 1948 japan" },
  { title: "First Greater East Asia Reconstruction Plan", description: "The 1949–1953 program restoring shipping, power, industry, and housing", href: "first-greater-east-asia-reconstruction-plan.html", tags: "first greater east asia reconstruction plan shigemitsu kishi 1949 1953 japan" },
  { title: "Greater East Asia Economic Board", description: "The planning authority coordinating the Japanese imperial economy", href: "greater-east-asia-economic-board.html", tags: "daitoa keizai-in economic board planning development bank geacps" },
  { title: "Imperial Development Bank", description: "Long-term lender for Japanese imperial infrastructure and strategic industry", href: "imperial-development-bank.html", tags: "imperial development bank teikoku kaihatsu ginko finance ports power rail nuclear japan" },
  { title: "Imperial Corporate Houses of Japan", description: "Zaibatsu federations of banking, trade, shipping, industry, and research", href: "japanese-imperial-corporate-houses.html", tags: "japanese imperial corporate houses zaibatsu mitsubishi mitsui sumitomo yasuda nissan" },
  { title: "Sōgō Shōsha", description: "General trading companies as the commercial nervous system of the Sphere", href: "sogo-shosha.html", tags: "sogo shosha general trading companies japan shipping insurance contracts intelligence" },
  { title: "National-Policy Corporations of Japan", description: "Chartered development companies joining guarantees to private management", href: "japanese-national-policy-corporations.html", tags: "national policy corporations kokusaku kaisha charter concession guarantee japan geacps" },
  { title: "Japanese Imperial Yen Area", description: "Domestic yen, associated currencies, Clearing Yen, and Gold Yen", href: "japanese-yen-area.html", tags: "yen area clearing yen gold yen finance currency geacps" },
  { title: "Greater East Asia Clearing Yen", description: "The noncash imperial accounting unit redeemed through approved Japanese output", href: "greater-east-asia-clearing-yen.html", tags: "greater east asia clearing yen daitoa seisan en noncash accounting currency geacps" },
  { title: "Imperial Food Agency", description: "Japanese grain procurement, reserve, subsistence, and disaster-relief authority", href: "imperial-food-agency.html", tags: "imperial food agency japan rice grain reserves famine minimum subsistence relief" },
  { title: "Protected National Enterprises in Japan", description: "Strategic firms preserved through refinancing, guarantees, and reconstruction", href: "protected-national-enterprises-japan.html", tags: "protected national enterprises japan zombie companies soft budget bank forbearance restructuring" },
  { title: "Greater East Asia Prosperity Plan", description: "Ikeda's 1960–1965 sphere-wide development program", href: "greater-east-asia-prosperity-plan.html", tags: "ikeda prosperity plan 1960 1965 development geacps" },
  { title: "National Home and Return Mandate", description: "Preservation, return, and cultural continuity within the Japanese order", href: "home-return-mandate.html", tags: "home return mandate preservation japan diaspora citizenship culture" },
  { title: "UNICODE 80", description: "The ICDSC multilingual character standard adopted in 1980", href: "unicode-80.html", tags: "unicode 80 icdsc computing character standard multilingual kyoto geneva" },
  { title: "Biak Space and Air District", description: "Japan's equatorial launch and tracking complex in Papua New Guinea", href: "biak-space-center.html", tags: "biak space center air district papua new guinea japan horai launch" },
  { title: "Japanese Pacific Territories", description: "Integral and directly governed Japanese islands across the Pacific", href: "japanese-pacific-territories.html", tags: "japanese pacific territories micronesia melanesia polynesia islands geacps" },
  { title: "Japanese Settlement of Taiwan", description: "The 1947–1970 migration and demographic transformation of integral Taiwan", href: "japanese-settlement-of-taiwan.html", tags: "japanese settlement taiwan formosa migration ryukyuan veterans demography" },
  { title: "Languages of Taiwan", description: "Japanese dominance and Formosan community, heritage, revival, and mixed varieties", href: "languages-of-taiwan.html", tags: "languages taiwan formosa hokkien hakka indigenous heritage revival japanese" },
  { title: "Taiwan Preservation Movement", description: "The rise, high period, institutions, and decline of Formosan preservationism", href: "taiwan-preservation-movement.html", tags: "taiwan preservation movement formosa language archives culture 1977 1985" },
  { title: "Semiconductor Industry in Japan", description: "Tokyo command, Kansai equipment, Kyushu fabrication, and Formosan participation", href: "japanese-semiconductor-industry.html", tags: "japan semiconductor industry chips tokyo yokohama kansai kyushu formosa electronics" },
  { title: "Imperial Limited-War Directive", description: "Japan's December 1941 decision to strike south while excluding the United States", href: "imperial-limited-war-directive.html", tags: "imperial limited war directive japan 1941 konoe hirohito yamamoto southern war" },
  { title: "Xinjiang", description: "Sovereign Uyghur-dominated western frontier state under Japanese strategic protection", href: "xinjiang.html", tags: "xinjiang uyghur urumqi islam geacps japan treaty bases central asia outer wall" },
  { title: "Tibet", description: "Independent religious-aristocratic Himalayan state and Japanese-associated buffer", href: "tibet.html", tags: "tibet lhasa dalai lama kashag snow lion geacps japan himalaya independent" },
  { title: "Japanese Frontier Treaty Bases", description: "Bilateral security architecture across the outer Co-Prosperity Sphere", href: "japanese-frontier-bases.html", tags: "japanese frontier treaty bases xinjiang tibet burma indonesia security reserve suzerainty" },
  { title: "1950 Assam–Tibet Earthquake", description: "Himalayan earthquake and crisis during Azad Hind's consolidation of Assam", href: "assam-tibet-earthquake.html", tags: "1950 assam tibet earthquake brahmaputra landslide azad hind disaster" },
  { title: "Operation Torch (British campaign)", description: "The Algerian expedition, Axis containment, and Algiers Capitulation", href: "british-operation-torch.html", tags: "operation torch british algeria algiers capitulation african dunkirk alexander" },
  { title: "Second Battle of Britain", description: "The 1945–1947 systems campaign that exhausted British resistance", href: "second-battle-of-britain.html", tags: "second battle britain raf luftwaffe arado jets radar cipher 1945 1947" },
  { title: "Lisbon Conference", description: "The restrained 1947 victor's peace ending the Second World War", href: "lisbon-conference.html", tags: "lisbon conference peace settlement 1947 portugal salazar britain germany italy japan" },
  { title: "Operation Homeward", description: "The Homecoming Fleet and mass British prisoner repatriation of 1947", href: "operation-homeward.html", tags: "operation homeward homecoming fleet prisoners pow repatriation 1947 britain" },
  { title: "Breaking of the Raj", description: "The 1948–49 collapse of British India into multiple successor states", href: "breaking-of-the-raj.html", tags: "breaking raj india collapse 1948 1949 bengal punjab succession civil war" },
  { title: "Operation Tideway", description: "The British evacuation of Calcutta and the Bengal command", href: "operation-tideway.html", tags: "operation tideway calcutta flight white departure bengal evacuation burma" },
  { title: "Colombo Armistice System", description: "The plural ceasefire order that froze the broad Indian wars", href: "colombo-armistice-system.html", tags: "colombo armistice system india ceylon ceasefire treaty 1958 1961" },
  { title: "Northern Indian War", description: "The 1963–65 Azad Hind–Congress India conflict", href: "northern-indian-war.html", tags: "northern indian war preparatory war azad hind congress patna chemical type 16 vijaya" },
  { title: "1970 Patna Offensive", description: "Congress India's disaster-time attack during the Bhola cyclone", href: "patna-offensive-1970.html", tags: "patna offensive 1970 bhola cyclone congress india azad hind bihar japan" },
  { title: "Western Indian Wars", description: "The interlocking northwestern successor wars of 1957–1985", href: "western-indian-wars.html", tags: "western indian wars afghanistan khalistan kashmir sindh kalat balochistan rajputana" },
  { title: "Third Balochistan War", description: "Kalat's 1981–84 destruction and absorption of the Baloch Confederated State", href: "third-balochistan-war.html", tags: "third balochistan war kalat iran baloch confederated state 1981 1984" },
  { title: "Indian Bullion Economy", description: "The gold-denominated multicurrency order that replaced the national rupee", href: "indian-bullion-economy.html", tags: "india bullion gold rupee currency hyderabad karachi bombay certificates banking" },
  { title: "Gold Dollar Restoration", description: "America's staged 1949–51 return to dollar convertibility", href: "american-gold-dollar.html", tags: "american gold dollar restoration dewey 1949 1951 convertibility fort knox" },
  { title: "Latin Scudo", description: "The Latin Bloc's circulating gold-backed common currency", href: "latin-scudo.html", tags: "latin scudo currency gold monetary institute italy spain portugal occitania" },
  { title: "Sterling Resumption", description: "Britain's staged restoration of gold sterling and London bridge finance", href: "gold-sterling.html", tags: "gold sterling pound resumption britain commonwealth london convertibility thatcher" },
  { title: "Gold Yen", description: "Japan's external gold-denominated settlement currency", href: "gold-yen.html", tags: "gold yen indian gold settlement yen japan hyderabad currency bullion" },
  { title: "Goldmark", description: "Germany's 1990s external gold-denominated trade currency", href: "goldmark.html", tags: "goldmark gold mark germany external currency settlement 1990s" },
  { title: "International Bullion-Clearing System", description: "The gold-weight settlement layer connecting the five economic blocs", href: "international-bullion-clearing-system.html", tags: "international bullion clearing system gold currencies settlement trade banks" },
  { title: "South Seas General Government", description: "Japan's four-region civil administration for its directly ruled Pacific islands", href: "south-seas-general-government.html", tags: "south seas general government japan pacific colonial administration islands" },
  { title: "Micronesian Administration", description: "Koror's administration of the former South Seas Mandate territories", href: "micronesian-administration.html", tags: "micronesian administration koror palau truk saipan marianas carolines marshalls guam" },
  { title: "Central Pacific Administration", description: "Tarawa, Nauru, the Gilbert and Ellice groups, and central atolls", href: "central-pacific-administration.html", tags: "central pacific administration tarawa nauru gilbert ellice phosphate line phoenix" },
  { title: "Melanesian Administration", description: "Rabaul's direct-rule system north of Australia and beside Papua New Guinea", href: "melanesian-administration.html", tags: "melanesian administration rabaul bismarcks bougainville solomons santa cruz new hebrides" },
  { title: "Southern and Eastern Pacific Administration", description: "The Suva–Nouméa–Papeete administration of Japan's outer Pacific", href: "southern-eastern-pacific-administration.html", tags: "southern eastern pacific administration suva noumea papeete fiji caledonia tahiti" },
  { title: "Fiji under Japanese Rule", description: "Suva, sugar, plural local institutions, and denied Fijian statehood", href: "fiji-under-japanese-rule.html", tags: "fiji japan suva sugar indo fijian chiefly colonial pacific" },
  { title: "New Caledonia under Japanese Rule", description: "Nouméa, nickel, Kanak land, and the southern naval-industrial district", href: "new-caledonia-under-japanese-rule.html", tags: "new caledonia noumea nickel kanak japan independence colonial" },
  { title: "Tahiti under Japanese Rule", description: "Papeete and Japan's eastern aviation, communications, and South American relay", href: "tahiti-under-japanese-rule.html", tags: "tahiti papeete french polynesia japan peru route tourism space tracking" },
  { title: "Pacific Frontier Islands", description: "American, Commonwealth, Chilean, and Portuguese enclaves among Japanese routes", href: "pacific-frontier-islands.html", tags: "pacific frontier islands guam samoa tonga pitcairn easter timor line phoenix" },
  { title: "Congress India", description: "Secular constitutional claimant in the middle Ganges system", href: "congress-india.html", tags: "congress india republic union nehru lucknow allahabad vijaya ganges" },
  { title: "Hindustan", description: "Delhi-centered Hindu-majoritarian Indian successor state", href: "hindustan.html", tags: "hindustan delhi india hindu majoritarian morozov rajputana" },
  { title: "Khalistan", description: "Sikh-led military state centered on Lahore and western Punjab", href: "khalistan.html", tags: "khalistan khalsa sikh lahore punjab multan harappa kashmir" },
  { title: "Kashmir", description: "Sovereign mountain state in Afghanistan's security orbit", href: "kashmir.html", tags: "kashmir kotli afghanistan khalistan mountain state" },
  { title: "Sindh", description: "Karachi-centered commercial balancer of western India", href: "sindh.html", tags: "sindh karachi indus shipping finance insurance bullion" },
  { title: "Kalat", description: "Baloch khanate and victor of the Third Balochistan War", href: "kalat.html", tags: "kalat khanate balochistan las bela gwadar makran kharan chagai" },
  { title: "Baloch Confederated State", description: "Former Iranian-backed confederation absorbed by Kalat in 1984", href: "baloch-confederated-state.html", tags: "baloch confederated state balochistan iran gwadar makran kharan chagai former" },
  { title: "Rajputana", description: "Concert of sovereign princely courts in western India", href: "rajputana.html", tags: "rajputana princes concert league jaipur hindustan india" },
  { title: "Madras State", description: "Tamil-majority British-protected state and southern compact member", href: "madras-state.html", tags: "madras tamil dravidian justice party british protection bastion india" },
  { title: "Kingdom of Mysore", description: "Kannada constitutional monarchy in the southern compact", href: "mysore.html", tags: "mysore bangalore kannada monarchy british protection bastion india" },
  { title: "Travancore–Cochin", description: "Protected southwestern union and site of the Cochin naval lease", href: "travancore-cochin.html", tags: "travancore cochin kerala union british protection naval station" },
  { title: "Maratha States Union", description: "Western Deccan confederacy and partner in the Bombay joint port", href: "maratha-states-union.html", tags: "maratha states union bombay kolhapur pune satara sangli british" },
  { title: "Telangana Praja Samakhya", description: "Agrarian communist federation and survivor of the anti-TPS campaign", href: "telangana-praja-samakhya.html", tags: "telangana praja samakhya tps peoples federation communist peasant armed struggle bastar" },
  { title: "Pakistan Emergency Government", description: "Quetta-centered Muslim national claimant and frontier military state", href: "pakistan-emergency-government.html", tags: "pakistan emergency government sibi quetta pishin loralai zhob muslim league" },
  { title: "British Indian Ocean Command", description: "Colombo headquarters of Bastion India and the BIEC", href: "british-indian-ocean-command.html", tags: "british indian ocean command biec bastion india colombo trincomalee ceylon bases" },
  { title: "Bombay Joint Port Authority", description: "Commonwealth–Maratha leased defense port and dockyard", href: "bombay-joint-port.html", tags: "bombay joint port authority defense area maratha british lease dockyard" },
  { title: "Anti-TPS Campaign", description: "Japanese–Hyderabadi–princely operations against TPS, 1986–1990", href: "anti-tps-campaign.html", tags: "anti tps campaign telangana hyderabad japan zaibatsu princely 1986 1990" },
  { title: "Chartered Restoration Territories", description: "Corporate reconstruction governments in recovered Indian territories", href: "chartered-restoration-territories.html", tags: "chartered restoration territories india japan zaibatsu corporate government tps" },
  { title: "Culture of the United States", description: "Mission modernism from the Spectator War to the Conspiracy Republic", href: "culture-of-the-united-states.html", tags: "american culture mission modernism media social history united states" },
  { title: "Spectator War", description: "American wartime culture without belligerency or mass mobilization, 1941–1947", href: "spectator-war.html", tags: "spectator war america neutrality radio newsreels second world war culture" },
  { title: "Rocket Awakening", description: "The American scientific and cultural response to the 1957 German satellite", href: "rocket-awakening.html", tags: "rocket awakening america science education kennedy satellite space mission 1957" },
  { title: "Conspiracy Republic", description: "American political anxiety, institutional horror, and assassination culture in the 1970s", href: "conspiracy-republic.html", tags: "conspiracy republic america 1970s last republic rockwell assassination political horror" },
  { title: "American Popular Music", description: "Country, rock and roll, rhythm and blues, and parallel music markets", href: "american-popular-music.html", tags: "american music rock roll country rhythm blues motown holly valens bopper elvis" },
  { title: "Buddy Holly", description: "Singer-songwriter, producer, and living elder of American rock", href: "buddy-holly.html", tags: "buddy holly charles hardin holley crickets singer songwriter producer" },
  { title: "Ritchie Valens", description: "Bilingual rock pioneer and durable Mexican-American star", href: "ritchie-valens.html", tags: "ritchie valens richard valenzuela la bamba mexican american rock bilingual" },
  { title: "The Big Bopper", description: "J. P. Richardson, disc jockey, performer, producer, and television impresario", href: "big-bopper.html", tags: "big bopper j p richardson chantilly lace radio disc jockey producer" },
  { title: "Motown Cultural System", description: "Detroit's Black-owned record, film, television, touring, and publishing network", href: "motown-cultural-system.html", tags: "motown berry gordy detroit black owned media records film television" },
  { title: "Black American Public Sphere", description: "Parallel and permeable Black institutions in media, religion, education, and business", href: "black-american-public-sphere.html", tags: "black american public sphere radio press churches colleges clubs civil rights" },
  { title: "American Cottage-Industry Revival", description: "Household enterprise enabled by telephones, parcels, local credit, and personal computers", href: "american-cottage-industry-revival.html", tags: "america cottage industry home enterprise women work personal computer household business" },
  { title: "United States Aerospace Force", description: "The strategic-air and orbital service commanding America's military and scientific space program", href: "united-states-aerospace-force.html", tags: "united states aerospace force usaf strategic air space service columbia zenith" },
  { title: "Hemispheric Renewal Act", description: "Kennedy's 1961 program of aerospace, education, civil rights, and interventionist renewal", href: "hemispheric-renewal-act.html", tags: "hemispheric renewal act kennedy 1961 civil rights aerospace monroe doctrine" },
  { title: "Honduran Security Crisis", description: "The 1962 American intervention that created a durable Central American client", href: "honduran-security-crisis.html", tags: "honduras security crisis 1962 america intervention client puppet kennedy" },
  { title: "Venezuelan Intervention", description: "The 1966 American intervention over oil, communications, and foreign strategic penetration", href: "venezuelan-intervention.html", tags: "venezuela intervention 1966 america oil caracas settlement kennedy" },
  { title: "Maracaibo Shock", description: "The destruction of three premier American aircraft by integrated Venezuelan air defenses", href: "maracaibo-shock.html", tags: "maracaibo shock b58 air defense radar missiles venezuela 1966 aerospace" },
  { title: "Establishment Compact", description: "The congressional bargain that selected Rockefeller over Rockwell in 1968", href: "establishment-compact.html", tags: "establishment compact 1968 contingent election rockefeller rockwell stolen mandate house" },
  { title: "National Mission and Productive Enterprise Act", description: "Buchanan's 1977 orbital, industrial, computing, and technical-education program", href: "national-mission-productive-enterprise-act.html", tags: "national mission productive enterprise act 1977 buchanan industry columbia computing" },
  { title: "Project Zenith", description: "The classified American military spaceplane and orbital-security program", href: "project-zenith.html", tags: "project zenith osv1 military spaceplane orbital security aerospace force 1977" },
  { title: "Rockwell Commission", description: "The bipartisan inquiry that discredited the official assassination conviction", href: "rockwell-commission.html", tags: "rockwell commission assassination wrongful conviction executed suspect 1978" },
  { title: "National Unity and Constitutional Defense Amendment", description: "The failed 1981 Rockwellian proposal for registered parties and occupational representation", href: "national-unity-amendment.html", tags: "national unity constitutional defense amendment 1981 buchanan rockwell corporatism" },
  { title: "American Productive Commonwealth Act", description: "The 1982 competence-and-audit reform of National Renewal industrial credit", href: "american-productive-commonwealth-act.html", tags: "american productive commonwealth act 1982 productivity recession industry training audit" },
  { title: "Narrative Shaping Memorandum", description: "The 1983 leak that turned National Renewal communications language into a propaganda scandal", href: "narrative-shaping-memorandum.html", tags: "narrative shaping memorandum 1983 leak propaganda reagan phillips public confidence" },
  { title: "Programming Languages", description: "Five postwar software cultures and their principal language lineages", href: "programming-languages.html", tags: "programming languages software five computing cultures rechenplan autocode lambda keisan lia" },
  { title: "Rechenplan", description: "Germany's certified scientific, administrative, and control programming family", href: "rechenplan.html", tags: "rechenplan german programming rp-w rp-v rp-s plankalkul certified" },
  { title: "Planform", description: "Germany's typed intermediate representation for portable certified programs", href: "planform.html", tags: "planform intermediate representation german compiler zivil planform portability" },
  { title: "Planwerk", description: "The German operating-system family for certified batch, files, networks, and audit", href: "planwerk.html", tags: "planwerk german operating system planlauf programmbuch audit network" },
  { title: "Kurzplan", description: "Germany's interpreted home and school programming language", href: "kurzplan.html", tags: "kurzplan 77 german home computer school language graphics sound" },
  { title: "German Civilian Programming Languages", description: "The seven-language ecology opened by the 1982 civilian software directive", href: "german-civilian-languages.html", tags: "german civilian languages werkcode lehrplan folge schluss klasse bildschrift nachricht" },
  { title: "Plan Austral", description: "Argentina's Spanish-language programming system over the German civilian stack", href: "plan-austral.html", tags: "plan austral argentina spanish programming language lehrplan kurzplan" },
  { title: "Software Portability", description: "The five levels of cross-machine and cross-bloc program compatibility", href: "software-portability.html", tags: "software portability compatibility source binary intermediate bridge planform unicode" },
  { title: "Commonwealth Programming Languages", description: "Britain's information-service tradition from machine orders to ML and occam", href: "commonwealth-programming-languages.html", tags: "british commonwealth programming languages autocode cleo cpl bcpl ml occam" },
  { title: "Autocode", description: "The British and Commonwealth early high-level language family", href: "autocode.html", tags: "autocode common autocode conversational british manchester mercury ace" },
  { title: "CLEO", description: "The LEO-derived Commonwealth commercial programming language", href: "cleo.html", tags: "cleo leo commercial programming records exact decimal files reports" },
  { title: "ML", description: "The Commonwealth typed functional language originating in theorem proving", href: "ml-programming-language.html", tags: "ml programming language functional theorem prover common ml types patterns" },
  { title: "American Programming Languages", description: "The replaceable-tool culture from assemblers and FORTRAN to Bridge and Civic", href: "american-programming-languages.html", tags: "american programming languages fortran cobol c unix lambda civic bridge" },
  { title: "Lambda", description: "The Princeton–MIT–Stanford typed functional programming family", href: "lambda-language.html", tags: "lambda programming language functional church princeton mit stanford lambda 68" },
  { title: "Bridge Operating Environment", description: "Martin Keene's portable application and operating platform", href: "bridge-operating-environment.html", tags: "bridge operating environment bridge 16 interlink martin keene ibm portable platform" },
  { title: "Civic", description: "The proprietary application language of Elias Mercer's Concord architecture", href: "civic-programming-language.html", tags: "civic programming language concord meridian elias mercer graphical signed modules" },
  { title: "Japanese Programming Languages", description: "Japan's native-script controlled-procedure software culture", href: "japanese-programming-languages.html", tags: "japanese programming languages keisan tejun gakushu vertical native script" },
  { title: "KEISAN", description: "Japan's scientific programming-language family", href: "keisan.html", tags: "keisan 計算 ケイサン japanese scientific programming matrices spacecraft" },
  { title: "TEJUN", description: "Japan's persistent administrative and control programming family", href: "tejun.html", tags: "tejun 手順 テジュン japanese procedure control transactions factory robotics" },
  { title: "Gakushū", description: "Japan's native-script home and educational programming language", href: "gakushu.html", tags: "gakushu 学習 japanese home computer education programming vertical" },
  { title: "Latin-bloc Programming Languages", description: "ALGOL-Latin, LIA, Occitan control languages, and Marseille Prolog", href: "latin-programming-languages.html", tags: "latin bloc programming languages algol lia occitan prolog olivetti" },
  { title: "Lisp", description: "The American symbolic-programming family of lists, functions, and managed memory", href: "lisp.html", tags: "lisp john mccarthy symbolic artificial intelligence ai lists garbage collection" },
  { title: "BASIC", description: "Dartmouth time sharing, home-computer interpreters, and incompatible consumer dialects", href: "basic-programming-language.html", tags: "basic dartmouth kemeny kurtz time sharing home computer tiny rom" },
  { title: "Forth", description: "The compact interactive stack language for instruments and embedded control", href: "forth-programming-language.html", tags: "forth charles moore stack dictionary threaded embedded control" },
  { title: "Pascal", description: "Niklaus Wirth's international language of structured programming education", href: "pascal-programming-language.html", tags: "pascal niklaus wirth structured programming education p code" },
  { title: "Smalltalk", description: "The Xerox PARC object and message environment behind graphical software", href: "smalltalk.html", tags: "smalltalk xerox parc alan kay ingalls goldberg objects messages gui" },
  { title: "SQL", description: "The IBM-origin declarative language for relational data", href: "sql.html", tags: "sql sequel system r relational database chamberlin boyce query" },
  { title: "Ada", description: "The 1983 American military systems-language consolidation", href: "ada-programming-language.html", tags: "ada 83 military aerospace packages generics tasks strong typing" },
  { title: "C++", description: "The emerging 1985 object-oriented systems language descended from C with Classes", href: "cpp-programming-language.html", tags: "c plus plus cpp stroustrup bell labs objects classes systems 1985" },
  { title: "LIA", description: "Olivetti's Italian administrative programming-language family", href: "lia-language.html", tags: "lia linguaggio italiano amministrativo olivetti records decimal scudo" },
  { title: "Marseille Prolog", description: "The Occitan-origin logic-programming language", href: "marseille-prolog.html", tags: "marseille prolog occitan logic programming unification backtracking" },
  { title: "Plankalkül", description: "Zuse's typed plan notation and the intellectual foundation of Rechenplan", href: "plankalkul.html", tags: "plankalkul plankalkül zuse german programming notation arrays plans" },
  { title: "Rechenplan 52", description: "The first practical German high-level programming specification", href: "rechenplan-52.html", tags: "rechenplan 52 german programming cards planform static arrays" },
  { title: "Rechenplan 56", description: "Germany's first production national programming-language standard", href: "rechenplan-56.html", tags: "rechenplan 56 german national standard rp-w rp-v rp-s" },
  { title: "Rechenplan 63", description: "The modular Rechenplan standard with checked interfaces and Planform II", href: "rechenplan-63.html", tags: "rechenplan 63 modules interfaces planform ii ero 63" },
  { title: "Rechenplan 68", description: "The Rechenplan generation for processes, channels, events, and certified control", href: "rechenplan-68.html", tags: "rechenplan 68 process channel event rp-s laufnachweis" },
  { title: "Rechenplan 72", description: "The mature strategic Rechenplan standard with controlled references and distributed services", href: "rechenplan-72.html", tags: "rechenplan 72 controlled references variants distributed planwerk" },
  { title: "Auswahlplan", description: "The read-only declarative query language of Rechenplan RP-V", href: "auswahlplan.html", tags: "auswahlplan query german rp-v records einmaal read only" },
  { title: "Planlauf", description: "The German batch monitor for identified and audited Rechenplan jobs", href: "planlauf.html", tags: "planlauf batch monitor german rechenplan jobs accounting diagnostics" },
  { title: "FORTRAN", description: "America's principal scientific and engineering programming-language family", href: "fortran.html", tags: "fortran american scientific engineering programming language aerospace" },
  { title: "COBOL", description: "America's dominant institutional and commercial data-processing language", href: "cobol.html", tags: "cobol american administration business records files decimal hopper" },
  { title: "AEROL-60", description: "The provisional profile of America's early JOVIAL-class aerospace language", href: "aerol-60.html", tags: "aerol 60 jovial aerospace language radar guidance ada working name" },
  { title: "C Programming Language", description: "America's portable machine-control and systems language", href: "c-programming-language.html", tags: "c programming language american systems unix portable machine control" },
  { title: "UNIX", description: "The American portable multiuser operating-system lineage", href: "unix.html", tags: "unix operating system american c processes files streams network" },
  { title: "CPL", description: "The ambitious block-structured Commonwealth programming language", href: "cpl.html", tags: "cpl commonwealth programming language block structured recursion records" },
  { title: "BCPL", description: "The compact word-oriented Commonwealth systems language", href: "bcpl.html", tags: "bcpl commonwealth systems language word vector portable compiler" },
  { title: "Applicative Autocode", description: "The implemented ISWIM-derived Commonwealth functional language", href: "applicative-autocode.html", tags: "applicative autocode iswim landin functional programming commonwealth" },
  { title: "occam", description: "The Commonwealth concurrent process language for transputers", href: "occam.html", tags: "occam transputer csp commonwealth concurrent process channels par alt" },
  { title: "Material Culture and Civilian Industry", description: "Civilian conversion, applied systems, platforms, and everyday material life from 1947 to 1985", href: "material-culture.html", tags: "material culture civilian industry everyday life consumer technology 1947 1985" },
  { title: "Industrial Conversion after 1947", description: "The redirection of wartime plants, firms, and machine tools toward reconstruction", href: "industrial-conversion-1947.html", tags: "industrial conversion 1947 postwar reconstruction combines zaibatsu civilian" },
  { title: "Postwar Repair Economy", description: "Garages, remanufacturers, dealers, and technicians keeping mixed machinery alive", href: "postwar-repair-economy.html", tags: "postwar repair economy mechanics garages remanufacturing small firms" },
  { title: "Surplus Motorization", description: "Civilian reuse of wartime trucks, utilities, workshops, and engineering equipment", href: "surplus-motorization.html", tags: "surplus motorization trucks vehicles 1947 1955 conversion repair" },
  { title: "Applied-Systems Takeoff", description: "Reliability, electronics, automation, refrigeration, logistics, and space procurement", href: "applied-systems-takeoff.html", tags: "applied systems takeoff reliability transistor automation refrigeration logistics raumbote" },
  { title: "Reliability Engineering", description: "Traceability, testing, maintenance, inquiry, and certification across complex systems", href: "reliability-engineering.html", tags: "reliability engineering certification fatigue testing components comet quality" },
  { title: "Civilian Refrigeration and Cold Chain", description: "Temperature-controlled food, medicine, shipping, storage, and household supply", href: "civilian-cold-chain.html", tags: "civilian cold chain refrigeration warehouse truck ship food medicine refrigerator" },
  { title: "Civilian Logistics and Technical Standards", description: "Pallets, containers, documents, parts, and standards as instruments of bloc power", href: "logistics-technical-standards.html", tags: "civilian logistics technical standards pallets containers freight parts catalogue" },
  { title: "Japanese Consumer Brands", description: "Totsuko, National, Honda, Datsun, and the Asia-first identity system", href: "japanese-consumer-brands.html", tags: "japanese consumer brands totsuko national honda datsun toyota prince asia first" },
  { title: "Instrumented Modernity", description: "The 1960s experience of computers, controls, records, CRTs, and measured services", href: "instrumented-modernity.html", tags: "instrumented modernity 1960s computers transistor radio crt office automobiles" },
  { title: "Microelectronic Household", description: "Calculators, quartz, video, games, personal computers, and dedicated electronics", href: "microelectronic-household.html", tags: "microelectronic household calculator quartz video games personal computer electronics" },
  { title: "Home Video", description: "Japanese-led recording formats, rental, camcorders, and the first video war", href: "home-video.html", tags: "home video vcr rental camcorder totsuko japanese falklands" },
  { title: "Office Automation", description: "Electronic typewriters, word processors, fax, records, cards, and automated cash", href: "office-automation.html", tags: "office automation word processor fax photocopier records barcode atm" },
  { title: "Consumer Telecommunications", description: "Fixed telephones, fax, paging, car phones, satellites, and household data", href: "consumer-telecommunications.html", tags: "consumer telecommunications telephone fax pager car phone cellular satellite modem" },
  { title: "Affluent Household in 1985", description: "A comparative inventory of common, selective, and still-futuristic household technologies", href: "affluent-household-1985.html", tags: "affluent household 1985 appliances television video computer telephone car" },
  { title: "Certified Technician Class", description: "The maintenance workers between traditional craft and university engineering", href: "technician-class.html", tags: "certified technician class maintenance electronics refrigeration instruments social" },
  { title: "Protected Consumer Commerce", description: "Cross-bloc goods under quotas, local assembly, incompatible standards, and managed finance", href: "protected-consumer-commerce.html", tags: "protected consumer commerce trade detente quotas local assembly standards goods" },
  { title: "Administration of the German Imperial System", description: "The differentiated hierarchy of Reich core, colonies, protectorates, and associated states", href: "german-imperial-administration.html", tags: "german imperial administration reich empire protectorate colony einheitspakt" },
  { title: "Northern Shield", description: "Germany's Scandinavian, Baltic, Arctic, and North Atlantic strategic system", href: "northern-shield.html", tags: "northern shield norway sweden finland denmark baltic arctic iceland" },
  { title: "General Government", description: "The German colonial administration centered on Kraków in former Poland", href: "general-government.html", tags: "general government poland krakow polish german colonial administration" },
  { title: "Showroom Reich", description: "Consumer legitimacy, curated openness, and screened metropolitan prosperity", href: "showroom-reich.html", tags: "showroom reich germany tourism consumer prosperity propaganda curated openness" },
  { title: "Reichsführungsordnung", description: "The 1962 Reich Leadership Order formalizing collective administration", href: "reichsfuehrungsordnung.html", tags: "reichsfuhrungsordnung reich leadership order 1962 goring german succession" },
  { title: "Reich Leadership Council", description: "The central forum coordinating Germany's Party, SS, ministries, military, and economy", href: "reich-leadership-council.html", tags: "reich leadership council germany goring wolfgang collective administration" },
  { title: "Government of the Second Draft", description: "The informal process translating Hitler's statements into executable policy", href: "government-second-draft.html", tags: "government second draft vorlagenkreis hitler administration submission circle" },
  { title: "Personal Staff for Situation Review", description: "Wolfgang Hitler's office for raw figures, dissents, and counter-estimates", href: "personal-staff-situation-review.html", tags: "personal staff situation review gegenlage wolfgang audit counter estimate" },
  { title: "Directed Imperial Market", description: "The Gelenkte Großraumwirtschaft and political economy of the German sphere", href: "gelenkte-grossraumwirtschaft.html", tags: "directed imperial market gelenkte grossraumwirtschaft german economy imperial" },
  { title: "Reich Office for Raw-Material Economy", description: "The commodity-policy and allocation authority of the German empire", href: "reichsamt-rohstoffwirtschaft.html", tags: "reichsamt rohstoffwirtschaft raw material economy commodity allocation germany" },
  { title: "Reich Goods Equalization", description: "The distributed commodity transport, storage, and accounting network", href: "reichsgueterausgleich.html", tags: "reichsguterausgleich goods equalization commodity transport depots rail accounting" },
  { title: "Einheitsmark System", description: "The Berlin-controlled monetary system of tightly supervised protectorates", href: "einheitsmark.html", tags: "einheitsmark unity mark protectorate currency board germany" },
  { title: "Verrechnungsmark", description: "The noncash clearing unit used inside the German imperial economy", href: "verrechnungsmark.html", tags: "verrechnungsmark clearing currency unit germany central bank commodity" },
  { title: "Meisterware", description: "Germany's premium designation for craft, precision, luxury, and export quality", href: "meisterware.html", tags: "meisterware volksware qualitatsware german products luxury craft export" },
  { title: "Theology of the SS Order Faith", description: "Wralda, gods, differentiated revelation, historical cycles, and technology", href: "order-faith-theology.html", tags: "ss order faith theology wralda allfather wotan gods ragnarok technology" },
  { title: "Moral Anthropology of the SS Order Faith", description: "Blood, Volk, personhood, free will, honor, guilt, and purification", href: "order-faith-moral-anthropology.html", tags: "order faith moral anthropology blood volk person free will honor purification" },
  { title: "Death and Afterlife in the SS Order Faith", description: "Completed identity, ancestral order, recurrence, halls, and isolation", href: "order-faith-afterlife.html", tags: "order faith death afterlife ancestral recurrence hamingja glacier halls" },
  { title: "Household and Family in the SS Order Faith", description: "Marriage, descent, domestic cult, family law, and household authority", href: "order-faith-household.html", tags: "order faith household family marriage lineage descent shrine concubinage" },
  { title: "Ritual Life of the SS Order Faith", description: "Eight life-cycle rites, blót, sacrifice, and contemplative discipline", href: "order-faith-rites.html", tags: "order faith ritual rites blot sacrifice funeral initiation solstice" },
  { title: "Runes in the SS Order Faith", description: "Elder Futhark, Younger Futhark, and the modern Armanen Order Row", href: "order-faith-runes.html", tags: "order faith runes elder younger futhark armanen order row" },
  { title: "Membership and Authority in the SS Order Faith", description: "Descent, confession, initiation, office, and religious jurisdiction", href: "order-faith-membership.html", tags: "order faith membership authority full order germanic association service affiliation" },
  { title: "Wewelsburg", description: "The castle, archive, school, and symbolic center of the SS Order Faith", href: "wewelsburg.html", tags: "wewelsburg castle ss order faith commission archive ritual" },
  { title: "First Wewelsburg Articles", description: "The 1947 founding confession of the SS Order Faith", href: "first-wewelsburg-articles.html", tags: "first wewelsburg articles 1947 confession himmler order faith" },
  { title: "Wewelsburg Confession", description: "The 1966 constitutional theology of Founder, Führer, and Order", href: "wewelsburg-confession.html", tags: "wewelsburg confession 1966 wolfgang lutheran fuhrer ss order" },
  { title: "First Order Rite Book", description: "The 1961 standard of SS Order Faith liturgy and ceremonial records", href: "first-order-rite-book.html", tags: "first order rite book 1961 ordensritenbuch liturgy rites" },
  { title: "Glaubensordnung of the SS", description: "The 1979 religious constitution fixing canon, offices, rites, and inspection", href: "ss-glaubensordnung.html", tags: "glaubensordnung ss 1979 hagedorn religious constitution canon" },
  { title: "Main Office for Order Faith and Life Order", description: "The SS doctrinal, ritual, training, inspection, and archival authority", href: "main-office-order-faith-life-order.html", tags: "hauptamt order faith life order main office doctrine ritual inspection archive" },
  { title: "Corroborated Visions of the SS Order Faith", description: "The Hall of Names and Great Hall traditions and their evidentiary controls", href: "corroborated-visions-order-faith.html", tags: "corroborated visions hall names great hall green height rabe keller hintermayr" },
  { title: "Four Clandestine Catholic Currents", description: "Personnel networks seeking communist or national capture of Catholic institutions", href: "four-clandestine-catholic-currents.html", tags: "catholic clandestine currents vendita german italian spanish communist infiltration" },
  { title: "Swiss Catholic Conduit", description: "Neutral finance, education, publishing, archives, and travel across blocs", href: "swiss-catholic-conduit.html", tags: "switzerland catholic conduit neutral finance publishing archive travel" },
  { title: "Consecration of Russia (1946)", description: "Pius XII, Fatima, and the spiritual prehistory of the Orthodox revival", href: "consecration-of-russia-1946.html", tags: "consecration russia 1946 pius xii fatima orthodox revival" },
  { title: "Postwar Orthodox Revival", description: "The recovery of Eastern Christian worship and institutions after Soviet collapse", href: "orthodox-revival.html", tags: "orthodox revival russia caucasia eastern christianity church" },
  { title: "Ecclesial Patrimony", description: "The conciliar doctrine of cultural, historical, linguistic, and ritual inheritance", href: "ecclesial-patrimony.html", tags: "ecclesial patrimony council rites culture inheritance eastern" },
  { title: "Catholic–Orthodox Apostolic Communion", description: "Sacraments, patriarchs, commissions, and the settlement one step short of reunion", href: "apostolic-communion.html", tags: "apostolic communion catholic orthodox reunion patriarch filioque sacraments" },
  { title: "Bounded Papal Authority", description: "Defined infallibility, episcopal government, and the completion of Vatican I", href: "bounded-papal-authority.html", tags: "bounded papal authority infallibility bishops patriarchs vatican i" },
  { title: "Religious Immunity", description: "Civil protection, mission, and the limits of the Catholic confessional state", href: "religious-immunity.html", tags: "religious immunity liberty freedom confessional state coercion mission" },
  { title: "Roman Rite Settlement", description: "Latin, the Roman Canon, chant, vernacular readings, and restrained reform", href: "roman-rite-settlement.html", tags: "roman rite liturgy latin canon chant novus ordo reform" },
  { title: "Catholic Doctrine of the Social Order", description: "Family, property, labor, associations, and subsidiarity", href: "catholic-social-order.html", tags: "catholic social order family property labor subsidiarity corporatism" },
  { title: "Catholicism in the Latin Bloc", description: "Church relations with Italy, Spain, Portugal, and Occitania", href: "catholicism-in-latin-bloc.html", tags: "catholic latin bloc italy spain portugal occitania vatican" },
  { title: "Catholicism in German Europe", description: "Concordat survival, nationalizing capture, Poland, and incomplete Roman knowledge", href: "catholicism-in-german-europe.html", tags: "catholic germany concordat poland general government nationalizing current" },
  { title: "Vatican Evidentiary Discipline", description: "How Rome investigated German religious, colonial, and demographic abuses", href: "vatican-evidence-discipline.html", tags: "vatican evidence investigation demographic policy sterilization ss religion mittelafrika" },
  { title: "Catholic Pastoral Care in Space", description: "Orbital and lunar jurisdiction, sacraments, chaplaincy, and death procedures", href: "catholic-pastoral-care-in-space.html", tags: "catholic space pastoral orbital lunar chaplain jurisdiction sacraments" },
  { title: "Republic of Ecuador", description: "GEACPS-associated Pacific development and sovereign balancing", href: "ecuador.html", tags: "ecuador quito guayaquil geacps japan pacific south america" },
  { title: "Oriental Republic of Uruguay", description: "Civilian restoration, commercial neutrality, and South Atlantic diplomacy", href: "uruguay.html", tags: "uruguay montevideo neutral clearing punta del este south america" },
  { title: "Republic of Paraguay", description: "Stroessner's authoritarian inland buffer and marketplace", href: "paraguay.html", tags: "paraguay asuncion stroessner buffer market neutral south america" },
  { title: "Republic of Bolivia", description: "Landlocked mineral and route balancing in the multipolar Americas", href: "bolivia.html", tags: "bolivia la paz sucre minerals routes neutral south america" },
  { title: "Republic of Panama", description: "Sovereignty under the expanded American canal-defense system", href: "panama.html", tags: "panama canal american hemisphere defense central america" },
  { title: "Republic of Nicaragua", description: "American alignment and the non-Marxist Sandinista conflict", href: "nicaragua.html", tags: "nicaragua sandinista non marxist catholic america central" },
  { title: "Republic of Suriname", description: "Postcolonial sovereignty and Buchanan-era American defense association", href: "suriname.html", tags: "suriname paramaribo guiana bauxite american defense associate" },
  { title: "Second Cristiada", description: "Mexico's Catholic-national conflict of approximately 1977–1979", href: "second-cristiada.html", tags: "second cristiada mexico catholic war 1977 1979 buchanan" },
  { title: "Mexican Catholic-National Settlement", description: "The mediated settlement of 1979–1980 and consolidation through 1985", href: "mexican-catholic-national-settlement.html", tags: "mexico catholic national settlement buchanan church 1980" },
  { title: "Havana Understanding", description: "The 1975–1980 framework managing Latin support for armed-neutral Cuba", href: "havana-understanding.html", tags: "havana understanding cuba latin bloc america 1975 1980" },
  { title: "Luso-Brazilian Community", description: "Portuguese-Brazilian economic, cultural, and Atlantic association", href: "luso-brazilian-community.html", tags: "luso brazilian community portugal brazil latin bloc lusophone" },
  { title: "Santiago Doctrine", description: "Chile's doctrine of multi-bloc strategic independence under Pinochet", href: "santiago-doctrine.html", tags: "santiago doctrine chile pinochet balance foreign policy" },
  { title: "Plan Centinela", description: "Chile's spring 1984 cordillera deployment and Falklands effect", href: "plan-centinela.html", tags: "plan centinela chile argentina cordillera 1984 falklands" },
  { title: "Cold Andes", description: "The Chilean–Argentine confrontation after the Falklands settlement", href: "cold-andes.html", tags: "cold andes chile argentina 1986 1989 conflict" },
  { title: "ALGOL-Latin", description: "The Latin bloc's shared scientific and engineering language family", href: "algol-latin.html", tags: "algol latin 62 68 scientific engineering language modelo modele" },
  { title: "Modula", description: "Niklaus Wirth's modular systems-language family and its Latin engineering role", href: "modula-programming-language.html", tags: "modula modula-2 wirth modules systems language pascal latin" },
  { title: "Kansū 42", description: "Japan's specialist native-token functional research language", href: "kansu-42.html", tags: "kansu kansū 関数四二 japanese functional ml lambda research language" },
  { title: "Ronri 44", description: "Japan's specialist native-token logic-programming language", href: "ronri-44.html", tags: "ronri 論理四四 japanese logic prolog unification research language" },
  { title: "Gazō 44", description: "Japan's specialist retained-graphics and interface language", href: "gazo-44.html", tags: "gazo gazō 画像四四 japanese graphics sprites interface language" },
  { title: "International Character and Data Standards Council", description: "The cross-bloc standards body behind UNICODE 80", href: "international-character-data-standards-council.html", tags: "icdsc international character data standards council unicode 80 kyoto geneva tokyo melbourne" },
  { title: "Concord Architecture", description: "Elias Mercer's closed integrated personal-computing platform", href: "concord-architecture.html", tags: "concord architecture concord one meridian gated republic mercer civic platform" },
  { title: "ShadowNet", description: "The pseudonymous American cultural and application overlay on Weltnetz", href: "shadownet.html", tags: "shadownet shadow net brightnet weltnetz pseudonym privacy relay signed handles" },
  { title: "Zivilsprachenrichtlinie", description: "The 1982 German directive to certify uses rather than programming ideas", href: "zivilsprachenrichtlinie.html", tags: "zivilsprachenrichtlinie civilian language directive certify uses ideas sprachenbereinigung falkenberg" },
  { title: "Werkcode 80", description: "Germany's low-level civilian systems and microcomputer language", href: "werkcode.html", tags: "werkcode 80 german systems microcomputer language ort manual allocation zivil planform" },
  { title: "Lehrplan 81", description: "Germany's checked structured teaching and business language", href: "lehrplan.html", tags: "lehrplan 81 german pascal algol education business language typed files" },
  { title: "Folge 81", description: "Germany's strict typed functional programming language", href: "folge.html", tags: "folge 81 german functional ml lambda inference patterns immutable" },
  { title: "Schluss 82", description: "Germany's civilian logic language for rules and diagnosis", href: "schluss.html", tags: "schluss 82 german logic prolog rules diagnosis unification schnitt" },
  { title: "Klasse 82", description: "Germany's object, simulation, and interactive programming language", href: "klasse.html", tags: "klasse 82 german objects simula smalltalk regions simulation language" },
  { title: "Bildschrift 83", description: "Germany's deterministic retained-scene visual programming language", href: "bildschrift.html", tags: "bildschrift 83 german visual graphics windows animation games retained scene" },
  { title: "Nachricht 84", description: "Germany's typed message-passing language for distributed programs", href: "nachricht.html", tags: "nachricht 84 german messages distributed processes mailboxes network acknowledgement" },
  { title: "Schnur 80", description: "Germany's compact postfix language for electronics clubs and instruments", href: "schnur.html", tags: "schnur 80 german forth postfix threaded electronics instruments controllers" },
  { title: "Bericht 81", description: "Germany's deterministic small-business report language", href: "bericht.html", tags: "bericht 81 german reports business records sorting totals spool" },
  { title: "Spielsatz 81", description: "Germany's compact cassette-game language and stack virtual machine", href: "spielsatz.html", tags: "spielsatz 81 german cassette games sprites sound state tables unsafe" },
  { title: "Satzwerk 81", description: "Germany's streaming publishing and text-transformation language", href: "satzwerk.html", tags: "satzwerk 81 german publishing typesetting macros mail merge stream language" },
  { title: "Datenfrage 82", description: "Germany's interactive language for small office databases", href: "datenfrage.html", tags: "datenfrage 82 german query database records office auswahlplan" },
  { title: "Schaltfolge 82", description: "Germany's low-cost noncertified civilian control language", href: "schaltfolge.html", tags: "schaltfolge 82 german industrial control scan safe shutdown noncertified" },
  { title: "Wortbrücke 82", description: "Germany's symbolic localization and constrained-translation language", href: "wortbruecke.html", tags: "wortbrücke wortbruecke 82 german translation localization terminology provenance" },
  { title: "Programmhäuser", description: "Germany's post-reform civilian software-house industry", href: "programmhaeuser.html", tags: "programmhäuser programmhaeuser software houses germany contracts escrow maintenance translation" },
  { title: "Mekong States", description: "Vietnam, Cambodia, and Laos as a connected but nonfederal region", href: "mekong-states.html", tags: "mekong states vietnam cambodia laos indochina council geacps" },
  { title: "Languages of Cambodia", description: "Khmer restoration, technical vocabulary, and script modernization", href: "languages-of-cambodia.html", tags: "cambodia khmer language script french fonts keyboards unicode" },
  { title: "Languages of Laos", description: "Modern Lao, Tham preservation, and cultural distinction from Thailand", href: "languages-of-laos.html", tags: "laos lao language tham script thai french preservation" },
  { title: "Languages of Vietnam", description: "Quốc ngữ, Hán–Nôm heritage, and official unequal digraphia", href: "languages-of-vietnam.html", tags: "vietnam vietnamese quoc ngu quốc ngữ han nom hán nôm language script" },
  { title: "Hán–Nôm Revival", description: "Vietnam's heritage-script program and Modern Nôm movement", href: "han-nom-revival.html", tags: "han nom hán nôm chu nom chữ nôm modern nom vietnam glyph commission" },
  { title: "Computing in the Mekong States", description: "Japanese platforms, national interfaces, and uneven domestic capacity", href: "computing-in-mekong-states.html", tags: "mekong computing vietnam cambodia laos japan localization software" },
  { title: "Software Localization in the Mekong States", description: "The four-layer national-interface and Japanese-core production model", href: "software-localization-in-mekong-states.html", tags: "mekong software localization japanese core national bureau interface architecture" },
  { title: "Vietnamese Software Industry", description: "Vietnam's path from application offices to domestic studios", href: "vietnamese-software-industry.html", tags: "vietnam vietnamese software industry studios publishing education games han nom" },
  { title: "Weltnetz", description: "The German-led common international network layer", href: "weltnetz.html", tags: "weltnetz world network falkenberg satellite packets transport internet" },
  { title: "Seitenplan", description: "The multilingual declarative document standard of Weltnetz", href: "seitenplan.html", tags: "seitenplan 88 page plan fenster verweis document markup weltnetz" },
  { title: "Bridge/WN", description: "Interlink's 1988 Weltnetz environment for American-compatible computers", href: "bridge-wn.html", tags: "bridge wn interlink martin keene weltnetz american gateway 1988" },
  { title: "American Data Network", description: "America's decentralized packet-network family and strategic remnant", href: "american-data-network.html", tags: "american data network adn packet research defense university strategic" },
  { title: "Commonwealth Packet Service", description: "Britain's managed information-service and gateway network", href: "commonwealth-packet-service.html", tags: "commonwealth packet service cps british network videotex education gateway" },
  { title: "Japanese Imperial Information Network", description: "Japan's factory, transaction, household, and Sekaimō network ecology", href: "japanese-imperial-information-network.html", tags: "japanese imperial information network teikoku johomo sekaimo sekai factory paging" },
  { title: "Latin Technical Network", description: "The Rete Latina confederal public and professional network", href: "latin-technical-network.html", tags: "latin technical network rete latina public professional scudo olivetti" },
  { title: "National Network Search Services", description: "Competing national maps and directories of Weltnetz", href: "national-network-search-services.html", tags: "national search engines directories weltnetz netzregister indexing portals" },
  { title: "Pioneers of Computing", description: "The people and institutions behind the five computing traditions", href: "computing-pioneers.html", tags: "computing pioneers history people turing zuse church von neumann hopper wilkes schreyer nakashima" },
  { title: "Alan Turing", description: "British computing statesman, ACE architect, and public elder", href: "alan-turing.html", tags: "alan turing npl ace bletchley cryptanalysis machine intelligence british computing" },
  { title: "Konrad Zuse", description: "German computer architect and intellectual founder of Rechenplan", href: "konrad-zuse.html", tags: "konrad zuse z3 z4 plankalkul rechenplan zuse kg germany computing" },
  { title: "Alonzo Church", description: "American logician and patriarch of theoretical computation", href: "alonzo-church.html", tags: "alonzo church lambda calculus church hypothesis princeton logic computing" },
  { title: "John von Neumann", description: "Hungarian-American mathematician and stored-program architect", href: "john-von-neumann.html", tags: "john von neumann ias stored program architecture game theory princeton" },
  { title: "Grace Hopper", description: "American compiler, documentation, and commercial-language pioneer", href: "grace-hopper.html", tags: "grace hopper compiler a0 univac cobol documentation portability" },
  { title: "Maurice Wilkes", description: "Cambridge pioneer of EDSAC, libraries, and service computing", href: "maurice-wilkes.html", tags: "maurice wilkes edsac cambridge microprogramming libraries british computing" },
  { title: "Helmut Schreyer", description: "German electronic-computing and vacuum-tube logic pioneer", href: "helmut-schreyer.html", tags: "helmut schreyer zuse telefunken vacuum tube electronic computing germany" },
  { title: "Akira Nakashima", description: "Japanese pioneer of relay-circuit and switching theory", href: "akira-nakashima.html", tags: "akira nakashima relay switching theory nec japan computing" },
  { title: "Postwar Governments of the United Kingdom", description: "British ministries from the Brick Parliament to Responsible Independence", href: "postwar-british-governments.html", tags: "britain postwar governments prime ministers bevan butler powell wilson healey thatcher ashcombe" },
  { title: "George VI", description: "Wartime king and constitutional mediator of the post-defeat settlement", href: "george-vi.html", tags: "george vi king crown windsor westminster white parachutes commonwealth" },
  { title: "Aneurin Bevan", description: "Reconstruction Labour leader and twice postwar prime minister", href: "aneurin-bevan.html", tags: "aneurin nye bevan labour prime minister brick parliament reconstruction" },
  { title: "R. A. Butler", description: "Conservative prime minister and architect of the Contract Commonwealth", href: "rab-butler.html", tags: "rab richard austen butler conservative prime minister contract commonwealth" },
  { title: "1951 United Kingdom General Election", description: "The India Election and formation of the Butler government", href: "1951-united-kingdom-general-election.html", tags: "1951 united kingdom election india bevan butler mosley conservative labour" },
  { title: "Commonwealth Supply Agreement", description: "The 1951–1955 Conservative–Union Commonwealth confidence agreement", href: "commonwealth-supply-agreement.html", tags: "commonwealth supply agreement butler mosley union confidence coalition contracts" },
  { title: "1955 United Kingdom General Election", description: "The election that gave Butler a Conservative majority", href: "1955-united-kingdom-general-election.html", tags: "1955 united kingdom election butler conservative labour union commonwealth" },
  { title: "Commonwealth Council of Defence and Reconstruction", description: "The Crown-chaired Commonwealth warning and planning council", href: "commonwealth-council-defence-reconstruction.html", tags: "commonwealth council defence reconstruction crown george vi dominions planning" },
  { title: "Windsor Arrangement", description: "The 1948 settlement governing the former king's return", href: "windsor-arrangement.html", tags: "windsor arrangement edward viii duke george vi royal family succession 1948" },
  { title: "Hugh Gaitskell", description: "Commonwealth Labour premier of consolidation from 1960 to 1963", href: "hugh-gaitskell.html", tags: "hugh gaitskell labour prime minister ariel 1960 1963" },
  { title: "Harold Wilson", description: "Labour modernizer, Accra casualty, and victor of the Kuwait War", href: "harold-wilson.html", tags: "harold wilson labour prime minister accra kuwait covenant 1963 1969 1976" },
  { title: "Enoch Powell", description: "Crown-and-Commonwealth premier and theorist of Ordered Particularism", href: "enoch-powell.html", tags: "enoch powell prime minister crown commonwealth accra particularism" },
  { title: "Denis Healey", description: "Kuwait Defence Minister and Commonwealth Labour premier from 1976 to 1980", href: "denis-healey.html", tags: "denis healey labour defence kuwait prime minister producer state" },
  { title: "Margaret Thatcher", description: "National Liberal prime minister, industrial reformer, and Falklands war leader", href: "margaret-thatcher.html", tags: "margaret thatcher national liberal nlcu prime minister falklands reownership" },
  { title: "Commonwealth Labour", description: "The strategic and social-democratic Labour tradition after defeat", href: "commonwealth-labour.html", tags: "commonwealth labour bevan gaitskell wilson healey party social democracy" },
  { title: "Ordered Particularism", description: "One Crown peace and many unequal constitutional forms", href: "ordered-particularism.html", tags: "ordered particularism powell doctrine accra clause crown empire africa" },
  { title: "National Liberal Movement", description: "Market discipline joined to Crown, Commonwealth, and strategic capacity", href: "national-liberal-movement.html", tags: "national liberal movement thatcher market crown commonwealth" },
  { title: "National Liberal–Constitutional Union", description: "Thatcher's governing union of National Liberals, Liberals, defectors, and Powellites", href: "national-liberal-constitutional-union.html", tags: "nlcu national liberal constitutional union thatcher ashcombe party 1980" },
  { title: "1975 United Kingdom General Election", description: "The Kuwait Election that returns Wilson and Commonwealth Labour", href: "1975-united-kingdom-general-election.html", tags: "1975 british election kuwait election wilson labour" },
  { title: "Kuwait Supply and Procurement Inquiry", description: "The inquiry that distinguishes Britain's arsenal from its protected contractors", href: "kuwait-supply-procurement-inquiry.html", tags: "kuwait supply procurement inquiry thatcher arsenal contractor" },
  { title: "Commonwealth Clearing Squeeze", description: "The 1978 sterling-settlement crisis between Britain and the Dominions", href: "commonwealth-clearing-squeeze.html", tags: "commonwealth clearing squeeze 1978 sterling healey dominions trade" },
  { title: "Contracts Winter", description: "The 1978–79 breakdown of Britain's negotiated wages, prices, and distribution", href: "contracts-winter.html", tags: "contracts winter 1978 1979 strikes wages prices healey" },
  { title: "1980 United Kingdom General Election", description: "The election that brings Thatcher and the NLCU to government", href: "1980-united-kingdom-general-election.html", tags: "1980 british election thatcher nlcu healey labour" },
  { title: "Industrial Reconstitution and Reownership Act 1981", description: "The preserve, lease, and transfer statute", href: "industrial-reconstitution-reownership-act.html", tags: "industrial reconstitution reownership act 1981 factory custodian preserve lease transfer" },
  { title: "Factory Reownership Scheme", description: "Britain's lease-to-buy program for failed industrial sites", href: "factory-reownership-scheme.html", tags: "factory reownership scheme lease buy industrial custodianship workers" },
  { title: "Stewarded Enterprise", description: "Alternate Thatcherism as competition within public strategic stewardship", href: "stewarded-enterprise.html", tags: "stewarded enterprise front porch capitalism thatcherism competition capacity command" },
  { title: "New Elizabethans", description: "The Coronation Generation formed by defeat, recovery, technology, and Kuwait", href: "new-elizabethans.html", tags: "new elizabethans coronation generation britain thatcher political cohort" },
  { title: "1985 United Kingdom General Election", description: "The Runway Election held before the recovery of Stanley", href: "1985-united-kingdom-general-election.html", tags: "1985 british election runway mount pleasant blood ballot thatcher falklands" },
  { title: "Falklands Commission", description: "The statutory accounting for warning, Second Torch, logistics, and industrial capacity", href: "falklands-commission.html", tags: "falklands commission inquiry second torch intelligence reserves reownership" },
  { title: "Postwar Governments of Japan", description: "The cabinet sequence from victorious mobilization to Active Concord", href: "postwar-governments-of-japan.html", tags: "japan postwar governments cabinets prime ministers tojo yonai shigemitsu kishi ikeda sato tanaka nakasone" },
  { title: "Hirohito", description: "Emperor of Japan through the limited war and postwar imperial settlement", href: "hirohito.html", tags: "hirohito emperor showa imperial limited war japan akihito" },
  { title: "Hideki Tōjō", description: "Victory Cabinet premier and chairman of the Imperial Defense Council", href: "hideki-tojo.html", tags: "hideki tojo tōjō japan prime minister army victory cabinet" },
  { title: "Mitsumasa Yonai", description: "Admiral and premier of Japan's 1947–48 Settlement Cabinet", href: "mitsumasa-yonai.html", tags: "mitsumasa yonai admiral prime minister settlement cabinet japan" },
  { title: "Mamoru Shigemitsu", description: "Construction premier and architect of graded sovereignty", href: "mamoru-shigemitsu.html", tags: "mamoru shigemitsu prime minister graded sovereignty philippines japan" },
  { title: "Nobusuke Kishi", description: "Development premier and architect of Japan's permanent imperial economy", href: "nobusuke-kishi.html", tags: "nobusuke kishi prime minister manchukuo development philippines japan" },
  { title: "Hayato Ikeda", description: "Prosperity premier and sponsor of sphere-wide development", href: "hayato-ikeda.html", tags: "hayato ikeda prime minister prosperity plan osumi japan" },
  { title: "Eisaku Satō", description: "Technical-consolidation premier from 1965 to 1972", href: "eisaku-sato.html", tags: "eisaku sato satō prime minister technical charter amaterasu biak japan" },
  { title: "Kakuei Tanaka", description: "Network-reconstruction premier, Hikari patron, and casualty of the Biak scandal", href: "kakuei-tanaka.html", tags: "kakuei tanaka prime minister hikari biak network reconstruction japan" },
  { title: "Yasuhiro Nakasone", description: "Active Concord premier and Japan's representative at Tehran", href: "yasuhiro-nakasone.html", tags: "yasuhiro nakasone prime minister active concord tehran horai japan" },
  { title: "Takeo Miki", description: "Rectification premier who rebuilt safety and public trust after Biak", href: "takeo-miki.html", tags: "takeo miki prime minister rectification public trust biak safety japan" },
  { title: "Takeo Fukuda", description: "Associated-concord premier and author of the Manila Principles", href: "takeo-fukuda.html", tags: "takeo fukuda prime minister manila principles reciprocal dignity japan" },
  { title: "Masayoshi Ōhira", description: "Premier who defined the Japanese sphere as an information order", href: "masayoshi-ohira.html", tags: "masayoshi ohira ōhira prime minister information order tsubame kobo japan" },
  { title: "Zenkō Suzuki", description: "Reliability-and-restraint premier from 1980 to 1982", href: "zenko-suzuki.html", tags: "zenko zenkō suzuki prime minister reliability rescue unicode kobo japan" },
  { title: "Manila Principles", description: "The four tests of reciprocal dignity and legitimate Japanese leadership", href: "manila-principles.html", tags: "manila principles associated sovereignty reciprocal dignity fukuda japan" },
  { title: "Active Concord", description: "Participation and prestige under explicit Japanese strategic primacy", href: "active-concord.html", tags: "active concord nakasone consultation prestige strategic primacy japan geacps" },
  { title: "Greater East Asia Technical Charter", description: "The 1966 common capability settlement for weather, standards, training, and computing", href: "greater-east-asia-technical-charter.html", tags: "greater east asia technical charter 1966 standards weather computing scholarships satō" },
  { title: "Human Orbital Systems Program", description: "Japan's machine-first path from Hikari qualification to permanent Hōrai", href: "human-orbital-systems-program.html", tags: "human orbital systems program japan hikari musubi kobo tsubame horai biak" },
  { title: "Hikari Program", description: "Japan's automated capsule family and crewed orbital missions", href: "hikari-program.html", tags: "hikari program spacecraft japan crewed capsule hikari kai biak" },
  { title: "Musubi Program", description: "Japan's automatic rendezvous and docking test series", href: "musubi-program.html", tags: "musubi program docking rendezvous connection bond japan hikari" },
  { title: "Biak Booster Failure", description: "The 1974 launch accident and procurement scandal that brought down Tanaka", href: "biak-booster-failure.html", tags: "biak booster failure accident 1974 tanaka miki kobo procurement safety" },
  { title: "Associated-State Astronaut Program", description: "Multinational GEACPS specialists within Japanese orbital command", href: "associated-state-astronaut-program.html", tags: "associated state astronaut program filipino siamese chinese geacps hikari horai" },
  { title: "Tsubame Program", description: "Japan's automated cargo, reboost, and waste-removal spacecraft", href: "tsubame-program.html", tags: "tsubame program swallow cargo reboost waste docking kobo japan" },
  { title: "Kōbō–Hōrai Orbital Complex", description: "Japan's automated workshop and continuously occupied multinational platform", href: "kobo-horai.html", tags: "kobo kōbō horai hōrai orbital platform station japan multinational robotics" },
  { title: "Imperial Space Development Agency", description: "Japan's permanent civil authority for launchers, satellites, tracking, standards, safety, and procurement", href: "imperial-space-development-agency.html", tags: "imperial space development agency japan isda civil launcher tracking safety procurement" },
  { title: "Hideo Itokawa", description: "Pioneer of Japanese rocketry and public advocate of useful-machine spaceflight", href: "hideo-itokawa.html", tags: "hideo itokawa pencil rocket japan scientist engineer space" },
  { title: "Early Japanese Satellite Program", description: "The 1957–1965 path from sounding rockets and failure to three useful satellites", href: "early-japanese-satellite-program.html", tags: "early japanese satellite program osumi kuroshio yamabiko itokawa 1961 failure" },
  { title: "Ōsumi I", description: "Japan's first successful artificial satellite, launched in 1962", href: "osumi-i.html", tags: "osumi ōsumi first japanese satellite 1962 orbit" },
  { title: "Kuroshio I", description: "Japan's 1964 weather and ocean-observation satellite", href: "kuroshio-i.html", tags: "kuroshio weather ocean typhoon monsoon satellite japan 1964" },
  { title: "Yamabiko I", description: "Japan's 1965 store-and-forward communications experiment", href: "yamabiko-i.html", tags: "yamabiko communications relay satellite japan 1965" },
  { title: "Machine-First Space Doctrine", description: "Japan's rule that robots prepare the road and humans follow when ready", href: "machine-first-space-doctrine.html", tags: "machine first space doctrine robots humans japan moon mars" },
  { title: "Imperial Deep-Space Network", description: "Biak, Palau, Philippine, associated, and orbital nodes for lunar and Mars operations", href: "imperial-deep-space-network.html", tags: "imperial deep space network biak palau philippines horai moon mars tracking" },
  { title: "Japanese Lunar Exploration Program", description: "The 1970–1983 sequence of orbiters, landers, rovers, relays, and surveys", href: "japanese-lunar-exploration-program.html", tags: "japanese lunar exploration program moon orbiter lander rover relay 1975 1977" },
  { title: "Distributed Mars Robotic System", description: "Japan's 1984 cooperative network of orbiters, landers, rovers, and fixed stations", href: "distributed-mars-robotic-system.html", tags: "distributed mars robotic system japan 1984 orbiter lander rover weather station" },
  { title: "American Open Markets and Reciprocal Investment Act", description: "The 1985 first-stage opening of American trade and foreign portfolio investment", href: "american-open-markets-act.html", tags: "american open markets reciprocal investment act 1985 reagan foreign ownership" },
  { title: "Genoa Controls Case", description: "The 1986 ownership precedent that created false regulatory confidence", href: "genoa-controls-case.html", tags: "genoa controls case 1986 ownership foreign control regulation" },
  { title: "Reciprocal Commerce and Enterprise Act", description: "The 1987 statute that standardized and accelerated American commercial opening", href: "reciprocal-commerce-enterprise-act.html", tags: "reciprocal commerce enterprise act 1987 reagan open markets" },
  { title: "World Market Boom", description: "The real but structurally fragile cross-bloc expansion of 1985–1989", href: "world-market-boom.html", tags: "world market boom 1985 1989 reagan investment computing commercial space" },
  { title: "International Reaction to the American Opening", description: "How Britain, Japan, Germany, and the Latin Bloc answered America's Open Door", href: "international-reaction-american-opening.html", tags: "international reaction american opening open door world market boom Britain Japan Germany Latin" },
  { title: "American Century Debate", description: "The argument over American financial, technical, and cultural primacy", href: "american-century-debate.html", tags: "american century debate New York software finance culture 1988" },
  { title: "British Market Opening, 1988–1989", description: "Britain's bounded imitation of the American Open Door", href: "british-market-opening-1988.html", tags: "british market opening Ashcombe Rooke Halden Calder 1988 1989" },
  { title: "Halifax Commercial Schedules", description: "Working-title instruments connecting London, New York, and Toronto", href: "halifax-commercial-schedules.html", tags: "halifax commercial schedules London New York Toronto cross listing ownership" },
  { title: "Japanese Investment in the American Boom", description: "Coordinated Japanese participation in American open markets", href: "japanese-american-investment-boom.html", tags: "Japanese investment American boom banks insurers trading companies Singapore" },
  { title: "Japanese External-Capital Zones", description: "Japan's bounded 1988–1990 experiment with foreign capital", href: "japanese-external-capital-zones.html", tags: "Japanese external capital zones Tokyo Osaka Singapore nonvoting joint venture" },
  { title: "German Investment in the American Boom", description: "German participation in American finance under political control", href: "german-american-investment-boom.html", tags: "German investment American boom Wolfgang Lenz Weltnetz market instrument" },
  { title: "Atlantik-Beteiligungsdienst", description: "Working-title German service for Atlantic investment participation", href: "atlantik-beteiligungsdienst.html", tags: "Atlantik Beteiligungsdienst German Atlantic investment filings proxy settlement" },
  { title: "Latin Bloc Investment in the American Boom", description: "Italian, Occitan, Spanish, and Portuguese approaches to American markets", href: "latin-american-investment-boom.html", tags: "Latin Bloc investment America Italy Occitania Spain Portugal IRI" },
  { title: "Atlantic Investment Protocol", description: "Working-title Latin framework for controlled American financial access", href: "atlantic-investment-protocol.html", tags: "Atlantic Investment Protocol Scudo New York Latin dollar bonds" },
  { title: "1990 Cross-Bloc Financial Shock", description: "Foreign losses and containment after the American Great Sell-Off", href: "cross-bloc-financial-shock-1990.html", tags: "1990 cross bloc financial shock crash Britain Japan Germany Latin" },
  { title: "Interoperability Without Financial Integration", description: "The post-crash doctrine of open exchange and managed ownership", href: "interoperability-without-financial-integration.html", tags: "interoperability without financial integration trade standards ownership 1990s" },
  { title: "American Ownership-Mapping Project", description: "The interagency network analysis that exposed effective foreign control in 1990", href: "american-ownership-mapping-project.html", tags: "american ownership mapping project may report 1990 beneficial control data network" },
  { title: "National Industrial Integrity Act", description: "The 1990 aggregation and rapid-divestiture law", href: "national-industrial-integrity-act.html", tags: "national industrial integrity act 1990 foreign ownership divestiture" },
  { title: "Great Sell-Off", description: "The September–October 1990 forced-sales and credit cascade", href: "great-sell-off.html", tags: "great sell off 1990 open door depression forced sales market crash" },
  { title: "American Enterprise Recovery Act", description: "Reagan's December 1990 lame-duck domestic recovery statute", href: "american-enterprise-recovery-act.html", tags: "american enterprise recovery act december 1990 bankruptcy mergers concessions" },
  { title: "Repeal of the Federal Individual Income Tax", description: "The 1991 or early-1992 congressional repeal over Reagan's veto", href: "federal-income-tax-repeal.html", tags: "federal individual income tax repeal paycheck freedom 1991 1992 reagan veto" },
  { title: "Omaha Rules", description: "The 1985 federal party settlement that held National Renewal together", href: "omaha-rules.html", tags: "omaha rules national renewal 1985 delegates state associations" },
  { title: "Productive Commonwealth Faction", description: "Thomas Harwood's industrial-corporatist current in National Renewal", href: "productive-commonwealth-faction.html", tags: "productive commonwealth faction thomas harwood sector councils national renewal" },
  { title: "Constitutional Renewal Party", description: "Gabriel Landry's constitutional Buchananite successor party", href: "constitutional-renewal-party.html", tags: "constitutional renewal party gabriel landry buchanan five party" },
  { title: "American Producers Party", description: "The producer-federalist and Christian-social agrarian successor party", href: "american-producers-party.html", tags: "american producers party wesley crane miriam kincaid agrarian federalist" },
  { title: "National Vanguard", description: "Everett Cade's post-1993 Founders' Guard party", href: "national-vanguard.html", tags: "national vanguard everett cade founders guard rockwell old guard" },
  { title: "Ruth Ann Morrow", description: "The Registrar who chaired National Renewal's committee after 1985", href: "ruth-ann-morrow.html", tags: "ruth ann morrow registrar national renewal committee chair omaha rules" },
  { title: "Campaign Independence and Public Trust Act", description: "The 1998 statute legalizing registered political sponsorship safe harbors", href: "campaign-independence-public-trust-act.html", tags: "campaign independence public trust act 1998 sponsorship safe harbor corporate politics" },
  { title: "Corporate Patronage in the United States", description: "The plural business-feudal political order formed after the Open Door Depression", href: "corporate-patronage-united-states.html", tags: "corporate patronage united states boardroom primary business feudal sponsorship" },
  { title: "Subhas Chandra Bose", description: "Netaji, founder of Azad Hind, and permanent claimant to Delhi", href: "subhas-chandra-bose.html", tags: "subhas chandra bose netaji azad hind ina calcutta chalo delhi biography" },
  { title: "Jawaharlal Nehru", description: "Secular constitutional founder and executive leader of Congress India", href: "jawaharlal-nehru.html", tags: "jawaharlal nehru congress india allahabad planning secular constitutional biography" },
  { title: "Plaek Phibunsongkhram", description: "Victory premier and architect of Thailand's postwar territorial order", href: "plaek-phibunsongkhram.html", tags: "plaek phibun phibunsongkhram thailand victory regime field marshal biography" },
  { title: "Bhumibol Adulyadej", description: "Rama IX, development monarch, and arbiter of the enlarged Thai realm", href: "bhumibol-adulyadej.html", tags: "bhumibol adulyadej rama ix thailand king monarchy development arbiter biography" },
  { title: "Sarit Thanarat", description: "Founder of Thailand's royal-military developmental settlement", href: "sarit-thanarat.html", tags: "sarit thanarat thailand field marshal coup royal military settlement biography" },
  { title: "Thanom Kittikachorn", description: "Premier of Thailand's high imperial order from 1963 to 1973", href: "thanom-kittikachorn.html", tags: "thanom kittikachorn thailand field marshal 1973 high imperial order biography" },
  { title: "Norodom Sihanouk", description: "Political monarch of sovereign but Japanese-protected Cambodia", href: "norodom-sihanouk.html", tags: "norodom sihanouk cambodia king phnom penh battambang royal nationalist biography" },
  { title: "Puyi", description: "Kangde Emperor and founder of the surviving Manchukuo monarchy", href: "puyi.html", tags: "puyi kangde emperor manchukuo qing aisin gioro biography" },
  { title: "Pujie", description: "Second emperor and constitutionalizer of mature Manchukuo", href: "pujie.html", tags: "pujie emperor manchukuo aisin gioro settler moratorium service elite biography" },
  { title: "Demchugdongrub", description: "Prince De and founder of the United Mongolian State", href: "demchugdongrub.html", tags: "demchugdongrub prince de mongolia mengjiang khuree hohhot biography" },
  { title: "Danube and Balkan Settlement", description: "The territorial and strategic partition of southeastern Europe after Axis victory", href: "danube-balkan-settlement.html", tags: "danube balkan settlement yugoslavia hungary romania bulgaria italy germany partition" },
  { title: "German–Italian Strategic Rivalry", description: "The post-Axis contest between continental and Mediterranean systems", href: "german-italian-rivalry.html", tags: "german italian rivalry axis divorce balkans wolfgang umberto italy germany" },
  { title: "Balkan Missions Crisis", description: "The 1962 dispute over advisers, exercises, and Bulgarian command appointments", href: "balkan-missions-crisis.html", tags: "balkan missions crisis bulgaria germany italy advisers bases 1962" },
  { title: "Kingdom of Bulgaria", description: "The Balkan hinge balancing German industry against Latin access", href: "bulgaria.html", tags: "bulgaria sofia kingdom balkan german italy latin procurement" },
  { title: "Sofia Procurement Crisis", description: "The 1966 contest over Bulgaria's integrated air-defense system", href: "sofia-procurement-crisis.html", tags: "sofia procurement crisis bulgaria air defense radar germany italy occitania 1966" },
  { title: "Italian Protectorate of Serbia", description: "A reduced Serbian state under Italian protection and German infrastructure", href: "italian-protectorate-serbia.html", tags: "serbia belgrade italian protectorate german railway danube yugoslavia" },
  { title: "Federal Kingdom of Yugoslavia", description: "The smaller South-Slav federation within Italy's composite crown system", href: "federal-kingdom-yugoslavia.html", tags: "federal yugoslavia serbia croatia bosnia montenegro umberto italy kingdom" },
  { title: "Umbertian Opening", description: "Umberto II's post-Mussolini transfer from direct empire to associated crowns", href: "umbertian-opening.html", tags: "umbertian opening umberto mussolini italy crowns greece yugoslavia 1960" },
  { title: "Italian Union of Crowns and Associated Kingdoms", description: "The composite dynastic order joining Italy's unequal associated realms", href: "italian-union-of-crowns.html", tags: "italian union crowns associated kingdoms italy greece yugoslavia albania ethiopia egypt syria" },
  { title: "Act of Crown Association for Greece", description: "The instrument restoring Greek domestic statehood beneath Italian reserved powers", href: "act-of-crown-association-greece.html", tags: "greece crown association act umberto italy kingdom orthodox succession" },
  { title: "First Far Eastern Republic", description: "The divided Japanese-protected buffer republic that preceded the Chita monarchy", href: "first-far-eastern-republic.html", tags: "first far eastern republic chita khabarovsk japan russian buffer 1947" },
  { title: "Far Eastern Federal Crisis", description: "The republican constitutional breakdown that opened the path to restoration", href: "far-eastern-federal-crisis.html", tags: "far eastern federal crisis chita khabarovsk republic manchukuo 1951 1954" },
  { title: "Chita Restoration", description: "The 1955–56 election and enthronement of Michael Andreevich Romanov", href: "chita-restoration.html", tags: "chita restoration tsar mikhail michael romanov monarchy 1955 1956" },
  { title: "Far Eastern Zemsky Sobor", description: "The constituent assembly that elected Tsar Mikhail and guaranteed the federation", href: "far-eastern-zemsky-sobor.html", tags: "far eastern zemsky sobor assembly chita election romanov federal" },
  { title: "Fundamental Law of the Russian Far Eastern State", description: "The federal constitution of the elected Chita monarchy", href: "far-eastern-fundamental-law.html", tags: "far eastern fundamental law constitution chita monarchy japan treaty" },
  { title: "Chita–Khabarovsk Dual-Capital System", description: "The division between the state's constitutional and operational capitals", href: "chita-khabarovsk-dual-capital.html", tags: "chita khabarovsk dual capital russian far east government" },
  { title: "Transport in the Russian Far Eastern State", description: "The rail, water, air, road, and tracked hierarchy of northern mobility", href: "far-eastern-transport-system.html", tags: "far eastern transport rail river aviation road tracked seasonal" },
  { title: "Civil Aviation in the Russian Far Eastern State", description: "The distributed airfield, weather, radio, medical, and passenger network", href: "far-eastern-civil-aviation.html", tags: "far eastern civil aviation bush planes airfields mikhail weather radio" },
  { title: "Aircraft Industry of the Russian Far Eastern State", description: "Licensed assembly, cold-weather adaptation, maintenance, and repair", href: "far-eastern-aircraft-industry.html", tags: "far eastern aircraft industry komsomolsk khabarovsk japan manchukuo utility" },
  { title: "Snow-and-Swamp Vehicles of the Russian Far East", description: "Tracked last-mile transport beyond maintained roads", href: "far-eastern-snow-vehicles.html", tags: "far eastern snow swamp vehicles tracked carriers track pods winter roads" }
];

const here = location.pathname.split("/").pop() || "index.html";

const flagAssets = {
  "germany.html": { src: "assets/flags/germany-1935.svg", alt: "Red, white, and black flag of the Greater German Reich", label: "National flag retained after 1945" },
  "united-states.html": { src: "assets/flags/united-states-48.svg", alt: "United States flag with forty-eight stars", label: "48-star flag; Alaska and Hawaii remain outside the Union" },
  "japan.html": { src: "assets/flags/japan.svg", alt: "White flag with a centered red sun of the Empire of Japan", label: "Imperial Japanese national flag" },
  "korea.html": { src: "assets/flags/japan.svg", alt: "Japanese national flag used for Chōsen", label: "Japanese national flag used for Chōsen", secondarySrc: "assets/flags/chosen-government-general-seal.svg", secondaryAlt: "Seal of the Government-General of Chōsen", secondaryLabel: "Regional arms · Government-General of Chōsen seal" },
  "philippines.html": { src: "assets/flags/philippines.svg", alt: "Flag of the Philippine Republic", label: "Philippine national flag" },
  "occitania.html": { src: "assets/flags/occitania.svg", alt: "Red flag with the yellow Occitan cross", label: "Occitan cross flag" },
  "northern-france.html": { src: "assets/flags/northern-france-petain.svg", alt: "French tricolor charged with Philippe Pétain's marshal standard", label: "Pétain standard · co-equal state flag", secondarySrc: "assets/flags/france-tricolor.svg", secondaryAlt: "Wartime blue, white, and red French tricolor", secondaryLabel: "Wartime French tricolor · co-equal state flag", secondaryKind: "flag" },
  "italy.html": { src: "assets/flags/italy-kingdom.svg", alt: "Crowned tricolor flag of the Kingdom of Italy", label: "Continuing royal Italian state flag" },
  "spain.html": { src: "assets/flags/spain-1945.svg", alt: "Red and yellow flag of the Spanish State", label: "Spanish State flag introduced in 1945" },
  "portugal.html": { src: "assets/flags/portugal.svg", alt: "Green and red flag of Portugal", label: "Portuguese national flag" },
  "belgium.html": { src: "assets/flags/belgium.svg", alt: "Black, yellow, and red Belgian tricolor", label: "Pre-1939 Belgian flag retained by the Reichsprotektorat" },
  "norway.html": { src: "assets/flags/norway.svg", alt: "Red Norwegian flag with a blue cross outlined in white", label: "Pre-1939 Norwegian flag retained by the Reichsprotektorat" },
  "denmark.html": { src: "assets/flags/denmark.svg", alt: "Red Danish Dannebrog with a white cross", label: "Pre-1939 Danish flag retained by the Reichsprotektorat" },
  "brittany.html": { src: "assets/flags/brittany.svg", alt: "Black and white Gwenn ha Du flag of Brittany", label: "Gwenn ha Du national flag" },
  "sweden.html": { src: "assets/flags/sweden.svg", alt: "Blue Swedish flag with a yellow Nordic cross", label: "Swedish national flag" },
  "finland.html": { src: "assets/flags/finland.svg", alt: "White Finnish flag with a blue Nordic cross", label: "Finnish national flag" },
  "hungary.html": { src: "assets/flags/hungary-kingdom.svg", alt: "Red, white, and green flag of the Kingdom of Hungary with the crowned arms", label: "Kingdom of Hungary flag retained from the interwar era" },
  "romania.html": { src: "assets/flags/romania.svg", alt: "Blue, yellow, and red Romanian tricolor", label: "Romanian national flag" },
  "bulgaria.html": { src: "assets/flags/bulgaria.svg", alt: "White, green, and red Bulgarian tricolor", label: "Bulgarian national flag" },
  "italian-protectorate-serbia.html": { src: "assets/flags/serbia.svg", alt: "Red, blue, and white Serbian tricolor", label: "Serbian national flag under the protectorate" },
  "federal-kingdom-yugoslavia.html": { src: "assets/flags/federal-yugoslavia.svg", alt: "Blue, white, and red flag of Federal Yugoslavia", label: "Royal Yugoslav tricolor" },
  "argentina.html": { src: "assets/flags/argentina.svg", alt: "Light blue and white Argentine flag with the Sun of May", label: "Argentine national flag" },
  "thailand.html": { src: "assets/flags/thailand.svg", alt: "Red, white, and blue flag of Thailand", label: "Thai national flag" },
  "burma.html": { src: "assets/flags/burma-1948.svg", alt: "Red, blue, and white 1948–1962 flag of the Union of Burma", label: "1948–1962 Union flag retained in setting" },
  "vietnam.html": { src: "assets/flags/vietnam-long-tinh.svg", alt: "Yellow Long Tinh flag with a red band", label: "Long Tinh national flag" },
  "cambodia.html": { src: "assets/flags/cambodia.svg", alt: "Blue and red Cambodian flag bearing Angkor Wat", label: "Cambodian national flag" },
  "laos.html": { src: "assets/flags/laos-luang-phrabang.svg", alt: "Red flag of Luang Phrabang bearing a white three-headed elephant", label: "Historic Luang Phrabang flag used by the Kingdom of Laos" },
  "manchukuo.html": { src: "assets/flags/manchukuo.svg", alt: "Yellow flag of Manchukuo with red, blue, white, and black canton stripes", label: "Manchukuo national flag retained from 1932" },
  "china.html": { src: "assets/flags/china-republic.svg", alt: "Blue Sky, White Sun, and a Wholly Red Earth flag of the Republic of China", label: "National flag of the Republic of China" },
  "vladivostok.html": { src: "assets/flags/vladivostok-russian-tricolor.svg", alt: "White, blue, and red Russian tricolor", label: "Russian tricolor used by the anti-Soviet protectorate · working convention" },
  "eastern-siberia.html": { src: "assets/flags/eastern-siberia.svg", alt: "White and green flag of Siberia", label: "Historic Siberian flag adopted by the client republic · working convention" },
  "chukotka.html": { src: "assets/flags/chukotka.svg", alt: "Blue regional flag of Chukotka with a white triangle and circular device", label: "Autonomous territorial flag · working convention" },
  "greece.html": { src: "assets/flags/greece.svg", alt: "Blue and white flag of Greece", label: "Historic Greek national flag retained under Italian rule" },
  "albania.html": { src: "assets/flags/albania-1939.svg", alt: "Red flag of the Italian-era Kingdom of Albania", label: "Kingdom of Albania flag introduced in 1939" },
  "montenegro.html": { src: "assets/flags/montenegro-kingdom.svg", alt: "Historic tricolor flag of the Kingdom of Montenegro", label: "Restored Montenegrin kingdom flag" },
  "syria.html": { src: "assets/flags/syria-independence.svg", alt: "Green, white, and black Syrian flag with three red stars", label: "Syrian independence flag retained by the associated kingdom" },
  "canada.html": { src: "assets/flags/canada-red-ensign.svg", alt: "Canadian Red Ensign with the national shield", label: "Canadian Red Ensign retained by the Commonwealth realm" },
  "australia.html": { src: "assets/flags/australia.svg", alt: "Blue Australian flag with the Union Flag and Southern Cross", label: "Australian national flag" },
  "new-zealand.html": { src: "assets/flags/new-zealand.svg", alt: "Blue New Zealand flag with the Union Flag and Southern Cross", label: "New Zealand national flag" },
  "south-africa.html": { src: "assets/flags/south-africa-1928.svg", alt: "Orange, white, and blue flag of the Union of South Africa", label: "Union flag retained from 1928" },
  "rhodesia.html": { src: "assets/flags/rhodesia-1968.svg", alt: "Green, white, and green Rhodesian flag bearing the coat of arms", label: "Rhodesian national flag" },
  "jordan.html": { src: "assets/flags/jordan.svg", alt: "Black, white, green, and red flag of Jordan with a white star", label: "Jordanian national flag" },
  "iran.html": { src: "assets/flags/iran-1964.svg", alt: "Green, white, and red Iranian state flag bearing the Lion and Sun", label: "Imperial Iranian state flag" },
  "afghanistan.html": { src: "assets/flags/afghanistan-1931.svg", alt: "Black, red, and green flag of the Kingdom of Afghanistan", label: "Kingdom flag retained from 1931" },
  "mexico.html": { src: "assets/flags/mexico.svg", alt: "Green, white, and red Mexican flag bearing the national arms", label: "Mexican national flag" },
  "brazil.html": { src: "assets/flags/brazil.svg", alt: "Green Brazilian flag with yellow diamond and blue globe", label: "Brazilian national flag" },
  "chile.html": { src: "assets/flags/chile.svg", alt: "Red, white, and blue Chilean flag with a white star", label: "Chilean national flag" },
  "peru.html": { src: "assets/flags/peru.svg", alt: "Red and white flag of Peru", label: "Peruvian national flag" },
  "venezuela.html": { src: "assets/flags/venezuela.svg", alt: "Yellow, blue, and red Venezuelan flag with stars", label: "Venezuelan national flag" },
  "colombia.html": { src: "assets/flags/colombia.svg", alt: "Yellow, blue, and red Colombian flag", label: "Colombian national flag" },
  "cuba.html": { src: "assets/flags/cuba.svg", alt: "Blue and white striped Cuban flag with red triangle and white star", label: "Cuban national flag" },
  "ecuador.html": { src: "assets/flags/ecuador.svg", alt: "Yellow, blue, and red flag of Ecuador with the national arms", label: "Ecuadorian national flag" },
  "uruguay.html": { src: "assets/flags/uruguay.svg", alt: "White and blue striped flag of Uruguay with the Sun of May", label: "Uruguayan national flag" },
  "paraguay.html": { src: "assets/flags/paraguay.svg", alt: "Red, white, and blue flag of Paraguay with the national seal", label: "Paraguayan national flag · obverse" },
  "bolivia.html": { src: "assets/flags/bolivia.svg", alt: "Red, yellow, and green civil flag of Bolivia", label: "Bolivian civil flag" },
  "panama.html": { src: "assets/flags/panama.svg", alt: "Quartered red, white, and blue flag of Panama", label: "Panamanian national flag" },
  "nicaragua.html": { src: "assets/flags/nicaragua.svg", alt: "Blue and white flag of Nicaragua with the national triangle", label: "Nicaraguan national flag" },
  "suriname.html": { src: "assets/flags/suriname.svg", alt: "Green, white, and red flag of Suriname with a yellow star", label: "Surinamese national flag" },
  "honduras.html": { src: "assets/flags/honduras.svg", alt: "Blue and white Honduran flag with five stars", label: "Honduran national flag" }
};

const expandedNav = [
  ["Empire of Japan", "japan.html"],
  ["United States", "united-states.html"],
  ["Latin Bloc", "latin-bloc.html"],
  ["Philippine Republic", "philippines.html"],
  ["Eastern Reichskommissariats", "eastern-reichskommissariats.html"],
  ["Wolfgang F. Hitler", "wolfgang.html"],
  ["Hitler Family", "hitler-family.html"],
  ["Second World War", "world-war-ii.html"]
];

const foundationNav = [
  ["List of Countries", "countries.html"],
  ["Kingdom of Italy", "italy.html"],
  ["National Government of China", "china.html"],
  ["Mittelafrika", "mittelafrika.html"],
  ["Russian & Siberian Successors", "siberia.html"]
];

const topicNav = [
  ["GEACPS", "geacps.html"],
  ["U.S. Political Parties", "american-parties.html"],
  ["American Elections", "american-elections.html"],
  ["U.S. Presidents", "presidents.html"],
  ["Philippine War", "philippine-war.html"],
  ["Iceland Crisis", "iceland-crisis.html"],
  ["Kuwait War", "kuwait-war.html"],
  ["Falklands–Malvinas War", "falklands-war.html"],
  ["War of the Chiefs", "war-of-the-chiefs.html"],
  ["Tehran Concord", "tehran-concord.html"],
  ["Space Race", "space-programs.html"],
  ["Orbital Stations", "orbital-stations.html"],
  ["Ideologies & Parties", "ideologies.html"],
  ["Major Characters", "characters.html"],
  ["Everyday Life", "everyday-life.html"],
  ["Second World War Memory", "memory-of-the-second-world-war.html"],
  ["German Strategy Games", "german-strategy-games.html"],
  ["National China Institutions", "government-of-national-china.html"],
  ["Military Technology", "military-technology.html"],
  ["Reagan Era", "reagan-era.html"],
  ["Open Door Depression", "open-door-depression.html"],
  ["Five-Party Republic", "five-party-republic.html"],
  ["Frontier Orbital", "frontier-orbital-lines.html"],
  ["GEACPS Preservation", "japanese-preservationism.html"]
];

topicNav.push(["American Culture", "culture-of-the-united-states.html"]);
topicNav.push(["American Mission State", "hemispheric-renewal-act.html"]);
topicNav.push(["Programming Languages", "programming-languages.html"]);
topicNav.push(["Material Culture", "material-culture.html"]);
topicNav.push(["German Imperial System", "german-imperial-administration.html"]);

topicNav.push(["UNICODE 80", "unicode-80.html"]);
topicNav.push(["Japanese Semiconductors", "japanese-semiconductor-industry.html"]);
topicNav.push(["Inner Asian Frontier", "xinjiang.html"]);
topicNav.push(["German Ruling Household", "hitler-family.html"]);
topicNav.push(["German Second Generation", "german-leadership.html"]);
topicNav.push(["Mauerwerk", "mauerwerk.html"]);
topicNav.push(["Lisbon Conference", "lisbon-conference.html"]);
topicNav.push(["Second Battle of Britain", "second-battle-of-britain.html"]);
topicNav.push(["Breaking of the Raj", "breaking-of-the-raj.html"]);
topicNav.push(["Indian Wars", "western-indian-wars.html"]);
topicNav.push(["Bullion-Clearing System", "international-bullion-clearing-system.html"]);
topicNav.push(["Latin Scudo", "latin-scudo.html"]);
topicNav.push(["South Seas Government", "south-seas-general-government.html"]);
topicNav.push(["Pacific Frontiers", "pacific-frontier-islands.html"]);
topicNav.push(["Japanese Postwar Governments", "postwar-governments-of-japan.html"]);

const deepNav = [
  ["Indian Successor States", "india-successors.html"],
  ["Middle East", "middle-east.html"],
  ["British Africa", "british-africa.html"],
  ["Spanish State", "spain.html"],
  ["Portugal", "portugal.html"],
  ["American Hemisphere", "american-hemisphere.html"],
  ["Northern France", "northern-france.html"],
  ["Occitania", "occitania.html"],
  ["The Four Frances", "four-frances.html"],
  ["Chōsen", "korea.html"],
  ["Korean Language", "korean-language.html"],
  ["Manchukuo", "manchukuo.html"],
  ["Commonwealth Dominions", "commonwealth-dominions.html"],
  ["Computing Networks", "computing-networks.html"],
  ["Catholic Church", "catholic-church.html"],
  ["SS Order Faith", "ss-order-faith.html"],
  ["Taiwan", "taiwan.html"],
  ["East Indian States", "east-indies-successor-states.html"],
  ["Azad Hind", "azad-hind.html"]
];

deepNav.push(["Languages of Taiwan", "languages-of-taiwan.html"]);

topicNav.splice(8, 0, ["Computing History", "computing.html"]);

document.querySelectorAll(".sidebar nav").forEach(nav => {
  const section = document.createElement("section");
  section.className = "nav-section nav-expanded";
  section.innerHTML = `<h2 class="nav-heading">Expanded archive</h2>${expandedNav.map(([label, href]) => `<a data-nav href="${href}">${label}</a>`).join("")}`;
  nav.querySelector(".canon-key")?.before(section);
  const foundation = document.createElement("section");
  foundation.className = "nav-section nav-foundation";
  foundation.innerHTML = `<h2 class="nav-heading">Geographic foundation</h2>${foundationNav.map(([label, href]) => `<a data-nav href="${href}">${label}</a>`).join("")}`;
  nav.querySelector(".canon-key")?.before(foundation);
  const topics = document.createElement("section");
  topics.className = "nav-section nav-topics";
  topics.innerHTML = `<h2 class="nav-heading">Events & topic portals</h2>${topicNav.map(([label, href]) => `<a data-nav href="${href}">${label}</a>`).join("")}`;
  nav.querySelector(".canon-key")?.before(topics);
  const deep = document.createElement("section");
  deep.className = "nav-section nav-deep";
  deep.innerHTML = `<h2 class="nav-heading">Regional deep dives</h2>${deepNav.map(([label, href]) => `<a data-nav href="${href}">${label}</a>`).join("")}`;
  nav.querySelector(".canon-key")?.before(deep);
});

document.querySelectorAll("[data-mobile-nav]").forEach(button => button.setAttribute("aria-label", "Open navigation"));
document.querySelectorAll("[data-theme-toggle]").forEach(button => button.setAttribute("aria-label", "Toggle color theme"));
document.querySelectorAll("[data-random]").forEach(button => button.setAttribute("aria-label", "Open a random article"));
document.querySelectorAll(".search").forEach(search => {
  search.setAttribute("role", "search");
  search.querySelector("button")?.setAttribute("aria-label", "Search");
  search.querySelector("[data-search-results]")?.setAttribute("aria-live", "polite");
});

document.querySelectorAll("[data-nav]").forEach(link => {
  if (link.getAttribute("href") === here) link.classList.add("active");
});

const currentFlag = flagAssets[here];
const currentInfobox = document.querySelector(".infobox");
if (currentFlag && currentInfobox) {
  let flagFrame = currentInfobox.querySelector(".infobox-map");
  if (!flagFrame) {
    flagFrame = document.createElement("div");
    flagFrame.className = "infobox-map";
    currentInfobox.querySelector(".infobox-title")?.after(flagFrame);
  }
  flagFrame.classList.add("flag-display");
  flagFrame.innerHTML = `<img src="${currentFlag.src}" alt="${currentFlag.alt}"><small>${currentFlag.label} · <a href="assets/flags/CREDITS.md">source</a></small>`;
  if (currentFlag.secondarySrc) {
    const secondaryFrame = document.createElement("div");
    secondaryFrame.className = `infobox-map flag-display${currentFlag.secondaryKind === "flag" ? "" : " emblem-display"}`;
    secondaryFrame.innerHTML = `<img src="${currentFlag.secondarySrc}" alt="${currentFlag.secondaryAlt}"><small>${currentFlag.secondaryLabel} · <a href="assets/flags/CREDITS.md">source</a></small>`;
    flagFrame.after(secondaryFrame);
  }
}

document.querySelectorAll('a[href="latin-bloc.html"]').forEach(link => {
  if (link.textContent.trim() === "Occitania") link.href = "occitania.html";
});

const crossLinks = [
  { href: "commonwealth.html", terms: ["British Commonwealth", "Britain"] },
  { href: "germany.html", terms: ["Greater German Reich", "Greater Germany", "Germany"] },
  { href: "japan.html", terms: ["Empire of Japan", "Japanese Empire", "Japan"] },
  { href: "united-states.html", terms: ["United States"] },
  { href: "american-hemisphere.html", terms: ["American Hemisphere"] },
  { href: "latin-bloc.html", terms: ["Latin Catholic bloc", "Latin Bloc"] },
  { href: "danube-balkan-settlement.html", terms: ["Danube and Balkan Settlement", "Balkan settlement"] },
  { href: "german-italian-rivalry.html", terms: ["German–Italian Strategic Rivalry", "German-Italian Strategic Rivalry", "Axis divorce"] },
  { href: "balkan-missions-crisis.html", terms: ["Balkan Missions Crisis"] },
  { href: "bulgaria.html", terms: ["Kingdom of Bulgaria", "Bulgaria"] },
  { href: "sofia-procurement-crisis.html", terms: ["Sofia Procurement Crisis"] },
  { href: "italian-protectorate-serbia.html", terms: ["Italian Protectorate of Serbia", "Serbian protectorate"] },
  { href: "federal-kingdom-yugoslavia.html", terms: ["Federal Kingdom of Yugoslavia", "Federal Yugoslavia"] },
  { href: "umbertian-opening.html", terms: ["Umbertian Opening", "Umbertian opening"] },
  { href: "italian-union-of-crowns.html", terms: ["Italian Union of Crowns and Associated Kingdoms", "Italian Union of Crowns", "union of crowns"] },
  { href: "act-of-crown-association-greece.html", terms: ["Act of Crown Association for Greece", "Act of Crown Association"] },
  { href: "first-far-eastern-republic.html", terms: ["First Far Eastern Republic"] },
  { href: "far-eastern-federal-crisis.html", terms: ["Far Eastern Federal Crisis", "federal crisis"] },
  { href: "chita-restoration.html", terms: ["Chita Restoration"] },
  { href: "far-eastern-zemsky-sobor.html", terms: ["Far Eastern Zemsky Sobor"] },
  { href: "far-eastern-fundamental-law.html", terms: ["Fundamental Law of the Russian Far Eastern State", "Far Eastern Fundamental Law"] },
  { href: "chita-khabarovsk-dual-capital.html", terms: ["Chita–Khabarovsk dual-capital system", "Chita-Khabarovsk dual-capital system"] },
  { href: "far-eastern-transport-system.html", terms: ["Far Eastern Transport System", "transport in the Russian Far Eastern State"] },
  { href: "far-eastern-civil-aviation.html", terms: ["Civil Aviation in the Russian Far Eastern State", "Far Eastern Civil Aviation"] },
  { href: "far-eastern-aircraft-industry.html", terms: ["Aircraft Industry of the Russian Far Eastern State", "Far Eastern Aircraft Industry"] },
  { href: "far-eastern-snow-vehicles.html", terms: ["Snow-and-Swamp Vehicles of the Russian Far East", "snow-and-swamp carriers"] },
  { href: "countries.html#einheitspakt", terms: ["Einheitspakt"] },
  { href: "corporate-politics-geacps.html", terms: ["Corporate Politics in the Greater East Asian Co-Prosperity Sphere", "Corporate Politics in the GEACPS"] },
  { href: "corporate-host-bargain.html", terms: ["Corporate–Host Bargain", "Corporate-Host Bargain"] },
  { href: "associated-state-economic-nationalism.html", terms: ["Associated-State Economic Nationalism", "associated-state economic nationalism"] },
  { href: "mantetsu-manchukuo-disputes.html", terms: ["Mantetsu–Manchukuo Disputes", "Mantetsu-Manchukuo disputes"] },
  { href: "manchukuoan-industrial-sovereignty.html", terms: ["Manchukuoan Industrial Sovereignty"] },
  { href: "corporate-cities-manchukuo.html", terms: ["Corporate Cities in Manchukuo", "Manchukuoan corporate cities"] },
  { href: "japanese-settlement-manchukuo.html", terms: ["Japanese Settlement in Manchukuo", "Manshū Nihonjin", "Manchurian Japanese"] },
  { href: "japanese-corporate-patronage.html", terms: ["Japanese Corporate Patronage", "corporate patronage in the Co-Prosperity Sphere"] },
  { href: "zaibatsu-security-forces.html", terms: ["Zaibatsu Security Forces", "zaibatsu security organizations", "corporate security forces"] },
  { href: "japanese-corporate-scandals.html", terms: ["Japanese Corporate Scandals", "corporate scandals in the Co-Prosperity Sphere"] },
  { href: "japanese-cyberpunk.html", terms: ["Japanese Cyberpunk", "Japanese cyberpunk"] },
  { href: "mature-co-prosperity-system.html", terms: ["Mature Co-Prosperity System", "mature coordination"] },
  { href: "geacps.html", terms: ["Greater East Asia Co-Prosperity Sphere", "Dai Tōa Kyōeiken", "GEACPS"] },
  { href: "greater-east-asia-economic-board.html", terms: ["Greater East Asia Economic Board", "Daitōa Keizai-in", "Daitoa Keizai-in"] },
  { href: "japanese-imperial-economic-system.html", terms: ["Greater East Asia Co-Prosperity Economic System", "Japanese imperial economic system", "zaibatsu-mediated imperial developmentalism"] },
  { href: "imperial-financial-rectification.html", terms: ["Imperial Financial Rectification", "New Yen Settlement", "Teikoku Kin’yū Seiri", "Teikoku Kinyu Seiri"] },
  { href: "first-greater-east-asia-reconstruction-plan.html", terms: ["First Greater East Asia Reconstruction Plan"] },
  { href: "imperial-development-bank.html", terms: ["Imperial Development Bank", "Teikoku Kaihatsu Ginkō", "Teikoku Kaihatsu Ginko"] },
  { href: "japanese-imperial-corporate-houses.html", terms: ["Imperial Corporate Houses", "imperial corporate houses", "Japanese zaibatsu", "zaibatsu"] },
  { href: "sogo-shosha.html", terms: ["Sōgō shōsha", "sogo shosha", "general trading companies"] },
  { href: "japanese-national-policy-corporations.html", terms: ["National-Policy Corporations", "national-policy corporations", "national-policy corporation", "kokusaku kaisha"] },
  { href: "japanese-yen-area.html", terms: ["Japanese Imperial Yen Area", "Imperial Yen Area", "layered yen area"] },
  { href: "greater-east-asia-clearing-yen.html", terms: ["Greater East Asia Clearing Yen", "Clearing Yen", "Daitōa Seisan-en", "Daitoa Seisan-en"] },
  { href: "imperial-food-agency.html", terms: ["Imperial Food Agency", "Minimum Subsistence Principle"] },
  { href: "protected-national-enterprises-japan.html", terms: ["Protected National Enterprises", "Protected National Enterprise", "soft-budget problem"] },
  { href: "greater-east-asia-prosperity-plan.html", terms: ["Greater East Asia Prosperity Plan"] },
  { href: "home-return-mandate.html", terms: ["National Home and Return Mandate", "Home and Return Mandate"] },
  { href: "unicode-80.html", terms: ["UNICODE 80"] },
  { href: "biak-space-center.html", terms: ["Biak Space and Air District", "Biak equatorial complex", "Biak"] },
  { href: "japanese-pacific-territories.html", terms: ["Japanese Pacific Territories", "South Pacific imperial territories", "Integral Japanese Micronesia"] },
  { href: "italy.html", terms: ["Kingdom of Italy", "Italian empire", "Italy"] },
  { href: "china.html", terms: ["National Government of China", "Nanjing China", "China"] },
  { href: "mateo-de-vera.html", terms: ["Colonel Mateo de Vera", "Mateo de Vera"] },
  { href: "elena-magsalin.html", terms: ["Elena “Lena” Magsalin", "Elena Magsalin", "Lena Magsalin"] },
  { href: "isidro-cabahug.html", terms: ["Captain Isidro Cabahug", "Isidro Cabahug"] },
  { href: "davao-papers.html", terms: ["Davao Papers"] },
  { href: "luneta-shootings.html", terms: ["Luneta shootings", "Luneta crisis"] },
  { href: "baguio-manila-settlement.html", terms: ["Baguio Truce and Manila Accords", "Baguio Truce", "Manila Accords", "Treaty of Cebu", "Cebu Declaration"] },
  { href: "philippine-independence-fleet.html", terms: ["Philippine Independence Fleet", "Independence Fleet"] },
  { href: "philippines.html", terms: ["Philippine Republic", "Philippine settlement", "Philippines"] },
  { href: "philippine-war.html", terms: ["Philippine War"] },
  { href: "eastern-reichskommissariats.html", terms: ["Eastern Reichskommissariats", "Reichskommissariats", "eastern empire"] },
  { href: "reichskommissariat-ostland.html", terms: ["Reichskommissariat Ostland", "Ostland"] },
  { href: "reichskommissariat-ukraine.html", terms: ["Reichskommissariat Ukraine"] },
  { href: "reichskommissariat-moskowien.html", terms: ["Reichskommissariat Moskowien", "Moskowien", "Adolfstadt an der Wolga"] },
  { href: "reichskommissariat-kaukasien.html", terms: ["Reichskommissariat Kaukasien", "Kaukasien"] },
  { href: "conquest-intoxication.html", terms: ["conquest intoxication"] },
  { href: "eastern-quota-crisis.html", terms: ["Eastern quota crisis", "quota crisis"] },
  { href: "germanization-of-sovereignty.html", terms: ["Germanization of sovereignty"] },
  { href: "eastern-estate-order.html", terms: ["Eastern estate order", "estate order"] },
  { href: "eastern-social-hierarchy.html", terms: ["Eastern social hierarchy", "indigenous service estate", "SS Order nobility"] },
  { href: "eastern-auxiliary-system.html", terms: ["Eastern auxiliary system", "native auxiliaries"] },
  { href: "eastern-language-policy.html", terms: ["Eastern language policy", "generational script loss"] },
  { href: "eastern-occupational-education.html", terms: ["Eastern occupational education", "occupational licensing"] },
  { href: "eastern-resistance-system.html", terms: ["Eastern resistance", "selective repression"] },
  { href: "eastern-automation.html", terms: ["Eastern automation", "automated rail corridors"] },
  { href: "german-colonial-middle-class.html", terms: ["German colonial middle class", "Ostpraxisjahr", "Ostdienstjahr"] },
  { href: "eastern-family-economy.html", terms: ["Eastern family economies", "family wage"] },
  { href: "mittelafrika.html", terms: ["Reichskommissariat Mittelafrika", "Mittelafrika"] },
  { href: "counting-wars.html", terms: ["Counting Wars"] },
  { href: "general-registration.html", terms: ["General Registration of Mittelafrika", "General Registration"] },
  { href: "mosaic-order.html", terms: ["Mosaic Order"] },
  { href: "african-language-mediation-service.html", terms: ["African Language and Mediation Service"] },
  { href: "tribal-cadastre.html", terms: ["Tribal Cadastre"] },
  { href: "mosaik-system.html", terms: ["MOSAIK system", "MOSAIK"] },
  { href: "kongo-gesamtwerk.html", terms: ["Kongo-Gesamtwerk", "Kongowerk"] },
  { href: "kongo-ausbaukommission.html", terms: ["Kongo-Ausbaukommission"] },
  { href: "kongowerke-ag.html", terms: ["Kongowerke AG"] },
  { href: "malebo-sperrwerk.html", terms: ["Malebo-Sperrwerk"] },
  { href: "inga-werke.html", terms: ["Inga-Werke"] },
  { href: "kongosee-eingreifgruppe.html", terms: ["Kongosee-Eingreifgruppe", "Seefeuerwehr"] },
  { href: "kongosee-stromschutz.html", terms: ["Kongosee- und Stromschutz", "Kongosee-Sicherungsverband", "Kongoseeflotte", "Kongoflotte"] },
  { href: "kongosee.html", terms: ["Kongosee"] },
  { href: "kongostadt.html", terms: ["Kongostadt"] },
  { href: "combat-fragmented-terrain.html", terms: ["Gefechtsführung im zerschnittenen Raum", "Combat in Fragmented Terrain"] },
  { href: "siberia.html", terms: ["Russian and Siberian successor states", "Siberian successor states", "Russia beyond the Urals"] },
  { href: "wolfgang.html", terms: ["Wolfgang Friedrich Hitler", "Wolfgang"] },
  { href: "hitler-family.html", terms: ["Hitler family", "Hitler household"] },
  { href: "imperial-limited-war-directive.html", terms: ["Imperial Limited-War Directive", "Limited Southern War Directive", "Limited Southern War"] },
  { href: "british-defeat-reconstruction.html", terms: ["British Defeat and Reconstruction"] },
  { href: "friedensbrot-myth.html", terms: ["Unternehmen Friedensbrot", "Friedensbrot Myth"] },
  { href: "loans-to-a-drowning-man.html", terms: ["Loans to a Drowning Man"] },
  { href: "westminster-crisis-1947.html", terms: ["Westminster Crisis of 1947", "Westminster Crisis"] },
  { href: "white-parachute-election.html", terms: ["1947 United Kingdom General Election", "White Parachute Election", "Election of the New Men", "Bread Election"] },
  { href: "reconstruction-ministry.html", terms: ["minority Reconstruction Ministry", "Reconstruction Ministry"] },
  { href: "reconstruction-truce.html", terms: ["Reconstruction Truce", "November Understanding"] },
  { href: "release-and-resettlement-scheme.html", terms: ["Release and Resettlement Scheme"] },
  { href: "national-reconstruction-corps.html", terms: ["National Reconstruction Corps", "Brick Corps"] },
  { href: "merchant-fleet-renewal-act.html", terms: ["Merchant Fleet Renewal Act"] },
  { href: "commonwealth-standard-ship-programme.html", terms: ["Commonwealth Standard Ship Programme"] },
  { href: "strategic-industries-arsenal-continuity-act.html", terms: ["Strategic Industries and Arsenal Continuity Act", "Arsenal Continuity Act"] },
  { href: "national-health-family-security-act.html", terms: ["National Health and Family Security Act"] },
  { href: "royal-civil-works-service.html", terms: ["Royal Civil Works Service"] },
  { href: "algiers-capitulation.html", terms: ["Algiers Capitulation", "African Dunkirk", "Dunkirk Without the Boats"] },
  { href: "british-operation-torch.html", terms: ["Operation Torch"] },
  { href: "second-battle-of-britain.html", terms: ["Second Battle of Britain"] },
  { href: "lisbon-conference.html", terms: ["Lisbon Conference", "Lisbon settlement"] },
  { href: "operation-homeward.html", terms: ["Operation Homeward", "Homecoming Fleet"] },
  { href: "world-war-ii.html", terms: ["Second World War", "long war"] },
  { href: "german-soviet-war.html", terms: ["German–Soviet War", "German-Soviet War"] },
  { href: "german-eastern-offensives-1945.html", terms: ["German eastern offensives of 1945", "1945 eastern offensives"] },
  { href: "collapse-soviet-strategic-centers.html", terms: ["Soviet western strategic centers", "western strategic centers"] },
  { href: "soviet-collapse.html", terms: ["Soviet collapse of 1945–1946", "Soviet collapse"] },
  { href: "removal-of-stalin.html", terms: ["removal and execution of Joseph Stalin", "removal of Stalin"] },
  { href: "soviet-emergency-leadership.html", terms: ["Soviet collective survival leadership", "collective survival leadership"] },
  { href: "joseph-stalin.html", terms: ["Joseph Stalin", "Stalin"] },
  { href: "georgy-malenkov.html", terms: ["Georgy Malenkov", "Malenkov"] },
  { href: "vyacheslav-molotov.html", terms: ["Vyacheslav Molotov", "Molotov"] },
  { href: "lavrentiy-beria.html", terms: ["Lavrentiy Beria", "Beria"] },
  { href: "georgy-zhukov.html", terms: ["Georgy Zhukov", "Zhukov"] },
  { href: "nikita-khrushchev.html", terms: ["Nikita Khrushchev", "Khrushchev"] },
  { href: "ural-settlement.html", terms: ["Ural settlement"] },
  { href: "great-eastern-evacuation.html", terms: ["evacuation beyond the Urals", "eastern evacuation"] },
  { href: "fragmentation-soviet-east.html", terms: ["fragmentation of the Soviet east", "Soviet successor space"] },
  { href: "soviet-military-industrial-diaspora.html", terms: ["Soviet military-industrial diaspora", "military-industrial diaspora", "Soviet industrial diaspora"] },
  { href: "industrial-asylum.html", terms: ["industrial asylum"] },
  { href: "paired-design-bureau-system.html", terms: ["paired design-bureau system", "paired-bureau system"] },
  { href: "indian-armored-design-genealogies.html", terms: ["Indian armored design genealogies", "armored design genealogies"] },
  { href: "vijaya-tank.html", terms: ["Vijaya Model 62", "Model 62 Vijaya", "Vijaya A", "Vijaya"] },
  { href: "congress-indian-ordnance-system.html", terms: ["Congress Indian ordnance system", "Congress ordnance system"] },
  { href: "hindustani-military-industry.html", terms: ["military industry of Hindustan", "Hindustani military industry"] },
  { href: "hyderabadi-arms-industry.html", terms: ["arms industry of Hyderabad", "Hyderabadi arms industry"] },
  { href: "russian-technical-communities-india.html", terms: ["Russian technical communities in India", "Russian technical communities"] },
  { href: "american-parties.html", terms: ["Political parties in the United States", "American political parties", "Democratic-Republican Party", "Democratic-Republicans", "National Renewal", "party system"] },
  { href: "american-elections.html", terms: ["Stolen Mandate", "American presidential elections"] },
  { href: "presidents.html", terms: ["List of Presidents of the United States", "presidential succession", "presidential sequence"] },
  { href: "iceland-crisis.html", terms: ["Iceland Crisis", "Mid-Atlantic Ridge Accord", "Atlantic Accord"] },
  { href: "kuwait-war.html", terms: ["Kuwait War"] },
  { href: "operation-covenant.html", terms: ["Operation Covenant"] },
  { href: "muscat-articles.html", terms: ["Muscat Articles"] },
  { href: "falklands-war.html", terms: ["Falklands–Malvinas War", "Falklands War", "Second Torch", "Punta del Este Protocols"] },
  { href: "war-of-the-chiefs.html", terms: ["Mittelafrikanischer Häuptlingskrieg", "Häuptlingskrieg", "War of the Chiefs"] },
  { href: "second-mosaic-settlement.html", terms: ["Second Mosaic Settlement", "Performance and Participation Order"] },
  { href: "tehran-concord.html", terms: ["Tehran Concord"] },
  { href: "latin-space-community.html", terms: ["Latin Space Community", "Latin Space Convention"] },
  { href: "luigi-broglio.html", terms: ["Luigi Broglio", "Broglio"] },
  { href: "san-marco-space-centre.html", terms: ["San Marco Equatorial Centre", "San Marco equatorial center", "San Marco Space Centre", "San Marco Space Center", "San Marco"] },
  { href: "aquila-program.html", terms: ["Aquila program", "Aquila 0", "Aquila I", "Aquila"] },
  { href: "concordia-orbital-program.html", terms: ["Concordia orbital program", "Concordia-A", "Mercurius cargo", "Mercurius"] },
  { href: "stella-maris.html", terms: ["Stella Maris"] },
  { href: "weather-commons.html", terms: ["International Meteorological Satellite Service", "San Marco Meteorological Accords", "Common Meteorological Telemetry and Exchange Standard", "CMTES", "Weather Commons"] },
  { href: "space-programs.html", terms: ["German space program", "American space program", "Japanese space program", "space programs"] },
  { href: "orbital-stations.html", terms: ["Orbitaler Raumhafen", "Raumhafen"] },
  { href: "ideologies.html", terms: ["political ideologies", "ideologies and parties"] },
  { href: "characters.html", terms: ["major-character index", "Character Dossier"] },
  { href: "everyday-life.html", terms: ["everyday life", "daily life"] },
  { href: "memory-of-the-second-world-war.html", terms: ["Memory of the Second World War", "Second World War memory", "postwar consensus", "settlement myths"] },
  { href: "german-war-memory.html", terms: ["German war memory", "war memory in Germany"] },
  { href: "japanese-war-memory.html", terms: ["Japanese war memory", "war memory in Japan"] },
  { href: "latin-war-memory.html", terms: ["Latin war memory", "war memory in the Latin Bloc"] },
  { href: "british-war-memory.html", terms: ["British war memory", "war memory in Britain"] },
  { href: "american-intervention-debate.html", terms: ["American intervention debate", "victory school", "long-war school", "fortress school", "limited-intervention school", "mission-nationalist interpretation", "spectator war"] },
  { href: "german-strategy-games.html", terms: ["Strategic video games in Germany", "German strategy games", "strategic war game", "Stabsspiel"] },
  { href: "everyday-life-in-japan.html", terms: ["Everyday life in Japan", "victory austerity"] },
  { href: "government-of-national-china.html", terms: ["Government of National China", "Chinese provincial confederation", "provincial confederation"] },
  { href: "national-examination-settlement.html", terms: ["National Examination Settlement", "Classical and Administrative Examination", "Practical Service Examination", "Technical and Professional Examination"] },
  { href: "languages-of-national-china.html", terms: ["Languages of National China", "Chinese language order", "classical national elite", "bilingual imperial technical elite"] },
  { href: "economy-of-national-china.html", terms: ["Economy of National China", "protected prosperity", "strategic industrial ceiling", "industrial ceiling"] },
  { href: "culture-of-national-china.html", terms: ["Culture of National China", "Classical Settlement", "classical republic"] },
  { href: "mass-media-in-national-china.html", terms: ["Mass media in National China", "Chinese media world", "Chinese media"] },
  { href: "regions-of-national-china.html", terms: ["Regions of National China", "Regional Chinas"] },
  { href: "sino-japanese-guardianship.html", terms: ["Sino-Japanese guardianship", "Japanese guardianship of China", "living wall"] },
  { href: "national-learning-practical-state.html", terms: ["National Learning and Practical State movement", "National Learning and Practical State", "status reform"] },
  { href: "military-technology.html", terms: ["military technology", "armament references"] },
  { href: "computing.html", terms: ["history of computing", "computer history", "computing"] },
  { href: "breaking-of-the-raj.html", terms: ["Breaking of the Raj"] },
  { href: "operation-tideway.html", terms: ["Operation Tideway", "Calcutta Flight", "White Departure", "Abandonment of Bengal"] },
  { href: "colombo-armistice-system.html", terms: ["Colombo Armistice System", "Colombo System", "Colombo Armistices"] },
  { href: "northern-indian-war.html", terms: ["Northern Indian War", "Preparatory War"] },
  { href: "patna-offensive-1970.html", terms: ["1970 Patna Offensive", "Patna Offensive"] },
  { href: "disaster-window-doctrine.html", terms: ["disaster window doctrine", "disaster window", "disaster warfare"] },
  { href: "bhola-cyclone.html", terms: ["1970 Bhola cyclone", "Bhola cyclone"] },
  { href: "patna-front.html", terms: ["Patna front", "Patna line", "Bihar–Patna front", "Bihar-Patna front"] },
  { href: "river-warfare-northern-india.html", terms: ["river warfare in northern India", "Ganges–Brahmaputra warfare", "Ganges-Brahmaputra warfare"] },
  { href: "disaster-relief-azad-hind.html", terms: ["disaster relief in Azad Hind", "Azad Hind relief system"] },
  { href: "civil-defense-northern-india.html", terms: ["civil defense in northern India", "northern Indian civil defense"] },
  { href: "chittagong-relief-crisis.html", terms: ["Chittagong relief crisis", "1991 relief crisis"] },
  { href: "princely-states-india.html", terms: ["Princely States of India", "princely India", "princely states"] },
  { href: "chamber-of-princes-india.html", terms: ["Chamber of Princes", "Narendra Mandal"] },
  { href: "central-indian-princely-states.html", terms: ["Central Indian princely states", "Central Indian states"] },
  { href: "western-indian-princely-states.html", terms: ["Western Indian princely states", "western Indian states"] },
  { href: "eastern-indian-princely-states.html", terms: ["Eastern Indian princely states", "eastern princely states"] },
  { href: "hyderabad-machilipatnam-corridor.html", terms: ["Hyderabad–Machilipatnam corridor", "Hyderabad-Machilipatnam corridor", "Hyderabad corridor"] },
  { href: "princely-balance-of-power.html", terms: ["princely balance of power", "princes’ common strategic rule", "princes' common strategic rule"] },
  { href: "princely-arms-market.html", terms: ["princely arms market", "princely arms economy"] },
  { href: "object-279-india.html", terms: ["Object 279 assault-tank project", "Object 279-derived assault tank", "Object 279"] },
  { href: "western-succession-crisis.html", terms: ["Western Succession Crisis"] },
  { href: "first-baloch-wars.html", terms: ["First Baloch Wars", "first Baloch wars"] },
  { href: "quetta-campaigns.html", terms: ["Quetta campaigns", "Quetta campaign cycle"] },
  { href: "harappa-campaigns.html", terms: ["Harappa campaigns", "Harappa and lower-Punjab campaigns"] },
  { href: "modern-mounted-warfare-western-india.html", terms: ["modern mounted warfare", "mounted-rifle warfare", "modern mounted rifles"] },
  { href: "kashmir-khalistan-war.html", terms: ["Kashmir-Khalistan War", "Kashmir–Khalistan War"] },
  { href: "second-las-bela-war.html", terms: ["Second Las Bela War"] },
  { href: "hindustan-rajputana-war.html", terms: ["Hindustan-Rajputana War", "Hindustan–Rajputana War"] },
  { href: "western-indian-wars.html", terms: ["Western Indian Wars", "Western Indian conflicts"] },
  { href: "third-balochistan-war.html", terms: ["Third Balochistan War"] },
  { href: "congress-india.html", terms: ["Congress India", "Congress state"] },
  { href: "hindustan.html", terms: ["Hindu-majoritarian Hindustan", "Hindustan"] },
  { href: "khalistan.html", terms: ["Khalistan", "Khalsa State"] },
  { href: "kashmir.html", terms: ["Kashmir"] },
  { href: "sindh.html", terms: ["independent Sindh", "Sindh"] },
  { href: "kalat.html", terms: ["Khanate of Kalat", "Kalat"] },
  { href: "baloch-confederated-state.html", terms: ["Baloch Confederated State", "Baloch confederation"] },
  { href: "rajputana.html", terms: ["Rajputana concert", "Rajputana League", "Rajputana"] },
  { href: "madras-state.html", terms: ["State of Madras", "Madras State", "Tamil Madras"] },
  { href: "mysore.html", terms: ["Kingdom of Mysore", "Mysore"] },
  { href: "travancore-cochin.html", terms: ["Travancore–Cochin", "Travancore-Cochin Union", "Travancore-Cochin"] },
  { href: "maratha-states-union.html", terms: ["Maratha States Union", "Maratha Union"] },
  { href: "telangana-praja-samakhya.html", terms: ["Telangana Praja Samakhya", "Telangana People’s Federation", "Telangana People's Federation", "TPS"] },
  { href: "pakistan-emergency-government.html", terms: ["Pakistan Emergency Government", "Pakistani nationalist state", "Pakistani successor state"] },
  { href: "british-indian-ocean-command.html", terms: ["British Indian Ocean Command", "British Indian Expeditionary Corps", "BIEC"] },
  { href: "bombay-joint-port.html", terms: ["Bombay Joint Port Authority", "Bombay Defence Area", "Bombay defense area", "Bombay joint port"] },
  { href: "anti-tps-campaign.html", terms: ["Anti-TPS Campaign", "anti-TPS campaign"] },
  { href: "chartered-restoration-territories.html", terms: ["Chartered Restoration Territories", "chartered restoration territories", "chartered restoration territory"] },
  { href: "nepal.html", terms: ["Kingdom of Nepal", "Kathmandu conferences", "Kathmandu conference", "Nepal"] },
  { href: "bhutan.html", terms: ["Kingdom of Bhutan", "Bhutan"] },
  { href: "sikkim.html", terms: ["Kingdom of Sikkim", "Sikkim"] },
  { href: "afghan-protected-frontier.html", terms: ["Afghan-protected frontier", "Afghan-Protected Frontier", "Peshawar–Waziristan protected frontier", "Peshawar system", "Kabul–Peshawar commercial corridor"] },
  { href: "india-successors.html", terms: ["British-aligned Indian territories", "Indian successor states", "Bastion India"] },
  { href: "arab-ideological-triangle.html", terms: ["Arab Ideological Triangle", "Arab ideological triangle"] },
  { href: "meccan-doctrine.html", terms: ["Meccan Doctrine"] },
  { href: "arab-national-revolutionary-command.html", terms: ["Arab National Revolutionary Command"] },
  { href: "hashemite-national-monarchy.html", terms: ["Hashemite National Monarchy"] },
  { href: "royal-iraqi-government-in-exile.html", terms: ["Royal Iraqi Government in Exile"] },
  { href: "straits-security-settlement.html", terms: ["Straits Security Settlement"] },
  { href: "suez-regime.html", terms: ["Suez Regime"] },
  { href: "israel.html", terms: ["State of Israel", "Israel"] },
  { href: "iraq.html", terms: ["National Resurrection Iraq", "Iraq"] },
  { href: "saudi-arabia.html", terms: ["Kingdom of Saudi Arabia", "Saudi Arabia"] },
  { href: "turkey.html", terms: ["Republic of Turkey", "Turkey"] },
  { href: "middle-east.html", terms: ["Middle East"] },
  { href: "british-africa.html", terms: ["British Africa", "Cape system", "Cape route"] },
  { href: "spain.html", terms: ["Spanish State", "Spain"] },
  { href: "occitania.html", terms: ["Occitania"] },
  { href: "gregory-xvii.html", terms: ["Pope Gregory XVII", "Gregory XVII", "Gregorio Pietro Agagianian", "Agagianian"] },
  { href: "council-of-christ-the-king.html", terms: ["Council of Christ the King", "ecclesial patrimony"] },
  { href: "fulton-sheen.html", terms: ["Cardinal Fulton Sheen", "Fulton J. Sheen", "Fulton Sheen", "Sheen"] },
  { href: "paul-vi.html", terms: ["Pope Paul VI", "Franjo Šeper", "Franjo Seper", "Paul VI"] },
  { href: "pius-xiii.html", terms: ["Pope Pius XIII", "Giuseppe Siri", "Pius XIII"] },
  { href: "catholic-church.html", terms: ["Catholic Church"] },
  { href: "portugal.html", terms: ["Lusophone Empire", "Portugal"] },
  { href: "northern-france.html", terms: ["Northern France", "France proper", "État français", "Etat français"] },
  { href: "four-frances.html", terms: ["Four Frances"] },
  { href: "brittany.html", terms: ["Brittany"] },
  { href: "korea.html", terms: ["Korea under Japanese rule", "Chōsen", "Korea"] },
  { href: "korean-language.html", terms: ["Korean language", "Hangul"] },
  { href: "manchukuo.html", terms: ["Manchukuo"] },
  { href: "computing-networks.html", terms: ["Computing and Global Networks", "global network systems"] },
  { href: "ss-order-faith.html", terms: ["SS Order Faith", "Order Faith", "Wralda"] },
  { href: "commonwealth-dominions.html", terms: ["Commonwealth Dominions"] },
  { href: "belgium.html", terms: ["Reichsprotektorat Belgien"] },
  { href: "norway.html", terms: ["Reichsprotektorat Norwegen", "Norway"] },
  { href: "denmark.html", terms: ["Reichsprotektorat Dänemark", "Denmark"] },
  { href: "sweden.html", terms: ["Kingdom of Sweden", "Sweden"] },
  { href: "finland.html", terms: ["Republic of Finland", "Finland"] },
  { href: "hungary.html", terms: ["Kingdom of Hungary", "Hungary"] },
  { href: "romania.html", terms: ["Kingdom of Romania", "Romania"] },
  { href: "argentina.html", terms: ["Argentine Republic", "Argentina"] },
  { href: "thailand.html", terms: ["Kingdom of Thailand", "Thailand", "Siam"] },
  { href: "burma.html", terms: ["Union of Burma", "Burma"] },
  { href: "burmese-wars.html", terms: ["Burmese Companion War", "Rangoon Settlement", "Second Burmese War", "War of the Burmese States", "Sovereign States Experiment"] },
  { href: "bamar-union-core.html", terms: ["Bamar Union Core", "Bamar core", "Irrawaddy core"] },
  { href: "shan-state.html", terms: ["Federated Shan State", "Shan State"] },
  { href: "kachin-state.html", terms: ["Kachin State"] },
  { href: "chin-state.html", terms: ["Chin State"] },
  { href: "karen-state.html", terms: ["Karen State", "delta Karen"] },
  { href: "karenni-state.html", terms: ["Karenni State", "Kayah State"] },
  { href: "mon-state.html", terms: ["Mon State"] },
  { href: "arakan-state.html", terms: ["Arakan State", "Rakhine State"] },
  { href: "armed-federalism-burma.html", terms: ["Armed Federalism in Burma", "armed federalism", "State Guards"] },
  { href: "burmese-companion-war.html", terms: ["Burmese Companion War"] },
  { href: "rangoon-settlement.html", terms: ["Rangoon Settlement"] },
  { href: "burmese-federal-crisis.html", terms: ["Burmese Federal Crisis", "Federal Crisis"] },
  { href: "second-burmese-war.html", terms: ["Second Burmese War"] },
  { href: "sovereign-states-experiment.html", terms: ["Sovereign States Experiment"] },
  { href: "war-of-burmese-states.html", terms: ["War of the Burmese States"] },
  { href: "thai-protectorate-burma.html", terms: ["Thai Protectorate over Burma", "Thai protectorate", "Burmese protectorate"] },
  { href: "indochina.html", terms: ["Indochinese Administrations", "Indochina"] },
  { href: "vietnam.html", terms: ["Empire of Vietnam", "Vietnam", "Đại Nam", "Dai Nam"] },
  { href: "cambodia.html", terms: ["Kingdom of Cambodia", "Cambodia"] },
  { href: "laos.html", terms: ["Kingdom of Laos", "Laos", "Luang Phrabang"] },
  { href: "east-indies-successor-states.html", terms: ["Southern Archipelago States", "East Indian Successor States", "East Indies Administration", "Dutch East Indies", "former Dutch East Indies"] },
  { href: "vladivostok.html", terms: ["Vladivostok Protectorate", "Vladivostok Zone"] },
  { href: "russian-far-eastern-state.html", terms: ["Russian Far Eastern State", "Zemsky Sobor", "Eastern Siberian Republic"] },
  { href: "chukotka.html", terms: ["Chukotka Autonomous Territory", "Chukotka"] },
  { href: "greece.html", terms: ["Kingdom of Greece", "Greece under Italian Rule", "Greece"] },
  { href: "albania.html", terms: ["Kingdom of Albania", "Albania"] },
  { href: "montenegro.html", terms: ["Kingdom of Montenegro", "Protectorate of Montenegro", "Montenegro"] },
  { href: "syria.html", terms: ["Associated Kingdom of Syria", "Syria"] },
  { href: "canada.html", terms: ["Canada"] },
  { href: "australia.html", terms: ["Commonwealth of Australia", "Australia"] },
  { href: "new-zealand.html", terms: ["New Zealand"] },
  { href: "south-africa.html", terms: ["Union of South Africa", "South Africa"] },
  { href: "rhodesia.html", terms: ["Rhodesia"] },
  { href: "jordan.html", terms: ["Hashemite Kingdom of Jordan", "Jordan"] },
  { href: "iran.html", terms: ["Imperial State of Iran", "Iran"] },
  { href: "afghanistan.html", terms: ["Kingdom of Afghanistan", "Afghanistan"] },
  { href: "kazakhstan.html", terms: ["Republic of Kazakhstan", "Kazakhstan"] },
  { href: "mexico.html", terms: ["United Mexican States", "Mexico"] },
  { href: "brazil.html", terms: ["Federative Republic of Brazil", "Brazil"] },
  { href: "chile.html", terms: ["Republic of Chile", "Chile"] },
  { href: "peru.html", terms: ["Republic of Peru", "Peru"] },
  { href: "venezuela.html", terms: ["Republic of Venezuela", "Venezuela"] },
  { href: "colombia.html", terms: ["Republic of Colombia", "Colombia"] },
  { href: "cuba.html", terms: ["Republic of Cuba", "Cuba"] },
  { href: "honduras.html", terms: ["Republic of Honduras", "Honduras"] },
  { href: "indian-bullion-economy.html", terms: ["Indian bullion economy", "bullion-settlement order"] },
  { href: "american-gold-dollar.html", terms: ["Gold Dollar Restoration", "gold dollar"] },
  { href: "latin-scudo.html", terms: ["Latin Scudo", "Latin scudo"] },
  { href: "gold-sterling.html", terms: ["Sterling Resumption", "Gold Sterling Accounts", "gold sterling"] },
  { href: "gold-yen.html", terms: ["Indian Gold Settlement Yen", "Gold Yen"] },
  { href: "goldmark.html", terms: ["Goldverrechnungsmark", "Goldmark"] },
  { href: "international-bullion-clearing-system.html", terms: ["International Bullion-Clearing System", "international bullion-clearing system", "International Gold Settlement Convention"] },
  { href: "south-seas-general-government.html", terms: ["South Seas General Government"] },
  { href: "micronesian-administration.html", terms: ["Micronesian Administration"] },
  { href: "central-pacific-administration.html", terms: ["Central Pacific Administration"] },
  { href: "melanesian-administration.html", terms: ["Melanesian Administration"] },
  { href: "southern-eastern-pacific-administration.html", terms: ["Southern and Eastern Pacific Administration"] },
  { href: "fiji-under-japanese-rule.html", terms: ["Fiji under Japanese rule", "Japanese Fiji"] },
  { href: "new-caledonia-under-japanese-rule.html", terms: ["New Caledonia under Japanese rule", "Japanese New Caledonia"] },
  { href: "tahiti-under-japanese-rule.html", terms: ["Tahiti under Japanese rule", "Japanese Tahiti"] },
  { href: "pacific-frontier-islands.html", terms: ["Pacific frontier islands", "Pacific imperial seams"] },
  { href: "political-economy.html", terms: ["political economy", "Gelenkte Großraumwirtschaft"] },
  { href: "propaganda-intelligence.html", terms: ["cultural infiltration", "propaganda competition", "curated openness"] },
  { href: "nuclear-energy.html", terms: ["nuclear power", "energy order"] },
  { href: "motorsport.html", terms: ["Formula One", "Group 7"] },
  { href: "formula-one-world-championship.html", terms: ["Formula One World Championship", "world motor-racing championship"] },
  { href: "fia-geneva-sporting-secretariat.html", terms: ["FIA Geneva Sporting Secretariat", "Geneva sporting secretariat", "Fédération Internationale de l’Automobile"] },
  { href: "1952-formula-one-world-championship.html", terms: ["1952 Formula One World Championship", "International Grand Prix Cup"] },
  { href: "german-formula-one-program.html", terms: ["German Formula One program", "German works teams"] },
  { href: "italian-formula-one-program.html", terms: ["Italian Formula One program", "Italian racing field"] },
  { href: "british-formula-one-constructors.html", terms: ["British Formula One constructors", "British specialist constructors"] },
  { href: "american-international-motorsport.html", terms: ["American international motorsport", "North American Group 7"] },
  { href: "japanese-formula-one-program.html", terms: ["Japanese Formula One program", "Japanese participation"] },
  { href: "international-group-7-championship.html", terms: ["International Group 7 Championship", "International Group 7", "open sports-car category"] },
  { href: "racing-technology-transfer.html", terms: ["technology transfer from motor racing", "racing technology transfer"] },
  { href: "japanese-peruvian-relations.html", terms: ["Japan–Peru relations", "Japanese-Peruvian relations", "Peruvian bridgehead"] },
  { href: "peruvian-military-developmental-state.html", terms: ["Peruvian military-developmental state", "military-developmental republic"] },
  { href: "samanco-chimbote-complex.html", terms: ["Samanco–Chimbote complex", "Samanco-Chimbote complex"] },
  { href: "samanco-pacific-maritime-complex.html", terms: ["Samanco Pacific Maritime Complex", "Samanco maritime complex"] },
  { href: "chimbote-industrial-port.html", terms: ["Chimbote industrial port", "Chimbote port"] },
  { href: "japanese-arms-trade-peru.html", terms: ["Japanese arms trade with Peru", "Japanese arms exports to Peru"] },
  { href: "japanese-pacific-footholds-south-america.html", terms: ["Japanese Pacific footholds in South America", "Japanese South American footholds"] },
  { href: "samanco-crisis-1981.html", terms: ["Samanco Crisis", "1981 Samanco Crisis"] },
  { href: "lima-open-commerce-compact.html", terms: ["Lima Open Commerce Compact", "Lima compact"] },
  { href: "samanco-customs-incident.html", terms: ["Samanco Customs Incident", "Chimbote inspection incident"] },
  { href: "sunda.html", terms: ["Sunda", "Sundanese state", "western Java"] },
  { href: "mataram.html", terms: ["Mataram", "central Javanese court federation"] },
  { href: "east-java-madura.html", terms: ["East Java and Madura", "East Java–Madura"] },
  { href: "aceh.html", terms: ["Sultanate of Aceh", "Aceh"] },
  { href: "tapanuli.html", terms: ["Tapanuli", "Batak federal state"] },
  { href: "minangkabau.html", terms: ["Minangkabau", "west Sumatran state"] },
  { href: "sumatran-malay-federation.html", terms: ["Sumatran Malay Federation", "Malay Sumatran federation"] },
  { href: "kalimantan-federation.html", terms: ["Kalimantan Federation", "Kalimantan"] },
  { href: "south-sulawesi.html", terms: ["South Sulawesi", "Bugis–Makassar state"] },
  { href: "north-sulawesi.html", terms: ["North Sulawesi", "Minahasa–Gorontalo federation"] },
  { href: "bali.html", terms: ["Bali", "Balinese state"] },
  { href: "lombok-sumbawa.html", terms: ["Lombok–Sumbawa", "Lombok-Sumbawa"] },
  { href: "eastern-lesser-sunda-federation.html", terms: ["Eastern Lesser Sunda Federation", "Eastern Lesser Sundas"] },
  { href: "moluccan-federation.html", terms: ["Moluccan Federation", "Moluccas", "Maluku federation"] },
  { href: "bornean-malaya.html", terms: ["Bornean Malaya", "former Bornean Malaya"] },
  { href: "southern-archipelago-council.html", terms: ["Southern Archipelago Council", "archipelago council"] },
  { href: "japanese-east-indies.html", terms: ["Japanese East Indies", "Japanese East Indies administration"] },
  { href: "indonesian-unification-movement.html", terms: ["Indonesian Unification Movement", "Indonesian nationalism", "pan-Indonesian movement"] },
  { href: "platform-society.html", terms: ["platform society", "personal computing", "Bridge/16"] },
  { href: "palestine-war.html", terms: ["Palestine War"] },
  { href: "amman-settlement.html", terms: ["Amman Settlement"] },
  { href: "iraqi-civil-war.html", terms: ["Iraqi Civil War"] },
  { href: "ghana-accra.html", terms: ["Accra Disaster", "Ordered Particularism", "Accra Clause"] },
  { href: "german-leadership.html", terms: ["Reich Leadership Council", "Second Draft"] },
  { href: "otto-seidel.html", terms: ["Otto Albrecht Seidel", "Otto Seidel"] },
  { href: "ernst-keller.html", terms: ["Ernst Keller", "Great Hall vision", "Green Height"] },
  { href: "matthias-kern.html", terms: ["Dr. Matthias Kern", "Matthias Kern", "Security and Administrative Audit Office"] },
  { href: "werner-lenz.html", terms: ["Dr. Werner Lenz", "Werner Lenz", "Reich Fund for Special Development", "Technical Investment Board"] },
  { href: "ilmar-bielenstein.html", terms: ["Ilmar Bielenstein"] },
  { href: "mauerwerk.html", terms: ["Mauerwerk"] },
  { href: "katharina-hitler.html", terms: ["Katharina Elisabeth Hartmann Hitler", "Katharina Hitler"] },
  { href: "alexander-hitler.html", terms: ["Alexander Friedrich Hitler", "Alexander Hitler"] },
  { href: "konrad-hitler.html", terms: ["Konrad Matthias Hitler", "Konrad Hitler"] },
  { href: "johanna-hitler.html", terms: ["Johanna Elisabeth Hitler", "Johanna Hitler"] },
  { href: "sophie-hitler.html", terms: ["Sophie Eva Hitler", "Sophie Hitler"] },
  { href: "felix-hitler.html", terms: ["Felix Wolfgang Hitler", "Felix Hitler"] },
  { href: "helena-hitler.html", terms: ["Helena Katharina Hitler", "Helena Hitler"] },
  { href: "anna-hitler.html", terms: ["Anna Maria Hitler", "Anna Hitler"] },
  { href: "german-succession.html", terms: ["succession to Wolfgang Hitler", "succession triangle", "German succession"] },
  { href: "friedrich-hagedorn.html", terms: ["Friedrich Hagedorn"] },
  { href: "johannes-rabe.html", terms: ["Johannes Eberhard Rabe", "Johannes Rabe"] },
  { href: "matthias-falkenberg.html", terms: ["Matthias Falkenberg"] },
  { href: "elias-mercer.html", terms: ["Elias Rowan Mercer", "Elias Mercer"] },
  { href: "martin-keene.html", terms: ["Martin Avery Keene", "Martin Keene"] },
  { href: "david-ashcombe.html", terms: ["David Ashcombe"] },
  { href: "martin-calder.html", terms: ["Martin Calder"] },
  { href: "julian-rooke.html", terms: ["Sir Julian Rooke", "Julian Rooke"] },
  { href: "matthew-halden.html", terms: ["Matthew Halden"] },
  { href: "1987-nlcu-leadership-election.html", terms: ["1987 National Liberal–Constitutional Union leadership election", "1987 NLCU leadership election", "1987 leadership contest"] },
  { href: "1988-united-kingdom-general-election.html", terms: ["1988 United Kingdom general election", "1988 Peace Election", "Peace Election", "Build the Peace"] },
  { href: "halifax-understanding.html", terms: ["Halifax Understanding"] },
  { href: "reagan-era.html", terms: ["Reagan Era", "Five Falklands Rules", "Reciprocal Open Markets"] },
  { href: "open-door-depression.html", terms: ["Open Door Depression", "Second Great Depression"] },
  { href: "andrew-prescott-hale.html", terms: ["Andrew Prescott Hale", "Andrew Hale"] },
  { href: "caleb-harlan.html", terms: ["Caleb Harlan"] },
  { href: "1992-national-renewal-convention.html", terms: ["1992 National Renewal National Convention", "1992 National Renewal Convention", "1992 convention"] },
  { href: "1992-united-states-presidential-election.html", terms: ["1992 United States presidential election", "1992 presidential election", "election of 1992"] },
  { href: "1993-national-renewal-schism.html", terms: ["1993 National Renewal schism", "1993 Renewal schism", "National Renewal schism"] },
  { href: "five-party-republic.html", terms: ["Five-Party Republic", "five-party republic"] },
  { href: "american-orbital-vehicle-program.html", terms: ["American Orbital Vehicle Program", "Operational Vehicle series", "OV series", "runway-to-orbit fleet"] },
  { href: "ov-1a-pathfinder.html", terms: ["OV-1A Pathfinder", "Pathfinder orbital aircraft"] },
  { href: "columbia-spaceplane-program.html", terms: ["Columbia Spaceplane Program", "OV-2A Columbia", "OV-2B Columbia Tanker", "Columbia Tanker"] },
  { href: "liberty-spaceplane.html", terms: ["OV-3A Liberty", "OV-3B Liberty Automatic", "Liberty Automatic", "Liberty spaceplane"] },
  { href: "ov-4a-hercules.html", terms: ["OV-4A Hercules", "Hercules orbital aircraft"] },
  { href: "ov-5a-ranger.html", terms: ["OV-5A Ranger", "Ranger orbital aircraft"] },
  { href: "ov-6a-enterprise.html", terms: ["OV-6A Enterprise", "Enterprise orbital aircraft"] },
  { href: "canaveral-aerospace-field.html", terms: ["Canaveral Aerospace Field"] },
  { href: "orbital-port-columbia.html", terms: ["United States Orbital Port Columbia", "Orbital Port Columbia", "Columbia Station"] },
  { href: "kennedy-lunar-station.html", terms: ["Kennedy Lunar Station"] },
  { href: "project-pilgrim.html", terms: ["Project Pilgrim"] },
  { href: "liberty-yard.html", terms: ["Liberty Yard"] },
  { href: "commercial-orbital-transportation-act.html", terms: ["Commercial Orbital Transportation Act of 1985", "Commercial Orbital Transportation Act"] },
  { href: "orbital-law.html", terms: ["orbital law", "space law"] },
  { href: "geneva-space-weapons-convention.html", terms: ["Geneva Convention on Mass-Effect Weapons in Outer Space", "Geneva space weapons convention"] },
  { href: "stockholm-orbital-safety-convention.html", terms: ["Stockholm Orbital Safety and Salvage Convention", "Stockholm safety convention"] },
  { href: "geneva-orbital-incidents-agreement.html", terms: ["Geneva Orbital Incidents Agreement", "Geneva incidents agreement"] },
  { href: "orbital-weapons.html", terms: ["orbital weapons", "armed orbital systems"] },
  { href: "frontier-orbital-lines.html", terms: ["Frontier Orbital Lines", "Frontier Orbital", "Project Switchback"] },
  { href: "united-mongolian-state.html", terms: ["United Mongolian State", "Mengjiang"] },
  { href: "malay-bornean-war.html", terms: ["Malay–Bornean War", "Malay-Bornean War", "Bornean Malaya", "Federated Kingdom of Malaya"] },
  { href: "japanese-settlement-of-taiwan.html", terms: ["Japanese settlement of Taiwan", "postwar settlement of Taiwan", "Formosan settlement drive"] },
  { href: "languages-of-taiwan.html", terms: ["Languages of Taiwan", "Formosan languages", "Taiwanese Hokkien", "Formosan Hokkien"] },
  { href: "taiwan-preservation-movement.html", terms: ["Taiwan preservation movement", "Formosan preservation movement"] },
  { href: "japanese-semiconductor-industry.html", terms: ["Semiconductor industry in Japan", "Japanese semiconductor industry", "Japanese semiconductor system"] },
  { href: "xinjiang.html", terms: ["sovereign Xinjiang", "State of Xinjiang", "Xinjiang"] },
  { href: "tibet.html", terms: ["independent Tibet", "Tibetan state", "Tibet"] },
  { href: "japanese-frontier-bases.html", terms: ["Japanese frontier treaty-base system", "Japanese frontier bases", "Japanese treaty fortresses", "frontier treaty bases"] },
  { href: "assam-tibet-earthquake.html", terms: ["1950 Assam–Tibet earthquake", "Assam–Tibet earthquake", "Assam-Tibet earthquake"] },
  { href: "japanese-preservationism.html", terms: ["preservation movements", "preservation movement", "preservationism"] },
  { href: "columbia-generation.html", terms: ["Columbia Generation"] },
  { href: "last-republic.html", terms: ["The Last Republic", "Last Republic Panic"] },
  { href: "taiwan.html", terms: ["Taiwan", "Formosa", "Taihoku"] },
  { href: "malaya.html", terms: ["Federated Kingdom of Malaya", "protected Malaya"] },
  { href: "bornean-state.html", terms: ["Bornean State", "independent Bornean state"] },
  { href: "brunei.html", terms: ["Sultanate of Brunei", "Brunei"] },
  { href: "singapore.html", terms: ["Singapore"] },
  { href: "azad-hind.html", terms: ["Provisional Government of Free India", "Azad Hind"] },
  { href: "hyderabad.html", terms: ["State of Hyderabad", "Hyderabad"] },
  { href: "chittagong-cyclone.html", terms: ["Chittagong cyclone", "1991 Chittagong Cyclone"] },
  { href: "gabriel-landry.html", terms: ["Gabriel E. Landry", "Gabriel Landry"] },
  { href: "nathaniel-bell.html", terms: ["Nathaniel Reed Bell", "Nathaniel Bell"] },
  { href: "miriam-kincaid.html", terms: ["Miriam Kincaid"] },
  { href: "wesley-crane.html", terms: ["Wesley Crane"] },
  { href: "everett-cade.html", terms: ["Everett Cade"] },
  { href: "thomas-harwood.html", terms: ["Thomas Harwood"] },
  { href: "konrad-voss.html", terms: ["Konrad Elias Voss", "Konrad Voss"] },
  { href: "white-parachutes.html", terms: ["White Parachutes", "Bread Raid"] },
  { href: "brick-parliament.html", terms: ["White Parachute Election", "Brick Parliament", "Parliament of Strangers", "National Reconstruction Corps", "Brick Corps"] },
  { href: "mantetsu.html", terms: ["South Manchuria Railway Company", "Mantetsu"] },
  { href: "amur-crisis.html", terms: ["Amur Crisis", "Amur settlement"] },
  { href: "kazakh-russian-war.html", terms: ["Kazakh–Russian War", "Kazakh-Russian War"] },
  { href: "siberian-wars.html", terms: ["Siberian Wars", "Railway Wars", "armed normalization"] },
  { href: "omsk-novosibirsk-state.html", terms: ["Omsk–Novosibirsk dual state", "Omsk-Novosibirsk dual state", "Omsk–Novosibirsk state", "Omsk-Novosibirsk state"] },
  { href: "western-siberian-war.html", terms: ["Western Siberian War", "Omsk–Novosibirsk War", "Omsk-Novosibirsk War"] },
  { href: "yenisei-conflicts.html", terms: ["Yenisei conflicts", "Yenisei Conflicts"] },
  { href: "irkutsk-state.html", terms: ["Irkutsk state", "Irkutsk government", "Soviet-restorationist Irkutsk"] },
  { href: "baikal-frontier-conflict.html", terms: ["Baikal frontier conflict", "Baikal Frontier Conflict"] },
  { href: "russian-steppe-state.html", terms: ["Russian Steppe State", "Steppe State"] },
  { href: "ural-industrial-states.html", terms: ["Ural industrial states", "Ural city-states", "factory-defense states"] },
  { href: "siberian-black-market.html", terms: ["Siberian black market", "black economy of Siberia"] },
  { href: "ak-47-siberia.html", terms: ["AK-47", "Siberian AK", "Novosibirsk AK-47"] },
  { href: "krasnoyarsk-state.html", terms: ["Krasnoyarsk State", "Krasnoyarsk command", "Krasnoyarsk-centered authorities"] },
  { href: "tannu-tuva.html", terms: ["Tannu Tuva", "Tuvan People's Republic", "Tuvan state"] },
  { href: "tsar-mikhail.html", terms: ["Tsar Mikhail", "Michael Andreevich Romanov", "Michael Andreevich"] },
  { href: "mikhail-kalashnikov.html", terms: ["Mikhail Kalashnikov", "Mikhail Timofeyevich Kalashnikov", "Kalashnikov"] },
  { href: "council-three-indochinese-states.html", terms: ["Council of the Three Indochinese States", "Council of Three Indochinese States", "Council of the Indochinese States"] },
  { href: "papua-new-guinea.html", terms: ["Papua New Guinea"] },
  { href: "timeline.html#succession", terms: ["succession settlement"] }
  ,{ href: "culture-of-the-united-states.html", terms: ["Culture of the United States", "American culture", "mission modernism"] }
  ,{ href: "spectator-war.html", terms: ["Spectator War", "spectator-war culture"] }
  ,{ href: "rocket-awakening.html", terms: ["Rocket Awakening", "delayed Fifties"] }
  ,{ href: "conspiracy-republic.html", terms: ["Conspiracy Republic", "institutional horror"] }
  ,{ href: "american-popular-music.html", terms: ["American popular music", "American rock and roll"] }
  ,{ href: "buddy-holly.html", terms: ["Buddy Holly", "Charles Hardin Holley"] }
  ,{ href: "ritchie-valens.html", terms: ["Ritchie Valens", "Richard Steven Valenzuela"] }
  ,{ href: "big-bopper.html", terms: ["The Big Bopper", "J. P. Richardson", "Jiles Perry Richardson"] }
  ,{ href: "motown-cultural-system.html", terms: ["Motown cultural system", "Motown"] }
  ,{ href: "black-american-public-sphere.html", terms: ["Black American public sphere", "parallel Black media"] }
  ,{ href: "american-cottage-industry-revival.html", terms: ["American cottage-industry revival", "cottage-industry revival", "home enterprise"] }
  ,{ href: "united-states-aerospace-force.html", terms: ["United States Aerospace Force", "Aerospace Force", "United States Aerospace Command", "Aerospace Command"] }
  ,{ href: "hemispheric-renewal-act.html", terms: ["Hemispheric Renewal Act"] }
  ,{ href: "honduran-security-crisis.html", terms: ["Honduran Security Crisis", "Honduras intervention"] }
  ,{ href: "venezuelan-intervention.html", terms: ["Venezuelan Intervention", "Venezuela intervention", "Caracas Security Settlement"] }
  ,{ href: "maracaibo-shock.html", terms: ["Maracaibo Shock", "Maracaibo lesson"] }
  ,{ href: "establishment-compact.html", terms: ["Establishment Compact", "House Betrayal", "Establishment Coup"] }
  ,{ href: "national-mission-productive-enterprise-act.html", terms: ["National Mission and Productive Enterprise Act", "Productive Enterprise program", "National Production Institutes"] }
  ,{ href: "project-zenith.html", terms: ["Project Zenith", "OSV-1A Zenith", "OSV-1 Zenith"] }
  ,{ href: "rockwell-commission.html", terms: ["Rockwell Commission", "Commission on the Assassination of George Lincoln Rockwell"] }
  ,{ href: "national-unity-amendment.html", terms: ["National Unity and Constitutional Defense Amendment", "National Unity amendment"] }
  ,{ href: "american-productive-commonwealth-act.html", terms: ["American Productive Commonwealth Act", "1982 productivity recession"] }
  ,{ href: "narrative-shaping-memorandum.html", terms: ["Narrative Shaping for the Post-Buchanan Transition", "Narrative Shaping memorandum", "narrative shaping"] }
  ,{ href: "programming-languages.html", terms: ["Programming languages", "programming-language history", "five computing cultures"] }
  ,{ href: "rechenplan.html", terms: ["Rechenplan", "RP-W", "RP-V", "RP-S"] }
  ,{ href: "planform.html", terms: ["Planform", "Planform I", "Planform II", "Zivil-Planform"] }
  ,{ href: "planwerk.html", terms: ["Planwerk", "Programmbuch"] }
  ,{ href: "kurzplan.html", terms: ["Kurzplan", "Kurzplan 77"] }
  ,{ href: "german-civilian-languages.html", terms: ["German civilian programming languages", "German civilian language ecology"] }
  ,{ href: "plan-austral.html", terms: ["Plan Austral", "Plan Austral 82"] }
  ,{ href: "software-portability.html", terms: ["software portability", "source-profile portability", "binary portability"] }
  ,{ href: "commonwealth-programming-languages.html", terms: ["Commonwealth programming languages", "British programming languages", "Commonwealth Programme Library"] }
  ,{ href: "autocode.html", terms: ["Autocode", "Common Autocode", "Conversational Autocode"] }
  ,{ href: "cleo.html", terms: ["CLEO", "LEO commercial languages"] }
  ,{ href: "ml-programming-language.html", terms: ["Common ML", "ML programming language", "ML language"] }
  ,{ href: "american-programming-languages.html", terms: ["American programming languages", "American software culture"] }
  ,{ href: "lambda-language.html", terms: ["Lambda Project", "Lambda 68", "Lambda 72", "Lambda 74"] }
  ,{ href: "bridge-operating-environment.html", terms: ["Bridge operating environment", "Bridge/16", "Interlink toolchains"] }
  ,{ href: "civic-programming-language.html", terms: ["Civic programming language", "Civic 78", "Civic 83"] }
  ,{ href: "japanese-programming-languages.html", terms: ["Japanese programming languages", "Japanese software culture"] }
  ,{ href: "keisan.html", terms: ["KEISAN", "計算三六", "計算四二"] }
  ,{ href: "tejun.html", terms: ["TEJUN", "手順三七", "手順四三"] }
  ,{ href: "gakushu.html", terms: ["Gakushū", "学習三八", "学習四一"] }
  ,{ href: "latin-programming-languages.html", terms: ["Latin-bloc programming languages", "Latin programming languages"] }
  ,{ href: "lisp.html", terms: ["Lisp programming language", "Lisp dialects", "Lisp 1.5"] }
  ,{ href: "basic-programming-language.html", terms: ["BASIC programming language", "Dartmouth BASIC", "Tiny BASIC", "Commonwealth BASIC"] }
  ,{ href: "forth-programming-language.html", terms: ["Forth programming language", "FIG-Forth", "Forth-79"] }
  ,{ href: "pascal-programming-language.html", terms: ["Pascal programming language", "Pascal compiler", "Pascal education"] }
  ,{ href: "smalltalk.html", terms: ["Smalltalk-80", "Smalltalk programming language", "Smalltalk systems"] }
  ,{ href: "sql.html", terms: ["Structured Query Language", "SEQUEL", "SQL language"] }
  ,{ href: "ada-programming-language.html", terms: ["Ada programming language", "Ada 83", "MIL-STD-1815A"] }
  ,{ href: "cpp-programming-language.html", terms: ["C++ programming language", "C with Classes"] }
  ,{ href: "algol-latin.html", terms: ["ALGOL-Latin 68", "ALGOL-Latin 62", "ALGOL-Latin"] }
  ,{ href: "modula-programming-language.html", terms: ["Modula-2", "Modula programming language", "Modula"] }
  ,{ href: "kansu-42.html", terms: ["Kansū 42", "Kansū", "関数四二"] }
  ,{ href: "ronri-44.html", terms: ["Ronri 44", "Ronri", "論理四四"] }
  ,{ href: "gazo-44.html", terms: ["Gazō 44", "Gazō", "画像四四"] }
  ,{ href: "international-character-data-standards-council.html", terms: ["International Character and Data Standards Council", "ICDSC"] }
  ,{ href: "concord-architecture.html", terms: ["Concord architecture", "Concord Meridian", "Concord One"] }
  ,{ href: "shadownet.html", terms: ["ShadowNet", "going shadow", "Brightnet", "Schattennetz"] }
  ,{ href: "zivilsprachenrichtlinie.html", terms: ["Zivilsprachenrichtlinie", "Sprachenbereinigung", "certify uses, not ideas"] }
  ,{ href: "werkcode.html", terms: ["Werkcode 80", "Werkcode"] }
  ,{ href: "lehrplan.html", terms: ["Lehrplan 81", "Lehrplan"] }
  ,{ href: "folge.html", terms: ["Folge 81", "Folge"] }
  ,{ href: "schluss.html", terms: ["Schluss 82", "Schluss"] }
  ,{ href: "klasse.html", terms: ["Klasse 82", "Klasse"] }
  ,{ href: "bildschrift.html", terms: ["Bildschrift 83", "Bildschrift"] }
  ,{ href: "nachricht.html", terms: ["Nachricht 84", "Nachricht"] }
  ,{ href: "schnur.html", terms: ["Schnur 80", "Schnur"] }
  ,{ href: "bericht.html", terms: ["Bericht 81", "Bericht"] }
  ,{ href: "spielsatz.html", terms: ["Spielsatz 81", "Spielsatz"] }
  ,{ href: "satzwerk.html", terms: ["Satzwerk 81", "Satzwerk"] }
  ,{ href: "datenfrage.html", terms: ["Datenfrage 82", "Datenfrage"] }
  ,{ href: "schaltfolge.html", terms: ["Schaltfolge 82", "Schaltfolge"] }
  ,{ href: "wortbruecke.html", terms: ["Wortbrücke 82", "Wortbrücke", "Wortbruecke"] }
  ,{ href: "programmhaeuser.html", terms: ["Programmhäuser", "Programmhaus", "German software houses"] }
  ,{ href: "lia-language.html", terms: ["LIA programming language", "Linguaggio Italiano Amministrativo", "LIA-59", "LIA 73"] }
  ,{ href: "marseille-prolog.html", terms: ["Marseille Prolog", "Prolog"] }
  ,{ href: "plankalkul.html", terms: ["Plankalkül", "Plankalkul"] }
  ,{ href: "rechenplan-52.html", terms: ["Rechenplan 52"] }
  ,{ href: "rechenplan-56.html", terms: ["Rechenplan 56"] }
  ,{ href: "rechenplan-63.html", terms: ["Rechenplan 63"] }
  ,{ href: "rechenplan-68.html", terms: ["Rechenplan 68"] }
  ,{ href: "rechenplan-72.html", terms: ["Rechenplan 72"] }
  ,{ href: "auswahlplan.html", terms: ["Auswahlplan", "AUSWAHLPLAN"] }
  ,{ href: "planlauf.html", terms: ["Planlauf"] }
  ,{ href: "fortran.html", terms: ["FORTRAN", "Fortran"] }
  ,{ href: "cobol.html", terms: ["COBOL", "Cobol"] }
  ,{ href: "aerol-60.html", terms: ["AEROL-60", "JOVIAL-class language", "JOVIAL-class"] }
  ,{ href: "c-programming-language.html", terms: ["C programming language", "portable C", "systems language C"] }
  ,{ href: "unix.html", terms: ["UNIX", "Unix"] }
  ,{ href: "cpl.html", terms: ["CPL"] }
  ,{ href: "bcpl.html", terms: ["BCPL"] }
  ,{ href: "applicative-autocode.html", terms: ["Applicative Autocode", "ISWIM"] }
  ,{ href: "occam.html", terms: ["occam", "Occam"] }
  ,{ href: "material-culture.html", terms: ["Material culture and civilian industry", "material culture", "civilian industry"] }
  ,{ href: "industrial-conversion-1947.html", terms: ["Industrial conversion after 1947", "postwar industrial conversion", "civilian conversion"] }
  ,{ href: "postwar-repair-economy.html", terms: ["Postwar repair economy", "repair economy", "small-firm layer"] }
  ,{ href: "surplus-motorization.html", terms: ["Surplus motorization", "surplus vehicle economy"] }
  ,{ href: "applied-systems-takeoff.html", terms: ["Applied-systems takeoff", "applied systems takeoff", "Raumbote transition"] }
  ,{ href: "reliability-engineering.html", terms: ["Reliability engineering", "reliability groups", "component traceability"] }
  ,{ href: "civilian-cold-chain.html", terms: ["Civilian cold chain", "cold chain", "refrigerated warehouses"] }
  ,{ href: "logistics-technical-standards.html", terms: ["Civilian logistics and technical standards", "technical standards", "parts catalogue"] }
  ,{ href: "japanese-consumer-brands.html", terms: ["Japanese consumer brands", "Asia-first market", "Totsuko"] }
  ,{ href: "instrumented-modernity.html", terms: ["Instrumented modernity"] }
  ,{ href: "microelectronic-household.html", terms: ["Microelectronic household", "programmable consumer world"] }
  ,{ href: "home-video.html", terms: ["Home video", "video rental", "camcorders"] }
  ,{ href: "office-automation.html", terms: ["Office automation", "electronic office", "machine-readable commerce"] }
  ,{ href: "consumer-telecommunications.html", terms: ["Consumer telecommunications", "car telephones", "pocket cellular telephone"] }
  ,{ href: "affluent-household-1985.html", terms: ["Affluent household in 1985", "affluent household"] }
  ,{ href: "technician-class.html", terms: ["Certified technician class", "technician class", "certified maintenance technician"] }
  ,{ href: "protected-consumer-commerce.html", terms: ["Protected consumer commerce", "commercial détente", "commercial detente"] }
  ,{ href: "german-imperial-administration.html", terms: ["Administration of the German imperial system", "German imperial system", "imperial administration"] }
  ,{ href: "northern-shield.html", terms: ["Northern Shield"] }
  ,{ href: "general-government.html", terms: ["General Government"] }
  ,{ href: "showroom-reich.html", terms: ["Showroom Reich"] }
  ,{ href: "reichsfuehrungsordnung.html", terms: ["Reichsführungsordnung", "Reich Leadership Order"] }
  ,{ href: "reich-leadership-council.html", terms: ["Reich Leadership Council"] }
  ,{ href: "government-second-draft.html", terms: ["Government of the Second Draft", "Second Draft", "Vorlagenkreis", "Submission Circle"] }
  ,{ href: "personal-staff-situation-review.html", terms: ["Personal Staff for Situation Review", "Persönlicher Stab für Lageprüfung", "Gegenlage"] }
  ,{ href: "gelenkte-grossraumwirtschaft.html", terms: ["Gelenkte Großraumwirtschaft", "directed imperial market"] }
  ,{ href: "reichsamt-rohstoffwirtschaft.html", terms: ["Reichsamt für Rohstoffwirtschaft", "Reich Office for Raw-Material Economy"] }
  ,{ href: "reichsgueterausgleich.html", terms: ["Reichsgüterausgleich", "Reich Goods Equalization"] }
  ,{ href: "einheitsmark.html", terms: ["Einheitsmark", "Unity Mark"] }
  ,{ href: "verrechnungsmark.html", terms: ["Verrechnungsmark"] }
  ,{ href: "meisterware.html", terms: ["Meisterware", "Volksware", "Qualitätsware"] }
  ,{ href: "order-faith-theology.html", terms: ["Theology of the SS Order Faith", "Order Faith theology", "differentiated revelation"] }
  ,{ href: "order-faith-moral-anthropology.html", terms: ["Moral anthropology of the SS Order Faith", "Order Faith moral anthropology", "purification"] }
  ,{ href: "order-faith-afterlife.html", terms: ["Death and afterlife in the SS Order Faith", "ancestral recurrence"] }
  ,{ href: "order-faith-household.html", terms: ["Household and family in the SS Order Faith", "Order household"] }
  ,{ href: "order-faith-rites.html", terms: ["Ritual life of the SS Order Faith", "Order Faith rites", "Mannblót"] }
  ,{ href: "order-faith-runes.html", terms: ["Runes in the SS Order Faith", "Order Row", "Armanen rune row"] }
  ,{ href: "order-faith-membership.html", terms: ["Membership and authority in the SS Order Faith", "full Order membership", "Germanic association", "service affiliation"] }
  ,{ href: "wewelsburg.html", terms: ["Wewelsburg"] }
  ,{ href: "first-wewelsburg-articles.html", terms: ["First Wewelsburg Articles"] }
  ,{ href: "wewelsburg-confession.html", terms: ["Wewelsburg Confession"] }
  ,{ href: "first-order-rite-book.html", terms: ["First Order Rite Book", "Ordensritenbuch"] }
  ,{ href: "ss-glaubensordnung.html", terms: ["Glaubensordnung"] }
  ,{ href: "main-office-order-faith-life-order.html", terms: ["Main Office for Order Faith and Life Order", "Hauptamt für Ordensglauben und Lebensordnung"] }
  ,{ href: "corroborated-visions-order-faith.html", terms: ["Corroborated visions of the SS Order Faith", "corroborated visions", "Hall of Names", "Great Hall and Green Height"] }
  ,{ href: "four-clandestine-catholic-currents.html", terms: ["four clandestine currents", "clandestine Catholic currents", "Vendita method"] }
  ,{ href: "swiss-catholic-conduit.html", terms: ["Swiss Catholic conduit", "Swiss conduit"] }
  ,{ href: "consecration-of-russia-1946.html", terms: ["1946 consecration of Russia", "consecration of Russia"] }
  ,{ href: "orthodox-revival.html", terms: ["postwar Orthodox revival", "Orthodox revival"] }
  ,{ href: "ecclesial-patrimony.html", terms: ["ecclesial patrimony"] }
  ,{ href: "apostolic-communion.html", terms: ["Catholic–Orthodox apostolic communion", "apostolic communion", "near-reunion with the East"] }
  ,{ href: "bounded-papal-authority.html", terms: ["bounded papal authority", "completion of Vatican I"] }
  ,{ href: "religious-immunity.html", terms: ["religious immunity"] }
  ,{ href: "roman-rite-settlement.html", terms: ["Roman Rite settlement", "stable Roman Rite"] }
  ,{ href: "catholic-social-order.html", terms: ["Catholic doctrine of the social order", "Christian social order"] }
  ,{ href: "catholicism-in-latin-bloc.html", terms: ["Catholicism in the Latin Bloc"] }
  ,{ href: "catholicism-in-german-europe.html", terms: ["Catholicism in German Europe", "German Catholicism"] }
  ,{ href: "vatican-evidence-discipline.html", terms: ["Vatican evidentiary discipline", "evidentiary restraint"] }
  ,{ href: "catholic-pastoral-care-in-space.html", terms: ["Catholic pastoral care in space", "orbital and lunar pastoral care"] }
  ,{ href: "ecuador.html", terms: ["Republic of Ecuador", "Ecuador"] }
  ,{ href: "uruguay.html", terms: ["Oriental Republic of Uruguay", "Uruguay"] }
  ,{ href: "paraguay.html", terms: ["Republic of Paraguay", "Paraguay"] }
  ,{ href: "bolivia.html", terms: ["Republic of Bolivia", "Bolivia"] }
  ,{ href: "panama.html", terms: ["Republic of Panama", "Panama"] }
  ,{ href: "nicaragua.html", terms: ["Republic of Nicaragua", "Nicaragua"] }
  ,{ href: "suriname.html", terms: ["Republic of Suriname", "Suriname"] }
  ,{ href: "second-cristiada.html", terms: ["Second Cristiada"] }
  ,{ href: "mexican-catholic-national-settlement.html", terms: ["Mexican Catholic-national settlement", "Catholic-national settlement"] }
  ,{ href: "havana-understanding.html", terms: ["Havana Understanding"] }
  ,{ href: "luso-brazilian-community.html", terms: ["Luso-Brazilian Community"] }
  ,{ href: "santiago-doctrine.html", terms: ["Santiago Doctrine"] }
  ,{ href: "plan-centinela.html", terms: ["Plan Centinela", "Programa de Catastro y Seguridad Cordillerana"] }
  ,{ href: "cold-andes.html", terms: ["Cold Andes"] }
  ,{ href: "mekong-states.html", terms: ["Mekong states", "Council of Three Mekong States"] }
  ,{ href: "languages-of-cambodia.html", terms: ["Languages of Cambodia", "Khmer script modernization"] }
  ,{ href: "languages-of-laos.html", terms: ["Languages of Laos", "Tham script preservation"] }
  ,{ href: "languages-of-vietnam.html", terms: ["Languages of Vietnam", "official digraphia", "quốc ngữ"] }
  ,{ href: "han-nom-revival.html", terms: ["Hán–Nôm revival", "Modern Nôm movement", "Hán-Nôm revival"] }
  ,{ href: "computing-in-mekong-states.html", terms: ["Computing in the Mekong states", "Mekong computing"] }
  ,{ href: "software-localization-in-mekong-states.html", terms: ["Software localization in the Mekong states", "Mekong software localization", "the interface is national"] }
  ,{ href: "vietnamese-software-industry.html", terms: ["Vietnamese software industry", "Vietnamese software studios"] }
  ,{ href: "weltnetz.html", terms: ["Weltnetz", "world network"] }
  ,{ href: "seitenplan.html", terms: ["Seitenplan 88", "Seitenplan", "Page Plan"] }
  ,{ href: "bridge-wn.html", terms: ["Bridge/WN", "Bridge Weltnetz environment"] }
  ,{ href: "american-data-network.html", terms: ["American Data Network", "ADN"] }
  ,{ href: "commonwealth-packet-service.html", terms: ["Commonwealth Packet Service", "CPS"] }
  ,{ href: "japanese-imperial-information-network.html", terms: ["Japanese Imperial Information Network", "Teikoku Jōhōmō", "Sekaimō"] }
  ,{ href: "latin-technical-network.html", terms: ["Latin Technical Network", "Rete Pubblica Latina", "Rete Latina"] }
  ,{ href: "national-network-search-services.html", terms: ["National network search services", "Deutsches Netzregister", "national search engines"] }
  ,{ href: "computing-pioneers.html", terms: ["Pioneers of computing", "computing pioneers"] }
  ,{ href: "alan-turing.html", terms: ["Alan Turing", "Turing"] }
  ,{ href: "konrad-zuse.html", terms: ["Konrad Zuse", "Zuse"] }
  ,{ href: "alonzo-church.html", terms: ["Alonzo Church", "Church's Hypothesis", "Church’s Hypothesis"] }
  ,{ href: "john-von-neumann.html", terms: ["John von Neumann", "von Neumann"] }
  ,{ href: "grace-hopper.html", terms: ["Grace Hopper", "Hopper"] }
  ,{ href: "maurice-wilkes.html", terms: ["Maurice Wilkes", "Wilkes"] }
  ,{ href: "helmut-schreyer.html", terms: ["Helmut Schreyer", "Schreyer"] }
  ,{ href: "akira-nakashima.html", terms: ["Akira Nakashima", "Nakashima"] }
  ,{ href: "postwar-british-governments.html", terms: ["Postwar governments of the United Kingdom", "postwar British governments"] }
  ,{ href: "george-vi.html", terms: ["George VI"] }
  ,{ href: "aneurin-bevan.html", terms: ["Aneurin Bevan", "Bevan"] }
  ,{ href: "rab-butler.html", terms: ["R. A. Butler", "Rab Butler"] }
  ,{ href: "1951-united-kingdom-general-election.html", terms: ["1951 United Kingdom general election", "India Election"] }
  ,{ href: "commonwealth-supply-agreement.html", terms: ["Commonwealth Supply Agreement"] }
  ,{ href: "1955-united-kingdom-general-election.html", terms: ["1955 United Kingdom general election"] }
  ,{ href: "commonwealth-council-defence-reconstruction.html", terms: ["Commonwealth Council of Defence and Reconstruction"] }
  ,{ href: "windsor-arrangement.html", terms: ["Windsor Arrangement"] }
  ,{ href: "hugh-gaitskell.html", terms: ["Hugh Gaitskell", "Gaitskell"] }
  ,{ href: "harold-wilson.html", terms: ["Harold Wilson", "Wilson"] }
  ,{ href: "enoch-powell.html", terms: ["Enoch Powell", "Powell"] }
  ,{ href: "denis-healey.html", terms: ["Denis Healey", "Healey"] }
  ,{ href: "margaret-thatcher.html", terms: ["Margaret Thatcher", "Thatcher"] }
  ,{ href: "commonwealth-labour.html", terms: ["Commonwealth Labour"] }
  ,{ href: "ordered-particularism.html", terms: ["Ordered Particularism"] }
  ,{ href: "national-liberal-movement.html", terms: ["National Liberal movement", "National Liberals"] }
  ,{ href: "national-liberal-constitutional-union.html", terms: ["National Liberal–Constitutional Union", "National Liberal-Constitutional Union", "NLCU"] }
  ,{ href: "1975-united-kingdom-general-election.html", terms: ["1975 United Kingdom general election", "Kuwait Election"] }
  ,{ href: "kuwait-supply-procurement-inquiry.html", terms: ["Kuwait Supply and Procurement Inquiry", "Kuwait Supply Inquiry"] }
  ,{ href: "commonwealth-clearing-squeeze.html", terms: ["Commonwealth Clearing Squeeze", "Clearing Squeeze"] }
  ,{ href: "contracts-winter.html", terms: ["Contracts Winter"] }
  ,{ href: "1980-united-kingdom-general-election.html", terms: ["1980 United Kingdom general election"] }
  ,{ href: "industrial-reconstitution-reownership-act.html", terms: ["Industrial Reconstitution and Reownership Act", "Industrial Reconstitution and Reownership Act 1981"] }
  ,{ href: "factory-reownership-scheme.html", terms: ["Factory Reownership Scheme", "Factory Reownership"] }
  ,{ href: "stewarded-enterprise.html", terms: ["Stewarded Enterprise", "Front-Porch Capitalism", "Front Porch Capitalism"] }
  ,{ href: "new-elizabethans.html", terms: ["New Elizabethans", "Coronation Generation"] }
  ,{ href: "1985-united-kingdom-general-election.html", terms: ["1985 United Kingdom general election", "Runway Election", "Mount Pleasant Election", "Blood-and-Ballot Election"] }
  ,{ href: "falklands-commission.html", terms: ["Falklands Commission"] }
  ,{ href: "postwar-governments-of-japan.html", terms: ["Postwar governments of Japan", "Japanese cabinet sequence"] }
  ,{ href: "hirohito.html", terms: ["Emperor Hirohito", "Hirohito"] }
  ,{ href: "hideki-tojo.html", terms: ["Hideki Tōjō", "Hideki Tojo", "Tōjō", "Tojo"] }
  ,{ href: "mitsumasa-yonai.html", terms: ["Mitsumasa Yonai", "Yonai"] }
  ,{ href: "mamoru-shigemitsu.html", terms: ["Mamoru Shigemitsu", "Shigemitsu"] }
  ,{ href: "nobusuke-kishi.html", terms: ["Nobusuke Kishi", "Kishi"] }
  ,{ href: "hayato-ikeda.html", terms: ["Hayato Ikeda", "Ikeda"] }
  ,{ href: "eisaku-sato.html", terms: ["Eisaku Satō", "Eisaku Sato", "Satō"] }
  ,{ href: "kakuei-tanaka.html", terms: ["Kakuei Tanaka", "Tanaka"] }
  ,{ href: "yasuhiro-nakasone.html", terms: ["Yasuhiro Nakasone", "Nakasone"] }
  ,{ href: "takeo-miki.html", terms: ["Takeo Miki", "Miki"] }
  ,{ href: "takeo-fukuda.html", terms: ["Takeo Fukuda", "Fukuda"] }
  ,{ href: "masayoshi-ohira.html", terms: ["Masayoshi Ōhira", "Masayoshi Ohira", "Ōhira", "Ohira"] }
  ,{ href: "zenko-suzuki.html", terms: ["Zenkō Suzuki", "Zenko Suzuki"] }
  ,{ href: "manila-principles.html", terms: ["Manila Principles", "Manila speech"] }
  ,{ href: "active-concord.html", terms: ["Active Concord"] }
  ,{ href: "greater-east-asia-technical-charter.html", terms: ["Greater East Asia Technical Charter", "Technical Charter"] }
  ,{ href: "human-orbital-systems-program.html", terms: ["Human Orbital Systems Program"] }
  ,{ href: "hikari-program.html", terms: ["Hikari program", "Hikari-0", "Hikari-1", "Hikari-2", "Hikari-3", "Hikari-4", "Hikari-5", "Hikari-6", "Hikari-7", "Hikari Kai"] }
  ,{ href: "musubi-program.html", terms: ["Musubi program", "Musubi docking", "Musubi"] }
  ,{ href: "biak-booster-failure.html", terms: ["Biak booster failure", "1974 Biak failure"] }
  ,{ href: "associated-state-astronaut-program.html", terms: ["Associated-State Astronaut Program", "associated-state astronaut program", "first Filipino astronaut"] }
  ,{ href: "tsubame-program.html", terms: ["Tsubame program", "Tsubame-1", "Tsubame"] }
  ,{ href: "kobo-horai.html", terms: ["Kōbō–Hōrai orbital complex", "Kōbō laboratory", "Hōrai Orbital Platform", "Kōbō", "Hōrai"] }
  ,{ href: "imperial-space-development-agency.html", terms: ["Imperial Space Development Agency", "Imperial Space Development Council"] }
  ,{ href: "hideo-itokawa.html", terms: ["Hideo Itokawa", "Itokawa"] }
  ,{ href: "early-japanese-satellite-program.html", terms: ["Early Japanese Satellite Program", "early satellite program"] }
  ,{ href: "osumi-i.html", terms: ["Ōsumi I", "Osumi I"] }
  ,{ href: "kuroshio-i.html", terms: ["Kuroshio I"] }
  ,{ href: "yamabiko-i.html", terms: ["Yamabiko I"] }
  ,{ href: "machine-first-space-doctrine.html", terms: ["Machine-First Space Doctrine", "machine-first doctrine", "machine-first space doctrine"] }
  ,{ href: "imperial-deep-space-network.html", terms: ["Imperial Deep-Space Network", "deep-space network"] }
  ,{ href: "japanese-lunar-exploration-program.html", terms: ["Japanese Lunar Exploration Program", "Japanese lunar program"] }
  ,{ href: "distributed-mars-robotic-system.html", terms: ["Distributed Mars Robotic System", "distributed Mars system", "cooperative Mars system"] }
  ,{ href: "american-open-markets-act.html", terms: ["American Open Markets and Reciprocal Investment Act", "Open Markets Act"] }
  ,{ href: "genoa-controls-case.html", terms: ["Genoa Controls case", "Genoa Controls Case"] }
  ,{ href: "reciprocal-commerce-enterprise-act.html", terms: ["Reciprocal Commerce and Enterprise Act"] }
  ,{ href: "world-market-boom.html", terms: ["World Market Boom"] }
  ,{ href: "international-reaction-american-opening.html", terms: ["international reaction to the American opening", "international response to the American opening"] }
  ,{ href: "american-century-debate.html", terms: ["American Century Debate", "American century"] }
  ,{ href: "british-market-opening-1988.html", terms: ["British market opening", "British opening of 1988"] }
  ,{ href: "halifax-commercial-schedules.html", terms: ["Halifax Commercial Schedules", "Halifax schedules"] }
  ,{ href: "japanese-american-investment-boom.html", terms: ["Japanese investment in the American boom", "Japanese American investment boom"] }
  ,{ href: "japanese-external-capital-zones.html", terms: ["Japanese external-capital zones", "external-capital zones"] }
  ,{ href: "german-american-investment-boom.html", terms: ["German investment in the American boom", "German American investment boom"] }
  ,{ href: "atlantik-beteiligungsdienst.html", terms: ["Atlantik-Beteiligungsdienst", "Atlantic Participation Service"] }
  ,{ href: "latin-american-investment-boom.html", terms: ["Latin Bloc investment in the American boom", "Latin American investment boom"] }
  ,{ href: "atlantic-investment-protocol.html", terms: ["Atlantic Investment Protocol"] }
  ,{ href: "cross-bloc-financial-shock-1990.html", terms: ["1990 Cross-Bloc Financial Shock", "cross-bloc financial shock"] }
  ,{ href: "interoperability-without-financial-integration.html", terms: ["interoperability without financial integration"] }
  ,{ href: "american-ownership-mapping-project.html", terms: ["American ownership-mapping project", "ownership-mapping project", "ownership map"] }
  ,{ href: "national-industrial-integrity-act.html", terms: ["National Industrial Integrity Act"] }
  ,{ href: "great-sell-off.html", terms: ["Great Sell-Off"] }
  ,{ href: "american-enterprise-recovery-act.html", terms: ["American Enterprise Recovery Act"] }
  ,{ href: "federal-income-tax-repeal.html", terms: ["repeal of the federal individual income tax", "federal income-tax repeal", "Paycheck Freedom Act"] }
  ,{ href: "omaha-rules.html", terms: ["Omaha Rules"] }
  ,{ href: "productive-commonwealth-faction.html", terms: ["Productive Commonwealth faction", "Productive Commonwealth"] }
  ,{ href: "constitutional-renewal-party.html", terms: ["Constitutional Renewal Party", "Constitutional Renewal"] }
  ,{ href: "american-producers-party.html", terms: ["American Producers Party", "American Producers"] }
  ,{ href: "national-vanguard.html", terms: ["National Vanguard"] }
  ,{ href: "ruth-ann-morrow.html", terms: ["Ruth Ann Morrow", "the Registrar"] }
  ,{ href: "campaign-independence-public-trust-act.html", terms: ["Campaign Independence and Public Trust Act"] }
  ,{ href: "corporate-patronage-united-states.html", terms: ["corporate patronage in the United States", "corporate-patronage republic", "boardroom primary"] }
  ,{ href: "subhas-chandra-bose.html", terms: ["Subhas Chandra Bose", "Netaji"] }
  ,{ href: "jawaharlal-nehru.html", terms: ["Jawaharlal Nehru", "Nehru"] }
  ,{ href: "plaek-phibunsongkhram.html", terms: ["Plaek Phibunsongkhram", "Phibunsongkhram", "Phibun"] }
  ,{ href: "bhumibol-adulyadej.html", terms: ["Bhumibol Adulyadej", "King Bhumibol", "Rama IX"] }
  ,{ href: "sarit-thanarat.html", terms: ["Sarit Thanarat", "Field Marshal Sarit"] }
  ,{ href: "thanom-kittikachorn.html", terms: ["Thanom Kittikachorn", "Field Marshal Thanom"] }
  ,{ href: "norodom-sihanouk.html", terms: ["Norodom Sihanouk", "King Sihanouk", "Sihanouk"] }
  ,{ href: "puyi.html", terms: ["Kangde Emperor", "Puyi"] }
  ,{ href: "pujie.html", terms: ["Pujie"] }
  ,{ href: "demchugdongrub.html", terms: ["Demchugdongrub", "Prince De"] }
];

function escapePattern(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function addFirstMentionLinks() {
  const current = here.toLowerCase();
  const active = crossLinks
    .filter(entry => entry.href.split("#")[0].toLowerCase() !== current)
    .map(entry => ({
      ...entry,
      pattern: new RegExp(`\\b(?:${entry.terms.sort((a, b) => b.length - a.length).map(escapePattern).join("|")})\\b`, "i")
    }));
  const used = new Set();
  const containers = document.querySelectorAll(".hero-copy p, .article-body p, .article-body li, .article-body td, .portal-card p, .dispatch p");

  containers.forEach(container => {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      if (!walker.currentNode.parentElement?.closest("a, code, script, style")) nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
      let remaining = node.nodeValue || "";
      if (!remaining.trim()) return;
      const fragment = document.createDocumentFragment();
      let changed = false;

      while (remaining) {
        let best = null;
        active.forEach(entry => {
          if (used.has(entry.href)) return;
          const match = entry.pattern.exec(remaining);
          if (match && (!best || match.index < best.match.index || (match.index === best.match.index && match[0].length > best.match[0].length))) best = { entry, match };
        });
        if (!best) break;
        changed = true;
        fragment.append(document.createTextNode(remaining.slice(0, best.match.index)));
        const link = document.createElement("a");
        link.href = best.entry.href;
        link.className = "first-mention";
        link.textContent = best.match[0];
        fragment.append(link);
        used.add(best.entry.href);
        remaining = remaining.slice(best.match.index + best.match[0].length);
      }

      if (changed) {
        fragment.append(document.createTextNode(remaining));
        node.replaceWith(fragment);
      }
    });
  });
}

addFirstMentionLinks();

document.querySelectorAll('a[href="korea.html"]').forEach(link => {
  if (["Korea", "Korea under Japanese Rule"].includes(link.textContent.trim())) link.textContent = "Chōsen";
});

const savedTheme = localStorage.getItem("fp-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

document.querySelectorAll("[data-theme-toggle]").forEach(button => {
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("fp-theme", next);
  });
});

document.querySelectorAll("[data-mobile-nav]").forEach(button => {
  button.addEventListener("click", () => document.body.classList.toggle("nav-open"));
});

document.querySelectorAll("[data-random]").forEach(button => {
  button.addEventListener("click", () => {
    const choices = pages.filter(page => page.href !== here && page.href !== "index.html");
    location.href = choices[Math.floor(Math.random() * choices.length)].href;
  });
});

document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click", () => window.print()));
document.querySelectorAll("[data-copy-link]").forEach(button => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(location.href);
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => button.textContent = original, 1200);
  });
});

const searchInput = document.querySelector("[data-search]");
const searchResults = document.querySelector("[data-search-results]");

function renderSearch(query) {
  if (!searchInput || !searchResults) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.classList.remove("is-open");
    searchResults.innerHTML = "";
    return;
  }
  const rank = page => {
    const title = page.title.toLowerCase();
    if (title === q) return 0;
    if (title.startsWith(q)) return 1;
    if (title.includes(q)) return 2;
    return 3;
  };
  const matches = pages
    .filter(page => `${page.title} ${page.description} ${page.tags}`.toLowerCase().includes(q))
    .sort((a, b) => rank(a) - rank(b));
  searchResults.innerHTML = matches.length
    ? matches.map(page => `<a href="${page.href}"><strong>${page.title}</strong><small>${page.description}</small></a>`).join("")
    : `<a href="world.html"><strong>No exact article yet</strong><small>Browse the world overview instead</small></a>`;
  searchResults.classList.add("is-open");
}

searchInput?.addEventListener("input", event => renderSearch(event.target.value));
searchInput?.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    const first = searchResults?.querySelector("a");
    if (first) location.href = first.href;
  }
  if (event.key === "Escape") renderSearch("");
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search")) renderSearch("");
  if (!event.target.closest(".sidebar") && !event.target.closest("[data-mobile-nav]")) document.body.classList.remove("nav-open");
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
