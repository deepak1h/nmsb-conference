"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { config } from "../config/variables";
import MarqueeText from "../components/MarqueeText";
import ScrollParallaxText from "../components/ScrollParallaxText";
import ParticleEnergyCanvas from "../components/ParticleEnergyCanvas";
import SodiumAtomAnimation from "../components/SodiumAtomAnimation";

const HERO_SLIDES = [
  "/images/hero/1.JPG",
  "/images/hero/2.JPG",
  "/images/hero/3.JPG",
];

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [ticks, setTicks] = useState(0);

  // Hero Carousel Timer (Monotonically increasing tick counter: 1 -> 2 -> 3 -> 1)
  useEffect(() => {
    const timer = setInterval(() => {
      setTicks((t) => t + 1);
    }, 35); // 3500ms duration per slide (100 ticks * 35ms)

    return () => clearInterval(timer);
  }, []);

  const currentSlide = Math.floor(ticks / 100) % HERO_SLIDES.length;
  const chargePercent = ticks % 100;

  const scheduleData = config.schedule || {};

  const speakersList = config.speakers || [];

  const teamList = config.organizers || [
    {
      name: "Prof. Amartya Mukhopadhyay",
      role: "Chair",
      department: "Dept. of Metallurgical Engineering & Materials Science",
      org: "IIT Bombay",
      image: "/images/organiser/amartya_mukhopadhyay.jpg"
    },
    {
      name: "Prof. Srinivasan Ramakrishnan",
      role: "Vice Chair",
      department: "Department of Chemistry",
      org: "IIT Bombay",
      image: "/images/organiser/srinivasan_ramakrishnan.jpg"
    }
  ];

  return (
    <div>
      {/* Agora Hero Section with Translucent Particle Overlay & Giant Half-Overflow Sodium Atom */}
      <div className="agora-hero-carousel-container" style={{ overflow: "hidden", position: "relative" }}>
        {HERO_SLIDES.map((slideImg, index) => (
          <div
            key={index}
            className={`agora-hero-slide-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slideImg})` }}
          />
        ))}
        <div className="agora-hero-overlay" />

        {/* Translucent Sodium-Ion Canvas Floating over Carousel */}
        <ParticleEnergyCanvas isBackground={true} />

        {/* Massive 1400px Half-Overflow 2D Concentric Sodium Atom on Right Edge (Right-to-Left entrance animation) */}
        <div className="hero-sodium-atom-wrapper">
          <SodiumAtomAnimation />
        </div>

        <div style={{
          position: "relative",
          zIndex: 5,
          padding: "84px 3vw 40px 3vw",
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto 0 0"
        }}>
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {/* Vertical Hero Logos Strip (Left side of NMSB-2) */}
            <div className="hero-vertical-logos-container">
              <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer" className="hero-logo-badge hero-logo-delay-1" title="IIT Bombay">
                <img src="/images/logo/iitb.png" alt="IIT Bombay Logo" />
              </a>
              <div className="hero-logo-line" />
              <a href="https://gesh.iitb.ac.in/" target="_blank" rel="noopener noreferrer" className="hero-logo-badge hero-logo-delay-2" title="Group for Energy Storage and Harvesting (GESH)">
                <img src="/images/logo/gesh.jpg" alt="GESH Logo" />
              </a>
              <div className="hero-logo-line" />
              <a href="https://brsindia.org.in/" target="_blank" rel="noopener noreferrer" className="hero-logo-badge hero-logo-delay-3" title="Battery Research Society (BRS)">
                <img src="/images/logo/brs.jpg" alt="BRS Logo" />
              </a>
              <div className="hero-logo-line" />
              <a href="https://htemlabiitb.wixsite.com/htem" target="_blank" rel="noopener noreferrer" className="hero-logo-badge hero-logo-delay-4" title="Advanced Batteries & Ceramics Laboratory (ABCL) / Amartya Lab">
                <img src="/images/logo/abcl.jpg" alt="ABCL / Amartya Lab Logo" />
              </a>
              <div className="hero-logo-line" />
              <a href="https://www.srinivasan-lab.com/" target="_blank" rel="noopener noreferrer" className="hero-logo-badge hero-logo-delay-5" title="Srinivasan Lab">
                <img src="/images/logo/srinivasan_lab.jpg" alt="Srinivasan Lab Logo" />
              </a>
            </div>

            {/* Left Column: Headline & Content */}
            <div style={{ textAlign: "left", maxWidth: "850px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              {/* Top Venue & Date Badge (Above Title) */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 22px",
                backgroundColor: "rgba(67, 97, 238, 0.15)",
                border: "1px solid rgba(67, 97, 238, 0.4)",
                borderRadius: "50px",
                color: "#60A5FA",
                fontSize: "1.05rem",
                fontWeight: "700",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "20px",
                backdropFilter: "blur(8px)"
              }}>
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>ASPIRE - IITB RESEARCH PARK, MUMBAI • 22–24 NOVEMBER 2026</span>
              </div>

              {/* Giant Prominent Main Title: NMSB-2 */}
              <h1 style={{
                fontSize: "clamp(4.5rem, 9.5vw, 7.5rem)",
                fontWeight: "900",
                lineHeight: "0.95",
                letterSpacing: "-2px",
                color: "#FFFFFF",
                margin: "0 0 14px 0",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "baseline",
                gap: "2px"
              }}>
                NMSB<span style={{ color: "var(--agora-blue)" }}>-2</span>
              </h1>

              {/* Subtitle: 2nd National Meeting on Sodium(-ion) Batteries */}
              <h2 style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.85rem)",
                fontWeight: "700",
                color: "#E2E8F0",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "24px",
                lineHeight: "1.3"
              }}>
                2<sup style={{ fontSize: "0.65em", verticalAlign: "super" }}>ND</sup> NATIONAL MEETING ON <span style={{ color: "#60A5FA" }}>SODIUM(-ION) BATTERIES</span>
              </h2>

              <p style={{ fontSize: "1.1rem", color: "#B0B4C0", marginBottom: "36px", maxWidth: "680px", lineHeight: "1.7", textAlign: "left" }}>
                Building on the success of NMSB-1 (in 2024), NMSB-2 will again bring together representatives from academia, industry/startups, and government agencies to discuss, deliberate, and pave the way towards advancing Sodium Ion battery technology, deployment, and commercialisation.
              </p>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>
                <Link href="/registration" className="btn-agora-blue">
                  REGISTER NOW
                </Link>
                <Link href="/recap" className="btn-agora-outlined" style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>
                  EXPLORE NMSB-1 RECAP →
                </Link>
              </div>
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
                src="/images/hero/4.JPG"
                alt="Connecting minds, creating future"
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
                  <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Chair, IIT Bombay</p>
                </div>
                <div style={{ borderLeft: "3px solid var(--agora-blue)", paddingLeft: "16px" }}>
                  <h4 style={{ fontSize: "1.1rem" }}>Prof. S. Ramakrishnan</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)" }}>Co-Chair, IIT Bombay</p>
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

          {config.showSpeakers ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
              {speakersList.slice(0, 4).map((sp, idx) => (
                <div
                  key={idx}
                  className="agora-pricing-card speaker-card-hover"
                  style={{
                    padding: "32px 20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    border: "1px solid var(--agora-border-light)",
                    backgroundColor: "#FFFFFF"
                  }}
                >
                  <div>
                    {/* Speaker Circular Avatar: Black Ring Design */}
                    <div
                      className="speaker-avatar-ring"
                      style={{
                        width: "135px",
                        height: "135px",
                        borderRadius: "50%",
                        padding: "4px",
                        border: "3px solid #000000",
                        backgroundColor: "#FFFFFF",
                        margin: "0 auto 18px",
                        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                      }}
                    >
                      <img
                        src={sp.image}
                        alt={sp.name}
                        className="speaker-avatar-img"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          objectFit: "cover",
                          objectPosition: "center 15%",
                          backgroundColor: "#F1F5F9"
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                      {sp.name}
                    </h3>
                    {sp.designation && sp.designation.trim() !== "" && (
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 14px",
                        backgroundColor: "rgba(67, 97, 238, 0.08)",
                        borderRadius: "20px",
                        color: "var(--agora-blue)",
                        fontSize: "0.85rem",
                        fontWeight: "700"
                      }}>
                        <span>{sp.designation}</span>
                      </div>
                    )}
                    {sp.topic && sp.topic !== "NA" && sp.topic.trim() !== "" && (
                      <p style={{ fontSize: "0.85rem", color: "var(--agora-text-muted)", borderTop: "1px dashed var(--agora-border-light)", paddingTop: "12px", marginTop: "12px" }}>
                        "{sp.topic}"
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              backgroundColor: "var(--agora-light-bg)",
              borderRadius: "20px",
              padding: "48px 32px",
              textAlign: "center",
              border: "1px solid var(--agora-border-light)"
            }}>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "rgba(67, 97, 238, 0.08)",
                border: "2px solid var(--agora-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "var(--agora-blue)"
              }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "8px" }}>
                SPEAKER LINEUP ANNOUNCING SHORTLY
              </h3>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 24px", lineHeight: "1.6" }}>
                We are compiling an outstanding list of plenary speakers, academic leaders from IITs, IISc & CSIR, and industry executives.
              </p>
              <Link href="/speakers" className="btn-agora-blue" style={{ padding: "12px 28px", fontSize: "0.85rem" }}>
                VIEW SPEAKERS PORTAL →
              </Link>
            </div>
          )}
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
            {(scheduleData[activeDay] || [])
              .filter((item) => {
                const titleLower = item.title.toLowerCase();
                return (
                  !titleLower.includes("registration") &&
                  !titleLower.includes("lunch") &&
                  !titleLower.includes("tea break") &&
                  !titleLower.includes("board room")
                );
              })
              .map((item, idx) => (
                <div key={idx} className="agora-schedule-row">
                  <div style={{ flex: "0 0 200px", fontWeight: "700", color: "var(--agora-blue)", fontSize: "1.05rem" }}>
                    {item.time}
                  </div>
                  <div style={{ flex: "1 1 auto" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--agora-text-muted)" }}>
                      {item.speaker} &nbsp;•&nbsp; Location: {item.location}
                    </p>
                  </div>
                  <div className="home-schedule-details-btn-wrapper">
                    <Link href="/programme" className="btn-agora-outlined" style={{ padding: "8px 16px", fontSize: "0.78rem" }}>
                      DETAILS →
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div style={{ marginTop: "36px", textAlign: "center" }}>
            <Link href="/programme" className="btn-agora-blue" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>VIEW FULL DETAILED SCHEDULE →</span>
            </Link>
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

          {/* Conference Team Unified Layout: (details photo | photo2 detail) */}
          <div
            className="committees-layout-container"
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              border: "1px solid var(--agora-border-light)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              padding: "44px 36px",
              display: "grid",
              gridTemplateColumns: "1fr 2px 1fr",
              gap: "36px",
              alignItems: "center"
            }}
          >
            {/* Left Member: Prof. Amartya Mukhopadhyay (Details | Photo) */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "24px",
              textAlign: "right"
            }}>
              {/* Details */}
              <div style={{ flex: "1" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "6px", lineHeight: "1.3" }}>
                  {teamList[0].name}
                </h3>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 14px",
                  backgroundColor: "rgba(67, 97, 238, 0.08)",
                  borderRadius: "20px",
                  color: "var(--agora-blue)",
                  fontSize: "0.82rem",
                  fontWeight: "700",
                  marginBottom: "10px"
                }}>
                  <span>{teamList[0].role}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--agora-text-dark)", fontWeight: "600", marginBottom: "3px" }}>
                  {teamList[0].department}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--agora-text-muted)", fontWeight: "500" }}>
                  {teamList[0].org}
                </p>
              </div>

              {/* Photo */}
              <div
                className="speaker-avatar-ring"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  padding: "4px",
                  border: "3px solid #000000",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <img
                  src={teamList[0].image}
                  alt={teamList[0].name}
                  className="speaker-avatar-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    backgroundColor: "#F1F5F9"
                  }}
                />
              </div>
            </div>

            {/* Central Divider Line */}
            <div className="committee-divider-line" style={{ borderLeft: "2px solid #4361EE", height: "140px", alignSelf: "center", margin: "0 auto" }} />

            {/* Right Member: Prof. Srinivasan Ramakrishnan (Photo2 | Details) */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "24px",
              textAlign: "left"
            }}>
              {/* Photo */}
              <div
                className="speaker-avatar-ring"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  padding: "4px",
                  border: "3px solid #000000",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <img
                  src={teamList[1].image}
                  alt={teamList[1].name}
                  className="speaker-avatar-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    backgroundColor: "#F1F5F9"
                  }}
                />
              </div>

              {/* Details */}
              <div style={{ flex: "1" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--agora-text-dark)", marginBottom: "6px", lineHeight: "1.3" }}>
                  {teamList[1].name}
                </h3>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 14px",
                  backgroundColor: "rgba(67, 97, 238, 0.08)",
                  borderRadius: "20px",
                  color: "var(--agora-blue)",
                  fontSize: "0.82rem",
                  fontWeight: "700",
                  marginBottom: "10px"
                }}>
                  <span>{teamList[1].role}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--agora-text-dark)", fontWeight: "600", marginBottom: "3px" }}>
                  {teamList[1].department}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--agora-text-muted)", fontWeight: "500" }}>
                  {teamList[1].org}
                </p>
              </div>
            </div>
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
