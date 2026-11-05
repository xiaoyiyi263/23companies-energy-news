# 世界同类能源企业动态跟踪（2026）

给中国华能集团能源研究院做同业对标用的静态跟踪站：按公司归档 2026 年世界同类能源企业的重大新闻，按季度/来源/重要性整理，支持筛选、可视化、公司对比与 CSV 导出。

- 线上地址：https://xiaoyiyi263.github.io/23companies-energy-news/
- 技术形态：纯静态（HTML/CSS/原生 JS），无构建、无后端、无数据库；数据维护在 JS 数据文件里。

## 当前状态（2026-11-05）

- **24 家公司**：13 家海外（RWE、Enel、Iberdrola、EDF、ENGIE、Duke、Southern、Constellation、AXIA、JERA、KEPCO、NTPC、SEC）+ 11 家中国（大唐、华电、国家电投、国家能源集团、三峡、中广核、华润电力、广东能源、浙能、京能、国投电力）。
- **465 条事件**：Q1 124 / Q2 125 / Q3 142 / Q4 74；数据覆盖 2026-01-06 至 2026-11-05。
- 口径：每家公司每季度目标不少于 5 条；来源优先官网，不足时用权威媒体/政府/交易所公告；Q3/Q4 摘要 300–450 字，来源必须是具体文章页。
- 页面默认展示"数据最后更新日期所在季度"（当前为 Q4）。

## 目录结构

| 路径 | 作用 |
|---|---|
| `index.html` | 单页骨架（筛选、指标、趋势、概览、标签云、可视化、公司列表、对比）。 |
| `app.js` | 交互逻辑：筛选、渲染、CSV 导出、公司对比、深色模式、规则版"智能分析"。 |
| `viz.js` | 可视化：主题雷达图、月度折线图、Leaflet 地图、产业链桑基图。 |
| `styles.css` | 样式：响应式、深色模式、地图/图表/对比工具。 |
| `data/news-data.js` | **原始数据层**（`window.ENERGY_NEWS_SOURCE`）：meta、24 家公司画像、5 组事件数组、Q1 摘要改写、季度趋势、公司季度小结。只放事实数据。 |
| `data/news-derived.js` | **派生层**（`window.ENERGY_NEWS_DATA`）：话题过滤、重要性分级、正文拼装、海外表述统一、来源链接分级。 |
| `tools/validate.mjs` | 质量门：数据完整性、统计口径、来源链接质量、版本号一致性检查。 |
| `assets/energy-grid.svg` | 页头背景图。 |
| `.nojekyll` | 关闭 GitHub Pages 的 Jekyll 处理。 |
| `_qc/` | **历史施工目录**（Q3/Q4 数据核验、补链、trim 的一次性脚本与产物），已在 `.gitignore` 中忽略，不要用于生产。 |

## 本地查看

直接双击 `index.html` 即可（地图需要联网加载 Leaflet CDN 与 OpenStreetMap 瓦片）。也可以起一个本地静态服务：

```bash
python -m http.server 8000
# 然后打开 http://localhost:8000/
```

## 数据架构：原始数据 vs 派生逻辑

页面只消费 `window.ENERGY_NEWS_DATA`，它由两层组成：

1. **原始数据层** `data/news-data.js`：只存放采集到的事实。
   - `meta`：`startDate` / `lastUpdated` / `quarterlyTarget`。
   - `companies`：公司元组与画像（总部、业务、装机、营收、官网）。
   - `rows`（Q1 基础集，含 4 条 SEC 后季补录）、`q2Rows`、`q3Rows`、`q4Rows`、`coreSupplementRows`（Q1 补录）。
   - `q1SummaryRewrites`：海外/早期摘要改写映射；`quarterTrends`：季度趋势综述；`companyQuarterSummaries`：公司季度小结。
2. **派生层** `data/news-derived.js`：集中所有"计算型"规则。
   - `excludedTopicPattern`：运行时过滤财报/治理/公告类话题（当前 22 条被过滤，页面显示 429 条 = 原始 451 − 22）。
   - `q1SummaryRewrites` 命中替换、海外文本术语统一（`polishOverseasText`）。
   - `getImportance()`：按关键词给事件打高/中/低（规则产物，不是人工标注）。
   - `makeDetails()`：拼装页面"新闻内容"（日期导语 + 公司 + 标题 + 摘要 [+ 国内短文本的场景补充句]）。
   - `getLinkType()`：来源链接分级为 `article`（具体文章页）/`list`（新闻栏目页）/`homepage`（公司首页）；非文章页在页面上会标注"（官网首页）/（栏目页）"。

> 重要口径：页面上的"新闻内容"不是网站原文转载，而是"日期 + 公司 + 标题 + 人工摘要"的拼装结果；"重要性"是关键词规则产物。引用/分析时请注意这两点。

## 更新流程

1. **采编**：每季度检查 24 家公司官网新闻、公告、投资者关系页面；海外公司改写为中文，保留日期、事项、影响和来源链接；来源优先官网，官网不足时用新华社、国务院国资委、交易所公告、主流财经媒体等权威来源。**新数据（Q3/Q4 口径）必须给具体文章页 URL，不要填首页/列表页。**
2. **写数据**：在 `data/news-data.js` 对应季度数组追加一行：
   ```js
   ["companyId","2026-10-23","标题","300–450 字摘要","意义","官网","来源名称","https://具体文章页","[标签1,标签2]"]
   ```
   Q1 历史批次在 `rows` / `coreSupplementRows`；新季度请用对应季度数组。
3. **派生自动生效**：不需要改页面结构；规则变更只改 `data/news-derived.js`。
4. **过质量门**：
   ```bash
   node tools/validate.mjs          # 通过退出码 0；失败退出码 1
   node tools/validate.mjs --links  # 额外打印"非文章页来源"完整清单
   ```
   质量门会校验：公司/事件数量与季度分布、必填字段、摘要长度（Q3/Q4 300–450 字）、Q3/Q4 来源链接、重复 URL、季度综述与公司小结覆盖、版本号一致性等。
   **有意的数据变更后，请同步修改脚本顶部的 `BASELINE`**（数量与分布是锁定的，防止悄悄变多/变少）。
   > 质量门需要 Node 18+；网站本身不需要 Node。本机没有安装 Node 时，可下载官方 Windows 便携版（node-v22.x-win-x64.zip）解压后运行 `node tools/validate.mjs`。
5. **改版本号**：把 `index.html` 里所有 `?v=` 改成新日期序号（例如 `v=202611051`），并保证与 `meta.lastUpdated` 同一天——质量门会校验两者一致，用于强制浏览器刷新缓存。
6. **提交发布**：
   ```bash
   git add index.html app.js viz.js styles.css data/ tools/ README.md
   git commit -m "更新 Q4 数据到 xx/xx"
   git push origin main
   ```
   GitHub Pages 会自动发布（`main` 分支根目录 + `.nojekyll`）。

## 质量门检查项

`tools/validate.mjs` 覆盖：

- 公司数量/ID 唯一性/必填字段/地区取值/官网入口；
- 事件总数、季度分布、日期格式与范围、companyId 归属、sourceType 词表、importance 取值、标签非空；
- Q3/Q4 摘要 300–450 字；`details` 非空且包含摘要；
- 来源链接类型：Q3/Q4 必须全部为具体文章页；Q1/Q2 与基线比较（高于基线即失败，提示补链）；
- URL http(s) 合法性、重复引用 URL 组数；
- 运行时话题过滤条数与基线一致（防止"新增数据被静默隐藏"）；
- 季度趋势综述（每年份/总览/分点数）与公司季度小结（每季覆盖 24 家）；
- `meta.lastUpdated` 格式、`index.html` 缓存版本与日期一致、脚本加载顺序（数据层 → 派生层 → 应用层）。

## 已知限制与待办

- **Q1/Q2 历史来源**：截至 2026-11-05，Q1 仍有 38 条、Q2 仍有 29 条事件来源只到官网首页/栏目页（页面上有"（官网首页）/（栏目页）"标注）。已对可核实到具体文章的条目完成替换（Q1/Q2 共 22 条），剩余的多为按季度汇总的"推进类"叙述，没有单篇原文；后续可继续用 `node tools/validate.mjs --links` 打印清单并逐条替换。
- **Q1/Q2 早期条目**：部分是按季度汇总的"推进类"叙述，不存在单篇原文；补链时优先替换为可核实的文章，找不到就保留标注，不要硬凑链接。
- **"智能分析"**：按钮生成的是按统计规则拼接的文本（标签频次 + 企业排名 + 固定话术），不是大模型。
- **地图**：依赖 Leaflet CDN 与 OSM 瓦片，内网/断网环境下地图不可用；其余功能可离线使用。
- **历史脚本**：`_qc/` 下的 130+ 个脚本是一次性施工工具（按标题锚点改数据、无幂等键），不要在已有数据上重跑；依赖 Node 且当时环境已变化，仅作留档。

## 发布方式（GitHub Pages）

已配置：仓库 `xiaoyiyi263/23companies-energy-news`，`main` 分支根目录发布，`.nojekyll` 关闭 Jekyll。新建仓库时的通用步骤：

1. 在 GitHub 新建公开仓库；
2. 推送本目录到 `main` 分支；
3. `Settings -> Pages` 选择 `Deploy from a branch`，Branch 选 `main`、Folder 选 `/root`；
4. 公开网址通常是 `https://你的用户名.github.io/仓库名/`。
