"use client";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Privacy() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Privacy Policy" badge="Policy" defaultOpen={true} icon="🔒">
          <div style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <p>[TO BE PROVIDED: Official Privacy Policy draft]</p>
            <p style={{ marginTop: "12px" }}>
              We respect your privacy. Personal information collected during registration is used strictly for organizing {config.conference.shortName} and processing payments securely via Razorpay.
            </p>
          </div>
        </AccordionCard>
      </div>
    </div>
  );
}
