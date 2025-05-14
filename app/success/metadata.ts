import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | New Journey Immigration & More',
  description: 'Discover inspiring success stories of individuals who achieved their dreams with New Journey Immigration. Real stories, real results.',
  keywords: [
    'Immigration success stories',
    'Study abroad success',
    'Visa success stories',
    'Immigration testimonials',
    'Student visa success',
    'PR visa success',
    'Work visa testimonials',
    'Canada immigration success',
    'Australia immigration success',
    'UK immigration success',
  ],
  openGraph: {
    title: 'Success Stories | New Journey Immigration & More',
    description: 'Discover inspiring success stories of individuals who achieved their dreams with New Journey Immigration. Real stories, real results.',
    url: 'https://yourdomain.com/success', // Replace with your real domain
    siteName: 'New Journey Immigration',
    images: [
      {
        url: '/success-og-image.png', // Optional: add this image in public folder
        width: 1200,
        height: 630,
        alt: 'New Journey Immigration Success Stories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories | New Journey Immigration & More',
    description: 'Discover inspiring success stories of individuals who achieved their dreams with New Journey Immigration. Real stories, real results.',
    images: ['/success-og-image.png'],
  },
};
