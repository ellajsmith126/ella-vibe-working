import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-lg p-2 text-text-muted transition-colors duration-150 hover:bg-surface hover:text-text-main dark:hover:bg-surface-dim dark:hover:text-text-light"
      style={{ minWidth: 44, minHeight: 44 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
