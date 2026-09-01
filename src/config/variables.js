export const config = {
  conference: {
    name: "2nd National Meeting on Sodium(-ion) Batteries",
    shortName: "NMSB-2",
    dates: "22-24 November 2026",
    venue: "ASPIRE - IIT Bombay Research Park, Mumbai, India",
    tagline: "Building on the success of NMSB-1, NMSB-2 brings together academia, industry and government to advance sodium-ion battery science, technology and commercialization.",
    contactEmail: "contact@nmsb2-dummy.org.in", // [TO BE PROVIDED]
  },
  dates: {
    abstractOpens: "1 September 2026",
    abstractDeadline: "15 October 2026",
    acceptanceNotification: "1 November 2026",
    earlyBirdDeadline: "1 November 2026",
    regularDeadline: "20 November 2026",
  },
  googleSheetWebhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || "", // Google Apps Script Webhook URL for live Google Sheet sync
  fees: {
    gstRate: 0.18, // 18% GST
    earlyBirdCutoff: "1 November 2026",
    startup: { earlyBird: "INR 12,750", regular: "INR 17,000" },
    notes: {
      taxExclusion: "The above figures exclude taxes (18% GST), which will be added during final payment via the gateway.",
      refundPolicy: "Registration fee is non-refundable.",
      inclusions: "Conference registration includes admission to all lectures/talks, panel discussions, exhibits, posters, refreshments, and lunches, as per the conference schedule."
    },
    matrix: [
      {
        category: "Faculty and Scientist",
        categoryKey: "faculty_scientist",
        nonBrs: { earlyBird: 9000, standard: 12000 },
        brsMember: { earlyBird: 7650, standard: 10200 },
        description: "For academic faculty and scientists from research institutions"
      },
      {
        category: "Student / Post-doc / Project staff",
        categoryKey: "student_postdoc",
        nonBrs: { earlyBird: 5000, standard: 6500 },
        brsMember: { earlyBird: 4250, standard: 5525 },
        description: "Student registration opens shortly",
        disabled: true
      },
      {
        category: "From Industry",
        categoryKey: "industry",
        nonBrs: { earlyBird: 15000, standard: 20000 },
        brsMember: { earlyBird: 12750, standard: 17000 },
        description: "For corporate delegates and industry professionals"
      }
    ]
  },
  sponsors: {
    email: "sponsorship@nmsb2-dummy.org.in" // [TO BE PROVIDED]
  },
  payment: {
    bankDetails: {
      accountName: "[TO BE PROVIDED]",
      accountNumber: "[TO BE PROVIDED]",
      ifsc: "[TO BE PROVIDED]",
      branch: "[TO BE PROVIDED]"
    }
  }
};
