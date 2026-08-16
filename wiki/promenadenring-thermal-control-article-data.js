(function(){
  const article=window.deepArticles&&window.deepArticles["promenadenring-life-support-system"];
  if(!article) return;

  const thermal={id:"thermal",title:"Heat loads and collection",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-r9c5k writer=s kind=technical created=2026-08-16T14:08:00-06:00 --><p>People, lighting, cooking, computing, motors, clinics, shops, hydroponics, water treatment, and atmosphere machinery released heat inside the ring. Cabin-air heat exchangers removed sensible heat and condensed metabolic and process moisture; liquid loops collected concentrated equipment loads through cold plates or local exchangers. Condensate then entered the water-recovery account while its latent heat remained part of the thermal load.</p><p>An average metabolic output of about one hundred watts per occupant gives a first sizing check of roughly thirty kilowatts for three hundred permanent residents and forty to fifty kilowatts at the proposed combined permanent and transient population. Exercise and heavy work raise the short-term value. Lighting, kitchens, workshops, laboratories, motors, pumps, electronics, and plant-growth equipment add loads that can exceed the population term. These figures test scale and do not establish the ring's certified heat load.</p><p>Separate temperature zones prevented one supply setting from serving homes, food storage, clinics, machinery rooms, and plant-growth spaces badly. Flow control, bypasses, local heaters, and air circulation held each zone within limits while the main system reconciled the total heat delivered toward the radiators.</p><!-- altwwii-writer-block:end -->`};
  const interfaceSection={id:"thermal-interface",title:"Rotating heat-transfer interface",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-t1d6m writer=s kind=technical created=2026-08-16T14:08:00-06:00 --><p>The ring's rotation created a system boundary between inhabited heat sources and any nonrotating radiator plant. Heat could be rejected on radiators rotating with the ring, transferred through a rotary fluid coupling to hub radiators, or divided between the two. The registered architecture does not select one arrangement.</p><p>Ring-mounted radiators avoided a continuously rotating coolant seal but rotated through changing views of the Sun, Earth, and station structure. Their mass, deployment, puncture isolation, and thermal forces also entered ring balance. Hub-mounted radiators gained independent pointing and easier connection to station services but required a rotary heat-transfer interface, intermediate heat exchangers, or another controlled crossing at the bearing.</p><p>A rotary fluid coupling needed multiple seals, monitored interseal volumes, leakage collection, pressure and temperature instrumentation, and isolatable passages. The transfer assembly already carried people, power, data, fluids, and alarms; thermal service added pressure drop, heat leak, maintenance access, and a fault path that could not be allowed to disable both ring and hub loops.</p><!-- altwwii-writer-block:end -->`};
  const faultSection={id:"thermal-faults",title:"Thermal faults and population limits",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-u2e7n writer=s kind=technical created=2026-08-16T14:08:00-06:00 --><p>Loop isolation and independently supplied pressure sectors limited a leak, failed pump, blocked exchanger, contaminated fluid, frozen branch, sensor fault, or punctured radiator. Internal and external coolants could remain separated by heat exchangers so that a hazardous exterior-fluid leak did not enter occupied air. Cross-connections were opened only after pressure, fluid identity, and leak state were verified.</p><p>After lost heat rejection, the first-order temperature rise followed <span aria-label="d T by d t approximately equals Q dot net divided by C effective">d<var>T</var>/d<var>t</var> ≈ <var>Q̇</var><sub>net</sub>/<var>C</var><sub>eff</sub></span>. Structure, water, equipment, and stored fluids supplied temporary heat capacity. Their temperature limits made this a finite interval for isolation, repair, movement to another sector, or evacuation.</p><p>Load shedding stopped plant lighting, commercial kitchens, workshops, entertainment, and nonessential computing before reducing atmosphere circulation, water movement, medical support, alarms, or communications. Certified occupancy depended on available radiator area, working loops and pumps, environmental geometry, repair state, and the heat produced by current activities. Pressure volume and oxygen inventory alone could not set the population limit.</p><!-- altwwii-writer-block:end -->`};

  article.sections=article.sections||[];
  const index=article.sections.findIndex(item=>item.id==="thermal");
  if(index>=0) article.sections.splice(index,1,thermal,interfaceSection,faultSection);
  else article.sections.push(thermal,interfaceSection,faultSection);

  article.related=article.related||[];
  const related={href:"spacecraft-thermal-control-systems.html",kicker:"Subsystem principles",label:"Spacecraft Thermal-Control Systems"};
  if(!article.related.some(item=>item.href===related.href)) article.related.push(related);

  article.sources=article.sources||[];
  for(const item of [
    {href:"https://ntrs.nasa.gov/citations/20110023292",label:"NASA — International Space Station active thermal-control loops"},
    {href:"https://ntrs.nasa.gov/citations/19860064859",label:"NASA — rotary fluid coupling for steerable space-station radiators"},
    {href:"https://ntrs.nasa.gov/api/citations/20040201526/downloads/20040201526.pdf",label:"NASA — approximately 100-watt average astronaut metabolic heat"}
  ]) if(!article.sources.some(existing=>existing.href===item.href)) article.sources.push(item);

  article.facts=article.facts||[];
  const facts=new Map(article.facts);
  facts.set("Metabolic sizing check","About 30 kW at 300 occupants; 40–50 kW at 400–500 occupants");
  facts.set("Additional thermal loads","Lighting · kitchens · workshops · hydroponics · machinery · electronics");
  facts.set("Rotating heat-rejection architecture","Ring radiators, hub radiators through a rotary interface, or hybrid; open");
  facts.set("Thermal casualty response","Isolate · shed loads · use finite heat capacity · repair or evacuate");
  article.facts=Array.from(facts.entries());
})();
