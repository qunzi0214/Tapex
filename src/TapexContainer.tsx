import React, { FC } from 'react'
import { Form, Table } from 'antd'

import { columnsHandler } from './utils'

// types
import { TapexInstance, TapexColumnsType } from './types'
interface TapexContainerProps {
  tapex: TapexInstance
  dataSource: Array<Record<string, any>>
  columns: TapexColumnsType
  scroll?: any
  expandable?: any
}

const TapexContainer: FC<TapexContainerProps> = ({
  tapex,
  dataSource,
  columns,
  scroll,
  expandable,
}) => {
  return (
    <Form form={tapex}>
      <Table
        columns={columnsHandler(columns, tapex.getRootKey())}
        dataSource={dataSource}
        scroll={scroll}
        pagination={false}
        expandable={expandable}
        bordered
      />
    </Form>
  )
}

export default TapexContainer
