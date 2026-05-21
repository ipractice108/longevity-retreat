/* global React */
const { useState: useState2, useEffect: useEffect2 } = React;

// -----------------------------------------------------------------------------
// What you take home — kit grid in rounded vessels.
// -----------------------------------------------------------------------------
function TakeHome() {
  const items = [
    { name: "WHOOP 4.0", caption: "Continuous strain, recovery and sleep — yours after day three.", palette: ["#1f2a30","#3f5764","#84a0a8","#c5d2d3"], cap: "kit · whoop band on linen", image: "images/kit-whoop.png" },
    { name: "Lingo CGM", caption: "Two weeks of continuous glucose. You will eat the same lunch twice and see two different curves.", palette: ["#2e2620","#6a513c","#b48b62","#ecd5b1"], cap: "kit · CGM patch + applicator", image: "images/kit-cgm.png" },
    { name: "At-home blood kit", caption: "A second blood draw, ninety days out, mailed from your kitchen. The panel closes the loop.", palette: ["#1e2a25","#3a5648","#7c9482","#cdd9c8"], cap: "kit · blood draw box · linen cloth", image: "images/kit-bloodkit.png" },
    { name: "DunedinPACE", caption: "Your epigenetic rate of ageing. We rerun it on the at-home kit so the number is comparable.", palette: ["#2a1f17","#6f4f33","#b0875a","#e6ceaa"], cap: "kit · saliva tube + booklet", image: "images/kit-dunedin.png" },
    { name: "Retreat journal", caption: "Hand-bound. Daily prompts paired with your own panel. The only artefact that leaves with you.", palette: ["#28221b","#574635","#a8855e","#e7d5b5"], cap: "kit · journal · pencil · ribbon", image: "images/kit-journal.png" },
    { name: "Final readout", caption: "A printed dossier of your fourteen days, delivered to your villa the evening before you fly.", palette: ["#1d2b29","#345049","#7a948a","#d3d6cf"], cap: "kit · printed dossier on table", image: "images/kit-readout.png" },
  ];
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                04 · What you take home
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]">
                A small box of tools, and a number you can keep watching.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              Six items leave Bali with you. Together they keep your panel alive for ninety days
              after the cohort closes.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 60}>
              <article className="vessel-card !p-0 overflow-hidden h-full flex flex-col">
                <PhotoPlaceholder
                  palette={it.palette}
                  caption={it.cap}
                  alt={`Photograph of ${it.name}: ${it.caption}`}
                  image={it.image}
                  className="aspect-[5/4]"
                />
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-[24px] tracking-[-0.015em] text-[var(--ink)]">
                      {it.name}
                    </h3>
                    <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/50">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                  <p className="mt-3 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80">
                    {it.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// A day in your fourteen — single illustrative day, 6 timestamps.
// -----------------------------------------------------------------------------
function DayInFourteen() {
  const moments = [
    { time: "06:00", title: "Quiet wake",        body: "No alarm. A teak chime from the verandah. Coconut water, electrolytes and an HRV check before your feet touch the path.", palette: ["#1f2218","#3c4530","#7a8265","#c7c5a8"], cap: "06:00 · verandah · pre-dawn light · tea pot", image: "images/day-0600.png" },
    { time: "07:30", title: "Movement",          body: "Strength, mobility or qi gong in the open-air pavilion. Coach-led, never more than ten people on the mat.", palette: ["#1d2b29","#2f4a44","#6e8a82","#c3d0c8"], cap: "07:30 · pavilion · mat · coach in linen", image: "images/day-0730.png" },
    { time: "09:15", title: "Doctor",            body: "Twenty minutes with the resident MD. Yesterday's WHOOP and CGM are open on the table. A small adjustment to today.", palette: ["#241a13","#5a3f2a","#a78057","#e5cba2"], cap: "09:15 · consult room · CGM + WHOOP on table", image: "images/day-0915.png" },
    { time: "13:00", title: "Lunch & curve",     body: "A six-course tasting that doubles as a teaching meal. You watch your glucose curve while the chef walks the dish.", palette: ["#2a1f17","#6f4f33","#b08461","#ecd0a8"], cap: "13:00 · long table · plates · CGM on arm", image: "images/day-1300.png" },
    { time: "16:00", title: "Restoration",       body: "Villa massage, Lumeira float or a sound bath. Your only job is to be unreachable, and you are.", palette: ["#1e2a30","#3a5764","#7d9aa5","#d2dadd"], cap: "16:00 · spa hall · candle · linen drape", image: "images/day-1600.png" },
    { time: "20:00", title: "Cohort dinner",     body: "Ten guests, two coaches, one chef. Conversation arrives at the slower tempo it has been waiting for.", palette: ["#22180f","#4d3621","#9a754c","#e3c89b"], cap: "20:00 · long table · candles · open-air dining", image: "images/day-2000.png" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                05 · A day in your fourteen
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]">
                One illustrative day, held at human pace.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              The shape changes across the fourteen days; the tempo does not.
              You are never asked to do two difficult things in the same morning.
            </p>
          </Reveal>
        </div>
        <ol className="border-t border-[var(--ink)]/15">
          {moments.map((m, i) => (
            <Reveal key={m.time} as="li" delay={(i % 3) * 40}>
              <div className="grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-12 border-b border-[var(--ink)]/15 items-start">
                <div className="col-span-12 md:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--green)] pt-2">
                  {m.time}
                </div>
                <div className="col-span-12 md:col-span-3">
                  <PhotoPlaceholder
                    palette={m.palette}
                    caption={m.cap}
                    alt={`${m.time}: ${m.title}. ${m.body}`}
                    image={m.image}
                    className="aspect-[4/3] rounded-[18px]"
                  />
                </div>
                <div className="col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-[var(--ink)]/15">
                  <h3 className="font-display text-[28px] md:text-[34px] tracking-[-0.02em] text-[var(--ink)]">
                    {m.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.65] text-[var(--ink)]/80 max-w-[600px]">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// The team — 3 portraits.
// -----------------------------------------------------------------------------
function Team() {
  const people = [
    { name: "Dr. Anya Wirjawan",  role: "Medical director",   blurb: "Internal medicine, twenty-two years. Leads the diagnostic panel and the final readout.", palette: ["#1d2b29","#3a5048","#7e948c","#d0d8d0"], cap: "portrait · MD · clinic doorway · natural light", image: "images/team-md.png" },
    { name: "Komang Sutrisna",    role: "Head of practice",   blurb: "Yoga, qi gong and breath. Runs the daily movement schedule and the cohort dynamic.",   palette: ["#241a13","#5a3f2a","#a78057","#e5cba2"], cap: "portrait · head of practice · pavilion edge", image: "images/team-practice.png" },
    { name: "Chef Léa Marchand",  role: "Resident chef",       blurb: "Plant-forward, glucose-aware. Each dish is plated with the curve you will see at 3pm.", palette: ["#22180f","#4d3621","#9a754c","#e3c89b"], cap: "portrait · chef · kitchen pass · linen apron", image: "images/team-chef.png" },
  ];
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                06 · The team
              </div>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
                Quiet professionals, on staff. Not visiting practitioners.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]">
              Three principals lead every cohort end to end. You will see each of them daily.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article>
                <PhotoPlaceholder
                  palette={p.palette}
                  caption={p.cap}
                  alt={`Portrait of ${p.name}, ${p.role}. ${p.blurb}`}
                  image={p.image}
                  className="aspect-[4/5] rounded-[24px]"
                />
                <div className="mt-6">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                    {p.role}
                  </div>
                  <h3 className="mt-1 font-display text-[26px] md:text-[28px] tracking-[-0.015em] text-[var(--ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80 max-w-[360px]">
                    {p.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// The investment — single pricing card.
// -----------------------------------------------------------------------------
function Investment({ v }) {
  const included = [
    "Fourteen nights, private villa accommodation",
    "Sixty-marker blood panel + osteopath + nutrition consult",
    "WHOOP, Lingo CGM and at-home blood kit",
    "DunedinPACE biological-age test (baseline + 90-day)",
    "Twenty-six group practice sessions",
    "Daily villa massage, eight Lumeira spa rituals",
    "All meals, glucose-aware, prepared by the resident chef",
    "Final printed dossier and ninety-day coach check-in",
  ];
  const notIncluded = [
    "Flights to and from Denpasar (DPS)",
    "Travel insurance",
    "Specialist add-ons beyond the standard panel",
    "Companion accommodation (available, priced separately)",
    "Gratuities (genuinely optional)",
    "Anything you do not want",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
            07 · The investment
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]">
            One price band, transparent. No discounts, no urgency.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 vessel-card bg-[var(--warm)] !p-8 md:!p-12 lg:!p-16">
            <div className="grid grid-cols-12 gap-x-10 gap-y-10">
              <div className="col-span-12 md:col-span-4 md:border-r md:border-[var(--ink)]/15 md:pr-10">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60">
                  Per guest · fourteen nights
                </div>
                <div className="mt-3 font-display text-[44px] md:text-[56px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]">
                  {v.priceBand}
                </div>
                <p className="mt-5 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80">
                  The band reflects villa selection and cohort timing. Quoted on application.
                </p>
                <div className="mt-8 pt-8 border-t border-[var(--ink)]/15">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60 mb-2">
                    Cohort size
                  </div>
                  <div className="font-display text-[22px] tracking-[-0.01em] text-[var(--ink)]">
                    10 guests · application only
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--green)] mb-5">
                  What is included
                </div>
                <ul className="space-y-3">
                  {included.map((l) => (
                    <li key={l} className="flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85">
                      <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]">+</span>
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
                    <li key={l} className="flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/70">
                      <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.22em] text-[var(--ink)]/45 mt-[3px]">−</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Apply form with inline validation.
// -----------------------------------------------------------------------------
function Apply({ v }) {
  const [form, setForm] = useState2({ name: "", email: "", country: "", change: "" });
  const [touched, setTouched] = useState2({});
  const [submitted, setSubmitted] = useState2(false);

  const errors = {
    name: form.name.trim().length < 2 ? "Please share your full name." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Please enter a valid email." : "",
    country: form.country.trim().length < 2 ? "Country of residence." : "",
    change: form.change.trim().length < 12 ? "One sentence is enough — at least twelve characters." : "",
  };
  const isValid = !errors.name && !errors.email && !errors.country && !errors.change;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const show = (k) => (touched[k] || submitted) && errors[k];

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTouched({ name: true, email: true, country: true, change: true });
    if (isValid) {
      // Inline-only — no real backend in this prototype.
      setForm({ name: "", email: "", country: "", change: "" });
      setTouched({});
      setSubmitted(false);
      window.__nuanu_thankyou = true;
      const note = document.getElementById("apply-thankyou");
      if (note) {
        note.style.opacity = "1";
        clearTimeout(window.__nuanu_thankyou_t);
        window.__nuanu_thankyou_t = setTimeout(() => { note.style.opacity = "0"; }, 4000);
      }
    }
  }

  const inputClass = "w-full bg-transparent border-0 border-b border-[var(--ink)]/25 focus:border-[var(--green)] focus:outline-none py-3 font-body text-[16px] text-[var(--ink)] placeholder:text-[var(--ink)]/40 transition-colors";

  return (
    <section id="apply" className="bg-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4">
                08 · Apply
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[480px]">
                Tell us, briefly, what you are hoping to change.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 font-body text-[14px] leading-[1.65] text-[var(--ink)]/75 max-w-[420px]">
                We review applications within five working days. The October cohort accepts ten of
                approximately forty applicants. There is no waitlist gimmick — if we are not the
                right fit, we will say so quickly.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 pt-10 border-t border-[var(--ink)]/15">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-2">
                  Hook for this cohort
                </div>
                <div className="font-display text-[20px] tracking-[-0.01em] text-[var(--ink)]">
                  {v.hook}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="col-span-12 md:col-span-7">
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Field label="Full name" error={show("name")} className="col-span-2 md:col-span-1">
                <input className={inputClass} value={form.name} onChange={update("name")} onBlur={blur("name")} placeholder="Your name" autoComplete="name" />
              </Field>
              <Field label="Email" error={show("email")} className="col-span-2 md:col-span-1">
                <input type="email" className={inputClass} value={form.email} onChange={update("email")} onBlur={blur("email")} placeholder="you@domain.com" autoComplete="email" />
              </Field>
              <Field label="Country of residence" error={show("country")} className="col-span-2">
                <input className={inputClass} value={form.country} onChange={update("country")} onBlur={blur("country")} placeholder="Country" autoComplete="country-name" />
              </Field>
              <Field label="What are you hoping to change?" error={show("change")} className="col-span-2">
                <textarea rows="3" className={inputClass + " resize-none"} value={form.change} onChange={update("change")} onBlur={blur("change")} placeholder="One sentence is enough." />
              </Field>
              <div className="col-span-2 mt-8 flex flex-wrap items-center gap-6">
                <button type="submit" className="btn-primary">Request an invitation</button>
                <span id="apply-thankyou" className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--green)] transition-opacity duration-200" style={{ opacity: 0 }}>
                  Received. We will reply within five working days.
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Field({ label, error, children, className = "" }) {
  return (
    <label className={`block py-4 ${className}`}>
      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-1">
        {label}
      </span>
      {children}
      <span
        className="block mt-2 font-mono text-[10px] tracking-[0.18em] uppercase"
        style={{ color: "var(--sun-1)", minHeight: "14px", opacity: error ? 1 : 0, transition: "opacity 200ms ease-out" }}
      >
        {error || "·"}
      </span>
    </label>
  );
}

// -----------------------------------------------------------------------------
// Footer.
// -----------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--warm)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[28px] tracking-tight">nuanu</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Experience</span>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 max-w-[420px]">
              Nuanu Creative City · Jl. Pantai Cemongkak · Tabanan Regency · Bali · Indonesia
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em]">
            <li><a href="#" className="opacity-75 hover:opacity-100">Privacy</a></li>
            <li><a href="#" className="opacity-75 hover:opacity-100">Imprint</a></li>
            <li><a href="#" className="opacity-75 hover:opacity-100">Contact</a></li>
          </ul>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] opacity-55">
          <span>© 2026 Nuanu · All rights reserved</span>
          <span>Application only · Cohort of 10 · Bali, October 2026</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TakeHome, DayInFourteen, Team, Investment, Apply, Footer });
