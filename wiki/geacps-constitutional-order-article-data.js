window.deepArticles = window.deepArticles || {};

const geacpsConstitutionalSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — constitutional order, nationality, and residence"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — differentiated Japanese imperial order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar regularization of Japanese Asia"},
  {href:"../transcript.md",label:"Master Transcript — constitutional hierarchy and associated sovereignty"}
];

const geacpsConstitutionalArticle = config => ({
  category:"Greater East Asia Co-Prosperity Sphere",
  eyebrow:"Constitutional order · Japanese-presided Asia",
  infoboxKicker:"Legal institution of the Co-Prosperity Sphere",
  ...config,
  sources:geacpsConstitutionalSources,
  categories:config.categories || ["GEACPS","Japanese Empire","International law","Nationality"]
});

Object.assign(window.deepArticles, {
  "geacps-status-hierarchy": geacpsConstitutionalArticle({
    title:"Status hierarchy of the Co-Prosperity Sphere",
    eyebrow:"Four-level constitutional order",
    infoboxKicker:"Differentiated membership beneath Japanese primacy",
    lead:"The status hierarchy of the Co-Prosperity Sphere is the four-level order distinguishing Japan's integral territories, principal associated states, protected and dependent members, and external strategic associates. These categories determine nationality, diplomatic voice, defense authority, currency freedom, residence, concessions, and the form in which Japanese supremacy is exercised.",
    canon:"The four practical levels, absence of a single constitution or citizenship, national implementation of common programs, Japanese chairmanship, consensus practice, and reserve supremacy are established. Formal charter language, complete member schedules, admission and withdrawal rules, voting weights, conference procedure, and judicial enforcement remain open.",
    sections:[
      {id:"differentiation",title:"Rule through differentiation",html:"<p>The Sphere is not one empire with a common legal code. Its differences are instruments of rule: direct citizenship where Japan claims incorporation, treaty government where partners possess weight, and protected sovereignty where local institutions reduce administrative cost.</p>"},
      {id:"integral",title:"First level: integral Japan",html:"<p>Korea, Taiwan, Karafuto, older Micronesia, and incorporated Pacific territories belong legally to Japan. Their inhabitants possess Japanese nationality despite cultural difference and unequal assimilation.</p>"},
      {id:"principal",title:"Second level: principal associates",html:"<p>Manchukuo, National China, Thailand, and the Philippines retain the greatest diplomatic weight. Tokyo normally uses treaties, finance, conferences, and negotiated implementation rather than direct administrative orders.</p>"},
      {id:"protected",title:"Third level: protected members",html:"<p>Mongolia, the Russian Far Eastern State, Indochinese kingdoms, East Indian states, Burma, Papua New Guinea, and other members retain sovereign forms while conceding different combinations of defense, alignment, transport, concessions, and arbitration.</p>"},
      {id:"external",title:"Fourth level: external associates",html:"<p>Azad Hind and later Hyderabad cooperate strategically without entering every ordinary Sphere obligation. Their bilateral position prevents the institutional system from swallowing locally essential alliances.</p>"},
      {id:"conferences",title:"Conferences and implementation",html:"<p>Sphere meetings seek consensus and issue common programs. National governments give them domestic legal force through their own ministries, laws, budgets, and courts.</p>"},
      {id:"reserve",title:"Japanese reserve supremacy",html:"<p>Japan controls the military ceiling, key finance, shipping, strategic transport, advanced machinery, and final arbitration. Tokyo prefers not to invoke this reserve openly because procedural normality is cheaper than command.</p>"},
      {id:"mature",title:"The mature constitutional fiction",html:"<p>Every member is described through its own lawful relationship rather than as a colony. The hierarchy is real precisely because equality is never promised in one justiciable charter.</p>"}
    ],
    related:[{href:"geacps.html",kicker:"Organization",label:"Greater East Asia Co-Prosperity Sphere"},{href:"integral-territories-japan.html",kicker:"First level",label:"Integral Territories of Japan"},{href:"principal-associated-states-geacps.html",kicker:"Second level",label:"Principal Associated States"},{href:"protected-dependent-members-geacps.html",kicker:"Third level",label:"Protected and Dependent Members"},{href:"external-strategic-associates-geacps.html",kicker:"Fourth level",label:"External Strategic Associates"},{href:"japanese-reserve-supremacy.html",kicker:"Controlling doctrine",label:"Japanese Reserve Supremacy"}],
    facts:[["Practical levels","Four"],["Common constitution","None"],["Common citizenship","None"],["Chairing power","Empire of Japan"],["Ordinary conference method","Consensus"],["Domestic implementation","Through national law"],["Ultimate strategic authority","Japan"],["Formal membership and voting charter","Open"]]
  }),

  "integral-territories-japan": geacpsConstitutionalArticle({
    title:"Integral territories of Japan",
    eyebrow:"First constitutional level · Japanese nationality",
    infoboxKicker:"Territories legally incorporated into the Empire of Japan",
    lead:"The integral territories of Japan are Korea, Taiwan, Karafuto, the older Micronesian possessions, and later incorporated Pacific territories whose inhabitants possess Japanese nationality. Regional identities remain ethnic, linguistic, cultural, and administrative identities inside Japan rather than foreign citizenships or associated-state sovereignty.",
    canon:"Integral status for Korea, Taiwan, Karafuto, older Micronesia, and later incorporated islands; Japanese nationality; absence of sovereign membership; cultural identities within public law; unequal assimilation; and direct strategic government are established. The complete incorporated-island list, dates, representation, local-government statutes, voting law, and later autonomy schedules remain open.",
    sections:[
      {id:"definition",title:"Definition",html:"<p>Integral territory is legally Japanese soil rather than a protected foreign state. Its inhabitants stand inside Japanese nationality law and imperial institutions even where metropolitan equality is incomplete.</p>"},
      {id:"territories",title:"Territorial composition",html:"<p>Korea, Taiwan, Karafuto, the older mandated Micronesian islands, and selected later Pacific incorporations form the principal non-metropolitan integral territories.</p>"},
      {id:"nationality",title:"Japanese nationality",html:"<p>Birth and descent operate through Japanese civil law. Koreans and Taiwanese are not treaty foreigners merely because they possess distinct language or ancestry.</p>"},
      {id:"culture",title:"Cultural nationality",html:"<p>Korean, Taiwanese, Ryukyuan, Karafuto, Micronesian, and other identities survive as regional cultures, household languages, religious traditions, and preservation movements within Japan.</p>"},
      {id:"inequality",title:"Unequal assimilation",html:"<p>Shared nationality does not guarantee equal access, treatment, language, schooling, office, or metropolitan residence. Discrimination and coercive assimilation coexist with formal incorporation.</p>"},
      {id:"government",title:"Government and representation",html:"<p>Japanese ministries, prefectural or territorial administrations, courts, schools, police, military systems, and corporate networks exercise direct authority. Exact local forms vary and remain partly open.</p>"},
      {id:"contrast",title:"Contrast with associated states",html:"<p>Manchukuoans, Chinese, Thais, and Filipinos retain foreign nationalities and treaty governments. An integral subject cannot claim that same external sovereignty without challenging incorporation itself.</p>"},
      {id:"politics",title:"Politics of preservation",html:"<p>Late cultural preservation policy may recognize scripts, archives, festivals, or regional history. It does not convert cultural nationality into a legal right to secession.</p>"}
    ],
    related:[{href:"japan.html",kicker:"Sovereign state",label:"Empire of Japan"},{href:"korea.html",kicker:"Integral region",label:"Chōsen"},{href:"taiwan.html",kicker:"Integral region",label:"Taiwan"},{href:"nationality-geacps.html",kicker:"Nationality law",label:"Nationality in the Co-Prosperity Sphere"},{href:"geacps-status-hierarchy.html",kicker:"Wider hierarchy",label:"Sphere Status Hierarchy"}],
    facts:[["Constitutional level","Integral Japan"],["Nationality","Japanese"],["Principal territories","Korea, Taiwan, Karafuto, older Micronesia, and incorporated Pacific islands"],["Foreign sovereignty","None"],["Cultural identities","Recognized unevenly within Japan"],["Strategic authority","Direct Japanese control"],["Equal metropolitan treatment","Not guaranteed"],["Complete incorporation and representation schedules","Open"]]
  }),

  "principal-associated-states-geacps": geacpsConstitutionalArticle({
    title:"Principal associated states of the Co-Prosperity Sphere",
    eyebrow:"Second constitutional level · negotiated implementation",
    infoboxKicker:"The four most influential sovereign associates",
    lead:"The principal associated states are Manchukuo, the National Government of China, Thailand, and the Philippines. Each possesses national citizenship, institutions, armed forces, currency, and diplomatic standing while accepting Japanese strategic supremacy. Their weight makes treaty, finance, conferences, and negotiated implementation the normal instruments of control.",
    canon:"The four principal associates, their superior diplomatic weight among members, national institutions and currencies, Japanese military supremacy, negotiated implementation, and unequal bilateral treaties are established. Formal collective title, ranking among the four, voting rights, treaty texts, defense schedules, and later membership changes remain open.",
    sections:[
      {id:"members",title:"The four associates",html:"<p>Manchukuo contributes northern industry, China population and civilizational weight, Thailand mainland military autonomy, and the Philippines maritime legitimacy and strategic position.</p>"},
      {id:"sovereignty",title:"National sovereignty",html:"<p>Each retains its flag, ruler or government, nationality, civil law, currency, ministries, and local armed forces. These are real institutions operating beneath an unequal strategic ceiling.</p>"},
      {id:"treaty",title:"Treaty government",html:"<p>Tokyo uses defense treaties, credits, conferences, industrial agreements, military missions, and recognition. Direct orders are avoided when a national government can enact the desired policy itself.</p>"},
      {id:"differences",title:"Different sources of leverage",html:"<p>Manchukuo bargains through industrial indispensability, China through scale, Thailand through army and currency autonomy, and the Philippines through maritime position and the political cost of renewed coercion.</p>"},
      {id:"military",title:"Military ceiling",html:"<p>National forces conduct ordinary defense and internal security. Japan controls advanced systems, strategic alignment, major war planning, and final escalation.</p>"},
      {id:"economy",title:"Currencies and corporate penetration",html:"<p>Associated currencies and national firms survive. Japanese finance, technology, shipping, standards, and corporate houses constrain how independently those systems can operate.</p>"},
      {id:"conferences",title:"Conference politics",html:"<p>Principal associates can delay, coordinate, demand compensation, and make implementation politically expensive. They cannot transform consultation into equality with Japan.</p>"},
      {id:"contrast",title:"Contrast with protected members",html:"<p>Protected states retain sovereign forms but usually possess less military, financial, or administrative capacity to force Tokyo into genuine bargaining.</p>"}
    ],
    related:[{href:"manchukuo.html",kicker:"Northern associate",label:"Manchukuo"},{href:"china.html",kicker:"Continental associate",label:"National Government of China"},{href:"thailand.html",kicker:"Mainland associate",label:"Kingdom of Thailand"},{href:"philippines.html",kicker:"Maritime associate",label:"Philippine Republic"},{href:"geacps-status-hierarchy.html",kicker:"Wider hierarchy",label:"Sphere Status Hierarchy"},{href:"japanese-reserve-supremacy.html",kicker:"Strategic limit",label:"Japanese Reserve Supremacy"}],
    facts:[["Members","Manchukuo, National China, Thailand, and the Philippines"],["Constitutional level","Principal associates"],["Nationality","National, not Japanese"],["Government","Domestic sovereign institutions"],["Normal Japanese method","Treaty and negotiated implementation"],["Military equality with Japan","No"],["Collective diplomatic weight","Highest among associated states"],["Formal ranking and voting rules","Open"]]
  }),

  "protected-dependent-members-geacps": geacpsConstitutionalArticle({
    title:"Protected and dependent members of the Co-Prosperity Sphere",
    eyebrow:"Third constitutional level · unequal protected sovereignty",
    infoboxKicker:"Local statehood with reserved strategic functions",
    lead:"Protected and dependent members are the monarchies, republics, federations, and regional states that retain sovereignty in form and varying degrees of domestic substance while conceding defense, foreign alignment, strategic transport, concessions, heavy weapons, or final arbitration to Japan or an authorized protecting associate.",
    canon:"This third practical level; inclusion of Mongolia, the Russian Far Eastern State, Indochinese kingdoms, East Indian states, Burma, Papua New Guinea, and other members; unequal concessions; national citizenship; and reserved strategic authority are established. Complete schedules, standard treaty form, legal title, accession dates, withdrawal rules, and exact reserved powers by member remain open.",
    sections:[
      {id:"members",title:"A diverse category",html:"<p>The level includes states with monarchs, parliaments, military guardians, constituent governments, corporate concessions, and protectorate arrangements. Shared weakness does not make their constitutions identical.</p>"},
      {id:"domestic",title:"Domestic substance",html:"<p>Members commonly retain flags, nationality, ordinary law, education, culture, taxation, local police, ministries, and some armed forces. The degree of practical authority differs sharply.</p>"},
      {id:"reserved",title:"Reserved strategic fields",html:"<p>Defense, foreign alignment, bases, heavy weapons, ports, rail corridors, resource concessions, communications, or final arbitration may be placed outside ordinary national control.</p>"},
      {id:"protectors",title:"Layered protection",html:"<p>Japan may govern directly through treaty or authorize Thailand to protect Malaya and later Burma. Delegated protection remains nested beneath Japanese guarantee.</p>"},
      {id:"corporate",title:"Corporate constraint",html:"<p>Japanese concessions may operate infrastructure that the host state cannot replace. Regulation therefore risks becoming a dispute over the continuity of public services and strategic supply.</p>"},
      {id:"voice",title:"Diplomatic voice",html:"<p>Protected members participate in conferences and common programs but possess less ability than principal associates to delay policy or demand compensation.</p>"},
      {id:"variation",title:"Variation inside the level",html:"<p>Mongolia's federal monarchy, Vietnam's large protected kingdom, East Indian concession states, Papua New Guinea's regional federation, and Burma's armed federalism all embody different bargains.</p>"},
      {id:"sovereignty",title:"The sovereignty problem",html:"<p>The states are not administrative provinces. Their sovereignty is real in ordinary fields and deliberately incomplete where Japan defines the strategic interest.</p>"}
    ],
    related:[{href:"geacps-status-hierarchy.html",kicker:"Wider hierarchy",label:"Sphere Status Hierarchy"},{href:"united-mongolian-state.html",kicker:"Protected monarchy",label:"United Mongolian State"},{href:"indochina.html",kicker:"Protected kingdoms",label:"Mekong States"},{href:"east-indies-successor-states.html",kicker:"Concession states",label:"Southern Archipelago States"},{href:"burma.html",kicker:"Protected federation",label:"Union of Burma"},{href:"papua-new-guinea.html",kicker:"Pacific member",label:"Papua New Guinea"}],
    facts:[["Constitutional level","Protected and dependent members"],["Nationality","National"],["Domestic sovereignty","Variable but substantive"],["Common concessions","Defense, alignment, transport, concessions, and arbitration"],["Ultimate guarantor","Empire of Japan"],["Authorized secondary protector","Thailand in Malaya and Burma"],["Uniform constitution","None"],["Complete member and treaty schedules","Open"]]
  }),

  "external-strategic-associates-geacps": geacpsConstitutionalArticle({
    title:"External strategic associates of the Co-Prosperity Sphere",
    eyebrow:"Fourth constitutional level · bilateral strategic partnership",
    infoboxKicker:"Essential partners outside ordinary Sphere obligations",
    lead:"External strategic associates are governments bound to Japan by indispensable bilateral military, economic, or geopolitical agreements while remaining outside the Sphere's ordinary institutional obligations. Azad Hind is the defining example; Hyderabad enters a separate Japanese association after the Tehran Concord.",
    canon:"The fourth practical level, Azad Hind's external position, Hyderabad's later separate association, bilateral rather than ordinary membership, national sovereignty, limited common obligations, and strategic indispensability are established. Formal class name, treaty texts, representation, financial rules, defense clauses, accession procedure, and later associates remain open.",
    sections:[
      {id:"purpose",title:"Purpose of the category",html:"<p>Some alliances are too important to lose and too politically distinct to place inside the standard member hierarchy. Bilateral association preserves cooperation without implying institutional absorption.</p>"},
      {id:"azad",title:"Azad Hind",html:"<p>Azad Hind blocks the eastern Indian frontier and sustains a pan-Indian liberation claim. It refuses obligations that would subordinate its unfinished national war to every Sphere member's defense.</p>"},
      {id:"hyderabad",title:"Hyderabad",html:"<p>After the Tehran Concord, Hyderabad gains separate Japanese association as a princely and commercial partner. It does not become subordinate to Azad Hind.</p>"},
      {id:"bilateral",title:"Bilateral instruments",html:"<p>Defense supply, finance, recognition, technical missions, transit, concessions, and intelligence are negotiated through specific agreements rather than a complete Sphere charter.</p>"},
      {id:"nationality",title:"Nationality and institutions",html:"<p>Citizens remain nationals of their own states. Domestic governments, currencies, armies, and claims are not converted into protected-member institutions merely by strategic cooperation.</p>"},
      {id:"obligations",title:"Limited obligations",html:"<p>External associates may refuse common programs or conflicts beyond the bilateral purpose. Japan likewise avoids guaranteeing every domestic or territorial claim.</p>"},
      {id:"leverage",title:"Sources of leverage",html:"<p>Their geographic position and ability to deny a rival continental consolidation make these partners valuable enough to bargain despite institutional distance.</p>"},
      {id:"ambiguity",title:"Deliberate ambiguity",html:"<p>Japanese diplomacy may describe them as members for prestige and as external partners when liability is at issue. The ambiguity is part of the system rather than an error.</p>"}
    ],
    related:[{href:"azad-hind.html",kicker:"Defining associate",label:"Azad Hind"},{href:"hyderabad.html",kicker:"Later associate",label:"Hyderabad"},{href:"tehran-concord.html",kicker:"Hyderabadi instrument",label:"Tehran Concord"},{href:"geacps-status-hierarchy.html",kicker:"Wider hierarchy",label:"Sphere Status Hierarchy"},{href:"japanese-reserve-supremacy.html",kicker:"Japanese strategic authority",label:"Japanese Reserve Supremacy"}],
    facts:[["Constitutional level","External strategic associates"],["Defining member","Azad Hind"],["Later associate","Hyderabad"],["Relationship","Bilateral strategic association"],["Ordinary Sphere obligations","Limited or absent"],["Nationality","National"],["Subordination of Hyderabad to Azad Hind","None"],["Formal class title and treaty schedules","Open"]]
  }),

  "nationality-geacps": geacpsConstitutionalArticle({
    title:"Nationality in the Co-Prosperity Sphere",
    eyebrow:"Citizenship law · inherited national membership",
    infoboxKicker:"Many nationalities without Sphere citizenship",
    lead:"Nationality in the Co-Prosperity Sphere remains attached to Japan or to an individual member state. There is no common Co-Prosperity citizenship. Birth or residence elsewhere in the Sphere does not ordinarily naturalize a person, dual nationality is usually rejected, and descent—commonly paternal under prevailing civil codes—remains the principal rule.",
    canon:"Absence of common citizenship, inherited nationality, ordinary paternal descent, rejection of automatic birthright naturalization and dual nationality, continued nationality during residence abroad, exceptional formal naturalization, integral Japanese citizenship, and the Home and Return Mandate are established. Complete national statutes, gender reforms, mixed-marriage rules, foundling law, military consequences, and post-1985 amendments remain open.",
    sections:[
      {id:"no-common",title:"No Sphere citizenship",html:"<p>Membership of a state in the Japanese order gives its nationals treaty rights and restrictions, not one supranational passport or political membership.</p>"},
      {id:"descent",title:"Descent and inheritance",html:"<p>Nationality normally follows descent and commonly the father under mid-century civil codes. Birth on another member's soil does not by itself displace inherited membership.</p>"},
      {id:"residence",title:"Residence abroad",html:"<p>A Japanese settler in Manchukuo remains Japanese. A Manchukuoan family in Osaka remains Manchukuoan unless admitted through exceptional formal naturalization.</p>"},
      {id:"dual",title:"Dual nationality",html:"<p>Most states reject or tightly restrict dual status because conscription, diplomacy, property, political loyalty, and return rights depend upon a single national home.</p>"},
      {id:"integral",title:"Integral Japanese subjects",html:"<p>Koreans, Taiwanese, Karafuto residents, and incorporated islanders possess Japanese nationality. Their regional identities do not constitute foreign citizenship.</p>"},
      {id:"associated",title:"Nationals of associated states",html:"<p>Manchukuoans, Chinese, Thais, Filipinos, Vietnamese, Cambodians, Lao, Burmese, Papuans, and others remain citizens of their own governments even when Japanese strategy limits those states.</p>"},
      {id:"return",title:"National Home and Return Mandate",html:"<p>The early-1980s mandate guarantees inherited nationals a route back to their state of nationality, assisted settlement, and recognition of education or professional credentials without creating shared citizenship.</p>"},
      {id:"politics",title:"Political consequences",html:"<p>Nationality allocates voting, conscription, protection, diplomatic claims, school access, property rights, and the place to which a government may insist a displaced person belongs.</p>"}
    ],
    related:[{href:"integral-territories-japan.html",kicker:"Japanese citizenship",label:"Integral Territories of Japan"},{href:"treaty-residence-geacps.html",kicker:"Cross-border domicile",label:"Treaty Residence in the Sphere"},{href:"home-return-mandate.html",kicker:"Return right",label:"National Home and Return Mandate"},{href:"geacps-status-hierarchy.html",kicker:"Constitutional context",label:"Sphere Status Hierarchy"},{href:"korean-language.html",kicker:"Cultural nationality case",label:"Korean Language"}],
    facts:[["Common Sphere citizenship","None"],["Principal rule","Inherited nationality"],["Common descent model","Paternal under prevailing civil codes"],["Birthright naturalization abroad","Normally absent"],["Dual nationality","Normally rejected"],["Integral Korean and Taiwanese status","Japanese nationality"],["Return guarantee","National Home and Return Mandate"],["Complete national statutes","Open"]]
  }),

  "treaty-residence-geacps": geacpsConstitutionalArticle({
    title:"Treaty residence in the Co-Prosperity Sphere",
    eyebrow:"Cross-border domicile · rights without citizenship",
    infoboxKicker:"Residence status for foreign nationals inside member states",
    lead:"Treaty residence is the legal status through which a national of one Co-Prosperity state may work, maintain permanent domicile, hold restricted property, use courts, and attend designated schools in another member without voting or becoming a citizen. It permits an integrated labor and commercial system without common nationality.",
    canon:"Permanent treaty residence, work rights, restricted property, court access, designated schooling, exclusion from voting, continued foreign nationality, and exceptional naturalization systems in Vladivostok and Singapore are established. Permit classes, fees, sponsor rules, deportation standards, family rights, property schedules, labor protections, and treaty texts remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Japanese companies, ports, railways, schools, armies, and development projects require long-term cross-border movement. Citizenship law remains too rigid to absorb every worker, merchant, technician, or family.</p>"},
      {id:"rights",title:"Ordinary rights",html:"<p>Treaty residents may work in approved fields, maintain domicile, use courts, attend designated schools, hold restricted property, and participate in commercial life according to bilateral schedules.</p>"},
      {id:"limits",title:"Political limits",html:"<p>Residence does not normally confer voting, unrestricted landholding, public office, diplomatic identity, military exemption, or a claim that the host state is the resident's national home.</p>"},
      {id:"status",title:"Continued nationality",html:"<p>The resident remains a national of the home state for protection, passports, descent, conscription questions, and the Home and Return Mandate.</p>"},
      {id:"companies",title:"Company-sponsored residence",html:"<p>Japanese and associated-state firms sponsor managers, technicians, railway workers, merchants, teachers, and families along concession corridors. Employment and domicile can consequently become dependent upon the sponsor.</p>"},
      {id:"vladivostok",title:"Vladivostok exception",html:"<p>Vladivostok or Urajio permits selective civic naturalization, commonly after five years, for skilled, useful, and politically trusted residents whose permanent attachment serves the port state.</p>"},
      {id:"singapore",title:"Singapore exception",html:"<p>Singapore operates broader commercial naturalization because rigid inherited communities cannot supply the flexible citizenship required by a multinational entrepôt.</p>"},
      {id:"tensions",title:"Social and legal tensions",html:"<p>Long-resident families may speak the host language, own businesses, and know no other home while remaining politically foreign. The system values mobility without accepting territorial belonging as citizenship.</p>"}
    ],
    related:[{href:"nationality-geacps.html",kicker:"Home nationality",label:"Nationality in the Sphere"},{href:"home-return-mandate.html",kicker:"Return protection",label:"National Home and Return Mandate"},{href:"vladivostok.html",kicker:"Selective naturalization",label:"Vladivostok / Urajio"},{href:"singapore.html",kicker:"Commercial naturalization",label:"Singapore"},{href:"corporate-host-bargain.html",kicker:"Company context",label:"Corporate-Host Bargain"}],
    facts:[["Status","Permanent foreign residence"],["Typical rights","Work, domicile, courts, designated schools, and restricted property"],["Voting","Normally prohibited"],["Nationality retained","Home-state nationality"],["Automatic naturalization","None"],["Selective exception","Vladivostok / Urajio"],["Commercial exception","Singapore"],["Permit classes and treaty schedules","Open"]]
  }),

  "japanese-reserve-supremacy": geacpsConstitutionalArticle({
    title:"Japanese reserve supremacy",
    eyebrow:"Strategic doctrine · final authority within the Sphere",
    infoboxKicker:"Japanese power held behind negotiated institutions",
    lead:"Japanese reserve supremacy is the constitutional and strategic doctrine that Japan possesses final authority over the Co-Prosperity Sphere's military ceiling, alignment, strategic transport, advanced machinery, shipping, financial clearing, and arbitration while normally permitting member governments to implement common policy through their own law.",
    canon:"Japanese chairmanship, control of the military ceiling, finance, transport, machinery, shipping, and final arbitration; preference for consensus and negotiated implementation; unequal ability of states to bargain; and selective open intervention are established. Formal legal source, certification procedure, cabinet authority, military command chain, review, compensation rules, and complete precedents remain open.",
    sections:[
      {id:"meaning",title:"Meaning",html:"<p>Reserve supremacy is not continuous direct administration. It is the ability to decide which outcomes cannot be permitted after ordinary treaty, financial, corporate, and conference mechanisms fail.</p>"},
      {id:"military",title:"Military ceiling",html:"<p>Japan controls access to advanced weapons, strategic aviation, key naval systems, heavy-force sustainment, and the escalation of conflicts that might involve rival great powers.</p>"},
      {id:"transport",title:"Transport and communications",html:"<p>Shipping, ports, principal rail corridors, bases, launch sites, communications, and fuel networks give Tokyo practical power over movement even where infrastructure is nationally flagged.</p>"},
      {id:"finance",title:"Finance and machinery",html:"<p>Clearing, credit, approved redemption, patents, machine tools, components, training, and industrial standards make strategic independence difficult without a visible coercive order.</p>"},
      {id:"arbitration",title:"Final arbitration",html:"<p>Japan settles disputes that threaten the integrity of the Sphere, including borders, protectorates, concessions, military alignments, and collapses that national institutions cannot contain.</p>"},
      {id:"restraint",title:"Preference for restraint",html:"<p>Open command damages the claim that the Sphere is an association of nations. Tokyo therefore seeks consensus, compensation, delay, national legislation, and face-saving exits before invoking supremacy.</p>"},
      {id:"bargaining",title:"Unequal bargaining",html:"<p>Thailand, China, Manchukuo, and the Philippines can impose greater political and economic cost than smaller protected states. Reserve authority is constant; the price of using it varies.</p>"},
      {id:"legitimacy",title:"Procedural legitimacy",html:"<p>The mature order succeeds when Japanese primacy appears useful, predictable, technically mediated, and rarely exceptional. The reserve remains most effective when it is visible but unused.</p>"}
    ],
    related:[{href:"geacps-status-hierarchy.html",kicker:"Constitutional setting",label:"Sphere Status Hierarchy"},{href:"principal-associated-states-geacps.html",kicker:"Strongest negotiators",label:"Principal Associated States"},{href:"protected-dependent-members-geacps.html",kicker:"Protected members",label:"Protected and Dependent Members"},{href:"japanese-imperial-economic-system.html",kicker:"Financial machinery",label:"Japanese Imperial Economic System"},{href:"greater-east-asia-economic-board.html",kicker:"Conference machinery",label:"Greater East Asia Economic Board"},{href:"japan.html",kicker:"Presiding power",label:"Empire of Japan"}],
    facts:[["Holder","Empire of Japan"],["Military authority","Strategic ceiling and escalation"],["Economic instruments","Clearing, credit, machinery, shipping, and standards"],["Infrastructure instruments","Ports, corridors, bases, and communications"],["Political instrument","Final arbitration"],["Preferred method","Consensus and national implementation"],["Open invocation","Exceptional"],["Formal legal and review procedure","Open"]]
  })
});

const addGeacpsConstitutionalRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []), ...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addGeacpsConstitutionalRelated("geacps",[{href:"geacps-status-hierarchy.html",kicker:"Constitutional structure",label:"Sphere Status Hierarchy"},{href:"nationality-geacps.html",kicker:"Citizenship law",label:"Nationality in the Sphere"},{href:"treaty-residence-geacps.html",kicker:"Cross-border domicile",label:"Treaty Residence"},{href:"japanese-reserve-supremacy.html",kicker:"Final authority",label:"Japanese Reserve Supremacy"}]);
addGeacpsConstitutionalRelated("japan",[{href:"integral-territories-japan.html",kicker:"Imperial territory",label:"Integral Territories of Japan"},{href:"japanese-reserve-supremacy.html",kicker:"Sphere doctrine",label:"Japanese Reserve Supremacy"}]);
addGeacpsConstitutionalRelated("korea",[{href:"integral-territories-japan.html",kicker:"Constitutional status",label:"Integral Territories of Japan"},{href:"nationality-geacps.html",kicker:"Public nationality",label:"Nationality in the Sphere"}]);
addGeacpsConstitutionalRelated("taiwan",[{href:"integral-territories-japan.html",kicker:"Constitutional status",label:"Integral Territories of Japan"},{href:"nationality-geacps.html",kicker:"Public nationality",label:"Nationality in the Sphere"}]);
addGeacpsConstitutionalRelated("manchukuo",[{href:"principal-associated-states-geacps.html",kicker:"Sphere status",label:"Principal Associated States"},{href:"treaty-residence-geacps.html",kicker:"Japanese settlement status",label:"Treaty Residence"}]);
addGeacpsConstitutionalRelated("china",[{href:"principal-associated-states-geacps.html",kicker:"Sphere status",label:"Principal Associated States"},{href:"japanese-reserve-supremacy.html",kicker:"Strategic limit",label:"Japanese Reserve Supremacy"}]);
addGeacpsConstitutionalRelated("thailand",[{href:"principal-associated-states-geacps.html",kicker:"Sphere status",label:"Principal Associated States"},{href:"japanese-reserve-supremacy.html",kicker:"Strategic limit",label:"Japanese Reserve Supremacy"}]);
addGeacpsConstitutionalRelated("philippines",[{href:"principal-associated-states-geacps.html",kicker:"Sphere status",label:"Principal Associated States"},{href:"nationality-geacps.html",kicker:"National citizenship",label:"Nationality in the Sphere"}]);
addGeacpsConstitutionalRelated("home-return-mandate",[{href:"nationality-geacps.html",kicker:"Legal foundation",label:"Nationality in the Sphere"},{href:"treaty-residence-geacps.html",kicker:"Residence context",label:"Treaty Residence"}]);
