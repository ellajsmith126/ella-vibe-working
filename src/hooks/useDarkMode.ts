import { useState, useCallback, useEffect } from 'react'
import { logger } from '../lib/logger'

function getInitialDark(): boolean {
  try {
    const stored = localStorage.getItem('ella-dark-mode')
    if (stored !== null) return stored === 'true'
  } catch {
    logger.warn('localStorage unavailable for dark mode')
  }

  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return false
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      try {
        localStorage.setItem('ella-dark-mode', String(next))
      } catch {
        logger.warn('Could not persist dark mode preference')
      }
      return next
    })
  }, [])

  return { isDark, toggle }
}
