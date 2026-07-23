/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║            RESUME DATA — EDIT THIS FILE ONLY            ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * INSTRUCTIONS:
 * 1. Replace every value below with your real information.
 * 2. Keep the structure — only change the string values.
 * 3. For each job: write 3–4 achievements with NUMBERS.
 *    Formula: [Action verb] + [what you did] + [result with metric]
 *    Example: "Reduced API latency 68% by redesigning PostgreSQL query layer"
 * 4. impact[] — pick your 4 biggest career numbers. These are seen FIRST.
 * 5. skills{} — match keywords from the job description you're applying to.
 */

export const resume = {
  // ── IDENTITY ─────────────────────────────────────────────
  name:      "Murad Gazymagomedov",   // exact spelling, keep as-is
  nameFirst: "Murad",
  nameLast:  "Gazymagomedov",
  title:     "Senior Full Stack Engineer",  // match the job title you're applying for

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    email:    "murad.gazym@proton.me",
    phone:    "+1 (415) 829-4701",
    location: "San Francisco, CA",
  },

  // ── PROFESSIONAL SUMMARY ─────────────────────────────────
  // 2–3 sentences. Who you are → what you specialize in → scale/impact.
  // Tip: include 3–5 keywords from the job description naturally.
  statement:
    "Full-stack engineer with 6 years building and scaling production systems from zero to millions of users. " +
    "Deep expertise in React, TypeScript, and Node.js on the frontend; PostgreSQL, Django, and distributed systems on the backend. " +
    "I write code that performs, scales, and the next engineer is glad to inherit.",

  // ── KEY METRICS — shown prominently at the top ───────────
  // These 4 numbers are the FIRST thing recruiters see after your name.
  // Choose your 4 most impressive career numbers. Be specific.
  impact: [
    { metric: "68%",  label: "API latency reduction — PostgreSQL schema & query redesign" },
    { metric: "3.2M", label: "Monthly active users on React platform I architected" },
    { metric: "12M",  label: "Daily requests on microservices system I designed" },
    { metric: "5×",   label: "Deployment speed gain via Kubernetes migration" },
  ],

  // ── WORK EXPERIENCE ──────────────────────────────────────
  // Order: most recent first. 3 jobs is ideal. 4 max.
  experience: [
    {
      company:   "Dataline Systems",
      role:      "Senior Full Stack Engineer",
      period:    "2022 — Present",
      location:  "San Francisco, CA",
      // 3–4 bullets. Start with a strong verb. Include at least one metric per bullet.
      achievements: [
        "Architected Next.js 14 dashboard serving 3.2M MAU, achieving 1.8s LCP and 0.04 CLS via server components, edge caching, and image pipeline optimization",
        "Redesigned PostgreSQL schema and query layer, reducing p95 latency from 2.1s to 680ms across 12M daily requests with zero-downtime migration",
        "Built React component library (85+ components) adopted by 5 product teams, cutting new feature UI development time by 40%",
        "Mentored 4 engineers, established TypeScript standards and code review process, reducing onboarding ramp time from 6 weeks to 3",
      ],
    },
    {
      company:   "Apex Technologies",
      role:      "Full Stack Engineer",
      period:    "2020 — 2022",
      location:  "Remote",
      achievements: [
        "Delivered Django REST API serving 2.4M requests/day at 99.7% uptime for B2B SaaS platform with 15,000 enterprise organizations",
        "Rebuilt React + TypeScript frontend with Redux Toolkit; reduced initial load time from 4.8s to 1.9s through code splitting and lazy loading",
        "Integrated Stripe payment processing for $18M annual transaction volume with idempotency keys and webhook reconciliation — zero data loss",
        "Migrated Docker monolith to Kubernetes cluster, improving deployment speed from 18 minutes to 3.6 minutes (5× faster)",
      ],
    },
    {
      company:   "CloudBridge Inc.",
      role:      "Backend Engineer",
      period:    "2019 — 2020",
      location:  "Austin, TX",
      achievements: [
        "Built Node.js microservices architecture processing 800k daily events with PostgreSQL write-ahead log and Redis caching layer",
        "Designed REST API consumed by iOS and Android apps with 450k combined DAU; documented with OpenAPI 3.0 specification",
        "Optimized Docker container builds, reducing memory footprint by 42% (1.8GB → 1.04GB) and startup time by 58% across all services",
      ],
    },
  ],

  // ── TECHNICAL SKILLS ─────────────────────────────────────
  // Tip: reorder to match the job description you're targeting.
  // ATS scans for exact keyword matches.
  skills: {
    "Frontend":  ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand"],
    "Backend":   ["Node.js", "Django", "REST API", "GraphQL", "WebSockets", "Celery"],
    "Data":      ["PostgreSQL", "Redis", "MongoDB", "SQL", "Prisma", "Data Modeling"],
    "DevOps":    ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Terraform"],
  },

  // ── PROJECTS — page 2 ────────────────────────────────────
  // 3 projects max. Real projects only — you'll be asked about them.
  projects: [
    {
      name:        "HyperDash",
      tagline:     "Real-time SaaS analytics platform",
      description:
        "WebSocket-powered analytics dashboard with a custom D3.js visualization engine. Handles 500k live data points with sub-200ms render time. Multi-tenant architecture with per-workspace data isolation.",
      stack: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Redis", "D3.js"],
      scale: "12 enterprise clients",
    },
    {
      name:        "CodeFlow",
      tagline:     "Async code review & collaboration tool",
      description:
        "Developer productivity platform with GitHub integration, real-time inline commenting, and AI-assisted review suggestions. Built on Next.js 14 App Router with Supabase realtime subscriptions.",
      stack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Vercel Edge"],
      scale: "340 developers · 2.8k reviews",
    },
    {
      name:        "PriceTrack Pro",
      tagline:     "E-commerce price intelligence engine",
      description:
        "Distributed web scraping system monitoring 28k products across 8 major retailers. Puppeteer-based crawler fleet managed by Celery, time-series data in PostgreSQL, automated alert pipeline.",
      stack: ["Django", "PostgreSQL", "Puppeteer", "Docker", "Celery", "Redis"],
      scale: "$4.2M inventory tracked",
    },
  ],

  // ── EDUCATION ────────────────────────────────────────────
  education: {
    degree:      "B.S. Computer Science",
    institution: "Stanford University",
    period:      "2015 — 2019",
    honors:      "Summa Cum Laude",
    gpa:         "GPA 3.92 / 4.0",
  },

  // ── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    { title: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2024" },
    { title: "Google Cloud Professional Developer",  issuer: "Google Cloud",         year: "2023" },
  ],

  // ── LANGUAGES ────────────────────────────────────────────
  languages: [
    { name: "English", level: "Native" },
    { name: "Russian", level: "Native" },
    { name: "Turkish", level: "Conversational" },
  ],
};
