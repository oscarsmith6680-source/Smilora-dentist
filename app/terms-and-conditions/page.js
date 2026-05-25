import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Terms & Conditions | Oralsquad',
  description:
    'Terms and conditions for using Oralsquad Dental website and services, appointments, fees, and patient responsibilities in Melbourne.',
};

export default function TermsAndConditionsPage() {
  return (
    <PageShell
      title="Terms & Conditions"
      breadcrumb="Terms & Conditions"
    >
      <section className="float-left w-100 position-relative padding-bottom main-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="legal-content text-size-16 line-height-28">
                <p className="mb-4">
                  These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the website at{' '}
                  <strong>Oralsquad.com</strong> and your relationship with Oralsquad (&quot;we&quot;, &quot;us&quot;,
                  &quot;our&quot;), a dental clinic located in Melbourne, Australia. By accessing our website, booking
                  an appointment, or attending our practice, you agree to these Terms together with our{' '}
                  <Link href="/privacy-policy" className="text-decoration-none">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/refund-policy" className="text-decoration-none">
                    Refund Policy
                  </Link>
                  . If you do not agree, please do not use our website or services.
                </p>

                <h2 className="text-size-22 mb-3">Services and information</h2>
                <p className="mb-4">
                  Oralsquad provides general and specialist dental care, including preventive, restorative, cosmetic, and
                  related services as described on our website and discussed with you in person. Website content is for
                  general information only and does not replace a clinical examination or personalised advice. Treatment
                  suitability, alternatives, risks, and costs are confirmed at consultation.
                </p>

                <h2 className="text-size-22 mb-3">Appointments and attendance</h2>
                <p className="mb-4">
                  When you book an appointment, you agree to provide accurate contact details and to arrive on time with
                  any information we reasonably request (for example, referral letters or medication lists). If you need
                  to cancel or reschedule, please give us as much notice as possible so we can offer the time to other
                  patients. Repeated late cancellations or failure to attend without notice may affect future booking
                  options or attract fees as set out in our{' '}
                  <Link href="/refund-policy" className="text-decoration-none">
                    Refund Policy
                  </Link>
                  .
                </p>

                <h2 className="text-size-22 mb-3">Fees, estimates, and payment</h2>
                <p className="mb-4">
                  Fees depend on the treatment provided, materials used, and complexity. We aim to give clear estimates
                  and itemised quotes where appropriate before commencing elective treatment. You are responsible for
                  payment of fees for services rendered unless another arrangement (such as a payment plan or insurer
                  rules) has been agreed in writing. Co-payments, gaps, and exclusions under private health insurance or
                  third-party schemes are your responsibility unless we confirm otherwise.
                </p>

                <h2 className="text-size-22 mb-3">Consent and clinical care</h2>
                <p className="mb-4">
                  Dental treatment requires your informed consent. We will explain proposed procedures, reasonable
                  alternatives, material risks, and costs so you can make an informed decision. You may withdraw consent
                  or refuse treatment, except where emergency care is required to prevent serious harm. You agree to
                  disclose accurate medical and dental history and to follow reasonable post-operative or home-care
                  instructions to support safe outcomes.
                </p>

                <h2 className="text-size-22 mb-3">Website use</h2>
                <p className="mb-4">
                  You may use our website for lawful purposes only. You must not attempt to interfere with the security
                  or operation of the site, scrape content for commercial use without permission, or submit false or
                  misleading information through forms. We may suspend or restrict access where we reasonably believe
                  these Terms have been breached.
                </p>

                <h2 className="text-size-22 mb-3">Limitation of liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by Australian law, we exclude liability for loss arising from your use
                  of the website (including reliance on general information) except where liability cannot be excluded
                  (such as under the Australian Consumer Law). Nothing in these Terms limits our liability for death or
                  personal injury caused by negligence, fraud, or other liability that cannot lawfully be limited. Clinical
                  concerns should be raised with us directly so we can review your care appropriately.
                </p>

                <h2 className="text-size-22 mb-3">Intellectual property</h2>
                <p className="mb-4">
                  Text, images, logos, and other content on this website are owned by or licensed to Oralsquad and are
                  protected by copyright and trade mark laws. You may not copy, reproduce, or distribute site content for
                  commercial use without our prior written consent.
                </p>

                <h2 className="text-size-22 mb-3">Changes</h2>
                <p className="mb-4">
                  We may update these Terms from time to time. The current version will be published on this page.
                  Continued use of the website or our services after changes constitutes your acceptance of the revised
                  Terms, where permitted by law.
                </p>

                <h2 className="text-size-22 mb-3">Governing law</h2>
                <p className="mb-4">
                  These Terms are governed by the laws of Victoria, Australia. You submit to the non-exclusive
                  jurisdiction of the courts of that State.
                </p>

                <h2 className="text-size-22 mb-3">Contact</h2>
                <p className="mb-0">
                  For questions about these Terms, contact Oralsquad:{' '}
                  <a href="mailto:info@Oralsquad.com" className="text-decoration-none">
                    info@Oralsquad.com
                  </a>
                  , phone{' '}
                  <a href="tel:+61383766284" className="text-decoration-none">
                    +61 3 8376 6284
                  </a>
                  , or our{' '}
                  <Link href="/contact" className="text-decoration-none">
                    Contact
                  </Link>{' '}
                  page. Practice address: 551 Swanston Street, Melbourne Victoria 3053, Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
