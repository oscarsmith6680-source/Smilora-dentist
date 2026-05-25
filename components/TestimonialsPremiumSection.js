'use client';

const testimonials = [
  {
    name: 'Kevin James',
    designation: 'Whitening Patient',
    image: '/assets/images/standard_post_img01.jpg',
    text: 'Oralsquad has the friendliest team I have ever encountered. They go above and beyond to make every visit stress-free. I had my teeth cleaned and whitened, and the results are amazing.',
    rating: 5,
  },
  {
    name: 'Sophia Martinez',
    designation: 'Family Care Patient',
    image: '/assets/images/standard_post_img02.jpg',
    text: 'From the warm welcome at reception to the attentive care during my appointment, everything felt professional and well organized. The dentist explained treatment options clearly and made sure I stayed comfortable.',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    designation: 'Preventive Care Patient',
    image: '/assets/images/standard_post_img03.jpg',
    text: 'I have visited several dental clinics, but Oralsquad stands out for professionalism and modern care. The team answered all my questions and made me feel confident in every step of my treatment.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    designation: 'Restorative Care Patient',
    image: '/assets/images/standard_post_img04.jpg',
    text: 'The clinic is spotless, modern, and genuinely patient-focused. My treatment plan was explained in plain language, and I felt cared for throughout the process. Highly recommended for quality dental care.',
    rating: 5,
  },
  {
    name: 'Olivia Bennett',
    designation: 'Cosmetic Dentistry Patient',
    image: '/assets/images/standard_post_img02.jpg',
    text: 'I came in feeling nervous, but the team made me feel relaxed right away. The final cosmetic result looks natural and exactly what I hoped for. Service quality and follow-up were excellent.',
    rating: 5,
  },
  {
    name: 'Daniel Carter',
    designation: 'First-Time Patient',
    image: '/assets/images/standard_post_img03.jpg',
    text: 'Booking was easy, waiting time was minimal, and the consultation was very detailed. I appreciated the transparent pricing and the thoughtful guidance on long-term oral health.',
    rating: 5,
  },
];

function StarRow({ count }) {
  return (
    <div className="tp-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, idx) => (
        <i key={idx} className="fa-solid fa-star" aria-hidden />
      ))}
    </div>
  );
}

export default function TestimonialsPremiumSection() {
  return (
    <section className="tp-section float-left w-100 position-relative">
      <div className="container">
        <div className="tp-heading text-center">
          <span className="tp-eyebrow">Patient Experiences</span>
          <h2 className="tp-title mb-0">Trusted Care, Shared with Confidence</h2>
          <p className="tp-subtitle mb-0">
            Real stories from patients who chose Oralsquad for expert treatment, clear communication,
            and compassionate support.
          </p>
        </div>

        <div className="tp-masonry">
          {testimonials.map((item) => (
            <article key={item.name} className="tp-card">
              <div className="tp-quote-icon" aria-hidden>
                <i className="fa-solid fa-quote-left" />
              </div>

              <StarRow count={item.rating} />
              <p className="tp-copy mb-0">{item.text}</p>

              <div className="tp-author">
                <img src={item.image} alt={item.name} className="tp-avatar" />
                <div>
                  <h3 className="tp-name mb-0">{item.name}</h3>
                  <span className="tp-role">{item.designation}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
