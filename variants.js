// Variants are also persisted in variants.json. Inlined here so the prototype
// works without a fetch (file:// safe). Keep these in sync.
window.NUANU_VARIANTS = {
  master: {
    id: "master",
    audience: "Healthspan",
    audienceNote: "High-net-worth 45–60, optimising biological age.",
    h1: "Reverse your biological age in fourteen days, and prove it.",
    sub: "A clinical longevity programme at Nuanu Creative City, Bali. Sixty-marker panel, DunedinPACE epigenetic age, VO2max, continuous glucose. Diagnose, practice, restore — and leave with data you can act on.",
    trustStrip: ["Application only", "Cohort of 10", "Bali · October 2026"],
    hook: "60-marker panel · DunedinPACE · VO2max",
    priceBand: "$9,800 — $13,500",
    heroAlt: "Dawn light on a terrace at Nuanu Creative City. A single fifty-five-year-old man in linen walks away from the camera toward a palm-shaded path. Wide angle, depth, no other figures.",
    heroCaption: "hero · dawn · terrace · figure walking · palm path",
    heroPalette: ["#2c382c", "#5b6049", "#a18960", "#dec19a"],
    heroImage: "/images/hero-healthspan.png",
  },
  unplug: {
    id: "unplug",
    audience: "Unplug",
    audienceNote: "Burnout reset for senior operators.",
    h1: "Fourteen days off your nervous system.",
    sub: "A clinical longevity programme at Nuanu Creative City, Bali. Phone-free protocol, continuous HRV, sleep architecture, breath and sound work. Diagnose, practice, restore — and leave with a nervous system you recognise again.",
    trustStrip: ["Application only", "Cohort of 10", "Bali · October 2026"],
    hook: "WHOOP · phone-free protocol",
    priceBand: "$9,800 — $13,500",
    heroAlt: "A woman in her late forties, head tipped back into the deep shade of a daybed, eyes closed. The ocean is a soft horizon line beyond. Mid-afternoon, natural light, candid.",
    heroCaption: "hero · daybed · ocean horizon · head back · shade",
    heroPalette: ["#1f2a30", "#3f5a64", "#7a98a0", "#d3d2c5"],
    heroImage: "/images/hero-unplug.png",
  },
  reset: {
    id: "reset",
    audience: "Reset",
    audienceNote: "Metabolic reset and weight.",
    h1: "See what your body has been hiding.",
    sub: "A clinical longevity programme at Nuanu Creative City, Bali. Continuous glucose monitoring, sixty-marker blood panel, nutrition coaching, daily movement. Diagnose, practice, restore — and leave knowing exactly what your meals are doing.",
    trustStrip: ["Application only", "Cohort of 10", "Bali · October 2026"],
    hook: "Continuous glucose monitor, take-home",
    priceBand: "$9,800 — $13,500",
    heroAlt: "Close-up of a continuous glucose monitor on the upper arm of a person standing at a kitchen counter, morning light from a side window. A ceramic cup and a knife on a wooden board sit just out of focus.",
    heroCaption: "hero · CGM upper arm · kitchen · morning light",
    heroPalette: ["#2e2620", "#6a513c", "#b48b62", "#ecd5b1"],
    heroImage: "/images/hero-reset.png",
  },
  moms_reset: {
    id: "moms_reset",
    audience: "Mom's Reset",
    audienceNote: "Gifted to a parent by an adult child.",
    h1: "Give your mother fourteen days she would never give herself.",
    sub: "A clinical longevity programme at Nuanu Creative City, Bali. Full medical workup, gentle daily practice, doctor-supervised rest. Diagnose, practice, restore — and a daily WhatsApp update so you know she is well.",
    trustStrip: ["Application only", "Cohort of 10", "Bali · October 2026"],
    hook: "Daily WhatsApp updates to you",
    priceBand: "$9,800 — $13,500",
    heroAlt: "Two pairs of hands, one older and one younger, holding small ceramic tea cups across a worn wooden table. Late-morning side light. Faces out of frame. Candid.",
    heroCaption: "hero · two hands · tea cups · wooden table · side light",
    heroPalette: ["#2a1f17", "#6f4f33", "#b0875a", "#e6ceaa"],
    heroImage: "/images/hero-moms.png",
  },
  work_well: {
    id: "work_well",
    audience: "Work Well",
    audienceNote: "A 14-day workation with diagnostics.",
    h1: "Work from Bali. Leave with a VO2 score.",
    sub: "A clinical longevity programme at Nuanu Creative City, Bali. Fibre desks, paddock-quiet calls, full diagnostics around your meeting calendar. Diagnose, practice, restore — and ship home with biomarkers, not just photographs.",
    trustStrip: ["Application only", "Cohort of 10", "Bali · October 2026"],
    hook: "The only workation that ships you home with biomarkers",
    priceBand: "$9,800 — $13,500",
    heroAlt: "A laptop and a leather notebook open on a terrace table overlooking a green expanse of rice fields. Two ceramic cups, a pair of glasses, no person. Late-afternoon light.",
    heroCaption: "hero · laptop · notebook · rice fields · no person",
    heroPalette: ["#283224", "#4d6a3f", "#9bb079", "#dfd6b5"],
    heroImage: "/images/hero-workwell.png",
  },

  // ---------------------------------------------------------------------------
  // Wellness retreats — no devices, no resident practitioners, 7 days, $5K flat.
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Parents Vitality Retreat — wellness self-buyer 55+ layout (v4).
  // Strict per deepseek 10-screen wireframe (2026-05-27). Kamalaya format:
  // full-width hero image on top, text below. No trust strip, no gallery,
  // no inclusion lists, single hero CTA, dedicated parents footer.
  // ---------------------------------------------------------------------------
  parents: {
    id: "parents",
    kind: "wellness",
    layout: "active-vitality",
    audience: "Parents Vitality Retreat",
    audienceNote: "Energy. Mobility. Clarity.",
    tag: "Parents Vitality Retreat",
    h1: "Energy. Mobility. Clarity.",
    sub: "7 days for those 55+ who don't plan to slow down.",
    hook: "Energy. Mobility. Clarity.",
    priceBand: "$5,000",
    heroAlt: "An active couple in their early sixties run side by side along a soft tropical path at Nuanu Creative City. Palms and a small Balinese shrine frame the path. Bright morning light, candid, premium editorial.",
    heroCaption: "hero · couple 60+ · running · tropical path",
    heroPalette: ["#2c4a2a", "#5a7a40", "#a8b56e", "#e5e2c8"],
    heroImage: "/images/hero-parents.png",
    heroPrimaryCtaLabel: "Learn more",
    heroPrimaryCtaHref: "#whofor",

    // Screen 2 — Who this is for
    whoFor: {
      headline: "This retreat is for you if…",
      items: [
        "you are 55+ and feel younger than your age",
        "you want to stay active",
        "you have slightly less energy than you used to",
        "you value comfort and are not into \"heroics\"",
        "you seek restoration, not medical treatment",
      ],
      footnote: "If you need a medical clinic — this might not be the best fit. If you want to regain vitality — you've come to the right place.",
    },

    // Screen 3 — Philosophy
    principles: {
      headline: "Why age is not the main factor of energy",
      image: "/images/philosophy-couple.png",
      imageAlt: "An elegant couple in their early sixties in soft linen walk hand-in-hand along a path at Nuanu Creative City, modern organic bamboo architecture in the background, warm sunset side light.",
      imageCaption: "couple 60+ · path at Nuanu · sunset",
      imagePalette: ["#2c382c", "#7a5e35", "#c6975a", "#e8d2a8"],
      body: "Science shows: lifestyle affects how we age more than genetics. At 55, 65, or 75 you can feel better than at 40.",
      items: [
        { title: "No violence against yourself" },
        { title: "Through comfort and recovery" },
        { title: "Result: ease every day" },
      ],
    },

    // Screen 4 — Three pillars of restoration
    pillarsBlock: {
      headline: "Three pillars of restoration",
    },
    pillars: [
      {
        title: "Body",
        cadence: "Regain mobility",
        items: ["Joint gym", "Nordic walking", "Pilates 60+", "Water therapy"],
      },
      {
        title: "Sleep & energy",
        cadence: "without stimulants",
        items: ["Sleep diagnosis", "Relaxation techniques", "Nervous system work"],
      },
      {
        title: "Mind",
        cadence: "Clarity without fog",
        items: ["Neuro exercises", "Breathing", "Stress management"],
      },
    ],

    // Screen 5 — Your 7-day program
    program: {
      headline: "Your 7-day program",
      columns: [
        {
          title: "Body care",
          items: ["7 massages", "Joint gym", "Hydrothermal complex", "Kinesiology consultation"],
        },
        {
          title: "Diagnostics & nutrition",
          items: ["Blood test", "Meal plan", "Nutritionist consultation"],
        },
        {
          title: "Mind restoration",
          items: ["Meditations", "Breathing practices", "30-day habit plan"],
        },
      ],
      footnote: "Private room accommodation, 3 meals/day, all treatments and classes included. Additional services optional, no pressure.",
    },

    // Screen 6 — How you will feel on day 8
    day8: {
      headline: "How you will feel on day 8",
      body1: "In the morning you wake up and realise: your body obeys. Your back doesn't ache. You have energy until the evening.",
      body2: "You look in the mirror — and see a well-rested, confident person.",
      imageAlt: "An elegant guest in their early sixties in a soft cream waffle spa robe sits cross-legged on a private wooden verandah, holding a porcelain teacup, morning jungle light, premium editorial.",
      imageCaption: "day 8 · verandah · tea · jungle light",
      imagePalette: ["#22180f", "#4d3621", "#9a754c", "#e3c89b"],
      image: "/images/day8-verandah.png",
    },

    // Screen 7 — Where the retreat takes place
    place: {
      headline: "Where the retreat takes place",
      mainImage: "/images/place-campus.png",
      mainImageAlt: "View of Nuanu, tropical gardens, modern organic architecture, golden hour, premium editorial.",
      mainImageCaption: "nuanu · golden hour · organic architecture",
      mainImagePalette: ["#2c382c", "#5b6049", "#a18960", "#dec19a"],
      subhead: "NUANU CREATIVE CITY · Bali, Indonesia",
      body: "More than a resort. A living ecosystem where nature, culture and innovation coexist.",
      bullets: [
        "70% green space",
        "15,000 trees planted",
        "94.8% waste recycled",
        "Own water treatment system",
      ],
      nearby: "Nearby: Tanah Lot temple, rice terraces, 20 min to Canggu, 60 min to airport.",
      extraImages: [
        { palette: ["#1e2a30","#3a5764","#7d9aa5","#d2dadd"], cap: "pool · ocean horizon",       image: "/images/place-pool.png",     alt: "Lounger by pool with ocean view, empty, premium." },
        { palette: ["#22180f","#4d3621","#9a754c","#e3c89b"], cap: "spa hall · natural materials", image: "/images/place-spa-hall.png", alt: "Nuanu spa area, natural materials, soft light, no people." },
      ],
    },

    // Screen 8 — Price & participation (simple price box)
    investment: {
      headline: "Price & participation",
      intro: "For upcoming retreat dates, please contact us. Group size: up to 12 guests.",
      price: "$5,000 USD",
      priceUnit: "all inclusive",
      ctaLabel: "Reserve your spot",
      note: "Send us a message — we'll answer any questions.",
    },

    // Screen 9 — FAQ
    faq: {
      heading: "Frequently asked questions",
      items: [
        { q: "I've never exercised before. Will it suit me?", a: "Yes. All practices are adapted for any fitness level. Your willingness is what matters most." },
        { q: "Can I come with my partner?",                    a: "Yes. Separate room for couples. The program is shared, with possible personal adjustments." },
        { q: "What will I take home after the retreat?",        a: "Personal nutrition and movement plan, access to a private support chat for 30 days, new habits, and a clear mind." },
        { q: "Do I need a visa?",                                a: "Visa requirements depend on your nationality. We will help with information and instructions after booking. Guests from all over the world are welcome." },
      ],
    },

    // Screen 10 — Final CTA
    closing: {
      line: "You deserve a week just for yourself",
      sub: "Your whole life you've cared for others. Now it's time to care for your own vitality.",
      buttonLabel: "Book the retreat",
    },

    // Footer override (parents-specific contact + links)
    footer: {
      brand: "Parents Vitality Retreat",
      email: "hello@parentsretreat.com",
      phone: "+[phone]",
      socials: [
        { label: "Instagram", href: "#" },
        { label: "Telegram",  href: "#" },
      ],
      legalLinks: [
        { label: "Privacy Policy",   href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
  },
};
