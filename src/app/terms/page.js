"use client";
import AccordionCard from "../../components/AccordionCard";
import { config } from "../../config/variables";

export default function Terms() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Terms & Conditions" badge="Policy" defaultOpen={true}>
          <div style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <p>[TO BE PROVIDED: Draft content for official Terms & Conditions]</p>
            <p style={{ marginTop: "12px" }}>
              By registering for {config.conference.shortName}, you agree to observe all official code of conduct guidelines established by IIT Bombay and BRS.
            </p>
          </div>
        </AccordionCard>
      </div>
    </div>
  );
}
