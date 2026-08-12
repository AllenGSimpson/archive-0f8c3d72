window.deepArticles = window.deepArticles || {};

const americanDomesticSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — family order and the Columbia Generation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American social and economic chronology"},
  {href:"../transcript.md",label:"Master Transcript — women, work, marriage, divorce, and domestic modernization"},
  {href:"../materialCultureReference%20-%20AltWWII.md",label:"Material Culture Reference — households, appliances, communications, and computing"}
];

const americanDomesticLandscape = {
  src:"assets/diagrams/american-domestic-order.svg",
  alt:"Diagram connecting the American household to paid work, local institutions, law, technology, and the Columbia Generation",
  caption:"The durable household is simultaneously a family, productive unit, legal dependency, civic institution, and site of generational pressure"
};

const americanDomesticArticle = config => ({
  category:config.category || "American society",
  eyebrow:config.eyebrow || "United States · family and social history",
  infoboxKicker:config.infoboxKicker || "American domestic system",
  landscape:americanDomesticLandscape,
  ...config,
  sources:americanDomesticSources,
  categories:config.categories || ["United States","American social history","Family","Women and work"]
});

Object.assign(window.deepArticles, {
  "american-domestic-order": americanDomesticArticle({
    title:"American domestic order",infoboxKicker:"Late-century family system",
    lead:"The American domestic order is the technologically modern but unusually durable breadwinner–homemaker family culture that persists through the late twentieth century. Higher fertility, stronger marriage, lower divorce, nearby relatives, local institutions, and household production distinguish it from the historical postwar United States without freezing domestic life in the 1910s or removing women from education, professions, politics, or paid work.",
    canon:"The absence of mass wartime mobilization and a comparable GI Bill, smoother fertility history, stronger marriage and local continuity, smaller feminist mainstream, homemaking as the ordinary married-mother course, working participation estimates, cottage-industry revival, and Columbia Generation tension are established. Census totals, state-by-state family law, named advocacy organizations, tax schedules, benefit formulas, and a single official doctrine are not established.",
    sections:[
      {id:"origins",title:"Origins outside a victory society",html:`<p>Neutrality denies America the shared military generation, universal factory mobilization, and mass veteran-university transition that reordered historical postwar family and professional life. Prosperity still arrives, but later and through a less geographically uprooted society.</p>`},
      {id:"ideal",title:"The social median",html:`<p>The culturally normal household expects a male family wage, a mother principally responsible for children and domestic coordination, and help from relatives, churches, schools, and neighbors. This is a median and an ideal, not a description of every household.</p><p>Unmarried women, widows, separated women, professionals, and families requiring another income remain economically visible.</p>`},
      {id:"modern",title:"Modern homes, continuing households",html:`<p>Appliances, automobiles, telephones, television, parcel service, and personal computers transform domestic work. They do not automatically turn the home into an empty dormitory for two full-time wage earners.</p><p><a href="domestic-modernization-united-states.html">Domestic modernization</a> releases time for education, elder care, civic organization, household accounts, and enterprise.</p>`},
      {id:"work",title:"Women and paid work",html:`<p><a href="women-paid-work-united-states.html">Female employment</a> expands in teaching, medicine, clerical work, law, accounting, science, programming, business, and other fields. The decisive difference is that permanent full-time employment among married mothers of young children remains uncommon.</p>`},
      {id:"law",title:"Marriage, law, and dependence",html:`<p><a href="marriage-divorce-united-states.html">Marriage and divorce law</a> remain state matters. The no-fault revolution largely fails, producing fewer broken households and leaving some people longer in unhappy, coercive, or abusive marriages.</p>`},
      {id:"politics",title:"Competing women's politics",html:`<p>Professional equality, household dignity, and radical feminism form distinct <a href="american-womens-rights-movements.html">women's-rights currents</a>. No movement acquires an uncontested right to define the ordinary woman's life.</p>`},
      {id:"local",title:"Local continuity and social pressure",html:`<p>Older neighborhoods, small towns, streetcar suburbs, family property, churches, and local businesses retain more continuity. Relatives and neighbors can provide childcare, credit, warning, and intervention; they can also watch, shame, and restrict an unconventional spouse or daughter.</p>`},
      {id:"generation",title:"The Columbia question",html:`<p>The <a href="columbia-generation.html">Columbia Generation</a> is less shaped by parental absence than by assigned vocation. Its question is whether domestic order is a meaningful inheritance freely embraced or a good made unjust when it becomes the only morally imaginable life.</p>`}
    ],
    related:[{href:"women-paid-work-united-states.html",kicker:"Economic participation",label:"Women and Paid Work"},{href:"american-womens-rights-movements.html",kicker:"Political dispute",label:"American Women's-Rights Movements"},{href:"marriage-divorce-united-states.html",kicker:"Legal structure",label:"Marriage and Divorce"},{href:"domestic-modernization-united-states.html",kicker:"Material change",label:"Domestic Modernization"},{href:"columbia-generation.html",kicker:"Generational consequence",label:"Columbia Generation"}],
    facts:[["Broad period","1947–1985"],["Typical ideal","Breadwinner–homemaker household"],["Material character","Technologically modern"],["Divorce","Legal but less common and less neutral"],["Household production","Substantial"],["Feminist mainstream","Smaller and divided"],["Principal generational tension","Inheritance versus prescribed vocation"]]
  }),

  "women-paid-work-united-states": americanDomesticArticle({
    title:"Women and paid work in the United States",category:"Labor history",infoboxKicker:"Employment and household economy",
    lead:"Women and paid work in the United States describes an economy in which women remain essential teachers, nurses, clerks, professionals, proprietors, technicians, family workers, and home producers without the historical mass movement of married mothers with young children into permanent full-time employment. A woman need not hold a career to be treated as a socially adult or economically consequential person, though that ideal can conceal dependency and unpaid labor.",
    canon:"A working 1980 female labor-force participation estimate of 36–40 percent, a 10–18 percent estimate for married mothers of preschool children, the characteristic life-course pattern, professional visibility, part-time and family work, and undercounted home enterprise are established as setting estimates. Exact official statistics, occupation tables, wage gaps, federal law, childcare provision, marriage bars, and state variation remain open.",
    sections:[
      {id:"estimate",title:"The working estimates",html:`<p>Female labor-force participation in 1980 is estimated at 36–40 percent. Among married mothers of preschool children it is nearer 10–18 percent, much of it part-time, seasonal, family-based, professional, or driven by clear necessity.</p><p>These are working setting estimates rather than fixed census returns.</p>`},
      {id:"course",title:"The ordinary life course",html:`<p>A young unmarried woman may work; marriage need not end employment immediately; childbirth usually does; and a mother may return part-time or professionally as children grow older. A household requiring two full-time incomes is commonly regarded as economically unfortunate rather than aspirationally modern.</p>`},
      {id:"occupations",title:"Occupations and vocation",html:`<p>Teaching, nursing, clerical work, bookkeeping, medicine, law, science, programming, accounting, aviation, management, and ownership remain open to varying degrees. Professional women defend their work through demonstrated competence and personal vocation more often than through a claim that all female life should be organized around employment.</p>`},
      {id:"hidden",title:"Hidden economic activity",html:`<p>Family-business accounts, parish administration, tutoring, seasonal work, household production, mail order, insurance, tax service, publishing, and software may be recorded as self-employment, family assistance, or supplemental income. Labor statistics therefore understate women's production.</p>`},
      {id:"computer",title:"The household computer",html:`<p>Accounts, inventory, correspondence, typesetting, lessons, sales, software, and scheduling make the personal computer a mother's business instrument as readily as a child's game machine or a father's engineering terminal.</p>`},
      {id:"security",title:"Security and dependence",html:`<p>Household income, property, pension rights, and a spouse's conduct matter more when outside employment is not the social default. Family advocates seek duties from husbands, employers, communities, and the state; critics answer that promised duty does not equal independently enforceable power.</p>`},
      {id:"choice",title:"Choice under a strong norm",html:`<p>The system permits varied lives but rewards them unequally. A homemaker can exercise real authority and productive skill. A woman with an unconventional vocation may still need to prove that her exception is genuine in a way an otherwise similar man does not.</p>`},
      {id:"legacy",title:"Economic legacy",html:`<p>The pattern supports the <a href="american-cottage-industry-revival.html">cottage-industry revival</a> and makes household purchasing, small-business software, parcel services, and local credit central late-century markets.</p>`}
    ],
    related:[{href:"american-domestic-order.html",kicker:"Social setting",label:"American Domestic Order"},{href:"american-cottage-industry-revival.html",kicker:"Home production",label:"American Cottage-Industry Revival"},{href:"american-womens-rights-movements.html",kicker:"Political contest",label:"American Women's-Rights Movements"},{href:"domestic-modernization-united-states.html",kicker:"Technical setting",label:"Domestic Modernization"},{href:"platform-society.html",kicker:"Computing market",label:"Platform Society"}],
    facts:[["Female participation, 1980","36–40% · working estimate"],["Married mothers of preschool children","10–18% · working estimate"],["Common forms","Part-time · professional · family · home-based"],["Two-career marriage","Present, not social median"],["Household enterprise","Economically significant"],["Exact official statistics","Open"]]
  }),

  "american-womens-rights-movements": americanDomesticArticle({
    title:"American women's-rights movements",category:"Political movements",infoboxKicker:"Divided field of social reform",
    lead:"American women's-rights movements are the divided professional-equality, household-dignity, and radical currents that contest women's authority and dependence after 1947. Feminism remains intellectually serious and legally consequential but never becomes the ordinary woman's uncontested explanation of her life.",
    canon:"The movement's smaller and later mainstream, social concentrations, legitimate grievances, three broad currents, contested Sanger inheritance, strong Christian and National Renewal alternatives, and outsider cultural image by 1980 are established. Organization names, leaders, conventions, legislation, court cases, publications, membership, and the relationship among historical activists remain open.",
    sections:[
      {id:"conditions",title:"A movement without a mass second wave",html:`<p>No Rosie-the-Riveter-scale mobilization, smaller university expansion, delayed suburbanization, and stronger religious and household institutions prevent several grievances from fusing into one generation-wide movement.</p>`},
      {id:"grievances",title:"Material grievances",html:`<p>Women contest professional-school exclusion, unequal education, marriage bars, lower pay for identical work, weak control of property, financial danger in abusive marriages, and denial of authority despite demonstrated competence.</p>`},
      {id:"professional",title:"Professional equality",html:`<p>This current argues that a woman possessing a genuine vocation must not be legally barred from medicine, law, computing, scholarship, management, public office, or other work. It can affirm marriage and motherhood while rejecting categorical exclusion.</p>`},
      {id:"household",title:"Maternal and household dignity",html:`<p>Christian-social and National Renewal maternalists seek family taxation, property protection, widow and homemaker pensions, maternal healthcare, child allowances, family wages, and remedies against abandonment. Their aim is authority and security within the household rather than evacuation from it.</p>`},
      {id:"radical",title:"Radical feminism",html:`<p>A smaller current centered in elite universities, publishing, theater, artistic circles, birth-control organizations, and civil-libertarian law attacks sex roles, marriage norms, motherhood expectations, and household dependence more fundamentally.</p>`},
      {id:"sanger",title:"The Sanger inheritance",html:`<p>Margaret Sanger is a disputed ancestor rather than a 1970s leader. Advocates remember control over pregnancy; Catholic, Black autonomist, and family-order critics connect her eugenic associations to technocratic population policy. Germany's colonial demographic scandal makes that dispute more toxic after 1978.</p>`},
      {id:"image",title:"Cultural image by 1980",html:`<p>The public often treats feminism as serious, occasionally persuasive, and culturally outside the mainstream. Opponents define it through its most radical advocates, obscuring married, religious, maternal, and moderate participants.</p>`},
      {id:"question",title:"The central public question",html:`<p>The argument is not simply whether women should work. It asks whether society should principally make departure from household dependence easier or make household life a place of enforceable economic security and authority.</p>`}
    ],
    related:[{href:"american-domestic-order.html",kicker:"Social system",label:"American Domestic Order"},{href:"women-paid-work-united-states.html",kicker:"Employment setting",label:"Women and Paid Work"},{href:"marriage-divorce-united-states.html",kicker:"Legal dispute",label:"Marriage and Divorce"},{href:"german-demographic-scandal.html",kicker:"Later reproductive controversy",label:"German Demographic Scandal"},{href:"fulton-sheen.html",kicker:"Christian-social critic",label:"Fulton Sheen"}],
    facts:[["Main period","1960s–1980s"],["Main currents","Professional equality · household dignity · radical feminism"],["Social concentration","Universities · professions · publishing · legal advocacy"],["Mass cultural dominance","No"],["Disputed ancestor","Margaret Sanger"],["Detailed organizations and leaders","Open"]]
  }),

  "marriage-divorce-united-states": americanDomesticArticle({
    title:"Marriage and divorce in the United States",category:"Legal and social history",infoboxKicker:"State family-law order",
    lead:"Marriage and divorce in the United States remain a state-law system in which the historical no-fault revolution largely fails. Divorce is available and divorced people are familiar by 1980, but dissolution remains less common, more procedurally demanding, and less socially neutral than in historical late-century America.",
    canon:"The failure of a nationwide no-fault transformation, continuing state variation, majority retention of recognizable fault grounds, limited liberal-state alternatives, federal pro-family influence through taxation and benefits, lower divorce, and the preservation of some harmful marriages are established. Statutes, effective dates, waiting periods, custody rules, interstate recognition, rates, named cases, and denominational practice remain open.",
    sections:[
      {id:"federal",title:"A state-law system",html:`<p>Washington cannot simply prohibit divorce nationwide. States define marriage and dissolution subject to constitutional and interstate constraints, producing real variation beneath a broadly marriage-preserving culture.</p>`},
      {id:"fault",title:"Continuing fault grounds",html:`<p>Most states retain recognizable grounds such as adultery, desertion, cruelty, habitual intoxication, serious criminality, or prolonged abandonment. Proof, bargaining, and public allegation make dissolution costly and uneven.</p>`},
      {id:"liberal",title:"Limited breakdown regimes",html:`<p>Some liberal states permit dissolution after prolonged separation, a finding of irretrievable breakdown, reconciliation efforts, and detailed arrangements for children and an abandoned spouse. The exact map remains open.</p>`},
      {id:"federal-policy",title:"Federal family preference",html:`<p>National Renewal cannot rewrite every state code, but taxation, housing, benefits, pensions, credit, and presidential rhetoric can favor stable one-earner or family-enterprise households.</p>`},
      {id:"social",title:"Social meaning",html:`<p>A divorced woman is not automatically ruined, yet casual dissolution remains controversial. Remarriage is generally easier in Protestant communities than Catholic ones, producing visible regional and denominational distinctions.</p>`},
      {id:"stability",title:"The stability effect",html:`<p>Lower divorce means fewer households disrupted by marital breakdown, less remarriage churn, and more extended-family intervention before separation. Children more often retain continuous parental and neighborhood ties.</p>`},
      {id:"cost",title:"The cost of difficult exit",html:`<p>The same order keeps some spouses in unhappy, coercive, or abusive households longer. Family intervention may protect a vulnerable spouse or pressure that person to preserve appearances. Strong marriage law saves some marriages and traps others.</p>`},
      {id:"generation",title:"Generational consequence",html:`<p>Lower divorce helps distinguish the Columbia Generation from historical Generation X. Its members encounter more household continuity but also inherit stronger expectations about whom they should marry and what obligations follow.</p>`}
    ],
    related:[{href:"american-domestic-order.html",kicker:"Social context",label:"American Domestic Order"},{href:"american-womens-rights-movements.html",kicker:"Reform politics",label:"American Women's-Rights Movements"},{href:"women-paid-work-united-states.html",kicker:"Economic dependence",label:"Women and Paid Work"},{href:"columbia-generation.html",kicker:"Children of the system",label:"Columbia Generation"},{href:"national-renewal.html",kicker:"Federal family politics",label:"National Renewal"}],
    facts:[["Legal level","Principally state law"],["No-fault revolution","Largely fails"],["Majority pattern","Recognizable fault grounds"],["Liberal-state alternative","Separation or breakdown with conditions"],["Divorce by 1980","Known but not socially neutral"],["Principal benefit","Greater household continuity"],["Principal cost","Harder exit from harmful marriages"]]
  }),

  "domestic-modernization-united-states": americanDomesticArticle({
    title:"Domestic modernization in the United States",category:"Material culture",infoboxKicker:"Household technology and labor",
    lead:"Domestic modernization in the United States is the transformation of household work by appliances, utilities, communications, motor transport, parcel systems, local credit, and personal computing without the automatic disappearance of homemaking. Technology changes what a household can produce and coordinate as much as it reduces the labor required to maintain it.",
    canon:"Labor-saving appliances, reduced time spent on repetitive domestic tasks, expansion of education and civic work, household financial management, elder care, cottage production, and the personal computer's mixed family role are established. Adoption rates, brands, prices, household budgets, time-use studies, utility coverage, and regional inequality remain open.",
    sections:[
      {id:"tasks",title:"Reduced repetitive labor",html:`<p>Mechanized laundry, refrigeration, improved cooking and heating, vacuum cleaning, ready materials, and simplified accounts reduce time spent on washing, preservation, cleaning, fuel management, basic sewing, and repetitive bookkeeping.</p>`},
      {id:"reallocation",title:"Reallocation rather than disappearance",html:`<p>Released time moves into child education, elder care, household accounts, parish and school work, neighborhood organization, politics, crafts, and commercial activity. Domestic labor changes composition rather than vanishing.</p>`},
      {id:"communications",title:"Telephone and parcel geography",html:`<p>Telephones coordinate clients, relatives, schools, and suppliers. Parcel delivery and mail order give a household national reach while letting work remain in a town, neighborhood, or family property.</p>`},
      {id:"computer",title:"A machine tool at the kitchen table",html:`<p>Personal computers handle accounts, inventories, correspondence, publishing, teaching, design, sales, games, and software. Their mixed work-and-family justification broadens adoption beyond a specialist male hobby market.</p>`},
      {id:"authority",title:"Household managerial authority",html:`<p>Budgeting, purchasing, investments, appointments, school relations, benefits, and family-business records give homemakers consequential managerial responsibility. Public language often honors this role while law and income may still leave its holder dependent.</p>`},
      {id:"enterprise",title:"Cottage production",html:`<p>The <a href="american-cottage-industry-revival.html">cottage-industry revival</a> turns domestic technology into bookkeeping, food, clothing, teaching, publishing, software, games, insurance, travel, drafting, repair, and component businesses.</p>`},
      {id:"inequality",title:"Unequal modernization",html:`<p>Households differ by income, region, race, utility access, credit, housing quality, and time. A modern appliance or computer can reduce a task without redistributing responsibility for it, and family enterprise can conceal precarious or unpaid labor.</p>`},
      {id:"generation",title:"The modern inherited home",html:`<p>Columbia children grow up where television, radio, computer, parish list, business ledger, and schoolwork share domestic space. The home is neither an untouched traditional refuge nor merely a consumption terminal.</p>`}
    ],
    related:[{href:"american-domestic-order.html",kicker:"Social system",label:"American Domestic Order"},{href:"american-cottage-industry-revival.html",kicker:"Commercial result",label:"American Cottage-Industry Revival"},{href:"women-paid-work-united-states.html",kicker:"Labor pattern",label:"Women and Paid Work"},{href:"platform-society.html",kicker:"Computer system",label:"Platform Society"},{href:"consumer-technology.html",kicker:"Comparative material history",label:"Consumer Technology"}],
    facts:[["Main period","1950s–1980s"],["Core technologies","Appliances · telephone · parcels · personal computers"],["Primary effect","Reallocation of household labor"],["Household production","Expanded"],["Homemaking","Modernized, not eliminated"],["Adoption rates and time-use totals","Open"]]
  })
});

const addAmericanDomesticRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  items.forEach(item => { if (!article.related.some(existing => existing.href === item.href)) article.related.push(item); });
};

addAmericanDomesticRelated("culture-of-the-united-states",[{href:"american-domestic-order.html",kicker:"Family and social system",label:"American Domestic Order"}]);
addAmericanDomesticRelated("american-cottage-industry-revival",[{href:"domestic-modernization-united-states.html",kicker:"Household technology",label:"Domestic Modernization"},{href:"women-paid-work-united-states.html",kicker:"Labor setting",label:"Women and Paid Work"}]);
addAmericanDomesticRelated("columbia-generation",[{href:"american-domestic-order.html",kicker:"Parental order",label:"American Domestic Order"},{href:"marriage-divorce-united-states.html",kicker:"Household continuity",label:"Marriage and Divorce"}]);
