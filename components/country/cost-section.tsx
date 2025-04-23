import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, BookOpen, AlertCircle } from 'lucide-react';

interface CostSectionProps {
  country: DetailedCountry;
}

export function CostSection({ country }: CostSectionProps) {
  return (
    <section id="cost" className="py-16 bg-[#AFC1DB]/10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Cost of Living & Education in <span className="text-[#FAA71A]">{country.name}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          A comprehensive overview of expenses to help you plan your international journey.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cost of Living Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-[#13294E] dark:text-white flex items-center">
                <Home className="mr-2 text-[#FAA71A]" /> Cost of Living
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  (Monthly in {country.costOfLiving.currency})
                </span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Accommodation</div>
                  <div>{country.costOfLiving.accommodation}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Food</div>
                  <div>{country.costOfLiving.food}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Transportation</div>
                  <div>{country.costOfLiving.transportation}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Miscellaneous</div>
                  <div>{country.costOfLiving.miscellaneous}</div>
                </div>
                
                <div className="flex justify-between items-center pt-2 font-bold">
                  <div>Total (Estimated)</div>
                  <div className="text-[#FAA71A]">{country.costOfLiving.total}</div>
                </div>
              </div>
              
              {country.costOfLiving.notes && (
                <div className="mt-6 p-3 bg-muted rounded-md flex items-start">
                  <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#FAA71A]" />
                  <p className="text-sm text-muted-foreground">{country.costOfLiving.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Cost of Study Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-[#13294E] dark:text-white flex items-center">
                <BookOpen className="mr-2 text-[#FAA71A]" /> Cost of Education
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  (Annual in {country.costOfStudy.currency})
                </span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Accommodation</div>
                  <div>{country.costOfStudy.accommodation}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Food</div>
                  <div>{country.costOfStudy.food}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Transportation</div>
                  <div>{country.costOfStudy.transportation}</div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="font-medium">Books & Supplies</div>
                  <div>{country.costOfStudy.miscellaneous}</div>
                </div>
                
                <div className="flex justify-between items-center pt-2 font-bold">
                  <div>Total (Estimated)</div>
                  <div className="text-[#FAA71A]">{country.costOfStudy.total}</div>
                </div>
              </div>
              
              {country.costOfStudy.notes && (
                <div className="mt-6 p-3 bg-muted rounded-md flex items-start">
                  <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#FAA71A]" />
                  <p className="text-sm text-muted-foreground">{country.costOfStudy.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}