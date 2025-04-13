'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurMentors = () => {
  const mentors = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Immigration Law Expert',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
      specialization: 'Canada & USA Immigration',
      experience: '15+ years experience',
      education: 'Ph.D. in International Law',
      description: 'Specialized in complex immigration cases with a perfect track record.'
    },
    {
      name: 'Michael Chen',
      role: 'Education Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
      specialization: 'University Admissions',
      experience: '12+ years experience',
      education: 'Masters in Education',
      description: 'Expert in university placements and scholarship applications.'
    },
    {
      name: 'Emma Thompson',
      role: 'IELTS Trainer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
      specialization: 'Language Testing',
      experience: '10+ years experience',
      education: 'CELTA Certified',
      description: 'Helped over 1000 students achieve their target IELTS scores.'
    },
    {
      name: 'David Kumar',
      role: 'Visa Processing Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
      specialization: 'Business & PR Visas',
      experience: '8+ years experience',
      education: 'MBA, RCIC Certified',
      description: 'Specializes in business immigration and permanent residency applications.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Mentors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team of experienced professionals is dedicated to helping you achieve your immigration goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                  <p className="text-orange-400">{mentor.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-orange-500 dark:text-orange-400">
                    {mentor.specialization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {mentor.experience}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {mentor.education}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {mentor.description}
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    <Globe2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMentors;