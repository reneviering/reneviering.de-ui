'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  Header: {
    backgroundColor: 'black',
    border: '2px solid red',
    color: 'white',
    padding: 20
  }
};

var Header = function Header(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'header',
    { className: classes.Header },
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'a',
        null,
        'asdf'
      )
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Header);