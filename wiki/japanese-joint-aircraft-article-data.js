window.deepArticles = window.deepArticles || {};

const japaneseJointSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Japanese joint-service aircraft lineage"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese military and industrial order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar aerospace development"},
  {href:"../transcript.md",label:"Master Transcript — Japanese carrier aviation and fleet defense"}
];
const japaneseJointNote = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const japaneseJointRelated = [
  {href:"japanese-joint-service-combat-aircraft-lineage.html",kicker:"Aircraft lineage",label:"Japanese Joint-Service Combat Aircraft Lineage"},
  {href:"imperial-joint-aircraft-register.html",kicker:"Public register",label:"Imperial Joint Aircraft Register"},
  {href:"unified-air-procurement-regulation.html",kicker:"Procurement reform",label:"Unified Air Procurement Regulation"},
  {href:"japan.html",kicker:"Country of origin",label:"Empire of Japan"}
];

const japaneseJointArticle = c => ({
  category:c.category || "Military aircraft",eyebrow:c.eyebrow || "Imperial Japanese joint-service aviation",
  infoboxKicker:c.infoboxKicker,infoboxTitle:c.infoboxTitle || c.title,title:c.title,lead:c.lead,canon:c.canon,
  sections:c.sections,related:[...japaneseJointRelated,...(c.related || [])],facts:c.facts,sources:japaneseJointSources,
  categories:c.categories || ["Empire of Japan","Imperial Japanese aviation","Military aircraft","Aerospace industry"]
});
const japaneseJointFixed = c => japaneseJointArticle({
  title:c.title,eyebrow:c.eyebrow,infoboxKicker:c.infoboxKicker,lead:`${c.lead}${japaneseJointNote}`,canon:`${c.canon}${japaneseJointNote}`,
  sections:[
    {id:"identity",title:"Identity and architecture",html:`<p>${c.identity}</p>`},
    {id:"development",title:"Development",html:`<p>${c.development}</p>`},
    {id:"system",title:"Operational system",html:`<p>${c.system}</p>`},
    {id:"limits",title:"Open record",html:`<p>${c.open || "Exact dimensions, mass, production, unit assignments, carrier or base allocation, combat history, exports, and retirement remain open unless separately established."}</p>`}
  ],related:c.related,facts:c.facts
});
const japaneseJointWithdrawn = c => japaneseJointArticle({
  title:c.title,eyebrow:"Superseded aircraft-register entry",infoboxKicker:"Legacy article path",lead:`${c.lead}${japaneseJointNote}`,canon:`${c.canon}${japaneseJointNote}`,
  sections:[
    {id:"status",title:"Status in the current register",html:`<p>${c.status}</p>`},
    {id:"lineage",title:"Canonical lineage",html:`<p>${c.lineage}</p>`},
    {id:"limits",title:"Withdrawn particulars",html:"<p>The former Type year, performance, combat radius, weapon load, production, and operational history are not retained.</p>"}
  ],related:c.related,facts:[["Article status","Superseded register entry"],["Former identity",c.former],["Current disposition",c.disposition]]
});

Object.assign(window.deepArticles, {
  "japanese-joint-service-combat-aircraft-lineage": japaneseJointArticle({
    title:"Japanese joint-service combat-aircraft lineage",category:"Aircraft lineage",eyebrow:"Carrier fighter and heavy systems aircraft · 1947–1985",infoboxKicker:"Mitsubishi A-series and B-series",
    lead:`Japan's fixed postwar combat-aircraft lineage develops two durable families by 1985: Mitsubishi's single-engine A8M–A10M carrier fighters and a larger twin-engine, two-seat B-series for carrier attack, interception, and multirole systems work.${japaneseJointNote}`,
    canon:`A8M1/2, A9M1–4, A10M1, B8Y2, B9Y, and B10Y are fixed. A10M remains the carrier-fighter platform through 1985; the former automatic A11M and A12M succession and the J12–J14 catalog are withdrawn.${japaneseJointNote}`,
    sections:[
      {id:"families",title:"Two-family fleet by 1985",html:"<p>The single-engine A10M supplies carrier air superiority. The larger twin-engine, two-seat B-series supplies sensor-heavy fleet defense and multirole capacity. Airborne warning, data links, missiles, ships, satellites, and carrier groups connect both families.</p>"},
      {id:"carrier",title:"Mitsubishi A-series",html:"<p><a href='a8m-senpu.html'>A8M Senpū</a> establishes the ultralight carrier jet. <a href='a9m1-shippu.html'>A9M Shippū</a> develops through four marks from transonic fighter to a mature radar, missile, and data-link standard. <a href='a10m1-shippu-kai.html'>A10M1</a> makes the modern architectural break around 1978–80.</p>"},
      {id:"heavy",title:"Keiun and B-series",html:"<p><a href='b8y2-keiun-kai-ni.html'>B8Y2</a> improves the Keiun family. <a href='b9y-family.html'>B9Y</a> is a genuinely new swept-wing heavy aircraft. <a href='b10y-family.html'>B10Y</a> develops toward a supersonic, sensor-heavy fleet-defense and multirole platform.</p>"},
      {id:"continuity",title:"Marks before new numbers",html:"<p>Later radar, engine, cockpit, electronic-warfare, structural, and weapons packages remain A10M marks and Kai packages while the architecture survives. A new A-number requires a genuinely new aerodynamic or propulsion concept.</p>"},
      {id:"withdrawals",title:"Superseded catalog",html:"<p>The former J12N1 Raikō, J13M1 Raiden, J14M1 Kairyū, A11M1 Arashi, and A12M1 Arashi Kai entries no longer define the 1958–83 fighter sequence.</p>"}
    ],
    related:[{href:"a8m-senpu.html",kicker:"First carrier jet",label:"A8M Senpū"},{href:"a9m1-shippu.html",kicker:"Transonic family",label:"A9M Shippū"},{href:"a10m1-shippu-kai.html",kicker:"Modern carrier fighter",label:"A10M1"},{href:"b9y-family.html",kicker:"Heavy family",label:"B9Y Family"}],
    facts:[["Period","1947–1985"],["Carrier-fighter line","A8M–A10M"],["Heavy systems line","B8Y–B10Y"],["1985 carrier fighter","A10M"],["Automatic A11M/A12M succession","None"]]
  }),

  "a9m1-shippu": japaneseJointFixed({title:"A9M Shippū family",eyebrow:"Mitsubishi carrier fighter · c. 1955–70",infoboxKicker:"Four-mark transonic and early-supersonic family",lead:"A9M Shippū carries Mitsubishi carrier aviation from a swept-wing transonic fighter into a mature missile and data-link aircraft across four marks.",canon:"A9M1 appears around 1955–56 at Mach 0.95–0.98; A9M2 follows around 1959–61, A9M3 around 1963–65, and A9M4 around 1968–70. The former fixed 1,180 km/h claim is withdrawn.",identity:"A9M remains one carrier-fighter project through four model digits rather than consuming a new A-number for each modernization.",development:"A9M2 adds a longer radar nose, improved electrical system, and early missiles. A9M3 adds a better engine and afterburner for Mach 1.1–1.2-class performance. A9M4 matures missiles, data links, radar, and carrier handling.",system:"The family preserves a coherent Mitsubishi design language between A8M Senpū and A10M1.",related:[{href:"a8m-senpu.html",kicker:"Predecessor",label:"A8M Senpū"},{href:"a10m1-shippu-kai.html",kicker:"Successor",label:"A10M1"}],facts:[["Manufacturer","Mitsubishi"],["Marks","A9M1–A9M4"],["A9M1","c. 1955–56; Mach 0.95–0.98"],["A9M2","c. 1959–61"],["A9M3","c. 1963–65; Mach 1.1–1.2 class"],["A9M4","c. 1968–70"]]}),

  "a10m1-shippu-kai": japaneseJointFixed({title:"A10M1",eyebrow:"Mitsubishi carrier air-superiority fighter · c. 1978–80",infoboxKicker:"Modern single-engine carrier platform",lead:"A10M1 is Japan's first architectural break into a modern single-engine carrier air-superiority platform.",canon:"The identity, period, broad wing, digital or hybrid flight control, large radar nose, dorsal crescent intake, and long-lived-platform role are fixed. The former 1966 Type 26 Shippū Kai identity is withdrawn.",identity:"A shallow black dorsal crescent intake stands off the boundary layer and feeds a deeper plenum. A clean lower fuselage benefits carrier structure and stores.",development:"Intake distortion under yaw and high angle of attack drives years of duct, bleed, guide-vane, and engine-control work.",system:"Later radar, engine, cockpit, electronic-warfare, structural, and weapon improvements remain A10M marks and Kai packages through 1985.",related:[{href:"a9m1-shippu.html",kicker:"Predecessor",label:"A9M Shippū"},{href:"b10y-family.html",kicker:"Heavy partner",label:"B10Y Family"}],facts:[["Manufacturer","Mitsubishi"],["Period","c. 1978–80"],["Role","Carrier air superiority"],["Configuration","Single engine; dorsal crescent intake"],["Later development","A10M marks and Kai packages"]]}),

  "j12n1-raiko": japaneseJointWithdrawn({title:"Former J12N1 Raikō designation",former:"Type 18 J12N1 Raikō",disposition:"Withdrawn from fixed lineage",lead:"J12N1 Raikō no longer establishes a 1958 all-weather-interceptor branch.",canon:"The revised lineage proceeds through A8M, A9M, A10M and B8Y/B9Y/B10Y rather than an automatic J12–J14 sequence.",status:"The former introduction year, performance, radius, cannon, missiles, and Nakajima succession are not retained.",lineage:"The 1950s fixed developments are A9M marks, B8Y2, and the new B9Y family.",related:[{href:"a9m1-shippu.html",kicker:"Carrier fighter",label:"A9M Shippū"},{href:"b9y-family.html",kicker:"Heavy aircraft",label:"B9Y Family"}]}),

  "j13m1-raiden": japaneseJointWithdrawn({title:"Former J13M1 Raiden designation",former:"Type 28 J13M1 Raiden",disposition:"Withdrawn from fixed lineage",lead:"J13M1 Raiden no longer establishes a 1968 Mach 2 atmospheric fighter.",canon:"Type 48 Raiden remains a separate orbital interceptor; it does not validate the former J13M1 aircraft.",status:"The former Type year, performance, radius, missile load, and succession to J14 are withdrawn.",lineage:"A9M4 supplies the mature late-1960s carrier standard while the B-series develops the heavy role.",related:[{href:"a9m1-shippu.html",kicker:"Late-1960s fighter",label:"A9M Shippū"},{href:"type-48-raiden.html",kicker:"Orbital namesake",label:"Type 48 Raiden"}]}),

  "j14m1-kairyu": japaneseJointWithdrawn({title:"Former J14M1 Kairyū designation",former:"Type 36 J14M1 Kairyū",disposition:"Withdrawn from fixed lineage",lead:"J14M1 Kairyū no longer supplies a fixed 1976 heavy fleet-defense fighter.",canon:"Japan's larger twin-engine, two-seat fleet-defense progression is carried by B9Y, B10Y, and mature marks.",status:"The former performance, radius, missile load, and Kairyū–Arashi pairing are withdrawn.",lineage:"The canonical heavy branch begins with B8Y, becomes a new B9Y family, and matures through B10Y.",related:[{href:"b9y-family.html",kicker:"Heavy predecessor",label:"B9Y Family"},{href:"b10y-family.html",kicker:"Mature platform",label:"B10Y Family"}]}),

  "a11m1-arashi": japaneseJointWithdrawn({title:"Former A11M1 Arashi designation",former:"Type 38 A11M1 Arashi",disposition:"No automatic A11M by 1985",lead:"A11M1 Arashi is not part of the fixed carrier-fighter register through 1985.",canon:"A10M is a long-lived platform, so later improvements remain A10M marks and Kai packages unless a genuinely new architecture appears.",status:"The former 1978 Type 38 aircraft, performance, weapon load, and pairing with J14M1 are withdrawn.",lineage:"The fixed carrier fighter entering around 1978–80 is <a href='a10m1-shippu-kai.html'>A10M1</a>.",related:[{href:"a10m1-shippu-kai.html",kicker:"Canonical fighter",label:"A10M1"}]}),

  "a12m1-arashi-kai": japaneseJointWithdrawn({title:"Former A12M1 Arashi Kai designation",former:"Type 43 A12M1 Arashi Kai",disposition:"No automatic A12M by 1985",lead:"A12M1 Arashi Kai is not part of the fixed carrier-fighter register through 1985.",canon:"The 1985 fleet network uses later A10M marks and the B-series, not an automatically renumbered A12M.",status:"The former 1983 Type 43 identity, performance, missile load, and endpoint status are withdrawn.",lineage:"A future A-number requires a new architecture such as internal weapons, major low-observable shaping, or new propulsion.",related:[{href:"a10m1-shippu-kai.html",kicker:"Continuing platform",label:"A10M1"},{href:"b10y-family.html",kicker:"Heavy partner",label:"B10Y Family"}]}),

  "b8y2-keiun-kai-ni": japaneseJointFixed({title:"B8Y2 Keiun Kai Ni",eyebrow:"Carrier-attack aircraft · 1950s",infoboxKicker:"Improved Keiun family form",lead:"B8Y2 Keiun Kai Ni is the improved 1950s nose-intake form within the Keiun carrier-attack family.",canon:"The identity, period, improved-engine and ducting basis, and nose-intake arrangement are fixed. It remains inside B8Y rather than consuming B9.",identity:"Kai Ni records the second substantial Keiun development while preserving B8Y.",development:"Improved engines and ducting permit the nose-intake alternative tested during R2Y development to return.",system:"The family remains carrier-capable while often operating from major land bases.",related:[{href:"b8y1-keiun-kai.html",kicker:"Earlier form",label:"B8Y1 Keiun Kai"},{href:"b9y-family.html",kicker:"New heavy aircraft",label:"B9Y Family"}],facts:[["Service","Imperial Japanese Navy"],["Period","1950s"],["Configuration","Improved nose-intake form"],["Family","B8Y Keiun"]]}),

  "b9y-family": japaneseJointFixed({title:"B9Y family",eyebrow:"Heavy carrier-capable aircraft · late 1950s–60s",infoboxKicker:"New swept-wing heavy family",lead:"B9Y is Japan's first genuinely new swept-wing heavy carrier-capable aircraft after Keiun.",canon:"The identity, period, architecture, twin-engine configuration, normally two-seat crew, and strike/interception function are fixed.",identity:"B9 is reserved for a new aircraft rather than being consumed by B8Y2.",development:"The larger airframe supports heavy carrier strike and interception beyond the compact A-series.",system:"B9Y establishes the heavy partner that matures through B10Y.",related:[{href:"b8y2-keiun-kai-ni.html",kicker:"Keiun predecessor",label:"B8Y2 Keiun Kai Ni"},{href:"b10y-family.html",kicker:"Mature successor",label:"B10Y Family"}],facts:[["Period","Late 1950s–60s"],["Architecture","New swept-wing heavy aircraft"],["Engines","Twin"],["Crew","Normally two"],["Roles","Strike and interception"]]}),

  "b10y-family": japaneseJointFixed({title:"B10Y family",eyebrow:"Mature heavy fleet-defense aircraft · 1960s–80s",infoboxKicker:"Sensor-heavy multirole platform",lead:"B10Y and its mature marks develop the heavy line into a supersonic, sensor-heavy, two-seat fleet-defense and multirole platform.",canon:"The identity, period, supersonic goal, twin-engine two-seat form, function, and preference for stable later marks are fixed.",identity:"Later improvements stabilize within B10Y rather than consuming a new number every few years.",development:"The platform develops radar, weapons, electronic systems, and multirole capacity around the heavy B-series architecture.",system:"By 1985 it operates with A10M fighters, airborne warning, data links, missiles, ships, satellites, and carriers.",related:[{href:"b9y-family.html",kicker:"Earlier family",label:"B9Y Family"},{href:"a10m1-shippu-kai.html",kicker:"Single-engine partner",label:"A10M1"}],facts:[["Period","1960s–80s"],["Configuration","Twin engine; two seat"],["Role","Fleet defense and multirole"],["Development rule","Stable later marks"]]})
});
