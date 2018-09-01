'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _NavBar = require('../NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    // '@global': {
    //   '@import': `url('${theme.font.import}')`,
    //   body: {
    //     backgroundColor: '#212121',
    //     fontFamily: theme.font.family.default,
    //     ...theme.font.default
    //   },
    //   h1: {
    //     ...theme.font.bold
    //   },
    //   h2: {
    //     ...theme.font.bold
    //   },
    //   h3:{
    //     ...theme.font.bold
    //   }
    // },
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
      withTeaser = _ref$withTeaser === undefined ? false : _ref$withTeaser;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_NavBar2.default, null),
    _react2.default.createElement(
      'main',
      { className: classes.mainContent },
      children
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Application);