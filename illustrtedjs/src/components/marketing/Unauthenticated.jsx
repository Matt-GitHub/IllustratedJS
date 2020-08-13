import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Why from './WhyIJS';
import Content from './Content';
import Purchase from './Purchase';
const Unauthenticated = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Why />
        </Route>
        <Route path="/Content">
          <Content />
        </Route>
        <Route path="/Purchase">
          <Purchase />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default Unauthenticated;
