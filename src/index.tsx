import React from 'react'

// styles
import './index.less'

// modules
export { useTapex } from './hooks'

export interface TapexProps {
  className?: string
}

const Tapex: React.FC<TapexProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      test
    </div>
  )
}

export default Tapex
