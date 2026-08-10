import InteractiveHome from './components/InteractiveHome'

const faqs = [
  ['Why is the service 3 months minimum?', 'A serious search needs time for onboarding, profile analysis, targeted applications, employer response and refinement. Three months gives the process enough runway to generate meaningful market feedback.'],
  ['What happens when I start?', 'We begin with structured onboarding and candidate profile review, define your target roles and markets, then complete a SWOT analysis before the application campaign starts.'],
  ['What is included?', 'Candidate onboarding, profile and SWOT analysis, job discovery, application tailoring and submission, application tracking, progress monitoring and interview preparation.'],
  ['Is $499 recurring?', 'No. $499 is a one-time launch price for the complete 3-month service. The standard price is $799 after the initial 15 launch slots.'],
  ['Do you guarantee an interview or job?', 'We do not guarantee employment or a job offer. If you complete the agreed service requirements and receive no qualifying interview invitation during the eligible service period, the interview refund guarantee may apply subject to the Terms.'],
  ['Which countries can you target?', 'We can support job searches across major international markets, including the United States, Canada, United Kingdom, Australia, Germany, Singapore, UAE, India and other agreed locations.'],
]

const blogPosts = [
  {category:'JOB SEARCH', title:'How to Find a Job Faster: A Practical Job Search Strategy', excerpt:'Build a focused search around your target role, profile, applications and interview pipeline instead of applying everywhere.', href:'/blog/how-to-find-a-job-faster'},
  {category:'INTERVIEWS', title:'How to Get More Job Interviews in a Competitive Market', excerpt:'Learn what can improve response rates, from positioning and role selection to tailored applications and follow-up.', href:'/blog/how-to-get-more-job-interviews'},
  {category:'APPLICATIONS', title:'Done-for-You Job Applications: What to Look For', excerpt:'Understand what a professional job application service should actually handle and what candidates should expect.', href:'/blog/done-for-you-job-application-service'},
  {category:'CAREER', title:'How Many Jobs Should You Apply to Each Week?', excerpt:'Quality, relevance and consistency matter more than sending hundreds of random applications.', href:'/blog/how-many-jobs-should-you-apply-to-each-week'},
  {category:'GLOBAL JOBS', title:'How to Search for Jobs in the USA From Abroad', excerpt:'A practical guide to targeting US employers, remote opportunities, relocation roles and international careers.', href:'/blog/how-to-search-for-jobs-in-the-usa'},
  {category:'CAREER STRATEGY', title:'Why Candidate Profile Analysis Matters Before Applying', excerpt:'Discover how a profile review can uncover positioning gaps, strengths and better-fit opportunities.', href:'/blog/why-candidate-profile-analysis-matters'},
  {category:'JOB SEARCH', title:'How to Do a SWOT Analysis for Your Job Search', excerpt:'Use strengths, weaknesses, opportunities and threats to make your career search more targeted.', href:'/blog/job-search-swot-analysis'},
  {category:'INTERVIEWS', title:'The Complete Job Interview Preparation Guide', excerpt:'Prepare for common questions, role-specific discussions and the final stage of the hiring process.', href:'/blog/job-interview-preparation-guide'},
  {category:'INTERNATIONAL', title:'How to Find Jobs in the UK, Canada and Australia', excerpt:'Compare international job-search approaches and build a practical overseas career strategy.', href:'/blog/international-job-search-uk-canada-australia'},
  {category:'CAREER CHANGE', title:'How to Change Careers Without Starting From Zero', excerpt:'Translate existing experience into a stronger career narrative and target transferable opportunities.', href:'/blog/how-to-change-careers'},
]

export default function Home() {
  return <main id="top">
    <header className="wrap nav"><a className="logo" href="#top">JobApply<span /></a><nav className="navlinks"><a href="#experience">How it works</a><a href="#resources">Career guides</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></nav><a className="btn btn-dark" href="#start">Start your search →</a></header>
    <InteractiveHome />

    <section id="resources" className="blog-preview-section"><div className="wrap"><div className="blog-preview-head"><div><div className="section-kicker">CAREER RESOURCES</div><h2>Practical guides for a better job search.</h2><p>Explore our latest advice on job applications, interviews, career strategy and international job searches.</p></div><a className="blog-all-link" href="/blog">View all guides →</a></div><div className="blog-preview-grid">{blogPosts.map((post,index)=><a className="blog-preview-card" href={post.href} key={post.href}><div className="blog-card-top"><span>{post.category}</span><b>0{index+1}</b></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-read">Read guide <span>↗</span></div></a>)}</div></div></section>

    <section id="offer" className="section faq-section"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">YOUR QUESTIONS</div><h2>Everything important, upfront.</h2></div><p>Clear answers before you start.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section id="faq" className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">12 OF 15 LAUNCH SLOTS LEFT · 3 FILLED</div><h2>Put your job search in motion.</h2><p><s>$799</s> → <strong>$499</strong> · 3 months · one payment</p><div className="actions center-actions"><a className="btn btn-dark" href="#start">Claim my launch slot →</a></div><small>After all 15 launch slots are filled, the price returns to $799.</small></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="footer-logo" href="#top">JobApply<span /></a><p>Managed job application support from candidate profile to interview.</p><div className="footer-badge">MANAGED CAREER SERVICE</div></div><div className="footer-col"><h4>Explore</h4><a href="#experience">How it works</a><a href="#resources">Career guides</a><a href="#offer">Pricing</a><a href="#faq">FAQ</a></div><div className="footer-col"><h4>Service</h4><a href="#service">Candidate analysis</a><a href="#experience">Interview preparation</a><a href="#service">Global job search</a></div><div className="footer-col"><h4>Legal</h4><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy</a><a href="mailto:hello@jobapply.com">Contact</a></div></div><div className="wrap footer-bottom"><span>© 2026 JobApply. All rights reserved.</span><span>3-month minimum · $499 launch offer · 12 of 15 slots left</span><span>Refund terms apply · No job offer guaranteed.</span></div></footer>
  </main>
}
