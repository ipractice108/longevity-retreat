const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
    window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel({ title = "Tweaks", noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const hasDeckStage = React.useMemo(
    () => typeof document !== "undefined" && !!document.querySelector("deck-stage"),
    []
  );
  const [railEnabled, setRailEnabled] = React.useState(
    () => hasDeckStage && !!document.querySelector("deck-stage")?._railEnabled
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return void 0;
    const onMsg = (e) => {
      if (e.data && e.data.type === "__omelette_rail_enabled") setRailEnabled(true);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem("deck-stage.railVisible") !== "0";
    } catch (e) {
      return true;
    }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: "__deck_rail_visible", on }, "*");
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + "px";
    panel.style.bottom = offsetRef.current.y + "px";
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", clampToViewport);
      return () => window.removeEventListener("resize", clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === "__activate_edit_mode") setOpen(true);
      else if (t === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  };
  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  if (!open) return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, __TWEAKS_STYLE), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: dragRef,
      className: "twk-panel",
      "data-noncommentable": "",
      style: { right: offsetRef.current.x, bottom: offsetRef.current.y }
    },
    /* @__PURE__ */ React.createElement("div", { className: "twk-hd", onMouseDown: onDragStart }, /* @__PURE__ */ React.createElement("b", null, title), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "twk-x",
        "aria-label": "Close tweaks",
        onMouseDown: (e) => e.stopPropagation(),
        onClick: dismiss
      },
      "\u2715"
    )),
    /* @__PURE__ */ React.createElement("div", { className: "twk-body" }, children, hasDeckStage && railEnabled && !noDeckControls && /* @__PURE__ */ React.createElement(TweakSection, { label: "Deck" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Thumbnail rail", value: railVisible, onChange: toggleRail })))
  ));
}
function TweakSection({ label, children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "twk-sect" }, label), children);
}
function TweakRow({ label, value, children, inline = false }) {
  return /* @__PURE__ */ React.createElement("div", { className: inline ? "twk-row twk-row-h" : "twk-row" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label), value != null && /* @__PURE__ */ React.createElement("span", { className: "twk-val" }, value)), children);
}
function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = "", onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label, value: `${value}${unit}` }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      className: "twk-slider",
      min,
      max,
      step,
      value,
      onChange: (e) => onChange(Number(e.target.value))
    }
  ));
}
function TweakToggle({ label, value, onChange }) {
  return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "twk-toggle",
      "data-on": value ? "1" : "0",
      role: "switch",
      "aria-checked": !!value,
      onClick: () => onChange(!value)
    },
    /* @__PURE__ */ React.createElement("i", null)
  ));
}
function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = (o) => String(typeof o === "object" ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === "object" ? o.value : o) === s);
      return m === void 0 ? s : typeof m === "object" ? m.value : m;
    };
    return /* @__PURE__ */ React.createElement(
      TweakSelect,
      {
        label,
        value,
        options,
        onChange: (s) => onChange(resolve(s))
      }
    );
  }
  const opts = options.map((o) => typeof o === "object" ? o : { value: o, label: o });
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;
  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: trackRef,
      role: "radiogroup",
      onPointerDown,
      className: dragging ? "twk-seg dragging" : "twk-seg"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "twk-seg-thumb",
        style: {
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`
        }
      }
    ),
    opts.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", role: "radio", "aria-checked": o.value === value }, o.label))
  ));
}
function TweakSelect({ label, value, options, onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("select", { className: "twk-field", value, onChange: (e) => onChange(e.target.value) }, options.map((o) => {
    const v = typeof o === "object" ? o.value : o;
    const l = typeof o === "object" ? o.label : o;
    return /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l);
  })));
}
function TweakText({ label, value, placeholder, onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "twk-field",
      type: "text",
      value,
      placeholder,
      onChange: (e) => onChange(e.target.value)
    }
  ));
}
function TweakNumber({ label, value, min, max, step = 1, unit = "", onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split(".")[1] || "").length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "twk-num" }, /* @__PURE__ */ React.createElement("span", { className: "twk-num-lbl", onPointerDown: onScrubStart }, label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value,
      min,
      max,
      step,
      onChange: (e) => onChange(clamp(Number(e.target.value)))
    }
  ), unit && /* @__PURE__ */ React.createElement("span", { className: "twk-num-unit" }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace("#", "");
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, "0");
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148e3;
}
const __TwkCheck = ({ light }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
  "path",
  {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? "rgba(0,0,0,.78)" : "#fff"
  }
));
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "color",
        className: "twk-swatch",
        value,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("div", { className: "twk-chips", role: "radiogroup" }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        className: "twk-chip",
        role: "radio",
        "aria-checked": on,
        "data-on": on ? "1" : "0",
        "aria-label": colors.join(", "),
        title: colors.join(" \xB7 "),
        style: { background: hero },
        onClick: () => onChange(o)
      },
      sup.length > 0 && /* @__PURE__ */ React.createElement("span", null, sup.map((c, j) => /* @__PURE__ */ React.createElement("i", { key: j, style: { background: c } }))),
      on && /* @__PURE__ */ React.createElement(__TwkCheck, { light: __twkIsLight(hero) })
    );
  })));
}
function TweakButton({ label, onClick, secondary = false }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: secondary ? "twk-btn secondary" : "twk-btn",
      onClick
    },
    label
  );
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
const { useState, useEffect, useRef, useMemo } = React;
function PhotoPlaceholder({ palette, caption, alt, image, className = "", captionPosition = "bl", showCaption = true }) {
  const [a, b, c, d] = palette || ["#2c382c", "#5b6049", "#a18960", "#dec19a"];
  const gradient = `linear-gradient(160deg, ${a} 0%, ${b} 35%, ${c} 70%, ${d} 100%)`;
  const stripes = `repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 14px)`;
  const positions = {
    bl: "left-6 bottom-6",
    br: "right-6 bottom-6",
    tl: "left-6 top-6"
  };
  const isAbsolute = /\babsolute\b/.test(className);
  const background = image ? `url("${image}")` : `${stripes}, ${gradient}`;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "img",
      "aria-label": alt,
      className: `overflow-hidden ${className}`,
      style: {
        position: isAbsolute ? "absolute" : "relative",
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: image ? "normal" : "overlay, normal"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: { background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)" }
      }
    ),
    showCaption && !image && /* @__PURE__ */ React.createElement("div", { className: `absolute ${positions[captionPosition]} z-10` }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.18em] uppercase text-white/70" }, caption))
  );
}
function Reveal({ children, className = "", delay = 0, as: As = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ React.createElement(
    As,
    {
      ref,
      className,
      style: {
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 200ms ease-out ${delay}ms, transform 200ms ease-out ${delay}ms`
      }
    },
    children
  );
}
const Icon = {
  Diagnose: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "40", height: "40", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 3v6a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3" }), /* @__PURE__ */ React.createElement("path", { d: "M9 13v3a4 4 0 0 0 4 4h2" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "18", r: "2.4" })),
  Practice: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "40", height: "40", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18M3 12h18" })),
  Restore: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "40", height: "40", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 18c4 0 4-4 8-4s4 4 8 4" }), /* @__PURE__ */ React.createElement("path", { d: "M3 13c4 0 4-4 8-4s4 4 8 4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 4v2" })),
  Arrow: (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14M13 6l6 6-6 6" }))
};
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement(
    "nav",
    {
      className: "fixed inset-x-0 top-0 z-40",
      style: {
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "saturate(120%) blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(29,43,41,0.08)" : "1px solid transparent",
        transition: "background 200ms ease-out, border-color 200ms ease-out",
        color: scrolled ? "var(--ink)" : "#fff"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("a", { href: "#top", className: "flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-display text-[22px] tracking-tight" }, "nuanu"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] opacity-70" }, "Experience")), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#apply",
        className: "cta-link group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase"
      },
      /* @__PURE__ */ React.createElement("span", null, "Request an invitation"),
      /* @__PURE__ */ React.createElement(Icon.Arrow, { className: "transition-transform group-hover:translate-x-1" })
    ))
  );
}
function Hero({ v }) {
  return /* @__PURE__ */ React.createElement("header", { id: "top", className: "relative w-full", style: { height: "min(92vh, 920px)" } }, /* @__PURE__ */ React.createElement(
    PhotoPlaceholder,
    {
      palette: v.heroPalette,
      caption: v.heroCaption,
      alt: v.heroAlt,
      image: v.heroImage,
      className: "absolute inset-0",
      captionPosition: "tl"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 pt-28 pb-16 flex flex-col justify-end" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[920px] text-white" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase opacity-85 mb-6" }, v.audience, " programme \xB7 ", v.audienceNote), /* @__PURE__ */ React.createElement("h1", { className: "font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.025em]" }, v.h1), /* @__PURE__ */ React.createElement("p", { className: "mt-7 max-w-[680px] text-[16px] md:text-[17px] leading-[1.55] text-white/90" }, v.sub), /* @__PURE__ */ React.createElement("div", { className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/85" }, v.trustStrip.map((t, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 && /* @__PURE__ */ React.createElement("span", { className: "opacity-50" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, t)))), /* @__PURE__ */ React.createElement("div", { className: "mt-10 flex flex-wrap items-center gap-5" }, /* @__PURE__ */ React.createElement("a", { href: "#apply", className: "btn-primary-on-dark" }, "Request an invitation"), /* @__PURE__ */ React.createElement("a", { href: "#arc", className: "btn-ghost-on-dark group" }, /* @__PURE__ */ React.createElement("span", null, "See the fourteen-day arc"), /* @__PURE__ */ React.createElement(Icon.Arrow, { className: "transition-transform group-hover:translate-x-1" }))))));
}
function Premise({ v }) {
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-44" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-10" }, "01 \xB7 The premise")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-[1200px]", style: { textWrap: "balance" } }, "Most wellness fortnights leave you with a photograph. Ours leaves you with a panel. For fourteen days you sit inside a clinical longevity programme \u2014 diagnosed, practised and restored \u2014 and you go home with the numbers to keep going."))));
}
function Arc() {
  const cards = [
    {
      idx: "01",
      icon: /* @__PURE__ */ React.createElement(Icon.Diagnose, null),
      title: "Diagnose",
      days: "Days 1 \u2014 3",
      body: "A sixty-marker blood panel, osteopathic assessment, nutrition consult and biomarker setup. You arrive a person; you leave the first three days a baseline.",
      list: ["Sixty-marker blood panel", "Osteopathic assessment", "Nutrition consult", "WHOOP + Lingo CGM fitted"]
    },
    {
      idx: "02",
      icon: /* @__PURE__ */ React.createElement(Icon.Practice, null),
      title: "Practice",
      days: "Days 4 \u2014 11",
      body: "Twenty-six guided group sessions across yoga, qi gong, breath, strength, sound and meditation. Held at human pace. Held by people who have done this for decades.",
      list: ["26 group sessions", "Daily strength + mobility", "Breath and qi gong", "Sound and meditation"]
    },
    {
      idx: "03",
      icon: /* @__PURE__ */ React.createElement(Icon.Restore, null),
      title: "Restore",
      days: "Days 12 \u2014 14",
      body: "Lumeira spa rituals, a daily villa massage and eight cross-campus activations across the forty-four-hectare creative city. Your nervous system reorganises around the slower tempo.",
      list: ["Daily villa massage", "Lumeira spa rituals", "8 cross-campus activations", "Final-day readout"]
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { id: "arc", className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-24" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "02 \xB7 The fourteen-day arc"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]" }, "A single shape, held across two weeks."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, "Diagnose, practise, restore. Each phase has a tempo, a clinical owner, and a measurable handover into the next. You are never adrift."))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" }, cards.map((c, i) => /* @__PURE__ */ React.createElement(Reveal, { key: c.title, delay: i * 60 }, /* @__PURE__ */ React.createElement("article", { className: "vessel-card h-full" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "text-[var(--green)]" }, c.icon), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55" }, c.idx, " / 03")), /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[34px] md:text-[40px] tracking-[-0.02em] text-[var(--green)]" }, c.title), /* @__PURE__ */ React.createElement("div", { className: "mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60" }, c.days), /* @__PURE__ */ React.createElement("p", { className: "mt-6 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85" }, c.body), /* @__PURE__ */ React.createElement("ul", { className: "mt-8 border-t border-[var(--ink)]/15" }, c.list.map((l) => /* @__PURE__ */ React.createElement("li", { key: l, className: "border-b border-[var(--ink)]/15 py-3 flex items-center justify-between font-body text-[13px] text-[var(--ink)]/80" }, /* @__PURE__ */ React.createElement("span", null, l), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/45" }, "included"))))))))));
}
function Biomarkers() {
  const metrics = [
    { label: "HRV (overnight, ms)", before: 42, after: 58, unit: "ms", direction: "up", color: "var(--sun-3)" },
    { label: "VO2max (ml/kg/min)", before: 32.4, after: 36.1, unit: "", direction: "up", color: "var(--sun-2)" },
    { label: "DunedinPACE", before: 1.05, after: 0.96, unit: "", direction: "down", color: "var(--sun-1)" },
    { label: "Fasting glucose (mg/dL)", before: 102, after: 88, unit: "mg/dL", direction: "down", color: "var(--sun-2)" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "03 \xB7 Cohort outcomes"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, "Four numbers your future self will recognise."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, "Cohort medians from prior intakes, published quarterly. Individual outcomes vary; every guest leaves with their own panel and a coach-led readout."))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14" }, metrics.map((m, i) => {
    const delta = m.after - m.before;
    const better = m.direction === "up" && delta > 0 || m.direction === "down" && delta < 0;
    const pct = Math.abs(delta / m.before) * 100;
    const fill = Math.min(1, pct / 30);
    const formatNum = (n) => Number.isInteger(n) ? n.toString() : n.toFixed(2).replace(/\.?0+$/, "");
    return /* @__PURE__ */ React.createElement(Reveal, { key: m.label, delay: i * 60 }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 pb-3 border-b border-[var(--ink)]/15" }, m.label), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-display text-[56px] md:text-[64px] tracking-[-0.03em] text-[var(--green)] leading-none" }, formatNum(m.after)), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55" }, m.unit || "")), /* @__PURE__ */ React.createElement("div", { className: "mt-5 flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "font-mono text-[11px] tracking-[0.22em] uppercase",
        style: { color: better ? m.color : "var(--ink)" }
      },
      delta > 0 ? "+" : "\u2212",
      formatNum(Math.abs(delta)),
      " (",
      pct.toFixed(1),
      "%)"
    ), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/45" }, "from ", formatNum(m.before))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 h-[3px] w-full bg-[var(--ink)]/12 relative" }, /* @__PURE__ */ React.createElement(Bar, { fill, color: m.color }))));
  })), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "mt-16 font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--ink)]/55" }, "Cohort medians, published quarterly \xB7 n = 47 across three intakes"))));
}
function Bar({ fill, color }) {
  const ref = useRef(null);
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setGrown(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: "absolute left-0 top-0 h-full",
      style: {
        width: grown ? `${fill * 100}%` : "0%",
        background: color,
        transition: "width 700ms cubic-bezier(0.2,0.7,0.2,1)"
      }
    }
  );
}
Object.assign(window, { PhotoPlaceholder, Reveal, Icon, Nav, Hero, Premise, Arc, Biomarkers });
const { useState: useState2, useEffect: useEffect2 } = React;
function TakeHome() {
  const items = [
    { name: "WHOOP 4.0", caption: "Continuous strain, recovery and sleep \u2014 yours after day three.", palette: ["#1f2a30", "#3f5764", "#84a0a8", "#c5d2d3"], cap: "kit \xB7 whoop band on linen", image: "/images/kit-whoop.png" },
    { name: "Lingo CGM", caption: "Two weeks of continuous glucose. You will eat the same lunch twice and see two different curves.", palette: ["#2e2620", "#6a513c", "#b48b62", "#ecd5b1"], cap: "kit \xB7 CGM patch + applicator", image: "/images/kit-cgm.png" },
    { name: "At-home blood kit", caption: "A second blood draw, ninety days out, mailed from your kitchen. The panel closes the loop.", palette: ["#1e2a25", "#3a5648", "#7c9482", "#cdd9c8"], cap: "kit \xB7 blood draw box \xB7 linen cloth", image: "/images/kit-bloodkit.png" },
    { name: "DunedinPACE", caption: "Your epigenetic rate of ageing. We rerun it on the at-home kit so the number is comparable.", palette: ["#2a1f17", "#6f4f33", "#b0875a", "#e6ceaa"], cap: "kit \xB7 saliva tube + booklet", image: "/images/kit-dunedin.png" },
    { name: "Retreat journal", caption: "Hand-bound. Daily prompts paired with your own panel. The only artefact that leaves with you.", palette: ["#28221b", "#574635", "#a8855e", "#e7d5b5"], cap: "kit \xB7 journal \xB7 pencil \xB7 ribbon", image: "/images/kit-journal.png" },
    { name: "Final readout", caption: "A printed dossier of your fourteen days, delivered to your villa the evening before you fly.", palette: ["#1d2b29", "#345049", "#7a948a", "#d3d6cf"], cap: "kit \xB7 printed dossier on table", image: "/images/kit-readout.png" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "04 \xB7 What you take home"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]" }, "A small box of tools, and a number you can keep watching."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, "Six items leave Bali with you. Together they keep your panel alive for ninety days after the cohort closes."))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" }, items.map((it, i) => /* @__PURE__ */ React.createElement(Reveal, { key: it.name, delay: i % 3 * 60 }, /* @__PURE__ */ React.createElement("article", { className: "vessel-card !p-0 overflow-hidden h-full flex flex-col" }, /* @__PURE__ */ React.createElement(
    PhotoPlaceholder,
    {
      palette: it.palette,
      caption: it.cap,
      alt: `Photograph of ${it.name}: ${it.caption}`,
      image: it.image,
      className: "aspect-[5/4]"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "p-7 md:p-8 flex flex-col flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline justify-between" }, /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[24px] tracking-[-0.015em] text-[var(--ink)]" }, it.name), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/50" }, String(i + 1).padStart(2, "0"), " / 06")), /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80" }, it.caption))))))));
}
function DayInFourteen() {
  const moments = [
    { time: "06:00", title: "Quiet wake", body: "No alarm. A teak chime from the verandah. Coconut water, electrolytes and an HRV check before your feet touch the path.", palette: ["#1f2218", "#3c4530", "#7a8265", "#c7c5a8"], cap: "06:00 \xB7 verandah \xB7 pre-dawn light \xB7 tea pot", image: "/images/day-0600.png" },
    { time: "07:30", title: "Movement", body: "Strength, mobility or qi gong in the open-air pavilion. Coach-led, never more than ten people on the mat.", palette: ["#1d2b29", "#2f4a44", "#6e8a82", "#c3d0c8"], cap: "07:30 \xB7 pavilion \xB7 mat \xB7 coach in linen", image: "/images/day-0730.png" },
    { time: "09:15", title: "Doctor", body: "Twenty minutes with the resident MD. Yesterday's WHOOP and CGM are open on the table. A small adjustment to today.", palette: ["#241a13", "#5a3f2a", "#a78057", "#e5cba2"], cap: "09:15 \xB7 consult room \xB7 CGM + WHOOP on table", image: "/images/day-0915.png" },
    { time: "13:00", title: "Lunch & curve", body: "A six-course tasting that doubles as a teaching meal. You watch your glucose curve while the chef walks the dish.", palette: ["#2a1f17", "#6f4f33", "#b08461", "#ecd0a8"], cap: "13:00 \xB7 long table \xB7 plates \xB7 CGM on arm", image: "/images/day-1300.png" },
    { time: "16:00", title: "Restoration", body: "Villa massage, Lumeira float or a sound bath. Your only job is to be unreachable, and you are.", palette: ["#1e2a30", "#3a5764", "#7d9aa5", "#d2dadd"], cap: "16:00 \xB7 spa hall \xB7 candle \xB7 linen drape", image: "/images/day-1600.png" },
    { time: "20:00", title: "Cohort dinner", body: "Ten guests, two coaches, one chef. Conversation arrives at the slower tempo it has been waiting for.", palette: ["#22180f", "#4d3621", "#9a754c", "#e3c89b"], cap: "20:00 \xB7 long table \xB7 candles \xB7 open-air dining", image: "/images/day-2000.png" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "05 \xB7 A day in your fourteen"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[760px]" }, "One illustrative day, held at human pace."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, "The shape changes across the fourteen days; the tempo does not. You are never asked to do two difficult things in the same morning."))), /* @__PURE__ */ React.createElement("ol", { className: "border-t border-[var(--ink)]/15" }, moments.map((m, i) => /* @__PURE__ */ React.createElement(Reveal, { key: m.time, as: "li", delay: i % 3 * 40 }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-12 border-b border-[var(--ink)]/15 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--green)] pt-2" }, m.time), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-3" }, /* @__PURE__ */ React.createElement(
    PhotoPlaceholder,
    {
      palette: m.palette,
      caption: m.cap,
      alt: `${m.time}: ${m.title}. ${m.body}`,
      image: m.image,
      className: "aspect-[4/3] rounded-[18px]"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[28px] md:text-[34px] tracking-[-0.02em] text-[var(--ink)]" }, m.title), /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-body text-[15px] leading-[1.65] text-[var(--ink)]/80 max-w-[600px]" }, m.body))))))));
}
function Team() {
  const people = [
    { name: "Dr. Anya Wirjawan", role: "Medical director", blurb: "Internal medicine, twenty-two years. Leads the diagnostic panel and the final readout.", palette: ["#1d2b29", "#3a5048", "#7e948c", "#d0d8d0"], cap: "portrait \xB7 MD \xB7 clinic doorway \xB7 natural light", image: "/images/team-md.png" },
    { name: "Komang Sutrisna", role: "Head of practice", blurb: "Yoga, qi gong and breath. Runs the daily movement schedule and the cohort dynamic.", palette: ["#241a13", "#5a3f2a", "#a78057", "#e5cba2"], cap: "portrait \xB7 head of practice \xB7 pavilion edge", image: "/images/team-practice.png" },
    { name: "Chef L\xE9a Marchand", role: "Resident chef", blurb: "Plant-forward, glucose-aware. Each dish is plated with the curve you will see at 3pm.", palette: ["#22180f", "#4d3621", "#9a754c", "#e3c89b"], cap: "portrait \xB7 chef \xB7 kitchen pass \xB7 linen apron", image: "/images/team-chef.png" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "06 \xB7 The team"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, "Quiet professionals, on staff. Not visiting practitioners."))), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, "Three principals lead every cohort end to end. You will see each of them daily."))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10" }, people.map((p, i) => /* @__PURE__ */ React.createElement(Reveal, { key: p.name, delay: i * 60 }, /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement(
    PhotoPlaceholder,
    {
      palette: p.palette,
      caption: p.cap,
      alt: `Portrait of ${p.name}, ${p.role}. ${p.blurb}`,
      image: p.image,
      className: "aspect-[4/5] rounded-[24px]"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "mt-6" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60" }, p.role), /* @__PURE__ */ React.createElement("h3", { className: "mt-1 font-display text-[26px] md:text-[28px] tracking-[-0.015em] text-[var(--ink)]" }, p.name), /* @__PURE__ */ React.createElement("p", { className: "mt-2 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80 max-w-[360px]" }, p.blurb))))))));
}
function Investment({ v }) {
  const included = [
    "Fourteen nights, private villa accommodation",
    "Sixty-marker blood panel + osteopath + nutrition consult",
    "WHOOP, Lingo CGM and at-home blood kit",
    "DunedinPACE biological-age test (baseline + 90-day)",
    "Twenty-six group practice sessions",
    "Daily villa massage, eight Lumeira spa rituals",
    "All meals, glucose-aware, prepared by the resident chef",
    "Final printed dossier and ninety-day coach check-in"
  ];
  const notIncluded = [
    "Flights to and from Denpasar (DPS)",
    "Travel insurance",
    "Specialist add-ons beyond the standard panel",
    "Companion accommodation (available, priced separately)",
    "Gratuities (genuinely optional)",
    "Anything you do not want"
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "07 \xB7 The investment")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, "One price band, transparent. No discounts, no urgency.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("div", { className: "mt-12 vessel-card bg-[var(--warm)] !p-8 md:!p-12 lg:!p-16" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-x-10 gap-y-10" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4 md:border-r md:border-[var(--ink)]/15 md:pr-10" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60" }, "Per guest \xB7 fourteen nights"), /* @__PURE__ */ React.createElement("div", { className: "mt-3 font-display text-[44px] md:text-[56px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]" }, v.priceBand), /* @__PURE__ */ React.createElement("p", { className: "mt-5 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80" }, "The band reflects villa selection and cohort timing. Quoted on application."), /* @__PURE__ */ React.createElement("div", { className: "mt-8 pt-8 border-t border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60 mb-2" }, "Cohort size"), /* @__PURE__ */ React.createElement("div", { className: "font-display text-[22px] tracking-[-0.01em] text-[var(--ink)]" }, "10 guests \xB7 application only"))), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--green)] mb-5" }, "What is included"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, included.map((l) => /* @__PURE__ */ React.createElement("li", { key: l, className: "flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85" }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", className: "font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]" }, "+"), /* @__PURE__ */ React.createElement("span", null, l))))), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-5" }, "What is not included"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, notIncluded.map((l) => /* @__PURE__ */ React.createElement("li", { key: l, className: "flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/70" }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", className: "font-mono text-[10px] tracking-[0.22em] text-[var(--ink)]/45 mt-[3px]" }, "\u2212"), /* @__PURE__ */ React.createElement("span", null, l))))))))));
}
function Apply({ v }) {
  const [form, setForm] = useState2({ name: "", email: "", country: "", change: "" });
  const [touched, setTouched] = useState2({});
  const [submitted, setSubmitted] = useState2(false);
  const errors = {
    name: form.name.trim().length < 2 ? "Please share your full name." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Please enter a valid email." : "",
    country: form.country.trim().length < 2 ? "Country of residence." : "",
    change: form.change.trim().length < 12 ? "One sentence is enough \u2014 at least twelve characters." : ""
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
      setForm({ name: "", email: "", country: "", change: "" });
      setTouched({});
      setSubmitted(false);
      window.__nuanu_thankyou = true;
      const note = document.getElementById("apply-thankyou");
      if (note) {
        note.style.opacity = "1";
        clearTimeout(window.__nuanu_thankyou_t);
        window.__nuanu_thankyou_t = setTimeout(() => {
          note.style.opacity = "0";
        }, 4e3);
      }
    }
  }
  const inputClass = "w-full bg-transparent border-0 border-b border-[var(--ink)]/25 focus:border-[var(--green)] focus:outline-none py-3 font-body text-[16px] text-[var(--ink)] placeholder:text-[var(--ink)]/40 transition-colors";
  return /* @__PURE__ */ React.createElement("section", { id: "apply", className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-5" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, "08 \xB7 Apply")), /* @__PURE__ */ React.createElement(Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[480px]" }, "Tell us, briefly, what you are hoping to change.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "mt-6 font-body text-[14px] leading-[1.65] text-[var(--ink)]/75 max-w-[420px]" }, "We review applications within five working days. The October cohort accepts ten of approximately forty applicants. There is no waitlist gimmick \u2014 if we are not the right fit, we will say so quickly.")), /* @__PURE__ */ React.createElement(Reveal, { delay: 180 }, /* @__PURE__ */ React.createElement("div", { className: "mt-10 pt-10 border-t border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-2" }, "Hook for this cohort"), /* @__PURE__ */ React.createElement("div", { className: "font-display text-[20px] tracking-[-0.01em] text-[var(--ink)]" }, v.hook)))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "col-span-12 md:col-span-7" }, /* @__PURE__ */ React.createElement("form", { onSubmit, noValidate: true, className: "grid grid-cols-2 gap-x-8 gap-y-2" }, /* @__PURE__ */ React.createElement(Field, { label: "Full name", error: show("name"), className: "col-span-2 md:col-span-1" }, /* @__PURE__ */ React.createElement("input", { className: inputClass, value: form.name, onChange: update("name"), onBlur: blur("name"), placeholder: "Your name", autoComplete: "name" })), /* @__PURE__ */ React.createElement(Field, { label: "Email", error: show("email"), className: "col-span-2 md:col-span-1" }, /* @__PURE__ */ React.createElement("input", { type: "email", className: inputClass, value: form.email, onChange: update("email"), onBlur: blur("email"), placeholder: "you@domain.com", autoComplete: "email" })), /* @__PURE__ */ React.createElement(Field, { label: "Country of residence", error: show("country"), className: "col-span-2" }, /* @__PURE__ */ React.createElement("input", { className: inputClass, value: form.country, onChange: update("country"), onBlur: blur("country"), placeholder: "Country", autoComplete: "country-name" })), /* @__PURE__ */ React.createElement(Field, { label: "What are you hoping to change?", error: show("change"), className: "col-span-2" }, /* @__PURE__ */ React.createElement("textarea", { rows: "3", className: inputClass + " resize-none", value: form.change, onChange: update("change"), onBlur: blur("change"), placeholder: "One sentence is enough." })), /* @__PURE__ */ React.createElement("div", { className: "col-span-2 mt-8 flex flex-wrap items-center gap-6" }, /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn-primary" }, "Request an invitation"), /* @__PURE__ */ React.createElement("span", { id: "apply-thankyou", className: "font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--green)] transition-opacity duration-200", style: { opacity: 0 } }, "Received. We will reply within five working days.")))))));
}
function Field({ label, error, children, className = "" }) {
  return /* @__PURE__ */ React.createElement("label", { className: `block py-4 ${className}` }, /* @__PURE__ */ React.createElement("span", { className: "block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-1" }, label), children, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "block mt-2 font-mono text-[10px] tracking-[0.18em] uppercase",
      style: { color: "var(--sun-1)", minHeight: "14px", opacity: error ? 1 : 0, transition: "opacity 200ms ease-out" }
    },
    error || "\xB7"
  ));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "bg-[var(--ink)] text-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-16" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-end justify-between gap-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-baseline gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-display text-[28px] tracking-tight" }, "nuanu"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] opacity-70" }, "Experience")), /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 max-w-[420px]" }, "Nuanu Creative City \xB7 Jl. Pantai Cemongkak \xB7 Tabanan Regency \xB7 Bali \xB7 Indonesia")), /* @__PURE__ */ React.createElement("ul", { className: "flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em]" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "opacity-75 hover:opacity-100" }, "Privacy")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "opacity-75 hover:opacity-100" }, "Imprint")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "opacity-75 hover:opacity-100" }, "Contact")))), /* @__PURE__ */ React.createElement("div", { className: "mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] opacity-55" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 Nuanu \xB7 All rights reserved"), /* @__PURE__ */ React.createElement("span", null, "Application only \xB7 Cohort of 10 \xB7 Bali, October 2026"))));
}
Object.assign(window, { TakeHome, DayInFourteen, Team, Investment, Apply, Footer });
function WellnessHero({ v }) {
  const primaryLabel = v.heroPrimaryCtaLabel || "Request an invitation";
  const secondaryLabel = v.heroSecondaryCtaLabel || "See the seven-day concept";
  const secondaryHref = v.heroSecondaryHref || "#concept";
  return /* @__PURE__ */ React.createElement("header", { id: "top", className: "relative w-full", style: { height: "min(92vh, 920px)" } }, /* @__PURE__ */ React.createElement(
    window.PhotoPlaceholder,
    {
      palette: v.heroPalette,
      caption: v.heroCaption,
      alt: v.heroAlt,
      image: v.heroImage,
      className: "absolute inset-0",
      captionPosition: "tl"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 pt-28 pb-16 flex flex-col justify-end" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-[920px] text-white" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase opacity-85 mb-6" }, v.audience, " \xB7 ", v.audienceNote), /* @__PURE__ */ React.createElement("h1", { className: "font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.025em]" }, v.h1), /* @__PURE__ */ React.createElement("p", { className: "mt-7 max-w-[680px] text-[16px] md:text-[17px] leading-[1.55] text-white/90" }, v.sub), /* @__PURE__ */ React.createElement("div", { className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/85" }, v.trustStrip.map((t, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 && /* @__PURE__ */ React.createElement("span", { className: "opacity-50" }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, t)))), /* @__PURE__ */ React.createElement("div", { className: "mt-10 flex flex-wrap items-center gap-5" }, /* @__PURE__ */ React.createElement("a", { href: "#apply", className: "btn-primary-on-dark" }, primaryLabel), /* @__PURE__ */ React.createElement("a", { href: secondaryHref, className: "btn-ghost-on-dark group" }, /* @__PURE__ */ React.createElement("span", null, secondaryLabel), /* @__PURE__ */ React.createElement(window.Icon.Arrow, { className: "transition-transform group-hover:translate-x-1" }))))));
}
function WellnessIntro3Col({ v }) {
  const i = v.intro3Col;
  if (!i) return null;
  const cols = i.cols || [];
  return /* @__PURE__ */ React.createElement("section", { id: "intro", className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-28 md:py-36" }, i.eyebrow && /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-12" }, i.eyebrow)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 border-t border-[var(--ink)]/15 pt-12 md:pt-16" }, cols.map((c, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: c.title, delay: idx * 60 }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--ink)]/55 mb-6" }, c.title), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, (c.items || []).map((line) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: line,
      className: "flex gap-3 font-body text-[15px] leading-[1.55] text-[var(--ink)]/90"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
      },
      "+"
    ),
    /* @__PURE__ */ React.createElement("span", null, line)
  ))))))), i.footnote && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 180 }, /* @__PURE__ */ React.createElement("p", { className: "mt-14 font-body italic text-[14px] leading-[1.65] text-[var(--ink)]/65 max-w-[820px]" }, i.footnote)), i.cta && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 240 }, /* @__PURE__ */ React.createElement("div", { className: "mt-12" }, /* @__PURE__ */ React.createElement("a", { href: i.cta.href || "#apply", className: "btn-primary" }, i.cta.label)))));
}
function WellnessPrinciples({ v }) {
  const p = v.principles;
  if (!p) return null;
  const items = p.items || [];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-10 md:gap-14" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-5" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-6" }, p.eyebrow)), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement(
    "h2",
    {
      className: "font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)]",
      style: { textWrap: "balance" }
    },
    p.headline
  ))), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120, className: "col-span-12 md:col-span-7 md:pt-6" }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink)]/85 max-w-[640px]" }, p.body))), /* @__PURE__ */ React.createElement("div", { className: "mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" }, items.map((it, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: it.title, delay: idx * 60 }, /* @__PURE__ */ React.createElement("article", { className: "vessel-card h-full" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/50 mb-6" }, String(idx + 1).padStart(2, "0"), " / ", String(items.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[24px] md:text-[26px] tracking-[-0.015em] text-[var(--green)] leading-[1.2]" }, it.title), /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85" }, it.body)))))));
}
function WellnessGallery({ v }) {
  const g = v.gallery;
  if (!g) return null;
  const images = g.images || [];
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-24 md:py-32" }, g.eyebrow && /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-10" }, g.eyebrow)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" }, images.map((img, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: img.cap + idx, delay: idx % 3 * 60 }, /* @__PURE__ */ React.createElement(
    window.PhotoPlaceholder,
    {
      palette: img.palette,
      caption: img.cap,
      alt: img.alt || img.cap,
      image: img.image,
      className: "aspect-square rounded-[20px]"
    }
  ))))));
}
function WellnessConcept({ v }) {
  const pillars = v.pillars || [];
  const pb = v.pillarsBlock || {};
  return /* @__PURE__ */ React.createElement("section", { id: "concept", className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-24" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, pb.eyebrow || "Three pillars"), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, pb.headline || "Three quiet inputs."))), pb.intro && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[360px]" }, pb.intro))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" }, pillars.map((p, i) => /* @__PURE__ */ React.createElement(window.Reveal, { key: p.title, delay: i % 3 * 60 }, /* @__PURE__ */ React.createElement("article", { className: "vessel-card !p-0 overflow-hidden h-full flex flex-col" }, p.image && /* @__PURE__ */ React.createElement(
    window.PhotoPlaceholder,
    {
      palette: p.imagePalette,
      caption: p.imageCaption,
      alt: p.imageAlt,
      image: p.image,
      className: "aspect-[4/3]"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "p-7 md:p-9 flex flex-col flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between mb-6" }, /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[34px] md:text-[40px] tracking-[-0.02em] text-[var(--green)]" }, p.title), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55" }, String(i + 1).padStart(2, "0"), " / ", String(pillars.length).padStart(2, "0"))), p.cadence && /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60" }, p.cadence), /* @__PURE__ */ React.createElement("p", { className: "mt-3 font-body text-[14.5px] leading-[1.65] text-[var(--ink)]/85" }, p.body), /* @__PURE__ */ React.createElement("ul", { className: "mt-6 border-t border-[var(--ink)]/15" }, p.items.map((l) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: l,
      className: "border-b border-[var(--ink)]/15 py-3 flex items-center justify-between font-body text-[13px] text-[var(--ink)]/80"
    },
    /* @__PURE__ */ React.createElement("span", null, l),
    /* @__PURE__ */ React.createElement("span", { className: "font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--ink)]/45" }, "included")
  ))))))))));
}
function WellnessProgram({ v }) {
  const pr = v.program;
  if (!pr) return null;
  const columns = pr.columns || [];
  return /* @__PURE__ */ React.createElement("section", { id: "programme", className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-y-6 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, pr.eyebrow), /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, pr.headline))), pr.intro && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[400px]" }, pr.intro))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 border-t border-[var(--ink)]/15" }, columns.map((c, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: c.title, delay: idx * 60, className: idx > 0 ? "md:border-l md:border-[var(--ink)]/15" : "" }, /* @__PURE__ */ React.createElement("div", { className: "py-10 md:py-12 md:px-8 lg:px-10" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-2" }, String(idx + 1).padStart(2, "0"), " / ", String(columns.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("h3", { className: "font-display text-[26px] md:text-[30px] tracking-[-0.015em] text-[var(--green)] leading-[1.2]" }, c.title), /* @__PURE__ */ React.createElement("ul", { className: "mt-6 space-y-3" }, (c.items || []).map((line) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: line,
      className: "flex gap-3 font-body text-[14.5px] leading-[1.55] text-[var(--ink)]/85"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
      },
      "+"
    ),
    /* @__PURE__ */ React.createElement("span", null, line)
  )))))))));
}
function WellnessDay8({ v }) {
  const d = v.day8;
  if (!d) return null;
  return /* @__PURE__ */ React.createElement("section", { className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-8 md:gap-12 items-center" }, /* @__PURE__ */ React.createElement(window.Reveal, { className: "col-span-12 md:col-span-6" }, /* @__PURE__ */ React.createElement(
    window.PhotoPlaceholder,
    {
      palette: d.imagePalette,
      caption: d.imageCaption,
      alt: d.imageAlt,
      image: d.image,
      className: "aspect-[4/5] rounded-[24px]"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-6 md:pl-6" }, /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-6" }, d.eyebrow)), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement(
    "h2",
    {
      className: "font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--ink)]",
      style: { textWrap: "balance" }
    },
    d.headline
  )), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 180 }, /* @__PURE__ */ React.createElement("p", { className: "mt-8 font-body text-[16px] leading-[1.7] text-[var(--ink)]/85 max-w-[560px]" }, d.body))))));
}
function WellnessPlace({ v }) {
  const p = v.place;
  if (!p) return null;
  const metrics = p.metrics || [];
  const nearby = p.nearby;
  const images = p.images || [];
  return /* @__PURE__ */ React.createElement("section", { id: "place", className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-10 mb-16 md:mb-20" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-5" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, p.eyebrow)), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[480px]" }, p.headline))), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120, className: "col-span-12 md:col-span-7 md:pt-4" }, /* @__PURE__ */ React.createElement("p", { className: "font-body text-[16px] md:text-[17px] leading-[1.7] text-[var(--ink)]/85 max-w-[640px]" }, p.intro))), metrics.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-b border-[var(--ink)]/15 py-12 md:py-16 mb-16 md:mb-20" }, metrics.map((m, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: m.label, delay: idx * 60 }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-display text-[44px] md:text-[56px] lg:text-[64px] leading-none tracking-[-0.03em] text-[var(--green)]" }, m.value), /* @__PURE__ */ React.createElement("p", { className: "mt-4 font-body text-[13px] leading-[1.55] text-[var(--ink)]/75 max-w-[220px]" }, m.label))))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-6 md:gap-10" }, images.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-8 grid grid-cols-3 gap-3 md:gap-4" }, images.map((img, idx) => /* @__PURE__ */ React.createElement(window.Reveal, { key: img.cap + idx, delay: idx * 60 }, /* @__PURE__ */ React.createElement(
    window.PhotoPlaceholder,
    {
      palette: img.palette,
      caption: img.cap,
      alt: img.alt || img.cap,
      image: img.image,
      className: "aspect-[4/5] rounded-[18px]"
    }
  )))), nearby && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120, className: "col-span-12 md:col-span-4 md:pl-6 md:border-l md:border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-5" }, nearby.title || "Nearby"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, (nearby.items || []).map((line) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: line,
      className: "flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
      },
      "+"
    ),
    /* @__PURE__ */ React.createElement("span", null, line)
  )))))));
}
function WellnessInvestment({ v }) {
  const inv = v.investment || {};
  const included = inv.included || [];
  const notIncluded = inv.notIncluded || [];
  return /* @__PURE__ */ React.createElement("section", { id: "investment", className: "bg-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, inv.eyebrow || "Price and participation")), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[820px]" }, inv.headline || "One price. All inclusive. No pressure.")), inv.note && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 90 }, /* @__PURE__ */ React.createElement("p", { className: "mt-6 font-body text-[15px] leading-[1.65] text-[var(--ink)]/75 max-w-[680px]" }, inv.note)), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("div", { className: "mt-12 vessel-card bg-white !p-8 md:!p-12 lg:!p-16" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-x-10 gap-y-10" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4 md:border-r md:border-[var(--ink)]/15 md:pr-10" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60" }, inv.priceUnit || "Per guest \xB7 seven days"), /* @__PURE__ */ React.createElement("div", { className: "mt-3 font-display text-[52px] md:text-[64px] leading-[1.02] tracking-[-0.03em] text-[var(--green)]" }, inv.price), /* @__PURE__ */ React.createElement("p", { className: "mt-5 font-body text-[14px] leading-[1.6] text-[var(--ink)]/80" }, inv.duration), /* @__PURE__ */ React.createElement("div", { className: "mt-8 pt-8 border-t border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/60 mb-2" }, "Cohort size"), /* @__PURE__ */ React.createElement("div", { className: "font-display text-[22px] tracking-[-0.01em] text-[var(--ink)]" }, inv.cohort)), inv.ctaLabel && /* @__PURE__ */ React.createElement("div", { className: "mt-10" }, /* @__PURE__ */ React.createElement("a", { href: "#apply", className: "btn-primary" }, inv.ctaLabel))), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--green)] mb-5" }, "What is included"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, included.map((l) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: l,
      className: "flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/85"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "font-mono text-[10px] tracking-[0.22em] text-[var(--green)] mt-[3px]"
      },
      "+"
    ),
    /* @__PURE__ */ React.createElement("span", null, l)
  )))), /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-5" }, "What is not included"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, notIncluded.map((l) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: l,
      className: "flex gap-3 font-body text-[14px] leading-[1.55] text-[var(--ink)]/70"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "font-mono text-[10px] tracking-[0.22em] text-[var(--ink)]/45 mt-[3px]"
      },
      "\u2212"
    ),
    /* @__PURE__ */ React.createElement("span", null, l)
  )))))))));
}
function WellnessFAQ({ v }) {
  const f = v.faq;
  if (!f) return null;
  const items = f.items || [];
  const [openIdx, setOpenIdx] = React.useState(0);
  return /* @__PURE__ */ React.createElement("section", { id: "faq", className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-10" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-12 md:col-span-4" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--green)] mb-4" }, f.heading || "Questions")), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 60 }, /* @__PURE__ */ React.createElement("h2", { className: "font-display text-[34px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[400px]" }, "Short answers to what guests ask before they book.")), f.intro && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120 }, /* @__PURE__ */ React.createElement("p", { className: "mt-6 font-body text-[14px] leading-[1.6] text-[var(--ink)]/75 max-w-[380px]" }, f.intro))), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 120, className: "col-span-12 md:col-span-8" }, /* @__PURE__ */ React.createElement("ul", { className: "border-t border-[var(--ink)]/15" }, items.map((it, i) => {
    const open = openIdx === i;
    return /* @__PURE__ */ React.createElement("li", { key: it.q, className: "border-b border-[var(--ink)]/15" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpenIdx(open ? -1 : i),
        className: "w-full text-left py-6 md:py-7 flex items-baseline justify-between gap-6 group"
      },
      /* @__PURE__ */ React.createElement("span", { className: "font-display text-[20px] md:text-[24px] tracking-[-0.015em] text-[var(--ink)] leading-[1.25]" }, it.q),
      /* @__PURE__ */ React.createElement(
        "span",
        {
          "aria-hidden": "true",
          className: "font-mono text-[14px] text-[var(--green)] transition-transform",
          style: { transform: open ? "rotate(45deg)" : "rotate(0)" }
        },
        "+"
      )
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 280ms ease-out, opacity 200ms ease-out"
        }
      },
      /* @__PURE__ */ React.createElement("p", { className: "pb-7 md:pb-8 font-body text-[15px] leading-[1.65] text-[var(--ink)]/80 max-w-[640px]" }, it.a)
    ));
  }))))));
}
function WellnessClosing({ v }) {
  const c = v.closing;
  if (!c) return null;
  return /* @__PURE__ */ React.createElement("section", { className: "bg-[var(--ink)] text-[var(--warm)]" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-40" }, /* @__PURE__ */ React.createElement(window.Reveal, null, /* @__PURE__ */ React.createElement(
    "p",
    {
      className: "font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-[-0.025em] max-w-[1100px]",
      style: { textWrap: "balance" }
    },
    c.line
  )), c.sub && /* @__PURE__ */ React.createElement(window.Reveal, { delay: 80 }, /* @__PURE__ */ React.createElement("p", { className: "mt-8 font-body text-[18px] md:text-[20px] leading-[1.6] text-[var(--warm)]/80 max-w-[760px]" }, c.sub)), /* @__PURE__ */ React.createElement(window.Reveal, { delay: 160 }, /* @__PURE__ */ React.createElement("div", { className: "mt-12" }, /* @__PURE__ */ React.createElement("a", { href: "#apply", className: "btn-primary-on-dark" }, c.buttonLabel || "Request an invitation")))));
}
function WellnessPremise({ v }) {
  return /* @__PURE__ */ React.createElement("section", { className: "bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-20 py-32 md:py-44" }, /* @__PURE__ */ React.createElement("p", { className: "font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[var(--ink)] max-w-[1200px]", style: { textWrap: "balance" } }, v.premise)));
}
function WellnessOutcomes() {
  return null;
}
function WellnessMidCta() {
  return null;
}
function WellnessDay() {
  return null;
}
function WellnessWhyNuanu() {
  return null;
}
function WellnessApp({ v }) {
  return /* @__PURE__ */ React.createElement("div", { className: "bg-white text-[var(--ink)]" }, /* @__PURE__ */ React.createElement(window.Nav, null), /* @__PURE__ */ React.createElement(WellnessHero, { v }), /* @__PURE__ */ React.createElement(WellnessIntro3Col, { v }), /* @__PURE__ */ React.createElement(WellnessPrinciples, { v }), /* @__PURE__ */ React.createElement(WellnessGallery, { v }), /* @__PURE__ */ React.createElement(WellnessConcept, { v }), /* @__PURE__ */ React.createElement(WellnessProgram, { v }), /* @__PURE__ */ React.createElement(WellnessDay8, { v }), /* @__PURE__ */ React.createElement(WellnessPlace, { v }), /* @__PURE__ */ React.createElement(WellnessInvestment, { v }), /* @__PURE__ */ React.createElement(WellnessFAQ, { v }), /* @__PURE__ */ React.createElement(WellnessClosing, { v }), /* @__PURE__ */ React.createElement(window.Apply, { v }), /* @__PURE__ */ React.createElement(window.Footer, null));
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
  WellnessWhyNuanu
});
const PATH_TO_VARIANT = {
  "/": "master",
  "/healthspan": "master",
  "/unplug": "unplug",
  "/reset": "reset",
  "/moms-reset": "moms_reset",
  "/work-well": "work_well",
  "/parents": "parents"
};
const __path = (typeof window !== "undefined" ? window.location.pathname : "/").replace(/\/$/, "") || "/";
const __host = typeof window !== "undefined" ? window.location.hostname : "";
const __isDev = __host === "localhost" || __host === "127.0.0.1" || /\.vercel\.app$/.test(__host) || typeof window !== "undefined" && window.location.search.includes("dev=1");
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "variant": PATH_TO_VARIANT[__path] || "master"
  }
);
function App() {
  const variants = window.NUANU_VARIANTS;
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const v = variants[tweaks.variant] || variants.master;
  const tweaksPanel = __isDev && /* @__PURE__ */ React.createElement(window.TweaksPanel, null, /* @__PURE__ */ React.createElement(window.TweakSection, { label: "Audience variant" }, /* @__PURE__ */ React.createElement(
    window.TweakSelect,
    {
      label: "Variant",
      value: tweaks.variant,
      onChange: (val) => setTweak("variant", val),
      options: [
        { label: "Master \xB7 Healthspan", value: "master" },
        { label: "B \xB7 Unplug", value: "unplug" },
        { label: "C \xB7 Reset", value: "reset" },
        { label: "D \xB7 Mom's Reset", value: "moms_reset" },
        { label: "E \xB7 Work Well", value: "work_well" },
        { label: "F \xB7 Parents Vitality", value: "parents" }
      ]
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, padding: "10px 0 0", borderTop: "1px solid rgba(41,38,27,0.12)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 } }, "Audience"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)", marginBottom: 10 } }, v.audienceNote), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 } }, "Hook"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)", marginBottom: 10 } }, v.hook), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(41,38,27,0.55)", marginBottom: 4 } }, "Price band"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "rgba(41,38,27,0.85)" } }, v.priceBand))));
  if (v.kind === "wellness") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(window.WellnessApp, { v }), tweaksPanel);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "bg-white text-[var(--ink)]" }, /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(Hero, { v }), /* @__PURE__ */ React.createElement(Premise, { v }), /* @__PURE__ */ React.createElement(Arc, null), /* @__PURE__ */ React.createElement(Biomarkers, null), /* @__PURE__ */ React.createElement(TakeHome, null), /* @__PURE__ */ React.createElement(DayInFourteen, null), /* @__PURE__ */ React.createElement(Team, null), /* @__PURE__ */ React.createElement(Investment, { v }), /* @__PURE__ */ React.createElement(Apply, { v }), /* @__PURE__ */ React.createElement(Footer, null), tweaksPanel);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(App, null));
