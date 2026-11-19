#!/usr/bin/env node
// 项目质量门：node tools/validate.mjs
//
// 加载 data/news-data.js（原始数据层）与 data/news-derived.js（派生层），
// 检查数据完整性、统计口径、文案长度、来源链接质量与版本号一致性。
//
// 退出码：0 = 通过（允许有警告）；1 = 存在失败项。
// 更新数据或规则后，请同步修改下方 BASELINE 中的基线数字（数量与分布是有意锁定的）。

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// ---- 基线：每次有意的数据更新后手动同步，防止"悄悄变多/变少" ----
const BASELINE = {
  companies: 24,
  events: 507,
  quarters: { Q1: 124, Q2: 125, Q3: 142, Q4: 116 },
  filteredOutByTopicPattern: 22, // 被 excludedTopicPattern 在运行时过滤的原始行数
  nonArticleLinks: { Q1: 38, Q2: 29, Q3: 0, Q4: 0 }, // 来源链接只到首页/栏目页的事件数
  duplicateUrlGroups: 34, // 被 2 条以上事件共用的 URL 组数
};

const ALLOWED_SOURCE_TYPES = new Set(["官网", "权威媒体", "媒体", "政府", "交易所披露", "行业媒体", "公告"]);
const ALLOWED_IMPORTANCE = new Set(["高", "中", "低"]);
const ALLOWED_LINK_TYPES = new Set(["article", "list", "homepage", "unknown"]);
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

const failures = [];
const warnings = [];
const passes = [];

function fail(message) {
  failures.push(message);
}
function warn(message) {
  warnings.push(message);
}
function pass(message) {
  passes.push(message);
}

function quarterOf(date) {
  return `Q${Math.ceil(Number(date.slice(5, 7)) / 3)}`;
}
function median(numbers) {
  if (!numbers.length) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
function countBy(items, keyFn) {
  const map = {};
  for (const item of items) {
    const key = keyFn(item);
    map[key] = (map[key] || 0) + 1;
  }
  return map;
}
function formatMap(map) {
  return Object.entries(map)
    .map(([key, value]) => `${key} ${value}`)
    .join("，");
}

// ---------- 加载数据 ----------
const win = {};
function loadScript(relativePath) {
  const source = readFileSync(join(ROOT, relativePath), "utf8");
  new Function("window", source)(win);
}

try {
  loadScript("data/news-data.js");
  if (!win.ENERGY_NEWS_SOURCE) {
    fail("data/news-data.js 没有导出 window.ENERGY_NEWS_SOURCE");
  }
  loadScript("data/news-derived.js");
  if (!win.ENERGY_NEWS_DATA) {
    fail("data/news-derived.js 没有导出 window.ENERGY_NEWS_DATA");
  }
} catch (error) {
  fail(`数据层加载失败：${error.message}`);
}

const data = win.ENERGY_NEWS_DATA;
const source = win.ENERGY_NEWS_SOURCE;

if (data && source) {
  const { meta, companies, quarterTrends, companyQuarterSummaries, events } = data;
  const rawRows = [
    ...source.rows,
    ...source.q2Rows,
    ...source.q3Rows,
    ...source.q4Rows,
    ...source.coreSupplementRows,
  ];

  // ---------- 1. 公司 ----------
  if (companies.length === BASELINE.companies) {
    pass(`公司数量 = ${companies.length}`);
  } else {
    fail(`公司数量 = ${companies.length}，基线为 ${BASELINE.companies}`);
  }
  const companyIds = new Set(companies.map((company) => company.id));
  if (companyIds.size === companies.length) {
    pass("公司 id 无重复");
  } else {
    fail("公司 id 存在重复");
  }
  for (const company of companies) {
    for (const field of ["id", "name", "shortName", "country", "region"]) {
      if (!company[field]) fail(`公司 ${company.id || "(空)"} 缺少字段 ${field}`);
    }
    if (!["中国", "海外"].includes(company.region)) {
      fail(`公司 ${company.id} 的 region 异常：${company.region}`);
    }
    if (!company.sources || !company.sources.length || !company.sources[0].url) {
      fail(`公司 ${company.id} 缺少官网来源`);
    }
  }

  // ---------- 2. 事件基础字段 ----------
  if (events.length === BASELINE.events) {
    pass(`事件总数 = ${events.length}`);
  } else {
    fail(`事件总数 = ${events.length}，基线为 ${BASELINE.events}`);
  }

  const quarterCounts = countBy(events, (event) => quarterOf(event.date));
  for (const quarter of QUARTERS) {
    if (quarterCounts[quarter] === BASELINE.quarters[quarter]) {
      pass(`${quarter} 事件数 = ${quarterCounts[quarter]}`);
    } else {
      fail(`${quarter} 事件数 = ${quarterCounts[quarter] || 0}，基线为 ${BASELINE.quarters[quarter]}`);
    }
  }

  const badFields = [];
  const badDates = [];
  const badCompanyIds = [];
  const badSourceTypes = [];
  const badImportance = [];
  const emptyTags = [];
  for (const event of events) {
    if (!event.companyId || !event.date || !event.title || !event.summary || !event.url || !event.sourceType || !event.sourceName) {
      badFields.push(`${event.companyId || "?"} ${event.date || "?"}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(event.date || "")) badDates.push(`${event.companyId} ${event.date}`);
    if (!companyIds.has(event.companyId)) badCompanyIds.push(`${event.companyId} ${event.date}`);
    if (!ALLOWED_SOURCE_TYPES.has(event.sourceType)) badSourceTypes.push(`${event.companyId} ${event.date} ${event.sourceType}`);
    if (!ALLOWED_IMPORTANCE.has(event.importance)) badImportance.push(`${event.companyId} ${event.date} ${event.importance}`);
    if (!Array.isArray(event.tags) || event.tags.length === 0) emptyTags.push(`${event.companyId} ${event.date}`);
  }
  if (!badFields.length) pass("事件必填字段完整");
  else fail(`事件缺字段 ${badFields.length} 条：${badFields.slice(0, 5).join("；")}`);
  if (!badDates.length) pass("事件日期格式合法");
  else fail(`事件日期格式异常 ${badDates.length} 条：${badDates.slice(0, 5).join("；")}`);
  if (!badCompanyIds.length) pass("事件 companyId 均在公司列表中");
  else fail(`未知 companyId ${badCompanyIds.length} 条：${badCompanyIds.slice(0, 5).join("；")}`);
  if (!badSourceTypes.length) pass("sourceType 均在约定词表内");
  else warn(`sourceType 不在约定词表 ${badSourceTypes.length} 条：${badSourceTypes.slice(0, 5).join("；")}`);
  if (!badImportance.length) pass("importance 取值合法");
  else fail(`importance 取值异常 ${badImportance.length} 条`);
  if (!emptyTags.length) pass("事件标签均非空");
  else fail(`事件缺标签 ${emptyTags.length} 条`);

  const earliest = events.reduce((min, event) => (event.date < min ? event.date : min), "9999-99-99");
  const latest = events.reduce((max, event) => (event.date > max ? event.date : max), "0000-00-00");
  pass(`事件日期范围 ${earliest} → ${latest}`);

  // ---------- 3. 摘要 / 正文长度口径 ----------
  const summaryByQuarter = {};
  for (const quarter of QUARTERS) {
    const quarterEvents = events.filter((event) => quarterOf(event.date) === quarter);
    summaryByQuarter[quarter] = {
      count: quarterEvents.length,
      median: median(quarterEvents.map((event) => event.summary.length)),
      detailsMedian: median(quarterEvents.map((event) => event.details.length)),
    };
  }
  const badSummaryLength = events.filter(
    (event) =>
      ["Q3", "Q4"].includes(quarterOf(event.date)) &&
      (event.summary.length < 300 || event.summary.length > 450)
  );
  if (!badSummaryLength.length) {
    pass("Q3/Q4 摘要均在 300–450 字区间");
  } else {
    fail(
      `Q3/Q4 摘要长度不合规 ${badSummaryLength.length} 条：` +
        badSummaryLength.slice(0, 5).map((event) => `${event.companyId} ${event.date} ${event.summary.length}字`).join("；")
    );
  }
  const emptyDetails = events.filter((event) => !event.details || event.details.length <= event.summary.length);
  if (!emptyDetails.length) pass("details 均非空且包含摘要内容");
  else fail(`details 异常 ${emptyDetails.length} 条`);
  pass(
    `摘要中位数字数：${QUARTERS.map((quarter) => `${quarter} ${summaryByQuarter[quarter].median}`).join(" / ")}` +
      `；正文中位数：${QUARTERS.map((quarter) => `${quarter} ${summaryByQuarter[quarter].detailsMedian}`).join(" / ")}`
  );

  // ---------- 4. 重要性分布 ----------
  const importanceCounts = countBy(events, (event) => event.importance);
  const highRatio = (importanceCounts["高"] || 0) / events.length;
  pass(`重要性分布：${formatMap(importanceCounts)}（高占比 ${(highRatio * 100).toFixed(1)}%）`);
  if (highRatio > 0.55) {
    warn(`"高"重要性占比 ${(highRatio * 100).toFixed(1)}%，高于 55% 建议复核判定关键词`);
  }

  // ---------- 5. 来源链接质量 ----------
  const linkTypeCounts = countBy(events, (event) => event.linkType);
  for (const event of events) {
    if (!ALLOWED_LINK_TYPES.has(event.linkType)) fail(`linkType 取值异常：${event.companyId} ${event.date} ${event.linkType}`);
  }
  const nonArticleByQuarter = {};
  for (const quarter of QUARTERS) {
    nonArticleByQuarter[quarter] = events.filter(
      (event) => quarterOf(event.date) === quarter && event.linkType !== "article"
    ).length;
  }
  for (const quarter of ["Q3", "Q4"]) {
    if (nonArticleByQuarter[quarter] > 0) {
      const sample = events
        .filter((event) => quarterOf(event.date) === quarter && event.linkType !== "article")
        .slice(0, 5)
        .map((event) => `${event.companyId} ${event.date} ${event.url}`)
        .join("；");
      fail(`${quarter} 存在 ${nonArticleByQuarter[quarter]} 条非文章页来源（Q3/Q4 要求全部为具体文章页）：${sample}`);
    } else {
      pass(`${quarter} 来源链接全部为具体文章页`);
    }
  }
  for (const quarter of ["Q1", "Q2"]) {
    const baseline = BASELINE.nonArticleLinks[quarter];
    const actual = nonArticleByQuarter[quarter];
    if (actual > baseline) {
      fail(`${quarter} 非文章页来源 ${actual} 条，超过基线 ${baseline}（新增数据请填具体文章页）`);
    } else if (actual < baseline) {
      pass(`${quarter} 非文章页来源 ${actual} 条，优于基线 ${baseline}（可下调 BASELINE.nonArticleLinks）`);
    } else {
      pass(`${quarter} 非文章页来源 ${actual} 条，与基线一致`);
    }
  }
  const linkAudit = events.filter((event) => event.linkType !== "article");
  if (linkAudit.length) {
    pass(
      `非文章页来源清单（${linkAudit.length} 条，可继续补链）：` +
        linkAudit
          .slice(0, 30)
          .map((event) => `${quarterOf(event.date)} ${event.companyId} ${event.url}`)
          .join("；") +
        (linkAudit.length > 30 ? "；…（完整清单可用 --links 参数查看）" : "")
    );
  }
  if (process.argv.includes("--links")) {
    console.log("\n---- 非文章页来源完整清单 ----");
    for (const event of linkAudit) {
      console.log(`${quarterOf(event.date)}\t${event.companyId}\t${event.date}\t${event.linkType}\t${event.title}\t${event.url}`);
    }
    console.log("---- 清单结束 ----\n");
  }

  // URL 与重复引用
  const badUrl = events.filter((event) => !/^https?:\/\//.test(event.url || ""));
  if (!badUrl.length) pass("事件 URL 均为 http(s) 地址");
  else fail(`事件 URL 格式异常 ${badUrl.length} 条`);

  const urlGroups = countBy(events, (event) => event.url);
  const duplicateGroups = Object.entries(urlGroups).filter(([, count]) => count > 1);
  if (duplicateGroups.length > BASELINE.duplicateUrlGroups) {
    warn(`重复引用 URL 组数 ${duplicateGroups.length}，超过基线 ${BASELINE.duplicateUrlGroups}`);
  } else {
    pass(`重复引用 URL 组数 ${duplicateGroups.length}（基线 ${BASELINE.duplicateUrlGroups}）`);
  }

  // ---------- 6. 运行时过滤核对 ----------
  const filteredOut = rawRows.length - events.length;
  if (filteredOut === BASELINE.filteredOutByTopicPattern) {
    pass(`被 excludedTopicPattern 过滤 ${filteredOut} 条（原始 ${rawRows.length} → 展示 ${events.length}）`);
  } else {
    fail(
      `被过滤行数 = ${filteredOut}，基线为 ${BASELINE.filteredOutByTopicPattern}。` +
        "新增事件若标题/标签命中过滤词会被静默隐藏，请检查或调整过滤规则"
    );
  }

  // ---------- 7. 季度综述 / 公司小结 ----------
  for (const quarter of QUARTERS) {
    const trend = quarterTrends[quarter];
    if (!trend) {
      fail(`quarterTrends 缺少 ${quarter}`);
      continue;
    }
    if (!trend.title || !trend.title.includes("2026年")) fail(`${quarter} 趋势标题缺失或年份异常：${trend.title}`);
    if (!trend.overview || trend.overview.length < 100) fail(`${quarter} 趋势总览过短`);
    if (!Array.isArray(trend.points) || trend.points.length < 5) {
      fail(`${quarter} 趋势分点数量 = ${(trend.points || []).length}，应不少于 5`);
    } else {
      const badPoint = trend.points.filter((point) => !point.title || !point.text);
      if (badPoint.length) fail(`${quarter} 趋势分点存在空字段`);
      else pass(`${quarter} 趋势综述完整（${trend.points.length} 个分点）`);
    }
    const summaries = companyQuarterSummaries[quarter] || {};
    const missing = [...companyIds].filter((id) => !summaries[id]);
    if (missing.length) fail(`${quarter} 公司小结缺 ${missing.length} 家：${missing.slice(0, 5).join("、")}`);
    else pass(`${quarter} 公司小结覆盖全部 ${companies.length} 家公司`);
    const short = [...companyIds].filter((id) => summaries[id] && summaries[id].length < 40);
    if (short.length) warn(`${quarter} 有 ${short.length} 家公司小结短于 40 字：${short.slice(0, 5).join("、")}`);
  }

  // ---------- 8. meta 与版本号 ----------
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.lastUpdated || "")) fail(`meta.lastUpdated 格式异常：${meta.lastUpdated}`);
  if (meta.quarterlyTarget !== 5) warn(`meta.quarterlyTarget = ${meta.quarterlyTarget}（预期 5）`);

  const indexHtml = readFileSync(join(ROOT, "index.html"), "utf8");
  const versions = [...new Set([...indexHtml.matchAll(/\?v=(\d+)/g)].map((match) => match[1]))];
  if (versions.length === 1) {
    const version = versions[0];
    const compactDate = (meta.lastUpdated || "").replaceAll("-", "");
    if (!version.startsWith(compactDate)) {
      fail(`index.html 缓存版本 v=${version} 与 meta.lastUpdated=${meta.lastUpdated} 不一致`);
    } else {
      pass(`index.html 缓存版本 = v=${version}`);
    }
  } else {
    fail(`index.html 中缓存版本不统一：${versions.join(" / ")}`);
  }
  const orderedScripts = ["data/news-data.js", "data/news-derived.js", "app.js"].map((file) =>
    indexHtml.indexOf(file)
  );
  if (orderedScripts.every((index) => index >= 0) && orderedScripts[0] < orderedScripts[1] && orderedScripts[1] < orderedScripts[2]) {
    pass("index.html 脚本加载顺序正确（数据层 → 派生层 → 应用层）");
  } else {
    fail("index.html 脚本加载顺序错误：应为 data/news-data.js → data/news-derived.js → app.js");
  }
  if (indexHtml.includes('id="tag-cloud"') && indexHtml.match(/<\/section>\s*\n\s*<section id="innovative-viz"/)) {
    pass("index.html 主要 section 结构闭合正确");
  } else {
    warn("index.html 未检测到预期的 section 结构，请人工确认标签云与创新可视化分区");
  }
}

// ---------- 输出 ----------
const LINE = "=".repeat(60);
console.log(LINE);
console.log("质量门 tools/validate.mjs");
console.log(LINE);
for (const message of passes) console.log(`PASS  ${message}`);
for (const message of warnings) console.log(`WARN  ${message}`);
for (const message of failures) console.log(`FAIL  ${message}`);
console.log(LINE);
console.log(`结果：PASS ${passes.length} 项，WARN ${warnings.length} 项，FAIL ${failures.length} 项`);
if (failures.length) {
  console.log("质量门未通过。");
  process.exit(1);
}
console.log("质量门通过。");
