import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className="shell"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        <span
          className="font-mono"
          style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Safai · in development
        </span>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.05, margin: 0, color: "var(--text)" }}
        >
          Responsible AI, cyber &amp; compliance,
          <br />
          <em style={{ color: "var(--accent)" }}>built for Australia.</em>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "42ch", margin: 0 }}>
          The Safai foundation is live. From here we build the real homepage section by section.
        </p>
      </main>
    </>
  );
}