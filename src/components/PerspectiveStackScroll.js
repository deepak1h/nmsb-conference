"use client";
import { useState, useEffect, useRef } from "react";

export default function PerspectiveStackScroll() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setOffset(progress * 40); // 40px offset spread
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { title: "Cathode Breakthroughs", tag: "Session A", desc: "Novel layered oxides and polyanionic framework materials." },
    { title: "Hard Carbon Anodes", tag: "Session B", desc: "Biomass precursors & interface engineering for Na storage." },
    { title: "Commercial Scaling", tag: "Session C", desc: "Gigafactory cell manufacturing & battery management systems." },
  ];

  return (
    <div ref={sectionRef} style={{
      padding: "80px 0",
      backgroundColor: "var(--agora-light-bg)",
      borderTop: "1px solid var(--agora-border-light)",
      borderBottom: "1px solid var(--agora-border-light)",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="pill-badge" style={{ color: "var(--agora-blue)", borderColor: "var(--agora-blue)" }}>
          DESIGN #5: 3D PERSPECTIVE FANNING CARD STACK
        </span>
        <h2 style={{ fontSize: "2.4rem", margin: "16px 0 32px", textTransform: "uppercase" }}>
          RESEARCH SPECTRUM
        </h2>

        {/* 3D Stack Container */}
        <div style={{
          display: "flex",
          justify: "center",
          gap: "24px",
          perspective: "1000px",
          flexWrap: "wrap"
        }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="agora-pricing-card"
              style={{
                flex: "1 1 300px",
                maxWidth: "360px",
                transform: `rotateY(${(idx - 1) * offset * 0.4}deg) translateY(${Math.abs(idx - 1) * offset * 0.5}px)`,
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <span className="agora-subtitle-badge">{card.tag}</span>
              <h3 style={{ fontSize: "1.4rem", margin: "12px 0" }}>{card.title}</h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
