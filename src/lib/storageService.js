import fs from "fs";
import path from "path";
import { config } from "../config/variables";

/**
 * Server-Side Fee Calculation Matrix
 * Prevents client-side inspect element or API tampering
 */
export function calculateFeeServerSide(category, isBrsMember) {
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

  return { baseFee, gstAmount, totalAmount };
}

export function getISTTimestamp(dateInput) {
  const d = dateInput ? new Date(dateInput) : new Date();
  return d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }) + " IST";
}

/**
 * Record payment (SUCCESS or FAILED) to local CSV and Google Sheets Webhook
 */
export async function recordPaymentAttempt(record) {
  try {
    const formattedRecord = {
      registrationId: record.registrationId || `NMSB2-${Date.now().toString().slice(-6)}`,
      timestamp: getISTTimestamp(record.timestamp),
      status: record.status || "SUCCESS", // "SUCCESS" or "FAILED"
      failureReason: record.failureReason || "N/A",
      title: record.title || "",
      fullName: record.fullName || "",
      email: record.email || "",
      mobile: record.mobile || "",
      category: record.category || "",
      organization: record.organization || "",
      isBrsMember: record.isBrsMember ? (record.isBrsMember === true || record.isBrsMember === "YES" ? "YES" : "NO") : "NO",
      brsNumber: record.brsNumber || "N/A",
      foodPreference: record.foodPreference || "Vegetarian",
      baseFee: Number(record.baseFee) || 0,
      gstAmount: Number(record.gstAmount) || 0,
      totalAmount: Number(record.totalAmount) || 0,
      paymentMethod: record.paymentMethod || "Razorpay",
      transactionRef: record.transactionRef || "N/A",
      orderId: record.orderId || "N/A"
    };

    // 1. Local CSV Storage (data/registrations.csv - used when running locally or on server with disk storage)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const csvFilePath = path.join(dataDir, "registrations.csv");
      const fileExists = fs.existsSync(csvFilePath);

      const csvHeader = "Registration ID,Date & Time,Payment Status,Failure Reason,Title,Full Name,Email,Mobile,Category,Organization,BRS Member,BRS Number,Food Preference,Base Fee (INR),GST (INR),Total Paid (INR),Payment Method,Transaction Ref,Order ID\n";

      const csvRow = [
        `"${formattedRecord.registrationId}"`,
        `"${formattedRecord.timestamp}"`,
        `"${formattedRecord.status}"`,
        `"${formattedRecord.failureReason.replace(/"/g, '""')}"`,
        `"${formattedRecord.title}"`,
        `"${formattedRecord.fullName.replace(/"/g, '""')}"`,
        `"${formattedRecord.email}"`,
        `"${formattedRecord.mobile}"`,
        `"${formattedRecord.category}"`,
        `"${formattedRecord.organization.replace(/"/g, '""')}"`,
        `"${formattedRecord.isBrsMember}"`,
        `"${formattedRecord.brsNumber}"`,
        `"${formattedRecord.foodPreference}"`,
        formattedRecord.baseFee,
        formattedRecord.gstAmount,
        formattedRecord.totalAmount,
        `"${formattedRecord.paymentMethod}"`,
        `"${formattedRecord.transactionRef}"`,
        `"${formattedRecord.orderId}"`
      ].join(",") + "\n";

      if (!fileExists) {
        fs.writeFileSync(csvFilePath, csvHeader + csvRow, "utf8");
      } else {
        fs.appendFileSync(csvFilePath, csvRow, "utf8");
      }
    } catch (fsErr) {
      console.log("[CSV LOCAL DISK NOTICE] Serverless / Read-only environment detected. Skipping local CSV file write.");
    }

    // 2. Google Sheets Webhook Sync (Non-blocking background execution for instant UI response)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || config.googleSheetWebhookUrl;

    if (webhookUrl && webhookUrl.trim().length > 0) {
      fetch(webhookUrl.trim(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedRecord),
      })
      .then(() => console.log(`[STORAGE SYNC] Record (${formattedRecord.status}) synced to Google Sheets Webhook.`))
      .catch((sheetErr) => console.error("[GOOGLE SHEETS SYNC ERROR]:", sheetErr));
    } else {
      console.log(`[STORAGE SYNC NOTICE] Record (${formattedRecord.status}) saved to CSV. GOOGLE_SHEET_WEBHOOK_URL not configured.`);
    }

    return formattedRecord;
  } catch (error) {
    console.error("[STORAGE RECORDING ERROR]:", error);
    throw error;
  }
}
