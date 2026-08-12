window.deepArticles = window.deepArticles || {};

const americanDemographySources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — family order, fertility, and the Columbia Generation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American social chronology"},
  {href:"../transcript.md",label:"Master Transcript — fertility, household geography, childhood, and cohort development"}
];

const americanDemographyLandscape = {
  src:"assets/diagrams/american-demographic-transition.svg",
  alt:"Diagram of the smoother alternate American fertility curve and its community consequences",
  caption:"Depression recovery gives way to steady family formation and gradual decline rather than a baby-boom mountain followed by a birth-bust valley"
};

const americanDemographyArticle = config => ({
  category:config.category || "American society",
  eyebrow:config.eyebrow || "United States · demography and community",
  infoboxKicker:config.infoboxKicker || "American demographic system",
  landscape:americanDemographyLandscape,
  ...config,
  sources:americanDemographySources,
  categories:config.categories || ["United States","Demography","Family","Community history"]
});

Object.assign(window.deepArticles, {
  "american-demographic-transition": americanDemographyArticle({
    title:"American demographic transition",category:"Demographic history",infoboxKicker:"Post-Depression population history",
    lead:"The American demographic transition is the smoother movement from Depression-delayed family formation to late-century lower fertility in a country without a postwar baby boom or corresponding birth bust. Each cohort remains moderately larger than its predecessor, leaving the United States comparatively young and steadily growing rather than divided by one great demographic mountain and valley.",
    canon:"The absence of the historical boom and bust, broad direction of the fertility curve, interaction of contraception with religion and family policy, continuing population growth, and lack of a small Generation-X valley are established. All fertility ranges are working estimates; census totals, annual rates, regional and racial breakdowns, immigration effects, and forecasts remain open.",
    sections:[
      {id:"absence",title:"Why no baby boom occurs",html:`<p>The United States has no sudden reunion and demobilization of millions of servicemen after a victorious general war. It therefore lacks the same concentrated marriage, childbirth, housing, and veteran-benefit shock.</p>`},
      {id:"recovery",title:"Late-1940s recovery",html:`<p>Marriage and childbirth deferred during the Depression recover after 1947. The rise is real but dispersed across several years and regions rather than compressed into one national event.</p>`},
      {id:"fifties",title:"Steady 1950s family formation",html:`<p>A working total-fertility range of roughly 2.8–3.2 describes the decade. The figure is an estimate, not a fixed statistical series. Industrial wages, family housing, churches, and household ideals sustain births without creating the historical 1957 peak.</p>`},
      {id:"decline",title:"Gradual decline after 1960",html:`<p>Prosperity, urbanization, education, contraception, delayed aspirations, and consumer expense lower fertility gradually. Working ranges place the 1970s near 2.5–2.8 and the early 1980s near 2.3–2.6.</p>`},
      {id:"counterweights",title:"Counterweights to decline",html:`<p>Religion remains stronger, motherhood carries high public status, immigration is limited, one-earner households remain viable for many industrial families, and National Renewal rewards children. The pill changes timing and completed family size without defining the whole culture.</p>`},
      {id:"cohorts",title:"No demographic valley",html:`<p>There is no enormous Boomer cohort followed by a small Generation X. The post-Boomer <a href="columbia-generation.html">Columbia Generation</a> is not demographically overlooked and enters institutions expecting ordinary succession rather than permanent displacement by a much larger predecessor.</p>`},
      {id:"institutions",title:"A society with children present",html:`<p>Schools, parishes, youth clubs, neighborhood recreation, family retail, and domestic media retain central places because population growth slows without collapsing.</p>`},
      {id:"limits",title:"Limits of the estimate",html:`<p>These ranges describe national direction. Black, white, Catholic, Protestant, Jewish, rural, urban, regional, and class histories remain different, and the archive has not fixed a definitive 1980 or 1984 census table.</p>`}
    ],
    related:[{href:"american-family-formation.html",kicker:"Household life course",label:"American Family Formation"},{href:"american-household-geography.html",kicker:"Residential structure",label:"American Household Geography"},{href:"porchlight-childhood.html",kicker:"Childhood consequence",label:"Porchlight Childhood"},{href:"columbia-generation.html",kicker:"Post-Boomer cohort",label:"Columbia Generation"},{href:"american-domestic-order.html",kicker:"Social system",label:"American Domestic Order"}],
    facts:[["Postwar baby boom","Absent"],["1950s total fertility","2.8–3.2 · working range"],["1970s total fertility","2.5–2.8 · working range"],["Early-1980s total fertility","2.3–2.6 · working range"],["Birth bust","No abrupt equivalent"],["Population direction","Slower but continuing growth"],["Definitive census series","Open"]]
  }),

  "american-family-formation": americanDemographyArticle({
    title:"American family formation",category:"Social history",infoboxKicker:"Marriage, children, and household establishment",
    lead:"American family formation is the late-century pattern by which marriage, childbearing, household establishment, work, property, and local support remain closely connected. Earlier marriage remains expected more often than in historical 1980s America, but the transition is neither uniform nor a return to agrarian household life.",
    canon:"Depression-delayed recovery, steady rather than explosive postwar formation, younger marriage than historical 1980s, typical middle-class families of roughly two to four children as a working estimate, viable one-earner households, local family support, and pressure toward prescribed roles are established. Marriage ages, household sizes, income thresholds, housing tenure, ceremonies, regional patterns, and rates are open.",
    sections:[
      {id:"sequence",title:"The expected sequence",html:`<p>Education or early work leads toward marriage, household establishment, children, provision, and responsibility within family and local institutions. Actual lives vary, but public policy and moral language assume the sequence.</p>`},
      {id:"marriage",title:"Marriage timing",html:`<p>Typical marriage occurs younger than in historical 1980s America but later than in 1950. Education, professional training, housing, and delayed recovery lengthen courtship or engagement for some couples.</p>`},
      {id:"children",title:"Children and family size",html:`<p>Two to four children form a working middle-class range rather than a fixed norm. Contraception makes timing more deliberate; religion, maternal status, and pro-family policy keep parenthood central.</p>`},
      {id:"provision",title:"Provision and the family wage",html:`<p>A household able to live chiefly on one wage is a social objective. Industrial stability, housing, benefits, family enterprise, and local support make it attainable for many but not all households.</p>`},
      {id:"support",title:"Relatives and local institutions",html:`<p>Grandparents, siblings, parishes, congregations, schools, clubs, mutual aid, and family businesses provide childcare, property, credit, introductions, and crisis intervention. Support also gives those institutions leverage over personal choices.</p>`},
      {id:"deviation",title:"Lives outside the median",html:`<p>Single adults, childless couples, widows and widowers, separated households, professional women, and people unwilling or unable to meet the provider or homemaker ideal remain ordinary enough to require institutions. They do not define the public median.</p>`},
      {id:"pressure",title:"The prescribed-life problem",html:`<p>Clear paths can reduce drift and material uncertainty. They can also turn aptitude, sex, religion, family ownership, or parental expectation into an assigned future that a young adult must actively refuse.</p>`},
      {id:"change",title:"Change after 1985",html:`<p>Open-market disruption, corporate employment, networks, later migration, and the Columbia Generation's search for freely chosen vocation place new pressure on the inherited sequence. Exact later rates remain open.</p>`}
    ],
    related:[{href:"american-demographic-transition.html",kicker:"Population setting",label:"American Demographic Transition"},{href:"american-domestic-order.html",kicker:"Household system",label:"American Domestic Order"},{href:"marriage-divorce-united-states.html",kicker:"Legal framework",label:"Marriage and Divorce"},{href:"women-paid-work-united-states.html",kicker:"Employment pattern",label:"Women and Paid Work"},{href:"american-household-geography.html",kicker:"Residential support",label:"American Household Geography"}],
    facts:[["Main period","Late 1940s–1980s"],["Marriage timing","Younger than historical 1980s; older than 1950"],["Typical middle-class children","2–4 · working range"],["Household ideal","One principal wage plus household production"],["Support network","Kin · church · school · local business"],["Exact national rates","Open"]]
  }),

  "american-household-geography": americanDemographyArticle({
    title:"American household geography",category:"Urban and social geography",infoboxKicker:"Neighborhood and kinship landscape",
    lead:"American household geography is the relatively rooted pattern of older urban neighborhoods, small towns, streetcar suburbs, family property, local churches, and kin networks that survives the country's weaker veteran-suburban rupture. Suburbs and automobile growth still occur, but fewer households enter socially interchangeable districts separated from grandparents, cousins, congregations, and inherited businesses.",
    canon:"Less explosive suburbanization, lower geographic uprooting, continuing older neighborhoods and streetcar suburbs, nearby kin, family-owned property, local churches and businesses, and the dual protective and coercive role of community knowledge are established. Migration rates, metropolitan maps, suburb names, housing shares, segregation patterns, road programs, and regional comparisons remain open.",
    sections:[
      {id:"difference",title:"A weaker suburban rupture",html:`<p>The absence of mass veteran benefits and wartime industrial transformation reduces the scale and speed of historical postwar suburbanization. New suburbs still expand, but they do not replace older social geography as completely.</p>`},
      {id:"forms",title:"Residential forms",html:`<p>Ethnic urban neighborhoods, small towns, streetcar suburbs, apartment districts, automobile suburbs, mixed shop-houses, family compounds, and rural communities coexist. No one form represents the whole country.</p>`},
      {id:"kin",title:"Kin nearby",html:`<p>Grandparents, aunts, uncles, cousins, and adult siblings more often remain within practical visiting and childcare distance. Family property and business can anchor residence across generations.</p>`},
      {id:"institutions",title:"Local institutional density",html:`<p>Churches, parishes, schools, clubs, shopkeepers, banks, theaters, newspapers, and political organizations preserve long memory. Reputation can substitute for formal credit or professional service.</p>`},
      {id:"mobility",title:"Mobility without rootlessness",html:`<p>Automobiles, roads, aviation, colleges, corporations, and public programs still move people. The difference is lower average uprooting and a larger share of movement through known family, denominational, occupational, or community channels.</p>`},
      {id:"protection",title:"Protection and practical freedom",html:`<p>A known environment lets children range widely, households borrow informally, and relatives intervene quickly during illness, unemployment, or marital crisis.</p>`},
      {id:"constraint",title:"Surveillance and constraint",html:`<p>The same social knowledge can punish dissent. A difficult marriage, religious conversion, interracial friendship, unconventional profession, or refusal of family duty is harder to remove from collective notice.</p>`},
      {id:"inequality",title:"Unequal geographies",html:`<p>Black neighborhoods, white ethnic districts, Catholic parishes, Protestant towns, Indigenous communities, migrant regions, and affluent suburbs possess different resources and face different forms of private exclusion. Rootedness is not identical to equality.</p>`}
    ],
    related:[{href:"american-family-formation.html",kicker:"Household formation",label:"American Family Formation"},{href:"porchlight-childhood.html",kicker:"Everyday use",label:"Porchlight Childhood"},{href:"american-cottage-industry-revival.html",kicker:"Local production",label:"American Cottage-Industry Revival"},{href:"black-american-public-sphere.html",kicker:"Parallel institutions",label:"Black American Public Sphere"},{href:"everyday-life-in-united-states.html",kicker:"National daily life",label:"Everyday Life in the United States"}],
    facts:[["Main period","1947–1985"],["Suburbanization","Present but less explosive"],["Continuing forms","Older neighborhoods · small towns · streetcar suburbs"],["Kin proximity","Higher than historical late-century pattern"],["Community benefit","Trust · care · informal credit · intervention"],["Community cost","Surveillance · conformity · unequal exclusion"]]
  }),

  "porchlight-childhood": americanDemographyArticle({
    title:"Porchlight childhood",category:"History of childhood",infoboxKicker:"Columbia Generation childhood pattern",
    lead:"Porchlight childhood is the common description of American childhood among the Columbia Generation: wide unsupervised movement through streets, woods, vacant lots, libraries, arcades, shops, and clubs within a neighborhood where adults know the child and someone is expected to be waiting at home. It differs from latchkey childhood because freedom rests on a distributed adult presence rather than parental and community absence.",
    canon:"The porchlight description, broad physical freedom, nearby adult network, shared household media, transition toward individualized electronic culture, and contrast with historical latchkey experience are established. A fixed scholarly term, survey data, exact age range, regional prevalence, curfews, school policies, accident rates, and representative memoirs remain open.",
    sections:[
      {id:"name",title:"The porchlight image",html:`<p>Children return when streetlights or a family porch light comes on. The image expresses both freedom and expectation: a child can range beyond immediate sight but belongs to a household that notices return.</p>`},
      {id:"range",title:"Physical freedom",html:`<p>Children walk or bicycle to school, cross town with siblings, play in woods or vacant lots, use libraries and computer clubs, spend time in arcades, and organize sports without continuous adult scheduling.</p>`},
      {id:"adults",title:"Distributed supervision",html:`<p>Mothers, grandparents, aunts, neighbors, parish women, shopkeepers, teachers, and older siblings form an informal safety network. No one adult watches constantly, but many adults can identify the child and household.</p>`},
      {id:"home",title:"Someone behind the door",html:`<p>More households contain a parent, relative, home worker, or nearby known adult during the afternoon. This does not guarantee emotional warmth or safety, but it changes the ordinary expectation of return.</p>`},
      {id:"media",title:"From family television to private media",html:`<p>Childhood centers more often on one family television and shared radio. By adolescence, bedroom radios, cable, videotape, arcades, home computers, and bulletin boards create increasingly private cultural space.</p>`},
      {id:"computer",title:"The shared household computer",html:`<p>The computer usually sits in a den, kitchen office, study, or family-business workspace. Parents use it for accounts and correspondence; children program, play, exchange software, and discover networks.</p>`},
      {id:"limits",title:"Freedom inside a known world",html:`<p>The network protects against anonymity while making secret lives harder. Adults can pass information quickly, and children from stigmatized families or across racial and class boundaries do not receive equal presumption of belonging.</p>`},
      {id:"temperament",title:"Generational consequence",html:`<p>This childhood produces neither placid conformity nor reflexive abandonment cynicism. Columbia youth learn that institutions can build impressive things and that every system has an owner, purpose, and observer.</p>`}
    ],
    related:[{href:"columbia-generation.html",kicker:"Principal cohort",label:"Columbia Generation"},{href:"american-household-geography.html",kicker:"Neighborhood setting",label:"American Household Geography"},{href:"american-domestic-order.html",kicker:"Family setting",label:"American Domestic Order"},{href:"platform-society.html",kicker:"Electronic transition",label:"Platform Society"},{href:"american-electronic-threat-cinema.html",kicker:"Later cultural anxiety",label:"American Electronic-Threat Cinema"}],
    facts:[["Principal cohort","Columbia Generation"],["Defining freedom","Unsupervised movement within known community"],["Adult network","Parents · kin · neighbors · institutions · shopkeepers"],["Return signal","Streetlight or porch light"],["Household media transition","Shared television to individualized electronic media"],["Fixed official designation","No"]]
  })
});

const addAmericanDemographyRelated = (slug, items) => {
  const article = window.deepArticles[slug]; if (!article) return; article.related = article.related || [];
  items.forEach(item => { if (!article.related.some(existing => existing.href === item.href)) article.related.push(item); });
};
addAmericanDemographyRelated("american-domestic-order",[{href:"american-demographic-transition.html",kicker:"Population history",label:"American Demographic Transition"},{href:"american-household-geography.html",kicker:"Community setting",label:"American Household Geography"}]);
addAmericanDemographyRelated("columbia-generation",[{href:"porchlight-childhood.html",kicker:"Childhood pattern",label:"Porchlight Childhood"},{href:"american-demographic-transition.html",kicker:"Cohort structure",label:"American Demographic Transition"}]);
