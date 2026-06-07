import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`shell ${styles.navInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <svg viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="safaiLogoGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7B5CFF" />
                  <stop offset="100%" stopColor="#C8FF3D" />
                </linearGradient>
              </defs>
              <circle cx="16" cy="16" r="16" fill="url(#safaiLogoGradient)" />
              <path d="M10 20L16 8L22 20H19L16 14L13 20H10Z" fill="#0A0C14" />
            </svg>
          </span>
          <span>SAFAI</span>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/enterprise">Enterprise</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>

        <div className={styles.navActions}>
          <Link href="/signin" className={styles.navLogin}>Sign in</Link>
          <Link href="/signup" className="btn btn-primary">
            Get started
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}