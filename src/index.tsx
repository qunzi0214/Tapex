import React from 'react'
import cs from 'classnames'

// modules
import { useTapex } from './hooks'
import TapexContainer from './TapexContainer'

// styles
import './index.less'

// types
import { TapexInstance } from './types'
interface TapexProps {
  tapex: TapexInstance
  columns: any
  scroll?: any
  expandable?: any
  className?: string
}

const Tapex: React.FC<TapexProps> = ({
  tapex,
  columns,
  scroll,
  expandable,
  className,
}) => {
  return (
    <div className={cs(className, 'tapex-root')}>
      <TapexContainer
        tapex={tapex}
        dataSource={tapex.getTableData()}
        columns={columns}
        scroll={scroll}
        expandable={expandable}
      />
    </div>
  )
}

export { useTapex }
export default Tapex
