
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  month: (() => {
    const current = String(new Date().getMonth() + 1).padStart(2, "0");
    return SITE_DATA.months[current] ? current : "07";
  })(),
  query: ""
};

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function splitCourse(value) {
  const lines = clean(value).split(/\n+/).filter(Boolean);
  if (lines.length <= 1) return { title: lines[0] || "今日無早會課程", speaker: "" };
  return { title: lines.slice(0, -1).join("\n"), speaker: lines.at(-1) };
}

function formatDate(dateString) {
  const d = new Date(`${dateString}T00:00:00`);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function allEntries() {
  return Object.values(SITE_DATA.months).flatMap(month => month.entries);
}

function findToday() {
  const now = new Date();
  const localDate = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  return allEntries().find(item => item.date === localDate);
}

function renderToday() {
  const now = new Date();
  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  $("#todayDate").textContent = `${now.getMonth() + 1}月${now.getDate()}日`;
  $("#todayWeekday").textContent = weekdays[now.getDay()];

  const item = findToday();
  if (!item) {
    $("#todayHost").textContent = "課表未收錄";
    $("#todayFinance").textContent = "—";
    $("#todayCourse").textContent = "今日無早會課程";
    $("#todaySpeaker").textContent = "請查看公告或完整課表";
    return;
  }

  $("#todayHost").textContent = clean(item.host) || "—";
  $("#todayFinance").textContent = clean(item.finance) || "—";
  const course = splitCourse(item.course);
  $("#todayCourse").textContent = course.title;
  $("#todaySpeaker").textContent = course.speaker || clean(item.meeting) || "—";
}

function renderTabs() {
  $("#monthTabs").innerHTML = Object.entries(SITE_DATA.months)
    .map(([key, month]) => `<button class="${key === state.month ? "active" : ""}" data-month="${key}">${month.label}</button>`)
    .join("");
  $$("#monthTabs button").forEach(button => {
    button.addEventListener("click", () => {
      state.month = button.dataset.month;
      renderTabs();
      renderSchedule();
    });
  });
}

function entryMatches(item) {
  const query = state.query.toLowerCase();
  if (!query) return true;
  return Object.values(item).join(" ").toLowerCase().includes(query);
}

function detail(label, value, className = "") {
  if (!clean(value)) return "";
  return `<div class="detail ${className}"><small>${label}</small><div>${escapeHtml(value)}</div></div>`;
}

function renderSchedule() {
  const entries = SITE_DATA.months[state.month].entries.filter(entryMatches);
  const today = new Date();
  const todayKey = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  $("#scheduleList").innerHTML = entries.map(item => `
    <article class="schedule-item ${item.date === todayKey ? "today" : ""}">
      <div class="date-box">
        <b>${formatDate(item.date)}</b>
        <span>${escapeHtml(item.weekday)}</span>
      </div>
      <div class="schedule-details">
        ${detail("主持值星", item.host)}
        ${detail("財經時事", item.finance)}
        ${detail("早會課程", item.course, "course")}
        ${detail("演練項目", item.practice)}
        ${detail("主管結語", item.closer)}
        ${detail("當日會議", item.meeting, "meeting")}
      </div>
    </article>
  `).join("");

  $("#emptyState").hidden = entries.length > 0;
}

function renderAnnouncements() {
  $("#announcementList").innerHTML = SITE_DATA.announcements.map(item => `
    <article class="announcement">
      <h3>${escapeHtml(item.title)}</h3>
      <time>${escapeHtml(item.date)}</time>
      <p>${escapeHtml(item.content)}</p>
    </article>
  `).join("");
}

function renderHighlights() {
  $("#highlightList").innerHTML = SITE_DATA.highlights.map(item => `
    <article class="highlight">
      <div class="icon">${escapeHtml(item.icon)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.content)}</p>
    </article>
  `).join("");
}

function renderMaterials() {
  $("#materialList").innerHTML = SITE_DATA.materials.map(item => `
    <article class="material">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      ${item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">開啟教材 →</a>` : ""}
    </article>
  `).join("");
}

function bindEvents() {
  $("[id='searchInput']").addEventListener("input", event => {
    state.query = event.target.value.trim();
    renderSchedule();
  });
  $("#clearSearch").addEventListener("click", () => {
    state.query = "";
    $("#searchInput").value = "";
    renderSchedule();
  });
  $$("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    });
  });
  $("#focusSearch").addEventListener("click", () => {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#searchInput").focus(), 450);
  });
}

renderToday();
renderTabs();
renderSchedule();
renderAnnouncements();
renderHighlights();
renderMaterials();
bindEvents();
