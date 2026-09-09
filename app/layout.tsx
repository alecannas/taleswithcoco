import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tales with Coco | A family storybook',
  description:
    'A growing collection of bedtime stories, tiny wonders, and brave little adventures written by Emily and Alessandro for Coco.',
  icons: {
    icon: '/favicon.svg',
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
