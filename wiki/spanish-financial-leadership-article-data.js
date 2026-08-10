window.deepArticles = window.deepArticles || {};

const spanishFinancialLeadershipSources = [
  {href:"../transcript.md",label:"Master Transcript — Spanish four-man economic balance, monetary reunification, and Italian debt settlement"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Spanish reconstruction and controlled opening"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Spanish postwar economic development"},
  {href:"../characterDossier%20-%20AltWWII.md",label:"Character Dossier — historical figures and extrapolation rules"}
];

const spanishFinancialLeadershipRelated = [
  {href:"spain.html",kicker:"National setting",label:"Spanish State"},
  {href:"spanish-postwar-economic-development.html",kicker:"Economic program",label:"Postwar Economic Development of Spain"},
  {href:"banking-in-spain.html",kicker:"Financial system",label:"Banking in Spain"},
  {href:"banco-de-espana.html",kicker:"Central institution",label:"Bank of Spain"},
  {href:"instituto-nacional-de-industria.html",kicker:"Industrial counterpart",label:"Instituto Nacional de Industria"}
];

const spanishFinancialBiography = config => ({
  category:"People",eyebrow:"Spanish economist and public official",infoboxKicker:"Spanish financial leadership",
  ...config,
  sources:[...spanishFinancialLeadershipSources,...(config.additionalSources || [])],
  categories:config.categories || ["Spanish economists","Spanish public officials","Spanish economic history"]
});

Object.assign(window.deepArticles, {
  "jose-larraz": spanishFinancialBiography({
    title:"José Larraz",infoboxTitle:"José Larraz López",eyebrow:"Jurist · economist · Minister of Finance, 1939–1941 · 1904–1973",
    lead:"José Larraz López was a Spanish jurist, economist, Catholic public intellectual, and Minister of Finance from 1939 to 1941. He designed the fiscal and monetary reunification that followed the Civil War and became the principal advocate of a credible Treasury, unified peseta, classified public liabilities, and limits upon indiscriminate inflation inside Francisco Franco's competing postwar economic coalition.",
    canon:"Larraz's birth and death dates, legal and economic formation, Bank of Spain studies work, Civil War refuge, Nationalist service, 1939–41 ministry, monetary reunification, tax and budget work, 1943 academy election, publications, and later scholarly life are historical anchors. His setting role as the fiscal pole of the four-man economic balance is established. Exact advisory offices after 1941, influence on later statutes, private consultations, and relations with the restored monarchy remain open.",
    sections:[
      {id:"early-life",title:"Early life and education",html:"<p>Larraz was born at Cariñena, Zaragoza, on 27 April 1904. He studied law and developed interests in public finance, political economy, monetary institutions, Catholic social thought, and the historical organization of the Spanish economy.</p>"},
      {id:"early-career",title:"Early career",html:"<p>He worked in public and academic economic institutions and entered the Bank of Spain's studies service around 1930. His work joined legal drafting, fiscal administration, economic history, and practical monetary questions.</p>"},
      {id:"civil-war",title:"Civil War",html:"<p>Larraz remained in Madrid during the early Civil War and took refuge in foreign diplomatic premises. He later left Republican territory and joined the Nationalist administrative effort, where specialists were preparing currency, debt, tax, and property rules for the end of the war.</p>"},
      {id:"minister",title:"Minister of Finance",html:"<p>Franco appointed Larraz Minister of Finance on 9 August 1939. He served until 19 May 1941. The ministry faced two currencies, damaged tax collection, contested wartime debts, military arrears, rationing, reconstruction claims, and pressure for continued political spending.</p>"},
      {id:"reunification",title:"Monetary reunification",html:"<p>Larraz supervised the return to a single peseta area. Republican and Nationalist notes, accounts, securities, and obligations were not treated as politically neutral equivalents. Conversion and recognition rules restored monetary administration while redistributing losses according to the victorious state's judgments.</p>"},
      {id:"treasury",title:"Budget and taxation",html:"<p>He attempted to separate ordinary expenditure from Civil War liabilities, military arrears, and reconstruction. Tax collection was restored, government paper placed with banks and insurers, and inflationary finance constrained where political demands allowed.</p>"},
      {id:"coalition",title:"Economic-policy coalition",html:"<p>Larraz supplied the fiscal pole of a balance that also included <a href='antonio-goicoechea.html'>Antonio Goicoechea</a> in banking, Demetrio Carceller in trade and supplies, and Juan Antonio Suanzes in state industry. He did not eliminate autarkic policy, but insisted that industrial sovereignty required a functioning currency and Treasury.</p>"},
      {id:"later-life",title:"Scholarship and later life",html:"<p>After leaving the ministry Larraz pursued legal, economic, historical, and European questions. He entered the Real Academia de Ciencias Morales y Políticas in 1943 and published on Spanish economic history, the peseta, Europe, taxation, and social organization.</p>"},
      {id:"death",title:"Death and reputation",html:"<p>Larraz died in Madrid on 17 November 1973. Spanish financial officials remember him as the architect of monetary reunification and a defender of fiscal credibility; critics also associate his settlement with the punitive classification of Civil War money and claims.</p>"}
    ],
    related:[...spanishFinancialLeadershipRelated,{href:"antonio-goicoechea.html",kicker:"Banking counterpart",label:"Antonio Goicoechea"},{href:"latin-scudo.html",kicker:"Later monetary framework",label:"Latin Scudo"},{href:"madrid.html",kicker:"Principal place of work",label:"Madrid"}],
    facts:[["Full name","José Larraz López"],["Born","27 April 1904 · Cariñena"],["Died","17 November 1973 · Madrid"],["Principal profession","Jurist and economist"],["Minister of Finance","9 August 1939 – 19 May 1941"],["Principal postwar task","Fiscal and monetary reunification"],["Academy","Real Academia de Ciencias Morales y Políticas, 1943"],["Policy position","Credible Treasury and defended peseta"]],
    additionalSources:[{href:"https://racmyp.es/academicos/jose-larraz-lopez/",label:"Real Academia de Ciencias Morales y Políticas — José Larraz López"},{href:"https://www.cepc.gob.es/sites/default/files/2021-12/13874rie001003007.pdf",label:"Center for Political and Constitutional Studies — José Larraz as a Europeanist"}],
    categories:["José Larraz","Spanish economists","Ministers of Finance of Spain","Spanish jurists","1904 births","1973 deaths"]
  }),

  "antonio-goicoechea": spanishFinancialBiography({
    title:"Antonio Goicoechea",infoboxTitle:"Antonio Goicoechea y Cosculluela",eyebrow:"Lawyer · monarchist politician · Governor of the Bank of Spain, 1938–1950 · 1876–1953",
    lead:"Antonio Goicoechea y Cosculluela was a Spanish lawyer, Alfonsine monarchist, conspirator against the Second Republic, negotiator of Italian aid in 1936, and Governor of the Bank of Spain from 1938 to 1950. In the postwar Spanish economic settlement he supervised banking consolidation, official credit institutions, central-bank discipline, and the negotiated treatment of obligations arising from Italian intervention.",
    canon:"Goicoechea's birth and death dates, legal career, monarchist politics, Renovación Española leadership, role in preparing the 1936 rising, July 1936 Rome mission, incorporation into the unified Francoist movement, 1938–50 Bank of Spain governorship, official-bank presidencies, and later secondary political position are historical anchors. His role in Italian debt settlement and the four-man economic balance is established. Exact treaty terms, later influence, private banking relations, and final advisory duties remain open.",
    sections:[
      {id:"early-life",title:"Early life and legal career",html:"<p>Goicoechea was born in Barcelona on 21 January 1876. He studied law at the Universidad Central, entered the Council of State legal service, practiced public law, and became active in conservative monarchical politics.</p>"},
      {id:"monarchism",title:"Monarchist politics",html:"<p>He served in parliamentary and ministerial politics under the monarchy and became a leading Alfonsine monarchist during the Second Republic. Renovación Española sought restoration of the Bourbon monarchy and cooperated with other forces opposed to the republican regime.</p>"},
      {id:"conspiracy",title:"The 1936 conspiracy",html:"<p>Goicoechea participated in preparations for the military rising. On 25 July 1936 he traveled to Rome with Pedro Sainz Rodríguez to secure Italian aircraft, arms, and political support, making him one of the Spanish figures most familiar with the origins of Italy's intervention.</p>"},
      {id:"unification",title:"Political unification",html:"<p>In April 1937 Goicoechea dissolved Renovación Española into Franco's unified movement. His independent party role diminished, while legal, financial, monarchical, and Italian connections remained valuable to the regime.</p>"},
      {id:"governor",title:"Governor of the Bank of Spain",html:"<p>He became governor of the Nationalist Bank of Spain in 1938 and remained in office through 1950. The institution moved from wartime issue and finance to reunification of branches, accounts, currency, reserves, banking supervision, and state credit.</p>"},
      {id:"official-banks",title:"Official banking",html:"<p>As commissioner for official banking, Goicoechea presided over the mortgage, foreign-trade, and industrial-credit banks. These institutions financed housing, land, exports, public bodies, and strategic companies alongside the Treasury and private banking groups.</p>"},
      {id:"italian-debt",title:"Italian debt settlement",html:"<p>His personal knowledge of the 1936 negotiations makes Goicoechea the principal Spanish technical intermediary in the postwar settlement of Italian aid. Spain recognizes political and material obligations while resisting terms that would subordinate its banks, currency, or industrial policy to Rome.</p>"},
      {id:"economic-balance",title:"Economic-policy role",html:"<p>Goicoechea supplies central-bank and banking discipline inside the postwar balance: <a href='jose-larraz.html'>Larraz</a> protects the Treasury and peseta, Carceller obtains essential imports and clearing arrangements, and Suanzes directs state industry. Goicoechea connects those policies to banks and official credit.</p>"},
      {id:"death",title:"Later life and death",html:"<p>He left the Bank of Spain governorship in 1950 and remained a respected figure in legal, financial, and regime institutions. He died in Madrid on 11 February 1953. His reputation combines central-bank reconstruction with monarchist conspiracy and negotiation of foreign intervention.</p>"}
    ],
    related:[...spanishFinancialLeadershipRelated,{href:"jose-larraz.html",kicker:"Fiscal counterpart",label:"José Larraz"},{href:"italy.html",kicker:"Wartime creditor and Latin partner",label:"Kingdom of Italy"},{href:"madrid.html",kicker:"Principal place of work",label:"Madrid"}],
    facts:[["Full name","Antonio Goicoechea y Cosculluela"],["Born","21 January 1876 · Barcelona"],["Died","11 February 1953 · Madrid"],["Profession","Lawyer and politician"],["Political position","Alfonsine monarchist"],["Rome mission","25 July 1936"],["Governor of the Bank of Spain","1938–1950"],["Postwar responsibility","Bank consolidation and Italian debt settlement"]],
    additionalSources:[{href:"https://coleccion.bde.es/wca/es/secciones/coleccion/obras/antonio-goicoechea-y-cosculluela-p_191.html",label:"Bank of Spain Collection — Antonio Goicoechea y Cosculluela"},{href:"https://recyt.fecyt.es/index.php/Hyp/article/download/44885/26420/135006",label:"Historia y Política — Antonio Goicoechea"}],
    categories:["Antonio Goicoechea","Governors of the Bank of Spain","Spanish monarchists","Spanish lawyers","1876 births","1953 deaths"]
  })
});
