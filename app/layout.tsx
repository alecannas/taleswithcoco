import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tales-with-coco.alecannas.chatgpt.site'),
  title: 'Tales with Coco | A family storybook',
  description:
    'A growing collection of bedtime stories, tiny wonders, and brave little adventures written by Emily and Alessandro for Coco.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Tales with Coco',
    description: 'Little stories, big wonder—made with love for Coco.',
    images: [{ url: '/og.png', width: 1672, height: 941 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tales with Coco',
    description: 'Little stories, big wonder—made with love for Coco.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
