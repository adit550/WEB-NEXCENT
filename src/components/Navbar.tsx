import { useState } from 'react'
import Button from './Button'
import nexcentLogo from '../assets/Logo.svg'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Service', href: '#service' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // position: relative diperlukan agar mobile drawer (position: absolute) menempel ke navbar
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Nexcent home">
          <img
            src={nexcentLogo}
            alt="Nexcent"
            className="navbar__logo-img"
            height="24"
          />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link${i === 0 ? ' navbar__link--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop action buttons */}
        <div className="navbar__actions">
          <Button label="Login" variant="outline" />
          <Button label="Sign up" variant="primary" />
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile drawer — position absolute relatif terhadap .navbar */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <Button label="Login" variant="outline" onClick={() => setMenuOpen(false)} />
          <Button label="Sign up" variant="primary" onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  )
}
