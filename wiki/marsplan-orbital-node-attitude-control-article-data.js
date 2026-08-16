(()=>{
  const article=window.deepArticles&&window.deepArticles["marsplan-orbital-node"];
  if(!article)return;

  const insertAfter=(afterId,section)=>{
    article.sections=article.sections||[];
    if(article.sections.some(existing=>existing.id===section.id))return;
    const index=article.sections.findIndex(existing=>existing.id===afterId);
    if(index<0)article.sections.push(section);else article.sections.splice(index+1,0,section);
  };

  insertAfter("navigation",{id:"attitude-modes",title:"Attitude modes and references",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-w3a8m writer=s kind=technical created=2026-08-16T14:16:00-06:00 --><p>The node maintained the authoritative attitude, angular-rate, and configuration estimate for the assembled expedition vehicle. Its reference frames included the interplanetary inertial frame, Sun line, Earth and Mars line of sight, main-engine thrust frame, orbital local frame, mapping and landing-site frames, docking axes, and the body frames of landers and rotating habitats. Time tags and alignment records accompanied every transformation.</p><p>Mission modes included departure and capture thrust alignment, power-and-thermal coast attitude, high-gain communications pointing, astronomical navigation, Mars mapping, lander release, rendezvous and docking, habitat spin-up or lock, course correction, and safe hold. These requirements could conflict. A communication attitude might expose a radiator, move a habitat outside the reactor shield sector, or produce an unfavorable solar-pressure torque; the flight plan stated which constraint controlled each interval.</p><p>Burn pointing was governed by engine thrust direction and allowable structural load rather than by the forward node's visual orientation. Coast and Mars-orbit pointing could use slower propellant-saving control. The archive does not establish whether fine control used reaction wheels, control-moment gyroscopes, thrusters, or a combined system.</p><!-- altwwii-writer-block:end -->`});

  insertAfter("landings",{id:"configuration-control",title:"Configuration and flexible-body control",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-x4b9n writer=s kind=technical created=2026-08-16T14:16:00-06:00 --><p>The controlled vehicle changed as hydrogen was consumed or transferred, tanks were emptied or discarded, the two habitats deployed, spun, stopped, or locked, cargo and landers separated, and ascent vehicles docked. Each event changed centre of mass, inertia, flexible modes, available thrusters, plume-clearance zones, and sensor alignment. The node selected a verified configuration model only after latch, valve, electrical, structural, and mass-state indications agreed.</p><p>Actuators distributed along the spine could provide useful moment arms and reduce the translation produced by a torque command. Their firing combinations had to avoid radiator panels, tanks, docked vehicles, antennas, and the rotating quarters. Commands limited angular acceleration and shaped large slews so the long truss, tank mounts, radiator panels, fluid slosh, and habitat mechanisms did not amplify the maneuver.</p><p>Lander release and docking were combined structural and control events. Relative motion was reduced before contact, the main vehicle used a wider attitude deadband where appropriate, and nearby jets were inhibited when their plume could strike the approaching craft. After capture, controllers allowed oscillations to settle and confirmed the new mass properties before ordinary maneuver authority was restored.</p><!-- altwwii-writer-block:end -->`});

  insertAfter("return",{id:"safe-control",title:"Safe control and degraded operation",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-y5c1p writer=s kind=technical created=2026-08-16T14:16:00-06:00 --><p>An independent safe-control chain retained coarse rate sensing, a Sun or other robust reference, command reception, protected electrical power, and access to an isolated actuator set. It first arrested dangerous angular rate, then acquired a power-positive and thermally acceptable attitude while keeping the crew and node inside the reactor shielding geometry. Precision mapping, narrow-beam communications, habitat spin changes, and lander operations stopped.</p><p>Fault isolation accounted for the vehicle's length. A failed sensor could be a local vibration or alignment problem rather than whole-vehicle motion; a commanded thruster could fail because of its valve, feeder, propellant branch, control electronics, or a protective inhibit. The orbital crew compared independent sensors, observed the angular response to bounded test impulses, and reconfigured around a failed cluster only after plume and torque authority were recomputed.</p><p>Earth could support diagnosis and planning during the interplanetary coast, but Mars operations could not wait for a complete terrestrial command cycle. The node carried onboard safing, state estimation, configuration control, and bounded recovery procedures. Exact computer architecture, sensor complement, autonomy, thruster layout, propellant, momentum-storage hardware, and reserves remain open.</p><!-- altwwii-writer-block:end -->`});

  article.related=article.related||[];
  if(!article.related.some(item=>item.href==="spacecraft-attitude-determination-and-control-systems.html"))article.related.push({href:"spacecraft-attitude-determination-and-control-systems.html",kicker:"Control architecture",label:"Spacecraft Attitude Determination and Control Systems"});

  article.sources=article.sources||[];
  for(const item of [
    {href:"https://ntrs.nasa.gov/citations/19930001814",label:"NASA — spacecraft attitude-control requirements, disturbances, and actuator selection"},
    {href:"https://ntrs.nasa.gov/citations/19850022841",label:"NASA — docking disturbance and flexible-body control of large space structures"},
    {href:"https://ntrs.nasa.gov/citations/19840047750",label:"NASA — integrated attitude-control simulation with flexible appendages and slosh"}
  ])if(!article.sources.some(existing=>existing.href===item.href))article.sources.push(item);

  article.facts=article.facts||[];
  const facts=new Map(article.facts);
  facts.set("Control responsibility","Authoritative attitude, rate, and configuration estimate for the assembled vehicle");
  facts.set("Principal control cases","Burn · coast · mapping · lander release · docking · safe hold");
  facts.set("Attitude sensors and actuators","Open");
  article.facts=Array.from(facts.entries());
})();
