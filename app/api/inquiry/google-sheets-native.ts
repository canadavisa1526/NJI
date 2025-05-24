// Alternative Google Sheets implementation using native fetch
// This avoids the node-fetch encoding dependency issue

interface GoogleSheetsConfig {
  clientEmail: string;
  privateKey: string;
  spreadsheetId: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  howDidYouHear?: string;
  country?: string;
  service?: string;
  timestamp?: string;
}

// Create JWT token for Google Sheets API authentication
async function createJWT(config: GoogleSheetsConfig): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: config.clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  // Base64 encode header and payload
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  
  // Sign the token (simplified - in production, use proper crypto library)
  // For now, we'll use a placeholder since proper JWT signing requires crypto
  const signature = btoa('signature_placeholder');
  
  return `${unsignedToken}.${signature}`;
}

// Get access token from Google OAuth2
async function getAccessToken(config: GoogleSheetsConfig): Promise<string> {
  try {
    const jwt = await createJWT(config);
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Append data to Google Sheets using native fetch
export async function appendToGoogleSheets(
  formData: FormData,
  config: GoogleSheetsConfig
): Promise<boolean> {
  try {
    const accessToken = await getAccessToken(config);
    
    // Format the data for Google Sheets
    const timestamp = formData.timestamp || new Date().toISOString();
    const values = [
      [
        timestamp,
        formData.name,
        formData.email,
        formData.phone,
        formData.message || 'Not specified',
        formData.howDidYouHear || 'Not specified',
        formData.country || 'Not specified',
        formData.service || 'Country Inquiry',
      ],
    ];

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/A:H:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to append to Google Sheets: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Successfully appended to Google Sheets:', result);
    return true;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    return false;
  }
}

// Simplified version that uses a webhook or external service
export async function sendToWebhook(formData: FormData): Promise<boolean> {
  try {
    // You can replace this with your preferred webhook service
    // like Zapier, Make.com, or a custom webhook endpoint
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.log('No webhook URL configured, skipping webhook submission');
      return false;
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: formData.timestamp || new Date().toISOString(),
        source: 'New Journey Immigration Website',
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }

    console.log('Successfully sent to webhook');
    return true;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    return false;
  }
}

// Email notification using a simple email service
export async function sendEmailNotification(formData: FormData): Promise<boolean> {
  try {
    // You can integrate with services like SendGrid, Mailgun, or Resend
    const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
    
    if (!emailServiceUrl) {
      console.log('No email service configured, skipping email notification');
      return false;
    }

    const emailData = {
      to: process.env.NOTIFICATION_EMAIL || 'admin@newjourneyworld.com',
      subject: `New ${formData.service || 'Country'} Inquiry from ${formData.name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service || 'Country Inquiry'}</p>
        <p><strong>Country:</strong> ${formData.country || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
        <p><strong>How did they hear about us:</strong> ${formData.howDidYouHear || 'Not specified'}</p>
        <p><strong>Timestamp:</strong> ${formData.timestamp || new Date().toISOString()}</p>
      `,
    };

    const response = await fetch(emailServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Email service failed: ${response.statusText}`);
    }

    console.log('Successfully sent email notification');
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
}
