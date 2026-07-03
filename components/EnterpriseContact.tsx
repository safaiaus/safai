"use client";

import { useState } from "react";
import styles from "./Marketing.module.css";

export default function EnterpriseContact() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.formCard}>
        <div className={styles.sent}>
          <h3>Thanks — we&apos;ll be in touch.</h3>
          <p>Our enterprise team will reach out within one business day to arrange your demo.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className={styles.fieldTwo}>
        <div className={styles.field}>
          <label>Full name</label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div className={styles.field}>
          <label>Work email</label>
          <input type="email" placeholder="you@org.gov.au" required />
        </div>
      </div>
      <div className={styles.field}>
        <label>Organisation</label>
        <input type="text" placeholder="Your organisation" required />
      </div>
      <div className={styles.fieldTwo}>
        <div className={styles.field}>
          <label>Team size</label>
          <select>
            <option>25 – 100</option>
            <option>100 – 500</option>
            <option>500 – 2,000</option>
            <option>2,000+</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Primary pillar</label>
          <select>
            <option>AI Governance</option>
            <option>Cyber Security</option>
            <option>Workplace Compliance</option>
            <option>All three</option>
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label>What are you looking to roll out?</label>
        <textarea placeholder="A sentence or two about your goals and timeline." />
      </div>
      <button type="submit" className={`btn btn-primary ${styles.formCta}`}>
        Book a demo
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
      </button>
    </form>
  );
}