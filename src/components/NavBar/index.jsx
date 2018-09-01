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
    console.log(this.state.opacity);
    return (
      <ComposedComponent
        { ...this.props }
        isTransparent={ this.state.isTransparent }
        opacity={ this.state.opacity }
        color={`rgba(${255 * (1-this.state.opacity)}, ${255 * (1-this.state.opacity)}, ${255 * (1-this.state.opacity)}, 1)`}
        backgroundColor={`rgba(255, 255, 255, ${this.state.opacity})`}
        boxShadow={`rgba(0, 0, 0, ${0.2 * this.state.opacity}) 0px 2px 5px 0px`}
      />
    )
  }
};

class NavBar extends React.PureComponent {

  render () {
    const { classes } = this.props;

    return (
      <nav className={ classes.NavBar } style={{ backgroundColor: this.props.backgroundColor, boxShadow: this.props.boxShadow }}>
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
// test

export default withScrollHandling(injectSheet(styles)(NavBar));
