"use client";

export default function Committees() {
  const chairs = [
    { name: "Prof. Amartya Mukhopadhyay", role: "Conference Chair", org: "IIT Bombay", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Prof. Srinivasan Ramakrishnan", role: "Conference Chair", org: "IIT Bombay", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  const team = [
    { name: "Dr. Convenor Member", role: "Organizing Secretary", org: "GESH, IIT Bombay", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Technical Member", role: "Scientific Chair", org: "Battery Research Society", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Prof. Advisory Member", role: "Advisory Board", org: "CSIR-CECRI", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Finance Member", role: "Treasurer", org: "IIT Bombay", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">ORGANIZING BODIES</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            COMMITTEES & TEAM
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "12px" }}>
            Leadership, organizing committee, and technical review board for NMSB-2.
          </p>
        </div>

        {/* Chairs */}
        <h2 style={{ fontSize: "2rem", marginBottom: "30px", borderBottom: "2px solid var(--agora-blue)", paddingBottom: "10px" }}>
          CONFERENCE CHAIRS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          {chairs.map((c, idx) => (
            <div key={idx} className="agora-pricing-card" style={{ textAlign: "center" }}>
              <img src={c.image} alt={c.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", border: "3px solid var(--agora-blue)" }} />
              <h3 style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{c.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--agora-blue)", fontWeight: "700" }}>{c.role}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>{c.org}</p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <h2 style={{ fontSize: "2rem", marginBottom: "30px", borderBottom: "2px solid var(--agora-blue)", paddingBottom: "10px" }}>
          ORGANIZING TEAM & BOARD
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
          {team.map((t, idx) => (
            <div key={idx} className="agora-pricing-card" style={{ textAlign: "center" }}>
              <img src={t.image} alt={t.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", border: "2px solid var(--agora-text-dark)" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{t.name}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-blue)", fontWeight: "700" }}>{t.role}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>{t.org}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
