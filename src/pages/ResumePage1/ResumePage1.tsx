import { resume } from "../../data/resume";
import PageSheet from "../../components/ui/PageSheet/PageSheet";
import s from "./ResumePage1.module.scss";

const ResumePage1 = () => {
  return (
    <PageSheet>

      {/* ══════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════ */}
      <div className={s.topRule} aria-hidden="true" />
      <header className={s.masthead}>
        <div className={s.mastheadInner}>

          <div className={s.nameBlock}>
            <h1 className={s.name} aria-label={resume.name}>
              <span className={s.nameFirst}>{resume.nameFirst}</span>
              {" "}
              <span className={s.nameLast}>{resume.nameLast}</span>
            </h1>
            <div className={s.roleRow}>
              <span className={s.roleDot} aria-hidden="true" />
              <span className={s.roleText}>{resume.title}</span>
              <span className={s.roleSep} aria-hidden="true" />
              <span className={s.roleLocation}>{resume.contact.location}</span>
            </div>
          </div>

          <address className={s.contact}>
            <span className={s.contactLabel}>Contact</span>
            <span className={s.contactItem}>{resume.contact.email}</span>
            <span className={s.contactItem}>{resume.contact.phone}</span>
          </address>

        </div>
      </header>

      {/* ══════════════════════════════════════════
          PROFESSIONAL SUMMARY
      ══════════════════════════════════════════ */}
      <section className={s.summarySection} aria-label="Professional Summary">
        <p className={s.summary}>
          <span className={s.summaryLead}>
            Full-stack engineer with 6 years building and scaling production systems from zero to millions of users.
          </span>
          {" "}
          Deep expertise in React, TypeScript, and Node.js on the frontend; PostgreSQL, Django, and distributed systems on the backend.
          I write code that performs, scales, and the next engineer is glad to inherit.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          KEY METRICS — 4 numbers, seen first
      ══════════════════════════════════════════ */}
      <section className={s.metricsSection} aria-label="Key Metrics">
        {resume.impact.map((item, i) => (
          <div key={i} className={s.metricCell}>
            <span className={s.metricNum}>{item.metric}</span>
            <span className={s.metricLabel}>{item.label}</span>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════ */}
      <section className={s.section} aria-label="Work Experience">
        <h2 className={s.sectionTitle}>Experience</h2>

        <div className={s.expList}>
          {resume.experience.map((exp, idx) => (
            <article key={exp.company} className={s.expBlock}>

              {/* Header: role left, period right */}
              <div className={s.expHeader}>
                <div className={s.expHeaderLeft}>
                  <h3 className={s.expRole}>{exp.role}</h3>
                  <div className={s.expSubline}>
                    <span className={s.expCompany}>{exp.company}</span>
                    <span className={s.expSubDot} aria-hidden="true" />
                    <span className={s.expLocation}>{exp.location}</span>
                  </div>
                </div>
                <span className={s.expPeriod}>{exp.period}</span>
              </div>

              {/* Achievements */}
              <ul className={s.achList}>
                {exp.achievements.map((a, ai) => (
                  <li key={ai}>
                    <span className={s.achBullet} aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              {idx < resume.experience.length - 1 && (
                <div className={s.expDivider} role="separator" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNICAL SKILLS
      ══════════════════════════════════════════ */}
      <section className={s.skillsSection} aria-label="Technical Skills">
        <h2 className={s.sectionTitle}>Technical Skills</h2>
        <div className={s.skillsGrid}>
          {Object.entries(resume.skills).map(([cat, items]) => (
            <div key={cat} className={s.skillGroup}>
              <h3 className={s.skillCat}>{cat}</h3>
              <div className={s.skillPills}>
                {items.map((skill) => (
                  <span key={skill} className={s.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className={s.footer}>
        <span className={s.footerName}>{resume.name}</span>
        <span className={s.footerPag}>Page 1 of 2</span>
      </footer>

    </PageSheet>
  );
};

ResumePage1.displayName = "pages.ResumePage1";
export default ResumePage1;
