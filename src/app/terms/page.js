"use client";
import Link from "next/link";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Terms() {
  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0", minHeight: "85vh" }}>
      <div className="container" style={{ maxWidth: "950px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="agora-subtitle-badge">NMSB-2 POLICY</span>
          <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>
            TERMS & CONDITIONS
          </h1>
          <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem", marginTop: "10px" }}>
            General terms governing website use, delegate registration, and participation at {config.conference.shortName}.
          </p>
        </div>

        {/* Detailed Policy Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <AccordionCard title="1. Acceptance of Terms" badge="Overview" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                By accessing this website, registering as a delegate, submitting scientific abstracts, or attending {config.conference.name} ({config.conference.shortName}), you agree to be bound by these Terms & Conditions.
              </p>
              <p style={{ marginTop: "10px" }}>
                {config.conference.shortName} is co-organized by the Group for Energy Storage and Harvesting (GESH), Dept. of Metallurgical Engineering & Materials Science / Dept. of Chemistry, IIT Bombay, in partnership with the Battery Research Society (BRS).
              </p>
            </div>
          </AccordionCard>

          <AccordionCard title="2. Registration, Pass Categories & Payment" badge="Registration" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Delegates must select the appropriate registration tier (Faculty/Scientist, Student/Post-doc, or Industry) during registration:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Proof of student/academic status or BRS membership ID may be requested during badge check-in at the venue.</li>
                <li>All registration fees exclude statutory 18% GST, which is added at final checkout.</li>
                <li>Payment must be completed online through our authorized payment gateway (Razorpay). Off-line bank transfers require prior approval from the Secretariat.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="3. Cancellation & No Refund Policy" badge="Financial Terms" defaultOpen={true}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p style={{ fontWeight: "700", color: "var(--agora-red)" }}>
                STRICT NO REFUND POLICY: All registration fees paid for NMSB-2 are non-refundable under any circumstances.
              </p>
              <p style={{ marginTop: "8px" }}>
                For complete details regarding delegate substitution options and payment error resolution, please read our dedicated <Link href="/refund" style={{ color: "var(--agora-blue)", fontWeight: "700" }}>Cancellation & Refund Policy Page</Link>.
              </p>
            </div>
          </AccordionCard>

          <AccordionCard title="4. Campus Access, Badges & Code of Conduct" badge="Conduct & Safety" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                All delegates must adhere to professional academic decorum and security regulations of IIT Bombay:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Official conference badges must be worn prominently at all times inside ASPIRE - IIT Bombay Research Park. Badges are non-transferable on-site.</li>
                <li>Valid government-issued photo ID (Aadhaar, Passport, Driving License, or Employee Card) is required during check-in.</li>
                <li>Organizers reserve the right to revoke venue access without refund in cases of disruptive, harassing, or unacademic behavior.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="5. Intellectual Property & Recording Rules" badge="Copyright" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Scientific presentations, slides, and posters presented at NMSB-2 contain proprietary and unpublished research:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Unauthorized photography, audio recording, or video recording of technical lectures, slide decks, or scientific poster boards is strictly prohibited without explicit written permission from the author/presenter.</li>
                <li>All intellectual property rights remain with respective authors and institutions.</li>
              </ul>
            </div>
          </AccordionCard>

          <AccordionCard title="6. Liability Disclaimer" badge="Legal Notice" defaultOpen={false}>
            <div style={{ color: "var(--agora-text-dark)", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                The conference organizers, IIT Bombay, and BRS shall not be held liable for personal injuries, loss of personal belongings, theft, travel cancellations, or indirect damages incurred by delegates before, during, or after the event. Delegates are advised to secure personal travel and health insurance.
              </p>
            </div>
          </AccordionCard>

        </div>

        {/* Footer Navigation Back Links */}
        <div style={{ marginTop: "40px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/privacy" className="btn-agora-outlined" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            VIEW PRIVACY POLICY
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

