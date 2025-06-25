import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import StatsSection from '@/components/about/StatsSection';
import OurStorySection from '@/components/about/OurStorySection';
import FounderSection from '@/components/about/FounderSection';
// import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import GlobalPresenceSection from '@/components/about/GlobalPresenceSection';
import { TeamSection } from '@/components/about/team-section';

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <StatsSection />
      <OurStorySection />
      <FounderSection />
      {/* <TeamSection /> */}
      <TeamSection/>
      <ValuesSection />
      <GlobalPresenceSection />
    </div>
  );
};

export default AboutPage;