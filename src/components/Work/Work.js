import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import colors from '../../util/design/colors';
import font from '../../util/design/fonts';

const Work = () => {

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.headline}> MORE COMING SOON </h1>
        <div style={styles.mainContent}>
          <p> In the meantime, please check out my <a href='https://github.com/cambaughn' target='blank' style={styles.a}>GitHub</a>! </p>
        </div>
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

  headline: {
    color: colors.black,
    fontFamily: font.main,
    fontWeight: font.heavy,
    position: 'relative',

    fontSize: '400%',

    marginTop: 0,
    marginBottom: '-10px',
  },

  mainContent: {
    position: 'relative',
    color: colors.black,
    fontSize: '125%',

    textAlign: 'center',
  },

  paint: {
    width: 600,
    height: 'auto',
    position: 'absolute'
  },

  a: {
    textDecoration: 'none',
    color: colors.pink,
  }

}

export default Work;
