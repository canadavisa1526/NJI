interface CostBreakdown {
  currency: string;
  accommodation: string;
  food: string;
  transportation: string;
  miscellaneous: string;
  total: string;
  notes: string;
}

interface CostSectionProps {
  country: {
    name: string;
    costOfLiving: CostBreakdown;
    costOfStudy: CostBreakdown;
  };
}

export default function CostSection({ country }: CostSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-8 text-center">
        Cost Breakdown - <span className="text-[#FAA71A]">{country.name}</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cost of Living */}
        <div>
          <div className="bg-gradient-to-br from-[#13294E] to-[#193966] rounded-t-xl p-5">
            <h3 className="text-2xl font-bold text-white">Cost of Living</h3>
            <p className="text-[#AFC1DB]">Estimated Monthly Expenses ({country.costOfLiving.currency})</p>
          </div>
          
          <div className="bg-white border-x border-b border-gray-200 rounded-b-xl p-6 shadow-md">
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Accommodation</span>
                <span className="font-medium text-[#13294E]">{country.costOfLiving.accommodation}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Food</span>
                <span className="font-medium text-[#13294E]">{country.costOfLiving.food}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Transportation</span>
                <span className="font-medium text-[#13294E]">{country.costOfLiving.transportation}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Miscellaneous</span>
                <span className="font-medium text-[#13294E]">{country.costOfLiving.miscellaneous}</span>
              </li>
              
              <li className="flex justify-between items-center pt-2">
                <span className="font-semibold text-[#13294E]">Total (Monthly)</span>
                <span className="font-bold text-[#FAA71A]">{country.costOfLiving.total}</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-[#AFC1DB]/10 border border-[#AFC1DB]/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 italic">{country.costOfLiving.notes}</p>
            </div>
          </div>
        </div>
        
        {/* Cost of Study */}
        <div>
          <div className="bg-gradient-to-br from-[#FAA71A] to-[#f39c00] rounded-t-xl p-5">
            <h3 className="text-2xl font-bold text-[#13294E]">Cost of Study</h3>
            <p className="text-[#13294E]/80">Estimated Yearly Expenses ({country.costOfStudy.currency})</p>
          </div>
          
          <div className="bg-white border-x border-b border-gray-200 rounded-b-xl p-6 shadow-md">
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Accommodation</span>
                <span className="font-medium text-[#13294E]">{country.costOfStudy.accommodation}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Food</span>
                <span className="font-medium text-[#13294E]">{country.costOfStudy.food}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Transportation</span>
                <span className="font-medium text-[#13294E]">{country.costOfStudy.transportation}</span>
              </li>
              
              <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Miscellaneous</span>
                <span className="font-medium text-[#13294E]">{country.costOfStudy.miscellaneous}</span>
              </li>
              
              <li className="flex justify-between items-center pt-2">
                <span className="font-semibold text-[#13294E]">Total (Yearly)</span>
                <span className="font-bold text-[#FAA71A]">{country.costOfStudy.total}</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-[#AFC1DB]/10 border border-[#AFC1DB]/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 italic">{country.costOfStudy.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}