// 创新可视化组件：雷达图、折线图、世界地图、桑基图
(function() {
  // 能源主题定义
  const ENERGY_THEMES = [
    { key: "核电", color: "#dc2626", keywords: ["核电", "核电机组", "核电核准", "核电开工", "核电并网", "EPR", "华龙一号", "国和一号", "SMR", "小型模块化反应堆"] },
    { key: "海上风电", color: "#2563eb", keywords: ["海上风电", "海上风电场", "海上风电项目", "海上风电并网", "海上风电开工", " offshore wind", "Nordseecluster", "Dogger Bank", "East Anglia"] },
    { key: "光伏", color: "#eab308", keywords: ["光伏", "太阳能", "光伏发电", "光伏项目", "光伏并网", "solar", "PV", "photovoltaic"] },
    { key: "储能", color: "#16a34a", keywords: ["储能", "电池储能", "储能项目", "储能并网", "BESS", "battery storage", "pumped storage", "抽水蓄能"] },
    { key: "氢能/绿色燃料", color: "#8b5cf6", keywords: ["氢能", "氢", "绿色氢", "绿氢", "氨", "甲醇", "绿色燃料", "低碳燃料", "hydrogen", "ammonia", "methanol"] },
    { key: "电网/输配电", color: "#0891b2", keywords: ["电网", "输电", "配电", "电网投资", "电网建设", "HVDC", "高压直流", "变电站", "智能电网", "grid", "transmission", "distribution"] },
  ];

  // 应用场景定义
  const APP_SCENARIOS = [
    { key: "数据中心/AI", keywords: ["数据中心", "AI", "人工智能", "算力", "大负荷", "data center", "OpenAI", "Microsoft", "Google", "Amazon"] },
    { key: "电动汽车", keywords: ["电动汽车", "电动车", "充电", "充电桩", "EV", "electric vehicle", "charging"] },
    { key: "工业供热", keywords: ["供热", "工业供热", "热电联产", "CHP", "heat", "heating"] },
    { key: "电网调峰", keywords: ["调峰", "灵活性", "容量市场", "辅助服务", "peak shaving", "flexibility"] },
    { key: "绿电交易", keywords: ["绿电", "PPA", "购电协议", "电力交易", "renewable PPA", "power purchase"] },
  ];

  // 地理区域坐标（简化的经纬度，用于地图绘制）
  const REGION_COORDS = {
    "中国": { x: 0.78, y: 0.35 },
    "德国": { x: 0.48, y: 0.30 },
    "法国": { x: 0.45, y: 0.32 },
    "意大利": { x: 0.48, y: 0.36 },
    "西班牙": { x: 0.42, y: 0.36 },
    "美国": { x: 0.20, y: 0.35 },
    "巴西": { x: 0.30, y: 0.65 },
    "日本": { x: 0.82, y: 0.35 },
    "韩国": { x: 0.80, y: 0.34 },
    "印度": { x: 0.70, y: 0.42 },
    "英国": { x: 0.44, y: 0.28 },
    "阿布扎比": { x: 0.58, y: 0.42 },
    "中东": { x: 0.58, y: 0.42 },
    "欧洲": { x: 0.47, y: 0.32 },
    "拉美": { x: 0.30, y: 0.60 },
    "东南亚": { x: 0.75, y: 0.50 },
    "非洲": { x: 0.52, y: 0.55 },
    "澳洲": { x: 0.85, y: 0.65 },
    "北美": { x: 0.20, y: 0.35 },
  };

  // 判断新闻属于哪个主题
  function getEventThemes(event) {
    const text = (event.title + " " + (event.summary || "") + " " + (event.details || "") + " " + event.tags.join(" ")).toLowerCase();
    return ENERGY_THEMES.filter((theme) => {
      return theme.keywords.some((kw) => text.includes(kw.toLowerCase()));
    });
  }

  // 判断新闻涉及的地理区域
  function getEventRegions(event) {
    const text = (event.title + " " + (event.summary || "") + " " + (event.details || "") + " " + event.tags.join(" "));
    const regions = [];
    Object.keys(REGION_COORDS).forEach((region) => {
      if (text.includes(region)) regions.push(region);
    });
    // 从公司国家推断
    const company = window.ENERGY_NEWS_DATA.companies.find((c) => c.id === event.companyId);
    if (company && !regions.includes(company.country)) {
      regions.push(company.country);
    }
    return regions;
  }

  // 判断新闻涉及的应用场景
  function getEventScenarios(event) {
    const text = (event.title + " " + (event.summary || "") + " " + (event.details || "") + " " + event.tags.join(" ")).toLowerCase();
    return APP_SCENARIOS.filter((scenario) => {
      return scenario.keywords.some((kw) => text.includes(kw.toLowerCase()));
    });
  }

  // ========== 1. 能源主题雷达图 ==========
  function renderRadarChart(events) {
    const container = document.querySelector("#radar-chart");
    if (!container) return;

    const size = 280;
    const center = size / 2;
    const radius = size / 2 - 40;
    const levels = 5;

    // 统计各主题新闻数量
    const themeCounts = ENERGY_THEMES.map((theme) => {
      const count = events.filter((e) => getEventThemes(e).some((t) => t.key === theme.key)).length;
      return { ...theme, count };
    });

    const maxCount = Math.max(...themeCounts.map((t) => t.count), 1);
    const angleStep = (Math.PI * 2) / ENERGY_THEMES.length;

    // 生成SVG
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;

    // 绘制网格
    for (let level = 1; level <= levels; level++) {
      const r = (radius * level) / levels;
      const points = ENERGY_THEMES.map((_, i) => {
        const angle = angleStep * i - Math.PI / 2;
        return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
      }).join(" ");
      svg += `<polygon points="${points}" fill="none" stroke="#e2e8f0" stroke-width="1"/>`;
    }

    // 绘制轴线
    ENERGY_THEMES.forEach((_, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`;
    });

    // 绘制数据多边形
    const dataPoints = themeCounts.map((theme, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const r = (radius * theme.count) / maxCount;
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    }).join(" ");
    svg += `<polygon points="${dataPoints}" fill="rgba(15, 118, 110, 0.2)" stroke="#0f766e" stroke-width="2"/>`;

    // 绘制数据点
    themeCounts.forEach((theme, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const r = (radius * theme.count) / maxCount;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      svg += `<circle cx="${x}" cy="${y}" r="4" fill="${theme.color}" stroke="#fff" stroke-width="2"/>`;
    });

    // 绘制标签
    themeCounts.forEach((theme, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const labelR = radius + 20;
      const x = center + labelR * Math.cos(angle);
      const y = center + labelR * Math.sin(angle);
      const anchor = Math.abs(Math.cos(angle)) < 0.3 ? "middle" : (Math.cos(angle) > 0 ? "start" : "end");
      svg += `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" font-size="12" fill="#334155" font-weight="600">${theme.key}(${theme.count})</text>`;
    });

    svg += "</svg>";
    container.innerHTML = svg;
  }

  // ========== 2. 主题趋势折线图 ==========
  function renderTrendLineChart() {
    const container = document.querySelector("#trend-line-chart");
    const legendContainer = document.querySelector("#trend-legend");
    if (!container || !legendContainer) return;

    const allEvents = window.ENERGY_NEWS_DATA.events;
    const width = 420;
    const height = 260;
    const padding = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // 获取所有月份
    const months = [...new Set(allEvents.map((e) => e.date.slice(0, 7)))].sort();
    if (months.length === 0) {
      container.innerHTML = '<p class="viz-empty">暂无数据</p>';
      return;
    }

    // 统计每个月各主题的数量
    const themeMonthly = ENERGY_THEMES.map((theme) => {
      const counts = months.map((month) => {
        return allEvents.filter((e) => e.date.slice(0, 7) === month && getEventThemes(e).some((t) => t.key === theme.key)).length;
      });
      return { ...theme, counts };
    });

    const maxCount = Math.max(...themeMonthly.flatMap((t) => t.counts), 1);
    const xStep = months.length > 1 ? chartW / (months.length - 1) : chartW;

    // 生成SVG
    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

    // 绘制Y轴网格
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH * i) / 4;
      const value = Math.round(maxCount * (1 - i / 4));
      svg += `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="#f1f5f9" stroke-width="1"/>`;
      svg += `<text x="${padding.left - 8}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#94a3b8">${value}</text>`;
    }

    // 绘制X轴标签
    months.forEach((month, i) => {
      const x = padding.left + xStep * i;
      const label = month.slice(2).replace("-", "/");
      svg += `<text x="${x}" y="${height - padding.bottom + 16}" text-anchor="middle" font-size="10" fill="#94a3b8">${label}</text>`;
    });

    // 绘制折线
    themeMonthly.forEach((theme) => {
      const points = theme.counts.map((count, i) => {
        const x = padding.left + xStep * i;
        const y = padding.top + chartH - (chartH * count) / maxCount;
        return `${x},${y}`;
      }).join(" ");
      svg += `<polyline points="${points}" fill="none" stroke="${theme.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
      // 数据点
      theme.counts.forEach((count, i) => {
        const x = padding.left + xStep * i;
        const y = padding.top + chartH - (chartH * count) / maxCount;
        if (count > 0) {
          svg += `<circle cx="${x}" cy="${y}" r="3" fill="${theme.color}"/>`;
        }
      });
    });

    svg += "</svg>";
    container.innerHTML = svg;

    // 图例
    legendContainer.innerHTML = themeMonthly.map((theme) => `
      <span class="trend-legend-item" style="color:${theme.color}">
        <span class="trend-legend-dot" style="background:${theme.color}"></span>${theme.key}
      </span>
    `).join("");
  }

  // ========== 3. 全球项目分布地图（精致版） ==========
  function renderWorldMap(events) {
    const container = document.querySelector("#world-map");
    if (!container) return;

    const width = 440;
    const height = 260;

    // 等矩形投影坐标转换
    function project(lon, lat) {
      return {
        x: ((lon + 180) / 360) * width,
        y: ((90 - lat) / 180) * height
      };
    }

    // 生成经纬网格
    let gridLines = "";
    for (let lon = -150; lon <= 150; lon += 30) {
      const p = project(lon, 0);
      gridLines += `<line x1="${p.x}" y1="0" x2="${p.x}" y2="${height}" stroke="#e2e8f0" stroke-width="0.3" stroke-dasharray="2,2"/>`;
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const p = project(0, lat);
      gridLines += `<line x1="0" y1="${p.y}" x2="${width}" y2="${p.y}" stroke="#e2e8f0" stroke-width="0.3" stroke-dasharray="2,2"/>`;
    }

    // 更精确的大陆轮廓（基于等矩形投影的简化多边形）
    const continents = [
      // 北美洲
      { name: "北美", path: "M55,35 L75,28 L100,30 L120,38 L130,50 L125,65 L115,75 L100,82 L85,80 L70,72 L58,60 L52,48 Z", fill: "#d1d5db" },
      // 格陵兰
      { name: "格陵兰", path: "M130,18 L148,15 L155,25 L150,38 L138,40 L128,32 Z", fill: "#e5e7eb" },
      // 南美洲
      { name: "南美", path: "M115,95 L130,90 L142,98 L148,115 L145,135 L135,155 L122,165 L112,155 L108,135 L110,115 Z", fill: "#d1d5db" },
      // 欧洲
      { name: "欧洲", path: "M200,35 L220,30 L240,35 L248,45 L242,55 L228,60 L212,58 L200,50 Z", fill: "#d1d5db" },
      // 非洲
      { name: "非洲", path: "M205,65 L225,60 L245,68 L252,85 L250,105 L240,125 L225,138 L212,132 L202,115 L198,95 L200,78 Z", fill: "#d1d5db" },
      // 亚洲
      { name: "亚洲", path: "M250,28 L290,22 L330,28 L360,40 L370,55 L365,72 L350,82 L325,85 L300,80 L275,72 L258,60 L250,45 Z", fill: "#d1d5db" },
      // 印度次大陆
      { name: "印度", path: "M310,78 L322,75 L330,85 L325,100 L315,105 L308,95 Z", fill: "#d1d5db" },
      // 东南亚
      { name: "东南亚", path: "M345,88 L360,85 L368,95 L362,108 L350,110 L342,100 Z", fill: "#d1d5db" },
      // 澳大利亚
      { name: "澳洲", path: "M355,130 L380,125 L398,135 L400,150 L388,162 L368,160 L355,150 Z", fill: "#d1d5db" },
      // 日本
      { name: "日本", path: "M378,52 L385,48 L388,58 L382,65 L376,60 Z", fill: "#d1d5db" },
      // 英国
      { name: "英国", path: "M195,38 L202,35 L205,44 L198,48 Z", fill: "#d1d5db" }
    ];

    let continentPaths = continents.map((c) =>
      `<path d="${c.path}" fill="${c.fill}" stroke="#9ca3af" stroke-width="0.5" stroke-linejoin="round"/>`
    ).join("");

    // 统计各区域新闻数量
    const regionCounts = {};
    events.forEach((event) => {
      getEventRegions(event).forEach((region) => {
        if (REGION_COORDS[region]) {
          regionCounts[region] = (regionCounts[region] || 0) + 1;
        }
      });
    });

    const maxRegionCount = Math.max(...Object.values(regionCounts), 1);

    // 生成光晕热力点（径向渐变）
    let heatDefs = "";
    let heatDots = "";
    let heatIndex = 0;
    Object.entries(regionCounts).forEach(([region, count]) => {
      const coord = REGION_COORDS[region];
      if (!coord) return;
      const x = coord.x * width;
      const y = coord.y * height;
      const radius = 8 + (count / maxRegionCount) * 16;
      const gradId = `heatGrad${heatIndex++}`;

      heatDefs += `<radialGradient id="${gradId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#dc2626" stop-opacity="0.8"/>
        <stop offset="40%" stop-color="#f97316" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.1"/>
      </radialGradient>`;

      heatDots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="url(#${gradId})"/>`;
      heatDots += `<circle cx="${x}" cy="${y}" r="3.5" fill="#dc2626" stroke="#fff" stroke-width="1"/>`;
      heatDots += `<text x="${x}" y="${y - radius - 5}" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="700">${region} ${count}</text>`;
    });

    // 企业总部位置（按国家聚合，避免重叠）
    const hqByCountry = {};
    window.ENERGY_NEWS_DATA.companies.forEach((company) => {
      const country = company.country;
      if (!hqByCountry[country]) hqByCountry[country] = [];
      hqByCountry[country].push(company);
    });

    let hqDots = "";
    Object.entries(hqByCountry).forEach(([country, companies]) => {
      const coord = REGION_COORDS[country];
      if (!coord) return;
      const baseX = coord.x * width;
      const baseY = coord.y * height;
      const count = companies.length;

      if (count === 1) {
        hqDots += `<circle cx="${baseX}" cy="${baseY}" r="4" fill="#2563eb" stroke="#fff" stroke-width="1.2"/>`;
      } else {
        // 多个总部时环形排列
        const ringRadius = 6;
        companies.forEach((company, i) => {
          const angle = (i / count) * Math.PI * 2;
          const x = baseX + Math.cos(angle) * ringRadius;
          const y = baseY + Math.sin(angle) * ringRadius;
          hqDots += `<circle cx="${x}" cy="${y}" r="3" fill="#2563eb" stroke="#fff" stroke-width="1"/>`;
        });
        hqDots += `<circle cx="${baseX}" cy="${baseY}" r="2" fill="#1d4ed8"/>`;
      }
      // 国家总部数量标签
      if (count >= 2) {
        hqDots += `<text x="${baseX}" y="${baseY + 14}" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="600">${count}家</text>`;
      }
    });

    // 指北针
    const compass = `
      <g transform="translate(${width - 25}, 20)">
        <circle cx="0" cy="0" r="10" fill="#fff" stroke="#cbd5e1" stroke-width="0.5" opacity="0.9"/>
        <path d="M0,-7 L3,0 L0,7 L-3,0 Z" fill="#dc2626"/>
        <text x="0" y="-11" text-anchor="middle" font-size="7" fill="#64748b" font-weight="700">N</text>
      </g>
    `;

    // 比例尺
    const scaleBar = `
      <g transform="translate(15, ${height - 18})">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#475569" stroke-width="1.5"/>
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#475569" stroke-width="1.5"/>
        <line x1="20" y1="-2" x2="20" y2="2" stroke="#475569" stroke-width="1"/>
        <line x1="40" y1="-3" x2="40" y2="3" stroke="#475569" stroke-width="1.5"/>
        <text x="20" y="10" text-anchor="middle" font-size="7" fill="#64748b">~5000km</text>
      </g>
    `;

    const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background:linear-gradient(180deg,#eff6ff 0%,#dbeafe 100%);border-radius:6px;">
      <defs>${heatDefs}</defs>
      ${gridLines}
      ${continentPaths}
      ${heatDots}
      ${hqDots}
      ${compass}
      ${scaleBar}
    </svg>`;

    container.innerHTML = svg + `
      <div class="map-legend">
        <span><span class="legend-dot" style="background:#dc2626"></span>项目热点（光晕=热度）</span>
        <span><span class="legend-dot" style="background:#2563eb"></span>企业总部（环形=多家）</span>
      </div>
    `;
  }

  // ========== 4. 能源产业链桑基图 ==========
  function renderSankeyDiagram(events) {
    const container = document.querySelector("#sankey-diagram");
    if (!container) return;

    const width = 420;
    const height = 280;
    const nodeWidth = 16;
    const nodePadding = 12;

    // 统计能源类型→应用场景→企业的关联
    const themeScenarioLinks = {};
    const scenarioCompanyLinks = {};

    events.forEach((event) => {
      const themes = getEventThemes(event);
      const scenarios = getEventScenarios(event);
      const companyId = event.companyId;
      const company = window.ENERGY_NEWS_DATA.companies.find((c) => c.id === companyId);
      if (!company) return;

      themes.forEach((theme) => {
        scenarios.forEach((scenario) => {
          // 能源类型→应用场景
          const key = `${theme.key}|${scenario.key}`;
          themeScenarioLinks[key] = (themeScenarioLinks[key] || 0) + 1;
          // 应用场景→企业
          const sKey = `${scenario.key}|${company.shortName}`;
          scenarioCompanyLinks[sKey] = (scenarioCompanyLinks[sKey] || 0) + 1;
        });
      });
    });

    // 左侧节点：能源类型
    const leftNodes = ENERGY_THEMES.filter((theme) => {
      return Object.keys(themeScenarioLinks).some((key) => key.startsWith(theme.key + "|"));
    }).slice(0, 5);

    // 中间节点：应用场景
    const middleNodes = APP_SCENARIOS.filter((scenario) => {
      return Object.keys(themeScenarioLinks).some((key) => key.endsWith("|" + scenario.key));
    }).slice(0, 5);

    // 右侧节点：企业（取关联最多的5家）
    const companyCounts = {};
    Object.entries(scenarioCompanyLinks).forEach(([key, count]) => {
      const [, company] = key.split("|");
      companyCounts[company] = (companyCounts[company] || 0) + count;
    });
    const rightNodes = Object.entries(companyCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name]) => ({ key: name, color: "#64748b" }));

    if (leftNodes.length === 0 || middleNodes.length === 0 || rightNodes.length === 0) {
      container.innerHTML = '<p class="viz-empty">当前筛选条件下产业链关联数据不足</p>';
      return;
    }

    // 计算节点位置
    const leftTotal = leftNodes.reduce((sum, n) => sum + (Object.entries(themeScenarioLinks).filter(([k]) => k.startsWith(n.key + "|")).reduce((s, [, v]) => s + v, 0)), 0);
    const middleTotal = middleNodes.reduce((sum, n) => sum + (Object.entries(themeScenarioLinks).filter(([k]) => k.endsWith("|" + n.key)).reduce((s, [, v]) => s + v, 0)), 0);
    const rightTotal = rightNodes.reduce((sum, n) => sum + (companyCounts[n.key] || 0), 0);
    const maxTotal = Math.max(leftTotal, middleTotal, rightTotal, 1);

    const availableHeight = height - 40;
    const leftScale = (availableHeight - (leftNodes.length - 1) * nodePadding) / maxTotal;
    const middleScale = (availableHeight - (middleNodes.length - 1) * nodePadding) / maxTotal;
    const rightScale = (availableHeight - (rightNodes.length - 1) * nodePadding) / maxTotal;

    let leftY = 20;
    const leftPositions = leftNodes.map((node) => {
      const value = Object.entries(themeScenarioLinks).filter(([k]) => k.startsWith(node.key + "|")).reduce((s, [, v]) => s + v, 0);
      const h = Math.max(value * leftScale, 8);
      const pos = { x: 0, y: leftY, height: h, node };
      leftY += h + nodePadding;
      return pos;
    });

    let middleY = 20;
    const middlePositions = middleNodes.map((node) => {
      const value = Object.entries(themeScenarioLinks).filter(([k]) => k.endsWith("|" + node.key)).reduce((s, [, v]) => s + v, 0);
      const h = Math.max(value * middleScale, 8);
      const pos = { x: width / 2 - nodeWidth / 2, y: middleY, height: h, node };
      middleY += h + nodePadding;
      return pos;
    });

    let rightY = 20;
    const rightPositions = rightNodes.map((node) => {
      const value = companyCounts[node.key] || 0;
      const h = Math.max(value * rightScale, 8);
      const pos = { x: width - nodeWidth, y: rightY, height: h, node };
      rightY += h + nodePadding;
      return pos;
    });

    // 生成SVG
    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

    // 绘制左侧→中间的连线
    let leftOffsets = {};
    let middleOffsets = {};
    Object.entries(themeScenarioLinks).forEach(([key, value]) => {
      const [themeKey, scenarioKey] = key.split("|");
      const leftPos = leftPositions.find((p) => p.node.key === themeKey);
      const middlePos = middlePositions.find((p) => p.node.key === scenarioKey);
      if (!leftPos || !middlePos) return;

      const leftOffset = leftOffsets[themeKey] || 0;
      const middleOffset = middleOffsets[scenarioKey] || 0;
      const linkHeight = value * leftScale;

      const x0 = leftPos.x + nodeWidth;
      const y0 = leftPos.y + leftOffset + linkHeight / 2;
      const x1 = middlePos.x;
      const y1 = middlePos.y + middleOffset + linkHeight / 2;

      const color = leftPos.node.color;
      svg += `<path d="M${x0},${y0} C${(x0 + x1) / 2},${y0} ${(x0 + x1) / 2},${y1} ${x1},${y1}" stroke="${color}" stroke-width="${Math.max(linkHeight, 2)}" fill="none" opacity="0.4"/>`;

      leftOffsets[themeKey] = leftOffset + linkHeight;
      middleOffsets[scenarioKey] = middleOffset + linkHeight;
    });

    // 绘制中间→右侧的连线（简化，用中间节点总量分配）
    middlePositions.forEach((midPos) => {
      const midValue = midPos.height;
      rightPositions.forEach((rightPos) => {
        const rightValue = rightPos.height;
        const linkValue = Math.min(midValue, rightValue) * 0.3;
        if (linkValue < 1) return;

        const x0 = midPos.x + nodeWidth;
        const y0 = midPos.y + midPos.height / 2;
        const x1 = rightPos.x;
        const y1 = rightPos.y + rightPos.height / 2;

        svg += `<path d="M${x0},${y0} C${(x0 + x1) / 2},${y0} ${(x0 + x1) / 2},${y1} ${x1},${y1}" stroke="#94a3b8" stroke-width="${Math.max(linkValue, 1)}" fill="none" opacity="0.3"/>`;
      });
    });

    // 绘制节点
    leftPositions.forEach((pos) => {
      svg += `<rect x="${pos.x}" y="${pos.y}" width="${nodeWidth}" height="${pos.height}" fill="${pos.node.color}" rx="2"/>`;
      svg += `<text x="${pos.x + nodeWidth + 6}" y="${pos.y + pos.height / 2}" dominant-baseline="middle" font-size="10" fill="#334155" font-weight="600">${pos.node.key}</text>`;
    });

    middlePositions.forEach((pos) => {
      svg += `<rect x="${pos.x}" y="${pos.y}" width="${nodeWidth}" height="${pos.height}" fill="#0f766e" rx="2"/>`;
      svg += `<text x="${pos.x + nodeWidth + 6}" y="${pos.y + pos.height / 2}" dominant-baseline="middle" font-size="10" fill="#334155" font-weight="600">${pos.node.key}</text>`;
    });

    rightPositions.forEach((pos) => {
      svg += `<rect x="${pos.x}" y="${pos.y}" width="${nodeWidth}" height="${pos.height}" fill="#64748b" rx="2"/>`;
      svg += `<text x="${pos.x - 6}" y="${pos.y + pos.height / 2}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#334155" font-weight="600">${pos.node.key}</text>`;
    });

    svg += "</svg>";
    container.innerHTML = svg;
  }

  // 统一渲染入口
  window.renderInnovativeViz = function(events) {
    renderRadarChart(events);
    renderWorldMap(events);
    renderSankeyDiagram(events);
  };

  // 趋势图用全量数据，不随筛选变化
  window.renderTrendLineChart = renderTrendLineChart;

  // 页面加载后渲染趋势图
  document.addEventListener("DOMContentLoaded", () => {
    renderTrendLineChart();
  });
})();
