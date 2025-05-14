import React from "react";
import SuccessHero from "@/components/success/HeroSection";
import EnhancedSuccessStories from "@/components/EnhancedSuccessStories";
import SuccessStats from "@/components/success/SuccessStats";
import TestimonialGrid from "@/components/success/TestimonialGrid";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | New Journey Immigration",
  description:
    "Discover inspiring success stories of individuals who achieved their dreams with New Journey Immigration. Real stories, real results.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen">
      <SuccessHero />
      <SuccessStats />
      <EnhancedSuccessStories />
      <TestimonialGrid />
      <ContactCTA />
    </main>
  );
}
