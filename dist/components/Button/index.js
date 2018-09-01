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
  Button: {
    color: 'white',
    background: '#3498db',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 30px',
    cursor: 'pointer',

    '&:hover': {
      opacity: .85
    }
  }
};

var Button = function Button(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    'button',
    { className: classes.Button },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Button);