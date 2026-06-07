import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.heroGrid}>
          <div>
            <span className={styles.heroTag}>
              <span className={styles.pill}>NEW</span>
              AI governance · cyber security · workplace compliance
            </span>

            <h1>
              The standard for <em>responsible</em> AI in Australian organisations.
            </h1>

            <p className={styles.lede}>
              Workforce-grade certifications, policy frameworks and board-level
              briefings, anchored in AI governance, with depth across cyber
              security and workplace compliance. Built for compliance, legal and
              risk leaders who are accountable now.
            </p>

            <div className={styles.heroCta}>
              <Link href="/signup" className="btn btn-primary">
                Start learning
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/enterprise" className="btn btn-ghost">
                Book a demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
            </div>

            <div className={styles.heroMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>12,400+</span>
                <span className={styles.metricLabel}>Practitioners certified</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>186</span>
                <span className={styles.metricLabel}>Enterprise customers</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>4.9</span>
                <span className={styles.metricLabel}>Practitioner rating</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.mockupCard}>
              <div className={styles.mockupHead}>
                <div className={styles.mockupTitle}>
                  <span className={styles.dot} />
                  My learning · Q2
                </div>
                <div className={styles.mockupTabs}>
                  <span className={styles.active}>Active</span>
                  <span>Library</span>
                  <span>Certs</span>
                </div>
              </div>

              <div className={styles.mockupRow}>
                <span className={styles.check}>✓</span>
                <div>
                  <div className={styles.name}>AI Risk Register Foundations</div>
                  <div className={styles.meta}>Module 4 of 6 · 48 min</div>
                </div>
                <span className={`${styles.badge} ${styles.green}`}>CORE</span>
                <span className={styles.meta}>82%</span>
              </div>

              <div className={styles.mockupRow}>
                <span className={styles.check}>✓</span>
                <div>
                  <div className={styles.name}>AI Policy Architecture</div>
                  <div className={styles.meta}>Module 2 of 5 · 1h 12m</div>
                </div>
                <span className={`${styles.badge} ${styles.amber}`}>POLICY</span>
                <span className={styles.meta}>64%</span>
              </div>

              <div className={styles.mockupRow}>
                <span className={styles.check}>✓</span>
                <div>
                  <div className={styles.name}>Privacy Act &amp; ADM Disclosure</div>
                  <div className={styles.meta}>Module 1 of 4 · 36 min</div>
                </div>
                <span className={`${styles.badge} ${styles.iris}`}>CYBER</span>
                <span className={styles.meta}>20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}