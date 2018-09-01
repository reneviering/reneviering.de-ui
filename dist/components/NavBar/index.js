'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withScrollHandling = function withScrollHandling(ComposedComponent) {
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isTransparent: false,
        opacity: 0
      }, _this.handleScroll = function () {
        var scrollTop = (document.scrollingElement || document.documentElement).scrollTop;
        var headerHeight = 150; // maybe we need to calcualte it?
        var offset = headerHeight - scrollTop;
        var opacity = Math.min(1, 1 - offset / headerHeight);
        _this.setState({ isTransparent: scrollTop > 0, opacity: opacity });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'render',
      value: function render() {
        console.log(this.state.opacity);
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
          isTransparent: this.state.isTransparent,
          opacity: this.state.opacity,
          color: 'rgba(' + 255 * (1 - this.state.opacity) + ', ' + 255 * (1 - this.state.opacity) + ', ' + 255 * (1 - this.state.opacity) + ', 1)',
          backgroundColor: 'rgba(255, 255, 255, ' + this.state.opacity + ')',
          boxShadow: 'rgba(0, 0, 0, ' + 0.2 * this.state.opacity + ') 0px 2px 5px 0px'
        }));
      }
    }]);

    return _class2;
  }(_react2.default.Component);
};

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


      return _react2.default.createElement(
        'nav',
        { className: classes.NavBar, style: { backgroundColor: this.props.backgroundColor, boxShadow: this.props.boxShadow } },
        _react2.default.createElement(
          'ul',
          { className: classes.NavBar__Items },
          _react2.default.createElement(
            'li',
            { className: (0, _classnames2.default)(classes.NavBar__Item, classes.NavBar__Brand) },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/', style: { color: this.props.color } },
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
              { className: classes.NavBar__Link, href: '/techlounge', style: { color: this.props.color } },
              'tech:lounge'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: classes.NavBar__Item },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/techlounge', style: { color: this.props.color } },
              'Talks'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: classes.NavBar__Item },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/blog', style: { color: this.props.color } },
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

exports.default = withScrollHandling((0, _reactJss2.default)(_styles2.default)(NavBar));