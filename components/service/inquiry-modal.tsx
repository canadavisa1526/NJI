"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, Mail } from "lucide-react";
import InquiryForm from "./inquiry-form";

interface InquiryModalProps {
  services: any[];
  defaultService: string;
}

export default function InquiryModal({ services, defaultService }: InquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-[#FAA71A] to-[#13294E] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAA71A] to-[#13294E] animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Get Free Consultation
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      </motion.div>

      {/* Bottom Contact Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 md:hidden">
        <div className="flex items-center justify-between space-x-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-gradient-to-r from-[#FAA71A] to-[#13294E] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get Consultation</span>
          </button>
          <a
            href="tel:+917623043499"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:info@newjourneyimmigration.com"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#FAA71A] to-[#13294E] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Get Expert Consultation</h3>
                      <p className="text-white/90 mt-1">Free consultation available for {defaultService}</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                  <div className="mb-6 p-4 bg-gradient-to-r from-[#FAA71A]/10 to-[#13294E]/10 rounded-lg border border-[#AFC1DB]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#FAA71A] rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm text-[#13294E] dark:text-white font-medium">
                          ✨ Free consultation available
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          Get personalized guidance for your {defaultService.toLowerCase()} application
                        </p>
                      </div>
                    </div>
                  </div>

                  <InquiryForm
                    services={services}
                    defaultService={defaultService}
                  />
                </div>

                {/* Quick Contact Options */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Need Immediate Help?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="tel:+917623043499"
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                    >
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Call Now</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">+91 7623 043 499</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/917623043499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                    >
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Chat with us</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
