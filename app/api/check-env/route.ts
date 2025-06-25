import { NextResponse } from "next/server";

export async function GET() {
  const envCheck = {
    // Email settings
    SMTP_HOST: !!process.env.SMTP_HOST,
    SMTP_PORT: !!process.env.SMTP_PORT,
    SMTP_USER: !!process.env.SMTP_USER,
    SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
    NOTIFICATION_EMAIL: !!process.env.NOTIFICATION_EMAIL,
    
    // Google Sheets settings
    GOOGLE_SHEETS_SPREADSHEET_ID: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_CLIENT_EMAIL: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    GOOGLE_SHEETS_PRIVATE_KEY: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    
    // Values (masked for security)
    SMTP_USER_VALUE: process.env.SMTP_USER ? `${process.env.SMTP_USER.substring(0, 5)}***` : 'Not set',
    NOTIFICATION_EMAIL_VALUE: process.env.NOTIFICATION_EMAIL ? `${process.env.NOTIFICATION_EMAIL.substring(0, 5)}***` : 'Not set',
    SPREADSHEET_ID_VALUE: process.env.GOOGLE_SHEETS_SPREADSHEET_ID ? `${process.env.GOOGLE_SHEETS_SPREADSHEET_ID.substring(0, 10)}***` : 'Not set',
  };

  return NextResponse.json({
    message: "Environment variables check",
    timestamp: new Date().toISOString(),
    environment: envCheck,
    allEmailVarsSet: envCheck.SMTP_HOST && envCheck.SMTP_USER && envCheck.SMTP_PASSWORD,
    allSheetsVarsSet: envCheck.GOOGLE_SHEETS_SPREADSHEET_ID && envCheck.GOOGLE_SHEETS_CLIENT_EMAIL && envCheck.GOOGLE_SHEETS_PRIVATE_KEY,
  });
}
