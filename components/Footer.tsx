import Link from "next/link";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Certifications", href: "/courses" },
      { label: "Cohorts", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "For organisations",
    links: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Government", href: "/enterprise" },
      { label: "White-label", href: "/enterprise" },
      { label: "Security & trust", href: "/enterprise" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Governance hub", href: "/community" },
      { label: "Frameworks library", href: "/community" },
      { label: "Webinars", href: "/community" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Press", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="safaiLogoGradientFooter" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7B5CFF" />
                      <stop offset="100%" stopColor="#C8FF3D" />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="16" fill="url(#safaiLogoGradientFooter)" />
                  <path d="M10 20L16 8L22 20H19L16 14L13 20H10Z" fill="#0A0C14" />
                </svg>
              </span>
              <span>SAFAI</span>
            </Link>
            <p className={styles.brandText}>
              Workforce training and certification in AI governance, cyber security
              and workplace compliance, built for Australian organisations.
            </p>
            <h6 className={styles.newsletterLabel}>Newsletter</h6>
            <form className={styles.newsletter}>
              <input type="email" placeholder="your@email.com" />
              <button type="button">Subscribe</button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <h6>{col.title}</h6>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>© 2026 SAFAI · MELBOURNE, AUSTRALIA</div>
          <div className={styles.social}>
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
            <a href="#" aria-label="X"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}