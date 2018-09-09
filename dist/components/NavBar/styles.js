'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    NavBar: {
      position: 'fixed',
      width: '100%',
      zIndex: 10,
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px'
    },
    NavBar__Items: _defineProperty({
      listStyleType: 'none',
      margin: 0,
      padding: 20,

      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',

      maxWidth: theme.base.contentWidth,
      position: 'relative'

    }, 'margin', '0 auto'),
    NavBar__Item: {
      marginRight: 15,
      fontFamily: theme.font.family.default,
      lineHeight: '20px',
      display: 'none',
      '@media(min-width: 600px)': {
        display: 'block'
      }
    },
    NavBar__Link: {
      textDecoration: 'none',
      fontWeight: 400,
      color: 'black'
    },
    NavBar__Brand: {
      display: 'flex',
      flex: 1
    },
    Navbar__BrandText: {
      margin: 0
    }
  };
};

exports.default = styles;