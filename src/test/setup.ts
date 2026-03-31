import '@testing-library/jest-dom'

// Mock IntersectionObserver for Framer Motion's whileInView
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
