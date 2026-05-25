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
    title: 'Visibly Brighter Smile',
    desc: 'Professional-grade gels lift deep stains from coffee, tea, wine, and tobacco — often several shades in a single visit.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Dentist-Safe Application',
    desc: 'Gums are carefully isolated before any gel touches your teeth, so sensitive soft tissue stays fully protected throughout treatment.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast, Effective Results',
    desc: 'Most patients notice a dramatic improvement in under an hour — perfect before weddings, photoshoots, or important events.',
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Personalised Intensity',
    desc: 'We adjust the whitening strength and session length to match your enamel condition and sensitivity threshold.',
  },
  {
    icon: 'fa-solid fa-arrow-trend-up',
    title: 'Long-Lasting Clarity',
    desc: 'With simple diet habits and periodic touch-ups, professional whitening results can last 12–24 months or longer.',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Sensitivity Management',
    desc: 'We use desensitising agents pre- and post-treatment so discomfort is minimised even for naturally sensitive teeth.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Whitening Consultation',
    desc: 'We assess your teeth and gums, record your starting shade, discuss realistic outcome expectations, and confirm you are a good candidate — all before any gel is applied.',
  },
  {
    number: '02',
    title: 'Shade Recording & Photos',
    desc: 'Your current shade is documented with calibrated photos so we can track and show you the exact improvement achieved at the end.',
  },
  {
    number: '03',
    title: 'Gum Barrier & Preparation',
    desc: 'A protective barrier is applied to your gums and soft tissue, then your teeth are polished to remove surface plaque that could block gel absorption.',
  },
  {
    number: '04',
    title: 'Whitening Gel Application',
    desc: 'High-concentration whitening gel is carefully applied to each tooth surface and activated per protocol. Cycles are timed and monitored by our team.',
  },
  {
    number: '05',
    title: 'Rinse & Desensitise',
    desc: 'The gel is thoroughly removed and a desensitising fluoride treatment is applied to strengthen enamel and reduce post-treatment sensitivity.',
  },
  {
    number: '06',
    title: 'Final Shade Comparison',
    desc: 'We photograph and compare your final shade against the pre-treatment baseline, then discuss at-home maintenance and optional take-home trays.',
  },
];

const WHY_CHOOSE = [
  {
    icon: 'fa-solid fa-user-doctor',
    title: 'Supervised by Qualified Dentists',
    desc: 'Every whitening session is planned and monitored by a registered dentist — not a beautician or unsupervised technician.',
  },
  {
    icon: 'fa-solid fa-microscope',
    title: 'Clinical-Grade Products',
    desc: 'We use professional hydrogen peroxide gels with concentration levels unavailable in supermarket or online products.',
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Pre-Treatment Health Check',
    desc: 'Decay, cracked enamel, and exposed roots are identified first — protecting you from the harm that unsupervised whitening can cause.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Consistent, Predictable Outcomes',
    desc: 'Controlled application means even coverage across all visible teeth — no blotchy or uneven results common with DIY kits.',
  },
];

const FAQS = [
  {
    id: 'tw-faq-1',
    q: 'How white can my teeth actually get?',
    a: 'Results vary by your natural enamel tone and stain depth. Most patients achieve a notable improvement of several shade units. We set honest expectations at consultation so you are never disappointed.',
  },
  {
    id: 'tw-faq-2',
    q: 'Will whitening work on crowns, veneers, or fillings?',
    a: 'No — whitening agents only work on natural tooth enamel. Existing restorations will not change shade. We flag this before treatment so your overall smile stays even.',
  },
  {
    id: 'tw-faq-3',
    q: 'How long does the result last?',
    a: 'With good habits — limiting staining foods and drinks, and brushing twice daily — results can last 12 to 24 months. Take-home trays make top-ups simple and affordable.',
  },
  {
    id: 'tw-faq-4',
    q: 'Is it safe for sensitive teeth?',
    a: 'We assess sensitivity levels before starting and adjust the gel strength or session length accordingly. A post-treatment desensitiser is applied as standard.',
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
                    src="/assets/images/teeth-whitening-img.jpg"
                    alt="In-chair teeth whitening and bleaching treatment"
                    className="img-fluid tw-overview__img-main-img"
                  />
                </figure>
                {/* Floating stat card */}
                <div className="tw-overview__stat-card">
                  <div className="tw-overview__stat-icon"><i className="fa-solid fa-tooth" aria-hidden /></div>
                  <div>
                    <strong className="tw-overview__stat-title">Safe &amp; Effective</strong>
                    <span className="tw-overview__stat-sub">Dentist Supervised</span>
                  </div>
                </div>
                <figure className="tw-overview__img-float mb-0">
                  <img
                    src="/assets/images/before-after-result-img.jpg"
                    alt="Bright, confident smile after professional whitening"
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
                  <span className="tw-ov-eyebrow__text">Cosmetic Smile Treatment</span>
                </div>

                {/* Main heading */}
                <h2 className="tw-ov-heading">
                Achieve a Radiant Smile
                </h2>

                {/* Single paragraph */}
                <p className="tw-ov-para">
                  Professional teeth whitening at Oralsquad goes far beyond any over-the-counter kit.
                  Using clinical-grade gel under expert dental supervision, we lift years of staining
                  safely — delivering results that look natural, even, and genuinely luminous.
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
                      <strong className="tw-ov-feature__title">Visible Results in One Visit</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        Most patients leave several shades brighter — no waiting, no guesswork.
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
                      <strong className="tw-ov-feature__title">Fully Dentist Supervised</strong>
                      <p className="tw-ov-feature__desc mb-0">
                        Every step guided by a qualified dentist — your safety always comes first.
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
                    Book a Whitening Consult
                    <span>
                      <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                    </span>
                  </Link>
                  <p className="tw-ov-cta__note mb-0">
                    <i className="fa-solid fa-shield-halved" aria-hidden /> No obligation consultation
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
              title="Benefits of Professional <br/> Teeth Whitening"
              subtitle="When whitening is done right, the advantages go well beyond aesthetics. Here is what you can expect."
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
              title="Your Whitening Journey, <br/> Step by Step"
              subtitle="Every visit follows a structured, clinically guided process so nothing is rushed and everything is safe."
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
                  Why Patients Choose  Oralsquad for Whitening
                </h2>
                <p className="mb-4">
                  There are dozens of whitening options out there — but not all of them protect your
                  teeth while improving them. At Oralsquad, our approach combines clinical precision
                  with genuine patient care.
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
              title="Preparation, Safety &amp; <br/> What to Expect"
              subtitle="Being prepared helps you get the most from your whitening session and reduces the chance of sensitivity."
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Brush and floss the morning of treatment</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Avoid dark-coloured foods 24 hours prior</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mention any existing sensitivity to the team</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Bring a list of any current medications</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> The whole session typically takes 60–90 min</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> A cheek retractor keeps your lips comfortable</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Mild tingling is normal — tell us if it intensifies</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> You stay relaxed; we monitor every cycle</li>
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
                  <li><i className="fa-solid fa-check" aria-hidden /> Avoid staining foods for 48 hours post-visit</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Sensitivity usually fades within 24 hours</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Use any provided desensitising gel at home</li>
                  <li><i className="fa-solid fa-check" aria-hidden /> Touch-up trays are available for long-term care</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="tw-faq-section">
            <FadeSlide delay={0}>
              <div className="tw-faq-section__header text-center">

                <h3 className="text-size-36 tw-faq__heading">Frequently Asked Questions</h3>
                <p className="tw-faq-section__sub">Everything you need to know before booking your whitening session.</p>
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
            Ready to Brighten Your Smile?
          </motion.span>
          <motion.h2
            className="text-size-46 text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Professional <br /> Whitening Session Today
          </motion.h2>
          <motion.p
            className="tw-cta__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join hundreds of Oralsquad patients who started with one appointment and left with the
            confident smile they always wanted. Your consultation is the first step.
          </motion.p>
          <motion.div
            className="tw-cta__actions d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="text-decoration-none elementary_btn d-inline-block">
              Book a Whitening Visit
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
export default function TeethWhiteningDetail() {
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
