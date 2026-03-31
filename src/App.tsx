import { ErrorBoundary } from './components/ErrorBoundary'
import { HeroSection } from './components/HeroSection'
import { BentoGrid } from './components/BentoGrid'
import { DarkModeToggle } from './components/DarkModeToggle'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-deeper text-text-light">
      <ErrorBoundary>
        <DarkModeToggle />
        <HeroSection />
        <main>
          <ErrorBoundary>
            <BentoGrid />
          </ErrorBoundary>
        </main>
        <footer className="max-w-[1100px] mx-auto px-6 py-8 text-center text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Built with Vibe Working
        </footer>
      </ErrorBoundary>
    </div>
  )
}
