# Setting Up Google Sheets Integration for Form Submissions

This guide will walk you through the process of setting up Google Sheets integration for storing form submissions from your website.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console
3. A Google Spreadsheet to store the form submissions

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Rename the first sheet to "Inquiries" (or update the `SHEET_NAME` in the code to match your preferred name)
3. Add the following headers to the first row:
   - Timestamp
   - Name
   - Email
   - Phone
   - Message
   - How Did You Hear
   - Country
4. Note the Spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`

## Step 2: Set Up Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and then click "Enable"

## Step 3: Create Service Account Credentials

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "Service Account"
3. Fill in the service account details and click "Create"
4. Skip the optional steps and click "Done"
5. Find your new service account in the list and click on it
6. Go to the "Keys" tab
7. Click "Add Key" > "Create new key"
8. Select "JSON" and click "Create"
9. A JSON file will be downloaded to your computer - keep this secure!

## Step 4: Share Your Spreadsheet with the Service Account

1. Open the JSON file you downloaded
2. Find the `client_email` value (it should look like `something@project-id.iam.gserviceaccount.com`)
3. Open your Google Spreadsheet
4. Click the "Share" button in the top right
5. Enter the `client_email` value as the email to share with
6. Make sure to give "Editor" access
7. Uncheck "Notify people" and click "Share"

## Step 5: Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`
2. Update the following values:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: The `client_email` from your JSON file
   - `GOOGLE_SHEETS_PRIVATE_KEY`: The `private_key` from your JSON file (make sure to keep the quotes and newlines)
   - `GOOGLE_SHEETS_SPREADSHEET_ID`: The ID of your spreadsheet from Step 1

Example:
```
GOOGLE_SHEETS_CLIENT_EMAIL=sheets-integration@project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7VJTUt9Us8cKj\nMzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu\nNMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ\n...\nHBs8JmxhNcQZb8UkPeEJCeW+U8tZGN18seR0RtDbZjkdJn6rq4Y5pUThrKQo3C0L\nj6QnL0xxx\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

## Step 6: Restart Your Application

1. Save all changes
2. Restart your Next.js application
3. Test the form submission - the data should now be stored in your Google Spreadsheet!

## Troubleshooting

- **Error: "The caller does not have permission"**: Make sure you've shared the spreadsheet with the service account email and given it Editor access.
- **Error with private key**: Ensure the private key includes the `\n` characters and is enclosed in quotes.
- **No data appearing in spreadsheet**: Check the console logs for any errors and verify that the sheet name matches the `SHEET_NAME` in the code.

## Security Considerations

- Never commit your `.env.local` file to version control
- Keep your service account credentials secure
- Consider implementing rate limiting to prevent abuse of your form
