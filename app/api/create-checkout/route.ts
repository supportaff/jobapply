import { NextRequest, NextResponse } from 'next/server'
import DodoPayments from 'dodopayments'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const adminKey = process.env.JOBAPPLY_ADMIN_KEY
  const suppliedKey = request.headers.get('x-jobapply-admin-key')

  if (!adminKey || suppliedKey !== adminKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY
  const productId = process.env.DODO_PAYMENTS_PRODUCT_ID
  const environment = process.env.DODO_PAYMENTS_ENVIRONMENT || 'test_mode'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!apiKey || !productId || !siteUrl) {
    return NextResponse.json({ error: 'Dodo Payments environment is not configured.' }, { status: 500 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const name = typeof body.name === 'string' ? body.name.trim() : ''

    if (!email) {
      return NextResponse.json({ error: 'Candidate email is required.' }, { status: 400 })
    }

    const client = new DodoPayments({ bearerToken: apiKey, environment })
    const session = await client.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity: 1 }],
      customer: { email, ...(name ? { name } : {}) },
      allowed_payment_method_types: ['credit', 'debit', 'apple_pay', 'google_pay'],
      return_url: `${siteUrl}/payment-success`,
      cancel_url: `${siteUrl}/payment-cancelled`,
      metadata: { service: 'JobApply 3-month managed job application service', launch_price: '499' },
    })

    return NextResponse.json({ checkoutUrl: session.checkout_url, sessionId: session.session_id })
  } catch (error) {
    console.error('Dodo checkout creation failed:', error)
    return NextResponse.json({ error: 'Unable to create the payment checkout.' }, { status: 502 })
  }
}
