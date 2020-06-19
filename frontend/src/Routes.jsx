import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Projects, Analytics } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/analytics" component={Analytics} />
  </Switch>
);

export default Routes;
