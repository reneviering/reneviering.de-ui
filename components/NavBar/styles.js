import theme from '../../theme';

const styles = {
  NavBar: {
    backgroundColor: props => `rgba(255, 255, 255, ${props.opacity})`,
    boxShadow: props => `rgba(0, 0, 0, ${0.2 * props.opacity}) 0px 2px 5px 0px`,
    position: 'fixed',
    width: '100%',
    zIndex: 10,
  },
  NavBar__Items: {
    listStyleType: 'none',
    margin: 0,
    padding: 20,

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    maxWidth: theme.base.contentWidth,
    position: 'relative',

    margin: '0 auto',
  },
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
    fontWeight: 400
  },
  NavBar__Brand: {
    display: 'flex',
    flex: 1
  },
  Navbar__BrandText: {
    margin: 0
  }
};

export default styles;
