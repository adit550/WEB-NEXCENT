import type { NewsletterState, NewsletterStatus } from '../types'

// ─── State ───────────────────────────────────────────────────────────────────

export const initialNewsletterState: NewsletterState = {
  email: '',
  status: 'idle',
  errorMessage: null,
}

// ─── Actions ─────────────────────────────────────────────────────────────────

export type NewsletterAction =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_STATUS'; payload: NewsletterStatus }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'RESET' }

// ─── Reducer ─────────────────────────────────────────────────────────────────

export function newsletterReducer(
  state: NewsletterState,
  action: NewsletterAction,
): NewsletterState {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload, errorMessage: null }

    case 'SET_STATUS':
      return { ...state, status: action.payload }

    case 'SET_ERROR':
      return { ...state, status: 'error', errorMessage: action.payload }

    case 'RESET':
      return initialNewsletterState

    default:
      return state
  }
}
