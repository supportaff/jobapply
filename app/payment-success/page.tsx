import Link from 'next/link'
import DodoPayments from 'dodopayments'

export const dynamic = 'force-dynamic'

export default async function PaymentSuccess({ searchParams }: { searchParams: Promise<{ payment_id?: string; status?: string }> }) {
  const params = await searchParams
  const paymentId = params.payment_id
  let paid = false

  if (paymentId && process.env.DODO_PAYMENTS_API_KEY) {
    try {
      const client = new DodoPayments({ bearerToken: process.env.DODO_PAYMENTS_API_KEY, environment: process.env.DODO_PAYMENTS_ENVIRONMENT || 'test_mode' })
      const payment = await client.payments.retrieve(paymentId)
      paid = payment.status === 'succeeded'
    } catch (error) {
      console.error('Unable to verify Dodo payment:', error)
    }
  }

  return <main className="payment-result"><div className="result-card">{paid ? <><div className="result-icon">✓</div><div className="section-kicker">PAYMENT VERIFIED</div><h1>Your JobApply service is confirmed.</h1><p>Your Dodo payment has been independently verified. The next step is onboarding, profile analysis and confirmation of your target search.</p><div className="result-steps"><span>01 · Onboarding</span><span>02 · Profile + SWOT</span><span>03 · Managed applications</span></div><Link className="btn btn-dark" href="/#book-call">Book your onboarding call →</Link></> : <><div className="result-icon muted">!</div><div className="section-kicker">PAYMENT VERIFICATION PENDING</div><h1>We are checking your payment.</h1><p>We could not independently verify a successful payment from this browser redirect. Please wait a moment or contact the JobApply team. The Dodo webhook is the source of truth for payment processing.</p><Link className="btn btn-dark" href="/#book-call">Contact JobApply →</Link></>}</div></main>
}
