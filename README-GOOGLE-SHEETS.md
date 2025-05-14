# Google Sheets Integration for Form Submissions

This project includes integration with Google Sheets to store form submissions. This README provides instructions on how to set up, test, and troubleshoot the integration.

## Setup Instructions

1. Follow the detailed setup guide in `docs/GOOGLE_SHEETS_SETUP_GUIDE.md` to:
   - Create a Google Spreadsheet
   - Set up a Google Cloud Project
   - Create service account credentials
   - Share your spreadsheet with the service account
   - Configure environment variables

2. Make sure your `.env.local` file contains the following variables:
   ```
   GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-from-google-sheets-url
   ```

3. Restart your Next.js application to load the new environment variables:
   ```
   npm run dev
   ```

## Testing the Integration

You can test the Google Sheets integration using the provided test script:

1. Install the required dependencies:
   ```
   npm install dotenv googleapis
   ```

2. Run the test script:
   ```
   node scripts/test-google-sheets.js
   ```

3. The script will:
   - Check if your environment variables are configured
   - Attempt to append test data to your Google Spreadsheet
   - Verify that the data was added by reading it back
   - Provide detailed error messages if something goes wrong

## Troubleshooting

If you're having issues with the Google Sheets integration, check the following:

### Common Issues

1. **Missing Environment Variables**
   - Make sure your `.env.local` file contains all the required variables
   - Restart your Next.js application after updating the file

2. **Permission Issues**
   - Error: "The caller does not have permission"
   - Solution: Share your spreadsheet with the service account email and give it Editor access

3. **Spreadsheet Not Found**
   - Error: "Requested entity was not found"
   - Solution: Double-check your spreadsheet ID in the `.env.local` file

4. **Sheet Not Found**
   - Error: "Unable to parse range"
   - Solution: Make sure the first sheet in your spreadsheet is named "Inquiries"

5. **Private Key Format**
   - Error: "Invalid private key"
   - Solution: Make sure the private key includes the `\n` characters and is enclosed in quotes

### Checking Server Logs

When submitting a form, check the server logs in your terminal for any error messages. The API route includes detailed logging to help diagnose issues.

### Local Fallback

Even if the Google Sheets integration fails, form submissions are still saved locally in the `data/form-submissions.json` file. You can check this file to see if your submissions are being recorded.

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api/guides/concepts)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)

## Need More Help?

If you're still having issues, check the troubleshooting guide in `docs/TROUBLESHOOTING_GOOGLE_SHEETS.md` for more detailed instructions.
