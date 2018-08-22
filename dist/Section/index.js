'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundColorForType = {
  'primary': 'white',
  'secondary': '#ecf0f1'
};

var styles = {
  Section: {
    backgroundColor: function backgroundColor(props) {
      return backgroundColorForType[props.type] || 'white';
    },
    padding: '30px 20px'
  },
  Content: {
    margin: '0 auto',
    maxWidth: 960
  }
};

var Section = function Section(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      type = _ref.type;
  return _react2.default.createElement(
    'section',
    { className: classes.Section },
    _react2.default.createElement(
      'div',
      { className: classes.Content },
      children
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Section);