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
      <InitialLoader />
      <main className="min-h-screen">
        <Hero />
        <div>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-32 bg-gray-100 animate-pulse" />}
            >
              <CountrySlider />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-64 bg-gray-100 animate-pulse" />}
            >
              <VisaSection />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-96 bg-gray-100 animate-pulse" />}
            >
              <FeaturedSection />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-80 bg-gray-100 animate-pulse" />}
            >
              <CountryList />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-96 bg-gray-100 animate-pulse" />}
            >
              <WhyChooseUs />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-80 bg-gray-100 animate-pulse" />}
            >
              <Benefits />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-96 bg-gray-100 animate-pulse" />}
            >
              <ProcessSteps />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-80 bg-gray-100 animate-pulse" />}
            >
              <EnhancedSuccessStories />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-48 bg-gray-100 animate-pulse" />}
            >
              <Partners />
            </Suspense>
          </section>
          <section className="py-8">
            <Suspense
              fallback={<div className="h-96 bg-gray-100 animate-pulse" />}
            >
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
