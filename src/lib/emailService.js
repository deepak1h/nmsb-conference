import nodemailer from "nodemailer";
import { config } from "../config/variables";

export async function sendRegistrationEmail(record) {
  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailFrom = process.env.EMAIL_FROM || `NMSB-2 Secretariat <${smtpUser || "secretariat@nmsb-conference.org"}>`;

    // HTML Email Template Design
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NMSB-2 Registration Confirmation</title>
      </head>
      <body style="margin:0; padding:0; background-color:#F4F6F9; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333333;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F6F9; padding:40px 10px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#FFFFFF; border-radius:8px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08); border:1px solid #E2E8F0;">
                
                <!-- Email Header Banner -->
                <tr>
                  <td style="background-color:#0B0C10; padding:36px 40px; text-align:center; border-bottom:4px solid #4361EE;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center">
                          <div style="display:inline-block; width:36px; height:36px; line-height:36px; background-color:#4361EE; color:#FFFFFF; border-radius:50%; font-weight:900; font-size:16px; margin-bottom:10px;">
                            Na
                          </div>
                          <h1 style="color:#FFFFFF; font-size:24px; font-weight:900; margin:0; letter-spacing:1px;">
                            ${config.conference.shortName}
                          </h1>
                          <p style="color:#A0A5B5; font-size:13px; margin:6px 0 0; text-transform:uppercase; letter-spacing:0.5px;">
                            ${config.conference.name}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Status Confirmation Badge -->
                <tr>
                  <td style="padding:32px 40px 10px; text-align:center;">
                    <div style="display:inline-block; background-color:#E8F5E9; color:#2E7D32; border:1px solid #A5D6A7; padding:8px 20px; border-radius:20px; font-size:13px; font-weight:800; letter-spacing:0.5px;">
                      ✓ REGISTRATION & PAYMENT CONFIRMED
                    </div>
                    <h2 style="font-size:22px; color:#0B0C10; margin:18px 0 6px; font-weight:800;">
                      Welcome to NMSB-2, ${record.fullName}!
                    </h2>
                    <p style="font-size:14px; color:#64748B; margin:0; line-height:1.6;">
                      Your delegate registration and payment have been successfully confirmed. Please retain this email as your official entrance pass and tax invoice.
                    </p>
                  </td>
                </tr>

                <!-- Reference & Transaction Box -->
                <tr>
                  <td style="padding:20px 40px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="16" style="background-color:#F8FAFC; border-radius:6px; border:1px solid #E2E8F0;">
                      <tr>
                        <td width="50%" style="border-right:1px solid #E2E8F0;">
                          <span style="font-size:11px; color:#64748B; font-weight:700; display:block; text-transform:uppercase;">Registration Reference</span>
                          <strong style="font-size:16px; color:#4361EE;">${record.registrationId}</strong>
                        </td>
                        <td width="50%" style="padding-left:16px;">
                          <span style="font-size:11px; color:#64748B; font-weight:700; display:block; text-transform:uppercase;">Transaction ID</span>
                          <strong style="font-size:15px; color:#0B0C10;">${record.transactionRef}</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Delegate Details -->
                <tr>
                  <td style="padding:10px 40px 20px;">
                    <h3 style="font-size:15px; color:#0B0C10; border-bottom:2px solid #E2E8F0; padding-bottom:8px; margin:0 0 14px; text-transform:uppercase; letter-spacing:0.5px;">
                      Delegate Profile
                    </h3>
                    <table width="100%" border="0" cellspacing="0" cellpadding="6" style="font-size:14px; color:#334155;">
                      <tr>
                        <td width="40%" style="font-weight:700; color:#64748B;">Full Name:</td>
                        <td width="60%"><strong>${record.fullName}</strong></td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Email Address:</td>
                        <td>${record.email}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Mobile Number:</td>
                        <td>${record.mobile}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Category:</td>
                        <td><span style="background-color:#EEF2FF; color:#4361EE; padding:2px 8px; border-radius:4px; font-weight:700; font-size:12px;">${record.category.toUpperCase()}</span></td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Affiliation:</td>
                        <td>${record.organization}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">BRS Membership:</td>
                        <td>${record.isBrsMember === "YES" ? `Member (${record.brsNumber})` : "Non-member"}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Food Preference:</td>
                        <td>${record.foodPreference}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Tax Invoice Table -->
                <tr>
                  <td style="padding:10px 40px 20px;">
                    <h3 style="font-size:15px; color:#0B0C10; border-bottom:2px solid #E2E8F0; padding-bottom:8px; margin:0 0 14px; text-transform:uppercase; letter-spacing:0.5px;">
                      Tax Invoice & Payment Summary
                    </h3>
                    <table width="100%" border="0" cellspacing="0" cellpadding="10" style="font-size:13px; border-collapse:collapse;">
                      <thead>
                        <tr style="background-color:#F1F5F9; color:#475569; text-align:left;">
                          <th style="padding:10px; border-bottom:1px solid #CBD5E1;">Item Description</th>
                          <th style="padding:10px; text-align:right; border-bottom:1px solid #CBD5E1;">Amount (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding:10px; border-bottom:1px solid #E2E8F0; color:#334155;">
                            NMSB-2 Conference Pass (${record.category.toUpperCase()})
                          </td>
                          <td style="padding:10px; text-align:right; border-bottom:1px solid #E2E8F0; font-weight:700;">
                            ₹${Number(record.baseFee).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px; border-bottom:1px solid #E2E8F0; color:#334155;">
                            Statutory GST (18%)
                          </td>
                          <td style="padding:10px; text-align:right; border-bottom:1px solid #E2E8F0; font-weight:700;">
                            ₹${Number(record.gstAmount).toLocaleString("en-IN")}
                          </td>
                        </tr>
                        <tr style="background-color:#F8FAFC;">
                          <td style="padding:12px 10px; font-weight:900; color:#4361EE; font-size:14px;">
                            TOTAL PAID AMOUNT:
                          </td>
                          <td style="padding:12px 10px; text-align:right; font-weight:900; color:#4361EE; font-size:15px;">
                            ₹${Number(record.totalAmount).toLocaleString("en-IN")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- Venue & Event Dates Box -->
                <tr>
                  <td style="padding:10px 40px 30px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="16" style="background-color:#0B0C10; color:#FFFFFF; border-radius:6px;">
                      <tr>
                        <td>
                          <h4 style="color:#4361EE; margin:0 0 8px; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                            Event Access & Location Details
                          </h4>
                          <p style="margin:0 0 6px; font-size:13px; color:#E2E8F0;">
                            📅 <strong>Dates:</strong> 22–24 November 2026
                          </p>
                          <p style="margin:0 0 6px; font-size:13px; color:#E2E8F0;">
                            📍 <strong>Venue:</strong> ASPIRE - IIT Bombay Research Park, Powai, Mumbai
                          </p>
                          <p style="margin:0; font-size:12px; color:#94A3B8; line-height:1.5;">
                            Please present this email or your printed delegate receipt at the registration desk upon arrival to collect your delegate badge & kit.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color:#F8FAFC; padding:24px 40px; text-align:center; border-top:1px solid #E2E8F0; font-size:12px; color:#64748B; line-height:1.6;">
                    Organized jointly by <strong>GESH, IIT Bombay & Battery Research Society (BRS)</strong>.<br>
                    Questions or queries? Write to <a href="mailto:${config.conference.contactEmail}" style="color:#4361EE; text-decoration:none;">${config.conference.contactEmail}</a>.<br>
                    © ${new Date().getFullYear()} ${config.conference.name}. All Rights Reserved.
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // If SMTP credentials are present, send real email
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for port 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: emailFrom,
        to: record.email,
        subject: `[Confirmed] NMSB-2 Registration & Tax Invoice — Ref: ${record.registrationId}`,
        html: htmlContent,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[EMAIL DISPATCH SUCCESS] Sent registration receipt to ${record.email}. MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } else {
      console.log(`[EMAIL DISPATCH NOTICE] SMTP_USER or SMTP_PASS not set in .env.local. Email dispatch simulated for ${record.email}.`);
      return { success: true, isSimulated: true };
    }

  } catch (error) {
    console.error("[EMAIL DISPATCH ERROR]:", error);
    // Don't crash registration response if mail fails; log error gracefully
    return { success: false, error: error.message };
  }
}

export async function sendEnquiryEmail(enquiry) {
  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailFrom = process.env.EMAIL_FROM || `NMSB-2 Secretariat <${smtpUser || "secretariat@nmsb-conference.org"}>`;
    const adminRecipient = process.env.ADMIN_EMAIL || process.env.SMTP_USER || config.conference.contactEmail;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Enquiry — NMSB-2</title>
      </head>
      <body style="margin:0; padding:0; background-color:#F4F6F9; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333333;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F6F9; padding:40px 10px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#FFFFFF; border-radius:8px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08); border:1px solid #E2E8F0;">
                
                <tr>
                  <td style="background-color:#0B0C10; padding:30px 40px; text-align:center; border-bottom:4px solid #4361EE;">
                    <h1 style="color:#FFFFFF; font-size:22px; font-weight:900; margin:0; letter-spacing:1px;">
                      ${config.conference.shortName} Website Enquiry
                    </h1>
                    <p style="color:#A0A5B5; font-size:12px; margin:4px 0 0; text-transform:uppercase; letter-spacing:0.5px;">
                      Organizing Secretariat Notification
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:30px 40px;">
                    <div style="background-color:#EEF2FF; color:#4361EE; border:1px solid #C7D2FE; padding:8px 16px; border-radius:6px; font-size:12px; font-weight:800; margin-bottom:20px; display:inline-block; text-transform:uppercase;">
                      Category: ${enquiry.category}
                    </div>

                    <h2 style="font-size:18px; color:#0B0C10; margin:0 0 16px; font-weight:800;">
                      Subject: ${enquiry.subject}
                    </h2>

                    <table width="100%" border="0" cellspacing="0" cellpadding="10" style="font-size:14px; color:#334155; background-color:#F8FAFC; border-radius:6px; border:1px solid #E2E8F0; margin-bottom:20px;">
                      <tr>
                        <td width="32%" style="font-weight:700; color:#64748B;">Sender Name:</td>
                        <td width="68%"><strong>${enquiry.name}</strong></td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Sender Email:</td>
                        <td><a href="mailto:${enquiry.email}" style="color:#4361EE; text-decoration:none;">${enquiry.email}</a></td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Inquiry Category:</td>
                        <td>${enquiry.category}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700; color:#64748B;">Date Received:</td>
                        <td>${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
                      </tr>
                    </table>

                    <h3 style="font-size:13px; color:#0B0C10; margin:0 0 8px; text-transform:uppercase; letter-spacing:0.5px;">
                      Message Content:
                    </h3>
                    <div style="background-color:#FFFFFF; border:1px solid #E2E8F0; border-left:4px solid #4361EE; padding:16px; border-radius:4px; font-size:14px; color:#1E293B; line-height:1.7; white-space:pre-wrap;">${enquiry.message}</div>

                    <div style="margin-top:24px; padding-top:16px; border-top:1px solid #E2E8F0; font-size:12px; color:#64748B;">
                      💡 <em>Reply directly to this email to respond to ${enquiry.name} (${enquiry.email}).</em>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="background-color:#F8FAFC; padding:16px 40px; text-align:center; border-top:1px solid #E2E8F0; font-size:12px; color:#64748B;">
                    © ${new Date().getFullYear()} ${config.conference.name} Secretariat Notification
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: emailFrom,
        to: adminRecipient,
        replyTo: `${enquiry.name} <${enquiry.email}>`,
        subject: `[Enquiry: ${enquiry.category}] ${enquiry.subject} — from ${enquiry.name}`,
        html: htmlContent,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[ENQUIRY EMAIL SUCCESS] Sent enquiry to ${adminRecipient}. MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } else {
      console.log(`[ENQUIRY EMAIL NOTICE] SMTP credentials not set. Simulated forwarding enquiry from ${enquiry.name} (${enquiry.email}) to ${adminRecipient}.`);
      return { success: true, isSimulated: true };
    }

  } catch (error) {
    console.error("[ENQUIRY EMAIL ERROR]:", error);
    return { success: false, error: error.message };
  }
}

