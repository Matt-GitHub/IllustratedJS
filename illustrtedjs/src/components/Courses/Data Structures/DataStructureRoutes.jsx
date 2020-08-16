import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sll from './SLL/SLL';
const DSRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/Content/DataStructures/LinkedLists">
          <Sll />
        </Route>
        <Route path="/Content/DataStructures/*">
          <Redirect to="/Content" />
        </Route>
      </Switch>
    </div>
  );
};

export default DSRoutes;
