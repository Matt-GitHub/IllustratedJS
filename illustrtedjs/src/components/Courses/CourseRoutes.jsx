import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataStructures from '../Courses/Data Structures/DataStructures';
import Courses from './Courses';
const CourseRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Content">
          <Courses />
        </Route>
        <Route exact path="/Content/DataStructures">
          <DataStructures />
        </Route>
      </Switch>
    </div>
  );
};

export default CourseRoutes;
