'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _reactTransitionGroup = require('react-transition-group');

var _Hexagon = require('./Hexagon');

var _Hexagon2 = _interopRequireDefault(_Hexagon);

var _reactIntersectionObserver = require('react-intersection-observer');

var _reactIntersectionObserver2 = _interopRequireDefault(_reactIntersectionObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import hexagons from './hexagons.svg';
var backgroundColorForType = {
  'primary': 'white',
  'secondary': '#ecf0f1'
};

var styles = {
  '@keyframes fade-in': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  Section: {
    backgroundColor: function backgroundColor(props) {
      return backgroundColorForType[props.type] || 'white';
    },
    padding: function padding(props) {
      return '120px 40px';
    },
    position: 'relative'
  },
  ContentContainer: {
    margin: '0 auto',
    maxWidth: 960,
    textAlign: function textAlign(props) {
      return props.centered ? 'center' : 'left';
    },
    zIndex: 101,
    display: 'flex'
  },
  Content: {
    flex: 'auto',
    textAlign: 'left',
    '@media(min-width: 1000px)': {
      flex: 3
    }
  },
  ImageContainer: {
    display: 'none',
    flex: 'auto',
    '@media(min-width: 1000px)': {
      display: 'block',
      flex: 1
    }
  },
  Hexagons: {
    position: 'absolute',
    zIndex: 1,
    animation: '2s linear fade-in',
    '@media(min-width: 1000px)': {
      top: '-12vw',
      right: 0,
      maxWidth: '35vw'
    }

  }
};

var Section = function Section(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      type = _ref.type,
      _ref$withBackgroundIm = _ref.withBackgroundImage,
      withBackgroundImage = _ref$withBackgroundIm === undefined ? false : _ref$withBackgroundIm;
  return _react2.default.createElement(
    _reactIntersectionObserver2.default,
    null,
    function (_ref2) {
      var inView = _ref2.inView,
          ref = _ref2.ref;
      return _react2.default.createElement(
        'section',
        { className: classes.Section, ref: ref },
        _react2.default.createElement(
          'div',
          { className: classes.ContentContainer },
          _react2.default.createElement(
            'div',
            { className: classes.Content },
            children
          ),
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            {
              'in': withBackgroundImage && inView,
              timeout: 3000,
              classNames: 'hexagon-image',
              unmountOnExit: true
            },
            _react2.default.createElement(
              'div',
              { className: classes.ImageContainer },
              _react2.default.createElement(
                'div',
                { className: classes.Hexagons },
                _react2.default.createElement(_Hexagon2.default, null)
              )
            )
          )
        )
      );
    }
  );
};

exports.default = (0, _reactJss2.default)(styles)(Section);