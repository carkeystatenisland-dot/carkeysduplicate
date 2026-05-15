export async function sendTelegramMessage(message: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('Telegram notification skipped: Missing BOT_TOKEN or CHAT_ID')
    return true // Return true so the user doesn't see a 500 error
  }

  try {
    const api = `https://api.telegram.org/bot${token}`
    const response = await fetch(`${api}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })
    const data = await response.json()
    if (!data.ok) {
      console.error('Telegram API error:', data)
    }
    return data.ok
  } catch (error) {
    console.error('Telegram fetch error:', error)
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
⏰ Submitted: ${new Date().toISOString()} (UTC)
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
⏰ Submitted: ${new Date().toISOString()} (UTC)
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
