/* ============================================================
   埼玉YMCA サマーキャンプ募集 — 保護者向けランディングページ
   レイアウト/セクションのみ。色・型・余白はデザイントークンに準拠。
   ============================================================ */

/* ============================================================
   水色（ブランディング・サポートカラー）基調
   リーダー募集ページのネイビー基調と差別化するため、
   セマンティックな「青」をアクア／スカイ系に置き換える。
   見出し・濃色セクション・ヒーロー・フッターまで一括で変わる。
   ============================================================ */
:root {
  --ymca-blue: #0098D8;        /* 鮮やかな水色（ビビッド・スカイ）：白文字も載る */
  --ymca-blue-deep: #0079B0;   /* フッター等の最濃 */
  --ymca-blue-soft: #E1F4FD;   /* 水色の淡いサーフェス */
  --aqua-bright: #38C3F0;      /* 明るい水色アクセント */
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--cream);
  line-height: var(--lh-body);
  -webkit-font-smoothing: antialiased;
  text-wrap: pretty;
}
h1, h2, h3, h4 { font-family: var(--font-heading); line-height: var(--lh-heading); margin: 0; font-weight: var(--fw-black); letter-spacing: var(--ls-normal); }
p { margin: 0; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }

.wrap { max-width: var(--wrap-max); margin: 0 auto; padding: 0 var(--wrap-pad); }
.center { text-align: center; }
section { padding: var(--section-y) 0; }

.sec-title { font-size: var(--fs-h2-fluid); color: var(--ymca-blue); line-height: 1.3; }
.sec-lead { color: var(--ink-soft); font-size: var(--fs-body-lg); max-width: 700px; margin-top: 18px; font-weight: var(--fw-medium); }
.sec-head-center { max-width: 760px; margin: 0 auto; }
.sec-head-center .sec-lead { margin-left: auto; margin-right: auto; }

/* ---- header / nav ---- */
.nav { position: sticky; top: 0; z-index: 50; background: rgba(255,249,242,.84); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
.nav-inner { display: flex; align-items: center; gap: 24px; height: 70px; }
.nav-logo { display: flex; align-items: baseline; gap: 10px; }
.nav-logo .y { font-family: var(--font-heading); font-weight: 900; font-size: 22px; color: var(--ymca-red); letter-spacing: .02em; }
.nav-logo b { font-family: var(--font-heading); font-weight: 700; font-size: 15px; color: var(--ymca-blue); white-space: nowrap; }
.nav-links { display: flex; flex: 1; justify-content: center; gap: 24px; font-size: 14.5px; font-weight: 700; color: var(--ymca-blue); }
.nav-links a { position: relative; padding: 4px 0; transition: color .2s; white-space: nowrap; }
.nav-links a:hover { color: var(--ymca-red); }
.nav-right { margin-left: auto; }
@media (max-width: 1080px) { .nav-links { display: none; } .nav-right { margin-left: auto; } }

/* ---- hero ---- */
.hero { position: relative; overflow: hidden; background: var(--ymca-blue); }
.hero-media { position: absolute; inset: 0; }
.hero-photo { position: absolute; inset: 0; }
.hero-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 62% 38%; }
.hero-photo-bg { width: 100%; height: 100%; background-repeat: no-repeat; }
.hero-overlay { position: absolute; inset: 0; }
.hero-inner { position: relative; z-index: 2; padding: 104px 0 116px; width: 100%; }
.hero-kicker { display: inline-flex; align-items: center; gap: 10px; color: #fff; font-weight: 700; font-size: 13.5px; letter-spacing: var(--ls-kicker); background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.30); padding: 8px 16px; border-radius: var(--radius-pill); margin-bottom: 26px; }
.hero-kicker .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ymca-red); box-shadow: 0 0 0 4px rgba(213,0,50,.3); }
.hero h1 { color: #fff; font-size: var(--fs-hero-fluid); line-height: 1.2; letter-spacing: .005em; text-shadow: 0 4px 24px rgba(0,0,0,.28); max-width: 16em; }
.hero h1 .mark { color: var(--hero-mark, var(--accent-yellow)); }
.mob { display: none; }
@media (max-width: 560px) { .mob { display: inline; } }
.hero-sub { color: rgba(255,255,255,.93); font-size: clamp(16px,1.7vw,19px); font-weight: 500; max-width: 600px; margin-top: 24px; text-shadow: 0 2px 14px rgba(0,0,0,.25); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 38px; }
.hero-facts { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 42px; }
.wave { display: block; width: 100%; height: 64px; margin-top: -1px; }
.wave-fill { fill: var(--ymca-blue); }

/* ---- hero: 白背景モード（黒文字＋黄色アクセント） ---- */
.hero--light { background: var(--white); }
.hero--light .hero-inner { padding: 72px 0 92px; }
.hero--light .hero-kicker { color: var(--ymca-blue); background: var(--ymca-blue-soft); border-color: transparent; }
.hero--light h1 { color: var(--ink); text-shadow: none; }
.hero--light .hero-sub { color: var(--ink-soft); text-shadow: none; }
.hero--light .wave-fill { fill: var(--ymca-blue); }

/* ---- hero: 光モード（写真は上部バンド、文字は下の明るい帯に） ---- */
.hero--airy { background: var(--white); display: flex; flex-direction: column; }
.hero--airy .hero-media { position: relative; inset: auto; height: 58vh; min-height: 430px; flex: none; }
.hero--airy .hero-photo img { filter: brightness(1.1) saturate(.96) contrast(.96); }
.hero--airy .hero-inner { padding: 44px 0 60px; }
.hero--airy .hero-overlay {
  background:
    linear-gradient(to top, var(--white) 0%, rgba(255,255,255,.45) 12%, rgba(255,255,255,0) 30%),
    linear-gradient(to bottom, rgba(255,255,255,.30) 0%, rgba(255,255,255,0) 26%);
}
.hero--airy .hero-kicker { color: var(--ymca-blue); background: rgba(255,255,255,.78); border-color: rgba(255,255,255,.9); }
.hero--airy h1 { color: var(--ink); text-shadow: 0 2px 22px rgba(255,255,255,.7); }
.hero--airy h1 .mark { color: var(--ymca-blue); }
.hero--airy .hero-sub { color: var(--ink-soft); text-shadow: 0 1px 14px rgba(255,255,255,.7); }
.hero--airy .wave-fill { fill: var(--ymca-blue); }

/* ---- intro / pillars (soft tint) ---- */
.intro { background: var(--ymca-blue-soft); color: var(--ink); }
.intro .sec-title { color: var(--ymca-blue); }
.intro-lead { color: var(--ink-soft); font-size: var(--fs-body-lg); font-weight: 500; max-width: 760px; margin: 18px auto 0; }
.pillars { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 56px; align-items: stretch; }
.pillars > .reveal { display: flex; }
.pillar { position: relative; width: 100%; height: 100%; }
.pillar .pn { font-family: var(--font-heading); font-weight: 900; font-size: 14px; color: var(--ymca-red); letter-spacing: .08em; margin-bottom: 12px; }
.pillar .pico { font-size: 30px; line-height: 1; margin-bottom: 14px; }
.pillar h3 { font-size: 20px; color: var(--ymca-blue); margin: 0 0 10px; }
.pillar p { font-size: 14.5px; color: var(--ink-soft); font-weight: 500; line-height: 1.75; }
.intro-foot { margin-top: 48px; text-align: center; }
.intro-foot .iff-lead { display: block; color: var(--ink-soft); font-size: 15px; font-weight: 500; margin-bottom: 8px; }
.intro-foot .iff-mark { display: block; font-family: var(--font-heading); font-weight: 900; color: var(--ymca-blue); font-size: var(--fs-h2-fluid); line-height: 1.2; letter-spacing: .01em; }
.intro-foot .iff-sub { display: block; color: var(--ink-soft); font-size: 15px; font-weight: 500; margin-top: 12px; }

/* ---- lineup (camps overview) ---- */
.lineup { background: linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%); }
.lineup-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--gap-card); margin-top: 52px; align-items: stretch; }
.lineup-grid > .reveal { display: flex; }
.camp { overflow: hidden; padding: 0; display: flex; flex-direction: column; width: 100%; height: 100%; }
.camp-img { height: 196px; position: relative; }
.camp-img img { width: 100%; height: 100%; object-fit: cover; }
.camp-img-bg { width: 100%; height: 100%; background-repeat: no-repeat; }
.camp-badge-pos { position: absolute; top: 14px; left: 14px; z-index: 3; }
.camp-img.badge-right .camp-badge-pos { left: auto; right: 14px; }
.camp-img.badge-right .camp-nights { right: auto; left: 14px; }
.camp-img.badge-bottom .camp-badge-pos { top: auto; bottom: 46px; left: 14px; }
.camp-nights { position: absolute; top: 14px; right: 14px; z-index: 2; background: rgba(255,255,255,.95); color: var(--ymca-blue); font-family: var(--font-heading); font-weight: 900; font-size: 12.5px; padding: 5px 12px; border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.camp-date { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; color: #fff; font-weight: 700; font-size: 14px; padding: 34px 16px 12px; background: linear-gradient(transparent, rgba(0,0,0,.62)); }
.camp-body { padding: 22px 24px 24px; display: flex; flex-direction: column; flex: 1; }
.camp-body h3 { font-size: 24px; color: var(--ymca-blue); margin: 0 0 8px; }
.camp-place { font-weight: 700; font-size: 13.5px; color: var(--ink-soft); margin-bottom: 14px; }
.camp-desc { font-size: 14.5px; color: var(--ink-soft); font-weight: 500; flex: 1; line-height: 1.78; }
.camp-stats { display: flex; gap: 10px; margin: 18px 0 16px; }
.camp-stat { flex: 1; background: var(--cream); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 10px 12px; }
.camp-stat .k { display: block; font-size: 11.5px; color: var(--ink-soft); font-weight: 700; margin-bottom: 3px; }
.camp-stat .v { display: block; font-family: var(--font-heading); font-weight: 900; font-size: 15px; color: var(--ymca-blue); line-height: 1.3; white-space: nowrap; }
.camp-cta { margin-top: auto; }

/* ---- camp detail ---- */
.cdetail { border-top: 1px solid var(--line); }
.cdetail.bg-cream { background: var(--cream); }
.cdetail.bg-white { background: var(--white); }
.cdetail-head { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 8px; }
.cdetail-head .ctitle { font-size: clamp(26px, 3.2vw, 38px); color: var(--ymca-blue); }
.cdetail-catch { font-family: var(--font-heading); font-weight: 900; font-size: clamp(18px,2vw,23px); line-height: 1.5; margin: 14px 0 0; }
.cdetail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--gap-loose); align-items: start; margin-top: 40px; }
.cdetail-photo { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
.cdetail-points { margin-top: 22px; display: flex; flex-direction: column; gap: 12px; }
.cpoint { display: flex; gap: 12px; align-items: flex-start; }
.cpoint .ci { flex: none; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; font-weight: 900; margin-top: 2px; }
.cpoint p { font-size: 14.5px; color: var(--ink-soft); font-weight: 500; line-height: 1.7; }
.cpoint b { color: var(--ink); font-weight: 700; }

/* requirements table inside detail */
.creq { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); background: #fff; }
.creq-row { display: grid; grid-template-columns: 116px 1fr; border-bottom: 1px solid var(--line); }
.creq-row:last-child { border-bottom: none; }
.creq-row dt { background: var(--cream); font-family: var(--font-heading); font-weight: 700; color: var(--ymca-blue); padding: 15px 18px; font-size: 13.5px; margin: 0; display: flex; align-items: center; }
.creq-row dd { padding: 15px 18px; margin: 0; font-size: 14.5px; color: var(--ink); font-weight: 600; line-height: 1.6; }
.creq-row dd .fee-sub { display: block; font-weight: 500; color: var(--ink-soft); font-size: 12.5px; margin-top: 3px; }
.creq-row dd b { color: var(--ymca-red); font-weight: 900; }
.cnote { display: flex; gap: 10px; margin-top: 16px; background: var(--ymca-red-soft); border: 1px solid #f3c9d3; border-radius: var(--radius-sm); padding: 14px 16px; font-size: 13px; color: var(--ymca-red-deep); font-weight: 600; line-height: 1.65; }
.cnote .cni { flex: none; }

/* schedule timeline (per camp) */
.cschedule { margin-top: 44px; }
.csch-label { font-family: var(--font-heading); font-weight: 900; color: var(--ymca-blue); font-size: 17px; margin-bottom: 4px; }
.csch-sub { font-size: 12.5px; color: var(--ink-soft); font-weight: 500; margin-bottom: 22px; }
.csch-days { display: grid; gap: 18px; }
.csch-days.d2 { grid-template-columns: repeat(2,1fr); }
.csch-days.d3 { grid-template-columns: repeat(3,1fr); }
.cday { background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 20px 22px 22px; box-shadow: var(--shadow-sm); }
.cday-h { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px dashed var(--line); }
.cday-n { font-family: var(--font-heading); font-weight: 900; color: #fff; width: 30px; height: 30px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 14px; flex: none; }
.cday-h b { font-family: var(--font-heading); font-weight: 900; color: var(--ymca-blue); font-size: 14.5px; }
.cstep { display: flex; gap: 12px; padding: 6px 0; }
.cstep .ct { flex: none; width: 50px; font-family: var(--font-heading); font-weight: 900; font-size: 12.5px; color: var(--ymca-red); padding-top: 1px; }
.cstep .cd { font-size: 13.5px; color: var(--ink); font-weight: 600; line-height: 1.55; }
.cstep.hi .cd { color: var(--ymca-blue); }
.cstep.hi .cd .tag { display: inline-block; font-size: 11px; font-weight: 900; color: #fff; padding: 1px 7px; border-radius: 999px; margin-left: 0; }

/* ---- prepare (持ち物・準備) ---- */
.prepare { background: linear-gradient(180deg, var(--cream-2), var(--cream)); }
.prep-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: var(--gap-loose); align-items: stretch; margin-top: 48px; }
.prep-list-card { padding: 30px 32px; }
.prep-list-card h3 { color: var(--ymca-blue); font-size: 20px; margin: 0 0 18px; }
.checklist { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px 24px; }
.check { display: flex; gap: 10px; align-items: center; font-size: 14.5px; color: var(--ink); font-weight: 600; }
.check .cb { flex: none; width: 22px; height: 22px; border-radius: 7px; background: var(--camp-forest); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; }
.prep-note { margin-top: 20px; font-size: 13px; color: var(--ink-soft); font-weight: 500; line-height: 1.7; }
.prep-side { display: flex; flex-direction: column; gap: 18px; height: 100%; }
.prep-mini { display: flex; align-items: center; gap: 18px; flex: 1; padding: 22px 26px; }
.prep-mini .pm-icon { font-size: 32px; line-height: 1; margin: 0; flex: none; }
.prep-mini .pm-body { min-width: 0; }
.prep-mini h4 { color: var(--ymca-blue); font-size: 17px; margin: 0 0 7px; }
.prep-mini p { font-size: 13.5px; color: var(--ink-soft); font-weight: 500; line-height: 1.7; }
.prep-mini p b { color: var(--ymca-red); font-weight: 900; }

/* ---- voices ---- */
.voices { background: var(--ymca-blue-soft); }
.voice-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--gap-card); margin-top: 52px; align-items: stretch; }
.voice-grid > .reveal { display: flex; }
.voice { position: relative; display: flex; flex-direction: column; width: 100%; height: 100%; }
.voice .qmark { font-family: var(--font-heading); font-size: 60px; color: var(--cream-2); line-height: .7; font-weight: 900; position: absolute; top: 18px; right: 24px; }
.voice .stars { color: var(--accent-yellow); font-size: 15px; letter-spacing: 2px; margin-bottom: 12px; position: relative; z-index: 1; }
.voice p { font-size: 15px; color: var(--ink); font-weight: 500; position: relative; z-index: 1; margin-bottom: 22px; line-height: 1.85; flex: 1; }
.voice .who { display: flex; align-items: center; gap: 13px; }
.voice .ava { width: 48px; height: 48px; border-radius: 50%; flex: none; display: flex; align-items: center; justify-content: center; }
.voice .ava svg { display: block; }
.voice .who b { display: block; font-family: var(--font-heading); font-weight: 700; color: var(--ymca-blue); font-size: 15px; }
.voice .who small { color: var(--ink-soft); font-size: 13px; font-weight: 500; }

/* ---- gallery ---- */
.gallery { background: linear-gradient(180deg, var(--cream), var(--cream-2)); }
.gal { display: grid; grid-template-columns: repeat(4,1fr); grid-auto-rows: 150px; gap: 14px; margin-top: 48px; }
.gal img { width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md); }
.gal .tall { grid-row: span 2; }
.gal .wide { grid-column: span 2; }

/* ---- flow / steps ---- */
.flow { background: var(--white); }
.steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 52px; }
.step { position: relative; }
.step .n { width: 44px; height: 44px; border-radius: 14px; background: var(--ymca-red); color: #fff; font-family: var(--font-heading); font-weight: 900; font-size: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: var(--shadow-red); }
.step h4 { font-size: 18px; color: var(--ymca-blue); margin: 0 0 8px; }
.step p { font-size: 14px; color: var(--ink-soft); font-weight: 500; line-height: 1.7; }
.step::after { content: "›"; position: absolute; right: -16px; top: 28px; font-size: 28px; color: var(--ymca-red); font-weight: 900; z-index: 2; }
.step:last-child::after { display: none; }

/* ---- faq ---- */
.faq { background: linear-gradient(180deg, var(--cream-2), var(--cream)); }
.faq-list { max-width: 840px; margin: 48px auto 0; }
.faq-list > * + * { margin-top: 14px; }

/* ---- contact ---- */
.contact { background: var(--ymca-blue-soft); color: var(--ink); }
.cta-band { text-align: center; max-width: 780px; margin: 0 auto; }
.cta-band h2 { color: var(--ymca-blue); font-size: clamp(28px,4vw,46px); line-height: 1.3; }
.cta-band h2 .mark { color: var(--ymca-red); }
.cta-band p { color: var(--ink-soft); font-size: 17px; font-weight: 500; margin-top: 18px; }
.cta-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 16px; margin-top: 36px; }
.contact .contact-card { margin-top: 60px; padding: 30px 40px; background: var(--white); border: 1px solid var(--line); box-shadow: var(--shadow-md); }
.cc-head { text-align: center; margin-bottom: 20px; }
.contact-card h3 { color: var(--ymca-blue); font-size: 24px; margin: 0 0 6px; }
.cc-sub { color: var(--ink-soft); font-size: 14px; font-weight: 500; }
.cc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
.cc-grid-2 { grid-template-columns: repeat(2,1fr); max-width: 720px; margin: 0 auto; align-items: start; }
.cc-combined { display: flex; max-width: 820px; margin: 0 auto; background: var(--cream); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; }
.cc-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 18px 26px; transition: background .2s; }
.cc-col + .cc-col { border-left: 1px solid var(--line); }
a.cc-col:hover { background: var(--ymca-blue-soft); }
.cc-label { font-family: var(--font-heading); font-weight: 900; color: var(--ymca-red); font-size: 13.5px; }
.cc-value { color: var(--ink); font-size: 15px; font-weight: 700; line-height: 1.5; }
.cc-note { color: var(--ink-soft); font-size: 12.5px; font-weight: 500; margin-top: 2px; line-height: 1.5; }

.foot { background: var(--ymca-blue-deep); color: rgba(255,255,255,.7); padding: 30px 0; text-align: center; font-size: 13px; line-height: 1.9; }
.foot a { color: rgba(255,255,255,.85); text-decoration: underline; text-underline-offset: 3px; }

/* ---- reveal ---- */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s var(--ease-out), transform .7s var(--ease-out); }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* ---- responsive ---- */
@media (max-width: 960px) {
  .cdetail-grid { grid-template-columns: 1fr; gap: 36px; }
  .prep-grid { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 880px) {
  .pillars, .lineup-grid, .voice-grid { grid-template-columns: 1fr; }
  .csch-days.d3, .csch-days.d2 { grid-template-columns: 1fr; }
  .steps { grid-template-columns: repeat(2,1fr); }
  .step::after { display: none; }
  section { padding: var(--section-y-mobile) 0; }
  .gal { grid-auto-rows: 120px; }
}
@media (max-width: 560px) {
  .wrap { padding: 0 var(--wrap-pad-mobile); }
  .hero-inner { padding: 68px 0 76px; }
  .creq-row { grid-template-columns: 92px 1fr; }
  .checklist { grid-template-columns: 1fr; }
  .cc-grid { grid-template-columns: 1fr; }
  .gal { grid-template-columns: repeat(2,1fr); }
  .gal .wide, .gal .tall { grid-column: auto; grid-row: auto; }
}
