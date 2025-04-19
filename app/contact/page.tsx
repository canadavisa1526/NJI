"use client";

import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactStats from "@/components/contact/ContactStats";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationsMap from "@/components/contact/LocationsMap";
import PartnerBenefits from "@/components/contact/PartnerBenefits";
import GlobalPresence from "@/components/contact/GlobalPresence";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      <ContactHero />
      <ContactStats />
      <ContactInfo />
      <LocationsMap />
      <PartnerBenefits />
      <GlobalPresence />
    </div>
  );
}