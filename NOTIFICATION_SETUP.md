# 🔔 Email Notification Setup Guide

## 📧 **Method 1: Gmail SMTP (Recommended)**

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication

### Step 2: Generate App Password
1. Go to Google Account → Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Copy the 16-character password

### Step 3: Add Environment Variables
Add these to your `.env.local` file:

```env
# Email Notification Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
NOTIFICATION_EMAIL=owner@newjourneyworld.com

# Existing Google Sheets Settings
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
```

---

## 📧 **Method 2: Other Email Providers**

### For Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### For Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

### For Custom Domain (cPanel/WHM):
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=admin@yourdomain.com
SMTP_PASSWORD=your-email-password
```

---

## 🚀 **Method 3: Professional Email Services**

### SendGrid:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun:
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

---

## 📱 **Method 4: WhatsApp Notifications (Alternative)**

If you prefer WhatsApp notifications instead of email, you can use:

### WhatsApp Business API:
```env
WHATSAPP_API_URL=your-whatsapp-api-endpoint
WHATSAPP_TOKEN=your-api-token
WHATSAPP_PHONE=+919876543210
```

---

## 🔔 **What Notifications You'll Receive:**

### For Regular Inquiries:
- **Subject:** 🔔 New [Service] Inquiry from [Name]
- **Content:** Complete inquiry details with action required notice
- **Priority:** Respond within 24 hours

### For Partner Applications:
- **Subject:** 🤝 New Partner Application from [Business Name]
- **Content:** Complete business details and application info
- **Priority:** Review within 48 hours

---

## 🎯 **Notification Features:**

✅ **Beautiful HTML emails** with your branding
✅ **Instant notifications** when forms are submitted
✅ **Complete form data** included in emails
✅ **Action required alerts** with response timeframes
✅ **Fallback system** - if one method fails, others work
✅ **Mobile-friendly** email templates
✅ **Professional formatting** with your color scheme

---

## 🛠️ **Testing Your Setup:**

1. Add the environment variables
2. Restart your development server
3. Submit a test inquiry form
4. Check your email inbox
5. Verify the notification was received

---

## 🔧 **Troubleshooting:**

### If emails aren't sending:
1. Check your environment variables are correct
2. Verify your app password (for Gmail)
3. Check spam/junk folder
4. Ensure SMTP settings match your provider
5. Check server logs for error messages

### Common Issues:
- **Gmail:** Use app password, not regular password
- **Outlook:** Enable "Less secure app access"
- **Custom Domain:** Verify SMTP settings with hosting provider

---

## 📞 **Alternative: SMS Notifications**

You can also add SMS notifications using services like:
- **Twilio**
- **TextLocal** 
- **MSG91**
- **Fast2SMS**

Just uncomment the SMS function in the email service and add your SMS API credentials.

---

## 🎉 **Ready to Go!**

Once set up, you'll receive instant notifications for:
- ✅ Service inquiries
- ✅ Partner applications  
- ✅ Visitor visa requests
- ✅ Insurance quote requests
- ✅ All form submissions

Never miss a potential customer again! 🚀
