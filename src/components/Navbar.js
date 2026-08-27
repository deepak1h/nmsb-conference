"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "../config/variables";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className={`navbar ${isHome ? "is-transparent" : ""}`}>
      <div className="container">
        {/* Agora Flower Logo */}
        <Link href="/" className="agora-logo-container">
          <svg className="agora-flower-icon" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5C22.2 5 24 6.8 24 9C24 11.2 22.2 13 20 13C17.8 13 16 11.2 16 9C16 6.8 17.8 5 20 5ZM31 16C33.2 16 35 17.8 35 20C35 22.2 33.2 24 31 24C28.8 24 27 22.2 27 20C27 17.8 28.8 16 31 16ZM31 31C33.2 31 35 32.8 35 35C35 37.2 33.2 39 31 39C28.8 39 27 37.2 27 35C27 32.8 28.8 31 31 31ZM20 27C22.2 27 24 28.8 24 31C24 33.2 22.2 35 20 35C17.8 35 16 33.2 16 31C16 28.8 17.8 27 20 27ZM9 16C11.2 16 13 17.8 13 20C13 22.2 11.2 24 9 24C6.8 24 5 22.2 5 20C5 17.8 6.8 16 9 16ZM9 31C11.2 31 13 32.8 13 35C13 37.2 11.2 39 9 39C6.8 39 5 37.2 5 35C5 32.8 6.8 31 9 31Z" />
          </svg>
          <span className="agora-logo-text">{config.conference.shortName}</span>
        </Link>
        
        {/* Navigation Items */}
        <div className="nav-links">
          <Link href="/" className={`nav-link ${isHome ? "active" : ""}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About</Link>
          
          <div className="dropdown">
            <span className="nav-link" style={{ cursor: "pointer" }}>Programme ▼</span>
            <div className="dropdown-menu">
              <Link href="/programme" className="dropdown-item">Programme Schedule</Link>
              <Link href="/speakers" className="dropdown-item">Keynote Speakers</Link>
              <Link href="/abstracts" className="dropdown-item">Abstract Submission</Link>
              <Link href="/sponsors" className="dropdown-item">Start-up Showcase</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="nav-link" style={{ cursor: "pointer" }}>Info ▼</span>
            <div className="dropdown-menu">
              <Link href="/venue" className="dropdown-item">Venue & Travel</Link>
              <Link href="/committees" className="dropdown-item">Committees & Team</Link>
              <Link href="/sponsors" className="dropdown-item">Sponsors</Link>
              <Link href="/contact" className="dropdown-item">Contact</Link>
            </div>
          </div>

          {/* Agora Navigation Action Tools */}
          <div className="nav-actions">
            {/* Search Tool */}
            <div className="nav-action-icon" onClick={() => alert("Search Forum...")} title="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            {/* Shopping Bag Icon with Badge */}
            <Link href="/registration" className="nav-action-icon" style={{ position: "relative" }} title="Registration Bag">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                backgroundColor: "var(--agora-blue)",
                color: "#FFFFFF",
                fontSize: "0.65rem",
                fontWeight: "900",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                0
              </span>
            </Link>

            {/* Grid Icon */}
            <div className="nav-action-icon" onClick={() => alert("Toggle Menu Grid...")} title="Menu Grid">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="5" cy="5" r="2.5"></circle>
                <circle cx="12" cy="5" r="2.5"></circle>
                <circle cx="19" cy="5" r="2.5"></circle>
                <circle cx="5" cy="12" r="2.5"></circle>
                <circle cx="12" cy="12" r="2.5"></circle>
                <circle cx="19" cy="12" r="2.5"></circle>
                <circle cx="5" cy="19" r="2.5"></circle>
                <circle cx="12" cy="19" r="2.5"></circle>
                <circle cx="19" cy="19" r="2.5"></circle>
              </svg>
            </div>

            {/* Solid Cobalt Action Button */}
            <Link href="/registration" className="btn-agora-blue" style={{ padding: "14px 28px", fontSize: "0.8rem" }}>
              LET'S REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
