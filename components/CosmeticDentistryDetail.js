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
    icon: 'fa-solid fa-wand-sparkles',
    title: 'A Fresher, More Balanced Look',
    desc: 'Cosmetic dentistry can refine colour, shape, and symmetry so your smile looks natural in photos and in person — never overdone.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Minimally Invasive Options',
    desc: 'When enamel allows, we favour conservative treatments like professional whitening, bonding, or selective contouring before considering bigger changes.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Whitening That Fits Your Life',
    desc: 'Choose in-chair whitening for a fast refresh, or professional take-home options for gradual brightening on your schedule.',
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Custom Shape and Proportion',
    desc: 'Veneers, bonding, and edge refinements are planned to suit your lips, profile, and bite — not a one-size-fits-all template.',
  },
  {
    icon: 'fa-solid fa-arrow-trend-up',
    title: 'A Maintenance Plan You Can Keep',
    desc: 'We help you protect cosmetic work with sensible habits, night-guard guidance if you grind, and sensible recall polishing when needed.',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Health-First Smile Design',
    desc: 'We check existing fillings and crowns first, because they do not change shade like enamel — keeping your expectations realistic and your plan honest.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Cosmetic Consultation',
    desc: 'We listen to your goals, review your dental history, and discuss options that match your timeline, budget, and comfort level.',
  },
  {
    number: '02',
    title: 'Photos, Records & Smile Analysis',
    desc: 'Clinical photos and shade documentation help us plan changes you can understand — so you feel confident before treatment begins.',
  },
  {
    number: '03',
    title: 'Personalised Treatment Plan',
    desc: 'Your plan may include whitening, bonding, veneers, or a combination. We explain pros, limits, and sequencing in plain language.',
  },
  {
    number: '04',
    title: 'Treatment Visit(s)',
    desc: 'Procedures are performed carefully with attention to comfort, isolation, and aesthetics — whether it is a single bonding visit or staged veneer work.',
  },
  {
    number: '05',
    title: 'Finishing, Polish & Bite Check',
    desc: 'We refine contours, check your bite, and make sure everything feels smooth and looks balanced before you leave.',
  },
  {
    number: '06',
    title: 'Aftercare & Long-Term Care',
    desc: 'You receive simple maintenance guidance and scheduling recommendations so your refreshed smile stays predictable for years.',
  },
];

const WHY_CHOOSE = [
  {
    icon: 'fa-solid fa-user-doctor',
    title: 'Dentist-Led Aesthetic Care',
    desc: 'Cosmetic changes are planned and delivered with clinical judgement — prioritising tooth health, gum health, and longevity.',
  },
  {
    icon: 'fa-solid fa-microscope',
    title: 'Planning You Can See',
    desc: 'Photos and shade guides help you understand the direction of treatment before irreversible steps are taken.',
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Honest Expectations',
    desc: 'We flag what will — and will not — change with whitening or veneers, especially around existing crowns and fillings.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Natural-Looking Results',
    desc: 'Our focus is believable beauty: a smile that suits your face, not a generic “too perfect” look.',
  },
];

const FAQS = [
  {
    id: 'cd-faq-1',
    q: 'Will whitening change the colour of my crowns or fillings?',
    a: 'Whitening primarily affects natural enamel. Existing crowns, veneers, and many fillings typically will not lighten the same way. We review this in planning so your smile stays even.',
  },
  {
    id: 'cd-faq-2',
    q: 'How do I choose between bonding and veneers?',
    a: 'Bonding can be great for small chips or gaps with minimal tooth preparation. Veneers may be better for larger shape or colour changes. We recommend what fits your case and goals.',
  },
  {
    id: 'cd-faq-3',
    q: 'Is cosmetic dentistry painful?',
    a: 'Most cosmetic visits are comfortable with local anaesthesia when needed. We work at your pace and explain each step so you feel informed and relaxed.',
  },
  {
    id: 'cd-faq-4',
    q: 'How long do cosmetic results last?',
    a: 'Longevity depends on the procedure and your habits. Good hygiene, sensible diet choices, and night-guard use (if you grind) all help protect your investment.',
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
                    src="/assets/images/dental-services-img3.jpg"
                    alt="Smile makeover and aesthetic cosmetic dentistry"
                    className="img-fluid tw-overview__img-main-img"
                  />
                </figure>
                {/* Floating stat card */}
                <div className="tw-overview__stat-card">
                  <div className="tw-overview__stat-icon"><i className="fa-solid fa-tooth" aria-hidden /></div>
                  <div>
                    <strong className="tw-overview__stat-title">Natural-Looking</strong>
                    <span className="tw-overview__stat-sub">Smile-Focused Care</span>
                  </div>
                </div>
                <figure className="tw-overview__img-float mb-0">
                  <img
                    src="/assets/images/dental-services-img4.jpg"
                    alt="Perfect smile harmony with veneers and cosmetic treatment"
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
                  <span className="tw-ov-eyebrow__text">Cosmetic Dentistry</span>
                </div>

                {/* Main heading */}
                <h2 className="tw-ov-heading">
                Design a Confident Smile
                  
                </h2>

                {/* Single paragraph */}
                <p className="tw-ov-para">
                  Cosmetic dentistry blends colour, shape, and proportion. Whether you want a brighter
                  smile for an event, veneers to refine edges, or bonding to repair a chip, we plan with
                  photographs and shade guides so you can preview the direction before we begin.
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
                      <strong className="tw-ov-feature__title">Photo-Guided Planning</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        Records and smile analysis help us align treatment with your goals — clearly and predictably.
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
                      <strong className="tw-ov-feature__title">Options Matched to You</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        From whitening to veneers to bonding — we recommend what fits your enamel, bite, and lifestyle.
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
                    Book a Cosmetic Consult
                    <span>
                      <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                    </span>
                  </Link>
                  <p className="tw-ov-cta__note mb-0">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> Private smile assessment
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
              title="Benefits of <br/> Cosmetic Dentistry"
              subtitle="Thoughtful cosmetic care can refresh your appearance while keeping your teeth and gums healthy for the long term."
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
              title="Your Cosmetic Journey, <br/> Step by Step"
              subtitle="From first consult to final polish, we keep your visits organised, transparent, and focused on natural-looking results."
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
                <span className="special-text d-inline-block">Oralsquad Difference</span>
                <h2 className="text-size-46">
                  Why Patients Choose  Oralsquad for Cosmetic Care
                </h2>
                <p className="mb-4">
                  Cosmetic dentistry should feel collaborative — not rushed. At Oralsquad, we combine
                  careful planning with honest guidance so your smile looks like you, only refreshed.
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
              title="Preparation, Comfort &amp; <br/> What to Expect"
              subtitle="Knowing what to expect helps cosmetic visits feel calm — and helps your results look their best afterwards."
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Bring photos that show the smile goals you like</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> List concerns: colour, shape, chips, or gaps</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mention night grinding or clenching habits</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Share upcoming events and your ideal timeline</li>
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
                  <h3 className="text-size-20 tw-info-card__heading">During Treatment</h3>
                </div>
                <ul className="tw-info-card__list list-unstyled p-0 mb-0">
                  <li><i className="fa-solid fa-check" aria-hidden /> We explain each step before we begin</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Anaesthesia is used when appropriate for comfort</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> We check contours, shade, and bite as we work</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Ask for a mirror break anytime you need it</li>
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
                  <h3 className="text-size-20 tw-info-card__heading">After Treatment</h3>
                </div>
                <ul className="tw-info-card__list list-unstyled p-0 mb-0">
                  <li><i className="fa-solid fa-check" aria-hidden /> Follow home-care instructions for your procedure</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> After whitening, limit dark foods/drinks short-term if advised</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Wear a night guard if recommended to protect new work</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Attend polish or review visits to maintain results</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="tw-faq-section">
            <FadeSlide delay={0}>
              <div className="tw-faq-section__header text-center">

                <h3 className="text-size-36 tw-faq__heading">Frequently Asked Questions</h3>
                <p className="tw-faq-section__sub">Everything you need to know before booking cosmetic dentistry at Oralsquad.</p>
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
            Ready to Refresh Your Smile?
          </motion.span>
          <motion.h2
            className="text-size-46 text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Cosmetic <br /> Dentistry Consult Today
          </motion.h2>
          <motion.p
            className="tw-cta__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore what is possible with a personalised cosmetic plan — from subtle brightening to
            a full smile refresh, guided by dentists who prioritise natural-looking results.
          </motion.p>
          <motion.div
            className="tw-cta__actions d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="text-decoration-none elementary_btn d-inline-block">
              Book a Cosmetic Visit
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
export default function CosmeticDentistryDetail() {
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
