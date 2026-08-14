import testimonialImage from '../assets/image 9.svg'
import logo1Image from '../assets/Logo(1).svg'
import logo2Image from '../assets/Logo(2).svg'
import logo3Image from '../assets/Logo(3).svg'
import logo4Image from '../assets/Logo(4).svg'
import logo5Image from '../assets/Logo(5).svg'
import logo6Image from '../assets/Logo(6).svg'

const clientLogos = [
  { id: 1, src: logo1Image, alt: 'Client logo 1', bg: '#EBF5E9' },
  { id: 2, src: logo2Image, alt: 'Client logo 2', bg: '#F5F7FA' },
  { id: 3, src: logo3Image, alt: 'Client logo 3', bg: '#F5F7FA' },
  { id: 4, src: logo4Image, alt: 'Client logo 4', bg: '#F5F7FA' },
  { id: 5, src: logo5Image, alt: 'Client logo 5', bg: '#F5F7FA' },
  { id: 6, src: logo6Image, alt: 'Client logo 6', bg: '#F5F7FA' },
]

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial" aria-label="Customer testimonial">
      <div className="testimonial-section__container">
        {/* Left: photo */}
        <img
          src={testimonialImage}
          alt="Tim Smith from British Dragon Boat Racing Association"
          className="testimonial-section__image"
        />

        {/* Right: content */}
        <div className="testimonial-section__body">
          <blockquote className="testimonial-section__quote">
            <p className="testimonial-section__text">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
              vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
              ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit
              elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget
              lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
              sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
              efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac
              sit amet magna.
            </p>
          </blockquote>

          <div className="testimonial-section__author">
            <span className="testimonial-section__author-name">Tim Smith</span>
            <span className="testimonial-section__author-org">British Dragon Boat Racing Association</span>
          </div>

          <div className="testimonial-section__clients">
            <div className="testimonial-section__logos">
              {clientLogos.map((logo) => (
                <div key={logo.id} className="testimonial-section__logo-wrap" style={{ backgroundColor: logo.bg }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="testimonial-section__logo"
                    width="48"
                    height="48"
                  />
                </div>
              ))}
            </div>
            <a href="#" className="testimonial-section__meet-link">
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
