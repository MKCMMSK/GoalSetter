import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Project } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Project" component={Project} />
  </Switch>
);

export default Routes;
