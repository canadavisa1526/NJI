import Hero from "@/components/Hero";
import CountryList from "@/components/CountryList";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FeaturedSection from "@/components/FeaturedSection";
import VisaSection from "@/components/VisaSection";
import Partners from "@/components/Partners";
import CountrySlider from "@/components/CountryScroll/CountrySlider";
import EnhancedSuccessStories from "@/components/EnhancedSuccessStories";
import dynamic from "next/dynamic";

// Import the InitialLoader with no SSR to avoid hydration issues
const InitialLoader = dynamic(() => import("@/components/InitialLoader"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* This will show the loader for 1 second when the home page loads */}
      <InitialLoader />

      <main className="min-h-screen">
        <Hero />
        <CountrySlider />
        <VisaSection />
        <FeaturedSection />
        <CountryList />
        <WhyChooseUs />
        <Benefits />
        <ProcessSteps />
        <EnhancedSuccessStories />
        <Partners />
        <Testimonials />
      </main>
    </>
  );
}
