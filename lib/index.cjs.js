'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// hooks
var useTapex = function useTapex() {
  var rootKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1];

  return _objectSpread2(_objectSpread2({}, form), {}, {
    getRootKey: function getRootKey() {
      return rootKey;
    },
    getTableData: function getTableData() {
      return tableData;
    },
    initAllValues: function initAllValues(values) {
      this.setFieldsValue(_defineProperty({}, rootKey, values));
      setTableData(values.map(function (value, index) {
        return _objectSpread2(_objectSpread2({}, value), {}, {
          key: String(index)
        });
      }));
    },
    getAllValues: function getAllValues() {
      var _this$getFieldsValue$;

      return (_this$getFieldsValue$ = this.getFieldsValue(true)[rootKey]) !== null && _this$getFieldsValue$ !== void 0 ? _this$getFieldsValue$ : [];
    },
    getValueByPath: function getValueByPath(path) {
      var _this$getAllValues, _this$getAllValues$ro;

      var _path = _slicedToArray(path, 2),
          rowIndex = _path[0],
          field = _path[1];

      return (_this$getAllValues = this.getAllValues()) === null || _this$getAllValues === void 0 ? void 0 : (_this$getAllValues$ro = _this$getAllValues[rowIndex]) === null || _this$getAllValues$ro === void 0 ? void 0 : _this$getAllValues$ro[field];
    },
    setValueByPath: function setValueByPath(path, value) {
      var _path2 = _slicedToArray(path, 2),
          rowIndex = _path2[0],
          field = _path2[1];

      var values = this.getAllValues();

      if (rowIndex in values && field in values[rowIndex]) {
        values[rowIndex][field] = value;
      }

      this.setFieldsValue(_defineProperty({}, rootKey, values));
      setTableData(values.map(function (value, index) {
        return _objectSpread2(_objectSpread2({}, value), {}, {
          key: String(index)
        });
      }));
    }
  });
};

var Tapex = function Tapex(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, "test");
};

exports["default"] = Tapex;
exports.useTapex = useTapex;
