"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { config } from "../../config/variables";

export default function Speakers() {
  const allSpeakers = config.speakers || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSpeakers = useMemo(() => {
    return allSpeakers.filter((sp) => {
      const nameMatch = sp.name.toLowerCase().includes(searchTerm.toLowerCase());
      const desigMatch = sp.designation.toLowerCase().includes(searchTerm.toLowerCase());
      const topicMatch = sp.topic && sp.topic !== "NA" && sp.topic.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSearch = nameMatch || desigMatch || topicMatch;

      if (!matchesSearch) return false;

      if (activeCategory === "iit") {
        return sp.designation.toLowerCase().includes("iit");
      }
      if (activeCategory === "iisc_iiser") {
        return sp.designation.toLowerCase().includes("iisc") || sp.designation.toLowerCase().includes("iiser");
      }
      if (activeCategory === "csir_labs") {
        const d = sp.designation.toLowerCase();
        return d.includes("csir") || d.includes("ncl") || d.includes("arci") || d.includes("tcg") || d.includes("iacs");
      }

      return true;
    });
  }, [allSpeakers, searchTerm, activeCategory]);

  if (!config.showSpeakers) {
    return (
      <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "100px 0", minHeight: "85vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Ambient Background Glow */}
            <div style={{
              position: "absolute",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(67, 97, 238, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
              pointerEvents: "none"
            }} />

            {/* Subtitle Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span className="agora-subtitle-badge" style={{ margin: 0 }}>GUESTS & SPEAKERS PORTAL</span>
              <span style={{
                backgroundColor: "var(--agora-blue)",
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontWeight: "800",
                padding: "4px 12px",
                borderRadius: "12px",
                letterSpacing: "1px"
              }}>
                ANNOUNCING SHORTLY
              </span>
            </div>

            {/* Animated Micro Icon */}
            <div style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "rgba(67, 97, 238, 0.08)",
              border: "2px solid var(--agora-blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              color: "var(--agora-blue)",
              boxShadow: "0 10px 25px rgba(67, 97, 238, 0.18)"
            }}>
              <svg width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>

            <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", marginBottom: "16px" }}>
              COMING SOON
            </h1>

            <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", lineHeight: "1.7", maxWidth: "720px", margin: "0 auto 40px" }}>
              We are finalizing an esteemed panel of international and national keynote speakers, academic leaders from premier IITs, IISc & CSIR laboratories, and industry pioneers for <strong>NMSB-2</strong> at IIT Bombay.
            </p>

            {/* Feature Highlights Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              textAlign: "left",
              marginBottom: "44px"
            }}>
              <div style={{
                backgroundColor: "var(--agora-light-bg)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--agora-border-light)"
              }}>
                <div style={{ color: "var(--agora-blue)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <strong style={{ fontSize: "1rem", color: "var(--agora-text-dark)" }}>Plenary & Keynotes</strong>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--agora-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Distinguished lectures on cutting-edge Na-ion materials, cathode design, and solid-state electrolyte breakthroughs.
                </p>
              </div>

              <div style={{
                backgroundColor: "var(--agora-light-bg)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--agora-border-light)"
              }}>
                <div style={{ color: "var(--agora-blue)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <strong style={{ fontSize: "1rem", color: "var(--agora-text-dark)" }}>Industry Stalwarts</strong>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--agora-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Leadership talks from commercial battery cell manufacturers, raw material vendors, and energy storage startups.
                </p>
              </div>

              <div style={{
                backgroundColor: "var(--agora-light-bg)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--agora-border-light)"
              }}>
                <div style={{ color: "var(--agora-blue)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  <strong style={{ fontSize: "1rem", color: "var(--agora-text-dark)" }}>Academic Experts</strong>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--agora-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Top scientists from IISc, IITs, IISERs, and CSIR research labs presenting state-of-the-art battery technologies.
                </p>
              </div>
            </div>

            {/* Bottom Contact Callout */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "rgba(67, 97, 238, 0.05)",
              padding: "16px 28px",
              borderRadius: "50px",
              border: "1px solid rgba(67, 97, 238, 0.2)",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              <span style={{ fontSize: "0.95rem", color: "var(--agora-text-dark)", fontWeight: "600" }}>
                For speaker inquiries or session proposals:
              </span>
              <Link href="/contact" className="btn-agora-blue" style={{ padding: "8px 20px", fontSize: "0.8rem" }}>
                CONTACT SECRETARIAT →
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "100vh" }}>
      <div className="container">
        {/* Top Header Matching About & Other Pages */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="agora-subtitle-badge">INVITED SPEAKERS</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            WORLD-CLASS EXPERTS
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
            Eminent researchers, faculty, and industry leaders from premier national institutes speaking at NMSB-2.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: "20px 24px",
          boxShadow: "var(--shadow-agora)",
          border: "1px solid var(--agora-border-light)",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            {/* Search Input Box */}
            <div style={{ position: "relative", flex: "1 1 300px", maxWidth: "450px" }}>
              <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24" style={{
                position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)"
              }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>

              <input
                type="text"
                placeholder="Search speaker by name or institute (e.g., IIT, IISc, CSIR)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 46px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--agora-border-light)",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "all 0.2s ease",
                  backgroundColor: "var(--agora-light-bg)"
                }}
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", color: "var(--agora-text-muted)", fontWeight: "bold"
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => setActiveCategory("all")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: activeCategory === "all" ? "var(--agora-blue)" : "var(--agora-light-bg)",
                  color: activeCategory === "all" ? "#FFFFFF" : "var(--agora-text-muted)"
                }}
              >
                All ({allSpeakers.length})
              </button>

              <button
                onClick={() => setActiveCategory("iit")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: activeCategory === "iit" ? "var(--agora-blue)" : "var(--agora-light-bg)",
                  color: activeCategory === "iit" ? "#FFFFFF" : "var(--agora-text-muted)"
                }}
              >
                IITs
              </button>

              <button
                onClick={() => setActiveCategory("iisc_iiser")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: activeCategory === "iisc_iiser" ? "var(--agora-blue)" : "var(--agora-light-bg)",
                  color: activeCategory === "iisc_iiser" ? "#FFFFFF" : "var(--agora-text-muted)"
                }}
              >
                IISc & IISERs
              </button>

              <button
                onClick={() => setActiveCategory("csir_labs")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: activeCategory === "csir_labs" ? "var(--agora-blue)" : "var(--agora-light-bg)",
                  color: activeCategory === "csir_labs" ? "#FFFFFF" : "var(--agora-text-muted)"
                }}
              >
                CSIR Labs & R&D
              </button>
            </div>
          </div>

          <div style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", fontWeight: "600" }}>
            Showing <strong>{filteredSpeakers.length}</strong> of {allSpeakers.length} speakers
          </div>
        </div>

        {/* 3 Speakers Per Line Grid */}
        {filteredSpeakers.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "32px"
          }}>
            {filteredSpeakers.map((sp, idx) => (
              <div
                key={idx}
                className="agora-pricing-card speaker-card-hover"
                style={{
                  padding: "32px 24px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  border: "1px solid var(--agora-border-light)",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <div>
                  {/* Speaker Circular Avatar: Black Ring Design */}
                  <div
                    className="speaker-avatar-ring"
                    style={{
                      width: "135px",
                      height: "135px",
                      borderRadius: "50%",
                      padding: "4px",
                      border: "3px solid #000000",
                      backgroundColor: "#FFFFFF",
                      margin: "0 auto 20px",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative"
                    }}
                  >
                    <img
                      src={sp.image}
                      alt={sp.name}
                      className="speaker-avatar-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                        backgroundColor: "#F1F5F9"
                      }}
                    />
                  </div>

                  {/* Speaker Details Section */}
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "800",
                    color: "var(--agora-text-dark)",
                    marginBottom: "8px",
                    lineHeight: "1.3"
                  }}>
                    {sp.name}
                  </h3>

                  {sp.designation && sp.designation.trim() !== "" && (
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 14px",
                      backgroundColor: "rgba(67, 97, 238, 0.08)",
                      borderRadius: "20px",
                      color: "var(--agora-blue)",
                      fontSize: "0.85rem",
                      fontWeight: "700"
                    }}>
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span>{sp.designation}</span>
                    </div>
                  )}

                  {sp.topic && sp.topic !== "NA" && sp.topic.trim() !== "" && (
                    <div style={{
                      fontSize: "0.85rem",
                      color: "var(--agora-text-muted)",
                      backgroundColor: "var(--agora-light-bg)",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1px solid var(--agora-border-light)",
                      marginTop: "14px",
                      lineHeight: "1.5",
                      textAlign: "left"
                    }}>
                      <strong style={{ color: "var(--agora-blue)", display: "block", marginBottom: "4px" }}>Talk Topic:</strong>
                      "{sp.topic}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "60px 24px",
            textAlign: "center",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "var(--shadow-agora)"
          }}>
            <svg width="48" height="48" fill="none" stroke="var(--agora-blue)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 16px" }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <h3 style={{ fontSize: "1.3rem", color: "var(--agora-text-dark)", marginBottom: "8px" }}>No Speakers Found</h3>
            <p style={{ color: "var(--agora-text-muted)", marginBottom: "20px" }}>No speakers match "{searchTerm}". Try clearing your search query or filter.</p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
              className="btn-agora-blue"
              style={{ padding: "10px 24px", fontSize: "0.85rem" }}
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
