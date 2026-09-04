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

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="agora-subtitle-badge">INDUSTRY & SPONSORSHIP PORTAL</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.2rem" }}>
            SPONSORSHIPS & EXHIBITION
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "10px", maxWidth: "750px", margin: "10px auto 0" }}>
            Showcase your sodium-ion battery innovations, cell manufacturing technologies, and active materials to top researchers, investors, and policymakers at IIT Bombay.
          </p>
        </div>

        {/* Start-up Showcase Banner (Opening Shortly Notice) */}
        <div style={{
          backgroundColor: "var(--agora-dark-bg)",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "48px",
          marginBottom: "60px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center"
        }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
              <span className="agora-subtitle-badge" style={{ color: "var(--agora-blue)", borderBottomColor: "var(--agora-blue)" }}>
                PITCH & EXHIBIT
              </span>
              <span className="pill-badge" style={{ backgroundColor: "var(--agora-blue)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "12px", fontSize: "0.7rem", fontWeight: "800" }}>
                OPENS SHORTLY
              </span>
            </div>
            <h2 style={{ fontSize: "2.4rem", lineHeight: "1.2", margin: "16px 0", color: "#FFFFFF" }}>
              START-UP SHOWCASE PORTAL
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#A0A5B5", lineHeight: "1.7", marginBottom: "24px" }}>
              Participating start-ups receive a dedicated exhibition table, a 10-minute investor pitch slot during Session 2, full delegate passes, and inclusion in the NMSB-2 abstract book. Online application opens shortly.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="btn-agora-outlined" disabled={true} style={{ color: "#A0A5B5", borderColor: "#A0A5B5", opacity: 0.7, cursor: "not-allowed" }}>
                START-UP APPLICATION OPENS SHORTLY
              </button>
              <button className="btn-agora-outlined" style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }} onClick={() => alert("Downloading Start-up Showcase Info (.pdf)...")}>
                DOWNLOAD START-UP BROCHURE
              </button>
            </div>
          </div>

          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "32px",
            borderRadius: "6px",
            border: "1px solid rgba(255, 255, 255, 0.12)"
          }}>
            <h4 style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "16px" }}>START-UP PARTICIPATION BENEFITS</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "#D0D5E5", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Dedicated Exhibition Table & Display Space</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 10-Min Live Investor & VC Pitch Slot</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 Full Technical Delegate Passes</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Logo & Profile in Conference Abstract Book</li>
            </ul>
          </div>
        </div>

        {/* Sponsorship Tiers Section */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="agora-subtitle-badge">SPONSORSHIP PACKAGES</span>
            <h2 style={{ fontSize: "2.5rem" }}>PARTNER WITH NMSB-2</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            {/* Platinum Tier */}
            <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "36px", borderRadius: "8px", border: "2px solid #E5E4E2", boxShadow: "var(--shadow-agora)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", right: "20px", background: "#E5E4E2", color: "#0B0C10", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "900" }}>
                PLATINUM TIER
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>PLATINUM SPONSOR</h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>Prime branding, keynote slot, and maximum visibility.</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.9rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Prime Exhibition Booth in Main Hall</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 15-Min Keynote Industry Session Slot</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 5 Complimentary Delegate Passes</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Full Back-Cover Ad in Abstract Book</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> VIP Conference Dinner Hosting Rights</li>
              </ul>

              <button className="btn-agora-blue" style={{ width: "100%" }} onClick={() => { setFormData({ ...formData, tier: "Platinum Sponsor" }); setShowInquiry(true); }}>
                INQUIRE PLATINUM TIER →
              </button>
            </div>

            {/* Gold Tier */}
            <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "36px", borderRadius: "8px", border: "2px solid #FFD700", boxShadow: "var(--shadow-agora)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", right: "20px", background: "#FFD700", color: "#0B0C10", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "900" }}>
                GOLD TIER
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>GOLD SPONSOR</h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>High-profile exhibition and technical session sponsorship.</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.9rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Standard Exhibition Booth</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Technical Session Co-sponsorship</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 3 Complimentary Delegate Passes</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Full-Page Ad in Abstract Book</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Logo on Banners & Website</li>
              </ul>

              <button className="btn-agora-blue" style={{ width: "100%" }} onClick={() => { setFormData({ ...formData, tier: "Gold Sponsor" }); setShowInquiry(true); }}>
                INQUIRE GOLD TIER →
              </button>
            </div>

            {/* Silver Tier */}
            <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "36px", borderRadius: "8px", border: "2px solid #C0C0C0", boxShadow: "var(--shadow-agora)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", right: "20px", background: "#C0C0C0", color: "#0B0C10", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "900" }}>
                SILVER TIER
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>SILVER SPONSOR</h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>Ideal for component suppliers and analytical instrument vendors.</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: "0.9rem", color: "var(--agora-text-dark)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Table-Top Exhibition Stall</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 Complimentary Delegate Passes</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Half-Page Ad in Abstract Book</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Logo on Website & Backdrop</li>
              </ul>

              <button className="btn-agora-outlined" style={{ width: "100%" }} onClick={() => { setFormData({ ...formData, tier: "Silver Sponsor" }); setShowInquiry(true); }}>
                INQUIRE SILVER TIER →
              </button>
            </div>

          </div>
        </div>

        {/* Interactive Sponsorship Inquiry Form Modal / Card */}
        {showInquiry && (
          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "40px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", maxWidth: "800px", margin: "0 auto 60px", boxShadow: "var(--shadow-agora)" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>SPONSORSHIP INQUIRY</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--agora-text-muted)", marginBottom: "24px" }}>
              Submit your company details and our secretariat will get back to you with the custom proposal.
            </p>

            {inquirySubmitted ? (
              <div style={{ backgroundColor: "rgba(46, 125, 50, 0.06)", border: "1px solid #A5D6A7", padding: "28px", borderRadius: "6px", textAlign: "center" }}>
                <h4 style={{ fontSize: "1.3rem", color: "#2E7D32", marginBottom: "6px" }}>INQUIRY RECEIVED!</h4>
                <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem" }}>
                  Thank you, <strong>{formData.contactPerson}</strong> ({formData.companyName}). Our secretariat will contact you at <strong>{formData.email}</strong>.
                </p>
                <button className="btn-agora-outlined" style={{ marginTop: "16px" }} onClick={() => { setInquirySubmitted(false); setShowInquiry(false); }}>
                  CLOSE FORM
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Company / Organization Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sodium Power Systems Pvt Ltd" 
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Contact Person Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Corporate Email *</label>
                    <input 
                      type="email" 
                      placeholder="contact@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Mobile Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 9876543210" 
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Sponsorship Tier of Interest *</label>
                  <select 
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                  >
                    <option value="Platinum Sponsor">Platinum Sponsor</option>
                    <option value="Gold Sponsor">Gold Sponsor</option>
                    <option value="Silver Sponsor">Silver Sponsor</option>
                    <option value="Custom Exhibition Partner">Custom Exhibition Partner</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Message / Special Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide details regarding your exhibition stall or sponsorship query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button type="button" className="btn-agora-outlined" onClick={() => setShowInquiry(false)}>
                    CANCEL
                  </button>
                  <button type="submit" className="btn-agora-blue">
                    SUBMIT SPONSORSHIP INQUIRY →
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
