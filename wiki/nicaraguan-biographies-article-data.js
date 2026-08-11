window.deepArticles=window.deepArticles||{};
const nicaraguanBiographySources=[
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — American Hemisphere and Central America"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Nicaraguan crisis and settlement"},
  {href:"../transcript.md",label:"Master Transcript — Nicaraguan factions and foreign alignment"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — open Nicaraguan continuity"}
];
const nicaraguanBiography=c=>({category:"People of Nicaragua",eyebrow:"20th century · Nicaragua",infoboxKicker:"Biographical reference",...c,sources:[...nicaraguanBiographySources,...(c.additionalSources||[])],categories:c.categories||["People of Nicaragua","Nicaraguan history","Central American Crisis"]});

Object.assign(window.deepArticles,{
  "augusto-cesar-sandino":nicaraguanBiography({title:"Augusto César Sandino",eyebrow:"1895–1934 · nationalist guerrilla leader",
    lead:"Augusto César Sandino was a Nicaraguan revolutionary who led the <em>Army in Defense of the National Sovereignty of Nicaragua</em> against the United States occupation from 1927 to 1933. His resistance and 1934 killing made his name the principal symbol claimed by the later, politically diverse <a href='sandinismo-nicaragua.html'>Sandinista tradition</a>.",
    canon:"Sandino's life, rebellion, negotiations, assassination, and immediate legacy follow shared history. Later movements inherit his name, but no unified Marxist party acquires exclusive ownership of Sandinismo in setting continuity.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Sandino was born in Niquinohomo on 18 May 1895. Work in Nicaragua, Honduras, Guatemala, and Mexico exposed him to labor politics, nationalism, and opposition to foreign control.</p>"},
      {id:"war",title:"Constitutionalist War",html:"<p>He joined the Liberal rebellion against the Conservative government during renewed American intervention. He rejected the 1927 Espino Negro agreement because it required disarmament while United States forces remained.</p>"},
      {id:"army",title:"Army in Defense of National Sovereignty",html:"<p>From Las Segovias, Sandino organized a mobile rural army. Its raids, ambushes, local networks, and political appeals made the occupation costly without giving the rebels conventional control of Nicaragua.</p>"},
      {id:"ideas",title:"Political ideas",html:"<p>Sandino combined national sovereignty, Latin American solidarity, social reform, anti-imperialism, and spiritual language. Later factions emphasized different parts of this program and disputed whether it implied socialism, Catholic nationalism, or agrarian republicanism.</p>"},
      {id:"withdrawal",title:"American withdrawal",html:"<p>United States forces withdrew in January 1933. Sandino opened negotiations with President Juan Bautista Sacasa and agreed to reduce his army while retaining an agricultural colony and limited armed guarantees.</p>"},
      {id:"death",title:"Assassination",html:"<p>After leaving the presidential palace on 21 February 1934, Sandino was detained and executed by National Guardsmen acting under Anastasio Somoza García. Guard forces then attacked his surviving organization and settlement.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Opponents of the Somoza family treated Sandino as the founder of a national resistance tradition. His portrait, hat, colors, and vocabulary circulated among students, peasants, Catholic activists, labor nationalists, and armed groups.</p>"},
      {id:"setting",title:"Legacy in setting continuity",html:"<p>The <a href='nicaraguan-proxy-war.html'>Nicaraguan Proxy War</a> prevents one organization from monopolizing his memory. Sandinismo remains an umbrella extending from democratic nationalism to agrarian and revolutionary armed currents.</p>"}
    ],
    related:[{href:"sandinismo-nicaragua.html",kicker:"Political legacy",label:"Sandinismo in Nicaragua"},{href:"nicaraguan-national-guard.html",kicker:"Institution that killed him",label:"Nicaraguan National Guard"},{href:"anastasio-somoza-garcia.html",kicker:"Guard commander",label:"Anastasio Somoza García"},{href:"carlos-fonseca.html",kicker:"Later interpreter",label:"Carlos Fonseca"},{href:"nicaraguan-proxy-war.html",kicker:"Later conflict",label:"Nicaraguan Proxy War"},{href:"nicaragua.html",kicker:"Country article",label:"Nicaragua"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Augusto_C%C3%A9sar_Sandino",label:"Wikipedia — Augusto César Sandino (shared biographical baseline)"}],
    facts:[["Born","18 May 1895"],["Birthplace","Niquinohomo, Nicaragua"],["Died","21 February 1934"],["Political alignment","Liberal nationalist"],["Spouse","Blanca Stella Aráuz Pineda"],["Command","Army in Defense of National Sovereignty"],["Campaign","1927–1933 rebellion"],["Legacy","Namesake of Sandinismo"]]
  }),

  "anastasio-somoza-garcia":nicaraguanBiography({title:"Anastasio Somoza García",eyebrow:"1896–1956 · founder of the Somoza dynasty",
    lead:"Anastasio Somoza García was a Nicaraguan officer and president who converted command of the American-created <a href='nicaraguan-national-guard.html'>National Guard</a> into a family dictatorship. He ordered the killing of <a href='augusto-cesar-sandino.html'>Augusto César Sandino</a>, seized power in 1936, and founded the <a href='somoza-dynasty.html'>Somoza dynasty</a>.",
    canon:"His biography through his 1956 assassination is shared history and is fully established in setting continuity.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Born in San Marcos, Carazo, on 1 February 1896, Somoza was raised in a prosperous coffee family and studied business in Philadelphia. His English and marriage into the Sacasa-Debayle family aided his political rise.</p>"},
      {id:"career",title:"Early political career",html:"<p>Somoza served in Liberal politics as governor, consul, and foreign minister. During American-sponsored negotiations he worked as an interpreter and built relationships with United States officials.</p>"},
      {id:"guard",title:"National Guard command",html:"<p>He became director of the National Guard after the American withdrawal. Control of the country's combined army and police supplied the institutional base from which he displaced civilian rivals.</p>"},
      {id:"sandino",title:"Killing of Sandino",html:"<p>Somoza ordered Guardsmen to seize and execute Sandino after peace talks on 21 February 1934. The Guard then destroyed much of Sandino's remaining rural organization.</p>"},
      {id:"power",title:"Seizure of power",html:"<p>In 1936 the Guard forced President Juan Bautista Sacasa from office. Somoza entered the presidency in 1937 and retained decisive authority even when loyal civilian figures formally held the office.</p>"},
      {id:"rule",title:"Government and economy",html:"<p>The regime combined electoral control, censorship, patronage, Guard coercion, foreign concessions, and rapid acquisition of land and businesses by the ruling family.</p>"},
      {id:"america",title:"Relations with the United States",html:"<p>American governments treated Somoza as a reliable regional anti-radical partner near the canal approaches. That support strengthened him while making foreign sponsorship a permanent opposition grievance.</p>"},
      {id:"death",title:"Assassination and succession",html:"<p>Rigoberto López Pérez shot Somoza in León on 21 September 1956. He died in the Panama Canal Zone eight days later, and authority passed to his eldest son <a href='luis-somoza-debayle.html'>Luis</a>.</p>"}
    ],
    related:[{href:"somoza-dynasty.html",kicker:"Family regime",label:"Somoza Dynasty"},{href:"nicaraguan-national-guard.html",kicker:"Power base",label:"Nicaraguan National Guard"},{href:"augusto-cesar-sandino.html",kicker:"Principal victim",label:"Augusto César Sandino"},{href:"luis-somoza-debayle.html",kicker:"Successor",label:"Luis Somoza Debayle"},{href:"anastasio-somoza-debayle.html",kicker:"Younger son",label:"Anastasio Somoza Debayle"},{href:"nicaragua.html",kicker:"Country article",label:"Nicaragua"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Anastasio_Somoza_Garc%C3%ADa",label:"Wikipedia — Anastasio Somoza García (shared biographical baseline)"}],
    facts:[["Born","1 February 1896"],["Birthplace","San Marcos, Carazo"],["Died","29 September 1956"],["Party","Nationalist Liberal Party"],["Presidencies","1937–1947; 1950–1956"],["Power base","National Guard"],["Spouse","Salvadora Debayle"],["Successor","Luis Somoza Debayle"]]
  }),

  "luis-somoza-debayle":nicaraguanBiography({title:"Luis Somoza Debayle",eyebrow:"1922–1967 · president of Nicaragua",
    lead:"Luis Somoza Debayle was president of Nicaragua from 1956 to 1963 and the civilian head of the <a href='somoza-dynasty.html'>Somoza family</a> system until his death. His milder public style did not end family control of elections, property, patronage, or the <a href='nicaraguan-national-guard.html'>National Guard</a>.",
    canon:"His education, presidency, family role, regional policy, and death in 1967 are shared history and established in setting continuity.",
    sections:[
      {id:"early",title:"Early life and education",html:"<p>Born in León on 18 November 1922, Luis was the eldest son of Anastasio Somoza García and Salvadora Debayle. He studied at schools in the United States and at Louisiana State University.</p>"},
      {id:"succession",title:"Succession",html:"<p>As president of the Chamber of Deputies, Luis became acting president after his father's assassination in September 1956 and won the presidency in his own right in 1957.</p>"},
      {id:"presidency",title:"Presidency",html:"<p>Luis allowed a somewhat wider civilian political space than his father while preserving censorship, electoral control, corruption, and family primacy. He declined another presidential term in 1963.</p>"},
      {id:"family",title:"Division of family authority",html:"<p>Luis managed the civilian and party side of the regime. His younger brother <a href='anastasio-somoza-debayle.html'>Anastasio</a> commanded the National Guard and remained the state's second center of power.</p>"},
      {id:"economy",title:"Economic policy",html:"<p>His government promoted infrastructure, export agriculture, regional trade, and the Central American Common Market while family firms continued to benefit from state access.</p>"},
      {id:"foreign",title:"Foreign relations",html:"<p>Nicaragua remained closely aligned with the United States. Luis allowed American-supported Cuban exiles to depart from Puerto Cabezas during the Bay of Pigs operation.</p>"},
      {id:"opposition",title:"Growth of opposition",html:"<p>The first organizations that later claimed Sandino's name emerged during his rule. Their existence exposed the limits of liberalization under continued Guard and family control.</p>"},
      {id:"death",title:"Death and legacy",html:"<p>Luis died of a heart attack in Managua on 13 April 1967. His death removed the dynasty's more civilian-minded broker and left his brother as its uncontested ruler.</p>"}
    ],
    related:[{href:"somoza-dynasty.html",kicker:"Family regime",label:"Somoza Dynasty"},{href:"anastasio-somoza-garcia.html",kicker:"Father and predecessor",label:"Anastasio Somoza García"},{href:"anastasio-somoza-debayle.html",kicker:"Brother and successor",label:"Anastasio Somoza Debayle"},{href:"nicaraguan-national-guard.html",kicker:"Military partner",label:"Nicaraguan National Guard"},{href:"sandinismo-nicaragua.html",kicker:"Emerging opposition",label:"Sandinismo in Nicaragua"},{href:"nicaragua.html",kicker:"Country article",label:"Nicaragua"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Luis_Somoza_Debayle",label:"Wikipedia — Luis Somoza Debayle (shared biographical baseline)"}],
    facts:[["Born","18 November 1922"],["Birthplace","León, Nicaragua"],["Died","13 April 1967"],["Party","Nationalist Liberal Party"],["President","1956–1963"],["Spouse","Isabel Urcuyo"],["Father","Anastasio Somoza García"],["Cause of death","Heart attack"]]
  }),

  "anastasio-somoza-debayle":nicaraguanBiography({title:"Anastasio Somoza Debayle",eyebrow:"1925–? · final ruler of the Somoza dynasty",
    lead:"Anastasio Somoza Debayle was a Nicaraguan military officer, president, and the final ruler of the <a href='somoza-dynasty.html'>Somoza dynasty</a>. As commander of the <a href='nicaraguan-national-guard.html'>National Guard</a>, he dominated the state from 1967 until the dynasty's late-1970s collapse and his American-pressed exile.",
    canon:"His life through the 1970s crisis is shared history except that the exact fall and exile chronology follows the setting's unresolved late-1970s war. His historical 1980 assassination in Paraguay is not imported into setting continuity; his later residence and death remain open.",
    sections:[
      {id:"early",title:"Early life and education",html:"<p>Born in León on 5 December 1925, Somoza was the younger son of Anastasio Somoza García and Salvadora Debayle. He graduated from the United States Military Academy in 1946 and trained as an engineer and officer.</p>"},
      {id:"guard",title:"National Guard commander",html:"<p>He took command of the National Guard and built a personal officer network. During his brother Luis's presidency, military authority made him the second and increasingly dominant center of the family regime.</p>"},
      {id:"presidency",title:"Presidencies",html:"<p>He served as president from 1967 to 1972 and returned in 1974 after a nominal junta interval. Guard command allowed him to retain effective power across both arrangements.</p>"},
      {id:"earthquake",title:"1972 Managua earthquake",html:"<p>Emergency administration and reconstruction after the <a href='managua-earthquake-1972.html'>1972 earthquake</a> produced accusations of diversion, favoritism, and family profit. The disaster broadened opposition among business, church, professional, and urban groups.</p>"},
      {id:"opposition",title:"Opposition and repression",html:"<p>The regime answered rural guerrillas, students, labor organizers, journalists, Catholic activists, and civilian opposition with censorship, arrest, Guard operations, and emergency rule.</p>"},
      {id:"chamorro",title:"Chamorro crisis",html:"<p>The January 1978 killing of <a href='pedro-joaquin-chamorro-cardenal.html'>Pedro Joaquín Chamorro Cardenal</a> triggered mass protest and strikes. The regime's denial did not prevent the murder from becoming a symbol of dynastic responsibility.</p>"},
      {id:"fall",title:"Fall and exile",html:"<p>A broad opposition and armed revolt broke the dynasty during the late 1970s. Washington refused unlimited protection and pressed the family into exile, but Guard remnants continued fighting in the <a href='nicaraguan-proxy-war.html'>Nicaraguan Proxy War</a>.</p>"},
      {id:"later",title:"Later life",html:"<p>The destination, political activity, and death of Somoza after exile have not been established in setting continuity. Accounts that automatically place his death in Paraguay in 1980 describe another historical branch.</p>"}
    ],
    related:[{href:"somoza-dynasty.html",kicker:"Family regime",label:"Somoza Dynasty"},{href:"nicaraguan-national-guard.html",kicker:"Power base",label:"Nicaraguan National Guard"},{href:"nicaraguan-proxy-war.html",kicker:"War of collapse",label:"Nicaraguan Proxy War"},{href:"managua-earthquake-1972.html",kicker:"Legitimacy crisis",label:"1972 Managua Earthquake"},{href:"pedro-joaquin-chamorro-cardenal.html",kicker:"Civilian opponent",label:"Pedro Joaquín Chamorro Cardenal"},{href:"luis-somoza-debayle.html",kicker:"Elder brother",label:"Luis Somoza Debayle"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Anastasio_Somoza_Debayle",label:"Wikipedia — Anastasio Somoza Debayle (pre-divergence baseline)"}],
    facts:[["Born","5 December 1925"],["Birthplace","León, Nicaragua"],["Party","Nationalist Liberal Party"],["Presidencies","1967–1972; 1974–late 1970s"],["Military office","Director of the National Guard"],["Spouse","Hope Portocarrero"],["Political fate","Exiled after dynastic collapse"],["Death","Not established in setting continuity"]]
  }),

  "pedro-joaquin-chamorro-cardenal":nicaraguanBiography({title:"Pedro Joaquín Chamorro Cardenal",eyebrow:"1924–1978 · editor and opposition leader",
    lead:"Pedro Joaquín Chamorro Cardenal was a Nicaraguan journalist, publisher of <i>La Prensa</i>, Conservative, and leading civilian opponent of the <a href='somoza-dynasty.html'>Somoza dynasty</a>. His assassination on 10 January 1978 transformed elite and popular opposition into a national crisis.",
    canon:"His life and assassination are shared history and established. The political career of his widow and the composition of the post-Somoza coalition diverge after his death.",
    sections:[
      {id:"family",title:"Family and education",html:"<p>Born in Granada on 23 September 1924, Chamorro belonged to a prominent Conservative and newspaper family. He studied law and inherited a political tradition opposed to Liberal caudillo rule.</p>"},
      {id:"press",title:"La Prensa",html:"<p>As editor and publisher of <i>La Prensa</i>, Chamorro turned the newspaper into the country's principal sustained civilian opposition platform. Censorship, closures, imprisonment, and exile repeatedly interrupted its work.</p>"},
      {id:"politics",title:"Political opposition",html:"<p>Chamorro joined Conservative and broader anti-Somoza coalitions. He argued that family dictatorship and Guard rule prevented constitutional government even when elections and civilian offices formally operated.</p>"},
      {id:"writing",title:"Writing",html:"<p>His reporting, columns, and books documented imprisonment, corruption, property concentration, and the history of the Somoza family. They linked elite constitutional opposition with a widening urban public.</p>"},
      {id:"coalition",title:"Broadening coalition",html:"<p>By the 1970s <i>La Prensa</i> connected Conservatives, business critics, students, professionals, Catholic activists, and families affected by repression without requiring agreement on a revolutionary successor state.</p>"},
      {id:"death",title:"Assassination",html:"<p>Gunmen killed Chamorro in Managua on 10 January 1978. Responsibility remained publicly disputed, but much of the opposition held the Somoza system responsible.</p>"},
      {id:"uprising",title:"Political consequences",html:"<p>His funeral, riots, strikes, attacks on family property, and renewed censorship accelerated the regime's isolation. The murder became one of the immediate catalysts of the late-1970s revolt.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>His widow <a href='violeta-chamorro.html'>Violeta Chamorro</a> assumed responsibility for <i>La Prensa</i> and carried his civilian-democratic symbolism into the provisional opposition, though her later office remains unsettled in this chronology.</p>"}
    ],
    related:[{href:"violeta-chamorro.html",kicker:"Spouse and successor at La Prensa",label:"Violeta Chamorro"},{href:"anastasio-somoza-debayle.html",kicker:"Principal opponent",label:"Anastasio Somoza Debayle"},{href:"somoza-dynasty.html",kicker:"Opposed regime",label:"Somoza Dynasty"},{href:"nicaraguan-proxy-war.html",kicker:"Crisis accelerated",label:"Nicaraguan Proxy War"},{href:"sandinismo-nicaragua.html",kicker:"Parallel opposition tradition",label:"Sandinismo in Nicaragua"},{href:"nicaragua.html",kicker:"Country article",label:"Nicaragua"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Pedro_Joaqu%C3%ADn_Chamorro_Cardenal",label:"Wikipedia — Pedro Joaquín Chamorro Cardenal (shared biographical baseline)"}],
    facts:[["Born","23 September 1924"],["Birthplace","Granada, Nicaragua"],["Died","10 January 1978"],["Occupation","Journalist and publisher"],["Newspaper","La Prensa"],["Political tradition","Conservative opposition"],["Spouse","Violeta Barrios de Chamorro"],["Cause of death","Assassination"]]
  }),

  "carlos-fonseca":nicaraguanBiography({title:"Carlos Fonseca",eyebrow:"1936–1976 · Sandinista organizer and theorist",
    lead:"Carlos Fonseca Amador was a Nicaraguan teacher, writer, and revolutionary who helped restore <a href='augusto-cesar-sandino.html'>Sandino</a> as the central symbol of armed opposition to the <a href='somoza-dynasty.html'>Somoza dynasty</a>. He was an important Marxist current within <a href='sandinismo-nicaragua.html'>Sandinismo</a>, but not the founder of a later one-party state in this chronology.",
    canon:"His early life, political education, organizing, imprisonment, exile, and 1976 death are shared history. The later unification and state monopoly of the historical FSLN do not occur in setting continuity.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Fonseca was born in Matagalpa on 23 June 1936 and grew up in modest circumstances. He excelled at school, worked with books and newspapers, and formed a lasting friendship with <a href='tomas-borge.html'>Tomás Borge</a>.</p>"},
      {id:"politics",title:"Political formation",html:"<p>Student protest, labor history, Marxist reading, and the example of the Cuban Revolution moved him from legal opposition toward armed organization against Somoza rule.</p>"},
      {id:"sandino",title:"Recovery of Sandino",html:"<p>Fonseca researched and circulated Sandino's writings at a time when the regime suppressed that memory. He joined nationalism and class politics in a program designed for Nicaraguan conditions.</p>"},
      {id:"organization",title:"Revolutionary organization",html:"<p>With Borge, Silvio Mayorga, and other militants, Fonseca helped create a Sandinista revolutionary network in the early 1960s. It remained small, clandestine, and repeatedly divided over strategy.</p>"},
      {id:"campaigns",title:"Campaigns and setbacks",html:"<p>Early rural campaigns suffered from weak supply, poor local preparation, and Guard pressure. Arrest, injury, exile, and internal debate forced Fonseca to reconsider a purely military road to power.</p>"},
      {id:"strategy",title:"Strategy and factions",html:"<p>Fonseca advocated prolonged organization among workers and peasants while other currents emphasized urban action, alliances, or rapid insurrection. These differences later survive rather than disappearing into a unified ruling front.</p>"},
      {id:"death",title:"Death",html:"<p>National Guard forces killed Fonseca near Boca de Piedra on 8 November 1976. His death made him a martyr shortly before the dynasty entered its final political crisis.</p>"},
      {id:"legacy",title:"Legacy in setting continuity",html:"<p>Marxist Sandinistas claim his writings and image, but nationalist, Catholic, agrarian, and democratic currents contest their interpretation. No Fonseca-founded party monopolizes the postwar government.</p>"}
    ],
    related:[{href:"sandinismo-nicaragua.html",kicker:"Political movement",label:"Sandinismo in Nicaragua"},{href:"augusto-cesar-sandino.html",kicker:"Principal inspiration",label:"Augusto César Sandino"},{href:"tomas-borge.html",kicker:"Friend and collaborator",label:"Tomás Borge"},{href:"daniel-ortega.html",kicker:"Younger organizer",label:"Daniel Ortega"},{href:"nicaraguan-national-guard.html",kicker:"State opponent",label:"Nicaraguan National Guard"},{href:"nicaraguan-proxy-war.html",kicker:"Posthumous conflict",label:"Nicaraguan Proxy War"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Carlos_Fonseca",label:"Wikipedia — Carlos Fonseca (shared biographical baseline)"}],
    facts:[["Born","23 June 1936"],["Birthplace","Matagalpa, Nicaragua"],["Died","8 November 1976"],["Occupation","Teacher, writer, revolutionary"],["Early affiliation","Nicaraguan Socialist Party"],["Political tradition","Marxist Sandinismo"],["Collaborator","Tomás Borge"],["Death","Killed in action"]]
  }),

  "eden-pastora":nicaraguanBiography({title:"Edén Pastora",eyebrow:"Born 1937 · Comandante Cero",
    lead:"Edén Pastora Gómez, known as <i>Comandante Cero</i>, was a Nicaraguan guerrilla leader whose 1978 seizure of the National Palace made him one of the most visible commanders of the anti-Somoza revolt. In setting continuity he represents the nationalist and southern armed current that resists both restored Guard rule and a Cuban-aligned party monopoly.",
    canon:"His birth, early opposition, 1974 hostage action, National Palace raid, and southern-front prominence are shared history. His later historical Contra, ministerial, electoral, and death record is not established here.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Pastora was born in Ciudad Darío in 1937. He encountered Sandino's history at school and entered opposition politics after concluding that the Somoza state could not be reformed through ordinary institutions.</p>"},
      {id:"guerrilla",title:"Guerrilla activity",html:"<p>He organized among peasants and southern networks and allied with Sandinista militants. His politics emphasized national liberation and personal command more than disciplined Marxist party organization.</p>"},
      {id:"1974",title:"1974 hostage action",html:"<p>Pastora participated in the December 1974 seizure of a gathering of regime figures. The release of prisoners and payment of ransom demonstrated the vulnerability of the dynasty.</p>"},
      {id:"palace",title:"National Palace raid",html:"<p>On 22 August 1978, Pastora led commandos disguised as Guardsmen into the National Palace. They held the sitting congress and exchanged hostages for prisoners, money, and safe passage.</p>"},
      {id:"zero",title:"Comandante Cero",html:"<p>His operational codename became a national public identity. The raid made Pastora a symbol of audacity and a rival center of authority within the broad opposition.</p>"},
      {id:"south",title:"Southern Front",html:"<p>Pastora commanded forces operating from the south and through Costa Rican approaches. These formations tied down Guard units even when their offensives failed to take major objectives.</p>"},
      {id:"war",title:"Nicaraguan Proxy War",html:"<p>After the dynasty's fall, nationalist fighters refused complete subordination either to former Guard structures or to externally aligned Marxists. Pastora's precise command and negotiating role remain open.</p>"},
      {id:"later",title:"Later life",html:"<p>His post-settlement party affiliation, offices, and death have not been established in setting continuity. The historical sequence of Contra leadership and later service under Ortega belongs to another branch.</p>"}
    ],
    related:[{href:"nicaraguan-proxy-war.html",kicker:"Principal conflict",label:"Nicaraguan Proxy War"},{href:"sandinismo-nicaragua.html",kicker:"Broad political tradition",label:"Sandinismo in Nicaragua"},{href:"managua-settlement.html",kicker:"Postwar framework",label:"Managua Settlement"},{href:"daniel-ortega.html",kicker:"Fellow militant",label:"Daniel Ortega"},{href:"tomas-borge.html",kicker:"Prisoner freed in 1978",label:"Tomás Borge"},{href:"costa-rica.html",kicker:"Southern operating base",label:"Costa Rica"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Ed%C3%A9n_Pastora",label:"Wikipedia — Edén Pastora (pre-divergence baseline)"}],
    facts:[["Born","22 January 1937"],["Birthplace","Ciudad Darío, Nicaragua"],["Nickname","Comandante Cero"],["Occupation","Guerrilla commander"],["Famous operation","National Palace raid, 1978"],["Principal theater","Southern Nicaragua"],["Setting alignment","Nationalist Sandinista current"],["Later career","Not established"]]
  }),

  "violeta-chamorro":nicaraguanBiography({title:"Violeta Chamorro",eyebrow:"Born 1929 · publisher and civilian opposition figure",
    lead:"Violeta Barrios de Chamorro is a Nicaraguan publisher and civilian political figure who assumed leadership of <i>La Prensa</i> after the assassination of her husband, <a href='pedro-joaquin-chamorro-cardenal.html'>Pedro Joaquín Chamorro Cardenal</a>. She became a symbol of constitutional opposition during the fall of the Somoza regime and the disputed provisional settlement.",
    canon:"Her birth, marriage, years accompanying an imprisoned and exiled opposition journalist, and assumption of La Prensa in 1978 are shared history. Membership in a provisional coalition is compatible with the setting, but her historical 1990–1997 presidency and 2025 death are not established here.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Born Violeta Barrios Torres in Rivas on 18 October 1929, she was raised in a prosperous Catholic family and educated in Nicaragua and the United States.</p>"},
      {id:"marriage",title:"Marriage and exile",html:"<p>She married Pedro Joaquín Chamorro in 1950. His repeated imprisonment and exile drew her into the practical work of sustaining a family, newspaper, and opposition network under dictatorship.</p>"},
      {id:"press",title:"La Prensa",html:"<p>After her husband's assassination in January 1978, Chamorro assumed responsibility for <i>La Prensa</i>. The paper remained a target of censorship and violence while amplifying civilian opposition.</p>"},
      {id:"symbol",title:"Opposition symbol",html:"<p>Her widowhood joined personal loss to demands for constitutional government. She could speak to Conservative, business, Catholic, professional, and democratic audiences that distrusted armed ideological leadership.</p>"},
      {id:"collapse",title:"Fall of Somoza",html:"<p>Chamorro supported removal of the dynasty and cooperation among civilian and armed opponents. That common purpose did not settle the form or foreign alignment of the next government.</p>"},
      {id:"coalition",title:"Provisional coalition",html:"<p>She participated in the civilian coalition surrounding the transfer of power. In this chronology the coalition fractures among nationalists, former Guard networks, constitutional civilians, and externally supported factions.</p>"},
      {id:"settlement",title:"Managua Settlement",html:"<p>Chamorro's publishing and civilian-democratic network gives her a plausible role in negotiations and legal opposition under the <a href='managua-settlement.html'>Managua Settlement</a>. Her exact office is not yet established.</p>"},
      {id:"later",title:"Later life",html:"<p>No Nicaraguan presidency, election result, retirement date, or death has been fixed for Chamorro in setting continuity. Those details should not be copied from the historical FSLN–Contra sequence.</p>"}
    ],
    related:[{href:"pedro-joaquin-chamorro-cardenal.html",kicker:"Husband and political partner",label:"Pedro Joaquín Chamorro Cardenal"},{href:"managua-settlement.html",kicker:"Political framework",label:"Managua Settlement"},{href:"nicaraguan-proxy-war.html",kicker:"Crisis period",label:"Nicaraguan Proxy War"},{href:"somoza-dynasty.html",kicker:"Opposed regime",label:"Somoza Dynasty"},{href:"daniel-ortega.html",kicker:"Rival political current",label:"Daniel Ortega"},{href:"nicaragua.html",kicker:"Country article",label:"Nicaragua"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Violeta_Chamorro",label:"Wikipedia — Violeta Chamorro (pre-divergence baseline)"}],
    facts:[["Born","18 October 1929"],["Birthplace","Rivas, Nicaragua"],["Birth name","Violeta Barrios Torres"],["Occupation","Publisher and political figure"],["Newspaper","La Prensa"],["Spouse","Pedro Joaquín Chamorro Cardenal"],["Setting role","Civilian opposition and coalition figure"],["Later offices","Not established"]]
  }),

  "daniel-ortega":nicaraguanBiography({title:"Daniel Ortega",eyebrow:"Born 1945 · Sandinista militant",
    lead:"José Daniel Ortega Saavedra is a Nicaraguan revolutionary associated with the Marxist current of <a href='sandinismo-nicaragua.html'>Sandinismo</a>. His imprisonment and release made him a recognized militant before the Somoza collapse, but the divided <a href='nicaraguan-proxy-war.html'>Nicaraguan Proxy War</a> prevents the historical Ortega-led state from emerging.",
    canon:"His birth, family background, early militancy, 1967 imprisonment, and 1974 release are shared history. His historical junta leadership, presidencies, marriage-era state offices, and later authoritarian government are not established in setting continuity.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Ortega was born in La Libertad, Chontales, on 11 November 1945 to a working-class family opposed to the Somoza regime. His brothers also entered revolutionary politics.</p>"},
      {id:"movement",title:"Entry into Sandinismo",html:"<p>As a student and young organizer, Ortega joined the armed Sandinista underground. His generation inherited the organizational and ideological work of Carlos Fonseca and Tomás Borge.</p>"},
      {id:"prison",title:"Imprisonment",html:"<p>Authorities arrested Ortega in 1967 after an armed bank action. He remained imprisoned for seven years and became one of the movement's best-known political prisoners.</p>"},
      {id:"release",title:"Release and exile",html:"<p>The December 1974 hostage operation secured his release with other prisoners. He passed through Cuba and returned to revolutionary activity as the regime entered its terminal crisis.</p>"},
      {id:"factions",title:"Factional politics",html:"<p>Ortega belonged to a Marxist revolutionary current, but nationalist, Catholic, agrarian, democratic, and personal-command factions also claimed Sandino's legacy. No single directorate permanently reunified them.</p>"},
      {id:"collapse",title:"Collapse of the dynasty",html:"<p>He participated in the opposition during the late-1970s collapse. The exact command, negotiating, and governmental offices he held during the transfer remain open.</p>"},
      {id:"war",title:"Proxy-war period",html:"<p>Cuban aid strengthened anti-American armed factions, while the United States and Honduras supported rival security forces. Ortega's political current was important but unable to monopolize Managua or the national armed structure.</p>"},
      {id:"later",title:"Later life",html:"<p>His post-settlement party leadership, offices, family political role, and death are not established. Historical claims that he governed Nicaragua from 1979 onward do not apply to this chronology.</p>"}
    ],
    related:[{href:"sandinismo-nicaragua.html",kicker:"Political tradition",label:"Sandinismo in Nicaragua"},{href:"carlos-fonseca.html",kicker:"Movement theorist",label:"Carlos Fonseca"},{href:"tomas-borge.html",kicker:"Senior organizer",label:"Tomás Borge"},{href:"eden-pastora.html",kicker:"Nationalist rival",label:"Edén Pastora"},{href:"violeta-chamorro.html",kicker:"Civilian rival",label:"Violeta Chamorro"},{href:"nicaraguan-proxy-war.html",kicker:"Divergent conflict",label:"Nicaraguan Proxy War"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Daniel_Ortega",label:"Wikipedia — Daniel Ortega (pre-divergence baseline)"}],
    facts:[["Born","11 November 1945"],["Birthplace","La Libertad, Chontales"],["Occupation","Revolutionary organizer"],["Political current","Marxist Sandinismo"],["Imprisoned","1967–1974"],["Released","December 1974 hostage exchange"],["Setting presidency","None established"],["Later career","Open"]]
  }),

  "tomas-borge":nicaraguanBiography({title:"Tomás Borge",eyebrow:"Born 1930 · Sandinista organizer and writer",
    lead:"Tomás Borge Martínez was a Nicaraguan revolutionary, writer, and early Sandinista organizer. A friend and collaborator of <a href='carlos-fonseca.html'>Carlos Fonseca</a>, he represented the prolonged-war and hard-line Marxist tendency within a movement that remains divided in setting continuity.",
    canon:"His birth, early opposition, collaboration with Fonseca, clandestine organizing, arrests, exile, 1976 imprisonment, and 1978 release are shared history. His historical Interior Ministry, later party offices, ambassadorship, and 2012 death are not established here.",
    sections:[
      {id:"early",title:"Early life",html:"<p>Borge was born in Matagalpa on 13 August 1930. His father had served under Sandino, and Borge entered anti-Somoza activity as a teenager through political writing and clandestine organization.</p>"},
      {id:"fonseca",title:"Partnership with Fonseca",html:"<p>Borge met Carlos Fonseca as a student and shared his reading in Nicaraguan history, Marxism, and revolutionary strategy. Their friendship became a core of the early Sandinista network.</p>"},
      {id:"founding",title:"Early organization",html:"<p>With Fonseca, Silvio Mayorga, and other exiles, Borge helped establish an armed organization claiming Sandino's name in the early 1960s. Its first rural efforts remained small and vulnerable.</p>"},
      {id:"exile",title:"Exile and clandestine work",html:"<p>Arrest, house confinement, false documents, and travel through Honduras, Costa Rica, Cuba, and other states made exile networks essential to his politics.</p>"},
      {id:"strategy",title:"Prolonged-war tendency",html:"<p>Borge favored long-term rural political and military organization. Urban insurrectionists, alliance advocates, and nationalist commanders rejected parts of that strategy.</p>"},
      {id:"prison",title:"Imprisonment",html:"<p>He was captured in 1976 and tortured in prison. News of Fonseca's death left Borge as one of the best-known surviving leaders of the early generation.</p>"},
      {id:"release",title:"1978 release",html:"<p>The National Palace raid led by <a href='eden-pastora.html'>Edén Pastora</a> secured Borge's release in August 1978. He returned to a movement approaching victory but still divided over command and ideology.</p>"},
      {id:"later",title:"Later role in setting continuity",html:"<p>Borge remains associated with the hard-line Marxist current during the proxy war. No Interior Ministry, unified-party presidency, later diplomatic office, or death date has yet been established.</p>"}
    ],
    related:[{href:"carlos-fonseca.html",kicker:"Friend and collaborator",label:"Carlos Fonseca"},{href:"augusto-cesar-sandino.html",kicker:"Family and political inspiration",label:"Augusto César Sandino"},{href:"sandinismo-nicaragua.html",kicker:"Political movement",label:"Sandinismo in Nicaragua"},{href:"eden-pastora.html",kicker:"Commander who secured his release",label:"Edén Pastora"},{href:"daniel-ortega.html",kicker:"Younger militant",label:"Daniel Ortega"},{href:"nicaraguan-proxy-war.html",kicker:"Later conflict",label:"Nicaraguan Proxy War"}],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Tom%C3%A1s_Borge",label:"Wikipedia — Tomás Borge (pre-divergence baseline)"}],
    facts:[["Born","13 August 1930"],["Birthplace","Matagalpa, Nicaragua"],["Occupation","Revolutionary and writer"],["Political current","Prolonged-war Sandinismo"],["Collaborator","Carlos Fonseca"],["Imprisoned","1976–1978"],["Released","National Palace exchange"],["Later offices","Not established"]]
  })
});

const appendNicaraguanBiographyRelated=(key,items)=>{
  const article=window.deepArticles[key];
  if(!article)return;
  article.related=article.related||[];
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
};

if(window.deepArticles["somoza-dynasty"]){
  const article=window.deepArticles["somoza-dynasty"];
  article.lead="The Somoza dynasty was the Nicaraguan political family that controlled the presidency, <a href='nicaraguan-national-guard.html'>National Guard</a>, state patronage, and a large private business estate from 1936 until the late-1970s revolutionary crisis. Its rulers were <a href='anastasio-somoza-garcia.html'>Anastasio Somoza García</a> and his sons <a href='luis-somoza-debayle.html'>Luis Somoza Debayle</a> and <a href='anastasio-somoza-debayle.html'>Anastasio Somoza Debayle</a>.";
  const linked={
    origin:"<p><a href='anastasio-somoza-garcia.html'>Anastasio Somoza García</a> used command of the American-created National Guard to dominate national politics from 1936. Presidents outside the family did not end its control of coercion, appointments, and electoral machinery.</p>",
    first:"<p>The founder combined the presidency, Guard command, American support, and acquisition of land and businesses. His assassination in 1956 transferred authority to his sons rather than ending the family system.</p>",
    succession:"<p><a href='luis-somoza-debayle.html'>Luis Somoza Debayle</a> occupied the presidency while <a href='anastasio-somoza-debayle.html'>Anastasio Somoza Debayle</a> developed military authority. The arrangement preserved family primacy through formal civilian offices and Guard command.</p>"
  };
  for(const section of article.sections||[])if(linked[section.id])section.html=linked[section.id];
}
if(window.deepArticles["nicaraguan-national-guard"]){
  const article=window.deepArticles["nicaraguan-national-guard"];
  const section=(article.sections||[]).find(item=>item.id==="somoza");
  if(section)section.html="<p><a href='anastasio-somoza-garcia.html'>Anastasio Somoza García</a> rose through command of the Guard. Family members and loyal officers used appointments, promotion, procurement, and provincial commands to preserve the dynasty through changes of formal president.</p>";
}
if(window.deepArticles["sandinismo-nicaragua"]){
  const article=window.deepArticles["sandinismo-nicaragua"];
  article.lead="Sandinismo is the Nicaraguan nationalist and revolutionary tradition named for <a href='augusto-cesar-sandino.html'>Augusto César Sandino</a>. In the fractured postwar order it develops as a broad anti-dynastic movement rather than a unified Marxist–Leninist party, bringing together guerrillas, agrarian reformers, Catholic social activists, students, unions, democratic socialists, Conservatives, and excluded business families.";
  const section=(article.sections||[]).find(item=>item.id==="sandino");
  if(section)section.html="<p><a href='augusto-cesar-sandino.html'>Sandino's</a> resistance to American occupation supplied a national language of sovereignty, armed dignity, and opposition to foreign tutelage. The symbol remained available to Catholic, conservative, social-democratic, and revolutionary critics of Somoza.</p>";
}

appendNicaraguanBiographyRelated("somoza-dynasty",[
  {href:"anastasio-somoza-garcia.html",kicker:"Founder",label:"Anastasio Somoza García"},
  {href:"luis-somoza-debayle.html",kicker:"Civilian successor",label:"Luis Somoza Debayle"},
  {href:"anastasio-somoza-debayle.html",kicker:"Final ruler",label:"Anastasio Somoza Debayle"}
]);
appendNicaraguanBiographyRelated("nicaraguan-national-guard",[
  {href:"anastasio-somoza-garcia.html",kicker:"Founding commander",label:"Anastasio Somoza García"},
  {href:"anastasio-somoza-debayle.html",kicker:"Final dynastic commander",label:"Anastasio Somoza Debayle"},
  {href:"augusto-cesar-sandino.html",kicker:"Assassinated opponent",label:"Augusto César Sandino"}
]);
appendNicaraguanBiographyRelated("sandinismo-nicaragua",[
  {href:"augusto-cesar-sandino.html",kicker:"Namesake",label:"Augusto César Sandino"},
  {href:"carlos-fonseca.html",kicker:"Marxist theorist",label:"Carlos Fonseca"},
  {href:"eden-pastora.html",kicker:"Nationalist commander",label:"Edén Pastora"},
  {href:"daniel-ortega.html",kicker:"Revolutionary organizer",label:"Daniel Ortega"},
  {href:"tomas-borge.html",kicker:"Prolonged-war organizer",label:"Tomás Borge"}
]);
appendNicaraguanBiographyRelated("nicaraguan-proxy-war",[
  {href:"anastasio-somoza-debayle.html",kicker:"Deposed ruler",label:"Anastasio Somoza Debayle"},
  {href:"pedro-joaquin-chamorro-cardenal.html",kicker:"Civilian catalyst",label:"Pedro Joaquín Chamorro Cardenal"},
  {href:"eden-pastora.html",kicker:"Nationalist commander",label:"Edén Pastora"},
  {href:"violeta-chamorro.html",kicker:"Civilian opposition",label:"Violeta Chamorro"}
]);
appendNicaraguanBiographyRelated("managua-settlement",[
  {href:"violeta-chamorro.html",kicker:"Civilian coalition",label:"Violeta Chamorro"},
  {href:"eden-pastora.html",kicker:"Armed nationalist current",label:"Edén Pastora"},
  {href:"daniel-ortega.html",kicker:"Marxist current",label:"Daniel Ortega"}
]);
appendNicaraguanBiographyRelated("nicaragua",[
  {href:"augusto-cesar-sandino.html",kicker:"National resistance symbol",label:"Augusto César Sandino"},
  {href:"anastasio-somoza-debayle.html",kicker:"Deposed dynastic ruler",label:"Anastasio Somoza Debayle"},
  {href:"violeta-chamorro.html",kicker:"Civilian opposition",label:"Violeta Chamorro"}
]);
