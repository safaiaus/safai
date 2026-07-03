import Link from "next/link";
import styles from "@/components/Marketing.module.css";

export const metadata = { title: "Community · Safai" };

const RESOURCES = [
  {
    title: "Governance hub",
    desc: "Curated articles, playbooks and explainers from the Safai team and guest practitioners.",
    link: "Browse the hub →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  },
  {
    title: "Frameworks library",
    desc: "Downloadable templates: AI risk register, cyber incident playbook, psychosocial risk assessment.",
    link: "Open the library →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>,
  },
  {
    title: "Webinars",
    desc: "Monthly live sessions with regulators, lawyers and senior practitioners. Recorded for members.",
    link: "Upcoming webinars →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
  },
  {
    title: "Research",
    desc: "Original research on Australian AI governance maturity, cyber readiness and compliance benchmarks.",
    link: "Read the research →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
  },
  {
    title: "Discussions",
    desc: "A members-only workspace and forum. The honest conversation about what is actually working.",
    link: "Join the conversation →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
  },
  {
    title: "Newsletter",
    desc: "The weekly briefing on regulatory changes, enforcement actions and what governance teams need to know.",
    link: "Subscribe →",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  },
];

export default function CommunityPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className="shell">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>Community</span>
          </div>
          <h1>The community for <em>practitioners</em><br />who take governance seriously.</h1>
          <p className={styles.lede}>
            Working compliance officers, GCs, CROs and governance leads sharing
            frameworks, war stories and the tools that actually work. Across AI,
            cyber and compliance.
          </p>
        </div>
      </header>

      <section className={styles.section} id="hub">
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— RESOURCES</span>
            <h2>Everything we publish, in <em>one place</em>.</h2>
            <p>Frameworks, webinars, research and discussion, free for the community.</p>
          </div>
          <div className={styles.resourceGrid}>
            {RESOURCES.map((r) => (
              <div key={r.title} className={styles.resourceCard}>
                <div className={styles.featIcon}>{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <a href="#" className={styles.resourceLink}>{r.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}