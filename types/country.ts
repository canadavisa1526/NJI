export interface Country {
  name: string;
  slug: string;
  flag: string;
  description: string;
  features: string[];
  stats: {
    universities: string;
    students: string;
    success: string;
  };
}

export interface DetailedCountry extends Country {
  whyChoose: string[];
  topInstitutions: Institution[];
  topCourses: Course[];
  jobOpportunities: Job[];
  costOfLiving: CostInfo;
  costOfStudy: CostInfo;
  successStories: SuccessStory[];
  faqs: FAQ[];
}

export interface Institution {
  name: string;
  location: string;
  description: string;
  image: string;
  ranking: string;
  website: string;
}

export interface Course {
  name: string;
  duration: string;
  level: string;
  description: string;
  averageFee: string;
}

export interface Job {
  title: string;
  demandLevel: string;
  averageSalary: string;
  requirements: string;
}

export interface CostInfo {
  currency: string;
  accommodation: string;
  food: string;
  transportation: string;
  miscellaneous: string;
  total: string;
  notes: string;
}

export interface SuccessStory {
  name: string;
  image: string;
  course: string;
  institution: string;
  year: string;
  quote: string;
}

export interface FAQ {
  question: string;
  answer: string;
}