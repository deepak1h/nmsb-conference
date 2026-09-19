"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Programme() {
  const [activeDay, setActiveDay] = useState(1);
  const scheduleData = config.schedule;

  const dayHeaders = {
    1: { date: "DAY #1 — Sunday, 22 November 2026", theme: "Registration, Inaugural & Technical Session I" },
    2: { date: "DAY #2 — Monday, 23 November 2026", theme: "Science, Innovation & Commercialization" },
    3: { date: "DAY #3 — Tuesday, 24 November 2026", theme: "Advanced Research & Future Directions" }
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">EVENT TIMETABLE</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            PROGRAMME SCHEDULE
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "12px" }}>
            2nd National Meeting on Sodium(-ion) Batteries | 22–24 Nov 2026, Aspire Research Park, IIT Bombay, Mumbai
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href={config.conference.pdfScheduleUrl || "/files/NMSB-2_Programme_Schedule.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-agora-blue"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>DOWNLOAD OFFICIAL SCHEDULE (PDF)</span>
            </a>
          </div>
        </div>

        <div className="programme-schedule-card" style={{ backgroundColor: "var(--agora-card-bg)", padding: "48px", borderRadius: "12px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)" }}>
          <div style={{ display: "flex", gap: "16px", borderBottom: "2px solid var(--agora-border-light)", marginBottom: "24px", flexWrap: "wrap" }}>
            <button onClick={() => setActiveDay(1)} className={`agora-schedule-tab ${activeDay === 1 ? "active" : ""}`}>
              DAY #1 (22 NOV)
            </button>
            <button onClick={() => setActiveDay(2)} className={`agora-schedule-tab ${activeDay === 2 ? "active" : ""}`}>
              DAY #2 (23 NOV)
            </button>
            <button onClick={() => setActiveDay(3)} className={`agora-schedule-tab ${activeDay === 3 ? "active" : ""}`}>
              DAY #3 (24 NOV)
            </button>
          </div>

          <div style={{ marginBottom: "28px", padding: "16px 20px", backgroundColor: "rgba(67, 97, 238, 0.05)", borderLeft: "4px solid var(--agora-blue)", borderRadius: "4px" }}>
            <div style={{ fontWeight: "800", color: "var(--agora-blue)", fontSize: "1.1rem" }}>
              {dayHeaders[activeDay].date}
            </div>
            <div style={{ color: "var(--agora-text-dark)", fontSize: "0.95rem", marginTop: "2px" }}>
              Theme: <strong>{dayHeaders[activeDay].theme}</strong>
            </div>
          </div>

          <div>
            {scheduleData[activeDay].map((item, idx) => (
              <div key={idx} className="agora-schedule-row" style={{ padding: "20px 0" }}>
                <div className="schedule-time-badge" style={{ flex: "0 0 210px", fontWeight: "700", color: "var(--agora-blue)", fontSize: "1.05rem" }}>
                  {item.time}
                </div>
                <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "4px", wordBreak: "break-word" }}>{item.title}</h3>
                  {item.details && (
                    <p style={{ fontSize: "0.95rem", color: "var(--agora-text-dark)", marginBottom: "6px" }}>
                      {item.details}
                    </p>
                  )}
                  <div style={{ fontSize: "0.88rem", color: "var(--agora-text-muted)", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <span>📍 <strong>Location:</strong> {item.location}</span>
                    {item.speaker && <span>🗣️ <strong>Session / Speaker:</strong> {item.speaker}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
