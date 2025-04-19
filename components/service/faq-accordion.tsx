'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/data/services-data';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!faqs.length) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          key={faq.id}
          className="border border-[#AFC1DB]/30 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="flex justify-between items-center w-full p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-expanded={openItems[faq.id]}
          >
            <h3 className="text-lg font-medium text-[#13294E] dark:text-white">{faq.question}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-[#FAA71A] transition-transform duration-200 ${
                openItems[faq.id] ? 'transform rotate-180' : ''
              }`} 
            />
          </button>
          
          <AnimatePresence>
            {openItems[faq.id] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-[#AFC1DB]/20 dark:border-gray-700">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}