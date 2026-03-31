import { motion } from 'framer-motion'
import { FloatingBlob } from './FloatingBlob'
import { ParticleField } from './ParticleField'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const tagStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
}

const tagFade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden px-5 py-16"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 40%, #1a1a2e 100%)' }}
    >
      <FloatingBlob
        color="rgba(233,30,120,0.25)"
        size={350}
        top="-15%"
        right="-5%"
        animation="blob-drift-1"
        duration={18}
      />
      <FloatingBlob
        color="rgba(64,224,208,0.2)"
        size={280}
        bottom="-10%"
        left="-8%"
        animation="blob-drift-2"
        duration={22}
        borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%"
      />
      <FloatingBlob
        color="rgba(255,107,157,0.15)"
        size={200}
        top="25%"
        left="18%"
        animation="blob-drift-3"
        duration={20}
        borderRadius="60% 40% 50% 50% / 50% 60% 40% 50%"
      />

      <ParticleField />

      <motion.div
        className="relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4"
          variants={fadeUp}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="font-black leading-[0.95] mb-5"
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #fff 0%, #fff 40%, #E91E78 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          variants={fadeUp}
        >
          ELLA SMITH
        </motion.h1>

        <motion.p
          className="text-xl font-normal tracking-wide"
          style={{ color: 'rgba(255,255,255,0.55)' }}
          variants={fadeUp}
        >
          Ella Vibe Working
        </motion.p>

        <motion.div
          className="mt-6 flex gap-2 justify-center flex-wrap"
          variants={tagStagger}
          initial="hidden"
          animate="visible"
        >
          {[
            { text: 'Systems Thinker', variant: 'pink' as const },
            { text: 'AI-First', variant: 'teal' as const },
            { text: 'Creative Experimenter', variant: 'pink' as const },
          ].map((tag) => (
            <motion.span
              key={tag.text}
              variants={tagFade}
              className="px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
              style={
                tag.variant === 'pink'
                  ? { background: 'rgba(233,30,120,0.15)', border: '1px solid rgba(233,30,120,0.25)', color: '#FF6B9D' }
                  : { background: 'rgba(64,224,208,0.1)', border: '1px solid rgba(64,224,208,0.2)', color: '#40E0D0' }
              }
            >
              {tag.text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Explore
        </span>
        <div
          className="relative rounded-[11px]"
          style={{ width: 22, height: 34, border: '1.5px solid rgba(255,255,255,0.2)' }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 2,
              height: 7,
              background: 'rgba(255,255,255,0.4)',
              animation: 'scroll-pulse 2s ease-in-out infinite',
              top: 6,
            }}
          />
        </div>
      </div>
    </section>
  )
}
