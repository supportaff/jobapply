import Link from 'next/link'

export default function PaymentSuccess() {
  return <main className="payment-result"><div className="result-card"><div className="result-icon">✓</div><div className="section-kicker">PAYMENT RECEIVED</div><h1>Your JobApply service is confirmed.</h1><p>Thank you. Your payment has been received by our payment provider. The next step is onboarding, profile analysis and confirmation of your target search.</p><div className="result-steps"><span>01 · Onboarding</span><span>02 · Profile + SWOT</span><span>03 · Managed applications</span></div><Link className="btn btn-dark" href="/#book-call">Book your onboarding call →</Link></div></main>
}
