import { Component, type ReactNode, type ErrorInfo } from 'react'
import { logger } from '../lib/logger'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('ErrorBoundary caught an error', {
      error: error.message,
      componentStack: errorInfo.componentStack ?? '',
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center p-12">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-surface-dim">
              <p className="text-base text-text-main dark:text-text-light">
                Something went wrong. Please refresh the page.
              </p>
            </div>
          </div>
        )
      )
    }
    return this.props.children
  }
}
