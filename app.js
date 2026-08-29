const { companies, events, meta, quarterTrends = {}, companyQuarterSummaries = {} } = window.ENERGY_NEWS_DATA;

const state = {
  company: "all",
  region: "all",
  quarter: "Q3",
  importance: "all",
  search: "",
  view: "company",
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
const companyBarChart = document.querySelector("#company-bar-chart");
const sourceDonut = document.querySelector("#source-donut");
const importanceDonut = document.querySelector("#importance-donut");
const viewCompanyBtn = document.querySelector("#view-company");
const viewTimelineBtn = document.querySelector("#view-timeline");
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

function renderTimeline(filteredEvents) {
  const companyMap = {};
  companies.forEach((c) => { companyMap[c.id] = c; });

  const sorted = [...filteredEvents].sort((a, b) => b.date.localeCompare(a.date));

  if (sorted.length === 0) {
    return '<div class="empty">当前筛选条件下暂无新闻。</div>';
  }

  const groups = {};
  sorted.forEach((event) => {
    const month = event.date.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(event);
  });

  return Object.keys(groups).sort().reverse().map((month) => {
    const monthEvents = groups[month];
    const [year, mon] = month.split("-");
    return `
      <div class="timeline-month">
        <h3 class="timeline-month-title">${year}年${parseInt(mon)}月 <span class="timeline-count">${monthEvents.length}条</span></h3>
        <div class="timeline-list">
          ${monthEvents.map((event) => {
            const company = companyMap[event.companyId];
            const sourceClass = event.sourceType === "官网" ? "official" : "authority";
            const impClass = event.importance === "高" ? "imp-high" : event.importance === "低" ? "imp-low" : "imp-mid";
            return `
              <article class="event timeline-event">
                <time class="event-date" datetime="${event.date}">${formatDate(event.date)}</time>
                <div>
                  <div class="event-meta">
                    <span class="badge">${company ? escapeHtml(company.shortName) : escapeHtml(event.companyId)}</span>
                    <span class="badge ${sourceClass}">${escapeHtml(event.sourceType)}</span>
                    <span class="badge importance ${impClass}">${event.importance || "中"}</span>
                  </div>
                  <h3>${escapeHtml(event.title)}</h3>
                  <div class="event-sections">
                    <p><strong>新闻内容：</strong>${escapeHtml(event.details || event.summary)}</p>
                  </div>
                  <p class="source-line">出处：<a href="${event.url}" target="_blank" rel="noreferrer">${escapeHtml(event.sourceName)}</a></p>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
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
  const tagCount = {};
  filteredEvents.forEach((event) => {
    event.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

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
      const ratio = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);
      const fontSize = Math.round(14 + ratio * 14);
      const opacity = 0.5 + ratio * 0.5;
      return `<button class="tag-cloud-item" data-tag="${escapeHtml(tag)}" style="font-size:${fontSize}px;opacity:${opacity}">
        ${escapeHtml(tag)} <span class="tag-count">${count}</span>
      </button>`;
    })
    .join("");
}

function renderDataOverview(filteredEvents) {
  if (!companyBarChart || !sourceDonut || !importanceDonut) return;

  const companyCounts = {};
  filteredEvents.forEach((event) => {
    companyCounts[event.companyId] = (companyCounts[event.companyId] || 0) + 1;
  });

  const sortedCompanies = companies
    .map((c) => ({ ...c, count: companyCounts[c.id] || 0 }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  const maxCount = sortedCompanies.length ? sortedCompanies[0].count : 1;

  companyBarChart.innerHTML = sortedCompanies
    .map((c) => {
      const w = Math.max(4, (c.count / maxCount) * 100);
      return `<div class="bar-row"><span class="bar-label" title="${escapeHtml(c.name)}">${escapeHtml(c.shortName)}</span><div class="bar-track"><div class="bar-fill" style="width:${w}%"></div></div><span class="bar-value">${c.count}</span></div>`;
    })
    .join("");

  const officialCount = filteredEvents.filter((e) => e.sourceType === "官网").length;
  const officialP = filteredEvents.length ? (officialCount / filteredEvents.length) * 100 : 0;
  sourceDonut.style.background = `conic-gradient(#0f766e 0% ${officialP}%, #d97706 ${officialP}% 100%)`;
  sourceDonut.innerHTML = `<div class="donut-inner"><strong>${officialCount}</strong><span>官网</span></div>`;

  const imp = { "高": 0, "中": 0, "低": 0 };
  filteredEvents.forEach((e) => { imp[e.importance || "中"] = (imp[e.importance || "中"] || 0) + 1; });
  const total = filteredEvents.length || 1;
  const hp = (imp["高"] / total) * 100, mp = (imp["中"] / total) * 100;
  importanceDonut.style.background = `conic-gradient(#dc2626 0% ${hp}%, #d97706 ${hp}% ${hp + mp}%, #6b7280 ${hp + mp}% 100%)`;
  importanceDonut.innerHTML = `<div class="donut-inner"><strong>${imp["高"]}</strong><span>高重要</span></div>`;
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
  renderDataOverview(filteredEvents);

  const visibleCompanies = companies.filter((company) => {
    if (state.company !== "all" && company.id !== state.company) return false;
    if (state.region !== "all" && company.region !== state.region) return false;
    if (state.search && !visibleCompanyIds.has(company.id)) return false;
    return true;
  });

  if (state.view === "timeline") {
    companyList.innerHTML = renderTimeline(filteredEvents);
  } else {
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
  }

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
    filterResult.innerHTML = `当前筛选（${parts.join("，")}）命中<strong>${filteredEvents.length}</strong> 条新闻`;
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

viewCompanyBtn.addEventListener("click", () => {
  state.view = "company";
  viewCompanyBtn.classList.add("active");
  viewTimelineBtn.classList.remove("active");
  render();
});

viewTimelineBtn.addEventListener("click", () => {
  state.view = "timeline";
  viewTimelineBtn.classList.add("active");
  viewCompanyBtn.classList.remove("active");
  render();
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

createCompanyOptions();
quarterFilter.value = state.quarter;
render();

// 深色模式切换
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 智能趋势分析
const aiAnalyzeBtn = document.querySelector("#ai-analyze-btn");
const aiAnalysisResult = document.querySelector("#ai-analysis-result");
const aiAnalysisContent = document.querySelector("#ai-analysis-content");
const copyAnalysisBtn = document.querySelector("#copy-analysis-btn");

function generateAnalysis() {
  const events = currentFilteredEvents;
  if (events.length === 0) {
    return "当前筛选条件下暂无新闻数据，无法生成分析。";
  }

  // 统计标签频次
  const tagCount = {};
  events.forEach((e) => {
    e.tags.forEach((tag) => { tagCount[tag] = (tagCount[tag] || 0) + 1; });
  });
  const topTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 8);

  // 统计公司新闻数量
  const companyCount = {};
  events.forEach((e) => { companyCount[e.companyId] = (companyCount[e.companyId] || 0) + 1; });
  const topCompanies = Object.entries(companyCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const companyMap = {};
  companies.forEach((c) => { companyMap[c.id] = c.shortName; });

  // 统计重要性分布
  const impCount = { "高": 0, "中": 0, "低": 0 };
  events.forEach((e) => { impCount[e.importance || "中"] = (impCount[e.importance || "中"] || 0) + 1; });

  // 统计来源占比
  const officialCount = events.filter((e) => e.sourceType === "官网").length;
  const officialRatio = Math.round((officialCount / events.length) * 100);

  // 时间范围
  const dates = events.map((e) => e.date).sort();
  const dateRange = dates.length > 1 ? `${dates[0]} 至 ${dates[dates.length - 1]}` : dates[0];

  // 生成分析文本
  let analysis = `【数据概览】本次分析覆盖 ${events.length} 条新闻，时间范围 ${dateRange}，涉及 ${Object.keys(companyCount).length} 家企业。官网来源占比 ${officialRatio}%，高重要性事件 ${impCount["高"]} 条（占比 ${Math.round((impCount["高"] / events.length) * 100)}%）。\n\n`;

  analysis += `【热点主题】本阶段高频主题集中在：${topTags.slice(0, 5).map(([tag, count]) => `${tag}（${count}条）`).join("、")}。`;
  if (topTags.length > 5) {
    analysis += `其次是 ${topTags.slice(5, 8).map(([tag]) => tag).join("、")} 等方向。`;
  }
  analysis += "\n\n";

  analysis += `【企业动态】新闻数量居前的企业为：${topCompanies.map(([id, count]) => `${companyMap[id] || id}（${count}条）`).join("、")}。`;
  const activeCompanies = topCompanies.length;
  if (activeCompanies >= 3) {
    analysis += `显示头部企业在本阶段动态更为密集。`;
  }
  analysis += "\n\n";

  // 基于标签生成趋势判断
  const trendKeywords = ["核电", "海上风电", "储能", "数据中心", "AI", "光伏", "电网", "氢能", "并购", "投资", "核准", "并网"];
  const activeTrends = trendKeywords.filter((kw) => tagCount[kw] && tagCount[kw] >= 2);
  if (activeTrends.length > 0) {
    analysis += `【趋势判断】${activeTrends.slice(0, 3).join("、")} 等领域在本阶段表现活跃，`;
    if (tagCount["数据中心"] || tagCount["AI"]) {
      analysis += "AI与数据中心负荷增长正在重塑电源投资逻辑，";
    }
    if (tagCount["核电"] || tagCount["核准"]) {
      analysis += "核电项目核准与建设节奏加快，";
    }
    if (tagCount["储能"]) {
      analysis += "储能从配套设施升级为独立增长引擎，";
    }
    analysis += "行业整体呈现" + (activeTrends.length > 3 ? "多线并进" : "重点突破") + "的发展格局。\n\n";
  }

  analysis += `【信息质量】官网来源占比 ${officialRatio}%，数据权威性较高；高重要性事件 ${impCount["高"]} 条，建议重点关注上述热点主题中的重大项目节点和战略投资动向。`;

  return analysis;
}

aiAnalyzeBtn.addEventListener("click", () => {
  const analysis = generateAnalysis();
  aiAnalysisContent.textContent = analysis;
  aiAnalysisResult.hidden = false;
  aiAnalysisResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

copyAnalysisBtn.addEventListener("click", () => {
  const text = aiAnalysisContent.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyAnalysisBtn.textContent = "已复制";
    setTimeout(() => { copyAnalysisBtn.textContent = "复制文本"; }, 2000);
  }).catch(() => {
    // 降级方案
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    copyAnalysisBtn.textContent = "已复制";
    setTimeout(() => { copyAnalysisBtn.textContent = "复制文本"; }, 2000);
  });
});

// 公司对标对比
const compareToggleBtn = document.querySelector("#compare-toggle-btn");
const comparePanel = document.querySelector("#compare-panel");
const compareCompanyA = document.querySelector("#compare-company-a");
const compareCompanyB = document.querySelector("#compare-company-b");
const startCompareBtn = document.querySelector("#start-compare-btn");
const compareResult = document.querySelector("#compare-result");

// 初始化对比下拉框
function initCompareSelects() {
  const options = companies.map((c) => `<option value="${c.id}">${c.shortName}</option>`).join("");
  compareCompanyA.innerHTML = options;
  compareCompanyB.innerHTML = options;
  if (companies.length > 1) {
    compareCompanyA.value = companies[0].id;
    compareCompanyB.value = companies[1].id;
  }
}
initCompareSelects();

compareToggleBtn.addEventListener("click", () => {
  const isHidden = comparePanel.hidden;
  comparePanel.hidden = !isHidden;
  compareToggleBtn.classList.toggle("active", isHidden);
  if (isHidden) {
    comparePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

function getCompanyTags(companyId) {
  const tagCount = {};
  currentFilteredEvents
    .filter((e) => e.companyId === companyId)
    .forEach((e) => {
      e.tags.forEach((tag) => { tagCount[tag] = (tagCount[tag] || 0) + 1; });
    });
  return Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
}

function getCompanyHighImportanceEvents(companyId) {
  return currentFilteredEvents
    .filter((e) => e.companyId === companyId && e.importance === "高")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);
}

startCompareBtn.addEventListener("click", () => {
  const idA = compareCompanyA.value;
  const idB = compareCompanyB.value;
  if (idA === idB) {
    alert("请选择两家不同的公司进行对比。");
    return;
  }

  const companyA = companies.find((c) => c.id === idA);
  const companyB = companies.find((c) => c.id === idB);
  const eventsA = currentFilteredEvents.filter((e) => e.companyId === idA);
  const eventsB = currentFilteredEvents.filter((e) => e.companyId === idB);
  const tagsA = getCompanyTags(idA);
  const tagsB = getCompanyTags(idB);
  const highA = getCompanyHighImportanceEvents(idA);
  const highB = getCompanyHighImportanceEvents(idB);

  const renderTagList = (tags) => tags.length
    ? tags.map(([tag, count]) => `<span class="compare-tag">${escapeHtml(tag)} <em>${count}</em></span>`).join("")
    : '<span class="compare-empty">暂无标签数据</span>';

  const renderHighEvents = (events) => events.length
    ? events.map((e) => `<li><span class="compare-event-date">${formatDate(e.date)}</span>${escapeHtml(e.title)}</li>`).join("")
    : '<li class="compare-empty">暂无高重要性事件</li>';

  compareResult.innerHTML = `
    <div class="compare-grid">
      <div class="compare-column">
        <h3 class="compare-company-name">${escapeHtml(companyA.name)}</h3>
        <div class="compare-stats">
          <div class="compare-stat"><span>新闻数量</span><strong>${eventsA.length}</strong></div>
          <div class="compare-stat"><span>高重要性</span><strong>${highA.length}</strong></div>
          <div class="compare-stat"><span>官网占比</span><strong>${eventsA.length ? Math.round((eventsA.filter(e => e.sourceType === "官网").length / eventsA.length) * 100) : 0}%</strong></div>
        </div>
        <div class="compare-section">
          <h4>热点标签</h4>
          <div class="compare-tags">${renderTagList(tagsA)}</div>
        </div>
        <div class="compare-section">
          <h4>高重要性事件</h4>
          <ul class="compare-events">${renderHighEvents(highA)}</ul>
        </div>
      </div>
      <div class="compare-divider"></div>
      <div class="compare-column">
        <h3 class="compare-company-name">${escapeHtml(companyB.name)}</h3>
        <div class="compare-stats">
          <div class="compare-stat"><span>新闻数量</span><strong>${eventsB.length}</strong></div>
          <div class="compare-stat"><span>高重要性</span><strong>${highB.length}</strong></div>
          <div class="compare-stat"><span>官网占比</span><strong>${eventsB.length ? Math.round((eventsB.filter(e => e.sourceType === "官网").length / eventsB.length) * 100) : 0}%</strong></div>
        </div>
        <div class="compare-section">
          <h4>热点标签</h4>
          <div class="compare-tags">${renderTagList(tagsB)}</div>
        </div>
        <div class="compare-section">
          <h4>高重要性事件</h4>
          <ul class="compare-events">${renderHighEvents(highB)}</ul>
        </div>
      </div>
    </div>
  `;
  compareResult.hidden = false;
});
