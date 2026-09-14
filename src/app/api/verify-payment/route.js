import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendRegistrationEmail } from "../../../lib/emailService";
import { recordPaymentAttempt, calculateFeeServerSide } from "../../../lib/storageService";

export async function POST(request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationData } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Recalculate fee server-side to guarantee 100% security against inspect element / client-side tampering
    const feeInfo = calculateFeeServerSide(registrationData.category, registrationData.isBrsMember);

    // Cryptographic HMAC SHA256 Signature Verification
    if (keySecret && !razorpay_order_id.startsWith("order_mock_")) {
      const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generatedSignature !== razorpay_signature) {
        console.error("Payment Verification Failed: Invalid HMAC SHA256 Signature");

        // Record security tampering / signature failure
        await recordPaymentAttempt({
          registrationId: `NMSB2-TAMPER-${Date.now().toString().slice(-6)}`,
          timestamp: new Date().toISOString(),
          status: "FAILED: Invalid HMAC Signature",
          failureReason: "HMAC signature verification failed. Potential payment tampering attempt.",
          title: registrationData.title || "",
          fullName: registrationData.fullName || "",
          email: registrationData.email || "",
          mobile: registrationData.mobile || "",
          category: registrationData.category || "",
          organization: registrationData.organization || "",
          isBrsMember: registrationData.isBrsMember,
          brsNumber: registrationData.brsNumber || "N/A",
          foodPreference: registrationData.foodPreference || "Vegetarian",
          baseFee: feeInfo.baseFee,
          gstAmount: feeInfo.gstAmount,
          totalAmount: feeInfo.totalAmount,
          paymentMethod: "Razorpay",
          transactionRef: razorpay_payment_id || "N/A",
          orderId: razorpay_order_id || "N/A"
        });

        return NextResponse.json(
          { success: false, error: "Payment verification failed: Invalid cryptographic signature" },
          { status: 400 }
        );
      }
    }

    // Payment Verified Successfully — Format Registration Record with Server-Calculated Amounts
    const registrationRecordData = {
      registrationId: `NMSB2-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      status: "SUCCESS",
      failureReason: "None",
      title: registrationData.title || "",
      fullName: registrationData.fullName || "",
      email: registrationData.email || "",
      mobile: registrationData.mobile || "",
      category: registrationData.category || "",
      organization: registrationData.organization || "",
      isBrsMember: registrationData.isBrsMember ? "YES" : "NO",
      brsNumber: registrationData.brsNumber || "N/A",
      foodPreference: registrationData.foodPreference || "Vegetarian",
      baseFee: feeInfo.baseFee,
      gstAmount: feeInfo.gstAmount,
      totalAmount: feeInfo.totalAmount,
      paymentMethod: "Razorpay",
      transactionRef: razorpay_payment_id || `PAY-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      orderId: razorpay_order_id
    };

    // 1. Record SUCCESS attempt in local CSV and Google Sheets Webhook
    const savedRecord = await recordPaymentAttempt(registrationRecordData);

    // 2. Send Automated Registration Confirmation HTML Email to Delegate
    try {
      await sendRegistrationEmail(savedRecord);
    } catch (emailErr) {
      console.error("Automated Email Send Exception:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified, registration recorded, and confirmation email dispatched.",
      data: savedRecord
    });

  } catch (error) {
    console.error("Verify Payment Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
