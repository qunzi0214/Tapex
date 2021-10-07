import React, { FC } from 'react'

const InfiniteScrollCell: FC = ({ children, ...restProps }) => {
  return (
    <td {...restProps}>
      {children}
    </td>
  )
}

export default InfiniteScrollCell
