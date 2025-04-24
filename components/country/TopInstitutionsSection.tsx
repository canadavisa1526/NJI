import { useState } from 'react';
import Image from 'next/image';

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

export default function TopInstitutionsSection({ country }: TopInstitutionsSectionProps) {
  // This will help generate placeholder institutions
  const placeholderImages = [
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
    "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg",
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
  ];

  // Generate additional placeholder institutions to make total 20
  const placeholderInstitutions: Institution[] = [];
  if (country.topInstitutions.length < 20) {
    for (let i = 0; i < 20 - country.topInstitutions.length; i++) {
      placeholderInstitutions.push({
        name: `${country.name} University of ${['Technology', 'Arts', 'Sciences', 'Business', 'Liberal Arts'][i % 5]} ${i + 1}`,
        location: `${['Major', 'Capital', 'Coastal', 'Western', 'Eastern'][i % 5]} City, ${country.name}`,
        description: 'Renowned institution offering diverse programs in multiple disciplines.',
        image: placeholderImages[i % placeholderImages.length],
        ranking: `${150 + i * 10}th globally`,
        website: 'https://www.university.edu',
      });
    }
  }

  const allInstitutions = [...country.topInstitutions, ...placeholderInstitutions];
  
  // Show only first 8 by default, and allow "View More" functionality
  const [showAll, setShowAll] = useState(false);
  const displayedInstitutions = showAll ? allInstitutions : allInstitutions.slice(0, 8);
  
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        Top Institutions in <span className="text-[#FAA71A]">{country.name}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedInstitutions.map((institution, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:translate-y-[-5px]"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={institution.image} 
                alt={institution.name} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="inline-block px-2 py-1 bg-[#FAA71A] text-[#13294E] text-xs font-semibold rounded">
                  {institution.ranking}
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#13294E] mb-1 line-clamp-1">{institution.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{institution.location}</p>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{institution.description}</p>
              
              <a 
                href={institution.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#13294E] hover:text-[#FAA71A] text-sm font-medium transition-colors duration-200"
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