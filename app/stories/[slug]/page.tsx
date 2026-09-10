import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Heart, Sparkles } from 'lucide-react';

export type Story = {
  title: string;
  virtue: string;
  subtitle: string;
  image: string;
  alt: string;
  color: string;
  dedication: string;
  scenes: { title: string; sound: string; text: string[] }[];
  closing: string;
};

export const stories: Record<string, Story> = {
  joy: {
    title: 'Pip and the Pocketful of Sunbeams',
    virtue: 'A story about joy',
    subtitle: 'Joy grows whenever we notice it—and grows again whenever we share it.',
    image: '/story-joy.jpg',
    alt: 'Pip the mouse dancing through a sunlit meadow with woodland friends',
    color: 'joy',
    dedication: 'For Coco, may you always notice the light hiding in ordinary things.',
    scenes: [
      { title: 'The morning after the rain', sound: 'drip · drip · hush', text: [
        'Pip woke to a world that seemed to be holding its breath. Rain pearls balanced on every blade of grass, and the whole meadow smelled of wet earth and mint.',
        'Everyone else saw puddles and muddy paws. Pip saw a thousand tiny mirrors, each carrying a piece of the sky.',
      ]},
      { title: 'A sunbeam in his pocket', sound: 'flicker · warm · bright', text: [
        'When the first sunbeam slipped beneath the clouds, Pip caught it on the silver button of his coat. It danced there like a secret.',
        'He could have hurried home to keep it. Instead, he followed where it pointed—to the deepest puddle in the lane.',
      ]},
      { title: 'The very first splash', sound: 'plip · splash!', text: [
        'Pip jumped. Water rose around him in a glittering crown. His scarf flew sideways, his feet forgot the ground, and a laugh escaped before he could decide whether the moment was sensible.',
        'The laugh surprised a robin into song. It surprised a rabbit into one small hop. Joy, Pip discovered, was wonderfully difficult to keep still.',
      ]},
      { title: 'The meadow joins in', sound: 'hop · chirrup · whee!', text: [
        'Soon the hedgehog was drumming raindrops from the buttercups. The squirrel was conducting the birds with her tail. Even old Toad, who disliked wet socks, made one magnificent splash.',
        'Nothing had become perfect. The clouds were still there. Their breakfast was still cold. But together they had made the morning larger than its troubles.',
      ]},
      { title: 'What joy is made of', sound: 'glow · glow · glow', text: [
        'At sunset, Pip checked his pocket. The sunbeam was gone. For one worried moment, he thought he had lost it.',
        'Then he saw its light in Rabbit’s eyes, heard it in Robin’s song, and felt it in his own tired feet. A joy shared was not divided. It had multiplied.',
      ]},
    ],
    closing: 'Joy is not waiting for a perfect day. It is finding one bright thing—and inviting someone else to see it too.',
  },
  kindness: {
    title: 'The Lantern Left in the Rain',
    virtue: 'A story about kindness',
    subtitle: 'The smallest shelter can become a whole world to someone who needs it.',
    image: '/story-kindness.jpg',
    alt: 'A bear cub sheltering a small moth beneath a glowing lantern in the rain',
    color: 'kindness',
    dedication: 'For Coco, may your gentleness always be braver than the storm.',
    scenes: [
      { title: 'The path home', sound: 'tip · tap · rain', text: [
        'Mara Bear was nearly home when the rain began. It tapped the leaves, then drummed the stones, then fell so thickly that the forest disappeared beyond the circle of her lantern.',
        'Her soup would be warm. Her blanket would be dry. Mara quickened her steps—until something pale fluttered beside a puddle.',
      ]},
      { title: 'A voice smaller than rain', sound: 'flutter · still', text: [
        'A little moth crouched beneath a curled leaf. His wings were soaked and trembling. “I was following the moon,” he whispered, “but the rain has washed it away.”',
        'Mara looked toward her glowing windows, then at the tiny stranger. Kindness asked her to stop when everything else told her to hurry.',
      ]},
      { title: 'The lantern roof', sound: 'pat-pat · golden hush', text: [
        'She lowered her paper lantern until its broad rim made a roof above him. Rain soaked Mara’s ears and ran down her nose, but beneath the lantern the moth’s wings slowly opened.',
        'The light was meant to guide Mara home. Tonight, she decided, it could guide someone else first.',
      ]},
      { title: 'A forest of helpers', sound: 'rustle · carry · together', text: [
        'Hedgehog brought a dry petal. Rabbit found a smooth stone for the moth to rest upon. Robin flew ahead, searching for the moonflower grove.',
        'Each creature offered something small. Together, their small things became a road through the storm.',
      ]},
      { title: 'The light that returned', sound: 'soft wings · moonrise', text: [
        'At the moonflowers, the clouds parted. The moth lifted into a silver beam and circled Mara once, twice, three times in thanks.',
        'When Mara finally reached home, her soup was cool. Yet the lantern seemed warmer than before. Kindness had not cost her its light; it had taught the light where to go.',
      ]},
    ],
    closing: 'Kindness is noticing who has been left in the rain—and choosing to make room beneath your light.',
  },
  friendship: {
    title: 'The Bridge Between Two Burrows',
    virtue: 'A story about friendship',
    subtitle: 'Friendship begins when two different worlds each take one step toward the middle.',
    image: '/story-friendship.jpg',
    alt: 'A rabbit and fox tying ribbons on a handmade bridge at sunset',
    color: 'friendship',
    dedication: 'For Coco, may you meet difference with curiosity and build the brave way across.',
    scenes: [
      { title: 'Two hills, two stories', sound: 'brook · breeze · apart', text: [
        'On the clover hill lived Luma Rabbit, who planned every hour and folded her scarves into perfect squares. Across the brook lived Finn Fox, who followed dragonflies and never knew where his socks were.',
        'Their families waved politely from opposite banks. Everyone agreed the water between them was probably best left uncrossed.',
      ]},
      { title: 'A boat made of bark', sound: 'bob · spin · hello?', text: [
        'One afternoon, Luma launched a bark boat carrying a neat blue ribbon. A gust spun it toward Finn, who caught it just before the rapids.',
        'He sent it back with a crooked knot and a note: “Your boat is excellent. Your knot looked lonely.” Luma laughed, though she tried not to.',
      ]},
      { title: 'Building from both sides', sound: 'tap · tie · reach', text: [
        'The next morning, Luma laid straight twigs from her bank. Finn balanced bendy branches from his. Luma measured. Finn improvised. Both methods failed alone.',
        'So Luma left room for surprise, and Finn learned to test every knot. Their bridge stretched farther each day because each listened to what the other knew.',
      ]},
      { title: 'The storm test', sound: 'rush · crack · hold!', text: [
        'A sudden storm swelled the brook. The bridge shuddered, and the final gap seemed wider than ever. Luma wanted to retreat. Finn wanted to leap.',
        'Instead, they called across the water, counted to three, and each placed one last branch. Courage was easier when another voice was counting with you.',
      ]},
      { title: 'Meeting in the middle', sound: 'one · two · together', text: [
        'At sunset they stepped onto the bridge. Luma carried a blue ribbon; Finn carried a rose one. In the middle, they tied both around the same post.',
        'The bridge did not make them alike. It made a place where careful plans and wild ideas could meet—and where two hills could begin sharing their stories.',
      ]},
    ],
    closing: 'Friendship is not finding someone exactly like you. It is building enough trust to meet, listen, and make something neither of you could make alone.',
  },
};

export function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug];
  if (!story) return { title: 'Story not found | Tales with Coco' };
  return {
    title: `${story.title} | Tales with Coco`,
    description: story.subtitle,
    openGraph: { title: story.title, description: story.subtitle, images: [story.image] },
    twitter: { card: 'summary_large_image', title: story.title, description: story.subtitle, images: [story.image] },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories[slug];

  return <StoryExperience story={story} slug={slug} locale="en" />;
}

export function StoryExperience({ story, slug, locale }: { story?: Story; slug: string; locale: 'en' | 'it' }) {
  const ui = locale === 'it'
    ? { missing: 'Questa storia si sta ancora sognando.', shelf: 'Torna alle storie', begin: 'Scorri per iniziare', another: 'Scegli un’altra storia' }
    : { missing: 'This tale is still being dreamed.', shelf: 'Story shelf', begin: 'Scroll to begin', another: 'Choose another tale' };

  if (!story) {
    return <main className="story-missing"><h1>{ui.missing}</h1><a href={`/${locale}#stories`}>{ui.shelf}</a></main>;
  }

  return (
    <main className={`immersive-story immersive-story--${story.color}`}>
      <a className="story-back" href={`/${locale}#stories`}><ArrowLeft size={17} /> {ui.shelf}</a>
      <nav className="story-language language-switcher" aria-label={locale === 'it' ? 'Lingua' : 'Language'}>
        <a href={`/en/stories/${slug}`} aria-current={locale === 'en' ? 'page' : undefined}>EN</a>
        <a href={`/it/stories/${slug}`} aria-current={locale === 'it' ? 'page' : undefined}>IT</a>
      </nav>
      <div className="story-progress" aria-hidden="true"><span /></div>

      <header className="story-cover">
        <img src={story.image} alt={story.alt} />
        <div className="story-cover-shade" />
        <div className="story-cover-copy">
          <p><Sparkles size={15} /> {story.virtue}</p>
          <h1>{story.title}</h1>
          <div className="story-title-rule" />
          <p className="story-subtitle">{story.subtitle}</p>
          <span className="scroll-invitation">{ui.begin} <ArrowRight size={16} /></span>
        </div>
      </header>

      <div className="story-journey">
        <div className="story-sticky-art" aria-hidden="true">
          <img src={story.image} alt="" />
          <div className="story-art-veil" />
        </div>
        <div className="story-scenes">
          {story.scenes.map((scene, index) => (
            <section className="story-scene" key={scene.title}>
              <span className="scene-number">{String(index + 1).padStart(2, '0')}</span>
              <p className="scene-sound">{scene.sound}</p>
              <h2>{scene.title}</h2>
              {scene.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>

      <section className="story-moral">
        <Heart aria-hidden="true" />
        <p>{story.closing}</p>
        <span>{story.dedication}</span>
        <a href={`/${locale}#stories`}>{ui.another} <ArrowRight size={16} /></a>
      </section>
    </main>
  );
}
