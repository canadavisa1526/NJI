"use client";

import React from "react";
import ContactHero from "@/components/contact/ContactHero";

import ContactInfo from "@/components/contact/ContactInfo";
import LocationsMap from "@/components/contact/LocationsMap";
import PartnerBenefits from "@/components/contact/PartnerBenefits";
import GlobalPresenceSection from "@/components/about/GlobalPresenceSection";
import StatsSection from "@/components/about/StatsSection";
import CountrySlider from "@/components/CountryScroll/CountrySlider";

// import GlobalPresence from "@/components/contact/GlobalPresence";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      <ContactHero />
      {/* <ContactStats /> */}
      <div className="bg-[#F8FAFC] dark:bg-[#1E3A8A] py-8 md:py-16">
        <StatsSection />
      </div>
      {/* <CountrySlider /> */}
      <ContactInfo />
      <LocationsMap />
      <PartnerBenefits />
      {/* <GlobalPresence /> */}
      <GlobalPresenceSection />
    </div>
  );
}
