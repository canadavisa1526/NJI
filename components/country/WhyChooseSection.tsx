interface WhyChooseSectionProps {
  country: {
    name: string;
    whyChoose: string[];
  };
}

export default function WhyChooseSection({ country }: WhyChooseSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        Why Choose <span className="text-[#FAA71A]">{country.name}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {country.whyChoose.map((reason, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-[#FAA71A]"
          >
            <div className="flex items-start mb-4">
              <div className="bg-[#FAA71A] text-[#13294E] w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                {index + 1}
              </div>
              <div className="text-lg font-medium text-[#13294E]">Reason</div>
            </div>
            <p className="text-gray-700">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}