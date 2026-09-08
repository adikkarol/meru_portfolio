/* =========================================================================
   Images live in /public/work/ → reference as "/work/name.jpg"
   image: ""  → shows the editable placeholder frame
   gallery    → extra images grouped under the same project (NEW, see patch)
   ratio      → "3 / 4" tall · "1 / 1" square · "16 / 9" wide · "191 / 100"
   full: true → spans the grid · offset: true → staggers the card down
   ========================================================================= */

export const site = {
  // ---------- identity ----------
  wordmark: "PORTFOLIO",
  name: "Meruyert",
  role: "Marketing Specialist",
  location: "Hong Kong",
  availability: "Open to new roles — 2026",

  tagline: ["Campaigns that", "earn their keep."],
  lead:
    "Marketing specialist working where brand and performance meet — campaigns for travel, hospitality and more, built on audience insight and read back through the numbers.",

  // ---------- contact ----------
  email: "meruyert.shyngys19@gmail.com",
  resumeUrl: "/Meruyert_Shyngys_CV.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/meruyert-shyngys" },
  ],

  nav: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
  ],

  statement:
    "I move brands into new markets, then run the campaigns that have to pay for the move.",

  clients: [
    "Club Med",
    "Alliance Française de Hong Kong",
    "L'Oréal Brandstorm",
    "Rosewood Hotel Group",
    "Langham Hospitality Group",
    "Breer × HKUST",
  ],

  // ---------- selected work ----------
  projects: [
    {
      id: "01",
      title: "That's L'esprit Libre — brand identity rollout",
      client: "Club Med",
      year: "2023–24",
      tags: ["Brand rollout", "Social", "Bilingual"],
      blurb:
        "Led the Hong Kong transition to Club Med's new brand identity: key visuals, posters, Facebook content and CMS website updates, plus a bilingual data-catching initiative. Added 2,000 new followers inside a 2.4M community.",
      image: "/work/clubmed-sunthing.jpg",
      alt: "Club Med Sun-thing exciting campaign key visual",
      ratio: "1 / 1",
      gallery: [
        { src: "/work/clubmed-sunny-side-up-en.jpg", alt: "Sunny Side Up story, English" },
        { src: "/work/clubmed-sunny-side-up-tc.jpg", alt: "Sunny Side Up story, Traditional Chinese" },
      ],
    },
    {
      id: "02",
      title: "Flash Sale & Black Friday",
      client: "Club Med",
      year: "2023",
      tags: ["Campaign", "Performance", "CMS"],
      blurb:
        "Concept, key visuals, CMS landing pages and paid assets for the two biggest commercial peaks of the season. Together they generated HK$1.2M in revenue.",
      image: "/work/clubmed-flash-sale-en.jpg",
      alt: "Club Med Flash Sale key visual",
      ratio: "1 / 1",
      offset: true,
      gallery: [
        { src: "/work/clubmed-flash-sale-tc.jpg", alt: "Flash Sale key visual, Traditional Chinese" },
        { src: "/work/clubmed-black-friday-teaser.jpg", alt: "Black Friday teaser, stay tuned" },
        { src: "/work/clubmed-black-friday-sales.jpg", alt: "Black Friday winter sales, up to 40% off" },
      ],
    },
    {
      id: "03",
      title: "Seasonal campaign system",
      client: "Club Med",
      year: "2023–24",
      tags: ["Art direction", "Copywriting", "EN / 繁中"],
      blurb:
        "Five-plus seasonal campaigns — Sea You Soon, Snow Excited, Spring Ski-son, Sunny Side Up, Yama Go — each written and laid out for English and Traditional Chinese, plus 30+ travel-agency flyers and banners rebuilt to the new identity.",
      image: "/work/clubmed-sea-you-soon.jpg",
      alt: "Club Med Sea You Soon campaign key visual",
      ratio: "1 / 1",
      gallery: [
        { src: "/work/clubmed-snow-excited.jpg", alt: "Snow Excited, book early for Winter 23-24" },
        { src: "/work/clubmed-yama-go.jpg", alt: "3, 2, 1 Yama Go Hokkaido summer campaign" },
        { src: "/work/clubmed-skison-japan-en.jpg", alt: "Spring Ski-son Japan offer, English" },
        { src: "/work/clubmed-sea-you-soon-lastminute.jpg", alt: "Sea you soon last-minute summer deals" },
      ],
    },
    {
      id: "04",
      title: "EDM & CRM production",
      client: "Club Med",
      year: "2023–24",
      tags: ["Email", "HTML", "SEO"],
      blurb:
        "10+ EDMs for loyal customers, built in Dartagnan and hand-coded HTML — layout, copy, image selection, resolution QA and delivery via FileZilla. Paired with SEO-optimised site content to lift organic traffic.",
      image: "work/cb_edm_1.png",
      alt: "Club Med EDM layouts",
      ratio: "1 / 1",
      offset: true,
      gallery: [
        { src: "/work/cb_edm_2.png", alt: "Club Med EDM layouts 2" },
        { src: "/work/cb_edm_3.png", alt: "Club Med EDM layouts 3" },
      ],
    },
    // {
    //   id: "05",
    //   title: "Media planning & weekly performance reporting",
    //   client: "Club Med",
    //   year: "2023–24",
    //   tags: ["Media planning", "Analytics", "Reporting"],
    //   blurb:
    //     "Monthly media plans and weekly performance reads across DV360, Criteo, Meta, Yahoo Native, TripAdvisor, Adara and SEM — six-figure monthly budgets split by campaign and funnel stage, tracked on CPA, ROAS and booking-engine entries, with creative-level analysis used to shift spend mid-flight.",
    //   image: "work/bar_chart.jpg",
    //   alt: "Media plan and weekly performance dashboard",
    //   ratio: "21 / 9",
    //   full: true,
    // },
    {
      id: "05",
      title: "Summer camps recruitment campaign",
      client: "Alliance Française de Hong Kong",
      year: "2025",
      tags: ["Campaign", "Poster design", "Education"],
      blurb:
        "Recruitment campaign for junior French summer programmes: a hero poster plus course-detail sets for Complete Beginner and DELF Junior preparation, structured around an early-bird deadline and two campus locations.",
      image: "/work/af-summer-camps.png",
      alt: "Alliance Française Explore summer camps poster",
      ratio: "1 / 1",
      gallery: [
        { src: "/work/af-complete-beginner.png", alt: "Complete Beginner course schedule poster" },
        { src: "/work/af-delf-junior.png", alt: "DELF Junior Preparation schedule poster" },
      ],
    },
    // {
    //   id: "07",
    //   title: "ScentSelect™ — L'Oréal Brandstorm 2026",
    //   client: "Team The M&A · Team Leader",
    //   year: "2026",
    //   tags: ["Research", "Conjoint analysis", "Product concept"],
    //   blurb:
    //     "What actually drives perfume purchases in Hong Kong? Conjoint analysis and SPSS correlations across 62 respondents put a multi-concentration bottle at the top: Special Feature was the most influential attribute at 127.03 utility range, ahead of Brand at 121.98.",
    //   image: "",
    //   alt: "L'Oréal Brandstorm ScentSelect concept slides",
    //   ratio: "1 / 1",
    //   offset: true,
    // },
    {
      id: "06",
      title: "Breer on Red Note",
      client: "Breer × HKUST",
      year: "2025",
      tags: ["Content marketing", "Social launch", "AI video"],
      blurb:
        "Took a Hong Kong upcycled-beer brand onto Red Note from zero: channel positioning, visuals, slogans and an AI-generated promotional video — coursework strategy applied to a live client case.",
      image: "/work/beer_1.png",
      alt: "Breer Red Note launch content",
      ratio: "16 / 10",
      // full: true,
      gallery: [
        { src: "/work/beer_2.png", alt: "Breer Red Note launch content 2" },
        { src: "/work/beer_3.png", alt: "Breer Red Note launch content 3" },
        { src: "/work/beer_4.png", alt: "Breer Red Note launch content 4" },
      ],
    },
  ],

  // ---------- capabilities ----------
  services: [
    {
      id: "01",
      title: "Campaign & brand marketing",
      text:
        "Campaign concepts, key visuals and copy that ship in English and Traditional Chinese — posters, social, EDM, landing pages.",
    },
    {
      id: "02",
      title: "Media planning & performance",
      text:
        "Budget splits across prospecting, retargeting and SEM, then weekly reporting on CPA, ROAS and conversion to prove what earned its spend.",
    },
    {
      id: "03",
      title: "Research & positioning",
      text:
        "Conjoint analysis, survey design and competitive research turned into positioning a whole team can build from.",
    },
  ],

  // ---------- by the numbers ----------
  stats: [
    { value: "1.2M", label: "HKD revenue\nfrom campaigns I ran" },
    { value: "2,000", label: "new followers\nin one campaign" },
    { value: "20+", label: "brand partnerships\nnegotiated" },
  ],

  // ---------- about ----------
  about: {
    portrait: "/cv_photo_meru.jpeg",
    portraitAlt: "Portrait of Meruyert Shyngys",
    paragraphs: [
      "I work where brand and performance meet. At Club Med I helped move the Hong Kong market onto a new brand identity, then ran the campaigns that had to pay for the move — close enough to the media plan to know what was working, close enough to the creative to make it worth looking at.",
      "Before that, Rosewood Hotel Group and Langham Hospitality Group taught me the operational side of hospitality: training programmes, loyalty data, and reports written for a VP rather than a slide. I completed my MSc Marketing at HKUST in 2025 (Beta Gamma Sigma, top 20% of the programme) after a BBA in Hospitality and Real Estate at CUHK.",
      "I work across English, Russian and Kazakh, with conversational Chinese and Korean.",
    ],
    skills: [
      "Brand positioning", "Campaign management", "Content strategy",
      "Media planning (DV360 · Criteo · Meta · SEM)", "Partnership contracts",
      "Competitive analysis", "Google Analytics", "SEO", "EDM (Dartagnan · HTML)",
      "CMS · HTML/CSS", "Qualtrics · SPSS", "Conjoint analysis",
      "Figma · Photoshop · Canva", "Shopify", "Copywriting (EN / RU / KZ)",
    ],
  },
};