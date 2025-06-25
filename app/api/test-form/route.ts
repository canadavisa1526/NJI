import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log("Test form submission received:", data);
    
    // Test the inquiry API endpoint
    const inquiryResponse = await fetch(`${request.nextUrl.origin}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Test User from Country Form",
        email: "test@example.com",
        phone: "+91 9876543210",
        message: "This is a test submission from country form to verify email notifications are working.",
        howDidYouHear: "Website Test",
        country: "Canada",
        timestamp: new Date().toISOString(),
      }),
    });

    const inquiryResult = await inquiryResponse.json();
    
    console.log("Inquiry API response:", inquiryResult);
    
    return NextResponse.json({
      success: true,
      message: "Test form submission successful",
      inquiryApiWorking: inquiryResponse.ok,
      inquiryResult: inquiryResult,
      testData: data
    });

  } catch (error) {
    console.error("Test form submission error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Test form endpoint is working",
    timestamp: new Date().toISOString(),
  });
}
