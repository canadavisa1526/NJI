"use client";

import { motion } from "framer-motion";
import { Clock, FileText, Globe, CheckCircle, Star, Plane } from "lucide-react";

interface VisaCountryDetailsProps {
  serviceType: string;
}

const visaCountryData = {
  "visitor-visa": [
    {
      country: "🇨🇦 Canada",
      title: "Canada Visitor Visa",
      purpose: "Tourism, visiting family/friends, business meetings",
      validity: "Up to 10 years (multiple-entry)",
      requirements: "Valid passport, invitation letter (if any), proof of funds, strong ties to home country",
      support: "Full application prep, help with biometrics, SOP writing, interview readiness",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      country: "🇺🇸 USA",
      title: "USA Visitor Visa (B1/B2)",
      purpose: "Business (B1), Tourism/Family (B2)",
      validity: "Up to 10 years",
      requirements: "DS-160 Form, Visa Fee Guidance, Interview Training, Travel History Review",
      support: "Complete application assistance, interview preparation, document review",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      country: "🇬🇧 UK",
      title: "UK Standard Visitor Visa",
      purpose: "Leisure, short courses, family visits, conferences",
      validity: "Up to 6 months",
      requirements: "Travel itinerary, accommodation proof, sponsor letter (if applicable), bank statements",
      support: "Document preparation, application guidance, interview coaching",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      country: "🇪🇺 Europe",
      title: "Schengen Visa (Europe)",
      purpose: "27 countries (e.g., France, Germany, Italy, Spain, Netherlands)",
      validity: "Up to 90 days within 180 days",
      requirements: "Valid travel insurance, round-trip tickets, financial documents, hotel booking",
      support: "Multi-country travel planning, insurance arrangement, complete documentation",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      country: "🇦🇺 Australia",
      title: "Australia Visitor Visa (Subclass 600)",
      purpose: "Tourism, family visit, short-term stay",
      validity: "3, 6, or 12 months",
      requirements: "Genuine Temporary Entrant (GTE) Statement – we help you write it!",
      support: "GTE statement writing, document preparation, application guidance",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      country: "🇦🇪 UAE",
      title: "UAE Visit Visa",
      purpose: "Tourism, business, family visit",
      validity: "30, 60, 90 days – single or multiple entry",
      requirements: "Fast approval, e-visa available",
      support: "Travel insurance, hotel booking help, express processing",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
  ],
};

export default function VisaCountryDetails({ serviceType }: VisaCountryDetailsProps) {
  const countryData = visaCountryData[serviceType as keyof typeof visaCountryData] || [];

  if (!countryData.length) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
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
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#13294E] dark:text-white">
                    {visa.country}
                  </h3>
                  <Plane className="w-6 h-6 text-[#FAA71A] group-hover:rotate-12 transition-transform" />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {visa.title}
                </h4>
                
                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Globe className="w-4 h-4 text-[#FAA71A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Purpose:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{visa.purpose}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-[#FAA71A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Validity:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{visa.validity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <FileText className="w-4 h-4 text-[#FAA71A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Requirements:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{visa.requirements}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#FAA71A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Support:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{visa.support}</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full bg-gradient-to-r from-[#FAA71A] to-[#13294E] text-white py-2 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-300 text-sm">
                    Get Started with {visa.country.replace(/🇨🇦|🇺🇸|🇬🇧|🇪🇺|🇦🇺|🇦🇪/g, '').trim()}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-[#13294E]/5 to-[#FAA71A]/5 dark:from-[#13294E]/20 dark:to-[#FAA71A]/20 rounded-xl border border-[#AFC1DB]/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-bold text-[#13294E] dark:text-white mb-3 flex items-center">
            <Star className="w-5 h-5 text-[#FAA71A] mr-2" />
            🌏 Other Countries We Support
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We offer visitor visa services for over 60+ countries, including Singapore, Malaysia, Thailand, Japan, South Korea, New Zealand, Turkey, South Africa, Brazil, Mexico, Saudi Arabia, and more...
          </p>
          <p className="text-[#FAA71A] font-medium">
            Need help with a country not listed here? Just contact us — we probably support it too!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
