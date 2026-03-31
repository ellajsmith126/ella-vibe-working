import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
  style?: CSSProperties
}

export function AnimatedCounter({ value, duration = 1000, className, style }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const match = value.match(/^([^\d]*?)(\d+)(.*)$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const prefix = match[1]
    const target = parseInt(match[2], 10)
    const suffix = match[3]

    if (isNaN(target) || target === 0) {
      setDisplay(value)
      return
    }

    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [value, duration])

  return <span className={className} style={style}>{display}</span>
}
