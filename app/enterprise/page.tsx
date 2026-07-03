import Link from "next/link";
import styles from "@/components/Marketing.module.css";
import EnterpriseContact from "@/components/EnterpriseContact";

export const metadata = { title: "Enterprise · Safai" };

export default function EnterprisePage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className="shell">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>Enterprise</span>
          </div>
          <h1>Train your workforce.<br /><em>Defend your decisions.</em></h1>
          <p className={styles.lede}>
            One platform to roll out AI governance, cyber security and workplace
            compliance training across legal, risk, technology and operations,
            with the audit evidence regulators and boards now expect.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className="btn btn-primary">
              Book a demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <Link href="/pricing" className="btn btn-ghost">See enterprise pricing</Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.stat}><span className={styles.statV}>186</span><span className={styles.statL}>Enterprise customers</span></div>
            <div className={styles.stat}><span className={styles.statV}>94<em>%</em></span><span className={styles.statL}>Completion rate</span></div>
            <div className={styles.stat}><span className={styles.statV}>3.2<em>x</em></span><span className={styles.statL}>Faster onboarding</span></div>
            <div className={styles.stat}><span className={styles.statV}>12,400<em>+</em></span><span className={styles.statL}>Workers certified</span></div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— ENTERPRISE FEATURES</span>
            <h2>Built for the way <em>governance teams</em> operate at scale.</h2>
            <p>Six capabilities that move your workforce from awareness to audit-ready.</p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <h3>SSO, SCIM &amp; HRIS sync</h3>
              <p>Provision and de-provision instantly from your identity provider. Auto-assign curricula by role and team.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
              <h3>Audit-grade evidence</h3>
              <p>One-click exports of completion, scores and credential timestamps. Survives regulator scrutiny by design.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg></div>
              <h3>Custom curricula</h3>
              <p>Build role-specific paths across AI, cyber and compliance. Branded to your organisation, mapped to your policies.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg></div>
              <h3>Workforce analytics</h3>
              <p>Heat-map maturity by team, role, sector and state. Spot at-risk cohorts before your auditor does.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <h3>AU data residency</h3>
              <p>Hosted in Australia. ISO 27001, IRAP-aligned, SOC 2 Type II. Government-ready by default.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <h3>Dedicated success</h3>
              <p>A named success manager, quarterly business reviews and content-refresh briefings when laws change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`} id="government">
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— FOR GOVERNMENT</span>
            <h2>Aligned with <em>APS AI Policy v2.0</em>.</h2>
            <p>The mandatory APS AI training requirements (June and December 2026) plus PSPF, IRAP and state government compliance, on a single panel-ready platform.</p>
          </div>
          <div className={styles.center}>
            <a href="#contact" className="btn btn-ghost">
              Talk to government sales
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint2}`} id="security">
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— SECURITY &amp; TRUST</span>
            <h2>Built on <em>defensible</em> foundations.</h2>
            <p>Hosted in Australia, with the certifications regulated and government buyers require.</p>
          </div>
          <div className={styles.trustRow}>
            {["ISO 27001", "SOC 2 Type II", "IRAP-aligned", "AU data residency"].map((b) => (
              <div key={b} className={styles.trustBadge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className="shell">
          <div className={styles.contactGrid}>
            <div className={styles.contactAside}>
              <span className={styles.eyebrow}>— BOOK A DEMO</span>
              <h2>Ready to <em>roll this out</em>?</h2>
              <p>Book 30 minutes with our enterprise team. We&apos;ll show you the platform on your use case, and map it to your policies and reporting lines.</p>
              <ul className={styles.contactPoints}>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Tailored walkthrough on your use case</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>SSO / SCIM and rollout planning</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Pricing and procurement guidance</li>
              </ul>
            </div>
            <EnterpriseContact />
          </div>
        </div>
      </section>
    </>
  );
}