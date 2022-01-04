import React, { FC } from 'react'
import { Form, Table } from 'antd'

import { columnsHandler } from './utils'

// types
import { TapexInstance, TapexColumnsType, TapexRowData } from './types'
interface TapexContainerProps {
  tapex: TapexInstance
  dataSource: TapexRowData[]
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
        rowKey={(record: any) => record.uniqueKey}
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
