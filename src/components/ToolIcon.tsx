import { useState } from 'react'
import { logger } from '../lib/logger'

interface ToolIconProps {
  iconUrl: string | null
  monogramFallback: string
  brandColor: string
  name: string
}

export function ToolIcon({ iconUrl, monogramFallback, brandColor, name }: ToolIconProps) {
  const [imgFailed, setImgFailed] = useState(false)

  if (!iconUrl || imgFailed) {
    return (
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[10px] text-sm font-semibold"
        style={{
          color: brandColor,
          backgroundColor: `${brandColor}18`,
        }}
      >
        {monogramFallback}
      </div>
    )
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-white dark:bg-surface-dark">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        width={28}
        height={28}
        onError={() => {
          logger.warn(`Icon failed to load for ${name}`)
          setImgFailed(true)
        }}
      />
    </div>
  )
}
