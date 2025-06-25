import { NextRequest, NextResponse } from "next/server";
import { saveSubmissionLocally } from "./local-storage";
import {
  appendToGoogleSheets,
  sendToWebhook,
  sendEmailNotification,
} from "./google-sheets-native";
import { sendInquiryNotification } from "@/lib/email-service";

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

// Google Sheets configuration
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_PRIVATE_KEY =
  process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    const googleAPI = await getGoogleAPI();

    const auth = new googleAPI.auth.JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = googleAPI.sheets({ version: "v4", auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    throw error;
  }
}

// Append data to Google Sheets
async function appendToSheet(data: any) {
  try {
    const sheets = await getGoogleSheetsClient();

    // Format the data for Google Sheets
    // Check if this is a service inquiry or a country inquiry
    console.log("Formatting data for Google Sheets:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      howDidYouHear: data.howDidYouHear,
      country: data.country,
      service: data.service,
    });

    // Use the timestamp from the form data if available, otherwise use current time
    const timestamp = data.timestamp || new Date().toISOString();

    const values = [
      [
        timestamp, // Timestamp
        data.name,
        data.email,
        data.phone,
        data.message || "Not specified",
        data.howDidYouHear || "Not specified",
        data.country || "Not specified",
        data.service || "Country Inquiry",
      ],
    ];

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "A:H", // Expanded range to include 8 columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    throw error;
  }
}

// API route handler for POST requests
export async function POST(request: NextRequest) {
  try {
    console.log("=== INQUIRY API ENDPOINT CALLED ===");
    console.log("Request URL:", request.url);
    console.log("Request method:", request.method);
    console.log("Request headers:", Object.fromEntries(request.headers.entries()));

    // Parse the request body
    const data = await request.json();

    console.log("Received form data:", data);
    console.log("Data keys:", Object.keys(data));

    // Normalize the data - handle both hearAbout and howDidYouHear
    if (data.hearAbout && !data.howDidYouHear) {
      data.howDidYouHear = data.hearAbout;
      console.log("Normalized hearAbout to howDidYouHear:", data.howDidYouHear);
    }

    console.log("Form data types:", {
      name: typeof data.name,
      email: typeof data.email,
      phone: typeof data.phone,
      message: typeof data.message,
      howDidYouHear: typeof data.howDidYouHear,
      hearAbout: typeof data.hearAbout,
      country: typeof data.country,
      service: typeof data.service,
    });

    // Validate common required fields
    if (!data.name || !data.email || !data.phone) {
      console.warn("Missing common required fields in form data");
      console.warn("Received data:", { name: data.name, email: data.email, phone: data.phone });
      return NextResponse.json(
        { error: "Please provide your name, email, and phone number" },
        { status: 400 }
      );
    }

    // For service inquiries, validate service and message (howDidYouHear is optional)
    if (data.service && !data.message) {
      console.warn("Missing message field for service inquiry");
      return NextResponse.json(
        {
          error: "Please provide a message describing your inquiry",
        },
        { status: 400 }
      );
    }

    // For country inquiries, just ensure country is provided (message and howDidYouHear are optional)
    if (data.country) {
      console.log("Country inquiry detected for:", data.country);
      // Country inquiries are valid with just name, email, phone, and country
    }

    // Ensure either service or country is provided
    if (!data.service && !data.country) {
      console.warn("Neither service nor country provided");
      return NextResponse.json(
        { error: "Please select either a service or a country" },
        { status: 400 }
      );
    }

    // Log whether this is a service inquiry or country inquiry
    if (data.service) {
      console.log("This is a service inquiry for:", data.service);
      console.log("How did they hear about us:", data.howDidYouHear);
    } else if (data.country) {
      console.log("This is a country inquiry for:", data.country);
    }

    // Check if Google Sheets credentials are configured
    console.log("Checking Google Sheets credentials...");
    console.log("Client Email configured:", !!GOOGLE_SHEETS_CLIENT_EMAIL);
    console.log("Private Key configured:", !!GOOGLE_SHEETS_PRIVATE_KEY);
    console.log("Spreadsheet ID configured:", !!GOOGLE_SHEETS_SPREADSHEET_ID);

    // Try multiple methods to save the data
    let dataSaved = false;

    // Method 1: Try Google Sheets API with googleapis
    if (
      GOOGLE_SHEETS_CLIENT_EMAIL &&
      GOOGLE_SHEETS_PRIVATE_KEY &&
      GOOGLE_SHEETS_SPREADSHEET_ID
    ) {
      console.log(
        "Attempting to append data to Google Sheets using googleapis..."
      );
      try {
        const result = await appendToSheet(data);
        console.log("Successfully appended data to Google Sheets:", result);
        dataSaved = true;
      } catch (sheetError) {
        console.error(
          "Error appending to Google Sheets with googleapis:",
          sheetError
        );

        // Method 2: Try native fetch implementation
        console.log("Trying native Google Sheets implementation...");
        try {
          const nativeResult = await appendToGoogleSheets(data, {
            clientEmail: GOOGLE_SHEETS_CLIENT_EMAIL,
            privateKey: GOOGLE_SHEETS_PRIVATE_KEY,
            spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
          });
          if (nativeResult) {
            console.log("Successfully saved using native implementation");
            dataSaved = true;
          }
        } catch (nativeError) {
          console.error(
            "Native Google Sheets implementation also failed:",
            nativeError
          );
        }
      }
    }

    // Method 3: Try webhook if Google Sheets failed
    if (!dataSaved) {
      console.log("Trying webhook submission...");
      try {
        const webhookResult = await sendToWebhook(data);
        if (webhookResult) {
          console.log("Successfully sent to webhook");
          dataSaved = true;
        }
      } catch (webhookError) {
        console.error("Webhook submission failed:", webhookError);
      }
    }

    // Method 4: Send enhanced email notification
    try {
      const emailResult = await sendInquiryNotification(data);
      if (emailResult) {
        console.log("Successfully sent enhanced inquiry notification email");
      } else {
        // Fallback to basic email notification
        const fallbackResult = await sendEmailNotification(data);
        if (fallbackResult) {
          console.log("Successfully sent fallback email notification");
        }
      }
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    // For testing purposes, let's save the form data to a local file
    // This is a temporary solution until Google Sheets is properly configured
    try {
      const localSaveResult = await saveSubmissionLocally(data);
      console.log("Local save result:", localSaveResult);
    } catch (localSaveError) {
      console.error("Error saving submission locally:", localSaveError);
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
