# Troubleshooting Google Sheets Integration

If your form submissions are not being saved to Google Sheets, follow this troubleshooting guide to identify and fix the issue.

## Check Your Environment Variables

1. Make sure you have a `.env.local` file in the root of your project with the following variables:

```
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-from-google-sheets-url
```

2. Verify that the values are correct:
   - The client email should match your service account email
   - The private key should include the `\n` characters and be enclosed in quotes
   - The spreadsheet ID should match the ID in your Google Sheets URL

## Check Your Google Sheets Setup

1. Make sure your Google Spreadsheet exists and is accessible
2. Verify that the first sheet is named "Inquiries" (or update the `SHEET_NAME` in the code)
3. Ensure you've shared the spreadsheet with your service account email and given it Editor access

## Check Server Logs

1. Look at the server logs in your terminal when submitting a form
2. Check for any error messages related to Google Sheets
3. Verify that the form data is being received by the API route

## Check Local Storage Fallback

Even if Google Sheets integration is not working, your form submissions should be saved locally in the `data/form-submissions.json` file. Check this file to see if your submissions are being recorded.

## Common Issues and Solutions

### "The caller does not have permission"

This error occurs when the service account doesn't have access to the spreadsheet.

**Solution:** Share your spreadsheet with the service account email and give it Editor access.

### "Invalid value for private key"

This error occurs when the private key is not formatted correctly.

**Solution:** Make sure the private key:
- Includes all the `\n` characters
- Is enclosed in quotes
- Has not been corrupted during copying

### "Spreadsheet not found"

This error occurs when the spreadsheet ID is incorrect.

**Solution:** Double-check the spreadsheet ID in your Google Sheets URL.

### "Sheet not found"

This error occurs when the sheet name doesn't match.

**Solution:** Make sure the first sheet in your spreadsheet is named "Inquiries" or update the `SHEET_NAME` constant in the code.

## Complete Setup Process

If you haven't completed the Google Sheets setup yet, follow these steps:

1. **Create a Google Spreadsheet**:
   - Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
   - Rename the first sheet to "Inquiries"
   - Add headers: Timestamp, Name, Email, Phone, Message, How Did You Hear, Country

2. **Set Up Google Cloud Project**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Sheets API

3. **Create Service Account Credentials**:
   - In the Google Cloud Console, go to "APIs & Services" > "Credentials"
   - Create a service account and download the credentials
   - Share your spreadsheet with the service account email

4. **Configure Environment Variables**:
   - Update your `.env.local` file with the correct credentials
   - Restart your application

## Need More Help?

If you're still having issues, check the following resources:

- [Google Sheets API Documentation](https://developers.google.com/sheets/api/guides/concepts)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)

Or reach out to your development team for assistance.
