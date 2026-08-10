import Script from 'next/script'

export default function CalendlyBooking() {
  return (
    <section id="book-call" className="calendly-section reveal-on-scroll">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <style>{`.calendly-section{padding:110px 0;background:#f7f7f3}.calendly-heading{margin-bottom:36px}.calendly-heading h2{font-size:clamp(42px,5vw,72px);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px;max-width:760px}.calendly-heading p{max-width:650px;color:#69716b;font-size:17px;line-height:1.65;margin:0}.calendly-frame-wrap{background:#fff;border:1px solid #dedfd9;border-radius:28px;overflow:hidden;box-shadow:0 24px 70px rgba(18,24,18,.08);min-height:700px}.calendly-inline-widget{width:100%;min-width:320px;height:700px}@media(max-width:700px){.calendly-section{padding:72px 0}.calendly-heading{margin-bottom:24px}.calendly-heading h2{font-size:42px}.calendly-heading p{font-size:16px}.calendly-frame-wrap{border-radius:20px;min-height:700px}.calendly-inline-widget{height:700px}}@media(max-width:380px){.calendly-heading h2{font-size:36px}.calendly-frame-wrap{border-radius:16px}.calendly-inline-widget{height:700px}}`}</style>
      <div className="wrap">
        <div className="calendly-heading">
          <div>
            <div className="section-kicker">BOOK A CALL</div>
            <h2>Let's talk about your job search.</h2>
            <p>Choose a convenient time for a consultation and discuss your target roles, markets and how the managed service works.</p>
          </div>
        </div>
        <div className="calendly-frame-wrap">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/prakash-cyberinfosec?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=f7f7f3&text_color=101411&primary_color=c7ff3d"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  )
}
