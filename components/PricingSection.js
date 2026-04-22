'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PricingSection = ({ noVerticalPadding = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans = [
    {
      icon: "/assets/images/pricing-icon1.png",
      title: "Preventive Adult Check & Clean",
      subtitle: "Six-monthly maintenance when gums and teeth are healthy.",
      features: [
        "Comprehensive oral exam & soft-tissue screening",
        "Professional scale, polish & stain removal",
        "Bitewing X-rays when clinically indicated",
      ],
      footerText: "Itemised quote if additional treatment is recommended.",
      price: "$245",
      period: "/ visit",
      tag: "h3"
    },
    {
      icon: "/assets/images/pricing-icon2.png",
      title: "Cosmetic In-Chair Whitening",
      subtitle: "Dentist-supervised whitening with protected gum barriers.",
      features: [
        "Pre-treatment shade recording & suitability check",
        "Clinical-grade gel applied in timed, monitored cycles",
        "Desensitising finish & home-care instructions",
      ],
      footerText: "Crowns and fillings do not lighten; we discuss this first.",
      price: "$595",
      period: "/ session",
      tag: "h3"
    },
    {
      icon: "/assets/images/pricing-icon3.png",
      title: "Restorative Ceramic Crown",
      subtitle: "Full-coverage restoration for a heavily filled or cracked tooth.",
      features: [
        "Tooth preparation & accurate scan or impressions",
        "Custom ceramic crown fabricated for your bite",
        "Temporary crown, then final cementation & bite check",
      ],
      footerText: "Final fee depends on material choice and complexity.",
      price: "$1,695",
      period: "/ crown",
      tag: "h3"
    },
    {
      icon: "/assets/images/pricing-icon1.png",
      title: "Periodontal Active Therapy Visit",
      subtitle: "Targeted care when gum pockets or bleeding need attention.",
      features: [
        "Periodontal charting & bleeding scores",
        "Scaling & root planing in affected areas",
        "Home-care coaching & maintenance interval plan",
      ],
      footerText: "Re-evaluation visit scheduled to measure healing.",
      price: "$295",
      period: "/ visit",
      tag: "h4"
    },
    {
      icon: "/assets/images/pricing-icon2.png",
      title: "Orthodontics Assessment",
      subtitle: "Clear aligners or braces — we match the plan to your bite.",
      features: [
        "Clinical photos and bite records",
        "Discussion of aligners vs fixed braces for your case",
        "Written treatment plan with staged timeline & quote",
      ],
      footerText: "No obligation to proceed until you are ready.",
      price: "$185",
      period: "/ consult",
      tag: "h4"
    },
    {
      icon: "/assets/images/pricing-icon3.png",
      title: "Pediatric Child Exam & Clean",
      subtitle: "Gentle routine visit for children and young teens.",
      features: [
        "Age-appropriate exam and developmental check",
        "Light clean when cooperation allows",
        "Fluoride varnish based on cavity risk",
      ],
      footerText: "Parents receive brushing and diet tips to use at home.",
      price: "$165",
      period: "/ visit",
      tag: "h4"
    }
  ];

  return (
    <section id ="pricing-section"
      className={`float-left w-100 position-relative pricing-con main-box ${
        noVerticalPadding ? 'pricing-con--no-vert-padding' : 'padding-top padding-bottom'
      }`}
      ref={ref}
    >
      <div className="container">
        <div className="heading-title-con text-center">
          <motion.span 
            className="special-text d-inline-block"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            Affordable Care, Transparent Pricing
          </motion.span>
          <motion.h2 
            className="text-size-46 mb-0"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            Flexible Plans and Payment Options <br /> for Every Patient.
          </motion.h2>
        </div>

        <motion.div 
          className="mt-5 position-relative"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: '.pricing-next',
              prevEl: '.pricing-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pricing-carousel"
          >
            {pricingPlans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="pricing-box w-100">
                  <figure><img src={plan.icon} alt="icon" className="img-fluid" /></figure>
                  {plan.tag === 'h3' ? (
                    <h3 className="text-size-24">{plan.title}</h3>
                  ) : (
                    <h4 className="text-size-24">{plan.title}</h4>
                  )}
                  <p>{plan.subtitle}</p>
                  <ul className="list-unstyled p-0">
                    {plan.features.map((f, i) => (
                      <li key={i} className="position-relative"><i className="fa-regular fa-circle-check"></i>{f}</li>
                    ))}
                  </ul>
                  <span className="d-block pricing-span-text"><i className="fa-solid fa-tooth"></i> {plan.footerText} </span>
                  <div className="price-bottom-wrap">
                    <div className="price-content urbanist-font">{plan.price}<span className="d-inline-block">{plan.period}</span></div>
                    <Link href="/contact" className="text-decoration-none primary_btn d-inline-block">
                      Book Appointment
                      <span><img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" /></span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="pricing-prev owl-prev" style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="pricing-next owl-next" style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </motion.div>

        <motion.div 
          className="price-list-wrapper mt-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ul className="list-unstyled p-0 m-0 d-flex justify-content-center align-items-center flex-wrap">
            <li className="position-relative mx-3"><i className="fa-regular fa-circle-check"></i> Written quotes after examination</li>
            <li className="position-relative mx-3"><i className="fa-regular fa-circle-check"></i> Health fund rebates & on-the-spot claims where available</li>
            <li className="position-relative mx-3"><i className="fa-regular fa-circle-check"></i> Payment-plan options discussed where suitable</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
