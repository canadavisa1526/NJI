"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { socialLinks } from "@/data/social-links-data";
import PartnerModal from "./PartnerModal";
import SocialLinks from "./SocialLinks";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactInfo() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/20 to-white dark:from-[#13294e]/80 dark:to-[#13294e] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert guidance from certified consultants",
                  "Personalized attention to your needs",
                  "Comprehensive support services",
                  "High success rate in visa approvals",
                  "Global network of partners",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start text-[#13294E] dark:text-gray-300 group-hover:text-[#13294E] dark:group-hover:text-[#faa71a] transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#faa71a] mr-3 mt-1" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect with us */}
            <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6">
                Connect With Us
              </h3>
              <SocialLinks />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Partner CTA */}
            <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6">
                Interested in Partnering?
              </h3>
              <p className="text-[#13294E] dark:text-gray-300 mb-6">
                Join our global network of partners and grow your business with
                us. We offer extensive support, training, and resources to help
                you succeed.
              </p>
              <br />
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#FAA71A] to-[#F97316] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Partner
              </button>

              <motion.div
                variants={fadeInUp}
                className="mt-4 text-sm md:text-base text-[#13294e] dark:text-white font-medium"
              >
                <span className="inline-block bg-[#faa71a]/20 dark:bg-white/10 text-[#13294e] dark:text-white px-4 py-2 rounded-xl">
                  📍 Open for: Ahmedabad, Surat, Vadodara, Mumbai
                </span>
              </motion.div>
            </div>

            {/* Mission */}
            <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-[#13294E] dark:text-gray-300">
                We are dedicated to providing expert immigration services with
                integrity and transparency. Our mission is to help students and
                professionals achieve their dreams of studying and working
                abroad.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
