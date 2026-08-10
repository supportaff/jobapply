import InteractiveHome from './components/InteractiveHome'

const faqs = [
  ['Why is the service 3 months minimum?', 'A serious search needs time for onboarding, profile analysis, targeted applications, employer response and refinement. Three months gives the process enough runway to generate meaningful market feedback.'],
  ['What happens when I start?', 'We begin with a structured onboarding and candidate profile review, define your target roles and markets, then complete a SWOT analysis before the application campaign starts.'],
  ['What is included?', 'Candidate onboarding, profile and SWOT analysis, job discovery, application tailoring and submission, application tracking, progress monitoring and interview preparation.'],
  ['Is $499 recurring?', 'No. $499 is a one-time launch price for the complete 3-month service. The standard price is $799 after the initial 15 launch slots.'],
  ['Do you guarantee an interview or job?', 'We do not guarantee employment or a job offer. If you complete the agreed service requirements and receive no qualifying interview invitation during the eligible service period, the interview refund guarantee may apply subject to the Terms.'],
  ['Which countries can you target?', 'We can support job searches across major international markets, including the United States, Canada, United Kingdom, Australia, Germany, Singapore, UAE, India and other agreed locations.'],
]

export default function Home() {
  return <main id="top">
    <header className="wrap nav"><a className="logo" href="#top">JobApply<span /></a><nav className="navlinks"><a href="#experience">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></nav><a className="btn btn-dark" href="#start">Start your search →</a></header>
    <InteractiveHome />

    <section id="offer" className="professional-offer">
      <div className="wrap professional-offer-grid">
        <div className="offer-message">
          <div className="section-kicker">A MANAGED JOB SEARCH</div>
          <h2>Your next opportunity deserves a <span>better process.</span></h2>
          <p>From candidate analysis to application tracking and interview preparation, we manage the repetitive work around your job search.</p>
          <div className="offer-points"><span>✓ Profile review</span><span>✓ SWOT analysis</span><span>✓ Targeted applications</span><span>✓ Interview preparation</span></div>
        </div>
        <div className="pricecard pricecard-large">
          <div className="limited"><strong>12 OF 15 LAUNCH SLOTS LEFT</strong><span>3 already filled</span></div>
          <div className="price-label">COMPLETE 3-MONTH SERVICE</div>
          <div className="oldprice">Regular price <s>$799</s></div>
          <div className="price">$499 <span>one time</span></div>
          <div className="save">SAVE $300</div>
          <div className="guarantee"><strong>Interview refund guarantee*</strong><br/>If eligible and no qualifying interview is received during the service period, the service fee may be refunded under the Terms.</div>
          <a id="start" className="btn btn-dark" href="mailto:hello@jobapply.com?subject=Claim%20JobApply%20Launch%20Slot">Claim my $499 slot →</a>
          <small className="price-note">15 launch slots total · 3 filled · no recurring payment</small>
        </div>
      </div>
    </section>

    <section className="interactive-benefits"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">THE EXPERIENCE</div><h2>A clear path from profile to interview.</h2></div><p>Explore each stage.</p></div><div className="benefit-cards"><div className="benefit-card"><span>01</span><b>Onboarding</b><i>→</i><p>Goals, experience, target roles and preferences.</p></div><div className="benefit-card"><span>02</span><b>Candidate analysis</b><i>→</i><p>Profile screening and structured SWOT analysis.</p></div><div className="benefit-card"><span>03</span><b>Applications</b><i>→</i><p>Relevant opportunities, tailored applications and tracking.</p></div><div className="benefit-card"><span>04</span><b>Interviews</b><i>→</i><p>Preparation and support when responses arrive.</p></div></div></div></section>

    <section className="trust-section"><div className="wrap trust-grid"><div><div className="section-kicker">BUILT AROUND YOUR PROFILE</div><h2>Quality over random applications.</h2></div><div className="trust-items"><div><strong>01</strong><span>Targeted search</span><p>Roles are filtered against your agreed profile and goals.</p></div><div><strong>02</strong><span>Market feedback</span><p>Responses help us refine the search during the engagement.</p></div><div><strong>03</strong><span>Human support</span><p>You get a managed process rather than another dashboard to operate.</p></div></div></div></section>

    <section id="faq" className="section faq-section"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">FAQ</div><h2>Before you start.</h2></div><p>Short answers to the important questions.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">12 OF 15 LAUNCH SLOTS LEFT</div><h2>Put your job search in motion.</h2><p><s>$799</s> → <strong>$499</strong> · 3 months · one payment</p><div className="actions center-actions"><a className="btn btn-dark" href="#start">Claim my launch slot →</a></div><small>3 slots filled. After 15 launch slots, the price returns to $799.</small></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="footer-logo" href="#top">JobApply<span /></a><p>Managed job application support from candidate profile to interview.</p><div className="footer-badge">MANAGED CAREER SERVICE</div></div><div className="footer-col"><h4>Explore</h4><a href="#experience">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></div><div className="footer-col"><h4>Service</h4><a href="#service">Candidate analysis</a><a href="#experience">Interview preparation</a><a href="#service">Global job search</a></div><div className="footer-col"><h4>Legal</h4><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy Policy</a><a href="mailto:hello@jobapply.com">Contact</a></div></div><div className="wrap footer-bottom"><span>© 2026 JobApply. All rights reserved.</span><span>3-month minimum · $499 launch offer · 12 of 15 slots left</span><span>Refund terms apply · No job offer guaranteed.</span></div></footer>
  </main>
}
