'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  '@global': {
    '@import': 'url(\'' + _theme2.default.font.import + '\')',
    body: Object.assign({
      backgroundColor: '#212121',
      fontFamily: _theme2.default.font.family.default
    }, _theme2.default.font.default),
    h1: Object.assign({}, _theme2.default.font.bold),
    h2: Object.assign({}, _theme2.default.font.bold),
    h3: Object.assign({}, _theme2.default.font.bold)
  },
  mainContent: {
    paddingTop: '60px'
  }
};

var Application = function Application(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'main',
      { className: classes.mainContent },
      children
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Application);