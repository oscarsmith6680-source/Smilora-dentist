'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: 'fa-solid fa-shield-heart',
    title: 'Catch Problems Early',
    desc: 'Routine exams help spot decay, gum changes, and wear before they become painful or require complex treatment.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Protect Teeth and Gums',
    desc: 'Professional cleaning removes hardened plaque and surface stains, supporting healthier gums and fresher breath.',
  },
  {
    icon: 'fa-solid fa-user-group',
    title: 'Care for Every Age',
    desc: 'Preventive visits are tailored to children, teens, adults, and seniors — with guidance that fits your stage of life.',
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'A Plan That Fits You',
    desc: 'We personalise recall timing and home-care tips based on your risk level, habits, and oral health goals.',
  },
  {
    icon: 'fa-solid fa-piggy-bank',
    title: 'Smarter Long-Term Value',
    desc: 'Staying ahead with prevention often means simpler, smaller treatments over time — and fewer surprises.',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Confidence in Your Routine',
    desc: 'You will leave knowing what is healthy, what to watch for, and how to keep your smile stable between visits.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Medical & Dental Review',
    desc: 'We review your health history, medications, and any symptoms so your visit is safe, comfortable, and aligned with your needs.',
  },
  {
    number: '02',
    title: 'Comprehensive Oral Exam',
    desc: 'Teeth, gums, bite, and soft tissues are checked methodically, with attention to early signs that are easy to miss at home.',
  },
  {
    number: '03',
    title: 'Diagnostic Imaging (If Needed)',
    desc: 'Digital X-rays are taken when clinically appropriate to see between teeth and below the gumline — not on a one-size-fits-all schedule.',
  },
  {
    number: '04',
    title: 'Professional Cleaning',
    desc: 'Plaque and tartar are removed gently, surfaces are polished where suitable, and your hygienist notes areas to focus on at home.',
  },
  {
    number: '05',
    title: 'Preventive Treatments & Advice',
    desc: 'Fluoride, sealants, or other preventive steps may be recommended for children or high-risk patients, plus clear coaching you can follow.',
  },
  {
    number: '06',
    title: 'Your Next Steps & Recall Plan',
    desc: 'We summarise findings in plain language, answer questions, and book your next visit based on your individual risk — not a generic calendar.',
  },
];

const WHY_CHOOSE = [
  {
    icon: 'fa-solid fa-user-doctor',
    title: 'Dentist-Led Prevention',
    desc: 'Your care is directed by experienced clinicians who focus on long-term oral health — not quick fixes.',
  },
  {
    icon: 'fa-solid fa-microscope',
    title: 'Thoughtful Diagnostics',
    desc: 'We use modern examination methods and imaging when needed, so decisions are based on what we can see — and what you can understand.',
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Early Intervention Mindset',
    desc: 'Small issues are addressed while they are still small, which typically means gentler treatment and easier recovery.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Clear, Supportive Guidance',
    desc: 'We explain your results without jargon and give practical tips you can actually stick to between appointments.',
  },
];

const FAQS = [
  {
    id: 'pc-faq-1',
    q: 'How often should I come in for preventive care?',
    a: 'Many patients do well with a checkup and clean every six months. If you have gum disease risk, frequent decay, or other concerns, we may suggest a shorter interval until things stabilise.',
  },
  {
    id: 'pc-faq-2',
    q: 'Do I still need a visit if nothing hurts?',
    a: 'Often, yes. Cavities and gum problems can develop quietly. Preventive appointments help catch changes early — usually before discomfort starts.',
  },
  {
    id: 'pc-faq-3',
    q: 'What happens during a typical preventive visit?',
    a: 'You can expect an exam, professional cleaning tailored to your needs, and a conversation about your home routine. X-rays or extra preventive services are added only when clinically appropriate.',
  },
  {
    id: 'pc-faq-4',
    q: 'Can preventive care help children and teens?',
    a: 'Absolutely. We focus on age-appropriate exams, hygiene coaching, fluoride when indicated, and sealants for high-risk grooves — all explained in a calm, friendly way.',
  },
];

/* ─────────────────────────────────────────────
   ANIMATION HELPER
───────────────────────────────────────────── */
function FadeSlide({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const initial =
    direction === 'up'
      ? { y: 40, opacity: 0 }
      : direction === 'left'
        ? { x: -50, opacity: 0 }
        : direction === 'right'
          ? { x: 50, opacity: 0 }
          : { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`tw-section-header ${center ? 'text-center' : ''}`}>
      <span className="special-text d-inline-block">{eyebrow}</span>
      <h2 className="text-size-46" dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className="tw-section-header__sub">{subtitle}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   1 — SERVICE OVERVIEW (redesigned)
───────────────────────────────────────────── */
function OverviewSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <div className="padding-rl float-left w-100">
      <section ref={ref} className="tw-overview float-left w-100 padding-top padding-bottom">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* ── LEFT: Image stack ── */}
            <motion.div
              className="col-lg-6"
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="tw-overview__img-wrap position-relative">
                <figure className="tw-overview__img-main mb-0">
                  <img
                    src="/assets/images/dental-services-img1.jpg"
                    alt="Dental checkup and professional teeth cleaning"
                    className="img-fluid tw-overview__img-main-img"
                  />
                </figure>
                {/* Floating stat card */}
                <div className="tw-overview__stat-card">
                  <div className="tw-overview__stat-icon"><i className="fa-solid fa-tooth" aria-hidden /></div>
                  <div>
                    <strong className="tw-overview__stat-title">Gentle &amp; Thorough</strong>
                    <span className="tw-overview__stat-sub">Checkups &amp; Cleans</span>
                  </div>
                </div>
                <figure className="tw-overview__img-float mb-0">
                  <img
                    src="/assets/images/dental-services-img2.jpg"
                    alt="Dentist examination and oral hygiene care"
                    className="img-fluid tw-overview__img-float-img"
                  />
                </figure>
              </div>
            </motion.div>

            {/* ── RIGHT: Text content ── */}
            <motion.div
              className="col-lg-6"
              initial={{ x: 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="tw-ov-content">

                {/* Eyebrow pill */}
                <div className="tw-ov-eyebrow">
                  <span className="tw-ov-eyebrow__dot" aria-hidden />
                  <span className="tw-ov-eyebrow__text">Preventive Dentistry</span>
                </div>

                {/* Main heading */}
                <h2 className="tw-ov-heading">
                Preventive Care for a Healthy Smile
                  
                </h2>

                {/* Single paragraph */}
                <p className="tw-ov-para">
                  Preventive care at Smilora focuses on regular checkups, professional cleaning, and
                  early detection. Our team helps you maintain strong teeth and healthy gums with
                  clear guidance you can follow between visits — so small issues stay small.
                </p>

                {/* 2 Feature cards */}
                <div className="tw-ov-features">
                  <motion.div
                    className="tw-ov-feature"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.38 }}
                  >
                    <div className="tw-ov-feature__icon-box">
                      <i className="fa-solid fa-bolt" aria-hidden />
                    </div>
                    <div className="tw-ov-feature__text">
                      <strong className="tw-ov-feature__title">Stay Ahead of Problems</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        Routine visits help spot changes early — often before you notice symptoms at home.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="tw-ov-feature"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.52 }}
                  >
                    <div className="tw-ov-feature__icon-box tw-ov-feature__icon-box--alt">
                      <i className="fa-solid fa-user-doctor" aria-hidden />
                    </div>
                    <div className="tw-ov-feature__text">
                      <strong className="tw-ov-feature__title">Support for the Whole Family</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        From first visits to adult maintenance, we tailor prevention to each stage of life.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA row */}
                <motion.div
                  className="tw-ov-cta"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.66 }}
                >
                  <Link href="/contact" className="text-decoration-none primary_btn d-inline-block">
                    Book a Preventive Visit
                    <span>
                      <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                    </span>
                  </Link>
                  <p className="tw-ov-cta__note mb-0">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> Friendly, no-pressure guidance
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2 — BENEFITS
───────────────────────────────────────────── */
function BenefitsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="tw-benefits float-left w-100 padding-top padding-bottom main-box">
        <div className="container">
          <FadeSlide delay={0}>
            <SectionHeader
              eyebrow="Why It Works"
              title="Benefits of <br/> Preventive Care"
              subtitle="Consistent prevention helps protect your teeth and gums, supports fresher breath, and keeps treatment simpler over time."
            />
          </FadeSlide>
          <div className="row g-4 mt-3 mb-2">
            {BENEFITS.map((b, i) => (
              <div className="col-lg-4 col-md-6 d-flex mb-2" key={b.title}>
                <motion.div
                  className="tw-benefit-card w-100"
                  initial={{ y: 40, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="tw-benefit-card__icon-wrap">
                    <i className={b.icon} aria-hidden />
                  </div>
                  <h3 className="text-size-20 tw-benefit-card__title">{b.title}</h3>
                  <p className="tw-benefit-card__desc mb-0">{b.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3 — PROCESS / STEPS
───────────────────────────────────────────── */
function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="tw-process float-left w-100 padding-top padding-bottom">
        <div className="container">
          <FadeSlide delay={0}>
            <SectionHeader
              eyebrow="How It Works"
              title="Your Preventive Visit, <br/> Step by Step"
              subtitle="Each appointment follows a calm, structured approach so you always know what is happening — and why it matters."
            />
          </FadeSlide>
          <div className="row g-4 mt-3 mb-2">
            {STEPS.map((step, i) => (
              <div className="col-lg-4 col-md-6 d-flex mb-2" key={step.number}>
                <motion.div
                  className="tw-step-card w-100"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                >
                  <span className="tw-step-card__num">{step.number}</span>
                  <h3 className="text-size-20 tw-step-card__title">{step.title}</h3>
                  <p className="tw-step-card__desc mb-0">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4 — WHY CHOOSE US
───────────────────────────────────────────── */
function WhyChooseSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="tw-why float-left w-100 padding-top padding-bottom main-box">
        <div className="container">
          <div className="row g-5 align-items-center">
            <motion.div
              className="col-lg-5"
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="heading-title-con mb-0">
                <span className="special-text d-inline-block">Smilora Difference</span>
                <h2 className="text-size-46">
                  Why Patients Choose <br /> Smilora for Prevention
                </h2>
                <p className="mb-4">
                  Prevention works best when it feels consistent, understandable, and supportive.
                  At Smilora, we combine careful clinical checks with practical coaching so you can
                  maintain a healthy mouth with confidence.
                </p>
                <Link href="/contact" className="text-decoration-none primary_btn d-inline-block tw-why__btn">
                  Schedule a Consultation
                  <span>
                    <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-7"
              initial={{ x: 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="row g-4">
                {WHY_CHOOSE.map((item, i) => (
                  <div className="col-md-6 d-flex mb-2" key={item.title}>
                    <motion.div
                      className="tw-why-card w-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <div className="tw-why-card__icon-wrap">
                        <i className={item.icon} aria-hidden />
                      </div>
                      <h4 className="text-size-18 tw-why-card__title">{item.title}</h4>
                      <p className="tw-why-card__desc mb-0">{item.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5 — ADDITIONAL INFO (Expectations & Safety)
───────────────────────────────────────────── */
function InfoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="tw-info float-left w-100 padding-top padding-bottom">
        <div className="container">
          <FadeSlide delay={0}>
            <SectionHeader
              eyebrow="What to Know"
              title="Before, During &amp; <br/> After Your Visit"
              subtitle="A little preparation helps your appointment feel smooth — and helps you get the most from your preventive care."
            />
          </FadeSlide>
          <div className="row g-4 mt-2">
            {/* Preparation */}
            <div className="col-lg-4 col-md-6">
              <motion.div
                className="tw-info-card"
                initial={{ y: 35, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="tw-info-card__header">
                  <i className="fa-solid fa-calendar-check tw-info-card__header-icon" aria-hidden />
                  <h3 className="text-size-20 tw-info-card__heading">Before Your Visit</h3>
                </div>
                <ul className="tw-info-card__list list-unstyled p-0 mb-0">
                  <li><i className="fa-solid fa-check" aria-hidden /> Brush and floss before your appointment</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Note any bleeding, sensitivity, or sore spots</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mention medical updates or new medications</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Bring insurance or referral details if applicable</li>
                </ul>
              </motion.div>
            </div>
            {/* During */}
            <div className="col-lg-4 col-md-6">
              <motion.div
                className="tw-info-card tw-info-card--accent"
                initial={{ y: 35, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="tw-info-card__header">
                  <i className="fa-solid fa-tooth tw-info-card__header-icon" aria-hidden />
                  <h3 className="text-size-20 tw-info-card__heading">During Your Visit</h3>
                </div>
                <ul className="tw-info-card__list list-unstyled p-0 mb-0">
                  <li><i className="fa-solid fa-check" aria-hidden /> We explain each step before we begin</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Your exam and cleaning are tailored to your comfort</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> We share findings in plain, patient-friendly language</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Ask questions anytime — we are here to help</li>
                </ul>
              </motion.div>
            </div>
            {/* After */}
            <div className="col-lg-4 col-md-6">
              <motion.div
                className="tw-info-card"
                initial={{ y: 35, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="tw-info-card__header">
                  <i className="fa-solid fa-star tw-info-card__header-icon" aria-hidden />
                  <h3 className="text-size-20 tw-info-card__heading">After Your Visit</h3>
                </div>
                <ul className="tw-info-card__list list-unstyled p-0 mb-0">
                  <li><i className="fa-solid fa-check" aria-hidden /> Follow the home-care tips discussed in-clinic</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mild tenderness after a deep clean can be normal briefly</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Contact us if pain persists or swelling develops</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Keep your recall appointment for ongoing protection</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="tw-faq-section">
            <FadeSlide delay={0}>
              <div className="tw-faq-section__header text-center">

                <h3 className="text-size-36 tw-faq__heading">Frequently Asked Questions</h3>
                <p className="tw-faq-section__sub">Everything you need to know before booking your preventive care appointment.</p>
              </div>
            </FadeSlide>
            <div className="tw-faq-grid">
              {FAQS.map((faq) => (
                <TwFaqItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TwFaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`tw-faq__card ${open ? 'tw-faq__card--open' : ''}`}>
      <button
        className="tw-faq__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="tw-faq__trigger-icon">
          <i className="fa-solid fa-circle-question" aria-hidden />
        </div>
        <span className="tw-faq__trigger-text">{faq.q}</span>
        <div className="tw-faq__chevron-wrap">
          <i className={`fa-solid ${open ? 'fa-minus' : 'fa-plus'} tw-faq__chevron`} aria-hidden />
        </div>
      </button>
      {open && (
        <div className="tw-faq__body">
          <p className="mb-0">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   6 — CTA
───────────────────────────────────────────── */
function CtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="tw-cta float-left w-100 position-relative br-20 text-center">
        {/* Decorative blobs */}
        <div className="tw-cta__blob tw-cta__blob--1" aria-hidden />
        <div className="tw-cta__blob tw-cta__blob--2" aria-hidden />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.span
            className="tw-cta__eyebrow d-inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Ready for a Healthier Routine?
          </motion.span>
          <motion.h2
            className="text-size-46 text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Preventive <br /> Care Visit Today
          </motion.h2>
          <motion.p
            className="tw-cta__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join Smilora patients who make prevention a priority — protecting their teeth and gums
            with steady, supportive care they can trust.
          </motion.p>
          <motion.div
            className="tw-cta__actions d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="text-decoration-none elementary_btn d-inline-block">
              Book a Preventive Visit
              <span>
                <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
              </span>
            </Link>
            <Link href="/services" className="text-decoration-none tw-cta__ghost-btn d-inline-block">
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────── */
export default function PreventiveCareDetail() {
  return (
    <div className="tw-page float-left w-100">
      <OverviewSection />
      <BenefitsSection />
      <ProcessSection />
      <WhyChooseSection />
      <InfoSection />
      <CtaSection />
    </div>
  );
}
