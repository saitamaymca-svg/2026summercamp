/* @ds-bundle: {"format":3,"namespace":"YMCADesignSystem_0b190b","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FaqItem","sourcePath":"components/disclosure/FaqItem.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Chip","sourcePath":"components/labels/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"8b4edffc5b5f","components/disclosure/FaqItem.jsx":"991c21ebe785","components/labels/Badge.jsx":"4b1c43585c84","components/labels/Chip.jsx":"b38d8e3807e1","components/labels/Eyebrow.jsx":"21a28e975ed6","components/surfaces/Card.jsx":"10394b9b1424","ui_kits/saitama-recruit/recruit-app.jsx":"b270be4125d8","ui_kits/saitama-recruit/recruit-parts.jsx":"2becf0daac6b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YMCADesignSystem_0b190b = window.YMCADesignSystem_0b190b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * YMCA Button — the brand's primary call-to-action.
 * Pill-shaped, rounded display type, with a colored "lift" shadow
 * on the solid variants. Used everywhere from hero CTAs to nav.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-button-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-btn{
    display:inline-flex;align-items:center;justify-content:center;gap:10px;
    font-family:var(--font-heading);font-weight:var(--fw-black);
    border:none;cursor:pointer;text-decoration:none;white-space:nowrap;
    border-radius:var(--radius-pill);
    transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base), background var(--dur-base);
  }
  .ymca-btn:active{transform:translateY(0) scale(.98);}
  /* sizes */
  .ymca-btn--sm{font-size:14.5px;padding:11px 22px;}
  .ymca-btn--md{font-size:16.5px;padding:16px 30px;}
  .ymca-btn--lg{font-size:18px;padding:18px 36px;}
  /* variants */
  .ymca-btn--red{background:var(--ymca-red);color:#fff;box-shadow:var(--shadow-red);}
  .ymca-btn--red:hover{transform:var(--lift);box-shadow:var(--shadow-red-hover);}
  .ymca-btn--navy{background:var(--ymca-blue);color:#fff;box-shadow:var(--shadow-blue);}
  .ymca-btn--navy:hover{transform:var(--lift);background:var(--ymca-blue-deep);}
  .ymca-btn--ghost{background:rgba(255,255,255,.12);color:#fff;border:1.5px solid rgba(255,255,255,.55);}
  .ymca-btn--ghost:hover{background:rgba(255,255,255,.22);transform:var(--lift);}
  .ymca-btn--outline{background:transparent;color:var(--ymca-red);border:1.5px solid var(--ymca-red);}
  .ymca-btn--outline:hover{background:var(--ymca-red-soft);transform:var(--lift);}
  .ymca-btn[disabled]{opacity:.45;cursor:not-allowed;box-shadow:none;transform:none;}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-button-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function Button({
  children,
  variant = 'red',
  size = 'md',
  href,
  icon,
  iconRight,
  disabled = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = `ymca-btn ymca-btn--${variant} ymca-btn--${size} ${className}`.trim();
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ymca-btn__ico",
    "aria-hidden": "true"
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "ymca-btn__ico",
    "aria-hidden": "true"
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FaqItem.jsx
try { (() => {
/**
 * FaqItem — an accordion row in the YMCA style: a red "Q" tile,
 * bold rounded question, and a red plus/minus toggle that collapses
 * to a minus when open. Manages its own open state unless controlled.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-faq-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-faq{
    background:#fff;border:1px solid var(--line);
    border-radius:var(--radius-md);overflow:hidden;
    transition:box-shadow var(--dur-base);
  }
  .ymca-faq.is-open{box-shadow:var(--shadow-sm);}
  .ymca-faq__q{
    display:flex;align-items:center;gap:16px;width:100%;text-align:left;
    background:none;border:none;cursor:pointer;padding:22px 24px;
    font-family:var(--font-heading);font-weight:var(--fw-bold);
    color:var(--ymca-blue);font-size:16.5px;
  }
  .ymca-faq__tag{
    flex:none;width:30px;height:30px;border-radius:9px;
    background:var(--cream-2);color:var(--ymca-red);
    display:flex;align-items:center;justify-content:center;
    font-family:var(--font-heading);font-weight:var(--fw-black);font-size:15px;
  }
  .ymca-faq__ico{margin-left:auto;flex:none;width:26px;height:26px;position:relative;transition:transform var(--dur-base);}
  .ymca-faq__ico::before,.ymca-faq__ico::after{content:"";position:absolute;background:var(--ymca-red);border-radius:2px;}
  .ymca-faq__ico::before{top:12px;left:4px;right:4px;height:3px;}
  .ymca-faq__ico::after{left:12px;top:4px;bottom:4px;width:3px;transition:opacity var(--dur-base);}
  .ymca-faq.is-open .ymca-faq__ico::after{opacity:0;}
  .ymca-faq__a{max-height:0;overflow:hidden;transition:max-height .35s var(--ease-out);}
  .ymca-faq__a-inner{padding:0 24px 24px 70px;color:var(--ink-soft);font-size:15px;font-weight:var(--fw-medium);line-height:1.8;}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-faq-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function FaqItem({
  question,
  children,
  defaultOpen = false,
  open,
  onToggle,
  className = ''
}) {
  injectStyles();
  const isControlled = typeof open === 'boolean';
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = isControlled ? open : internal;
  const answerRef = React.useRef(null);
  const toggle = () => {
    if (onToggle) onToggle(!isOpen);
    if (!isControlled) setInternal(v => !v);
  };
  const maxH = isOpen && answerRef.current ? answerRef.current.scrollHeight + 'px' : '0px';
  return /*#__PURE__*/React.createElement("div", {
    className: `ymca-faq${isOpen ? ' is-open' : ''} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ymca-faq__q",
    "aria-expanded": isOpen,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "ymca-faq__tag"
  }, "Q"), /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    className: "ymca-faq__ico",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ymca-faq__a",
    style: {
      maxHeight: maxH
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ymca-faq__a-inner",
    ref: answerRef
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a solid, colored category pill. Used for camp categories
 * (forest / sea / sun / smile / adventure) and brand red / navy tags.
 * Bold rounded type, white text on a saturated fill.
 */

const TONES = {
  red: 'var(--ymca-red)',
  navy: 'var(--ymca-blue)',
  forest: 'var(--camp-forest)',
  sea: 'var(--camp-sea)',
  sun: 'var(--camp-sun)',
  smile: 'var(--camp-smile)',
  adventure: 'var(--camp-adventure)'
};
let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-badge-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-badge{
    display:inline-flex;align-items:center;gap:6px;
    font-family:var(--font-heading);font-weight:var(--fw-black);
    font-size:13px;line-height:1;color:#fff;
    padding:7px 14px;border-radius:var(--radius-pill);
  }
  .ymca-badge--shadow{box-shadow:0 8px 18px -8px rgba(0,0,0,.4);}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-badge-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function Badge({
  children,
  tone = 'red',
  shadow = false,
  className = '',
  style,
  ...rest
}) {
  injectStyles();
  const bg = TONES[tone] || TONES.red;
  const cls = `ymca-badge${shadow ? ' ymca-badge--shadow' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      background: bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a compact fact / meta tag. Two tones:
 *  - "light"  : navy text on cream (meta tags inside cards)
 *  - "dark"   : white text in a translucent capsule (on navy / hero)
 * An optional bold lead highlights a key value (e.g. "18歳〜").
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-chip-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-chip{
    display:inline-flex;align-items:center;gap:9px;
    font-family:var(--font-body);font-weight:var(--fw-bold);
    font-size:14px;line-height:1.2;
  }
  .ymca-chip--light{
    color:var(--ymca-blue);background:var(--cream-2);
    padding:5px 11px;border-radius:var(--radius-xs);font-size:12.5px;
  }
  .ymca-chip--dark{
    color:#fff;background:rgba(255,255,255,.10);
    border:1px solid rgba(255,255,255,.22);
    padding:9px 16px;border-radius:var(--radius-sm);
  }
  .ymca-chip__lead{font-family:var(--font-heading);color:var(--accent-yellow);font-weight:var(--fw-black);}
  .ymca-chip--light .ymca-chip__lead{color:var(--ymca-red);}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-chip-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function Chip({
  children,
  lead,
  tone = 'dark',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = `ymca-chip ymca-chip--${tone} ${className}`.trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), lead ? /*#__PURE__*/React.createElement("b", {
    className: "ymca-chip__lead"
  }, lead) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Chip.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small label that sits above a section title.
 * A short red rule followed by bold rounded text. Signals the
 * start of a section in the YMCA voice.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-eyebrow-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    font-family:var(--font-heading);font-weight:var(--fw-black);
    font-size:14px;letter-spacing:var(--ls-eyebrow);
    color:var(--ymca-red);
  }
  .ymca-eyebrow::before{
    content:"";width:22px;height:3px;border-radius:2px;background:currentColor;flex:none;
  }
  .ymca-eyebrow--center{justify-content:center;}
  .ymca-eyebrow--gold{color:var(--accent-yellow);}
  .ymca-eyebrow--navy{color:var(--ymca-blue);}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-eyebrow-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function Eyebrow({
  children,
  tone = 'red',
  center = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const toneCls = tone === 'gold' ? ' ymca-eyebrow--gold' : tone === 'navy' ? ' ymca-eyebrow--navy' : '';
  const cls = `ymca-eyebrow${toneCls}${center ? ' ymca-eyebrow--center' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's standard surface. A white rounded panel with a
 * warm hairline border and soft blue-tinted shadow. Tones cover the
 * common contexts; set `interactive` for the hover-lift used on grids.
 */

let _injected = false;
function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  if (document.getElementById('ymca-card-styles')) {
    _injected = true;
    return;
  }
  const css = `
  .ymca-card{
    background:var(--surface-card);
    border:1px solid var(--line);
    border-radius:var(--radius-lg);
    box-shadow:var(--shadow-sm);
    padding:28px;
    transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base);
  }
  .ymca-card--flat{box-shadow:none;background:var(--cream);border-width:1.5px;}
  .ymca-card--key{
    background:linear-gradient(160deg,#fff 0%,var(--ymca-red-soft) 100%);
    border-color:rgba(213,0,50,.4);
  }
  .ymca-card--dark{
    background:rgba(255,255,255,.06);
    border:1px solid var(--border-on-dark);
    box-shadow:none;color:#fff;
  }
  .ymca-card--interactive{cursor:pointer;}
  .ymca-card--interactive:hover{transform:var(--lift);box-shadow:var(--shadow-md);border-color:transparent;}
  .ymca-card--dark.ymca-card--interactive:hover{background:rgba(255,255,255,.11);border-color:var(--border-on-dark);}
  `;
  const el = document.createElement('style');
  el.id = 'ymca-card-styles';
  el.textContent = css;
  document.head.appendChild(el);
  _injected = true;
}
function Card({
  children,
  tone = 'default',
  interactive = false,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  injectStyles();
  const toneCls = tone === 'default' ? '' : ` ymca-card--${tone}`;
  const cls = `ymca-card${toneCls}${interactive ? ' ymca-card--interactive' : ''} ${className}`.trim();
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saitama-recruit/recruit-app.jsx
try { (() => {
/* Saitama YMCA Recruitment — page assembly. */

const DSA = window.YMCADesignSystem_0b190b;
const {
  Button,
  Eyebrow,
  Card,
  FaqItem
} = DSA;
const {
  RECRUIT_DATA,
  NavBar,
  Hero,
  CampCard,
  BenefitCard,
  VoiceCard,
  StepCard,
  Footer
} = window;
const {
  CAMPS,
  BENEFITS,
  SCHEDULE,
  VOICES,
  STEPS,
  FAQS,
  REQS
} = RECRUIT_DATA;
const BASE = '../../assets/photos/'; // shared brand imagery

function useReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u30EA\u30FC\u30C0\u30FC\u3063\u3066\u3069\u3093\u306A\u5B58\u5728\uFF1F"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "\u5148\u751F\u3067\u3082\u3001\u89AA\u3067\u3082\u306A\u3044\u3002", /*#__PURE__*/React.createElement("br", null), "\u5B50\u3069\u3082\u306E\u300C\u30CA\u30CA\u30E1\u300D\u306E\u5B58\u5728"), /*#__PURE__*/React.createElement("p", {
    className: "about-quote",
    style: {
      marginTop: '20px'
    }
  }, "YMCA\u306E\u30EA\u30FC\u30C0\u30FC\u306F\u3001\u5B50\u3069\u3082\u305F\u3061\u3068\u4E00\u7DD2\u306B\u6D3B\u52D5\u3092\u697D\u3057\u3080", /*#__PURE__*/React.createElement("em", null, "\u300C\u304A\u5144\u3055\u3093\u30FB\u304A\u59C9\u3055\u3093\u300D"), "\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "about-body"
  }, /*#__PURE__*/React.createElement("p", null, "\u300C\u30EA\u30FC\u30C0\u30FC\u300D\u3068\u3044\u3046\u3068\u3001\u4E0A\u304B\u3089\u5F15\u3063\u5F35\u308B\u30A4\u30E1\u30FC\u30B8\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u3067\u3082YMCA\u306E\u30EA\u30FC\u30C0\u30FC\u306F\u9055\u3044\u307E\u3059\u3002\u5FC5\u8981\u306A\u6280\u8853\u3092\u6559\u3048\u3001\u5B89\u5168\u7BA1\u7406\u3082\u3057\u307E\u3059\u304C\u3001\u5148\u751F\u3084\u89AA\u306E\u3088\u3046\u306A\u300C\u30BF\u30C6\u306E\u95A2\u4FC2\u300D\u306E\u6307\u5C0E\u8005\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/React.createElement("p", null, "\u5B50\u3069\u3082\u305F\u3061\u306B\u8FD1\u3044", /*#__PURE__*/React.createElement("strong", null, "\u300C\u30CA\u30CA\u30E1\u306E\u95A2\u4FC2\u300D"), "\u3067\u3001\u5171\u306B\u611F\u52D5\u3057\u305F\u308A\u3001\u30B1\u30F3\u30AB\u3084\u6D99\u306B\u3082\u5BC4\u308A\u6DFB\u3063\u305F\u308A\u3057\u306A\u304C\u3089\u3001\u305D\u306E\u6210\u9577\u3092\u898B\u5B88\u308A\u307E\u3059\u3002"))), /*#__PURE__*/React.createElement("div", {
    className: "about-visual reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + 'kids-closeup-smile.jpg',
    alt: "\u7B11\u9854\u306E\u5B50\u3069\u3082\u305F\u3061"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rels"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    interactive: true,
    className: "rel reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rel-diagram v"
  }, /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--ymca-blue)'
    }
  }, "\u5927\u4EBA"), /*#__PURE__*/React.createElement("div", {
    className: "node-arrow"
  }, "\u2195"), /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--ymca-blue)'
    }
  }, "\u5B50")), /*#__PURE__*/React.createElement("span", {
    className: "rel-tag",
    style: {
      background: 'var(--ymca-blue)'
    }
  }, "\u30BF\u30C6\u306E\u95A2\u4FC2"), /*#__PURE__*/React.createElement("h3", null, "\u5148\u751F\u30FB\u89AA"), /*#__PURE__*/React.createElement("p", null, "\u6559\u3048\u3001\u5C0E\u304F\u6307\u5C0E\u8005\u3002\u5927\u5207\u306A\u5B58\u5728\u3060\u3051\u308C\u3069\u3001\u5B50\u3069\u3082\u306B\u3068\u3063\u3066\u306F\u5C11\u3057\u8DDD\u96E2\u306E\u3042\u308B\u300C\u4E0A\u306E\u4EBA\u300D\u3002")), /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    interactive: true,
    className: "rel reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rel-diagram"
  }, /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--camp-forest)'
    }
  }, "\u5B50"), /*#__PURE__*/React.createElement("div", {
    className: "node-arrow"
  }, "\u2194"), /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--camp-forest)'
    }
  }, "\u5B50")), /*#__PURE__*/React.createElement("span", {
    className: "rel-tag",
    style: {
      background: 'var(--camp-forest)'
    }
  }, "\u30E8\u30B3\u306E\u95A2\u4FC2"), /*#__PURE__*/React.createElement("h3", null, "\u5B50\u3069\u3082\u540C\u58EB"), /*#__PURE__*/React.createElement("p", null, "\u5BFE\u7B49\u306A\u4EF2\u9593\uFF08\u30B0\u30EB\u30FC\u30D7\u30FB\u30EF\u30FC\u30AF\uFF09\u3002\u5354\u529B\u3057\u3001\u5DE5\u592B\u3057\u3001\u3076\u3064\u304B\u308A\u306A\u304C\u3089\u6210\u9577\u3057\u3066\u3044\u304F\u3002")), /*#__PURE__*/React.createElement(Card, {
    tone: "key",
    interactive: true,
    className: "rel reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rel-diagram"
  }, /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--ymca-red)'
    }
  }, "You"), /*#__PURE__*/React.createElement("div", {
    className: "node-arrow",
    style: {
      color: 'var(--camp-sun)'
    }
  }, "\u2922"), /*#__PURE__*/React.createElement("div", {
    className: "node",
    style: {
      background: 'var(--ymca-red)'
    }
  }, "\u5B50")), /*#__PURE__*/React.createElement("span", {
    className: "rel-tag",
    style: {
      background: 'var(--ymca-red)'
    }
  }, "\u30CA\u30CA\u30E1\u306E\u95A2\u4FC2 \u2605"), /*#__PURE__*/React.createElement("h3", null, "\u30EA\u30FC\u30C0\u30FC"), /*#__PURE__*/React.createElement("p", null, "\u5B50\u3069\u3082\u306E\u81EA\u4E3B\u6027\u3092\u640D\u306A\u308F\u305A\u3001\u3054\u304F\u81EA\u7136\u306B\u30B0\u30EB\u30FC\u30D7\u306B\u6EB6\u3051\u8FBC\u307F\u3001\u826F\u3044\u65B9\u5411\u3078\u5C0E\u304F\u3002\u305D\u308C\u304C\u30EA\u30FC\u30C0\u30FC\u306E\u529B\u3002")))));
}
function Camps() {
  return /*#__PURE__*/React.createElement("section", {
    className: "camps",
    id: "camps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center sec-head-center reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "\u3053\u306E\u590F\u306E\u30AD\u30E3\u30F3\u30D7"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "2026\u5E74\u590F\u30015\u3064\u306E\u821E\u53F0\u304C\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "\u68EE\u3067\u3001\u6D77\u3067\u3001\u82F1\u8A9E\u3067\u3002\u305D\u3057\u3066\u3001\u3059\u3079\u3066\u306E\u5B50\u3069\u3082\u306B\u958B\u304B\u308C\u305F\u5834\u6240\u3067\u3002\u6C17\u306B\u306A\u308B\u30AD\u30E3\u30F3\u30D7\u3092\u9078\u3093\u3067\u5FDC\u52DF\u3067\u304D\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "camp-grid"
  }, CAMPS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i
  }, /*#__PURE__*/React.createElement(CampCard, {
    camp: c,
    base: BASE
  }))))));
}
function Benefits() {
  return /*#__PURE__*/React.createElement("section", {
    className: "benefits",
    id: "benefits"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center sec-head-center reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true,
    tone: "gold"
  }, "\u30EA\u30FC\u30C0\u30FC\u306B\u306A\u3063\u3066\u5F97\u3089\u308C\u308B\u3082\u306E"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "\u3042\u3052\u308B\u3060\u3051\u3058\u3083\u306A\u3044\u3002", /*#__PURE__*/React.createElement("br", null), "\u3042\u306A\u305F\u3082\u3001\u305F\u304F\u3055\u3093\u53D7\u3051\u53D6\u308B\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead",
    style: {
      color: 'rgba(255,255,255,.82)'
    }
  }, "\u5B50\u3069\u3082\u305F\u3061\u306E\u305F\u3081\u306B\u306F\u3058\u3081\u305F\u6D3B\u52D5\u304C\u3001\u3044\u3064\u306E\u307E\u306B\u304B\u81EA\u5206\u81EA\u8EAB\u3092\u80B2\u3066\u3066\u3044\u308B\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "ben-grid"
  }, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i
  }, /*#__PURE__*/React.createElement(BenefitCard, {
    item: b
  }))))));
}
function Schedule() {
  return /*#__PURE__*/React.createElement("section", {
    className: "schedule",
    id: "schedule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "1\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u4F8B")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title reveal",
    style: {
      marginTop: '14px'
    }
  }, "\u30AD\u30E3\u30F3\u30D7\u306E\u4E00\u65E5\u3063\u3066\u3001\u3053\u3093\u306A\u611F\u3058\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "sched-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sched-note"
  }, "\u203B \u30D7\u30ED\u30B0\u30E9\u30E0\u3084\u30AD\u30E3\u30F3\u30D7\u306B\u3088\u3063\u3066\u6D41\u308C\u306F\u5909\u308F\u308A\u307E\u3059\u3002\u4E0B\u8A18\u306F\u5BBF\u6CCA\u30AD\u30E3\u30F3\u30D7\u306E\u4E00\u4F8B\u3067\u3059\u3002\u30EA\u30FC\u30C0\u30FC\u306F\u5B50\u3069\u3082\u305F\u3061\u3088\u308A\u5C11\u3057\u65E9\u304F\u52D5\u304D\u3001\u4E00\u65E5\u3092\u652F\u3048\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("img", {
    className: "sched-photo",
    src: BASE + 'cooking-bbq.jpg',
    alt: "\u91CE\u5916\u708A\u4E8B\u306E\u69D8\u5B50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "timeline reveal"
  }, SCHEDULE.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "tl-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-time"
  }, s.t), /*#__PURE__*/React.createElement("h4", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p)))))));
}
function Voices() {
  return /*#__PURE__*/React.createElement("section", {
    className: "voices",
    id: "voices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center sec-head-center reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "\u73FE\u5F79\u30EA\u30FC\u30C0\u30FC\u306E\u58F0"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "\u5148\u8F29\u30EA\u30FC\u30C0\u30FC\u305F\u3061\u306E\u3001\u590F\u306E\u306F\u306A\u3057\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "\u4E0D\u5B89\u3060\u3063\u305F\u306E\u306F\u6700\u521D\u3060\u3051\u3002\u5B9F\u969B\u306B\u6D3B\u52D5\u3057\u305F\u30EA\u30FC\u30C0\u30FC\u305F\u3061\u306E\u8A00\u8449\u3092\u96C6\u3081\u307E\u3057\u305F\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "voice-grid"
  }, VOICES.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i
  }, /*#__PURE__*/React.createElement(VoiceCard, {
    item: v,
    base: BASE
  }))))));
}
function Gallery() {
  const imgs = [{
    src: 'leader-kids-peace.jpg',
    cls: 'tall'
  }, {
    src: 'forest-two-girls.jpg',
    cls: ''
  }, {
    src: 'marine-kayak-lake.jpg',
    cls: 'wide'
  }, {
    src: 'group-silhouette-hands.jpg',
    cls: ''
  }, {
    src: 'river-group-waterfall.jpg',
    cls: ''
  }, {
    src: 'campfire-night.jpg',
    cls: 'wide'
  }, {
    src: 'marine-kayak-beach.jpg',
    cls: ''
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "gallery",
    id: "gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u6D3B\u52D5\u5199\u771F\u30AE\u30E3\u30E9\u30EA\u30FC")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title reveal",
    style: {
      marginTop: '14px'
    }
  }, "\u8A00\u8449\u3088\u308A\u3001\u3053\u306E\u8868\u60C5\u3092\u898B\u3066\u307B\u3057\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "gal reveal"
  }, imgs.map((im, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    className: im.cls,
    src: BASE + im.src,
    alt: ""
  })))));
}
function Apply() {
  return /*#__PURE__*/React.createElement("section", {
    className: "apply",
    id: "apply"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center sec-head-center reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "\u5FDC\u52DF\u306E\u6D41\u308C"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "\u5FDC\u52DF\u306F\u304B\u3093\u305F\u3093\u30024\u30B9\u30C6\u30C3\u30D7\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "\u300C\u3061\u3087\u3063\u3068\u6C17\u306B\u306A\u308B\u300D\u3067\u5927\u4E08\u592B\u3002\u307E\u305A\u306F\u8A71\u3092\u805E\u304D\u306B\u6765\u3066\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i
  }, /*#__PURE__*/React.createElement(StepCard, {
    idx: i + 1,
    item: s
  }))))));
}
function Requirements() {
  return /*#__PURE__*/React.createElement("section", {
    className: "info",
    id: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u52DF\u96C6\u8981\u9805")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title reveal",
    style: {
      marginTop: '14px'
    }
  }, "\u52DF\u96C6\u306E\u6982\u8981"), /*#__PURE__*/React.createElement("dl", {
    className: "req reveal"
  }, REQS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "req-row",
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, r.dt), /*#__PURE__*/React.createElement("dd", null, r.dd))))));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "faq",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center sec-head-center reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "\u3088\u304F\u3042\u308B\u8CEA\u554F"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: '14px'
    }
  }, "\u4E0D\u5B89\u306A\u3053\u3068\u3001", /*#__PURE__*/React.createElement("br", null), "\u5148\u306B\u89E3\u6D88\u3057\u3066\u304A\u304D\u307E\u3057\u3087\u3046\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: f.q,
    open: open === i,
    onToggle: next => setOpen(next ? i : -1)
  }, f.a)))));
}
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band reveal"
  }, /*#__PURE__*/React.createElement("h2", null, "\u3053\u306E\u590F\u3001\u5B50\u3069\u3082\u305F\u3061\u3068\u4E00\u7DD2\u306B", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "\u6700\u9AD8\u306E\u6570\u65E5\u9593"), "\u3092\u3064\u304F\u308A\u307E\u305B\u3093\u304B\uFF1F"), /*#__PURE__*/React.createElement("p", null, "\u5FDC\u52DF\u3082\u3001\u76F8\u8AC7\u3082\u3001\u307E\u305A\u306F\u4E00\u6B69\u304B\u3089\u3002\u3042\u306A\u305F\u304B\u3089\u306E\u9023\u7D61\u3092\u3001\u5FC3\u304B\u3089\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "cta-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "red",
    size: "lg",
    href: "#",
    iconRight: "\u2192"
  }, "\u30EA\u30FC\u30C0\u30FC\u306B\u5FDC\u52DF\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: "tel:0429395051"
  }, "\uD83D\uDCDE 04-2939-5051"))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    className: "contact-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-head"
  }, /*#__PURE__*/React.createElement("h3", null, "\u57FC\u7389YMCA\uFF08\u6240\u6CA2\u30BB\u30F3\u30BF\u30FC\uFF09"), /*#__PURE__*/React.createElement("p", {
    className: "cc-sub"
  }, "\u62C5\u5F53\uFF1A\u798F\u7530\uFF08\u3075\u304F\u3060\uFF09\u30FB\u685C\u4E95\uFF08\u3055\u304F\u3089\u3044\uFF09")), /*#__PURE__*/React.createElement("div", {
    className: "cc-grid"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cc-item",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, "\u2709 Mail"), /*#__PURE__*/React.createElement("span", {
    className: "cc-value"
  }, "tokorozawa@saitamaymca.org"), /*#__PURE__*/React.createElement("span", {
    className: "cc-note"
  }, "24\u6642\u9593\u53D7\u4ED8\u30FB\u304A\u6C17\u8EFD\u306B\u3069\u3046\u305E")), /*#__PURE__*/React.createElement("a", {
    className: "cc-item",
    href: "tel:0429395051"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, "\u260E Tel"), /*#__PURE__*/React.createElement("span", {
    className: "cc-value"
  }, "04-2939-5051"), /*#__PURE__*/React.createElement("span", {
    className: "cc-note"
  }, "\u5E73\u65E5 10:00\u301C18:00")), /*#__PURE__*/React.createElement("div", {
    className: "cc-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, "\uD83D\uDCCD Access"), /*#__PURE__*/React.createElement("span", {
    className: "cc-value"
  }, "\u3012359-1141", /*#__PURE__*/React.createElement("br", null), "\u57FC\u7389\u770C\u6240\u6CA2\u5E02\u5C0F\u624B\u6307\u753A1-39-2"), /*#__PURE__*/React.createElement("span", {
    className: "cc-note"
  }, "\u897F\u6B66\u6C60\u888B\u7DDA\u300C\u5C0F\u624B\u6307\u99C5\u300D\u5317\u53E3\u304B\u3089\u5F92\u6B697\u5206"))))));
}
function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, {
    base: BASE
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Camps, null), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(Schedule, null), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Apply, null), /*#__PURE__*/React.createElement(Requirements, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.RecruitApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saitama-recruit/recruit-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saitama-recruit/recruit-parts.jsx
try { (() => {
/* Saitama YMCA Recruitment — shared data + composite parts.
   Composites are product-specific pieces built FROM the design-system
   primitives (Button, Badge, Chip, Card, Eyebrow, FaqItem). */

const DS = window.YMCADesignSystem_0b190b;
const {
  Button,
  Badge,
  Chip,
  Card,
  Eyebrow
} = DS;

/* ---------------- data ---------------- */
const CAMPS = [{
  tone: 'forest',
  cat: '森のキャンプ',
  title: 'わくわくキャンプ',
  place: '名栗げんきプラザ（埼玉県飯能市）',
  date: '7月19日(日)〜20日(月)・1泊2日',
  img: 'forest-bamboo-craft.jpg',
  desc: '緑あふれる自然の中で、川遊びや野外炊事、ゲームを思いきり楽しむ入門キャンプ。夏のはじまりにぴったりの2日間です。',
  meta: ['自然体験', '野外炊事', '1泊2日']
}, {
  tone: 'sea',
  cat: '海のキャンプ',
  title: 'マリンキャンプ',
  place: '三浦YMCA（神奈川県三浦）',
  date: '8月9日(日)〜11日(火)・2泊3日',
  img: 'marine-snorkel.jpg',
  desc: '海を舞台にカヌーや磯遊びなど、ダイナミックな海のアクティビティに挑戦。波の音の中で過ごす3日間。',
  meta: ['カヌー', '磯遊び', '2泊3日']
}, {
  tone: 'sun',
  cat: '英語のキャンプ',
  title: 'English Camp',
  place: 'YMCA東山荘（静岡県御殿場市）',
  date: '8月22日(土)〜24日(月)・2泊3日',
  img: 'river-group-waterfall.jpg',
  desc: '富士山のふもと・東山荘で、遊びながら英語にふれる体験型キャンプ。「伝わった！」のうれしさを子どもたちと。',
  meta: ['英語', '体験型', '2泊3日']
}, {
  tone: 'smile',
  cat: 'みんなのキャンプ',
  title: 'Big Smile キャンプ',
  place: '三浦YMCA（神奈川県三浦）',
  date: '8月9日(日)〜11日(火)・2泊3日',
  img: 'marine-kayak-beach.jpg',
  desc: '発達課題のある子どもたちが対象のキャンプ。一人ひとりのペースに寄り添いながら、海の体験を楽しみます。',
  meta: ['インクルーシブ', '少人数', '2泊3日']
}, {
  tone: 'adventure',
  cat: '冒険のキャンプ',
  title: '冒険キャンプ',
  place: 'YMCA東山荘（静岡県御殿場市）',
  date: '8月23日(日)〜25日(火)・2泊3日',
  img: 'river-play-wide.jpg',
  desc: '子ども食堂に通う子どもたちが対象。富士山のふもとで自然に挑戦し、仲間とのつながりの中で忘れられない夏を。',
  meta: ['自然挑戦', '仲間づくり', '2泊3日']
}];
const BENEFITS = [{
  n: '01',
  h: '一生ものの仲間',
  p: '同じ夏を本気で過ごした仲間。学部も大学も学年も違う友人とのつながりが、ここから生まれます。'
}, {
  n: '02',
  h: '“伝える力”が育つ',
  p: '年齢も背景も違う子どもと向き合う中で、相手の立場で考え、伝える力が自然と身につきます。'
}, {
  n: '03',
  h: '子どもの成長に立ち会える',
  p: '「できた！」の瞬間や、最終日の涙。子どもの成長のいちばん近くにいられます。'
}, {
  n: '04',
  h: '安全・救急の学び',
  p: '充実した事前研修で、野外活動の知識や安全管理、応急対応を基礎から学べます。'
}, {
  n: '05',
  h: '自分自身の成長',
  p: '多くのリーダーが口にする「自分も成長できた」。困難を仲間と乗り越えた経験が力になります。'
}, {
  n: '06',
  h: '社会につながる経験',
  p: 'チームで企画・準備・運営をやりきる経験は、就職活動やその先の人生でも大きな財産に。'
}];
const SCHEDULE = [{
  t: '7:00',
  h: '起床・朝のつどい',
  p: 'みんなで体を動かして一日のスタート。'
}, {
  t: '9:30',
  h: 'メインプログラム',
  p: 'カヌーや野外炊事など、その日の活動へ。'
}, {
  t: '12:30',
  h: 'お昼ごはん',
  p: 'たくさん動いた後は、みんなで食事。'
}, {
  t: '15:00',
  h: 'グループタイム',
  p: 'ふりかえりや自由時間。子どもとゆっくり。'
}, {
  t: '19:30',
  h: 'ナイトプログラム',
  p: 'キャンプファイヤーや星空観察。一日のハイライト。'
}];
const VOICES = [{
  p: '最初は不安でしたが、子どもの「リーダー大好き！」のひと言で全部報われました。今では夏がいちばん待ち遠しいです。',
  name: 'みなみ',
  role: '大学2年・3年目リーダー',
  ava: 'leader-kids-peace.jpg'
}, {
  p: '人前で話すのが苦手だったけれど、子どもと向き合ううちに自然と話せるように。就活でも自信を持って話せました。',
  name: 'たくみ',
  role: '大学3年・2年目リーダー',
  ava: 'leader-portrait-kids.jpg'
}, {
  p: '学校も学年も違う仲間と、本気で同じ夏を過ごす。こんな経験、ほかにありません。一生の友達ができました。',
  name: 'さくら',
  role: '専門学校1年・1年目リーダー',
  ava: 'camp-group-bench.jpg'
}];
const STEPS = [{
  h: 'エントリー',
  p: 'フォームまたはお電話で「気になる」を送ってください。'
}, {
  h: '説明会・面談',
  p: '活動内容やキャンプについて、ざっくばらんにお話しします。'
}, {
  h: '事前研修',
  p: '安全管理や子どもとの関わり方を仲間と一緒に学びます。'
}, {
  h: 'キャンプ本番',
  p: '子どもたちと最高の数日間を。あなたの夏が始まります。'
}];
const FAQS = [{
  q: '知識や経験がなくても大丈夫ですか？',
  a: 'はい。多くのリーダーが未経験から始めています。事前研修で、野外活動や安全管理の基礎からていねいに学べます。'
}, {
  q: '運動やアウトドアが苦手でも参加できますか？',
  a: '問題ありません。技術よりも、子どもと一緒に楽しむ気持ちがいちばん大切です。'
}, {
  q: 'すべてのキャンプに参加が必要ですか？',
  a: 'いいえ。気になるキャンプを選んで応募できます。スケジュールに合わせて参加してください。'
}, {
  q: '費用はかかりますか？',
  a: 'リーダーとして参加する際の当日の費用負担はありません（参加費0円）。研修も無料です。'
}, {
  q: '友達と一緒に応募できますか？',
  a: 'もちろんです。お一人でも、お友達とでも歓迎します。多くの仲間がここで出会っています。'
}];
const REQS = [{
  dt: '募集対象',
  dd: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "18\u6B73\u4EE5\u4E0A"), "\u306E\u3001\u4E3B\u306B\u5B66\u751F\u306E\u65B9\u3002\u77E5\u8B58\u3084\u7D4C\u9A13\u306F\u554F\u3044\u307E\u305B\u3093\u3002\u300C\u5B50\u3069\u3082\u3068\u4E00\u7DD2\u306B\u697D\u3057\u307F\u305F\u3044\u300D\u3068\u3044\u3046\u610F\u6B32\u306E\u3042\u308B\u65B9\u3092\u6B53\u8FCE\u3057\u307E\u3059\u3002")
}, {
  dt: '活動内容',
  dd: '夏のデイキャンプ・宿泊キャンプでのグループ運営、安全管理、子どもたちのサポート。'
}, {
  dt: '事前研修',
  dd: '安全管理・救急法・プログラム研修を実施。未経験の方も安心してご参加いただけます。'
}, {
  dt: '参加費用',
  dd: /*#__PURE__*/React.createElement(React.Fragment, null, "\u30EA\u30FC\u30C0\u30FC\u306E\u5F53\u65E5\u8CBB\u7528\u8CA0\u62C5\u306F", /*#__PURE__*/React.createElement("b", null, "0\u5186"), "\u3002\u4EA4\u901A\u8CBB\u7B49\u306E\u8A73\u7D30\u306F\u8AAC\u660E\u4F1A\u3067\u3054\u6848\u5185\u3057\u307E\u3059\u3002")
}, {
  dt: '応募方法',
  dd: '応募フォーム、またはお電話・メールにてお気軽にお問い合わせください。'
}];

/* ---------------- composite parts ---------------- */

function NavBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "y"
  }, "YMCA"), /*#__PURE__*/React.createElement("b", null, "\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u30EA\u30FC\u30C0\u30FC\u52DF\u96C6")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "\u30EA\u30FC\u30C0\u30FC\u3068\u306F"), /*#__PURE__*/React.createElement("a", {
    href: "#camps"
  }, "\u3053\u306E\u590F\u306E\u30AD\u30E3\u30F3\u30D7"), /*#__PURE__*/React.createElement("a", {
    href: "#benefits"
  }, "\u5F97\u3089\u308C\u308B\u3082\u306E"), /*#__PURE__*/React.createElement("a", {
    href: "#voices"
  }, "\u30EA\u30FC\u30C0\u30FC\u306E\u58F0"), /*#__PURE__*/React.createElement("a", {
    href: "#apply"
  }, "\u5FDC\u52DF\u306E\u6D41\u308C"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "red",
    size: "sm",
    href: "#contact"
  }, "\u5FDC\u52DF\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"))));
}
function Hero({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: base + 'camp-group-bench.jpg',
    alt: "\u30AD\u30E3\u30F3\u30D7\u3092\u697D\u3057\u3080\u5B50\u3069\u3082\u305F\u3061\u3068\u30EA\u30FC\u30C0\u30FC"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "\u57FC\u7389YMCA \u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u30EA\u30FC\u30C0\u30FC\u52DF\u96C6 \uFF5C 2026 SUMMER"), /*#__PURE__*/React.createElement("h1", null, "\u3053\u306E\u590F\u3001\u5B50\u3069\u3082\u305F\u3061\u306E", /*#__PURE__*/React.createElement("br", null), "\u300C\u5FC3\u306E", /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "\u30EA\u30FC\u30C0\u30FC"), "\u300D\u306B\u306A\u308D\u3046\u3002"), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "\u6559\u3048\u308B\u3067\u3082\u3001\u5F15\u3063\u5F35\u308B\u3067\u3082\u306A\u304F\u3002\u3068\u306A\u308A\u3067\u4E00\u7DD2\u306B\u7B11\u3063\u3066\u3001\u3068\u304D\u3069\u304D\u6CE3\u3044\u3066\u3001\u540C\u3058\u666F\u8272\u306B\u611F\u52D5\u3059\u308B\u3002\u5B50\u3069\u3082\u3068\u3042\u306A\u305F\u304C\u3001\u4E00\u7DD2\u306B\u5927\u304D\u304F\u306A\u308B\u590F\u304C\u3053\u3053\u306B\u3042\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "red",
    size: "md",
    href: "#contact",
    iconRight: "\u2192"
  }, "\u30EA\u30FC\u30C0\u30FC\u306B\u5FDC\u52DF\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    href: "#camps"
  }, "\u3053\u306E\u590F\u306E\u30AD\u30E3\u30F3\u30D7\u3092\u898B\u308B")), /*#__PURE__*/React.createElement("div", {
    className: "hero-facts"
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "dark",
    lead: "18\u6B73\u301C"
  }, "\u4E3B\u306B\u5B66\u751F"), /*#__PURE__*/React.createElement(Chip, {
    tone: "dark",
    lead: "\u7D4C\u9A13\u4E0D\u554F"
  }, "\u7814\u4FEE\u3042\u308A"), /*#__PURE__*/React.createElement(Chip, {
    tone: "dark",
    lead: "\u53C2\u52A0\u8CBB0\u5186"
  }, "\u5F53\u65E5\u306E\u8CBB\u7528\u8CA0\u62C5\u306A\u3057"))), /*#__PURE__*/React.createElement("svg", {
    className: "wave",
    viewBox: "0 0 1440 60",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#FFF9F2",
    d: "M0,40 C240,68 480,12 720,28 C960,44 1200,68 1440,36 L1440,60 L0,60 Z"
  })));
}
function CampCard({
  camp,
  base
}) {
  return /*#__PURE__*/React.createElement(Card, {
    as: "article",
    tone: "default",
    interactive: true,
    className: "camp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "camp-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "camp-badge-pos"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: camp.tone,
    shadow: true
  }, camp.cat)), /*#__PURE__*/React.createElement("img", {
    src: base + camp.img,
    alt: camp.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "camp-date"
  }, "\uD83D\uDCC5 ", camp.date)), /*#__PURE__*/React.createElement("div", {
    className: "camp-body"
  }, /*#__PURE__*/React.createElement("h3", null, camp.title), /*#__PURE__*/React.createElement("p", {
    className: "camp-place"
  }, "\uD83D\uDCCD ", camp.place), /*#__PURE__*/React.createElement("p", {
    className: "camp-desc"
  }, camp.desc), /*#__PURE__*/React.createElement("div", {
    className: "camp-meta"
  }, camp.meta.map((m, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    tone: "light"
  }, m)))));
}
function BenefitCard({
  item
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    interactive: true,
    className: "ben"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, item.n), /*#__PURE__*/React.createElement("h3", null, item.h), /*#__PURE__*/React.createElement("p", null, item.p));
}
function VoiceCard({
  item,
  base
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    className: "voice"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark",
    "aria-hidden": "true"
  }, "\u201D"), /*#__PURE__*/React.createElement("p", null, item.p), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ava",
    src: base + item.ava,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, item.name), /*#__PURE__*/React.createElement("small", null, item.role))));
}
function StepCard({
  idx,
  item
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, idx), /*#__PURE__*/React.createElement("h4", null, item.h), /*#__PURE__*/React.createElement("p", null, item.p));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 \u57FC\u7389YMCA\u3000\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u30EA\u30FC\u30C0\u30FC\u52DF\u96C6 2026 Summer")));
}
Object.assign(window, {
  RECRUIT_DATA: {
    CAMPS,
    BENEFITS,
    SCHEDULE,
    VOICES,
    STEPS,
    FAQS,
    REQS
  },
  NavBar,
  Hero,
  CampCard,
  BenefitCard,
  VoiceCard,
  StepCard,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saitama-recruit/recruit-parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Card = __ds_scope.Card;

})();
