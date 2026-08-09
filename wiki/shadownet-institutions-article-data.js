window.deepArticles = window.deepArticles || {};

const shadownetInstitutionSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Weltnetz identity and late American network culture"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — ShadowNet growth, 1990–2005"},
  {href:"../transcript.md",label:"Master Transcript — American ShadowNet culture, Turn 657"},
  {href:"../transcript.md",label:"Master Transcript — privacy industry, blacklists, doxing, and foreign ecosystems, Turn 658"},
  {href:"shadownet.html",label:"Fractured Peace Archive — ShadowNet"}
];

const shadownetInstitutionArticle = config => ({
  category:"Computing",
  eyebrow:`Weltnetz society · ${config.period}`,
  infoboxKicker:config.infoboxKicker,
  title:config.title,
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  sources:shadownetInstitutionSources,
  categories:[config.title,"ShadowNet","Weltnetz","Network culture",...(config.categories || [])]
});

Object.assign(window.deepArticles,{
  "privacy-router-industry":shadownetInstitutionArticle({
    title:"Privacy-router industry",period:"c. 1995–2005",infoboxKicker:"American communications industry",
    lead:"The privacy-router industry is the American hardware, software, relay, hosting, and access business that makes routine ShadowNet use possible. Its products separate knowledge of a connection among access providers, entry relays, onward relays, and destinations. They reduce linkability without promising perfect anonymity.",
    canon:"A mid-1990s hobbyist and small-firm origin, commercial privacy routers, relay rotation, local-log controls, hidden destination routing, later hosting and enterprise services, rapid consolidation, corporate adoption, and mass-market growth by the early 2000s are established. Company names, founders, product designations, prices, relay protocols, liability law, licensing, market shares, and the transcript's illustrative Blindgate Systems name remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Hardware clubs, independent Bridge programmers, small software houses, journalists, lawyers, political organizers, and religious minorities form the first commercial market in the middle 1990s. Early vendors present themselves as alternatives to telephone combines, closed computing platforms, corporate search, and identity-linked access services.</p>"},
      {id:"operation",title:"Operation",html:"<p>A household router encrypts traffic to an entry relay and can rotate among several entry points. It may discard local connection histories, combine several applications into one stream, delay transmissions, and return replies by a different route.</p><p>The access provider can still observe a connection to a privacy service. The design aims to prevent one participant from possessing the household identity, destination, contents, and complete route together.</p>"},
      {id:"limits",title:"Technical limits",html:"<p>No retail router can guarantee that a user is untraceable. Compromised endpoints, cooperating relays, traffic analysis, account payments, reused identifiers, malware, physical searches, and user mistakes can reconnect activity to a person.</p>"},
      {id:"customers",title:"Customers",html:"<p>Early customers include hobbyists, journalists, small software firms, professionals discussing employers, activists, lawyers, teenagers, churches, and private support groups. Corporate whistleblower systems and research departments later purchase related services.</p>"},
      {id:"services",title:"Commercial services",html:"<p>Successful firms add relay subscriptions, unlisted hosting, secure storage, prepaid access, pseudonymous payments, enterprise privacy, private drop boxes, and reputation services. Hardware margins become one part of a broader access business.</p>"},
      {id:"consolidation",title:"Consolidation",html:"<p>Rapid growth requires banking relationships, national carrier contracts, legal immunity, regulatory access, and political representation. Larger privacy firms buy small competitors and maintain lobbying organizations by the early 2000s.</p>"},
      {id:"corporations",title:"Corporate use",html:"<p>Large companies use privacy services for internal reporting, competitive intelligence, product research, deniable political work, and protected communication with outside specialists. Communications and hosting firms may support different rules because their commercial interests diverge.</p>"},
      {id:"2005",title:"Position by 2005",html:"<p>Privacy routing is an ordinary American consumer category. Employment-plan computers and monitored access services sustain a secondary market for separate household routers, removable boot media, and independent relay subscriptions.</p>"}
    ],
    related:[{href:"shadownet.html",kicker:"Service environment",label:"ShadowNet"},{href:"signed-handles.html",kicker:"Identity practice",label:"Signed Handles"},{href:"brightnet.html",kicker:"Public counterpart",label:"Brightnet"},{href:"bridge-operating-environment.html",kicker:"Common client platform",label:"Bridge"},{href:"corporate-political-blacklists.html",kicker:"Privacy incentive",label:"Corporate Political Blacklists"}],
    facts:[["Origins","Mid-1990s"],["Principal market","United States"],["Core products","Routers, relay access, hosting, and storage"],["Primary objective","Separate route knowledge among institutions"],["Perfect anonymity","No"],["Early users","Hobbyists, journalists, professionals, activists, and small firms"],["Later users","Households and corporations"],["Named leading firms","Open"]],
    categories:["Privacy technology","American computing industry"]
  }),

  "signed-handles":shadownetInstitutionArticle({
    title:"Signed handles",period:"c. 1998–2005",infoboxKicker:"Pseudonymous identity practice",
    lead:"Signed handles are persistent ShadowNet pseudonyms authenticated by a user's private digital key. A signature shows that a message or file came from the same handle that signed earlier material. It does not reveal the user's civil name, employer, household, or place of residence.",
    canon:"Stable cryptographic handles, private-key continuity, portable pseudonymous reputation, use in contracts and moderation, the distinction between continuity and civil identification, clean and burned handles, and broad adoption around 1998–2000 are established. Algorithms, certificate formats, key lengths, issuers, recovery procedures, legal recognition, service interoperability, and leading directories remain open.",
    sections:[
      {id:"principle",title:"Continuity without disclosure",html:"<p>A valid signature establishes continuity with earlier messages signed by the same key. Community members can recognize a long-serving moderator, programmer, merchant, writer, or political participant without learning the identity used for taxes, banking, or employment.</p>"},
      {id:"keys",title:"Keys and signatures",html:"<p>The user retains a private key and distributes the corresponding public information through forums, address books, directories, or previous signed messages. The source record does not prescribe one cryptographic standard or central issuing authority.</p>"},
      {id:"reputation",title:"Reputation",html:"<p>Posting history, completed work, recommendations, moderation decisions, community votes, and transaction records accumulate around the handle. A stable pseudonym can carry professional or commercial value even when it cannot be entered in a civil register.</p>"},
      {id:"uses",title:"Uses",html:"<p>Signed handles support software development, technical collaboration, fiction and games, religious discussion, support groups, political communities, international correspondence, moderation, and small-scale commerce.</p>"},
      {id:"contracts",title:"Agreements and commerce",html:"<p>Participants can sign project contributions, delivery acknowledgments, escrow instructions, community rules, and private bargains. Enforcement often depends upon reputation, service operators, or an intermediary because the civil party behind the handle may remain unknown.</p>"},
      {id:"life-cycle",title:"Handle life cycle",html:"<p>A <em>clean handle</em> has never been connected publicly to a civil identity. Exposure or key compromise can <em>burn</em> the handle, forcing its abandonment. Users may sign a transition notice to a new identity, but doing so also transfers the old reputation and risks carrying the compromise forward.</p>"},
      {id:"security",title:"Security practices",html:"<p>Users separate handles by subject, avoid reusing Brightnet passwords, protect key copies, and limit biographical detail. Stylometry, timing, personal anecdotes, payment trails, and compromised devices can defeat careful key management.</p>"},
      {id:"status",title:"Social and legal status",html:"<p>By the early 2000s a respected handle may be treated as a real social person inside a community. Civil courts, banks, employers, and governments still require identified parties for many obligations. The boundary between pseudonymous reputation and recognized legal identity remains unsettled.</p>"}
    ],
    related:[{href:"shadownet.html",kicker:"Network culture",label:"ShadowNet"},{href:"privacy-router-industry.html",kicker:"Access infrastructure",label:"Privacy-Router Industry"},{href:"doxing.html",kicker:"Identity exposure",label:"Doxing"},{href:"brightnet.html",kicker:"Civil identity layer",label:"Brightnet"},{href:"weltnetz.html",kicker:"Underlying transport",label:"Weltnetz"}],
    facts:[["Broad adoption","c. 1998–2000"],["Identity type","Persistent pseudonym"],["Proof supplied","Continuity with the same signing key"],["Civil identity supplied","No"],["Primary asset","Portable reputation"],["Common uses","Publishing, collaboration, moderation, and commerce"],["Compromised identity","Burned handle"],["Common technical standard","Open"]],
    categories:["Pseudonymity","Cryptographic identity"]
  }),

  "doxing":shadownetInstitutionArticle({
    title:"Doxing",period:"1990s–2000s",infoboxKicker:"Network identity exposure",
    lead:"Doxing is the collection and publication of information that connects a pseudonymous network identity to a civil person, household, employer, or institutional record. The practice becomes a major American network taboo because one disclosure can join previously separated professional, political, financial, and private identities.",
    canon:"The term's American emergence by the early or middle 1990s, derivation from documents or docs, exposure of civil and institutional identifiers, severe employment and political consequences, identity collapse, community bans, corporate and political uses, and international spread are established. The first recorded use, famous early incidents, criminal statutes, civil remedies, platform rules, investigative techniques, and casualty totals remain open.",
    sections:[
      {id:"term",title:"Terminology",html:"<p>The word develops from <em>documents</em> or <em>docs</em> in American hacker and bulletin-board speech. It spreads beyond technical communities as stable pseudonyms acquire political, professional, and commercial value.</p>"},
      {id:"information",title:"Information exposed",html:"<p>A disclosure may include a legal name, home address, employer, relatives, school, insurer, professional license, political donations, corporate affiliations, telephone account, or Brightnet profile. Several harmless records can become dangerous when assembled in one place.</p>"},
      {id:"collapse",title:"Identity collapse",html:"<p>American users describe the joining of formerly compartmented identities as identity collapse. A private political history becomes searchable beside an employment record, credit relationship, household address, and family network.</p>"},
      {id:"targets",title:"Targets",html:"<p>Targets include dissidents, whistleblowers, moderators, programmers, corporate officers, officials, journalists, activists, and participants in criminal or extremist services. Public sympathy depends heavily upon the target and the information disclosed.</p>"},
      {id:"consequences",title:"Consequences",html:"<p>Exposure can cause dismissal, loss of promotion, adverse insurance or credit decisions, removal from a patron network, family harassment, investigation, or physical danger. A corporate officer or politician may also lose authority after being linked to apparently independent campaigns.</p>"},
      {id:"rules",title:"Community rules",html:"<p>Many ShadowNet communities prohibit identity exposure even when they tolerate hostile speech, piracy, or ideological conflict. Operators may expel an offender, revoke reputation, warn other boards, or burn compromised directories.</p>"},
      {id:"investigation",title:"Investigation and misuse",html:"<p>Doxers combine public records, Brightnet searches, writing style, message timing, reused handles, payment trails, acquaintances, and compromised devices. False attribution and selective editing can direct punishment toward an uninvolved person.</p>"},
      {id:"response",title:"Responses",html:"<p>Users adopt separate handles, privacy routing, limited biographical disclosure, and compartmented payments. Victims turn to employers, hosts, data brokers, courts, private investigators, and the <a href='identity-cleaning-industry.html'>identity-cleaning industry</a> with uneven results.</p>"}
    ],
    related:[{href:"signed-handles.html",kicker:"Exposed identity",label:"Signed Handles"},{href:"identity-cleaning-industry.html",kicker:"Commercial response",label:"Identity-Cleaning Industry"},{href:"corporate-political-blacklists.html",kicker:"Institutional consequence",label:"Corporate Political Blacklists"},{href:"shadownet.html",kicker:"Principal setting",label:"ShadowNet"},{href:"brightnet.html",kicker:"Civil record layer",label:"Brightnet"}],
    facts:[["Emergence","Early to middle 1990s"],["Probable derivation","Documents / docs"],["Principal act","Linking a pseudonym to civil or institutional identity"],["Characteristic harm","Identity collapse"],["Common targets","Private users, professionals, officials, and firms"],["Common community rule","Prohibited"],["False attribution risk","High"],["First recorded incident","Open"]],
    categories:["Digital identity","Privacy"]
  }),

  "identity-cleaning-industry":shadownetInstitutionArticle({
    title:"Identity-cleaning industry",period:"late 1990s–2000s",infoboxKicker:"Reputation and readmission services",
    lead:"The identity-cleaning industry consists of American firms that suppress indexed records, negotiate removals, rebuild professional profiles, and seek readmission to corporate employment and service networks after doxing or other damaging network exposure. No firm can erase every distributed ShadowNet copy.",
    canon:"Commercial identity cleaning, exaggerated deletion claims, removal from major indexes and hosts, search flooding, data-broker negotiation, replacement credentials, corporate-risk-list reconciliation, and the industry's practical role in readmission are established. Company names, service tiers, fees, certificates, statutes, success rates, professional licensing, and formal appeal rights remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The industry grows as Brightnet profiles become important to employment, banking, insurance, housing, and professional membership. Doxing and shared corporate risk services create clients whose principal problem is institutional exclusion.</p>"},
      {id:"claims",title:"Advertising claims",html:"<p>Firms commonly promise to clean or erase a customer's network identity. Distributed servers, private archives, foreign relays, removable media, and repeated republication make complete deletion impossible once material has spread widely.</p>"},
      {id:"indexed",title:"Indexed services",html:"<p>Cleaners can request removal from commercial hosts, correct public profiles, change directory associations, negotiate with data brokers, and push harmless or contradictory material above damaging records in major searches.</p>"},
      {id:"credentials",title:"Credentials and accounts",html:"<p>Services help replace compromised professional profiles, close exposed addresses, create new provider credentials, separate household accounts, and document that an old handle no longer controls current employment activity.</p>"},
      {id:"readmission",title:"Corporate readmission",html:"<p>The most valuable work occurs inside cooperating patron networks. A cleaner can ask employers, insurers, background services, and affiliates to remove an adverse notation or classify the matter as settled.</p>"},
      {id:"statements",title:"Reconciliation statements",html:"<p>Some clients receive a private statement recording separation from the compromised identity and reduced public-association risk. Terminology, legal effect, and acceptance differ among networks; no universal certificate has been established.</p>"},
      {id:"clients",title:"Clients",html:"<p>Clients include exposed professionals, students entering corporate employment, dismissed workers, political staff, executives, public figures, and people falsely connected to another user's handle. Wealth affects the speed and breadth of available intervention.</p>"},
      {id:"criticism",title:"Criticism and limits",html:"<p>Critics describe the business as expensive permission to re-enter systems that helped create the injury. Firms answer that negotiated correction and restored access remain useful even when old copies survive. Fraud, repeated exposure, and uncooperative foreign hosts limit results.</p>"}
    ],
    related:[{href:"doxing.html",kicker:"Principal trigger",label:"Doxing"},{href:"corporate-political-blacklists.html",kicker:"Readmission target",label:"Corporate Political Blacklists"},{href:"brightnet.html",kicker:"Search and credential layer",label:"Brightnet"},{href:"shadownet.html",kicker:"Distributed record environment",label:"ShadowNet"},{href:"contractual-social-order.html",kicker:"Material stakes",label:"Contractual Social Order"}],
    facts:[["Growth period","Late 1990s–2000s"],["Principal market","United States"],["Advertised service","Network erasure"],["Technically complete erasure","Impossible after wide distribution"],["Practical services","Suppression, correction, negotiation, and new credentials"],["Principal economic value","Corporate readmission"],["Universal reconciliation certificate","No"],["Leading firms and prices","Open"]],
    categories:["Reputation management","Digital identity","American corporate services"]
  }),

  "foreign-shadownet-ecosystems":shadownetInstitutionArticle({
    title:"Foreign ShadowNet ecosystems",period:"late 1990s–2000s",infoboxKicker:"Comparative network culture",
    lead:"Foreign ShadowNet ecosystems are the German, Japanese, Commonwealth, Latin, and other local-language pseudonymous service cultures that develop after the American overlay becomes widely accessible. They use the common Weltnetz transport layer while reflecting different laws, provider practices, search systems, and attitudes toward anonymous publication.",
    canon:"American precedence, German Schattennetz terminology and stigma, German containment and selective enforcement, Japanese provider identification with social pseudonymity, Britain's stronger whistleblower tradition, slower and uneven Latin adoption, and continuing cross-border access are established. National service names outside Germany, providers, statutes, adoption rates, enforcement agencies, celebrated cases, and exact chronologies remain open.",
    sections:[
      {id:"spread",title:"International spread",html:"<p>American personal computing, independent software, cheap hosting, and competing providers produce the first large ecosystem. Foreign users initially enter English-language services, then create local directories, relay guides, moderation customs, and archives.</p>"},
      {id:"germany",title:"Germany",html:"<p>The German <em>Schattennetz</em> attracts programmers, students, dissident Christians, prohibited historians, foreign workers, eastern settlers, political eccentrics, and black-market software traders. Public culture treats unregistered publication and anonymous hosting as presumptively suspect.</p>"},
      {id:"german-policy",title:"German policy",html:"<p>Authorities combine public stigma, provider records, infiltration, search exclusion, professional consequences, and selective prosecution. Complete prohibition would remove an intelligence source and drive users toward smaller disciplined networks, so containment remains preferable.</p>"},
      {id:"japan",title:"Japan",html:"<p>Japanese providers commonly know the household, school, employer, bank, or subscriber behind an account while other users see a pseudonym. Game, animation, fan-publishing, workplace, student, and regional communities use this compartment. Zaibatsu research and intelligence offices monitor and participate in them.</p>"},
      {id:"britain",title:"Britain and the Commonwealth",html:"<p>Journalists, trade unions, universities, churches, local parties, and Commonwealth dissidents use unlisted services. Anonymous-source traditions and arguments over institutional accountability give investigative and whistleblower networks greater public legitimacy than in Germany.</p>"},
      {id:"latin",title:"Latin bloc",html:"<p>Occitania and northern Italy develop active technical and artistic communities. Spain and Portugal apply stricter licensing and moral regulation. Church and family organizations object to sexual material, gambling, anonymous defamation, and isolated digital life, while firms and universities require international connectivity.</p>"},
      {id:"comparison",title:"Comparison",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Typical public model</th><th>Shadow practice</th></tr></thead><tbody><tr><td>United States</td><td>Competing identity-linked commercial services</td><td>Relays and deliberate identity separation</td></tr><tr><td>Germany</td><td>Certified and attributable publication</td><td>Stigmatized, monitored Schattennetz</td></tr><tr><td>Japan</td><td>Provider-known household or subscriber</td><td>Social pseudonymity</td></tr><tr><td>Britain</td><td>Public-service and commercial pluralism</td><td>Investigative and associational networks</td></tr><tr><td>Latin bloc</td><td>Licensed national services</td><td>Uneven technical, religious, labor, and artistic communities</td></tr></tbody></table></div>"},
      {id:"cross-border",title:"Cross-border services",html:"<p>Users reach foreign hosts for software, political material, archives, pornography, games, and private correspondence. States control discovery, licensing, professional consequences, and domestic providers more reliably than international transmission itself.</p>"}
    ],
    related:[{href:"shadownet.html",kicker:"American origin",label:"ShadowNet"},{href:"weltnetz.html",kicker:"Common transport",label:"Weltnetz"},{href:"matthias-falkenberg.html",kicker:"German network architect",label:"Matthias Falkenberg"},{href:"japanese-imperial-information-network.html",kicker:"Japanese service ecology",label:"Japanese Imperial Information Network"},{href:"commonwealth-packet-service.html",kicker:"Commonwealth history",label:"Commonwealth Packet Service"},{href:"latin-bloc.html",kicker:"Latin political setting",label:"Latin Bloc"}],
    facts:[["Initial large ecosystem","United States"],["German term","Schattennetz"],["German policy","Stigma, monitoring, and selective enforcement"],["Japanese model","Provider identification with social pseudonymity"],["British distinction","Investigative and whistleblower legitimacy"],["Latin adoption","Slower and uneven"],["Physical transport","Weltnetz"],["Detailed national chronologies","Open"]],
    categories:["Comparative computing","Germany","Japan","British Commonwealth","Latin Bloc"]
  })
});

const addShadownetInstitutionRelated = (slug,item) => {
  const related=window.deepArticles[slug]?.related;
  if(related && !related.some(existing=>existing.href===item.href)) related.push(item);
};

addShadownetInstitutionRelated("shadownet",{href:"privacy-router-industry.html",kicker:"Access industry",label:"Privacy-Router Industry"});
addShadownetInstitutionRelated("shadownet",{href:"signed-handles.html",kicker:"Pseudonymous identity",label:"Signed Handles"});
addShadownetInstitutionRelated("shadownet",{href:"foreign-shadownet-ecosystems.html",kicker:"International variants",label:"Foreign ShadowNet Ecosystems"});
addShadownetInstitutionRelated("brightnet",{href:"privacy-router-industry.html",kicker:"Route separation",label:"Privacy-Router Industry"});
addShadownetInstitutionRelated("brightnet",{href:"doxing.html",kicker:"Identity exposure",label:"Doxing"});
addShadownetInstitutionRelated("corporate-political-blacklists",{href:"doxing.html",kicker:"Identity exposure",label:"Doxing"});
addShadownetInstitutionRelated("corporate-political-blacklists",{href:"identity-cleaning-industry.html",kicker:"Readmission services",label:"Identity-Cleaning Industry"});
