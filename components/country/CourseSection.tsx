interface Course {
  name: string;
  duration: string;
  level: string;
  description: string;
  averageFee: string;
}

interface CourseSectionProps {
  country: {
    name: string;
    topCourses: Course[];
  };
}

export default function CourseSection({ country }: CourseSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-white mb-8 text-center">
        Top Courses in <span className="text-[#FAA71A]">{country.name}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {country.topCourses.map((course, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 shadow-md dark:shadow-gray-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#13294E] dark:text-white">{course.name}</h3>
              <span className="bg-[#AFC1DB]/30 dark:bg-[#AFC1DB]/20 text-[#13294E] dark:text-white py-1 px-3 rounded-full text-sm">
                {course.level}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FAA71A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">{course.duration}</span>
              </div>

              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FAA71A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">{course.averageFee}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{course.description}</p>

            <button className="mt-2 text-[#13294E] dark:text-blue-400 hover:text-[#FAA71A] font-medium transition-colors duration-200">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}