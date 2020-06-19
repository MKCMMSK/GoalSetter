import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Project, Analytics } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/analytics" component={Analytics} />
  </Switch>
);

export default Routes;
