import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import throttle from 'lodash.throttle';

import styles from './styles';

class NavBar extends React.PureComponent {
  state = {
    isTransparent: false
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    this.setState({ isTransparent: scrollTop > 0 });
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    const { classes } = this.props;

    const navBarClasses = classNames(classes.NavBar, {
      [classes.NavBarTransparent]: this.state.isTransparent
    });

    const navBarItemClasses = classNames(classes.NavBar__Item)

    return (
      <nav className={ navBarClasses }>
        <ul className={ classes.NavBar__Items }>
          <li className={ classNames(classes.NavBar__Item, classes.NavBar__Brand) }>
            <a className={ classes.NavBar__Link } href="/">
              <h3 className={ classes.Navbar__BrandText }>reneviering</h3>
            </a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/techlounge'>tech:lounge</a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/techlounge'>Talks</a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/blog'>Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default injectSheet(styles)(NavBar);
