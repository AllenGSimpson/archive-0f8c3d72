window.deepArticles = window.deepArticles || {};

const commonwealthLandSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Commonwealth wheeled armour, British artillery, and theater baselines"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Commonwealth strategy and industrial system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Kuwait and Falklands campaigns"},
  {href:"../transcript.md",label:"Master Transcript — Commonwealth concentration and expeditionary land forces"}
];

const commonwealthWheeledLandscape = {
  src:"assets/diagrams/commonwealth-wheeled-armour.svg",
  alt:"Comparison of the South African Ratel 20 mechanized carrier and Ratel 90 road-mobile fire-support vehicle",
  caption:"The Ratel pair trades soft-ground performance for road range, convoy mobility, and a shared South African wheeled platform"
};

const britishArtilleryLandscape = {
  src:"assets/diagrams/british-artillery-system.svg",
  alt:"Timeline of British and Commonwealth artillery from FV433 Abbot through the Commonwealth L45",
  caption:"British artillery separates light tracked support, medium tracked fire, air-portable guns, and long-range Commonwealth towed artillery"
};

const commonwealthLandArticle = (landscape, config) => ({
  category:"Military equipment",
  eyebrow:"Commonwealth land armament",
  landscape,
  ...config,
  sources:commonwealthLandSources,
  categories:config.categories || ["British Commonwealth","United Kingdom","South Africa","Artillery","Armoured fighting vehicles","Military equipment"]
});

Object.assign(window.deepArticles, {
  "commonwealth-wheeled-armour": commonwealthLandArticle(commonwealthWheeledLandscape, {
    title:"Commonwealth Wheeled Armour",
    eyebrow:"South African wheeled combat-vehicle family · 1976–1985",
    infoboxKicker:"Commonwealth wheeled-armour system",
    infoboxTitle:"Ratel family",
    lead:"Commonwealth wheeled armour in 1985 centers on South Africa's <a href='ratel-20.html'>Ratel 20</a> mechanized carrier and <a href='ratel-90.html'>Ratel 90</a> fire-support vehicle. The pair provides economical road and convoy mobility across the African and Atlantic system, but its poor performance in deep peat, marsh, and broken trackless slopes strictly limits employment in the Falklands.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-w2k6s writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The two registered vehicles, introduction dates, weights, crews and troop capacities, armaments, roles, common road and firm-ground strengths, soft-ground limits, post–Mount Pleasant Falklands employment boundary, and theater totals are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Dimensions, engines, speeds, ranges, armor, ammunition, production, units, losses, and post-1985 development remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"Commonwealth role",html:"<p>The Ratel family supplies a South African wheeled answer to long distances, engineered routes, convoy protection, and dispersed Commonwealth geography. It complements rather than replaces Britain's tracked FV430 and CVR(T) families.</p>"},
      {id:"registry",title:"Registered vehicles",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Vehicle</th><th>Introduction</th><th>Weight</th><th>Crew / troops</th><th>Armament</th><th>Use</th></tr></thead><tbody><tr><td><a href='ratel-20.html'>Ratel 20</a></td><td>1976</td><td>18.5 t</td><td>3 + 7</td><td>20×139 mm cannon</td><td>Mechanized carrier</td></tr><tr><td><a href='ratel-90.html'>Ratel 90</a></td><td>1978</td><td>19.0 t</td><td>4 + 6</td><td>90 mm low-recoil gun</td><td>Road-mobile fire support</td></tr></tbody></table></div>"},
      {id:"mobility",title:"Mobility envelope",html:"<p>Ratel performs well on roads, gravel, engineered tracks, and firm ground. It performs badly in deep peat, marsh, and broken trackless slopes. This is a tactical boundary, not a minor inconvenience.</p>"},
      {id:"division",title:"Carrier and fire-support roles",html:"<p>Ratel 20 carries seven dismounts behind a 20 mm cannon. Ratel 90 reduces the troop group to six and adds a fourth crew member around a low-recoil 90 mm weapon. The latter supplies mobile direct fire without becoming a main battle tank.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>The registered theater baseline is six Ratel 20s and three Ratel 90s. They are confined to road-mobile fire support and convoy security after Mount Pleasant is secured; they are not sent into the deep-peat and broken-slope reconnaissance fight.</p>"},
      {id:"commonwealth",title:"Place in the wider force",html:"<p>The small South African contingent demonstrates shared Commonwealth access without turning the expedition into a uniform British fleet. Tracked vehicles remain responsible for the ground the Ratel cannot reliably cross.</p>"}
    ],
    related:[{href:"ratel-20.html",kicker:"Mechanized carrier",label:"Ratel 20"},{href:"ratel-90.html",kicker:"Road-mobile fire support",label:"Ratel 90"},{href:"british-carriers-and-reconnaissance.html",kicker:"Tracked counterpart",label:"British Carriers and Reconnaissance"},{href:"british-artillery.html",kicker:"Commonwealth fire-support system",label:"British Artillery"},{href:"falklands-campaign-1985.html",kicker:"1985 deployment",label:"Falklands Campaign"},{href:"south-africa.html",kicker:"Country of origin",label:"South Africa"}],
    facts:[["Principal country","South Africa"],["Coverage","1976–1985"],["Registered vehicles","Ratel 20 and Ratel 90"],["Mobility strength","Roads and firm ground"],["Mobility weakness","Peat, marsh, broken slopes"],["Falklands role","Post–Mount Pleasant roads and convoys"],["Ratel 20 theater total","6"],["Ratel 90 theater total","3"]]
  }),

  "ratel-20": commonwealthLandArticle(commonwealthWheeledLandscape, {
    title:"Ratel 20",
    eyebrow:"South African mechanized carrier · introduced 1976",
    infoboxKicker:"Wheeled mechanized carrier",
    infoboxTitle:"Ratel 20",
    lead:"Ratel 20 is a South African wheeled mechanized carrier introduced in 1976. The 18.5-tonne vehicle carries a crew of three, seven infantry, and a 20×139 mm cannon, giving Commonwealth road columns protected infantry lift and cannon support.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-x7m3t writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The name, 1976 introduction, 18.5-tonne weight, three-person crew plus seven troops, 20×139 mm cannon, mechanized-carrier role, mobility envelope, post–Mount Pleasant employment, and Falklands total of six are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Automotive details, armor, dimensions, ammunition, production, units, and losses remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"Mechanized-carrier role",html:"<p>Ratel 20 combines infantry transport with a cannon able to support convoy movement and mechanized dismounts. It is neither a tracked infantry fighting vehicle nor a main battle tank.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1976</td></tr><tr><th>Combat weight</th><td>18.5 tonnes</td></tr><tr><th>Crew and troops</th><td>3 + 7</td></tr><tr><th>Armament</th><td>20×139 mm cannon</td></tr><tr><th>Role</th><td>South African mechanized carrier</td></tr></tbody></table></div>"},
      {id:"mobility",title:"Road mobility",html:"<p>The vehicle is effective on roads, gravel, engineered tracks, and firm ground. Deep peat, marsh, and broken trackless slopes sharply reduce its usefulness.</p>"},
      {id:"family",title:"Relationship to Ratel 90",html:"<p><a href='ratel-90.html'>Ratel 90</a> uses the same wheeled family for heavier direct fire. Ratel 20 retains the larger seven-person troop group and the mechanized-carrier mission.</p>"},
      {id:"falklands",title:"Falklands service",html:"<p>Six Ratel 20s form the theater baseline. They serve in convoy security and road-mobile support only after Mount Pleasant is secured, leaving cross-country work to tracked vehicles.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Engine, speed, range, wheel arrangement details, armor, ammunition, production, units, tactical losses, and later variants remain open.</p>"}
    ],
    related:[{href:"commonwealth-wheeled-armour.html",kicker:"Vehicle family",label:"Commonwealth Wheeled Armour"},{href:"ratel-90.html",kicker:"Fire-support companion",label:"Ratel 90"},{href:"fv435-cavalier.html",kicker:"British tracked IFV",label:"FV435 Cavalier"},{href:"fv432.html",kicker:"British tracked carrier",label:"FV432"},{href:"falklands-campaign-1985.html",kicker:"1985 theater",label:"Falklands Campaign"},{href:"south-africa.html",kicker:"Country of origin",label:"South Africa"}],
    facts:[["Country of origin","South Africa"],["Introduction","1976"],["Type","Wheeled mechanized carrier"],["Combat weight","18.5 t"],["Crew","3"],["Troops","7"],["Armament","20×139 mm cannon"],["Falklands total","6"]]
  }),

  "ratel-90": commonwealthLandArticle(commonwealthWheeledLandscape, {
    title:"Ratel 90",
    eyebrow:"South African fire-support vehicle · introduced 1978",
    infoboxKicker:"Wheeled direct-fire vehicle",
    infoboxTitle:"Ratel 90",
    lead:"Ratel 90 is a South African road-mobile fire-support vehicle introduced in 1978. It places a 90 mm low-recoil gun, four-person crew, and six troops on the Ratel wheeled platform, providing direct fire along the engineered routes of the Commonwealth system.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-y4n8u writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The name, 1978 introduction, 19.0-tonne weight, four-person crew plus six troops, 90 mm low-recoil gun, road-mobile fire-support role, mobility envelope, post–Mount Pleasant employment, and Falklands total of three are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Automotive details, armor, gun performance, ammunition, production, units, and losses remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"Road-mobile fire support",html:"<p>Ratel 90 supplies direct fire to wheeled columns and infantry without claiming the protection or cross-country authority of a tank. Its value lies in placing a larger gun where roads and firm ground permit movement.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1978</td></tr><tr><th>Combat weight</th><td>19.0 tonnes</td></tr><tr><th>Crew and troops</th><td>4 + 6</td></tr><tr><th>Main armament</th><td>90 mm low-recoil gun</td></tr><tr><th>Role</th><td>Road-mobile fire support</td></tr></tbody></table></div>"},
      {id:"mobility",title:"Terrain limits",html:"<p>Good road, gravel, engineered-track, and firm-ground performance does not translate to peat, marsh, or broken trackless slopes. Commanders must keep the vehicle inside its route network.</p>"},
      {id:"family",title:"Relationship to Ratel 20",html:"<p>The vehicle adds 0.5 tonnes and one crew member relative to <a href='ratel-20.html'>Ratel 20</a>, while carrying six rather than seven troops. The two vehicles share a mobility concept but perform different combat tasks.</p>"},
      {id:"falklands",title:"Falklands service",html:"<p>Three Ratel 90s form the theater baseline. Their employment begins after Mount Pleasant is secured and remains confined to road-mobile fire support and convoy security.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Gun ballistics, ammunition, fire control, engine, speed, range, armor, dimensions, production, units, and battle claims remain open.</p>"}
    ],
    related:[{href:"commonwealth-wheeled-armour.html",kicker:"Vehicle family",label:"Commonwealth Wheeled Armour"},{href:"ratel-20.html",kicker:"Mechanized-carrier companion",label:"Ratel 20"},{href:"fv101-scorpion.html",kicker:"British light fire support",label:"FV101 Scorpion"},{href:"chieftain-tank.html",kicker:"British heavy direct fire",label:"Chieftain"},{href:"falklands-campaign-1985.html",kicker:"1985 theater",label:"Falklands Campaign"},{href:"south-africa.html",kicker:"Country of origin",label:"South Africa"}],
    facts:[["Country of origin","South Africa"],["Introduction","1978"],["Type","Road-mobile fire-support vehicle"],["Combat weight","19.0 t"],["Crew","4"],["Troops","6"],["Main armament","90 mm low-recoil gun"],["Falklands total","3"]]
  }),

  "british-artillery": commonwealthLandArticle(britishArtilleryLandscape, {
    title:"British Artillery, 1965–1985",
    eyebrow:"British and Commonwealth field-artillery system",
    infoboxKicker:"Commonwealth artillery registry",
    infoboxTitle:"British artillery system",
    lead:"British field artillery in 1985 divides four missions among the light tracked <a href='fv433-abbot.html'>FV433 Abbot</a>, medium tracked <a href='fv436-bishop-ii.html'>FV436 Bishop II</a>, air-portable <a href='l118-light-gun.html'>L118 Light Gun</a>, and South African-led <a href='commonwealth-l45.html'>Commonwealth L45</a>. The system favors deployable complementary weapons rather than one universal gun.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-z9p5v writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The four systems, introduction dates, calibers, barrel lengths, weights, standard ranges, roles, Bishop II and later-program boundaries, Kuwait employment of Abbot and L118, and Falklands totals of 12 Abbots and six Bishop IIs are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Crews, ammunition, rates of fire, mobility details, production, units, losses, and post-1985 programs remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"doctrine",title:"Complementary artillery",html:"<p>The artillery registry separates tracked support for armored formations from guns optimized for air and amphibious movement or long-range Commonwealth fire. Range and mobility are balanced against lift, terrain, and sustainment.</p>"},
      {id:"registry",title:"Registered systems",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Introduction</th><th>Armament</th><th>Weight</th><th>Standard range</th><th>Role</th></tr></thead><tbody><tr><td><a href='fv433-abbot.html'>FV433 Abbot</a></td><td>1965</td><td>105 mm L13 L/35</td><td>16.6 t</td><td>17.4 km</td><td>Light tracked divisional artillery</td></tr><tr><td><a href='l118-light-gun.html'>L118 Light Gun</a></td><td>1974</td><td>105 mm L19</td><td>1.9 t</td><td>17.2 km</td><td>Air-portable and amphibious artillery</td></tr><tr><td><a href='fv436-bishop-ii.html'>FV436 Bishop II</a></td><td>1977</td><td>155 mm L39</td><td>32.0 t</td><td>24.7 km</td><td>Medium tracked divisional artillery</td></tr><tr><td><a href='commonwealth-l45.html'>Commonwealth L45</a></td><td>1979</td><td>155 mm L45</td><td>13.8 t</td><td>30.0 km</td><td>South African-led long-range towed gun</td></tr></tbody></table></div>"},
      {id:"tracked",title:"Tracked divisional layer",html:"<p>Abbot supplies 105 mm fire in a light tracked package from 1965. Bishop II adds a 155 mm L39 medium tracked system in 1977 and becomes the principal heavier companion in the 1985 Falklands baseline.</p>"},
      {id:"deployable",title:"Deployable and long-range guns",html:"<p>L118 nearly matches Abbot's standard range at a fraction of the weight, allowing air-portable and amphibious employment. Commonwealth L45 extends standard range to 30 km through a larger South African-led towed system.</p>"},
      {id:"campaigns",title:"Kuwait and Falklands",html:"<p>Abbot and newly introduced L118 guns accompany the 1974 Commonwealth concentration in Kuwait. In the Falklands, the fixed theater baseline records 12 Abbots and six Bishop IIs. L118 and L45 theater totals are not registered.</p>"},
      {id:"boundary",title:"Program boundaries",html:"<p>Bishop II replaces the anachronistic use of AS-90 in accounts of the 1970s and early 1980s. The setting's AS-90-equivalent does not enter service before the 1990s, and a wheeled G6-class gun also remains outside 1985 service.</p>"}
    ],
    related:[{href:"fv433-abbot.html",kicker:"Light tracked artillery",label:"FV433 Abbot"},{href:"fv436-bishop-ii.html",kicker:"Medium tracked artillery",label:"FV436 Bishop II"},{href:"l118-light-gun.html",kicker:"Air-portable artillery",label:"L118 Light Gun"},{href:"commonwealth-l45.html",kicker:"Long-range towed artillery",label:"Commonwealth L45"},{href:"commonwealth-wheeled-armour.html",kicker:"Road-mobile companion",label:"Commonwealth Wheeled Armour"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country system","British Commonwealth"],["Coverage","1965–1985"],["Registered systems","Four"],["Calibers","105 mm and 155 mm"],["Longest standard range","30.0 km"],["Falklands Abbot total","12"],["Falklands Bishop II total","6"],["AS-90-equivalent","Not before the 1990s"]]
  }),

  "fv433-abbot": commonwealthLandArticle(britishArtilleryLandscape, {
    title:"FV433 Abbot",
    eyebrow:"British self-propelled artillery · introduced 1965",
    infoboxKicker:"Light tracked divisional artillery",
    infoboxTitle:"FV433 Abbot",
    lead:"FV433 Abbot is Britain's light tracked divisional-artillery system introduced in 1965. Its 105 mm L13 L/35 has a registered standard range of 17.4 km, while the 16.6-tonne tracked platform allows it to accompany armored formations in Kuwait and the Falklands.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-a3q7w writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The name, 1965 introduction, 105 mm L13 L/35, 16.6-tonne weight, 17.4 km standard range, light tracked divisional role, Kuwait presence, and Falklands total of 12 are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Crew, chassis details, ammunition, rate of fire, armor, engine, speed, production, units, and losses remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"Divisional role",html:"<p>Abbot gives mobile formations organic tracked artillery without the weight of a medium 155 mm system. Its function is sustained divisional support rather than direct-fire combat.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1965</td></tr><tr><th>Armament</th><td>105 mm L13 L/35</td></tr><tr><th>Combat weight</th><td>16.6 tonnes</td></tr><tr><th>Standard range</th><td>17.4 km</td></tr><tr><th>Role</th><td>Light tracked divisional artillery</td></tr></tbody></table></div>"},
      {id:"system",title:"Place in the artillery system",html:"<p>Abbot's standard range is close to that of the much lighter L118, but its tracked mount provides protected mobility. <a href='fv436-bishop-ii.html'>Bishop II</a> later adds heavier 155 mm tracked fire.</p>"},
      {id:"kuwait",title:"Kuwait War",html:"<p>Abbot accompanies Chieftain, FV432, Cavalier, Swingfire, CVR(T), and newly introduced L118 guns in the Commonwealth ground concentration of 1974.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Twelve Abbots form the registered theater strength. Actual daily availability can fall below that planning baseline through shipping, maintenance, weather, and battle damage.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Crew, ammunition families, rate of fire, fire control, mobility, armor, production, organizations, engagement claims, and losses remain open.</p>"}
    ],
    related:[{href:"british-artillery.html",kicker:"National artillery system",label:"British Artillery"},{href:"fv436-bishop-ii.html",kicker:"Medium tracked companion",label:"FV436 Bishop II"},{href:"l118-light-gun.html",kicker:"Deployable 105 mm companion",label:"L118 Light Gun"},{href:"british-carriers-and-reconnaissance.html",kicker:"Tracked support family",label:"British Carriers and Reconnaissance"},{href:"kuwait-war.html",kicker:"1974 campaign",label:"Kuwait War"},{href:"falklands-campaign-1985.html",kicker:"1985 campaign",label:"Falklands Campaign"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1965"],["Type","Tracked self-propelled artillery"],["Armament","105 mm L13 L/35"],["Combat weight","16.6 t"],["Standard range","17.4 km"],["Kuwait service","Yes"],["Falklands total","12"]]
  }),

  "fv436-bishop-ii": commonwealthLandArticle(britishArtilleryLandscape, {
    title:"FV436 Bishop II",
    eyebrow:"British self-propelled artillery · introduced 1977",
    infoboxKicker:"Medium tracked divisional artillery",
    infoboxTitle:"FV436 Bishop II",
    lead:"FV436 Bishop II is Britain's medium tracked divisional-artillery system introduced in 1977. The 32-tonne vehicle carries a 155 mm L39 with a registered standard range of 24.7 km and supplies the heavier tracked artillery layer beside FV433 Abbot.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-b8r4x writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The name, 1977 introduction, 155 mm L39, 32.0-tonne weight, 24.7 km standard range, medium tracked divisional role, replacement of premature AS-90 references, and Falklands total of six are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Crew, chassis, ammunition, rate of fire, fire control, armor, engine, production, units, and losses remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"requirement",title:"Medium tracked requirement",html:"<p>Bishop II increases caliber and standard range above Abbot while retaining tracked mobility for divisional formations. It is a heavier complement rather than a simple name change.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1977</td></tr><tr><th>Armament</th><td>155 mm L39</td></tr><tr><th>Combat weight</th><td>32.0 tonnes</td></tr><tr><th>Standard range</th><td>24.7 km</td></tr><tr><th>Role</th><td>Medium tracked divisional artillery</td></tr></tbody></table></div>"},
      {id:"comparison",title:"Comparison with Abbot",html:"<p>Bishop II adds 15.4 tonnes and 7.3 km of registered standard range relative to <a href='fv433-abbot.html'>Abbot</a>. The difference reflects distinct 155 mm medium and 105 mm light tracked layers.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Six Bishop IIs form the registered theater strength, half the Abbot total. Their presence gives the expedition a heavier tracked counterbattery and interdiction capability without importing a later artillery generation.</p>"},
      {id:"boundary",title:"AS-90 boundary",html:"<p>Bishop II is the correct British medium tracked system for the late 1970s and 1985. The setting's AS-90-equivalent program does not enter service before the 1990s.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Crew, ammunition, rate of fire, fire control, chassis detail, mobility, protection, production, unit assignments, and combat record remain open.</p>"}
    ],
    related:[{href:"british-artillery.html",kicker:"National artillery system",label:"British Artillery"},{href:"fv433-abbot.html",kicker:"Light tracked companion",label:"FV433 Abbot"},{href:"commonwealth-l45.html",kicker:"Longer-range towed system",label:"Commonwealth L45"},{href:"chieftain-tank.html",kicker:"Armored-force companion",label:"Chieftain"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal armored battle",label:"Battle of Mount Pleasant"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands War"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1977"],["Type","Tracked self-propelled artillery"],["Armament","155 mm L39"],["Combat weight","32.0 t"],["Standard range","24.7 km"],["Falklands total","6"],["AS-90-equivalent in 1985","No"]]
  }),

  "l118-light-gun": commonwealthLandArticle(britishArtilleryLandscape, {
    title:"L118 Light Gun",
    eyebrow:"British light artillery · introduced 1974",
    infoboxKicker:"Air-portable and amphibious artillery",
    infoboxTitle:"L118 Light Gun",
    lead:"The L118 Light Gun is Britain's air-portable and amphibious 105 mm artillery system, introduced in 1974. At 1.9 tonnes, its 105 mm L19 reaches a registered 17.2 km and gives airborne, marine, and expeditionary forces artillery that can travel where tracked vehicles cannot.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-c5s9y writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The name, 1974 introduction, 105 mm L19, 1.9-tonne weight, 17.2 km standard range, air-portable and amphibious role, and Kuwait service are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Crew, ammunition, rate of fire, towing arrangements, airlift method, production, units, Falklands total, losses, and variants remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"role",title:"Expeditionary role",html:"<p>L118 is designed around lift and access. It supports airborne and amphibious forces without requiring the shipping, bridges, recovery, or fuel demanded by a tracked self-propelled gun.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1974</td></tr><tr><th>Armament</th><td>105 mm L19</td></tr><tr><th>Combat weight</th><td>1.9 tonnes</td></tr><tr><th>Standard range</th><td>17.2 km</td></tr><tr><th>Role</th><td>Air-portable and amphibious artillery</td></tr></tbody></table></div>"},
      {id:"comparison",title:"Range and weight",html:"<p>L118's standard range is only 0.2 km below Abbot's registered figure while its weight is 14.7 tonnes lower. The comparison does not erase Abbot's protected tracked mobility or establish equal sustained-fire performance.</p>"},
      {id:"kuwait",title:"Kuwait introduction",html:"<p>Newly introduced L118 guns accompany the British and associated ground concentration during the 1974 Kuwait War. They fit the airborne, Royal Marine, and dispersed-base character of the response.</p>"},
      {id:"falklands",title:"Falklands boundary",html:"<p>The register does not give an L118 Falklands theater total. Its general suitability for air and amphibious movement must not be converted into an invented deployment number or battle history.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Crew, ammunition, rate of fire, recoil system, towing vehicle, helicopter procedure, production, units, campaigns beyond Kuwait, and later variants remain open.</p>"}
    ],
    related:[{href:"british-artillery.html",kicker:"National artillery system",label:"British Artillery"},{href:"fv433-abbot.html",kicker:"Tracked 105 mm companion",label:"FV433 Abbot"},{href:"fv436-bishop-ii.html",kicker:"Medium tracked artillery",label:"FV436 Bishop II"},{href:"commonwealth-l45.html",kicker:"Long-range towed artillery",label:"Commonwealth L45"},{href:"kuwait-war.html",kicker:"Introduction-era campaign",label:"Kuwait War"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1974"],["Type","Air-portable and amphibious gun"],["Armament","105 mm L19"],["Combat weight","1.9 t"],["Standard range","17.2 km"],["Kuwait service","Yes"],["Falklands total","Open"]]
  }),

  "commonwealth-l45": commonwealthLandArticle(britishArtilleryLandscape, {
    title:"Commonwealth L45",
    eyebrow:"Commonwealth long-range artillery · introduced 1979",
    infoboxKicker:"South African-led towed gun",
    infoboxTitle:"Commonwealth L45",
    lead:"Commonwealth L45 is a South African-led 155 mm long-range towed gun introduced in 1979. The 13.8-tonne L45 system has a registered standard range of 30.0 km, the longest of the four British and Commonwealth artillery systems recorded for 1985.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-d2t6z writer=g kind=revision created=2026-08-15T20:25:00-06:00 -->The designation, 1979 introduction, South African-led development, 155 mm L45 armament, 13.8-tonne weight, 30.0 km standard range, long-range towed role, and exclusion of a wheeled G6-class system from 1985 service are fixed.<sup class='canon-note' data-provenance='a'>[a]</sup> Partners, crew, ammunition, rate of fire, carriage, towing vehicles, production, units, campaigns, and variants remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"purpose",title:"Long-range requirement",html:"<p>Commonwealth L45 extends field-artillery reach without placing the weapon on a self-propelled chassis. Its 30 km registered standard range exceeds Bishop II by 5.3 km.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1979</td></tr><tr><th>Leadership</th><td>South African-led Commonwealth program</td></tr><tr><th>Armament</th><td>155 mm L45</td></tr><tr><th>Combat weight</th><td>13.8 tonnes</td></tr><tr><th>Standard range</th><td>30.0 km</td></tr><tr><th>Role</th><td>Long-range towed artillery</td></tr></tbody></table></div>"},
      {id:"commonwealth",title:"Commonwealth development",html:"<p>The program is South African-led but identified as Commonwealth, reflecting distributed design and procurement rather than a purely British national gun. Exact partner workshares remain open.</p>"},
      {id:"mobility",title:"Towed mobility",html:"<p>The gun trades self-propelled protection and immediate movement for range and a lighter complete system than Bishop II. Towing vehicles, emplacement times, and tactical movement procedures are not fixed.</p>"},
      {id:"boundary",title:"G6-class boundary",html:"<p>A wheeled G6-class self-propelled gun does not enter service by 1985. Commonwealth L45 therefore remains a towed system rather than evidence for an unregistered wheeled artillery fleet.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Development partners, crew, ammunition, rate of fire, fire control, carriage, towing arrangements, production, national allocations, deployments, and later variants remain open.</p>"}
    ],
    related:[{href:"british-artillery.html",kicker:"Common artillery system",label:"British Artillery"},{href:"fv436-bishop-ii.html",kicker:"Tracked 155 mm companion",label:"FV436 Bishop II"},{href:"l118-light-gun.html",kicker:"Deployable towed companion",label:"L118 Light Gun"},{href:"commonwealth-wheeled-armour.html",kicker:"South African vehicle family",label:"Commonwealth Wheeled Armour"},{href:"south-africa.html",kicker:"Program leader",label:"South Africa"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"}],
    facts:[["Program","South African-led Commonwealth"],["Introduction","1979"],["Type","Long-range towed artillery"],["Armament","155 mm L45"],["Combat weight","13.8 t"],["Standard range","30.0 km"],["Longest registered range","Yes"],["Wheeled G6 class in 1985","No"]]
  })
});

const addCommonwealthLandRelation = (slug, relation) => {
  const article = window.deepArticles[slug];
  if (article && Array.isArray(article.related) && !article.related.some(item => item.href === relation.href)) article.related.push(relation);
};

addCommonwealthLandRelation("british-carriers-and-reconnaissance", {href:"commonwealth-wheeled-armour.html",kicker:"Wheeled Commonwealth companion",label:"Commonwealth Wheeled Armour"});
addCommonwealthLandRelation("falklands-campaign-1985", {href:"british-artillery.html",kicker:"British theater fire support",label:"British Artillery"});
addCommonwealthLandRelation("operation-sceptre", {href:"fv436-bishop-ii.html",kicker:"Medium tracked fire support",label:"FV436 Bishop II"});
addCommonwealthLandRelation("battle-mount-pleasant-1985", {href:"commonwealth-wheeled-armour.html",kicker:"Post-battle road deployment",label:"Commonwealth Wheeled Armour"});
