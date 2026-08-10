'use client'

import { useState } from 'react'

export default function AdminPaymentPage() {
  const [key, setKey] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')

  async function createCheckout() {
    setLoading(true)
    setError('')
    setCheckoutUrl('')
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-jobapply-admin-key': key },
        body: JSON.stringify({ name, email }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to create checkout')
      setCheckoutUrl(data.checkoutUrl)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to create checkout')
    } finally {
      setLoading(false)
    }
  }

  return <main className="admin-payment-page"><div className="admin-card"><div className="section-kicker">INTERNAL · QUALIFIED CANDIDATE</div><h1>Create a $499 payment checkout</h1><p>Use this only after the candidate has passed the JobApply suitability review. The customer receives the Dodo-hosted checkout URL generated for their payment.</p><label>Admin key<input type="password" value={key} onChange={e=>setKey(e.target.value)} /></label><label>Candidate name<input value={name} onChange={e=>setName(e.target.value)} /></label><label>Candidate email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label><button className="btn btn-dark" disabled={loading} onClick={createCheckout}>{loading ? 'Creating…' : 'Create Dodo checkout →'}</button>{error&&<div className="admin-error">{error}</div>}{checkoutUrl&&<div className="checkout-result"><strong>Checkout created</strong><input readOnly value={checkoutUrl} onFocus={e=>e.currentTarget.select()} /><a className="btn btn-dark" href={checkoutUrl}>Open checkout →</a><p>Send this URL to the accepted candidate. Do not publish it on the public landing page.</p></div>}</div></main>
}
