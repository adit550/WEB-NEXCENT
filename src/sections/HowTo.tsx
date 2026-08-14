import Button from '../components/Button'
import deviceImage    from '../assets/Device.svg'
import padlockImage   from '../assets/Padlock.svg'
import plantImage     from '../assets/Plant.svg'
import speechBubble   from '../assets/speech-bubble.svg'
import characterImage from '../assets/Character.svg'

export default function HowTo() {
  return (
    <section className="howto-section" id="feature" aria-labelledby="howto-title">

      {/* ── Illustration ─────────────────────────────────────────────
          One container, position:relative, 441×433 px (Figma frame).
          Every asset is position:absolute relative to this container.
          Layer order (DOM = paint order, back → front):
            Plant → Padlock → Device → Character → speech-bubble
      ──────────────────────────────────────────────────────────── */}
      <div className="illu">
        <img src={plantImage}     className="illu__plant"    alt="" aria-hidden="true" />
        <img src={padlockImage}   className="illu__padlock"  alt="" aria-hidden="true" />
        <img src={deviceImage}    className="illu__device"   alt="Mobile device illustration" />
        <img src={characterImage} className="illu__char"     alt="" aria-hidden="true" />
        <img src={speechBubble}   className="illu__bubble"   alt="" aria-hidden="true" />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="howto-section__content">
        <h2 id="howto-title" className="howto-section__title">
          How to design your site footer like we did
        </h2>
        <p className="howto-section__description">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
          libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button label="Learn More" variant="primary" />
      </div>

    </section>
  )
}
