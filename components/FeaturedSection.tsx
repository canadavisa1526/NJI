'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Award, Globe2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Guidance',
      description: 'Get personalized advice from education experts'
    },
    {
      icon: Award,
      title: 'Top Universities',
      description: 'Access to world-ranked institutions'
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Connect with students worldwide'
    },
    {
      icon: Users,
      title: 'Student Support',
      description: '24/7 assistance throughout your journey'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Future with Global Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Take the first step towards your international education journey with our comprehensive support and guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
            >
              Start Your Journey
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
                alt="Students studying"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        15,000+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Students Placed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        98%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;