import React from 'react';
import injectSheet from 'react-jss';

import ScrollableNavBar from '../ScrollableNavBar';
import NavBar from '../NavBar';

const styles = theme => ({
  mainContent: {
    paddingTop: props => props.withTeaser ? 0 : '60px',
    backgroundColor: 'white'
  }
});

const Application = ({ children, classes, withTeaser=false, withScrollableNavBar=true }) => (
  <React.Fragment>
    { withScrollableNavBar ? <ScrollableNavBar /> : <NavBar /> }
    <main className={ classes.mainContent }>
      { children }
    </main>
  </React.Fragment>
);

export default injectSheet(styles)(Application);
