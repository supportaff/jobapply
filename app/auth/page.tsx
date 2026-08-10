'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase/client'

export default function AuthPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function signInWithGoogle() {
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (authError) {
      setError(authError.message)
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <div className="auth-card">
        <a className="auth-logo" href="/">JobApply<span /></a>
        <div className="auth-kicker">YOUR CAREER SEARCH</div>
        <h1>Welcome back.</h1>
        <p className="auth-subtitle">Sign in to continue your JobApply journey and keep your application process moving.</p>
        <button className="google-button" onClick={signInWithGoogle} disabled={loading}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.35 12.23c0-.78-.07-1.53-.22-2.23H12v4.22h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.38Z"/><path fill="#34A853" d="M12 21.67c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.67Z"/><path fill="#FBBC05" d="M6.53 13.75A5.85 5.85 0 0 1 6.22 12c0-.61.11-1.2.31-1.75V7.72H3.28A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.28l3.25-2.53Z"/><path fill="#EA4335" d="M12 6.22c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.3 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.72 5.39l3.25 2.53C7.3 7.94 9.46 6.22 12 6.22Z"/></svg>
          {loading ? 'Connecting…' : 'Continue with Google'}
        </button>
        {error && <div className="auth-error">{error}</div>}
        <div className="auth-divider"><span>SECURE SIGN IN</span></div>
        <p className="auth-note">By continuing, you agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p>
        <a className="auth-back" href="/">← Back to JobApply</a>
      </div>
    </main>
  )
}
