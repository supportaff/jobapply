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
    setLoading(true); setError(''); setCheckoutUrl('')
    try {
      const response = await fetch('/api/create-checkout', { method:'POST', headers:{'Content-Type':'application/json','x-jobapply-admin-key':key}, body:JSON.stringify({name,email}) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to create checkout')
      setCheckoutUrl(data.checkoutUrl)
    } catch (e) { setError(e instanceof Error ? e.message : 'Unable to create checkout') } finally { setLoading(false) }
  }

  const inputStyle={width:'100%',padding:'13px 14px',border:'1px solid #dfe2da',borderRadius:12,background:'#fff',fontSize:14,marginTop:7,outline:'none'}
  return <main style={{minHeight:'100vh',background:'#f7f7f3',display:'grid',placeItems:'center',padding:24}}><div style={{width:'min(560px,100%)',background:'#fff',border:'1px solid #dfe2da',borderRadius:28,padding:'38px',boxShadow:'0 25px 70px rgba(16,20,17,.08)'}}><div className="section-kicker">INTERNAL · QUALIFIED CANDIDATE</div><h1 style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'clamp(36px,7vw,54px)',lineHeight:.98,margin:'8px 0 16px'}}>Create a $499 payment checkout</h1><p style={{color:'#687069',lineHeight:1.6}}>Use this only after the candidate has passed the JobApply suitability review. The generated Dodo checkout URL is sent privately to the accepted candidate.</p><label style={{display:'block',marginTop:22,fontWeight:700,fontSize:13}}>Admin key<input style={inputStyle} type="password" value={key} onChange={e=>setKey(e.target.value)} /></label><label style={{display:'block',marginTop:16,fontWeight:700,fontSize:13}}>Candidate name<input style={inputStyle} value={name} onChange={e=>setName(e.target.value)} /></label><label style={{display:'block',marginTop:16,fontWeight:700,fontSize:13}}>Candidate email<input style={inputStyle} type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label><button className="btn btn-dark" style={{width:'100%',marginTop:22,border:0,cursor:loading?'wait':'pointer'}} disabled={loading} onClick={createCheckout}>{loading ? 'Creating…' : 'Create Dodo checkout →'}</button>{error&&<div style={{marginTop:16,padding:12,borderRadius:12,background:'#fff0ee',color:'#9b3025',fontSize:13}}>{error}</div>}{checkoutUrl&&<div style={{marginTop:22,padding:18,borderRadius:16,background:'#f1f8df',border:'1px solid #b8d76a'}}><strong>Checkout created</strong><input readOnly style={inputStyle} value={checkoutUrl} onFocus={e=>e.currentTarget.select()} /><a className="btn btn-dark" style={{width:'100%',marginTop:12}} href={checkoutUrl}>Open checkout →</a><p style={{fontSize:12,color:'#4f5d39',lineHeight:1.5}}>Send this URL to the accepted candidate. Do not publish it on the public landing page.</p></div>}</div></main>
}
