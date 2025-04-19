import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  if (!benefits.length) return null;
  
  return (
    < >
      <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
        Key Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-4 rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent hover:border-[#AFC1DB]/20 dark:hover:border-gray-700"
          >
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FAA71A]/20 dark:bg-[#FAA71A]/30 flex items-center justify-center">
              <Check className="h-3 w-3 text-[#FAA71A]" strokeWidth={3} />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}