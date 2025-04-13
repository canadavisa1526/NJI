'use client';

import { motion } from 'framer-motion';
import { FileCheck, Users, BookOpen, HeartHandshake } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Expert assistance with visa documentation and verification',
    },
    {
      icon: Users,
      title: 'Counseling',
      description: 'Professional guidance for your immigration journey',
    },
    {
      icon: BookOpen,
      title: 'Test Preparation',
      description: 'Comprehensive IELTS and PTE coaching programs',
    },
    {
      icon: HeartHandshake,
      title: 'Settlement Services',
      description: 'Complete support for settling in your new country',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive support throughout your immigration journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-500 mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;