"use client";
import Link from "next/link";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Refund() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "85vh" }}>
      <div className="container" style={{ maxWidth: "950px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="agora-subtitle-badge">NMSB-2 POLICY</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>
            CANCELLATION & REFUND POLICY
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem", marginTop: "10px" }}>
            Official financial policy guidelines for delegates registering for {config.conference.shortName} at IIT Bombay.
          </p>
        </div>

        {/* Subtle Policy Note */}
        <div style={{
          backgroundColor: "var(--agora-card-bg)",
          border: "1px solid var(--agora-border-light)",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "32px",
          boxShadow: "var(--shadow-agora)"
        }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--agora-text-dark)", fontWeight: "700", marginBottom: "6px" }}>
            Registration Fee Terms
          </h3>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
            All registration fee payments made for {config.conference.name} ({config.conference.shortName}) are non-refundable and non-transferable. By completing your registration and fee payment, you acknowledge and agree to these terms.
          </p>
        </div>

        {/* Detailed Policy Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <AccordionCard title="1. Non-Refundability of Registration Fees" badge="Core Terms" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Registration fees paid for {config.conference.shortName} cover essential conference logistics, venue reservation at ASPIRE - IIT Bombay Research Park, delegate kits, catering, and administration.
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>No refunds, cancellations, or partial refunds will be granted after registration fees have been processed.</li>
                <li>Refund requests will not be entertained for delegate non-attendance, travel delays, flight cancellations, illness, visa rejections, or personal scheduling conflicts.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="2. Delegate Substitution Policy" badge="Transfers" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                While registrations cannot be canceled or refunded, delegate substitution is permitted under the following conditions:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>The substitute delegate must belong to the same institution, university, research laboratory, or company as the original registrant.</li>
                <li>Written requests for delegate substitution must be sent to the Secretariat at <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--agora-blue)", fontWeight: "700" }}>{config.conference.contactEmail}</a> at least 10 working days prior to the conference start date (by November 12, 2026).</li>
                <li>Substitution requests received after November 12, 2026, cannot be processed due to badge printing and security clearance guidelines.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="3. Event Rescheduling & Force Majeure" badge="Contingencies" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                In the event that {config.conference.shortName} is rescheduled, postponed, or converted to a hybrid/virtual format due to unforeseen circumstances beyond the organizers' control (such as natural disasters, government mandates, extreme weather, public health directives, or campus safety protocols):
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>All paid delegate registrations will automatically be rolled over to the rescheduled dates or updated conference format.</li>
                <li>Monetary cash refunds will not be issued in force majeure situations.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="4. Payment Gateway Failure & Duplicate Transactions" badge="Gateway Support" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                If a delegate experiences a technical failure or double debit during the online payment gateway transaction:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>If your bank account is debited twice for a single registration, please notify us immediately with transaction receipts at <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--agora-blue)", fontWeight: "700" }}>{config.conference.contactEmail}</a>.</li>
                <li>Upon Secretariat verification with the payment gateway partner (Razorpay), duplicate charges will be credited back to the original funding account within 7–10 working days.</li>
              </ul>
            </div>
          </AccordionCard>

        </div>

        {/* Footer Navigation Back Links */}
        <div style={{ marginTop: "40px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/terms" className="btn-agora-outlined" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            VIEW TERMS & CONDITIONS
          </Link>
          <Link href="/registration" className="btn-agora-blue" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            PROCEED TO REGISTRATION →
          </Link>
        </div>

      </div>
    </div>
  );
}

