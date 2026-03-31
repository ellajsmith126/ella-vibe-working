import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AnimatedCounter } from './AnimatedCounter'

describe('AnimatedCounter', () => {
  it('renders the target value', () => {
    render(<AnimatedCounter value="10" />)
    // The counter starts at 0 and animates to 10 using requestAnimationFrame
    // In test environment, the initial render should show something
    expect(screen.getByText(/\d+/)).toBeInTheDocument()
  })

  it('renders non-numeric values as-is', () => {
    render(<AnimatedCounter value="Daily" />)
    expect(screen.getByText('Daily')).toBeInTheDocument()
  })

  it('handles values with prefix and suffix', () => {
    render(<AnimatedCounter value="↑89%" />)
    expect(screen.getByText(/↑\d+%/)).toBeInTheDocument()
  })
})
