const PARTICLES = [
  { top: '18%', left: '12%', size: 4, color: 'rgba(233,30,120,0.5)', delay: 0 },
  { top: '55%', right: '18%', size: 3, color: 'rgba(64,224,208,0.5)', delay: 2 },
  { top: '35%', right: '28%', size: 5, color: 'rgba(255,107,157,0.4)', delay: 1 },
  { bottom: '30%', left: '32%', size: 3, color: 'rgba(64,224,208,0.4)', delay: 3 },
  { top: '70%', left: '65%', size: 4, color: 'rgba(233,30,120,0.3)', delay: 4 },
  { top: '25%', right: '45%', size: 3, color: 'rgba(255,107,157,0.35)', delay: 5 },
  { top: '80%', left: '80%', size: 3, color: 'rgba(64,224,208,0.3)', delay: 6 },
  { top: '15%', left: '50%', size: 4, color: 'rgba(233,30,120,0.25)', delay: 7 },
]

export function ParticleField() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            background: p.color,
            animation: `particle-float 8s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </>
  )
}
