import { NextResponse } from "next/server";
import { countryData } from "@/lib/country"; // Adjust path if needed

export async function GET(req, { params }) {
  
  const country = params.country?.toLowerCase(); // Ensure lowercase match

  if (!country || !countryData[country]) {
    return NextResponse.json({ error: "Country not found" }, { status: 404 });
  }

  return NextResponse.json(countryData[country]);
}
