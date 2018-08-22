import theme from '../../theme';

const styles = {
  NavBar: {
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px',
    position: 'fixed',
    width: '100%',
    zIndex: 10
  },
  NavBarTransparent: {
    opacity: 0.97
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

    margin: '0 auto'
  },
  NavBar__Item: {
    marginRight: 15,
    fontFamily: theme.font.family.default
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

export default styles;
