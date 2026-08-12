import Button from '../components/Button'
import featureHighlightImage from '../assets/how-to.png'

export default function FeatureHighlight() {
  return (
    <section className="feature-highlight-section" id="product" aria-labelledby="feature-highlight-title">
      {/* Left: illustration */}
      <div className="feature-highlight-section__image">
        <img
          src={featureHighlightImage}
          alt="Nexcent business productivity illustration showing a person managing tasks"
          className="feature-highlight-section__img"
        />
      </div>

      {/* Right: content */}
      <div className="feature-highlight-section__content">
        <h2 id="feature-highlight-title" className="feature-highlight-section__title">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="feature-highlight-section__description">
          Nexcent helps teams of all sizes streamline their operations, engage
          members effectively, and grow their community with confidence. From
          automating renewals to tracking event bookings, everything you need is
          in one place.
        </p>
        <Button label="Learn more" variant="primary" />
      </div>
    </section>
  )
}
