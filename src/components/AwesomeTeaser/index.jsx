import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Teaser: {
    backgroundImage: props => `url(${props.backgroundUrl})`,
    backgroundSize: 'cover',
    minHeight: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    paddingTop: 80
  },
  Headline: {
    marginBottom: 0
  },
  PersonInfo: {
    textAlign: 'center'
  },
  Avatar: {
    width: '40vh',
    height: '40vh',
    maxWidth: '180px',
    maxHeight: '180px',
    borderRadius: '50%',
    '@media(min-width: 700px)': {
      maxWidth: '250px',
      maxHeight: '250px'
    }
  }
};

const Teaser = ({ classes, backgroundUrl, avatarUrl }) => (
  <header className={classes.Teaser}>
    <img className={classes.Avatar} src={avatarUrl} alt="Avatar René Viering" />
    <h1 className={classes.Headline}>René Viering</h1>
    <p className={classes.PersonInfo}>
      JavaScript Freelancer
      <br />
      <small>Kassel, Germany</small>
    </p>
  </header>
);

export default injectSheet(styles)(Teaser);
