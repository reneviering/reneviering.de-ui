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
  Teaser: {
    backgroundImage: function backgroundImage(props) {
      return 'url(' + props.backgroundUrl + ')';
    },
    backgroundSize: 'cover',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    paddingTop: 80
  },
  Headline: {
    marginBottom: 0
  },
  PersonInfo: {
    textAlign: 'center'
  },
  Avatar: {
    width: '40vh',
    height: '40vh',
    maxWidth: '180px',
    maxHeight: '180px',
    borderRadius: '50%',
    '@media(min-width: 700px)': {
      maxWidth: '250px',
      maxHeight: '250px'
    }
  }
};

var Teaser = function Teaser(_ref) {
  var classes = _ref.classes,
      backgroundUrl = _ref.backgroundUrl,
      avatarUrl = _ref.avatarUrl;
  return _react2.default.createElement(
    'header',
    { className: classes.Teaser },
    _react2.default.createElement('img', { className: classes.Avatar, src: avatarUrl, alt: 'Avatar Ren\xE9 Viering' }),
    _react2.default.createElement(
      'h1',
      { className: classes.Headline },
      'Ren\xE9 Viering'
    ),
    _react2.default.createElement(
      'p',
      { className: classes.PersonInfo },
      'JavaScript Freelancer',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'small',
        null,
        'Kassel, Germany'
      )
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Teaser);