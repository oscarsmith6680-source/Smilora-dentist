import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Refund Policy | Oralsquad',
  description:
    'Oralsquad Dental refund, cancellation, and payment adjustment policy for dental services, deposits, and clinic fees in Melbourne.',
};

export default function RefundPolicyPage() {
  return (
    <PageShell
      title="Refund Policy"
      breadcrumb="Refund Policy"
    >
      <section className="float-left w-100 position-relative padding-bottom main-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="legal-content text-size-16 line-height-28">
                <p className="mb-4">
                  This Refund Policy explains how Oralsquad (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) approaches
                  payments, deposits, cancellations, and requests for credits or refunds for dental services at our
                  Melbourne clinic. It applies alongside our{' '}
                  <Link href="/terms-and-conditions" className="text-decoration-none">
                    Terms &amp; Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-decoration-none">
                    Privacy Policy
                  </Link>
                  . Dental care is a regulated health service; refunds are assessed fairly and in line with applicable
                  consumer and health law.
                </p>

                <h2 className="text-size-22 mb-3">Completed treatment and professional fees</h2>
                <p className="mb-4">
                  Fees charged reflect professional services, clinical time, materials, laboratory work, and
                  overheads that have been delivered or ordered on your behalf. Once treatment has been completed as
                  agreed, or where custom work (such as crowns, bridges, or appliances) has been fabricated to
                  specification, fees are generally not refundable. If you have concerns about the quality or outcome of
                  care, please contact us promptly so we can review your clinical records and discuss appropriate
                  remedial options in accordance with our professional obligations.
                </p>

                <h2 className="text-size-22 mb-3">Treatment plans, deposits, and staged care</h2>
                <p className="mb-4">
                  For multi-visit or high-value treatment plans, we may request a deposit or staged payments to secure
                  laboratory bookings, materials, or clinical time. Deposits are typically applied to your final
                  account. If you cancel elective treatment before work has commenced and no laboratory or material
                  costs have been incurred, we may refund or credit the deposit in full or in part. Where work has
                  already started, or where laboratories or suppliers charge cancellation or remake fees, those amounts
                  may be withheld from any refund or credit, and we will explain the basis at the time.
                </p>

                <h2 className="text-size-22 mb-3">Cancellations and failure to attend</h2>
                <p className="mb-4">
                  We reserve appointment time specifically for you. Late cancellation (typically less than 24–48
                  hours&apos; notice, as communicated by reception) or failure to attend without notice may result in a
                  cancellation or &quot;no-show&quot; fee, which reflects reserved clinical time and lost capacity to
                  treat other patients. Such fees are not &quot;refunds&quot; of treatment but charges as set out at
                  booking or in-clinic signage. We may waive fees at our discretion for genuine emergencies when you
                  contact us as soon as possible.
                </p>

                <h2 className="text-size-22 mb-3">Prepaid packages and account credits</h2>
                <p className="mb-4">
                  If we offer prepaid preventive or maintenance packages, the terms of each package (validity,
                  inclusions, transferability) are provided at purchase. Unused portions may be refunded or credited on a
                  case-by-case basis, minus any discount already applied or administrative costs we reasonably incur.
                  Account credits issued at our discretion remain non-transferable unless we agree otherwise in writing.
                </p>

                <h2 className="text-size-22 mb-3">Private health insurance and third-party payers</h2>
                <p className="mb-4">
                  Rebates and benefit amounts are determined by your fund or payer, not by Oralsquad. We cannot refund
                  insurer portions paid directly to you or to us on your behalf. If a claim is declined or adjusted
                  after treatment, any balance remains your responsibility unless we have agreed a specific arrangement
                  in advance.
                </p>

                <h2 className="text-size-22 mb-3">Card payments and chargebacks</h2>
                <p className="mb-4">
                  Where you pay by card, processing follows our bank and payment provider rules. If you dispute a charge,
                  we ask that you contact us first so we can address billing questions quickly. Unresolved disputes may
                  be handled through your financial institution; we will provide reasonable documentation to clarify
                  services provided where appropriate.
                </p>

                <h2 className="text-size-22 mb-3">How to request a review</h2>
                <p className="mb-4">
                  For any payment, credit, or refund query, contact reception with your name, date of visit, and a short
                  description of the issue. We aim to respond within a reasonable timeframe and, where a refund is
                  approved, to process it using the original payment method where practicable, subject to banking
                  timelines.
                </p>

                <h2 className="text-size-22 mb-3">Changes to this policy</h2>
                <p className="mb-4">
                  We may update this Refund Policy from time to time. The current version will always be available on
                  this page. Material changes will be reflected here; continued use of our services after updates
                  constitutes acceptance where permitted by law.
                </p>

                <h2 className="text-size-22 mb-3">Contact</h2>
                <p className="mb-0">
                  For billing or refund questions, contact Oralsquad:{' '}
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
