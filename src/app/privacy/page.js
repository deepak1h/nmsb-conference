"use client";
import Link from "next/link";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Privacy() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "85vh" }}>
      <div className="container" style={{ maxWidth: "950px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="agora-subtitle-badge">NMSB-2 POLICY</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>
            PRIVACY POLICY
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem", marginTop: "10px" }}>
            How we collect, protect, and use your personal and professional data for {config.conference.shortName}.
          </p>
        </div>

        {/* Detailed Policy Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <AccordionCard title="1. Information We Collect" badge="Data Collection" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                When you register, submit an abstract, or inquire about sponsorship for {config.conference.shortName}, we collect the following personal and professional details:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Full Name, Title, Gender, and Professional Designation</li>
                <li>Institution, University, Laboratory, or Corporate Organization Name</li>
                <li>Email Address, Mobile Phone Number, and Mailing Address</li>
                <li>BRS Membership Status and Membership ID (if applicable)</li>
                <li>Dietary Preferences and Special Accessibility Requirements</li>
                <li>Payment transaction IDs, GST numbers, and billing details</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="2. Purpose of Data Processing" badge="Usage" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Your information is used strictly for conference administrative purposes, including:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Processing delegate registration passes and generating official digital receipts and GST invoices.</li>
                <li>Printing official venue badges and facilitating entry authorization at ASPIRE - IIT Bombay Research Park.</li>
                <li>Publishing accepted speaker/author biographies and paper titles in the official NMSB-2 Abstract Book.</li>
                <li>Sending crucial schedule announcements, keynote reminders, and conference certificates.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="3. Payment Security & Financial Data" badge="Payment Safety" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                All online registration payments are processed securely through our PCI-DSS compliant payment gateway partner (Razorpay):
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Payment details (Credit Card numbers, Net Banking credentials, UPI PINs) are encrypted via 256-bit SSL technology directly on the gateway server.</li>
                <li>The conference organizers and secretariat do NOT store, view, or process sensitive credit/debit card numbers or bank passwords.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="4. Data Protection & Non-Disclosure" badge="Confidentiality" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                We value your privacy and maintain strict confidentiality standards:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>We do NOT sell, rent, trade, or distribute delegate personal data to third-party commercial advertisers or telemarketers.</li>
                <li>Data is shared only with co-organizers (GESH, IIT Bombay & BRS) and authorized gateway/IT service providers solely for event execution.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="5. Media & Event Photography Notice" badge="Photography" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Official photographers and media teams will capture general photos, video highlights, and group photos during technical sessions, poster exhibits, and networking dinners. These images may be used in official post-conference retrospectives, newsletters, and academic archive galleries.
              </p>
            </div>
          </AccordionCard>

          <AccordionCard title="6. Privacy Rights & Contact" badge="Support" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                For any data correction requests, inquiries, or privacy concerns, please contact the Secretariat at <a href={`mailto:${config.conference.contactEmail}`} style={{ color: "var(--agora-blue)", fontWeight: "700" }}>{config.conference.contactEmail}</a>.
              </p>
            </div>
          </AccordionCard>

        </div>

        {/* Footer Navigation Back Links */}
        <div style={{ marginTop: "40px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/terms" className="btn-agora-outlined" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            VIEW TERMS & CONDITIONS
          </Link>
          <Link href="/refund" className="btn-agora-outlined" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            VIEW REFUND POLICY
          </Link>
          <Link href="/registration" className="btn-agora-blue" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            PROCEED TO REGISTRATION →
          </Link>
        </div>

      </div>
    </div>
  );
}

