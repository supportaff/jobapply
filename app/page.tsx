const jobs = [
  ['A','Security Engineer','Acme Cloud','Applied'],
  ['N','Cloud Security Lead','Northstar','Applied'],
  ['V','Senior GRC Analyst','Vertex Labs','Screening'],
  ['P','Security Architect','Pine Systems','Applied'],
]

const faqs = [
  ['What exactly do I get?', 'You get a 3-month, done-for-you job search service covering target-role strategy, relevant job discovery, application tailoring, application submission, tracking, progress updates and interview preparation.'],
  ['Is the $499 a monthly fee?', 'No. The launch price is a one-time $499 payment covering the full 3-month service period. The regular price is $799. Only the first 10 launch slots are available at $499.'],
  ['How does the interview refund guarantee work?', 'If we complete the agreed 3-month service and you receive no qualifying interview invitation during that service period, you may request a refund of the service fee, subject to the eligibility and participation requirements in the Terms.'],
  ['Do you guarantee a job offer?', 'No. We do not guarantee employment, an offer, salary or a hiring decision. Employers control those decisions. Our guarantee is limited to the qualifying interview outcome described in the Terms.'],
  ['How many applications will you submit?', 'The exact volume depends on your target market, role seniority, availability of suitable openings and the application requirements. We prioritize relevant, quality applications rather than indiscriminate submissions.'],
  ['Can I choose the roles you apply to?', 'Yes. We align the search with your target roles, experience, preferred locations, compensation expectations and other agreed criteria before applications begin.'],
  ['Do you help after I get an interview?', 'Yes. Interview preparation is included so you can prepare for the role, understand likely questions and present your experience effectively.'],
  ['What is not included?', 'We do not promise a job offer, negotiate employment decisions on an employer’s behalf, misrepresent your qualifications, or submit applications to roles that do not meet the agreed criteria simply to increase application counts.'],
]

const benefits = [
  ['01','Target-role strategy','Define the roles, companies, locations, seniority and compensation range worth pursuing.'],
  ['02','Relevant job discovery','Find suitable openings across relevant job sources and prioritize roles aligned with your profile.'],
  ['03','Application tailoring','Adapt your resume/application positioning to the opportunity while keeping your information truthful.'],
  ['04','Application submission','Handle the repetitive application workflow so you spend less time filling forms and more time preparing.'],
  ['05','Application tracking','Maintain a clear pipeline of submitted, screening, interview and closed opportunities.'],
  ['06','Progress updates','Keep you informed about the search, applications and responses during the service period.'],
  ['07','Interview preparation','Help you prepare when an interview invitation arrives, including role-specific preparation.'],
  ['08','3-month support','Stay focused on the search for the full service period instead of stopping after a few applications.'],
]

export default function Home() {
  return (
    <main>
      <header className="wrap nav">
        <a className="logo" href="#top">JobApply<span /></a>
        <nav className="navlinks">
          <a href="#what-you-get">What you get</a><a href="#how">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-dark" href="#start">Claim $499 slot</a>
      </header>

      <section id="top" className="wrap hero">
        <div>
          <div className="eyebrow"><span className="dot" /> Limited launch · only 10 slots at $499</div>
          <h1>Stop applying.<br /><em>Start interviewing.</em></h1>
          <p>We take the job application grind off your plate. We find relevant roles, tailor your applications, submit them, track every opportunity and help you prepare when an interview arrives.</p>
          <div className="actions"><a className="btn btn-dark" href="#start">Claim my $499 slot →</a><a className="btn" style={{border:'1px solid #d4d7d0'}} href="#how">See how it works ↓</a></div>
          <div className="fine">One-time payment · 3 months · Interview refund guarantee* · No recurring subscription</div>
        </div>
        <div className="visual">
          <div className="card dashboard">
            <div className="cardtop"><div><strong>Application dashboard</strong><div className="mini">Your search, handled.</div></div><span className="status">Active</span></div>
            {jobs.map(([initial,title,company,status]) => <div className="job" key={title}><div className="company">{initial}</div><div><strong>{title}</strong><span>{company}</span></div><div className="applied">{status}</div></div>)}
          </div>
          <div className="float"><small>Interview pipeline</small><b>+12</b><small>new opportunities this week</small></div>
        </div>
      </section>

      <div className="scarcity"><div className="wrap scarcityrow"><strong>Launch offer: 10 slots only</strong><span>First 10 clients: <s>$799</s> <b>$499</b> for 3 months</span><span>After the first 10 slots: $799</span></div></div>

      <div className="trust"><div className="wrap trustrow"><span>BUILT FOR SERIOUS JOB SEEKERS</span><strong>Targeted applications</strong><strong>Human-reviewed</strong><strong>Application tracking</strong><strong>Interview preparation</strong></div></div>

      <section id="what-you-get" className="section">
        <div className="wrap">
          <div className="sectionhead"><h2>What you get for your $499.</h2><p>Not another job board subscription. You get a managed process designed to move your search from applications toward interviews.</p></div>
          <div className="benefitgrid">{benefits.map(([n,t,p]) => <div className="benefit" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{p}</p></div>)}</div>
        </div>
      </section>

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
            <div className="eyebrow">LIMITED LAUNCH OFFER</div>
            <h2>Three months of job-search momentum.</h2>
            <p style={{color:'#626963',lineHeight:1.65,maxWidth:600}}>A focused service for professionals who are tired of spending evenings searching job boards and filling out the same forms. We handle the repetitive work while you stay in control of your career decisions.</p>
            <div className="checklist">
              {['Target-role strategy','Relevant job discovery','Tailored applications','Application submission','Application tracking','Progress updates','Interview preparation','3-month support'].map(x=><div className="check" key={x}><i>✓</i>{x}</div>)}
            </div>
          </div>
          <div className="pricecard" id="start">
            <div className="limited"><strong>10 LAUNCH SLOTS</strong><span>Limited availability</span></div>
            <div className="label">3-MONTH SERVICE</div>
            <div className="oldprice">Regular price <s>$799</s></div>
            <div className="price">$499 <span>one time</span></div>
            <div className="save">SAVE $300 · FIRST 10 CLIENTS</div>
            <p style={{color:'#687069',fontSize:14,lineHeight:1.55}}>We manage your job application process from search through interview.</p>
            <div className="guarantee"><strong>Interview refund guarantee</strong><br />If you complete the agreed service requirements and receive no qualifying interview invitation during the 3-month service period, your $499 service fee may be refunded, subject to the Terms.</div>
            <a className="btn btn-dark" href="mailto:hello@jobapply.com?subject=Claim%20JobApply%20Launch%20Slot">Claim my $499 slot →</a>
            <div className="fine" style={{textAlign:'center'}}>No recurring subscription · 10 launch slots only</div>
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{paddingTop:20}}>
        <div className="wrap"><div className="sectionhead"><h2>Questions, answered.</h2><p>Everything you need to know before handing over the job-search workload.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">ONLY 10 LAUNCH SLOTS</div><h2>Get the first 10-client price before it is gone.</h2><p><s>$799</s> regular price. <strong>$499</strong> one time for the first 10 clients, covering 3 months of service.</p><div className="actions" style={{justifyContent:'center'}}><a className="btn btn-dark" href="#start">Claim $499 slot →</a></div></div></section>

      <footer className="wrap footer"><div>© 2026 JobApply. All rights reserved.</div><div><a href="/terms">Terms</a> · <a href="/privacy">Privacy</a> · *Refund terms apply. No job offer is guaranteed.</div></footer>
    </main>
  )
}
