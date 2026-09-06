"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "General Inquiry",
          message: ""
        });
      } else {
        setErrorMsg(data.error || "Failed to deliver enquiry. Please try again.");
      }
    } catch (err) {
      console.error("[CONTACT FORM SUBMIT ERROR]:", err);
      setErrorMsg("Network error sending enquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">

        {/* Page Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">ORGANIZING SECRETARIAT</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.4rem", marginTop: "10px" }}>
            CONTACT OUR TEAM
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0", lineHeight: "1.7" }}>
            Have questions about delegate registrations, payment support, sponsorships, or venue travel? Reach out to the NMSB-2 organizing team.
          </p>
        </div>

        {/* Organizing Team Spotlight Showcase */}
        <div style={{ maxWidth: "1050px", margin: "0 auto 70px" }}>
          <div style={{
            backgroundColor: "var(--agora-card-bg)",
            borderRadius: "12px",
            border: "1px solid var(--agora-border-light)",
            overflow: "hidden",
            boxShadow: "var(--shadow-agora)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "0"
          }}>
            {/* Team Photo Container */}
            <div style={{ position: "relative", minHeight: "360px", overflow: "hidden" }}>
              <img 
                src="/images/gallary/team_pic.JPG" 
                alt="NMSB Organizing Committee & Team at IIT Bombay"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
              />
              <span style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                backgroundColor: "var(--agora-blue)",
                color: "#FFFFFF",
                fontSize: "0.78rem",
                fontWeight: "800",
                padding: "6px 14px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                letterSpacing: "0.5px"
              }}>
                NMSB ORGANIZING TEAM • IIT BOMBAY
              </span>
            </div>

            {/* Team Description & Highlights */}
            <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="agora-subtitle-badge" style={{ marginBottom: "12px" }}>CONVENERS & SECRETARIAT</span>
              <h2 style={{ fontSize: "2rem", color: "var(--agora-text-dark)", marginBottom: "16px", lineHeight: "1.2" }}>
                Dedicated to Advancing Energy Innovation
              </h2>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
                Led by <strong>Prof. Amartya Mukhopadhyay</strong> (Convener) and <strong>Prof. Srinivasan Ramakrishnan</strong> (co-Convener), our committee of faculty members, postdoctoral scholars, and research fellows at IIT Bombay ensures a seamless conference experience.
              </p>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "0.9rem", color: "var(--agora-text-dark)", fontWeight: "600" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  IIT Bombay Hub
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  GESH & ABCL Labs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards & Enquiry Form Grid */}
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "start" }}>

          {/* Contact Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Email Card */}
            <div style={{
              backgroundColor: "var(--agora-card-bg)",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid var(--agora-border-light)",
              boxShadow: "var(--shadow-agora)"
            }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "rgba(67, 97, 238, 0.1)", color: "var(--agora-blue)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--agora-text-dark)" }}>Email Secretariat</h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem", marginBottom: "12px" }}>
                For general queries, registrations, and official payment receipts:
              </p>
              <a 
                href={`mailto:${config.conference.contactEmail}`}
                style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--agora-blue)", textDecoration: "none" }}
              >
                {config.conference.contactEmail}
              </a>
            </div>

            {/* Address Card */}
            <div style={{
              backgroundColor: "var(--agora-card-bg)",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid var(--agora-border-light)",
              boxShadow: "var(--shadow-agora)"
            }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "rgba(67, 97, 238, 0.1)", color: "var(--agora-blue)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--agora-text-dark)" }}>Organizing Secretariat Address</h3>
              <p style={{ color: "var(--agora-text-dark)", fontSize: "0.95rem", lineHeight: "1.6", fontWeight: "600", margin: 0 }}>
                NMSB-2 Conference Secretariat<br />
                IITB Research Hub for Green Energy and Sustainability (GESH)<br />
                Department of Energy Science and Engineering / MEMS<br />
                IIT Bombay, Powai, Mumbai - 400076, India
              </p>
            </div>

            {/* Key Contacts */}
            <div style={{
              backgroundColor: "var(--agora-card-bg)",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid var(--agora-border-light)",
              boxShadow: "var(--shadow-agora)"
            }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--agora-text-dark)" }}>Conveners</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <div>
                  <div style={{ fontWeight: "700", color: "var(--agora-text-dark)" }}>Prof. Amartya Mukhopadhyay</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Convener, NMSB-2 • IIT Bombay</div>
                </div>
                <div>
                  <div style={{ fontWeight: "700", color: "var(--agora-text-dark)" }}>Prof. Srinivasan Ramakrishnan</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>co-Convener, NMSB-2 • IIT Bombay</div>
                </div>
              </div>
            </div>

          </div>

          {/* Enquiry Form Column */}
          <div style={{
            backgroundColor: "var(--agora-card-bg)",
            padding: "40px",
            borderRadius: "8px",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "var(--shadow-agora)"
          }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "8px", color: "var(--agora-text-dark)" }}>
              Send Us a Message
            </h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem", marginBottom: "28px" }}>
              Fill out the form below and our secretariat will respond within 24 hours.
            </p>

            {submitted ? (
              <div style={{
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                border: "1px solid var(--agora-blue)",
                borderRadius: "6px",
                padding: "24px",
                textAlign: "center",
                color: "var(--agora-blue)"
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "12px" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h4 style={{ fontSize: "1.2rem", color: "var(--agora-text-dark)", marginBottom: "6px" }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)", margin: 0 }}>
                  Thank you for reaching out. The NMSB-2 Secretariat will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", color: "var(--agora-text-dark)" }}>
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Prof. / Dr. / Mr. / Ms. Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "4px",
                      border: "1px solid var(--agora-border-light)",
                      backgroundColor: "var(--agora-light-bg)",
                      color: "var(--agora-text-dark)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", color: "var(--agora-text-dark)" }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="your.email@institution.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "4px",
                      border: "1px solid var(--agora-border-light)",
                      backgroundColor: "var(--agora-light-bg)",
                      color: "var(--agora-text-dark)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", color: "var(--agora-text-dark)" }}>
                    Inquiry Category
                  </label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "4px",
                      border: "1px solid var(--agora-border-light)",
                      backgroundColor: "var(--agora-light-bg)",
                      color: "var(--agora-text-dark)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Delegate Registration">Delegate Registration & Fee Query</option>
                    <option value="Industry Sponsorship">Industry Sponsorship & Stall Booking</option>
                    <option value="Abstract & Poster">Abstract / Poster Presentation Query</option>
                    <option value="Accommodation & Travel">Accommodation & Travel Assistance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", color: "var(--agora-text-dark)" }}>
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Brief subject of your query"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "4px",
                      border: "1px solid var(--agora-border-light)",
                      backgroundColor: "var(--agora-light-bg)",
                      color: "var(--agora-text-dark)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", color: "var(--agora-text-dark)" }}>
                    Your Message *
                  </label>
                  <textarea 
                    rows="5"
                    required
                    placeholder="Please details your question or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "4px",
                      border: "1px solid var(--agora-border-light)",
                      backgroundColor: "var(--agora-light-bg)",
                      color: "var(--agora-text-dark)",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none"
                    }}
                  />
                </div>

                {errorMsg && (
                  <div style={{
                    backgroundColor: "#FFEBEE",
                    border: "1px solid #FFCDD2",
                    borderRadius: "4px",
                    padding: "12px 16px",
                    color: "#C62828",
                    fontSize: "0.9rem"
                  }}>
                    {errorMsg}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn-agora-blue" 
                  disabled={isSubmitting}
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "16px", opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? "DISPATCHING ENQUIRY..." : "SEND ENQUIRY TO SECRETARIAT →"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
