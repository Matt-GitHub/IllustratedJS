import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Intro from '../Pages/Intro';
import Overview from '../Pages/Overview';
import ArrayVsLinkedList from '../Pages/ArrayVsLinkedList';
import LinkedListStructure from '../Pages/LinkedListStructure';
import NodeClass from './NodeClass';
const PageRoutes = ({ content }) => {
  return (
    <div>
      <Switch>
        <Route path="/Content/DataStructures/LinkedLists/Intro">
          <Intro content={content} />
        </Route>
        <Route path="/Content/DataStructures/LinkedLists/Overview">
          <Overview content={content} />
        </Route>
        <Route path="/Content/DataStructures/LinkedLists/ArrayVsLinkedList">
          <ArrayVsLinkedList content={content} />
        </Route>
        <Route path="/Content/DataStructures/LinkedLists/LinkedListStructure">
          <LinkedListStructure content={content} />
        </Route>
        <Route path="/Content/DataStructures/LinkedLists/NodeClass">
          <NodeClass content={content} />
        </Route>
      </Switch>
    </div>
  );
};

export default PageRoutes;
