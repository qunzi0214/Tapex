
import { ReactNode } from 'react'
import { FormInstance } from 'antd'

export type TapexInstance = FormInstance<any> & {
  getRootKey: () => string
  getTableData: () => Array<Record<string, any>>

  initAllValues: <T extends Record<string, any>>(values: T[]) => void
  getAllValues: <T extends Record<string, any>>() => T[]
  getValueByPath: (path: [number, string]) => any
  setValueByPath: (path: [number, string], value: any) => void
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
  record: Record<string, any>
  rowIndex: number
  colIndex: string

  formRootKey: string
  injectRecord: boolean
  cellProps: TapexCellProps
  CellRender: (props: Record<string, any>) => JSX.Element
  TextRender: TextRenderType
}
