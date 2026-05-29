export type DetailPart = string | { text: string; highlight: true };
export type Detail = DetailPart[];
export type IntroPart = string | { text: string; href: string };
export type IntroParagraph = IntroPart[];

export interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  details: Detail[];
}

export interface Project {
  title: string;
  href: string;
  date: string;
  summary: string;
  details: Detail[];
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  honours: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    company: "Workday",
    logo: "/workday.png",
    role: "Software Engineer",
    period: "2025 - Present",
    details: [
      ["Architected a high-performance ", { text: ".NET and Java/Log4j redaction framework", highlight: true }, " that removes sensitive customer data from logs and obfuscates exception stack traces across ", { text: "10 microservices", highlight: true }, " with minimal performance impact."],
      ["Coordinated rollout and testing with service owners, contributing to Adaptive Planning's ", { text: "FedRAMP audit preparation", highlight: true }, " for federal approval."],
      ["Built a ", { text: "secure Java lookup API", highlight: true }, ", integrated with the .NET lookup tool UI, letting support teams map internal IDs to sensitive data and run reverse lookups through ", { text: "controlled access paths", highlight: true }, "."],
      ["Developed an ", { text: "AI-powered living documentation and Q&A system", highlight: true }, " that summarises code from AST leaf nodes upward, keeping docs synchronised and answering developer queries."]
    ]
  },
  {
    company: "Workday",
    logo: "/workday.png",
    role: "Software Engineer Intern",
    period: "2024 - 2024",
    details: [
      ["Engineered ", { text: "4 Java/Spring Boot APIs", highlight: true }, " for database bootstrapping and multi-tenant initialisation, supporting ", { text: "Adaptive Planning's migration", highlight: true }, " to Workday's unified cloud platform."],
      ["Implemented transactional rollback, SQL fixes for import defects, and a ", { text: "database-simulating test framework", highlight: true }, " achieving ", { text: "92% line coverage", highlight: true }, ", improving tenant migration reliability."]
    ]
  },
  {
    company: "ChannelSight",
    logo: "/channelsight.png",
    role: "Software Engineer Intern",
    period: "2023 - 2023",
    details: [
      ["Developed ", { text: "web crawlers", highlight: true }, " for ecommerce product and review data, analyzing ", { text: "DOM structures and network traffic", highlight: true }, " to create resilient selectors and extraction logic."],
      ["Implemented ", { text: "proxy rotation, custom request headers, and rate limiting", highlight: true }, " to reduce scraper failures from layout changes and ", { text: "bot-detection mechanisms", highlight: true }, "."]
    ]
  },
  {
    company: "Trinity College Dublin",
    logo: "/trinity-college-dublin.jpg",
    role: "Class Representative",
    period: "2022 - 2023",
    details: [
      ["Elected as ", { text: "class representative", highlight: true }, " for around ", { text: "60 Integrated Computer Science students", highlight: true }, ", acting as a liaison between students and faculty to address concerns and improve the ", { text: "academic experience", highlight: true }, "."]
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AutoSubs",
    href: "https://github.com/tmoroney/auto-subs",
    date: "Nov. 2023 - Present",
    summary: "Open-source, cross-platform desktop app for video creators to generate, translate, label speakers with unique per-speaker styling, and place subtitles directly into video editor timelines. Built with React/TypeScript, Rust, WebView, LuaJIT, and custom Adobe extensions.",
    details: [
      ["Built and maintained over 2+ years with ", { text: "3.5K+ stars and 400K+ downloads", highlight: true }, ", using a Rust backend to stay under 200MB idle alongside video editors."],
      ["Developed editor integrations for DaVinci Resolve via an embedded ", { text: "LuaJIT HTTP bridge", highlight: true }, " and Adobe apps via custom extensions for timeline audio extraction and subtitle placement."],
      ["Implemented audio preprocessing and on-device model management, automatic language-based model selection, translation, and a formatting engine optimized for ", { text: "CJK, Korean, RTL, Indic, and SE Asian", highlight: true }, " line-breaking and timing constraints."]
    ],
    tags: ["Rust", "TypeScript", "React", "Lua", "3.5K+ stars", "400K+ downloads"]
  },
  {
    title: "Beyond Automation: AI Framework for Intelligent Cinematographic Editing",
    href: "https://drive.google.com/file/d/1zNl1KtIq2jHFq87_K8YLuDgQVhoTLSwD/view?usp=sharing",
    date: "Sep. 2024 - Apr. 2025",
    summary: "Multimodal video-editing framework that reached 72.5% shot attribute classification accuracy, fusing visual composition, optical flow, audio-temporal patterns, and narrative reasoning for next-shot recommendations.",
    details: [
      ["Achieved ", { text: "72.5% accuracy", highlight: true }, " in shot attribute classification, a 16 percentage point improvement over the Anatomy of Video Editing benchmark."],
      ["Developed a ", { text: "multimodal pipeline optimized for Apple's MLX framework", highlight: true }, ", enabling real-time, on-device inference by fusing visual composition, optical flow, and audio-temporal patterns."],
      ["Implemented a narrative reasoning engine for next-shot recommendations using ", { text: "VLMs and LLMs", highlight: true }, " to bridge technical pattern recognition and semantic story comprehension."]
    ],
    tags: ["PyTorch", "MLX", "VLMs", "LLMs", "Video AI"]
  }
];

export const education: Education[] = [
  {
    school: "Trinity College Dublin",
    degree: "Masters in Computer Science (M.C.S.)",
    honours: "First Class Honours",
    period: "2024 – 2025"
  },
  {
    school: "Trinity College Dublin",
    degree: "B.A. (Moderatorship) in Computer Science",
    honours: "First Class Honours",
    period: "2020 – 2024"
  }
];

export const profile = {
  name: "Tom Moroney",
  title: "Software Engineer at Workday",
  email: "tom.moroney.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/tom-moroney1/",
  github: "https://github.com/tmoroney",
  location: "Dublin",
  description: "Software engineer from Dublin working on backend security, developer tooling, AI-assisted documentation, and creator-focused video tools. Currently at Workday.",
  intro: [
    [
      "I'm a software engineer from Dublin, currently working full-time at ",
      { text: "Workday", href: "https://www.workday.com/" },
      " on backend security and developer tooling for enterprise systems, including sensitive-data redaction, controlled access workflows, and AI-assisted documentation."
    ],
    [
      "Outside of work, I build ",
      { text: "AutoSubs", href: "https://github.com/tmoroney/auto-subs" },
      ", an open-source, cross-platform desktop app helping hundreds of thousands of creators automatically generate subtitles for their videos in any language, saving them time while making their videos more engaging and accessible to global audiences. I'm also developing ",
      { text: "SubSlate", href: "https://subslate.app/" },
      ", a new kind of video editor."
    ],
    [
      "If you wish to get in contact, drop me an email at ",
      { text: "tom.moroney.dev@gmail.com", href: "mailto:tom.moroney.dev@gmail.com" },
      "."
    ]
  ] satisfies IntroParagraph[]
};
