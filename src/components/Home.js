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
        <div style={styles.mainContent}>
          <p> I'm a front end engineer and product manager. </p>
          <p> Please check out my <Link to={'/work'} style={styles.link}>work</Link> or <Link to={'/contact'} style={styles.link}>contact me</Link>! </p>
        </div>
        { /* <div style={styles.circle}></div> */ }
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
    // border: '1px solid pink',

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

    fontSize: '600%',

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

  circle: {
    borderRadius: 1000,
    backgroundColor: 'lightgreen',

    width: 550,
    height: 550,
    position: 'absolute',
    zIndex: -1,
  },

  link: {
    textDecoration: 'none',
    color: colors.pink,
  }


}


export default Home;
