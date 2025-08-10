import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";
import Script from "next/script";
import { PostHogProvider } from "@/components/PostHogProvider";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "New Journey Immigration | Education & Immigration Consultancy",
    template: "%s | New Journey Immigration",
  },
  description:
    "New Journey Immigration is a trusted education and immigration consultancy helping students and professionals achieve their dreams of studying, working, and settling abroad. Expert guidance for visas, university admissions, and immigration services.",
  keywords: [
    "Immigration services",
    "Study abroad",
    "Student visa",
    "PR visa",
    "IELTS coaching",
    "Work visa",
    "Visa consultancy",
    "Canada visa",
    "Australia immigration",
    "Global education partner",
    "UK visa",
    "USA visa",
    "New Zealand visa",
    "Germany visa",
    "Singapore visa",
    "Education services",
    "Overseas education",
    "International education",
    "Immigration consultant",
    "Visa application",
    "Visa processing",
    "Study permit",
    "Work permit",
    "Permanent residency",
    "Express entry",
    "Skilled migration",
    "Student counseling",
    "Career guidance",
    "University admission",
    "College application",
    "Scholarship assistance",
    "Best immigration consultancy",
    "Top education consultancy",
    "Affordable visa services",
    "Trusted immigration experts",
    "Successful visa applications",
  ],
  authors: [
    { name: "New Journey Immigration", url: "https://www.newjourneyworld.com" },
  ],
  creator: "New Journey Immigration",
  publisher: "New Journey Immigration",
  icons: {
    icon: "/svg/Asset_4.svg",
    shortcut: "/svg/Asset_4.svg",
    apple: "/svg/Asset_4.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.newjourneyworld.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "New Journey Immigration | Education & Immigration Experts",
    description:
      "Trusted education and immigration consultancy helping students and professionals achieve their dreams of studying, working, and living abroad. Expert guidance for visas, university admissions, and immigration services.",
    url: "https://www.newjourneyworld.com",
    siteName: "New Journey Immigration",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "New Journey Immigration - Education & Immigration Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Journey Immigration | Education & Immigration Experts",
    description:
      "Trusted education and immigration consultancy helping students and professionals achieve their dreams of studying, working, and living abroad.",
    images: ["/og-image.png"],
    creator: "@newjourneyimm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education & Immigration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon." type="image/png" />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "New Journey Immigration",
              url: "https://www.newjourneyworld.com",
              logo: "https://www.newjourneyworld.com/logo.png",
              sameAs: [
                "https://www.facebook.com/newjourneyimmigration",
                "https://www.instagram.com/newjourneyimmigration",
                "https://twitter.com/newjourneyimm",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 987-654-3210",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your Region",
                postalCode: "Your Postal Code",
                addressCountry: "IN",
              },
              description:
                "New Journey Immigration is a trusted education and immigration consultancy helping students and professionals achieve their dreams of studying, working, and living abroad.",
            }),
          }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "New Journey Immigration",
              image: "https://www.newjourneyworld.com/og-image.png",
              priceRange: "$$",
              telephone: "++91 987-654-3210",
              email: "support@newjourneyworld.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your Region",
                postalCode: "Your Postal Code",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "YOUR_LATITUDE",
                longitude: "YOUR_LONGITUDE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              url: "https://www.newjourneyworld.com",
            }),
          }}
        />
        <Script
          id="schema-educational-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "New Journey Immigration",
              url: "https://www.newjourneyworld.com",
              logo: "https://www.newjourneyworld.com/logo.png",
              description:
                "New Journey Immigration provides expert guidance for international education, visa applications, and immigration services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your Region",
                postalCode: "Your Postal Code",
                addressCountry: "IN",
              },
              telephone: "+91-7046272137",
              email: "info@newjourneyworld.com",
            }),
          }}
        />

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/hero-poster.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F397LCK0B1"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Enhanced eCommerce and Advanced Tracking Configuration
              gtag('config', 'G-F397LCK0B1', {
                // Enhanced measurement features
                enhanced_measurement: true,
                page_title: true,
                send_page_view: true,

                // Custom parameters for immigration consultancy
                custom_map: {
                  'custom_parameter_1': 'service_type',
                  'custom_parameter_2': 'country_interest',
                  'custom_parameter_3': 'consultation_type',
                  'custom_parameter_4': 'lead_source'
                },

                // User engagement tracking
                engagement_time_msec: 100,

                // Conversion tracking
                allow_enhanced_conversions: true,
                allow_ad_personalization_signals: true
              });

              // Advanced Event Tracking Functions
              window.trackEvent = function(eventName, parameters = {}) {
                gtag('event', eventName, {
                  event_category: parameters.category || 'engagement',
                  event_label: parameters.label || '',
                  value: parameters.value || 0,
                  ...parameters
                });
              };

              // Immigration-specific tracking functions
              window.trackConsultation = function(type, country, service) {
                gtag('event', 'consultation_request', {
                  event_category: 'lead_generation',
                  consultation_type: type,
                  country_interest: country,
                  service_type: service,
                  value: 100 // Assign value to consultation requests
                });
              };

              window.trackServiceInterest = function(service, country) {
                gtag('event', 'service_interest', {
                  event_category: 'engagement',
                  service_type: service,
                  country_interest: country,
                  event_label: service + '_' + country
                });
              };

              window.trackFormSubmission = function(formType, formData) {
                gtag('event', 'form_submit', {
                  event_category: 'lead_generation',
                  form_type: formType,
                  form_data: JSON.stringify(formData),
                  value: formType === 'consultation' ? 150 : 50
                });
              };

              window.trackDownload = function(fileName, fileType) {
                gtag('event', 'file_download', {
                  event_category: 'engagement',
                  file_name: fileName,
                  file_type: fileType,
                  event_label: fileName
                });
              };

              window.trackPhoneCall = function(source) {
                gtag('event', 'phone_call_click', {
                  event_category: 'lead_generation',
                  call_source: source,
                  value: 200 // High value for phone calls
                });
              };

              window.trackWhatsAppClick = function(source, message) {
                gtag('event', 'whatsapp_click', {
                  event_category: 'lead_generation',
                  whatsapp_source: source,
                  message_type: message,
                  value: 75
                });
              };

              window.trackCountrySelection = function(country, source) {
                gtag('event', 'country_selection', {
                  event_category: 'engagement',
                  country_selected: country,
                  selection_source: source
                });
              };

              window.trackScrollDepth = function(percentage) {
                gtag('event', 'scroll', {
                  event_category: 'engagement',
                  scroll_depth: percentage,
                  event_label: percentage + '%'
                });
              };

              window.trackVideoPlay = function(videoTitle, duration) {
                gtag('event', 'video_play', {
                  event_category: 'engagement',
                  video_title: videoTitle,
                  video_duration: duration
                });
              };

              window.trackTestimonialView = function(testimonialId) {
                gtag('event', 'testimonial_view', {
                  event_category: 'engagement',
                  testimonial_id: testimonialId
                });
              };

              // Enhanced Conversion Tracking
              window.trackConversion = function(conversionType, value, currency = 'INR') {
                gtag('event', 'conversion', {
                  event_category: 'conversion',
                  conversion_type: conversionType,
                  value: value,
                  currency: currency,
                  send_to: 'G-F397LCK0B1'
                });
              };

              // User Journey Tracking
              window.trackUserJourney = function(stage, details) {
                gtag('event', 'user_journey', {
                  event_category: 'user_flow',
                  journey_stage: stage,
                  stage_details: details
                });
              };

              // Page Performance Tracking
              window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    gtag('event', 'page_performance', {
                      event_category: 'performance',
                      page_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                      dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
                      first_contentful_paint: Math.round(perfData.responseEnd - perfData.fetchStart)
                    });
                  }
                }, 1000);
              });

              // Error Tracking
              window.addEventListener('error', function(e) {
                gtag('event', 'javascript_error', {
                  event_category: 'error',
                  error_message: e.message,
                  error_filename: e.filename,
                  error_lineno: e.lineno
                });
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>
              <Navbar />
              {children}
              <Footer />
              <WhatsAppFloatingButton />
            </Suspense>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
