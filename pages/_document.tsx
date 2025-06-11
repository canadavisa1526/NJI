import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="New Journey Immigration" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#13294E" />
        <meta name="msapplication-TileColor" content="#13294E" />
        
        {/* Open Graph default tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="New Journey Immigration" />
        
        {/* Twitter Card default tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@newjourneyimmigration" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "New Journey Immigration",
              "url": "https://newjourneyimmigration.com",
              "logo": "https://newjourneyimmigration.com/logo.png",
              "description": "Professional immigration services for Canada, Australia, UK, USA and more. Expert visa consultation, IELTS coaching, and settlement support.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "City Center",
                "addressLocality": "Mehsana",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7623043499",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Gujarati", "Punjabi"]
              },
              "sameAs": [
                "https://www.facebook.com/newjourneyimmigration",
                "https://www.instagram.com/newjourneyimmigration",
                "https://www.linkedin.com/company/newjourneyimmigration"
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
