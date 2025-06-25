import nodemailer from 'nodemailer';
import { sendMultiChannelNotification } from './webhook-notifications';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'canada.visa1526@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'aidh ayff xkxr ucph',
  },
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(EMAIL_CONFIG);
};

// Send inquiry notification email
export async function sendInquiryNotification(data: any) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"New Journey Immigration" <${EMAIL_CONFIG.auth.user}>`,
      to: process.env.NOTIFICATION_EMAIL || 'support@newjourneyworld.com',
      subject: `🔔 New ${data.service || 'General'} Inquiry from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FAA71A, #13294E); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #13294E; }
            .value { margin-left: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .urgent { background: #ff4444; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🔔 New Inquiry Received!</h2>
              <p>A new inquiry has been submitted on your website.</p>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>⚡ Action Required:</strong> Please respond to this inquiry within 24 hours for best customer experience.
              </div>
              
              <div class="field">
                <span class="label">👤 Name:</span>
                <span class="value">${data.name}</span>
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <span class="value">${data.email}</span>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <span class="value">${data.phone}</span>
              </div>
              
              <div class="field">
                <span class="label">🎯 Service:</span>
                <span class="value">${data.service || 'General Inquiry'}</span>
              </div>
              
              ${data.country ? `
              <div class="field">
                <span class="label">🌍 Country:</span>
                <span class="value">${data.country}</span>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">💬 Message:</span>
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 5px;">
                  ${data.message || 'No message provided'}
                </div>
              </div>
              
              <div class="field">
                <span class="label">📢 How they found us:</span>
                <span class="value">${data.howDidYouHear || 'Not specified'}</span>
              </div>
              
              <div class="field">
                <span class="label">⏰ Submitted at:</span>
                <span class="value">${new Date(data.timestamp || Date.now()).toLocaleString()}</span>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from New Journey Immigration website inquiry system.</p>
              <p>Please respond promptly to maintain excellent customer service.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Inquiry notification email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending inquiry notification email:', error);

    // Fallback to webhook notifications if email fails
    try {
      console.log('Trying fallback webhook notifications...');
      const webhookResult = await sendMultiChannelNotification(data, 'inquiry');
      if (webhookResult) {
        console.log('Fallback webhook notifications sent successfully');
        return true;
      }
    } catch (webhookError) {
      console.error('Webhook notifications also failed:', webhookError);
    }

    return false;
  }
}

// Send partner application notification email
export async function sendPartnerNotification(data: any) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"New Journey Immigration" <${EMAIL_CONFIG.auth.user}>`,
      to: process.env.NOTIFICATION_EMAIL || 'support@newjourneyworld.com',
      subject: `🤝 New Partner Application from ${data.businessName || data.ownerName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FAA71A, #13294E); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #13294E; }
            .value { margin-left: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .priority { background: #28a745; color: white; padding: 10px; border-radius: 5px; margin-bottom: 20px; }
            .business-info { background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🤝 New Partner Application!</h2>
              <p>A new business wants to partner with you.</p>
            </div>
            <div class="content">
              <div class="priority">
                <strong>🎯 High Priority:</strong> Review this partner application and respond within 48 hours.
              </div>
              
              <div class="business-info">
                <h3 style="color: #13294E; margin-top: 0;">Business Information</h3>
                
                <div class="field">
                  <span class="label">🏢 Business Name:</span>
                  <span class="value">${data.businessName || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">👤 Owner Name:</span>
                  <span class="value">${data.ownerName || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">💼 Designation:</span>
                  <span class="value">${data.designation || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📱 Mobile:</span>
                  <span class="value">${data.mobile || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📧 Email:</span>
                  <span class="value">${data.email || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📍 Address:</span>
                  <span class="value">${data.address || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">🏙️ City:</span>
                  <span class="value">${data.city || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">🌍 Country:</span>
                  <span class="value">${data.country || 'Not specified'}</span>
                </div>
              </div>
              
              <div class="business-info">
                <h3 style="color: #13294E; margin-top: 0;">Business Details</h3>
                
                <div class="field">
                  <span class="label">🎯 Target Countries:</span>
                  <span class="value">${data.targetCountries || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📅 Business Age:</span>
                  <span class="value">${data.businessAge || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📊 Visas Per Year:</span>
                  <span class="value">${data.visasPerYear || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">🌐 Website:</span>
                  <span class="value">${data.website || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">📢 How they found us:</span>
                  <span class="value">${data.referenceSource || 'Not specified'}</span>
                </div>
                
                <div class="field">
                  <span class="label">⏰ Applied at:</span>
                  <span class="value">${new Date(data.timestamp || Date.now()).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from New Journey Immigration partner application system.</p>
              <p>Please review and respond to maintain business opportunities.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Partner notification email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending partner notification email:', error);

    // Fallback to webhook notifications if email fails
    try {
      console.log('Trying fallback webhook notifications for partner...');
      const webhookResult = await sendMultiChannelNotification(data, 'partner');
      if (webhookResult) {
        console.log('Fallback webhook notifications sent successfully');
        return true;
      }
    } catch (webhookError) {
      console.error('Webhook notifications also failed:', webhookError);
    }

    return false;
  }
}

// Send instant SMS notification (optional)
export async function sendSMSNotification(data: any, type: 'inquiry' | 'partner') {
  try {
    // You can integrate with SMS services like Twilio, TextLocal, etc.
    const smsMessage = type === 'partner' 
      ? `🤝 New Partner Application from ${data.businessName || data.ownerName}. Check email for details.`
      : `🔔 New ${data.service || 'General'} inquiry from ${data.name}. Check email for details.`;
    
    console.log('SMS would be sent:', smsMessage);
    // Implement SMS service integration here
    return true;
  } catch (error) {
    console.error('Error sending SMS notification:', error);
    return false;
  }
}
