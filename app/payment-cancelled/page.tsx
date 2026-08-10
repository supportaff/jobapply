import Link from 'next/link'

export default function PaymentCancelled() {
  return <main className="payment-result"><div className="result-card"><div className="result-icon muted">×</div><div className="section-kicker">CHECKOUT NOT COMPLETED</div><h1>No payment was taken.</h1><p>Your checkout was cancelled or could not be completed. If you were accepted into the JobApply service, you can return to the payment link provided to you or contact the team.</p><Link className="btn btn-dark" href="/#book-call">Return to JobApply →</Link></div></main>
}
