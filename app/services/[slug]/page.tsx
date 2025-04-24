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
import CountrySlider from "@/components/CountryScroll/CountrySlider";

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
    <main className="min-h-screen  bg-gradient-to-b from-[#ffffff] to-[#AFC1DB]/20 dark:from-[#13294e] dark:to-[#13294e]/80 relative">
      <ServiceHeader service={service} />

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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ServiceGallery images={service.images} title={service.title} />
            </motion.div>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <ServiceBenefits benefits={service.benefits} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <CountriesList countries={service.countries} />
            </motion.section>

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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-[#AFC1DB]/20 dark:border-gray-700">
                <h3 className="text-xl font-bold text-[#13294E] dark:text-white mb-4">
                  Inquire About This Service
                </h3>
                <InquiryForm
                  services={services}
                  defaultService={service.title}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
