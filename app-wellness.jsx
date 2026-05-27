/* global React */
// -----------------------------------------------------------------------------
// Wellness layout — Parents Vitality v3 (Kamalaya structure + SHA grid).
// Self-buyer 55+ positioning. Used when variant has kind: "wellness".
// Reuses Nav, Apply, Footer, PhotoPlaceholder, Reveal, Icon from window.
// -----------------------------------------------------------------------------

function WellnessHero({ v }) {
  const primaryLabel = v.heroPrimaryCtaLabel || "Request an invitation";
  const secondaryLabel = v.heroSecondaryCtaLabel || "See the seven-day concept";
  const secondaryHref = v.heroSecondaryHref || "#concept";
  return (
    <header id="top" className="relative w-full" style={{ height: "min(92vh, 920px)" }}>
      <window.PhotoPlaceholder
        palette={v.heroPalette}
        caption={v.heroCaption}
        alt={v.heroAlt}
        image={v.heroImage}
        className="absolute inset-0"
        captionPosition="tl"
      />
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 pt-28 pb-16 flex flex-col justify-end">
        <div className="max-w-[920px] text-white">
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase opacity-85 mb-6">
            {v.audience} · {v.audienceNote}
          </div>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.025em]">
            {v.h1}
          </h1>
          <p className="mt-7 max-w-[680px] text-[16px] md:text-[17px] leading-[1.55] text-white/90">
            {v.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/85">
            {v.trustStrip.map((t, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="opacity-50">·</span>}
                <span>{t}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#apply" className="btn-primary-on-dark">{primaryLabel}</a>
            <a href={secondaryHref} className="btn-ghost-on-dark group">
              <span>{secondaryLabel}</span>
              <window.Icon.Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// 01 · Intro 3-col strip (Kamalaya goals / for / team)
// -----------------------------------------------------------------------------
function WellnessIntro3Col({ v }) {
  const i = v.intro3Col;
  if (!i) return null;
  const cols = i.cols || [];
  return (
    <section id="intro" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36">
        {i.eyebrow && (
          <window.Reveal>
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-12">
              {i.eyebrow}
            </div>
          </window.Reveal>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 border-t border-[var(--ink)]/15 pt-12 md:pt-16">
          {cols.map((c, idx) => (
            <window.Reveal key={c.title} delay={idx * 60}>
              <div>
                <h3 className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--ink)]/55 mb-6">
                  {c.title}
                </h3>
                <ul className="space-y-3">
                  {(c.items || []).map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 font-body text-[15px] leading-[1.55] text-[var(--ink)]/90"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
                      >
                        +
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </window.Reveal>
          ))}
        </div>
        {i.footnote && (
          <window.Reveal delay={180}>
            <p className="mt-14 font-body italic text-[14px] leading-[1.65] text-[var(--ink)]/65 max-w-[820px]">
              {i.footnote}
            </p>
          </window.Reveal>
        )}
        {i.cta && (
          <window.Reveal delay={240}>
            <div className="mt-12">
              <a href={i.cta.href || "#apply"} className="btn-primary">
                {i.cta.label}
              </a>
            </div>
          </window.Reveal>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 02 · Principles — premise paragraph + three principle cards
// -----------------------------------------------------------------------------
function WellnessPrinciples({ v }) {
  const p = v.principles;
  if (!p) return null;
  const items = p.items || [];
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-5">
            <window.Reveal>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-6">
                {p.eyebrow}
              </div>
            </window.Reveal>
            <window.Reveal delay={60}>
              <h2
                className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)]"
                style={{ textWrap: "balance" }}
              >
                {p.headline}
              </h2>
            </window.Reveal>
          </div>
          <window.Reveal delay={120} className="col-span-12 md:col-span-7 md:pt-6">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink)]/85 max-w-[640px]">
              {p.body}
            </p>
          </window.Reveal>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, idx) => (
            <window.Reveal key={it.title} delay={idx * 60}>
              <article className="vessel-card h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/50 mb-6">
                  {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </div>
                <h3 className="font-display text-[24px] md:text-[26px] tracking-[-0.015em] text-[var(--green)] leading-[1.2]">
                  {it.title}
                </h3>
                <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85">
                  {it.body}
                </p>
              </article>
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 03 · Gallery — 6 photos in 3×2 grid (Kamalaya visual pause)
// -----------------------------------------------------------------------------
function WellnessGallery({ v }) {
  const g = v.gallery;
  if (!g) return null;
  const images = g.images || [];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-24 md:py-32">
        {g.eyebrow && (
          <window.Reveal>
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-10">
              {g.eyebrow}
            </div>
          </window.Reveal>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, idx) => (
            <window.Reveal key={img.cap + idx} delay={(idx % 3) * 60}>
              <window.PhotoPlaceholder
                palette={img.palette}
                caption={img.cap}
                alt={img.alt || img.cap}
                image={img.image}
                className="aspect-square rounded-[20px]"
              />
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 04 · Three pillars (Body / Sleep & Energy / Mind) — SHA-style clean H3 grid
// -----------------------------------------------------------------------------
function WellnessConcept({ v }) {
  const pillars = v.pillars || [];
  const pb = v.pillarsBlock || {};
  return (
    <section id="concept" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-24">
          <window.Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                {pb.eyebrow || "Three pillars"}
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
                {pb.headline || "Three quiet inputs."}
              </h2>
            </div>
          </window.Reveal>
          {pb.intro && (
            <window.Reveal delay={60}>
              <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
                {pb.intro}
              </p>
            </window.Reveal>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <window.Reveal key={p.title} delay={(i % 3) * 60}>
              <article className="vessel-card !p-0 overflow-hidden h-full flex flex-col">
                {p.image && (
                  <window.PhotoPlaceholder
                    palette={p.imagePalette}
                    caption={p.imageCaption}
                    alt={p.imageAlt}
                    image={p.image}
                    className="aspect-[4/3]"
                  />
                )}
                <div className="p-7 md:p-9 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-display text-[34px] md:text-[40px] tracking-[-0.02em] text-[var(--green)]">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55">
                      {String(i + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
                    </span>
                  </div>
                  {p.cadence && (
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                      {p.cadence}
                    </div>
                  )}
                  <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85">
                    {p.body}
                  </p>
                  <ul className="mt-6 border-t border-[var(--ink)]/15">
                    {p.items.map((l) => (
                      <li
                        key={l}
                        className="border-b border-[var(--ink)]/15 py-3 flex items-center justify-between font-body text-[13px] text-[var(--ink)]/80"
                      >
                        <span>{l}</span>
                        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/45">
                          included
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 05 · Your 7-day programme — SHA-style 3-column services grid
// -----------------------------------------------------------------------------
function WellnessProgram({ v }) {
  const pr = v.program;
  if (!pr) return null;
  const columns = pr.columns || [];
  return (
    <section id="programme" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20">
          <window.Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                {pr.eyebrow}
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
                {pr.headline}
              </h2>
            </div>
          </window.Reveal>
          {pr.intro && (
            <window.Reveal delay={60}>
              <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[400px]">
                {pr.intro}
              </p>
            </window.Reveal>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--ink)]/15">
          {columns.map((c, idx) => (
            <window.Reveal key={c.title} delay={idx * 60} className={idx > 0 ? "md:border-l md:border-[var(--ink)]/15" : ""}>
              <div className="py-10 md:py-12 md:px-8 lg:px-10">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-2">
                  {String(idx + 1).padStart(2, "0")} / {String(columns.length).padStart(2, "0")}
                </div>
                <h3 className="font-display text-[26px] md:text-[30px] tracking-[-0.015em] text-[var(--green)] leading-[1.2]">
                  {c.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {(c.items || []).map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 font-body text-[14.5px] leading-[1.55] text-[var(--ink)]/85"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
                      >
                        +
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 06 · How you'll feel on day 8 — image+text editorial split
// -----------------------------------------------------------------------------
function WellnessDay8({ v }) {
  const d = v.day8;
  if (!d) return null;
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <window.Reveal className="col-span-12 md:col-span-6">
            <window.PhotoPlaceholder
              palette={d.imagePalette}
              caption={d.imageCaption}
              alt={d.imageAlt}
              image={d.image}
              className="aspect-[4/5] rounded-[24px]"
            />
          </window.Reveal>
          <div className="col-span-12 md:col-span-6 md:pl-6">
            <window.Reveal delay={60}>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-6">
                {d.eyebrow}
              </div>
            </window.Reveal>
            <window.Reveal delay={120}>
              <h2
                className="font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)]"
                style={{ textWrap: "balance" }}
              >
                {d.headline}
              </h2>
            </window.Reveal>
            <window.Reveal delay={180}>
              <p className="mt-8 font-body text-[16px] leading-[1.7] text-[var(--ink)]/85 max-w-[560px]">
                {d.body}
              </p>
            </window.Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 07 · Where the retreat takes place — Nuanu credentials + nearby + 3 photos
// -----------------------------------------------------------------------------
function WellnessPlace({ v }) {
  const p = v.place;
  if (!p) return null;
  const metrics = p.metrics || [];
  const nearby = p.nearby;
  const images = p.images || [];
  return (
    <section id="place" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <window.Reveal>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                {p.eyebrow}
              </div>
            </window.Reveal>
            <window.Reveal delay={60}>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[480px]">
                {p.headline}
              </h2>
            </window.Reveal>
          </div>
          <window.Reveal delay={120} className="col-span-12 md:col-span-7 md:pt-4">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink)]/85 max-w-[640px]">
              {p.intro}
            </p>
          </window.Reveal>
        </div>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-b border-[var(--ink)]/15 py-12 md:py-16 mb-16 md:mb-20">
            {metrics.map((m, idx) => (
              <window.Reveal key={m.label} delay={idx * 60}>
                <div>
                  <div className="font-display text-[44px] md:text-[56px] lg:text-[64px] leading-none tracking-[-0.03em] text-[var(--green)]">
                    {m.value}
                  </div>
                  <p className="mt-4 font-body text-[13px] leading-[1.55] text-[var(--ink)]/75 max-w-[220px]">
                    {m.label}
                  </p>
                </div>
              </window.Reveal>
            ))}
          </div>
        )}

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {images.length > 0 && (
            <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-3 md:gap-4">
              {images.map((img, idx) => (
                <window.Reveal key={img.cap + idx} delay={idx * 60}>
                  <window.PhotoPlaceholder
                    palette={img.palette}
                    caption={img.cap}
                    alt={img.alt || img.cap}
                    image={img.image}
                    className="aspect-[4/5] rounded-[18px]"
                  />
                </window.Reveal>
              ))}
            </div>
          )}
          {nearby && (
            <window.Reveal delay={120} className="col-span-12 md:col-span-4 md:pl-6 md:border-l md:border-[var(--ink)]/15">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-5">
                {nearby.title || "Nearby"}
              </div>
              <ul className="space-y-3">
                {(nearby.items || []).map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
                    >
                      +
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </window.Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Investment — single price card, optional inline CTA
// -----------------------------------------------------------------------------
function WellnessInvestment({ v }) {
  const inv = v.investment || {};
  const included = inv.included || [];
  const notIncluded = inv.notIncluded || [];
  return (
    <section id="investment" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <window.Reveal>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
            {inv.eyebrow || "Price and participation"}
          </div>
        </window.Reveal>
        <window.Reveal delay={60}>
          <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
            {inv.headline || "One price. All inclusive. No pressure."}
          </h2>
        </window.Reveal>
        {inv.note && (
          <window.Reveal delay={90}>
            <p className="mt-6 font-body text-[15px] leading-[1.65] text-[var(--ink)]/75 max-w-[680px]">
              {inv.note}
            </p>
          </window.Reveal>
        )}
        <window.Reveal delay={120}>
          <div className="mt-12 vessel-card bg-white !p-8 md:!p-12 lg:!p-16">
            <div className="grid grid-cols-12 gap-x-10 gap-y-10">
              <div className="col-span-12 md:col-span-4 md:border-r md:border-[var(--ink)]/15 md:pr-10">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                  {inv.priceUnit || "Per guest · seven days"}
                </div>
                <div className="mt-3 font-display text-[52px] md:text-[64px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]">
                  {inv.price}
                </div>
                <p className="mt-5 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80">
                  {inv.duration}
                </p>
                <div className="mt-8 pt-8 border-t border-[var(--ink)]/15">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60 mb-2">
                    Cohort size
                  </div>
                  <div className="font-display text-[22px] tracking-[-0.01em] text-[var(--ink)]">
                    {inv.cohort}
                  </div>
                </div>
                {inv.ctaLabel && (
                  <div className="mt-10">
                    <a href="#apply" className="btn-primary">{inv.ctaLabel}</a>
                  </div>
                )}
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--green)] mb-5">
                  What is included
                </div>
                <ul className="space-y-3">
                  {included.map((l) => (
                    <li
                      key={l}
                      className="flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
                      >
                        +
                      </span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-5">
                  What is not included
                </div>
                <ul className="space-y-3">
                  {notIncluded.map((l) => (
                    <li
                      key={l}
                      className="flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/70"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tracking-[0.22em] text-[var(--ink)]/45 mt-[3px]"
                      >
                        −
                      </span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </window.Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// FAQ — accordion, first open by default
// -----------------------------------------------------------------------------
function WellnessFAQ({ v }) {
  const f = v.faq;
  if (!f) return null;
  const items = f.items || [];
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <window.Reveal>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                {f.heading || "Questions"}
              </div>
            </window.Reveal>
            <window.Reveal delay={60}>
              <h2 className="font-display text-[34px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[400px]">
                Short answers to what guests ask before they book.
              </h2>
            </window.Reveal>
            {f.intro && (
              <window.Reveal delay={120}>
                <p className="mt-6 font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[380px]">
                  {f.intro}
                </p>
              </window.Reveal>
            )}
          </div>
          <window.Reveal delay={120} className="col-span-12 md:col-span-8">
            <ul className="border-t border-[var(--ink)]/15">
              {items.map((it, i) => {
                const open = openIdx === i;
                return (
                  <li key={it.q} className="border-b border-[var(--ink)]/15">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="w-full text-left py-6 md:py-7 flex items-baseline justify-between gap-6 group"
                    >
                      <span className="font-display text-[20px] md:text-[24px] tracking-[-0.015em] text-[var(--ink)] leading-[1.25]">
                        {it.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[14px] text-[var(--green)] transition-transform"
                        style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: open ? 400 : 0,
                        opacity: open ? 1 : 0,
                        overflow: "hidden",
                        transition: "max-height 280ms ease-out, opacity 200ms ease-out",
                      }}
                    >
                      <p className="pb-7 md:pb-8 font-body text-[15px] leading-[1.65] text-[var(--ink)]/80 max-w-[640px]">
                        {it.a}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </window.Reveal>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Closing — quote + final CTA before Apply form
// -----------------------------------------------------------------------------
function WellnessClosing({ v }) {
  const c = v.closing;
  if (!c) return null;
  return (
    <section className="bg-[var(--ink)] text-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <window.Reveal>
          <p
            className="font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-[-0.025em] max-w-[1100px]"
            style={{ textWrap: "balance" }}
          >
            {c.line}
          </p>
        </window.Reveal>
        {c.sub && (
          <window.Reveal delay={80}>
            <p className="mt-8 font-body text-[18px] md:text-[20px] leading-[1.6] text-[var(--warm)]/80 max-w-[760px]">
              {c.sub}
            </p>
          </window.Reveal>
        )}
        <window.Reveal delay={160}>
          <div className="mt-12">
            <a href="#apply" className="btn-primary-on-dark">
              {c.buttonLabel || "Request an invitation"}
            </a>
          </div>
        </window.Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Deprecated v2 components — kept in the bundle so a rollback can wire them
// back without restoring code. Not rendered by WellnessApp.
// -----------------------------------------------------------------------------
function WellnessPremise({ v }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-44">
        <p className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-[1200px]" style={{ textWrap: "balance" }}>
          {v.premise}
        </p>
      </div>
    </section>
  );
}
function WellnessOutcomes() { return null; }
function WellnessMidCta() { return null; }
function WellnessDay() { return null; }
function WellnessWhyNuanu() { return null; }

// -----------------------------------------------------------------------------
// App composition — Kamalaya section order, SHA grid feel
// -----------------------------------------------------------------------------
function WellnessApp({ v }) {
  return (
    <div className="bg-white text-[var(--ink)]">
      <window.Nav />
      <WellnessHero v={v} />
      <WellnessIntro3Col v={v} />
      <WellnessPrinciples v={v} />
      <WellnessGallery v={v} />
      <WellnessConcept v={v} />
      <WellnessProgram v={v} />
      <WellnessDay8 v={v} />
      <WellnessPlace v={v} />
      <WellnessInvestment v={v} />
      <WellnessFAQ v={v} />
      <WellnessClosing v={v} />
      <window.Apply v={v} />
      <window.Footer />
    </div>
  );
}

Object.assign(window, {
  WellnessApp,
  WellnessHero,
  WellnessIntro3Col,
  WellnessPrinciples,
  WellnessGallery,
  WellnessConcept,
  WellnessProgram,
  WellnessDay8,
  WellnessPlace,
  WellnessInvestment,
  WellnessFAQ,
  WellnessClosing,
  WellnessPremise,
  WellnessOutcomes,
  WellnessMidCta,
  WellnessDay,
  WellnessWhyNuanu,
});
