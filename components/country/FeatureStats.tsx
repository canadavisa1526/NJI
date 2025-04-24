interface FeatureStatsProps {
  country: {
    features: string[];
    stats: {
      universities: string;
      students: string;
      success: string;
    };
  };
}

export default function FeatureStats({ country }: FeatureStatsProps) {
  return (
    <section className="py-12 bg-[#13294E] text-white rounded-xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <div className="px-6">
            <h3 className="text-2xl font-bold mb-6 text-[#FAA71A]">Key Programs</h3>
            <div className="grid grid-cols-2 gap-4">
              {country.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-[#AFC1DB]/20 border border-[#AFC1DB]/30 rounded-lg p-4 transition-all duration-300 hover:bg-[#FAA71A]/10 hover:border-[#FAA71A]/30"
                >
                  <span className="block text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="px-6">
            <h3 className="text-2xl font-bold mb-6 text-[#FAA71A]">Key Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAA71A] mb-2">
                  {country.stats.universities}
                </div>
                <div className="text-[#AFC1DB]">Universities</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAA71A] mb-2">
                  {country.stats.students}
                </div>
                <div className="text-[#AFC1DB]">Students</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAA71A] mb-2">
                  {country.stats.success}
                </div>
                <div className="text-[#AFC1DB]">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}