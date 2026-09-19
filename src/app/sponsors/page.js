"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Sponsors() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    mobile: "",
    tier: "Platinum Sponsor",
    message: ""
  });

  const brochureUrl = config.sponsors?.pdfBrochureUrl || "/files/NMSB-2_Sponsorship_brochure.pdf";

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleTierClick = (tierName) => {
    setFormData((prev) => ({ ...prev, tier: tierName }));
    setShowInquiry(true);
    // Smooth scroll to form if already open
    const formElement = document.getElementById("sponsorship-inquiry-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "100vh" }}>
      <div className="container">

        {/* Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="agora-subtitle-badge">NMSB-2 — SPONSORSHIP OPPORTUNITIES</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", marginTop: "10px" }}>
            PARTNER & SPONSOR NMSB-2
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "16px", maxWidth: "850px", margin: "16px auto 0", lineHeight: "1.75" }}>
            As a sponsor, your organization will play a pivotal role towards enabling the organization of NMSB-2. Your support will enable us to bring academia, national laboratories, industries and start-ups together to discuss Na-ion battery science, showcase technologies and promote collaboration/leadership pertaining to sustainable and India-centric energy storage solutions.
          </p>

          {/* Action Buttons: Download Brochure & Inquire */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="NMSB-2_Sponsorship_brochure.pdf"
              className="btn-agora-blue"
              style={{ padding: "14px 28px", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "10px" }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>DOWNLOAD SPONSORSHIP BROCHURE (PDF)</span>
            </a>

            <button
              onClick={() => handleTierClick("Platinum Sponsor")}
              className="btn-agora-outlined"
              style={{ padding: "14px 28px", fontSize: "0.95rem" }}
            >
              BECOME A SPONSOR →
            </button>
          </div>
        </div>

        {/* Top Featured Sponsor Logos Showcase */}
        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          padding: "36px 40px",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2rem", color: "var(--agora-text-dark)", fontWeight: "900", marginBottom: "28px" }}>
            SPONSORS
          </h2>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "56px",
            flexWrap: "wrap"
          }}>
            {/* VaultIonix Energy Logo Card */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px"
            }}>
              <div className="speaker-card-hover" style={{
                width: "150px",
                height: "105px",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                padding: "14px",
                border: "2px solid rgba(67, 97, 238, 0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src="/images/logo/vaultonix.jpg"
                  alt="VaultIonix Energy Logo"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--agora-text-dark)", display: "block" }}>
                  VaultIonix Energy
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--agora-blue)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Sponsor
                </span>
              </div>
            </div>

            {/* GESH IIT Bombay Logo Card */}
            <a
              href="https://gesh.iitb.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }}
            >
              <div className="speaker-card-hover" style={{
                width: "150px",
                height: "105px",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                padding: "14px",
                border: "2px solid rgba(67, 97, 238, 0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src="/images/logo/gesh.jpg"
                  alt="GESH IIT Bombay Logo"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--agora-text-dark)", display: "block" }}>
                  GESH • IIT Bombay
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--agora-blue)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Sponsor
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Event Key Details Banner */}
        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          padding: "32px 36px",
          marginBottom: "60px"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px"
          }}>
            <div style={{ borderLeft: "4px solid var(--agora-blue)", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--agora-text-muted)", fontWeight: "700", marginBottom: "4px" }}>
                EVENT & DATES
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
                NMSB-2 • 22–24 Nov 2026
              </div>
            </div>

            <div style={{ borderLeft: "4px solid var(--agora-blue)", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--agora-text-muted)", fontWeight: "700", marginBottom: "4px" }}>
                VENUE
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
                Research Park (ASPIRE), IIT Bombay
              </div>
            </div>

            <div style={{ borderLeft: "4px solid var(--agora-blue)", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--agora-text-muted)", fontWeight: "700", marginBottom: "4px" }}>
                CO-ORGANIZED BY
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
                GESH, IIT Bombay & BRS India
              </div>
            </div>

            <div style={{ borderLeft: "4px solid var(--agora-blue)", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--agora-text-muted)", fontWeight: "700", marginBottom: "4px" }}>
                SUPPORTED BY
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
                Institute of Eminence (IoE), IIT Bombay
              </div>
            </div>
          </div>
        </div>

        {/* 4 Sponsorship Tiers Section (Platinum, Gold, Silver, Bronze) */}
        <div style={{ marginBottom: "70px" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span className="agora-subtitle-badge">SPONSORSHIP PACKAGES</span>
            <h2 style={{ fontSize: "2.4rem", color: "var(--agora-text-dark)", marginTop: "6px" }}>
              SELECT YOUR SPONSORSHIP TIER
            </h2>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem", marginTop: "8px" }}>
              Comprehensive packages designed for maximum brand exposure, presentation slots, and exhibition stalls.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "28px"
          }}>

            {/* 1. Platinum Sponsor */}
            <div
              className="agora-pricing-card speaker-card-hover"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 28px",
                borderRadius: "20px",
                border: "2px solid #E5E4E2",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "linear-gradient(135deg, #E5E4E2 0%, #B4B4B4 100%)",
                color: "#0B0C10",
                padding: "4px 14px",
                borderRadius: "14px",
                fontSize: "0.75rem",
                fontWeight: "900",
                letterSpacing: "1px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}>
                PLATINUM TIER
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  PREMIUM PARTNER
                </div>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  PLATINUM SPONSOR
                </h3>
                <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-blue)", marginBottom: "20px" }}>
                  ₹3.5 Lakh
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.92rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>10 min Presentation Slot</strong> during main conference session</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Premium Stall Space</strong> at ASPIRE Research Park</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Name + Logo in all materials pre-event, event and post-event, banners, kits, memento etc.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Mention during inaugural and closing remarks</span>
                  </li>
                </ul>
              </div>

              <button
                className="btn-agora-blue"
                style={{ width: "100%", padding: "12px", fontSize: "0.85rem" }}
                onClick={() => handleTierClick("Platinum Sponsor")}
              >
                INQUIRE PLATINUM TIER →
              </button>
            </div>

            {/* 2. Gold Sponsor */}
            <div
              className="agora-pricing-card speaker-card-hover"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 28px",
                borderRadius: "20px",
                border: "2px solid #D4AF37",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)",
                color: "#0B0C10",
                padding: "4px 14px",
                borderRadius: "14px",
                fontSize: "0.75rem",
                fontWeight: "900",
                letterSpacing: "1px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}>
                GOLD TIER
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "#D4AF37", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  HIGH VISIBILITY
                </div>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  GOLD SPONSOR
                </h3>
                <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "20px" }}>
                  ₹3.0 Lakh
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.92rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>10 min Presentation Slot</strong> during main conference session</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Standard Stall Space</strong> at ASPIRE Research Park</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Name + Logo in all materials pre-event, event and post-event, banners, kits, memento etc.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Mention during inaugural and closing remarks</span>
                  </li>
                </ul>
              </div>

              <button
                className="btn-agora-blue"
                style={{ width: "100%", padding: "12px", fontSize: "0.85rem" }}
                onClick={() => handleTierClick("Gold Sponsor")}
              >
                INQUIRE GOLD TIER →
              </button>
            </div>

            {/* 3. Silver Sponsor */}
            <div
              className="agora-pricing-card speaker-card-hover"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 28px",
                borderRadius: "20px",
                border: "2px solid #A0A0A0",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "linear-gradient(135deg, #C0C0C0 0%, #909090 100%)",
                color: "#FFFFFF",
                padding: "4px 14px",
                borderRadius: "14px",
                fontSize: "0.75rem",
                fontWeight: "900",
                letterSpacing: "1px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}>
                SILVER TIER
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "#808080", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  FEATURED PARTNER
                </div>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  SILVER SPONSOR
                </h3>
                <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "20px" }}>
                  ₹2.5 Lakh
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.92rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>5 min Presentation Slot</strong> during main conference session</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Standard Stall Space</strong> at ASPIRE Research Park</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Name + Logo in all materials pre-event, event and post-event, banners, kits, memento etc.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Mention during inaugural and closing remarks</span>
                  </li>
                </ul>
              </div>

              <button
                className="btn-agora-blue"
                style={{ width: "100%", padding: "12px", fontSize: "0.85rem" }}
                onClick={() => handleTierClick("Silver Sponsor")}
              >
                INQUIRE SILVER TIER →
              </button>
            </div>

            {/* 4. Bronze Sponsor */}
            <div
              className="agora-pricing-card speaker-card-hover"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 28px",
                borderRadius: "20px",
                border: "2px solid #CD7F32",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "linear-gradient(135deg, #CD7F32 0%, #8B5A2B 100%)",
                color: "#FFFFFF",
                padding: "4px 14px",
                borderRadius: "14px",
                fontSize: "0.75rem",
                fontWeight: "900",
                letterSpacing: "1px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}>
                BRONZE TIER
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "#CD7F32", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  ASSOCIATE PARTNER
                </div>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  BRONZE SPONSOR
                </h3>
                <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-text-dark)", marginBottom: "20px" }}>
                  ₹2.0 Lakh
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.92rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Standard Stall Space</strong> at ASPIRE Research Park</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Name + Logo in all promotional materials pre-event, event and post-event, banners, kits, memento etc.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.4" }}>
                    <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Mention during inaugural and closing remarks</span>
                  </li>
                </ul>
              </div>

              <button
                className="btn-agora-blue"
                style={{ width: "100%", padding: "12px", fontSize: "0.85rem" }}
                onClick={() => handleTierClick("Bronze Sponsor")}
              >
                INQUIRE BRONZE TIER →
              </button>
            </div>

          </div>
        </div>

        {/* Sponsorship Benefits Comparison Matrix */}
        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          padding: "40px",
          marginBottom: "70px",
          overflowX: "auto"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="agora-subtitle-badge">BENEFITS COMPARISON MATRIX</span>
            <h2 style={{ fontSize: "2rem", color: "var(--agora-text-dark)", marginTop: "4px" }}>
              COMPARE SPONSORSHIP BENEFITS
            </h2>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--agora-border-light)" }}>
                <th style={{ textAlign: "left", padding: "16px 20px", fontSize: "1rem", color: "var(--agora-text-dark)", fontWeight: "800" }}>Sponsorship Deliverable / Benefit</th>
                <th style={{ textAlign: "center", padding: "16px", fontSize: "0.95rem", color: "var(--agora-blue)", fontWeight: "800", backgroundColor: "rgba(67, 97, 238, 0.05)" }}>Platinum<br /><span style={{ fontSize: "0.8rem", fontWeight: "600" }}>₹3.5 Lakh</span></th>
                <th style={{ textAlign: "center", padding: "16px", fontSize: "0.95rem", color: "#D4AF37", fontWeight: "800" }}>Gold<br /><span style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)", fontWeight: "600" }}>₹3.0 Lakh</span></th>
                <th style={{ textAlign: "center", padding: "16px", fontSize: "0.95rem", color: "#707070", fontWeight: "800" }}>Silver<br /><span style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)", fontWeight: "600" }}>₹2.5 Lakh</span></th>
                <th style={{ textAlign: "center", padding: "16px", fontSize: "0.95rem", color: "#CD7F32", fontWeight: "800" }}>Bronze<br /><span style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)", fontWeight: "600" }}>₹2.0 Lakh</span></th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.92rem", color: "var(--agora-text-dark)" }}>
              <tr style={{ borderBottom: "1px solid var(--agora-border-light)" }}>
                <td style={{ padding: "16px 20px", fontWeight: "700" }}>Name + Logo on all pre-event, event & post-event materials (banners, kits, memento)</td>
                <td style={{ textAlign: "center", padding: "16px", backgroundColor: "rgba(67, 97, 238, 0.03)", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--agora-border-light)" }}>
                <td style={{ padding: "16px 20px", fontWeight: "700" }}>Special Mention during Inaugural & Closing Remarks</td>
                <td style={{ textAlign: "center", padding: "16px", backgroundColor: "rgba(67, 97, 238, 0.03)", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "bold", color: "#2E7D32" }}>✓ Included</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--agora-border-light)" }}>
                <td style={{ padding: "16px 20px", fontWeight: "700" }}>Corporate Technical Presentation Slot</td>
                <td style={{ textAlign: "center", padding: "16px", backgroundColor: "rgba(67, 97, 238, 0.03)", fontWeight: "800", color: "var(--agora-blue)" }}>10 Minutes</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "800", color: "var(--agora-text-dark)" }}>10 Minutes</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "800", color: "var(--agora-text-dark)" }}>5 Minutes</td>
                <td style={{ textAlign: "center", padding: "16px", color: "var(--agora-text-muted)" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "16px 20px", fontWeight: "700" }}>Exhibition Stall Allocation</td>
                <td style={{ textAlign: "center", padding: "16px", backgroundColor: "rgba(67, 97, 238, 0.03)", fontWeight: "800", color: "var(--agora-blue)" }}>Premium Stall</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "700" }}>Standard Stall</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "700" }}>Standard Stall</td>
                <td style={{ textAlign: "center", padding: "16px", fontWeight: "700" }}>Standard Stall</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sponsorship Inquiry Form Section */}
        <div id="sponsorship-inquiry-section" style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          padding: "44px",
          maxWidth: "850px",
          margin: "0 auto 70px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="agora-subtitle-badge">EXPRESS YOUR INTEREST</span>
            <h3 style={{ fontSize: "2.2rem", color: "var(--agora-text-dark)", marginTop: "6px" }}>
              SPONSORSHIP & EXHIBITION INQUIRY
            </h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.98rem", marginTop: "8px" }}>
              Fill out the form below or contact the NMSB-2 Secretariat directly at <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--agora-blue)", fontWeight: "700" }}>{config.conference.contactEmail}</a>.
            </p>
          </div>

          {inquirySubmitted ? (
            <div style={{ backgroundColor: "rgba(46, 125, 50, 0.06)", border: "1.5px solid #A5D6A7", padding: "36px", borderRadius: "16px", textAlign: "center" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#2E7D32", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 style={{ fontSize: "1.5rem", color: "#2E7D32", marginBottom: "8px", fontWeight: "800" }}>
                THANK YOU FOR YOUR INTEREST!
              </h4>
              <p style={{ color: "var(--agora-text-dark)", fontSize: "1rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto 20px" }}>
                We have received your sponsorship inquiry for <strong>{formData.companyName || "your organization"}</strong> ({formData.tier}). Our organizing committee will contact <strong>{formData.contactPerson}</strong> at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                className="btn-agora-blue"
                onClick={() => { setInquirySubmitted(false); }}
                style={{ padding: "10px 24px" }}
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sodium Energy Technologies Pvt Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      border: "1.5px solid var(--agora-border-light)",
                      fontSize: "0.95rem",
                      backgroundColor: "var(--agora-light-bg)",
                      outline: "none"
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      border: "1.5px solid var(--agora-border-light)",
                      fontSize: "0.95rem",
                      backgroundColor: "var(--agora-light-bg)",
                      outline: "none"
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="corporate@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      border: "1.5px solid var(--agora-border-light)",
                      fontSize: "0.95rem",
                      backgroundColor: "var(--agora-light-bg)",
                      outline: "none"
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      border: "1.5px solid var(--agora-border-light)",
                      fontSize: "0.95rem",
                      backgroundColor: "var(--agora-light-bg)",
                      outline: "none"
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  Sponsorship Tier of Interest *
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    border: "1.5px solid var(--agora-border-light)",
                    fontSize: "0.95rem",
                    backgroundColor: "var(--agora-light-bg)",
                    outline: "none"
                  }}
                >
                  <option value="Platinum Sponsor">Platinum Sponsor — ₹3.5 Lakh</option>
                  <option value="Gold Sponsor">Gold Sponsor — ₹3.0 Lakh</option>
                  <option value="Silver Sponsor">Silver Sponsor — ₹2.5 Lakh</option>
                  <option value="Bronze Sponsor">Bronze Sponsor — ₹2.0 Lakh</option>
                  <option value="Custom Exhibition Partner">Custom Exhibition / Startup Partner</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                  Message / Special Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your requested stall setup, presentation topic, or partnership query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    border: "1.5px solid var(--agora-border-light)",
                    fontSize: "0.95rem",
                    backgroundColor: "var(--agora-light-bg)",
                    outline: "none",
                    fontFamily: "inherit"
                  }}
                />
              </div>

              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <button
                  type="submit"
                  className="btn-agora-blue"
                  style={{ padding: "14px 36px", fontSize: "1rem" }}
                >
                  SUBMIT SPONSORSHIP INQUIRY →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Download Brochure Callout Banner */}
        <div style={{
          backgroundColor: "var(--agora-dark-navy)",
          color: "#FFFFFF",
          borderRadius: "20px",
          padding: "48px 40px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          position: "relative",
          overflow: "hidden"
        }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "12px", color: "#FFFFFF" }}>
            DOWNLOAD THE OFFICIAL SPONSORSHIP BROCHURE
          </h3>
          <p style={{ color: "#A0A5B5", fontSize: "1.05rem", maxWidth: "700px", margin: "0 auto 28px", lineHeight: "1.6" }}>
            For more details about sponsorship opportunities, please download the NMSB-2 official brochure PDF or email <strong style={{ color: "#FFFFFF" }}>{config.conference.contactEmail}</strong>.
          </p>

          <a
            href={brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="NMSB-2_Sponsorship_brochure.pdf"
            className="btn-agora-blue"
            style={{ padding: "14px 32px", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>DOWNLOAD NMSB-2 SPONSORSHIP BROCHURE (PDF)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
