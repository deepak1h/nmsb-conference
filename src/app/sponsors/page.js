"use client";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Sponsors() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="pill-badge" style={{ marginBottom: "12px" }}>🚀 Industry & Start-up Portal</span>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
          Start-ups & <span className="gradient-text">Sponsorships</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Showcase your sodium-ion technologies and engage with top researchers & investors.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Start-up Showcase Application" badge="Pitch & Booth" defaultOpen={true} icon="⚡">
          <div style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "12px" }}>
              [TO BE PROVIDED: What participating start-ups receive — dedicated exhibition table, 10-min investor pitch slot, delegate passes.]
            </p>
            <div className="glass-card">
              <h4 style={{ color: "var(--primary-neon)", marginBottom: "6px" }}>Participation Fee:</h4>
              <p>Early Bird: <strong>{config.fees.startup.earlyBird}</strong> | Regular: <strong>{config.fees.startup.regular}</strong></p>
              <button className="btn-neon" style={{ marginTop: "16px" }} onClick={() => alert("Redirecting to Start-up application form...")}>
                Apply for Start-up Slot
              </button>
            </div>
          </div>
        </AccordionCard>

        <AccordionCard title="Sponsorship Packages & Tiers" badge="Sponsors" defaultOpen={true} icon="🤝">
          <div style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
            <p style={{ marginBottom: "16px" }}>
              Sponsorship opportunities open! Download the sponsorship brochure or write directly to <a href={`mailto:${config.sponsors.email}`} style={{ color: "var(--primary-neon)" }}>{config.sponsors.email}</a>.
            </p>
            <button className="btn-outline" style={{ marginBottom: "24px" }} onClick={() => alert("Downloading Sponsorship Brochure...")}>
              📥 Download Sponsorship Brochure (PDF)
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="glass-card" style={{ borderLeft: "4px solid #e5e4e2" }}>
                <h4 style={{ color: "#e5e4e2" }}>Platinum Tier Sponsors</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>[Logos to be displayed upon confirmation]</p>
              </div>
              <div className="glass-card" style={{ borderLeft: "4px solid #ffd700" }}>
                <h4 style={{ color: "#ffd700" }}>Gold Tier Sponsors</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>[Logos to be displayed upon confirmation]</p>
              </div>
              <div className="glass-card" style={{ borderLeft: "4px solid #c0c0c0" }}>
                <h4 style={{ color: "#c0c0c0" }}>Silver Tier Sponsors</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>[Logos to be displayed upon confirmation]</p>
              </div>
            </div>
          </div>
        </AccordionCard>
      </div>
    </div>
  );
}
