import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import colors from '../util/colors';
import font from '../util/fonts';

const Contact = () => {

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
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
    height: window.innerHeight - 150,
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


  a: {
    textDecoration: 'none',
    color: colors.pink,
    fontSize: '150%',

    fontFamily: font.nav_links,
    fontWeight: font.heavy,
  }
}


export default Contact;
