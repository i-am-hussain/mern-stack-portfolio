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

// TODO: replace with your real email address.
const EMAIL = "sahnawashussain98@gmail.com";

export const profile = {
  name: "Sahnawas Hussain",
  firstName: "Sahnawas",
  role: "MERN Stack Developer",
  // Drop your portrait at public/profile.jpg, or change this path.
  photo: "/profile.jpg",
  photoAlt: "Portrait of Sahnawas Hussain",
  location: "Bhopal, India",
  timezone: "IST · UTC+5:30",
  email: EMAIL,
  phone: "+91 9547730883",
  availability: "Available for freelance & full-time roles",
  headline: "I build fast, scalable products across the MERN stack.",
  subheadline:
    "MERN stack developer turning product ideas into polished web applications — crafting React interfaces, wiring Express and Node REST APIs, and shaping MongoDB data models that hold up.",
  resumeUrl: "",
  socials: [
    { label: "GitHub", href: "https://github.com/sahnawashussain786", icon: "github" },
    { label: "LinkedIn", href: "www.linkedin.com/in/i-am-hussain", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com", icon: "twitter" },
    { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
  ] satisfies Social[],
  stats: [
    { value: "6", label: "Months on a product team" },
    { value: "3", label: "Full-stack apps live" },
    { value: "MERN", label: "Stack, end to end" },
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
  icon: "code" | "server" | "database";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "React",
    blurb: "Interfaces that feel instant and look intentional.",
    icon: "code",
    skills: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "Hooks & Context",
      "Tailwind CSS",
      "Component architecture",
    ],
  },
  {
    title: "Node.js & Express",
    blurb: "APIs designed for clarity, security and load.",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware & routing",
      "JWT authentication",
      "Input validation",
      "Rate limiting",
      "Error handling",
    ],
  },
  {
    title: "MongoDB",
    blurb: "Schemas and queries that stay fast as data grows.",
    icon: "database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Schema design",
      "Aggregation pipelines",
      "Indexing",
      "Data modelling",
      "MongoDB Atlas",
      "Transactions",
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
  github?: string;
  live: string;
  /** Screenshot shown in the project card, e.g. "/projects/drivea.png". */
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  accent: string;
  glow: string;
  mock: {
    label: string;
    bars: number[];
  };
};

export const projects: Project[] = [
  {
    slug: "drivea",
    title: "Drivea",
    tagline: "Full-stack cloud storage app",
    description:
      "A full-stack cloud storage application built with the MERN stack and Tailwind CSS v4. Drivea keeps files and nested folders in one private drive, moves them to a trash with restore, shares files or folders through public links, and tracks a per-account storage quota. The responsive SPA ships with a desktop sidebar, a mobile bottom navigation bar, drag-and-drop uploads, grid and list views, light and dark themes, and a small in-house component kit built on Lucide icons.",
    year: "2026",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS v4", "Lucide"],
    highlights: [
      "Nested folders with trash, restore and permanent delete",
      "Public share links for individual files and whole folders",
      "Per-account storage quota tracked across every upload",
      "Drag-and-drop uploads with grid/list views and light or dark themes",
    ],
    live: "https://drivea-coral.vercel.app/",
    image: "/projects/DRIVEA.png",
    // imageAlt: "Drivea file browser with folders and storage quota",
    featured: true,
    accent: "from-emerald-400/20 via-cyan-400/10 to-transparent",
    glow: "rgba(52,211,153,0.22)",
    mock: {
      label: "drivea / my drive",
      bars: [38, 62, 48, 78, 56, 90, 72, 84],
    },
  },
  {
    slug: "medibook",
    title: "MediBook",
    tagline: "Hospital management system",
    description:
      "A full-stack Hospital Management System on the MERN stack with a clean, professional Tailwind CSS interface for running day-to-day hospital operations.",
    year: "2026",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [],
    live: "https://hospital-management-system-gules-ten.vercel.app/",
    image: "/projects/Medibook.png",
    // imageAlt: "MediBook hospital management dashboard",
    accent: "from-sky-400/20 via-indigo-400/10 to-transparent",
    glow: "rgba(56,189,248,0.2)",
    mock: {
      label: "medibook / dashboard",
      bars: [30, 45, 60, 52, 74, 88, 66, 95],
    },
  },
  {
    slug: "jobnest",
    title: "JobNest",
    tagline: "Full-stack job board",
    description:
      "A full-stack job board built on the MERN stack with Tailwind CSS, deployed to Vercel as a single project: the React SPA is served statically and the Express API runs as a serverless function under /api.",
    year: "2026",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    highlights: [],
    live: "https://job-portal-app-blond.vercel.app/",
    image: "/projects/job-portal-app.png",
    // imageAlt: "JobNest job board listing page",
    accent: "from-violet-400/20 via-fuchsia-400/10 to-transparent",
    glow: "rgba(167,139,250,0.2)",
    mock: {
      label: "jobnest / jobs",
      bars: [55, 40, 66, 48, 82, 58, 90, 70],
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
    role: "MERN Stack Developer Intern",
    company: "EyeT Global Pvt Ltd · Asansol, India",
    period: "02/2025 – 08/2025",
    type: "Internship",
    summary:
      "Contributed to the development of full-stack web applications using MongoDB, Express.js, React and Node.js — building UI components, integrating REST APIs, supporting database operations and working with the team to test and improve features.",
    points: [
      "Developed responsive React components for application features",
      "Integrated frontend screens with backend APIs and MongoDB data",
      "Helped troubleshoot bugs and improve application reliability",
      "Collaborated through code reviews, Git and regular project updates",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Git"],
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
