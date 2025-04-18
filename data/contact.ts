import { Award, Clock, Globe, Mail, Phone, Shield, Target } from "lucide-react";

export const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@example.com", "support@example.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-2PM"],
    },
  ];

 export const locations = [
    {
      city: "New York",
      country: "USA",
      address: "123 Business Avenue, NY 10001",
      services: [
        "Immigration Services",
        "Student Counseling",
        "Visa Processing",
      ],
    },
    {
      city: "London",
      country: "UK",
      address: "456 Corporate Lane, EC1A 1BB",
      services: ["Business Immigration", "Family Visas", "Settlement Services"],
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "789 Success Street, M5V 2T6",
      services: ["Express Entry", "Study Permits", "Work Permits"],
    },
  ];

 export const partnerBenefits = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access our worldwide network of immigration professionals",
    },
    {
      icon: Target,
      title: "Market Access",
      description: "Expand your reach into new international markets",
    },
    {
      icon: Award,
      title: "Growth Support",
      description: "Benefit from our proven business growth strategies",
    },
    {
      icon: Shield,
      title: "Expert Training",
      description: "Receive comprehensive training and ongoing support",
    },
  ];