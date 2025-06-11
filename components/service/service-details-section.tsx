"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Globe,
  FileText,
  TrendingUp,
  Users,
  MessageCircle,
  Shield,
  Award,
  Clock,
  Target,
  Star
} from "lucide-react";

interface ServiceDetailsSectionProps {
  serviceDetails?: string[];
  serviceTitle: string;
}

export default function ServiceDetailsSection({
  serviceDetails,
  serviceTitle,
}: ServiceDetailsSectionProps) {
  if (!serviceDetails || serviceDetails.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white dark:bg-[#13294E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 bg-[#FAA71A] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#13294E] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#FAA71A" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#13294E" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#AFC1DB" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#AFC1DB] bg-opacity-20 rounded-full border border-[#AFC1DB] mb-6">
            <Sparkles className="w-4 h-4 text-[#FAA71A] mr-2" />
            <span className="text-[#13294E] dark:text-[#AFC1DB] font-semibold text-sm">
              Comprehensive Service Details
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
            Everything You Need to Know
            <span className="block text-[#FAA71A]">About Our {serviceTitle.split(" ")[0]} Services</span>
          </h2>

          <p className="text-xl text-[#13294E] dark:text-[#AFC1DB] max-w-3xl mx-auto">
            Discover the comprehensive range of services and expertise we offer to ensure your success.
          </p>
        </motion.div>

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {serviceDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-[#13294E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#AFC1DB] hover:border-[#FAA71A] relative overflow-hidden h-full">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-[#FAA71A] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#FAA71A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-[#13294E]" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[#13294E] dark:text-[#AFC1DB] leading-relaxed group-hover:text-[#13294E] dark:group-hover:text-[#AFC1DB] transition-colors duration-300">
                      {detail}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FAA71A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
