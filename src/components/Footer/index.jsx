import React from 'react';
import injectSheet from 'react-jss';

import Anchor from '../Anchor';

const styles = {
  Footer: {
    backgroundColor: '#2d3436',
    padding: 20,
    color: 'white'
  },
  Content: {
    margin: '0 auto',
    maxWidth: 960,
    display: 'flex',
    flexDirection: 'column',
    '@media(min-width: 500px)': {
      flexDirection: 'row'
    }
  },
  Copyright: {
    flex: 1
  },
  Contact: {
    flex: 1,
    marginTop: 20
  },
  Sitemap: {
    flex: 1,
    padding: 0,
    listStyleType: 'none'
  },
  Address: {
    fontStyle: 'normal'
  }
};

const Footer = ({ classes }) => (
  <footer className={classes.Footer}>
    <div className={classes.Content}>
      <p className={classes.Copyright}>
        ©{new Date().getFullYear()} René Viering
      </p>
      <div className={classes.Contact}>
        <address className={classes.Address}>
          René Viering <br />
          Helgoländer Str. 11 <br />
          D-34123 Kassel
          <br />
        </address>
        <p>
          Mail:{' '}
          <Anchor href="mailto:hello@reneviering.com">
            hello@reneviering.com
          </Anchor>
          <br />
          Phone: +49 152 21044200
          <br />
          Twitter:{' '}
          <Anchor href="https://twitter.com/reneviering">@reneviering</Anchor>
          <br />
          Github:{' '}
          <Anchor href="https://github.com/reneviering">reneviering</Anchor>
          <br />
        </p>
        <p>VAT ID: DE815780857</p>
      </div>
      <ul className={classes.Sitemap}>
        <li>
          <Anchor href="/">Home</Anchor>
        </li>
        <li>
          <Anchor href="/#talks">Talks</Anchor>
        </li>
        <li>
          <Anchor href="/blog">Blog</Anchor>
        </li>
        <li>
          <Anchor href="/imprint">Imprint</Anchor>
        </li>
        <li>
          <Anchor href="/privacy">Privacy Policy</Anchor>
        </li>
      </ul>
    </div>
  </footer>
);

export default injectSheet(styles)(Footer);
