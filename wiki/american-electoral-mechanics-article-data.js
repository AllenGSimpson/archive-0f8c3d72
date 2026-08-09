window.deepArticles = window.deepArticles || {};

const americanElectoralMechanicsSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — mature American political order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — five-party and Hale-era politics"},
  {href:"../transcript.md",label:"Master Transcript — sincere voting, contingent selection, and issue coalitions, Turn 773"},
  {href:"1996-united-states-presidential-election.html",label:"Fractured Peace Archive — 1996 United States presidential election"},
  {href:"presidential-mandate-culture.html",label:"Fractured Peace Archive — presidential mandate culture"}
];

const americanElectoralArticle = config => ({
  category:"United States",
  eyebrow:`American electoral system · ${config.period}`,
  infoboxKicker:"Mature five-party republic",
  title:config.title,
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  sources:americanElectoralMechanicsSources,
  categories:[config.title,"United States","Five-party republic","American political history","Electoral systems"]
});

const americanElectoralRelated = [
  {href:"five-party-republic.html",kicker:"Party system",label:"Five-Party Republic"},
  {href:"presidential-mandate-culture.html",kicker:"Political culture",label:"Presidential Mandate Culture"},
  {href:"1996-united-states-presidential-election.html",kicker:"Founding election",label:"1996 Presidential Election"},
  {href:"american-elections.html",kicker:"Long electoral history",label:"American Presidential Elections"}
];

Object.assign(window.deepArticles,{
  "sincere-voting-united-states":americanElectoralArticle({
    title:"Sincere voting in the United States",period:"from 1993",
    lead:"Sincere voting is the late-twentieth-century American practice of supporting the presidential candidate and mandate a voter actually prefers rather than treating every ballot chiefly as a strategic attempt to defeat the other major party. It emerged after the National Renewal schism, split-elector reforms, and normalization of House selection made the public ballot a way to decide which three choices reached the constitutional second round.",
    canon:"The weakening of two-party lesser-evil voting after 1993, district or proportional elector allocation, top-three logic, mandate-centered candidacies, continued possibility of tactical voting, normalization during Hale's 1996 selection, and broad maturity by 2000 are established. The term's legal or academic status, polling history, state-by-state adoption, ballot rules, campaign organizations, and 2000 candidates and result remain open.",
    sections:[
      {id:"meaning",title:"Meaning",html:"<p>A sincere presidential ballot answers two questions: which national problem deserves special attention, and which candidate should represent that priority in the final bargaining stage. It is not a claim that ideology or party has disappeared.</p>"},
      {id:"origin",title:"Origins after the 1993 schism",html:"<p>The <a href='1993-national-renewal-schism.html'>National Renewal schism</a> ended the expectation that two stable national coalitions would absorb every serious candidacy. Five organizations could present distinct security, economic, social, space, or producer mandates.</p>"},
      {id:"electors",title:"Split electors",html:"<p><a href='presidential-elector-allocation-after-1993.html'>District and proportional allocation</a> made it less likely that a smaller candidacy would receive nothing from a state. Because no candidate normally reached an electoral majority, voters increasingly asked whom they wanted among the constitutional finalists.</p>"},
      {id:"mandates",title:"Voting for a mandate",html:"<p>A security voter could choose a defense candidate; an economic voter a recovery candidate; a space voter an expansion candidate; and a producer voter a decentralist. The vote measured support for a priority rather than transferring authority over every issue.</p>"},
      {id:"strategy",title:"Strategic voting survives",html:"<p>Sincere voting did not make tactical calculation irrational. A voter who regarded one contender as catastrophic could still support a more viable alternative. What weakened was the assumption that all ballots must begin with that calculation.</p>"},
      {id:"house",title:"Relationship to House selection",html:"<p>The public placed candidates in contention; the <a href='house-selection-of-president.html'>House selected an acceptable president</a> from the constitutional finalists. By the late 1990s this was increasingly described as a second round rather than a failed election.</p>"},
      {id:"limits",title:"Limits of choice",html:"<p>The <a href='boardroom-primary.html'>boardroom primary</a> still governed access to money, counsel, broadcasting, polling, transport, and staff. Voters received more meaningful choices among people whose viability had often been determined by institutional patrons.</p>"},
      {id:"culture",title:"Political culture by 2000",html:"<p>Younger voters commonly defended sincere choice as safer than granting a narrow majority an unlimited program. Older Americans formed under two-party government often regarded the same system as organized failure.</p>"}
    ],
    related:[...americanElectoralRelated,{href:"presidential-elector-allocation-after-1993.html",kicker:"Electoral mechanism",label:"Presidential Elector Allocation"},{href:"house-selection-of-president.html",kicker:"Constitutional second round",label:"House Selection of the President"},{href:"boardroom-primary.html",kicker:"Viability filter",label:"Boardroom Primary"}],
    facts:[["Emergence","After the 1993 party schism"],["Mature practice","By 2000"],["Immediate objective","Place a preferred candidate among the finalists"],["Common ballot meaning","Preferred national priority"],["Final selection","Usually the House"],["Strategic voting","Reduced, not eliminated"],["Central contradiction","Broader voter choice after an oligarchic viability filter"],["2000 result","Open"]]
  }),

  "presidential-elector-allocation-after-1993":americanElectoralArticle({
    title:"Presidential elector allocation after 1993",period:"1993–2000",
    lead:"Presidential elector allocation after 1993 was the state-level movement away from uniform winner-take-all awards toward district and proportional methods. The reforms did not abolish the Electoral College. They made fractured electoral votes normal, reduced the likelihood of an outright majority, and turned the public contest into the first stage of a recurrent contingent election.",
    canon:"Increasing state use of district or proportional elector allocation between the 1993 schism and 1996, recurrent failure to produce an electoral majority from 1996 onward, top-three finalist logic, and the effect on sincere voting are established. Exact adopting states, effective dates, formulas, thresholds, elector maps, litigation, party sponsorship, constitutional challenges, and the status of Alaska and Hawaii after 1985 remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>Winner-take-all rules had reinforced the two-party system by converting narrow state victories into unified elector blocs. After National Renewal divided, state governments faced several durable national candidacies and rising pressure to represent their actual support.</p>"},
      {id:"methods",title:"District and proportional methods",html:"<p>Some states awarded electors through congressional districts with a statewide component; others used proportional formulas. The source record does not yet assign one method to each state or fix thresholds and rounding rules.</p>"},
      {id:"spread",title:"Spread before 1996",html:"<p>The reforms spread sufficiently between 1993 and 1996 that no contender in the <a href='1996-united-states-presidential-election.html'>1996 election</a> approached a majority. Their adoption was decentralized rather than one federal redesign.</p>"},
      {id:"college",title:"Effect on the Electoral College",html:"<p>The College continued to rank candidates and determine the constitutional finalists. It ceased normally to supply a direct winner, making fractured delegations a regular feature rather than an exceptional malfunction.</p>"},
      {id:"voters",title:"Effect on voters",html:"<p>Supporters of smaller parties could plausibly help a candidate acquire electors instead of merely changing a statewide plurality. This made <a href='sincere-voting-united-states.html'>sincere voting</a> more rational.</p>"},
      {id:"campaigns",title:"Effect on campaigns",html:"<p>Campaigns pursued districts, regional concentrations, and proportional thresholds as well as statewide pluralities. Exact targeting strategies and maps remain open.</p>"},
      {id:"federalism",title:"A federal rather than national reform",html:"<p>States changed allocation within the existing constitutional machinery. The result was a nationally transformed election system assembled from nonuniform state law.</p>"},
      {id:"open",title:"Open questions",html:"<p>The archive does not yet fix the adopting sequence, formulas, court decisions, the 1996 elector map, or later statehood changes that could alter the number of delegations required in a contingent election.</p>"}
    ],
    related:[...americanElectoralRelated,{href:"sincere-voting-united-states.html",kicker:"Voter response",label:"Sincere Voting"},{href:"house-selection-of-president.html",kicker:"Constitutional consequence",label:"House Selection of the President"},{href:"1993-national-renewal-schism.html",kicker:"Political origin",label:"1993 National Renewal Schism"}],
    facts:[["Government level","State"],["Principal methods","District and proportional allocation"],["Spread","1993–1996"],["First mature result","1996 election"],["Electoral majority after 1996","Normally absent"],["Constitutional finalist pool","Top three in electoral votes"],["Uniform national formula","None established"],["State-by-state map","Open"]]
  }),

  "house-selection-of-president":americanElectoralArticle({
    title:"House selection of the President",period:"normalized from 1996",
    lead:"House selection of the President is the recurrent final stage of American presidential elections after no candidate wins an Electoral College majority. The House chooses among the constitutional finalists by state delegation. Beginning with Andrew Prescott Hale's selection in 1996–97, the procedure increasingly functions as an expected electoral second round rather than an emergency substitute for a failed popular contest.",
    canon:"Recurrent contingent election after 1996, selection among the constitutional top three, voting by state delegation, requirement for a constitutional majority of delegations, several ballots in 1996–97, Hale's selection and fixed term, bargaining legitimacy, and the distinction from parliamentary government are established. The exact 1996 ballot count, roll call, coalition, procedural rules, later elections, delegation threshold, vice-presidential outcome, and 2000 result remain open.",
    sections:[
      {id:"constitutional",title:"Constitutional basis",html:"<p>When no candidate receives an electoral majority, the House chooses the president from the top three electoral-vote recipients. Each state delegation casts one vote, and a constitutional majority of the states is required.</p>"},
      {id:"public",title:"The public first round",html:"<p>The public and Electoral College determine which candidates possess enough national or regional support to enter the House decision. The procedure therefore joins popular candidacy to federal bargaining rather than ignoring the election.</p>"},
      {id:"delegations",title:"State-delegation bargaining",html:"<p>Representatives must decide how their state will vote, often across party lines. A contender requires not only intense supporters but a geographically broad set of delegations willing to entrust that person with the executive.</p>"},
      {id:"hale",title:"The Hale precedent",html:"<p>After several ballots following the <a href='1996-united-states-presidential-election.html'>1996 election</a>, delegations selected <a href='andrew-prescott-hale.html'>Andrew Prescott Hale</a> as the least unacceptable stability candidate. The precise roll call and bargains remain open.</p>"},
      {id:"round",title:"The constitutional second round",html:"<p>Supporters described the House vote as a second round that reconciled several sincere public mandates. This language made recurrent contingent election legitimate without requiring a new constitution.</p>"},
      {id:"not-parliament",title:"Not parliamentary government",html:"<p>The president serves a fixed term, does not depend upon continuing House confidence, commands the executive, and retains an independent national constituency. Only the formation stage resembles coalition government.</p>"},
      {id:"moderation",title:"Selection pressure",html:"<p>The need for a majority of state delegations favors candidates capable of cross-party acceptance. It does not prohibit an ideologue, but requires that ideological enthusiasm be translated into broad federal trust.</p>"},
      {id:"uncertainty",title:"Unsettled mechanics",html:"<p>The later number of states, internal delegation procedures, deadlock rules, the vice-presidential selection, recorded bargains, and subsequent contingent elections remain incompletely documented.</p>"}
    ],
    related:[...americanElectoralRelated,{href:"sincere-voting-united-states.html",kicker:"Public first round",label:"Sincere Voting"},{href:"presidential-elector-allocation-after-1993.html",kicker:"Majority-fracturing mechanism",label:"Presidential Elector Allocation"},{href:"issue-coalitions-congress.html",kicker:"Later legislative practice",label:"Issue Coalitions in Congress"},{href:"hale-administration.html",kicker:"First mature administration",label:"Hale Administration"}],
    facts:[["Constitutional trigger","No Electoral College majority"],["Eligible candidates","Top three in electoral votes"],["Voting unit","State delegation"],["Required result","Constitutional majority of states"],["First mature use","1996–97"],["First selected president","Andrew Prescott Hale"],["Presidential term","Fixed"],["Exact later threshold","Open pending statehood chronology"]]
  }),

  "issue-coalitions-congress":americanElectoralArticle({
    title:"Issue coalitions in the United States Congress",period:"from the late 1990s",
    lead:"Issue coalitions are the temporary congressional majorities that replace a stable government-versus-opposition division in the mature five-party republic. A president may assemble one coalition for security, another for corporate regulation, and another for space or family policy. The practice increases selective cooperation while making legislation slower and less predictable.",
    canon:"The five-party congressional setting, absence of one durable governing coalition, subject-specific majorities, selective cooperation with a House-selected president, slower legislation, failure of unpopular initiatives when coalitions dissolve, and corporate advantage from institutional continuity are established. Exact caucus strengths, committee allocations, coalition names, legislative calendars, whip rules, and Hale-era roll calls remain open.",
    sections:[
      {id:"origin",title:"Origins",html:"<p>After the National Renewal schism, neither presidential selection nor one party label produced a unified congressional government. Representatives could support a president in the House and oppose much of his program afterward.</p>"},
      {id:"security",title:"Security coalitions",html:"<p>Foreign-policy and defense measures could unite Democratic-Republicans, Constitutional Renewal, and security-minded Renewal members without creating a general governing pact.</p>"},
      {id:"economic",title:"Economic coalitions",html:"<p>Corporate regulation, producer relief, trade, credit, and ownership measures assembled different combinations of reformers, regional producers, market institutionalists, and protected industries.</p>"},
      {id:"space",title:"Space and development coalitions",html:"<p>Space appropriations could join national prestige advocates, employment blocs, corporate carriers, technical regions, and security members who disagreed on social or economic policy.</p>"},
      {id:"president",title:"Relationship to the president",html:"<p>A president supplied a priority rather than an automatic majority. Congress decided the method, pace, contracting rules, and distribution through the subject coalition available at that moment.</p>"},
      {id:"cooperation",title:"Selective cooperation",html:"<p>A representative could truthfully say that Hale was not his candidate and that he nevertheless helped select Hale as the best available president. This weakened the incentive to make presidential failure a universal party objective.</p>"},
      {id:"slowness",title:"Legislative slowness",html:"<p>When a proposal became unpopular, no governing party needed to pass it to preserve a ministry. The coalition dissolved and the measure stopped. Policy changed more slowly but could retreat without a constitutional crisis.</p>"},
      {id:"corporations",title:"Institutional consequence",html:"<p>Temporary majorities depended upon enduring corporate data, staff, contracts, facilities, and expertise. The <a href='three-clocks-american-government.html'>corporate clock</a> therefore retained more operational memory than either presidents or coalitions.</p>"}
    ],
    related:[...americanElectoralRelated,{href:"house-selection-of-president.html",kicker:"Presidential formation",label:"House Selection of the President"},{href:"three-clocks-american-government.html",kicker:"System model",label:"Three Clocks of American Government"},{href:"corporate-patronage-united-states.html",kicker:"Institutional continuity",label:"Corporate Patronage"},{href:"hale-administration.html",kicker:"First mature presidency",label:"Hale Administration"}],
    facts:[["System","Five-party Congress"],["Coalition duration","Issue-specific and temporary"],["Stable government bloc","None"],["Presidential role","Set priority"],["Congressional role","Choose method, pace, and distribution"],["Political effect","Selective cooperation"],["Legislative effect","Slower and more reversible"],["Institutional beneficiary","Enduring corporate systems"]]
  })
});

const addAmericanElectoralRelated = (id,items) => {
  const article=window.deepArticles[id];
  if(!article)return;
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
};

addAmericanElectoralRelated("1996-united-states-presidential-election",[
  {href:"presidential-elector-allocation-after-1993.html",kicker:"Elector mechanism",label:"Presidential Elector Allocation"},
  {href:"house-selection-of-president.html",kicker:"Constitutional outcome",label:"House Selection of the President"},
  {href:"sincere-voting-united-states.html",kicker:"Electoral culture",label:"Sincere Voting"}
]);
addAmericanElectoralRelated("presidential-mandate-culture",[
  {href:"sincere-voting-united-states.html",kicker:"Voter behavior",label:"Sincere Voting"},
  {href:"house-selection-of-president.html",kicker:"Constitutional second round",label:"House Selection of the President"}
]);
addAmericanElectoralRelated("three-clocks-american-government",[
  {href:"issue-coalitions-congress.html",kicker:"Congressional method",label:"Issue Coalitions in Congress"},
  {href:"house-selection-of-president.html",kicker:"Government formation",label:"House Selection of the President"}
]);
addAmericanElectoralRelated("hale-administration",[
  {href:"house-selection-of-president.html",kicker:"Selection mechanism",label:"House Selection of the President"},
  {href:"issue-coalitions-congress.html",kicker:"Legislative setting",label:"Issue Coalitions in Congress"}
]);

const election1996=window.deepArticles["1996-united-states-presidential-election"];
if(election1996){
  const house=election1996.sections.find(section=>section.id==="house");
  if(house)house.html=house.html.replace("After several ballots, twenty-six or more state delegations selected Hale.","After several ballots, a constitutional majority of state delegations selected Hale. The exact threshold depends upon the still-open later statehood chronology.");
}
