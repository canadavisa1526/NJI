'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Student Visa',
    description: 'Complete assistance for student visa applications and documentation',
    icon: '🎓',
  },
  {
    title: 'Work Visa',
    description: 'Expert guidance for work permit and employment visas',
    icon: '💼',
  },
  {
    title: 'Business Visa',
    description: 'Specialized support for business and investor visas',
    icon: '🏢',
  },
  {
    title: 'Permanent Residency',
    description: 'Comprehensive help with permanent residency applications',
    icon: '🏠',
  },
  {
    title: 'Family Sponsorship',
    description: 'Assistance with family reunion and sponsorship visas',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Immigration Consulting',
    description: 'Professional consulting for all immigration matters',
    icon: '📋',
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-white mb-4">
            Our <span className="text-[#FAA71A]">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive immigration and visa services to help you achieve your international goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#13294E] dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}