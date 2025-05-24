import Head from 'next/head';

interface SEOEnhancedProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOEnhanced = ({
  title = "New Journey Immigration | Expert Education & Immigration Consultancy",
  description = "Transform your future with New Journey Immigration. Expert guidance for study abroad, work visas, PR applications, and immigration services. 15,000+ successful placements across 50+ countries with 99% success rate.",
  keywords = [
    "immigration consultancy",
    "study abroad",
    "student visa",
    "work visa",
    "PR visa",
    "Canada immigration",
    "Australia immigration",
    "UK visa",
    "USA visa",
    "education consultancy",
    "IELTS coaching",
    "visa application",
    "overseas education",
    "immigration services"
  ],
  image = "/og-home.png",
  url = "https://www.newjourneyworld.com",
  type = "website",
  structuredData
}: SEOEnhancedProps) => {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "New Journey Immigration",
    "url": url,
    "logo": `${url}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7046272137",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/newjourneyimmigration",
      "https://www.instagram.com/newjourneyimmigration",
      "https://twitter.com/newjourneyimm",
      "https://www.linkedin.com/company/newjourneyimmigration"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "description": "Free consultation for immigration and education services",
      "price": "0",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Immigration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Visa Services",
            "description": "Complete assistance for student visa applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Work Visa Services",
            "description": "Professional work visa consultation and processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PR Visa Services",
            "description": "Permanent residency visa guidance and support"
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="New Journey Immigration" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="New Journey Immigration" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@newjourneyimm" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FAA71A" />
      <meta name="msapplication-TileColor" content="#FAA71A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  );
};

export default SEOEnhanced;
