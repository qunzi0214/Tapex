import { ColumnsType } from 'antd/lib/table'
import { TapexColumnsType } from './types'
import { TapexCellRender } from './TapexCellRender'

export const columnsHandler = (columns: TapexColumnsType, formRootKey: string): ColumnsType<object> =>
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

    // rewrite render
    return {
      ...restProps,
      render: (_, record, rowIndex) =>
        TapexCellRender({
          record,
          rowIndex,
          colIndex: restProps.dataIndex,

          formRootKey,
          injectRecord,
          cellProps,
          CellRender: cellRender,
          TextRender: (textRender !== undefined) ? textRender : (cellData: string) => cellData,
        }),
    }
  })
