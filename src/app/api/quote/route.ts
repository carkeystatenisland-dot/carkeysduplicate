import { NextRequest, NextResponse } from 'next/server'
import { sendTelegramMessage, formatQuoteMessage, QuoteData } from '@/lib/telegram'

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const data: QuoteData = await request.json()

    // Validation
    if (!data.name || !data.phone || !data.make || !data.keyType || !data.borough) {
      return NextResponse.json(
        { success: false, error: 'Required fields missing' },
        { status: 400 }
      )
    }

    // Phone format validation
    const phoneRegex = /^[\d\s\-\(\)\+]{10,15}$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    const message = formatQuoteMessage(data)
    const sent = await sendTelegramMessage(message)

    if (!sent) {
      return NextResponse.json(
        { success: false, error: 'Failed to send notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    )
  }
}
