"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/services-data";


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
    <div className="max-w-5xl mx-auto space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="flex justify-between items-center w-full p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            aria-expanded={openItems[faq.id]}
          >
            <div className="flex items-start space-x-4 flex-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAA71A] to-[#13294E] flex items-center justify-center text-white font-bold shadow-lg">
                Q
              </div>
              <h3 className="text-xl font-bold text-[#13294E] dark:text-white group-hover:text-[#FAA71A] transition-colors leading-tight">
                {faq.question}
              </h3>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-[#FAA71A] transition-transform duration-300 flex-shrink-0 ml-4 ${
                openItems[faq.id] ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openItems[faq.id] && (
            <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4 pt-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#13294E] to-[#FAA71A] flex items-center justify-center text-white font-bold shadow-lg">
                  A
                </div>
                <div className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
