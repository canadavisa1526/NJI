"use client";

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
  Globe
} from "lucide-react";

interface InsurancePlansProps {
  serviceType: string;
}

const insurancePlansData = {
  "insurance": [
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
        "COVID-19-related expenses"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: Heart,
      title: "Super Visa Insurance (Mandatory)",
      subtitle: "Required $100,000 coverage from Canadian company",
      duration: "Minimum 1 year validity",
      ageLimit: "All ages accepted",
      coverage: [
        "Plans from Manulife, GMS, Allianz, 21st Century",
        "Same-day issuance",
        "Refundable if visa refused",
        "Partial refund if early departure",
        "Competitive rates, multi-year plans"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
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
        "24/7 multilingual support"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
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
        "Optional dental and vision plans"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
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
        "COVID-19 & quarantine coverage"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ],
};

export default function InsurancePlans({ serviceType }: InsurancePlansProps) {
  const plans = insurancePlansData[serviceType as keyof typeof insurancePlansData] || [];

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
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl border-2 ${plan.borderColor} ${plan.bgColor} p-6 hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${plan.color} text-white shadow-lg`}>
                      <plan.icon className="w-6 h-6" />
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
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Duration</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{plan.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#FAA71A]" />
                    <div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Age Limit</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{plan.ageLimit}</p>
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
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <DollarSign className="w-4 h-4" />
                    <span>Get Quote for {plan.title.split(' ')[0]} Plan</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-[#13294E]/5 to-[#FAA71A]/5 dark:from-[#13294E]/20 dark:to-[#FAA71A]/20 rounded-xl border border-[#AFC1DB]/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-bold text-[#13294E] dark:text-white mb-3 flex items-center">
            <Globe className="w-5 h-5 text-[#FAA71A] mr-2" />
            💡 Why Choose New Journey Immigration for Insurance?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're not just an immigration consultancy. We are licensed advisors who understand the needs of newcomers, travelers, and international families. Our role goes beyond selling policies — we help you choose smart protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
              <span className="text-gray-600 dark:text-gray-400">Licensed & Certified Advisors</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
              <span className="text-gray-600 dark:text-gray-400">Competitive pricing with zero hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
              <span className="text-gray-600 dark:text-gray-400">Multi-language support available</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
              <span className="text-gray-600 dark:text-gray-400">Complete claim assistance</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
