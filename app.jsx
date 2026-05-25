/* global React, ReactDOM */

const PATH_TO_VARIANT = {
  "/": "master",
  "/healthspan": "master",
  "/unplug": "unplug",
  "/reset": "reset",
  "/moms-reset": "moms_reset",
  "/work-well": "work_well",
  "/parents": "parents",
};
const __path = (typeof window !== "undefined" ? window.location.pathname : "/").replace(/\/$/, "") || "/";
const __host = typeof window !== "undefined" ? window.location.hostname : "";
const __isDev = __host === "localhost" || __host === "127.0.0.1" || /\.vercel\.app$/.test(__host) || (typeof window !== "undefined" && window.location.search.includes("dev=1"));
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": PATH_TO_VARIANT[__path] || "master"
}/*EDITMODE-END*/;

function App() {
  const variants = window.NUANU_VARIANTS;
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const v = variants[tweaks.variant] || variants.master;

  const tweaksPanel = __isDev && (
    <window.TweaksPanel>
      <window.TweakSection label="Audience variant">
        <window.TweakSelect
          label="Variant"
          value={tweaks.variant}
          onChange={(val) => setTweak("variant", val)}
          options={[
            { label: "Master · Healthspan",   value: "master" },
            { label: "B · Unplug",            value: "unplug" },
            { label: "C · Reset",             value: "reset" },
            { label: "D · Mom's Reset",       value: "moms_reset" },
            { label: "E · Work Well",         value: "work_well" },
            { label: "F · Parents Vitality",  value: "parents" },
          ]}
        />
        <div style={{ marginTop: 8, padding: "10px 0 0", borderTop: "1px solid rgba(41,38,27,0.12)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 }}>
            Audience
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)", marginBottom: 10 }}>
            {v.audienceNote}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 }}>
            Hook
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)", marginBottom: 10 }}>
            {v.hook}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 }}>
            Price band
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)" }}>
            {v.priceBand}
          </div>
        </div>
      </window.TweakSection>
    </window.TweaksPanel>
  );

  if (v.kind === "wellness") {
    return (
      <React.Fragment>
        <window.WellnessApp v={v} />
        {tweaksPanel}
      </React.Fragment>
    );
  }

  return (
    <div className="bg-white text-[var(--ink)]">
      <Nav />
      <Hero v={v} />
      <Premise v={v} />
      <Arc />
      <Biomarkers />
      <TakeHome />
      <DayInFourteen />
      <Team />
      <Investment v={v} />
      <Apply v={v} />
      <Footer />

      {tweaksPanel}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
