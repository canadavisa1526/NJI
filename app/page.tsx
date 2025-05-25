import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Metadata } from "next";

// Lazy load components for better performance
const CountrySlider = dynamic(
  () => import("@/components/CountryScroll/CountrySlider"),
  {
    loading: () => <div className="h-32 bg-gray-100 animate-pulse" />,
  }
);

const VisaSection = dynamic(() => import("@/components/VisaSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

const FeaturedSection = dynamic(() => import("@/components/FeaturedSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const CountryList = dynamic(() => import("@/components/CountryList"), {
  loading: () => <div className="h-80 bg-gray-100 animate-pulse" />,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const Benefits = dynamic(() => import("@/components/Benefits"), {
  loading: () => <div className="h-80 bg-gray-100 animate-pulse" />,
});

const ProcessSteps = dynamic(() => import("@/components/ProcessSteps"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const EnhancedSuccessStories = dynamic(
  () => import("@/components/EnhancedSuccessStories"),
  {
    loading: () => <div className="h-80 bg-gray-100 animate-pulse" />,
  }
);

const Partners = dynamic(() => import("@/components/Partners"), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

// Import the InitialLoader with no SSR to avoid hydration issues
const InitialLoader = dynamic(() => import("@/components/InitialLoader"), {
  ssr: false,
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "New Journey Immigration | Expert Education & Immigration Consultancy",
  description:
    "Transform your future with New Journey Immigration. Expert guidance for study abroad, work visas, PR applications, and immigration services. 15,000+ successful placements across 50+ countries with 99% success rate.",
  keywords: [
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
    "immigration services",
  ],
  openGraph: {
    title:
      "New Journey Immigration | Expert Education & Immigration Consultancy",
    description:
      "Transform your future with expert immigration and education services. 15,000+ successful placements with 99% success rate.",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "New Journey Immigration - Your Gateway to Global Opportunities",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New Journey Immigration | Expert Education & Immigration Consultancy",
    description:
      "Transform your future with expert immigration and education services. 15,000+ successful placements with 99% success rate.",
    images: ["/og-home.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* This will show the loader for 1 second when the home page loads */}
      <InitialLoader />

      <main className="min-h-screen overflow-hidden">
        {/* Hero section loads immediately for better LCP */}
        <Hero />

        {/* Modern Section Layout with improved spacing and visual separators */}
        <div className="relative">
          {/* Country Slider Section */}
          <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
            <Suspense fallback={<div className="h-32 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <CountrySlider />
            </Suspense>
            {/* Decorative wave separator */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 120" className="w-full h-auto">
                <path fill="currentColor" className="text-white dark:text-gray-900" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
              </svg>
            </div>
          </section>

          {/* Visa Section */}
          <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
            <Suspense fallback={<div className="h-64 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <VisaSection />
            </Suspense>
          </section>

          {/* Featured Section with gradient background */}
          <section className="relative bg-gradient-to-br from-[#13294E]/5 to-[#FAA71A]/5 dark:from-[#13294E]/20 dark:to-[#FAA71A]/20 py-16 md:py-24">
            <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <FeaturedSection />
            </Suspense>
            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#FAA71A]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#13294E]/10 rounded-full blur-xl"></div>
          </section>

          {/* Country List Section */}
          <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
            <Suspense fallback={<div className="h-80 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <CountryList />
            </Suspense>
          </section>

          {/* Why Choose Us with pattern background */}
          <section className="relative bg-gray-50 dark:bg-gray-800 py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAA71A' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <WhyChooseUs />
            </Suspense>
          </section>

          {/* Benefits Section */}
          <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
            <Suspense fallback={<div className="h-80 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <Benefits />
            </Suspense>
          </section>

          {/* Process Steps with gradient */}
          <section className="relative bg-gradient-to-r from-[#13294E] to-[#1a365d] py-16 md:py-24">
            <Suspense fallback={<div className="h-96 bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <ProcessSteps />
            </Suspense>
          </section>

          {/* Success Stories */}
          <section className="relative bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
            <Suspense fallback={<div className="h-80 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <EnhancedSuccessStories />
            </Suspense>
          </section>

          {/* Partners Section */}
          <section className="relative bg-white dark:bg-gray-900 py-12 md:py-16">
            <Suspense fallback={<div className="h-48 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <Partners />
            </Suspense>
          </section>

          {/* Testimonials with final gradient */}
          <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
            <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg mx-4" />}>
              <Testimonials />
            </Suspense>
          </section>
        </div>
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "New Journey Immigration - Home",
            description:
              "Expert immigration and education consultancy services with 15,000+ successful placements across 50+ countries.",
            url: "https://www.newjourneyworld.com",
            mainEntity: {
              "@type": "Organization",
              name: "New Journey Immigration",
              description: "Leading immigration and education consultancy",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1500",
                bestRating: "5",
              },
              offers: {
                "@type": "Offer",
                description:
                  "Free consultation for immigration and education services",
                price: "0",
                priceCurrency: "INR",
              },
            },
          }),
        }}
      />
    </>
  );
}
