'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const infoItems = [
    {
      icon: "/assets/images/contact-location-icon.png",
      title: "Our Location",
      desc: "121 King Street, Melbourne Victoria 3000 Australia",
      animation: { x: -50, opacity: 0 }
    },
    {
      icon: "/assets/images/contact-phone-icon.png",
      title: "Phone Number",
      links: [
        { href: "tel:+11234567890", text: "+1 (123) 456-7890" },
        { href: "tel:+21234567890", text: "+2 (123) 456-7890" }
      ],
      animation: { y: 50, opacity: 0 }
    },
    {
      icon: "/assets/images/contact-email-icon.png",
      title: "Email us at",
      links: [
        { href: "mailto:info@smilora.com", text: "info@smilora.com" },
        { href: "mailto:support@smilora.com", text: "support@smilora.com" }
      ],
      animation: { x: 50, opacity: 0 }
    }
  ];

  return (
    <section className="float-left w-100 position-relative contact-info-con padding-top padding-bottom background-light text-center" ref={ref}>
      <div className="container">
        <div className="heading-title-con">
          <motion.span 
            className="special-text d-block"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            Let’s Keep Your Smile Bright
          </motion.span>
          <motion.h2 
            className="text-size-46"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            We’re Here to Keep You Comfortable
          </motion.h2>
        </div>
        <div className="row all_row">
          {infoItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 all_column" key={index}>
              <motion.div 
                className="contact-info-box w-100"
                initial={item.animation}
                animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <figure><img src={item.icon} alt={item.title} className="img-fluid" /></figure>
                <div className="contact-sub-con">
                  <h3 className="text-size-24">{item.title}</h3>
                  {item.desc && <p className="mb-0">{item.desc}</p>}
                  {item.links && item.links.map((link, lIdx) => (
                    <React.Fragment key={lIdx}>
                      <a href={link.href} className="d-inline-block">{link.text}</a>
                      {lIdx < item.links.length - 1 && <div className="clearfix"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
