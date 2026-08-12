import type { NavLink } from '../types'

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Service', href: '#service' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQ', href: '#faq' },
]

/**
 * Returns navigation links.
 * Simulated async — replace with real fetch() when a backend is ready.
 */
export async function fetchNavLinks(): Promise<NavLink[]> {
  return Promise.resolve(NAV_LINKS)
}
