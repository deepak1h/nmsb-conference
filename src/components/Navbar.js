"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "../config/variables";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    setProgrammeDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isHome ? "is-transparent" : ""}`}>
      <div className="container">
        {/* Agora Flower Logo */}
        <Link href="/" className="agora-logo-container" onClick={closeMobileMenu}>
          <svg className="agora-flower-icon" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5C22.2 5 24 6.8 24 9C24 11.2 22.2 13 20 13C17.8 13 16 11.2 16 9C16 6.8 17.8 5 20 5ZM31 16C33.2 16 35 17.8 35 20C35 22.2 33.2 24 31 24C28.8 24 27 22.2 27 20C27 17.8 28.8 16 31 16ZM31 31C33.2 31 35 32.8 35 35C35 37.2 33.2 39 31 39C28.8 39 27 37.2 27 35C27 32.8 28.8 31 31 31ZM20 27C22.2 27 24 28.8 24 31C24 33.2 22.2 35 20 35C17.8 35 16 33.2 16 31C16 28.8 17.8 27 20 27ZM9 16C11.2 16 13 17.8 13 20C13 22.2 11.2 24 9 24C6.8 24 5 22.2 5 20C5 17.8 6.8 16 9 16ZM9 31C11.2 31 13 32.8 13 35C13 37.2 11.2 39 9 39C6.8 39 5 37.2 5 35C5 32.8 6.8 31 9 31Z" />
          </svg>
          <span className="agora-logo-text">{config.conference.shortName}</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop & Mobile Navigation Links */}
        <div className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <Link href="/" className={`nav-link ${isHome ? "active" : ""}`} onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`} onClick={closeMobileMenu}>About</Link>

          {/* Programme Dropdown */}
          <div className="dropdown">
            <span 
              className="nav-link" 
              style={{ cursor: "pointer" }}
              onClick={() => setProgrammeDropdownOpen(!programmeDropdownOpen)}
            >
              Programme ▼
            </span>
            <div className={`dropdown-menu ${programmeDropdownOpen ? "mobile-show" : ""}`}>
              <Link href="/programme" className="dropdown-item" onClick={closeMobileMenu}>Programme Schedule</Link>
              <Link href="/speakers" className="dropdown-item" onClick={closeMobileMenu}>Keynote Speakers</Link>
            </div>
          </div>

          {/* Info Dropdown */}
          <div className="dropdown">
            <span 
              className="nav-link" 
              style={{ cursor: "pointer" }}
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
            >
              Info ▼
            </span>
            <div className={`dropdown-menu ${infoDropdownOpen ? "mobile-show" : ""}`}>
              <Link href="/recap" className="dropdown-item" onClick={closeMobileMenu}>NMSB-1 Retrospective</Link>
              <Link href="/venue" className="dropdown-item" onClick={closeMobileMenu}>Venue & Travel</Link>
              <Link href="/committees" className="dropdown-item" onClick={closeMobileMenu}>Committees & Team</Link>
              <Link href="/sponsors" className="dropdown-item" onClick={closeMobileMenu}>Sponsors</Link>
              <Link href="/contact" className="dropdown-item" onClick={closeMobileMenu}>Contact</Link>
            </div>
          </div>

          {/* Mobile Registration Button */}
          <div className="nav-actions">
            <Link href="/registration" className="btn-agora-blue" style={{ padding: "14px 28px", fontSize: "0.8rem", width: "100%", justifyContent: "center" }} onClick={closeMobileMenu}>
              LET'S REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
