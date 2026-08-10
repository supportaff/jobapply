export default function CalendlyBooking() {
  return (
    <section id="book-call" className="calendly-section reveal-on-scroll">
      <style>{`.calendly-section{padding:110px 0;background:#f7f8f3}.calendly-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:36px}.calendly-heading h2{font-size:clamp(42px,5vw,72px);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px;max-width:760px}.calendly-heading p{max-width:650px;color:#69716b;font-size:17px;line-height:1.65;margin:0}.calendly-direct{flex:0 0 auto}.calendly-frame-wrap{background:#fff;border:1px solid #dedfd9;border-radius:28px;overflow:hidden;box-shadow:0 24px 70px rgba(18,24,18,.08);min-height:760px}.calendly-frame{display:block;width:100%;height:760px;border:0;background:#fff}@media(max-width:700px){.calendly-section{padding:72px 0}.calendly-heading{display:block;margin-bottom:24px}.calendly-heading h2{font-size:42px}.calendly-heading p{font-size:16px}.calendly-direct{display:inline-flex;margin-top:22px}.calendly-frame-wrap{border-radius:20px;min-height:720px}.calendly-frame{height:720px}}@media(max-width:380px){.calendly-heading h2{font-size:36px}.calendly-frame-wrap{border-radius:16px}.calendly-frame{height:700px}}`}</style>
      <div className="wrap">
        <div className="calendly-heading">
          <div>
            <div className="section-kicker">BOOK A CALL</div>
            <h2>Let's talk about your job search.</h2>
            <p>Have questions before you start? Choose a convenient time for a consultation and discuss your target roles, markets and how the managed service works.</p>
          </div>
          <a className="btn btn-dark calendly-direct" href="https://calendly.com/prakash-cyberinfosec" target="_blank" rel="noopener noreferrer">Open booking page ↗</a>
        </div>
        <div className="calendly-frame-wrap"><iframe src="https://calendly.com/prakash-cyberinfosec?hide_gdpr_banner=1" title="Book a JobApply consultation" className="calendly-frame" loading="lazy" /></div>
      </div>
    </section>
  )
}
