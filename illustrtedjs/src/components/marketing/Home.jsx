import React from 'react';
import Navigation from './Navigation';
import UnauthenticatedRoutes from './Unauthenticated';
const Home = () => {
  return (
    <div>
      <Navigation />
      <UnauthenticatedRoutes />
    </div>
  );
};

export default Home;
