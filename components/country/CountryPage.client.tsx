'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CountryHero } from '@/components/country/country-hero';
import { SubNavbar } from '@/components/country/sub-navbar';
import { WhyChooseSection } from '@/components/country/why-choose-section';
import { InstitutionsSection } from '@/components/country/institutions-section';
import { CoursesSection } from '@/components/country/courses-section';
import { JobsSection } from '@/components/country/jobs-section';
import { CostSection } from '@/components/country/cost-section';
import { SuccessStoriesSection } from '@/components/country/success-stories-section';
import { FAQSection } from '@/components/country/faq-section';
import { InquiryForm } from '@/components/country/inquiry-form';
import { Card, CardContent } from '@/components/ui/card';
import { Modal } from '@/components/ui/Modal'; // Import the reusable modal

interface CountryPageClientProps {
  country: any;
  countries: any[];
  slug: string;
}

export default function CountryPageClient({ country, countries, slug }: CountryPageClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const router = useRouter(); // To navigate programmatically

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formFilled) setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [formFilled]);

  const handleFormSubmit = () => {
    setFormFilled(true);
    setShowModal(false);
  };

  const handleModalClose = () => {
    if (!formFilled) {
      router.push('#about'); // Scroll to the About section
    }
    setShowModal(false);
  };

  const showBlur = showModal && !formFilled;

  return (
    <main className="relative">
      {/* Reusable Modal Component */}
      <Modal isOpen={showModal} onClose={handleModalClose} title="Let’s help you plan better">
        <InquiryForm onSubmit={handleFormSubmit} />
      </Modal>

      {/* Apply blur if modal is open and form is not filled */}
      <div className={showBlur ? 'pointer-events-none blur-sm transition-all' : 'transition-all'}>
        <CountryHero country={country} />
        <SubNavbar />

        <section id="about" className="py-16 bg-[#13294E]/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#13294E] dark:text-white">
                  About <span className="text-[#FAA71A]">{country.name}</span>
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg mb-4">{country.about?.description}</p>
                  <ul className="space-y-2">
                    {country.about?.keyPoints.map((point: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-[#FAA71A]">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {!formFilled && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 inline-block bg-[#FAA71A] text-white px-6 py-2 rounded-lg shadow hover:bg-[#e69819]"
                  >
                    Fill Form
                  </button>
                )}
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src={country.about?.image} alt={`${country.name} landscape`} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <WhyChooseSection country={country} />
        <InstitutionsSection country={country} />
        <CoursesSection country={country} />
        <JobsSection country={country} />
        <CostSection country={country} />
        <SuccessStoriesSection country={country} />
        <FAQSection country={country} />

        <section className="py-16 bg-[#13294E]">
          <div className="container">
            <div className="bg-white/95 dark:bg-[#13294E]/95 p-6 rounded-xl max-w-3xl mx-auto">
              <InquiryForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </section>

        {countries.length > 1 && (
          <section className="py-16 bg-[#13294E]/5">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Explore Other <span className="text-[#FAA71A]">Destinations</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries
                  .filter((c) => c.slug !== slug)
                  .map((otherCountry) => (
                    <Link href={`/${otherCountry.slug}`} key={otherCountry.slug} className="group">
                      <Card className="overflow-hidden border-2 border-transparent hover:border-[#FAA71A] transition-all">
                        <div className="relative h-32 overflow-hidden">
                          <Image
                            src={otherCountry.flag}
                            alt={otherCountry.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#13294E]/80 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <h3 className="text-xl font-bold text-white">{otherCountry.name}</h3>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {otherCountry.features.slice(0, 2).map((feature: string, i: number) => (
                              <span
                                key={i}
                                className="bg-[#AFC1DB]/20 text-[#13294E] dark:text-[#AFC1DB] px-2 py-1 rounded-md text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
