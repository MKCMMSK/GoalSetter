import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Project, Analytics } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Project" component={Project} />
    <Route path="/Analytics" component={Analytics} />
  </Switch>
);

export default Routes;
