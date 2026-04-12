export type Language = "en" | "zh";

const en = {
  company: {
    name: "Morra Mining SpA",
    shortName: "MORRA",
    tagline: "Securing Metal Supply Through Real Operations",
  },
  nav: {
    about: "About",
    operations: "Operations",
    contact: "Contact",
  },
  hero: {
    headline:
      "We help you secure your supply of copper and gold from the southern cone of South America.",
    subheadline:
      "Reliable sourcing through integrated mining operations, strategic partnerships, and on-the-ground execution across Chile and Argentina.",
    highlights: [
      "Detailed local knowledge, including mineral resources, relationships with government authorities and communities, and small-scale local copper and gold producers.",
      "Extensive trading network including traders, refineries, and mining companies in Europe and Asia.",
    ],
    supporting: "Production. Trading. Project Development.",
    cta: {
      primary: "Contact Us",
      secondary: "Our Operations",
    },
  },
  about: {
    title: "Who We Are",
    paragraphs: [
      "We are a Chilean mining company focused on the development and operation of small to mid-scale mining projects, primarily in copper and gold.",
      "Our business model integrates own production, third-party sourcing, and project development, allowing us to provide consistent and flexible supply solutions to international traders, smelters, and refineries.",
      "We operate with a strong presence in the Southern Cone of Latin America, combining technical expertise with execution capabilities in complex operating environments.",
    ],
  },
  whatWeDo: {
    title: "What We Do",
    services: [
      {
        label: "Mining Operations",
        description:
          "We develop and operate mining assets in Chile and Argentina, focusing on small, efficient, scalable, low-investment, and rapidly deployable mining projects.",
      },
      {
        label: "Marketing and Supply",
        description:
          "We source mineral products, such as gold, copper, and silver concentrates, high-gold sands, high-copper sands, and precious metals, from a network of small and medium-sized producers. We upgrade and refine the material when necessary and supply it to international clients.",
      },
      {
        label: "Project Development",
        description:
          "We identify, evaluate, and launch small, low-investment, and rapidly deployable mining projects, primarily in previously mined deposits or deposits with a promising history.",
      },
    ],
  },
  operations: {
    title: "Our Operations",
    chile: {
      country: "Chile",
      flag: "\u{1F1E8}\u{1F1F1}",
      name: "La Isla Copper Project",
      region: "El Melón, Valparaíso Region",
      status: "Under Development",
      details: [
        "High-potential mining deposit with copper sulfide ore and some silver",
        "Copper concentrate production (under development)",
        "Mineral processing at a supplier's plant, on a contract basis",
        "Expected production: ~50 tons/month of copper concentrate",
      ],
      output: "~50 tons/month",
      outputNumber: 50,
      mineral: "Copper",
    },
    argentina: {
      country: "Argentina",
      flag: "\u{1F1E6}\u{1F1F7}",
      name: "San Juan Gold Operation",
      region: "San Juan Province",
      status: "Operating",
      details: [
        "The Luis Primera a la Quita mine is a deposit containing 25,000 ounces of gold, based on quartz",
        "Active extraction and recovery operation",
        "Pilot mineral processing plant, located in the La Chimba Industrial Park, San Juan, Argentina",
        "Gold concentrate production",
        "Current production: ~30 tons/month of gold concentrate",
      ],
      output: "~30 tons/month",
      outputNumber: 30,
      mineral: "Gold",
    },
  },
  valueProposition: {
    title: "Our Value Proposition",
    statement:
      "We offer a reliable and scalable metal supply through a combination of:",
    items: [
      "Our own mining production",
      "A consolidated supplier network",
      "Local knowledge of mining projects, government authorities, and communities",
      "A team of outstanding professionals",
      "On-site operational capabilities to bring low-investment, rapidly implemented mining projects into operation, focusing on copper and gold",
      "Streamlined commercial structures with traders, refineries, and mining companies in Asia, the Middle East, and Europe",
    ],
    closing:
      "Our approach allows us to reduce supply risk and ensure continuity of supply for our partners.",
  },
  businessModel: {
    title: "How We Work",
    statement: "We engage with our partners through:",
    items: [
      "Offtake agreements",
      "Long-term supply contracts",
      "Strategic partnerships",
      "Joint ventures",
      "Project development mandates",
    ],
    closing:
      "We align incentives with our clients to ensure long-term, stable supply relationships.",
  },
  markets: {
    title: "Markets We Serve",
    statement: "We supply mineral products and refined materials to:",
    regions: ["Asia", "Europe", "Middle East", "Latin America"],
    closing:
      "Our clients include commodity traders, smelters, refining companies and mining companies seeking to diversify and secure their sourcing.",
  },
  advisory: {
    title: "Advisory & Project Support",
    description:
      "We support mining companies, traders, and industrial groups in:",
    services: [
      "Evaluating mining opportunities",
      "Securing supply sources",
      "Developing projects from early stage to operation",
    ],
    closing:
      "Our strength lies in combining technical mining expertise with local knowledge in terms of projects, management of legislation, knowledge of communities, and commercial execution.",
  },
  strategicPositioning: {
    headline: "Secure Your Supply with a Reliable Partner",
    text: "From mine to market, we deliver operational execution and dependable supply solutions across the Southern Cone.",
  },
  contact: {
    title: "Contact Us",
    description:
      "For supply inquiries, partnerships, or project opportunities, please contact us:",
    email: "info@morramining.cl",
    address:
      "Alonso de Cordoba 5151, office 402. Las Condes. Santiago de Chile.",
    cta: "Let's Secure Your Supply",
  },
  footer: {
    rights: "All rights reserved.",
  },
  stats: {
    yearsActive: 5,
    monthlyCapacity: 80,
    marketsServed: 4,
    activeProjects: 2,
    yearsLabel: "Years Active",
    capacityLabel: "Tons / Month",
    marketsLabel: "Markets Served",
    projectsLabel: "Active Projects",
  },
};

const zh: typeof en = {
  company: {
    name: "Morra Mining SpA",
    shortName: "MORRA",
    tagline: "通过实际运营确保金属供应",
  },
  nav: {
    about: "关于我们",
    operations: "运营项目",
    contact: "联系方式",
  },
  hero: {
    headline: "我们助您确保来自南美南锥体地区的铜与黄金供应安全",
    subheadline:
      "通过一体化矿业运营、战略合作伙伴关系以及在智利与阿根廷的本地执行能力，提供可靠的资源供应。",
    highlights: [
      "深入的本地知识，包括矿产资源、与政府和社区的关系，以及小型铜金生产商。",
      "广泛的贸易网络，包括欧洲和亚洲的贸易商、冶炼厂和矿业公司。",
    ],
    supporting: "生产 · 贸易 · 项目开发",
    cta: {
      primary: "联系我们",
      secondary: "我们的业务",
    },
  },
  about: {
    title: "关于我们",
    paragraphs: [
      "我们是一家总部位于智利的矿业公司，专注于中小型矿业项目的开发与运营。",
      "我们的商业模式整合自有生产、第三方采购及项目开发能力，为国际贸易商、冶炼厂和精炼厂提供稳定灵活的供应方案。",
      "我们在拉丁美洲南锥体地区拥有强大的业务布局，将技术专长与复杂运营环境中的执行能力相结合。",
    ],
  },
  whatWeDo: {
    title: "我们的业务",
    services: [
      {
        label: "矿业运营",
        description:
          "我们在智利和阿根廷开发和运营矿业资产，专注于小型、高效、可扩展、低投资、快速部署的矿业项目。",
      },
      {
        label: "市场与供应",
        description:
          "我们从中小型生产商网络中采购金、铜、银精矿、高品位金砂、高品位铜砂和贵金属等矿产品，并在必要时进行加工精炼，供应国际客户。",
      },
      {
        label: "项目开发",
        description:
          "我们识别、评估并启动小型、低投资、快速部署的矿业项目，主要针对已开采过的矿床或具有良好前景的矿床。",
      },
    ],
  },
  operations: {
    title: "我们的运营",
    chile: {
      country: "智利",
      flag: "\u{1F1E8}\u{1F1F1}",
      name: "La Isla 铜矿项目",
      region: "瓦尔帕莱索大区，埃尔梅隆",
      status: "开发中",
      details: [
        "高潜力铜硫化矿床，含少量银",
        "铜精矿生产（开发中）",
        "委托第三方工厂进行矿物加工",
        "预计产量：约50吨/月铜精矿",
      ],
      output: "约50吨/月",
      outputNumber: 50,
      mineral: "铜",
    },
    argentina: {
      country: "阿根廷",
      flag: "\u{1F1E6}\u{1F1F7}",
      name: "San Juan 黄金项目",
      region: "圣胡安省",
      status: "运营中",
      details: [
        "Luis Primera a la Quita矿山，含25,000盎司黄金，以石英为基底",
        "活跃的采掘和回收作业",
        "试验性选矿厂，位于阿根廷圣胡安La Chimba工业园区",
        "黄金精矿生产",
        "当前产量：约30吨/月黄金精矿",
      ],
      output: "约30吨/月",
      outputNumber: 30,
      mineral: "金",
    },
  },
  valueProposition: {
    title: "我们的价值主张",
    statement: "我们通过以下方式提供可靠且可扩展的金属供应：",
    items: [
      "自有矿业生产",
      "成熟的供应商网络",
      "对矿业项目、政府机构和社区的深入了解",
      "杰出的专业团队",
      "现场运营能力，专注于铜金领域的低投资快速部署项目",
      "与亚洲、中东和欧洲贸易商、冶炼厂和矿业公司的精简商业结构",
    ],
    closing: "我们的方式降低供应风险，确保合作伙伴的供应连续性。",
  },
  businessModel: {
    title: "合作方式",
    statement: "我们通过以下方式与合作伙伴开展合作：",
    items: ["包销协议", "长期供应合同", "战略合作", "合资经营", "项目开发委托"],
    closing: "我们与客户利益一致，确保长期稳定的供应关系。",
  },
  markets: {
    title: "服务市场",
    statement: "我们向以下地区供应矿产品和精炼材料：",
    regions: ["亚洲", "欧洲", "中东", "拉丁美洲"],
    closing:
      "我们的客户包括寻求多元化和安全采购的商品贸易商、冶炼厂、精炼公司和矿业公司。",
  },
  advisory: {
    title: "咨询与项目支持",
    description: "我们为矿业公司、贸易商和工业集团提供以下支持：",
    services: ["投资评估", "资源供应", "从早期到运营的项目开发"],
    closing:
      "我们的优势在于将矿业技术专长与项目管理、法规管理、社区关系和商业执行方面的本地知识相结合。",
  },
  strategicPositioning: {
    headline: "确保您的供应安全，携手可靠伙伴",
    text: "从矿山到市场，我们在南锥体地区提供运营执行和可靠的供应方案。",
  },
  contact: {
    title: "联系我们",
    description: "如有供应咨询、合作或项目机会，请联系我们：",
    email: "info@morramining.cl",
    address: "Alonso de Cordoba 5151, office 402. Las Condes. 智利圣地亚哥",
    cta: "确保您的供应安全",
  },
  footer: {
    rights: "版权所有。",
  },
  stats: {
    yearsActive: 5,
    monthlyCapacity: 80,
    marketsServed: 4,
    activeProjects: 2,
    yearsLabel: "年运营",
    capacityLabel: "吨/月",
    marketsLabel: "服务市场",
    projectsLabel: "活跃项目",
  },
};

export const translations = { en, zh } as const;

export type Content = typeof en;
