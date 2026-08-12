import testimonialImage from '../assets/testimonial.jpg'

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial" aria-label="Customer testimonial">
      <div className="testimonial-section__container">
        <img
          src={testimonialImage}
          alt="Customer testimonial featuring Tim Smith from British Dragon Boat Racing Association"
          className="testimonial-section__image"
        />
      </div>
    </section>
  )
}
