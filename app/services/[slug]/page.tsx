"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import InquiryForm from "@/components/service/inquiry-form";
import ServiceGallery from "@/components/service/service-gallery";
import FAQAccordion from "@/components/service/faq-accordion";
import ServiceBenefits from "@/components/service/service-benefits";
import ServiceHeader from "@/components/service/service-header";
import CountriesList from "@/components/service/countries-list";
import ServiceNotFound from "@/components/service/service-not-found";
import { services } from "@/data/services-data";

import ServiceProcess from "@/components/service/service-process";
import ServiceTestimonials from "@/components/service/service-testimonials";
import DocumentChecklist from "@/components/service/document-checklist";
import RelatedServices from "@/components/service/related-services";
import ExpertTeam from "@/components/service/expert-team";
import ServiceCTA from "@/components/service/service-cta";
import ServiceStats from "@/components/service/service-stats";

const highlightKeywords = (text: string) => {
  const keywords = [
    "visa",
    "immigration",
    "passport",
    "application",
    "documentation",
    "requirements",
    "eligibility",
    "support",
    "assistance",
    "guidance",
  ];

  return text.split(" ").map((word, index) => {
    const lowerWord = word.toLowerCase().replace(/[.,!?]/g, "");
    if (keywords.includes(lowerWord)) {
      return (
        <span
          key={index}
          className="text-[#FAA71A] dark:text-[#FAA71A] font-medium"
        >
          {word + " "}
        </span>
      );
    }

    return <span key={index}>{word + " "}</span>;
  });
};

const decorativeShapes = [
  "before:content-[''] before:absolute before:top-20 before:-left-10 before:w-40 before:h-40 before:bg-[#FAA71A]/5 before:rounded-full before:blur-3xl dark:before:bg-[#FAA71A]/10",
  "after:content-[''] after:absolute after:bottom-20 after:-right-10 after:w-60 after:h-60 after:bg-[#13294E]/5 after:rounded-full after:blur-3xl dark:after:bg-[#13294E]/10",
];

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
    <main className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#AFC1DB]/20 dark:from-[#13294e] dark:to-[#13294e]/80 relative">
      <ServiceHeader service={service} />

      {/* Service Stats Section */}
      {/* <div className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-y border-[#AFC1DB]/20 dark:border-gray-700">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <ServiceStats serviceType={service.slug} />
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 relative ${decorativeShapes.join(
            " "
          )}`}
        >
          <div className="lg:col-span-2">
            {/* Service Overview */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
                Service Overview
              </h2>
              <div className="prose max-w-none dark:prose-invert">
                {service.details.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {highlightKeywords(paragraph.trim())}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Service Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ServiceGallery images={service.images} title={service.title} />
            </motion.div>

            {/* Service Benefits */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <ServiceBenefits benefits={service.benefits} />
            </motion.section>

            {/* Countries List */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <CountriesList countries={service.countries} />
            </motion.section>
          </div>

          {/* Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Inquiry Form */}
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-[#AFC1DB]/20 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-[#FAA71A] rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-[#13294E] dark:text-white">
                    Get Expert Consultation
                  </h3>
                </div>
                <div className="mb-4 p-3 bg-[#FAA71A]/10 rounded-lg border border-[#FAA71A]/20">
                  <p className="text-sm text-[#13294E] dark:text-white font-medium">
                    ✨ Free consultation available
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    Get personalized guidance for your{" "}
                    {service.title.toLowerCase()} application
                  </p>
                </div>
                <InquiryForm
                  services={services}
                  defaultService={service.title}
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#13294E] to-[#FAA71A] rounded-xl p-6 text-white shadow-xl">
                <h4 className="font-bold mb-3">Need Immediate Help?</h4>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-medium">Call Now</p>
                      <p className="text-sm opacity-90">91 7623 043 499</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex items-center space-x-3 hover:bg-white/10 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      💬
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm opacity-90">Quick Response</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Full Width Sections */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Process Section */}
          <ServiceProcess serviceType={service.slug} />

          {/* Document Checklist */}
          <DocumentChecklist serviceType={service.slug} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Success Stories */}
        {/* <ServiceTestimonials serviceType={service.slug} /> */}

        {/* Expert Team */}
        {/* <ExpertTeam serviceType={service.slug} /> */}

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </motion.section>

        {/* Related Services */}
        <RelatedServices currentServiceSlug={service.slug} />

        {/* Call to Action */}
        {/* <ServiceCTA serviceTitle={service.title} /> */}
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <motion.a
            href="https://wa.me/917623043499"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
            </svg>
          </motion.a>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>
      </motion.div>
    </main>
  );
}
