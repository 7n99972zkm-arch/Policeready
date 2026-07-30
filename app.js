const $ = (id) => document.getElementById(id);
const read = (key, fallback=[]) => JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
function openPanel(id){ panels.forEach(p=>p.classList.toggle('active',p.id===id)); tabs.forEach(t=>t.classList.toggle('active',t.dataset.tab===id)); window.scrollTo({top:0,behavior:'smooth'}); }
tabs.forEach(t=>t.addEventListener('click',()=>openPanel(t.dataset.tab)));
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.open)));

function workoutPlan(goal,equipment,duration,level){
  const scale = level==='beginner'?0.8:level==='advanced'?1.2:1;
  const rounds = Math.max(2,Math.round((duration/10)*scale));
  const plans={
    '1.5 mile':['5-minute easy warm-up',`${Math.max(4,rounds+2)} × 400m at controlled hard pace with 90 sec recovery`,'3 × 12 walking lunges','3 × 30-sec plank','5-minute cool-down'],
    cooper:['8-minute easy run',`${Math.max(3,rounds)} × 3-minute hard / 2-minute easy`,'4 × 20-sec strides','Mobility cool-down'],
    popat:['5-minute dynamic warm-up',`${rounds} rounds: 20m shuttle, 10 burpees, 20 step-ups, 30-sec bear crawl`,'3 × 8 explosive push-ups','3 × 30-sec side plank each side'],
    general:['5-minute warm-up',`${rounds} rounds: 12 squats, 10 push-ups, 12 reverse lunges, 30-sec mountain climbers`,'10-minute steady cardio','Mobility cool-down']
  };
  let list=plans[goal]||plans.general;
  if(equipment==='dumbbells') list.splice(list.length-1,0,'3 × 10 dumbbell rows and goblet squats');
  if(equipment==='gym') list.splice(list.length-1,0,'3 × 8 leg press, cable row, and bench press');
  return list;
}

$('workoutForm').addEventListener('submit',e=>{
  e.preventDefault();
  const goal=$('goal').value, equipment=$('equipment').value, duration=$('duration').value, level=$('level').value;
  const plan=workoutPlan(goal,equipment,duration,level);
  const data={goal,equipment,duration,level,plan,date:new Date().toISOString()}; write('lastWorkout',data);
  renderWorkout(data); updateDashboard();
});
function renderWorkout(data){
  const el=$('workoutResult'); el.classList.remove('hidden');
  el.innerHTML=`<div class="result-title"><div><p class="eyebrow">TODAY'S SESSION</p><h3>${data.duration}-minute ${data.goal} plan</h3></div><span class="pill">${data.level}</span></div><ol class="workout-list">${data.plan.map(x=>`<li>${x}</li>`).join('')}</ol><p class="muted">Stop if you experience sharp pain, dizziness, or unusual shortness of breath.</p>`;
}

$('runForm').addEventListener('submit',e=>{
  e.preventDefault(); const d=+$('distance').value,m=+$('minutes').value,s=+$('seconds').value,total=m*60+s;
  if(!d||!total) return;
  const pace=total/d, pm=Math.floor(pace/60), ps=Math.round(pace%60).toString().padStart(2,'0');
  const proj=pace*1.5, jm=Math.floor(proj/60), js=Math.round(proj%60).toString().padStart(2,'0');
  const goal=+$('goalMinutes').value; let goalText=''; if(goal){const diff=total-goal*60; goalText=`<p><strong>${diff<=0?'On goal':'Time to cut'}:</strong> ${Math.abs(Math.round(diff))} seconds ${diff<=0?'under':'over'} your entered goal.</p>`}
  $('runResult').classList.remove('hidden'); $('runResult').innerHTML=`<p class="eyebrow">RESULT</p><h3>${pm}:${ps} per mile</h3><p>Projected 1.5-mile time: <strong>${jm}:${js}</strong></p>${goalText}`;
});

$('applicationForm').addEventListener('submit',e=>{e.preventDefault();const items=read('applications');items.unshift({id:Date.now(),department:$('appDepartment').value.trim(),stage:$('appStage').value,date:$('appDate').value,notes:$('appNotes').value.trim()});write('applications',items);e.target.reset();renderApplications();updateDashboard();});
function renderApplications(){const items=read('applications');$('applicationList').innerHTML=items.length?items.map(x=>`<article class="item-card"><h4>${escapeHtml(x.department)}</h4><div class="meta">${escapeHtml(x.stage)}${x.date?' • '+x.date:''}</div>${x.notes?`<p>${escapeHtml(x.notes)}</p>`:''}<div class="item-actions"><button class="danger" onclick="removeApplication(${x.id})">Delete</button></div></article>`).join(''):'<div class="empty">No applications added yet.</div>';}
window.removeApplication=id=>{write('applications',read('applications').filter(x=>x.id!==id));renderApplications();updateDashboard();};

$('departmentForm').addEventListener('submit',e=>{e.preventDefault();const items=read('departments');items.unshift({id:Date.now(),name:$('deptName').value.trim(),url:$('deptUrl').value.trim(),type:$('deptType').value,verified:$('verifiedDate').value,details:$('deptDetails').value.trim()});write('departments',items);e.target.reset();$('verifiedDate').value=new Date().toISOString().slice(0,10);renderDepartments();updateDashboard();});
function renderDepartments(){const items=read('departments');$('departmentList').innerHTML=items.length?items.map(x=>`<article class="item-card"><h4>${escapeHtml(x.name)}</h4><div class="meta">${escapeHtml(x.type)} • Verified ${x.verified}</div>${x.details?`<p>${escapeHtml(x.details)}</p>`:''}<p><a href="${x.url}" target="_blank" rel="noopener" style="color:#60a5fa">Open official source</a></p><div class="item-actions"><button class="danger" onclick="removeDepartment(${x.id})">Delete</button></div></article>`).join(''):'<div class="empty">No official sources saved yet.</div>';}
window.removeDepartment=id=>{write('departments',read('departments').filter(x=>x.id!==id));renderDepartments();updateDashboard();};

$('settingsForm').addEventListener('submit',e=>{e.preventDefault();write('testSettings',{name:$('testName').value.trim(),date:$('testDate').value});updateCountdown();openPanel('dashboard');});
function updateCountdown(){const x=read('testSettings',{});$('testName').value=x.name||'';$('testDate').value=x.date||'';if(!x.date){$('countdownValue').textContent='Not set';return;}const today=new Date();today.setHours(0,0,0,0);const target=new Date(x.date+'T00:00:00');const days=Math.ceil((target-today)/86400000);$('countdownValue').textContent=days>=0?`${days} day${days===1?'':'s'}`:'Date passed';}
function updateDashboard(){const apps=read('applications'),deps=read('departments'),w=read('lastWorkout',null);$('applicationCount').textContent=apps.length;$('departmentCount').textContent=deps.length;$('todayMission').innerHTML=w?`<strong>${w.duration}-minute ${w.goal} workout</strong><br><span class="muted">${w.plan.slice(0,3).join(' • ')}</span>`:'Generate a workout to create today’s mission.';}
function escapeHtml(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden');});$('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('installBtn').classList.add('hidden');});

$('verifiedDate').value=new Date().toISOString().slice(0,10);renderApplications();renderDepartments();updateDashboard();updateCountdown();const saved=read('lastWorkout',null);if(saved)renderWorkout(saved);
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
