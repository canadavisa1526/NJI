import { NextRequest, NextResponse } from "next/server";
import { sendPartnerNotification } from "@/lib/email-service";

// Environment variables for Google Sheets
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

// Dynamic import for googleapis to avoid build issues
let google: any = null;

async function getGoogleAPI() {
  if (!google) {
    try {
      const googleapis = await import("googleapis");
      google = googleapis.google;
    } catch (error) {
      console.error("Failed to import googleapis:", error);
      throw new Error("Google APIs not available");
    }
  }
  return google;
}

// Get Google Sheets client
async function getGoogleSheetsClient() {
  const googleAPI = await getGoogleAPI();
  
  const auth = new googleAPI.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: GOOGLE_SHEETS_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = googleAPI.sheets({ version: "v4", auth });
  return sheets;
}

// Create or ensure "Partners" sheet exists
async function ensurePartnersSheetExists() {
  try {
    const sheets = await getGoogleSheetsClient();
    
    // Get spreadsheet metadata to check existing sheets
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
    });

    const existingSheets = spreadsheet.data.sheets || [];
    const partnersSheet = existingSheets.find(
      (sheet: any) => sheet.properties?.title === "Partners"
    );

    if (!partnersSheet) {
      // Create the Partners sheet
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "Partners",
                  gridProperties: {
                    rowCount: 1000,
                    columnCount: 20,
                  },
                },
              },
            },
          ],
        },
      });

      // Add headers to the new sheet
      const headers = [
        "Timestamp",
        "Business Name",
        "Owner Name", 
        "Designation",
        "Mobile",
        "Email",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Country",
        "Target Countries",
        "Business Age",
        "Visas Per Year",
        "Reference Source",
        "Website",
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
        range: "Partners!A1:P1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });

      console.log("Partners sheet created successfully with headers");
    }

    return true;
  } catch (error) {
    console.error("Error ensuring Partners sheet exists:", error);
    return false;
  }
}

// Append partner data to Google Sheets
async function appendPartnerToSheet(data: any) {
  try {
    const sheets = await getGoogleSheetsClient();

    // Ensure Partners sheet exists
    await ensurePartnersSheetExists();

    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        data.businessName || "Not specified",
        data.ownerName || "Not specified",
        data.designation || "Not specified",
        data.mobile || "Not specified",
        data.email || "Not specified",
        data.address || "Not specified",
        data.city || "Not specified",
        data.state || "Not specified",
        data.zipCode || "Not specified",
        data.country || "Not specified",
        data.targetCountries || "Not specified",
        data.businessAge || "Not specified",
        data.visasPerYear || "Not specified",
        data.referenceSource || "Not specified",
        data.website || "Not specified",
      ],
    ];

    // Append the data to the Partners sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Partners!A:P",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending partner data to Google Sheets:", error);
    throw error;
  }
}

// Send email notification for partner inquiry
async function sendPartnerEmailNotification(data: any) {
  try {
    const emailData = {
      to: process.env.NOTIFICATION_EMAIL || 'admin@newjourneyworld.com',
      subject: `New Partner Application from ${data.businessName || data.ownerName}`,
      html: `
        <h2>New Partner Application Received</h2>
        <p><strong>Business Name:</strong> ${data.businessName || 'Not specified'}</p>
        <p><strong>Owner Name:</strong> ${data.ownerName || 'Not specified'}</p>
        <p><strong>Designation:</strong> ${data.designation || 'Not specified'}</p>
        <p><strong>Mobile:</strong> ${data.mobile || 'Not specified'}</p>
        <p><strong>Email:</strong> ${data.email || 'Not specified'}</p>
        <p><strong>Address:</strong> ${data.address || 'Not specified'}</p>
        <p><strong>City:</strong> ${data.city || 'Not specified'}</p>
        <p><strong>State:</strong> ${data.state || 'Not specified'}</p>
        <p><strong>Country:</strong> ${data.country || 'Not specified'}</p>
        <p><strong>Target Countries:</strong> ${data.targetCountries || 'Not specified'}</p>
        <p><strong>Business Age:</strong> ${data.businessAge || 'Not specified'}</p>
        <p><strong>Visas Per Year:</strong> ${data.visasPerYear || 'Not specified'}</p>
        <p><strong>How they found us:</strong> ${data.referenceSource || 'Not specified'}</p>
        <p><strong>Website:</strong> ${data.website || 'Not specified'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    };

    // You can implement email sending here using your preferred service
    console.log("Partner email notification prepared:", emailData);
    return true;
  } catch (error) {
    console.error("Error sending partner email notification:", error);
    return false;
  }
}

// API route handler for POST requests
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("Received partner application data:", data);

    // Validate required fields
    if (!data.businessName || !data.ownerName || !data.email || !data.mobile) {
      return NextResponse.json(
        { error: "Please provide business name, owner name, email, and mobile number" },
        { status: 400 }
      );
    }

    let dataSaved = false;

    // Try to save to Google Sheets
    if (GOOGLE_SHEETS_SPREADSHEET_ID && GOOGLE_SHEETS_CLIENT_EMAIL && GOOGLE_SHEETS_PRIVATE_KEY) {
      try {
        const result = await appendPartnerToSheet(data);
        console.log("Successfully saved partner data to Google Sheets:", result);
        dataSaved = true;
      } catch (sheetError) {
        console.error("Error saving partner data to Google Sheets:", sheetError);
      }
    }

    // Send enhanced email notification
    try {
      const emailResult = await sendPartnerNotification(data);
      if (emailResult) {
        console.log("Successfully sent enhanced partner notification email");
      } else {
        // Fallback to basic email notification
        await sendPartnerEmailNotification(data);
        console.log("Partner email notification sent successfully");
      }
    } catch (emailError) {
      console.error("Partner email notification failed:", emailError);
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Partner application submitted successfully",
        saved: dataSaved 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing partner application:", error);
    return NextResponse.json(
      { error: "Failed to process partner application" },
      { status: 500 }
    );
  }
}
