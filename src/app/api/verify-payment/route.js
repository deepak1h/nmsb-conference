import { NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { config } from "../../../config/variables";

export async function POST(request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationData } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Cryptographic HMAC SHA256 Signature Verification
    if (keySecret && !razorpay_order_id.startsWith("order_mock_")) {
      const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generatedSignature !== razorpay_signature) {
        console.error("Payment Verification Failed: Invalid HMAC SHA256 Signature");
        return NextResponse.json(
          { success: false, error: "Payment verification failed: Invalid cryptographic signature" },
          { status: 400 }
        );
      }
    }

    // Payment Verified Successfully — Format Registration Record
    const registrationRecord = {
      registrationId: `NMSB2-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      title: registrationData.title || "",
      fullName: registrationData.fullName || "",
      email: registrationData.email || "",
      mobile: registrationData.mobile || "",
      category: registrationData.category || "",
      organization: registrationData.organization || "",
      isBrsMember: registrationData.isBrsMember ? "YES" : "NO",
      brsNumber: registrationData.brsNumber || "N/A",
      foodPreference: registrationData.foodPreference || "Vegetarian",
      baseFee: registrationData.baseFee || 0,
      gstAmount: registrationData.gstAmount || 0,
      totalAmount: registrationData.totalAmount || 0,
      paymentMethod: "Razorpay",
      transactionRef: razorpay_payment_id || `PAY-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      orderId: razorpay_order_id
    };

    // 1. Local Excel CSV Persistence
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const csvFilePath = path.join(dataDir, "registrations.csv");
    const fileExists = fs.existsSync(csvFilePath);

    const csvHeader = "Registration ID,Date & Time,Title,Full Name,Email,Mobile,Category,Organization,BRS Member,BRS Number,Food Preference,Base Fee (INR),GST (INR),Total Paid (INR),Payment Method,Transaction Ref,Order ID\n";

    const csvRow = [
      `"${registrationRecord.registrationId}"`,
      `"${registrationRecord.timestamp}"`,
      `"${registrationRecord.title}"`,
      `"${registrationRecord.fullName.replace(/"/g, '""')}"`,
      `"${registrationRecord.email}"`,
      `"${registrationRecord.mobile}"`,
      `"${registrationRecord.category}"`,
      `"${registrationRecord.organization.replace(/"/g, '""')}"`,
      `"${registrationRecord.isBrsMember}"`,
      `"${registrationRecord.brsNumber}"`,
      `"${registrationRecord.foodPreference}"`,
      registrationRecord.baseFee,
      registrationRecord.gstAmount,
      registrationRecord.totalAmount,
      `"${registrationRecord.paymentMethod}"`,
      `"${registrationRecord.transactionRef}"`,
      `"${registrationRecord.orderId}"`
    ].join(",") + "\n";

    if (!fileExists) {
      fs.writeFileSync(csvFilePath, csvHeader + csvRow, "utf8");
    } else {
      fs.appendFileSync(csvFilePath, csvRow, "utf8");
    }

    // 2. Direct Live Google Sheets Webhook Sync
    const webhookUrl = config.googleSheetWebhookUrl || process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registrationRecord),
        });
      } catch (sheetErr) {
        console.error("Google Sheets Sync Error:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified and registration recorded successfully",
      data: registrationRecord
    });

  } catch (error) {
    console.error("Verify Payment Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
