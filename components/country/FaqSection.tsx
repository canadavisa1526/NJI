'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  country: {
    name: string;
    faqs: FAQ[];
  };
}

export default function FaqSection({ country }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        Frequently Asked Questions - <span className="text-[#FAA71A]">{country.name}</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {country.faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className={`w-full text-left p-5 focus:outline-none flex justify-between items-center ${
                openIndex === index ? 'bg-[#13294E] text-white' : 'bg-white text-[#13294E]'
              }`}
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180 text-[#FAA71A]' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 bg-white border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}