import React from 'react'
import cs from 'classnames'

// styles
import './index.less'

// types
import { TapexInstance } from './types'
interface TapexProps {
  className?: string
  tapex: TapexInstance
}

// modules
export { useTapex } from './hooks'

const Tapex: React.FC<TapexProps> = ({
  className,
}) => {
  return (
    <div className={cs(className, 'tapex-root')}>
      test
    </div>
  )
}

export default Tapex
