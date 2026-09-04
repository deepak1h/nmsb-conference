"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { config } from "../config/variables";
import MarqueeText from "../components/MarqueeText";
import ScrollParallaxText from "../components/ScrollParallaxText";
import ParticleEnergyCanvas from "../components/ParticleEnergyCanvas";
import SodiumAtomAnimation from "../components/SodiumAtomAnimation";

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chargePercent, setChargePercent] = useState(0);

  const heroSlides = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  ];

  // Battery Charging Level Hero Carousel timer (Changes slide at 100%)
  useEffect(() => {
    const timer = setInterval(() => {
      setChargePercent((prev) => {
        if (prev >= 100) {
          setCurrentSlide((slide) => (slide + 1) % heroSlides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 25); // 2500ms per slide

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scheduleData = {
    1: [
      { time: "09:00 - 10:30 AM", title: "Inaugural Ceremony & Plenary Keynote", speaker: "Prof. Amartya Mukhopadhyay", location: "Main Auditorium" },
      { time: "11:00 - 01:00 PM", title: "Session 1: Na-Ion Cathode & Anode Chemistry", speaker: "Dr. Jane Doe & Panel", location: "Hall A" },
      { time: "02:00 - 04:30 PM", title: "Poster Presentations & Student Award Session", speaker: "Research Delegates", location: "Exhibition Bay" },
    ],
    2: [
      { time: "09:30 - 11:30 AM", title: "Session 2: Solid-State Electrolytes & SEI", speaker: "Prof. Srinivasan Ramakrishnan", location: "Main Auditorium" },
      { time: "02:00 - 04:00 PM", title: "Start-up Showcase & Pitching Session", speaker: "Industry Delegates & VC Panel", location: "Hall B" },
    ],
    3: [
      { time: "09:30 - 12:30 PM", title: "Session 3: Cell Manufacturing & Pack Design", speaker: "Invited Industry Stalwarts", location: "Main Auditorium" },
      { time: "02:30 - 04:00 PM", title: "Valedictory & NMSB-3 Announcement", speaker: "Conference Chairs", location: "Main Auditorium" },
    ]
  };

  const speakersList = [
    { name: "Dr. Jane Doe", role: "Keynote Speaker", org: "National Energy Lab", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", talk: "Next-Gen Sodium Layered Oxides" },
    { name: "Prof. John Smith", role: "Invited Speaker", org: "University of Technology", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", talk: "Solid Electrolytes for Na-Ion" },
    { name: "Dr. Alice Johnson", role: "Industry Speaker", org: "Advanced Energy Systems", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", talk: "Prismatic Cell Scaling in India" },
    { name: "Prof. Robert Chen", role: "Panellist", org: "Institute of Science", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", talk: "Hard Carbon Anode Interphases" },
  ];

  const teamList = [
    { name: "Prof. Amartya Mukhopadhyay", role: "Conference Chair", org: "IIT Bombay", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Prof. Srinivasan Ramakrishnan", role: "Conference Chair", org: "IIT Bombay", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Convenor Member", role: "Organizing Secretary", org: "GESH, IIT Bombay", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Scientific Chair", role: "Technical Chair", org: "Battery Research Society", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div>
      {/* Agora Hero Section with Translucent Particle Overlay & Giant Half-Overflow Sodium Atom */}
      <div className="agora-hero-carousel-container" style={{ overflow: "hidden", position: "relative" }}>
        {heroSlides.map((slideImg, index) => (
          <div
            key={index}
            className={`agora-hero-slide-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slideImg})` }}
          />
        ))}
        <div className="agora-hero-overlay" />

        {/* Translucent Sodium-Ion Canvas Floating over Carousel */}
        <ParticleEnergyCanvas isBackground={true} />

        {/* Massive 1400px Half-Overflow 2D Concentric Sodium Atom on Right Edge */}
        <div style={{
          position: "absolute",
          right: "-686px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          pointerEvents: "none",
          opacity: 0.55
        }}>
          <SodiumAtomAnimation />
        </div>

        <div style={{
          position: "relative",
          zIndex: 5,
          padding: "84px 5vw 40px",
          width: "100%",
          maxWidth: "1350px",
          margin: "0 auto"
        }}>
          {/* Left Column: Headline & Content */}
          <div style={{ textAlign: "left", maxWidth: "680px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span className="agora-subtitle-badge" style={{ textAlign: "left", marginLeft: 0 }}>
              NATIONAL MEETING ON SODIUM-ION BATTERIES • IIT BOMBAY
            </span>

            <h1 className="agora-hero-headline" style={{ marginBottom: "24px", textAlign: "left", alignSelf: "flex-start" }}>
              CONNECT<br />
              INSPIRE<br />
              INNOVATE
            </h1>

            <p style={{ fontSize: "1.2rem", color: "#9FA0A7", marginBottom: "36px", maxWidth: "620px", lineHeight: "1.6", textAlign: "left" }}>
              {config.conference.tagline}
            </p>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>
              <Link href="/registration" className="btn-agora-blue">
                REGISTER NOW
              </Link>
              <Link href="/abstracts" className="btn-agora-outlined" style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>
                SUBMIT ABSTRACT
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Battery Charging Indicator */}
        <div className="hero-pagination-bar" style={{ position: "absolute", bottom: "24px", right: "5vw", display: "flex", alignItems: "center", gap: "14px", zIndex: 10 }}>
          <span>SLIDE 0{currentSlide + 1}</span>

          <div style={{
            width: "70px",
            height: "18px",
            border: "2px solid #FFFFFF",
            borderRadius: "4px",
            padding: "2px",
            position: "relative",
            display: "flex",
            alignItems: "center"
          }}>
            <div style={{
              height: "100%",
              width: `${chargePercent}%`,
              backgroundColor: "var(--agora-blue)",
              borderRadius: "2px",
              transition: "width 0.025s linear"
            }} />
            <div style={{
              position: "absolute",
              right: "-5px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "3px",
              height: "8px",
              backgroundColor: "#FFFFFF",
              borderRadius: "0 2px 2px 0"
            }} />
          </div>

          <span style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "900", width: "42px" }}>
            {chargePercent}%
          </span>
        </div>
      </div>

      {/* Marquee Banner */}
      <MarqueeText />

      {/* Section 1: About Forum */}
      <div style={{ padding: "100px 0", backgroundColor: "var(--agora-light-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Conference Keynote"
                style={{ width: "100%", borderRadius: "4px", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <span className="agora-subtitle-badge">NATIONAL FORUM</span>
              <h2 style={{ fontSize: "3rem", lineHeight: "1.1", marginBottom: "24px" }}>
                Connecting minds, creating future
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--agora-text-muted)", marginBottom: "32px" }}>
                NMSB-2 brings together academia, industry leaders, and government stakeholders to accelerate sodium-ion battery research and commercial deployment across India.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
                <div style={{ borderLeft: "3px solid var(--agora-blue)", paddingLeft: "16px" }}>
                  <h4 style={{ fontSize: "1.1rem" }}>Prof. Amartya Mukhopadhyay</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Conference Chair, IIT Bombay</p>
                </div>
                <div style={{ borderLeft: "3px solid var(--agora-blue)", paddingLeft: "16px" }}>
                  <h4 style={{ fontSize: "1.1rem" }}>Prof. S. Ramakrishnan</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Conference Chair, IIT Bombay</p>
                </div>
              </div>

              <Link href="/about" className="btn-agora-blue">
                READ MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: SPEAKERS SECTION */}
      <div style={{ padding: "100px 0", backgroundColor: "var(--agora-card-bg)", borderTop: "1px solid var(--agora-border-light)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="agora-subtitle-badge">FEATURED EXPERTS</span>
              <h2 style={{ fontSize: "3rem", lineHeight: "1.1" }}>INVITED SPEAKERS</h2>
            </div>
            <Link href="/speakers" className="btn-agora-outlined">
              VIEW ALL SPEAKERS →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
            {speakersList.map((sp, idx) => (
              <div key={idx} className="agora-pricing-card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", border: "3px solid var(--agora-blue)" }}
                />
                <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>{sp.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--agora-blue)", fontWeight: "700", marginBottom: "4px" }}>{sp.role}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", marginBottom: "16px" }}>{sp.org}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--agora-text-dark)", borderTop: "1px dashed var(--agora-border-light)", paddingTop: "12px" }}>
                  "{sp.talk}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Programme Schedule */}
      <div style={{ padding: "100px 0", backgroundColor: "var(--agora-card-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="agora-subtitle-badge">EVENT TIMETABLE</span>
              <h2 style={{ fontSize: "3rem", lineHeight: "1.1" }}>PROGRAMME SCHEDULE</h2>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setActiveDay(1)} className={`agora-schedule-tab ${activeDay === 1 ? "active" : ""}`}>
                DAY #1
              </button>
              <button onClick={() => setActiveDay(2)} className={`agora-schedule-tab ${activeDay === 2 ? "active" : ""}`}>
                DAY #2
              </button>
              <button onClick={() => setActiveDay(3)} className={`agora-schedule-tab ${activeDay === 3 ? "active" : ""}`}>
                DAY #3
              </button>
            </div>
          </div>

          <div>
            {scheduleData[activeDay].map((item, idx) => (
              <div key={idx} className="agora-schedule-row">
                <div style={{ flex: "0 0 200px", fontWeight: "700", color: "var(--agora-blue)", fontSize: "1.05rem" }}>
                  {item.time}
                </div>
                <div style={{ flex: "1 1 auto" }}>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)" }}>
                    {item.speaker} &nbsp;•&nbsp; {item.location}
                  </p>
                </div>
                <div>
                  <Link href="/programme" className="btn-agora-outlined" style={{ padding: "10px 20px", fontSize: "0.8rem" }}>
                    DETAILS →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Parallax Text Strip between Schedule and Team */}
      <ScrollParallaxText />

      {/* Section 4: TEAM / ORGANIZING COMMITTEE SECTION */}
      <div style={{ padding: "100px 0", backgroundColor: "var(--agora-card-bg)", borderTop: "1px solid var(--agora-border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="agora-subtitle-badge">LEADERSHIP & ORGANIZERS</span>
            <h2 style={{ fontSize: "3rem", lineHeight: "1.1" }}>CONFERENCE TEAM</h2>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "12px" }}>
              Organized jointly by GESH, IIT Bombay and Battery Research Society (BRS).
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
            {teamList.map((tm, idx) => (
              <div key={idx} className="agora-pricing-card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <img
                  src={tm.image}
                  alt={tm.name}
                  style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", border: "3px solid var(--agora-text-dark)" }}
                />
                <h3 style={{ fontSize: "1.25rem", marginBottom: "6px" }}>{tm.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--agora-blue)", fontWeight: "700", marginBottom: "4px" }}>{tm.role}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>{tm.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Delegate Registration Information & Callout Banner */}
      <div style={{ padding: "100px 0", backgroundColor: "var(--agora-light-bg)" }}>
        <div className="container">
          <div style={{
            backgroundColor: "var(--agora-dark-bg)",
            color: "#FFFFFF",
            borderRadius: "8px",
            padding: "60px 48px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center"
          }}>
            <div>
              <span className="agora-subtitle-badge" style={{ color: "var(--agora-blue)", borderBottomColor: "var(--agora-blue)" }}>
                NATIONAL DELEGATE PORTAL
              </span>
              <h2 style={{ fontSize: "2.8rem", lineHeight: "1.15", margin: "16px 0", color: "#FFFFFF" }}>
                REGISTER FOR NMSB-2 AT IIT BOMBAY
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#A0A5B5", lineHeight: "1.7", marginBottom: "24px" }}>
                Registration is open for Academic Faculty, Scientists, Industry Delegates, and Researchers. Passes include full access to technical lectures, poster sessions, exhibits, networking dinners, refreshments, and conference kits.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/registration" className="btn-agora-blue">
                  PROCEED TO REGISTRATION PORTAL →
                </Link>
                <Link href="/programme" className="btn-agora-outlined" style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>
                  VIEW PROGRAMME SCHEDULE
                </Link>
              </div>
            </div>

            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "36px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.12)"
            }}>
              <h4 style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "16px" }}>KEY DEADLINES & INFO</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "#D0D5E5", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span><strong>Conference Dates:</strong> 22–24 November 2026</span>
                </li>
                <li style={{ borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span><strong>Venue:</strong> ASPIRE - IIT Bombay Research Park</span>
                </li>
                <li style={{ borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span><strong>Early Bird Deadline:</strong> November 1, 2026</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <span><strong>BRS Member Special:</strong> 15% Discount Applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
