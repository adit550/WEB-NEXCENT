import type { ReactNode } from 'react'

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Features ────────────────────────────────────────────────────────────────

export interface FeatureItem {
  id: number
  title: string
  description: string
  icon: ReactNode
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface StatItem {
  id: number
  value: string
  label: string
  icon: ReactNode
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number
  title: string
  category: string
  image: string
  imageAlt: string
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: FooterLink[]
}

export interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}

// ─── Newsletter ──────────────────────────────────────────────────────────────

export type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error'

export interface NewsletterState {
  email: string
  status: NewsletterStatus
  errorMessage: string | null
}

// ─── Async state wrapper (generic) ───────────────────────────────────────────

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}
