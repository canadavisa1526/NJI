// This script tests the Google Sheets integration with all required fields
// Run it with: node scripts/test-required-fields.js

require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

// Google Sheets configuration
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    throw error;
  }
}

// Append test service inquiry data to Google Sheets
async function testRequiredFields() {
  try {
    console.log("Testing Google Sheets integration with all required fields...");
    console.log("Client Email:", GOOGLE_SHEETS_CLIENT_EMAIL ? "✓ Configured" : "✗ Missing");
    console.log("Private Key:", GOOGLE_SHEETS_PRIVATE_KEY ? "✓ Configured" : "✗ Missing");
    console.log("Spreadsheet ID:", GOOGLE_SHEETS_SPREADSHEET_ID ? "✓ Configured" : "✗ Missing");
    
    if (!GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_SPREADSHEET_ID) {
      console.error("Missing required environment variables. Please check your .env.local file.");
      return;
    }
    
    const sheets = await getGoogleSheetsClient();
    
    // Test data with all required fields
    const testData = [
      [
        new Date().toISOString(), // Timestamp
        "Complete Test User",
        "complete-test@example.com",
        "+1234567890",
        "This is a test message with all required fields.",
        "Google", // How Did You Hear
        "Not specified", // Country
        "Student Visa Consultation", // Service
      ],
    ];
    
    // Append the data to the sheet
    console.log("Attempting to append test data with all required fields to Google Sheets...");
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "A:H", // Expanded range to include 8 columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: testData,
      },
    });
    
    console.log("✅ Success! Test data appended to Google Sheets.");
    console.log("Response:", response.data);
    
    // Verify by reading the data back
    console.log("\nVerifying data was added by reading it back...");
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "A:H", // Expanded range to include 8 columns
    });
    
    const rows = readResponse.data.values;
    if (rows.length) {
      console.log("✅ Verification successful! Found data in the spreadsheet.");
      console.log("Last row:", rows[rows.length - 1]);
      
      // Check if the spreadsheet has headers
      if (rows.length > 1) {
        console.log("\nSpreadsheet headers:");
        console.log(rows[0]);
      }
    } else {
      console.log("❌ Verification failed. No data found in the spreadsheet.");
    }
    
  } catch (error) {
    console.error("❌ Error testing Google Sheets integration:", error);
    
    if (error.message.includes("The caller does not have permission")) {
      console.error("\n🔑 Permission Error: Make sure you've shared the spreadsheet with the service account email.");
      console.error(`Share your spreadsheet with: ${GOOGLE_SHEETS_CLIENT_EMAIL}`);
    }
    
    if (error.message.includes("not found")) {
      console.error("\n📄 Spreadsheet Not Found: Check your spreadsheet ID.");
      console.error("Current ID:", GOOGLE_SHEETS_SPREADSHEET_ID);
      console.error("This should match the ID in your Google Sheets URL: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit");
    }
  }
}

// Run the test
testRequiredFields();
