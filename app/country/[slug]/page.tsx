"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// import { countriesDetailData } from '@/app/data/countries-data';
import HeroSection from "@/components/country/HeroSection";
import Submenu from "@/components/country/Submenu";
import AboutSection from "@/components/country/AboutSection";
import FeatureStats from "@/components/country/FeatureStats";
import WhyChooseSection from "@/components/country/WhyChooseSection";
import TopInstitutionsSection from "@/components/country/TopInstitutionsSection";
import CourseSection from "@/components/country/CourseSection";
import CostSection from "@/components/country/CostSection";
import JobOpportunitiesSection from "@/components/country/JobOpportunitiesSection";
import SuccessStoriesSection from "@/components/country/SuccessStoriesSection";
import FaqSection from "@/components/country/FaqSection";
import InquiryForm from "@/components/country/InquiryForm";
import ExploreCountriesSection from "@/components/country/ExploreCountriesSection";
import NotFound from "@/app/not-found";
import { CountryInquiryModal } from "@/components/country/CountryInquiryModal";
import { countriesDetailData } from "@/data/countries-data";
import { DetailedCountry } from "@/types/country";
import Loading from "@/app/loading";
// import { countriesDetailData } from '@/data/countries-data';

export default function CountryDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const [country, setCountry] = useState<DetailedCountry | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (
      slug &&
      countriesDetailData &&
      countriesDetailData[slug as keyof typeof countriesDetailData]
    ) {
      setCountry(countriesDetailData[slug as keyof typeof countriesDetailData]);
    }
    setLoading(false);

    // Show modal after 5 seconds
    const modalTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsBlurred(true);
      }
    }, 5000);

    return () => clearTimeout(modalTimer);
  }, [slug, hasInteracted]);

  if (loading) {
    return (
      // <div className="min-h-screen flex items-center justify-center">
      //   <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FAA71A]"></div>
      // </div>
      <Loading />
    );
  }

  if (!country) {
    return <NotFound />;
  }

  const sections = [
    { id: "about", label: "About" },
    { id: "why-choose", label: "Why Choose" },
    { id: "top-institutions", label: "Top Institutions" },
    { id: "courses", label: "Top Courses" },
    { id: "job-opportunities", label: "Job Opportunities" },
    { id: "cost", label: "Cost Breakdown" },
    { id: "success-stories", label: "Success Stories" },
    { id: "faq", label: "FAQ" },
    { id: "inquire", label: "Inquire Now" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {isBlurred && !hasInteracted && (
        <CountryInquiryModal
          country={country.name}
          onSubmit={() => {
            setHasInteracted(true);
            setIsBlurred(false);
          }}
        />
      )}

      <div className={isBlurred && !hasInteracted ? "blur-md" : ""}>
        <HeroSection country={country} />
        <Submenu sections={sections} />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div id="about">
            <AboutSection country={country} />
          </div>

          <div className="my-16">
            <FeatureStats country={country} />
          </div>

          <div id="why-choose" className="my-16">
            <WhyChooseSection country={country} />
          </div>

          <div id="top-institutions" className="my-16">
            <TopInstitutionsSection country={country} />
          </div>

          <div id="courses" className="my-16">
            <CourseSection country={country} />
          </div>

          <div id="job-opportunities" className="my-16">
            <JobOpportunitiesSection country={country} />
          </div>

          <div id="cost" className="my-16">
            <CostSection country={country} />
          </div>

          <div id="success-stories" className="my-16">
            <SuccessStoriesSection country={country} />
          </div>

          <div id="faq" className="my-16">
            <FaqSection country={country} />
          </div>

          <div id="inquire" className="my-16">
            <InquiryForm country={country.name} />
          </div>
        </div>

        <ExploreCountriesSection currentCountry={country.name} />
      </div>
    </main>
  );
}
