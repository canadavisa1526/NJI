import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { DivideIcon as LucideIcon } from "lucide-react";
import { title } from "node:process";

export interface SocialLink {
  title: string;
  url: string;
  icon: typeof LucideIcon;
  color: string;
}

export const socialLinks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/share/1BTpFournw/?mibextid=wwXIfr",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/new.journey.holiday?igsh=MXNlZ216bTdmOHJjZw==",
    icon: Instagram,
    color: "#E4405F",
  },

  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/newjourney-i/about/",
    icon: Linkedin,
    color: "#0A66C2",
  },
  {
    title: "Youtube",
    url: "https://youtube.com/@newjourneyimmigration?si=6xMRoyH27YPEdRvi",
    icon: Youtube,
    color: "#FF0000",
  },
];
