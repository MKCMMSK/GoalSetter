import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Projects, Analytics } from './containers';
import Login from './components/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/analytics" component={Analytics} />
    <Route exact path="/Login" component={Login} />

  </Switch>
);

export default Routes;
