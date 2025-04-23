import { notFound } from "next/navigation";

import CountryPageClient from "@/components/country/CountryPage.client";
import { countriesData, countriesDetailData } from "@/data/countriesDetail";

interface CountryPageProps {
  params: {
    slug: string;
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  // Check if the country exists in the countriesDetailData\

  const country =
    countriesDetailData [params.slug as keyof typeof countriesDetailData];
  if (!country) notFound();

  return (
    <CountryPageClient
      country={country}
      countries={countriesData}
      slug={params.slug}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(countriesDetailData).map((slug) => ({ country: slug }));
}
