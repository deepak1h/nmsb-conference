"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nmsb1Recap() {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([
    "/images/gallary/1st%20day%20amartya%20sir.JPG",
    "/images/gallary/1st%20day%20director.JPG",
    "/images/gallary/ABCL%20group%20pic%201.JPG",
    "/images/gallary/ABCL%20group%20pic%202.JPG",
    "/images/gallary/amreesh%20talk.JPG",
    "/images/gallary/aninda%20bhatacharya%20talk.JPG",
    "/images/gallary/best%20poster%201.JPG",
    "/images/gallary/group%20pic.JPG",
    "/images/gallary/team_pic.JPG",
    "/images/gallary/poster%20seeesion.JPG",
    "/images/gallary/round%20table.JPG",
    "/images/gallary/yogesh%20sharma%20with%20brs.JPG"
  ]);

  // Dynamically fetch all images from public/images/gallary/ via API
  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setGalleryImages(data.images);
        }
      })
      .catch((err) => console.log("Gallery API fetch fallback used:", err));
  }, []);

  // Images displayed in the grid (8 featured vs all photos)
  const displayedImages = showFullGallery ? galleryImages : galleryImages.slice(0, 8);

  // Open modal lightbox for clicked image index
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  // Close modal lightbox
  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Navigate to previous photo
  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }
  };

  // Navigate to next photo
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Keyboard shortcut listener (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">

        {/* Page Hero Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">CONFERENCE RETROSPECTIVE & LEGACY</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.4rem", marginTop: "10px" }}>
            LOOKING BACK: NMSB-1
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px", maxWidth: "840px", margin: "12px auto 0", lineHeight: "1.7" }}>
            The inaugural <strong>1st National Meeting on Sodium(-ion) Batteries (NMSB-1)</strong> organized at the Indian Institute of Technology Bombay (IITB) on October 4–6, 2024, by the <strong>IITB Research Hub for Green Energy and Sustainability (GESH)</strong> and the <strong>Advanced Batteries & Ceramics Laboratory</strong>.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "70px"
        }}>
          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)", textAlign: "center" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-blue)", marginBottom: "4px" }}>250+</div>
            <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--agora-text-muted)", textTransform: "uppercase" }}>Pan-India Delegates</div>
          </div>

          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)", textAlign: "center" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-blue)", marginBottom: "4px" }}>28</div>
            <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--agora-text-muted)", textTransform: "uppercase" }}>Invited Lectures</div>
          </div>

          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)", textAlign: "center" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-blue)", marginBottom: "4px" }}>42</div>
            <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--agora-text-muted)", textTransform: "uppercase" }}>Poster Presentations</div>
          </div>

          <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", boxShadow: "var(--shadow-agora)", textAlign: "center" }}>
            <div style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--agora-blue)", marginBottom: "4px" }}>WILEY</div>
            <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--agora-text-muted)", textTransform: "uppercase" }}>Special Journal Collection</div>
          </div>
        </div>

        {/* Retrospective Story & Narrative Cards */}
        <div style={{ maxWidth: "920px", margin: "0 auto 70px" }}>
          
          {/* Main Story & Leadership Container */}
          <div style={{
            backgroundColor: "var(--agora-card-bg)",
            padding: "48px",
            borderRadius: "8px",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "var(--shadow-agora)",
            marginBottom: "40px",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "var(--agora-text-dark)"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--agora-text-dark)", borderBottom: "2px solid var(--agora-blue)", paddingBottom: "10px" }}>
              The Grand Success of NMSB-1 at IIT Bombay
            </h2>

            <p style={{ marginBottom: "20px" }}>
              The journey began with the <strong>1st National Meeting on Sodium(-ion) Batteries (NMSB-1)</strong>, held from <strong>October 4–6, 2024, at the Victor Menezes Convention Centre (VMCC), IIT Bombay</strong>.
            </p>

            <p style={{ marginBottom: "20px" }}>
              Organized by the <strong>IITB Research Hub for Green Energy and Sustainability (GESH)</strong> and the <strong>Advanced Batteries & Ceramics Laboratory</strong>, under the leadership of <strong>Prof. Amartya Mukhopadhyay</strong> (Convener) and <strong>Prof. Srinivasan Ramakrishnan</strong> (co-Convener), the conference was a grand success. It was officially endorsed by the <strong>Battery Research Society (of India)</strong> and <strong>The Electrochemical Society of India</strong>.
            </p>

            {/* Organization & Endorsement Spotlight Box */}
            <div style={{
              backgroundColor: "rgba(67, 97, 238, 0.04)",
              border: "1px solid rgba(67, 97, 238, 0.18)",
              borderRadius: "8px",
              padding: "28px 32px",
              margin: "32px 0"
            }}>
              <h4 style={{ fontSize: "1.2rem", color: "var(--agora-blue)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Leadership & Endorsements
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px", color: "var(--agora-text-dark)" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--agora-blue)", fontWeight: "bold" }}>•</span>
                  <span><strong>Conveners:</strong> Prof. Amartya Mukhopadhyay (Convener) & Prof. Srinivasan Ramakrishnan (co-Convener)</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--agora-blue)", fontWeight: "bold" }}>•</span>
                  <span><strong>Organizing Bodies:</strong> IITB Research Hub for Green Energy and Sustainability (GESH) & Advanced Batteries & Ceramics Laboratory</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--agora-blue)", fontWeight: "bold" }}>•</span>
                  <span><strong>Endorsed By:</strong> Battery Research Society (of India) (BRS) & The Electrochemical Society of India (ECSI)</span>
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--agora-blue)", fontWeight: "bold" }}>•</span>
                  <span><strong>Chief Guest:</strong> Dr. V. K. Saraswat, Member, NITI Aayog</span>
                </li>
              </ul>

              {/* External Official Website Links */}
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(67, 97, 238, 0.15)", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a 
                  href="https://www.geshiitb.in/nmsb/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--agora-blue)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  NMSB-1 ARCHIVED WEBSITE ↗
                </a>
                <span style={{ color: "var(--agora-border-light)" }}>|</span>
                <a 
                  href="https://brsindia.org.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--agora-blue)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  BATTERY RESEARCH SOCIETY (BRS) INDIA ↗
                </a>
              </div>
            </div>

            {/* Conference Key Features Grid */}
            <h3 style={{ fontSize: "1.4rem", margin: "28px 0 16px", color: "var(--agora-text-dark)" }}>
              Key Highlights of NMSB-1
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "28px" }}>
              <div style={{ padding: "18px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", border: "1px solid var(--agora-border-light)" }}>
                <div style={{ fontWeight: "800", color: "var(--agora-blue)", marginBottom: "4px" }}>28 Invited Lectures</div>
                <div style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)" }}>Delivered by leading Faculties, Scientists, and Industry executives.</div>
              </div>

              <div style={{ padding: "18px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", border: "1px solid var(--agora-border-light)" }}>
                <div style={{ fontWeight: "800", color: "var(--agora-blue)", marginBottom: "4px" }}>42 Poster Presentations</div>
                <div style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)" }}>Presented by research scholars and post-doctoral researchers.</div>
              </div>

              <div style={{ padding: "18px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", border: "1px solid var(--agora-border-light)" }}>
                <div style={{ fontWeight: "800", color: "var(--agora-blue)", marginBottom: "4px" }}>Round Table Deliberations</div>
                <div style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)" }}>Focusing on science, technology, and policy roadmaps for Na-ion cell manufacturing in India.</div>
              </div>

              <div style={{ padding: "18px", backgroundColor: "var(--agora-light-bg)", borderRadius: "6px", border: "1px solid var(--agora-border-light)" }}>
                <div style={{ fontWeight: "800", color: "var(--agora-blue)", marginBottom: "4px" }}>BRS Website Launch</div>
                <div style={{ fontSize: "0.9rem", color: "var(--agora-text-muted)" }}>Official launch of the Battery Research Society (of India) platform during inaugural session.</div>
              </div>
            </div>

            <p style={{ marginBottom: "20px" }}>
              The conference brought together about <strong>250 attendees pan India</strong>. The enthusiastic participation from dignitaries, faculties, scientists, industry personnel, and research scholars made the event memorable. Energetic and engaging discussions after each talk, during poster sessions, as well as during networking breaks kept the event lively at all times—sharing valuable scientific and technological insights that paved the way toward rapid advancement of sodium-ion battery science and technology in India.
            </p>
          </div>

          {/* Wiley Journals & Publication Partner Highlight */}
          <div style={{
            backgroundColor: "var(--agora-dark-bg)",
            color: "#FFFFFF",
            padding: "40px 48px",
            borderRadius: "8px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap"
          }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <span className="agora-subtitle-badge" style={{ color: "var(--agora-blue)", borderBottomColor: "var(--agora-blue)" }}>
                PUBLICATION PARTNERSHIP
              </span>
              <h3 style={{ fontSize: "1.8rem", margin: "12px 0", color: "#FFFFFF" }}>
                Wiley Journal Special Collections
              </h3>
              <p style={{ fontSize: "1rem", color: "#A0A5B5", lineHeight: "1.7", margin: 0 }}>
                Selected works presented at the meeting (by invited speakers or posters by research scholars/postdoctoral researchers) were considered for publication in special collections of prestigious Wiley journals, including <strong>Small</strong> and <strong>Advanced Sustainable Systems</strong>.
              </p>
            </div>
            <div style={{ padding: "20px 28px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: "1.4rem", fontWeight: "900", color: "#FFFFFF" }}>WILEY</div>
              <div style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "700", marginTop: "4px" }}>Small & Advanced Sustainable Systems</div>
            </div>
          </div>

          {/* About Premier Gathering & Bridge to NMSB-2 */}
          <div style={{
            backgroundColor: "var(--agora-card-bg)",
            padding: "48px",
            borderRadius: "8px",
            border: "1px solid var(--agora-border-light)",
            boxShadow: "var(--shadow-agora)",
            fontSize: "1.05rem",
            lineHeight: "1.8"
          }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "16px", color: "var(--agora-text-dark)" }}>
              A Foundation for NMSB-2
            </h3>
            <p style={{ marginBottom: "16px" }}>
              The National Meeting on Sodium(-ion) Batteries is the premier gathering of leading researchers and industry experts in this field. This meeting serves as a platform for sharing cutting-edge research, innovative technologies, and practical applications for sodium(-ion) battery technology.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Attendees engage in deep technical discussions, network with peers, and explore the latest advancements driving the development and deployment of sodium(-ion) batteries for sustainable energy solutions. In addition to keynote speakers, representatives from battery industries in India and special invitees participate actively.
            </p>

            <div style={{
              backgroundColor: "rgba(67, 97, 238, 0.05)",
              padding: "24px 28px",
              borderRadius: "6px",
              border: "1px solid rgba(67, 97, 238, 0.2)",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px"
            }}>
              <div style={{ flexShrink: 0, marginTop: "2px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--agora-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: "600", color: "var(--agora-text-dark)", lineHeight: "1.6" }}>
                The second edition (NMSB-2) builds on this foundation — bringing the community together once again at IIT Bombay from 22–24 November 2026 to explore new advances, emerging opportunities, and the path toward scalable and sustainable sodium-ion battery technologies.
              </div>
            </div>
          </div>

        </div>

        {/* Photo Gallery Section */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="agora-subtitle-badge">NMSB-1 PHOTO GALLERY</span>
            <h2 style={{ fontSize: "2.5rem" }}>MEMORIES & HIGHLIGHTS ({galleryImages.length} PHOTOS)</h2>
          </div>

          {/* Dynamic Image-Only Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "36px"
          }}>
            {displayedImages.map((src, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  backgroundColor: "var(--agora-card-bg)",
                  borderRadius: "8px",
                  border: "1px solid var(--agora-border-light)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-agora)",
                  cursor: "pointer",
                  height: "220px",
                  position: "relative"
                }}
                className="gallery-card-hover"
              >
                <img 
                  src={src} 
                  alt={`NMSB-1 Conference Photo ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                />

                {/* Subtle Zoom Icon Hover Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(10, 14, 26, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease"
                }} className="gallery-zoom-overlay">
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "var(--agora-blue)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.3)"
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle View Full Gallery Section Button */}
          <div style={{ textAlign: "center" }}>
            {!showFullGallery ? (
              <button 
                onClick={() => setShowFullGallery(true)}
                className="btn-agora-blue" 
                style={{ fontSize: "0.9rem", padding: "14px 32px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                VIEW FULL GALLERY ({galleryImages.length} PHOTOS) ↓
              </button>
            ) : (
              <button 
                onClick={() => setShowFullGallery(false)}
                className="btn-agora-outlined" 
                style={{ fontSize: "0.9rem", padding: "14px 32px" }}
              >
                SHOW FEATURED PHOTOS (8) ↑
              </button>
            )}
          </div>
        </div>

        {/* Pure Image Fullscreen Lightbox Zoom Modal */}
        {selectedIndex !== null && (
          <div 
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(5, 8, 18, 0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              animation: "fadeIn 0.2s ease-out"
            }}
            onClick={closeLightbox}
          >
            {/* Modal Header Controls */}
            <div 
              style={{
                position: "absolute",
                top: "24px",
                left: "32px",
                right: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 10000
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", fontWeight: "700", letterSpacing: "1px" }}>
                PHOTO {selectedIndex + 1} OF {galleryImages.length}
              </div>

              {/* Close (X) Button */}
              <button 
                onClick={closeLightbox}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FFFFFF",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--agora-blue)"; e.currentTarget.style.borderColor = "var(--agora-blue)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)"; }}
                aria-label="Close Lightbox"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10000,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--agora-blue)"; e.currentTarget.style.borderColor = "var(--agora-blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)"; }}
              aria-label="Previous Photo"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Main Lightbox Content Area */}
            <div 
              style={{
                maxWidth: "1150px",
                maxHeight: "85vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedIndex]}
                alt={`NMSB-1 Photo ${selectedIndex + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "82vh",
                  objectFit: "contain",
                  borderRadius: "6px",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              />
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10000,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--agora-blue)"; e.currentTarget.style.borderColor = "var(--agora-blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)"; }}
              aria-label="Next Photo"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}

        {/* NMSB-2 Callout Banner */}
        <div style={{
          backgroundColor: "var(--agora-dark-bg)",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "50px 48px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}>
          <span className="agora-subtitle-badge" style={{ color: "var(--agora-blue)", borderBottomColor: "var(--agora-blue)" }}>
            THE NEXT CHAPTER
          </span>
          <h2 style={{ fontSize: "2.6rem", color: "#FFFFFF", margin: "16px 0" }}>
            JOIN US AT NMSB-2 (22–24 NOV 2026)
          </h2>
          <p style={{ color: "#A0A5B5", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto 30px" }}>
            Register now to secure your delegate pass for the 2nd National Meeting on Sodium(-ion) Batteries at IIT Bombay.
          </p>

          <Link href="/registration" className="btn-agora-blue" style={{ fontSize: "1rem", padding: "16px 36px" }}>
            REGISTER FOR NMSB-2 DELEGATE PASS →
          </Link>
        </div>

      </div>
    </div>
  );
}
