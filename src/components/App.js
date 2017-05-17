import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import Main from './Main';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar parent={this} />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
