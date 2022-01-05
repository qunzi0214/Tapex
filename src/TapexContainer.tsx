import React, { FC, useEffect, useState } from 'react'
import { Form, Table } from 'antd'

import { columnsHandler, ErrorListContext } from './utils'

// types
import {
  TapexInstance,
  TapexColumnsType,
  TapexRowData,
  ErrListType,
} from './types'
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
  const [errorList, setErrorList] = useState<ErrListType>(undefined)

  useEffect(() => {
    tapex.initValidateCallBack(
      (errList: ErrListType) => setErrorList(errList),
    )
  }, [])

  return (
    <Form form={tapex}>
      <ErrorListContext.Provider value={errorList}>
        <Table
          columns={columnsHandler(columns, tapex)}
          rowKey={(record: any) => record.uniqueKey}
          dataSource={dataSource}
          scroll={scroll}
          pagination={false}
          expandable={expandable}
          bordered
        />
      </ErrorListContext.Provider>
    </Form>
  )
}

export default TapexContainer
