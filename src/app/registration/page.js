"use client";
import { useState } from "react";
import { config } from "../../config/variables";

export default function Registration() {
  const fees = config.fees;
  const [selectedPass, setSelectedPass] = useState("faculty");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Redirecting to secure Razorpay payment portal for pass: ${fees[selectedPass].category}`);
    window.location.href = "https://razorpay.com";
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="agora-subtitle-badge">REGISTRATION PASSES</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.5rem" }}>
            CHOOSE YOUR DELEGATE PASS
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.15rem", marginTop: "12px" }}>
            Early-bird registration closes on <strong style={{ color: "var(--agora-blue)" }}>{config.dates.earlyBirdDeadline}</strong>
          </p>
        </div>

        {/* Agora 3-Column Ticket Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "80px" }}>
          {/* Student Pass */}
          <div className={`agora-pricing-card ${selectedPass === "student" ? "featured" : ""}`} onClick={() => setSelectedPass("student")}>
            <div>
              <div className="pricing-icon-deco">▲</div>
              <h3 style={{ fontSize: "1.5rem" }}>STUDENT PASS</h3>
              <div className="pricing-amount">{fees.student.earlyBird}</div>
              <div className="pricing-period">Early Bird (UG/PG/PhD)</div>
              
              <ul className="pricing-features">
                <li>Full 3-Day Technical Sessions Access ✔</li>
                <li>Conference Kit & Abstract Book ✔</li>
                <li>Poster Presentation Entry ✔</li>
                <li>Daily Lunch & Tea Refreshments ✔</li>
              </ul>
            </div>

            <button onClick={handleSubmit} className={selectedPass === "student" ? "btn-agora-blue" : "btn-agora-outlined"}>
              GET PASS NOW
            </button>
          </div>

          {/* Faculty / Academic Pass (Featured) */}
          <div className={`agora-pricing-card ${selectedPass === "faculty" ? "featured" : ""}`} onClick={() => setSelectedPass("faculty")}>
            <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--agora-blue)", color: "#fff", padding: "4px 16px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase" }}>
              RECOMMENDED
            </div>
            <div>
              <div className="pricing-icon-deco">✱</div>
              <h3 style={{ fontSize: "1.5rem" }}>FACULTY PASS</h3>
              <div className="pricing-amount" style={{ color: "var(--agora-blue)" }}>{fees.faculty.earlyBird}</div>
              <div className="pricing-period">Early Bird (Academia)</div>
              
              <ul className="pricing-features">
                <li>Full 3-Day Technical Sessions Access ✔</li>
                <li>Keynotes & Panel Discussions ✔</li>
                <li>Conference Dinner Pass ✔</li>
                <li>Certificate of Participation ✔</li>
              </ul>
            </div>

            <button onClick={handleSubmit} className="btn-agora-blue">
              GET PASS NOW
            </button>
          </div>

          {/* Industry Delegate Pass */}
          <div className={`agora-pricing-card ${selectedPass === "industry" ? "featured" : ""}`} onClick={() => setSelectedPass("industry")}>
            <div>
              <div className="pricing-icon-deco">◬</div>
              <h3 style={{ fontSize: "1.5rem" }}>INDUSTRY PASS</h3>
              <div className="pricing-amount">{fees.industry.earlyBird}</div>
              <div className="pricing-period">Early Bird (Industry)</div>
              
              <ul className="pricing-features">
                <li>Full Access + B2B Networking ✔</li>
                <li>Start-up Showcase Access ✔</li>
                <li>VIP Conference Dinner ✔</li>
                <li>Delegates Directory Access ✔</li>
              </ul>
            </div>

            <button onClick={handleSubmit} className={selectedPass === "industry" ? "btn-agora-blue" : "btn-agora-outlined"}>
              GET PASS NOW
            </button>
          </div>
        </div>

        {/* Agora Registration Form Container */}
        <div style={{ backgroundColor: "var(--agora-card-bg)", padding: "48px", borderRadius: "12px", border: "1px solid var(--agora-border-light)", maxWidth: "850px", margin: "0 auto", boxShadow: "var(--shadow-agora)" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "8px" }}>DELEGATE REGISTRATION FORM</h2>
          <p style={{ color: "var(--agora-text-muted)", marginBottom: "32px" }}>Complete your details to proceed to secure checkout.</p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "16px" }}>
              <select required>
                <option value="">Title *</option>
                <option value="Prof.">Prof.</option>
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <input type="text" placeholder="Full Name (for Badge) *" required />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <input type="email" placeholder="Email Address *" required />
              <input type="tel" placeholder="Mobile Number *" required />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <input type="text" placeholder="Affiliation / Institute *" required />
              <input type="text" placeholder="Designation *" required />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <select value={selectedPass} onChange={(e) => setSelectedPass(e.target.value)} required>
                {Object.keys(fees).map(key => (
                  <option key={key} value={key}>{fees[key].category} - {fees[key].earlyBird}</option>
                ))}
              </select>
              <select required>
                <option value="">Food Preference *</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-vegetarian">Non-vegetarian</option>
                <option value="Jain">Jain</option>
              </select>
            </div>

            <button type="submit" className="btn-agora-blue" style={{ marginTop: "16px", justifyContent: "center", fontSize: "1.05rem" }}>
              PROCEED TO RAZORPAY CHECKOUT →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
