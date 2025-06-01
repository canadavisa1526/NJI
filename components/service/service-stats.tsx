'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface ServiceStatsProps {
  serviceType: string;
}

const serviceStats = {
  'visitor-visa': [
    { icon: TrendingUp, value: 95, suffix: '%', label: 'Success Rate', color: 'text-green-500' },
    { icon: Users, value: 2500, suffix: '+', label: 'Visas Processed', color: 'text-blue-500' },
    { icon: Clock, value: 15, suffix: ' days', label: 'Avg Processing', color: 'text-orange-500' },
    { icon: Award, value: 50, suffix: '+', label: 'Countries Covered', color: 'text-purple-500' }
  ],
  'dependent-visa': [
    { icon: TrendingUp, value: 92, suffix: '%', label: 'Family Reunions', color: 'text-green-500' },
    { icon: Users, value: 1200, suffix: '+', label: 'Families United', color: 'text-blue-500' },
    { icon: Clock, value: 3, suffix: ' months', label: 'Avg Processing', color: 'text-orange-500' },
    { icon: Award, value: 25, suffix: '+', label: 'Countries', color: 'text-purple-500' }
  ],
  'permanent-residency': [
    { icon: TrendingUp, value: 88, suffix: '%', label: 'PR Success Rate', color: 'text-green-500' },
    { icon: Users, value: 800, suffix: '+', label: 'PR Approvals', color: 'text-blue-500' },
    { icon: Clock, value: 12, suffix: ' months', label: 'Avg Processing', color: 'text-orange-500' },
    { icon: Award, value: 15, suffix: '+', label: 'Countries', color: 'text-purple-500' }
  ],
  'work-permit': [
    { icon: TrendingUp, value: 90, suffix: '%', label: 'Success Rate', color: 'text-green-500' },
    { icon: Users, value: 1500, suffix: '+', label: 'Work Permits', color: 'text-blue-500' },
    { icon: Clock, value: 8, suffix: ' weeks', label: 'Avg Processing', color: 'text-orange-500' },
    { icon: Award, value: 30, suffix: '+', label: 'Countries', color: 'text-purple-500' }
  ],
  'coaching': [
    { icon: TrendingUp, value: 94, suffix: '%', label: 'Target Score Rate', color: 'text-green-500' },
    { icon: Users, value: 3000, suffix: '+', label: 'Students Trained', color: 'text-blue-500' },
    { icon: Clock, value: 8, suffix: ' weeks', label: 'Avg Course Duration', color: 'text-orange-500' },
    { icon: Award, value: 8.5, suffix: ' avg', label: 'IELTS Score', color: 'text-purple-500' }
  ],
  'default': [
    { icon: TrendingUp, value: 92, suffix: '%', label: 'Success Rate', color: 'text-green-500' },
    { icon: Users, value: 5000, suffix: '+', label: 'Happy Clients', color: 'text-blue-500' },
    { icon: Clock, value: 10, suffix: ' years', label: 'Experience', color: 'text-orange-500' },
    { icon: Award, value: 60, suffix: '+', label: 'Countries', color: 'text-purple-500' }
  ]
};

const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold">
      {count}{suffix}
    </span>
  );
};

export default function ServiceStats({ serviceType }: ServiceStatsProps) {
  const stats = serviceStats[serviceType as keyof typeof serviceStats] || serviceStats.default;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          Our Track Record
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-[#AFC1DB]/20 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              
              <div className={`${stat.color} mb-2`}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
