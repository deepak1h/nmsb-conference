import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { config } from "../../../config/variables";

export async function POST(request) {
  try {
    const data = await request.json();

    const registrationRecord = {
      registrationId: data.registrationId || `NMSB2-${Date.now().toString().slice(-6)}`,
      timestamp: data.timestamp || new Date().toISOString(),
      title: data.title || "",
      fullName: data.fullName || "",
      email: data.email || "",
      mobile: data.mobile || "",
      category: data.category || "",
      organization: data.organization || "",
      isBrsMember: data.isBrsMember ? "YES" : "NO",
      brsNumber: data.brsNumber || "N/A",
      foodPreference: data.foodPreference || "Vegetarian",
      baseFee: data.baseFee || 0,
      gstAmount: data.gstAmount || 0,
      totalAmount: data.totalAmount || 0,
      paymentMethod: data.paymentMethod || "Razorpay",
      transactionRef: data.transactionRef || `TXN-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    };

    // 1. Local Excel CSV Persistence
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const csvFilePath = path.join(dataDir, "registrations.csv");
    const fileExists = fs.existsSync(csvFilePath);

    const csvHeader = "Registration ID,Date & Time,Title,Full Name,Email,Mobile,Category,Organization,BRS Member,BRS Number,Food Preference,Base Fee (INR),GST (INR),Total Paid (INR),Payment Method,Transaction Ref\n";

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
      `"${registrationRecord.transactionRef}"`
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
        console.error("Google Sheets Webhook Sync Error:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Registration recorded successfully",
      data: registrationRecord
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process registration" },
      { status: 500 }
    );
  }
}
