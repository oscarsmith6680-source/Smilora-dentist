'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="float-left w-100 video-con position-relative padding-top padding-bottom padding-rl-responsive">
        <figure>
          <img src="/assets/images/vector.png" alt="vector" className="img-fluid position-absolute vector" />
        </figure>
        <div className="container-fluid p-0">
          <div className="video-inner-con align-items-center justify-content-between">
            <motion.div 
              className="video-left-con d-flex mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="video-card">
                <a href="https://previews.customer.envatousercontent.com/3aab9c0b-e723-4fe1-b3ac-8c16ad4009ce/watermarked_preview/watermarked_preview.mp4" className="popup-vimeo">
                  <img src="/assets/images/video-img1.jpg" className="img-fluid" alt="video" />
                  <div className="overlay">
                    <img src="/assets/images/play-btn.png" className="play-btn img-fluid" alt="play" />
                  </div>
                </a>
              </div>
              <div className="video-card">
                <a href="https://previews.customer.envatousercontent.com/327fa734-08bd-4ff0-814b-1f14e343f0ae/watermarked_preview/watermarked_preview.mp4" className="popup-vimeo">
                  <img src="/assets/images/video-img2.jpg" className="img-fluid" alt="video" />
                  <div className="overlay">
                    <img src="/assets/images/play-btn.png" className="play-btn img-fluid" alt="play" />
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="video-content-right-con mb-0"
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="heading-title-con mb-0">
                <span className="special-text d-inline-block">Inside Our Practice</span>
                <h2 className="text-size-46">Experience Dental Care with Clarity and Confidence.</h2>
                <p>Our practice videos showcase real processes and treatments, helping you understand how we care for your teeth. From preventive check-ups to advanced procedures, Smilora ensures your dental journey is clear, safe, and stress-free.</p>
                <a href="https://previews.customer.envatousercontent.com/327fa734-08bd-4ff0-814b-1f14e343f0ae/watermarked_preview/watermarked_preview.mp4" className="text-decoration-none primary_btn d-inline-block popup-vimeo">
                  Watch on Youtube
                  <span><img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" /></span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
