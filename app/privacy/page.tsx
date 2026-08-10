import Link from 'next/link'

export default function Privacy() {
  return <main>
    <header className="wrap nav"><Link className="logo" href="/">JobApply<span /></Link><Link className="btn btn-dark" href="/">Back to JobApply</Link></header>
    <section className="wrap legal">
      <article>
        <h1>Privacy Policy</h1>
        <div className="updated">Last updated: August 10, 2026</div>
        <p>This Privacy Policy explains how JobApply may collect, use, store and share information when you visit our website or use our job application service.</p>

        <h2>1. Information we collect</h2>
        <p>Depending on how you use the service, we may collect your name, email address, phone number, resume and CV information, employment history, education, skills, target roles, location preferences, compensation expectations, application history, interview details and information you voluntarily provide for the purpose of the service.</p>
        <p>We may also collect basic website usage information such as device, browser, approximate location, pages viewed and technical logs.</p>

        <h2>2. How we use information</h2>
        <ul><li>To provide and manage the JobApply service.</li><li>To identify relevant job opportunities.</li><li>To prepare and submit applications as authorized by you.</li><li>To track applications and interview progress.</li><li>To communicate with you about the service.</li><li>To schedule consultations and onboarding calls.</li><li>To process payments, refunds and customer support requests.</li><li>To maintain security, prevent abuse and improve the website and service.</li></ul>

        <h2>3. Job application information</h2>
        <p>Information from your resume and profile may need to be shared with employers, recruiters, job platforms and applicant tracking systems when you authorize or request applications to be submitted. We only intend to share information reasonably necessary for the application or service.</p>

        <h2>4. Calendly and payment providers</h2>
        <p>We use Calendly to schedule consultations and onboarding calls. When you book a meeting, information required to schedule and manage the meeting may be processed by Calendly.</p>
        <p>For accepted candidates, we use Dodo Payments to create and process secure payment checkouts. Dodo Payments may process payment, billing and customer information necessary to complete the transaction, issue payment records and handle refunds or payment-related support. JobApply does not receive or store your full card number.</p>

        <h2>5. Other third-party services</h2>
        <p>The website and service may also rely on third-party providers for hosting, analytics, email, job platforms, applicant tracking systems and other operational functions. Those providers may process information according to their own privacy policies and terms.</p>

        <h2>6. Data security</h2>
        <p>We use reasonable administrative, technical and organizational measures intended to protect information. However, no internet transmission or storage system can be guaranteed to be completely secure.</p>

        <h2>7. Data retention</h2>
        <p>We retain information for as long as reasonably necessary to provide the service, maintain business and financial records, resolve disputes, enforce agreements and meet legal or regulatory obligations. We may delete or anonymize information when it is no longer reasonably required.</p>

        <h2>8. Your choices</h2>
        <p>You may contact us to request access, correction or deletion of personal information, subject to applicable law and legitimate business or legal retention requirements. You may also ask us to stop using information for a particular optional purpose.</p>

        <h2>9. Cookies and analytics</h2>
        <p>We may use cookies or similar technologies for essential website functionality, analytics and performance. You can manage certain cookie settings through your browser. Disabling cookies may affect some website functionality.</p>

        <h2>10. Children's privacy</h2>
        <p>JobApply is intended for adults seeking employment and is not directed to children. We do not knowingly collect personal information from children.</p>

        <h2>11. International processing</h2>
        <p>Your information may be processed in countries other than the country where you live, depending on the providers used to operate the service. Where required, we will take appropriate steps for lawful international data transfers.</p>

        <h2>12. Policy changes</h2>
        <p>We may update this Privacy Policy as the service changes or as legal requirements develop. The updated version will be posted on this page with a new revision date.</p>

        <h2>13. Contact</h2>
        <p>For privacy questions or requests, contact the JobApply team using the contact details published on the website.</p>
        <p><strong>Important:</strong> This policy is a general starting point and should be reviewed by a qualified privacy lawyer for your operating jurisdictions, data flows and payment/application providers before launch.</p>
      </article>
    </section>
    <footer className="wrap footer"><div>© 2026 JobApply. All rights reserved.</div><div><Link href="/terms">Terms</Link> · <Link href="/">Home</Link></div></footer>
  </main>
}
