import { useState } from 'react';
import Image from 'next/image';
import { getOptimizedImageUrl, handleImageError as handleImageErrorUtil } from '@/utils/imageUtils';
import { universities } from '@/data/universities';

interface Institution {
  name: string;
  location: string;
  description: string;
  image: string;
  ranking: string;
  website: string;
}

interface TopInstitutionsSectionProps {
  country: {
    name: string;
    topInstitutions: Institution[];
  };
}

// Helper function to get universities for a specific country
const getUniversitiesForCountry = (countryName: string) => {
  return universities.filter((uni: any) => uni.country === countryName);
};

// Helper function to get random universities from other countries
const getRandomUniversitiesFromOtherCountries = (excludeCountry: string, count: number) => {
  const otherUniversities = universities.filter((uni: any) => uni.country !== excludeCountry);
  const shuffled = otherUniversities.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to merge university data with existing institution data
const mergeInstitutionData = (existingInstitutions: Institution[], countryName: string) => {
  const countryUniversities = getUniversitiesForCountry(countryName);
  
  // If we have universities data for this country, use it
  if (countryUniversities.length > 0) {
    return countryUniversities.map((uni: any, index: number) => ({
      name: uni.name,
      location: `${countryName}`,
      description: `Leading institution in ${countryName} offering world-class education and research opportunities.`,
      image: uni.image,
      ranking: `Top ${index + 1} in ${countryName}`,
      website: `https://www.${uni.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.edu`
    }));
  }
  
  // If no universities data for this country, use existing institutions but with random images
  if (existingInstitutions.length > 0) {
    const randomUniversities = getRandomUniversitiesFromOtherCountries(countryName, existingInstitutions.length);
    
    return existingInstitutions.map((institution: Institution, index: number) => ({
      ...institution,
      image: randomUniversities[index]?.image || institution.image, // Use random image if available
    }));
  }
  
  // Fallback: create generic institutions with random images
  const randomUniversities = getRandomUniversitiesFromOtherCountries(countryName, 8);
  
  return randomUniversities.map((uni: any, index: number) => ({
    name: `${countryName} University ${index + 1}`,
    location: `${countryName}`,
    description: `Leading institution in ${countryName} offering world-class education and research opportunities.`,
    image: uni.image,
    ranking: `Top ${index + 1} in ${countryName}`,
    website: `https://www.${countryName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}university${index + 1}.edu`
  }));
};

export default function TopInstitutionsSection({ country }: TopInstitutionsSectionProps) {
  // Merge universities data with existing country data
  const allInstitutions = mergeInstitutionData(country.topInstitutions, country.name);

  // Show only first 8 by default, and allow "View More" functionality
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const displayedInstitutions = showAll ? allInstitutions : allInstitutions.slice(0, 8);

  const handleImageError = (index: number, originalUrl: string) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
    // Log the error for debugging
    handleImageErrorUtil(originalUrl, 'institution');
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-white mb-8 text-center">
        Top Institutions in <span className="text-[#FAA71A]">{country.name}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedInstitutions.map((institution, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-md dark:shadow-gray-800 transition-all duration-300 hover:shadow-lg hover:transform hover:translate-y-[-5px]"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={imageErrors[index] ? getOptimizedImageUrl(null, 'institution') : getOptimizedImageUrl(institution.image, 'institution')}
                alt={institution.name}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-110"
                onError={() => handleImageError(index, institution.image)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="inline-block px-2 py-1 bg-[#FAA71A] text-[#13294E] text-xs font-semibold rounded">
                  {institution.ranking}
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#13294E] dark:text-white mb-1 line-clamp-1">{institution.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{institution.location}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{institution.description}</p>

              <a
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#13294E] dark:text-blue-400 hover:text-[#FAA71A] text-sm font-medium transition-colors duration-200"
              >
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>

      {allInstitutions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#13294E] hover:bg-[#193966] text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          >
            {showAll ? 'Show Less' : 'View More Institutions'}
          </button>
        </div>
      )}
    </section>
  );
}