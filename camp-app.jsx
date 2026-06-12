/* 埼玉YMCA サマーキャンプ募集 — ページ組み立て + Tweaks。 */

const { NavBar, Hero, Intro, Lineup, CampDetail, Prepare, Voices, Gallery, Flow, Faq, Contact, Footer } = window.CampParts;
const CDATA = window.CAMP_DATA;
const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSlider } = window;

const THEMES = {
  'スカイ': { blue: '#0496C4', deep: '#0277A0', soft: '#E4F5FB', bright: '#54C5E8', grad: '6,132,176' },
  'ミント': { blue: '#15A06A', deep: '#0F8255', soft: '#E6F7EF', bright: '#46C690', grad: '14,124,86' },
  'コーラル': { blue: '#EC6A4E', deep: '#D24E33', soft: '#FDECE7', bright: '#F58A73', grad: '210,86,62' },
  'モノトーン': { blue: '#2E2A26', deep: '#1C1A17', soft: '#F1EFEC', bright: '#6E665D', grad: '38,34,30' },
  'グリーン': { blue: '#1F8A5B', deep: '#14724A', soft: '#E7F4EC', bright: '#46B883', grad: '18,92,60' },
  'ブルー': { blue: '#0098D8', deep: '#0079B0', soft: '#E1F4FD', bright: '#38C3F0', grad: '0,90,135' },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "スカイ",
  "hero": "成長",
  "heroBg": "光",
  "markColor": "#FFD23E",
  "overlay": 0.6
}/*EDITMODE-END*/;

function useReveal(dep) {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal(t.hero);

  React.useEffect(() => {
    const th = THEMES[t.theme] || THEMES['スカイ'];
    const r = document.documentElement;
    r.style.setProperty('--ymca-blue', th.blue);
    r.style.setProperty('--ymca-blue-deep', th.deep);
    r.style.setProperty('--ymca-blue-soft', th.soft);
    r.style.setProperty('--aqua-bright', th.bright);
    r.style.setProperty('--hero-grad', th.grad);
  }, [t.theme]);

  const variant = CDATA.HERO_VARIANTS.find((v) => v.label === t.hero) || CDATA.HERO_VARIANTS[0];

  return (
    <React.Fragment>
      <NavBar />
      <Hero variant={variant} markColor={t.markColor} overlay={t.overlay} bg={t.heroBg} />
      <Intro />
      <Lineup />
      {CDATA.CAMPS.map((c, i) => <CampDetail key={c.id} camp={c} idx={i} />)}
      <Prepare />
      <Voices />
      <Gallery />
      <Flow />
      <Faq />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="テーマカラー" />
        <TweakRadio label="配色" value={t.theme}
          options={['スカイ', 'ミント', 'コーラル', 'モノトーン', 'グリーン', 'ブルー']}
          onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="ヒーロー（3案）" />
        <TweakRadio label="メッセージ" value={t.hero}
          options={['成長', '体験', '安心']}
          onChange={(v) => setTweak('hero', v)} />
        <TweakRadio label="背景" value={t.heroBg}
          options={['光', '写真', '白']}
          onChange={(v) => setTweak('heroBg', v)} />
        <TweakColor label="強調色" value={t.markColor}
          options={['#FFD23E', '#FFFFFF', '#FF9E45']}
          onChange={(v) => setTweak('markColor', v)} />
        <TweakSlider label="写真の濃さ" value={t.overlay} min={0.6} max={0.95} step={0.01}
          onChange={(v) => setTweak('overlay', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
