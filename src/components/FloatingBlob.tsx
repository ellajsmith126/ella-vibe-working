interface FloatingBlobProps {
  color: string
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  animation: 'blob-drift-1' | 'blob-drift-2' | 'blob-drift-3'
  duration?: number
  borderRadius?: string
}

export function FloatingBlob({
  color,
  size,
  top,
  left,
  right,
  bottom,
  animation,
  duration = 20,
  borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%',
}: FloatingBlobProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        borderRadius,
        background: `radial-gradient(ellipse, ${color}, transparent 70%)`,
        filter: 'blur(50px)',
        animation: `${animation} ${duration}s ease-in-out infinite`,
        willChange: 'transform',
      }}
    />
  )
}
