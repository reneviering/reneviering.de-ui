import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  mainContent: {
    paddingTop: props => props.withTeaser ? 0 : '60px',
    backgroundColor: 'white'
  }
});

const Application = ({ children, classes, withTeaser=false}) => (
  <React.Fragment>
    <main className={ classes.mainContent }>
      { children }
    </main>
  </React.Fragment>
);

export default injectSheet(styles)(Application);
