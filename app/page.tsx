import InteractiveHome from './components/InteractiveHome'

const faqs = [
  ['Why 3 months?', 'Onboarding → analysis → applications → market feedback → refinement. A serious search needs runway.'],
  ['What is included?', 'Candidate onboarding, profile analysis, targeted applications, tracking and interview preparation.'],
  ['Is $499 recurring?', 'No. $499 is a one-time launch price for the complete 3-month service.'],
  ['Is a job guaranteed?', 'No. Employers make hiring decisions. Our refund guarantee is limited to qualifying interviews and the Terms.'],
]

export default function Home() {
  return <main>
    <header className="wrap nav"><a className="logo" href="#top">JobApply<span /></a><nav className="navlinks"><a href="#experience">How it works</a><a href="#offer">Price</a><a href="#faq">FAQ</a></nav><a className="btn btn-dark" href="#start">Get started →</a></header>
    <InteractiveHome />

    <section id="offer" className="visual-offer">
      <div className="wrap visual-offer-grid">
        <div className="offer-copy-short"><div className="section-kicker">THE SIMPLE VERSION</div><h2>You bring the career.<br/><span>We handle the grind.</span></h2><div className="mini-pills"><span>Onboard</span><span>Analyze</span><span>Apply</span><span>Interview</span></div></div>
        <div className="pricecard pricecard-large"><div className="limited"><strong>12 OF 15 SLOTS LEFT</strong><span>3 already filled</span></div><div className="price-label">3 MONTHS</div><div className="oldprice"><s>$799</s></div><div className="price">$499 <span>one time</span></div><div className="save">SAVE $300</div><div className="guarantee"><strong>Interview guarantee*</strong><br/>No qualifying interview during the eligible 3-month service? You may request a refund under the Terms.</div><a id="start" className="btn btn-dark" href="mailto:hello@jobapply.com?subject=Claim%20JobApply%20Launch%20Slot">Claim my $499 slot →</a></div>
      </div>
    </section>

    <section className="interactive-benefits"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">TAP TO EXPLORE</div><h2>What happens after you join?</h2></div><p>Four simple stages.</p></div><div className="benefit-cards"><div className="benefit-card"><span>01</span><b>Onboarding</b><i>→</i><p>We get to know your goals, experience and target roles.</p></div><div className="benefit-card"><span>02</span><b>SWOT analysis</b><i>→</i><p>We find your strongest positioning and gaps.</p></div><div className="benefit-card"><span>03</span><b>Applications</b><i>→</i><p>Relevant roles are found, tailored, submitted and tracked.</p></div><div className="benefit-card"><span>04</span><b>Interview</b><i>→</i><p>When the response comes, preparation begins.</p></div></div></div></section>

    <section id="faq" className="section faq-section"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">QUICK ANSWERS</div><h2>Need to know?</h2></div></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">12 OF 15 SLOTS LEFT · 3 FILLED</div><h2>Ready to stop doing it all yourself?</h2><p><s>$799</s> → <strong>$499</strong> · 3 months · one payment</p><div className="actions center-actions"><a className="btn btn-dark" href="#start">Claim my slot →</a></div></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="footer-logo" href="#top">JobApply<span /></a><p>Managed job application support from profile to interview.</p><div className="footer-badge">MANAGED CAREER SERVICE</div></div><div className="footer-col"><h4>Explore</h4><a href="#experience">How it works</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></div><div className="footer-col"><h4>Service</h4><a href="#service">Candidate analysis</a><a href="#experience">Interview preparation</a><a href="#service">Global job search</a></div><div className="footer-col"><h4>Legal</h4><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="mailto:hello@jobapply.com">Contact</a></div></div><div className="wrap footer-bottom"><span>© 2026 JobApply</span><span>3-month minimum · $499 launch offer · 12 of 15 slots left</span><span>Refund terms apply · No job offer guaranteed.</span></div></footer>
  </main>
}
