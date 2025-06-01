'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Users, Send, Award } from 'lucide-react';

interface ServiceProcessProps {
  serviceType: string;
}

const processSteps = {
  'visitor-visa': [
    {
      icon: FileText,
      title: 'Initial Consultation',
      description: 'Free consultation to assess your travel needs and eligibility',
      duration: '30 mins'
    },
    {
      icon: Users,
      title: 'Document Preparation',
      description: 'Gather and prepare all required documents with our expert guidance',
      duration: '3-5 days'
    },
    {
      icon: Send,
      title: 'Application Submission',
      description: 'Submit your application with complete documentation',
      duration: '1-2 days'
    },
    {
      icon: Clock,
      title: 'Processing & Follow-up',
      description: 'Track application status and provide regular updates',
      duration: '2-12 weeks'
    },
    {
      icon: Award,
      title: 'Visa Approval',
      description: 'Receive your visa and pre-departure guidance',
      duration: '1 day'
    }
  ],
  'dependent-visa': [
    {
      icon: FileText,
      title: 'Eligibility Assessment',
      description: 'Evaluate relationship documentation and sponsor status',
      duration: '1 hour'
    },
    {
      icon: Users,
      title: 'Document Collection',
      description: 'Compile relationship proof, financial documents, and sponsor letters',
      duration: '1-2 weeks'
    },
    {
      icon: Send,
      title: 'Application Filing',
      description: 'Submit comprehensive dependent visa application',
      duration: '2-3 days'
    },
    {
      icon: Clock,
      title: 'Processing Period',
      description: 'Monitor application progress and respond to queries',
      duration: '1-6 months'
    },
    {
      icon: Award,
      title: 'Family Reunion',
      description: 'Visa approval and settlement support for your family',
      duration: 'Ongoing'
    }
  ],
  'default': [
    {
      icon: FileText,
      title: 'Consultation',
      description: 'Initial assessment and requirement analysis',
      duration: '30-60 mins'
    },
    {
      icon: Users,
      title: 'Documentation',
      description: 'Prepare and verify all necessary documents',
      duration: '1-2 weeks'
    },
    {
      icon: Send,
      title: 'Application',
      description: 'Submit application with complete documentation',
      duration: '1-3 days'
    },
    {
      icon: Clock,
      title: 'Processing',
      description: 'Track progress and provide regular updates',
      duration: 'Varies'
    },
    {
      icon: Award,
      title: 'Success',
      description: 'Achieve your immigration goals with our support',
      duration: 'Ongoing'
    }
  ]
};

export default function ServiceProcess({ serviceType }: ServiceProcessProps) {
  const steps = processSteps[serviceType as keyof typeof processSteps] || processSteps.default;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          Our Process
        </h2>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#FAA71A] via-[#AFC1DB] to-[#13294E] dark:from-[#FAA71A] dark:via-[#AFC1DB] dark:to-white"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex items-start space-x-4"
              >
                {/* Step Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[#FAA71A] rounded-full shadow-lg">
                  <step.icon className="w-6 h-6 text-[#FAA71A]" />
                </div>
                
                {/* Step Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-[#AFC1DB]/20 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#13294E] dark:text-white">
                      Step {index + 1}: {step.title}
                    </h3>
                    <span className="text-sm text-[#FAA71A] font-medium bg-[#FAA71A]/10 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
