window.deepArticles = window.deepArticles || {};

const millenniumIlluminationSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature space age and Millennium Lunar Illumination"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — 1996–2000 lunar-display chronology"},
  {href:"../transcript.md",label:"Master Transcript — Turns 760–763, canonized event and engineering rationale"},
  {href:"https://eclipse.gsfc.nasa.gov/TYPE/moonphase.html",label:"NASA RP 1349 — lunar phases, 1995–2006"},
  {href:"https://science.nasa.gov/moon/moon-phases/",label:"NASA Science — lunar phases, viewing times, and earthshine"},
  {href:"https://imagine.gsfc.nasa.gov/observatories/learning/fermi/classroom/agn_guide.html",label:"NASA Goddard — angular size of the Moon"},
  {href:"https://www.ncbi.nlm.nih.gov/books/NBK11509/figure/ch25kallspatial.F5/",label:"NCBI Webvision — one-arcminute 20/20 resolution standard"}
];

const millenniumIlluminationArticle = config => ({
  category:"Spaceflight and public culture",
  eyebrow:"Millennium Lunar Illumination · 1996–2000",
  infoboxKicker:"Five-system lunar display",
  sources:millenniumIlluminationSources,
  categories:["Millennium Lunar Illumination","Lunar infrastructure","Spaceflight","Public ceremonies","Five-Power order"],
  ...config
});

const beaconSystemLandscape = {
  src:"assets/diagrams/millennium-beacon-system.svg",
  alt:"Diagram showing a lunar optical beacon, its broadened Earth-tracking beam, and naked-eye, binocular, and observatory viewing scales",
  caption:"Compact optical transmitters appeared as artificial stars; the spacing among sites, rather than the physical size of each lamp, made geometric patterns resolvable"
};

const illuminationSequenceLandscape = {
  src:"assets/diagrams/millennium-illumination-sequence.svg",
  alt:"Three-movement sequence of the Millennium Lunar Illumination from national displays to simultaneous emblems and the common-white finale",
  caption:"The display retained national symbols, then converted the same infrastructure into one field of white artificial lights"
};

Object.assign(window.deepArticles, {
  "millennium-lunar-illumination": millenniumIlluminationArticle({
    title:"Millennium Lunar Illumination",
    category:"Cultural events",
    eyebrow:"Global lunar ceremony · 31 December 1999–1 January 2000",
    infoboxKicker:"Turn-of-the-century lunar display",
    landscape:illuminationSequenceLandscape,
    lead:"The Millennium Lunar Illumination was a coordinated display across the Moon at the opening of 2000, intended to make permanent human presence visibly unmistakable from Earth and to provide a rare shared public spectacle among the rival powers.<sup class='canon-note' data-provenance='a'>[a]</sup> The accepted implementation used Earth-tracking optical beacons, a rolling international schedule, separate lunar emblems, and a final common-white sequence across the earthlit face of the waning crescent Moon.<sup class='canon-note' data-provenance='e'>[e]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-m2c7w writer=g kind=revision created=2026-08-15T21:36:40-06:00 --><span>The millennium date, intentional visibility from Earth, participation by several lunar powers, cooperative character, and setting-defining public image are established.<sup class='canon-note' data-provenance='a'>[a]</sup> The 1996–97 preparatory agreement, rolling 30–36-hour form, waning-crescent viewing plan, active optical-beacon network, several-hundred-kilometre patterns, five-symbol register, three-movement sequence, common-white finale, observatory image, and later technical reuse are incorporated event architecture.<sup class='canon-note' data-provenance='e'>[e]</sup> Exact coordinates, beacon counts, power ratings, wavelengths, organizing instrument, national control centers, timings, broadcast audiences, and the Commonwealth emblem's final official description remain open.</span><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"background",title:"Background",html:"<p>By the middle 1990s the Moon contained continuously occupied bases, mines, survey stations, navigation transmitters, reactors, solar installations, remote vehicles, and regular cargo traffic. The five systems could place and maintain equipment far from their principal settlements.</p><p>Preparatory agreement in 1996–97 established one shared event while leaving each system responsible for its own display zone, equipment, national sequence, and public presentation. The name and legal form of the organizing instrument remain unsettled.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"geometry",title:"Lunar geometry",html:"<p>On 1 January 2000 the Moon was a waning crescent, about one-fifth illuminated; astronomical new Moon followed on 6 January at 18:15 UTC. Most of the Earth-facing disk was therefore in lunar night but remained dimly legible through earthshine.</p><p>A waning crescent is principally visible before dawn. The event could not be one simultaneous midnight spectacle and instead followed the calendar around Earth for roughly 30–36 hours.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"system",title:"Millennium Beacon System",html:"<p>The <a href='millennium-beacon-system.html'>Millennium Beacon System</a> used steerable, Earth-tracking optical transmitters rather than surface floodlights. Individual units spread their beams across Earth or a broad terrestrial region and operated in timed bursts with dedicated power, cooling, guidance, and communications.</p><p>Sites at bases, mines, relay stations, and temporary ceremonial fields were separated by enough lunar distance to become distinct points when seen through binoculars or telescopes.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"zones",title:"Display zones",html:"<p>The <a href='lunar-display-zones.html'>display zones</a> did not simply surround each main base. Mondhafen Süd lay too near the southern limb for an undistorted emblem, while the Latin lunar establishment's Earthrise geometry also placed part of its ceremonial network away from the inhabited complex.</p><p>Remote construction and transport therefore created projected patterns several hundred kilometres across. Their surface coordinates were selected for how they appeared from Earth.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"national",title:"National displays",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Display</th><th>Principal technical feature</th></tr></thead><tbody><tr><td>Latin Space Community</td><td><a href='latin-lunar-cross.html'>Cross</a></td><td>Five- or nine-node axial pattern</td></tr><tr><td>United States</td><td><a href='american-lunar-star.html'>Five-pointed star</a></td><td>Outlined cluster linked to the commercial lunar system</td></tr><tr><td>Japan</td><td><a href='japanese-lunar-sun.html'>Circle or sun</a></td><td>Precisely timed radial array</td></tr><tr><td>British Commonwealth</td><td><a href='commonwealth-lunar-display.html'>Crown or compass-star form</a></td><td>Beacon field and metallized installations on Mare Serenitatis</td></tr><tr><td>Germany</td><td><a href='german-anamorphic-lunar-emblem.html'>Swastika</a></td><td>Anamorphic southern layout corrected for Earthward foreshortening</td></tr></tbody></table></div><sup class='canon-note' data-provenance='e'>[e]</sup>"},
      {id:"viewing",title:"Three viewing scales",html:"<p>The Moon spans about half a degree, or thirty arcminutes, in Earth's sky. Conventional 20/20 visual resolution is approximately one arcminute. An observer could detect an unresolved beacon much as the eye detects a star, but separating adjacent nodes required wide spacing.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Observer</th><th>Typical view</th></tr></thead><tbody><tr><td>Unaided eye</td><td>Several impossible star-like lights within the dark face of the Moon</td></tr><tr><td>Binocular or small telescope</td><td>Separated geometric clusters and simplified national motifs</td></tr><tr><td>Broadcast or observatory telescope</td><td>Complete patterns, settlement lighting, reflective fields, and the earthlit surface</td></tr></tbody></table></div><sup class='canon-note' data-provenance='e'>[e]</sup>"},
      {id:"sequence",title:"Three-movement sequence",html:"<p>Each system first introduced its crews, surface workers, and national pattern. All five emblems then operated simultaneously. In the final movement, colors and distinctive pulse rhythms ended and every participating beacon changed to the same white output.</p><p>The shared conclusion used the machinery of national rivalry without requiring any participant to renounce its emblem or jurisdiction.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"dawn",title:"Millennium Dawn",html:"<p>Television ceremonies remained attached to local midnight, but personal observation usually occurred before dawn. Families, schools, observatories, amateur societies, and municipal viewing stations used printed charts and broadcasts to direct attention toward the crescent.</p><p>The rolling public experience became known as the <a href='millennium-dawn.html'>Millennium Dawn</a>. The most reproduced image was a long-exposure observatory photograph balancing the natural crescent, earthlit disk, and artificial lights.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"},
      {id:"legacy",title:"Legacy",html:"<p>Many remote units remained useful as navigation, optical-communications, emergency, survey, or approach beacons. Commonwealth metallized fields continued to affect telescopic photographs as lunar sunrise crossed Mare Serenitatis after the ceremony.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The event became a defining public image at the opening of the 2000s: people on Earth could look at another world and see human infrastructure intended to remain.<sup class='canon-note' data-provenance='a'>[a]</sup> The common-white finale and its later political readings are incorporated development.<sup class='canon-note' data-provenance='e'>[e]</sup></p>"}
    ],
    related:[
      {href:"millennium-beacon-system.html",kicker:"Display engineering",label:"Millennium Beacon System"},
      {href:"lunar-display-zones.html",kicker:"Earthward geometry",label:"Lunar Display Zones"},
      {href:"millennium-dawn.html",kicker:"Public ceremony",label:"Millennium Dawn"},
      {href:"mature-space-age.html",kicker:"Historical setting",label:"Mature Space Age"},
      {href:"five-powers-in-2000.html",kicker:"Political setting",label:"Five Powers in 2000"},
      {href:"extraterrestrial-settlement.html",kicker:"Human presence",label:"Extraterrestrial Settlement"}
    ],
    facts:[
      ["Dates","31 December 1999–1 January 2000"],
      ["Viewing form","Rolling 30–36-hour ceremony"],
      ["Lunar phase","Waning crescent; about one-fifth illuminated"],
      ["Principal public viewing","Before local dawn"],
      ["Display mechanism","Earth-tracking active optical beacons"],
      ["Participating systems","Five"],
      ["Display scale","Several hundred kilometres per national pattern"],
      ["Final movement","All beacons in common white"],
      ["Preparatory period","1996–1999"],
      ["Organizing instrument","Name and final form open"]
    ]
  }),

  "millennium-beacon-system": millenniumIlluminationArticle({
    title:"Millennium Beacon System",
    category:"Lunar technology",
    eyebrow:"Optical engineering · temporary network with permanent uses",
    infoboxKicker:"Earth-facing lunar optical network",
    landscape:beaconSystemLandscape,
    lead:"The Millennium Beacon System was the distributed network of high-intensity optical transmitters, tracking assemblies, power packages, radiators, communications links, and control software used for the Millennium Lunar Illumination. It made compact installations appear as artificial stars from Earth and allowed widely separated sites to form visible geometric patterns.",
    canon:"Active Earth-facing optical transmitters, broad-beam rather than communications-pencil operation, megawatt-class peak optical output as a working engineering order, larger electrical input, short synchronized duty cycles, installation at permanent and temporary lunar sites, precision Earth tracking, remote construction, shared timing, several viewing scales, and post-event navigation, communication, survey, or emergency reuse are established. Exact source technology, wavelength, aperture, manufacturer, rating, efficiency, burst length, site count, controller, and safety standard remain open.",
    sections:[
      {id:"requirements",title:"Design requirement",html:"<p>Surface lamps could illuminate nearby ground but could not make a recognizable mark across lunar distance. A display node had to deliver enough light toward Earth to be detectable as a point source while remaining separated from neighboring nodes in the observer's field of view.</p><p>The engineering problem was therefore optical transmission and geometry, not the illumination of hundreds of square kilometres of terrain.</p>"},
      {id:"transmitter",title:"Optical transmitter",html:"<p>Each display unit combined a bank of high-intensity visible emitters or lasers with tracking optics and a deliberately broadened beam. Communications systems normally minimized divergence; the display system widened it enough to cover Earth or a large terrestrial region despite tracking error.</p><p>The emitters were operated as conspicuous astronomical point sources rather than as image projectors.</p>"},
      {id:"power",title:"Power and duty cycle",html:"<p>The canonized engineering estimate placed individual units in the range of roughly 1–5 MW peak visible output and perhaps 5–20 MW electrical input. These were design orders rather than verified standard ratings.</p><p>Reactors, solar-electric systems, stored energy, fuel cells, or turbine generators could support short scheduled bursts. A site did not need continuous full-power operation.</p>"},
      {id:"thermal",title:"Heat rejection and protection",html:"<p>Optical inefficiency turned much of the electrical input into heat. Radiators, thermal mass, controlled burst length, cooldown intervals, dust protection, and redundant shutters were major parts of each installation.</p><p>Sites were kept clear of ordinary approach lanes and pointed only under coordinated tracking control. Exact eye-safety and aircraft-warning procedures are not fixed.</p>"},
      {id:"tracking",title:"Earth tracking and timing",html:"<p>Every node required ephemeris data, precision pointing, time synchronization, health telemetry, and an agreed operating schedule. Earth was an extended moving target from the lunar surface, and national networks had to compensate for libration, local horizon geometry, and the desired terrestrial viewing region.</p><p>Common timing allowed distinct national control systems to enter the simultaneous and common-white phases together.</p>"},
      {id:"deployment",title:"Deployment",html:"<p>Remote vehicles placed optical heads, power modules, radiators, antennas, and service shelters at bases, mines, relay sites, and temporary ceremonial stations during 1996–99. Some units used existing power and communications; others carried self-contained short-duration packages.</p><p>The physically compact node was cheaper than an illuminated surface feature of comparable apparent size, although the network as a whole remained a major multinational project.</p>"},
      {id:"operation",title:"Operation during the event",html:"<p>National operators first ran separate checks and presentation sequences. Controllers then synchronized all five emblem fields before sending the final instruction that removed national colors or pulse signatures and selected common white.</p><p>Telemetry and observatory feeds allowed engineers to correct failed nodes or brightness imbalance during later viewing windows.</p>"},
      {id:"reuse",title:"Conversion after 2000",html:"<p>Permanent units became optical-communications terminals, navigation references, approach aids, emergency markers, survey transponders, or calibration sources. Temporary sites could be recovered for parts or retained as reserve beacons.</p><p>The reuse program mattered politically because it allowed ministries and firms to describe ceremonial expenditure as an accelerated lunar infrastructure program.</p>"}
    ],
    related:[
      {href:"millennium-lunar-illumination.html",kicker:"Principal event",label:"Millennium Lunar Illumination"},
      {href:"lunar-display-zones.html",kicker:"Network geography",label:"Lunar Display Zones"},
      {href:"planetary-satellite-system.html",kicker:"Operational networks",label:"Planetary Satellite System"},
      {href:"extraterrestrial-navigation-facilities.html",kicker:"Legal afterlife",label:"Extraterrestrial Navigation Facilities"},
      {href:"orbital-law.html",kicker:"Safety precedent",label:"Orbital Law"},
      {href:"millennium-dawn.html",kicker:"Public use",label:"Millennium Dawn"}
    ],
    facts:[
      ["Deployment","1996–1999"],
      ["Primary function","Earth-visible lunar display"],
      ["Node form","Steerable broad-beam optical transmitter"],
      ["Peak optical output","Working order: 1–5 MW per node"],
      ["Electrical input","Working order: 5–20 MW per node"],
      ["Operating mode","Short synchronized bursts"],
      ["Control","National networks with shared timing"],
      ["Permanent reuse","Navigation, communications, survey, emergency marking"],
      ["Exact standard","Open"]
    ]
  }),

  "lunar-display-zones": millenniumIlluminationArticle({
    title:"Lunar display zones",
    category:"Lunar geography",
    eyebrow:"Projected geometry · remote ceremonial sites",
    infoboxKicker:"Earthward display geography",
    landscape:beaconSystemLandscape,
    lead:"The lunar display zones were the geographically dispersed groups of beacon sites assigned to the five systems for the Millennium Lunar Illumination. They were laid out according to Earthward projection, visual separation, power and transport access, and safety rather than being confined to the immediate grounds of the sponsoring bases.",
    canon:"Five national display zones, use of existing and temporary sites, several-hundred-kilometre pattern scales, roughly 120–150 km illustrative node spacing, separation between principal bases and some ceremonial beacons, deliberate correction for foreshortening, remote construction, and protected approach and service corridors are established. Exact coordinates, recognized boundaries, exclusive rights, maps, node inventories, survey campaigns, and post-event title remain open.",
    sections:[
      {id:"projection",title:"Earthward projection",html:"<p>A surface pattern is seen obliquely except near the center of the lunar disk. Libration and the observer's position on Earth change the projected shape slightly. Designers therefore worked backward from a desired image in the sky to a set of lunar coordinates.</p><p>The display was an arrangement of apparent points rather than a ground drawing intended to look correct to a person standing among the equipment.</p>"},
      {id:"spacing",title:"Angular separation",html:"<p>The Moon spans approximately thirty arcminutes. Conventional 20/20 vision resolves about one arcminute under favorable conditions. An illustrative 120–150 km separation between major nodes placed adjacent lights near or above this scale at lunar distance.</p><p>Exact spacing varied with brightness, contrast, atmospheric conditions, the number of nodes, and whether the intended audience used unaided vision, binoculars, or broadcast telescopes.</p>"},
      {id:"five",title:"Five display geographies",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Geographic problem</th><th>Response</th></tr></thead><tbody><tr><td>Germany</td><td>Mondhafen Süd lay near the southern limb</td><td>Anamorphic sites extended toward a clearer near-side projection</td></tr><tr><td>United States</td><td>Commercial installations were dispersed</td><td>Existing navigation and resource sites helped outline the star field</td></tr><tr><td>Japan</td><td>Kaguya and polar utilities served different functions</td><td>Machine-prepared radial sites used precise timing</td></tr><tr><td>Commonwealth</td><td>Serenity occupied a dark near-side mare</td><td>Beacon points were paired with conspicuous metallized fields</td></tr><tr><td>Latin system</td><td>Sancta Maria Lunae's Earthrise geometry could foreshorten a local cross</td><td>Remote near-side nodes completed the axial pattern</td></tr></tbody></table></div>"},
      {id:"construction",title:"Construction and service",html:"<p>Rovers, cargo landers, mining trains, and remote manipulators prepared pads, cables, antennas, thermal systems, and service shelters. Sites near permanent routes could borrow power and maintenance; remote stations required stored energy, independent communications, and recovery plans.</p><p>The work accelerated mapping and surface mobility across regions previously crossed only by survey vehicles.</p>"},
      {id:"safety",title:"Safety corridors",html:"<p>High-power pointing, radiators, stored reactants, dust, and emergency servicing required controlled zones around each node. Display operations were separated from landing approaches, crewed traverses, and ordinary optical communications.</p><p>These operational areas did not constitute internationally accepted territorial claims. Their practical protection followed the developing law of occupied installations and hazardous activity.</p>"},
      {id:"temporary",title:"Temporary and permanent sites",html:"<p>Some beacons were extensions of working settlements, mines, or relay stations. Others existed mainly for the ceremony and carried self-contained equipment for a limited duty cycle.</p><p>Afterward, useful locations became navigation or communications points. Unnecessary sites were shut down, retained as monuments, or stripped by the sponsoring system.</p>"},
      {id:"maps",title:"Cartography and open coordinates",html:"<p>Public commemorative maps show stylized national patterns rather than surveyed technical coordinates. Later reproductions often move lights to improve legibility or place them closer to famous bases.</p><p>The archive treats exact coordinates and final node inventories as open. The established geography is functional: widely separated near-side networks designed for Earthward appearance.</p>"}
    ],
    related:[
      {href:"millennium-beacon-system.html",kicker:"Display hardware",label:"Millennium Beacon System"},
      {href:"extraterrestrial-claims.html",kicker:"Operating areas",label:"Extraterrestrial Claims"},
      {href:"mondhafen-sud.html",kicker:"German base",label:"Mondhafen Süd"},
      {href:"serenity-lunar-complex.html",kicker:"Commonwealth base",label:"Serenity"},
      {href:"sancta-maria-lunae.html",kicker:"Latin base",label:"Sancta Maria Lunae"}
    ],
    facts:[
      ["Number of national zones","Five"],
      ["Pattern scale","Several hundred kilometres"],
      ["Illustrative node spacing","About 120–150 km"],
      ["Principal design frame","Appearance from Earth"],
      ["Base adjacency","Not required"],
      ["Foreshortening correction","Used"],
      ["Construction period","1996–1999"],
      ["Territorial sovereignty","Not generally recognized"],
      ["Exact coordinates","Open"]
    ]
  }),

  "latin-lunar-cross": millenniumIlluminationArticle({
    title:"Latin lunar cross",
    category:"Lunar displays",
    eyebrow:"Latin Space Community · axial beacon pattern",
    infoboxKicker:"Latin national display",
    landscape:illuminationSequenceLandscape,
    lead:"The Latin lunar cross was the cross-shaped optical-beacon field operated by the Latin Space Community during the Millennium Lunar Illumination. It joined the religious and civil symbolism of Sancta Maria Lunae to a geographically wider near-side network whose principal nodes could be resolved from Earth.",
    canon:"A Latin cross made from five or perhaps nine bright points, administration through the Latin lunar program, use of sites beyond the immediate base, separate national introduction, participation in the simultaneous-emblem phase, conversion to common white, and later communication, navigation, or devotional commemoration are established. Exact node count, coordinates, color, liturgical text, blessing, command language, operator shares, and relation to a formal Church office remain open.",
    sections:[
      {id:"design",title:"Design",html:"<p>The simplest design used five principal points: top, center, left, right, and a lower foot separated by a longer vertical interval. A nine-node elaboration could strengthen the arms and foot for telescopic viewing.</p><p>The display relied on point separation rather than illuminated lines. Published art commonly connects the beacons even though no physical line joined them on the surface.</p>"},
      {id:"geography",title:"Geography",html:"<p><a href='sancta-maria-lunae.html'>Sancta Maria Lunae</a> supplied personnel, communications, religious meaning, and logistical authority. Its chosen Earthrise geometry did not require the entire cross to sit immediately around the inhabited modules.</p><p>Remote nodes extended toward a clearer near-side projection and used existing survey or communications routes where practical.</p>"},
      {id:"operation",title:"Operation",html:"<p>Latin national broadcasts introduced crews and workers from Italy, Spain, Portugal, and Occitania as well as the base's clerical and scientific personnel. The cross entered the later simultaneous-emblem phase under Latin control.</p><p>In the final movement its distinctive rhythm or color ended with the rest of the network and the same points remained visible in white.</p>"},
      {id:"meaning",title:"Religious and civil meaning",html:"<p>Church audiences read the cross as a sign of Christian presence beyond Earth. Secular Latin institutions presented it as the common mark of a multinational civilization whose space program could act without German or American transport.</p><p>The two readings coexisted. No established canon requires the ceremony itself to have been a liturgy.</p>"},
      {id:"workshare",title:"Multinational workshare",html:"<p>The Latin Space Community's ordinary division of launch, avionics, structures, tracking, recovery, and finance made the cross a test of multinational scheduling as well as optics. The precise national assignment of individual beacon sites remains open.</p><p>Common control standards allowed the separate contributors to operate as one display field.</p>"},
      {id:"reception",title:"Reception",html:"<p>Supporters treated the cross as the most immediately legible of the five emblems. Critics inside and outside the Latin system disputed whether a Catholic symbol could represent every citizen and partner.</p><p>Its disappearance into the common-white finale gave the debate a second interpretation: the cross remained physically present while ceasing to be optically separate.</p>"},
      {id:"after",title:"After 2000",html:"<p>Useful nodes remained available for navigation, communications, and emergency signaling. Commemorations associated the network with Sancta Maria Lunae even where individual sites lay far from the base.</p><p>Exact later devotional practice and protected heritage status remain open.</p>"}
    ],
    related:[
      {href:"sancta-maria-lunae.html",kicker:"Administering settlement",label:"Sancta Maria Lunae"},
      {href:"latin-space-community.html",kicker:"Operator",label:"Latin Space Community"},
      {href:"millennium-beacon-system.html",kicker:"Technical system",label:"Millennium Beacon System"},
      {href:"catholic-pastoral-care-in-space.html",kicker:"Religious setting",label:"Catholic Pastoral Care in Space"},
      {href:"millennium-dawn.html",kicker:"Public ceremony",label:"Millennium Dawn"}
    ],
    facts:[
      ["Sponsor","Latin Space Community"],
      ["Form","Latin cross"],
      ["Working node count","Five or nine"],
      ["Principal base","Sancta Maria Lunae"],
      ["Display area","Near-side sites beyond the main base"],
      ["Presentation","Separate Latin sequence"],
      ["Final state","Common white"],
      ["Exact liturgical status","Open"]
    ]
  }),

  "american-lunar-star": millenniumIlluminationArticle({
    title:"American lunar star",
    category:"Lunar displays",
    eyebrow:"United States · corporate-federal lunar network",
    infoboxKicker:"American national display",
    landscape:illuminationSequenceLandscape,
    lead:"The American lunar star was the five-pointed optical-beacon pattern operated by the United States' corporate and federal lunar system during the Millennium Lunar Illumination. Its distributed sites turned the American preference for traffic, private operators, and modular surface development into a single national emblem.",
    canon:"A five-pointed star, an outline of about ten nodes as the principal working design, use of the Kennedy-centered but commercially dispersed lunar system, combined corporate and federal operation, separate American introduction, common-white participation, public emphasis on crews and settlement families, and infrastructure reuse are established. Exact node count, participating companies, federal authority, concession sites, colors, pulse sequence, commercial marks, budgets, and control center remain open.",
    sections:[
      {id:"design",title:"Design",html:"<p>The working design outlined a five-pointed star with approximately ten major beacon nodes. The layout favored a recognizable silhouette through binoculars and broadcast telescopes rather than an unbroken luminous figure.</p><p>Public diagrams often regularized the star. The actual surface coordinates had to account for projection, available sites, and terrain.</p>"},
      {id:"system",title:"Corporate and federal system",html:"<p><a href='kennedy-lunar-station.html'>Kennedy Lunar Station</a> remained the historical federal center, while companies operated annexes, resource sites, transport services, navigation aids, and family-capable settlements across a wider area.</p><p>The display therefore required a federal national sequence assembled from assets owned or serviced by several operators. The exact contracting and command arrangement remains open.</p>"},
      {id:"construction",title:"Construction",html:"<p>Existing approach beacons, communications routes, survey camps, and power systems reduced the number of wholly ceremonial installations. Cargo and maintenance moved through America's high-frequency Earth–Moon transport network.</p><p>Temporary nodes could be deployed with self-contained power and later absorbed into commercial navigation or emergency networks.</p>"},
      {id:"broadcast",title:"American presentation",html:"<p>American broadcasts emphasized pilots, surface technicians, miners, engineers, settlement families, and private operators as well as federal crews. The star was presented as national without requiring every site to be federal property.</p><p>This ambiguity matched the wider American claim that private installations remained commercial actors while also constituting an American presence.</p>"},
      {id:"sequence",title:"Place in the ceremony",html:"<p>The star appeared during the separate American viewing windows and then alongside the other four national fields. Its points remained fixed during the final change to common white.</p><p>Any national color or pulse signature ended in the last movement; exact American display programming is not established.</p>"},
      {id:"debate",title:"Commercial debate",html:"<p>Supporters argued that corporate infrastructure made the spectacle possible without one new federal lunar works program. Critics described the display as public underwriting for companies that would later retain useful sites.</p><p>The absence of visible corporate logos prevented the national star from becoming a conventional advertisement, though sponsors were prominent in broadcasts.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Several nodes joined the American commercial navigation and communications layer after 2000. The star became a recurring image in discussions of the corporate republic's ability to coordinate nominally private systems for a national purpose.</p>"}
    ],
    related:[
      {href:"kennedy-lunar-station.html",kicker:"Historical center",label:"Kennedy Lunar Station"},
      {href:"american-corporate-space-system.html",kicker:"Commercial network",label:"American Corporate Space System"},
      {href:"frontier-orbital-lines.html",kicker:"Transport system",label:"Frontier Orbital Lines"},
      {href:"millennium-beacon-system.html",kicker:"Technical system",label:"Millennium Beacon System"},
      {href:"millennium-dawn.html",kicker:"Public ceremony",label:"Millennium Dawn"}
    ],
    facts:[
      ["Sponsor","United States"],
      ["Form","Five-pointed star"],
      ["Working node count","About ten"],
      ["Principal center","Kennedy Lunar Station"],
      ["Operators","Federal and corporate"],
      ["Display geography","Commercially dispersed lunar sites"],
      ["Final state","Common white"],
      ["Exact contract structure","Open"]
    ]
  }),

  "japanese-lunar-sun": millenniumIlluminationArticle({
    title:"Japanese lunar sun",
    category:"Lunar displays",
    eyebrow:"Empire of Japan · machine-prepared radial array",
    infoboxKicker:"Japanese national display",
    landscape:illuminationSequenceLandscape,
    lead:"The Japanese lunar sun was the circular or radial optical-beacon field operated by Japan during the Millennium Lunar Illumination. An array of approximately eight or twelve principal points used the machine-first lunar network's precise timing, autonomous health control, and remote servicing to present a sun from Earth.",
    canon:"A circle or sun, an eight- or twelve-node working design, Japanese control, relation to Kaguya Base and the wider robotic and corporate lunar system, machine preparation, precise timing, separate national sequence, common-white conclusion, associated-state visibility in the broadcast, and later utility are established. Exact node count, rays, coordinates, colors, zaibatsu assignments, associated-state workshares, command architecture, and official title remain open.",
    sections:[
      {id:"design",title:"Design",html:"<p>The simplest version placed eight bright nodes around a circle; a twelve-node version produced a smoother telescopic outline and permitted radial pulse effects. The display was read as a sun rather than as a filled disk.</p><p>Exact rays and internal points are not fixed. The canonical feature is a circular or solar geometry produced by separated beacons.</p>"},
      {id:"preparation",title:"Machine preparation",html:"<p>Japan's lunar program had been built through orbiters, landers, rovers, relays, autonomous navigation, and remotely supervised construction. Those systems surveyed sites and emplaced much of the display hardware before ordinary crewed servicing.</p><p>The beacon project therefore extended an established operational method rather than creating a unique ceremonial workforce.</p>"},
      {id:"network",title:"Kaguya and the corporate network",html:"<p><a href='kaguya-base.html'>Kaguya Base</a> was the principal inhabited command symbol. Corporate mining, polar power, communications, and transport sites provided additional infrastructure and route knowledge.</p><p>The exact division between state, zaibatsu, and associated-state operators is not settled.</p>"},
      {id:"control",title:"Timing and control",html:"<p>The radial form rewarded brightness matching and precise sequence control. Local autonomy allowed individual nodes to maintain timing during brief communication interruptions while human controllers retained authority over activation and shutdown.</p><p>Health telemetry and robotic inspection reduced the need for crews at every ceremonial station.</p>"},
      {id:"presentation",title:"Japanese presentation",html:"<p>Broadcasts connected the display to solar symbolism, technical order, and the machine-first road by which Japan had prepared lunar and Mars destinations. Associated-state specialists and instruments appeared within the presentation without changing Japanese national command.</p><p>The sun later entered the simultaneous-emblem movement beside the other national fields.</p>"},
      {id:"white",title:"Common-white conclusion",html:"<p>Any radial pulse or distinct color stopped in the final movement. The same circular array remained present as a set of white points, visually joining rather than erasing the system's contribution.</p>"},
      {id:"after",title:"After 2000",html:"<p>Useful stations returned to navigation, resource surveying, optical communication, power-system calibration, or emergency marking. The event strengthened Japan's claim that robotic preparation could create durable public infrastructure before mass crew deployment.</p>"}
    ],
    related:[
      {href:"kaguya-base.html",kicker:"Command settlement",label:"Kaguya Base"},
      {href:"japanese-lunar-polar-power-station.html",kicker:"Corporate utility",label:"Japanese Lunar Polar Power Station"},
      {href:"japanese-lunar-exploration-program.html",kicker:"Robotic precursor",label:"Japanese Lunar Exploration Program"},
      {href:"millennium-beacon-system.html",kicker:"Technical system",label:"Millennium Beacon System"},
      {href:"millennium-dawn.html",kicker:"Public ceremony",label:"Millennium Dawn"}
    ],
    facts:[
      ["Sponsor","Empire of Japan"],
      ["Form","Circle or sun"],
      ["Working node count","Eight or twelve"],
      ["Principal base","Kaguya Base"],
      ["Preparation","Robotic survey and emplacement"],
      ["Operators","State, zaibatsu, and associated-state participation"],
      ["Final state","Common white"],
      ["Official title","Open"]
    ]
  }),

  "commonwealth-lunar-display": millenniumIlluminationArticle({
    title:"Commonwealth lunar display",
    category:"Lunar displays",
    eyebrow:"Serenity complex · crown and compass interpretations",
    infoboxKicker:"Commonwealth national display",
    landscape:illuminationSequenceLandscape,
    lead:"The Commonwealth lunar display was the beacon and reflective-field installation operated from the Serenity complex during the Millennium Lunar Illumination. Contemporary summaries describe its principal emblem as a stylized crown, compass star, or a radial form readable as both; the display's exact official description remains unsettled.",
    canon:"A stylized crown or compass-star design, operation through the British-led Commonwealth system, Mare Serenitatis location, advantage of a dark near-side basalt background, active optical beacons as the Earth-visible mechanism, extensive metallized fields as telescopic and later sunlit supporting elements, national and Commonwealth presentation, simultaneous-emblem phase, common-white conclusion, and continuing engineering use of some fields are established. The final official emblem description, node count, site plan, participating dominions and territories, colors, reflective area, and post-event ownership remain open.",
    sections:[
      {id:"form",title:"Crown and compass interpretations",html:"<p>The source record preserves both a stylized crown and a compass-star proposal. Later commemorative art often combines a low crown-like upper line with a radial navigation point, making either reading possible.</p><p>The archive does not treat that later hybrid as proof of the final official design. What is established is a simplified Commonwealth emblem suitable for widely separated beacon nodes.</p>"},
      {id:"serenity",title:"Mare Serenitatis",html:"<p><a href='serenity-lunar-complex.html'>Serenity</a> occupied a broad dark basaltic mare on the lunar near side. The background made local artificial infrastructure conspicuous in broadcast imagery and reduced the severe foreshortening faced by near-limb and polar installations.</p><p>This was the most favorable principal-base setting among the five national displays.</p>"},
      {id:"beacons",title:"Active beacons",html:"<p>Earth-visible points came from active optical transmitters. Their spacing formed the emblem while the Serenity command, communications, and power systems coordinated the local sequence.</p><p>Beacon sites could extend beyond the inhabited complex where geometry required.</p>"},
      {id:"film",title:"Metallized fields",html:"<p>During 1998–99 Commonwealth surface vehicles unrolled large areas of metallized film around selected parts of Serenity. Active beacons carried the night-side display; the sheets improved telescopic images and became increasingly bright as lunar morning reached the complex after the ceremony.</p><p>Some fields later served thermal, radio, communications, calibration, or solar-engineering purposes. Others remained principally ceremonial.</p>"},
      {id:"workshare",title:"Commonwealth workshare",html:"<p>British integration and command drew upon Canadian avionics and communications, Australian tracking, New Zealand navigation, southern African astronomy and support, and the wider ground network. The final division of work on the display itself is open.</p><p>The presentation used this distributed system to make the emblem Commonwealth rather than merely British.</p>"},
      {id:"sequence",title:"Ceremonial sequence",html:"<p>The national broadcast introduced the settlement, surface workers, and distributed ground teams before activating the full pattern. The emblem later appeared with the other four displays and then changed to common white.</p><p>Its favorable background made the Commonwealth site a frequent anchor image in international coverage.</p>"},
      {id:"after",title:"The changing telescopic image",html:"<p>Unlike the beacon-only patterns, Serenity continued to change visibly through telescopes as sunrise advanced across the metallized fields. The event therefore had a photographic afterlife lasting beyond the principal predawn windows.</p><p>Those images became part of the Commonwealth account of its rapid 1986–2000 ascent from the rear of the space race.</p>"}
    ],
    related:[
      {href:"serenity-lunar-complex.html",kicker:"Operating settlement",label:"Serenity"},
      {href:"commonwealth-space-expansion.html",kicker:"National program",label:"Commonwealth Space Expansion"},
      {href:"commonwealth-planetary-network.html",kicker:"Control and tracking",label:"Commonwealth Planetary Network"},
      {href:"millennium-beacon-system.html",kicker:"Technical system",label:"Millennium Beacon System"},
      {href:"millennium-dawn.html",kicker:"Public ceremony",label:"Millennium Dawn"}
    ],
    facts:[
      ["Sponsor","British Commonwealth"],
      ["Form","Stylized crown or compass star"],
      ["Principal location","Mare Serenitatis"],
      ["Operating settlement","Serenity"],
      ["Earth-visible mechanism","Active optical beacons"],
      ["Supporting feature","Metallized surface fields"],
      ["Final state","Common white"],
      ["Exact official emblem","Open"]
    ]
  }),

  "german-anamorphic-lunar-emblem": millenniumIlluminationArticle({
    title:"German anamorphic lunar emblem",
    category:"Lunar displays",
    eyebrow:"Greater German Reich · Earthward projection from the southern Moon",
    infoboxKicker:"German national display",
    landscape:illuminationSequenceLandscape,
    lead:"The German anamorphic lunar emblem was the swastika-shaped optical-beacon field used by Germany during the Millennium Lunar Illumination. Its southern sites were deliberately distorted on the lunar surface so that foreshortening produced a regular emblem when viewed from Earth.",
    canon:"A swastika display, a thirteen- or seventeen-node working pattern, German national control, relation to Mondhafen Süd, extension toward clearer near-side sites, deliberate anamorphic distortion, primary resolution through binoculars and television, separate German sequence, common-white conclusion, and later technical reuse are established. Exact node count, coordinates, orientation, color, control office, construction formations, public slogan, operating record, and protected status remain open.",
    sections:[
      {id:"problem",title:"Southern projection problem",html:"<p><a href='mondhafen-sud.html'>Mondhafen Süd</a> lay close to the lunar south polar region. A regular surface emblem placed around the base would appear compressed and skewed from Earth.</p><p>German planners therefore extended the display toward more favorable near-side terrain and designed it in the projected Earthward frame.</p>"},
      {id:"anamorph",title:"Anamorphic layout",html:"<p>The ground pattern looked stretched and irregular to a nearby surface observer. Seen from approximately 384,000 kilometres away, the same coordinates corrected the southern foreshortening and produced the intended geometry.</p><p>Libration and viewing location prevented perfect correction for every observer; broadcast and observatory images used the planned reference viewpoint.</p>"},
      {id:"nodes",title:"Beacon pattern",html:"<p>The working design used thirteen or seventeen principal nodes, enough to distinguish the arms and rotation of the emblem through binoculars and television optics. Widely spaced point sources replaced any attempt to illuminate continuous lines.</p><p>The final inventory and orientation remain open.</p>"},
      {id:"construction",title:"Construction and control",html:"<p>German lunar transport, remote construction, power, survey, and communications systems placed and serviced the sites during the Promenadenring and post-Marsplan expansion period. Some nodes drew upon working industrial routes; others were primarily ceremonial.</p><p>German station command synchronized the national pattern with the Five-Power schedule.</p>"},
      {id:"presentation",title:"German presentation",html:"<p>Domestic broadcasts connected the emblem to permanent settlement, Marsplan 92, Wolfgang Hitler's technological reign, and the conversion of the founding movement's symbol into a mark visible on another world.</p><p>Foreign coverage often separated the engineering accomplishment from the regime's symbolism and gave greater emphasis to the later common-white phase.</p>"},
      {id:"white",title:"Common-white conclusion",html:"<p>In the last movement the same distorted surface field remained physically unchanged while its color and timing joined the rest of the network. From Earth, the swastika ceased to operate as a separate display and became one cluster within dozens of white lights.</p><p>The transformation was a technical act rather than a renunciation of the symbol.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Useful nodes returned to navigation, communications, calibration, survey, or emergency service. The ground layout became a frequent example in German optics and cartography teaching because it made map projection visible at planetary scale.</p><p>Later commemorative maps are unreliable guides to exact coordinates.</p>"}
    ],
    related:[
      {href:"mondhafen-sud.html",kicker:"Principal lunar base",label:"Mondhafen Süd"},
      {href:"lunar-display-zones.html",kicker:"Projection geography",label:"Lunar Display Zones"},
      {href:"millennium-beacon-system.html",kicker:"Technical system",label:"Millennium Beacon System"},
      {href:"marsplan-92.html",kicker:"Prestige background",label:"Marsplan 92"},
      {href:"millennium-dawn.html",kicker:"International ceremony",label:"Millennium Dawn"}
    ],
    facts:[
      ["Sponsor","Greater German Reich"],
      ["Form","Swastika"],
      ["Working node count","Thirteen or seventeen"],
      ["Principal base","Mondhafen Süd"],
      ["Design method","Earthward anamorphic projection"],
      ["Primary detailed viewing","Binocular and telescopic"],
      ["Final state","Common white"],
      ["Exact coordinates","Open"]
    ]
  }),

  "millennium-dawn": millenniumIlluminationArticle({
    title:"Millennium Dawn",
    category:"Public culture",
    eyebrow:"Global viewing culture · 1 January 2000",
    infoboxKicker:"Popular name for the lunar ceremony",
    landscape:illuminationSequenceLandscape,
    lead:"Millennium Dawn was the popular name for the predawn public viewing of the Millennium Lunar Illumination on 1 January 2000. Although national television ceremonies were attached to local midnight, the waning crescent made the Moon primarily a morning object, so the shared experience moved through time zones as families and public observatories went outside before sunrise.",
    canon:"The popular Millennium Dawn name, rolling 30–36-hour viewing period, midnight broadcasts, predawn personal observation, public telescopes, families using binoculars, national introductions, simultaneous-emblem movement, common-white finale, ordinary naked-eye detection of some lights, observatory photography, global retransmission, and defining turn-of-century memory are established. Exact first use of the name, local schedules, audience totals, broadcasters, commentators, weather losses, photographs, speeches, music, and regional reception remain open.",
    sections:[
      {id:"name",title:"Name",html:"<p>The technical event was the Millennium Lunar Illumination. Newspapers and broadcasters used <em>Millennium Dawn</em> for the period when the waning crescent became visible before sunrise and ordinary observers could see artificial lights within it.</p><p>The first publication or broadcaster to use the name has not been established.</p>"},
      {id:"rolling",title:"Rolling global ceremony",html:"<p>The display began as 1 January reached the western Pacific and continued until the date had passed through the Americas. National control centers repeated or adjusted sequences for different viewing regions.</p><p>This 30–36-hour form reconciled one lunar event with many terrestrial midnights, horizons, and weather systems.</p>"},
      {id:"midnight",title:"Midnight broadcasts",html:"<p>Television carried station preparations, crew interviews, engineering explanations, rehearsals, and recorded lunar feeds during local New Year programming even when the Moon was below the horizon.</p><p>Viewers were told when to return outside before dawn and where within the crescent to look.</p>"},
      {id:"public",title:"Public observation",html:"<p>Astronomical societies, schools, universities, municipal observatories, military tracking stations, and broadcasters placed telescopes in public squares and parks. Families passed binoculars among neighbors and woke children before sunrise.</p><p>In clear dark skies, the brightest and widest-separated lights could be detected without optical aid. Binoculars revealed clusters; telescopes supplied the full motifs.</p>"},
      {id:"movements",title:"The three movements",html:"<ol><li>Each system introduced and activated its national display.</li><li>All five national emblems operated simultaneously.</li><li>Distinctive colors or rhythms ended and every beacon changed to common white.</li></ol><p>The final movement had no established common slogan. Its force came from the visible change itself.</p>"},
      {id:"image",title:"The defining image",html:"<p>The photograph reproduced in retrospectives was an observatory exposure that preserved the thin natural crescent, the dim earthlit disk, and the beacon points without saturating them. It showed more detail than an unaided observer but represented lights people had actually seen.</p><p>Exact authorship and the canonical first image remain open.</p>"},
      {id:"weather",title:"Weather and unequal visibility",html:"<p>Cloud, haze, urban glare, horizon obstructions, local latitude, and viewing time prevented a uniform experience. Many audiences saw only live or delayed broadcasts.</p><p>The rolling schedule offered repeated windows but could not make the event physically visible everywhere. Later memory often flattened these differences into one global moment.</p>"},
      {id:"memory",title:"Public memory",html:"<p>Governments used the event to advertise their systems and claims. Religious, anti-imperial, and opposition readings accompanied the official celebration.</p><p>The common-white finale nevertheless retained an unusually durable nonpartisan memory: human-made lights were visible on another celestial body, and the settlements that produced them were intended to remain.</p>"}
    ],
    related:[
      {href:"millennium-lunar-illumination.html",kicker:"Principal event",label:"Millennium Lunar Illumination"},
      {href:"millennium-beacon-system.html",kicker:"Display engineering",label:"Millennium Beacon System"},
      {href:"world-in-2000.html",kicker:"Historical setting",label:"World in 2000"},
      {href:"five-powers-in-2000.html",kicker:"Political setting",label:"Five Powers in 2000"},
      {href:"off-world-family-life.html",kicker:"Settlement society",label:"Off-World Family Life"}
    ],
    facts:[
      ["Date","1 January 2000"],
      ["Popular name","Millennium Dawn"],
      ["Duration","About 30–36 hours"],
      ["Principal personal viewing","Before dawn"],
      ["Unaided view","Several artificial point sources"],
      ["Detailed view","Binoculars, telescopes, and broadcasts"],
      ["Ceremonial movements","Three"],
      ["Final image","Earthlit Moon with common white lights"],
      ["Exact first use of name","Open"]
    ]
  })
});

function addMillenniumRelated(slug, href, kicker, label) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(item => item.href === href)) article.related.push({href,kicker,label});
}

addMillenniumRelated("mature-space-age","millennium-beacon-system.html","Millennium engineering","Millennium Beacon System");
addMillenniumRelated("sancta-maria-lunae","latin-lunar-cross.html","Millennium display","Latin Lunar Cross");
addMillenniumRelated("kennedy-lunar-station","american-lunar-star.html","Millennium display","American Lunar Star");
addMillenniumRelated("kaguya-base","japanese-lunar-sun.html","Millennium display","Japanese Lunar Sun");
addMillenniumRelated("serenity-lunar-complex","commonwealth-lunar-display.html","Millennium display","Commonwealth Lunar Display");
addMillenniumRelated("mondhafen-sud","german-anamorphic-lunar-emblem.html","Millennium display","German Anamorphic Lunar Emblem");
