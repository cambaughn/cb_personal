import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        <Route exact={true} path={`/`} component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
