(()=>{
  const article=window.deepArticles&&window.deepArticles["interplanetary-shipboard-command"];
  if(!article)return;

  const insertAfter=(afterId,section)=>{
    article.sections=article.sections||[];
    if(article.sections.some(existing=>existing.id===section.id))return;
    const index=article.sections.findIndex(existing=>existing.id===afterId);
    if(index<0)article.sections.push(section);else article.sections.splice(index+1,0,section);
  };

  insertAfter("engineering",{id:"command-paths",title:"Command paths and machine authority",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-j5n1y writer=s kind=technical created=2026-08-16T14:21:00-06:00 --><p>Shipboard authority had to be represented in the command system. Ground products, the commander, engineering and medical stations, local subsystem controllers, stored sequences, and automatic fault protection could all request action. Each command carried a source, destination, identity, parameters, time or condition, and authorization state. Precedence rules prevented an ordinary schedule or remote request from silently reversing a local safing action.</p><p>Irreversible or reserve-consuming actions received stronger procedural and technical controls. Engine start, separation, protected-propellant transfer, reactor-state change, isolation bypass, software activation, and abandonment of a vehicle or compartment could require two distinct steps, confirmation of permissive conditions, and more than one responsible station according to national practice. Exact ranks, keys, voting rules, and override mechanisms remain open.</p><p>Local controllers retained bounded protective authority when the supervisory computer or ship network was lost. A reactor, battery, pressure loop, thermal system, or propulsion branch could trip, isolate, or hold a safe local state without waiting for the command deck. Restoration required the crew to reconcile the physical condition with the command and configuration record.</p><!-- altwwii-writer-block:end -->`});

  insertAfter("systems",{id:"delayed-sequences",title:"Stored sequences and communications delay",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-k6p2z writer=s kind=technical created=2026-08-16T14:21:00-06:00 --><p>Earth transmitted plans, limits, software or table updates, navigation products, and proposed command sequences rather than continuous control. The ship checked receipt and integrity, simulated the sequence against its current configuration, reviewed holds and abort points, and accepted or revised the product before execution. A command prepared on Earth could be obsolete when it arrived because the vehicle, crew, weather, or equipment state had changed.</p><p>Sequences combined time tags with state conditions. A burn preparation waited for attitude, propellant, thermal, electrical, guidance, exclusion-zone, and crew-readiness criteria; elapsed time alone could not prove readiness. Automatic branches covered anticipated alternatives, while unrecognized combinations stopped at a hold or entered a bounded safe state for local decision.</p><p>The ship maintained enough onboard navigation, estimation, fault management, procedure data, and computing capacity to survive through a complete terrestrial round trip. Earth analysis remained valuable for slow diagnosis and replanning. It could not be the only means of arresting a leak, safing a reactor, restoring attitude, or cancelling a landing sequence.</p><!-- altwwii-writer-block:end -->`});

  insertAfter("records",{id:"technical-record",title:"Technical record and degraded data operation",html:`<!-- altwwii-writer-block:start id=wb-s-20260816-l7q3a writer=s kind=technical created=2026-08-16T14:21:00-06:00 --><p>The ship's record joined orders to the technical state on which they were based. Command source and acceptance, software and parameter versions, time correlation, sensor calibration, configuration, telemetry quality, maintenance action, alarms, overrides, and crew annotations accompanied major decisions. Raw high-rate evidence around an anomaly was preserved separately from later summaries.</p><p>Storage and downlink priorities protected navigation, health, command history, medical evidence, maintenance, and return-critical engineering data ahead of replaceable imagery, routine broadcasts, and duplicated science. Circular buffers retained pre-fault data. Essential records were copied across separated storage or removable media so one computer, bus, fire, or radiation event did not erase the basis for recovery.</p><p>Loss of the principal network reduced coordination rather than instantly disabling every subsystem. Local controllers held safe states, isolated branches continued essential regulation, and crew used reserve consoles or direct interfaces for a limited command set. The exact processor, network, recorder, software, security, and backup architecture differed by sponsor and remains open.</p><!-- altwwii-writer-block:end -->`});

  article.related=article.related||[];
  if(!article.related.some(item=>item.href==="spacecraft-command-and-data-handling-systems.html"))article.related.push({href:"spacecraft-command-and-data-handling-systems.html",kicker:"Technical implementation",label:"Spacecraft Command and Data Handling Systems"});

  article.sources=article.sources||[];
  for(const item of [
    {href:"https://ntrs.nasa.gov/citations/19810003139",label:"NASA Jet Propulsion Laboratory — distributed command and data handling for deep-space exploration"},
    {href:"https://ntrs.nasa.gov/citations/19930033330",label:"NASA — timed command sequences, flight rules, telemetry state, and recovery schedules"},
    {href:"https://ntrs.nasa.gov/citations/20100033681",label:"NASA — fault-tolerant crewed-spacecraft avionics and processor recovery"}
  ])if(!article.sources.some(existing=>existing.href===item.href))article.sources.push(item);

  article.facts=article.facts||[];
  const facts=new Map(article.facts);
  facts.set("Command sources","Ground · crew · stored sequences · local controllers · fault protection");
  facts.set("Delay response","Onboard validation, execution, safing, and bounded recovery");
  facts.set("Computer, network, and authorization architecture","Open");
  article.facts=Array.from(facts.entries());
})();
