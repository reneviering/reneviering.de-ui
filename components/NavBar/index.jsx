import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import throttle from 'lodash.throttle';

import styles from './styles';

const withScrollHandling = ComposedComponent => class extends React.Component {
  state = {
    isTransparent: false,
    opacity: 0
  }

  handleScroll = () => {
    const scrollTop = (document.scrollingElement || document.documentElement).scrollTop;
    const headerHeight = 150; // maybe we need to calcualte it?
    const offset = headerHeight - scrollTop;
    const opacity = Math.min(1, 1 - (offset / headerHeight));
    this.setState({ isTransparent: scrollTop > 0, opacity });
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    return <ComposedComponent { ...this.props } isTransparent={ this.state.isTransparent } opacity={ this.state.opacity } color={`rgba(${255 * (1-this.state.opacity)}, ${255 * (1-this.state.opacity)}, ${255 * (1-this.state.opacity)}, 1)`}/>
  }
};

class NavBar extends React.PureComponent {

  render () {
    const { classes } = this.props;

    return (
      <nav className={ classes.NavBar }>
        <ul className={ classes.NavBar__Items }>
          <li className={ classNames(classes.NavBar__Item, classes.NavBar__Brand) }>
            <a className={ classes.NavBar__Link } href="/" style={{ color: this.props.color }}>
              <h3 className={ classes.Navbar__BrandText }>reneviering</h3>
            </a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/techlounge' style={{ color: this.props.color }}>tech:lounge</a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/techlounge' style={{ color: this.props.color }}>Talks</a>
          </li>
          <li className={ classes.NavBar__Item }>
            <a className={ classes.NavBar__Link } href='/blog' style={{ color: this.props.color }}>Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withScrollHandling(injectSheet(styles)(NavBar));
