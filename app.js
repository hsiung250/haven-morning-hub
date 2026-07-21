
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

function splitHostDuty(value){
  const text=clean(value).replace(/\s+/g," ").trim();
  if(!text) return {host:"",duty:""};
  const sp=text.match(/^(.+?)\s*SP\s*(.+)$/i);
  if(sp) return {host:sp[1].trim(),duty:sp[2].trim()};
  const parts=text.split(/[｜|、,，／/]+/).map(v=>v.trim()).filter(Boolean);
  if(parts.length>=2) return {host:parts[0],duty:parts.slice(1).join("、")};
  return {host:text,duty:""};
}
function enrichHostDuty(){
  Object.values(SITE_DATA.months).forEach(month=>{
    let weekly="";
    month.entries.forEach((item,index)=>{
      const day=new Date(`${item.date}T00:00:00`).getDay();
      if(item.host) weekly=item.host;
      if(day===1 && item.host) weekly=item.host;
      const parsed=splitHostDuty(item.host || weekly);
      item.hostName=parsed.host;
      item.dutyName=parsed.duty;
      if(day===0) weekly="";
    });
  });
}
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
    $("#todayDuty").textContent="—";
    $("#todayFinance").textContent="—";
    $("#todayCourse").textContent="今日無早會課程";
    $("#todaySpeaker").textContent="請查看完整課表";
    return;
  }
  $("#todayHost").textContent=clean(item.hostName)||"—";
  $("#todayDuty").textContent=clean(item.dutyName)||"—";
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
        ${detail("主持人",item.hostName)}
        ${detail("值星",item.dutyName)}
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
  const openSearch=() => {
    document.getElementById("schedule")?.scrollIntoView({behavior:"smooth"});
    setTimeout(() => $("#searchInput").focus(),450);
  };
  $("#shortcutSearch").addEventListener("click",openSearch);
  $("#wideQueryButton").addEventListener("click",openSearch);
}
enrichHostDuty();renderToday();renderTabs();renderSchedule();renderAnnouncements();renderMaterials();setupPortalLinks();bindEvents();
