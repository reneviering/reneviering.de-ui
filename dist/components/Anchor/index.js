'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Anchor: {
      textDecoration: 'none',
      color: '#3498db',
      fontWeight: 400
    }
  };
};

var Anchor = function Anchor(_ref) {
  var href = _ref.href,
      _ref$target = _ref.target,
      target = _ref$target === undefined ? '_blank' : _ref$target,
      children = _ref.children,
      classes = _ref.classes,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'primary' : _ref$type;
  return _react2.default.createElement(
    'a',
    { href: href, target: target, className: classes.Anchor, rel: 'noopener' },
    children
  );
};

exports.default = (0, _reactJss2.default)(styles)(Anchor);