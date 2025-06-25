import { Metadata } from "next";
import FAQAccordion from "@/components/service/faq-accordion";
import { services } from "@/data/services-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - New Journey Immigration",
  description: "Find answers to common questions about immigration, visa services, study abroad, and more. Get expert guidance from New Journey Immigration.",
  keywords: "FAQ, frequently asked questions, immigration questions, visa help, study abroad FAQ",
  openGraph: {
    title: "Frequently Asked Questions - New Journey Immigration",
    description: "Find answers to common questions about immigration, visa services, study abroad, and more.",
    type: "website",
  },
};

export default function FAQPage() {
  // Collect all FAQs from all services
  const allFAQs = services.flatMap(service => service.faqs);
  
  // Remove duplicates based on question content
  const uniqueFAQs = allFAQs.filter((faq, index, self) => 
    index === self.findIndex(f => f.question === faq.question)
  );

  // Add some general FAQs
  const generalFAQs = [
    {
      id: 1001,
      question: "What services does New Journey Immigration offer?",
      answer: "We offer comprehensive immigration and education services including visitor visas, study permits, permanent residency, IELTS coaching, travel insurance, and career guidance for students aspiring to study abroad."
    },
    {
      id: 1002,
      question: "How long does the visa application process take?",
      answer: "Processing times vary by country and visa type. Generally, visitor visas take 10-30 days, study permits 4-12 weeks, and permanent residency 6-18 months. We'll provide specific timelines during your consultation."
    },
    {
      id: 1003,
      question: "Do you offer free consultations?",
      answer: "Yes! We provide free initial consultations to assess your case, discuss requirements, and provide personalized guidance. Contact us to schedule your free consultation."
    },
    {
      id: 1004,
      question: "What countries do you provide services for?",
      answer: "We provide services for major destinations including Canada, USA, UK, Australia, New Zealand, Germany, Ireland, Singapore, and many more countries worldwide."
    },
    {
      id: 1005,
      question: "How can I contact New Journey Immigration?",
      answer: "You can reach us through multiple channels: Phone (+91 7623 043 499), Email (support@newjourneyworld.com), WhatsApp, or by visiting our offices in Mehsana, India or Brampton, Canada."
    },
    {
      id: 1006,
      question: "What documents do I need for immigration applications?",
      answer: "Required documents vary by visa type and country, but generally include passport, photographs, financial documents, educational certificates, work experience letters, and purpose-specific documents. We provide customized checklists for each case."
    },
    {
      id: 1007,
      question: "Do you help with visa refusals and appeals?",
      answer: "Yes, we provide comprehensive support for visa refusals including analysis of refusal reasons, document strengthening, and assistance with re-applications or appeals where applicable."
    },
    {
      id: 1008,
      question: "What are your success rates?",
      answer: "We maintain high success rates across all our services through thorough case assessment, proper documentation, and expert guidance. Our success rates vary by service type and are discussed during consultation."
    }
  ];

  const combinedFAQs = [...generalFAQs, ...uniqueFAQs];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-[#0d1b34] dark:via-[#13294e] dark:to-[#0d1b34]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#13294e] to-[#1e3a5f] dark:from-[#0d1b34] dark:to-[#13294e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#faa71a] to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about immigration, visa services, study abroad, and more. 
              Get expert guidance from New Journey Immigration.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Browse through our frequently asked questions to find the information you need
            </p>
          </div>
          
          <FAQAccordion faqs={combinedFAQs} />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-[#faa71a] to-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl mb-8 text-orange-100">
            Can't find what you're looking for? Our immigration experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#13294e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+917623043499"
              className="bg-[#13294e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 