import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative mx-auto max-w-4xl px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Geometric accents */}
      <div className="absolute top-8 right-12 h-16 w-24 bg-primary/10 rounded" aria-hidden="true" />
      <div className="absolute bottom-12 left-8 h-8 w-16 bg-accent/20 rounded" aria-hidden="true" />
      <div className="absolute top-20 left-16 h-3 w-12 bg-primary-light/30 rounded" aria-hidden="true" />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
        Vibe Working
      </p>
      <h1
        className="font-black text-text dark:text-text-dark leading-[0.95] mb-6"
        style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
      >
        Ella's AI System,
        <br />
        <span className="text-primary">Made Visible.</span>
      </h1>
      <p className="max-w-xl text-lg text-text-muted leading-relaxed">
        Here's where I'm at with Vibe Working — what I've built, how it fits into my day-to-day, and what's genuinely different because of it.
      </p>
    </motion.section>
  )
}
