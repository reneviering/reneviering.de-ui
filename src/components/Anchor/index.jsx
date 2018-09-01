import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  Anchor: {
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 400
  }
});

const Anchor = ({ href, target='_blank', children, classes, type='primary'}) => (
  <a href={ href } target={ target } className={ classes.Anchor } rel="norefferer">{ children }</a>
);

export default injectSheet(styles)(Anchor);
