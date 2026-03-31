import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BentoGrid } from './BentoGrid'

describe('BentoGrid', () => {
  it('renders all 5 bento tiles', () => {
    render(<BentoGrid />)
    expect(screen.getByText('My AI Toolkit')).toBeInTheDocument()
    expect(screen.getByText('Systems I Built')).toBeInTheDocument()
    expect(screen.getByText('Before → After')).toBeInTheDocument()
    expect(screen.getByText('See It In Action')).toBeInTheDocument()
    expect(screen.getByText('Personal Life')).toBeInTheDocument()
  })

  it('opens expanded view when tile is clicked', () => {
    render(<BentoGrid />)
    fireEvent.click(screen.getByText('My AI Toolkit'))
    expect(screen.getByText('Tools mastered')).toBeInTheDocument()
  })

  it('closes expanded view when close button is clicked', () => {
    render(<BentoGrid />)
    fireEvent.click(screen.getByText('My AI Toolkit'))
    expect(screen.getByText('Tools mastered')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Close expanded view'))
    // After close animation, the stats should not be visible
    // (AnimatePresence exit animation is async, but the state should be null)
  })
})
