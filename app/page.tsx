'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VisaServices from '@/components/VisaServices';
import CoreServices from '@/components/CoreServices';
import CountryList from '@/components/CountryList';
import WhyChooseUs from '@/components/WhyChooseUs';
import Benefits from '@/components/Benefits';
import ProcessSteps from '@/components/ProcessSteps';
import Statistics from '@/components/Statistics';
import SuccessStories from '@/components/SuccessStories';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import OurMentors from '@/components/OurMentors';
import CountryFlags from '@/components/CountryFlags';
import FeaturedSection from '@/components/FeaturedSection';
import ImmigrationProcess from "@/components/ImmigrationProcess"
import VisaSection from "@/components/VisaSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <ImmigrationProcess/> */}
      <VisaSection/>
      {/* <CountryFlags /> */}
      <FeaturedSection />
      {/* <VisaServices /> */}
      <CountryList />
      {/* <CoreServices /> */}
      <WhyChooseUs />
      <Benefits />
      <ProcessSteps />
      {/* <Statistics /> */}
      {/* <OurMentors /> */}
      {/* <SuccessStories /> */}
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}