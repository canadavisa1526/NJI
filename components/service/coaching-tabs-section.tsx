"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Book,
  Monitor,
  Leaf,
  Star,
  Info,
  Headphones,
  Search,
  Edit,
  Mic,
  GraduationCap,
  Briefcase,
  Clock,
  Trophy,
  Target,
  Calendar,
  FileText,
  CheckCircle,
  Sparkles,
  BookOpen
} from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  content: string;
  category?: string;
  icon?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface CoachingTabsSectionProps {
  serviceDetails: ServiceDetail[];
  categories: ServiceCategory[];
}

const getIcon = (iconName?: string) => {
  const iconMap: { [key: string]: any } = {
    book: Book,
    monitor: Monitor,
    "maple-leaf": Leaf,
    star: Star,
    info: Info,
    headphones: Headphones,
    search: Search,
    edit: Edit,
    mic: Mic,
    "graduation-cap": GraduationCap,
    briefcase: Briefcase,
    clock: Clock,
    trophy: Trophy,
    target: Target,
    calendar: Calendar,
    "file-text": FileText,
    "check-circle": CheckCircle,
    "book-open": BookOpen,
  };

  return iconMap[iconName || "info"] || Info;
};

export default function CoachingTabsSection({
  serviceDetails,
  categories,
}: CoachingTabsSectionProps) {
  // Group service details by category
  const groupedDetails = categories.reduce((acc, category) => {
    acc[category.id] = serviceDetails.filter(
      (detail) => detail.category === category.id
    );
    return acc;
  }, {} as { [key: string]: ServiceDetail[] });

  return (
    <section className="py-16 bg-white dark:bg-[#13294E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-32 h-32 bg-[#FAA71A] opacity-5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-[#AFC1DB] opacity-5 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#AFC1DB] bg-opacity-20 rounded-full border border-[#AFC1DB] mb-6">
            <Sparkles className="w-4 h-4 text-[#FAA71A] mr-2" />
            <span className="text-[#13294E] dark:text-[#AFC1DB] font-semibold text-sm">
              English Proficiency Test Preparation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
            Master Your English Tests
            <span className="block text-[#FAA71A]">IELTS, PTE & CELPIP Coaching</span>
          </h2>

          <p className="text-xl text-[#13294E] dark:text-[#AFC1DB] max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help you achieve your target scores with expert guidance and proven strategies.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Tabs defaultValue={categories[0]?.id} className="w-full">
            {/* Modern Tabs Navigation */}
            <TabsList className="bg-white dark:bg-[#13294E] rounded-3xl p-2 shadow-xl border border-[#AFC1DB]/20 mb-16 max-w-4xl mx-auto h-auto grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((category) => {
                const IconComponent = getIcon(category.icon);
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl text-[#13294E] dark:text-[#AFC1DB] data-[state=active]:bg-[#FAA71A] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-[#AFC1DB]/10 transition-all duration-300 font-bold text-xs space-y-2 min-h-[80px]"
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-center leading-tight">
                      {category.title.replace(' Preparation', '').replace('Test ', '')}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tabs Content */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header - Simplified */}
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-[#FAA71A]/10 to-[#AFC1DB]/10 rounded-2xl p-6 max-w-2xl mx-auto border border-[#AFC1DB]/20"
                    >
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-[#FAA71A] rounded-xl flex items-center justify-center">
                          {(() => {
                            const IconComponent = getIcon(category.icon);
                            return <IconComponent className="w-5 h-5 text-white" />;
                          })()}
                        </div>
                        <h3 className="text-2xl font-bold text-[#13294E] dark:text-[#AFC1DB]">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-[#13294E] dark:text-[#AFC1DB] opacity-80 text-sm">
                        {category.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Enhanced Category Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {groupedDetails[category.id]?.map((detail, index) => {
                      const IconComponent = getIcon(detail.icon);

                      // Convert content to bullet points
                      const formatContent = (content: string) => {
                        const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
                        const points = sentences.map(sentence => sentence.trim()).filter(point => point.length > 10);
                        return points.slice(0, 5); // Limit to 5 points max
                      };

                      const bulletPoints = formatContent(detail.content);

                      return (
                        <motion.div
                          key={detail.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <div className="group relative bg-gradient-to-br from-white via-white to-[#AFC1DB]/5 dark:from-[#13294E] dark:via-[#13294E] dark:to-[#13294E]/80 rounded-3xl p-8 shadow-2xl border border-[#AFC1DB]/20 hover:shadow-3xl hover:scale-[1.02] hover:border-[#FAA71A]/50 transition-all duration-500 overflow-hidden h-full">
                            {/* Background Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#FAA71A]/5 rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#AFC1DB]/10 rounded-full translate-y-8 -translate-x-8"></div>

                            {/* Header with Icon and Title */}
                            <div className="relative z-10 flex items-start space-x-4 mb-6">
                              <div className="w-14 h-14 bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-7 h-7 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-[#13294E] dark:text-[#AFC1DB] group-hover:text-[#FAA71A] transition-colors duration-300 leading-tight">
                                  {detail.title}
                                </h4>
                              </div>
                            </div>

                            {/* Enhanced Bullet Points */}
                            <div className="relative z-10 space-y-4">
                              {bulletPoints.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-4 p-3 bg-gradient-to-r from-[#FAA71A]/5 to-transparent rounded-xl hover:from-[#FAA71A]/10 transition-colors duration-300">
                                  <div className="flex-shrink-0 mt-1">
                                    <div className="w-2.5 h-2.5 bg-[#FAA71A] rounded-full shadow-sm" />
                                  </div>
                                  <p className="text-[#13294E] dark:text-[#AFC1DB] text-sm leading-relaxed font-medium">
                                    {point}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Enhanced Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
