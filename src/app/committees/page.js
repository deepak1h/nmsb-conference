"use client";
import { config } from "../../config/variables";

export default function Committees() {
  const organizers = config.organizers || [
    {
      name: "Prof. Amartya Mukhopadhyay",
      role: "Conference Chair",
      department: "Dept. of Metallurgical Engineering & Materials Science",
      org: "IIT Bombay",
      image: "/images/organiser/amartya_mukhopadhyay.jpg"
    },
    {
      name: "Prof. Srinivasan Ramakrishnan",
      role: "Conference Chair",
      department: "Department of Chemistry",
      org: "IIT Bombay",
      image: "/images/organiser/srinivasan_ramakrishnan.jpg"
    }
  ];

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "100vh" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">LEADERSHIP & COMMITTEE</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            CONFERENCE CHAIRS
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "12px", maxWidth: "700px", margin: "12px auto 0" }}>
            Leading scientists and academic convenors spearheading NMSB-2 at IIT Bombay.
          </p>
        </div>

        {/* Conference Chairs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "36px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {organizers.map((c, idx) => (
            <div
              key={idx}
              className="agora-pricing-card speaker-card-hover"
              style={{
                padding: "40px 28px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "20px",
                border: "1px solid var(--agora-border-light)",
                backgroundColor: "#FFFFFF"
              }}
            >
              {/* Black Ring Avatar Frame */}
              <div
                className="speaker-avatar-ring"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  padding: "4px",
                  border: "3px solid #000000",
                  backgroundColor: "#FFFFFF",
                  margin: "0 auto 24px",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}
              >
                <img
                  src={c.image}
                  alt={c.name}
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

              {/* Details */}
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                {c.name}
              </h3>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 16px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                borderRadius: "20px",
                color: "var(--agora-blue)",
                fontSize: "0.85rem",
                fontWeight: "700",
                marginBottom: "12px"
              }}>
                <span>{c.role}</span>
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--agora-text-dark)", fontWeight: "600", marginBottom: "4px" }}>
                {c.department}
              </p>

              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", fontWeight: "500" }}>
                {c.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
