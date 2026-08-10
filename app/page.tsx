const jobs = [
  ['A','Security Engineer','Acme Cloud','Applied'],
  ['N','Cloud Security Lead','Northstar','Applied'],
  ['V','Senior GRC Analyst','Vertex Labs','Screening'],
  ['P','Security Architect','Pine Systems','Applied'],
]

const faqs = [
  ['What exactly do you do?', 'We handle the repetitive job-search work: identifying relevant roles, tailoring your application materials, submitting applications, tracking progress and helping you prepare when an interview comes in.'],
  ['Is the $499 a monthly fee?', 'No. It is a one-time $499 payment covering the full 3-month service period.'],
  ['How does the refund guarantee work?', 'If we complete the agreed 3-month service and you receive no interview invitation during that period, the full $499 service fee is refundable, subject to the terms agreed when you start.'],
  ['Do you guarantee a job offer?', 'No. Hiring decisions remain with employers. The guarantee is tied to receiving an interview invitation, not a job offer.'],
  ['Can I choose the roles you apply to?', 'Yes. We align applications with your target roles, location, experience, compensation expectations and other preferences before applications begin.'],
  ['Do you help after I get an interview?', 'Yes. The service includes interview preparation and guidance so you are ready to make the most of the opportunity.'],
]

export default function Home() {
  return (
    <main>
      <header className="wrap nav">
        <a className="logo" href="#top">JobApply<span /></a>
        <nav className="navlinks">
          <a href="#how">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-dark" href="#start">Start for $499</a>
      </header>

      <section id="top" className="wrap hero">
        <div>
          <div className="eyebrow"><span className="dot" /> 3-month done-for-you job search</div>
          <h1>Stop applying.<br /><em>Start interviewing.</em></h1>
          <p>We take the job application grind off your plate. We find relevant roles, tailor your applications, submit them, track every opportunity and help you prepare when an interview arrives.</p>
          <div className="actions"><a className="btn btn-dark" href="#start">Get started — $499</a><a className="btn" style={{border:'1px solid #d4d7d0'}} href="#how">See how it works ↓</a></div>
          <div className="fine">One-time payment · 3 months · Full refund if no interview is received*</div>
        </div>
        <div className="visual">
          <div className="card dashboard">
            <div className="cardtop"><div><strong>Application dashboard</strong><div className="mini">Your search, handled.</div></div><span className="status">Active</span></div>
            {jobs.map(([initial,title,company,status]) => <div className="job" key={title}><div className="company">{initial}</div><div><strong>{title}</strong><span>{company}</span></div><div className="applied">{status}</div></div>)}
          </div>
          <div className="float"><small>Interview pipeline</small><b>+12</b><small>new opportunities this week</small></div>
        </div>
      </section>

      <div className="trust"><div className="wrap trustrow"><span>BUILT FOR SERIOUS JOB SEEKERS</span><strong>Targeted applications</strong><strong>Human-reviewed</strong><strong>Application tracking</strong><strong>Interview preparation</strong></div></div>

      <section id="how" className="section dark">
        <div className="wrap">
          <div className="sectionhead"><h2>From “I should apply” to “See you in the interview.”</h2><p>You focus on your career. We handle the application workload that gets in the way.</p></div>
          <div className="steps">
            {[['01','Profile','We learn your experience, target roles, locations and compensation goals.'],['02','Find','We identify relevant openings instead of sending random applications.'],['03','Apply','Applications are tailored and submitted, then tracked so nothing gets lost.'],['04','Interview','When an employer responds, we help you prepare and show up ready.']].map(([n,t,p]) => <div className="step" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section id="offer" className="section">
        <div className="wrap offer">
          <div>
            <div className="eyebrow">THE JOBAPPLY OFFER</div>
            <h2>Three months of job-search momentum.</h2>
            <p style={{color:'#626963',lineHeight:1.65,maxWidth:600}}>A focused service for professionals who are tired of spending evenings searching job boards and filling out the same forms.</p>
            <div className="checklist">
              {['Target-role strategy','Relevant job discovery','Tailored applications','Application tracking','Progress updates','Interview preparation'].map(x=><div className="check" key={x}><i>✓</i>{x}</div>)}
            </div>
          </div>
          <div className="pricecard" id="start">
            <div className="label">3-MONTH SERVICE</div><div className="price">$499 <span>one time</span></div>
            <p style={{color:'#687069',fontSize:14,lineHeight:1.55}}>We manage your job application process from search through interview.</p>
            <div className="guarantee"><strong>Interview guarantee</strong><br />Complete the service period with no interview invitation and your $499 is refundable, subject to the service terms.</div>
            <a className="btn btn-dark" href="mailto:hello@jobapply.com?subject=Start%20JobApply">Start my job search →</a>
            <div className="fine" style={{textAlign:'center'}}>No recurring subscription.</div>
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{paddingTop:20}}>
        <div className="wrap"><div className="sectionhead"><h2>Questions, answered.</h2><p>Everything you need to know before handing over the job-search workload.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="wrap cta"><div className="ctabox"><h2>Your next interview could be closer than you think.</h2><p>Give yourself three months to focus on the work you actually want to do. Let us handle the applications.</p><div className="actions" style={{justifyContent:'center'}}><a className="btn btn-dark" href="mailto:hello@jobapply.com?subject=Start%20JobApply">Start for $499</a></div></div></section>

      <footer className="wrap footer"><div>© 2026 JobApply. All rights reserved.</div><div>*Refund terms apply. Interview guarantee does not mean a job offer is guaranteed.</div></footer>
    </main>
  )
}
