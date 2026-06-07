import Link from "next/link";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.finalCta}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className={styles.particle} />
      ))}
      <div className="shell">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>— THE STANDARD</span>
          <h2>
            The decisions you make with AI<br />
            will <em>outlive the hype.</em>
          </h2>
          <p>
            Train your workforce on the frameworks regulators are actually using.
            Start today, your next audit is closer than you think.
          </p>
          <div className={styles.buttons}>
            <Link href="/signup" className="btn btn-primary">
              Start your free trial
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/enterprise" className="btn btn-ghost">Talk to sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}