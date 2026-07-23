import { resume } from "../../data/resume";
import PageSheet from "../../components/ui/PageSheet/PageSheet";
import s from "./ResumePage2.module.scss";

const ResumePage2 = () => {
  return (
    <PageSheet>

      {/* ══════════════════════════════════════════
          CONTINUATION HEADER
      ══════════════════════════════════════════ */}
      <div className={s.topRule} aria-hidden="true" />
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.headerLeft}>
            <span className={s.headerNameFirst}>{resume.nameFirst}</span>
            {" "}
            <span className={s.headerNameLast}>{resume.nameLast}</span>
            <span className={s.headerDivider} aria-hidden="true" />
            <span className={s.headerRole}>{resume.title}</span>
          </div>
          <span className={s.headerPag}>Page 2 of 2</span>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          SELECTED PROJECTS
      ══════════════════════════════════════════ */}
      <section className={s.section} aria-label="Selected Projects">
        <h2 className={s.sectionTitle}>Selected Projects</h2>

        <div className={s.projectList}>
          {resume.projects.map((project) => (
            <article key={project.name} className={s.projectCard}>
              <div className={s.projectStripe} aria-hidden="true" />
              <div className={s.projectBody}>
                <div className={s.projectHeader}>
                  <div className={s.projectTitles}>
                    <h3 className={s.projectName}>{project.name}</h3>
                    <span className={s.projectTagline}>{project.tagline}</span>
                  </div>
                  <span className={s.projectScale}>{project.scale}</span>
                </div>
                <p className={s.projectDesc}>{project.description}</p>
                <div className={s.projectStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={s.stackBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM ROW — Education · Certs · Languages
      ══════════════════════════════════════════ */}
      <div className={s.bottomRow}>

        <section className={s.bottomCol} aria-label="Education">
          <h2 className={s.sectionTitle}>Education</h2>
          <div className={s.eduCard}>
            <div className={s.eduTop}>
              <h3 className={s.eduDegree}>{resume.education.degree}</h3>
              <span className={s.eduPeriod}>{resume.education.period}</span>
            </div>
            <span className={s.eduInstitution}>{resume.education.institution}</span>
            <div className={s.eduMeta}>
              <span className={s.eduHonors}>{resume.education.honors}</span>
              <span className={s.eduGpa}>{resume.education.gpa}</span>
            </div>
          </div>
        </section>

        <section className={s.bottomCol} aria-label="Certifications">
          <h2 className={s.sectionTitle}>Certifications</h2>
          <div className={s.certList}>
            {resume.certifications.map((cert) => (
              <div key={cert.title} className={s.certItem}>
                <div className={s.certTop}>
                  <span className={s.certYear}>{cert.year}</span>
                  <span className={s.certIssuer}>{cert.issuer}</span>
                </div>
                <span className={s.certTitle}>{cert.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={s.bottomCol} aria-label="Languages">
          <h2 className={s.sectionTitle}>Languages</h2>
          <div className={s.langList}>
            {resume.languages.map((lang) => (
              <div key={lang.name} className={s.langItem}>
                <span className={s.langName}>{lang.name}</span>
                <span className={s.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════
          AVAILABILITY
      ══════════════════════════════════════════ */}
      <div className={s.availability} role="presentation">
        <div className={s.availLine} />
        <span className={s.availText}>
          Available for senior &amp; staff-level roles · Remote or relocation considered
        </span>
        <div className={s.availLine} />
      </div>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className={s.footer}>
        <span className={s.footerName}>{resume.name}</span>
        <span className={s.footerPag}>Page 2 of 2</span>
      </footer>

    </PageSheet>
  );
};

ResumePage2.displayName = "pages.ResumePage2";
export default ResumePage2;
