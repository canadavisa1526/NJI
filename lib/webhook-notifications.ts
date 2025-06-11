// Alternative notification methods using webhooks and third-party services

// Discord Webhook Notification
export async function sendDiscordNotification(data: any, type: 'inquiry' | 'partner') {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) return false;

    const embed = type === 'partner' ? {
      title: "🤝 New Partner Application",
      description: `**${data.businessName || data.ownerName}** wants to partner with you!`,
      color: 0xFAA71A, // Orange color
      fields: [
        { name: "👤 Owner", value: data.ownerName || 'Not specified', inline: true },
        { name: "📧 Email", value: data.email || 'Not specified', inline: true },
        { name: "📱 Phone", value: data.mobile || 'Not specified', inline: true },
        { name: "🏢 Business", value: data.businessName || 'Not specified', inline: true },
        { name: "🎯 Target Countries", value: data.targetCountries || 'Not specified', inline: true },
        { name: "📊 Visas/Year", value: data.visasPerYear || 'Not specified', inline: true },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "New Journey Immigration - Partner Application" }
    } : {
      title: "🔔 New Inquiry Received",
      description: `**${data.name}** submitted a ${data.service || 'general'} inquiry`,
      color: 0x13294E, // Dark blue color
      fields: [
        { name: "👤 Name", value: data.name, inline: true },
        { name: "📧 Email", value: data.email, inline: true },
        { name: "📱 Phone", value: data.phone, inline: true },
        { name: "🎯 Service", value: data.service || 'General Inquiry', inline: true },
        { name: "🌍 Country", value: data.country || 'Not specified', inline: true },
        { name: "📢 Source", value: data.howDidYouHear || 'Not specified', inline: true },
        { name: "💬 Message", value: data.message || 'No message', inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "New Journey Immigration - Inquiry System" }
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });

    return response.ok;
  } catch (error) {
    console.error('Discord notification failed:', error);
    return false;
  }
}

// Slack Webhook Notification
export async function sendSlackNotification(data: any, type: 'inquiry' | 'partner') {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) return false;

    const message = type === 'partner' ? {
      text: "🤝 New Partner Application Received!",
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "🤝 New Partner Application" }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Business:*\n${data.businessName || 'Not specified'}` },
            { type: "mrkdwn", text: `*Owner:*\n${data.ownerName || 'Not specified'}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email || 'Not specified'}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.mobile || 'Not specified'}` },
            { type: "mrkdwn", text: `*Target Countries:*\n${data.targetCountries || 'Not specified'}` },
            { type: "mrkdwn", text: `*Visas/Year:*\n${data.visasPerYear || 'Not specified'}` },
          ]
        },
        {
          type: "context",
          elements: [{ type: "mrkdwn", text: `Submitted at ${new Date().toLocaleString()}` }]
        }
      ]
    } : {
      text: "🔔 New Inquiry Received!",
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "🔔 New Inquiry Received" }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${data.name}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            { type: "mrkdwn", text: `*Service:*\n${data.service || 'General Inquiry'}` },
            { type: "mrkdwn", text: `*Country:*\n${data.country || 'Not specified'}` },
            { type: "mrkdwn", text: `*Source:*\n${data.howDidYouHear || 'Not specified'}` },
          ]
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n${data.message || 'No message provided'}` }
        },
        {
          type: "context",
          elements: [{ type: "mrkdwn", text: `Submitted at ${new Date().toLocaleString()}` }]
        }
      ]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    return response.ok;
  } catch (error) {
    console.error('Slack notification failed:', error);
    return false;
  }
}

// Telegram Bot Notification
export async function sendTelegramNotification(data: any, type: 'inquiry' | 'partner') {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) return false;

    const message = type === 'partner' 
      ? `🤝 *New Partner Application*\n\n` +
        `🏢 *Business:* ${data.businessName || 'Not specified'}\n` +
        `👤 *Owner:* ${data.ownerName || 'Not specified'}\n` +
        `📧 *Email:* ${data.email || 'Not specified'}\n` +
        `📱 *Phone:* ${data.mobile || 'Not specified'}\n` +
        `🎯 *Target Countries:* ${data.targetCountries || 'Not specified'}\n` +
        `📊 *Visas/Year:* ${data.visasPerYear || 'Not specified'}\n` +
        `⏰ *Time:* ${new Date().toLocaleString()}`
      : `🔔 *New Inquiry Received*\n\n` +
        `👤 *Name:* ${data.name}\n` +
        `📧 *Email:* ${data.email}\n` +
        `📱 *Phone:* ${data.phone}\n` +
        `🎯 *Service:* ${data.service || 'General Inquiry'}\n` +
        `🌍 *Country:* ${data.country || 'Not specified'}\n` +
        `💬 *Message:* ${data.message || 'No message'}\n` +
        `📢 *Source:* ${data.howDidYouHear || 'Not specified'}\n` +
        `⏰ *Time:* ${new Date().toLocaleString()}`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Telegram notification failed:', error);
    return false;
  }
}

// WhatsApp Business API Notification
export async function sendWhatsAppNotification(data: any, type: 'inquiry' | 'partner') {
  try {
    const apiUrl = process.env.WHATSAPP_API_URL;
    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumber = process.env.WHATSAPP_PHONE;
    
    if (!apiUrl || !token || !phoneNumber) return false;

    const message = type === 'partner'
      ? `🤝 *New Partner Application*\n\n` +
        `Business: ${data.businessName || 'Not specified'}\n` +
        `Owner: ${data.ownerName || 'Not specified'}\n` +
        `Email: ${data.email || 'Not specified'}\n` +
        `Phone: ${data.mobile || 'Not specified'}\n` +
        `Target Countries: ${data.targetCountries || 'Not specified'}`
      : `🔔 *New Inquiry*\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service: ${data.service || 'General'}\n` +
        `Message: ${data.message || 'No message'}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneNumber,
        text: { body: message },
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
    return false;
  }
}

// Master notification function that tries multiple methods
export async function sendMultiChannelNotification(data: any, type: 'inquiry' | 'partner') {
  const results = await Promise.allSettled([
    sendDiscordNotification(data, type),
    sendSlackNotification(data, type),
    sendTelegramNotification(data, type),
    sendWhatsAppNotification(data, type),
  ]);

  const successCount = results.filter(result => 
    result.status === 'fulfilled' && result.value === true
  ).length;

  console.log(`Multi-channel notification: ${successCount}/${results.length} channels successful`);
  return successCount > 0;
}
