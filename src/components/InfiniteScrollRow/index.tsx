import React, { FC } from 'react'

const InfiniteScrollRow: FC = ({ children, ...restProps }) => {
  return (
    <tr {...restProps}>
      {children}
    </tr>
  )
}

export default InfiniteScrollRow
