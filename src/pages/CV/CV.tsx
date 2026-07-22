import styles from "./CV.module.scss";

const JOBS = [
  {
    role: "Senior Frontend Engineer",
    co: "Nebula Labs",
    loc: "Remote · Full-time",
    period: "2022 — Present",
    items: [
      "Led CRA → Vite migration; cold-start 28 s → 1.8 s",
      "Architected cross-product design system, UI dev time ↓35%",
      "Real-time collaborative canvas — WebSockets + CRDTs",
      "Mentored 3 junior engineers; established review culture",
    ],
  },
  {
    role: "Frontend Developer",
    co: "Axon Digital",
    loc: "Kyiv · Full-time",
    period: "2020 — 2022",
    items: [
      "Multi-tenant dashboard serving 40 000+ daily active users",
      "Core Web Vitals 54 → 91 via code-splitting & lazy loading",
      "GraphQL schema design in collaboration with backend team",
    ],
  },
  {
    role: "Junior React Developer",
    co: "Freelance",
    loc: "Contract · Remote",
    period: "2019 — 2020",
    items: [
      "12 client projects: e-commerce, dashboards, landing pages",
      "GitHub Actions CI/CD — automated deploys to Vercel",
    ],
  },
];

const SKILLS = [
  { name: "TypeScript / JS",    pct: 96 },
  { name: "React / Next.js",    pct: 94 },
  { name: "GraphQL / REST",     pct: 88 },
  { name: "Node.js / Express",  pct: 82 },
  { name: "PostgreSQL / Redis", pct: 75 },
  { name: "Docker / CI-CD",     pct: 70 },
];

const TOOLS = ["Vite", "Storybook", "Jest", "Playwright", "Figma", "Tailwind", "Sass", "Git", "Webpack", "Docker"];

const PROJECTS = [
  {
    n: "I",
    name: "Flowboard",
    year: "2024",
    tags: ["React", "WebSockets", "CRDTs"],
    desc: "Real-time collaborative kanban with live cursors, CRDT-based conflict resolution & E2E encryption. 1.2k GitHub stars.",
    link: "github.com/alexkovach/flowboard",
  },
  {
    n: "II",
    name: "PriceScope",
    year: "2023",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    desc: "SaaS price-tracker monitoring 500k+ SKUs. Smart alerts, historical D3 trend charts, multi-user workspaces.",
    link: "pricescope.app",
  },
  {
    n: "III",
    name: "UIKit-Zero",
    year: "2022",
    tags: ["React", "TypeScript", "WCAG"],
    desc: "Zero-dependency component library. Full accessibility support, dark-mode, auto-generated Storybook docs.",
    link: "npmjs.com/package/uikit-zero",
  },
];

const CV = () => (
  <div className={styles.root}>

    {/* ══════════════════════  PAGE 1  ══════════════════════ */}
    <div className={styles.page}>

      {/* top rule */}
      <div className={styles.topRule}>
        <div className={styles.topRuleGold} />
        <div className={styles.topRuleThin} />
      </div>

      {/* nav */}
      <nav className={styles.nav}>
        <span className={styles.navBrand}>AK</span>
        <span className={styles.navTitle}>Curriculum Vitae</span>
        <span className={styles.navYear}>MMXXVI</span>
      </nav>

      {/* hero — compact */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEye}>Frontend Engineering</p>
          <h1 className={styles.heroName}>
            <span className={styles.heroThin}>Alex</span>
            <span className={styles.heroBold}>Kovach</span>
          </h1>
          <p className={styles.heroDesc}>
            Six years turning complex problems into elegant, high-performance
            web products. I own the full delivery cycle and leave every codebase
            better than I found it.
          </p>
        </div>

        <div className={styles.heroRight}>
          {/* contact table */}
          <div className={styles.infoGrid}>
            {[
              ["Location", "Kyiv, Ukraine"],
              ["Remote",   "Available"],
              ["Email",    "alex.kovach@mail.com"],
              ["GitHub",   "github.com/alexkovach"],
              ["Phone",    "+380 99 123 45 67"],
              ["Notice",   "2 weeks"],
            ].map(([k, v]) => (
              <div key={k} className={styles.infoRow}>
                <span className={styles.infoKey}>{k}</span>
                <span className={styles.infoVal}>{v}</span>
              </div>
            ))}
          </div>
          {/* stats */}
          <div className={styles.statsRow}>
            {[["6+","Years"],["40k","DAU"],["12","Repos"],["35%","Faster"]].map(([v,l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statN}>{v}</span>
                <span className={styles.statL}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* body */}
      <div className={styles.body}>

        {/* ── left: experience ── */}
        <div className={styles.mainCol}>
          <div className={styles.secHead}>
            <span className={styles.secN}>01</span>
            <span className={styles.secT}>Experience</span>
          </div>

          {JOBS.map(({ role, co, loc, period, items }) => (
            <div key={role} className={styles.job}>
              <div className={styles.jobTop}>
                <div>
                  <h3 className={styles.jobRole}>{role}</h3>
                  <p className={styles.jobMeta}>{co} · {loc}</p>
                </div>
                <span className={styles.jobPeriod}>{period}</span>
              </div>
              <ul className={styles.jobList}>
                {items.map(it => (
                  <li key={it}><span className={styles.jobBullet} />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── right: skills + tools + lang + edu ── */}
        <div className={styles.sideCol}>

          <div className={styles.secHead}>
            <span className={styles.secN}>02</span>
            <span className={styles.secT}>Skills</span>
          </div>
          {SKILLS.map(({ name, pct }) => (
            <div key={name} className={styles.skillRow}>
              <div className={styles.skillTop}>
                <span className={styles.skillName}>{name}</span>
                <span className={styles.skillPct}>{pct}</span>
              </div>
              <div className={styles.skillTrack}>
                <div className={styles.skillBar} style={{ "--w": `${pct}%` } as React.CSSProperties} />
              </div>
            </div>
          ))}

          <div className={styles.secHead}>
            <span className={styles.secN}>03</span>
            <span className={styles.secT}>Toolbelt</span>
          </div>
          <div className={styles.toolGrid}>
            {TOOLS.map(t => <span key={t} className={styles.toolTag}>{t}</span>)}
          </div>

          <div className={styles.secHead}>
            <span className={styles.secN}>04</span>
            <span className={styles.secT}>Languages</span>
          </div>
          {[["Ukrainian","Native",5],["English","B2 Upper",4],["Polish","A2 Basic",2]].map(([lang, lvl, dots]) => (
            <div key={lang as string} className={styles.langRow}>
              <span className={styles.langName}>{lang}</span>
              <div className={styles.langDots}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={`${styles.ldot} ${i <= (dots as number) ? styles.ldotOn : ""}`} />
                ))}
              </div>
              <span className={styles.langLvl}>{lvl}</span>
            </div>
          ))}

          <div className={styles.secHead}>
            <span className={styles.secN}>05</span>
            <span className={styles.secT}>Education</span>
          </div>
          <div className={styles.eduBlock}>
            <p className={styles.eduDeg}>B.Sc. Computer Science</p>
            <p className={styles.eduUni}>Taras Shevchenko National University</p>
            <p className={styles.eduDate}>2015 – 2019 · GPA 3.8</p>
          </div>

        </div>
      </div>
    </div>

    {/* ══════════════════════  PAGE 2  ══════════════════════ */}
    <div className={styles.page}>

      <div className={styles.topRule}>
        <div className={styles.topRuleGold} />
        <div className={styles.topRuleThin} />
      </div>

      <nav className={styles.nav}>
        <span className={styles.navBrand}>AK</span>
        <span className={styles.navTitle}>Selected Work & Profile</span>
        <span className={styles.navYear}>MMXXVI</span>
      </nav>

      {/* projects heading */}
      <div className={styles.projHead}>
        <span className={styles.projHeadN}>06</span>
        <h2 className={styles.projHeadT}>Projects</h2>
        <div className={styles.projHeadLine} />
      </div>

      {/* 3-col project cards */}
      <div className={styles.projGrid}>
        {PROJECTS.map(({ n, name, year, tags, desc, link }) => (
          <div key={name} className={styles.projCard}>
            <div className={styles.projCardTop}>
              <span className={styles.projN}>{n}</span>
              <div className={styles.projCardRule} />
            </div>
            <div className={styles.projMeta}>
              <h3 className={styles.projName}>{name}</h3>
              <span className={styles.projYear}>{year}</span>
            </div>
            <p className={styles.projDesc}>{desc}</p>
            <div className={styles.projBottom}>
              <div className={styles.projTags}>
                {tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href="#" className={styles.projLink}>{link} ↗</a>
            </div>
          </div>
        ))}
      </div>

      {/* bottom 4-col */}
      <div className={styles.p2Bottom}>

        <div className={styles.p2Col}>
          <div className={styles.secHead}>
            <span className={styles.secN}>07</span>
            <span className={styles.secT}>Certifications</span>
          </div>
          {[
            ["2023","AWS Cloud Practitioner"],
            ["2022","Meta Front-End Developer"],
            ["2021","Google UX Design"],
          ].map(([yr,title]) => (
            <div key={title} className={styles.certRow}>
              <span className={styles.certYr}>{yr}</span>
              <span className={styles.certTitle}>{title}</span>
            </div>
          ))}

          <div className={styles.secHead}>
            <span className={styles.secN}>08</span>
            <span className={styles.secT}>Interests</span>
          </div>
          {["Open Source","Generative Art","Algo Trading","Rock Climbing","Music Production"].map(i => (
            <p key={i} className={styles.interest}>{i}</p>
          ))}
        </div>

        <div className={styles.p2Col}>
          <div className={styles.secHead}>
            <span className={styles.secN}>09</span>
            <span className={styles.secT}>What I bring</span>
          </div>
          {[
            ["Speed",   "Ship fast without sacrificing quality or accessibility"],
            ["Depth",   "Root-cause analysis — no band-aid patches, ever"],
            ["Clarity", "Fluent in designer-speak and comfortable in backend PRs"],
            ["Scale",   "Every component designed to survive 10× the initial scope"],
          ].map(([t,b]) => (
            <div key={t as string} className={styles.bringRow}>
              <span className={styles.bringT}>{t}</span>
              <span className={styles.bringB}>{b}</span>
            </div>
          ))}
        </div>

        <div className={styles.p2Col}>
          <div className={styles.secHead}>
            <span className={styles.secN}>10</span>
            <span className={styles.secT}>Contact</span>
          </div>
          {[
            ["Email",    "alex.kovach@mail.com"],
            ["LinkedIn", "linkedin.com/in/alexkovach"],
            ["GitHub",   "github.com/alexkovach"],
            ["Phone",    "+380 99 123 45 67"],
            ["Location", "Kyiv, Ukraine"],
          ].map(([k,v]) => (
            <div key={k} className={styles.certRow}>
              <span className={styles.certYr} style={{ width: 52 }}>{k}</span>
              <span className={styles.certTitle}>{v}</span>
            </div>
          ))}

          <div className={styles.availBox}>
            <div className={styles.availTop}>
              <span className={styles.availDot} />
              <span className={styles.availStatus}>Open to offers</span>
            </div>
            <p className={styles.availSub}>Remote · Relocation · 2-week notice</p>
          </div>
        </div>

      </div>

      {/* footer rule */}
      <div className={styles.pageFooter}>
        <span>References available upon request</span>
        <span className={styles.footerSep} />
        <span>Updated July 2026</span>
        <span className={styles.footerSep} />
        <span>alex_kovach.cv</span>
      </div>

    </div>
  </div>
);

CV.displayName = "pages.CV";
export default CV;
