import { useState, useMemo } from 'react'
import { Form } from 'antd'

import { TapexInstance, TapexRowData } from './types'

// hooks
export const useTapex = (rootKey: string = 'root'): [TapexInstance] => {
  const [form] = Form.useForm()
  const [tableData, setTableData] = useState<TapexRowData[]>([])
  const tapex = useMemo<TapexInstance>(
    () => ({
      ...form,

      getRootKey () {
        return rootKey
      },
      getTableData () {
        return tableData
      },

      setAllValues (values) {
        this.setFieldsValue({
          [rootKey]: values,
        })
        setTableData([...values])
      },
      getAllValues () {
        return this.getFieldsValue(true)[rootKey] ?? []
      },
      getValueByPath (path) {
        const [rowIndex, field] = path
        return this.getAllValues()?.[rowIndex]?.[field]
      },
    }),
    [tableData],
  )

  return [tapex]
}
