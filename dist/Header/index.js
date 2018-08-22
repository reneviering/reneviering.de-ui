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

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isTransparent: false
    }, _this.handleScroll = function () {
      var scrollTop = document.documentElement.scrollTop;
      _this.setState({ isTransparent: scrollTop > 0 });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
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
      var classes = this.props.classes;


      var navBarClasses = (0, _classnames2.default)(classes.NavBar, _defineProperty({}, classes.NavBarTransparent, this.state.isTransparent));

      var navBarItemClasses = (0, _classnames2.default)(classes.NavBar__Item);

      return _react2.default.createElement(
        'nav',
        { className: navBarClasses },
        _react2.default.createElement(
          'ul',
          { className: classes.NavBar__Items },
          _react2.default.createElement(
            'li',
            { className: (0, _classnames2.default)(classes.NavBar__Item, classes.NavBar__Brand) },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/' },
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
              { className: classes.NavBar__Link, href: '/techlounge' },
              'tech:lounge'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: classes.NavBar__Item },
            _react2.default.createElement(
              'a',
              { className: classes.NavBar__Link, href: '/blog' },
              'Blog'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.PureComponent);

exports.default = (0, _reactJss2.default)(_styles2.default)(Header);