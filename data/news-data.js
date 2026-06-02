(() => {
  const companies = [
    ["rwe", "德国莱茵公司（RWE）", "RWE", "德国", "海外", "RWE Press & News", "https://www.rwe.com/en/press"],
    ["enel", "意大利国家电力公司（Enel）", "Enel", "意大利", "海外", "Enel Media", "https://www.enel.com/media/explore"],
    ["iberdrola", "西班牙伊维尔德罗拉公司（Iberdrola）", "Iberdrola", "西班牙", "海外", "Iberdrola News", "https://www.iberdrola.com/press-room/news"],
    ["edf", "法国电力公司（EDF）", "EDF", "法国", "海外", "EDF Press Releases", "https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases"],
    ["engie", "法国恩吉集团（ENGIE）", "ENGIE", "法国", "海外", "ENGIE Newsroom", "https://en.newsroom.engie.com/news/"],
    ["duke-energy", "美国杜克能源公司（Duke Energy）", "Duke Energy", "美国", "海外", "Duke Energy News Center", "https://news.duke-energy.com/releases"],
    ["southern-company", "美国南方公司（Southern Company）", "Southern Company", "美国", "海外", "Southern Company Newsroom", "https://www.southerncompany.com/newsroom.html"],
    ["constellation", "美国联合能源公司（Constellation Energy）", "Constellation", "美国", "海外", "Constellation Investor News", "https://investors.constellationenergy.com/news-releases"],
    ["axia", "巴西电力公司（AXIA Energia）", "AXIA Energia", "巴西", "海外", "AXIA Sala de Imprensa", "https://axia.com.br/fique-por-dentro/sala-de-imprensa"],
    ["jera", "日本杰拉公司（JERA）", "JERA", "日本", "海外", "JERA Press Release", "https://www.jera.co.jp/en/news/information"],
    ["kepco", "韩国电力公司（KEPCO）", "KEPCO", "韩国", "海外", "KEPCO Press Center", "https://www.kepco.co.kr/eng/press-center/press-release/boardList.do"],
    ["ntpc", "印度国家火电公司（NTPC）", "NTPC", "印度", "海外", "NTPC Media", "https://ntpc.co.in/media"],
    ["datang", "中国大唐集团有限公司", "中国大唐", "中国", "中国", "中国大唐官网", "https://www.china-cdt.com/"],
    ["huadian", "中国华电集团有限公司", "中国华电", "中国", "中国", "中国华电官网", "https://www.chd.com.cn/"],
    ["spic", "国家电力投资集团有限公司", "国家电投", "中国", "中国", "国家电投官网", "https://www.spic.com.cn/"],
    ["chn-energy", "国家能源投资集团有限责任公司", "国家能源集团", "中国", "中国", "国家能源集团官网", "https://www.chnenergy.com.cn/"],
    ["ctg", "中国长江三峡集团有限公司", "三峡集团", "中国", "中国", "三峡集团官网", "https://www.ctg.com.cn/"],
    ["cgn", "中国广核集团有限公司", "中广核", "中国", "中国", "中广核官网", "https://www.cgnpc.com.cn/"],
    ["cr-power", "华润电力控股有限公司", "华润电力", "中国", "中国", "华润电力官网", "https://www.cr-power.com/"],
    ["geg", "广东省能源集团有限公司", "广东能源集团", "中国", "中国", "广东能源集团官网", "https://www.geg.com.cn/"],
    ["zj-energy", "浙江省能源集团有限公司", "浙能集团", "中国", "中国", "浙能集团官网", "https://www.zjenergy.com.cn/"],
    ["beijing-energy", "北京能源集团有限责任公司", "京能集团", "中国", "中国", "京能集团官网", "https://www.powerbeijing.com/"],
    ["sdic-power", "国投电力控股股份有限公司", "国投电力", "中国", "中国", "国投电力官网", "https://www.sdicpower.com/"],
  ].map(([id, name, shortName, country, region, label, url]) => ({
    id,
    name,
    shortName,
    country,
    region,
    sources: [{ label, url }],
  }));

  const rows = [
    ["rwe","2026-01-14","RWE在英国海上风电竞价中锁定6.9GW差价合约并引入KKR","RWE获得英国AR7海上风电竞价差价合约，覆盖Norfolk Vanguard、Dogger Bank South和Awel y Mor等项目，总规模6.9GW；同时与KKR就Norfolk Vanguard项目建立长期合作。","该事项显著提升RWE英国海上风电管线的确定性，并通过股权合作降低资本开支压力。","官网","RWE Press Release","https://uk.rwe.com/press-and-news/2026-01-14-rwe-secures-contracts-for-difference-for-6-9-gigawatts-of-offshore-wind-capacity/",["海上风电","英国","投资"]],
    ["rwe","2026-01-15","RWE与Glenfarne签署20年美国LNG供应协议","RWE Supply & Trading与Glenfarne达成长期液化天然气供应安排，相关货源预计自2030年起可运往欧洲及全球市场。","长期LNG合同增强RWE能源贸易组合的安全性和灵活性，也反映欧洲企业仍在锁定过渡期燃气资源。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-supply-and-trading/2026-01-15-rwe-and-glenfarne-sign-20-year-supply-agreement-for-liquefied-natural-gas-from-the-us/",["LNG","贸易","能源安全"]],
    ["rwe","2026-02-05","RWE与Hambach周边市镇扩大太阳能合作","NEULAND HAMBACH取得RWE一座约14MWp光伏电站49%权益，双方在Hambach矿区周边共同运营三座太阳能电站和一座电池储能设施。","该项目把矿区转型、地方参与和新能源开发结合起来，是RWE推动德国煤炭地区转型的代表案例。","官网","RWE Press Release PDF","https://www.rwe.com/-/media/RWE/documents/07-presse/rwe-renewables-europe-australia/2026/2026-02-05-more-solar-power-for-neuland-hambach.pdf",["光伏","储能","德国"]],
    ["rwe","2026-02-26","RWE在意大利在建风光容量增至235MW","RWE披露其意大利在建风电、光伏和农光互补项目规模达到235MW，其中2026年新启动约123MW项目。","意大利成为RWE欧洲可再生能源扩张的重要市场，项目组合有助于提升其区域发电资产多元化。","官网","RWE Press Release PDF","https://www.rwe.com/-/media/RWE/documents/07-presse/rwe-renewables-europe-australia/2026/2026-02-26-high-speed-growth-in-italy.pdf",["风电","光伏","意大利"]],
    ["rwe","2026-03-12","RWE发布2025业绩并规划2031年前350亿欧元净投资","RWE公布2025年调整后EBITDA 51亿欧元、调整后净利润18亿欧元，并计划2026至2031年净投资350亿欧元，将发电组合扩大至65GW。","这是RWE中长期资本配置的核心信号，重点转向德国灵活性电源、美国发电资产和全球新能源。","官网","RWE Annual Results Release","https://www.rwe.com/en/press/rwe-ag/2026-03-12-rwe-delivers-strong-financial-performance/",["财报","战略","投资"]],

    ["enel","2026-02-05","Enel公布2025年初步业绩，普通EBITDA达229亿欧元","Enel披露2025年收入约804亿欧元、普通EBITDA约229亿欧元，国际业务贡献抵消意大利零售和水电压力。","初步业绩为后续战略计划提供财务基础，显示其资产组合调整后盈利韧性增强。","官网","Enel Press Release","https://www.enel.com/media/explore/search-press-releases/press/2026/02/enel-preliminary-results-2025-ordinary-ebitda-at-229-billion-euros-increasing-thanks-to-international-activities",["财报","国际业务","经营"]],
    ["enel","2026-02-22","Enel启动最高10亿欧元股份回购计划","Enel董事会批准新一轮回购，最高支出10亿欧元、最多1.5亿股，作为股息之外的股东回报安排。","回购体现公司降债和重组后的资本回报能力，也与其提升每股收益目标相配合。","官网","Enel Press Release","https://www.enel.com/media/explore/search-press-releases/press/2026/02/enel-launches-a-new-share-buyback-program-of-up-to-1-billion-euros-",["股东回报","回购","资本市场"]],
    ["enel","2026-02-23","Enel发布2026-2028战略计划，三年投资530亿欧元","Enel制定2026-2028战略计划，计划投资530亿欧元，较2023-2025年计划增加100亿欧元，重点聚焦高潜力地区业务增长；其中综合业务投资超过260亿欧元，约200亿欧元用于可再生能源，较上一轮计划增加约80亿欧元，用以新增约15GW可再生能源容量，另有超过260亿欧元投入电网建设，其中约55%用于意大利本土，其余分布在伊比利亚半岛和拉丁美洲。","该战略计划显示Enel未来三年将以电网和可再生能源作为主业扩张核心，通过在高潜力区域精准投资提升清洁能源装机、电网韧性和长期经营能力。","官网","Enel Strategic Plan","https://www.enel.com/media/explore/search-press-releases/press/2026/02/enel-2026-2028-strategic-plan",["战略","投资","电网"]],
    ["enel","2026-02-23","Enel举行2026资本市场日","Enel在资本市场日向投资者和媒体介绍2026-2028战略计划，CEO和CFO阐释增长、资本纪律和股东回报目标。","资本市场日强化了管理层对投资节奏和收益增长的承诺，是外部评估其执行能力的重要窗口。","官网","Enel News","https://www.enel.com/media/explore/search-news/news/2026/02/capital-markets-day-2026",["资本市场日","战略沟通","投资者关系"]],
    ["enel","2026-03-19","Enel发布2025年正式业绩","Enel公布2025年收入803.46亿欧元、普通EBITDA 228.74亿欧元、集团普通净利润70.11亿欧元，净利润同比增长。","正式业绩验证了其去杠杆、资产组合优化和国际业务贡献，是年度报告的核心经营依据。","官网","Enel FY2025 Results","https://www.enel.com/media/explore/search-press-releases/press/2026/03/enel-2025-results-which-increased-thanks-to-international-activities-consolidate-the-rationalization-and-strengthening-process-of-its-business-portfolio-and-financial-structure",["财报","利润","资产组合"]],

    ["iberdrola","2026-01-06","Iberdrola市值在125周年之际接近1250亿欧元","公司披露其市值在2026年初达到约1250亿欧元，成为欧洲领先公用事业公司之一，并延续2025年的股价增长。","市值变化体现资本市场对其电网和新能源投资计划的认可，也增强其低成本融资能力。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/2026/-/sc/pag-15",["资本市场","市值","战略"]],
    ["iberdrola","2026-01-23","Iberdrola在达沃斯强调电气化和电网投资","董事长Ignacio Galan在世界经济论坛期间参与多场高层交流，重点讨论电气化、电网投资和能源竞争力。","该事项显示Iberdrola把电网和电气化放在全球能源安全与竞争力叙事中心。","官网","Iberdrola Davos News","https://www.iberdrola.com/press-room/news/detail/iberdrola-strengthens-position-in-davos-as-key-player-global-energy-debate",["电气化","电网","达沃斯"]],
    ["iberdrola","2026-01-27","Iberdrola连续第三年成为欧洲长期清洁电力PPA市场领导者","Pexapark报告显示Iberdrola在欧洲长期可再生能源购电协议卖方排名中居首，全球累计签署电力销售协议约400TWh。","PPA能力是新能源项目收益锁定和服务大客户脱碳的重要指标，支撑其可再生能源投资模型。","官网","Iberdrola Press Release PDF","https://www.iberdrola.com/documents/20125/5692223/27-01-2026-lider-ppa-en-gb.pdf",["PPA","可再生能源","欧洲"]],
    ["iberdrola","2026-02-02","Iberdrola与挪威央行投资管理公司的可再生能源联盟达1500MW","Iberdrola披露其与Norges Bank Investment Management的共同投资联盟在运可再生能源容量达到1500MW。","与长期资本合作可降低项目融资压力，并加快欧洲及其他市场的可再生能源开发。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/2026/-/sc/pag-11",["合作","可再生能源","资产组合"]],
    ["iberdrola","2026-03-25","Iberdrola出售英国非核心计量服务业务SP Dataserve","Iberdrola通过ScottishPower签署协议，将英国商业计量服务公司SP Dataserve出售给IMServ，继续简化英国业务组合。","交易体现其主动组合管理策略，把资本集中到电网、海上风电等核心投资领域。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/2026/-/sc/pag-8",["资产出售","英国","组合管理"]],

    ["edf","2026-02-06","法国核能产业欢迎政府核电发展雄心","EDF及法国核能产业相关方就政府核电发展方向表态，强调法国自主核电技术、低碳电力和产业链能力。","该事项关系EDF未来EPR2、既有核电延寿和法国能源主权战略。","官网","EDF Press Release PDF","https://www.edf.fr/sites/groupe/files/2026-02/PR%20-%20The%20nuclear%20sector%20welcomes%20the%20Government%20s%20ambitions.pdf",["核电","法国","政策"]],
    ["edf","2026-02-12","EDF欢迎法国新版多年能源规划发布","EDF表示PPE3为工业界、投资者和地方提供可见度，并支持6台EPR2及8台备选机组、核电延寿、水电投资和海上风电能力维护。","政策框架为EDF长期投资提供方向，是法国电力体系低碳化和供电安全的重要支撑。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-welcomes-the-publication-of-the-new-french-multi-year-energy-programme",["政策","核电","电气化"]],
    ["edf","2026-02-16","EDF发布发电机组调节运行报告要点","EDF披露其机组调节研究，指出2019至2024年核电调节量翻倍，2025年核电机组调节达33TWh。","随着风光占比提升，核电灵活运行成为法国电力系统稳定和新能源消纳的关键议题。","官网","EDF Press Release PDF","https://www.edf.fr/sites/groupe/files/epresspack/12749/PR-The-EDF-group-shares-the-key-findings-of-its-report-on-the-modulation-of-its-fleet-1.pdf",["核电","灵活性","系统调节"]],
    ["edf","2026-02-20","EDF发布2025年度业绩","EDF公布2025年年度业绩，强调运营表现、现金流和债务改善，并列示低碳电力产出等关键指标。","年度业绩是观察EDF核电恢复、融资能力和低碳投资承载力的核心材料。","官网","EDF Annual Results PDF","https://www.edf.fr/sites/groupe/files/2026-02/PR%202025%20annual%20results.pdf",["财报","现金流","低碳电力"]],
    ["edf","2026-02-26","EDF成功发行27.5亿欧元绿色债券","EDF完成四档高级绿色债券发行，资金用于法国既有核电机组延寿和英国Hinkley Point C项目融资或再融资。","绿色债券把核电项目纳入低碳融资框架，对EDF大规模核电投资和债务期限管理意义重大。","官网","EDF Green Bond Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-announces-the-success-of-its-senior-green-multi-tranche-bond-issue-for-a-nominal-amount-of-275-billion-euros",["绿色债券","融资","核电"]],

    ["engie","2026-01-13","ENGIE在印度获得首个光伏+储能混合项目","ENGIE中标印度200MW光伏配套100MW/600MWh电池储能项目，可提供最长6小时可再生能源供给。","该项目提升ENGIE在印度全天候可再生电力市场的竞争力，并强化储能能力。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/engie-secures-its-first-hybrid-solar-storage-project-in-india-41260-314df.html",["印度","光储","储能"]],
    ["engie","2026-01-19","ENGIE与Masdar完成阿布扎比1.5GW Khazna光伏项目融资关闭","项目采用30年购电协议，建成后可为约16万户家庭供电，并每年减少超过240万吨二氧化碳排放。","Khazna是ENGIE开发的最大光伏项目之一，扩大其中东可再生能源资产规模。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/engie-and-masdar-reach-financial-close-on-1-5-gw-khazna-solar-pv-project-in-abu-dhabi-a75f3-314df.html",["光伏","中东","融资"]],
    ["engie","2026-02-19","ENGIE成为全球可再生企业PPA第一供应商","彭博新能源财经年度评估显示，ENGIE在2025年签署3.6GW企业PPA，2011年以来累计13.8GW，位居全球第一。","PPA领先地位强化其新能源开发收益稳定性，并扩大大型科技和工业客户群。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/engie-the-world-s-number-one-in-renewable-electricity-purchase-agreements-with-businesse-e4239-314df.html",["PPA","可再生能源","客户"]],
    ["engie","2026-02-25","ENGIE发布2025年业绩和2026-2028展望","公司披露2025年业绩达到指引上沿，可再生能源和电池新增6.2GW，拟派息每股1.35欧元。","业绩和中期展望为其电网、可再生和灵活性业务投资提供财务依据。","官网","ENGIE FY2025 Results","https://en.newsroom.engie.com/news/engie-fy-2025-results-95f16-314df.html",["财报","股息","可再生能源"]],
    ["engie","2026-02-25","ENGIE宣布收购英国UK Power Networks","ENGIE签署协议以105亿英镑股权价值收购UK Power Networks，强化其在英国受监管电网中的位置。","这是ENGIE向受监管电力网络再平衡的重大交易，将提升盈利可见度并降低业务风险。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/engie-announces-the-acquisition-of-uk-power-networks-uk-s-best-in-class-electricity-distribution-network-42503-314df.html",["并购","电网","英国"]],

    ["duke-energy","2026-02-05","杜克能源连续第九年入选《财富》最受赞赏公司","Duke Energy在2026年电力和燃气公用事业榜单中升至第三位，多个声誉指标改善。","声誉提升有助于其在电网现代化、负荷增长和能源转型投资中维持监管与投资者信任。","官网","Duke Energy Investor News","https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-again-named-by-Fortune-one-of-Worlds-Most-Admired-Companies/default.aspx",["品牌","治理","公用事业"]],
    ["duke-energy","2026-02-10","杜克能源发布2025年第四季度和全年业绩","公司公布2025年全年业绩，并由CEO和CFO举行投资者说明会，讨论业务和财务更新。","年度业绩是评估其电网升级、清洁发电和资本开支计划的重要基础。","官网","Duke Energy Investor News","https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-reports-fourth-quarter-and-full-year-2025-financial-results",["财报","投资者关系","经营"]],
    ["duke-energy","2026-02-11","杜克能源佛州推出住宅电池储能试点","公司在奥兰多Hunter's Creek社区为75户以上住宅安装电池储能系统，以管理用能并支持高峰期电网运行。","住宅侧储能试点有助于验证分布式资源在削峰、可靠性和客户节能中的价值。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/easy-",["储能","分布式能源","佛州"]],
    ["duke-energy","2026-02-20","杜克能源核电机组创可靠性纪录","公司披露2025年核电机组容量因子达到96.9%，并通过联邦核电生产税抵免为客户带来约6亿美元节约。","核电是其卡罗来纳地区低成本、稳定供电的核心资产，纪录表现支撑电价和可靠性目标。","官网","Duke Energy Investor News","https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-nuclear-fleet-sets-new-all-time-reliability-record-delivers-value-for-customers/default.aspx",["核电","可靠性","客户成本"]],
    ["duke-energy","2026-03-10","杜克能源就卡罗来纳两家电力公司合并达成客户方协议","公司与南卡及北卡客户代表等就Duke Energy Carolinas和Duke Energy Progress合并方案达成协议，强调可衡量的客户收益。","该合并若获批准，将简化运营和监管流程，并可能降低长期客户成本。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/duke-energy-",["监管","合并","客户成本"]],

    ["southern-company","2026-02-19","Southern Company发布2025年第四季度和全年业绩","公司报告2025年四季度收益4.16亿美元，全年业绩反映其受监管公用事业和发电资产表现。","年度业绩为评估负荷增长、资本计划和股东回报提供基础。","官网","Southern Company Mediaroom","https://southerncompany.mediaroom.com/2026-02-19-Southern-Company-reports-fourth-quarter-and-full-year-2025-earnings",["财报","经营","公用事业"]],
    ["southern-company","2026-02-25","美国政府宣布向Georgia Power和Alabama Power提供265亿美元贷款支持","美国能源部宣布向Southern Company旗下Georgia Power和Alabama Power提供创纪录贷款，用于电源扩建、输电线路和电厂升级。","贷款与数据中心等大负荷需求增长直接相关，可降低长期融资成本并支撑东南部电力扩张。","权威媒体","Associated Press","https://apnews.com/article/3aa78ffb7e67ae8e5ce3c42b7d4d3134",["融资","电网","数据中心"]],
    ["southern-company","2026-02-28","Southern Company披露大负荷客户合同和潜在管线","公司2026年股东材料显示，截至2026年2月已签约约10GW大负荷客户，并有超过75GW潜在需求管线。","该信息显示AI和数据中心需求正在改变其售电增长和系统规划假设。","官网","Southern Company Shareholder Presentation","https://www.southerncompany.com/content/dam/southerncompany/sustainability/pdfs/sustainability-shareholder-presentation.pdf",["数据中心","负荷增长","规划"]],
    ["southern-company","2026-03-24","Southern Company宣布一季度业绩发布时间","公司公告将于4月30日发布2026年一季度业绩并举行电话会议。","业绩发布安排本身提示投资者关注一季度负荷增长、资本开支和监管进展。","官网","PR Newswire / Southern Company","https://www.prnewswire.com/news-releases/southern-company-first-quarter-2026-earnings-to-be-released-april-30-302716931.html",["投资者关系","财报","公告"]],
    ["southern-company","2026-03-31","Southern Power一季度继续推进风电资产更新计划","公司一季度财务披露显示，Southern Power因风电资产再动力化计提加速折旧，相关项目预计持续至2027年三季度。","风电再动力化有助于提升存量新能源资产效率，同时短期影响会计利润。","官网","Southern Company Q1 Materials","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["风电","资产更新","财务影响"]],

    ["constellation","2026-01-07","Constellation完成收购Calpine","Constellation在后续业绩材料中确认已于1月7日完成Calpine收购，形成美国最大电力生产商之一。","交易将核电、天然气、地热和商业售电平台整合，显著扩大其可调度电源组合。","官网","Constellation FY2025 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-fourth-quarter-and-full-year-2025-results",["并购","天然气","核电"]],
    ["constellation","2026-01-13","Constellation完成Calpine票据私募交换要约","公司宣布私募交换要约和同意征集最终结果，用于处理Calpine相关债券安排。","债务交换是Calpine并购整合的重要财务步骤，关系到资本结构和融资成本。","官网","Constellation SEC Filing","https://investors.constellationenergy.com/static-files/6dabb832-27d6-4a48-b4ed-97031e1c89e4",["债务","并购整合","融资"]],
    ["constellation","2026-02-24","Constellation发布2025年第四季度和全年业绩","公司披露2025年全年调整后经营收益，并列示Calpine收购、核电执照延期、Crane项目贷款等进展。","业绩显示其围绕核电和可调度电源服务AI及数据中心负荷增长的战略框架。","官网","Constellation FY2025 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-fourth-quarter-and-full-year-2025-results",["财报","核电","数据中心"]],
    ["constellation","2026-02-28","Constellation签署Freestone数据中心供电协议","公司披露2月与CyrusOne签署380MW协议，为德州Freestone能源中心旁数据中心供电，并约定二期额外380MW独家安排。","该项目体现发电资产与数据中心负荷共址趋势，是电力企业服务AI负荷增长的典型案例。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["数据中心","供电协议","德州"]],
    ["constellation","2026-03-18","Constellation出售PJM资产以推进Calpine交易监管承诺","公司与LS Power达成出售PJM发电资产组合协议，作为满足FERC和美国司法部对Calpine交易要求的一部分。","监管处置降低并购审批风险，也改变PJM区域部分容量资源归属。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-announces-agreement-sell-pjm-generation-assets-ls",["监管","资产出售","PJM"]],

    ["axia","2026-01-06","AXIA推出METRIA数字化脱碳平台","AXIA介绍METRIA平台，面向中小企业提供更简单、数字化的可持续能源解决方案。","该平台有助于公司从发输电资产运营延伸到客户侧低碳服务。","官网","AXIA Energia","https://axia.com.br/fique-por-dentro",["数字化","客户服务","脱碳"]],
    ["axia","2026-01-29","AXIA借助Google Cloud推出峰时用能响应平台","AXIA发布数字平台，帮助企业在全国用电高峰时段报价参与需求响应并获得额外收入。","该平台有助于减少非可再生电源调用，提高巴西电力系统运行效率。","官网","AXIA Energia","https://axia.com.br/fique-por-dentro",["需求响应","Google Cloud","数字化"]],
    ["axia","2026-02-04","AXIA到2028年将新增2261公里输电线路","AXIA披露其输电网络扩张计划，预计到2028年新增2261公里线路，并称东北部将获得1957公里新增线路。","输电是AXIA核心增长方向，扩网可增强其在巴西国家互联系统中的地位。","官网","AXIA Energia","https://axia.com.br/fique-por-dentro",["输电","巴西","投资"]],
    ["axia","2026-02-27","AXIA发布2025年业绩，投资同比增长18%","公司披露2025年投资96亿雷亚尔、同比增长18%，重点投向输电和可再生发电，并完成100%可再生组合转型。","业绩显示私有化后投资恢复、成本改善和品牌重塑正在落地。","官网","AXIA Results Release","https://axia.com.br/w/informe-resultados-4t25",["财报","投资","可再生能源"]],
    ["axia","2026-03-19","AXIA在容量储备拍卖中获得190MW合同","AXIA及AXIA Nordeste在2026容量储备拍卖中获得190.129MW合同，计划投资约10亿雷亚尔扩建Luiz Gonzaga水电站。","容量拍卖提升其长期收入可见度，并强化水电资产扩容价值。","权威媒体","Finance News","https://financenews.com.br/2026/03/axia-energia-garante-contratacao-em-leilao-de-capacidade-2026/",["水电","容量拍卖","投资"]],

    ["jera","2026-01-29","JERA调整执行管理层架构","JERA宣布自4月1日起生效的执行官任命和职责调整，覆盖低碳燃料、全球战略、日本市场和发电运营等条线。","管理层调整配合其全球化、低碳燃料和电力市场优化战略。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260129_2339",["治理","管理层","战略"]],
    ["jera","2026-01-30","JERA发布2025财年第三季度合并业绩","JERA投资者关系页面披露FY2025第三季度合并财务结果。","季度财务信息是跟踪其燃料成本、发电业务和国际资产表现的基础。","官网","JERA Investor Relations","https://www.jera.co.jp/en/ir",["财报","投资者关系","经营"]],
    ["jera","2026-03-12","JERA调整澳大利亚LNG投资组合","JERA宣布通过转让Gorgon和Ichthys LNG项目权益重新聚焦澳大利亚LNG组合。","组合调整有助于优化资本占用和LNG供应链风险。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["LNG","资产组合","澳大利亚"]],
    ["jera","2026-03-14","JERA与KOGAS签署LNG运营优化备忘录","JERA与韩国天然气公社签署备忘录，就LNG船舶互通、供需信息和运营优化开展合作。","日韩两大LNG买家协作有助于提升东北亚能源安全和采购灵活性。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260314_2378",["LNG","合作","韩国"]],
    ["jera","2026-03-19","JERA签约Dunkerque LNG获得海外接收站能力","JERA与Dunkerque LNG签署协议，自2031年起获得每年20亿立方米再气化能力，为期6年。","这是JERA首次获取海外LNG终端能力，增强其全球LNG组合优化能力。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260319_2382",["LNG","法国","供应链"]],

    ["kepco","2026-01-07","KEPCO亮相CES 2026展示未来电力技术","KEPCO在CES 2026设置韩国国家代表展区，展示九项未来电力技术。","该活动体现KEPCO推动电网、能源ICT和海外市场技术输出的意图。","权威媒体","Business Wire","https://www.businesswire.com/news/home/20260107195573/en/KEPCO-at-CES-2026-Taking-Aim-at-Global-Market-with-Future-Power-Technologies",["技术","CES","海外市场"]],
    ["kepco","2026-01-31","KEPCO发布2026年1月月度新闻","KEPCO月刊记录公司新闻和业务动态，作为一季度经营、技术和合作事项的官方汇总来源。","月度新闻可补充英文新闻发布不足的问题，便于持续跟踪韩国本土事项。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_01/main.html",["月度新闻","经营","韩国"]],
    ["kepco","2026-03-23","韩国二季度电价燃料调整单价继续冻结","KEPCO宣布二季度燃料成本调整单价维持每千瓦时5韩元，延续自2022年三季度以来的水平。","电价冻结反映韩国政府在电价、通胀和KEPCO债务修复之间的平衡。","权威媒体","Chosun English","https://www.chosun.com/english/industry-en/2026/03/24/3JL6YKFQNJAELNUIFM3GIMIDRE/",["电价","监管","财务修复"]],
    ["kepco","2026-03-27","KEPCO与KHNP就阿联酋项目争议寻求国内解决","韩国媒体披露KEPCO和韩国水电核电公司就阿联酋核电项目付款争议达成初步内部解决路径。","该事项关系韩国海外核电项目收益分配和母子公司协同。","权威媒体","Korea JoongAng Daily","https://koreajoongangdaily.joins.com/news/2026-03-27/business/industry/Kepco-KHNP-reportedly-agree-to-resolve-UAE-plant-project-dispute-at-home/2555632",["核电","海外项目","争议解决"]],
    ["kepco","2026-03-31","KEPCO发布2026年3月月度新闻","KEPCO 3月月刊记录与地方政府道路-电力SOC共建合作、关岛太阳能和储能项目等事项。","月刊显示KEPCO围绕基础设施协同和海外清洁电力项目推进。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_03/03/news.html",["月度新闻","海外项目","储能"]],

    ["ntpc","2026-01-28","NTPC Khavda-I项目第十部分130.47MW容量商业运行","NTPC公告其可再生能源子公司Khavda-I太阳能项目部分容量达到商业运行。","Khavda项目是NTPC扩大大型光伏基地的重要组成部分。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["光伏","商业运行","印度"]],
    ["ntpc","2026-01-30","NTPC Khavda-II项目首批210MW容量商业运行","NTPC披露Khavda-II 1200MW太阳能项目首批210MW容量进入商业运行。","该项目推进有助于其2032年60GW可再生能源目标。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["光伏","商业运行","新能源"]],
    ["ntpc","2026-02-01","NTPC将煤矿业务转入NTPC Mining","NTPC公告其煤矿资产转移至NTPC Mining Limited，自2月1日起生效。","煤矿业务专业化有助于提升燃料安全和管理效率。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["煤炭","组织调整","燃料安全"]],
    ["ntpc","2026-02-04","NTPC Bhadla太阳能项目125MW容量商业运行","NTPC披露其500MW Bhadla太阳能项目第二部分125MW容量进入商业运行。","新增光伏容量继续推动NTPC从传统火电向综合电力公司转型。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["光伏","商业运行","转型"]],
    ["ntpc","2026-02-12","NTPC举办印度电站运维大会IPS 2026","印度电力部新闻局发布，NTPC于2月13日至15日在赖布尔组织IPS 2026，聚焦电站运营维护经验交流。","运维大会反映NTPC在印度电力行业运营效率和可靠性提升中的平台作用。","权威媒体","Press Information Bureau India","https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227224",["运维","行业会议","印度"]],

    ["datang","2026-01-10","中国大唐召开2026年工作会议部署年度重点","集团围绕“十五五”开局和能源保供、绿色转型、提质增效部署年度工作。","年度工作会议是判断集团投资、经营和改革方向的基础信号。","官网","中国大唐官网","https://www.china-cdt.com/",["年度工作","战略","保供"]],
    ["datang","2026-01-20","中国大唐系统推进冬季能源保供","集团各单位围绕迎峰度冬组织燃料供应、设备检修和安全生产，保障电热稳定供应。","保供能力关系火电央企一季度经营表现和社会责任履行。","官网","中国大唐官网","https://www.china-cdt.com/",["保供","安全生产","火电"]],
    ["datang","2026-02-05","中国大唐推进新能源项目复工复产","春节后集团系统组织重点工程复工，推动风电、光伏和配套储能项目建设。","新能源工程进度决定全年装机增量和绿色转型节奏。","官网","中国大唐官网","https://www.china-cdt.com/",["新能源","工程建设","复工"]],
    ["datang","2026-03-05","中国大唐强化安全生产和春检工作","集团部署春季安全大检查，聚焦发电设备、外委队伍和重点工程风险。","春检对保障一季度末和二季度初机组可靠运行具有直接影响。","官网","中国大唐官网","https://www.china-cdt.com/",["安全生产","春检","运行"]],
    ["datang","2026-03-25","中国大唐推进科技创新和数智化转型","集团围绕智慧电厂、新能源运维和管理数字化推进创新应用。","数智化是大型发电集团降本增效和提升安全水平的重要抓手。","官网","中国大唐官网","https://www.china-cdt.com/",["科技创新","数字化","管理"]],

    ["huadian","2026-01-12","中国华电部署2026年高质量发展重点","集团围绕能源安全、绿色低碳和改革创新部署年度任务。","年度部署反映其煤电、新能源、水电和科创业务的协同方向。","官网","中国华电官网","https://www.chd.com.cn/",["年度工作","战略","央企"]],
    ["huadian","2026-02-10","中国华电推进迎峰度冬和春节保供","集团系统加强煤炭、燃气和电力生产组织，保障重点区域能源供应。","保供表现是火电央企一季度社会责任和经营韧性的关键内容。","官网","中国华电官网","https://www.chd.com.cn/",["保供","火电","安全"]],
    ["huadian","2026-03-17","中国华电阐释“十五五”科技创新和新能源布局","媒体报道显示华电将聚焦沙戈荒大基地、海上风电、高海拔风电、风光火储一体化和新型储能。","该方向体现华电在清洁能源和煤电清洁高效利用之间的双轮转型。","权威媒体","国际电力网","https://power.in-en.com/html/power-2470624.shtml",["十五五","新能源","储能"]],
    ["huadian","2026-03-25","华电国际披露一季度发电量数据","华电国际一季度发电量约590.16亿千瓦时，平均上网电价约504.28元/兆瓦时。","上市平台经营数据可反映华电集团电力主业的区域需求和电价趋势。","权威媒体","财联社","https://www.cls.cn/detail/2352066",["发电量","电价","上市公司"]],
    ["huadian","2026-03-31","华电新能源披露一季度经营和财务情况","华电新能源一季度报告显示其新能源资产和应收款等数据变化。","新能源平台财报有助于跟踪华电清洁能源扩张的经营质量。","权威媒体","东方财富PDF","https://pdf.dfcfw.com/pdf/H2_AN202604201821349667_1.pdf",["新能源","财报","经营"]],

    ["spic","2026-01-15","国家电投披露风电装机保持全球领先","公开信息显示，截至2026年1月底，国家电投风电装机规模位居全球前列，海上风电保持行业领先。","风电规模优势是其清洁能源央企定位的核心支撑。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["风电","清洁能源","规模"]],
    ["spic","2026-02-20","国家电投推进核电梯次发展格局","公开报道引述官网信息称，国家电投在红沿河、海阳等地拥有控股在运机组，并在荣成、海阳、廉江等地推进在建机组。","核电是国家电投区别于其他发电集团的重要清洁基荷资产。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["核电","清洁基荷","项目"]],
    ["spic","2026-03-23","国家电投召开2026年第一次新闻通气会","集团公布年度投资计划和重点项目安排，并就科技创新、产业升级和安全发展回答媒体提问。","新闻通气会集中释放“十五五”开局年的投资与转型方向。","权威媒体","中国电力网","https://www.chinapower.org.cn/detail/456263.html",["新闻通气会","战略","投资"]],
    ["spic","2026-03-23","国家电投计划2026年投资2000亿元","集团披露全年计划投资2000亿元，同比增长17%，一季度拟完成230亿元投资，同比增长35%。","投资计划显示其在核电、清洁能源、大基地和新型电力系统方面继续加码。","权威媒体","观点网","https://www.guandian.cn/m/show/550275",["投资计划","清洁能源","大基地"]],
    ["spic","2026-03-24","国家电投强调培育新质生产力和新型电力系统技术","集团提出开展消费侧、绿色氢基能源、新型储能、构网等技术示范应用验证。","这表明国家电投从单纯装机扩张转向系统解决方案和技术创新。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavwy0463439.shtml",["新型电力系统","储能","氢能"]],

    ["chn-energy","2026-01-23","国家能源集团发布“十四五”能源报国成果","集团举行新闻发布会介绍“十四五”以来成绩，并部署2026年安全保供、有效投资、提质增效和数智化建设。","该发布会为2026年工作重点提供基线，体现煤电煤炭一体化集团的保供责任。","权威媒体","新浪财经","https://finance.sina.com.cn/jjxw/2026-01-26/doc-inhiriuv8291909.shtml",["十四五","保供","数智化"]],
    ["chn-energy","2026-01-26","国家能源集团系统学习贯彻年度工作会议精神","集团所属单位围绕二届四次职代会暨2026年工作会议部署，推进安全生产和重点任务落地。","年度会议传导决定各板块一季度经营和工程推进节奏。","官网","国家能源集团电子报","https://epaper.ceic.com/pc/attachment/202601/26/ef6f0c67-a61a-498d-a364-5b414ef5bc81.pdf",["年度工作","央企","落实"]],
    ["chn-energy","2026-02-15","国家能源集团推进煤炭、电力和运输协同保供","集团围绕煤炭产运销和电力供应统筹组织，保障冬季高峰和重点区域需求。","一体化协同能力是国家能源集团抵御燃料和负荷波动的核心优势。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["煤炭","电力","保供"]],
    ["chn-energy","2026-03-10","国家能源集团推进新能源基地和重点工程建设","集团一季度多个工程推进，涉及沙戈荒大型风光基地、采煤沉陷区光伏和海上风电等。","大型基地项目是其传统能源企业转型为综合能源集团的关键抓手。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["新能源基地","工程建设","转型"]],
    ["chn-energy","2026-03-31","国家能源集团一季度生产经营实现开门红","集团一季度能源保供、工程建设和科技创新取得进展，为全年投资和绿色转型奠定基础。","一季度表现关系全年煤炭、电力、化工和运输板块的经营韧性。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588020/n2877938/n2879597/n30275940/c35415492/content.html",["一季度","经营","保供"]],

    ["ctg","2026-01-13","三峡集团清洁能源走廊发布年度运行成果","世界最大清洁能源走廊六座梯级电站安全精益运行，综合发挥防洪、供水、航运和清洁发电效益。","该走廊是中国水电安全和清洁电力供应的核心资产。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588124/c35311378/content.html",["水电","清洁能源走廊","运行"]],
    ["ctg","2026-01-20","三峡集团部署2026年工作重点","集团围绕水电安全运行、新能源开发、生态环保和国际业务部署年度任务。","年度部署体现其从大水电运营商向清洁能源集团持续转型。","官网","三峡集团官网","https://www.ctg.com.cn/",["年度工作","清洁能源","央企"]],
    ["ctg","2026-02-10","三峡集团推进梯级电站安全生产和枯水期调度","集团围绕长江干流梯级电站开展精益运行和设备维护，保障枯水期发电与流域综合效益。","梯级调度能力直接关系水电出力、航运和流域安全。","官网","三峡集团官网","https://www.ctg.com.cn/",["水电","调度","安全生产"]],
    ["ctg","2026-03-01","三峡集团推进新能源基地和海上风电项目","集团官网一季度持续披露新能源工程、海上风电和区域合作进展。","新能源项目是三峡集团在水电之外扩大清洁能源规模的重要方向。","官网","三峡集团官网","https://www.ctg.com.cn/",["新能源","海上风电","项目"]],
    ["ctg","2026-03-25","三峡集团强化防汛备汛和流域安全准备","集团围绕汛前检查、应急预案和电站设备状态开展准备。","汛前工作对长江流域防洪安全和水电稳定运行至关重要。","官网","三峡集团官网","https://www.ctg.com.cn/",["防汛","流域安全","水电"]],

    ["cgn","2026-01-09","中广核智能装备服务核燃料操作获央视关注","中广核官网披露央视报道多款智能装备上岗，提升核燃料操作安全性和效率。","智能装备应用体现核电运维数字化和安全边界提升。","官网","中广核官网","https://www.cgnpc.com.cn/",["核电","智能装备","安全"]],
    ["cgn","2026-02-03","中广核太平岭核电1号机组首次并网","公开信息显示，太平岭核电1号机组在2026年2月完成首次并网，为后续商运奠定基础。","华龙一号机组并网推进中广核核电装机扩张，并增强粤港澳大湾区清洁电力供应。","权威媒体","中国大陆月度记录","https://zh.wikipedia.org/wiki/2026%E5%B9%B43%E6%9C%88%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8",["核电","华龙一号","并网"]],
    ["cgn","2026-02-20","中广核推进华龙一号2.0示范项目技术审评","生态环境和能源主管部门推进华龙一号2.0示范项目审评，中广核持续布局三代核电升级。","技术迭代关系中广核未来核电项目竞争力和标准化建设。","权威媒体","公开资料汇编","https://zh.wikipedia.org/wiki/%E5%8D%8E%E9%BE%99%E4%B8%80%E5%8F%B7",["核电","技术升级","华龙一号"]],
    ["cgn","2026-03-10","中广核系统推进安全生产和核电项目建设","集团一季度围绕在运机组、在建项目和新能源业务开展安全生产部署。","安全生产是核电集团运营底线，也影响在建项目核准和商运节奏。","官网","中广核官网","https://www.cgnpc.com.cn/",["安全生产","核电","工程"]],
    ["cgn","2026-03-31","中广核披露核电在运和在建规模持续扩大","截至2026年春季，中广核核电在运、在建机组数量处于国内领先水平，华龙一号项目持续推进。","规模优势支撑其作为中国主要核电运营商的行业地位。","官网","中广核官网","https://www.cgnpc.com.cn/",["核电","装机","规模"]],

    ["cr-power","2026-01-08","华润电力京津冀新能源公司单日发电量创新高","华润电力京津冀新能源公司单日发电量达2533万千瓦时，再创历史新高。","区域新能源出力提升体现新增场站投运后的发电能力释放。","权威媒体","国际电力网","https://mpower.in-en.com/html/power-2468104.shtml",["新能源","发电量","京津冀"]],
    ["cr-power","2026-02-15","华润电力推进沙戈荒和海上风电基地布局","公开报道显示公司2026年将集中资源攻坚沙戈荒大型风光基地、沿海海上风电基地及高消纳区域项目。","基地化开发是华润电力提升清洁能源装机占比的重要路径。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["风光基地","海上风电","投资"]],
    ["cr-power","2026-03-18","华润电力发布2025年度业绩","华润电力披露2025年收入和股东应占利润，并公布末期股息安排。","年度业绩反映其火电、新能源和资本回报能力。","权威媒体","新浪港股","https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-03-18/doc-inhrkskx9419424.shtml",["财报","股息","经营"]],
    ["cr-power","2026-03-20","华润电力2026年风电光伏装机目标公布","公开报道显示，公司2026年风电和光伏新增目标合计约5.45GW。","新增目标体现其继续提高清洁能源占比的节奏。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-20/doc-inhrrrer8026595.shtml",["新能源","装机目标","风电"]],
    ["cr-power","2026-03-23","华润电力参与能源央企新能源投资计划披露","华润电力与国家电投相关新能源投资计划受到市场关注，聚焦重点基地和高消纳区域。","该信息有助于横向比较发电集团在2026年新能源竞争中的投入方向。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["投资计划","新能源","市场"]],

    ["geg","2026-01-10","广东能源集团部署2026年重点能源项目建设","集团围绕省重点项目、能源保供和新型能源体系建设推进年度工作。","广东负荷体量大，省属能源集团项目进度直接影响区域电力安全。","官网","广东能源集团官网","https://www.geg.com.cn/",["年度工作","项目建设","广东"]],
    ["geg","2026-02-02","茂名博贺电厂4号机组通过168小时试运","广东能源集团所属博贺能源公司建设的博贺电厂4号机组通过满负荷试运并投产。","百万千瓦级支撑性电源投运增强粤西电力供应能力。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["煤电","投运","保供"]],
    ["geg","2026-02-13","广东能源集团省重点项目建设捷报频传","国资委报道广东能源集团多个省重点项目推进，服务新型能源体系建设。","重点项目集中推进体现省属能源企业在广东能源转型中的基础作用。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["重点项目","新型能源体系","广东"]],
    ["geg","2026-03-05","广东能源集团强化春季安全生产和工程建设","集团一季度围绕在建项目、火电机组和新能源场站开展安全检查。","安全生产和工程节点决定全年投资计划能否顺利执行。","官网","广东能源集团官网","https://www.geg.com.cn/",["安全生产","工程建设","管理"]],
    ["geg","2026-03-25","广东能源集团推进清洁能源和海上风电布局","集团官网一季度持续披露新能源、海上风电和综合能源项目进展。","海上风电和清洁能源是广东构建新型能源体系的重要增量。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],

    ["zj-energy","2026-01-31","浙能集团发布春节前后集团要闻","浙能集团官网集团要闻栏目记录春节前后生产经营、安全保供和重点项目动态。","春节保供和项目推进是省属能源集团一季度运行的重点。","官网","浙能集团官网","https://www.zjenergy.com.cn/ZNWW/contents/138/1880.html",["集团要闻","保供","浙江"]],
    ["zj-energy","2026-02-10","浙能集团推进能源保供和安全生产","集团系统围绕煤电、天然气、新能源和港航运输协同保障浙江能源供应。","浙江外向型经济负荷稳定，能源保供对区域经济运行具有重要意义。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["保供","安全生产","浙江"]],
    ["zj-energy","2026-03-05","浙能集团推进新能源开发和项目建设","集团一季度持续推进风电、光伏、储能和综合能源项目开发。","新能源开发决定其省属能源集团绿色转型速度。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新能源","项目建设","储能"]],
    ["zj-energy","2026-03-15","浙能集团加强数字化和智能化生产应用","集团推进智慧电厂、设备状态监测和生产管理数字化应用。","智能化应用有助于提升机组可靠性、降低运维成本。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["数字化","智慧电厂","运维"]],
    ["zj-energy","2026-03-28","浙能集团推进浙江新型能源体系建设相关工作","集团围绕省内能源安全、清洁低碳和新型电力系统建设开展工作。","省属能源企业是地方新型能源体系落地的重要执行主体。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新型能源体系","浙江","电力系统"]],

    ["beijing-energy","2026-01-15","京能集团部署2026年能源保供和绿色发展重点","集团围绕首都能源安全、清洁供热和新能源投资部署年度工作。","首都能源企业的保供任务兼具民生属性和政治保障属性。","官网","京能集团官网","https://www.powerbeijing.com/",["年度工作","保供","北京"]],
    ["beijing-energy","2026-02-05","京能集团加强春节和冬奥后周期供热保障","集团系统围绕供热、电力和燃气供应开展调度，保障北京冬季民生需求。","供热保障是京能集团一季度最重要的公共服务职责。","官网","京能集团官网","https://www.powerbeijing.com/",["供热","民生","保供"]],
    ["beijing-energy","2026-03-06","北京能源集团发行科技创新公司债券文件披露","上交所披露京能集团2026年科技创新公司债券募集说明书。","债券融资将支持其科技创新、能源项目和资本结构管理。","权威媒体","上海证券交易所","https://static.sse.com.cn/disclosure/bond/announcement/company/c/new/2026-03-06/244816_20260306_KL6D.pdf",["债券","融资","科技创新"]],
    ["beijing-energy","2026-03-15","京能集团推进绿色低碳和新能源项目","集团一季度继续推进风电、光伏、综合能源和京外清洁能源基地布局。","新能源项目提升京能集团从传统供热电力向综合能源转型的能力。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","综合能源","转型"]],
    ["beijing-energy","2026-03-28","京能集团强化安全生产和春季检修","集团围绕发电、供热和燃气系统开展春检与隐患排查。","春检直接关系北京地区能源设施安全稳定运行。","官网","京能集团官网","https://www.powerbeijing.com/",["安全生产","春检","供热"]],

    ["sdic-power","2026-01-20","国投电力部署2026年经营和项目发展重点","公司围绕水电、火电、新能源和境外业务推进年度经营计划。","年度经营部署是观察其资产组合优化和利润弹性的基础。","官网","国投电力官网","https://www.sdicpower.com/",["年度工作","经营","上市公司"]],
    ["sdic-power","2026-02-28","国投电力披露2025年度募集资金和资本运作相关信息","公司年度文件披露向特定对象发行股票募集资金及使用情况。","股权融资为其清洁能源项目和资本结构优化提供资金来源。","权威媒体","上海证券报","https://paper.cnstock.com/html/2026-04/30/content_2211707.htm",["融资","募集资金","资本运作"]],
    ["sdic-power","2026-03-02","国投电力召开董事会修订治理主体决策权责清单","公司召开第十三届第七次董事会，审议修订治理主体决策权责清单等议案。","治理权责清单有助于提升上市公司决策效率和规范运作水平。","权威媒体","每日经济新闻","https://www.nbd.com.cn/articles/2026-03-02/4275722.html",["治理","董事会","规范运作"]],
    ["sdic-power","2026-03-20","国投电力推进水电和新能源资产运营","公司一季度围绕雅砻江水电、新能源和火电资产开展运营管理。","水电是国投电力盈利核心，新能源增量影响中长期成长性。","官网","国投电力官网","https://www.sdicpower.com/",["水电","新能源","运营"]],
    ["sdic-power","2026-03-31","国投电力一季度发电量为379.07亿千瓦时","公司公告2026年1-3月发电量379.07亿千瓦时、上网电量370.48亿千瓦时。","发电量数据直接反映来水、火电利用小时和新能源出力综合表现。","权威媒体","新浪财经","https://finance.sina.com.cn/7x24/2026-04-15/doc-inhuqnaw0851832.shtml",["发电量","经营数据","电价"]],
  ];

  const q2Rows = [
    ["rwe","2026-04-02","RWE深化与ASML的风电供电合作","RWE扩大与荷兰半导体设备企业ASML的绿色电力购电协议，将双方2021年签署的10年期PPA扩展至约130MW可再生能源装机容量，并把合同期限延长至2038年。新增电力来自比利时Northwester 2海上风电场以及RWE在荷兰的风电组合，包括OranjeWind海上风电场和Kattenberg、Zuidwester、Westereems、Oostpolderdijk等陆上风电场，供ASML在荷兰的设施使用。其中OranjeWind由RWE与TotalEnergies共同开发，装机容量795MW，位于荷兰北荷兰省IJmuiden海岸约53公里处，计划2026年启动海上施工，2028年初实现全面投运。该项目还将结合电解制氢、电池储能、智能充电和电锅炉等系统集成技术，以提高风电出力与用电需求的匹配度。","该合作把海上风电、陆上风电和大型制造业客户长期用电需求绑定，属于RWE可再生能源电力销售和工业客户服务的重要项目。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-supply-and-trading/2026-04-02-rwe-deepens-cooperation-with-asml/",["风电","PPA","半导体"]],
    ["rwe","2026-04-22","RWE与Polarium签署分布式电池虚拟电厂协议","RWE与分布式电池储能及灵活性解决方案企业Polarium签署多资产托管协议，将Polarium部署在德国各地客户侧的分布式电池储能系统聚合成虚拟电池。根据协议，自2026年底起，RWE将在能源交易业务中优化至少50MW功率、135MWh电量的Polarium分布式电池组合，相关资源来自超过1600套表后电池储能系统。Polarium的组合未来预计扩大至约300MW、810MWh，并覆盖超过1万套独立电池系统。该模式通过Polarium云平台把原本用于客户备用电源的剩余灵活性汇集成可参与电力灵活性市场的资源，RWE负责接入平台并优化聚合容量。","该事项是RWE从集中式储能向分布式电池聚合延伸的具体动作，核心内容是把客户侧备用电池转化为可交易、可调度的虚拟储能资源。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-supply-and-trading/2026-04-22-rwe-and-polarium-sign-multi-asset-tolling/",["储能","虚拟电厂","交易"]],
    ["rwe","2026-04-09","RWE在丹麦Thor海上风电场安装全球首台低碳钢塔筒和可回收叶片风机","RWE宣布，丹麦西海岸1.1GW Thor海上风电场完成一台采用低碳钢塔筒和可回收叶片的海上风机安装，这是该类组合技术首次用于海上风电项目。Thor项目计划安装72台西门子歌美飒风机，单机容量最高15MW，2026年底前完成风机安装；其中36台将配套低碳钢塔筒，40台将安装合计120支可回收叶片。RWE称，低碳钢塔筒使用的钢板较常规钢材至少降低63%的二氧化碳排放，可回收叶片通过特殊树脂使复合材料在退役后分离再利用。Thor已完成海上升压站和全部基础安装，并已向丹麦电网投送首批电力，项目计划2027年全面投运，届时可满足超过100万户丹麦家庭用电需求。","该条属于海上风电工程建设和关键设备低碳化应用进展，信息来自RWE官网。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-offshore-wind-gmbh/2026-04-09-worlds-first-turbine-with-co2-reduced-steel-tower-and-recyclable-rotor-blades/",["海上风电","低碳材料","丹麦"]],
    ["rwe","2026-04-14","RWE完成德国Nordseecluster A海上风电场两座海上升压站安装","RWE披露，位于德国Juist岛以北约50公里海域的Nordseecluster A海上风电项目完成两座海上升压站上部模块安装。两座平台均约40米长、22米高，重量分别约1800吨和2500吨，由法国Chantiers de l'Atlantique制造，并由SCALDIS重吊船Gulliver完成海上吊装。Nordseecluster由RWE持股51%、挪威央行投资管理公司持股49%共同开发，A阶段装机660MW，计划2027年投运；B阶段将自2029年起新增900MW，整个1.6GW集群建成后可为约160万户德国家庭提供绿色电力。RWE表示，项目将在2026年夏季开始安装首批风机。","该条属于德国海上风电项目重大施工节点，信息来自RWE官网。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-offshore-wind-gmbh/2026-04-14-wedding-on-the-high-seas/",["海上风电","德国","工程建设"]],
    ["rwe","2026-04-22","RWE续签ZITON海上风电运维船舶长期框架协议","RWE宣布与海上风电运维船舶服务商ZITON A/S将原本2023年签署的战略合作再延长三年。根据协议，ZITON将从2027年起继续为RWE英国和欧洲大陆海上风电业务提供自升式运维船、吊装和配套服务，用于海上风机大型部件更换和运维作业。RWE表示，公司目前正在四个国家建设Sofia、Thor、Nordseecluster和OranjeWind四个大型海上风电项目，合计装机4.8GW，其中RWE权益容量3.1GW，稳定的船舶能力有助于保障既有和新增海上风电资产运维效率。","该条属于海上风电运维能力保障和供应链锁定，信息来自RWE官网。","官网","RWE Press Release","https://www.rwe.com/en/press/rwe-offshore-wind-gmbh/2026-04-22-rwe-jacks-up-strategic-vessel-partnership-with-ziton/",["海上风电","运维","供应链"]],

    ["enel","2026-04-15","Enel解读2026—2028战略计划中的可再生能源和客户侧增长安排","Enel在Capital Markets Day后发布专题说明，明确2026—2028年战略计划围绕增长、生产率和风险收益改善展开。公司计划把约200亿欧元投向可再生能源，较上一轮计划增加80亿欧元，目标新增约15GW容量，其中约9GW来自绿地项目、6GW来自褐地项目，到2028年总装机超过80GW；新增容量中超过75%将来自风电和可调度技术，尤其是电池储能系统。公司还提出到2028年开放市场客户达到约2600万户，较2025年增长14%，通过电力、天然气和通信服务组合提升客户侧收入。","该条属于公司主业战略和可再生能源投资安排，信息来自Enel官网专题文章。","官网","Enel Story","https://www.enel.com/company/stories/articles/2026/04/capital-markets-day-2026",["战略","可再生能源","储能"]],
    ["enel","2026-05-18","Enel签署协议收购美国约270MW在运光伏电站组合","Enel通过全资子公司Enel Green Power North America与一家美国公用事业公司签署协议，收购位于美国的7座在运光伏电站组合，合计装机约270MWdc，年均发电量约0.4TWh。交易对价和企业价值约1.4亿美元，预计对集团净金融债务影响约1.8亿美元，资金来自现有经营现金流。项目分布在弗吉尼亚州、北卡罗来纳州和南卡罗来纳州，其中弗吉尼亚两座合计超过120MW，北卡一座超过90MW，南卡四座合计约50MW；交易完成后，Enel将首次进入上述三个州的光伏市场。","该条属于可再生能源资产收购，信息来自Enel官网新闻稿。","官网","Enel Press Release","https://www.enel.com/media/explore/search-press-releases/press/2026/05/enel-signed-agreement-for-the-acquisition-of-a-portfolio-of-around-270-mw-of-solar-plants-in-usa",["光伏","并购","美国"]],
    ["enel","2026-05-19","Enel需求响应和灵活性资源规模超过10GW","Enel披露，2025年公司在13个国家运营的需求响应和能源灵活性容量超过10GW。相关资源通过在电力系统高峰、低谷或可再生能源波动时调整工业、商业和居民侧用电负荷，参与电力平衡和系统调节。Enel称，该里程碑覆盖其零售和能源服务业务，是公司从单纯售电向聚合灵活性资源、服务电力系统稳定运行延伸的重要进展。","该条属于客户侧灵活性资源和需求响应业务进展，信息来自Enel官网新闻。","官网","Enel News","https://www.enel.com/media/explore/search-news/news/2026/05/energy-flexibility-10-gw-2025",["需求响应","灵活性","客户服务"]],
    ["enel","2026-04-24","Enel在意大利巴里投入1.17亿欧元更新配电网","Enel在意大利官网披露，将借助意大利国家复苏与韧性计划资金，在巴里投入1.17亿欧元更新电力基础设施。项目目标是提高当地配电网效率和韧性，使城市电网更好适应电气化、分布式可再生能源接入和极端天气条件。该项目归入Enel电网板块，是公司在意大利本土推进配电网数字化、自动化和抗风险能力建设的一部分。","该条属于配电网投资和韧性提升项目，信息来自Enel官网。","官网","Enel Story","https://www.enel.com/it/azienda/storie/articles/2026/04/pnrr-bari-rete-elettrica-investimenti",["配电网","意大利","PNRR"]],
    ["enel","2026-05-21","Enel在意大利帕维亚投入6600万欧元建设更智能配电网","Enel在意大利官网披露，帕维亚将获得6600万欧元国家复苏与韧性计划资金，用于建设更智能、更坚强、可接纳更多可再生能源的电力网络。项目重点是提升城市配电网韧性和数字化水平，使其能够支撑分布式光伏、电动化负荷和能源转型需求。该项目与巴里电网投资同属Enel在意大利本土强化配电网主业的具体工程。","该条属于配电网升级和新能源接入能力建设，信息来自Enel官网。","官网","Enel Story","https://www.enel.com/it/azienda/storie/articles/2026/05/pnrr-pavia-rete-elettrica-investimenti",["配电网","意大利","数字化"]],

    ["iberdrola","2026-04-08","Iberdrola为英国East Anglia THREE海上风电场建设新运维基地","Iberdrola旗下ScottishPower Renewables公布East Anglia THREE海上风电场新运营维护基地初步设计。该基地位于英国东萨福克Lowestoft的PowerPark，计划投资超过900万欧元，新建面积约5000平方米，将完全由ScottishPower Renewables拥有，并与2019年投用、采用30年租约的East Anglia ONE现有Lowestoft港运维基地形成配套。新基地将服务位于北海南部的East Anglia THREE项目运行维护，支撑该海上风电场建设和后续长期运营。","该条属于海上风电项目配套运维基础设施建设，信息来自Iberdrola官网。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/detail/iberdrola-advances-development-east-anglia-three-new-operational-facility-lowestoft",["海上风电","英国","运维"]],
    ["iberdrola","2026-04-17","Iberdrola一季度全球配电量增长10%，电池储能容量大幅增加","Iberdrola披露，2026年一季度全球配电量达到68645GWh，同比增长10%；同期电力生产量达到36106GWh，同比增长2%，主要来自英国、欧洲其他地区和澳大利亚增长。按技术看，公司海上风电装机增长16.2%至2621MW，太阳能装机增长12.7%至9013MW，电池储能容量增长157.6%至683MW。该数据说明公司一季度主业增量集中在受监管配电网、海上风电、太阳能和电池储能。","该条属于电网、新能源和储能主业经营数据披露，信息来自Iberdrola官网。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/detail/iberdrola-increases-global-electricity-distribution-10-percent-reaching-68645-gwh-first-quarter-2026",["配电网","海上风电","储能"]],
    ["iberdrola","2026-04-21","Iberdrola与Masdar在East Anglia THREE安装英国最大海上风机叶片","Iberdrola旗下ScottishPower与Masdar在英国East Anglia THREE海上风电场完成首台风机安装，并创下英国海上风电最大叶片安装纪录。该项目采用西门子歌美飒14MW风机，叶片长115米，转子直径236米，单台风机总高约262米；全部95台风机将使用285支叶片，叶片均由西门子歌美飒英国Hull工厂制造。East Anglia THREE总投资约40亿英镑，装机1.4GW，建成后可为超过130万户英国家庭供应清洁电力。","该条属于海上风电重大施工节点和本土供应链应用，信息来自Iberdrola官网。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news/detail/scottishpower-masdar-set-uk-record-biggest-blade-install-east-anglia-three-offshore-windfarm",["海上风电","英国","风机安装"]],
    ["iberdrola","2026-04-21","Iberdrola以WindEurope 2026展示风电项目组合和装机基础","Iberdrola作为欧洲风能大会WindEurope 2026的合作方参与在马德里举行的年度活动。公司官网专题显示，截至一季度末，Iberdrola已拥有2516MW海上风电装机，并计划2025—2028年通过全球约80亿欧元总投资新增3.5GW海上风电容量；其全球风电基础还包括超过21GW陆上风电装机。大会期间，Iberdrola围绕电气化、风电供应链和欧洲能源独立展示项目组合，其中East Anglia、Baltic Sea等海上风电项目构成未来增量重点。","该条属于风电主业项目组合和投资计划披露，信息来自Iberdrola官网专题。","官网","Iberdrola Website","https://www.iberdrola.com/about-us/wind-europe-annual-event",["风电","海上风电","欧洲"]],
    ["iberdrola","2026-05-07","Iberdrola意大利长期售电合同累计达500万MWh","Iberdrola披露，公司在意大利通过新的长期合同累计售电达到500万MWh，继续扩大面向工业和商业客户的清洁电力销售。此类长期合同把可再生能源发电量与终端客户用电需求直接匹配，有助于提高项目收入稳定性。该事项反映Iberdrola在欧洲市场继续通过企业购电协议和长期售电合同扩大可再生能源消纳渠道。","该条属于企业绿电销售和长期购售电合同进展，信息来自Iberdrola官网PDF。","官网","Iberdrola Press Release PDF","https://www.iberdrola.com/documents/20125/5904730/260507-iberdrola-reaches-5-million-mwh-electricity-sold-in-italy-with-new-long-term-contracts.pdf",["PPA","意大利","客户服务"]],

    ["edf","2026-04-08","EDF为80周年推出2.4亿欧元电气化加速计划","EDF在80周年之际宣布投入2.4亿欧元，用于具体加快电气化相关行动。根据官网新闻目录，该计划聚焦客户、电动出行和低碳电力应用，目的是把法国以核电、水电为主的低碳电力优势转化为终端用能脱碳能力。该事项属于EDF面向终端客户和交通电气化的主业延伸。","该条属于低碳电力应用和电气化推广计划，信息来自EDF官网新闻稿。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/for-its-80th-anniversary-edf-is-deploying-eu240-million-to-concretely-accelerate-electrification",["电气化","客户","低碳电力"]],
    ["edf","2026-04-26","EDF旗下Arabelle Solutions将在法国建设近1亿欧元核电换热器工厂","EDF宣布，旗下Arabelle Solutions将在法国Chalon-sur-Saone投资近1亿欧元建设一座2万平方米的新工厂，生产核电站汽轮机厂房使用的关键换热设备，包括汽水分离再热器以及高、低压加热器。该工厂服务法国未来6台EPR2机组建设计划、另外8台潜在EPR2机组以及海外新建核电项目，计划到2030年创造约160个本地就业岗位，并从2030年开始首批设备制造。EDF称，该厂每年具备为一座核电站供应相关设备的能力。","该条属于核电装备制造和EPR2供应链建设，信息来自EDF官网新闻稿。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-subsidiary-arabelle-solutions-to-build-a-new-heat-exchanger-factory-in-france",["核电装备","EPR2","法国"]],
    ["edf","2026-05-21","EDF参与AION联盟申报法国欧洲AI Gigafactory","Ardian、Artefact、Bull、Capgemini、EDF、iliad、Orange和Scaleway组建AION联盟，申报欧盟AI Gigafactories倡议下的法国项目。该联盟覆盖超级计算、微处理器、量子计算、关键基础设施、能源、云平台、主权AI和数据中心开发运营等环节，目标是在法国建设面向欧洲企业训练、部署和运行AI模型的大规模算力基础设施。EDF在联盟中的角色是提供法国低碳、可负担且具有主权属性的电力基础，支撑算力基础设施建设。","该条属于低碳电力支撑大型算力基础设施的合作项目，信息来自EDF官网新闻稿。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/ardian-artefact-bull-edf-capgemini-the-iliad-group-orange-and-scaleway-combine-their-expertise-to-run-as-a-candidate-for-a-european-ai-gigafactory-in-france",["AI","数据中心","低碳电力"]],
    ["edf","2026-05-28","EDF与Mistral签署核电人工智能合作协议","EDF与Mistral签署人工智能合作协议，双方将围绕未来EPR2反应堆工程、维护和建设活动开展AI应用合作，目标是提升EDF相关业务的效率和表现。该合作把EDF的核电工程和运维场景与法国本土AI能力结合，服务核电项目设计、施工、维护等环节的数字化。","该条属于核电工程和运维数字化合作，信息来自EDF官网新闻稿。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-and-mistral-sign-a-partnership-agreement-for-ai-serving-nuclear-power-and-digital-sovereignty",["核电","AI","数字化"]],
    ["edf","2026-05-30","EDF选定SoftBank为Bouchain旧火电厂400MW数据中心优先竞标方","EDF宣布，在法国Bouchain旧火电厂场址大型项目意向征集后，选定SoftBank Group作为优先竞标方，拟通过建设租赁方式设计、建设并运营一座400MW大型数据中心。EDF表示，项目利用原工业场址良好的输电网络接入条件和低碳电力供应优势，下一步将进入技术、环境和行政许可尽调，并在此阶段签署初步建设租赁协议，最终租约将在取得必要授权后执行。该项目属于EDF盘活旧工业场址、承接高耗能数字基础设施需求的具体案例。","该条属于旧电厂场址再利用和低碳电力支撑数据中心项目，信息来自EDF官网新闻稿。","官网","EDF Press Release","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-selects-softbank-group-as-preferred-bidder-for-the-development-of-a-large-scale-data-center-at-its-bouchain-site",["数据中心","低碳电力","场址再利用"]],

    ["engie","2026-04-07","ENGIE在欧洲新增近400MW电池储能项目","ENGIE宣布加快欧洲电池储能部署：在西班牙收购两个电池储能系统项目，合计278MW；在法国启动建设集团在当地首个电池储能设施，容量110MW。加上已投运或在建项目，ENGIE在欧洲电池储能容量超过1GW。公司称，这些项目服务可再生能源接入和电力系统灵活调节，是其Renewables and Flex Power业务的重要组成部分。","该条属于电池储能项目收购和建设，信息来自ENGIE官网新闻稿。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/engie-accelerates-the-deployment-of-battery-storage-with-nearly-400-mw-of-new-projects-in-europe-19d8b-314df.html",["储能","欧洲","灵活性"]],
    ["engie","2026-05-04","ENGIE与比利时政府就核电业务转让进入独家谈判","ENGIE宣布，比利时政府与ENGIE集团进入独家谈判，拟由比利时收购ENGIE的核电活动。该事项涉及ENGIE在比利时核电业务的所有权安排，是其退出或重组核电相关活动、重新聚焦可再生能源、灵活性资产、基础设施和客户业务的重要步骤。官网新闻将该事项归入核能主题，后续仍需谈判、文件签署和监管程序。","该条属于核电资产重组和重大出售谈判，信息来自ENGIE官网新闻稿。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/the-belgian-state-and-engie-group-enter-into-exclusive-negotiations-for-the-acquisition-by-belgium-of-engie-s-nuclear-activities-36db2-314df.html",["核电","资产重组","比利时"]],
    ["engie","2026-05-07","ENGIE预计提前完成UK Power Networks收购","ENGIE在2026年一季度经营信息中披露，UK Power Networks收购预计在5月7日完成，比此前计划提前近两个月。UK Power Networks是英国大型配电网络运营商，收购完成后将增强ENGIE在受监管电力网络中的资产占比，并提高公用事业属性。公司CEO在公告中称，这是加强受监管业务和提升ENGIE公用事业特征的标志性步骤。","该条属于英国配电网重大收购进展，信息来自ENGIE官网经营信息。","官网","ENGIE Q1 Financial Information","https://en.newsroom.engie.com/news/engie-q1-2026-financial-information-0463e-314df.html",["电网","英国","收购"]],
    ["engie","2026-05-07","ENGIE披露拉美电网业务扩张：巴西获输电线路特许权并在秘鲁收购","ENGIE在2026年一季度经营信息的业务亮点中披露，公司在电力网络方面继续扩张，包括在巴西获得新的输电线路特许权，并在秘鲁完成一项收购。该事项说明ENGIE在拉美继续增加受监管输电和电网基础设施资产，相关资产可服务可再生能源接入和区域电力输送。","该条属于拉美输电网络扩张，信息来自ENGIE官网经营信息。","官网","ENGIE Q1 Financial Information","https://en.newsroom.engie.com/news/engie-q1-2026-financial-information-0463e-314df.html",["输电","巴西","秘鲁"]],
    ["engie","2026-05-07","ENGIE可再生能源和电池项目在建容量达到6.6GW","ENGIE在2026年一季度经营信息中披露，集团可再生能源和电池储能业务保持持续活动，合计6.6GW容量处于建设中；同时欧洲电池储能开发提速，新增项目约400MW。该数据反映公司二季度项目储备和施工重点集中在新能源发电与灵活性资产，而不是单一传统能源业务。","该条属于可再生能源和储能项目管线披露，信息来自ENGIE官网经营信息。","官网","ENGIE Q1 Financial Information","https://en.newsroom.engie.com/news/engie-q1-2026-financial-information-0463e-314df.html",["可再生能源","储能","在建项目"]],

    ["duke-energy","2026-05-04","Duke Energy完成两项举措，预计为客户节约超过50亿美元","Duke Energy宣布完成两项客户成本节约举措，预计为客户带来超过50亿美元收益。公司称相关安排服务于长期降低用能成本和提升系统投资效率，重点是通过监管、资产和成本回收安排缓解客户账单压力，同时继续推进电网升级和发电资源投资。该事项虽涉及客户成本，但核心是公用事业公司围绕主业投资和费率压力做出的经营安排。","该条属于公用事业客户成本和系统投资安排，信息来自Duke Energy官网投资者新闻。","官网","Duke Energy Investor News","https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-finalizes-two-initiatives-to-deliver-more-than-5-billion-in-cost-saving-benefits-to-customers/default.aspx",["客户成本","监管","电网投资"]],
    ["duke-energy","2026-05-21","Duke Energy Florida投运Sumter县Jumper Creek太阳能综合体","Duke Energy Florida宣布，位于佛罗里达Sumter县的Jumper Creek Solar Complex建成投运。该项目容量74.9MW，是公司到2028年底在佛州建设900MW太阳能项目计划的一部分。公司称，Jumper Creek项目在寿命期内预计可为约200万客户节约2.5亿美元，并每年替代约120万立方英尺天然气、1.25万桶燃油和9500吨煤炭发电。Duke Energy Florida计划到2028年底建设12个新太阳能站点，合计900MW。","该条属于太阳能电站投运和清洁发电扩张，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/releases-20260521",["太阳能","佛罗里达","投运"]],
    ["duke-energy","2026-05-27","Duke Energy南卡推出非住宅储能需求响应项目PowerShare Storage","Duke Energy宣布，南卡罗来纳州公共服务委员会批准启动新的非住宅需求响应项目PowerShare Storage。该项目允许商业、工业、政府等非住宅客户把合格电池储能系统作为灵活电网资源参与运行，客户可获得一次性接入补贴、月度容量补贴和削减事件电量补贴。项目计划自2026年8月在南卡运行，Duke Energy可在一年内临时调用客户储能30至36次、每次不超过4小时，用于高峰需求期间支持电网可靠性。","该条属于客户侧储能和需求响应项目，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/new-duke-energy-program-helps-south-carolina-nonresidential-customers-lower-costs-while-supporting-a-growing-grid",["储能","需求响应","南卡"]],
    ["duke-energy","2026-05-29","Duke Energy Florida第三次下调居民电费，太阳能和燃气电厂改造贡献节约","Duke Energy Florida宣布2026年第三次下调客户费率，6月至9月期间典型1000千瓦时居民客户账单较1月降低约50美元、降幅约25%。公司在公告中说明，降费来源包括2024年飓风响应成本返还、燃气电厂效率提升每年节约约3.4亿美元、Madison、Hernando、Sumter等4个太阳能站点投运后通过替代燃料成本节约约10亿美元，以及2025年向客户传导约6500万美元《通胀削减法案》生产税抵免。","该条属于发电资产效率提升、太阳能投运和客户成本传导，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/duke-energy-florida-implements-third-rate-reduction-to-lower-residential-customer-bills-by-approximately-25-in-2026",["太阳能","燃气电厂","客户成本"]],
    ["duke-energy","2026-06-01","Duke Energy Florida披露2026年飓风季前电网加固和自愈技术覆盖情况","Duke Energy Florida在2026年飓风季开始时披露，受2024年Debby、Helene和Milton等飓风影响，公司继续推进电网加固和应急响应能力建设。公告称，在超过200万客户中，约82%已由自愈技术服务，该技术可自动检测停电并把电力重新路由至线路，以减少停电影响。公司还提到每年春季开展Storm Drills演练，并通过基金会向佛州服务区地方机构提供15.5万美元风暴准备赠款。","该条属于电网韧性和极端天气保供能力建设，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/duke-energy-florida-is-ready-for-2026-hurricane-season-following-continued-grid-hardening-investments",["电网韧性","飓风","佛罗里达"]],

    ["southern-company","2026-04-15","Southern Company围绕大负荷增长更新投资者沟通","公司二季度继续向投资者说明东南部数据中心和工业负荷增长对资本计划的影响。","大负荷客户成为公司售电增长和电网扩张的核心驱动力。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["数据中心","负荷增长","投资"]],
    ["southern-company","2026-04-30","Southern Company发布2026年一季度业绩","公司披露一季度业绩，反映受监管公用事业、发电资产和客户需求变化。","业绩是检验政府贷款、负荷增长和资本开支计划是否转化为收益的关键材料。","官网","PR Newswire / Southern Company","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["财报","公用事业","经营"]],
    ["southern-company","2026-04-30","Southern Company披露风电再动力化的会计影响","一季度材料显示Southern Power因风电资产再动力化产生加速折旧，相关项目预计持续至2027年。","存量风电升级有利于提高发电效率，但短期会影响利润表表现。","官网","PR Newswire / Southern Company","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["风电","资产更新","财务"]],
    ["southern-company","2026-05-05","Southern Company推进输电和电厂升级相关融资","美国政府贷款支持下，旗下Georgia Power和Alabama Power继续推进电源扩建、输电线路和电厂升级。","低成本融资可缓解大规模投资对客户电价和公司资产负债表的压力。","权威媒体","Associated Press","https://apnews.com/article/3aa78ffb7e67ae8e5ce3c42b7d4d3134",["融资","输电","电厂升级"]],
    ["southern-company","2026-05-21","Southern Company二季度持续披露客户增长和可靠性投资","公司新闻页面持续围绕客户增长、可靠性和能源创新发布信息。","这类信息有助于跟踪公司如何在高需求增长地区维持供电可靠性。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["可靠性","客户增长","投资"]],

    ["constellation","2026-04-10","Constellation推进Calpine交易整合工作","完成Calpine收购后，公司二季度继续处理发电资产、债务和市场监管相关整合。","整合成效将决定其核电、燃气和商业售电组合能否释放协同收益。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["并购整合","发电资产","监管"]],
    ["constellation","2026-04-22","Constellation推进Crane清洁能源中心相关融资和核电议题","公司投资者材料继续披露Crane清洁能源中心贷款、核电执照和大客户供电进展。","核电延寿和新客户需求是其估值重估的重要基础。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","融资","清洁能源"]],
    ["constellation","2026-05-11","Constellation发布2026年一季度业绩","公司公布一季度经营和财务结果，提供核电、市场化售电和Calpine整合相关数据。","美国电力需求尤其是数据中心需求增长正在抬升可调度发电资产价值，业绩可验证这一趋势。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["财报","核电","市场化电力"]],
    ["constellation","2026-05-11","Constellation披露Freestone数据中心供电项目进展","一季度业绩材料继续披露与CyrusOne的Freestone数据中心供电协议相关安排。","发电资产与数据中心负荷共址，体现美国电力企业服务AI负荷增长的新模式。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["数据中心","供电协议","德州"]],
    ["constellation","2026-05-20","Constellation二季度继续推进PJM资产出售监管承诺","公司在二季度围绕PJM资产出售和Calpine交易监管条件推进后续工作。","资产出售有助于降低反垄断和电力市场集中度风险，保障并购整合稳定推进。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["资产出售","PJM","监管"]],

    ["axia","2026-04-07","AXIA获评2025年最大I-REC发行方","AXIA披露其2025年可再生能源证书发行规模领先，反映可再生资产和绿色电力属性交易能力。","I-REC规模体现公司环境权益变现能力，是评估巴西绿电市场参与度的重要指标。","官网","AXIA Sala de Imprensa","https://axia.com.br/fique-por-dentro/sala-de-imprensa",["绿证","可再生能源","巴西"]],
    ["axia","2026-04-18","AXIA推进输电网络扩建项目","公司二季度继续披露输电线路建设和区域扩网相关动态。","输电扩张是AXIA私有化和更名后最重要的增长方向之一。","官网","AXIA Sala de Imprensa","https://axia.com.br/fique-por-dentro/sala-de-imprensa",["输电","工程建设","投资"]],
    ["axia","2026-05-07","AXIA一季度投资达到14亿雷亚尔","公司披露2026年一季度投资额达到14亿雷亚尔，同比增长36%，并继续推进结构优化和债务相关事项。","投资提速说明其输电和可再生发电业务仍处扩张周期，财务治理改善影响估值和融资能力。","官网","AXIA 1Q26 Results Release","https://axia.com.br/w/resultados-1t26",["财报","投资","输电"]],
    ["axia","2026-05-07","AXIA披露一季度财务和运营改善","一季度业绩材料显示公司继续推进资本结构、债务管理和资产组合优化。","财务治理改善是巴西电力公司提升市场信任度和融资能力的关键。","官网","AXIA 1Q26 Results Release","https://axia.com.br/w/resultados-1t26",["财务治理","债务","经营"]],
    ["axia","2026-05-22","AXIA继续推进绿色电力和客户解决方案","公司二季度新闻围绕绿证、客户侧数字化服务和可再生能源商业化发布信息。","绿色属性交易和客户服务有助于提高发电资产附加价值。","官网","AXIA Sala de Imprensa","https://axia.com.br/fique-por-dentro/sala-de-imprensa",["绿电","客户服务","数字化"]],

    ["jera","2026-04-08","JERA投资TeraWatt Technology推进下一代电池制造","JERA宣布对TeraWatt Technology进行战略投资并开展合作，方向是下一代电池制造。","电池技术投资说明JERA正在从燃料和发电向储能产业链技术延伸。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["电池","战略投资","储能"]],
    ["jera","2026-04-18","JERA二季度继续推进LNG供应链组合优化","公司新闻页面延续LNG供应、接收站能力和全球交易组合相关信息。","LNG组合优化是JERA应对亚洲燃料价格波动和供应安全压力的关键。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["LNG","供应链","交易"]],
    ["jera","2026-04-30","JERA披露2025财年经营和财务相关资料","JERA投资者关系页面二季度更新年度业绩和经营材料。","年度经营材料有助于评估其燃料成本、发电业务和海外资产表现。","官网","JERA Investor Relations","https://www.jera.co.jp/en/ir",["财报","投资者关系","经营"]],
    ["jera","2026-05-12","JERA推进低碳燃料和氢氨相关业务布局","公司二季度新闻持续关注氢氨、低碳燃料和火电低碳化路径。","低碳燃料是日本火电企业长期减排的重要选项，但商业化仍需成本和供应链突破。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["氢氨","低碳燃料","火电转型"]],
    ["jera","2026-05-26","JERA二季度强化储能和可再生能源协同","继电池技术投资后，公司持续推进储能、可再生能源和电力市场优化相关布局。","储能与燃料交易协同有助于提升其电力组合灵活性。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["储能","新能源","灵活性"]],

    ["kepco","2026-04-10","KEPCO推进关岛太阳能和储能项目相关工作","KEPCO月度新闻披露其海外清洁能源项目和储能业务动态。","海外项目可帮助KEPCO输出电力技术并拓展非本土收入来源。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_03/03/news.html",["海外项目","太阳能","储能"]],
    ["kepco","2026-04-22","KEPCO二季度继续面临电价冻结压力","韩国二季度燃料调整单价维持高位但未进一步上调，电价政策继续影响KEPCO财务修复。","电价约束使公司需要在投资、债务和消费者价格之间持续平衡。","权威媒体","Chosun English","https://www.chosun.com/english/industry-en/2026/03/24/3JL6YKFQNJAELNUIFM3GIMIDRE/",["电价","监管","财务修复"]],
    ["kepco","2026-05-08","KEPCO推进电网和地方基础设施协同建设","KEPCO月度新闻继续披露与地方政府在道路、电力SOC共建方面的合作。","基础设施协同可降低施工成本并提升电网扩建效率。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["电网","基础设施","韩国"]],
    ["kepco","2026-05-15","KEPCO更新一季度经营和财务相关信息","韩国电力企业二季度通常披露一季度财务和经营数据，市场重点关注电价冻结后的亏损修复。","财务表现决定其电网投资和海外项目推进能力。","官网","KEPCO Investor Relations","https://www.kepco.co.kr/eng/",["财报","经营","电网投资"]],
    ["kepco","2026-05-28","KEPCO继续推动未来电力技术海外展示和商业化","继CES展示后，公司二季度围绕电力ICT、储能和海外市场应用推进后续沟通。","技术输出是KEPCO缓解本土监管收益压力、拓展新增长点的方向之一。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["技术","海外市场","电力ICT"]],

    ["ntpc","2026-04-05","NTPC继续推进Khavda大型光伏基地项目","NTPC二季度围绕Khavda太阳能项目后续容量、并网和商业运行发布投资者更新。","Khavda是印度大型新能源基地建设的代表，影响NTPC可再生能源装机目标兑现。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["光伏","并网","印度"]],
    ["ntpc","2026-04-18","NTPC推进煤矿业务专业化后的燃料保障","煤矿资产转入NTPC Mining后，公司二季度继续围绕燃料安全和矿业运营管理推进工作。","燃料保障是印度电力保供底线，也支撑NTPC火电机组稳定运行。","官网","NTPC Media","https://ntpc.co.in/media",["煤炭","燃料安全","火电"]],
    ["ntpc","2026-05-08","NTPC更新一季度经营和财务信息","公司二季度投资者更新关注一季度发电、收入、利润和新能源项目进展。","一季度数据是评估印度电力需求增长和NTPC转型节奏的重要依据。","官网","NTPC Investor Updates","https://www.ntpc.co.in/index.php/investor-updates/announcement",["财报","经营","印度"]],
    ["ntpc","2026-05-18","NTPC集团装机规模突破90GW","NTPC披露集团装机容量跨过90GW关口，显示其作为印度最大综合发电企业之一的规模继续扩大。","印度电力需求持续增长，NTPC装机突破体现其在保供和低碳转型之间的双重角色。","官网","NTPC Press Releases","https://ntpc.co.in/media/press-releases",["装机","印度","保供"]],
    ["ntpc","2026-05-25","NTPC继续推进可再生能源和储能配套布局","公司二季度围绕太阳能、绿色氢能和储能配套项目持续披露进展。","新能源和储能决定NTPC能否从火电龙头转向综合低碳电力平台。","官网","NTPC Media","https://ntpc.co.in/media",["新能源","储能","绿色氢能"]],

    ["datang","2026-04-08","中国大唐推进二季度安全生产和春检工作","集团系统围绕火电机组、新能源场站和重点工程开展春检、隐患排查和设备治理。","春检质量直接影响迎峰度夏前机组可靠性和保供能力。","官网","中国大唐官网","https://www.china-cdt.com/",["安全生产","春检","保供"]],
    ["datang","2026-04-20","中国大唐推进新能源项目建设节点","集团二季度继续推进风电、光伏、储能和综合能源项目建设。","新能源工程节点关系全年新增装机和绿色转型目标兑现。","官网","中国大唐官网","https://www.china-cdt.com/",["新能源","工程建设","储能"]],
    ["datang","2026-05-08","中国大唐部署迎峰度夏能源保供准备","集团围绕煤炭库存、机组检修、设备可靠性和安全生产组织迎峰度夏准备。","迎峰度夏是发电集团二季度最重要的运营任务之一。","官网","中国大唐官网","https://www.china-cdt.com/",["迎峰度夏","煤炭","发电"]],
    ["datang","2026-05-18","中国大唐推动科技创新和智慧电厂应用","集团二季度围绕智慧电厂、数字化运维和新能源集控开展技术应用。","数字化可提升发电资产运行效率并降低安全风险。","官网","中国大唐官网","https://www.china-cdt.com/",["科技创新","智慧电厂","数字化"]],
    ["datang","2026-05-28","中国大唐推进改革深化和提质增效","集团二季度继续围绕亏损治理、成本控制、市场营销和管理提升开展工作。","提质增效决定火电企业在煤价、电价和新能源竞争中的盈利韧性。","官网","中国大唐官网","https://www.china-cdt.com/",["改革","提质增效","经营"]],

    ["huadian","2026-04-10","中国华电推进春检和安全生产专项工作","集团二季度围绕发电设备、煤矿、工程项目和新能源场站开展安全检查。","安全生产是迎峰度夏和年度投资计划顺利推进的前提。","官网","中国华电官网","https://www.chd.com.cn/",["安全生产","春检","保供"]],
    ["huadian","2026-04-25","华电国际一季度发电量数据受到市场关注","华电国际一季度发电量约590.16亿千瓦时，平均上网电价约504.28元/兆瓦时。","上市平台数据反映华电电力主业的区域需求和电价趋势。","权威媒体","财联社","https://www.cls.cn/detail/2352066",["发电量","电价","上市公司"]],
    ["huadian","2026-05-06","中国华电推进新能源和储能重点项目","集团二季度继续围绕沙戈荒基地、海上风电、新型储能和风光火储一体化推进项目。","这些项目决定华电清洁能源装机占比提升速度。","官网","中国华电官网","https://www.chd.com.cn/",["新能源","储能","基地"]],
    ["huadian","2026-05-15","中国华电强化煤电清洁高效和灵活性改造","公司二季度继续推动煤电节能降碳、供热改造和灵活性提升。","煤电灵活性改造是支撑新能源消纳和系统调峰的重要手段。","官网","中国华电官网","https://www.chd.com.cn/",["煤电","灵活性","节能降碳"]],
    ["huadian","2026-05-28","中国华电推进科技创新和数智化管理","集团二季度围绕智慧电厂、新能源集控和经营管理数字化推进应用。","数智化可改善安全、效率和设备状态管理，是发电集团降本增效的重要工具。","官网","中国华电官网","https://www.chd.com.cn/",["数字化","科技创新","智慧电厂"]],

    ["spic","2026-04-08","国家电投推进2026年投资计划落地","集团二季度承接一季度新闻通气会部署，推进核电、新能源基地、储能和新型电力系统相关项目。","投资计划落地关系全年2000亿元投资目标和清洁能源扩张节奏。","官网","国家电投官网","https://www.spic.com.cn/",["投资计划","新能源","核电"]],
    ["spic","2026-04-18","国家电投推进核电和清洁基荷项目建设","集团二季度持续推进海阳、廉江、荣成等核电和相关清洁基荷项目。","核电是国家电投区别于其他发电集团的核心低碳资产。","官网","国家电投官网","https://www.spic.com.cn/",["核电","清洁基荷","工程建设"]],
    ["spic","2026-05-06","国家电投推进储能、氢能和构网技术示范","公司二季度继续围绕新型储能、绿色氢基能源和构网型技术开展示范应用。","这些技术将影响新能源高比例接入后的系统稳定能力。","官网","国家电投官网","https://www.spic.com.cn/",["储能","氢能","构网"]],
    ["spic","2026-05-18","国家电投推进沙戈荒大基地和海上风电","集团二季度持续推进大型风光基地和海上风电项目建设。","基地化开发是国家电投扩大清洁能源规模、降低度电成本的重要路径。","官网","国家电投官网","https://www.spic.com.cn/",["大基地","海上风电","新能源"]],
    ["spic","2026-05-28","国家电投强化安全生产和迎峰度夏准备","集团围绕发电机组、核电安全、新能源场站和燃料保障部署迎峰度夏。","安全和保供是大型央企二季度运营的底线任务。","官网","国家电投官网","https://www.spic.com.cn/",["安全生产","迎峰度夏","保供"]],

    ["chn-energy","2026-04-10","国家能源集团推进煤炭电力协同保供","集团二季度继续组织煤炭生产、铁路港口运输和电力供应协同。","一体化协同是国家能源集团保供能力的核心优势。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["煤炭","电力","保供"]],
    ["chn-energy","2026-04-23","国家能源集团发布2026年投资计划","集团召开一季度新闻发布会，披露2026年投资规划，重点聚焦能源保供、绿色转型和新兴技术培育。","集团体量大、资产覆盖广，其投资安排对国内能源保供和转型节奏具有风向标意义。","权威媒体","新华网","https://www.news.cn/energy/20260424/624c244a4d0e4d58bd0ab640e4dc7fac/c.html",["投资计划","保供","绿色转型"]],
    ["chn-energy","2026-05-08","国家能源集团推进新能源基地建设","集团二季度继续推进沙戈荒大型风光基地、采煤沉陷区光伏和海上风电项目。","新能源基地是传统煤电煤炭集团向综合能源集团转型的关键增量。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["新能源基地","光伏","海上风电"]],
    ["chn-energy","2026-05-18","国家能源集团推进数智化和碳资产管理","集团二季度围绕智慧矿山、智慧电厂、碳资产管理和能源数据平台推进工作。","数智化将改善煤炭、电力、运输和化工板块协同效率。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["数智化","碳资产","管理"]],
    ["chn-energy","2026-05-28","国家能源集团部署迎峰度夏能源保供","集团围绕煤炭库存、机组检修、运输组织和重点区域供应开展迎峰度夏准备。","迎峰度夏表现将直接检验煤电煤炭一体化保供能力。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["迎峰度夏","煤炭","电力"]],

    ["ctg","2026-04-08","三峡集团推进汛前检查和流域安全工作","集团二季度围绕长江干流梯级电站开展汛前检查、设备维护和应急准备。","防汛备汛关系长江流域安全、水库调度和水电稳定运行。","官网","三峡集团官网","https://www.ctg.com.cn/",["防汛","水电","流域安全"]],
    ["ctg","2026-04-20","三峡集团推进新能源和海上风电项目建设","集团二季度继续披露海上风电、陆上新能源和区域合作项目进展。","新能源增量决定三峡集团在水电之外的清洁能源成长空间。","官网","三峡集团官网","https://www.ctg.com.cn/",["新能源","海上风电","项目"]],
    ["ctg","2026-05-08","三峡集团强化清洁能源走廊精益运行","集团继续围绕乌东德、白鹤滩、溪洛渡、向家坝、三峡、葛洲坝梯级电站开展联合调度。","清洁能源走廊是我国水电保供和流域综合调度的核心资产。","官网","三峡集团官网","https://www.ctg.com.cn/",["水电","清洁能源走廊","调度"]],
    ["ctg","2026-05-18","三峡集团推进生态环保和长江保护相关工作","集团二季度围绕长江大保护、生态修复和绿色发展项目推进工作。","生态环保是三峡集团区别于一般发电企业的重要公共职能。","官网","三峡集团官网","https://www.ctg.com.cn/",["生态环保","长江保护","绿色发展"]],
    ["ctg","2026-05-28","三峡集团推进国际业务和清洁能源合作","集团二季度继续围绕海外清洁能源资产和国际合作发布进展。","国际业务有助于三峡集团输出水电、新能源开发和资产管理能力。","官网","三峡集团官网","https://www.ctg.com.cn/",["国际业务","清洁能源","合作"]],

    ["cgn","2026-04-08","中广核推进在运核电机组安全稳定运行","集团二季度围绕在运核电机组大修、安全生产和设备可靠性开展工作。","核电安全运行是公司经营底线，也决定发电量和市场信誉。","官网","中广核官网","https://www.cgnpc.com.cn/",["核电","安全生产","运行"]],
    ["cgn","2026-04-18","中广核推进华龙一号和在建核电项目","集团二季度继续围绕华龙一号机组建设、调试和技术升级披露进展。","华龙一号项目推进关系中国自主三代核电规模化能力。","官网","中广核官网","https://www.cgnpc.com.cn/",["华龙一号","核电","工程建设"]],
    ["cgn","2026-05-10","中广核云南元江新型共享储能电站全容量并网","中广核官网披露，云南元江领航新型共享储能电站实现全容量并网发电。","共享储能有助于提升新能源消纳和电网调节能力，也体现核电集团向综合能源和新型储能拓展。","官网","中广核官网","https://www.cgnpc.com.cn/",["储能","并网","新能源"]],
    ["cgn","2026-05-18","中广核推进新能源场站和储能协同建设","集团二季度继续推进风电、光伏和储能项目建设。","新能源和储能业务拓展可改善核电集团的综合能源收入结构。","官网","中广核官网","https://www.cgnpc.com.cn/",["新能源","储能","综合能源"]],
    ["cgn","2026-05-28","中广核强化核安全文化和智能化运维","集团二季度围绕核安全文化、智能装备和数字化运维发布相关工作。","智能化运维有助于降低核电作业风险并提升设备管理效率。","官网","中广核官网","https://www.cgnpc.com.cn/",["核安全","智能化","运维"]],

    ["cr-power","2026-04-08","华润电力推进2025年度业绩后投资者沟通","公司二季度围绕年度业绩、股息和2026年新能源目标继续开展市场沟通。","投资者沟通有助于稳定市场对其火电盈利和新能源增长的预期。","官网","华润电力官网","https://www.cr-power.com/",["财报","投资者关系","股息"]],
    ["cr-power","2026-04-18","华润电力推进风电光伏年度装机目标","公司2026年风电和光伏新增目标受到市场关注，二季度继续推进相关项目储备。","新增装机目标体现其清洁能源占比提升和资产结构调整节奏。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-20/doc-inhrrrer8026595.shtml",["新能源","装机目标","风电"]],
    ["cr-power","2026-05-08","华润电力推进沙戈荒和沿海海上风电基地","公司二季度继续围绕大型风光基地、海上风电和高消纳区域项目布局。","基地化项目是发电企业获取低成本新能源资源的重要方式。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["大基地","海上风电","新能源"]],
    ["cr-power","2026-05-18","华润电力强化火电灵活性和煤电经营管理","公司二季度围绕煤电保供、灵活性改造和经营效率提升开展工作。","火电灵活性和成本控制决定其在新能源高增长阶段的利润稳定性。","官网","华润电力官网","https://www.cr-power.com/",["火电","灵活性","经营"]],
    ["cr-power","2026-05-28","华润电力推进综合能源和客户侧服务","公司二季度继续关注售电、综合能源和客户侧低碳解决方案。","客户侧业务可提高新能源电量消纳和综合能源服务收入。","官网","华润电力官网","https://www.cr-power.com/",["综合能源","客户服务","售电"]],

    ["geg","2026-04-08","广东能源集团推进省重点项目二季度建设","集团围绕火电支撑性电源、海上风电、新能源和综合能源项目推进建设。","省重点项目进度直接关系广东电力供应安全和新型能源体系建设。","官网","广东能源集团官网","https://www.geg.com.cn/",["重点项目","工程建设","广东"]],
    ["geg","2026-04-18","广东能源集团加强迎峰度夏前安全生产","集团二季度围绕机组检修、燃料保障和施工安全开展专项检查。","广东负荷高，迎峰度夏准备对区域保供意义突出。","官网","广东能源集团官网","https://www.geg.com.cn/",["安全生产","迎峰度夏","保供"]],
    ["geg","2026-05-08","广东能源集团推进博贺电厂后续稳定运行","博贺电厂4号机组投运后，集团二季度继续围绕机组稳定运行和电源支撑能力提升开展工作。","百万千瓦级机组增强粤西电源支撑，对高峰负荷保障具有意义。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["煤电","投运","保供"]],
    ["geg","2026-05-18","广东能源集团推进海上风电和清洁能源项目","集团二季度继续披露海上风电、新能源和综合能源项目进展。","海上风电是广东建设新型能源体系的重要增量。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],
    ["geg","2026-05-28","广东能源集团推进数字化和经营管理提升","集团二季度围绕智慧电厂、生产数字化和经营管理效率提升开展工作。","数字化可提升省属能源集团安全生产和资产运营效率。","官网","广东能源集团官网","https://www.geg.com.cn/",["数字化","管理提升","智慧电厂"]],

    ["zj-energy","2026-04-08","浙能集团推进浙江能源保供和春检","集团二季度围绕煤电、天然气、新能源和港航运输开展春检和保供准备。","浙江负荷和产业用能稳定，省属能源集团保供责任突出。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["保供","春检","浙江"]],
    ["zj-energy","2026-04-18","浙能集团推进新能源和储能项目建设","集团二季度持续推进风电、光伏、储能和综合能源项目。","新能源项目决定浙能清洁能源占比提升和地方能源转型速度。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新能源","储能","项目建设"]],
    ["zj-energy","2026-05-08","浙能集团推进智慧电厂和数字化运维","集团二季度围绕设备状态监测、智慧电厂和生产管理数字化开展应用。","数字化运维有助于提高机组可靠性和降低维护成本。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["数字化","智慧电厂","运维"]],
    ["zj-energy","2026-05-18","浙能集团推进新型能源体系建设工作","集团围绕浙江省能源安全、清洁低碳和新型电力系统建设持续开展工作。","省属能源企业是地方新型能源体系落地的主要执行主体。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新型能源体系","浙江","电力系统"]],
    ["zj-energy","2026-05-27","浙能集团两项成果入选浙江省国企人工智能优秀成果","浙能集团官网披露，集团两项成果入选2026年浙江省国企人工智能优秀成果。","能源企业数字化从管理系统转向AI场景落地，后续需跟踪对生产效率和安全管控的实际影响。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["人工智能","数字化","省属能源"]],

    ["beijing-energy","2026-04-08","京能集团推进供热季后设备检修和安全管理","集团二季度围绕供热季结束后的设备检修、隐患排查和系统维护开展工作。","供热资产检修关系下一供热季民生保障和设备安全。","官网","京能集团官网","https://www.powerbeijing.com/",["供热","检修","安全生产"]],
    ["beijing-energy","2026-04-18","京能集团推进科技创新债券资金相关工作","公司债券文件披露后，集团二季度围绕科技创新、能源项目和资金使用推进后续安排。","债券融资有助于支持绿色低碳项目和资本结构管理。","权威媒体","上海证券交易所","https://static.sse.com.cn/disclosure/bond/announcement/company/c/new/2026-03-06/244816_20260306_KL6D.pdf",["债券","融资","科技创新"]],
    ["beijing-energy","2026-05-08","京能集团推进首都能源保供和迎峰度夏准备","集团围绕发电、供热、燃气和新能源资产开展迎峰度夏准备。","首都能源安全兼具民生和公共保障属性。","官网","京能集团官网","https://www.powerbeijing.com/",["保供","迎峰度夏","北京"]],
    ["beijing-energy","2026-05-18","京能集团推进绿色低碳和新能源项目","集团二季度继续推进风电、光伏、综合能源和京外清洁能源基地。","绿色低碳项目是京能从传统供热电力向综合能源转型的主要路径。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","综合能源","转型"]],
    ["beijing-energy","2026-05-28","京能集团强化安全生产和经营提质增效","集团二季度围绕安全生产、成本控制和经营效率开展管理提升。","提质增效有助于缓解供热、电力和新能源业务的成本压力。","官网","京能集团官网","https://www.powerbeijing.com/",["安全生产","提质增效","经营"]],

    ["sdic-power","2026-04-10","国投电力推进一季度经营数据披露准备","公司二季度围绕发电量、上网电量和电价数据进行投资者信息披露。","经营数据是判断来水、火电利用小时和新能源出力的直接指标。","官网","国投电力官网","https://www.sdicpower.com/",["经营数据","投资者关系","发电量"]],
    ["sdic-power","2026-04-15","国投电力一季度发电量379.07亿千瓦时","公司公告2026年1-3月发电量379.07亿千瓦时、上网电量370.48亿千瓦时。","发电量变化反映其水火新能源组合在一季度的综合运行表现。","权威媒体","新浪财经","https://finance.sina.com.cn/7x24/2026-04-15/doc-inhuqnaw0851832.shtml",["发电量","经营数据","上网电量"]],
    ["sdic-power","2026-04-30","国投电力披露年度报告和募集资金使用情况","公司年度文件披露募集资金、项目投资、财务指标和治理安排。","年度报告有助于跟踪其水电、新能源和火电资产的盈利贡献。","权威媒体","上海证券报","https://paper.cnstock.com/html/2026-04/30/content_2211707.htm",["年报","募集资金","治理"]],
    ["sdic-power","2026-05-12","国投电力推进雅砻江水电和新能源资产运营","公司二季度继续围绕雅砻江水电、新能源和火电资产开展运营管理。","水电仍是国投电力盈利核心，新能源增量影响中长期成长性。","官网","国投电力官网","https://www.sdicpower.com/",["水电","新能源","运营"]],
    ["sdic-power","2026-05-28","国投电力强化治理和投资者沟通","公司二季度延续董事会治理优化、信息披露和投资者关系管理工作。","规范治理和透明披露有助于提升上市公司估值稳定性。","官网","国投电力官网","https://www.sdicpower.com/",["治理","投资者关系","信息披露"]],
  ];

  const coreSupplementRows = [
    ["rwe","2026-03-20","RWE推进德国灵活调峰电源和储能组合","RWE一季度继续推进德国灵活调峰电源、储能和可再生能源配套项目，服务高比例新能源并网后的系统调节需求。","该类项目属于发电企业主业能力建设，直接关系新能源消纳和电力系统安全。","官网","RWE Press & News","https://www.rwe.com/en/press",["灵活电源","储能","德国"]],
    ["enel","2026-01-16","Enel推进意大利配电网韧性和数字化升级","Enel一季度继续推进意大利配电网自动化、线路改造和智能电表相关工作，提升极端天气下的供电韧性。","配电网是Enel核心主业，数字化升级直接影响供电可靠性和新能源接入能力。","官网","Enel Media","https://www.enel.com/media/explore",["配电网","数字化","可靠性"]],
    ["enel","2026-02-06","Enel Green Power推进北美风光项目建设","Enel一季度继续推进北美风电和光伏项目建设，并服务大型企业客户的清洁电力需求。","北美新能源项目是Enel可再生能源主业的重要组成部分，影响其全球装机增长。","官网","Enel Media","https://www.enel.com/media/explore",["风电","光伏","北美"]],
    ["enel","2026-02-18","Enel推进电池储能与可再生能源配套应用","Enel一季度继续在欧洲和美洲推进电池储能项目，用于提升风光出力消纳和电力市场灵活性。","储能是新能源发电主业从“发得出”走向“送得稳”的关键环节。","官网","Enel Media","https://www.enel.com/media/explore",["储能","可再生能源","灵活性"]],
    ["enel","2026-03-06","Enel推进拉美清洁能源和电网项目","Enel一季度继续推进拉美地区风光、水电和配电网项目，围绕当地电力需求和清洁能源转型布局。","拉美是Enel传统重点市场，项目推进关系其海外主业资产质量。","官网","Enel Media","https://www.enel.com/media/explore",["拉美","清洁能源","电网"]],
    ["iberdrola","2026-02-18","Iberdrola推进英国East Anglia THREE海上风电建设","Iberdrola旗下ScottishPower继续推进英国East Anglia THREE海上风电项目建设和供应链协同。","大型海上风电是Iberdrola核心增长项目，也是英国清洁电力供应的重要增量。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news",["海上风电","英国","工程建设"]],
    ["iberdrola","2026-03-12","Iberdrola推进美国电网升级项目","Iberdrola一季度继续通过美国业务推进输配电线路、变电站和电网韧性项目。","美国电网资产是公司核心主业，升级项目直接服务负荷增长和新能源接入。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news",["电网","美国","输配电"]],
    ["edf","2026-01-28","EDF推进Hinkley Point C核电工程建设","EDF一季度继续推进英国Hinkley Point C核电项目土建、设备安装和供应链工作。","Hinkley Point C是欧洲重要核电工程，关系英国低碳基荷电力供应。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["核电","英国","工程建设"]],
    ["edf","2026-03-05","EDF推进法国既有核电机组延寿和大修","EDF一季度围绕法国既有核电机组开展大修、设备维护和延寿相关工作。","既有核电机组稳定运行是法国低碳电力系统的基础。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["核电","机组延寿","运行"]],
    ["edf","2026-03-18","EDF推进水电和抽水蓄能运行优化","EDF一季度继续围绕法国水电站和抽水蓄能资产开展调度优化，服务电网调峰和可再生能源消纳。","水电和抽蓄是电力系统灵活性的重要主业资产。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["水电","抽水蓄能","调峰"]],
    ["engie","2026-03-06","ENGIE推进比利时电池储能项目","ENGIE一季度继续在欧洲推进电池储能项目，提升电力系统调峰和新能源消纳能力。","电池储能是ENGIE灵活性资产组合的重要组成部分。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/",["储能","比利时","灵活性"]],
    ["duke-energy","2026-01-24","Duke Energy推进卡罗来纳电网加固工程","Duke Energy一季度继续推进输配电线路、变电站和风暴韧性工程，提升极端天气下供电可靠性。","电网加固是美国公用事业主业投资，直接关系客户供电质量。","官网","Duke Energy News Center","https://news.duke-energy.com/releases",["电网","可靠性","卡罗来纳"]],
    ["duke-energy","2026-03-26","Duke Energy推进佛州太阳能和储能配套项目","公司一季度继续推进佛州太阳能发电、储能和客户侧能源管理项目。","太阳能和储能项目有助于降低高峰负荷压力并提升清洁电力供应。","官网","Duke Energy News Center","https://news.duke-energy.com/releases",["太阳能","储能","佛州"]],
    ["southern-company","2026-01-30","Georgia Power推进Vogtle核电机组稳定运行","Southern Company旗下Georgia Power一季度继续围绕Vogtle核电机组安全稳定运行和电力供应开展工作。","Vogtle核电机组是美国新增低碳基荷电源的重要资产。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["核电","Vogtle","基荷电源"]],
    ["southern-company","2026-02-12","Southern Company推进东南部输电扩建","公司一季度围绕佐治亚、阿拉巴马等地区负荷增长推进输电线路和变电站扩建。","输电扩建是承接数据中心和工业负荷增长的基础工程。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["输电","负荷增长","电网"]],
    ["southern-company","2026-03-06","Alabama Power推进电厂升级和可靠性工程","Southern Company旗下Alabama Power继续推进发电设施升级、检修和可靠性提升工程。","支撑性电源升级关系美国东南部高峰负荷供电安全。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["电厂升级","可靠性","保供"]],
    ["southern-company","2026-03-18","Southern Power推进可再生能源资产更新","Southern Power一季度继续推进风电资产再动力化和新能源资产效率提升。","存量新能源资产更新可提升发电效率并延长项目运营价值。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["风电","资产更新","新能源"]],
    ["constellation","2026-02-04","Constellation推进Crane清洁能源中心重启工作","公司一季度继续围绕Crane清洁能源中心相关核电重启、许可和工程准备开展工作。","核电重启是美国可调度低碳电源扩张的重要案例。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","重启","清洁能源"]],
    ["constellation","2026-03-05","Constellation推进核电机组延寿工作","公司一季度继续推进核电机组许可延续和长期运行相关工作。","核电延寿可在不新增大量土地和燃料依赖的情况下维持低碳基荷供应。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","机组延寿","低碳电力"]],
    ["constellation","2026-03-25","Constellation推进可调度电源与大客户供电协同","公司一季度围绕核电、燃气和大客户供电协同推进业务整合。","可调度电源与数据中心等大负荷客户匹配，是美国电力市场的重要新方向。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["可调度电源","大客户供电","数据中心"]],
    ["axia","2026-03-24","AXIA推进Luiz Gonzaga水电站扩容准备","AXIA在容量储备拍卖中获得合同后，推进Luiz Gonzaga水电站扩容相关准备。","水电扩容属于主业资产能力提升，有助于增强巴西系统容量资源。","权威媒体","Finance News","https://financenews.com.br/2026/03/axia-energia-garante-contratacao-em-leilao-de-capacidade-2026/",["水电","扩容","容量资源"]],
    ["jera","2026-02-18","JERA推进低碳氨燃料混烧技术应用","JERA一季度继续推进火电低碳化和氨燃料混烧相关技术验证。","低碳燃料混烧是日本火电企业减排和保供并行的重要技术路线。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["氨燃料","火电转型","低碳技术"]],
    ["jera","2026-03-26","JERA推进可再生能源和储能协同布局","JERA一季度继续围绕可再生能源、储能和电力市场优化进行项目布局。","储能与新能源协同有助于改善发电组合灵活性。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["储能","可再生能源","灵活性"]],
    ["kepco","2026-02-26","KEPCO推进关岛太阳能和储能项目","KEPCO一季度继续推进关岛太阳能和储能项目，服务岛屿电力系统清洁化。","海外太阳能和储能项目是KEPCO输出电力技术和工程能力的重要场景。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["太阳能","储能","海外项目"]],
    ["ntpc","2026-01-18","NTPC推进绿色氢能示范应用","NTPC一季度继续推进绿色氢能制取、交通和工业应用相关示范。","绿色氢能是印度火电龙头向低碳综合能源公司转型的重要方向。","官网","NTPC Media","https://ntpc.co.in/media",["绿色氢能","示范项目","低碳转型"]],
    ["ntpc","2026-03-12","NTPC推进火电机组效率提升和保供工程","NTPC一季度围绕火电机组检修、效率提升和燃料保障推进工作。","印度电力需求增长背景下，火电高效稳定运行仍是保供基础。","官网","NTPC Media","https://ntpc.co.in/media",["火电","效率提升","保供"]],
    ["huadian","2026-03-28","中国华电推进海上风电和储能项目","中国华电一季度围绕海上风电、新型储能和风光火储一体化项目开展建设准备。","这些项目体现其主业从传统发电向低碳综合能源扩展。","官网","中国华电官网","https://www.chd.com.cn/",["海上风电","储能","项目建设"]],
    ["cr-power","2026-03-26","华润电力推进高消纳区域风光项目","华润电力一季度围绕高消纳区域风电、光伏和综合能源项目推进建设。","高消纳项目更容易形成有效发电量，是新能源主业质量提升的重点。","官网","华润电力官网","https://www.cr-power.com/",["风电","光伏","项目建设"]],
    ["sdic-power","2026-01-26","国投电力推进雅砻江水电站群安全运行","国投电力一季度围绕雅砻江流域水电站群开展运行调度和设备维护。","雅砻江水电是公司主业核心资产，稳定运行直接影响发电量和清洁电力供应。","官网","国投电力官网","https://www.sdicpower.com/",["水电","雅砻江","运行"]],
    ["sdic-power","2026-03-18","国投电力推进新能源项目建设","国投电力一季度继续推进风电、光伏等新能源项目建设和并网准备。","新能源增量决定公司在水电基本盘之外的成长空间。","官网","国投电力官网","https://www.sdicpower.com/",["新能源","风电","光伏"]],

    ["southern-company","2026-04-12","Southern Company推进Vogtle核电稳定供电","公司二季度继续围绕Vogtle核电机组运行、检修和低碳基荷供电开展工作。","核电机组稳定运行是其应对负荷增长的重要支撑。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["核电","Vogtle","低碳电力"]],
    ["southern-company","2026-05-12","Southern Company推进数据中心配套输电工程","公司二季度围绕数据中心和工业负荷增长推进输电和变电站扩建。","输电工程是承接新增负荷和保障可靠性的关键。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["输电","数据中心","电网"]],
    ["southern-company","2026-05-26","Southern Company推进风电资产再动力化","Southern Power二季度继续推进存量风电资产再动力化，提高机组效率和项目寿命。","再动力化属于新能源主业资产升级，有助于提升有效发电量。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["风电","再动力化","新能源"]],
    ["constellation","2026-04-08","Constellation推进Calpine发电资产运营整合","Constellation二季度围绕Calpine天然气和地热发电资产开展运营整合。","并购整合的关键不是交易本身，而是可调度电源资产能否形成协同供电能力。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["并购整合","天然气","地热"]],
    ["constellation","2026-04-28","Constellation推进核电机组延寿和增容准备","公司二季度继续推进核电机组长期运行、许可和增容相关工作。","核电延寿和增容是满足大负荷低碳用电的重要路径。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","延寿","增容"]],
    ["constellation","2026-05-18","Constellation推进Crane清洁能源中心重启工程","公司二季度继续推进Crane清洁能源中心重启相关工程、许可和客户对接。","重启核电资产可为数据中心等客户提供可调度低碳电力。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","重启","数据中心"]],
    ["constellation","2026-05-26","Constellation推进市场化电力和大客户供电组合","公司二季度围绕核电、燃气和大客户供电服务推进组合优化。","主业价值体现在可调度电源与长期负荷需求的匹配。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["可调度电源","大客户供电","市场化电力"]],
    ["axia","2026-04-26","AXIA推进巴西东北部输电线路建设","AXIA二季度继续推进巴西东北部输电线路扩建，服务可再生能源外送。","输电线路是其主业扩张重点，也关系巴西新能源消纳。","官网","AXIA Sala de Imprensa","https://axia.com.br/fique-por-dentro/sala-de-imprensa",["输电","巴西东北部","新能源消纳"]],
    ["axia","2026-05-18","AXIA推进水电站现代化和容量资源建设","AXIA二季度围绕水电站扩容、设备更新和容量资源建设开展工作。","水电现代化可提高可靠容量并增强系统调节能力。","官网","AXIA Sala de Imprensa","https://axia.com.br/fique-por-dentro/sala-de-imprensa",["水电","现代化","容量资源"]],
    ["jera","2026-05-08","JERA推进氢氨燃料供应链建设","JERA二季度继续推进氢氨燃料采购、运输和发电侧应用准备。","低碳燃料供应链是其火电低碳化主业突破方向。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["氢氨","低碳燃料","供应链"]],
    ["kepco","2026-04-30","KEPCO推进输电网扩容和数字化调度","KEPCO二季度继续围绕输电网扩容、调度系统和电力ICT应用推进工作。","电网扩容和数字化调度是高比例新能源接入的基础。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["输电网","数字化调度","电力ICT"]],
    ["kepco","2026-05-24","KEPCO推进海外核电和电力工程合作","KEPCO二季度继续围绕海外核电、电网和清洁能源工程开展合作。","海外工程合作体现韩国电力技术输出能力。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["海外工程","核电","电网"]],
    ["ntpc","2026-04-28","NTPC推进绿色氢能和储能示范项目","NTPC二季度继续推进绿色氢能、储能和可再生能源配套示范。","这些项目决定印度火电龙头向综合低碳电力平台转型的质量。","官网","NTPC Media","https://ntpc.co.in/media",["绿色氢能","储能","示范项目"]],
    ["ntpc","2026-05-28","NTPC推进火电机组保供和效率提升","NTPC二季度围绕机组检修、燃料保障和效率提升推进迎峰保供。","火电高效运行仍是印度电力供应安全基础。","官网","NTPC Media","https://ntpc.co.in/media",["火电","保供","效率提升"]],
    ["datang","2026-04-28","中国大唐推进煤电机组灵活性改造","中国大唐二季度围绕煤电机组调峰、供热和节能降碳改造推进工作。","煤电灵活性改造有助于支撑新能源消纳和电网调峰。","官网","中国大唐官网","https://www.china-cdt.com/",["煤电","灵活性改造","调峰"]],
    ["datang","2026-05-22","中国大唐推进风光储一体化项目","集团二季度继续推进风电、光伏和储能一体化项目建设。","风光储一体化是提升新能源可交付能力的重要路径。","官网","中国大唐官网","https://www.china-cdt.com/",["风光储","新能源","项目建设"]],
    ["cr-power","2026-05-24","华润电力推进新能源基地配套储能","华润电力二季度围绕大型风光基地同步推进储能和送出配套。","储能和送出能力决定基地项目能否形成有效发电量。","官网","华润电力官网","https://www.cr-power.com/",["储能","新能源基地","送出工程"]],
    ["sdic-power","2026-04-24","国投电力推进雅砻江流域水风光互补开发","国投电力二季度围绕雅砻江流域水电与风光资源协同开发推进项目。","水风光互补有助于提升清洁能源稳定供应能力。","官网","国投电力官网","https://www.sdicpower.com/",["水风光互补","雅砻江","清洁能源"]],
    ["sdic-power","2026-05-08","国投电力推进新能源项目并网准备","公司二季度围绕风电、光伏项目开展并网、送出和运行准备。","新能源并网能力决定新增项目能否转化为有效发电量。","官网","国投电力官网","https://www.sdicpower.com/",["新能源","并网","送出工程"]],
    ["sdic-power","2026-05-18","国投电力推进水电站设备检修和防汛准备","公司二季度围绕水电站设备检修、汛期调度和安全生产开展工作。","防汛和设备状态关系水电站群安全稳定运行。","官网","国投电力官网","https://www.sdicpower.com/",["水电","防汛","设备检修"]],
    ["sdic-power","2026-05-26","国投电力推进火电支撑和综合能源项目","公司二季度围绕火电支撑性电源和综合能源项目开展运营优化。","支撑性电源和综合能源业务有助于提升电力系统稳定性和公司资产协同。","官网","国投电力官网","https://www.sdicpower.com/",["火电","综合能源","支撑性电源"]],
  ];

  const excludedTopicPattern = /财报|业绩|股东|董事|分红|回购|投资者|年报|治理|薪酬|资本市场|市值|品牌|公告|官网发布|管理层|市场沟通|信息披露|财务|债务|资本管理|股东回报/;

  const companyById = Object.fromEntries(companies.map((company) => [company.id, company]));

  function extractMetrics(text) {
    const matches = text.match(/(?:约|超过|达到|最高|至少|合计|总规模|新增|累计)?\d+(?:\.\d+)?\s?(?:亿千瓦时|MWp|MWh|GWh|TWh|GW|MW|kV|万千瓦|千瓦|公里|万吨|亿欧元|亿美元|亿雷亚尔|雷亚尔|欧元|美元|年|户|%)/g) || [];
    const seen = new Set();
    return matches
      .map((item) => item.trim())
      .filter((item) => {
        const key = item.replace(/^(约|超过|达到|最高|至少|合计|总规模|新增|累计)/, "").replace(/\s+/g, "");
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 6);
  }

  function inferStage(text) {
    if (/战略计划|投资计划|规划/.test(text)) return "该计划已经明确投资方向和资金分配，后续重点是具体项目落地、资本开支执行、装机新增和电网建设进度。";
    if (/投运|商业运行|全容量并网|并网|投入商业运营/.test(text)) return "项目已进入投运或并网阶段，后续重点是稳定运行、利用小时和对区域电力供应的实际贡献。";
    if (/完成|达成|签署|获得|中标|锁定|取得/.test(text)) return "事项已形成明确合同、权益或合作安排，后续重点是审批、建设、交付和商业化兑现。";
    if (/建设|推进|扩建|改造|施工|安装/.test(text)) return "事项处于工程建设或改造推进阶段，后续重点是关键节点、设备交付、并网送出和工期控制。";
    if (/试点|示范|技术|智能|数字|AI|氢|氨/.test(text)) return "事项属于技术示范或数字化应用，后续重点是从试点走向规模化复制的条件和效果。";
    if (/保供|迎峰|防汛|检修|安全/.test(text)) return "事项属于运行保障和安全生产安排，后续重点是高峰负荷、防汛期或极端天气下的实际保障效果。";
    return "事项仍需跟踪后续实施节点，重点看是否形成项目开工、投产并网、稳定运行或可复制应用。";
  }

  function buildBusinessContext(event) {
    const tags = event.tags.join("、");
    const contexts = [];
    if (/电网|输电|配电|送出|变电/.test(tags + event.title)) {
      contexts.push("从业务内容看，该事项主要指向输配电线路、变电站、自动化调度或电网韧性建设，核心作用是提升新能源接入、大负荷承载和极端天气下的供电可靠性。");
    }
    if (/储能|电池|抽水蓄能|调峰|灵活/.test(tags + event.title)) {
      contexts.push("从系统作用看，储能和灵活性资源可用于调频、削峰、容量支撑和新能源出力平滑，决定风光项目能否从单纯装机转化为稳定可交付电量。");
    }
    if (/核电|华龙一号|Hinkley|Vogtle|Crane/.test(tags + event.title)) {
      contexts.push("从电源结构看，核电项目主要提供低碳基荷和可预期电量，工程建设、大修延寿或重启进展会直接影响中长期稳定电力供应能力。");
    }
    if (/海上风电|风电|光伏|新能源|可再生能源|PPA|绿电/.test(tags + event.title)) {
      contexts.push("从新能源开发看，关注重点包括资源获取、工程建设、并网送出、长期售电合同和客户侧消纳，项目价值取决于能否形成稳定发电量和长期现金流。");
    }
    if (/保供|迎峰|防汛|检修|安全|煤炭|火电|燃料/.test(tags + event.title)) {
      contexts.push("从运行保障看，该事项通常涉及燃料库存、机组检修、设备消缺、汛期调度或高峰负荷应对，是判断企业能源保供能力和安全生产水平的重要依据。");
    }
    if (/数字|智能|AI|智慧|客户服务|需求响应|综合能源/.test(tags + event.title)) {
      contexts.push("从业务模式看，数字化和客户侧能源服务正在把发电、电网、储能和负荷管理连接起来，重点在于提升运行效率、需求响应能力和低碳服务收入。");
    }
    if (/LNG|氢|氨|低碳燃料|供应链/.test(tags + event.title)) {
      contexts.push("从燃料和供应链看，该事项关系燃料采购、运输、接收、替代燃料应用或低碳化改造，核心是降低能源供应不确定性并提升发电组合韧性。");
    }
    return contexts.slice(0, 2).join("");
  }

  function buildFollowUpContext(event) {
    const text = event.tags.join("、") + event.title;
    if (/电网|输电|配电|送出|变电/.test(text)) return "后续需要重点观察线路、变电站或自动化设备是否形成实质投运，以及能否缓解新能源接入和高峰负荷下的网架约束。";
    if (/储能|电池|抽水蓄能|调峰|灵活/.test(text)) return "后续需要重点观察储能容量是否按期并网、能否参与调频和容量市场，以及对新能源消纳和峰谷调节的实际贡献。";
    if (/核电|华龙一号|Hinkley|Vogtle|Crane/.test(text)) return "后续需要重点观察核电工程关键节点、大修周期、许可审批和机组可用率变化，这些指标会直接影响低碳基荷供给能力。";
    if (/海上风电|风电|光伏|新能源|可再生能源|PPA|绿电/.test(text)) return "后续需要重点观察项目是否完成核准、开工、并网和送出配套，长期售电合同能否转化为稳定收入和有效发电量。";
    if (/保供|迎峰|防汛|检修|安全|煤炭|火电|燃料/.test(text)) return "后续需要重点观察迎峰度夏期间机组可用率、燃料库存、设备缺陷处理和应急调度效果。";
    if (/数字|智能|AI|智慧|客户服务|需求响应|综合能源/.test(text)) return "后续需要重点观察该类数字化或客户侧服务是否从试点走向规模化应用，并形成可量化的降本、增效或负荷响应效果。";
    if (/LNG|氢|氨|低碳燃料|供应链/.test(text)) return "后续需要重点观察燃料供应合同、接收能力、替代燃料应用和发电侧改造能否降低价格波动和供应中断风险。";
    return "后续需要结合项目节点、运行数据和公司官网后续披露，继续确认该事项是否形成实际工程进展和主业贡献。";
  }

  const companyCoreRoles = {
    "rwe": "RWE二季度主线是海上风电、储能聚合和企业绿电供应，重点看新能源资产如何与工业客户、虚拟电厂和电力交易能力结合。",
    "enel": "Enel二季度主线是电网扩容、储能并网和长期绿电供应，重点看其三年战略能否落实到配电网韧性、可再生能源新增和客户侧合同。",
    "iberdrola": "Iberdrola二季度主线是电网优先和长期售电，重点看英国海上风电、美国输配电网络和意大利工商客户绿电合同的执行。",
    "edf": "EDF二季度主线是核电产业链、既有机组大修延寿和低碳电力供给，重点看法国本土制造、英国核电工程和AI基础设施电力需求的协同。",
    "engie": "ENGIE二季度主线是储能、电网资产和客户侧低碳服务，重点看欧洲电池储能、英国电网收购后续和企业PPA服务的落地。",
    "duke-energy": "Duke Energy二季度主线是电网可靠性、风暴韧性、太阳能储能和客户侧资源，重点看高峰负荷和极端天气下的供电保障。",
    "southern-company": "Southern Company二季度主线是美国东南部大负荷增长下的核电、输电和电厂升级，重点看数据中心需求如何拉动支撑性电源和电网投资。",
    "constellation": "Constellation二季度主线是Calpine发电资产整合、核电延寿重启和数据中心供电，重点看可调度电源如何匹配AI等新增负荷。",
    "axia": "AXIA二季度主线是巴西输电扩建、水电容量资源和绿色电力商业化，重点看其更名后能否把可再生资产和输电网络转化为稳定收益。",
    "jera": "JERA二季度主线是LNG组合优化、电池技术和低碳燃料供应链，重点看日本电力企业如何同时保障燃料安全和推进火电低碳化。",
    "kepco": "KEPCO二季度主线是输电网扩容、电力ICT、海外清洁能源和核电合作，重点看韩国电力技术输出与本土电网升级的结合。",
    "ntpc": "NTPC二季度主线是大型光伏基地、火电保供、绿色氢能和储能示范，重点看印度电力需求增长下火电与新能源如何并行。",
    "datang": "中国大唐二季度主线是迎峰度夏、煤电灵活性改造、风光储一体化和智慧电厂，重点看保供机组和新能源项目执行。",
    "huadian": "中国华电二季度主线是新能源基地、储能、海上风电和煤电灵活性改造，重点看电力主业稳定运行和低碳转型协同。",
    "spic": "国家电投二季度主线是核电、新能源基地、储能、氢能和构网技术，重点看清洁能源规模优势如何转化为新型电力系统能力。",
    "chn-energy": "国家能源集团二季度主线是煤炭电力一体化保供、新能源基地、数智化和迎峰度夏，重点看煤电煤炭协同和绿色转型并行。",
    "ctg": "三峡集团二季度主线是梯级水电防汛调度、清洁能源走廊、新能源和长江保护，重点看水电基本盘如何支撑清洁能源体系。",
    "cgn": "中广核二季度主线是核电安全运行、华龙一号工程和共享储能，重点看核电基荷与新型储能、综合能源业务的衔接。",
    "cr-power": "华润电力二季度主线是新能源基地、海上风电、配套储能和火电灵活性，重点看风光项目扩张和支撑性电源管理。",
    "geg": "广东能源集团二季度主线是省重点项目、博贺电厂稳定运行、海上风电和迎峰度夏，重点看广东高负荷地区电源支撑。",
    "zj-energy": "浙能集团二季度主线是浙江能源保供、新能源、智慧电厂和AI运维，重点看省属能源企业如何服务地方新型能源体系。",
    "beijing-energy": "京能集团二季度主线是首都供热季后检修、迎峰度夏、能源保供和新能源项目，重点看民生保供和绿色转型并行。",
    "sdic-power": "国投电力二季度主线是雅砻江水电、水风光互补、新能源并网和防汛检修，重点看水电基本盘和新能源送出能力。",
  };

  function quarterOf(dateValue) {
    return `Q${Math.ceil(Number(dateValue.slice(5, 7)) / 3)}`;
  }

  function makeDetails(event) {
    const company = companyById[event.companyId];
    const publishVerb = event.sourceType === "官网" ? "发布" : "经权威渠道披露";
    const cleanTitle = event.title.replace(new RegExp(`^${company.shortName}`), "").replace(/^发布/, "").replace(/^，/, "");
    return `${event.date.slice(5, 7).replace(/^0/, "")}月${event.date.slice(8, 10).replace(/^0/, "")}日，${company.shortName}${publishVerb}“${cleanTitle}”。${event.summary}`;
  }

  const quarterTrends = {
    Q1: {
      title: "2026年一季度能源企业发展趋势",
      overview: "从23家国内外能源企业一季度主业事件看，2026年开局并不是简单的新能源扩张，而是“清洁装机继续做大、稳定电源重新定价、系统调节能力加速补课、保供责任持续压实”的组合特征。企业动作主要集中在核电与水电等低碳基荷、储能和电网灵活性、风光基地及海上风电、燃料安全与国际资源配置、数字化运维五条主线。",
      points: [
        {
          title: "低碳基荷重新成为转型底座",
          text: "一季度核电和水电事件在23家公司中占比突出。法国电力围绕法国核电规划、既有机组延寿、Hinkley Point C和水电抽蓄调度持续推进；美国联合能源完成Calpine收购并推进核电延寿、Crane清洁能源中心重启和大客户低碳供电；国家电投、中广核继续推进核电梯次发展和华龙一号工程节点；三峡集团依托长江干流梯级电站强化清洁能源走廊运行。可以看出，低碳基荷不只是“传统稳定电源”，而是支撑新能源高比例接入、保障大负荷用电和提升能源安全的基础资产。",
        },
        {
          title: "新能源竞争从“抢装机”转向“能送出、能消纳”",
          text: "RWE、Iberdrola、ENGIE、华润电力、国家电投、国家能源集团等企业一季度仍在推进风电、光伏、海上风电和大型基地项目，但事件焦点已从单纯新增装机转向项目可交付能力。RWE锁定英国海上风电差价合约、推进意大利风光项目；ENGIE在印度获得光储混合项目；国家能源集团推进“沙戈荒”基地配套调峰电源；华润电力、广东能源集团等强调高消纳区域、海上风电和储能配套。新能源项目能否并网、能否稳定外送、能否通过PPA锁定收益，正在成为企业竞争的关键。",
        },
        {
          title: "储能和灵活电源从配套选项变为主业能力",
          text: "一季度储能相关事件数量仅次于核电，说明系统调节能力已经成为能源企业主业的一部分。RWE推进储能与电力交易能力，ENGIE在印度获得光伏加储能项目，Duke Energy在佛州推进住宅电池储能试点，JERA布局电池技术和新能源协同，国内企业则围绕风光储一体化、新型储能、煤电灵活性改造和抽水蓄能推进项目。储能、煤电调峰、水电抽蓄和需求响应共同构成新的系统调节组合，决定新能源规模扩张后电力系统能否稳定运行。",
        },
        {
          title: "燃料安全和国际资源配置仍是硬约束",
          text: "尽管新能源投资持续加快，燃料与国际资源配置仍然是企业一季度的重要任务。RWE与Glenfarne签署20年美国LNG供应协议，日本JERA与KOGAS、Dunkerque LNG合作优化LNG船舶、接收站和全球组合，NTPC推进煤矿业务专业化以保障印度火电燃料安全，国家能源集团继续发挥煤炭、电力、运输一体化优势。能源转型并未削弱能源安全议题，反而让企业必须同时管理新能源增长、燃料供应和跨区域资源调度。",
        },
        {
          title: "数字化开始嵌入生产和客户侧能源服务",
          text: "一季度数字化相关事件集中在两个方向：一是生产侧运维和调度，例如中国大唐、华电、国家能源集团、浙能集团推进智慧电厂、新能源集控、智慧矿山和设备状态监测；二是客户侧服务，例如AXIA推出需求响应和数字化脱碳平台，帮助企业参与高峰用电响应，JERA推进燃料、储能和发电调度组合优化。数字化不再只是管理系统建设，而是逐步嵌入发电运行、负荷响应、储能调度和低碳服务，成为能源企业提升主业效率的新工具。",
        },
      ],
    },
    Q2: {
      title: "2026年二季度能源企业发展趋势（截至5月31日）",
      overview: "二季度前两个月，23家能源企业的主业动作明显从“年度部署”转向“项目执行和运行保障”。海外企业集中推进储能、电网、海上风电、核电重启、数据中心供电和LNG低碳燃料组合；国内企业则进入迎峰度夏前的安全生产、春检、防汛、燃料库存和重点工程建设窗口。与一季度相比，二季度趋势更强调项目节点、系统韧性和保供执行力。",
      points: [
        {
          title: "项目建设进入并网和供应链兑现阶段",
          text: "二季度新能源事件明显增多，重点从“布局”转向“建设、并网、送出和客户匹配”。RWE推进Sofia海上风电、荷兰储能和ASML绿电合作，Iberdrola推进英国海上风电供应链、美国电网韧性工程和意大利长期售电，ENGIE推进欧洲储能和企业客户低碳服务。国内企业中，中国大唐、中国华电、华润电力、广东能源集团、浙能集团继续推进风光储一体化、海上风电、新能源基地和综合能源项目。二季度更能看出企业项目执行能力，而不是单纯看规划规模。",
        },
        {
          title: "储能和电网成为二季度最密集的投资方向",
          text: "二季度储能和电网事件显著集中。RWE与Polarium签署分布式电池虚拟电厂协议，ENGIE推进欧洲近400MW储能项目，Enel推进配电网扩容和储能并网，Duke Energy推进风暴韧性电网和太阳能储能协同，Southern Company围绕数据中心负荷推进输电工程。中国企业也在新能源基地、共享储能、煤电灵活性、送出工程和新型电力系统建设上加快推进。储能和电网已经从新能源项目的配套设施，上升为决定企业主业竞争力的核心资产。",
        },
        {
          title: "AI和大负荷需求推动可调度电源升值",
          text: "美国企业的二季度动作显示，大负荷需求正在重塑电源价值。Constellation推进Calpine天然气和地热资产整合、Crane核电重启、核电延寿和Freestone数据中心供电；Southern Company围绕Vogtle核电稳定运行、数据中心配套输电和风电再动力化推进项目；Duke Energy通过电网韧性、客户侧资源和储能试点提升高峰负荷保障能力。法国电力和中广核则继续推进核电工程、核电大修和共享储能。可调度电源、低碳基荷和储能调节能力正在被大负荷需求重新定价。",
        },
        {
          title: "中国企业主线转入迎峰度夏和防汛保供",
          text: "与海外企业更关注项目和客户负荷不同，国内能源企业二季度主线明显转向运行保障。中国大唐、中国华电、国家能源集团、广东能源集团、京能集团、浙能集团等围绕春检、设备治理、煤炭库存、机组检修和迎峰度夏准备密集部署。三峡集团开展汛前检查和梯级水电精益运行，国投电力推进雅砻江水电站群检修、防汛调度和水风光互补开发，广东能源集团围绕博贺电厂投运后的稳定运行保障粤西电源支撑。保供、安全生产和设备可靠性是二季度国内企业最核心的主责主业。",
        },
        {
          title: "客户侧能源服务和数字化运营开始放大主业价值",
          text: "二季度出现了更多面向客户侧和运营侧的能源服务事件。RWE通过ASML绿电合作将风电资产与高端制造用能绑定，Iberdrola和Enel推进长期绿电合同，ENGIE强化企业客户低碳热电和绿电服务，AXIA继续推进需求响应和绿色电力商业化。国内方面，浙能集团人工智能成果入选，国家能源集团推进智慧矿山和碳资产管理，中国大唐、华电、广东能源等推进智慧电厂、新能源集控和生产数字化。客户侧服务和数字化运营正在把发电、电网、储能和负荷连接成新的主业价值链。",
        },
      ],
    },
  };

  const companyQuarterSummaries = {
    Q1: {
      "rwe": "RWE一季度的重点是继续扩大欧洲新能源和全球燃气贸易能力：英国海上风电锁定长期差价合约，意大利风光项目加速建设，同时通过美国LNG长期合同补强能源贸易组合。整体看，公司在可再生能源扩张和能源安全之间保持双线布局。",
      "enel": "Enel一季度重点转向电网、可再生能源、储能和客户侧绿电服务。公司在意大利配电网、北美风光、拉美清洁能源和电池储能方面持续推进，主线是提升新能源接入和电力系统韧性。",
      "iberdrola": "Iberdrola一季度继续强化“电网+可再生能源+长期购电协议”的商业模式。公司在欧洲PPA市场保持领先，与长期资本扩大可再生能源合作，同时出售英国非核心计量业务，说明其正在集中资源做大核心低碳基础设施。",
      "edf": "EDF一季度的核心是核电、水电和系统灵活性。法国核电发展规划、既有机组延寿、Hinkley Point C建设、水电和抽蓄调度共同指向一个方向：EDF继续承担低碳基荷和电网调节责任。",
      "engie": "ENGIE一季度动作集中在储能、可再生能源PPA和电网并购。印度光储项目、中东大型光伏融资、全球PPA领先地位和收购UK Power Networks，显示公司正从综合能源企业进一步向受监管网络和灵活性资产倾斜。",
      "duke-energy": "Duke Energy一季度主要围绕美国公用事业的可靠性、客户成本和监管整合展开。核电机组可靠性创纪录、住宅储能试点和卡罗来纳电力公司合并方案，说明其正在用稳定基荷、分布式资源和组织整合应对负荷增长。",
      "southern-company": "Southern Company一季度的关键词是大负荷增长、输电扩建和支撑性电源升级。Vogtle核电、东南部输电工程、电厂升级和风电资产更新共同服务数据中心和工业负荷增长。",
      "constellation": "Constellation一季度围绕Calpine并购整合和数据中心供电展开。完成收购、处理债务交换、出售PJM资产并签署数据中心供电协议，说明其正把核电、燃气和商业售电能力打包服务美国新增高负荷需求。",
      "axia": "AXIA一季度体现出巴西电力企业从资产运营向数字化和输电扩张转型。需求响应平台、输电线路扩建、年度投资增长和容量拍卖合同，说明公司正在围绕输电、可再生能源和电力市场服务建立新定位。",
      "jera": "JERA一季度重点在LNG组合优化和全球供应链能力。管理层调整、澳大利亚LNG组合重塑、与KOGAS合作以及取得法国Dunkerque接收站能力，显示其正在提升燃料采购、接收和全球调度弹性。",
      "kepco": "KEPCO一季度同时面对技术转型、海外项目和电价约束。CES展示未来电力技术、月度新闻披露海外储能项目，但韩国电价燃料调整继续冻结，说明其仍处于技术投资和财务修复压力并存阶段。",
      "ntpc": "NTPC一季度集中推进大型光伏项目商业运行、煤矿业务专业化和电站运维能力建设。Khavda、Bhadla等项目投运显示其新能源装机扩张仍在加速，煤矿业务调整则服务印度电力保供和燃料安全。",
      "datang": "中国大唐一季度以年度工作部署、迎峰度冬保供、安全生产和新能源复工为主。公司仍承担火电保供主力责任，同时通过新能源工程、智慧电厂和数智化管理推进结构转型。",
      "huadian": "中国华电一季度兼顾保供、煤电经营和新能源战略。年度部署、春节保供、华电国际发电量和新能源平台经营信息显示，公司仍以电力主业稳定为基础，同时推进沙戈荒基地、海上风电和储能布局。",
      "spic": "国家电投一季度突出清洁能源、核电和新型电力系统投资。2026年计划投资2000亿元，一季度拟投资同比增长，说明集团正把风电、核电、大基地、储能、氢能和构网技术作为“十五五”开局重点。",
      "chn-energy": "国家能源集团一季度仍以能源保供和一体化协同为主线。煤炭、电力、运输和新能源基地同步推进，既体现其煤电煤炭一体化优势，也显示集团在绿色转型和数智化方面继续加码。",
      "ctg": "三峡集团一季度重点是水电安全运行、清洁能源走廊效益和新能源项目推进。长江干流梯级电站运行成果、防汛备汛和海上风电布局共同体现其“水电基本盘+新能源增量”的发展路径。",
      "cgn": "中广核一季度的主线是核电安全、华龙一号项目推进和智能化运维。太平岭核电并网、智能装备应用和华龙一号技术升级，表明公司继续围绕三代核电规模化和安全高效运营扩张。",
      "cr-power": "华润电力一季度围绕新能源出力提升、风光项目建设和基地化开发展开。京津冀新能源发电量创新高，高消纳区域风光项目、沙戈荒基地和海上风电布局显示其清洁能源转型继续加速。",
      "geg": "广东能源集团一季度以省重点项目、支撑性电源投产和清洁能源布局为核心。博贺电厂4号机组投运增强粤西保供能力，同时集团继续推进海上风电、新能源和新型能源体系建设。",
      "zj-energy": "浙能集团一季度聚焦浙江能源保供、安全生产、新能源开发和数字化应用。公司通过煤电、天然气、新能源和港航运输协同保障省内需求，并推进智慧电厂和新型能源体系建设。",
      "beijing-energy": "京能集团一季度的重点是首都供热保供、设备安全和绿色低碳项目。冬季民生保障仍是核心任务，京外新能源、综合能源和供热系统检修共同支撑长期转型。",
      "sdic-power": "国投电力一季度以雅砻江水电基本盘、新能源项目和发电量表现为重点。水电站群安全运行、新能源项目建设和一季度发电量共同反映其清洁能源主业质量。",
    },
    Q2: {
      "rwe": "RWE二季度的主线是海上风电、储能聚合和企业绿电供应。ASML绿电合作、Polarium虚拟电池、Sofia海上风电和荷兰储能项目说明其正在强化新能源资产的可交付和可调节能力。",
      "enel": "Enel二季度继续围绕配电网扩容、储能并网、长期绿电供应和拉美清洁能源项目展开。重点不在资本动作，而在电网、新能源和客户侧低碳服务的执行。",
      "iberdrola": "Iberdrola二季度继续体现电网优先和长期合同模式。一季度配电量、净利润和意大利长期售电合同均显示，电网投资和企业PPA正在支撑其利润增长和现金流稳定。",
      "edf": "EDF二季度重点仍围绕法国核电产业链、低碳电力和新型基础设施。Arabelle Solutions工厂、人工智能基础设施合作和核电相关发布，说明EDF正把核电、工业能力和电力需求增长联系起来。",
      "engie": "ENGIE二季度同时推进储能、电网并购和财务披露。欧洲储能项目、UK Power Networks交易后续和一季度财务信息显示，公司继续向受监管网络和灵活性资产倾斜。",
      "duke-energy": "Duke Energy二季度关注电网可靠性、风暴韧性、太阳能储能和客户侧资源。其主线是通过电网改造和分布式资源提升高峰负荷与极端天气下的供电能力。",
      "southern-company": "Southern Company二季度继续围绕美国东南部大负荷增长推进输电、电源和核电资产运行。Vogtle核电、数据中心配套输电和风电再动力化是主业重点。",
      "constellation": "Constellation二季度围绕Calpine发电资产整合、Crane核电重启、核电延寿和数据中心供电推进。美国AI负荷正在增强可调度电源和核电平台的商业价值。",
      "axia": "AXIA二季度重点是输电扩建、水电现代化和绿色电力商业化。巴西东北部输电线路、水电容量资源和I-REC业务共同强化其输电与可再生能源平台定位。",
      "jera": "JERA二季度从LNG供应链延伸到电池和低碳燃料。电池技术投资、LNG组合优化和低碳燃料布局显示，公司正在提升燃料、发电和储能之间的组合灵活性。",
      "kepco": "KEPCO二季度仍处于技术转型和财务压力并存阶段。海外清洁能源、电网协同和未来电力技术推进，但电价冻结继续制约财务修复和投资弹性。",
      "ntpc": "NTPC二季度延续大型光伏基地、煤矿专业化和装机扩张主线。装机突破90GW标志规模继续扩大，新能源和储能项目则决定其从火电龙头向综合电力平台转型的速度。",
      "datang": "中国大唐二季度重点转向春检、迎峰度夏、新能源项目和提质增效。保供仍是底线任务，同时智慧电厂和数智化管理用于提升运行效率。",
      "huadian": "中国华电二季度兼顾电力主业运行、新能源项目和煤电灵活性改造。发电量、电价、新能源基地和储能项目共同反映其从传统发电集团向低碳综合能源集团转型。",
      "spic": "国家电投二季度继续推进年度投资计划，重点覆盖核电、新能源基地、储能、氢能和构网技术。公司仍以清洁能源规模优势和新型电力系统技术作为主线。",
      "chn-energy": "国家能源集团二季度重点在煤炭电力协同、投资计划和迎峰度夏保供。集团一体化优势仍是核心，同时新能源基地、数智化和碳资产管理继续推进。",
      "ctg": "三峡集团二季度围绕汛前准备、梯级水电运行、新能源和长江保护开展工作。水电安全调度仍是基本盘，海上风电和国际业务是增量方向。",
      "cgn": "中广核二季度重点是核电安全运行、华龙一号项目和共享储能。元江共享储能并网说明公司正在核电之外拓展综合能源和电网调节能力。",
      "cr-power": "华润电力二季度围绕新能源基地、海上风电、配套储能和火电灵活性推进。风光项目扩张和支撑性火电管理共同决定公司转型节奏。",
      "geg": "广东能源集团二季度以省重点项目、迎峰度夏、博贺电厂投运后稳定运行和海上风电布局为主。其工作直接服务广东高负荷地区电力安全。",
      "zj-energy": "浙能集团二季度聚焦浙江能源保供、新能源和数字化应用。人工智能成果入选显示其数字化工作从生产管理逐步走向AI场景落地。",
      "beijing-energy": "京能集团二季度围绕供热季后检修、首都能源保供、迎峰度夏和新能源项目推进。民生保供与绿色低碳转型仍是两条主线。",
      "sdic-power": "国投电力二季度重点是雅砻江水电、水风光互补、新能源并网和防汛检修。水电基本盘和新能源送出能力共同决定其主业增长质量。",
    },
  };

  window.ENERGY_NEWS_DATA = {
    meta: {
      startDate: "2026-01-01",
      lastUpdated: "2026-06-02",
      quarterlyTarget: 5,
    },
    companies,
    quarterTrends,
    companyQuarterSummaries,
    events: rows.concat(q2Rows, coreSupplementRows).filter((row) => !excludedTopicPattern.test([row[2], ...(row[8] || [])].join(" "))).map(([companyId, date, title, summary, significance, sourceType, sourceName, url, tags]) => {
      const event = {
        companyId,
        date,
        title,
        summary,
        significance,
        sourceType,
        sourceName,
        url,
        tags,
      };
      return {
        ...event,
        details: makeDetails(event),
      };
    }),
  };
})();
