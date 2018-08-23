import React from 'react';
import injectSheet from 'react-jss';

import Link from '../Link';

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
  <footer className={ classes.Footer }>
    <div className={ classes.Content }>
      <p className={ classes.Copyright }>
        ©{ new Date().getFullYear() } René Viering
      </p>
      <div className={ classes.Contact }>
        <address className={ classes.Address }>
          René Viering <br />
          Wegelänge 74 <br />
          D-34132 Kassel<br />
        </address>
        <p>
          Mail: <Link href="mailto:hello@reneviering.com">hello@reneviering.com</Link><br/>
          Phone: +49 152 21044200<br/>
          Twitter: <Link href="https://twitter.com/reneviering">@reneviering</Link><br/>
          Github: <Link href="https://github.com/reneviering">reneviering</Link><br/>
        </p>
        <p>
          UST-ID: 1234567890
        </p>
      </div>
      <ul className={ classes.Sitemap }>
        <li><Link href="home">Home</Link></li>
        <li><Link href="tech:lounge">tech:lounge</Link></li>
        <li><Link href="talks">Talks</Link></li>
        <li><Link href="blog">Blog</Link></li>
      </ul>
    </div>
  </footer>
);

export default injectSheet(styles)(Footer);
