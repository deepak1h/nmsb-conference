"use client";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="pill-badge" style={{ marginBottom: "12px" }}>✉️ We're Here to Help</span>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>
          Contact <span className="gradient-text">Organizing Secretariat</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Official channels for registration, payment, and sponsorship queries.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Official Contact Details" badge="Razorpay Compliant" defaultOpen={true} icon="📞">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "16px" }}>
            <div className="glass-card">
              <h4 style={{ color: "var(--primary-neon)", marginBottom: "4px" }}>Email</h4>
              <p style={{ fontSize: "0.9rem" }}>
                <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--secondary-neon)" }}>{config.conference.contactEmail}</a>
              </p>
            </div>
            <div className="glass-card">
              <h4 style={{ color: "var(--primary-neon)", marginBottom: "4px" }}>Helpline / Queries</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>[TO BE PROVIDED: Contact Person & Phone number for Razorpay KYC]</p>
            </div>
            <div className="glass-card" style={{ gridColumn: "1 / -1" }}>
              <h4 style={{ color: "var(--primary-neon)", marginBottom: "4px" }}>Postal Address</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>[TO BE PROVIDED: Organizing office at IIT Bombay]</p>
            </div>
          </div>
        </AccordionCard>

        <AccordionCard title="Send Us an Enquiry" badge="Enquiry Form" defaultOpen={true} icon="📨">
          <form style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "16px" }} onSubmit={(e) => { e.preventDefault(); alert("Enquiry submitted!"); }}>
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <input type="text" placeholder="Subject *" required />
            <textarea placeholder="Your Message..." rows="4" required style={{ fontFamily: "inherit" }}></textarea>
            <button type="submit" className="btn-neon" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </form>
        </AccordionCard>
      </div>
    </div>
  );
}
