import testimonialImage from '../assets/testimonial.jpg'
import clientLogos from '../assets/clients-logos.svg'

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-section__inner">
        {/* Left: photo */}
        <div className="testimonial-section__media">
          <img
            src={testimonialImage}
            alt="Customer testimonial portrait of Tim Smith"
            className="testimonial-section__photo"
          />
        </div>

        {/* Right: quote + author */}
        <div className="testimonial-section__body">
          <blockquote className="testimonial-section__quote">
            <p className="testimonial-section__text">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Fusce egestas tristique ultrices. Nam tempor, augue nec
              tincidunt molestie, massa nunc varius arcu.
            </p>
          </blockquote>

          <footer className="testimonial-section__author">
            {/* Decorative quote mark */}
            <span className="testimonial-section__quote-mark" aria-hidden="true">
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                <path
                  d="M0 28V17.6C0 12.427 1.493 8.373 4.48 5.44 7.467 2.453 11.68.96 17.12.96v5.12c-2.88 0-5.12.8-6.72 2.4-1.547 1.6-2.347 3.84-2.4 6.72H14V28H0Zm22.88 0V17.6c0-5.173 1.493-9.227 4.48-12.16C30.347 2.453 34.56.96 40 .96v5.12c-2.88 0-5.12.8-6.72 2.4-1.547 1.6-2.347 3.84-2.4 6.72H36.88V28H22.88Z"
                  fill="#4CAF4F"
                  opacity="0.25"
                />
              </svg>
            </span>
            <div className="testimonial-section__author-info">
              <cite className="testimonial-section__author-name">
                Tim Smith
              </cite>
              <span className="testimonial-section__author-org">
                British Dragon Boat Racing Association
              </span>
            </div>
          </footer>
        </div>
      </div>

      {/* Bottom: client logos row */}
      <div className="testimonial-section__clients">
        <img
          src={clientLogos}
          alt="Featured customers logos"
          className="testimonial-section__clients-img"
        />
        <a href="#" className="testimonial-section__meet-link">
          Meet all customers →
        </a>
      </div>
    </section>
  )
}
