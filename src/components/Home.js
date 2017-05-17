import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import colors from '../util/colors';
import font from '../util/fonts';

const Home = () => {

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
        {/*<img src={require('../assets/images/paint1.png')} style={styles.paint} /> */}
        <h1 style={styles.headline}> HELLO THERE </h1>
        <p style={styles.mainContent}> I'm a front end engineer and product manager. </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    width: '100%',
    height: 500,

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
    // border: '1px solid pink',

  },

  headline: {
    color: colors.black,
    fontFamily: font.main,
    fontWeight: font.heavy,
    position: 'relative',

    fontSize: '600%',

    marginTop: 0,
    marginBottom: '-10px',
  },

  mainContent: {
    position: 'relative',
    color: colors.black,
    fontSize: '125%',

  },

  paint: {
    width: 600,
    height: 'auto',
    position: 'absolute'
  },


}


export default Home;
