import React from 'react';
import injectSheet from 'react-jss';

import { CSSTransition } from 'react-transition-group';

import hexagons from './hexagons.svg';

import Observer from 'react-intersection-observer';

const backgroundColorForType = {
  'primary': 'white',
  'secondary': '#ecf0f1'
}

const styles = {
  '@keyframes fade-in': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  Section: {
    backgroundColor: props => backgroundColorForType[props.type] || 'white',
    padding: props => '120px 40px',
    position: 'relative'
  },
  ContentContainer: {
    margin: '0 auto',
    maxWidth: 960,
    textAlign: props => props.centered ? 'center': 'left',
    zIndex: 101,
    display: 'flex'
  },
  Content: {
    flex: 'auto',
    textAlign: 'left',
    '@media(min-width: 1000px)': {
      flex: 3
    }
  },
  ImageContainer: {
    display: 'none',
    flex: 'auto',
    '@media(min-width: 1000px)': {
      display: 'block',
      flex: 1
    }
  },
  Hexagons: {
    position: 'absolute',
    zIndex: 1,
    animation: '4s linear fade-in',
    '@media(min-width: 1000px)': {
      top: '-12vw',
      right: 0,
      maxWidth: '35vw',
    },

  }
};

const Section = ({ children, classes, type, withBackgroundImage=false }) => (
  <Observer>
    {
      ({ inView, ref }) => (
        <section className={ classes.Section } ref={ ref }>
          <div className={ classes.ContentContainer }>

            <div className={ classes.Content }>
              { children }
            </div>

              <CSSTransition
                in={ withBackgroundImage && inView }
                timeout={3000}
                classNames="hexagon-image"
                unmountOnExit
              >
                <div className={ classes.ImageContainer }>
                  <img className={ classes.Hexagons } src={ hexagons } />
                </div>
              </CSSTransition>

          </div>
        </section>
      )
    }

  </Observer>
)

export default injectSheet(styles)(Section);
