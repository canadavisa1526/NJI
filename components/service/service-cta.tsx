'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Phone, MessageCircle, Calendar, Star, CheckCircle, Award } from 'lucide-react';
import AppointmentDialog from '@/components/AppointmentDialog';

interface ServiceCTAProps {
  serviceTitle: string;
}

export default function ServiceCTA({ serviceTitle }: ServiceCTAProps) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const benefits = [
    'Free initial consultation',
    'Expert guidance throughout',
    'Document verification support',
    'Regular status updates',
    'Post-approval assistance'
  ];

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#13294E] via-[#13294E]/95 to-[#FAA71A]/20 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#AFC1DB" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-[#FAA71A]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#AFC1DB]/20 rounded-full blur-xl"></div>

        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Start Your {serviceTitle} Journey?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Take the first step towards your dreams. Our expert consultants are here to guide you through every step of the process.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#FAA71A] flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Secondary CTAs */}
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919876543210"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-[#FAA71A]" />
                <span className="text-sm">4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#FAA71A]" />
                <span className="text-sm">5000+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#FAA71A]" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Appointment Dialog */}
      <AppointmentDialog
        open={isAppointmentOpen}
        onOpenChange={setIsAppointmentOpen}
      />
    </section>
  );
}
