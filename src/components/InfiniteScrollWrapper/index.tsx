import React, { FC } from 'react'

const InfiniteScrollWrapper: FC = ({ children, ...restProps }) => {
  return (
    <div {...restProps}>
      {children}
    </div>
  )
}

export default InfiniteScrollWrapper
