'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TextSlider = () => {
  const sliderItems = [
    "Preventive Care", "Cosmetic Dentistry", "Periodontal Care", 
    "Restorative Treatments", "Endodontics", "Oral Surgery", 
    "Orthodontics", "Pediatric Dentistry"
  ];

  return (
    <div className="padding-rl float-left w-100">
      <section className="float-left w-100 position-relative main-box text-slider-bar-con overflow-hidden">
        <div className="container-fluid p-0">
          <div className="logo-slider">
            <motion.ul 
              className="slider-track list-unstyled d-flex align-items-center m-0 p-0"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...sliderItems, ...sliderItems, ...sliderItems].map((item, index) => (
                <React.Fragment key={index}>
                  <li className="star-separator">
                    <img src="/assets/images/star-logo.png" alt="star" className="star-icon" />
                  </li>
                  <li className="slider-item">
                    <h2 className="special-heading4 mb-0">{item}</h2>
                  </li>
                </React.Fragment>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextSlider;
