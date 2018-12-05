'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ScrollableNavBar = require('../ScrollableNavBar');

var _ScrollableNavBar2 = _interopRequireDefault(_ScrollableNavBar);

var _NavBar = require('../NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    mainContent: {
      paddingTop: function paddingTop(props) {
        return props.withTeaser ? 0 : '60px';
      },
      backgroundColor: 'white'
    }
  };
};

var Application = function Application(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      _ref$withTeaser = _ref.withTeaser,
      withTeaser = _ref$withTeaser === undefined ? false : _ref$withTeaser,
      _ref$withScrollableNa = _ref.withScrollableNavBar,
      withScrollableNavBar = _ref$withScrollableNa === undefined ? true : _ref$withScrollableNa;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    withScrollableNavBar ? _react2.default.createElement(_ScrollableNavBar2.default, null) : _react2.default.createElement(_NavBar2.default, null),
    _react2.default.createElement(
      'main',
      { className: classes.mainContent },
      children
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Application);