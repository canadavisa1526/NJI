"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Users,
  Briefcase,
  GraduationCap,
  Home,
  Shield,
  CreditCard,
  BookOpen,
  Globe,
} from "lucide-react";
import { services } from "@/data/services-data";

interface RelatedServicesProps {
  currentServiceSlug: string;
}

const serviceIcons = {
  "visitor-visa": Plane,
  "dependent-visa": Users,
  "work-permit": Briefcase,
  "permanent-residency": Home,
  insurance: Shield,
  "air-ticket": Plane,
  finance: CreditCard,
  coaching: BookOpen,
  "immigration-citizenship": Globe,
};

export default function RelatedServices({
  currentServiceSlug,
}: RelatedServicesProps) {
  // Get related services (exclude current service)
  const relatedServices = services
    .filter((service) => service.slug !== currentServiceSlug)
    .slice(0, 3); // Show only 3 related services

  if (relatedServices.length === 0) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          Related Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => {
            const IconComponent =
              serviceIcons[service.slug as keyof typeof serviceIcons] || Globe;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-[#AFC1DB]/20 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    {/* Service Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FAA71A]/20 to-[#13294E]/20 rounded-lg mb-4 group-hover:from-[#FAA71A]/30 group-hover:to-[#13294E]/30 transition-all">
                      <IconComponent className="w-6 h-6 text-[#FAA71A]" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-semibold text-[#13294E] dark:text-white mb-2 group-hover:text-[#FAA71A] transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Countries/Coverage */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.countries.slice(0, 3).map((country, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#AFC1DB]/20 dark:bg-gray-700 text-[#13294E] dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {country}
                          </span>
                        ))}
                        {service.countries.length > 3 && (
                          <span className="text-xs text-[#FAA71A] font-medium">
                            +{service.countries.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center text-[#FAA71A] text-sm font-medium group-hover:text-[#13294E] dark:group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
