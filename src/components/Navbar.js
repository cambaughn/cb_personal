import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import colors from '../util/colors';
import font from '../util/fonts';

const Navbar = () => {

  return (
    <div style={styles.nav} >
      <Link to={'/'} style={styles.brand}>
        <h1> CAMERON BAUGHN </h1>
      </Link>

      <div style={styles.linkWrapper}>
        <Link to={'/'} style={styles.link}>
          home
        </Link>

        <Link to={'/work'} style={styles.link}>
          work
        </Link>

        <Link to={'/contact'} style={styles.link}>
          contact
        </Link>
      </div>
    </div>
  )
}

const styles = {
  nav: {
    height: 80,
    minWidth: 600,

    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 80,
    paddingRight: 100,

  },

  brand: {
    fontFamily: 'Oswald',
    fontWeight: '700',

    color: '#E32F86',

    textDecoration: 'none',
  },

  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 300,

  },

  link: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',

    textDecoration: 'none',
    color: colors.black,
  },

}

export default Navbar;
