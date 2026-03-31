import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ToolIcon } from './ToolIcon'

describe('ToolIcon', () => {
  it('renders img when iconUrl provided', () => {
    render(
      <ToolIcon
        iconUrl="https://cdn.simpleicons.org/anthropic/E91E78"
        monogramFallback="CP"
        brandColor="#E91E78"
        name="Claude Projects"
      />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders monogram when iconUrl is null', () => {
    render(
      <ToolIcon
        iconUrl={null}
        monogramFallback="AC"
        brandColor="#40E0D0"
        name="AI Coaching"
      />
    )
    expect(screen.getByText('AC')).toBeInTheDocument()
  })

  it('switches to monogram on img error', () => {
    render(
      <ToolIcon
        iconUrl="https://bad-url.com/icon.svg"
        monogramFallback="CP"
        brandColor="#E91E78"
        name="Claude Projects"
      />
    )
    fireEvent.error(screen.getByRole('img'))
    expect(screen.getByText('CP')).toBeInTheDocument()
  })
})
