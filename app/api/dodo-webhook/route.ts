import { NextRequest, NextResponse } from 'next/server'
import DodoPayments from 'dodopayments'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const apiKey = process.env.DODO_PAYMENTS_API_KEY
  const webhookKey = process.env.DODO_PAYMENTS_WEBHOOK_KEY
  if (!apiKey || !webhookKey) return NextResponse.json({ error: 'Webhook is not configured.' }, { status: 500 })

  const payload = await request.text()
  const client = new DodoPayments({
    bearerToken: apiKey,
    environment: process.env.DODO_PAYMENTS_ENVIRONMENT || 'test_mode',
    webhookKey,
  })

  try {
    const event = client.webhooks.unwrap(payload, {
      headers: {
        'webhook-id': request.headers.get('webhook-id') || '',
        'webhook-signature': request.headers.get('webhook-signature') || '',
        'webhook-timestamp': request.headers.get('webhook-timestamp') || '',
      },
    })

    if (event.type === 'payment.succeeded') {
      console.log('JobApply payment succeeded:', event.data)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Dodo webhook verification failed:', error)
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
  }
}
