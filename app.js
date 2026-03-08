const API='https://phi-lab-server.vercel.app/api/v1/lab';
const OPEN_IMG="Open-Status.png";
const CLOSED_IMG="Closed- Status .png";
let issues=[],tab='all';

const $=id=>document.getElementById(id);

$('btnFill').onclick=()=>{$('uname').value='admin';$('upass').value='admin123';$('errBox').style.display='none'};
$('btnLogin').onclick=doLogin;
['uname','upass'].forEach(id=>$(id).addEventListener('keydown',e=>e.key==='Enter'&&doLogin()));

function doLogin(){
  if($('uname').value.trim()==='admin'&&$('upass').value.trim()==='admin123'){
    $('errBox').style.display='none';
    $('loginPage').style.display='none';
    $('mainApp').style.display='block';
    sessionStorage.setItem('auth','1');
    fetchIssues();
  }else $('errBox').style.display='block';
}

$('btnSearch').onclick=doSearch;
$('searchInput').addEventListener('keydown',e=>e.key==='Enter'&&doSearch());

if(sessionStorage.getItem('auth')){
  $('loginPage').style.display='none';
  $('mainApp').style.display='block';
  fetchIssues();
}

async function fetchIssues(q=''){
  $('spinner').style.display='flex';
  $('cardsGrid').innerHTML='';
  $('noRes').style.display='none';
  try{
    const url=q?`${API}/issues/search?q=${encodeURIComponent(q)}`:`${API}/issues`;
    const r=await fetch(url);if(!r.ok)throw 0;
    const d=await r.json();
    issues=Array.isArray(d)?d:(d.issues||d.data||[]);
    updateHeader();render();
  }catch{
    $('cardsGrid').innerHTML=`<div style="grid-column:1/-1;padding:60px;text-align:center;color:#6b7280"><p style="font-weight:600;color:#374151;margin-bottom:6px">Could not load issues</p><p style="font-size:12px">Check your connection and try again</p></div>`;
  }finally{$('spinner').style.display='none'}
}

function st(i){return(i.status||i.state||'open').toLowerCase()}

function updateHeader(){
  const oc=issues.filter(i=>st(i)==='open').length;
  const cc=issues.filter(i=>st(i)==='closed').length;
  const shown=tab==='all'?issues.length:tab==='open'?oc:cc;
  $('issueCount').textContent=shown+' Issues';
}

function render(){
  const list=tab==='all'?issues:issues.filter(i=>st(i)===tab);
  $('issueCount').textContent=list.length+' Issues';
  $('cardsGrid').innerHTML='';
  if(!list.length){$('noRes').style.display='flex';return}
  $('noRes').style.display='none';
  list.forEach((issue,i)=>$('cardsGrid').appendChild(buildCard(issue,i)));
}

function buildCard(issue,idx){
  const status=st(issue);
  const title=esc(issue.title||'Untitled Issue');
  const desc=esc(issue.body||issue.description||'No description provided.');
  const author=esc(issue.user?.login||issue.author||issue.created_by||'Unknown');
  const pri=(issue.priority||'medium').toLowerCase();
  const labels=Array.isArray(issue.labels)?issue.labels.map(l=>esc(typeof l==='string'?l:(l.name||''))).filter(Boolean):[];
  const date=fmtDate(issue.created_at||issue.createdAt||'');
  const num=issue.number||issue.id||idx+1;

  const pBadge={low:'<span class="priority-badge p-low">LOW</span>',medium:'<span class="priority-badge p-medium">MEDIUM</span>',high:'<span class="priority-badge p-high">HIGH</span>',critical:'<span class="priority-badge p-critical">CRITICAL</span>'}[pri]||'<span class="priority-badge p-medium">MEDIUM</span>';

  const labelHtml=labels.map(l=>{
    const n=l.toLowerCase();
    let cls='lbl-default';
    if(n.includes('bug'))cls='lbl-bug';
    else if(n.includes('help'))cls='lbl-help';
    else if(n.includes('enhancement'))cls='lbl-enhancement';
    else if(n.includes('feature'))cls='lbl-feature';
    else if(n.includes('doc'))cls='lbl-doc';
    return`<span class="label ${cls}">⊕ ${l}</span>`;
  }).join('');

  const el=document.createElement('div');
  el.className=`card ${status}`;
  el.style.animationDelay=Math.min(idx*.03,.5)+'s';
  el.innerHTML=`
    <div class="card-top-row">
      <img class="card-icon" src="${status==='open'?OPEN_IMG:CLOSED_IMG}" alt="${status}"/>
      ${pBadge}
    </div>
    <div class="card-title">${title}</div>
    <div class="card-desc">${desc}</div>
    <div class="card-labels">${labelHtml}</div>
    <div class="card-footer">
      <div class="card-author">Pr by ${author}</div>
      <div class="card-date">${date}</div>
    </div>`;
  el.onclick=()=>openModal(issue);
  return el;
}

document.querySelectorAll('.tab').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    tab=btn.dataset.tab;
    updateHeader();render();
  };
});

function doSearch(){
  const q=$('searchInput').value.trim();
  tab='all';
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelector('[data-tab="all"]').classList.add('active');
  fetchIssues(q);
}

function openModal(issue){
  const status=st(issue);
  const title=esc(issue.title||'Untitled Issue');
  const desc=esc(issue.body||issue.description||'No description provided.');
  const author=esc(issue.user?.login||issue.author||issue.created_by||'Unknown');
  const pri=(issue.priority||'medium').toLowerCase();
  const labels=Array.isArray(issue.labels)?issue.labels.map(l=>esc(typeof l==='string'?l:(l.name||''))).filter(Boolean):[];
  const num=issue.number||issue.id||'—';
  const created=fmtDate(issue.created_at||issue.createdAt||'');

  const pBadge={low:'<span class="priority-badge p-low">LOW</span>',medium:'<span class="priority-badge p-medium">MEDIUM</span>',high:'<span class="priority-badge p-high">HIGH</span>',critical:'<span class="priority-badge p-critical">CRITICAL</span>'}[pri]||'<span class="priority-badge p-medium">MEDIUM</span>';

  const labelHtml=labels.map(l=>{
    const n=l.toLowerCase();
    let cls='lbl-default';
    if(n.includes('bug'))cls='lbl-bug';
    else if(n.includes('help'))cls='lbl-help';
    else if(n.includes('enhancement'))cls='lbl-enhancement';
    else if(n.includes('feature'))cls='lbl-feature';
    else if(n.includes('doc'))cls='lbl-doc';
    return`<span class="label ${cls}">⊕ ${l}</span>`;
  }).join('');

  $('modal').innerHTML=`
    <div class="modal-body">
      <div class="modal-title">${title}</div>
      <div class="modal-meta-row">
        <span class="badge-opened">${status==='open'?'Opened':'Closed'}</span>
        <span class="modal-meta-text">• Opened by ${author} • ${created}</span>
      </div>
      ${labels.length?`<div class="modal-labels">${labelHtml}</div>`:''}
      <div class="modal-desc">${desc}</div>
      <div class="modal-grid">
        <div>
          <div class="modal-field-label">Assignee</div>
          <div class="modal-field-val">${author}</div>
        </div>
        <div>
          <div class="modal-field-label">Priority</div>
          <div class="modal-field-val">${pBadge}</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-close-modal" onclick="closeModal()">Close</button>
      </div>
    </div>`;
  $('overlay').style.display='flex';
  document.body.style.overflow='hidden';
}

function closeModal(){
  $('overlay').style.display='none';
  document.body.style.overflow='';
}

document.addEventListener('keydown',e=>e.key==='Escape'&&closeModal());

function esc(s){const d=document.createElement('div');d.textContent=String(s||'');return d.innerHTML}
function fmtDate(s){if(!s)return'—';try{return new Date(s).toLocaleDateString('en-US',{month:'numeric',day:'numeric',year:'numeric'})}catch{return s}}
