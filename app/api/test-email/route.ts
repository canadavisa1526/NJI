import { NextRequest, NextResponse } from "next/server";
import { sendInquiryNotification, sendPartnerNotification } from "@/lib/email-service";

export async function POST(request: NextRequest) {
  try {
    const { type } = await request.json();

    if (type === 'inquiry') {
      // Test inquiry notification (destination form)
      const testInquiryData = {
        name: "Test User from Canada Page",
        email: "test@example.com",
        phone: "+91 9876543210",
        service: "Canada Immigration",
        message: "This is a test inquiry from Canada destination page to check email notifications.",
        howDidYouHear: "Google Search",
        country: "Canada",
        timestamp: new Date().toISOString(),
      };

      const result = await sendInquiryNotification(testInquiryData);
      
      return NextResponse.json({
        success: result,
        message: result ? "Test inquiry email sent successfully!" : "Failed to send test inquiry email",
        data: testInquiryData
      });

    } else if (type === 'partner') {
      // Test partner notification
      const testPartnerData = {
        businessName: "Test Immigration Services",
        ownerName: "Test Owner",
        designation: "Director",
        mobile: "+91 9876543210",
        email: "partner@example.com",
        address: "123 Test Street",
        city: "Test City",
        state: "Test State",
        zipCode: "123456",
        country: "India",
        targetCountries: "Canada, Australia, UK",
        businessAge: "5 years",
        visasPerYear: "100",
        referenceSource: "Search Engine",
        website: "www.testpartner.com",
        timestamp: new Date().toISOString(),
      };

      const result = await sendPartnerNotification(testPartnerData);
      
      return NextResponse.json({
        success: result,
        message: result ? "Test partner email sent successfully!" : "Failed to send test partner email",
        data: testPartnerData
      });

    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid test type. Use 'inquiry' or 'partner'"
      }, { status: 400 });
    }

  } catch (error) {
    console.error("Error testing email:", error);
    return NextResponse.json({
      success: false,
      message: "Error testing email notification",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
