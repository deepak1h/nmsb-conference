import { NextResponse } from "next/server";
import { recordPaymentAttempt, calculateFeeServerSide } from "../../../lib/storageService";

export async function POST(request) {
  try {
    const body = await request.json();
    const { registrationData, orderId, failureReason, paymentId } = body;

    // Recalculate fee server-side for integrity
    const feeInfo = calculateFeeServerSide(registrationData?.category, registrationData?.isBrsMember);

    const record = await recordPaymentAttempt({
      registrationId: `NMSB2-FAIL-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      status: "FAILED",
      failureReason: failureReason || "Payment failed or cancelled by user",
      title: registrationData?.title || "",
      fullName: registrationData?.fullName || "",
      email: registrationData?.email || "",
      mobile: registrationData?.mobile || "",
      category: registrationData?.category || "",
      organization: registrationData?.organization || "",
      isBrsMember: registrationData?.isBrsMember,
      brsNumber: registrationData?.brsNumber || "N/A",
      foodPreference: registrationData?.foodPreference || "Vegetarian",
      baseFee: feeInfo.baseFee,
      gstAmount: feeInfo.gstAmount,
      totalAmount: feeInfo.totalAmount,
      paymentMethod: "Razorpay",
      transactionRef: paymentId || "N/A",
      orderId: orderId || "N/A"
    });

    return NextResponse.json({
      success: true,
      message: "Payment failure recorded successfully.",
      data: record
    });
  } catch (error) {
    console.error("[RECORD PAYMENT FAILURE ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record payment failure." },
      { status: 500 }
    );
  }
}
