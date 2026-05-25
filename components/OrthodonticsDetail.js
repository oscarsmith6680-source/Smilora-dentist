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
    icon: 'fa-solid fa-broom',
    title: 'Easier Cleaning in Crowded Areas',
    desc: 'Straight teeth create smoother contacts and fewer food traps — flossing and brushing simply work better day to day.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Protects Teeth From Uneven Wear',
    desc: 'A healthier bite distributes chewing forces more evenly — reducing chips and wear on edges that used to collide first.',
  },
  {
    icon: 'fa-solid fa-eye-slash',
    title: 'Discreet Options for Adults',
    desc: 'Clear aligners suit many mild-to-moderate cases — a popular choice for professionals who want less visible hardware.',
  },
  {
    icon: 'fa-solid fa-face-smile',
    title: 'Confidence When You Smile',
    desc: 'Alignment is functional first — but feeling good in photos and conversation matters too.',
  },
  {
    icon: 'fa-solid fa-route',
    title: 'A Timeline You Can Plan Around',
    desc: 'We outline adjustment rhythm and milestones so school, work, and travel can be factored into your orthodontic journey.',
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Retention Built Into the Plan',
    desc: 'Retainers are not an afterthought — fixed and removable options are discussed so your result lasts.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Orthodontic Records',
    desc: 'Photos, scans or impressions capture your starting tooth positions and bite relationship — the foundation for an accurate plan.',
  },
  {
    number: '02',
    title: 'Diagnosis & Treatment Plan',
    desc: 'We evaluate crowding, spacing, and jaw relationships, then recommend braces, aligners, or a combination with an estimated timeline.',
  },
  {
    number: '03',
    title: 'Appliance Delivery',
    desc: 'Brackets are bonded or aligners are issued with clear wear and hygiene instructions — you leave knowing exactly what to do at home.',
  },
  {
    number: '04',
    title: 'Adjustment Visits',
    desc: 'Periodic visits apply controlled forces — wires are changed or aligner stages advance while we monitor tooth movement and gum health.',
  },
  {
    number: '05',
    title: 'Bite Finishing',
    desc: 'Elastics or auxiliaries fine-tune how upper and lower teeth meet — the phase that turns “straighter” into “stable.”',
  },
  {
    number: '06',
    title: 'Retention Phase',
    desc: 'Retainers are fitted with wear schedules explained — protecting your investment while tissues adapt to new positions.',
  },
];

const WHY_CHOOSE = [
  {
    icon: 'fa-solid fa-clipboard-list',
    title: 'Appliance Matched to Your Case',
    desc: 'We do not force a one-size solution — your lifestyle, compliance ability, and bite complexity guide the recommendation.',
  },
  {
    icon: 'fa-solid fa-tooth',
    title: 'Hygiene Coaching Along the Way',
    desc: 'Braces and aligners only work well in a healthy mouth — we coach on brushing angles and interdental cleaning throughout treatment.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Progress You Can See',
    desc: 'Regular monitoring means we catch off-track movement early — before small issues become longer treatment.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Honest About Aligner Limits',
    desc: 'Some bites need braces for predictable results — we tell you upfront rather than overpromising on aligners alone.',
  },
];

const FAQS = [
  {
    id: 'ortho-faq-1',
    q: 'Am I too old for braces or aligners?',
    a: 'Adult bone remodels more slowly than teenage bone, but orthodontic treatment is absolutely possible at any age if gums and teeth are healthy. Many adults choose aligners for discretion.',
  },
  {
    id: 'ortho-faq-2',
    q: 'Aligners versus fixed braces — which is better?',
    a: 'It depends on your bite complexity and how reliably you can wear aligners 20–22 hours daily. Braces can be more predictable for certain rotations and vertical movements.',
  },
  {
    id: 'ortho-faq-3',
    q: 'How long will treatment take?',
    a: 'Mild cases may finish in months; complex crowding or bite correction often needs one to two years. Your plan includes an estimated range based on your starting records.',
  },
  {
    id: 'ortho-faq-4',
    q: 'Do I need to wear retainers forever?',
    a: 'Teeth have memory — some lifelong retention is usually recommended, whether fixed wire, night-only removable, or a combination. We customise wear to your stability risk.',
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
                    src="/assets/images/photoslider-img4.jpg"
                    alt="Braces and teeth straightening treatment"
                    className="img-fluid tw-overview__img-main-img"
                  />
                </figure>
                {/* Floating stat card */}
                <div className="tw-overview__stat-card">
                  <div className="tw-overview__stat-icon"><i className="fa-solid fa-tooth" aria-hidden /></div>
                  <div>
                    <strong className="tw-overview__stat-title">Straighter & Balanced</strong>
                    <span className="tw-overview__stat-sub">Personalised Plan</span>
                  </div>
                </div>
                <figure className="tw-overview__img-float mb-0">
                  <img
                    src="/assets/images/photoslider-img5.jpg"
                    alt="Clear aligners and orthodontic smile alignment"
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
                  <span className="tw-ov-eyebrow__text">Orthodontics</span>
                </div>

                {/* Main heading */}
                <h2 className="tw-ov-heading">
                  Straighter Teeth And a Healthier Bite
                  
                </h2>

                {/* Single paragraph */}
                <p className="tw-ov-para">
                  Orthodontic treatment moves teeth through controlled forces. We evaluate crowding,
                  spacing, bite depth, and jaw relationships, then recommend fixed braces, clear aligners,
                  or a combination. Adults often appreciate discreet aligner options; teens may move
                  faster with braces. Retention is part of the treatment — not an afterthought.
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
                      <strong className="tw-ov-feature__title">Appliance Matched to Your Lifestyle</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        From aligners to braces — we align the method with your case, compliance, and how discreet you want treatment to be.
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
                      <strong className="tw-ov-feature__title">Retention From Day One</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        We discuss fixed and removable retainers early — protecting your result is built into the plan, not bolted on at the end.
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
                    Book an Orthodontic Checkup
                    <span>
                      <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                    </span>
                  </Link>
                  <p className="tw-ov-cta__note mb-0">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> Teens & adults welcome
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
              title="Benefits of Modern <br/> Orthodontics"
              subtitle="Straight teeth are easier to clean and less prone to uneven wear — with options that fit both teens and busy adults."
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
              title="Your Orthodontic Journey, <br/> Step by Step"
              subtitle="From records to retention, each phase has a purpose — consistency at home is what turns months of visits into a lasting smile."
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
                  Why Patients Choose  Oralsquad for Orthodontics
                </h2>
                <p className="mb-4">
                  Orthodontics is a journey — we match the appliance to your case and lifestyle, coach
                  hygiene throughout, and stay honest about what aligners can and cannot achieve.
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
              title="Comfort, Compliance &amp; <br/> What to Expect"
              subtitle="Great orthodontic results come from steady wear, smart hygiene, and knowing what is normal after adjustments."
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Keep your regular hygiene routine strong</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Stock orthodontic wax if braces irritate cheeks</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> For aligners, plan wear time around meals</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Bring elastics to every visit if prescribed</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Adjustments may leave teeth tender for a day or two</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Wire changes or new aligner stages feel “tight” at first</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Soft foods help after visits if you are sore</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Ask us anything — no question is too small</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Wear retainers exactly as prescribed</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Avoid hard or sticky foods that damage braces</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Rinse aligners and brush teeth before reinserting</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Call if a bracket loosens or wire pokes</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="tw-faq-section">
            <FadeSlide delay={0}>
              <div className="tw-faq-section__header text-center">

                <h3 className="text-size-36 tw-faq__heading">Frequently Asked Questions</h3>
                <p className="tw-faq-section__sub">Everything you need to know before starting orthodontics at Oralsquad.</p>
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
            Crowding or Bite Concerns?
          </motion.span>
          <motion.h2
            className="text-size-46 text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Orthodontic <br /> Assessment Today
          </motion.h2>
          <motion.p
            className="tw-cta__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Wondering if aligners will work for your crowding? Start with an assessment — we will
            match the appliance to your case and lifestyle.
          </motion.p>
          <motion.div
            className="tw-cta__actions d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="text-decoration-none elementary_btn d-inline-block">
              Book an Orthodontic Visit
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
export default function OrthodonticsDetail() {
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
