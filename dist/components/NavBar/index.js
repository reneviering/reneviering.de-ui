'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$PureComponent) {
  _inherits(NavBar, _React$PureComponent);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      var navBarStyles = this.props.backgroundColor && this.props.boxShadow && {
        backgroundColor: this.props.backgroundColor,
        boxShadow: this.props.boxShadow
      };

      var colorStyles = this.props.color && { color: this.props.color };

      return _react2.default.createElement(
        'nav',
        { className: classes.NavBar, style: navBarStyles },
        _react2.default.createElement(
          'ul',
          { className: classes.NavBar__Items },
          _react2.default.createElement(
            'li',
            { className: (0, _classnames2.default)(classes.NavBar__Item, classes.NavBar__Brand) },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/', style: colorStyles },
              _react2.default.createElement(
                'h3',
                { className: classes.Navbar__BrandText },
                'reneviering'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: classes.NavBar__Item },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '#talks', style: colorStyles },
              'Talks'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: classes.NavBar__Item },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/blog', style: colorStyles },
              'Blog'
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.PureComponent);
// test

exports.default = (0, _reactJss2.default)(_styles2.default)(NavBar);