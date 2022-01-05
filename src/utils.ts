import React from 'react'
import { ColumnsType } from 'antd/lib/table'
import {
  TapexColumnsType,
  TapexInstance,
  TapexRowData,
  ErrListType,
} from './types'
import { TapexCellRender } from './TapexCellRender'

export const columnsHandler = (
  columns: TapexColumnsType,
  tapex: TapexInstance,
): ColumnsType<TapexRowData> =>
  columns.map(({ cellConfig, ...restProps }) => {
    // not tapex cell
    if ((cellConfig?.cellRender) === undefined) {
      return { ...restProps }
    }

    const {
      injectRecord = false,
      cellProps,
      cellRender,
      textRender,
    } = cellConfig

    const formRootKey = tapex.getRootKey()

    // rewrite render
    return {
      ...restProps,
      render: (_, record: TapexRowData, rowIndex) =>
        TapexCellRender({
          record,
          rowIndex,
          colIndex: restProps.dataIndex,

          tapex,
          formRootKey,
          injectRecord,
          cellProps,
          CellRender: cellRender,
          TextRender: (textRender !== undefined)
            ? textRender
            : (cellData: string) => cellData,
        }),
    }
  })

export const ErrorListContext = React.createContext<ErrListType>(undefined)
