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

  // 地理区域坐标（真实经纬度 [lon, lat]，用于Leaflet地图）
  const REGION_COORDS = {
    "中国": [116.4, 39.9],
    "德国": [13.4, 52.5],
    "法国": [2.35, 48.86],
    "意大利": [12.5, 41.9],
    "西班牙": [-3.7, 40.4],
    "美国": [-77.0, 38.9],
    "巴西": [-47.9, -15.8],
    "日本": [139.7, 35.7],
    "韩国": [126.9, 37.6],
    "印度": [77.2, 28.6],
    "英国": [-0.13, 51.5],
    "阿布扎比": [54.4, 24.5],
    "中东": [54.4, 24.5],
    "欧洲": [10.0, 50.0],
    "拉美": [-60.0, -15.0],
    "东南亚": [105.0, 15.0],
    "非洲": [20.0, 0.0],
    "澳洲": [151.2, -33.9],
    "北美": [-100.0, 40.0],
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

  // ========== 3. 全球项目分布地图（Leaflet真实交互式地图） ==========
  let worldMapInstance = null;
  let worldMapHeatLayer = null;
  let worldMapInitialized = false;

  // 企业颜色生成（按索引分配不同色相）
  function getCompanyColor(index) {
    const hue = (index * 360 / 25 + 15) % 360;
    return `hsl(${hue}, 68%, 48%)`;
  }

  function renderWorldMap(events) {
    const container = document.querySelector("#world-map");
    if (!container) return;

    // 检查Leaflet是否加载
    if (typeof L === "undefined") {
      container.innerHTML = '<p class="viz-empty">地图库加载中，请刷新页面重试</p>';
      return;
    }

    // 初始化地图容器
    if (!worldMapInitialized) {
      container.innerHTML = '<div id="leaflet-map-container" style="width:100%;height:500px;border-radius:10px;"></div>';
      worldMapInitialized = true;
    }

    const mapContainer = document.querySelector("#leaflet-map-container");
    if (!mapContainer) return;

    // 第一次调用时初始化地图
    if (!worldMapInstance) {
      worldMapInstance = L.map("leaflet-map-container", {
        center: [25, 20],
        zoom: 2,
        minZoom: 2,
        maxZoom: 10,
        scrollWheelZoom: true,
        attributionControl: true
      });

      // OpenStreetMap标准瓦片（免费，无需API key）
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(worldMapInstance);

      // 创建标记层组
      worldMapHeatLayer = L.layerGroup().addTo(worldMapInstance);

      // 修复地图尺寸
      setTimeout(() => worldMapInstance.invalidateSize(), 100);
    }

    // 清除旧标记
    worldMapHeatLayer.clearLayers();

    // 统计每个地区每个企业的项目数量
    const regionCompanyData = {};
    const activeCompanies = new Set();

    events.forEach((event) => {
      const regions = getEventRegions(event);
      const companyId = event.companyId;
      const company = window.ENERGY_NEWS_DATA.companies.find((c) => c.id === companyId);
      if (!company) return;

      regions.forEach((region) => {
        if (REGION_COORDS[region]) {
          if (!regionCompanyData[region]) regionCompanyData[region] = {};
          if (!regionCompanyData[region][companyId]) {
            regionCompanyData[region][companyId] = { count: 0, company: company };
          }
          regionCompanyData[region][companyId].count++;
          activeCompanies.add(companyId);
        }
      });
    });

    // 计算全局最大项目数（用于点大小缩放）
    let maxCount = 1;
    Object.values(regionCompanyData).forEach((companyMap) => {
      Object.values(companyMap).forEach((data) => {
        if (data.count > maxCount) maxCount = data.count;
      });
    });

    // 企业索引映射（用于颜色分配）
    const companyIndexMap = {};
    window.ENERGY_NEWS_DATA.companies.forEach((c, i) => { companyIndexMap[c.id] = i; });

    // 添加项目点
    Object.entries(regionCompanyData).forEach(([region, companyMap]) => {
      const coord = REGION_COORDS[region];
      if (!coord) return;
      const [lon, lat] = coord;
      const companies = Object.entries(companyMap).sort((a, b) => b[1].count - a[1].count);

      if (companies.length === 1) {
        // 单一企业：用该企业颜色
        const [companyId, data] = companies[0];
        const color = getCompanyColor(companyIndexMap[companyId]);
        const radius = 10 + (data.count / maxCount) * 22;

        // 光晕
        L.circle([lat, lon], {
          radius: radius * 50000,
          color: color,
          weight: 0,
          fillColor: color,
          fillOpacity: 0.3
        }).addTo(worldMapHeatLayer);

        // 实点
        L.circleMarker([lat, lon], {
          radius: Math.max(radius * 0.55, 7),
          fillColor: color,
          color: "#fff",
          weight: 2,
          fillOpacity: 0.92
        }).addTo(worldMapHeatLayer)
        .bindPopup(`<strong>${region}</strong><br/>${data.company.name}<br/>项目：${data.count}个`);
      } else {
        // 多家企业：环形排列不同颜色点
        const ringRadius = 16;
        const totalCount = companies.reduce((sum, [, d]) => sum + d.count, 0);

        // 地区总光晕
        L.circle([lat, lon], {
          radius: (12 + totalCount / maxCount * 16) * 50000,
          color: "#64748b",
          weight: 0,
          fillColor: "#94a3b8",
          fillOpacity: 0.18
        }).addTo(worldMapHeatLayer);

        companies.forEach(([companyId, data], i) => {
          const color = getCompanyColor(companyIndexMap[companyId]);
          const angle = (i / companies.length) * Math.PI * 2 - Math.PI / 2;
          const pointLon = lon + (Math.cos(angle) * ringRadius) / 111 / Math.cos(lat * Math.PI / 180);
          const pointLat = lat + (Math.sin(angle) * ringRadius) / 111;
          const radius = 6 + (data.count / maxCount) * 12;

          L.circleMarker([pointLat, pointLon], {
            radius: Math.max(radius, 6),
            fillColor: color,
            color: "#fff",
            weight: 1.8,
            fillOpacity: 0.92
          }).addTo(worldMapHeatLayer)
          .bindPopup(`<strong>${region}</strong><br/>${data.company.name}<br/>项目：${data.count}个`);
        });

        // 中心标记地区总项目数
        L.marker([lat, lon], {
          icon: L.divIcon({
            className: "region-total-label",
            html: `<div style="background:#1e293b;color:#fff;font-size:13px;font-weight:700;padding:3px 9px;border-radius:12px;white-space:nowrap;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${totalCount}</div>`,
            iconSize: [32, 24],
            iconAnchor: [16, 12]
          })
        }).addTo(worldMapHeatLayer);
      }
    });

    // 生成企业图例（显示全部有项目的企业）
    const legendCompanies = window.ENERGY_NEWS_DATA.companies
      .filter((c) => activeCompanies.has(c.id));

    const legendItems = legendCompanies.map((c) => {
      const color = getCompanyColor(companyIndexMap[c.id]);
      return `<span class="company-legend-item" title="${c.name}">
        <span class="legend-dot" style="background:${color}"></span>${c.shortName || c.name}
      </span>`;
    }).join("");

    const legendHtml = `
      <div class="map-legend company-legend">
        <span class="legend-title">企业图例（共${activeCompanies.size}家企业有新建项目，颜色对应企业，点击地图点查看详情）</span>
        <div class="company-legend-grid">${legendItems}</div>
      </div>
    `;

    // 更新图例容器
    let legendContainer = container.querySelector(".map-legend");
    if (!legendContainer) {
      const legendDiv = document.createElement("div");
      legendDiv.innerHTML = legendHtml;
      container.appendChild(legendDiv.firstElementChild);
    } else {
      legendContainer.outerHTML = legendHtml;
    }
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
