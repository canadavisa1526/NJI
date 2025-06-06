"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/service/faq-accordion";
import ServiceBenefits from "@/components/service/service-benefits";
import ServiceHeader from "@/components/service/service-header";
import CountriesList from "@/components/service/countries-list";
import ServiceNotFound from "@/components/service/service-not-found";
import { services } from "@/data/services-data";
import RelatedServices from "@/components/service/related-services";
import VisaCountryDetails from "@/components/service/visa-country-details";
import WhyChooseUs from "@/components/service/why-choose-us";
import InsurancePlans from "@/components/service/insurance-plans";
import InsurancePricing from "@/components/service/insurance-pricing";
import InquiryModal from "@/components/service/inquiry-modal";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#AFC1DB]/20 dark:from-[#13294e] dark:to-[#13294e]/80 relative pb-20 md:pb-0">
      <ServiceHeader service={service} />

      {/* Service Stats Section */}
      {/* <div className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-y border-[#AFC1DB]/20 dark:border-gray-700">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <ServiceStats serviceType={service.slug} />
        </div>
      </div> */}

      {/* Stunning Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-orange-900/20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FAA71A]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#13294E]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FAA71A]/5 to-[#13294E]/5 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 max-w-7xl flex items-center min-h-screen">
          <div className="w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                <span className="w-3 h-3 bg-[#FAA71A] rounded-full mr-3 animate-pulse"></span>
                <span className="text-[#13294E] dark:text-white font-semibold">Professional Immigration Services</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#13294E] dark:text-white mb-8 leading-none tracking-tight">
                {service.title.split(' - ')[0]}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>

        

            
           
          </div>
        </div>
      </div>

      {/* Modern Features Section */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-white mb-6">
              How We Help You
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach ensures your success at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.details
              .split("\n\n")
              .filter(para => para.trim().length > 50)
              .slice(0, 6)
              .map((paragraph, index) => {
                const cleanText = paragraph.trim().replace(/[🌍✅📋💰🎯🏆👨‍👩‍👧‍👦📝💼⚡📞🔒💬🛡️]/g, '');
                const title = cleanText.split('.')[0];
                const content = cleanText.split('.').slice(1).join('.').trim();

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FAA71A]/5 to-[#13294E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FAA71A] to-[#13294E] rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      <h3 className="text-xl font-bold text-[#13294E] dark:text-white mb-4 group-hover:text-[#FAA71A] transition-colors">
                        {title.length > 50 ? title.substring(0, 50) + '...' : title}
                      </h3>

                      {content && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {content.length > 120 ? content.substring(0, 120) + '...' : content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Visa Country Details - Only for visitor visa */}
      {service.slug === "visitor-visa" && (
        <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <VisaCountryDetails serviceType={service.slug} />
          </div>
        </div>
      )}

      {/* Service Benefits */}
      <div className="bg-white dark:bg-gray-800 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <ServiceBenefits benefits={service.benefits} />
        </div>
      </div>

      {/* Insurance Plans - Only for insurance service */}
      {service.slug === "insurance" && (
        <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <InsurancePlans serviceType={service.slug} />
          </div>
        </div>
      )}

      {/* Insurance Pricing - Only for insurance service */}
      {service.slug === "insurance" && (
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <InsurancePricing serviceType={service.slug} />
          </div>
        </div>
      )}

      {/* Countries List */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <CountriesList countries={service.countries} />
        </div>
      </div>

      {/* Why Choose Us - Only for visitor visa */}
      {service.slug === "visitor-visa" && (
        <div className="bg-gradient-to-r from-[#13294E]/5 to-[#FAA71A]/5 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <WhyChooseUs serviceType={service.slug} />
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our {service.title.toLowerCase()} services
            </p>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </div>

      {/* Success Stories - Full Width */}

      {/* Related Services - Full Width */}
      <div className="bg-gradient-to-r from-[#13294E]/5 to-[#FAA71A]/5 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <RelatedServices currentServiceSlug={service.slug} />
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal services={services} defaultService={service.title} />
    </main>
  );
}
