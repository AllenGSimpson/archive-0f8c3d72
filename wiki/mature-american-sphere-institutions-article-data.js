window.deepArticles = window.deepArticles || {};

const matureAmericanSphereSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — the mature American Hemisphere and network order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — post-1968 politics and late-century network culture"},
  {href:"../transcript.md",label:"Master Transcript — Colombia and Panama, Turn 732"},
  {href:"../transcript.md",label:"Master Transcript — Brightnet, ShadowNet, and corporate identity, Turns 744–777"}
];

const matureAmericanSphereArticle = config => ({
  category:config.category,
  eyebrow:config.eyebrow,
  infoboxKicker:config.infoboxKicker,
  title:config.title,
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  sources:[...matureAmericanSphereSources,...config.sources],
  categories:config.categories
});

Object.assign(window.deepArticles,{
  "colombian-national-compact":matureAmericanSphereArticle({
    category:"Colombia",eyebrow:"Colombian political settlement · late 1950s–1985",infoboxKicker:"Elite power-sharing settlement",
    title:"Colombian National Compact",
    lead:"The Colombian National Compact is the governing bargain through which the established civilian parties contain the worst phase of La Violencia and preserve constitutional government. It limits open competition among the old elites, embeds American security assistance, and leaves regional, agrarian, and criminal conflicts outside the settlement.",
    canon:"A late-1950s power-sharing compact, its containment rather than termination of La Violencia, continued civilian institutions, exceptional internal-security powers, American support, political exclusion, and the independent financing of later armed groups are established. National Compact is the archive's descriptive name; the formal title, signatories, office-allocation formula, constitutional instruments, exact opening and closing dates, and later party chronology remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p><em>La Violencia</em> begins as a Colombian breakdown of Liberal–Conservative order. Village forces, police and army units, landowners' guards, peasant self-defense communities, regional bosses, and bandits participate. Foreign powers can supply or exploit actors, but no surviving Soviet center creates the conflict.</p>"},
      {id:"formation",title:"Formation",html:"<p>The bargain takes shape around 1957–59 after the established parties conclude that unrestricted competition risks renewed civil war. The precise conference, signatories, and legal sequence have not been fixed.</p><p>American officials support a settlement that prevents rival powers from using political fracture near the approaches to the <a href='panama.html'>Panama Canal</a>.</p>"},
      {id:"arrangement",title:"Political arrangement",html:"<p>The compact distributes responsibility and access among established civilian elites while preserving elections, Congress, courts, departments, and party government. The available record does not establish a fixed alternation of presidents or a precise quota for every office.</p>"},
      {id:"security",title:"Emergency government",html:"<p>States of siege, police authority, military administration, and mobile internal-security forces remain common in contested regions. Civilian institutions continue to govern nationally while officers and security officials exercise wider powers in rural and frontier districts.</p>"},
      {id:"american",title:"American assistance",html:"<p>The United States supplies advisers, communications, air transport, road construction, light armor, police training, and credit. These relationships become embedded in the officer corps. Colombia remains too large and internally differentiated to operate as a simple American puppet.</p>"},
      {id:"exclusion",title:"Political exclusion",html:"<p>Land distribution, regional exclusion, police violence, labor organization, and the legitimacy of controlled participation remain disputed. Agrarian socialists, Catholic social radicals, Indigenous and regional defense movements, urban nationalists, and former partisan enclaves do not share one foreign sponsor or program.</p>"},
      {id:"war-economies",title:"Armed groups and war economies",html:"<p>By the 1970s kidnapping, smuggling, contraband, mining, and narcotics give armed factions sources of income independent of foreign patrons. Difficult terrain and Caribbean and Pacific routes prevent stabilization through the closure of one supply line.</p>"},
      {id:"1985",title:"Position by 1985",html:"<p>The compact still frames a formally democratic and American-associated republic. The central government controls the principal cities and corridors, while persistent violence makes Colombia important to American intelligence, counter-smuggling, communications, and canal defense.</p>"}
    ],
    related:[{href:"colombia.html",kicker:"National setting",label:"Republic of Colombia"},{href:"panamanian-military-regime.html",kicker:"Canal neighbor",label:"Panamanian Military Regime"},{href:"american-hemisphere.html",kicker:"Regional system",label:"American Hemisphere"},{href:"venezuelan-intervention.html",kicker:"Nearby precedent",label:"Venezuelan Intervention"},{href:"honduran-security-crisis.html",kicker:"American intervention model",label:"Honduran Security Crisis"}],
    facts:[["Approximate formation","c. 1957–1959"],["Political form","Civilian elite power-sharing"],["Institutions retained","Elections, Congress, courts, and departments"],["Security practice","Emergency law and regional military authority"],["Principal external supporter","United States"],["Effect on La Violencia","Contains; does not end"],["Later armed finance","Regional, criminal, and illicit war economies"],["Formal title and detailed chronology","Open"]],
    sources:[{href:"colombia.html",label:"Fractured Peace Archive — Republic of Colombia"}],
    categories:["Colombia","National Compact","Political settlements","La Violencia","American Hemisphere"]
  }),

  "panamanian-military-regime":matureAmericanSphereArticle({
    category:"Panama",eyebrow:"Panamanian political order · from 1968",infoboxKicker:"Military-backed nationalist government",
    title:"Panamanian military regime",
    lead:"The Panamanian military regime is the nationalist security order created by the 1968 rupture in civilian party government. It seeks greater jurisdiction, revenue, and dignity for Panama while accepting that the United States will retain the military system surrounding the canal.",
    canon:"A 1968 military rupture, a later military-backed nationalist government, continued Panamanian formal sovereignty, permanent American strategic control of canal defense, bargaining for nonmilitary concessions, and the regime's later security and financial roles are established at framework level. The coup leadership, the identity and career of any Torrijos- or Noriega-like figures, treaty titles, dates, territorial formulas, and final constitutional sequence remain working history.",
    sections:[
      {id:"background",title:"Background",html:"<p>Canal sovereignty dominates Panamanian politics before 1968. Elite factionalism, National Guard ambition, labor and student nationalism, public resentment of the canal order, and frustration with the civilian oligarchy provide the domestic setting for military intervention.</p>"},
      {id:"rupture",title:"The 1968 rupture",html:"<p>The armed forces displace the prior party order and install a government promising national dignity, administrative competence, and recovery of Panamanian rights. The archive has not fixed whether the historical officers retain their real-world roles.</p>"},
      {id:"government",title:"Government",html:"<p>A military-backed executive governs through Panamanian ministries, courts, police, municipal authorities, and a reorganized security establishment. Republican forms and the national flag continue. The later balance between uniformed command and civilian office remains open.</p>"},
      {id:"canal",title:"Canal policy",html:"<p>The regime demands a larger revenue share, Panamanian employment, civil jurisdiction, development funds, and the transfer of nonmilitary land. These objectives can produce successive accommodations, although no final treaty name or schedule has been established.</p>"},
      {id:"american",title:"American strategic authority",html:"<p>Washington retains military command, defense areas, locks security, strategic communications, intervention planning, and authority to prevent hostile use or closure during war. The <a href='american-hemisphere.html'>American Hemisphere</a> doctrine treats these functions as nontransferable.</p>"},
      {id:"security",title:"Security establishment",html:"<p>Panamanian intelligence and guard institutions monitor canal labor, domestic opposition, Cuban and other foreign agents, shipping, and the Colombian frontier. Their cooperation gives them leverage in dealings with both Washington and civilian political groups.</p>"},
      {id:"economy",title:"Financial and transit economy",html:"<p>Canal traffic, shipping registries, warehousing, banks, insurers, customs brokers, construction, and corporate subsidiaries expand around the protected route. By the Reagan era Panama is a principal counting house for American and international business networks.</p>"},
      {id:"1985",title:"Position by 1985",html:"<p>Panama remains sovereign in law and American-aligned in strategic practice. Its government can negotiate costs and local jurisdiction; it cannot invite a rival bloc into the canal-defense system.</p>"}
    ],
    related:[{href:"panama.html",kicker:"National setting",label:"Republic of Panama"},{href:"colombian-national-compact.html",kicker:"Southern neighbor",label:"Colombian National Compact"},{href:"hemispheric-renewal-act.html",kicker:"American doctrine",label:"Hemispheric Renewal Act"},{href:"american-hemisphere.html",kicker:"Regional system",label:"American Hemisphere"},{href:"corporate-geopolitics-americas.html",kicker:"Later commercial order",label:"Corporate Geopolitics in the Americas"}],
    facts:[["Beginning","1968 rupture"],["Government type","Military-backed nationalist regime"],["Formal sovereignty","Panamanian"],["Canal defense","United States-controlled"],["Principal demands","Revenue, jurisdiction, employment, land, and development"],["Later economic role","Transit and financial center"],["1985 alignment","American Hemisphere"],["Leadership and treaty chronology","Open"]],
    sources:[{href:"panama.html",label:"Fractured Peace Archive — Republic of Panama"}],
    categories:["Panama","Military governments","Panama Canal","American Hemisphere","1968"]
  }),

  "brightnet":matureAmericanSphereArticle({
    category:"Computing",eyebrow:"American network culture · late 1990s–2005",infoboxKicker:"Public identity-linked Weltnetz ecology",
    title:"Brightnet",
    lead:"Brightnet is the American term for the indexed, identity-linked, commercially supported, and employment-safe part of Weltnetz. It is an application and social environment rather than a separate physical network. Official records, professional credentials, retail accounts, public discussion, and ordinary corporate services are concentrated there.",
    canon:"Brightnet's status as an American public identity layer on Weltnetz, its contrast with ShadowNet, provider- and service-level authentication, commercial indexing, employment use, political visibility, and normal place in household life by 2005 are established. The first use of the term, named providers and search firms, identity law, credential formats, account portability rules, and market shares remain open.",
    sections:[
      {id:"definition",title:"Definition",html:"<p>Brightnet consists of services designed to be easy to find, authenticate, purchase from, and associate with a civil or professional identity. It uses the same international transport standards, cables, relays, satellites, and gateways as <a href='shadownet.html'>ShadowNet</a>.</p>"},
      {id:"identity",title:"Identity and authentication",html:"<p>Weltnetz does not require a certified machine or civil identity at its base protocol. Providers, employers, banks, governments, publishers, and individual applications authenticate users above that layer. A person can maintain several service identities while keeping one recognized Brightnet profile.</p>"},
      {id:"services",title:"Services",html:"<p>Government records, professional credentials, banking, retail, employment portals, licensed media, public forums, household subscriptions, schools, and commercial directories form the visible ecology. National and corporate search systems determine what ordinary users find first.</p>"},
      {id:"employment",title:"Employment and reputation",html:"<p>Employers and affiliated firms use public profiles to verify credentials, review speech, recruit workers, and assess institutional compatibility. Political statements made under a Brightnet identity can follow a user across jobs and service networks.</p>"},
      {id:"commerce",title:"Commercial organization",html:"<p>Providers sell hosting, authentication, search placement, advertising, reputation services, payments, and access bundles. Competing corporate ecosystems prevent a single American service from controlling the entire public layer.</p>"},
      {id:"shadow",title:"Going shadow",html:"<p>Users move sensitive political discussion, private communities, unauthorized publication, modding, piracy, and compartmented social identities through the <a href='privacy-router-industry.html'>privacy-router and relay industry</a> into unlisted services. By the early 2000s, moving between bright and shadow roles is ordinary; unwanted linkage between them remains dangerous.</p>"},
      {id:"politics",title:"Political use",html:"<p>Campaigns, employers, and sponsors treat visible Brightnet speech as attributable public conduct. <a href='corporate-political-blacklists.html'>Corporate political blacklists</a> and doxing anxiety make the public layer appear increasingly panoptic to users who depend upon patron services.</p>"},
      {id:"international",title:"International use",html:"<p>Brightnet is primarily an American expression. German, Japanese, Commonwealth, and Latin services develop their own balance of public identity, licensing, search control, and pseudonymity on the shared Weltnetz layer.</p>"}
    ],
    related:[{href:"shadownet.html",kicker:"Pseudonymous counterpart",label:"ShadowNet"},{href:"weltnetz.html",kicker:"Underlying network",label:"Weltnetz"},{href:"corporate-political-blacklists.html",kicker:"Employment control",label:"Corporate Political Blacklists"},{href:"platform-society.html",kicker:"Household context",label:"Consumer Computing and Platform Society"},{href:"american-data-network.html",kicker:"American precursor",label:"American Data Network"}],
    facts:[["Mature period","Late 1990s–2005"],["Physical network","Weltnetz"],["Characteristic identity","Civil, professional, or employment-linked"],["Discoverability","Indexed"],["Principal uses","Official, commercial, professional, and public services"],["Authentication layer","Provider, service, and application"],["Pseudonymous counterpart","ShadowNet"],["Single controlling provider","No"]],
    sources:[{href:"shadownet.html",label:"Fractured Peace Archive — ShadowNet"}],
    categories:["Computing","Weltnetz","Network culture","United States","Digital identity"]
  }),

  "corporate-political-blacklists":matureAmericanSphereArticle({
    category:"United States",eyebrow:"American corporate-political order · late 1990s–2000s",infoboxKicker:"Private employment and affiliation records",
    title:"Corporate political blacklists in the United States",
    lead:"Corporate political blacklists are the private records through which employers, patrons, affiliated firms, insurers, and professional networks identify people considered politically incompatible, publicly disruptive, or institutionally risky. They become important as Brightnet speech attaches political conduct to employment identity and corporate service systems provide much of ordinary social provision.",
    canon:"The late-century use of shared corporate blacklists, their relationship to public Brightnet speech and exposed ShadowNet identities, the legality of political exclusion under the Free Association settlement, informal adverse employment consequences, identity-cleaning services, and use of ShadowNet as a pressure valve are established. Database names, proprietors, file formats, exchange rules, statutory regulation, appeal procedures, scale, and individual scandals remain open.",
    sections:[
      {id:"background",title:"Legal and institutional background",html:"<p>The <a href='free-association-amendment.html'>Free Association Amendment</a> protects broad private decisions about membership and employment. The later <a href='contractual-social-order.html'>contractual social order</a> makes loss of a corporate relationship consequential for benefits, housing, credit, communications, and professional access as well as wages.</p>"},
      {id:"records",title:"Records and exchange",html:"<p>Corporate security offices, personnel departments, insurers, affiliated firms, political portfolios, and specialist investigators maintain or consult compatibility records. No single national master list has been established; exchange occurs across overlapping patron networks.</p>"},
      {id:"entries",title:"Sources of entries",html:"<p>Public political activity, attributable <a href='brightnet.html'>Brightnet</a> statements, workplace disputes, campaign participation, security reports, exposed pseudonyms, and repeated refusal to separate public employment identity from confrontational politics can produce an adverse notation. The evidentiary standards and review procedures remain unspecified.</p>"},
      {id:"effects",title:"Employment and service effects",html:"<p>A listed person may receive no formal declaration of political exclusion. Employment applications, promotions, credit, insurance, affiliate contracts, housing access, or professional introductions can simply stop advancing across several related firms.</p>"},
      {id:"shadow",title:"Relationship to ShadowNet",html:"<p>Corporate intermediaries encourage contentious users to move expression away from public identity-linked services. This limits visible disruption and creates a compartment that security departments can monitor as an indicator of discontent, leaks, consumer opinion, or organized action.</p>"},
      {id:"doxing",title:"Doxing and exposed handles",html:"<p><a href='doxing.html'>Doxing</a> links a stable pseudonymous handle to a civil identity. An exposed account can damage employment and political standing; the same disclosure can reveal that an executive, official, or campaign operative participated in a supposedly independent community.</p>"},
      {id:"cleaning",title:"Identity-cleaning services",html:"<p><a href='identity-cleaning-industry.html'>Commercial identity-cleaning firms</a> advertise the removal of damaging network material. They cannot reliably erase distributed ShadowNet copies. Their practical service is often negotiation with employers, providers, or blacklist operators to restore access or mark a person as rehabilitated.</p>"},
      {id:"limits",title:"Limits and disputes",html:"<p>Competing corporate systems, incomplete data, false attribution, political rivalry, and the continuing need for skilled labor limit coordination. Reformers challenge secrecy and the absence of appeal, while corporate counsel defend the records as private risk management.</p>"}
    ],
    related:[{href:"brightnet.html",kicker:"Public identity layer",label:"Brightnet"},{href:"shadownet.html",kicker:"Pseudonymous outlet",label:"ShadowNet"},{href:"contractual-social-order.html",kicker:"Material setting",label:"Contractual Social Order"},{href:"corporate-political-portfolios.html",kicker:"Patron networks",label:"Corporate Political Portfolios"},{href:"free-association-amendment.html",kicker:"Constitutional basis",label:"Free Association Amendment"},{href:"corporate-revolving-door.html",kicker:"Career system",label:"Corporate Revolving Door"}],
    facts:[["Mature period","Late 1990s–2000s"],["Legal form","Private risk and affiliation records"],["Single national master list","Not established"],["Common inputs","Public speech, political activity, security reports, and exposed handles"],["Common effects","Employment, credit, insurance, and affiliation exclusion"],["Constitutional setting","Free Association Amendment"],["Network relationship","Brightnet visibility and ShadowNet compartmentation"],["Operators and appeal rules","Open"]],
    sources:[{href:"corporate-patronage-united-states.html",label:"Fractured Peace Archive — Corporate Patronage in the United States"},{href:"shadownet.html",label:"Fractured Peace Archive — ShadowNet"}],
    categories:["United States","Corporate patronage","Political blacklists","Brightnet","ShadowNet"]
  })
});

const addMatureSphereRelated = (slug,item) => {
  const related=window.deepArticles[slug]?.related;
  if(related && !related.some(existing=>existing.href===item.href)) related.push(item);
};

addMatureSphereRelated("colombia",{href:"colombian-national-compact.html",kicker:"Governing settlement",label:"Colombian National Compact"});
addMatureSphereRelated("panama",{href:"panamanian-military-regime.html",kicker:"Post-1968 government",label:"Panamanian Military Regime"});
addMatureSphereRelated("shadownet",{href:"brightnet.html",kicker:"Public counterpart",label:"Brightnet"});
addMatureSphereRelated("shadownet",{href:"corporate-political-blacklists.html",kicker:"Employment control",label:"Corporate Political Blacklists"});
addMatureSphereRelated("contractual-social-order",{href:"corporate-political-blacklists.html",kicker:"Exclusion mechanism",label:"Corporate Political Blacklists"});
addMatureSphereRelated("corporate-political-portfolios",{href:"corporate-political-blacklists.html",kicker:"Network discipline",label:"Corporate Political Blacklists"});
