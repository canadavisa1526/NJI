'use client';

import { motion } from 'framer-motion';
import { Plane, GraduationCap, Building2, Briefcase } from 'lucide-react';

const VisaServices = () => {
  const services = [
    {
      icon: Plane,
      title: 'Tourist Visa',
      description: 'Explore new destinations with our hassle-free tourist visa services',
    },
    {
      icon: GraduationCap,
      title: 'Student Visa',
      description: 'Pursue your academic dreams abroad with our expert guidance',
    },
    {
      icon: Building2,
      title: 'Permanent Residency',
      description: 'Start your new life abroad with our PR visa assistance',
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Advance your career internationally with our work visa services',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Visa Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive visa solutions tailored to your needs. We handle everything from
            application to approval.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-500 mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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

export default VisaServices;