"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Globe,
  FileText,
  TrendingUp,
  Users,
  MessageCircle,
  Shield,
  Award,
  Clock,
  Target,
  Star,
  Crown,
  Flag,
  Plane,
  GraduationCap,
  Heart,
  Building,
  Briefcase,
  DollarSign,
  CreditCard,
  PiggyBank,
  Lock,
  ArrowRightLeft,
  Info,
  Map,
  List,
  Headphones,
  Search,
  AlertCircle,
  Monitor,
  Book,
  BookOpen,
  Edit,
  Mic,
  Calendar,
  Trophy,
  Scale,
  Home,
  Unlock,
  Sun,
  Bird,
  Zap,
  MapPin
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

interface ServiceDetailsSectionProps {
  serviceDetails?: ServiceDetail[];
  serviceTitle: string;
  categories?: ServiceCategory[];
}

// Icon mapping for service details
const iconMap: Record<string, any> = {
  globe: Globe,
  users: Users,
  "user-check": Users,
  "maple-leaf": Star, // Using Star as fallback
  crown: Crown,
  flag: Flag,
  kangaroo: Star, // Using Star as fallback
  kiwi: Bird,
  eagle: Bird,
  "european-union": MapPin,
  plane: Plane,
  ticket: FileText,
  "dollar-sign": DollarSign,
  map: Map,
  search: Search,
  headphones: Headphones,
  heart: Heart,
  "graduation-cap": GraduationCap,
  "alert-circle": AlertCircle,
  shield: Shield,
  "piggy-bank": PiggyBank,
  "user-plus": Users,
  "credit-card": CreditCard,
  lock: Lock,
  "file-text": FileText,
  exchange: ArrowRightLeft,
  briefcase: Briefcase,
  unlock: Unlock,
  sun: Sun,
  building: Building,
  "check-circle": CheckCircle,
  info: Info,
  list: List,
  star: Star,
  monitor: Monitor,
  book: Book,
  "book-open": BookOpen,
  edit: Edit,
  mic: Mic,
  trophy: Trophy,
  target: Target,
  calendar: Calendar,
  scale: Scale,
  home: Home,
  award: Award,
  world: Globe,
  protection: Shield,
  approval: CheckCircle,
  documentation: FileText,
  submission: FileText,
  consultation: MessageCircle,
  assessment: TrendingUp,
  strategy: Target,
  training: GraduationCap,
  default: CheckCircle
};

const getIcon = (iconName?: string) => {
  if (!iconName) return iconMap.default;
  return iconMap[iconName] || iconMap.default;
};

export default function ServiceDetailsSection({
  serviceDetails,
  serviceTitle,
  categories,
}: ServiceDetailsSectionProps) {
  if (!serviceDetails || serviceDetails.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white dark:bg-[#13294E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 bg-[#FAA71A] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#13294E] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#FAA71A" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#13294E" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#AFC1DB" strokeWidth="0.5" />
          </svg>
        </motion.div>
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
              Comprehensive Service Details
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-[#AFC1DB] mb-6">
            Everything You Need to Know
            <span className="block text-[#FAA71A]">About Our {serviceTitle.split(" ")[0]} Services</span>
          </h2>

          <p className="text-xl text-[#13294E] dark:text-[#AFC1DB] max-w-3xl mx-auto">
            Discover the comprehensive range of services and expertise we offer to ensure your success.
          </p>
        </motion.div>

        {/* Enhanced Service Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceDetails.map((detail, index) => {
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                      <h3 className="text-lg font-bold text-[#13294E] dark:text-[#AFC1DB] group-hover:text-[#FAA71A] transition-colors duration-300 leading-tight">
                        {detail.title}
                      </h3>
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
      </div>
    </section>
  );
}
