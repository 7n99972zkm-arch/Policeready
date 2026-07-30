const $=id=>document.getElementById(id);
const read=(k,f=[])=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=(s='')=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
let compareIds=[],favoritesOnly=false;

function openScreen(id){document.querySelectorAll('.screen').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.open===id));scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-open]').forEach(x=>x.onclick=()=>openScreen(x.dataset.open));
function favorites(){return read('favorites',[])}
function toggleFavorite(id){let a=favorites();a=a.includes(id)?a.filter(x=>x!==id):[...a,id];write('favorites',a);renderDepartments();updateDashboard()} window.toggleFavorite=toggleFavorite;
function selectedCompare(id){
  compareIds=compareIds.includes(id)?compareIds.filter(x=>x!==id):compareIds.length<4?[...compareIds,id]:compareIds;
  renderDepartments();
  $('compareBtn').disabled=compareIds.length<2;
  $('compareBtn').textContent=`Compare (${compareIds.length})`;
} window.selectedCompare=selectedCompare;
function populateCounty(){const counties=[...new Set(DEPARTMENTS.flatMap(d=>d.county.split('/')))].sort();$('countyFilter').innerHTML='<option value="">All counties</option>'+counties.map(c=>`<option>${esc(c)}</option>`).join('')}
function renderDepartments(){const q=$('departmentSearch').value.toLowerCase().trim(),county=$('countyFilter').value,status=$('statusFilter').value,favs=favorites();const list=DEPARTMENTS.filter(d=>(!q||`${d.name} ${d.city} ${d.county} ${d.state}`.toLowerCase().includes(q))&&(!county||d.county.split('/').includes(county))&&(!status||d.status===status)&&(!favoritesOnly||favs.includes(d.id)));$('departmentList').innerHTML=list.length?list.map(d=>`<article class="dept-card ${compareIds.includes(d.id)?'selected':''}"><div class="dept-top"><div><span class="status ${d.status}">${d.status==='verified'?'Verified details':'Official link available'}</span><h3>${esc(d.name)}</h3><p>${esc(d.city)}, ${esc(d.state)} • ${esc(d.county)} County</p></div><button class="favorite ${favs.includes(d.id)?'active':''}" onclick="toggleFavorite(${d.id})" aria-label="Favorite">★</button></div><p class="meta">${d.fitnessVerified?'Agency workout available':'General workout only until fitness standard is verified'}</p><div class="dept-actions"><button class="secondary" onclick="openDepartment(${d.id})">View information</button><button class="outline" onclick="selectedCompare(${d.id})">${compareIds.includes(d.id)?'Selected':'Compare'}</button></div></article>`).join(''):'<div class="mission empty-state">No matching departments.</div>'}
$('departmentSearch').oninput=renderDepartments;$('countyFilter').onchange=renderDepartments;$('statusFilter').onchange=renderDepartments;$('showFavorites').onclick=()=>{favoritesOnly=!favoritesOnly;$('showFavorites').textContent=`Favorites only: ${favoritesOnly?'On':'Off'}`;renderDepartments()};
function fitnessHtml(d){return d.fitnessEvents.length?`<div class="fitness-events">${d.fitnessEvents.map(e=>`<div class="fitness-event"><b>${esc(e.name)} — ${esc(e.standard)}</b><small>${esc(e.note)}</small></div>`).join('')}</div>`:`<p class="disabled-note">A usable official fitness standard has not been added yet. PoliceReady will not invent one.</p>`}
function sourceHtml(d){return `<div class="source-list">${d.sourceLinks.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('')}</div>`}
function openDepartment(id){const d=DEPARTMENTS.find(x=>x.id===id),fav=favorites().includes(id);$('modalContent').innerHTML=`<span class="kicker">DEPARTMENT PROFILE</span><h1>${esc(d.name)}</h1><p class="muted">${esc(d.city)}, ${esc(d.state)} • ${esc(d.county)} County</p><div class="profile-status"><span class="status ${d.status}">${d.status==='verified'?'Verified details':'Official link available'}</span>${d.verifiedDate?`<span>Checked ${esc(d.verifiedDate)}</span>`:''}</div><div class="profile-grid"><article><small>Minimum age</small><b>${esc(d.minimumAge)}</b></article><article><small>Education</small><b>${esc(d.education)}</b></article><article><small>Starting salary</small><b>${esc(d.salary)}</b></article><article><small>Benefits</small><b>${esc(d.benefits)}</b></article><article><small>Hiring process</small><b>${esc(d.hiringProcess)}</b></article><article><small>Veteran preference</small><b>${esc(d.veteranPreference)}</b></article></div><h2>Fitness standards</h2>${fitnessHtml(d)}<article class="notice"><b>Data note</b><p>${esc(d.summary)}</p></article><h2>Official sources</h2>${sourceHtml(d)}<div class="privacy-strip"><b>Applications and important forms are external only.</b> PoliceReady does not collect official application or background information.</div><div class="modal-actions"><a class="primary link-btn" href="${esc(d.applyUrl)}" target="_blank" rel="noopener">Continue to official agency site ↗</a>${d.fitnessVerified?`<button class="secondary" onclick="trainForDepartment(${d.id})">Build agency workout</button>`:''}<button class="outline" onclick="toggleFavorite(${d.id});openDepartment(${d.id})">${fav?'Remove favorite':'Save favorite'}</button><button class="outline" onclick="addToApplications(${d.id})">Track stage only</button></div>`;$('modal').classList.remove('hidden')} window.openDepartment=openDepartment;
$('closeModal').onclick=()=> $('modal').classList.add('hidden');$('modal').onclick=e=>{if(e.target===$('modal'))$('modal').classList.add('hidden')};
function addToApplications(id){const d=DEPARTMENTS.find(x=>x.id===id);$('modal').classList.add('hidden');openScreen('applications');$('appDepartment').value=d.name} window.addToApplications=addToApplications;
function trainForDepartment(id){$('modal').classList.add('hidden');openScreen('training');$('trainingDepartment').value=String(id);renderStandardPreview()} window.trainForDepartment=trainForDepartment;
$('compareBtn').onclick=()=>{if(compareIds.length!==2)return;const [a,b]=compareIds.map(id=>DEPARTMENTS.find(x=>x.id===id));const rows=[['City',a.city,b.city],['County',a.county,b.county],['Minimum age',a.minimumAge,b.minimumAge],['Education',a.education,b.education],['Starting salary',a.salary,b.salary],['Benefits',a.benefits,b.benefits],['Hiring process',a.hiringProcess,b.hiringProcess],['Fitness standards',a.fitness,b.fitness],['Agency workout',a.fitnessVerified?'Available':'Not yet verified',b.fitnessVerified?'Available':'Not yet verified'],['Veteran preference',a.veteranPreference,b.veteranPreference]];$('modalContent').innerHTML=`<span class="kicker">IN-APP COMPARISON</span><h1>${esc(a.city)} vs. ${esc(b.city)}</h1><div class="compare-table"><div class="compare-head"><b>Category</b><b>${esc(a.name)}</b><b>${esc(b.name)}</b></div>${rows.map(r=>`<div><span>${esc(r[0])}</span><span>${esc(r[1])}</span><span>${esc(r[2])}</span></div>`).join('')}</div><div class="comparison-note">PoliceReady shows public information for research and preparation. Apply and submit documents only through the official external agency systems.</div><div class="modal-actions"><a class="secondary link-btn" href="${esc(a.applyUrl)}" target="_blank" rel="noopener">Official ${esc(a.city)} site ↗</a><a class="secondary link-btn" href="${esc(b.applyUrl)}" target="_blank" rel="noopener">Official ${esc(b.city)} site ↗</a></div>`;$('modal').classList.remove('hidden')};

function populateTrainingDepartments(){const sorted=[...DEPARTMENTS].sort((a,b)=>(b.fitnessVerified-a.fitnessVerified)||a.name.localeCompare(b.name));$('trainingDepartment').innerHTML=sorted.map(d=>`<option value="${d.id}">${d.name}${d.fitnessVerified?' — verified workout':''}</option>`).join('');renderStandardPreview()}
function renderStandardPreview(){const d=DEPARTMENTS.find(x=>x.id===+$('trainingDepartment').value);$('standardPreview').innerHTML=`<div class="workout-header"><div><span class="kicker">SELECTED STANDARD</span><h2>${esc(d.name)}</h2></div><span class="status ${d.fitnessVerified?'verified':'source-only'}">${d.fitnessVerified?'Workout ready':'Verification needed'}</span></div>${fitnessHtml(d)}${d.fitnessVerified?`<p class="muted">Workout logic targets the published test type, not a guarantee of passing.</p>`:`<p class="muted">Choose a verified agency or use general police fitness preparation. No agency-specific claim will be generated.</p>`}`}
$('trainingDepartment').onchange=renderStandardPreview;
function agencyPlan(d,equipment,duration,level){const scale=level==='beginner'?.8:level==='advanced'?1.2:1;const rounds=Math.max(2,Math.round(duration/10*scale));let p=[];if(d.fitnessType==='row'){p=['6-minute easy row or cardio warm-up',`${Math.max(4,rounds+2)} × 500m row at controlled hard effort with 90-second recovery`,'3 × 12 bodyweight squats','3 × 10 push-ups','5-minute easy cool-down'];}else if(d.fitnessType==='obstacle'){p=['6-minute dynamic warm-up',`${rounds} rounds: 20m shuttle, 10 step-ups, 8 burpees, 20m controlled carry`,'4 × 20-second acceleration runs','3 × 30-second plank','Mobility cool-down'];}else{p=['5-minute warm-up',`${rounds} rounds: 12 squats, 10 push-ups, 12 reverse lunges, 30-second mountain climbers`,'10-minute steady cardio','Mobility cool-down'];}if(equipment==='dumbbells')p.splice(-1,0,'3 × 10 dumbbell rows and goblet squats');if(equipment==='gym')p.splice(-1,0,'3 × 8 cable row, leg press, and bench press');return p}
$('generateAgencyWorkout').onclick=()=>{const d=DEPARTMENTS.find(x=>x.id===+$('trainingDepartment').value),equipment=$('equipment').value,duration=+$('duration').value,level=$('level').value;if(!d.fitnessVerified){$('workoutResult').classList.remove('hidden');$('workoutResult').innerHTML=`<span class="kicker">GENERAL PLAN ONLY</span><h2>${esc(d.name)} standard not yet verified</h2><p>PoliceReady will not create a department-specific plan from unverified information. Select a verified agency or use the general preparation session below.</p><ol class="workout-list">${agencyPlan({...d,fitnessType:'general'},equipment,duration,level).map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;return}const plan=agencyPlan(d,equipment,duration,level),record={departmentId:d.id,department:d.name,duration,level,plan,date:new Date().toISOString()};write('lastWorkout',record);$('workoutResult').classList.remove('hidden');$('workoutResult').innerHTML=`<span class="kicker">STANDARDS-BASED SESSION</span><h2>${duration}-minute ${esc(d.city)} preparation workout</h2><p class="muted">Built around: ${esc(d.fitness)}</p><ol class="workout-list">${plan.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><p class="muted">Training guidance only. Confirm current test procedures with the agency and stop for sharp pain, chest pain, dizziness, or unusual shortness of breath.</p>`;updateDashboard()};

$('applicationForm').onsubmit=e=>{e.preventDefault();const notes=$('appNotes').value.trim();if(/\b(ssn|social security|driver.?s license|password|medical record|criminal history)\b/i.test(notes)){alert('Do not save sensitive or official application information in PoliceReady.');return}const a=read('applications');a.unshift({id:Date.now(),department:$('appDepartment').value.trim(),stage:$('appStage').value,date:$('appDate').value,notes});write('applications',a);e.target.reset();renderApps();updateDashboard()};
function renderApps(){const a=read('applications');$('applicationList').innerHTML=a.length?a.map(x=>`<article class="item-card"><h3>${esc(x.department)}</h3><div class="meta">${esc(x.stage)}${x.date?' • '+esc(x.date):''}</div>${x.notes?`<p>${esc(x.notes)}</p>`:''}<div class="item-actions"><button class="danger" onclick="removeApp(${x.id})">Delete</button></div></article>`).join(''):'<div class="mission empty-state">No tracker items yet.</div>'} window.removeApp=id=>{write('applications',read('applications').filter(x=>x.id!==id));renderApps();updateDashboard()};
$('settingsForm').onsubmit=e=>{e.preventDefault();write('testSettings',{name:$('testName').value.trim(),date:$('testDate').value});countdown();openScreen('home')};
function countdown(){const x=read('testSettings',{});$('testName').value=x.name||'';$('testDate').value=x.date||'';$('testLabel').textContent=(x.name||'NEXT TEST').toUpperCase();if(!x.date){$('countdownValue').textContent='Not set';return}const t=new Date();t.setHours(0,0,0,0);const days=Math.ceil((new Date(x.date+'T00:00:00')-t)/864e5);$('countdownValue').textContent=days>=0?`${days} day${days===1?'':'s'}`:'Date passed'}
function updateDashboard(){const apps=read('applications'),favs=favorites(),w=read('lastWorkout',null);$('directoryCount').textContent=DEPARTMENTS.length;$('favoriteCount').textContent=favs.length;$('applicationCount').textContent=apps.length;$('verifiedFitnessCount').textContent=DEPARTMENTS.filter(d=>d.fitnessVerified).length;$('todayMission').innerHTML=w?`<span class="kicker">${esc(w.level)} • ${esc(w.duration)} MIN</span><h2>${esc(w.department)}</h2><p>${w.plan.slice(0,3).map(esc).join(' • ')}</p>`:'Choose an agency with verified fitness information to create a standards-based workout.';const fd=DEPARTMENTS.filter(d=>favs.includes(d.id)).slice(0,4);$('homeFavorites').innerHTML=fd.length?fd.map(d=>`<button onclick="openDepartment(${d.id})"><b>${esc(d.city)}</b><small>${esc(d.name)}</small></button>`).join(''):'<div class="mission empty-state">Save departments to see them here.</div>'}
$('resetData').onclick=()=>{if(confirm('Delete all PoliceReady data saved in this browser?')){localStorage.clear();location.reload()}};
populateCounty();populateTrainingDepartments();renderDepartments();renderApps();countdown();updateDashboard();

// v0.5 — department matching, profile completeness, and smarter comparison
function numericSalary(d){
  const values=String(d.salary||'').match(/\$?([0-9]{2,3}(?:,[0-9]{3})?)/g)||[];
  return values.map(v=>Number(v.replace(/[$,]/g,''))).filter(n=>n>10000).sort((a,b)=>b-a)[0]||0;
}
function profileCompleteness(d){
  const fields=['minimumAge','education','salary','benefits','hiringProcess','fitness','veteranPreference'];
  const complete=fields.filter(k=>d[k] && !/see official source/i.test(d[k])).length;
  return Math.round(complete/fields.length*100);
}
function finderCounties(){
  const el=$('finderCounty'); if(!el) return;
  const counties=[...new Set(DEPARTMENTS.flatMap(d=>d.county.split('/')))].sort();
  el.innerHTML='<option value="">Anywhere in North Texas</option>'+counties.map(c=>`<option>${esc(c)}</option>`).join('');
}
function matchDepartment(d,prefs){
  let score=0, reasons=[];
  if(d.status==='verified'){score+=30; reasons.push('verified profile');}
  if(prefs.county && d.county.includes(prefs.county)){score+=25; reasons.push(`serves ${prefs.county} County`);}
  const pay=numericSalary(d);
  if(prefs.pay && pay>=prefs.pay){score+=20; reasons.push('meets published pay preference');}
  else if(!prefs.pay) score+=5;
  if(prefs.fitness && d.fitnessType===prefs.fitness){score+=15; reasons.push(`${prefs.fitness} fitness format`);}
  if(prefs.workout && d.fitnessVerified){score+=20; reasons.push('agency workout available');}
  if(prefs.veteran && d.veteranPreference && !/see official source/i.test(d.veteranPreference)){score+=10; reasons.push('veteran information available');}
  score+=Math.round(profileCompleteness(d)/10);
  return {d,score,reasons};
}
function runFinder(){
  const prefs={county:$('finderCounty').value,pay:+$('finderPay').value,fitness:$('finderFitness').value,verified:$('finderVerified').value,veteran:$('finderVeteran').checked,workout:$('finderWorkout').checked};
  let matches=DEPARTMENTS.map(d=>matchDepartment(d,prefs));
  if(prefs.verified==='verified') matches=matches.filter(x=>x.d.status==='verified');
  if(prefs.workout) matches=matches.filter(x=>x.d.fitnessVerified);
  matches.sort((a,b)=>b.score-a.score||a.d.name.localeCompare(b.d.name));
  const top=matches.slice(0,8);
  $('finderResults').innerHTML=top.length?`<article class="notice"><b>How matching works</b><p>Results rank public-source coverage and your selected preferences. They do not predict hiring success or declare one agency objectively better.</p></article>`+top.map((x,i)=>`<article class="match-card"><div class="match-rank">${i+1}</div><div class="match-body"><div class="match-title"><div><span class="kicker">${esc(x.d.county)} COUNTY</span><h2>${esc(x.d.name)}</h2></div><span class="match-score">${x.score} match points</span></div><div class="profile-meter"><span style="width:${profileCompleteness(x.d)}%"></span></div><small>${profileCompleteness(x.d)}% of comparison fields summarized</small><p>${x.reasons.length?esc(x.reasons.join(' • ')):'Official agency link available'}</p><div class="item-actions"><button class="primary" onclick="openDepartment(${x.d.id})">View profile</button>${x.d.fitnessVerified?`<button class="secondary" onclick="trainForDepartment(${x.d.id})">Build workout</button>`:''}</div></div></article>`).join(''):'<article class="mission empty-state">No departments currently match every selected filter. Turn off “agency-specific workout must be available” or include official-link-only profiles.</article>';
}
if($('runFinder')) $('runFinder').addEventListener('click',runFinder);
finderCounties();

// Upgrade comparison to include evidence, coverage, and a neutral best-fit summary.
if($('compareBtn')) $('compareBtn').onclick=()=>{
  if(compareIds.length!==2)return;
  const [a,b]=compareIds.map(id=>DEPARTMENTS.find(x=>x.id===id));
  const rows=[
    ['Profile coverage',`${profileCompleteness(a)}%`,`${profileCompleteness(b)}%`],
    ['City',a.city,b.city],['County',a.county,b.county],['Minimum age',a.minimumAge,b.minimumAge],
    ['Education',a.education,b.education],['Starting salary',a.salary,b.salary],['Benefits',a.benefits,b.benefits],
    ['Hiring process',a.hiringProcess,b.hiringProcess],['Fitness standards',a.fitness,b.fitness],
    ['Agency workout',a.fitnessVerified?'Available':'Not yet verified',b.fitnessVerified?'Available':'Not yet verified'],
    ['Veteran preference',a.veteranPreference,b.veteranPreference],['Last checked',a.verifiedDate||'Not summarized',b.verifiedDate||'Not summarized']
  ];
  const advantages=[];
  if(profileCompleteness(a)>profileCompleteness(b)) advantages.push(`${a.city} currently has more summarized fields`);
  if(profileCompleteness(b)>profileCompleteness(a)) advantages.push(`${b.city} currently has more summarized fields`);
  if(a.fitnessVerified&&!b.fitnessVerified) advantages.push(`${a.city} has an agency-specific workout available`);
  if(b.fitnessVerified&&!a.fitnessVerified) advantages.push(`${b.city} has an agency-specific workout available`);
  const ap=numericSalary(a),bp=numericSalary(b);
  if(ap&&bp&&ap!==bp) advantages.push(`${ap>bp?a.city:b.city} has the higher parsed published pay figure`);
  $('modalContent').innerHTML=`<span class="kicker">SMART COMPARISON</span><h1>${esc(a.city)} vs. ${esc(b.city)}</h1><article class="comparison-summary"><b>Best-fit notes</b><p>${advantages.length?esc(advantages.join('. '))+'.':'The current verified fields do not support a clear evidence-based advantage. Review both official sources.'}</p></article><div class="compare-table"><div class="compare-head"><b>Category</b><b>${esc(a.name)}</b><b>${esc(b.name)}</b></div>${rows.map(r=>`<div><span>${esc(r[0])}</span><span>${esc(r[1])}</span><span>${esc(r[2])}</span></div>`).join('')}</div><div class="comparison-note">PoliceReady does not collect applications or sensitive information. Submit everything through the official external agency systems.</div><div class="modal-actions"><a class="secondary link-btn" href="${esc(a.applyUrl)}" target="_blank" rel="noopener">Official ${esc(a.city)} site ↗</a><a class="secondary link-btn" href="${esc(b.applyUrl)}" target="_blank" rel="noopener">Official ${esc(b.city)} site ↗</a></div>`;
  $('modal').classList.remove('hidden');
};

// Add current-performance context to generated workouts without claiming a pass prediction.
const originalGenerate=$('generateAgencyWorkout')?.onclick;
if($('generateAgencyWorkout')) $('generateAgencyWorkout').onclick=()=>{
  originalGenerate?.();
  const result=$('workoutResult');
  if(!result || result.classList.contains('hidden')) return;
  const run=$('currentRun').value.trim(), push=$('currentPushups').value, sit=$('currentSitups').value, date=$('agencyTestDate').value;
  const details=[];
  if(run) details.push(`Current 1.5-mile time: ${run}`);
  if(push) details.push(`Current push-ups: ${push}`);
  if(sit) details.push(`Current sit-ups: ${sit}`);
  if(date){const days=Math.ceil((new Date(date+'T00:00:00')-new Date())/864e5); if(days>=0) details.push(`${days} days until test`);}
  if(details.length) result.insertAdjacentHTML('afterbegin',`<article class="readiness-strip"><b>Your starting point</b><p>${details.map(esc).join(' • ')}</p><small>These numbers personalize context only; PoliceReady does not predict whether you will pass.</small></article>`);
};

// v0.6 — transparent public-source data coverage
function renderDataStatus(){
  const stats=$('dataStatusStats'), list=$('dataStatusList');
  if(!stats||!list) return;
  const verified=DEPARTMENTS.filter(d=>d.status==='verified').length;
  const workouts=DEPARTMENTS.filter(d=>d.fitnessVerified).length;
  const linked=DEPARTMENTS.filter(d=>d.officialUrl).length;
  stats.innerHTML=`<article><span>Total agencies</span><strong>${DEPARTMENTS.length}</strong></article><article><span>Summarized profiles</span><strong>${verified}</strong></article><article><span>Official links</span><strong>${linked}</strong></article><article><span>Workout-ready standards</span><strong>${workouts}</strong></article>`;
  const ordered=[...DEPARTMENTS].sort((a,b)=>profileCompleteness(b)-profileCompleteness(a)||a.name.localeCompare(b.name));
  list.innerHTML=ordered.map(d=>`<article class="data-row"><div><span class="kicker">${esc(d.county)} COUNTY</span><h3>${esc(d.name)}</h3><p>${d.status==='verified'?'Official information summarized inside PoliceReady':'Official external link available; detailed fields not yet summarized'}</p></div><div class="data-row-meta"><b>${profileCompleteness(d)}%</b><small>field coverage</small><span class="status ${d.status}">${d.fitnessVerified?'Workout ready':d.status==='verified'?'Summary verified':'Link only'}</span></div><div class="profile-meter full-meter"><span style="width:${profileCompleteness(d)}%"></span></div><div class="item-actions"><button class="secondary" onclick="openDepartment(${d.id})">View profile</button><a class="outline link-btn" href="${esc(d.officialUrl)}" target="_blank" rel="noopener">Official site ↗</a></div></article>`).join('');
}
renderDataStatus();


// v0.7 — verified compensation and 2-to-4 agency comparison
function compensationFor(d){
  const c=d.compensation||{};
  const unavailable='Not publicly listed by the agency';
  return {
    recruit:c.recruitSalary||d.salary||unavailable,
    starting:c.startingSalary||d.salary||unavailable,
    year1:c.year1||unavailable,
    year2:c.year2||unavailable,
    year3:c.year3||unavailable,
    year4:c.year4||unavailable,
    year5:c.year5||unavailable,
    top:c.topSalary||unavailable,
    schedule:c.raiseSchedule||unavailable,
    fiveYear:c.fiveYearTotal||unavailable,
    source:c.sourceUrl||d.officialUrl
  };
}
function compareValue(d,key){
  const c=compensationFor(d);
  const values={
    coverage:`${profileCompleteness(d)}%`,city:d.city,county:d.county,minimumAge:d.minimumAge,
    education:d.education,recruit:c.recruit,starting:c.starting,year1:c.year1,year2:c.year2,
    year3:c.year3,year4:c.year4,year5:c.year5,fiveYear:c.fiveYear,top:c.top,schedule:c.schedule,
    benefits:d.benefits,hiringProcess:d.hiringProcess,fitness:d.fitness,
    workout:d.fitnessVerified?'Available':'Not yet verified',veteran:d.veteranPreference,
    checked:d.verifiedDate||'Not yet verified'
  };
  return values[key]||'Not publicly listed by the agency';
}
if($('compareBtn')) $('compareBtn').onclick=()=>{
  if(compareIds.length<2||compareIds.length>4)return;
  const agencies=compareIds.map(id=>DEPARTMENTS.find(x=>x.id===id)).filter(Boolean);
  const rowDefs=[
    ['Profile coverage','coverage'],['City','city'],['County','county'],['Minimum age','minimumAge'],
    ['Education','education'],['Recruit / academy salary','recruit'],['Starting officer salary','starting'],
    ['Year 1 salary','year1'],['Year 2 salary','year2'],['Year 3 salary','year3'],['Year 4 salary','year4'],
    ['Year 5 salary','year5'],['Estimated first 5 years','fiveYear'],['Top salary','top'],
    ['Raise / step schedule','schedule'],['Benefits','benefits'],['Hiring process','hiringProcess'],
    ['Fitness standards','fitness'],['Agency workout','workout'],['Veteran preference','veteran'],['Last checked','checked']
  ];
  const cols=agencies.length+1;
  const title=agencies.map(d=>d.city).join(' vs. ');
  const rows=rowDefs.map(([label,key])=>`<div style="grid-template-columns:repeat(${cols},minmax(180px,1fr))"><span>${esc(label)}</span>${agencies.map(d=>`<span>${esc(compareValue(d,key))}</span>`).join('')}</div>`).join('');
  const sources=agencies.map(d=>`<a class="secondary link-btn" href="${esc((d.compensation&&d.compensation.sourceUrl)||d.officialUrl)}" target="_blank" rel="noopener">Official ${esc(d.city)} source ↗</a>`).join('');
  $('modalContent').innerHTML=`<span class="kicker">VERIFIED COMPENSATION COMPARISON</span><h1>${esc(title)}</h1><article class="comparison-summary"><b>How to read this</b><p>Salary values are shown only when supported by an official city or agency source. Missing fields remain clearly marked rather than estimated.</p></article><div class="compare-table wide-compare"><div class="compare-head" style="grid-template-columns:repeat(${cols},minmax(180px,1fr))"><b>Category</b>${agencies.map(d=>`<b>${esc(d.name)}</b>`).join('')}</div>${rows}</div><div class="comparison-note">Five-year totals are included only when the official pay schedule supports the calculation. Overtime, incentives, specialty pay, and future contract changes are excluded unless specifically stated.</div><div class="modal-actions">${sources}</div>`;
  $('modal').classList.remove('hidden');
};
