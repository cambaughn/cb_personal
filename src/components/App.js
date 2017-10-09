import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './NavBar/NavBar';
import Home from './Home/Home';
import Work from './Work/Work';
import Contact from './Contact/Contact';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar parent={this} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
