/* 埼玉YMCA サマーキャンプ募集 — セクション部品。
   デザインシステムのプリミティブ（Button / Badge / Chip / Card /
   Eyebrow / FaqItem）から組み立てた、ページ固有のパーツ。 */

const DS = window.YMCADesignSystem_0b190b;
const { Button, Badge, Chip, Card, Eyebrow, FaqItem } = DS;
const CD = window.CAMP_DATA;
const BASE = 'assets/photos/';

/* ---------------- nav ---------------- */
function NavBar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="nav-logo" href="#top">
          <span className="y">YMCA</span>
          <b>サマーキャンプ 2026</b>
        </a>
        <nav className="nav-links">
          <a href="#why">YMCAの理由</a>
          <a href="#camps">4つのキャンプ</a>
          <a href="#voices">保護者の声</a>
          <a href="#prepare">持ち物・準備</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <div className="nav-right">
          <Button variant="red" size="sm" href="#contact">お申し込み</Button>
        </div>
      </div>
    </header>);

}

/* ---------------- hero（3案切替 + 背景モード） ---------------- */
function Hero({ variant, markColor, overlay, bg }) {
  const v = variant;
  const a = overlay;
  const light = bg === '白';
  const airy = bg === '光';
  const lightText = light || airy;
  const grad = `linear-gradient(108deg, rgba(var(--hero-grad,0,90,135),${a}) 0%, rgba(var(--hero-grad,0,90,135),${(a * 0.72).toFixed(2)}) 45%, rgba(var(--hero-grad,0,90,135),${(a * 0.20).toFixed(2)}) 100%)`;
  const chipTone = lightText ? 'light' : 'dark';
  const cls = 'hero' + (light ? ' hero--light' : '') + (airy ? ' hero--airy' : '');
  return (
    <section className={cls} id="top" style={{ '--hero-mark': markColor }}>
      {!light &&
      <div className="hero-media">
          <div className="hero-photo">
            {v.zoom ?
          <div className="hero-photo-bg" style={{ backgroundImage: `url(${BASE + v.photo})`, backgroundSize: v.zoom, backgroundPosition: v.pos }}></div> :
          <img src={BASE + v.photo} alt="YMCAキャンプを楽しむ子どもたち" style={{ objectPosition: v.pos }} />}
          </div>
          <div className="hero-overlay" style={airy ? null : { background: grad }}></div>
        </div>
      }
      <div className="wrap hero-inner">
        <h1>{v.title}</h1>
        <p className="hero-sub">{v.sub}</p>
        <div className="hero-actions">
          <Button variant="red" size="md" href="#camps" iconRight="→">4つのキャンプを見る</Button>
          <Button variant={lightText ? 'outline' : 'ghost'} size="md" href="#contact">お申し込み・お問い合わせ</Button>
        </div>
      </div>
      <svg className="wave" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true"><path className="wave-fill" d="M0,40 C240,68 480,12 720,28 C960,44 1200,68 1440,36 L1440,0 L0,0 Z"></path></svg>
    </section>);

}

/* ---------------- intro / 3つの柱（navy） ---------------- */
function Intro() {
  return (
    <section className="intro" id="why">
      <div className="wrap">
        <div className="center sec-head-center reveal">
          <Eyebrow center>安心して送り出せる理由</Eyebrow>
          <h2 className="sec-title" style={{ marginTop: '14px' }}>YMCAのキャンプが、<br />選ばれてきたわけ。</h2>
          <p className="intro-lead">グループ活動・自然体験・環境教育を柱に、全人的なバランスの良い成長を目指して。
1920年から続く野外教育の積み重ねが、ここにあります。</p>
        </div>
        <div className="pillars">
          {CD.PILLARS.map((p, i) => <div className="reveal" key={i}>
              <Card tone="default" interactive className="pillar">
                <div className="pn">{p.n}</div>
                <div className="pico" aria-hidden="true">{p.ico}</div>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </Card>
            </div>
          )}
        </div>
        <p className="intro-foot reveal"><span className="iff-lead">合言葉は、</span><b className="iff-mark">「Members First」</b><span className="iff-sub">いつも、子どもたちの安全を最優先に。</span></p>
      </div>
    </section>);

}

/* ---------------- lineup（3キャンプ一覧） ---------------- */
function LineupCard({ camp }) {
  return (
    <Card as="article" tone="default" interactive className={'camp' + (camp.isNew ? ' camp--new' : '')}>
      {camp.isNew && <span className="camp-new-flag">★ NEW</span>}
      <div className={'camp-img' + (camp.badgePos ? ' badge-' + camp.badgePos : '')}>
        <div className="camp-badge-pos"><Badge tone={camp.tone} shadow>{camp.cat}</Badge></div>
        <span className="camp-nights">{camp.nights}</span>
        {camp.cardZoom ?
        <div className="camp-img-bg" style={{ backgroundImage: `url(${BASE + camp.card})`, backgroundSize: camp.cardZoom, backgroundPosition: camp.cardPos }}></div> :
        <img src={BASE + camp.card} alt={camp.title} style={camp.cardPos ? { objectPosition: camp.cardPos } : null} />}
        <div className="camp-date">📅 {camp.dateShort}</div>
      </div>
      <div className="camp-body">
        {camp.isNew && <span className="camp-new-line">今年新登場！注目のキャンプ</span>}
        <h3>{camp.title}</h3>
        <p className="camp-place">📍 {camp.place}</p>
        <p className="camp-desc">{camp.desc}</p>
        <div className="camp-stats">
          <div className="camp-stat"><span className="k">対象</span><span className="v">{camp.target}</span></div>
          <div className="camp-stat"><span className="k">定員</span><span className="v">{camp.cap}</span></div>
        </div>
        <div className="camp-cta">
          <Button variant="outline" size="sm" href={'#' + camp.id} iconRight="→">くわしく見る</Button>
        </div>
      </div>
    </Card>);

}

function Lineup() {
  return (
    <section className="lineup" id="camps">
      <div className="wrap">
        <div className="center sec-head-center reveal">
          <Eyebrow center>この夏の4つのキャンプ</Eyebrow>
          <h2 className="sec-title" style={{ marginTop: '14px' }}>森で、海で、英語で。<br />お子さんにぴったりの夏を。</h2>
          <p className="sec-lead">年齢や興味に合わせて選べる4つのキャンプ。気になるキャンプの「くわしく見る」から、日程や参加費をご確認ください。</p>
        </div>
        <div className="lineup-grid">
          {CD.CAMPS.map((c, i) => <div className="reveal" key={i}><LineupCard camp={c} /></div>)}
        </div>
      </div>
    </section>);

}

/* ---------------- camp detail ---------------- */
function ReqTable({ req }) {
  const rows = [
  ['日程', req.date], ['対象', req.target], ['定員', req.cap],
  ['活動場所', req.place], ['集合・解散', req.gather], ['参加費', req.fee], ['打合会', req.meeting]];

  return (
    <dl className="creq">
      {rows.map(([dt, dd], i) =>
      <div className="creq-row" key={i}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      )}
    </dl>);

}

function ScheduleDays({ camp }) {
  return (
    <div className="cschedule">
      <div className="csch-label reveal">{camp.days.length}日間のスケジュール</div>
      <p className="csch-sub reveal">※ 天候やお子さまの様子により、内容は変更になる場合があります。</p>
      <div className={'csch-days d' + camp.days.length}>
        {camp.days.map((day, i) =>
        <div className="cday reveal" key={i}>
            <div className="cday-h">
              <span className="cday-n" style={{ background: camp.accent }}>{day.n}</span>
              <b>{day.n}日目</b>
            </div>
            {day.items.map((it, j) =>
          <div className={'cstep' + (it.hi ? ' hi' : '')} key={j}>
                <span className="ct">{it.c}</span>
                <span className="cd">{it.d}</span>
              </div>
          )}
          </div>
        )}
      </div>
    </div>);

}

function ActivityBlock({ camp }) {
  return (
    <div className="cschedule">
      <div className="csch-label reveal">キャンプのプログラム</div>
      <p className="csch-sub reveal">※ ネイティブ・バイリンガルスタッフと、朝から夜まで英語でたっぷり過ごします。</p>
      <div className="csch-days d2">
        {camp.activities.map((act, i) =>
        <div className="cday reveal" key={i}>
            <div className="cday-h">
              <span className="cday-n" style={{ background: camp.accent, borderRadius: '50%' }}>{i + 1}</span>
              <b style={{ color: 'var(--camp-sun)' }}>{act.en}</b>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--ymca-blue)', fontSize: '15px', margin: '0 0 6px' }}>{act.ja}</p>
            <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', fontWeight: 500, lineHeight: 1.7 }}>{act.d}</p>
          </div>
        )}
      </div>
    </div>);

}

function CampDetail({ camp, idx }) {
  const bg = idx % 2 === 0 ? 'bg-cream' : 'bg-white';
  return (
    <section className={'cdetail ' + bg} id={camp.id}>
      <div className="wrap">
        <div className="cdetail-head reveal">
          {camp.isNew && <Badge tone="red" shadow>新規開講</Badge>}
          <Badge tone={camp.tone}>{camp.cat}</Badge>
          <span className="camp-nights" style={{ position: 'static', boxShadow: 'none', border: '1px solid var(--line)' }}>{camp.nights}・{camp.dateShort}</span>
        </div>
        <h2 className="ctitle reveal">{camp.title}</h2>
        <p className="cdetail-catch reveal" style={{ color: camp.accent }}>{camp.catch}</p>

        <div className="cdetail-grid">
          <div className="reveal">
            <img className="cdetail-photo" src={BASE + camp.photo} alt={camp.title} style={camp.photoPos ? { objectPosition: camp.photoPos } : null} />
            <div className="cdetail-points">
              {camp.points.map((pt, i) =>
              <div className="cpoint" key={i}>
                  <span className="ci" style={{ background: camp.accent }}>✓</span>
                  <p>{pt}</p>
                </div>
              )}
            </div>
          </div>
          <div className="reveal">
            <ReqTable req={camp.req} />
            {camp.note &&
            <div className="cnote"><span className="cni">⚠️</span><span>{camp.note}</span></div>
            }
            <div style={{ marginTop: '22px' }}>
              <Button variant="red" size="md" href="#contact" iconRight="→">このキャンプに申し込む</Button>
            </div>
          </div>
        </div>

        {camp.days ? <ScheduleDays camp={camp} /> : <ActivityBlock camp={camp} />}
      </div>
    </section>);

}

/* ---------------- prepare ---------------- */
function Prepare() {
  return (
    <section className="prepare" id="prepare">
      <div className="wrap">
        <div className="reveal"><Eyebrow>持ち物・準備</Eyebrow></div>
        <h2 className="sec-title reveal" style={{ marginTop: '14px' }}>当日まで楽しく準備</h2>
        <p className="sec-lead reveal">持ち物の目安と、安心のサポート体制をご紹介します。 　
詳しくは打ち合わせ会・保護者用ハンドブックでお伝えします。</p>
        <div className="prep-grid">
          <Card tone="default" className="prep-list-card reveal">
            <h3>🎒 持ち物の目安</h3>
            <div className="checklist">
              {CD.CHECKLIST.map((c, i) => <div className="check" key={i}><span className="cb">✓</span>{c}</div>
              )}
            </div>
            <p className="prep-note">※ 一例です。キャンプごとに必要なもの（マリンキャンプの水着・マリンシューズ等）は、申込後のご案内でお知らせします。持ち物にはすべてお名前のご記入をお願いします。</p>
          </Card>
          <div className="prep-side">
            {CD.PREP_MINI.map((m, i) =>
            <Card tone="flat" interactive className="prep-mini reveal" key={i}>
                <div className="pm-icon" aria-hidden="true">{m.ico}</div>
                <div className="pm-body">
                  <h4>{m.h}</h4>
                  <p dangerouslySetInnerHTML={{ __html: m.p }}></p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---------------- voices ---------------- */
function Voices() {
  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <div className="center sec-head-center reveal">
          <Eyebrow center>保護者の声</Eyebrow>
          <h2 className="sec-title" style={{ marginTop: '14px' }}>送り出してよかった、の声。</h2>
          <p className="sec-lead">はじめは心配だった保護者のみなさんから。キャンプを終えたお子さんの、ちょっとした変化を集めました。</p>
        </div>
        <div className="voice-grid">
          {CD.VOICES.map((v, i) =>
          <div className="reveal" key={i}>
              <Card tone="default" className="voice">
                <div className="stars" aria-hidden="true">★★★★★</div>
                <p>{v.p}</p>
                <div className="who">
                  <span className="ava" style={{ background: v.accent }} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><circle cx="12" cy="8.2" r="4"></circle><path d="M4.5 20c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1z"></path></svg>
                  </span>
                  <div><b>{v.name}</b><small>{v.role}</small></div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- gallery ---------------- */
function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="reveal"><Eyebrow>活動写真ギャラリー</Eyebrow></div>
        <h2 className="sec-title reveal" style={{ marginTop: '14px' }}>この写真から聞こえてくる音を想像して。</h2>
        <div className="gal reveal">
          {CD.GALLERY.map((im, i) => <img key={i} className={im.cls} src={BASE + im.src} alt="" />)}
        </div>
      </div>
    </section>);

}

/* ---------------- flow ---------------- */
function Flow() {
  return (
    <section className="flow" id="flow">
      <div className="wrap">
        <div className="center sec-head-center reveal">
          <Eyebrow center>お申し込みの流れ</Eyebrow>
          <h2 className="sec-title" style={{ marginTop: '14px' }}>申し込みは、かんたん4ステップ。</h2>
        </div>
        <div className="steps">
          {CD.STEPS.map((s, i) =>
          <div className="reveal" key={i}>
              <Card tone="flat" className="step">
                <div className="n">{i + 1}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- faq ---------------- */
function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="center sec-head-center reveal">
          <Eyebrow center>よくある質問</Eyebrow>
          <h2 className="sec-title" style={{ marginTop: '14px' }}>不安なこと、<br />先に解消しておきましょう。</h2>
        </div>
        <div className="faq-list">
          {CD.FAQS.map((f, i) =>
          <FaqItem key={i} question={f.q} open={open === i} onToggle={(next) => setOpen(next ? i : -1)}>
              {f.a}
            </FaqItem>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- contact ---------------- */
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="cta-band reveal">
          <h2>この夏、お子さんに<br /><span className="mark">忘れられない数日間</span>を。</h2>
          <p>ご相談だけでも大歓迎です。「ちょっと気になる」その気持ちを、まずはお聞かせください。</p>
          <div className="cta-actions">
            <Button variant="red" size="lg" href="assets/SummerCamp-application.pdf" target="_blank" rel="noopener" iconRight="→">申込詳細について</Button>
            <Button variant="outline" size="lg" href="tel:0429395051">📞 04-2939-5051</Button>
          </div>
        </div>
        <Card tone="default" className="contact-card reveal">
          <div className="cc-head">
            <h3>埼玉YMCA 所沢センター</h3>
            <p className="cc-sub">3つのキャンプのお申し込み・お問い合わせはこちら</p>
          </div>
          <div className="cc-combined">
            <a className="cc-col" href="mailto:tokorozawa@saitamaymca.org">
              <span className="cc-label">✉ Mail</span>
              <span className="cc-value">tokorozawa@saitamaymca.org</span>
              <span className="cc-note">どんなことでもお気軽にご相談ください。</span>
            </a>
            <div className="cc-col">
              <span className="cc-label">📍 Access</span>
              <span className="cc-value">〒359-1141 埼玉県所沢市小手指町1-39-2</span>
              <span className="cc-note">Tel 04-2939-5051 ・ 西武池袋線「小手指駅」北口から徒歩7分</span>
            </div>
          </div>
        </Card>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p>公益財団法人 埼玉YMCA　2026年度 サマーキャンプ<br />わくわくキャンプ ・ マリンキャンプ ・ English Summer Camp</p>
      </div>
    </footer>);

}

Object.assign(window, {
  CampParts: { NavBar, Hero, Intro, Lineup, CampDetail, Prepare, Voices, Gallery, Flow, Faq, Contact, Footer }
});