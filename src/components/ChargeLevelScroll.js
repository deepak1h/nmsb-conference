"use client";
import { useState, useEffect, useRef } from "react";

export default function ChargeLevelScroll() {
  const [charge, setCharge] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setCharge(Math.round(progress * 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{
      padding: "70px 0",
      backgroundColor: "var(--agora-dark-bg)",
      color: "#fff",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="pill-badge" style={{ color: "var(--agora-blue)", borderColor: "var(--agora-blue)" }}>
          DESIGN #4: SCROLL-DRIVEN BATTERY CHARGE & METRICS METER
        </span>

        <h2 style={{ color: "#fff", fontSize: "2.2rem", margin: "16px 0 8px", textTransform: "uppercase" }}>
          DYNAMIC BATTERY ENERGY DENSITY
        </h2>

        {/* Battery Visual Shell */}
        <div style={{
          width: "320px",
          height: "60px",
          border: "4px solid var(--agora-blue)",
          borderRadius: "12px",
          padding: "6px",
          margin: "24px auto 16px",
          position: "relative",
          display: "flex",
          alignItems: "center"
        }}>
          {/* Fill Bar */}
          <div style={{
            height: "100%",
            width: `${charge}%`,
            background: "linear-gradient(90deg, #4361EE, #00F2FE)",
            borderRadius: "6px",
            transition: "width 0.1s linear",
            boxShadow: "0 0 15px rgba(67, 97, 238, 0.6)"
          }} />
          
          {/* Battery Cap */}
          <div style={{
            position: "absolute",
            right: "-16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "10px",
            height: "24px",
            background: "var(--agora-blue)",
            borderRadius: "0 4px 4px 0"
          }} />

          {/* Percentage */}
          <span style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            fontWeight: "900",
            fontSize: "1.2rem",
            color: "#fff",
            textShadow: "0 2px 4px rgba(0,0,0,0.8)"
          }}>
            CHARGING: {charge}%
          </span>
        </div>

        {/* Metrics Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "32px" }}>
          <div className="agora-card" style={{ padding: "20px" }}>
            <h3 style={{ fontSize: "2rem", color: "var(--agora-blue)" }}>{Math.round(charge * 1.6)} Wh/kg</h3>
            <p style={{ fontSize: "0.85rem", color: "#9FA0A7" }}>Energy Density Milestone</p>
          </div>
          <div className="agora-card" style={{ padding: "20px" }}>
            <h3 style={{ fontSize: "2rem", color: "var(--agora-blue)" }}>{Math.round(charge * 30)} +</h3>
            <p style={{ fontSize: "0.85rem", color: "#9FA0A7" }}>Cycle Life Stability</p>
          </div>
          <div className="agora-card" style={{ padding: "20px" }}>
            <h3 style={{ fontSize: "2rem", color: "var(--agora-blue)" }}>100%</h3>
            <p style={{ fontSize: "0.85rem", color: "#9FA0A7" }}>Cobalt & Lithium Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
