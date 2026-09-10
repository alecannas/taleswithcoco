import type { Metadata } from 'next';
import { HomePage, homeContent, type Locale } from '@/app/page';

export function generateStaticParams() {
  return Object.keys(homeContent).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === 'it';
  return {
    title: isItalian ? 'Tales with Coco 🌷 | Storie di famiglia' : 'Tales with Coco 🌷 | A family storybook',
    description: isItalian ? 'Storie della buonanotte scritte da mamma Emily e papà Ale per Coco.' : 'Bedtime stories written by mom Emily and dad Ale for Coco.',
    alternates: { languages: { en: '/en', it: '/it' } },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = locale === 'it' ? 'it' : 'en';
  return <HomePage locale={safeLocale} />;
}
