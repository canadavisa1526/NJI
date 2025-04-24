interface SuccessStory {
  name: string;
  image: string;
  course: string;
  institution: string;
  year: string;
  quote: string;
}

interface SuccessStoriesSectionProps {
  country: {
    name: string;
    successStories: SuccessStory[];
  };
}

export default function SuccessStoriesSection({ country }: SuccessStoriesSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        Success Stories - <span className="text-[#FAA71A]">{country.name}</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {country.successStories.map((story, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold">{story.name}</h3>
                <p className="text-sm text-[#AFC1DB]">{story.course}</p>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="bg-[#AFC1DB]/20 py-1 px-3 rounded-full text-xs text-[#13294E] font-medium mr-2">
                  {story.institution}
                </div>
                <div className="bg-[#FAA71A]/20 py-1 px-3 rounded-full text-xs text-[#13294E] font-medium">
                  {story.year}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-3 -left-2 text-[#FAA71A] text-5xl opacity-20">
                  "
                </div>
                <p className="text-gray-700 italic relative z-10">
                  {story.quote}
                </p>
                <div className="absolute -bottom-3 -right-2 text-[#FAA71A] text-5xl opacity-20">
                  "
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}