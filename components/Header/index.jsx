import React from 'react';

import injectSheet from 'react-jss';

const styles = {
  Header: {
    backgroundColor: 'black',
    border: '2px solid red',
    color: 'white',
    padding: 20
  }
};

const Header = ({ classes }) => (
  <header className={ classes.Header }>
    <nav>
      <a>asdf</a>
    </nav>
  </header>

);

export default injectSheet(styles)(Header);
