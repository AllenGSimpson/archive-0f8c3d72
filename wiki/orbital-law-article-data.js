window.deepArticles = window.deepArticles || {};

const orbitalLawSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — space chronology and orbital law"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — orbital safety and incidents milestones"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — space architecture and legal constraints"},
  {href:"../transcript.md",label:"Master Transcript — orbital weapons, debris, rescue, and encounter rules"}
];

const orbitalLawArticle = config => ({
  category:config.category || "Space law",
  eyebrow:config.eyebrow || "International orbital order · 1968–1985",
  infoboxKicker:config.infoboxKicker || "International space-law instrument",
  ...config,
  sources:[...orbitalLawSources,...(config.primarySources || [])],
  categories:config.categories || ["Space law","Orbital safety","International relations","Spaceflight"]
});

const lawRelated = [
  {href:"orbital-law.html",kicker:"Aggregate system",label:"Orbital Law"},
  {href:"orbital-weapons.html",kicker:"Military context",label:"Orbital Weapons"},
  {href:"space-programs.html",kicker:"Historical context",label:"The Space Race"},
  {href:"orbital-stations.html",kicker:"Protected infrastructure",label:"Orbital Stations"}
];

Object.assign(window.deepArticles, {
  "orbital-law": orbitalLawArticle({
    title:"Orbital Law",category:"International law",eyebrow:"Safety without demilitarization · 1968–1985",infoboxKicker:"International orbital legal order",
    flag:{src:"assets/diagrams/orbital-law-chronology.svg",alt:"Chronology of orbital law from the Weather Commons through the 1982 incidents agreement",caption:"Disclosure, weapons limits, registration, rescue, debris control, and encounter rules accumulate without abolishing military orbit"},
    lead:"Orbital law is the network of conventions, technical notes, protected-service rules, registration practices, and incident agreements that makes a militarized multi-bloc space system operable. Its governing bargain is safety without disarmament: states protect crews, stations, rescue, and traffic while retaining reconnaissance, inspection, and conventional orbital force.",
    canon:"The 1970 Kobe Notes, 1974 Geneva weapons convention, 1976 Stockholm safety convention, 1982 Geneva incidents agreement, and core duties are established. Complete treaty texts, membership lists, enforcement bodies, and several technical thresholds remain open.",
    sections:[
      {id:"problem",title:"The problem of shared orbit",html:"<p>Satellites cross frontiers, debris ignores sovereignty, rescue can expose classified systems, and a servicing approach can look like attack preparation. No power can make orbit safe through national rules alone, but none is willing to surrender military access.</p>"},
      {id:"weather",title:"Protected public services",html:"<p>The San Marco Meteorological Accords and Weather Commons establish a voluntary protected category for open weather, environmental, and rescue spacecraft. Recognizable identifiers and shared products reduce interference while national command networks remain separate.</p>"},
      {id:"kobe",title:"The Kobe Notes of 1970",html:"<p>Operation Amaterasu, in which Japan temporarily controls a German weather spacecraft, produces technical understandings on orbital radio interference and stronger command authentication. The Notes are not a complete space treaty, but they make signal integrity a diplomatic subject.</p>"},
      {id:"weapons",title:"The 1974 Geneva weapons convention",html:"<p>The <a href='geneva-space-weapons-convention.html'>Geneva Convention on Mass-Effect Weapons in Outer Space</a> restricts biological, chemical, and radiological-dispersal weapons for participating states. It does not ban kinetic interceptors, armed inspectors, conventional guided reentry, or every great-power program.</p>"},
      {id:"stockholm",title:"The 1976 Stockholm safety convention",html:"<p>The <a href='stockholm-orbital-safety-convention.html'>Stockholm Convention</a> generalizes registration, rescue, passivation, debris notification, controlled disposal, salvage, and protected recovery craft. Wolfgang treats its adoption as a major diplomatic success.</p>"},
      {id:"incidents",title:"The 1982 Geneva incidents agreement",html:"<p>After a dangerous 1981 inspection encounter, the <a href='geneva-orbital-incidents-agreement.html'>Geneva agreement</a> adds transponders, station safety zones, notice of close approaches and major deorbits, direct station communications, rescue duties, and protection of life support.</p>"},
      {id:"jurisdiction",title:"Jurisdiction and station authority",html:"<p>Ordinary civil and criminal jurisdiction generally follows the responsible vehicle or module government. A station's integrated commander retains technical emergency authority where life support, power, attitude, docking, or collision risk makes divided command impossible. Permanent surface occupation later turns these rules into the unsettled law of <a href='extraterrestrial-claims.html'>extraterrestrial claims</a>.</p>"},
      {id:"limits",title:"Enforcement and limits",html:"<p>Compliance depends upon registration, tracking, reciprocal vulnerability, insurance, docking access, salvage recognition, and the fear that unsafe behavior will endanger one's own crews. The system reduces accident and miscalculation without making orbit peaceful.</p>"}
    ],
    related:[...lawRelated,{href:"weather-commons.html",kicker:"Protected civil service",label:"Weather Commons"},{href:"united-states-aerospace-force.html",kicker:"Major operator",label:"United States Aerospace Force"}],
    facts:[["Governing principle","Safety without demilitarization"],["Radio-interference notes","Kobe · 1970"],["Weapons convention","Geneva · 1974"],["Safety and salvage convention","Stockholm · 1976"],["Incidents agreement","Geneva · 1982"],["Core duties","Registration · rescue · passivation · notice"],["Conventional orbital weapons","Not generally prohibited"],["Universal enforcement authority","None"]]
  }),

  "geneva-space-weapons-convention": orbitalLawArticle({
    title:"Geneva Convention on Mass-Effect Weapons in Outer Space",category:"International treaties",eyebrow:"Geneva · 1974 · weapons-of-mass-effect restrictions",infoboxKicker:"Orbital arms-control convention",
    flag:{src:"assets/diagrams/orbital-law-chronology.svg",alt:"Orbital law timeline highlighting the 1974 Geneva convention",caption:"The 1974 instrument limits particular mass-effect weapons without demilitarizing orbit"},
    lead:"The Geneva Convention on Mass-Effect Weapons in Outer Space is the 1974 treaty restricting biological, chemical, and radiological-dispersal weapons in orbit for its signatories. It is the first major orbital arms-control agreement, but deliberately leaves ordinary kinetic, inspection, rescue, and conventional-strike systems outside a general ban.",
    canon:"The 1974 date, broad weapon categories, many but not universal signatures, incomplete great-power coverage, and failure to demilitarize orbit are established. Negotiators, depositary, precise definitions, inspection clauses, and full ratification list remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>Early orbital military planning reveals that some weapons could contaminate stations, persist beyond a target, or make an entire orbital region hazardous. Even rivals willing to deploy inspectors and interceptors possess a common interest in excluding indiscriminate effects.</p>"},
      {id:"geneva",title:"The Geneva negotiations",html:"<p>Neutral and secondary powers press the great systems to distinguish military presence from methods capable of poisoning shared space. The resulting compromise is narrow enough to attract many signatures.</p>"},
      {id:"prohibitions",title:"Restricted weapons",html:"<p>The convention restricts biological agents, chemical dissemination, and radiological dispersal in outer space for participating states. It also governs preparations whose foreseeable effect is uncontrolled contamination of crewed or commonly used orbital regions.</p>"},
      {id:"permitted",title:"Systems left outside the ban",html:"<p>Kinetic interceptors, cannon, missiles, controlled deorbit, close inspection, electronic warfare, and conventionally armed guided reentry are not automatically prohibited. Their legality may still be constrained by safety, notice, station protection, or ordinary laws of conflict.</p>"},
      {id:"signatures",title:"Participation",html:"<p>Many states sign, but the convention does not bind every major power in every respect. Some governments accept the principle while reserving technical definitions or delaying ratification.</p>"},
      {id:"verification",title:"Verification problem",html:"<p>Payload secrecy and dual-use equipment make intrusive inspection unacceptable. Registration, tracking, launch notification, national intelligence, and reciprocal suspicion substitute for a universal inspectorate.</p>"},
      {id:"military",title:"Military consequence",html:"<p>The agreement channels competition toward precise conventional systems and controlled interception. It reduces the attraction of indiscriminate orbital effects while making armed inspectors and reusable security vehicles more politically defensible.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The convention establishes that arms control can govern method without abolishing military orbit. Stockholm later addresses debris and rescue, while the 1982 Geneva agreement governs dangerous encounters between otherwise lawful systems.</p>"}
    ],
    related:[...lawRelated,{href:"stockholm-orbital-safety-convention.html",kicker:"Safety successor",label:"Stockholm Orbital Safety and Salvage Convention"},{href:"project-zenith.html",kicker:"Conventional system",label:"Project Zenith"}],
    facts:[["Signed","1974"],["Location","Geneva"],["Subject","Mass-effect weapons in outer space"],["Restricted effects","Biological · chemical · radiological dispersal"],["Kinetic weapons","Not generally banned"],["Conventional reentry weapons","Not generally banned"],["Participation","Broad but not universal"],["Demilitarization","No"]]
  }),

  "stockholm-orbital-safety-convention": orbitalLawArticle({
    title:"Stockholm Orbital Safety and Salvage Convention",category:"International treaties",eyebrow:"Stockholm · 1976 · registration, rescue, debris, and salvage",infoboxKicker:"Orbital safety convention",
    flag:{src:"assets/diagrams/orbital-law-chronology.svg",alt:"Orbital law timeline highlighting the 1976 Stockholm convention",caption:"Stockholm converts scattered operating practice into shared registration, rescue, debris, disposal, and salvage duties"},
    lead:"The Stockholm Orbital Safety and Salvage Convention is the widely accepted 1976 agreement governing spacecraft registration, rescue, passivation, debris notification, controlled disposal, recovery craft, and salvage. It is the principal safety constitution of the mature orbital age.",
    canon:"The 1976 date, Wolfgang's support, broad acceptance, and listed duties are established. Precise membership, secretariat, liability formula, registry fields, salvage procedure, and technical thresholds remain open.",
    sections:[
      {id:"debris",title:"Collision-cascade danger",html:"<p>German and American analysts identify the possibility that impacts can create more debris and further impacts. Actual strikes and an upper-stage breakup make the threat public before the Raumhafen enters full service.</p>"},
      {id:"diplomacy",title:"The Stockholm initiative",html:"<p>States with smaller programs press for rules that do not depend upon owning a military tracking network. Wolfgang supports the convention and later treats it as proof that German leadership can produce restraint as well as infrastructure.</p>"},
      {id:"registration",title:"Registration and notification",html:"<p>Operators register spacecraft and provide enough orbital information for traffic safety. Notice is expected for significant changes, hazardous failures, major breakups, or disposal operations.</p>"},
      {id:"passivation",title:"Passivation and controlled disposal",html:"<p>Spent stages and retired spacecraft are to be left with minimized stored energy, discharged batteries where practical, secured propellant, and a planned disposal state. Controlled reentry or transfer to a less hazardous orbit is preferred to abandonment.</p>"},
      {id:"rescue",title:"Rescue duties",html:"<p>States assist crews in immediate peril regardless of bloc, subject to practical capacity and protection of life. Rescue does not automatically authorize unrestricted access to classified equipment beyond what saving life requires.</p>"},
      {id:"salvage",title:"Recovery and salvage",html:"<p>Recovered spacecraft and components remain connected to the responsible state or registered operator. Salvage rules distinguish humanitarian recovery, ownership, hazardous debris, and the intelligence value of foreign hardware.</p>"},
      {id:"recovery",title:"Protected recovery craft",html:"<p>Vehicles visibly engaged in rescue or controlled recovery receive heightened protection. Abuse of the designation for inspection or attack threatens reciprocal denial of rescue status.</p>"},
      {id:"legacy",title:"Legacy and limitations",html:"<p>Stockholm makes routine orbital work safer and supports insurance, docking, and multinational station access. It cannot prevent hostile close approaches, so the 1982 Geneva agreement later adds operational encounter rules.</p>"}
    ],
    related:[...lawRelated,{href:"geneva-orbital-incidents-agreement.html",kicker:"Encounter successor",label:"Geneva Orbital Incidents Agreement"},{href:"wolfgang.html",kicker:"Political sponsor",label:"Wolfgang Hitler"}],
    facts:[["Adopted","1976"],["Location","Stockholm"],["Principal sponsor","Broad multilateral effort; Wolfgang strongly supportive"],["Registration","Required by accepted practice"],["Debris duties","Notification and controlled disposal"],["Vehicle duties","Passivation"],["Humanitarian duty","Rescue"],["Military disarmament","Not included"]]
  }),

  "geneva-orbital-incidents-agreement": orbitalLawArticle({
    title:"Geneva Orbital Incidents Agreement",category:"International treaties",eyebrow:"Geneva · 1982 · close approaches and station safety",infoboxKicker:"Orbital encounter agreement",
    flag:{src:"assets/diagrams/orbital-law-chronology.svg",alt:"Orbital law timeline highlighting the 1982 Geneva incidents agreement",caption:"The 1982 accord regulates how military-capable and servicing spacecraft approach one another"},
    lead:"The Geneva Orbital Incidents Agreement is the 1982 accord governing dangerous close approaches, transponders, station safety zones, large deorbits, direct communications, rescue, and protection of life-support systems. Britain and Italy broker it after a 1981 inspection encounter nearly becomes an international crisis.",
    canon:"The 1981 trigger, 1982 date, British–Italian mediation, transponder and notice duties, safety zones, direct communications, rescue, life-support protection, and non-demilitarization are established. The spacecraft involved, exact distances, signatories, and enforcement procedure remain open.",
    sections:[
      {id:"encounter",title:"The 1981 inspection encounter",html:"<p>A military-capable or servicing spacecraft approaches another state's asset closely enough that maneuver, inspection, rescue, and attack preparation become impossible to distinguish in real time. The encounter ends without fire but exposes the absence of agreed signals.</p>"},
      {id:"brokers",title:"British and Italian mediation",html:"<p>Britain brings tracking, communications, and Commonwealth scientific credibility; Italy brings Latin-bloc access and experience mediating between German and non-German systems. Neither can dominate orbit, making both acceptable brokers.</p>"},
      {id:"transponders",title:"Transponders and identity",html:"<p>Participating craft use agreed transponder behavior in regulated encounters and around stations. Identity does not require disclosure of every mission or payload, but it reduces the danger of an unidentified vehicle being treated as an imminent attack.</p>"},
      {id:"zones",title:"Station safety zones",html:"<p>Crews and operators receive defined expectations for approach to inhabited stations and life-support infrastructure. The zones are safety rules rather than sovereign territorial claims over a volume of outer space.</p>"},
      {id:"notice",title:"Notice of close approaches and deorbits",html:"<p>Operators provide advance notice of planned proximity operations and major controlled deorbits when feasible. Emergencies allow shorter notice but require direct communication as soon as possible.</p>"},
      {id:"communications",title:"Direct station communications",html:"<p>Station commanders and approaching crews can establish a direct channel without waiting for complete diplomatic clearance. Technical deconfliction is separated from later political protest.</p>"},
      {id:"protected",title:"Rescue and life-support protection",html:"<p>The agreement reinforces rescue duties and makes deliberate interference with essential life support exceptionally grave. Even lawful military operations are expected to avoid converting a station failure into mass death.</p>"},
      {id:"limits",title:"Limits",html:"<p>The accord does not prohibit armed inspectors, reconnaissance, electronic warfare, conventional orbital weapons, or close approach with consent and notice. It manages encounters among such systems rather than abolishing them.</p>"}
    ],
    related:[...lawRelated,{href:"ov-5a-ranger.html",kicker:"Servicing capability",label:"OV-5A Ranger"},{href:"project-zenith.html",kicker:"Military capability",label:"Project Zenith"},{href:"stockholm-orbital-safety-convention.html",kicker:"Earlier safety law",label:"Stockholm Convention"}],
    facts:[["Trigger","Dangerous 1981 inspection encounter"],["Concluded","1982"],["Location","Geneva"],["Brokers","Britain and Italy"],["Required systems","Transponders and direct communications"],["Operational rules","Safety zones · approach notice · deorbit notice"],["Protected function","Life support and rescue"],["Demilitarization","No"]]
  }),

  "orbital-weapons": orbitalLawArticle({
    title:"Orbital Weapons",category:"Military technology",eyebrow:"Armed inspectors, interceptors, and conventional strike · 1970s–1985",infoboxKicker:"Military systems in outer space",
    flag:{src:"assets/diagrams/orbital-law-chronology.svg",alt:"Orbital law chronology showing legal constraints around armed orbital systems",caption:"Military orbit persists inside increasingly dense rules protecting crews, stations, traffic, and rescue"},
    lead:"Orbital weapons are the armed inspection, interception, electronic-warfare, controlled-deorbit, and conventional guided-reentry systems fielded or tested by the major space powers. By 1985 orbit is militarized but not governed by a doctrine of unrestricted attack upon stations and crews.",
    canon:"German Rj development, American Project Zenith, Japanese Type 48 Raiden direction, conventional mission sets, and the major legal limits are established. Exact weapon performance, fleet strength, basing, rules of engagement, and many missions remain open.",
    sections:[
      {id:"militarization",title:"Militarization without nuclear arsenals",html:"<p>The absence of nuclear weapons does not make space peaceful. Reconnaissance, communications, weather, navigation, inspection, and station defense are strategic systems, and conventional attack upon them can alter a terrestrial campaign.</p>"},
      {id:"germany",title:"German Raumjäger",html:"<p>Germany progresses from the two-crew Rj 1 Wespe inspector through the 20 mm Rj 2 Habicht to missile-armed Rj 3 Falke trials during 1978–85. These craft remain in orbit and defend fixed infrastructure rather than returning to runways.</p>"},
      {id:"america",title:"American Project Zenith",html:"<p>The OSV-1A Zenith reaches limited readiness in 1984. Its missions include armed inspection, reconnaissance, rescue, electronic warfare, controlled deorbit, and conventional guided reentry attack. The <a href='grp-1-sledge.html'>GRP-1 Sledge</a> supplies a hardened-point-target penetrator; the <a href='orb-2.html'>ORB-2</a> is a conventional high-explosive reentry bomb in 1985 trials. Zenith shares operational ancestry with Columbia but belongs to Orbital Security Command.</p>"},
      {id:"japan",title:"Japanese autonomous interceptors",html:"<p>Japan moves toward a laser-relay network supervising unmanned Type 48 Raiden interceptors in the later 1980s. Machines fly trajectories autonomously, but a human weapons officer must authorize destructive fire. The group includes <a href='type-48-utility-tug-ko.html'>Kō utility tugs</a> for inspection and towing and <a href='type-48-salvage-tug-otsu.html'>Otsu salvage tugs</a> for stabilization and debris removal.</p>"},
      {id:"secondary",title:"Secondary powers",html:"<p>Britain and the Latin states rely more heavily upon tracking, communications, coalition access, legal mediation, and selective inspection capability. Their smaller armed presence increases their interest in predictable encounter law.</p>"},
      {id:"missions",title:"Inspection, rescue, and attack",html:"<p>The same rendezvous, sensors, manipulators, maneuvering fuel, and communications can examine damage, rescue a crew, disable a satellite, or prepare a strike. Mission intent cannot be inferred from hardware alone.</p>"},
      {id:"law",title:"Legal limits",html:"<p>The 1974 Geneva convention restricts mass-effect agents, Stockholm protects registration and rescue, and the 1982 Geneva agreement regulates close approach and life-support risk. Conventional weapons remain lawful in broad categories but not immune from these duties.</p>"},
      {id:"balance",title:"Balance in 1985",html:"<p>America has exceptional reusable approach and return; Germany possesses armed resident craft and high-orbit infrastructure; Japan excels in distributed robotics and control. None can attack freely without risking reciprocal losses, debris, diplomatic isolation, and the safety of its own crews.</p>"}
    ],
    related:[...lawRelated,{href:"project-zenith.html",kicker:"American program",label:"Project Zenith"},{href:"military-technology.html",kicker:"German program",label:"Raumjäger and Orbital Forces"},{href:"geneva-space-weapons-convention.html",kicker:"Weapons law",label:"Geneva Space Weapons Convention"}],
    facts:[["Strategic condition","Militarized orbit without nuclear arsenals"],["German families","Rj 1 Wespe · Rj 2 Habicht · Rj 3 Falke"],["American vehicle","OSV-1A Zenith"],["Japanese system","Type 48 Raiden trials after 1985"],["Common missions","Inspection · interception · EW · deorbit"],["Mass-effect ban","Partial · 1974 Geneva"],["Close-approach rules","1982 Geneva"],["General demilitarization","Absent"]]
  })
});
