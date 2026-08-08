window.deepArticles = window.deepArticles || {};

const planetaryNetworkSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature space systems and planetary infrastructure"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — 1985–2010 space chronology"},
  {href:"../transcript.md",label:"Master Transcript — post-1985 British and planetary development"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open names and specifications"}
];

const planetaryNetworkArticle = config => ({
  category:"Spaceflight",
  eyebrow:"Planetary infrastructure · 1988–2010",
  infoboxKicker:"Inner-solar communications",
  ...config,
  sources:[...planetaryNetworkSources,...(config.additionalSources || [])],
  categories:config.categories || ["Spaceflight","Communications satellites","Navigation","Interplanetary infrastructure"]
});

const innerSolarLandscape = {
  src:"assets/diagrams/inner-solar-communications-geography.svg",
  alt:"Diagram of the inner Solar System communications geography by 2010, including Earth and the Moon, Mercury, Venus, Mars, near-Earth asteroids, and Ceres and Vesta",
  caption:"By 2010 the inner Solar System contains overlapping national relay, navigation, scientific, and strategic systems rather than one universal network"
};

const resolutionWorkshareLandscape = {
  src:"assets/diagrams/resolution-compact-workshare.svg",
  alt:"Diagram showing the Commonwealth workshare established around Resolution under David Ashcombe",
  caption:"The Resolution Compact makes national workshares part of one continuously operated Commonwealth institution"
};

const stellaShockLandscape = {
  src:"assets/diagrams/stella-maris-shock-comparison.svg",
  alt:"Stylized British press comparison of Resolution and Stella Maris during the early 1990s",
  caption:"The shock depended on a visually persuasive comparison, not a settled technical finding that one station had surpassed the other"
};

Object.assign(window.deepArticles, {
  "planetary-satellite-system": planetaryNetworkArticle({
    title:"Planetary satellite system",
    category:"Space infrastructure",
    landscape:innerSolarLandscape,
    lead:"The planetary satellite system is the overlapping communications, navigation, weather, mapping, scientific, and strategic infrastructure established throughout the inner Solar System from the late 1980s to 2010. It is not a single interplanetary internet: German, American, Japanese, Commonwealth, and Latin networks retain separate command, encryption, and political ownership while exchanging selected safety and scientific data through agreed interfaces.",
    canon:"Serious planetary infrastructure by 2000, network growth from 2000 to 2005, a mature inner-solar communications geography by 2010, the listed planetary functions, the density of Mars infrastructure, the presence of systems near Mercury, Venus, the Sun, near-Earth asteroids, and the Ceres–Vesta region, and the limited character of outer-planet operations are established. Satellite names, constellation counts, frequencies, ownership rosters, precise launch chronology, and most interoperability agreements remain open.",
    sections:[
      {id:"origins",title:"From missions to infrastructure",html:"<p>Early planetary craft were complete missions unto themselves: one vehicle carried its instruments, radio, navigation, and survival margin. Human expeditions and repeated robotic traffic made that model too fragile. Relays, mapping orbiters, reference beacons, solar-weather monitors, and replacement spacecraft gradually became infrastructure used by missions that had not launched with them.</p><p>The transition was defined by continuity. A destination ceased to be served by one exceptional probe and acquired a regularly renewed technical presence.</p>"},
      {id:"2000",title:"The first planetary infrastructure by 2000",html:"<p>Earth and lunar space remained the densest region, but permanent or recurring systems also operated at Mars, Venus, and Mercury. Mars acquired mapping, weather, communications, navigation, surface-data, and landing-support orbiters because four independent human programs required reliable local knowledge.</p><p>Venus supported radar mapping, atmospheric observation, solar-wind research, and relays for short-lived surface or balloon missions. Mercury remained a sparse prestige and solar-science environment whose thermal and trajectory demands made every durable orbiter consequential.</p>"},
      {id:"networks",title:"Networks, 2000–2005",html:"<p>The decisive change after 2000 was that new spacecraft joined or replaced older ones. Mars developed several overlapping national systems, common emergency channels, standardized location references, continuing weather coverage, and selected shared scientific services alongside encrypted command links.</p><p>The asteroid belt gained survey craft, route markers, resource reconnaissance, German Vesta–Ceres work, and Latin preparation for the <a href='latin-ceres-expedition.html'>Ceres expedition</a>. Venus acquired a smaller durable observation system, while Mercury and nearby heliocentric observatories remained thinly served.</p>"},
      {id:"functions",title:"Three functions",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Function</th><th>Representative services</th><th>Political consequence</th></tr></thead><tbody><tr><td>Science</td><td>Mapping, atmospheres, geology, solar weather, astronomy</td><td>Long records become more valuable than isolated first observations</td></tr><tr><td>Operations</td><td>Navigation, relay, landing support, weather, rescue</td><td>Crews depend upon infrastructure beyond their own vehicles</td></tr><tr><td>Strategy</td><td>Surveillance, encrypted communications, resource information</td><td>Network ownership becomes a measure of sovereignty and presence</td></tr></tbody></table></div>"},
      {id:"interfaces",title:"Interoperability without unity",html:"<p>Common distress frequencies, beacons, adapter information, launch notification, debris warnings, and the duty to aid stranded crews allow rival systems to cooperate in emergencies. Scientific products can also cross political boundaries.</p><p>Ordinary traffic does not pass through one neutral authority. Each bloc can withhold detailed imagery, resource surveys, precise navigation products, and secure communications. Compatibility reduces accidental loss without abolishing strategic competition.</p>"},
      {id:"delay",title:"Distance and delay",html:"<p>No network removes light-time. Planetary commands and reports still move according to changing orbital geometry, and conjunctions can sharply reduce or interrupt direct links. Relays provide redundancy, storage, scheduling, and alternate paths rather than instantaneous control.</p><p>Local crews and automatic systems therefore retain authority that an Earthbound center cannot exercise minute by minute.</p>"},
      {id:"2010",title:"The geography by 2010",html:"<p>Permanent or frequently renewed infrastructure exists around or near Earth and the Moon, Mars and its moons, Venus, Mercury, the Sun, important near-Earth asteroids, and the Ceres–Vesta region. The <a href='commonwealth-planetary-network.html'>Commonwealth network</a> is distinguished by its deliberate sovereign continuity, but every great space system maintains its own operational geography.</p><p>Beyond the belt, Jupiter and Saturn remain destinations for first arrivals, flybys, and rare difficult orbiters. Uranus and Neptune are still reached, if at all, by long-duration exploratory probes rather than a maintained network.</p>"}
    ],
    related:[
      {href:"commonwealth-planetary-network.html",kicker:"Sovereign system",label:"Commonwealth Planetary Network"},
      {href:"imperial-deep-space-network.html",kicker:"Japanese system",label:"Imperial Deep-Space Network"},
      {href:"orbital-law.html",kicker:"Shared operating rules",label:"Orbital Law"},
      {href:"mature-space-age.html",kicker:"Historical setting",label:"Mature Space Age"},
      {href:"latin-ceres-expedition.html",kicker:"Belt milestone",label:"Latin Expedition to Ceres"}
    ],
    facts:[["Development","Late 1980s–2010"],["First serious planetary layer","By 2000"],["Network expansion","2000–2005"],["Mature geography","By 2010"],["Densest planetary system","Mars"],["Organizational form","Overlapping national and multinational networks"],["Real-time interplanetary control","Impossible"],["Outer-planet position","First arrivals, flybys, and rare orbiters"]]
    ,categories:["Planetary satellite system","Spaceflight","Communications satellites","Navigation","Interplanetary infrastructure"]
  }),

  "commonwealth-planetary-network": planetaryNetworkArticle({
    title:"Commonwealth Planetary Communications and Navigation Network",
    category:"Communications networks",
    eyebrow:"British Commonwealth · 1958–2010",
    infoboxKicker:"Sovereign planetary network",
    landscape:innerSolarLandscape,
    lead:"The Commonwealth Planetary Communications and Navigation Network is the British-led system of ground stations, orbital relays, navigation references, planetary orbiters, and operating standards built to preserve independent Commonwealth access beyond Earth. Descended from High Mast and centered institutionally on the Commonwealth Space Board and Resolution, it became the first durable British planetary infrastructure by 2000 and a mature inner-solar geography by 2010.",
    canon:"Its sovereign purpose, High Mast ancestry, distributed Commonwealth workshare, Resolution and Serenity roles, support for the 1998 Valles Marineris expedition, first serious planetary infrastructure by 2000, expansion from 2000 to 2005, and mature inner-solar reach by 2010 are established. The formal public name, directorate, station roster, spacecraft names, frequencies, timing standard, constellation sizes, operating budget, and coverage maps remain open.",
    sections:[
      {id:"inheritance",title:"High Mast inheritance",html:"<p>The <a href='high-mast-tracking-network.html'>High Mast Tracking Network</a> began in 1958 as a distributed answer to German overflight and Britain's inability to observe orbit from one island. Its radar, radio, timing, warning, scientific, and communications sites created the geographic habit later extended beyond Earth.</p><p>The lesson was political as much as technical: formal freedom was incomplete if another power owned the channel through which Britain saw and commanded its spacecraft.</p>"},
      {id:"compact",title:"Institutional foundation",html:"<p>The <a href='resolution-compact.html'>Resolution Compact</a> turned a British station with Commonwealth contributions into an apportioned institution. Britain supplied systems design, computing, control, and integration. Canadian work centered on avionics, medicine, life science, robotics, and communications. Australia handled launch, recovery, tracking, and deep-space support, while New Zealand covered navigation and communications and southern Africa supplied astronomy, minerals, and southern geometry.</p><p>Indian Ocean and other associated sites added telemetry, ocean observation, experiments, and specialist personnel.</p>"},
      {id:"nodes",title:"Orbital and lunar nodes",html:"<p><a href='resolution-orbital-laboratory.html'>Resolution</a> became the principal orbital operations, repair, stores, signals, and navigation center. <a href='serenity-lunar-complex.html'>Serenity</a> added a continuously inhabited lunar terminal, surface beacons, local navigation, science links, and an emergency refuge outside Earth orbit.</p><p>Ground sites across several oceans provided the angular separation, long visibility, and political redundancy that no single national territory could supply.</p>"},
      {id:"mars",title:"The Valles Marineris chain",html:"<p>The 1998 <a href='british-mars-expedition.html'>British Mars expedition</a> required Commonwealth-owned mapping, weather, navigation, surface relay, deep-space tracking, and return communications. The mission proved not only that a British crew could land on Mars, but that the complete command-and-recovery route did not depend upon a rival bloc.</p><p>Later spacecraft remained available to science and subsequent operations instead of being treated solely as expendable mission hardware.</p>"},
      {id:"growth",title:"Growth from 2000 to 2005",html:"<p>New orbiters and relays joined the lunar and Martian core, while Commonwealth missions maintained useful presence around Venus, Mercury, and heliocentric observation points. Replacement and redundancy mattered more than the nominal number of destinations.</p><p>Services combined communications scheduling, ranging, orbit determination, time transfer, solar-weather warning, mapping, and emergency traffic. Foreign stations could receive agreed safety or scientific products without acquiring control of the network.</p>"},
      {id:"geography",title:"A mature inner-solar geography",html:"<p>By 2010 Commonwealth craft, ground stations, and operating agreements support continuing activity from near-Earth space through Mars and selected inner-solar targets. Coverage remains uneven and time-delayed, but no single failure or foreign refusal normally isolates a major Commonwealth expedition.</p><p>Outer-planet work remains exploratory: first arrivals, flybys, and rare orbiters rather than a serviced communications web.</p>"},
      {id:"politics",title:"Sovereignty as continuity",html:"<p>The network rarely attracts the attention given to a Mars landing or lunar town. Its political importance lies in making those achievements repeatable. It lets changing governments preserve navigation, rescue, scientific records, and command even when spectacular missions are delayed.</p><p>This quiet continuity expresses the Commonwealth space doctrine at its most characteristic: the route is itself a strategic possession.</p>"}
    ],
    related:[
      {href:"planetary-satellite-system.html",kicker:"Wider geography",label:"Planetary Satellite System"},
      {href:"high-mast-tracking-network.html",kicker:"Terrestrial precursor",label:"High Mast Tracking Network"},
      {href:"resolution-compact.html",kicker:"Institutional foundation",label:"Resolution Compact"},
      {href:"commonwealth-space-expansion.html",kicker:"Program history",label:"Commonwealth Space Expansion"},
      {href:"commonwealth-southern-africa-space-network.html",kicker:"Southern infrastructure",label:"Southern Africa Space Network"}
    ],
    facts:[["Operator","British Commonwealth"],["Institutional center","Commonwealth Space Board"],["Orbital center","Resolution Orbital Laboratory"],["Lunar node","Serenity Lunar Complex"],["Terrestrial precursor","High Mast Tracking Network"],["First planetary infrastructure","By 2000"],["Expansion","2000–2005"],["Mature reach","Inner Solar System by 2010"],["Formal network name","Open"]]
    ,categories:["British Commonwealth","Commonwealth space program","Communications satellites","Navigation","Interplanetary infrastructure"]
  }),

  "resolution-compact": planetaryNetworkArticle({
    title:"Resolution Compact",
    category:"Political agreements",
    eyebrow:"British Commonwealth · 1988–1990",
    infoboxKicker:"Commonwealth space agreement",
    landscape:resolutionWorkshareLandscape,
    lead:"The Resolution Compact was David Ashcombe's agreement for converting the Resolution Orbital Laboratory from a primarily British station receiving Commonwealth contributions into a formally apportioned Commonwealth institution. It distributed launch, tracking, communications, medicine, computing, astronomy, and station functions across participating countries while committing the system to continuous occupation and independent operation.",
    canon:"Ashcombe's authorship, the late-1980s context, Resolution's conversion into a genuinely apportioned Commonwealth institution, the principal national workshares, continuous occupation, civilian-scientific presentation, strategic access, and the Compact's role beneath the later Calder–Mallory Settlement are established. Exact signing date, legal form, parties, budget shares, parliamentary procedure, offices, and text remain open.",
    sections:[
      {id:"background",title:"Post-Falklands problem",html:"<p>When Ashcombe took office, <a href='endeavour-spacecraft.html'>Endeavour</a> had flown independently, a Commonwealth crew had docked with Columbia, and Resolution's core was in orbit. The Falklands War had demonstrated the value of communications, weather, ocean observation, navigation, and reconnaissance while exhausting the Treasury.</p><p>Ashcombe rejected both an unaffordable prestige race and reliance upon a foreign route. The Compact was his answer to that contradiction.</p>"},
      {id:"principle",title:"From contribution to apportionment",html:"<p>Earlier language could describe Canada, Australia, New Zealand, southern Africa, and other territories as suppliers to a British project. The Compact assigned enduring functions, procurement, personnel, and operating responsibility to national partners.</p><p>Resolution consequently became harder for one British ministry to cancel and more valuable to every participating government.</p>"},
      {id:"workshare",title:"Principal workshares",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Participant</th><th>Principal contribution</th></tr></thead><tbody><tr><td>United Kingdom</td><td>Vehicle design, computing, station control, instruments, integration</td></tr><tr><td>Canada</td><td>Avionics, life sciences, robotics, medicine, communications</td></tr><tr><td>Australia</td><td>Launch, recovery, tracking, deep-space communications</td></tr><tr><td>New Zealand</td><td>Navigation and communications</td></tr><tr><td>South Africa</td><td>Astronomy and southern tracking</td></tr><tr><td>Indian Ocean and associated partners</td><td>Telemetry, ocean observation, experiments, ground stations, specialist crews</td></tr></tbody></table></div>"},
      {id:"priorities",title:"Operational priorities",html:"<p>Ashcombe favored Earth and ocean observation, maritime weather, navigation, deep-space tracking, medicine, long-duration life support, satellite servicing, Mars and Phobos mapping, Commonwealth communications, and international rescue.</p><p>He rejected an immediate independent Mars landing because a flag reached over a foreign-controlled route would not demonstrate sovereignty. The Compact built the route first.</p>"},
      {id:"civil",title:"Civil institution with strategic access",html:"<p>Resolution remained formally civil and scientific. Military access and classified payloads survived in separate missions or modules, allowing the government to preserve strategic use without making the station an openly military command post.</p><p>Commonwealth Labour demanded civilian services, market liberals sought commercial leases, and the security right wanted greater defense capability. The compromise satisfied none completely and endured.</p>"},
      {id:"occupation",title:"Continuous occupation",html:"<p>The immediate institutional test was modest continuous occupation rather than a spectacular population. Power, stores, maintenance, life support, communications, and crew rotation were organized around keeping Resolution inhabited through ordinary failures and political cycles.</p><p>Continuous occupation around 1986 and expansion through 1987–91 proved the Compact's operating logic.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The later <a href='greenwich-compact.html'>Greenwich Compact</a> supplied the public lunar and Mars commitment, but it rested on the workshares, industrial continuity, and independent communications chain created earlier. Ashcombe built the institution that Calder and Mallory could mobilize.</p><p>The Compact also deepened British dependence upon southern African tracking, minerals, power, and launch geography, joining space sovereignty to difficult Commonwealth political bargains.</p>"}
    ],
    related:[
      {href:"resolution-orbital-laboratory.html",kicker:"Central institution",label:"Resolution Orbital Laboratory"},
      {href:"commonwealth-space-board.html",kicker:"Governing body",label:"Commonwealth Space Board"},
      {href:"david-ashcombe.html",kicker:"Architect",label:"David Ashcombe"},
      {href:"commonwealth-planetary-network.html",kicker:"Later system",label:"Commonwealth Planetary Network"},
      {href:"greenwich-compact.html",kicker:"Successor settlement",label:"Greenwich Compact"}
    ],
    facts:[["Period","Late 1980s"],["Principal architect","David Ashcombe"],["Central institution","Resolution Orbital Laboratory"],["Immediate objective","Continuous occupation"],["Political form","Apportioned Commonwealth workshare"],["Public character","Civil and scientific"],["Strategic principle","Independent route before prestige"],["Exact legal form","Open"]]
    ,categories:["Resolution Compact","British Commonwealth","Political agreements","Space policy","1980s"]
  }),

  "stella-maris-shock": planetaryNetworkArticle({
    title:"Stella Maris shock",
    category:"Political history",
    eyebrow:"United Kingdom · 1991–1992",
    infoboxKicker:"British space-political crisis",
    landscape:stellaShockLandscape,
    lead:"The Stella Maris shock was the British political and press reaction to the visible early-1990s expansion of the Latin orbital station Stella Maris toward, and possibly beyond, the apparent scale of Resolution. The comparison did not prove Latin technical superiority, but it made fifth place in space imaginable to the British public and transformed Commonwealth spaceflight from a specialist sovereignty program into a mass national cause.",
    canon:"The 1991–92 period, rapidly expanding Stella Maris, the public comparison with Resolution, British fear of fifth place, its relationship to Calder's space politics, and its role before the Greenwich Compact are established. The term's first use, exact triggering photograph or mission, newspapers, headlines, polling, parliamentary debate, and whether Stella Maris ever exceeded Resolution under a consistent measure remain open.",
    sections:[
      {id:"comparison",title:"An unfair but powerful comparison",html:"<p><a href='resolution-orbital-laboratory.html'>Resolution</a> was older, scientifically capable, continuously occupied, and supported by an extensive ground network. <a href='stella-maris.html'>Stella Maris</a> was newer, visibly modular, and designed to represent Latin multinational ambition.</p><p>Public images flattened those differences into one question: did Italy and its partners now possess a larger station than Britain?</p>"},
      {id:"memory",title:"Mediterranean memory",html:"<p>The comparison carried unusual force because Italy had acquired or dominated much of the Mediterranean infrastructure Britain lost in the 1947 settlement. Suez, Malta, Cyprus, and Britain's retreat from the inland sea remained part of national political memory.</p><p>A Latin station appearing to pass Resolution therefore reopened an older wound in a new theater.</p>"},
      {id:"fifth",title:"The fear of fifth place",html:"<p>Germany possessed the heaviest orbital industry, America the busiest reusable system, and Japan the most mature machine-first network. Britain could tolerate differences in doctrine; it found the possibility of falling behind the late-entering Latin Space Community far harder to explain.</p><p>The shock was a crisis of ranking and trajectory rather than immediate capability.</p>"},
      {id:"press",title:"Press and political language",html:"<p>Later accounts associate the episode with the questions <em>“Britain fifth?”</em> and <em>“Did we lose the future?”</em> These formulations capture the debate but are not registered as verified historical headlines.</p><p>Photographs, comparative silhouettes, crew counts, module announcements, and arguments over usable volume made station design legible as national status.</p>"},
      {id:"ashcombe",title:"Ashcombe's vulnerability",html:"<p>David Ashcombe had built launch, tracking, procurement, education, and the <a href='resolution-compact.html'>Resolution Compact</a>. His argument that Britain needed the route before the flag was technically coherent.</p><p>By 1991–92 patience could be portrayed as complacency. The machinery existed, but the government had not given it a compelling public destination.</p>"},
      {id:"calder",title:"Calder's answer",html:"<p>Martin Calder connected space expenditure to skilled work, medicine, communications, Commonwealth universities, nuclear power, computing, and national purpose. German departure for Mars then converted the ranking anxiety into a deadline.</p><p>The result was not abandonment of Ashcombe's system. It was the political mobilization of that system under a more expansive program.</p>"},
      {id:"legacy",title:"From shock to settlement",html:"<p>The shock contributed to the 1992 election environment and to the bipartisan <a href='greenwich-compact.html'>Greenwich Compact</a> of 1993–94. Resolution expanded, Serenity became permanent, the Commonwealth landed in Valles Marineris in 1998, and a sovereign planetary network followed.</p><p>Its durable lesson was that infrastructure could become mass politics when photographed as a rank ordering among powers.</p>"}
    ],
    related:[
      {href:"stella-maris.html",kicker:"Latin station",label:"Stella Maris"},
      {href:"resolution-orbital-laboratory.html",kicker:"British comparator",label:"Resolution"},
      {href:"commonwealth-space-expansion.html",kicker:"Political response",label:"Commonwealth Space Expansion"},
      {href:"martin-calder.html",kicker:"Opposition leader",label:"Martin Calder"},
      {href:"greenwich-compact.html",kicker:"Bipartisan outcome",label:"Greenwich Compact"}
    ],
    facts:[["Period","1991–1992"],["Country","United Kingdom"],["Immediate subject","Stella Maris–Resolution comparison"],["Nature","Political and press shock"],["Core anxiety","Britain in fifth place"],["Principal beneficiary","Martin Calder"],["Institutional outcome","Greenwich Compact and expanded Commonwealth program"],["Exact triggering event","Open"]]
    ,categories:["Stella Maris shock","British political history","British space program","1991","1992"]
  })
});
