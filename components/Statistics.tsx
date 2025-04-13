'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, ThumbsUp } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Satisfied Clients',
      description: 'Successfully helped clients achieve their dreams'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Consistently high visa approval rate'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and expertise'
    },
    {
      icon: ThumbsUp,
      value: '10+',
      label: 'Years Experience',
      description: 'Decade of immigration excellence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute right-0 top-0 opacity-10" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="stats-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#stats-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievement Numbers
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We take pride in our success stories and the trust our clients place in us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-white/80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;