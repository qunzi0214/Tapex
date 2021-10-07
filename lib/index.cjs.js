'use strict';

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$2 = ["children"];

var InfiniteScrollWrapper = function InfiniteScrollWrapper(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React__default["default"].createElement("div", restProps, children);
};

var _excluded$1 = ["children"];

var InfiniteScrollRow = function InfiniteScrollRow(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default["default"].createElement("tr", restProps, children);
};

var _excluded = ["children"];

var InfiniteScrollCell = function InfiniteScrollCell(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement("td", restProps, children);
};

var Tapex = function Tapex(_ref) {
  var className = _ref.className,
      bordered = _ref.bordered,
      _ref$infiniteScroll = _ref.infiniteScroll,
      infiniteScroll = _ref$infiniteScroll === void 0 ? false : _ref$infiniteScroll,
      columns = _ref.columns,
      dataSource = _ref.dataSource;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default["default"].createElement(antd.Table, {
    className: "tapex-root",
    bordered: bordered,
    columns: columns,
    dataSource: dataSource,
    scroll: {
      x: 1800
    },
    components: infiniteScroll ? {
      body: {
        wrapper: InfiniteScrollWrapper,
        row: InfiniteScrollRow,
        cell: InfiniteScrollCell
      }
    } : undefined
  }));
};

module.exports = Tapex;
