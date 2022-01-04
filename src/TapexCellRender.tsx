import React, { FC, useEffect, useState } from 'react'
import { Tooltip, Form } from 'antd'
import cs from 'classnames'

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

  formRootKey,
  injectRecord,
  cellProps,
  CellRender,
  TextRender,
}) => {
  const [cellType, setCellType] = useState<'read' | 'edit'>('read')
  const [textType, setTextType] = useState<'normal' | 'empty'>('empty')
  const [text, setText] = useState('')
  const [toolText, setToolText] = useState('')

  const { placeholder, rules, ...restProps } = typeof cellProps === 'function'
    ? cellProps(record)
    : cellProps

  useEffect(() => {
    handleTextState(record[colIndex])
  }, [record, colIndex])

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

  return (
    <Tooltip
      // title={cellErrors?.[0] || (cellType === 'read' ? toolText : undefined)}
      // color={cellErrors?.[0] ? '#ff3333' : undefined}
      title={cellType === 'read' ? toolText : undefined}
    // overlayStyle={{ transform: 'scale(1)' }}
    // mouseEnterDelay={cellErrors?.[0] ? 0 : 1}
    // mouseEnterDelay={1.5}
    >
      <div
        className={cs({
          'tapex-cell-box': true,
          'tapex-cell-empty': textType === 'empty',
          // 'tapex-cell-error': cellErrors?.length > 0,
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
              // placeholder={placeholder}
              placeholder='请输入'
              rowindex={rowIndex}
              record={injectRecord ? record : null}
              onChange={(val: any) => {
                if (val?.target !== undefined) {
                  handleTextState(val.target.value)
                  // handleSelfValidate(val?.target?.value)
                } else {
                  handleTextState(val)
                  // handleSelfValidate(val)
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
