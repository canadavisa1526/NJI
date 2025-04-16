"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Building2,
  Globe2,
  Users,
  BookOpen,
  Award,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";

const countryData = {
  canada: {
    name: "Canada",
    hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop&q=60",
    description:
      "Canada offers world-class education with a multicultural environment and post-study work opportunities.",
    universities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Waterloo",
      "University of Alberta",
    ],
    stats: {
      universities: "100+",
      intlStudents: "640,000+",
      workPermit: "3 years",
      avgTuition: "$20,000-35,000",
    },
    features: [
      "Post-Graduation Work Permit",
      "Multicultural Environment",
      "High Quality of Life",
      "Healthcare Coverage",
    ],
  },
  usa: {
    name: "United States",
    hero: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&auto=format&fit=crop&q=60",
    description:
      "The USA offers diverse educational opportunities with cutting-edge research facilities and global recognition.",
    universities: [
      "Harvard University",
      "MIT",
      "Stanford University",
      "Yale University",
      "Columbia University",
    ],
    stats: {
      universities: "4,000+",
      intlStudents: "1 million+",
      workPermit: "OPT up to 3 years",
      avgTuition: "$25,000-55,000",
    },
    features: [
      "Optional Practical Training",
      "Research Opportunities",
      "Diverse Campus Life",
      "Strong Alumni Network",
    ],
  },
  uk: {
    name: "United Kingdom",
    hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60",
    description:
      "The UK offers prestigious education with shorter program durations and rich cultural experiences.",
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "UCL",
      "LSE",
    ],
    stats: {
      universities: "150+",
      intlStudents: "680,000+",
      workPermit: "2 years",
      avgTuition: "£15,000-35,000",
    },
    features: [
      "Graduate Route Visa",
      "Shorter Programs",
      "Historic Universities",
      "Global Recognition",
    ],
  },
  australia: {
    name: "Australia",
    hero: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=60",
    description:
      "Australia offers high-quality education with excellent post-study work opportunities in a multicultural environment.",
    universities: [
      "University of Melbourne",
      "University of Sydney",
      "Australian National University",
      "University of Queensland",
      "Monash University",
    ],
    stats: {
      universities: "43+",
      intlStudents: "750,000+",
      workPermit: "Up to 4 years",
      avgTuition: "A$20,000-45,000",
    },
    features: [
      "Post-Study Work Visa",
      "High Living Standards",
      "World-Class Research",
      "Work While Studying",
    ],
  },
};

const CountryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const country = countryData[slug as keyof typeof countryData];

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Country Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The country you're looking for doesn't exist in our database.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={country.hero}
          alt={country.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/70 to-purple-700/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Study in {country.name}
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                {country.description}
              </p>
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => setIsConsultationOpen(true)}
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Building2 className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.stats.universities}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Universities
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Users className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.stats.intlStudents}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                International Students
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Clock className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.stats.workPermit}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Work Permit
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <DollarSign className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.stats.avgTuition}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Average Tuition/Year
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Top Universities
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover prestigious institutions offering world-class education
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.universities.map((university, index) => (
              <motion.div
                key={university}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <GraduationCap className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {university}
                </h3>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Study in {country.name}?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Key benefits of choosing {country.name} as your study destination
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hear from students who are living their dreams in {country.name}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      1500 + index
                    }?w=800&auto=format&fit=crop&q=60`}
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Student Name
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>University Name</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationDialog
        open={isConsultationOpen}
        onOpenChange={setIsConsultationOpen}
      />
    </div>
  );
};

export default CountryPage;
