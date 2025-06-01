'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';

interface ExpertTeamProps {
  serviceType: string;
}

const teamExperts = {
  'visitor-visa': [
    {
      name: 'Rajesh Patel',
      role: 'Senior Visa Consultant',
      experience: '8+ years',
      specialization: 'US & Canada Tourist Visas',
      achievements: '2000+ successful applications',
      image: '/team/rajesh.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Immigration Specialist',
      experience: '6+ years',
      specialization: 'Europe & UK Visitor Visas',
      achievements: '1500+ visa approvals',
      image: '/team/priya.jpg'
    }
  ],
  'dependent-visa': [
    {
      name: 'Meera Singh',
      role: 'Family Reunification Expert',
      experience: '10+ years',
      specialization: 'Spouse & Dependent Visas',
      achievements: '1200+ families reunited',
      image: '/team/meera.jpg'
    },
    {
      name: 'Vikram Reddy',
      role: 'Relationship Documentation Specialist',
      experience: '7+ years',
      specialization: 'Complex Family Cases',
      achievements: '95% success rate',
      image: '/team/vikram.jpg'
    }
  ],
  'work-permit': [
    {
      name: 'Amit Gupta',
      role: 'Work Permit Specialist',
      experience: '9+ years',
      specialization: 'Skilled Worker Programs',
      achievements: '1800+ work permits approved',
      image: '/team/amit.jpg'
    },
    {
      name: 'Sneha Joshi',
      role: 'Employment Immigration Consultant',
      experience: '5+ years',
      specialization: 'LMIA & Employer Sponsorship',
      achievements: '90% approval rate',
      image: '/team/sneha.jpg'
    }
  ],
  'coaching': [
    {
      name: 'Dr. Rohit Sharma',
      role: 'IELTS Master Trainer',
      experience: '12+ years',
      specialization: 'IELTS Academic & General',
      achievements: '3000+ students trained',
      image: '/team/rohit.jpg'
    },
    {
      name: 'Kavya Nair',
      role: 'PTE Expert Coach',
      experience: '6+ years',
      specialization: 'PTE Academic',
      achievements: '94% target score achievement',
      image: '/team/kavya.jpg'
    }
  ],
  'default': [
    {
      name: 'Rajesh Patel',
      role: 'Senior Immigration Consultant',
      experience: '10+ years',
      specialization: 'All Immigration Services',
      achievements: '5000+ successful cases',
      image: '/team/rajesh.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Visa Specialist',
      experience: '8+ years',
      specialization: 'Complex Immigration Cases',
      achievements: '95% success rate',
      image: '/team/priya.jpg'
    }
  ]
};

export default function ExpertTeam({ serviceType }: ExpertTeamProps) {
  const experts = teamExperts[serviceType as keyof typeof teamExperts] || teamExperts.default;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          Meet Our Experts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-[#AFC1DB]/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Expert Avatar */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FAA71A] to-[#13294E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1">
                  {/* Expert Info */}
                  <h3 className="text-lg font-semibold text-[#13294E] dark:text-white mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-[#FAA71A] font-medium text-sm mb-2">
                    {expert.role}
                  </p>
                  
                  {/* Experience & Specialization */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-[#AFC1DB]" />
                      <span>{expert.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Star className="w-4 h-4 mr-2 text-[#AFC1DB]" />
                      <span>{expert.specialization}</span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="bg-[#FAA71A]/10 rounded-lg p-3">
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 mr-2 text-[#FAA71A]" />
                      <span className="text-[#13294E] dark:text-white font-medium">
                        {expert.achievements}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-[#13294E]/5 to-[#FAA71A]/5 rounded-xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#13294E] dark:text-white">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Expert Consultants</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#13294E] dark:text-white">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#13294E] dark:text-white">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#13294E] dark:text-white">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
