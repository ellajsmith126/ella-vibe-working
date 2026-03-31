import { describe, it, expect, vi, beforeEach } from 'vitest'
import { logger } from './logger'

describe('logger', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('error logs in both dev and prod', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    logger.error('test error', { key: 'value' })
    expect(spy).toHaveBeenCalledWith('[ERROR] test error', { key: 'value' })
  })

  it('info logs in dev mode', () => {
    const spy = vi.spyOn(console, 'info').mockImplementation(() => {})
    logger.info('test info')
    expect(spy).toHaveBeenCalled()
  })

  it('warn logs in dev mode', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    logger.warn('test warn')
    expect(spy).toHaveBeenCalled()
  })
})
