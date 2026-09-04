"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Abstracts() {
  const [formData, setFormData] = useState({
    presenterName: "",
    email: "",
    mobile: "",
    affiliation: "",
    title: "",
    track: "Cathode & Anode Chemistry",
    coAuthors: "",
    abstractText: "",
    fileName: ""
  });

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        
        {/* Title Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="agora-subtitle-badge">CALL FOR PAPERS</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.2rem" }}>
            ABSTRACT SUBMISSION
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "10px", maxWidth: "750px", margin: "10px auto 0" }}>
            Submit your latest research on sodium-ion battery science, materials, and commercial deployment for oral or poster presentation at IIT Bombay.
          </p>
        </div>

        {/* Key Deadlines Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "800" }}>STEP 1</span>
            <h4 style={{ fontSize: "1.2rem", margin: "8px 0 4px" }}>Abstract Submission Opens</h4>
            <p style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--agora-text-dark)" }}>{config.dates.abstractOpens}</p>
          </div>

          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "2px solid var(--agora-blue)", boxShadow: "var(--shadow-agora)", position: "relative" }}>
            <span style={{ position: "absolute", top: "-10px", right: "16px", background: "var(--agora-blue)", color: "#fff", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "10px", fontWeight: "800" }}>
              IMPORTANT
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "800" }}>STEP 2</span>
            <h4 style={{ fontSize: "1.2rem", margin: "8px 0 4px" }}>Submission Deadline</h4>
            <p style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--agora-blue)" }}>{config.dates.abstractDeadline}</p>
          </div>

          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "800" }}>STEP 3</span>
            <h4 style={{ fontSize: "1.2rem", margin: "8px 0 4px" }}>Acceptance Notification</h4>
            <p style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--agora-text-dark)" }}>{config.dates.acceptanceNotification}</p>
          </div>
        </div>

        {/* Technical Tracks Grid */}
        <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "36px 40px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", marginBottom: "60px", boxShadow: "var(--shadow-agora)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>TECHNICAL TRACKS & THEMES</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ padding: "16px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", borderLeft: "4px solid var(--agora-blue)" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Track 1: Cathode & Anode Chemistry</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Layered oxides, polyanionic compounds, hard carbon interphases, and novel active materials.</p>
            </div>

            <div style={{ padding: "16px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", borderLeft: "4px solid var(--agora-blue)" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Track 2: Solid Electrolytes & SEI</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Organic/inorganic solid electrolytes, ionic conductivity optimization, and SEI layer stabilization.</p>
            </div>

            <div style={{ padding: "16px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", borderLeft: "4px solid var(--agora-blue)" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Track 3: Cell Manufacturing & Pack Design</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Prismatic & cylindrical cell fabrication, thermal management, and commercial scaling in India.</p>
            </div>

            <div style={{ padding: "16px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", borderLeft: "4px solid var(--agora-blue)" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Track 4: Characterization & Operando Studies</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>In-situ XRD/TEM, degradation mechanisms, safety testing, and lifecycle analysis.</p>
            </div>
          </div>

          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px dashed var(--agora-border-light)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              Need formatting guidelines? Download the official 1-page template.
            </span>
            <button className="btn-agora-outlined" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }} onClick={() => alert("Downloading NMSB-2 Official Abstract Template (.docx)...")}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              DOWNLOAD TEMPLATE (.DOCX)
            </button>
          </div>
        </div>

        {/* Disabled Submission Form Container with Notice */}
        <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "40px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", maxWidth: "850px", margin: "0 auto", boxShadow: "var(--shadow-agora)", position: "relative" }}>
          
          {/* Opening Shortly Callout Card */}
          <div style={{
            backgroundColor: "rgba(67, 97, 238, 0.06)",
            border: "1px solid rgba(67, 97, 238, 0.2)",
            padding: "24px 30px",
            borderRadius: "6px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "var(--agora-blue)",
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <span className="pill-badge" style={{ backgroundColor: "var(--agora-blue)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "800", marginBottom: "6px", display: "inline-block" }}>
                OPENS SHORTLY
              </span>
              <h4 style={{ fontSize: "1.2rem", color: "var(--agora-text-dark)", margin: "4px 0" }}>
                ABSTRACT SUBMISSION OPENING SHORTLY
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)", margin: 0, lineHeight: "1.6" }}>
                Online abstract submission for NMSB-2 will open shortly. Please prepare your manuscript using the formatting template downloadable above.
              </p>
            </div>
          </div>

          {/* Form in Disabled State */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px", opacity: 0.6 }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Presenter Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Submission opening shortly..." 
                  disabled={true}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Submission opening shortly..." 
                  disabled={true}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Mobile Number *</label>
                <input 
                  type="tel" 
                  placeholder="Submission opening shortly..." 
                  disabled={true}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Affiliation / Institute *</label>
                <input 
                  type="text" 
                  placeholder="Submission opening shortly..." 
                  disabled={true}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Select Technical Track *</label>
              <select 
                disabled={true}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
              >
                <option value="">Track 1: Cathode & Anode Chemistry</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Paper Title *</label>
              <input 
                type="text" 
                placeholder="Submission opening shortly..." 
                disabled={true}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Co-Authors (Optional)</label>
              <input 
                type="text" 
                placeholder="Submission opening shortly..." 
                disabled={true}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Abstract Text Summary (Max 300 Words) *</label>
              <textarea 
                rows={4}
                placeholder="Online submission form will open shortly..."
                disabled={true}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", backgroundColor: "rgba(0,0,0,0.03)", cursor: "not-allowed", fontFamily: "inherit" }}
              />
            </div>

            <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end" }}>
              <button 
                type="button" 
                className="btn-agora-outlined" 
                disabled={true} 
                style={{ fontSize: "0.95rem", padding: "14px 32px", cursor: "not-allowed", opacity: 0.7 }}
              >
                SUBMISSION OPENING SHORTLY
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
