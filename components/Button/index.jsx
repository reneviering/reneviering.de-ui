import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Button: {
    color: 'white',
    background: '#3498db',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 30px',
    cursor: 'pointer',

    '&:hover': {
      opacity: .85
    }
  }
};

const Button = ({ children, classes }) => (
  <button className={ classes.Button }>{ children }</button>
);

export default injectSheet(styles)(Button);
