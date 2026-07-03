import Link from "next/link";
import styles from "@/components/Marketing.module.css";

export const metadata = { title: "About · Safai" };

export default function AboutPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className="shell">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link><span>/</span><span>About</span>
          </div>
          <h1>Built by practitioners,<br />for the people <em>regulators trust</em>.</h1>
          <p className={styles.lede}>
            Safai exists because Australian organisations need governance training
            that holds up at audit, not awareness modules that do not. We are a
            small team of working compliance leaders, lawyers and engineers who
            refuse to ship anything we would not use ourselves.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— PRINCIPLES</span>
            <h2>Three things we <em>refuse</em> to compromise on.</h2>
          </div>
          <div className={styles.principles}>
            <div className={styles.principle}>
              <div className={styles.principleN}>— 01</div>
              <h4>Defensibility over delight</h4>
              <p>Every course is designed to survive regulator scrutiny first, then to feel good to take. Our learners are professionally accountable, and we owe them that bar.</p>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleN}>— 02</div>
              <h4>Practitioners, not influencers</h4>
              <p>Our content is authored by working CROs, GCs and regulators, people who have signed the reports that carry real accountability.</p>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleN}>— 03</div>
              <h4>Current with the law</h4>
              <p>When state codes change, our content changes the same week. When ASIC, APRA or the OAIC publish guidance, we ship updates within 30 days.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="careers" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— CAREERS</span>
            <h2>Join us.</h2>
            <p>We are hiring across content, engineering and customer success. All roles based in Melbourne or remote within Australia.</p>
          </div>
          <div className={styles.contactCard}>
            <h3>Open roles · 6</h3>
            <p>Senior content lead (AI governance) · Cyber security curriculum designer · Backend engineer · Customer success (enterprise) · Content marketing lead · Sales development</p>
            <div className={styles.contactRow}>
              <a href="#" className="btn btn-primary">See open roles</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="press">
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— PRESS</span>
            <h2>Media &amp; press.</h2>
            <p>For media enquiries, expert commentary requests or speaker bookings.</p>
          </div>
          <div className={styles.contactCard}>
            <h3>press@safai.au</h3>
            <p>We respond to journalist requests within one business day. Our team is available for expert commentary on AI governance, cyber regulation and workplace compliance reform in Australia.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className="shell">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>— CONTACT</span>
            <h2>Get in <em>touch</em>.</h2>
          </div>
          <div className={styles.contactCard}>
            <h3>We are listening.</h3>
            <p>Whether you have questions about our courses, want to discuss enterprise needs, or just have feedback, we read every message.</p>
            <div className={styles.contactRow}>
              <a href="mailto:hello@safai.au" className="btn btn-primary">hello@safai.au</a>
              <Link href="/enterprise#contact" className="btn btn-ghost">Enterprise sales</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}