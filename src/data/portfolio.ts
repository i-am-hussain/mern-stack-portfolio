/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Every section of the site reads from here — no need to touch
 *  the components for content changes.
 * ─────────────────────────────────────────────────────────────
 */

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
};

const EMAIL = "aarav.sharma.dev@gmail.com";

export const profile = {
  name: "Aarav Sharma",
  firstName: "Aarav",
  role: "MERN Stack Developer",
  location: "Bengaluru, India",
  timezone: "IST · UTC+5:30",
  email: EMAIL,
  phone: "+91 98765 43210",
  availability: "Available for freelance & full-time roles",
  headline: "I build fast, scalable products across the MERN stack.",
  subheadline:
    "Full-stack developer with 3+ years of experience turning product ideas into polished web applications — from pixel-accurate React interfaces to production-ready Node APIs and MongoDB data models.",
  resumeUrl: "",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com", icon: "twitter" },
    { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
  ] satisfies Social[],
  stats: [
    { value: "3+", label: "Years shipping products" },
    { value: "24", label: "Projects delivered" },
    { value: "99%", label: "Client satisfaction" },
  ],
};

export const about = {
  intro:
    "I'm a MERN stack developer who cares about the details other people skip — the loading state, the empty state, the query that runs 200ms faster.",
  paragraphs: [
    "My journey started with a single React component and a stubborn curiosity about what happens on the server. Today I build complete products: React and Next.js front ends, Express APIs, MongoDB schemas that scale, and the deployment pipeline that keeps them online.",
    "I enjoy working close to product. That means asking why a feature exists before writing it, prototyping in the browser, and shipping in small, measurable increments. Clean architecture and readable code aren't extras — they're how teams move fast without breaking things.",
  ],
  currently: [
    "Building a real-time collaboration platform with Socket.IO",
    "Exploring React Three Fiber for immersive interfaces",
    "Mentoring junior developers on backend fundamentals",
  ],
  availabilityNote:
    "Based in Bengaluru, working remotely with teams across time zones. Open to interesting full-stack problems.",
};

export type SkillGroup = {
  title: string;
  blurb: string;
  icon: "code" | "server" | "database" | "toolbox";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel instant and look intentional.",
    icon: "code",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Three Fiber",
      "Framer Motion",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    blurb: "APIs designed for clarity, security and load.",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Socket.IO",
      "JWT & OAuth",
      "Zod validation",
      "Webhooks",
    ],
  },
  {
    title: "Data",
    blurb: "Schemas and queries that stay fast as data grows.",
    icon: "database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Aggregation pipelines",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Indexing",
      "Data modelling",
    ],
  },
  {
    title: "DevOps & Tools",
    blurb: "Ship confidently, debug quickly, sleep well.",
    icon: "toolbox",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS EC2 / S3",
      "Vercel",
      "CI/CD",
      "Jest & Vitest",
      "Postman",
      "Linux",
    ],
  },
];

export const marqueeStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Redis",
  "Tailwind CSS",
  "Three.js",
  "Socket.IO",
  "Docker",
  "AWS",
  "GraphQL",
  "Jest",
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  highlights: string[];
  github: string;
  live: string;
  featured?: boolean;
  accent: string;
  glow: string;
  mock: {
    label: string;
    metric: string;
    metricLabel: string;
    bars: number[];
  };
};

export const projects: Project[] = [
  {
    slug: "nexus-commerce",
    title: "Nexus Commerce",
    tagline: "Full-stack commerce platform",
    description:
      "A production-ready storefront and admin suite handling catalog, cart, checkout and order analytics. Built for a 12k-SKU catalog with sub-100ms product queries.",
    year: "2025",
    stack: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe"],
    highlights: [
      "Cut checkout drop-off by 22% with optimistic cart updates",
      "MongoDB aggregation pipelines power the sales dashboard",
      "Role-based admin, webhook-driven order fulfilment",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    accent: "from-emerald-400/20 via-cyan-400/10 to-transparent",
    glow: "rgba(52,211,153,0.22)",
    mock: {
      label: "nexus.app / dashboard",
      metric: "$184.2k",
      metricLabel: "Revenue this month",
      bars: [38, 62, 48, 78, 56, 90, 72, 84],
    },
  },
  {
    slug: "devsync",
    title: "DevSync",
    tagline: "Real-time team workspace",
    description:
      "Collaborative workspace with live cursors, shared notes and presence. Socket.IO rooms backed by a Redis adapter keep 500+ concurrent users in sync.",
    year: "2025",
    stack: ["React", "Express", "Socket.IO", "MongoDB", "Redis"],
    highlights: [
      "Optimistic conflict-free note editing with CRDTs",
      "Redis pub/sub for horizontal socket scaling",
      "JWT auth with rotating refresh tokens",
    ],
    github: "https://github.com",
    live: "https://example.com",
    accent: "from-sky-400/20 via-indigo-400/10 to-transparent",
    glow: "rgba(56,189,248,0.2)",
    mock: {
      label: "devsync.app / room",
      metric: "512",
      metricLabel: "Active collaborators",
      bars: [30, 45, 60, 52, 74, 88, 66, 95],
    },
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    tagline: "Product analytics dashboard",
    description:
      "Self-serve analytics for product teams: funnels, retention cohorts and event streams, all served from pre-aggregated Mongo collections.",
    year: "2024",
    stack: ["React", "Node.js", "MongoDB", "Chart.js", "Docker"],
    highlights: [
      "$lookup + $facet pipeline renders cohorts in one round trip",
      "Scheduled rollups keep dashboards under 300ms",
      "Dockerised deployment with GitHub Actions",
    ],
    github: "https://github.com",
    live: "https://example.com",
    accent: "from-violet-400/20 via-fuchsia-400/10 to-transparent",
    glow: "rgba(167,139,250,0.2)",
    mock: {
      label: "pulse.app / funnels",
      metric: "18.4%",
      metricLabel: "Trial → paid conversion",
      bars: [55, 40, 66, 48, 82, 58, 90, 70],
    },
  },
  {
    slug: "taskforge",
    title: "TaskForge",
    tagline: "Kanban & team task manager",
    description:
      "Drag-and-drop task boards with granular permissions, activity logs and email digests. Designed for small teams that live in their issue tracker.",
    year: "2024",
    stack: ["React", "Express", "MongoDB", "JWT", "Tailwind"],
    highlights: [
      "Optimistic drag-and-drop with server reconciliation",
      "Nodemailer digests on a cron schedule",
      "Fine-grained RBAC with policy middleware",
    ],
    github: "https://github.com",
    live: "https://example.com",
    accent: "from-amber-400/20 via-orange-400/10 to-transparent",
    glow: "rgba(251,191,36,0.18)",
    mock: {
      label: "taskforge.app / board",
      metric: "1.2k",
      metricLabel: "Tasks completed",
      bars: [44, 70, 52, 88, 62, 76, 94, 68],
    },
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Northwind Labs",
    period: "2024 — Present",
    type: "Remote",
    summary:
      "Own end-to-end delivery of client products across the MERN stack, from discovery to post-launch iteration.",
    points: [
      "Shipped 9 client applications with a 100% on-time launch record",
      "Reduced average API response time by 46% through query and index tuning",
      "Introduced a shared Next.js starter that cut project setup from days to hours",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    role: "MERN Stack Developer",
    company: "PixelForge Studio",
    period: "2022 — 2024",
    type: "Full-time",
    summary:
      "Built and maintained multi-tenant SaaS dashboards for logistics and fintech clients.",
    points: [
      "Designed a multi-tenant MongoDB architecture serving 40k+ daily requests",
      "Built a real-time notification service with Socket.IO and Redis",
      "Raised Lighthouse performance scores from 62 to 96 on core screens",
    ],
    stack: ["React", "Express", "MongoDB", "Redis", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "CodeCrafters",
    period: "2021 — 2022",
    type: "Hybrid",
    summary:
      "Turned Figma handoffs into responsive, accessible React interfaces for early-stage startups.",
    points: [
      "Implemented a component library used across four products",
      "Improved accessibility compliance to WCAG 2.1 AA on key flows",
      "Wrote integration tests that caught 30+ regressions before release",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Jest"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
