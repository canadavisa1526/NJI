"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import FAQAccordion from "@/components/service/faq-accordion";
import CountriesList from "@/components/service/countries-list";
import ServiceNotFound from "@/components/service/service-not-found";
import { services } from "@/data/services-data";
import RelatedServices from "@/components/service/related-services";
import VisaCountryDetails from "@/components/service/visa-country-details";
import WhyChooseUs from "@/components/service/why-choose-us";
import InsurancePlans from "@/components/service/insurance-plans";
import InsurancePricing from "@/components/service/insurance-pricing";
import ServiceHeroSection from "@/components/service/service-hero-section";
import IntegratedInquiryForm from "@/components/service/integrated-inquiry-form";
import ServiceProcessTimeline from "@/components/service/service-process-timeline";
import ServiceDetailsSection from "@/components/service/service-details-section";
import CoachingTabsSection from "@/components/service/coaching-tabs-section";


export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = services.find((s) => s.slug === slug);
  const [mounted, setMounted] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Auto-open inquiry modal after 3 seconds
    const timer = setTimeout(() => {
      setShowInquiryModal(true);
    }, 3000);

    // Show floating button after 10 seconds if modal was closed
    const floatingTimer = setTimeout(() => {
      setShowFloatingButton(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(floatingTimer);
    };
  }, []);

  if (!mounted) return null;
  if (!service) return <ServiceNotFound />;

  return (
    <main className="min-h-screen bg-white dark:bg-[#13294E] relative overflow-hidden">
      <ServiceHeroSection
        service={service}
        onOpenInquiry={() => setShowInquiryModal(true)}
      />

      <ServiceProcessTimeline serviceType={service.slug} />

      {/* Service Details Section - Conditional Rendering */}
      {service.serviceDetails && service.serviceDetails.length > 0 && (
        <>
          {service.slug === "coaching" ? (
            <CoachingTabsSection
              serviceDetails={service.serviceDetails}
              categories={service.categories || []}
            />
          ) : (
            <ServiceDetailsSection
              serviceDetails={service.serviceDetails}
              serviceTitle={service.title}
              categories={service.categories}
            />
          )}
        </>
      )}

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowInquiryModal(false);
              setShowFloatingButton(true);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-[#13294E] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowInquiryModal(false);
                  setShowFloatingButton(true);
                }}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#AFC1DB] dark:bg-[#13294E] hover:bg-[#FAA71A] dark:hover:bg-[#FAA71A] rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#13294E] dark:text-[#AFC1DB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="p-6 border-b border-[#AFC1DB] dark:border-[#AFC1DB]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#FAA71A] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#13294E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#13294E] dark:text-[#AFC1DB]">
                      Get Expert Consultation
                    </h3>
                    <p className="text-sm text-[#13294E] dark:text-[#AFC1DB]">
                      Start your {service.title.split(" - ")[0].toLowerCase()}{" "}
                      journey today
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <IntegratedInquiryForm
                  services={services}
                  defaultService={service.title}
                  isModal={true}
                  onClose={() => {
                    setShowInquiryModal(false);
                    setShowFloatingButton(true);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    
      {service.slug === "visitor-visa" && (
        <section className="py-16 bg-white dark:bg-[#13294E] relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative">
            <VisaCountryDetails
              serviceType={service.slug}
              onOpenInquiry={() => setShowInquiryModal(true)}
            />
          </div>
        </section>
      )}

      {service.slug === "insurance" && (
        <>
          <section className="py-16 bg-white dark:bg-[#13294E]">
            <div className="container mx-auto px-4 max-w-7xl">
              <InsurancePlans
                serviceType={service.slug}
                onOpenInquiry={() => setShowInquiryModal(true)}
              />
            </div>
          </section>

          <section className="py-16 bg-white dark:bg-[#13294E]">
            <div className="container mx-auto px-4 max-w-7xl">
              <InsurancePricing serviceType={service.slug} />
            </div>
          </section>
        </>
      )}

      <section className="py-2 bg-white dark:bg-[#13294E] relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative">
          <CountriesList countries={service.countries} />
        </div>
      </section>

      {service.slug === "visitor-visa" && (
        <section className="py-16 bg-white dark:bg-[#13294E] relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-32 h-32 bg-[#FAA71A] opacity-5 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 w-40 h-40 bg-[#13294E] opacity-5 rounded-full blur-2xl"
            />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative">
            <WhyChooseUs serviceType={service.slug} />
          </div>
        </section>
      )}

      <section className="py-2 bg-white dark:bg-[#13294E] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-24 h-24 opacity-5"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 10 L90 90 L10 90 Z" fill="#FAA71A" />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#AFC1DB] bg-opacity-20 dark:bg-[#FAA71A] dark:bg-opacity-10 border border-[#FAA71A] rounded-full mb-6">
              <div className="w-2 h-2 bg-[#FAA71A] rounded-full mr-2 animate-pulse" />
              <span className="text-[#13294E] dark:text-[#AFC1DB] font-semibold text-sm">
                Common Questions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
              Got Questions?
              <span className="block text-[#FAA71A]">We Have Answers</span>
            </h2>

            <p className="text-xl text-[#13294E] dark:text-[#AFC1DB] max-w-3xl mx-auto">
              Find answers to the most common questions about our{" "}
              {service.title.split(" - ")[0].toLowerCase()} services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="py-2 bg-white dark:bg-[#13294E] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-32 h-32 bg-[#FAA71A] opacity-5 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-[#AFC1DB] opacity-5 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-[#13294E] rounded-full border border-[#AFC1DB] mb-6">
              <div className="w-2 h-2 bg-[#FAA71A] rounded-full mr-2 animate-pulse" />
              <span className="text-[#13294E] dark:text-[#AFC1DB] font-semibold text-sm">
                Explore More Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
              Other Services
              <span className="block text-[#FAA71A]">You Might Need</span>
            </h2>
          </motion.div>

          <RelatedServices currentServiceSlug={service.slug} />
        </div>
      </section>
    </main>
  );
}
