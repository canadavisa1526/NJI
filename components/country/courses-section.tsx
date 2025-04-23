import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, DollarSign, GraduationCap } from 'lucide-react';

interface CoursesSectionProps {
  country: DetailedCountry;
}

export function CoursesSection({ country }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-16 bg-[#13294E]/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Top Courses in <span className="text-[#FAA71A]">{country.name}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Explore the most popular and promising educational pathways for international students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {country.topCourses.map((course, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all hover:shadow-md hover:border-[#FAA71A]/50"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[#13294E] dark:text-white mb-4 group-hover:text-[#FAA71A]">
                    {course.name}
                  </h3>
                  <div className="bg-[#13294E] dark:bg-[#AFC1DB]/20 text-white dark:text-[#AFC1DB] py-1 px-3 rounded-full text-sm">
                    {course.level}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-y-4 mb-4 text-sm">
                  <div className="w-1/2 flex items-center text-muted-foreground">
                    <Clock size={16} className="mr-2 text-[#FAA71A]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="w-1/2 flex items-center text-muted-foreground">
                    <DollarSign size={16} className="mr-2 text-[#FAA71A]" />
                    <span>{course.averageFee}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#inquiry-form" 
            className="inline-block bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Request Course Information
          </a>
        </div>
      </div>
    </section>
  );
}