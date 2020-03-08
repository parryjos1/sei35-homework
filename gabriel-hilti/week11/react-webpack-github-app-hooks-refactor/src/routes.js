import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import { Search } from './components/Search';
import Profile from './components/Profile';



const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route path="/profile" component={ Search } />
      <Route exact path="/profile/:user" component={ Profile } />
    </div>
  </Router>
);

export default Routes;
