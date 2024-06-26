import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        alt: 'HUSH HUSH Logo',
        url: '/images/opengraph-image.png',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        alt: 'HUSH HUSH Logo',
        url: '/images/opengraph-image.png',
      },
    ],
  },
  other: {
    'darkreader-lock': 'darkreader-lock',
  },
  authors: [
    {
      name: 'Dolan Reynolds',
      url: 'https://dolan.dev',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=' scroll-smooth'>
      <body className='overflow-x-hidden bg-neutral-900 '>{children}</body>
    </html>
  );
}
