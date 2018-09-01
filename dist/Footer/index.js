'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  Footer: {
    backgroundColor: '#2d3436',
    padding: 20,
    color: 'white'
  },
  Content: {
    margin: '0 auto',
    maxWidth: 960,
    display: 'flex',
    flexDirection: 'column',
    '@media(min-width: 500px)': {
      flexDirection: 'row'
    }
  },
  Copyright: {
    flex: 1
  },
  Contact: {
    flex: 1,
    marginTop: 20
  },
  Sitemap: {
    flex: 1,
    padding: 0,
    listStyleType: 'none'
  },
  Address: {
    fontStyle: 'normal'
  }
};

var Footer = function Footer(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'footer',
    { className: classes.Footer },
    _react2.default.createElement(
      'div',
      { className: classes.Content },
      _react2.default.createElement(
        'p',
        { className: classes.Copyright },
        '\xA9',
        new Date().getFullYear(),
        ' Ren\xE9 Viering'
      ),
      _react2.default.createElement(
        'div',
        { className: classes.Contact },
        _react2.default.createElement(
          'address',
          { className: classes.Address },
          'Ren\xE9 Viering ',
          _react2.default.createElement('br', null),
          'Wegel\xE4nge 74 ',
          _react2.default.createElement('br', null),
          'D-34132 Kassel',
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'p',
          null,
          'Mail: ',
          _react2.default.createElement(
            _Link2.default,
            { href: 'mailto:hello@reneviering.com' },
            'hello@reneviering.com'
          ),
          _react2.default.createElement('br', null),
          'Phone: +49 152 21044200',
          _react2.default.createElement('br', null),
          'Twitter: ',
          _react2.default.createElement(
            _Link2.default,
            { href: 'https://twitter.com/reneviering' },
            '@reneviering'
          ),
          _react2.default.createElement('br', null),
          'Github: ',
          _react2.default.createElement(
            _Link2.default,
            { href: 'https://github.com/reneviering' },
            'reneviering'
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'p',
          null,
          'UST-ID: 1234567890'
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: classes.Sitemap },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { href: 'home' },
            'Home'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { href: 'tech:lounge' },
            'tech:lounge'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { href: 'talks' },
            'Talks'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { href: 'blog' },
            'Blog'
          )
        )
      )
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Footer);