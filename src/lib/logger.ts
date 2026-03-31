const IS_DEV = import.meta.env.DEV

export const logger = {
  info: (message: string, context?: Record<string, unknown>) => {
    if (IS_DEV) console.info(`[INFO] ${message}`, context ?? '')
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    if (IS_DEV) console.warn(`[WARN] ${message}`, context ?? '')
  },
  error: (message: string, context?: Record<string, unknown>) => {
    console.error(`[ERROR] ${message}`, context ?? '')
  },
}
