/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

// -----------------------------------------------------------------------------
// Photographic placeholder. Warm-toned gradient from the variant's palette,
// a faint diagonal stripe overlay (so it reads as a placeholder, not a "design"),
// and a monospaced caption in the corner describing the intended shot.
// -----------------------------------------------------------------------------
function PhotoPlaceholder({ palette, caption, alt, image, className = "", captionPosition = "bl", showCaption = true }) {
  const [a, b, c, d] = palette || ["#2c382c", "#5b6049", "#a18960", "#dec19a"];
  const gradient = `linear-gradient(160deg, ${a} 0%, ${b} 35%, ${c} 70%, ${d} 100%)`;
  const stripes = `repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 14px)`;
  const positions = {
    bl: "left-6 bottom-6",
    br: "right-6 bottom-6",
    tl: "left-6 top-6",
  };
  const isAbsolute = /\babsolute\b/.test(className);
  const background = image
    ? `url("${image}")`
    : `${stripes}, ${gradient}`;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden ${className}`}
      style={{
        position: isAbsolute ? "absolute" : "relative",
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: image ? "normal" : "overlay, normal",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)" }}
      />
      {showCaption && !image && (
        <div className={`absolute ${positions[captionPosition]} z-10`}>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70">
            {caption}
          </div>
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Section reveal: 200ms ease-out fade-up on scroll, once.
// -----------------------------------------------------------------------------
function Reveal({ children, className = "", delay = 0, as: As = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.unobserve(node); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 200ms ease-out ${delay}ms, transform 200ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </As>
  );
}

// -----------------------------------------------------------------------------
// Line icons — 24px grid, 2px stroke, currentColor.
// -----------------------------------------------------------------------------
const Icon = {
  Diagnose: (p) => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 3v6a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3" />
      <path d="M9 13v3a4 4 0 0 0 4 4h2" />
      <circle cx="17" cy="18" r="2.4" />
    </svg>
  ),
  Practice: (p) => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18M3 12h18" />
    </svg>
  ),
  Restore: (p) => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 18c4 0 4-4 8-4s4 4 8 4" />
      <path d="M3 13c4 0 4-4 8-4s4 4 8 4" />
      <path d="M12 4v2" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

// -----------------------------------------------------------------------------
// Navigation. Translucent over hero, opaque after scroll.
// -----------------------------------------------------------------------------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className="fixed inset-x-0 top-0 z-40"
      style={{
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "saturate(120%) blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(29,43,41,0.08)" : "1px solid transparent",
        transition: "background 200ms ease-out, border-color 200ms ease-out",
        color: scrolled ? "var(--ink)" : "#fff",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-[22px] tracking-tight">nuanu</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Experience</span>
        </a>
        <a
          href="#apply"
          className="cta-link group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase"
        >
          <span>Request an invitation</span>
          <Icon.Arrow className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}

// -----------------------------------------------------------------------------
// Hero. Full-bleed photo placeholder + overlay text bottom-left.
// -----------------------------------------------------------------------------
function Hero({ v }) {
  return (
    <header id="top" className="relative w-full" style={{ height: "min(92vh, 920px)" }}>
      <PhotoPlaceholder
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
            {v.audience} programme · {v.audienceNote}
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
            <a href="#arc" className="btn-ghost-on-dark group">
              <span>See the fourteen-day arc</span>
              <Icon.Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// Premise — single editorial paragraph.
// -----------------------------------------------------------------------------
function Premise({ v }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-44">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-10">
            01 · The premise
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-[1200px]" style={{ textWrap: "balance" }}>
            Most wellness fortnights leave you with a photograph. Ours leaves you with a panel.
            For fourteen days you sit inside a clinical longevity programme — diagnosed, practised
            and restored — and you go home with the numbers to keep going.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 14-day arc — 3 columns: Diagnose · Practice · Restore.
// -----------------------------------------------------------------------------
function Arc() {
  const cards = [
    {
      idx: "01",
      icon: <Icon.Diagnose />,
      title: "Diagnose",
      days: "Days 1 — 3",
      body: "A sixty-marker blood panel, osteopathic assessment, nutrition consult and biomarker setup. You arrive a person; you leave the first three days a baseline.",
      list: ["Sixty-marker blood panel", "Osteopathic assessment", "Nutrition consult", "WHOOP + Lingo CGM fitted"],
    },
    {
      idx: "02",
      icon: <Icon.Practice />,
      title: "Practice",
      days: "Days 4 — 11",
      body: "Twenty-six guided group sessions across yoga, qi gong, breath, strength, sound and meditation. Held at human pace. Held by people who have done this for decades.",
      list: ["26 group sessions", "Daily strength + mobility", "Breath and qi gong", "Sound and meditation"],
    },
    {
      idx: "03",
      icon: <Icon.Restore />,
      title: "Restore",
      days: "Days 12 — 14",
      body: "Lumeira spa rituals, a daily villa massage and eight cross-campus activations across the forty-four-hectare creative city. Your nervous system reorganises around the slower tempo.",
      list: ["Daily villa massage", "Lumeira spa rituals", "8 cross-campus activations", "Final-day readout"],
    },
  ];
  return (
    <section id="arc" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-24">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                02 · The fourteen-day arc
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]">
                A single shape, held across two weeks.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              Diagnose, practise, restore. Each phase has a tempo, a clinical owner, and a measurable
              handover into the next. You are never adrift.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="vessel-card h-full">
                <div className="flex items-start justify-between mb-12">
                  <div className="text-[var(--green)]">{c.icon}</div>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55">
                    {c.idx} / 03
                  </span>
                </div>
                <h3 className="font-display text-[34px] md:text-[40px] tracking-[-0.02em] text-[var(--green)]">
                  {c.title}
                </h3>
                <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                  {c.days}
                </div>
                <p className="mt-6 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85">
                  {c.body}
                </p>
                <ul className="mt-8 border-t border-[var(--ink)]/15">
                  {c.list.map((l) => (
                    <li key={l} className="border-b border-[var(--ink)]/15 py-3 flex items-center justify-between font-body text-[13px] text-[var(--ink)]/80">
                      <span>{l}</span>
                      <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/45">included</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Biomarker outcomes — 4 metrics, before/after delta bars.
// Clinical numbers, editorial typography. Sunset accents only on deltas.
// -----------------------------------------------------------------------------
function Biomarkers() {
  // direction "up" means higher is better; "down" means lower is better.
  const metrics = [
    { label: "HRV (overnight, ms)",    before: 42,  after: 58,  unit: "ms",    direction: "up",   color: "var(--sun-3)" },
    { label: "VO2max (ml/kg/min)",      before: 32.4,after: 36.1,unit: "",      direction: "up",   color: "var(--sun-2)" },
    { label: "DunedinPACE",             before: 1.05,after: 0.96,unit: "",      direction: "down", color: "var(--sun-1)" },
    { label: "Fasting glucose (mg/dL)", before: 102, after: 88,  unit: "mg/dL", direction: "down", color: "var(--sun-2)" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                03 · Cohort outcomes
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
                Four numbers your future self will recognise.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              Cohort medians from prior intakes, published quarterly. Individual outcomes vary;
              every guest leaves with their own panel and a coach-led readout.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {metrics.map((m, i) => {
            const delta = m.after - m.before;
            const better = (m.direction === "up" && delta > 0) || (m.direction === "down" && delta < 0);
            const pct = Math.abs(delta / m.before) * 100;
            // Map "improvement" to a 0..1 bar fill. Cap visualization at ~30% so big jumps don't dominate.
            const fill = Math.min(1, pct / 30);
            const formatNum = (n) => (Number.isInteger(n) ? n.toString() : n.toFixed(2).replace(/\.?0+$/, ""));
            return (
              <Reveal key={m.label} delay={i * 60}>
                <div className="flex flex-col h-full">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 pb-3 border-b border-[var(--ink)]/15">
                    {m.label}
                  </div>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-display text-[56px] md:text-[64px] tracking-[-0.03em] text-[var(--green)] leading-none">
                      {formatNum(m.after)}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55">
                      {m.unit || ""}
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span
                      className="font-mono text-[11px] tracking-[0.22em] uppercase"
                      style={{ color: better ? m.color : "var(--ink)" }}
                    >
                      {delta > 0 ? "+" : "−"}{formatNum(Math.abs(delta))} ({pct.toFixed(1)}%)
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/45">
                      from {formatNum(m.before)}
                    </span>
                  </div>
                  <div className="mt-6 h-[3px] w-full bg-[var(--ink)]/12 relative">
                    <Bar fill={fill} color={m.color} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mt-16 font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--ink)]/55">
            Cohort medians, published quarterly · n = 47 across three intakes
          </p>
        </Reveal>
      </div>
    </section>
  );
}
function Bar({ fill, color }) {
  const ref = useRef(null);
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setGrown(true); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 h-full"
      style={{
        width: grown ? `${fill * 100}%` : "0%",
        background: color,
        transition: "width 700ms cubic-bezier(0.2,0.7,0.2,1)",
      }}
    />
  );
}

// Object.assign(window, ...) at end so other babel scripts can find these.
Object.assign(window, { PhotoPlaceholder, Reveal, Icon, Nav, Hero, Premise, Arc, Biomarkers });
