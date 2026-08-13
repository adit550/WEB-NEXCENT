import { useFeatures } from '../hooks/useFeatures'
import type { FeatureIconMap } from '../hooks/useFeatures'
import icon4 from '../assets/Icon (4).svg'
import icon1 from '../assets/Icon (1).svg'
import icon2 from '../assets/Icon (2).svg'

const ICON_MAP: FeatureIconMap = {
  1: <img src={icon4} alt="" aria-hidden="true" width="65" height="56" />,
  2: <img src={icon1} alt="" aria-hidden="true" width="65" height="56" />,
  3: <img src={icon2} alt="" aria-hidden="true" width="65" height="56" />,
}

export default function Features() {
  const { features, loading, error } = useFeatures(ICON_MAP)

  return (
    <section className="features-section" id="service" aria-labelledby="features-title">
      <div className="features-section__inner">
        <div className="features-section__header">
          <h2 id="features-title" className="features-section__title">
            Manage your entire community in a single system
          </h2>
          <p className="features-section__subtitle">
            Who is Nexcent suitable for?
          </p>
        </div>

        {error && <p className="features-section__error" role="alert">{error}</p>}

        {!loading && !error && (
          <ul className="features-section__list">
            {features.map((feature) => (
              <li key={feature.id} className="features-section__item">
                <div className="features-section__icon-wrap">
                  {feature.icon}
                </div>
                <div className="features-section__item-body">
                  <h3 className="features-section__item-title">{feature.title}</h3>
                  <p className="features-section__item-desc">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
