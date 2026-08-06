window.deepArticles = window.deepArticles || {};

const catholicInstitutionSources = [
  {href:"../catholicChurchReference%20-%20AltWWII.md",label:"Catholic Church Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline"},
  {href:"../transcript.md",label:"Master Transcript — Catholic Church development"}
];

const catholicInstitutionRelated = [
  {href:"catholic-church.html",kicker:"Institutional overview",label:"Catholic Church"},
  {href:"council-of-christ-the-king.html",kicker:"1962–1965",label:"Council of Christ the King"},
  {href:"ecclesial-patrimony.html",kicker:"Conciliar doctrine",label:"Ecclesial Patrimony"},
  {href:"apostolic-communion.html",kicker:"Eastern settlement",label:"Apostolic Communion"},
  {href:"religious-immunity.html",kicker:"Church and state",label:"Religious Immunity"},
  {href:"roman-rite-settlement.html",kicker:"Worship",label:"Roman Rite Settlement"}
];

const catholicInstitutionArticle = config => ({
  category:"Catholic Church",
  eyebrow:"Postwar Catholic institutions and doctrine",
  infoboxKicker:"Catholic institutional history",
  ...config,
  related:[...(config.related || []),...catholicInstitutionRelated.filter(item=>item.href!==config.slug+".html"&&!(config.related||[]).some(other=>other.href===item.href))],
  sources:config.sources || catholicInstitutionSources,
  categories:config.categories || ["Catholic Church","Religious history","Postwar institutions"],
  facts:config.facts || []
});

Object.assign(window.deepArticles, {
  "four-clandestine-catholic-currents": catholicInstitutionArticle({
    slug:"four-clandestine-catholic-currents",title:"Four clandestine currents in the Catholic Church",eyebrow:"Personnel networks · institutional capture · 1941–1985",infoboxKicker:"Decentralized influence networks",
    lead:"The four clandestine currents were decentralized Catholic influence networks that used long-term personnel placement, seminary formation, publishing, and administrative interpretation to bend the Church toward communist social politics or national-state control. They shared a method sometimes described as the Vendita model, but never formed one centrally directed conspiracy.",
    canon:"The four currents, their divergent postwar paths, and Switzerland's role as conduit are established. Membership rolls and a single coordinating command are not established.",
    sections:[
      {id:"method",title:"The Vendita method",html:"<p>The currents sought influence through patient placement rather than public schism. Seminaries, diocesan offices, publishing houses, financial channels, diplomatic services, appointments, translations, and the local reception of Roman documents mattered more than manifestos.</p><p>Similarity of method did not imply common doctrine or continuous coordination.</p>"},
      {id:"communist",title:"Communist-derived current",html:"<p>The communist-derived network lost funding, discipline, and strategic confidence when the Soviet Union collapsed. Survivors dispersed into Britain, the United States, northern France, and parts of Latin America.</p><p>They emphasized class politics, secularized social action, and a weak proto-liberation theology, but never rebuilt the scale that Soviet sponsorship might have sustained.</p>"},
      {id:"german",title:"German nationalizing current",html:"<p>The German current proved the most durable local network. It translated Catholic universality into nation, race, obedience, and a claimed German historical vocation while avoiding language openly identifying it with Hitler or the SS.</p><p>By 1980 it influenced many diocesan bureaucracies, seminaries, and bishops without controlling Rome or the whole German episcopate.</p>"},
      {id:"italian",title:"Italian imperial-sacral current",html:"<p>The Italian current pursued access to curial administration, finance, appointments, concordats, and the symbolism of a Catholic empire. Fascist proximity offered opportunity but never safe sponsorship.</p><p>Its political shelter weakened under the personally devout Umberto II, although bureaucratic access allowed fragments of the network to endure.</p>"},
      {id:"spanish",title:"Spanish current and the orthodoxy trap",html:"<p>The Spanish current initially sought a nationalized, hyper-orthodox Catholic system. Scrutiny after <em>Humani Generis</em>, Franco's anti-Masonic campaigns, and fear of exposure forced it to defend itself through increasingly exact Roman orthodoxy.</p><p>Its pupils came to believe the doctrine their teachers had used as camouflage. By the 1960s it had become the Spanish Roman school rather than a hostile infiltration bloc.</p>"},
      {id:"switzerland",title:"The Swiss conduit",html:"<p>Neutral Swiss banking, education, publishing, travel, and archives connected people divided by hostile blocs. Switzerland was a refuge and communications corridor, not the headquarters of a unified secret directorate.</p>"},
      {id:"rome",title:"Roman surveillance and response",html:"<p>Pius XII and his successors treated national capture as a danger distinct from ordinary doctrinal dissent. Roman officials monitored appointments, seminary cultures, translations, finances, and the selective suppression of papal texts.</p><p>The council's defense of episcopal responsibility complicated the task: local authority had to be protected without becoming immunity for captured local administrations.</p>"},
      {id:"1985",title:"Condition in 1985",html:"<p>By 1985 none of the four currents governed the universal Church. Their remnants survived as regional habits of appointment, administration, teaching, and interpretation.</p><p>The German network remained the most consequential; the Spanish network had reversed itself; the Italian current persisted diffusely; and the communist-derived current remained fragmented.</p>"}
    ],
    related:[{href:"swiss-catholic-conduit.html",kicker:"Neutral infrastructure",label:"Swiss Catholic Conduit"},{href:"catholicism-in-german-europe.html",kicker:"Strongest surviving current",label:"Catholicism in German Europe"}],
    facts:[["Common method","Long-term personnel placement"],["Unified command","None established"],["Most durable current","German nationalizing"],["Dispersed current","Communist-derived"],["Bureaucratic current","Italian imperial-sacral"],["Self-reversing current","Spanish"],["Principal conduit","Switzerland"],["Status in 1985","Regional networks, not universal control"]]
  }),

  "swiss-catholic-conduit": catholicInstitutionArticle({
    slug:"swiss-catholic-conduit",title:"Swiss Catholic conduit",eyebrow:"Neutral networks · finance · publishing · travel",infoboxKicker:"Cross-bloc religious infrastructure",
    lead:"The Swiss Catholic conduit was the loose complex of financial, educational, publishing, archival, and travel routes that kept Catholic institutions in communication across the fractured postwar world. It enabled legitimate Church government and clandestine political currents alike, without constituting a single organization.",
    canon:"Switzerland's role as conduit, refuge, and archive is established. A single Swiss command center directing the clandestine currents is explicitly rejected.",
    sections:[
      {id:"neutrality",title:"Neutral geography",html:"<p>Swiss neutrality placed Catholic institutions between German Europe, the Latin states, the Commonwealth, and Atlantic America. Clergy and documents that could not move directly between hostile systems often passed through Swiss territory.</p>"},
      {id:"finance",title:"Financial continuity",html:"<p>Banks, charitable accounts, order houses, and denominational funds preserved payments across currency and sanctions barriers. The same opacity that protected dioceses and missions could shelter patronage networks.</p>"},
      {id:"education",title:"Schools and formation",html:"<p>Universities, seminaries, retreat houses, and scholarly societies gave displaced clergy and lay specialists places to meet without formally entering a rival bloc's political system.</p><p>Contacts made in these settings later shaped appointments, translations, and publishing programs.</p>"},
      {id:"publishing",title:"Publishing and translation",html:"<p>Swiss presses and distributors carried theological journals, episcopal statements, council drafts, and polemical literature across censored borders. Translation choices could either preserve Roman meaning or adapt it to a national political vocabulary.</p>"},
      {id:"travel",title:"Travel and diplomatic passage",html:"<p>Religious passports, medical visits, conferences, and charitable delegations provided lawful reasons for cross-bloc movement. The Vatican used these channels to maintain contact where ordinary nuncial reporting was weak.</p>"},
      {id:"archive",title:"Refuge and archive",html:"<p>Personal papers, diocesan records, and institutional correspondence were deposited in Switzerland when local seizure appeared likely. These archives later became important to investigations of clandestine influence.</p>"},
      {id:"ambiguity",title:"Institutional ambiguity",html:"<p>The conduit served incompatible purposes. It protected universal Catholic government from national borders, but also allowed decentralized currents to maintain relationships that public authorities could not easily trace.</p>"},
      {id:"myth",title:"The headquarters myth",html:"<p>Later polemics described Switzerland as the headquarters of a master conspiracy. Church investigators rejected that model: the evidence showed overlapping routes, refuges, and intermediaries, not a single chain of command.</p>"}
    ],
    related:[{href:"four-clandestine-catholic-currents.html",kicker:"Networks using the conduit",label:"Four Clandestine Currents"},{href:"vatican-evidence-discipline.html",kicker:"Investigative method",label:"Vatican Evidentiary Discipline"}],
    facts:[["Primary role","Conduit, refuge, and archive"],["Political status","Neutral"],["Main functions","Finance, education, publishing, travel"],["Users","Church institutions and clandestine currents"],["Central headquarters","No"],["Strategic value","Cross-bloc continuity"],["Principal risk","Opaque patronage"],["Historical legacy","Indispensable but ambiguous"]]
  }),

  "consecration-of-russia-1946": catholicInstitutionArticle({
    slug:"consecration-of-russia-1946",title:"Consecration of Russia (1946)",eyebrow:"Pius XII · Fatima · Eastern Christianity",infoboxKicker:"Papal religious act",
    lead:"The consecration of Russia was performed by Pope Pius XII in 1946 amid the collapse of Soviet power and the establishment of German rule across much of the former union. Catholic observers later associated the act with an unexpected Orthodox revival, although the consecration was scarcely communicated inside the occupied eastern territories.",
    canon:"The consecration and the subsequent Orthodox revival are established. In-world actors cannot prove a direct causal mechanism.",
    sections:[
      {id:"fatima",title:"Fatima background",html:"<p>The act drew upon the 1917 Fatima message and its call concerning Russia. The Third Secret retained its historical wording because it recorded the earlier revelation rather than a post-divergence prophecy.</p>"},
      {id:"context",title:"The world of 1946",html:"<p>The Soviet state had collapsed, German administrations ruled vast Russian and Caucasian territories, and reliable Catholic communication eastward was poor. Pius XII was simultaneously reconstructing dioceses and preparing the Church for an Axis-dominated peace.</p>"},
      {id:"act",title:"The consecration",html:"<p>Pius XII performed a specific consecration of Russia in 1946. It was an ecclesial act rather than diplomatic recognition of a government, border, or imperial claim.</p>"},
      {id:"communication",title:"Limited transmission",html:"<p>The prayer and its interpretation were not broadly circulated inside the Reichskommissariats. German controls, broken communications, and the weakness of Catholic structures in Russian lands limited direct reception.</p>"},
      {id:"revival",title:"The revival that followed",html:"<p>Orthodox worship, monastic life, local memory, and clerical networks began recovering across Russian lands and parts of Caucasia. The revival was uneven and remained exposed to local administrative pressure.</p>"},
      {id:"interpretation",title:"Catholic interpretation",html:"<p>Rome treated the coincidence as a providential sign requiring attention to the Eastern apostolic churches. It did not claim that Orthodoxy had become Latin or that full communion already existed.</p>"},
      {id:"conclave",title:"Influence on the 1958 conclave",html:"<p>The revival helped persuade cardinals that an Eastern pontiff might be suited to the age. It contributed to the narrow election of Armenian Catholic patriarch Gregorio Pietro Agagianian as Gregory XVII.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The consecration became the spiritual prehistory of the Council of Christ the King's Eastern settlement. Its importance lay less in public politics than in Rome's conviction that the schism was a wound Providence had not abandoned.</p>"}
    ],
    related:[{href:"orthodox-revival.html",kicker:"Postwar consequence",label:"Orthodox Revival"},{href:"gregory-xvii.html",kicker:"Eastern papacy",label:"Pope Gregory XVII"}],
    facts:[["Date","1946"],["Pontiff","Pius XII"],["Spiritual background","Fatima"],["Territorial audience","Russia"],["Public reach in the east","Limited"],["Associated development","Orthodox revival"],["Proof of causation","Unavailable in-world"],["Long-term effect","Eastern question elevated in Rome"]]
  }),

  "orthodox-revival": catholicInstitutionArticle({
    slug:"orthodox-revival",title:"Postwar Orthodox revival",eyebrow:"Russia · Caucasia · Eastern apostolic churches",infoboxKicker:"Religious and institutional revival",
    lead:"The postwar Orthodox revival was the unexpected recovery of Christian worship, clergy, monasteries, and communal identity across Russian lands and parts of Caucasia after the Soviet collapse. It unfolded under occupation and client administrations and became the principal religious background to Catholic–Orthodox rapprochement.",
    canon:"The revival and its broad geography are established. Its local intensity, chronology, and relationship to the 1946 consecration vary by region and interpretation.",
    sections:[
      {id:"collapse",title:"After Soviet collapse",html:"<p>The disappearance of Soviet central power ended one system of organized repression but did not create religious freedom. German and collaborationist authorities alternately permitted, managed, or restricted Orthodox institutions.</p>"},
      {id:"local",title:"Parish and household recovery",html:"<p>Surviving clergy, lay custodians, family devotion, reopened buildings, and recovered objects allowed religious life to return before stable hierarchies existed. Revival was often local before it became institutional.</p>"},
      {id:"monastic",title:"Monasteries and formation",html:"<p>Monastic houses and informal schools restored continuity in prayer, clerical training, and manuscript culture. Their position depended heavily on the policies of individual occupation administrations.</p>"},
      {id:"caucasia",title:"Caucasian and Armenian dimensions",html:"<p>Armenian, Georgian, Russian, and other Eastern communities gave the revival several national and ritual centers. Their survival made it impossible to describe the East as one uniform Russian church.</p>"},
      {id:"rome",title:"Roman response",html:"<p>The Vatican interpreted the revival as a sign that the Eastern churches remained living apostolic communities. It rejected both indifference to the schism and a policy of absorbing the East through Latinization.</p>"},
      {id:"gregory",title:"Gregory XVII",html:"<p>Gregory XVII's Armenian formation gave the revival a place at the center of papal government. Eastern, missionary, and Oriental offices gained stature without purging the Roman Curia.</p>"},
      {id:"council",title:"Conciliar settlement",html:"<p>The Council of Christ the King recognized Orthodox sacraments and apostolic succession, protected inherited rites, accepted the original Greek Creed without the <em>Filioque</em>, and established standing commissions.</p>"},
      {id:"1985",title:"Incomplete communion in 1985",html:"<p>By 1985 Catholic–Orthodox relations were close and sacramentally serious but short of reunion. Papal jurisdiction, later definitions, overlapping dioceses, and the Eastern Catholic question remained unresolved.</p>"}
    ],
    related:[{href:"consecration-of-russia-1946.html",kicker:"Spiritual prehistory",label:"Consecration of Russia"},{href:"apostolic-communion.html",kicker:"Conciliar settlement",label:"Apostolic Communion"}],
    facts:[["Beginning","After Soviet collapse"],["Core regions","Russian lands and Caucasia"],["Political environment","German occupation and client rule"],["Catholic interpretation","Providential Eastern opening"],["Papal champion","Gregory XVII"],["Council recognition","Valid sacraments and succession"],["Latinization","Rejected"],["Status in 1985","Close but incomplete communion"]]
  }),

  "ecclesial-patrimony": catholicInstitutionArticle({
    slug:"ecclesial-patrimony",title:"Ecclesial patrimony",eyebrow:"Council of Christ the King · culture · rite · inheritance",infoboxKicker:"Conciliar constitutional doctrine",
    lead:"Ecclesial patrimony is the Council of Christ the King's doctrine that peoples receive real cultural, familial, linguistic, historical, and ritual inheritances which the Church should preserve without treating them as racial destiny or complete definitions of the person.",
    canon:"The doctrine, its protection of inherited rites, and its limits against racialism and national capture are established.",
    sections:[
      {id:"definition",title:"Definition",html:"<p>Patrimony names an inheritance received through family, language, history, community, and worship. It is a gift and vocation rather than a self-created preference.</p>"},
      {id:"limits",title:"An inheritance that is not total",html:"<p>No patrimony abolishes free will, conversion, natural law, sacramental communion, or the unity of humanity in Christ. Inherited identity cannot excuse injustice or make one people the final measure of truth.</p>"},
      {id:"rites",title:"Patrimonial rites",html:"<p>Greeks, Russians, Copts, Armenians, Syriacs, Latins, and other apostolic peoples ordinarily belong within their inherited churches and rites. The council protected those rites against compulsory Latinization.</p>"},
      {id:"person",title:"Person and community",html:"<p>The doctrine rejects both atomized individualism and collective absorption. A person is formed by inherited communities but remains morally responsible and capable of conversion.</p>"},
      {id:"racialism",title:"Answer to racialism",html:"<p>Ecclesial patrimony acknowledges that inherited difference is real without converting descent into a closed hierarchy of human worth. It directly contradicts racial destiny and coerced ethnic transformation.</p>"},
      {id:"east",title:"Eastern constitutional effect",html:"<p>Patrimony grounded restored authority for Eastern patriarchs and synods over liturgy, clergy discipline, canon law, and internal government while preserving universal communion with Rome.</p>"},
      {id:"mission",title:"Mission and conversion",html:"<p>Respect for patrimony did not end mission. Evangelization had to address peoples without erasing legitimate inheritance or confusing conversion with adoption of Latin nationality and custom.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>By 1985 the doctrine had become a durable Catholic vocabulary for opposing German racialism, Japanese civilizational hierarchy, and Latin national capture while defending real historical communities against homogenization.</p>"}
    ],
    related:[{href:"apostolic-communion.html",kicker:"Eastern application",label:"Apostolic Communion"},{href:"catholic-social-order.html",kicker:"Political application",label:"Christian Social Order"}],
    facts:[["Council","Council of Christ the King"],["Subject","Cultural, familial, linguistic, historical, and ritual inheritance"],["Moral status","Gift and vocation"],["Absolute identity","Rejected"],["Compulsory Latinization","Rejected"],["Free conversion","Preserved"],["Institutional application","Eastern patriarchal government"],["Principal political contrast","Racial destiny"]]
  }),

  "apostolic-communion": catholicInstitutionArticle({
    slug:"apostolic-communion",title:"Catholic–Orthodox apostolic communion",eyebrow:"Sacraments · patriarchs · near-reunion",infoboxKicker:"Eastern conciliar settlement",
    lead:"Apostolic communion was the Council of Christ the King's settlement for Catholic relations with the Orthodox and Oriental apostolic churches. It recognized sacramental and episcopal realities across the schism, protected Eastern government and rites, and permitted limited sharing without declaring full reunion.",
    canon:"Recognition of sacraments, apostolic succession, Eastern rites, patriarchal authority, commissions, and the remaining obstacles to reunion are established.",
    sections:[
      {id:"partners",title:"Apostolic partners",html:"<p>Russia, Greece, Serbia, Armenia, the Syriac churches, the Copts, Ethiopia, and other Eastern bodies entered the settlement as living apostolic communities, not merely cultural associations.</p>"},
      {id:"sacraments",title:"Sacraments and succession",html:"<p>The council recognized Orthodox sacraments and apostolic succession as valid. This supplied the basis for limited sacramental sharing in cases of grave pastoral need or lack of access.</p>"},
      {id:"creed",title:"The Creed and the Filioque",html:"<p>The original Greek Creed without the <em>Filioque</em> was permitted, while the Latin formula remained legitimate. Difference of expression was not treated automatically as denial of the shared faith.</p>"},
      {id:"government",title:"Patriarchs and synods",html:"<p>Eastern Catholic patriarchs and synods recovered meaningful authority over liturgy, clergy discipline, canon law, and internal government. Rome remained the visible center and final guardian of universal communion.</p>"},
      {id:"latinization",title:"End of compulsory Latinization",html:"<p>Eastern rites were to be restored and protected rather than simplified into Roman forms. Missionary or administrative convenience no longer justified treating Latin practice as the measure of Catholicity.</p>"},
      {id:"commissions",title:"Standing commissions",html:"<p>Permanent theological and canonical commissions replaced episodic courtesy contacts. They addressed jurisdiction, sacramental practice, mixed communities, overlapping dioceses, and reception of disputed definitions.</p>"},
      {id:"obstacles",title:"Why reunion failed",html:"<p>Universal papal jurisdiction, post-schism definitions, overlapping dioceses, and the Eastern Catholic question prevented full reunion. Neither side was asked to pretend that these differences had ceased to exist.</p>"},
      {id:"1985",title:"One settlement short of reunion",html:"<p>By 1985 estrangement had become incomplete apostolic communion: cooperation and limited sacramental practice were normal, but full canonical unity had not been achieved.</p>"}
    ],
    related:[{href:"orthodox-revival.html",kicker:"Historical background",label:"Postwar Orthodox Revival"},{href:"bounded-papal-authority.html",kicker:"Constitutional question",label:"Bounded Papal Authority"}],
    facts:[["Council years","1962–1965"],["Sacraments","Recognized as valid"],["Apostolic succession","Recognized"],["Greek Creed","Permitted without Filioque"],["Latinization","Rejected"],["Patriarchal authority","Restored and protected"],["Full reunion","Not achieved"],["Status in 1985","Incomplete apostolic communion"]]
  }),

  "bounded-papal-authority": catholicInstitutionArticle({
    slug:"bounded-papal-authority",title:"Bounded papal authority",eyebrow:"Completion of Vatican I · pope · bishops · patriarchs",infoboxKicker:"Catholic constitutional settlement",
    lead:"Bounded papal authority is the constitutional settlement by which the Council of Christ the King completed Vatican I: preserving papal primacy and narrowly defined infallibility while affirming diocesan bishops and Eastern patriarchs as true apostolic governors rather than branch managers.",
    canon:"The council's limits on infallibility, affirmation of episcopal government, Eastern autonomy, and final Roman guardianship are established.",
    sections:[
      {id:"vatican-i",title:"The unfinished council",html:"<p>Vatican I had defined papal primacy and infallibility before war interrupted its wider ecclesiology. Gregory XVII called the new council in part to complete the account of the Church rather than reverse the earlier definitions.</p>"},
      {id:"infallibility",title:"Defined conditions",html:"<p>Papal infallibility applied to definitive universal teaching on faith or morals under defined conditions. It did not attach automatically to interviews, diplomacy, appointments, scientific judgments, economics, or every disciplinary decision.</p>"},
      {id:"bishops",title:"Diocesan bishops",html:"<p>Bishops were true apostolic pastors with responsibility for teaching, worship, discipline, and governance in their churches. Their authority did not derive from a model of the diocese as a Roman administrative branch.</p>"},
      {id:"patriarchs",title:"Eastern patriarchs",html:"<p>Patriarchs and synods recovered ordinary authority over rite, clergy discipline, canon law, and internal government. The settlement made Eastern autonomy constitutional rather than a revocable diplomatic favor.</p>"},
      {id:"rome",title:"Roman primacy",html:"<p>The pope remained the visible center of unity and final guardian of universal communion. Bounded authority meant defined office, not a federation of independent national churches.</p>"},
      {id:"capture",title:"Defense against national capture",html:"<p>The settlement denied both state control of local churches and unchecked local autonomy. German, Italian, Spanish, and other governments could not claim that friendly bishops converted national policy into Catholic doctrine.</p>"},
      {id:"reception",title:"Paul VI's administration",html:"<p>Paul VI translated the settlement into procedures, offices, reviewable judgments, and coordinated reception. He resisted both nationalist permission and permanent theological improvisation.</p>"},
      {id:"codification",title:"Pius XIII's codification",html:"<p>After 1982 Pius XIII made the balance of Roman primacy, episcopal responsibility, and Eastern government durable canon law. The council thereby became ordinary constitutional order rather than an unsettled recent event.</p>"}
    ],
    related:[{href:"gregory-xvii.html",kicker:"Conciliar pope",label:"Gregory XVII"},{href:"pius-xiii.html",kicker:"Canonical consolidation",label:"Pius XIII"}],
    facts:[["Predecessor question","Vatican I's unfinished ecclesiology"],["Papal infallibility","Definitive universal teaching under defined conditions"],["Ordinary papal acts","Not automatically infallible"],["Bishops","True apostolic pastors"],["Patriarchs","Meaningful internal government"],["Pope","Visible center and final guardian"],["Administrative reception","Paul VI"],["Canonical consolidation","Pius XIII"]]
  }),

  "religious-immunity": catholicInstitutionArticle({
    slug:"religious-immunity",title:"Religious immunity",eyebrow:"Civil protection · confessional state · freedom of faith",infoboxKicker:"Conciliar church–state doctrine",
    lead:"Religious immunity is the Council of Christ the King's distinction between the objective claim of religious truth and the civil protection owed to persons from coerced profession, baptism, or sacramental participation. It permitted Catholic confessional states while denying them authority to manufacture faith.",
    canon:"Civil immunity from coerced profession, continued Catholic mission, legitimate confessional privilege, and state restraint of ordinary public wrongs are established.",
    sections:[
      {id:"truth",title:"Truth and freedom",html:"<p>The council maintained that religious truth makes objective claims and that conversion remains a duty of mission. It also held that genuine faith requires freedom and cannot be produced by legal compulsion.</p>"},
      {id:"immunity",title:"Civil immunity",html:"<p>Persons possessed civil protection from forced profession, baptism, sacramental participation, and ordinary injustice conditioned on religious conformity. Protection attached to persons without declaring all religions equally true.</p>"},
      {id:"state",title:"The confessional state",html:"<p>A Catholic state could privilege the Church in ceremonies, schools, chaplaincy, or public law. It could not create a national church, control doctrine, or make sacramental conformity the price of civil protection.</p>"},
      {id:"restraint",title:"Legitimate restraint",html:"<p>States retained authority to restrain fraud, violence, sedition, exploitation, and attacks on the common good. Such restraint had to answer to the act involved rather than function as disguised compulsory conversion.</p>"},
      {id:"minorities",title:"Non-Catholic communities",html:"<p>Jews, Muslims, Protestants, Shinto communities, and others received civil protection. Catholic teaching continued to reject parallel permanent salvific dispensations and retained evangelization as a duty.</p>"},
      {id:"politics",title:"Against national churches",html:"<p>The doctrine addressed friendly Catholic rulers as much as hostile empires. Public patronage did not grant Italy, Spain, Portugal, or Occitania the right to select a national Catholic truth.</p>"},
      {id:"east",title:"Apostolic churches",html:"<p>Orthodox and Oriental apostolic churches occupied a distinct position because the council recognized their sacraments and succession. Their protection was joined to a program of incomplete apostolic communion.</p>"},
      {id:"legacy",title:"Political legacy",html:"<p>Religious immunity supplied a common standard by which Rome could cooperate with confessional states, defend minorities, and condemn forced ritual or coerced ethnic transformation without embracing religious indifferentism.</p>"}
    ],
    related:[{href:"catholic-social-order.html",kicker:"Wider political doctrine",label:"Christian Social Order"},{href:"catholicism-in-latin-bloc.html",kicker:"Confessional application",label:"Catholicism in the Latin Bloc"}],
    facts:[["Council","Council of Christ the King"],["Objective truth","Affirmed"],["Forced profession","Rejected"],["Forced baptism","Rejected"],["Mission","Retained"],["Confessional state","Permitted with limits"],["National church","Rejected"],["Protected persons","Catholics and non-Catholics"]]
  }),

  "roman-rite-settlement": catholicInstitutionArticle({
    slug:"roman-rite-settlement",title:"Roman Rite settlement",eyebrow:"Liturgy · Latin · restrained reform",infoboxKicker:"Postconciliar liturgical order",
    lead:"The Roman Rite settlement was the restrained liturgical reform established by Pius XII and the Council of Christ the King. It retained Latin, the Roman Canon, inherited structure, chant, and ritual continuity while expanding vernacular readings, preaching, catechesis, and selected pastoral texts.",
    canon:"The absence of the historical Novus Ordo and the listed forms of restrained reform are established.",
    sections:[
      {id:"inheritance",title:"The inherited Roman Rite",html:"<p>At the divergence the Roman Rite remained Latin and structurally traditional. Parish life was supported by Eucharistic devotion, the Sacred Heart, Christ the King, Marian devotion, schools, associations, and a thick calendar of public worship.</p>"},
      {id:"movement",title:"The liturgical movement",html:"<p>Reformers sought better preaching, chant, congregational knowledge, Holy Week observance, and intelligent participation. The movement did not presume that a wholly new order of Mass was required.</p>"},
      {id:"mediator",title:"Pius XII and Mediator Dei",html:"<p><em>Mediator Dei</em> permitted serious renewal while opposing improvisation and antiquarian reconstruction. It closed the war period with a standard of organic development.</p>"},
      {id:"council",title:"Council settlement",html:"<p>The council retained Latin as normative, preserved the Roman Canon and inherited structure, and kept Gregorian chant as the normative solemn music.</p>"},
      {id:"vernacular",title:"Limited vernacular use",html:"<p>Readings, sermons, catechetical instruction, and selected sacramental texts could use local languages. The change aimed at intelligibility without making vernacular replacement the measure of reform.</p>"},
      {id:"revision",title:"Modest revisions",html:"<p>Holy Week, rubrics, the calendar, and selected readings received controlled revision. Experiment remained subject to episcopal and Roman discipline.</p>"},
      {id:"east",title:"Eastern rites",html:"<p>Eastern liturgies were restored and protected rather than Latinized. Their integrity was treated as an application of ecclesial patrimony, not an exception to Catholic unity.</p>"},
      {id:"legacy",title:"Absence of a universal rupture",html:"<p>No historical Novus Ordo appeared. Postconciliar conflict centered on politics, administration, authority, and interpretation rather than a universal parish-level struggle over a replaced Mass.</p>"}
    ],
    related:[{href:"ecclesial-patrimony.html",kicker:"Ritual inheritance",label:"Ecclesial Patrimony"},{href:"bounded-papal-authority.html",kicker:"Government of reform",label:"Bounded Papal Authority"}],
    facts:[["Normative language","Latin"],["Eucharistic prayer","Roman Canon retained"],["Normative solemn music","Gregorian chant"],["Vernacular","Readings, sermons, catechesis, selected texts"],["Holy Week","Modestly revised"],["Historical Novus Ordo","Absent"],["Eastern rites","Restored and protected"],["Controlling principle","Organic and restrained reform"]]
  }),

  "catholic-social-order": catholicInstitutionArticle({
    slug:"catholic-social-order",title:"Catholic doctrine of the social order",eyebrow:"Family · property · work · subsidiarity · political authority",infoboxKicker:"Conciliar social doctrine",
    lead:"The Catholic doctrine of the social order developed by the Council of Christ the King defended family responsibility, just wages, distributed property, worker associations, occupational bodies, cooperatives, and subsidiarity while rejecting both atomized liberalism and party-state corporatism.",
    canon:"The council's listed social principles and its rejection of racial supremacy, national idolatry, leader worship, and total-state absorption are established.",
    sections:[
      {id:"political",title:"Plural legitimate forms",html:"<p>Monarchy, republic, federalism, corporative institutions, and confessional states could all be legitimate. No constitutional form authenticated itself merely by claiming Catholic purpose.</p>"},
      {id:"family",title:"Family responsibility",html:"<p>The household was treated as a natural society with rights and duties not granted by the state. Education, care, inheritance, and economic security were therefore social questions rather than private consumption alone.</p>"},
      {id:"property",title:"Distributed property",html:"<p>Private property was defended together with duties of ownership and policies broadening effective possession. Monopoly, dependency, and purely absentee control could violate the common good without abolishing ownership as such.</p>"},
      {id:"labor",title:"Work and association",html:"<p>Just wages, worker associations, professional bodies, cooperatives, and occupational representation gave labor a public status beyond a private contract between unequal parties.</p>"},
      {id:"subsidiarity",title:"Subsidiarity",html:"<p>Higher authorities were to support rather than absorb the proper work of families, parishes, professions, municipalities, and provinces. Subsidiarity also limited clerical or party bureaucracy.</p>"},
      {id:"errors",title:"Rejected political religions",html:"<p>The council condemned racial supremacy, collective punishment, coerced ethnic transformation, leader worship, national idolatry, and absorption of Church, family, profession, or conscience into the state.</p>"},
      {id:"economies",title:"Two economic rejections",html:"<p>Atomized economic liberalism reduced social duty to exchange and choice. Party-state corporatism converted associations into administrative arms. Catholic corporative language was meant to reject both arrangements.</p>"},
      {id:"reception",title:"Unequal reception",html:"<p>Occitania, Spain, Portugal, Italy, American Christian-social politics, and Catholic labor institutions each adopted parts of the teaching. Their rival interpretations made the doctrine influential without producing one Catholic economic system.</p>"}
    ],
    related:[{href:"religious-immunity.html",kicker:"Civil doctrine",label:"Religious Immunity"},{href:"catholicism-in-latin-bloc.html",kicker:"Regional reception",label:"Catholicism in the Latin Bloc"},{href:"fulton-sheen.html",kicker:"Public interpreter",label:"Fulton J. Sheen"}],
    facts:[["Legitimate constitutions","Monarchy, republic, federalism, corporative forms"],["Basic society","Family"],["Property","Private but socially obligated"],["Labor","Just wages and association"],["Administrative principle","Subsidiarity"],["Rejected right error","Party-state corporatism"],["Rejected liberal error","Atomized economic liberalism"],["Principal condemnations","Racial supremacy, leader worship, national idolatry"]]
  }),

  "catholicism-in-latin-bloc": catholicInstitutionArticle({
    slug:"catholicism-in-latin-bloc",title:"Catholicism in the Latin Bloc",eyebrow:"Italy · Spain · Portugal · Occitania",infoboxKicker:"Church–bloc relations",
    lead:"Catholicism in the Latin Bloc joined public privilege, mass institutions, royal and authoritarian patronage, and unusually close Vatican diplomacy. Rome regarded the bloc's principal states as friends but repeatedly denied that Catholic identity gave their governments ownership of the Church or automatic moral legitimacy.",
    canon:"The Vatican's differentiated relations with Italy, Spain, Portugal, and Occitania and the bloc's informal Catholic character are established.",
    sections:[
      {id:"bloc",title:"A Catholic field, not a papal empire",html:"<p>The Latin Bloc developed gradually through political, economic, military, and diplomatic cooperation. The Vatican neither founded nor governed it, and Catholic public symbolism did not make it a single confessional state.</p>"},
      {id:"italy",title:"Italy and proximity",html:"<p>Italy protected Vatican sovereignty, governed major Eastern Christian populations, and supplied the strongest political ally. Its empire, curial access, and physical encirclement of Rome made every disagreement consequential.</p>"},
      {id:"spain",title:"Spain and the Roman school",html:"<p>Spain supplied confessional confidence, traditionalist scholarship, and Hispanic diplomacy. Its earlier nationalizing current fell into the orthodoxy trap and became a strongly Roman intellectual school.</p>"},
      {id:"portugal",title:"Portugal as Atlantic bridge",html:"<p>Portugal connected Atlantic, African, Brazilian, and missionary worlds. Its cooperation was cautious, institutionally useful, and resistant to both Spanish and Italian command.</p>"},
      {id:"occitania",title:"The Occitan laboratory",html:"<p>Occitania became Rome's preferred model of a decentralized Catholic public order. Provincial life, dioceses, independent schools and associations, Lourdes, and corporative institutions bounded by subsidiarity prevented one ruler from absorbing society.</p>"},
      {id:"missions",title:"Empire and missions",html:"<p>Latin imperial routes gave missions access to Africa, the Mediterranean, and the Near East. They also exposed the Church to identification with colonial administration and military power.</p>"},
      {id:"council",title:"Conciliar limits",html:"<p>Religious immunity, ecclesial patrimony, episcopal responsibility, and condemnation of national idolatry supplied constitutional limits on friendly governments. Public patronage could not authorize compulsory faith or national control of doctrine.</p>"},
      {id:"1985",title:"Relations in 1985",html:"<p>By 1985 the bloc remained the most favorable diplomatic environment for the Church but not its temporal government. Friendship, access, and public Catholicism coexisted with recurring disputes over empire, appointments, and political appropriation.</p>"}
    ],
    related:[{href:"latin-bloc.html",kicker:"Regional system",label:"Latin Bloc"},{href:"catholic-social-order.html",kicker:"Political doctrine",label:"Christian Social Order"},{href:"occitania.html",kicker:"Principal laboratory",label:"Occitania"}],
    facts:[["Regional character","Informal Catholic political field"],["Vatican role","Friend and diplomatic center, not bloc government"],["Strongest ally","Italy under Umberto II"],["Scholarly center","Spanish Roman school"],["Atlantic bridge","Portugal"],["Preferred social laboratory","Occitania"],["Principal danger","National and imperial capture"],["Condition in 1985","Close but institutionally independent"]]
  }),

  "catholicism-in-german-europe": catholicInstitutionArticle({
    slug:"catholicism-in-german-europe",title:"Catholicism in German Europe",eyebrow:"Concordat · survival · nationalization · incomplete knowledge",infoboxKicker:"Church under the Greater German Reich",
    lead:"Catholicism in German Europe survived through the concordat, diocesan continuity, local accommodation, and bounded Roman resistance. Its institutions retained sacramental life and limited social influence while German nationalizers captured parts of diocesan administration and the SS concealed the religious order of the Reichskommissariats.",
    canon:"The concordat strategy, local German nationalizing current, Polish survival, Wolfgang–Vatican misunderstanding, and Rome's incomplete knowledge are established.",
    sections:[
      {id:"concordat",title:"The concordat as legal defense",html:"<p>The concordat survived as a defensive framework for bishops, seminaries, records, worship, and limited institutional continuity. It did not prevent state control of education or narrowing of Catholic public life.</p>"},
      {id:"resistance",title:"Bounded resistance",html:"<p>Pius XII condemned racial and total-state principles in universal moral language while avoiding gestures that would destroy institutions without protecting their people. Canonical borders were not simply redrawn to match conquest.</p>"},
      {id:"germany",title:"The nationalizing current",html:"<p>A local network reframed Catholicism through German nation, race, obedience, and vocation. Its power lay in appointments, seminaries, diocesan bureaucracy, translation, and selective reception of Roman documents.</p>"},
      {id:"poland",title:"Poland and the General Government",html:"<p>Polish Catholic life endured displacement and German domination around Kraków, Lwów, Stanisławów, Kielce, Radom, and Warsaw. Piasecki represented political capture of Catholic institutions rather than simple abolition.</p>"},
      {id:"gregory",title:"Gregory XVII and Wolfgang",html:"<p>Gregory distinguished Berlin, German dioceses, Wolfgang's household, and SS administrations. His statement that rulers inherit responsibility for institutions acting in their name was heard by Wolfgang as geopolitical threat.</p>"},
      {id:"silence",title:"The tragic information bargain",html:"<p>Wolfgang tightened control of scandal and information. Rome interpreted the decline in reports as possible improvement, while Berlin treated silence as protection against foreign weaponization.</p>"},
      {id:"ss",title:"The concealed Order Faith",html:"<p>Reports of SS rites, internal texts, and colonial ceremonies reached Rome in fragments. Investigators could not prove the full public architecture of a separate religious order and therefore issued no comprehensive formal judgment.</p>"},
      {id:"1985",title:"Condition in 1985",html:"<p>German Catholicism remained sacramentally alive, institutionally compromised, and internally diverse. Rome's greatest moral failure was also informational: it saw pieces of the system without understanding how completely they fitted together.</p>"}
    ],
    related:[{href:"general-government.html",kicker:"Polish Catholic society",label:"General Government"},{href:"four-clandestine-catholic-currents.html",kicker:"Nationalizing network",label:"Four Clandestine Currents"},{href:"ss-order-faith.html",kicker:"Concealed rival system",label:"SS Order Faith"}],
    facts:[["Legal framework","Reich concordat"],["Roman strategy","Bounded resistance"],["Strongest clandestine network","German nationalizing current"],["Principal means of influence","Appointments, seminaries, bureaucracy, translation"],["Polish problem","Survival and political capture"],["Wolfgang's response","Tighter information control"],["SS religion in Roman judgment","Suspected but not fully proven"],["Condition in 1985","Alive, compromised, and incompletely understood"]]
  }),

  "vatican-evidence-discipline": catholicInstitutionArticle({
    slug:"vatican-evidence-discipline",title:"Vatican evidentiary discipline",eyebrow:"Investigation · Germany · colonial abuses · demographic policy",infoboxKicker:"Institutional investigative standard",
    lead:"Vatican evidentiary discipline was the postwar practice of condemning abuses only to the extent that reports, documents, witnesses, and institutional patterns could be established. It protected Roman credibility but left the Church dangerously short of the full truth about the SS and Reichskommissariat systems.",
    canon:"The confirmed demographic findings, incomplete evidence of the SS Order Faith, and papal refusal to make broader unsupported claims are established.",
    sections:[
      {id:"problem",title:"The information problem",html:"<p>Occupation censorship, controlled scandal reporting, fragmented diocesan contacts, hostile propaganda, and cross-bloc rivalry made authentic evidence difficult to separate from exaggeration or concealment.</p>"},
      {id:"standard",title:"Claims proportioned to proof",html:"<p>Roman investigators distinguished suspicion, repeated report, documentary confirmation, witness corroboration, and public institutional fact. Papal statements were expected to reflect the strongest level actually reached.</p>"},
      {id:"order",title:"Reports of an SS religion",html:"<p>Investigators confirmed eccentric ceremonies, philosophical language, internal publications, and unusual rites. They could not establish the full public confession and institutional architecture later reconstructed by historians.</p>"},
      {id:"demography",title:"German demographic findings",html:"<p>Rome confirmed unequal contraceptive availability, manipulative fertility messaging, small-family incentives, and sterilization used as a restricted punishment for repeat violent native criminals.</p>"},
      {id:"limits",title:"Claims the evidence did not support",html:"<p>The evidence did not establish universal forced sterilization or compulsory medication of whole subject populations. The Vatican rejected those wider claims even while condemning the proven unequal and coercive system.</p>"},
      {id:"mittelafrika",title:"Mittelafrika and colonial reporting",html:"<p>Reports from Mittelafrika passed through missions, diplomatic intermediaries, and controlled administrations. Local confirmation was often possible only after long delay and without access to central files.</p>"},
      {id:"cost",title:"The cost of restraint",html:"<p>Careful language preserved credibility against foreign propaganda and prevented false universal accusations. It also allowed German officials to present limited findings as proof that the wider system did not exist.</p>"},
      {id:"legacy",title:"Historical judgment",html:"<p>By 1985 the Vatican possessed an accurate but incomplete set of fragments. Its failure was not fabrication or total silence, but an inability to reconstruct the architecture concealed behind individually deniable practices.</p>"}
    ],
    related:[{href:"catholicism-in-german-europe.html",kicker:"Principal field",label:"Catholicism in German Europe"},{href:"ss-order-faith.html",kicker:"Partially concealed institution",label:"SS Order Faith"}],
    facts:[["Method","Claims proportioned to evidence"],["Confirmed SS material","Rites, internal texts, philosophical language"],["Unconfirmed in papal judgment","Complete separate religious system"],["Confirmed demographic abuse","Unequal contraception and manipulative incentives"],["Confirmed sterilization","Restricted punitive use"],["Not established","Universal forced sterilization"],["Strength","Credibility"],["Failure","Inability to reconstruct the full system"]]
  }),

  "catholic-pastoral-care-in-space": catholicInstitutionArticle({
    slug:"catholic-pastoral-care-in-space",title:"Catholic pastoral care in space",eyebrow:"Orbital stations · lunar communities · sacramental jurisdiction",infoboxKicker:"Off-world ecclesiastical administration",
    lead:"Catholic pastoral care in space is the body of jurisdictional, sacramental, and practical rules developed under Paul VI for permanent orbital and lunar communities. Its central rule is that operating a station gives no state spiritual ownership over the people aboard it.",
    canon:"Permanent Vatican practice for jurisdiction, obligations, emergency rites, supplies, chaplaincy, burial, and death procedures by 1980 is established.",
    sections:[
      {id:"origins",title:"From missions to permanent communities",html:"<p>Early flights were treated through military or expeditionary chaplaincy. Permanent stations and long lunar deployments required law for settled communities rather than temporary travelers.</p>"},
      {id:"jurisdiction",title:"Ecclesiastical jurisdiction",html:"<p>Jurisdiction followed persons, missions, and assigned pastoral structures rather than the flag of the station operator alone. No state acquired spiritual authority merely by supplying transport or life support.</p>"},
      {id:"calendar",title:"Calendars and obligations",html:"<p>Rules addressed liturgical days, fasts, feast observance, timekeeping, and the practical meaning of Sunday under orbital cycles or lunar schedules.</p>"},
      {id:"sacraments",title:"Sacraments and emergency rites",html:"<p>Pastoral planning covered confession, Communion, anointing, baptism in emergencies, marriage preparation, and what could lawfully be done when no priest was present.</p>"},
      {id:"supplies",title:"Sacramental supplies",html:"<p>Wine, hosts, vessels, secure storage, contamination control, and transport schedules became ordinary logistical questions. Material constraints were handled without redefining the sacraments as symbolic substitutes.</p>"},
      {id:"chaplains",title:"Chaplains and mixed crews",html:"<p>Chaplains served multinational and often multi-confessional crews. Catholic–Orthodox cooperation benefited from the council's recognition of apostolic sacraments, while religious immunity protected non-Catholic personnel.</p>"},
      {id:"death",title:"Death, burial, and notification",html:"<p>Procedures addressed certification, notification of families and dioceses, preservation or return of remains, emergency committal, and memorial rites when terrestrial burial was delayed.</p>"},
      {id:"1985",title:"Stella Maris and normal government",html:"<p>By the start of <em>Stella Maris</em> construction in 1985, the Church already treated off-world settlement as a permanent pastoral jurisdiction. Spaceflight enlarged the field of moral duty without creating a new category of human person.</p>"}
    ],
    related:[{href:"stella-maris.html",kicker:"1985 multinational station",label:"Stella Maris"},{href:"space-programs.html",kicker:"Technological context",label:"The Space Race"},{href:"paul-vi.html",kicker:"Founding pontificate",label:"Paul VI"}],
    facts:[["Permanent practice established","1980"],["Founding pontificate","Paul VI"],["Jurisdictional principle","Station ownership does not confer spiritual authority"],["Environments","Orbital and lunar"],["Timekeeping","Calendars and obligations regulated"],["Material planning","Sacramental supplies"],["Personnel","Chaplains and mixed crews"],["Death care","Notification, remains, burial, memorial rites"]]
  })
});

const catholicCouncil = window.deepArticles["council-of-christ-the-king"];
if (catholicCouncil) {
  catholicCouncil.related = [...(catholicCouncil.related || []),
    {href:"ecclesial-patrimony.html",kicker:"Central constructive doctrine",label:"Ecclesial Patrimony"},
    {href:"apostolic-communion.html",kicker:"Eastern settlement",label:"Apostolic Communion"},
    {href:"bounded-papal-authority.html",kicker:"Constitutional settlement",label:"Bounded Papal Authority"},
    {href:"religious-immunity.html",kicker:"Civil doctrine",label:"Religious Immunity"},
    {href:"roman-rite-settlement.html",kicker:"Liturgical settlement",label:"Roman Rite Settlement"},
    {href:"catholic-social-order.html",kicker:"Political and economic doctrine",label:"Christian Social Order"}
  ];
}

const catholicOverview = window.deepArticles["catholic-church"];
if (catholicOverview && !catholicOverview.sections.some(section=>section.id==="institutional-system")) {
  catholicOverview.sections.push(
    {id:"institutional-system",title:"Influence, evidence, and survival",html:"<p>The Church's postwar institutions operated through concordats, dioceses, missions, neutral conduits, and a Roman discipline of claims proportioned to evidence. The <a href='four-clandestine-catholic-currents.html'>four clandestine currents</a> sought long-term capture, while the <a href='swiss-catholic-conduit.html'>Swiss conduit</a> preserved both legitimate communications and opaque networks.</p><p>In German Europe, evidentiary caution protected Vatican credibility but prevented Rome from reconstructing the complete SS and colonial system.</p>"},
    {id:"constitutional-order",title:"The constitutional and pastoral settlement",html:"<p>The council's <a href='ecclesial-patrimony.html'>ecclesial patrimony</a>, <a href='bounded-papal-authority.html'>bounded papal authority</a>, <a href='religious-immunity.html'>religious immunity</a>, and <a href='roman-rite-settlement.html'>Roman Rite settlement</a> became ordinary law under Pius XIII. The same order supported <a href='apostolic-communion.html'>Catholic–Orthodox apostolic communion</a> and permanent <a href='catholic-pastoral-care-in-space.html'>pastoral government beyond Earth</a>.</p>"}
  );
  catholicOverview.related = [...(catholicOverview.related || []),
    {href:"four-clandestine-catholic-currents.html",kicker:"Institutional danger",label:"Four Clandestine Currents"},
    {href:"ecclesial-patrimony.html",kicker:"Constitutional doctrine",label:"Ecclesial Patrimony"},
    {href:"catholicism-in-latin-bloc.html",kicker:"Regional relationship",label:"Catholicism in the Latin Bloc"},
    {href:"catholicism-in-german-europe.html",kicker:"Regional relationship",label:"Catholicism in German Europe"}
  ];
  catholicOverview.facts.push(["Institutional article family","Fourteen dedicated studies"],["Principal postwar tension","Universal Church versus national capture"]);
}
