"use client";
import { useState, useEffect } from "react";
import { config } from "../../config/variables";
import RegistrationReceipt from "../../components/RegistrationReceipt";

export default function Registration() {
  const isEarlyBird = new Date() < new Date("2026-11-01");

  // Wizard & Submitted Record State
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "Dr.",
    fullName: "",
    email: "",
    mobile: "",
    category: "faculty", // 'faculty', 'scientist', 'industry', 'student'
    organization: "",
    isBrsMember: false,
    brsNumber: "",
    foodPreference: "Vegetarian",
  });

  // Dynamically load Razorpay Checkout JS script
  useEffect(() => {
    const scriptId = "razorpay-checkout-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Frontend Tariff Calculation for Live Preview
  const getSelectedBaseFee = () => {
    const isBrs = formData.isBrsMember;
    if (formData.category === "industry") {
      return isBrs ? (isEarlyBird ? 12750 : 17000) : (isEarlyBird ? 15000 : 20000);
    } else {
      // Faculty or Scientist
      return isBrs ? (isEarlyBird ? 7650 : 10200) : (isEarlyBird ? 9000 : 12000);
    }
  };

  const baseFee = getSelectedBaseFee();
  const gstAmount = Math.round(baseFee * config.fees.gstRate);
  const totalAmount = baseFee + gstAmount;

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Production Razorpay Order Creation & Verification Flow
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Step 1: Call Backend to Create Razorpay Order & Validate Fees Server-Side
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const orderData = await orderRes.json();
      if (!orderData.success) {
        alert(`Order Creation Error: ${orderData.error}`);
        setIsSubmitting(false);
        return;
      }

      // Step 2: In Mock Mode (Dev without Keys), Simulate Instant Verification
      if (orderData.isMock && (typeof window.Razorpay === "undefined" || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)) {
        console.log("Mock Mode Active: Simulating Payment Verification...");
        
        const mockVerifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: orderData.orderId,
            razorpay_payment_id: `pay_mock_${Math.random().toString(36).substring(2, 10)}`,
            razorpay_signature: "mock_signature_valid",
            registrationData: {
              ...formData,
              baseFee: orderData.baseFee,
              gstAmount: orderData.gstAmount,
              totalAmount: orderData.totalAmount
            }
          })
        });

        const mockVerifyData = await mockVerifyRes.json();
        if (mockVerifyData.success) {
          setSubmittedRecord(mockVerifyData.data);
        } else {
          alert(`Verification Error: ${mockVerifyData.error}`);
        }
        setIsSubmitting(false);
        return;
      }

      // Step 3: Open Production Razorpay Checkout Modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "NMSB-2 Conference",
        description: `Delegate Registration (${formData.category.toUpperCase()})`,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=150&q=80",
        order_id: orderData.orderId,
        prefill: {
          name: `${formData.title} ${formData.fullName}`,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: "#4361EE"
        },
        handler: async function (response) {
          // Payment Succeeded — Call Backend HMAC SHA256 Verification Endpoint
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                registrationData: {
                  ...formData,
                  baseFee: orderData.baseFee,
                  gstAmount: orderData.gstAmount,
                  totalAmount: orderData.totalAmount
                }
              })
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              setSubmittedRecord(verifyData.data);
            } else {
              alert(`Payment Verification Error: ${verifyData.error}`);
            }
          } catch (verifyErr) {
            console.error("Verification Call Failed:", verifyErr);
            alert("Payment verification network error. Please contact conference secretariat.");
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: function () {
            console.log("Razorpay Checkout Modal Dismissed by User");
            setIsSubmitting(false);
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on("payment.failed", function (failResponse) {
        console.error("Payment Failed:", failResponse.error);
        alert(`Payment Failed: ${failResponse.error.description}`);
        setIsSubmitting(false);
      });

      razorpayInstance.open();

    } catch (err) {
      console.error("Payment Checkout Error:", err);
      alert("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setCurrentStep(1);
    setFormData({
      title: "Dr.",
      fullName: "",
      email: "",
      mobile: "",
      category: "faculty",
      organization: "",
      isBrsMember: false,
      brsNumber: "",
      foodPreference: "Vegetarian",
    });
  };

  return (
    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "80px 0" }}>
      <div className="container">
        
        {/* Render Printable Receipt on Verified Payment Success */}
        {submittedRecord ? (
          <div>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span className="pill-badge" style={{ backgroundColor: "#2E7D32", color: "#FFFFFF", padding: "6px 18px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                REGISTRATION & PAYMENT CONFIRMED
              </span>
              <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "2.8rem", marginTop: "12px" }}>
                REGISTRATION RECEIPT
              </h1>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "1.05rem" }}>
                A confirmation has been saved to the conference database. Please print or save your receipt below.
              </p>
            </div>

            <RegistrationReceipt record={submittedRecord} onReset={handleReset} />
          </div>
        ) : (
          <div>
            {/* Header Title */}
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span className="agora-subtitle-badge">NMSB-2 DELEGATE REGISTRATION</span>
              <h1 className="agora-hero-headline" style={{ color: "var(--agora-text-dark)", fontSize: "3.2rem" }}>
                DELEGATE REGISTRATION
              </h1>
              <p style={{ color: "var(--agora-text-muted)", fontSize: "1.1rem", marginTop: "10px", maxWidth: "750px", margin: "10px auto 0" }}>
                Register to join NMSB-2 at IIT Bombay from 22–24 November 2026.
              </p>
            </div>

            {/* Fee Schedule Reference Table */}
            <div style={{ 
              backgroundColor: "var(--agora-card-bg)", 
              padding: "36px 40px", 
              borderRadius: "8px", 
              border: "1px solid var(--agora-border-light)", 
              boxShadow: "var(--shadow-agora)", 
              marginBottom: "60px" 
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "var(--agora-text-dark)" }}>
                  FEE SCHEDULE MATRIX
                </h3>
                <span className="pill-badge" style={{ backgroundColor: "var(--agora-blue)", color: "#FFFFFF", padding: "6px 14px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "700" }}>
                  EARLY BIRD DEADLINE: NOVEMBER 1, 2026
                </span>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--agora-border-light)", backgroundColor: "var(--agora-light-bg)" }}>
                      <th style={{ padding: "14px 16px" }}>Registration Category</th>
                      <th style={{ padding: "14px 16px" }}>Before Nov 1, 2026 (Early Bird)</th>
                      <th style={{ padding: "14px 16px" }}>After Nov 1, 2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)" }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>Faculty & Scientist</strong> (non-BRS member)
                      </td>
                      <td style={{ padding: "14px 16px", color: "var(--agora-blue)", fontWeight: "700" }}>INR 9,000</td>
                      <td style={{ padding: "14px 16px" }}>INR 12,000</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)", backgroundColor: "rgba(67, 97, 238, 0.03)" }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>Faculty & Scientist</strong> (BRS member - 15% Off)
                      </td>
                      <td style={{ padding: "14px 16px", color: "var(--agora-blue)", fontWeight: "700" }}>INR 7,650</td>
                      <td style={{ padding: "14px 16px" }}>INR 10,200</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)", opacity: 0.75 }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>Student / Post-doc / Project staff</strong> (non-BRS member)
                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "700" }}>* Opens shortly</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>INR 5,000</td>
                      <td style={{ padding: "14px 16px" }}>INR 6,500</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)", backgroundColor: "rgba(67, 97, 238, 0.03)", opacity: 0.75 }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>Student / Post-doc / Project staff</strong> (BRS member)
                        <span style={{ display: "block", fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "700" }}>* Opens shortly</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>INR 4,250</td>
                      <td style={{ padding: "14px 16px" }}>INR 5,525</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)" }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>From Industry</strong> (non-BRS member)
                      </td>
                      <td style={{ padding: "14px 16px", color: "var(--agora-blue)", fontWeight: "700" }}>INR 15,000</td>
                      <td style={{ padding: "14px 16px" }}>INR 20,000</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--agora-border-light)", backgroundColor: "rgba(67, 97, 238, 0.03)" }}>
                      <td style={{ padding: "14px 16px" }}>
                        <strong>From Industry</strong> (BRS member - 15% Off)
                      </td>
                      <td style={{ padding: "14px 16px", color: "var(--agora-blue)", fontWeight: "700" }}>INR 12,750</td>
                      <td style={{ padding: "14px 16px" }}>INR 17,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Important Notices */}
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px dashed var(--agora-border-light)", fontSize: "0.88rem", color: "var(--agora-text-muted)", lineHeight: "1.7" }}>
                <p>• {config.fees.notes.taxExclusion}</p>
                <p>• {config.fees.notes.refundPolicy}</p>
                <p>• {config.fees.notes.inclusions}</p>
              </div>
            </div>

            {/* Wizard Container */}
            <div style={{ 
              backgroundColor: "var(--agora-card-bg)", 
              borderRadius: "8px", 
              border: "1px solid var(--agora-border-light)", 
              boxShadow: "var(--shadow-agora)", 
              maxWidth: "850px", 
              margin: "0 auto", 
              overflow: "hidden" 
            }}>
              
              {/* Wizard Step Indicators */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", backgroundColor: "var(--agora-dark-bg)", color: "#FFFFFF" }}>
                <div style={{ 
                  padding: "18px 12px", 
                  textAlign: "center", 
                  fontSize: "0.85rem", 
                  fontWeight: "700", 
                  borderBottom: currentStep === 1 ? "4px solid var(--agora-blue)" : "4px solid transparent",
                  opacity: currentStep === 1 ? 1 : 0.6 
                }}>
                  STEP 1: NAME
                </div>
                <div style={{ 
                  padding: "18px 12px", 
                  textAlign: "center", 
                  fontSize: "0.85rem", 
                  fontWeight: "700", 
                  borderBottom: currentStep === 2 ? "4px solid var(--agora-blue)" : "4px solid transparent",
                  opacity: currentStep === 2 ? 1 : 0.6 
                }}>
                  STEP 2: AFFILIATION
                </div>
                <div style={{ 
                  padding: "18px 12px", 
                  textAlign: "center", 
                  fontSize: "0.85rem", 
                  fontWeight: "700", 
                  borderBottom: currentStep === 3 ? "4px solid var(--agora-blue)" : "4px solid transparent",
                  opacity: currentStep === 3 ? 1 : 0.6 
                }}>
                  STEP 3: BRS MEMBER
                </div>
                <div style={{ 
                  padding: "18px 12px", 
                  textAlign: "center", 
                  fontSize: "0.85rem", 
                  fontWeight: "700", 
                  borderBottom: currentStep === 4 ? "4px solid var(--agora-blue)" : "4px solid transparent",
                  opacity: currentStep === 4 ? 1 : 0.6 
                }}>
                  STEP 4: PAYMENT
                </div>
              </div>

              <div style={{ padding: "40px" }}>

                {/* STEP 1: Name & Contact */}
                {currentStep === 1 && (
                  <form onSubmit={handleNext}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--agora-text-dark)" }}>
                      STEP 1 — PERSONAL & CONTACT DETAILS
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Title *</label>
                          <select 
                            value={formData.title} 
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                            required
                          >
                            <option value="Prof.">Prof.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Full Name (as on badge) *</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Dr. Jane Smith" 
                            value={formData.fullName} 
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                            required 
                          />
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Email Address *</label>
                          <input 
                            type="email" 
                            placeholder="delegate@institution.edu.in" 
                            value={formData.email} 
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                            required 
                          />
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Mobile Number *</label>
                          <input 
                            type="tel" 
                            placeholder="+91 9876543210" 
                            value={formData.mobile} 
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                      <button type="submit" className="btn-agora-blue">
                        CONTINUE TO AFFILIATION →
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 2: Affiliation & Category */}
                {currentStep === 2 && (
                  <form onSubmit={handleNext}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--agora-text-dark)" }}>
                      STEP 2 — AFFILIATION & CATEGORY
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "8px" }}>Select Registration Category *</label>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                          {/* Faculty Option */}
                          <div 
                            onClick={() => setFormData({ ...formData, category: "faculty" })}
                            style={{ 
                              padding: "18px", 
                              borderRadius: "6px", 
                              border: formData.category === "faculty" ? "2px solid var(--agora-blue)" : "1px solid var(--agora-border-light)",
                              backgroundColor: formData.category === "faculty" ? "rgba(67, 97, 238, 0.05)" : "var(--agora-card-bg)",
                              cursor: "pointer"
                            }}
                          >
                            <h4 style={{ fontSize: "1.1rem" }}>Faculty</h4>
                            <p style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)" }}>Academic Faculty & University Staff</p>
                          </div>

                          {/* Scientist Option */}
                          <div 
                            onClick={() => setFormData({ ...formData, category: "scientist" })}
                            style={{ 
                              padding: "18px", 
                              borderRadius: "6px", 
                              border: formData.category === "scientist" ? "2px solid var(--agora-blue)" : "1px solid var(--agora-border-light)",
                              backgroundColor: formData.category === "scientist" ? "rgba(67, 97, 238, 0.05)" : "var(--agora-card-bg)",
                              cursor: "pointer"
                            }}
                          >
                            <h4 style={{ fontSize: "1.1rem" }}>Scientist</h4>
                            <p style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)" }}>R&D Labs & National Institutes</p>
                          </div>

                          {/* Student / Post-doc Option (DISABLED) */}
                          <div 
                            style={{ 
                              padding: "18px", 
                              borderRadius: "6px", 
                              border: "1px dashed var(--agora-border-light)",
                              backgroundColor: "rgba(0, 0, 0, 0.03)",
                              opacity: 0.65,
                              cursor: "not-allowed",
                              position: "relative"
                            }}
                          >
                            <span style={{ position: "absolute", top: "10px", right: "10px", background: "var(--agora-blue)", color: "#fff", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "10px", fontWeight: "700" }}>
                              OPENS SHORTLY
                            </span>
                            <h4 style={{ fontSize: "1.1rem", color: "var(--agora-text-muted)" }}>Student / Post-doc / Project staff</h4>
                            <p style={{ fontSize: "0.8rem", color: "var(--agora-blue)", fontWeight: "700", marginTop: "4px" }}>
                              Note: Student registration opens shortly.
                            </p>
                          </div>

                          {/* Industry Option */}
                          <div 
                            onClick={() => setFormData({ ...formData, category: "industry" })}
                            style={{ 
                              padding: "18px", 
                              borderRadius: "6px", 
                              border: formData.category === "industry" ? "2px solid var(--agora-blue)" : "1px solid var(--agora-border-light)",
                              backgroundColor: formData.category === "industry" ? "rgba(67, 97, 238, 0.05)" : "var(--agora-card-bg)",
                              cursor: "pointer"
                            }}
                          >
                            <h4 style={{ fontSize: "1.1rem" }}>Industry</h4>
                            <p style={{ fontSize: "0.8rem", color: "var(--agora-text-muted)" }}>Corporate & Commercial Delegates</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Affiliation / Institute / Company Name *</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Department of Energy, IIT Bombay" 
                          value={formData.organization} 
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                          required 
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between" }}>
                      <button type="button" onClick={handlePrev} className="btn-agora-outlined">
                        ← BACK
                      </button>
                      <button type="submit" className="btn-agora-blue">
                        CONTINUE TO BRS MEMBERSHIP →
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 3: BRS Membership */}
                {currentStep === 3 && (
                  <form onSubmit={handleNext}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--agora-text-dark)" }}>
                      STEP 3 — BRS MEMBERSHIP DISCOUNT
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                      
                      {/* BRS Toggle */}
                      <div style={{ backgroundColor: "rgba(67, 97, 238, 0.04)", padding: "24px", borderRadius: "8px", border: "1px solid rgba(67, 97, 238, 0.2)" }}>
                        <label style={{ display: "block", fontSize: "1.1rem", fontWeight: "800", marginBottom: "8px" }}>
                          Are you a Battery Research Society (BRS) member? *
                        </label>
                        <p style={{ fontSize: "0.9rem", color: "var(--agora-blue)", fontWeight: "700", marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                          15% discount for BRS members is applicable on registration fee!
                        </p>

                        <div style={{ display: "flex", gap: "20px" }}>
                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem", cursor: "pointer", fontWeight: "700" }}>
                            <input 
                              type="radio" 
                              name="brsToggle" 
                              checked={formData.isBrsMember === true} 
                              onChange={() => setFormData({ ...formData, isBrsMember: true })} 
                            />
                            YES (I am a BRS Member - 15% Off)
                          </label>

                          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem", cursor: "pointer", fontWeight: "700" }}>
                            <input 
                              type="radio" 
                              name="brsToggle" 
                              checked={formData.isBrsMember === false} 
                              onChange={() => setFormData({ ...formData, isBrsMember: false, brsNumber: "" })} 
                            />
                            NO (Non-member)
                          </label>
                        </div>
                      </div>

                      {/* BRS Membership Number Input */}
                      {formData.isBrsMember && (
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>
                            BRS Membership Number *
                          </label>
                          <input 
                            type="text" 
                            placeholder="Enter your BRS Membership ID (e.g. BRS-2026-892)" 
                            value={formData.brsNumber} 
                            onChange={(e) => setFormData({ ...formData, brsNumber: e.target.value })}
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                            required 
                          />
                        </div>
                      )}

                      {/* Food Preference */}
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px" }}>Food Preference *</label>
                        <select 
                          value={formData.foodPreference}
                          onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value })}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid var(--agora-border-light)" }}
                        >
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-vegetarian">Non-vegetarian</option>
                          <option value="Jain">Jain</option>
                        </select>
                      </div>

                    </div>

                    <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between" }}>
                      <button type="button" onClick={handlePrev} className="btn-agora-outlined">
                        ← BACK
                      </button>
                      <button type="submit" className="btn-agora-blue">
                        CONTINUE TO PAYMENT SUMMARY →
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 4: Payment Summary & Unified Razorpay Checkout */}
                {currentStep === 4 && (
                  <form onSubmit={handleFinalSubmit}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--agora-text-dark)" }}>
                      STEP 4 — PAYMENT SUMMARY & CHECKOUT
                    </h3>

                    {/* Summary Table */}
                    <div style={{ backgroundColor: "var(--agora-light-bg)", padding: "24px", borderRadius: "8px", border: "1px solid var(--agora-border-light)", marginBottom: "28px" }}>
                      <h4 style={{ fontSize: "1.1rem", marginBottom: "16px", borderBottom: "1px solid var(--agora-border-light)", paddingBottom: "8px" }}>
                        DELEGATE REGISTRATION SUMMARY
                      </h4>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "0.95rem", marginBottom: "20px" }}>
                        <div><strong>Delegate Name:</strong> {formData.fullName.startsWith(formData.title) ? formData.fullName : `${formData.title} ${formData.fullName}`}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Category:</strong> {formData.category.toUpperCase()}</div>
                        <div><strong>Affiliation:</strong> {formData.organization}</div>
                        <div><strong>BRS Status:</strong> {formData.isBrsMember ? `Yes (ID: ${formData.brsNumber})` : "No"}</div>
                        <div><strong>Rate Tariff:</strong> {isEarlyBird ? "Early Bird Tariff (Before Nov 1)" : "Standard Tariff"}</div>
                      </div>

                      <div style={{ borderTop: "2px dashed var(--agora-border-light)", paddingTop: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                          <span>Base Registration Fee ({formData.isBrsMember ? "15% BRS Member Discount Applied" : "Standard"}):</span>
                          <strong>INR {baseFee.toLocaleString('en-IN')}</strong>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                          <span>Statutory GST (18%):</span>
                          <strong>INR {gstAmount.toLocaleString('en-IN')}</strong>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0 0", borderTop: "1px solid var(--agora-border-light)", fontSize: "1.3rem", fontWeight: "900", color: "var(--agora-blue)" }}>
                          <span>TOTAL PAYABLE AMOUNT:</span>
                          <span>INR {totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Razorpay Unified Gateway Callout */}
                    <div style={{
                      backgroundColor: "rgba(67, 97, 238, 0.04)",
                      border: "1px solid rgba(67, 97, 238, 0.2)",
                      padding: "20px",
                      borderRadius: "6px",
                      marginBottom: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px"
                    }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(67, 97, 238, 0.12)", color: "var(--agora-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1rem", marginBottom: "4px", color: "var(--agora-text-dark)" }}>
                          Secure 256-bit Encrypted Checkout via Razorpay
                        </h4>
                        <p style={{ fontSize: "0.82rem", color: "var(--agora-text-muted)", margin: 0 }}>
                          Supports all payment modes inside one popup: <strong>UPI (GPay / PhonePe / Paytm / QR)</strong>, <strong>Credit & Debit Cards (Visa, Mastercard, RuPay)</strong>, <strong>Netbanking (All Major Banks)</strong>, and <strong>Wallets</strong>.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <button type="button" onClick={handlePrev} className="btn-agora-outlined" disabled={isSubmitting}>
                        ← BACK
                      </button>
                      <button type="submit" className="btn-agora-blue" style={{ fontSize: "1rem", padding: "18px 40px" }} disabled={isSubmitting}>
                        {isSubmitting ? "PROCESSING CHECKOUT..." : `CONFIRM & PAY INR ${totalAmount.toLocaleString('en-IN')} WITH RAZORPAY →`}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
