window.deepArticles = window.deepArticles || {};

const extraterrestrialChurchSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Catholic Church and mature space age"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — permanent stations and lunar settlement"},
  {href:"../transcript.md",label:"Master Transcript — pontifical space commission and extraterrestrial jurisdiction"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open papal and off-world legal details"}
];

const extraterrestrialChurchArticle = config => ({
  category:"Catholic Church",
  eyebrow:"Extraterrestrial pastoral government · 1977–2000",
  infoboxKicker:"Catholic institutions beyond Earth",
  ...config,
  sources:[...extraterrestrialChurchSources,...(config.additionalSources || [])],
  categories:config.categories || ["Catholicism in space","Canon law","Space settlement","Catholic Church"]
});

const churchJurisdictionLandscape = {src:"assets/diagrams/extraterrestrial-church-jurisdiction.svg",alt:"Diagram showing the Holy See, the Apostolic Administration for Extraterrestrial Missions, home churches, and off-world chaplaincies and parishes",caption:"Off-world jurisdiction follows persons and missions while preserving each Catholic's rite and home church; station ownership does not confer spiritual authority"};
const sacramentalLandscape = {src:"assets/diagrams/off-world-sacramental-practice.svg",alt:"Diagram distinguishing sacraments requiring a physically present cleric, emergency lay actions, continuing records, and death care beyond Earth",caption:"Communications can support instruction and records, but they do not replace the physical presence required for sacramental acts"};

Object.assign(window.deepArticles, {
  "pontifical-space-commission": extraterrestrialChurchArticle({
    title:"Pontifical Commission for the Pastoral Care of Spacefarers",
    category:"Roman Curia",
    landscape:churchJurisdictionLandscape,
    lead:"The Pontifical Commission for the Pastoral Care of Spacefarers was the small Roman body established under Paul VI in 1977 or 1978 to prepare Catholic law and pastoral practice for continuously occupied orbital stations and lunar settlements. It joined theologians and canonists to astronauts, physicians, chaplains, scientists, and the technical authorities of rival space systems.",
    canon:"Paul VI's creation of a small pontifical commission around 1977–78, its collaborators, and its work on jurisdiction, calendars, sacraments, emergencies, remains, and political ownership are established. Exact erection date, official Latin title, membership, offices, decrees, budget, and later administrative succession remain open.",
    sections:[
      {id:"origin",title:"Origin in permanent occupation",html:"<p>Short flights could be handled as extensions of military, expeditionary, or national chaplaincy. The continuous occupation of Orbital Port Columbia and Kennedy Lunar Station made that temporary model inadequate.</p><p>Paul VI therefore treated spacefarers as a recurring pastoral population rather than exceptional travelers.</p>"},
      {id:"membership",title:"Membership and consultation",html:"<p>The commission worked with the Pontifical Academy of Sciences, military ordinariates, bishops' conferences, missionary and maritime chaplaincies, astronauts, physicians, and German, American, Japanese, British, and Latin technical authorities.</p><p>Its small size allowed practical consultation without creating a large curial ministry before the population justified one.</p>"},
      {id:"questions",title:"Initial questions",html:"<p>The agenda included personal jurisdiction, mission clocks, Sunday and feast observance, priestly faculties, emergency baptism, confession, anointing, sacramental supplies, mixed crews, death notification, remains, and memorial rites.</p><p>The commission consistently solved physical constraints without redefining sacramental theology.</p>"},
      {id:"ownership",title:"No spiritual title through ownership",html:"<p>The commission's central jurisdictional rule was that political ownership of a station did not give the operating state authority over the Church or every Catholic aboard. Spaceflight could not create a national church by engineering precedence.</p><p>Crew members retained their rite, home church, and existing personal jurisdictions unless law assigned them otherwise.</p>"},
      {id:"practice",title:"Practice before codification",html:"<p>Early norms circulated through chaplaincies, episcopal conferences, mission authorities, and individual faculties. Some remained provisional because population, travel time, and station design changed faster than general canon law.</p>"},
      {id:"legacy",title:"Legacy under Pius XIII",html:"<p>Pius XIII's canonical consolidation supplied the legal environment in which the commission's temporary practices could become a permanent <a href='apostolic-administration-extraterrestrial-missions.html'>apostolic administration for extraterrestrial missions</a>.</p><p>The commission continued as a technical and advisory body even where ordinary jurisdiction passed to the new administration.</p>"}
    ],
    related:[{href:"paul-vi.html",kicker:"Founding pontiff",label:"Paul VI"},{href:"catholic-pastoral-care-in-space.html",kicker:"Aggregate subject",label:"Catholic Pastoral Care in Space"},{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Institutional successor",label:"Apostolic Administration"},{href:"orbital-catholic-chaplaincy.html",kicker:"Early field practice",label:"Orbital Catholic Chaplaincy"}],
    facts:[["Established","c. 1977–1978"],["Founder","Paul VI"],["Type","Pontifical commission"],["Immediate cause","Permanent orbital and lunar occupation"],["Principal collaborators","Science, medicine, chaplaincy, and space authorities"],["Central rule","Station ownership confers no spiritual title"],["Later role","Technical and advisory"],["Exact Latin title","Open"]]
  }),

  "apostolic-administration-extraterrestrial-missions": extraterrestrialChurchArticle({
    title:"Apostolic Administration for Extraterrestrial Missions",
    category:"Ecclesiastical jurisdictions",
    landscape:churchJurisdictionLandscape,
    lead:"The Apostolic Administration for Extraterrestrial Missions is the personal and mission-based Catholic jurisdiction responsible for spacefarers and off-world communities not yet capable of ordinary territorial diocesan government. Developed under Pius XIII from the earlier pontifical space commission, it serves orbital stations, lunar settlements, and interplanetary expeditions without claiming sovereignty over celestial territory.",
    canon:"A permanent personal jurisdiction for spacefarers under the Pius XIII canonical settlement is strongly established by the Church canon and the need created by Our Lady of the Moon. The apostolic-administration form is the adopted synthesis. Exact erection date, formal Latin name, first administrator, curial attachment, statutes, seat, budget, and later elevation remain open.",
    sections:[
      {id:"form",title:"A personal and mission jurisdiction",html:"<p>The administration follows Catholics assigned to qualifying stations, settlements, and missions. It does not draw a territorial diocese across the Moon, Mars, or interplanetary space.</p><p>This structure allows one ordinary to grant faculties and keep records even when communities move between registered vehicles and surface installations.</p>"},
      {id:"home",title:"Relationship to home churches",html:"<p>Membership does not erase a person's diocese, Eastern Catholic church, religious institute, or military ordinariate. The administration coordinates immediate pastoral government while home institutions retain identity, formation, family links, and duties established by universal law.</p><p>Disputes are resolved through delegated competence rather than assuming that one Latin authority absorbs every rite.</p>"},
      {id:"ordinary",title:"Administrator and delegated authority",html:"<p>The apostolic administrator acts in the pope's name and delegates broad faculties to clergy whose bishops may be months away in practical travel time. The office can appoint chaplains, erect quasi-parishes or parishes, regulate records, and prepare emergency norms.</p>"},
      {id:"institutions",title:"Chaplaincies, missions, and parishes",html:"<p>Rotating stations normally receive chaplaincies. Temporary expeditions remain missions. A stable resident community with a permanent priest, chapel, records, and continuing pastoral life may become a quasi-parish or parish.</p><p><a href='parish-our-lady-of-the-moon.html'>Our Lady of the Moon</a> is the first off-world community to cross that institutional threshold.</p>"},
      {id:"limits",title:"Limits of authority",html:"<p>The administration has no civil police, landing authority, or territorial sovereignty. Station commanders retain technical emergency control; sponsor governments retain civil jurisdiction; and the Church governs sacraments, clergy, ecclesiastical discipline, and pastoral care.</p><p>Religious immunity protects non-Catholic crew members from compulsory worship.</p>"},
      {id:"2000",title:"Position by 2000",html:"<p>By the millennium the administration connects orbital chaplaincies, the first lunar parish, itinerant lunar clergy, and planning for Mars and Ceres. Its small central office governs a geographically enormous but numerically limited population.</p><p>It is the canonical admission that distance from Earth has become an ordinary condition of Church government.</p>"}
    ],
    related:[{href:"pontifical-space-commission.html",kicker:"Institutional precursor",label:"Pontifical Space Commission"},{href:"off-world-canon-law.html",kicker:"Governing rules",label:"Off-World Canon Law"},{href:"parish-our-lady-of-the-moon.html",kicker:"First parish",label:"Our Lady of the Moon Parish"},{href:"interplanetary-clerical-faculties.html",kicker:"Delegated authority",label:"Interplanetary Clerical Faculties"}],
    facts:[["Type","Personal apostolic administration"],["Development","Late 1980s–1990s"],["Founding pontificate","Pius XIII"],["Territorial sovereignty","None"],["Population served","Spacefarers and off-world communities"],["Local units","Missions, chaplaincies, quasi-parishes, and parishes"],["First stable parish","Our Lady of the Moon"],["Exact erection date","Open"]]
  }),

  "off-world-canon-law": extraterrestrialChurchArticle({
    title:"Off-world canon law",
    landscape:sacramentalLandscape,
    lead:"Off-world canon law is the body of universal, personal, and delegated Catholic rules governing clergy, sacraments, records, obligations, marriage, death, and ecclesiastical authority aboard spacecraft and in extraterrestrial settlements. It adapts administration to distance and hostile environments while rejecting the idea that technical novelty changes the nature of the sacraments or the human person.",
    canon:"Mission clocks, personal jurisdiction, impossibility of attendance, physical sacramental presence, emergency rites, broad delegated faculties, records, remains, and the non-ownership principle are established or directly implied. The consolidated taxonomy is synthesis. Exact canon numbers, promulgation instruments, penalties, tribunals, forms, and later revisions remain open.",
    sections:[
      {id:"sources",title:"Sources of law",html:"<p>Universal canon law remains primary. Particular rules come from the Apostolic See, the extraterrestrial apostolic administration, Eastern Catholic synods, religious superiors, military ordinariates, and delegated faculties granted for a mission.</p><p>No station company or national agency may rewrite sacramental validity through contract.</p>"},
      {id:"time",title:"Time and obligations",html:"<p>Crews use an assigned mission clock and calendar. Orbital sunrise does not create repeated Sundays, and rapid crossing of terrestrial time zones does not multiply obligations.</p><p>Mass attendance does not bind when no lawful celebration is physically available.</p>"},
      {id:"presence",title:"Physical presence",html:"<p>Radio and video allow instruction, counsel, preparation, and administration. They do not permit remote consecration, confession, anointing, or marriage exchange where law requires the minister and parties to be present.</p><p>The communications delay to Mars makes this distinction operationally unavoidable.</p>"},
      {id:"records",title:"Records and identity",html:"<p>Baptism, confirmation, marriage, ordination, death, faculties, and dispensations are recorded locally and transmitted when communications permit. Signed duplicate records protect continuity after equipment loss or long delay.</p><p>Rite, home diocese, religious status, and the off-world jurisdiction are recorded separately.</p>"},
      {id:"command",title:"Technical command and ecclesiastical authority",html:"<p>A station commander may impose shelter, quarantine, movement, fire, pressure, or contamination rules that affect worship. The commander cannot appoint clergy or determine doctrine.</p><p>Clergy must obey genuine safety orders while retaining responsibility for sacramental discipline.</p>"},
      {id:"future",title:"Unsettled questions",html:"<p>Long childhood beyond Earth, locally born Catholics, inheritance of domicile, permanent cemeteries, new dioceses, tribunals, and interplanetary religious institutes remain subjects for later law.</p><p>By 2000 the Church has a functioning order, not a complete code for a mature extraterrestrial civilization.</p>"}
    ],
    related:[{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Ordinary authority",label:"Apostolic Administration"},{href:"sacramental-life-beyond-earth.html",kicker:"Sacramental practice",label:"Sacramental Life Beyond Earth"},{href:"interplanetary-clerical-faculties.html",kicker:"Delegated powers",label:"Clerical Faculties"},{href:"death-and-burial-beyond-earth.html",kicker:"Final rites",label:"Death and Burial Beyond Earth"}],
    facts:[["Primary law","Universal canon law"],["Particular authority","Apostolic administration and delegated ordinaries"],["Calendar","Assigned mission clock"],["Remote sacraments","Not permitted"],["Impossible Mass attendance","Obligation does not bind"],["Records","Local signed copies with later transmission"],["Station commander","Technical emergency authority"],["Complete extraterrestrial code by 2000","No"]]
  }),

  "parish-our-lady-of-the-moon": extraterrestrialChurchArticle({
    title:"Parish of Our Lady of the Moon",
    category:"Catholic parishes",
    landscape:churchJurisdictionLandscape,
    lead:"The Parish of Our Lady of the Moon is the permanently staffed Catholic parish at Sancta Maria Lunae, the Latin Space Community's lunar establishment. By the millennium it is the first off-world Catholic community with a resident priest, a dedicated church, stable sacramental records, and pastoral life organized around residents rather than a visiting expedition.",
    canon:"Sancta Maria Lunae's religious character, first permanent lunar priest, dedicated church, shuttered Earthrise view behind the altar, multinational Latin operation, and need for a settled jurisdiction are established. Parish status under the apostolic administration is the adopted synthesis. Exact erection date, dedication, patronal feast, pastor, architecture, congregation size, and sacramental register remain open.",
    sections:[
      {id:"foundation",title:"From base chapel to parish",html:"<p>Early Latin crews used a mission chapel and visiting clergy. Continuous habitation, a resident priest, regular worship, records, and pastoral responsibility for people not organized around one flight justified erection first as a quasi-parish and then as a parish.</p>"},
      {id:"jurisdiction",title:"Jurisdiction",html:"<p>The parish belongs to the <a href='apostolic-administration-extraterrestrial-missions.html'>Apostolic Administration for Extraterrestrial Missions</a>, not to an Italian diocese or the Latin Space Community's civil command. It serves Catholics of several nationalities and rites while coordinating with their home churches.</p>"},
      {id:"church",title:"The lunar church",html:"<p>The worship space is shielded within the base. A heavily protected viewport can be opened under safe conditions so that Earth appears behind the altar during the site's periodic Earthrise geometry.</p><p>The feature is architectural and devotional, not a continuously exposed glass wall.</p>"},
      {id:"pastor",title:"Resident priest",html:"<p>The resident priest celebrates the sacraments, keeps registers, accompanies dangerous work, advises families, and serves visiting crews. Broad faculties reduce the need to await individual terrestrial decisions.</p><p>Technical qualification and emergency training are necessary because every resident remains part of the base's survival system.</p>"},
      {id:"community",title:"A multinational congregation",html:"<p>Italian, Spanish, Portuguese, Occitan, Eastern Catholic, and other residents share one local parish without losing inherited rites. Orthodox visitors may receive pastoral hospitality under the Council of Christ the King's apostolic-communion rules.</p>"},
      {id:"symbol",title:"Millennium meaning",html:"<p>The parish becomes inseparable from the <a href='latin-lunar-cross.html'>Latin lunar cross</a> displayed during the Millennium Illumination. The event makes the church the best-known religious institution beyond Earth.</p><p>Rome nevertheless rejects the claim that public prominence grants Catholic political title to lunar territory.</p>"}
    ],
    related:[{href:"sancta-maria-lunae.html",kicker:"Host settlement",label:"Sancta Maria Lunae"},{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Ecclesiastical ordinary",label:"Apostolic Administration"},{href:"sacramental-life-beyond-earth.html",kicker:"Parish practice",label:"Sacramental Life Beyond Earth"},{href:"latin-lunar-cross.html",kicker:"Public symbol",label:"Latin Lunar Cross"}],
    facts:[["Location","Sancta Maria Lunae"],["Status by 2000","Permanently staffed parish"],["Jurisdiction","Extraterrestrial apostolic administration"],["Historical distinction","First off-world Catholic parish"],["Clergy","Resident priest"],["Congregation","Multinational and multi-ritual"],["Architectural feature","Shielded Earthrise view behind altar"],["Exact erection date","Open"]]
  }),

  "orbital-catholic-chaplaincy": extraterrestrialChurchArticle({
    title:"Orbital Catholic chaplaincy",
    landscape:churchJurisdictionLandscape,
    lead:"Orbital Catholic chaplaincy is the rotating system of priests, trained lay coordinators, portable chapels, sacramental supplies, and delegated faculties serving permanently occupied stations. Unlike the first lunar parish, most orbital communities remain operationally transient and are served as chaplaincies rather than territorial parishes.",
    canon:"Permanent stations, mixed crews, early expeditionary chaplaincy, Paul VI's commission, personal jurisdiction, and permanent Catholic practice are established. The comparative chaplaincy system is synthesis. Named chaplains, rotations, chapel modules, station agreements, visit frequency, and denominational shares remain open.",
    sections:[
      {id:"rotation",title:"Rotation rather than domicile",html:"<p>Most station residents serve defined tours and retain terrestrial homes. Priests therefore rotate through major ports or travel as qualified crew members rather than becoming territorial pastors of an orbital location.</p>"},
      {id:"facilities",title:"Chapels and stored supplies",html:"<p>A chaplaincy may use a dedicated small chapel, a convertible room, or a portable secure kit. Hosts, wine, vessels, vestments, oils, and records require protection from fire, contamination, pressure loss, and unauthorized access.</p>"},
      {id:"mixed",title:"Mixed crews",html:"<p>Catholic worship occurs within multinational and multi-confessional crews. Religious immunity forbids compulsory participation, while Catholic–Orthodox agreements permit defined pastoral cooperation in emergencies.</p>"},
      {id:"lay",title:"Lay coordination",html:"<p>When no priest is aboard, trained lay Catholics organize prayer, readings, catechesis, Communion from lawfully reserved hosts where permitted, and communication with the chaplaincy. They do not simulate priestly sacraments.</p>"},
      {id:"command",title:"Safety and command",html:"<p>Celebration schedules yield to docking, shelter, pressure, fire, quarantine, and other genuine safety demands. Commanders provide access and safety without controlling clergy appointments or sacramental discipline.</p>"},
      {id:"network",title:"The mature network",html:"<p>Columbia, Raumhafen, Hōrai, Resolution, and Stella Maris develop different national arrangements, but the apostolic administration supplies shared faculties and record continuity. Catholic presence follows people through rival stations without implying political endorsement of their sponsors.</p>"}
    ],
    related:[{href:"pontifical-space-commission.html",kicker:"Founding institution",label:"Pontifical Space Commission"},{href:"stella-maris.html",kicker:"Latin orbital center",label:"Stella Maris"},{href:"orbital-stations.html",kicker:"Physical setting",label:"Orbital Stations"},{href:"sacramental-life-beyond-earth.html",kicker:"Liturgical practice",label:"Sacramental Life Beyond Earth"}],
    facts:[["Institutional form","Personal chaplaincy"],["Typical population","Rotating station crews"],["Clergy","Visiting or rotating qualified priests"],["When no priest is present","Lay prayer and limited reserved Communion"],["Remote priestly sacraments","No"],["Command authority","Technical safety only"],["Principal stations","Five-system orbital ports"],["Universal station chapel standard","None"]]
  }),

  "interplanetary-clerical-faculties": extraterrestrialChurchArticle({
    title:"Interplanetary clerical faculties",
    landscape:sacramentalLandscape,
    lead:"Interplanetary clerical faculties are the broad delegated permissions granted to priests and deacons whose missions may place them months or years beyond practical access to their ordinary. They allow clergy to act lawfully across vehicles, stations, and settlements while communications delay and mission risk make case-by-case terrestrial authorization unreliable.",
    canon:"Personal jurisdictions for spacefarers, long communications and travel delays, permanent clergy, and the need for broad lawful delegation are established or directly implied. The faculty categories are synthesis. Standard instruments, duration, reservation of cases, renewal, authentication, and named recipients remain open.",
    sections:[
      {id:"need",title:"Why ordinary delegation is insufficient",html:"<p>A terrestrial priest can contact a bishop quickly and travel within the diocese. A Mars or Ceres cleric may receive an answer only after a major delay and cannot return for years.</p><p>Faculties must therefore anticipate foreseeable pastoral cases before departure.</p>"},
      {id:"scope",title:"Scope",html:"<p>Delegations can cover confession, marriage assistance, dispensations permitted by law, emergency rites, reserved Eucharist, records, funerals, mixed-rite coordination, and service aboard several registered vehicles or sites.</p><p>Universal reservations and matters beyond the delegating authority remain intact.</p>"},
      {id:"mission",title:"Mission-linked duration",html:"<p>Faculties attach to a defined mission, route, or off-world assignment and continue through delays reasonably connected to it. They are recorded both in Rome and with the priest's mission archive.</p>"},
      {id:"rites",title:"Rites and faculties",html:"<p>A Latin priest does not acquire unlimited authority to replace Eastern discipline, and an Eastern priest retains the law of his church. Cross-ritual service is prepared explicitly where mixed crews make it necessary.</p>"},
      {id:"emergency",title:"Emergency judgment",html:"<p>Danger to life expands what may lawfully be done under universal law but does not make every later convenience an emergency. Clergy record the facts and report decisions when communications return.</p>"},
      {id:"oversight",title:"Oversight at a distance",html:"<p>Encrypted records, scheduled reports, medical and mission logs, and later review replace constant supervision. The system depends heavily upon formation and trust because immediate external enforcement is impossible.</p>"}
    ],
    related:[{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Delegating authority",label:"Apostolic Administration"},{href:"off-world-canon-law.html",kicker:"Legal framework",label:"Off-World Canon Law"},{href:"catholic-pastoral-jurisdiction-on-mars.html",kicker:"Long-delay application",label:"Catholic Jurisdiction on Mars"},{href:"sacramental-life-beyond-earth.html",kicker:"Pastoral application",label:"Sacramental Life Beyond Earth"}],
    facts:[["Purpose","Lawful ministry beyond practical episcopal reach"],["Delegating authority","Apostolic administrator or competent ordinary"],["Typical duration","Mission-linked"],["Communications","Useful but not assumed immediate"],["Mixed rites","Require explicit coordination"],["Emergency decisions","Recorded and later reported"],["Remote supervision","Scheduled records and review"],["Standard universal form","Open"]]
  }),

  "sacramental-life-beyond-earth": extraterrestrialChurchArticle({
    title:"Sacramental life beyond Earth",
    landscape:sacramentalLandscape,
    lead:"Sacramental life beyond Earth is the celebration and preservation of Catholic worship under orbital, lunar, and interplanetary constraints. The Church permits practical adaptation in timekeeping, posture, vessels, storage, and emergency procedure while insisting that communications and technology cannot replace the physical matter, minister, and human encounter required by the sacraments.",
    canon:"Mass impossibility, mission calendars, physically present clergy, emergency baptism, confession, anointing, marriage preparation, sacramental supplies, mixed crews, and continuity of doctrine are established. Detailed rubrics are synthesis. Approved vessel designs, posture rules, formulas, wine standards, reservation limits, and individual dispensations remain open.",
    sections:[
      {id:"mass",title:"Mass and gravity",html:"<p>Mass may be celebrated in microgravity or reduced gravity with secured vessels, controlled liquids, restrained objects, and a prepared worship area. Safety modifications protect the species without turning the rite into a simulated broadcast.</p>"},
      {id:"absence",title:"When no priest is present",html:"<p>The obligation to attend Mass does not bind where attendance is impossible. Lay residents gather for prayer, readings, catechesis, and permitted distribution of reserved Communion.</p><p>A live transmission connects communities but is not itself attendance at a sacramental celebration.</p>"},
      {id:"confession",title:"Confession and anointing",html:"<p>Confession requires the penitent and priest to be physically present; a secure radio link is not a substitute. A present priest may use broad faculties and general absolution only under the conditions recognized by law.</p><p>Anointing is planned before dangerous operations and used in genuine illness or peril.</p>"},
      {id:"baptism",title:"Baptism and birth",html:"<p>Any person with the required intention may baptize validly in an emergency using water and the Trinitarian form. Ordinary baptism belongs within the community's parish or mission records.</p><p>The first lunar births turn infant baptism, sponsors, and record transmission into normal pastoral questions.</p>"},
      {id:"marriage",title:"Marriage",html:"<p>Long assignments require marriage preparation, proof of freedom to marry, and clear jurisdiction. The Church may delegate assistance or dispense from canonical form where law permits, but the parties cannot exchange consent by prerecorded message.</p>"},
      {id:"rites",title:"Several rites in one settlement",html:"<p>Latin, Eastern Catholic, and visiting Orthodox traditions retain their calendars and liturgical inheritance. Shared life support does not require ritual uniformity.</p><p>The Council of Christ the King's ecclesial-patrimony settlement becomes particularly concrete in small off-world communities.</p>"}
    ],
    related:[{href:"parish-our-lady-of-the-moon.html",kicker:"First parish setting",label:"Our Lady of the Moon Parish"},{href:"orbital-catholic-chaplaincy.html",kicker:"Rotating communities",label:"Orbital Catholic Chaplaincy"},{href:"off-world-family-life.html",kicker:"Domestic context",label:"Off-World Family Life"},{href:"death-and-burial-beyond-earth.html",kicker:"Final rites",label:"Death and Burial Beyond Earth"}],
    facts:[["Mass in microgravity","Permitted with safety preparation"],["Broadcast equals attendance","No"],["Remote confession","No"],["Emergency baptism","Possible by any person with required intention"],["Marriage by prerecorded exchange","No"],["Calendar","Mission clock and assigned jurisdiction"],["Ritual diversity","Preserved"],["Doctrinal innovation","None required"]]
  }),

  "death-and-burial-beyond-earth": extraterrestrialChurchArticle({
    title:"Death and burial beyond Earth",
    landscape:sacramentalLandscape,
    lead:"Death and burial beyond Earth concerns Catholic rites, records, remains, family notification, and committal when a person dies aboard a spacecraft or extraterrestrial settlement. Pastoral law distinguishes immediate care of the dying, safe custody of remains, return to Earth, emergency committal, and the later creation of permanent off-world cemeteries.",
    canon:"Paul VI's commission addressed death certification, family and diocesan notice, preservation or return, emergency committal, and memorial rites. The mature procedural framework is synthesis. No first case, cemetery, burial site, transport standard, exhumation law, or universal preference has been established.",
    sections:[
      {id:"dying",title:"Care of the dying",html:"<p>Where possible a priest provides confession, anointing, viaticum, prayer, and accompaniment. When no priest is present, other crew members remain with the dying, lead approved prayers, and contact family or clergy as communications allow.</p>"},
      {id:"certification",title:"Certification and notice",html:"<p>Medical and civil authorities certify death. The chaplaincy or mission records the ecclesiastical facts and notifies family, home parish, diocese, rite, religious institute, and the extraterrestrial administration.</p>"},
      {id:"custody",title:"Custody of remains",html:"<p>Pressure, contamination, mass, volume, temperature, and mission duration determine whether remains can be preserved and returned. The body is treated as human remains rather than cargo or biological waste.</p>"},
      {id:"return",title:"Return and committal",html:"<p>Return to Earth is preferred where feasible and consistent with the wishes of the deceased and family. An emergency committal may be necessary when retention endangers the crew or is physically impossible.</p><p>Disposal into an unsafe orbit is rejected because it creates both indignity and hazard.</p>"},
      {id:"burial",title:"Off-world burial",html:"<p>A permanent settlement may eventually maintain a cemetery or protected burial place. Such burial requires civil permission, environmental and safety review, ecclesiastical authorization, records, and a site that later construction will respect.</p><p>By 2000 no universal rule makes lunar or Martian burial ordinary.</p>"},
      {id:"memorial",title:"Funeral and memorial rites",html:"<p>A funeral may be celebrated locally even when remains are returned later, while terrestrial relatives hold a separate Mass or memorial. Communications delay can separate death, notification, local rites, and burial by months.</p>"}
    ],
    related:[{href:"sacramental-life-beyond-earth.html",kicker:"Pastoral setting",label:"Sacramental Life Beyond Earth"},{href:"off-world-canon-law.html",kicker:"Legal framework",label:"Off-World Canon Law"},{href:"extraterrestrial-abandonment-and-salvage.html",kicker:"Civil custody distinction",label:"Extraterrestrial Abandonment and Salvage"},{href:"catholic-pastoral-jurisdiction-on-mars.html",kicker:"Long-delay setting",label:"Catholic Jurisdiction on Mars"}],
    facts:[["Immediate priority","Care of the dying and crew safety"],["Civil certification","Required"],["Ecclesiastical notice","Family and home church"],["Return to Earth","Preferred where feasible"],["Emergency committal","Permitted when necessary"],["Unsafe orbital disposal","Rejected"],["Permanent cemetery by 2000","Not established"],["Universal burial preference","Open"]]
  }),

  "catholic-pastoral-jurisdiction-on-mars": extraterrestrialChurchArticle({
    title:"Catholic pastoral jurisdiction on Mars",
    landscape:churchJurisdictionLandscape,
    lead:"Catholic pastoral jurisdiction on Mars is the mission-based ecclesiastical order applied to crews and settlements separated from Earth by long travel times and communications delay. By 2000 German, British, and American establishments make the question practical even where no permanent resident priest or Martian parish has yet been established.",
    canon:"German 1993, British 1998, American 1999, and later Japanese Mars establishments, long communications and travel delay, and the need for permanent off-world law are established. The pastoral-jurisdiction structure is synthesis. First priest, first Mass, first baptism, named mission, parish, chapel, congregation, and later diocesan status remain open.",
    sections:[
      {id:"missions",title:"Several civil sponsors",html:"<p>German, British, American, and later Japanese Mars crews remain subject to different civil jurisdictions. Catholic personnel nevertheless fall within one apostolic administration where no nearer competent church authority can operate.</p>"},
      {id:"delay",title:"Government under delay",html:"<p>A bishop cannot supervise Mars as if it were a distant terrestrial parish. Faculties, records, emergency norms, and dispute procedures must be settled before departure.</p><p>Communications support consultation but cannot provide physical sacramental ministry.</p>"},
      {id:"clergy",title:"Clergy and mission qualification",html:"<p>A priest assigned to Mars must also qualify as a useful and safe mission member. Medical fitness, engineering or scientific competence, emergency training, and psychological suitability matter alongside pastoral formation.</p><p>No canon requires every expedition to carry a priest.</p>"},
      {id:"without",title:"Communities without a priest",html:"<p>Lay Catholics maintain prayer, catechesis, moral counsel, records, and permitted reserved Communion. They prepare for sacraments during later clerical visits without pretending that a communications link supplies them.</p>"},
      {id:"settlement",title:"From expedition to settlement",html:"<p>A rotating expedition remains a mission. Continuous residents, families, a stable chapel, regular clergy, and permanent records could justify a Martian quasi-parish or parish.</p><p>No agreed year-2000 settlement has yet completed that ecclesiastical transition.</p>"},
      {id:"future",title:"Future diocesan questions",html:"<p>Locally born Catholics, several settlements, native clergy formation, tribunals, cemeteries, and stable transport could eventually require a territorial or personal Martian ordinary of a different kind.</p><p>The apostolic administration is designed to govern the interval without prejudging that future.</p>"}
    ],
    related:[{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Current ordinary",label:"Apostolic Administration"},{href:"interplanetary-clerical-faculties.html",kicker:"Mission authority",label:"Interplanetary Clerical Faculties"},{href:"mature-space-age.html",kicker:"Historical setting",label:"Mature Space Age"},{href:"extraterrestrial-settlement.html",kicker:"Civil threshold",label:"Extraterrestrial Settlement"}],
    facts:[["Practical beginning","1993 German arrival"],["Civil systems by 2000","German, British, and American"],["Ecclesiastical form","Mission jurisdiction"],["Communications","Delayed"],["Priest required on every mission","No"],["First permanent Mars priest","Open"],["Martian parish by 2000","Not established"],["Future diocesan form","Open"]]
  })
});

const spacePastoralAggregate = window.deepArticles["catholic-pastoral-care-in-space"];
if (spacePastoralAggregate && !spacePastoralAggregate.sections.some(section => section.id === "administration")) {
  spacePastoralAggregate.sections.push(
    {id:"administration",title:"From commission to apostolic administration",html:"<p>Paul VI's <a href='pontifical-space-commission.html'>Pontifical Commission for the Pastoral Care of Spacefarers</a> developed the first permanent rules. Under Pius XIII, personal jurisdictions for spacefarers matured into the <a href='apostolic-administration-extraterrestrial-missions.html'>Apostolic Administration for Extraterrestrial Missions</a>.</p><p>The administration follows people and missions rather than claiming celestial territory.</p>"},
    {id:"parish",title:"The first off-world parish",html:"<p>By the millennium, the <a href='parish-our-lady-of-the-moon.html'>Parish of Our Lady of the Moon</a> at Sancta Maria Lunae has a resident priest, church, records, and stable congregation. Rotating orbital communities remain chaplaincies.</p>"},
    {id:"interplanetary",title:"Mars, Ceres, and delayed government",html:"<p><a href='interplanetary-clerical-faculties.html'>Broad mission faculties</a> allow lawful ministry where an ordinary may be months or years away in travel time. <a href='catholic-pastoral-jurisdiction-on-mars.html'>Mars communities</a> remain missions in 2000, while later Ceres travel extends the same law farther outward.</p>"}
  );
  spacePastoralAggregate.related = [...(spacePastoralAggregate.related || []),
    {href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Permanent jurisdiction",label:"Apostolic Administration"},
    {href:"parish-our-lady-of-the-moon.html",kicker:"First off-world parish",label:"Our Lady of the Moon Parish"},
    {href:"sacramental-life-beyond-earth.html",kicker:"Liturgical practice",label:"Sacramental Life Beyond Earth"}
  ];
  spacePastoralAggregate.facts.push(["Mature jurisdiction","Apostolic administration"],["First off-world parish","Our Lady of the Moon"],["Mars status by 2000","Mission jurisdiction"]);
}

const catholicChurchOverview = window.deepArticles["catholic-church"];
if (catholicChurchOverview && !catholicChurchOverview.sections.some(section => section.id === "beyond-earth")) {
  catholicChurchOverview.sections.push({id:"beyond-earth",title:"The Church beyond Earth",html:"<p>Paul VI's space commission and Pius XIII's <a href='apostolic-administration-extraterrestrial-missions.html'>extraterrestrial apostolic administration</a> prevent national station ownership from becoming spiritual jurisdiction. By 2000 rotating orbital chaplaincies coexist with the first permanent <a href='parish-our-lady-of-the-moon.html'>lunar parish</a> and mission law for Mars.</p><p>The expansion preserves rites, home churches, physical sacramental presence, and ecclesiastical independence across the five rival space systems.</p>"});
  catholicChurchOverview.related = [...(catholicChurchOverview.related || []),{href:"catholic-pastoral-care-in-space.html",kicker:"Late-century expansion",label:"Catholic Pastoral Care in Space"},{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Off-world jurisdiction",label:"Apostolic Administration"}];
  catholicChurchOverview.facts.push(["First off-world parish","Our Lady of the Moon · by 2000"]);
}

const piusThirteen = window.deepArticles["pius-xiii"];
if (piusThirteen && !piusThirteen.sections.some(section => section.id === "space-jurisdiction")) {
  piusThirteen.sections.push({id:"space-jurisdiction",title:"Permanent jurisdiction beyond Earth",html:"<p>Pius XIII's wider canonical settlement gives durable form to Paul VI's provisional space practice. A personal <a href='apostolic-administration-extraterrestrial-missions.html'>apostolic administration</a> receives responsibility for spacefarers and settlements not yet capable of ordinary diocesan government.</p><p>The arrangement culminates by 2000 in the first permanently staffed lunar parish. Exact erection dates and the later chronology of Pius XIII's pontificate remain open.</p>"});
  piusThirteen.related = [...(piusThirteen.related || []),{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Canonical development",label:"Apostolic Administration"},{href:"parish-our-lady-of-the-moon.html",kicker:"First parish",label:"Our Lady of the Moon Parish"}];
  piusThirteen.facts.push(["Off-world settlement","Personal apostolic administration"]);
}

const sanctaMaria = window.deepArticles["sancta-maria-lunae"];
if (sanctaMaria && !sanctaMaria.sections.some(section => section.id === "parish")) {
  sanctaMaria.canon = "The Latin name and common English designation, operation by the Latin Space Community, scientific, religious, and strategic character, place among the five lunar systems, participation in the Millennium Lunar Illumination, first permanent off-world priest, and parish under the extraterrestrial apostolic administration are established. Parish form and jurisdiction are a canon consolidation from the mature pastoral framework. Exact site, founding date, architecture, population, command arrangement, parish erection date, pastor, resource works, and local civil law remain open.";
  sanctaMaria.sections.push({id:"parish",title:"Parish and permanent priest",html:"<p>By the millennium Sancta Maria Lunae contains the first permanently staffed <a href='parish-our-lady-of-the-moon.html'>Catholic parish beyond Earth</a>. Its resident priest serves the base under the extraterrestrial apostolic administration rather than an Italian territorial diocese.</p><p>The church's protected Earthrise viewport and stable sacramental register make the establishment a pastoral community rather than a ceremonial chapel.</p>"});
  sanctaMaria.related = [...(sanctaMaria.related || []),{href:"parish-our-lady-of-the-moon.html",kicker:"Resident institution",label:"Parish of Our Lady of the Moon"},{href:"apostolic-administration-extraterrestrial-missions.html",kicker:"Ecclesiastical jurisdiction",label:"Apostolic Administration"}];
  sanctaMaria.facts.push(["Ecclesiastical status","Permanent parish under the extraterrestrial apostolic administration"],["Resident clergy","First permanent off-world Catholic priest"]);
}

const stellaMarisArticle = window.deepArticles["stella-maris"];
if (stellaMarisArticle) {
  stellaMarisArticle.related = [...(stellaMarisArticle.related || []),{href:"orbital-catholic-chaplaincy.html",kicker:"Pastoral institution",label:"Orbital Catholic Chaplaincy"}];
}

const millenniumWorld = window.deepArticles["world-in-2000"];
if (millenniumWorld && !millenniumWorld.sections.some(section => section.id === "church-beyond-earth")) {
  millenniumWorld.sections.push({id:"church-beyond-earth",title:"A transnational Church beyond Earth",html:"<p>The Catholic Church enters the millennium with an <a href='apostolic-administration-extraterrestrial-missions.html'>apostolic administration for extraterrestrial missions</a>, rotating orbital chaplaincies, and the first permanently staffed <a href='parish-our-lady-of-the-moon.html'>lunar parish</a>. Its personal jurisdiction crosses the five space systems without granting Rome or any Catholic state territorial sovereignty.</p>"});
  millenniumWorld.related = [...(millenniumWorld.related || []),{href:"catholic-pastoral-care-in-space.html",kicker:"Religious institution",label:"Catholic Pastoral Care in Space"}];
}
