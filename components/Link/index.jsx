import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  Link: {
    textDecoration: 'none',
    color: '#3498db'
  }
});

const Link = ({ href, target='_blank', children, classes, type='primary'}) => (
  <a href={ href } target={ target } className={ classes.Link }>{ children }</a>
);

export default injectSheet(styles)(Link);
