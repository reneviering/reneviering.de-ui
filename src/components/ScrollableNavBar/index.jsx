import React from 'react';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

import NavBar from '../NavBar';

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

export default withScrollHandling(NavBar);
