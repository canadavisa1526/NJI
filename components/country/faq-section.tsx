"use client";

import { useState } from 'react';
import { DetailedCountry } from '@/types/country';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';

interface FAQSectionProps {
  country: DetailedCountry;
}

export function FAQSection({ country }: FAQSectionProps) {
  return (
    <section id="faq" className="py-16 bg-[#13294E]/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Get answers to common questions about studying in {country.name}.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {country.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#13294E]/20">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-[#FAA71A] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}