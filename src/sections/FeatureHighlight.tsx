import Button from '../components/Button'
import featureHighlightImage from '../assets/how-to.png'

export default function FeatureHighlight() {
  return (
    <section className="feature-highlight-section">
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
        <h2 className="feature-highlight-section__title">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="feature-highlight-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
        </p>
        <Button label="Learn more" variant="primary" />
      </div>
    </section>
  )
}
