import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PrivateRoute from '../../ui/components/PrivateRoute';
import Landing from '../../ui/pages/Landing';
import SignIn from '../../ui/pages/SignIn';
import SignUp from '../../ui/pages/SignUp';
import Home from '../../ui/pages/Home';
import NotFound from '../../ui/pages/NotFound';

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
