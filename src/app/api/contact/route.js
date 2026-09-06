import { NextResponse } from "next/server";
import { sendEnquiryEmail } from "../../../lib/emailService";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, category, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailResult = await sendEnquiryEmail({
      name,
      email,
      subject,
      category: category || "General Inquiry",
      message,
    });

    if (emailResult.error) {
      return NextResponse.json(
        { success: false, error: emailResult.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully and sent to the secretariat.",
      isSimulated: emailResult.isSimulated || false,
    });
  } catch (error) {
    console.error("[API CONTACT ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
