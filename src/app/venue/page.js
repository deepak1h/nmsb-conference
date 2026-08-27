"use client";
import { config } from "../../config/variables";

export default function Venue() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">LOCATION & MAP</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            VENUE & TRAVEL
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px" }}>
            {config.conference.venue}
          </p>
        </div>

        <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "40px", borderRadius: "12px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.6rem", marginBottom: "16px" }}>ASPIRE - IIT BOMBAY RESEARCH PARK</h3>
          <p style={{ color: "var(--agora-text-muted)", marginBottom: "24px" }}>
            The state-of-the-art research park at IIT Bombay offers modern auditoriums and exhibition halls for technical conferences.
          </p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.646045558133!2d72.91129997425293!3d19.123177582090714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f6b431718f%3A0xcb1dbf37b12d5930!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: "8px" }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--agora-blue)" }}>✈️ AIRPORT TRANSPORT</h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem" }}>
              Approx 10 km from Chhatrapati Shivaji Maharaj International Airport (CSMIA). ~35-45 minutes by taxi or auto-rickshaw.
            </p>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--agora-blue)" }}>🏨 ACCOMMODATION</h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem" }}>
              [TO BE PROVIDED: List of suggested hotels near IIT Bombay/Powai with special tariffs.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
