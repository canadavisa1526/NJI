import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  if (!benefits.length) return null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-white mb-6">
          Why Choose New Journey Immigration
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience the difference with our professional immigration services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#FAA71A]/30"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAA71A] to-[#13294E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Check className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium group-hover:text-[#13294E] dark:group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
