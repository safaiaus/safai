import styles from "./SocialProof.module.css";

const LOGOS = [
  { name: "COMMONWEALTH BANK", sans: true },
  { name: "Macquarie", sans: false },
  { name: "TELSTRA", sans: true },
  { name: "Allens", sans: false },
  { name: "DELOITTE", sans: true },
  { name: "Westpac", sans: false },
  { name: "QBE", sans: true },
  { name: "King & Wood Mallesons", sans: false },
  { name: "NSW GOV", sans: true },
  { name: "PwC", sans: false },
];

export default function SocialProof() {
  return (
    <section className={styles.social}>
      <div className="shell">
        <div className={styles.head}>
          Trusted by governance leaders at Australia&apos;s most regulated organisations
        </div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className={`${styles.item} ${logo.sans ? styles.sans : ""}`}>
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}