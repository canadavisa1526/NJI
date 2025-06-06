"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  FileText, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Shield, 
  Umbrella,
  PenTool,
  Mail,
  Target,
  Briefcase,
  CreditCard,
  ClipboardList,
  Sparkles
} from "lucide-react";

interface WhyChooseUsProps {
  serviceType: string;
}

const whyChooseUsData = {
  "visitor-visa": [
    {
      icon: Globe,
      title: "Expert Visa Consultants",
      description: "In-depth knowledge of global immigration systems",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: FileText,
      title: "Personalized Document Checklists",
      description: "Based on your destination and specific requirements",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: TrendingUp,
      title: "High Approval Rates",
      description: "Thanks to detailed case assessments and expert guidance",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Users,
      title: "Dedicated Case Managers",
      description: "To assist you from start to finish",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: MessageCircle,
      title: "Responsive Communication",
      description: "Via phone, email, or WhatsApp",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Handling of all your personal documents",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: Umbrella,
      title: "Complete Travel Support",
      description: "Including insurance, bookings & cover letters",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: PenTool,
      title: "SOP & Cover Letter Writing",
      description: "Professional statement of purpose and cover letters",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      icon: Mail,
      title: "Invitation Letter Drafting",
      description: "Expert assistance with invitation letters",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },
    {
      icon: Target,
      title: "Mock Interview Preparation",
      description: "Practice sessions to boost your confidence",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: Briefcase,
      title: "Flight & Hotel Itinerary",
      description: "Complete travel planning assistance",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: CreditCard,
      title: "Travel Insurance Arrangements",
      description: "Comprehensive insurance coverage options",
      color: "text-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      icon: ClipboardList,
      title: "Application Submission & Tracking",
      description: "End-to-end application management",
      color: "text-rose-500",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
    },
    {
      icon: Sparkles,
      title: "Visa Refusal Review & Re-application",
      description: "Support for rejected applications",
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
  ],
};

export default function WhyChooseUs({ serviceType }: WhyChooseUsProps) {
  const benefits = whyChooseUsData[serviceType as keyof typeof whyChooseUsData] || [];

  if (!benefits.length) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          ✅ Why Choose New Journey Immigration?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 ${benefit.bgColor} p-6 hover:shadow-lg transition-all duration-300 group hover:border-[#FAA71A]/50`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#13294E] dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAA71A]/5 to-[#13294E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FAA71A] to-[#13294E] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span>Experience the New Journey Immigration Difference</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
