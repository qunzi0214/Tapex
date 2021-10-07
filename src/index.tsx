import React, {
  FC,
} from 'react'
import { Table } from 'antd'
// import { InfoCircleOutlined } from '@ant-design/icons'

// styles
import './index.less'

// components
import InfiniteScrollWrapper from './components/InfiniteScrollWrapper'
import InfiniteScrollRow from './components/InfiniteScrollRow'
import InfiniteScrollCell from './components/InfiniteScrollCell'

interface TapexProps{
  className?: string
  bordered?: boolean
  infiniteScroll?: boolean
  columns?: any
  dataSource?: any
}

const Tapex: FC<TapexProps> = ({
  className,
  bordered,
  infiniteScroll = false,
  columns,
  dataSource,
}) => {
  return (
    <div className={className}>
      <Table
        className='tapex-root'
        bordered={bordered}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1800 }}
        components={infiniteScroll
          ? {
              body: {
                wrapper: InfiniteScrollWrapper,
                row: InfiniteScrollRow,
                cell: InfiniteScrollCell,
              },
            }
          : undefined}
      />
    </div>
  )
}

export default Tapex
