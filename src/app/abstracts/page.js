"use client";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Abstracts() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="pill-badge" style={{ marginBottom: "12px" }}>📄 Call for Papers</span>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
          Abstract <span className="gradient-text">Submission</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Submit your latest sodium-ion battery research for oral or poster presentations.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Submission Guidelines & Templates" badge="Guidelines" defaultOpen={true} icon="📋">
          <div style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "12px" }}>
              [TO BE PROVIDED: Word limit, formatting rules, and official template file.]
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", margin: "16px 0" }}>
              <button className="btn-neon" onClick={() => alert("Downloading Abstract Template (.docx)...")}>
                📥 Download Template (.docx)
              </button>
            </div>
            <div className="glass-card" style={{ marginTop: "16px" }}>
              <h4 style={{ color: "var(--secondary-neon)", marginBottom: "6px" }}>🏆 Student Poster Awards</h4>
              <p style={{ fontSize: "0.85rem" }}>
                [TO BE PROVIDED: Details regarding cash prizes and certificates for top student poster presenters.]
              </p>
            </div>
          </div>
        </AccordionCard>

        <AccordionCard title="Submit via Form" badge="Upload" defaultOpen={true} icon="📤">
          <div style={{ marginTop: "16px" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "16px", fontSize: "0.9rem" }}>
              Upload your abstract document below (Option C Embedded mechanism):
            </p>
            <div style={{ 
              width: "100%", 
              height: "400px", 
              background: "rgba(15, 23, 42, 0.8)", 
              border: "1px dashed var(--border-glow)", 
              borderRadius: "16px", 
              display: "flex", 
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center",
              gap: "12px"
            }}>
              <div style={{ fontSize: "3rem" }}>📂</div>
              <p style={{ color: "var(--primary-neon)", fontWeight: "600" }}>Embedded Google / MS Form Portal Placeholder</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>[Drop files or embed form frame]</p>
            </div>
          </div>
        </AccordionCard>
      </div>
    </div>
  );
}
