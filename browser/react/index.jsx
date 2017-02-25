'use strict'
import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import Main from './main';

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
    </Route>
  </Router>
)

export default routes;
