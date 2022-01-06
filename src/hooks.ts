import { useState, useMemo, useRef } from 'react'
import { Form } from 'antd'
import Schema from 'async-validator'

import { TapexInstance, TapexRowData, ErrListType } from './types'

// hooks
export const useTapex = (rootKey: string = 'root'): [TapexInstance] => {
  const [form] = Form.useForm()
  const [tableData, setTableData] = useState<TapexRowData[]>([])
  const validatorObj = useRef<Record<string, any>>({})
  const validatorCallback = useRef<Function>()

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

      addRulesByPath (rowKey, field, rules) {
        validatorObj.current[rowKey] = validatorObj.current[rowKey] ?? {}
        validatorObj.current[rowKey][field] = rules ?? []
      },
      initValidateCallBack (callback) {
        validatorCallback.current = callback
      },
      validateAllValues () {
        if (Object.keys(validatorObj).length <= 0) return

        const data = this.getAllValues()
        const promiseList: Array<Promise<any>> = []
        const errObj: ErrListType = {}

        data.forEach(rowData => {
          const { uniqueKey } = rowData
          const trigger = new Schema(validatorObj.current[uniqueKey])
          const p = trigger.validate(rowData)

          p.catch(({ errors }) => {
            errors.forEach(({ field, message }: any) => {
              errObj[uniqueKey] = errObj[uniqueKey] ?? {}
              errObj[uniqueKey][field] = errObj[uniqueKey][field] ?? []
              errObj[uniqueKey][field].push(message)
            })
          })

          promiseList.push(p)
        })

        const all = Promise.all(promiseList)
        all.catch(() => {
          validatorCallback.current?.(errObj)
        })
        return all
      },
    }),
    [tableData],
  )

  return [tapex]
}
