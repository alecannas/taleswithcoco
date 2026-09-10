import {
  ArrowRight,
  BookOpen,
  Heart,
  MoonStar,
  Sparkles,
} from 'lucide-react';
import { CocoGaze } from '@/components/coco-gaze';

const stories = [
  {
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
  },
  {
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
  },
  {
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
          <CocoGaze />
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
              <a href={`/stories/${story.slug}`} aria-label={`Read ${story.title}`}>
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
        <p>A growing collection of family stories, made with love.</p>
        <p>For Coco, always.</p>
      </footer>
    </main>
  );
}
