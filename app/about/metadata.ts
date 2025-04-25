import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About New Journey Immigration - Your Trusted Education & Immigration Partner",
  description:
    "Learn about New Journey Immigration's commitment to excellence in education consulting, visa services, and IELTS coaching. Discover our expert team and global presence.",
  keywords:
    "education consultant, immigration services, IELTS coaching, study abroad, visa assistance, New Journey Immigration, overseas education, Canada visa, Australia education, UK universities, student visa help",
  authors: [
    {
      name: "New Journey Immigration",
      url: "https://newjourneyimmigration.com",
    },
  ],
  creator: "New Journey Immigration",
  publisher: "New Journey Immigration",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://newjourneyimmigration.com/about",
  },
  openGraph: {
    title: "About New Journey Immigration - Education & Immigration Experts",
    description:
      "Trusted by thousands globally, New Journey Immigration provides top-notch education consultancy, visa assistance, and IELTS training for your study abroad journey.",
    url: "https://newjourneyimmigration.com/about",
    siteName: "New Journey Immigration",
    images: [
      {
        url: "/svg/Asset_4.svg",
        width: 1200,
        height: 630,
        alt: "New Journey Immigration - Global Education Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About New Journey Immigration - Global Education & Visa Experts",
    description:
      "Get to know our team and services at New Journey Immigration. Your pathway to global education starts here.",
    site: "@newjourneyimmi", // Replace with actual handle
    creator: "@newjourneyimmi",
    images: ["/svg/Asset_4.svg"],
  },
};
