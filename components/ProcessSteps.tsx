'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Users, CheckCircle, Plane } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Users,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your requirements and eligibility',
      image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete assistance with document preparation and verification',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: CheckCircle,
      title: 'Application Filing',
      description: 'Expert handling of your visa application submission',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Plane,
      title: 'Visa Approval',
      description: 'Support until successful visa approval and travel preparation',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-48 bottom-0" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path
            fill="url(#processGradient)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple and transparent process to help you achieve your immigration goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <step.icon className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-200 dark:from-orange-600 dark:to-orange-800 -translate-y-1/2 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full" />
                </div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;