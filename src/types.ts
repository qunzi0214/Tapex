
import { ReactNode } from 'react'
import { FormInstance } from 'antd'

export interface TapexRowData {
  uniqueKey: string
  [k: string]: any
}

export type TapexInstance = FormInstance<any> & {
  getRootKey: () => string
  getTableData: () => TapexRowData[]

  setAllValues: <T extends TapexRowData>(values: T[]) => void
  getAllValues: <T extends TapexRowData>() => T[]
  getValueByPath: (path: [number, string]) => any

  addRulesByPath: (rowKey: string, field: string, rules: any[]) => void
  initValidateCallBack: (callback: Function) => void
  validateAllValues: () => Promise<any[]> | undefined
}

export type TapexCellProps = Record<string, any> | ((record: Record<string, any>) => Record<string, any>)

export type TextRenderType = ((cellData: Record<string, any>) => string) | ((cellData: string) => string)

export interface TapexCellConfig {
  injectRecord?: boolean
  cellProps: TapexCellProps
  cellRender: (props: Record<string, any>) => JSX.Element
  textRender?: TextRenderType
}

export type TapexColumnsType = Array<{
  title: ReactNode | ((props: Record<string, any>) => ReactNode)
  dataIndex: string
  width?: number
  fixed?: 'left' | 'right'
  render?: (record: Record<string, any>) => ReactNode
  cellConfig?: TapexCellConfig
}>

export interface TapexCellRenderProps {
  record: TapexRowData
  rowIndex: number
  colIndex: string

  tapex: TapexInstance
  formRootKey: string
  injectRecord: boolean
  cellProps: TapexCellProps
  CellRender: (props: Record<string, any>) => JSX.Element
  TextRender: TextRenderType
}

export type ErrListType = undefined | {
  [k: string]: {
    [k: string]: string[]
  }
}
