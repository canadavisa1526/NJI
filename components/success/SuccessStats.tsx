'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaPassport, FaUsers } from 'react-icons/fa';

const SuccessStats = () => {
  const stats = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#FAA71A]" />,
      count: '1,200+',
      label: 'Study Visas',
      description: 'Students placed in top universities worldwide'
    },
    {
      icon: <FaBriefcase className="text-4xl text-[#FAA71A]" />,
      count: '850+',
      label: 'Work Permits',
      description: 'Professionals placed in global companies'
    },
    {
      icon: <FaPassport className="text-4xl text-[#FAA71A]" />,
      count: '500+',
      label: 'PR Visas',
      description: 'Families settled in new countries'
    },
    {
      icon: <FaUsers className="text-4xl text-[#FAA71A]" />,
      count: '5,000+',
      label: 'Happy Clients',
      description: 'Satisfaction rate of over 98%'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#13294E]">
            Our Success by the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in our track record of helping clients achieve their immigration and education goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-[#AFC1DB]/30 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#13294E]/5 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#13294E] mb-2">{stat.count}</h3>
                <p className="text-xl font-semibold text-[#FAA71A] mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStats;
