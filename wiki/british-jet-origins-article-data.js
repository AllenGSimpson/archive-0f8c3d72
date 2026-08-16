window.deepArticles=window.deepArticles||{};

const britishJetOriginsSources=[
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — British and American jet-engine lineages"},
  {href:"../transcript.md",label:"Master Transcript — British–American turbojet transfer"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — British and American aviation development"}
];

const britishJetOriginsOfficial={
  w1x:{href:"https://www.si.edu/object/whittle-w1x-turbojet-engine%3Anasm_A19500082000",label:"Smithsonian National Air and Space Museum — Whittle W.1X turbojet"},
  powerJets:{href:"https://www.si.edu/object/archives/sova-nasm-1991-0032",label:"Smithsonian National Air and Space Museum Archives — Power Jets Ltd. records"},
  gloster:{href:"https://heritage.baesystems.com/page/gloster-e.28-39",label:"BAE Systems Heritage — Gloster E.28/39"},
  transfer:{href:"https://www.si.edu/object/bell-xp-59a-airacomet%3Anasm_A19450016000",label:"Smithsonian National Air and Space Museum — Bell XP-59A Airacomet"},
  rafInventors:{href:"https://assets.rafmuseum.org.uk/app/uploads/2024/06/07152606/Ingenious-Inventors.pdf",label:"Royal Air Force Museum — Ingenious Inventors: Frank Whittle"}
};

const britishJetPre="<sup class='canon-note' data-provenance='p'>[p]</sup>";
const britishJetCanon="<sup class='canon-note' data-provenance='a'>[a]</sup>";
const britishJetExtrapolated="<sup class='canon-note' data-provenance='e'>[e]</sup>";
const whittlePortrait={src:"https://commons.wikimedia.org/wiki/Special:FilePath/Air%20Commodore%20Sir%20Frank%20Whittle%2C%20%27father%20of%20the%20jet%20engine%27%2C%20at%20his%20desk.%20TR3737.jpg",alt:"Frank Whittle seated at a desk with papers and technical instruments",caption:"Frank Whittle at his desk · British official photograph · public domain"};
const glosterE2839Image={src:"https://commons.wikimedia.org/wiki/Special:FilePath/IWM-CH14832A%20Gloster%20E28-39%20205210674.jpg",alt:"Gloster E.28/39 jet experimental aircraft on the ground",caption:"Gloster E.28/39 W4041/G · British official photograph · public domain"};
const whittleW1xImage={src:"https://commons.wikimedia.org/wiki/Special:FilePath/Whittle%20W.1X%20Turbojet%20Engine%20-%20DPLA%20-%2031401d5ea2b64ebb0d5c85fa6faded64%20%28page%201%29.jpg",alt:"Whittle W.1X centrifugal-flow turbojet on a display stand",caption:"Whittle W.1X turbojet · Smithsonian National Air and Space Museum"};

const britishJetOriginArticle=config=>({
  category:config.category||"British aviation",
  ...config,
  sources:[...britishJetOriginsSources,...(config.sources||[])],
  categories:config.categories||[config.title,"British aviation","Jet propulsion"]
});

Object.assign(window.deepArticles,{
  "frank-whittle":britishJetOriginArticle({
    title:"Frank Whittle",
    category:"Biographies",
    eyebrow:"Royal Air Force engineer · turbojet pioneer · Power Jets co-founder",
    infoboxTitle:"Frank Whittle",
    infoboxKicker:"British turbojet engineer",
    portrait:whittlePortrait,
    lead:`Frank Whittle is the British Royal Air Force engineer whose centrifugal-flow gas turbine became the first British turbojet to fly. He described a practical aircraft gas turbine while a junior officer, patented the arrangement in 1930, and helped establish <a href='power-jets.html'>Power Jets</a> in 1936. The W.1 engine powered the <a href='gloster-e-28-39.html'>Gloster E.28/39</a> on 15 May 1941; a related W.1X and W.2B drawings entered the United States through the <a href='british-american-turbojet-transfer.html'>British–American turbojet transfer</a>.${britishJetPre}${britishJetCanon}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bj1k2 writer=g kind=revision created=2026-08-16T14:50:00-06:00 -->Whittle's birth, RAF training, early gas-turbine proposal, patent, Power Jets work, WU tests, W.1 development, and the E.28/39 flight of 15 May 1941 are inherited history.${britishJetPre} The post-divergence W.1X and W.2B transfer to General Electric is incorporated within the accepted British-assisted American jet path; its exact October date and cargo detail are implementation rather than direct authorial specification.${britishJetExtrapolated} Later rank, offices, honors, retirement, emigration, and death remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"early",title:"Early life and Royal Air Force training",html:`<p>Whittle was born at Coventry on 1 June 1907. He entered the Royal Air Force as an apprentice in 1923, qualified for officer and pilot training, and graduated from the RAF College Cranwell in 1928.${britishJetPre}</p><p>His training joined workshop practice, flying, mathematics, and engineering. That combination let him treat the gas turbine as an aircraft installation rather than only a thermodynamic machine.</p>`},
      {id:"proposal",title:"Turbojet proposal and patent",html:`<p>As a cadet and junior officer Whittle argued that a gas turbine could compress air, add heat through continuous combustion, drive its compressor by turbine, and retain sufficient exhaust energy for propulsion. He filed a patent application in January 1930; the patent was granted in 1932.${britishJetPre}</p><p>The proposal used a centrifugal compressor. British authorities initially declined to fund development, and the patent was allowed to lapse before the engine had official support.</p>`},
      {id:"power-jets",title:"Power Jets and the experimental engine",html:`<p>Associates including Rolf Dudley Williams and J. C. B. Tinling helped create <a href='power-jets.html'>Power Jets Limited</a> in 1936 around Whittle's work. British Thomson-Houston manufactured major components for the Whittle Unit experimental engine.${britishJetPre}</p><p>The WU first ran on 12 April 1937. Repeated compressor, combustor, turbine, bearing, and control changes converted a volatile laboratory apparatus into the basis for a flight engine.</p>`},
      {id:"flight",title:"The first British jet flight",html:`<p>The Air Ministry contracted in 1939 for the W.1 flight engine and a small Gloster test aircraft. Gloster chief designer George Carter designed the E.28/39 around the engine.${britishJetPre}</p><p>Flight Lieutenant P. E. G. Sayer made the official first flight from Cranwell on 15 May 1941. The successful seventeen-minute sortie established that Whittle's engine could propel a controllable aircraft.</p>`},
      {id:"transfer",title:"Transfer to the United States",html:`<p>Henry H. Arnold inspected the British program in 1941. British and American authorities subsequently arranged for a non-airworthy <a href='whittle-w1-w1x-turbojet.html'>W.1X</a> engine and W.2B production drawings to reach General Electric on 1 October.${britishJetCanon}</p><p>The resulting General Electric engines and Bell P-59 translated Whittle's work into the first American jet-flight program. The transfer did not make later American axial-flow and high-thrust engine families direct copies of one British design.</p>`},
      {id:"later",title:"Later career",html:"<p>The archive has not fixed Whittle's duties after the initial transfer, his continuing relationship with Power Jets and the Air Ministry, later RAF rank, public role, honors, health, retirement, residence, or date of death. Real-world events after 1 August 1941 remain reference material rather than setting facts.</p>"}
    ],
    related:[
      {href:"power-jets.html",kicker:"Development company",label:"Power Jets"},
      {href:"whittle-w1-w1x-turbojet.html",kicker:"Engine family",label:"Whittle W.1 and W.1X"},
      {href:"gloster-e-28-39.html",kicker:"Flight demonstrator",label:"Gloster E.28/39"},
      {href:"british-american-turbojet-transfer.html",kicker:"International transfer",label:"British–American Turbojet Transfer"},
      {href:"gloster-aircraft-company.html",kicker:"Airframe partner",label:"Gloster Aircraft Company"}
    ],
    sources:[britishJetOriginsOfficial.rafInventors,britishJetOriginsOfficial.w1x,britishJetOriginsOfficial.powerJets,britishJetOriginsOfficial.gloster],
    categories:["Frank Whittle","British engineers","Royal Air Force officers","Jet propulsion","Power Jets"],
    facts:[["Born","1 June 1907 · Coventry, England"],["RAF apprenticeship","From 1923"],["RAF College Cranwell","Graduated 1928"],["Turbojet patent application","January 1930"],["Power Jets","Co-founded 1936"],["First WU bench run","12 April 1937"],["First W.1-powered flight","15 May 1941"],["American transfer","Incorporated W.1X and W.2B · October 1941"],["Post-divergence biography","Open"]]
  }),

  "power-jets":britishJetOriginArticle({
    title:"Power Jets",
    category:"Research and manufacturing institutions",
    eyebrow:"British turbojet development company · founded 1936",
    infoboxTitle:"Power Jets Limited",
    infoboxKicker:"Development organization for Whittle turbojets",
    lead:`Power Jets Limited is the British engineering company established in 1936 to develop <a href='frank-whittle.html'>Frank Whittle's</a> aircraft gas turbine. The company directed the Whittle Unit experiments, the flightworthy W.1, and the W.2 development family while relying on outside manufacturers and government facilities for much of its hardware. Its W.1 powered the <a href='gloster-e-28-39.html'>Gloster E.28/39</a>, and its W.1X and W.2B documentation supplied the technical core of the first American jet program.${britishJetPre}${britishJetCanon}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bj2k3 writer=g kind=revision created=2026-08-16T14:50:00-06:00 -->Power Jets' 1936 formation, Williams and Tinling organization, Whittle leadership, British Thomson-Houston relationship, WU and early engines, and pre-divergence Air Ministry and Gloster work are inherited history.${britishJetPre} Delivery of W.1X hardware and W.2B drawings to the United States is incorporated within the accepted transfer reconstruction.${britishJetExtrapolated} Ownership, nationalization, management, sites, merger, dissolution, and successor remain open; historical 1944 nationalization is not presumed.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"formation",title:"Formation",html:`<p>Rolf Dudley Williams and J. C. B. Tinling organized Power Jets in 1936 to provide a legal and financial vehicle for Whittle's gas-turbine work. Whittle remained an RAF officer and the central engine designer rather than a conventional independent industrialist.${britishJetPre}</p><p>The small company coordinated patents, finance, design, testing, government relations, and industrial subcontracting.</p>`},
      {id:"wu",title:"Whittle Unit",html:`<p>British Thomson-Houston built the experimental Whittle Unit to Power Jets designs. The first run occurred on 12 April 1937. Early tests revealed severe combustion, compressor matching, control, and mechanical problems, including uncontrolled acceleration.${britishJetPre}</p><p>Successive WU configurations became a development laboratory in which the company established workable arrangements for continuous combustion and turbine-driven compression.</p>`},
      {id:"air-ministry",title:"Air Ministry support",html:`<p>Official interest increased as European rearmament made high-speed propulsion more urgent. In 1939 the Air Ministry contracted for a flight engine, designated W.1, and an experimental airframe under specification E.28/39.${britishJetPre}</p><p>Power Jets remained dependent on the ministry, the RAF, the Royal Aircraft Establishment, Gloster, British Thomson-Houston, and later production-engine firms. It was a design-and-development node rather than a self-contained mass manufacturer.</p>`},
      {id:"engines",title:"W.1 and W.2 programs",html:`<p>The <a href='whittle-w1-w1x-turbojet.html'>W.1</a> turned experimental work into a compact flight engine. The W.1X was a non-airworthy derivative used for ground running and taxi hops, while W.2 designs pursued the greater thrust and manufacturability needed for combat aircraft.${britishJetPre}</p><p>Engine development and airframe work overlapped. Results from test cells and the E.28/39 fed the twin-engine Gloster fighter that became the Meteor.</p>`},
      {id:"american",title:"British–American transfer",html:`<p>A W.1X engine and W.2B production drawings were delivered to General Electric on 1 October 1941 through the <a href='british-american-turbojet-transfer.html'>British–American transfer</a>.${britishJetCanon} The engine served as a physical reference for General Electric's Type I and I-A work.</p><p>The arrangement exported a development package rather than merely a propulsion concept: American engineers could inspect geometry, materials, bearings, combustion equipment, controls, and test behavior.</p>`},
      {id:"institution",title:"Institutional position",html:`<p>Power Jets occupied an unusual boundary among private company, military research project, design bureau, and government contractor. That position allowed a small engineering group to mobilize larger industrial organizations without possessing a large factory of its own.</p><p>The archive has not fixed the company's post-divergence ownership, later management, national relationship, production rights, or legal successor.</p>`}
    ],
    related:[
      {href:"frank-whittle.html",kicker:"Principal engineer",label:"Frank Whittle"},
      {href:"whittle-w1-w1x-turbojet.html",kicker:"Engine program",label:"Whittle W.1 and W.1X"},
      {href:"gloster-e-28-39.html",kicker:"Flight test aircraft",label:"Gloster E.28/39"},
      {href:"gloster-aircraft-company.html",kicker:"Airframe organization",label:"Gloster Aircraft Company"},
      {href:"british-american-turbojet-transfer.html",kicker:"Technology transfer",label:"British–American Turbojet Transfer"}
    ],
    sources:[britishJetOriginsOfficial.powerJets,britishJetOriginsOfficial.w1x,britishJetOriginsOfficial.gloster,britishJetOriginsOfficial.rafInventors],
    categories:["Power Jets","British aerospace companies","British research institutions","Jet propulsion","Frank Whittle"],
    facts:[["Founded","1936"],["Organizers","Rolf Dudley Williams · J. C. B. Tinling"],["Principal engineer","Frank Whittle"],["Manufacturing partner","British Thomson-Houston"],["First experimental run","12 April 1937"],["First flight engine","W.1"],["Flight airframe","Gloster E.28/39"],["American transfer","Incorporated W.1X and W.2B · 1 October 1941"],["Later legal status","Open"]]
  }),

  "gloster-e-28-39":britishJetOriginArticle({
    title:"Gloster E.28/39",
    category:"Aircraft",
    eyebrow:"United Kingdom · single-engine turbojet experimental aircraft · first flown 1941",
    infoboxTitle:"Gloster E.28/39",
    infoboxKicker:"First British jet aircraft",
    landscape:glosterE2839Image,
    lead:`The Gloster E.28/39 is the single-seat experimental aircraft designed to flight-test <a href='frank-whittle.html'>Frank Whittle's</a> turbojet. George Carter and the <a href='gloster-aircraft-company.html'>Gloster Aircraft Company</a> produced two prototypes under Air Ministry specification E.28/39. The first aircraft, W4041/G, made its official first flight at Cranwell on 15 May 1941, establishing the practicability of the British centrifugal-flow turbojet and opening the direct technical path to the Meteor.${britishJetPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bj3k4 writer=g kind=revision created=2026-08-16T14:50:00-06:00 -->The 1939 specification and contract, Carter design, two prototypes and serials, configuration, April 1941 taxi hops, and first official flight on 15 May 1941 are inherited history.${britishJetPre} A general contribution to the later Meteor lineage is compatible incorporated context, not a fixed post-divergence test history.${britishJetExtrapolated} The later calendar, engines, accidents, second-prototype history, disposition, and preservation remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"requirement",title:"Requirement and design",html:`<p>The Air Ministry issued specification E.28/39 for an aircraft able to test Power Jets' W.1 engine. Gloster chief designer George Carter led the airframe work, which had to proceed while the engine itself was still changing.${britishJetPre}</p><p>Two prototypes were ordered, serialled W4041/G and W4046/G. The aircraft was a research machine rather than a fighter prototype with a fixed armament and operational mission.</p>`},
      {id:"configuration",title:"Configuration",html:`<p>E.28/39 was a compact low-wing monoplane with a single nose intake, engine in the fuselage, straight tailpipe, and retractable tricycle undercarriage. The single pilot sat ahead of the wing.${britishJetPre}</p><p>The arrangement gave the engine a comparatively direct airflow path and left the wings free of nacelles. It also concentrated intake, cockpit, fuel, engine, and exhaust within a small fuselage.</p>`},
      {id:"ground",title:"Ground trials",html:`<p>W4041/G began ground runs and high-speed taxi work with the non-airworthy W.1X at Brockworth. On 7 and 8 April 1941 the aircraft briefly left the runway during taxi trials.${britishJetPre}</p><p>These hops tested steering, braking, acceleration, intake flow, installation behavior, and basic control before the flight engine was available.</p>`},
      {id:"first-flight",title:"First official flight",html:`<p>Flight Lieutenant P. E. G. Sayer made the official first flight from RAF Cranwell on 15 May 1941. The sortie lasted seventeen minutes.${britishJetPre}</p><p>The flight demonstrated stable operation of the W.1 in an aircraft built around jet propulsion. Further flying could therefore address performance, handling, relight, installation, and engine-development questions rather than merely whether the concept would leave the ground.</p>`},
      {id:"development",title:"Development role",html:`<p>The two aircraft served as flying laboratories for Whittle-derived engines and associated intake, fuel, control, and installation work. Precise engine changes and the post-August 1941 test sequence have not been fixed in setting canon.</p><p>Data from the demonstrator informed the larger twin-engine Gloster F.9/40. That fighter entered the established British sequence as the <a href='meteor-f3.html'>Meteor</a>.${britishJetExtrapolated}</p>`},
      {id:"significance",title:"Significance",html:`<p>E.28/39 joined engine, airframe, government laboratory, and flight-test organizations in the first complete British jet system. Its success reduced the technical uncertainty surrounding the propulsion principle but did not solve combat-aircraft requirements for thrust, redundancy, armament, range, and production.</p><p>The aircraft's exact later flights, losses, surviving components, and museum status are not imported automatically.</p>`}
    ],
    related:[
      {href:"gloster-aircraft-company.html",kicker:"Manufacturer",label:"Gloster Aircraft Company"},
      {href:"frank-whittle.html",kicker:"Engine designer",label:"Frank Whittle"},
      {href:"power-jets.html",kicker:"Engine organization",label:"Power Jets"},
      {href:"whittle-w1-w1x-turbojet.html",kicker:"Powerplant",label:"Whittle W.1 and W.1X"},
      {href:"meteor-f3.html",kicker:"Operational successor",label:"Meteor F.3"}
    ],
    sources:[britishJetOriginsOfficial.gloster,britishJetOriginsOfficial.w1x,britishJetOriginsOfficial.rafInventors],
    categories:["Gloster E.28/39","British experimental aircraft","British jet aircraft","Gloster Aircraft Company","Power Jets"],
    facts:[["Role","Turbojet experimental aircraft"],["Manufacturer","Gloster Aircraft Company"],["Chief designer","George Carter"],["Prototypes","Two · W4041/G and W4046/G"],["Crew","One"],["Configuration","Low-wing monoplane · tricycle undercarriage"],["Powerplant at first flight","Power Jets W.1"],["Official first flight","15 May 1941 · RAF Cranwell"],["First-flight pilot","P. E. G. Sayer"],["First-flight duration","17 minutes"],["Reference span","29 ft · 8.84 m"],["Reference maximum weight","3,748 lb · 1,700 kg with W.1A"]]
  }),

  "whittle-w1-w1x-turbojet":britishJetOriginArticle({
    title:"Whittle W.1 and W.1X turbojets",
    category:"Aircraft engines",
    eyebrow:"United Kingdom · centrifugal-flow turbojet family · 1939–1941",
    infoboxTitle:"Power Jets W.1 / W.1X",
    infoboxKicker:"First British flight turbojet and ground-test derivative",
    landscape:whittleW1xImage,
    lead:`The Power Jets W.1 is the centrifugal-flow turbojet that powered Britain's first official jet-aircraft flight on 15 May 1941. Developed from Frank Whittle's experimental Whittle Unit, it used a double-entry centrifugal compressor, reverse-flow combustion chambers, and a single-stage turbine. The related W.1X served ground and taxi testing before one engine was transferred to General Electric with W.2B drawings, becoming the physical reference for the first American turbojet program.${britishJetPre}${britishJetCanon}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bj4k5 writer=g kind=revision created=2026-08-16T14:50:00-06:00 -->The W.1 contract, configuration, WU ancestry, W.1X ground-test role, April 1941 taxi hops, W.1 first flight, and contemporary W.1X specifications are inherited history.${britishJetPre} Delivery of W.1X hardware and W.2B drawings to General Electric and their P-59 role are incorporated within the accepted transfer reconstruction.${britishJetExtrapolated} Setting serials, totals, component changes, hours, failures, disposition, and preservation remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:`<p>The Air Ministry contracted with <a href='power-jets.html'>Power Jets</a> in 1939 for a flight engine derived from the Whittle Unit. The new W.1 had to package the compressor, combustors, turbine, accessories, bearings, lubrication, fuel system, starter, and controls within the small E.28/39 fuselage.${britishJetPre}</p><p>British Thomson-Houston and other industrial partners manufactured hardware while Power Jets directed the engine design and test program.</p>`},
      {id:"architecture",title:"Architecture",html:`<p>The engine used a single-stage, double-entry centrifugal compressor. Air entered from both sides of the impeller, passed through diffusers and ten reverse-flow combustion chambers, then drove a single-stage axial turbine before leaving through the tailpipe.${britishJetPre}</p><p>The centrifugal arrangement was compact in length and comparatively accessible to an organization experienced with superchargers, but it imposed a large frontal area and demanding ducting around the combustors.</p>`},
      {id:"w1x",title:"W.1X ground-test engine",html:`<p>The W.1X was a non-airworthy experimental derivative used to test the installation before the flight engine arrived. Installed in E.28/39 W4041/G, it powered high-speed taxi runs and brief hops on 7 and 8 April 1941.${britishJetPre}</p><p>Its value lay in reproducing intake, control, fuel, vibration, exhaust, and ground-handling conditions without consuming the designated flight engine.</p>`},
      {id:"flight",title:"W.1 flight service",html:`<p>The W.1 powered W4041/G on the first official <a href='gloster-e-28-39.html'>Gloster E.28/39</a> flight at Cranwell on 15 May 1941.${britishJetPre} The successful sortie provided a flight baseline for continuing engine and airframe development.</p><p>Later W.1 marks and the W.2 family sought additional thrust, reliability, and suitability for manufacture. The detailed post-divergence configuration sequence remains open.</p>`},
      {id:"transfer",title:"Transfer to General Electric",html:`<p>A W.1X and W.2B production drawings were delivered to General Electric on 1 October 1941 under the <a href='british-american-turbojet-transfer.html'>British–American turbojet transfer</a>.${britishJetCanon}</p><p>General Electric could run and disassemble a complete British engine while adapting the design to American materials, tooling, accessories, and manufacturing practice. The Type I and I-A engines used in the Bell program descended from that apprenticeship.</p>`},
      {id:"limits",title:"Technical limits and legacy",html:`<p>The W.1/W.1X family demonstrated the turbojet at modest thrust. Its centrifugal architecture, early combustion system, component life, controls, and production method could not by themselves satisfy every later fighter requirement.</p><p>Its historical importance is therefore as an operational proof and transferable engineering baseline. British and American firms subsequently developed larger centrifugal engines, axial-flow engines, and independent high-temperature and compressor schools.</p>`}
    ],
    related:[
      {href:"frank-whittle.html",kicker:"Designer",label:"Frank Whittle"},
      {href:"power-jets.html",kicker:"Development organization",label:"Power Jets"},
      {href:"gloster-e-28-39.html",kicker:"Flight-test aircraft",label:"Gloster E.28/39"},
      {href:"british-american-turbojet-transfer.html",kicker:"American transfer",label:"British–American Turbojet Transfer"},
      {href:"p-59-airacomet.html",kicker:"American descendant program",label:"Bell P-59 Airacomet"}
    ],
    sources:[britishJetOriginsOfficial.w1x,britishJetOriginsOfficial.transfer,britishJetOriginsOfficial.gloster,britishJetOriginsOfficial.rafInventors],
    categories:["Power Jets W.1","Power Jets W.1X","British aircraft engines","Turbojet engines","Frank Whittle"],
    facts:[["Type","Centrifugal-flow turbojet"],["Developer","Power Jets"],["Designer","Frank Whittle"],["Compressor","Single-stage double-entry centrifugal"],["Combustion","Ten reverse-flow chambers"],["Turbine","Single-stage axial"],["W.1 official first flight","15 May 1941"],["W.1X maximum thrust","1,240 lbf · 5,516 N at 17,750 rpm"],["W.1X rated thrust","850 lbf · 3,781 N at 16,500 rpm"],["W.1X weight","560 lb · 254 kg"],["American delivery","Incorporated 1 October 1941"]]
  })
});

const britishJetAddRelated=(article,item)=>{
  if(article&&!article.related.some(link=>link.href===item.href))article.related.push(item);
};

const britishJetTransfer=window.deepArticles["british-american-turbojet-transfer"];
if(britishJetTransfer){
  britishJetTransfer.lead=britishJetTransfer.lead.replace("Frank Whittle's W.1X engine","<a href='frank-whittle.html'>Frank Whittle's</a> <a href='whittle-w1-w1x-turbojet.html'>W.1X engine</a>");
  const background=britishJetTransfer.sections.find(section=>section.id==="background");
  if(background){
    background.html=background.html.replace("Frank Whittle and Power Jets","<a href='frank-whittle.html'>Frank Whittle</a> and <a href='power-jets.html'>Power Jets</a>");
    background.html=background.html.replace("The Gloster E.28/39","The <a href='gloster-e-28-39.html'>Gloster E.28/39</a>");
  }
  const hardware=britishJetTransfer.sections.find(section=>section.id==="hardware");
  if(hardware)hardware.html=hardware.html.replace("A Power Jets W.1X engine","A <a href='power-jets.html'>Power Jets</a> <a href='whittle-w1-w1x-turbojet.html'>W.1X engine</a>");
  britishJetAddRelated(britishJetTransfer,{href:"frank-whittle.html",kicker:"British engine designer",label:"Frank Whittle"});
  britishJetAddRelated(britishJetTransfer,{href:"power-jets.html",kicker:"British development company",label:"Power Jets"});
  britishJetAddRelated(britishJetTransfer,{href:"whittle-w1-w1x-turbojet.html",kicker:"Transferred engine",label:"Whittle W.1 and W.1X"});
  britishJetAddRelated(britishJetTransfer,{href:"gloster-e-28-39.html",kicker:"British flight demonstrator",label:"Gloster E.28/39"});
}

const britishJetGloster=window.deepArticles["gloster-aircraft-company"];
if(britishJetGloster){
  britishJetGloster.lead=britishJetGloster.lead.replace("the first Whittle-powered experimental aircraft","the first Whittle-powered experimental aircraft, the <a href='gloster-e-28-39.html'>E.28/39</a>");
  const whittle=britishJetGloster.sections.find(section=>section.id==="whittle");
  if(whittle){
    whittle.html=whittle.html.replace("the E.28/39","the <a href='gloster-e-28-39.html'>E.28/39</a>");
    whittle.html=whittle.html.replace("Frank Whittle's turbojet","<a href='frank-whittle.html'>Frank Whittle's</a> <a href='whittle-w1-w1x-turbojet.html'>turbojet</a>");
    whittle.html=whittle.html.replace("linked Power Jets","linked <a href='power-jets.html'>Power Jets</a>");
  }
  const aircraft=britishJetGloster.sections.find(section=>section.id==="aircraft");
  if(aircraft)aircraft.html=aircraft.html.replace("Gloster E.28/39<sup","<a href='gloster-e-28-39.html'>Gloster E.28/39</a><sup");
  britishJetAddRelated(britishJetGloster,{href:"gloster-e-28-39.html",kicker:"First jet demonstrator",label:"Gloster E.28/39"});
  britishJetAddRelated(britishJetGloster,{href:"frank-whittle.html",kicker:"Turbojet designer",label:"Frank Whittle"});
  britishJetAddRelated(britishJetGloster,{href:"power-jets.html",kicker:"Engine-development partner",label:"Power Jets"});
}
