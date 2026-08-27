"use client";
import { config } from "../../config/variables";

export default function About() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">BUSINESS FORUM</span>
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
              NMSB-2 serves as the nationwide forum to bridge academic breakthroughs with industrial battery scaling. As India accelerates renewable energy adoption, sodium-ion technology provides a strategic, cost-effective alternative to lithium.
            </p>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--agora-blue)" }}>NMSB-1 RECAP</h3>
            <p style={{ color: "var(--agora-text-muted)", lineHeight: "1.8" }}>
              [TO BE PROVIDED: Short recap of NMSB-1 — where and when it was held, number of participants, photographs.]
            </p>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--agora-blue)" }}>ORGANIZERS</h3>
            <p style={{ color: "var(--agora-text-muted)", lineHeight: "1.8" }}>
              Co-organized by <strong>GESH (Department of Energy Science and Engineering, IIT Bombay)</strong> and <strong>Battery Research Society (BRS)</strong>, supported by IoE, IIT Bombay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
