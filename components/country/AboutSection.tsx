import Image from 'next/image';

interface AboutSectionProps {
  country: {
    about: {
      description: string;
      keyPoints: string[];
      image: string;
    };
  };
}

export default function AboutSection({ country }: AboutSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        About <span className="text-[#FAA71A]">The Country</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-black dark:text-white mb-6 leading-relaxed">
            {country.about.description}
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#13294E] mb-4">Key Points</h3>
            <ul className="space-y-2">
              {country.about.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FAA71A] mr-2">•</span>
                  <span className="text-black dark:text-white">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={country.about.image}
              alt="Country view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}