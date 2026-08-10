import InteractiveHome from './components/InteractiveHome'
import CalendlyBooking from './components/CalendlyBooking'
import ClientJourney from './components/ClientJourney'

const faqs = [
  ['Why is the service 3 months minimum?', 'A serious search needs time for onboarding, profile analysis, targeted applications, employer response and refinement. Three months gives the process enough runway to generate meaningful market feedback.'],
  ['What happens when I start?', 'You first book a consultation. We then review your candidate profile, target roles and market fit. Only suitable candidates are invited to proceed with the paid service.'],
  ['What is included?', 'Candidate onboarding, profile and SWOT analysis, job discovery, application tailoring and submission, application tracking, progress monitoring and interview preparation.'],
  ['Is $499 recurring?', 'No. $499 is a one-time launch price for the complete 3-month service. The standard price is $799 after the initial 15 qualifying launch slots.'],
  ['Do you guarantee an interview or job?', 'We do not guarantee employment or a job offer. If you complete the agreed service requirements and receive no qualifying interview invitation during the eligible service period, the interview refund guarantee may apply subject to the Terms.'],
  ['Which countries can you target?', 'We can support job searches across major international markets, including the United States, Canada, United Kingdom, Australia, Germany, Singapore, UAE, India and other agreed locations.'],
  ['Do I pay before you review my profile?', 'No. The intended journey is consultation → candidate review → suitability decision → payment → onboarding. We do not want someone to pay for a service that we do not believe is appropriate for their profile.'],
]

const blogPosts = [
  {category:'JOB SEARCH', title:'How to Find a Job Faster: A Practical Job Search Strategy', excerpt:'Build a focused search around your target role, profile, applications and interview pipeline.', href:'/blog/how-to-find-a-job-faster'},
  {category:'INTERVIEWS', title:'How to Get More Job Interviews in a Competitive Market', excerpt:'Improve response rates through positioning, role selection, tailored applications and follow-up.', href:'/blog/how-to-get-more-job-interviews'},
  {category:'APPLICATIONS', title:'Done-for-You Job Applications: What to Look For', excerpt:'What a professional job application service should actually handle for candidates.', href:'/blog/done-for-you-job-application-service'},
  {category:'CAREER', title:'How Many Jobs Should You Apply to Each Week?', excerpt:'Why relevance and consistency matter more than sending hundreds of random applications.', href:'/blog/how-many-jobs-should-you-apply-to-each-week'},
  {category:'GLOBAL JOBS', title:'How to Search for Jobs in the USA From Abroad', excerpt:'A practical approach to US employers, remote opportunities and relocation roles.', href:'/blog/how-to-search-for-jobs-in-the-usa'},
  {category:'CAREER STRATEGY', title:'Why Candidate Profile Analysis Matters Before Applying', excerpt:'Find positioning gaps, strengths and better-fit opportunities before the application campaign.', href:'/blog/why-candidate-profile-analysis-matters'},
  {category:'JOB SEARCH', title:'How to Do a SWOT Analysis for Your Job Search', excerpt:'Use strengths, weaknesses, opportunities and threats to target your search.', href:'/blog/job-search-swot-analysis'},
  {category:'INTERVIEWS', title:'The Complete Job Interview Preparation Guide', excerpt:'Prepare for common questions, role discussions and the final hiring stages.', href:'/blog/job-interview-preparation-guide'},
  {category:'INTERNATIONAL', title:'How to Find Jobs in the UK, Canada and Australia', excerpt:'Compare international job-search approaches and build an overseas career strategy.', href:'/blog/international-job-search-uk-canada-australia'},
  {category:'CAREER CHANGE', title:'How to Change Careers Without Starting From Zero', excerpt:'Turn existing experience into a stronger career narrative and target transferable roles.', href:'/blog/how-to-change-careers'},
]

function CareerResources(){
  return <section id="resources" className="blog-preview-section reveal-on-scroll"><div className="wrap"><div className="blog-preview-head"><div><div className="section-kicker">CAREER RESOURCES</div><h2>Insights to help you search smarter.</h2><p>Explore practical guides on job applications, interviews, career strategy and international job searches.</p></div><a className="blog-all-link" href="/blog">Explore all 10 guides →</a></div><div className="blog-preview-grid">{blogPosts.map((post,index)=><a className="blog-preview-card" href={post.href} key={post.href}><div className="blog-card-top"><span>{post.category}</span><b>{String(index+1).padStart(2,'0')}</b></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-read">Read guide <span>↗</span></div></a>)}</div></div></section>
}

export default function Home() {
  return <main id="top">
    <header className="wrap nav"><a className="logo" href="#top">JobApply<span /></a><nav className="navlinks"><a href="#journey">Your journey</a><a href="#experience">How it works</a><a href="#resources">Career guides</a><a href="#book-call">Book a call</a><a href="#faq">FAQ</a></nav><a className="btn btn-dark" href="#book-call">Book a consultation →</a></header>
    <InteractiveHome />
    <ClientJourney />
    <CareerResources />
    <CalendlyBooking />

    <section id="faq" className="section faq-section"><div className="wrap"><div className="sectionhead compact"><div><div className="section-kicker">YOUR QUESTIONS</div><h2>Everything important, upfront.</h2></div><p>Clear answers before you start.</p></div><div className="faqgrid">{faqs.map(([q,a])=><details className="faq" key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section className="wrap cta"><div className="ctabox"><div className="ctaeyebrow">12 OF 15 LAUNCH SLOTS LEFT · 3 FILLED</div><h2>Start with a conversation, not a payment.</h2><p>Consultation → profile review → suitability decision → payment → onboarding → managed applications → interview support.</p><div className="actions center-actions"><a className="btn btn-dark" href="#book-call">Book a consultation →</a></div><small>After all 15 qualifying launch slots are filled, the price returns to $799.</small></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="footer-logo" href="#top">JobApply<span /></a><p>Managed job application support from candidate profile to interview.</p><div className="footer-badge">MANAGED CAREER SERVICE</div></div><div className="footer-col"><h4>Explore</h4><a href="#experience">How it works</a><a href="#journey">Your journey</a><a href="#resources">Career guides</a><a href="#book-call">Book a call</a><a href="#faq">FAQ</a></div><div className="footer-col"><h4>Service</h4><a href="#service">Candidate analysis</a><a href="#experience">Interview preparation</a><a href="#service">Global job search</a></div><div className="footer-col"><h4>Legal</h4><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy</a><a href="mailto:hello@jobapply.com">Contact</a></div></div><div className="wrap footer-bottom"><span>© 2026 JobApply. All rights reserved.</span><span>3-month minimum · $499 launch offer · 12 of 15 slots left</span><span>Refund terms apply · No job offer guaranteed.</span></div></footer>
  </main>
}
