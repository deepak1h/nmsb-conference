"use client";
import { useState, useEffect, useRef } from "react";

export default function BatteryLayersScroll() {
  const [spread, setSpread] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress 0 to 1 as section crosses viewport center
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setSpread(progress * 70); // Spread up to 70px apart
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const layers = [
    { title: "Cathode Layer", desc: "Na-Layered Oxide (NaMO2) Current Collector", color: "#4361EE" },
    { title: "Electrolyte Gel / Solid", desc: "NaPF6 Non-Flammable Solvate", color: "#8D43EE" },
    { title: "Polyolefin Separator", desc: "High Porosity Micro-Porous Film", color: "#00F2FE" },
    { title: "Anode Layer", desc: "Hard Carbon Biomass Matrix", color: "#F32321" },
  ];

  return (
    <div ref={sectionRef} style={{
      padding: "80px 0",
      backgroundColor: "var(--agora-dark-navy)",
      color: "#FFFFFF",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "24px" }}>
          <span className="pill-badge" style={{ color: "var(--agora-blue)", borderColor: "var(--agora-blue)" }}>
            DESIGN #2: SCROLL-EXPLODING BATTERY CELL LAYERS
          </span>
          <h2 style={{ color: "#FFFFFF", fontSize: "2.5rem", marginTop: "12px" }}>
            INTERNAL CELL ARCHITECTURE
          </h2>
          <p style={{ color: "#9FA0A7", fontSize: "1rem" }}>Scroll down to expand the Na-ion cell layers</p>
        </div>

        {/* 3D Expanding Layer Visual */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: `${20 + spread}px`,
          margin: "40px auto 0",
          maxWidth: "700px",
          perspective: "1000px",
          transition: "gap 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
          {layers.map((layer, idx) => (
            <div 
              key={idx}
              style={{
                width: "100%",
                padding: "20px 32px",
                background: `linear-gradient(135deg, rgba(29, 31, 35, 0.95), ${layer.color}22)`,
                border: `2px solid ${layer.color}`,
                borderRadius: "8px",
                boxShadow: `0 10px 30px ${layer.color}33`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transform: `rotateX(15deg) translateZ(${idx * 10}px)`,
                transition: "transform 0.3s ease"
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h4 style={{ color: "#FFFFFF", fontSize: "1.2rem", fontWeight: "800" }}>{layer.title}</h4>
                <p style={{ color: "#9FA0A7", fontSize: "0.85rem" }}>{layer.desc}</p>
              </div>
              <div style={{ background: layer.color, color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "900" }}>
                LAYER 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
