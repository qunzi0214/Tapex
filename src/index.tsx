import React, {
  FC,
} from 'react'
import { Table } from 'antd'
// import { InfoCircleOutlined } from '@ant-design/icons'

// styles
// import styles from './index.less'

interface TapexProps{
  className?: string
}

// test code start
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  { title: 'Column 9', dataIndex: 'address', key: '9' },
  { title: 'Column 10', dataIndex: 'address', key: '10' },
  { title: 'Column 11', dataIndex: 'address', key: '11' },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  //   render: () => <a>action</a>,
  // },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
]

const MyRow: FC = ({ children, ...restProps }) => {
  return <tr {...restProps}>{children}</tr>
}

const Tapex: FC<TapexProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Table
        columns={columns as any}
        dataSource={data}
        scroll={{ x: 1800 }}
        components={{
          body: {
            wrapper: ({ children, ...restProps }: any) =>
              // <tbody className='mmmmmmmmmmmmm' {...restProps}>
              <div>
                {children}
              </div>,
            // </tbody>,
            row: MyRow,
            // cell: ({ children, ...props }) => {
            //   console.log(props);
            //   return <td {...props}>{children}</td>;
            // },
          },
        }}
      />
    </div>
  )
}

export default Tapex
