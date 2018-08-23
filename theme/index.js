const theme = {
  base: {
    contentWidth: 960
  },

  link: {
    primary: {
      color: '#1756a9'
    },
    secondary: {
      color: 'white'
    }
  },

  font: {
    import: 'https://fonts.googleapis.com/css?family=Roboto:200,300,400',

    family: {
      default: 'Roboto, sans-serif'
    },

    default: {
      fontWeight: 200,
      fontSize: '18px',
      lineHeight: '20px',
      textRendering: 'optimizeLegibility',
      fontSmoothing: 'antialiased',
      '-webkit-font-smoothing': 'antialiased'
    },

    bold: {
      fontWeight: 400,
      lineHeight: 1,
      textRendering: 'optimizeLegibility',
      fontSmoothing: 'antialiased',
      '-webkit-font-smoothing': 'antialiased'
    }

  }
};

export default theme;
