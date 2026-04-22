const testimonials = [
  {
    name: 'Kevin James',
    designation: 'Happy Client',
    image: '/assets/images/standard_post_img01.jpg',
    text: 'Smilora has the friendliest team I have ever encountered. They made my treatment stress-free and the whitening results were outstanding.',
  },
  {
    name: 'Sophia Martinez',
    designation: 'Happy Client',
    image: '/assets/images/standard_post_img02.jpg',
    text: 'Everything felt premium and professional. My dentist explained each step clearly, and I felt comfortable during the entire visit.',
  },
  {
    name: 'Emma Richardson',
    designation: 'Happy Client',
    image: '/assets/images/standard_post_img03.jpg',
    text: 'The clinic is clean, modern, and welcoming. The team answered all my questions and delivered care that exceeded my expectations.',
  },
  {
    name: 'Michael Thompson',
    designation: 'Happy Client',
    image: '/assets/images/standard_post_img04.jpg',
    text: 'From booking to follow-up, the experience was smooth. Smilora combines advanced treatment with genuine care for every patient.',
  },
];

export default function TestimonialSectionModernFour() {
  return (
    <section className="tw-testimonials-modern float-left w-100 position-relative">
      <div className="container">
        <div className="tw-testimonials-modern__head text-center">
          <span className="tw-testimonials-modern__eyebrow">Patient Voices</span>
          <h2 className="text-size-46 mb-0">What Patients Say About Smilora</h2>
        </div>

        <div className="tw-testimonials-modern__grid">
          {testimonials.map((item) => (
            <article className="tw-testimonials-modern__card" key={item.name}>
              <div className="tw-testimonials-modern__stars" aria-label="5 star rating">
                <i className="fa-solid fa-star" aria-hidden />
                <i className="fa-solid fa-star" aria-hidden />
                <i className="fa-solid fa-star" aria-hidden />
                <i className="fa-solid fa-star" aria-hidden />
                <i className="fa-solid fa-star" aria-hidden />
              </div>
              <p className="tw-testimonials-modern__copy mb-0">{item.text}</p>
              <div className="tw-testimonials-modern__author">
                <img src={item.image} alt={item.name} className="tw-testimonials-modern__avatar" />
                <div>
                  <h3 className="tw-testimonials-modern__name mb-0">{item.name}</h3>
                  <span className="tw-testimonials-modern__role">{item.designation}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
