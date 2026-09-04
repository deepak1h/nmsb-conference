import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const bodyText = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // Verify webhook signature if secret is provided
    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(bodyText)
        .digest("hex");

      if (expectedSignature !== signature) {
        console.error("Razorpay Webhook: Invalid signature");
        return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
      }
    }

    const payload = JSON.parse(bodyText);
    const event = payload.event;

    if (event === "payment.captured") {
      const paymentEntity = payload.payload?.payment?.entity;
      console.log(`Razorpay Webhook [payment.captured]: Payment ID ${paymentEntity?.id} for Order ${paymentEntity?.order_id}`);
      // Fallback verification record handled on server
    } else if (event === "payment.failed") {
      const paymentEntity = payload.payload?.payment?.entity;
      console.warn(`Razorpay Webhook [payment.failed]: Payment ID ${paymentEntity?.id} failed.`);
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Razorpay Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Webhook processing error" }, { status: 500 });
  }
}
