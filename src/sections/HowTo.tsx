import Button from '../components/Button'
import howToImage from '../assets/feature-highlight.png'

export default function HowTo() {
  return (
    <section className="howto-section">
      {/* Left: illustration */}
      <div className="howto-section__image">
        <img
          src={howToImage}
          alt="Nexcent mobile application illustration showing a person using a smartphone"
          className="howto-section__img"
        />
      </div>

      {/* Right: content */}
      <div className="howto-section__content">
        <h2 className="howto-section__title">
          How to design your site footer like we did
        </h2>
        <p className="howto-section__description">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec eu orci eu risus tincidunt fermentum.
          Fusce ac felis sit amet ligula pharetra condimentum.
        </p>
        <Button label="Learn more" variant="primary" />
      </div>
    </section>
  )
}
