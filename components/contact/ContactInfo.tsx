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
    <section className="py-16 bg-white dark:bg-[#13294e]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-[#AFC1DB] dark:bg-[#AFC1DB] p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-[#faa71a]">
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
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#faa71a] flex-shrink-0 mt-1" />
                      <span className="text-[#13294e] dark:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#AFC1DB] dark:bg-[#AFC1DB] p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-[#faa71a]">
                  Connect With Us
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Form/CTA Section */}
            <div className="space-y-8">
              <div className="bg-[#AFC1DB] dark:bg-[#AFC1DB] p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-[#faa71a]">
                  Interested in Partnering?
                </h3>
                <p className="text-[#13294e] dark:text-white mb-6">
                  Join our global network of partners and grow your business
                  with us. We offer extensive support, training, and resources
                  to help you succeed.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#faa71a] to-[#faa71a] text-[#13294e] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Become a Partner
                </button>
              </div>

              <div className="bg-[#AFC1DB] dark:bg-[#AFC1DB] p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-[#faa71a]">
                  Our Mission
                </h3>
                <p className="text-[#13294e] dark:text-white">
                  We are dedicated to providing expert immigration services with
                  integrity and transparency. Our mission is to help students
                  and professionals achieve their dreams of studying and working
                  abroad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
