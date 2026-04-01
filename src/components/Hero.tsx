import { useState, useEffect, useRef, useCallback } from 'react';

function useCountUp(target: number, duration = 2800) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return { value, done };
}

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const spacing = 40;
    const radius = 2;
    const cols = Math.ceil(rect.width / spacing) + 1;
    const rows = Math.ceil(rect.height / spacing) + 1;

    let animId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const phase = (r * cols + c) * 0.4;
          const breathe = 0.03 + 0.03 * Math.sin(time * 0.001 + phase);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${breathe})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = draw();
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener('resize', handleResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

export function Hero() {
  const stat1 = useCountUp(10);
  const stat2 = useCountUp(4);
  const stat3 = useCountUp(3);

  return (
    <section className="hero" id="hero" style={{ position: 'relative' }}>
      <DotGrid />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-badge">
          <div className="dot" />
          JLS Trading Co
        </div>
        <h1 className="hero-h1">
          We <span style={{ color: '#ec4899' }}>Vibing</span>
          <span className="hero-period">.</span>
        </h1>
        <p className="hero-sub">
          This is a look at the tools I use, the systems I've built, and what's
          actually changed. Work, personal life, the whole thing.
        </p>
        <div className="hero-stats">
          <div>
            <div className="hstat-num">
              {stat1.value}{stat1.done && <em>+</em>}
            </div>
            <div className="hstat-label">Tools mastered</div>
          </div>
          <div>
            <div className="hstat-num">
              {stat2.value}{stat2.done && <em>&times;</em>}
            </div>
            <div className="hstat-label">Faster output</div>
          </div>
          <div>
            <div className="hstat-num">{stat3.value}</div>
            <div className="hstat-label">Weeks to build this</div>
          </div>
        </div>
      </div>
    </section>
  );
}
