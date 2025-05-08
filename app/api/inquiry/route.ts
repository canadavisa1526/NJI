import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { saveSubmissionLocally } from "./local-storage";

// Google Sheets configuration
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_PRIVATE_KEY =
  process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SHEET_NAME = "Inquiries"; // The name of the sheet tab in your Google Spreadsheet

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
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
    const values = [
      [
        new Date().toISOString(), // Timestamp
        data.name,
        data.email,
        data.phone,
        data.message,
        data.howDidYouHear || "Not specified",
        data.country || "Not specified",
      ],
    ];

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:G`,
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
    // Parse the request body
    const data = await request.json();

    console.log("Received form data:", data);

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      console.warn("Missing required fields in form data");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Google Sheets credentials are configured
    console.log("Checking Google Sheets credentials...");
    console.log("Client Email configured:", !!GOOGLE_SHEETS_CLIENT_EMAIL);
    console.log("Private Key configured:", !!GOOGLE_SHEETS_PRIVATE_KEY);
    console.log("Spreadsheet ID configured:", !!GOOGLE_SHEETS_SPREADSHEET_ID);

    // Append data to Google Sheets
    if (
      GOOGLE_SHEETS_CLIENT_EMAIL &&
      GOOGLE_SHEETS_PRIVATE_KEY &&
      GOOGLE_SHEETS_SPREADSHEET_ID
    ) {
      console.log("Attempting to append data to Google Sheets...");
      try {
        const result = await appendToSheet(data);
        console.log("Successfully appended data to Google Sheets:", result);
      } catch (sheetError) {
        console.error("Error appending to Google Sheets:", sheetError);
        // Continue execution even if Google Sheets update fails
        // This way the form submission is still considered successful
      }
    } else {
      console.warn(
        "Google Sheets credentials not configured. Skipping sheet update."
      );
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
