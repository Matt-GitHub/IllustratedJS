import React from 'react';
import Home from './components/marketing/Home';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { isLoading, user } = useAuth0;
  console.log('user', user);
  return (
    <div>
      <Auth0Provider
        domain="illustratedjs.us.auth0.com"
        clientId="1KwBPIfZaYuoaBQWJqeVw3f2e2rXK4HB"
        redirectUri={`${window.location.origin}/content`}
      >
        <Home />
      </Auth0Provider>
    </div>
  );
}

export default App;
