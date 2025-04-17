import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Journey Immigration & More",
  description:
    "Trusted immigration and education consultants. Let New Journey be your guide to studying, working, and settling abroad.",
  keywords: [
    "Immigration services",
    "Study abroad",
    "Student visa",
    "PR visa",
    "IELTS coaching",
    "Work visa",
    "Visa consultancy",
    "Canada visa",
    "Australia immigration",
    "Global education partner",
  ],
  authors: [{ name: "New Journey Immigration" }],
  creator: "New Journey Immigration",
  publisher: "New Journey Immigration",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "New Journey Immigration & More",
    description:
      "Explore global opportunities with New Journey — Your trusted partner for study, work, and immigration services.",
    url: "https://yourdomain.com", // Replace with your real domain
    siteName: "New Journey Immigration",
    images: [
      {
        url: "/og-image.png", // Optional: add this image in public folder
        width: 1200,
        height: 630,
        alt: "New Journey Immigration & More",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Journey Immigration & More",
    description:
      "Trusted education and immigration experts. Start your journey with us today!",
    images: ["/og-image.png"],
    creator: "@newjourney", // Optional
  },
  metadataBase: new URL("https://yourdomain.com"), // Replace with actual domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
