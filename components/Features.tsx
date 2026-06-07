import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="shell">
        <div className={styles.head}>
          <span className={styles.number}>— 04 / FEATURES</span>
          <h2>Built for the way <em>governance teams</em> actually work.</h2>
          <span className={styles.meta}>8 capabilities</span>
        </div>

        <div className={styles.grid}>
          {/* Learning paths — wide */}
          <div className={`${styles.feature} ${styles.wide}`}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
              </div>
              <h3>Role-adaptive <em>learning paths</em></h3>
              <p>Curriculum that reshapes around your title, sector and AI risk surface: General Counsel, Chief Risk Officer, Board Director, Procurement.</p>
            </div>
            <div className={styles.fVisual}>
              <div className={styles.path}>
                <div className={styles.pathItem}><span className={`${styles.step} ${styles.stepDone}`}>1</span><span>AI Regulatory Landscape</span><span className={styles.pathMeta}>12 min</span></div>
                <div className={styles.pathItem}><span className={styles.step}>2</span><span>Risk Register Design</span><span className={styles.pathMeta}>38 min</span></div>
                <div className={styles.pathItem}><span className={`${styles.step} ${styles.stepTodo}`}>3</span><span>Sector Track: APRA</span><span className={styles.pathMeta}>1h 4m</span></div>
              </div>
            </div>
          </div>

          {/* Risk register — tall */}
          <div className={`${styles.feature} ${styles.tall}`}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></svg>
              </div>
              <h3>Live <em>risk register</em></h3>
              <p>Build, version and export an audit-grade AI risk register inside the platform.</p>
            </div>
            <div className={styles.fVisual}>
              <div className={styles.riskBars}>
                {[...Array(8)].map((_, i) => <div key={i} />)}
              </div>
              <div className={styles.riskMeta}><span>8 SYSTEMS</span><span>2 HIGH</span></div>
            </div>
          </div>

          {/* Scenario assessments */}
          <div className={styles.feature}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <h3>Scenario assessments</h3>
              <p>Situational judgement, not multiple choice. Defensible at audit.</p>
            </div>
          </div>

          {/* Verified credentials */}
          <div className={styles.feature}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="6" /><path d="M15.5 13l1.5 9-5-3-5 3 1.5-9" /></svg>
              </div>
              <h3>Verified credentials</h3>
              <p>Tamper-evident certificates with public verification.</p>
            </div>
          </div>

          {/* Workforce analytics — with ring */}
          <div className={styles.feature}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
              </div>
              <h3>Workforce <em>analytics</em></h3>
              <p>Heat-map your governance maturity by team, role and sector.</p>
            </div>
            <div className={`${styles.fVisual} ${styles.ringWrap}`}>
              <div className={styles.ring}>
                <svg width="88" height="88" viewBox="0 0 88 88">
                  <circle cx="44" cy="44" r="36" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
                  <circle cx="44" cy="44" r="36" stroke="#7B5CFF" strokeWidth="6" fill="none" strokeDasharray="226" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className={styles.ringText}>78%</div>
              </div>
              <div className={styles.ringLabel}>COMPLETION<br /><span style={{ color: "var(--text)" }}>Q2 2026</span></div>
            </div>
          </div>

          {/* Live cohorts */}
          <div className={styles.feature}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Live cohorts</h3>
              <p>Quarterly cohorts with sector practitioners and policy specialists.</p>
            </div>
          </div>

          {/* Team workspaces */}
          <div className={styles.feature}>
            <div>
              <div className={styles.fIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg>
              </div>
              <h3>Team workspaces</h3>
              <p>Roll out custom curricula across business units with one click.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}