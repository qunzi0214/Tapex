import { useState } from 'react'
import { Form } from 'antd'

import { TapexInstance } from './types'

// hooks
export const useTapex = (rootKey: string = 'root'): TapexInstance => {
  const [form] = Form.useForm()
  const [tableData, setTableData] = useState<any[]>([])

  return {
    ...form,

    getRootKey () {
      return rootKey
    },
    getTableData () {
      return tableData
    },

    initAllValues (values) {
      this.setFieldsValue({
        [rootKey]: values,
      })
      setTableData(
        values.map((value, index) => ({
          ...value,
          key: String(index),
        })),
      )
    },
    getAllValues () {
      return this.getFieldsValue(true)[rootKey] ?? []
    },
    getValueByPath (path) {
      const [rowIndex, field] = path
      return this.getAllValues()?.[rowIndex]?.[field]
    },
    setValueByPath (path, value) {
      const [rowIndex, field] = path
      const values = this.getAllValues()

      if (rowIndex in values && field in values[rowIndex]) {
        values[rowIndex][field] = value
      }

      this.setFieldsValue({
        [rootKey]: values,
      })
      setTableData(
        values.map((value, index) => ({
          ...value,
          key: String(index),
        })),
      )
    },
  }
}
