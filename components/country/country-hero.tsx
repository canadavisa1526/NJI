import Image from 'next/image';
import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CountryHeroProps {
  country: DetailedCountry;
}

export function CountryHero({ country }: CountryHeroProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <Image 
          src={country.flag}
          alt={`${country.name} landscape`}
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      <div className="relative z-20 pt-32 pb-16 md:pt-48 md:pb-24 container">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            {country.name}
          </h1>
           {country.description ?  ( <p className="text-xl md:text-2xl mb-8 text-foreground/90">
           
            {country?.description}
          </p>
          ) :  null}
         
          <div className="flex flex-wrap gap-2 mb-8">
            {country.features.map((feature, index) => (
              <Badge key={index} className="bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white text-sm py-1 px-4">
                {feature}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Card className="bg-[#13294E]/90 text-white border-0 overflow-hidden transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-[#FAA71A] text-3xl font-bold mb-2">{country.stats.universities}</div>
                <div className="text-white/80">Top Universities</div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#13294E]/90 text-white border-0 overflow-hidden transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-[#FAA71A] text-3xl font-bold mb-2">{country.stats.students}</div>
                <div className="text-white/80">Students Placed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#13294E]/90 text-white border-0 overflow-hidden transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-[#FAA71A] text-3xl font-bold mb-2">{country.stats.success}</div>
                <div className="text-white/80">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}