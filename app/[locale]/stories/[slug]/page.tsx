import type { Metadata } from 'next';
import { StoryExperience, stories as englishStories, type Story } from '@/app/stories/[slug]/page';

const italianStories: Record<string, Story> = {
  joy: {
    title: 'Pip e la tasca piena di raggi di sole',
    virtue: 'Una storia sulla gioia',
    subtitle: 'La gioia cresce quando la sappiamo notare—e cresce ancora quando la condividiamo.',
    image: '/story-joy.jpg', alt: 'Pip danza in un prato luminoso insieme agli amici del bosco', color: 'joy',
    dedication: 'Per Coco, perché tu possa sempre scoprire la luce nascosta nelle cose di ogni giorno.',
    scenes: [
      { title: 'Il mattino dopo la pioggia', sound: 'goccia · goccia · silenzio', text: ['Pip si svegliò in un mondo che sembrava trattenere il respiro. Perle di pioggia stavano in equilibrio sui fili d’erba e il prato profumava di terra bagnata e menta.', 'Tutti gli altri vedevano pozzanghere e zampette infangate. Pip vedeva mille piccoli specchi, ognuno con dentro un pezzetto di cielo.'] },
      { title: 'Un raggio in tasca', sound: 'scintilla · caldo · luce', text: ['Quando il primo raggio scivolò sotto le nuvole, Pip lo catturò sul bottone argentato del cappotto. Danzava come un segreto.', 'Avrebbe potuto correre a casa per custodirlo. Invece seguì la direzione che indicava: la pozzanghera più profonda del sentiero.'] },
      { title: 'Il primo grande splash', sound: 'plip · splash!', text: ['Pip saltò. L’acqua gli si alzò intorno come una corona luccicante. La sciarpa volò di lato, i piedi dimenticarono il terreno e una risata gli scappò prima che potesse decidere se fosse una cosa sensata.', 'La risata convinse un pettirosso a cantare e un coniglio a fare un piccolo salto. La gioia, scoprì Pip, era meravigliosamente difficile da tenere ferma.'] },
      { title: 'Il prato si unisce', sound: 'salta · canta · evviva!', text: ['Presto il riccio suonava le gocce sui ranuncoli. Lo scoiattolo dirigeva gli uccelli con la coda. Persino il vecchio Rospo, che detestava le calze bagnate, fece uno splash magnifico.', 'Non era diventato tutto perfetto. Le nuvole erano ancora lì e la colazione era fredda. Ma insieme avevano reso il mattino più grande dei suoi piccoli guai.'] },
      { title: 'Di cosa è fatta la gioia', sound: 'brilla · brilla · brilla', text: ['Al tramonto Pip controllò la tasca. Il raggio era scomparso e, per un momento, temette di averlo perduto.', 'Poi vide la sua luce negli occhi del Coniglio, la sentì nel canto del Pettirosso e nelle proprie zampe stanche. Una gioia condivisa non si divide: si moltiplica.'] },
    ],
    closing: 'La gioia non aspetta una giornata perfetta. Trova una cosa luminosa e invita qualcun altro a guardarla con te.',
  },
  kindness: {
    title: 'La lanterna rimasta sotto la pioggia', virtue: 'Una storia sulla gentilezza',
    subtitle: 'Il riparo più piccolo può diventare un mondo intero per chi ne ha bisogno.', image: '/story-kindness.jpg',
    alt: 'Un’orsetta protegge una piccola falena sotto una lanterna luminosa', color: 'kindness',
    dedication: 'Per Coco, perché la tua dolcezza sia sempre più coraggiosa della tempesta.',
    scenes: [
      { title: 'Il sentiero di casa', sound: 'tic · tac · pioggia', text: ['Mara Orsetta era quasi a casa quando iniziò a piovere. Prima le gocce picchiettarono le foglie, poi tamburellarono sui sassi, infine caddero così fitte che il bosco scomparve oltre il cerchio della lanterna.', 'La zuppa sarebbe stata calda e la coperta asciutta. Mara accelerò—finché qualcosa di pallido svolazzò accanto a una pozzanghera.'] },
      { title: 'Una voce più piccola della pioggia', sound: 'frullo · quiete', text: ['Una piccola falena era rannicchiata sotto una foglia. Le ali bagnate tremavano. «Seguivo la luna», sussurrò, «ma la pioggia l’ha cancellata».', 'Mara guardò le finestre illuminate di casa, poi il minuscolo sconosciuto. La gentilezza le chiedeva di fermarsi quando tutto il resto le diceva di correre.'] },
      { title: 'Il tetto di lanterna', sound: 'pat-pat · luce dorata', text: ['Abbassò la lanterna finché il bordo largo diventò un tetto. La pioggia bagnava le orecchie di Mara e le scendeva sul naso, ma sotto quella luce le ali della falena si aprirono piano.', 'La lanterna doveva guidare Mara verso casa. Quella sera, decise, avrebbe guidato prima qualcun altro.'] },
      { title: 'Un bosco di aiutanti', sound: 'fruscio · porta · insieme', text: ['Il Riccio portò un petalo asciutto. Il Coniglio trovò un sasso liscio su cui riposare. Il Pettirosso volò avanti, cercando il prato dei fiori di luna.', 'Ognuno offrì qualcosa di piccolo. Insieme, tutte quelle piccole cose diventarono una strada nella tempesta.'] },
      { title: 'La luce che ritorna', sound: 'ali leggere · sorge la luna', text: ['Tra i fiori di luna, le nuvole si aprirono. La falena salì in un raggio argentato e volò una, due, tre volte intorno a Mara per ringraziarla.', 'Quando Mara arrivò a casa, la zuppa era fredda. Eppure la lanterna sembrava più calda. La gentilezza non le aveva tolto luce: aveva insegnato alla luce dove andare.'] },
    ],
    closing: 'La gentilezza è accorgersi di chi è rimasto sotto la pioggia e scegliere di fargli spazio sotto la propria luce.',
  },
  friendship: {
    title: 'Il ponte tra due tane', virtue: 'Una storia sull’amicizia',
    subtitle: 'L’amicizia comincia quando due mondi diversi fanno un passo ciascuno verso il centro.', image: '/story-friendship.jpg',
    alt: 'Una coniglietta e una volpe annodano nastri su un piccolo ponte al tramonto', color: 'friendship',
    dedication: 'Per Coco, perché tu possa incontrare le differenze con curiosità e costruire con coraggio la strada verso gli altri.',
    scenes: [
      { title: 'Due colline, due storie', sound: 'ruscello · brezza · lontani', text: ['Sulla collina di trifoglio viveva Luma Coniglietta, che programmava ogni ora e piegava le sciarpe in quadrati perfetti. Oltre il ruscello viveva Finn Volpe, che seguiva le libellule e non sapeva mai dove fossero i calzini.', 'Le famiglie si salutavano gentilmente dalle due rive. Tutti pensavano che fosse meglio non attraversare quell’acqua.'] },
      { title: 'Una barchetta di corteccia', sound: 'dondola · gira · ciao?', text: ['Un pomeriggio Luma mise in acqua una barchetta con un nastro blu. Una folata la spinse verso Finn, che la prese appena prima delle rapide.', 'Lui la rimandò con un nodo storto e un biglietto: «La tua barca è perfetta. Il tuo nodo sembrava solo». Luma rise, anche se cercò di non farlo.'] },
      { title: 'Costruire dai due lati', sound: 'toc · lega · allunga', text: ['Il mattino dopo Luma posò rami diritti dalla sua riva. Finn sistemò ramoscelli curvi dalla sua. Luma misurava. Finn inventava. Da soli, entrambi i metodi fallivano.', 'Così Luma lasciò spazio alle sorprese e Finn imparò a controllare ogni nodo. Il ponte cresceva perché ciascuno ascoltava ciò che l’altro sapeva.'] },
      { title: 'La prova della tempesta', sound: 'corri · crack · tieni!', text: ['Un temporale improvviso gonfiò il ruscello. Il ponte tremò e l’ultimo spazio sembrò più largo che mai. Luma voleva tornare indietro. Finn voleva saltare.', 'Invece si chiamarono da una riva all’altra, contarono fino a tre e posarono insieme l’ultimo ramo. Il coraggio era più facile con un’altra voce che contava accanto alla tua.'] },
      { title: 'Incontrarsi nel mezzo', sound: 'uno · due · insieme', text: ['Al tramonto salirono sul ponte. Luma portava un nastro blu, Finn uno rosa. Nel mezzo li annodarono allo stesso palo.', 'Il ponte non li rese uguali. Creò un luogo dove i piani precisi e le idee selvagge potevano incontrarsi—e dove due colline potevano iniziare a condividere le proprie storie.'] },
    ],
    closing: 'L’amicizia non è trovare qualcuno identico a te. È costruire abbastanza fiducia per incontrarsi, ascoltarsi e creare qualcosa che da soli non avreste potuto fare.',
  },
};

export function generateStaticParams() {
  return ['en', 'it'].flatMap((locale) => Object.keys(englishStories).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = locale === 'it' ? italianStories[slug] : englishStories[slug];
  if (!story) return { title: 'Tales with Coco' };
  return {
    title: `${story.title} | Tales with Coco`, description: story.subtitle,
    alternates: { languages: { en: `/en/stories/${slug}`, it: `/it/stories/${slug}` } },
    openGraph: { title: story.title, description: story.subtitle, images: [story.image] },
    twitter: { card: 'summary_large_image', title: story.title, description: story.subtitle, images: [story.image] },
  };
}

export default async function LocalizedStoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const safeLocale = locale === 'it' ? 'it' : 'en';
  const story = safeLocale === 'it' ? italianStories[slug] : englishStories[slug];
  return <StoryExperience story={story} slug={slug} locale={safeLocale} />;
}
