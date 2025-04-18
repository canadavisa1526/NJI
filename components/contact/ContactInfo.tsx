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
    <section className="py-16">
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
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
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
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                  Connect With Us
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Form/CTA Section */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                  Interested in Partnering?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our global network of partners and grow your business with us. We offer extensive 
                  support, training, and resources to help you succeed.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Become a Partner
                </button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We are dedicated to providing expert immigration services with integrity and transparency. 
                  Our mission is to help students and professionals achieve their dreams of studying and working abroad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}