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
      // Removed Tailwind text/bg colors, replaced with constants below
    },
    {
      icon: FileText,
      title: "Personalized Document Checklists",
      description: "Based on your destination and specific requirements",
    },
    {
      icon: TrendingUp,
      title: "High Approval Rates",
      description: "Thanks to detailed case assessments and expert guidance",
    },
    {
      icon: Users,
      title: "Dedicated Case Managers",
      description: "To assist you from start to finish",
    },
    {
      icon: MessageCircle,
      title: "Responsive Communication",
      description: "Via phone, email, or WhatsApp",
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Handling of all your personal documents",
    },
    {
      icon: Umbrella,
      title: "Complete Travel Support",
      description: "Including insurance, bookings & cover letters",
    },
    {
      icon: PenTool,
      title: "SOP & Cover Letter Writing",
      description: "Professional statement of purpose and cover letters",
    },
    {
      icon: Mail,
      title: "Invitation Letter Drafting",
      description: "Expert assistance with invitation letters",
    },
    {
      icon: Target,
      title: "Mock Interview Preparation",
      description: "Practice sessions to boost your confidence",
    },
    {
      icon: Briefcase,
      title: "Flight & Hotel Itinerary",
      description: "Complete travel planning assistance",
    },
    {
      icon: CreditCard,
      title: "Travel Insurance Arrangements",
      description: "Comprehensive insurance coverage options",
    },
    {
      icon: ClipboardList,
      title: "Application Submission & Tracking",
      description: "End-to-end application management",
    },
    {
      icon: Sparkles,
      title: "Visa Refusal Review & Re-application",
      description: "Support for rejected applications",
    },
  ],
};

export default function WhyChooseUs({ serviceType }: WhyChooseUsProps) {
  const benefits = whyChooseUsData[serviceType as keyof typeof whyChooseUsData] || [];

  if (!benefits.length) return null;

  // Constants for colors
  const ORANGE = "#FAA71A";
  const DARK_BLUE = "#13294E";
  const LIGHT_BLUE_GRAY = "#AFC1DB";

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          style={{ color: DARK_BLUE, borderColor: LIGHT_BLUE_GRAY }}
          className="text-2xl font-bold mb-6 border-b pb-2"
        >
          ✅ Why Choose New Journey Immigration?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                borderColor: LIGHT_BLUE_GRAY,
                backgroundColor: "white",
                position: "relative",
              }}
              className="relative overflow-hidden rounded-xl border p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onMouseEnter={(e) => {
                (e.currentTarget.style.borderColor = ORANGE);
                (e.currentTarget.style.boxShadow = `0 8px 15px -5px ${ORANGE}`);
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.borderColor = LIGHT_BLUE_GRAY);
                (e.currentTarget.style.boxShadow = "");
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                className="flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-transform group-hover:scale-110"
              >
                <benefit.icon
                  style={{ color: ORANGE }}
                  className="w-6 h-6"
                />
              </div>

              {/* Title */}
              <h3 style={{ color: DARK_BLUE }} className="text-lg font-semibold mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p style={{ color: DARK_BLUE }} className="text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover overlay */}
              <div
                style={{
                  background:
                    `linear-gradient(to bottom right, ${ORANGE}1A, ${DARK_BLUE}1A)`,
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
              ></div>
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
          <div
            style={{
              background: `linear-gradient(90deg, ${ORANGE}, ${DARK_BLUE})`,
              color: "white",
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span>Experience the New Journey Immigration Difference</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
