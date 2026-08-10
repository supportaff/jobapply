const steps = [
  ['01', 'Book a consultation', 'Choose a time through Calendly and tell us about your target role, market and career goals.'],
  ['02', 'Candidate review', 'We review your CV, experience, target roles, locations and overall market fit.'],
  ['03', 'Suitability decision', 'If we believe we can genuinely support your search, we invite you to proceed. If not, we do not take on the campaign.'],
  ['04', 'Secure payment', 'Approved candidates receive the payment instructions for the agreed 3-month service and launch price, when applicable.'],
  ['05', 'Onboarding & SWOT', 'We complete detailed onboarding and a structured SWOT analysis before applications begin.'],
  ['06', 'Managed search', 'We discover relevant opportunities, tailor and submit applications, track responses and refine the search.'],
  ['07', 'Interview support', 'When interviews arrive, we help you prepare for the role, questions and hiring process.'],
  ['08', 'End-of-service review', 'At the end of the 3-month period, we review the campaign and apply the interview refund terms where eligible.'],
]

export default function ClientJourney() {
  return <section className="client-journey reveal-on-scroll" id="journey">
    <div className="wrap">
      <div className="journey-heading">
        <div><div className="section-kicker">YOUR JOURNEY</div><h2>From first conversation to interview.</h2></div>
        <p>You are not paying first and hoping later. We qualify the profile before the application campaign begins.</p>
      </div>
      <div className="journey-grid">{steps.map(([number,title,text]) => <article className="journey-step interactive-card" key={number}>
        <div className="journey-number">{number}</div><div><h3>{title}</h3><p>{text}</p></div>
      </article>)}</div>
      <div className="journey-note"><strong>Important:</strong> The $499 launch price is available only to qualifying candidates within the first 15 launch slots. A consultation and suitability review are required before the service is accepted.</div>
    </div>
  </section>
}
