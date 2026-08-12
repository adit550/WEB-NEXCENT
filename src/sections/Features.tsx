import { useFeatures } from '../hooks/useFeatures'
import type { FeatureIconMap } from '../hooks/useFeatures'

const ICON_MAP: FeatureIconMap = {
  1: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 26c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  2: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M5 16h22M16 5c-3 4-3 18 0 22M16 5c3 4 3 18 0 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  3: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="10" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="22" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M2 26c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M22 20c2.761 0 6 1.567 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
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
                <h3 className="features-section__item-title">{feature.title}</h3>
                <p className="features-section__item-desc">{feature.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
