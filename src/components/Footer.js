"use client";
import Link from "next/link";
import { config } from "../config/variables";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px", marginBottom: "60px" }}>
          {/* Column 1: Logo & Subtitle */}
          <div>
            <div className="logo-badge" style={{ marginBottom: "20px" }}>
              <div className="logo-icon">Na</div>
              <span>{config.conference.shortName}</span>
            </div>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Bringing together research leaders, industry pioneers, and policymaking authorities to advance Sodium-ion battery commercialization.
            </p>
          </div>
          
          {/* Column 2: Newsletter / Updates */}
          <div>
            <h3>STAY UPDATED</h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
              Subscribe for conference deadline reminders and keynote announcements.
            </p>
            <form style={{ display: "flex", gap: "8px" }} onSubmit={(e) => { e.preventDefault(); alert("Subscribed for updates!"); }}>
              <input type="email" placeholder="Your Email Address..." required style={{ flex: 1, padding: "12px 16px", borderRadius: "4px" }} />
              <button type="submit" className="btn-agora-blue" style={{ padding: "12px 20px", fontSize: "0.8rem" }}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <h3>NAVIGATION</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.95rem" }}>
              <Link href="/about">About NMSB-2</Link>
              <Link href="/programme">Programme Schedule</Link>
              <Link href="/speakers">Invited Speakers</Link>
              <Link href="/registration">Registration Passes</Link>
              <Link href="/venue">Venue & Travel</Link>
            </div>
          </div>

          {/* Column 4: Contact Secretariat */}
          <div>
            <h3>SECRETARIAT</h3>
            <p style={{ color: "var(--agora-text-muted)", fontSize: "0.95rem", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ASPIRE, IIT Bombay, Mumbai
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" fill="none" stroke="var(--agora-blue)" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--agora-blue)" }}>{config.conference.contactEmail}</a>
              </span>
            </p>
            <div style={{ marginTop: "16px", display: "flex", gap: "12px", fontSize: "0.85rem" }}>
              <Link href="/terms">Terms</Link> • <Link href="/privacy">Privacy</Link> • <Link href="/refund">Refund</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ textAlign: "center", paddingTop: "30px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", color: "var(--agora-text-muted)", fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} {config.conference.name}. All Rights Reserved. Co-organized by GESH, IIT Bombay & BRS.
        </div>
      </div>
    </footer>
  );
}
