import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Projects, Analytics, Landing } from './containers';
import Login from './components/Login';
import Register from './components/Register';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/analytics" component={Analytics} />
    <Route exact path="/Login" component={Login} />
    {/* <Route exact path="/Register" component={Register} /> */}
  </Switch>
);

export default Routes;
