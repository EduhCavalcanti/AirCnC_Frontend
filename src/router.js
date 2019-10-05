import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import New from './pages/new';
import Dashboard from './pages/dashboard';

export default function Routes(){
   return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/new' component={New}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
   );
};