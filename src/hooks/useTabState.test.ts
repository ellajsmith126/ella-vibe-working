import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTabState } from './useTabState'

describe('useTabState', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
  })

  it('defaults to tools tab', () => {
    const { result } = renderHook(() => useTabState())
    expect(result.current.activeTab).toBe('tools')
  })

  it('reads valid tab from URL', () => {
    window.history.replaceState({}, '', '/?tab=impact')
    const { result } = renderHook(() => useTabState())
    expect(result.current.activeTab).toBe('impact')
  })

  it('falls back to tools for invalid tab param', () => {
    window.history.replaceState({}, '', '/?tab=notreal')
    const { result } = renderHook(() => useTabState())
    expect(result.current.activeTab).toBe('tools')
  })

  it('updates URL on tab change', () => {
    const { result } = renderHook(() => useTabState())
    act(() => result.current.setActiveTab('personal'))
    expect(result.current.activeTab).toBe('personal')
    expect(window.location.search).toBe('?tab=personal')
  })
})
