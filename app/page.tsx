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
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CountrySlider />
      <VisaSection />
      <FeaturedSection />
      <CountryList />
      <WhyChooseUs />
      <Benefits />
      <ProcessSteps />
      <Partners />
      <Testimonials />
    </main>
  );
}
