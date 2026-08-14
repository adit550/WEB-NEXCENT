import { useState } from 'react'
import Button from './Button'
import nexcentLogo from '../assets/Logo.svg'
import { useAsyncData } from '../hooks/useAsyncData'
import { fetchNavLinks } from '../api/nav'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { data: navLinks } = useAsyncData(fetchNavLinks)

  const links = navLinks ?? []

  return (
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
            {links.map((link, i) => (
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
          <Button label="Login" variant="text" />
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

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {links.map((link) => (
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
          <Button label="Login" variant="text" onClick={() => setMenuOpen(false)} />
          <Button label="Sign up" variant="primary" onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  )
}
