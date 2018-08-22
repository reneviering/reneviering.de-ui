import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Application from '../components/Application';
import Teaser from '../components/Teaser';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Link from '../components/Link';

import 'normalize.css/normalize.css';

import { ThemeProvider } from 'react-jss';

import theme from '../theme';

import hexagons from '../assets/hexagons.svg';

storiesOf('Start Page', module)
  .add('default',  () => (
    <ThemeProvider theme={ theme }>
      <Application withTeaser={true}>
        <Teaser />
        <Section type="primary">
          <h1>Hi, I'm René!</h1>
          <p>A freelance JavaScript developer with a passion for frontend technologies, especially single page apps. I prefer lean, targeted libraries and lightweight architectures that result in clean, testable code. That's why I value React and its functional programming principles a lot.</p>
          <p>Besides programming you can find me in the nature while geocaching or by doing other kinds of sport.</p>
        </Section>
        <Section type="secondary">
          <h1 id="tech:lounge">tech:lounge</h1>
          <p>
            blub…
          </p>
        </Section>
        <Section type="primary">
          <h1 id="tech:lounge">Talks</h1>
          <ul>
            <li>DDD (Kassel Code Meetup)</li>
            <li>DDD (WebMontag Kassel)</li>
            <li>Single Page Apps - A Framework Agnostic Approach (EnterJS 06/2017)</li>
            <li>React Native (WebMontag Kassel) <Link href="http://slides.com/revrng/react-native#/">Slides</Link></li>
            <li>Tec Talk: Single Page Apps - A Framework Agnostic Approach (Micromata 06/2016) <Link href="http://slides.com/revrng/deck#/">Slides</Link> <Link href="https://www.youtube.com/watch?v=XdA0ZngKu1o">Video</Link></li>
            <li>Introduction to Flux - (WebMontag Kassel 09/2015) <Link href="https://codemade.js.org/wmks-flux">Slides</Link></li>
            <li>Introduction to React - (WebMontag Kassel 09/2015) <Link href="https://codemade.js.org/wmks-react">Slides</Link></li>
          </ul>
        </Section>
        <Section type="secondary" centered muchSpaceAround withBackgroundImage>
            <h1>You want me for your next project? <Link href="mailto:hello@reneviering.com">Hire me</Link></h1>
        </Section>
        <Footer />
      </Application>
    </ThemeProvider>
  ));
