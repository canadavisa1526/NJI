import { Phone, Mail, Clock, MapPin, Users, Globe, Target, Briefcase, Star, Heart, CircleDollarSign, MessageCircle, BookOpen, Award, DivideIcon as LucideIcon } from "lucide-react";

interface ContactInfo {
  icon: typeof LucideIcon;
  title: string;
  details: string[];
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+1 437-663-5437 (Canada)",
      "+91 987-654-3210 (India)"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@newjourneyimmigration.com",
      "support@newjourneyimmigration.com"
    ]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 2PM"
    ]
  }
];

interface StatData {
  icon: typeof LucideIcon;
  value: string;
  label: string;
}

export const statsData: StatData[] = [
  { icon: Users, value: "28,000+", label: "Successful Cases" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Star, value: "5+", label: "Years Experience" },
  { icon: Heart, value: "99%", label: "Success Rate" }
];

interface LocationData {
  city: string;
  country: string;
  address: string;
  services: string[];
}

export const locations: LocationData[] = [
  {
    city: "Brampton",
    country: "Canada",
    address: "Steels Ave W, Brampton, ON, Canada, L6Y 2R7",
    services: [
      "Student Visa Consultation",
      "Work Permits",
      "Permanent Residency",
      "Immigration Appeals"
    ]
  },
  {
    city: "Mehsana",
    country: "India",
    address: "20/C, Krishna Complex Nr. Radhanpur circle, mehsana-1, 384001",
    services: [
      "Study Abroad Programs",
      "Visa Documentation",
      "Language Training",
      "Pre-Departure Orientation"
    ]
  },
  {
    city: "Ahmedabad",
    country: "India",
    address: "Vaishnodevi circle, SG Highway, Ahmedbad, 382421",
    services: [
      "Career Counseling",
      "University Admissions",
      "Visa Application Support",
      "Financial Guidance"
    ]
  }
];

interface PartnerBenefit {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

export const partnerBenefits: PartnerBenefit[] = [
  {
    icon: CircleDollarSign,
    title: "Higher Commission",
    description: "Enjoy competitive commission rates and performance-based incentives."
  },
  {
    icon: MessageCircle,
    title: "Dedicated Support",
    description: "Get priority access to our expert team for all your queries."
  },
  {
    icon: BookOpen,
    title: "Training Resources",
    description: "Access exclusive workshops, webinars, and learning materials."
  },
  {
    icon: Award,
    title: "Brand Association",
    description: "Associate with a trusted name in immigration services."
  }
];