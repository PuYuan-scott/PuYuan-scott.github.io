import type { InsightArticle } from "@/lib/insights";

export const usLateCycleSlowdownInsight: InsightArticle = {
  slug: "us-economy-late-cycle-slowdown-august-2026",
  title: "The U.S. Economy Has Entered a Late-Cycle Slowdown",
  topic: "U.S. Economy",
  published: "2026-08-07",
  displayDate: "August 7, 2026",
  readingTime: 6,
  language: "zh-CN",
  fullReport: "/reports/us_late_cycle_slowdown_august_2026.pdf",
  abstract:
    "The U.S. economy is still expanding, but the July employment report materially narrowed the margin of safety around the soft-landing outlook.",
  content: [
    {
      type: "heading",
      text: "核心结论",
    },
    {
      type: "paragraph",
      text: "我目前会把美国经济从 late-cycle soft landing 进一步调整为 late-cycle slowdown：经济正在向“低增长 + 高通胀”的区域移动，但还没有进入 recession。",
    },
    {
      type: "paragraph",
      text: "经济本身没有衰退，但就业已经出现非常明显的失速信号。硬着陆风险因此明显上升，不过私人需求、制造业、生产率和信用市场仍不足以支持立即判定衰退。",
    },
    {
      type: "framework",
      items: [
        "GDP、消费、AI CapEx 和制造业仍有韧性",
        "就业增长突然明显变弱",
        "Core inflation 仍高于 3%，限制了 Fed 快速降息的空间",
      ],
    },
    {
      type: "heading",
      text: "就业报告改变了什么",
    },
    {
      type: "table",
      headers: ["就业指标", "最新", "判断"],
      rows: [
        ["Nonfarm Payroll", "-23K", "很弱"],
        ["市场预期", "约 +80K", "大幅 Miss"],
        ["May + June revisions", "-103K", "明显下修"],
        ["3M average payroll", "约 +20K/月", "接近失速"],
        ["Unemployment", "4.2% → 4.1%", "表面改善"],
        ["Participation Rate", "61.4%", "继续下降"],
        ["Average Hourly Earnings YoY", "+3.2%", "工资压力缓和"],
      ],
    },
    {
      type: "paragraph",
      text: "修订后的 May、June、July payroll 分别为 +63K、+20K 和 -23K，三个月平均仅约 +20K。按照原有判断区间，就业已经从“降温”进入“开始恶化”。",
    },
    {
      type: "paragraph",
      text: "失业率下降也不能简单视为好消息。大约 26.4 万人离开劳动力市场，劳动参与率降至 61.4%；失业率改善在相当程度上来自劳动力退出，而不是就业增加。",
    },
    {
      type: "heading",
      text: "为什么还不是 Recession",
    },
    {
      type: "list",
      items: [
        "JOLTS 显示企业减少招聘，但 layoffs 和 layoff rate 尚未进入大规模裁员状态。",
        "Q2 real GDP 增长 1.5%，但 real final sales to private domestic purchasers 增长 3.9%，私人需求仍然强。",
        "Manufacturing PMI 为 55.6，Services PMI 为 54.1，产出和新订单仍处于扩张区间。",
        "High-yield credit spread 仍在约 280–300 bps，信用市场没有交易系统性衰退。",
      ],
    },
    {
      type: "quote",
      text: "现在更像 Low Hire，但还没有进入 High Fire。真正的衰退确认需要 layoffs、unemployment、income、consumption 和 credit spreads 同时恶化。",
    },
    {
      type: "heading",
      text: "经济的核心矛盾",
    },
    {
      type: "paragraph",
      text: "公司业务活动没有明显下降，但公司越来越不愿意增加员工。Q2 productivity 同比增长 2.2%，unit labor cost 同比仅增长约 1.4%，企业可以在不增加很多员工的情况下继续提高产出。",
    },
    {
      type: "paragraph",
      text: "因此，就业弱化速度目前快于企业基本面弱化速度。但 Core PCE 仍为 3.3%，Fed 无法像正常衰退前那样迅速降息。这种“就业越来越弱、通胀下降不够快”的组合是当前最大的宏观风险。",
    },
    {
      type: "heading",
      text: "十维度经济状态",
    },
    {
      type: "table",
      headers: ["维度", "当前", "信号"],
      rows: [
        ["Growth", "GDP +1.5%，private demand +3.9%", "低速但仍增长"],
        ["Employment / Income", "NFP -23K，3M avg +20K", "明显恶化"],
        ["Inflation", "Core PCE 3.3%", "仍然偏高"],
        ["Consumer", "Real spending 强，saving rate 2.7%", "有韧性但脆弱"],
        ["Corporate / Productivity", "Productivity +2.2% YoY", "强"],
        ["Manufacturing", "ISM 55.6", "扩张"],
        ["Services", "PMI 54.1，employment 47.4", "产出强、就业弱"],
        ["Housing", "Sales 弱，9.3 个月库存", "明显偏弱"],
        ["Financial Conditions", "Fed 3.50–3.75%", "限制性"],
        ["Credit", "HY spread 约 300 bps", "暂无系统压力"],
      ],
    },
    {
      type: "heading",
      text: "周期定位与 6–12 个月情景",
    },
    {
      type: "quote",
      text: "A productivity-led late-cycle expansion with a rapidly weakening labor market and persistent inflation.",
    },
    {
      type: "paragraph",
      text: "我把当前周期定位为 late-cycle slowdown。它距离 recession 更近了一步，但还没有跨过去；也可以称为 slowflation risk，而不是已经进入标准 stagflation。",
    },
    {
      type: "table",
      headers: ["未来 6–12 个月", "概率"],
      rows: [
        ["低增长 Soft Landing", "45%"],
        ["Sticky Inflation / No Landing", "25%"],
        ["Hard Landing / Recession", "25%"],
        ["Credit Crisis", "5%"],
      ],
    },
    {
      type: "paragraph",
      text: "与之前相比，Hard Landing 概率从 15% 提高到 25%，No Landing 从 35% 降至 25%。劳动市场并没有此前认为的那么强，但 Soft Landing 仍然是 base case。",
    },
    {
      type: "heading",
      text: "接下来最重要的四个指标",
    },
    {
      type: "list",
      items: [
        "CPI / Core CPI：Employment 下降同时 CPI 下降，有利于 Soft Landing；Employment 下降同时 CPI 上升，则 stagflation risk 增加。",
        "Initial Claims / Continuing Claims：确认企业是否从 Low Hire 转向 High Fire。",
        "August Payroll / Unemployment：如果下个月 payroll 再次为零或负数，recession probability 需要进一步提高。",
        "HY OAS：如果就业恶化同时信用利差从约 300 bps 升向 400–450 bps，就不再只是就业统计噪音。",
      ],
    },
    {
      type: "heading",
      text: "Final Assessment",
    },
    {
      type: "paragraph",
      text: "Growth 仍在继续，employment 明显恶化，inflation 仍然偏高，financial conditions 保持限制性，而 credit 暂无压力。最终结论不是 recession，而是 late-cycle slowdown。",
    },
    {
      type: "quote",
      text: "Soft Landing 仍是 base case，但安全边际已经明显下降。风险正在从“经济太强、通胀太高、Fed 继续加息”转向“就业越来越弱，但通胀又没有足够快地下去”。",
    },
    {
      type: "sources",
      items: [
        {
          label: "BLS Employment Situation",
          url: "https://www.bls.gov/news.release/empsit.nr0.htm",
        },
        {
          label: "BLS JOLTS",
          url: "https://www.bls.gov/news.release/jolts.nr0.htm",
        },
        {
          label: "BEA GDP, Second Quarter 2026",
          url: "https://www.bea.gov/news/2026/gdp-advance-estimate-2nd-quarter-2026",
        },
        {
          label: "BLS Productivity and Costs",
          url: "https://www.bls.gov/news.release/prod2.nr0.htm",
        },
        {
          label: "BEA Personal Income and Outlays",
          url: "https://www.bea.gov/news/2026/personal-income-and-outlays-june-2026",
        },
        {
          label: "Federal Reserve FOMC Statement",
          url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm",
        },
        {
          label: "FRED High Yield Option-Adjusted Spread",
          url: "https://fred.stlouisfed.org/data/BAMLH0A2HYB",
        },
      ],
    },
  ],
};
