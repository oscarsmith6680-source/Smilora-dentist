import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Privacy Policy | Smilora',
  description:
    'How Smilora Dental collects, uses, stores, and protects personal and health information for patients and website visitors in Melbourne.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      breadcrumb="Privacy Policy"
    >
      <section className="float-left w-100 position-relative padding-bottom main-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="legal-content text-size-16 line-height-28">
                <p className="mb-4">
                Smilora ("we", "us", "our") is a dental clinic providing general and specialist dental care in Melbourne, Australia. This Privacy Policy explains how we handle personal information and health information when you visit smilora.com, contact us, book an appointment, or receive treatment at our practice. By using our website or our services, you acknowledge this Policy.
                </p>

                <h2 className="text-size-22 mb-3">Information we collect</h2>
                <p className="mb-4">
                  <strong>Contact and identity details:</strong> name, phone number, email address, date of birth, and
                  emergency contact details you provide when you enquire online, register as a patient, or update your
                  details with reception.
                </p>
                <p className="mb-4">
                  <strong>Appointment and administrative information:</strong> preferred appointment times, referral
                  letters, insurance or funding details you choose to give us, and records of attendance, billing, and
                  correspondence related to your care.
                </p>
                <p className="mb-4">
                  <strong>Health information:</strong> dental and medical history, examination findings, diagnostic
                  images (such as X-rays where clinically indicated), treatment plans, notes from consultations, and
                  other information needed to provide safe dental care. This may come from you, your referring
                  practitioner, or past treating providers where you authorise us to obtain it.
                </p>
                <p className="mb-4">
                  <strong>Website and technical data:</strong> when you browse our site we may collect information
                  such as IP address, device type, browser, pages viewed, and approximate location derived from IP. We use
                  this to operate and improve the website, maintain security, and understand how visitors use our
                  content. Where we use cookies or similar technologies, we do so as described in this Policy and you
                  may manage preferences through your browser settings where applicable.
                </p>

                <h2 className="text-size-22 mb-3">How we use information</h2>
                <p className="mb-4">
                  We use personal and health information to provide dental services you request, coordinate
                  appointments and follow-up, prepare treatment plans and quotes, process payments, communicate with you
                  about your care (including reminders where you have agreed to receive them), maintain accurate
                  patient records, meet infection-control and clinical governance requirements, and comply with laws
                  that apply to registered dental practitioners and healthcare providers in Australia.
                </p>
                <p className="mb-4">
                  We do not sell your personal information. We may use de-identified or aggregated data for internal
                  reporting, quality improvement, or training, where permitted by law.
                </p>

                <h2 className="text-size-22 mb-3">Appointments, enquiries, and marketing</h2>
                <p className="mb-4">
                  If you submit a contact or booking form, email us, or call the clinic, we use your details to respond
                  and to manage your appointment. With your consent, we may send you occasional information relevant to
                  your oral health or our services (for example, recall reminders). You can opt out of non-essential
                  messages at any time using the instructions in the message or by contacting us.
                </p>

                <h2 className="text-size-22 mb-3">Disclosure of information</h2>
                <p className="mb-4">
                  We may share information with other healthcare providers involved in your care (such as specialists or
                  laboratories) when you have consented or when clinically necessary. We may disclose information to
                  insurers, payment processors, or professional advisers only as needed to administer your account or
                  meet legal obligations. We may also disclose information if required by law, court order, or regulatory
                  authority.
                </p>

                <h2 className="text-size-22 mb-3">Data security and retention</h2>
                <p className="mb-4">
                  We take reasonable technical and organisational measures to protect personal and health information
                  against unauthorised access, loss, or misuse, including secure storage of clinical records and
                  controlled access within our team. Health records are retained in line with professional and legal
                  requirements applicable to dental practices in Australia. When information is no longer needed for
                  care or legal purposes, we destroy or de-identify it where appropriate.
                </p>
                <p className="mb-4">
                  No transmission over the internet is completely secure. Please use official channels on our website
                  or contact the clinic directly for sensitive matters.
                </p>

                <h2 className="text-size-22 mb-3">Access, correction, and complaints</h2>
                <p className="mb-4">
                  You may request access to the personal information we hold about you, or ask us to correct inaccurate
                  details, subject to exceptions under applicable privacy law. If you have concerns about how we handle
                  your information, please contact us first using the details below. You may also complain to the
                  Office of the Australian Information Commissioner (OAIC) if you believe we have breached the
                  Australian Privacy Principles.
                </p>

                <h2 className="text-size-22 mb-3">Changes to this policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. The revised version will be posted on this page
                  with an updated effective date where appropriate. Continued use of our website or services after
                  changes constitutes notice of the update, where permitted by law.
                </p>

                <h2 className="text-size-22 mb-3">Contact</h2>
                <p className="mb-0">
                  For privacy questions, access requests, or complaints, contact Smilora:{' '}
                  <a href="mailto:info@smilora.com" className="text-decoration-none">
                    info@smilora.com
                  </a>
                  , phone{' '}
                  <a href="tel:+61383766284" className="text-decoration-none">
                    +61 3 8376 6284
                  </a>
                  , or visit our{' '}
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
