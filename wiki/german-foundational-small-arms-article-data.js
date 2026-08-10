window.deepArticles = window.deepArticles || {};

const germanFoundationalSmallArmsSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — German small-arms registry, dates, cartridges, feeds, and roles"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German victory, demobilization, armed forces, and export system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — wartime and postwar introduction chronology"},
  {href:"../transcript.md",label:"Master Transcript — German client deliveries and postwar industrial context"},
  {href:"https://www.dhm.de/lemo/kapitel/der-zweite-weltkrieg/wissenschaft-forschung-und-technik",label:"Deutsches Historisches Museum — StG 44 and MG 42 wartime development"},
  {href:"https://history.army.mil/Portals/143/Images/Publications/ArmyHistoryMag/pdf/20102019/AH96%28W%29.pdf",label:"U.S. Army Center of Military History — StG 44 development and intermediate-cartridge doctrine"},
  {href:"https://americanhistory.si.edu/collections/object/nmah_1093839",label:"Smithsonian National Museum of American History — StG 44 collection record"},
  {href:"https://www.iwm.org.uk/collections/item/object/30034546",label:"Imperial War Museums — MG 42 collection record"}
];

const germanFoundationalSmallArm = config => ({
  category:"Military equipment",
  eyebrow:"Greater German Reich · infantry weapon",
  infoboxKicker:"German small arm",
  ...config,
  sources:germanFoundationalSmallArmsSources,
  categories:config.categories || ["Greater German Reich","Heer","Small arms","Infantry weapons","Military equipment"]
});

Object.assign(window.deepArticles, {
  "stg-44": germanFoundationalSmallArm({
    title:"StG 44",
    eyebrow:"German wartime assault rifle · introduced 1944",
    infoboxTitle:"Sturmgewehr 44",
    lead:"The Sturmgewehr 44, commonly abbreviated StG 44, was the German 7.92×33 mm assault rifle introduced in 1944. Its intermediate cartridge, selective fire, 30-round magazine, and stamped construction combined rifle handling with a volume of fire previously associated with submachine guns. It established the service category continued by StG 45A and the later StG 60.",
    canon:"The StG 44 designation, 1944 introduction, 7.92×33 mm cartridge, 30-round magazine, wartime assault-rifle role, and lineage through StG 45A are fixed. The MP 43 and MP 44 development history, gas-operated selective-fire action, and broad stamped construction are inherited technical records. Complete wartime and postwar production totals, plant shares, unit allocations, losses, rebuilds, reserve inventories, exports, and final withdrawal remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The weapon developed from the MKb 42 and MP 43/44 programs around a cartridge less powerful and lighter than the standard 7.92×57 mm rifle round. The reduced recoil and ammunition weight allowed one infantry weapon to deliver controlled semiautomatic fire and short automatic fire at ordinary combat distances.</p>"},
      {id:"designation",title:"Designation",html:"<p>The weapon appeared under the MP 43 and MP 44 names before receiving the <em>Sturmgewehr 44</em> designation. The new term described an assault rifle rather than a machine pistol and became the naming basis for the postwar German StG sequence.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1944</td></tr><tr><th>Cartridge</th><td>7.92×33 mm</td></tr><tr><th>Feed</th><td>30-round detachable magazine</td></tr><tr><th>Action</th><td>Gas operated; selective fire</td></tr><tr><th>Construction</th><td>Stamped-steel receiver and assemblies</td></tr><tr><th>Role</th><td>Wartime assault rifle</td></tr></tbody></table></div>"},
      {id:"cartridge",title:"7.92×33 mm cartridge",html:"<p>The intermediate cartridge was shorter and less powerful than 7.92×57 mm ammunition used in service rifles and machine guns. A soldier could carry more rounds, and automatic fire was more controllable, while the weapon retained substantially greater range and power than a pistol-caliber submachine gun.</p>"},
      {id:"production",title:"Production",html:"<p>Stamped components reduced dependence on extensive machining but did not make the rifle trivial to manufacture. Barrels, bolts, gas systems, magazines, heat treatment, gauges, and ammunition still required coordinated industrial production.</p><p>A consolidated wartime production total for the extended war has not been published.</p>"},
      {id:"service",title:"Wartime service",html:"<p>StG 44 entered field service during the final campaigns against the Soviet Union and the continuing war with Britain. Issue remained uneven because older rifles, submachine guns, and machine guns already existed in enormous numbers and 7.92×33 mm required its own ammunition supply.</p>"},
      {id:"postwar",title:"Postwar service",html:"<p>Germany retained 7.92×33 mm ammunition for the StG 44 and StG 45 family after 1947. Surviving StG 44 rifles passed into reserves, training stocks, security forces, client deliveries, and colonial inventories as newer production concentrated on <a href='stg-45a.html'>StG 45A</a>.</p>"},
      {id:"successors",title:"Successors",html:"<p>StG 45A simplified the gas-operated stamped-rifle system without adopting the separate roller-delayed Gerät 06 mechanism. <a href='stg-60.html'>StG 60</a> later shifted the standard assault-rifle line to 5.6×40 mm, while 7.92×33 mm remained a transitional reserve standard.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The StG 44 established the German institutional expectation that ordinary infantry should carry a selective-fire weapon using an intermediate cartridge. Later rifles changed mechanism, caliber, furniture, sights, and mounting systems while retaining that category.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"National lineage",label:"German Postwar Small Arms"},{href:"stg-45a.html",kicker:"Immediate successor",label:"StG 45A"},{href:"stg-60.html",kicker:"Small-caliber successor",label:"StG 60"},{href:"mg-42.html",kicker:"Contemporary universal weapon",label:"MG 42"},{href:"wehrmacht.html",kicker:"Principal operator",label:"Wehrmacht"},{href:"world-war-ii.html",kicker:"Parent conflict",label:"Second World War"}],
    facts:[["Country of origin","Greater German Reich"],["Full name","Sturmgewehr 44"],["Abbreviation","StG 44"],["Introduced","1944"],["Type","Assault rifle"],["Cartridge","7.92×33 mm"],["Feed","30-round magazine"],["Action","Gas operated; selective fire"],["Construction","Stamped steel"],["Immediate successor","StG 45A"],["Later standard successor","StG 60"]]
  }),

  "stg-45a": germanFoundationalSmallArm({
    title:"StG 45A",
    eyebrow:"German simplified assault rifle · introduced 1945",
    infoboxTitle:"Sturmgewehr 45A",
    lead:"The Sturmgewehr 45A was the simplified German 7.92×33 mm assault rifle introduced in 1945 and retained as the first postwar production and export standard. It was a gas-operated, stamped-steel reliability development of the StG 44. It was distinct from the experimental roller-delayed StG 45(M) and Gerät 06 work.",
    canon:"The StG 45A designation, 1945 introduction, 7.92×33 mm cartridge, 30-round magazine, gas-operated stamped-steel construction, reliability-development purpose, simplified postwar and export role, and separation from StG 45(M) and Gerät 06 are fixed. Manufacturer, action details beyond gas operation, dimensions, mass, barrel length, rate of fire, production total, variants, customers, unit allocations, retirement, and surviving examples remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>StG 45A reorganized the mature <a href='stg-44.html'>StG 44</a> concept for continued production during the final war year and the transition to a peacetime armaments floor. Designers emphasized fewer difficult parts, more consistent manufacture, field reliability, and repair with existing stamped-rifle skills.</p>"},
      {id:"designation",title:"Designation",html:"<p>The suffix <em>A</em> identifies the accepted service development recorded in the German registry. It should not be confused with StG 45(M), the late-war roller-delayed prototype commonly discussed in technical literature.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1945</td></tr><tr><th>Cartridge</th><td>7.92×33 mm</td></tr><tr><th>Feed</th><td>30-round detachable magazine</td></tr><tr><th>Action</th><td>Gas operated</td></tr><tr><th>Construction</th><td>Stamped steel</td></tr><tr><th>Roles</th><td>Postwar production rifle; export standard</td></tr></tbody></table></div>"},
      {id:"mechanism",title:"Mechanism",html:"<p>The rifle retained a gas-operated action. The exact bolt, gas regulator, return system, trigger mechanism, and parts relationship with StG 44 have not been established in the published registry.</p><p>Roller-delayed Gerät 06 engineering continued as a separate technical line.</p>"},
      {id:"production",title:"Postwar production",html:"<p>StG 45A provided a rifle that factories could continue building while wartime output was reduced and plants were reassigned among military floors, civilian conversion, reconstruction, exports, and eastern-security requirements.</p><p>Production totals and principal works remain unregistered.</p>"},
      {id:"service",title:"German service",html:"<p>The weapon served beside StG 44, Karabiner 98k, submachine guns, and full-power machine guns in the immediate postwar force. It supplied ordinary replacements and new formations until later rifle programs changed the cartridge and technical standard.</p>"},
      {id:"exports",title:"Exports",html:"<p>StG 45A became an early German export standard. Client packages could include rifles, MG 42 or later MG 52 machine guns, Panzerfausts, radios, optical equipment, ammunition, spare parts, and advisers.</p><p>The complete customer list and local designations remain open.</p>"},
      {id:"geraet-06",title:"Gerät 06 separation",html:"<p>Gerät 06 and StG 45(M) research survived independently and later informed <a href='gewehr-58.html'>Gewehr 58</a> and machine-gun engineering. The service StG 45A did not use that experimental identity and should not inherit its specifications.</p>"},
      {id:"replacement",title:"Replacement",html:"<p><a href='stg-60.html'>StG 60</a> entered service in 1961 with the smaller 5.6×40 mm cartridge and became the standard assault rifle. StG 45A remained in reserve, client, security, and colonial stocks wherever the older ammunition system continued.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"National lineage",label:"German Postwar Small Arms"},{href:"stg-44.html",kicker:"Gas-operated predecessor",label:"StG 44"},{href:"gewehr-58.html",kicker:"Separate Gerät 06 descendant",label:"Gewehr 58"},{href:"stg-60.html",kicker:"Standard successor",label:"StG 60"},{href:"mg-52.html",kicker:"Contemporary export weapon",label:"MG 52"},{href:"einheitspakt.html",kicker:"Client system",label:"Einheitspakt"}],
    facts:[["Country of origin","Greater German Reich"],["Full name","Sturmgewehr 45A"],["Introduced","1945"],["Type","Assault rifle"],["Cartridge","7.92×33 mm"],["Feed","30-round magazine"],["Action","Gas operated"],["Construction","Stamped steel"],["Primary postwar roles","Production and export standard"],["Roller-delayed StG 45(M)","Separate development"],["Standard successor","StG 60"]]
  }),

  "mg-42": germanFoundationalSmallArm({
    title:"MG 42",
    eyebrow:"German universal machine gun · introduced 1942",
    infoboxTitle:"Maschinengewehr 42",
    lead:"The Maschinengewehr 42 was Germany's 7.92×57 mm universal machine gun introduced in 1942. Its stamped construction, recoil-operated roller-locked action, quick-change barrel, and high cyclic rate allowed one weapon to serve from bipod, tripod, vehicle, and prepared defensive mounts. It remained the wartime foundation of the MG 52 and MG 68 line.",
    canon:"The MG 42 designation, 1942 introduction, 7.92×57 mm cartridge, 50-round belt-segment feed, wartime universal-machine-gun role, and lineage through MG 52 are fixed. The recoil-operated roller-locked action, stamped construction, quick-change barrel, high rate of fire, and broad ground and vehicle employment are inherited technical records. Complete wartime and postwar production totals, manufacturers, unit distributions, late-war variants, losses, rebuilds, reserve stocks, exports, and final withdrawal remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>MG 42 followed MG 34 as a weapon intended for light, sustained-fire, vehicle, and antiaircraft use. Stamped components and simplified production reduced machining while the mechanism delivered a substantially higher cyclic rate.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1942</td></tr><tr><th>Cartridge</th><td>7.92×57 mm</td></tr><tr><th>Feed</th><td>50-round belt segment</td></tr><tr><th>Action</th><td>Recoil operated; roller locked</td></tr><tr><th>Barrel</th><td>Quick change</td></tr><tr><th>Role</th><td>Universal machine gun</td></tr></tbody></table></div>"},
      {id:"rate",title:"Rate of fire",html:"<p>The weapon's high cyclic rate—commonly recorded near 1,200 to 1,500 rounds per minute depending upon configuration and condition—produced short, dense bursts. Crews controlled ammunition consumption and heat through burst discipline and barrel changes.</p>"},
      {id:"mounts",title:"Mounts and roles",html:"<p>On a bipod, MG 42 moved with the infantry squad. A tripod, optical equipment, range cards, and larger ammunition supply supported sustained and planned fire. Vehicle mounts placed the same basic weapon in tanks, carriers, reconnaissance vehicles, and defensive positions.</p>"},
      {id:"crew",title:"Crew and ammunition",html:"<p>The gunner depended upon assistants carrying belts, spare barrels, tools, water or protective equipment for hot barrels, and other field stores. The registered 50-round belt segment could be joined or supplied within larger ammunition arrangements.</p>"},
      {id:"production",title:"Production",html:"<p>Stamped manufacture simplified important receiver and housing work but retained demanding barrel, locking, spring, heat-treatment, gauge, and ammunition requirements. Several works produced the weapon during the extended war.</p><p>A consolidated production ledger has not been published.</p>"},
      {id:"service",title:"Wartime service",html:"<p>MG 42 became the principal universal machine gun of German infantry and armored formations during the final Soviet campaigns and the continuing British war. Its ammunition remained compatible with the full-power rifle and later machine-gun establishment.</p>"},
      {id:"postwar",title:"Postwar service",html:"<p>Large wartime stocks remained in active, reserve, training, security, client, and colonial use after 1947. German client packages commonly included MG 42 before later deliveries shifted toward <a href='mg-52.html'>MG 52</a>.</p>"},
      {id:"succession",title:"Succession",html:"<p>MG 52 simplified the postwar production and belt system while retaining 7.92×57 mm ammunition. <a href='mg-68.html'>MG 68</a became the lighter standard general-purpose machine gun in 1968 without abandoning the full-power cartridge.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"National lineage",label:"German Postwar Small Arms"},{href:"mg-52.html",kicker:"Immediate successor",label:"MG 52"},{href:"mg-68.html",kicker:"Later standard successor",label:"MG 68"},{href:"stg-44.html",kicker:"Contemporary assault rifle",label:"StG 44"},{href:"wehrmacht.html",kicker:"Principal operator",label:"Wehrmacht"},{href:"world-war-ii.html",kicker:"Parent conflict",label:"Second World War"}],
    facts:[["Country of origin","Greater German Reich"],["Full name","Maschinengewehr 42"],["Introduced","1942"],["Type","Universal machine gun"],["Cartridge","7.92×57 mm"],["Feed","50-round belt segment"],["Action","Recoil operated; roller locked"],["Barrel","Quick change"],["Typical cyclic-rate band","1,200–1,500 rounds/min"],["Immediate successor","MG 52"],["Later standard successor","MG 68"]]
  }),

  "mg-52": germanFoundationalSmallArm({
    title:"MG 52",
    eyebrow:"German general-purpose machine gun · introduced 1952",
    infoboxTitle:"Maschinengewehr 52",
    lead:"The Maschinengewehr 52 was the simplified German general-purpose machine gun introduced in 1952. It retained the 7.92×57 mm cartridge and universal employment of MG 42 while adopting a disintegrating belt and a production standard suited to postwar forces and exports. MG 68 replaced it as the lighter standard weapon from 1968.",
    canon:"The MG 52 designation, 1952 introduction, 7.92×57 mm cartridge, disintegrating-belt feed, simplified general-purpose role, German client distribution, relationship to MG 42, and succession by MG 68 are fixed. Mechanism, rate of fire, mass, dimensions, barrel system, belt capacity, mounts, manufacturer, production total, variants, unit distributions, customers, and retirement remain open.",
    sections:[
      {id:"requirement",title:"Postwar requirement",html:"<p>Germany required continued machine-gun production for a large continental army, eastern occupation and settlement forces, colonial commands, reserves, and allied clients. Wartime MG 42 stocks were extensive, but new production needed a stable peacetime standard and a modern belt system.</p>"},
      {id:"development",title:"Development",html:"<p>MG 52 simplified the wartime universal-machine-gun system without changing its 7.92×57 mm ammunition. The design drew upon MG 42 production and service experience while incorporating postwar manufacturing, inspection, and maintenance priorities.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1952</td></tr><tr><th>Cartridge</th><td>7.92×57 mm</td></tr><tr><th>Feed</th><td>Disintegrating belt</td></tr><tr><th>Role</th><td>General-purpose machine gun</td></tr><tr><th>Predecessor</th><td>MG 42</td></tr><tr><th>Successor</th><td>MG 68</td></tr></tbody></table></div>"},
      {id:"mechanism",title:"Mechanism",html:"<p>The controlling registry does not specify whether the complete MG 42 operating mechanism was retained, altered, or combined with separate Gerät 06 research. No exact action, cyclic rate, barrel arrangement, mass, or dimensional specification should be assigned without a later technical register.</p>"},
      {id:"belt",title:"Disintegrating belt",html:"<p>The disintegrating belt separated into individual links as cartridges were stripped and fired. It simplified handling around vehicle mounts and reduced the need to manage an empty continuous belt, while requiring a standardized supply of links and compatible loading equipment.</p>"},
      {id:"service",title:"German service",html:"<p>MG 52 served infantry, armored, motorized, security, and colonial formations in light, sustained-fire, and mounted roles. MG 42 remained beside it in reserve and secondary use because both weapons drew from the 7.92×57 mm ammunition system.</p>"},
      {id:"exports",title:"Exports",html:"<p>German client forces received MG 52 machine guns with StG 45A rifles, Panzerfausts, radios, optical equipment, spare parts, ammunition, and technical advisers. The weapon's export history followed political access and the recipient's ability to maintain a belt-fed full-power machine gun.</p>"},
      {id:"industry",title:"Industrial role",html:"<p>MG 52 production sustained barrel making, precision locking work, stamped housings, springs, heat treatment, gauges, ammunition links, tripods, vehicle mounts, and optical fire-control equipment during the 1950s reorganization of German industry.</p>"},
      {id:"replacement",title:"Replacement",html:"<p><a href='mg-68.html'>MG 68</a> entered service in 1968 as the lighter standard general-purpose machine gun. MG 52 remained useful in fixed, vehicle, reserve, allied, and training roles wherever weight mattered less than existing stocks and support.</p>"}
    ],
    related:[{href:"german-postwar-small-arms.html",kicker:"National lineage",label:"German Postwar Small Arms"},{href:"mg-42.html",kicker:"Wartime predecessor",label:"MG 42"},{href:"mg-68.html",kicker:"Lighter standard successor",label:"MG 68"},{href:"stg-45a.html",kicker:"Contemporary export rifle",label:"StG 45A"},{href:"einheitspakt.html",kicker:"Client system",label:"Einheitspakt"},{href:"german-economy.html",kicker:"Production context",label:"German Economy"}],
    facts:[["Country of origin","Greater German Reich"],["Full name","Maschinengewehr 52"],["Introduced","1952"],["Type","General-purpose machine gun"],["Cartridge","7.92×57 mm"],["Feed","Disintegrating belt"],["Predecessor","MG 42"],["Successor","MG 68"],["Primary users","German and client forces"],["Mechanism","Unpublished"],["Production total","Unpublished"]]
  })
});
