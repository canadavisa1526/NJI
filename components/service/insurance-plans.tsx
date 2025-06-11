"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  GraduationCap,
  Users,
  Plane,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  Globe,
  LucideIcon,
} from "lucide-react";

interface InsurancePlansProps {
  serviceType: string;
  onOpenInquiry?: () => void;
}

interface Plan {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  duration: string;
  ageLimit: string;
  coverage: string[];
  color: string;
  bgColorLight: string;
  bgColorDark: string;
  borderColorLight: string;
  borderColorDark: string;
}

const insurancePlansData: Record<string, Plan[]> = {
  insurance: [
    {
      icon: Shield,
      title: "Visitor to Canada Insurance",
      subtitle: "For tourists, business visitors, or invited relatives",
      duration: "7 days to 2 years",
      ageLimit: "Up to 89 years (some plans up to 99)",
      coverage: [
        "Emergency medical care",
        "Hospitalization",
        "Prescription medication",
        "Ambulance fees",
        "Accidental injury coverage",
        "COVID-19-related expenses",
      ],
      color: "#13294E",
      bgColorLight: "#D9E7FF",
      bgColorDark: "rgba(19, 41, 78, 0.2)",
      borderColorLight: "#AFC1DB",
      borderColorDark: "#13294E",
    },
    
    {
      icon: GraduationCap,
      title: "International Student Insurance",
      subtitle: "Health insurance for students not covered by provincial plans",
      duration: "Academic year coverage",
      ageLimit: "Student age requirements",
      coverage: [
        "Doctor visits & emergency care",
        "Eye exams & prescription drugs",
        "Hospital stays & surgery",
        "Dental (optional add-on)",
        "24/7 multilingual support",
      ],
      color: "#13294E",
      bgColorLight: "#D9E7FF",
      bgColorDark: "rgba(19, 41, 78, 0.2)",
      borderColorLight: "#AFC1DB",
      borderColorDark: "#13294E",
    },
    {
      icon: Users,
      title: "New Immigrant/Work Permit Insurance",
      subtitle: "For those awaiting government healthcare eligibility",
      duration: "Monthly premiums available",
      ageLimit: "All family members",
      coverage: [
        "Affordable monthly premiums",
        "Coverage for medical emergencies",
        "No long waiting periods",
        "Optional dental and vision plans",
      ],
      color: "#FAA71A",
      bgColorLight: "#FFF3D9",
      bgColorDark: "rgba(250, 167, 26, 0.2)",
      borderColorLight: "#FACB7A",
      borderColorDark: "#FAA71A",
    },
    {
      icon: Plane,
      title: "Outbound Travel Insurance",
      subtitle: "For Canadian residents traveling abroad",
      duration: "Trip-based coverage",
      ageLimit: "All ages",
      coverage: [
        "Trip cancellation & interruption",
        "Lost/stolen luggage protection",
        "Emergency medical treatment abroad",
        "Flight delay compensation",
        "COVID-19 & quarantine coverage",
      ],
      color: "#13294E",
      bgColorLight: "#D9E7FF",
      bgColorDark: "rgba(19, 41, 78, 0.2)",
      borderColorLight: "#AFC1DB",
      borderColorDark: "#13294E",
    },
  ],
};

export default function InsurancePlans({ serviceType, onOpenInquiry }: InsurancePlansProps) {
  const plans = insurancePlansData[serviceType] || [];

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  if (!plans.length) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          ✅ Types of Insurance Plans We Offer
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon; // Assign to uppercase variable for JSX usage

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl border-2 p-6 hover:shadow-xl transition-all duration-300 group"
                style={{
                  backgroundColor: isDarkMode ? plan.bgColorDark : plan.bgColorLight,
                  borderColor: isDarkMode ? plan.borderColorDark : plan.borderColorLight,
                }}
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="p-3 rounded-full shadow-lg text-white flex items-center justify-center"
                        style={{ backgroundColor: plan.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#13294E] dark:text-white">
                          {plan.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {plan.subtitle}
                        </p>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-[#FAA71A] group-hover:rotate-12 transition-transform" />
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#FAA71A]" />
                      <div>
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Duration
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {plan.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#FAA71A]" />
                      <div>
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Age Limit
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {plan.ageLimit}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coverage List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Shield className="w-4 h-4 text-[#FAA71A] mr-2" />
                      Coverage Includes:
                    </h4>
                    <div className="space-y-2">
                      {plan.coverage.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={onOpenInquiry}
                      className="w-full text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 group"
                      style={{ backgroundColor: plan.color }}
                      type="button"
                    >
                      <DollarSign className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Get Quote for {plan.title.split(" ")[0]} Plan</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 p-6 rounded-xl border"
          style={{
            borderColor: isDarkMode ? "rgba(175,193,219,0.2)" : "#AFC1DB",
            backgroundColor: isDarkMode
              ? "rgba(19, 41, 78, 0.05)"
              : "rgba(175, 193, 219, 0.15)",
          }}
        >
          <h3 className="text-lg font-bold text-[#13294E] dark:text-white mb-3 flex items-center">
            <Globe className="w-5 h-5 text-[#FAA71A] mr-2" />
            💡 Why Choose New Journey Immigration for Insurance?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're not just an immigration consultancy. We are licensed advisors
            who understand the needs of newcomers, travelers, and international
            families. Our role goes beyond selling policies — we help you choose
            smart protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              "Licensed & Certified Advisors",
              "Competitive pricing with zero hidden fees",
              "Multi-language support available",
              "Complete claim assistance",
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
                <span className="text-gray-600 dark:text-gray-400">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
