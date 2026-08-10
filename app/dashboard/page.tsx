'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => { setUser(data.user); setLoading(false) })
  }, [])

  async function signOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/auth'
  }

  if (loading) return <main className="dashboard-page"><div className="dashboard-loading">Loading your workspace…</div></main>
  if (!user) { window.location.href = '/auth'; return null }

  const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'there'
  const avatar = user.user_metadata?.avatar_url || user.user_metadata?.picture

  return <main className="dashboard-page">
    <header className="wrap dashboard-nav"><a className="logo" href="/">JobApply<span /></a><div className="user-menu">{avatar && <img src={avatar} alt="" />}<span>{name}</span><button onClick={signOut}>Sign out</button></div></header>
    <section className="wrap dashboard-content"><div className="dashboard-kicker">YOUR JOBAPPLY WORKSPACE</div><h1>Welcome, {name.split(' ')[0]}.</h1><p>Your account is ready. Your JobApply service progress will appear here once your onboarding is completed.</p><div className="dashboard-grid"><div className="dash-card"><small>PROFILE</small><h3>Candidate onboarding</h3><p>Complete your profile so we can understand your goals, experience and target opportunities.</p><a href="mailto:hello@jobapply.com?subject=JobApply%20Onboarding">Start onboarding →</a></div><div className="dash-card"><small>SEARCH</small><h3>Application pipeline</h3><p>Your matched opportunities, submitted applications, responses and interviews will be tracked here.</p><span className="coming">Preparing your workspace</span></div><div className="dash-card"><small>INTERVIEWS</small><h3>Interview preparation</h3><p>When an interview arrives, your preparation resources and next steps will be available here.</p><span className="coming">Available during service</span></div></div></section>
  </main>
}
