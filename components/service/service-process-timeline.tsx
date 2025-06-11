"use client";

import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  FileText,
  Send,
  Award,
  Users,
  Search,
  Calculator,
  BookOpen,
  Globe,
  Shield,
} from "lucide-react";
import { services } from "@/data/services-data";

interface ServiceProcessTimelineProps {
  serviceType: string;
}

// Icon mapping for dynamic icons
const iconMap = {
  consultation: MessageCircle,
  documentation: FileText,
  submission: Send,
  approval: Award,
  assessment: Users,
  search: Search,
  calculation: Calculator,
  training: BookOpen,
  strategy: Globe,
  protection: Shield,
};

export default function ServiceProcessTimeline({
  serviceType,
}: ServiceProcessTimelineProps) {
  // Find the service and get its process steps
  const service = services.find((s) => s.slug === serviceType);
  const steps = service?.processSteps || [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Comprehensive assessment of your case and requirements",
      duration: "45 mins",
      icon: "consultation",
    },
    {
      id: 2,
      title: "Documentation",
      description: "Gather and prepare all necessary documents and forms",
      duration: "3-7 days",
      icon: "documentation",
    },
    {
      id: 3,
      title: "Application Process",
      description: "Submit your application and handle all procedural requirements",
      duration: "5-10 days",
      icon: "submission",
    },
    {
      id: 4,
      title: "Final Approval",
      description: "Receive confirmation and complete the process successfully",
      duration: "15-30 days",
      icon: "approval",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#13294E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern
              id="processPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#13294E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#processPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#AFC1DB] bg-opacity-20 rounded-full border border-[#AFC1DB] mb-6">
            <Clock className="w-4 h-4 text-[#FAA71A] mr-2" />
            <span className="text-[#13294E] dark:text-[#AFC1DB] font-semibold text-sm">
              Simple 4-Step Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
            How We Make It <span className="block text-[#FAA71A]">Happen for You</span>
          </h2>

          <p className="text-xl text-[#13294E] dark:text-[#AFC1DB] max-w-3xl mx-auto">
            Our streamlined process ensures your application is handled professionally from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#FAA71A] opacity-20 transform -translate-y-1/2" />
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-[#FAA71A] opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="group bg-white dark:bg-[#13294E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#AFC1DB] hover:border-[#FAA71A] relative overflow-hidden h-80 flex flex-col">
                  <div className="absolute inset-0 bg-[#FAA71A] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative flex-1 flex flex-col">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FAA71A] rounded-full flex items-center justify-center text-[#13294E] font-bold text-sm shadow-lg">
                      {step.id}
                    </div>

                    <div className="w-20 h-20 mx-auto mb-6 bg-[#FAA71A] rounded-2xl flex items-center justify-center shadow-lg">
                      {(() => {
                        const IconComponent = iconMap[step.icon as keyof typeof iconMap] || MessageCircle;
                        return <IconComponent className="w-10 h-10 text-[#13294E]" />;
                      })()}
                    </div>

                    <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#13294E] dark:text-[#AFC1DB] group-hover:text-[#FAA71A] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[#13294E] dark:text-[#AFC1DB] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {/* <div className="inline-flex items-center px-3 py-1 bg-[#AFC1DB] bg-opacity-20 rounded-full">
                        <Clock className="w-3 h-3 text-[#FAA71A] mr-1" />
                        <span className="text-sm font-medium text-[#13294E] dark:text-[#AFC1DB]">
                          {step.duration}
                        </span>
                      </div> */}
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="w-6 h-6 text-[#AFC1DB]" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 bg-[#FAA71A] opacity-30 rounded-full flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4 text-[#AFC1DB] rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#13294E] rounded-2xl p-8 text-[#AFC1DB] relative overflow-hidden">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 text-[#AFC1DB]">Ready to Start Your Journey?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-[#AFC1DB]">
                Join thousands of satisfied clients who have successfully achieved their immigration goals with our expert guidance.
              </p>
              <button className="bg-[#FAA71A] text-[#13294E] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Start Your Application</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
