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

          {/* Navigation Action Button */}
          <div className="nav-actions">
            <Link href="/registration" className="btn-agora-blue" style={{ padding: "14px 28px", fontSize: "0.8rem" }}>
              LET'S REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
