"use client";
import AccordionCard from "../../components/AccordionCard";

export default function Refund() {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AccordionCard title="Cancellation & Refund Policy" badge="Policy" defaultOpen={true} icon="💰">
          <div style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <p>[TO BE PROVIDED: Refund window duration and deduction details]</p>
            <p style={{ marginTop: "12px" }}>
              Written cancellation requests received 30 days prior to the conference will be refunded less a 10% administrative processing fee.
            </p>
          </div>
        </AccordionCard>
      </div>
    </div>
  );
}
