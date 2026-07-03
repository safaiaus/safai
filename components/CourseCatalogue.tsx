"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./CourseCatalogue.module.css";

type Pillar = "ai" | "cyber" | "compliance";
type Course = {
  id: number;
  title: string;
  pillar: Pillar;
  cat: string;
  modules: number;
  dur: string;
  level: string;
  instructor: string;
  initials: string;
  rating: string;
};

const COURSES: Course[] = [
  { id: 1, title: "AI Regulatory Landscape: AI6, Ethics & Australian Law", pillar: "ai", cat: "Frameworks", modules: 6, dur: "2h 34m", level: "Intermediate", instructor: "L. Tan", initials: "LT", rating: "4.9" },
  { id: 2, title: "Building an AI Risk Register", pillar: "ai", cat: "Risk", modules: 5, dur: "3h 10m", level: "Intermediate", instructor: "P. Nguyen", initials: "PN", rating: "4.8" },
  { id: 3, title: "AI Policy Architecture for Boards", pillar: "ai", cat: "Policy", modules: 4, dur: "1h 48m", level: "Advanced", instructor: "S. Rao", initials: "SR", rating: "4.9" },
  { id: 4, title: "Vendor & Procurement Due Diligence for AI", pillar: "ai", cat: "Procurement", modules: 5, dur: "2h 05m", level: "Intermediate", instructor: "M. Ellis", initials: "ME", rating: "4.7" },
  { id: 5, title: "Privacy Act & Automated Decision-Making", pillar: "ai", cat: "Privacy", modules: 4, dur: "1h 36m", level: "Foundation", instructor: "J. Park", initials: "JP", rating: "4.8" },
  { id: 6, title: "Essential Eight for Governance Leaders", pillar: "cyber", cat: "Frameworks", modules: 6, dur: "2h 20m", level: "Foundation", instructor: "D. Roberts", initials: "DR", rating: "4.7" },
  { id: 7, title: "Cyber Risk Reporting to the Board", pillar: "cyber", cat: "Reporting", modules: 4, dur: "1h 40m", level: "Advanced", instructor: "A. Kaur", initials: "AK", rating: "4.9" },
  { id: 8, title: "Incident Response & Notifiable Data Breaches", pillar: "cyber", cat: "Operations", modules: 5, dur: "2h 12m", level: "Intermediate", instructor: "T. Nguyen", initials: "TN", rating: "4.6" },
  { id: 9, title: "Third-Party & Supply Chain Cyber Risk", pillar: "cyber", cat: "Risk", modules: 5, dur: "2h 30m", level: "Intermediate", instructor: "G. Silva", initials: "GS", rating: "4.7" },
  { id: 10, title: "Workplace Compliance Foundations", pillar: "compliance", cat: "Frameworks", modules: 5, dur: "2h 00m", level: "Foundation", instructor: "H. Adams", initials: "HA", rating: "4.8" },
  { id: 11, title: "Modern Slavery & Supply Chain Obligations", pillar: "compliance", cat: "Regulation", modules: 4, dur: "1h 30m", level: "Intermediate", instructor: "R. Cohen", initials: "RC", rating: "4.7" },
  { id: 12, title: "Building a Speak-Up Culture", pillar: "compliance", cat: "Culture", modules: 4, dur: "1h 20m", level: "Foundation", instructor: "N. Wilson", initials: "NW", rating: "4.9" },
];

const FILTERS: { key: "all" | Pillar; label: string }[] = [
  { key: "all", label: "All courses" },
  { key: "ai", label: "AI Governance" },
  { key: "cyber", label: "Cyber Security" },
  { key: "compliance", label: "Workplace Compliance" },
];

const THUMB: Record<Pillar, string> = { ai: styles.thumbAi, cyber: styles.thumbCyber, compliance: styles.thumbCompliance };
const GLYPH: Record<Pillar, string> = { ai: "AI", cyber: "Cy", compliance: "Wc" };

export default function CourseCatalogue() {
  const [filter, setFilter] = useState<"all" | Pillar>("all");
  const shown = filter === "all" ? COURSES : COURSES.filter((c) => c.pillar === filter);

  return (
    <div className={styles.wrap}>
      <header className={styles.hero}>
        <div className="shell">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Courses</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <h1>Every course, <em>written</em> by people regulators trust.</h1>
              <p className={styles.lede}>
                Courses authored by working compliance leads, regulators, lawyers
                and AI risk practitioners. Self-paced and live cohorts. Always
                current with Australian law.
              </p>
            </div>
            <div>
              <div className={styles.search}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                <input type="text" placeholder="Search courses, frameworks, instructors…" />
                <kbd>⌘ K</kbd>
              </div>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><span className={styles.statVal}>62</span><span className={styles.statLbl}>Courses</span></div>
            <div className={styles.stat}><span className={styles.statVal}>47</span><span className={styles.statLbl}>Instructors</span></div>
            <div className={styles.stat}><span className={styles.statVal}>240<em>h</em></span><span className={styles.statLbl}>Of content</span></div>
            <div className={styles.stat}><span className={styles.statVal}>3</span><span className={styles.statLbl}>Pillars</span></div>
          </div>
        </div>
      </header>

      <div className={styles.filterBar}>
        <div className="shell">
          <div className={styles.pills}>
            {FILTERS.map((f) => {
              const n = f.key === "all" ? COURSES.length : COURSES.filter((c) => c.pillar === f.key).length;
              return (
                <button
                  key={f.key}
                  className={`${styles.pill} ${filter === f.key ? styles.pillActive : ""}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label} ({n})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="shell">
        <div className={styles.grid}>
          {shown.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={`${styles.thumb} ${THUMB[c.pillar]}`}>
                <span className={styles.level}>{c.level}</span>
                <span className={styles.glyph}>{GLYPH[c.pillar]}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.cat}>
                  <span>{c.cat} · {c.modules} MODULES</span>
                  <span className={styles.dur}>{c.dur}</span>
                </div>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.instructor}>
                  <span className={styles.avatar}>{c.initials}</span>
                  <span className={styles.name}>{c.instructor}</span>
                  <span className={styles.rating}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#C8FF3D"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    {c.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}