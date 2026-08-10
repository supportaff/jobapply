'use client'

import { useEffect, useRef, useState } from 'react'

const stages = [
  { id:'discover', title:'Discover', icon:'⌕', text:'We scan for relevant roles and build a focused opportunity pipeline.' },
  { id:'tailor', title:'Tailor', icon:'✦', text:'Your application positioning is adapted to the opportunity without inventing credentials.' },
  { id:'apply', title:'Apply', icon:'↗', text:'Applications are submitted and organized so you never lose track of where you stand.' },
  { id:'interview', title:'Interview', icon:'◎', text:'When an employer responds, we help you prepare for the conversation.' },
]

export default function InteractiveHome() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('discover')
  const [scrolled, setScrolled] = useState(false)
  const slots = 10

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive:true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX-r.left)/r.width-.5)*10
    const y = ((e.clientY-r.top)/r.height-.5)*-10
    el.style.setProperty('--rx', `${y}deg`)
    el.style.setProperty('--ry', `${x}deg`)
  }
  const resetTilt = () => { heroRef.current?.style.setProperty('--rx','0deg'); heroRef.current?.style.setProperty('--ry','0deg') }

  return <>
    <div className={`progressbar ${scrolled ? 'visible':''}`}><span /></div>
    <section className="interactive-hero wrap" onMouseMove={tilt} onMouseLeave={resetTilt}>
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="hero-copy">
        <div className="live-pill"><span className="pulse" /> {slots} of 10 launch slots available</div>
        <h2 className="interactive-title">Your job search,<br /><span>on autopilot.</span></h2>
        <p>Tell us what you want next. We handle the repetitive work between finding the right role and getting you into the interview.</p>
        <div className="magnetic-actions"><a className="btn btn-dark magnetic" href="#start">Claim $499 launch price <b>→</b></a><a className="textlink" href="#experience">Explore the experience ↓</a></div>
        <div className="microproof"><span>✓</span> 3 months <span>✓</span> One-time payment <span>✓</span> Interview refund guarantee*</div>
      </div>
      <div className="hero-scene" ref={heroRef} style={{'--rx':'0deg','--ry':'0deg'} as React.CSSProperties}>
        <div className="scene-glow" /><div className="floating-chip chip-top"><span>LIVE</span> Application found</div><div className="floating-chip chip-bottom">Interview prep <strong>Ready</strong></div>
        <div className="dashboard-pro">
          <div className="dash-head"><div><small>JOBAPPLY / SEARCH</small><h3>Career pipeline</h3></div><div className="avatar">JA</div></div>
          <div className="dash-stats"><div><b>47</b><span>Found</span></div><div><b>18</b><span>Applied</span></div><div><b>4</b><span>Replies</span></div><div className="accent"><b>2</b><span>Interviews</span></div></div>
          <div className="pipeline"><div className="pipeline-line"><span style={{width:'72%'}} /></div><div className="pipeline-labels"><span>Search</span><span>Applied</span><span>Screening</span><span>Interview</span></div></div>
          <div className="live-job"><div className="company-logo">N</div><div className="job-meta"><b>Cloud Security Lead</b><span>Northstar Technologies · Remote</span><small>94% match</small></div><div className="job-state">New match <i>↗</i></div></div>
          <div className="live-job"><div className="company-logo">V</div><div className="job-meta"><b>Senior GRC Analyst</b><span>Vertex Labs · Hybrid</span><small>91% match</small></div><div className="job-state applied-state">Applied ✓</div></div>
        </div>
      </div>
    </section>

    <section id="experience" className="experience wrap">
      <div className="section-kicker">THE PROCESS</div><h2>One search. <span>Four moments.</span></h2><p className="experience-lead">Click through the journey to see exactly what happens after you join.</p>
      <div className="stage-tabs">{stages.map((s,i)=><button className={active===s.id?'active':''} onClick={()=>setActive(s.id)} key={s.id}><i>{s.icon}</i>{s.title}<span>0{i+1}</span></button>)}</div>
      <div className="stage-panel">{stages.map((s,i)=>active===s.id && <div className="stage-content" key={s.id}><div className="stage-number">0{i+1}</div><div><h3>{s.title}</h3><p>{s.text}</p><div className="stage-progress"><span style={{width:`${(i+1)*25}%`}} /></div><small>STEP {i+1} OF 4</small></div><div className="stage-visual"><div className="radar" /><div className="stage-icon">{s.icon}</div></div></div>)}</div>
    </section>

    <section className="scroll-story"><div className="wrap story-grid"><div className="story-sticky"><div className="section-kicker">WHY JOBAPPLY</div><h2>Stop spending your best hours <span>on forms.</span></h2><p>Searching is a full-time task disguised as a side task. JobApply turns it into a managed pipeline.</p><a className="btn btn-dark" href="#start">Get my time back →</a></div><div className="story-cards"><article><strong>01</strong><h3>Less searching</h3><p>We narrow the market to roles that fit your agreed target instead of making you browse endlessly.</p></article><article><strong>02</strong><h3>More consistency</h3><p>Your search keeps moving even on the days when your work, family or life takes priority.</p></article><article><strong>03</strong><h3>Better visibility</h3><p>See the pipeline clearly: opportunities found, applications submitted, replies and interviews.</p></article><article><strong>04</strong><h3>Ready when it matters</h3><p>When an interview appears, the focus changes from applying to preparing.</p></article></div></div></section>

    <section className="interactive-guarantee"><div className="wrap guarantee-inner"><div><div className="section-kicker">THE LAUNCH OFFER</div><h2><s>$799</s> <span>$499</span></h2><p>First 10 clients only. Three months. One payment.</p></div><div className="slot-counter"><div className="slot-ring"><b>{slots}</b><small>left</small></div><div><strong>Launch slots</strong><p>After all 10 slots are claimed, the price returns to $799.</p><div className="slot-bar"><span style={{width:'0%'}} /></div></div></div><a id="start" className="btn btn-dark magnetic" href="mailto:hello@jobapply.com?subject=Claim%20JobApply%20Launch%20Slot">Claim my slot →</a></div></section>
  </>
}
