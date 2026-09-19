export const config = {
  showSpeakers: false, // Set to true to reveal the full Speakers page and homepage section
  showSponsors: false, // Set to true to reveal the full Sponsorship page and inquiry portal
  conference: {
    name: "2nd National Meeting on Sodium(-ion) Batteries",
    shortName: "NMSB-2",
    dates: "22-24 November 2026",
    venue: "ASPIRE - IIT Bombay Research Park, Mumbai, India",
    tagline: "Building on the success of NMSB-1 (in 2024), NMSB-2 will again bring together representatives from academia, industry/startups, and government agencies to discuss, deliberate, and pave the way towards advancing Sodium Ion battery technology, deployment, and commercialisation.",
    contactEmail: "nmsb.iitb@gmail.com",
    pdfScheduleUrl: "/files/NMSB-2_Programme_Schedule.pdf",
  },
  schedule: {
    1: [
      { time: "12:30 - 01:30 PM", title: "Registration", speaker: "Secretariat Desk", location: "ASPIRE Foyer", details: "Registration & Welcome kit collection" },
      { time: "01:00 - 02:00 PM", title: "Welcome Lunch", speaker: "All Delegates", location: "Dining Hall", details: "Networking & Welcome Lunch" },
      { time: "02:05 - 03:00 PM", title: "Inaugural Session", speaker: "Conference Leadership & Guests of Honour", location: "Auditorium", details: "Welcome Address by Conference Chair, Address by Director/Deputy Director, Address by Guest of Honour" },
      { time: "03:00 - 03:45 PM", title: "Address by PIC, GESH & President, BRS", speaker: "PIC (GESH) & President (BRS)", location: "Auditorium", details: "Keynote Address" },
      { time: "03:45 - 04:00 PM", title: "Tea Break", speaker: "Refreshment Session", location: "Foyer & Lounge", details: "High Tea & Networking" },
      { time: "04:00 - 05:15 PM", title: "Technical Session I: Materials to Technologies (3×25 min)", speaker: "A. S. Prakash, Dr. Srinivasan Anandan", location: "Breakout Room", details: "Materials design, synthesis, and technology translation" }
    ],
    2: [
      { time: "08:30 - 09:00 AM", title: "Registration", speaker: "Secretariat Desk", location: "ASPIRE Foyer", details: "Morning Registration" },
      { time: "09:10 - 10:00 AM", title: "Special Lectures (2×25 min)", speaker: "Director (CSIR-CECRI), Director (TCG-CREST)", location: "Auditorium", details: "Plenary Special Lectures by Director CSIR-CECRI (Karaikudi) & Director TCG-CREST" },
      { time: "10:00 - 10:45 AM", title: "Panel Discussion I: Building India's Sodium-ion Start-up Ecosystem", speaker: "Industry Leaders & Start-up Founders", location: "Auditorium", details: "Venture capital, technology transfer, and startup incubator strategies" },
      { time: "10:45 - 11:00 AM", title: "Tea Break", speaker: "Refreshment Session", location: "Foyer & Lounge", details: "Networking Tea Break" },
      { time: "11:00 - 11:45 AM", title: "Panel Discussion II: Sodium-ion Industries — Manufacturing, Supply Chain & Market Adoption", speaker: "Manufacturing & Supply Chain Panel", location: "Auditorium", details: "Raw material supply chain, cell manufacturing scale-up, and grid/EV market adoption" },
      { time: "12:00 - 01:15 PM", title: "Technical Session II: Cathode Materials (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Layered oxides, polyanionic cathode architectures, and structural stability" },
      { time: "01:15 - 03:00 PM", title: "Lunch & Poster Session", speaker: "Research Delegates", location: "Dining Hall & Exhibition Bay", details: "Buffet Lunch and Interactive Student & Scholar Poster Presentations" },
      { time: "03:00 - 04:00 PM", title: "Technical Session III: Anode, Electrolyte & Interfaces (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Hard carbons, non-aqueous electrolytes, and solid-electrolyte interphase (SEI) kinetics" },
      { time: "04:00 - 04:15 PM", title: "Tea Break", speaker: "Refreshment Session", location: "Foyer & Lounge", details: "Networking Tea Break" },
      { time: "04:15 - 05:30 PM", title: "Technical Session IV: Cell Technologies & Manufacturing (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Pouch/cylindrical cell fabrication, slurry formulation, and electrode coating" },
      { time: "05:45 - 07:15 PM", title: "Board Room Meeting (Invite Only)", speaker: "Executive Board Members", location: "Board Room", details: "Strategy & BRS Society Executive Council Meeting" },
      { time: "06:30 - 08:30 PM", title: "Gala Dinner", speaker: "All Delegates", location: "Main Dining Lawn", details: "Conference Gala Dinner & Social Networking" }
    ],
    3: [
      { time: "08:30 - 09:45 AM", title: "Technical Session V: Industry Perspectives — Scale-up, Manufacturing & Commercial Deployment (3×25 min)", speaker: "Industry Stalwarts & R&D Heads", location: "Breakout Room", details: "Gigafactory scale-up, cost economics, and commercial battery deployment" },
      { time: "09:45 - 11:00 AM", title: "Technical Session VI: Cell Engineering, Design & Performance Evaluation (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Thermal management, pack design, cycle life, and safety testing" },
      { time: "11:00 - 11:15 AM", title: "Tea Break", speaker: "Refreshment Session", location: "Foyer & Lounge", details: "Networking Tea Break" },
      { time: "11:15 - 11:50 AM", title: "Technical Session VII: Characterization, Diagnostics & Failure Analysis (2×25 min)", speaker: "Invited Technical Speakers", location: "Auditorium / Breakout Room", details: "In-situ Operando XRD, NMR, spectroscopy, and degradation mechanics" },
      { time: "11:50 - 01:05 PM", title: "Technical Session VIII: Recycling, Sustainability & Circular Economy (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Hydrometallurgical recycling, direct regeneration, and life-cycle assessment (LCA)" },
      { time: "01:05 - 02:30 PM", title: "Lunch & Poster Session", speaker: "Research Delegates", location: "Dining Hall & Exhibition Bay", details: "Buffet Lunch and Final Poster Session" },
      { time: "02:30 - 03:45 PM", title: "Technical Session IX: Industrial R&D, Scale-up & Technology Translation (3×25 min)", speaker: "Invited Technical Speakers", location: "Breakout Room", details: "Technology readiness levels (TRL), pilot lines, and patent landscapes" },
      { time: "03:45 - 04:00 PM", title: "Tea Break", speaker: "Refreshment Session", location: "Foyer & Lounge", details: "Networking Tea Break" },
      { time: "04:00 - 04:30 PM", title: "Valedictory Ceremony & Best Poster Awards", speaker: "Conference Chairs & Committee", location: "Auditorium", details: "Valedictory address, announcement of best poster awards, and closing remarks" }
    ]
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
    email: "nmsb.iitb@gmail.com"
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
      role: "Chair",
      department: "Dept. of Metallurgical Engineering & Materials Science",
      org: "IIT Bombay",
      image: "/images/organiser/amartya_mukhopadhyay.jpg"
    },
    {
      name: "Prof. Srinivasan Ramakrishnan",
      role: "Vice Chair",
      department: "Department of Chemistry",
      org: "IIT Bombay",
      image: "/images/organiser/srinivasan_ramakrishnan.jpg"
    }
  ]
};
