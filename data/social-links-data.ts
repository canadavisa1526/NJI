import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { DivideIcon as LucideIcon } from "lucide-react";

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
    color: "#1877F2"
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/new.journey.holiday?igsh=MXNlZ216bTdmOHJjZw==",
   icon: Instagram,
    color: "#E4405F"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/newjourneyimm",
    icon: Twitter,
    color: "#1DA1F2"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/newjourney-i/about/",
      icon: Linkedin,
    color: "#0A66C2"
  }
];