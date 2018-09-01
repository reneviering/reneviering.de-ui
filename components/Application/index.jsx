import React from 'react';
import injectSheet from 'react-jss';

import NavBar from '../NavBar';

const styles = theme => ({
  '@global': {
    '@import': `url('${theme.font.import}')`,
    body: {
      backgroundColor: '#212121',
      fontFamily: theme.font.family.default,
      ...theme.font.default
    },
    h1: {
      ...theme.font.bold
    },
    h2: {
      ...theme.font.bold
    },
    h3:{
      ...theme.font.bold
    }
  },
  mainContent: {
    paddingTop: props => props.withTeaser ? 0 : '60px',
    backgroundColor: 'white'
  }
});

const Application = ({ children, classes, withTeaser=false }) => (
  <React.Fragment>
    <NavBar />
    <main className={ classes.mainContent }>
      { children }
    </main>
  </React.Fragment>
);

export default injectSheet(styles)(Application);
