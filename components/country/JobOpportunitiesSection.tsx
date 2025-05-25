interface JobOpportunity {
  title: string;
  demandLevel: string;
  averageSalary: string;
  requirements: string;
}

interface JobOpportunitiesSectionProps {
  country: {
    name: string;
    jobOpportunities: JobOpportunity[];
  };
}

export default function JobOpportunitiesSection({ country }: JobOpportunitiesSectionProps) {
  // Function to render the demand level indicator
  const renderDemandLevel = (level: string) => {
    const demandLevels: Record<string, { color: string; dots: number }> = {
      'Low': { color: 'bg-gray-400', dots: 1 },
      'Medium': { color: 'bg-blue-400', dots: 2 },
      'Medium-High': { color: 'bg-green-400', dots: 3 },
      'High': { color: 'bg-[#FAA71A]', dots: 4 },
      'Very High': { color: 'bg-red-500', dots: 5 },
    };

    // Default or fallback value
    const { color, dots } = demandLevels[level] || { color: 'bg-gray-400', dots: 0 };

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i < dots ? color : 'bg-gray-200 dark:bg-gray-600'}`}
          ></div>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">{level}</span>
      </div>
    );
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-white mb-8 text-center">
        Job Opportunities in <span className="text-[#FAA71A]">{country.name}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {country.jobOpportunities.map((job, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 shadow-md dark:shadow-gray-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-[#13294E] dark:text-white">{job.title}</h3>
              <div className="bg-[#13294E] text-white py-1 px-3 rounded-full text-xs">
                {job.averageSalary}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium text-muted-foreground mb-1">Demand Level:</div>
              {renderDemandLevel(job.demandLevel)}
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">Requirements:</div>
              <p className="text-muted-foreground">{job.requirements}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}