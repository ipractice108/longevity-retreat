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
  // Parents Vitality Retreat — wellness self-buyer 55+ layout (v3).
  // Structure follows Kamalaya "Relax & Renew" section order;
  // services grids follow SHA "Leaders Health & Performance" pattern.
  // ---------------------------------------------------------------------------
  parents: {
    id: "parents",
    kind: "wellness",
    layout: "active-vitality",
    audience: "Parents Vitality Retreat",
    audienceNote: "Energy. Mobility. Clarity. — 7 days for those 55+ who don't plan to slow down.",
    tag: "Parents Vitality Retreat",
    h1: "Energy. Mobility. Clarity.",
    sub: "Seven days at Nuanu Creative City, Bali — for active adults 55+ who don't plan to slow down. Not a medical clinic, not a heroic boot camp. A premium reset built around comfort, recovery, and the inputs that actually move the needle.",
    trustStrip: ["7 days", "All-inclusive", "Cohort of 12", "$5,000"],
    hook: "Energy. Mobility. Clarity.",
    priceBand: "$5,000",
    heroAlt: "An active couple in their early sixties run side by side along a soft tropical path at Nuanu Creative City. The woman, in a pale blue tank and short shorts, smiles broadly; the man behind her in a navy tee, mid-stride. Palms and a small Balinese shrine frame the path. Bright morning light, candid, premium editorial.",
    heroCaption: "hero · couple 60+ · running · tropical path · morning",
    heroPalette: ["#2c4a2a", "#5a7a40", "#a8b56e", "#e5e2c8"],
    heroImage: "/images/hero-parents.png",
    heroPrimaryCtaLabel: "Reserve your spot",
    heroSecondaryCtaLabel: "Learn more",
    heroSecondaryHref: "#intro",

    // 3-col strip (Kamalaya goals / for / team)
    intro3Col: {
      eyebrow: "01 · Programme overview",
      cols: [
        {
          title: "Program goals",
          items: [
            "Restore daily energy.",
            "Reclaim mobility and ease.",
            "A clear, well-rested mind.",
            "Habits that survive the flight home.",
          ],
        },
        {
          title: "Recommended for",
          items: [
            "Active adults 55+ who feel younger than their age.",
            "People who want to stay active for the long run.",
            "Those with slightly less energy than they used to have.",
            "Guests who value comfort, not heroics.",
            "Those seeking restoration, not medical treatment.",
          ],
        },
        {
          title: "Your environment",
          items: [
            "Nuanu Creative City, Bali.",
            "Cohort of up to 12 guests.",
            "7 days, all-inclusive.",
            "Private room. Three meals a day.",
            "Application only.",
          ],
        },
      ],
      footnote: "If you need a medical clinic, this is not the best fit. If you want to regain vitality — you are in the right place.",
      cta: { label: "Reserve your spot", href: "#apply" },
    },

    // Premise + 3 principles (Kamalaya editorial paragraph block)
    principles: {
      eyebrow: "02 · The premise",
      headline: "Why age is not the main factor of energy.",
      body: "Science is clear: lifestyle shapes how we age far more than genetics does. At 55, 65 or 75 you can wake up with more energy than you had at 40 — when the week is built around comfort, recovery and the right inputs. This is not a clinic. It is a quiet, intelligent reset.",
      items: [
        { title: "No violence against yourself",      body: "Every practice scales. Nothing is heroic, nothing is rushed." },
        { title: "Through comfort and recovery",       body: "The body recalibrates when it stops being pushed against." },
        { title: "Ease, every day after",              body: "Habits you actually keep — not a sprint you survive once." },
      ],
    },

    // 6-image gallery (Kamalaya 3×3 trimmed)
    gallery: {
      eyebrow: "03 · Inside the week",
      images: [
        { palette: ["#2c382c","#5b6049","#a18960","#dec19a"], cap: "open-air movement deck",      image: "/images/pillar-move.png",    alt: "Open-air teak movement deck, palm canopy beyond." },
        { palette: ["#2a1f17","#6f4f33","#b0875a","#e6ceaa"], cap: "lumeira spa · sound bowls",   image: "/images/pillar-rest.png",    alt: "Brass singing bowls on linen at Lumeira spa." },
        { palette: ["#22180f","#4d3621","#9a754c","#e3c89b"], cap: "massage table · folded linen", image: "/images/pillar-restore.png", alt: "Massage table at Lumeira spa, soft natural light." },
        { palette: ["#1d2b29","#2f4a44","#6e8a82","#c3d0c8"], cap: "cohort dinner · blue hour",   image: "/images/pillar-connect.png", alt: "Cohort dinner table at blue hour, shared dishes." },
        { palette: ["#1e2a30","#3a5764","#7d9aa5","#d2dadd"], cap: "pool lounger · jungle view",   image: "/images/gallery-pool.png", alt: "An empty teak pool lounger at the edge of the campus pool, jungle view beyond, no people, premium editorial." },
        { palette: ["#241a13","#5a3f2a","#a78057","#e5cba2"], cap: "spa interior · soft light",    image: "/images/gallery-spa.png",  alt: "A quiet spa interior at Nuanu, natural stone and teak, soft afternoon light, no people, premium editorial." },
      ],
    },

    // 3 pillars — Body / Sleep & Energy / Mind (SHA Specialized-packs style)
    pillarsBlock: {
      eyebrow: "04 · Three pillars of restoration",
      headline: "Body. Sleep. Mind.",
      intro: "Three quiet inputs, held across the whole week. Each one scales — none of them asks anything heroic of the body.",
    },
    pillars: [
      {
        title: "Body",
        cadence: "Mobility & strength",
        body: "Regain ease of movement. Joint mobility, balance, gentle strength — built around the body you have, not the one you used to.",
        items: ["Joint gym", "Nordic walking", "Pilates 60+", "Water therapy", "Daily mobility"],
        image: null,
        imagePalette: ["#2c382c", "#5b6049", "#a18960", "#dec19a"],
        imageCaption: "pillar · body · mobility",
      },
      {
        title: "Sleep & energy",
        cadence: "Restoration",
        body: "Sleep that resets, days that no longer drag. Nervous system regulation, sleep hygiene, breath — the quiet inputs.",
        items: ["Sleep diagnostics", "Relaxation techniques", "Nervous system work", "Evening breathwork", "Sound healing"],
        image: null,
        imagePalette: ["#2a1f17", "#6f4f33", "#b0875a", "#e6ceaa"],
        imageCaption: "pillar · sleep · sound bowls",
      },
      {
        title: "Mind",
        cadence: "Clarity",
        body: "Clearer days, calmer mornings, a longer fuse. The mind catches up with the slower tempo of the week.",
        items: ["Neuro exercises", "Breathing practices", "Stress management", "Sunset meditation", "30-day habit plan"],
        image: null,
        imagePalette: ["#1d2b29", "#345049", "#7a948a", "#d3d6cf"],
        imageCaption: "pillar · mind · sunset meditation",
      },
    ],

    // 7-day program (SHA-style 3-col services grid)
    program: {
      eyebrow: "05 · Your 7-day programme",
      headline: "Everything is built around comfort and recovery.",
      intro: "Private room accommodation, three meals a day, all treatments and classes included. Additional services are optional. There is no pressure to do everything.",
      columns: [
        {
          title: "Body care",
          items: [
            "7 massages — across the week",
            "Joint gym — daily",
            "Hydrothermal complex — daily access",
            "Kinesiology consultation — once",
          ],
        },
        {
          title: "Diagnostics & nutrition",
          items: [
            "Blood panel — on arrival",
            "Nutritionist consultation — once",
            "Personal meal plan — take home",
            "Glucose-aware menu — every day",
          ],
        },
        {
          title: "Mind restoration",
          items: [
            "Meditations — daily",
            "Breathing practices — daily",
            "Sound healing — twice in the week",
            "30-day habit plan — take home",
          ],
        },
      ],
    },

    // How you'll feel on day 8 (image+text split)
    day8: {
      eyebrow: "06 · How you will feel on day 8",
      headline: "Your body obeys. Your back doesn't ache. Your energy lasts until evening.",
      body: "Wake up on the morning after the retreat and notice the difference. You don't have to think about every step. The day is not a negotiation with your back. You look in the mirror and see a well-rested, confident person — and a plan that lives on past the flight home.",
      imageAlt: "An elegant guest in their early sixties in a soft spa robe sits on a private verandah with a porcelain teacup. Morning jungle light, premium editorial composition, relaxed posture.",
      imageCaption: "day 8 · verandah · tea · jungle light",
      imagePalette: ["#22180f", "#4d3621", "#9a754c", "#e3c89b"],
      image: "/images/day8-verandah.png",
    },

    // Where the retreat takes place
    place: {
      eyebrow: "07 · Where the retreat takes place",
      headline: "Nuanu Creative City — a living ecosystem.",
      intro: "Not a resort. A 44-hectare creative campus on Bali's west coast where nature, culture and innovation share one walkable village.",
      metrics: [
        { value: "70%",    label: "Green space across the campus" },
        { value: "15,000", label: "Trees planted to date" },
        { value: "94.8%",  label: "Waste recycled on-site" },
        { value: "100%",   label: "Own water treatment system" },
      ],
      nearby: {
        title: "Nearby",
        items: [
          "Tanah Lot temple — 15 minutes",
          "Rice terraces — minutes from the gate",
          "Canggu — 20 minutes",
          "Denpasar (DPS) airport — 60 minutes, pickup included",
        ],
      },
      images: [
        { palette: ["#2c382c","#5b6049","#a18960","#dec19a"], cap: "nuanu campus · golden hour", image: "/images/place-campus.png",   alt: "Wide view of Nuanu Creative City at golden hour, organic modern architecture, tropical landscape, no people." },
        { palette: ["#1e2a30","#3a5764","#7d9aa5","#d2dadd"], cap: "pool · ocean horizon",        image: "/images/place-pool.png",     alt: "Empty teak pool deck with an ocean horizon line, soft afternoon light." },
        { palette: ["#22180f","#4d3621","#9a754c","#e3c89b"], cap: "spa hall · natural materials", image: "/images/place-spa-hall.png", alt: "Quiet spa hall at Nuanu, natural stone and teak, candle, no people." },
      ],
    },

    // Investment — simple Kamalaya-style price card
    investment: {
      eyebrow: "08 · Price and participation",
      headline: "One price. All inclusive. No pressure.",
      price: "$5,000",
      priceUnit: "per guest · 7 days · all inclusive",
      duration: "Private room. Three meals a day. All treatments and classes from the programme.",
      cohort: "Up to 12 guests · application only",
      ctaLabel: "Reserve your spot",
      note: "For upcoming retreat dates, please contact us. We answer every message within five working days.",
      included: [
        "Seven nights, private room",
        "Three meals a day — plant-forward, glucose-aware",
        "All treatments, classes and consultations listed above",
        "Airport transfer from Denpasar (DPS)",
      ],
      notIncluded: [
        "Flights to and from Denpasar (DPS)",
        "Travel insurance",
        "Optional add-on services beyond the standard programme",
        "Companion accommodation (available, priced separately)",
        "Gratuities (genuinely optional)",
      ],
    },

    // FAQ — questions from the wireframe brief
    faq: {
      heading: "Frequently asked questions",
      intro: "Short answers to what guests ask us most before they book.",
      items: [
        { q: "I've never exercised before. Will this suit me?", a: "Yes. Every practice is adapted for any fitness level — the only thing that matters is your willingness to show up. Everything else scales." },
        { q: "Can I come with my partner?",                     a: "Yes. A private room for couples is available. The programme is shared, with personal adjustments where you want them." },
        { q: "What will I take home after the retreat?",         a: "A personal nutrition and movement plan, a 30-day habit plan, access to a private support chat for thirty days, and the new habits themselves." },
        { q: "Do I need a visa?",                                a: "Visa requirements depend on your nationality. We send full information and instructions after booking — guests from all over the world are welcome." },
        { q: "What is the fitness floor?",                        a: "Comfortable walking for twenty minutes. Every class has a gentler option. Nothing is heroic." },
      ],
    },

    closing: {
      line: "You deserve a week just for yourself.",
      sub: "Your whole life you have cared for others. Now it is time to care for your own vitality.",
      buttonLabel: "Book the retreat",
    },
  },
};
