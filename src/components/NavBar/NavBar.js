import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../../util/design/colors';
import font from '../../util/design/fonts';

const NavBar = () => {

  return (
    <nav className="navbar navbar-default navbar-toggleable-md">

      <a className="navbar-brand" href="/">Cameron Baughn</a>

      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>

        </ul>
      </div>
    </nav>
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

    color: 'black',

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
    color: 'black',
  },

}

export default NavBar;
