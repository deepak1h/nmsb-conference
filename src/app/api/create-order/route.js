import { NextResponse } from "next/server";
import { config } from "../../../config/variables";

export async function POST(request) {
  try {
    const data = await request.json();
    const { category, isBrsMember } = data;

    // Server-Side Fee Calculation & Validation (NEVER trust client amount!)
    const isEarlyBird = new Date() < new Date("2026-11-01");
    
    let baseFee = 0;
    if (category === "industry") {
      baseFee = isBrsMember ? (isEarlyBird ? 12750 : 17000) : (isEarlyBird ? 15000 : 20000);
    } else {
      // Faculty or Scientist
      baseFee = isBrsMember ? (isEarlyBird ? 7650 : 10200) : (isEarlyBird ? 9000 : 12000);
    }

    const gstAmount = Math.round(baseFee * config.fees.gstRate); // 18% GST
    const totalAmount = baseFee + gstAmount;
    const amountInPaise = totalAmount * 100;

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // If Razorpay environment variables are configured, create real Razorpay Order
    if (keyId && keySecret && !keyId.includes("mock") && !keySecret.includes("mock")) {
      const authHeader = "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");

      const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authHeader,
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `rcpt_${Date.now().toString().slice(-8)}`,
          notes: {
            fullName: data.fullName || "",
            email: data.email || "",
            category: category || "",
            organization: data.organization || ""
          }
        }),
      });

      const orderData = await razorpayResponse.json();

      if (!razorpayResponse.ok) {
        console.error("Razorpay API Error:", orderData);
        return NextResponse.json({ success: false, error: orderData.error?.description || "Razorpay Order creation failed" }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        isMock: false,
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        keyId: keyId,
        baseFee,
        gstAmount,
        totalAmount
      });
    }

    // Dev / Testing Fallback Mode (When RAZORPAY_KEY_ID is not configured in .env)
    const mockOrderId = `order_mock_${Math.random().toString(36).substring(2, 12)}`;
    return NextResponse.json({
      success: true,
      isMock: true,
      orderId: mockOrderId,
      amount: amountInPaise,
      currency: "INR",
      keyId: keyId || "rzp_test_mockkeyid",
      baseFee,
      gstAmount,
      totalAmount
    });

  } catch (error) {
    console.error("Create Order Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create registration order" },
      { status: 500 }
    );
  }
}
