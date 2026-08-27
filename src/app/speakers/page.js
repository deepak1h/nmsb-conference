"use client";

export default function Speakers() {
  const speakers = [
    { name: "Dr. Jane Doe", title: "Chief Scientist, National Energy Lab", talk: "Layered Oxide Cathodes for High-Density Sodium Cells" },
    { name: "Prof. John Smith", title: "Chair Professor, Univ of Technology", talk: "Non-flammable Liquid & Solid Electrolyte Formulations" },
    { name: "Dr. Alice Johnson", title: "VP of R&D, Advanced Energy Corp", talk: "Commercial Pouch & Prismatic Na-Ion Cell Manufacturing" },
    { name: "Prof. Robert Chen", title: "Head of Chemistry, Science Institute", talk: "Hard Carbon Anodes derived from Sustainable Biomass" },
  ];

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">INVITED SPEAKERS</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            WORLD-CLASS EXPERTS
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "12px" }}>
            [TO BE PROVIDED: Full speaker line-up will be updated incrementally.]
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {speakers.map((sp, idx) => (
            <div key={idx} className="agora-pricing-card" style={{ padding: "36px 24px", textAlign: "center" }}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt={sp.name} 
                style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", border: "4px solid var(--agora-blue)" }}
              />
              <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>{sp.name}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--agora-blue)", fontWeight: "700", marginBottom: "12px" }}>{sp.title}</p>
              <p style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)", borderTop: "1px dashed var(--agora-border-light)", paddingTop: "12px" }}>
                <strong>Talk:</strong> "{sp.talk}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
