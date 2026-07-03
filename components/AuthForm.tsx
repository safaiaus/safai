"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Auth.module.css";

const PILLARS = [
  "AI Governance (primary)",
  "Cyber Security",
  "Workplace Compliance & Risk",
  "All three pillars · Professional plan",
];

export default function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const isSignup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        {isSignup && (
          <div className={styles.trialBadge}>14-day free trial · No credit card required</div>
        )}

        <h1>{isSignup ? <>Start your <em>practice</em>.</> : <>Welcome <em>back</em>.</>}</h1>
        <p className={styles.sub}>
          {isSignup
            ? "Join Australian practitioners certifying across AI, cyber and compliance."
            : "Sign in to continue your AI governance training."}
        </p>

        <div className={styles.ssoRow}>
          <button type="button" className={styles.ssoBtn}><GoogleIcon /> Google</button>
          <button type="button" className={styles.ssoBtn}><AppleIcon /> Apple</button>
        </div>

        <div className={styles.divider}>Or with email</div>

        <form onSubmit={(e) => e.preventDefault()}>
          {isSignup && (
            <div className={styles.field}>
              <label>Full name</label>
              <input type="text" placeholder="Your name" suppressHydrationWarning />
            </div>
          )}

          <div className={styles.field}>
            <label>{isSignup ? "Work email" : "Email address"}</label>
            <input type="email" placeholder="you@company.com" suppressHydrationWarning />
          </div>

          <div className={styles.field}>
            {isSignup ? (
              <label>Password</label>
            ) : (
              <div className={styles.fieldRow}>
                <label>Password</label>
                <Link href="/signin">Forgot password?</Link>
              </div>
            )}
            <div className={styles.passwordWrap}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={isSignup ? "Choose a strong password" : "••••••••"}
                suppressHydrationWarning
              />
              <button
                type="button"
                className={styles.reveal}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {isSignup && (
            <div className={styles.field}>
              <label>Primary training pillar</label>
              <select>
                {PILLARS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className={`btn btn-primary ${styles.cta}`}>
            {isSignup ? "Start free trial" : "Sign in"}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </button>
        </form>

        <div className={styles.footer}>
          {isSignup ? (
            <>Already have an account? <Link href="/signin">Sign in</Link></>
          ) : (
            <>New to Safai? <Link href="/signup">Start free trial</Link></>
          )}
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08z" />
    </svg>
  );
}