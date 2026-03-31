import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.5)',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
