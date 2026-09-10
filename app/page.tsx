import {
  ArrowRight,
  BookOpen,
  Heart,
  MoonStar,
  Sparkles,
} from 'lucide-react';
import { CocoGaze } from '@/components/coco-gaze';

export const homeContent = {
  en: {
    nav: ['Our stories', 'For Coco', 'From us'], storyTime: 'Story time', family: 'A family storybook',
    headline: <>Little tales for a <em>big imagination.</em></>,
    intro: <>A growing shelf of bedtime adventures, tiny wonders, and brave little moments—written with love by mom Emily &amp; dad Ale for Coco.</>,
    browse: 'Browse the stories', why: 'Why we made this', keepsake: 'Made slowly, kept forever.',
    featureKicker: "Tonight's little wonder", featureTitle: 'The Moon Who Lost Her Glow',
    featureText: 'A gentle tale about finding your light with a little help.', openStory: 'Open the story', dream: 'dream here ↗',
    shelf: 'From our story shelf', shelfTitle: 'Stories to grow up with',
    shelfText: 'Small adventures about courage, kindness, curiosity, and the everyday magic we hope Coco always notices.',
    read: 'Read this tale', quote: "We're collecting the stories we want Coco to carry with her: the funny ones, the tender ones, and the ones that make bedtime last a little longer.",
    note: 'A note from mom Emily & dad Ale', aboutTitle: 'For all the nights we never want to forget.',
    aboutText: "This is our family's living storybook. It will keep growing as Coco does—with new characters, new places, and a little more wonder on every page.",
    footer: 'A growing collection of family stories, made with love.', always: 'For Coco, always.',
    stories: [{
    title: 'Pip and the Pocketful of Sunbeams',
    excerpt:
      'One bright splash teaches Pip that joy becomes bigger every time it is noticed and shared.',
    tag: 'Joy',
    time: '8 min read',
    className: 'story-card--blue',
    number: '01',
    image: '/story-joy.jpg',
    alt: 'Pip the mouse dancing in a sunlit meadow',
    slug: 'joy',
  }, {
    title: 'The Lantern Left in the Rain',
    excerpt:
      'Mara discovers that even the smallest shelter can become a whole world to someone in need.',
    tag: 'Kindness',
    time: '8 min read',
    className: 'story-card--rose',
    number: '02',
    image: '/story-kindness.jpg',
    alt: 'A bear cub sheltering a moth beneath a lantern',
    slug: 'kindness',
  }, {
    title: 'The Bridge Between Two Burrows',
    excerpt:
      'A careful rabbit and a spontaneous fox learn to build from both sides—and meet in the middle.',
    tag: 'Friendship',
    time: '9 min read',
    className: 'story-card--lilac',
    number: '03',
    image: '/story-friendship.jpg',
    alt: 'A rabbit and fox meeting on a handmade bridge',
    slug: 'friendship',
  }],
  },
  it: {
    nav: ['Le storie', 'Per Coco', 'Da noi'], storyTime: 'È l’ora di una storia', family: 'Il libro di storie di famiglia',
    headline: <>Piccole storie per una <em>grande immaginazione.</em></>,
    intro: <>Una raccolta che cresce di avventure della buonanotte, piccole meraviglie e momenti di coraggio—scritta con amore da mamma Emily e papà Ale per Coco.</>,
    browse: 'Scopri le storie', why: 'Perché lo abbiamo creato', keepsake: 'Create piano, custodite per sempre.',
    featureKicker: 'La piccola meraviglia di stasera', featureTitle: 'La luna che aveva perso la sua luce',
    featureText: 'Una storia dolce sul ritrovare la propria luce con un piccolo aiuto.', openStory: 'Apri la storia', dream: 'sogna qui ↗',
    shelf: 'Dalla nostra libreria', shelfTitle: 'Storie con cui crescere',
    shelfText: 'Piccole avventure sul coraggio, la gentilezza, la curiosità e la magia quotidiana che speriamo Coco sappia sempre notare.',
    read: 'Leggi questa storia', quote: 'Raccogliamo le storie che vorremmo Coco portasse sempre con sé: quelle buffe, quelle tenere e quelle che fanno durare la buonanotte un po’ più a lungo.',
    note: 'Un pensiero da mamma Emily e papà Ale', aboutTitle: 'Per tutte le sere che non vogliamo dimenticare.',
    aboutText: 'Questo è il libro vivente della nostra famiglia. Crescerà insieme a Coco—con nuovi personaggi, nuovi luoghi e un po’ più di meraviglia in ogni pagina.',
    footer: 'Una raccolta di storie di famiglia che cresce, fatta con amore.', always: 'Per Coco, sempre.',
    stories: [{ title: 'Pip e la tasca piena di raggi di sole', excerpt: 'Un tuffo luminoso insegna a Pip che la gioia diventa più grande ogni volta che viene notata e condivisa.', tag: 'Gioia', time: '8 min', className: 'story-card--blue', number: '01', image: '/story-joy.jpg', alt: 'Il topolino Pip danza in un prato pieno di sole', slug: 'joy' },
      { title: 'La lanterna rimasta sotto la pioggia', excerpt: 'Mara scopre che anche il riparo più piccolo può diventare un mondo intero per chi ne ha bisogno.', tag: 'Gentilezza', time: '8 min', className: 'story-card--rose', number: '02', image: '/story-kindness.jpg', alt: 'Un’orsetta ripara una falena sotto una lanterna', slug: 'kindness' },
      { title: 'Il ponte tra due tane', excerpt: 'Una coniglietta prudente e una volpe spontanea imparano a costruire dai due lati e a incontrarsi nel mezzo.', tag: 'Amicizia', time: '9 min', className: 'story-card--lilac', number: '03', image: '/story-friendship.jpg', alt: 'Una coniglietta e una volpe si incontrano su un ponte fatto a mano', slug: 'friendship' }],
  },
} as const;

export type Locale = keyof typeof homeContent;

export default function Home() {
  return <HomePage locale="en" />;
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeContent[locale];
  const stories = copy.stories;
  return (
    <main lang={locale}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tales with Coco, home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/coco-face-logo.png" alt="" />
          </span>
          <span>
            Tales with Coco <span className="brand-tulip" aria-hidden="true">🌷</span>
          </span>
        </a>
        <nav className="main-nav" aria-label={locale === 'it' ? 'Navigazione principale' : 'Main navigation'}>
          <a href="#stories">{copy.nav[0]}</a>
          <a href="#about">{copy.nav[1]}</a>
          <a href="#from-us">{copy.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <nav className="language-switcher" aria-label={locale === 'it' ? 'Lingua' : 'Language'}>
            <a href="/en" aria-current={locale === 'en' ? 'page' : undefined}>EN</a>
            <a href="/it" aria-current={locale === 'it' ? 'page' : undefined}>IT</a>
          </nav>
          <a className="nav-cta" href="#stories"><MoonStar size={16} aria-hidden="true" />{copy.storyTime}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="magic-sparkles" aria-hidden="true">
          <span className="sparkle sparkle--one">✦</span>
          <span className="sparkle sparkle--two">✧</span>
          <span className="sparkle sparkle--three">✦</span>
          <span className="sparkle sparkle--four">·</span>
        </div>
        <div className="hero-copy">
          <CocoGaze />
          <p className="eyebrow">
            <Sparkles size={15} aria-hidden="true" /> {copy.family}
          </p>
          <h1>{copy.headline}</h1>
          <p className="hero-intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#stories">
              {copy.browse} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              {copy.why}
            </a>
          </div>
          <div className="keepsake-note">
            <Heart size={17} aria-hidden="true" />
            <span>{copy.keepsake}</span>
          </div>
        </div>

        <div className="feature-wrap" aria-label="Featured story">
          <div className="paint-wash paint-wash--one" />
          <div className="paint-wash paint-wash--two" />
          <article className="feature-card">
            <img
              src="/moon-bunny.png"
              alt="A little watercolor bunny returning a glowing star to the moon"
            />
            <div className="feature-card-copy">
              <p className="feature-kicker">{copy.featureKicker}</p>
              <h2>{copy.featureTitle}</h2>
              <p>{copy.featureText}</p>
              <a href="#stories">
                {copy.openStory} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          <p className="scribble-note" aria-hidden="true">
            {copy.dream}
          </p>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <BookOpen size={15} aria-hidden="true" /> {copy.shelf}
            </p>
            <h2>{copy.shelfTitle}</h2>
            <span className="heading-stardust" aria-hidden="true">✦ · ✧</span>
          </div>
          <p>{copy.shelfText}</p>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <article className={`story-card ${story.className}`} key={story.title}>
              <div className="story-art">
                <img src={story.image} alt={story.alt} />
                <span>{story.number}</span>
              </div>
              <div className="story-meta">
                <span>{story.tag}</span>
                <span>{story.time}</span>
              </div>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <a href={`/${locale}/stories/${story.slug}`} aria-label={`${copy.read}: ${story.title}`}>
                {copy.read} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-quote">
          <span aria-hidden="true">“</span>
          <blockquote>{copy.quote}</blockquote>
        </div>
        <div className="about-copy" id="from-us">
          <p className="eyebrow">{copy.note}</p>
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutText}</p>
          <p className="signature">Emily &amp; Ale</p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <img src="/coco-face-logo.png" alt="" />
          </span>
          <span>
            Tales with Coco <span className="brand-tulip" aria-hidden="true">🌷</span>
          </span>
        </a>
        <p>{copy.footer}</p>
        <p>{copy.always}</p>
      </footer>
    </main>
  );
}
