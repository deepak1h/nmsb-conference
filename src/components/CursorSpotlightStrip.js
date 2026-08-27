"use client";
import { useState } from "react";

export default function CursorSpotlightStrip() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{
        padding: "80px 0",
        backgroundColor: "#030712",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backgroundImage: `radial-gradient(circle 350px at ${pos.x}% ${pos.y}%, rgba(67, 97, 238, 0.35), transparent 80%)`,
        transition: "background-image 0.05s ease"
      }}
    >
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <span className="pill-badge" style={{ color: "var(--agora-blue)", borderColor: "var(--agora-blue)" }}>
          DESIGN #6: CURSOR MAGNETIC SPOTLIGHT & CIRCUIT REVEAL
        </span>

        <h2 style={{ color: "#fff", fontSize: "2.6rem", margin: "16px 0 12px", textTransform: "uppercase" }}>
          DISCOVER SODIUM-ION TECH AT IIT BOMBAY
        </h2>

        <p style={{ color: "#9FA0A7", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 28px" }}>
          Move your cursor over this banner to project the active energy spotlight.
        </p>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <div style={{ padding: "16px 28px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", background: "rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "var(--agora-blue)" }}>300+ DELEGATES</h4>
            <p style={{ fontSize: "0.8rem", color: "#9FA0A7" }}>National & Global Attendees</p>
          </div>
          <div style={{ padding: "16px 28px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", background: "rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "var(--agora-blue)" }}>40+ INVITED TALKS</h4>
            <p style={{ fontSize: "0.8rem", color: "#9FA0A7" }}>Academic & Industry Experts</p>
          </div>
          <div style={{ padding: "16px 28px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", background: "rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "var(--agora-blue)" }}>START-UP PITCHES</h4>
            <p style={{ fontSize: "0.8rem", color: "#9FA0A7" }}>Energy Storage Venture Showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
