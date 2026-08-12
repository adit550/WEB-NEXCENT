import { useReducer, type FormEvent } from 'react'
import { subscribeNewsletter } from '../api/footer'
import {
  newsletterReducer,
  initialNewsletterState,
} from '../store/newsletterReducer'

/**
 * Encapsulates all newsletter form state and business logic.
 *
 * @example
 * const { email, status, errorMessage, handleEmailChange, handleSubmit } = useNewsletter()
 */
export function useNewsletter() {
  const [state, dispatch] = useReducer(newsletterReducer, initialNewsletterState)

  function handleEmailChange(value: string) {
    dispatch({ type: 'SET_EMAIL', payload: value })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!state.email.trim()) {
      dispatch({ type: 'SET_ERROR', payload: 'Email address is required.' })
      return
    }

    dispatch({ type: 'SET_STATUS', payload: 'loading' })

    try {
      await subscribeNewsletter(state.email)
      dispatch({ type: 'SET_STATUS', payload: 'success' })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.'
      dispatch({ type: 'SET_ERROR', payload: message })
    }
  }

  function handleReset() {
    dispatch({ type: 'RESET' })
  }

  return {
    email: state.email,
    status: state.status,
    errorMessage: state.errorMessage,
    handleEmailChange,
    handleSubmit,
    handleReset,
  }
}
