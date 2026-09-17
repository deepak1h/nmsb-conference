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

        {/* Conference Chairs Unified Layout: (details photo | photo2 detail) */}
        <div
          className="committees-layout-container"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            padding: "44px 36px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "36px",
            alignItems: "center"
          }}
        >
          {/* Left Member: Prof. Amartya Mukhopadhyay (Details | Photo) */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "24px",
            textAlign: "right"
          }}>
            {/* Details */}
            <div style={{ flex: "1" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "6px", lineHeight: "1.3" }}>
                {organizers[0].name}
              </h3>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 14px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                borderRadius: "20px",
                color: "var(--agora-blue)",
                fontSize: "0.82rem",
                fontWeight: "700",
                marginBottom: "10px"
              }}>
                <span>{organizers[0].role}</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--agora-text-dark)", fontWeight: "600", marginBottom: "3px" }}>
                {organizers[0].department}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--agora-text-muted)", fontWeight: "500" }}>
                {organizers[0].org}
              </p>
            </div>

            {/* Photo */}
            <div
              className="speaker-avatar-ring"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                padding: "4px",
                border: "3px solid #000000",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <img
                src={organizers[0].image}
                alt={organizers[0].name}
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
          </div>

          {/* Central Vertical Divider Line | (Faded at both top & bottom ends) */}
          <div style={{
            width: "2px",
            height: "100%",
            minHeight: "150px",
            background: "linear-gradient(to bottom, transparent 0%, var(--agora-blue) 20%, var(--agora-blue) 80%, transparent 100%)",
            opacity: 0.8,
            borderRadius: "2px"
          }} />

          {/* Right Member: Prof. Srinivasan Ramakrishnan (Photo2 | Details) */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "24px",
            textAlign: "left"
          }}>
            {/* Photo */}
            <div
              className="speaker-avatar-ring"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                padding: "4px",
                border: "3px solid #000000",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <img
                src={organizers[1].image}
                alt={organizers[1].name}
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
            <div style={{ flex: "1" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "6px", lineHeight: "1.3" }}>
                {organizers[1].name}
              </h3>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 14px",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                borderRadius: "20px",
                color: "var(--agora-blue)",
                fontSize: "0.82rem",
                fontWeight: "700",
                marginBottom: "10px"
              }}>
                <span>{organizers[1].role}</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--agora-text-dark)", fontWeight: "600", marginBottom: "3px" }}>
                {organizers[1].department}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--agora-text-muted)", fontWeight: "500" }}>
                {organizers[1].org}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
