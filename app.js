const { companies, events, meta, quarterTrends = {}, companyQuarterSummaries = {} } = window.ENERGY_NEWS_DATA;

const state = {
  company: "all",
  region: "all",
  quarter: "Q3",
  importance: "all",
  search: "",
};

let currentFilteredEvents = [];

const companyFilter = document.querySelector("#company-filter");
const regionFilter = document.querySelector("#region-filter");
const quarterFilter = document.querySelector("#quarter-filter");
const importanceFilter = document.querySelector("#importance-filter");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const exportBtn = document.querySelector("#export-btn");
const trendOverview = document.querySelector("#trend-overview");
const tagCloudContent = document.querySelector("#tag-cloud-content");
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
    (state.importance === "all" || event.importance === state.importance) &&
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
  const importanceClass = event.importance === "高" ? "imp-high" : event.importance === "低" ? "imp-low" : "imp-mid";
  const importanceLabel = event.importance || "中";
  return `
    <article class="event">
      <time class="event-date" datetime="${event.date}">${formatDate(event.date)}</time>
      <div>
        <div class="event-meta">
          <span class="badge ${sourceClass}">${escapeHtml(event.sourceType)}</span>
          <span class="badge importance ${importanceClass}">${importanceLabel}</span>
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

function renderTagCloud(filteredEvents) {
  // 统计标签频次
  const tagCount = {};
  filteredEvents.forEach((event) => {
    event.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  // 转为数组并排序，取Top20
  const tags = Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  if (tags.length === 0) {
    tagCloudContent.innerHTML = '<p class="empty">当前筛选条件下暂无标签数据。</p>';
    return;
  }

  const maxCount = tags[0].count;
  const minCount = tags[tags.length - 1].count;

  tagCloudContent.innerHTML = tags
    .map(({ tag, count }) => {
      // 根据频次计算字号（14px - 28px）
      const ratio = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);
      const fontSize = Math.round(14 + ratio * 14);
      // 根据频次计算颜色深度
      const opacity = 0.5 + ratio * 0.5;
      return `<button class="tag-cloud-item" data-tag="${escapeHtml(tag)}" style="font-size:${fontSize}px;opacity:${opacity}">
        ${escapeHtml(tag)} <span class="tag-count">${count}</span>
      </button>`;
    })
    .join("");
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

  currentFilteredEvents = filteredEvents;
  renderTagCloud(filteredEvents);

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
      const profile = company.profile || {};
      return `
        <section class="company-block" data-company-id="${company.id}">
          <header class="company-head">
            <div>
              <div class="company-title-row">
                <h2 class="company-title">${escapeHtml(company.name)}</h2>
                <button class="profile-toggle" data-company-id="${company.id}" aria-expanded="false">公司画像</button>
              </div>
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
          <div class="company-profile" id="profile-${company.id}" hidden>
            <div class="profile-grid">
              ${profile.headquarters ? `<div class="profile-item"><span class="profile-label">总部</span><span class="profile-value">${escapeHtml(profile.headquarters)}</span></div>` : ""}
              ${profile.business ? `<div class="profile-item"><span class="profile-label">主营业务</span><span class="profile-value">${escapeHtml(profile.business)}</span></div>` : ""}
              ${profile.capacity ? `<div class="profile-item"><span class="profile-label">装机规模</span><span class="profile-value">${escapeHtml(profile.capacity)}</span></div>` : ""}
              ${profile.revenue ? `<div class="profile-item"><span class="profile-label">2025年营收</span><span class="profile-value">${escapeHtml(profile.revenue)}</span></div>` : ""}
              ${profile.employees ? `<div class="profile-item"><span class="profile-label">员工人数</span><span class="profile-value">${escapeHtml(profile.employees)}</span></div>` : ""}
              ${profile.website ? `<div class="profile-item"><span class="profile-label">官方网站</span><span class="profile-value"><a href="${escapeHtml(profile.website)}" target="_blank" rel="noreferrer">${escapeHtml(profile.website)}</a></span></div>` : ""}
            </div>
          </div>
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
  const hasActiveFilter = state.company !== "all" || state.region !== "all" || state.quarter !== "all" || state.importance !== "all" || state.search.trim() !== "";
  if (hasActiveFilter) {
    filterResult.hidden = false;
    const parts = [];
    if (state.company !== "all") parts.push(`公司：${companies.find(c => c.id === state.company)?.shortName || state.company}`);
    if (state.region !== "all") parts.push(`地区：${state.region}`);
    if (state.quarter !== "all") parts.push(`季度：${state.quarter}`);
    if (state.importance !== "all") parts.push(`重要性：${state.importance}`);
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

importanceFilter.addEventListener("change", (event) => {
  state.importance = event.target.value;
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

function exportToCSV() {
  if (currentFilteredEvents.length === 0) {
    alert("当前筛选条件下没有可导出的新闻。");
    return;
  }

  const headers = ["公司", "日期", "标题", "新闻内容", "意义", "重要性", "来源类型", "来源名称", "链接", "标签"];
  const companyMap = {};
  companies.forEach((c) => { companyMap[c.id] = c.name; });

  const escapeCSV = (value) => {
    const str = String(value || "");
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const rows = currentFilteredEvents.map((event) => {
    return [
      companyMap[event.companyId] || event.companyId,
      event.date,
      event.title,
      event.details || event.summary,
      event.significance,
      event.importance || "中",
      event.sourceType,
      event.sourceName,
      event.url,
      (event.tags || []).join("; "),
    ].map(escapeCSV).join(",");
  });

  const csv = "\uFEFF" + headers.map(escapeCSV).join(",") + "\n" + rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const now = new Date();
  const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  link.href = url;
  link.download = `能源企业新闻_${dateStr}_${currentFilteredEvents.length}条.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

exportBtn.addEventListener("click", exportToCSV);

createCompanyOptions();
quarterFilter.value = state.quarter;
render();

// 标签点击筛选 + 公司画像展开（事件委托）
document.addEventListener("click", (event) => {
  const tagBtn = event.target.closest(".tag-btn");
  if (tagBtn) {
    const tag = tagBtn.dataset.tag;
    state.search = tag;
    searchInput.value = tag;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const profileBtn = event.target.closest(".profile-toggle");
  if (profileBtn) {
    const companyId = profileBtn.dataset.companyId;
    const profileEl = document.getElementById(`profile-${companyId}`);
    if (profileEl) {
      const isHidden = profileEl.hidden;
      profileEl.hidden = !isHidden;
      profileBtn.setAttribute("aria-expanded", String(isHidden));
      profileBtn.textContent = isHidden ? "收起画像" : "公司画像";
      profileBtn.classList.toggle("active", isHidden);
    }
  }
});
