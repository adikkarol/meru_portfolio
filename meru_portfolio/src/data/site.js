/* =========================================================================
   EDIT EVERYTHING HERE.
   Images: drop files into /public/work/ and reference them as "/work/name.jpg"
   Leave image: "" to show an editable placeholder frame instead.
   ratio: any CSS aspect-ratio → "3 / 4" (tall), "4 / 3", "16 / 10", "21 / 9"
   full: true   → project spans the full grid width
   offset: true → pushes the card down for the staggered editorial look
   ========================================================================= */

export const site = {
  // ---------- identity ----------
  wordmark: "MERU",                        // small logo, top-left
  name: "Meruyert",                        // giant coral hero word
  role: "Marketing Specialist",
  location: "Hong Kong",
  availability: "Open to new roles — 2026",

  tagline: ["Ideas that move", "people forward."],
  lead:
    "I'm a marketing specialist turning audience insight into clear strategy, memorable campaigns, and work that gets results.",

  // ---------- contact ----------
  email: "meruyert.shyngys19@gmail.com",
//   emailSecondary: "meruyert@work-email.com",
  resumeUrl: "/Meruyert_Shyngys_CV.pdf",           // put the PDF in /public
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/meruyert-shyngys" },
    // { label: "Instagram", href: "https://instagram.com/your-handle" },
    // { label: "Behance", href: "#" },
  ],

  nav: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // ---------- statement ----------
  statement:
    "I connect the right message to the right audience, then turn the strategy into work people remember.",

  // ---------- brands you've worked with (scrolling strip) ----------
  clients: [
    "The Rosewood Hotel Group", "Club Med", "The Langham Hospitality Group", "L'Oreal", "CASETiFY"
  ],

  // ---------- selected work ----------
  projects: [
    {
      id: "01",
      title: "Flash Sale Promotion",
      client: "Club Med",
      year: "2023",
      tags: ["Strategy", "Campaign"],
      blurb:
        "Positioning, message house, and a 6-week launch campaign across social, OOH, and email — 2.4M reached, 18% lift in brand recall.",
      image: "/work/01.jpg",
      alt: "Launch campaign key visual",
      ratio: "3 / 4",
      href: "#contact",           // swap for a case-study link or PDF
    },
    {
      id: "02",
      title: "Always-on content system",
      client: "Client name",
      year: "2025",
      tags: ["Content", "Social"],
      blurb:
        "A repeatable monthly content engine: pillars, formats, and a calendar the team could actually run. Engagement rate up 3.1×.",
      image: "/work/02.jpg",
      alt: "Content system layouts",
      ratio: "16 / 10",
      offset: true,
    },
    {
      id: "03",
      title: "Audience, in focus",
      client: "Internal",
      year: "2024",
      tags: ["Research", "Positioning"],
      blurb:
        "Survey + interview research turned into three working personas and a messaging matrix used across every channel.",
      image: "",                  // ← empty on purpose: shows the placeholder
      alt: "Audience research deck spreads",
      ratio: "1 / 1",
    },
    {
      id: "04",
      title: "From insight to impact",
      client: "Client name",
      year: "2024",
      tags: ["Growth", "Brand world"],
      blurb:
        "Funnel audit, creative refresh, and a testing roadmap that cut CPA by 34% in one quarter.",
      image: "/work/04.jpg",
      alt: "Growth campaign visuals",
      ratio: "21 / 9",
      full: true,
    },
  ],

  // ---------- capabilities ----------
  services: [
    {
      id: "01",
      title: "Marketing strategy",
      text: "Audience insight, positioning, and plans that give every channel a clear job.",
    },
    {
      id: "02",
      title: "Campaign development",
      text: "Big ideas shaped into focused campaigns people notice and want to join.",
    },
    {
      id: "03",
      title: "Content & growth",
      text: "Useful content systems that build attention, trust, and measurable momentum.",
    },
  ],

  // ---------- by the numbers ----------
  stats: [
    { value: "12", label: "campaigns\nlaunched" },
    { value: "18", label: "markets reached\nwith purpose" },
    { value: "47", label: "ideas turned\ninto action" },
  ],

  // ---------- about ----------
  about: {
    portrait: "/cv_photo_meru.jpeg",
    portraitAlt: "Portrait of Meruyert Shyngys",
    paragraphs: [
      "I've spent the last years between brand and performance — close enough to the data to know what's working, close enough to the creative to make it worth watching.",
      "My favourite projects start with a messy question about people and end with something simple enough to remember.",
    ],
    skills: [
      "Brand positioning", "Campaign management", "Content strategy",
      "Social media", "SEO basics", "Email & CRM", "Meta & Google Ads",
      "GA4 · Looker Studio", "Figma", "Copywriting (EN / RU / KZ)",
    ],
  },
};