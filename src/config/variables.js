export const config = {
  conference: {
    name: "2nd National Meeting on Sodium(-ion) Batteries",
    shortName: "NMSB-2",
    dates: "22-24 November 2026",
    venue: "ASPIRE - IIT Bombay Research Park, Mumbai, India",
    tagline: "Building on the success of NMSB-1 (in 2024), NMSB-2 will again bring together representatives from academia, industry/startups, and government agencies to discuss, deliberate, and pave the way towards advancing Sodium Ion battery technology, deployment, and commercialisation.",
    contactEmail: "contact@nmsb2-dummy.org.in", // [TO BE PROVIDED]
  },
  dates: {
    abstractOpens: "1 September 2026",
    abstractDeadline: "15 October 2026",
    acceptanceNotification: "1 November 2026",
    earlyBirdDeadline: "31 October 2026",
    regularDeadline: "20 November 2026",
  },
  googleSheetWebhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || "", // Google Apps Script Webhook URL for live Google Sheet sync
  fees: {
    gstRate: 0.18, // 18% GST
    earlyBirdCutoff: "31 October 2026",
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
        nonBrs: { earlyBird: "Opens shortly", standard: "Opens shortly" },
        brsMember: { earlyBird: "Opens shortly", standard: "Opens shortly" },
        description: "Registration opens shortly",
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
  },
  speakers: [
    {
      name: "Abhik Banerjee",
      designation: "TCG Crest",
      topic: "NA",
      image: "/images/speakers/abhik_banerjee.jpg"
    },
    {
      name: "A. S. Prakash",
      designation: "CSIR-CECRI",
      topic: "NA",
      image: "/images/speakers/a._s._prakash.jpg"
    },
    {
      name: "A. J. Bhattacharya",
      designation: "IISc Bangalore",
      topic: "NA",
      image: "/images/speakers/a._j._bhttacharya.jpg"
    },
    {
      name: "Manjusha Shelke",
      designation: "NCL Pune",
      topic: "NA",
      image: "/images/speakers/manjusha_shelke.jpg"
    },
    {
      name: "Mudit Dixit",
      designation: "CSIR-CLRI",
      topic: "NA",
      image: "/images/speakers/mudit_dixit.jpg"
    },
    {
      name: "Sai Gopalakrishnan",
      designation: "IISc Bangalore",
      topic: "NA",
      image: "/images/speakers/sai_gopalakrishnan.jpg"
    },
    {
      name: "M. M. Shaijumon",
      designation: "IISER TVM",
      topic: "NA",
      image: "/images/speakers/m._Shaijumon.jpg"
    },
    {
      name: "S. K. Martha",
      designation: "IIT Hyderabad",
      topic: "NA",
      image: "/images/speakers/s._k._martra.jpg"
    },
    {
      name: "Urmimala Maitra",
      designation: "IACS",
      topic: "NA",
      image: "/images/speakers/urmimala_maitra.jpg"
    },
    {
      name: "V. Aravindan",
      designation: "IISER Tirupati",
      topic: "NA",
      image: "/images/speakers/v._aravindan.jpg"
    },
    {
      name: "Yogesh K. Sharma",
      designation: "IIT Roorkee",
      topic: "NA",
      image: "/images/speakers/yogesh_k._sharma.jpg"
    },
    {
      name: "Naga Phani Aetukuri",
      designation: "IISc",
      topic: "NA",
      image: "/images/speakers/naga_phani_aetukuri.jpg"
    },
    {
      name: "Prof Rajendra Singh Dhaka",
      designation: "IIT Delhi",
      topic: "NA",
      image: "/images/speakers/rajendra_singh_dhaka.jpg"
    },
    {
      name: "Sudarshan Narayan",
      designation: "IIT Kanpur",
      topic: "NA",
      image: "/images/speakers/sudarshan_narayan.jpg"
    },
    {
      name: "Palaniselvam",
      designation: "IIT Madras",
      topic: "NA",
      image: "/images/speakers/palaniselvam.jpg"
    },
    {
      name: "Dr. B. V. Sarada",
      designation: "ARCI",
      topic: "NA",
      image: "/images/speakers/dr._b._v._sarada.jpg"
    },
    {
      name: "Dr. Srinivasan Anandan",
      designation: "ARCI",
      topic: "NA",
      image: "/images/speakers/Dr._srinivasan_anandan.jpg"
    },
    {
      name: "Prof. Rajendra K. Singh",
      designation: "IIT BHU",
      topic: "NA",
      image: "/images/speakers/prof._rajendra_k._singh.jpg"
    }
  ],
  organizers: [
    {
      name: "Prof. Amartya Mukhopadhyay",
      role: "Conference Chair",
      department: "Dept. of Metallurgical Engineering & Materials Science",
      org: "IIT Bombay",
      image: "/images/organiser/amartya_mukhopadhyay.jpg"
    },
    {
      name: "Prof. Srinivasan Ramakrishnan",
      role: "Conference Chair",
      department: "Department of Chemistry",
      org: "IIT Bombay",
      image: "/images/organiser/srinivasan_ramakrishnan.jpg"
    }
  ]
};
