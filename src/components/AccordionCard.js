"use client";
import { useState } from "react";

export default function AccordionCard({ title, subtitle, badge, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-card ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{title}</h3>
            {badge && <span className="pill-badge">{badge}</span>}
          </div>
          {subtitle && (
            <p style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)", marginTop: "4px" }}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="accordion-icon">
          {isOpen ? "−" : "+"}
        </div>
      </div>
      <div className="accordion-content">
        {children}
      </div>
    </div>
  );
}
