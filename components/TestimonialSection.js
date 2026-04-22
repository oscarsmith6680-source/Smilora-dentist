'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Claire W.',
      designation: 'Fitzroy North · hygiene & gum care',
      image: '/assets/images/standard_post_img01.jpg',
      text: 'I’d put off a clean for too long and was embarrassed about bleeding when I brushed. Nobody lectured me — the hygienist just showed where my floss was missing and worked at a pace I could handle. I re-booked on the way out.',
    },
    {
      name: 'Marcus T.',
      designation: 'Secondary teacher · crown after a cracked filling',
      image: '/assets/images/standard_post_img02.jpg',
      text: 'I broke an old filling on a Thursday night. They squeezed me in Friday morning, explained the crown options in plain English, and the temporary didn’t feel sharp or high. Small details, but it turned a bad week into something manageable.',
    },
    {
      name: 'Aisha K.',
      designation: 'Richmond · clear aligners',
      image: '/assets/images/standard_post_img03.jpg',
      text: 'I’m on video calls all day and didn’t want obvious metal. They were honest about what aligners could and couldn’t fix — my front overlap is sorted and colleagues only noticed when I mentioned I was “doing teeth stuff.”',
    },
    {
      name: 'Daniel R.',
      designation: 'Parent · first proper visit for a five-year-old',
      image: '/assets/images/standard_post_img04.jpg',
      text: 'Our daughter had a rough experience at another place and wouldn’t open her mouth. Here they did a “counting teeth” game, let her hold the mirror, and stopped when she needed a break. She actually asked when we’re going back.',
    },
    {
      name: 'Helen V.',
      designation: 'Retiree · root canal & crown',
      image: '/assets/images/standard_post_img05.jpg',
      text: 'I was dreading root canal stories from the nineties. They checked in whenever my jaw ached from staying open and didn’t rush. Tender that evening, fine within a couple of days — I’m just glad I didn’t keep ignoring the tooth.',
    },
    {
      name: 'Priya N.',
      designation: 'In-chair whitening before a wedding',
      image: '/assets/images/standard_post_img06.jpg',
      text: 'Too much coffee, wedding photos coming up, and I didn’t want “glow-in-the-dark” white. They matched a natural shade, protected my gums properly, and my partner said I looked refreshed — which was exactly the brief.',
    },
  ];

  return (
    <div className="float-left w-100" ref={ref}>
      <section className="float-left w-100 testimonials-con testimonials-con--home-slider position-relative padding-top padding-bottom background-bg">
        <div className="container">
          <div className="heading-title-con text-center">
            <motion.span
              className="special-text d-inline-block"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Loved by Patients, Trusted by Families
            </motion.span>
            <motion.h2
              className="text-size-46 mb-0"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Authentic Stories of Comfort, <br /> Care, and Brighter Smiles.
            </motion.h2>
          </div>

          <motion.div
            className="testimonial-home-shell mt-5"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <button
              type="button"
              className="testimonial-home-nav testimonial-home-nav--prev"
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-angle-left" aria-hidden />
            </button>
            <button
              type="button"
              className="testimonial-home-nav testimonial-home-nav--next"
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-angle-right" aria-hidden />
            </button>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              speed={600}
              spaceBetween={20}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              navigation={{
                prevEl: '.testimonial-home-nav--prev',
                nextEl: '.testimonial-home-nav--next',
              }}
              breakpoints={{
                0: { spaceBetween: 16 },
                768: { spaceBetween: 24 },
              }}
              className="testimonial-home-swiper"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={`${t.name}-${index}`}>
                  <article className="testimonial-home-card">
                    <div className="testimonial-home-card__top">
                      <div className="testimonial-home-card__quote-icon" aria-hidden>
                        <i className="fa-solid fa-quote-left" />
                      </div>
                      <div className="testimonial-home-card__stars" aria-label="5 out of 5 stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <i key={s} className="fa-solid fa-star" aria-hidden />
                        ))}
                      </div>
                    </div>
                    <blockquote className="testimonial-home-card__quote mb-0">
                      <p className="mb-0">{t.text}</p>
                    </blockquote>
                    <footer className="testimonial-home-card__footer">
                      <figure className="testimonial-home-card__avatar mb-0">
                        <img
                          src={t.image}
                          alt=""
                          width={96}
                          height={96}
                          decoding="async"
                          loading="lazy"
                        />
                      </figure>
                      <div className="testimonial-home-card__meta">
                        <cite className="testimonial-home-card__name mb-0">{t.name}</cite>
                        <span className="testimonial-home-card__role d-block">{t.designation}</span>
                      </div>
                    </footer>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
