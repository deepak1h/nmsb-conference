"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Programme() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      { time: "08:30 - 09:30 AM", title: "Delegate Registration & Welcome Coffee", speaker: "Secretariat Desk", location: "ASPIRE Foyer" },
      { time: "09:30 - 11:00 AM", title: "Inaugural Ceremony & Keynote Address", speaker: "Prof. Amartya Mukhopadhyay", location: "Main Auditorium" },
      { time: "11:30 - 01:00 PM", title: "Technical Session 1: Cathode & Anode Chemistry", speaker: "Invited Speakers Panel", location: "Hall A & B" },
      { time: "02:00 - 04:30 PM", title: "Poster Presentations & Student Award Judging", speaker: "Research Scholars", location: "Exhibition Bay" },
    ],
    2: [
      { time: "09:30 - 11:30 AM", title: "Technical Session 2: Solid Electrolytes & SEI Dynamics", speaker: "Prof. Srinivasan Ramakrishnan", location: "Main Auditorium" },
      { time: "02:00 - 04:00 PM", title: "Start-up Pitching Showcase & Investor Panel", speaker: "Energy Start-ups & VC Panel", location: "Hall B" },
    ],
    3: [
      { time: "09:30 - 12:30 PM", title: "Technical Session 3: Cell Scale-up & Manufacturing", speaker: "Industry Stalwarts", location: "Main Auditorium" },
      { time: "02:30 - 04:00 PM", title: "Poster Awards & Valedictory Ceremony", speaker: "Conference Chairs", location: "Main Auditorium" },
    ]
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
            3-Day Comprehensive Technical Sessions, Keynotes & Start-up Showcases at IIT Bombay.
          </p>

          <div style={{ marginTop: "24px" }}>
            <button className="btn-agora-blue" onClick={() => alert("Downloading PDF Programme...")}>
              DOWNLOAD DETAILED PROGRAMME (PDF)
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "48px", borderRadius: "12px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)" }}>
          <div style={{ display: "flex", gap: "16px", borderBottom: "2px solid var(--agora-border-light)", marginBottom: "32px" }}>
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

          <div>
            {scheduleData[activeDay].map((item, idx) => (
              <div key={idx} className="agora-schedule-row">
                <div style={{ flex: "0 0 220px", fontWeight: "700", color: "var(--agora-blue)", fontSize: "1.1rem" }}>
                  {item.time}
                </div>
                <div style={{ flex: "1 1 auto" }}>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--agora-text-muted)" }}>
                    Speaker: {item.speaker} &nbsp;•&nbsp; Location: {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
