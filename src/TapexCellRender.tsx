import React, { FC, useEffect, useState, useContext } from 'react'
import { Tooltip, Form } from 'antd'
import cs from 'classnames'
import Schema from 'async-validator'

import { ErrorListContext } from './utils'

import { TapexCellRenderProps } from './types'

class CallbackLimiter {
  callback: Function | undefined

  constructor () {
    this.callback = undefined
  }

  add (callback: Function): void {
    if (this.callback !== undefined) this.callback()
    this.callback = callback
  }
}

const callbackLimiter = new CallbackLimiter()

export const TapexCellRender: FC<TapexCellRenderProps> = ({
  record,
  rowIndex,
  colIndex,

  tapex,
  formRootKey,
  injectRecord,
  cellProps,
  CellRender,
  TextRender,
}) => {
  const { uniqueKey } = record

  const [cellType, setCellType] = useState<'read' | 'edit'>('read')
  const [textType, setTextType] = useState<'normal' | 'empty' | 'error'>('empty')
  const [text, setText] = useState('')
  const [toolText, setToolText] = useState('')

  const [cellErrors, setCellErrors] = useState<string[] | undefined>(undefined)
  const errorList = useContext(ErrorListContext)

  const { placeholder, rules, ...restProps } = typeof cellProps === 'function'
    ? cellProps(record)
    : cellProps

  useEffect(() => {
    handleTextState(record[colIndex])
    tapex.addRulesByPath(uniqueKey, colIndex, rules)
  }, [record, colIndex])

  useEffect(() => {
    if ((errorList?.[uniqueKey]?.[colIndex]) !== undefined) {
      setCellErrors(errorList[uniqueKey][colIndex])
    }
  }, [errorList, uniqueKey])

  function handleTextState (cellData: Record<string, any> & string): void {
    const txt = TextRender(cellData)

    if (txt !== undefined && txt !== '') {
      setTextType('normal')
      setText(txt)
      setToolText(txt)
    } else {
      setTextType('empty')
      setText(placeholder)
      setToolText('')
    }
  }

  function handleSelfValidate (cellData: any): void {
    if (rules !== undefined && rules.length > 0) {
      const trigger = new Schema({ [colIndex]: rules })
      trigger
        .validate({ [colIndex]: cellData })
        .then(() => setCellErrors(undefined))
        .catch(({ errors }) =>
          setCellErrors(errors.map(({ message }: any) => message)),
        )
    }
  }

  return (
    <Tooltip
      title={cellErrors?.[0] ?? (cellType === 'read' ? toolText : undefined)}
      color={(cellErrors !== undefined) && cellErrors?.length > 0 ? '#f33' : undefined}
      destroyTooltipOnHide
      mouseEnterDelay={(cellErrors !== undefined) && cellErrors?.length > 0 ? 0 : 1}
    >
      <div
        className={cs({
          'tapex-cell-box': true,
          'tapex-cell-empty': textType === 'empty',
          'tapex-cell-error': (cellErrors !== undefined) && cellErrors?.length > 0,
        })}
      >
        {cellType === 'read' && (
          <p
            className='tapex-cell-txt'
            onClick={() => {
              if (cellType === 'read') {
                setCellType('edit')
              }
              callbackLimiter.add(() => {
                setTimeout(() => setCellType('read'), 300)
              })
            }}
          >
            {text}
          </p>
        )}
        {cellType === 'edit' && (
          <Form.Item name={[formRootKey, rowIndex, colIndex]} noStyle>
            <CellRender
              placeholder={placeholder}
              rowindex={rowIndex}
              record={injectRecord ? record : null}
              onChange={(val: any) => {
                if (val?.target !== undefined) {
                  handleTextState(val.target.value)
                  handleSelfValidate(val?.target?.value)
                } else {
                  handleTextState(val)
                  handleSelfValidate(val)
                }
              }}
              size='middle'
              bordered={false}
              {...restProps}
            />
          </Form.Item>
        )}
      </div>
    </Tooltip>
  )
}
