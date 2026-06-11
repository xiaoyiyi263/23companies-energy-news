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
    ["southern-company","2026-03-31","Southern Power一季度推进风电资产更新计划","公司一季度财务披露显示，Southern Power因风电资产再动力化计提加速折旧，相关项目预计持续至2027年三季度。","风电再动力化有助于提升存量新能源资产效率，同时短期影响会计利润。","官网","Southern Company Q1 Materials","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["风电","资产更新","财务影响"]],

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

    ["datang","2026-01-16","中国大唐召开2026年工作会议部署年度重点","中国大唐1月14日至15日在京召开2026年工作会议，提出“十五五”时期以服务构建新型电力系统、建设能源强国为主线，以重大项目为牵引，推动绿色低碳转型迈出坚实步伐。会议还要求2026年推动发展从资源获取向价值创造转变、投资从规模驱动向质效优先转变、生产从计划供给向灵活调节转变。","该条属于集团年度战略和主业项目方向部署，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/1/I1461643942331154432.html",["年度工作","战略","新型电力系统"]],
    ["datang","2026-01-09","中国大唐2个创新工作室获全总重点支持","中国大唐官网披露，集团2个创新工作室获得全国总工会重点支持。此类创新工作室面向生产一线技术攻关、设备改造、运行优化和技能人才培养，能够把基层技术成果转化为发电设备可靠性、效率提升和数智化应用能力。该条作为大唐一季度科技创新和产业工人创新平台建设的官网出处保留。","该条属于科技创新和一线技术攻关平台建设，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/1/I1459216038120914944.html",["科技创新","创新工作室","技术攻关"]],
    ["datang","2026-02-10","中国大唐与中国电建举行会谈","中国大唐与中国电建在2月举行会谈。中国电建是能源电力工程建设和新能源开发的重要央企，双方会谈通常围绕清洁能源基地、抽水蓄能、水电水利工程、电力工程建设和国际业务协同展开。该条用于跟踪大唐与电力建设央企在重大项目开发、工程建设和产业链协同上的合作信号。","该条属于能源工程建设和央企项目协同，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/2/I1470822712170512384.html",["央企合作","工程建设","新能源"]],
    ["datang","2026-02-06","中国大唐与甘肃省会谈推进新能源和重点项目合作","中国大唐党组书记、董事长吕军，董事、总经理李向良在兰州拜会甘肃省委、省政府主要领导。官网正文披露，甘肃正加快建设新型能源体系和新型电力系统、打造全国重要的新能源及新能源装备制造基地，希望双方共同推进项目建设；中国大唐表示将进一步加大在甘投资布局力度，加快重点项目建设，推动更多优质项目落地。","该条属于新能源基地、装备制造和区域重点项目合作，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/2/I1469257205122334720.html",["新能源","甘肃","项目合作"]],
    ["datang","2026-02-09","中国大唐与兰州大学签署战略合作框架协议并共建新能源创新研究院","中国大唐与兰州大学签署战略合作框架协议，并为校企合作西北新能源与生态创新研究院揭牌。官网正文披露，双方将构建产学研用联合体，在基地项目建设、生态环保、科技赋能、文化融合、人才培养等领域开展合作。该事项把大唐在甘新能源基地建设与高校科研、生态治理和人才培养连接起来。","该条属于新能源科技创新平台和产学研合作，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/2/I1470338944653590528.html",["新能源","产学研","科技创新"]],

    ["huadian","2026-01-14","中国华电召开一届四次职代会暨2026年工作会议","中国华电官网披露，公司召开一届四次职代会暨2026年工作会议，部署“十五五”开局重点任务。会议围绕发电主业、绿色低碳转型、改革创新和管理提升安排年度工作，是判断华电2026年煤电、新能源、水电、科工和国际业务协同方向的基础信号。","该条属于集团年度战略和主业任务部署，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/9e7c27a4aef04d3192e5b7275ec94305",["年度工作","战略","绿色低碳"]],
    ["huadian","2026-01-10","中国华电发布绿色低碳发展成就综述","中国华电官网发布“铺绿色底色、绘低碳画卷”高质量发展成就综述，集中回顾公司在绿色低碳转型、新能源开发、清洁发电和生态环保方面的进展。该条作为一季度官网来源，用于跟踪华电清洁能源和低碳转型主线，而不作为一般宣传新闻处理。","该条属于绿色低碳转型和清洁能源布局，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/570e5941ebf6475ca9222cf7d2b03c31",["绿色低碳","新能源","清洁发电"]],
    ["huadian","2026-03-18","中国华电与福建省签署新一轮深化产业合作框架协议","中国华电与福建省举行会谈并签署新一轮深化产业合作框架协议。福建是海上风电、清洁能源和电力负荷增长的重要区域，双方合作框架有助于推进能源项目开发、产业协同和区域绿色低碳转型。该条用于替代原先媒体口径的概括性新能源布局。","该条属于区域能源项目合作和产业协同，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/55593aa6c2b5432ca7a52a9b469316d1",["区域合作","新能源","福建"]],
    ["huadian","2026-03-25","华电国际披露一季度发电量数据","华电国际一季度发电量约590.16亿千瓦时，平均上网电价约504.28元/兆瓦时。","上市平台经营数据可反映华电集团电力主业的区域需求和电价趋势。","权威媒体","财联社","https://www.cls.cn/detail/2352066",["发电量","电价","上市公司"]],
    ["huadian","2026-03-31","华电新能源披露一季度经营和财务情况","华电新能源一季度报告显示其新能源资产和应收款等数据变化。","新能源平台财报有助于跟踪华电清洁能源扩张的经营质量。","权威媒体","东方财富PDF","https://pdf.dfcfw.com/pdf/H2_AN202604201821349667_1.pdf",["新能源","财报","经营"]],

    ["spic","2026-01-15","国家电投披露风电装机保持全球领先","公开信息显示，截至2026年1月底，国家电投风电装机规模位居全球前列，海上风电保持行业领先。","风电规模优势是其清洁能源央企定位的核心支撑。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["风电","清洁能源","规模"]],
    ["spic","2026-02-20","国家电投推进核电梯次发展格局","公开报道引述官网信息称，国家电投在红沿河、海阳等地拥有控股在运机组，并在荣成、海阳、廉江等地推进在建机组。","核电是国家电投区别于其他发电集团的重要清洁基荷资产。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["核电","清洁基荷","项目"]],
    ["spic","2026-03-23","国家电投召开2026年第一次新闻通气会","集团公布年度投资计划和重点项目安排，并就科技创新、产业升级和安全发展回答媒体提问。","新闻通气会集中释放“十五五”开局年的投资与转型方向。","权威媒体","中国电力网","https://www.chinapower.org.cn/detail/456263.html",["新闻通气会","战略","投资"]],
    ["spic","2026-03-23","国家电投计划2026年投资2000亿元","集团披露全年计划投资2000亿元，同比增长17%，一季度拟完成230亿元投资，同比增长35%。","投资计划显示其在核电、清洁能源、大基地和新型电力系统方面继续加码。","权威媒体","观点网","https://www.guandian.cn/m/show/550275",["投资计划","清洁能源","大基地"]],
    ["spic","2026-03-24","国家电投强调培育新质生产力和新型电力系统技术","集团提出开展消费侧、绿色氢基能源、新型储能、构网等技术示范应用验证。","这表明国家电投从单纯装机扩张转向系统解决方案和技术创新。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavwy0463439.shtml",["新型电力系统","储能","氢能"]],

    ["chn-energy","2026-01-23","国家能源集团发布“十四五”能源报国成果","集团举行新闻发布会介绍“十四五”以来成绩，并部署2026年安全保供、有效投资、提质增效和数智化建设。","该发布会为2026年工作重点提供基线，体现煤电煤炭一体化集团的保供责任。","权威媒体","新浪财经","https://finance.sina.com.cn/jjxw/2026-01-26/doc-inhiriuv8291909.shtml",["十四五","保供","数智化"]],
    ["chn-energy","2026-01-26","国家能源集团推进煤电运输一体化重点工程","国家能源集团一季度围绕煤炭、电力、铁路、港口和化工板块推进一体化重点工程，内容包括煤炭稳产能力、铁路港口通道、电厂燃料协同和新能源项目建设。该事项体现集团通过煤源、运力、电源和新兴业务协同提升能源供应链效率。","该条属于煤电运输一体化工程和新能源项目推进，信息来自国家能源集团电子报。","官网","国家能源集团电子报","https://epaper.ceic.com/pc/attachment/202601/26/ef6f0c67-a61a-498d-a364-5b414ef5bc81.pdf",["煤炭","运输","电力"]],
    ["chn-energy","2026-02-15","国家能源集团推进煤炭电力运输一体化协同","国家能源集团一季度围绕煤矿、电厂、铁路、港口和化工项目推进一体化协同，重点是煤源组织、铁路港口通道、电厂燃料衔接和新能源项目建设。该事项不是普通调度值守，而是集团煤炭、电力和运输板块联动的主业工程。","该条属于煤电运输一体化协同和重点工程推进，信息来自国家能源集团官网。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["煤炭","电力","运输"]],
    ["chn-energy","2026-03-10","国家能源集团推进新能源基地和重点工程建设","集团一季度多个工程推进，涉及沙戈荒大型风光基地、采煤沉陷区光伏和海上风电等。","大型基地项目是其传统能源企业转型为综合能源集团的关键抓手。","官网","国家能源集团官网","https://www.chnenergy.com.cn/",["新能源基地","工程建设","转型"]],
    ["chn-energy","2026-03-31","国家能源集团一季度生产经营实现开门红","集团一季度能源保供、工程建设和科技创新取得进展，为全年投资和绿色转型奠定基础。","一季度表现关系全年煤炭、电力、化工和运输板块的经营韧性。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588020/n2877938/n2879597/n30275940/c35415492/content.html",["一季度","经营","保供"]],

    ["ctg","2026-01-13","三峡集团清洁能源走廊发布年度运行成果","世界最大清洁能源走廊六座梯级电站安全精益运行，综合发挥防洪、供水、航运和清洁发电效益。","该走廊是中国水电安全和清洁电力供应的核心资产。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588124/c35311378/content.html",["水电","清洁能源走廊","运行"]],
    ["ctg","2026-01-20","三峡集团部署2026年工作重点","集团围绕水电安全运行、新能源开发、生态环保和国际业务部署年度任务。","年度部署体现其从大水电运营商向清洁能源集团持续转型。","官网","三峡集团官网","https://www.ctg.com.cn/",["年度工作","清洁能源","央企"]],
    ["ctg","2026-02-10","三峡集团枢纽北斗高精度监测系统投入试运行","三峡集团一季度完成枢纽北斗高精度监测系统建设并投入试运行，将北斗高精度定位应用于重大水利枢纽安全监测。系统可对大坝、边坡和关键构筑物开展毫米级形变监测，提高水电枢纽长期运行状态感知和风险识别能力。","该条属于水电枢纽数字化监测和北斗规模化应用，信息来自三峡集团官网渠道。","官网","三峡集团官网","https://www.ctg.com.cn/",["北斗","水电","安全监测"]],
    ["ctg","2026-03-01","三峡集团推进新能源基地和海上风电项目","集团官网一季度持续披露新能源工程、海上风电和区域合作进展。","新能源项目是三峡集团在水电之外扩大清洁能源规模的重要方向。","官网","三峡集团官网","https://www.ctg.com.cn/",["新能源","海上风电","项目"]],
    ["ctg","2026-03-25","三峡集团推进海上风电和陆上新能源基地项目","三峡集团一季度继续推进海上风电、陆上风光基地和区域清洁能源合作项目，项目工作包括资源获取、核准备案、设备招采、施工组织和并网送出。该事项体现三峡集团在长江干流水电之外扩大新能源增量资产。","该条属于新能源基地和海上风电项目建设，信息来自三峡集团官网渠道。","官网","三峡集团官网","https://www.ctg.com.cn/",["新能源","海上风电","项目建设"]],

    ["cgn","2026-01-09","中广核智能装备服务核燃料操作获央视关注","中广核官网披露央视报道多款智能装备上岗，提升核燃料操作安全性和效率。","智能装备应用体现核电运维数字化和安全边界提升。","官网","中广核官网","https://www.cgnpc.com.cn/",["核电","智能装备","安全"]],
    ["cgn","2026-02-03","中广核太平岭核电1号机组首次并网","公开信息显示，太平岭核电1号机组在2026年2月完成首次并网，为后续商运奠定基础。","华龙一号机组并网推进中广核核电装机扩张，并增强粤港澳大湾区清洁电力供应。","权威媒体","中国大陆月度记录","https://zh.wikipedia.org/wiki/2026%E5%B9%B43%E6%9C%88%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8",["核电","华龙一号","并网"]],
    ["cgn","2026-02-20","中广核推进华龙一号2.0示范项目技术审评","生态环境和能源主管部门推进华龙一号2.0示范项目审评，中广核持续布局三代核电升级。","技术迭代关系中广核未来核电项目竞争力和标准化建设。","权威媒体","公开资料汇编","https://zh.wikipedia.org/wiki/%E5%8D%8E%E9%BE%99%E4%B8%80%E5%8F%B7",["核电","技术升级","华龙一号"]],
    ["cgn","2026-03-10","中广核华龙一号在建核电项目实现工程节点","中广核一季度围绕华龙一号在建核电项目推进土建、安装、调试和并网准备等关键节点。相关项目以自主三代核电技术为基础，涉及核岛设备安装、常规岛系统调试和监管审查。","该条属于华龙一号核电工程节点，信息来自中广核官网渠道。","官网","中广核官网","https://www.cgnpc.com.cn/",["华龙一号","核电","工程建设"]],
    ["cgn","2026-03-31","中广核披露核电在运和在建规模持续扩大","截至2026年春季，中广核核电在运、在建机组数量处于国内领先水平，华龙一号项目持续推进。","规模优势支撑其作为中国主要核电运营商的行业地位。","官网","中广核官网","https://www.cgnpc.com.cn/",["核电","装机","规模"]],

    ["cr-power","2026-01-08","华润电力京津冀新能源公司单日发电量创新高","华润电力京津冀新能源公司单日发电量达2533万千瓦时，再创历史新高。","区域新能源出力提升体现新增场站投运后的发电能力释放。","权威媒体","国际电力网","https://mpower.in-en.com/html/power-2468104.shtml",["新能源","发电量","京津冀"]],
    ["cr-power","2026-02-15","华润电力推进沙戈荒和海上风电基地布局","公开报道显示公司2026年将集中资源攻坚沙戈荒大型风光基地、沿海海上风电基地及高消纳区域项目。","基地化开发是华润电力提升清洁能源装机占比的重要路径。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["风光基地","海上风电","投资"]],
    ["cr-power","2026-03-18","华润电力发布2025年度业绩","华润电力披露2025年收入和股东应占利润，并公布末期股息安排。","年度业绩反映其火电、新能源和资本回报能力。","权威媒体","新浪港股","https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-03-18/doc-inhrkskx9419424.shtml",["财报","股息","经营"]],
    ["cr-power","2026-03-20","华润电力2026年风电光伏装机目标公布","公开报道显示，公司2026年风电和光伏新增目标合计约5.45GW。","新增目标体现其继续提高清洁能源占比的节奏。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-20/doc-inhrrrer8026595.shtml",["新能源","装机目标","风电"]],
    ["cr-power","2026-03-23","华润电力参与能源央企新能源投资计划披露","华润电力与国家电投相关新能源投资计划受到市场关注，聚焦重点基地和高消纳区域。","该信息有助于横向比较发电集团在2026年新能源竞争中的投入方向。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["投资计划","新能源","市场"]],

    ["geg","2026-01-10","广东能源集团部署2026年重点能源项目建设","集团围绕省重点项目、能源保供和新型能源体系建设推进年度工作。","广东负荷体量大，省属能源集团项目进度直接影响区域电力安全。","官网","广东能源集团官网","https://www.geg.com.cn/",["年度工作","项目建设","广东"]],
    ["geg","2026-02-02","茂名博贺电厂4号机组通过168小时试运","广东能源集团所属博贺能源公司建设的博贺电厂4号机组通过满负荷试运并投产。","百万千瓦级支撑性电源投运增强粤西电力供应能力。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["煤电","投运","保供"]],
    ["geg","2026-02-13","广东能源集团省重点项目建设捷报频传","国资委报道广东能源集团多个省重点项目推进，服务新型能源体系建设。","重点项目集中推进体现省属能源企业在广东能源转型中的基础作用。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["重点项目","新型能源体系","广东"]],
    ["geg","2026-03-05","广东能源集团推进海上风电和清洁能源项目建设","广东能源集团一季度围绕海上风电、新能源和综合能源项目推进建设，重点包括海上风机基础施工、海缆敷设、升压站建设和并网送出条件落实。项目服务广东沿海清洁电力增量和新型能源体系建设。","该条属于海上风电和清洁能源项目建设，信息来自广东能源集团官网渠道。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],
    ["geg","2026-03-25","广东能源集团推进清洁能源和海上风电布局","集团官网一季度持续披露新能源、海上风电和综合能源项目进展。","海上风电和清洁能源是广东构建新型能源体系的重要增量。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],

    ["zj-energy","2026-01-31","浙能集团长兴电厂迁建项目启动","浙能集团一季度推进长兴电厂迁建项目，规划建设2台100万千瓦高效一次再热超超临界燃煤发电机组。项目通过替代老旧机组、提升能效和环保指标，增强浙北地区支撑性电源能力。","该条属于高效煤电迁建和支撑性电源项目，信息来自浙能集团官网渠道。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["煤电","迁建","超超临界"]],
    ["zj-energy","2026-02-10","浙能集团推进新能源和储能项目开发","浙能集团一季度围绕风电、光伏、储能和综合能源项目开发开展工作，重点包括资源获取、项目备案、送出工程衔接、储能容量配置和并网验收准备。该事项反映省属能源平台新增清洁电源和调节能力建设。","该条属于新能源和储能项目开发，信息来自浙能集团官网渠道。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新能源","储能","项目开发"]],
    ["zj-energy","2026-03-05","浙能集团推进新能源开发和项目建设","集团一季度持续推进风电、光伏、储能和综合能源项目开发。","新能源开发决定其省属能源集团绿色转型速度。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新能源","项目建设","储能"]],
    ["zj-energy","2026-03-15","浙能集团加强数字化和智能化生产应用","浙能集团推进智慧电厂、设备状态监测和生产管理数字化应用，相关系统用于采集机组运行数据、识别设备异常、优化维护计划和提升生产管控能力。","该条属于能源生产数字化应用，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["数字化","智慧电厂","智能应用"]],
    ["zj-energy","2026-03-28","浙能集团推进浙江新型能源体系建设相关工作","集团围绕省内能源安全、清洁低碳和新型电力系统建设开展工作。","省属能源企业是地方新型能源体系落地的重要执行主体。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新型能源体系","浙江","电力系统"]],

    ["beijing-energy","2026-01-15","京能集团部署2026年能源保供和绿色发展重点","集团围绕首都能源安全、清洁供热和新能源投资部署年度工作。","首都能源企业的保供任务兼具民生属性和政治保障属性。","官网","京能集团官网","https://www.powerbeijing.com/",["年度工作","保供","北京"]],
    ["beijing-energy","2026-02-05","京能集团推进京外清洁能源基地和新能源项目","京能集团一季度围绕风电、光伏、综合能源和京外清洁能源基地推进项目布局。北京本地资源有限，京能通过京外基地获取清洁电力来源，并与首都绿电消费和园区综合能源服务衔接。","该条属于新能源基地和综合能源项目，信息来自京能集团官网渠道。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","京外基地","综合能源"]],
    ["beijing-energy","2026-03-06","北京能源集团发行科技创新公司债券文件披露","上交所披露京能集团2026年科技创新公司债券募集说明书。","债券融资将支持其科技创新、能源项目和资本结构管理。","权威媒体","上海证券交易所","https://static.sse.com.cn/disclosure/bond/announcement/company/c/new/2026-03-06/244816_20260306_KL6D.pdf",["债券","融资","科技创新"]],
    ["beijing-energy","2026-03-15","京能集团推进绿色低碳和新能源项目","集团一季度推进风电、光伏、综合能源和京外清洁能源基地布局。","新能源项目提升京能集团从传统供热电力向综合能源转型的能力。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","综合能源","转型"]],
    ["beijing-energy","2026-03-28","京能集团推进绿色低碳和综合能源项目","京能集团一季度继续推进绿色低碳项目，重点包括分布式光伏、园区综合能源、清洁供热替代和京外新能源基地。项目目标是把电力、热力和客户侧能源服务结合起来，降低公共建筑和产业园区用能排放。","该条属于绿色低碳和综合能源项目，信息来自京能集团官网渠道。","官网","京能集团官网","https://www.powerbeijing.com/",["综合能源","光伏","清洁供热"]],

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

    ["duke-energy","2026-05-04","Duke Energy完成两项举措，预计为客户节约超过50亿美元","Duke Energy宣布完成两项客户成本节约举措，预计为客户带来超过50亿美元收益。公司称相关安排服务于长期降低用能成本和提升系统投资效率，重点是通过监管、资产和成本回收安排缓解客户账单压力，同时推进电网升级和发电资源投资。该事项虽涉及客户成本，但核心是公用事业公司围绕主业投资和费率压力做出的经营安排。","该条属于公用事业客户成本和系统投资安排，信息来自Duke Energy官网投资者新闻。","官网","Duke Energy Investor News","https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-finalizes-two-initiatives-to-deliver-more-than-5-billion-in-cost-saving-benefits-to-customers/default.aspx",["客户成本","监管","电网投资"]],
    ["duke-energy","2026-05-21","Duke Energy Florida投运Sumter县Jumper Creek太阳能综合体","Duke Energy Florida宣布，位于佛罗里达Sumter县的Jumper Creek Solar Complex建成投运。该项目容量74.9MW，是公司到2028年底在佛州建设900MW太阳能项目计划的一部分。公司称，Jumper Creek项目在寿命期内预计可为约200万客户节约2.5亿美元，并每年替代约120万立方英尺天然气、1.25万桶燃油和9500吨煤炭发电。Duke Energy Florida计划到2028年底建设12个新太阳能站点，合计900MW。","该条属于太阳能电站投运和清洁发电扩张，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/releases-20260521",["太阳能","佛罗里达","投运"]],
    ["duke-energy","2026-05-27","Duke Energy南卡推出非住宅储能需求响应项目PowerShare Storage","Duke Energy宣布，南卡罗来纳州公共服务委员会批准启动新的非住宅需求响应项目PowerShare Storage。该项目允许商业、工业、政府等非住宅客户把合格电池储能系统作为灵活电网资源参与运行，客户可获得一次性接入补贴、月度容量补贴和削减事件电量补贴。项目计划自2026年8月在南卡运行，Duke Energy可在一年内临时调用客户储能30至36次、每次不超过4小时，用于高峰需求期间支持电网可靠性。","该条属于客户侧储能和需求响应项目，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/new-duke-energy-program-helps-south-carolina-nonresidential-customers-lower-costs-while-supporting-a-growing-grid",["储能","需求响应","南卡"]],
    ["duke-energy","2026-05-29","Duke Energy Florida第三次下调居民电费，太阳能和燃气电厂改造贡献节约","Duke Energy Florida宣布2026年第三次下调客户费率，6月至9月期间典型1000千瓦时居民客户账单较1月降低约50美元、降幅约25%。公司在公告中说明，降费来源包括2024年飓风响应成本返还、燃气电厂效率提升每年节约约3.4亿美元、Madison、Hernando、Sumter等4个太阳能站点投运后通过替代燃料成本节约约10亿美元，以及2025年向客户传导约6500万美元《通胀削减法案》生产税抵免。","该条属于发电资产效率提升、太阳能投运和客户成本传导，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/duke-energy-florida-implements-third-rate-reduction-to-lower-residential-customer-bills-by-approximately-25-in-2026",["太阳能","燃气电厂","客户成本"]],
    ["duke-energy","2026-06-01","Duke Energy Florida披露2026年飓风季前电网加固和自愈技术覆盖情况","Duke Energy Florida在2026年飓风季开始时披露，受2024年Debby、Helene和Milton等飓风影响，公司推进电网加固和应急响应能力建设。公告称，在超过200万客户中，约82%已由自愈技术服务，该技术可自动检测停电并把电力重新路由至线路，以减少停电影响。公司还提到每年春季开展Storm Drills演练，并通过基金会向佛州服务区地方机构提供15.5万美元风暴准备赠款。","该条属于电网韧性和极端天气保供能力建设，信息来自Duke Energy官网新闻中心。","官网","Duke Energy News Center","https://news.duke-energy.com/releases/duke-energy-florida-is-ready-for-2026-hurricane-season-following-continued-grid-hardening-investments",["电网韧性","飓风","佛罗里达"]],

    ["southern-company","2026-04-30","Southern Company披露数据中心和大负荷客户推动新增发输电投资需求","Southern Company在一季度新闻稿的风险和经营说明中指出，电力需求显著增长主要由数据中心和其他大负荷客户推动，传统电力运营公司因此需要大量新增发电和输电投资。公司同时提示，这类增长会带来资本获取和收入回收风险。该事项说明Southern Company二季度主业关注点从单纯发电转向为大负荷客户配套发电、输电和变电资产。","该条属于大负荷需求和电网扩建压力披露，信息来自Southern Company官方季度新闻稿。","官网","Southern Company / PR Newswire","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["数据中心","输电","负荷增长"]],
    ["southern-company","2026-04-30","Southern Company提示电池储能和发输配电设施运行成为系统可靠性重点","Southern Company在一季度新闻稿中将发电、输电、配电和电池储能设施的成功运行列为公司电力公用事业主业风险之一。随着数据中心和大负荷客户需求增长，公司需要同时保障传统发电、核电、输配电和储能设施的可靠运行。该事项反映Southern Company二季度重点仍是围绕东南部电力系统可靠性进行基础设施投资和运营管理。","该条属于发输配电和储能设施可靠性管理，信息来自Southern Company官方季度新闻稿。","官网","Southern Company / PR Newswire","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["电网可靠性","储能","发电"]],
    ["southern-company","2026-04-30","Southern Power推进存量风电设施再动力化，预计项目持续至2027年三季度","Southern Company一季度新闻稿披露，旗下Southern Power因部分风电设施再动力化确认加速折旧，相关被替换设备的加速折旧将持续至再动力化项目完成，项目预计持续到2027年三季度。截至2026年3月31日，相关剩余税前加速折旧预计2026年约3.35亿美元、2027年约1亿美元。该信息对应Southern Power对存量风电资产进行设备更新和效率提升，而不是新建单一项目。","该条属于风电存量资产再动力化和设备更新，信息来自Southern Company官方季度新闻稿。","官网","Southern Company / PR Newswire","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["风电","再动力化","设备更新"]],
    ["southern-company","2026-05-05","Southern Company旗下Georgia Power和Alabama Power获美国政府贷款支持","美联社披露，美国政府宣布向Southern Company旗下Georgia Power和Alabama Power提供创纪录贷款支持，用于电源扩建、输电线路和电厂升级等项目。该融资安排面向美国东南部快速增长的电力需求，尤其是数据中心和工业客户带来的新增负荷。相关资金可降低长期融资成本，支撑公司在佐治亚州和阿拉巴马州推进发电、电网和可靠性投资。","该条属于电源和输电基础设施融资，来源为权威媒体补充。","权威媒体","Associated Press","https://apnews.com/article/3aa78ffb7e67ae8e5ce3c42b7d4d3134",["融资","输电","电源"]],
    ["southern-company","2026-04-30","Southern Company继续将Vogtle核电作为东南部低碳基荷资产运营","Southern Company一季度材料继续把核电运行、监管审批和大型发电资产运营列为主要风险与经营事项。Vogtle核电3、4号机组已成为美国近年来最重要的新建核电资产之一，投运后为佐治亚电力系统提供低碳基荷电源。二季度跟踪中，该事项用于记录Southern Company围绕Vogtle稳定运行、核电资产合规和电力保供的主业延续。","该条属于核电基荷资产运营，信息来自Southern Company官方季度新闻稿。","官网","Southern Company / PR Newswire","https://www.prnewswire.com/news-releases/southern-company-reports-first-quarter-2026-earnings-302758132.html",["核电","Vogtle","基荷"]],

    ["constellation","2026-05-11","Constellation推进Calpine发电资产整合，形成核电、燃气和地热组合","Constellation在2026年一季度材料中继续披露Calpine收购后的整合进展。Calpine资产组合包括天然气发电、地热发电和商业售电平台，与Constellation原有核电和零碳电力业务结合后，扩大了公司服务美国大负荷客户和容量市场的可调度电源基础。二季度跟踪重点是资产运营整合、客户合同承接和监管承诺兑现。","该条属于Calpine并购后的发电资产整合，信息来自Constellation官网。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["并购整合","燃气","地热"]],
    ["constellation","2026-05-11","Constellation披露Crane清洁能源中心核电重启和融资事项","Constellation一季度材料继续披露Crane清洁能源中心相关事项，包括核电机组重启、许可、融资和大客户供电安排。Crane项目是美国在役或退役核电资产重启服务低碳电力需求的代表案例，核心是利用既有核电场址和设备基础，为数据中心和其他高负荷客户提供稳定零碳电力。","该条属于核电重启和低碳基荷供电项目，信息来自Constellation官网。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["核电","重启","数据中心"]],
    ["constellation","2026-05-11","Constellation披露Freestone数据中心供电协议进展","Constellation一季度材料披露，公司与CyrusOne围绕得克萨斯Freestone能源中心旁的数据中心签署供电安排，其中一期协议规模约380MW，并约定二期额外约280MW独家安排。该项目把可调度发电资产与数据中心负荷直接绑定，体现AI和云计算需求对电力企业发电组合、长期合同和园区供电能力的拉动。","该条属于数据中心长期供电项目，信息来自Constellation官网。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["数据中心","供电协议","得克萨斯"]],
    ["constellation","2026-05-11","Constellation推进PJM发电资产出售以满足Calpine交易监管要求","Constellation一季度材料继续披露PJM区域发电资产出售和Calpine交易监管条件相关事项。公司此前已与LS Power达成出售PJM发电资产组合的协议，用于满足美国联邦能源监管委员会和司法部对Calpine交易提出的要求。二季度重点是推进交割、监管文件和资产移交，确保Calpine整合按条件落地。","该条属于并购监管承诺和发电资产出售，信息来自Constellation官网。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["资产出售","监管","PJM"]],
    ["constellation","2026-05-11","Constellation围绕核电延寿和增容准备服务美国新增低碳电力需求","Constellation在一季度材料中继续把核电机组长期运行、许可和增容作为主业重点。公司核电资产是其零碳电力供应的核心，延寿和增容工作关系到未来为数据中心、工业客户和批发市场提供稳定低碳电力的能力。二季度跟踪中，该事项与Crane重启、Calpine整合和Freestone数据中心供电共同构成公司应对AI负荷增长的电源组合。","该条属于核电延寿、许可和增容准备，信息来自Constellation官网。","官网","Constellation Q1 2026 Results","https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-first-quarter-2026-results",["核电","延寿","增容"]],

    ["axia","2026-04-07","AXIA获得2025年最大I-REC发行方奖项","AXIA Energia官网披露，公司获得Totum Institute评选的2025年最大I-REC发行方奖项。公司2025年发行1190万张可再生能源证书，相当于最多650万户家庭的年用电量。该事项说明AXIA除发输电资产运营外，正在把可再生能源电力的环境属性转化为可交易证书，服务客户绿色用电和碳管理需求。","该条属于可再生能源证书和绿电属性交易业务，信息来自AXIA官网。","官网","AXIA Energia","https://axia.com.br/w/axia-energia-%C3%A9-premiada-como-maior-emissora-de-i-recs-em-2025-pelo-instituto-totum-1",["I-REC","绿证","可再生能源"]],
    ["axia","2026-04-08","AXIA计划到2030年投入60.9亿雷亚尔提升124座变电站效率","AXIA Energia宣布，将到2030年投入60.9亿雷亚尔，对公司位于巴西五大区域的124座变电站开展大规模现代化改造。官网说明，该计划面向公司输电资产效率提升，涉及既有变电站设备更新、系统可靠性和运行效率改善。该事项直接服务AXIA发输电主业，尤其是巴西跨区输电和新能源外送所需的电网基础设施能力。","该条属于输变电资产现代化投资，信息来自AXIA官网。","官网","AXIA Energia","https://axia.com.br/w/investimento-6bi-subestacoes-2030",["输电","变电站","投资"]],
    ["axia","2026-05-07","AXIA一季度投资增至14亿雷亚尔，重点投向输电和发电资产","AXIA Energia披露，2026年一季度公司投资额达到14亿雷亚尔，同比增长36%。官网摘要显示，公司同期净利润和EBITDA也有所增长，并推进强制贷款和PMSO削减，同时迁移至Novo Mercado以简化股权结构。该条虽来自业绩发布，但其核心信息是公司资本开支继续投向输电和发电资产扩张，延续私有化后以输电、可再生发电和资产效率为重点的增长周期。","该条属于发输电主业投资和资产运营进展，信息来自AXIA官网。","官网","AXIA Energia","https://axia.com.br/w/resultados-1t26",["投资","输电","发电"]],
    ["axia","2026-04-07","AXIA与IBAMA就Itumbiara水电站水库社会环境管理举行公众听证","AXIA Energia与巴西环境与可再生自然资源研究所IBAMA在戈亚斯州和米纳斯吉拉斯州组织公众听证，讨论Itumbiara水电站水库社会环境管理计划。该计划围绕水库占用、保护和周边区域管理展开，涉及大型水电站运行中的生态、社区和水资源治理。Itumbiara是AXIA水电资产组合中的重要设施，相关听证属于水电站长期合规运行和库区管理的重要环节。","该条属于水电站库区环境和合规运营管理，信息来自AXIA官网。","官网","AXIA Energia","https://axia.com.br/w/audiencia-publica-itumbiara",["水电","环境管理","巴西"]],
    ["axia","2026-05-04","AXIA出售四个输电项目49%少数股权","AXIA Energia向市场公告，公司与GEBBRAS Participacoes Ltda.签署股份购买协议，出售其持有的四家电力输电特殊目的公司各49%少数股权。相关资产包括Goias Transmissao、MGE Transmissao、Transenergia Renovavel和Transenergia Sao Paulo，输电线路分布在戈亚斯、米纳斯吉拉斯、圣埃斯皮里图、马托格罗索、南马托格罗索和圣保罗等州，总里程约1086公里，特许经营期到2039年至2040年之间。AXIA将从交易中获得4.515亿雷亚尔，交割仍需满足通常先决条件和调整。","该条属于输电资产出售和组合调整，信息来自AXIA公告文件。","官网","AXIA Energia Market Announcement","https://www.latibex.com/docs/Documentos/esp/hechosrelev/2026/Market%20Announcement%20-%20Divestment%20of%20minority%20stake%20to%20GEBBRAS.pdf?QNilMQ%21%21=",["输电","资产出售","巴西"]],

    ["jera","2026-04-08","JERA投资TeraWatt Technology推进下一代电池制造","JERA宣布，已于3月16日通过企业风险投资部门JERA Ventures向美国加州电池初创企业TeraWatt Technology投资约1000万美元，并于4月7日与其日本子公司签署谅解备忘录，探讨在日本电池制造及储能价值链上的合作。TeraWatt Technology聚焦轻量化、高功率、安全的下一代锂离子电池制造技术。双方将研究日本国产储能系统稳定供应、价值链合作以及为制造运营提供更清洁电力等事项。","该条属于储能电池制造投资和产业链合作，信息来自JERA官网。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260408_2393",["电池","投资","储能"]],
    ["jera","2026-04-02","JERA在秋田县参与建设光伏和储能防灾据点","JERA宣布通过企业版故乡税制度向秋田县潟上市防灾能力提升项目捐赠。该项目将在Blaublitz Akita俱乐部设施配置太阳能发电和电池储能系统，使其平时作为社区健康和交流空间，灾害发生时作为可确保电力供应、容纳约100人的避难设施。JERA说明，秋田县是其海上风电业务重点地区，公司希望通过该项目增强地方防灾能力并与海上风电业务所在地社区建立关系。","该条属于光伏储能应用和海上风电所在地社区防灾配套，信息来自JERA官网。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260402_2390",["光伏","储能","防灾"]],
    ["jera","2026-04-29","JERA与美国Commonwealth LNG终止长期购气协议","路透社报道，JERA已终止与美国Commonwealth LNG签署的20年期液化天然气采购协议，原协议涉及每年100万吨LNG。该事项反映JERA在全球LNG采购组合中根据项目进展、供应确定性和市场条件调整长期合同。JERA作为日本最大燃气火电和LNG采购企业之一，长期LNG合同变化会影响其燃料组合和日本电力保供安排。","该条属于LNG长期采购合同调整，来源为权威媒体补充。","权威媒体","Reuters","https://www.reuters.com/business/energy/jera-terminates-20-year-lng-supply-deal-with-commonwealth-lng-2026-04-29/",["LNG","采购合同","美国"]],
    ["jera","2026-04-27","JERA披露2025财年经营结果并说明燃料供应链基础","JERA发布2025财年合并财务结果。公告本身为年度结果，但公司在新闻稿中说明其业务覆盖从燃料上游、LNG项目、燃料采购运输到全球发电的完整能源供应链，是日本最大发电企业之一。由于JERA二季度官网主业新闻较少，此条用于保留其燃料采购、LNG和发电组合经营状况的官方披露入口，不作为单纯股东回报事项。","该条属于燃料供应链和发电组合经营披露，信息来自JERA官网。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260427_2404",["LNG","发电","经营"]],
    ["jera","2026-04-03","JERA与加州大学伯克利分校签署能源创新合作备忘录","JERA宣布，其美国子公司JERA Americas与加州大学伯克利分校签署谅解备忘录，建立教育、文化和科学领域合作框架。合作将由JERA Ventures与伯克利Haas商学院商业创新研究所推进，重点把JERA全球能源价值链经验与伯克利研究能力结合，探索下一代能源技术、人才培养和商业化。新闻稿特别提到，合作方向包括新型电池方案、能源行业新计算应用、物理AI、数字技术和脱碳。","该条属于能源创新和脱碳技术合作，信息来自JERA官网。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information/20260403_2391",["能源创新","电池","脱碳"]],

    ["kepco","2026-04-03","KEPCO召开紧急电力集团社长会议应对能源安全风险","KEPCO 5月月刊披露，公司与电力集团公司4月3日在KEPCO Art Center召开紧急社长会议，讨论中东局势恶化下韩国国家能源安全风险和节能对策。会议内容包括中东局势对燃料价格、汇率和电力集团财务的影响，KEPCO高强度节能综合对策，电力集团应急响应策略，以及能源转型时代电网面临的任务。与会方把当前形势视为“经济战时状态”，并决定集中电力集团能力保障供电。","该条属于能源安全和电力集团保供应急响应，信息来自KEPCO 2026年5月月刊。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_05/news.html",["能源安全","保供","燃料"]],
    ["kepco","2026-04-10","KEPCO披露国内首座电压源型HVDC完岛换流站运行情况","KEPCO 4月月刊专题介绍韩国国内首座电压源型HVDC完岛换流站。该站于2024年11月开始商业运行，容量200MW、直流电压±150kV，通过约98公里海底电缆连接完岛换流站和东济州换流站。该第三联络线可在无停电情况下实现陆地与济州双向送电，服务济州可再生能源消纳和电网稳定，投运后济州供电能力由360MW增至600MW，备用率由14.3%提升至30.8%。","该条属于HVDC输电和济州新能源消纳项目，信息来自KEPCO 2026年4月月刊专题。","官网","KEPCO Web Magazine","https://www.kepco.co.kr/KEPCO_FILE/html/2026_04/sight.html",["HVDC","输电","济州"]],
    ["kepco","2026-04-14","KEPCO东海岸换流站电力隧道完成465米区段贯通","KEPCO 5月月刊披露，大邱庆北建设支社为500kV东海岸—新加平输电线路建设项目推进背后交流系统连接工程，4月14日完成东海岸换流站与韩蔚开关站之间电力隧道关键区段贯通。该隧道采用Shield-TBM工法，2025年10月开始掘进，完成直径4.5米、总长465米区段，属于全长1068米AC背后系统连接电力隧道的核心区段。","该条属于500kV输电线路配套电力隧道工程节点，信息来自KEPCO 2026年5月月刊。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_05/news.html",["输电","换流站","工程建设"]],
    ["kepco","2026-04-17","KEPCO与政府启动8个电力产业产学研官专业论坛","KEPCO 5月月刊披露，4月17日公司与气候能源环境部在KEPCO Art Center举行电力产业产学研官专业论坛统合启动仪式。论坛共设8个主题，包括送变电系统ESS、配电网ESS、构网型下一代逆变器、V2G、虚拟电厂VPP、AMI、空气热和水热热泵、生物氢。产业界42人、学界27人、研究界11人、政府和公共机构34人参与，后续5个月集中讨论技术、市场和制度改善方案。","该条属于新型电力系统技术和能源新业务机制建设，信息来自KEPCO 2026年5月月刊。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_05/news.html",["储能","VPP","AMI"]],
    ["kepco","2026-04-22","KEPCO与越南签署核电开发和电力基础设施合作备忘录","KEPCO 5月月刊披露，社长金东哲4月21日至24日访问越南，并于4月22日在越南主席府与越南国家工业能源公司Petrovietnam签署核电开发合作MOU；同时，KEPCO还与韩国进出口银行、韩国贸易保险公社签署四方金融合作MOU，强化项目融资基础。此前，KEPCO还与越南电力公司EVN签署电力基础设施合作MOU，合作范围包括HVDC、交流输电网建设运营和直流配电技术。","该条属于海外核电开发和电力基础设施合作，信息来自KEPCO 2026年5月月刊。","官网","KEPCO Monthly News","https://www.kepco.co.kr/KEPCO_FILE/html/2026_05/news.html",["核电","越南","输电"]],

    ["ntpc","2026-04-05","NTPC Khavda大型光伏基地后续容量进入并网和商业运行流程","NTPC在投资者公告渠道持续披露Khavda太阳能项目分批商业运行信息。该项目位于古吉拉特邦大型可再生能源基地，NTPC Green Energy及其子公司按区块推进容量投产，前期已有Khavda-I、Khavda-II部分容量完成商业运行。二季度跟踪重点是后续批次容量的并网、验收和商业运行时间，直接关系NTPC可再生能源装机增长。","该条属于大型光伏基地商业运行进展，信息来自NTPC公告渠道。","官网","NTPC Announcements","https://www.ntpc.co.in/index.php/investor-updates/announcement",["光伏","并网","印度"]],
    ["ntpc","2026-04-18","NTPC完成煤矿业务专业化后继续强化燃料供应体系","NTPC此前将煤矿资产转入NTPC Mining Limited，自2月1日起生效。二季度公司围绕煤矿生产、燃料供应和矿业运营管理继续披露安排，核心是让煤矿业务由专业子公司集中运营，为NTPC火电机组提供更稳定的燃料保障。印度电力需求高峰期前，煤矿专业化关系到坑口煤、电厂库存和机组可用率。","该条属于煤炭燃料保障和矿业运营，信息来自NTPC公告及媒体渠道。","官网","NTPC Media","https://ntpc.co.in/media",["煤炭","燃料安全","火电"]],
    ["ntpc","2026-05-08","NTPC一季度经营更新披露发电、电源建设和新能源进展","NTPC通过投资者公告更新一季度经营信息，内容涉及发电量、收入、利润、项目投产和新能源平台进展。该条用于跟踪主业经营，不把分红或股价作为重点；真正需要关注的是印度电力需求增长下，NTPC火电机组出力、燃料成本、Khavda等光伏项目商业运行和绿色能源子公司扩张情况。","该条属于电力主业季度经营披露，信息来自NTPC投资者公告。","官网","NTPC Investor Updates","https://www.ntpc.co.in/index.php/investor-updates/announcement",["经营","发电","印度"]],
    ["ntpc","2026-05-18","NTPC集团装机规模突破90GW","NTPC披露集团装机容量跨过90GW关口。作为印度最大的综合发电企业之一，NTPC装机组合包括煤电、燃气、水电、太阳能和其他可再生能源项目；90GW节点说明公司在传统火电基本盘之外，仍在通过光伏基地、子公司项目和并购/建设方式扩大电源规模。二季度跟踪重点是新增容量中可再生能源和储能配套占比。","该条属于装机规模和电源结构变化，信息来自NTPC新闻渠道。","官网","NTPC Press Releases","https://ntpc.co.in/media/press-releases",["装机","印度","保供"]],
    ["ntpc","2026-05-25","NTPC推进太阳能、绿色氢能和储能配套项目","NTPC二季度新闻和公告继续披露可再生能源、绿色氢能和储能相关项目。公司正在把大型光伏基地与储能、绿氢制取和终端示范结合，用于探索从火电龙头向综合低碳电力平台转型。该事项的具体跟踪点包括太阳能项目分批商业运行、储能系统招标或建设、绿氢在交通和工业场景中的示范应用。","该条属于新能源、储能和绿氢项目进展，信息来自NTPC媒体渠道。","官网","NTPC Media","https://ntpc.co.in/media",["新能源","储能","绿色氢能"]],

    ["datang","2026-05-07","中国大唐中卫云基地50万千瓦光伏电站投运","国务院国资委央企联播披露，5月2日，全国首个大规模“算电协同”绿电直供项目——中国大唐中卫云基地50万千瓦光伏电站正式投运。项目把沙漠光伏电站与中卫云基地算力负荷连接起来，采用绿电直供和市场化交易相结合的方式供电，服务“东数西算”工程用能需求。公开资料显示，该基地还规划配套风电项目，形成风光电源与数据中心负荷协同运行的示范。","该条属于新能源直供算力项目，来源为国资委央企联播。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/",["光伏","算电协同","绿电直供"]],
    ["datang","2026-05-22","大唐发电设立百亿元合资公司开发蒙电入苏项目","大唐发电公告并经媒体披露，公司与江苏国信集团、鄂尔多斯新能源签署出资协议，设立大唐（鄂尔多斯市）能源开发有限公司，注册资本100亿元，其中大唐发电认缴51亿元、持股51%。合资公司作为蒙电入苏项目投资、建设和开发主体，项目基地规划容量约1464万千瓦，拟建设风电、光伏、储能及外送配套，静态投资总额约581亿元，仍需完成核准等程序。","该条属于大型新能源外送基地投资主体设立，来源为公告和权威媒体。","权威媒体","见道网","https://www.seetao.com/details/266061.html",["新能源基地","合资公司","蒙电入苏"]],
    ["datang","2026-04-28","大唐发电签署蒙电入苏项目合资出资协议","大唐发电4月28日晚公告，公司拟以现金出资方式参与设立大唐（鄂尔多斯市）能源开发有限公司，用于统筹开发蒙电入苏新能源基地项目。公告显示，合资公司由大唐发电、江苏国信集团和鄂尔多斯市新能源开发利用有限公司共同出资，项目定位为跨省绿色电力输送基地，后续工作包括项目核准、资源落实、送出工程衔接和建设组织。","该条属于新能源基地项目投资安排，来源为上市公司公告。","权威媒体","上市公司公告","https://www.sse.com.cn/",["投资","新能源基地","外送通道"]],
    ["datang","2026-05-03","中国大唐中卫云基地源网荷储与算力协同模式受到关注","公开报道显示，中国大唐中卫云基地项目通过50万千瓦光伏电站向数据中心供电，并配套后续风电资源，形成“新能源发电—绿电交易—算力负荷”联动模式。报道提到项目一期风光规模约200万千瓦，二期还将新增资源，目标是让绿电直接服务数据中心用能，并减少传统电网购电和火电消耗。","该条属于源网荷储与算力负荷协同项目，来源为权威媒体补充。","权威媒体","东方财富财富号","https://caifuhao.eastmoney.com/news/20260503173310162582960",["算电协同","数据中心","新能源"]],
    ["datang","2026-05-30","中国大唐长春二热退城进郊配套百万千瓦新能源项目推进","媒体报道披露，中国大唐长春第二热电厂“退城进郊”煤电项目同步配套百万千瓦扶余风电等新能源发电资源。该项目从城区老热电厂搬迁改造入手，新建更高效煤电机组并配置风电资源，用于保障长春地区供热供电，同时降低老城区燃煤机组环境影响。二季度跟踪重点是煤电搬迁、供热替代和新能源配套建设。","该条属于煤电搬迁改造和新能源配套项目，来源为权威媒体补充。","权威媒体","北极星电力网","https://news.bjx.com.cn/",["煤电改造","供热","风电"]],
    ["datang","2026-06-09","世界首台630℃二次再热百万机组投产发电","中国大唐官网披露，世界首台630℃二次再热百万机组投产发电。该机组采用更高参数二次再热技术，代表煤电机组向高效、低耗、低排放和灵活支撑方向升级。对于中国大唐而言，该项目不是普通火电运行信息，而是煤电清洁高效利用和支撑性电源技术路线的重要工程节点。","该条属于煤电高效清洁利用和重大技术节点，来源为中国大唐官网集团新闻。","官网","中国大唐集团新闻","https://www.china-cdt.com/dtwz/xwzx/jtxw/2026/6/I1513837166965293056.html",["煤电","二次再热","技术突破"]],

    ["huadian","2026-04-10","中国华电召开2026年一季度经济活动分析会","中国华电官网披露，公司召开2026年一季度经济活动分析会，总结一季度经营发展情况并部署下一阶段重点任务。该条保留的重点不是会议本身，而是集团对发电主业、绿色低碳项目、经营提质和风险防控的阶段性调度，后续应与新能源基地、储能、火电灵活性改造和科工业务节点联动观察。","该条属于集团经营调度和主业项目推进，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/d39a6ded439f47178dcc3143fc9c3ac2",["经营分析","主业调度","绿色低碳"]],
    ["huadian","2026-04-20","华电科工召开2026年科技创新大会","中国华电官网披露，华电科工召开2026年科技创新大会。华电科工承担电力工程、装备制造、环保水务和新能源工程等业务，科技创新大会重点关系关键装备、工程技术、数字化应用和绿色低碳技术攻关。二季度跟踪中，该条用于观察华电把科工板块转化为绿氢、储能、海上风电和煤电改造支撑能力的进展。","该条属于科工板块技术创新和能源装备能力建设，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/b4447a162f5147858856445ba4051faa",["科技创新","华电科工","装备"]],
    ["huadian","2026-04-29","国内首个大型流域径流预测大模型“华电智禹·乌江睿算”上线","中国华电官网披露，国内首个大型流域径流预测大模型“华电智禹·乌江睿算”上线。该模型面向乌江流域水电运行场景，通过人工智能提升径流预测、梯级水电调度和水能利用效率，对水电站群精细化运行和新能源高比例接入后的系统调节具有实际意义。","该条属于水电数字化和人工智能调度应用，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/5d0d58fe49dd4860ba8cc3552996a9e5",["人工智能","水电","流域调度"]],
    ["huadian","2026-04-21","华电新能源披露甘肃腾格里河西基地取得多项核准备案","华电新能源年报披露，甘肃腾格里河西清洁能源基地规划装机1520万千瓦，其中风电400万千瓦、光伏700万千瓦、常规电源400万千瓦、光热20万千瓦，并配置200万千瓦/400万千瓦时储能。公告显示，220万千瓦风电、380万千瓦光伏、10万千瓦光热和200万千瓦配套常规电源已取得核准备案文件并完成对应规模投资决策。","该条属于风光热储一体化基地核准备案，来源为华电新能源年报。","权威媒体","上海证券报","https://paper.cnstock.com/html/2026-04/21/content_2202296.htm",["风电","光伏","光热"]],
    ["huadian","2026-04-21","华电新能源披露青海格尔木东基地推进前期工作","华电新能源年报披露，青海格尔木东清洁能源基地规划装机1774万千瓦，其中风电500万千瓦、光伏1000万千瓦、常规电源264万千瓦、光热10万千瓦，并配置150万千瓦/600万千瓦时储能。公告称该基地已取得国家能源局电源方案批复，全部电源类型已取得核准备案文件，正在推动各项前期工作。","该条属于青海新能源大基地前期进展，来源为华电新能源年报。","权威媒体","上海证券报","https://paper.cnstock.com/html/2026-04/21/content_2202296.htm",["青海","新能源基地","储能"]],

    ["spic","2026-04-08","国家电投按全年2000亿元投资计划推进清洁能源项目","国家电投一季度新闻通气会披露，2026年集团计划完成投资2000亿元，同比增长17%，一季度拟完成投资230亿元，同比增长35%。进入二季度后，投资落地重点集中在核电、新能源大基地、储能、氢能和新型电力系统技术。该条记录的是集团全年投资盘子的承接情况，尤其是核电和清洁能源项目从计划转入开工、核准、设备采购和建设组织。","该条属于年度投资和清洁能源项目落地，来源为权威媒体补充。","权威媒体","观点网","https://www.guandian.cn/m/show/550275",["投资计划","新能源","核电"]],
    ["spic","2026-04-18","国家电投推进海阳、廉江、荣成等核电项目","公开报道引述国家电投信息显示，集团在核电领域形成红沿河、海阳等在运机组和海阳、廉江、荣成等在建后续项目布局。二季度跟踪中，该条聚焦核电工程建设和清洁基荷能力扩张：海阳核电承担山东核能供热和发电任务，廉江核电是广东沿海清洁基荷项目，荣成项目则关系高温气冷堆和后续核电产业链能力。","该条属于核电项目建设和清洁基荷布局，来源为权威媒体补充。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["核电","清洁基荷","工程建设"]],
    ["spic","2026-05-06","国家电投布局储能、绿色氢基能源和构网型技术示范","国家电投在2026年新闻通气会中提出，将开展消费侧、绿色氢基能源、新型储能、构网等技术示范应用验证。二季度该项工作进入项目筛选和示范推进阶段，重点不是一般技术口号，而是围绕新能源高比例接入后的系统稳定问题，验证储能调频、构网型设备、绿氢制取和用户侧用能管理等场景。","该条属于新型电力系统技术示范，来源为权威媒体补充。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavwy0463439.shtml",["储能","氢能","构网"]],
    ["spic","2026-05-18","国家电投把风电装机和海上风电作为清洁能源扩张重点","公开资料显示，国家电投风电装机规模保持全球前列，海上风电保持国内行业领先。二季度跟踪中，该事项用于记录集团在沙戈荒大型风光基地、沿海海上风电和高比例新能源项目中的建设推进。与单个场站不同，国家电投的重点是把大基地资源、送出通道、储能和电力市场消纳结合，形成可规模化交付的清洁电力。","该条属于风电和大型新能源基地建设，来源为权威媒体补充。","权威媒体","新浪财经","https://finance.sina.com.cn/wm/2026-03-25/doc-inhscxkk3813774.shtml",["大基地","海上风电","新能源"]],
    ["spic","2026-05-28","国家电投推进核电和清洁基荷项目建设节点","国家电投二季度围绕海阳、廉江、荣成等核电和清洁基荷项目推进建设节点，工作包括核岛土建、设备安装、调试准备和产业链协同。相关项目是集团清洁能源装机和稳定基荷能力的重要组成部分，不属于常规运行管理。","该条属于核电和清洁基荷工程建设，信息来自国家电投官网渠道。","官网","国家电投官网","https://www.spic.com.cn/",["核电","清洁基荷","工程建设"]],

    ["chn-energy","2026-06-09","我国首台双动力智能捣固车在国家能源集团自有铁路全面投用","国家能源集团官网披露，6月2日，我国首台双动力智能捣固车“国能奋进号”在神朔线霍家梁隧道内完成全部作业任务，标志着该车在集团自有铁路全面投入使用。设备由铁路装备和中国铁建高新装备公司联合研发，核心技术为国内首创，可在纯电和混合动力模式间切换，用于铁路隧道及特殊区段线路养护，降低能耗和排放，并提升养护作业安全、质量和效率。","该条属于铁路运输装备智能化和绿色化技术突破，信息来自国家能源集团官网。","官网","国家能源集团综合新闻","https://www.chnenergy.com.cn/gjnyjtww/newCE0302/202606/8076e2e020114afab0c502b8d25ea7d3.shtml",["铁路装备","智能化","绿色运输"]],
    ["chn-energy","2026-04-23","国家能源集团发布2026年投资计划","国家能源集团召开一季度新闻发布会并经新华网报道，披露2026年投资规划，重点包括能源保供、绿色转型和新兴技术培育。发布会把煤炭、电力、运输、化工和新能源项目统一纳入全年投资盘子，说明集团将继续在煤炭安全供应、煤电支撑、新能源基地和数智化技术上投入。该条记录的是年度重大投资方向，不写股东回报。","该条属于年度投资计划和主业项目安排，来源为新华网。","权威媒体","新华网","https://www.news.cn/energy/20260424/624c244a4d0e4d58bd0ab640e4dc7fac/c.html",["投资计划","保供","绿色转型"]],
    ["chn-energy","2026-06-04","包头化工二氧化碳回收综合利用项目全面投运","国家能源集团官网披露，包头化工二氧化碳回收综合利用项目于5月29日全面竣工投运，项目运行平稳并实现外输创收。该项目依托甲醇厂净化装置低温甲醇洗单元，对原有生产系统进行优化改造，通过新增二氧化碳外输专用管线，将高纯度二氧化碳集中外输，由下游企业增压液化后输送至油田开展驱油与封存作业。项目初期每年可稳定外输二氧化碳30万吨，两年后产能将提升至每年50万吨。","该条属于煤化工低碳改造和二氧化碳资源化利用，信息来自国家能源集团官网。","官网","国家能源集团综合新闻","https://www.chnenergy.com.cn/gjnyjtww/newCE0302/202606/ee095e397e31432990546bc574299052.shtml",["煤化工","二氧化碳回收","低碳改造"]],
    ["chn-energy","2026-06-05","广东公司月度发电量创历史新高","国家能源集团官网披露，5月国家能源集团广东公司累计发电59.55亿千瓦时，同比增长41.45%，创历史新高。官网正文说明，5月下旬以来广东多地持续高温，省内用电负荷三创历史新高，年内首轮负荷峰值较往年提前近两个月；广东公司通过强化设备运维、电网沟通、燃料采购调运和煤船快速接卸，保障机组应发尽发，为粤港澳大湾区提供电力支撑。","该条属于区域电力主业出力和大发电资产运行表现，信息来自国家能源集团官网。","官网","国家能源集团综合新闻","https://www.chnenergy.com.cn/gjnyjtww/newCE0302/202606/120862bbdc234df692a7105f493f99e3.shtml",["发电量","广东","电力供应"]],
    ["chn-energy","2026-06-09","龙源电力新能源投建营一体化技术达到国际领先水平","国家能源集团官网披露，龙源电力主导的“集团级新能源投建营一体化分析与应用示范项目”通过中国电机工程学会科技成果鉴定，整体技术达到国际领先水平。项目聚焦新能源规划设计、工程建设、生产运营和经营后评价全闭环场景，构建新能源行业Handle标识解析体系、“总部+省公司+场站”三级资源分级管控体系、多源融合数据一体化平台和新能源全流程模型工厂，支撑风光储输变数据汇聚、智能规划和“千场千策”应用。","该条属于新能源数字化管控和科技成果突破，信息来自国家能源集团官网。","官网","国家能源集团综合新闻","https://www.chnenergy.com.cn/gjnyjtww/newCE0302/202606/dfb22ca931f1488795d8dc1735beb979.shtml",["新能源","数字化","技术突破"]],

    ["ctg","2026-04-08","三峡集团推进北斗高精度监测系统在重大水利枢纽应用","三峡集团二季度继续推进北斗高精度监测系统在重大水利枢纽工程中的应用。系统通过高精度定位、形变监测和数据平台，对大坝、边坡及关键结构进行连续监测，为水电枢纽长期运行状态评估提供数据支撑。","该条属于北斗监测和水电枢纽数字化，信息来自三峡集团官网。","官网","三峡集团官网","https://www.ctg.com.cn/",["北斗","水电","数字化"]],
    ["ctg","2026-04-20","三峡集团跟进海上风电和陆上新能源项目建设","三峡集团二季度继续披露海上风电、陆上风光和区域合作项目进展。海上风电项目主要服务沿海省份清洁电力增量，陆上新能源项目则与地方资源开发、送出通道和储能配置衔接。该条记录三峡集团在大水电之外的新能源增量建设，重点看项目核准、设备吊装、并网送出和商业运行节点。","该条属于海上风电和新能源建设，信息来自三峡集团官网。","官网","三峡集团官网","https://www.ctg.com.cn/",["新能源","海上风电","项目"]],
    ["ctg","2026-05-08","三峡集团开展世界最大清洁能源走廊联合调度","三峡集团二季度继续围绕长江干流六座梯级电站开展联合调度。清洁能源走廊由乌东德、白鹤滩、溪洛渡、向家坝、三峡、葛洲坝组成，承担防洪、发电、航运、补水和生态调度等综合任务。新闻跟踪重点是各库水位衔接、机组负荷安排、来水预测和汛前消落，以及梯级电站共同保障长江流域安全和电力供应。","该条属于梯级水电联合调度，信息来自三峡集团官网。","官网","三峡集团官网","https://www.ctg.com.cn/",["水电","清洁能源走廊","调度"]],
    ["ctg","2026-05-18","三峡集团推进长江大保护和生态环保项目","三峡集团二季度围绕长江大保护、城镇污水处理、生态修复和绿色发展项目披露进展。相关工作与单纯发电不同，主要面向长江沿线城市水环境治理、流域生态修复和环保基础设施建设。该条记录的是三峡集团在清洁能源之外承担的流域治理业务，重点关注项目落地城市、污水处理能力和生态修复工程进度。","该条属于长江大保护和生态环保业务，信息来自三峡集团官网。","官网","三峡集团官网","https://www.ctg.com.cn/",["生态环保","长江保护","绿色发展"]],
    ["ctg","2026-05-28","三峡集团推进海外清洁能源资产和国际合作","三峡集团二季度继续披露海外清洁能源资产运营和国际合作事项。集团海外业务主要包括水电、风电、光伏等清洁能源项目投资运营，以及工程管理和资产管理合作。该条记录三峡集团将大型水电开发、清洁能源运营和国际资产管理经验输出到海外市场的进展，重点看项目运营、股权合作和所在国电力市场变化。","该条属于国际清洁能源资产运营，信息来自三峡集团官网。","官网","三峡集团官网","https://www.ctg.com.cn/",["国际业务","清洁能源","合作"]],

    ["cgn","2026-04-08","中广核推进华龙一号在建核电项目建设节点","中广核二季度围绕华龙一号和在建核电项目推进建设、调试和技术升级节点。相关工作包括核岛安装、常规岛调试、装料前准备和并网试验安排，服务自主三代核电批量化建设。","该条属于华龙一号核电工程建设，信息来自中广核官网。","官网","中广核官网","https://www.cgnpc.com.cn/",["华龙一号","核电","工程建设"]],
    ["cgn","2026-04-18","中广核跟进华龙一号在建机组建设和调试节点","中广核二季度继续披露华龙一号和在建核电项目进展，重点包括土建施工、设备安装、冷试热试、装料前准备和并网调试等节点。华龙一号是中国自主三代核电技术路线，中广核批量化建设过程中需要同步推进工程质量、设备国产化、施工安全和核安全监管审查。该条记录具体工程节点而非一般建设表述。","该条属于华龙一号核电工程建设，信息来自中广核官网。","官网","中广核官网","https://www.cgnpc.com.cn/",["华龙一号","核电","工程建设"]],
    ["cgn","2026-05-10","中广核云南元江新型共享储能电站全容量并网","中广核官网披露，云南元江领航新型共享储能电站实现全容量并网发电。共享储能电站面向周边新能源场站提供集中储能服务，通过充放电调节改善风光出力波动，提高新能源消纳能力，并为电网提供调峰和备用能力。该项目说明中广核在核电之外，开始把储能作为新能源业务的配套基础设施来布局。","该条属于共享储能电站并网，信息来自中广核官网。","官网","中广核官网","https://www.cgnpc.com.cn/",["储能","并网","新能源"]],
    ["cgn","2026-05-18","中广核推进风电、光伏和储能一体化建设","中广核二季度继续跟踪新能源场站和储能协同建设，重点是把风电、光伏项目与集中式或共享储能电站联动，解决并网消纳和出力平滑问题。具体工作包括新能源项目建设、送出工程衔接、储能容量配置、并网验收和运行调度。该条记录的是中广核新能源板块从单一装机扩张转向“发电+调节”能力建设。","该条属于新能源场站和储能配套建设，信息来自中广核官网。","官网","中广核官网","https://www.cgnpc.com.cn/",["新能源","储能","综合能源"]],
    ["cgn","2026-05-28","中广核推进核电智能装备和数字化运维应用","中广核二季度围绕智能装备和数字化运维发布进展。具体内容包括核电现场智能巡检、核燃料操作辅助装备、设备状态监测、数字化维修管理和高风险作业替代。该条记录智能化技术如何进入核电运维现场，重点是减少人工高风险操作、提升维护质量和形成核电设备全寿期数据。","该条属于核电智能装备和数字化运维，信息来自中广核官网。","官网","中广核官网","https://www.cgnpc.com.cn/",["智能装备","数字化","运维"]],

    ["cr-power","2026-04-08","华润电力明确2026年风电光伏建设目标","华润电力披露，公司2026年将把风电、光伏作为新增装机重点，并结合火电盈利改善推进新能源投资。二季度跟踪中，该条不记录股息和市场沟通，而是保留公司对全年风光新增、项目储备、消纳区域选择和资本开支节奏的安排。公司后续项目主要集中在高消纳区域、大基地和沿海风电资源。","该条属于新能源年度建设目标，信息来自公司材料和权威媒体。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-20/doc-inhrrrer8026595.shtml",["新能源","装机目标","风电"]],
    ["cr-power","2026-04-18","华润电力推进风电光伏项目储备和年度新增装机","华润电力二季度围绕2026年风电、光伏新增目标推进项目储备。公开报道显示，公司继续将新能源作为装机增长主线，项目筛选强调资源质量、消纳条件、电价机制和送出工程成熟度。该条记录风光项目从储备、核准到开工的进展，而非资本市场表态。","该条属于风电光伏项目储备，来源为权威媒体补充。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-20/doc-inhrrrer8026595.shtml",["新能源","装机目标","风电"]],
    ["cr-power","2026-05-08","华润电力布局沙戈荒大基地和沿海海上风电","公开报道披露，华润电力二季度继续围绕大型风光基地、海上风电和高消纳区域项目布局。沙戈荒基地面向大规模风光开发和外送，沿海海上风电面向负荷中心就近消纳。公司项目推进需要同步解决资源指标、核准、送出通道、储能配置和长期电量消纳安排，后续节点主要看项目是否进入开工、设备招采和并网送出阶段。","该条属于大型新能源基地和海上风电布局，来源为权威媒体补充。","权威媒体","新浪财经","https://finance.sina.com.cn/roll/2026-03-24/doc-inhsavww4221619.shtml",["大基地","海上风电","新能源"]],
    ["cr-power","2026-05-18","华润电力跟进火电灵活性改造项目","华润电力二季度围绕煤电机组调峰能力、供热机组低负荷运行和新能源高峰出力下的火电调节开展改造。具体内容包括调峰能力提升、能耗优化、供热工况适配和运行控制系统优化，目标是让火电机组更好支撑风电、光伏并网消纳。","该条属于火电灵活性改造和系统调节能力建设，信息来自华润电力官网渠道。","官网","华润电力官网","https://www.cr-power.com/",["火电","灵活性","调峰"]],
    ["cr-power","2026-05-28","华润电力推进售电、综合能源和客户侧低碳服务","华润电力二季度继续跟进售电、综合能源和客户侧低碳解决方案。具体内容包括为工业园区和大客户提供绿电采购、分布式光伏、储能、冷热电联供、能效管理和碳管理服务。该项业务与公司新能源发电相衔接，目标是把风光电量通过客户侧合同和综合能源服务消纳出去。","该条属于客户侧综合能源服务，信息来自华润电力官网渠道。","官网","华润电力官网","https://www.cr-power.com/",["综合能源","客户服务","售电"]],

    ["geg","2026-04-08","广东能源集团推进火电支撑电源和新能源省重点项目","广东能源集团二季度围绕省重点能源项目推进建设，项目类型包括支撑性火电电源、海上风电、集中式新能源和综合能源项目。广东用电负荷高、外来电占比高，省属能源企业项目建设重点在于补足本地电源支撑、提升清洁能源占比，并形成新增发电能力和送出条件。","该条属于省重点能源项目建设，信息来自广东能源集团官网。","官网","广东能源集团官网","https://www.geg.com.cn/",["重点项目","工程建设","广东"]],
    ["geg","2026-04-18","广东能源集团推进海上风电和清洁能源项目节点","广东能源集团二季度推进海上风电、新能源和综合能源项目，重点包括海上风机基础施工、海缆敷设、升压站建设、并网送出和综合能源站点建设。相关项目服务广东沿海清洁电力增量和新型能源体系建设。","该条属于海上风电和清洁能源项目建设，信息来自广东能源集团官网。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],
    ["geg","2026-05-08","广东能源集团博贺电厂4号机组投运后释放电源支撑能力","国务院国资委此前披露，广东能源集团博贺电厂4号机组投运后，项目进入电源支撑能力释放阶段。博贺电厂位于粤西沿海，是广东重要支撑性电源项目，百万千瓦级机组投产后可增强粤西电力供应能力，并与区域负荷增长和新能源消纳形成配套。二季度重点跟踪机组负荷试运行和商业运行表现。","该条属于煤电支撑电源投运后运行，来源为国资委。","权威媒体","国务院国资委","https://wap.sasac.gov.cn/n2588025/n2588129/c35350532/content.html",["煤电","投运","支撑电源"]],
    ["geg","2026-05-18","广东能源集团推进海上风电和清洁能源项目","广东能源集团二季度继续披露海上风电、新能源和综合能源项目进展。海上风电是广东沿海清洁电力增量的重要来源，项目推进涉及风机基础施工、海缆敷设、升压站建设、并网送出和海上施工窗口期安排。该条记录集团在煤电支撑之外增加清洁电源的建设节点，后续重点是风机吊装、海缆投运和并网验收。","该条属于海上风电和清洁能源项目建设，信息来自广东能源集团官网。","官网","广东能源集团官网","https://www.geg.com.cn/",["海上风电","清洁能源","广东"]],
    ["geg","2026-05-28","广东能源集团推进智慧电厂和生产数字化应用","广东能源集团二季度围绕智慧电厂、生产数字化和经营管理效率开展应用。具体内容包括发电设备状态监测、运行数据采集、机组能耗分析、故障预警和运维管理数字化。该条保留的重点是数字化进入电厂生产现场，用于降低非计划停运、优化能耗指标和提升资产运行效率。","该条属于智慧电厂和生产数字化，信息来自广东能源集团官网。","官网","广东能源集团官网","https://www.geg.com.cn/",["数字化","管理提升","智慧电厂"]],

    ["zj-energy","2026-04-08","浙能集团推进长兴电厂迁建高效煤电项目","浙能集团二季度推进长兴电厂迁建项目，规划建设2台100万千瓦高效一次再热超超临界燃煤发电机组。项目通过替代老旧煤电机组、提高能效和环保水平，增强浙北地区支撑性电源能力。","该条属于高效煤电迁建和支撑性电源建设，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["煤电","迁建","超超临界"]],
    ["zj-energy","2026-04-18","浙能集团跟进风电、光伏、储能和综合能源项目建设","浙能集团二季度推进风电、光伏、储能和综合能源项目。项目建设重点包括新能源资源获取、工程施工、送出工程衔接、储能容量配置和并网验收。浙江本地土地和负荷条件决定项目更多与分布式能源、沿海风电、园区综合能源和省外清洁电源配置结合。该条记录具体项目建设链条，而非一般转型表述。","该条属于新能源和储能项目建设，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新能源","储能","项目建设"]],
    ["zj-energy","2026-05-08","浙能集团推进智慧电厂和设备状态数字化运维","浙能集团二季度围绕智慧电厂和数字化运维开展应用，重点包括设备状态监测、运行参数在线分析、机组能耗诊断、故障预警和运维工单闭环管理。对煤电和燃机资产而言，这类系统直接进入生产现场，用于减少非计划停机、优化负荷调整和提高维护效率。该条记录的是生产数字化落地，不写泛泛的信息化建设。","该条属于智慧电厂和数字化运维，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["数字化","智慧电厂","运维"]],
    ["zj-energy","2026-05-18","浙能集团服务浙江新型能源体系建设","浙能集团二季度围绕浙江清洁低碳和新型电力系统建设开展项目承接。具体方向包括风电、光伏和储能项目，综合能源服务，港口、航运、天然气和电力资产协同，以及省外清洁电源配置。该条记录浙能作为省属能源平台在浙江新型能源体系中的项目承接和资产协同。","该条属于省级新型能源体系建设，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["新型能源体系","浙江","电力系统"]],
    ["zj-energy","2026-05-27","浙能集团两项AI成果入选浙江省国企人工智能优秀成果","浙能集团官网披露，集团两项成果入选2026年浙江省国企人工智能优秀成果。该事项的重点不在获奖本身，而在能源生产场景中的AI应用：相关成果面向电厂生产管理、设备状态识别、运行风险预警或经营调度优化。二季度跟踪中，该条记录浙能把人工智能从管理系统延伸到生产运维和安全管控场景。","该条属于能源生产AI应用，信息来自浙能集团官网。","官网","浙能集团官网","https://www.zjenergy.com.cn/",["人工智能","数字化","省属能源"]],

    ["beijing-energy","2026-04-08","京能集团推进京外新能源基地和综合能源项目","京能集团二季度围绕风电、光伏、综合能源和京外清洁能源基地推进项目布局。北京本地新能源资源有限，集团通过京外基地和园区综合能源项目补充清洁电力来源，并服务首都绿电消费和公共建筑低碳用能。","该条属于新能源基地和综合能源项目建设，信息来自京能集团官网。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","京外基地","综合能源"]],
    ["beijing-energy","2026-04-18","京能集团科技创新债券资金用于能源科技和绿色项目","上海证券交易所披露的债券文件显示，京能集团科技创新债券资金拟服务科技创新、能源项目和绿色低碳相关用途。二季度跟踪中，该条保留的原因不是融资本身，而是资金用途与能源科技、绿色低碳和现有电热资产升级相关，后续需要看资金是否投向新能源、供热系统改造、储能或数字化项目。","该条属于能源科技和绿色项目资金安排，来源为交易所公告。","权威媒体","上海证券交易所","https://static.sse.com.cn/disclosure/bond/announcement/company/c/new/2026-03-06/244816_20260306_KL6D.pdf",["融资","科技创新","绿色低碳"]],
    ["beijing-energy","2026-05-08","京能集团推进绿色低碳和清洁供热替代项目","京能集团二季度推进绿色低碳和清洁供热替代项目，方向包括分布式光伏、园区综合能源、热泵或余热利用、清洁供热系统改造和京外绿电基地。项目目标是降低公共建筑、园区和供热系统用能排放。","该条属于绿色低碳和清洁供热项目，信息来自京能集团官网。","官网","京能集团官网","https://www.powerbeijing.com/",["清洁供热","光伏","综合能源"]],
    ["beijing-energy","2026-05-18","京能集团推进风电、光伏、综合能源和京外清洁能源基地","京能集团二季度继续跟进绿色低碳和新能源项目，项目类型包括风电、光伏、综合能源服务和京外清洁能源基地。北京本地资源有限，因此京能需要通过京外基地获取清洁电力，通过综合能源项目服务园区和公共建筑用能。该条记录新能源项目获取、建设、并网和消纳安排。","该条属于新能源和综合能源项目建设，信息来自京能集团官网。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","综合能源","转型"]],
    ["beijing-energy","2026-05-28","京能集团推进新能源场站和客户侧综合能源服务","京能集团二季度继续推进新能源场站和客户侧综合能源服务，内容包括风电、光伏、储能、冷热电联供、建筑节能和用能管理。该类项目把发电侧清洁电源与终端用户用能场景连接起来，服务北京及周边地区低碳转型。","该条属于新能源和客户侧综合能源服务，信息来自京能集团官网。","官网","京能集团官网","https://www.powerbeijing.com/",["新能源","客户侧","综合能源"]],

    ["sdic-power","2026-04-10","国投电力准备披露一季度发电量、上网电量和电价数据","国投电力二季度围绕一季度经营数据开展披露，核心指标包括发电量、上网电量、平均上网电价和分电源类型出力。对国投电力而言，雅砻江水电来水、火电利用小时和新能源出力共同决定季度经营表现，因此这类数据属于电力主业经营信息，不按普通市场沟通事项处理。","该条属于电力主业经营数据披露，信息来自国投电力公告渠道。","官网","国投电力官网","https://www.sdicpower.com/",["经营数据","发电量","电价"]],
    ["sdic-power","2026-04-15","国投电力一季度发电量379.07亿千瓦时","国投电力公告2026年1至3月完成发电量379.07亿千瓦时、上网电量370.48亿千瓦时。该数据覆盖公司控股电厂和主要参股电源资产，可用于观察一季度水电来水、火电负荷和新能源出力情况。二季度跟踪中，该条作为公司主业经营基线，后续与雅砻江水电站群、新能源项目并网和火电支撑性电源运行共同观察。","该条属于发电量和上网电量经营数据，来源为权威媒体转载公告。","权威媒体","新浪财经","https://finance.sina.com.cn/7x24/2026-04-15/doc-inhuqnaw0851832.shtml",["发电量","经营数据","上网电量"]],
    ["sdic-power","2026-04-30","国投电力披露水电、新能源和火电资产结构","国投电力年度材料披露公司水电、新能源和火电资产的经营情况、募集资金使用和项目投资安排。该条不把治理议案作为重点，而是用于跟踪公司以雅砻江水电为核心、水风光互补和新能源扩张为增量、火电资产提供支撑性调节的资产结构。相关信息有助于确认二季度后续项目建设和资金投入方向。","该条属于电源资产结构和项目投资披露，来源为权威媒体转载公司材料。","权威媒体","上海证券报","https://paper.cnstock.com/html/2026-04/30/content_2211707.htm",["水电","新能源","火电"]],
    ["sdic-power","2026-05-12","国投电力推进雅砻江流域水风光互补开发","国投电力二季度围绕雅砻江流域水电与风光资源协同开发推进项目。雅砻江水电站群提供稳定调节能力，风电和光伏项目增加清洁能源增量，水风光互补可改善新能源出力波动和送出利用效率。","该条属于水风光互补和清洁能源项目建设，信息来自国投电力官网渠道。","官网","国投电力官网","https://www.sdicpower.com/",["水风光互补","雅砻江","新能源"]],
    ["sdic-power","2026-05-28","国投电力推进新能源项目并网和送出工程衔接","国投电力二季度围绕风电、光伏项目开展并网测试、送出工程衔接和运行准备。项目重点是让新增新能源容量具备稳定送出条件，并与雅砻江水电等调节性资源形成互补。","该条属于新能源项目并网和送出工程，信息来自国投电力官网渠道。","官网","国投电力官网","https://www.sdicpower.com/",["新能源","并网","送出工程"]],
  ];

  const coreSupplementRows = [
    ["rwe","2026-03-20","RWE推进德国灵活调峰电源和储能组合","RWE一季度推进德国灵活调峰电源、储能和可再生能源配套项目，服务高比例新能源并网后的系统调节需求。","该类项目属于发电企业主业能力建设，直接关系新能源消纳和电力系统安全。","官网","RWE Press & News","https://www.rwe.com/en/press",["灵活电源","储能","德国"]],
    ["enel","2026-01-16","Enel推进意大利配电网韧性和数字化升级","Enel一季度推进意大利配电网自动化、线路改造和智能电表相关工作，提升极端天气下的供电韧性。","配电网是Enel核心主业，数字化升级直接影响供电可靠性和新能源接入能力。","官网","Enel Media","https://www.enel.com/media/explore",["配电网","数字化","可靠性"]],
    ["enel","2026-02-06","Enel Green Power推进北美风光项目建设","Enel一季度推进北美风电和光伏项目建设，并服务大型企业客户的清洁电力需求。","北美新能源项目是Enel可再生能源主业的重要组成部分，影响其全球装机增长。","官网","Enel Media","https://www.enel.com/media/explore",["风电","光伏","北美"]],
    ["enel","2026-02-18","Enel推进电池储能与可再生能源配套应用","Enel一季度在欧洲和美洲推进电池储能项目，用于提升风光出力消纳和电力市场灵活性。","储能是新能源发电主业从“发得出”走向“送得稳”的关键环节。","官网","Enel Media","https://www.enel.com/media/explore",["储能","可再生能源","灵活性"]],
    ["enel","2026-03-06","Enel推进拉美清洁能源和电网项目","Enel一季度推进拉美地区风光、水电和配电网项目，围绕当地电力需求和清洁能源转型布局。","拉美是Enel传统重点市场，项目推进关系其海外主业资产质量。","官网","Enel Media","https://www.enel.com/media/explore",["拉美","清洁能源","电网"]],
    ["iberdrola","2026-02-18","Iberdrola推进英国East Anglia THREE海上风电建设","Iberdrola旗下ScottishPower推进英国East Anglia THREE海上风电项目建设和供应链协同。","大型海上风电是Iberdrola核心增长项目，也是英国清洁电力供应的重要增量。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news",["海上风电","英国","工程建设"]],
    ["iberdrola","2026-03-12","Iberdrola推进美国电网升级项目","Iberdrola一季度通过美国业务推进输配电线路、变电站和电网韧性项目。","美国电网资产是公司核心主业，升级项目直接服务负荷增长和新能源接入。","官网","Iberdrola News","https://www.iberdrola.com/press-room/news",["电网","美国","输配电"]],
    ["edf","2026-01-28","EDF推进Hinkley Point C核电工程建设","EDF一季度推进英国Hinkley Point C核电项目土建、设备安装和供应链工作。","Hinkley Point C是欧洲重要核电工程，关系英国低碳基荷电力供应。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["核电","英国","工程建设"]],
    ["edf","2026-03-05","EDF推进法国既有核电机组延寿和大修","EDF一季度围绕法国既有核电机组开展大修、设备维护和延寿相关工作。","既有核电机组稳定运行是法国低碳电力系统的基础。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["核电","机组延寿","运行"]],
    ["edf","2026-03-18","EDF推进水电和抽水蓄能运行优化","EDF一季度围绕法国水电站和抽水蓄能资产开展调度优化，服务电网调峰和可再生能源消纳。","水电和抽蓄是电力系统灵活性的重要主业资产。","官网","EDF Press Releases","https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases",["水电","抽水蓄能","调峰"]],
    ["engie","2026-03-06","ENGIE推进比利时电池储能项目","ENGIE一季度在欧洲推进电池储能项目，提升电力系统调峰和新能源消纳能力。","电池储能是ENGIE灵活性资产组合的重要组成部分。","官网","ENGIE Newsroom","https://en.newsroom.engie.com/news/",["储能","比利时","灵活性"]],
    ["duke-energy","2026-01-24","Duke Energy推进卡罗来纳电网加固工程","Duke Energy一季度推进输配电线路、变电站和风暴韧性工程，提升极端天气下供电可靠性。","电网加固是美国公用事业主业投资，直接关系客户供电质量。","官网","Duke Energy News Center","https://news.duke-energy.com/releases",["电网","可靠性","卡罗来纳"]],
    ["duke-energy","2026-03-26","Duke Energy推进佛州太阳能和储能配套项目","公司一季度推进佛州太阳能发电、储能和客户侧能源管理项目。","太阳能和储能项目有助于降低高峰负荷压力并提升清洁电力供应。","官网","Duke Energy News Center","https://news.duke-energy.com/releases",["太阳能","储能","佛州"]],
    ["southern-company","2026-01-30","Georgia Power推进Vogtle核电机组稳定运行","Southern Company旗下Georgia Power一季度围绕Vogtle核电机组安全稳定运行和电力供应开展工作。","Vogtle核电机组是美国新增低碳基荷电源的重要资产。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["核电","Vogtle","基荷电源"]],
    ["southern-company","2026-02-12","Southern Company推进东南部输电扩建","公司一季度围绕佐治亚、阿拉巴马等地区负荷增长推进输电线路和变电站扩建。","输电扩建是承接数据中心和工业负荷增长的基础工程。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["输电","负荷增长","电网"]],
    ["southern-company","2026-03-06","Alabama Power推进电厂升级和可靠性工程","Southern Company旗下Alabama Power推进发电设施升级、检修和可靠性提升工程。","支撑性电源升级关系美国东南部高峰负荷供电安全。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["电厂升级","可靠性","保供"]],
    ["southern-company","2026-03-18","Southern Power推进可再生能源资产更新","Southern Power一季度推进风电资产再动力化和新能源资产效率提升。","存量新能源资产更新可提升发电效率并延长项目运营价值。","官网","Southern Company Newsroom","https://www.southerncompany.com/newsroom.html",["风电","资产更新","新能源"]],
    ["constellation","2026-02-04","Constellation推进Crane清洁能源中心重启工作","公司一季度围绕Crane清洁能源中心相关核电重启、许可和工程准备开展工作。","核电重启是美国可调度低碳电源扩张的重要案例。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","重启","清洁能源"]],
    ["constellation","2026-03-05","Constellation推进核电机组延寿工作","公司一季度推进核电机组许可延续和长期运行相关工作。","核电延寿可在不新增大量土地和燃料依赖的情况下维持低碳基荷供应。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["核电","机组延寿","低碳电力"]],
    ["constellation","2026-03-25","Constellation推进可调度电源与大客户供电协同","公司一季度围绕核电、燃气和大客户供电协同推进业务整合。","可调度电源与数据中心等大负荷客户匹配，是美国电力市场的重要新方向。","官网","Constellation Investor News","https://investors.constellationenergy.com/news-releases",["可调度电源","大客户供电","数据中心"]],
    ["axia","2026-03-24","AXIA推进Luiz Gonzaga水电站扩容准备","AXIA在容量储备拍卖中获得合同后，推进Luiz Gonzaga水电站扩容相关准备。","水电扩容属于主业资产能力提升，有助于增强巴西系统容量资源。","权威媒体","Finance News","https://financenews.com.br/2026/03/axia-energia-garante-contratacao-em-leilao-de-capacidade-2026/",["水电","扩容","容量资源"]],
    ["jera","2026-02-18","JERA推进低碳氨燃料混烧技术应用","JERA一季度推进火电低碳化和氨燃料混烧相关技术验证。","低碳燃料混烧是日本火电企业减排和保供并行的重要技术路线。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["氨燃料","火电转型","低碳技术"]],
    ["jera","2026-03-26","JERA推进可再生能源和储能协同布局","JERA一季度围绕可再生能源、储能和电力市场优化进行项目布局。","储能与新能源协同有助于改善发电组合灵活性。","官网","JERA Press Release","https://www.jera.co.jp/en/news/information",["储能","可再生能源","灵活性"]],
    ["kepco","2026-02-26","KEPCO推进关岛太阳能和储能项目","KEPCO一季度推进关岛太阳能和储能项目，服务岛屿电力系统清洁化。","海外太阳能和储能项目是KEPCO输出电力技术和工程能力的重要场景。","官网","KEPCO Press Center","https://www.kepco.co.kr/eng/press-center/press-release/boardList.do",["太阳能","储能","海外项目"]],
    ["ntpc","2026-01-18","NTPC推进绿色氢能示范应用","NTPC一季度推进绿色氢能制取、交通和工业应用相关示范。","绿色氢能是印度火电龙头向低碳综合能源公司转型的重要方向。","官网","NTPC Media","https://ntpc.co.in/media",["绿色氢能","示范项目","低碳转型"]],
    ["ntpc","2026-03-12","NTPC推进火电机组效率提升和保供工程","NTPC一季度围绕火电机组检修、效率提升和燃料保障推进工作。","印度电力需求增长背景下，火电高效稳定运行仍是保供基础。","官网","NTPC Media","https://ntpc.co.in/media",["火电","效率提升","保供"]],
    ["huadian","2026-01-09","中国华电发布2025年高质量发展标志性成果综述","中国华电官网发布“标志性成果、历史性成就”高质量发展成就综述，集中梳理“十四五”以来集团在发电主业、绿色低碳、科技创新和重点工程方面的成果。该条用于支撑一季度对华电发展基础和2026年项目方向的跟踪，后续与年度工作会议、福建合作和新能源基地材料衔接。","该条属于集团主业发展成果和项目基础梳理，来源为中国华电官网集团要闻。","官网","中国华电集团要闻","https://www.chd.com.cn/webfront/webpage/web/contentPage/id/4c8fed64b78f4e0cb287dac8205ce27c",["高质量发展","绿色低碳","科技创新"]],
    ["cr-power","2026-03-26","华润电力推进高消纳区域风光项目","华润电力一季度围绕高消纳区域风电、光伏和综合能源项目推进建设。","高消纳项目更容易形成有效发电量，是新能源主业质量提升的重点。","官网","华润电力官网","https://www.cr-power.com/",["风电","光伏","项目建设"]],
    ["sdic-power","2026-01-26","国投电力推进雅砻江流域水风光互补开发","国投电力一季度围绕雅砻江流域水电站群和风光资源协同开发推进项目。雅砻江水电提供调节能力，风电、光伏项目提供新增清洁电量，水风光互补可提升流域清洁能源送出稳定性。","该条属于水风光互补和新能源项目建设，信息来自国投电力官网。","官网","国投电力官网","https://www.sdicpower.com/",["水风光互补","雅砻江","新能源"]],
    ["sdic-power","2026-03-18","国投电力推进新能源项目建设","国投电力一季度推进风电、光伏等新能源项目建设和并网准备。","新能源增量决定公司在水电基本盘之外的成长空间。","官网","国投电力官网","https://www.sdicpower.com/",["新能源","风电","光伏"]],
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
    if (/保供|迎峰|防汛|检修|安全/.test(text)) return "事项属于电力主业运行能力安排，后续重点是是否形成可验证的项目节点、设备升级或系统韧性提升效果。";
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
      contexts.push("从电力主业看，该事项需要落到燃料供应链、电源可用能力、设备升级或系统韧性提升等具体内容上，只有形成明确项目、容量或技术节点时才具备跟踪价值。");
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
    if (/保供|迎峰|防汛|检修|安全|煤炭|火电|燃料/.test(text)) return "后续需要重点观察是否形成明确项目投运、容量释放、设备升级或供应链协同效果。";
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
    "datang": "中国大唐二季度主线是煤电灵活性改造、风光储一体化、绿电算力和智慧电厂，重点看支撑性电源改造与新能源项目执行。",
    "huadian": "中国华电二季度主线是新能源基地、储能、海上风电和煤电灵活性改造，重点看电力主业稳定运行和低碳转型协同。",
    "spic": "国家电投二季度主线是核电、新能源基地、储能、氢能和构网技术，重点看清洁能源规模优势如何转化为新型电力系统能力。",
    "chn-energy": "国家能源集团二季度主线是煤电运输一体化、新能源基地、智慧矿山和碳资产管理，重点看传统能源链条与绿色转型项目如何协同。",
    "ctg": "三峡集团二季度主线是梯级水电数字化监测、清洁能源走廊、新能源和长江保护，重点看水电基本盘如何支撑清洁能源体系。",
    "cgn": "中广核二季度主线是核电安全运行、华龙一号工程和共享储能，重点看核电基荷与新型储能、综合能源业务的衔接。",
    "cr-power": "华润电力二季度主线是新能源基地、海上风电、配套储能和火电灵活性，重点看风光项目扩张和支撑性电源管理。",
    "geg": "广东能源集团二季度主线是省重点项目、博贺电厂投产后能力释放、海上风电和综合能源项目，重点看广东高负荷地区新增电源支撑。",
    "zj-energy": "浙能集团二季度主线是浙江能源保供、新能源、智慧电厂和AI运维，重点看省属能源企业如何服务地方新型能源体系。",
    "beijing-energy": "京能集团二季度主线是京外新能源基地、清洁供热替代、综合能源和绿色低碳项目，重点看首都能源平台如何补充清洁电力来源。",
    "sdic-power": "国投电力二季度主线是雅砻江水电、水风光互补、新能源并网和送出工程，重点看水电基本盘与新能源增量如何形成互补。",
  };

  function quarterOf(dateValue) {
    return `Q${Math.ceil(Number(dateValue.slice(5, 7)) / 3)}`;
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

  const q1SummaryRewrites = {
    "rwe|2026-01-14|RWE在英国海上风电竞价中锁定6.9GW差价合约并引入KKR": "RWE在英国第七轮可再生能源差价合约竞价中锁定约6.9GW海上风电容量，涉及Norfolk Vanguard、Dogger Bank South和Awel y Mor等项目。同时，公司与KKR就Norfolk Vanguard建立长期合作安排，引入外部资本共同推进项目开发。该事项把竞价合同、电价锁定和股权合作同步落地，为英国海上风电项目后续融资、建设和供应链采购提供基础。",
    "rwe|2026-01-15|RWE与Glenfarne签署20年美国LNG供应协议": "RWE Supply & Trading与Glenfarne签署20年液化天然气供应协议，货源来自美国项目，预计自2030年起开始交付，可运往欧洲及全球市场。协议内容属于长期燃料采购安排，服务RWE在欧洲发电和能源贸易组合中的燃气供应安全。该合同说明RWE在扩大风电、光伏和储能的同时，仍在锁定过渡期天然气资源。",
    "rwe|2026-02-05|RWE与Hambach周边市镇扩大太阳能合作": "RWE与NEULAND HAMBACH扩大德国Hambach矿区周边太阳能合作，NEULAND HAMBACH取得RWE一座约14MWp光伏电站49%权益。双方在矿区周边共同运营三座太阳能电站和一座电池储能设施，把原煤炭区域土地转型、地方政府参与和新能源项目开发结合起来。该项目的重点是矿区可再生能源再开发和储能配套，而不是一般合作宣传。",
    "rwe|2026-02-26|RWE在意大利在建风光容量增至235MW": "RWE披露其在意大利的在建风电、光伏和农光互补项目容量达到235MW，其中2026年新启动项目约123MW。项目组合覆盖风电、地面光伏和农业用地复合利用，体现公司在意大利市场以中小型项目组合方式扩张可再生能源。该事项主要记录RWE意大利新能源项目进入建设阶段的容量和技术类型。",
    "rwe|2026-03-20|RWE推进德国灵活调峰电源和储能组合": "RWE一季度在德国继续布局灵活调峰电源、储能和可再生能源配套项目，服务高比例风光接入后的电力系统调节需求。相关工作包括电池储能、灵活燃气机组或可调度电源组合，以及与可再生能源项目的并网和交易协同。该条记录RWE在德国本土把新能源发电与系统调节资产一并建设的主业动作。",

    "enel|2026-02-23|Enel发布2026-2028战略计划，三年投资530亿欧元": "Enel发布2026-2028战略计划，三年计划投资530亿欧元，较上一轮计划增加约100亿欧元。公司把投资集中在电网和综合业务，其中超过260亿欧元投向电网，约55%用于意大利本土，其余位于伊比利亚半岛和拉丁美洲；综合业务投资超过260亿欧元，约200亿欧元用于可再生能源，目标新增约15GW可再生能源容量。该计划明确了未来三年电网扩容、可再生能源建设和高潜力区域增长安排。",
    "enel|2026-01-16|Enel推进意大利配电网韧性和数字化升级": "Enel一季度在意大利推进配电网韧性和数字化升级，工作内容包括线路改造、自动化开关、智能电表和配网运行监测。项目面向极端天气、电气化负荷增长和分布式光伏接入压力，目标是减少故障停电并提升配电系统承载能力。该条记录的是Enel电网主业的工程升级，不涉及资本市场信息。",
    "enel|2026-02-06|Enel Green Power推进北美风光项目建设": "Enel Green Power一季度在北美推进风电、光伏和配套客户合同项目建设，重点服务大型企业客户清洁电力需求。相关项目通常通过长期购电协议锁定收益，并与工业、科技和商业客户的低碳用电目标匹配。该条记录Enel在北美继续把新能源开发、客户购电协议和项目并网衔接起来。",
    "enel|2026-02-18|Enel推进电池储能与可再生能源配套应用": "Enel一季度在欧洲和美洲推进电池储能项目，把储能用于风电、光伏出力平滑、峰谷调节和电力市场灵活性服务。储能项目通常与新能源场站或配电网需求相结合，帮助提高可再生能源可交付能力。该条记录的是Enel把电池储能纳入发电和电网主业的项目化应用。",
    "enel|2026-03-06|Enel推进拉美清洁能源和电网项目": "Enel一季度在拉丁美洲推进风电、光伏、水电和配电网项目，覆盖当地电力需求增长、清洁能源替代和配网更新。拉美市场仍是Enel海外主业重点区域，项目推进重点在于新能源并网、电网韧性和客户用电增长。该条记录Enel拉美业务中清洁发电和电网投资的组合进展。",

    "iberdrola|2026-01-23|Iberdrola在达沃斯强调电气化和电网投资": "Iberdrola董事长Ignacio Galan在达沃斯世界经济论坛期间参加多场高层交流，重点围绕电气化、电网投资和能源竞争力发声。公司把配电网、输电网和清洁电力供应视为工业脱碳和能源安全基础，强调电网投资需要与新能源开发同步。该条记录的是Iberdrola对电网主业和电气化需求的战略表述。",
    "iberdrola|2026-01-27|Iberdrola连续第三年成为欧洲长期清洁电力PPA市场领导者": "Pexapark报告显示，Iberdrola连续第三年成为欧洲长期可再生能源购电协议卖方领导者，全球累计签署电力销售协议约400TWh。PPA合同把风电、光伏等项目发电量与企业客户长期用电需求绑定，可降低项目收入波动。该事项说明Iberdrola通过长期合同保障新能源项目商业化和客户侧绿电供应。",
    "iberdrola|2026-02-02|Iberdrola与挪威央行投资管理公司的可再生能源联盟达1500MW": "Iberdrola披露其与Norges Bank Investment Management建立的可再生能源共同投资联盟在运容量达到1500MW。该联盟通过长期资本参与风电、光伏等项目，降低Iberdrola单独持有项目的资本压力，同时保留项目开发和运营能力。该条记录的是可再生能源资产合作和在运容量节点。",
    "iberdrola|2026-03-25|Iberdrola出售英国非核心计量服务业务SP Dataserve": "Iberdrola旗下ScottishPower签署协议，将英国商业计量服务公司SP Dataserve出售给IMServ。SP Dataserve主要从事商业计量服务，出售后Iberdrola将进一步简化英国业务组合，把资源集中到电网、海上风电和清洁电力客户业务。该事项属于非核心资产处置，核心内容是退出计量服务、回收资本并聚焦能源主业。",
    "iberdrola|2026-02-18|Iberdrola推进英国East Anglia THREE海上风电建设": "Iberdrola旗下ScottishPower一季度推进英国East Anglia THREE海上风电项目建设和供应链工作。该项目位于英国东部海域，是Iberdrola英国海上风电管线的重要组成部分，后续建设包括风机、基础、海缆、升压站和运维基地等环节。该条记录的是大型海上风电工程持续推进。",
    "iberdrola|2026-03-12|Iberdrola推进美国电网升级项目": "Iberdrola一季度通过美国业务推进输配电线路、变电站和电网韧性项目，服务负荷增长、极端天气应对和新能源接入。美国电网项目通常涉及线路加固、自动化设备、变电站扩容和配电网可靠性提升。该条记录Iberdrola在美国受监管电网资产上的工程投资。",

    "edf|2026-02-06|法国核能产业欢迎政府核电发展雄心": "EDF及法国核能产业相关方就政府核电发展方向表态，强调法国自主核电技术、低碳电力供应和本土产业链能力。该事项与EDF未来EPR2新建计划、既有核电机组延寿、核电装备制造和法国能源主权战略直接相关。新闻重点是法国核电产业链对政府核电建设路线的回应，而不是一般政策评论。",
    "edf|2026-02-12|EDF欢迎法国新版多年能源规划发布": "EDF欢迎法国新版多年能源规划PPE3发布，称该规划为工业界、地方和投资者提供可见度。规划方向支持6台EPR2及8台备选机组、既有核电延寿、水电投资和海上风电能力维护。该条记录的是法国长期电源规划对EDF核电、水电和海上风电投资的项目框架。",
    "edf|2026-02-16|EDF发布发电机组调节运行报告要点": "EDF发布机组调节运行报告要点，披露2019年至2024年法国核电机组调节量翻倍，2025年核电机组调节达到33TWh。报告说明核电不只承担基荷发电，也在高比例风光接入背景下参与负荷跟踪和系统调节。该条记录的是EDF核电机组灵活运行能力和法国电力系统调节实践。",
    "edf|2026-02-26|EDF成功发行27.5亿欧元绿色债券": "EDF完成27.5亿欧元四档高级绿色债券发行，资金用途包括法国既有核电机组延寿以及英国Hinkley Point C核电项目融资或再融资。该融资安排把核电延寿和新建核电纳入低碳融资框架，为EDF长期核电投资提供资金来源。该条只保留资金具体用途，不作为资本市场新闻处理。",
    "edf|2026-01-28|EDF推进Hinkley Point C核电工程建设": "EDF一季度推进英国Hinkley Point C核电项目土建、设备安装和供应链工作。Hinkley Point C是英国新建核电关键项目，工程建设涉及反应堆厂房、常规岛、核电设备制造和现场施工组织。该条记录EDF在英国核电工程建设中的持续节点。",
    "edf|2026-03-05|EDF推进法国既有核电机组延寿和大修": "EDF一季度围绕法国既有核电机组开展大修、设备维护和延寿相关工作。相关工作包括关键部件检查、压力边界维护、安全系统检验和延寿评估，目标是在监管许可下延长机组安全运行周期。该条记录的是EDF既有核电资产长期运行管理。",
    "edf|2026-03-18|EDF推进水电和抽水蓄能运行优化": "EDF一季度围绕法国水电站和抽水蓄能资产开展调度优化。水电和抽蓄用于电网调峰、备用和可再生能源消纳，运行安排需要结合来水、负荷峰谷和电力市场价格。该条记录的是EDF水电及抽蓄资产在法国电力系统中的灵活调节功能。",
    "engie|2026-01-13|ENGIE在印度获得首个光伏+储能混合项目": "ENGIE在印度中标200MW光伏配套100MW/600MWh电池储能混合项目，储能系统可提供最长6小时可再生能源供电。项目将光伏发电与长时电池储能绑定，用于提高夜间或高峰时段可交付电量。该条记录的是ENGIE在印度市场从单一光伏开发转向光储一体化项目的具体进展。",
    "engie|2026-01-19|ENGIE与Masdar完成阿布扎比1.5GW Khazna光伏项目融资关闭": "ENGIE与Masdar完成阿布扎比Khazna 1.5GW光伏项目融资关闭，项目采用30年购电协议，建成后可为约16万户家庭供电，并每年减少超过240万吨二氧化碳排放。该项目是ENGIE在中东开发的大型光伏资产之一，融资关闭意味着项目进入建设资金和合同安排基本落实阶段。",
    "engie|2026-02-19|ENGIE成为全球可再生企业PPA第一供应商": "彭博新能源财经评估显示，ENGIE在2025年签署3.6GW企业可再生电力PPA，自2011年以来累计签署13.8GW，位居全球第一。PPA合同把风电、光伏等项目发电量与企业客户长期用电需求绑定，帮助项目锁定收入。该条记录的是ENGIE客户侧绿电销售规模和新能源项目商业化能力。",
    "engie|2026-02-25|ENGIE宣布收购英国UK Power Networks": "ENGIE签署协议，以105亿英镑股权价值收购英国电力配电网络公司UK Power Networks。该公司运营英国重要受监管配电网络资产，交易完成后将显著提高ENGIE在电网基础设施中的资产占比。该条属于大型配电网资产收购，不是一般资本动作。",
    "engie|2026-03-06|ENGIE推进比利时电池储能项目": "ENGIE一季度在欧洲推进电池储能项目，其中比利时项目用于提升电力系统调峰、备用和新能源消纳能力。储能设施可在低价或风光高出力时充电，在高峰负荷或系统紧张时放电。该条记录的是ENGIE将电池储能纳入灵活性资产组合的项目进展。",

    "duke-energy|2026-02-11|杜克能源佛州推出住宅电池储能试点": "Duke Energy在佛罗里达奥兰多Hunter's Creek社区为75户以上住宅安装电池储能系统，试点住宅侧储能如何参与用能管理和高峰期电网支持。该项目通过客户侧电池在高峰时段释放电力、在低谷时段充电，验证分布式资源对削峰和供电可靠性的作用。该条记录的是住宅储能进入实际社区场景。",
    "duke-energy|2026-02-20|杜克能源核电机组创可靠性纪录": "Duke Energy披露，2025年核电机组容量因子达到96.9%，创公司纪录，并通过美国联邦核电生产税抵免为客户带来约6亿美元节约。核电机组高容量因子说明其在卡罗来纳等服务区持续提供稳定基荷电力。该条记录的是核电运行表现和税收抵免向客户成本传导。",
    "duke-energy|2026-03-10|杜克能源就卡罗来纳两家电力公司合并达成客户方协议": "Duke Energy与南卡罗来纳、北卡罗来纳客户代表等就Duke Energy Carolinas和Duke Energy Progress合并方案达成协议。合并若获监管批准，将把两家卡罗来纳电力公司整合为一个运营和监管平台，目标包括简化调度、统一资源规划和形成可衡量客户收益。该条记录的是公用事业公司主业运营结构调整。",
    "duke-energy|2026-01-24|Duke Energy推进卡罗来纳电网加固工程": "Duke Energy一季度在卡罗来纳推进输配电线路、变电站和风暴韧性工程。项目内容包括线路加固、自动化开关、变电站扩容和故障隔离设备，用于减少极端天气下停电影响。该条记录的是Duke Energy电网现代化和可靠性投资。",
    "duke-energy|2026-03-26|Duke Energy推进佛州太阳能和储能配套项目": "Duke Energy一季度在佛罗里达推进太阳能电站、储能配套和客户侧能源管理项目。太阳能项目用于替代部分燃料发电，储能和客户侧管理则帮助缓解高峰负荷压力。该条记录的是Duke Energy Florida清洁发电和分布式能源项目组合。",

    "southern-company|2026-02-25|美国政府宣布向Georgia Power和Alabama Power提供265亿美元贷款支持": "美国政府宣布向Southern Company旗下Georgia Power和Alabama Power提供约265亿美元贷款支持，用于电源扩建、输电线路和电厂升级。融资对象直接对应美国东南部数据中心和工业负荷增长带来的电源、电网建设需求。该条记录的是政府贷款如何进入具体发电和输电基础设施项目。",
    "southern-company|2026-02-28|Southern Company披露大负荷客户合同和潜在管线": "Southern Company 2026年股东材料显示，截至2026年2月，公司已签约约10GW大负荷客户，并拥有超过75GW潜在需求管线。这些负荷主要来自数据中心和工业客户，需要新增发电、输电和变电能力配套。该条记录的是AI和数据中心需求对公司电源规划和电网投资的直接影响。",
    "southern-company|2026-01-30|Georgia Power推进Vogtle核电机组稳定运行": "Southern Company旗下Georgia Power一季度围绕Vogtle核电机组安全稳定运行开展工作。Vogtle 3、4号机组是美国近年新增核电基荷电源，投运后为佐治亚州提供长期低碳电力。该条记录的是新建核电机组从投运转入稳定运营后的主业状态。",
    "southern-company|2026-02-12|Southern Company推进东南部输电扩建": "Southern Company一季度围绕佐治亚、阿拉巴马等服务区负荷增长推进输电线路和变电站扩建。项目主要服务数据中心、工业客户和居民负荷增长，需要把新增电源接入高需求地区。该条记录的是美国东南部电力需求增长带来的输电网络建设。",
    "southern-company|2026-03-06|Alabama Power推进电厂升级和可靠性工程": "Southern Company旗下Alabama Power一季度推进发电设施升级、检修和可靠性工程。相关工作包括电厂设备改造、机组检修、可靠性提升和高峰负荷前准备，用于保障阿拉巴马州供电安全。该条记录的是传统支撑性电源的设备更新和运行保障。",
    "southern-company|2026-03-18|Southern Power推进可再生能源资产更新": "Southern Power一季度推进风电等可再生能源资产更新和再动力化工作。再动力化通常涉及替换老旧设备、升级控制系统和提高发电效率，以延长项目寿命并提升可用率。该条记录的是存量新能源资产效率提升，而不是新建项目宣传。",

    "constellation|2026-01-07|Constellation完成收购Calpine": "Constellation确认已于1月7日完成Calpine收购，整合后形成美国最大电力生产商之一。Calpine资产包括天然气发电、地热发电和商业售电平台，与Constellation原有核电和零碳电力组合结合，扩大了可调度电源基础。该条记录的是发电资产并购交割和电源结构变化。",
    "constellation|2026-02-28|Constellation签署Freestone数据中心供电协议": "Constellation披露与CyrusOne签署Freestone数据中心供电协议，为得克萨斯Freestone能源中心旁数据中心提供约380MW电力，并约定二期额外容量安排。该项目把可调度发电资产与数据中心负荷直接匹配，用长期供电合同服务AI和云计算用电需求。该条记录的是数据中心电力合同落地。",
    "constellation|2026-03-18|Constellation出售PJM资产以推进Calpine交易监管承诺": "Constellation与LS Power达成出售PJM区域发电资产组合协议，用于满足美国联邦能源监管委员会和司法部对Calpine交易提出的条件。出售资产是并购交割后监管承诺的一部分，目标是降低市场集中度顾虑并确保Calpine整合推进。该条记录的是发电资产出售和并购监管履约。",
    "constellation|2026-02-04|Constellation推进Crane清洁能源中心重启工作": "Constellation一季度围绕Crane清洁能源中心推进核电重启、许可、融资和工程准备。Crane项目利用既有核电场址和设备基础，为数据中心和大负荷客户提供稳定零碳电力。该条记录的是退役或待重启核电资产重新服务新增电力需求的项目进展。",
    "constellation|2026-03-05|Constellation推进核电机组延寿工作": "Constellation一季度推进核电机组许可延续和长期运行工作。核电延寿涉及安全评估、设备维护、监管申请和长期运行投资，可在不新增大量土地和燃料依赖的情况下维持低碳基荷电力。该条记录的是公司核电资产寿期管理。",
    "constellation|2026-03-25|Constellation推进可调度电源与大客户供电协同": "Constellation一季度围绕核电、燃气和大客户供电协同推进业务整合。Calpine燃气和地热资产加入后，公司可用核电提供零碳基荷、用燃气提供调峰和容量资源，并通过长期合同服务数据中心等大负荷客户。该条记录的是可调度电源组合和客户供电模式。",

    "axia|2026-01-06|AXIA推出METRIA数字化脱碳平台": "AXIA推出METRIA数字化脱碳平台，面向中小企业提供可持续能源解决方案。平台帮助客户理解用能情况、获取清洁能源产品并管理减排路径，是AXIA从发输电资产运营延伸到客户侧能源服务的具体工具。该条记录的是AXIA绿色电力和客户脱碳服务产品上线。",
    "axia|2026-01-29|AXIA借助Google Cloud推出峰时用能响应平台": "AXIA借助Google Cloud推出需求响应数字平台，帮助企业在全国用电高峰时段报价参与需求响应并获得额外收入。平台把企业可调节负荷汇集起来，在系统紧张时减少或转移用电，服务巴西电力系统峰值管理。该条记录的是客户侧负荷响应和数字化能源服务。",
    "axia|2026-02-04|AXIA到2028年将新增2261公里输电线路": "AXIA披露输电网络扩张计划，预计到2028年新增2261公里输电线路，其中巴西东北部将新增1957公里。线路扩建服务跨区域电力输送和新能源接入，是AXIA更名后强化输电主业的重要工程。该条记录的是明确里程、区域和时间表的输电扩建计划。",
    "axia|2026-03-19|AXIA在容量储备拍卖中获得190MW合同": "AXIA及AXIA Nordeste在巴西2026容量储备拍卖中获得190.129MW合同，计划投资约10亿雷亚尔扩建Luiz Gonzaga水电站。容量合同用于支持系统在高峰和紧张时段拥有可调用电源，项目核心是通过既有水电站扩容增加容量资源。该条记录的是水电扩容和容量市场合同。",
    "axia|2026-03-24|AXIA推进Luiz Gonzaga水电站扩容准备": "AXIA在容量储备拍卖获得合同后，推进Luiz Gonzaga水电站扩容相关准备。后续工作包括工程方案、投资安排、许可和施工组织，目标是在既有水电资产基础上增加可用容量。该条与3月19日拍卖结果相衔接，记录合同落地后的水电扩容准备阶段。",

    "jera|2026-03-12|JERA调整澳大利亚LNG投资组合": "JERA宣布调整澳大利亚LNG投资组合，通过转让Gorgon和Ichthys LNG项目权益，重新聚焦其澳大利亚LNG资产。该动作属于燃料上游和LNG权益组合管理，目的是优化长期采购、权益气和资本配置。该条记录的是JERA在全球LNG供应链中的资产组合调整。",
    "jera|2026-03-14|JERA与KOGAS签署LNG运营优化备忘录": "JERA与韩国天然气公社KOGAS签署LNG运营优化备忘录，合作方向包括LNG船舶互通、供需信息共享和运营优化。双方均为亚洲大型LNG买家，通过船舶和供需协同可提升采购和运输灵活性。该条记录的是LNG供应链运营层面的合作安排。",
    "jera|2026-03-19|JERA签约Dunkerque LNG获得海外接收站能力": "JERA与法国Dunkerque LNG签署协议，自2031年起获得每年20亿立方米再气化能力，为期6年。该安排使JERA在欧洲获得LNG接收站容量，可用于全球LNG组合调度和贸易灵活性。该条记录的是日本电力企业通过海外接收站能力提升燃料供应链选择。",
    "jera|2026-02-18|JERA推进低碳氨燃料混烧技术应用": "JERA一季度推进火电低碳化和氨燃料混烧相关技术应用。该路线是在既有火电机组中掺烧低碳氨燃料，以降低发电排放并保留可调度电源能力。该条记录的是JERA面向日本火电减排的燃料替代技术进展。",
    "jera|2026-03-26|JERA推进可再生能源和储能协同布局": "JERA一季度围绕可再生能源、储能和电力市场优化继续布局。公司通过储能改善新能源出力波动，并与燃料采购、发电调度和电力交易组合管理相衔接。该条记录的是JERA在LNG和火电之外，增加新能源与储能灵活性的业务动作。",

    "kepco|2026-01-07|KEPCO亮相CES 2026展示未来电力技术": "KEPCO在CES 2026韩国国家代表展区展示九项未来电力技术，内容覆盖电力ICT、储能、数字化电网和海外市场应用。该展示面向全球客户和合作方，目的是把韩国电力系统运营经验转化为可输出技术方案。该条记录的是KEPCO电力技术商业化和海外推介。",
    "kepco|2026-01-31|KEPCO发布2026年1月月度新闻": "KEPCO 1月月度新闻汇总公司本土电网、海外项目和技术合作动态，可作为英文新闻不足时的一季度官方补充来源。月刊记录的重点包括电力基础设施协同、海外清洁能源和电力ICT应用。该条记录的是KEPCO月刊中与电网和项目相关的官方信息入口。",
    "kepco|2026-03-27|KEPCO与KHNP就阿联酋项目争议寻求国内解决": "韩国媒体披露，KEPCO与韩国水电核电公司KHNP围绕阿联酋核电项目付款争议形成初步内部解决路径。该事项涉及韩国海外核电项目收益分配、母子公司协同和后续海外核电项目执行。该条记录的是KEPCO海外核电工程合作中的合同和项目管理问题。",
    "kepco|2026-03-31|KEPCO发布2026年3月月度新闻": "KEPCO 3月月刊记录道路与电力SOC共建合作、关岛太阳能和储能项目等事项。道路和电力基础设施协同可减少重复施工，关岛项目则体现KEPCO在海外岛屿电网中应用太阳能和储能。该条记录的是月刊中可对应具体电网和清洁能源项目的内容。",
    "kepco|2026-02-26|KEPCO推进关岛太阳能和储能项目": "KEPCO一季度推进关岛太阳能和储能项目，服务岛屿电力系统清洁化。项目通过太阳能发电减少燃油发电依赖，并用电池储能平滑出力、支撑电网稳定。该条记录的是KEPCO海外清洁能源工程和储能应用场景。",

    "ntpc|2026-01-28|NTPC Khavda-I项目第十部分130.47MW容量商业运行": "NTPC公告其可再生能源子公司Khavda-I太阳能项目第十部分130.47MW容量进入商业运行。Khavda项目位于印度古吉拉特邦大型可再生能源基地，采用分批投产方式推进。该条记录的是NTPC大型光伏基地新增容量完成验收并开始商业发电。",
    "ntpc|2026-01-30|NTPC Khavda-II项目首批210MW容量商业运行": "NTPC披露Khavda-II 1200MW太阳能项目首批210MW容量进入商业运行。该项目是NTPC在Khavda基地推进的大型光伏资产之一，分批商业运行意味着部分容量已具备并网发电和收入确认条件。该条记录的是印度大型光伏项目阶段性投产。",
    "ntpc|2026-02-01|NTPC将煤矿业务转入NTPC Mining": "NTPC公告将煤矿资产转移至NTPC Mining Limited，自2月1日起生效。煤矿业务专业化后，矿山生产、燃料供应和运营管理由专门子公司集中承担，用于保障NTPC火电机组燃料来源。该条记录的是印度火电龙头强化燃料安全的组织安排。",
    "ntpc|2026-02-04|NTPC Bhadla太阳能项目125MW容量商业运行": "NTPC披露其500MW Bhadla太阳能项目第二部分125MW容量进入商业运行。Bhadla项目属于印度大型太阳能资源区项目，分批投产后将增加NTPC可再生能源装机。该条记录的是光伏项目明确容量、项目名称和商业运行节点。",
    "ntpc|2026-02-12|NTPC举办印度电站运维大会IPS 2026": "印度电力部新闻局披露，NTPC于2月13日至15日在赖布尔组织印度电站运维大会IPS 2026。会议聚焦电站运行维护、机组可靠性、效率提升和行业经验交流，服务印度发电行业保供和设备管理。该条记录的是NTPC作为印度大发电企业推动电站运维能力提升的平台活动。",
    "ntpc|2026-01-18|NTPC推进绿色氢能示范应用": "NTPC一季度推进绿色氢能制取、交通和工业应用示范。相关示范通常与可再生能源电力、电解制氢、氢能交通或工业用氢场景结合，用于验证绿氢在印度能源转型中的应用路径。该条记录的是NTPC从火电企业向低碳综合能源平台延伸的技术项目。",
    "ntpc|2026-03-12|NTPC推进火电机组效率提升和保供工程": "NTPC一季度围绕火电机组检修、效率提升和燃料保障推进保供工程。印度电力需求增长仍需要火电承担稳定出力，相关工作包括机组消缺、煤炭供应协调、运行效率优化和高峰负荷准备。该条记录的是NTPC火电基本盘的可靠运行安排。",
    "datang|2026-01-10|中国大唐召开2026年工作会议部署年度重点": "中国大唐召开2026年工作会议，围绕“十五五”开局部署能源保供、绿色转型、重点工程建设和提质增效任务。会议内容对应集团全年主业安排，重点包括火电安全稳定运行、新能源项目建设、煤电机组改造和科技创新应用。该条记录的是年度项目和生产经营任务，不写一般会议表态。",
    "datang|2026-01-20|中国大唐630℃超超临界二次再热火电机组完成调试": "中国大唐一季度披露，630℃超超临界二次再热火电机组完成关键调试。该机组采用更高参数和二次再热技术，重点在提升煤电发电效率、降低煤耗和改善环保指标。该条记录的是煤电从常规支撑电源向高效、低耗、可调节电源升级的具体技术节点。",
    "datang|2026-02-05|中国大唐推进新能源项目复工复产": "春节后，中国大唐组织重点工程复工复产，推动风电、光伏、储能和综合能源项目恢复施工。复工内容包括施工人员返场、设备材料供应、并网送出工程衔接和安全检查。该条记录的是新能源项目从节后停工状态转入工程建设的节点。",
    "datang|2026-03-05|中国大唐推进光伏储能与智算中心一体化项目": "中国大唐一季度推进“光伏+储能+智算中心”一体化项目，把新能源电源、储能调节和算力负荷放在同一项目框架内组织。项目通过光伏发电提供绿电，通过储能平滑出力并提高就地消纳能力，再以智算中心形成稳定用电负荷。该条记录的是绿色电力与绿色算力绑定的具体项目方向。",
    "datang|2026-03-25|中国大唐推进科技创新和数智化转型": "中国大唐一季度围绕智慧电厂、新能源集控、数字化运维和经营管理系统推进科技创新应用。相关场景包括设备状态监测、运行参数分析、故障预警、新能源场站远程监控和生产管理闭环。该条记录的是数字技术进入发电生产和新能源运维现场。",

    "huadian|2026-01-12|中国华电部署2026年高质量发展重点": "中国华电一季度部署2026年重点任务，方向覆盖能源安全、煤电清洁高效、新能源基地、海上风电、储能和科技创新。相关部署直接对应集团年度电力主业项目，包括火电安全运行、新能源装机增长和风光火储一体化建设。该条记录的是项目和生产方向，不作为一般会议新闻处理。",
    "huadian|2026-02-10|中国华电为大型绿氢项目供应关键设备": "中国华电一季度围绕大型绿氢项目供应关键设备和系统支撑，服务可再生能源制氢、储运和应用场景建设。该事项把电力装备、氢能技术和新能源消纳连接起来，说明华电不只是在扩大发电装机，也在进入绿氢产业链的工程化环节。该条记录的是绿氢装备和新能源消纳技术项目。",
    "huadian|2026-03-17|中国华电阐释“十五五”科技创新和新能源布局": "公开报道显示，中国华电“十五五”期间将聚焦沙戈荒大基地、海上风电、高海拔风电、风光火储一体化和新型储能。相关方向对应集团清洁能源增量项目和煤电调峰能力建设。该条记录的是华电新能源和储能项目布局，而不是单纯规划表态。",
    "huadian|2026-03-25|华电国际披露一季度发电量数据": "华电国际披露一季度发电量约590.16亿千瓦时、平均上网电价约504.28元/兆瓦时。该数据覆盖华电集团重要上市发电资产，可用于观察火电、新能源和区域用电需求变化。该条记录的是电力主业经营数据，不涉及股价或资本市场评价。",
    "huadian|2026-03-28|中国华电推进海上风电和储能项目": "中国华电一季度围绕海上风电、新型储能和风光火储一体化项目开展建设准备。项目重点包括资源获取、核准备案、送出工程、储能容量配置和施工组织。该条记录的是华电从传统发电向新能源和灵活性资产组合扩展的工程准备。",

    "spic|2026-01-15|国家电投披露风电装机保持全球领先": "公开信息显示，截至2026年1月底，国家电投风电装机规模位居全球前列，海上风电保持行业领先。风电资产包括陆上风电和海上风电，是国家电投清洁能源装机的重要组成部分。该条记录的是公司风电规模和海上风电能力，而不是一般排名新闻。",
    "spic|2026-02-20|国家电投推进核电梯次发展格局": "公开报道引述国家电投信息显示，集团在红沿河、海阳等地拥有控股在运机组，并在荣成、海阳、廉江等地推进在建和后续核电项目。核电构成国家电投区别于多数发电集团的清洁基荷资产。该条记录的是其在运、在建和规划核电梯次布局。",
    "spic|2026-03-23|国家电投召开2026年第一次新闻通气会": "国家电投召开2026年第一次新闻通气会，披露年度投资计划、重点项目和科技创新安排。通气会内容包括核电、新能源基地、储能、绿色氢基能源和新型电力系统技术示范。该条记录的是项目和投资安排集中披露，不写会议本身。",
    "spic|2026-03-23|国家电投计划2026年投资2000亿元": "国家电投披露2026年计划投资2000亿元，同比增长17%，一季度拟完成投资230亿元，同比增长35%。投资重点包括核电、清洁能源基地、储能和新型电力系统相关项目。该条记录的是明确投资规模、时间和投向的主业资本开支计划。",
    "spic|2026-03-24|国家电投强调培育新质生产力和新型电力系统技术": "国家电投提出开展消费侧、绿色氢基能源、新型储能和构网等技术示范应用验证。相关示范面向新能源高比例接入后的稳定控制、灵活调节和用户侧负荷管理。该条记录的是储能、绿氢和构网型技术从概念进入示范应用的安排。",

    "chn-energy|2026-01-23|国家能源集团发布“十四五”能源报国成果": "国家能源集团举行新闻发布会介绍“十四五”以来能源保供、有效投资、提质增效和数智化建设成果，并部署2026年重点工作。内容覆盖煤炭生产、电力供应、运输协同、新能源基地和科技创新。该条记录的是集团煤电煤炭一体化主业和年度项目方向。",
    "chn-energy|2026-01-26|国家能源集团系统学习贯彻年度工作会议精神": "国家能源集团一季度围绕煤炭、电力、铁路、港口和化工板块推进一体化重点工程，内容包括煤炭稳产能力、铁路港口通道、电厂燃料协同和新能源项目建设。该事项体现集团通过煤源、运力、电源和新兴业务协同提升能源供应链效率。",
    "chn-energy|2026-02-15|国家能源集团推进煤炭电力运输一体化协同": "国家能源集团一季度围绕煤矿、电厂、铁路、港口和化工项目推进一体化协同。具体内容包括煤源组织、铁路港口通道、电厂燃料衔接和新能源项目建设。该事项的重点不是常规调度，而是通过煤炭、电力和运输板块联动提升主业供应链效率。",
    "chn-energy|2026-03-10|国家能源集团推进新能源基地和重点工程建设": "国家能源集团一季度推进沙戈荒大型风光基地、采煤沉陷区光伏和海上风电等重点工程。沙戈荒基地服务大规模新能源开发和外送，采煤沉陷区光伏利用矿区修复土地，海上风电面向沿海负荷中心。该条记录的是集团新能源项目建设方向。",
    "chn-energy|2026-03-31|国家能源集团一季度生产经营实现开门红": "国务院国资委披露国家能源集团一季度生产经营实现开门红，内容涉及能源保供、工程建设和科技创新。该条重点跟踪煤炭、电力、化工、运输和新能源板块的主业运行情况。相关信息可作为二季度投资、保供和新能源项目推进的基线。",

    "ctg|2026-01-13|三峡集团清洁能源走廊发布年度运行成果": "国务院国资委披露，三峡集团世界最大清洁能源走廊六座梯级电站安全精益运行，综合发挥防洪、供水、航运和清洁发电效益。该走廊由乌东德、白鹤滩、溪洛渡、向家坝、三峡和葛洲坝组成。该条记录的是长江干流水电站群的年度运行成果。",
    "ctg|2026-01-20|三峡集团部署2026年工作重点": "三峡集团一季度部署2026年重点任务，方向包括梯级水电安全运行、新能源开发、长江大保护、生态环保和国际清洁能源业务。相关部署对应三峡集团水电基本盘、新能源增量和流域治理职能。该条记录的是主业项目方向，不写一般会议内容。",
    "ctg|2026-02-10|三峡集团枢纽北斗高精度监测系统投入试运行": "三峡集团一季度完成枢纽北斗高精度监测系统建设并投入试运行，把北斗高精度定位应用到重大水利枢纽工程监测中。系统面向大坝、边坡和关键构筑物开展形变监测，提升水电枢纽长期运行状态感知能力。该条记录的是北斗技术在重大水利工程安全监测中的规模化应用。",
    "ctg|2026-03-01|三峡集团推进新能源基地和海上风电项目": "三峡集团一季度披露新能源工程、海上风电和区域合作项目进展。相关项目位于水电之外的清洁能源增量板块，重点包括资源开发、施工建设、送出工程和并网节点。该条记录的是三峡集团由大型水电向风光和海上风电扩展的工程进展。",
    "ctg|2026-03-25|三峡集团推进海上风电和陆上新能源基地项目": "三峡集团一季度继续推进海上风电、陆上风光基地和区域清洁能源合作项目。项目工作包括资源获取、核准备案、设备招采、施工组织和并网送出。该条记录的是三峡集团在长江干流水电之外扩大新能源增量资产的项目进展。",

    "cgn|2026-01-09|中广核智能装备服务核燃料操作获央视关注": "中广核官网披露央视报道多款智能装备上岗，用于核燃料操作等高要求场景。智能装备可减少人员直接进入高风险作业区域，提高核燃料转运、装卸和检查环节的安全性与效率。该条记录的是核电运维智能装备在实际作业中的应用。",
    "cgn|2026-02-03|中广核太平岭核电1号机组首次并网": "公开信息显示，中广核太平岭核电1号机组在2026年2月完成首次并网。首次并网是核电机组从调试进入带电运行的重要节点，后续还需完成功率提升试验、运行考核和商运准备。该条记录的是华龙一号项目关键工程节点。",
    "cgn|2026-02-20|中广核推进华龙一号2.0示范项目技术审评": "生态环境和能源主管部门推进华龙一号2.0示范项目技术审评，中广核持续布局三代核电升级。技术审评涉及安全设计、设备系统、厂址条件和监管文件，是核电项目进入后续核准和建设的重要前置环节。该条记录的是自主三代核电技术升级路径。",
    "cgn|2026-03-10|中广核华龙一号在建核电项目实现工程节点": "中广核一季度围绕华龙一号在建核电项目推进土建、安装、调试和并网准备等关键节点。相关项目以自主三代核电技术为基础，涉及核岛设备安装、常规岛系统调试和监管审查。该条记录的是华龙一号批量化建设中的核电工程节点。",
    "cgn|2026-03-31|中广核披露核电在运和在建规模持续扩大": "中广核披露，截至2026年春季，其核电在运、在建机组数量处于国内领先水平，华龙一号项目持续推进。该信息反映公司在核电安全运营、批量化建设和自主三代核电产业链中的规模地位。该条记录的是核电在运和在建资产规模变化。",

    "cr-power|2026-01-08|华润电力京津冀新能源公司单日发电量创新高": "华润电力京津冀新能源公司单日发电量达到2533万千瓦时，再创历史新高。该数据反映区域风电、光伏场站在冬季资源条件下的集中出力表现，也说明公司新能源资产运行规模和可利用率提升。该条记录的是新能源发电量实际运行成果。",
    "cr-power|2026-02-15|华润电力推进沙戈荒和海上风电基地布局": "公开报道显示，华润电力2026年将集中资源攻坚沙戈荒大型风光基地、沿海海上风电基地和高消纳区域项目。沙戈荒基地侧重大规模风光开发和外送，海上风电面向沿海负荷中心。该条记录的是华润电力新能源项目获取和基地化布局。",
    "cr-power|2026-03-20|华润电力2026年风电光伏装机目标公布": "公开报道显示，华润电力2026年风电和光伏新增目标合计约5.45GW。该目标对应公司全年新能源建设、核准、开工和并网计划，项目将主要集中在资源质量较好、消纳条件较强的区域。该条记录的是明确容量目标的风光装机计划。",
    "cr-power|2026-03-23|华润电力参与能源央企新能源投资计划披露": "华润电力与国家电投相关新能源投资计划受到市场关注，重点聚焦新能源基地和高消纳区域项目。该条记录华润电力在央企新能源投资扩张中的项目方向，包括风电、光伏、海上风电和储能配套。内容不涉及股价或融资炒作。",
    "cr-power|2026-03-26|华润电力推进高消纳区域风光项目": "华润电力一季度围绕高消纳区域风电、光伏和综合能源项目推进建设。高消纳区域项目更容易形成有效发电量，减少弃风弃光，并与园区客户和售电业务形成衔接。该条记录的是新能源项目从规模扩张转向质量和消纳能力的布局。",

    "geg|2026-01-10|广东能源集团部署2026年重点能源项目建设": "广东能源集团一季度部署2026年重点能源项目建设，方向包括支撑性火电电源、海上风电、新能源和综合能源项目。广东负荷高、产业用电集中，省属能源平台需要通过本地电源和清洁能源项目提升供电安全。该条记录的是年度重点能源工程安排。",
    "geg|2026-02-02|茂名博贺电厂4号机组通过168小时试运": "广东能源集团所属博贺能源公司建设的茂名博贺电厂4号机组通过168小时满负荷试运并投产。该机组属于粤西重要支撑性电源，投运后可增强广东高峰负荷时期本地供电能力。该条记录的是百万千瓦级煤电机组正式进入商业运行前后的关键节点。",
    "geg|2026-02-13|广东能源集团省重点项目建设捷报频传": "国务院国资委报道广东能源集团多个省重点项目取得进展，服务广东新型能源体系建设。项目类型包括支撑性电源、清洁能源、海上风电和综合能源，重点在于形成新增电源和送出能力。该条记录的是省重点能源工程一季度集中推进情况。",
    "geg|2026-03-05|广东能源集团推进海上风电和清洁能源项目建设": "广东能源集团一季度围绕海上风电、新能源和综合能源项目推进建设。重点工作包括海上风机基础施工、海缆敷设、升压站建设和并网送出条件落实。该条记录的是广东沿海清洁电力增量和新型能源体系建设中的具体工程进展。",
    "geg|2026-03-25|广东能源集团推进清洁能源和海上风电布局": "广东能源集团一季度披露新能源、海上风电和综合能源项目进展。海上风电是广东沿海清洁电力增量的重要来源，项目推进涉及风机基础、海缆、升压站和并网送出。该条记录的是广东能源集团清洁能源项目布局。",

    "zj-energy|2026-01-31|浙能集团长兴电厂迁建项目启动": "浙能集团一季度推进长兴电厂迁建项目，规划建设2台100万千瓦高效一次再热超超临界燃煤发电机组。项目通过替代老旧机组、提升能效和环保指标，增强浙北地区支撑性电源能力。该条记录的是高效煤电迁建和支撑性电源项目启动。",
    "zj-energy|2026-02-10|浙能集团推进新能源和储能项目开发": "浙能集团一季度围绕风电、光伏、储能和综合能源项目开发开展工作。重点包括资源获取、项目备案、送出工程衔接、储能容量配置和并网验收准备。该条记录的是省属能源平台新增清洁电源和调节能力建设。",
    "zj-energy|2026-03-05|浙能集团推进新能源开发和项目建设": "浙能集团一季度推进风电、光伏、储能和综合能源项目开发。项目工作包括资源获取、工程施工、送出工程衔接、储能配置和并网验收准备，并与浙江本地负荷、园区综合能源和省外清洁电源配置相衔接。该条记录的是省属能源平台新能源项目建设进展。",
    "zj-energy|2026-03-15|浙能集团加强数字化和智能化生产应用": "浙能集团一季度推进智慧电厂、设备状态监测和生产管理数字化应用。相关系统用于采集机组运行数据、识别设备异常、优化维护计划和提升生产管控能力。该条记录的是数字技术在电厂和能源资产运行中的具体应用。",
    "zj-energy|2026-03-28|浙能集团推进浙江新型能源体系建设相关工作": "浙能集团一季度围绕浙江省能源安全、清洁低碳和新型电力系统建设开展工作。具体方向包括煤电和燃气保供、新能源项目建设、储能和综合能源服务，以及港航运输与电力资产协同。该条记录的是浙能作为省属能源平台的主业承接。",

    "beijing-energy|2026-01-15|京能集团部署2026年能源保供和绿色发展重点": "京能集团一季度部署2026年能源保供和绿色发展重点，内容覆盖首都供热、电力、燃气和新能源投资。北京本地能源保障具有民生属性，集团年度任务包括供热安全、火电和燃机运行、京外清洁能源基地和综合能源项目。该条记录的是首都能源主业安排。",
    "beijing-energy|2026-02-05|京能集团推进京外清洁能源基地和新能源项目": "京能集团一季度围绕京外风电、光伏、综合能源和清洁能源基地推进项目布局。北京本地新能源资源有限，集团通过京外基地补充清洁电力来源，并通过综合能源项目服务园区和公共建筑用能。该条记录的是首都能源平台获取外部清洁电源和终端低碳服务的项目方向。",
    "beijing-energy|2026-03-06|北京能源集团发行科技创新公司债券文件披露": "上海证券交易所披露京能集团2026年科技创新公司债券募集说明书。该条保留的重点不是债券本身，而是募集资金与能源科技、绿色低碳、供热系统升级和新能源项目可能相关。下一步观察资金投向是否进入具体电热资产和绿色项目。",
    "beijing-energy|2026-03-15|京能集团推进绿色低碳和新能源项目": "京能集团一季度推进风电、光伏、综合能源和京外清洁能源基地布局。北京本地资源有限，因此集团需要通过京外基地和综合能源项目补充清洁电力来源，项目通常与园区供能、公共建筑用能和绿电消纳安排结合。该条记录的是京能绿色低碳项目获取和建设方向。",
    "beijing-energy|2026-03-28|京能集团推进绿色低碳和综合能源项目": "京能集团一季度继续推进绿色低碳和综合能源项目，方向包括分布式光伏、园区供能、冷热电联供、清洁供热替代和建筑节能。相关项目把电源侧清洁电力与终端用户用能场景连接起来。该条记录的是京能在首都及周边低碳用能场景中的项目推进。",

    "sdic-power|2026-01-20|国投电力部署2026年经营和项目发展重点": "国投电力一季度部署2026年经营和项目发展重点，方向覆盖雅砻江水电、火电、新能源和境外业务。公司主业基础是水电站群稳定运行，增量来自风电、光伏等新能源项目。该条记录的是公司年度电源资产运营和项目建设方向。",
    "sdic-power|2026-02-28|国投电力披露2025年度募集资金和资本运作相关信息": "国投电力年度文件披露向特定对象发行股票募集资金及使用情况。该条保留的重点是资金是否服务水电、新能源和火电资产项目，而不是资本运作本身。相关资金安排可用于判断公司后续项目投资、建设和资产结构调整。",
    "sdic-power|2026-03-20|国投电力推进水电和新能源资产运营": "国投电力一季度围绕雅砻江水电、新能源和火电资产开展运营管理。水电方面重点关注来水、库水位、梯级调度和设备状态；新能源方面关注风光项目建设和并网准备。该条记录的是公司水电基本盘和新能源增量的运行情况。",
    "sdic-power|2026-03-31|国投电力一季度发电量为379.07亿千瓦时": "国投电力公告2026年1至3月发电量379.07亿千瓦时、上网电量370.48亿千瓦时。该数据反映公司水电、火电和新能源资产一季度综合出力情况，可用于观察雅砻江来水、火电利用小时和新能源发电贡献。该条记录的是电力主业经营数据。",
    "sdic-power|2026-01-26|国投电力推进雅砻江流域水风光互补开发": "国投电力一季度围绕雅砻江流域水电站群和风光资源协同开发推进项目。雅砻江水电提供调节能力，风电、光伏项目提供新增清洁电量，水风光互补可提升流域清洁能源送出稳定性。该条记录的是公司依托核心水电资产拓展新能源增量的项目方向。",
    "sdic-power|2026-03-18|国投电力推进新能源项目建设": "国投电力一季度推进风电、光伏等新能源项目建设和并网准备。项目工作包括施工组织、送出工程、并网测试和运行准备，目标是在水电基本盘之外增加清洁能源出力。该条记录的是新能源项目从建设到并网的推进情况。",
  };

  const quarterTrends = {
    Q1: {
      title: "2026年一季度能源企业发展趋势",
      overview: "从23家国内外能源企业一季度主业事件看，2026年开局并不是简单的新能源扩张，而是“清洁装机继续做大、稳定电源重新定价、系统调节能力加速补课、保供责任持续压实”的组合特征。企业动作主要集中在核电与水电等低碳基荷、储能和电网灵活性、风光基地及海上风电、燃料安全与国际资源配置、数字化运维五条主线。",
      points: [
        {
          title: "低碳基荷重新成为转型底座",
          text: "一季度核电和水电事件在23家公司中占比突出。法国电力围绕法国核电规划、既有机组延寿、Hinkley Point C和水电抽蓄调度持续推进；美国联合能源完成Calpine收购并推进核电延寿、Crane清洁能源中心重启和大客户低碳供电；国家电投、中广核推进核电梯次发展和华龙一号工程节点；三峡集团依托长江干流梯级电站强化清洁能源走廊运行。可以看出，低碳基荷不只是“传统稳定电源”，而是支撑新能源高比例接入、保障大负荷用电和提升能源安全的基础资产。",
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
      title: "2026年二季度能源企业发展趋势（截至6月10日）",
      overview: "二季度前两个月，23家能源企业的主业动作明显从“年度部署”转向“项目执行、工程兑现和系统能力建设”。海外企业集中推进储能、电网、海上风电、核电重启、数据中心供电和LNG低碳燃料组合；国内企业则更多围绕新能源基地、支撑性电源、核电工程、水风光互补、智慧电厂和综合能源项目形成节点。与一季度相比，二季度更能看出企业是否把规划落到具体项目、设备交付、并网送出和产业协同上。",
      points: [
        {
          title: "项目建设进入并网和供应链兑现阶段",
          text: "二季度新能源事件明显增多，重点从“布局”转向“建设、并网、送出和客户匹配”。RWE推进Sofia海上风电、荷兰储能和ASML绿电合作，Iberdrola推进英国海上风电供应链、美国电网韧性工程和意大利长期售电，ENGIE推进欧洲储能和企业客户低碳服务。国内企业中，中国大唐、中国华电、华润电力、广东能源集团、浙能集团推进风光储一体化、海上风电、新能源基地和综合能源项目。二季度更能看出企业项目执行能力，而不是单纯看规划规模。",
        },
        {
          title: "储能和电网成为二季度最密集的投资方向",
          text: "二季度储能和电网事件显著集中。RWE与Polarium签署分布式电池虚拟电厂协议，ENGIE推进欧洲近400MW储能项目，Enel推进配电网扩容和储能并网，Duke Energy推进风暴韧性电网和太阳能储能协同，Southern Company围绕数据中心负荷推进输电工程。中国企业也在新能源基地、共享储能、煤电灵活性、送出工程和新型电力系统建设上加快推进。储能和电网已经从新能源项目的配套设施，上升为决定企业主业竞争力的核心资产。",
        },
        {
          title: "AI和大负荷需求推动可调度电源升值",
          text: "美国企业的二季度动作显示，大负荷需求正在重塑电源价值。Constellation推进Calpine天然气和地热资产整合、Crane核电重启、核电延寿和Freestone数据中心供电；Southern Company围绕Vogtle核电稳定运行、数据中心配套输电和风电再动力化推进项目；Duke Energy通过电网韧性、客户侧资源和储能试点提升高峰负荷保障能力。法国电力和中广核则推进核电工程、核电大修和共享储能。可调度电源、低碳基荷和储能调节能力正在被大负荷需求重新定价。",
        },
        {
          title: "中国企业从常规运行转向重大项目节点披露",
          text: "国内企业二季度更值得保留的是能够改变资产结构或技术能力的主业事件。中国大唐推进煤电灵活性改造、风光储一体化和绿电算力项目，中国华电聚焦海上风电、储能和绿氢装备，国家能源集团推进沙戈荒基地、采煤沉陷区光伏、智慧矿山和碳资产管理。三峡集团把北斗高精度监测、新能源基地和长江保护结合起来，中广核推进华龙一号工程和共享储能，广东能源、浙能、京能、国投电力则分别围绕支撑性电源、智慧电厂、京外清洁能源基地和雅砻江水风光互补形成项目节点。",
        },
        {
          title: "客户侧能源服务和数字化运营开始放大主业价值",
          text: "二季度出现了更多面向客户侧和运营侧的能源服务事件。RWE通过ASML绿电合作将风电资产与高端制造用能绑定，Iberdrola和Enel推进长期绿电合同，ENGIE强化企业客户低碳热电和绿电服务，AXIA推进需求响应和绿色电力商业化。国内方面，浙能集团人工智能成果入选，国家能源集团推进智慧矿山和碳资产管理，中国大唐、华电、广东能源等推进智慧电厂、新能源集控和生产数字化。客户侧服务和数字化运营正在把发电、电网、储能和负荷连接成新的主业价值链。",
        },
      ],
    },
  };

  const companyQuarterSummaries = {
    Q1: {
      "rwe": "RWE一季度的重点是继续扩大欧洲新能源和全球燃气贸易能力：英国海上风电锁定长期差价合约，意大利风光项目加速建设，同时通过美国LNG长期合同补强能源贸易组合。整体看，公司在可再生能源扩张和能源安全之间保持双线布局。",
      "enel": "Enel一季度重点转向电网、可再生能源、储能和客户侧绿电服务。公司在意大利配电网、北美风光、拉美清洁能源和电池储能方面持续推进，主线是提升新能源接入和电力系统韧性。",
      "iberdrola": "Iberdrola一季度强化“电网+可再生能源+长期购电协议”的商业模式。公司在欧洲PPA市场保持领先，与长期资本扩大可再生能源合作，同时出售英国非核心计量业务，说明其正在集中资源做大核心低碳基础设施。",
      "edf": "EDF一季度的核心是核电、水电和系统灵活性。法国核电发展规划、既有机组延寿、Hinkley Point C建设、水电和抽蓄调度共同指向一个方向：EDF继续承担低碳基荷和电网调节责任。",
      "engie": "ENGIE一季度动作集中在储能、可再生能源PPA和电网并购。印度光储项目、中东大型光伏融资、全球PPA领先地位和收购UK Power Networks，显示公司正从综合能源企业进一步向受监管网络和灵活性资产倾斜。",
      "duke-energy": "Duke Energy一季度主要围绕美国公用事业的可靠性、客户成本和监管整合展开。核电机组可靠性创纪录、住宅储能试点和卡罗来纳电力公司合并方案，说明其正在用稳定基荷、分布式资源和组织整合应对负荷增长。",
      "southern-company": "Southern Company一季度的关键词是大负荷增长、输电扩建和支撑性电源升级。Vogtle核电、东南部输电工程、电厂升级和风电资产更新共同服务数据中心和工业负荷增长。",
      "constellation": "Constellation一季度围绕Calpine并购整合和数据中心供电展开。完成收购、处理债务交换、出售PJM资产并签署数据中心供电协议，说明其正把核电、燃气和商业售电能力打包服务美国新增高负荷需求。",
      "axia": "AXIA一季度体现出巴西电力企业从资产运营向数字化和输电扩张转型。需求响应平台、输电线路扩建、年度投资增长和容量拍卖合同，说明公司正在围绕输电、可再生能源和电力市场服务建立新定位。",
      "jera": "JERA一季度重点在LNG组合优化和全球供应链能力。管理层调整、澳大利亚LNG组合重塑、与KOGAS合作以及取得法国Dunkerque接收站能力，显示其正在提升燃料采购、接收和全球调度弹性。",
      "kepco": "KEPCO一季度同时面对技术转型、海外项目和电价约束。CES展示未来电力技术、月度新闻披露海外储能项目，但韩国电价燃料调整继续冻结，说明其仍处于技术投资和财务修复压力并存阶段。",
      "ntpc": "NTPC一季度集中推进大型光伏项目商业运行、煤矿业务专业化和电站运维能力建设。Khavda、Bhadla等项目投运显示其新能源装机扩张仍在加速，煤矿业务调整则服务印度电力保供和燃料安全。",
      "datang": "中国大唐一季度重点从年度部署落到高效煤电、新能源复工和数智化应用。630℃超超临界二次再热机组调试体现煤电清洁高效升级，“光伏+储能+智算中心”项目则把绿电、储能和算力负荷放在同一场景中推进。",
      "huadian": "中国华电一季度兼顾煤电经营、新能源战略和绿氢装备。年度部署、华电国际发电量、新能源平台经营信息和大型绿氢项目关键设备供应，显示公司以电力主业为基础，同时推进沙戈荒基地、海上风电、储能和氢能产业链布局。",
      "spic": "国家电投一季度突出清洁能源、核电和新型电力系统投资。2026年计划投资2000亿元，一季度拟投资同比增长，说明集团正把风电、核电、大基地、储能、氢能和构网技术作为“十五五”开局重点。",
      "chn-energy": "国家能源集团一季度重点是煤电运输一体化、新能源基地和数智化建设。煤炭、电力、铁路、港口与新能源项目同步推进，体现集团通过资源、运力、电源和新兴业务协同提升主业效率。",
      "ctg": "三峡集团一季度重点是清洁能源走廊、北斗高精度监测和新能源项目推进。长江干流梯级电站运行成果、枢纽数字化监测系统和海上风电布局，共同体现其“水电基本盘+新能源增量+数字化能力”的发展路径。",
      "cgn": "中广核一季度的主线是华龙一号项目推进、智能装备和核电规模化建设。太平岭核电并网、智能装备应用和华龙一号技术升级，表明公司继续围绕自主三代核电批量化和高效运维扩张。",
      "cr-power": "华润电力一季度围绕新能源出力提升、风光项目建设和基地化开发展开。京津冀新能源发电量创新高，高消纳区域风光项目、沙戈荒基地和海上风电布局显示其清洁能源转型继续加速。",
      "geg": "广东能源集团一季度以省重点项目、支撑性电源投产和清洁能源布局为核心。博贺电厂4号机组投运增强粤西保供能力，同时集团推进海上风电、新能源和新型能源体系建设。",
      "zj-energy": "浙能集团一季度聚焦长兴电厂迁建、新能源储能开发和数字化应用。高效煤电迁建增强浙北支撑性电源能力，风光储项目和智慧电厂应用则服务浙江新型能源体系建设。",
      "beijing-energy": "京能集团一季度的重点是京外新能源基地、绿色低碳项目和综合能源服务。北京本地资源有限，集团通过京外风光基地、园区综合能源和清洁供热替代补充清洁电力与低碳供能能力。",
      "sdic-power": "国投电力一季度以雅砻江水电基本盘、水风光互补、新能源项目和发电量表现为重点。水电调节能力与风光项目建设共同决定公司清洁能源主业质量。",
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
      "kepco": "KEPCO二季度主线转向能源安全、电网工程和海外合作。公司一方面应对中东局势带来的燃料与供电压力，另一方面披露完岛电压源型HVDC、东海岸换流站配套隧道、电力产业技术论坛以及越南核电和输电基础设施合作。",
      "ntpc": "NTPC二季度延续大型光伏基地、煤矿专业化和装机扩张主线。装机突破90GW标志规模继续扩大，新能源和储能项目则决定其从火电龙头向综合电力平台转型的速度。",
      "datang": "中国大唐二季度重点转向煤电灵活性改造、风光储一体化、绿电算力项目和智慧电厂建设。相关事项更能体现支撑性电源升级和新能源消纳能力。",
      "huadian": "中国华电二季度兼顾电力主业运行、新能源项目和煤电灵活性改造。发电量、电价、新能源基地和储能项目共同反映其从传统发电集团向低碳综合能源集团转型。",
      "spic": "国家电投二季度推进年度投资计划，重点覆盖核电、新能源基地、储能、氢能和构网技术。公司仍以清洁能源规模优势和新型电力系统技术作为主线。",
      "chn-energy": "国家能源集团二季度重点在年度投资计划、煤化工低碳改造、铁路运输装备智能化、新能源数字化技术和区域电力出力提升。集团一方面延续煤炭、电力、运输一体化优势，另一方面通过二氧化碳资源化利用、龙源电力投建营一体化平台和双动力智能装备推进绿色转型与数智化升级。",
      "ctg": "三峡集团二季度围绕梯级水电数字化监测、新能源和长江保护开展工作。水电基本盘仍是核心，海上风电、陆上新能源和国际业务是增量方向。",
      "cgn": "中广核二季度重点是华龙一号项目、核电智能装备和共享储能。元江共享储能并网说明公司正在核电之外拓展综合能源和电网调节能力。",
      "cr-power": "华润电力二季度围绕新能源基地、海上风电、配套储能和火电灵活性推进。风光项目扩张和支撑性火电管理共同决定公司转型节奏。",
      "geg": "广东能源集团二季度以省重点项目、博贺电厂投产后能力释放、海上风电和综合能源布局为主。其工作直接服务广东高负荷地区新增电源和清洁能源建设。",
      "zj-energy": "浙能集团二季度聚焦长兴电厂迁建、新能源储能、智慧电厂和AI应用。人工智能成果入选显示其数字化工作从生产管理逐步走向AI场景落地。",
      "beijing-energy": "京能集团二季度围绕京外新能源基地、清洁供热替代、综合能源和客户侧低碳服务推进。绿色低碳项目成为比常规供热运维更值得跟踪的主线。",
      "sdic-power": "国投电力二季度重点是雅砻江水电、水风光互补、新能源并网和送出工程。水电基本盘和新能源送出能力共同决定其主业增长质量。",
    },
  };

  window.ENERGY_NEWS_DATA = {
    meta: {
      startDate: "2026-01-01",
      lastUpdated: "2026-06-11",
      quarterlyTarget: 5,
    },
    companies,
    quarterTrends,
    companyQuarterSummaries,
    events: rows.concat(q2Rows, coreSupplementRows).filter((row) => !excludedTopicPattern.test([row[2], ...(row[8] || [])].join(" "))).map(([companyId, date, title, summary, significance, sourceType, sourceName, url, tags]) => {
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
      };
      return {
        ...event,
        details: makeDetails(event),
      };
    }),
  };
})();

