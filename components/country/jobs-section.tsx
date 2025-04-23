import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeDollarSign, Briefcase, GraduationCap } from 'lucide-react';

interface JobsSectionProps {
  country: DetailedCountry;
}

export function JobsSection({ country }: JobsSectionProps) {
  const getDemandBadgeColor = (level: string) => {
    if (level.includes('Very High')) return 'bg-green-500';
    if (level.includes('High')) return 'bg-green-400';
    if (level.includes('Medium')) return 'bg-yellow-500';
    return 'bg-yellow-400';
  };

  return (
    <section id="jobs" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Job Opportunities in <span className="text-[#FAA71A]">{country.name}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Discover career pathways available for graduates in high-demand fields.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {country.jobOpportunities.map((job, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-l-4 hover:border-l-[8px] transition-all"
              style={{ borderLeftColor: '#13294E' }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className={`${getDemandBadgeColor(job.demandLevel)} text-white py-1 px-3 rounded-full text-sm`}>
                    {job.demandLevel} Demand
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-[#FAA71A]">
                  <BadgeDollarSign size={18} className="mr-2" />
                  <span className="font-medium">{job.averageSalary}</span>
                </div>
                
                <div className="mb-2 text-sm font-medium text-muted-foreground">Requirements:</div>
                <p className="text-sm text-muted-foreground">
                  {job.requirements}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-[#13294E] text-white rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">Kick-start Your International Career</h3>
              <p className="text-white/80">
                Our career counselors can help you understand the employment landscape, 
                prepare for international job markets, and guide you toward successful career pathways.
              </p>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-0 text-center">
              <a 
                href="#inquiry-form" 
                className="inline-block bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105"
              >
                Career Guidance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}