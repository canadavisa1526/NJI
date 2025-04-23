import Image from 'next/image';
// import { DetailedCountry } from '@/types/country';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Trophy, MapPin, GraduationCap } from 'lucide-react';
import { DetailedCountry } from '@/types/country';

interface InstitutionsSectionProps {
  country: DetailedCountry;
}

export function InstitutionsSection({ country }: InstitutionsSectionProps) {
  return (
    <section id="institutions" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Top Institutions in <span className="text-[#FAA71A]">{country.name}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Discover world-class educational institutions with exceptional programs and opportunities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {country.topInstitutions.map((institution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={institution.image}
                  alt={institution.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13294E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 bg-[#FAA71A] text-white py-1 px-3 rounded-full flex items-center text-sm">
                  <Trophy size={14} className="mr-1" /> {institution.ranking}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#FAA71A] transition-colors line-clamp-2">
                  {institution.name}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin size={14} className="mr-1" />
                  {institution.location}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap size={14} className="mr-1" />
                  {/* {institution?.programs || 0} Programs */}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <a 
                  href={institution.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#13294E] dark:text-[#AFC1DB] hover:text-[#FAA71A] text-sm font-medium flex items-center group-hover:underline transition-colors"
                >
                  Visit Website <ExternalLink size={14} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#inquiry-form" 
            className="inline-block bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Get Institution Guidance
          </a>
        </div>
      </div>
    </section>
  );
}