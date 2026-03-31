import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders name and tagline', () => {
    render(<HeroSection />)
    expect(screen.getByText('ELLA SMITH')).toBeInTheDocument()
    expect(screen.getByText('Ella Vibe Working')).toBeInTheDocument()
  })

  it('renders identity tags', () => {
    render(<HeroSection />)
    expect(screen.getByText('Systems Thinker')).toBeInTheDocument()
    expect(screen.getByText('AI-First')).toBeInTheDocument()
    expect(screen.getByText('Creative Experimenter')).toBeInTheDocument()
  })

  it('renders portfolio label', () => {
    render(<HeroSection />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
