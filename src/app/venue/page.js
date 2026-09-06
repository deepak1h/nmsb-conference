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
            <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--agora-blue)", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.7-.2-1.4.1-1.7.7l-.8 1.4c-.4.7-.2 1.6.4 2.1l4.4 3.7-2.6 2.6-2.5-.7c-.4-.1-.9.1-1.1.4l-.5.8c-.3.5-.1 1.2.4 1.5l3.8 2.2 2.2 3.8c.3.5 1 .7 1.5.4l.8-.5c.3-.3.5-.7.4-1.1l-.7-2.5 2.6-2.6 3.7 4.4c.5.6 1.4.8 2.1.4l1.4-.8c.6-.3.9-1 .7-1.7z"/></svg>
              AIRPORT TRANSPORT
            </h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem" }}>
              Approx 10 km from Chhatrapati Shivaji Maharaj International Airport (CSMIA). ~35-45 minutes by taxi or auto-rickshaw.
            </p>
          </div>

          <div className="agora-pricing-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--agora-blue)", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>
              ACCOMMODATION
            </h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem" }}>
              [TO BE PROVIDED: List of suggested hotels near IIT Bombay/Powai with special tariffs.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
