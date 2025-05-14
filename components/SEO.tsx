'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'EducationalOrganization' | 'Service' | 'FAQPage' | 'Article';
  schemaData?: any;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  schemaType,
  schemaData,
}: SEOProps) {
  const pathname = usePathname();
  const baseUrl = 'https://www.newjourneyworld.com';
  const currentUrl = `${baseUrl}${pathname}`;
  const canonical = canonicalUrl || currentUrl;

  // Default schema data based on type
  let schema: any = {};
  
  if (schemaType === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title || 'Immigration and Education Services',
      provider: {
        '@type': 'Organization',
        name: 'New Journey Immigration',
        url: baseUrl,
      },
      description: description || 'Professional immigration and education consultancy services',
      url: canonical,
      ...schemaData,
    };
  } else if (schemaType === 'FAQPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: schemaData || [],
    };
  } else if (schemaType === 'Article') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: ogImage,
      author: {
        '@type': 'Organization',
        name: 'New Journey Immigration',
      },
      publisher: {
        '@type': 'Organization',
        name: 'New Journey Immigration',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: schemaData?.datePublished || new Date().toISOString(),
      dateModified: schemaData?.dateModified || new Date().toISOString(),
      ...schemaData,
    };
  }

  return (
    <>
      {/* Page-specific schema */}
      {schemaType && (
        <Script
          id={`schema-${schemaType.toLowerCase()}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
