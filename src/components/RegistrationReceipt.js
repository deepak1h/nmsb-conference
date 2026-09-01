"use client";
import { config } from "../config/variables";

export default function RegistrationReceipt({ record, onReset }) {
  if (!record) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* Print Specific CSS Styles */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #FFFFFF !important;
            color: #000000 !important;
          }
          nav, footer, .no-print, .hero-pagination-bar {
            display: none !important;
          }
          .printable-receipt-card {
            box-shadow: none !important;
            border: 2px solid #000000 !important;
            margin: 0 !important;
            padding: 20px !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div className="printable-receipt-card" style={{
        backgroundColor: "#FFFFFF",
        color: "#0B0C10",
        borderRadius: "8px",
        border: "1px solid var(--agora-border-light)",
        boxShadow: "var(--shadow-agora)",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "var(--font-inter), sans-serif"
      }}>
        
        {/* Receipt Header / Conference Branding */}
        <div style={{
          display: "flex",
          justify: "space-between",
          alignItems: "flex-start",
          borderBottom: "3px solid var(--agora-blue)",
          paddingBottom: "20px",
          marginBottom: "28px"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "var(--agora-blue)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.9rem"
              }}>
                Na
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#0B0C10" }}>
                {config.conference.shortName} • REGISTRATION RECEIPT
              </h2>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#555555", margin: 0 }}>
              {config.conference.name}
            </p>
            <p style={{ fontSize: "0.85rem", color: "#555555", margin: 0 }}>
              {config.conference.dates} • {config.conference.venue}
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{
              display: "inline-block",
              backgroundColor: "#E8F5E9",
              color: "#2E7D32",
              border: "1px solid #A5D6A7",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "900",
              textTransform: "uppercase",
              marginBottom: "8px"
            }}>
              ✔ PAYMENT SUCCESSFUL
            </div>
            <p style={{ fontSize: "0.8rem", color: "#666", margin: 0 }}>
              Date: <strong>{new Date(record.timestamp).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
            </p>
          </div>
        </div>

        {/* Reference & Transaction Details */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          backgroundColor: "#F8F9FA",
          padding: "16px 20px",
          borderRadius: "6px",
          border: "1px solid #E9ECEF",
          marginBottom: "28px",
          fontSize: "0.9rem"
        }}>
          <div>
            <span style={{ color: "#6C757D", fontSize: "0.8rem", display: "block" }}>REGISTRATION REFERENCE NO:</span>
            <strong style={{ fontSize: "1.1rem", color: "var(--agora-blue)" }}>{record.registrationId}</strong>
          </div>
          <div>
            <span style={{ color: "#6C757D", fontSize: "0.8rem", display: "block" }}>TRANSACTION REFERENCE:</span>
            <strong style={{ fontSize: "1.1rem", color: "#0B0C10" }}>{record.transactionRef}</strong>
          </div>
        </div>

        {/* Delegate Information */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "#0B0C10", marginBottom: "12px", borderBottom: "1px solid #E9ECEF", paddingBottom: "6px" }}>
            DELEGATE PROFILE
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "0.9rem", color: "#333" }}>
            <div><strong>Delegate Name:</strong> {record.title} {record.fullName}</div>
            <div><strong>Email Address:</strong> {record.email}</div>
            <div><strong>Mobile Number:</strong> {record.mobile}</div>
            <div><strong>Category:</strong> {record.category.toUpperCase()}</div>
            <div><strong>Affiliation:</strong> {record.organization}</div>
            <div><strong>BRS Membership:</strong> {record.isBrsMember === "YES" ? `Member (ID: ${record.brsNumber})` : "Non-member"}</div>
            <div><strong>Food Preference:</strong> {record.foodPreference}</div>
            <div><strong>Payment Method:</strong> {record.paymentMethod.toUpperCase()}</div>
          </div>
        </div>

        {/* Tax Invoice Breakdown */}
        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "#0B0C10", marginBottom: "12px", borderBottom: "1px solid #E9ECEF", paddingBottom: "6px" }}>
            FEE BREAKDOWN & TAX INVOICE
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ backgroundColor: "#F1F3F5", borderBottom: "2px solid #DEE2E6", textAlign: "left" }}>
                <th style={{ padding: "10px 12px" }}>Description</th>
                <th style={{ padding: "10px 12px", textAlign: "right" }}>Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #E9ECEF" }}>
                <td style={{ padding: "12px" }}>
                  NMSB-2 Conference Pass Tariff ({record.category.toUpperCase()})
                  {record.isBrsMember === "YES" && <span style={{ display: "block", fontSize: "0.8rem", color: "#2E7D32" }}>* 15% BRS Member Discount Applied</span>}
                </td>
                <td style={{ padding: "12px", textAlign: "right", fontWeight: "700" }}>
                  INR {Number(record.baseFee).toLocaleString("en-IN")}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #E9ECEF" }}>
                <td style={{ padding: "12px" }}>Statutory GST (18%)</td>
                <td style={{ padding: "12px", textAlign: "right", fontWeight: "700" }}>
                  INR {Number(record.gstAmount).toLocaleString("en-IN")}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#F8F9FA", fontWeight: "900", fontSize: "1.05rem" }}>
                <td style={{ padding: "14px 12px", color: "var(--agora-blue)" }}>TOTAL PAID AMOUNT (INCL. TAXES):</td>
                <td style={{ padding: "14px 12px", textAlign: "right", color: "var(--agora-blue)" }}>
                  INR {Number(record.totalAmount).toLocaleString("en-IN")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Verification Footer & QR Placeholder */}
        <div style={{
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          borderTop: "2px dashed #DEE2E6",
          paddingTop: "20px",
          marginTop: "20px",
          fontSize: "0.8rem",
          color: "#6C757D"
        }}>
          <div>
            <p style={{ margin: "0 0 4px" }}>Organized jointly by <strong>GESH, IIT Bombay & BRS</strong>.</p>
            <p style={{ margin: 0 }}>This is a computer-generated tax invoice and registration entry pass.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "65px",
              height: "65px",
              border: "2px solid #000",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.6rem",
              fontWeight: "900",
              backgroundColor: "#FAF9F6"
            }}>
              [QR VERIFY]
            </div>
            <span style={{ fontSize: "0.65rem", display: "block", marginTop: "2px" }}>PASS VERIFIED</span>
          </div>
        </div>

        {/* Non-printable Action Buttons */}
        <div className="no-print" style={{
          marginTop: "36px",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={handlePrint}
            className="btn-agora-blue" 
            style={{ fontSize: "0.95rem", padding: "14px 32px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            🖨️ PRINT RECEIPT / SAVE PDF
          </button>

          <button 
            onClick={onReset}
            className="btn-agora-outlined" 
            style={{ fontSize: "0.95rem", padding: "14px 24px" }}
          >
            + REGISTER ANOTHER DELEGATE
          </button>
        </div>

      </div>
    </div>
  );
}
