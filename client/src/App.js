import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import PrivateRoute from './components/PrivateRoute';

import Landing from './pages/Landing';
import SignIn from './pages/SignIn';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </Router>
);

export default App;
