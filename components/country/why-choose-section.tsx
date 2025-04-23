import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface WhyChooseSectionProps {
  country: DetailedCountry;
}

export function WhyChooseSection({ country }: WhyChooseSectionProps) {
  return (
    <section id="why-choose" className="py-16 bg-[#AFC1DB]/10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Why Choose <span className="text-[#FAA71A]">{country.name}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {country.whyChoose.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 text-[#FAA71A] group-hover:scale-110 transition-transform">
                  <CheckCircle size={24} />
                </div>
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
          
          <div className="relative overflow-hidden rounded-lg h-[300px] md:h-full">
            <div className="absolute inset-0 bg-[#13294E] opacity-20 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#13294E] to-transparent text-white">
              <h3 className="text-2xl font-bold mb-3">Begin Your Journey Today</h3>
              <p className="text-white/80 mb-4">Let us help you achieve your dreams of studying and working in {country.name}.</p>
              <a 
                href="#inquiry-form" 
                className="inline-block bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}