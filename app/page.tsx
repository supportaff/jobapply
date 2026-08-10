import InteractiveHome from './components/InteractiveHome'

const faqs = [
  ['Why is the service 3 months minimum?', 'A serious search needs time for onboarding, profile analysis, targeted applications, employer response and refinement. Three months gives the process enough runway to generate meaningful market feedback.'],
  ['What happens when I start?', 'We begin with structured onboarding and candidate profile review, define your target roles and markets, then complete a SWOT analysis before the application campaign starts.'],
  ['What is included?', 'Candidate onboarding, profile and SWOT analysis, job discovery, application tailoring and submission, application tracking, progress monitoring and interview preparation.'],
  ['Is $499 recurring?', 'No. $499 is a one-time launch price for the complete 3-month service. The standard price is $799 after the initial 15 launch slots.'],
  ['Do you guarantee an interview or job?', 'We do not guarantee employment or a job offer. If you complete the agreed service requirements and receive no qualifying interview invitation during the eligible service period, the interview refund guarantee may apply subject to the Terms.'],
  ['Which countries can you target?', 'We can support job searches across major international markets, including the United States, Canada, United Kingdom, Australia, Germany, Singapore, UAE, India and other agreed locations.'],
]

export default function Home() {
  return <main id="top">
    <header className="wrap nav"><a className="logo" href="#top">JobApply<span /></a><nav className="navlinks"><a href="#experience">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></nav><a className="btn btn-dark" href="#start">Start your search →</a></header>
    <InteractiveHome />

    <section id="offer" className="section faq-section"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">YOUR QUESTIONS</div><h2>Everything important, upfront.</h2></div><p>Clear answers before you start.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section id="faq" className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">12 OF 15 LAUNCH SLOTS LEFT · 3 FILLED</div><h2>Put your job search in motion.</h2><p><s>$799</s> → <strong>$499</strong> · 3 months · one payment</p><div className="actions center-actions"><a className="btn btn-dark" href="#start">Claim my launch slot →</a></div><small>After all 15 launch slots are filled, the price returns to $799.</small></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="footer-logo" href="#top">JobApply<span /></a><p>Managed job application support from candidate profile to interview.</p><div className="footer-badge">MANAGED CAREER SERVICE</div></div><div className="footer-col"><h4>Explore</h4><a href="#experience">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></div><div className="footer-col"><h4>Service</h4><a href="#service">Candidate analysis</a><a href="#experience">Interview preparation</a><a href="#service">Global job search</a></div><div className="footer-col"><h4>Legal</h4><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy</a><a href="mailto:hello@jobapply.com">Contact</a></div></div><div className="wrap footer-bottom"><span>© 2026 JobApply. All rights reserved.</span><span>3-month minimum · $499 launch offer · 12 of 15 slots left</span><span>Refund terms apply · No job offer guaranteed.</span></div></footer>
  </main>
}
