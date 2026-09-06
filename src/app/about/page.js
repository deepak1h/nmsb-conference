"use client";
import Link from "next/link";
import { config } from "../../config/variables";

export default function About() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">NATIONAL FORUM</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            ABOUT NMSB-2
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
            {config.conference.tagline}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--agora-blue)" }}>MISSION & VISION</h3>
            <p style={{ color: "var(--agora-text-muted)", lineHeight: "1.8" }}>
              NMSB-2 serves as the premier nationwide forum to bridge academic breakthroughs with industrial battery scaling. As India accelerates renewable energy adoption, sodium-ion technology provides a strategic, sustainable, and cost-effective alternative to lithium-ion systems.
            </p>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--agora-blue)" }}>NMSB-1 LEGACY</h3>
            <p style={{ color: "var(--agora-text-muted)", lineHeight: "1.8", marginBottom: "16px" }}>
              The 1st National Meeting on Sodium(-ion) Batteries held on October 4–6, 2024, at IIT Bombay brought together 250+ delegates, 28 invited lectures, 42 posters, and marked the official launch of the Battery Research Society (of India).
            </p>
            <Link href="/recap" style={{ color: "var(--agora-blue)", fontWeight: "700", fontSize: "0.9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              EXPLORE NMSB-1 RETROSPECTIVE & GALLERY →
            </Link>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--agora-blue)" }}>ORGANIZERS & SPONSORS</h3>
            <p style={{ color: "var(--agora-text-muted)", lineHeight: "1.8" }}>
              Organized by the <strong>IITB Research Hub for Green Energy and Sustainability (GESH)</strong> and the <strong>Advanced Batteries & Ceramics Laboratory</strong>, endorsed by the <strong>Battery Research Society (of India)</strong> and <strong>The Electrochemical Society of India</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
