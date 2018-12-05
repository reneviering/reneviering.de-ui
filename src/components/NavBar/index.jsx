import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

class NavBar extends React.PureComponent {

  render () {
    const { classes } = this.props;

    const navBarStyles = this.props.backgroundColor && this.props.boxShadow && {
      backgroundColor: this.props.backgroundColor,
      boxShadow: this.props.boxShadow
    };

    const colorStyles = this.props.color && { color: this.props.color };


    return (
      <nav className={ classes.NavBar } style={ navBarStyles }>
        <ul className={ classes.NavBar__Items }>
          <li className={ classNames(classes.NavBar__Item, classes.NavBar__Brand) }>
            <a className={ classes.NavBar__Link } href="/" style={colorStyles}>
              <h3 className={ classes.Navbar__BrandText }>reneviering</h3>
            </a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/#talks' style={colorStyles}>Talks</a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/blog' style={colorStyles}>Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}
// test

export default injectSheet(styles)(NavBar);
