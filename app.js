
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const state = {
  month: (() => {
    const current = String(new Date().getMonth() + 1).padStart(2, "0");
    return SITE_DATA.months[current] ? current : Object.keys(SITE_DATA.months)[0];
  })(),
  query: ""
};

function clean(value){ return String(value || "").trim(); }
function escapeHtml(value){
  return clean(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}
function normalizeText(value){
  return clean(value).toLowerCase().replace(/\s+/g,"").replace(/[－—–]/g,"-");
}
function splitCourse(value){
  const lines = clean(value).split(/\n+/).filter(Boolean);
  if(lines.length <= 1) return {title:lines[0] || "今日無早會課程", speaker:""};
  return {title:lines.slice(0,-1).join("\n"), speaker:lines.at(-1)};
}
function formatDate(dateString){
  const d = new Date(`${dateString}T00:00:00`);
  return `${d.getMonth()+1}/${d.getDate()}`;
}
function dateAliases(dateString){
  const d = new Date(`${dateString}T00:00:00`);
  const y=d.getFullYear(), m=d.getMonth()+1, day=d.getDate();
  const mm=String(m).padStart(2,"0"), dd=String(day).padStart(2,"0");
  return [
    `${y}-${mm}-${dd}`,`${y}/${mm}/${dd}`,`${m}/${day}`,`${mm}/${dd}`,
    `${m}-${day}`,`${mm}-${dd}`,`${m}月${day}日`,`${m}月${day}`,
    `${mm}${dd}`,`${m}${day}`,`${day}日`
  ];
}
function allEntries(){
  return Object.entries(SITE_DATA.months).flatMap(([monthKey,month]) =>
    month.entries.map(item => ({...item,monthKey}))
  );
}
function todayKey(){
  const n=new Date();
  return [n.getFullYear(),String(n.getMonth()+1).padStart(2,"0"),String(n.getDate()).padStart(2,"0")].join("-");
}
function findToday(){ return allEntries().find(i => i.date === todayKey()); }

function renderToday(){
  const now=new Date();
  const weekdays=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  $("#todayDate").textContent=`${now.getMonth()+1}月${now.getDate()}日`;
  $("#todayWeekday").textContent=weekdays[now.getDay()];
  const item=findToday();
  const firstNotice=(SITE_DATA.announcements && SITE_DATA.announcements[0]) || {};
  $("#todayNotice").textContent=firstNotice.title || "請查看公告中心";
  if(!item){
    $("#todayHost").textContent="課表未收錄";
    $("#todayFinance").textContent="—";
    $("#todayCourse").textContent="今日無早會課程";
    $("#todaySpeaker").textContent="請查看完整課表";
    return;
  }
  $("#todayHost").textContent=clean(item.host)||"—";
  $("#todayFinance").textContent=clean(item.finance)||"—";
  const course=splitCourse(item.course);
  $("#todayCourse").textContent=course.title;
  $("#todaySpeaker").textContent=course.speaker || clean(item.meeting) || "—";
}

function renderTabs(){
  $("#monthTabs").innerHTML=Object.entries(SITE_DATA.months).map(([key,month]) =>
    `<button class="${key===state.month?"active":""}" data-month="${key}">${escapeHtml(month.label)}</button>`
  ).join("");
  $$("#monthTabs button").forEach(btn => btn.addEventListener("click",() => {
    state.month=btn.dataset.month; state.query=""; $("#searchInput").value="";
    renderTabs(); renderSchedule();
  }));
}
function entryMatches(item,q){
  const query=normalizeText(q);
  if(!query) return true;
  return [item.date,item.weekday,item.host,item.finance,item.course,item.practice,item.closer,item.meeting,...dateAliases(item.date)]
    .map(normalizeText).some(v => v.includes(query));
}
function visibleEntries(){
  if(!state.query) return SITE_DATA.months[state.month].entries.map(i => ({...i,monthKey:state.month}));
  return allEntries().filter(i => entryMatches(i,state.query));
}
function detail(label,value,className=""){
  if(!clean(value)) return "";
  return `<div class="detail ${className}"><small>${escapeHtml(label)}</small><div>${escapeHtml(value)}</div></div>`;
}
function renderSchedule(){
  const entries=visibleEntries();
  $("#scheduleList").innerHTML=entries.map(item => `
    <article class="schedule-item ${item.date===todayKey()?"today":""}">
      <div class="date-box">
        <b>${formatDate(item.date)}</b>
        <span>${escapeHtml(item.weekday)}${state.query?`・${escapeHtml(SITE_DATA.months[item.monthKey].label)}`:""}</span>
      </div>
      <div class="schedule-details">
        ${detail("主持值星",item.host)}
        ${detail("財經時事",item.finance)}
        ${detail("早會課程",item.course,"course")}
        ${detail("演練項目",item.practice)}
        ${detail("主管結語",item.closer)}
        ${detail("當日會議",item.meeting,"meeting")}
      </div>
    </article>`).join("");
  $("#emptyState").hidden=entries.length>0;
}
function renderAnnouncements(){
  $("#announcementList").innerHTML=(SITE_DATA.announcements||[]).map(item => `
    <article class="announcement">
      <h3>${escapeHtml(item.title)}</h3><time>${escapeHtml(item.date)}</time>
      <p>${escapeHtml(item.content)}</p>
    </article>`).join("");
}
function renderMaterials(){
  $("#materialList").innerHTML=(SITE_DATA.materials||[]).map(item => `
    <article class="material">
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p>
      ${item.url?`<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">開啟教材 →</a>`:""}
    </article>`).join("");
}
function setupPortalLinks(){
  const links=SITE_DATA.portalLinks || {};
  const mapping=[
    ["materialsLink",links.materials],
    ["performanceQueryLink",links.performanceQuery],
    ["performanceReportLink",links.performanceReport],
    ["hGroupLink",links.hGroup]
  ];
  mapping.forEach(([id,url]) => {
    const el=document.getElementById(id);
    if(!el) return;
    if(clean(url)){ el.href=url; }
    else { el.removeAttribute("href"); el.classList.add("disabled"); }
  });
}
function bindEvents(){
  $("#searchInput").addEventListener("input",e => {state.query=e.target.value.trim();renderSchedule();});
  $("#clearSearch").addEventListener("click",() => {state.query="";$("#searchInput").value="";renderSchedule();});
  $$("[data-scroll]").forEach(btn => btn.addEventListener("click",() =>
    document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"})
  ));
  $("#shortcutSearch").addEventListener("click",() => {
    document.getElementById("schedule")?.scrollIntoView({behavior:"smooth"});
    setTimeout(() => $("#searchInput").focus(),450);
  });
}
renderToday();renderTabs();renderSchedule();renderAnnouncements();renderMaterials();setupPortalLinks();bindEvents();
