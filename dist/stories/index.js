'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _Application = require('../components/Application');

var _Application2 = _interopRequireDefault(_Application);

var _AwesomeTeaser = require('../components/AwesomeTeaser');

var _AwesomeTeaser2 = _interopRequireDefault(_AwesomeTeaser);

var _Section = require('../components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Anchor = require('../components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _ScrollableNavBar = require('../components/ScrollableNavBar');

var _ScrollableNavBar2 = _interopRequireDefault(_ScrollableNavBar);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ThemeProvider = require('../components/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

require('normalize.css/normalize.css');

require('../base-styling.css');

var _avatar = require('../../static/avatar.jpg');

var _avatar2 = _interopRequireDefault(_avatar);

var _teaser = require('../../static/teaser.jpg');

var _teaser2 = _interopRequireDefault(_teaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Start Page', module).add('default', function () {
  return _react2.default.createElement(
    _ThemeProvider2.default,
    null,
    _react2.default.createElement(
      _Application2.default,
      { withTeaser: true },
      _react2.default.createElement(_ScrollableNavBar2.default, null),
      _react2.default.createElement(_AwesomeTeaser2.default, { avatarUrl: _avatar2.default, backgroundUrl: _teaser2.default }),
      _react2.default.createElement(
        _Section2.default,
        { type: 'primary' },
        _react2.default.createElement(
          'h1',
          null,
          'Hi, I\'m Ren\xE9!'
        ),
        _react2.default.createElement(
          'p',
          null,
          'A freelance JavaScript developer with a passion for frontend technologies, especially single page apps. I prefer lean, targeted libraries and lightweight architectures that result in clean, testable code. That\'s why I value React and its functional programming principles a lot.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Besides programming you can find me in the nature while geocaching or by doing other kinds of sport.'
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        { type: 'secondary' },
        _react2.default.createElement(
          'h1',
          { id: 'tech:lounge' },
          'tech:lounge'
        ),
        _react2.default.createElement(
          'p',
          null,
          'blub\u2026'
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        { type: 'primary' },
        _react2.default.createElement(
          'h1',
          { id: 'tech:lounge' },
          'Talks'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'DDD (Kassel Code Meetup)'
          ),
          _react2.default.createElement(
            'li',
            null,
            'DDD (WebMontag Kassel)'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Single Page Apps - A Framework Agnostic Approach (EnterJS 06/2017)'
          ),
          _react2.default.createElement(
            'li',
            null,
            'React Native (WebMontag Kassel) ',
            _react2.default.createElement(
              _Anchor2.default,
              { href: 'http://slides.com/revrng/react-native#/' },
              'Slides'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Tec Talk: Single Page Apps - A Framework Agnostic Approach (Micromata 06/2016) ',
            _react2.default.createElement(
              _Anchor2.default,
              { href: 'http://slides.com/revrng/deck#/' },
              'Slides'
            ),
            ' ',
            _react2.default.createElement(
              _Anchor2.default,
              { href: 'https://www.youtube.com/watch?v=XdA0ZngKu1o' },
              'Video'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Introduction to Flux - (WebMontag Kassel 09/2015) ',
            _react2.default.createElement(
              _Anchor2.default,
              { href: 'https://codemade.js.org/wmks-flux' },
              'Slides'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Introduction to React - (WebMontag Kassel 09/2015) ',
            _react2.default.createElement(
              _Anchor2.default,
              { href: 'https://codemade.js.org/wmks-react' },
              'Slides'
            )
          )
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        { type: 'secondary', centered: true, muchSpaceAround: true, withBackgroundImage: true },
        _react2.default.createElement(
          'h1',
          { style: { textAlign: 'center' } },
          'You want me for your next project?',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _Anchor2.default,
            { href: 'mailto:hello@reneviering.com', target: '_self' },
            _react2.default.createElement(
              _Button2.default,
              null,
              'Hire me'
            )
          )
        )
      ),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
});