/* global React */
// -----------------------------------------------------------------------------
// Wellness layout — 7-day, no-devices, no-named-practitioners retreats.
// Used when variant has kind: "wellness" in variants.js.
// Reuses Nav, Apply, Footer, PhotoPlaceholder, Reveal, Icon from window.
// -----------------------------------------------------------------------------

function WellnessHero({ v }) {
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
            <a href="#apply" className="btn-primary-on-dark">Request an invitation</a>
            <a href="#concept" className="btn-ghost-on-dark group">
              <span>See the seven-day concept</span>
              <window.Icon.Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function WellnessPremise({ v }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-44">
        <window.Reveal>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-10">
            01 · The premise
          </div>
        </window.Reveal>
        <window.Reveal delay={60}>
          <p
            className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-[1200px]"
            style={{ textWrap: "balance" }}
          >
            {v.premise}
          </p>
        </window.Reveal>
      </div>
    </section>
  );
}

function WellnessConcept({ v }) {
  const pillars = v.pillars || [];
  return (
    <section id="concept" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-24">
          <window.Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                02 · The seven-day concept
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
                Four shapes, held across one week.
              </h2>
            </div>
          </window.Reveal>
          <window.Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              Move, rest, restore, connect. Each shape has its own tempo, and none of them
              ask anything heroic of the body.
            </p>
          </window.Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <window.Reveal key={p.title} delay={(i % 2) * 60}>
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
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                    {p.cadence}
                  </div>
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

function WellnessInvestment({ v }) {
  const inv = v.investment || {};
  const included = inv.included || [];
  const notIncluded = inv.notIncluded || [];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <window.Reveal>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
            03 · The investment
          </div>
        </window.Reveal>
        <window.Reveal delay={60}>
          <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
            One price. All-inclusive. No urgency.
          </h2>
        </window.Reveal>
        <window.Reveal delay={120}>
          <div className="mt-12 vessel-card bg-[var(--warm)] !p-8 md:!p-12 lg:!p-16">
            <div className="grid grid-cols-12 gap-x-10 gap-y-10">
              <div className="col-span-12 md:col-span-4 md:border-r md:border-[var(--ink)]/15 md:pr-10">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                  {inv.priceUnit || "Per guest · seven days"}
                </div>
                <div className="mt-3 font-display text-[44px] md:text-[56px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]">
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

function WellnessApp({ v }) {
  return (
    <div className="bg-white text-[var(--ink)]">
      <window.Nav />
      <WellnessHero v={v} />
      <WellnessPremise v={v} />
      <WellnessConcept v={v} />
      <WellnessInvestment v={v} />
      <window.Apply v={v} />
      <window.Footer />
    </div>
  );
}

Object.assign(window, { WellnessApp, WellnessHero, WellnessPremise, WellnessConcept, WellnessInvestment });
