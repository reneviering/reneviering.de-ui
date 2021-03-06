const styles = theme => ({
  NavBar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 10,
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px'
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
});

export default styles;
