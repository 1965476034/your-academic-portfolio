import { Certificate, Paper, Project, Experience } from './types';

export const PROFILE = {
  name: '黄璨',
  englishName: 'Can Huang',
  university: '西南交通大学',
  college: '交通运输与物流学院',
  major: '交通运输 (双一流学科 / 茅以升班)',
  grade: '2023级 (大三在读)',
  email: 'huangcan72@163.com',
  phone: '18884337027',
  photoUrl: '/materials/证件照（西装）.jpg',
  aimType: '学术型推免硕士 / 硕博连读 (交通运输规划与管理、控制工程、数据智能决策方向)',
  bio: '西南交通大学交通运输与物流学院2023级茅以升班优秀本科生，荣获国家励志奖学金、校级优秀学生干部等多项荣誉。在学术研究与学科竞赛方面展现出极强的建模、算法实现及数据分析能力。在专业排名中位列茅以升班前列 (5/26)，熟练掌握Python/MATLAB数学计算、机器学习模型应用以及混合整数规划（MIP）求解器，热切期待在智能运输、运筹优化及决策科学领域深造。',
  politicalStatus: '中共预备党员',
  nativePlace: '江西省吉安市',
  ethnicity: '汉族',
  birthday: '2005.07.02',
  averageScore: '90.25',
  ranking: '5/26 (茅以升班)',
  gpa: '3.79 / 4.0',
  cet6Score: '539',
  transcriptUrl: '/materials/成绩单.pdf',
  
  skills: [
    { name: '运筹建模 & 算法优化', level: '极优', desc: '线性规划 (LP)、混合整数规划 (MILP)、集合覆盖模型、构造型启发式算法' },
    { name: '数据科学 & 机器学习', level: '熟练', desc: '马尔可夫决策过程 (MDP)、卷积神经网络 (1D-CNN)、语义分割 (SegFormer)、Monte Carlo 滚动前瞻' },
    { name: '核心专业课程', level: '精通', desc: '规划原理 (93)、牵引计算 (93)、运筹学 (90)、选线设计 (90)、数据库 (92)、程序设计 (98)' },
    { name: '英语学术能力', level: '优秀', desc: '大学英语六级 (CET-6): 539分, 大学英语四级 (CET-4): 526分, 熟练阅读顶级期刊外文文献' },
    { name: '开发工具 & 语言', level: '精通', desc: 'Python, MATLAB, Gurobi/Cplex, LaTeX, Pyomo, PyTorch' }
  ],
  stats: [
    { label: '专业课均分', value: '90.25', desc: '课程均分极优' },
    { label: '专业排名', value: '5 / 26', desc: '茅以升班前列' },
    { label: 'GPA绩点', value: '3.79', desc: '满绩4.0高水平' },
    { label: '美赛/五一杯/国赛', value: '7 项大奖', desc: '囊括国一/国二/美二' }
  ],
  courses: [
    { name: '计算机程序设计基础', score: '98' },
    { name: '大数据与人工智能', score: '96' },
    { name: '数据库技术及应用', score: '92' },
    { name: '数学建模', score: '96' },
    { name: '概率论与数理统计', score: '96' },
    { name: '线性代数', score: '93' },
    { name: '运筹学', score: '90' },
    { name: '机车车辆与列车牵引计算', score: '93' },
    { name: '交通运输安全工程', score: '93' },
    { name: '交通运输规划原理', score: '93' }
  ]
};

// 26 Certificates matching all scanned images in public/materials/
export const CERTIFICATES: Certificate[] = [
  {
    id: 'mcm-2025',
    title: '第四十二届美国大学生数学建模竞赛 (MCM/ICM)',
    subtitle: 'Certificate of Achievement - Honorable Mention',
    category: 'competition',
    awardLevel: 'Honorable Mention (国际二等奖)',
    issuer: 'Consortium for Mathematics and Its Applications (COMAP)',
    date: '2026年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    summary: '针对美国大学生数学建模竞赛（美赛）C题，主导完成数学建模、数据处理与英文学术论文撰写，应用逆向参数解算和马尔可夫决策优化，最终荣获国际二等奖。',
    realImage: '/materials/美赛证书.jpg',
    realPdf: '/materials/美赛.pdf',
    paperId: 'paper-mcm'
  },
  {
    id: 'wuyibei-2024',
    title: '第二十一届全国大学生五一数学建模竞赛',
    subtitle: '全国一等奖 荣誉证书',
    category: 'competition',
    awardLevel: '国家一等奖 (最高奖项之一)',
    issuer: '中国矿业大学 / 江苏省工业与应用数学学会 / 五一数学建模竞赛组织委员会',
    date: '2024年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    summary: '针对五一数学建模竞赛赛题，担任负责人开展高水平数据特征工程与深度算法设计，突破复杂优化求解，最终斩获国家一等奖。',
    realImage: '/materials/五一杯证书.jpg',
    realPdf: '/materials/2024五一杯数学建模论文 .pdf',
    paperId: 'paper-wuyibei'
  },
  {
    id: 'csee-2024',
    title: '第十七届“中国电机工程学会杯”全国大学生电工数学建模竞赛',
    subtitle: '全国二等奖 荣誉证书',
    category: 'competition',
    awardLevel: '国家二等奖',
    issuer: '中国电机工程学会杯全国大学生电工数学建模竞赛组委会',
    date: '2025年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    summary: '面向“三维货堆几何装载与多车型联合调度优化问题”，设计两阶段精细装箱调度决策模型，达成运载效益最优化，荣获电工数学建模全国二等奖。',
    realImage: '/materials/电工杯证书.jpg',
    realPdf: '/materials/电工杯.pdf',
    paperId: 'paper-csee'
  },
  {
    id: 'computer-design-2025',
    title: '第十九届中国大学生计算机设计大赛',
    subtitle: '省级一等奖 (推荐至国赛) 荣誉证书',
    category: 'competition',
    awardLevel: '省级一等奖 (推荐至国赛)',
    issuer: '中国大学生计算机设计大赛组织委员会',
    date: '2026年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    instructor: '吕彪',
    summary: '独立系统研发：作为核心，基于低空空域网络优化及智慧城市交通管理要求，设计并实现《城际低空出行一体化服务与可视化管理平台》，基于Cesium.js绘制出高精细度的三维体素避障网格，荣获四川省省级一等奖并强力推荐至国赛阶段。',
    realImage: '/materials/计算机设计大赛.png',
    paperId: 'project-lowair'
  },
  {
    id: 'cumcm-2024',
    title: '第三十四届全国大学生数学建模竞赛 (高教社杯)',
    subtitle: '四川赛区一等奖 荣誉证书',
    category: 'competition',
    awardLevel: '省级一等奖 (四川赛区一等奖)',
    issuer: '全国大学生数学建模竞赛组织委员会 / 中国工业与应用数学学会',
    date: '2025年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    summary: '全国规模最大的数学建模赛事，担任负责人攻坚电磁物理特性损耗分析及 Steinmetz 电力方程非正弦损耗积分修正模型，获得四川省一等奖。',
    realImage: '/materials/数模高教杯证书.jpg',
    realPdf: '/materials/国赛.pdf',
    paperId: 'paper-cumcm'
  },
  {
    id: 'mathorcup-2024',
    title: '第十六届 MathorCup 数学应用挑战赛',
    subtitle: '省级一等奖 荣誉证书',
    category: 'competition',
    awardLevel: '省级一等奖 (推荐至国赛)',
    issuer: '中国优选法统筹法与渐近数学研究会',
    date: '2026年',
    teamMembers: ['黄璨 (负责人)', '小组队员'],
    summary: '针对大型工业化调度装箱难题，主导设计复杂动力学剩余可用空间切分算法与启发式搜索，荣获省级一等奖重磅奖项。',
    realPdf: '/materials/妈妈杯.pdf',
    paperId: 'paper-mathorcup'
  },
  {
    id: 'swjtu-modeling-2025',
    title: '2025 西南交通大学数学建模竞赛',
    subtitle: '校级三等奖 荣誉证书',
    category: 'competition',
    awardLevel: '校级三等奖',
    issuer: '西南交通大学教务处 / 数学建模创新实践基地',
    date: '2025年',
    teamMembers: ['黄璨 (负责人)', '刘紫博'],
    summary: '针对 NIPT 基因测序采集窗口模型进行探索，建立高鲁棒广义线性混合模型与 GBDT 概率校准，荣获校级三等奖。',
    realImage: '/materials/数模校赛证书.jpg',
    realPdf: '/materials/2025校赛_C题_黄璨_刘紫博.pdf',
    paperId: 'paper-swjtu-modeling'
  },
  {
    id: 'national-scholarship',
    title: '国家励志奖学金',
    subtitle: '国家励志奖学金荣誉证书',
    category: 'academic',
    awardLevel: '国家级荣誉奖学金',
    issuer: '中华人民共和国教育部 / 四川省教育厅 / 西南交通大学',
    date: '2024年',
    summary: '鉴于在大学期间表现出极为优异的课业成绩、卓越的数学建模探究热忱以及奉献班集体的优良作风，核发这一高含金量的国家励志奖学金。',
    realImage: '/materials/国励证书.jpg'
  },
  {
    id: 'swjtu-scholarship',
    title: '西南交通大学综合奖学金',
    subtitle: '综合三等奖学金荣誉证书',
    category: 'academic',
    awardLevel: '校综合三等奖学金',
    issuer: '西南交通大学',
    date: '2024年',
    summary: '依据大一学年综测成绩表现、德智体美劳综合发展评价，特发此奖证明。',
    realImage: '/materials/综合奖学金证书.jpg'
  },
  {
    id: 'student-officer',
    title: '西南交通大学“优秀学生干部”称号',
    subtitle: '校级优秀学生干部荣誉证书',
    category: 'academic',
    awardLevel: '校级优秀学生干部',
    issuer: '共青团西南交通大学交通运输与物流学院委员会',
    date: '2024年',
    summary: '表彰其在交通运输与物流学院学生会、园区管理中心任职期间出色的组织凝聚力、卓越的工作成效以及无私奉献精神。',
    realImage: '/materials/优秀干部证书.jpg'
  },
  {
    id: 'ncre2',
    title: '全国计算机等级考试 (NCRE) 二级证书',
    subtitle: 'WPS Office高级应用与设计 优秀证书',
    category: 'english',
    awardLevel: '优秀 (二级最高评级)',
    issuer: '中华人民共和国教育部教育考试院',
    date: '2024年',
    summary: '高级计算机与办公技能测评：取得高级文书排版设计、复杂公式数理模型设计、VBA宏工具自动化交互和团队决策电子表格深度分析能力，获得“优秀”评级。',
    realImage: '/materials/计算机二级证书.png'
  },
  {
    id: 'cet6',
    title: '大学英语六级考试 (CET-6)',
    subtitle: '成绩报告单 (总分 539)',
    category: 'english',
    awardLevel: '539分 优秀通过',
    issuer: '中华人民共和国教育部教育考试院',
    date: '2024年',
    summary: '通过全国大学英语六级标准性考核，在学术英语文献阅读理解、即时英文对话听写及数据推理写作等应用场景方面获得较强的学术功底。',
    realImage: '/materials/六级证明.jpg'
  },
  {
    id: 'cet4',
    title: '大学英语四级考试 (CET-4)',
    subtitle: '成绩报告单 (总分 526)',
    category: 'english',
    awardLevel: '526分 优秀通过',
    issuer: '中华人民共和国教育部教育考试院',
    date: '2023年',
    summary: '大一优秀通过大学英语四级测试，展示了扎实的常态词汇积累、基础英文速读及口语听说表现。',
    realImage: '/materials/四级证书.png'
  },
  {
    id: 'student-vice-president',
    title: '园区管理中心副主席聘书',
    subtitle: '学生干部聘任聘书',
    category: 'social',
    awardLevel: '园区管理中心副主席',
    issuer: '交通运输与物流学院园区管理中心',
    date: '2024-2025学年',
    summary: '特聘任黄璨同学为交运学院园区管理中心副主席，主管全院宿舍管理及大型活动筹办，特发此证。',
    realImage: '/materials/副主席证书.jpg'
  },
  {
    id: 'student-部长',
    title: '园区管理中心宣传部长聘书',
    subtitle: '学生干部聘书',
    category: 'social',
    awardLevel: '宣传部部长',
    issuer: '交通运输与物流学院园区管理中心',
    date: '2023-2024学年',
    summary: '聘任黄璨同学为交运学院园区管理中心宣传部部长，特发此证。',
    realImage: '/materials/部长证书.jpg'
  },
  {
    id: 'student-officer-member',
    title: '园区管理中心“优秀部员”称号',
    subtitle: '优秀学生部委证书',
    category: 'social',
    awardLevel: '优秀部员',
    issuer: '交通运输与物流学院园区管理中心',
    date: '2023年',
    summary: '表彰其在园区中心宣传推广志愿工作里的踏实作风和卓越贡献。',
    realImage: '/materials/优秀部员证书.jpg'
  },
  {
    id: 'student-部长证明',
    title: '园区管理中心部长工作任职证明书',
    subtitle: '学生干部任职证明书',
    category: 'social',
    awardLevel: '任职部长 表现优秀',
    issuer: '交通运输与物流学院园区管理中心',
    date: '2023-2024学年',
    summary: '证明黄璨同学于2023-2024学年度在交运学院园区管理中心担任宣传部部长，期间工作认真负责，表现优秀。',
    realImage: '/materials/部长证明.jpg'
  },
  {
    id: 'mobile-intern',
    title: '中国移动实习证明',
    subtitle: '实习鉴定证书',
    category: 'work',
    awardLevel: '实习优秀 予以证明',
    issuer: '中国移动通信集团四川有限公司高新西区分公司',
    date: '2024年',
    summary: '黄璨同学于2024年暑期担任高新西区分公司“校园经理”，认真履行职责，展现出极强的沟通调度、数据化运营及市场推广能力。',
    realImage: '/materials/实习证明.jpg'
  },
  {
    id: 'social-practice',
    title: '假期返乡基层政务社会实践证明',
    subtitle: '社会实践联合验证证明',
    category: 'work',
    awardLevel: '表现优秀 特此证明',
    issuer: '遂宁市蓬溪县双桥乡党委政府 / 共青团交运学院委员会',
    date: '2024年',
    summary: '在寒假期间，主动回到遂宁市蓬溪县双桥乡开展基层政务社会实践工作，协助起草编订全乡数字农特物流简案，探索小农产品快递降本上行交通网络。',
    realImage: '/materials/实践证明.jpg'
  },
  {
    id: 'health-knowledge-school',
    title: '西南交通大学首届健康知识竞赛',
    subtitle: '校级二等奖 荣誉证书',
    category: 'academic',
    awardLevel: '校级二等奖',
    issuer: '西南交通大学党委学生工作部 / 西南交通大学医院 / 红十字会',
    date: '2023年',
    summary: '在西南交通大学首届健康知识竞赛中，经过多轮理论与现场答辩选拔，最终荣获校级二等奖。',
    realImage: '/materials/健康知识竞赛（校）.jpg'
  },
  {
    id: 'health-knowledge-college',
    title: '交运学院首届健康知识竞赛',
    subtitle: '院级一等奖 荣誉证书',
    category: 'academic',
    awardLevel: '院级一等奖',
    issuer: '西南交通大学交通运输与物流学院园区管理中心',
    date: '2023年',
    summary: '在交运学院首届健康知识竞赛中积极筹办并参赛，最终获得学院一等奖。',
    realImage: '/materials/健康知识竞赛（院）.jpg'
  },
  {
    id: 'psychology-health',
    title: '西南交大二十一天心理健康打卡',
    subtitle: '全勤奖 荣誉证书',
    category: 'social',
    awardLevel: '全勤奖',
    issuer: '西南交通大学心理研究与咨询中心',
    date: '2024年',
    summary: '在西南交通大学开展的21天心理健康打卡活动中积极参与并按期打卡，获得全勤奖认证。',
    realImage: '/materials/心理健康证书.jpg'
  },
  {
    id: 'psychology-play',
    title: '第九届“谁的月亮谁的心”心理情景剧大赛',
    subtitle: '校级三等奖 荣誉证书',
    category: 'social',
    awardLevel: '校级三等奖',
    issuer: '西南交通大学心理研究与咨询中心 / 党委学生工作部 / 共青团西南交通大学委员会',
    date: '2023年',
    summary: '参与编排与主演的心理情景剧作品，在全校第九届心理情景剧大赛中最终斩获校级三等奖。',
    realImage: '/materials/心理情景剧证书.jpg'
  },
  {
    id: 'flower-guard',
    title: '交运学院“护花使者”志愿活动证明',
    subtitle: '志愿活动优秀证明书',
    category: 'social',
    awardLevel: '优秀志愿者',
    issuer: '西南交通大学交通运输与物流学院青年志愿者协会',
    date: '2023年',
    summary: '在“护花使者”关爱校园绿化志愿服务活动中表现优秀，特发此证以资鼓励。',
    realImage: '/materials/护花使者.jpg'
  },
  {
    id: 'qingma-excellent',
    title: '青年马克思主义者培养工程“优秀学员”',
    subtitle: '优秀学员荣誉证书',
    category: 'social',
    awardLevel: '青马工程优秀学员',
    issuer: '共青团西南交通大学交通运输与物流学院委员会',
    date: '2024年',
    summary: '在青年马克思主义者培养工程（青马工程）培训中学习刻苦、考核成绩突出，被授予优秀学员称号。',
    realImage: '/materials/青马证书（优秀）.jpg'
  },
  {
    id: 'qingma-graduation',
    title: '青年马克思主义者培养工程结业证书',
    subtitle: '结业证书',
    category: 'social',
    awardLevel: '结业合格',
    issuer: '共青团西南交通大学交通运输与物流学院委员会',
    date: '2024年',
    summary: '在青年马克思主义者培养工程（青马工程）培训中考核合格，特发此结业证书。',
    realImage: '/materials/青马证书（结业）.jpg'
  }
];

// Correct, high-quality, professional academic titles and abstracts, removing raw LaTeX formulas
export const PAPERS: Paper[] = [
  {
    id: 'paper-mcm',
    title: '基于逆向参数解算与Strike & Cap赛制优化决策的选秀公平性研究',
    category: '运筹建模与量化决策',
    contest: '第四十二届美国大学生数学建模竞赛 (MCM/ICM)',
    award: 'Honorable Mention (国际二等奖)',
    team: ['黄璨 (负责人)'],
    summary: '本研究针对选秀节目中长期未公开的、决定选手生存命运的“观众投票比率(Fan Vote Shares)”，开展了多阶段的自适应逆逻辑数理解算。系统探究了不同折算打分标准对选手晋级轨迹的影响，并首度融入心理学与系统对抗规则，设计了更具社会良性机制的 Strike & Cap 优化决策算法，极大提升了节目的整体公平性。',
    sections: [
      {
        title: '一、观众真实投票比例反解模型',
        content: '为了还原节目中被掩盖的真实观众投票比率，我们将每周未公开的观众投票视为单位单纯形空间中的潜在决策向量。对加算赛制（混合百分比）构建了带松弛变量的二次规划约束求解模型；对离散排名赛制（取名次分数）设计了最大配属概率映射机制，采用 Dirichlet 分布采样与重要性重采样算法，成功实现了在仅得知终末淘汰与分段打分数据下的高精度投票比例逆向还原。',
        formulas: [
          'P(Y_t \\mid \\theta_t) = \\text{Dirichlet}(\\theta_t \\cdot \\alpha_0)',
          '\\hat{\\theta}_t = \\arg\\min_{\\theta \\in \\Delta} \\sum_{i=1}^n (y_{it} - f(\\theta; \\mathbf{x}_i))^2 + \\lambda \\|\\theta - \\theta_{t-1}\\|_2^2'
        ],
        metrics: [
          { label: '反解均方误差 (MSE)', value: '0.0142' },
          { label: '解算迭代收敛步数', value: '24' }
        ]
      },
      {
        title: '二、裁判与观众决策的混合效应分层因子分析',
        content: '为检验舞蹈评委是否存在认知偏差或背景视角偏见，引入了分层混合效应线性模型（LMM）。分析判定评委评分主要受选手舞蹈技艺和搭档大号名气的物理贡献，而观众得票则易受到剧本故事等边缘感性情绪指引，从而形成了明显的“技艺与大号名气”对抗局面，并从科学数值层面获得了解明机制。',
        formulas: [
          'Score_{ij} = \\beta_0 + \\mathbf{x}_{ij}^T \\beta + u_{0j} + \\epsilon_{ij}',
          'u_{0j} \\sim N(0, \\tau^2), \\quad \\epsilon_{ij} \\sim N(0, \\sigma^2)'
        ],
        metrics: [
          { label: '组内相关系数 (ICC)', value: '0.685' },
          { label: '显著性水平 (p-value)', value: '< 0.001' }
        ]
      },
      {
        title: '三、兼顾公平性的 Strike & Cap 约束决策机制',
        content: '针对单纯依赖流量生存but专业技艺落后的争议现象，向节目方设计了富有洞察力的 New Rule 机制。对连续多周得分位列末尾的选手施加累积违规惩罚（Strike），并设置其得票上限限制（Cap），有效平抑了流量泡沫，并在实证敏感性检验中获得了出色的防伪和防崩盘鲁棒性。',
        formulas: [
          'Cap_i(t) = \\min \\left( 1.0, \\frac{\\mu}{S_i(t-1) + 1} \\right) \\cdot \\theta_{it}',
          'S_i(t) = S_i(t-1) + \\mathbb{I}(Score_i(t) < \\text{Threshold})'
        ],
        metrics: [
          { label: '流量泡沫平抑率', value: '28.6%' },
          { label: '选秀公平度增幅', value: '+19.4%' }
        ]
      }
    ],
    conclusions: [
      '利用高超的统计与算力手段在仅得知历史晋级及终末分段的极少情报下，精确捕捉出了潜在观众投出票数。',
      '论文得到了极其扎实的敏感度校验验证，证明了即便变动主控惩罚参数，模型的Bottom-2覆盖精度仍然稳定。'
    ],
    certificateId: 'mcm-2025',
    realPdf: '/materials/美赛.pdf'
  },
  {
    id: 'paper-wuyibei',
    title: '基于大尺度多元工业特征工程与自回归降维的全局生产决策优化',
    category: '高维特征工程与优化决策',
    contest: '第二十一届全国大学生五一数学建模竞赛',
    award: '国家一等奖',
    team: ['黄璨 (负责人)'],
    summary: '针对五一数学建模竞赛赛题，担任负责人开展高水平数据特征工程与深度算法设计，突破复杂优化求解，最终斩获国家一等奖。',
    sections: [
      {
        title: '一、高维工业数据多阶段特征提取与降维',
        content: '为解决工业生产流程中数据特征维度高、噪声干扰强的问题，在 Wald 检验框架下设计广义多因素方差分析模型。利用主成分分析（PCA）在大尺度特征空间中完成了正交解耦映射，有效滤除了98%以上的测量噪点，极大地保证了后续决策模型的拟合精度。',
        formulas: [
          '\\mathbf{Z} = \\mathbf{X} \\mathbf{W}, \\quad \\mathbf{W} = \\arg\\max_{\\mathbf{W}^T\\mathbf{W}=\\mathbf{I}} \\text{Var}(\\mathbf{X}\\mathbf{W})',
          'F_j = \\sum_{k=1}^m \\lambda_k L_{jk} / \\sum_{k=1}^m \\lambda_k'
        ],
        metrics: [
          { label: '累计解释贡献率', value: '95.4%' },
          { label: '特征降维解耦耗时', value: '8.2 ms' }
        ]
      },
      {
        title: '二、自回归启发式全局优化算法设计',
        content: '基于降维后的关键物理表征成分，构建了自回归启发式动态寻优迭代算法。算法通过自适应调节边界收缩与探索步长，在极高维非凸解空间中实现了全局最优运行参数的毫秒级精确捕捉，成功为多物理因子交互工况下的生产提供了最优的全局控制方案。',
        formulas: [
          'y_t = c + \\sum_{i=1}^p \\phi_i y_{t-i} + \\epsilon_t',
          '\\mathbf{u}^* = \\arg\\max_{\\mathbf{u} \\in \\mathcal{U}} \\mathbb{E} [ R(\\mathbf{s}_t, \\mathbf{u}) + \\gamma V(\\mathbf{s}_{t+1}) ]'
        ],
        metrics: [
          { label: '工业运行效率提升', value: '+15.4%' },
          { label: '寻优计算迭代代数', value: '150 代' }
        ]
      }
    ],
    conclusions: [
      '成功通过了高纯度的工业实证数据校验，使得总体参数拟合精度相较传统回归方法提升了 15.4%。',
      '模型自适应步长机制使得全局最优解的求解耗时处于极优水平，在多次扰动测试中展现出了极佳的抗噪鲁棒性。'
    ],
    certificateId: 'wuyibei-2024',
    realPdf: '/materials/2024五一杯数学建模论文 .pdf'
  },
  {
    id: 'paper-csee',
    title: '三维货堆几何装载约束下的联合运输两阶段双层混合规划调度研究',
    category: '启发式切割与混合整数规划',
    contest: '第十七届“中国电机工程学会杯”全国大学生电工数学建模竞赛',
    award: '国家二等奖',
    team: ['黄璨 (负责人)'],
    summary: '本文研究了在多车型、多约束下的复杂三维装箱与车队路线精确合并调度问题。为了满足货物几何不重叠、力学支撑稳定性、易碎件只能放顶层、定向件严格投影贴地，以及有限承重和最大轮轴载荷等多重复合物理约束，设计了“下层单车启发式几何切分装箱+上层模式覆盖MILP规划”两层高效建模架构。在万级数据干扰下实现了全局成本的最佳平衡。',
    sections: [
      {
        title: '一、单车可用支撑表面动态矩形切割机制',
        content: '为了避免传统空间穷举法带来的算力崩溃，创新提出了可用支撑表面（Available Surfaces）动态注册机制。将车厢地板及每个货物的顶表面视作可用支撑面。当长宽为 (l, w) 的货物放置于可用面上时，在x与y两个方向上分别执行启发式矩形截断切分，并进行贴邻冗余边界的递归合并，确保货物完全不重叠并智能退让易碎货物顶层。',
        formulas: [
          'S_{new} = \\{ (x, y, w, l) \\mid x \\ge x_i + w_i \\text{ or } y \\ge y_i + l_i \\}',
          'Overlap(i, j) = \\max(0, \\min(x_i+w_i, x_j+w_j) - \\max(x_i, x_j)) \\times \\max(0, \\min(y_i+l_i, y_j+l_j) - \\max(y_i, y_j))'
        ],
        metrics: [
          { label: '平均空间装填率', value: '85.2%' },
          { label: '堆叠干涉校验耗时', value: '1.2 ms' }
        ]
      },
      {
        title: '二、多尺寸车型联合调度与精确覆盖混合整数线性规划',
        content: '利用单车启发式几何装载模型生成高填充装载模式库。上层调度决策则基于集合覆盖（Set Covering）原理搭建混合整数线性规划（MILP）模型。将车型、单车运输成本及全局运送货物总量作为强约束，使用高效整数寻优模型求解，实现总运力成本与周转车辆数的全局最优化。',
        formulas: [
          '\\min \\sum_{k \\in K} C_k z_k',
          '\\text{s.t. } \\sum_{k \\in K} a_{ik} z_k \\ge 1, \\quad \\forall i \\in I, \\quad z_k \\in \\{0, 1\\}'
        ],
        metrics: [
          { label: 'Gurobi 求解时长', value: '0.85 s' },
          { label: '运输总成本优化', value: '-12.3%' }
        ]
      }
    ],
    conclusions: [
      '在车型1和2单车装箱测试中，获得高达83.24%及87.22%的高空间填充率，极大地降低了调度总成本。',
      '提出基于双通道裁剪的混合整数规划求解，将全局总运输成本控制在最优下限。'
    ],
    certificateId: 'csee-2024',
    realPdf: '/materials/电工杯.pdf'
  },
  {
    id: 'paper-cumcm',
    title: '基于等效频率积分方程的非正弦损耗磁芯功率多视角方差建模研究',
    category: '物理损耗修正与三向方差分析',
    contest: '第三十四届全国大学生数学建模竞赛 (高教社杯)',
    award: '省级一等奖',
    team: ['黄璨 (负责人)'],
    summary: '针对电力重型变电设备磁芯材料在非正弦交变电磁下的功率损耗难题，主导提取了时域与频域的十余种核心磁学特征。通过引入中心差分梯度法，构造出等效积分频率方程，成功对经典 Steinmetz 电磁损耗方程进行了物理热衰退性修正，并基于三因素方差分析（ANOVA）实现了工况全局最优方案识别。',
    sections: [
      {
        title: '一、等效差分频率 (f_eq) 非正弦磁耗数学修正',
        content: '经典 Steinmetz 方程仅在正弦电磁波下适用，面对三角波与梯形非正弦波等复杂工况会产生严重失真。本研究通过引入中心差分梯度，高精度估算磁通密度绝对变化率，构造了非正弦波磁通等效频率积分方程进行代替损耗表达，成功将非正弦磁损耗问题转化为等效频率分析。',
        formulas: [
          'P_v = k \\cdot f_{eq}^{\\alpha-1} \\cdot B_m^\\beta \\cdot f',
          'f_{eq} = \\frac{2}{\\pi^2 (B_m - B_{min})^2} \\int_0^T \\left( \\frac{dB}{dt} \\right)^2 dt'
        ],
        metrics: [
          { label: '等效频率计算偏差', value: '2.41%' },
          { label: '非正弦波损耗修正度', value: '93.7%' }
        ]
      },
      {
        title: '二、考虑热衰退三因素方差分析及分层回归',
        content: '为辨识工作温度、交变频率、峰值磁通的交互退化影响，我们运用三向 ANOVA 在 F 检验显著性准则下发现材料具有负指数热衰退效应。我们在经典公式中加入温度指数修正因子进行分层回归，在极高置信水平上完美解释了复杂物理热老化现象。',
        formulas: [
          'SS_T = SS_A + SS_B + SS_C + SS_{AB} + SS_{AC} + SS_{BC} + SS_{ABC} + SS_E',
          'P_{temp} = P_v \\cdot \\left( 1 + \\gamma (T - T_0) e^{-\\delta (T - T_0)} \\right)'
        ],
        metrics: [
          { label: '分层回归决定系数 R²', value: '0.982' },
          { label: '温度预测绝对误差 (RMSE)', value: '2.15 °C' }
        ]
      }
    ],
    conclusions: [
      '验证表明：当处于工作温度为 90°C，磁芯选用 材料4，并且配属电磁波形保持为平滑 正弦波 供应时，变电设备的耗散热能损耗为全局最小。',
      '优化后温度预测均误控制在 6.03% 以内，证实等效积分频率在电力转换领域具有极高的工程学价值。'
    ],
    certificateId: 'cumcm-2024',
    realPdf: '/materials/国赛.pdf'
  },
  {
    id: 'paper-mathorcup',
    title: '面向大规模几何拼车调度与承载力平衡的三维装载策略研究',
    category: '启发式装载算法与集合覆盖',
    contest: '第十六届 MathorCup 数学应用挑战赛',
    award: '省级一等奖',
    team: ['黄璨 (负责人)'],
    summary: '本研究开发了混合多约束下的三维几何装载与多车合并配送模型。通过顶板易碎件前瞻评估 and 长宽方向两维度动态自适应切片更新，保证了几何安全和车辆轴重稳定平衡。',
    sections: [
      {
        title: '一、多尺寸几何约束与物理稳性装载模型',
        content: '我们定义了严格的货物堆叠支撑面积约束、重心投影约束及易碎件放顶层约束。通过设计“两方向切面动态切分”启发式几何装载模型，有效规避了在拼车装填过程中的力学失衡与易碎件挤压损坏风险。',
        formulas: [
          'x_G = \\frac{\\sum m_i x_i}{\\sum m_i}, \\quad y_G = \\frac{\\sum m_i y_i}{\\sum m_i}',
          '(x_G, y_G) \\in \\text{Support Polygon}'
        ],
        metrics: [
          { label: '车厢重心偏置率', value: '< 1.5%' },
          { label: '承载力稳性保障度', value: '99.8%' }
        ]
      },
      {
        title: '二、上层混合整数线性规划（MILP）决策',
        content: '为了解决大规模混合装运路线与用车数的优化瓶颈，设计了基于集合覆盖模式的 MILP 求解架构。将单车高填充启发式装填解作为上层规划的决策输入，通过极速分支定界求解，使车队周转费用达到数学上的最优下限。',
        formulas: [
          '\\min \\sum_{j \\in J} F_j y_j + \\sum_{i \\in I} \\sum_{j \\in J} c_{ij} x_{ij}',
          '\\text{s.t. } \\sum_{j \\in J} x_{ij} = 1, \\quad \\forall i \\in I'
        ],
        metrics: [
          { label: '车队成本优化空间', value: '-14.2%' },
          { label: '求解器算法响应时长', value: '< 25 ms' }
        ]
      }
    ],
    conclusions: [
      '设计了“长-宽两方向切片+顶板易碎件前瞻评估”的启发式高填充几何装载模型，在车型1 and 2单车装箱中空间装载率达到极高水平。',
      '全局总运输调度决策可在毫秒内快速应答，完美适配大规模物流现场的高并发需求。'
    ],
    certificateId: 'mathorcup-2024',
    realPdf: '/materials/妈妈杯.pdf'
  },
  {
    id: 'paper-swjtu-modeling',
    title: '基于对数几率广义线性混合模型与 GBDT 等渗校准的 NIPT 诊断与窗口优化研究',
    category: '统计推断与机器学习分类',
    contest: '2025年 西南交通大学数学建模竞赛',
    award: '校级三等奖',
    team: ['黄璨 (负责人)'],
    summary: '针对无创产前DNA测序（NIPT）在极早孕期诊断中面临的高假阴性错误，基于对数几率广义线性混合（Logit-LMM）开展多阶段风险评估，设计了包含“延迟治疗损耗+重复采集成本”构成的全局时间代价惩罚，求取个性化的最佳起检时间。',
    sections: [
      {
        title: '一、对数几率广义线性混合模型（Logit-LMM）建构',
        content: '男胎游离Y染色体片段极其精微，需做逻辑变换消除尺度非均匀干扰。设立非线性样条固定效应拟合孕周、季节变化因子，将每个人设定为多元自适应随机拦截变量，在 Wald 检验下发现孕周与母体 BMI 指标对测序达标率存在显著非线性效应。',
        formulas: [
          '\\log \\left( \\frac{p_{ij}}{1-p_{ij}} \\right) = \\beta_0 + \\mathbf{x}_{ij}^T \\beta + u_i',
          'u_i \\sim N(0, \\sigma_u^2), \\quad \\operatorname{Var}(Y_{ij} \\mid u_i) = p_{ij}(1-p_{ij})'
        ],
        metrics: [
          { label: '模型固定效应Wald p', value: '< 0.005' },
          { label: '母体特征拟合 AIC', value: '-1024.2' }
        ]
      },
      {
        title: '二、个性化检测时间窗口选择与风险成本评估',
        content: '本研究设计了包含延迟诊断损耗、重复采集成本与初期失败补偿在内的全局时间惩罚代价函数。通过自适应划分母体 BMI 区间，在确保测序成功率不低于90%的硬约束下，为孕妇提供高度个性化的最佳孕周采集推荐。',
        formulas: [
          'Cost(t) = C_{test} \\cdot (1 + (1 - p(t))) + C_{delay} \\cdot t \\cdot \\mathbb{I}(\\text{Failed})',
          't^* = \\arg\\min_t Cost(t)'
        ],
        metrics: [
          { label: '人均检测费用下降', value: '-18.5%' },
          { label: '二次重采率降幅', value: '-62.0%' }
        ]
      },
      {
        title: '三、基于 GBDT 与 Isotonic 等渗概率校准的遗传异常分类预测',
        content: '针对女胎缺少 Y 染色体浓度数据的问题，模型对 21、18、13 号普通染色体读段 Z 值变化规律开展集成建模。训练了梯度提升决策树（GBDT）和交叉逻辑回归模型，并引入 Isotonic 等渗非单调偏差校正，确保模型在医学漏诊风险控制上的高召回表现。',
        formulas: [
          'P_{calibrated}(x) = f(P_{raw}(x))',
          'f = \\arg\\min_f \\sum (y_i - f(p_i))^2, \\quad z = \\frac{x - \\mu}{\\sigma / \\sqrt{n}}'
        ],
        metrics: [
          { label: '异常分类 ROC AUC', value: '0.945' },
          { label: 'Brier 概率校准得分', value: '0.021' }
        ]
      }
    ],
    conclusions: [
      '应用科学数学算法判定不同 BMI 区间的最佳起检时段，消除了医疗一刀切带来的假阴性损害。',
      '女胎异常 Z 值分类的测试集泛化成绩优秀，整体 ROC AUC 成绩完全过关。'
    ],
    certificateId: 'swjtu-modeling-2025',
    realPdf: '/materials/2025校赛_C题_黄璨_刘紫博.pdf'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-ev-v2g',
    title: '考虑司机幸福效应的网约车接单与车网互动协同优化研究',
    award: '深度科研优化项目',
    instructor: '赵传档',
    role: '项目负责人（负责 MDP 建模、贝尔曼智能体算法实现、Gurobi 完美信息上界构建）',
    team: ['黄璨 (核心建模与算法实现)'],
    summary: '电动汽车作为移动储能资源，借助车网互动技术可在兼顾出行服务的前提下增加网约车司机收入，而如何在运营中协同调度接单与 V2G，以最大化司机收益与幸福感是其中关键的问题。研究基于成都某网约车平台 425 万条订单数据，筛选 29289 名活跃电动网约车司机并构造 330400 条司机日订单链，研究接单、充电、V2G 放电与休息之间的动态协同调度问题。构建司机 MDP 模型，将一天划分为 96 个 15 分钟决策时段，设计基于 Bellman 方程的在线智能体，并纳入 SOC 安全阈值、分时电价等约束。基于 2000 条训练链训练，并在 500 条测试链上验证，在线智能体较司机历史接单平均综合效用提升 4.30。进一步采用 Gurobi 求解 MILP 完美信息上界，500/500 个测试样本均达到最优，智能体与严格上界差距约 4.71%。',
    features: [
      { name: '日订单链构造与活跃分析', desc: '筛选出 29,289 名活跃电动网约车司机，构建 330,400 条日订单链，高精细度刻画司机行驶行为特征。' },
      { name: '司机 MDP 模型与决策划分', desc: '将一日分为 96 个 15 分钟时段，以智能体决策接单、充电、V2G 放电与休息的动态调度。' },
      { name: 'Bellman 在线智能体训练与验证', desc: '基于 2000 条链进行强化训练并在 500 条链上测试，效用提升达 4.30，且利用 Gurobi 求解完美信息上界，差距仅 4.71%。' }
    ],
    techStack: [
      'Python (Pandas, Numpy)',
      'Markov Decision Process (MDP)',
      'Monte Carlo Rollout / ADP',
      'Multi-Objective Optimization'
    ],
    metrics: [
      { label: '活跃司机样本数', value: '29,289 名', desc: '大样本量真实网约车数据验证' },
      { label: '构建日订单链数', value: '330,400 条', desc: '时空联合调度数据基础' },
      { label: '综合效用提升值', value: '4.30', desc: '显著优于司机历史行为表现' },
      { label: '完美信息上界差距', value: '4.71%', desc: '500个样本均达到Gurobi全局最优' }
    ]
  },
  {
    id: 'project-lowair',
    title: '城际低空出行一体化服务与 3D 可视化管理平台',
    award: '中国大学生计算机设计大赛国赛项目',
    instructor: '吕彪',
    role: '项目负责人（全流程负责前端三维场景搭建与核心功能集成，设计“灵格”体素检测方案）',
    team: ['黄璨 (负责人/双端系统设计与体素安全引擎)'],
    summary: '面向城市低空出行、文旅观光与应急巡检场景，基于 Cesium 构建香港维港核心区 3D 低空运行场景，实现机场、航线、空域、飞行计划、气象风险与飞行态势的一体化可视化管理。设计“灵格”三维体素检测方案，将航线走廊、禁飞区、建筑和气象风险统一转换为 3D 体素网格，实现建筑碰撞、禁飞穿越、航线重叠等 9 类安全风险校验，并在地图中高亮冲突区域。',
    features: [
      { name: '一体化三维场景构建', desc: '基于 Cesium 搭建香港维多利亚港核心区 3D 仿真低空场景，融合机场、空域及气象风险的可视化要素。' },
      { name: '全功能集成与前端搭建', desc: '全流程搭建航线绘制、飞行计划审批、态势监控及数据统计模块，支持 7 类业务功能及 1 秒级状态实时刷新。' },
      { name: '“灵格”体素检测方案', desc: '将空域廊道、建筑与气象威胁转换为 3D 体素网格，高效校验建筑碰撞、禁飞穿越等 9 类安全风险并高亮冲突区域。' }
    ],
    techStack: [
      'React',
      'TypeScript',
      'Cesium',
      'Node.js',
      'Express',
      'SQLite'
    ],
    metrics: [
      { label: '实时体素校验耗时', value: '< 15 ms', desc: '极速发现空中航线重叠与冲突' },
      { label: '安全风险校验类型', value: '9 类', desc: '包括建筑碰撞、禁飞穿越等校验' },
      { label: '业务功能支持数量', value: '7 类', desc: '包括飞行审批、态势监控等一体化管理' }
    ],
    liveUrl: 'http://39.104.59.217/',
    certificateId: 'computer-design-2025'
  },
  {
    id: 'project-3dbox',
    title: '多场景多目标约束下的货物运输三维装箱与车辆配置优化研究',
    award: 'MathorCup 国赛项目',
    instructor: '陈崇双',
    role: '项目负责人（负责设计构造型启发式算法，搭建 MILP 集合覆盖模型，完成双目标优化与敏感度实验）',
    team: ['黄璨 (三维切割启发式与MILP模型搭建)'],
    summary: '物流运输中，需兼顾车厢空间利用率、载重利用率、车辆数与运输成本，同时满足易碎件、定向件、承重等复杂约束，是典型的组合优化难题。本研究针对货物尺寸、重量、可堆叠性、方向约束及车辆容积、载重等复杂约束，建立混合整数线性规划 (MILP) 模型。采用基于剩余可用空间与支撑面动态更新的构造型启发式算法生成可行装载方案，并通过整数规划中的集合覆盖模型求解单车型最少车辆数，进一步构建多车型联合运输下的“车辆数最少”与“运输成本最低”双目标分层优化模型。',
    features: [
      { name: '双层优化体系构建', desc: '下层单车设计支撑面动态更新的构造启发式算法，上层基于集合覆盖模型（Set Covering）构建多车型双目标分层规划。' },
      { name: '极强约束条件嵌入', desc: '支持长宽高三维旋转约束、易碎品防压及承重平衡，确保货物完全不重叠且重心投影于支撑多边形内。' },
      { name: '高效寻优与敏感度实验', desc: '使用 Gurobi 求解器在毫秒级解算出车型拼车方案，并开展对装载密度与成本系数的鲁棒敏感度校验。' }
    ],
    techStack: [
      'MATLAB / Python Pyomo',
      'MILP (Set Covering Model)',
      'Heuristic Space Split',
      'Gurobi Solver'
    ],
    metrics: [
      { label: '车型1空间装载率', value: '83.24%', desc: '突破极强支撑力学约束下的高几何满载' },
      { label: '车型2空间装载率', value: '87.22%', desc: '车辆空间容量最大利用' },
      { label: '多机多车冲突解算', value: '< 20 ms', desc: '决策响应速度处于极优水平' }
    ]
  },
  {
    id: 'project-fatigue',
    title: '基于生理信号的城际铁路司机疲劳检测及恢复策略研究',
    award: '重点实验室课题项目',
    instructor: '蒋朝哲',
    role: '负责人',
    team: ['黄璨 (信号处理、数据集建立及网络搭建)'],
    summary: '本研究依托轨道交通全国重点实验室模拟驾驶平台，设计多因素模拟驾驶实验，同步采集被试者的皮肤电活动 (EDA)、血容量脉冲 (BVP) 数据，并依据 NASA-TLX 主观评分构建低、中、高三类认知负荷标签及 2508 个有效样本。搭建双分支一维卷积神经网络 (1D-CNN) 融合模型：实现认知负荷等级分类预测。',
    features: [
      { name: '轨道交通全国重点实验室模拟平台', desc: '高精度拟真驾驶环境设计，模拟多因素工况下司机的真实生理波动与应激反应。' },
      { name: '多元生理信号深度预处理', desc: '采用皮肤电活动 (EDA) 及血容量脉冲 (BVP) 的去噪与时域滤波，提取核心特征表征。' },
      { name: '双分支一维 CNN 神经融合架构', desc: '搭建 1D-CNN 分支各自接收一维生理时间序列，通过全连接网络注意力层进行高阶特征拼接与分类。' }
    ],
    techStack: [
      'PyTorch / Python',
      '1D-CNN Neural Network',
      'NASA-TLX Scale Analysis',
      'EDA & BVP Filter preprocessing'
    ],
    metrics: [
      { label: '有效生理样本数', value: '2508 个', desc: '高纯度、带高精度负荷标签样本' },
      { label: '负荷等级识别准确度', value: '91.8%', desc: '三分类水平下的表现指标' },
      { label: '信号降噪率', value: '98.5%', desc: '大幅滤除高频肢体抖动干扰信号' }
    ]
  },
  {
    id: 'project-uav',
    title: '基于轻量化语义分割的无人机交通拥堵巡检系统',
    award: '自主研究与端侧部署项目',
    instructor: '朱曼曼',
    role: '负责人',
    team: ['黄璨 (分组注意力算子开发、数据标注与训练)'],
    summary: '传统道路巡检方式效率低、成本高，而通用语义分割模型参数量大、推理速度慢，难以在无人机载计算单元上实时运行。本研究提出一套轻量、高精度的无人机交通巡检语义分割方案。以 SegFormer-B0 为基线模型，引入分组注意力机制替代原有自注意力结构：将输入特征图分组后分别在组内计算注意力，显著降低模型参数量与计算复杂度，适配边缘计算环境。并搭建拥堵道路数据集，弥补数据集空白。',
    features: [
      { name: 'SegFormer-B0 边缘化基线剪枝', desc: '设计轻量级密集语义提取骨干，大幅减少网络深度，保障端侧流畅性。' },
      { name: '首创分组注意力算子机制', desc: '开发全新注意力算子：将大尺寸特征图划分为空间组分别处理自注意力，将参数量大幅压缩并维持原语义精度。' },
      { name: '端侧边缘硬件实际部署', desc: '应用 TensorRT 格式加速，将网络成功写入无人机机载微型处理器中，实现毫秒级拥堵巡检响应。' }
    ],
    techStack: [
      'PyTorch / TensorRT',
      'SegFormer / Transformer',
      'Grouped Attention Mechanism',
      'Nvidia Jetson Edge deployment'
    ],
    metrics: [
      { label: '边缘端推理帧率', value: '45 FPS', desc: '完全满足无人机在线巡视流速要求' },
      { label: '参数量压缩比例', value: '减少 64%', desc: '大幅降低了对嵌入式运存的压榨' },
      { label: '交通要素分割 mIoU', value: '78.5%', desc: '在高反差、移动光照场景下的优越表现' }
    ]
  }
];

// Experience data strictly matching student leadership & practical credentials
export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-ai-club',
    type: 'leadership',
    title: '西南交通大学图书馆图影 AI 创客社社长履历',
    unit: '西南交通大学图书馆图影 AI 创客社',
    duration: '2026.03 - 至今',
    role: '社长',
    summary: '利用 AI 技术进行视觉生成与创作，配合图书馆开展阅读推广、在学校举办的 AI 制作大赛中获一等奖。',
    points: [
      '负责图影 AI 创客社的日常管理与建设，推动 AI 视觉及图像生成技术在校园内的普及与实践。',
      '与图书馆紧密合作开展各类阅读推广活动，组织多场 AI 艺术创意及讲座。',
      '在学校举办的 AI 制作大赛中主导视觉作品设计，斩获一等奖。'
    ]
  },
  {
    id: 'exp-park-leader',
    type: 'leadership',
    title: '交通运输与物流学院园区管理中心干部履历',
    unit: '交通运输与物流学院园区管理中心',
    duration: '2024.09 - 至今',
    role: '副主席 / 宣传部部长',
    summary: '负责宿舍园区的日常管理与宣传工作，统筹策划并举办相关学生活动，获“优秀学生干部”表彰。',
    points: [
      '统筹宿舍园区的常态化管理与秩序维护，协调部门成功推进寝室文化节等特色项目。',
      '主管中心对外宣传工作，设计并发布多篇优质视觉设计与图文推送。',
      '多次荣获校级/院级“优秀学生干部”等荣誉表彰，工作成果获得师生一致好评。'
    ]
  }
];
