"use client";
import Link from "next/link";
import { config } from "../../config/variables";

export default function Venue() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "100vh" }}>
      <div className="container">

        {/* Top Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="agora-subtitle-badge">LOCATION & TRAVEL GUIDE</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            CONFERENCE VENUE
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
            {config.conference.venue}
          </p>
        </div>

        {/* Hero Visual Campus Showcase (Split Dual Cards) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "28px",
          marginBottom: "50px"
        }}>
          {/* ASPIRE Research Park Building Card */}
          <div style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
            border: "1px solid var(--agora-border-light)",
            height: "360px"
          }}>
            <img
              src="/images/venue/aspire_research_park.png"
              alt="ASPIRE - IIT Bombay Research Park"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "28px",
              color: "#FFFFFF"
            }}>
              <span style={{
                display: "inline-block",
                padding: "4px 12px",
                backgroundColor: "var(--agora-blue)",
                color: "#FFFFFF",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "800",
                letterSpacing: "1px",
                marginBottom: "8px",
                width: "fit-content"
              }}>
                PRIMARY VENUE
              </span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#FFFFFF", marginBottom: "4px" }}>
                ASPIRE - IIT Bombay Research Park
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
                State-of-the-art innovation complex & modern convention facilities
              </p>
            </div>
          </div>

          {/* IIT Bombay Scenic Powai Campus Card */}
          <div style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
            border: "1px solid var(--agora-border-light)",
            height: "360px"
          }}>
            <img
              src="/images/venue/iit_bombay_campus.png"
              alt="IIT Bombay Powai Campus"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "28px",
              color: "#FFFFFF"
            }}>
              <span style={{
                display: "inline-block",
                padding: "4px 12px",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                color: "#FFFFFF",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "800",
                letterSpacing: "1px",
                marginBottom: "8px",
                width: "fit-content"
              }}>
                POWAI CAMPUS
              </span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#FFFFFF", marginBottom: "4px" }}>
                IIT Bombay Campus, Mumbai
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
                Nestled along Powai Lake & Sanjay Gandhi National Park
              </p>
            </div>
          </div>
        </div>

        {/* Venue Information & Google Maps Card */}
        <div style={{
          backgroundColor: "#FFFFFF",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          marginBottom: "50px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "28px" }}>
            <div>
              <span className="agora-subtitle-badge">HOST INSTITUTION</span>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--agora-text-dark)", marginTop: "6px" }}>
                ASPIRE - IIT Bombay Research Park Foundation
              </h2>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "1rem", marginTop: "8px", maxWidth: "720px" }}>
                ASPIRE is IIT Bombay's flagship research park foundation designed to facilitate university-industry collaboration, high-tech R&D, and national technology forums.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=IIT+Bombay+Powai+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-agora-blue"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              GET DIRECTIONS ON GOOGLE MAPS
            </a>
          </div>

          {/* Embedded Google Map */}
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--agora-border-light)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.646045558133!2d72.91129997425293!3d19.123177582090714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f6b431718f%3A0xcb1dbf37b12d5930!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Travel & Transport Connectivity Section */}
        <div style={{ marginBottom: "50px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="agora-subtitle-badge">HOW TO REACH</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
              TRAVEL & CONNECTIVITY
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {/* Airport */}
            <div className="agora-pricing-card" style={{ padding: "32px 24px", textAlign: "left", borderRadius: "20px", backgroundColor: "#FFFFFF" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                color: "var(--agora-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.7-.2-1.4.1-1.7.7l-.8 1.4c-.4.7-.2 1.6.4 2.1l4.4 3.7-2.6 2.6-2.5-.7c-.4-.1-.9.1-1.1.4l-.5.8c-.3.5-.1 1.2.4 1.5l3.8 2.2 2.2 3.8c.3.5 1 .7 1.5.4l.8-.5c.3-.3.5-.7.4-1.1l-.7-2.5 2.6-2.6 3.7 4.4c.5.6 1.4.8 2.1.4l1.4-.8c.6-.3.9-1 .7-1.7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                By Air (CSMIA Airport)
              </h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Chhatrapati Shivaji Maharaj International Airport (Terminal 2 - CSIA) is approx. <strong>10 km</strong> from IIT Bombay. ~30–45 minutes travel time via pre-paid taxi, Ola, or Uber.
              </p>
            </div>

            {/* Railway */}
            <div className="agora-pricing-card" style={{ padding: "32px 24px", textAlign: "left", borderRadius: "20px", backgroundColor: "#FFFFFF" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                color: "var(--agora-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                  <path d="M4 11h16"></path>
                  <path d="M12 3v8"></path>
                  <path d="m8 19-3 3"></path>
                  <path d="m16 19 3 3"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                By Train (Railways)
              </h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                <strong>Kanjurmarg (3 km)</strong> & <strong>Vikhroli (4 km)</strong> are nearest local stations. Long-distance hubs: Lokmanya Tilak Terminus (LTT - 9 km) & CSMT (27 km).
              </p>
            </div>

            {/* Auto & Cabs */}
            <div className="agora-pricing-card" style={{ padding: "32px 24px", textAlign: "left", borderRadius: "20px", backgroundColor: "#FFFFFF" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                color: "var(--agora-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.7C1.4 11.1 1 11.8 1 12.5V16c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                Local Taxi & Auto
              </h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                Auto-rickshaws (metered) & rideshare cabs (Uber, Ola) operate 24/7. Ask for <em>IIT Bombay Main Gate (Powai)</em> or <em>Market Gate</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Suggested Accommodation Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid var(--agora-border-light)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="agora-subtitle-badge">STAY & HOTELS</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--agora-text-dark)" }}>
              RECOMMENDED ACCOMMODATION
            </h2>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem", marginTop: "6px" }}>
              Suggested luxury, business, and boutique hotels in Powai near IIT Bombay campus:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Hotel 1 */}
            <div style={{ padding: "24px", border: "1px solid var(--agora-border-light)", borderRadius: "16px", backgroundColor: "var(--agora-light-bg)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--agora-blue)", textTransform: "uppercase" }}>LUXURY 5-STAR</span>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--agora-text-dark)", marginTop: "4px", marginBottom: "4px" }}>
                The Westin Mumbai Powai Lake
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", marginBottom: "12px" }}>
                Overlooking Powai Lake • ~2.0 km from IIT Bombay
              </p>
              <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "var(--agora-blue)" }}>
                Special Conference Tariffs Available
              </div>
            </div>

            {/* Hotel 2 */}
            <div style={{ padding: "24px", border: "1px solid var(--agora-border-light)", borderRadius: "16px", backgroundColor: "var(--agora-light-bg)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--agora-blue)", textTransform: "uppercase" }}>ECO 5-STAR</span>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--agora-text-dark)", marginTop: "4px", marginBottom: "4px" }}>
                Meluha The Fern
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", marginBottom: "12px" }}>
                Hiranandani Gardens, Powai • ~3.0 km from IIT Bombay
              </p>
              <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "var(--agora-blue)" }}>
                Popular for delegates & faculty
              </div>
            </div>

            {/* Hotel 3 */}
            <div style={{ padding: "24px", border: "1px solid var(--agora-border-light)", borderRadius: "16px", backgroundColor: "var(--agora-light-bg)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--agora-blue)", textTransform: "uppercase" }}>BOUTIQUE 4-STAR</span>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--agora-text-dark)", marginTop: "4px", marginBottom: "4px" }}>
                Rodas An Eco Hotel
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", marginBottom: "12px" }}>
                Central Avenue, Powai • ~3.0 km from IIT Bombay
              </p>
              <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "var(--agora-blue)" }}>
                Close to restaurants & shops
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
