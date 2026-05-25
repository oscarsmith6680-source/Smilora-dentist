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
    icon: 'fa-solid fa-face-smile',
    title: 'Positive First Visits Build Lifelong Habits',
    desc: 'Kids who feel safe early are far less likely to fear the dentist as adults — we celebrate small brave steps.',
  },
  {
    icon: 'fa-solid fa-shield-virus',
    title: 'Sealants & Fluoride for Cavity Prevention',
    desc: 'Deep grooves on new molars trap bacteria — sealants and risk-based fluoride add layers of protection between checkups.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Parents Leave With a Clear Plan',
    desc: 'No guesswork — you get brushing angles, snack guidance, and when to book the next visit based on your child’s risk.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Tell-Show-Do, Not Rush',
    desc: 'We let kids hold the mirror, explain noises before they happen, and move at a pace that matches their cooperation.',
  },
  {
    icon: 'fa-solid fa-football',
    title: 'Custom Sports Mouthguards',
    desc: 'Active kids get better protection with a guard made for their teeth — not a loose boil-and-bite from a shelf.',
  },
  {
    icon: 'fa-solid fa-cookie-bite',
    title: 'Diet & Habit Coaching',
    desc: 'Bottles, frequent grazing, and thumb habits affect teeth — we address them kindly, without shaming families.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Warm Welcome & Meet the Team',
    desc: 'A gentle introduction — we set the tone with simple words, patience, and time for your child to look around.',
  },
  {
    number: '02',
    title: 'Age-Appropriate Exam',
    desc: 'We check teeth, gums, and development — using tell-show-do so nothing feels like a surprise.',
  },
  {
    number: '03',
    title: 'Clean & Polish When Cooperative',
    desc: 'When your child is ready, we remove soft deposits and stain — stopping if they need a break.',
  },
  {
    number: '04',
    title: 'Fluoride by Cavity Risk',
    desc: 'Fluoride varnish is applied based on your child’s history and diet — not a one-size default.',
  },
  {
    number: '05',
    title: 'Sealants or Small Fillings If Needed',
    desc: 'Permanent molars with deep grooves get sealants; small cavities are treated with minimal intervention when required.',
  },
  {
    number: '06',
    title: 'Home Routine & Next Steps',
    desc: 'Parents get brushing demos, snack tips, and a recall interval — prevention continues between visits.',
  },
];

const WHY_CHOOSE = [
  {
    icon: 'fa-solid fa-heart',
    title: 'Patience Is Our Default Setting',
    desc: 'We would rather build trust over two short visits than force a traumatic experience in one.',
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Parents Stay in the Loop',
    desc: 'Treatment decisions are shared — you hear the why, the options, and the costs before anything is done.',
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Baby Teeth Matter',
    desc: 'They hold space for adult teeth and support speech and chewing — we treat them with appropriate respect.',
  },
  {
    icon: 'fa-solid fa-house-chimney',
    title: 'A Welcoming Clinic Culture',
    desc: 'Families tell us we feel less rushed and more human — that matters when your little one is nervous.',
  },
];

const FAQS = [
  {
    id: 'ped-faq-1',
    q: 'When should my child have their first dental visit?',
    a: 'Many children benefit from a first visit by age one or within six months of the first tooth — mainly for coaching parents and catching problems early. We adapt the visit to your child’s temperament.',
  },
  {
    id: 'ped-faq-2',
    q: 'Do cavities in baby teeth really need treatment?',
    a: 'If a cavity is small and the tooth will shed soon, sometimes we monitor — but pain, infection, or space loss for adult teeth are reasons to treat. We explain the risk for your specific tooth.',
  },
  {
    id: 'ped-faq-3',
    q: 'How do you handle a child who is scared?',
    a: 'We use short sentences, praise, and breaks. Some kids do better with a parent holding their hand; others need two shorter appointments instead of one long one.',
  },
  {
    id: 'ped-faq-4',
    q: 'Are sports mouthguards worth the custom fit?',
    a: 'Boil-and-bite guards are better than nothing, but a custom guard stays in place during contact and is easier to breathe with — many parents notice the difference immediately.',
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
                    src="/assets/images/photoslider-img6.jpg"
                    alt="Kids dental care and child-friendly checkups"
                    className="img-fluid tw-overview__img-main-img"
                  />
                </figure>
                {/* Floating stat card */}
                <div className="tw-overview__stat-card">
                  <div className="tw-overview__stat-icon"><i className="fa-solid fa-tooth" aria-hidden /></div>
                  <div>
                    <strong className="tw-overview__stat-title">Gentle & Positive</strong>
                    <span className="tw-overview__stat-sub">Family-Focused</span>
                  </div>
                </div>
                <figure className="tw-overview__img-float mb-0">
                  <img
                    src="/assets/images/patient-img.jpg"
                    alt="Pediatric dental visit with a caring dentist"
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
                  <span className="tw-ov-eyebrow__text">Pediatric Dentistry</span>
                </div>

                {/* Main heading */}
                <h2 className="tw-ov-heading">
                  Healthy Smiles Start Early
              
                </h2>

                {/* Single paragraph */}
                <p className="tw-ov-para">
                  Baby teeth matter for speech, chewing, and holding space for adult teeth. We use
                  tell-show-do, let kids hold the mirror, and explain noises before they happen. When
                  treatment is needed, we involve parents in every decision — no surprises. We also
                  talk about diet, bottles, thumb habits, and sports guards so prevention continues
                  between visits.
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
                      <strong className="tw-ov-feature__title">Brave Steps, Big Celebrations</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        Stickers, counting games, and praise — we build confidence one small win at a time.
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
                      <strong className="tw-ov-feature__title">Parents in Every Decision</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        You hear options and risks clearly — treatment never happens without your understanding and consent.
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
                    Book a Children’s Visit
                    <span>
                      <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                    </span>
                  </Link>
                  <p className="tw-ov-cta__note mb-0">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> Ask about our gentle intro visit
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
              title="Benefits of Children’s <br/> Dental Care"
              subtitle="Little wins add up — positive visits today mean healthier habits and less fear tomorrow."
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
              title="Your Child’s Visit, <br/> Step by Step"
              subtitle="We match the pace to your child — cooperation always beats speed when building trust."
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
                  Why Families Choose <br /> Oralsquad for Kids
                </h2>
                <p className="mb-4">
                  We help kids feel safe in the chair — with patience, simple words, and celebrations
                  for brave little steps. Parents leave with a clear plan instead of guesswork.
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
              title="Before, During &amp; <br/> After the Visit"
              subtitle="A calm morning, honest expectations, and a few home habits make children’s dentistry smoother for everyone."
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Talk positively about the dentist at home</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Bring a comfort toy if it helps your child</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mention medical conditions or allergies</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Avoid promising “no needles” before we have assessed</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Parents may be invited chairside when helpful</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> We explain tools with kid-friendly words</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Short breaks are OK — cooperation beats rushing</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Small rewards recognise brave behaviour</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Stick to soft foods if a tooth was numbed</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Watch so they do not chew their lip or cheek</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Keep brushing gentle twice daily</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Book the next visit based on our recall plan</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="tw-faq-section">
            <FadeSlide delay={0}>
              <div className="tw-faq-section__header text-center">

                <h3 className="text-size-36 tw-faq__heading">Frequently Asked Questions</h3>
                <p className="tw-faq-section__sub">Everything you need to know before your child’s visit at Oralsquad.</p>
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
            First Visit for Your Little One?
          </motion.span>
          <motion.h2
            className="text-size-46 text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Children’s <br /> Dental Visit Today
          </motion.h2>
          <motion.p
            className="tw-cta__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ask us about our gentle introduction routine — we love helping kids feel proud of showing up.
          </motion.p>
          <motion.div
            className="tw-cta__actions d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="text-decoration-none elementary_btn d-inline-block">
              Book a Children’s Visit
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
export default function PediatricDentistryDetail() {
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
