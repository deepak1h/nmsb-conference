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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isHome ? "is-transparent" : ""}`}>
      <div className="container">
        {/* Agora Flower Logo */}
        <Link href="/" className="agora-logo-container" onClick={closeMobileMenu}>
          <span className="agora-logo-text">{config.conference.shortName}</span>
        </Link>

        {/* Right Controls for Mobile Header: Logos Strip + Hamburger Button */}
        <div className="mobile-header-right">
          <div className="mobile-logos-strip">
            <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer" className="mobile-logo-item" title="IIT Bombay">
              <img src="/images/logo/iitb.png" alt="IIT Bombay Logo" />
            </a>
            <span className="mobile-logo-divider">|</span>
            <a href="https://gesh.iitb.ac.in/" target="_blank" rel="noopener noreferrer" className="mobile-logo-item" title="Group for Energy Storage and Harvesting (GESH)">
              <img src="/images/logo/gesh.jpg" alt="GESH Logo" />
            </a>
            <span className="mobile-logo-divider">|</span>
            <a href="https://brsindia.org.in/" target="_blank" rel="noopener noreferrer" className="mobile-logo-item" title="Battery Research Society (BRS)">
              <img src="/images/logo/brs.jpg" alt="BRS Logo" />
            </a>
            <span className="mobile-logo-divider">|</span>
            <a href="https://htemlabiitb.wixsite.com/htem" target="_blank" rel="noopener noreferrer" className="mobile-logo-item" title="Advanced Batteries & Ceramics Laboratory (ABCL) / Amartya Lab">
              <img src="/images/logo/abcl.jpg" alt="ABCL / Amartya Lab Logo" />
            </a>
            <span className="mobile-logo-divider">|</span>
            <a href="https://www.srinivasan-lab.com/" target="_blank" rel="noopener noreferrer" className="mobile-logo-item" title="Srinivasan Lab">
              <img src="/images/logo/srinivasan_lab.jpg" alt="Srinivasan Lab Logo" />
            </a>
            <span className="mobile-logo-divider hamburger-separator">|</span>
          </div>

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
        </div>

        {/* Desktop & Mobile Navigation Links (All 9 items directly at top) */}
        <div className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/committees" className={`nav-link ${pathname === "/committees" ? "active" : ""}`} onClick={closeMobileMenu}>
            Organiser
          </Link>
          <Link href="/recap" className={`nav-link ${pathname === "/recap" ? "active" : ""}`} onClick={closeMobileMenu}>
            NMSB-1
          </Link>
          <Link href="/speakers" className={`nav-link ${pathname === "/speakers" ? "active" : ""}`} onClick={closeMobileMenu}>
            Guests & Speakers
          </Link>
          <Link href="/sponsors" className={`nav-link ${pathname === "/sponsors" ? "active" : ""}`} onClick={closeMobileMenu}>
            Sponsor
          </Link>
          <Link href="/programme" className={`nav-link ${pathname === "/programme" ? "active" : ""}`} onClick={closeMobileMenu}>
            Schedule
          </Link>
          <Link href="/venue" className={`nav-link ${pathname === "/venue" ? "active" : ""}`} onClick={closeMobileMenu}>
            Venue
          </Link>
          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`} onClick={closeMobileMenu}>
            Contact Us
          </Link>
          <a
            href="https://www.nmbrs26.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={closeMobileMenu}
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            <span>BRS</span>
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>

        </div>
      </div>
    </nav>
  );
}
