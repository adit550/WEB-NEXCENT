import Button from '../components/Button'
import heroImage from '../assets/hero.png'

const DOTS = [0, 1, 2]

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Left: text content */}
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Lessons and insights{' '}
          <span>from 8 years</span>
        </h1>
        <p className="hero-section__subtitle">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className="hero-section__cta">
          <Button label="Register" variant="primary" />
        </div>
      </div>

      {/* Right: illustration */}
      <div className="hero-section__image">
        <img
          src={heroImage}
          alt="Nexcent platform illustration showing a developer working with code on a monitor"
          className="hero-section__img"
        />
      </div>

      {/* Carousel dots — center bottom of section */}
      <div className="hero-section__dots" aria-hidden="true">
        {DOTS.map((i) => (
          <span
            key={i}
            className={`hero-section__dot${i === 0 ? ' hero-section__dot--active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
