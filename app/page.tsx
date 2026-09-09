import {
  ArrowRight,
  BookOpen,
  Heart,
  MoonStar,
  Sparkles,
} from 'lucide-react';

const stories = [
  {
    title: 'The Moon Who Lost Her Glow',
    excerpt:
      'Coco follows a silver trail through the sleepy woods to help the moon remember how brightly she can shine.',
    tag: 'Bedtime',
    time: '6 min read',
    className: 'story-card--blue',
    number: '01',
    image: '/moon-bunny.png',
    alt: 'A watercolor bunny offering a glowing star to the moon',
  },
  {
    title: 'Coco and the Pocket-Sized Cloud',
    excerpt:
      'A tiny raincloud needs a brave friend, a warm cup of tea, and just the right place to make a rainbow.',
    tag: 'Wonder',
    time: '5 min read',
    className: 'story-card--rose',
    number: '02',
    image: '/cloud-fox.png',
    alt: 'A watercolor fox carrying a tiny raincloud through a meadow',
  },
  {
    title: 'The Garden That Hummed at Night',
    excerpt:
      'When the flowers begin to sing after sunset, Coco discovers that every small voice belongs in the song.',
    tag: 'Nature',
    time: '7 min read',
    className: 'story-card--lilac',
    number: '03',
    image: '/garden-friends.png',
    alt: 'A watercolor bear cub and mouse listening to flowers at night',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tales with Coco, home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/coco-face-logo.png" alt="" />
          </span>
          <span>
            Tales with Coco <span className="brand-tulip" aria-hidden="true">🌷</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#stories">Our stories</a>
          <a href="#about">For Coco</a>
          <a href="#from-us">From us</a>
        </nav>
        <a className="nav-cta" href="#stories">
          <MoonStar size={16} aria-hidden="true" />
          Story time
        </a>
      </header>

      <section className="hero" id="top">
        <div className="magic-sparkles" aria-hidden="true">
          <span className="sparkle sparkle--one">✦</span>
          <span className="sparkle sparkle--two">✧</span>
          <span className="sparkle sparkle--three">✦</span>
          <span className="sparkle sparkle--four">·</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={15} aria-hidden="true" /> A family storybook
          </p>
          <h1>
            Little tales for a <em>big imagination.</em>
          </h1>
          <p className="hero-intro">
            A growing shelf of bedtime adventures, tiny wonders, and brave
            little moments—written with love by Emily &amp; Alessandro for Coco.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#stories">
              Browse the stories <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Why we made this
            </a>
          </div>
          <div className="keepsake-note">
            <Heart size={17} aria-hidden="true" />
            <span>Made slowly, kept forever.</span>
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
              <p className="feature-kicker">Tonight&apos;s little wonder</p>
              <h2>The Moon Who Lost Her Glow</h2>
              <p>A gentle tale about finding your light with a little help.</p>
              <a href="#stories">
                Open the story <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          <p className="scribble-note" aria-hidden="true">
            dream here ↗
          </p>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <BookOpen size={15} aria-hidden="true" /> From our story shelf
            </p>
            <h2>Stories to grow up with</h2>
            <span className="heading-stardust" aria-hidden="true">✦ · ✧</span>
          </div>
          <p>
            Small adventures about courage, kindness, curiosity, and the
            everyday magic we hope Coco always notices.
          </p>
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
              <a href="#from-us" aria-label={`Read ${story.title}`}>
                Read this tale <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-quote">
          <span aria-hidden="true">“</span>
          <blockquote>
            We&apos;re collecting the stories we want Coco to carry with her: the
            funny ones, the tender ones, and the ones that make bedtime last a
            little longer.
          </blockquote>
        </div>
        <div className="about-copy" id="from-us">
          <p className="eyebrow">A note from Mama &amp; Papa</p>
          <h2>For all the nights we never want to forget.</h2>
          <p>
            This is our family&apos;s living storybook. It will keep growing as Coco
            does—with new characters, new places, and a little more wonder on
            every page.
          </p>
          <p className="signature">Emily &amp; Alessandro</p>
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
        <p>A growing collection of family stories, made with love.</p>
        <p>For Coco, always.</p>
      </footer>
    </main>
  );
}
