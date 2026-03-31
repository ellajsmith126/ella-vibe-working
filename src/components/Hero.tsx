import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto max-w-4xl px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Animated geometric accents */}
      <motion.div
        className="absolute top-8 right-12 h-16 w-24 bg-primary/10 rounded"
        aria-hidden="true"
        initial={{ opacity: 0, x: 40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-12 left-8 h-8 w-16 bg-accent/20 rounded"
        aria-hidden="true"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute top-20 left-16 h-3 w-12 bg-primary-light/30 rounded"
        aria-hidden="true"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-24 right-24 h-10 w-10 rounded-full bg-accent/15"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
      />

      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Vibe Working
      </motion.p>
      <motion.h1
        className="font-black text-text-main dark:text-text-light leading-[0.95] mb-6"
        style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ella's AI System,
        <br />
        <span className="text-primary">Made Visible.</span>
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg text-text-muted leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        Here's where I'm at with Vibe Working — what I've built, how it fits into my day-to-day, and what's genuinely different because of it.
      </motion.p>
    </motion.section>
  )
}
