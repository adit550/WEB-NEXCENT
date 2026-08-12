import { fetchFooterLinks } from '../api/footer'
import { useAsyncData } from './useAsyncData'

/**
 * Fetches footer link groups.
 */
export function useFooterLinks() {
  return useAsyncData(fetchFooterLinks)
}
