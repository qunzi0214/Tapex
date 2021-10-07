import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import { Table } from 'antd';

var _excluded = ["children"],
    _excluded2 = ["children"];
// styles
// import styles from './index.less'

// test code start
var columns = [{
  title: 'Full Name',
  width: 100,
  dataIndex: 'name',
  key: 'name',
  fixed: 'left'
}, {
  title: 'Age',
  width: 100,
  dataIndex: 'age',
  key: 'age',
  fixed: 'left'
}, {
  title: 'Column 1',
  dataIndex: 'address',
  key: '1'
}, {
  title: 'Column 2',
  dataIndex: 'address',
  key: '2'
}, {
  title: 'Column 3',
  dataIndex: 'address',
  key: '3'
}, {
  title: 'Column 4',
  dataIndex: 'address',
  key: '4'
}, {
  title: 'Column 5',
  dataIndex: 'address',
  key: '5'
}, {
  title: 'Column 6',
  dataIndex: 'address',
  key: '6'
}, {
  title: 'Column 7',
  dataIndex: 'address',
  key: '7'
}, {
  title: 'Column 8',
  dataIndex: 'address',
  key: '8'
}, {
  title: 'Column 9',
  dataIndex: 'address',
  key: '9'
}, {
  title: 'Column 10',
  dataIndex: 'address',
  key: '10'
}, {
  title: 'Column 11',
  dataIndex: 'address',
  key: '11'
} // {
//   title: 'Action',
//   key: 'operation',
//   fixed: 'right',
//   width: 100,
//   render: () => <a>action</a>,
// },
];
var data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park'
}];

var MyRow = function MyRow(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("tr", restProps, children);
};

var Tapex = function Tapex(_ref2) {
  var className = _ref2.className;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    dataSource: data,
    scroll: {
      x: 1800
    },
    components: {
      body: {
        wrapper: function wrapper(_ref3) {
          var children = _ref3.children;
              _objectWithoutProperties(_ref3, _excluded2);

          return (
            /*#__PURE__*/
            // <tbody className='mmmmmmmmmmmmm' {...restProps}>
            React.createElement("div", null, children)
          );
        },
        // </tbody>,
        row: MyRow // cell: ({ children, ...props }) => {
        //   console.log(props);
        //   return <td {...props}>{children}</td>;
        // },

      }
    }
  }));
};

export { Tapex as default };
