# YMCA Design System

A design system for **YMCA Japan**, expressed through **Saitama YMCA (埼玉YMCA)** — a 130+ year-old non-profit social-education and youth-development organisation. The YMCA operates in ~120 countries and regions worldwide; in Japan it spans 34 prefectures. The brand voice is one of long-standing public trust, warmth, and youth development.

This system reconciles two layers of the brand:

1. **The national VI (Visual Identity) standard** — the strict, VI-compliant brand: YMCA Red, YMCA Blue, the "Positive Y" logo, and the Source Han / Source Pro typefaces. Used for corporate and formal communication.
2. **The Saitama youth & camp expression** — the warmer, friendlier program voice seen on real surfaces like the volunteer-leader recruitment site: cream surfaces, rounded Zen typefaces, and a palette of camp-category accent colors.

Both are first-class here; semantic tokens default to the friendlier program voice, with the official families available as aliases.

---

## Source materials

These were provided when the system was built. The reader is **not** assumed to have access; they are recorded for provenance.

| Source | What it is |
|---|---|
| `uploads/VisualIdentityGuidelinesVer.1.0.1.pdf` | **Official national VI Guidelines** (Ver 1.0, 2017.08, 91pp). The authoritative source for brand concept, logo meaning, brand colors (with PANTONE/CMYK/sRGB values), typefaces, photography direction, and graphic patterns. |
| `uploads/YMCA BRAND BOOK.pdf` | Brand book (22pp, image-heavy). |
| `uploads/YMCA_brandconcept_A4.pdf` | One-page brand concept summary. |
| `uploads/_Actionbook2020.pdf` | Action book (2020). |
| `uploads/index.html` | A complete, production-quality **Saitama YMCA volunteer-leader recruitment landing page** (2026 summer). The primary reference for the program/camp expression — its CSS design system, layout patterns, copy voice, and embedded camp photography were all mined into this system. |

> **Note on fonts:** The CJK brand typefaces (源ノ角ゴシック / 源ノ角明朝) are multi-megabyte. Like the live site, we load them from **Google Fonts** (Noto Sans JP / Noto Serif JP, which are the same Source Han families), rather than shipping local binaries. See `tokens/fonts.css`.

> **⚠ Missing asset — the logo.** The official "Positive Y" brand mark could not be extracted from the PDFs in this environment, and we do not hand-draw trademarked logos. `guidelines/logo-lockup.card.html` shows a wordmark **stand-in**. **Please drop in the official master data** (`BrandLogo_1.png` / `.ai` etc. from the VI package) under `assets/logos/` and replace the placeholder.

---

## Brand foundation

- **Brand concept:** 「ポジティブネット」 *Positive Net* — a network connected by goodwill and a positive spirit, where people recognise and elevate one another.
- **Vision (three values):** みつかる *Encounter* ・ つながる *Connect* ・ よくなる *Transform* — "したい何かがみつかり、誰かとつながる。私がよくなる、かけがえのない場所。"
- **Personality:** 心をひらき、わかち合う。前向きで、まわりを惹きつける魅力を持つ。 (*Open & Sharing. Proactive & Attractive.*)
- **The logo ("Positive Y"):** a bird at the moment of taking flight, abstracted into a "Y", containing an inverted triangle for Spirit · Mind · Body. Soft curves + vivid red express life and hope.

---

## CONTENT FUNDAMENTALS — how YMCA writes

The program voice (camp / youth / volunteer surfaces) is the one most often authored against. It is:

- **Warm, second-person, invitational.** Speaks directly to the reader ("あなた"), often softly imperative: 「リーダーになろう。」「まずは話を聞きに来てください。」 Never corporate-distant.
- **Reassuring and low-pressure.** Pre-empts anxiety ("不安なこと、先に解消しておきましょう。"), normalises inexperience ("経験不問", "不安だったのは最初だけ"). Lowers the barrier to entry: 「ちょっと気になる」で大丈夫。
- **Emotionally concrete, not abstract.** Leads with sensory, human moments — "となりで一緒に笑って、ときどき泣いて、同じ景色に感動する。" Talks about 「できた！」の瞬間 and 最終日の涙 rather than "outcomes".
- **Reframes giving as mutual growth.** A signature YMCA move: 「ボランティアをしてあげた」ではなく「自分自身も成長できた」。"する側"と"される側"を超えて。
- **Plain, kind Japanese.** Short sentences. Soft hiragana for warmth (「ナナメの関係」「わくわく」). Polite ですます調 throughout. Avoids jargon and stiff officialese on program pages.
- **Headlines** are punchy and often two-part with a turn: 「あげるだけじゃない。あなたも、たくさん受け取る。」 Frequently use 「」 quotation brackets to spotlight a key phrase, and ★/emphasis on the pivotal idea (ナナメの関係 ★).
- **Casing & glyphs:** Japanese primary; Latin used sparingly for labels/section kickers (SUMMER, Mail, Tel, Access) and program names (English Camp, Big Smile キャンプ). Numerals are half-width.
- **Emoji:** used *lightly and functionally* on program pages — 📅 date, 📍 place, 📞 phone, ✉ mail — as wayfinding glyphs, never decoratively in body copy. Formal/corporate communications use **no emoji**.
- **Formal voice** (corporate, ceremonial, legal): switches to neutral gothic or mincho, full kanji, no emoji, restrained — 「公益財団法人」「希望ある豊かな社会を創る。」

The **formal corporate name** is 公益財団法人 (e.g. 公益財団法人 横浜YMCA); center/facility names lock up as e.g. "YMCA 山手台センター".

---

## VISUAL FOUNDATIONS

**Colors.** Two official brand colors do the heavy lifting: **YMCA Red `#D50032`** (PANTONE 199C — energy, life, the logo) and **YMCA Blue `#003A70`** (PANTONE 654C — trust, depth, used for dark sections, headings, and body of formal comms), on **White**. The program expression layers a **warm cream surface system** (`#FFF9F2` page, `#FBEFE2` sunken, `#EADDCD` hairlines, `#2A2622`/`#5B544D` ink) and a set of **camp-category accents** — forest green, sea blue, sun orange, smile pink, adventure teal — plus a **gold `#FFD23E`** highlight reserved for marks/kickers on navy. Imagery and accents skew warm; the only "cool" anchor is the navy.

**Type.** Display & headings use **Zen Maru Gothic** (rounded, friendly, almost always weight 900) — this rounding is core to the youthful warmth. Body uses **Zen Kaku Gothic New** at weight 500 with a generous **line-height 1.85** (essential for comfortable JP reading). Formal/corporate material uses **Noto Sans JP** (源ノ角ゴシック) and **Noto Serif JP** (源ノ角明朝). See `tokens/typography.css`.

**Backgrounds.** Alternating bands give rhythm: white → cream → **navy** (the recurring dark section for "what you get" / final CTA) → cream gradients. **Full-bleed photography** anchors the hero with a left-to-right navy gradient overlay (`rgba(0,42,82,.94)` → transparent) for text legibility. Section transitions sometimes use a single soft **SVG wave divider**. No noise/grain, no busy patterns; the VI does define optional graphic patterns but the web expression keeps surfaces clean.

**Imagery vibe.** Candid, natural-light, warm-toned documentary photography of children and leaders together — joyful faces, motion, close physical proximity (the "ナナメ" relationship made visible). Kids wear navy YMCA tees + red caps. Never staged stock; always "the moment". Slightly elevated saturation, warm white balance. Stored in `assets/photos/`.

**Corners & cards.** Generous radii: chips `8px`, inputs/meta `12px`, cards `18px`, feature cards & image frames `28px`, buttons fully pill (`999px`). The standard **card** is white, a `1px` warm hairline border (`#EADDCD`), and a **soft blue-tinted shadow** (`shadow-sm`) — never hard black shadows. A "key" card variant uses a subtle red-tinted gradient fill + red border for the one idea that matters. On navy, cards become translucent white (`rgba(255,255,255,.06)`) with a faint white border.

**Shadows.** Soft, long, and tinted toward YMCA Blue (`0 24px 60px -28px rgba(12,60,116,.35)`). Solid buttons get a **colored "lift" shadow in their own hue** (red buttons cast a red shadow).

**Borders.** Hairline `1px`/`1.5px`; warm cream-line on light, translucent white on dark. The section **eyebrow** is drawn with a short `22×3px` red rule before bold rounded text.

**Animation.** Restrained and friendly. Scroll-reveal: elements fade up `28px` over `0.7s` ease. Hover: cards **lift** (`translateY(-4px/-6px)`) and deepen their shadow; buttons lift and brighten their colored shadow. Press: a gentle `scale(.98)`. Easing is a soft ease-out `cubic-bezier(.22,1,.36,1)`. No bounces, no parallax, no infinite loops. Honor `prefers-reduced-motion`.

**Transparency & blur.** Sparingly: the sticky nav is `rgba(255,249,242,.82)` + `backdrop-filter: blur(12px)`; hero chips and dark-section cards use low-alpha white fills with thin white borders. Protection is via **gradient overlays** on photos (hero) and **solid pills/badges with drop-shadows** when a label sits on imagery.

**Layout.** Centered `1180px` max content width, `24px` side padding, `96px` vertical section rhythm (`56px` mobile). 3-up grids for cards, split (text | image) layouts at `~1.05fr .95fr`. The nav is the only fixed/sticky element.

---

## ICONOGRAPHY

The YMCA web expression is **deliberately icon-light** — it leans on photography, color, and type rather than an icon set. There is **no bundled icon font or SVG sprite** in the source.

- **Functional emoji as glyphs.** Program pages use a tiny, consistent set of emoji purely for wayfinding: 📅 (date), 📍 (place/access), 📞 (phone), ✉ (mail), ☎. Treat these as the de-facto "icons". Keep them functional, never decorative in prose.
- **Unicode arrows & marks** stand in for UI affordances: `→` on CTAs, `›` as a step chevron, `↕ ↔ ⤢` in the relationship diagram, `★` to mark the pivotal idea, `”` as an oversized quote mark on testimonials. The FAQ toggle is a **CSS-drawn plus/minus** (no icon asset) — see `FaqItem`.
- **No drawn/illustrative icons.** Don't introduce a generic icon library (Lucide/Heroicons/etc.) unless a future product genuinely needs one — it would read as off-brand against this photo-led, emoji-glyph style. If you must, pick a rounded, friendly set and flag the addition.
- **The one true graphic** is the "Positive Y" logo mark (currently a placeholder — see the note above). Do not recreate it by hand.

Formal/corporate communications use **no emoji and no decorative icons**.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest (for use in Claude Code).

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` — Google Fonts @import (Zen Maru Gothic, Zen Kaku Gothic New, Noto Sans/Serif JP, Source Sans/Serif).
- `colors.css` — brand core, camp accents, neutrals, semantic aliases.
- `typography.css` — font roles, type scale, weights, line-heights, letter-spacing.
- `spacing.css` — 4px spacing scale + layout (wrap width, section rhythm).
- `effects.css` — radii, shadows, borders, motion.

**`components/`** — reusable React primitives (compiled into the bundle)
- `buttons/` — **Button** (red / navy / ghost / outline; sm / md / lg) — *starting point*
- `labels/` — **Eyebrow**, **Badge** (camp categories), **Chip** (fact / meta)
- `surfaces/` — **Card** (default / flat / key / dark) — *starting point*
- `disclosure/` — **FaqItem** (accordion)

**`ui_kits/`** — full-screen product recreations
- `saitama-recruit/` — the **Volunteer Leader Recruitment** landing page, rebuilt from the design-system primitives. See its `README.md`. — *starting point*

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colors: brand, camp accents, neutrals. Type: display, body, official, scale. Spacing: scale, radii, shadows. Brand: logo lockup, photography, concept.

**`assets/photos/`** — 14 candid camp photographs (the brand photography reference), reused across cards and the UI kit.
