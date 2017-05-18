import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import colors from '../util/colors';
import font from '../util/fonts';

const Contact = () => {

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.headline}> SAY HELLO </h1>
        <a href="mailto:cam.baughn@gmail.com?Subject=Hi" target="blank" style={styles.a}>
          <div style={styles.button}>CONTACT ME</div>
        </a>
      </div>
    </div>
  )
}

const styles = {
  page: {
    width: '100%',
    height: window.innerHeight - 180,
    minWidth: 500,

    display: 'flex',
    fledDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },

  button: {
    border: `2px solid ${colors.pink}`,
    padding: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },

  headline: {
    color: colors.black,
    fontFamily: font.main,
    fontWeight: font.heavy,
    position: 'relative',

    fontSize: '500%',

    marginTop: 0,
    marginBottom: '10px',
  },


  a: {
    textDecoration: 'none',
    color: colors.pink,
    fontSize: '150%',

    fontFamily: font.nav_links,
    fontWeight: font.heavy,
  }
}


export default Contact;
