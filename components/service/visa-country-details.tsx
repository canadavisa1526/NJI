"use client";

import { motion } from "framer-motion";
import { Clock, FileText, Globe, CheckCircle, Plane } from "lucide-react";

interface VisaCountryDetailsProps {
  serviceType: string;
  onOpenInquiry?: () => void;
}

const visaCountryData = {
  "visitor-visa": [
    {
      country: "🇨🇦 Canada",
      title: "Canada Visitor Visa",
      purpose: "Tourism, visiting family/friends, business meetings",
      validity: "Up to 10 years (multiple-entry)",
      requirements:
        "Valid passport, invitation letter (if any), proof of funds, strong ties to home country",
      support:
        "Full application prep, help with biometrics, SOP writing, interview readiness",
      // Use consistent colors:
      color: "rgba(250, 167, 26, 0.1)", // subtle orange overlay
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
    {
      country: "🇺🇸 USA",
      title: "USA Visitor Visa (B1/B2)",
      purpose: "Business (B1), Tourism/Family (B2)",
      validity: "Up to 10 years",
      requirements:
        "DS-160 Form, Visa Fee Guidance, Interview Training, Travel History Review",
      support:
        "Complete application assistance, interview preparation, document review",
      color: "rgba(250, 167, 26, 0.1)",
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
    {
      country: "🇬🇧 UK",
      title: "UK Standard Visitor Visa",
      purpose: "Leisure, short courses, family visits, conferences",
      validity: "Up to 6 months",
      requirements:
        "Travel itinerary, accommodation proof, sponsor letter (if applicable), bank statements",
      support: "Document preparation, application guidance, interview coaching",
      color: "rgba(250, 167, 26, 0.1)",
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
    {
      country: "🇪🇺 Europe",
      title: "Schengen Visa (Europe)",
      purpose:
        "27 countries (e.g., France, Germany, Italy, Spain, Netherlands)",
      validity: "Up to 90 days within 180 days",
      requirements:
        "Valid travel insurance, round-trip tickets, financial documents, hotel booking",
      support:
        "Multi-country travel planning, insurance arrangement, complete documentation",
      color: "rgba(250, 167, 26, 0.1)",
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
    {
      country: "🇦🇺 Australia",
      title: "Australia Visitor Visa (Subclass 600)",
      purpose: "Tourism, family visit, short-term stay",
      validity: "3, 6, or 12 months",
      requirements:
        "Genuine Temporary Entrant (GTE) Statement – we help you write it!",
      support:
        "GTE statement writing, document preparation, application guidance",
      color: "rgba(250, 167, 26, 0.1)",
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
    {
      country: "🇦🇪 UAE",
      title: "UAE Visit Visa",
      purpose: "Tourism, business, family visit",
      validity: "30, 60, 90 days – single or multiple entry",
      requirements: "Fast approval, e-visa available",
      support: "Travel insurance, hotel booking help, express processing",
      color: "rgba(250, 167, 26, 0.1)",
      bgColor: "bg-[#AFC1DB] dark:bg-[#13294E]",
      borderColor: "border-[#AFC1DB] dark:border-[#13294E]",
    },
  ],
};

export default function VisaCountryDetails({
  serviceType,
  onOpenInquiry,
}: VisaCountryDetailsProps) {
  const countryData =
    visaCountryData[serviceType as keyof typeof visaCountryData] || [];

  if (!countryData.length) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-[#AFC1DB] mb-6 border-b border-[#AFC1DB] dark:border-[#13294E] pb-2">
          ✈️ We Provide Visitor Visa Services For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {countryData.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl border-2 ${visa.borderColor} ${visa.bgColor} p-6 hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Background subtle orange overlay */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: visa.color }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#13294E] dark:text-[#AFC1DB]">
                    {visa.country}
                  </h3>
                  {/* Plane icon in Orange/Gold */}
                  <Plane
                    className="w-6 h-6 group-hover:rotate-12 transition-transform"
                    stroke="#FAA71A"
                    strokeWidth={2}
                  />
                </div>

                <h4 className="text-lg font-semibold text-[#13294E] dark:text-[#AFC1DB] mb-3">
                  {visa.title}
                </h4>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Globe
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      stroke="#FAA71A"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#13294E] dark:text-[#AFC1DB]">
                        Purpose:
                      </p>
                      <p className="text-sm text-[#13294E] dark:text-[#AFC1DB]">
                        {visa.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Clock
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      stroke="#FAA71A"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#13294E] dark:text-[#AFC1DB]">
                        Validity:
                      </p>
                      <p className="text-sm text-[#13294E] dark:text-[#AFC1DB]">
                        {visa.validity}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <FileText
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      stroke="#FAA71A"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#13294E] dark:text-[#AFC1DB]">
                        Requirements:
                      </p>
                      <p className="text-sm text-[#13294E] dark:text-[#AFC1DB]">
                        {visa.requirements}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      stroke="#FAA71A"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#13294E] dark:text-[#AFC1DB]">
                        Our Support:
                      </p>
                      <p className="text-sm text-[#13294E] dark:text-[#AFC1DB]">
                        {visa.support}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-[#AFC1DB] dark:border-[#13294E]">
                  <button
                    onClick={onOpenInquiry}
                    className="w-full bg-[#FAA71A] text-[#13294E] py-2 px-4 rounded-lg font-medium hover:shadow-md hover:bg-[#FAA71A]/90 transition-all duration-300 text-sm group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Started with{" "}
                        {visa.country.replace(/🇨🇦|🇺🇸|🇬🇧|🇪🇺|🇦🇺|🇦🇪/g, "").trim()}
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
