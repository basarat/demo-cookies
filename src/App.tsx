import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/dummy" component={() => null} />
  </Switch>
);

export default App;


