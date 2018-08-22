import React from 'react';
import injectSheet from 'react-jss';

import background from '../../assets/teaser.jpg';
import avatar from '../../assets/avatar.jpg';


const styles = {
  Teaser: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    minHeight: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    paddingTop: 60
  },
  Avatar: {
    width: 250,
    height: 250,
    maxWidth: '50vw',
    maxHeight: '50vw',
    borderRadius: '50%'
  }
}

const Teaser = ({ classes }) => (
  <header className={ classes.Teaser }>
    <img className={ classes.Avatar } src={ avatar } alt="Avatar René Viering" />
    <h1>René Viering</h1>
    <p>
      JavaScript Freelancer<br />
      <small>Kassel, Germany</small>
    </p>
  </header>
);

export default injectSheet(styles)(Teaser);
