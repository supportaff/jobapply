export default function CalendlyBooking() {
  return (
    <section id="book-call" className="calendly-section reveal-on-scroll">
      <div className="wrap">
        <div className="calendly-heading">
          <div>
            <div className="section-kicker">BOOK A CALL</div>
            <h2>Let's talk about your job search.</h2>
            <p>Have questions before you start? Choose a convenient time for a consultation and discuss your target roles, markets and how the managed service works.</p>
          </div>
          <a className="btn btn-dark calendly-direct" href="https://calendly.com/prakash-cyberinfosec" target="_blank" rel="noopener noreferrer">Open booking page ↗</a>
        </div>
        <div className="calendly-frame-wrap">
          <iframe
            src="https://calendly.com/prakash-cyberinfosec?hide_gdpr_banner=1"
            title="Book a JobApply consultation"
            className="calendly-frame"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
