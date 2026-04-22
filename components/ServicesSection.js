'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "/assets/images/services-icon1.png",
      title: "Preventive Care",
      desc: "Routine exams, X-rays, and cleanings to keep your smile healthy year-round.",
      animation: { x: -100, opacity: 0 },
      href: "/services/preventive-care",
    },
    {
      icon: "/assets/images/services-icon2.png",
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with whitening, veneers, and custom smile makeovers.",
      animation: { scale: 0.8, opacity: 0 },
      href: "/services/cosmetic-dentistry",
    },
    {
      icon: "/assets/images/services-icon3.png",
      title: "Orthodontics",
      desc: "Straighten your teeth with modern braces or clear aligners for all ages.",
      animation: { x: 100, opacity: 0 },
      href: "/services/orthodontics",
    },
    {
      icon: "/assets/images/services-icon4.png",
      title: "Teeth Whitening",
      desc: "Professional whitening treatments for a brighter, more confident smile.",
      animation: { x: -100, opacity: 0 },
      href: "/services/professional-teeth-whitening",
    },
    {
      icon: "/assets/images/services-icon5.png",
      title: "Periodontal Care",
      desc: "Expert treatment for gum disease to maintain strong supporting structures.",
      animation: { scale: 0.8, opacity: 0 },
      href: "/services/periodontal-care",
    },
    {
      icon: "/assets/images/services-icon6.png",
      title: "Restorative Care",
      desc: "Repair damaged teeth with high-quality crowns, bridges, and fillings.",
      animation: { x: 100, opacity: 0 },
      href: "/services/restorative-treatments",
    },
    {
      icon: "/assets/images/pricing-icon1.png",
      title: "Endodontics",
      desc: "Specialized root canal therapy to save your natural teeth from extraction.",
      animation: { x: -100, opacity: 0 },
      href: "/services/endodontics",
    },
    {
      icon: "/assets/images/pricing-icon2.png",
      title: "Oral Surgery",
      desc: "Expert care for extractions, implants, and wisdom teeth removal.",
      animation: { scale: 0.8, opacity: 0 },
      href: "/services/oral-surgery",
    },
    {
      icon: "/assets/images/pricing-icon3.png",
      title: "Pediatric Dentistry",
      desc: "Gentle dental care specifically designed for children and teenagers.",
      animation: { x: 100, opacity: 0 },
      href: "/services/pediatric-dentistry",
    }
  ];

  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <div className="main-container">
        <section
          id="comprehensive-dental-services"
          className="float-left w-100 position-relative padding-top padding-bottom services-con padding-rl-responsive br-20"
        >
          <div className="container">
            <div className="heading-title-con text-center">
              <motion.span 
                className="special-text d-inline-block"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                Comprehensive Dental Services
              </motion.span>
              <motion.h2 
                className="text-size-46 mb-0"
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                All Your Dental Needs <br /> Under One Roof.
              </motion.h2>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div className="col-lg-4 col-md-6 d-flex" key={index}>
                  <motion.div 
                    className="services-box w-100"
                    initial={service.animation}
                    animate={inView ? (service.animation.scale ? { scale: 1, opacity: 1 } : { x: 0, y: 0, opacity: 1 }) : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <figure><img src={service.icon} alt="services icon" className="img-fluid" /></figure>
                    <h3 className="text-size-24">{service.title}</h3>
                    <p className="mb-3">{service.desc}</p>
                    <Link href={service.href} className="text-decoration-none primary_btn d-inline-block">
                      View details
                      <span>
                        <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesSection;
