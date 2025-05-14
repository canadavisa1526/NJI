// This script verifies that the Google Spreadsheet exists and is accessible
// Run it with: node scripts/verify-spreadsheet.js

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

// Verify spreadsheet exists and is accessible
async function verifySpreadsheet() {
  try {
    console.log("Verifying Google Sheets credentials and access...");
    console.log("Client Email:", GOOGLE_SHEETS_CLIENT_EMAIL ? "✓ Configured" : "✗ Missing");
    console.log("Private Key:", GOOGLE_SHEETS_PRIVATE_KEY ? "✓ Configured" : "✗ Missing");
    console.log("Spreadsheet ID:", GOOGLE_SHEETS_SPREADSHEET_ID ? "✓ Configured" : "✗ Missing");
    
    if (!GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_SPREADSHEET_ID) {
      console.error("Missing required environment variables. Please check your .env.local file.");
      return;
    }
    
    const sheets = await getGoogleSheetsClient();
    
    // Get spreadsheet metadata
    console.log(`\nAttempting to access spreadsheet with ID: ${GOOGLE_SHEETS_SPREADSHEET_ID}`);
    const response = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
    });
    
    console.log("\n✅ Success! Spreadsheet exists and is accessible.");
    console.log("Spreadsheet Title:", response.data.properties.title);
    console.log("Sheets in this spreadsheet:");
    
    response.data.sheets.forEach((sheet, index) => {
      console.log(`  ${index + 1}. ${sheet.properties.title}`);
    });
    
    // Try to read data from the first sheet
    console.log("\nAttempting to read data from the first sheet...");
    const firstSheetId = response.data.sheets[0].properties.sheetId;
    const firstSheetTitle = response.data.sheets[0].properties.title;
    
    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${firstSheetTitle}!A1:G10`, // Try to read the first 10 rows
    });
    
    if (dataResponse.data.values && dataResponse.data.values.length > 0) {
      console.log(`✅ Successfully read data from sheet "${firstSheetTitle}"`);
      console.log(`Found ${dataResponse.data.values.length} rows of data`);
      
      // Show the first row (headers)
      if (dataResponse.data.values[0]) {
        console.log("Headers:", dataResponse.data.values[0].join(", "));
      }
    } else {
      console.log(`✅ Sheet "${firstSheetTitle}" exists but is empty or has no data in range A1:G10`);
      console.log("You may need to add headers to the first row: Timestamp, Name, Email, Phone, Message, How Did You Hear, Country");
    }
    
    console.log("\n✅ Verification complete! Your Google Sheets integration should work correctly.");
    console.log("If you're still having issues, make sure you've shared the spreadsheet with:");
    console.log(GOOGLE_SHEETS_CLIENT_EMAIL);
    
  } catch (error) {
    console.error("❌ Error verifying spreadsheet:", error);
    
    if (error.message.includes("Requested entity was not found")) {
      console.error("\n❌ Spreadsheet Not Found: The spreadsheet ID is incorrect or the spreadsheet doesn't exist.");
      console.error("Current ID:", GOOGLE_SHEETS_SPREADSHEET_ID);
      console.error("This should match the ID in your Google Sheets URL: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit");
    }
    
    if (error.message.includes("The caller does not have permission")) {
      console.error("\n❌ Permission Error: The service account doesn't have access to the spreadsheet.");
      console.error("Please share your spreadsheet with:", GOOGLE_SHEETS_CLIENT_EMAIL);
      console.error("Make sure to give it 'Editor' access.");
    }
  }
}

// Run the verification
verifySpreadsheet();
