'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  NavBar: {
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px',
    position: 'fixed',
    width: '100%'
  },
  NavBarTransparent: {
    opacity: 0.97
  },
  NavBar__Items: _defineProperty({
    listStyleType: 'none',
    margin: 0,
    padding: 20,

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    maxWidth: _theme2.default.base.contentWidth,
    position: 'relative'

  }, 'margin', '0 auto'),
  NavBar__Item: {
    marginRight: 10,
    fontFamily: _theme2.default.font.family.default
  },
  NavBar__Link: {
    color: 'black',
    textDecoration: 'none'
  },
  NavBar__Brand: {
    display: 'flex',
    flex: 1
  },
  Navbar__BrandText: {
    margin: 0
  }
};

exports.default = styles;