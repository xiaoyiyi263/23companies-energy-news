// 派生层：把 data/news-data.js 的原始数据加工成页面使用的 window.ENERGY_NEWS_DATA。
// 这里集中所有"计算型"规则：话题过滤、重要性分级、正文拼装、海外表述统一、来源链接分级。
// 修改这些规则会影响全站统计与展示，改完请运行 node tools/validate.mjs。
(() => {
  const source = window.ENERGY_NEWS_SOURCE;
  if (!source) {
    throw new Error("data/news-data.js 必须在 data/news-derived.js 之前加载");
  }

  const {
    meta,
    companies,
    rows,
    q2Rows,
    q3Rows,
    q4Rows,
    coreSupplementRows,
    q1SummaryRewrites,
    quarterTrends,
    companyQuarterSummaries,
  } = source;

  const excludedTopicPattern = /财报|业绩|股东|董事|分红|回购|投资者|年报|治理|薪酬|资本市场|市值|品牌|公告|官网发布|管理层|市场沟通|信息披露|财务|债务|资本管理|股东回报/;

  const companyById = Object.fromEntries(companies.map((company) => [company.id, company]));

  function getImportance(title, summary, significance) {
    const text = (title + " " + (summary || "") + " " + (significance || "")).toLowerCase();
    const highKeywords = ["核准","获批","开工","奠基","并网","投产","投运","百亿","千亿","签约","战略合作","重组","分拆","上市","核电","首台","首批","首座","首个","突破","里程碑","最大","首创","全面建成","正式投运","首次并网","收购","并购","投资建设","开工建设","主体工程","获批建设","获得核准","项目核准"];
    const lowKeywords = ["人事","任命","选举","董事长","总经理","董事","监事","分红","配股","派息","股东大会","年度报告","中期报告","季度报告","ESG","可持续发展报告","社会责任报告","股价","涨跌","市值","成交量","评级","目标价","业绩发布时间","公告将于","发布时间"];
    for (const kw of highKeywords) {
      if (text.includes(kw.toLowerCase())) return "高";
    }
    for (const kw of lowKeywords) {
      if (text.includes(kw.toLowerCase())) return "低";
    }
    return "中";
  }

  function makeDetails(event) {
    const company = companyById[event.companyId];
    const publishVerb = event.sourceType === "官网" ? "发布" : "经权威渠道披露";
    const cleanTitle = event.title.replace(new RegExp(`^${company.shortName}`), "").replace(/^发布/, "").replace(/^，/, "");
    const base = `${event.date.slice(5, 7).replace(/^0/, "")}月${event.date.slice(8, 10).replace(/^0/, "")}日，${company.shortName}${publishVerb}“${cleanTitle}”。${event.summary}`;
    if (company.region !== "中国" || base.length >= 180) return base;
    const addition = buildDomesticDetailAddition(event);
    return addition ? `${base}${addition}` : base;
  }

  function buildDomesticDetailAddition(event) {
    const text = [event.title, event.summary, event.tags.join("、")].join(" ");
    if (/会议|会谈|职代会|大会|新闻发布会|通气会|综述|工作会议|经济活动分析/.test(event.title)) {
      return "";
    }
    if (/投资|出资|合资|债券|资金|融资/.test(text)) {
      return "正文重点不是融资或资本动作本身，而是资金投向对应的新能源基地、支撑性电源、储能、能源科技或绿色低碳改造项目。";
    }
    if (/数字|智能|AI|智慧|大模型|数智|创新工作室|科技创新/.test(text)) {
      return "正文重点在数据采集、设备状态识别、故障预警、运行优化和检修管理，目标是把数字化工具直接用于发电生产、运维检修和安全管控。";
    }
    if (/水电|雅砻江|长江|梯级|北斗|径流|枢纽|大坝/.test(text)) {
      return "正文重点在梯级电站调度、水情预测、枢纽监测和设备安全运行；这类工作直接关系大型清洁能源基地的发电效率、防洪调度和长期安全。";
    }
    if (/核电|华龙一号|反应堆|装料/.test(text)) {
      return "正文重点在核岛土建、设备安装、冷试热试、装料准备、并网试验和监管审评等工程环节；这些节点决定机组何时从建设调试转入稳定发电。";
    }
    if (/储能|调峰|灵活性|共享储能/.test(text)) {
      return "正文重点在储能容量、接入位置、充放电调度和并网验收；这类项目主要用于平滑风光出力、参与削峰填谷，并提高新能源消纳能力。";
    }
    if (/630℃|二次再热|超超临界|煤电|火电|电厂|机组/.test(text)) {
      return "正文重点在机组参数、投产节点和支撑性电源作用：项目从建设调试转入发电运行后，可在高峰负荷、新能源波动和供热需求下提供稳定出力。";
    }
    if (/海上风电/.test(text)) {
      return "正文重点在风机基础、海缆敷设、海上升压站、施工窗口和送出工程等环节；这些节点决定项目能否从资源开发进入并网发电。";
    }
    if (/风电|光伏|新能源|绿电|清洁能源|风光/.test(text)) {
      return "正文重点在资源获取、核准备案、工程施工、送出工程和并网验收；只有送出和消纳条件落实后，新增装机才会转化为有效发电量。";
    }
    if (/综合能源|客户侧|供热|热泵|园区|售电|建筑节能/.test(text)) {
      return "正文重点在分布式光伏、储能、冷热电联供、能效管理和绿电交易等组合服务，落点是园区、公共建筑或大客户用能场景。";
    }
    if (/煤炭|铁路|港口|运输|燃料|煤源/.test(text)) {
      return "正文重点在煤源组织、铁路港口通道、电厂燃料衔接和电源可用能力，反映煤电运输一体化企业对能源供应链的统筹。";
    }
    return "";
  }

  function polishOverseasText(text) {
    if (!text) return text;
    return text
      .replace(/普通EBITDA/g, "经常性EBITDA")
      .replace(/普通净利润/g, "经常性净利润")
      .replace(/开放市场客户/g, "市场化零售客户")
      .replace(/表后电池储能系统/g, "用户侧电池储能系统")
      .replace(/能源灵活性容量/g, "用能调节能力")
      .replace(/灵活性资源/g, "调节资源")
      .replace(/电力灵活性市场/g, "电力调节市场")
      .replace(/电力市场灵活性服务/g, "电力市场调节服务")
      .replace(/可交付能力/g, "稳定供电能力")
      .replace(/具体加快电气化相关行动/g, "加快客户用能和交通场景电气化")
      .replace(/高强度节能综合对策/g, "强化节能综合措施")
      .replace(/完岛换流站/g, "莞岛换流站")
      .replace(/背后交流系统连接工程/g, "配套交流系统连接工程")
      .replace(/可交付电量/g, "稳定供电量")
      .replace(/该条记录的是/g, "这项内容主要说明")
      .replace(/该条记录/g, "这项内容记录")
      .replace(/该条属于/g, "此事项属于")
      .replace(/该条只保留/g, "此处只保留")
      .replace(/该事项说明/g, "这项内容说明")
      .replace(/该项目的重点是/g, "项目重点在于")
      .replace(/服务大型企业客户清洁电力需求/g, "满足大型企业客户的清洁用电需求")
      .replace(/服务电力系统峰值管理/g, "用于缓解巴西电力系统峰值负荷压力")
      .replace(/服务巴西电力系统峰值管理/g, "用于缓解巴西电力系统峰值负荷压力")
      .replace(/服务岛屿电力系统清洁化/g, "推动岛屿电力系统清洁化")
      .replace(/服务RWE在欧洲发电和能源贸易组合中的燃气供应安全/g, "为RWE欧洲发电和能源贸易组合补充长期燃气供应")
      .replace(/服务数据中心和工业客户/g, "满足数据中心和工业客户用电需求")
      .replace(/服务AI和云计算用电需求/g, "满足AI和云计算用电需求")
      .replace(/服务负荷增长、极端天气应对和新能源接入/g, "用于应对负荷增长、极端天气和新能源接入压力")
      .replace(/服务法国未来/g, "面向法国未来")
      .replace(/服务可再生能源接入和区域电力输送/g, "支撑可再生能源接入和区域电力输送")
      .replace(/服务可再生能源接入和电力系统灵活调节/g, "支撑可再生能源接入和电力系统调节")
      .replace(/服务电力系统稳定运行/g, "支撑电力系统稳定运行")
      .replace(/服务英国工业和数据中心等新增负荷/g, "满足英国工业和数据中心等新增负荷需求")
      .replace(/服务大客户脱碳的重要指标/g, "衡量其支持大客户脱碳的重要指标")
      .replace(/服务印度大发电企业推动电站运维能力提升的平台活动/g, "体现NTPC推动印度发电行业提升电站运维能力的平台作用");
  }

  // ---- 来源链接质量分级（article = 具体文章页；list = 新闻栏目页；homepage = 公司首页）----
  const LIST_SEGMENTS = new Set([
    "news", "press", "press-room", "newsroom", "news-room", "information", "media",
    "announcement", "announcements", "updates", "releases", "press-release",
    "press-releases", "news-releases", "press-center", "media-center",
    "investor-updates", "fique-por-dentro", "sala-de-imprensa",
  ]);

  function getLinkType(url) {
    try {
      const path = new URL(url).pathname.replace(/\/+$/, "");
      if (path === "" || path === "/") return "homepage";
      const segment = path.split("/").pop().toLowerCase();
      return LIST_SEGMENTS.has(segment) ? "list" : "article";
    } catch (error) {
      return "unknown";
    }
  }

  const events = rows
    .concat(q2Rows, q3Rows, q4Rows, coreSupplementRows)
    .filter((row) => !excludedTopicPattern.test([row[2], ...(row[8] || [])].join(" ")))
    .map(([companyId, date, title, summary, significance, sourceType, sourceName, url, tags]) => {
      const company = companyById[companyId];
      const rewrittenSummary = q1SummaryRewrites[`${companyId}|${date}|${title}`] || summary;
      const displayTitle = company.region === "海外" ? polishOverseasText(title) : title;
      const displaySummary = company.region === "海外" ? polishOverseasText(rewrittenSummary) : rewrittenSummary;
      const displaySignificance = company.region === "海外" ? polishOverseasText(significance) : significance;
      const event = {
        companyId,
        date,
        title: displayTitle,
        summary: displaySummary,
        significance: displaySignificance,
        sourceType,
        sourceName,
        url,
        tags,
        linkType: getLinkType(url),
        importance: getImportance(displayTitle, displaySummary, displaySignificance),
      };
      return {
        ...event,
        details: makeDetails(event),
      };
    });

  window.ENERGY_NEWS_DATA = {
    meta,
    companies,
    quarterTrends,
    companyQuarterSummaries,
    events,
  };
})();
