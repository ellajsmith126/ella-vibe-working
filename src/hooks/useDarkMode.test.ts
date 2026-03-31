import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useDarkMode } from './useDarkMode'

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('initialises to false when no localStorage and no system preference', () => {
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(false)
  })

  it('reads true from localStorage and initialises dark', () => {
    localStorage.setItem('ella-dark-mode', 'true')
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(true)
  })

  it('toggle flips state and persists', () => {
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(false)
    act(() => result.current.toggle())
    expect(result.current.isDark).toBe(true)
    expect(localStorage.getItem('ella-dark-mode')).toBe('true')
  })

  it('falls back gracefully when localStorage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage disabled')
    })
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(false)
  })
})
