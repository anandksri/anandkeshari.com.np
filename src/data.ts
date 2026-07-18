// Structured profile data for Anand Keshari & TC Pioneer (TCP)

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'cyber' | 'iot' | 'lab';
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
  icon: string; // Will match Lucide icon names
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Workshop {
  title: string;
  audience: string;
  topics: string[];
  date: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export const PERSONAL_INFO = {
  name: "Anand0x01",
  tagline: "Founder of TC Pioneer",
  shortIntro: "Securing the digital frontier and making cybersecurity education accessible.",
  bio: "I'm a cybersecurity researcher and web developer. I build secure full-stack applications, engineer IoT systems, and create practical technical resources for learners in Nepal.",
  location: "Kathmandu, Nepal",
  email: "anandkeshari0711@gmail.com",
  availability: "Available for Consulting & Development",
  socials: {
    github: "https://github.com/anandksri",
    linkedin: "https://www.linkedin.com/in/anand-keshari-505685316/",
    instagram: "https://www.instagram.com/anand0x01/",
    facebook: "https://www.facebook.com/baliram.keshari.315",
  },
  typingTexts: [
    "Cybersecurity Enthusiast",
    "Web Developer",
    "IoT Innovator",
    "Community Builder",
    "Technical Writer",
    "Linux Enthusiast"
  ],
  stats: [
    { label: "Years of Active Learning", value: "5+" },
    { label: "Completed Projects", value: "25+" },
    { label: "Communities Built", value: "2+" },
    { label: "Workshops Conducted", value: "15+" },
    { label: "Students Reached", value: "1200+" },
    { label: "GitHub Repositories", value: "40+" }
  ]
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 - 2026",
    title: "HIGH SCHOOL",
    subtitle: "Himalayan Pyramid School/College, Birgunj",
    description: "In high school, I organized workshops on online safety and ethical hacking, while also taking leadership roles in tech-related activities.",
    icon: "GraduationCap"
  },
  {
    year: "2023 - Present",
    title: "Founder & Lead Organizer",
    subtitle: "TC Pioneer (TCP)",
    description: "Built tcpioneer.org, a community hub for cyber education. Crafted complete blogs, cybersecurity roadmaps, learning guides, and tools. Developed learn.tcpioneer.org serving modular docs on Linux, Git, and networking.",
    icon: "Shield"
  },
  {
    year: "2024",
    title: "Cyber Security Workshop Speaker",
    subtitle: "Educational Institutions & Colleges",
    description: "Organized awareness programs in schools and colleges across Nepal on Ethical Hacking, Cyber Hygiene, and Digital Safety. Partnered with Tech Aware Nepal and Y3ti@Sec.",
    icon: "Users"
  },
  {
    year: "2023",
    title: "IoT & Web Developer",
    subtitle: "Hardware & Smart Systems",
    description: "Engineered self-hosted nodes, Raspberry Pi monitoring systems, and local Esp32 security gadgets. Created interactive portfolios and customized static portals.",
    icon: "Cpu"
  },
  {
    year: "2022",
    title: "Open Source Contributor & Technical Writer",
    subtitle: "Community Collaboration",
    description: "Wrote extensive blogs and step-by-step guides on Linux setup, Docker environments, and networking fundamentals to lower entry barriers.",
    icon: "BookOpen"
  },
  {
    year: "2011 - 2023",
    title: "SCHOOL",
    subtitle: "Little Flower Sec School, Birgunj-21",
    description: "In school, I developed basic websites using HTML, CSS, and JavaScript, which sparked my interest in web development.",
    icon: "BookOpen"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity",
    icon: "Shield",
    skills: [
      { name: "Ethical Hacking", level: 90 },
      { name: "Cyber Hygiene", level: 95 },
      { name: "Nmap & Wireshark", level: 85 },
      { name: "Burp Suite", level: 80 },
      { name: "Metasploit & Kali Linux", level: 85 },
      { name: "OWASP Top 10", level: 82 }
    ]
  },
  {
    title: "Web Development",
    icon: "Code",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "Node.js & Express", level: 85 },
      { name: "TypeScript / JS", level: 90 },
      { name: "TailwindCSS", level: 95 },
      { name: "MongoDB & MySQL", level: 82 },
      { name: "Prisma & NeonDB", level: 78 }
    ]
  },
  {
    title: "IoT & Hardware",
    icon: "Cpu",
    skills: [
      { name: "Raspberry Pi & Arduino", level: 85 },
      { name: "ESP32 & NodeMCU", level: 88 },
      { name: "RFID & WiFi Pen Testing", level: 80 },
      { name: "Hardware Prototyping", level: 75 },
      { name: "Embedded C / Python", level: 82 }
    ]
  },
  {
    title: "Linux & DevOps",
    icon: "Terminal",
    skills: [
      { name: "Kali / Debian / Ubuntu", level: 92 },
      { name: "Docker & Container Labs", level: 85 },
      { name: "Git & GitHub Actions", level: 90 },
      { name: "Self-Hosted Dashboards", level: 88 },
      { name: "Cloudflare & Vercel", level: 90 }
    ]
  },
  {
    title: "Professional Skills",
    icon: "BookOpen",
    skills: [
      { name: "Technical Writing", level: 92 },
      { name: "Community Mentoring", level: 95 },
      { name: "Workshop Speaking", level: 90 },
      { name: "Server Administration", level: 85 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "tcpioneer",
    title: "TCPioneer.org",
    description: "Official community hub. Delivers cybersecurity roadmaps, interactive tutorials, and guides for digital safety.",
    category: "web",
    tags: ["React", "TailwindCSS", "Next.js", "Cybersecurity"],
    github: "https://github.com/anandksri",
    demo: "https://tcpioneer.org",
    featured: true
  },
  {
    id: "learntcp",
    title: "Learn TCP Docs",
    description: "Lightweight markdown-driven documentation portal for Linux basics, Git, and networking principles.",
    category: "web",
    tags: ["Markdown", "Static Site", "Technical Writing"],
    github: "https://github.com/anandksri",
    demo: "https://learn.tcpioneer.org",
    featured: true
  },
  {
    id: "stay-safe",
    title: "StaySafe Online",
    description: "Digital hygiene checklist and interactive library to combat social engineering and online scams.",
    category: "cyber",
    tags: ["HTML5", "TailwindCSS", "Cyber Hygiene"],
    github: "https://github.com/anandksri",
    demo: "https://tcpioneer.org",
    featured: false
  },
  {
    id: "password-guardian",
    title: "Password Guardian",
    description: "Client-side strength analyzer featuring offline entropy calculations and privacy suggestions.",
    category: "cyber",
    tags: ["TypeScript", "Security Analyzer"],
    github: "https://github.com/anandksri",
    demo: "https://tcpioneer.org",
    featured: false
  },
  {
    id: "iot-gadget-esp32",
    title: "WiFi Deauther Node",
    description: "Hardware pen-testing node built on ESP32 demonstrating WiFi frame vulnerabilities for live labs.",
    category: "iot",
    tags: ["ESP32", "Arduino C++", "WiFi Audit"],
    github: "https://github.com/anandksri",
    featured: true
  },
  {
    id: "home-automation",
    title: "Secure Home Node",
    description: "Encrypted IoT system running on ESP32/Raspberry Pi with real-time sensor diagnostics.",
    category: "iot",
    tags: ["Raspberry Pi", "MicroPython", "WebSockets"],
    github: "https://github.com/anandksri",
    featured: false
  }
];

export const IOT_LAB_CARDS = [
  {
    title: "ESP32 & NodeMCU Labs",
    description: "Custom micro-controllers with wireless networking payloads for sensor telemetry.",
    icon: "Cpu"
  },
  {
    title: "Raspberry Pi Gateways",
    description: "Miniature servers configured as diagnostic routers and secure local staging nodes.",
    icon: "Network"
  },
  {
    title: "RFID & NFC Security",
    description: "Hardware setups showcasing cryptographic vulnerability patterns in lock cards.",
    icon: "Radio"
  },
  {
    title: "Hardware Pen Testing",
    description: "Firmware auditing and pin-out debugging of local hardware components.",
    icon: "Lock"
  },
  {
    title: "Smart Automation Nodes",
    description: "Responsive hardware circuits checking environmental and motion parameters.",
    icon: "Home"
  },
  {
    title: "WiFi Spectrum Diagnostic",
    description: "Analyzing 2.4GHz signals to secure wireless communication against interference.",
    icon: "Wifi"
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    title: "Cyber Security & Digital Hygiene",
    audience: "Local Schools & Youth Programs",
    topics: ["Social Engineering", "Phishing Mechanics", "Device Hardening"],
    date: "Regularly",
    location: "Kathmandu & Nepal Regions"
  },
  {
    title: "Introduction to Ethical Hacking",
    audience: "Engineering and CS Colleges",
    topics: ["Nmap Basics", "Kali Navigation", "OWASP Security Standards"],
    date: "Bi-Monthly",
    location: "CSIT Colleges & Technical Forums"
  },
  {
    title: "Linux Setup & Docker Guide",
    audience: "Development Enthusiasts",
    topics: ["Terminal Command Lines", "Docker Containers", "Self-hosting Foundations"],
    date: "Quarterly",
    location: "TCP Community Classrooms"
  }
];

export const RESUME_DATA = {
  education: [
    {
      degree: "Computer Science & Cybersecurity Focus",
      institution: "Kathmandu, Nepal",
      period: "Ongoing",
      bullets: ["Core focus on network forensics, secure development, and Linux systems.", "Mentored 1200+ students in defensive cybersecurity fundamentals."]
    }
  ],
  experience: [
    {
      role: "Founder & Lead Director",
      company: "TC Pioneer (TCP)",
      period: "2023 - Present",
      bullets: [
        "Built tcpioneer.org and learn.tcpioneer.org platforms.",
        "Delivered interactive security workshops for youth in schools and colleges.",
        "Collaborated with Nepalese cybersecurity research groups."
      ]
    },
    {
      role: "Full-Stack & IoT Developer",
      company: "Independent Practitioner",
      period: "2022 - Present",
      bullets: [
        "Crafted robust responsive web apps and customized static portals.",
        "Programmed local smart devices using ESP32 microcontroller chips."
      ]
    }
  ],
  certifications: [
    {
      name: "Cybersecurity Hygiene Trainer",
      issuer: "TC Pioneer",
      date: "2023"
    },
    {
      name: "Advanced Web Technologies Specialist",
      issuer: "Self-Paced Specialization",
      date: "2023"
    },
    {
      name: "Linux Systems Administration",
      issuer: "Open Source Guides",
      date: "2022"
    }
  ],
  achievements: [
    "Launched TCPioneer.org, reaching 1200+ students with free cyber roadmaps.",
    "Hosted 15+ community bootcamps on digital hygiene.",
    "Built custom wireless WiFi pen-testing nodes using ESP32 chips.",
    "Pioneered lightweight local documentation portals."
  ]
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Responsive Next.js/React & TypeScript static/dynamic sites built with clean Tailwind CSS.",
    icon: "Laptop",
    price: "Custom Quote"
  },
  {
    title: "Cyber Security Auditing",
    description: "Web application audits against OWASP vulnerabilities, encryption set up, and API hardening.",
    icon: "Shield",
    price: "Custom Quote"
  },
  {
    title: "Educational Workshops",
    description: "Curated student classes on cyber hygiene, terminal usage, and digital ethics.",
    icon: "Users",
    price: "Flexible / Non-Profit"
  },
  {
    title: "IoT Prototyping",
    description: "Hardware micro-controllers (ESP32/Raspberry Pi) for smart telemetry, sensors and monitoring.",
    icon: "Cpu",
    price: "Project-based"
  },
  {
    title: "Server & Deployment",
    description: "Hardening Debian/Ubuntu boxes, configuring secure Docker networks and reserve proxies.",
    icon: "Terminal",
    price: "Custom Quote"
  },
  {
    title: "Technical Writing",
    description: "Straightforward checklists, cheat sheets, and documentation tailored for students.",
    icon: "BookOpen",
    price: "Per Article"
  }
];

export const BLOGS: BlogPost[] = [
  {
    title: "Getting Started with Kali Linux",
    category: "Linux",
    date: "July 2026",
    readTime: "8 min read",
    excerpt: "Flash Kali Linux, manage terminal variables, and start testing safely inside virtual zones."
  },
  {
    title: "Essential Cyber Hygiene Basics",
    category: "Cybersecurity",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "Quick walkthrough on cybersecurity best practices, phishing indicators, and 2FA habits."
  },
  {
    title: "ESP32 Home Security Prototyping",
    category: "IoT",
    date: "May 2026",
    readTime: "10 min read",
    excerpt: "Deep-dive into microcontroller GPIO, local servers, and physical encryption keys."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sabin Shrestha",
    role: "Computer Science Student",
    text: "Anand's workshop was eye-opening. He brought physical microcontrollers and showed us real wireless diagnostics."
  },
  {
    name: "Roshani Giri",
    role: "Technical Educator",
    text: "The learn.tcpioneer.org portal is our go-to index for setting up Linux and Git structures."
  },
  {
    name: "Niranjan Kc",
    role: "Web Developer",
    text: "Inspiring work combining Next.js with physical hardware circuits and local audits."
  }
];
