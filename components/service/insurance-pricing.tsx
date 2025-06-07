"use client";

import { motion } from "framer-motion";
import { DollarSign, Calendar, Users, TrendingUp } from "lucide-react";

interface InsurancePricingProps {
  serviceType: string;
}

const pricingData = {
  insurance: [
    {
      ageGroup: "Age 25–39",
      visitorInsurance: "$55 – $70",
      superVisa: "$780 – $1,100",
      color: "from-green-500 to-green-600",
    },
    {
      ageGroup: "Age 40–59",
      visitorInsurance: "$60 – $90",
      superVisa: "$1,000 – $1,300",
      color: "from-blue-500 to-blue-600",
    },
    {
      ageGroup: "Age 60–74",
      visitorInsurance: "$90 – $180",
      superVisa: "$1,500 – $2,200",
      color: "from-orange-500 to-orange-600",
    },
    {
      ageGroup: "Age 75–85",
      visitorInsurance: "$120 – $300",
      superVisa: "$2,200 – $3,500+",
      color: "from-red-500 to-red-600",
    },
  ],
};

export default function InsurancePricing({ serviceType }: InsurancePricingProps) {
  const pricing = pricingData[serviceType as keyof typeof pricingData] || [];

  if (!pricing.length) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          📊 Sample Pricing (Approximate)
        </h2>

        {/* Pricing Table */}
        <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#13294E] to-[#FAA71A] text-white p-4">
            <div className="grid grid-cols-3 gap-4 font-semibold">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Age Group</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Visitor Insurance (30 Days)</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Super Visa (1 Year)</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white dark:bg-gray-800">
            {pricing.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`grid grid-cols-3 gap-4 p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                  index === pricing.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${row.color}`}
                  ></div>
                  <span className="font-medium text-gray-900 dark:text-gray-200">
                    {row.ageGroup}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-[#FAA71A]" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {row.visitorInsurance}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-[#FAA71A]" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {row.superVisa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
        >
          <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-start space-x-2">
            <span className="text-yellow-600 dark:text-yellow-400 mt-0.5">ℹ️</span>
            <span>
              <strong>Note:</strong> Rates vary by medical history, coverage
              amount, deductible, and company. Contact us for personalized
              quotes based on your specific needs.
            </span>
          </p>
        </motion.div>

        {/* Coverage Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* What's Covered */}
          <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
              <span className="mr-2">✅</span> What's Typically Covered
            </h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• Emergency Medical Treatment</li>
              <li>• Hospital Room & Board</li>
              <li>• Doctor Consultations</li>
              <li>• Prescription Drugs</li>
              <li>• Diagnostic Tests (X-Ray, Bloodwork)</li>
              <li>• Medical Repatriation</li>
              <li>• Ambulance & Air Ambulance</li>
              <li>• Accidental Death & Dismemberment</li>
            </ul>
          </div>

          {/* What's Not Covered */}
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
              <span className="mr-2">🔒</span> What's Not Usually Covered
            </h3>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
              <li>• Routine check-ups</li>
              <li>• Cosmetic procedures</li>
              <li>• Pre-existing conditions (unless covered)</li>
              <li>• Ongoing chronic illness treatment</li>
              <li>• Pregnancy & childbirth (unless add-on)</li>
              <li>• Dental care (unless emergency)</li>
              <li>• Vision care (unless emergency)</li>
              <li>• Mental health (varies by policy)</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
