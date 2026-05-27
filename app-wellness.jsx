/* global React */
// -----------------------------------------------------------------------------
// Wellness layout — Parents Vitality v4 (strict per deepseek wireframe 2026-05-27).
// Kamalaya format: full-width hero image on top, text below. Self-buyer 55+
// positioning. Used when variant has kind: "wellness".
// -----------------------------------------------------------------------------

const MAILTO = "mailto:hello@parentsretreat.com";

// -----------------------------------------------------------------------------
// Hero — full-width image on top, text section below. No text overlay.
// -----------------------------------------------------------------------------
function WellnessHero({ v }) {
  const primaryLabel = v.heroPrimaryCtaLabel || "Learn more";
  const primaryHref = v.heroPrimaryCtaHref || "#whofor";
  return (
    <header id="top" className="w-full bg-white">
      <window.PhotoPlaceholder
        palette={v.heroPalette}
        caption={v.heroCaption}
        alt={v.heroAlt}
        image={v.heroImage}
        className="w-full aspect-[16/9] md:aspect-[21/9] rounded-b-[28px] md:rounded-b-[40px]"
        captionPosition="bl"
      />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28 text-center md:text-left">
        <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--ink)]/55 mb-6">
          {v.tag || v.audience}
        </div>
        <h1 className="font-display text-[44px] md:text-[68px] lg:text-[84px] leading-[1.02] tracking-[-0.025em] text-[var(--ink)]">
          {v.h1}
        </h1>
        {v.sub && (
          <p className="mt-8 font-body text-[18px] md:text-[20px] leading-[1.55] text-[var(--ink)]/75 max-w-[680px] md:max-w-[760px] mx-auto md:mx-0">
            {v.sub}
          </p>
        )}
        <div className="mt-12">
          <a href={primaryHref} className="btn-primary">{primaryLabel}</a>
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// Screen 2 — Who this is for (checklist + footnote)
// -----------------------------------------------------------------------------
function WellnessWhoFor({ v }) {
  const w = v.whoFor;
  if (!w) return null;
  return (
    <section id="whofor" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {w.headline}
          </h2>
        </window.Reveal>
        <ul className="mt-14 md:mt-20 space-y-5 md:space-y-6 max-w-[760px] mx-auto">
          {(w.items || []).map((line, idx) => (
            <window.Reveal as="li" key={idx} delay={idx * 50}>
              <div className="flex items-start gap-4 md:gap-5 font-body text-[17px] md:text-[19px] leading-[1.55] text-[var(--ink)]/90">
                <span aria-hidden="true" className="mt-[3px] text-[var(--green)] text-[18px] md:text-[20px]">✓</span>
                <span>{line}</span>
              </div>
            </window.Reveal>
          ))}
        </ul>
        {w.footnote && (
          <window.Reveal delay={200}>
            <p className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-[var(--ink)]/15 font-body italic text-[15px] md:text-[16px] leading-[1.65] text-[var(--ink)]/65 max-w-[820px] mx-auto text-center">
              {w.footnote}
            </p>
          </window.Reveal>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 3 — Philosophy (headline + photo + body + 3 principle cards)
// -----------------------------------------------------------------------------
function WellnessPrinciples({ v }) {
  const p = v.principles;
  if (!p) return null;
  const items = p.items || [];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center max-w-[1000px] mx-auto"
            style={{ textWrap: "balance" }}
          >
            {p.headline}
          </h2>
        </window.Reveal>
        {p.image !== undefined && (
          <window.Reveal delay={80}>
            <div className="mt-14 md:mt-20">
              <window.PhotoPlaceholder
                palette={p.imagePalette}
                caption={p.imageCaption}
                alt={p.imageAlt}
                image={p.image}
                className="w-full aspect-[16/9] md:aspect-[16/8] rounded-[24px] md:rounded-[32px]"
              />
            </div>
          </window.Reveal>
        )}
        {p.body && (
          <window.Reveal delay={160}>
            <p className="mt-14 md:mt-20 font-body text-[18px] md:text-[20px] leading-[1.7] text-[var(--ink)]/85 max-w-[820px] mx-auto text-center">
              {p.body}
            </p>
          </window.Reveal>
        )}
        {items.length > 0 && (
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {items.map((it, idx) => (
              <window.Reveal key={it.title} delay={idx * 60}>
                <article className="vessel-card h-full text-center">
                  <h3 className="font-display text-[22px] md:text-[24px] tracking-[-0.015em] text-[var(--green)] leading-[1.25]">
                    {it.title}
                  </h3>
                  {it.body && (
                    <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85">
                      {it.body}
                    </p>
                  )}
                </article>
              </window.Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 4 — Three pillars of restoration (title + 3 columns)
// -----------------------------------------------------------------------------
function WellnessConcept({ v }) {
  const pillars = v.pillars || [];
  const pb = v.pillarsBlock || {};
  return (
    <section id="pillars" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {pb.headline || "Three pillars of restoration"}
          </h2>
        </window.Reveal>
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <window.Reveal key={p.title} delay={i * 60}>
              <article className="vessel-card h-full flex flex-col">
                <h3 className="font-display text-[30px] md:text-[36px] tracking-[-0.02em] text-[var(--green)] leading-[1.15]">
                  {p.title}
                </h3>
                {p.cadence && (
                  <div className="mt-2 font-body italic text-[15px] md:text-[16px] leading-[1.5] text-[var(--ink)]/65">
                    {p.cadence}
                  </div>
                )}
                <ul className="mt-7 border-t border-[var(--ink)]/15 flex-1">
                  {(p.items || []).map((l) => (
                    <li
                      key={l}
                      className="border-b border-[var(--ink)]/15 py-3 flex items-center gap-3 font-body text-[14.5px] text-[var(--ink)]/85"
                    >
                      <span aria-hidden="true" className="text-[var(--green)] text-[14px]">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 5 — Your 7-day program (3 columns + footnote)
// -----------------------------------------------------------------------------
function WellnessProgram({ v }) {
  const pr = v.program;
  if (!pr) return null;
  const columns = pr.columns || [];
  return (
    <section id="programme" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {pr.headline}
          </h2>
        </window.Reveal>
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {columns.map((c, idx) => (
            <window.Reveal key={c.title} delay={idx * 60}>
              <article className="vessel-card h-full flex flex-col">
                <h3 className="font-display text-[26px] md:text-[30px] tracking-[-0.015em] text-[var(--green)] leading-[1.2]">
                  {c.title}
                </h3>
                <ul className="mt-7 border-t border-[var(--ink)]/15 flex-1">
                  {(c.items || []).map((l) => (
                    <li
                      key={l}
                      className="border-b border-[var(--ink)]/15 py-3 flex items-center gap-3 font-body text-[14.5px] text-[var(--ink)]/85"
                    >
                      <span aria-hidden="true" className="text-[var(--green)] text-[14px]">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </window.Reveal>
          ))}
        </div>
        {pr.footnote && (
          <window.Reveal delay={200}>
            <p className="mt-12 md:mt-16 font-body italic text-[15px] md:text-[16px] leading-[1.65] text-[var(--ink)]/65 max-w-[860px] mx-auto text-center">
              {pr.footnote}
            </p>
          </window.Reveal>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 6 — How you'll feel on day 8 (photo + 2 paragraphs)
// -----------------------------------------------------------------------------
function WellnessDay8({ v }) {
  const d = v.day8;
  if (!d) return null;
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {d.headline}
          </h2>
        </window.Reveal>
        <window.Reveal delay={80}>
          <div className="mt-14 md:mt-20">
            <window.PhotoPlaceholder
              palette={d.imagePalette}
              caption={d.imageCaption}
              alt={d.imageAlt}
              image={d.image}
              className="w-full aspect-[16/10] md:aspect-[16/9] rounded-[24px] md:rounded-[32px]"
            />
          </div>
        </window.Reveal>
        <div className="mt-14 md:mt-20 max-w-[720px] mx-auto text-center space-y-6">
          {d.body1 && (
            <window.Reveal delay={160}>
              <p className="font-body text-[18px] md:text-[20px] leading-[1.7] text-[var(--ink)]/85">
                {d.body1}
              </p>
            </window.Reveal>
          )}
          {d.body2 && (
            <window.Reveal delay={220}>
              <p className="font-body text-[18px] md:text-[20px] leading-[1.7] text-[var(--ink)]/85">
                {d.body2}
              </p>
            </window.Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 7 — Where the retreat takes place (main photo + bullets + extras)
// -----------------------------------------------------------------------------
function WellnessPlace({ v }) {
  const p = v.place;
  if (!p) return null;
  const extras = p.extraImages || [];
  return (
    <section id="place" className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {p.headline}
          </h2>
        </window.Reveal>
        {p.mainImage !== undefined && (
          <window.Reveal delay={80}>
            <div className="mt-14 md:mt-20">
              <window.PhotoPlaceholder
                palette={p.mainImagePalette}
                caption={p.mainImageCaption}
                alt={p.mainImageAlt}
                image={p.mainImage}
                className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[32px]"
              />
            </div>
          </window.Reveal>
        )}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[1100px] mx-auto">
          <window.Reveal delay={120}>
            <div>
              {p.subhead && (
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--green)] mb-5">
                  {p.subhead}
                </div>
              )}
              {p.body && (
                <p className="font-display text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.015em] text-[var(--ink)]">
                  {p.body}
                </p>
              )}
            </div>
          </window.Reveal>
          <window.Reveal delay={180}>
            <ul className="space-y-3">
              {(p.bullets || []).map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 font-body text-[15.5px] md:text-[16.5px] leading-[1.55] text-[var(--ink)]/85"
                >
                  <span aria-hidden="true" className="mt-[7px] block w-[6px] h-[6px] rounded-full bg-[var(--green)]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </window.Reveal>
        </div>
        {p.nearby && (
          <window.Reveal delay={240}>
            <p className="mt-12 md:mt-16 font-body italic text-[15px] md:text-[16px] leading-[1.65] text-[var(--ink)]/65 max-w-[1100px] mx-auto text-center">
              {p.nearby}
            </p>
          </window.Reveal>
        )}
        {extras.length > 0 && (
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {extras.map((img, idx) => (
              <window.Reveal key={img.cap + idx} delay={idx * 60}>
                <window.PhotoPlaceholder
                  palette={img.palette}
                  caption={img.cap}
                  alt={img.alt || img.cap}
                  image={img.image}
                  className="w-full aspect-[4/3] rounded-[24px]"
                />
              </window.Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 8 — Price & participation (intro + price box + CTA + note)
// -----------------------------------------------------------------------------
function WellnessInvestment({ v }) {
  const inv = v.investment || {};
  return (
    <section id="investment" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {inv.headline}
          </h2>
        </window.Reveal>
        {inv.intro && (
          <window.Reveal delay={80}>
            <p className="mt-8 font-body text-[16px] md:text-[17px] leading-[1.65] text-[var(--ink)]/80 max-w-[720px] mx-auto text-center">
              {inv.intro}
            </p>
          </window.Reveal>
        )}
        <window.Reveal delay={140}>
          <div className="mt-14 md:mt-16 vessel-card bg-white !p-12 md:!p-16 text-center">
            <div className="font-display text-[56px] md:text-[80px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]">
              {inv.price}
            </div>
            <div className="mt-3 font-body text-[15px] md:text-[17px] text-[var(--ink)]/70">
              {inv.priceUnit}
            </div>
          </div>
        </window.Reveal>
        {inv.ctaLabel && (
          <window.Reveal delay={200}>
            <div className="mt-10 md:mt-12 text-center">
              <a href={MAILTO} className="btn-primary">{inv.ctaLabel}</a>
            </div>
          </window.Reveal>
        )}
        {inv.note && (
          <window.Reveal delay={260}>
            <p className="mt-8 font-body italic text-[14.5px] md:text-[15px] leading-[1.55] text-[var(--ink)]/60 text-center max-w-[600px] mx-auto">
              {inv.note}
            </p>
          </window.Reveal>
        )}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 9 — FAQ (accordion, first item open)
// -----------------------------------------------------------------------------
function WellnessFAQ({ v }) {
  const f = v.faq;
  if (!f) return null;
  const items = f.items || [];
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <window.Reveal>
          <h2
            className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] text-center"
            style={{ textWrap: "balance" }}
          >
            {f.heading || "Frequently asked questions"}
          </h2>
        </window.Reveal>
        <ul className="mt-14 md:mt-20 border-t border-[var(--ink)]/15">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <li key={it.q} className="border-b border-[var(--ink)]/15">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full text-left py-6 md:py-7 flex items-baseline justify-between gap-6"
                >
                  <span className="font-display text-[20px] md:text-[24px] tracking-[-0.015em] text-[var(--ink)] leading-[1.3]">
                    {it.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[18px] text-[var(--green)] transition-transform"
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
                  <p className="pb-7 md:pb-8 font-body text-[15px] md:text-[16px] leading-[1.65] text-[var(--ink)]/80 max-w-[720px]">
                    {it.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Screen 10 — Final CTA
// -----------------------------------------------------------------------------
function WellnessClosing({ v }) {
  const c = v.closing;
  if (!c) return null;
  return (
    <section className="bg-[var(--ink)] text-[var(--warm)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-28 md:py-36 text-center">
        <window.Reveal>
          <h2
            className="font-display text-[40px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.025em]"
            style={{ textWrap: "balance" }}
          >
            {c.line}
          </h2>
        </window.Reveal>
        {c.sub && (
          <window.Reveal delay={80}>
            <p className="mt-8 font-body text-[17px] md:text-[19px] leading-[1.6] text-[var(--warm)]/80 max-w-[680px] mx-auto">
              {c.sub}
            </p>
          </window.Reveal>
        )}
        <window.Reveal delay={160}>
          <div className="mt-12">
            <a href={MAILTO} className="btn-primary-on-dark">
              {c.buttonLabel || "Book the retreat"}
            </a>
          </div>
        </window.Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Footer — wellness override. Uses v.footer when present.
// -----------------------------------------------------------------------------
function WellnessFooter({ v }) {
  const f = v.footer;
  if (!f) return <window.Footer />;
  return (
    <footer className="bg-[var(--ink)] text-[var(--warm)] border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[28px] tracking-tight">{f.brand || "Parents Vitality"}</span>
            </div>
            {f.tagline && (
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 max-w-[420px]">
                {f.tagline}
              </p>
            )}
          </div>
          <div className="font-mono text-[12px] tracking-[0.05em] uppercase opacity-85 space-y-2">
            {f.email && (
              <div>
                <a href={`mailto:${f.email}`} className="underline underline-offset-4 decoration-white/30 hover:decoration-white">
                  {f.email}
                </a>
              </div>
            )}
            {f.phone && <div>{f.phone}</div>}
            {f.socials && f.socials.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2">
                {f.socials.map((s) => (
                  <a key={s.label} href={s.href} className="opacity-75 hover:opacity-100">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] opacity-55">
          <span>© 2026 {f.brand || "Parents Vitality Retreat"}</span>
          {f.legalLinks && f.legalLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {f.legalLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="opacity-75 hover:opacity-100">{l.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------------
// Deprecated v2/v3 components — kept as no-ops so rollbacks are one-edit.
// -----------------------------------------------------------------------------
function WellnessPremise() { return null; }
function WellnessOutcomes() { return null; }
function WellnessMidCta() { return null; }
function WellnessDay() { return null; }
function WellnessWhyNuanu() { return null; }
function WellnessIntro3Col() { return null; }
function WellnessGallery() { return null; }

// -----------------------------------------------------------------------------
// App composition — strict per deepseek wireframe (Screens 1 → 10 + footer)
// -----------------------------------------------------------------------------
function WellnessApp({ v }) {
  return (
    <div className="bg-white text-[var(--ink)]">
      <WellnessHero v={v} />
      <WellnessWhoFor v={v} />
      <WellnessPrinciples v={v} />
      <WellnessConcept v={v} />
      <WellnessProgram v={v} />
      <WellnessDay8 v={v} />
      <WellnessPlace v={v} />
      <WellnessInvestment v={v} />
      <WellnessFAQ v={v} />
      <WellnessClosing v={v} />
      <WellnessFooter v={v} />
    </div>
  );
}

Object.assign(window, {
  WellnessApp,
  WellnessHero,
  WellnessWhoFor,
  WellnessPrinciples,
  WellnessConcept,
  WellnessProgram,
  WellnessDay8,
  WellnessPlace,
  WellnessInvestment,
  WellnessFAQ,
  WellnessClosing,
  WellnessFooter,
  WellnessPremise,
  WellnessOutcomes,
  WellnessMidCta,
  WellnessDay,
  WellnessWhyNuanu,
  WellnessIntro3Col,
  WellnessGallery,
});
