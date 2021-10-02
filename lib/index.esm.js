import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import React from 'react';

var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);

    this.set = new Set();
    this.foo = {
      bar: {
        baz: 1
      }
    };
  }

  _createClass(Person, [{
    key: "log",
    value: function log() {
      var _this$foo, _this$foo$bar;

      var res = this === null || this === void 0 ? void 0 : (_this$foo = this.foo) === null || _this$foo === void 0 ? void 0 : (_this$foo$bar = _this$foo.bar) === null || _this$foo$bar === void 0 ? void 0 : _this$foo$bar.baz;
      console.log(res);
    }
  }]);

  return Person;
}();

var Tapex = function Tapex() {
  var p = new Person();
  p.log();
  return /*#__PURE__*/React.createElement("div", null, "Tapex");
};

export { Tapex as default };
