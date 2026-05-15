const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`

export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
    const data = await response.json()
    return data.ok
  } catch (error) {
    console.error('Telegram send error:', error)
    return false
  }
}

export function formatBookingMessage(data: BookingData, source: string): string {
  return `
🔑 <b>NEW BOOKING REQUEST</b>
━━━━━━━━━━━━━━━━━━━
🌐 <b>Source:</b> ${source}
━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${data.name}
📱 <b>Phone:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || 'Not provided'}
🚗 <b>Vehicle:</b> ${data.year} ${data.make} ${data.model}
🔧 <b>Service:</b> ${data.service}
📍 <b>Borough:</b> ${data.borough}
📅 <b>Preferred Time:</b> ${data.preferredTime}
💬 <b>Notes:</b> ${data.notes || 'None'}
━━━━━━━━━━━━━━━━━━━
⏰ Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
  `.trim()
}

export function formatQuoteMessage(data: QuoteData, source: string): string {
  return `
💰 <b>NEW QUOTE REQUEST</b>
━━━━━━━━━━━━━━━━━━━
🌐 <b>Source:</b> ${source}
━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${data.name}
📱 <b>Phone:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || 'Not provided'}
🚗 <b>Vehicle:</b> ${data.year} ${data.make} ${data.model}
🔧 <b>Key Type:</b> ${data.keyType}
📍 <b>Location:</b> ${data.borough}, ${data.zipCode}
❓ <b>Have Original Key:</b> ${data.hasOriginal}
💬 <b>Additional Info:</b> ${data.additionalInfo || 'None'}
━━━━━━━━━━━━━━━━━━━
⏰ Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
  `.trim()
}

export interface BookingData {
  name: string
  phone: string
  email?: string
  year: string
  make: string
  model: string
  service: string
  borough: string
  preferredTime: string
  notes?: string
}

export interface QuoteData {
  name: string
  phone: string
  email?: string
  year: string
  make: string
  model: string
  keyType: string
  borough: string
  zipCode: string
  hasOriginal: string
  additionalInfo?: string
}
