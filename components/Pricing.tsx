"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Pricing.module.css";

type Feature = { text: string; included: boolean };
type Plan = {
  tier: string;
  name: string;
  accentName?: boolean;
  desc: string;
  currency?: string;
  figure: string;
  figureCustom?: boolean;
  per?: string;
  billing: string;
  ctaLabel: string;
  ctaHref: string;
  ctaPrimary?: boolean;
  featured?: boolean;
  popular?: string;
  features: Feature[];
};

const FOUNDATION: Plan = {
  tier: "— Practitioner",
  name: "Foundation",
  desc: "For individuals starting their AI governance practice.",
  currency: "A$",
  figure: "49",
  per: "/ month",
  billing: "Billed annually · A$588",
  ctaLabel: "Start free trial",
  ctaHref: "/signup",
  features: [
    { text: "Access to 14 foundation courses", included: true },
    { text: "Public credential on completion", included: true },
    { text: "Capability points & streak tracking", included: true },
    { text: "Sector tracks", included: false },
    { text: "Live cohorts", included: false },
  ],
};

const PROFESSIONAL: Plan = {
  tier: "— Practitioner",
  name: "Professional",
  accentName: true,
  desc: "Full library, sector tracks, live cohort access and verifiable credentials.",
  currency: "A$",
  figure: "119",
  per: "/ month",
  billing: "Billed annually · A$1,428",
  ctaLabel: "Start free trial",
  ctaHref: "/signup",
  ctaPrimary: true,
  featured: true,
  popular: "Most chosen",
  features: [
    { text: "Full course library · 62+ courses", included: true },
    { text: "All sector tracks (Fin, Health, Gov)", included: true },
    { text: "Quarterly live cohort enrolment", included: true },
    { text: "Tamper-evident verified credentials", included: true },
    { text: "Practitioner community access", included: true },
  ],
};

const ENTERPRISE: Plan = {
  tier: "— Workforce",
  name: "Enterprise",
  desc: "For teams and organisations rolling out AI governance at scale.",
  figure: "Custom",
  figureCustom: true,
  billing: "From A$45,000 annual · 25+ seats",
  ctaLabel: "Talk to sales",
  ctaHref: "/enterprise",
  features: [
    { text: "Everything in Professional", included: true },
    { text: "SSO, SCIM, HRIS integration", included: true },
    { text: "Custom curricula & white-label", included: true },
    { text: "Workforce analytics & reporting", included: true },
    { text: "Dedicated success manager", included: true },
    { text: "Audit-ready evidence exports", included: true },
  ],
};

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`${styles.card} ${plan.featured ? styles.featured : ""}`}>
      {plan.popular && <span className={styles.popular}>{plan.popular}</span>}
      <span className={styles.tier}>{plan.tier}</span>
      <div className={styles.name}>
        {plan.accentName ? <em className={styles.nameAccent}>{plan.name}</em> : plan.name}
      </div>
      <p className={styles.desc}>{plan.desc}</p>

      <div className={styles.amount}>
        {plan.currency && <span className={styles.currency}>{plan.currency}</span>}
        <span className={`${styles.figure} ${plan.figureCustom ? styles.figureCustom : ""}`}>
          {plan.figure}
        </span>
        {plan.per && <span className={styles.per}>{plan.per}</span>}
      </div>
      <div className={styles.billing}>{plan.billing}</div>

      <Link href={plan.ctaHref} className={`btn ${plan.ctaPrimary ? "btn-primary" : "btn-ghost"} ${styles.cta}`}>
        {plan.ctaLabel}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
      </Link>

      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f.text} className={f.included ? "" : styles.muted}>
            {f.included ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /></svg>
            )}
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const [view, setView] = useState<"individual" | "enterprise">("individual");
  const plans = view === "individual" ? [FOUNDATION, PROFESSIONAL] : [ENTERPRISE];

  return (
    <section className={styles.section} id="pricing">
      <div className="shell">
        <div className={styles.head}>
          <span className={styles.eyebrow}>— 09 / PRICING</span>
          <h2>
            Simple pricing.<br />
            <em>Defensible</em> ROI.
          </h2>
          <p>
            Choose individual certifications or unified workforce licensing. All
            plans include AU data residency and quarterly content refreshes.
          </p>
          <div className={styles.toggle}>
            <button
              className={view === "individual" ? styles.toggleActive : ""}
              onClick={() => setView("individual")}
            >
              Individuals
            </button>
            <button
              className={view === "enterprise" ? styles.toggleActive : ""}
              onClick={() => setView("enterprise")}
            >
              Enterprise
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}