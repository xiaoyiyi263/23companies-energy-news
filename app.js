const { companies, events, meta, quarterTrends = {}, companyQuarterSummaries = {} } = window.ENERGY_NEWS_DATA;

const state = {
  company: "all",
  region: "all",
  quarter: "Q3",
  search: "",
};

const companyFilter = document.querySelector("#company-filter");
const regionFilter = document.querySelector("#region-filter");
const quarterFilter = document.querySelector("#quarter-filter");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const trendOverview = document.querySelector("#trend-overview");
const companyList = document.querySelector("#company-list");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getQuarter(dateValue) {
  const month = Number(dateValue.slice(5, 7));
  return `Q${Math.ceil(month / 3)}`;
}

function formatDate(dateValue) {
  const [year, month, day] = dateValue.split("-");
  return `${year}.${month}.${day}`;
}

function getCompanyEvents(companyId) {
  return events
    .filter((event) => event.companyId === companyId)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function getCoverage(companyId) {
  const quarterEvents = getCompanyEvents(companyId).filter((event) => getQuarter(event.date) === state.quarter || state.quarter === "all");
  const target = state.quarter === "all" ? meta.quarterlyTarget * 2 : meta.quarterlyTarget;
  return {
    count: quarterEvents.length,
    target,
    gap: Math.max(0, target - quarterEvents.length),
  };
}

function createCompanyOptions() {
  companyFilter.innerHTML = `<option value="all">全部公司</option>`;
  companies.forEach((company) => {
    const option = document.createElement("option");
    option.value = company.id;
    option.textContent = company.shortName;
    companyFilter.appendChild(option);
  });
}

function eventMatches(event, company) {
  const keyword = state.search.trim().toLowerCase();
  const haystack = [
    company.name,
    company.shortName,
    event.title,
    event.summary,
    event.details,
    event.significance,
    event.sourceName,
    event.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return (
    (state.company === "all" || event.companyId === state.company) &&
    (state.region === "all" || company.region === state.region) &&
    (state.quarter === "all" || getQuarter(event.date) === state.quarter) &&
    (!keyword || haystack.includes(keyword))
  );
}

function renderSources(company) {
  return company.sources
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`)
    .join(" / ");
}

function renderEvent(event) {
  const sourceClass = event.sourceType === "官网" ? "official" : "authority";
  return `
    <article class="event">
      <time class="event-date" datetime="${event.date}">${formatDate(event.date)}</time>
      <div>
        <div class="event-meta">
          <span class="badge ${sourceClass}">${escapeHtml(event.sourceType)}</span>
          <span class="event-tags">${event.tags.map(tag => `<button class="tag-btn" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}</span>
        </div>
        <h3>${escapeHtml(event.title)}</h3>
        <div class="event-sections">
          <p><strong>新闻内容：</strong>${escapeHtml(event.details || event.summary)}</p>
        </div>
        <p class="source-line">出处：<a href="${event.url}" target="_blank" rel="noreferrer">${escapeHtml(event.sourceName)}</a></p>
      </div>
    </article>
  `;
}

function renderTrendOverview() {
  const trend = quarterTrends[state.quarter];
  if (!trend) {
    trendOverview.innerHTML = "";
    trendOverview.hidden = true;
    return;
  }

  trendOverview.hidden = false;
  trendOverview.innerHTML = `
    <div class="section-head">
      <div>
        <p class="section-kicker">${state.quarter} 趋势判断</p>
        <h2>${escapeHtml(trend.title)}</h2>
      </div>
      <span class="badge">季度总览</span>
    </div>
    <p class="trend-lead">${escapeHtml(trend.overview)}</p>
    <div class="trend-grid">
      ${trend.points
        .map((point) => `
          <article class="trend-card">
            <h3>${escapeHtml(point.title)}</h3>
            <p>${escapeHtml(point.text)}</p>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function render() {
  renderTrendOverview();

  const visibleCompanyIds = new Set();
  const filteredEvents = events.filter((event) => {
    const company = companies.find((item) => item.id === event.companyId);
    const match = eventMatches(event, company);
    if (match) visibleCompanyIds.add(event.companyId);
    return match;
  });

  const visibleCompanies = companies.filter((company) => {
    if (state.company !== "all" && company.id !== state.company) return false;
    if (state.region !== "all" && company.region !== state.region) return false;
    if (state.search && !visibleCompanyIds.has(company.id)) return false;
    return true;
  });

  companyList.innerHTML = visibleCompanies
    .map((company) => {
      const companyEvents = filteredEvents.filter((event) => event.companyId === company.id).sort((a, b) => a.date.localeCompare(b.date));
      const coverage = getCoverage(company.id);
      return `
        <section class="company-block">
          <header class="company-head">
            <div>
              <h2 class="company-title">${escapeHtml(company.name)}</h2>
              ${companyQuarterSummaries[state.quarter]?.[company.id] ? `<p class="company-summary">${escapeHtml(companyQuarterSummaries[state.quarter][company.id])}</p>` : ""}
              <div class="company-meta">
                <span class="badge">${escapeHtml(company.country)}</span>
                <span>${escapeHtml(company.region)}</span>
                <span>官网入口：${renderSources(company)}</span>
              </div>
            </div>
            <div class="coverage">
              <strong>${coverage.count}/${coverage.target}</strong>
              <span>当前筛选口径下的季度目标</span>
            </div>
          </header>
          <div class="event-list">
            ${companyEvents.length ? companyEvents.map(renderEvent).join("") : `<div class="empty">待补充：本公司当前筛选条件下暂无已录入事件。</div>`}
          </div>
        </section>
      `;
    })
    .join("");

  const officialCount = filteredEvents.filter((event) => event.sourceType === "官网").length;
  const currentQuarter = state.quarter === "all" ? "Q1" : state.quarter;
  const totalGap = companies.reduce((sum, company) => {
    const count = getCompanyEvents(company.id).filter((event) => getQuarter(event.date) === currentQuarter).length;
    return sum + Math.max(0, meta.quarterlyTarget - count);
  }, 0);

  document.querySelector("#event-count").textContent = String(events.length);
  document.querySelector("#company-count").textContent = String(companies.length);
  document.querySelector("#official-ratio").textContent = filteredEvents.length ? `${Math.round((officialCount / filteredEvents.length) * 100)}%` : "0%";
  document.querySelector("#coverage-gap").textContent = String(totalGap);
  document.querySelector("#last-updated").textContent = `最近更新：${meta.lastUpdated}`;

  // 搜索结果计数 + 清空按钮显隐
  const filterResult = document.querySelector("#filter-result");
  const hasActiveFilter = state.company !== "all" || state.region !== "all" || state.quarter !== "all" || state.search.trim() !== "";
  if (hasActiveFilter) {
    filterResult.hidden = false;
    const parts = [];
    if (state.company !== "all") parts.push(`公司：${companies.find(c => c.id === state.company)?.shortName || state.company}`);
    if (state.region !== "all") parts.push(`地区：${state.region}`);
    if (state.quarter !== "all") parts.push(`季度：${state.quarter}`);
    if (state.search.trim()) parts.push(`关键词："${state.search.trim()}"`);
    filterResult.innerHTML = `当前筛选（${parts.join("，")}）命中 <strong>${filteredEvents.length}</strong> 条新闻`;
  } else {
    filterResult.hidden = true;
  }
  searchClear.hidden = state.search.trim() === "";
}

companyFilter.addEventListener("change", (event) => {
  state.company = event.target.value;
  render();
});

regionFilter.addEventListener("change", (event) => {
  state.region = event.target.value;
  render();
});

quarterFilter.addEventListener("change", (event) => {
  state.quarter = event.target.value;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

searchClear.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  render();
  searchInput.focus();
});

createCompanyOptions();
quarterFilter.value = state.quarter;
render();

// 标签点击筛选（事件委托，动态渲染的标签也能响应）
document.addEventListener("click", (event) => {
  const tagBtn = event.target.closest(".tag-btn");
  if (tagBtn) {
    const tag = tagBtn.dataset.tag;
    state.search = tag;
    searchInput.value = tag;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
